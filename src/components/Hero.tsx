import React from 'react';
import { ArrowDown, MapPin } from 'lucide-react';
import { IMAGE_INVENTORY } from '../data/images';
import { GsapParallaxImage } from './GsapParallaxImage';

interface HeroProps {
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[720px] flex items-center justify-center overflow-hidden bg-[#08080a]"
    >
      {/* Background Cinematic Environment: Performant GSAP Scroll Parallax */}
      <GsapParallaxImage
        src={IMAGE_INVENTORY.hero.primary}
        fallbackSrc={IMAGE_INVENTORY.hero.fallback}
        alt={IMAGE_INVENTORY.hero.alt}
        speed={0.25}
        scale={1.22}
        fullBleed={true}
        startTrigger="top top"
        endTrigger="bottom top"
        className="w-full h-full object-cover object-center filter brightness-[0.52] contrast-[1.12]"
        overlayClassName="bg-gradient-to-t from-[#0b0b0d] via-[#0b0b0d]/40 to-[#0b0b0d]/70"
      />

      {/* Side Scrim for Editorial Depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0d]/70 via-transparent to-[#0b0b0d]/70 pointer-events-none z-[1]" />

      {/* Subtle Kashmir Paisley Jali Pattern Accent */}
      <div className="absolute inset-0 z-[2] bg-kashmir-pattern opacity-25 pointer-events-none" />

      {/* Hero Editorial Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full text-center flex flex-col items-center pt-16">
        {/* Editorial Eyebrow */}
        <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#d8be8a] mb-8 font-light">
          <span className="w-8 h-[1px] bg-[#d8be8a]/60" />
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-[#d8be8a]" />
            Direct Srinagar Atelier · Ladakh Changthang Fleece
          </span>
          <span className="w-8 h-[1px] bg-[#d8be8a]/60" />
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif tracking-[0.08em] text-[#f5f2eb] leading-[0.98] uppercase mb-8 select-none">
          Woven in <br />
          <span className="italic font-light text-gold-gradient font-serif">Kashmir</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#d4cfc5] font-light tracking-wide max-w-2xl mx-auto mb-12 leading-relaxed">
          Crafted by hand. Preserved for generations.
        </p>

        {/* Editorial Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-md">
          <button
            onClick={onExplore}
            className="w-full sm:w-auto px-9 py-4 bg-[#f5f2eb] text-[#0b0b0d] text-xs uppercase tracking-[0.24em] font-medium hover:bg-[#d8be8a] hover:text-[#0b0b0d] transition-all duration-300 shadow-2xl cursor-pointer"
          >
            Explore the Collection
          </button>

          <a
            href="#craftsmanship"
            className="w-full sm:w-auto px-7 py-4 border border-white/20 text-[#f5f2eb] text-xs uppercase tracking-[0.24em] font-light hover:border-[#d8be8a] hover:text-[#d8be8a] transition-all duration-300 text-center"
          >
            Discover Craft
          </a>
        </div>

        {/* Atmospheric Trust Footnote */}
        <div className="mt-16 pt-8 border-t border-white/10 w-full max-w-2xl flex items-center justify-between text-[11px] sm:text-xs tracking-[0.18em] uppercase text-[#9c978d]">
          <span>100% Changthangi Cashmere</span>
          <span className="hidden sm:inline">·</span>
          <span>Registered GI Provenance</span>
          <span className="hidden sm:inline">·</span>
          <span>Zero Middlemen</span>
        </div>
      </div>

      {/* Quiet Scroll Indicator */}
      <a
        href="#story"
        aria-label="Scroll to Heritage Story"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#9c978d] hover:text-[#f5f2eb] transition-colors group cursor-pointer"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#78746c] group-hover:text-[#d8be8a] transition-colors">
          Scroll
        </span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#d8be8a]" />
      </a>
    </section>
  );
};
