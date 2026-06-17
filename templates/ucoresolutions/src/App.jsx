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



        function openModal() {
            const modal = document.getElementById('contactModal');
            const form = document.getElementById('contactForm');
            const success = document.getElementById('successMessage');
            
            // Reset state
            form.classList.remove('hidden');
            success.classList.add('hidden');
            document.getElementById('modalTitle').textContent = "Get Energy Assessment";
            
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modal = document.getElementById('contactModal');
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        // Close modal if clicking outside
        document.getElementById('contactModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        function sendInquiry(e) {
            e.preventDefault();
            
            // In a real app, you would send data to backend here.
            // For now, we simulate the UI feedback.

            const form = document.getElementById('contactForm');
            const success = document.getElementById('successMessage');
            const title = document.getElementById('modalTitle');

            // Hide form, show success
            form.classList.add('hidden');
            success.classList.remove('hidden');
            success.classList.add('flex'); // Ensure flex display is active
            
            // Update Title
            title.textContent = "Thank You";
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
      

<nav className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div className="flex items-center gap-3">
<img alt="UCORE Logo" className="object-auto w-auto h-10 object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fed00fbd-5fa6-4108-93ff-9b638d7317a8_320w.png"/>
<span className="text-xl font-normal text-slate-900 tracking-tight" style={{}}>UCORE</span>
</div>
<div className="hidden md:flex items-center gap-8 text-base font-normal text-slate-500">
<a className="hover:text-emerald-700 transition-colors" href="#">Platform</a>
<a className="hover:text-emerald-700 transition-colors" href="#">Solutions</a>
<a className="hover:text-emerald-700 transition-colors" href="#">About</a>
<a className="hover:text-emerald-700 transition-colors" href="#">Contact</a>
</div>
<div className="flex items-center gap-4">
<button className="bg-emerald-600 hover:bg-emerald-700 text-white text-base font-normal py-2.5 px-6 rounded-full transition-all shadow-sm hover:shadow-md cursor-pointer" onclick="openModal()">
                    Get Assessment
                </button>
</div>
</div>
</nav>

<section className="sm:px-6 max-w-7xl mr-auto ml-auto pt-6 pr-4 pb-20 pl-4 relative">
<div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 aspect-[16/10] sm:aspect-[21/9] group">

<img alt="Industrial Energy Grid" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>

<div className="z-10 flex flex-col sm:px-16 sm:pt-0 h-full max-w-3xl pt-12 pr-8 pl-8 relative justify-center">
<div className="inline-flex text-sm font-normal text-emerald-300 mb-6 gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-activity w-4 h-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-200 text-sm font-normal tracking-wide uppercase whitespace-nowrap backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:bg-emerald-500/20 transition-colors duration-300">Technology-Led Energy Operations</span>
</div>
<h1 className="sm:text-5xl lg:text-6xl leading-[1.1] text-4xl font-normal text-white tracking-tight mb-6" style={{}}>Powering the modern enterprise with data driven energy</h1>
<p className="text-xl text-slate-200 font-light mb-8 max-w-xl leading-relaxed">
                    UCORE Solutions helps SMEs and C&amp;I customers optimize power costs, solar performance, and compliance workflows through a unified digital platform.
                </p>
<div className="flex flex-wrap gap-4">
<button className="inline-flex items-center gap-2 text-white font-normal border-b border-emerald-400 pb-0.5 hover:text-emerald-300 transition-colors text-lg cursor-pointer" onclick="openModal()">
                        Get an Energy Assessment <svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</div>

<div className="absolute top-12 right-12 hidden lg:block w-72 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-2xl">
<div className="relative rounded-lg overflow-hidden h-36 mb-4">
<img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20"></div>
</div>
<div className="flex justify-between items-end">
<div className="text-white">
<p className="text-sm text-slate-300">System Status</p>
<p className="text-base font-normal">Monitoring Active</p>
</div>
<div className="h-9 w-9 rounded-full bg-emerald-500 flex items-center justify-center">
<svg className="lucide lucide-check w-5 h-5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
</div>
</div>

<div className="relative -mt-16 mx-4 sm:mx-12 lg:mx-auto max-w-5xl z-20">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 bg-white border-slate-100 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-xl gap-x-8 gap-y-8 mt-12">
<div className="text-center md:text-left px-4">
<p className="text-3xl font-normal tracking-tight text-slate-900 mb-1">SME &amp; C&amp;I</p>
<p className="text-base text-slate-500">Focused exclusively on industrial &amp; commercial needs</p>
</div>
<div className="text-center md:text-left px-4">
<p className="text-3xl font-normal text-slate-900 tracking-tight mb-1">Multi-Source</p>
<p className="text-base text-slate-500">Unifying data from bills, meters, and operations</p>
</div>
<div className="text-center md:text-left px-4">
<p className="text-3xl font-normal tracking-tight text-slate-900 mb-1">Real-World</p>
<p className="text-base text-slate-500">Built for actual power systems, not trading theory</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-normal tracking-tight text-slate-900 mb-4">
                Built for businesses needing <span className="text-slate-400">energy clarity.</span>
</h2>
<p className="text-xl text-slate-500">
                Supporting industries that need cost efficiency and regulatory compliance without building internal energy teams.
            </p>
</div>
<div className="flex flex-wrap justify-center gap-8 md:gap-12">

<div className="group flex flex-col items-center gap-4">
<div className="w-32 h-32 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300">
<svg className="lucide lucide-factory w-8 h-8 text-slate-700" data-lucide="factory" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 16h.01"></path><path d="M16 16h.01"></path><path className="" d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path><path d="M8 16h.01"></path></svg>
</div>
<span className="text-base font-normal text-slate-900">Manufacturing</span>
</div>

<div className="group flex flex-col items-center gap-4">
<div className="w-32 h-32 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300">
<svg className="lucide lucide-container w-8 h-8 text-slate-700" data-lucide="container" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"></path><path d="M10 21.9V14L2.1 9.1"></path><path d="m10 14 11.9-6.9"></path><path d="M14 19.8v-8.1"></path><path d="M18 17.5V9.4"></path></svg>
</div>
<span className="text-base font-normal text-slate-900">Logistics</span>
</div>

<div className="group flex flex-col items-center gap-4">
<div className="w-32 h-32 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300">
<svg className="lucide lucide-snowflake w-8 h-8 text-slate-700" data-lucide="snowflake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 20-1.25-2.5L6 18"></path><path d="M10 4 8.75 6.5 6 6"></path><path d="m14 20 1.25-2.5L18 18"></path><path d="m14 4 1.25 2.5L18 6"></path><path d="m17 21-3-6h-4"></path><path d="m17 3-3 6 1.5 3"></path><path d="M2 12h6.5L10 9"></path><path d="m20 10-1.5 2 1.5 2"></path><path d="M22 12h-6.5L14 15"></path><path d="m4 10 1.5 2L4 14"></path><path d="m7 21 3-6-1.5-3"></path><path d="m7 3 3 6h4"></path></svg>
</div>
<span className="text-base font-normal text-slate-900">Cold Storage</span>
</div>

<div className="group flex flex-col items-center gap-4">
<div className="w-32 h-32 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300">
<svg className="lucide lucide-building-2 w-8 h-8 text-slate-700" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path className="" d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path className="" d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path className="" d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<span className="text-base font-normal text-slate-900">Industrial Estates</span>
</div>
</div>
</section>

<section className="bg-white py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-slate-900 mb-4">
                    The complexity of <span className="text-slate-400">power operations</span>
</h2>
<p className="text-xl text-slate-500 max-w-2xl mx-auto">
                    Why managing energy is a headache for modern Indian enterprises.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-6 text-rose-600">
<svg className="lucide lucide-trending-up w-6 h-6" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="text-xl font-normal text-slate-900 mb-3 tracking-tight">Rising &amp; Unpredictable Costs</h3>
<p className="text-lg text-slate-500 leading-relaxed">
                        Electricity tariffs, demand charges, and penalties make power a volatile operating expense for businesses.
                    </p>
</div>

<div className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6 text-amber-600">
<svg className="lucide lucide-puzzle w-6 h-6" data-lucide="puzzle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path></svg>
</div>
<h3 className="text-xl font-normal text-slate-900 mb-3 tracking-tight">Fragmented Decisions</h3>
<p className="text-lg text-slate-500 leading-relaxed">
                        Bills, meters, solar assets, and procurement options sit across disconnected systems and spreadsheets.
                    </p>
</div>

<div className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
<svg className="lucide lucide-users w-6 h-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-xl font-normal text-slate-900 mb-3 tracking-tight">Limited Expertise</h3>
<p className="text-lg text-slate-500 leading-relaxed">
                        Most SMEs do not have dedicated energy teams, yet must navigate complex utility processes alone.
                    </p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="">
<div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-normal mb-6">
                    Our Services
                </div>
<h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-slate-900 mb-6">
                    Comprehensive energy management, 
                    <span className="text-slate-400">simplified.</span>
</h2>
<div className="space-y-8 mt-10">
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
<svg className="lucide lucide-file-text w-3.5 h-3.5 text-emerald-700" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div className="">
<h4 className="text-xl font-normal text-slate-900">Utility Bill &amp; Tariff Intelligence</h4>
<p className="text-lg text-slate-500 mt-1">Automated analysis of complex utility bills to find savings.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
<svg className="lucide lucide-bar-chart-3 w-3.5 h-3.5 text-emerald-700" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<div className="">
<h4 className="text-xl font-normal text-slate-900">Load &amp; Peak Demand Management</h4>
<p className="text-lg text-slate-500 mt-1">Continuous monitoring using meter data, inverter feeds, and operational logs to manage demand charges.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
<svg className="lucide lucide-sun w-3.5 h-3.5 text-emerald-700" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<div className="">
<h4 className="text-xl font-normal text-slate-900">Rooftop Solar Enablement</h4>
<p className="text-lg text-slate-500 mt-1">Performance monitoring, analytics, and asset visibility.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
<svg className="lucide lucide-network w-3.5 h-3.5 text-emerald-700" data-lucide="network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
</div>
<div className="">
<h4 className="text-xl font-normal text-slate-900">Open Access Readiness</h4>
<p className="text-lg text-slate-500 mt-1">Open access feasibility, documentation support, scheduling coordination, and regulatory compliance readiness.</p>
</div>
</div>
</div>
<div className="mt-10">
<button className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-normal transition-all text-lg cursor-pointer" onclick="openModal()">
                        Explore Services <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl group">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'linear-gradient(to top, rgba(15, 23, 42, 0.5), transparent), url(\'https: //images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&amp'}}></div>

<div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium uppercase tracking-wider text-slate-400">Operational Insight</span>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
<span className="text-sm font-medium text-emerald-600">Active</span>
</div>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="">
<p className="text-sm text-slate-400 mb-1">Grid Draw</p>
<p className="text-xl font-medium text-slate-900">450 kW</p>
</div>
<div className="">
<p className="text-sm text-slate-400 mb-1">Solar Gen</p>
<p className="text-xl font-medium text-slate-900">120 kW</p>
</div>
<div className="">
<p className="text-sm text-slate-400 mb-1">Efficiency</p>
<p className="text-xl font-medium text-emerald-600">98%</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-24 border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl font-normal tracking-tight text-slate-900">How UCORE works</h2>
<p className="text-xl text-slate-500 mt-2">A streamlined path to energy control.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
<span className="block text-4xl font-light text-slate-200 mb-6">01</span>
<h3 className="text-xl font-normal text-slate-900 mb-2">Onboard &amp; Understand</h3>
<p className="text-base text-slate-500 leading-relaxed">
                        We digitize your billing history and facility data into our secure platform.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
<span className="block text-4xl font-light text-slate-200 mb-6">02</span>
<h3 className="text-xl font-normal text-slate-900 mb-2">Build Energy Baseline</h3>
<p className="text-base text-slate-500 leading-relaxed">
                        Establish consumption patterns and identify immediate inefficiencies from existing meters.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
<span className="block text-4xl font-light text-slate-200 mb-6">03</span>
<h3 className="text-xl font-normal text-slate-900 mb-2">Optimize &amp; Operate</h3>
<p className="text-base text-slate-500 leading-relaxed">
                        Deploy continuous monitoring and implement cost-saving interventions.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
<span className="block text-4xl font-light text-slate-200 mb-6">04</span>
<h3 className="text-xl font-normal text-slate-900 mb-2">Review &amp; Improve</h3>
<p className="text-base text-slate-500 leading-relaxed">
                        Ongoing reconciliation and reporting to ensure sustained savings and compliance.
                    </p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="bg-slate-100 rounded-[2.5rem] overflow-hidden">
<div className="grid lg:grid-cols-2">
<div className="lg:p-16 flex flex-col pt-12 pr-12 pb-12 pl-12 justify-center">
<div className="mb-6">
<span className="text-base font-medium tracking-wider uppercase text-emerald-700">Technology Led</span>
</div>
<h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-slate-900 mb-6">
                        The UCORE EnergyOps Platform
                    </h2>
<p className="text-xl text-slate-600 mb-8 leading-relaxed">
                        We aren't just consultants. We provide a robust technology layer that ingests multi-source energy data (bills, meters, solar inverters, operational inputs). Our platform normalizes this into structured data models for audit-ready, regulator-aligned reporting and decision intelligence.
                    </p>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-emerald-600 shadow-sm">
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h4 className="font-normal text-slate-900 text-lg">Regulatory-Aware</h4>
<p className="text-base text-slate-500">Deep understanding of Indian tariffs, DISCOM processes, and compliance requirements.</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-emerald-600 shadow-sm">
<svg className="lucide lucide-database w-5 h-5" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<div className="">
<h4 className="text-lg font-normal text-slate-900" style={{}}>Structured Energy Data</h4>
<p className="text-base text-slate-500">Clean, standardized consumption and billing data across sites and utilities for consistent analysis and reporting.</p>
</div>
</div>
</div>
</div>
<div className="relative bg-slate-200 h-96 lg:h-auto">
<img className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-40" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="flex lg:p-12 w-full h-full z-10 pt-6 pr-6 pb-6 pl-6 relative items-center justify-center">
<img alt="Dashboard Preview" className="bg-white/5 w-full h-auto max-h-full object-contain border-white/20 border rounded-xl shadow-2xl backdrop-blur-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c5cf27e1-fbf0-4969-b39f-9c8674aecee3_1600w.png"/>
</div>
</div>
</div>
</div>
</section>

<footer className="text-slate-400 bg-slate-900 border-slate-800 border-t pt-16 pb-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 gap-x-12 gap-y-12">
<div className="col-span-1 md:col-span-1">
<div className="flex mb-6 gap-x-0 gap-y-3 items-center">
<div className="rounded-lg pt-1.5 pr-1.5 pb-1.5 pl-1.5">
<img alt="UCORE Logo" className="bg-center w-auto h-5 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b7238ca-de39-4a24-8b29-c0db0ba4f6a1_320w.png"/>
</div><span className="text-xl font-normal text-white tracking-tight">UCORE</span>
</div>
<p className="text-base leading-relaxed">
                        Technology-led energy operations for the modern Indian enterprise.
                    </p>
</div>
<div className="">
<h4 className="text-white font-normal mb-4">Platform</h4>
<ul className="space-y-3 text-base">
<li className=""><a className="hover:text-emerald-400 transition-colors" href="#">Data Ingestion</a></li>
<li className=""><a className="hover:text-emerald-400 transition-colors" href="#">Analytics</a></li>
<li className=""><a className="hover:text-emerald-400 transition-colors" href="#">Reporting</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-normal mb-4">Solutions</h4>
<ul className="space-y-3 text-base">
<li className=""><a className="hover:text-emerald-400 transition-colors" href="#">Bill Intelligence</a></li>
<li className=""><a className="hover:text-emerald-400 transition-colors" href="#">Solar Enablement</a></li>
<li className=""><a className="hover:text-emerald-400 transition-colors" href="#">Open Access Support</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-normal mb-4">Company</h4>
<ul className="space-y-3 text-base">
<li><a className="hover:text-emerald-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
<p className="" style={{}}>© 2024 UCORE Solutions Pvt. Ltd. All rights reserved.</p>
<p>Designed for regulatory compliance and operational efficiency.</p>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm hidden" id="contactModal">
<div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all border border-slate-100 relative">

<div className="flex justify-between items-center p-6 border-b border-slate-100 bg-slate-50/50">
<h3 className="text-xl font-normal text-slate-900" id="modalTitle">Get Energy Assessment</h3>
<button className="text-slate-400 hover:text-slate-600 transition-colors focus:outline-none" onclick="closeModal()">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="p-6">

<form className="space-y-4" id="contactForm" onsubmit="sendInquiry(event)">
<div className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-sm font-medium text-slate-700" htmlFor="name">Full Name</label>
<input className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm placeholder:text-slate-400" id="name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-sm font-medium text-slate-700" htmlFor="company">Company Name</label>
<input className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm placeholder:text-slate-400" id="company" placeholder="Acme Inc." required="" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-sm font-medium text-slate-700" htmlFor="email">Work Email</label>
<input className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm placeholder:text-slate-400" id="email" placeholder="john@company.com" required="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-sm font-medium text-slate-700" htmlFor="interest">Primary Interest</label>
<div className="relative">
<select className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm appearance-none bg-white text-slate-600" id="interest">
<option>Bill Intelligence &amp; Analysis</option>
<option>Solar Feasibility / Enablement</option>
<option>Regulatory / Open Access</option>
<option>Full Platform Demo</option>
<option>Other</option>
</select>
<svg className="absolute right-3 top-2.5 w-4 h-4 text-slate-400 pointer-events-none" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="space-y-1">
<label className="text-sm font-medium text-slate-700" htmlFor="message">Message (Optional)</label>
<textarea className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm placeholder:text-slate-400" id="message" placeholder="Tell us about your energy challenges..." rows="3"></textarea>
</div>
</div>
<div className="pt-2">
<button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2" type="submit">
                            Send Inquiry <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="22" x2="11" y1="2" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
</button>
<p className="text-xs text-center text-slate-400 mt-3">By clicking send, you agree to our privacy policy.</p>
</div>
</form>

<div className="hidden flex-col items-center justify-center py-12 text-center space-y-4" id="successMessage">
<div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-2 animate-bounce">
<svg className="w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<h4 className="text-2xl font-normal text-slate-900">Inquiry Received</h4>
<p className="text-slate-500 max-w-xs mx-auto text-base">
                        Your inquiry has been accepted. Our team will review your details and get back to you shortly.
                    </p>
<button className="mt-6 text-emerald-600 hover:text-emerald-700 font-medium text-sm" onclick="closeModal()">
                        Close Window
                    </button>
</div>
</div>
</div>
</div>


    </>
  );
}
