import React from 'react';
import { ShieldCheck, Microscope, Award, FileCheck2, Sparkles } from 'lucide-react';
import { IMAGE_INVENTORY } from '../data/images';
import { SafeImage } from './SafeImage';

export const AuthenticitySection: React.FC = () => {
  const criteria = [
    {
      icon: ShieldCheck,
      title: 'Geographical Indication (GI) Registered',
      description: 'Certified under the Kashmir Pashmina GI Registration No. 46 (GI Act, 1999), assuring origin in the traditional artisan clusters of Jammu & Kashmir and authentic raw Changthangi fleece.'
    },
    {
      icon: Microscope,
      title: 'Microscopic Fiber Diameter (12–14.5 µm)',
      description: 'Tested via optical fiber diameter analysis. Pure Kashmiri Pashmina features microscopic scale counts of 5–6 per 100 microns, distinctly separating it from standard 19-micron commercial Mongolian cashmere.'
    },
    {
      icon: FileCheck2,
      title: 'Physical & Burn Analysis (Zero Adulteration)',
      description: 'Pure 100% keratin protein structure without synthetic polymer, nylon, or viscose blending. Tested via flame combustion resulting in fine crushable mineral ash with zero molten plastic beading.'
    },
    {
      icon: Award,
      title: 'The Mechanical Ring Benchmark',
      description: 'Because pure Pashmina yarn is spun without chemical sizing or plasticizers, a full 200cm × 100cm shawl retains gossamer flexibility, gliding effortlessly through a standard wedding ring.'
    }
  ];

  return (
    <section id="authenticity" className="relative py-28 md:py-36 bg-[#09090b] text-[#f5f2eb] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#d8be8a] mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Certified Provenance</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#f5f2eb] tracking-tight leading-[1.1] mb-6">
            Scientific Rigor & <br />
            <span className="italic font-light text-gold-gradient">Verified Origin</span>
          </h2>

          <p className="text-base text-[#b8b3a7] font-light leading-relaxed">
            The global luxury market is inundated with machine-woven fabrics falsely labelled as Pashmina. We submit every batch to certified fiber testing to ensure absolute legal, physical, and historical authenticity.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {criteria.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-[#101013] border border-white/10 rounded-sm hover:border-[#d8be8a]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#d8be8a] mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-serif text-[#f5f2eb] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a39e94] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#8f8a80]">
                  <span>VERIFICATION CODE: KH-GI-0{idx + 1}</span>
                  <span className="text-[#d8be8a]">VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certificate Sample Box with Visual Inspection Photo */}
        <div className="p-8 md:p-10 bg-[#121216] border border-white/10 rounded-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-full lg:w-44 h-40 overflow-hidden rounded-sm border border-white/10 shrink-0">
            <SafeImage
              src={IMAGE_INVENTORY.authenticity.primary}
              fallbackSrc={IMAGE_INVENTORY.authenticity.fallback}
              alt={IMAGE_INVENTORY.authenticity.alt}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#d8be8a]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Personalized Guild Provenance Parchment</span>
            </div>
            <h4 className="text-2xl font-serif text-[#f5f2eb]">
              Every Shawl Accompanied by Its Weaver's Signature
            </h4>
            <p className="text-xs text-[#a39e94] leading-relaxed">
              Inside your walnut keepsake box lies an archival certificate detailing the exact Changthangi harvest date, the artisan's guild registry number, and the laboratory micron test verification.
            </p>
          </div>

          <div className="px-6 py-4 bg-[#0a0a0c] border border-white/15 rounded-sm text-center font-mono text-xs text-[#cfcac0] shrink-0 w-full sm:w-auto">
            <p className="text-[#d8be8a] text-sm font-serif mb-1">KASHMIR HERITAGE ATELIER</p>
            <p className="text-[10px] tracking-widest uppercase text-[#8f8a80]">Govt. of Jammu & Kashmir GI Reg.</p>
            <div className="my-2 border-t border-dashed border-white/10" />
            <p className="text-[11px] text-[#f5f2eb]">BATCH: SRN-2026-CH77</p>
          </div>
        </div>
      </div>
    </section>
  );
};
