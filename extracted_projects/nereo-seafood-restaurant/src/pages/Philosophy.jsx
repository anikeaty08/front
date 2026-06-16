import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Philosophy() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <>
      <section id="philosophy" className={`py-24 lg:py-32 bg-bgPrimary relative ${!isHome ? 'mt-24' : ''}`}>
        <div className="ambient-glow w-[400px] h-[400px] top-[10%] right-[15%] bg-goldSecondary/5"></div>
        <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-16 text-center space-y-8 reveal-on-scroll">
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-[1px] bg-goldPrimary"></div>
            <span className="text-[10px] tracking-[0.25em] text-goldPrimary uppercase">Our Ethos</span>
            <div className="w-8 h-[1px] bg-goldPrimary"></div>
          </div>
          <h1 className="font-serif text-4xl lg:text-5xl uppercase leading-tight">
            Harmonizing with <span className="italic text-goldPrimary">Nature</span>
          </h1>
          <p className="text-textSecondary font-light leading-relaxed text-sm md:text-base max-w-2xl mx-auto">
            At Nereo, we believe that true luxury lies in absolute reverence for the origin. Our culinary philosophy operates on a zero-compromise approach toward sustainability, seasonality, and the elevation of natural flavors. 
          </p>
        </div>

        <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          <div className="glass-card p-10 rounded-3xl reveal-on-scroll">
            <iconify-icon icon="solar:sprout-linear" width="40" className="text-goldPrimary mb-6"></iconify-icon>
            <h3 className="font-serif text-2xl uppercase mb-4">Zero-Waste Gastronomy</h3>
            <p className="text-sm text-textSecondary font-light leading-relaxed">
              We pioneer a closed-loop kitchen environment. Shells are calcified for garden soils, while fish frames and offcuts are transformed into rich, complex garums and broths that age in our cellar for up to 36 months, enhancing our dishes with unparalleled depth.
            </p>
          </div>
          <div className="glass-card p-10 rounded-3xl reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
            <iconify-icon icon="solar:water-drop-linear" width="40" className="text-goldPrimary mb-6"></iconify-icon>
            <h3 className="font-serif text-2xl uppercase mb-4">Ocean Guardianship</h3>
            <p className="text-sm text-textSecondary font-light leading-relaxed">
              We exclusively purchase from day-boat fishers who employ hook-and-line techniques. By refusing commercial trawling products, we ensure the safety of deep-sea ecosystems and guarantee that every plate served honors the balance of marine life.
            </p>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24 bg-bgSecondary border-t border-borderGold/10">
        <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-16 reveal-on-scroll">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[1px] bg-goldPrimary"></div>
            <span className="text-[10px] tracking-[0.25em] text-goldPrimary uppercase">Sustainability Details</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <h2 className="font-serif text-3xl uppercase leading-tight mb-6">
                Our Transparent <span className="italic text-goldPrimary">Supply Chain</span>
              </h2>
              <p className="text-sm font-light text-textSecondary leading-relaxed mb-6">
                We document the journey of every species that enters our atelier. Our guests can scan a proprietary registry upon dining to trace the exact latitude, time of catch, and the name of the artisan fisherman who procured their meal.
              </p>
            </div>
            <div className="lg:col-span-7 bg-[#0b0a08] border border-borderGold/20 rounded-2xl p-8">
              <ul className="space-y-6">
                {[
                  { stat: "98%", label: "Locally Foraged Ingredients" },
                  { stat: "100%", label: "Plastic-Free Kitchen Certification" },
                  { stat: "24h", label: "Maximum Ocean-to-Table Timeline" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center justify-between border-b border-borderGold/10 pb-4 last:border-0 last:pb-0">
                    <span className="text-sm uppercase tracking-widest text-textSecondary font-medium">{item.label}</span>
                    <span className="font-serif text-2xl text-goldPrimary">{item.stat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}