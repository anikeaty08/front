import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.getElementById('menuBtn').addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.toggle('hidden');
      });

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
      }, { threshold: 0.1 });
      document.querySelectorAll('.scroll-fade').forEach(el => observer.observe(el));

      const activities = [
        { name: "Indian Shores Beach", category: "beach", type: "Beaches", description: "The main local beach area near the Barefoot Beach Rental properties.", lat: 27.858, lng: -82.844 },
        { name: "Indian Rocks Beach", category: "beach", type: "Beaches", description: "Nearby beach area with restaurants, shops, and coastal charm.", lat: 27.889, lng: -82.843 },
        { name: "Clearwater Beach / Pier 60", category: "beach", type: "Beaches", description: "Popular beach destination known for sunset entertainment, performers, vendors, and oceanfront activities.", lat: 27.976, lng: -82.828 },
        { name: "St. Pete Beach", category: "beach", type: "Beaches", description: "Accessible by the Suncoast Beach Trolley and known for beautiful Gulf Coast beaches.", lat: 27.737, lng: -82.740 },
        { name: "Clearwater Marine Aquarium", category: "entertainment", type: "Entertainment & Activities", description: "A rescue, rehabilitation, and release aquarium with educational programs and marine life exhibits.", lat: 27.976, lng: -82.818 },
        { name: "Seaside Seabird Sanctuary", category: "entertainment", type: "Entertainment & Activities", description: "Wild bird sanctuary and rehabilitation center with free admission and donation-based support.", lat: 27.828, lng: -82.831 },
        { name: "Town Square Nature Park", category: "entertainment", type: "Entertainment & Activities", description: "An 800-foot boardwalk through Florida landscape with wildlife signs, mangroves, sea oats, and a fishing pier.", lat: 27.852, lng: -82.844 },
        { name: "Smuggler's Cove Adventure Golf", category: "entertainment", type: "Entertainment & Activities", description: "18-hole adventure-style miniature golf course with a live educational alligator exhibit.", lat: 27.844, lng: -82.844 },
        { name: "Pier 60", category: "entertainment", type: "Entertainment & Activities", description: "Evening sunset destination with vendors, performers, musicians, and family-friendly entertainment.", lat: 27.976, lng: -82.828 },
        { name: "John's Pass Village & Boardwalk", category: "entertainment", type: "Entertainment & Activities", description: "Popular local attraction with shopping, restaurants, fishing fleet, dolphin watching, shelling tours, boat rentals, parasailing, and jet skiing.", lat: 27.785, lng: -82.783 },
        { name: "Suncoast Beach Trolley", category: "entertainment", type: "Entertainment & Activities", description: "Convenient transportation along Gulf Blvd from St. Pete Beach to Clearwater Beach, with stops near the complex.", lat: 27.850, lng: -82.844 },
        { name: "Mahuffer's", category: "bar", type: "Bars", description: "A true dive bar with cocktails, live music, and a quirky veteran watering-hole atmosphere.", lat: 27.846, lng: -82.845 },
        { name: "Salt Rock Grill", category: "bar", type: "Bars", description: "Upscale steak and seafood spot that can also work for dinner and drinks.", lat: 27.848, lng: -82.845 },
        { name: "The Conch Republic Grill", category: "bar", type: "Bars", description: "Relaxed Key West-style restaurant with a beachy vibe, good food, and casual drinks.", lat: 27.822, lng: -82.828 },
        { name: "Guppy's On the Beach", category: "bar", type: "Bars", description: "Seafood restaurant with a nice atmosphere and Gulf-inspired dishes, suitable for dinner and drinks.", lat: 27.885, lng: -82.841 },
        { name: "Cafe de Paris Bakery", category: "restaurant", type: "Restaurants", description: "Excellent crepes, pastries, quiches, and sandwiches.", lat: 27.886, lng: -82.841 },
        { name: "Salt Rock Grill", category: "restaurant", type: "Restaurants", description: "Steaks, seafood, and excellent early bird specials.", lat: 27.848, lng: -82.845 },
        { name: "Indian Shores Coffee", category: "restaurant", type: "Restaurants", description: "Walking-distance coffee shop with fresh muffins and made-to-order breakfast sandwiches.", lat: 27.851, lng: -82.845 },
        { name: "The Original Crabby Bill's", category: "restaurant", type: "Restaurants", description: "Popular casual seafood spot with a fun atmosphere and lots of seafood options.", lat: 27.888, lng: -82.843 },
        { name: "Jake's Coastal Cantina", category: "restaurant", type: "Restaurants", description: "Casual Mexican restaurant with generous portions, daily specials, quesadillas, burritos, nachos, and tamales.", lat: 27.892, lng: -82.843 },
        { name: "Sweet Sage Cafe", category: "restaurant", type: "Restaurants", description: "Breakfast and brunch cafe known for weekend brunch buffets.", lat: 27.818, lng: -82.825 },
        { name: "Frog Pond", category: "restaurant", type: "Restaurants", description: "Fantastic big breakfast spot.", lat: 27.816, lng: -82.822 },
        { name: "Bay 1 Ice Cream & Sandwich Shop", category: "restaurant", type: "Restaurants", description: "Ice cream counter also serving Cuban sandwiches and empanadas.", lat: 27.853, lng: -82.844 },
        { name: "Guppy's On the Beach", category: "restaurant", type: "Restaurants", description: "Seafood restaurant with fresh Florida Gulf-inspired entrees and a nice atmosphere.", lat: 27.885, lng: -82.841 },
        { name: "The Conch Republic Grill", category: "restaurant", type: "Restaurants", description: "Laid-back Key West-style restaurant with consistent food, service, and a relaxed beachy vibe.", lat: 27.822, lng: -82.828 }
      ];

      const categoryColors = {
        beach: "#0891b2", entertainment: "#a855f7", bar: "#f97316", restaurant: "#dc2626"
      };
      const categoryIcons = {
        beach: "solar:sun-2-bold", entertainment: "solar:ticket-bold", bar: "solar:wineglass-triangle-bold", restaurant: "solar:cup-hot-bold"
      };

      const map = L.map('map', { scrollWheelZoom: false }).setView([27.8589, -82.8443], 11);
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap contributors © CARTO', maxZoom: 19
      }).addTo(map);

      const markers = [];
      activities.forEach((a, i) => {
        const color = categoryColors[a.category] || "#0891b2";
        const iconHtml = `<div class="pin-dot" style="background:${color}"><iconify-icon icon="${categoryIcons[a.category] || 'solar:map-point-bold'}"></iconify-icon></div>`;
        const marker = L.marker([a.lat, a.lng], {
          icon: L.divIcon({ className: 'custom-pin', html: iconHtml, iconSize: [28, 28], iconAnchor: [14, 28] })
        }).addTo(map);

        let actionLink = `<a href="#" style="display:inline-block;background:#0f172a;color:white;font-size:11px;padding:6px 12px;border-radius:999px;text-decoration:none">Get Directions</a>`;

        marker.bindPopup(`
          <div style="min-width:220px">
            <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.08em;color:${color};font-weight:600">${a.type}</div>
            <div style="font-family:'Fraunces',serif;font-size:15px;font-weight:600;color:#0f172a;margin:4px 0">${a.name}</div>
            <div style="font-size:12px;color:#475569;line-height:1.5;margin-bottom:8px">${a.description}</div>
            ${actionLink}
          </div>
        `);
        markers.push({ marker, data: a, index: i });
      });

      let currentFilter = 'all';
      let currentSearch = '';

      function renderList() {
        const list = document.getElementById('activityList');
        list.innerHTML = '';
        const filtered = activities.filter(a => {
          const matchCat = currentFilter === 'all' || a.category === currentFilter;
          const matchSearch = a.name.toLowerCase().includes(currentSearch.toLowerCase()) || a.type.toLowerCase().includes(currentSearch.toLowerCase());
          return matchCat && matchSearch;
        });
        filtered.forEach((a) => {
          const idx = activities.indexOf(a);
          const color = categoryColors[a.category] || "#0891b2";
          const el = document.createElement('div');
          el.className = 'p-3 rounded-xl hover:bg-stone-50 cursor-pointer transition border border-transparent hover:border-stone-200';

          el.innerHTML = `
            <div class="flex gap-3">
              <div class="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center" style="background:${color}20">
                <iconify-icon icon="${categoryIcons[a.category] || 'solar:map-point-bold'}" style="color:${color};font-size:16px"></iconify-icon>
              </div>
              <div class="flex-1 min-w-0">
                <div class="text-xs font-medium" style="color:${color}">${a.type}</div>
                <div class="text-sm font-semibold text-slate-900 truncate">${a.name}</div>
                <div class="text-xs text-slate-500 mt-0.5" style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${a.description}</div>
              </div>
            </div>
          `;
          el.addEventListener('click', () => {
            map.setView([a.lat, a.lng], 16);
            markers[idx].marker.openPopup();
          });
          list.appendChild(el);
        });
        if (filtered.length === 0) {
          list.innerHTML = '<div class="text-center py-8 text-sm text-slate-400">More recommendations coming soon...</div>';
        }
      }

      renderList();

      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active', 'bg-slate-900', 'text-white');
            b.classList.add('bg-stone-100', 'text-slate-700');
          });
          btn.classList.add('active', 'bg-slate-900', 'text-white');
          btn.classList.remove('bg-stone-100', 'text-slate-700');
          currentFilter = btn.dataset.filter;
          renderList();
        });
      });

      document.getElementById('searchInput').addEventListener('input', (e) => {
        currentSearch = e.target.value;
        renderList();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-stone-200/60">
<nav className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
<a className="flex items-center gap-2" href="#home">
<span className="font-display text-base font-semibold tracking-tight text-slate-900">
            Barefoot Beach Rental
          </span>
</a>
<div className="hidden lg:flex items-center gap-8 text-sm text-slate-600">
<a className="hover:text-cyan-700 transition" href="#home">Home</a>
<a className="hover:text-cyan-700 transition" href="#about">About Us</a>
<a className="hover:text-cyan-700 transition" href="#properties">
            Properties
          </a>
<a className="hover:text-cyan-700 transition" href="#things-to-do">
            Things To Do
          </a>
<a className="hover:text-cyan-700 transition" href="#reviews">Reviews</a>
</div>
<a className="hidden md:inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-full transition" href="#contact">
          Contact Us
          <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<button className="lg:hidden text-slate-700" id="menuBtn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</nav>
<div className="hidden lg:hidden bg-white border-t border-stone-200 px-5 py-4 space-y-3 text-sm" id="mobileMenu">
<a className="block text-slate-700" href="#home">Home</a>
<a className="block text-slate-700" href="#about">About Us</a>
<a className="block text-slate-700" href="#properties">Properties</a>
<a className="block text-slate-700" href="#things-to-do">Things To Do</a>
<a className="block text-slate-700" href="#reviews">Reviews</a>
<a className="block text-cyan-700 font-medium" href="#contact">Contact</a>
</div>
</header>

<section className="relative min-h-screen flex items-end pt-16 overflow-hidden" id="home">
<div className="absolute inset-0">
<img alt="Indian Shores Florida Gulf Coast beach" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&amp;q=80"/>
<div className="absolute inset-0 hero-overlay"></div>
</div>
<div className="relative max-w-7xl mx-auto px-5 lg:px-8 pb-16 lg:pb-24 w-full">
<div className="max-w-3xl text-white">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-xs mb-6">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
<span>Indian Shores, Florida · Gulf Coast</span>
</div>
<h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tight leading-[1.05] mb-5">
            Relax, Unwind, and Stay Barefoot in Indian Shores, Florida
          </h1>
<p className="text-base lg:text-lg text-white/85 max-w-2xl mb-8 leading-relaxed">
            Two beautiful Florida beach rental properties just steps from the
            Gulf — perfect for families, couples, and unforgettable coastal
            getaways.
          </p>
<div className="flex flex-wrap gap-3 mb-10">
<a className="inline-flex items-center gap-2 bg-white hover:bg-stone-100 text-slate-900 text-sm font-medium px-5 py-3 rounded-full transition" href="#properties">
              View Properties
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium px-5 py-3 rounded-full transition" href="#things-to-do">
              Explore Things To Do
            </a>
</div>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 text-xs bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 px-3 py-1.5 rounded-full">
<iconify-icon icon="solar:map-point-wave-linear"></iconify-icon>
              Indian Shores, FL
            </span>
<span className="inline-flex items-center gap-1.5 text-xs bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 px-3 py-1.5 rounded-full">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
              Family-Friendly
            </span>
<span className="inline-flex items-center gap-1.5 text-xs bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 px-3 py-1.5 rounded-full">
<iconify-icon icon="solar:waterdrops-linear"></iconify-icon>
              Steps to the Beach
            </span>
<span className="inline-flex items-center gap-1.5 text-xs bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 px-3 py-1.5 rounded-full">
<iconify-icon icon="solar:star-linear"></iconify-icon>
              Airbnb Superhost
            </span>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 h-16 wave-divider"></div>
</section>

<section className="py-20 lg:py-28 sand-bg" id="about">
<div className="max-w-7xl mx-auto px-5 lg:px-8">
<div className="max-w-4xl mx-auto">
<div className="scroll-fade flex flex-col items-center text-center">
<span className="text-xs uppercase tracking-widest text-orange-600 font-medium">
              About Us
            </span>
<h2 className="font-display text-3xl lg:text-5xl font-medium tracking-tight text-slate-900 mt-3 mb-6 leading-tight">
              A welcoming home base on Florida's Gulf Coast
            </h2>
<p className="text-slate-600 leading-relaxed mb-5 max-w-2xl">
              Barefoot Beach Rental was created to give guests a comfortable,
              relaxing home base for enjoying the beauty of Indian Shores and
              Florida's Gulf Coast. Whether you are planning a family vacation,
              a couples getaway, or a beach week with friends, our two
              properties offer a welcoming place to unwind, explore, and enjoy
              everything the area has to offer.
            </p>
<p className="text-slate-600 leading-relaxed mb-8 max-w-2xl">
              From sunrise walks along the sugar-white sand to sunset cruises
              across the Intracoastal Waterway, every detail of our rentals has
              been thoughtfully prepared to make your stay effortless. Both
              homes are bookable through Airbnb, where we proudly hold Superhost
              status.
            </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-3xl mb-8">
<div>
<div className="font-display text-3xl font-semibold text-cyan-700">
                  2
                </div>
<div className="text-xs text-slate-500 mt-1">
                  Coastal Properties
                </div>
</div>
<div>
<div className="font-display text-3xl font-semibold text-cyan-700">
                  5★
                </div>
<div className="text-xs text-slate-500 mt-1">Guest-Rated Stays</div>
</div>
<div>
<div className="font-display text-3xl font-semibold text-cyan-700">
                  Steps
                </div>
<div className="text-xs text-slate-500 mt-1">To the Gulf Beach</div>
</div>
<div>
<div className="font-display text-3xl font-semibold text-cyan-700">
                  365
                </div>
<div className="text-xs text-slate-500 mt-1">Days of Sunshine</div>
</div>
</div>
<div className="flex items-center justify-center gap-4">
<a aria-label="Facebook" className="w-10 h-10 rounded-full bg-white hover:bg-stone-50 border border-stone-200/60 shadow-sm flex items-center justify-center transition text-slate-700" href="https://www.facebook.com/barefootbeachrental" target="_blank">
<iconify-icon className="text-lg" icon="lucide:facebook"></iconify-icon>
</a>
<a aria-label="Instagram" className="w-10 h-10 rounded-full bg-white hover:bg-stone-50 border border-stone-200/60 shadow-sm flex items-center justify-center transition text-slate-700" href="https://www.instagram.com/barefootbeachrental?igsh=MWk2YzB0OTc4Ynd3Zw%3D%3D&amp;utm_source=qr" target="_blank">
<iconify-icon className="text-lg" icon="lucide:instagram"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-white" id="properties">
<div className="max-w-7xl mx-auto px-5 lg:px-8">
<div className="max-w-2xl mb-12 scroll-fade">
<span className="text-xs uppercase tracking-widest text-orange-600 font-medium">
            Properties
          </span>
<h2 className="font-display text-3xl lg:text-5xl font-medium tracking-tight text-slate-900 mt-3 mb-4 leading-tight">
            Two coastal homes, one unforgettable stay
          </h2>
<p className="text-slate-600 leading-relaxed">
            Choose the property that fits your group — both offer easy beach
            access, comfort, and a barefoot lifestyle. Book directly through
            Airbnb.
          </p>
</div>
<div className="grid lg:grid-cols-2 gap-8">

<article className="scroll-fade bg-stone-50 rounded-3xl overflow-hidden border border-stone-200/60 group">
<div className="relative overflow-hidden">
<div className="relative w-full h-72 group/slider z-20 pointer-events-none">
<style>
                  .no-scrollbar::-webkit-scrollbar { display: none; }
                  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                </style>
<div className="carousel flex overflow-x-auto snap-x snap-mandatory w-full h-full no-scrollbar pointer-events-auto">
<img alt="Modern Coastal Living Room with Gray Sectional" className="w-full h-full object-cover flex-shrink-0 snap-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/57f55850-439f-4ee6-aad6-5d0f0ae4ba4f_800w.png"/>
<img alt="Modern Neutral Living Room Interior" className="w-full h-full object-cover flex-shrink-0 snap-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32e2c1ef-d007-4546-b2fe-1c48b53eb5ec_800w.png"/>
<img alt="Modern Living Room with Neutral Tones" className="w-full h-full object-cover flex-shrink-0 snap-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3a34021f-549d-44bd-a693-9b0a8aa01dbc_800w.png"/>
<img alt="Modern Kitchenette and Dining Area Interior" className="w-full h-full object-cover flex-shrink-0 snap-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d62ab783-d087-4965-b7d7-a71171351e2d_800w.png"/>
<img alt="Modern White Kitchen with Stainless Steel Appliances" className="w-full h-full object-cover flex-shrink-0 snap-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/537cd13a-5486-4050-9e2d-ea64115338f1_800w.png"/>
<img alt="Modern Minimalist Dining Room with Woven Pendant Light" className="w-full h-full object-cover flex-shrink-0 snap-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/514f68b8-aa85-4c48-a3d8-6bcede72b976_800w.png"/>
<img alt="Modern Minimalist Dining Area with Woven Accents" className="w-full h-full object-cover flex-shrink-0 snap-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/58bcb507-c845-4a2a-b8ef-acc0214294f9_800w.png"/>
<img alt="Minimalist Coastal Bedroom Design" className="w-full h-full object-cover flex-shrink-0 snap-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e6108257-9af2-4261-885a-b73778022fec_800w.png"/>
<img alt="Modern White Bathroom with Glass Shower" className="w-full h-full object-cover flex-shrink-0 snap-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2e2294d4-bb43-4356-89ba-8ce6f2108933_800w.png"/>
<img alt="Modern Neutral Master Bedroom with French Doors" className="w-full h-full object-cover flex-shrink-0 snap-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c7c57fca-4874-4bba-af77-be764d3669b3_800w.png"/>
<img alt="Minimalist Living Room with Neutral Accents" className="w-full h-full object-cover flex-shrink-0 snap-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a70b3033-dbcc-48cc-a764-9c8a2c6557f4_800w.png"/>
<img alt="Pastel Blue Tropical Townhouse Exterior" className="w-full h-full object-cover flex-shrink-0 snap-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/be61fd23-c562-4385-b7a1-8307e63ce3b0_800w.png"/>
<img alt="Aerial View of Tropical Waterfront Resort and Pool" className="w-full h-full object-cover flex-shrink-0 snap-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/53027727-03b8-4b73-9d16-80e8d80bab53_800w.png"/>
<img alt="Sunny Waterfront Boardwalk and Tropical Resort" className="w-full h-full object-cover flex-shrink-0 snap-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/85a6e5b8-271c-4a7d-9c98-4d7324ebed74_800w.png"/>
<img alt="Waterfront Resort Harbor with Palm Trees" className="w-full h-full object-cover flex-shrink-0 snap-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a2aba933-b847-4523-a40a-a69d57868e74_800w.png"/>
</div>
<button aria-label="Previous image" className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/90 shadow-sm backdrop-blur-md rounded-full text-slate-800 opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-white z-10 pointer-events-auto" onclick="event.preventDefault(); this.parentElement.querySelector('.carousel').scrollBy({left: -this.parentElement.offsetWidth, behavior: 'smooth'})" type="button">
<iconify-icon className="text-lg" icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button aria-label="Next image" className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/90 shadow-sm backdrop-blur-md rounded-full text-slate-800 opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-white z-10 pointer-events-auto" onclick="event.preventDefault(); this.parentElement.querySelector('.carousel').scrollBy({left: this.parentElement.offsetWidth, behavior: 'smooth'})" type="button">
<iconify-icon className="text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-xs px-3 py-1.5 rounded-full font-medium text-slate-900 z-20 pointer-events-none">
                2 Bedroom · Sleeps 6
              </div>
<div className="absolute top-4 right-4 bg-rose-500 text-white text-xs px-3 py-1.5 rounded-full font-medium flex items-center gap-1 z-20 pointer-events-none">
<iconify-icon icon="solar:star-bold"></iconify-icon>
                Superhost
              </div>
</div>
<div className="p-7">
<div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                Indian Shores, Florida · Steps to Gulf
              </div>
<h3 className="font-display text-2xl font-semibold tracking-tight text-slate-900 mb-3">
                2 BR Condo
              </h3>
<p className="text-sm text-slate-600 leading-relaxed mb-5">
                Welcome to our beautifully updated 2-bedroom coastal retreat.
                Featuring a fully stocked kitchen, spacious living area, and
                situated just steps from the pristine Gulf sands. Perfectly
                suited for families or groups looking to balance beach days with
                relaxing evenings in.
              </p>
<ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs text-slate-700 mb-6">
<li className="flex items-center gap-2">
<iconify-icon className="text-cyan-600" icon="solar:waterdrops-linear"></iconify-icon>
                  Steps to beach
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-cyan-600" icon="solar:users-group-rounded-linear"></iconify-icon>
                  Sleeps up to 6
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-cyan-600" icon="solar:bed-linear"></iconify-icon>
                  2 bedrooms
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-cyan-600" icon="solar:chef-hat-minimalistic-linear"></iconify-icon>
                  Full kitchen
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-cyan-600" icon="solar:wi-fi-router-linear"></iconify-icon>
                  Wifi included
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-cyan-600" icon="solar:swimming-linear"></iconify-icon>
                  Pool access
                </li>
</ul>
<div className="flex gap-2">
<a className="flex-1 inline-flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium px-5 py-3 rounded-full transition" href="#contact">
                  Book Now
                </a>
</div>
</div>
</article>

<article className="scroll-fade bg-stone-50 rounded-3xl overflow-hidden border border-stone-200/60 group">
<div className="relative overflow-hidden">
<div className="relative w-full h-72 group/slider z-20 pointer-events-none">
<style>
                  .no-scrollbar::-webkit-scrollbar { display: none; }
                  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                </style>
<div className="carousel flex overflow-x-auto snap-x snap-mandatory w-full h-full no-scrollbar">
<img alt="Modern Neutral Living Room" className="w-full h-full object-cover flex-shrink-0 snap-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32feaa73-9532-4d3c-b2ee-8cb2d3e5dd92_800w.png"/>
<img alt="Modern Neutral Living Room" className="w-full h-full object-cover flex-shrink-0 snap-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fe50ce23-26fa-40ba-92a7-5179d0071976_800w.png"/>
<img alt="Modern White Kitchen" className="w-full h-full object-cover flex-shrink-0 snap-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2e598650-d241-467f-8bd5-c22543132995_800w.png"/>
<img alt="Modern White Murphy Bed" className="w-full h-full object-cover flex-shrink-0 snap-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70d127d7-584f-4cc6-bc56-35898e966561_800w.png"/>
<img alt="Neutral Coastal Bedroom" className="w-full h-full object-cover flex-shrink-0 snap-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f6e17e79-2d14-4990-b903-3b5097fd4d29_800w.png"/>
<img alt="Modern Neutral Bathroom" className="w-full h-full object-cover flex-shrink-0 snap-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/276c3541-57a6-4700-bc1c-8611db58c2fa_800w.png"/>
<img alt="Modern Minimalist Dining Room with Botanical Art" className="w-full h-full object-cover flex-shrink-0 snap-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f5eb667b-0152-4de0-a5b8-0f70723f1895_800w.png"/>
<img alt="Elegant Entryway Console with Coastal Decor" className="w-full h-full object-cover flex-shrink-0 snap-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/24a83d1a-21cc-49f9-bef3-78fe5acba469_800w.png"/>
<img alt="Minimalist Sunlit Living Area with Wooden Sofa" className="w-full h-full object-cover flex-shrink-0 snap-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a680ebc8-ebe6-474d-bf96-a2313d4a886e_800w.png"/>
<img alt="Tropical Resort Pool with Palm Tree Reflections" className="w-full h-full object-cover flex-shrink-0 snap-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/276e49bc-727d-4af0-90e9-e7b0f91dce73_800w.png"/>
<img alt="Tropical Resort Pool Area and Yellow Condominiums" className="w-full h-full object-cover flex-shrink-0 snap-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a7bd6818-9e11-4a4a-afa3-5aa596875563_800w.png"/>
<img alt="Aerial View of Coastal Resort and Beachfront Properties" className="w-full h-full object-cover flex-shrink-0 snap-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c4f7954d-2941-4b76-973b-cbd9f706a4d8_800w.png"/>
<img alt="Waterfront Tropical Resort with Pool and Docks" className="w-full h-full object-cover flex-shrink-0 snap-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f81ddf6d-17e3-4b95-b226-88d9be347e98_800w.png"/>
<img alt="Barefoot Beach Resort Directory Map" className="w-full h-full object-cover flex-shrink-0 snap-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c8da5b4f-99d1-405d-8602-a129d2088b6f_800w.png"/>
</div>
<button aria-label="Previous image" className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/90 shadow-sm backdrop-blur-md rounded-full text-slate-800 opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-white z-10 pointer-events-auto" onclick="event.preventDefault(); this.parentElement.querySelector('.carousel').scrollBy({left: -this.parentElement.offsetWidth, behavior: 'smooth'})" type="button">
<iconify-icon className="text-lg" icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button aria-label="Next image" className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/90 shadow-sm backdrop-blur-md rounded-full text-slate-800 opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-white z-10 pointer-events-auto" onclick="event.preventDefault(); this.parentElement.querySelector('.carousel').scrollBy({left: this.parentElement.offsetWidth, behavior: 'smooth'})" type="button">
<iconify-icon className="text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-xs px-3 py-1.5 rounded-full font-medium text-slate-900 z-20 pointer-events-none">
                1 Bedroom · Sleeps 5
              </div>
<div className="absolute top-4 right-4 bg-rose-500 text-white text-xs px-3 py-1.5 rounded-full font-medium flex items-center gap-1 z-20 pointer-events-none">
<iconify-icon icon="solar:star-bold"></iconify-icon>
                Superhost
              </div>
</div>
<div className="p-7">
<div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                Indian Shores, Florida · Steps to Gulf
              </div>
<h3 className="font-display text-2xl font-semibold tracking-tight text-slate-900 mb-3">
                1 BR Condo
              </h3>
<p className="text-sm text-slate-600 leading-relaxed mb-5">
                A beautifully updated 1-bedroom coastal escape with modern
                amenities and classic Florida charm. Features a plush king bed,
                fully stocked kitchen, and steps to the pristine Gulf waters.
                Ideal for couples seeking a relaxing retreat.
              </p>
<ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs text-slate-700 mb-6">
<li className="flex items-center gap-2">
<iconify-icon className="text-cyan-600" icon="solar:waterdrops-linear"></iconify-icon>
                  Steps to beach
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-cyan-600" icon="solar:users-group-rounded-linear"></iconify-icon>
                  Sleeps up to 5
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-cyan-600" icon="solar:bed-linear"></iconify-icon>
                  1 bedroom
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-cyan-600" icon="solar:chef-hat-minimalistic-linear"></iconify-icon>
                  Full kitchen
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-cyan-600" icon="solar:wi-fi-router-linear"></iconify-icon>
                  Wifi included
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-cyan-600" icon="solar:swimming-linear"></iconify-icon>
                  Pool access
                </li>
</ul>
<div className="flex gap-2">
<a className="flex-1 inline-flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium px-5 py-3 rounded-full transition" href="#contact">
                  Book Now
                </a>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-20 lg:py-28 sand-bg" id="things-to-do">
<div className="max-w-7xl mx-auto px-5 lg:px-8">
<div className="max-w-3xl mb-10 scroll-fade">
<span className="text-xs uppercase tracking-widest text-orange-600 font-medium">
            Explore
          </span>
<h2 className="font-display text-3xl lg:text-5xl font-medium tracking-tight text-slate-900 mt-3 mb-4 leading-tight">
            Explore Things To Do Around Indian Shores
          </h2>
<p className="text-slate-600 leading-relaxed">
            Discover local beaches, water sports, nature preserves,
            family-friendly attractions, and waterfront dining. Be sure to view
            our exclusive Host Guidebook below to easily see the locations of
            these handpicked recommendations and plan your perfect Indian Shores
            getaway.
          </p>
<div className="mt-6">
<a className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium px-6 py-3 rounded-full transition" href="https://www.airbnb.ca/s/guidebooks?refinement_paths[]=/guidebooks/831161" target="_blank">
<iconify-icon icon="solar:book-bookmark-linear"></iconify-icon>
              View Our Host Guidebook
            </a>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-6">

<div className="lg:order-1 order-2 bg-white rounded-3xl border border-stone-200/60 overflow-hidden flex flex-col" style={{maxHeight: '720px'}}>
<div className="p-5 border-b border-stone-200/60">
<div className="relative mb-4">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full pl-9 pr-3 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-full focus:outline-none focus:border-cyan-500 focus:bg-white transition" id="searchInput" placeholder="Search activities &amp; restaurants..." type="text"/>
</div>
<div className="flex flex-wrap gap-1.5 mb-3" id="filterBar">
<button className="filter-btn active text-xs px-3 py-1.5 rounded-full bg-slate-900 text-white" data-filter="all">
                  All
                </button>
<button className="filter-btn text-xs px-3 py-1.5 rounded-full bg-stone-100 text-slate-700 hover:bg-stone-200" data-filter="beach">
                  Beaches
                </button>
<button className="filter-btn text-xs px-3 py-1.5 rounded-full bg-stone-100 text-slate-700 hover:bg-stone-200" data-filter="entertainment">
                  Entertainment &amp; Activities
                </button>
<button className="filter-btn text-xs px-3 py-1.5 rounded-full bg-stone-100 text-slate-700 hover:bg-stone-200" data-filter="bar">
                  Bars
                </button>
<button className="filter-btn text-xs px-3 py-1.5 rounded-full bg-stone-100 text-slate-700 hover:bg-stone-200" data-filter="restaurant">
                  Restaurants
                </button>
</div>

</div>
<div className="flex-1 overflow-y-auto p-3 space-y-2" id="activityList"></div>
</div>

<div className="relative lg:col-span-2 lg:order-2 order-1 rounded-3xl overflow-hidden border border-stone-200/60 bg-white" style={{height: '720px'}}>
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.279768630129!2d-82.8465011!3d27.8594957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2fca3aa12dcfd%3A0xc6c4fa1ed1432f8!2sIndian%20Shores%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
<div id="map" style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}></div>
</div>
</div>
<div className="mt-10 bg-white rounded-3xl border border-stone-200/60 overflow-hidden scroll-fade">
<div className="p-6 border-b border-stone-200/60 bg-stone-50/50">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center text-xl">
<iconify-icon icon="solar:bus-bold-duotone"></iconify-icon>
</div>
<div>
<h3 className="font-display text-2xl font-semibold tracking-tight text-slate-900">
                  City Advice
                </h3>
<p className="text-sm text-slate-500">
                  Getting around Indian Shores
                </p>
</div>
</div>
</div>
<div className="p-6 lg:p-8">
<h4 className="text-lg font-semibold text-slate-900 mb-3">
              Suncoast Beach Trolley
            </h4>
<p className="text-slate-600 text-sm leading-relaxed mb-6">
              Take the Suncoast Beach Trolley and explore area beaches,
              restaurants and local attractions the easy way - without worrying
              about directions or parking. Runs up and down Gulf Blvd from St
              Pete Beach to Clearwater Beach. There are trolley stops in front
              of the complex running both south and north on Gulf Blvd.
            </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/60">
<div className="text-xs text-slate-500 mb-1">Regular fare</div>
<div className="font-semibold text-slate-900">$2.25</div>
</div>
<div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/60">
<div className="text-xs text-slate-500 mb-1">Seniors/Students</div>
<div className="font-semibold text-slate-900">$1.10</div>
</div>
<div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/60">
<div className="text-xs text-slate-500 mb-1">1 Day Group Pass</div>
<div className="font-semibold text-slate-900">
                  $10
                  <span className="text-[10px] font-normal text-slate-500">
                    (up to 5 ppl)
                  </span>
</div>
</div>
<div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/60">
<div className="text-xs text-slate-500 mb-1">Children Under 8</div>
<div className="font-semibold text-emerald-600">Free</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-white">
<div className="max-w-7xl mx-auto px-5 lg:px-8">
<div className="max-w-2xl mb-12 scroll-fade">
<span className="text-xs uppercase tracking-widest text-orange-600 font-medium">
            Inspiration
          </span>
<h2 className="font-display text-3xl lg:text-5xl font-medium tracking-tight text-slate-900 mt-3 mb-4 leading-tight">
            Make the Most of Your Stay
          </h2>
<p className="text-slate-600 leading-relaxed">
            From sunrise paddleboards to sunset cruises — here's a glimpse of
            life on Florida's Gulf Coast.
          </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
<div className="relative col-span-2 md:row-span-2 group overflow-hidden rounded-2xl">
<img alt="Tropical Waterfront Resort with Boardwalk and Palm Trees" className="w-full h-full object-cover aspect-[4/5] group-hover:scale-105 transition duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0c38c606-47ce-45fc-8a8a-418dd556440b_1600w.png"/>
<div className="absolute bottom-4 left-4 right-4 text-white text-xs drop-shadow-md">
<div className="font-semibold">Tropical Waterfront Resort</div>
<div className="text-[10px] text-white/90 mt-0.5 font-normal">
                Tropical waterfront living
              </div>
</div>
</div>
<div className="relative group overflow-hidden rounded-2xl">
<img alt="Sunny White Sand Beach with Turquoise Water" className="w-full h-full aspect-square object-cover group-hover:scale-105 transition duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4d9ffa4b-ad78-4e87-b1bd-bf6f52cecea8_800w.png"/>
<div className="absolute bottom-4 left-4 right-4 text-white text-xs drop-shadow-md">
<div className="font-semibold">Sunny White Sand Beaches</div>
<div className="text-[10px] text-white/90 mt-0.5 font-normal">
                Beach day
              </div>
</div>
</div>
<div className="relative group overflow-hidden rounded-2xl">
<img alt="Wooden Boardwalk at Beach Sunset" className="w-full h-full aspect-square object-cover group-hover:scale-105 transition duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3da6f460-5fc3-42bf-bbd9-a5e6af32d7ee_800w.png"/>
<div className="absolute bottom-4 left-4 right-4 text-white text-xs drop-shadow-md">
<div className="font-semibold">Sunset Boardwalks</div>
<div className="text-[10px] text-white/90 mt-0.5 font-normal">
                Sunset walk
              </div>
</div>
</div>
<div className="relative group overflow-hidden rounded-2xl">
<img alt="Outdoor Mini Golf Adventure Park" className="w-full h-full aspect-square object-cover group-hover:scale-105 transition duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/373f593e-e52e-4f83-8562-a62806b7f175_800w.png"/>
<div className="absolute bottom-4 left-4 right-4 text-white text-xs drop-shadow-md">
<div className="font-semibold">Mini Golf</div>
<div className="text-[10px] text-white/90 mt-0.5 font-normal">
                Family fun
              </div>
</div>
</div>
<div className="relative group overflow-hidden rounded-2xl">
<img alt="Man Riding Personal Watercraft on Blue Ocean" className="w-full h-full aspect-square object-cover group-hover:scale-105 transition duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0c15cc7b-2df9-47a0-b1fa-4e21c1b7c089_800w.png"/>
<div className="absolute bottom-4 left-4 right-4 text-white text-xs drop-shadow-md">
<div className="font-semibold">Water Sports</div>
<div className="text-[10px] text-white/90 mt-0.5 font-normal">
                Jet skiing
              </div>
</div>
</div>
<div className="relative group overflow-hidden rounded-2xl">
<img alt="Waterfront Deck Dining Scene" className="w-full h-full aspect-square object-cover group-hover:scale-105 transition duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1f15fdff-be53-47f2-b754-4129c6b7df16_800w.png"/>
<div className="absolute bottom-4 left-4 right-4 text-white text-xs drop-shadow-md">
<div className="font-semibold">Waterfront Deck Dining</div>
<div className="text-[10px] text-white/90 mt-0.5 font-normal">
                Lunch
              </div>
</div>
</div>
<div className="relative group overflow-hidden rounded-2xl">
<img alt="Night Glow Kayaking Tour" className="w-full h-full aspect-square object-cover group-hover:scale-105 transition duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2939a0ef-84ac-43e5-9526-3832e3ca405f_800w.png"/>
<div className="absolute bottom-4 left-4 right-4 text-white text-xs drop-shadow-md">
<div className="font-semibold">Night Glow Kayaking</div>
<div className="text-[10px] text-white/90 mt-0.5 font-normal">
                Night glow kayaking
              </div>
</div>
</div>
<div className="relative group overflow-hidden rounded-2xl">
<img alt="Waterfront Patio Dining at Twilight" className="w-full h-full aspect-square object-cover group-hover:scale-105 transition duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/82aa5f4f-666c-447c-ad32-f4ebdb42478f_800w.png"/>
<div className="absolute bottom-4 left-4 right-4 text-white text-xs drop-shadow-md">
<div className="font-semibold">Patio Dining</div>
<div className="text-[10px] text-white/90 mt-0.5 font-normal">
                Dinner
              </div>
</div>
</div>
<div className="relative group overflow-hidden rounded-2xl">
<img alt="Fishing Yacht Silhouette at Sunset" className="w-full h-full aspect-square object-cover group-hover:scale-105 transition duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/80c10878-a4c4-4035-897d-9c13ff544f55_800w.png"/>
<div className="absolute bottom-4 left-4 right-4 text-white text-xs drop-shadow-md">
<div className="font-semibold">Fishing Yacht Sunset</div>
<div className="text-[10px] text-white/90 mt-0.5 font-normal">
                Sunset cruise
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 sand-bg" id="reviews">
<div className="max-w-7xl mx-auto px-5 lg:px-8">
<div className="max-w-2xl mb-12 scroll-fade">
<span className="text-xs uppercase tracking-widest text-orange-600 font-medium">
            Reviews
          </span>
<h2 className="font-display text-3xl lg:text-5xl font-medium tracking-tight text-slate-900 mt-3 mb-4 leading-tight">
            What Our Airbnb Guests Are Saying
          </h2>
<p className="text-slate-600 leading-relaxed">
            Hear from the families and travelers who've made Barefoot Beach
            Rental their home away from home — read more reviews on our Airbnb
            listings.
          </p>
</div>
<div className="grid lg:grid-cols-2 gap-8 mb-10">
<div className="space-y-5">
<h3 className="font-display text-2xl font-semibold tracking-tight text-slate-900 border-b border-stone-200/60 pb-3">
              1 Bedroom Reviews
            </h3>
<article className="bg-white rounded-2xl p-6 border border-stone-200/60 scroll-fade visible">
<div className="flex items-center justify-between mb-3">
<div className="flex gap-0.5 text-orange-500">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-[10px] uppercase tracking-widest text-rose-500 font-semibold">
                  Airbnb
                </span>
</div>
<p className="text-sm text-slate-600 italic leading-relaxed mb-5">
                "Perfect stay for a young family. Location was great; convenient
                pool and beach access, near local restaurants, and within
                walking distance of coffee shop and putt putt course. Host was
                super responsive and accommodating...
                <a className="text-cyan-700 font-semibold hover:underline not-italic ml-1" href="https://www.airbnb.ca/rooms/48749508" target="_blank">
                  Read more
                </a>
                "
              </p>
<div className="flex items-center gap-3 pt-4 border-t border-stone-100">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center text-white text-xs font-semibold">
                  G
                </div>
<div>
<div className="text-sm font-medium text-slate-900">Guest</div>
<div className="text-xs text-slate-500">Stayed in the 1BR</div>
</div>
</div>
</article>
<article className="bg-white rounded-2xl p-6 border border-stone-200/60 scroll-fade visible">
<div className="flex items-center justify-between mb-3">
<div className="flex gap-0.5 text-orange-500">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-[10px] uppercase tracking-widest text-rose-500 font-semibold">
                  Airbnb
                </span>
</div>
<p className="text-sm text-slate-600 italic leading-relaxed mb-5">
                "Absolutely perfect place and wonderful area. Ate at Crabby's
                twice. Pool &amp; beach are very convenient! Rula answered all
                my questions quickly and furnished everything needed for a...
                <a className="text-cyan-700 font-semibold hover:underline not-italic ml-1" href="https://www.airbnb.ca/rooms/48749508" target="_blank">
                  Read more
                </a>
                "
              </p>
<div className="flex items-center gap-3 pt-4 border-t border-stone-100">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center text-white text-xs font-semibold">
                  G
                </div>
<div>
<div className="text-sm font-medium text-slate-900">Guest</div>
<div className="text-xs text-slate-500">Stayed in the 1BR</div>
</div>
</div>
</article>
<a className="bg-white rounded-2xl border border-stone-200/60 p-5 flex items-center justify-between hover:border-rose-300 transition group" href="https://www.airbnb.ca/rooms/48749508" target="_blank">
<div>
<div className="text-xs text-slate-500 mb-1">View more reviews</div>
<div className="text-sm font-semibold text-slate-900">
                  1 Bedroom Listing on Airbnb
                </div>
</div>
<iconify-icon className="text-rose-500 text-xl group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="space-y-5">
<h3 className="font-display text-2xl font-semibold tracking-tight text-slate-900 border-b border-stone-200/60 pb-3">
              2 Bedroom Reviews
            </h3>
<article className="bg-white rounded-2xl p-6 border border-stone-200/60 scroll-fade visible">
<div className="flex items-center justify-between mb-3">
<div className="flex gap-0.5 text-orange-500">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-[10px] uppercase tracking-widest text-rose-500 font-semibold">
                  Airbnb
                </span>
</div>
<p className="text-sm text-slate-600 italic leading-relaxed mb-5">
                "We had a great stay here. Everything was exactly as pictured
                and the place was very clean. The host provided everything we
                needed, which made for a really comfortable and easy trip...
                <a className="text-cyan-700 font-semibold hover:underline not-italic ml-1" href="https://www.airbnb.ca/rooms/18192283" target="_blank">
                  Read more
                </a>
                "
              </p>
<div className="flex items-center gap-3 pt-4 border-t border-stone-100">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center text-white text-xs font-semibold">
                  G
                </div>
<div>
<div className="text-sm font-medium text-slate-900">Guest</div>
<div className="text-xs text-slate-500">Stayed in the 2BR</div>
</div>
</div>
</article>
<article className="bg-white rounded-2xl p-6 border border-stone-200/60 scroll-fade visible">
<div className="flex items-center justify-between mb-3">
<div className="flex gap-0.5 text-orange-500">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-[10px] uppercase tracking-widest text-rose-500 font-semibold">
                  Airbnb
                </span>
</div>
<p className="text-sm text-slate-600 italic leading-relaxed mb-5">
                "No need to look any further; this is the place to stay in
                Indian Shores. Rula was an amazing host and so sweet and
                friendly. The condo is located in the perfect location...
                <a className="text-cyan-700 font-semibold hover:underline not-italic ml-1" href="https://www.airbnb.ca/rooms/18192283" target="_blank">
                  Read more
                </a>
                "
              </p>
<div className="flex items-center gap-3 pt-4 border-t border-stone-100">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center text-white text-xs font-semibold">
                  G
                </div>
<div>
<div className="text-sm font-medium text-slate-900">Guest</div>
<div className="text-xs text-slate-500">Stayed in the 2BR</div>
</div>
</div>
</article>
<a className="bg-white rounded-2xl border border-stone-200/60 p-5 flex items-center justify-between hover:border-rose-300 transition group" href="https://www.airbnb.ca/rooms/18192283" target="_blank">
<div>
<div className="text-xs text-slate-500 mb-1">View more reviews</div>
<div className="text-sm font-semibold text-slate-900">
                  2 Bedroom Listing on Airbnb
                </div>
</div>
<iconify-icon className="text-rose-500 text-xl group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 ocean-grad relative overflow-hidden" id="contact">
<div className="absolute inset-0 opacity-10">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&amp;q=80"/>
</div>
<div className="relative max-w-6xl mx-auto px-5 lg:px-8">
<div className="max-w-2xl mx-auto text-center scroll-fade">
<h2 className="font-display text-3xl lg:text-5xl font-medium tracking-tight text-white mb-4 leading-tight">
            Ready to Stay Barefoot?
          </h2>
<p className="text-white/80 leading-relaxed text-lg mb-8">
            Book instantly by giving us a call, or reach out for property
            details and local recommendations.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
<a className="inline-flex items-center gap-2 bg-white hover:bg-stone-100 text-slate-900 text-sm font-medium px-6 py-3 rounded-full transition" href="tel:+14168353334">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
              +1 416 835 3334
            </a>
<a className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium px-6 py-3 rounded-full transition" href="mailto:iamrula@hotmail.com">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
              iamrula@hotmail.com
            </a>
</div>
<div className="flex items-center justify-center gap-3">
<a aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition text-white" href="https://www.facebook.com/barefootbeachrental" target="_blank">
<iconify-icon icon="lucide:facebook"></iconify-icon>
</a>
<a aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition text-white" href="https://www.instagram.com/barefootbeachrental?igsh=MWk2YzB0OTc4Ynd3Zw%3D%3D&amp;utm_source=qr" target="_blank">
<iconify-icon icon="lucide:instagram"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-white py-14 lg:py-16">
<div className="max-w-7xl mx-auto px-5 lg:px-8">
<div className="grid md:grid-cols-4 gap-10 mb-10">
<div className="md:col-span-2">
            Two beautiful vacation rentals in Indian Shores, Florida. Created
            for guests who want comfort, beach access, and a barefoot kind of
            lifestyle.
          </div>
<div>
<h4 className="text-xs uppercase tracking-widest text-white/40 font-medium mb-4">
              Book Direct
            </h4>
<ul className="space-y-2.5 text-sm text-white/70">
<li>
<a className="hover:text-white inline-flex items-center gap-1" href="https://www.airbnb.ca/rooms/18192283" target="_blank">
                  2 Bedroom on Airbnb
                  <iconify-icon className="text-xs" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</li>
<li>
<a className="hover:text-white inline-flex items-center gap-1" href="https://www.airbnb.ca/rooms/48749508" target="_blank">
                  1 Bedroom on Airbnb
                  <iconify-icon className="text-xs" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</li>
<li><a className="hover:text-white" href="#about">About Us</a></li>
<li>
<a className="hover:text-white" href="#things-to-do">
                  Things To Do
                </a>
</li>
<li><a className="hover:text-white" href="#reviews">Reviews</a></li>
</ul>
</div>
<div>
<h4 className="text-xs uppercase tracking-widest text-white/40 font-medium mb-4">
              Contact
            </h4>
<ul className="space-y-2.5 text-sm text-white/70">
<li>
<a className="hover:text-white transition" href="mailto:iamrula@hotmail.com">
                  iamrula@hotmail.com
                </a>
</li>
<li>
<a className="hover:text-white transition" href="tel:+14168353334">
                  +1 416 835 3334
                </a>
</li>
<li>Indian Shores, FL</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-white/50">
<span>© 2026 Barefoot Beach Rental. All rights reserved.</span>
<span>Vacation rental properties in Indian Shores, Florida.</span>
</div>
</div>
</footer>


    </>
  );
}
