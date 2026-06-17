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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Custom Select Dropdowns Logic
            const customSelects = document.querySelectorAll('.custom-select');
            
            customSelects.forEach(select => {
                const btn = select.querySelector('.select-btn');
                const menu = select.querySelector('.select-menu');
                const text = select.querySelector('.select-text');
                const options = select.querySelectorAll('.select-option');

                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    // Close other open menus
                    customSelects.forEach(other => {
                        if (other !== select) {
                            other.querySelector('.select-menu').classList.add('hidden');
                            other.querySelector('.select-menu').classList.remove('opacity-100');
                            other.querySelector('.select-btn').classList.remove('ring-2', 'ring-[#c49c5d]/20', 'border-[#c49c5d]');
                        }
                    });

                    // Toggle current menu
                    menu.classList.toggle('hidden');
                    
                    // Small delay to allow display block to apply before animating opacity
                    setTimeout(() => {
                        menu.classList.toggle('opacity-0');
                        menu.classList.toggle('opacity-100');
                    }, 10);

                    if(!menu.classList.contains('hidden')) {
                        btn.classList.add('ring-2', 'ring-[#c49c5d]/20', 'border-[#c49c5d]');
                    } else {
                        btn.classList.remove('ring-2', 'ring-[#c49c5d]/20', 'border-[#c49c5d]');
                    }
                });

                options.forEach(option => {
                    option.addEventListener('click', (e) => {
                        e.stopPropagation();
                        text.textContent = option.textContent;
                        text.classList.remove('text-gray-400');
                        text.classList.add('text-gray-900');
                        
                        menu.classList.add('opacity-0');
                        setTimeout(() => menu.classList.add('hidden'), 150);
                        btn.classList.remove('ring-2', 'ring-[#c49c5d]/20', 'border-[#c49c5d]');
                    });
                });
            });

            // Close dropdowns when clicking outside
            document.addEventListener('click', () => {
                customSelects.forEach(select => {
                    const menu = select.querySelector('.select-menu');
                    const btn = select.querySelector('.select-btn');
                    menu.classList.add('opacity-0');
                    setTimeout(() => menu.classList.add('hidden'), 150);
                    btn.classList.remove('ring-2', 'ring-[#c49c5d]/20', 'border-[#c49c5d]');
                });
            });

            // Mobile Filter Sidebar Logic
            const mobileFilterBtn = document.getElementById('mobileFilterBtn');
            const closeFilterBtn = document.getElementById('closeFilterBtn');
            const filterSidebar = document.getElementById('filterSidebar');
            const filterOverlay = document.getElementById('filterOverlay');

            function openSidebar() {
                filterSidebar.classList.remove('-translate-x-full');
                filterOverlay.classList.remove('hidden');
                // Allow display to register before opacity transition
                setTimeout(() => {
                    filterOverlay.classList.remove('opacity-0');
                    filterOverlay.classList.add('opacity-100');
                }, 10);
                document.body.style.overflow = 'hidden';
            }

            function closeSidebar() {
                filterSidebar.classList.add('-translate-x-full');
                filterOverlay.classList.remove('opacity-100');
                filterOverlay.classList.add('opacity-0');
                setTimeout(() => {
                    filterOverlay.classList.add('hidden');
                }, 300); // match transition duration
                document.body.style.overflow = '';
            }

            if (mobileFilterBtn) mobileFilterBtn.addEventListener('click', openSidebar);
            if (closeFilterBtn) closeFilterBtn.addEventListener('click', closeSidebar);
            if (filterOverlay) filterOverlay.addEventListener('click', closeSidebar);
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
      
<div className="max-w-[1400px] mx-auto px-4 py-6 md:py-12 lg:px-8">

<div className="flex lg:hidden justify-between items-center mb-6">
<p className="text-sm text-gray-500">Affichage de <span className="font-medium text-gray-800">12</span> propriétés</p>
<button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2.5 rounded-full text-sm font-medium shadow-sm active:scale-95 transition-all" id="mobileFilterBtn" type="button">
<iconify-icon className="text-lg" icon="solar:filter-linear"></iconify-icon>
                Filtres
            </button>
</div>
<div className="flex flex-col lg:flex-row gap-8 items-start relative">

<div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-40 hidden lg:hidden transition-opacity duration-300 opacity-0" id="filterOverlay"></div>

<div className="fixed inset-y-0 left-0 z-50 w-[85%] sm:w-[340px] transform -translate-x-full transition-transform duration-300 lg:relative lg:translate-x-0 lg:w-[340px] shrink-0 bg-white lg:rounded-2xl lg:shadow-[0_2px_40px_-12px_rgba(0,0,0,0.05)] lg:border border-gray-100 flex flex-col h-full lg:h-auto" id="filterSidebar">

