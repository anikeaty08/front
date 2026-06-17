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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-base font-semibold tracking-tighter text-zinc-100 uppercase" href="#">
                BRANDLIFTER
            </a>
<a className="bg-white text-zinc-950 px-4 py-2 rounded-full text-xs font-medium hover:bg-zinc-200 transition-colors duration-200" href="#kontakt">
                Kontakt
            </a>
</div>
</nav>

<header className="pt-40 pb-20 md:pt-52 md:pb-32 px-6">
<div className="max-w-6xl mx-auto flex flex-col items-center text-center">
<span className="px-3 py-1 mb-8 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-400 tracking-wide">
                Business Outsource Solution
            </span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-zinc-100 leading-[1.1]">
                Stratégia.<br/>
                Systém.<br/>
                Stabilita.
            </h1>
</div>
</header>

<main className="flex flex-col">

<section className="py-20 md:py-32 px-6 border-t border-white/5">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
<div className="md:col-span-3 flex md:justify-start">
<span className="text-xs font-medium text-zinc-600 tracking-widest">01</span>
</div>
<div className="md:col-span-9">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-100 leading-tight">
                        Je úspech náhoda alebo systém?
                    </h2>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6 border-t border-white/5 bg-zinc-900/20">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
<div className="md:col-span-3 flex md:justify-start">
<span className="text-xs font-medium text-zinc-600 tracking-widest">02</span>
</div>
<div className="md:col-span-9 space-y-8">
<h3 className="text-2xl md:text-4xl font-medium tracking-tight text-zinc-100 leading-tight">
                        Úspešným firmám sa darí nie preto, že majú viac peňazí.
                    </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-base md:text-lg font-normal text-zinc-400 leading-relaxed">
<p>
                            Majú jasnú stratégiu a nastavený systém. Vedia presne, kam smerujú a aké kroky musia vykonať, aby sa tam dostali.
                        </p>
<p>
                            Nie sú uzavreté samy do seba, majú aj pohľad zvonku. Schopnosť adaptovať sa a prijímať externé know-how je ich kľúčovou výhodou.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6 border-t border-white/5">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
<div className="md:col-span-3 flex md:justify-start">
<span className="text-xs font-medium text-zinc-600 tracking-widest">03</span>
</div>
<div className="md:col-span-9 space-y-12">
<div className="space-y-6 max-w-2xl">
<h3 className="text-2xl md:text-4xl font-medium tracking-tight text-zinc-100 leading-tight">
                            Nepracujú sami. Využívajú tímy ľudí a externý pohľad.
                        </h3>
<p className="text-base md:text-lg font-normal text-zinc-400 leading-relaxed">
                            Stratégia im pomáha robiť menej chýb a viac správnych rozhodnutí. Tu sú pozície, ktoré môžete vďaka nášmu systému získať na dosah:
                        </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col gap-4 hover:bg-white/[0.04] transition-colors">
<iconify-icon className="text-2xl text-zinc-100" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-zinc-200">Finančný stratég</span>
</div>
<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col gap-4 hover:bg-white/[0.04] transition-colors">
<iconify-icon className="text-2xl text-zinc-100" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-zinc-200">HR a procesný manažér</span>
</div>
<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col gap-4 hover:bg-white/[0.04] transition-colors">
<iconify-icon className="text-2xl text-zinc-100" icon="solar:megaphone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-zinc-200">Marketingový riaditeľ</span>
</div>
<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col gap-4 hover:bg-white/[0.04] transition-colors">
<iconify-icon className="text-2xl text-zinc-100" icon="solar:settings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-zinc-200">Prevádzkový analytik</span>
</div>
<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col gap-4 hover:bg-white/[0.04] transition-colors">
<iconify-icon className="text-2xl text-zinc-100" icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-zinc-200">Biznis developer</span>
</div>
<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col gap-4 hover:bg-white/[0.04] transition-colors">
<iconify-icon className="text-2xl text-zinc-100" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-zinc-200">Externý audítor</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6 border-t border-white/5 bg-zinc-900/20">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
<div className="md:col-span-3 flex md:justify-start">
<span className="text-xs font-medium text-zinc-600 tracking-widest">04</span>
</div>
<div className="md:col-span-9 space-y-12">
<p className="text-xl md:text-2xl font-normal text-zinc-400 leading-relaxed max-w-2xl">
                        Výkon bežnej firmy závisí od kapacity jednotlivca, nie od systému.
                    </p>
<blockquote className="pl-6 md:pl-8 border-l border-zinc-700">
<p className="text-2xl md:text-4xl font-medium tracking-tight text-zinc-100 leading-tight mb-6">
                            "Aj zle nastavený systém porazí dobrého človeka zakaždým."
                        </p>
<footer className="text-sm md:text-base font-medium text-zinc-500 flex items-center gap-2">
<span className="w-4 h-[1px] bg-zinc-500"></span>
                            W. Edwards Deming
                        </footer>
</blockquote>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6 border-t border-white/5">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
<div className="md:col-span-3 flex md:justify-start">
<span className="text-xs font-medium text-zinc-600 tracking-widest">05</span>
</div>
<div className="md:col-span-9 space-y-6 max-w-3xl">
<h3 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-100 leading-tight">
                        Veľké firmy si mohli dovoliť vyšší manažment, strategické oddelenia a externých expertov.
                    </h3>
<p className="text-base md:text-xl font-normal text-zinc-400 leading-relaxed">
                        Know-how, ktoré bolo dostupné len veľkým firmám, je dnes dostupné aj vám.
                    </p>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 border-t border-white/5 flex flex-col items-center text-center relative overflow-hidden" id="kontakt">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-zinc-800/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto relative z-10 space-y-10">
<h2 className="text-4xl md:text-7xl font-medium tracking-tighter text-zinc-100 leading-[1.1]">
                    Úspech nie je náhoda.<br/>
                    Je to systém.
                </h2>
<div className="pt-4">
<a className="inline-flex items-center gap-2 bg-white text-zinc-950 px-8 py-4 rounded-full text-sm font-medium hover:bg-zinc-200 hover:scale-[1.02] transition-all duration-200" href="#">
                        Kontaktovať tím
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</section>
</main>
<footer className="py-8 border-t border-white/5 text-center text-xs font-medium text-zinc-600">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="tracking-tighter uppercase text-zinc-500">Brandlifter</span>
<span>© 2024 Všetky práva vyhradené.</span>
</div>
</footer>

    </>
  );
}
