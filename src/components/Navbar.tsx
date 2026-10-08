import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { Currency } from '../types';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  currency,
  onCurrencyChange,
  onNavigate
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Heritage', id: 'story' },
    { label: 'Craftsmanship', id: 'craftsmanship' },
    { label: 'Studio & Loom', id: 'experience-3d' },
    { label: 'Artisans', id: 'artisans' },
    { label: 'Collection', id: 'collection' },
    { label: 'Authenticity', id: 'authenticity' }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0b0b0d]/90 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-gradient-to-b from-[#0b0b0d]/80 via-[#0b0b0d]/30 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('hero');
          }}
          className="text-xl md:text-2xl font-serif tracking-[0.2em] uppercase text-[#f5f2eb] hover:text-[#d8be8a] transition-colors"
        >
          Kashmir Heritage
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-[0.16em] uppercase text-[#cfcac0]">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="hover:text-[#f5f2eb] transition-colors relative py-1 group cursor-pointer"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#d8be8a] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Currency Switcher */}
          <div className="relative inline-flex items-center text-xs tracking-wider">
            <select
              value={currency}
              onChange={(e) => onCurrencyChange(e.target.value as Currency)}
              aria-label="Select currency"
              className="bg-transparent border border-white/10 hover:border-white/20 text-[#d6d2c7] px-2.5 py-1 text-xs uppercase cursor-pointer rounded-sm focus:outline-none focus:border-[#d8be8a]"
            >
              <option value="USD" className="bg-[#121214] text-[#f5f2eb]">USD ($)</option>
              <option value="EUR" className="bg-[#121214] text-[#f5f2eb]">EUR (€)</option>
              <option value="GBP" className="bg-[#121214] text-[#f5f2eb]">GBP (£)</option>
              <option value="INR" className="bg-[#121214] text-[#f5f2eb]">INR (₹)</option>
            </select>
          </div>

          {/* Cart Trigger */}
          <button
            onClick={onOpenCart}
            aria-label="Open shopping bag"
            className="relative p-2 text-[#f5f2eb] hover:text-[#d8be8a] transition-colors cursor-pointer group"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-[#d8be8a] text-[#0b0b0d] text-[10px] font-semibold flex items-center justify-center rounded-full tabular-nums">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="lg:hidden p-2 text-[#f5f2eb] hover:text-[#d8be8a]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bg-[#0b0b0d]/95 backdrop-blur-xl border-b border-white/10 px-8 py-8 flex flex-col gap-5 text-sm tracking-[0.18em] uppercase">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="text-left text-[#d6d2c7] hover:text-[#f5f2eb] transition-colors py-2 border-b border-white/5"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 flex items-center justify-between text-xs text-[#8f8a80]">
            <span>Direct Atelier from Srinagar</span>
            <span>Est. 1934</span>
          </div>
        </div>
      )}
    </header>
  );
};
