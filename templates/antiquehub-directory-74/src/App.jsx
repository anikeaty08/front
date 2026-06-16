import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    [
      {
        "title": "Thompson's Treasures Antiques",
        "address": "81577 US-183, Sargent, NE 68874",
        "street": "81577 US-183",
        "city": "Sargent",
        "postalCode": "68874",
        "state": "Nebraska",
        "countryCode": "US",
        "phone": "(308) 527-3799",
        "phoneUnformatted": "+13085273799",
        "location": { "lat": 41.6514196, "lng": -99.3661626 },
        "openingHours": [],
        "categories": ["Antique store"],
        "url": "https://www.google.com/maps/search/?api=1&query=Thompson's%20Treasures%20Antiques&query_place_id=ChIJmTLNfqeInIcR5PXdTeccLhk",
        "imageUrl": "https://images.unsplash.com/photo-1519710884009-717b0cd0d2f2?q=80&w=1200&auto=format&fit=crop"
      },
      {
        "title": "Railroad Towne Antique Mall",
        "address": "319 W 3rd St #323, Grand Island, NE 68801",
        "street": "319 W 3rd St #323",
        "city": "Grand Island",
        "postalCode": "68801",
        "state": "Nebraska",
        "countryCode": "US",
        "phone": "(308) 398-2222",
        "phoneUnformatted": "+13083982222",
        "location": { "lat": 40.9244079, "lng": -98.3429336 },
        "openingHours": [
          { "day": "Monday", "hours": "10 AM to 6 PM" },
          { "day": "Tuesday", "hours": "10 AM to 6 PM" },
          { "day": "Wednesday", "hours": "10 AM to 6 PM" },
          { "day": "Thursday", "hours": "10 AM to 6 PM" },
          { "day": "Friday", "hours": "10 AM to 6 PM" },
          { "day": "Saturday", "hours": "10 AM to 6 PM" },
          { "day": "Sunday", "hours": "1 to 5 PM" }
        ],
        "categories": ["Antique store"],
        "url": "https://www.google.com/maps/search/?api=1&query=Railroad%20Towne%20Antique%20Mall&query_place_id=ChIJsdvVR1uGmYcRzP2HcKaqYuY",
        "imageUrl": "https://images.unsplash.com/photo-1517420878257-463729f6d0a2?q=80&w=1200&auto=format&fit=crop"
      },
      {
        "title": "Aardvark Antique Mall",
        "address": "5800 Arbor Rd, Lincoln, NE 68517",
        "street": "5800 Arbor Rd",
        "city": "Lincoln",
        "postalCode": "68517",
        "state": "Nebraska",
        "countryCode": "US",
        "phone": "(402) 464-5100",
        "phoneUnformatted": "+14024645100",
        "location": { "lat": 40.8936478, "lng": -96.6396301 },
        "openingHours": [
          { "day": "Monday", "hours": "9 AM to 8 PM" },
          { "day": "Tuesday", "hours": "9 AM to 8 PM" },
          { "day": "Wednesday", "hours": "9 AM to 8 PM" },
          { "day": "Thursday", "hours": "9 AM to 8 PM" },
          { "day": "Friday", "hours": "9 AM to 8 PM" },
          { "day": "Saturday", "hours": "9 AM to 8 PM" },
          { "day": "Sunday", "hours": "9 AM to 8 PM" }
        ],
        "categories": ["Antique store"],
        "url": "https://www.google.com/maps/search/?api=1&query=Aardvark%20Antique%20Mall&query_place_id=ChIJ5aXddkm6locRxfn1XPTWgzQ",
        "imageUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop"
      }
    ]
    


      // ---------- Utilities ----------
      const qs = (s, el=document)=>el.querySelector(s);
      const qsa = (s, el=document)=>Array.from(el.querySelectorAll(s));
      const byId = id => document.getElementById(id);
      const fmt = n => new Intl.NumberFormat().format(n);
      const clamp = (v,min,max)=>Math.max(min,Math.min(max,v));
      const deg2rad = d => d * (Math.PI/180);
      const haversineMiles = (a,b)=>{
        if(!a||!b) return Infinity;
        const R = 3958.8; // miles
        const dLat = deg2rad(b.lat - a.lat);
        const dLon = deg2rad(b.lng - a.lng);
        const lat1 = deg2rad(a.lat);
        const lat2 = deg2rad(b.lat);
        const h = Math.sin(dLat/2)**2 + Math.cos(lat1)*Math.cos(lat2)*Math.sin(dLon/2)**2;
        return 2 * R * Math.asin(Math.sqrt(h));
      };
      const stateAbbrev = s => {
        if(!s) return '';
        const map = { 'Nebraska':'NE', 'NE':'NE' };
        return map[s] || s;
      };
      const titleCase = s => (s||'').replace(/\w\S*/g, t=>t.charAt(0).toUpperCase()+t.substr(1).toLowerCase());
      const isAntique = cats => Array.isArray(cats) && cats.map(c=>c.toLowerCase()).includes('antique store');

      // ---------- Theme ----------
      const THEME_KEY = 'ah-theme';
      function applyTheme(t){
        const body = document.body;
        const icon = byId('themeIcon');
        const classesLight = ['bg-stone-50','text-stone-900'];
        const classesDark = ['bg-stone-950','text-stone-100'];
        // Reset
        body.classList.remove(...classesLight, ...classesDark);
        if(t==='dark'){
          body.classList.add(...classesDark);
          qsa('.bg-white').forEach(el=>el.classList.replace('bg-white','bg-stone-900'));
          qsa('.bg-stone-50').forEach(el=>el.classList.replace('bg-stone-50','bg-stone-800/30'));
          qsa('.border-stone-200').forEach(el=>{ el.classList.remove('border-stone-200'); el.classList.add('border-stone-700'); });
          qsa('.text-stone-700').forEach(el=>{ el.classList.remove('text-stone-700'); el.classList.add('text-stone-200'); });
          qsa('.text-stone-600').forEach(el=>{ el.classList.remove('text-stone-600'); el.classList.add('text-stone-300'); });
          qsa('.text-stone-500').forEach(el=>{ el.classList.remove('text-stone-500'); el.classList.add('text-stone-400'); });
          qsa('.hover\\:bg-stone-100').forEach(el=>{ el.classList.remove('hover:bg-stone-100'); el.classList.add('hover:bg-stone-800'); });
          icon.setAttribute('data-lucide','sun');
        } else {
          body.classList.add(...classesLight);
          // naive restore by reloading
          // For simplicity, reload to reset palette safely
          // but avoid reload loops
          if(!applyTheme._restored){
            applyTheme._restored = true;
            setTimeout(()=>location.reload(), 50);
          }
        }
        localStorage.setItem(THEME_KEY, t);
      }

      // ---------- State ----------
      const APP = {
        raw: [],
        shops: [],
        filtered: [],
        view: 'explore', // 'explore' | 'favorites'
        query: { name: '', state: '', county: '', zip: '', near: null, radius: 25 },
        user: null,
        favorites: new Set(),
        layout: 'grid', // 'grid' or 'list'
        center: null, // {lat,lng} for nearby search
      };

      const USER_KEY = 'ah-user';
      const FAV_KEY = uid => `ah-fav-${uid||'guest'}`;

      function loadUser(){
        try {
          APP.user = JSON.parse(localStorage.getItem(USER_KEY)) || null;
        } catch { APP.user = null; }
        loadFavorites();
        renderAuthUI();
      }
      function saveUser(u){
        APP.user = u;
        localStorage.setItem(USER_KEY, JSON.stringify(u));
        loadFavorites();
        renderAuthUI();
      }
      function loadFavorites(){
        const key = FAV_KEY(APP.user?.id);
        try {
          const arr = JSON.parse(localStorage.getItem(key)) || [];
          APP.favorites = new Set(arr);
        } catch { APP.favorites = new Set(); }
      }
      function saveFavorites(){
        const key = FAV_KEY(APP.user?.id);
        localStorage.setItem(key, JSON.stringify(Array.from(APP.favorites)));
      }

      // ---------- Data Load ----------
      async function loadData(){
        // Try to fetch attached file; fallback to embedded JSON
        try {
          const res = await fetch('NE_2025-10-11_13-58-54.json');
          if(res.ok){
            APP.raw = await res.json();
          } else {
            APP.raw = JSON.parse(byId('data-fallback').textContent);
          }
        } catch(e){
          APP.raw = JSON.parse(byId('data-fallback').textContent);
        }
        normalize();
        populateFilters();
        applyFilters();
      }

      function normalize(){
        // Normalize to required structure
        APP.shops = APP.raw
          .filter(item => isAntique(item.categories || item.categoryName ? [item.categoryName||''].concat(item.categories||[]) : []))
          .map(item => {
            const shopName = item.title || item.name || 'Antique Shop';
            const state = item.state || '';
            const city = item.city || '';
            const streetAddress = item.street || (item.address?.split(',')[0] || '');
            const zipCode = item.postalCode || '';
            const phoneNumber = item.phone || '';
            const email = item.email || ''; // rarely provided in dataset
            const lat = item.location?.lat || item.latitude || null;
            const lng = item.location?.lng || item.longitude || null;
            const imageUrl = item.imageUrl || `https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1200&auto=format&fit=crop`;
            const hoursOfOperation = Array.isArray(item.openingHours) ? item.openingHours : [];
            const mapsUrl = item.url || (lat && lng ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shopName)}&query_place_id=&query=${lat},${lng}` : null);
            return {
              id: item.placeId || `${shopName}-${city}-${zipCode}`.toLowerCase().replace(/\s+/g,'-'),
              shopName,
              streetAddress,
              city,
              state: stateAbbrev(state),
              county: item.county || '', // not available in most rows
              zipCode,
              phoneNumber,
              email,
              hoursOfOperation,
              latitude: lat,
              longitude: lng,
              imageUrl,
              mapsUrl
            };
          });
        // De-dup by id
        const seen = new Set();
        APP.shops = APP.shops.filter(s => {
          if(seen.has(s.id)) return false;
          seen.add(s.id);
          return true;
        });
        byId('totalCount').textContent = fmt(APP.shops.length);
      }

      // ---------- Filters ----------
      function populateFilters(){
        const states = Array.from(new Set(APP.shops.map(s=>s.state).filter(Boolean))).sort();
        const stateFilterEls = [byId('stateFilter'), byId('m_stateFilter')];
        stateFilterEls.forEach(sel=>{
          // clear except 'All'
          sel.innerHTML = '<option value="">All</option>' + states.map(s=>`<option value="${s}">${s}</option>`).join('');
        });
      }
      function syncFilterInputs(fromMobile=false){
        if(fromMobile){
          byId('searchName').value = byId('m_searchName').value;
          byId('stateFilter').value = byId('m_stateFilter
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="flex flex-col min-h-screen bg-stone-50 text-stone-900" id="app">

<header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-stone-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-14">

<div className="flex items-center gap-3">
<div className="h-8 w-8 grid place-items-center rounded-md bg-amber-700 text-amber-50 text-sm font-semibold tracking-tight select-none">
                AH
              </div>
<div className="hidden sm:block">
<h1 className="text-[18px] sm:text-[20px] tracking-tight font-semibold">AntiqueHub</h1>
<p className="text-xs text-stone-500">Discover antiques across Nebraska</p>
</div>
</div>

<div className="flex-1 px-3 sm:px-6 lg:px-10 max-w-xl">
<div className="relative">
<input className="w-full h-10 rounded-md pl-10 pr-10 bg-stone-100 focus:bg-white border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-300/40 outline-none transition" id="searchTop" placeholder="Search shops by name..." type="text"/>
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-stone-400">
<i data-lucide="search"></i>
</div>
<button className="absolute inset-y-0 right-1 my-1 px-3 rounded-md bg-stone-200 hover:bg-stone-300 text-stone-700 text-sm font-medium hidden max-sm:flex items-center gap-2" id="openFiltersBtn">
<i data-lucide="sliders-horizontal"></i><span>Filters</span>
</button>
</div>
</div>

<div className="flex items-center gap-2">
<button className="hidden sm:flex items-center gap-2 h-9 px-3 rounded-md border border-stone-200 hover:bg-stone-100 transition text-sm font-medium" id="mapViewBtn">
<i data-lucide="map-pin"></i>
                Map View
              </button>
<button className="h-9 w-9 grid place-items-center rounded-md border border-stone-200 hover:bg-stone-100 transition" id="themeToggle" title="Toggle theme">
<i data-lucide="moon" id="themeIcon"></i>
</button>

<div className="flex items-center gap-2" id="authArea">
<button className="h-9 px-3 rounded-md bg-amber-700 hover:bg-amber-800 text-amber-50 text-sm font-medium" id="loginBtn">Log In</button>
<button className="h-9 px-3 rounded-md border border-amber-200 text-amber-800 bg-amber-50 hover:bg-amber-100 text-sm font-medium" id="signupBtn">Sign Up</button>

<div className="hidden relative" id="profileMenu">
<button className="h-9 px-3 rounded-md border border-stone-200 hover:bg-stone-100 flex items-center gap-2 text-sm" id="profileBtn">
<i data-lucide="user-round"></i>
<span className="font-medium" id="profileName">You</span>
<i className="text-stone-400" data-lucide="chevron-down"></i>
</button>
<div className="absolute right-0 mt-2 w-48 bg-white rounded-md border border-stone-200 shadow-lg hidden" id="profileDropdown">
<button className="w-full text-left px-3 py-2 text-sm hover:bg-stone-50 flex items-center gap-2" data-nav="favorites">
<i data-lucide="heart"></i> My Favorites
                    </button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-stone-50 flex items-center gap-2" data-nav="explore">
<i data-lucide="compass"></i> Explore
                    </button>
<div className="my-1 border-t border-stone-200"></div>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-stone-50 text-rose-600 flex items-center gap-2" id="logoutBtn">
<i data-lucide="log-out"></i> Sign Out
                    </button>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="border-b border-stone-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2 text-sm text-stone-600">
<span className="inline-flex items-center gap-1"><i data-lucide="database"></i><span id="totalCount">0</span> total</span>
<span className="text-stone-300">|</span>
<span className="inline-flex items-center gap-1"><i data-lucide="filter"></i><span id="activeFilters">0</span> filters</span>
<span className="text-stone-300">|</span>
<button className="inline-flex items-center gap-1 text-stone-700 hover:text-amber-800 font-medium" id="clearFilters">
<i data-lucide="rotate-ccw"></i> Clear
              </button>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="h-9 px-3 rounded-md border border-stone-200 hover:bg-stone-100 text-sm flex items-center gap-2" id="toggleLayout">
<i data-lucide="grid-2x2"></i> Grid
              </button>
<button className="h-9 px-3 rounded-md bg-stone-100 hover:bg-stone-200 border border-stone-200 text-sm flex items-center gap-2" id="openFiltersBtnDesktop">
<i data-lucide="sliders-horizontal"></i> Filters
              </button>
</div>
</div>
</div>
</section>

<main className="flex-1">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-4 grid grid-cols-1 lg:grid-cols-12 gap-6">

<aside className="hidden lg:block lg:col-span-3" id="filtersDesktop">
<div className="sticky top-[74px] space-y-4">
<div className="rounded-lg border border-stone-200 bg-white">
<div className="p-4 border-b border-stone-100">
<h2 className="text-[18px] tracking-tight font-semibold">Filters</h2>
<p className="text-xs text-stone-500">Refine your search</p>
</div>
<div className="p-4 space-y-4">

<div>
<label className="block text-sm font-medium text-stone-700 mb-1">Shop name</label>
<div className="relative">
<input className="w-full h-10 rounded-md pl-10 pr-3 bg-stone-100 focus:bg-white border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-300/40 outline-none transition" id="searchName" placeholder="e.g., Vintage, Mall…" type="text"/>
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-stone-400">
<i data-lucide="search"></i>
</div>
</div>
</div>

<div>
<label className="block text-sm font-medium text-stone-700 mb-1">State</label>
<select className="w-full h-10 rounded-md bg-stone-100 border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-300/40 outline-none px-3" id="stateFilter">
<option value="">All</option>
</select>
</div>

<div>
<label className="block text-sm font-medium text-stone-700 mb-1">County</label>
<select className="w-full h-10 rounded-md bg-stone-100 border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-300/40 outline-none px-3" id="countyFilter">
<option value="">All (if available)</option>
</select>
</div>

<div>
<label className="block text-sm font-medium text-stone-700 mb-1">ZIP code</label>
<input className="w-full h-10 rounded-md bg-stone-100 border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-300/40 outline-none px-3" id="zipFilter" inputmode="numeric" placeholder="e.g., 68508" type="text"/>
</div>
<div className="border-t border-stone-200"></div>

<div>
<label className="block text-sm font-semibold text-stone-800 mb-2 tracking-tight">Nearby Search</label>
<div className="space-y-2">
<input className="w-full h-10 rounded-md bg-stone-100 border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-300/40 outline-none px-3" id="nearQuery" placeholder="City, State or ZIP" type="text"/>
<div className="flex items-center gap-2">
<label className="text-xs text-stone-600 w-16">Radius</label>
<select className="flex-1 h-10 rounded-md bg-stone-100 border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-300/40 outline-none px-3" id="nearRadius">
<option value="5">5 miles</option>
<option value="10">10 miles</option>
<option selected="" value="25">25 miles</option>
<option value="50">50 miles</option>
<option value="100">100 miles</option>
</select>
</div>
<div className="flex gap-2">
<button className="flex-1 h-10 rounded-md border border-stone-200 hover:bg-stone-100 text-sm font-medium flex items-center justify-center gap-2" id="useMyLocation">
<i data-lucide="crosshair"></i> Use my location
                          </button>
<button className="flex-1 h-10 rounded-md bg-amber-700 hover:bg-amber-800 text-amber-50 text-sm font-medium" id="applyNearby">
                            Apply
                          </button>
</div>
<p className="text-xs text-stone-500" id="nearInfo"></p>
</div>
</div>
</div>
</div>

<div className="rounded-lg border border-stone-200 bg-white p-4 space-y-3">
<button className="w-full h-10 rounded-md border border-stone-200 hover:bg-stone-100 text-sm font-medium flex items-center justify-center gap-2" id="openMapAll">
<i data-lucide="pin"></i> Open All in Google Maps
                  </button>
<button className="w-full h-10 rounded-md text-sm font-medium border border-amber-200 text-amber-800 bg-amber-50 hover:bg-amber-100" id="resetAll">
                    Reset All
                  </button>
</div>
</div>
</aside>

<section className="lg:col-span-9">

<div className="flex items-center gap-2 border-b border-stone-200">
<button className="navtab px-4 py-2 text-sm font-medium border-b-2 border-transparent hover:border-stone-300" data-nav="explore">Explore</button>
<button className="navtab px-4 py-2 text-sm font-medium border-b-2 border-transparent hover:border-stone-300" data-nav="favorites">My Favorites</button>
<span className="ml-auto text-xs text-stone-500" id="sortInfo"></span>
</div>

<div className="hidden border border-stone-200 bg-white rounded-md p-6 mt-4" id="emptyExplore">
<p className="text-sm text-stone-600">No results match your filters. Try clearing filters or expanding your radius.</p>
</div>
<div className="hidden border border-stone-200 bg-white rounded-md p-6 mt-4" id="emptyFavorites">
<p className="text-sm text-stone-600">No favorites yet. Tap the heart on any shop to save it.</p>
</div>
<div className="hidden border border-stone-200 bg-white rounded-md p-6 mt-4" id="requireAuthFav">
<p className="text-sm text-stone-700 mb-3">Sign in to view your favorites.</p>
<button className="h-9 px-3 rounded-md bg-amber-700 hover:bg-amber-800 text-amber-50 text-sm font-medium" onclick="openAuth('login')">Log In</button>
</div>

<div className="mt-4">
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4" id="results"></div>
</div>
</section>
</div>
</div>
</main>

<footer className="border-t border-stone-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-sm text-stone-600 flex flex-col sm:flex-row items-center justify-between gap-3">
<p>© <span id="year"></span> AntiqueHub</p>
<div className="flex items-center gap-4">
<a className="hover:text-stone-900" href="#">Privacy</a>
<a className="hover:text-stone-900" href="#">Terms</a>
<a className="hover:text-stone-900" href="#">Contact</a>
</div>
</div>
</footer>
</div>

<div className="fixed inset-0 z-[60] hidden" id="filtersDrawer">
<div className="absolute inset-0 bg-black/40" id="filtersBackdrop"></div>
<div className="absolute right-0 top-0 h-full w-[90%] max-w-sm bg-white shadow-xl flex flex-col">
<div className="h-14 px-4 border-b border-stone-200 flex items-center justify-between">
<h3 className="text-[18px] tracking-tight font-semibold">Filters</h3>
<button className="h-9 w-9 grid place-items-center rounded-md hover:bg-stone-100 border border-stone-200" id="closeFilters">
<i data-lucide="x"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-4">

<div>
<label className="block text-sm font-medium text-stone-700 mb-1">Shop name</label>
<div className="relative">
<input className="w-full h-10 rounded-md pl-10 pr-3 bg-stone-100 focus:bg-white border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-300/40 outline-none transition" id="m_searchName" placeholder="e.g., Vintage, Mall…" type="text"/>
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-stone-400">
<i data-lucide="search"></i>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-1">State</label>
<select className="w-full h-10 rounded-md bg-stone-100 border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-300/40 outline-none px-3" id="m_stateFilter">
<option value="">All</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-1">County</label>
<select className="w-full h-10 rounded-md bg-stone-100 border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-300/40 outline-none px-3" id="m_countyFilter">
<option value="">All (if available)</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-1">ZIP code</label>
<input className="w-full h-10 rounded-md bg-stone-100 border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-300/40 outline-none px-3" id="m_zipFilter" inputmode="numeric" placeholder="e.g., 68508" type="text"/>
</div>
<div className="border-t border-stone-200 pt-2"></div>
<div>
<label className="block text-sm font-semibold text-stone-800 mb-2 tracking-tight">Nearby Search</label>
<div className="space-y-2">
<input className="w-full h-10 rounded-md bg-stone-100 border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-300/40 outline-none px-3" id="m_nearQuery" placeholder="City, State or ZIP" type="text"/>
<div className="flex items-center gap-2">
<label className="text-xs text-stone-600 w-16">Radius</label>
<select className="flex-1 h-10 rounded-md bg-stone-100 border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-300/40 outline-none px-3" id="m_nearRadius">
<option value="5">5 miles</option>
<option value="10">10 miles</option>
<option selected="" value="25">25 miles</option>
<option value="50">50 miles</option>
<option value="100">100 miles</option>
</select>
</div>
<div className="flex gap-2">
<button className="flex-1 h-10 rounded-md border border-stone-200 hover:bg-stone-100 text-sm font-medium flex items-center justify-center gap-2" id="m_useMyLocation">
<i data-lucide="crosshair"></i> Use my location
                </button>
<button className="flex-1 h-10 rounded-md bg-amber-700 hover:bg-amber-800 text-amber-50 text-sm font-medium" id="m_applyNearby">
                  Apply
                </button>
</div>
<p className="text-xs text-stone-500" id="m_nearInfo"></p>
</div>
</div>
</div>
<div className="p-4 border-t border-stone-200 flex gap-2">
<button className="flex-1 h-10 rounded-md text-sm font-medium border border-amber-200 text-amber-800 bg-amber-50 hover:bg-amber-100" id="m_resetAll">
            Reset
          </button>
<button className="flex-1 h-10 rounded-md bg-amber-700 hover:bg-amber-800 text-amber-50 text-sm font-medium" id="m_applyAll">
            Done
          </button>
</div>
</div>
</div>

<div className="fixed inset-0 z-[70] hidden" id="mapViewModal">
<div className="absolute inset-0 bg-black/40" id="mapBackdrop"></div>
<div className="absolute inset-0 md:inset-auto md:top-10 md:left-1/2 md:-translate-x-1/2 md:w-[840px] bg-white rounded-none md:rounded-lg shadow-xl flex flex-col max-h-[90vh]">
<div className="flex items-center justify-between h-12 px-4 border-b border-stone-200">
<div className="flex items-center gap-2">
<i data-lucide="map"></i>
<h3 className="text-sm font-semibold tracking-tight">Map View</h3>
</div>
<button className="h-8 w-8 grid place-items-center rounded-md border border-stone-200 hover:bg-stone-100" id="closeMapView">
<i data-lucide="x"></i>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 p-0 md:p-4 overflow-hidden">
<div className="p-4 md:p-0">
<div className="rounded-md border border-stone-200 overflow-hidden aspect-video bg-stone-100">

<iframe className="w-full h-full" id="groupMapFrame" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
<div className="mt-3">
<button className="w-full h-10 rounded-md border border-stone-200 hover:bg-stone-100 text-sm font-medium flex items-center justify-center gap-2" id="openAllInMaps">
<i data-lucide="external-link"></i> Open all in Google Maps
              </button>
</div>
</div>
<div className="overflow-y-auto border-t md:border-t-0 md:border-l border-stone-200">
<ul className="divide-y divide-stone-200" id="mapList"></ul>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[80] hidden" id="authModal">
<div className="absolute inset-0 bg-black/40" id="authBackdrop"></div>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-md bg-white rounded-lg border border-stone-200 shadow-xl">
<div className="p-4 border-b border-stone-200 flex items-center justify-between">
<h3 className="text-[18px] tracking-tight font-semibold" id="authTitle">Sign In</h3>
<button className="h-8 w-8 grid place-items-center rounded-md border border-stone-200 hover:bg-stone-100" id="closeAuth">
<i data-lucide="x"></i>
</button>
</div>
<div className="p-4 space-y-4">
<div className="grid grid-cols-1 gap-3">
<button className="h-10 rounded-md border border-stone-200 hover:bg-stone-100 flex items-center justify-center gap-2 text-sm" onclick="socialAuth('google')">
<i data-lucide="mail"></i> Continue with Google
            </button>
<button className="h-10 rounded-md border border-stone-200 hover:bg-stone-100 flex items-center justify-center gap-2 text-sm" onclick="socialAuth('facebook')">
<i data-lucide="message-circle"></i> Continue with Facebook
            </button>
<button className="h-10 rounded-md border border-stone-200 hover:bg-stone-100 flex items-center justify-center gap-2 text-sm" onclick="socialAuth('apple')">
<i data-lucide="apple"></i> Continue with Apple
            </button>
</div>
<div className="relative">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-stone-200"></div>
</div>
<div className="relative flex justify-center text-xs">
<span className="bg-white px-2 text-stone-500">or</span>
</div>
</div>
<div className="space-y-3">
<div>
<label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
<input className="w-full h-10 rounded-md bg-stone-100 border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-300/40 outline-none px-3" id="authEmail" placeholder="you@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-1">Password</label>
<input className="w-full h-10 rounded-md bg-stone-100 border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-300/40 outline-none px-3" id="authPassword" placeholder="••••••••" type="password"/>
</div>
<button className="w-full h-10 rounded-md bg-amber-700 hover:bg-amber-800 text-amber-50 text-sm font-medium" id="authSubmit">Continue</button>
<p className="text-xs text-stone-500 text-center">By continuing, you agree to our Terms and Privacy Policy.</p>
</div>
</div>
</div>
</div>

<template id="shopCardTpl">
<div className="group rounded-lg border border-stone-200 bg-white overflow-hidden flex flex-col">
<div className="relative aspect-[16/10] bg-stone-100 overflow-hidden">
<img alt="" className="w-full h-full object-cover object-center transition duration-500 group-hover:scale-[1.02]" data-img=""/>
<button className="absolute top-2 right-2 h-9 w-9 grid place-items-center rounded-full bg-white/90 backdrop-blur border border-stone-200 hover:bg-white transition" data-fav="" title="Save to favorites">
<i className="text-stone-600" data-lucide="heart"></i>
</button>
<div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur rounded-md px-2 py-1 text-[11px] text-stone-700 border border-stone-200 hidden sm:flex items-center gap-1">
<i data-lucide="map-pin"></i><span data-city=""></span>, <span data-state=""></span>
</div>
</div>
<div className="p-4 space-y-3 flex-1">
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<h3 className="text-[18px] tracking-tight font-semibold truncate" data-name=""></h3>
<p className="text-xs text-stone-500" data-category="">Antique store</p>
</div>
<span className="text-xs text-stone-600 hidden" data-score=""></span>
</div>
<div className="text-sm text-stone-700 space-y-1">
<p className="flex items-start gap-2">
<i className="mt-[2px] shrink-0 text-stone-500" data-lucide="map-pin"></i>
<span data-address=""></span>
</p>
<div className="flex items-center gap-4">
<a className="inline-flex items-center gap-1 text-amber-800 hover:underline" data-phone="" rel="noopener" target="_blank">
<i data-lucide="phone"></i><span data-phone-text=""></span>
</a>
<a className="hidden inline-flex items-center gap-1 text-amber-800 hover:underline" data-email="">
<i data-lucide="mail"></i><span data-email-text=""></span>
</a>
</div>
</div>
<div className="rounded-md border border-stone-200 bg-stone-50">
<button className="w-full px-3 py-2 text-sm font-medium flex items-center justify-between hover:bg-stone-100" data-hours-toggle="">
<span className="flex items-center gap-2"><i data-lucide="clock-3"></i> Hours</span>
<i className="text-stone-400" data-lucide="chevron-down"></i>
</button>
<div className="hidden px-3 pb-3 text-xs text-stone-700 space-y-1" data-hours=""></div>
</div>
<div className="flex items-center gap-2">
<a className="flex-1 h-9 rounded-md border border-stone-200 hover:bg-stone-100 text-sm font-medium flex items-center justify-center gap-2" data-gmaps="" rel="noopener" target="_blank">
<i data-lucide="external-link"></i> View on Google Maps
            </a>
<button className="h-9 px-3 rounded-md bg-stone-100 hover:bg-stone-200 border border-stone-200 text-sm flex items-center gap-2" data-embed-toggle="">
<i data-lucide="map"></i> Map
            </button>
</div>
<div className="hidden rounded-md border border-stone-200 overflow-hidden aspect-[16/10] bg-stone-100" data-embed="">
<iframe className="w-full h-full" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
</div>
</div>
</template>




    </>
  );
}
