import React, { useState } from 'react';
import { Sparkles, Check, Send } from 'lucide-react';
import { IMAGE_INVENTORY } from '../data/images';
import { GsapParallaxImage } from './GsapParallaxImage';

interface FinalCTAProps {
  onShopCollection: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onShopCollection }) => {
  const [conciergeEmail, setConciergeEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!conciergeEmail) return;
    setSubscribed(true);
  };

  return (
    <section className="relative py-32 md:py-44 bg-[#0a0a0c] text-[#f5f2eb] overflow-hidden border-t border-white/5">
      {/* Background Performant GSAP Parallax Ambience with Mountain Photography */}
      <GsapParallaxImage
        src={IMAGE_INVENTORY.finalCta.primary}
        fallbackSrc={IMAGE_INVENTORY.finalCta.fallback}
        alt={IMAGE_INVENTORY.finalCta.alt}
        speed={0.24}
        scale={1.24}
        fullBleed={true}
        className="w-full h-full object-cover filter brightness-[0.4] contrast-[1.25]"
        overlayClassName="bg-gradient-to-t from-[#080809] via-[#0a0a0c]/80 to-[#0a0a0c]"
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#c5a059]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-kashmir-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
        <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-[#d8be8a] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Atelier Heirloom</span>
        </div>

        {/* Headline */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#f5f2eb] tracking-tight uppercase leading-[1.05] mb-8">
          Own a Piece of <br />
          <span className="italic font-light text-gold-gradient">Kashmir</span>
        </h2>

        <p className="text-base sm:text-lg text-[#ccc6b8] max-w-xl mx-auto mb-12 font-light leading-relaxed">
          Not simply a possession, but an enduring tactile legacy woven with 600 years of Kashmiri soul. Packaged in fragrant hand-carved walnut-wood cases with certified provenance.
        </p>

        {/* Primary CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
          <button
            onClick={onShopCollection}
            className="w-full sm:w-auto px-10 py-5 bg-[#f5f2eb] text-[#0b0b0d] hover:bg-[#d8be8a] hover:text-[#0b0b0d] text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 shadow-2xl cursor-pointer"
          >
            Shop the Collection
          </button>
        </div>

        {/* Concierge & Private Commission Box */}
        <div className="max-w-lg mx-auto p-8 bg-[#111115]/90 border border-white/10 rounded-sm backdrop-blur-md">
          <p className="font-serif text-lg text-[#f5f2eb] mb-1">
            Atelier Concierge & Private Commissions
          </p>
          <p className="text-xs text-[#a39e94] mb-6 leading-relaxed">
            Require custom initials, family crest needlework, or bespoke dimensions? Leave your email for a private consultation with our Srinagar atelier director.
          </p>

          {subscribed ? (
            <div className="p-3 bg-emerald-950/40 border border-emerald-700/40 text-emerald-200 text-xs flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Thank you. Our atelier concierge will contact you within 24 hours.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                required
                value={conciergeEmail}
                onChange={(e) => setConciergeEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 px-4 py-2.5 bg-white/5 border border-white/15 text-xs text-[#f5f2eb] focus:outline-none focus:border-[#d8be8a] rounded-sm placeholder:text-[#6e6a62]"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#d8be8a] text-[#0b0b0d] hover:bg-[#ebd5a7] text-xs uppercase tracking-wider font-medium transition-colors rounded-sm flex items-center gap-1.5 cursor-pointer"
              >
                Inquire <Send className="w-3 h-3" />
              </button>
            </form>
          )}

          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#7a766e]">
            <span>Complimentary Insured Worldwide Courier</span>
            <span>DHL Express & FedEx Priority</span>
          </div>
        </div>
      </div>
    </section>
  );
};
