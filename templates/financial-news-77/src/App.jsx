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
      

<div className="bg-slate-900 border-b-4 border-[#FFD700] py-2 px-4 hidden sm:block">
<div className="max-w-screen-xl mx-auto flex justify-between items-center text-[11px] uppercase tracking-widest font-black text-white">
<div className="flex gap-4">
<span className="text-[#FFD700]">ÉDITION SPÉCIALE</span>
<span className="text-slate-500">|</span>
<span>Brazzaville 14:32</span>
<span>Londres 13:32</span>
<span>New York 08:32</span>
</div>
<div className="flex gap-4 font-bold">
<a className="hover:text-[#FFD700] hover:underline decoration-red-600 underline-offset-4 transition-all" href="#">Édition PDF</a>
<a className="hover:text-[#FFD700] hover:underline decoration-red-600 underline-offset-4 transition-all" href="#">Newsletter</a>
</div>
</div>
</div>

<header className="sticky top-0 z-40 bg-white border-b-2 border-slate-900 shadow-xl">
<div className="max-w-screen-xl mx-auto px-4 h-24 flex items-center justify-between">

<div className="flex items-center gap-6 w-1/3">
<a className="group block flex-shrink-0 relative z-10" href="https://brazzamatin.com">
<div className="relative inline-flex items-center justify-center w-14 h-14 bg-slate-900 shadow-[4px_4px_0px_0px_rgba(255,215,0,1)] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all duration-100 border-2 border-slate-900">
<span className="font-black text-white text-3xl tracking-tighter leading-none relative z-10">BM</span>
</div>
</a>
<div className="hidden md:flex items-center gap-1 ml-2">
<button className="p-2 hover:bg-red-50 rounded-none border border-transparent hover:border-red-200 transition-colors group">
<span className="iconify text-slate-900" data-icon="lucide:menu" data-width="24" style={{strokeWidth: '2.5'}}></span>
</button>
<button className="p-2 hover:bg-red-50 rounded-none border border-transparent hover:border-red-200 transition-colors group">
<span className="iconify text-slate-900" data-icon="lucide:search" data-width="24" style={{strokeWidth: '2.5'}}></span>
</button>
</div>
</div>

<div className="hidden md:flex items-center justify-center gap-8 w-1/3 text-sm font-black text-slate-900 uppercase tracking-tight">
<a className="hover:text-[#991B1B] hover:underline decoration-4 decoration-[#FFD700] underline-offset-4 transition-all" href="#">Marchés</a>
<a className="hover:text-[#991B1B] hover:underline decoration-4 decoration-[#FFD700] underline-offset-4 transition-all" href="#">Tech</a>
<a className="hover:text-[#991B1B] hover:underline decoration-4 decoration-[#FFD700] underline-offset-4 transition-all" href="#">Afrique</a>
<a className="hover:text-[#991B1B] hover:underline decoration-4 decoration-[#FFD700] underline-offset-4 transition-all" href="#">Analyses</a>
</div>

<div className="flex items-center justify-end gap-4 w-1/3">
<a className="hidden sm:inline-flex text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-[#991B1B] transition-colors" href="#">Connexion</a>

<a className="inline-flex items-center justify-center px-6 py-3 text-xs font-black uppercase tracking-widest text-white transition-all bg-[#991B1B] hover:bg-red-700 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] border-2 border-slate-900 group" href="#">
<span className="relative">S'abonner</span>
</a>
</div>
</div>
</header>

