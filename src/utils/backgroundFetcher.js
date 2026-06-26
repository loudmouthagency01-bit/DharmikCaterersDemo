const galleryAssets = [
  // Gallery preview images
  "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  // Additional heavy assets
  "/reels/VID-20260621-WA0008.mp4",
  // Add other heavy gallery images if needed, but since they are in the public folder, they will be loaded when navigated to.
  // We can add the most critical ones here.
];

export const startBackgroundFetch = () => {
  // Use requestIdleCallback if available, otherwise setTimeout
  const runner = window.requestIdleCallback || ((cb) => setTimeout(cb, 1000));
  
  runner(() => {
    galleryAssets.forEach(url => {
      if (!url.endsWith('.mp4')) {
        const img = new Image();
        img.src = url;
      }
    });
  });
};
