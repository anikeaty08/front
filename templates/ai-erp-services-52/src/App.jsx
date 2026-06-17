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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', function() {
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        });
        // Fallback for immediate execution if DOM is already loaded
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    


        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-on-scroll');
            elements.forEach(el => observer.observe(el));
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
      

<nav className="fixed top-0 w-full z-50 glass-nav" id="navbar">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
<img alt="26lights Logo" className="w-auto h-8 object-cover rounded-md" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d3cac0d9-8724-48dd-8dbf-ef47f070289d_320w.png"/>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="transition-all transform hover:scale-105 active:scale-95 text-xs font-medium rounded-full py-2.5 px-5 hover:bg-gray-800 text-white bg-black shadow-lg shadow-black/10" href="#packages">Book an ERP discovery call</a>
</div>
</div>
</nav>

<section className="md:pt-40 md:pb-24 overflow-visible bg-white pt-32 pb-20 relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative gap-x-16 gap-y-16 items-center">

<div className="flex flex-col gap-8 items-start reveal-on-scroll is-visible">
<div className="space-y-6">
<h1 className="md:text-6xl leading-[1.05] text-balance text-5xl font-semibold text-gray-900 tracking-tight">
                        ERP systems used to be too heavy for SMEs.
                        <span className="block text-gray-400">Now, you can build a simple one with AI.</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-normal text-gray-600 max-w-lg">
                        We build your simple ERP around your real workflows, not the other way around. AI ERP is the flexible option for companies that don't fit standard packages.
                    </p>

<div className="flex flex-wrap gap-3 mt-2">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-700">
<iconify-icon className="text-sm text-blue-600" icon="solar:award-linear"></iconify-icon>
                            Top experts
                        </div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-700">
<iconify-icon className="text-sm text-purple-600" icon="solar:magic-stick-3-linear"></iconify-icon>
                            Fully flexible
                        </div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-700">
<iconify-icon className="text-sm text-green-600" icon="solar:map-point-linear"></iconify-icon>
                            Local BE &amp; FR
                        </div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-700">
<iconify-icon className="text-sm text-orange-600" icon="solar:bolt-linear"></iconify-icon>
                            Fast delivery
                        </div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
<a className="group hover:bg-gray-800 transition-all transform hover:-translate-y-1 shadow-xl shadow-gray-500/20 flex gap-2 font-medium text-white bg-gray-900 rounded-xl pt-4 pr-8 pb-4 pl-8 items-center justify-center" href="#packages">
                        Book an ERP discovery call
                        <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="min-h-[550px] flex flex-col bg-gray-50 reveal-on-scroll delay-200 overflow-hidden isolate w-full h-full border-gray-200 border rounded-3xl relative shadow-2xl is-visible">

<div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:20px_20px] opacity-60"></div>

<div className="flex pt-10 pr-8 pb-0 pl-8 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">

<div className="relative w-full max-w-md bg-white rounded-t-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden flex flex-col h-full transform translate-y-4">

<div className="h-10 bg-white border-b border-slate-100 flex items-center px-4 gap-2 shrink-0 z-10">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
<div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
</div>
<div className="flex-1 text-center">
<div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-slate-50 border border-slate-100">
<iconify-icon className="text-[10px] text-slate-400" icon="solar:lock-password-linear"></iconify-icon>
<span className="text-[10px] font-medium text-slate-500">app.26lights.erp</span>
</div>
</div>
<div className="w-10"></div> 
</div>

<div className="flex flex-1 overflow-hidden relative">

<div className="w-16 md:w-40 border-r border-slate-100 bg-slate-50/50 flex flex-col p-3 gap-1 shrink-0">
<div className="h-8 w-full bg-slate-200 rounded-md mb-4 opacity-50"></div>

