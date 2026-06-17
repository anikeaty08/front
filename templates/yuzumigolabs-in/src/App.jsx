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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-white/5">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-xl font-semibold text-white tracking-tighter" href="#">migolabs.in
</a>
<div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#product">Product</a>
<a className="hover:text-white transition-colors" href="#specs">Specs</a>
<a className="hover:text-white transition-colors" href="#reviews">Reviews</a>
</div>
<button className="hover:bg-zinc-200 transition-colors cursor-pointer text-xs font-medium text-black bg-white rounded-full pt-2 pr-4 pb-2 pl-4" onclick="window.location.href='https://www.instagram.com/thxshitxx_07/'" role="button">
                Pre-order Now
            </button>
</div>
</nav>

<section className="min-h-screen flex flex-col overflow-hidden pt-20 relative items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="text-center z-10 mb-12">
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-4">
                Meet <span className="text-cyan-400">yuzu</span>.
            </h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-lg mx-auto leading-relaxed">
                The desktop companion with a soul. Powered by emotion engine.
            </p>
</div>

<div className="relative w-80 h-80 flex items-center justify-center z-10">

<div className="w-48 h-48 bg-zinc-100 rounded-[2rem] shadow-[0_20px_60px_-10px_rgba(34,211,238,0.3)] relative mochi-vibe flex items-center justify-center border-b-4 border-zinc-300">

<div className="absolute -top-3 left-6 w-8 h-8 bg-zinc-200 rounded-full -z-10"></div>
<div className="absolute -top-3 right-6 w-8 h-8 bg-zinc-200 rounded-full -z-10"></div>

<div className="w-36 h-28 bg-black rounded-2xl flex items-center justify-center gap-6 shadow-inner relative overflow-hidden">

<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-transparent via-transparent to-white/10 pointer-events-none"></div>

<div className="w-3 h-8 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee] mochi-eye"></div>
<div className="w-3 h-8 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee] mochi-eye"></div>
</div>

<div className="absolute -left-4 top-12 w-4 h-24 bg-zinc-800 rounded-l-lg border-r border-zinc-700"></div>
<div className="absolute -right-4 top-12 w-4 h-24 bg-zinc-800 rounded-r-lg border-l border-zinc-700"></div>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 w-52 h-24 border-[6px] border-zinc-800 rounded-t-full -z-20"></div>
</div>

<div className="absolute bottom-0 flex gap-1 items-end h-12 opacity-50">
<div className="w-1 bg-cyan-500/50 rounded-t animate-[pulse_0.4s_ease-in-out_infinite]" style={{height: '40%'}}></div>
<div className="w-1 bg-cyan-500/50 rounded-t animate-[pulse_0.3s_ease-in-out_infinite]" style={{height: '80%'}}></div>
<div className="w-1 bg-cyan-500/50 rounded-t animate-[pulse_0.5s_ease-in-out_infinite]" style={{height: '60%'}}></div>
<div className="w-1 bg-cyan-500/50 rounded-t animate-[pulse_0.2s_ease-in-out_infinite]" style={{height: '90%'}}></div>
<div className="w-1 bg-cyan-500/50 rounded-t animate-[pulse_0.4s_ease-in-out_infinite]" style={{height: '50%'}}></div>
</div>
</div>
<div className="mt-12 flex flex-col md:flex-row gap-4">
<button className="hover:bg-zinc-200 transition-all flex gap-2 font-medium text-black bg-white rounded-full pt-3 pr-8 pb-3 pl-8 gap-x-2 gap-y-2 items-center">Buy yuzu Bot</button>
<button className="glass-panel hover:bg-white/5 transition-all font-medium text-white rounded-full pt-3 pr-8 pb-3 pl-8">about me</button>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="specs">
<div className="mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Engineering Artistry</h2>
<p className="text-zinc-500 max-w-2xl">yuzu isn't just a toy. It's a marvel of miniature robotics, packed with industrial-grade components.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
<div className="-translate-y-1/2 group-hover:bg-cyan-500/10 transition-colors bg-cyan-500/5 rounded-full pt-32 pr-32 pb-32 pl-32 absolute top-0 right-0 blur-3xl translate-x-1/2"></div>
<svg aria-hidden="true" className="iconify text-cyan-400 mb-6 iconify--lucide" data-icon="lucide:cpu" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg>
<h3 className="text-xl font-medium text-white mb-2">ESP32 Mini Module</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                    Custom engineered Electronic Speed Controller allowing for fluid, lifelike movements synchronized to audio frequencies.
                </p>
