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
      
<div className="noise-overlay"></div>

<nav className="fixed top-0 w-full z-40 px-6 md:px-12 py-6 flex justify-between items-center mix-blend-difference pointer-events-none">
<div className="font-medium text-xl tracking-tighter uppercase text-white pointer-events-auto">EDIT</div>
<div className="flex items-center gap-8 pointer-events-auto">
<a className="hidden md:block font-mono text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#">Shop</a>
<a className="hidden md:block font-mono text-xs uppercase tracking-widest text-[#ff5f1f] transition-colors" href="#">Manifesto</a>
<button className="text-white hover:text-[#ff5f1f] transition-colors focus:outline-none flex items-center">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Athlete in motion" className="w-full h-full object-cover grayscale contrast-[1.2] brightness-50 object-center scale-105" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-32 left-6 md:left-12 font-mono text-xs tracking-widest uppercase text-neutral-500 z-10 flex items-center gap-2">
<div className="w-1 h-1 bg-[#ff5f1f]"></div>
            SYS_01 // THE_MANIFESTO
        </div>
<div className="absolute bottom-24 right-6 md:right-12 font-mono text-xs tracking-widest uppercase text-neutral-500 z-10 md:rotate-90 origin-right flex items-center gap-2">
            VOL_1.0 // RAW_OUTPUT
        </div>

<div className="relative z-10 flex flex-col items-center w-full px-6 mix-blend-overlay">
<h1 className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[14rem] leading-[0.85] font-semibold tracking-tighter text-white uppercase text-center w-full break-words">Effort</h1>
</div>
<div className="absolute z-20 flex flex-col items-center w-full px-6 mt-16 md:mt-32 pointer-events-none">
<h1 className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[14rem] leading-[0.85] font-semibold tracking-tighter text-transparent uppercase text-center w-full break-words" style={{WebkitTextStroke: '1px rgba(255,255,255,0.8)'}}>Does It</h1>
</div>

<div className="absolute bottom-12 left-6 md:left-12 max-w-sm p-6 bg-white/5 backdrop-blur-md border border-white/10 z-20 rounded-sm">
<p className="text-sm font-medium text-neutral-300 leading-relaxed">
                We engineer tools for those who understand that friction is the only path to progress. Design is secondary. Function is absolute.
            </p>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-white text-[#050505] relative z-10">
<div className="max-w-screen-2xl mx-auto">
<div className="font-mono text-xs tracking-widest uppercase text-neutral-400 mb-24 flex items-center gap-4">
<div className="w-12 h-[1px] bg-neutral-300"></div>
                CORE_PILLARS
            </div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">

<div className="md:col-span-4 flex flex-col group cursor-default">
<span className="font-mono text-xs text-[#ff5f1f] mb-6 block">01. INTENT</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8 uppercase border-b border-black/10 pb-6 group-hover:border-black transition-colors duration-500">Purpose<br/>Built</h2>
<p className="text-sm text-neutral-600 leading-relaxed font-medium">
                        Every stitch, every seam, every angle is calculated. We do not design for aesthetics first; we engineer for the brutal demands of peak output. No superfluous details.
                    </p>
</div>

<div className="md:col-span-4 md:mt-32 flex flex-col group cursor-default">
<span className="font-mono text-xs text-[#ff5f1f] mb-6 block">02. DISCIPLINE</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8 uppercase border-b border-black/10 pb-6 group-hover:border-black transition-colors duration-500">Strict<br/>Utility</h2>
<p className="text-sm text-neutral-600 leading-relaxed font-medium">
                        Discipline in material selection. Discipline in construction. We reject fast fashion. Our gear is built to withstand the repetitive abrasion of daily commitment.
                    </p>
</div>

<div className="md:col-span-4 flex flex-col group cursor-default">
<span className="font-mono text-xs text-[#ff5f1f] mb-6 block">03. RESULT</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8 uppercase border-b border-black/10 pb-6 group-hover:border-black transition-colors duration-500">Silent<br/>Yield</h2>
<p className="text-sm text-neutral-600 leading-relaxed font-medium">
                        The gear should disappear when you are in the zone. It operates silently in the background, facilitating your effort without demanding attention.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] relative border-t border-white/5">
<div className="absolute top-12 left-6 md:left-12 font-mono text-xs text-neutral-600 uppercase tracking-widest">SEC_02 // MATERIAL_LAB</div>
<div className="max-w-screen-2xl mx-auto px-6 mt-16">
<h2 className="text-2xl font-medium tracking-tight text-white mb-12 uppercase">Technical Architecture</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-2 bg-neutral-900 border border-neutral-800 p-2">

<div className="relative aspect-[4/5] group overflow-hidden bg-black cursor-crosshair">
<img alt="Ballistic Nylon" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#050505]/60 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute bottom-6 left-6 right-6 border-l-2 border-[#ff5f1f] pl-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
<span className="font-mono text-xs text-white block mb-1">1680D BALLISTIC_NYLON</span>
<span className="text-xs text-neutral-400">Tear-resistant primary shell.</span>
</div>
</div>

