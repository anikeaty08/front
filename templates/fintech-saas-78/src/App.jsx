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
      

<div className="bg-[#00E0B0] text-slate-900 text-xs font-semibold py-2.5 text-center uppercase tracking-wide flex justify-center items-center gap-2 cursor-pointer transition hover:bg-[#00cfa0]">
<span>News</span>
<span className="font-medium">Alkemify just rebranded !</span>
<i className="w-3 h-3 stroke-[2]" data-lucide="arrow-right"></i>
</div>

<nav className="flex justify-between items-center py-5 px-6 max-w-[1400px] mx-auto w-full">
<div className="flex items-center gap-12">
<a className="text-2xl font-medium tracking-tight" href="#">Alkemify</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-gray-500 hover:text-slate-900 uppercase tracking-wide flex items-center gap-1" href="#">Platform</a>
<a className="text-xs font-medium text-gray-500 hover:text-slate-900 uppercase tracking-wide flex items-center gap-1" href="#">
                    Solution <i className="w-3 h-3" data-lucide="chevron-down"></i>
</a>
<a className="text-xs font-medium text-gray-500 hover:text-slate-900 uppercase tracking-wide flex items-center gap-1" href="#">
                    Use Cases <i className="w-3 h-3" data-lucide="chevron-down"></i>
</a>
<a className="text-xs font-medium text-gray-500 hover:text-slate-900 uppercase tracking-wide" href="#">Resources</a>
</div>
</div>
<div className="flex items-center gap-6">
<button className="flex items-center gap-2 text-gray-500 hover:text-slate-900">

<svg className="rounded-sm shadow-sm overflow-hidden" height="15" viewbox="0 0 30 20" width="20">
<rect fill="#0055A4" height="20" width="10"></rect>
<rect fill="#FFFFFF" height="20" width="10" x="10"></rect>
<rect fill="#EF4135" height="20" width="10" x="20"></rect>
</svg>
<i className="w-3 h-3" data-lucide="chevron-down"></i>
</button>
<a className="bg-slate-900 text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-slate-800 transition shadow-sm" href="#">
                Connexion
            </a>
</div>
</nav>

<section className="max-w-[1400px] mx-auto px-6 pt-20 pb-16">
<div className="grid lg:grid-cols-2 gap-16">
<h1 className="text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1]">
                We can convert <br/> all transactions
            </h1>
<div className="flex flex-col justify-end items-start lg:pl-10 pb-2">
<p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna..
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="bg-slate-900 text-white px-10 py-3 rounded text-sm font-medium hover:bg-slate-800 transition text-center">
                        CTA 1
                    </button>
<button className="bg-gray-100 text-slate-900 px-10 py-3 rounded text-sm font-medium hover:bg-gray-200 transition text-center">
                        CTA 2
                    </button>
</div>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 mb-24">
<div className="grid lg:grid-cols-3 gap-6 h-auto lg:h-[500px]">

<div className="lg:col-span-2 bg-slate-900 rounded-sm relative overflow-hidden flex items-center justify-center p-10 group">

<div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-transparent"></div>

<div className="relative bg-white rounded-2xl p-6 shadow-2xl w-full max-w-sm transform transition duration-500 group-hover:scale-[1.02]">

<div className="flex items-start justify-between mb-6">
<div className="flex gap-4">
<div className="w-16 h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
<img alt="Jacket" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<div className="flex flex-col justify-center">
<span className="text-xs text-gray-400">Product</span>
<span className="text-xl font-medium tracking-tight">Jacket</span>
</div>
</div>
<button className="text-gray-300 hover:text-gray-500 transition">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>

<div className="h-px bg-gray-100 w-full mb-4"></div>

<div className="space-y-3">
<div className="flex justify-between items-center">
<span className="text-lg font-medium tracking-tight">Reductions</span>
<span className="text-gray-400 text-sm">(2)</span>
</div>
<div className="flex justify-between items-center">
<span className="text-lg font-medium tracking-tight">Price</span>
<span className="text-lg font-medium tracking-tight">31,80$</span>
</div>
<div className="flex justify-between items-center">
<span className="text-gray-400 text-lg tracking-tight">Economy</span>
<span className="text-gray-400 text-sm line-through">12,40€</span>
</div>
</div>

<div className="mt-6 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-900 w-3/4 rounded-full"></div>
</div>
</div>
</div>

<div className="lg:col-span-1 h-[400px] lg:h-auto rounded-sm overflow-hidden relative">
<img alt="Man at desk" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 mb-24">
<div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 border-t border-b border-gray-100 py-12">

<div className="flex flex-col gap-3 group cursor-pointer">
<h3 className="text-xs font-medium text-gray-400 uppercase tracking-widest group-hover:text-slate-900 transition">Experience</h3>
<p className="text-sm text-gray-400">Short description of the problem</p>
</div>

<div className="flex flex-col gap-3 group cursor-pointer">
<h3 className="text-xs font-medium text-gray-400 uppercase tracking-widest group-hover:text-slate-900 transition">Infrastructure</h3>
<p className="text-sm text-gray-400">Short description of the problem</p>
</div>

<div className="flex flex-col gap-3">
<h3 className="text-xs font-semibold text-slate-900 uppercase tracking-widest flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
                    Intelligence
                </h3>
<p className="text-sm text-gray-500">Short description of the problem</p>
</div>

<div className="flex flex-col gap-3 group cursor-pointer">
<h3 className="text-xs font-medium text-gray-400 uppercase tracking-widest group-hover:text-slate-900 transition">Data</h3>
<p className="text-sm text-gray-400">Short description of the problem</p>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 mb-32 text-center">
<p className="text-sm font-medium text-slate-500 mb-10">Trusted by leading brands</p>
<div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition duration-500">

<span className="font-serif text-4xl text-slate-900 italic tracking-tighter font-semibold">ba&amp;sh</span>

<span className="font-sans text-3xl text-slate-900 font-extrabold tracking-tight scale-y-75 transform border-b-4 border-slate-900 pb-1">IKKS</span>

<span className="font-serif text-3xl text-slate-900 tracking-widest">LVMH</span>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 pb-32 relative">

<div className="absolute left-0 bottom-0 w-64 h-64 bg-dot-pattern-teal opacity-30 -z-10 hidden lg:block"></div>
<div className="grid lg:grid-cols-2 gap-20">

<div className="flex flex-col justify-start pt-10">
<h2 className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-2 text-slate-900">
                    Where you have <br/> problem.
                </h2>
<h2 className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.1] text-gray-200">
                    We have solutions.
                </h2>
</div>

<div className="space-y-6">

<div className="bg-gray-50 p-10 rounded-lg hover:bg-gray-100 transition cursor-default">
<h4 className="text-2xl font-medium tracking-tight mb-2">Problem name</h4>
<p className="text-lg text-gray-500">Short description of the problem</p>
</div>

<div className="bg-gray-50 p-10 rounded-lg hover:bg-gray-100 transition cursor-default">
<h4 className="text-2xl font-medium tracking-tight mb-2">Problem name</h4>
<p className="text-lg text-gray-500">Short description of the problem</p>
</div>

<div className="bg-gray-50 p-10 rounded-lg hover:bg-gray-100 transition cursor-default">
<h4 className="text-2xl font-medium tracking-tight mb-2">Problem name</h4>
<p className="text-lg text-gray-500">Short description of the problem</p>
</div>
</div>
</div>
</section>


    </>
  );
}