<div className="relative border-b border-slate-900">
<div className="bg-[#FFD700] text-slate-900 relative h-12 flex items-center overflow-hidden z-10">
<div className="absolute left-0 z-20 w-8 h-full bg-[#FFD700] flex items-center justify-center border-r-2 border-slate-900 font-black text-xs">
<span className="iconify" data-icon="lucide:trending-up" data-width="20"></span>
</div>
<div className="ticker-wrap text-sm font-black tracking-tight uppercase">
<div className="ticker-content pt-1">
<span className="inline-flex items-center mx-6">XAF/USD <span className="font-bold ml-2">0.0016</span> <span className="text-[#991B1B] bg-white px-1 ml-2 border border-black">-0.12%</span></span>
<span className="inline-flex items-center mx-6">XAF/EUR <span className="font-bold ml-2">0.0015</span> <span className="text-slate-900 ml-2">0.00%</span></span>
<span className="inline-flex items-center mx-6">CACAO <span className="font-bold ml-2">$9,650</span> <span className="text-green-700 bg-white px-1 ml-2 border border-black font-black">+3.45%</span></span>
<span className="inline-flex items-center mx-6">CAFÉ <span className="font-bold ml-2">$188.20</span> <span className="text-green-700 bg-white px-1 ml-2 border border-black font-black">+1.15%</span></span>
<span className="inline-flex items-center mx-6">HUILE <span className="font-bold ml-2">$3,850</span> <span className="text-[#991B1B] bg-white px-1 ml-2 border border-black">-0.50%</span></span>
<span className="inline-flex items-center mx-6">BRENT <span className="font-bold ml-2">$81.50</span> <span className="text-green-700 bg-white px-1 ml-2 border border-black font-black">+0.45%</span></span>
<span className="inline-flex items-center mx-6">BTC <span className="font-bold ml-2">$64,230</span> <span className="text-green-700 bg-white px-1 ml-2 border border-black font-black">+2.40%</span></span>
</div>
</div>
</div>
</div>

<main className="flex-grow w-full max-w-screen-xl mx-auto px-4 py-10">

<section className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b-2 border-slate-200">

<article className="lg:col-span-8 group cursor-pointer relative pb-4 transition-all">
<div className="relative overflow-hidden mb-5 border-2 border-slate-900 shadow-[8px_8px_0px_0px_#000]">
<img alt="Marchés" className="w-full aspect-[16/9] object-cover transition-transform duration-100 group-hover:scale-105 group-hover:contrast-125" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent mix-blend-multiply pointer-events-none"></div>
<div className="absolute top-0 left-0 bg-[#991B1B] text-white px-4 py-2 text-sm font-black uppercase tracking-widest border-b-2 border-r-2 border-slate-900 z-20">
                        Exclusive
                    </div>
</div>
<div className="flex items-center gap-3 mb-2">
<span className="text-[#991B1B] font-black uppercase tracking-tight text-sm flex items-center gap-1">
<span className="w-3 h-3 bg-[#991B1B] animate-pulse"></span>
                        Alerte Marchés
                    </span>
<span className="text-xs text-slate-500 font-bold uppercase tracking-wide">/ 5 min de lecture</span>
</div>

<h1 className="text-4xl sm:text-6xl/none font-black text-slate-900 uppercase tracking-tighter mb-4 group-hover:text-[#991B1B] transition-colors decoration-4 underline-offset-4">
                    Banques Centrales : Le pivot stratégique <span className="bg-[#FFD700] px-2 text-black">choc</span> face à la dette
                </h1>
<p className="text-xl sm:text-2xl font-bold text-slate-800 leading-snug mb-6 max-w-3xl border-l-4 border-[#991B1B] pl-4">
                    EXCLUSIF. La Réserve Fédérale et la BCE préparent un virage brutal qui va redéfinir l'économie mondiale.
                </p>
<div className="flex items-center gap-3 pt-4">
<div className="w-10 h-10 border-2 border-slate-900 overflow-hidden relative">
<img alt="Author" className="w-full h-full object-cover grayscale contrast-125" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-black text-slate-900 uppercase">Sarah Jenkins</span>
<span className="text-[10px] text-[#991B1B] font-bold uppercase tracking-widest">Analyste Senior</span>
</div>
</div>
</article>

<aside className="lg:col-span-4 flex flex-col h-full pl-0 lg:pl-8 lg:border-l-2 border-slate-200">
<div className="flex items-center justify-between mb-6 border-b-4 border-[#991B1B] pb-2">
<h2 className="text-xl font-black uppercase tracking-tighter text-[#991B1B] italic">Flash Info</h2>
<span className="flex h-3 w-3 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-[#991B1B]"></span>
</span>
</div>
<div className="space-y-6">

<a className="group block relative pl-4 border-l-4 border-slate-200 hover:border-[#FFD700] transition-all bg-slate-50 hover:bg-white p-3" href="#">
<div className="flex items-baseline justify-between mb-1">
<span className="text-[10px] font-black text-white bg-slate-900 px-1.5 py-0.5 uppercase tracking-wide">Énergie</span>
<span className="text-xs font-bold text-[#991B1B] font-mono">14:12</span>
</div>
<h3 className="text-base font-extrabold text-slate-900 leading-tight uppercase group-hover:text-[#991B1B] transition-colors mt-1">
                            L'OPEP+ choque les marchés : Réduction immédiate !
                        </h3>
