export function getImageUrl(url) {
  if (!url) return '';
  if (
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('data:') ||
    url.startsWith('blob:')
  ) {
    return url;
  }

  let basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (!basePath && typeof window !== 'undefined' && window.location.pathname.startsWith('/consultancy')) {
    basePath = '/consultancy';
  }

  const cleanUrl = url.startsWith('/') ? url : `/${url}`;
  if (basePath && cleanUrl.startsWith(basePath)) {
    return cleanUrl;
  }
  return `${basePath}${cleanUrl}`;
}
