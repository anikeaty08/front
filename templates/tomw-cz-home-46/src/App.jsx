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



        lucide.createIcons();
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-lime-600/10 blur-[120px] rounded-full mix-blend-screen"></div>

<div className="absolute top-[20%] left-[15%] w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_8px_2px_rgba(34,211,238,0.8)]"></div>
<div className="absolute top-[35%] right-[25%] w-1.5 h-1.5 bg-lime-400 rounded-full shadow-[0_0_10px_2px_rgba(163,230,53,0.8)]"></div>
<div className="absolute bottom-[30%] left-[20%] w-1 h-1 bg-cyan-300 rounded-full shadow-[0_0_8px_2px_rgba(34,211,238,0.8)]"></div>
<div className="absolute bottom-[15%] right-[15%] w-1 h-1 bg-lime-300 rounded-full shadow-[0_0_8px_2px_rgba(163,230,53,0.8)]"></div>
</div>

<nav className="flex w-full max-w-4xl z-20 border-white/5 border-b mr-auto ml-auto pt-8 pr-6 pb-8 pl-6 relative items-center justify-between">
<div className="text-2xl font-semibold tracking-tight uppercase flex items-center gap-2">
<i className="text-cyan-400 w-8 h-8" data-lucide="aperture" strokeWidth="1.5"></i>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-lime-400">TW</span>
</div>
</nav>
<main className="w-full z-10 relative">

<section className="max-w-4xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32 text-center flex flex-col items-center">
<h1 className="md:text-5xl lg:text-6xl leading-tight text-4xl font-semibold text-white tracking-tight max-w-3xl mb-8">Tvorba A modernizace Vašich <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-lime-400">webových stránek</span></h1>

<div className="relative w-full max-w-2xl mt-8 rounded-2xl border border-cyan-500/20 bg-[#151921]/90 backdrop-blur-xl shadow-[0_0_60px_-15px_rgba(34,211,238,0.15)] flex flex-col overflow-hidden text-left" style={{animation: 'float 6s ease-in-out infinite'}}>

<div className="h-12 border-b border-white/5 flex items-center px-4 justify-between bg-[#0f1115]">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-slate-700 hover:bg-red-500 transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-slate-700 hover:bg-yellow-500 transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-slate-700 hover:bg-green-500 transition-colors"></div>
</div>
<div className="text-xs text-slate-500 font-mono">terminal - bash</div>
<div className="w-10"></div>
</div>

<div className="p-6 md:p-8 font-mono text-sm md:text-base flex flex-col gap-4 relative z-10 h-64">
<div className="flex items-center gap-3">
<span className="text-lime-400">~/project $</span>
<span className="text-white">npm run build</span>
</div>
<div className="text-cyan-400/80">
                        &gt; compiling modern web experience...
                    </div>

<div className="mt-2 flex flex-col gap-3">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-500" data-lucide="file-code-2" strokeWidth="1.5"></i>
<div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-cyan-400 w-1/2 animate-[slide_2s_ease-in-out_infinite]"></div>
</div>
</div>
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-500" data-lucide="zap" strokeWidth="1.5"></i>
<div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-lime-400 w-1/3 animate-[slide_2.5s_ease-in-out_infinite_0.5s]"></div>
</div>
</div>
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-500" data-lucide="shield-check" strokeWidth="1.5"></i>
<div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-cyan-400 w-3/4 animate-[slide_3s_ease-in-out_infinite_1s]"></div>
</div>
</div>
</div>
<div className="mt-auto flex items-center gap-3 text-lime-400">
<i className="w-5 h-5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span>Build successful in 0.8s</span>
<span className="w-2 h-4 bg-cyan-400 animate-[blink_1s_step-end_infinite] ml-1"></span>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 pb-32 flex flex-col gap-6">

