import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Lucide icons
    document.addEventListener('DOMContentLoaded', function () {
      if (window.lucide && window.lucide.createIcons) {
        window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }
    });

    // Data
    const PRODUCTS = [
      {
        code: 'BA-TOY-COR-FR-001',
        name: 'Briks Ceramic Pads — Corolla Front',
        manufacturer: 'Toyota',
        model: 'Corolla',
        position: 'Front',
        vehicleType: 'Passenger',
        compound: 'Ceramic',
        dims: 'W: 137mm • H: 55mm • T: 16mm',
        years: '2015–2023',
        oemRefs: ['04465-02B40', '04465-02390'],
        img: 'https://images.unsplash.com/photo-1592853625600-0f9f3be9aaea?q=80&w=1600&auto=format&fit=crop'
      },
      {
        code: 'BA-TOY-HIL-RR-002',
        name: 'Briks Semi‑metallic — Hilux Rear',
        manufacturer: 'Toyota',
        model: 'Hilux',
        position: 'Rear',
        vehicleType: 'Commercial',
        compound: 'Semi-metallic',
        dims: 'W: 131mm • H: 49mm • T: 14.5mm',
        years: '2011–2022',
        oemRefs: ['04466-0K170'],
        img: 'https://images.unsplash.com/photo-1619441207978-3e53adddb1d2?q=80&w=1600&auto=format&fit=crop'
      },
      {
        code: 'BA-REN-CLI-FR-003',
        name: 'Briks Ceramic — Clio Front',
        manufacturer: 'Renault',
        model: 'Clio',
        position: 'Front',
        vehicleType: 'Passenger',
        compound: 'Ceramic',
        dims: 'W: 140mm • H: 52mm • T: 17mm',
        years: '2013–2020',
        oemRefs: ['410608373R'],
        img: 'https://images.unsplash.com/photo-1533219057257-4a6d2f2d1698?q=80&w=1600&auto=format&fit=crop'
      },
      {
        code: 'BA-REN-DUS-RR-004',
        name: 'Briks Semi‑metallic — Duster Rear',
        manufacturer: 'Renault',
        model: 'Duster',
        position: 'Rear',
        vehicleType: 'SUV/4x4',
        compound: 'Semi-metallic',
        dims: 'W: 125mm • H: 50mm • T: 14mm',
        years: '2018–2023',
        oemRefs: ['440608315R'],
        img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1600&auto=format&fit=crop'
      },
      {
        code: 'BA-HYU-ELA-FR-005',
        name: 'Briks Ceramic — Elantra Front',
        manufacturer: 'Hyundai',
        model: 'Elantra',
        position: 'Front',
        vehicleType: 'Passenger',
        compound: 'Ceramic',
        dims: 'W: 147mm • H: 56mm • T: 16mm',
        years: '2016–2023',
        oemRefs: ['58101F2A00'],
        img: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1600&auto=format&fit=crop'
      },
      {
        code: 'BA-HYU-TUC-FR-006',
        name: 'Briks Low‑metallic — Tucson Front',
        manufacturer: 'Hyundai',
        model: 'Tucson',
        position: 'Front',
        vehicleType: 'SUV/4x4',
        compound: 'Low-metallic',
        dims: 'W: 155mm • H: 59mm • T: 17mm',
        years: '2015–2021',
        oemRefs: ['58101D7A10'],
        img: 'https://images.unsplash.com/photo-1542280756-74b2f55e73ab?q=80&w=1600&auto=format&fit=crop'
      },
      {
        code: 'BA-VW-GOL-FR-007',
        name: 'Briks Ceramic — Golf VII Front',
        manufacturer: 'Volkswagen',
        model: 'Golf',
        position: 'Front',
        vehicleType: 'Passenger',
        compound: 'Ceramic',
        dims: 'W: 146mm • H: 54mm • T: 16mm',
        years: '2012–2020',
        oemRefs: ['5Q0698151'],
        img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1600&auto=format&fit=crop'
      },
      {
        code: 'BA-VW-PAS-RR-008',
        name: 'Briks Ceramic — Passat Rear',
        manufacturer: 'Volkswagen',
        model: 'Passat',
        position: 'Rear',
        vehicleType: 'Passenger',
        compound: 'Ceramic',
        dims: 'W: 108mm • H: 42mm • T: 15mm',
        years: '2015–2023',
        oemRefs: ['3Q0698451'],
        img: 'https://images.unsplash.com/photo-1524901548305-08eeddc35080?q=80&w=1600&auto=format&fit=crop'
      },
      {
        code: 'BA-PEU-208-FR-009',
        name: 'Briks Ceramic — 208 Front',
        manufacturer: 'Peugeot',
        model: '208',
        position: 'Front',
        vehicleType: 'Passenger',
        compound: 'Ceramic',
        dims: 'W: 131mm • H: 52mm • T: 16mm',
        years: '2012–2019',
        oemRefs: ['1609451780'],
        img: 'https://images.unsplash.com/photo-1536677191276-93c4f6f6f57f?q=80&w=1600&auto=format&fit=crop'
      },
      {
        code: 'BA-PEU-301-RR-010',
        name: 'Briks Semi‑metallic — 301 Rear',
        manufacturer: 'Peugeot',
        model: '301',
        position: 'Rear',
        vehicleType: 'Passenger',
        compound: 'Semi-metallic',
        dims: 'W: 106mm • H: 41mm • T: 14mm',
        years: '2013–2021',
        oemRefs: ['1609345580'],
        img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1600&auto=format&fit=crop'
      }
    ];

    const POSITIONS = ['Front', 'Rear'];
    const COMPOUNDS = ['Ceramic', 'Semi-metallic', 'Low-metallic'];
    const VEHICLE_TYPES = ['Passenger', 'SUV/4x4', 'Commercial'];

    const els = {
      resultsCount: document.getElementById('resultsCount'),
      productsGrid: document.getElementById('productsGrid'),
      noResults: document.getElementById('noResults'),
      searchInput: document.getElementById('searchInput'),
      manufacturerSelect: document.getElementById('manufacturerSelect'),
      modelSelect: document.getElementById('modelSelect'),
      positionChips: document.getElementById('positionChips'),
      compoundChips: document.getElementById('compoundChips'),
      vehicleTypeChips: document.getElementById('vehicleTypeChips'),
      clearFiltersBtn: document.getElementById('clearFiltersBtn')
    };

    const state = {
      search: '',
      manufacturer: 'all',
      model: 'all',
      positions: new Set(),
      compounds: new Set(),
      vehicleTypes: new Set()
    };

    // Initialize filters
    function initFilters() {
      // Manufacturer options
      const manufacturers = Array.from(new Set(PRODUCTS.map(p => p.manufacturer))).sort();
      manufacturers.forEach(m => {
        const opt = document.createElement('option');
        opt.value = m;
        opt.textContent = m;
        els.manufacturerSelect.appendChild(opt);
      });

      // Chips
      renderChips(POSITIONS, els.positionChips, state.positions);
      renderChips(COMPOUNDS, els.compoundChips, state.compounds);
      renderChips(VEHICLE_TYPES, els.vehicleTypeChips, state.vehicleTypes);

      // Events
      els.searchInput.addEventListener('input', (e) => {
        state.search = e.target.value.trim().toLowerCase();
        render();
      });

      els.manufacturerSelect.addEventListener('change', () => {
        state.manufacturer = els.manufacturerSelect.value;
        state.model = 'all';
        populateModels();
        render();
      });

      els.modelSelect.addEventListener('change', () => {
        state.model = els.modelSelect.value;
        render();
      });

      els.clearFiltersBtn.addEventListener('click', clearFilters);

      populateModels();
      render();
    }

    function populateModels() {
      // Reset
      els.modelSelect.innerHTML = '';
      const all = document.createElement('option');
      all.value = 'all';
      all.textContent = 'All models';
      els.modelSelect.appendChild(all);

      const filtered = PRODUCTS.filter(p => state.manufacturer === 'all' ? true : p.manufacturer === state.manufacturer);
      const models = Array.from(new Set(filtered.map(p => p.model))).sort();
      models.forEach(m => {
        const opt = document.createElement('option');
        opt.value = m;
        opt.textContent = m;
        els.modelSelect.appendChild(opt);
      });
    }

    function renderChips(items, container, selectedSet) {
      container.innerHTML = '';
      items.forEach(label => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = label;
        btn.setAttribute('data-value', label);
        btn.className =
          'px-3 py-1.5 rounded-full text-xs border transition ' +
          'hover:outline hover:outline-1 hover:outline-slate-300 ' +
          (selectedSet.has(label)
            ? 'bg-slate-900 text-white border-slate-900'
            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50');
        btn.addEventListener('click', () => {
          if (selectedSet.has(label)) {
            selectedSet.delete(label);
          } else {
            selectedSet.add(label);
          }
          renderChips(items, container, selectedSet);
          render();
        });
        container.appendChild(btn);
      });
    }

    function matchesFilters(p) {
      if (state.search) {
        const hay = (p.code + ' ' + p.name + ' ' + p.oemRefs.join(' ')).toLowerCase();
        if (!hay.includes(state.search)) return false;
      }
      if (state.manufacturer !== 'all' && p.manufacturer !== state.manufacturer) return false;
      if (state.model !== 'all' && p.model !== state.model) return false;
      if (state.positions.size > 0 && !state.positions.has(p.position)) return false;
      if (state.compounds.size > 0 && !state.compounds.has(p.compound)) return false;
      if (state.vehicleTypes.size > 0 && !state.vehicleTypes.has(p.vehicleType)) return false;
      return true;
    }

    function productCard(p) {
      const tags = [
        { label: p.position, icon: 'disc' },
        { label: p.compound, icon: 'beaker' },
        { label: p.vehicleType, icon: 'car' }
      ];

      return `
        <div class="group rounded-xl bg-white border border-slate-200 overflow-hidden hover:shadow-sm transition hover:-translate-y-0.5">
          <div class="relative aspect-[16/10] bg-slate-100">
            <img src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" alt="${p.name}" class="w-full h-full object-cover" />
            <div class="absolute top-2 left-2 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-2 py-1 border border-slate-200 text-[11px] text-slate-700">
              <i data-lucide="shield-check" class="w-3.5 h-3.5"></i>
              R90
            </div>
          </div>
          <div class="p-4">
            <div class="flex items-start justify-between gap-3">
              <div>
                <div class="text-slate-900 font-medium">${p.name}</div>
                <div class="text-xs text-slate-500 mt-0.5">${p.manufacturer} • ${p.model} • ${p.years}</div>
              </div>
              <div class="text-[11px] text-slate-600 px-2 py-1 border border-slate-200 rounded-md bg-slate-50">Code: ${p.code}</div>
            </div>

            <div class="mt-3 flex flex-wrap items-center gap-2">
              ${tags.map(t => `
                <span class="inline-flex items-center gap-1.5 text-[11px] text-slate-700 bg-white border border-slate-200 rounded-full px-2 py-1">
                  <i data-lucide="${t.icon}" class="w-3.5 h-3.5"></i>${t.label}
                </span>`).join('')}
            </div>

            <div class="mt-3 text-xs text-slate-600">${p.dims}</div>
            <div class="mt-3 border-t border-slate-200 pt-3 flex items-center justify-between">
              <div class="flex -space-x-2 overflow-hidden">
                <img class="inline-block h-7 w-7 rounded-full ring-1 ring-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" alt="Engineer">
                <img class="inline-block h-7 w-7 rounded-full ring-1 ring-white object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop" alt="QA">
                <img class="inline-block h-7 w-7 rounded-full ring-1 ring-white object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&auto=format&fit=crop" alt="Support">
              </div>
              <div class="flex items-center gap-2">
                <button class="inline-flex items-center gap-1.5 text-xs text-slate-700 px-2.5 py-1.5 rounded-md border border-slate-300 bg-white hover:bg-slate-50 hover:border-slate-400 transition">
                  <i data-lucide="file-text" class="w-3.5 h-3.5"></i>
                  Datasheet
                </button>
                <button class="inline-flex items-center gap-1.5 text-xs text-white px-2.5 py-1.5 rounded-md bg-slate-900 hover:bg-black transition">
                  <i data-lucide="inbox" class="w-3.5 h-3.5"></i>
                  Add to Inquiry
                </button>
              </div>
            </div>

            <div class="mt-3 text-[11px] text-slate-500">
              OEM: ${p.oemRefs.join(', ')}
            </div>
          </div>
        </div>
      `;
    }

    function render() {
      const filtered = PRODUCTS.filter(matchesFilters);
      els.resultsCount.textContent = filtered.length;
      els.productsGrid.innerHTML = filtered.map(productCard).join('');

      // Toggle "no results"
      if (filtered.length === 0) {
        els.noResults.classList.remove('hidden');
      } else {
        els.noResults.classList.add('hidden');
      }

      // Re-mount icons inside newly rendered cards
      if (window.lucide && window.lucide.createIcons) {
        window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }
    }

    function clearFilters() {
      state.search = '';
      state.manufacturer = 'all';
      state.model = 'all';
      state.positions.clear();
      state.compounds.clear();
      state.vehicleTypes.clear();

      els.searchInput.value = '';
      els.manufacturerSelect.value = 'all';
      populateModels();
      els.modelSelect.value = 'all';

      renderChips(POSITIONS, els.positionChips, state.positions);
      renderChips(COMPOUNDS, els.compoundChips, state.compounds);
      renderChips(VEHICLE_TYPES, els.vehicleTypeChips, state.vehicleTypes);

      render();
    }

    // Simple hash router for "multipage" UX
    const ROUTES = {
      home: {
        title: 'Briks Algeria — Precision Brake Pads',
        desc: 'Briks Algeria manufactures precision brake pads engineered for reliability.'
      },
      catalog: {
        title: 'Catalog — Briks Algeria',
        desc: 'Browse R90-certified brake pads. Filter by make, model and more.'
      },
      about: {
        title: 'About — Briks Algeria',
        desc: 'Manufacturing quality brake pads with rigorous testing and certifications.'
      },
      contact: {
        title: 'Contact — Briks Algeria',
        desc: 'Talk to sales for distribution, fleet solutions, or private label.'
      }
    };

    function parseRoute() {
      const hash = (location.hash || '#/').replace('#/', '').trim();
      const route = hash === '' ? 'home' : hash.split('?')[0].split('/')[0];
      return ROUTES[route] ? route : 'home';
    }

    function setActiveNav(route) {
      document.querySelectorAll('a[data-nav]').forEach(a => {
        const isActive = a.getAttribute('data-nav') === route;
        a.classList.toggle('text-slate-900', isActive);
        a.classList.toggle('font-medium', isActive);
        a.setAttribute('aria-current', isActive ? 'page' : 'false');
      });
    }

    function showPage(route) {
      document.querySelectorAll('[data-page]').forEach(sec => {
        sec.classList.add('hidden');
      });
      const selector = `[data-page="${route}"]`;
      const pageEl = document.querySelector(selector) || document.querySelector('[data-page="home"]');
      pageEl.classList.remove('hidden');

      // Update document title/description
      const meta = ROUTES[route] || ROUTES.home;
      document.title = meta.title;
      const descTag = document.querySelector('meta[name="description"]');
      if (descTag) descTag.setAttribute('content', meta.desc);

      // Nav highlight
      setActiveNav(route);

      // Scroll to top to emulate page navigation
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    function handleRouteChange() {
      const route = parseRoute();
      showPage(route);
    }

    // Initialize
    initFilters();
    document.getElementById('year').textContent = new Date().getFullYear();

    // Router boot
    if (!location.hash) {
      location.replace('#/');
    } else {
      handleRouteChange();
    }
    window.addEventListener('hashchange', handleRouteChange);
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<a className="flex items-center gap-3 group" href="#/">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white flex items-center justify-center tracking-tight text-sm font-semibold group-hover:shadow-md transition">
            BA
          </div>
<div className="flex flex-col leading-tight">
<span className="text-slate-900 text-[15px] font-semibold tracking-tight">Briks Algeria</span>
<span className="text-[11px] text-slate-500">Brake Systems</span>
</div>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-slate-600 hover:text-slate-900 transition" data-nav="catalog" href="#/catalog">Catalog</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition" data-nav="about" href="#/about">About</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition" data-nav="contact" href="#/contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 hover:bg-slate-50 hover:border-slate-400 hover:shadow-sm transition" href="#/contact">
<i className="w-4 h-4" data-lucide="mail"></i>
            Contact Sales
          </a>
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3.5 py-2 text-sm font-medium hover:bg-black hover:shadow-sm transition" href="#/catalog">
<i className="w-4 h-4" data-lucide="package-search"></i>
            Explore Catalog
          </a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden" data-page="home">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 items-center py-14 md:py-20">
<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 text-xs text-slate-600 border border-slate-200 rounded-full px-2.5 py-1 mb-4">
<i className="w-4 h-4" data-lucide="shield-check"></i>
            ECE R90 Compliant
          </div>
<h1 className="text-4xl md:text-5xl tracking-tight text-slate-900 font-semibold">
            Precision Brake Pads engineered in Algeria
          </h1>
<p className="mt-4 text-[15px] leading-7 text-slate-600">
            Briks Algeria designs and manufactures high‑performance brake pads for passenger, SUV, and commercial vehicles. Explore an R90‑certified range built for quiet stops, long life, and dependable performance.
          </p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-black hover:shadow-sm transition" href="#/catalog">
<i className="w-4 h-4" data-lucide="sliders-horizontal"></i>
              Find Your Fit
            </a>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2.5 text-sm text-slate-800 hover:bg-slate-50 hover:border-slate-400 hover:shadow-sm transition" href="#/about">
<i className="w-4 h-4" data-lucide="factory"></i>
              Our Manufacturing
            </a>
</div>
<div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
<div className="rounded-lg border border-slate-200 p-4">
<div className="text-slate-900 font-semibold text-lg tracking-tight">R90</div>
<div className="text-xs text-slate-500">Certified</div>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<div className="text-slate-900 font-semibold text-lg tracking-tight">500+</div>
<div className="text-xs text-slate-500">References</div>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<div className="text-slate-900 font-semibold text-lg tracking-tight">98%</div>
<div className="text-xs text-slate-500">Vehicle Coverage</div>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<div className="text-slate-900 font-semibold text-lg tracking-tight">Algeria</div>
<div className="text-xs text-slate-500">Made &amp; Tested</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="relative rounded-xl overflow-hidden ring-1 ring-slate-200 shadow-sm">
<img alt="Brake assembly" className="w-full h-[320px] md:h-[420px] object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute bottom-3 left-3 right-3 bg-white/80 backdrop-blur rounded-md border border-slate-200 px-3 py-2 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-slate-700">
<i className="w-4 h-4" data-lucide="badge-check"></i>
                Quality assurance at every batch
              </div>
<div className="hidden sm:flex items-center gap-2 text-xs text-slate-600">
<i className="w-4 h-4" data-lucide="microscope"></i>
                Material lab tested
              </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50/50 hidden" data-page="catalog" id="catalog">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
<div className="flex items-start justify-between gap-6 flex-wrap">
<div>
<h2 className="text-2xl md:text-3xl tracking-tight text-slate-900 font-semibold">Catalog</h2>
<p className="mt-1 text-sm text-slate-600">Filter by manufacturer, model, and compatibility to find the right brake pads.</p>
</div>
<div className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4" data-lucide="info"></i>
          R90 certificates and datasheets available per reference.
        </div>
</div>

<div className="mt-6 grid lg:grid-cols-12 gap-6">
<aside className="lg:col-span-4 xl:col-span-3">
<div className="rounded-xl bg-white border border-slate-200 shadow-sm p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-slate-900 font-medium">
<i className="w-4 h-4" data-lucide="sliders-horizontal"></i>
                Filters
              </div>
<button className="inline-flex items-center gap-2 text-xs text-slate-600 hover:text-slate-900 px-2 py-1 rounded hover:bg-slate-50 hover:outline hover:outline-1 hover:outline-slate-200 transition" id="clearFiltersBtn">
<i className="w-3.5 h-3.5" data-lucide="refresh-cw"></i>
                Reset
              </button>
</div>
<div className="mt-4 space-y-5">

<div>
<label className="block text-xs font-medium text-slate-700" htmlFor="searchInput">Search</label>
<div className="mt-1 relative">
<i className="w-4 h-4 absolute left-2.5 top-2.5 text-slate-400 pointer-events-none" data-lucide="search"></i>
<input className="w-full pl-9 pr-3 py-2.5 rounded-md border border-slate-300 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100 focus:border-slate-400 transition" id="searchInput" placeholder="Code, OEM ref, keyword" type="text"/>
</div>
</div>

<div>
<label className="block text-xs font-medium text-slate-700" htmlFor="manufacturerSelect">Manufacturer</label>
<div className="mt-1 relative">
<select className="w-full appearance-none bg-white pl-3 pr-9 py-2.5 rounded-md border border-slate-300 text-sm focus:outline-none focus:ring-4 focus:ring-slate-100 focus:border-slate-400 transition" id="manufacturerSelect">
<option value="all">All manufacturers</option>
</select>
<i className="w-4 h-4 absolute right-2.5 top-2.5 text-slate-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>

<div>
<label className="block text-xs font-medium text-slate-700" htmlFor="modelSelect">Model</label>
<div className="mt-1 relative">
<select className="w-full appearance-none bg-white pl-3 pr-9 py-2.5 rounded-md border border-slate-300 text-sm focus:outline-none focus:ring-4 focus:ring-slate-100 focus:border-slate-400 transition" id="modelSelect">
<option value="all">All models</option>
</select>
<i className="w-4 h-4 absolute right-2.5 top-2.5 text-slate-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>

<div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-700">
<i className="w-4 h-4" data-lucide="car"></i>
                  Position
                </div>
<div className="mt-2 flex flex-wrap gap-2" id="positionChips">

</div>
</div>

<div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-700">
<i className="w-4 h-4" data-lucide="beaker"></i>
                  Compound
                </div>
<div className="mt-2 flex flex-wrap gap-2" id="compoundChips"></div>
</div>

<div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-700">
<i className="w-4 h-4" data-lucide="truck"></i>
                  Vehicle Type
                </div>
<div className="mt-2 flex flex-wrap gap-2" id="vehicleTypeChips"></div>
</div>
</div>
</div>
</aside>

<div className="lg:col-span-8 xl:col-span-9">
<div className="flex items-center justify-between gap-4 flex-wrap">
<div className="text-sm text-slate-600">
<span className="text-slate-900 font-medium" id="resultsCount">0</span> results
            </div>
<div className="flex items-center gap-2 text-xs text-slate-500">
<i className="w-4 h-4" data-lucide="filter"></i>
              Showing in-stock references only
            </div>
</div>
<div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5" id="productsGrid">

</div>
<div className="hidden mt-10 rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center" id="noResults">
<div className="mx-auto w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center mb-3">
<i className="w-5 h-5 text-slate-500" data-lucide="search-x"></i>
</div>
<div className="text-slate-900 font-medium">No matches found</div>
<p className="text-sm text-slate-600 mt-1">Try a different manufacturer, model, or remove some compatibility filters.</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 hidden" data-page="about" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="rounded-xl overflow-hidden ring-1 ring-slate-200 shadow-sm">
<img alt="Manufacturing facility" className="w-full h-[320px] md:h-[420px] object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div>
<h3 className="text-2xl md:text-3xl tracking-tight text-slate-900 font-semibold">Built for the road. Proven in the lab.</h3>
<p className="mt-3 text-[15px] leading-7 text-slate-600">
            We combine advanced friction materials with precision backing plates and underlayers for stable performance, low dust, and minimal noise. Every batch is tested for fade, shear, compressibility and NVH to meet or exceed ECE R90 standards.
          </p>
<div className="mt-6 grid sm:grid-cols-2 gap-4">
<div className="rounded-lg border border-slate-200 p-4 bg-white">
<div className="flex items-center gap-2 text-slate-900 font-medium">
<i className="w-4 h-4" data-lucide="clipboard-check"></i>
                Quality System
              </div>
<p className="text-sm text-slate-600 mt-1">Process control from mixing to scorching, with full traceability.</p>
</div>
<div className="rounded-lg border border-slate-200 p-4 bg-white">
<div className="flex items-center gap-2 text-slate-900 font-medium">
<i className="w-4 h-4" data-lucide="volume-x"></i>
                Quiet Braking
              </div>
<p className="text-sm text-slate-600 mt-1">Shims and slots tuned for NVH reduction and smooth pedal feel.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50/60 hidden" data-page="contact" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
<div className="grid lg:grid-cols-2 gap-10">
<div>
<h3 className="text-2xl md:text-3xl tracking-tight text-slate-900 font-semibold">Talk to Sales</h3>
<p className="mt-2 text-[15px] leading-7 text-slate-600">
            Looking for distribution, fleet solutions, or private label? Our team can help with references, samples, and certifications.
          </p>
<div className="mt-6 space-y-3 text-sm">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-500" data-lucide="phone"></i>
<a className="text-slate-700 hover:text-slate-900 transition" href="tel:+213555000000">+213 555 00 00 00</a>
</div>
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-500" data-lucide="mail"></i>
<a className="text-slate-700 hover:text-slate-900 transition" href="mailto:sales@briks.dz">sales@briks.dz</a>
</div>
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-500" data-lucide="map-pin"></i>
<span className="text-slate-700">Route Nationale, Algiers, Algeria</span>
</div>
</div>
</div>
<div className="rounded-xl bg-white border border-slate-200 shadow-sm p-5">
<form className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="md:col-span-1">
<label className="block text-xs font-medium text-slate-700">Name</label>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-4 focus:ring-slate-100 focus:border-slate-400 transition" placeholder="Your name" type="text"/>
</div>
<div className="md:col-span-1">
<label className="block text-xs font-medium text-slate-700">Company</label>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-4 focus:ring-slate-100 focus:border-slate-400 transition" placeholder="Company" type="text"/>
</div>
<div className="md:col-span-1">
<label className="block text-xs font-medium text-slate-700">Email</label>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-4 focus:ring-slate-100 focus:border-slate-400 transition" placeholder="you@company.com" type="email"/>
</div>
<div className="md:col-span-1">
<label className="block text-xs font-medium text-slate-700">Phone</label>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-4 focus:ring-slate-100 focus:border-slate-400 transition" placeholder="+213 ..." type="tel"/>
</div>
<div className="md:col-span-2">
<label className="block text-xs font-medium text-slate-700">Message</label>
<textarea className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-4 focus:ring-slate-100 focus:border-slate-400 transition" placeholder="Tell us about your needs" rows="4"></textarea>
</div>
<div className="md:col-span-2 flex items-center justify-end">
<button className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-black hover:shadow-sm transition" type="button">
<i className="w-4 h-4" data-lucide="send"></i>
                Send Inquiry
              </button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white flex items-center justify-center tracking-tight text-sm font-semibold">BA</div>
<div className="text-sm text-slate-600">© <span id="year"></span> Briks Algeria. All rights reserved.</div>
</div>
<div className="flex items-center gap-4 text-sm">
<a className="text-slate-600 hover:text-slate-900 transition" data-nav="catalog" href="#/catalog">Catalog</a>
<a className="text-slate-600 hover:text-slate-900 transition" data-nav="about" href="#/about">About</a>
<a className="text-slate-600 hover:text-slate-900 transition" data-nav="contact" href="#/contact">Contact</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
