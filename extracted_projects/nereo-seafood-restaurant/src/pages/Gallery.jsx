import React from 'react';
import { useLocation } from 'react-router-dom';

const GALLERY_DATA = [
  { img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b4eff543-522e-40bc-b177-d1b8a1ddf42d_3840w.png", aspect: "aspect-square", cat: "Gourmet Curation", title: "Sustainably Harvested Oysters" },
  { img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ad3cb03-d76b-4c0f-9d82-8e7a31948eac_1600w.png", aspect: "aspect-[3/4] md:row-span-2", cat: "Visual Ambiance", title: "Main Dining Hall Intimacy" },
  { img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a130615c-68c2-4525-b229-afb2938ed03e_3840w.png", aspect: "aspect-square", cat: "Curated Cellar", title: "Prestige Reserves & Decanters" },
  { img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/54bdb70d-a08c-4469-a481-ccb5a0020c58_3840w.png", aspect: "aspect-[4/3]", cat: "Behind the Scenes", title: "Culinary Crafting Atelier" },
  { img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8c340cc1-02b0-44de-863c-32ac61fcc6dc_3840w.png", aspect: "aspect-square", cat: "Gastronomy", title: "Gourmet Clam Infusions" },
];

export default function Gallery() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <>
      <section id="gallery" className={`py-24 lg:py-32 bg-bgPrimary relative ${!isHome ? 'mt-24' : ''}`}>
        <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal-on-scroll">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-goldPrimary"></div>
                <span className="text-[10px] tracking-[0.25em] text-goldPrimary uppercase">Visual Ambiance</span>
              </div>
              <h1 className="font-serif text-4xl lg:text-5xl uppercase">
                The Atelier <span className="italic text-goldPrimary">Atmos</span>
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_DATA.map((item, i) => (
              <div key={i} className={`relative ${item.aspect} overflow-hidden img-zoom-container rounded-3xl border border-borderGold/20 reveal-on-scroll`}>
                <img src={item.img} alt={item.title} className="w-full h-full object-cover brightness-[0.7]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span className="text-[10px] text-goldPrimary tracking-widest uppercase font-semibold">{item.cat}</span>
                  <h4 className="font-serif text-lg text-textPrimary mt-1">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24 bg-bgSecondary border-t border-borderGold/10">
        <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-16 reveal-on-scroll">
          <div className="glass-card p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-goldPrimary to-transparent opacity-50"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-[10px] tracking-[0.25em] text-goldPrimary uppercase mb-4">Architecture & Design Details</h3>
                <h2 className="font-serif text-3xl uppercase mb-6">Designing <span className="italic text-goldPrimary">Elegance</span></h2>
                <p className="text-sm font-light text-textSecondary leading-relaxed mb-6">
                  The visual splendor of Nereo extends beyond the plate. Our dining hall was conceptualized by leading coastal architects to mimic the serene textures of deep sea caverns. Custom-blown glass fixtures refract candlelight to simulate sunlight piercing ocean waves, while burnt-oak paneling pays homage to historic maritime vessels.
                </p>
                <button className="text-[10px] tracking-[0.2em] uppercase font-bold text-bgPrimary bg-goldPrimary px-6 py-3 hover:brightness-110 transition-all">
                  Request Venue Packet
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83fa49d8-9835-4cea-8d39-9e6015e75de6_800w.jpg" alt="Restaurant Design 1" className="w-full h-full object-cover rounded-xl border border-borderGold/20" />
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3cfd7acb-9b13-466b-9197-b4fc2cac7bcd_800w.jpg" alt="Restaurant Design 2" className="w-full h-full object-cover rounded-xl border border-borderGold/20 mt-6" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}