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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-gradient-to-tr from-neutral-800 to-neutral-700 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors">
<span className="text-white font-medium tracking-tighter text-sm">NX</span>
</div>
<span className="text-neutral-200 font-medium tracking-tight text-sm">NEXUS</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium hover:text-white transition-colors" href="#specs">Specs</a>
<a className="text-xs font-medium hover:text-white transition-colors" href="#rates">Rates</a>
<a className="text-xs font-medium hover:text-white transition-colors" href="#events">Tournaments</a>
<a className="text-xs font-medium hover:text-white transition-colors" href="#location">Location</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-xs font-medium text-neutral-300 hover:text-white transition-colors">
                    Login
                </button>
<button className="bg-white text-black px-4 py-2 rounded-full text-xs font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2">
<span>Reserve Seat</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-10 animate-glow"></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-900/5 rounded-full blur-[100px] -z-10"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-indigo-300 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                Now Open 24/7
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter mb-8 leading-[0.9]">
                Elevate your <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">gameplay.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Experience esports on ultra-high-end workstations. <br className="hidden md:block"/>
                RTX 4090s, 360Hz refresh rates, and gigabit fiber latency.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto px-8 py-3 bg-white text-black rounded-lg text-sm font-medium hover:bg-neutral-200 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:gamepad-linear" width="18"></iconify-icon>
                    Book a Station
                </button>
<button className="w-full md:w-auto px-8 py-3 bg-transparent border border-neutral-800 text-neutral-300 rounded-lg text-sm font-medium hover:border-neutral-600 hover:text-white transition-all">
                    View Hardware Specs
                </button>
</div>
</div>

<div className="mt-20 max-w-6xl mx-auto border border-white/5 rounded-2xl bg-neutral-900/30 backdrop-blur-sm p-2 overflow-hidden mx-6">
<div className="relative aspect-video rounded-xl overflow-hidden bg-neutral-900 flex items-center justify-center group">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20 cursor-pointer hover:scale-105 transition-transform">
<iconify-icon className="text-white ml-1" icon="solar:play-linear" width="32"></iconify-icon>
</div>
<span className="text-sm text-neutral-300 font-medium tracking-tight">Watch Tour</span>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="specs">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Pro-Grade Hardware</h2>
<p className="text-sm text-neutral-500">Optimized for competitive play and zero compromise.</p>
</div>
<a className="text-sm text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors" href="#">
                    Full Specifications
                    <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 text-indigo-400">
<iconify-icon icon="solar:monitor-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-1">360Hz Displays</h3>
<p className="text-xs text-neutral-500 leading-relaxed">BenQ ZOWIE XL2566K monitors for buttery smooth motion clarity.</p>
</div>

<div className="group p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 text-purple-400">
<iconify-icon icon="solar:cpu-bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-1">RTX 4090 GPUs</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Paired with i9-14900K processors for maximum FPS in any title.</p>
</div>

<div className="group p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-400">
<iconify-icon icon="solar:wi-fi-router-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-1">10Gb Fiber</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Direct fiber connection ensuring &lt;5ms ping to major game servers.</p>
</div>

<div className="group p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 text-orange-400">
<iconify-icon icon="solar:armchair-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-1">Ergonomic Setup</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Herman Miller Embody chairs and customizable desk heights.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20" id="rates">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-xl mx-auto mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Flexible Access</h2>
<p className="text-sm text-neutral-400">Pay as you go or join the club for exclusive perks and reduced rates.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="p-8 rounded-2xl border border-white/5 bg-neutral-950 flex flex-col h-full">
<div className="mb-6">
<h3 className="text-lg font-medium text-white mb-2">Guest</h3>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-medium text-white tracking-tight">$8</span>
<span className="text-sm text-neutral-500">/ hour</span>
</div>
<p className="text-xs text-neutral-500 mt-4">Perfect for casual drop-ins and testing the waters.</p>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-xs text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> Access to Standard PC
                        </li>
<li className="flex items-center gap-3 text-xs text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> Guest Account
                        </li>
<li className="flex items-center gap-3 text-xs text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> Order Food &amp; Drink
                        </li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-xs font-medium text-white hover:bg-white/5 transition-colors">
                        Purchase Hour
                    </button>
</div>

<div className="relative p-8 rounded-2xl border border-indigo-500/30 bg-neutral-900/50 flex flex-col h-full shadow-[0_0_40px_-10px_rgba(79,70,229,0.15)]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full tracking-widest">
                        Most Popular
                    </div>
<div className="mb-6">
<h3 className="text-lg font-medium text-white mb-2">Nexus Member</h3>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-medium text-white tracking-tight">$5</span>
<span className="text-sm text-neutral-500">/ hour</span>
</div>
<p className="text-xs text-neutral-500 mt-4">Reduced rates and priority booking for regulars.</p>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-xs text-white">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon> Save Setup &amp; Peripherals
                        </li>
