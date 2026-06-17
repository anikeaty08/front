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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
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
      

<div className="bg-white border-b border-slate-100">
<div className="max-w-[1400px] mx-auto px-6 h-12 flex items-center justify-end space-x-8 text-sm font-medium text-slate-500 tracking-wide">
<a className="hover:text-[#003366] transition-colors" href="#">Group</a>
<a className="hover:text-[#003366] transition-colors" href="#">Service &amp; Support</a>
<a className="hover:text-[#003366] transition-colors" href="#">Where to find us</a>
<a className="hover:text-[#003366] transition-colors" href="#">Career</a>
<div className="flex items-center space-x-1 cursor-pointer hover:text-[#003366]">
<i className="w-4 h-4" data-lucide="globe"></i>
<span>EN</span>
<i className="w-3 h-3" data-lucide="chevron-down"></i>
</div>
<a className="bg-[#003366] text-white px-5 py-1.5 rounded-full hover:bg-[#002244] transition-colors flex items-center gap-2 shadow-sm hover:shadow-md" href="#">
<i className="w-3.5 h-3.5" data-lucide="shopping-cart"></i>
<span>E-shop</span>
</a>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex-shrink-0 mr-12" href="#">

<img alt="Poclain Hydraulics" className="h-8 w-auto" src="https://cdn.worldvectorlogo.com/logos/poclain.svg"/>
</a>

<div className="hidden lg:flex items-center space-x-10 h-full">

<div className="group h-full flex items-center border-b-2 border-transparent hover:border-[#003366] transition-all">
<a className="text-lg font-medium text-slate-800 group-hover:text-[#003366] flex items-center gap-1" href="#">
                        Product
                        <i className="w-4 h-4 mt-0.5 text-slate-400 group-hover:text-[#003366]" data-lucide="chevron-down"></i>
</a>

