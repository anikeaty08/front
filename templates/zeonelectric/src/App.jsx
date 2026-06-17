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



        // Initialize Lucide Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5,
                'class': "lucide"
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
      

<header className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-white/10 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="relative w-10 h-10 overflow-hidden rounded-lg">
<img alt="Zeon Electric Logo" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a23b7c6-e630-417d-bad0-a772ee83e5ba_320w.jpg"/>
</div>
<span className="text-white text-xl font-medium tracking-tight">Zeon Electric</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="hover:text-white transition-colors text-sm font-medium text-gray-300" href="https://www.zeonelectric-services.aura.build">Services</a>
<a className="text-sm text-gray-300 hover:text-white transition-colors font-medium" href="#about">About</a>
<a className="text-sm text-gray-300 hover:text-white transition-colors font-medium" href="#reviews">Reviews</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-white text-sm font-medium hover:text-blue-400 transition-colors" href="tel:+1234567890">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="">(800) 555-0199</span>
</a>
<a className="bg-white text-black text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-100 transition-all transform hover:scale-[1.02] active:scale-[0.98]" href="#schedule">
                    Schedule Service
                </a>
</div>
</div>
</header>

<section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Electrician wiring a modern home" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 backdrop-blur-md mb-6">
<span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
<span className="text-blue-200 text-xs font-medium tracking-wide uppercase">Available 24/7 for Emergencies</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                    Powering modern life with precision.
                </h1>
<p className="text-xl text-gray-300 mb-10 font-light max-w-lg leading-relaxed">
                    Expert electrical solutions for homeowners and businesses. From panel upgrades to smart lighting, we ensure your space is safe, efficient, and bright.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20 text-base" href="#schedule">
                        Schedule Service
                        <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/20 transition-all text-base" href="tel:+18005550199">
<svg className="lucide lucide-phone-call w-4 h-4" data-lucide="phone-call" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                        Call Now
                    </a>
</div>
</div>
</div>
</section>

<section className="border-b border-gray-100 bg-white">
<div className="max-w-7xl mx-auto px-6 py-12">
<p className="text-center text-sm text-slate-500 font-medium mb-8">TRUSTED BY MODERN HOMEOWNERS &amp; BUSINESSES</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale">

<div className="h-8 flex items-center gap-2">
<div className="w-6 h-6 bg-slate-800 rounded-sm"></div>
<span className="font-semibold text-xl tracking-tight text-slate-800">VANTAGE</span>
</div>
<div className="h-8 flex items-center gap-2">
<div className="w-6 h-6 border-2 border-slate-800 rounded-full"></div>
<span className="font-semibold text-xl tracking-tight text-slate-800">Orbit</span>
</div>
<div className="h-8 flex items-center gap-2">
<div className="w-6 h-6 rotate-45 bg-slate-800"></div>
<span className="font-semibold text-xl tracking-tight text-slate-800">NEXUS</span>
</div>
<div className="h-8 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-800"></div>
<span className="font-semibold text-xl tracking-tight text-slate-800">struct</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden" id="services">

<div className="z-10 w-full max-w-7xl mr-auto ml-auto pt-10 pr-6 pb-20 pl-6 relative">

<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="md:text-4xl text-3xl font-semibold text-slate-900 tracking-tight mb-6">Why Choose Zeon Electric</h2>
<p className="text-lg text-slate-600 leading-relaxed font-light">
            We combine technical expertise with respectful service. Whether it's a flickering light or a full panel upgrade, we handle it with care.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 cursor-pointer">
<div className="h-64 overflow-hidden relative">
<div className="group-hover:bg-transparent transition-colors duration-300 bg-slate-900/5 bg-[url(https://images.unsplash.com/photo-1576446468729-7674e99608f5?w=800&amp;q=80)] bg-cover bg-center z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Wiring Infrastructure" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 border border-blue-100">
<svg className="lucide lucide-cable w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z"></path><path d="M17 21v-2"></path><path d="M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10"></path><path d="M21 21v-2"></path><path d="M3 5V3"></path><path d="M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z"></path><path d="M7 5V3"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Wiring &amp; Infrastructure</h3>
<p className="text-slate-500 font-light mb-8 leading-relaxed">Whole-home rewiring, renovation support, and safe removal of outdated knob-and-tube or aluminum wiring.</p>
<div className="mt-auto pt-6 border-t border-slate-100">
<span className="text-sm font-medium text-slate-900 group-hover:text-blue-600 flex items-center gap-2 transition-colors group-hover:gap-3">
                        View Details <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</div>

