import React, { useState } from 'react';
import { Sparkles, ZoomIn, ShieldCheck } from 'lucide-react';
import { IMAGE_INVENTORY } from '../data/images';
import { SafeImage } from './SafeImage';
import { GsapParallaxImage } from './GsapParallaxImage';

export const ThreeDExperience: React.FC = () => {
  const [magnification, setMagnification] = useState<number>(1.5);
  const [activeWeaveSwatch, setActiveWeaveSwatch] = useState<number>(0);

  const weaveSamples = [
    {
      title: 'Chashm-e-Bulbul (Diamond Twill)',
      fleece: '12.8 µm Changthangi Down',
      desc: 'The legendary "Eye of the Nightingale" lozenge weave providing four-way elastic drape and subtle specular light refraction.',
      image: IMAGE_INVENTORY.macro.diamondTwill.primary
    },
    {
      title: 'Kani Tujih Tapestry Weave',
      fleece: '13.2 µm Hand-Spun Wool',
      desc: 'Intertwined using eyeless wooden bobbins reading ancient Taleem manuscripts, embedding colored silk directly into the structural warp.',
      image: IMAGE_INVENTORY.macro.kaniWeave.primary
    },
    {
      title: 'Raw Un-dyed Changthangi Pashm',
      fleece: '12.4 µm Natural Fleece',
      desc: 'Completely un-sized and un-bleached down harvested during Himalayan spring moulting at 14,000 feet.',
      image: IMAGE_INVENTORY.macro.rawFleece.primary
    }
  ];

  return (
    <section id="experience-3d" className="relative py-28 md:py-36 bg-[#0a0a0c] text-[#f5f2eb] border-t border-white/5 overflow-hidden">
      {/* Background Subtle Parallax Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-kashmir-pattern" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#d8be8a] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Spatial Study & Macro Inspector</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#f5f2eb] tracking-tight">
              Microscopic Weave & <br />
              <span className="italic font-light text-gold-gradient">Atelier Handloom Studio</span>
            </h2>
          </div>
          <p className="text-sm text-[#a8a398] max-w-md font-light leading-relaxed">
            Examine the intricate weave geometry under certified optical magnification, alongside our zero-electricity Srinagar handloom atelier.
          </p>
        </div>

        {/* Museum-Grade Two-Column Inspection Workbench */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Authentic High-Resolution Macro Weave Inspector */}
          <div className="lg:col-span-7 bg-[#101013] border border-white/10 rounded-sm p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-mono text-[#d8be8a]">
                  <ZoomIn className="w-4 h-4" />
                  <span>Optical Fiber Magnification ({magnification}x)</span>
                </div>
                <span className="text-[11px] text-[#8f8a80] font-mono uppercase">Laboratory Grade</span>
              </div>

              {/* Macro Texture Viewport */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-white/10 bg-[#08080a] group">
                <div
                  className="w-full h-full transition-transform duration-500 ease-out"
                  style={{ transform: `scale(${magnification})` }}
                >
                  <SafeImage
                    src={weaveSamples[activeWeaveSwatch].image}
                    fallbackSrc={IMAGE_INVENTORY.authenticity.fallback}
                    alt={weaveSamples[activeWeaveSwatch].title}
                    className="w-full h-full object-cover filter contrast-110"
                  />
                </div>

                {/* Natural shadow scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* In-view overlay label */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#e8e4db] pointer-events-none">
                  <span className="font-serif text-sm">{weaveSamples[activeWeaveSwatch].title}</span>
                  <span className="font-mono text-[#d8be8a] text-[11px]">{weaveSamples[activeWeaveSwatch].fleece}</span>
                </div>
              </div>

              {/* Swatch Selectors */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                {weaveSamples.map((sample, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveWeaveSwatch(idx)}
                    className={`p-3 text-left border rounded-sm transition-all cursor-pointer ${
                      activeWeaveSwatch === idx
                        ? 'border-[#d8be8a] bg-white/5 text-[#f5f2eb]'
                        : 'border-white/10 text-[#8f8a80] hover:text-[#cfcac0]'
                    }`}
                  >
                    <p className="text-[11px] font-mono uppercase tracking-wider text-[#d8be8a] mb-1">0{idx + 1}</p>
                    <p className="text-xs font-serif line-clamp-1">{sample.title.split(' ')[0]}</p>
                  </button>
                ))}
              </div>

              <p className="mt-4 text-xs text-[#a8a398] leading-relaxed">
                {weaveSamples[activeWeaveSwatch].desc}
              </p>
            </div>

            {/* Controls Bar */}
            <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3">
                <span className="text-[#8f8a80] uppercase tracking-wider text-[11px]">Magnification:</span>
                <div className="flex items-center gap-1.5">
                  {[1.0, 1.5, 2.0].map((level) => (
                    <button
                      key={level}
                      onClick={() => setMagnification(level)}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                        magnification === level
                          ? 'bg-[#d8be8a] text-[#0b0b0d] font-semibold'
                          : 'bg-white/5 text-[#a39e94] hover:text-[#f5f2eb]'
                      }`}
                    >
                      {level}x
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-[11px] text-[#8f8a80] flex items-center gap-1.5 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d8be8a]" />
                <span>Zero Synthetic Sizing Agents</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Kashmiri Handloom Parallax Spotlight */}
          <div className="lg:col-span-5 bg-[#0e0e11] border border-white/10 rounded-sm p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            {/* Background Parallax Layer */}
            <GsapParallaxImage
              src="/src/assets/images/kashmir_dal_lake_dawn_1791221870523.jpg"
              alt="Kashmir valley dawn background"
              speed={0.18}
              scale={1.22}
              fullBleed={true}
              className="w-full h-full object-cover filter brightness-[0.35]"
              overlayClassName="bg-gradient-to-t from-[#0e0e11] via-[#0e0e11]/80 to-[#0e0e11]/90"
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#d8be8a]">
                  Ancestral Cedarwood Handloom
                </span>
                <span className="text-[11px] text-[#8f8a80] font-mono">100% Handcrafted</span>
              </div>

              {/* Handloom Photo with GSAP Parallax */}
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-white/10 mb-4 bg-[#08080a]">
                <GsapParallaxImage
                  src="/src/assets/images/artisan_weaving_loom_1791220650225.jpg"
                  alt="Master weaver hands operating century-old cedarwood handloom in Srinagar"
                  speed={0.12}
                  scale={1.16}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-[#e8e4db] pointer-events-none">
                  <span className="font-serif">Srinagar Atelier Handloom</span>
                  <span className="font-mono text-[#d8be8a]">Zero Electricity</span>
                </div>
              </div>

              <p className="text-xs text-[#b8b3a7] leading-relaxed mb-4">
                Every authentic Kashmiri Pashmina must be woven on traditional cedarwood handlooms. The warp tension is manually felt by the weaver's fingers, preventing broken sub-14 micron threads.
              </p>

              {/* Craftsmanship Specs */}
              <div className="space-y-2 text-xs text-[#cfcac0] pt-2 border-t border-white/5">
                <div className="flex justify-between">
                  <span className="text-[#8f8a80]">Shuttle Wood:</span>
                  <span className="font-mono text-[#f5f2eb]">Himalayan Deodar Cedar</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8f8a80]">Yarn Sizing:</span>
                  <span className="font-mono text-[#f5f2eb]">Organic Rice Water Paste</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8f8a80]">Daily Output:</span>
                  <span className="font-mono text-[#d8be8a]">Only 4 to 8 inches per day</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="relative z-10 pt-5 mt-4 border-t border-white/10 flex items-center justify-between">
              <a
                href="#collection"
                className="w-full py-3 px-4 bg-[#f5f2eb] text-[#0b0b0d] hover:bg-[#d8be8a] text-xs uppercase tracking-[0.2em] font-medium transition-colors text-center cursor-pointer shadow-lg block"
              >
                Explore All 8+ Handmade Shawls
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

