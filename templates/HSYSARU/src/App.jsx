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



    lucide.createIcons();

    /* Chart.js sample data */
    const ctx = document.getElementById('salesChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Yosemite', 'Zion', 'Grand Canyon', 'Yellowstone', 'Olympic'],
        datasets: [{
          data: [420, 380, 310, 290, 250],
          backgroundColor: 'rgba(16, 185, 129, 0.6)',
          borderRadius: 8,
          barThickness: 32
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          y: { ticks: { color: '#64748b', font: { family: 'Inter', size: 12 } }, grid: { color: '#e2e8f0' } },
          x: { ticks: { color: '#64748b', font: { family: 'Inter', size: 12 } }, grid: { display: false } }
        }
      }
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
      

<header className="sticky top-0 backdrop-blur bg-white/80 border-b border-slate-200 z-30">
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
<h1 className="text-2xl font-semibold tracking-tight">Trailflame</h1>
<nav className="hidden md:flex gap-8 text-sm font-medium">
<a className="hover:text-emerald-600 transition-colors" href="#shop">Shop</a>
<a className="hover:text-emerald-600 transition-colors" href="#gift">Gifting</a>
<a className="hover:text-emerald-600 transition-colors" href="#about">About</a>
</nav>
<button className="flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 transition-colors">
<i className="w-5 h-5 stroke-1.5" data-lucide="shopping-bag"></i>
<span className="text-sm font-medium">Cart</span>
</button>
</div>
</header>

<section className="relative isolate overflow-hidden">
<img alt="National Park" className="w-full h-[560px] object-cover object-center" src="https://images.unsplash.com/photo-1552083375-1447ce886485?auto=format&amp;fit=crop&amp;w=1950&amp;q=60"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
<div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center px-6 max-w-2xl animate-[fadeIn_0.8s_ease-out]">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">Hand-Poured Scents of the Wild</h2>
<p className="mt-4 text-slate-600 font-normal">Inspired by America’s most beautiful protected places—bring the trail home with eco-friendly soy candles.</p>
<a className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors" href="#shop">
        Shop Collection
        <i className="w-4 h-4 stroke-1.5" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20 space-y-16" id="shop">
<header className="text-center">
<h3 className="text-3xl font-semibold tracking-tight">National Park Collection</h3>
<p className="mt-2 text-slate-600 max-w-xl mx-auto">Small-batch candles blended to capture trail notes, morning air and campfire memories.</p>
</header>
<div className="grid gap-12 lg:grid-cols-3 md:grid-cols-2">

<div className="flex flex-col border border-slate-200 rounded-xl overflow-hidden group animate-[fadeIn_0.8s_ease-out_0.1s_both]">
<div className="relative">
<img alt="Yosemite Mist" className="w-full h-64 object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<span className="absolute bottom-3 left-3 inline-flex items-center gap-1 bg-white/80 px-2 py-1 rounded text-xs font-medium backdrop-blur">
<i className="w-3.5 h-3.5 stroke-1.5" data-lucide="leaf"></i>Fresh
          </span>
</div>
<div className="p-6 flex flex-col flex-1">
<h4 className="text-lg font-semibold tracking-tight">Yosemite Mist</h4>
<ul className="mt-3 space-y-1 text-sm text-slate-600">
<li className="flex items-center gap-2"><i className="w-4 h-4 stroke-1.5" data-lucide="sparkles"></i>Pine • Morning Dew</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 stroke-1.5" data-lucide="sparkles"></i>Cedar Bark</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 stroke-1.5" data-lucide="sparkles"></i>Glacier Water</li>
</ul>
<div className="mt-auto flex items-center justify-between pt-6">
<span className="text-base font-medium">$28</span>
<button className="flex items-center gap-2 px-4 py-2 rounded-md border border-slate-200 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-colors text-sm font-medium">
<i className="w-4 h-4 stroke-1.5" data-lucide="plus"></i>Add
            </button>
</div>
</div>
</div>

<div className="flex flex-col border border-slate-200 rounded-xl overflow-hidden group animate-[fadeIn_0.8s_ease-out_0.2s_both]">
<div className="relative">
<img alt="Zion Amber" className="w-full h-64 object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<span className="absolute bottom-3 left-3 inline-flex items-center gap-1 bg-white/80 px-2 py-1 rounded text-xs font-medium backdrop-blur">
<i className="w-3.5 h-3.5 stroke-1.5" data-lucide="flame"></i>Warm
          </span>
</div>
<div className="p-6 flex flex-col flex-1">
<h4 className="text-lg font-semibold tracking-tight">Zion Amber</h4>
<ul className="mt-3 space-y-1 text-sm text-slate-600">
<li className="flex items-center gap-2"><i className="w-4 h-4 stroke-1.5" data-lucide="sparkles"></i>Emberwood</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 stroke-1.5" data-lucide="sparkles"></i>Desert Sand</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 stroke-1.5" data-lucide="sparkles"></i>Amber Resin</li>
</ul>
<div className="mt-auto flex items-center justify-between pt-6">
<span className="text-base font-medium">$28</span>
<button className="flex items-center gap-2 px-4 py-2 rounded-md border border-slate-200 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-colors text-sm font-medium">
<i className="w-4 h-4 stroke-1.5" data-lucide="plus"></i>Add
            </button>
