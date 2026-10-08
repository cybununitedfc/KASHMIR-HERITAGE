import React from 'react';
import { ArrowRight, CheckCircle2, XCircle, Landmark, ShieldCheck, Heart } from 'lucide-react';
import { IMAGE_INVENTORY } from '../data/images';
import { GsapParallaxImage } from './GsapParallaxImage';

export const DirectFromKashmir: React.FC = () => {
  return (
    <section className="relative py-28 md:py-36 bg-[#0c0c0e] text-[#f5f2eb] overflow-hidden">
      {/* Background Subtle GSAP Parallax Ambience */}
      <GsapParallaxImage
        src="/src/assets/images/hero_kashmir_misty_valley_1791220635408.jpg"
        fallbackSrc="/src/assets/images/hero_kashmir_misty_valley_1791220635408.jpg"
        alt="Kashmir valley mountains background"
        speed={0.16}
        scale={1.22}
        fullBleed={true}
        className="w-full h-full object-cover filter brightness-[0.22] contrast-[1.2]"
        overlayClassName="bg-gradient-to-t from-[#0c0c0e] via-transparent to-[#0c0c0e]"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#d8be8a] mb-4">
              <Landmark className="w-3.5 h-3.5" />
              <span>The Direct Atelier Model</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#f5f2eb] tracking-tight leading-[1.1] mb-6">
              Direct from Srinagar. <br />
              <span className="italic font-light text-gold-gradient">Zero Fashion Middlemen</span>
            </h2>

            <p className="text-base text-[#b8b3a7] font-light leading-relaxed max-w-2xl">
              Traditional luxury fashion conglomerates inflate Pashmina prices by 1,000% through tiers of agents, exporters, and marketing markup, while leaving weavers in generational poverty. We dismantled that system completely.
            </p>
          </div>

          {/* GSAP Parallax Editorial Window: Workshop */}
          <div className="lg:col-span-4 h-52 rounded-sm overflow-hidden border border-white/10 relative">
            <GsapParallaxImage
              src={IMAGE_INVENTORY.directAtelier.primary}
              fallbackSrc={IMAGE_INVENTORY.directAtelier.fallback}
              alt={IMAGE_INVENTORY.directAtelier.alt}
              speed={0.15}
              scale={1.18}
              containerClassName="w-full h-full"
              className="w-full h-full object-cover filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 text-[10px] uppercase font-mono tracking-widest text-[#cfcac0] pointer-events-none">
              Srinagar Atelier Workshop
            </div>
          </div>
        </div>

        {/* Visual Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Traditional Conglomerate Channel */}
          <div className="p-8 sm:p-10 bg-[#101013] border border-white/10 rounded-sm flex flex-col justify-between opacity-80 hover:opacity-100 transition-opacity">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs uppercase tracking-widest text-[#8a857b] font-mono">Traditional Model</span>
                <span className="px-2.5 py-1 bg-red-950/40 border border-red-800/40 text-red-300 text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                  <XCircle className="w-3.5 h-3.5" /> 10x–12x Markup
                </span>
              </div>

              <h3 className="text-2xl font-serif text-[#cfcac0] mb-4">
                The Conglomerate Supply Chain
              </h3>

              <div className="space-y-4 text-xs text-[#8f8a80] mb-8">
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <span>Nomadic Herder & Master Weaver</span>
                  <span className="text-red-400 font-mono">&lt; 8% of retail value</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <span>Local Brokers & Raw Exporters</span>
                  <span className="font-mono text-[#b3ad9f]">+ 45% markup</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <span>European Luxury House Licensing</span>
                  <span className="font-mono text-[#b3ad9f]">+ 250% markup</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <span>Bond Street / Fifth Ave Retail Overheads</span>
                  <span className="font-mono text-[#b3ad9f]">+ 400% markup</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#0a0a0c] border border-white/5 text-xs text-[#a39e94]">
              Result: Client pays $3,000–$6,000 for a machine-blended or heavily commoditized shawl, while the Srinagar artisan struggles for basic medical care.
            </div>
          </div>

          {/* Card 2: Kashmir Heritage Direct Atelier Model */}
          <div className="p-8 sm:p-10 bg-[#131317] border border-[#d8be8a]/50 rounded-sm shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d8be8a]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs uppercase tracking-widest text-[#d8be8a] font-mono">Our Model</span>
                <span className="px-2.5 py-1 bg-[#d8be8a]/20 border border-[#d8be8a]/40 text-[#f5f2eb] text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d8be8a]" /> Direct Atelier
                </span>
              </div>

              <h3 className="text-2xl font-serif text-[#f5f2eb] mb-4">
                The Kashmir Heritage Standard
              </h3>

              <div className="space-y-4 text-xs text-[#cfcac0] mb-8">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="flex items-center gap-1.5 text-[#f5f2eb]">
                    <Heart className="w-3.5 h-3.5 text-[#d8be8a]" /> Master Weaver & Spinner Living Wage
                  </span>
                  <span className="text-[#d8be8a] font-mono font-semibold">65%–70% of Direct atelier cost</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span>Lab GI Testing & Certified Finishing</span>
                  <span className="font-mono text-[#a39e94]">10% direct lab cost</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span>Handcrafted Walnut Chest & Global Courier</span>
                  <span className="font-mono text-[#a39e94]">Direct shipping</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span>Third-Party Fashion Resellers</span>
                  <span className="text-emerald-400 font-mono">ZERO (0%)</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#0a0a0c] border border-[#d8be8a]/30 text-xs text-[#e8e4db] flex items-center justify-between">
              <span>Fair Luxury Price: $890 – $1,480</span>
              <span className="text-[#d8be8a] flex items-center gap-1 text-[11px] uppercase tracking-wider font-mono">
                100% Ethical <ShieldCheck className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
