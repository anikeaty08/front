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



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
slate: {
850: '#1e293b',
900: '#0f172a',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-gray-200/60 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center gap-2 rtl:space-x-reverse group" href="#">
<div className="bg-slate-900 text-white w-8 h-8 rounded-lg flex items-center justify-center font-medium tracking-tighter group-hover:bg-emerald-600 transition-colors duration-300">L</div>
<span className="self-center text-sm font-semibold whitespace-nowrap tracking-tight text-slate-900 uppercase">The Little Treats of Life</span>
</a>
<div className="flex items-center gap-6 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<button className="relative p-2 text-slate-500 hover:text-slate-900 transition-colors" type="button">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-1 right-0 flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
</button>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li>
<a className="block py-2 px-3 text-slate-500 hover:text-slate-900 md:p-0 text-sm transition-colors" href="#mission">The Problem</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-500 hover:text-slate-900 md:p-0 text-sm transition-colors" href="#science">Science</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-500 hover:text-slate-900 md:p-0 text-sm transition-colors" href="#shop">Shop</a>
</li>
</ul>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-medium mb-8 fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
                Sugar is the new smoking. Break the cycle.
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-slate-900 mb-6 max-w-4xl mx-auto leading-tight fade-in-up delay-100">
                Indulge your cravings,<br/> <span className="text-slate-400">protect your biology.</span>
</h1>
<p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed fade-in-up delay-200">
                Traditional desserts are engineered to hook you, spiking insulin and triggering inflammation. We re-engineered the treat: 0g added sugar, adaptogenic botanicals, and uncompromised flavor.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up delay-300">
<a className="h-10 px-6 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-200 hover:shadow-xl hover:-translate-y-0.5 duration-300" href="#shop">
                    Shop Collection
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="h-10 px-6 rounded-full bg-white border border-gray-200 text-slate-600 text-sm font-medium hover:bg-gray-50 hover:text-slate-900 transition-colors flex items-center justify-center" href="#science">
                    Read the Science
                </a>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="mission">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-900/20 blur-[100px] rounded-full -z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-6">Why your "treat" is a trap.</h2>
<p className="text-slate-400 text-base leading-relaxed mb-8">
                        The modern food industry relies on the "Bliss Point"—a scientifically engineered combination of sugar, fat, and salt designed to override your brain's satiety signals. It's not lack of willpower; it's biochemistry.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
<iconify-icon icon="lucide:activity" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-white">Insulin Rollercoaster</h3>
<p className="text-xs text-slate-500 mt-1">Refined sugars cause rapid spikes and crashes, leading to lethargy, brain fog, and chronic inflammation.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
<iconify-icon icon="lucide:flask-conical" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-white">Artificial Reality</h3>
<p className="text-xs text-slate-500 mt-1">Binders, gums, and dyes disrupt gut health. Most "diet" sweets use sugar alcohols that cause digestive distress.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500">
<iconify-icon icon="lucide:brain-circuit" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-white">Dopamine Hijacking</h3>
<p className="text-xs text-slate-500 mt-1">Hyper-palatable foods downregulate dopamine receptors, making you need more to feel the same satisfaction.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-2xl blur-2xl"></div>
<div className="relative bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8">
<div className="flex justify-between items-end mb-6">
<h3 className="text-sm font-medium text-slate-300">Glycemic Response</h3>
<div className="flex gap-4 text-xs">
<div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-500"></span>Standard Cake</div>
<div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500"></span>Nourish</div>
</div>
</div>

<div className="relative h-48 w-full border-l border-b border-slate-600">

<svg className="absolute inset-0 h-full w-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0,80 Q20,10 40,10 T80,80" fill="none" stroke="#ef4444" stroke-dasharray="4 2" strokeWidth="2"></path>

<path d="M0,80 Q30,60 50,65 T100,60" fill="none" stroke="#10b981" strokeWidth="2"></path>
</svg>

<div className="absolute top-4 left-[35%] bg-slate-900 border border-slate-700 px-3 py-1.5 rounded text-xs shadow-xl text-red-400">
                                Crash impending
                            </div>
<div className="absolute top-[35%] right-[20%] bg-slate-900 border border-slate-700 px-3 py-1.5 rounded text-xs shadow-xl text-emerald-400">
                                Sustained Energy
                            </div>
</div>
<p className="mt-6 text-xs text-slate-500 text-center font-mono uppercase tracking-widest">Data based on glycemic index analysis</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-900 mb-4">Metabolic health, decoded.</h2>
<p className="text-slate-500 text-sm md:text-base">We swapped industrial fillers for functional nutrient density.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:leaf" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Monk Fruit Sweetened</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Zero calories, zero glycemic impact. We use pure Mogroside V extract without the erythritol aftertaste.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:wheat-off" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Almond Flour Base</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Replacing bleached wheat flour with nutrient-dense almond flour provides healthy fats and Vitamin E.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">No Sugar Spikes</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Formulated to keep blood sugar stable, preventing the hunger cravings that follow traditional desserts.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-gray-100 bg-gray-50" id="shop">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-900">Functional Collection</h2>
<p className="text-slate-500 mt-2 text-sm">Adaptogenic blends for every moment of your day.</p>
</div>
<div className="flex flex-wrap gap-2">

<button className="px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-medium border border-slate-900 transition-all">All</button>
<button className="px-4 py-1.5 rounded-full bg-white text-slate-600 text-xs font-medium border border-gray-200 hover:border-gray-300 hover:text-slate-900 transition-all">Beverages</button>
<button className="px-4 py-1.5 rounded-full bg-white text-slate-600 text-xs font-medium border border-gray-200 hover:border-gray-300 hover:text-slate-900 transition-all">Snacks</button>
<button className="px-4 py-1.5 rounded-full bg-white text-slate-600 text-xs font-medium border border-gray-200 hover:border-gray-300 hover:text-slate-900 transition-all">Pantry</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

<div className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300">
<div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
<div className="absolute inset-0 bg-slate-200">
<img alt="Zen Berry Sparkling Elixir" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute top-3 left-3 bg-rose-100/90 backdrop-blur px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase text-rose-800 border border-rose-200/50">
                            Beverage
                        </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-sm font-semibold text-slate-900 tracking-tight leading-snug">Zen Berry Sparkling Elixir</h3>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">$4.50</span>
</div>
<p className="text-xs text-slate-500 mb-4 line-clamp-3 leading-relaxed">Tart, refreshing blend of black cherry and cranberry. Supports calm focus with zero caffeine.</p>
<div className="mt-auto mb-4 flex flex-wrap gap-1.5">
<span className="px-1.5 py-0.5 rounded bg-slate-50 text-slate-500 text-[9px] font-semibold uppercase tracking-wider border border-slate-100">Ashwagandha</span>
<span className="px-1.5 py-0.5 rounded bg-slate-50 text-slate-500 text-[9px] font-semibold uppercase tracking-wider border border-slate-100">L-Theanine</span>
</div>
<button className="w-full py-2 rounded-lg border border-slate-200 text-slate-900 text-xs font-medium hover:bg-slate-900 hover:text-white transition-all active:scale-[0.98] flex items-center justify-center gap-2 group/btn">
                            Add to Cart
                            <iconify-icon className="group-hover/btn:translate-x-0.5 transition-transform" icon="lucide:plus" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300">
<div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
<div className="absolute inset-0 bg-slate-200">
<img alt="Maple Pecan Focus Bar" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute top-3 left-3 bg-amber-100/90 backdrop-blur px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase text-amber-800 border border-amber-200/50">
                            Snack
                        </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-sm font-semibold text-slate-900 tracking-tight leading-snug">Maple Pecan Focus Bar</h3>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">$3.50</span>
</div>
<p className="text-xs text-slate-500 mb-4 line-clamp-3 leading-relaxed">Rich, nutty flavor with hints of natural maple extract and sea salt. Sweetened with allulose/stevia.</p>
<div className="mt-auto mb-4 flex flex-wrap gap-1.5">
<span className="px-1.5 py-0.5 rounded bg-slate-50 text-slate-500 text-[9px] font-semibold uppercase tracking-wider border border-slate-100">Lion's Mane</span>
<span className="px-1.5 py-0.5 rounded bg-slate-50 text-slate-500 text-[9px] font-semibold uppercase tracking-wider border border-slate-100">Rhodiola</span>
</div>
<button className="w-full py-2 rounded-lg border border-slate-200 text-slate-900 text-xs font-medium hover:bg-slate-900 hover:text-white transition-all active:scale-[0.98] flex items-center justify-center gap-2 group/btn">
                            Add to Cart
                            <iconify-icon className="group-hover/btn:translate-x-0.5 transition-transform" icon="lucide:plus" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300">
<div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
<div className="absolute inset-0 bg-slate-200">
<img alt="Smoky Chipotle Resilience Sauce" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1529312266912-b33cf6227e2f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute top-3 left-3 bg-red-100/90 backdrop-blur px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase text-red-800 border border-red-200/50">
                            Pantry
                        </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-sm font-semibold text-slate-900 tracking-tight leading-snug">Chipotle Resilience Sauce</h3>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">$12.00</span>
</div>
<p className="text-xs text-slate-500 mb-4 line-clamp-3 leading-relaxed">Deep, smoky chipotle flavor with savory finish. No sugar needed for this umami-rich sauce.</p>
<div className="mt-auto mb-4 flex flex-wrap gap-1.5">
<span className="px-1.5 py-0.5 rounded bg-slate-50 text-slate-500 text-[9px] font-semibold uppercase tracking-wider border border-slate-100">Reishi Mushroom</span>
</div>
<button className="w-full py-2 rounded-lg border border-slate-200 text-slate-900 text-xs font-medium hover:bg-slate-900 hover:text-white transition-all active:scale-[0.98] flex items-center justify-center gap-2 group/btn">
                            Add to Cart
                            <iconify-icon className="group-hover/btn:translate-x-0.5 transition-transform" icon="lucide:plus" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300">
<div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
<div className="absolute inset-0 bg-slate-200">
<img alt="Golden Turmeric Immunity Blend" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1615486511484-92e172cc416d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute top-3 left-3 bg-yellow-100/90 backdrop-blur px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase text-yellow-800 border border-yellow-200/50">
                            Latte Mix
                        </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-sm font-semibold text-slate-900 tracking-tight leading-snug">Golden Turmeric Immunity</h3>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">$24.00</span>
</div>
<p className="text-xs text-slate-500 mb-4 line-clamp-3 leading-relaxed">Warm blend of turmeric, ginger, and cinnamon. Naturally creamy with coconut milk powder.</p>
<div className="mt-auto mb-4 flex flex-wrap gap-1.5">
<span className="px-1.5 py-0.5 rounded bg-slate-50 text-slate-500 text-[9px] font-semibold uppercase tracking-wider border border-slate-100">Turkey Tail</span>
<span className="px-1.5 py-0.5 rounded bg-slate-50 text-slate-500 text-[9px] font-semibold uppercase tracking-wider border border-slate-100">Astragalus</span>
</div>
<button className="w-full py-2 rounded-lg border border-slate-200 text-slate-900 text-xs font-medium hover:bg-slate-900 hover:text-white transition-all active:scale-[0.98] flex items-center justify-center gap-2 group/btn">
                            Add to Cart
                            <iconify-icon className="group-hover/btn:translate-x-0.5 transition-transform" icon="lucide:plus" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300">
<div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
<div className="absolute inset-0 bg-slate-200">
<img alt="Mango Chili Endurance Pop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute top-3 left-3 bg-orange-100/90 backdrop-blur px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase text-orange-800 border border-orange-200/50">
                            Frozen
                        </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-sm font-semibold text-slate-900 tracking-tight leading-snug">Mango Chili Endurance Pop</h3>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">$6.00</span>
</div>
<p className="text-xs text-slate-500 mb-4 line-clamp-3 leading-relaxed">Sweet and tangy mango balanced with a hint of lime and chili for a kick.</p>
<div className="mt-auto mb-4 flex flex-wrap gap-1.5">
<span className="px-1.5 py-0.5 rounded bg-slate-50 text-slate-500 text-[9px] font-semibold uppercase tracking-wider border border-slate-100">Cordyceps</span>
</div>
<button className="w-full py-2 rounded-lg border border-slate-200 text-slate-900 text-xs font-medium hover:bg-slate-900 hover:text-white transition-all active:scale-[0.98] flex items-center justify-center gap-2 group/btn">
                            Add to Cart
                            <iconify-icon className="group-hover/btn:translate-x-0.5 transition-transform" icon="lucide:plus" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300">
<div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
<div className="absolute inset-0 bg-slate-200">
<img alt="Ginger Sesame Vitality Dressing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1603569283847-aa295f0d016a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute top-3 left-3 bg-amber-100/90 backdrop-blur px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase text-amber-800 border border-amber-200/50">
                            Pantry
                        </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-sm font-semibold text-slate-900 tracking-tight leading-snug">Ginger Sesame Vitality</h3>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">$9.00</span>
</div>
<p className="text-xs text-slate-500 mb-4 line-clamp-3 leading-relaxed">Bright, zesty Asian-inspired dressing with fresh ginger, toasted sesame, and tamari.</p>
<div className="mt-auto mb-4 flex flex-wrap gap-1.5">
<span className="px-1.5 py-0.5 rounded bg-slate-50 text-slate-500 text-[9px] font-semibold uppercase tracking-wider border border-slate-100">Schisandra</span>
</div>
<button className="w-full py-2 rounded-lg border border-slate-200 text-slate-900 text-xs font-medium hover:bg-slate-900 hover:text-white transition-all active:scale-[0.98] flex items-center justify-center gap-2 group/btn">
                            Add to Cart
                            <iconify-icon className="group-hover/btn:translate-x-0.5 transition-transform" icon="lucide:plus" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300">
<div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
<div className="absolute inset-0 bg-slate-200">
<img alt="Vanilla Bean Serenity Cultured Coconut" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1488477181946-6428a029177b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute top-3 left-3 bg-slate-100/90 backdrop-blur px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase text-slate-800 border border-slate-200/50">
                            Dairy Free
                        </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-sm font-semibold text-slate-900 tracking-tight leading-snug">Vanilla Bean Serenity Yogurt</h3>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">$5.50</span>
</div>
<p className="text-xs text-slate-500 mb-4 line-clamp-3 leading-relaxed">Creamy coconut base with real vanilla bean specks. Subtle floral notes from the tulsi.</p>
<div className="mt-auto mb-4 flex flex-wrap gap-1.5">
<span className="px-1.5 py-0.5 rounded bg-slate-50 text-slate-500 text-[9px] font-semibold uppercase tracking-wider border border-slate-100">Holy Basil (Tulsi)</span>
</div>
<button className="w-full py-2 rounded-lg border border-slate-200 text-slate-900 text-xs font-medium hover:bg-slate-900 hover:text-white transition-all active:scale-[0.98] flex items-center justify-center gap-2 group/btn">
                            Add to Cart
                            <iconify-icon className="group-hover/btn:translate-x-0.5 transition-transform" icon="lucide:plus" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300">
<div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
<div className="absolute inset-0 bg-slate-200">
<img alt="Chocolate Maca Performance Blend" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1579722820308-d74e571900a9?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute top-3 left-3 bg-stone-100/90 backdrop-blur px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase text-stone-800 border border-stone-200/50">
                            Protein
                        </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-sm font-semibold text-slate-900 tracking-tight leading-snug">Chocolate Maca Blend</h3>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">$35.00</span>
</div>
<p className="text-xs text-slate-500 mb-4 line-clamp-3 leading-relaxed">Deep, dark chocolate flavor derived from high-quality cocoa. Uses stevia and monk fruit.</p>
<div className="mt-auto mb-4 flex flex-wrap gap-1.5">
<span className="px-1.5 py-0.5 rounded bg-slate-50 text-slate-500 text-[9px] font-semibold uppercase tracking-wider border border-slate-100">Maca</span>
<span className="px-1.5 py-0.5 rounded bg-slate-50 text-slate-500 text-[9px] font-semibold uppercase tracking-wider border border-slate-100">Ginseng</span>
</div>
<button className="w-full py-2 rounded-lg border border-slate-200 text-slate-900 text-xs font-medium hover:bg-slate-900 hover:text-white transition-all active:scale-[0.98] flex items-center justify-center gap-2 group/btn">
                            Add to Cart
                            <iconify-icon className="group-hover/btn:translate-x-0.5 transition-transform" icon="lucide:plus" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300">
<div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
<div className="absolute inset-0 bg-slate-200">
<img alt="Lemon Ginger Hydration Drops" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1515592305391-7f93e32b388b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute top-3 left-3 bg-cyan-100/90 backdrop-blur px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase text-cyan-800 border border-cyan-200/50">
                            Hydration
                        </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-sm font-semibold text-slate-900 tracking-tight leading-snug">Lemon Ginger Drops</h3>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">$15.00</span>
</div>
<p className="text-xs text-slate-500 mb-4 line-clamp-3 leading-relaxed">Concentrated citrus and spice drops to add to water. A natural electrolyte boost.</p>
<div className="mt-auto mb-4 flex flex-wrap gap-1.5">
<span className="px-1.5 py-0.5 rounded bg-slate-50 text-slate-500 text-[9px] font-semibold uppercase tracking-wider border border-slate-100">Eleuthero</span>
</div>
<button className="w-full py-2 rounded-lg border border-slate-200 text-slate-900 text-xs font-medium hover:bg-slate-900 hover:text-white transition-all active:scale-[0.98] flex items-center justify-center gap-2 group/btn">
                            Add to Cart
                            <iconify-icon className="group-hover/btn:translate-x-0.5 transition-transform" icon="lucide:plus" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300">
<div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
<div className="absolute inset-0 bg-slate-200">
<img alt="Cacao Almond Mood Booster" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1536591375315-196000ea3678?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute top-3 left-3 bg-indigo-100/90 backdrop-blur px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase text-indigo-800 border border-indigo-200/50">
                            Snack
                        </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-sm font-semibold text-slate-900 tracking-tight leading-snug">Cacao Almond Mood Cluster</h3>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">$7.00</span>
</div>
<p className="text-xs text-slate-500 mb-4 line-clamp-3 leading-relaxed">Clusters of dry-roasted almonds, cocoa nibs, and sea salt. Rich, slightly bitter, and deeply satisfying.</p>
<div className="mt-auto mb-4 flex flex-wrap gap-1.5">
<span className="px-1.5 py-0.5 rounded bg-slate-50 text-slate-500 text-[9px] font-semibold uppercase tracking-wider border border-slate-100">Mucuna Pruriens</span>
</div>
<button className="w-full py-2 rounded-lg border border-slate-200 text-slate-900 text-xs font-medium hover:bg-slate-900 hover:text-white transition-all active:scale-[0.98] flex items-center justify-center gap-2 group/btn">
                            Add to Cart
                            <iconify-icon className="group-hover/btn:translate-x-0.5 transition-transform" icon="lucide:plus" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-slate-900 mb-8">Make the switch.</h2>
<div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
<div className="flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-left flex-1">
<h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-2">Before</h4>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-500">
<iconify-icon className="text-red-400" icon="lucide:x" width="16"></iconify-icon>
                                Afternoon energy crash
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-500">
<iconify-icon className="text-red-400" icon="lucide:x" width="16"></iconify-icon>
                                Bloating &amp; discomfort
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-500">
<iconify-icon className="text-red-400" icon="lucide:x" width="16"></iconify-icon>
                                Brain fog
                            </li>
</ul>
</div>
<div className="flex items-center justify-center">
<iconify-icon className="text-slate-300 hidden md:block" icon="lucide:arrow-right" width="32"></iconify-icon>
<iconify-icon className="text-slate-300 block md:hidden" icon="lucide:arrow-down" width="32"></iconify-icon>
</div>
<div className="text-left flex-1">
<h4 className="text-sm font-semibold text-emerald-700 uppercase tracking-wide mb-2">After</h4>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
<iconify-icon className="text-emerald-500" icon="lucide:check" width="16"></iconify-icon>
                                Sustained cognitive focus
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
<iconify-icon className="text-emerald-500" icon="lucide:check" width="16"></iconify-icon>
                                Gut microbiome support
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
<iconify-icon className="text-emerald-500" icon="lucide:check" width="16"></iconify-icon>
                                Guilt-free pleasure
                            </li>
</ul>
</div>
</div>
</div>
<div className="mt-12">
<form className="max-w-md mx-auto relative group">
<input className="w-full pl-4 pr-12 py-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all shadow-sm group-hover:shadow-md" placeholder="Enter your email for 15% off" type="email"/>
<button className="absolute right-2 top-1.5 p-1.5 bg-slate-900 text-white rounded-md hover:bg-emerald-600 transition-colors" type="button">
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</form>
<p className="text-[10px] text-slate-400 mt-3">Join 10,000+ healthy eaters. No spam, ever.</p>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="bg-slate-900 text-white w-6 h-6 rounded flex items-center justify-center font-bold text-xs">L</div>
<span className="text-xs font-semibold text-slate-900 tracking-tight uppercase">The Little Treats of Life</span>
</div>
<div className="flex gap-8 text-xs font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-900 transition-colors" href="#">Sourcing</a>
</div>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="16"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
