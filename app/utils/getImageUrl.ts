export function getImageUrl(images: any): string {
  const FALLBACK_IMAGE = 'https://placehold.co/400x400/e5e7eb/999999?text=No+Image';

  if (!images) return FALLBACK_IMAGE;

  let imageArray: string[] = [];

  // Handle JSON stringified arrays
  if (typeof images === 'string') {
    if (images.startsWith('[')) {
      try {
        imageArray = JSON.parse(images);
      } catch {
        imageArray = [images];
      }
    } else {
      imageArray = [images];
    }
  } else if (Array.isArray(images)) {
    imageArray = images;
  }

  // Find first valid image URL
  for (const img of imageArray) {
    if (typeof img === 'string' && img.trim()) {
      // Skip SVGs and invalid URLs
      if (!img.includes('.svg') && !img.includes('cheaney.co.uk')) {
        return img;
      }
    }
  }

  return FALLBACK_IMAGE;
}