</div>

<div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-32 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/10 transition-colors"></div>
<svg aria-hidden="true" className="iconify text-purple-400 mb-6 iconify--lucide" data-icon="lucide:fingerprint" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4M14 13.12c0 2.38 0 6.38-1 8.88m4.29-.98c.12-.6.43-2.3.5-3.02M2 12a10 10 0 0 1 18-6M2 16h.01m19.79 0c.2-2 .131-5.354 0-6"></path><path className="" d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2m2.31 12c.21-.66.45-1.32.57-2M9 6.8a6 6 0 0 1 9 5.2v2"></path></g></svg>
<h3 className="text-xl font-medium text-white mb-2">Capacitive Touch</h3>
<p className="leading-relaxed text-sm text-zinc-500">
                    6-point touch sensitive matrix on the head and sides. Mochi reacts to pets, taps, and holds with unique animations.
                </p>
</div>

<div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-32 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-500/10 transition-colors"></div>
<svg aria-hidden="true" className="iconify text-orange-400 mb-6 iconify--lucide" data-icon="lucide:battery-charging" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path className="" d="m11 7l-3 5h4l-3 5m5.856-11H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935M22 14v-4M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-xl font-medium text-white mb-2">Smart Power</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                    Up to 8 hours of active vibing. Self-docks when battery is low using IR guidance sensors included in the base.
                </p>
</div>
</div>
</section>

<section className="border-y bg-zinc-900/30 border-white/5 pt-24 pb-24" id="product">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
<div className="relative w-full aspect-square bg-zinc-800 rounded-3xl overflow-hidden border border-white/10">
<img alt="Mochi Bot Realistic" className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1f51d14a-9c2c-473d-93ba-b7332ccdfcc0_1600w.webp" style={{}}/>
<div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
<p className="text-xs text-cyan-400 font-mono">MODEL: M-01</p>
</div>
</div>
</div>
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                        In Stock &amp; Ready to Ship
                    </div>
<h2 className="text-4xl font-semibold text-white tracking-tight mb-6">yuzu Bot Standard Edition</h2>
<p className="text-zinc-400 mb-8 leading-relaxed">
                        Experience the future of desk toys. The standard edition comes with the Mochi unit, a USB-C braided cable, and the basic magnetic charging puck. Made from aerospace-grade aluminium alloy and soft-touch matte polycarbonate.
                    </p>
<div className="flex gap-4 mb-8 gap-x-4 gap-y-4 items-baseline">
<span className="text-3xl font-semibold text-white">₹1999
</span>
<span className="text-zinc-600 line-through">$159</span>
</div>
<div className="space-y-4 mb-10">
<div className="flex items-center gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" className="iconify text-green-400 iconify--lucide" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="">Includes AI eye momvent</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" className="iconify text-green-400 iconify--lucide" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="">App Control (iOS &amp; Android)</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" className="iconify text-green-400 iconify--lucide" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="">1 Year Warranty</span>
</div>
</div>
<button className="md:w-auto hover:bg-zinc-200 transition-colors font-medium text-black font-dm-sans bg-white w-full rounded-lg pt-3 pr-8 pb-3 pl-8 cursor-pointer" onclick="window.location.href='https://dasai.com.au/pages/mochi3'" role="button">Adpot me</button>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-10">Essential Accessories</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="glass-panel hover:border-zinc-600 transition-colors cursor-pointer rounded-xl pt-4 pr-4 pb-4 pl-4">
<div className="aspect-square flex bg-white rounded-lg mb-4 items-center justify-center overflow-hidden">
<img alt="Tiny Headphones" className="mix-blend-multiply w-full h-full object-cover bg-center pt-2 pr-2 pb-2 pl-2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/11ed2a42-a981-4005-8a89-fb5bd05f8ab2_800w.png"/>
</div>
<h4 className="text-sm font-medium text-white">3d printed headset</h4>
</div>