<div className="group flex flex-col bg-white rounded:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 cursor-pointer">
<div className="h-64 overflow-hidden relative">
<div className="group-hover:bg-transparent transition-colors duration-300 z-10 bg-slate-900/5 bg-[url(https://images.unsplash.com/photo-1660330589257-813305a4a383?w=800&amp;q=80)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Smart Panels" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-6 border border-indigo-100">
<svg className="lucide lucide-zap w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4z"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Smart Panels &amp; Power</h3>
<p className="text-slate-500 font-light mb-8 leading-relaxed">Modernize your electrical panel to handle today's appliances, EV chargers, and smart home ecosystems.</p>
<div className="mt-auto pt-6 border-t border-slate-100">
<span className="text-sm font-medium text-slate-900 group-hover:text-blue-600 flex items-center gap-2 transition-colors group-hover:gap-3">
                        View Details <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 cursor-pointer">
<div className="h-64 overflow-hidden relative">
<div className="group-hover:bg-transparent transition-colors duration-300 bg-slate-900/5 bg-[url(https://images.unsplash.com/photo-1759840529015-c54dfd772076?w=800&amp;q=80)] bg-cover bg-center z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Lighting Systems" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-6 border border-orange-100">
<svg className="lucide lucide-lightbulb w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Lighting &amp; Ambiance</h3>
<p className="text-slate-500 font-light mb-8 leading-relaxed">Installation of recessed lighting, custom fixtures, and intelligent lighting controls for any environment.</p>
<div className="mt-auto pt-6 border-t border-slate-100">
<span className="text-sm font-medium text-slate-900 group-hover:text-blue-600 flex items-center gap-2 transition-colors group-hover:gap-3">
                        View Details <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="md:text-4xl text-3xl font-semibold text-slate-900 tracking-tight mb-6" style={{}}>Our Full Services</h2>
<p className="leading-relaxed text-lg text-slate-600" style={{}}>Let us solve your electical problems. We are serving homeowners and businesses in Nashville, TN</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-search-check w-6 h-6" data-lucide="search-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 11 2 2 4-4"></path><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Troubleshooting</h3>
<p className="text-lg text-slate-500 font-light">
                        Expert diagnosis for flickering lights, dead outlets, and unexplained power surges. We find the root cause fast.
                    </p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-lightbulb w-6 h-6" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Lighting Systems</h3>
<p className="text-lg text-slate-500 font-light">
                        Installation, replacement, and repair. From recessed lighting to smart home integration and outdoor landscapes.
                    </p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-plug-2 w-6 h-6" data-lucide="plug-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 2v6"></path><path d="M15 2v6"></path><path d="M12 17v5"></path><path d="M5 8h14"></path><path d="M6 11V8h12v3a6 6 0 1 1-12 0Z"></path></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Plug &amp; Outlet Services</h3>
<p className="text-lg text-slate-500 font-light">
                        GFCI installation, USB outlet upgrades, and child-proof safety solutions for every room in your home.
                    </p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-cable w-6 h-6" data-lucide="cable" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z"></path><path d="M17 21v-2"></path><path d="M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10"></path><path d="M21 21v-2"></path><path d="M3 5V3"></path><path d="M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z"></path><path d="M7 5V3"></path></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Wiring Services</h3>
<p className="text-lg text-slate-500 font-light">
                        Whole-home rewiring, renovation support, and safe removal of outdated knob-and-tube or aluminum wiring.
                    </p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 md:col-span-2 lg:col-span-2">
<div className="flex flex-col md:flex-row gap-6 items-start">
<div className="w-12 h-12 bg-red-50 text-red-600 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-settings w-6 h-6" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Panel Work &amp; Upgrades</h3>
<p className="text-lg text-slate-500 font-light max-w-prose">
                                Modernize your electrical panel to handle today's appliances and EV chargers. We ensure your main service is up to code, safe, and ready for high-capacity loads.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-8">
                        Why neighbors trust Zeon.
                    </h2>
<div className="space-y-8">
<div className="flex gap-5">
<div className="shrink-0 mt-1">
<svg className="lucide lucide-shield-check text-blue-600 w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h4 className="text-xl font-medium text-slate-900 mb-2">Licensed &amp; Insured</h4>
<p className="text-lg text-slate-500 leading-relaxed">
                                    Fully certified technicians who adhere to the strictest safety standards. We treat your property with respect.
                                </p>