<div className="relative aspect-[4/5] group overflow-hidden bg-black cursor-crosshair">
<img alt="Matte TPU" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#050505]/60 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute bottom-6 left-6 right-6 border-l-2 border-[#ff5f1f] pl-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
<span className="font-mono text-xs text-white block mb-1">MATTE TPU COATING</span>
<span className="text-xs text-neutral-400">Weatherproof strap reinforcement.</span>
</div>
</div>

<div className="relative aspect-[4/5] group overflow-hidden bg-black cursor-crosshair">
<img alt="Rubberized Base" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-[#050505]/60 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute bottom-6 left-6 right-6 border-l-2 border-[#ff5f1f] pl-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
<span className="font-mono text-xs text-white block mb-1">VULCANIZED RUBBER</span>
<span className="text-xs text-neutral-400">High-friction base plating.</span>
</div>
</div>

<div className="relative aspect-[4/5] group overflow-hidden bg-black cursor-crosshair">
<img alt="Hardware" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-[#050505]/60 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute bottom-6 left-6 right-6 border-l-2 border-[#ff5f1f] pl-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
<span className="font-mono text-xs text-white block mb-1">AIRCRAFT ALUMINUM</span>
<span className="text-xs text-neutral-400">Machined tension hooks.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#0a0a0a] text-white relative">
<div className="max-w-4xl mx-auto px-6 relative pt-12">

<div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[1px] bg-neutral-800 md:-translate-x-1/2"></div>

<div className="relative flex flex-col md:flex-row md:justify-end mb-24 group">
<div className="absolute left-[2px] md:left-1/2 w-3 h-3 bg-[#0a0a0a] border border-neutral-600 group-hover:border-[#ff5f1f] group-hover:bg-[#ff5f1f] transition-colors rounded-none top-2 md:-translate-x-1/2 z-10 shadow-[0_0_0_4px_#0a0a0a]"></div>
<div className="pl-20 md:pl-0 md:w-1/2 md:pr-16 text-left md:text-right">
<span className="font-mono text-xs text-neutral-500 block mb-3 uppercase tracking-widest">Phase_01</span>
<h3 className="text-xl font-medium tracking-tight mb-4 uppercase text-white group-hover:text-[#ff5f1f] transition-colors">The Void</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-medium">Standard gear fails when effort peaks. We identified the critical failure points in traditional sports luggage. The initial blueprint is drafted in total isolation.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row md:justify-start mb-24 group">
<div className="absolute left-[2px] md:left-1/2 w-3 h-3 bg-[#0a0a0a] border border-neutral-600 group-hover:border-[#ff5f1f] group-hover:bg-[#ff5f1f] transition-colors rounded-none top-2 md:-translate-x-1/2 z-10 shadow-[0_0_0_4px_#0a0a0a]"></div>
<div className="pl-20 md:pl-0 md:w-1/2 md:pl-16">
<span className="font-mono text-xs text-neutral-500 block mb-3 uppercase tracking-widest">Phase_02</span>
<h3 className="text-xl font-medium tracking-tight mb-4 uppercase text-white group-hover:text-[#ff5f1f] transition-colors">Stress Testing</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-medium">Prototypes subjected to brutalist environments. Seams ripped, hardware crushed. 400 iterations discarded. Only the resilient architecture survives the cut.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row md:justify-end group">
<div className="absolute left-[2px] md:left-1/2 w-3 h-3 bg-[#0a0a0a] border border-neutral-600 group-hover:border-[#ff5f1f] group-hover:bg-[#ff5f1f] transition-colors rounded-none top-2 md:-translate-x-1/2 z-10 shadow-[0_0_0_4px_#0a0a0a]"></div>
<div className="pl-20 md:pl-0 md:w-1/2 md:pr-16 text-left md:text-right">
<span className="font-mono text-xs text-neutral-500 block mb-3 uppercase tracking-widest">Phase_03</span>
<h3 className="text-xl font-medium tracking-tight mb-4 uppercase text-white group-hover:text-[#ff5f1f] transition-colors">Deployment</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-medium">The V1 collection is released to a closed network of high-output individuals. No marketing. Only word of mouth based entirely on performance metrics.</p>
</div>
</div>
</div>
</section>

<section className="py-40 bg-[#050505] flex items-center justify-center px-6 relative overflow-hidden border-t border-white/5">

<div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff5f1f] to-transparent opacity-30"></div>
<div className="absolute top-0 w-full h-12 bg-gradient-to-b from-[#ff5f1f]/5 to-transparent"></div>
<div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
<iconify-icon className="text-4xl text-neutral-700 mb-12" icon="solar:target-linear" strokeWidth="1"></iconify-icon>
<h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight uppercase">
                "The result is a <span className="text-neutral-600 line-through decoration-neutral-400 decoration-1 relative inline-block group cursor-default">
                    byproduct
                    <span className="absolute -top-4 -right-4 font-mono text-[10px] text-[#ff5f1f] opacity-0 group-hover:opacity-100 transition-opacity">ERROR</span>
</span>.<br/>
                The effort is the <span className="text-[#ff5f1f]">product</span>."
            </h2>
<div className="mt-20 flex flex-col items-center gap-4">
<div className="w-[1px] h-12 bg-neutral-800"></div>
<div className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
                    EDIT. // End of sequence
                </div>
</div>
</div>
</section>

    </>
  );
}