<div className="glass-panel hover:border-zinc-600 transition-colors cursor-pointer rounded-xl pt-4 pr-4 pb-4 pl-4">
<div className="aspect-square flex bg-zinc-800 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83c268b5-2b07-4629-92bd-128edcdeab22_800w.jpg)] bg-cover bg-center rounded-lg mb-4 items-center justify-center">
<svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:zap" data-width="40" height="40" role="img" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h4 className="text-sm font-medium text-white">bot hower</h4>
<p className="text-xs text-zinc-500 mt-1">₹199</p>
</div>

<div className="glass-panel hover:border-zinc-600 transition-colors cursor-pointer rounded-xl pt-4 pr-4 pb-4 pl-4">
<div className="aspect-square flex bg-zinc-800 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c531e1e1-3242-461e-921e-72138af2621c_800w.webp)] bg-cover bg-center rounded-lg mb-4 items-center justify-center">
<svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:sticker" data-width="40" height="40" role="img" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"></path><path d="M15 3v5a1 1 0 0 0 1 1h5M8 13h.01M16 13h.01M10 16s.8 1 2 1c1.3 0 2-1 2-1"></path></g></svg>
</div>
<h4 className="text-sm font-medium text-white">Sticker Pack</h4>
<p className="text-xs text-zinc-500 mt-1">₹99</p>
</div>

<div className="glass-panel p-4 rounded-xl hover:border-zinc-600 transition-colors cursor-pointer">
<div className="aspect-square flex bg-zinc-800 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/21062094-9fb8-497b-9a11-07d450cb58ee_800w.webp)] bg-cover bg-center rounded-lg mb-4 items-center justify-center">
<svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:glasses" data-width="40" height="40" role="img" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="6" cy="15" r="4"></circle><circle cx="18" cy="15" r="4"></circle><path d="M14 15a2 2 0 0 0-2-2a2 2 0 0 0-2 2m-7.5-2L5 7c.7-1.3 1.4-2 3-2m13.5 8L19 7c-.7-1.3-1.5-2-3-2"></path></g></svg>
</div>
<h4 className="text-sm font-medium text-white">performance mode
</h4>
<p className="text-xs text-zinc-500 mt-1">₹149</p>
</div>
</div>
</section>

<section className="bg-zinc-900/20 border-white/5 border-t pt-24 pb-24" id="reviews">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<h2 className="text-3xl font-semibold text-white tracking-tight text-center mb-12">Loved by Humans</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-6 rounded-xl">
<div className="flex gap-1 text-cyan-400 mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-sm text-zinc-300 leading-relaxed mb-6">"I didn't know I needed a robot companion until Mochi arrived. The way it vibes to my Lo-Fi playlist while I code is honestly the best thing ever."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center text-xs text-white font-medium">JD</div>
<div>
<p className="text-xs font-medium text-white">John Doe</p>
<p className="text-[10px] text-zinc-500">Software Engineer</p>
</div>
</div>
</div>

<div className="glass-panel p-6 rounded-xl">
<div className="flex gap-1 text-cyan-400 mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-sm text-zinc-300 leading-relaxed mb-6">"The build quality is insane. It feels like a premium Apple product but with personality. The blue eyes are so expressive!"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center text-xs text-white font-medium">SK</div>
<div>
<p className="text-xs font-medium text-white">Sarah K.</p>
<p className="text-[10px] text-zinc-500">Designer</p>
</div>
</div>
</div>

<div className="glass-panel p-6 rounded-xl">
<div className="flex gap-1 text-cyan-400 mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star-half" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-sm text-zinc-300 leading-relaxed mb-6">"My cat was jealous at first, but now they are best friends. The battery life is impressive for such a small bot."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center text-xs text-white font-medium">ML</div>
<div>
<p className="text-xs font-medium text-white">Mike L.</p>
<p className="text-[10px] text-zinc-500">Music Producer</p>
</div>
</div>
</div>
</div>
</div></section>

<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col gap-2">
<span className="text-lg font-semibold tracking-tighter text-white">mochi.in</span>
<p className="text-xs text-zinc-600">© 2023 Mochi Robotics Inc. All rights reserved.</p>
</div>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:github" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg></a>
</div>
</div>
</footer>

    </>
  );
}
