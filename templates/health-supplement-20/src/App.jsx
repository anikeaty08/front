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



        // Simple Cart Logic
        let count = 0;
        function addToCart() {
            count++;
            const badge = document.getElementById('cart-count');
            badge.innerText = count;
            
            // Subtle animation on cart icon
            badge.classList.add('scale-125');
            setTimeout(() => badge.classList.remove('scale-125'), 200);
        }

        // Plan Toggle Logic
        function togglePlan(index) {
            const bg = document.getElementById('selector-bg');
            const btns = document.querySelectorAll('button[onclick^="togglePlan"]');
            
            if (index === 0) {
                bg.classList.remove('translate-x-full');
                btns[0].classList.replace('text-gray-500', 'text-gray-900');
                btns[1].classList.replace('text-gray-900', 'text-gray-500');
            } else {
                bg.classList.add('translate-x-full');
                btns[1].classList.replace('text-gray-500', 'text-gray-900');
                btns[0].classList.replace('text-gray-900', 'text-gray-500');
            }
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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<button className="md:hidden text-gray-500 hover:text-gray-900 transition-colors" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<a className="text-xl font-medium tracking-tighter text-gray-900" href="#">
                AURA
            </a>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#products">Supplements</a>
<a className="hover:text-gray-900 transition-colors" href="#science">Science</a>
<a className="hover:text-gray-900 transition-colors" href="#kits">Kits</a>
<a className="hover:text-gray-900 transition-colors" href="#about">About</a>
</div>

<div className="flex items-center space-x-4">
<button className="text-gray-500 hover:text-gray-900 transition-colors hidden sm:block">
<iconify-icon height="20" icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="relative group cursor-pointer">
<iconify-icon className="text-gray-900" height="20" icon="solar:bag-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-gray-900 text-[10px] text-white" id="cart-count">0</span>
</div>
</div>
</div>

<div className="hidden md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 p-6 space-y-4" id="mobile-menu">
<a className="block text-sm font-medium text-gray-600 hover:text-gray-900" href="#">Supplements</a>
<a className="block text-sm font-medium text-gray-600 hover:text-gray-900" href="#">Science</a>
<a className="block text-sm font-medium text-gray-600 hover:text-gray-900" href="#">Kits</a>
</div>
</nav>

<header className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-600 mb-8 animate-fade-in-up">
<span className="flex h-2 w-2 rounded-full bg-teal-500"></span>
            New Formula Released: Clarity+
        </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-gray-900 mb-6 max-w-4xl mx-auto leading-[0.95]">
            Engineered for <br/> <span className="text-gray-400">everyday longevity.</span>
</h1>
<p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto mb-10 font-light leading-relaxed">
            Clinically backed supplements designed to optimize your biology. 
            Clean ingredients, transparent sourcing, and measurable results.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all hover:scale-[1.02] active:scale-[0.98]">
                Shop Essentials
            </button>
<button className="w-full sm:w-auto px-8 py-3 bg-white border border-gray-200 text-gray-900 text-sm font-medium rounded-full hover:bg-gray-50 transition-all">
                Our Methodology
            </button>
</div>

<div className="mt-20 relative">
<div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 h-20 bottom-0"></div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto opacity-80">
<div className="aspect-[3/4] rounded-2xl bg-gray-100 relative overflow-hidden group">
<img alt="Vitamin" className="object-cover w-full h-full mix-blend-multiply filter grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-[3/4] rounded-2xl bg-gray-100 relative overflow-hidden group mt-12">
<img alt="Lab" className="object-cover w-full h-full mix-blend-multiply filter grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&amp;w=1978&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-[3/4] rounded-2xl bg-gray-100 relative overflow-hidden group">
<img alt="Pills" className="object-cover w-full h-full mix-blend-multiply filter grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&amp;w=2030&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-[3/4] rounded-2xl bg-gray-100 relative overflow-hidden group mt-12">
<img alt="Bottle" className="object-cover w-full h-full mix-blend-multiply filter grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</header>

<section className="py-12 border-y border-gray-100 bg-gray-50/50">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-gray-400 uppercase tracking-widest mb-8">Trusted by health experts from</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale">
<span className="text-lg font-semibold tracking-tight">VOGUE</span>
<span className="text-lg font-semibold tracking-tight">GQ</span>
<span className="text-lg font-semibold tracking-tight">WIRED</span>
<span className="text-lg font-semibold tracking-tight">Goop</span>
<span className="text-lg font-semibold tracking-tight">Equinox</span>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="products">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-medium tracking-tight text-gray-900">Curated Systems</h2>
<p className="mt-2 text-gray-500">Targeted solutions for specific health outcomes.</p>
</div>
<a className="hidden md:flex items-center text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors" href="#">
                View all systems <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative md:col-span-2 rounded-3xl bg-gray-50 overflow-hidden min-h-[400px] border border-gray-100 hover:border-gray-200 transition-all">
<div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
<div>
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 mb-4 text-gray-900">
<iconify-icon height="20" icon="solar:sun-2-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-gray-900">The Morning Stack</h3>
<p className="mt-2 text-gray-500 max-w-sm">Kickstart your metabolism and cognitive function with our complete AM nutrient pack.</p>
</div>
<div className="flex items-center gap-4">
<span className="text-sm font-medium text-gray-900">$85.00</span>
<button className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition-colors" onclick="addToCart()">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</button>
</div>
</div>
<div className="absolute right-0 bottom-0 w-2/3 h-full translate-x-12 translate-y-12">
<div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-tl-full opacity-50 group-hover:scale-105 transition-transform duration-500 ease-out"></div>
</div>
</div>

<div className="group relative rounded-3xl bg-gray-50 overflow-hidden min-h-[400px] border border-gray-100 hover:border-gray-200 transition-all">
<div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
<div>
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 mb-4 text-gray-900">
<iconify-icon height="20" icon="solar:moon-sleep-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-gray-900">Deep Sleep</h3>
<p className="mt-2 text-gray-500">Magnesium and L-Theanine blend.</p>
</div>
<div className="flex items-center gap-4">
<span className="text-sm font-medium text-gray-900">$45.00</span>
<button className="w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-900 flex items-center justify-center hover:bg-gray-50 transition-colors" onclick="addToCart()">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</button>
</div>
</div>
<div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gray-200 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
</div>

<div className="group relative rounded-3xl bg-gray-50 overflow-hidden min-h-[350px] border border-gray-100 hover:border-gray-200 transition-all">
<div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
<div>
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 mb-4 text-gray-900">
<iconify-icon height="20" icon="solar:heart-pulse-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900">Heart Health</h3>
<p className="mt-2 text-sm text-gray-500">CoQ10 + Omega-3.</p>
</div>
<div className="flex items-center gap-4">
<span className="text-sm font-medium text-gray-900">$55.00</span>
<button className="w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-900 flex items-center justify-center hover:bg-gray-50 transition-colors" onclick="addToCart()">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative md:col-span-2 rounded-3xl bg-gray-900 overflow-hidden min-h-[350px] border border-gray-800 transition-all text-white">
<div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
<div>
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 border border-gray-700 mb-4 text-white">
<iconify-icon height="20" icon="solar:dumbbell-large-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white">Performance Kit</h3>
<p className="mt-2 text-gray-400 max-w-sm">Protein, Creatine, and Electrolytes tailored for active recovery.</p>
</div>
<div className="flex items-center gap-4">
<span className="text-sm font-medium text-white">$110.00</span>
<button className="w-8 h-8 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-gray-100 transition-colors" onclick="addToCart()">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</button>
</div>
</div>

<div className="absolute right-0 top-0 h-full w-1/2">
<svg className="w-full h-full opacity-10" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.9C87.4,-34.7,90.1,-20.4,85.8,-8.3C81.5,3.8,70.2,13.7,60.8,22.6C51.4,31.5,43.9,39.4,35.2,45.8C26.5,52.2,16.6,57.1,5.6,60.3C-5.4,63.5,-17.5,65,-28.9,61.8C-40.3,58.6,-51,50.7,-60.1,41.2C-69.2,31.7,-76.7,20.6,-78.9,8.5C-81.1,-3.6,-78,-16.7,-70.7,-27.6C-63.4,-38.5,-51.9,-47.2,-39.8,-55.1C-27.7,-63,-15,-70.1,-0.8,-68.7C13.4,-67.3,26.8,-57.4,44.7,-76.4Z" fill="#FFFFFF" transform="translate(100 100)"></path>
</svg>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-y border-gray-100" id="science">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-6">Transparency is our active ingredient.</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 text-gray-900">
<iconify-icon height="24" icon="solar:test-tube-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-gray-900">Third-Party Tested</h4>
<p className="mt-1 text-sm text-gray-500 leading-relaxed">Every batch is tested for purity and potency by independent labs.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 text-gray-900">
<iconify-icon height="24" icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-gray-900">Bioavailable Forms</h4>
<p className="mt-1 text-sm text-gray-500 leading-relaxed">We use methylated vitamins and chelated minerals for maximum absorption.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 text-gray-900">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-gray-900">No Fillers</h4>
<p className="mt-1 text-sm text-gray-500 leading-relaxed">Zero artificial colorants, synthetic fillers, or unnecessary additives.</p>
</div>
</div>
</div>
</div>

<div className="relative bg-white p-8 rounded-3xl shadow-[0_2px_40px_-12px_rgba(0,0,0,0.06)] border border-gray-100">
<div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-100">
<div>
<p className="text-xs font-medium text-gray-400 uppercase tracking-widest">Supplement Facts</p>
<h3 className="text-lg font-medium text-gray-900 mt-1">Daily Multivitamin</h3>
</div>
<div className="h-10 w-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-900">
<iconify-icon height="20" icon="solar:pill-linear" width="20"></iconify-icon>
</div>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center text-sm">
<span className="text-gray-500">Vitamin D3 (as Cholecalciferol)</span>
<span className="font-medium text-gray-900">50mcg</span>
</div>
<div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-gray-900 h-full w-[80%] rounded-full"></div>
</div>
<div className="flex justify-between items-center text-sm pt-2">
<span className="text-gray-500">Magnesium (as Bisglycinate)</span>
<span className="font-medium text-gray-900">200mg</span>
</div>
<div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-gray-900 h-full w-[45%] rounded-full"></div>
</div>
<div className="flex justify-between items-center text-sm pt-2">
<span className="text-gray-500">Zinc (as Citrate)</span>
<span className="font-medium text-gray-900">15mg</span>
</div>
<div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-gray-900 h-full w-[100%] rounded-full"></div>
</div>
</div>
<button className="mt-8 w-full py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-colors">
                        View Full Label
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6 text-center">
<iconify-icon className="text-gray-300 mb-6" height="40" icon="solar:box-minimalistic-linear" strokeWidth="1" width="40"></iconify-icon>
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-4">Subscribe &amp; Save</h2>
<p className="text-gray-500 mb-10">Consistency is key to health. Get 15% off and free shipping on every order.</p>

<div className="bg-gray-50 p-1.5 rounded-2xl inline-flex relative border border-gray-100">
<div className="w-full h-full absolute inset-0 pointer-events-none p-1.5">
<div className="w-1/2 h-full bg-white rounded-xl shadow-sm border border-gray-200 transition-all duration-300 ease-out transform translate-x-0" id="selector-bg"></div>
</div>
<button className="relative z-10 px-8 py-3 text-sm font-medium text-gray-900 w-32 focus:outline-none" onclick="togglePlan(0)">Monthly</button>
<button className="relative z-10 px-8 py-3 text-sm font-medium text-gray-500 w-32 focus:outline-none hover:text-gray-900 transition-colors" onclick="togglePlan(1)">Quarterly</button>
</div>

<div className="mt-8 flex items-center justify-center gap-3">
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-2 border-gray-300 appearance-none cursor-pointer transition-all duration-300" id="gift" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer transition-colors duration-300" htmlFor="gift"></label>
</div>
<label className="text-sm text-gray-600 cursor-pointer select-none" htmlFor="gift">This is a gift</label>
</div>
</section>

<footer className="border-t border-gray-100 pt-16 pb-8 bg-white">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-medium tracking-tighter text-gray-900" href="#">AURA</a>
<p className="mt-4 text-xs text-gray-400">© 2024 Aura Health Inc.</p>
</div>
<div className="space-y-4">
<h4 className="text-sm font-medium text-gray-900">Shop</h4>
<a className="block text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">All Products</a>
<a className="block text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Bundles</a>
<a className="block text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Gift Cards</a>
</div>
<div className="space-y-4">
<h4 className="text-sm font-medium text-gray-900">Company</h4>
<a className="block text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">About Us</a>
<a className="block text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Ingredients</a>
<a className="block text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Careers</a>
</div>
<div className="col-span-2 md:col-span-1">
<h4 className="text-sm font-medium text-gray-900 mb-4">Stay healthy</h4>
<div className="relative">
<input className="w-full bg-gray-50 border border-gray-200 text-sm rounded-lg px-4 py-2.5 outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all placeholder:text-gray-400" placeholder="email@address.com" type="email"/>
<button className="absolute right-2 top-2 text-gray-400 hover:text-gray-900">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-50">
<div className="flex space-x-6">
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#"><iconify-icon icon="brandico:twitter-bird" width="20"></iconify-icon></a>
</div>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="text-xs text-gray-400 hover:text-gray-600" href="#">Privacy Policy</a>
<a className="text-xs text-gray-400 hover:text-gray-600" href="#">Terms of Service</a>
</div>
</div>
</footer>


    </>
  );
}