<div className="flex items-center gap-2 p-2 bg-white rounded-md border border-slate-200 shadow-sm">
<iconify-icon className="text-indigo-600" icon="solar:widget-2-linear"></iconify-icon>
<span className="hidden md:block text-xs font-semibold text-slate-700">Dashboard</span>
</div>
<div className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-100 transition-colors opacity-60">
<iconify-icon className="text-slate-500" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="hidden md:block text-xs font-medium text-slate-600">Customers</span>
</div>
<div className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-100 transition-colors opacity-60">
<iconify-icon className="text-slate-500" icon="solar:box-minimalistic-linear"></iconify-icon>
<span className="hidden md:block text-xs font-medium text-slate-600">Inventory</span>
</div>
</div>

<div className="flex-1 p-4 md:p-6 bg-white overflow-hidden flex flex-col gap-4">

<div className="flex justify-between items-center mb-2">
<div className="h-5 w-32 bg-slate-100 rounded-md"></div>
<div className="h-8 w-8 rounded-full bg-slate-100"></div>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="p-3 rounded-lg border border-slate-100 bg-white shadow-sm space-y-2">
<div className="h-2 w-12 bg-slate-100 rounded"></div>
<div className="h-6 w-20 bg-slate-100 rounded"></div>
</div>
<div className="p-3 rounded-lg border border-slate-100 bg-white shadow-sm space-y-2">
<div className="h-2 w-12 bg-slate-100 rounded"></div>
<div className="h-6 w-20 bg-slate-100 rounded"></div>
</div>
</div>

<div className="relative w-full flex-1 rounded-xl border border-indigo-100 bg-indigo-50/20 p-4 ring-2 ring-indigo-500/20 ring-offset-2 transition-all duration-700 mt-2">

<div className="absolute inset-0 overflow-hidden rounded-xl">
<div className="absolute top-0 left-0 w-full h-full animate-shimmer opacity-30 bg-gradient-to-r from-transparent via-indigo-200 to-transparent skew-x-12"></div>
</div>

<div className="relative z-10 flex flex-col h-full gap-3">
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-600" icon="solar:chart-square-linear"></iconify-icon>
<span className="text-xs font-semibold text-indigo-900">Revenue Analytics</span>
</div>
<div className="px-2 py-0.5 bg-indigo-100 rounded text-[10px] font-bold text-indigo-600">NEW</div>
</div>

<div className="flex items-end justify-between flex-1 gap-2 px-1 pt-2 pb-1">
<div className="w-full bg-indigo-200 rounded-t-sm h-[40%] animate-[pulse_1.5s_ease-in-out_infinite]"></div>
<div className="w-full bg-indigo-300 rounded-t-sm h-[60%] animate-[pulse_1.5s_ease-in-out_0.2s_infinite]"></div>
<div className="w-full bg-indigo-400 rounded-t-sm h-[30%] animate-[pulse_1.5s_ease-in-out_0.4s_infinite]"></div>
<div className="w-full bg-indigo-500 rounded-t-sm h-[80%] animate-[pulse_1.5s_ease-in-out_0.6s_infinite]"></div>
<div className="w-full bg-indigo-600 rounded-t-sm h-[50%] animate-[pulse_1.5s_ease-in-out_0.8s_infinite]"></div>
</div>
</div>
</div>

<div className="h-24 border border-dashed border-slate-200 rounded-xl flex items-center justify-center">
<iconify-icon className="text-slate-300 text-2xl" icon="solar:add-circle-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-auto max-w-[90%] md:max-w-sm glass-card p-1.5 rounded-2xl shadow-2xl border border-white/50 ring-1 ring-black/5 animate-float z-30">
<div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100">
<div className="relative w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
<iconify-icon className="text-xl" icon="solar:magic-stick-3-linear"></iconify-icon>
<div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
</div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex items-center gap-2">
<span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">AI Builder</span>
<span className="text-[10px] text-slate-400">just now</span>
</div>
<div className="text-sm font-medium text-slate-800 truncate">
                                    "Add a revenue chart grouped by month..."
                                </div>
