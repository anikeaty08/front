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

    // Initialize filters (kept for parity; hidden on landing)
    function initFilters() {
      const manufacturers = Array.from(new Set(PRODUCTS.map(p => p.manufacturer))).      sort();
      if (els.manufacturerSelect) {
        els.manufacturerSelect.innerHTML =
          '<option value="all" class="font-nunito">All manufacturers</option>' +
          manufacturers.map(m => `<option value="${m}" class="font-nunito">${m}</option>`).join('');
      }

      // Render selectable chips
      renderChipGroup(els.positionChips, POSITIONS, state.positions);
      renderChipGroup(els.compoundChips, COMPOUNDS, state.compounds);
      renderChipGroup(els.vehicleTypeChips, VEHICLE_TYPES, state.vehicleTypes);
    }

    // Helpers
    function renderChipGroup(container, values, stateSet) {
      if (!container) return;
      container.innerHTML = '';
      values.forEach(val => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.setAttribute('aria-pressed', stateSet.has(val) ? 'true' : 'false');
        btn.className = chipClass(stateSet.has(val));
        btn.textContent = val;
        btn.addEventListener('click', () => {
          if (stateSet.has(val)) {
            stateSet.delete(val);
          } else {
            stateSet.add(val);
          }
          btn.setAttribute('aria-pressed', stateSet.has(val) ? 'true' : 'false');
          btn.className = chipClass(stateSet.has(val));
          render();
        });
        container.appendChild(btn);
      });
    }

    function chipClass(active) {
      return [
        'inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md border text-xs transition select-none font-nunito',
        active
          ? 'bg-red-600 text-white border-red-600 shadow-sm'
          : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
      ].join(' ');
    }

    function filterProducts() {
      const s = state.search.trim().toLowerCase();

      return PRODUCTS.filter(p => {
        // Text search across common fields
        const hay = [
          p.code, p.name, p.manufacturer, p.model, p.position, p.vehicleType,
          p.compound, p.dims, p.years, ...(p.oemRefs || [])
        ].join(' ').toLowerCase();

        const searchOk = !s || hay.includes(s);
        const manuOk = state.manufacturer === 'all' || p.manufacturer === state.manufacturer;
        const modelOk = state.model === 'all' || p.model === state.model;
        const posOk = state.positions.size === 0 || state.positions.has(p.position);
        const compOk = state.compounds.size === 0 || state.compounds.has(p.compound);
        const vehOk = state.vehicleTypes.size === 0 || state.vehicleTypes.has(p.vehicleType);

        return searchOk && manuOk && modelOk && posOk && compOk && vehOk;
      });
    }

    function renderProducts(list) {
      if (!els.productsGrid) return;
      if (!list.length) {
        els.productsGrid.innerHTML = '';
        els.noResults?.classList.remove('hidden');
        return;
      }
      els.noResults?.classList.add('hidden');
      els.productsGrid.innerHTML = list.map(productCardHTML).join('');

      // Reinitialize Lucide icons for dynamically injected markup
      if (window.lucide && window.lucide.createIcons) {
        window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }
    }

    function productCardHTML(p) {
      const oem = p.oemRefs || [];
      const showOEM = oem.slice(0, 2);
      const extra = Math.max(0, oem.length - showOEM.length);

      return `
      <article class="group rounded-xl border bg-white ring-1 ring-stone-200 overflow-hidden hover:shadow-md transition">
        <div class="relative">
          <img src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" alt="${p.name} image" class="w-full h-40 object-cover">
          <div class="absolute top-3 left-3 flex items-center gap-2">
            <span class="inline-flex items-center rounded-full bg-white/90 border border-stone-200 px-2 py-0.5 text-[11px] text-stone-700 font-nunito backdrop-blur">
              <svg data-lucide="car" class="w-3.5 h-3.5 mr-1 text-red-600"></svg>${p.position}
            </span>
            <span class="inline-flex items-center rounded-full bg-white/90 border border-stone-200 px-2 py-0.5 text-[11px] text-stone-700 font-nunito backdrop-blur">
              <svg data-lucide="beaker" class="w-3.5 h-3.5 mr-1 text-red-600"></svg>${p.compound}
            </span>
          </div>
          <div class="absolute bottom-3 left-3">
            <span class="inline-flex items-center rounded-md bg-red-600/90 text-white px-2 py-0.5 text-[11px] font-medium font-nunito backdrop-blur">
              <svg data-lucide="shield-check" class="w-3.5 h-3.5 mr-1"></svg>R90
            </span>
          </div>
        </div>
        <div class="p-4">
          <h3 class="text-sm font-semibold tracking-tight text-stone-900 line-clamp-2 font-nunito">${p.name}</h3>
          <p class="mt-1 text-xs text-stone-600 font-nunito">${p.manufacturer} ${p.model} • ${p.years}</p>
          <div class="mt-3 text-[13px] text-stone-700 flex items-center gap-2 font-nunito">
            <svg data-lucide="ruler" class="w-4 h-4 text-stone-500"></svg>
            ${p.dims}
          </div>
          ${showOEM.length ? `
          <div class="mt-3 flex flex-wrap gap-1.5">
            ${showOEM.map(ref => `<span class="inline-flex items-center rounded-md bg-stone-50 border border-stone-200 px-2 py-0.5 text-[11px] text-stone-700 font-nunito">${ref}</span>`).join('')}
            ${extra ? `<span class="inline-flex items-center rounded-md bg-stone-50 border border-stone-200 px-2 py-0.5 text-[11px] text-stone-600 font-nunito">+${extra} more</span>` : ''}
          </div>` : ''}
          <div class="mt-4 flex items-center justify-between">
            <span class="text-[11px]-stone-500 font-mono">${p.code}</span>
            <div class="flex items-center gap-2">
              <a href="catalog.html#${encodeURIComponent(p.code)}" class="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition bg-black text-white hover:bg-stone-900 font-nunito">
                Details
                <svg data-lucide="arrow-right" class="w-3.5 h-3.5"></svg>
              </a>
              <a href="contact.html?ref=${encodeURIComponent(p.code)}" class="hidden sm:inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition border-red-300 text-stone-800 hover:bg-red-50 hover:border-red-400 font-nunito">
                Quote
                <svg data-lucide="mail" class="w-3.5 h-3.5 text-red-600"></svg>
              </a>
            </div>
          </div>
        </div>
      </article>
      `;
    }

    function render() {
      // Compute filtered, then only show a featured slice on landing
      const filtered = filterProducts();
      const visible = filtered.slice(0, 6);
      els.resultsCount.textContent = visible.length.toString();
      renderProducts(visible);
    }

    function attachEvents() {
      if (els.searchInput) {
        els.searchInput.addEventListener('input', (e) => {
          state.search = e.target.value || '';
          render();
        });
      }

      if (els.manufacturerSelect) {
        els.manufacturerSelect.addEventListener('change', () => {
          state.manufacturer = els.manufacturerSelect.value;
          // Reset model if a model select exists
          if (els.modelSelect) {
            populateModelsForManufacturer(state.manufacturer);
            els.modelSelect.value = 'all';
            state.model = 'all';
          }
          render();
        });
      }

      if (els.modelSelect) {
        els.modelSelect.addEventListener('change', () => {
          state.model = els.modelSelect.value;
          render();
        });
      }

      if (els.clearFiltersBtn) {
        els.clearFiltersBtn.addEventListener('click', () => {
          state.search = '';
          state.manufacturer = 'all';
          state.model = 'all';
          state.positions.clear();
          state.compounds.clear();
          state.vehicleTypes.clear();

          if (els.searchInput) els.searchInput.value = '';
          if (els.manufacturerSelect) els.manufacturerSelect.value = 'all';
          if (els.modelSelect) {
            populateModelsForManufacturer('all');
            els.modelSelect.value = 'all';
          }

          // Re-render chips to reset styles
          renderChipGroup(els.positionChips, POSITIONS, state.positions);
          renderChipGroup(els.compoundChips, COMPOUNDS, state.compounds);
          renderChipGroup(els.vehicleTypeChips, VEHICLE_TYPES, state.vehicleTypes);

          render();
        });
      }
    }

    function populateModelsForManufacturer(manufacturer) {
      if (!els.modelSelect) return;
      let models = [];
      if (manufacturer === 'all') {
        models = Array.from(new Set(PRODUCTS.map(p => p.model)));
      } else {
        models = Array.from(new Set(PRODUCTS.filter(p => p.manufacturer === manufacturer).map(p => p.model)));
      }
      models.sort();
      els.modelSelect.innerHTML =
        '<option value="all" class="font-nunito">All models</option>' +
        models.map(m => `<option value="${m}" class="font-nunito">${m}</option>`).join('');
    }

    // Boot
    (function () {
      // Year
      const yearEl = document.getElementById('year');
      if (yearEl) yearEl.textContent = String(new Date().getFullYear());

      initFilters();
      attachEvents();
      render();
    })();
  
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
      

