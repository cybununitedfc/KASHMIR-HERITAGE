import React, { useState } from 'react';
import { Product, Currency } from '../types';
import { PRODUCTS } from '../data/products';
import { IMAGE_INVENTORY } from '../data/images';
import { SafeImage } from './SafeImage';
import { formatPrice } from '../utils/currency';
import { Eye, ShoppingBag, Sparkles } from 'lucide-react';

interface CollectionSectionProps {
  currency: Currency;
  onSelectProduct: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
}

export const CollectionSection: React.FC<CollectionSectionProps> = ({
  currency,
  onSelectProduct,
  onQuickAdd
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = [
    'All',
    'Sozni Needlework',
    'Kani Weave',
    'Pure Natural Pashm',
    'Jamawar Heritage',
    'Tilla & Kalamkari'
  ];

  const filteredProducts = selectedFilter === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedFilter);

  const getProductFallback = (id: string) => {
    switch (id) {
      case 'kh-sozni-noir': return IMAGE_INVENTORY.products.sozniNoir.fallback;
      case 'kh-kani-bagh': return IMAGE_INVENTORY.products.kaniBagh.fallback;
      case 'kh-pashm-raw-stole': return IMAGE_INVENTORY.products.pashmRaw.fallback;
      case 'kh-jamawar-shah': return IMAGE_INVENTORY.products.jamawarShah.fallback;
      case 'kh-kalamkari-tree': return '/src/assets/images/kalamkari_pashmina_shawl_1791222189020.jpg';
      case 'kh-tilla-bridal': return '/src/assets/images/tilla_embroidered_pashmina_1791222203700.jpg';
      case 'kh-sozni-hashidar': return IMAGE_INVENTORY.products.sozniHashidar.fallback;
      default: return IMAGE_INVENTORY.products.karakoramSand.fallback;
    }
  };

  return (
    <section id="collection" className="relative py-28 md:py-36 bg-[#0b0b0d] text-[#f5f2eb] overflow-hidden">
      {/* Subtle Background Parallax Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-kashmir-pattern" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#d8be8a] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Heirloom Collection</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#f5f2eb] tracking-tight">
              Curated Masterpieces <br />
              <span className="italic font-light text-gold-gradient">Of Pure Changthangi Pashm</span>
            </h2>
          </div>

          <p className="text-sm text-[#a8a398] max-w-md font-light leading-relaxed">
            Each piece is woven in limited single-editions by master craftsmen. Signed, certified with registered Geographical Indication (GI), and packaged in walnut-wood collector chests.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-white/10 pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.18em] transition-all cursor-pointer rounded-sm ${
                selectedFilter === category
                  ? 'bg-white/10 text-[#f5f2eb] border border-[#d8be8a]/40 font-medium'
                  : 'text-[#8a857b] hover:text-[#f5f2eb] border border-transparent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col justify-between bg-[#111114] border border-white/10 hover:border-white/20 transition-all duration-500 rounded-sm overflow-hidden hover:-translate-y-1 shadow-lg"
            >
              {/* Product Image Container */}
              <div
                onClick={() => onSelectProduct(product)}
                className="relative aspect-[4/3] sm:aspect-[1/1] overflow-hidden bg-[#16161a] cursor-pointer"
              >
                <SafeImage
                  src={product.image}
                  fallbackSrc={getProductFallback(product.id)}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                />

                {/* Subtle scrim and hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Category tag */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 bg-black/60 backdrop-blur-md text-[#d8be8a] border border-white/10">
                    {product.category}
                  </span>
                </div>

                {/* Quick View Button on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="px-5 py-2.5 bg-[#0b0b0d]/90 text-[#f5f2eb] text-xs uppercase tracking-[0.2em] border border-white/20 shadow-2xl flex items-center gap-2">
                    <Eye className="w-3.5 h-3.5 text-[#d8be8a]" /> View Product
                  </span>
                </div>
              </div>

              {/* Product Info Content */}
              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#8f8a80] mb-2 font-mono">
                    <span>{product.micronCount}</span>
                    <span>{product.originDistrict.split(',')[0]}</span>
                  </div>

                  <h3
                    onClick={() => onSelectProduct(product)}
                    className="text-xl font-serif text-[#f5f2eb] hover:text-[#d8be8a] transition-colors cursor-pointer leading-snug mb-2"
                  >
                    {product.name}
                  </h3>

                  <p className="text-xs text-[#a8a398] line-clamp-2 leading-relaxed">
                    {product.material} · {product.weaveType}
                  </p>
                </div>

                {/* Price & Actions Row */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="font-serif text-lg text-[#f5f2eb] tabular-nums">
                    {formatPrice(product.priceUSD, currency)}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="px-3.5 py-2 text-xs uppercase tracking-wider text-[#cfcac0] hover:text-[#f5f2eb] border border-white/15 hover:border-white/30 transition-colors cursor-pointer"
                    >
                      View Product
                    </button>
                    <button
                      onClick={() => onQuickAdd(product)}
                      title="Quick Add to Bag"
                      aria-label={`Add ${product.name} to shopping bag`}
                      className="p-2 bg-[#d8be8a] text-[#0b0b0d] hover:bg-[#ebd5a7] transition-colors rounded-sm cursor-pointer"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
