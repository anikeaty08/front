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
      

<nav className="sticky top-0 z-50 border-b border-stone-300 bg-[#f7f5f2]/95 backdrop-blur-sm">
<div className="max-w-screen-2xl mx-auto px-4 h-14 flex items-center justify-between">

<div className="flex items-center gap-4">
<a className="text-xl font-serif font-medium tracking-tighter hover:opacity-70 transition-opacity" href="#">ZBC</a>
<span className="hidden md:inline-block font-mono text-[10px] uppercase tracking-widest text-stone-500 border border-stone-300 px-1 py-0.5 rounded-sm">Est. 5784</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="font-mono text-xs uppercase tracking-widest hover:text-emerald-900 hover:underline decoration-1 underline-offset-4 transition-all" href="#evidence-locker">Evidence Locker</a>
<a className="font-mono text-xs uppercase tracking-widest hover:text-emerald-900 hover:underline decoration-1 underline-offset-4 transition-all" href="#dispatch">Dispatch</a>
<a className="font-mono text-xs uppercase tracking-widest hover:text-emerald-900 hover:underline decoration-1 underline-offset-4 transition-all" href="#lore">Lore</a>
<a className="font-mono text-xs uppercase tracking-widest hover:text-emerald-900 hover:underline decoration-1 underline-offset-4 transition-all" href="#hq">HQ</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block font-serif italic text-sm text-stone-600 hover:text-pink-600 transition-colors" href="#join">Join Division</a>
<button className="relative group">
<span className="iconify" data-height="20" data-icon="lucide:shopping-bag" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-700 rounded-full"></span>
</button>
<button className="md:hidden">
<span className="iconify" data-height="20" data-icon="lucide:menu" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</nav>

<section className="relative border-b border-stone-300 min-h-[85vh] flex flex-col justify-center overflow-hidden">

<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-screen-xl mx-auto px-4 w-full relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

<div className="md:col-span-7 space-y-8">
<div className="inline-flex items-center gap-2 border border-stone-800 px-3 py-1 bg-stone-100">
<span className="w-2 h-2 bg-pink-600 rounded-full animate-pulse"></span>
<span className="font-mono text-[10px] uppercase tracking-widest">Clearance Level: Public</span>
</div>
<h1 className="font-serif text-6xl md:text-8xl tracking-tight leading-[0.9] text-stone-900">
                    The discourse <br/>
                    is <span className="text-stone-400 italic font-light">compromised.</span>
</h1>
<p className="font-light text-lg md:text-xl leading-relaxed max-w-lg text-stone-700 border-l-2 border-pink-600 pl-6">
                    We process the absurd reality of online existence so you don't have to. Wear the irony. Read the files. Touch grass (optional).
                </p>
<div className="flex flex-col md:flex-row gap-4 pt-4">
<a className="inline-flex justify-between items-center w-full md:w-auto bg-stone-900 text-stone-50 px-6 py-4 hover:bg-stone-800 transition-colors group" href="#evidence-locker">
<span className="font-mono text-xs uppercase tracking-widest mr-8">Enter Evidence Locker</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="inline-flex justify-between items-center w-full md:w-auto border border-stone-300 bg-white px-6 py-4 hover:border-stone-900 transition-colors text-stone-900" href="#dispatch">
<span className="font-mono text-xs uppercase tracking-widest mr-8">Read Declassified Files</span>
<span className="iconify" data-icon="lucide:file-text" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>

<div className="md:col-span-5 relative hidden md:block">
<div className="relative aspect-[3/4] border border-stone-900 bg-stone-200 p-4 rotate-1 shadow-xl">
<div className="absolute -top-4 -right-4 bg-white border border-stone-900 px-3 py-2 rotate-12 shadow-sm z-20">
<span className="font-mono text-xs font-bold text-red-700 uppercase border-2 border-red-700 px-2 py-1">Classified</span>
</div>
<div className="h-full w-full bg-stone-800 flex items-center justify-center relative overflow-hidden grayscale contrast-125">
<img alt="Merch" className="object-cover opacity-80 mix-blend-overlay w-full h-full" src="https://images.unsplash.com/photo-1576185850227-1f72b7f4d483?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<span className="font-serif text-stone-100 text-3xl italic tracking-tight mix-blend-difference">Exhibit A</span>
</div>
</div>
<div className="mt-2 flex justify-between font-mono text-[10px] text-stone-500">
<span>REF: 24-ZBC-01</span>
<span>ARCHIVE_COPY</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-stone-300" id="evidence-locker">
<div className="max-w-screen-2xl mx-auto px-4">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-stone-200 pb-6">
<div>
<h2 className="font-serif text-4xl tracking-tight mb-2">The Evidence Locker</h2>
<p className="font-mono text-xs uppercase text-stone-500 tracking-widest">Standard Issue Irony / Artifacts</p>
</div>
<div className="flex gap-2 mt-4 md:mt-0">
<button className="px-3 py-1 border border-stone-300 font-mono text-xs hover:bg-stone-900 hover:text-white transition-colors">Apparel</button>
<button className="px-3 py-1 border border-stone-300 font-mono text-xs hover:bg-stone-900 hover:text-white transition-colors">Printed Matter</button>
<button className="px-3 py-1 border border-stone-300 font-mono text-xs hover:bg-stone-900 hover:text-white transition-colors">Access</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-300 border border-stone-300">

