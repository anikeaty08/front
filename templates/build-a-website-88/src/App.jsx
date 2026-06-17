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
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-white/5">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center text-white group-hover:bg-white/20 transition-colors duration-300">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight text-sm uppercase">Huracan</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#features">Facility</a>
<a className="hover:text-white transition-colors" href="#classes">Classes</a>
<a className="hover:text-white transition-colors" href="#membership">Pricing</a>
<a className="hover:text-white transition-colors" href="#location">Aonang</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium bg-white text-zinc-950 px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors" href="#membership">
<span>Join Now</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</a>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
<div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500 rounded-full blur-[128px]"></div>
<div className="absolute top-40 right-20 w-96 h-96 bg-teal-500 rounded-full blur-[128px]"></div>
</div>
<div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
                Now Open in Aonang, Krabi
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                Forge your storm <br className="hidden md:block"/>
<span className="text-gradient">in paradise.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                The most advanced training facility in Krabi. Premium equipment, fully air-conditioned, and designed for the modern athlete.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-8 py-3 bg-white text-zinc-950 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="#membership">
                    Get a Day Pass
                    <iconify-icon icon="solar:ticket-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="w-full md:w-auto px-8 py-3 bg-zinc-900 border border-zinc-800 text-white rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors" href="#features">
                    Explore Facility
                </a>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-zinc-950/50">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center md:items-start gap-2">
<iconify-icon className="text-teal-500 mb-2" icon="solar:thermometer-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-2xl font-semibold text-white tracking-tight">22°C</span>
<span className="text-xs text-zinc-500 uppercase tracking-wider">Climate Control</span>
</div>
<div className="flex flex-col items-center md:items-start gap-2">
<iconify-icon className="text-indigo-500 mb-2" icon="solar:dumbbell-large-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-2xl font-semibold text-white tracking-tight">500m²</span>
<span className="text-xs text-zinc-500 uppercase tracking-wider">Floor Space</span>
</div>
<div className="flex flex-col items-center md:items-start gap-2">
<iconify-icon className="text-pink-500 mb-2" icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-2xl font-semibold text-white tracking-tight">06-23</span>
<span className="text-xs text-zinc-500 uppercase tracking-wider">Opening Hours</span>
</div>
<div className="flex flex-col items-center md:items-start gap-2">
<iconify-icon className="text-orange-500 mb-2" icon="solar:map-point-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-2xl font-semibold text-white tracking-tight">800m</span>
<span className="text-xs text-zinc-500 uppercase tracking-wider">From Beach</span>
</div>
</div>
</section>

<section className="py-24" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Engineered for Performance</h2>
<p className="text-zinc-400 max-w-xl">We don't just provide weights. We provide an ecosystem designed to help you push your limits while escaping the humidity.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="col-span-1 md:col-span-2 bg-zinc-900/40 border border-white/5 rounded-2xl p-8 relative overflow-hidden group card-hover transition-all duration-300">
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-6 text-white border border-white/5">
<iconify-icon icon="solar:dumbbell-small-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Hammer Strength &amp; Life Fitness</h3>
<p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
                            Imported biomechanically precise machinery ensuring isolation and safety for every muscle group. Full rack of dumbbells up to 50kg.
                        </p>
</div>
<div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-indigo-500/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-8 relative overflow-hidden group card-hover transition-all duration-300">
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-6 text-white border border-white/5">
<iconify-icon icon="solar:snowflake-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Arctic Air</h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                            Aonang is hot. Huracan is not. Industrial HVAC systems keep the floor crisp and dry.
                        </p>
</div>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-8 relative overflow-hidden group card-hover transition-all duration-300">
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-6 text-white border border-white/5">
<iconify-icon icon="solar:cup-hot-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Recovery Bar</h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                            Post-workout protein shakes, BCAAs, and fresh espresso available at the front desk.
                        </p>
</div>
</div>

<div className="col-span-1 md:col-span-2 bg-zinc-900/40 border border-white/5 rounded-2xl p-8 relative overflow-hidden group card-hover transition-all duration-300">
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-6 text-white border border-white/5">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Functional &amp; HIIT Zone</h3>
<p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
                            Turf area equipped with kettlebells, battle ropes, plyo boxes and TRX for high-intensity functional training.
                        </p>
