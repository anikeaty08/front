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


document.write(new Date().getFullYear())
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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 text-slate-900 hover:opacity-80 transition-opacity" href="#">

<div className="text-orange-500 flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:pie-chart-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-lg">bilz.ai</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-slate-900 transition-colors" href="#features">Features</a>
<a className="text-sm font-medium hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
</nav>

<div className="flex items-center gap-4">

<div className="hidden md:flex items-center gap-1 cursor-pointer hover:bg-slate-100 rounded-md py-1 px-2 transition-colors">
<span className="text-sm font-medium">EN</span>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<a className="hidden sm:inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 px-5 rounded-full transition-colors shadow-sm shadow-orange-500/20" href="#pricing">
                    Try for free
                </a>

<button className="md:hidden text-slate-900 p-1">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-b from-orange-50/50 to-transparent rounded-full blur-3xl -z-10"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 max-w-3xl mx-auto leading-tight mb-6">
                Take control of your restaurant costs. Easy and simple.
            </h1>
<p className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                Invoices, prices, food cost, margins — all in one place. Built for independent restaurateurs to run a profitable kitchen effortlessly.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<a className="w-full sm:w-auto inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white text-base font-medium py-3 px-8 rounded-full transition-colors shadow-sm shadow-orange-500/20" href="#pricing">
                    Try for free
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center text-slate-600 hover:text-slate-900 text-base font-medium py-3 px-8 rounded-full transition-colors group" href="#features">
                    See how it works
                    <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="max-w-5xl mx-auto">
<div className="rounded-2xl border border-slate-200/60 shadow-2xl shadow-slate-200/50 bg-white overflow-hidden flex flex-col aspect-[16/10] sm:aspect-[16/9] relative">

<div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2 shrink-0">
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
</div>

<div className="flex flex-1 overflow-hidden bg-slate-50/50">

<div className="hidden sm:flex w-48 border-r border-slate-100 bg-white p-4 flex-col gap-3">
<div className="w-24 h-4 bg-slate-100 rounded-md mb-4"></div>
<div className="w-full h-8 bg-orange-50 rounded-md"></div>
<div className="w-3/4 h-8 bg-slate-50 rounded-md"></div>
<div className="w-4/5 h-8 bg-slate-50 rounded-md"></div>
</div>

<div className="flex-1 p-6 flex flex-col gap-6 overflow-hidden">

<div className="grid grid-cols-3 gap-4 shrink-0">
<div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-2">
<div className="w-16 h-3 bg-slate-100 rounded-full"></div>
<div className="w-24 h-6 bg-slate-800 rounded-md"></div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-2">
<div className="w-20 h-3 bg-slate-100 rounded-full"></div>
<div className="w-20 h-6 bg-slate-800 rounded-md"></div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-2">
<div className="w-12 h-3 bg-slate-100 rounded-full"></div>
<div className="flex items-center gap-2">
<div className="w-16 h-6 bg-slate-800 rounded-md"></div>
<div className="w-8 h-4 bg-emerald-100 rounded-md"></div>
</div>
</div>
</div>

<div className="flex-1 bg-white rounded-xl border border-slate-100 shadow-sm p-6 flex flex-col gap-4">
<div className="w-32 h-4 bg-slate-100 rounded-md"></div>
<div className="flex-1 relative flex items-end gap-2 pb-4">

<div className="w-full h-[40%] bg-slate-100 rounded-t-sm"></div>
<div className="w-full h-[60%] bg-slate-100 rounded-t-sm"></div>
<div className="w-full h-[30%] bg-slate-100 rounded-t-sm"></div>
<div className="w-full h-[80%] bg-orange-100 rounded-t-sm relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded shadow-sm">Updated</div>
</div>
<div className="w-full h-[50%] bg-slate-100 rounded-t-sm"></div>
<div className="w-full h-[70%] bg-slate-100 rounded-t-sm"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-4">How it works</h2>
<p className="text-base text-slate-500 max-w-xl mx-auto">From paper to insights in less than a minute. No training required.</p>
</div>
<div className="relative max-w-4xl mx-auto">

<div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-slate-200"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">

<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900 font-medium mb-6 shadow-sm">1</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Sign up for free</h3>
<p className="text-sm text-slate-500">Takes 30 seconds. Connect with your email or Google account.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 font-medium mb-6 shadow-sm">2</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Snap your first invoice</h3>
<p className="text-sm text-slate-500">Take a photo, forward an email, or simply say it by voice.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900 font-medium mb-6 shadow-sm">3</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">See the results</h3>
<p className="text-sm text-slate-500">Prices, food cost, and P&amp;L update automatically in real-time.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Everything you need to run a profitable kitchen.</h2>
<p className="text-lg text-slate-500 max-w-2xl mx-auto">Designed for operators, not accountants. We handle the data so you can focus on the food.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
<div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mb-6">
<iconify-icon className="text-xl" icon="solar:document-add-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Snap an invoice — we'll handle the rest</h3>
<p className="text-sm text-slate-500 mb-8 flex-1">Just take a photo. We extract line items, quantities, and totals with total accuracy.</p>

