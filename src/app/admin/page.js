'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { mediaStore } from '@/utils/mediaStore';
import {
  Lock,
  Unlock,
  Upload,
  FileText,
  Image as ImageIcon,
  Video,
  Plus,
  Trash2,
  Check,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Layers,
  Film
} from 'lucide-react';

export default function AdminStudioPage() {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcodeError, setPasscodeError] = useState('');

  const [activeTab, setActiveTab] = useState('publish');
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(false);

  // Form State for New Post
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Policy & Governance');
  const [author, setAuthor] = useState('Built on Site Field Team');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [impactMetric, setImpactMetric] = useState('Verified Policy Reform');
  const [mediaType, setMediaType] = useState('image');
  const [mediaUrl, setMediaUrl] = useState('/images/policy-meeting.jpg');
  const [publishing, setPublishing] = useState(false);
  const [publishSuccess, setPublishSuccess] = useState('');

  // Media Upload State
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedMediaList, setUploadedMediaList] = useState([]);
  const [uploadMessage, setUploadMessage] = useState('');

  const CORRECT_PASSCODE = '2026';

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode === CORRECT_PASSCODE) {
      setIsAuthenticated(true);
      setPasscodeError('');
      fetchPosts();
      fetchMedia();
    } else {
      setPasscodeError('Invalid Passcode. Please enter 2026.');
    }
  };

  const fetchPosts = async () => {
    setLoadingPosts(true);
    let serverPosts = [];
    try {
      const res = await fetch('/api/posts');
      const data = await res.json();
      if (data.success) {
        serverPosts = data.posts;
      }
    } catch (e) {
      console.error('API fetch failed (expected on static host):', e);
    } finally {
      const custom = mediaStore.getCustomPosts();
      const combined = [...custom, ...serverPosts];
      const active = mediaStore.filterActiveItems(combined, 'id', 'mediaUrl');
      setPosts(active);
      setLoadingPosts(false);
    }
  };

  const fetchMedia = async () => {
    let serverMedia = [];
    try {
      const res = await fetch('/api/upload');
      const data = await res.json();
      if (data.success) {
        serverMedia = data.media;
      }
    } catch (e) {
      console.error('API fetch failed (expected on static host):', e);
    }
    const uploadedCustom = mediaStore.getUploadedMedia();
    const combined = [...uploadedCustom, ...serverMedia];
    const active = mediaStore.filterActiveItems(combined, 'url', 'url');
    setUploadedMediaList(active);
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    setUploading(true);
    setUploadMessage('');

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();

      if (data.success) {
        setUploadMessage(`Successfully uploaded ${data.fileName}!`);
        setMediaUrl(data.url);
        setMediaType(data.mediaType);
        mediaStore.addUploadedMedia(data);
        fetchMedia();
        setSelectedFile(null);
      } else {
        setUploadMessage(`Upload failed: ${data.error}`);
      }
    } catch (err) {
      // Fallback for static hosting: preview/object URL
      const objectUrl = URL.createObjectURL(selectedFile);
      const isVideo = selectedFile.type.startsWith('video/');
      const newItem = {
        url: objectUrl,
        fileName: selectedFile.name,
        mediaType: isVideo ? 'video' : 'image'
      };
      mediaStore.addUploadedMedia(newItem);
      setMediaUrl(objectUrl);
      setMediaType(newItem.mediaType);
      setUploadMessage(`Uploaded ${selectedFile.name} (client-side preview)!`);
      fetchMedia();
      setSelectedFile(null);
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteMedia = async (url) => {
    if (!window.confirm(`Are you sure you want to delete this media file?\n${url}`)) return;

    // Always mark as deleted in mediaStore so static and client views update immediately
    mediaStore.markMediaDeleted(url);
    setUploadedMediaList((prev) => prev.filter((m) => m.url !== url));

    try {
      await fetch('/api/upload', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });
    } catch (err) {
      console.log('Delete API call skipped or failed (static mode):', err);
    }
    alert('Photo deleted successfully!');
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    setPublishing(true);
    setPublishSuccess('');

    const newPostData = {
      id: `post-${Date.now()}`,
      title,
      category,
      author,
      date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      summary,
      content: content || summary,
      mediaType,
      mediaUrl,
      impactMetric,
      highlights: [summary]
    };

    // Save to mediaStore for client-side / static hosting persistence
    mediaStore.addCustomPost(newPostData);

    try {
      await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPostData)
      });
    } catch (err) {
      console.log('Post API call skipped or failed (static mode):', err);
    }

    setPublishSuccess('🎉 Field post published successfully to website!');
    setTitle('');
    setSummary('');
    setContent('');
    fetchPosts();
    setPublishing(false);
  };

  const handleDeletePost = async (id) => {
    if (!confirm('Are you sure you want to delete this field post?')) return;
    
    // Always mark as deleted in mediaStore
    mediaStore.markPostDeleted(id);
    mediaStore.removeCustomPost(id);
    fetchPosts();

    try {
      await fetch(`/api/posts?id=${id}`, { method: 'DELETE' });
    } catch (e) {
      console.error('Delete post API skipped or failed (static mode):', e);
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAF9',
        padding: '24px'
      }}>
        <div style={{
          maxWidth: '440px',
          width: '100%',
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          padding: '40px',
          boxShadow: '0 20px 50px rgba(15, 23, 42, 0.1)',
          border: '1px solid #E2E8F0',
          textAlign: 'center'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '20px',
            backgroundColor: 'rgba(154, 52, 18, 0.1)',
            color: '#9A3412',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px'
          }}>
            <Lock size={32} />
          </div>

          <h2 style={{ fontSize: '1.8rem', color: '#0F172A', marginBottom: '8px', fontFamily: 'var(--font-lora)' }}>
            Content Studio Login
          </h2>

          <p style={{ color: '#64748B', fontSize: '0.95rem', marginBottom: '28px' }}>
            Enter the studio passcode to manage field posts, upload photos, and add project videos.
          </p>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <input
              type="password"
              placeholder="Enter passcode (2026)"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 18px',
                borderRadius: '12px',
                border: '1px solid #CBD5E1',
                fontSize: '1.05rem',
                textAlign: 'center',
                letterSpacing: '0.1em'
              }}
            />

            {passcodeError && (
              <div style={{ color: '#DC2626', fontSize: '0.875rem', fontWeight: '600' }}>
                {passcodeError}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '1rem', backgroundColor: '#9A3412', borderColor: '#9A3412' }}
            >
              Unlock Content Studio <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '90vh', backgroundColor: '#FAFAF9', padding: '40px 24px 80px' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        {/* Studio Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '32px',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#14532D', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase' }}>
              <ShieldCheck size={16} /> Admin Media & Publishing Studio
            </div>
            <h1 style={{ fontSize: '2.5rem', color: '#0F172A', margin: '4px 0 0', fontFamily: 'var(--font-lora)' }}>
              Field Content Studio
            </h1>
          </div>

          <button
            onClick={() => setIsAuthenticated(false)}
            className="btn btn-secondary"
            style={{ fontSize: '0.9rem', padding: '10px 18px', borderColor: '#CBD5E1' }}
          >
            Lock Session <Lock size={16} />
          </button>
        </div>

        {/* Tab Navigation */}
        <div style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '32px',
          borderBottom: '1px solid #E2E8F0',
          paddingBottom: '16px'
        }}>
          <button
            onClick={() => setActiveTab('publish')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              borderRadius: '10px',
              border: 'none',
              backgroundColor: activeTab === 'publish' ? '#9A3412' : 'transparent',
              color: activeTab === 'publish' ? '#FFFFFF' : '#64748B',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            <FileText size={18} /> Publish New Post
          </button>

          <button
            onClick={() => setActiveTab('media')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              borderRadius: '10px',
              border: 'none',
              backgroundColor: activeTab === 'media' ? '#9A3412' : 'transparent',
              color: activeTab === 'media' ? '#FFFFFF' : '#64748B',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            <Upload size={18} /> Upload Photos & Videos
          </button>

          <button
            onClick={() => { setActiveTab('manage'); fetchPosts(); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              borderRadius: '10px',
              border: 'none',
              backgroundColor: activeTab === 'manage' ? '#9A3412' : 'transparent',
              color: activeTab === 'manage' ? '#FFFFFF' : '#64748B',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            <Layers size={18} /> Manage Published Posts ({posts.length})
          </button>
        </div>

        {/* TAB 1: Publish New Post */}
        {activeTab === 'publish' && (
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', padding: '40px', border: '1px solid #E2E8F0', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#0F172A', marginBottom: '24px' }}>
              Publish Field Dispatch / Policy Article
            </h3>

            {publishSuccess && (
              <div style={{ padding: '14px 20px', backgroundColor: 'rgba(20, 83, 45, 0.1)', color: '#14532D', borderRadius: '12px', fontWeight: '600', marginBottom: '24px' }}>
                {publishSuccess}
              </div>
            )}

            <form onSubmit={handleCreatePost} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div style={{ gridColumn: 'span 2' }}>
                <label style={{ display: 'block', fontWeight: '700', color: '#0F172A', marginBottom: '8px' }}>
                  Post Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kenya County Health Logistics Transformation 2026"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #CBD5E1', fontSize: '1rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: '700', color: '#0F172A', marginBottom: '8px' }}>
                  Sector Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #CBD5E1', fontSize: '1rem' }}
                >
                  <option>Policy & Governance</option>
                  <option>Health Systems</option>
                  <option>Climate & Resilience</option>
                  <option>Project Evaluation</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: '700', color: '#0F172A', marginBottom: '8px' }}>
                  Author / Field Office
                </label>
                <input
                  type="text"
                  placeholder="e.g. Dr. Amina Omondi, Nairobi Hub Lead"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #CBD5E1', fontSize: '1rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: '700', color: '#0F172A', marginBottom: '8px' }}>
                  Key Impact Metric
                </label>
                <input
                  type="text"
                  placeholder="e.g. 40% Reduction in Stock-Outs"
                  value={impactMetric}
                  onChange={(e) => setImpactMetric(e.target.value)}
                  style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #CBD5E1', fontSize: '1rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: '700', color: '#0F172A', marginBottom: '8px' }}>
                  Cover Media URL (Image or Video)
                </label>
                <input
                  type="text"
                  placeholder="/images/uploads/your-photo.jpg or /videos/uploads/video.mp4"
                  value={mediaUrl}
                  onChange={(e) => setMediaUrl(e.target.value)}
                  style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #CBD5E1', fontSize: '1rem' }}
                />
              </div>

              <div style={{ gridColumn: 'span 2' }}>
                <label style={{ display: 'block', fontWeight: '700', color: '#0F172A', marginBottom: '8px' }}>
                  Summary / Short Teaser *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Provide a 2-3 sentence overview of this field project or reform..."
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #CBD5E1', fontSize: '1rem' }}
                />
              </div>

              <div style={{ gridColumn: 'span 2' }}>
                <label style={{ display: 'block', fontWeight: '700', color: '#0F172A', marginBottom: '8px' }}>
                  Full Dispatch Details / Policy Text
                </label>
                <textarea
                  rows={6}
                  placeholder="Detailed breakdown of methodology, findings, and government partners involved..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #CBD5E1', fontSize: '1rem' }}
                />
              </div>

              <div style={{ gridColumn: 'span 2' }}>
                <button
                  type="submit"
                  disabled={publishing}
                  className="btn btn-primary"
                  style={{ padding: '16px 36px', fontSize: '1.05rem', backgroundColor: '#9A3412', borderColor: '#9A3412' }}
                >
                  {publishing ? 'Publishing Post...' : 'Publish Field Dispatch'} <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </div>
        )}

        {/* TAB 2: Upload Photos & Videos */}
        {activeTab === 'media' && (
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', padding: '40px', border: '1px solid #E2E8F0', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#0F172A', marginBottom: '12px' }}>
              Upload Photos & Videos
            </h3>
            <p style={{ color: '#64748B', marginBottom: '28px' }}>
              Upload project photos (`.jpg`, `.png`, `.webp`) or field videos (`.mp4`, `.webm`, `.mov`). Uploaded media is saved directly to your site directory.
            </p>

            <form onSubmit={handleFileUpload} style={{ marginBottom: '40px' }}>
              <div style={{
                border: '2px dashed #CBD5E1',
                borderRadius: '16px',
                padding: '40px',
                textAlign: 'center',
                backgroundColor: '#FAFAF9',
                marginBottom: '20px'
              }}>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '16px' }}>
                  <ImageIcon size={36} color="#9A3412" />
                  <Film size={36} color="#C59B27" />
                </div>
                <input
                  type="file"
                  accept="image/*,video/*"
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                  style={{ marginBottom: '16px' }}
                />
                {selectedFile && (
                  <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#0F172A' }}>
                    Selected: {selectedFile.name} ({(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)
                  </div>
                )}
              </div>

              {uploadMessage && (
                <div style={{
                  padding: '12px 18px',
                  borderRadius: '10px',
                  backgroundColor: uploadMessage.includes('failed') ? 'rgba(220, 38, 38, 0.1)' : 'rgba(20, 83, 45, 0.1)',
                  color: uploadMessage.includes('failed') ? '#DC2626' : '#14532D',
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
                style={{ padding: '14px 28px', backgroundColor: '#9A3412', borderColor: '#9A3412' }}
              >
                {uploading ? 'Uploading Asset...' : 'Upload Media File'} <Upload size={18} />
              </button>
            </form>

            {/* Media Gallery Grid with Image Previews & Delete Action */}
            {uploadedMediaList.length > 0 && (
              <div>
                <h4 style={{ fontSize: '1.2rem', color: '#0F172A', marginBottom: '20px', fontWeight: '700' }}>
                  Site Media Gallery ({uploadedMediaList.length} Photos &amp; Assets)
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
                  {uploadedMediaList.map((item, idx) => (
                    <div key={idx} style={{ border: '1px solid #E2E8F0', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#FAFAF9', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                      <div style={{ position: 'relative', height: '150px', backgroundColor: '#E2E8F0', overflow: 'hidden' }}>
                        {item.mediaType === 'video' ? (
                          <video src={item.url} controls style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                          <img src={item.url} alt={item.fileName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        )}
                        <span style={{
                          position: 'absolute',
                          top: '8px',
                          right: '8px',
                          backgroundColor: 'rgba(15, 23, 42, 0.85)',
                          color: '#FFFFFF',
                          padding: '3px 8px',
                          borderRadius: '8px',
                          fontSize: '0.7rem',
                          fontWeight: '700',
                          textTransform: 'uppercase'
                        }}>
                          {item.mediaType}
                        </span>
                      </div>

                      <div style={{ padding: '14px' }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#0F172A', marginBottom: '6px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {item.fileName}
                        </div>
                        <input
                          type="text"
                          readOnly
                          value={item.url}
                          style={{ width: '100%', fontSize: '0.78rem', padding: '6px 8px', borderRadius: '6px', border: '1px solid #CBD5E1', backgroundColor: '#FFFFFF', marginBottom: '10px' }}
                        />
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(item.url);
                              alert(`Copied image path: ${item.url}`);
                            }}
                            className="btn btn-outline btn-sm"
                            style={{ flex: 1, padding: '6px 10px', fontSize: '0.78rem', justifyContent: 'center' }}
                          >
                            Copy Path
                          </button>
                          <button
                            onClick={() => handleDeleteMedia(item.url)}
                            className="btn btn-outline btn-sm"
                            style={{ padding: '6px 10px', fontSize: '0.78rem', color: '#DC2626', borderColor: '#FCA5A5', backgroundColor: '#FEF2F2' }}
                            title="Delete photo permanently"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: Manage Published Posts */}
        {activeTab === 'manage' && (
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', padding: '40px', border: '1px solid #E2E8F0', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#0F172A', marginBottom: '24px' }}>
              Active Published Field Posts
            </h3>

            {loadingPosts ? (
              <p>Loading posts...</p>
            ) : posts.length === 0 ? (
              <p>No published field posts yet.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {posts.map((post) => (
                  <div key={post.id} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '20px',
                    borderRadius: '14px',
                    border: '1px solid #E2E8F0',
                    backgroundColor: '#FAFAF9'
                  }}>
                    <div>
                      <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#14532D', backgroundColor: 'rgba(20, 83, 45, 0.1)', padding: '4px 10px', borderRadius: '12px' }}>
                        {post.category}
                      </span>
                      <h4 style={{ fontSize: '1.15rem', color: '#0F172A', margin: '8px 0 4px', fontFamily: 'var(--font-inter)', fontWeight: '700' }}>
                        {post.title}
                      </h4>
                      <div style={{ fontSize: '0.85rem', color: '#64748B' }}>
                        Published {post.date} • {post.author}
                      </div>
                    </div>

                    <button
                      onClick={() => handleDeletePost(post.id)}
                      style={{
                        padding: '10px 16px',
                        borderRadius: '8px',
                        border: '1px solid #FCA5A5',
                        backgroundColor: '#FEF2F2',
                        color: '#DC2626',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontWeight: '600'
                      }}
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
