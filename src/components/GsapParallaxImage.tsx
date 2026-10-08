import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SafeImage } from './SafeImage';

gsap.registerPlugin(ScrollTrigger);

export interface GsapParallaxImageProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  overlayClassName?: string;
  children?: React.ReactNode;
  speed?: number; // Parallax translation strength: 0.15 = subtle, 0.35 = pronounced
  scale?: number; // Base scale to ensure no edge clipping during parallax: default 1.22
  direction?: 'up' | 'down';
  scrub?: number | boolean;
  startTrigger?: string;
  endTrigger?: string;
  fullBleed?: boolean;
}

export const GsapParallaxImage: React.FC<GsapParallaxImageProps> = ({
  src,
  fallbackSrc,
  alt,
  className = '',
  containerClassName = '',
  overlayClassName = '',
  children,
  speed = 0.2,
  scale = 1.22,
  direction = 'up',
  scrub = 0.8,
  startTrigger = 'top bottom',
  endTrigger = 'bottom top',
  fullBleed = false
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const imageWrapper = imageWrapperRef.current;
    if (!container || !imageWrapper) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const travel = speed * 100;
    const startY = direction === 'up' ? -travel / 2 : travel / 2;
    const endY = direction === 'up' ? travel / 2 : -travel / 2;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageWrapper,
        {
          yPercent: startY,
          scale: scale,
          force3D: true
        },
        {
          yPercent: endY,
          scale: scale,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: startTrigger,
            end: endTrigger,
            scrub: scrub,
            invalidateOnRefresh: true
          }
        }
      );
    }, container);

    return () => ctx.revert();
  }, [speed, scale, direction, scrub, startTrigger, endTrigger]);

  const baseContainerClasses = fullBleed
    ? 'absolute inset-0 overflow-hidden pointer-events-none'
    : 'relative overflow-hidden';

  return (
    <div
      ref={containerRef}
      className={`${baseContainerClasses} ${containerClassName}`}
    >
      <div
        ref={imageWrapperRef}
        className="w-full h-full will-change-transform transform-gpu"
        style={{ transformOrigin: 'center center' }}
      >
        <SafeImage
          src={src}
          fallbackSrc={fallbackSrc}
          alt={alt}
          loading="eager"
          onLoad={() => {
            // Ensure ScrollTrigger trigger bounds remain accurate if geometry shifted
            ScrollTrigger.refresh();
          }}
          className={`w-full h-full object-cover ${className}`}
        />
      </div>

      {overlayClassName && (
        <div className={`absolute inset-0 pointer-events-none ${overlayClassName}`} />
      )}

      {children && (
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      )}
    </div>
  );
};