<div className="group bg-[#f7f5f2] p-6 flex flex-col justify-between h-full hover:bg-white transition-colors relative">
<div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="iconify" data-icon="lucide:plus" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="aspect-square bg-stone-100 mb-6 relative overflow-hidden border border-stone-200">
<div className="absolute inset-0 flex items-center justify-center text-stone-300">
<span className="font-mono text-xs">[IMAGE REDACTED]</span>
</div>
<img className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500 grayscale" src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
</div>
<div>
<div className="font-mono text-[10px] text-stone-500 mb-1">CASE NO. 883</div>
<h3 className="font-serif text-xl tracking-tight mb-1">The "Context" Heavyweight Hoodie</h3>
<p className="text-sm font-light text-stone-600 mb-4 line-clamp-2">For when you need to explain 3,000 years of history in a 15-second elevator ride.</p>
<div className="flex justify-between items-center pt-4 border-t border-stone-200 border-dashed">
<span className="font-mono text-sm">$85.00</span>
<button className="text-xs uppercase font-bold tracking-widest hover:text-pink-600">Acquire</button>
</div>
</div>
</div>

<div className="group bg-[#f7f5f2] p-6 flex flex-col justify-between h-full hover:bg-white transition-colors relative">
<div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="iconify" data-icon="lucide:plus" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="aspect-square bg-stone-100 mb-6 relative overflow-hidden border border-stone-200">
<img className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500 grayscale contrast-125" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>

<div className="absolute bottom-2 left-2 bg-emerald-900 text-white px-2 py-1 font-mono text-[10px] uppercase">Restocked</div>
</div>
<div>
<div className="font-mono text-[10px] text-stone-500 mb-1">CASE NO. 201</div>
<h3 className="font-serif text-xl tracking-tight mb-1">Space Laser Maintenance Crew Tee</h3>
<p className="text-sm font-light text-stone-600 mb-4 line-clamp-2">Official uniform for the atmospheric engineering department. Shift starts at dusk.</p>
<div className="flex justify-between items-center pt-4 border-t border-stone-200 border-dashed">
<span className="font-mono text-sm">$45.00</span>
<button className="text-xs uppercase font-bold tracking-widest hover:text-pink-600">Acquire</button>
</div>
</div>
</div>

<div className="group bg-[#f7f5f2] p-6 flex flex-col justify-between h-full hover:bg-white transition-colors relative">
<div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="iconify" data-icon="lucide:plus" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="aspect-square bg-stone-100 mb-6 relative overflow-hidden border border-stone-200 flex items-center justify-center">
<span className="font-serif italic text-2xl text-stone-300">Sold Out</span>
<div className="absolute inset-0 bg-stone-100/50 backdrop-blur-sm z-10"></div>
<img className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-50 grayscale" src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
</div>
<div>
<div className="font-mono text-[10px] text-stone-500 mb-1">CASE NO. 999</div>
<h3 className="font-serif text-xl tracking-tight mb-1">"Nu?" Tote Bag</h3>
<p className="text-sm font-light text-stone-600 mb-4 line-clamp-2">Two letters that convey infinite disappointment and expectation.</p>
<div className="flex justify-between items-center pt-4 border-t border-stone-200 border-dashed">
<span className="font-mono text-sm text-stone-400">$30.00</span>
<span className="text-xs uppercase font-bold tracking-widest text-red-700">Archived</span>
</div>
</div>
</div>

<div className="group bg-[#f7f5f2] p-6 flex flex-col justify-between h-full hover:bg-white transition-colors relative">
<div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="iconify" data-icon="lucide:plus" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="aspect-square bg-stone-100 mb-6 relative overflow-hidden border border-stone-200">
<img className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500 grayscale" src="https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
</div>
<div>
<div className="font-mono text-[10px] text-stone-500 mb-1">CASE NO. 112</div>
<h3 className="font-serif text-xl tracking-tight mb-1">Globalist Intern Hat</h3>
<p className="text-sm font-light text-stone-600 mb-4 line-clamp-2">Unpaid, overworked, and allegedly controlling the banks.</p>
<div className="flex justify-between items-center pt-4 border-t border-stone-200 border-dashed">
<span className="font-mono text-sm">$40.00</span>
<button className="text-xs uppercase font-bold tracking-widest hover:text-pink-600">Acquire</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-stone-300 bg-stone-50" id="dispatch">
<div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-12">

