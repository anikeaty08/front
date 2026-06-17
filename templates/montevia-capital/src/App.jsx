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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Instrument Sans', 'sans-serif'],
serif: ['Newsreader', 'serif'],
},
colors: {
stone: {
850: '#1c1c1b',
900: '#141413',
950: '#0c0c0b', // Deep charcoal, almost black
},
gold: {
400: '#D4AF37',
500: '#C5A028',
900: '#4a3b0f', // Muted metallic
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
widest: '0.15em',
},
animation: {
'drift': 'drift 20s infinite alternate ease-in-out',
'fade-in': 'fadeIn 1.5s ease-out forwards',
},
keyframes: {
drift: {
'0%': { transform: 'translate(0, 0) scale(1)', opacity: '0.3' },
'100%': { transform: 'translate(20px, -20px) scale(1.1)', opacity: '0.5' },
},
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-0 w-full h-[60vh] bg-grid opacity-50"></div>
</div>

<header className="fixed top-0 left-0 w-full z-50 py-8 px-6 md:px-12 flex justify-center mix-blend-difference pointer-events-none">
<div className="uppercase font-serif tracking-widest text-sm text-white/90 font-medium">
        Montevia
      </div>
</header>
<main className="z-10 flex flex-col w-full relative items-center">

<section className="min-h-screen flex flex-col justify-center items-center text-center px-6 max-w-5xl mx-auto pt-20">
<div className="space-y-8 animate-fade-in">
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-normal tracking-tighter leading-[1.1]">
            Building owners
            <br/>
<span className="text-stone-400 italic font-light">of capital.</span>
</h1>
<p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-400 font-light leading-relaxed tracking-wide">
            Montevia helps families and industrial groups build the capability,
            governance, and discipline required to own capital across
            generations.
          </p>
<div className="pt-12">
<a className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden transition-all duration-500 border border-stone-800 hover:border-stone-600 rounded-full" href="https://www.linkedin.com/in/gwensalley/">
<span className="font-serif italic text-lg tracking-tight text-stone-300 group-hover:text-white transition-colors duration-300">
                Start a conversation
              </span>
</a>
</div>
</div>

<div className="absolute bottom-12 opacity-30 animate-pulse">
<div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-white to-transparent"></div>
</div>
</section>

<section className="md:px-12 bg-stone-950/50 w-full border-white/5 border-t pt-32 pr-6 pb-32 pl-6 backdrop-blur-sm">
<div className="max-w-3xl mx-auto">
<h2 className="font-serif text-3xl md:text-4xl text-white mb-16 tracking-tight font-light">
            We believe capital is a responsibility.
          </h2>
<div className="space-y-12 pl-4 border-l border-white/10">
<p className="text-xl md:text-2xl font-light text-stone-300 hover:text-white transition-colors duration-500">
              Capital should be understood, not delegated blindly.
            </p>
<p className="text-xl md:text-2xl font-light text-stone-300 hover:text-white transition-colors duration-500">
              Learning happens through real decisions, not theory.
            </p>
<p className="md:text-2xl hover:text-white transition-colors duration-500 text-xl font-light text-stone-300">Access only matters when paired with discipline and consistency.</p>
</div>
</div>
</section>

<section className="md:px-12 bg-stone-950 w-full pt-32 pr-6 pb-32 pl-6">
<div className="max-w-6xl mx-auto">
<div className="mb-20">
<h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight font-light">
              Our role.
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">

<div className="group space-y-6">
<div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-gold-muted group-hover:border-gold-400/30 transition-colors duration-500">
<iconify-icon icon="solar:diploma-verified-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-light text-stone-200 font-serif">Learning by Doing</h3>
<p className="leading-7 text-sm font-light text-stone-400">Montevia embeds families and leadership teams into real investment decisions - funds, co-investments, and portfolios - so judgment is built through practice, not abstraction.</p>
</div>

<div className="group space-y-6">
<div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-gold-muted group-hover:border-gold-400/30 transition-colors duration-500">
<iconify-icon icon="solar:key-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-serif text-2xl text-stone-200 font-light">
                Curated Access
              </h3>
<p className="text-stone-400 font-light leading-7 text-sm">
                Montevia provides proximity to a small number of trusted
                investment sources and co-investment opportunities, prioritising
                signal density and governance over volume.
              </p>
</div>

<div className="group space-y-6">
<div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-gold-muted group-hover:border-gold-400/30 transition-colors duration-500">
<iconify-icon icon="solar:scale-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-serif text-2xl text-stone-200 font-light">
                Owner-Grade Management
              </h3>
<p className="text-stone-400 font-light leading-7 text-sm">
                Montevia designs and operates the decision infrastructure that
                enables long-term capital allocation: mandates, pacing, ICs,
                portfolio reviews, and institutional memory.
              </p>
</div>
</div>
</div>
</section>

<section className="md:px-12 w-full border-white/5 border-t pt-32 pr-6 pb-32 pl-6">
<div className="max-w-6xl mr-auto ml-auto">
<h2 className="md:text-4xl text-3xl font-light text-white tracking-tight font-serif mb-20">
            Design. Operate. Transmit.
          </h2>
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border-t border-b border-white/10">

<div className="py-12 md:px-8 md:py-16 first:pl-0 last:pr-0 group">
<span className="block text-xs uppercase tracking-widest text-gold-muted mb-4 opacity-70">
                01
              </span>
<h3 className="font-serif text-2xl text-white mb-4 font-normal">
                Design
              </h3>
<p className="text-stone-400 font-light text-sm leading-7">
                Mandates, allocation logic, governance, and investment
                architecture tailored to families and industrial groups.
              </p>
</div>

<div className="py-12 md:px-8 md:py-16 group">
<span className="block text-xs uppercase tracking-widest text-gold-muted mb-4 opacity-70">
                02
              </span>
<h3 className="font-serif text-2xl text-white mb-4 font-normal">
                Operate
              </h3>
<p className="leading-7 text-sm font-light text-stone-400">Preparation and structuring of real investment decisions - funds, co-investments, portfolios — with discipline and transparency.</p>
</div>

<div className="py-12 md:px-8 md:py-16 group">
<span className="block text-xs uppercase tracking-widest text-gold-muted mb-4 opacity-70">
                03
              </span>
<h3 className="font-serif text-2xl text-white mb-4 font-normal">
                Transmit
              </h3>
<p className="text-stone-400 font-light text-sm leading-7">
                Progressive involvement of next generations and leadership teams
                to ensure continuity of judgment, not just assets.
              </p>
</div>
</div>
</div>
</section>

<section className="w-full py-32 px-6 md:px-12 bg-stone-900/30">
<div className="max-w-4xl mx-auto text-center">
<h2 className="font-serif text-2xl md:text-3xl text-white mb-16 tracking-tight font-light opacity-90">
            Who Montevia works with
          </h2>
<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-lg md:text-xl font-light text-stone-400">
<span className="hover:text-white transition-colors cursor-default">
              Family Offices
            </span>
<span className="text-stone-700 font-light">/</span>
<span className="hover:text-white transition-colors cursor-default">
              Industrial &amp; Mid-Market Groups
            </span>
<span className="text-stone-700 font-light">/</span>
<span className="hover:text-white transition-colors cursor-default">
              Founding Families
            </span>
<div className="w-full h-0 md:hidden"></div>
<span className="hover:text-white transition-colors cursor-default">
              Corporate Shareholders
            </span>
<span className="text-stone-700 font-light">/</span>
<span className="hover:text-white transition-colors cursor-default">
              Next-Generation Leaders
            </span>
<span className="text-stone-700 font-light">/</span>
<span className="hover:text-white transition-colors cursor-default">
              Long-Term Capital Owners
            </span>
</div>
</div>
</section>

<section className="md:px-12 w-full pt-32 pr-6 pb-32 pl-6">
<div className="max-w-5xl mx-auto">
<div className="flex items-center gap-4 mb-12">
<h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight font-light">
              Selected experience
            </h2>
<div className="h-[1px] bg-white/10 flex-grow ml-4"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="glass-panel p-8 md:p-10 rounded-sm hover:bg-white/[0.03] transition-colors duration-500">
<p className="text-stone-300 font-light leading-relaxed">
                Designing and operating a multi-asset investment platform for an
                industrial family group.
              </p>
</div>

<div className="glass-panel p-8 md:p-10 rounded-sm hover:bg-white/[0.03] transition-colors duration-500">
<p className="text-stone-300 font-light leading-relaxed">
                Structuring venture and co-investment programs with
                institutional governance.
              </p>
</div>

<div className="glass-panel p-8 md:p-10 rounded-sm hover:bg-white/[0.03] transition-colors duration-500">
<p className="text-stone-300 font-light leading-relaxed">
                Training leadership teams to act as long-term asset allocators.
              </p>
</div>

<div className="glass-panel p-8 md:p-10 rounded-sm hover:bg-white/[0.03] transition-colors duration-500">
<p className="text-stone-300 font-light leading-relaxed">
                Building investment decision frameworks across venture, private
                markets, and acquisitions.
              </p>
</div>
</div>
</div>
</section>



<footer className="w-full py-12 px-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600 font-light tracking-wide uppercase">
<span>© Montevia</span>
<span className="md:mt-0 mt-4">Paris — Monaco — Geneva — Singapore</span>
</footer>
</main>

    </>
  );
}