</div>
</div>
<div className="flex gap-5">
<div className="shrink-0 mt-1">
<svg className="lucide lucide-wallet text-blue-600 w-6 h-6" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<div className="">
<h4 className="text-xl font-medium text-slate-900 mb-2">Upfront Pricing</h4>
<p className="text-lg text-slate-500 leading-relaxed">
                                    No hidden fees or surprises. We provide a clear estimate before any work begins. Affordable quality.
                                </p>
</div>
</div>
<div className="flex gap-5">
<div className="shrink-0 mt-1">
<svg className="lucide lucide-clock text-blue-600 w-6 h-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="">
<h4 className="text-xl font-medium text-slate-900 mb-2">Punctual Service</h4>
<p className="text-lg text-slate-500 leading-relaxed">
                                    We value your time. Our team arrives within the scheduled window, ready to work efficiently.
                                </p>
</div>
</div>
</div>
<div className="mt-10">
<a className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center gap-2 group" href="#schedule">
                            Learn more about our process 
                            <svg className="lucide lucide-arrow-right w-4 h-4 transform group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="order-1 lg:order-2 relative">
<div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-3 opacity-10"></div>
<img alt="Clean modern electrical panel" className="aspect-[4/3] object-cover border-slate-100 border rounded-3xl relative shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c19e6d3-22ac-4b90-873a-b2da913972d8_3840w.png"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative overflow-hidden" id="schedule">

<div className="-translate-x-1/2 -translate-y-1/2 blur-[100px] bg-slate-900 w-[800px] h-[800px] rounded-full absolute top-1/2 left-1/2"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                Ready to light up your space?
            </h2>
<p className="text-xl text-slate-400 mb-10 font-light">
                Schedule your service today. Fast response times, professional service, and guaranteed satisfaction.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="bg-blue-600 text-white px-10 py-4 rounded-lg font-medium hover:bg-blue-500 transition-all text-lg shadow-lg shadow-blue-500/25" href="#">
                    Book Online Now
                </a>
<a className="bg-transparent border border-slate-700 text-white px-10 py-4 rounded-lg font-medium hover:bg-slate-800 transition-all text-lg flex items-center justify-center gap-2" href="tel:+18005550199">
<svg className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                    (800) 555-0199
                </a>
</div>
<p className="mt-8 text-sm text-slate-500">
                No payment required to book appointment.
            </p>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 rounded-md overflow-hidden">
<img alt="Zeon Logo" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1ab9fe5d-c399-4cf0-b376-f2a6d9b5c43e_320w.jpg"/>
</div>
<span className="text-slate-900 text-lg font-medium tracking-tight">Zeon Electric</span>
</a>
<p className="text-base text-slate-500 mb-4">
                        Modern electrical solutions for a brighter future.
                    </p>
</div>
<div className="">
<h5 className="text-slate-900 font-medium mb-4">Services</h5>
<ul className="space-y-3">
<li className=""><a className="text-slate-500 hover:text-blue-600 transition-colors text-base" href="#">Lighting</a></li>
<li><a className="text-slate-500 hover:text-blue-600 transition-colors text-base" href="#">Panels</a></li>
<li><a className="text-slate-500 hover:text-blue-600 transition-colors text-base" href="#">Wiring</a></li>
<li><a className="text-slate-500 hover:text-blue-600 transition-colors text-base" href="#">Emergencies</a></li>
</ul>
</div>
<div className="">
<h5 className="text-slate-900 font-medium mb-4">Company</h5>
<ul className="space-y-3">
<li><a className="text-slate-500 hover:text-blue-600 transition-colors text-base" href="#">About Us</a></li>
<li><a className="text-slate-500 hover:text-blue-600 transition-colors text-base" href="#">Careers</a></li>
<li><a className="text-slate-500 hover:text-blue-600 transition-colors text-base" href="#">Contact</a></li>
<li><a className="text-slate-500 hover:text-blue-600 transition-colors text-base" href="#">Privacy</a></li>
</ul>
</div>
<div>
<h5 className="text-slate-900 font-medium mb-4">Contact</h5>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-slate-500 text-base">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            123 Volts Ave, NY
                        </li>
<li className="flex items-center gap-2 text-slate-500 text-base">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                            hello@zeonelectric.com
                        </li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-400 text-sm">© 2024 Zeon Electric. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-slate-600" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