<div className="md:col-span-4 space-y-8 sticky top-24 h-fit">
<div>
<h2 className="font-serif text-4xl tracking-tight mb-2">The Dispatch</h2>
<p className="font-mono text-xs uppercase text-stone-500 tracking-widest">Internal Memos / Propaganda</p>
</div>
<p className="text-sm font-light leading-relaxed text-stone-600">
                    Weekly briefing on the state of the club. No spam, just high-grade cultural analysis and merch drops.
                </p>
<div className="border border-stone-900 p-1 bg-white relative shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]">
<form className="flex flex-col gap-2">
<label className="sr-only">Email</label>
<input className="w-full bg-transparent border-b border-stone-200 px-3 py-3 text-sm font-mono focus:outline-none focus:border-stone-900 placeholder:text-stone-400" placeholder="AGENT@EXAMPLE.COM" type="email"/>
<button className="w-full bg-stone-900 text-white font-mono text-xs uppercase tracking-widest py-3 hover:bg-emerald-900 transition-colors" type="submit">
                            Subscribe
                        </button>
</form>
</div>
</div>

<div className="md:col-span-8 space-y-12">

<article className="group cursor-pointer">
<div className="flex items-center gap-4 mb-3">
<span className="font-mono text-xs text-stone-500">OCT 14, 2023</span>
<span className="h-px flex-1 bg-stone-200"></span>
<span className="font-mono text-[10px] uppercase border border-stone-300 px-2 py-0.5 text-stone-500">Theory</span>
</div>
<h3 className="font-serif text-3xl md:text-4xl tracking-tight mb-3 group-hover:text-stone-600 transition-colors">
                        The Aesthetics of Indignation: A Field Guide
                    </h3>
<p className="font-light text-stone-700 leading-relaxed mb-4">
                        Why your cousin’s Instagram story infographics all use the same three fonts, and what that says about the collective unconscious of the terminally online.
                    </p>
<div className="flex items-center gap-2 text-pink-600">
<span className="font-mono text-xs uppercase tracking-widest group-hover:underline">Open File</span>
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</div>
</article>

<article className="group cursor-pointer">
<div className="flex items-center gap-4 mb-3">
<span className="font-mono text-xs text-stone-500">SEP 29, 2023</span>
<span className="h-px flex-1 bg-stone-200"></span>
<span className="font-mono text-[10px] uppercase border border-stone-300 px-2 py-0.5 text-stone-500">Satire</span>
</div>
<h3 className="font-serif text-3xl md:text-4xl tracking-tight mb-3 group-hover:text-stone-600 transition-colors">
                        Operation: Touch Grass
                    </h3>
<p className="font-light text-stone-700 leading-relaxed mb-4">
                        We sent a field operative to a park without their phone. The results were inconclusive but highly disturbing. <span className="bg-stone-200 px-1">Full report redacted.</span>
</p>
<div className="flex items-center gap-2 text-pink-600">
<span className="font-mono text-xs uppercase tracking-widest group-hover:underline">Open File</span>
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</div>
</article>

<article className="group cursor-pointer opacity-75">
<div className="flex items-center gap-4 mb-3">
<span className="font-mono text-xs text-stone-500">SEP 01, 2023</span>
<span className="h-px flex-1 bg-stone-200"></span>
<span className="font-mono text-[10px] uppercase border border-stone-300 px-2 py-0.5 text-stone-500">Archive</span>
</div>
<h3 className="font-serif text-3xl md:text-4xl tracking-tight mb-3 group-hover:text-stone-600 transition-colors line-through decoration-stone-400">
                        We Need To Talk About The Bagels
                    </h3>
<p className="font-light text-stone-700 leading-relaxed mb-4">
                        This content has been removed by the moderation team for being too controversial for the East Coast division.
                    </p>
</article>
</div>
</div>
</section>

<section className="py-24 border-b border-stone-300 relative overflow-hidden" id="lore">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] opacity-50 pointer-events-none"></div>
<div className="max-w-screen-xl mx-auto px-4 relative z-10">
<div className="text-center mb-16">
<span className="font-mono text-xs uppercase tracking-[0.3em] text-red-700 border border-red-700 px-3 py-1 mb-4 inline-block transform -rotate-2">Confidential</span>
<h2 className="font-serif text-5xl tracking-tight mb-4">Lore &amp; Legends</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white border border-stone-200 p-8 shadow-sm rotate-1 relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-stone-200/50 -rotate-2"></div> 
<h4 className="font-mono text-sm font-bold uppercase mb-4 border-b border-stone-200 pb-2">File: Origin Story</h4>
<p className="font-serif text-lg leading-relaxed">
                        ZBC was founded in a basement in <span className="redacted">Brooklyn</span> following a disastrous dinner party where someone used the phrase "lived experience" 47 times. We decided to monetize the <span className="italic">tsuris</span>.
                    </p>