<div className="h-32 bg-slate-50 rounded-xl border border-slate-100 p-4 flex flex-col gap-3 relative overflow-hidden">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-white border border-slate-200 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:camera-linear"></iconify-icon>
</div>
<div className="flex-1 h-2 bg-slate-200 rounded-full"></div>
</div>
<div className="w-full h-px bg-slate-200 my-1"></div>
<div className="flex justify-between items-center">
<div className="w-1/2 h-3 bg-slate-200 rounded-full"></div>
<div className="w-1/4 h-3 bg-slate-800 rounded-full"></div>
</div>
<div className="flex justify-between items-center">
<div className="w-2/3 h-3 bg-slate-200 rounded-full"></div>
<div className="w-1/5 h-3 bg-slate-800 rounded-full"></div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
<div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center mb-6">
<iconify-icon className="text-xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Prices going up? We'll let you know</h3>
<p className="text-sm text-slate-500 mb-8 flex-1">Track supplier price changes instantly. Get alerts before it impacts your bottom line.</p>

<div className="h-32 bg-slate-50 rounded-xl border border-slate-100 p-4 flex items-end gap-2 relative">
<div className="absolute top-4 right-4 bg-red-100 text-red-600 text-[10px] font-medium px-2 py-1 rounded flex items-center gap-1">
<iconify-icon icon="solar:arrow-up-linear"></iconify-icon> +12%
                        </div>
<div className="w-full h-[30%] bg-slate-200 rounded-t-sm"></div>
<div className="w-full h-[35%] bg-slate-200 rounded-t-sm"></div>
<div className="w-full h-[32%] bg-slate-200 rounded-t-sm"></div>
<div className="w-full h-[45%] bg-slate-200 rounded-t-sm"></div>
<div className="w-full h-[65%] bg-red-200 rounded-t-sm border-t-2 border-red-400"></div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
<div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6">
<iconify-icon className="text-xl" icon="solar:pie-chart-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Know the real cost of every dish</h3>
<p className="text-sm text-slate-500 mb-8 flex-1">Recipes link directly to your latest invoices. Food costs are always live and accurate.</p>

<div className="h-32 bg-slate-50 rounded-xl border border-slate-100 p-4 flex flex-col gap-2">
<div className="flex justify-between items-center mb-2">
<div className="w-1/3 h-4 bg-slate-300 rounded-md"></div>
<div className="text-xs font-semibold text-emerald-500">28% Target</div>
</div>
<div className="flex justify-between items-center p-2 bg-white rounded border border-slate-100">
<div className="w-1/2 h-2 bg-slate-200 rounded-full"></div>
<div className="w-8 h-2 bg-slate-300 rounded-full"></div>
</div>
<div className="flex justify-between items-center p-2 bg-white rounded border border-slate-100">
<div className="w-2/3 h-2 bg-slate-200 rounded-full"></div>
<div className="w-8 h-2 bg-slate-300 rounded-full"></div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
<div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center mb-6">
<iconify-icon className="text-xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Your margin, always under control</h3>
<p className="text-sm text-slate-500 mb-8 flex-1">A simple, real-time P&amp;L dashboard. Know exactly where your money is going.</p>

<div className="h-32 bg-slate-50 rounded-xl border border-slate-100 p-4 flex flex-col justify-center items-center relative">

<div className="w-20 h-20 rounded-full border-4 border-slate-100 border-t-emerald-400 border-r-emerald-400 flex items-center justify-center">
<span className="text-sm font-semibold text-slate-800">18%</span>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
<div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-500 flex items-center justify-center mb-6">
<iconify-icon className="text-xl" icon="solar:calendar-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Never miss a supplier payment</h3>
<p className="text-sm text-slate-500 mb-8 flex-1">A clear payment calendar with reminders so relationships with suppliers stay strong.</p>

<div className="h-32 bg-slate-50 rounded-xl border border-slate-100 p-4 grid grid-cols-4 gap-2">
<div className="bg-white border border-slate-100 rounded flex items-center justify-center text-[10px] text-slate-300">1</div>
<div className="bg-white border border-slate-100 rounded flex items-center justify-center text-[10px] text-slate-300">2</div>
<div className="bg-white border border-slate-100 rounded flex items-center justify-center text-[10px] text-slate-300 relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-400"></div>
                            3
                        </div>
<div className="bg-white border border-slate-100 rounded flex items-center justify-center text-[10px] text-slate-300">4</div>
<div className="bg-white border border-slate-100 rounded flex items-center justify-center text-[10px] text-slate-300">5</div>
<div className="bg-white border border-slate-100 rounded flex items-center justify-center text-[10px] text-slate-300">6</div>
<div className="bg-white border border-slate-100 rounded flex items-center justify-center text-[10px] text-slate-300">7</div>
<div className="bg-white border border-slate-100 rounded flex items-center justify-center text-[10px] text-slate-300 relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 h-1 bg-red-400"></div>
                            8
                        </div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
<div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center mb-6">
<iconify-icon className="text-xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Enter data your way</h3>
<p className="text-sm text-slate-500 mb-8 flex-1">Voice, chat, photo, PDF, or handwritten notes. Send it over, we organize it.</p>