<header className="sticky top-0 z-40 backdrop-blur border-b bg-white/80 border-stone-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<a className="flex items-center gap-3 group" href="index.html">
<div className="h-8 w-8 rounded-md flex items-center justify-center tracking-tight text-sm font-semibold group-hover:shadow-md transition bg-black text-white font-nunito">
            BA
          </div>
<div className="flex flex-col leading-tight">
<span className="text-[15px] font-semibold tracking-tight text-stone-900 font-nunito">Briks Algeria</span>
<span className="text-[11px] text-stone-500 font-nunito">Brake Systems</span>
</div>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm transition text-stone-600 hover:text-stone-900 font-nunito" href="catalog.html">Catalog</a>
<a className="text-sm transition text-stone-600 hover:text-stone-900 font-nunito" href="about.html">About</a>
<a className="text-sm transition text-stone-600 hover:text-stone-900 font-nunito" href="contact.html">Contact</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:shadow-sm transition border-red-300 text-stone-800 hover:bg-red-50 hover:border-red-400 font-nunito" href="contact.html">
<svg className="lucide lucide-mail w-4 h-4 text-red-600" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
            Contact Sales
          </a>
<a className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium hover:shadow-sm transition bg-black text-white hover:bg-stone-900 font-nunito" href="catalog.html">
<svg className="lucide lucide-package-search w-4 h-4" data-lucide="package-search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path><path d="m7.5 4.27 9 5.15"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" x2="12" y1="22" y2="12"></line><circle cx="18.5" cy="15.5" r="2.5"></circle><path d="M20.27 17.27 22 19"></path></svg>
            Explore Catalog
          </a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 items-center py-14 md:py-20">
