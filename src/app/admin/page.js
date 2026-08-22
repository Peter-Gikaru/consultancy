'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { siteSettingsStore } from '@/utils/siteSettingsStore';
import { mediaStore } from '@/utils/mediaStore';
import {
  Lock,
  Unlock,
  Upload,
  FileText,
  Image as ImageIcon,
  Trash2,
  Check,
  ArrowRight,
  ShieldCheck,
  Settings,
  Phone,
  Mail,
  MapPin,
  FileDown,
  Layers
} from 'lucide-react';

export default function AdminStudioPage() {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcodeError, setPasscodeError] = useState('');

  const [activeTab, setActiveTab] = useState('settings');
  
  const [settingsForm, setSettingsForm] = useState(siteSettingsStore.getSettings());
  const [settingsSavedMessage, setSettingsSavedMessage] = useState('');

  const [posts, setPosts] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedMediaList, setUploadedMediaList] = useState([]);
  const [uploadMessage, setUploadMessage] = useState('');

  const [articleTitle, setArticleTitle] = useState('');
  const [articleCategory, setArticleCategory] = useState('Evaluation Methods');
  const [articleSummary, setArticleSummary] = useState('');
  const [articleReadTime, setArticleReadTime] = useState('5 min read');
  const [publishing, setPublishing] = useState(false);
  const [publishSuccess, setPublishSuccess] = useState('');

  useEffect(() => {
    
    fetch('/api/auth')
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated) {
          setIsAuthenticated(true);
          fetchPosts();
          fetchMedia();
        }
      })
      .catch(() => {});
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setPasscodeError('');

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passcode })
      });

      const data = await res.json();

      if (data.success) {
        setIsAuthenticated(true);
        setPasscode('');
        fetchPosts();
        fetchMedia();
      } else {
        setPasscodeError(data.error || 'Invalid passcode.');
      }
    } catch (err) {
      setPasscodeError('Authentication error. Please try again.');
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth', { method: 'DELETE' });
    } finally {
      setIsAuthenticated(false);
    }
  };

  const handleSaveSettings = (e) => {
    e.preventDefault();
    siteSettingsStore.updateSettings(settingsForm);
    setSettingsSavedMessage('Site contact details, social links & CV updated successfully!');
    setTimeout(() => setSettingsSavedMessage(''), 4000);
  };

  const fetchPosts = async () => {
    const custom = mediaStore.getCustomPosts();
    setPosts(custom);
  };

  const fetchMedia = async () => {
    const uploadedCustom = mediaStore.getUploadedMedia();
    setUploadedMediaList(uploadedCustom);
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    setUploading(true);
    setUploadMessage('');

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });

      const data = await res.json();

      if (data.success) {
        const isPdf = data.mediaType === 'pdf';
        const newItem = {
          url: data.url,
          fileName: data.fileName,
          mediaType: data.mediaType
        };
        mediaStore.addUploadedMedia(newItem);

        if (isPdf) {
          setSettingsForm((prev) => ({ ...prev, cvUrl: data.url }));
          siteSettingsStore.updateSettings({ cvUrl: data.url });
          setUploadMessage(`Uploaded ${selectedFile.name} successfully and set as Lead Consultant CV!`);
        } else {
          setUploadMessage(`Uploaded ${selectedFile.name} successfully!`);
        }

        fetchMedia();
        setSelectedFile(null);
      } else {
        setUploadMessage(data.error || 'Upload failed. Please try again.');
      }
    } catch (err) {
      setUploadMessage('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleCreateArticle = (e) => {
    e.preventDefault();
    setPublishing(true);

    const newArticle = {
      id: `article-${Date.now()}`,
      title: articleTitle,
      summary: articleSummary,
      category: articleCategory,
      readTime: articleReadTime,
      date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    };

    mediaStore.addCustomPost(newArticle);
    setPublishSuccess('🎉 Insights article published successfully!');
    setArticleTitle('');
    setArticleSummary('');
    fetchPosts();
    setPublishing(false);
  };

  if (!isAuthenticated) {
    return (
      <div style={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--bg-canvas)',
        padding: '24px'
      }}>
        <div style={{
          maxWidth: '440px',
          width: '100%',
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 20px 50px rgba(15, 23, 42, 0.08)',
          border: '1px solid var(--border-light)',
          textAlign: 'center'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '16px',
            backgroundColor: 'var(--bg-subtle)',
            color: 'var(--accent-amber)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px'
          }}>
            <Lock size={28} />
          </div>

          <h2 style={{ fontSize: '1.75rem', color: 'var(--text-main)', marginBottom: '8px', fontFamily: 'var(--font-lora)' }}>
            Admin Portal Login
          </h2>

          <p style={{ color: 'var(--text-subtle)', fontSize: '0.95rem', marginBottom: '28px' }}>
            DERAP Consult Limited — Site Settings, Contact Numbers, CV &amp; Insights Management Studio.
          </p>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <label htmlFor="passcode-input" style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-main)', textAlign: 'left' }}>
              Admin Passcode
            </label>
            <input
              id="passcode-input"
              type="password"
              placeholder="Enter passcode (default: 2026)"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '10px',
                border: '1px solid var(--border-accent)',
                fontSize: '1rem',
                textAlign: 'center',
                letterSpacing: '0.1em'
              }}
            />

            {passcodeError && (
              <div role="status" aria-live="polite" style={{ color: '#DC2626', fontSize: '0.875rem', fontWeight: '600' }}>
                {passcodeError}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '14px' }}
            >
              Unlock Admin Portal <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '90vh', backgroundColor: 'var(--bg-canvas)', padding: '20px 24px 60px' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '32px',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-amber-hover)', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase' }}>
              <ShieldCheck size={16} /> DERAP Consult Admin Studio
            </div>
            <h1 style={{ fontSize: '2.4rem', color: 'var(--text-main)', margin: '4px 0 0', fontFamily: 'var(--font-lora)' }}>
              Site Settings &amp; Content Management
            </h1>
          </div>

          <button
            onClick={handleLogout}
            className="btn btn-secondary btn-sm"
          >
            Lock Session <Lock size={16} />
          </button>
        </div>

        <div style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '32px',
          borderBottom: '1px solid var(--border-light)',
          paddingBottom: '16px',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => setActiveTab('settings')}
            className={`btn ${activeTab === 'settings' ? 'btn-primary' : 'btn-secondary'} btn-sm`}
          >
            <Settings size={16} /> Contact Details &amp; CV Link
          </button>

          <button
            onClick={() => setActiveTab('publish')}
            className={`btn ${activeTab === 'publish' ? 'btn-primary' : 'btn-secondary'} btn-sm`}
          >
            <FileText size={16} /> Publish Methods Article
          </button>

          <button
            onClick={() => setActiveTab('media')}
            className={`btn ${activeTab === 'media' ? 'btn-primary' : 'btn-secondary'} btn-sm`}
          >
            <Upload size={16} /> Upload Media &amp; PDF CV
          </button>
        </div>

        {activeTab === 'settings' && (
          <div className="card" style={{ padding: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>
              Update Site Contact Details &amp; Links
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-subtle)', marginBottom: '24px' }}>
              Changes saved here update the phone numbers, contact email, address, LinkedIn URL, and CV download link across all website pages dynamically.
            </p>

            {settingsSavedMessage && (
              <div role="status" aria-live="polite" style={{ padding: '14px 20px', backgroundColor: 'rgba(20, 83, 45, 0.1)', color: '#14532D', borderRadius: '10px', fontWeight: '600', marginBottom: '24px' }}>
                {settingsSavedMessage}
              </div>
            )}

            <form onSubmit={handleSaveSettings} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <label htmlFor="phone-input" style={{ display: 'block', fontWeight: '700', fontSize: '0.9rem', marginBottom: '6px' }}>
                  Telephone Number *
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    id="phone-input"
                    type="text"
                    required
                    value={settingsForm.phone}
                    onChange={(e) => setSettingsForm({ ...settingsForm, phone: e.target.value })}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--border-accent)', fontSize: '1rem' }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email-input" style={{ display: 'block', fontWeight: '700', fontSize: '0.9rem', marginBottom: '6px' }}>
                  Contact Email Address *
                </label>
                <input
                  id="email-input"
                  type="email"
                  required
                  value={settingsForm.email}
                  onChange={(e) => setSettingsForm({ ...settingsForm, email: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--border-accent)', fontSize: '1rem' }}
                />
              </div>

              <div>
                <label htmlFor="address-input" style={{ display: 'block', fontWeight: '700', fontSize: '0.9rem', marginBottom: '6px' }}>
                  Postal &amp; Office Address
                </label>
                <input
                  id="address-input"
                  type="text"
                  value={settingsForm.address}
                  onChange={(e) => setSettingsForm({ ...settingsForm, address: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--border-accent)', fontSize: '1rem' }}
                />
              </div>

              <div>
                <label htmlFor="linkedin-input" style={{ display: 'block', fontWeight: '700', fontSize: '0.9rem', marginBottom: '6px' }}>
                  LinkedIn Company Page URL
                </label>
                <input
                  id="linkedin-input"
                  type="url"
                  placeholder="https://www.linkedin.com/company/derap-consult-limited"
                  value={settingsForm.linkedIn}
                  onChange={(e) => setSettingsForm({ ...settingsForm, linkedIn: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--border-accent)', fontSize: '1rem' }}
                />
              </div>

              <div style={{ gridColumn: 'span 2' }}>
                <label htmlFor="cvurl-input" style={{ display: 'block', fontWeight: '700', fontSize: '0.9rem', marginBottom: '6px' }}>
                  Lead Consultant CV Download URL / Path
                </label>
                <input
                  id="cvurl-input"
                  type="text"
                  value={settingsForm.cvUrl}
                  onChange={(e) => setSettingsForm({ ...settingsForm, cvUrl: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--border-accent)', fontSize: '1rem' }}
                />
                <span style={{ fontSize: '0.825rem', color: 'var(--text-subtle)', marginTop: '4px', display: 'block' }}>
                  Note: You can also upload a new PDF CV directly using the "Upload Media" tab to automatically set this URL.
                </span>
              </div>

              <div style={{ gridColumn: 'span 2', marginTop: '12px' }}>
                <button type="submit" className="btn btn-primary" style={{ padding: '14px 32px' }}>
                  Save All Settings Changes <Check size={18} />
                </button>
              </div>
            </form>
          </div>
        )}

        {activeTab === 'publish' && (
          <div className="card" style={{ padding: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>
              Publish Methods Note / Insight Article
            </h2>

            {publishSuccess && (
              <div role="status" aria-live="polite" style={{ padding: '14px 20px', backgroundColor: 'rgba(20, 83, 45, 0.1)', color: '#14532D', borderRadius: '10px', fontWeight: '600', marginBottom: '24px' }}>
                {publishSuccess}
              </div>
            )}

            <form onSubmit={handleCreateArticle} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label htmlFor="article-title-input" style={{ display: 'block', fontWeight: '700', fontSize: '0.9rem', marginBottom: '6px' }}>
                  Article Title *
                </label>
                <input
                  id="article-title-input"
                  type="text"
                  required
                  placeholder="e.g. Quasi-experimental evaluation designs in agricultural programmes"
                  value={articleTitle}
                  onChange={(e) => setArticleTitle(e.target.value)}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--border-accent)', fontSize: '1rem' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label htmlFor="article-category-input" style={{ display: 'block', fontWeight: '700', fontSize: '0.9rem', marginBottom: '6px' }}>
                    Category
                  </label>
                  <select
                    id="article-category-input"
                    value={articleCategory}
                    onChange={(e) => setArticleCategory(e.target.value)}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--border-accent)', fontSize: '1rem', backgroundColor: '#FFFFFF' }}
                  >
                    <option>Evaluation Methods</option>
                    <option>Data Integrity</option>
                    <option>Public Opinion</option>
                    <option>Sampling &amp; Weighting</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="article-readtime-input" style={{ display: 'block', fontWeight: '700', fontSize: '0.9rem', marginBottom: '6px' }}>
                    Estimated Read Time
                  </label>
                  <input
                    id="article-readtime-input"
                    type="text"
                    value={articleReadTime}
                    onChange={(e) => setArticleReadTime(e.target.value)}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--border-accent)', fontSize: '1rem' }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="article-summary-input" style={{ display: 'block', fontWeight: '700', fontSize: '0.9rem', marginBottom: '6px' }}>
                  Article Summary / Abstract *
                </label>
                <textarea
                  id="article-summary-input"
                  required
                  rows={4}
                  placeholder="Summary of evaluation methodology or insights..."
                  value={articleSummary}
                  onChange={(e) => setArticleSummary(e.target.value)}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--border-accent)', fontSize: '1rem' }}
                />
              </div>

              <div>
                <button type="submit" disabled={publishing} className="btn btn-primary" style={{ padding: '14px 32px' }}>
                  Publish Insight Article <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </div>
        )}

        {activeTab === 'media' && (
          <div className="card" style={{ padding: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>
              Upload Photos, Videos or CV (PDF)
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-subtle)', marginBottom: '24px' }}>
              Select a file to upload (`.pdf`, `.jpg`, `.png`, `.mp4`). Uploading a `.pdf` file will automatically update the lead consultant's CV download link.
            </p>

            <form onSubmit={handleFileUpload} style={{ marginBottom: '32px' }}>
              <div style={{
                border: '2px dashed var(--border-accent)',
                borderRadius: '12px',
                padding: '36px',
                textAlign: 'center',
                backgroundColor: 'var(--bg-canvas)',
                marginBottom: '20px'
              }}>
                <label htmlFor="file-upload-input" style={{ display: 'block', fontWeight: '700', fontSize: '0.9rem', marginBottom: '12px' }}>
                  Choose Media or Document File
                </label>
                <input
                  id="file-upload-input"
                  type="file"
                  accept="image/*,video/*,.pdf"
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                  style={{ marginBottom: '12px' }}
                />
                {selectedFile && (
                  <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-main)' }}>
                    Selected: {selectedFile.name} ({(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)
                  </div>
                )}
              </div>

              {uploadMessage && (
                <div role="status" aria-live="polite" style={{
                  padding: '12px 18px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(20, 83, 45, 0.1)',
                  color: '#14532D',
                  fontWeight: '600',
                  marginBottom: '20px'
                }}>
                  {uploadMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={!selectedFile || uploading}
                className="btn btn-primary"
                style={{ padding: '12px 28px' }}
              >
                {uploading ? 'Uploading Asset...' : 'Upload Selected File'} <Upload size={18} />
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
