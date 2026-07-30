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



        // Initialize Lucide icons
        lucide.createIcons();

        // Initialize Mapbox
        mapboxgl.accessToken = 'pk.eyJ1IjoidGVzdCIsImEiOiJjbGZuYjcxMTUwdmp5M2RwNWc1Y2wwdHZ5In0.test';
        
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v11',
            center: [-96.7970, 32.7767], // Dallas center
            zoom: 11
        });

        // Add sample markers
        const properties = [
            { id: 1, coordinates: [-96.7970, 32.7767], price: '$425K', capRate: '7.2%' },
            { id: 2, coordinates: [-96.6989, 33.0198], price: '$385K', capRate: '6.8%' },
            { id: 3, coordinates: [-96.7298, 32.9481], price: '$512K', capRate: '6.5%' }
        ];

        properties.forEach(property => {
            const el = document.createElement('div');
            el.className = 'w-8 h-8 bg-blue-600 border-2 border-white rounded-full flex items-center justify-center text-white text-xs font-semibold cursor-pointer hover:bg-blue-700 transition-colors shadow-lg';
            el.innerHTML = property.id;

            new mapboxgl.Marker(el)
                .setLngLat(property.coordinates)
                .addTo(map);

            el.addEventListener('click', () => {
                // Highlight corresponding card and show popup
                console.log('Marker clicked:', property.id);
            });
        });

        // Assumptions drawer functions
        function openAssumptions() {
            const drawer = document.getElementById('assumptionsDrawer');
            drawer.classList.remove('hidden', 'translate-x-full');
        }

        function closeAssumptions() {
            const drawer = document.getElementById('assumptionsDrawer');
            drawer.classList.add('translate-x-full');
            setTimeout(() => drawer.classList.add('hidden'), 300);
        }

        // Add click handlers for analyze buttons
        document.querySelectorAll('[title="Analyze"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                openAssumptions();
            });
        });

        // Property card hover effects
        document.querySelectorAll('.property-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                // Add hover effect logic here
            });
        });
    
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe className="" frameborder="0" height="100%" src="https://my.spline.design/untitled-f680ea749fc30deeb5eff5a8b15b2f63" width="100%"></iframe></div>

<div className="bg-amber-50 border-b border-amber-200 px-4 py-2 animate-fade-in">
<div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
<div className="flex items-center gap-2 text-amber-800">
<svg className="lucide lucide-info w-4 h-4" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<span>Demo data active—connect MLS/ATTOM in Settings to go live.</span>
</div>
<button className="hover:text-amber-900 font-medium text-amber-700">Connect data</button>
</div>
</div>

<header className="bg-white border-b border-slate-200 sticky top-0 z-40 animate-slide-up">
<div className="max-w-7xl mr-auto ml-auto pt-4 pr-4 pb-4 pl-4">
<div className="flex mb-4 items-center justify-between">
<div className="flex items-center gap-3">
<div className="bg-blue-600 text-white px-2 py-1 rounded-lg text-sm font-semibold tracking-tight">RZ</div>
<span className="text-lg font-semibold tracking-tight">Realtyze</span>
</div>
<div className="flex items-center gap-3">
<button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
<svg className="lucide lucide-bell w-5 h-5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
<div className="w-8 h-8 bg-slate-200 rounded-full"></div>
</div>
</div>

<div className="relative animate-slide-up stagger-1">
<svg className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-slate-50 border-slate-200 border rounded-xl pt-3 pr-4 pb-3 pl-10" placeholder="Try: Cap ≥ 6% in DFW near logistics hubs" type="text" />
</div>

<div className="flex gap-2 mt-3 overflow-x-auto pb-2 animate-slide-up stagger-2">
<button className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap border border-blue-200 hover:bg-blue-100">
                    Cap ≥ 6% in DFW
                </button>
<button className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap hover:bg-slate-200">
                    DSCR ≥ 1.25
                </button>
<button className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap hover:bg-slate-200">
                    SFR only
                </button>
<button className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap hover:bg-slate-200">
                    Under $500K
                </button>
</div>