<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 text-xs border rounded-full px-2.5 py-1 mb-4 text-stone-600 border-stone-200 font-nunito">
<svg className="lucide lucide-shield-check w-4 h-4 text-red-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
            ECE R90 Compliant
          </div>
<h1 className="text-4xl md:text-5xl tracking-tight text-stone-900 font-nunito font-semibold">
            Precision Brake Pads engineered in Algeria
          </h1>
<p className="mt-4 text-[15px] leading-7 text-stone-600 font-nunito">
            Briks Algeria designs and manufactures high‑performance brake pads for passenger, SUV, and commercial vehicles. Explore an R90‑certified range built for quiet stops, long life, and dependable performance.
          </p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium hover:shadow-sm transition bg-black text-white hover:bg-stone-900 font-nunito" href="catalog.html">
<svg className="lucide lucide-sliders-horizontal w-4 h-4" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line></svg>
              Find Your Fit
            </a>
<a className="inline-flex items-center gap-2 rounded-md border px-4 py-2.5 text-sm hover:shadow-sm transition border-red-300 text-stone-800 hover:bg-red-50 hover:border-red-400 font-nunito" href="about.html">
<svg className="lucide lucide-factory w-4 h-4 text-red-600" data-lucide="factory" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 16h.01"></path><path d="M16 16h.01"></path><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path><path d="M8 16h.01"></path></svg>
              Our Manufacturing
            </a>
