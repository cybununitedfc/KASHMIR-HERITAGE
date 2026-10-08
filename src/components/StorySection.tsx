import React from 'react';
import { Compass, Feather, ShieldCheck } from 'lucide-react';
import { IMAGE_INVENTORY } from '../data/images';
import { GsapParallaxImage } from './GsapParallaxImage';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="relative py-28 md:py-36 bg-[#0d0d10] text-[#f5f2eb] overflow-hidden">
      {/* Background Performant GSAP Parallax Layer: Kashmir Mountain Waters */}
      <GsapParallaxImage
        src="/src/assets/images/kashmir_dal_lake_dawn_1791221870523.jpg"
        fallbackSrc={IMAGE_INVENTORY.story.fallback}
        alt="Dal Lake Kashmir background"
        speed={0.2}
        scale={1.24}
        fullBleed={true}
        className="w-full h-full object-cover filter brightness-[0.4] contrast-[1.25] opacity-25"
        overlayClassName="bg-gradient-to-t from-[#0d0d10] via-transparent to-[#0d0d10]"
      />

      {/* Subtle background glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#d8be8a] mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>The Heritage</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#f5f2eb] tracking-tight leading-[1.1] mb-8">
            The Living Memory of the <br />
            <span className="italic font-light text-gold-gradient">High Himalayas</span>
          </h2>

          <p className="text-base sm:text-lg text-[#ccc6b8] leading-relaxed font-light">
            High above the clouds at 14,000 feet on the Changthang plateau of Ladakh, where winter winds bite at -40°C, nature created a miracle of survival. The Changthangi mountain goat grows an ethereal underdown so delicate that each fiber measures between 12 and 14 microns—one-sixth the thickness of a human hair.
          </p>
        </div>

        {/* Editorial Layered Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Subtle GSAP Parallax Editorial Image */}
          <div className="lg:col-span-7 relative">
            <div className="relative z-10 overflow-hidden rounded-sm border border-white/10 shadow-2xl max-w-lg bg-[#141418]">
              <GsapParallaxImage
                src={IMAGE_INVENTORY.story.primary}
                fallbackSrc={IMAGE_INVENTORY.story.fallback}
                alt={IMAGE_INVENTORY.story.alt}
                speed={0.16}
                scale={1.16}
                containerClassName="w-full aspect-[4/3]"
                className="w-full h-full object-cover"
              />
              <div className="p-4 bg-[#121215]/90 border-t border-white/5 flex items-center justify-between text-xs text-[#b8b3a7]">
                <span className="tracking-widest uppercase">Kashmir Valley Waters · Srinagar</span>
                <span className="text-[#d8be8a]">Ancestral Homeland</span>
              </div>
            </div>

            {/* Overlapping Secondary Floating Card */}
            <div className="hidden sm:block absolute -bottom-10 -right-4 lg:right-6 z-20 w-72 p-5 bg-[#17171c]/95 border border-white/15 backdrop-blur-xl rounded-sm shadow-2xl">
              <div className="flex items-center gap-3 mb-2 text-[#d8be8a]">
                <Feather className="w-4 h-4" />
                <span className="text-[11px] uppercase tracking-[0.2em] font-medium">Underdown Fineness</span>
              </div>
              <p className="text-2xl font-serif text-[#f5f2eb] mb-1 tabular-nums">12.4 – 13.5 µm</p>
              <p className="text-xs text-[#a39e94] leading-relaxed">
                Impervious to mechanized industrial looms. Workable only through human tactile intuition.
              </p>
            </div>
          </div>

          {/* Right Column: Historical Narrative & Archival Quote */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            <div className="border-l-2 border-[#d8be8a]/60 pl-6 space-y-4">
              <p className="text-xl sm:text-2xl font-serif italic text-[#eae6dd] leading-snug">
                “Pashmina is not merely cloth; it is the breath of Kashmir rendered into wool, sustained by hands that refuse to surrender their ancestral rhythm.”
              </p>
              <p className="text-xs tracking-[0.2em] uppercase text-[#9e998e]">
                Historical Chronicle of Srinagar Guilds · 1846
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#b8b3a7] leading-relaxed">
              When Mir Sayyid Ali Hamadani arrived in Kashmir in the 14th century accompanied by seven hundred Persian scholars and artisans, he recognized the miraculous softness of the mountain fleece. Thus began a six-century royal lineage that adorned the Mughal emperors Akbar and Shah Jahan, and later captivated the salons of 19th-century Paris through Empress Josephine.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-white/10 text-xs">
              <div>
                <p className="text-2xl font-serif text-[#d8be8a] tabular-nums mb-1">600+</p>
                <p className="text-[#8f8a80] uppercase tracking-wider">Years of Unbroken Guild Lineage</p>
              </div>
              <div>
                <p className="text-2xl font-serif text-[#d8be8a] tabular-nums mb-1">0%</p>
                <p className="text-[#8f8a80] uppercase tracking-wider">Synthetic or Nylon Adulteration</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-xs text-[#d8be8a] tracking-widest uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified under Jammu & Kashmir GI Act</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

