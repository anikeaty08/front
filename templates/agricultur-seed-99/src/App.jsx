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



        function switchView(viewId) {
            // Hide all views
            const views = document.querySelectorAll('.view-section');
            views.forEach(view => {
                view.classList.add('hidden');
            });

            // Show selected view
            const selectedView = document.getElementById(viewId);
            if (selectedView) {
                selectedView.classList.remove('hidden');
                window.scrollTo(0, 0);
            }

            // Adjust nav for portal view
            const nav = document.querySelector('nav');
            if (viewId === 'adv-portal') {
                nav.classList.add('hidden');
            } else {
                nav.classList.remove('hidden');
            }
        }

        function addToCart() {
            // Simple visual feedback
            const btn = event.target;
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Added';
            btn.classList.add('bg-emerald-700', 'text-white');
            if(btn.classList.contains('bg-white')) btn.classList.remove('bg-white', 'text-stone-700', 'border');
            
            // Update cart indicator
            const dot = document.querySelector('.relative span.bg-emerald-500');
            dot.classList.add('animate-ping');
            setTimeout(() => dot.classList.remove('animate-ping'), 1000);

            setTimeout(() => {
                btn.innerHTML = originalText;
                // Reset styles if needed, but for demo we leave it
            }, 2000);
        }
    
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-8">
<a className="block" href="#" onclick="switchView('home')">
<img alt="RAGT Semences" className="h-10 w-auto" src="https://i.imgur.com/8QGjG5K.png"/>
</a>

<div className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-500">
<a className="hover:text-emerald-700 transition-colors" href="#">Varieties</a>
<a className="hover:text-emerald-700 transition-colors" href="#">Innovations</a>
<a className="hover:text-emerald-700 transition-colors" href="#">News</a>
<a className="hover:text-emerald-700 transition-colors flex items-center gap-1" href="#">
                        Prospera 
                        <span className="bg-emerald-100 text-emerald-700 text-[10px] px-1.5 py-0.5 rounded-full">Tools</span>
</a>
</div>
</div>

<div className="flex items-center gap-5">

<a className="hidden lg:block text-xs text-stone-400 hover:text-stone-600" href="#">RAGT Group</a>

<div className="flex items-center gap-2 text-xs font-medium bg-stone-100 rounded-full p-1 border border-stone-200">
<button className="px-2 py-0.5 bg-white shadow-sm rounded-full text-stone-800">EN</button>
<button className="px-2 py-0.5 text-stone-400 hover:text-stone-600">FR</button>
</div>

<button className="hidden md:flex items-center gap-1.5 text-xs font-medium text-emerald-700 hover:bg-emerald-50 px-3 py-1.5 rounded-md transition-colors border border-transparent hover:border-emerald-200" onclick="switchView('adv-portal')">
<iconify-icon icon="solar:shield-user-linear" width="16"></iconify-icon>
                    ADV Portal
                </button>
<div className="h-4 w-px bg-stone-200"></div>

<div className="flex items-center gap-4">
<button className="flex items-center gap-1 text-sm font-medium text-stone-600 hover:text-stone-900">
                        Log in
                    </button>
<button className="relative text-stone-600 hover:text-emerald-700" onclick="switchView('cart')">
<iconify-icon icon="solar:cart-large-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 h-2 w-2 bg-emerald-500 rounded-full ring-2 ring-white"></span>
</button>
</div>
</div>
</div>
</nav>

<main className="pt-16 min-h-screen" id="main-content">

<div className="view-section" id="home">

<section className="relative bg-stone-100 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-stone-200/50 to-transparent"></div>

