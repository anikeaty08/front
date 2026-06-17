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
      

<nav className="w-20 h-full bg-white/80 backdrop-blur-md border-r border-gray-200 flex flex-col items-center py-8 z-50 flex-shrink-0">

<div className="mb-12 cursor-pointer group">
<div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300">
<span className="font-heading font-medium text-lg tracking-tighter">F.</span>
</div>
</div>

<div className="flex flex-col gap-8 w-full items-center">
<button className="text-orange-600 hover:text-orange-700 transition-colors p-2 rounded-lg bg-orange-50">
<iconify-icon className="" icon="lucide:layers" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="text-slate-400 hover:text-slate-900 transition-colors p-2">
<svg className="" data-icon-set="lucide" data-lucide="type" height="24" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2M9 20h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="text-slate-400 hover:text-slate-900 transition-colors p-2">
<iconify-icon icon="lucide:palette" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="text-slate-400 hover:text-slate-900 transition-colors p-2">
<iconify-icon icon="lucide:component" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="mt-auto flex flex-col gap-6 items-center">
<button className="text-slate-400 hover:text-slate-900 transition-colors">
<iconify-icon icon="lucide:settings-2" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 border-2 border-white shadow-sm"></div>
</div>
</nav>

<main className="flex-1 h-full overflow-y-auto relative scroll-smooth bg-gray-50">

<header className="relative w-full h-[60vh] overflow-hidden flex items-end p-12 lg:p-16 border-b border-gray-200 bg-slate-900">

<div className="absolute inset-0 z-0 opacity-60">
<img alt="Abstract Architecture" className="w-full h-full object-cover mix-blend-overlay saturate-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="z-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>

<div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-end gap-12 animate-slide-up">
<div className="max-w-3xl">
<span className="text-orange-500 font-sans font-medium tracking-widest text-xs uppercase mb-4 block">Design System v2.0</span>
<h1 className="lg:text-8xl leading-tight text-6xl font-normal text-white tracking-normal mb-6">
    Finance <br/><span className="italic text-slate-400">Reimagined.</span>
</h1>
<p className="text-slate-300 text-lg lg:text-xl font-light max-w-xl opacity-90">
                        A unified language for the next generation of banking interfaces. Precision, elegance, and clarity.
                    </p>
</div>

<div className="hidden lg:block relative w-96 h-60 bg-gradient-to-br from-slate-700/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl transform rotate-[-4deg] hover:rotate-0 transition-transform duration-500 ease-out">
<div className="absolute top-0 right-0 p-6">
<iconify-icon className="text-white/80" icon="lucide:contactless" width="32"></iconify-icon>
</div>
<div className="h-full flex flex-col justify-between">
<div className="w-12 h-8 bg-orange-500/80 rounded-md backdrop-blur-sm"></div>
<div>
<div className="text-white/60 font-mono text-sm mb-2">**** **** **** 4921</div>
<div className="flex justify-between items-end">
<span className="text-white font-medium tracking-wide">ALEXANDER RAY</span>
<span className="text-white/60 text-xs">09/28</span>
</div>
</div>
</div>

<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl pointer-events-none"></div>
</div>
</div>
</header>
<div className="lg:px-16 flex flex-col gap-32 max-w-7xl mr-auto ml-auto pt-20 pr-12 pb-20 pl-12 gap-x-32 gap-y-32">

<section className="animate-slide-up delay-100">
<div className="flex flex-col md:flex-row border-gray-200 border-b mb-12 pb-8 items-start justify-between">
<div className="">
<h2 className="text-4xl font-normal text-slate-900 mb-2">Typography</h2>
<p className="text-sm text-slate-500">Lora (Serif) &amp; Inter (Sans)</p>
</div>
<div className="mt-4 md:mt-0 px-4 py-1 bg-white border border-gray-200 rounded-full text-xs text-slate-500 font-mono">
                        base: 16px / scale: 1.250
                    </div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-4 space-y-8">
<div className="">
<span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block mb-2">Display</span>
<div className="lg:text-7xl leading-tight text-6xl text-slate-900 font-heading">Aa</div>
<div className="text-slate-500 mt-2 font-heading">Lora Regular</div>
</div>
<div className="">
<span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block mb-2">Body</span>
<div className="text-6xl lg:text-7xl font-sans text-slate-900 leading-tight font-medium">Aa</div>
<div className="text-slate-500 mt-2">Inter Medium</div>
</div>
</div>
<div className="lg:col-span-8 space-y-12">