<div className="flex items-center justify-between mt-4 animate-slide-up stagger-3">
<div className="text-sm text-slate-600">
<span className="font-semibold text-slate-900">328 results</span> • DFW • Cap ≥ 6%
                </div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg">
<svg className="lucide lucide-bookmark w-4 h-4" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
                        Save Search
                    </button>
<button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg">
<svg className="lucide lucide-bell w-4 h-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
                        Alerts
                    </button>
</div>
</div>
</div>
</header>

<div className="max-w-7xl mx-auto px-4 py-6">
<div className="grid grid-cols-12 gap-6 h-[calc(100vh-280px)]">

<div className="col-span-5 flex flex-col gap-4">

<div className="bg-white rounded-xl border border-slate-200 p-4 animate-slide-up stagger-1">
<div className="flex items-center justify-between mb-4">
<h3 className="font-semibold">Filters</h3>
<button className="text-sm text-blue-600 hover:text-blue-700 font-medium">Clear all</button>
</div>

<div className="mb-4">
<label className="text-sm font-medium text-slate-700 mb-2 block">Markets</label>
<div className="flex flex-wrap gap-2">
<button className="bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1.5 rounded-lg text-sm font-medium">DFW</button>
<button className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-sm hover:bg-slate-200">Austin</button>
<button className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-sm hover:bg-slate-200">Phoenix</button>
<button className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-sm hover:bg-slate-200">Raleigh</button>
</div>
</div>

<div className="mb-4">
<label className="text-sm font-medium text-slate-700 mb-2 block">Asset Type</label>
<div className="flex flex-wrap gap-2">
<button className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-sm hover:bg-slate-200">SFR</button>
<button className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-sm hover:bg-slate-200">Multifamily</button>
<button className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-sm hover:bg-slate-200">BTR</button>
</div>
</div>

<div className="mb-4">
<label className="text-sm font-medium text-slate-700 mb-2 block">Price Range</label>
<div className="grid grid-cols-2 gap-2">
<input className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Min" type="text" />
<input className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Max" type="text" />
</div>
</div>

<div className="space-y-3">
<div>
<label className="text-sm font-medium text-slate-700 mb-2 block flex items-center gap-1">
                                Cap Rate (min)
                                <svg className="lucide lucide-info w-3 h-3 text-slate-400" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} title="Net Operating Income ÷ Property Value" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</label>
<input className="w-full accent-blue-600" max="15" min="0" type="range" value="6" />
<div className="flex justify-between text-xs text-slate-500 mt-1">
<span>0%</span>
<span className="font-medium text-slate-700">6%</span>
<span>15%</span>
</div>
</div>
<div>
<label className="text-sm font-medium text-slate-700 mb-2 block flex items-center gap-1">
                                DSCR (min)
                                <svg className="lucide lucide-info w-3 h-3 text-slate-400" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} title="Debt Service Coverage Ratio: NOI ÷ Annual Debt Service" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</label>
<input className="w-full accent-blue-600" max="2.5" min="0.5" step="0.1" type="range" value="1.25" />
<div className="flex justify-between text-xs text-slate-500 mt-1">
<span>0.5</span>
<span className="font-medium text-slate-700">1.25</span>
<span>2.5</span>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-white rounded-xl border border-slate-200 animate-slide-up stagger-2">
<div className="p-4 border-b border-slate-200">
<div className="flex items-center justify-between">
<h3 className="font-semibold">Properties</h3>
<select className="text-sm border border-slate-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500">
<option>Cap Rate (desc)</option>
<option>DSCR (desc)</option>
<option>Price (asc)</option>
<option>Price (desc)</option>
<option>NOI (desc)</option>
<option>IRR 5y (desc)</option>
</select>
</div>
</div>

<div className="overflow-auto max-h-[600px]">