</div>
<div className="hidden sm:flex items-center gap-1 bg-slate-50 border border-slate-200 rounded px-2 py-1">
<span className="text-[10px] font-mono text-slate-500">⌘ + Enter</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section className="border-y overflow-hidden bg-gray-900 border-gray-200 pt-20 pb-20 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-24 bg-blue-500/5 blur-[60px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="reveal-on-scroll text-center mb-12 is-visible">
<h2 className="md:text-3xl text-2xl font-semibold text-gray-100 tracking-tight mb-3">We build on the best AI frameworks.</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-8 gap-x-12 gap-y-12 items-center justify-items-center reveal-on-scroll delay-200 is-visible">

<div className="group relative w-full max-w-[160px] aspect-[3/2] rounded-lg overflow-hidden bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300">
<img alt="Partner Logo" className="w-full h-full object-contain p-4 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/017cd52f-9c70-4f8b-90f3-4539acf6dfdb_320w.png"/>
</div>

<div className="group relative w-full max-w-[160px] aspect-[3/2] rounded-lg overflow-hidden bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300">
<img alt="Partner Logo" className="w-full h-full object-contain p-4 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2bbc1243-4e22-4a41-9366-60224a942433_320w.png"/>
</div>

<div className="group relative w-full max-w-[160px] aspect-[3/2] rounded-lg overflow-hidden bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300">
<img alt="Partner Logo" className="w-full h-full object-contain p-4 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dc3ec8d-53aa-41b4-9c70-63fce5ddf6a2_320w.png"/>
</div>

<div className="group relative w-full max-w-[160px] aspect-[3/2] rounded-lg overflow-hidden bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300">
<img alt="Partner Logo" className="w-full h-full object-contain p-4 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf04e0ff-0c76-403c-87d0-9dc8d1077538_320w.png"/>
</div>

<div className="group relative w-full max-w-[160px] aspect-[3/2] rounded-lg overflow-hidden bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300">
<img alt="Partner Logo" className="w-full h-full object-contain p-4 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/80e42a04-a1ac-4405-80d9-94c335bbac94_320w.png"/>
</div>
</div>
</div>
</section>


<section className="overflow-hidden h-exr bg-white pt-24 pb-24 relative">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll is-visible">
<span className="uppercase inline-block text-[10px] font-medium text-blue-600 tracking-widest mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">Capabilities</span>
<h2 className="md:text-5xl text-3xl font-medium text-gray-900 tracking-tight">
<span className="block font-semibold">What we can do?</span>
</h2>
<p className="mt-6 text-lg leading-relaxed text-gray-600">We don't sell hype. We build engines that run your business better.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 reveal-on-scroll delay-100">
<div className="w-full h-48 mb-8 rounded-xl bg-gradient-to-b from-gray-50/50 to-white border border-gray-100 relative overflow-hidden group-hover:border-orange-100 transition-colors duration-300">
<div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fb923c_1px,transparent_1px)] [background-size:12px_12px]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="flex flex-col gap-3 group-hover:top-2 transition-all duration-500 bg-white w-32 h-32 border-gray-100 border rounded-lg relative top-4 shadow-md gap-x-3 gap-y-3 items-center justify-center">
<div className="flex items-center gap-2">
<div className="flex flex-col gap-1.5">
<div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
<div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
<div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
</div>
<iconify-icon className="text-gray-300 text-sm" icon="solar:arrow-right-linear"></iconify-icon>
<div className="w-10 h-10 bg-orange-50 border border-orange-100 rounded-lg flex items-center justify-center text-orange-500 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:structure-linear"></iconify-icon>
</div>
</div>
<div className="w-16 h-1.5 bg-gray-100 rounded-full"></div>
<div className="absolute -right-4 -top-4 w-8 h-8 bg-orange-50 border border-orange-100 rounded-full flex items-center justify-center text-orange-600 font-semibold text-xs">1</div>
</div>
</div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Simple ERP Architecture</h3>
<p className="leading-relaxed text-base text-gray-500">
                        Designing the leanest structure for your needs. We map your data without the bloat.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 reveal-on-scroll delay-200">
