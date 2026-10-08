import React, { useState } from 'react';
import { ARTISANS } from '../data/artisans';
import { IMAGE_INVENTORY } from '../data/images';
import { GsapParallaxImage } from './GsapParallaxImage';
import { Award, HeartHandshake, UserCheck } from 'lucide-react';

export const ArtisanSection: React.FC = () => {
  const [selectedArtisanId, setSelectedArtisanId] = useState(ARTISANS[0].id);
  const currentArtisan = ARTISANS.find((a) => a.id === selectedArtisanId) || ARTISANS[0];

  const getArtisanFallback = (id: string) => {
    if (id === 'artisan-1') return IMAGE_INVENTORY.artisans.ghulam.fallback;
    if (id === 'artisan-2') return IMAGE_INVENTORY.artisans.fatima.fallback;
    return IMAGE_INVENTORY.artisans.bashir.fallback;
  };

  return (
    <section id="artisans" className="relative min-h-screen py-28 md:py-36 bg-[#0a0a0c] text-[#f5f2eb] flex flex-col justify-center border-t border-white/5 overflow-hidden">
      {/* Background Performant GSAP Parallax Layer: Srinagar Atelier */}
      <GsapParallaxImage
        src="/src/assets/images/kashmir_dal_lake_dawn_1791221870523.jpg"
        fallbackSrc="/src/assets/images/kashmir_dal_lake_dawn_1791221870523.jpg"
        alt="Artisan background ambience"
        speed={0.2}
        scale={1.22}
        fullBleed={true}
        className="w-full h-full object-cover filter brightness-[0.35]"
        overlayClassName="bg-gradient-to-t from-[#0a0a0c] via-transparent to-[#0a0a0c]"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#d8be8a] mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>The Custodians of Heritage</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#f5f2eb] tracking-tight leading-[1.1] mb-6">
            The Living Hands of <br />
            <span className="italic font-light text-gold-gradient">Srinagar's Master Guilds</span>
          </h2>
          <p className="text-base text-[#b8b3a7] font-light leading-relaxed">
            In an era of disposable fashion and synthetic mass-production, our master artisans spend months breathing soul into each singular weave. We honor their dignity with direct patronage.
          </p>
        </div>

        {/* Master Artisan Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Portrait & Documentary Imagery with GSAP Parallax */}
          <div className="lg:col-span-7 relative group">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-white/10 bg-[#121216] shadow-2xl">
              <GsapParallaxImage
                key={currentArtisan.id}
                src={currentArtisan.image}
                fallbackSrc={getArtisanFallback(currentArtisan.id)}
                alt={currentArtisan.name}
                speed={0.14}
                scale={1.16}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/20 to-transparent pointer-events-none" />

              {/* Bottom Badge */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-[#e8e4db] pointer-events-none">
                <div>
                  <p className="font-serif text-lg text-[#f5f2eb]">{currentArtisan.name}</p>
                  <p className="text-[11px] text-[#b3ad9f] tracking-widest uppercase">{currentArtisan.village}</p>
                </div>
                <div className="px-3 py-1 bg-black/60 border border-white/10 backdrop-blur-sm text-[#d8be8a] text-[11px] uppercase tracking-widest">
                  {currentArtisan.experience}
                </div>
              </div>
            </div>

            {/* Direct Wage Commitment Callout */}
            <div className="mt-4 p-4 bg-[#141418] border border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-[#d8be8a]">
                <HeartHandshake className="w-4 h-4" />
                <span className="uppercase tracking-wider font-medium">Direct Ethical Atelier Wage</span>
              </div>
              <span className="text-[#a39e94]">70% of Product Value Returned Directly to Weaver</span>
            </div>
          </div>

          {/* Right Column: Artisan Selector & Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            {/* Artisan Selector Tabs */}
            <div className="flex flex-col gap-2 border-b border-white/10 pb-6">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#8f8a80] mb-1">
                Select Master Craftsman
              </span>
              {ARTISANS.map((artisan) => {
                const isSelected = artisan.id === currentArtisan.id;
                return (
                  <button
                    key={artisan.id}
                    onClick={() => setSelectedArtisanId(artisan.id)}
                    className={`text-left p-3.5 rounded-sm transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-white/5 border border-[#d8be8a]/50 text-[#f5f2eb]'
                        : 'hover:bg-white/[0.02] border border-transparent text-[#9e998e]'
                    }`}
                  >
                    <div>
                      <p className={`font-serif text-base ${isSelected ? 'text-[#f5f2eb]' : 'text-[#cfcac0]'}`}>
                        {artisan.name}
                      </p>
                      <p className="text-xs text-[#8a857b] tracking-wider uppercase">{artisan.craftRole}</p>
                    </div>
                    {isSelected && <UserCheck className="w-4 h-4 text-[#d8be8a]" />}
                  </button>
                );
              })}
            </div>

            {/* Artisan Quote and Bio */}
            <div className="space-y-6">
              <div className="border-l-2 border-[#d8be8a] pl-5 py-1">
                <blockquote className="font-serif italic text-lg sm:text-xl text-[#eae6dd] leading-snug">
                  “{currentArtisan.quote}”
                </blockquote>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#b8b3a7] leading-relaxed">
                <p>{currentArtisan.bio}</p>
                <p className="text-[#8f8a80]">
                  <strong className="text-[#d8be8a] font-normal uppercase tracking-wider">Specialty: </strong>
                  {currentArtisan.specialty}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