<div className="property-card p-4 border-b border-slate-100 hover:bg-slate-50 cursor-pointer animate-slide-up stagger-3">
<div className="flex gap-4">
<div className="w-20 h-16 bg-slate-200 rounded-lg relative overflow-hidden">
<img alt="Property" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=80&h=64&fit=crop&crop=center" />
<div className="absolute top-1 left-1 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded">New</div>
</div>
<div className="flex-1">
<div className="flex items-start justify-between mb-2">
<div>
<h4 className="font-medium text-slate-900">1247 Oak Street</h4>
<p className="text-sm text-slate-600">Dallas, TX 75201</p>
</div>
<span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded font-medium">DFW</span>
</div>
<div className="grid grid-cols-4 gap-2 mb-2">
<div className="text-center">
<div className="text-lg font-semibold text-slate-900">$425K</div>
<div className="text-xs text-slate-500">Price</div>
</div>
<div className="text-center">
<div className="text-lg font-semibold text-green-600">7.2%</div>
<div className="text-xs text-slate-500">Cap Rate</div>
</div>
<div className="text-center">
<div className="text-lg font-semibold text-blue-600">1.45</div>
<div className="text-xs text-slate-500">DSCR</div>
</div>
<div className="text-center">
<div className="text-lg font-semibold text-teal-600">12.8%</div>
<div className="text-xs text-slate-500">CoC</div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4 text-sm text-slate-600">
<span className="">3 bed • 2 bath • 1,850 sqft</span>
<span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-xs">MLS</span>
</div>
<div className="flex gap-1">
<button className="p-1.5 hover:bg-slate-200 rounded text-slate-600" title="Save">
<svg className="lucide lucide-bookmark w-4 h-4" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
<button className="p-1.5 hover:bg-slate-200 rounded text-slate-600" title="Analyze">
<svg className="lucide lucide-calculator w-4 h-4" data-lucide="calculator" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="property-card p-4 border-b border-slate-100 hover:bg-slate-50 cursor-pointer animate-slide-up stagger-4">
<div className="flex gap-4">
<div className="w-20 h-16 bg-slate-200 rounded-lg relative overflow-hidden">
<img alt="Property" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=80&h=64&fit=crop&crop=center" />
<div className="absolute top-1 left-1 bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded">Cut</div>
</div>
<div className="flex-1">
<div className="flex items-start justify-between mb-2">
<div>
<h4 className="font-medium text-slate-900">892 Pine Avenue</h4>
<p className="text-sm text-slate-600">Plano, TX 75024</p>
</div>
<span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded font-medium">DFW</span>
</div>
<div className="grid grid-cols-4 gap-2 mb-2">
<div className="text-center">
<div className="text-lg font-semibold text-slate-900">$385K</div>
<div className="text-xs text-slate-500">Price</div>
</div>
<div className="text-center">
<div className="text-lg font-semibold text-green-600">6.8%</div>
<div className="text-xs text-slate-500">Cap Rate</div>
</div>
<div className="text-center">
<div className="text-lg font-semibold text-blue-600">1.32</div>
<div className="text-xs text-slate-500">DSCR</div>
</div>
<div className="text-center">
<div className="text-lg font-semibold text-teal-600">11.4%</div>
<div className="text-xs text-slate-500">CoC</div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4 text-sm text-slate-600">
<span>4 bed • 3 bath • 2,240 sqft</span>
<span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-xs">ATTOM</span>
</div>
<div className="flex gap-1">
<button className="p-1.5 hover:bg-slate-200 rounded text-slate-600" title="Save">
<svg className="lucide lucide-bookmark w-4 h-4" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
<button className="p-1.5 hover:bg-slate-200 rounded text-slate-600" title="Analyze">
<svg className="lucide lucide-calculator w-4 h-4" data-lucide="calculator" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="property-card p-4 border-b border-slate-100 hover:bg-slate-50 cursor-pointer animate-slide-up stagger-5">
<div className="flex gap-4">
<div className="w-20 h-16 bg-slate-200 rounded-lg relative overflow-hidden">
<img alt="Property" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=80&h=64&fit=crop&crop=center" />
</div>
<div className="flex-1">
<div className="flex items-start justify-between mb-2">
<div>
<h4 className="font-medium text-slate-900">456 Maple Drive</h4>
<p className="text-sm text-slate-600">Richardson, TX 75080</p>
</div>
<span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded font-medium">DFW</span>
</div>
<div className="grid grid-cols-4 gap-2 mb-2">
<div className="text-center">
<div className="text-lg font-semibold text-slate-900">$512K</div>
<div className="text-xs text-slate-500">Price</div>
</div>
<div className="text-center">
<div className="text-lg font-semibold text-green-600">6.5%</div>
<div className="text-xs text-slate-500">Cap Rate</div>
</div>
<div className="text-center">
<div className="text-lg font-semibold text-blue-600">1.28</div>
<div className="text-xs text-slate-500">DSCR</div>
</div>
<div className="text-center">
<div className="text-lg font-semibold text-teal-600">10.2%</div>
<div className="text-xs text-slate-500">CoC</div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4 text-sm text-slate-600">
<span>3 bed • 2 bath • 1,975 sqft</span>
<span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-xs">MLS</span>
</div>
<div className="flex gap-1">
<button className="p-1.5 hover:bg-slate-200 rounded text-slate-600" title="Save">
<svg className="lucide lucide-bookmark w-4 h-4" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
<button className="p-1.5 hover:bg-slate-200 rounded text-slate-600" title="Analyze">
<svg className="lucide lucide-calculator w-4 h-4" data-lucide="calculator" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-7 animate-slide-up stagger-2">
<div className="bg-white rounded-xl border border-slate-200 h-full overflow-hidden">
<div className="w-full h-full rounded-xl mapboxgl-map" id="map"><div className="mapboxgl-canary" style={{visibility: `hidden`}}></div><div className="mapboxgl-canvas-container mapboxgl-interactive mapboxgl-touch-drag-pan mapboxgl-touch-zoom-rotate"><canvas aria-label="Map" className="mapboxgl-canvas" height="2158" role="region" style={{width: `552.672px`, height: `1079px`}} tabindex="0" width="1106"></canvas><div aria-label="Map marker" className="w-8 h-8 bg-blue-600 border-2 border-white rounded-full flex items-center justify-center text-white text-xs font-semibold cursor-pointer hover:bg-blue-700 transition-colors shadow-lg mapboxgl-marker mapboxgl-marker-anchor-center" style={{transform: `translate(137px, 435px) translate(-50%, -50%) translate(0px, 0px)`}}>1</div><div aria-label="Map marker" className="w-8 h-8 bg-blue-600 border-2 border-white rounded-full flex items-center justify-center text-white text-xs font-semibold cursor-pointer hover:bg-blue-700 transition-colors shadow-lg mapboxgl-marker mapboxgl-marker-anchor-center" style={{transform: `translate(137px, 435px) translate(-50%, -50%) translate(0px, 0px)`}}>2</div><div aria-label="Map marker" className="w-8 h-8 bg-blue-600 border-2 border-white rounded-full flex items-center justify-center text-white text-xs font-semibold cursor-pointer hover:bg-blue-700 transition-colors shadow-lg mapboxgl-marker mapboxgl-marker-anchor-center" style={{transform: `translate(137px, 435px) translate(-50%, -50%) translate(0px, 0px)`}}>3</div></div><div className="mapboxgl-control-container"><div className="mapboxgl-ctrl-top-left"></div><div className="mapboxgl-ctrl-top-right"></div><div className="mapboxgl-ctrl-bottom-left"><div className="mapboxgl-ctrl" style={{display: `block`}}><a aria-label="Mapbox logo" className="mapboxgl-ctrl-logo" href="https://www.mapbox.com/" rel="noopener nofollow" target="_blank"></a></div></div><div className="mapboxgl-ctrl-bottom-right"><div className="mapboxgl-ctrl mapboxgl-ctrl-attrib mapboxgl-attrib-empty mapboxgl-compact"><button aria-label="Toggle attribution" className="mapboxgl-ctrl-attrib-button" type="button"><span aria-hidden="true" className="mapboxgl-ctrl-icon" title="Toggle attribution"></span></button><div className="mapboxgl-ctrl-attrib-inner" role="list"></div></div></div></div><div className="mapboxgl-canary" style={{visibility: `hidden`}}></div><div className="mapboxgl-canvas-container mapboxgl-interactive mapboxgl-touch-drag-pan mapboxgl-touch-zoom-rotate"><canvas aria-label="Map" className="mapboxgl-canvas" height="2158" role="region" style={{width: `552.672px`, height: `1079px`}} tabindex="0" width="1106"></canvas><div aria-label="Map marker" className="w-8 h-8 bg-blue-600 border-2 border-white rounded-full flex items-center justify-center text-white text-xs font-semibold cursor-pointer hover:bg-blue-700 transition-colors shadow-lg mapboxgl-marker mapboxgl-marker-anchor-center" style={{transform: `translate(276px, 540px) translate(-50%, -50%) translate(0px, 0px)`}}>1</div><div aria-label="Map marker" className="w-8 h-8 bg-blue-600 border-2 border-white rounded-full flex items-center justify-center text-white text-xs font-semibold cursor-pointer hover:bg-blue-700 transition-colors shadow-lg mapboxgl-marker mapboxgl-marker-anchor-center" style={{transform: `translate(562px, -304px) translate(-50%, -50%) translate(0px, 0px)`}}>2</div><div aria-label="Map marker" className="w-8 h-8 bg-blue-600 border-2 border-white rounded-full flex items-center justify-center text-white text-xs font-semibold cursor-pointer hover:bg-blue-700 transition-colors shadow-lg mapboxgl-marker mapboxgl-marker-anchor-center" style={{transform: `translate(472px, -55px) translate(-50%, -50%) translate(0px, 0px)`}}>3</div></div><div className="mapboxgl-control-container"><div className="mapboxgl-ctrl-top-left"></div><div className="mapboxgl-ctrl-top-right"></div><div className="mapboxgl-ctrl-bottom-left"><div className="mapboxgl-ctrl" style={{display: `block`}}><a aria-label="Mapbox logo" className="mapboxgl-ctrl-logo" href="https://www.mapbox.com/" rel="noopener nofollow" target="_blank"></a></div></div><div className="mapboxgl-ctrl-bottom-right"><div className="mapboxgl-ctrl mapboxgl-ctrl-attrib mapboxgl-attrib-empty mapboxgl-compact"><button aria-label="Toggle attribution" className="mapboxgl-ctrl-attrib-button" type="button"><span aria-hidden="true" className="mapboxgl-ctrl-icon" title="Toggle attribution"></span></button><div className="mapboxgl-ctrl-attrib-inner" role="list"></div></div></div></div></div>
</div>
</div>
</div>
</div>

