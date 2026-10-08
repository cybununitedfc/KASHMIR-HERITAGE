import React, { useState } from 'react';
import { CRAFT_STEPS } from '../data/craftsmanship';
import { IMAGE_INVENTORY } from '../data/images';
import { GsapParallaxImage } from './GsapParallaxImage';
import { ChevronLeft, ChevronRight, Layers, Sparkles } from 'lucide-react';

export const CraftsmanshipSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = CRAFT_STEPS[activeStepIndex];
  const stepFallback = IMAGE_INVENTORY.craftsmanship[activeStepIndex]?.fallback;

  const handleNext = () => {
    setActiveStepIndex((prev) => (prev + 1) % CRAFT_STEPS.length);
  };

  const handlePrev = () => {
    setActiveStepIndex((prev) => (prev - 1 + CRAFT_STEPS.length) % CRAFT_STEPS.length);
  };

  return (
    <section id="craftsmanship" className="relative py-28 md:py-36 bg-[#0a0a0c] text-[#f5f2eb] border-t border-b border-white/5 overflow-hidden">
      {/* Background Performant GSAP Parallax Layer: Raw Cashmere Texture */}
      <GsapParallaxImage
        src="/src/assets/images/raw_changthangi_cashmere_1791221855903.jpg"
        fallbackSrc="/src/assets/images/raw_changthangi_cashmere_1791221855903.jpg"
        alt="Raw cashmere fiber texture background"
        speed={0.18}
        scale={1.22}
        fullBleed={true}
        className="w-full h-full object-cover filter contrast-125 opacity-15"
        overlayClassName="bg-gradient-to-t from-[#0a0a0c] via-transparent to-[#0a0a0c]"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#d8be8a] mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>The Alchemy of Craft</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#f5f2eb] tracking-tight">
              From Nomadic Heights to <br />
              <span className="italic font-light text-gold-gradient">The Master Handloom</span>
            </h2>
          </div>
          <p className="text-sm text-[#a8a398] max-w-md font-light leading-relaxed">
            Every Kashmiri Pashmina passes through five sacred rites of craftsmanship. No automated machine can replicate the gentle tension of human touch.
          </p>
        </div>

        {/* Stage Timeline Navigation Bar */}
        <div className="mb-12 border-b border-white/10 pb-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 md:gap-4">
            {CRAFT_STEPS.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`text-left p-3.5 sm:p-4 rounded-sm transition-all duration-200 cursor-pointer group relative overflow-hidden shadow-md ${
                    isActive
                      ? 'bg-gradient-to-b from-[#251e14] via-[#1a1714] to-[#121216] border border-[#d8be8a] text-[#ffffff] ring-1 ring-[#d8be8a]/50 shadow-lg shadow-[#c5a059]/15'
                      : 'bg-[#15151a] border border-white/15 text-[#e5e0d6] hover:bg-[#1f1d26] hover:border-[#d8be8a]/80 hover:text-[#ffffff] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/50'
                  }`}
                >
                  <span className={`block text-[11px] font-mono tracking-widest uppercase mb-1.5 transition-colors ${
                    isActive
                      ? 'text-[#f3d99f] font-semibold'
                      : 'text-[#d8be8a] group-hover:text-[#f8e3b6]'
                  }`}>
                    0{step.id}
                  </span>
                  <span className={`block text-xs sm:text-sm font-serif truncate transition-colors ${
                    isActive
                      ? 'text-[#ffffff] font-medium'
                      : 'text-[#ece7dd] group-hover:text-[#ffffff]'
                  }`}>
                    {step.title.split(' ')[0]} {step.title.split(' ')[1] || ''}
                  </span>
                  {isActive ? (
                    <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c5a059] via-[#f7e7c4] to-[#c5a059] shadow-[0_0_12px_rgba(216,190,138,0.8)]" />
                  ) : (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#d8be8a]/60 transition-colors" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Editorial Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center bg-[#101013] border border-white/10 p-6 sm:p-10 md:p-14 rounded-sm shadow-2xl relative overflow-hidden">
          {/* Background subtle watermark-free watermark pattern */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#c5a059]/5 rounded-full blur-2xl pointer-events-none" />

          {/* Left: Interactive Imagery with Parallax/Zoom */}
          <div className="lg:col-span-7 relative group">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-white/10 bg-[#16161a]">
              <GsapParallaxImage
                key={currentStep.id}
                src={currentStep.image}
                fallbackSrc={stepFallback}
                alt={currentStep.title}
                speed={0.14}
                scale={1.16}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d]/90 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-[#e8e4db] pointer-events-none">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#d8be8a] animate-ping" />
                  <span className="tracking-[0.2em] uppercase font-mono">{currentStep.stageName}</span>
                </div>
                <span className="text-[11px] text-[#a39e94] tracking-wider uppercase">Authentic Field Archive</span>
              </div>
            </div>

            {/* Metric Callout Overlay */}
            <div className="mt-4 p-4 bg-[#141418] border border-white/10 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8f8a80]">{currentStep.metricLabel}</p>
                <p className="text-sm sm:text-base font-serif text-[#f5f2eb] mt-0.5">{currentStep.metricValue}</p>
              </div>
              <Sparkles className="w-5 h-5 text-[#d8be8a]" />
            </div>
          </div>

          {/* Right: Step Technical & Poetic Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#d8be8a] mb-2">
                {currentStep.stageName} of 05
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif text-[#f5f2eb] mb-2 leading-tight">
                {currentStep.title}
              </h3>
              <p className="text-sm font-serif italic text-[#c4bfae] mb-6">
                {currentStep.subtitle}
              </p>

              <div className="space-y-4 text-sm text-[#b8b3a7] leading-relaxed">
                <p>{currentStep.description}</p>
                <p className="text-xs text-[#9c978d] border-l border-white/20 pl-4 py-1 leading-relaxed">
                  {currentStep.detail}
                </p>
              </div>
            </div>

            {/* Stepper Controls */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-[#8f8a80] tracking-wider">
                STAGE 0{activeStepIndex + 1} / 0{CRAFT_STEPS.length}
              </span>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  aria-label="Previous craftsmanship step"
                  className="p-3 border border-white/10 hover:border-white/30 text-[#f5f2eb] hover:bg-white/5 transition-colors rounded-sm cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next craftsmanship step"
                  className="p-3 border border-white/10 hover:border-white/30 text-[#f5f2eb] hover:bg-white/5 transition-colors rounded-sm cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
