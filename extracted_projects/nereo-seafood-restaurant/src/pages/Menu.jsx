import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const MENU_DATA = {
  1: [
    {
      name: "Wild Bluefin Toro Tartare",
      price: "$52",
      desc: "Aged soy infusion, finger lime pearls, fresh wasabi root, and toasted nori sea-tuille.",
      pairing: "Junmai Daiginjo Sake",
      img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/08c9c58c-2d57-4ca7-8332-4bf4b4ba27b6_3840w.png"
    },
    {
      name: "Imperial Beluga Caviar",
      price: "$240",
      desc: "Traditional luxury service, warm buckwheat blinis, organic egg mimosa, and cultured Normandy butter.",
      pairing: "Krug Grande Cuvée",
      img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eb2984cf-e10e-45e4-87df-7e337b4004cb_3840w.png"
    },
    {
      name: "Atlantic Oyster Curation",
      price: "$36",
      desc: "Half-dozen pristine hand-harvested oysters, cold-pressed champagne mignonette, and sea grapes.",
      pairing: "Chablis Premier Cru",
      img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b4eff543-522e-40bc-b177-d1b8a1ddf42d_3840w.png"
    },
    {
      name: "Hokkaido Scallop Ceviche",
      price: "$42",
      desc: "Infused with yuzu kosho, compressed green apple sheets, sea grape salad, and white balsamic mist.",
      pairing: "Sancerre Blanc",
      img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8c340cc1-02b0-44de-863c-32ac61fcc6dc_3840w.png"
    }
  ],
  2: [
    {
      name: "Brittany Blue Lobster",
      price: "$95",
      desc: "Poached gently in wild kelp butter, charred sweet baby leeks, and a silky reduction of coral cognac jus.",
      pairing: "Meursault Chardonnay",
      img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3810a6f0-2b1f-46e5-9cd6-f21eaef124b1_1600w.png"
    },
    {
      name: "Mediterranean Seabass",
      price: "$68",
      desc: "Pan-roasted crispy skin, wild sea fennel purée, rich smoked clam broth, and coastal herb oil.",
      pairing: "Puligny-Montrachet",
      img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8c340cc1-02b0-44de-863c-32ac61fcc6dc_3840w.png"
    },
    {
      name: "Dry-Aged Turbot",
      price: "$85",
      desc: "Wood-fired on the bone, served with golden chanterelles, hazelnut brown butter, and vin jaune emulsion.",
      pairing: "Savennières Chenin Blanc",
      img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b4eff543-522e-40bc-b177-d1b8a1ddf42d_3840w.png"
    },
    {
      name: "Miyazaki Surf & Turf",
      price: "$110",
      desc: "A5 Japanese Wagyu tenderloin accompanied by premium Carabineros prawn and sweet black garlic emulsion.",
      pairing: "Aged Gevrey-Chambertin Pinot Noir",
      img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3aca1d5e-4d7b-4112-abcf-d6abb301e1f1_3840w.png"
    }
  ],
  3: [
    {
      name: "Saffron & Pear Mille-Feuille",
      price: "$22",
      desc: "Crisped caramelized pastry layers, poached wild pear slices, and delicate Iranian saffron-infused cream.",
      pairing: "Château d'Yquem",
      img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/54bdb70d-a08c-4469-a481-ccb5a0020c58_3840w.png"
    }
  ]
};