<div className="flex items-center justify-between p-6 lg:hidden border-b border-gray-100">
<h2 className="text-lg font-semibold text-gray-900 tracking-tight">Filtres</h2>
<button className="text-gray-400 hover:text-gray-700 transition-colors p-1" id="closeFilterBtn" type="button">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="p-6 overflow-y-auto lg:overflow-visible flex-1 custom-scrollbar">

<div className="flex gap-3 mb-6">
<button className="flex-1 py-3 bg-[#c49c5d] text-white text-sm font-medium rounded-full shadow-sm hover:bg-[#b38a4d] transition-colors" type="button">
                            FOR RENT
                        </button>
<button className="flex-1 py-3 bg-[#e5e7eb] text-gray-700 text-sm font-medium rounded-full hover:bg-gray-300 transition-colors" type="button">
                            FOR SALE
                        </button>
</div>

<div className="flex flex-col gap-4">
<input className="w-full border border-gray-200 text-gray-900 text-sm rounded-full py-3.5 px-5 focus:ring-2 focus:ring-[#c49c5d]/20 focus:border-[#c49c5d] outline-none transition-all placeholder:text-gray-400" placeholder="Type keyword...." type="text"/>

<div className="relative custom-select">
<button className="select-btn w-full flex items-center justify-between border border-gray-200 bg-white text-sm rounded-full py-3.5 pl-5 pr-5 hover:border-gray-300 transition-all outline-none" type="button">
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-400 text-lg" icon="solar:map-point-linear"></iconify-icon>
<span className="select-text text-gray-400">Location</span>
</div>
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="select-menu absolute top-full left-0 w-full mt-2 bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl overflow-hidden z-50 hidden opacity-0 transition-opacity">
<div className="flex flex-col py-2 max-h-56 overflow-y-auto custom-scrollbar">
<button className="select-option w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-[#c49c5d]/5 hover:text-[#c49c5d] transition-colors" type="button">Marrakech</button>
<button className="select-option w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-[#c49c5d]/5 hover:text-[#c49c5d] transition-colors" type="button">Casablanca</button>
</div>
</div>
</div>

<div className="relative custom-select">
<button className="select-btn w-full flex items-center justify-between border border-gray-200 bg-white text-sm rounded-full py-3.5 pl-5 pr-5 hover:border-gray-300 transition-all outline-none" type="button">
<span className="select-text text-gray-400">Property type</span>
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="select-menu absolute top-full left-0 w-full mt-2 bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl overflow-hidden z-50 hidden opacity-0 transition-opacity">
<div className="flex flex-col py-2 max-h-56 overflow-y-auto custom-scrollbar">
<button className="select-option w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-[#c49c5d]/5 hover:text-[#c49c5d] transition-colors" type="button">Villa</button>
<button className="select-option w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-[#c49c5d]/5 hover:text-[#c49c5d] transition-colors" type="button">Appartement</button>
<button className="select-option w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-[#c49c5d]/5 hover:text-[#c49c5d] transition-colors" type="button">Riad</button>
</div>
</div>
</div>

<div className="relative custom-select">
<button className="select-btn w-full flex items-center justify-between border border-gray-200 bg-white text-sm rounded-full py-3.5 pl-5 pr-5 hover:border-gray-300 transition-all outline-none" type="button">
<span className="select-text text-gray-400">Rooms</span>
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="select-menu absolute top-full left-0 w-full mt-2 bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl overflow-hidden z-50 hidden opacity-0 transition-opacity">
<div className="flex flex-col py-2 max-h-56 overflow-y-auto custom-scrollbar">
<button className="select-option w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-[#c49c5d]/5 hover:text-[#c49c5d] transition-colors" type="button">1 - 3 Rooms</button>
<button className="select-option w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-[#c49c5d]/5 hover:text-[#c49c5d] transition-colors" type="button">4 - 6 Rooms</button>
<button className="select-option w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-[#c49c5d]/5 hover:text-[#c49c5d] transition-colors" type="button">7+ Rooms</button>
</div>
</div>
</div>
<div className="flex gap-4">