</div>
<div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
<div className="rounded-lg border p-4 border-stone-200">
<div className="font-semibold text-lg tracking-tight text-stone-900 font-nunito">R90</div>
<div className="text-xs text-stone-500 font-nunito">Certified</div>
</div>
<div className="rounded-lg border p-4 border-stone-200">
<div className="font-semibold text-lg tracking-tight text-stone-900 font-nunito">500+</div>
<div className="text-xs text-stone-500 font-nunito">References</div>
</div>
<div className="rounded-lg border p-4 border-stone-200">
<div className="font-semibold text-lg tracking-tight text-stone-900 font-nunito">98%</div>
<div className="text-xs text-stone-500 font-nunito">Vehicle Coverage</div>
</div>
<div className="rounded-lg border p-4 border-stone-200">
<div className="font-semibold text-lg tracking-tight text-stone-900 font-nunito">Algeria</div>
<div className="text-xs text-stone-500 font-nunito">Made &amp; Tested</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="relative rounded-xl overflow-hidden ring-1 shadow-sm ring-stone-200">
<img alt="Brake assembly" className="w-full h-[320px] md:h-[420px] object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute bottom-3 left-3 right-3 backdrop-blur rounded-md border px-3 py-2 flex items-center justify-between bg-white/80 border-stone-200">
<div className="flex items-center gap-2 text-xs text-stone-700 font-nunito">
<svg className="lucide lucide-badge-check w-4 h-4 text-red-600" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
                Quality assurance at every batch
              </div>
<div className="hidden sm:flex items-center gap-2 text-xs text-stone-600 font-nunito">
<svg className="lucide lucide-microscope w-4 h-4 text-red-600" data-lucide="microscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 18h8"></path><path d="M3 22h18"></path><path d="M14 22a7 7 0 1 0 0-14h-1"></path><path d="M9 14h2"></path><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path></svg>
                Material lab tested
              </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-stone-200 bg-stone-50/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
<div className="flex items-start justify-between gap-6 flex-wrap">
<div>
<h2 className="text-2xl md:text-3xl tracking-tight text-stone-900 font-nunito font-semibold">Featured Products</h2>
<p className="mt-1 text-sm text-stone-600 font-nunito">A quick look at popular references. Explore the full catalog for filters and more.</p>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:shadow-sm transition bg-red-600 text-white hover:bg-red-700 font-nunito" href="catalog.html">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            View full catalog
          </a>
</div>
</div>
<div className="mt-6 grid lg:grid-cols-12 gap-6">

<aside className="hidden lg:col-span-4 xl:col-span-3">
<div className="rounded-xl border shadow-sm p-4 bg-white border-stone-200">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 font-medium text-stone-900 font-nunito">
<svg className="lucide lucide-sliders-horizontal w-4 h-4" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line></svg>
                Filters
              </div>
<button className="inline-flex items-center gap-2 text-xs px-2 py-1 rounded hover:outline hover:outline-1 transition text-stone-600 hover:text-stone-900 hover:bg-stone-50 hover:outline-stone-200 font-nunito" id="clearFiltersBtn">
<svg className="lucide lucide-refresh-cw w-3.5 h-3.5" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
                Reset
              </button>
</div>
<div className="mt-4 space-y-5">
<div>
<label className="block text-xs font-medium text-stone-700 font-nunito" htmlFor="searchInput">Search</label>
<div className="mt-1 relative">
<svg className="lucide lucide-search w-4 h-4 absolute left-2.5 top-2.5 pointer-events-none text-stone-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full pl-9 pr-3 py-2.5 rounded-md border text-sm placeholder:text-stone-400 focus:outline-none focus:ring-4 focus:ring-stone-100 focus:border-stone-400 transition border-stone-300" id="searchInput" placeholder="Code, OEM ref, keyword" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-stone-700 font-nunito" htmlFor="manufacturerSelect">Manufacturer</label>
<div className="mt-1 relative">
<select className="w-full appearance-none pl-3 pr-9 py-2.5 rounded-md border text-sm focus:outline-none focus:ring-4 focus:ring-stone-100 focus:border-stone-400 transition bg-white border-stone-300" id="manufacturerSelect">
<option className="font-nunito" value="all">All manufacturers</option>
<option className="font-nunito" value="Hyundai">Hyundai</option><option className="font-nunito" value="Peugeot">Peugeot</option><option className="font-nunito" value="Renault">Renault</option><option className="font-nunito" value="Toyota">Toyota</option><option className="font-nunito" value="Volkswagen">Volkswagen</option><option className="font-nunito" value="Hyundai">Hyundai</option><option className="font-nunito" value="Peugeot">Peugeot</option><option className="font-nunito" value="Renault">Renault</option><option className="font-nunito" value="Toyota">Toyota</option><option className="font-nunito" value="Volkswagen">Volkswagen</option><option className="font-nunito" value="Hyundai">Hyundai</option><option className="font-nunito" value="Peugeot">Peugeot</option><option className="font-nunito" value="Renault">Renault</option><option className="font-nunito" value="Toyota">Toyota</option><option className="font-nunito" value="Volkswagen">Volkswagen</option><option className="font-nunito" value="Hyundai">Hyundai</option><option className="font-nunito" value="Peugeot">Peugeot</option><option className="font-nunito" value="Renault">Renault</option><option className="font-nunito" value="Toyota">Toyota</option><option className="font-nunito" value="Volkswagen">Volkswagen</option>
</select>
<svg className="lucide lucide-chevron-down w-4 h-4 absolute right-2.5 top-2.5 pointer-events-none text-stone-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div>
<div className="flex items-center gap-2 text-xs font-medium text-stone-700 font-nunito">
<svg className="lucide lucide-car w-4 h-4" data-lucide="car" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>
                  Position
                </div>