</div>
<div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-teal-500/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="membership">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/20 to-transparent pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Transparent Pricing</h2>
<p className="text-zinc-400">No hidden fees. No contracts. Just train.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-zinc-900/20 border border-white/5 rounded-2xl p-8 flex flex-col hover:border-zinc-700 transition-colors">
<div className="mb-4">
<span className="text-sm font-medium text-zinc-400">Day Pass</span>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold text-white tracking-tight">300</span>
<span className="text-sm text-zinc-500">THB</span>
</div>
<ul className="flex-1 space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon>
                            Full gym access
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon>
                            Locker &amp; Shower
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon>
                            Free WiFi
                        </li>
</ul>
<a className="w-full block py-2.5 rounded-lg border border-white/10 text-center text-sm font-medium text-white hover:bg-white hover:text-black transition-all" href="#">Select</a>
</div>

<div className="bg-zinc-900/80 border border-indigo-500/30 rounded-2xl p-8 flex flex-col relative shadow-[0_0_40px_-10px_rgba(99,102,241,0.1)]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Popular</div>
<div className="mb-4">
<span className="text-sm font-medium text-indigo-400">1 Week</span>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold text-white tracking-tight">1,200</span>
<span className="text-sm text-zinc-500">THB</span>
</div>
<ul className="flex-1 space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                            Access 06:00 - 23:00
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                            Towel Service
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                            10% off at Bar
                        </li>
</ul>
<a className="w-full block py-2.5 rounded-lg bg-indigo-600 text-center text-sm font-medium text-white hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20" href="#">Select</a>
</div>

<div className="bg-zinc-900/20 border border-white/5 rounded-2xl p-8 flex flex-col hover:border-zinc-700 transition-colors">
<div className="mb-4">
<span className="text-sm font-medium text-zinc-400">1 Month</span>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold text-white tracking-tight">2,500</span>
<span className="text-sm text-zinc-500">THB</span>
</div>
<ul className="flex-1 space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon>
                            Unlimited Access
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon>
                            Free Intro Session
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon>
                            Member Events
                        </li>
</ul>
<a className="w-full block py-2.5 rounded-lg border border-white/10 text-center text-sm font-medium text-white hover:bg-white hover:text-black transition-all" href="#">Select</a>
</div>
</div>
<div className="mt-8 text-center">
<p className="text-xs text-zinc-500">Accepting Cash, QR Payment (PromptPay), and Credit Cards (+3%).</p>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="location">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-1/2 space-y-6">
<h2 className="text-3xl font-semibold text-white tracking-tight">Find us in Aonang</h2>
<div className="space-y-4">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-900 flex-shrink-0 flex items-center justify-center border border-white/5">
<iconify-icon className="text-white" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="text-white font-medium">Huracan Fitness</p>
<p className="text-zinc-500 text-sm">420/1 Moo 2, Aonang, Krabi 81180<br/>Located behind the main mosque, next to Family Mart.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-900 flex-shrink-0 flex items-center justify-center border border-white/5">
<iconify-icon className="text-white" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<p className="text-white font-medium">Contact</p>
<p className="text-zinc-500 text-sm">+66 81 234 5678</p>
</div>
</div>
</div>
<div className="pt-4">
<form className="flex gap-2 max-w-sm">
<input className="bg-zinc-900 border border-zinc-800 text-white text-sm rounded-lg px-4 py-2 w-full focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-zinc-600" placeholder="Enter email for news" type="email"/>
<button className="bg-white text-black px-4 py-2 rounded-lg font-medium text-sm hover:bg-zinc-200 transition-colors" type="button">
                            Subscribe
                        </button>
</form>
</div>
</div>
<div className="w-full md:w-1/2 h-80 bg-zinc-900 rounded-2xl border border-white/5 overflow-hidden relative group">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=1748&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 bg-zinc-950/30"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<iconify-icon className="text-white drop-shadow-xl" icon="solar:map-point-bold" width="48"></iconify-icon>
<span className="mt-2 text-white font-medium text-sm bg-black/50 px-3 py-1 rounded backdrop-blur-md">View on Google Maps</span>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:bolt-linear"></iconify-icon>
<span className="text-zinc-500 text-sm font-medium tracking-tight">HURACAN FITNESS</span>
</div>
<div className="flex gap-6 text-sm text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Facebook</a>
<a className="hover:text-white transition-colors" href="#">Line Official</a>
</div>
<div className="text-xs text-zinc-600">
                © 2024 Huracan Fitness Aonang. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