<div className="w-full h-48 mb-8 rounded-xl bg-gradient-to-b from-gray-50/50 to-white border border-gray-100 relative overflow-hidden group-hover:border-blue-100 transition-colors duration-300">
<div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(45deg,#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="grid grid-cols-2 gap-2 transform group-hover:scale-105 transition-transform duration-500">
<div className="w-16 h-16 bg-white border border-blue-100 rounded-lg shadow-sm flex items-center justify-center text-blue-500">
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div className="w-16 h-16 bg-white border border-blue-100 rounded-lg shadow-sm flex items-center justify-center text-blue-500">
<iconify-icon className="text-2xl" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<div className="w-16 h-16 bg-white border border-blue-100 rounded-lg shadow-sm flex items-center justify-center text-blue-500">
<iconify-icon className="text-2xl" icon="solar:bill-list-linear"></iconify-icon>
</div>
<div className="w-16 h-16 bg-blue-500 border border-blue-600 rounded-lg shadow-sm flex items-center justify-center text-white">
<iconify-icon className="text-2xl" icon="solar:add-circle-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Core Modules Built</h3>
<p className="leading-relaxed text-base text-gray-500">
                        Rapid development of your essential business blocks (CRM, Inventory, Invoicing, etc.).
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 reveal-on-scroll delay-300">
<div className="w-full h-48 mb-8 rounded-xl bg-gradient-to-b from-gray-50/50 to-white border border-gray-100 relative overflow-hidden group-hover:border-purple-100 transition-colors duration-300">
<div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:20px_20px]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-20 h-20 bg-white rounded-xl shadow-lg border border-purple-100 flex items-center justify-center z-10">
<iconify-icon className="text-3xl text-purple-600" icon="solar:code-circle-linear"></iconify-icon>
</div>
<div className="absolute w-40 h-40 border border-dashed border-purple-300 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute w-32 h-32 border border-purple-100 rounded-full"></div>
<div className="absolute -right-2 top-8 bg-white shadow-md border border-purple-100 px-2 py-1 rounded text-[10px] font-semibold text-purple-600 flex items-center gap-1">
<iconify-icon className="text-xs" icon="solar:bolt-bold"></iconify-icon>
                                   FAST
                            </div>
</div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">AI-Assisted Build Method</h3>
<p className="leading-relaxed text-base text-gray-500">
                        Using AI to accelerate the coding and integration process, delivering value in weeks, not months.
                    </p>
</div>
</div>

<div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 reveal-on-scroll is-visible delay-400">
<a className="group flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-800 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-gray-900/20 w-full sm:w-auto" href="#packages">
                    Explore Packages
                    <svg className="transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="group flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all transform hover:-translate-y-0.5 shadow-sm w-full sm:w-auto" href="#contact">
                    Book a Discovery Call
                </a>
</div>
</div>
</section>

<section className="border-y overflow-hidden bg-gray-900 w-full border-gray-800 pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-1 reveal-on-scroll">
<span className="inline-block text-[10px] uppercase font-semibold text-gray-300 tracking-widest border-gray-700 border bg-gray-800 rounded-full px-3 py-1 mb-6">Why Custom?</span>
<h2 className="md:text-5xl text-4xl font-semibold text-white tracking-tight mb-6">
                        For companies who don’t fit standard ERP packages.
                    </h2>
<p className="leading-relaxed text-lg text-gray-400 mb-8">
                        Off-the-shelf software forces you to change how you work. We build a system that respects your unique competitive advantage.
                    </p>