<div className="fixed inset-y-0 right-0 w-96 bg-white border-l border-slate-200 transform translate-x-full transition-transform duration-300 z-50 hidden" id="assumptionsDrawer">
<div className="p-6">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-semibold tracking-tight">Investment Analysis</h2>
<button className="p-2 hover:bg-slate-100 rounded-lg" onClick={(e) => { closeAssumptions() }}>
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="space-y-4">
<div>
<label className="text-sm font-medium text-slate-700 mb-2 block">Vacancy Rate (%)</label>
<input className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="number" value="5" />
</div>
<div>
<label className="text-sm font-medium text-slate-700 mb-2 block">Property Management Fee (%)</label>
<input className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="number" value="8" />
</div>
<div>
<label className="text-sm font-medium text-slate-700 mb-2 block">Annual Rent Growth (%)</label>
<input className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="number" value="3" />
</div>
<div>
<label className="text-sm font-medium text-slate-700 mb-2 block">Exit Cap Rate (%)</label>
<input className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="number" value="6.5" />
</div>
<div className="bg-slate-50 rounded-lg p-4 space-y-2">
<h3 className="font-medium text-slate-900">Recalculated Metrics</h3>
<div className="grid grid-cols-2 gap-4 text-sm">
<div>
<span className="text-slate-600">NOI:</span>
<span className="font-semibold ml-2">$30,600</span>
</div>
<div>
<span className="text-slate-600">DSCR:</span>
<span className="font-semibold ml-2">1.45</span>
</div>
<div>
<span className="text-slate-600">CoC:</span>
<span className="font-semibold ml-2">12.8%</span>
</div>
<div>
<span className="text-slate-600">5Y IRR:</span>
<span className="font-semibold ml-2">18.2%</span>
</div>
</div>
</div>
<div className="flex gap-3 pt-4">
<button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                        Create Deal Card
                    </button>
<button className="px-4 py-2 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 transition-colors">
                        Export
                    </button>
</div>
</div>
</div>
</div>


    </>
  );
}