<div className="relative custom-select flex-1">
<button className="select-btn w-full flex items-center justify-between border border-gray-200 bg-white text-sm rounded-full py-3.5 pl-5 pr-5 hover:border-gray-300 transition-all outline-none" type="button">
<span className="select-text text-gray-400">Baths</span>
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="select-menu absolute top-full left-0 w-full mt-2 bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl overflow-hidden z-50 hidden opacity-0 transition-opacity">
<div className="flex flex-col py-2 max-h-56 overflow-y-auto custom-scrollbar">
<button className="select-option w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-[#c49c5d]/5 hover:text-[#c49c5d] transition-colors" type="button">1+</button>
<button className="select-option w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-[#c49c5d]/5 hover:text-[#c49c5d] transition-colors" type="button">2+</button>
<button className="select-option w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-[#c49c5d]/5 hover:text-[#c49c5d] transition-colors" type="button">3+</button>
</div>
</div>
</div>

<div className="relative custom-select flex-1">
<button className="select-btn w-full flex items-center justify-between border border-gray-200 bg-white text-sm rounded-full py-3.5 pl-5 pr-5 hover:border-gray-300 transition-all outline-none" type="button">
<span className="select-text text-gray-400">Beds</span>
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="select-menu absolute top-full left-0 w-full mt-2 bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl overflow-hidden z-50 hidden opacity-0 transition-opacity">
<div className="flex flex-col py-2 max-h-56 overflow-y-auto custom-scrollbar">
<button className="select-option w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-[#c49c5d]/5 hover:text-[#c49c5d] transition-colors" type="button">1+</button>
<button className="select-option w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-[#c49c5d]/5 hover:text-[#c49c5d] transition-colors" type="button">2+</button>
<button className="select-option w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-[#c49c5d]/5 hover:text-[#c49c5d] transition-colors" type="button">3+</button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8">
<div className="flex items-center text-sm mb-3">
<span className="text-gray-500 font-medium mr-1.5">Price:</span>
<span className="text-gray-800 font-semibold">$100 - $650,000</span>
</div>
<div className="relative h-1 bg-[#f9f6f0] rounded-full flex items-center">
<div className="absolute left-0 right-[40%] h-full bg-[#c49c5d] rounded-full"></div>
<div className="absolute left-0 w-3.5 h-3.5 bg-[#c49c5d] rounded-full shadow-sm -ml-1.5 cursor-pointer hover:scale-110 transition-transform"></div>
<div className="absolute right-[40%] w-3.5 h-3.5 bg-[#c49c5d] rounded-full shadow-sm -mr-1.5 cursor-pointer hover:scale-110 transition-transform"></div>
</div>
</div>

<div className="mt-8 flex flex-col">
<h3 className="text-gray-900 font-medium text-sm mb-4">Amenities</h3>
<div className="flex flex-col gap-4">
<label className="flex items-center gap-3.5 cursor-pointer group">
<div className="relative flex-shrink-0 w-4 h-4 border border-gray-200 rounded bg-white transition-colors group-hover:border-[#c49c5d]">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="absolute inset-0 bg-[#c49c5d] border border-[#c49c5d] rounded hidden peer-checked:flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:check-linear"></iconify-icon>
</div>
</div>
<span className="text-sm text-gray-600 group-hover:text-gray-900 select-none">Air Condition</span>
</label>
<label className="flex items-center gap-3.5 cursor-pointer group">
<div className="relative flex-shrink-0 w-4 h-4 border border-gray-200 rounded bg-white transition-colors group-hover:border-[#c49c5d]">
<input className="peer sr-only" type="checkbox"/>
<div className="absolute inset-0 bg-[#c49c5d] border border-[#c49c5d] rounded hidden peer-checked:flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:check-linear"></iconify-icon>
</div>
</div>
<span className="text-sm text-gray-600 group-hover:text-gray-900 select-none">Disabled Access</span>
</label>
<label className="flex items-center gap-3.5 cursor-pointer group">
<div className="relative flex-shrink-0 w-4 h-4 border border-gray-200 rounded bg-white transition-colors group-hover:border-[#c49c5d]">
<input className="peer sr-only" type="checkbox"/>
<div className="absolute inset-0 bg-[#c49c5d] border border-[#c49c5d] rounded hidden peer-checked:flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:check-linear"></iconify-icon>
</div>
</div>
<span className="text-sm text-gray-600 group-hover:text-gray-900 select-none">Ceiling Height</span>
</label>
<label className="flex items-center gap-3.5 cursor-pointer group">
<div className="relative flex-shrink-0 w-4 h-4 border border-gray-200 rounded bg-white transition-colors group-hover:border-[#c49c5d]">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="absolute inset-0 bg-[#c49c5d] border border-[#c49c5d] rounded hidden peer-checked:flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:check-linear"></iconify-icon>
</div>
</div>
<span className="text-sm text-gray-600 group-hover:text-gray-900 select-none">Floor</span>
</label>
<label className="flex items-center gap-3.5 cursor-pointer group">
<div className="relative flex-shrink-0 w-4 h-4 border border-gray-200 rounded bg-white transition-colors group-hover:border-[#c49c5d]">
<input className="peer sr-only" type="checkbox"/>
<div className="absolute inset-0 bg-[#c49c5d] border border-[#c49c5d] rounded hidden peer-checked:flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:check-linear"></iconify-icon>
</div>
</div>
<span className="text-sm text-gray-600 group-hover:text-gray-900 select-none">Heating</span>
</label>
<label className="flex items-center gap-3.5 cursor-pointer group">
<div className="relative flex-shrink-0 w-4 h-4 border border-gray-200 rounded bg-white transition-colors group-hover:border-[#c49c5d]">
<input className="peer sr-only" type="checkbox"/>
<div className="absolute inset-0 bg-[#c49c5d] border border-[#c49c5d] rounded hidden peer-checked:flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:check-linear"></iconify-icon>
</div>
</div>
<span className="text-sm text-gray-600 group-hover:text-gray-900 select-none">Cable TV</span>
</label>
<label className="flex items-center gap-3.5 cursor-pointer group">
<div className="relative flex-shrink-0 w-4 h-4 border border-gray-200 rounded bg-white transition-colors group-hover:border-[#c49c5d]">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="absolute inset-0 bg-[#c49c5d] border border-[#c49c5d] rounded hidden peer-checked:flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:check-linear"></iconify-icon>
</div>
</div>
<span className="text-sm text-gray-600 group-hover:text-gray-900 select-none">Elevator</span>
</label>
</div>
</div>
</div>