export default function Menu() {
  const [activeMenuTab, setActiveMenuTab] = useState(1);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <>
      <section id="menu" className={`py-24 lg:py-32 bg-bgPrimary relative ${!isHome ? 'mt-24' : ''}`}>
        <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal-on-scroll">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-goldPrimary"></div>
                <span className="text-[10px] tracking-[0.25em] text-goldPrimary uppercase">The Atelier Menu</span>
              </div>
              <h1 className="font-serif text-4xl lg:text-5xl uppercase tracking-tight">
                The Gastronomy <span className="italic text-goldPrimary">Carte</span>
              </h1>
            </div>
            <p className="text-textMuted font-extralight text-sm max-w-sm">
              Designed daily according to deep-sea maritime migrations and farm harvest freshness. Click the page tabs below to turn the pages.
            </p>
          </div>

          <div className="glass-card rounded-[32px] overflow-hidden p-8 lg:p-12 relative reveal-on-scroll">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-goldSecondary/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 border-b border-borderGold/20 pb-8 mb-8">
              {[1, 2, 3].map((num) => (
                <button 
                  key={num} 
                  onClick={() => setActiveMenuTab(num)}
                  className={`px-5 py-3 text-[10px] md:text-xs tracking-[0.2em] font-medium uppercase border transition-all duration-300 ${activeMenuTab === num ? 'border-goldPrimary bg-goldPrimary/15 text-goldPrimary' : 'border-borderGold/20 text-textSecondary hover:border-goldPrimary hover:text-goldPrimary'}`}
                >
                  Page {num === 1 ? 'I: Cold & Raw' : num === 2 ? 'II: Sea & Hearth' : 'III: Confections & Elixirs'}
                </button>
              ))}
            </div>

            <div className="transition-opacity duration-500 ease-in-out">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
                {MENU_DATA[activeMenuTab]?.map((item, idx) => (
                  <div key={idx} className={`flex flex-col md:flex-row gap-6 items-start pb-8 ${idx < MENU_DATA[activeMenuTab].length - 2 ? 'border-b border-borderGold/10' : 'border-b border-borderGold/10 lg:border-none'}`}>
                    <div className="w-full md:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow space-y-2 w-full">
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-serif text-lg text-textPrimary uppercase tracking-wider">{item.name}</h3>
                        <span className="font-serif text-lg text-goldPrimary ml-2">{item.price}</span>
                      </div>
                      <p className="text-xs text-textMuted font-extralight leading-relaxed">{item.desc}</p>
                      <span className="inline-block text-[9px] tracking-widest text-goldPrimary uppercase font-normal mt-1">Sipping: {item.pairing}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24 bg-bgSecondary border-t border-borderGold/10">
        <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative rounded-3xl overflow-hidden reveal-on-scroll h-[400px]">
            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04577f05-e08d-4287-9412-e42e69e0216a_1600w.jpg" alt="Wine Pouring" className="w-full h-full object-cover brightness-75" />
            <div className="absolute inset-0 border border-borderGold/30 m-4 rounded-2xl pointer-events-none"></div>
          </div>
          <div className="order-1 md:order-2 space-y-6 reveal-on-scroll">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-goldPrimary"></div>
              <span className="text-[10px] tracking-[0.25em] text-goldPrimary uppercase">Pairing Details</span>
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl uppercase text-textPrimary">The Sommelier’s <span className="italic text-goldPrimary">Cellar</span></h2>
            <p className="text-sm font-light text-textSecondary leading-relaxed">
              Every dish on the Nereo menu is paired meticulously with rare vintages and niche appellations. Our Sommelier team maintains one of the most exclusive maritime-focused cellars in the nation, housing over 2,500 bottles of premier Cru Chablis, biodynamic Champagne, and artisanal Junmai sakes.
            </p>
            <ul className="space-y-4 pt-4 border-t border-borderGold/20">
              <li className="flex items-center gap-4 text-sm font-light text-textSecondary">
                <iconify-icon icon="solar:wineglass-linear" width="24" className="text-goldPrimary flex-shrink-0"></iconify-icon>
                <span>Curated Wine Flights available daily</span>
              </li>
              <li className="flex items-center gap-4 text-sm font-light text-textSecondary">
                <iconify-icon icon="solar:cup-linear" width="24" className="text-goldPrimary flex-shrink-0"></iconify-icon>
                <span>Exclusive Sake Imports directly from Japan</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}