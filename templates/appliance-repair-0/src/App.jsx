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
      

<nav className="border-b border-slate-100 bg-white sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2 group cursor-pointer">
<div className="bg-blue-600 text-white p-1.5 rounded-lg group-hover:bg-blue-700 transition-colors">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="wrench"></i>
</div>
<div className="flex flex-col leading-none">
<span className="text-xl font-semibold tracking-tight text-slate-900">TOTAL</span>
<span className="text-xs text-slate-500 uppercase tracking-widest">Appliance Service</span>
</div>
</div>

<div className="hidden lg:flex items-center gap-8 text-base font-medium text-slate-500">
<a className="text-blue-600 hover:text-blue-700" href="#">Home</a>
<a className="hover:text-slate-900 transition-colors" href="#">Appliance Service</a>
<a className="hover:text-slate-900 transition-colors" href="#">Parts</a>
<a className="hover:text-slate-900 transition-colors" href="#">About Us</a>
<a className="hover:text-slate-900 transition-colors" href="#">Reviews</a>
<a className="flex items-center gap-1 hover:text-slate-900 transition-colors group" href="#">
                    Request Service 
                    <i className="w-4 h-4 stroke-[1.5] group-hover:translate-y-0.5 transition-transform" data-lucide="chevron-down"></i>
</a>
<a className="hover:text-slate-900 transition-colors" href="#">Careers</a>
</div>

<button className="lg:hidden text-slate-900">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative">
<div className="w-full h-[500px] overflow-hidden">
<img alt="Luxury Kitchen" className="w-full h-full object-cover object-center brightness-95 hover:scale-105 transition-transform duration-[2s]" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2400&amp;q=80"/>
</div>
</header>

<section className="bg-slate-900 py-12 px-6 border-b border-slate-800">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
<button className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-400 text-white text-lg font-medium py-3 px-8 rounded-lg transition-all shadow-lg shadow-emerald-900/20 hover:shadow-emerald-900/40 flex items-center justify-center gap-2">
<span>Contact Total Appliance in Cleveland</span>
<i className="w-5 h-5 stroke-[1.5]" data-lucide="arrow-right"></i>
</button>
<button className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-400 text-white text-lg font-medium py-3 px-8 rounded-lg transition-all shadow-lg shadow-emerald-900/20 hover:shadow-emerald-900/40 flex items-center justify-center gap-2">
<span>Contact Total Appliance in Pittsburgh</span>
<i className="w-5 h-5 stroke-[1.5]" data-lucide="arrow-right"></i>
</button>
</div>
</section>

<section className="bg-slate-50 py-16 px-6">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-normal text-blue-900 tracking-tight leading-tight">
                Appliance Repair in Northeast Ohio and Pittsburgh Areas
            </h2>
<div className="h-1 w-24 bg-blue-200 mx-auto mt-6 rounded-full"></div>
</div>
</section>

<section className="py-16 px-6 bg-white border-b border-slate-100">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-16 items-center justify-items-center opacity-80">

<div className="text-3xl font-serif italic font-bold text-slate-800 tracking-widest border-b-2 border-slate-800 pb-1">SUB<span className="text-blue-400">*</span>ZERO</div>
<div className="flex items-center gap-2 text-3xl font-sans font-bold text-slate-700 tracking-widest">
<i className="w-8 h-8 text-red-600 fill-current" data-lucide="flame"></i> WOLF
                </div>
<div className="text-3xl font-sans font-medium text-slate-600 tracking-[0.2em] uppercase bg-slate-100 px-4 py-1 rounded">COVE</div>
<div className="text-4xl font-serif italic text-yellow-500 -rotate-2">Whirlpool</div>
<div className="text-2xl font-mono text-slate-900 font-bold flex items-center gap-1">
<span className="text-blue-500 italic">S</span>cotsman
                </div>
<div className="text-2xl font-sans font-bold text-slate-900 flex items-center gap-2">
<div className="bg-black text-white p-1 text-xs">J</div> JENN-AIR
                </div>
<div className="text-2xl font-bold text-red-600 tracking-tight">KitchenAid</div>
<div className="text-2xl font-bold text-slate-800 uppercase tracking-tighter border-2 border-slate-800 px-2">Kenmore</div>
</div>
<p className="text-center text-slate-400 text-lg mt-12">Authorized service for major premium brands</p>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative group">
<div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-slate-100 rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform duration-500"></div>
<img alt="Modern Kitchen Appliance Service" className="relative rounded-lg shadow-2xl w-full h-[500px] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl border border-slate-100 max-w-xs hidden md:block">
<div className="flex items-start gap-4">
<div className="bg-blue-50 p-3 rounded-full text-blue-600">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="check-circle"></i>
</div>
<div>
<p className="text-lg font-medium text-slate-900">Factory Certified</p>
<p className="text-base text-slate-500 mt-1">Specialized in Sub-Zero, Wolf, and Cove appliances.</p>
</div>
</div>
</div>
</div>

<div className="space-y-8">
<h3 className="text-3xl text-slate-900 font-medium tracking-tight leading-tight">
                    Reliable Service for Your Premium Home
                </h3>
<div className="space-y-6 text-lg leading-relaxed text-slate-600">
<p>
<span className="font-medium text-slate-900">Total Appliance Service Inc</span> offers <span className="font-medium text-slate-900">fast, reliable appliance service and repair</span>. With over 30 years of experience, there is no one better in <span className="font-medium text-slate-900">Broadview Heights, OH</span> or <span className="font-medium text-slate-900">Pittsburgh</span> to call for all your household appliance repair needs.
                    </p>
<p>
                        Total Appliance Service Inc is the ONLY factory certified service provider for Sub-Zero and Wolf in Northeast Ohio and Pittsburgh, Pennsylvania. Though we specialize in Sub-Zero and Wolf, we provide quality service for every major brand.
                    </p>
<div className="bg-blue-50 border border-blue-100 rounded-xl p-8 mt-6">
<p className="mb-4 font-medium text-blue-900">Call our office to receive service on your in-home appliance repair.</p>
<div className="flex flex-col sm:flex-row gap-6">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-blue-600 stroke-[1.5]" data-lucide="phone"></i>
<span className="font-medium text-slate-900">(440) 526-2544</span>
<span className="text-sm text-slate-500">Cleveland, OH</span>
</div>
<div className="w-px h-6 bg-blue-200 hidden sm:block"></div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-blue-600 stroke-[1.5]" data-lucide="phone"></i>
<span className="font-medium text-slate-900">(724)-241-8815</span>
<span className="text-sm text-slate-500">Pittsburgh, PA</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12 px-6 mt-12">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<i className="w-4 h-4 text-slate-400 stroke-[1.5]" data-lucide="wrench"></i>
<span>© 2024 Total Appliance Service, Inc. All rights reserved.</span>
</div>
<div className="flex gap-6">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-slate-900 transition-colors" href="#">Sitemap</a>
</div>
</div>
</footer>


    </>
  );
}