<div className="p-6 border-t border-gray-100 bg-gray-50/50 lg:rounded-b-2xl flex flex-col gap-3 shrink-0">
<button className="w-full py-3.5 bg-[#c49c5d] text-white text-sm font-medium rounded-xl shadow-sm hover:bg-[#b38a4d] active:scale-[0.98] transition-all" type="button">
                        Apply Filters
                    </button>
<button className="w-full py-3.5 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-50 active:scale-[0.98] transition-all" type="button">
                        Reset All
                    </button>
</div>
</div>

<div className="flex-1 w-full flex flex-col">

<div className="hidden lg:flex justify-between items-center mb-6">
<p className="text-sm text-gray-500">Affichage de <span className="font-medium text-gray-800">12</span> propriétés</p>

<div className="relative custom-select w-[220px] z-30">
<button className="select-btn w-full flex items-center justify-between border border-gray-200 bg-white text-sm rounded-xl py-2.5 pl-4 pr-4 hover:border-gray-300 transition-all outline-none" type="button">
<span className="select-text text-gray-700">Prix décroissant</span>
<iconify-icon className="text-gray-400" icon="solar:sort-vertical-linear"></iconify-icon>
</button>
<div className="select-menu absolute top-full right-0 w-full mt-2 bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl overflow-hidden hidden opacity-0 transition-opacity">
<div className="flex flex-col py-1">
<button className="select-option w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-[#c49c5d]/5 hover:text-[#c49c5d] transition-colors" type="button">Prix décroissant</button>
<button className="select-option w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-[#c49c5d]/5 hover:text-[#c49c5d] transition-colors" type="button">Prix croissant</button>
<button className="select-option w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-[#c49c5d]/5 hover:text-[#c49c5d] transition-colors" type="button">Plus récent</button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

<div className="group bg-white rounded-2xl shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-300 overflow-hidden flex flex-col cursor-pointer border border-gray-100/50">
<div className="relative h-[240px] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10 pointer-events-none"></div>

<div className="absolute top-4 right-4 z-20">
<div className="flex items-center justify-center text-white/90 bg-black/30 backdrop-blur-md p-2 rounded-md hover:bg-black/50 transition-colors">
<iconify-icon className="text-base" icon="solar:videocamera-linear"></iconify-icon>
</div>
</div>

<div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 text-white/90 text-sm font-medium">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
<span>Marrakech</span>
</div>

<div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 text-white/90 text-xs font-medium bg-black/30 backdrop-blur-md px-2.5 py-1.5 rounded-md">
<iconify-icon className="text-sm" icon="solar:camera-linear"></iconify-icon>
<span>37</span>
</div>
<img alt="Villa Jnane Fiestan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://apvillas.com/wp-content/uploads/2024/10/Fiestan-2-525x328.jpg"/>
</div>
<div className="p-6 flex flex-col flex-1">
<h4 className="text-xl tracking-tight font-medium text-gray-900 group-hover:text-[#c49c5d] transition-colors mb-2">
                                Villa Jnane Fiestan
                            </h4>
