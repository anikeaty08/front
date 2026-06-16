import React from 'react';
import { useLocation } from 'react-router-dom';

export default function About() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <>
      <section id="about" className={`py-24 lg:py-32 bg-bgSecondary relative overflow-hidden ${!isHome ? 'mt-24' : ''}`}>
        <div className="ambient-glow w-[350px] h-[350px] bottom-[-5%] left-[10%] bg-goldSecondary/5"></div>
        <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-8 reveal-on-scroll">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-goldPrimary"></div>
              <span className="text-[10px] tracking-[0.25em] text-goldPrimary uppercase">The Atelier Story</span>
            </div>
            <h1 className="font-serif text-4xl lg:text-5xl uppercase leading-tight">
              A Sanctuary of <span className="italic text-goldPrimary">Epicurean Art</span>
            </h1>
            <p className="text-textSecondary font-light leading-relaxed text-sm md:text-base">
              Founded in the heart of maritime luxury, Nereo is more than a restaurant — it is an atelier where pristine sea delicacies are handled like precious sculpture. We collaborate intimately with certified sustainable small-boat dayboat fishermen, importing the finest catch at dawn, cooked within hours.
            </p>
            <p className="text-textMuted font-light leading-relaxed text-sm">
              Every composition reflects deep culinary heritage, harmonized with avant-garde modern techniques under candlelight, providing an elite escape into fine food curation.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-borderGold/20">
              <div>
                <span className="font-serif text-4xl text-goldPrimary block font-light">100%</span>
                <span className="text-[10px] tracking-[0.18em] text-textSecondary uppercase mt-1 block">Wild Certified Sourcing</span>
              </div>
              <div>
                <span className="font-serif text-4xl text-goldPrimary block font-light">3 Michelin</span>
                <span className="text-[10px] tracking-[0.18em] text-textSecondary uppercase mt-1 block">Trained Mastery Team</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 relative flex justify-center reveal-on-scroll">
            <div className="relative w-full max-w-[500px] aspect-[4/5] img-zoom-container z-10">
              <video src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/8bd0314a-9525-4a13-996e-2c37cbd9e514/1779679066962-3a057e1e-bfc6-416d-9aed-468d7b6efb7d.mp4" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/012e23e6-f6f6-4823-8d02-f0db54528945_3840w.png" autoPlay muted playsInline loop className="w-full h-full object-cover shadow-2xl brightness-90 border border-borderGold/10"></video>
              <div className="absolute -inset-4 border border-goldPrimary/20 -z-10 pointer-events-none transform translate-x-3 translate-y-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24 bg-bgPrimary border-t border-borderGold/10">
        <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-16 text-center reveal-on-scroll">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-goldPrimary"></div>
            <span className="text-[10px] tracking-[0.25em] text-goldPrimary uppercase">Heritage Details</span>
            <div className="w-8 h-[1px] bg-goldPrimary"></div>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl uppercase mb-12">The Artisans Behind <span className="italic text-goldPrimary">The Mastery</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div className="glass-card p-8 rounded-2xl">
              <iconify-icon icon="solar:anchor-linear" width="32" className="text-goldPrimary mb-6"></iconify-icon>
              <h3 className="font-serif text-xl mb-3 text-goldPrimary">Maritime Roots</h3>
              <p className="text-sm text-textSecondary font-light leading-relaxed">
                Born from three generations of master seafarers, our founders deeply understand the ocean's temperament, ensuring unparalleled respect for every ingredient harvested.
              </p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <iconify-icon icon="solar:fire-square-linear" width="32" className="text-goldPrimary mb-6"></iconify-icon>
              <h3 className="font-serif text-xl mb-3 text-goldPrimary">Hearth Techniques</h3>
              <p className="text-sm text-textSecondary font-light leading-relaxed">
                Combining ancestral Japanese wood-fire methods with classical French precision, our culinary architects build flavor profiles rarely seen in modern gastronomy.
              </p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <iconify-icon icon="solar:crown-star-linear" width="32" className="text-goldPrimary mb-6"></iconify-icon>
              <h3 className="font-serif text-xl mb-3 text-goldPrimary">Global Accolades</h3>
              <p className="text-sm text-textSecondary font-light leading-relaxed">
                Continually recognized by the most prestigious global gastronomy authorities, Nereo maintains an elite standard that has defined luxury coastal dining for a decade.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}