<div className="space-y-6">
<div className="group flex items-baseline gap-8 pb-4 border-b border-transparent hover:border-gray-200 transition-colors">
<span className="w-24 text-xs text-slate-400 font-mono shrink-0">H1 / 64-80px</span>
<h1 className="md:text-7xl text-6xl font-normal text-slate-900 tracking-normal font-heading">Global Markets</h1>
</div>
<div className="group flex gap-8 hover:border-gray-200 transition-colors border-transparent border-b pb-4 gap-x-8 gap-y-8 items-baseline">
<span className="w-24 text-xs text-slate-400 font-mono shrink-0">H2 / 48px</span>
<h2 className="text-5xl font-normal text-slate-900 tracking-normal font-heading">Asset Allocation</h2>
</div>
<div className="group flex gap-8 hover:border-gray-200 transition-colors border-transparent border-b pb-4 gap-x-8 gap-y-8 items-baseline">
<span className="w-24 text-xs text-slate-400 font-mono shrink-0">H3 / 28px</span>
<h3 className="text-3xl font-heading font-normal text-slate-900 tracking-normal">Transaction History</h3>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="">
<span className="text-xs text-slate-400 font-mono block mb-3">Body Large / 18px</span>
<p className="text-lg text-slate-600 leading-relaxed">
                                    Financial freedom begins with clarity. Our platform provides a comprehensive view of your assets, liabilities, and opportunities in real-time.
                                </p>
</div>
<div>
<span className="text-xs text-slate-400 font-mono block mb-3">Body Regular / 16px</span>
<p className="text-base text-slate-600 leading-relaxed">
                                    Secure encryption ensures your data remains private. We utilize industry-standard protocols to safeguard every transaction against unauthorized access.
                                </p>
</div>
</div>
</div>
</div>
</section>

<section className="animate-slide-up delay-200">
<div className="flex flex-col md:flex-row justify-between items-start mb-12 border-b border-gray-200 pb-8">
<div>
<h2 className="text-4xl text-slate-900 font-normal mb-2">Color System</h2>
<p className="text-slate-500 text-sm">Primary Orange &amp; Dark Navy</p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">

<div className="col-span-2 md:col-span-2 lg:col-span-2 flex flex-col gap-3">
<div className="h-48 rounded-xl bg-orange-500 shadow-md flex items-end p-4 relative overflow-hidden group">
<div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="text-white font-mono text-xs z-10">Orange 500#F97316</span>
</div>
<div className="grid grid-cols-3 gap-3">
<div className="h-20 rounded-lg bg-orange-600 shadow-sm"></div>
<div className="h-20 rounded-lg bg-orange-400 shadow-sm"></div>
<div className="h-20 rounded-lg bg-orange-100 shadow-sm"></div>
</div>
</div>

<div className="col-span-2 md:col-span-2 lg:col-span-2 flex flex-col gap-3">
<div className="h-48 rounded-xl bg-slate-900 shadow-md flex items-end p-4 relative overflow-hidden">
<span className="text-white font-mono text-xs">Slate 900#0F172A</span>
</div>
<div className="grid grid-cols-3 gap-3">
<div className="h-20 rounded-lg bg-slate-800 shadow-sm"></div>
<div className="h-20 rounded-lg bg-slate-700 shadow-sm"></div>
<div className="h-20 rounded-lg bg-slate-600 shadow-sm"></div>
</div>
</div>

<div className="col-span-2 md:col-span-4 lg:col-span-2 flex flex-col gap-3">
<div className="h-48 rounded-xl bg-gray-100 shadow-md border border-gray-200 flex items-end p-4 text-slate-600">
<span className="font-mono text-xs">Gray 100#F3F4F6</span>
</div>
<div className="grid grid-cols-3 gap-3">
<div className="h-20 rounded-lg bg-white border border-gray-200 shadow-sm"></div>
<div className="h-20 rounded-lg bg-gray-50 border border-gray-200 shadow-sm"></div>
<div className="h-20 rounded-lg bg-gray-200 shadow-sm"></div>
</div>
</div>
</div>
</section>

<section className="animate-slide-up delay-300 pb-20">
<div className="flex flex-col md:flex-row justify-between items-start mb-12 border-b border-gray-200 pb-8">
<div>
<h2 className="text-4xl text-slate-900 font-normal mb-2">Interface</h2>
<p className="text-slate-500 text-sm">Components &amp; Form Elements</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="space-y-12">

