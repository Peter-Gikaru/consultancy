'use client';

// Key constants for localStorage
const DELETED_MEDIA_KEY = 'meridian_deleted_media_urls';
const DELETED_POSTS_KEY = 'meridian_deleted_post_ids';
const CUSTOM_POSTS_KEY = 'meridian_custom_posts';
const UPLOADED_MEDIA_KEY = 'meridian_uploaded_media';

// Helper to get array from localStorage safely
function getStorageArray(key) {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Error reading localStorage key:', key, e);
    return [];
  }
}

// Helper to set array in localStorage safely
function setStorageArray(key, value) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
    // Dispatch custom event so other components/tabs re-render immediately
    window.dispatchEvent(new Event('meridian_store_change'));
  } catch (e) {
    console.error('Error writing localStorage key:', key, e);
  }
}

export const mediaStore = {
  // Track deleted media URLs
  getDeletedMediaUrls() {
    return getStorageArray(DELETED_MEDIA_KEY);
  },
  markMediaDeleted(url) {
    const current = getStorageArray(DELETED_MEDIA_KEY);
    if (!current.includes(url)) {
      setStorageArray(DELETED_MEDIA_KEY, [...current, url]);
    }
  },

  // Track deleted post IDs
  getDeletedPostIds() {
    return getStorageArray(DELETED_POSTS_KEY);
  },
  markPostDeleted(id) {
    const current = getStorageArray(DELETED_POSTS_KEY);
    if (!current.includes(id)) {
      setStorageArray(DELETED_POSTS_KEY, [...current, id]);
    }
  },

  // Custom posts saved in browser
  getCustomPosts() {
    return getStorageArray(CUSTOM_POSTS_KEY);
  },
  addCustomPost(post) {
    const current = getStorageArray(CUSTOM_POSTS_KEY);
    setStorageArray(CUSTOM_POSTS_KEY, [post, ...current]);
  },
  removeCustomPost(id) {
    const current = getStorageArray(CUSTOM_POSTS_KEY);
    setStorageArray(CUSTOM_POSTS_KEY, current.filter(p => p.id !== id));
  },

  // Custom uploaded media saved in browser
  getUploadedMedia() {
    return getStorageArray(UPLOADED_MEDIA_KEY);
  },
  addUploadedMedia(item) {
    const current = getStorageArray(UPLOADED_MEDIA_KEY);
    setStorageArray(UPLOADED_MEDIA_KEY, [item, ...current]);
  },

  // Filter static items by checking if their image or ID was deleted
  filterActiveItems(items, idKey = 'id', imageKey = 'image') {
    const deletedUrls = this.getDeletedMediaUrls();
    const deletedIds = this.getDeletedPostIds();

    return items.filter(item => {
      if (item[idKey] && deletedIds.includes(item[idKey])) {
        return false;
      }
      if (item[imageKey] && deletedUrls.includes(item[imageKey])) {
        return false;
      }
      if (item.mediaUrl && deletedUrls.includes(item.mediaUrl)) {
        return false;
      }
      return true;
    });
  }
};