</a>

<a className="group block relative pl-4 border-l-4 border-slate-200 hover:border-[#FFD700] transition-all bg-slate-50 hover:bg-white p-3" href="#">
<div className="flex items-baseline justify-between mb-1">
<span className="text-[10px] font-black text-white bg-slate-900 px-1.5 py-0.5 uppercase tracking-wide">Tech</span>
<span className="text-xs font-bold text-[#991B1B] font-mono">13:45</span>
</div>
<h3 className="text-base font-extrabold text-slate-900 leading-tight uppercase group-hover:text-[#991B1B] transition-colors mt-1">
                            NVIDIA : La nouvelle architecture IA souveraine dévoilée
                        </h3>
</a>

<a className="group block relative pl-4 border-l-4 border-slate-200 hover:border-[#FFD700] transition-all bg-slate-50 hover:bg-white p-3" href="#">
<div className="flex items-baseline justify-between mb-1">
<span className="text-[10px] font-black text-white bg-slate-900 px-1.5 py-0.5 uppercase tracking-wide">Forex</span>
<span className="text-xs font-bold text-[#991B1B] font-mono">12:30</span>
</div>
<h3 className="text-base font-extrabold text-slate-900 leading-tight uppercase group-hover:text-[#991B1B] transition-colors mt-1">
                            Chute brutale du Yen : La BoJ maintient ses taux !
                        </h3>
</a>

<a className="group block relative pl-4 border-l-4 border-slate-200 hover:border-[#FFD700] transition-all bg-slate-50 hover:bg-white p-3" href="#">
<div className="flex items-baseline justify-between mb-1">
<span className="text-[10px] font-black text-white bg-slate-900 px-1.5 py-0.5 uppercase tracking-wide">Afrique</span>
<span className="text-xs font-bold text-[#991B1B] font-mono">11:15</span>
</div>
<h3 className="text-base font-extrabold text-slate-900 leading-tight uppercase group-hover:text-[#991B1B] transition-colors mt-1">
                            Logistique : Le nouveau corridor Pointe-Noire activé
                        </h3>
</a>
</div>
<a className="mt-8 text-xs font-black uppercase tracking-widest text-slate-900 hover:text-[#991B1B] flex items-center gap-2 group border-2 border-slate-200 p-3 justify-center hover:border-[#991B1B] transition-colors" href="#">
                    Voir le fil complet 
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '3'}}></span>
</a>
</aside>
</section>

<section className="py-12 border-b-2 border-slate-200">
<div className="bg-white border-4 border-[#991B1B] shadow-[12px_12px_0px_0px_rgba(153,27,27,0.15)] flex flex-col md:flex-row group overflow-hidden relative">

<div className="absolute top-4 left-4 z-30 flex items-center gap-2 bg-[#991B1B] text-white px-3 py-1 rounded-sm shadow-lg">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
</span>
<span className="text-xs font-black uppercase tracking-widest animate-pulse">DIRECT / STUDIO</span>
</div>

<div className="p-6 md:p-10 flex flex-col justify-center w-full md:w-2/5 bg-slate-50 relative z-20">
<h3 className="text-sm font-black uppercase tracking-widest text-[#991B1B] mb-2">Le Briefing Vidéo</h3>
<h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-slate-900 mb-4 uppercase leading-none">
                        Ouverture des Marchés : <span className="bg-[#FFD700] text-black px-1">Danger ?</span>
</h2>
<p className="text-base font-bold text-slate-700 mb-6 leading-tight">
                        Analyse technique du S&amp;P 500 et impact CRITIQUE des décisions de la BCE. <span className="text-[#991B1B]">Ne manquez pas ça.</span>
