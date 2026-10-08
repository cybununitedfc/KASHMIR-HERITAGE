import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Global in-memory cache to prevent redundant fetches and decodes across component lifecycle
const preloadedCache = new Set<string>();

export interface TexturePreloadState {
  isLoaded: boolean;
  progress: number; // 0 - 100
  loadedCount: number;
  totalCount: number;
  failedCount: number;
}

/**
 * Hook to preload high-resolution background textures for parallax sections.
 * Decodes images into memory via HTMLImageElement.decode() before section entry,
 * preventing layout shift and frame drops during fast scrolls.
 * Refreshes GSAP ScrollTrigger upon completion so all scroll bounds are pixel-perfect.
 */
export function useTexturePreloader(urls: string[]): TexturePreloadState {
  const [state, setState] = useState<TexturePreloadState>(() => {
    const total = urls.length;
    if (total === 0) {
      return { isLoaded: true, progress: 100, loadedCount: 0, totalCount: 0, failedCount: 0 };
    }
    const alreadyLoaded = urls.filter((url) => preloadedCache.has(url)).length;
    const isDone = alreadyLoaded === total;
    return {
      isLoaded: isDone,
      progress: isDone ? 100 : Math.round((alreadyLoaded / total) * 100),
      loadedCount: alreadyLoaded,
      totalCount: total,
      failedCount: 0
    };
  });

  const urlsRef = useRef(urls);
  urlsRef.current = urls;

  useEffect(() => {
    const targetUrls = urlsRef.current;
    if (!targetUrls || targetUrls.length === 0) {
      setState({ isLoaded: true, progress: 100, loadedCount: 0, totalCount: 0, failedCount: 0 });
      return;
    }

    let isMounted = true;
    let completed = targetUrls.filter((url) => preloadedCache.has(url)).length;
    let failed = 0;
    const total = targetUrls.length;

    if (completed === total) {
      setState({
        isLoaded: true,
        progress: 100,
        loadedCount: total,
        totalCount: total,
        failedCount: 0
      });
      // Synchronize ScrollTrigger with preloaded geometry
      ScrollTrigger.refresh();
      return;
    }

    // Safety timeout: if any network resource takes longer than 6 seconds, resolve gracefully
    const safetyTimer = window.setTimeout(() => {
      if (isMounted) {
        setState((prev) => ({
          ...prev,
          isLoaded: true,
          progress: 100
        }));
        ScrollTrigger.refresh();
      }
    }, 6000);

    const updateProgress = () => {
      if (!isMounted) return;
      const count = completed + failed;
      const newProgress = Math.min(100, Math.round((count / total) * 100));
      const allDone = count >= total;

      setState({
        isLoaded: allDone,
        progress: newProgress,
        loadedCount: completed,
        totalCount: total,
        failedCount: failed
      });

      if (allDone) {
        clearTimeout(safetyTimer);
        // Refresh ScrollTrigger to update trigger start/end coordinates now that images are in cache
        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
      }
    };

    targetUrls.forEach((url) => {
      if (preloadedCache.has(url)) {
        return;
      }

      const img = new Image();
      img.src = url;

      // Prefer decode() for off-main-thread image decoding
      if (typeof img.decode === 'function') {
        img
          .decode()
          .then(() => {
            preloadedCache.add(url);
            completed++;
            updateProgress();
          })
          .catch(() => {
            // Fallback: If decode fails (e.g. format quirk), check naturalWidth
            if (img.naturalWidth > 0) {
              preloadedCache.add(url);
              completed++;
            } else {
              failed++;
            }
            updateProgress();
          });
      } else {
        img.onload = () => {
          preloadedCache.add(url);
          completed++;
          updateProgress();
        };
        img.onerror = () => {
          failed++;
          updateProgress();
        };
      }
    });

    return () => {
      isMounted = false;
      clearTimeout(safetyTimer);
    };
  }, [urls]);

  return state;
}