</div>
</div>
</div>

<div className="flex flex-col border border-slate-200 rounded-xl overflow-hidden group animate-[fadeIn_0.8s_ease-out_0.3s_both]">
<div className="relative">
<img alt="Grand Canyon Sage" className="w-full h-64 object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<span className="absolute bottom-3 left-3 inline-flex items-center gap-1 bg-white/80 px-2 py-1 rounded text-xs font-medium backdrop-blur">
<i className="w-3.5 h-3.5 stroke-1.5" data-lucide="snowflake"></i>Earthy
          </span>
</div>
<div className="p-6 flex flex-col flex-1">
<h4 className="text-lg font-semibold tracking-tight">Grand Canyon Sage</h4>
<ul className="mt-3 space-y-1 text-sm text-slate-600">
<li className="flex items-center gap-2"><i className="w-4 h-4 stroke-1.5" data-lucide="sparkles"></i>Wild Sage</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 stroke-1.5" data-lucide="sparkles"></i>Red Clay</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 stroke-1.5" data-lucide="sparkles"></i>Canyon Air</li>
</ul>
<div className="mt-auto flex items-center justify-between pt-6">
<span className="text-base font-medium">$28</span>
<button className="flex items-center gap-2 px-4 py-2 rounded-md border border-slate-200 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-colors text-sm font-medium">
<i className="w-4 h-4 stroke-1.5" data-lucide="plus"></i>Add
            </button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-20" id="gift">
<div className="max-w-7xl mx-auto px-6">
<div className="md:flex items-center gap-16">
<img alt="Gift Box" className="w-full md:w-1/2 h-80 object-cover rounded-xl shadow-sm animate-[slideIn_0.8s_ease-out]" src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&amp;fit=crop&amp;w=900&amp;q=60"/>
<div className="mt-10 md:mt-0 md:w-1/2">
<h3 className="text-3xl font-semibold tracking-tight">Make it a Gift</h3>
<p className="mt-4 text-slate-600">Add a recycled paper gift box with natural wood excelsior, letter-pressed card and wax seal.</p>

<div className="mt-8 flex items-center gap-4">
<label className="relative inline-flex items-center cursor-pointer select-none">
<input className="sr-only peer" id="giftToggle" type="checkbox"/>
<span className="w-11 h-6 bg-slate-300 rounded-full peer-checked:bg-emerald-600 transition-colors"></span>
<span className="absolute left-0 top-0 w-6 h-6 bg-white rounded-full border border-slate-200 shadow peer-checked:translate-x-5 transition-transform"></span>
</label>
<span className="text-sm font-medium text-slate-700">Add Gift Packaging ($6)</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20 space-y-12">
<header className="text-center max-w-xl mx-auto">
<h3 className="text-3xl font-semibold tracking-tight">Trail Favorites</h3>
<p className="mt-2 text-slate-600">Customer-loved scents this season.</p>
</header>
<div className="md:flex gap-12 items-center">
<div className="flex-1">
<div className="rounded-xl border border-slate-200 p-6">
<div>
<h4 className="text-lg font-semibold">Top Sellers</h4>
<p className="text-sm text-slate-500">Units sold in the last 90 days</p>
</div>
<div className="mt-4">
<div>
<canvas className="w-full h-64" id="salesChart"></canvas>
</div>
</div>
</div>
</div>
<ul className="mt-12 md:mt-0 md:w-60 space-y-6">
<li className="flex items-start gap-3">
<i className="w-6 h-6 stroke-1.5 text-emerald-600" data-lucide="leaf"></i>
<div>
<p className="font-semibold">100% Soy Wax</p>
<p className="text-sm text-slate-600">Clean burn, no parabens.</p>
</div>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 stroke-1.5 text-emerald-600" data-lucide="sun"></i>
<div>
<p className="font-semibold">Solar-Powered Studio</p>
<p className="text-sm text-slate-600">Crafted in small batches.</p>
</div>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 stroke-1.5 text-emerald-600" data-lucide="file-heart"></i>
<div>
<p className="font-semibold">Parks Donation</p>
<p className="text-sm text-slate-600">3% to conservation.</p>
</div>
</li>
</ul>
</div>
</section>

<footer className="border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="text-sm text-slate-600">© 2024 Trailflame. All rights reserved.</div>
<div className="flex gap-6 text-slate-600">
<a className="hover:text-emerald-600 transition-colors" href="#">Instagram</a>
<a className="hover:text-emerald-600 transition-colors" href="#">Twitter</a>
<a className="hover:text-emerald-600 transition-colors" href="#">Support</a>
</div>
</div>
</footer>



    </>
  );
}