</p>
<button className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-white bg-[#991B1B] hover:bg-red-800 px-6 py-4 transition-all w-full md:w-fit group-button border-2 border-slate-900 shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
<span className="iconify text-white" data-icon="lucide:play-circle" data-width="24" style={{strokeWidth: '3'}}></span>
                        Regarder maintenant
                    </button>
</div>

<div className="relative w-full md:w-3/5 overflow-hidden cursor-pointer h-72 md:h-auto border-l-4 border-[#991B1B]">
<img alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover transition-transform duration-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=1932&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-[#991B1B]/20 mix-blend-multiply"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#FFD700] border-4 border-slate-900 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
<span className="iconify text-black ml-1" data-icon="lucide:play" data-width="32" style={{fill: 'black'}}></span>
</div>

<div className="absolute bottom-0 left-0 w-full bg-slate-900 text-[#FFD700] p-2 flex justify-between items-center font-mono font-bold text-xs border-t-2 border-[#FFD700]">
<span className="uppercase tracking-widest">EN DIRECT DE NEW YORK</span>
<span className="bg-[#991B1B] text-white px-2 py-0.5">04:32</span>
</div>
</div>
</div>
</section>

<section className="py-12">
<div className="flex items-end justify-between mb-8 border-b-2 border-slate-900 pb-2">
<h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 italic transform -skew-x-6">Analyses &amp; Perspectives</h2>
<a className="text-xs font-black uppercase text-[#991B1B] hover:text-slate-900 border-b-2 border-[#991B1B] hover:border-slate-900 transition-all" href="#">Tout voir</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<article className="flex flex-col group cursor-pointer relative pb-2">
<div className="aspect-[4/3] bg-slate-200 overflow-hidden mb-4 relative border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(200,200,200,1)] group-hover:shadow-[4px_4px_0px_0px_#991B1B] transition-all">
<img alt="Graph" className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-0 right-0 bg-[#FFD700] text-black text-[10px] font-black px-2 py-1 uppercase border-b-2 border-l-2 border-slate-900">Stratégie</div>
</div>
<h3 className="text-lg font-black leading-tight text-slate-900 mb-2 uppercase group-hover:text-[#991B1B] transition-colors">
                        Tech : Correction ou opportunité <span className="bg-[#991B1B] text-white px-1">fatale</span> ?
                    </h3>
<p className="text-sm font-bold text-slate-600 line-clamp-2 leading-tight mb-3">
                        Les ratios explosent. Faut-il vendre maintenant ? Analyse sans concession.
                    </p>
<div className="mt-auto pt-2 border-t-2 border-slate-100 flex items-center gap-2 text-xs font-black text-slate-400 uppercase">
<span>J. Doe</span>
<span className="text-[#991B1B]">•</span>
<span>Il y a 2h</span>
</div>
</article>

<article className="flex flex-col group cursor-pointer relative pb-2">
<div className="aspect-[4/3] bg-slate-200 overflow-hidden mb-4 relative border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(200,200,200,1)] group-hover:shadow-[4px_4px_0px_0px_#991B1B] transition-all">
<img alt="Shipping" className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-0 right-0 bg-[#FFD700] text-black text-[10px] font-black px-2 py-1 uppercase border-b-2 border-l-2 border-slate-900">Commerce</div>
</div>
<h3 className="text-lg font-black leading-tight text-slate-900 mb-2 uppercase group-hover:text-[#991B1B] transition-colors">
                        Fret Maritime : La crise du canal s'aggrave
                    </h3>
<p className="text-sm font-bold text-slate-600 line-clamp-2 leading-tight mb-3">
                        Les assureurs paniquent, les primes doublent. Qui va payer ?
                    </p>
<div className="mt-auto pt-2 border-t-2 border-slate-100 flex items-center gap-2 text-xs font-black text-slate-400 uppercase">
<span>M. Smith</span>
<span className="text-[#991B1B]">•</span>
<span>Il y a 4h</span>
</div>
</article>

<article className="flex flex-col group cursor-pointer relative pb-2">
<div className="aspect-[4/3] bg-slate-200 overflow-hidden mb-4 relative border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(200,200,200,1)] group-hover:shadow-[4px_4px_0px_0px_#991B1B] transition-all">
<img alt="Crypto" className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-0 right-0 bg-[#FFD700] text-black text-[10px] font-black px-2 py-1 uppercase border-b-2 border-l-2 border-slate-900">Fintech</div>
</div>
<h3 className="text-lg font-black leading-tight text-slate-900 mb-2 uppercase group-hover:text-[#991B1B] transition-colors">
                        BlackRock x Crypto : Le pari à 10 Milliards
                    </h3>
<p className="text-sm font-bold text-slate-600 line-clamp-2 leading-tight mb-3">
                        Tokenisation massive : Le géant valide la blockchain.
                    </p>
<div className="mt-auto pt-2 border-t-2 border-slate-100 flex items-center gap-2 text-xs font-black text-slate-400 uppercase">
<span>L. Chen</span>
<span className="text-[#991B1B]">•</span>
<span>Il y a 5h</span>
</div>
</article>

<article className="flex flex-col group cursor-pointer relative pb-2">
<div className="aspect-[4/3] bg-slate-200 overflow-hidden mb-4 relative border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(200,200,200,1)] group-hover:shadow-[4px_4px_0px_0px_#991B1B] transition-all">
<img alt="Meeting" className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-0 right-0 bg-[#FFD700] text-black text-[10px] font-black px-2 py-1 uppercase border-b-2 border-l-2 border-slate-900">Carrières</div>
</div>
<h3 className="text-lg font-black leading-tight text-slate-900 mb-2 uppercase group-hover:text-[#991B1B] transition-colors">
                        Wall Street : La guerre du retour au bureau
                    </h3>
<p className="text-sm font-bold text-slate-600 line-clamp-2 leading-tight mb-3">
                        Goldman Sachs menace. Les talents résistent. Clash imminent.
                    </p>
<div className="mt-auto pt-2 border-t-2 border-slate-100 flex items-center gap-2 text-xs font-black text-slate-400 uppercase">
<span>P. Jones</span>
<span className="text-[#991B1B]">•</span>
<span>Il y a 6h</span>
</div>
</article>
</div>
</section>
</main>

<section className="border-t-4 border-slate-900 bg-[#FFD700] py-16">
<div className="max-w-2xl mx-auto px-4 text-center">
<span className="iconify mx-auto mb-4 text-slate-900" data-height="48" data-icon="lucide:zap" data-width="48" style={{strokeWidth: '3'}}></span>
<h2 className="text-4xl font-black tracking-tighter text-slate-900 mb-3 uppercase">Ne soyez pas le dernier informé.</h2>
<p className="text-slate-900 text-lg font-bold mb-8">
                L'essentiel de la finance. Chaque matin. <span className="underline decoration-4 decoration-[#991B1B]">Avant l'ouverture.</span>
</p>
<form className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto relative shadow-[8px_8px_0px_0px_#000]">
<div className="relative flex-grow">
<input className="w-full pl-6 pr-4 py-4 bg-white border-2 border-slate-900 text-base font-bold text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-slate-50 uppercase h-full" placeholder="VOTRE EMAIL PRO" type="email"/>
</div>

<button className="px-8 py-4 bg-[#991B1B] text-white font-black text-sm uppercase tracking-widest hover:bg-red-800 transition-all border-y-2 border-r-2 border-slate-900 sm:border-l-0 border-l-2" type="button">
                    S'inscrire
                </button>
</form>
</div>
</section>

<footer className="bg-slate-900 text-white border-t border-slate-800 py-12">
<div className="max-w-screen-xl mx-auto px-4">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">

<div className="flex items-center gap-3">
<div className="relative inline-flex items-center justify-center w-10 h-10 bg-[#FFD700] border-2 border-white">
<span className="font-black text-slate-900 text-xs tracking-tighter">BM</span>
</div>
<span className="font-black text-white tracking-tighter uppercase text-xl">BRAZZA MATIN</span>
</div>

<div className="flex gap-4">
<a className="inline-flex items-center justify-center bg-white text-slate-900 p-2.5 hover:bg-[#FFD700] transition-colors border-2 border-transparent hover:border-white" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="20" style={{strokeWidth: '2.5'}}></span>
</a>
<a className="inline-flex items-center justify-center bg-white text-slate-900 p-2.5 hover:bg-[#FFD700] transition-colors border-2 border-transparent hover:border-white" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="20" style={{strokeWidth: '2.5'}}></span>
</a>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
<div className="flex flex-wrap gap-6">
<a className="hover:text-white hover:underline decoration-[#FFD700] underline-offset-4 transition-all" href="#">Confidentialité</a>
<a className="hover:text-white hover:underline decoration-[#FFD700] underline-offset-4 transition-all" href="#">CGU</a>
</div>
<div>
                    © 2024 Brazza Matin Media.
                </div>
</div>
</div>
</footer>

    </>
  );
}