<div className="absolute right-0 top-0 w-1/2 h-full opacity-10" style={{backgroundImage: 'radial-gradient(#064e3b 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-medium mb-6">
<iconify-icon icon="solar:leaf-linear"></iconify-icon>
                            New Season 2024
                        </div>
<h1 className="text-4xl md:text-6xl font-semibold text-stone-900 tracking-tight leading-[1.1] mb-6">
                            You are not alone to <br/>
<span className="text-emerald-800">choose your seeds.</span>
</h1>
<p className="text-lg text-stone-600 leading-relaxed max-w-lg mb-10">
                            Combining agronomic expertise, human proximity, and advanced decision support tools to secure your yields in Belgium.
                        </p>
<div className="flex flex-wrap gap-4">
<button className="flex items-center gap-2 bg-stone-900 text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-stone-800 transition-all shadow-sm" onclick="switchView('maize-product')">
                                Explore Maize Varieties
                                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="flex items-center gap-2 bg-white text-stone-700 border border-stone-200 px-5 py-3 rounded-lg text-sm font-medium hover:bg-stone-50 transition-all" onclick="switchView('sugar-beet')">
                                Explore Sugar Beet
                            </button>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
<div className="bg-white rounded-xl shadow-lg border border-stone-100 p-1 flex flex-col md:flex-row">
<div className="flex-1 p-8 border-b md:border-b-0 md:border-r border-stone-100">
<div className="flex items-start gap-4">
<div className="h-10 w-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Need guidance?</h3>
<p className="text-sm text-stone-500 mt-1 mb-4">Our digital agronomic assistant helps you filter varieties based on your soil type and sowing date.</p>
<button className="text-sm font-medium text-emerald-700 hover:text-emerald-800 flex items-center gap-1">
                                    Start questionnaire <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="flex-1 p-8">
<div className="flex items-start gap-4">
<div className="h-10 w-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:user-speak-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Talk to an expert</h3>
<p className="text-sm text-stone-500 mt-1 mb-4">Your local RAGT technician in Belgium is ready to visit your farm.</p>
<button className="text-sm font-medium text-stone-900 hover:text-stone-700 flex items-center gap-1">
                                    Find my advisor <iconify-icon icon="solar:map-point-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="group cursor-pointer" onclick="switchView('maize-product')">
<div className="aspect-[4/3] bg-stone-200 rounded-xl overflow-hidden relative mb-4">

<div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<span className="text-xs font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded border border-white/30">Advisory Flow</span>
<h2 className="text-2xl font-semibold tracking-tight mt-2">Maize</h2>
</div>
</div>
<p className="text-stone-500 text-sm leading-relaxed mb-2">High yield potential varieties adapted to Belgian climate conditions. Focus on digestibility and starch content.</p>
<span className="text-sm font-medium text-emerald-700 group-hover:underline decoration-emerald-700/30 underline-offset-4">Browse Maize catalog</span>
</div>

<div className="group cursor-pointer" onclick="switchView('sugar-beet')">
<div className="aspect-[4/3] bg-stone-300 rounded-xl overflow-hidden relative mb-4">

<div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<span className="text-xs font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded border border-white/30">Transactional Flow</span>
<h2 className="text-2xl font-semibold tracking-tight mt-2">Sugar Beet</h2>
</div>
</div>
<p className="text-stone-500 text-sm leading-relaxed mb-2">Rhizomania and Nematode tolerant varieties. Direct ordering available with transparent pricing.</p>
<span className="text-sm font-medium text-emerald-700 group-hover:underline decoration-emerald-700/30 underline-offset-4">Browse Sugar Beet catalog</span>
</div>
</div>
</section>
</div>

<div className="view-section hidden" id="sugar-beet">
<div className="bg-white border-b border-stone-200">
<div className="max-w-7xl mx-auto px-6 py-8">
<div className="flex items-center gap-2 text-xs text-stone-500 mb-4">
<button className="hover:text-stone-900" onclick="switchView('home')">Home</button>
<span>/</span>
<span className="text-stone-900">Sugar Beet</span>
</div>
<div className="flex justify-between items-end">
<div>
<h1 className="text-3xl font-semibold text-stone-900 tracking-tight">Sugar Beet Seeds</h1>
<p className="text-sm text-stone-500 mt-2">Select quantities and order online. No immediate payment required.</p>
</div>
<div className="hidden md:flex gap-3">
<button className="px-3 py-1.5 text-xs font-medium border border-stone-200 rounded-md hover:bg-stone-50">Filter by Tolerance</button>
<button className="px-3 py-1.5 text-xs font-medium border border-stone-200 rounded-md hover:bg-stone-50">Sort by Yield</button>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 py-12">

<div className="flex flex-col gap-4">

<div className="bg-white rounded-lg border border-stone-200 p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
<div className="h-16 w-16 bg-stone-100 rounded-md flex items-center justify-center text-stone-400 shrink-0">
<iconify-icon icon="solar:leaf-linear" width="32"></iconify-icon>
</div>
<div className="flex-1 w-full">
<div className="flex items-center gap-3 mb-1">
<h3 className="text-lg font-semibold text-stone-900">RGT ANGUS</h3>
<span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-medium rounded-full border border-emerald-100">High Sugar Content</span>
</div>
<div className="flex flex-wrap gap-4 text-xs text-stone-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> Rhizomania Tolerant</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Delivery: 5-7 Days</span>
</div>
</div>
<div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
<div className="text-right">
<div className="text-lg font-medium text-stone-900">€185.00</div>
<div className="text-xs text-stone-400">per unit (100k seeds)</div>
</div>
<div className="flex items-center gap-3">
<input className="w-16 p-2 text-sm text-center border border-stone-200 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500" min="1" type="number" value="1"/>
<button className="bg-stone-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-stone-800" onclick="addToCart()">Add</button>
</div>
</div>
</div>

<div className="bg-white rounded-lg border border-stone-200 p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
<div className="h-16 w-16 bg-stone-100 rounded-md flex items-center justify-center text-stone-400 shrink-0">
<iconify-icon icon="solar:leaf-bold" width="32"></iconify-icon>
</div>
<div className="flex-1 w-full">
<div className="flex items-center gap-3 mb-1">
<h3 className="text-lg font-semibold text-stone-900">RGT BOREAL</h3>
<span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-medium rounded-full border border-blue-100">Nematode Tolerant</span>
</div>
<div className="flex flex-wrap gap-4 text-xs text-stone-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> Cercospora Tolerant</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Delivery: In Stock</span>
</div>
</div>
<div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
<div className="text-right">
<div className="text-lg font-medium text-stone-900">€210.00</div>
<div className="text-xs text-stone-400">per unit</div>
</div>
<div className="flex items-center gap-3">
<input className="w-16 p-2 text-sm text-center border border-stone-200 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500" min="1" type="number" value="10"/>
<button className="bg-stone-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-stone-800" onclick="addToCart()">Add</button>
</div>
</div>
</div>
</div>

<div className="mt-12 bg-stone-100 rounded-lg p-6 flex items-center justify-between border border-stone-200">
<div>
<h4 className="font-medium text-stone-900">Not sure which variety to choose?</h4>
<p className="text-sm text-stone-500 mt-1">Our AI assistant can analyze your plot history.</p>
</div>
<button className="text-sm font-medium text-emerald-700 hover:text-emerald-800 bg-white px-4 py-2 rounded border border-emerald-100 shadow-sm">
                        Open Decision Tool
                    </button>
</div>
</div>
</div>

<div className="view-section hidden" id="maize-product">

<div className="max-w-7xl mx-auto px-6 py-6">
<div className="flex items-center gap-2 text-xs text-stone-500">
<button className="hover:text-stone-900" onclick="switchView('home')">Home</button>
<span>/</span>
<span className="hover:text-stone-900 cursor-pointer">Maize</span>
<span>/</span>
<span className="text-stone-900">RGT EXXON</span>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pb-24">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-7 space-y-8">
<div className="aspect-video bg-stone-200 rounded-xl overflow-hidden relative">

<div className="absolute inset-0 flex items-center justify-center text-stone-400">
<iconify-icon icon="solar:gallery-wide-linear" width="48"></iconify-icon>
</div>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-medium text-emerald-800 border border-emerald-100">
                                 Very Early
                             </div>
</div>

<div>
<h2 className="text-lg font-semibold text-stone-900 mb-4">Agronomic Profile</h2>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
<div className="p-4 bg-white border border-stone-100 rounded-lg shadow-sm">
<div className="text-xs text-stone-400 mb-1">Vigor</div>
<div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-4/5"></div>
</div>
<div className="text-right text-xs font-medium mt-1">8/10</div>
</div>
<div className="p-4 bg-white border border-stone-100 rounded-lg shadow-sm">
<div className="text-xs text-stone-400 mb-1">Starch</div>
<div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[95%]"></div>
</div>
<div className="text-right text-xs font-medium mt-1">9.5/10</div>
</div>
<div className="p-4 bg-white border border-stone-100 rounded-lg shadow-sm">
<div className="text-xs text-stone-400 mb-1">Cold Tolerance</div>
<div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-3/4"></div>
</div>
<div className="text-right text-xs font-medium mt-1">7.5/10</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="sticky top-24">
<h1 className="text-3xl font-semibold text-stone-900 tracking-tight">RGT EXXON</h1>
<p className="text-lg text-stone-500 mt-2 font-light">Maize for Silage. Massive energy value.</p>

<div className="mt-6 mb-8 flex items-start gap-3 p-4 bg-amber-50 rounded-lg border border-amber-100 text-amber-900">
<iconify-icon className="shrink-0 mt-0.5" icon="solar:info-circle-linear" width="18"></iconify-icon>
<div className="text-sm">
<p className="font-medium">Maize is a strategic choice.</p>
<p className="opacity-80 mt-1">Prices are not displayed. We help you decide based on your specific context.</p>
</div>
</div>

<div className="space-y-3">

<button className="w-full group flex items-center justify-between p-4 bg-white border border-stone-200 rounded-xl hover:border-emerald-300 hover:shadow-md transition-all text-left">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-stone-100 overflow-hidden shrink-0 border border-stone-200">

<iconify-icon className="text-stone-300 w-full h-full p-2" icon="solar:user-bold"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-stone-900 group-hover:text-emerald-700">Need expert advice?</div>
<div className="text-xs text-stone-500">Talk to Marc, your regional expert</div>
</div>
</div>
<div className="h-8 w-8 rounded-full bg-stone-50 text-stone-400 flex items-center justify-center group-hover:bg-emerald-50 group-hover:text-emerald-600">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
</div>
</button>

<button className="w-full group flex items-center justify-between p-4 bg-stone-900 text-white rounded-xl hover:bg-stone-800 transition-all text-left shadow-sm" onclick="addToCart(); switchView('cart')">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:file-text-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold">Request a Quote</div>
<div className="text-xs text-white/60">Sent to ADV for validation</div>
</div>
</div>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>

<button className="w-full group flex items-center justify-between p-4 bg-white border border-stone-200 rounded-xl hover:bg-stone-50 transition-all text-left">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-stone-50 flex items-center justify-center shrink-0 text-stone-500">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-stone-900">Find a partner near me</div>
<div className="text-xs text-stone-500">Locate a distributor</div>
</div>
</div>
</button>
</div>

<div className="mt-8 pt-8 border-t border-stone-200">
<h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3">Prospera Tools</h3>
<a className="block p-3 rounded-lg bg-stone-50 border border-stone-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-colors" href="#">
<div className="flex items-center gap-2 text-sm font-medium text-stone-800">
<iconify-icon className="text-emerald-600" icon="solar:graph-up-linear"></iconify-icon>
                                        Sowing Density Calculator
                                    </div>
<p className="text-xs text-stone-500 mt-1 pl-6">Calculate optimal seeds per hectare for RGT Exxon.</p>
</a>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="view-section hidden" id="cart">
<div className="max-w-3xl mx-auto px-6 py-12">
<h1 className="text-2xl font-semibold text-stone-900 mb-8">Your Selection</h1>
<div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden mb-8">

<div className="p-6 border-b border-stone-100 flex gap-4 items-start">
<div className="h-16 w-16 bg-stone-100 rounded-lg shrink-0 flex items-center justify-center text-stone-400">
<iconify-icon icon="solar:leaf-bold"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-stone-900">RGT ANGUS</h3>
<p className="text-xs text-stone-500">Sugar Beet • 5 Units</p>
</div>
<div className="text-right">
<div className="font-medium text-stone-900">€925.00</div>
</div>
</div>
</div>
</div>

<div className="p-6 flex gap-4 items-start bg-stone-50/50">
<div className="h-16 w-16 bg-stone-100 rounded-lg shrink-0 flex items-center justify-center text-stone-400">
<iconify-icon icon="solar:gallery-wide-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-stone-900">RGT EXXON</h3>
<p className="text-xs text-stone-500">Maize • 20 Units</p>
<div className="inline-block mt-2 px-2 py-0.5 bg-amber-100 text-amber-800 text-[10px] rounded font-medium">Quote Request</div>
</div>
<div className="text-right">
<div className="text-sm text-stone-400 italic">Price on request</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-stone-200 shadow-sm p-8">
<h2 className="text-lg font-semibold text-stone-900 mb-6">Finalize Request</h2>
<form className="space-y-5" onsubmit="event.preventDefault(); alert('Order sent to ADV!');">
<div className="grid grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-stone-700 mb-1.5">First Name</label>
<input className="w-full px-3 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-stone-700 mb-1.5">Last Name</label>
<input className="w-full px-3 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-stone-700 mb-1.5">Email Professional</label>
<input className="w-full px-3 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-stone-700 mb-1.5">RAGT Customer ID (Optional)</label>
<input className="w-full px-3 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="e.g. BE-12345" type="text"/>
</div>
<div className="pt-4 flex flex-col md:flex-row gap-4">
<button className="flex-1 py-3 px-4 border border-stone-200 text-stone-700 font-medium rounded-lg hover:bg-stone-50 text-sm transition-colors" type="button">
                                I have a specific request (Contact)
                            </button>
<button className="flex-1 py-3 px-4 bg-emerald-700 text-white font-medium rounded-lg hover:bg-emerald-800 text-sm shadow-sm transition-colors flex justify-center items-center gap-2" type="submit">
                                Place Order / Request Quote
                                <iconify-icon icon="solar:check-circle-linear"></iconify-icon>
</button>
</div>
<p className="text-center text-xs text-stone-400 mt-2">No payment required now. Order is sent to ADV team.</p>
</form>
</div>
</div>
</div>

<div className="view-section hidden bg-stone-100 min-h-screen pb-12" id="adv-portal">

<div className="bg-stone-900 text-white px-6 py-4 shadow-md">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="font-bold tracking-widest text-lg">RAGT <span className="text-emerald-400 font-normal">ADV</span></div>
<span className="px-2 py-0.5 bg-stone-800 rounded text-xs text-stone-400 border border-stone-700">Internal Use Only</span>
</div>
<button className="text-xs text-stone-400 hover:text-white flex items-center gap-1" onclick="switchView('home')">
<iconify-icon icon="solar:logout-linear"></iconify-icon> Exit Portal
                    </button>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 py-8">
<div className="flex gap-6">

<div className="w-64 shrink-0 space-y-2">
<button className="w-full text-left px-4 py-2 rounded-md bg-white text-emerald-800 font-medium text-sm shadow-sm border-l-4 border-emerald-600">New Order Entry</button>
<button className="w-full text-left px-4 py-2 rounded-md text-stone-600 hover:bg-white hover:text-stone-900 text-sm transition-colors">Client Database</button>
<button className="w-full text-left px-4 py-2 rounded-md text-stone-600 hover:bg-white hover:text-stone-900 text-sm transition-colors">Stock Levels</button>
</div>

<div className="flex-1 bg-white rounded-lg shadow-sm border border-stone-200 p-6">
<h2 className="text-lg font-semibold text-stone-900 mb-6 flex items-center gap-2">
<iconify-icon icon="solar:cart-large-linear"></iconify-icon>
                            Order Entry
                        </h2>
<div className="grid grid-cols-3 gap-6 mb-6">
<div className="col-span-2">
<label className="block text-xs font-medium text-stone-500 uppercase tracking-wide mb-1">Customer Search</label>
<div className="relative">
<input className="w-full pl-9 pr-4 py-2 border border-stone-200 rounded bg-stone-50 text-sm focus:bg-white focus:ring-1 focus:ring-emerald-500 focus:outline-none" placeholder="Search by name, ID or VAT..." type="text"/>
<iconify-icon className="absolute left-3 top-2.5 text-stone-400" icon="solar:magnifer-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-medium text-stone-500 uppercase tracking-wide mb-1">Date</label>
<input className="w-full px-3 py-2 border border-stone-200 rounded bg-stone-50 text-sm" type="date"/>
</div>
</div>

<div className="border rounded-md border-stone-200 overflow-hidden mb-6">
<table className="w-full text-sm text-left">
<thead className="bg-stone-50 text-stone-500 font-medium">
<tr>
<th className="px-4 py-2 border-b border-stone-200 w-12">#</th>
<th className="px-4 py-2 border-b border-stone-200">Species</th>
<th className="px-4 py-2 border-b border-stone-200">Variety</th>
<th className="px-4 py-2 border-b border-stone-200 w-24">Qty</th>
<th className="px-4 py-2 border-b border-stone-200 w-32">Treatment</th>
<th className="px-4 py-2 border-b border-stone-200 w-10"></th>
</tr>
</thead>
<tbody className="text-stone-700">
<tr>
<td className="px-4 py-2 border-b border-stone-100">1</td>
<td className="px-4 py-2 border-b border-stone-100">
<select className="w-full bg-transparent p-1 focus:outline-none"><option>Maize</option><option>Sugar Beet</option></select>
</td>
<td className="px-4 py-2 border-b border-stone-100">
<select className="w-full bg-transparent p-1 focus:outline-none"><option>RGT EXXON</option></select>
</td>
<td className="px-4 py-2 border-b border-stone-100">
<input className="w-full bg-stone-50 border border-stone-200 rounded px-2 py-1" type="number" value="50"/>
</td>
<td className="px-4 py-2 border-b border-stone-100">Standard</td>
<td className="px-4 py-2 border-b border-stone-100 text-center text-red-400 hover:text-red-600 cursor-pointer">
<iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
</td>
</tr>
<tr className="bg-stone-50/50">
<td className="px-4 py-2 border-b border-stone-100">2</td>
<td className="px-4 py-2 border-b border-stone-100 opacity-50">Select...</td>
<td className="px-4 py-2 border-b border-stone-100"></td>
<td className="px-4 py-2 border-b border-stone-100"></td>
<td className="px-4 py-2 border-b border-stone-100"></td>
<td className="px-4 py-2 border-b border-stone-100"></td>
</tr>
</tbody>
</table>
<div className="bg-stone-50 px-4 py-2 text-xs text-stone-500 border-t border-stone-200 cursor-pointer hover:text-stone-700">
                                + Add Row
                            </div>
</div>
<div className="flex justify-end gap-3">
<button className="px-4 py-2 border border-stone-200 rounded text-stone-600 text-sm font-medium hover:bg-stone-50">Save Draft</button>
<button className="px-4 py-2 bg-emerald-700 text-white rounded text-sm font-medium hover:bg-emerald-800 shadow-sm">Submit Order to ERP</button>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-stone-50 border-t border-stone-200 py-12 text-sm">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
<div className="space-y-4">
<img alt="RAGT Semences" className="h-10 w-auto" src="https://i.imgur.com/8QGjG5K.png"/>
<p className="text-stone-500 max-w-xs">Another way of seeing agriculture. <br/>Rooted in science, close to the earth.</p>
</div>
<div className="flex gap-12 text-stone-600">
<div className="flex flex-col gap-2">
<span className="font-medium text-stone-900 mb-2">Species</span>
<a className="hover:text-emerald-700" href="#" onclick="switchView('maize-product')">Maize</a>
<a className="hover:text-emerald-700" href="#" onclick="switchView('sugar-beet')">Sugar Beet</a>
<span className="text-stone-300">Cereals (Coming soon)</span>
</div>
<div className="flex flex-col gap-2">
<span className="font-medium text-stone-900 mb-2">Support</span>
<a className="hover:text-emerald-700" href="#">Contact Us</a>
<a className="hover:text-emerald-700" href="#">Find a Partner</a>
<a className="hover:text-emerald-700" href="#">Prospera Tools</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-stone-200 text-xs text-stone-400 flex justify-between">
<span>© 2024 RAGT Semences. All rights reserved.</span>
<div className="flex gap-4">
<a href="#">Privacy</a>
<a href="#">Terms</a>
</div>
</div>
</footer>



    </>
  );
}
