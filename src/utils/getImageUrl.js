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
  const basePath =
    process.env.NEXT_PUBLIC_BASE_PATH ||
    (process.env.NODE_ENV === 'production' ? '/consultancy' : '');
  const cleanUrl = url.startsWith('/') ? url : `/${url}`;
  if (basePath && cleanUrl.startsWith(basePath)) {
    return cleanUrl;
  }
  return `${basePath}${cleanUrl}`;
}