<div className="p-8 md:p-10 rounded-2xl bg-[#151921] border border-white/5 hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 group-hover:bg-cyan-500/10 transition-colors duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-[#0f1115] border border-cyan-500/20 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
<i className="text-cyan-400 w-6 h-6" data-lucide="globe" strokeWidth="1.5"></i>
</div>
<h2 className="text-2xl font-medium tracking-tight text-white mb-4 relative z-10">Proč mít webové stránky?</h2>
<p className="text-base text-slate-400 leading-relaxed relative z-10">
                    Kvalitní a moderní webové stránky vytvářejí dobrý první dojem a zvyšují důvěryhodnost firmy. Přehledný a rychlý web umožňuje zákazníkům snadno najít potřebné informace, což zlepšuje jejich zkušenost a kvalitu poskytovaných služeb. Mohou zvýšit konkurenceschopnost s Vaším okolím. Dalším důležitým přínosem je lepší viditelnost ve vyhledávačích.
                </p>
</div>

<div className="p-8 md:p-10 rounded-2xl bg-[#151921] border border-white/5 hover:border-lime-500/30 transition-all duration-300 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 group-hover:bg-lime-500/10 transition-colors duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-[#0f1115] border border-lime-500/20 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_15px_rgba(163,230,53,0.1)]">
<i className="text-lime-400 w-6 h-6" data-lucide="target" strokeWidth="1.5"></i>
</div>
<h2 className="text-2xl font-medium tracking-tight text-white mb-4 relative z-10">Zaměření</h2>
<p className="text-base text-slate-400 leading-relaxed relative z-10">
                    Jednoduché webové stránky pro ty, kteří již mají hotové webové stránky a chtějí je modernizovat, nebo ty, kteří své webové stránky nemají a chtějí si je založit.
                </p>
</div>

<div className="p-8 md:p-10 rounded-2xl bg-[#151921] border border-white/5 hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 group-hover:bg-cyan-500/10 transition-colors duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-[#0f1115] border border-cyan-500/20 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
<i className="text-cyan-400 w-6 h-6" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h2 className="text-2xl font-medium tracking-tight text-white mb-4 relative z-10">Individuální přístup</h2>
<p className="text-base text-slate-400 leading-relaxed relative z-10">
                    Na jednotlivých požadavcích se můžeme individuálně domluvit a vypracovat cílový produkt.
                </p>
</div>

<div className="p-8 md:p-10 rounded-2xl bg-[#151921] border border-white/5 hover:border-lime-500/30 transition-all duration-300 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 group-hover:bg-lime-500/10 transition-colors duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-[#0f1115] border border-lime-500/20 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_15px_rgba(163,230,53,0.1)]">
<i className="text-lime-400 w-6 h-6" data-lucide="wallet" strokeWidth="1.5"></i>
</div>
<h2 className="text-2xl font-medium tracking-tight text-white mb-4 relative z-10">Cena</h2>
<p className="text-base text-slate-400 leading-relaxed relative z-10">
                    Základní startovací cena <span className="text-white font-medium">4 000,-</span> za jednoduchý jednostránkový web. Cena poté stoupá podle náročnosti a podle množství obsahu.
                </p>
</div>

<div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[#151921] to-[#0f1115] border border-cyan-500/20 relative overflow-hidden group flex flex-col items-start gap-8 mt-4">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_50%)]"></div>
<div className="relative z-10 max-w-md">
<div className="w-12 h-12 rounded-xl bg-[#0f1115] border border-cyan-500/20 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
<i className="text-cyan-400 w-6 h-6" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<h2 className="text-2xl font-medium tracking-tight text-white mb-4">Kontakt</h2>
<p className="text-base text-slate-400 leading-relaxed">
                        Pokud máte zájem o modernizaci Vašich webových stránek nebo vytvoření zcela nových, napište mi a domluvíme se na konkrétních požadavcích.
                    </p>
</div>
<a className="inline-flex items-center gap-3 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all whitespace-nowrap group-hover:scale-105 z-10 text-base font-semibold text-[#0f1115] bg-gradient-to-r from-cyan-400 to-lime-400 rounded-full pt-4 pr-8 pb-4 pl-8 relative shadow-[0_0_20px_rgba(34,211,238,0.3)]" href="mailto:tp@tomw.cz">
<i className="w-5 h-5" data-lucide="send" strokeWidth="1.5"></i>
                    tp@tomw.cz
                </a>
</div>
</section>
</main>


    </>
  );
}
