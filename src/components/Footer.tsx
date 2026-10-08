import React from 'react';
import { ShieldCheck, MapPin, Compass } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative bg-[#070709] text-[#cfcac0] pt-20 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/5">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-serif tracking-[0.16em] uppercase text-[#f5f2eb]">
              Kashmir Heritage
            </h3>
            <p className="text-xs text-[#8f8a80] leading-relaxed max-w-sm">
              Dedicated to preserving the ancestral six-century guild tradition of hand-spun, handloom-woven Changthangi Pashmina shawls in Srinagar, Kashmir.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#d8be8a]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Downtown Srinagar & Kanihama, Kashmir</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#f5f2eb] font-mono">
              The Atelier
            </h4>
            <ul className="space-y-2 text-xs text-[#8f8a80]">
              <li>
                <button
                  onClick={() => onNavigate('story')}
                  className="hover:text-[#f5f2eb] transition-colors cursor-pointer"
                >
                  600-Year Heritage
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('craftsmanship')}
                  className="hover:text-[#f5f2eb] transition-colors cursor-pointer"
                >
                  5 Rites of Craft
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('artisans')}
                  className="hover:text-[#f5f2eb] transition-colors cursor-pointer"
                >
                  Master Weavers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('experience-3d')}
                  className="hover:text-[#f5f2eb] transition-colors cursor-pointer"
                >
                  3D Cloth Drape
                </button>
              </li>
            </ul>
          </div>

          {/* Curated Collection */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#f5f2eb] font-mono">
              Heirloom Editions
            </h4>
            <ul className="space-y-2 text-xs text-[#8f8a80]">
              <li>
                <button
                  onClick={() => onNavigate('collection')}
                  className="hover:text-[#f5f2eb] transition-colors cursor-pointer"
                >
                  Sozni Needlework Shawls
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collection')}
                  className="hover:text-[#f5f2eb] transition-colors cursor-pointer"
                >
                  Historic Kani Bobbin Weaves
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collection')}
                  className="hover:text-[#f5f2eb] transition-colors cursor-pointer"
                >
                  Raw Changthangi Stoles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collection')}
                  className="hover:text-[#f5f2eb] transition-colors cursor-pointer"
                >
                  Mughal Jamawar Tapestries
                </button>
              </li>
            </ul>
          </div>

          {/* Provenance & Care */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#f5f2eb] font-mono">
              Provenance
            </h4>
            <ul className="space-y-2 text-xs text-[#8f8a80]">
              <li>
                <button
                  onClick={() => onNavigate('authenticity')}
                  className="hover:text-[#f5f2eb] transition-colors cursor-pointer"
                >
                  GI Registration No. 46
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('authenticity')}
                  className="hover:text-[#f5f2eb] transition-colors cursor-pointer"
                >
                  12-Micron Fiber Testing
                </button>
              </li>
              <li>
                <span className="block text-[#6e6a62]">Hand Wash & Cedar Storage</span>
              </li>
              <li>
                <span className="block text-[#6e6a62]">Living Wage Guarantee</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6e6a62] gap-4">
          <p>© {new Date().getFullYear()} Kashmir Heritage Atelier. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[11px] uppercase tracking-wider">
            <span>Direct Artisan Guild</span>
            <span>·</span>
            <span>Zero Middleman Promise</span>
            <span>·</span>
            <span>Srinagar, J&K</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