<div className="mt-2 flex flex-wrap gap-2" id="positionChips"></div>
</div>
<div>
<div className="flex items-center gap-2 text-xs font-medium text-stone-700 font-nunito">
<svg className="lucide lucide-beaker w-4 h-4" data-lucide="beaker" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 3h15"></path><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"></path><path d="M6 14h12"></path></svg>
                  Compound
                </div>
<div className="mt-2 flex flex-wrap gap-2" id="compoundChips"></div>
</div>
<div>
<div className="flex items-center gap-2 text-xs font-medium text-stone-700 font-nunito">
<svg className="lucide lucide-truck w-4 h-4" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
                  Vehicle Type
                </div>
<div className="mt-2 flex flex-wrap gap-2" id="vehicleTypeChips"></div>
</div>
</div>
</div>
</aside>

<div className="lg:col-span-12">
<div className="flex items-center justify-between gap-4 flex-wrap">
<div className="text-sm text-stone-600 font-nunito">
<span className="font-medium text-stone-900 font-nunito" id="resultsCount">6</span> featured
            </div>
<div className="flex items-center gap-2 text-xs text-stone-500 font-nunito">
<svg className="lucide lucide-sparkles w-4 h-4 text-red-600" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v2"></path><path d="M12 19v2"></path><path d="m16.2 7.8-1.4 1.4"></path><path d="m9.2 14.8-1.4 1.4"></path><path d="M21 12h-2"></path><path d="M5 12H3"></path><path d="m16.2 16.2-1.4-1.4"></path><path d="m9.2 9.2-1.4-1.4"></path></svg>
              Showing featured references
            </div>
</div>
<div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5" id="productsGrid"></div>
<div className="hidden mt-10 rounded-xl border border-dashed p-8 text-center border-stone-300 bg-white" id="noResults">
<div className="mx-auto w-10 h-10 rounded-full border flex items-center justify-center mb-3 border-stone-200">
<svg className="lucide lucide-search-x w-5 h-5 text-stone-500" data-lucide="search-x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m13.5 8.5-5 5"></path><path d="m8.5 8.5 5 5"></path><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</div>
<div className="font-medium text-stone-900 font-nunito">No matches found</div>
<p className="text-sm mt-1 text-stone-600 font-nunito">Try a different manufacturer, model, or remove some compatibility filters.</p>
</div>
<div className="mt-8 flex justify-center">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium hover:shadow-sm transition bg-black text-white hover:bg-stone-900 font-nunito" href="catalog.html">
              Browse full catalog
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-stone-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md flex items-center justify-center tracking-tight text-sm font-semibold bg-black text-white font-nunito">BA</div>
<div className="text-sm text-stone-600 font-nunito">© <span className="font-nunito" id="year">2025</span> Briks Algeria. All rights reserved.</div>
</div>
<div className="flex items-center gap-4 text-sm">
<a className="transition text-stone-600 hover:text-stone-900 font-nunito" href="catalog.html">Catalog</a>
<a className="transition text-stone-600 hover:text-stone-900 font-nunito" href="about.html">About</a>
<a className="transition text-stone-600 hover:text-stone-900 font-nunito" href="contact.html">Contact</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