</div>

<div className="bg-white border border-stone-200 p-8 shadow-sm -rotate-1 relative lg:mt-12">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-stone-200/50 rotate-1"></div>
<h4 className="font-mono text-sm font-bold uppercase mb-4 border-b border-stone-200 pb-2">Lexicon: "The Club"</h4>
<p className="font-serif text-lg leading-relaxed">
                        Not a physical location, but a state of mind characterized by hyper-awareness, crippling self-doubt, and really good bagels. Membership is mandatory if your mother asks.
                    </p>
</div>

<div className="bg-stone-900 text-stone-200 border border-stone-900 p-8 shadow-sm rotate-2 relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-stone-500/50 rotate-1"></div>
<h4 className="font-mono text-sm font-bold uppercase mb-4 border-b border-stone-700 pb-2 text-emerald-400">Status: Active</h4>
<p className="font-serif text-lg leading-relaxed">
                        Current objective: Secure the aesthetics. <br/><br/>
                        Secondary objective: Find a decent pickles vendor.
                    </p>
<div className="mt-4 pt-4 border-t border-stone-700 font-mono text-xs text-stone-500">
                        Encryption key: *********
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-stone-50" id="join">
<div className="max-w-md mx-auto px-4 text-center">
<span className="iconify mx-auto mb-6 text-emerald-500" data-icon="lucide:fingerprint" data-width="48" style={{strokeWidth: '1'}}></span>
<h2 className="font-serif text-4xl tracking-tight mb-4">Join the Division</h2>
<p className="font-light text-stone-400 mb-8">
                Clearance is granted on a rolling basis. By entering your email, you agree to receive classified intel and occasional requests for emotional labor.
            </p>
<form className="space-y-4 text-left">
<div>
<label className="font-mono text-xs uppercase text-stone-500 mb-1 block">Codename (First Name)</label>
<input className="w-full bg-stone-800 border border-stone-700 p-3 text-stone-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-serif" type="text"/>
</div>
<div>
<label className="font-mono text-xs uppercase text-stone-500 mb-1 block">Secure Comms (Email)</label>
<input className="w-full bg-stone-800 border border-stone-700 p-3 text-stone-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono" type="email"/>
</div>
<button className="w-full bg-emerald-900 text-emerald-100 border border-emerald-800 py-3 font-mono text-xs uppercase tracking-widest hover:bg-emerald-800 transition-colors">
                    Submit Application
                </button>
</form>
<p className="mt-4 font-mono text-[10px] text-stone-600">
                * ZBC is not responsible for family arguments caused by our merchandise.
            </p>
</div>
</section>

<footer className="bg-[#f7f5f2] border-t border-stone-300 pt-16 pb-8" id="hq">
<div className="max-w-screen-xl mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="text-3xl font-serif font-medium tracking-tighter block mb-4" href="#">ZBC</a>
<p className="font-light text-sm text-stone-600 max-w-xs">
                        A niche satirical merch and media brand parodying the discourse. If you're offended, you're probably in the wrong file cabinet.
                    </p>
</div>
<div>
<h5 className="font-mono text-xs uppercase font-bold tracking-widest mb-4">Sectors</h5>
<ul className="space-y-2 text-sm font-light text-stone-600">
<li><a className="hover:text-stone-900 hover:underline" href="#">Evidence Locker</a></li>
<li><a className="hover:text-stone-900 hover:underline" href="#">Dispatch</a></li>
<li><a className="hover:text-stone-900 hover:underline" href="#">Lore</a></li>
<li><a className="hover:text-stone-900 hover:underline" href="#">Collaborations</a></li>
</ul>
</div>
<div>
<h5 className="font-mono text-xs uppercase font-bold tracking-widest mb-4">Comms</h5>
<ul className="space-y-2 text-sm font-light text-stone-600">
<li><a className="hover:text-stone-900 hover:underline" href="#">Instagram</a></li>
<li><a className="hover:text-stone-900 hover:underline" href="#">Twitter / X</a></li>
<li><a className="hover:text-stone-900 hover:underline" href="#">hq@ziobrat.club</a></li>
</ul>
</div>
</div>
<div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="font-mono text-[10px] text-stone-400 uppercase">
                    © 2024 ZioBratClub. All Rights Reserved.
                </div>
<div className="font-mono text-[10px] text-stone-400 uppercase flex gap-4">
<a href="#">Privacy Protocol</a>
<a href="#">Terms of Engagement</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
