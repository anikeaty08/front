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
      

<div className="bg-zinc-900 border-b border-zinc-800/50 px-4 py-2 flex flex-col sm:flex-row justify-between items-center text-xs gap-3 sm:gap-0 transition-opacity duration-500 relative z-50" id="locale-bar">
<div className="flex items-center gap-2 text-zinc-400">
<iconify-icon icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
<p>We've set your view to English/USD. Prefer Arabic/AED?</p>
</div>
<div className="flex items-center gap-4 font-medium">
<button className="text-zinc-100 hover:text-white transition-colors">Switch</button>
<button className="text-zinc-500 hover:text-zinc-300 transition-colors">Keep</button>
<button className="text-zinc-500 hover:text-zinc-300 transition-colors flex items-center justify-center" onclick="document.getElementById('locale-bar').style.display='none'">
<iconify-icon className="text-sm" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<header className="sticky top-0 z-40 backdrop-blur-md bg-zinc-950/70 border-b border-zinc-800/30 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-zinc-100 font-medium tracking-tighter text-lg uppercase flex items-center gap-2" href="#">
<iconify-icon className="text-amber-200/70" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
                SYSTEM
            </a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="#">Our Story</a>
<a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="#membership">Membership</a>
</nav>

<div className="flex items-center gap-4 text-sm font-medium">
<a className="text-zinc-400 hover:text-zinc-100 transition-colors hidden sm:block" href="#">Login</a>
<a className="bg-zinc-100 text-zinc-950 px-4 py-2 rounded-full hover:bg-white transition-colors flex items-center gap-2" href="#">
                    Request Access
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-900/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800/80 bg-zinc-900/30 text-xs text-zinc-400 mb-8 backdrop-blur-sm">
<iconify-icon className="text-amber-200/70" icon="solar:lock-keyhole-linear" strokeWidth="1.5"></iconify-icon>
                        Approval required for entry
                    </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-50 leading-[1.1] mb-6">
                        Private hotel rates.<br/>Not publicly available.
                    </h1>
<p className="text-lg text-zinc-400 leading-relaxed mb-10">
                        Members unlock exclusive pricing across global luxury stays. No public markup, purely private access.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-zinc-100 text-zinc-950 px-6 py-3 rounded-full font-medium hover:bg-white transition-colors" href="#">
                            Request Private Access
                        </a>
<a className="inline-flex justify-center items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-300 px-6 py-3 rounded-full font-medium hover:bg-zinc-800 hover:text-white transition-colors" href="#preview">
                            Explore Stays
                        </a>
</div>
</div>

<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl group">

<div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 transition-transform duration-700 group-hover:scale-105"></div>

<div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent">
<div className="flex justify-end">
<div className="backdrop-blur-md bg-zinc-950/40 border border-zinc-800/50 rounded-full px-3 py-1.5 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-amber-400/80"></span>
<span className="text-xs font-medium text-zinc-300">Live Inventory</span>
</div>
</div>
<div className="flex justify-between items-end">
<div>
<p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">Tokyo, Japan</p>
<h3 className="text-2xl tracking-tight font-medium text-white drop-shadow-md">Aman Tokyo</h3>
</div>
<div className="text-right backdrop-blur-md bg-zinc-900/80 border border-zinc-700/50 rounded-xl p-4 shadow-xl">
<p className="text-xs text-zinc-500 line-through mb-1">Public: $1,450/nt</p>
<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-amber-200/80" icon="solar:lock-password-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base font-medium">Member Locked</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-zinc-800/30 bg-zinc-950/50">
<div className="max-w-7xl mx-auto px-6 py-8">
<div className="flex items-center justify-between gap-8 overflow-x-auto hide-scrollbar text-xs font-medium text-zinc-500 uppercase tracking-widest whitespace-nowrap">
<div className="flex items-center gap-2">
<iconify-icon className="text-sm" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Trusted by global travelers
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-sm" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
                        Avg savings: 30–60%
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-sm" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
                        10,000+ Luxury Properties
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-sm" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
                        Secure Booking
                    </div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8 hover:bg-zinc-900 transition-colors">
<iconify-icon className="text-2xl text-amber-200/70 mb-6" icon="solar:eye-closed-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2">Hidden Member Rates</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Access wholesale pricing that properties legally cannot show to the public.</p>
</div>

<div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8 hover:bg-zinc-900 transition-colors">
<iconify-icon className="text-2xl text-amber-200/70 mb-6" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2">Global Luxury Inventory</h3>
<p className="text-sm text-zinc-400 leading-relaxed">From private villas to 5-star city hotels, curated for design and service.</p>
</div>

<div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8 hover:bg-zinc-900 transition-colors">
<iconify-icon className="text-2xl text-amber-200/70 mb-6" icon="solar:user-id-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2">Private Access Only</h3>
<p className="text-sm text-zinc-400 leading-relaxed">A closed ecosystem ensures prices stay low and availability remains high.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20 border-t border-zinc-800/30" id="preview">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-5 flex flex-col gap-12">
<div>
<h2 className="text-3xl font-medium tracking-tight text-zinc-50 mb-4">How it works</h2>
<p className="text-sm text-zinc-400">A seamless entry into private booking.</p>
</div>
<div className="space-y-8 relative before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-zinc-800">