<li className="flex items-center gap-3 text-xs text-white">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon> Access to VIP Lounge
                        </li>
<li className="flex items-center gap-3 text-xs text-white">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon> 1 Free Drink / Visit
                        </li>
<li className="flex items-center gap-3 text-xs text-white">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon> Monthly $20 Fee
                        </li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-white text-black text-xs font-medium hover:bg-neutral-200 transition-colors">
                        Join Membership
                    </button>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-neutral-950 flex flex-col h-full">
<div className="mb-6">
<h3 className="text-lg font-medium text-white mb-2">Day Pass</h3>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-medium text-white tracking-tight">$45</span>
<span className="text-sm text-neutral-500">/ day</span>
</div>
<p className="text-xs text-neutral-500 mt-4">Unlimited access from open to close for marathons.</p>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-xs text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> Unlimited Playtime
                        </li>
<li className="flex items-center gap-3 text-xs text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> Reserved Station
                        </li>
<li className="flex items-center gap-3 text-xs text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> Priority Support
                        </li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-xs font-medium text-white hover:bg-white/5 transition-colors">
                        Buy Pass
                    </button>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 overflow-hidden bg-neutral-950">
<p className="text-center text-xs text-neutral-500 mb-8 uppercase tracking-widest">Pre-installed Games</p>
<div className="flex justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-lg font-semibold tracking-tighter text-white">VALORANT</span>
<span className="text-lg font-semibold tracking-tighter text-white">LEAGUE OF LEGENDS</span>
<span className="text-lg font-semibold tracking-tighter text-white">CS2</span>
<span className="text-lg font-semibold tracking-tighter text-white">DOTA 2</span>
<span className="text-lg font-semibold tracking-tighter text-white">APEX LEGENDS</span>
<span className="text-lg font-semibold tracking-tighter text-white">OVERWATCH 2</span>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="location">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">Visit Nexus</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-neutral-900 shrink-0">
<iconify-icon className="text-white" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Downtown District</h4>
<p className="text-neutral-500 text-sm mt-1">1042 Gaming Blvd, Suite 100<br/>San Francisco, CA 94103</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-neutral-900 shrink-0">
<iconify-icon className="text-white" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Opening Hours</h4>
<div className="grid grid-cols-2 gap-x-8 gap-y-1 mt-1">
<span className="text-neutral-500 text-sm">Mon - Thu</span>
<span className="text-neutral-300 text-sm text-right">10:00 AM - 02:00 AM</span>
<span className="text-neutral-500 text-sm">Fri - Sun</span>
<span className="text-neutral-300 text-sm text-right">24 Hours</span>
</div>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-neutral-900 shrink-0">
<iconify-icon className="text-white" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Contact</h4>
<p className="text-neutral-500 text-sm mt-1">support@nexus-cafe.com<br/>+1 (555) 012-3456</p>
</div>
</div>
</div>
</div>

<div className="bg-neutral-900/30 border border-white/5 rounded-2xl p-8">
<h3 className="text-lg font-medium text-white mb-6">Quick Inquiry</h3>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium">Name</label>
<input className="w-full bg-neutral-950 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium">Email</label>
<input className="w-full bg-neutral-950 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors" placeholder="jane@example.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium">Interest</label>
<div className="grid grid-cols-3 gap-2">

<button className="border border-indigo-500 bg-indigo-500/10 text-indigo-300 rounded-md py-2 text-xs font-medium" type="button">Events</button>
<button className="border border-white/10 bg-neutral-950 text-neutral-400 hover:bg-neutral-800 rounded-md py-2 text-xs font-medium transition-colors" type="button">Booking</button>
<button className="border border-white/10 bg-neutral-950 text-neutral-400 hover:bg-neutral-800 rounded-md py-2 text-xs font-medium transition-colors" type="button">Other</button>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium">Message</label>
<textarea className="w-full bg-neutral-950 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors h-24 resize-none" placeholder="Tell us about your team..."></textarea>
</div>
<button className="w-full bg-white text-black font-medium text-sm py-2.5 rounded-lg hover:bg-neutral-200 transition-colors" type="button">
                        Send Message
                    </button>
</form>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-neutral-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<div className="w-6 h-6 bg-gradient-to-tr from-neutral-800 to-neutral-700 rounded flex items-center justify-center border border-white/10">
<span className="text-white font-medium tracking-tighter text-[10px]">NX</span>
</div>
<span className="text-neutral-200 font-medium tracking-tight text-sm">NEXUS</span>
</div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-discord-linear" width="20"></iconify-icon></a>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
<p>© 2024 Nexus Esports Lounge. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-neutral-400" href="#">Privacy Policy</a>
<a className="hover:text-neutral-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
