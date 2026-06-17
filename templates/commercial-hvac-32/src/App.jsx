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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



/* DATA */
const products = [
  {id:1, cat:'VRF Systems', emoji:'🏢', name:'VRF Series 5 – 14 HP', model:'AF-VRF5-14HP', desc:'Multi-split VRF system with R-32 refrigerant, ideal for open-plan offices and mid-size commercial spaces. ISEER rating 5.2.', badge:'New', highlights:[{val:'14 HP',key:'Capacity'}]},
  {id:2, cat:'VRF Systems', emoji:'🏢', name:'VRF Series 5 – 20 HP', model:'AF-VRF5-20HP', desc:'High-capacity VRF system for large commercial floors and mixed-use buildings. Supports up to 12 indoor units simultaneously.', badge:'New', highlights:[{val:'20 HP',key:'Capacity'}]},
  {id:3, cat:'Chillers', emoji:'🧊', name:'Air-Cooled Chiller', model:'AF-CH-200T', desc:'Air-cooled screw chiller for medium to large commercial buildings. Variable speed compressor for part-load efficiency optimisation.', badge:null, highlights:[{val:'200 TR',key:'Capacity'}]},
  {id:4, cat:'Chillers', emoji:'🧊', name:'Water-Cooled Chiller', model:'AF-CH-300T', desc:'Water-cooled centrifugal chiller for large facilities requiring high cooling loads with exceptional COP performance.', badge:null, highlights:[{val:'300 TR',key:'Capacity'}]},
  {id:5, cat:'AHU', emoji:'💨', name:'High-Efficiency AHU', model:'AF-AH-600S', desc:'High-efficiency central AHU with EC fan motor, HEPA filtration, heat recovery wheel, and BACnet control interface.', badge:null, highlights:[{val:'6000 CFM',key:'Airflow'}]},
  {id:6, cat:'AHU', emoji:'💨', name:'Compact VAV AHU', model:'AF-AH-400S', desc:'Compact AHU for medium commercial applications with variable air volume capability and integrated humidity control.', badge:null, highlights:[{val:'4000 CFM',key:'Airflow'}]},
  {id:7, cat:'Split AC', emoji:'🌬️', name:'Cassette AC 4-Way', model:'AF-CS-18S', desc:'4-way blow cassette AC unit for individual rooms and server rooms. Inverter compressor for precise temperature control.', badge:null, highlights:[{val:'1.5 TR',key:'Capacity'}]},
  {id:9, cat:'Ventilation', emoji:'🔄', name:'Energy Recovery Vent', model:'AF-ERV-2000', desc:'High-efficiency ERV for fresh air supply with heat and humidity recovery. Reduces the HVAC load from ventilation by up to 70%.', badge:null, highlights:[{val:'2000 CFM',key:'Airflow'}]},
];

/* NAVIGATION LOGIC */
function showPage(page) {
    document.querySelectorAll('.page-section').forEach(p => p.classList.add('hidden'));
    const target = document.getElementById('page-' + page);
    if(target) target.classList.remove('hidden');
    
    document.querySelectorAll('.nav-link').forEach(l => {
        l.classList.remove('text-blue-600', 'bg-blue-50');
        l.classList.add('text-slate-600');
    });
    const nav = document.getElementById('nav-' + page);
    if (nav) {
        nav.classList.remove('text-slate-600');
        nav.classList.add('text-blue-600', 'bg-blue-50');
    }
    
    window.scrollTo({top:0, behavior:'smooth'});
    if (page === 'products') renderProducts();
}

function showLoginPage() {
    addToast('Staff login portal restricted in this view.', 'solar:lock-keyhole-linear');
}

