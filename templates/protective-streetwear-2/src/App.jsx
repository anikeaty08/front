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
      

<div className="grain"></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter italic-race" href="#">ATMO</a>
<div className="flex items-center gap-6">
<span className="hidden md:inline-block text-xs font-mono text-neutral-500 uppercase tracking-widest">System 01 // Prototype</span>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded-sm hover:bg-neutral-200 transition-colors" href="#register">
                    Get Access
                </a>
</div>
</div>
</nav>

<header className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-16 overflow-hidden">

<div className="absolute inset-0 z-0">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-neutral-900 rounded-full blur-[120px] opacity-30"></div>

<img alt="Texture" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay grayscale contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
<div className="mb-6 flex items-center gap-2 text-neutral-400">
<iconify-icon icon="solar:wind-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-xs font-mono uppercase tracking-widest">Protective Streetwear</span>
</div>
<h1 className="text-7xl md:text-9xl font-semibold tracking-tighter italic-race leading-none mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
                BUILT FOR <br/> MOTION
            </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-xl mx-auto leading-relaxed font-light">
                The gap between gear and apparel is closed. High-performance abrasion resistance. Invisible impact protection. Designed for the ride, engineered for the destination.
            </p>
<div className="mt-12 flex flex-col md:flex-row gap-4">
<a className="group flex items-center gap-3 text-sm font-mono border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm px-6 py-3 rounded hover:border-neutral-600 transition-all" href="#concept">
<span>EXPLORE THE SYSTEM</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-10 left-0 w-full px-6">
<div className="max-w-7xl mx-auto flex justify-between items-end border-t border-white/10 pt-6">
<div className="hidden md:block">
<p className="text-xs text-neutral-500 font-mono">SPEC: AA RATING</p>
<p className="text-xs text-neutral-500 font-mono">MAT: KEVLAR® BLEND</p>
</div>
<div className="animate-pulse">
<iconify-icon className="text-neutral-400" icon="solar:mouse-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 border-t border-white/5 bg-neutral-950" id="concept">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<span className="text-emerald-500 font-mono text-xs tracking-widest uppercase mb-4 block">/// The Invisible Guard</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6">
                        Protection that <br/> <span className="text-neutral-500 italic-race">disappears.</span>
</h2>
<div className="space-y-6 text-neutral-400 font-light leading-relaxed">
<p>
                            Traditional motorcycle gear is bulky, loud, and restrictive. ATMO rethinks the architecture of protection. We use a proprietary heavy-weight cotton blend woven with abrasion-resistant fibers that withstand slide times exceeding industry standards.
                        </p>
<p>
                            Inside, a modular system of pockets houses ultra-thin, viscoelastic armor for the back, shoulders, and elbows. Rigid on impact, flexible in motion. Remove them in seconds to transition from the street to the studio.
                        </p>
</div>
<div className="mt-8 grid grid-cols-2 gap-4">
<div className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-white" icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>AA Certified</span>
</div>
<div className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-white" icon="solar:fire-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Heat Resistant</span>
</div>
</div>
</div>
<div className="relative group">

<div className="aspect-[4/5] bg-neutral-900 overflow-hidden relative rounded-sm border border-white/5">
<img alt="Fabric Detail" className="object-cover w-full h-full opacity-60 grayscale transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1520013817300-1f4c1cb245ef?q=80&amp;w=2692&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur border border-white/10 p-4">
<div className="flex justify-between items-center border-b border-white/10 pb-2 mb-2">
<span className="text-xs font-mono text-neutral-400">LAYER 01</span>
<span className="text-xs font-mono text-white">OUTER SHELL</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs font-mono text-neutral-400">RESISTANCE</span>
<span className="text-xs font-mono text-white">HIGH</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900/30 border-y border-white/5">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h3 className="text-3xl font-semibold tracking-tighter mb-4">Modular Armor System</h3>
<p className="text-neutral-400 max-w-lg mx-auto">A fully integrated internal architecture designed to hold impact protectors securely in place without disrupting the silhouette.</p>
</div>

<div className="relative max-w-4xl mx-auto border border-white/10 bg-neutral-950 p-8 md:p-12 rounded-sm">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: '0.2'}}></div>
<div className="relative z-10 grid md:grid-cols-3 gap-8 text-center">

<div className="flex flex-col items-center group cursor-default">
<div className="w-16 h-16 rounded-full border border-neutral-700 bg-neutral-900 flex items-center justify-center mb-4 group-hover:border-white transition-colors">
<iconify-icon icon="solar:bone-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-sm font-semibold uppercase tracking-wider mb-2">Shoulders &amp; Elbows</h4>
<p className="text-xs text-neutral-500 leading-relaxed px-4">Level 2 Viscoelastic pads. Contoured fit. Low profile.</p>
</div>