<div className="space-y-6">
<h4 className="text-sm uppercase tracking-widest text-slate-400 font-semibold">Input Fields</h4>
<div className="relative group">
<input className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all shadow-sm" placeholder="email@address.com" type="email"/>
<div className="absolute right-4 top-3.5 text-slate-400">
<iconify-icon icon="lucide:mail" width="18"></iconify-icon>
</div>
</div>
<div className="flex gap-4">
<div className="relative flex-1">
<select className="appearance-none focus:outline-none focus:border-orange-500 cursor-pointer text-slate-700 bg-white w-full border-gray-200 border rounded-lg pt-3 pr-4 pb-3 pl-4 shadow-sm">
<option>Checking Account</option>
<option>Savings Account</option>
<option>Investment Portfolio</option>
</select>
<div className="absolute right-4 top-3.5 text-slate-400 pointer-events-none">
<iconify-icon icon="lucide:chevron-down" width="18"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<h4 className="text-sm uppercase tracking-widest text-slate-400 font-semibold">Actions</h4>
<div className="flex flex-wrap gap-4">
<button className="px-6 py-3 bg-slate-900 text-white text-sm font-medium rounded-lg shadow-md hover:bg-slate-800 hover:shadow-lg transition-all active:scale-95 flex items-center gap-2">
                                    Get Started
                                    <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<button className="px-6 py-3 bg-white border border-gray-200 text-slate-700 text-sm font-medium rounded-lg shadow-sm hover:border-gray-300 hover:bg-gray-50 transition-all active:scale-95">
                                    Documentation
                                </button>
<button className="hover:bg-orange-100 transition-all text-sm font-medium text-orange-600 bg-orange-50 rounded-lg pt-3 pr-6 pb-3 pl-6">
                                    Learn More
                                </button>
</div>
</div>

<div className="space-y-6">
<h4 className="text-sm uppercase tracking-widest text-slate-400 font-semibold">Controls</h4>
<div className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
<div className="flex items-center gap-3">
<div className="p-2 bg-orange-50 text-orange-600 rounded-md">
<iconify-icon icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<span className="text-slate-700 text-sm font-medium">Two-Factor Auth</span>
</div>

<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
</label>
</div>
<div className="pt-2">
<label className="text-xs font-semibold text-slate-500 mb-2 block uppercase">Credit Limit</label>
<input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" max="100" min="0" type="range" value="65"/>
<div className="flex justify-between mt-2 text-xs text-slate-400 font-mono">
<span>$1,000</span>
<span>$50,000</span>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 p-32 bg-orange-50 rounded-full blur-3xl opacity-50 -mr-16 -mt-16 pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-2xl font-heading text-slate-900">Your Cards</h3>
<p className="text-sm text-slate-500">Manage your physical and digital assets.</p>
</div>
<button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-slate-500 hover:bg-gray-50 transition-colors">
<iconify-icon icon="lucide:plus" width="20"></iconify-icon>
</button>
</div>

<div className="space-y-4">

<div className="flex items-center justify-between p-4 bg-slate-900 rounded-xl text-white shadow-md transform transition hover:-translate-y-1 cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon icon="lucide:gem" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium">Platinum Debit</div>
<div className="text-xs text-slate-400 font-mono">**** 8842</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium">$24,500.00</div>
<div className="text-xs text-orange-400">Active</div>
</div>
</div>

<div className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl text-slate-800 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center">
<iconify-icon icon="lucide:briefcase" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium">Business Account</div>
<div className="text-xs text-slate-400 font-mono">**** 1129</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium">$8,250.50</div>
<div className="text-xs text-slate-400">Active</div>
</div>
</div>

<div className="mt-8 pt-6 border-t border-gray-100">
<h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Recent Activity</h4>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-2 bg-gray-50 rounded-lg text-slate-500">
<iconify-icon icon="lucide:coffee" width="16"></iconify-icon>
</div>
<div className="text-sm text-slate-700">Starbucks Coffee</div>
</div>
<span className="text-sm font-mono text-slate-900">-$4.50</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-2 bg-gray-50 rounded-lg text-slate-500">
<iconify-icon icon="lucide:shopping-bag" width="16"></iconify-icon>
</div>
<div className="text-sm text-slate-700">Apple Store</div>
</div>
<span className="text-sm font-mono text-slate-900">-$1,299.00</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<footer className="border-t border-gray-200 py-12 px-12 lg:px-16">
<div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-xs font-medium">
<p>© 2023 Financial UI Kit. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<span className="cursor-pointer hover:text-orange-600 transition-colors">Privacy</span>
<span className="cursor-pointer hover:text-orange-600 transition-colors">Terms</span>
<span className="cursor-pointer hover:text-orange-600 transition-colors">Security</span>
</div>
</div>
</footer>
</main>

    </>
  );
}