/* RENDERING */
function renderProductCards(list, gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    
    grid.innerHTML = list.map(p => `
        <div class="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-300">
            <div class="aspect-[4/3] bg-slate-50 flex items-center justify-center relative overflow-hidden">
                <span class="text-6xl group-hover:scale-110 transition-transform duration-500">${p.emoji}</span>
                <div class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">${p.cat}</div>
                ${p.badge ? `<div class="absolute top-3 right-3 bg-blue-600 text-white text-[0.65rem] font-bold uppercase tracking-widest px-2 py-1 rounded shadow-sm">${p.badge}</div>` : ''}
            </div>
            
            <div class="p-5 flex flex-col flex-grow">
                <h4 class="text-lg font-semibold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1" title="${p.name}">${p.name}</h4>
                <div class="text-xs text-slate-400 font-medium mt-2 uppercase tracking-wider">${p.model}</div>
                
                <div class="text-sm text-slate-600 mt-3 border-l-2 border-blue-500 pl-3 py-0.5">
                    ${p.highlights[0]?.key || 'Spec'}: <span class="font-medium text-slate-900">${p.highlights[0]?.val || 'N/A'}</span>
                </div>
                
                <div class="text-base font-semibold text-slate-900 mt-4">Pricing by Quotation</div>
                
                <div class="mt-4 flex flex-col gap-2">
                    <div class="grid grid-cols-2 gap-2">
                        <button onclick="addToast('Opening details for ${p.model}', 'solar:info-circle-linear')" class="text-xs font-medium bg-slate-50 hover:bg-slate-100 text-slate-700 py-2.5 rounded-lg transition-colors border border-slate-200 text-center flex items-center justify-center gap-1.5"><iconify-icon icon="solar:eye-linear"></iconify-icon> View Details</button>
                        <button onclick="addToast('Added ${p.model} to quote list', 'solar:cart-large-minimalistic-linear')" class="text-xs font-medium bg-white hover:bg-slate-50 text-slate-700 py-2.5 rounded-lg transition-colors border border-slate-200 text-center flex items-center justify-center gap-1.5"><iconify-icon icon="solar:cart-plus-linear"></iconify-icon> Add to Cart</button>
                    </div>
                    <button onclick="showPage('quote')" class="text-xs font-medium bg-[#0A1628] hover:bg-blue-900 text-white py-2.5 rounded-lg transition-colors text-center w-full shadow-sm flex items-center justify-center gap-1.5"><iconify-icon icon="solar:document-text-linear"></iconify-icon> Request Quote</button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderProducts() {
    const filters = [...document.querySelectorAll('#categoryFilters input:checked')].map(i => i.value);
    const list = filters.length ? products.filter(p => filters.includes(p.cat)) : products;
    
    const countEl = document.getElementById('productCount');
    if(countEl) countEl.textContent = list.length;
    
    renderProductCards(list, 'productsGrid');
}

function filterProductsBy(cat) {
    [...document.querySelectorAll('#categoryFilters input')].forEach(i => i.checked = (i.value === cat));
    renderProducts();
}

function applyFilters() { 
    renderProducts(); 
}

function openAMCQuote(plan) {
    addToast(`Redirecting to quote request for ${plan}...`, 'solar:document-add-linear');
    setTimeout(() => showPage('quote'), 800);
}

/* UI UTILS */
function addToast(msg, iconStr) {
    const container = document.getElementById('toastContainer');
    const t = document.createElement('div');
    t.className = 'flex items-center gap-3 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl text-sm font-medium transform transition-all duration-300 translate-y-4 opacity-0 border border-slate-700';
    t.innerHTML = `<iconify-icon icon="${iconStr}" class="text-lg text-teal-400"></iconify-icon><span>${msg}</span>`;
    container.appendChild(t);
    
    requestAnimationFrame(() => {
        t.classList.remove('translate-y-4', 'opacity-0');
        t.classList.add('translate-y-0', 'opacity-100');
    });
    
    setTimeout(() => {
        t.classList.remove('translate-y-0', 'opacity-100');
        t.classList.add('translate-y-4', 'opacity-0');
        setTimeout(() => t.remove(), 300);
    }, 3000);
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    renderProductCards(products.slice(0,4), 'homeFeaturedProducts');
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
      

<div id="public-area">

<div className="bg-gradient-to-r from-blue-700 to-teal-600 text-center py-2.5 px-6 text-xs font-medium text-white tracking-wide">
<span className="inline-flex items-center gap-2">
<iconify-icon className="text-sm" icon="solar:bell-bing-linear"></iconify-icon>
            New: ArcticFlow VRF Series 5 — Available for project quotation.
            <button className="underline decoration-white/50 hover:decoration-white transition-colors ml-1" onclick="showPage('products')">Explore Now</button>
</span>
</div>

<header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 transition-all">
<div className="bg-[#0A1628] py-2 text-[0.65rem] text-slate-400">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<div className="flex items-center gap-4 hidden md:flex">
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Mumbai, India</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:letter-linear"></iconify-icon> sales@arcticflow.in</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:phone-calling-linear"></iconify-icon> +91 22 4000 8888</span>
</div>
<div className="flex gap-4">
<button className="hover:text-white transition-colors" onclick="showPage('about')">About Us</button>
<button className="hover:text-white transition-colors" onclick="showPage('contact')">Contact</button>
<button className="hover:text-white transition-colors text-slate-500" onclick="showLoginPage()">Staff Login</button>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
<div className="flex items-center gap-3 cursor-pointer group shrink-0" onclick="showPage('home')">
<div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-500 rounded-xl flex items-center justify-center text-white shadow-md group-hover:shadow-lg transition-all">
<iconify-icon className="text-xl" icon="solar:air-conditioner-linear"></iconify-icon>
</div>
<div>
<strong className="block text-lg font-semibold tracking-tight text-[#0A1628] leading-none">ArcticFlow</strong>
<span className="text-[0.65rem] text-slate-500 font-medium tracking-widest uppercase">HVAC Systems</span>
</div>
</div>
<nav className="hidden lg:flex items-center gap-1">
<button className="nav-link px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" id="nav-home" onclick="showPage('home')">Home</button>
<button className="nav-link px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" id="nav-products" onclick="showPage('products')">Products</button>
<button className="nav-link px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" id="nav-services" onclick="showPage('services')">Services</button>
<button className="nav-link px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" id="nav-amc" onclick="showPage('amc')">AMC Plans</button>
</nav>
<div className="flex items-center shrink-0">
<button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 px-5 rounded-lg transition-all shadow-sm shadow-blue-600/20 flex items-center gap-2" onclick="showPage('quote')">
<iconify-icon icon="solar:document-text-linear"></iconify-icon> Request Quote
                </button>
</div>
</div>
</header>

<div className="page-section" id="page-home">

<section className="py-24 lg:py-32 bg-[#0A1628] relative overflow-hidden flex items-center min-h-[600px]">
<div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0F2444] to-[#1A3A6B]"></div>
<div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(20,184,166,0.1),_transparent_50%)]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center w-full">
<div>
<span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-teal-400 uppercase bg-teal-400/10 border border-teal-400/20 px-3.5 py-1.5 rounded-full mb-8">
<span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse"></span> Trusted by 500+ Enterprises
                    </span>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
                        Commercial <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">HVAC Solutions</span>
</h1>
<p className="text-lg text-slate-300 mt-6 max-w-lg leading-relaxed">
                        Efficient Cooling Systems for Commercial and Industrial Facilities. High-performance VRF, Chillers, and comprehensive AMC services.
                    </p>
<div className="mt-10 flex flex-wrap gap-4">
<button className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium py-3.5 px-7 rounded-xl transition-all shadow-lg shadow-blue-900/50 flex items-center gap-2" onclick="showPage('products')">
                            Explore Products <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="bg-white/5 hover:bg-white/10 border border-white/20 text-white text-sm font-medium py-3.5 px-7 rounded-xl transition-all flex items-center gap-2 backdrop-blur-sm" onclick="showPage('quote')">
<iconify-icon className="text-lg" icon="solar:document-add-linear"></iconify-icon> Request Quote
                        </button>
</div>
</div>
<div className="relative w-full aspect-[4/3] lg:aspect-square max-w-lg mx-auto lg:ml-auto">
<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 border border-white/10 rounded-3xl backdrop-blur-sm flex flex-col items-center justify-center p-8 shadow-2xl group">
<div className="w-32 h-32 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-blue-400/20">
<iconify-icon className="text-6xl text-blue-400" icon="solar:buildings-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">System Installation</h3>
<p className="text-sm text-slate-400 text-center">Precision engineering for modern infrastructure.</p>

<div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-4">
<div className="bg-teal-50 w-12 h-12 rounded-xl flex items-center justify-center text-teal-600"><iconify-icon className="text-2xl" icon="solar:leaf-linear"></iconify-icon></div>
<div>
<div className="text-sm font-semibold text-[#0A1628]">Energy Efficient</div>
<div className="text-xs text-slate-500 font-medium">Up to 40% Savings</div>
</div>
</div>
<div className="absolute top-12 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-4">
<div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600"><iconify-icon className="text-2xl" icon="solar:history-linear"></iconify-icon></div>
<div>
<div className="text-sm font-semibold text-[#0A1628]">4-Hour SLA</div>
<div className="text-xs text-slate-500 font-medium">Emergency Response</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Product Categories</h2>
<p className="text-sm text-slate-500 mt-3 max-w-2xl mx-auto">Browse our complete range of commercial cooling and ventilation solutions.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
<button className="group bg-white border border-slate-200 hover:border-blue-300 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onclick="filterProductsBy('VRF Systems');showPage('products')">
<div className="w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-blue-50 text-slate-600 group-hover:text-blue-600 flex items-center justify-center text-3xl transition-colors">
<iconify-icon icon="solar:smart-home-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">VRF Systems</h3>
</button>
<button className="group bg-white border border-slate-200 hover:border-blue-300 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onclick="filterProductsBy('AHU');showPage('products')">
<div className="w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-blue-50 text-slate-600 group-hover:text-blue-600 flex items-center justify-center text-3xl transition-colors">
<iconify-icon icon="solar:wind-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Air Handling Units</h3>
</button>
<button className="group bg-white border border-slate-200 hover:border-blue-300 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onclick="filterProductsBy('Chillers');showPage('products')">
<div className="w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-blue-50 text-slate-600 group-hover:text-blue-600 flex items-center justify-center text-3xl transition-colors">
<iconify-icon icon="solar:snowflake-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Chillers</h3>
</button>
<button className="group bg-white border border-slate-200 hover:border-blue-300 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onclick="filterProductsBy('Ventilation');showPage('products')">
<div className="w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-blue-50 text-slate-600 group-hover:text-blue-600 flex items-center justify-center text-3xl transition-colors">
<iconify-icon icon="solar:refresh-circle-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Ventilation Systems</h3>
</button>
<button className="group bg-white border border-slate-200 hover:border-blue-300 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onclick="filterProductsBy('Controls');showPage('products')">
<div className="w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-blue-50 text-slate-600 group-hover:text-blue-600 flex items-center justify-center text-3xl transition-colors">
<iconify-icon icon="solar:settings-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Control Systems</h3>
</button>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Featured Products</h2>
<p className="text-sm text-slate-500 mt-3 max-w-xl">High-efficiency systems ready for deployment in your next commercial project.</p>
</div>
<button className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 shrink-0" onclick="showPage('products')">
                        View All Products <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" id="homeFeaturedProducts">

</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Services Overview</h2>
<p className="text-sm text-slate-500 mt-3 max-w-2xl mx-auto">End-to-end support delivered by certified HVAC engineers.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group flex flex-col">
<div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
<iconify-icon className="text-3xl" icon="solar:settings-bold-duotone"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">HVAC Installation</h3>
<p className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed">Full-scope installation of commercial cooling systems across facilities of any scale.</p>
<button className="text-sm font-medium text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all self-start" onclick="showPage('services')">Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group flex flex-col">
<div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
<iconify-icon className="text-3xl" icon="solar:shield-check-bold-duotone"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Preventive Maintenance</h3>
<p className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed">Scheduled upkeep programs to maximize efficiency and extend equipment lifespan.</p>
<button className="text-sm font-medium text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all self-start" onclick="showPage('services')">Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group flex flex-col">
<div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
<iconify-icon className="text-3xl" icon="solar:wrench-bold-duotone"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Repair Services</h3>
<p className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed">Rapid emergency breakdown response to ensure minimal operational downtime.</p>
<button className="text-sm font-medium text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all self-start" onclick="showPage('services')">Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group flex flex-col">
<div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
<iconify-icon className="text-3xl" icon="solar:chart-square-bold-duotone"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Energy Efficiency Consulting</h3>
<p className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed">Detailed audits and strategies to significantly reduce your facility's energy costs.</p>
<button className="text-sm font-medium text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all self-start" onclick="showPage('services')">Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Industries Served</h2>
</div>
<div className="flex flex-wrap justify-center gap-8 md:gap-16">
<div className="flex flex-col items-center gap-4 group cursor-default">
<div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-200 transition-all duration-300">
<iconify-icon className="text-4xl" icon="solar:city-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700">Commercial Offices</span>
</div>
<div className="flex flex-col items-center gap-4 group cursor-default">
<div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-teal-50 group-hover:text-teal-600 group-hover:border-teal-200 transition-all duration-300">
<iconify-icon className="text-4xl" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700">Hospitals</span>
</div>
<div className="flex flex-col items-center gap-4 group cursor-default">
<div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-amber-50 group-hover:text-amber-600 group-hover:border-amber-200 transition-all duration-300">
<iconify-icon className="text-4xl" icon="solar:bed-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700">Hotels</span>
</div>
<div className="flex flex-col items-center gap-4 group cursor-default">
<div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-purple-50 group-hover:text-purple-600 group-hover:border-purple-200 transition-all duration-300">
<iconify-icon className="text-4xl" icon="solar:bag-3-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700">Shopping Malls</span>
</div>
<div className="flex flex-col items-center gap-4 group cursor-default">
<div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-200 transition-all duration-300">
<iconify-icon className="text-4xl" icon="solar:factory-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700">Industrial Facilities</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">AMC Maintenance Plans</h2>
<p className="text-sm text-slate-500 mt-3 max-w-2xl mx-auto">Protect your investment with structured coverage tailored to your facility.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">

<div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col hover:shadow-xl transition-all">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Basic AMC</h3>
<p className="text-sm text-slate-500 mb-8 pb-8 border-b border-slate-100">Essential cover for setups with 1–5 HVAC units.</p>
<ul className="flex flex-col gap-4 text-sm text-slate-600 mb-10 flex-grow">
<li className="flex items-start gap-3"><iconify-icon className="text-teal-500 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon> 2 Preventive visits/year</li>
<li className="flex items-start gap-3"><iconify-icon className="text-teal-500 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon> 24-Hour response SLA</li>
<li className="flex items-start gap-3"><iconify-icon className="text-teal-500 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon> Labour charges included</li>
<li className="flex items-start gap-3 opacity-50"><iconify-icon className="text-slate-400 text-lg shrink-0" icon="solar:close-circle-linear"></iconify-icon> Spare parts not included</li>
</ul>
<button className="w-full text-center text-sm font-medium py-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors" onclick="openAMCQuote('Basic AMC')">Request AMC Quote</button>
</div>

<div className="bg-blue-600 text-white rounded-3xl p-8 flex flex-col shadow-2xl md:scale-105 relative z-10">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-400 text-[#0A1628] text-[0.65rem] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">Most Popular</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Standard AMC</h3>
<p className="text-sm text-blue-100 mb-8 pb-8 border-b border-blue-500/50">Complete cover for mid-size offices with 6–25 units.</p>
<ul className="flex flex-col gap-4 text-sm text-white mb-10 flex-grow">
<li className="flex items-start gap-3"><iconify-icon className="text-teal-300 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon> 4 Preventive visits/year</li>
<li className="flex items-start gap-3"><iconify-icon className="text-teal-300 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon> 8-Hour response SLA</li>
<li className="flex items-start gap-3"><iconify-icon className="text-teal-300 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon> Labour &amp; consumables included</li>
<li className="flex items-start gap-3"><iconify-icon className="text-teal-300 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon> Dedicated account manager</li>
</ul>
<button className="w-full text-center text-sm font-medium py-3.5 rounded-xl bg-white text-blue-600 hover:bg-blue-50 transition-colors shadow-sm" onclick="openAMCQuote('Standard AMC')">Request AMC Quote</button>
</div>

<div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col hover:shadow-xl transition-all">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Comprehensive</h3>
<p className="text-sm text-slate-500 mb-8 pb-8 border-b border-slate-100">Full protection for large facilities with 25+ units.</p>
<ul className="flex flex-col gap-4 text-sm text-slate-600 mb-10 flex-grow">
<li className="flex items-start gap-3"><iconify-icon className="text-teal-500 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon> Monthly maintenance visits</li>
<li className="flex items-start gap-3"><iconify-icon className="text-teal-500 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon> 4-Hour response SLA</li>
<li className="flex items-start gap-3"><iconify-icon className="text-teal-500 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon> Labour &amp; all parts included</li>
<li className="flex items-start gap-3"><iconify-icon className="text-teal-500 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon> 24/7 remote monitoring</li>
</ul>
<button className="w-full text-center text-sm font-medium py-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors" onclick="openAMCQuote('Comprehensive AMC')">Request AMC Quote</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-6xl mx-auto px-6">
<div className="bg-[#0A1628] rounded-[2rem] p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(20,184,166,0.15),_transparent_70%)] -translate-y-1/2 translate-x-1/3"></div>
<div className="relative z-10 text-center md:text-left max-w-xl">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4">Need help choosing the right HVAC system?</h2>
<p className="text-base text-slate-300">Get a detailed technical proposal with equipment specifications and installation plans within 24 hours.</p>
</div>
<div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
<button className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium py-3.5 px-8 rounded-xl transition-all shadow-lg text-center" onclick="showPage('quote')">Request Quote</button>
<button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-medium py-3.5 px-8 rounded-xl transition-all text-center" onclick="showPage('contact')">Contact Sales</button>
</div>
</div>
</div>
</section>
</div>

<div className="page-section hidden" id="page-products">
<div className="bg-slate-50 py-16 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-xs text-slate-400 mb-3 flex items-center gap-2">
<button className="hover:text-slate-700 transition-colors" onclick="showPage('home')">Home</button>
<span>›</span>
<span className="text-slate-600">Products</span>
</div>
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">HVAC Product Catalog</h1>
<p className="text-sm text-slate-500 mt-3 max-w-xl">Commercial and industrial cooling solutions — browse by category and request a detailed project quote.</p>
</div>
</div>
<section className="py-16">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-12">

<aside className="space-y-8">
<div className="bg-white border border-slate-200 rounded-2xl p-6">
<h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">Categories</h3>
<div className="space-y-3" id="categoryFilters">

<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 rounded border border-slate-300 group-hover:border-blue-500 transition-colors bg-white">
<input className="peer absolute opacity-0 w-full h-full cursor-pointer" onchange="applyFilters()" type="checkbox" value="VRF Systems"/>
<iconify-icon className="text-blue-600 opacity-0 peer-checked:opacity-100 transition-opacity text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors flex-grow">VRF Systems</span>
<span className="text-[0.65rem] text-slate-400 font-medium">12</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 rounded border border-slate-300 group-hover:border-blue-500 transition-colors bg-white">
<input className="peer absolute opacity-0 w-full h-full cursor-pointer" onchange="applyFilters()" type="checkbox" value="Chillers"/>
<iconify-icon className="text-blue-600 opacity-0 peer-checked:opacity-100 transition-opacity text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors flex-grow">Chillers</span>
<span className="text-[0.65rem] text-slate-400 font-medium">8</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 rounded border border-slate-300 group-hover:border-blue-500 transition-colors bg-white">
<input className="peer absolute opacity-0 w-full h-full cursor-pointer" onchange="applyFilters()" type="checkbox" value="AHU"/>
<iconify-icon className="text-blue-600 opacity-0 peer-checked:opacity-100 transition-opacity text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors flex-grow">Air Handling Units</span>
<span className="text-[0.65rem] text-slate-400 font-medium">10</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 rounded border border-slate-300 group-hover:border-blue-500 transition-colors bg-white">
<input className="peer absolute opacity-0 w-full h-full cursor-pointer" onchange="applyFilters()" type="checkbox" value="Ventilation"/>
<iconify-icon className="text-blue-600 opacity-0 peer-checked:opacity-100 transition-opacity text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors flex-grow">Ventilation</span>
<span className="text-[0.65rem] text-slate-400 font-medium">9</span>
</label>
</div>
</div>
</aside>

<div className="lg:col-span-3">
<div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8 pb-4 border-b border-slate-100">
<div className="text-sm text-slate-500">Showing <span className="font-medium text-slate-900" id="productCount">0</span> products</div>
<div className="relative inline-block w-full sm:w-auto">
<select className="appearance-none w-full sm:w-48 bg-white border border-slate-200 rounded-lg py-2.5 pl-4 pr-10 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer shadow-sm">
<option>Sort: Newest First</option>
<option>Sort: Name A–Z</option>
<option>Sort: Capacity (Low–High)</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6" id="productsGrid">

</div>
</div>
</div>
</section>
</div>

<div className="page-section hidden py-32 text-center text-slate-500 max-w-2xl mx-auto" id="page-services"><h2 className="text-2xl font-semibold text-slate-900 mb-4">Services Page</h2><p>Content matches the Services Overview on homepage. Rendered via standard templates.</p></div>
<div className="page-section hidden py-32 text-center text-slate-500 max-w-2xl mx-auto" id="page-amc"><h2 className="text-2xl font-semibold text-slate-900 mb-4">AMC Plans Page</h2><p>Content matches the AMC sections on homepage. Rendered via standard templates.</p></div>
<div className="page-section hidden py-32 text-center text-slate-500 max-w-2xl mx-auto" id="page-about"><h2 className="text-2xl font-semibold text-slate-900 mb-4">About Us</h2><p>Company history and team details.</p></div>
<div className="page-section hidden py-32 text-center text-slate-500 max-w-2xl mx-auto" id="page-contact"><h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact Sales</h2><p>Form and location details.</p></div>
<div className="page-section hidden py-32 text-center text-slate-500 max-w-2xl mx-auto" id="page-quote"><h2 className="text-2xl font-semibold text-slate-900 mb-4">Request a Quote</h2><p>Detailed technical requirement form.</p></div>

<footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:air-conditioner-linear"></iconify-icon>
</div>
<strong className="text-base font-semibold tracking-tight text-[#0A1628]">ArcticFlow</strong>
</div>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">Advanced commercial HVAC solutions engineered for demanding environments. Trusted by 500+ enterprises nationwide.</p>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-widest text-slate-900 mb-6">Products</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><button className="hover:text-blue-600 transition-colors" onclick="showPage('products')">VRF Systems</button></li>
<li><button className="hover:text-blue-600 transition-colors" onclick="showPage('products')">Chillers</button></li>
<li><button className="hover:text-blue-600 transition-colors" onclick="showPage('products')">Air Handling Units</button></li>
<li><button className="hover:text-blue-600 transition-colors" onclick="showPage('products')">Ventilation</button></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-widest text-slate-900 mb-6">Services</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><button className="hover:text-blue-600 transition-colors" onclick="showPage('services')">HVAC Installation</button></li>
<li><button className="hover:text-blue-600 transition-colors" onclick="showPage('services')">Maintenance</button></li>
<li><button className="hover:text-blue-600 transition-colors" onclick="showPage('amc')">AMC Plans</button></li>
<li><button className="hover:text-blue-600 transition-colors" onclick="showPage('services')">Energy Audit</button></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-widest text-slate-900 mb-6">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><button className="hover:text-blue-600 transition-colors" onclick="showPage('about')">About Us</button></li>
<li><button className="hover:text-blue-600 transition-colors" onclick="showPage('contact')">Contact</button></li>
<li><button className="hover:text-blue-600 transition-colors" onclick="showPage('quote')">Request a Quote</button></li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
<span>© 2024 ArcticFlow HVAC Systems Pvt. Ltd. All rights reserved.</span>
<div className="flex gap-6">
<a className="hover:text-slate-600 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-600 transition-colors" href="#">Terms of Use</a>
</div>
</div>
</div>
</footer>
</div>

<div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none" id="toastContainer"></div>


    </>
  );
}