<div className="flex flex-col items-center group cursor-default relative">

<div className="hidden md:block absolute top-8 -left-[50%] w-[50%] h-[1px] bg-gradient-to-r from-transparent via-neutral-700 to-neutral-700"></div>
<div className="hidden md:block absolute top-8 -right-[50%] w-[50%] h-[1px] bg-gradient-to-l from-transparent via-neutral-700 to-neutral-700"></div>
<div className="w-20 h-20 rounded-full border-2 border-white bg-neutral-800 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
<iconify-icon icon="solar:shield-warning-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h4 className="text-sm font-semibold uppercase tracking-wider mb-2 text-white">Back Panel</h4>
<p className="text-xs text-neutral-400 leading-relaxed px-4">Central spine protection pocket with dual-velcro secure closure.</p>
</div>

<div className="flex flex-col items-center group cursor-default">
<div className="w-16 h-16 rounded-full border border-neutral-700 bg-neutral-900 flex items-center justify-center mb-4 group-hover:border-white transition-colors">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-sm font-semibold uppercase tracking-wider mb-2">Abrasion Liner</h4>
<p className="text-xs text-neutral-500 leading-relaxed px-4">Full coverage kevlar-blend knit in high-risk zones.</p>
</div>
</div>
<div className="mt-12 text-center">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-[10px] font-mono uppercase text-neutral-400">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                        System Status: Active
                    </span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-1 h-full">

<div className="relative h-80 md:h-[30rem] bg-neutral-900 border border-white/5 p-8 flex flex-col justify-between group overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>

<img className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="relative z-20">
<iconify-icon className="text-white mb-4" icon="solar:wheel-angle-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div className="relative z-20">
<h3 className="text-3xl font-semibold italic-race tracking-tighter mb-2">RIDE</h3>
<p className="text-sm text-neutral-400">Aerodynamic fit. Zero flapping at speed. Warmth where you need it.</p>
</div>
</div>

<div className="relative h-80 md:h-[30rem] bg-neutral-900 border border-white/5 p-8 flex flex-col justify-between group overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>
<img className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity" src="https://images.unsplash.com/photo-1485230405346-71acb9518d9c?q=80&amp;w=2694&amp;auto=format&amp;fit=crop"/>
<div className="relative z-20">
<iconify-icon className="text-white mb-4" icon="solar:walking-round-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div className="relative z-20">
<h3 className="text-3xl font-semibold italic-race tracking-tighter mb-2">WALK</h3>
<p className="text-sm text-neutral-400">Protectors removed in seconds. Soft hand-feel. Discreet branding.</p>
</div>
</div>

<div className="relative h-80 md:h-[30rem] bg-neutral-900 border border-white/5 p-8 flex flex-col justify-between group overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>
<img className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="relative z-20">
<iconify-icon className="text-white mb-4" icon="solar:city-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div className="relative z-20">
<h3 className="text-3xl font-semibold italic-race tracking-tighter mb-2">LIVE</h3>
<p className="text-sm text-neutral-400">Machine washable. Durable construction. Built for the daily grind.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="py-32 px-6 border-t border-white/10 bg-black relative overflow-hidden" id="register">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-white opacity-[0.03] blur-[100px] pointer-events-none"></div>
<div className="max-w-xl mx-auto text-center relative z-10">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tighter italic-race mb-4">RELEASE 001</h2>
<p className="text-neutral-400 mb-10 text-lg">Limited run. Early access for registered riders only.</p>
<form className="flex flex-col gap-4">
<div className="relative group">
<input className="w-full bg-neutral-900/50 border border-neutral-800 text-white px-6 py-4 rounded-sm focus:outline-none focus:border-white/40 focus:bg-neutral-900 transition-all font-mono text-sm placeholder:text-neutral-600" placeholder="ENTER YOUR EMAIL" type="email"/>
<div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-focus-within:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="solar:letter-linear" width="20"></iconify-icon>
</div>
</div>
<button className="bg-white text-black font-semibold uppercase tracking-wide py-4 px-6 rounded-sm hover:bg-neutral-200 transition-colors w-full flex justify-center items-center gap-2 group" type="button">
<span>Request Access</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</button>
</form>
<p className="mt-6 text-xs text-neutral-600 font-mono">NO SPAM. JUST PRODUCT UPDATES.</p>
</div>
<div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 font-mono max-w-7xl mx-auto">
<span>© 2024 ATMO LABS</span>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">INSTAGRAM</a>
<a className="hover:text-white transition-colors" href="#">LEGAL</a>
<a className="hover:text-white transition-colors" href="#">CONTACT</a>
</div>
</div>
</footer>

    </>
  );
}
