import React, { useState } from 'react';
import { Product, Currency } from '../types';
import { formatPrice } from '../utils/currency';
import { SafeImage } from './SafeImage';
import { X, Check, ShieldCheck, Sparkles, ShoppingBag, Award, Clock, MapPin, Feather, CheckCircle2 } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  currency: Currency;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  currency,
  onClose,
  onAddToCart
}) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const gallery = product.gallery && product.gallery.length > 0
    ? product.gallery
    : [product.image];

  const currentPhoto = gallery[selectedPhotoIndex] || product.image;

  const photoLabels = [
    'Main Drape',
    'Weave Texture Macro',
    'Embroidery Detail',
    'Artisan Loom Origin'
  ];

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/90 backdrop-blur-md overflow-y-auto">
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-5xl bg-[#0f0f13] border border-white/15 rounded-sm shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col lg:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close product view"
          className="absolute top-4 right-4 z-20 p-2.5 bg-[#0b0b0d]/80 hover:bg-[#0b0b0d] text-[#f5f2eb] border border-white/15 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Multi-Photo Luxury Catalogue Gallery */}
        <div className="lg:w-7/12 p-6 sm:p-8 flex flex-col justify-between bg-[#141418] border-b lg:border-b-0 lg:border-r border-white/10">
          {/* Main Inspection Photograph */}
          <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-sm border border-white/10 bg-[#0a0a0c] mb-4">
            <SafeImage
              key={currentPhoto}
              src={currentPhoto}
              fallbackSrc={product.image}
              alt={`${product.name} - ${photoLabels[selectedPhotoIndex] || 'Photo'}`}
              className="w-full h-full object-cover transition-all duration-500 filter brightness-95 hover:scale-105"
            />

            {/* Subtle photographic vignette scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/60 via-transparent to-transparent pointer-events-none" />

            {/* Photo Perspective Indicator Tag */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1 bg-black/75 backdrop-blur-md border border-white/10 text-xs text-[#cfcac0]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d8be8a]" />
              <span className="font-mono uppercase tracking-wider text-[11px]">
                {photoLabels[selectedPhotoIndex] || 'View'}
              </span>
            </div>
          </div>

          {/* Interactive Thumbnails Selector */}
          <div>
            <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#8f8a80] mb-2">
              <span>Inspect Textile Perspectives</span>
              <span>0{selectedPhotoIndex + 1} / 0{gallery.length}</span>
            </div>

            <div className="grid grid-cols-4 gap-2.5">
              {gallery.map((photo, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPhotoIndex(idx)}
                  className={`relative aspect-[4/3] overflow-hidden rounded-sm border transition-all cursor-pointer ${
                    selectedPhotoIndex === idx
                      ? 'border-[#d8be8a] ring-1 ring-[#d8be8a]/50 opacity-100'
                      : 'border-white/10 opacity-60 hover:opacity-100'
                  }`}
                >
                  <SafeImage
                    src={photo}
                    fallbackSrc={product.image}
                    alt={photoLabels[idx] || 'Thumbnail'}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-black/70 py-0.5 text-[9px] text-center font-mono text-[#d8be8a] truncate px-1">
                    {photoLabels[idx]?.split(' ')[0] || `View ${idx + 1}`}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Product Narrative & Purchase Module */}
        <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Category */}
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#d8be8a] mb-2 flex items-center gap-2">
              <Sparkles className="w-3 h-3" />
              <span>{product.category}</span>
            </div>

            {/* Product Title */}
            <h3 className="text-2xl sm:text-3xl font-serif text-[#f5f2eb] leading-tight mb-3">
              {product.name}
            </h3>

            {/* Price */}
            <div className="text-2xl font-serif text-[#f5f2eb] tabular-nums mb-5 text-gold-gradient">
              {formatPrice(product.priceUSD, currency)}
            </div>

            {/* Editorial Description */}
            <p className="text-xs sm:text-sm text-[#b8b3a7] leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Verified Specifications Grid */}
            <div className="space-y-2.5 py-4 border-t border-b border-white/10 text-xs text-[#cfcac0]">
              <div className="flex items-center justify-between">
                <span className="text-[#8f8a80] flex items-center gap-1.5">
                  <Feather className="w-3.5 h-3.5 text-[#d8be8a]" /> Material Grade
                </span>
                <span className="font-medium text-right">{product.micronCount}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#8f8a80] flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#d8be8a]" /> Traditional Weave
                </span>
                <span className="text-right">{product.weaveType}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#8f8a80] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#d8be8a]" /> Crafting Period
                </span>
                <span className="text-right">{product.handcraftDuration}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#8f8a80] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#d8be8a]" /> Origin & Artisan
                </span>
                <span className="text-right">{product.artisanName}</span>
              </div>
            </div>

            {/* Verified Authenticity Bullets */}
            <div className="mt-5 space-y-2 text-xs text-[#a8a398]">
              {product.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d8be8a] shrink-0 mt-0.5" />
                  <span className="leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-8 pt-5 border-t border-white/10">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center border border-white/20 rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-sm text-[#b8b3a7] hover:text-[#f5f2eb]"
                >
                  -
                </button>
                <span className="px-3 py-2 text-xs font-mono tabular-nums text-[#f5f2eb]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-sm text-[#b8b3a7] hover:text-[#f5f2eb]"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAdd}
                className="flex-1 py-3.5 px-6 bg-[#f5f2eb] text-[#0b0b0d] hover:bg-[#d8be8a] text-xs uppercase tracking-[0.2em] font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xl"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-700" />
                    <span>Added to Bag</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Shopping Bag</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#7a766e]">
              <span>Complimentary Walnut Box</span>
              <span className="flex items-center gap-1 text-[#d8be8a]">
                <ShieldCheck className="w-3.5 h-3.5" /> GI Certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
