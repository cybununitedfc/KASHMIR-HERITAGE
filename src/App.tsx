import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StorySection } from './components/StorySection';
import { CraftsmanshipSection } from './components/CraftsmanshipSection';
import { EditorialParallaxBanner } from './components/EditorialParallaxBanner';
import { ArtisanSection } from './components/ArtisanSection';
import { ThreeDExperience } from './components/ThreeDExperience';
import { CollectionSection } from './components/CollectionSection';
import { AuthenticitySection } from './components/AuthenticitySection';
import { DirectFromKashmir } from './components/DirectFromKashmir';
import { FinalCTA } from './components/FinalCTA';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { Product, CartItem, Currency } from './types';
import { PARALLAX_TEXTURE_URLS } from './data/images';
import { useTexturePreloader } from './hooks/useTexturePreloader';

export default function App() {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Preload and decode all high-resolution parallax background textures
  const { isLoaded, progress } = useTexturePreloader(PARALLAX_TEXTURE_URLS);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0b0b0d] text-[#f5f2eb] font-sans selection:bg-[#d8be8a]/20 selection:text-[#fbf9f5]">
      {/* Subtle Texture Preload Indicator for Seamless Parallax Transition */}
      {!isLoaded && (
        <div
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Preloading high-resolution background textures"
          className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-white/5 pointer-events-none transition-opacity duration-700"
        >
          <div
            className="h-full bg-gradient-to-r from-[#c5a059] to-[#ebd5a7] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Top Navigation Bar adhering to 3-zone contract */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        currency={currency}
        onCurrencyChange={setCurrency}
        onNavigate={scrollToSection}
      />

      {/* Main Content Flow */}
      <main>
        {/* 1. Hero Section with GSAP Parallax */}
        <Hero onExplore={() => scrollToSection('collection')} />

        {/* 2. Story Section with GSAP Parallax */}
        <StorySection />

        {/* 3. Craftsmanship Section with GSAP Parallax */}
        <CraftsmanshipSection />

        {/* Full-Width Editorial Parallax Breakout 1: Highlands of Ladakh */}
        <EditorialParallaxBanner
          imageSrc="/src/assets/images/hero_kashmir_misty_valley_1791220635408.jpg"
          fallbackSrc="/src/assets/images/hero_kashmir_misty_valley_1791220635408.jpg"
          alt="Misty high-altitude Himalayan mountain range in Kashmir"
          eyebrow="Editorial Interlude · The Changthang Highlands"
          title="The Ethereal Breath of the Himalayas"
          quote="At fourteen thousand feet, the Himalayan cold does not harden the mountain fleece; it renders it into an ethereal cloud, softer than starlight."
          citation="Kashmiri Guild Archival Chronicle, 1864"
          coordinates="34.0837° N, 74.7973° E · 14,000 FT ELEVATION"
          heightClass="h-[52vh] min-h-[380px] max-h-[640px]"
          speed={0.28}
        />

        {/* 4. Studio & Loom (Macro Weave & Handloom Studio) */}
        <ThreeDExperience />

        {/* 5. Artisan Section with GSAP Parallax */}
        <ArtisanSection />

        {/* 6. Collection */}
        <CollectionSection
          currency={currency}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onQuickAdd={(p) => {
            handleAddToCart(p, 1);
            setIsCartOpen(true);
          }}
        />

        {/* Full-Width Editorial Parallax Breakout 2: Historic Loom Master Weaving */}
        <EditorialParallaxBanner
          imageSrc="/src/assets/images/artisan_weaving_loom_1791220650225.jpg"
          fallbackSrc="/src/assets/images/artisan_weaving_loom_1791220650225.jpg"
          alt="Close-up of master Kashmiri weaver operating antique cedarwood handloom in Srinagar atelier"
          eyebrow="Editorial Interlude · The Guilds"
          title="Six Centuries of Unbroken Devotion"
          quote="A modern machine counts threads in milliseconds. A Kashmiri master weaver counts them in heartbeats, breath, and ancestral memory."
          citation="Ustad Ghulam Nabi Dar, Senior Guild Patriarch"
          coordinates="DOWNTOWN SRINAGAR · HISTORIC LOOM CLUSTER"
          heightClass="h-[52vh] min-h-[380px] max-h-[640px]"
          speed={0.28}
        />

        {/* 7. Authenticity Section */}
        <AuthenticitySection />

        {/* 8. Direct From Kashmir Section with GSAP Parallax */}
        <DirectFromKashmir />

        {/* 9. Final CTA with GSAP Parallax */}
        <FinalCTA onShopCollection={() => scrollToSection('collection')} />
      </main>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        currency={currency}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Slide-Over Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        currency={currency}
        onClearCart={handleClearCart}
      />

      {/* Editorial Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
