import { siteData } from '@/config/siteData';

const SETTINGS_KEY = 'derap_site_settings_v1';

export const siteSettingsStore = {
  getSettings() {
    if (typeof window === 'undefined') {
      return {
        phone: siteData.siteInfo.contactPhone,
        email: siteData.siteInfo.contactEmail,
        address: siteData.siteInfo.postalAddress,
        linkedIn: siteData.siteInfo.linkedInUrl,
        cvUrl: siteData.siteInfo.cvUrl,
        passcode: '2026'
      };
    }

    try {
      const stored = localStorage.getItem(SETTINGS_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return {
          phone: parsed.phone || siteData.siteInfo.contactPhone,
          email: parsed.email || siteData.siteInfo.contactEmail,
          address: parsed.address || siteData.siteInfo.postalAddress,
          linkedIn: parsed.linkedIn || siteData.siteInfo.linkedInUrl,
          cvUrl: parsed.cvUrl || siteData.siteInfo.cvUrl,
          passcode: parsed.passcode || '2026'
        };
      }
    } catch (e) {
      console.error('Error reading site settings from storage:', e);
    }

    return {
      phone: siteData.siteInfo.contactPhone,
      email: siteData.siteInfo.contactEmail,
      address: siteData.siteInfo.postalAddress,
      linkedIn: siteData.siteInfo.linkedInUrl,
      cvUrl: siteData.siteInfo.cvUrl,
      passcode: '2026'
    };
  },

  updateSettings(newSettings) {
    if (typeof window === 'undefined') return;
    try {
      const current = this.getSettings();
      const updated = { ...current, ...newSettings };
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(updated));
      window.dispatchEvent(new Event('derap_settings_updated'));
      return updated;
    } catch (e) {
      console.error('Error saving site settings:', e);
      return null;
    }
  }
};
