import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Suite Data
      const suites = {
        presidential: {
          title: "Presidential Oceanfront Suite",
          subtitle: "The epitome of coastal luxury — private terrace, panoramic glass walls.",
          intro: "The Presidential Oceanfront Suite blends elegance with calm. Refined interiors, curated art, and a private terrace open directly to the horizon.",
          features: [
            "Size: 65 m²",
            "View: Full oceanfront + private terrace",
            "Layout: Separate bedroom, living area, and dining corner",
            "Bathroom: Marble-clad spa bath and rain shower",
            "Extras: Butler service & private dining setup"
          ],
          amenities: [
            "Personal espresso & tea station with premium blends",
            "Smart entertainment system with surround sound",
            "Luxury toiletries & monogrammed robes",
            "Walk-in wardrobe & digital safe",
            "Private check-in and priority concierge",
            "Option to connect adjoining suite for family stays"
          ]
        },
        horizon: {
          title: "Horizon Suite",
          subtitle: "Uninterrupted ocean views and timeless comfort.",
          intro: "Rise with the sea breeze and sip coffee on your private balcony. Airy interiors let sunlight dance across the room.",
          features: [
            "Size: 40 m²",
            "View: Panoramic oceanfront",
            "Balcony: Private with seating area",
            "Bed: King-size luxury bed",
            "Bathroom: Rainfall shower + soaking tub"
          ],
          amenities: [
            "Espresso machine with curated coffee capsules",
            "Plush robes and slippers",
            "55” Smart TV with streaming access",
            "Writing desk & reading chair",
            "Evening turndown and 24-hour room service"
          ]
        },
        marina: {
          title: "Marina Deluxe",
          subtitle: "Modern escape with Dubai Marina skyline views.",
          intro: "Floor-to-ceiling windows bring the city’s vibrancy inside while preserving a serene, balanced atmosphere.",
          features: [
            "Size: 30 m²",
            "View: Marina & city skyline",
            "Bed: King or Twin option",
            "Lighting: Adjustable ambience for work or relaxation",
            "Workspace: Executive desk with charging ports"
          ],
          amenities: [
            "Complimentary minibar with snacks and beverages",
            "High-speed Wi‑Fi and Smart TV",
            "Rainfall shower with marble finishes",
            "Laundry and pressing services",
            "Complimentary water and welcome drink"
          ]
        },
        garden: {
          title: "Garden Veranda Room",
          subtitle: "Private terrace embraced by lush greenery.",
          intro: "A tranquil sanctuary with earthy tones, woven textures, and indoor plants for a soothing aesthetic.",
          features: [
            "Size: 28 m²",
            "View: Private garden",
            "Terrace: Outdoor lounge with table and chairs",
            "Bed: Queen-size premium bedding",
            "Bathroom: Glass-enclosed rain shower"
          ],
          amenities: [
            "In-room minibar with local treats",
            "Smart TV & complimentary Wi‑Fi",
            "Nespresso coffee machine",
            "Daily housekeeping and evening turndown",
            "24-hour in-room dining"
          ]
        },
        sunset: {
          title: "Sunset Loft",
          subtitle: "Panoramic ocean and skyline vistas with rooftop access.",
          intro: "Contemporary minimalism meets coastal warmth, curated for golden-hour relaxation.",
          features: [
            "Size: 35 m²",
            "View: Ocean and skyline sunset panorama",
            "Lounge: Private seating area with sea-facing windows",
            "Access: Direct rooftop pool and bar access",
            "Bathroom: Freestanding tub with sea view"
          ],
          amenities: [
            "In-room espresso bar",
            "Spa-inspired toiletries and robes",
            "Bluetooth sound system for personal ambiance",
            "Personalized concierge service",
            "Aromatherapy turn-down ritual"
          ]
        }
      };

      // Elements
      const sheetRoot = document.getElementById('sheetRoot');
      const sheet = document.getElementById('sheet');
      const overlay = document.getElementById('sheetOverlay');
      const closeBtn = document.getElementById('sheetClose');

      const titleEl = document.getElementById('sheetTitle');
      const subtitleEl = document.getElementById('sheetSubtitle');
      const introEl = document.getElementById('sheetIntro');
      const featuresEl = document.getElementById('sheetFeatures');
      const amenitiesEl = document.getElementById('sheetAmenities');

      const tabButtons = document.querySelectorAll('.tab-btn');
      const panels = {
        features: document.getElementById('featuresPanel'),
        amenities: document.getElementById('amenitiesPanel')
      };

      function setActiveTab(name) {
        tabButtons.forEach(btn => {
          const isActive = btn.getAttribute('data-tab-btn') === name;
          btn.classList.toggle('bg-white', isActive);
          btn.classList.toggle('text-neutral-900', isActive);
          btn.classList.toggle('shadow-sm', isActive);
          btn.classList.toggle('border', isActive);
          btn.classList.toggle('border-neutral-200', isActive);
          if (!isActive) {
            btn.classList.remove('bg-white','text-neutral-900','shadow-sm','border','border-neutral-200');
            btn.classList.add('text-neutral-700');
          } else {
            btn.classList.remove('text-neutral-700');
          }
        });
        panels.features.classList.toggle('hidden', name !== 'features');
        panels.amenities.classList.toggle('hidden', name !== 'amenities');
      }

      function populateList(el, items) {
        el.innerHTML = items.map(text => {
          return `
            <li class="flex items-start gap-3 bg-white px-3 py-3">
              <div class="mt-0.5 shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-neutral-50 border border-neutral-200">
                <i data-lucide="check" class="w-3.5 h-3.5 stroke-[1.5] text-neutral-900"></i>
              </div>
              <span class="text-[13px] leading-5 text-neutral-800">${text}</span>
            </li>
          `;
        }).join('');
      }

      function openSheet(key) {
        const data = suites[key];
        if (!data) return;

        titleEl.textContent = data.title;
        subtitleEl.textContent = data.subtitle || '';
        introEl.textContent = data.intro || '';

        populateList(featuresEl, data.features || []);
        populateList(amenitiesEl, data.amenities || []);

        // Rebuild icons after dynamic injection
        if (window.lucide) {
          lucide.createIcons();
        }

        document.body.classList.add('overflow-hidden');
        overlay.classList.remove('opacity-0');
        overlay.classList.add('opacity-100');
        sheet.classList.remove('translate-y-full');
        sheet.classList.add('translate-y-0');
        sheetRoot.classList.remove('pointer-events-none');

        setActiveTab('features');
      }

      function closeSheet() {
        document.body.classList.remove('overflow-hidden');
        overlay.classList.add('opacity-0');
        overlay.classList.remove('opacity-100');
        sheet.classList.add('translate-y-full');
        sheet.classList.remove('translate-y-0');
        sheetRoot.classList.add('pointer-events-none');
      }

      // Wire up
      document.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', () => {
          const key = btn.getAttribute('data-suite');
          openSheet(key);
        });
      });

      overlay.addEventListener('click', closeSheet);
      closeBtn.addEventListener('click', closeSheet);

      tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const tab = btn.getAttribute('data-tab-btn');
          setActiveTab(tab);
          if (window.lucide) lucide.createIcons();
        });
      });

      // Initialize icons
      if (window.lucide) {
        lucide.createIcons();
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="mx-auto max-w-md min-h-screen flex flex-col">

<header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-neutral-200">
<div className="px-4 py-3 flex items-center justify-between">
<button className="inline-flex items-center gap-2 text-neutral-700 hover:text-neutral-900 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-300 rounded-lg px-2 py-1 -ml-2">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="chevron-left"></i>
<span className="text-sm font-medium">Back</span>
</button>
<div className="text-base font-semibold tracking-tight">AZ</div>
<button className="inline-flex items-center justify-center text-neutral-700 hover:text-neutral-900 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-300 rounded-lg p-2 -mr-2">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="search"></i>
</button>
</div>
<div className="px-4 pb-3">
<div className="flex items-end justify-between">
<div>
<h1 className="text-[22px] leading-tight font-semibold tracking-tight">Suites &amp; Rooms</h1>
<p className="text-sm text-neutral-600 mt-1">Curated stays along the ocean and skyline.</p>
</div>
<button className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900 border border-neutral-200 hover:border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-300">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="sliders-horizontal"></i>
              Filters
            </button>
</div>
</div>
</header>

<main className="flex-1 pb-32">
<section className="px-4 space-y-4 pt-4">

<article className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
<div className="relative">
<img alt="Presidential Oceanfront Suite" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent"></div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h2 className="text-[17px] font-semibold tracking-tight">Presidential Oceanfront Suite</h2>
<span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-2 py-1">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="sparkles"></i>
                  Signature
                </span>
</div>
<p className="text-sm text-neutral-600 mt-1">Panoramic glass walls, private terrace, and refined coastal luxury.</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 text-xs text-neutral-700 bg-neutral-50 border border-neutral-200 rounded-full px-2.5 py-1">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="ruler"></i>65 m²
                </span>
<span className="inline-flex items-center gap-1.5 text-xs text-neutral-700 bg-neutral-50 border border-neutral-200 rounded-full px-2.5 py-1">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="waves"></i>Oceanfront
                </span>
<span className="inline-flex items-center gap-1.5 text-xs text-neutral-700 bg-neutral-50 border border-neutral-200 rounded-full px-2.5 py-1">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="sofa"></i>Separate Living
                </span>
</div>
<div className="mt-4 flex items-center gap-2">
<button className="view-details inline-flex items-center justify-center flex-1 text-sm font-medium text-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800 rounded-xl px-3 py-2.5 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-300" data-suite="presidential">
                  View details
                </button>
<button className="inline-flex items-center justify-center flex-1 text-sm font-medium text-neutral-700 bg-white border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 rounded-xl px-3 py-2.5 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-300">
                  Check availability
                </button>
</div>
</div>
</article>

<article className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
<div className="relative">
<img alt="Horizon Suite" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent"></div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h2 className="text-[17px] font-semibold tracking-tight">Horizon Suite</h2>
<span className="inline-flex items-center gap-1 text-[11px] font-medium text-sky-700 bg-sky-50 border border-sky-100 rounded-full px-2 py-1">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="sun"></i>
                  Ocean View
                </span>
</div>
<p className="text-sm text-neutral-600 mt-1">Uninterrupted ocean views and timeless comfort with private balcony.</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 text-xs text-neutral-700 bg-neutral-50 border border-neutral-200 rounded-full px-2.5 py-1">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="ruler"></i>40 m²
                </span>
<span className="inline-flex items-center gap-1.5 text-xs text-neutral-700 bg-neutral-50 border border-neutral-200 rounded-full px-2.5 py-1">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="waves"></i>Panoramic
                </span>
<span className="inline-flex items-center gap-1.5 text-xs text-neutral-700 bg-neutral-50 border border-neutral-200 rounded-full px-2.5 py-1">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="bed"></i>King Bed
                </span>
</div>
<div className="mt-4 flex items-center gap-2">
<button className="view-details inline-flex items-center justify-center flex-1 text-sm font-medium text-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800 rounded-xl px-3 py-2.5 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-300" data-suite="horizon">
                  View details
                </button>
<button className="inline-flex items-center justify-center flex-1 text-sm font-medium text-neutral-700 bg-white border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 rounded-xl px-3 py-2.5 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-300">
                  Check availability
                </button>
</div>
</div>
</article>

<article className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
<div className="relative">
<img alt="Marina Deluxe" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent"></div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h2 className="text-[17px] font-semibold tracking-tight">Marina Deluxe</h2>
<span className="inline-flex items-center gap-1 text-[11px] font-medium text-purple-700 bg-purple-50 border border-purple-100 rounded-full px-2 py-1">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="building-2"></i>
                  Cityline
                </span>
</div>
<p className="text-sm text-neutral-600 mt-1">Modern escape with skyline views, optimized for work and rest.</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 text-xs text-neutral-700 bg-neutral-50 border border-neutral-200 rounded-full px-2.5 py-1">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="ruler"></i>30 m²
                </span>
<span className="inline-flex items-center gap-1.5 text-xs text-neutral-700 bg-neutral-50 border border-neutral-200 rounded-full px-2.5 py-1">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="briefcase"></i>Workspace
                </span>
<span className="inline-flex items-center gap-1.5 text-xs text-neutral-700 bg-neutral-50 border border-neutral-200 rounded-full px-2.5 py-1">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="sun-medium"></i>Ambience
                </span>
</div>
<div className="mt-4 flex items-center gap-2">
<button className="view-details inline-flex items-center justify-center flex-1 text-sm font-medium text-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800 rounded-xl px-3 py-2.5 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-300" data-suite="marina">
                  View details
                </button>
<button className="inline-flex items-center justify-center flex-1 text-sm font-medium text-neutral-700 bg-white border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 rounded-xl px-3 py-2.5 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-300">
                  Check availability
                </button>
</div>
</div>
</article>

<article className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
<div className="relative">
<img alt="Garden Veranda Room" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent"></div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h2 className="text-[17px] font-semibold tracking-tight">Garden Veranda Room</h2>
<span className="inline-flex items-center gap-1 text-[11px] font-medium text-green-700 bg-green-50 border border-green-100 rounded-full px-2 py-1">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="leaf"></i>
                  Garden
                </span>
</div>
<p className="text-sm text-neutral-600 mt-1">Tranquil sanctuary with private terrace and lush surroundings.</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 text-xs text-neutral-700 bg-neutral-50 border border-neutral-200 rounded-full px-2.5 py-1">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="ruler"></i>28 m²
                </span>
<span className="inline-flex items-center gap-1.5 text-xs text-neutral-700 bg-neutral-50 border border-neutral-200 rounded-full px-2.5 py-1">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="rocking-chair"></i>Veranda
                </span>
<span className="inline-flex items-center gap-1.5 text-xs text-neutral-700 bg-neutral-50 border border-neutral-200 rounded-full px-2.5 py-1">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="sprout"></i>Nature
                </span>
</div>
<div className="mt-4 flex items-center gap-2">
<button className="view-details inline-flex items-center justify-center flex-1 text-sm font-medium text-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800 rounded-xl px-3 py-2.5 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-300" data-suite="garden">
                  View details
                </button>
<button className="inline-flex items-center justify-center flex-1 text-sm font-medium text-neutral-700 bg-white border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 rounded-xl px-3 py-2.5 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-300">
                  Check availability
                </button>
</div>
</div>
</article>

<article className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
<div className="relative">
<img alt="Sunset Loft" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent"></div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h2 className="text-[17px] font-semibold tracking-tight">Sunset Loft</h2>
<span className="inline-flex items-center gap-1 text-[11px] font-medium text-orange-700 bg-orange-50 border border-orange-100 rounded-full px-2 py-1">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="sunset"></i>
                  Rooftop
                </span>
</div>
<p className="text-sm text-neutral-600 mt-1">Golden-hour haven with panoramic views and spa-inspired bath.</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 text-xs text-neutral-700 bg-neutral-50 border border-neutral-200 rounded-full px-2.5 py-1">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="ruler"></i>35 m²
                </span>
<span className="inline-flex items-center gap-1.5 text-xs text-neutral-700 bg-neutral-50 border border-neutral-200 rounded-full px-2.5 py-1">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="waves"></i>Ocean + Skyline
                </span>
<span className="inline-flex items-center gap-1.5 text-xs text-neutral-700 bg-neutral-50 border border-neutral-200 rounded-full px-2.5 py-1">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="music"></i>Bluetooth
                </span>
</div>
<div className="mt-4 flex items-center gap-2">
<button className="view-details inline-flex items-center justify-center flex-1 text-sm font-medium text-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800 rounded-xl px-3 py-2.5 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-300" data-suite="sunset">
                  View details
                </button>
<button className="inline-flex items-center justify-center flex-1 text-sm font-medium text-neutral-700 bg-white border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 rounded-xl px-3 py-2.5 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-300">
                  Check availability
                </button>
</div>
</div>
</article>
</section>
</main>

<div className="h-4" style={{paddingBottom: 'env(safe-area-inset-bottom)'}}></div>
</div>

<div className="fixed inset-0 z-50 pointer-events-none" id="sheetRoot">

<div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300" id="sheetOverlay"></div>

<div className="absolute inset-x-0 bottom-0 translate-y-full transition-transform duration-300 ease-out pointer-events-auto" id="sheet">
<div className="mx-auto max-w-md bg-white rounded-t-2xl shadow-2xl border border-neutral-200 overflow-hidden" style={{paddingBottom: 'env(safe-area-inset-bottom)'}}>

<div className="pt-3 pb-2 flex justify-center">
<div className="h-1.5 w-12 rounded-full bg-neutral-200"></div>
</div>

<div className="px-4 pb-3">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-[18px] font-semibold tracking-tight" id="sheetTitle">Suite</h3>
<p className="text-sm text-neutral-600 mt-0.5" id="sheetSubtitle"></p>
</div>
<button className="shrink-0 inline-flex items-center justify-center rounded-lg p-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-300" id="sheetClose">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="x"></i>
</button>
</div>
</div>

<div className="px-4">
<div className="text-[13px] text-neutral-700 leading-relaxed bg-neutral-50 border border-neutral-200 rounded-xl p-3" id="sheetIntro"></div>
</div>

<div className="px-3 mt-3">
<div className="grid grid-cols-2 gap-2 bg-neutral-100 p-1 rounded-xl border border-neutral-200">
<button className="tab-btn inline-flex items-center justify-center gap-2 text-sm font-medium rounded-lg px-3 py-2 bg-white text-neutral-900 shadow-sm border border-neutral-200" data-tab-btn="features">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="list-checks"></i>
                Features
              </button>
<button className="tab-btn inline-flex items-center justify-center gap-2 text-sm font-medium rounded-lg px-3 py-2 text-neutral-700 hover:text-neutral-900" data-tab-btn="amenities">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="gift"></i>
                Amenities
              </button>
</div>
</div>

<div className="px-4 py-3 space-y-2">
<div className="tab-panel" id="featuresPanel">
<ul className="divide-y divide-neutral-200 border border-neutral-200 rounded-xl overflow-hidden" id="sheetFeatures">

</ul>
</div>
<div className="tab-panel hidden" id="amenitiesPanel">
<ul className="divide-y divide-neutral-200 border border-neutral-200 rounded-xl overflow-hidden" id="sheetAmenities">

</ul>
</div>
</div>

<div className="px-4 pb-4">
<button className="w-full inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl px-4 py-3 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-300">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="calendar-check"></i>
              Book this suite
            </button>
</div>
</div>
</div>
</div>


    </>
  );
}