<div className="relative pl-10">
<div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center text-xs text-zinc-400 font-medium">1</div>
<h4 className="text-base font-medium text-zinc-100 mb-1">Request Access</h4>
<p className="text-sm text-zinc-500">Apply for entry. We review applications to maintain ecosystem quality.</p>
</div>

<div className="relative pl-10">
<div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-amber-900/30 border border-amber-700/50 flex items-center justify-center text-xs text-amber-200/80 font-medium shadow-[0_0_10px_rgba(251,191,36,0.1)]">2</div>
<h4 className="text-base font-medium text-zinc-100 mb-1">Unlock Pricing</h4>
<p className="text-sm text-zinc-500">Sign in to reveal hidden rates immediately applied to all searches.</p>
</div>

<div className="relative pl-10">
<div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center text-xs text-zinc-400 font-medium">3</div>
<h4 className="text-base font-medium text-zinc-100 mb-1">Book at Lower Rates</h4>
<p className="text-sm text-zinc-500">Secure your stay directly through our platform with no hidden fees.</p>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-2 shadow-2xl">
<div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800/50">
<div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-800">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:bed-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-100">The Ritz-Carlton, Paris</p>
<p className="text-xs text-zinc-500">Oct 12 - Oct 15 • 2 Guests</p>
</div>
</div>
</div>

<div className="flex items-center justify-between mb-4 opacity-50">
<span className="text-sm text-zinc-400">Public Rate</span>
<span className="text-sm font-medium text-zinc-400 line-through">$2,850</span>
</div>

<div className="flex items-center justify-between p-4 bg-zinc-950 rounded-lg border border-zinc-800 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-900/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-amber-200/80" icon="solar:key-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-zinc-100">Member Rate</span>
</div>
<div className="text-right">
<span className="text-xs text-zinc-500 mr-2">You save $900</span>
<span className="text-lg font-medium text-white">$1,950</span>
</div>
</div>
<button className="w-full mt-6 bg-zinc-100 text-zinc-950 py-3 rounded-lg text-sm font-medium hover:bg-white transition-colors">
                                Login to Book
                            </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="membership">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-2xl font-medium tracking-tight text-zinc-50 mb-4">Membership Tiers</h2>
<p className="text-sm text-zinc-400 mb-12">Designed for different frequencies of travel.</p>
<div className="grid sm:grid-cols-3 gap-4 mb-10 text-left">
<div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30">
<h4 className="text-sm font-medium text-zinc-100 mb-1">Access</h4>
<p className="text-xs text-zinc-500">Essential hidden rates.</p>
</div>
<div className="p-6 rounded-2xl border border-zinc-700 bg-zinc-900 relative">
<div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-zinc-800 text-zinc-300 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">Popular</div>
<h4 className="text-sm font-medium text-zinc-100 mb-1">Elite</h4>
<p className="text-xs text-zinc-500">Priority support &amp; upgrades.</p>
</div>
<div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30">
<h4 className="text-sm font-medium text-zinc-100 mb-1">Founder</h4>
<p className="text-xs text-zinc-500">Lifetime access, invite only.</p>
</div>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors pb-1 border-b border-zinc-700 hover:border-zinc-400" href="#">
                    See Membership Details
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</section>

<section className="py-32 border-t border-zinc-800/30 relative overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(39,39,42,0.4)_0%,transparent_70%)]"></div>
<div className="max-w-2xl mx-auto px-6 text-center relative z-10">
<iconify-icon className="text-4xl text-amber-200/50 mb-6" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Access is limited.</h2>
<p className="text-lg text-zinc-400 mb-10">Request your invite today to join the private network and start viewing true hotel pricing.</p>
<a className="inline-flex justify-center items-center gap-2 bg-zinc-100 text-zinc-950 px-8 py-4 rounded-full font-medium hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#">
                    Request Private Access
                </a>
</div>
</section>
</main>

<footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-zinc-500 font-medium tracking-tighter text-sm uppercase flex items-center gap-2 mb-4" href="#">
<iconify-icon icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
                        SYSTEM
                    </a>
<p className="text-xs text-zinc-600 max-w-xs">
                        The private gateway for luxury hotel rates. Not available to the general public.
                    </p>
</div>
<div>
<h5 className="text-xs font-medium text-zinc-100 uppercase tracking-widest mb-4">Platform</h5>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#membership">Membership</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">How it Works</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-medium text-zinc-100 uppercase tracking-widest mb-4">Support</h5>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Concierge</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-medium text-zinc-100 uppercase tracking-widest mb-4">Legal</h5>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Terms</a></li>
<li><a className="flex items-center gap-1 hover:text-zinc-300 transition-colors" href="#">
<iconify-icon icon="solar:lock-linear" strokeWidth="1.5"></iconify-icon>
                            Security
                        </a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
<p>© 2023 System Private Access. All rights reserved.</p>
<div className="flex items-center gap-4">
<span>Approval Required</span>
<span className="w-1 h-1 rounded-full bg-zinc-800"></span>
<span>Invite Only</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