<div className="flex items-baseline gap-2 mb-3">
<span className="text-xs text-gray-400">À partir de</span>
<span className="text-lg font-semibold text-[#c49c5d]">10.000 €</span>
<span className="text-xs text-gray-400">/ nuit</span>
</div>
<p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-6">
                                Villas, Marrakech, et Célébrations, un Accord Parfait. Vous souhaitez organiser une célébration à Marrakech...
                            </p>
<div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between flex-wrap gap-y-3">
<div className="flex items-center gap-2 text-sm font-medium text-gray-700">
<iconify-icon className="text-gray-400 text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
<span>50</span>
</div>
<div className="flex items-center gap-2 text-sm font-medium text-gray-700">
<iconify-icon className="text-gray-400 text-lg" icon="solar:bed-linear"></iconify-icon>
<span>24</span>
</div>
<div className="flex items-center gap-2 text-sm font-medium text-gray-700">
<iconify-icon className="text-gray-400 text-lg" icon="solar:bath-linear"></iconify-icon>
<span>24</span>
</div>
<div className="flex items-center gap-2 text-sm font-medium text-gray-700">
<iconify-icon className="text-gray-400 text-lg" icon="solar:ruler-linear"></iconify-icon>
<span>3 200 m²</span>
</div>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-300 overflow-hidden flex flex-col cursor-pointer border border-gray-100/50">
<div className="relative h-[240px] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10 pointer-events-none"></div>

<div className="absolute top-4 right-4 z-20">
<div className="flex items-center justify-center text-white/90 bg-black/30 backdrop-blur-md p-2 rounded-md hover:bg-black/50 transition-colors">
<iconify-icon className="text-base" icon="solar:videocamera-linear"></iconify-icon>
</div>
</div>

<div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 text-white/90 text-sm font-medium">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
<span>Marrakech</span>
</div>

<div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 text-white/90 text-xs font-medium bg-black/30 backdrop-blur-md px-2.5 py-1.5 rounded-md">
<iconify-icon className="text-sm" icon="solar:camera-linear"></iconify-icon>
<span>177</span>
</div>
<img alt="Palace Andalous" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://apvillas.com/wp-content/uploads/2024/08/IMG_8179-HDR-525x328.webp"/>
</div>
<div className="p-6 flex flex-col flex-1">
<h4 className="text-xl tracking-tight font-medium text-gray-900 group-hover:text-[#c49c5d] transition-colors mb-2">
                                Palace Andalous
                            </h4>
<div className="flex items-baseline gap-2 mb-3">
<span className="text-xs text-gray-400">À partir de</span>
<span className="text-lg font-semibold text-[#c49c5d]">10.000 €</span>
<span className="text-xs text-gray-400">/ nuit</span>
</div>
<p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-6">
                                Bienvenue au Palace Andalous, le summum du luxe pour des escapades privées inoubliables. Niché au coeur...
                            </p>
<div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between flex-wrap gap-y-3">
<div className="flex items-center gap-2 text-sm font-medium text-gray-700">
<iconify-icon className="text-gray-400 text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
<span>20</span>
</div>
<div className="flex items-center gap-2 text-sm font-medium text-gray-700">
<iconify-icon className="text-gray-400 text-lg" icon="solar:bed-linear"></iconify-icon>
<span>10</span>
</div>
<div className="flex items-center gap-2 text-sm font-medium text-gray-700">
<iconify-icon className="text-gray-400 text-lg" icon="solar:bath-linear"></iconify-icon>
<span>10</span>
</div>
<div className="flex items-center gap-2 text-sm font-medium text-gray-700">
<iconify-icon className="text-gray-400 text-lg" icon="solar:ruler-linear"></iconify-icon>
<span>8 000 m²</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-12 flex justify-center items-center gap-2">
<span className="w-9 h-9 flex items-center justify-center rounded-full bg-[#c49c5d] text-white text-sm font-medium cursor-default shadow-sm shadow-[#c49c5d]/30">1</span>
<a className="w-9 h-9 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900 text-sm font-medium transition-colors" href="#">2</a>
<a className="w-9 h-9 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900 text-sm font-medium transition-colors" href="#">3</a>
<span className="w-9 h-9 flex items-center justify-center text-gray-400">...</span>
<a className="w-9 h-9 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-base" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>



    </>
  );
}