</div>
<div className="order-2 reveal-on-scroll delay-200">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="p-6 rounded-xl bg-gray-800 border border-gray-700 shadow-sm hover:shadow-md hover:border-gray-600 transition-all group">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:database-linear"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-white">Source-answers</h4>
<p className="text-sm text-gray-400 mt-2">Data integrity at the heart of the system.</p>
</div>
<div className="p-6 rounded-xl bg-gray-800 border border-gray-700 shadow-sm hover:shadow-md hover:border-gray-600 transition-all group">
<div className="w-10 h-10 rounded-lg bg-green-500/10 text-green-400 flex items-center justify-center mb-4 group-hover:bg-green-500 group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:user-check-linear"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-white">Human validation</h4>
<p className="text-sm text-gray-400 mt-2">You keep control over sensitive operations.</p>
</div>
<div className="p-6 rounded-xl bg-gray-800 border border-gray-700 shadow-sm hover:shadow-md hover:border-gray-600 transition-all group">
<div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:history-linear"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-white">Logging &amp; traceability</h4>
<p className="text-sm text-gray-400 mt-2">Every transaction and change is tracked.</p>
</div>
<div className="p-6 rounded-xl bg-gray-800 border border-gray-700 shadow-sm hover:shadow-md hover:border-gray-600 transition-all group">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 group-hover:bg-purple-500 group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:graph-new-up-linear"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-white">Overnight changes</h4>
<p className="text-sm text-gray-400 mt-2">Custom adaptations on demand, bypassing slow ERP release cycles.</p>
</div>
</div>
</div>
</div>
</div>
</section><section className="bg-white w-full border-gray-200 border-b pt-24 pb-24 relative">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
<span className="inline-block text-[10px] uppercase font-semibold text-indigo-600 tracking-widest border-indigo-100 border bg-indigo-50 rounded-full px-3 py-1 mb-6">Beyond The Tool</span>
<h2 className="md:text-5xl text-4xl font-semibold text-gray-900 tracking-tight mb-6 text-balance">
                We don’t just build tools. We help you choose the right path.
            </h2>
<p className="leading-relaxed text-lg text-gray-600">
                AI ERP is a powerful option, but it’s not the only one. We use our global ERP expertise to audit your needs and guide you toward the most cost-effective solution.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch relative">

<div className="hidden md:block absolute top-1/2 left-12 right-12 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent -translate-y-1/2 z-0"></div>

<div className="group p-8 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal-on-scroll delay-100 flex flex-col relative z-10">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
<i className="w-6 h-6" data-lucide="layers"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">Standard SaaS Selection</h3>
<p className="leading-relaxed text-sm sm:text-base text-gray-500 flex-1">
                    If an existing software (Odoo, etc.) fits 90% of your needs, we help you select and configure it.
                </p>
</div>

<div className="group p-8 rounded-2xl border border-gray-200 bg-gray-50 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal-on-scroll delay-200 flex flex-col relative z-10 overflow-hidden">
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gray-200 opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 border border-indigo-200 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 relative z-10">
<i className="w-6 h-6" data-lucide="sparkles"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight relative z-10">Full Custom AI ERP</h3>
<p className="leading-relaxed text-sm sm:text-base text-gray-600 flex-1 relative z-10">
                    If your workflows are unique, we build your tailored system from scratch.
                </p>
</div>

<div className="group p-8 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal-on-scroll delay-300 flex flex-col relative z-10">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 border border-orange-100 flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
<i className="w-6 h-6" data-lucide="git-merge"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">The Hybrid Bridge</h3>
<p className="leading-relaxed text-sm sm:text-base text-gray-500 flex-1">
                    We add smart AI layers to your current "old-school" ERP to modernize it without a full migration.
                </p>
</div>
</div>