<div className="h-32 bg-slate-50 rounded-xl border border-slate-100 p-4 flex items-center justify-center gap-4">
<div className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 hover:text-orange-500 transition-colors">
<iconify-icon className="text-lg" icon="solar:microphone-linear"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 hover:text-orange-500 transition-colors">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 hover:text-orange-500 transition-colors">
<iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 hover:text-orange-500 transition-colors">
<iconify-icon className="text-lg" icon="solar:document-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-8">Operating across Europe &amp; integrated with</p>

<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale mb-12">
<div className="text-xl font-semibold tracking-tight text-slate-800">Syrve</div>
<div className="text-xl font-semibold tracking-tight text-slate-800">ZoneSoft</div>
<div className="text-xl font-semibold tracking-tight text-slate-800">Lightspeed</div>
<div className="text-xl font-semibold tracking-tight text-slate-800">Square</div>
<div className="text-xl font-semibold tracking-tight text-slate-800">Deliverect</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-6">

<div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-600">
<iconify-icon className="text-orange-500" icon="solar:rocket-linear"></iconify-icon>
                    From-Start-to-Table Accelerator
                </div>

<div className="flex items-center gap-2 text-xl">
<span>🇬🇧</span>
<span>🇵🇹</span>
<span>🇪🇸</span>
<span>🇵🇱</span>
<span>🇬🇷</span>
<span>🇧🇬</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Simple pricing, no surprises.</h2>
<p className="text-lg text-slate-500 max-w-xl mx-auto">Start optimizing your costs for free. Upgrade when you need more power.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Free</h3>
<p className="text-sm text-slate-500 mb-6">Perfect for small independent spots getting started.</p>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight text-slate-900">€0</span>
<span className="text-slate-500 text-sm">/mo</span>
</div>
<a className="w-full inline-flex justify-center items-center bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium py-3 px-4 rounded-full transition-colors mb-8" href="#">
                        Start for free
                    </a>
<ul className="flex flex-col gap-3 text-sm text-slate-600 flex-1">
<li className="flex items-start gap-2">
<iconify-icon className="text-orange-500 text-base shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Basic invoice digitization
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-orange-500 text-base shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Supplier price tracking
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-orange-500 text-base shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Up to 50 invoices/mo
                        </li>
</ul>
</div>

<div className="bg-white rounded-3xl p-8 border-2 border-orange-500 shadow-lg shadow-orange-500/10 flex flex-col relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
                        MOST POPULAR
                    </div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Premium</h3>
<p className="text-sm text-slate-500 mb-6">For busy restaurants that need full visibility.</p>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight text-slate-900">€49</span>
<span className="text-slate-500 text-sm">/mo</span>
</div>
<a className="w-full inline-flex justify-center items-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-3 px-4 rounded-full transition-colors mb-8" href="#">
                        Try 14 days free
                    </a>
<ul className="flex flex-col gap-3 text-sm text-slate-600 flex-1">
<li className="flex items-start gap-2">
<iconify-icon className="text-orange-500 text-base shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Everything in Free
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-orange-500 text-base shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Live recipe costing
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-orange-500 text-base shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Real-time P&amp;L dashboard
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-orange-500 text-base shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Unlimited invoices
                        </li>
</ul>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Pro</h3>
<p className="text-sm text-slate-500 mb-6">Advanced controls for multiple locations.</p>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight text-slate-900">€99</span>
<span className="text-slate-500 text-sm">/mo</span>
</div>
<a className="w-full inline-flex justify-center items-center bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 text-sm font-medium py-3 px-4 rounded-full transition-colors mb-8" href="#">
                        Subscribe
                    </a>
<ul className="flex flex-col gap-3 text-sm text-slate-600 flex-1">
<li className="flex items-start gap-2">
<iconify-icon className="text-orange-500 text-base shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Everything in Premium
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-orange-500 text-base shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Multi-location support
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-orange-500 text-base shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            POS Integrations
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-orange-500 text-base shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Priority support
                        </li>
</ul>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 text-slate-900 mb-4 inline-flex" href="#">
<div className="text-orange-500 flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:pie-chart-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-lg">bilz.ai</span>
</a>
<p className="text-sm text-slate-500 max-w-xs mb-6">
                        The back-office platform built for independent restaurants. Control costs, track prices, and boost margins easily.
                    </p>

<div className="flex items-center gap-4 text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:laptop-linear"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Product</h4>
<ul className="flex flex-col gap-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#features">Features</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#pricing">Pricing</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Contact</a></li>
<li className="mt-2"><a className="text-orange-500 font-medium hover:text-orange-600 transition-colors" href="#">For restaurant chains →</a></li>
</ul>
</div>

<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Legal</h4>
<ul className="flex flex-col gap-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="mailto:hello@bilz.ai">hello(at)bilz.ai</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
<p>©  bilz.ai. All rights reserved.</p>
<div className="flex items-center gap-4">
<span>Designed for kitchens.</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
