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
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
verum: {
50: '#eff4ff',
100: '#dbeafe',
200: '#bfdbfe',
300: '#93c5fd',
400: '#60a5fa',
500: '#3b82f6',
600: '#2563eb',
700: '#1d4ed8',
800: '#1e40af',
900: '#0f172a',
950: '#020617',
}
},
letterSpacing: {
tightest: '-0.04em',
},
boxShadow: {
'glow': '0 0 40px -10px rgba(59, 130, 246, 0.3)',
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
      

<nav className="fixed w-full z-50 transition-all duration-300 glass">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="bg-verum-950 text-white p-1.5 rounded-lg group-hover:bg-verum-600 transition-colors">
<span className="iconify" data-icon="lucide:box-select" data-strokeWidth="2" data-width="20"></span>
</div>
<span className="text-slate-900 font-bold tracking-tight text-lg">Verum<span className="text-slate-400 font-normal">Logistics</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-verum-600 transition-colors" href="#problem">The Problem</a>
<a className="hover:text-verum-600 transition-colors" href="#services">Services</a>
<a className="hover:text-verum-600 transition-colors" href="#tech">Technology</a>
<a className="hover:text-verum-600 transition-colors" href="#advantage">Why Dongguan</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Sign In</a>
<a className="group flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-verum-950 rounded-lg hover:bg-verum-800 transition-all shadow-lg shadow-verum-900/20" href="#audit">
                    Get Quote
                </a>
</div>
</div>
</nav>

<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-verum-950 pt-20">

<div className="absolute inset-0 z-0">

<img alt="Warehouse Interior" className="w-full h-full object-cover opacity-40 mix-blend-overlay" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-verum-950 via-verum-950/80 to-verum-900/60"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-verum-200 text-xs font-medium mb-8 backdrop-blur-md">
<span className="w-2 h-2 rounded-full bg-verum-400 animate-pulse"></span>
<span>Unified Logistics Platform</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tightest text-white mb-6 leading-[1.1]">
                Stop Paying the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Middleman Tax</span> on Your Supply Chain.
            </h1>
<p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                The first unified logistics partner for scaling DTC brands. We integrated Warehousing, Packaging, and Shipping into one raw price. No hidden margins.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-verum-950 transition-all bg-white rounded-lg hover:bg-verum-50 hover:scale-[1.02] active:scale-[0.98] shadow-glow">
                    Get a Raw Price Quote
                </button>
<button className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-slate-300 transition-all border border-slate-700/50 bg-slate-800/20 backdrop-blur-sm rounded-lg hover:text-white hover:bg-slate-800/40">
                    See How It Works
                </button>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden" id="problem">
<div className="absolute inset-0 bg-grid opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold tracking-tight text-slate-900">The Logistics Reality</h2>
<p className="text-slate-500 mt-2">Where does your margin actually go?</p>
</div>
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

<div className="bg-white/50 rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="iconify text-red-500" data-icon="lucide:alert-triangle" data-width="120"></span>
</div>
<div className="mb-8">
<span className="text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-2 py-1 rounded">The Old Way</span>
<h3 className="text-2xl font-bold text-slate-900 mt-3">The Margin Stack</h3>
<p className="text-slate-500 mt-2 text-sm">Everyone takes a cut before your product even leaves China.</p>
</div>
<div className="space-y-8 relative pl-4">

<div className="relative z-10 flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
<div className="flex items-center gap-3">
<span className="iconify text-slate-400" data-icon="lucide:factory" data-width="20"></span>
<span className="font-medium text-slate-700">Factory</span>
</div>
<span className="text-xs font-mono text-red-500 bg-red-50 px-2 py-1 rounded">+10% Margin</span>
</div>
<div className="absolute left-[2rem] top-[3.5rem] h-8 w-0.5 bg-slate-200"></div>

<div className="relative z-10 flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
<div className="flex items-center gap-3">
<span className="iconify text-slate-400" data-icon="lucide:package" data-width="20"></span>
<span className="font-medium text-slate-700">Packaging Agency</span>
</div>
<span className="text-xs font-mono text-red-500 bg-red-50 px-2 py-1 rounded">+15% Margin</span>
</div>
<div className="absolute left-[2rem] top-[9.5rem] h-8 w-0.5 bg-slate-200"></div>

<div className="relative z-10 flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
<div className="flex items-center gap-3">
<span className="iconify text-slate-400" data-icon="lucide:warehouse" data-width="20"></span>
<span className="font-medium text-slate-700">3PL Warehouse</span>
</div>
<span className="text-xs font-mono text-red-500 bg-red-50 px-2 py-1 rounded">+10% Margin</span>
</div>
<div className="absolute left-[2rem] top-[15.5rem] h-8 w-0.5 bg-slate-200"></div>

<div className="relative z-10 flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
<div className="flex items-center gap-3">
<span className="iconify text-slate-400" data-icon="lucide:truck" data-width="20"></span>
<span className="font-medium text-slate-700">Carrier</span>
</div>
<span className="text-xs font-mono text-red-500 bg-red-50 px-2 py-1 rounded">+5% Margin</span>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-verum-100 shadow-xl shadow-verum-100/50 relative overflow-hidden h-full flex flex-col justify-center">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-verum-50/50 to-transparent pointer-events-none"></div>
<div className="mb-12 relative z-10">
<span className="text-xs font-bold text-verum-600 uppercase tracking-widest bg-verum-50 px-2 py-1 rounded">The Unified Way</span>
<h3 className="text-2xl font-bold text-slate-900 mt-3">Verum Logistics</h3>
<p className="text-slate-500 mt-2 text-sm">We consolidated the chain. You pay for the service, not the hand-offs.</p>
</div>
<div className="space-y-4 relative z-10">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200">
<span className="iconify text-slate-500" data-icon="lucide:factory" data-width="20"></span>
</div>
<span className="font-semibold text-slate-900">Factory</span>
</div>
<div className="h-16 ml-6 border-l-2 border-dashed border-verum-300"></div>
<div className="bg-verum-950 text-white p-6 rounded-2xl shadow-lg relative">
<div className="absolute -left-3 top-1/2 -translate-y-1/2 w-3 h-3 bg-verum-950 transform rotate-45"></div>
<div className="flex items-center gap-4 mb-2">
<div className="bg-white/20 p-2 rounded-lg">
<span className="iconify" data-icon="lucide:box-select" data-width="24"></span>
</div>
<span className="font-bold text-lg">Verum Unified</span>
</div>
<p className="text-sm text-slate-400">Packaging + Warehousing + Shipping</p>
<div className="mt-3 inline-block px-2 py-0.5 rounded border border-accent-500/30 text-accent-400 text-xs font-mono bg-accent-500/10">Single Raw Price</div>
</div>
<div className="h-16 ml-6 border-l-2 border-dashed border-verum-300"></div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center border border-green-200">
<span className="iconify text-green-600" data-icon="lucide:smile" data-width="20"></span>
</div>
<span className="font-semibold text-slate-900">Customer</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-verum-950 border-y border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
<div className="text-center lg:text-left">
<div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">10k</div>
<div className="text-sm font-medium text-slate-400 uppercase tracking-wide">SQM Facility in Dongguan</div>
<div className="text-xs text-slate-600 mt-1">Heart of Manufacturing</div>
</div>
<div className="text-center lg:text-left">
<div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">200k+</div>
<div className="text-sm font-medium text-slate-400 uppercase tracking-wide">Daily Order Capacity</div>
<div className="text-xs text-slate-600 mt-1">We scale when you scale</div>
</div>
<div className="text-center lg:text-left">
<div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">&lt;24h</div>
<div className="text-sm font-medium text-slate-400 uppercase tracking-wide">Pick &amp; Pack Time</div>
<div className="text-xs text-slate-600 mt-1">Same-day processing</div>
</div>
<div className="text-center lg:text-left">
<div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">0</div>
<div className="text-sm font-medium text-slate-400 uppercase tracking-wide">Hidden Fees</div>
<div className="text-xs text-slate-600 mt-1">Transparent pricing model</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-verum-200 hover:shadow-xl hover:shadow-verum-100/50 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 text-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-verum-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:warehouse" data-width="24"></span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Warehousing</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        Strategic storage in Dongguan. Located minutes from major manufacturers to reduce inbound transit costs. 24/7 security and climate control.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-verum-200 hover:shadow-xl hover:shadow-verum-100/50 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 text-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-verum-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:package-open" data-width="24"></span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Custom Packaging</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        Don't pay a third-party agency. We handle custom boxing, inserts, and kitting in-house, ensuring your unboxing experience is premium without the premium price tag.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-verum-200 hover:shadow-xl hover:shadow-verum-100/50 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 text-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-verum-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:globe-2" data-width="24"></span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Global Logistics</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        Direct injection shipping lines. We bypass low-tier postal services to get products to US/EU doorsteps fast, with end-to-end tracking.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200 overflow-hidden" id="tech">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-verum-100 text-verum-700 text-xs font-medium mb-6">
<span className="iconify" data-icon="lucide:cpu" data-width="14"></span>
<span>Real-time Sync</span>
</div>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">Your Command Center.</h2>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">
                        Seamless 1-click integration with Shopify, WooCommerce, and Magento. View inventory, track shipments, and manage returns in real-time.
                    </p>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
<span className="iconify text-green-500" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-sm font-medium text-slate-700">Inventory Level Syncing</span>
</div>
<div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
<span className="iconify text-green-500" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-sm font-medium text-slate-700">Automated Tracking Updates</span>
</div>
<div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
<span className="iconify text-green-500" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-sm font-medium text-slate-700">Address Validation API</span>
</div>
</div>
</div>

<div className="relative group">

<div className="absolute -inset-4 bg-gradient-to-r from-verum-200 to-blue-100 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-75 transition duration-500"></div>

<div className="relative mx-auto bg-slate-900 rounded-t-2xl p-2 pb-0 w-full max-w-[600px] shadow-2xl">

<div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-700"></div>

<div className="bg-white rounded-t-lg overflow-hidden border-4 border-slate-900 border-b-0 h-[350px] relative">

<div className="absolute inset-0 bg-slate-50 p-6 flex flex-col">

<div className="flex justify-between items-center mb-6">
<h4 className="font-bold text-slate-900 text-lg">Dashboard</h4>
<div className="flex gap-2">
<div className="h-8 w-24 bg-white border border-slate-200 rounded text-xs flex items-center justify-center text-slate-500">Last 30 Days</div>
<div className="h-8 w-8 bg-verum-600 rounded flex items-center justify-center text-white shadow-lg shadow-verum-200">
<span className="iconify" data-icon="lucide:download" data-width="14"></span>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-4 mb-6">
<div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
<div className="text-[10px] text-slate-400 uppercase tracking-wide font-semibold">Orders</div>
<div className="text-xl font-bold text-slate-900">1,204</div>
<div className="text-[10px] text-green-500 font-medium">+12%</div>
</div>
<div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
<div className="text-[10px] text-slate-400 uppercase tracking-wide font-semibold">Revenue</div>
<div className="text-xl font-bold text-slate-900">$48k</div>
<div className="text-[10px] text-green-500 font-medium">+8%</div>
</div>
<div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
<div className="text-[10px] text-slate-400 uppercase tracking-wide font-semibold">Avg Ship</div>
<div className="text-xl font-bold text-slate-900">4.2d</div>
<div className="text-[10px] text-green-500 font-medium">-0.5d</div>
</div>
</div>

<div className="flex-1 bg-white rounded-xl border border-slate-100 p-4 shadow-sm relative overflow-hidden">
<div className="flex items-end justify-between h-full gap-2 px-2">
<div className="w-full bg-verum-50 rounded-t h-[40%] hover:bg-verum-500 transition-colors duration-300"></div>
<div className="w-full bg-verum-50 rounded-t h-[65%] hover:bg-verum-500 transition-colors duration-300"></div>
<div className="w-full bg-verum-50 rounded-t h-[50%] hover:bg-verum-500 transition-colors duration-300"></div>
<div className="w-full bg-verum-50 rounded-t h-[80%] hover:bg-verum-500 transition-colors duration-300 relative group-chart">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                $12,400 Today
                                            </div>
</div>
<div className="w-full bg-verum-50 rounded-t h-[60%] hover:bg-verum-500 transition-colors duration-300"></div>
<div className="w-full bg-verum-50 rounded-t h-[75%] hover:bg-verum-500 transition-colors duration-300"></div>
<div className="w-full bg-verum-50 rounded-t h-[90%] bg-verum-500 shadow-lg shadow-verum-200"></div>
</div>

<div className="absolute inset-0 pointer-events-none p-4 opacity-50">
<div className="w-full h-full border-b border-slate-100 mb-4"></div>
<div className="w-full h-full border-b border-slate-100 mb-4"></div>
<div className="w-full h-full border-b border-slate-100"></div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-slate-800 h-4 rounded-b-xl mx-auto w-full max-w-[600px] shadow-xl relative z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-slate-700 rounded-b-md"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="advantage">
<div className="max-w-4xl mx-auto px-6 text-center">
<span className="text-verum-600 font-bold tracking-wide uppercase text-xs mb-4 block">The Geographic Edge</span>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Why Dongguan?</h2>
<p className="text-xl text-slate-500 leading-relaxed mb-10">
                Most 3PLs are far from where your product is made. We are right next door. This allows us to inspect quality faster, restock sooner, and fix supplier errors before they become customer complaints.
            </p>
<div className="relative h-2 rounded-full bg-slate-100 max-w-lg mx-auto mb-4 overflow-hidden">
<div className="absolute left-0 top-0 h-full w-[10%] bg-verum-500 rounded-full"></div>
</div>
<div className="flex justify-between text-xs font-mono font-medium text-slate-400 max-w-lg mx-auto">
<span className="text-verum-600">Factory (Dongguan)</span>
<span>Port (Shenzhen)</span>
</div>
</div>
</section>

<section className="bg-slate-50 border-t border-slate-200 pt-24 pb-12" id="audit">

<div className="max-w-4xl mx-auto px-6 text-center mb-24">
<div className="bg-verum-950 rounded-3xl p-12 relative overflow-hidden shadow-2xl group">

<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-verum-800/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-verum-700/30 transition-colors duration-500"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Audit Your Logistics Costs.</h2>
<p className="text-slate-400 text-lg mb-8 max-w-lg mx-auto">
                        Send us your current shipping invoice. We will show you exactly how much margin you are losing to middlemen.
                    </p>
<button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-verum-950 bg-white rounded-lg hover:bg-verum-50 transition-all shadow-glow hover:scale-[1.02]">
                        Compare Pricing Now
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 border-t border-slate-200 pt-16">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="bg-verum-950 text-white p-1 rounded-md">
<span className="iconify" data-icon="lucide:box-select" data-width="16"></span>
</div>
<span className="text-slate-900 font-bold tracking-tight">Verum</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                        Unified logistics for the modern brand. Removing friction from factory to front door.
                    </p>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Services</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-verum-600" href="#">Warehousing</a></li>
<li><a className="hover:text-verum-600" href="#">Global Shipping</a></li>
<li><a className="hover:text-verum-600" href="#">Custom Packaging</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-verum-600" href="#">About</a></li>
<li><a className="hover:text-verum-600" href="#">Contact</a></li>
<li><a className="hover:text-verum-600" href="#">Legal</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Connect</h4>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-verum-600" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
<a className="hover:text-verum-600" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 pt-8 border-t border-slate-200">
<p>© 2024 Verum Logistics Inc.</p>
<div className="flex items-center gap-6 mt-4 md:mt-0">
<span className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Systems Online
                    </span>
</div>
</div>
</div>
</section>

    </>
  );
}