<div className="mt-16 flex justify-center reveal-on-scroll delay-400 relative z-10">
<a className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-sm transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg hover:shadow-[#25D366]/20" href="#">
<svg aria-hidden="true" className="lucide lucide-message-circle" data-lucide="message-circle" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                Chat on WhatsApp
            </a>
</div>
</div>



</section>

<section className="bg-gray-100 w-full border-gray-100 border-b pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 gap-x-16 gap-y-16 items-start">

<div className="lg:col-span-4 sticky top-24 reveal-on-scroll">
<div className="inline-block text-[10px] uppercase font-semibold text-blue-600 tracking-widest border-blue-100 border bg-blue-50 rounded-full px-3 py-1 mb-4">
                The Squad
                </div>
<h2 className="md:text-5xl text-4xl font-semibold text-gray-900 tracking-tight mb-6">Tech core team - no one show, long term follow up.</h2>
<div className="flex items-center gap-2 text-sm font-medium text-gray-900 bg-green-50 w-fit px-3 py-1 rounded-full border border-green-100">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                Available for audit
                </div>
</div>

<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 reveal-on-scroll delay-100">
<div className="w-[120px] h-[120px] rounded-full bg-gray-100 mb-4 overflow-hidden border border-gray-100 group">
<img alt="Arik" className="group-hover:scale-110 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/60e9792b-6a93-4b45-89d9-52962fd3a36d_320w.png"/>
</div>
<h3 className="text-lg font-semibold text-gray-900">Arik</h3>
<p className="uppercase text-xs font-semibold text-blue-600 tracking-wider mb-3">Business Strategy</p>
<p className="text-sm text-gray-500 leading-relaxed">Aligning the ERP's architecture with your commercial ROI.</p>
</div>

<div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 reveal-on-scroll delay-200">
<div className="overflow-hidden group flex text-gray-300 bg-gray-100 w-[120px] h-[120px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6445ba17-1e6f-4ded-a8a4-b7bac8e939c1_320w.png)] bg-cover bg-center border-gray-100 border rounded-full mb-4 items-center justify-center"></div>
<h3 className="text-lg font-semibold text-gray-900">Olivier</h3>
<p className="uppercase text-xs font-semibold text-purple-600 tracking-wider mb-3">Tech Lead</p>
<p className="text-sm text-gray-500 leading-relaxed">
                    Senior architect focused on building robust, non-experimental systems.
                </p>
</div>

<div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 reveal-on-scroll delay-300">
<div className="overflow-hidden group flex text-gray-300 bg-gray-100 w-[120px] h-[120px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cc82b49b-379c-4b7c-a6d4-eda7de4f70c6_320w.png)] bg-cover bg-center border-gray-100 border rounded-full mb-4 items-center justify-center"></div>
<h3 className="text-lg font-semibold text-gray-900">Renaud</h3>
<p className="uppercase text-xs font-semibold text-orange-600 tracking-wider mb-3">Tech Lead &amp; Security</p>
<p className="text-sm text-gray-500 leading-relaxed">
                    Senior expert ensuring stable, secure implementations for your data.
                </p>
</div>
</div>
</div>
</div>
</section><section className="text-white bg-gray-900 pt-24 pb-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-16 gap-y-16 items-center">
<div className="reveal-on-scroll">
<div className="inline-block text-xs font-medium border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 font-sans text-gray-300 bg-white/10 border-white/10">
                    Trusted by Visionaries
                </div>
<h2 className="md:text-5xl text-4xl font-semibold tracking-tight font-sans mb-6">14 Years. 200+ Clients.</h2>
<p className="text-lg leading-relaxed max-w-md font-sans text-gray-400">
                    We aren't just developers; we are Growth Architects who have been scaling businesses since 2012.
                </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 gap-x-4 gap-y-4 reveal-on-scroll delay-200">
<div className="flex transition-colors group h-24 border rounded-lg pt-6 pr-6 pb-6 pl-6 items-center justify-center hover:bg-white/10 bg-white/5 border-white/10">
<img alt="Logo Placeholder" className="group-hover:opacity-100 transition-opacity duration-300 filter opacity-50 mix-blend-screen w-auto h-6 object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b818f586-aad4-4401-93bf-769a001c3c4c_320w.png"/>
</div>
<div className="flex items-center justify-center p-6 rounded-lg border transition-colors group h-24 bg-white/5 border-white/10 hover:bg-white/10">
<img alt="Logo Placeholder" className="group-hover:opacity-100 transition-opacity duration-300 filter opacity-50 mix-blend-screen w-auto h-6 object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b7b83f3c-7515-403c-99a4-e864772ec98d_320w.png"/>
</div>
<div className="flex transition-colors group h-24 border rounded-lg pt-6 pr-6 pb-6 pl-6 items-center justify-center hover:bg-white/10 bg-white/5 border-white/10">
<img alt="Logo Placeholder" className="group-hover:opacity-100 transition-opacity duration-300 filter opacity-50 mix-blend-screen w-auto h-6 object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f8cebf7b-7fa1-49c7-9af8-e2fcc429a32f_320w.png"/>
</div>
<div className="flex items-center justify-center p-6 rounded-lg border transition-colors group h-24 bg-white/5 border-white/10 hover:bg-white/10">
<img alt="Logo Placeholder" className="group-hover:opacity-100 transition-opacity duration-300 filter opacity-50 mix-blend-screen w-auto h-6 object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/74278589-b58b-4123-be61-9c0b7fdbc381_320w.png"/>
</div>
<div className="flex items-center justify-center p-6 rounded-lg border transition-colors group h-24 bg-white/5 border-white/10 hover:bg-white/10">
<img alt="Logo Placeholder" className="group-hover:opacity-100 transition-opacity duration-300 filter bg-center opacity-50 mix-blend-screen w-auto h-8 object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df9dfe9d-f433-4192-ad9e-50b40ddecc24_320w.png"/>
</div>
<div className="flex items-center justify-center p-6 rounded-lg border transition-colors group h-24 bg-white/5 border-white/10 hover:bg-white/10">
<img alt="Logo Placeholder" className="group-hover:opacity-100 transition-opacity duration-300 filter bg-center opacity-50 mix-blend-screen w-auto h-10 object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5705746e-a63d-43db-97f1-a27b4c500024_320w.png"/>
</div>
</div>
</div>
</section>

<section className="bg-white z-20 pt-24 pb-24 relative" id="packages">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-5xl text-gray-900 mb-4 font-semibold">Pragmatic Pricing</h2>
<p className="text-gray-500">Transparent costs to start your automation journey.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="hover:border-blue-300 transition-colors text-gray-900 bg-white border-gray-300 border rounded-2xl pt-8 pr-8 pb-8 pl-8 reveal-on-scroll delay-100">
<h3 className="text-lg font-bold mb-2">Scope your AI ERP</h3>
<p className="text-sm text-gray-500 mb-6 h-10">A complete technical map and workflow audit.</p>
<div className="text-3xl font-semibold mb-6">€900</div>
<ul className="space-y-3 mb-8 text-sm text-gray-600">
<li className="flex gap-2"><iconify-icon className="text-xl text-blue-500" height="20" icon="solar:check-circle-linear" style={{color: 'rgb(17, 24, 39)'}} width="20"></iconify-icon> Workflow Audit</li>
<li className="flex gap-2"><iconify-icon className="text-xl text-blue-500" height="20" icon="solar:check-circle-linear" style={{color: 'rgb(17, 24, 39)'}} width="20"></iconify-icon> Data Architecture Map</li>
<li className="flex gap-2"><iconify-icon className="text-xl text-blue-500" height="20" icon="solar:check-circle-linear" style={{color: 'rgb(17, 24, 39)'}} width="20"></iconify-icon> Roadmap Delivery</li>
</ul>
<button className="w-full py-3 rounded-lg border border-gray-200 hover:bg-gray-50 font-medium text-sm transition-colors">Select Plan</button>
</div>

<div className="transform hover:shadow-2xl transition-shadow md:-translate-y-4 text-white bg-gray-900 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-xl reveal-on-scroll delay-200">
<div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl uppercase tracking-wider">Featured</div>
<h3 className="text-lg font-bold mb-2">2-Day Work Together</h3>
<p className="text-sm text-gray-200 h-10 mb-6">Building the first functional core module of your ERP.</p>
<div className="text-3xl mb-6 font-semibold">Custom Quote</div>
<ul className="space-y-3 mb-8 text-sm text-blue-50">
<li className="flex gap-2"><iconify-icon className="text-white text-xl" icon="solar:check-circle-linear"></iconify-icon> Rapid Prototyping</li>
<li className="flex gap-2"><iconify-icon className="text-white text-xl" icon="solar:check-circle-linear"></iconify-icon> Core Module Build</li>
<li className="flex gap-2"><iconify-icon className="text-white text-xl" icon="solar:check-circle-linear"></iconify-icon> Immediate Value</li>
</ul>
<button className="hover:bg-gray-100 transition-colors transform hover:scale-105 duration-200 text-sm font-medium text-gray-800 bg-white w-full rounded-lg py-3 shadow-lg">Get Quote</button>
</div>

<div className="hover:border-blue-300 transition-colors reveal-on-scroll delay-300 text-gray-900 bg-white border-gray-300 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<img alt="Profile" className="w-[120px] h-[120px] object-cover border-gray-100 border rounded-full mb-6 shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3126296e-981b-4239-9323-ace4001939d9_320w.png"/>
<div className="text-3xl font-medium tracking-tight mb-6">Contact Us</div><h3 className="text-lg font-semibold mb-2">Custom Journey</h3>
<p className="text-sm text-gray-500 h-10 mb-6">For long-term builds and complex integrations.</p>
<ul className="space-y-3 mb-8 text-sm text-gray-600">
<li className="flex gap-2"><iconify-icon className="text-xl text-blue-500" height="20" icon="solar:check-circle-linear" style={{color: 'rgb(17, 24, 39)'}} width="20"></iconify-icon> Full Custom Dev</li>
<li className="flex gap-2"><iconify-icon className="text-xl text-blue-500" height="20" icon="solar:check-circle-linear" style={{color: 'rgb(17, 24, 39)'}} width="20"></iconify-icon> Long-term Support</li>
<li className="flex gap-2"><iconify-icon className="text-xl text-blue-500" height="20" icon="solar:check-circle-linear" style={{color: 'rgb(17, 24, 39)'}} width="20"></iconify-icon> Legacy Migration</li>
</ul>
<button className="w-full py-3 rounded-lg border border-gray-200 hover:bg-gray-50 font-normal text-sm transition-colors flex items-center justify-center gap-2 group">
<iconify-icon className="text-xl" icon="logos:whatsapp-icon"></iconify-icon> Chat on WhatsApp
    </button>
</div>
</div>
</div>
</section>

<footer className="bg-gray-50 border-gray-200 border-t pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
<div className="reveal-on-scroll">
<h2 className="text-4xl font-semibold text-gray-900 tracking-tight font-sans mb-4">Ready to build your ERP?</h2>
<div className="flex flex-col sm:flex-row gap-4 text-gray-500 items-start sm:items-center">
<a className="transition-colors hover:text-black font-sans flex items-center gap-2" href="mailto:alicia@26lights.com"><iconify-icon icon="solar:letter-linear"></iconify-icon> alicia@26lights.com</a>
<span className="hidden sm:block w-1 h-1 rounded-full bg-gray-300"></span>
<a className="transition-colors hover:text-black font-sans flex items-center gap-2" href="/tel:+32492660089"><iconify-icon icon="solar:phone-calling-linear"></iconify-icon> +32 492 66 00 89</a>
</div>
<div className="mt-4 text-gray-400 font-sans text-sm">Brussels / Paris</div>
</div>
<div className="flex flex-col md:items-end justify-center reveal-on-scroll delay-100">
<a className="inline-flex items-center gap-2 hover:gap-3 transition-all font-medium text-white bg-black px-6 py-3 rounded-lg font-sans shadow-lg shadow-gray-200" href="https://calendly.com/alicia-26lights/30min?month=2026-02">
                        Book discovery call <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-xs border-gray-200 text-gray-400 reveal-on-scroll delay-200">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<span className="font-sans">© 2026 26lights. All rights reserved.</span>
</div>
<div className="flex gap-6">
<a className="font-sans hover:text-gray-900" href="#">Privacy</a>
<a className="font-sans hover:text-gray-900" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
