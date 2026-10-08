import React from 'react';
import { GsapParallaxImage } from './GsapParallaxImage';
import { Compass, Sparkles } from 'lucide-react';

interface EditorialParallaxBannerProps {
  imageSrc: string;
  fallbackSrc?: string;
  alt: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  quote?: string;
  citation?: string;
  coordinates?: string;
  heightClass?: string;
  speed?: number;
}

export const EditorialParallaxBanner: React.FC<EditorialParallaxBannerProps> = ({
  imageSrc,
  fallbackSrc,
  alt,
  eyebrow = 'Editorial Archive',
  title,
  subtitle,
  quote,
  citation,
  coordinates = '34.0837° N, 74.7973° E · SRINAGAR, KASHMIR',
  heightClass = 'h-[55vh] min-h-[420px] max-h-[700px]',
  speed = 0.28
}) => {
  return (
    <section className={`relative w-full ${heightClass} overflow-hidden border-t border-b border-white/10`}>
      {/* Performant GSAP Parallax Full-Width Background */}
      <GsapParallaxImage
        src={imageSrc}
        fallbackSrc={fallbackSrc}
        alt={alt}
        speed={speed}
        scale={1.25}
        fullBleed={true}
        className="w-full h-full object-cover filter brightness-[0.6] contrast-[1.15]"
        overlayClassName="bg-gradient-to-t from-[#0b0b0d] via-transparent to-[#0b0b0d]"
      />

      {/* Subtle Kashmir Pattern Accent */}
      <div className="absolute inset-0 bg-kashmir-pattern opacity-20 pointer-events-none" />

      {/* Editorial Content Overlay */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between py-12 md:py-16 text-[#f5f2eb]">
        {/* Top Eyebrow & Coordinates */}
        <div className="flex items-center justify-between text-xs tracking-[0.25em] uppercase text-[#d8be8a] font-light">
          <div className="flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-[#d8be8a]" />
            <span>{eyebrow}</span>
          </div>
          <span className="hidden sm:inline font-mono text-[11px] text-[#a39e94]">
            {coordinates}
          </span>
        </div>

        {/* Center Editorial Title or Archival Quote */}
        <div className="max-w-3xl my-auto">
          {quote ? (
            <div className="space-y-4">
              <blockquote className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-[#fbf9f5] leading-snug tracking-wide">
                “{quote}”
              </blockquote>
              {citation && (
                <p className="text-xs uppercase tracking-[0.2em] text-[#d8be8a] font-mono">
                  — {citation}
                </p>
              )}
            </div>
          ) : (
            <div>
              <h3 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#fbf9f5] tracking-tight leading-[1.08] mb-4 uppercase">
                {title}
              </h3>
              {subtitle && (
                <p className="text-sm sm:text-base text-[#d4cfc5] font-light max-w-xl leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Bottom Editorial Details */}
        <div className="flex items-center justify-between border-t border-white/10 pt-4 text-[11px] uppercase tracking-[0.2em] text-[#8f8a80]">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#d8be8a]" />
            Natural Mountain Light
          </span>
          <span>100% Handcrafted Atelier Provenance</span>
        </div>
      </div>
    </section>
  );
};