<div className="mega-menu absolute left-0 top-full w-full bg-white border-t border-slate-100 shadow-xl py-12">
<div className="max-w-[1400px] mx-auto px-6 grid grid-cols-4 gap-12">
<div>
<h4 className="text-[#003366] text-sm font-semibold uppercase tracking-wider mb-6">Motors</h4>
<ul className="space-y-4">
<li><a className="text-lg text-slate-600 hover:text-[#003366] flex items-center gap-2 group/link" href="#"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/link:bg-[#003366]"></span> MS Series</a></li>
<li><a className="text-lg text-slate-600 hover:text-[#003366] flex items-center gap-2 group/link" href="#"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/link:bg-[#003366]"></span> MK Series</a></li>
<li><a className="text-lg text-slate-600 hover:text-[#003366] flex items-center gap-2 group/link" href="#"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/link:bg-[#003366]"></span> MG Steerable</a></li>
<li><a className="text-lg text-slate-600 hover:text-[#003366] flex items-center gap-2 group/link" href="#"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/link:bg-[#003366]"></span> MHP High Performance</a></li>
</ul>
</div>
<div>
<h4 className="text-[#003366] text-sm font-semibold uppercase tracking-wider mb-6">Pumps &amp; Valves</h4>
<ul className="space-y-4">
<li><a className="text-lg text-slate-600 hover:text-[#003366] flex items-center gap-2 group/link" href="#"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/link:bg-[#003366]"></span> PM Pumps</a></li>
<li><a className="text-lg text-slate-600 hover:text-[#003366] flex items-center gap-2 group/link" href="#"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/link:bg-[#003366]"></span> PW Pumps</a></li>
<li><a className="text-lg text-slate-600 hover:text-[#003366] flex items-center gap-2 group/link" href="#"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/link:bg-[#003366]"></span> Brake Valves</a></li>
<li><a className="text-lg text-slate-600 hover:text-[#003366] flex items-center gap-2 group/link" href="#"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/link:bg-[#003366]"></span> Motion Control</a></li>
</ul>
</div>
<div>
<h4 className="text-[#003366] text-sm font-semibold uppercase tracking-wider mb-6">Electronics</h4>
<ul className="space-y-4">
<li><a className="text-lg text-slate-600 hover:text-[#003366] flex items-center gap-2 group/link" href="#"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/link:bg-[#003366]"></span> Controllers (SD)</a></li>
<li><a className="text-lg text-slate-600 hover:text-[#003366] flex items-center gap-2 group/link" href="#"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/link:bg-[#003366]"></span> Displays</a></li>
<li><a className="text-lg text-slate-600 hover:text-[#003366] flex items-center gap-2 group/link" href="#"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/link:bg-[#003366]"></span> Sensors</a></li>
<li><a className="text-lg text-slate-600 hover:text-[#003366] flex items-center gap-2 group/link" href="#"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/link:bg-[#003366]"></span> Software CT Design</a></li>
</ul>
</div>
<div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col justify-end relative overflow-hidden group/card cursor-pointer">
<img alt="Motor detail" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover/card:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#003366]/90 to-transparent"></div>
<div className="relative z-10">
<h3 className="text-white text-xl font-medium mb-1">New MS HighFlow</h3>
<p className="text-slate-200 text-sm mb-3">Maximize efficiency in demanding environments.</p>
<span className="text-white text-sm font-semibold flex items-center gap-1">Explore <i className="w-4 h-4" data-lucide="arrow-right"></i></span>
</div>
</div>
</div>
</div>
</div>

<div className="group h-full flex items-center border-b-2 border-[#003366]">
<a className="text-lg font-medium text-[#003366] flex items-center gap-1" href="#">
                        Solutions
                        <i className="w-4 h-4 mt-0.5 text-[#003366]" data-lucide="chevron-up"></i>
</a>

<div className="mega-menu !opacity-100 !visible !translate-y-0 absolute left-0 top-full w-full bg-white border-t border-slate-100 shadow-2xl py-12 z-40">
<div className="max-w-[1400px] mx-auto px-6 flex gap-12">

<div className="w-1/4 border-r border-slate-100 pr-8">
<h3 className="text-2xl font-medium text-slate-800 mb-2 tracking-tight">Industry Applications</h3>
<p className="text-lg text-slate-500 mb-6">Tailored hydraulic systems for every sector.</p>
<a className="text-[#003366] font-medium flex items-center gap-2 hover:gap-3 transition-all" href="#">
                                    View all markets <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="w-3/4 grid grid-cols-3 gap-8">
<a className="group/item block" href="#">
<div className="h-40 rounded-lg bg-slate-100 mb-4 overflow-hidden relative">
<img alt="Construction" className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover/item:bg-black/0 transition-colors"></div>
</div>
<h4 className="text-lg font-medium text-slate-800 mb-1 group-hover/item:text-[#003366]">Construction</h4>
<p className="text-slate-500 text-sm leading-relaxed">Excavators, loaders, and road machinery.</p>
</a>
<a className="group/item block" href="#">
<div className="h-40 rounded-lg bg-slate-100 mb-4 overflow-hidden relative">
<img alt="Agriculture" className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover/item:bg-black/0 transition-colors"></div>
</div>
<h4 className="text-lg font-medium text-slate-800 mb-1 group-hover/item:text-[#003366]">Agriculture</h4>
<p className="text-slate-500 text-sm leading-relaxed">Harvesters, sprayers, and forestry.</p>
</a>
<a className="group/item block" href="#">
<div className="h-40 rounded-lg bg-slate-100 mb-4 overflow-hidden relative">
<img alt="Material Handling" className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/10 group-hover/item:bg-black/0 transition-colors"></div>
</div>
<h4 className="text-lg font-medium text-slate-800 mb-1 group-hover/item:text-[#003366]">Material Handling</h4>
<p className="text-slate-500 text-sm leading-relaxed">Forklifts, AGVs, and heavy transport.</p>
</a>
</div>
</div>
<div className="w-full h-1.5 bg-gradient-to-r from-[#003366] via-[#0055aa] to-[#10B981] absolute bottom-0"></div>
</div>
</div>
<a className="text-lg font-medium text-slate-800 hover:text-[#003366] transition-colors" href="#">Resources</a>
<a className="text-lg font-medium text-slate-800 hover:text-[#003366] transition-colors" href="#">News</a>
<a className="text-lg font-medium text-slate-800 hover:text-[#003366] transition-colors" href="#">Contact</a>
</div>

<div className="flex items-center gap-6">
<button className="text-slate-400 hover:text-[#003366] transition-colors">
<i className="w-6 h-6" data-lucide="search"></i>
</button>
<button className="lg:hidden text-slate-800">
<i className="w-8 h-8" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<header className="relative bg-[#003366] min-h-[85vh] flex items-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Heavy Machinery" className="w-full h-full object-cover opacity-40 mix-blend-overlay" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&amp;fit=crop&amp;q=80&amp;w=2500"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#003366] via-[#003366]/80 to-transparent"></div>
</div>

<div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full pt-20">
<div className="max-w-3xl">
<span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium tracking-wide mb-6 backdrop-blur-sm">
                    Powering the Future
                </span>
<h1 className="text-6xl md:text-8xl font-medium text-white tracking-tight leading-[0.95] mb-8">
                    Hydraulics <br/>
<span className="text-slate-300">and Beyond.</span>
</h1>
<p className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed mb-10 max-w-2xl">
                    World-class hydrostatic transmissions and electrification solutions for heavy-duty mobile machinery.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-white text-[#003366] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors flex items-center justify-center gap-2" href="#">
                        Discover Solutions
                        <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
<a className="border border-slate-400 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-white/10 transition-colors flex items-center justify-center" href="#">
                        Contact Sales
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-0 right-0 p-12 hidden lg:flex gap-16 border-t border-white/10 bg-[#003366]/50 backdrop-blur-md rounded-tl-3xl">
<div>
<p className="text-4xl font-semibold text-white tracking-tight">2.5K+</p>
<p className="text-slate-400 text-sm mt-1">Global Employees</p>
</div>
<div>
<p className="text-4xl font-semibold text-white tracking-tight">20+</p>
<p className="text-slate-400 text-sm mt-1">Countries</p>
</div>
<div>
<p className="text-4xl font-semibold text-white tracking-tight">1M+</p>
<p className="text-slate-400 text-sm mt-1">Motors Deployed</p>
</div>
</div>
</header>

<section className="py-24 bg-[#F4F4F4]">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-4">Innovation in Motion</h2>
<p className="text-xl text-slate-500 max-w-2xl">Pioneering technologies that redefine efficiency and performance.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-[#003366] font-medium text-lg hover:gap-3 transition-all mt-4 md:mt-0" href="#">
                    All Innovations <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl p-1 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
<div className="relative h-64 overflow-hidden rounded-xl bg-slate-900">
<img alt="Electrification" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute top-4 left-4">
<span className="bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded uppercase tracking-wider">e-Mobility</span>
</div>
</div>
<div className="p-8">
<h3 className="text-2xl font-medium text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">Electrification</h3>
<p className="text-lg text-slate-500 mb-6 leading-relaxed">High-performance electric powertrains and electro-hydraulic systems for zero-emission machinery.</p>
<span className="text-emerald-600 font-medium flex items-center gap-2">Learn more <i className="w-4 h-4" data-lucide="zap"></i></span>
</div>
</div>

<div className="group bg-white rounded-2xl p-1 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
<div className="relative h-64 overflow-hidden rounded-xl bg-slate-100">
<img alt="Hydraulic System" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute top-4 left-4">
<span className="bg-[#003366] text-white text-xs font-semibold px-3 py-1 rounded uppercase tracking-wider">Hydraulics</span>
</div>
</div>
<div className="p-8">
<h3 className="text-2xl font-medium text-slate-900 mb-3 group-hover:text-[#003366] transition-colors">HEVO Program</h3>
<p className="text-lg text-slate-500 mb-6 leading-relaxed">High Efficiency Valley Offers. Optimized hydraulic solutions delivering superior energy savings.</p>
<span className="text-[#003366] font-medium flex items-center gap-2">Explore HEVO <i className="w-4 h-4" data-lucide="activity"></i></span>
</div>
</div>

<div className="group bg-white rounded-2xl p-1 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
<div className="relative h-64 overflow-hidden rounded-xl bg-slate-900">

<img alt="Technical Support" className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1580983561371-7f4b242d8ec0?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4">
<span className="bg-slate-700 text-white text-xs font-semibold px-3 py-1 rounded uppercase tracking-wider">Services</span>
</div>
</div>
<div className="p-8">
<h3 className="text-2xl font-medium text-slate-900 mb-3 group-hover:text-[#003366] transition-colors">Reference Offers</h3>
<p className="text-lg text-slate-500 mb-6 leading-relaxed">Comprehensive lifecycle support, connected services, and expert engineering consultancy.</p>
<span className="text-[#003366] font-medium flex items-center gap-2">View Services <i className="w-4 h-4" data-lucide="settings"></i></span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white overflow-hidden">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-20">
<div className="lg:w-1/2 relative">
<div className="absolute -top-20 -left-20 w-[140%] h-[140%] bg-blue-50/50 rounded-full blur-3xl -z-10"></div>

<img alt="Precision Hydraulic Motor" className="w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute -right-8 top-1/3 bg-white/80 backdrop-blur-md p-6 rounded-xl border border-white shadow-lg hidden md:block">
<div className="flex items-center gap-3 mb-2">
<div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
<span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Efficiency</span>
</div>
<p className="text-3xl font-medium text-[#003366]">98.4%</p>
<p className="text-sm text-slate-500">Volumetric Rating</p>
</div>
</div>
<div className="lg:w-1/2">
<h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-8">Engineering as an Art Form.</h2>
<p className="text-xl text-slate-500 mb-8 leading-relaxed">
                        Our radial piston technology isn't just machinery; it's the result of decades of obsession with precision. Designed for durability in the harshest environments on Earth.
                    </p>
<div className="grid grid-cols-2 gap-x-12 gap-y-8 mb-10">
<div>
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-[#003366] mb-4">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h4 className="text-lg font-medium text-slate-900 mb-2">Unmatched Durability</h4>
<p className="text-lg text-slate-500">Proven to last 30% longer in extreme pressure conditions.</p>
</div>
<div>
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-[#003366] mb-4">
<i className="w-6 h-6" data-lucide="maximize"></i>
</div>
<h4 className="text-lg font-medium text-slate-900 mb-2">Compact Power</h4>
<p className="text-lg text-slate-500">Higher power density allows for sleeker machine designs.</p>
</div>
</div>
<a className="inline-flex items-center justify-center px-8 py-4 border border-[#003366] text-[#003366] rounded-lg font-medium text-lg hover:bg-[#003366] hover:text-white transition-all duration-300" href="#">
                        View Product Catalog
                    </a>
</div>
</div>
</div>
</section>


    </>
  );
}
