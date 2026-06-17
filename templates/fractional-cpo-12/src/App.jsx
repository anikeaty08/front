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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();

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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="0WrRbFIPaKoWVkiQWBG0"></div>
</div>

<div className="fixed top-0 left-0 w-full h-screen overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-2/3 h-2/3 rounded-full bg-blue-900/10 blur-3xl"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-1/2 h-1/2 rounded-full bg-stone-800/20 blur-3xl"></div>
</div>

<nav className="fixed z-50 flex animate-slide-custom pr-4 pl-4 top-6 right-0 left-0 justify-center" style={{animationDelay: '0.1s'}}>
<div className="glass-panel !shadow-2xl flex gap-1 !transform-none !hover:translate-y-0 rounded-full pt-1.5 pr-1.5 pb-1.5 pl-1.5 gap-x-1 gap-y-1 items-center" style={{background: 'rgba(12, 10, 9, 0.7)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.08)'}}>
<a className="px-4 py-2 flex items-center gap-2 text-sm font-normal text-white hover:bg-white/5 rounded-full transition-all group" href="#">
<div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] group-hover:scale-125 transition-transform duration-300">
</div>
                Duotomic
            </a>
<div className="hidden md:flex items-center px-2 border-l border-white/5 mx-2">
<a className="hover:text-white transition-colors group text-xs font-normal text-neutral-400 pt-2 pr-4 pb-2 pl-4 relative" href="#problem">
                    Problème
                    <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-blue-500 transition-all group-hover:w-full group-hover:left-0 duration-300"></span>
</a>
<a className="px-4 py-2 text-xs font-normal text-neutral-400 hover:text-white transition-colors relative group" href="#expertise">
                    Expertise
                    <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-blue-500 transition-all group-hover:w-full group-hover:left-0 duration-300"></span>
</a>
<a className="px-4 py-2 text-xs font-normal text-neutral-400 hover:text-white transition-colors relative group" href="#method">
                    Méthode
                    <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-blue-500 transition-all group-hover:w-full group-hover:left-0 duration-300"></span>
</a>
</div>
<a className="hover:bg-[#20b858] hover:scale-105 active:scale-95 transition-all flex items-center justify-center text-white bg-[#25D366] rounded-full w-8 h-8 shadow-[0_0_15px_rgba(37,211,102,0.4)]" href="#">
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.474.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
</svg>
</a>
<a className="px-4 py-2 rounded-full bg-neutral-100 text-neutral-900 text-xs font-medium hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#audit">
                Audit Offert
            </a>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-500/20 text-blue-400 text-xs font-medium mb-8">
<iconify-icon icon="solar:stars-minimalistic-linear" width="14"></iconify-icon>
<span className="" style={{}}>Duos CTO + CPDO</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-stone-100 tracking-tighter mb-6 leading-tight">
                Structurez le Chaos. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Scalez sans Dette.</span>
</h1>
<p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Le duo exécutif "plug-and-play" pour startups Seed. Nous bâtissons vos fondations Tech &amp; Produit pour réussir votre Série A.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 group" href="#audit">
                    Réserver un Audit
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3 bg-transparent border border-stone-700 hover:border-stone-500 text-stone-300 text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2" href="#method">
                    Notre Approche
                </a>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none"></div>
</header>

<section className="py-12 border-y border-white/5 bg-stone-900/50" id="clients">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-stone-500 mb-8 uppercase tracking-widest">
                Plus de 100 leaders de la tech européenne nous font confiance
            </p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="font-semibold text-lg tracking-tight text-white">matera</span>
<span className="font-bold text-lg tracking-tighter italic text-white">Spendesk</span>
<span className="font-medium text-xl tracking-wide text-white">L'ORÉAL</span>
<span className="font-bold text-lg tracking-tight text-white">pretto</span>
<span className="font-semibold text-lg tracking-tight text-white">PlayPlay</span>
<span className="font-bold text-lg tracking-tight text-white">Photoroom</span>
<span className="font-black text-xl tracking-tighter italic text-white">NIKE</span>
<span className="font-bold text-lg tracking-tight text-white">malt</span>
</div>
</div>
</section>

<section className="overflow-hidden pt-20 pb-20 relative">
<div className="z-10 max-w-5xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-x-8 gap-y-8">

<div className="glass-card group hover:border-white/20 transition-all duration-500 rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="flex mb-8 items-start justify-between">
<div className="flex items-center gap-4">
<img alt="Antoine David" className="w-12 h-12 rounded-full border border-white/10 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&amp;h=150&amp;fit=crop&amp;crop=faces&amp;q=80"/>
<div className="">
<h3 className="text-white font-semibold">Antoine David</h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs font-medium text-white" style={{}}>CPDO</span>
<span className="text-[10px] bg-stone-800 border border-stone-700 text-stone-400 px-2 py-0.5 rounded-full">Ex-The Fork &amp; Scenario</span>
</div>
</div>
</div>
<a className="text-stone-500 hover:text-white transition-colors" href="#">
<iconify-icon className="" icon="lucide:linkedin" width="20"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-3">
<p className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold mb-2">Forces</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded bg-stone-800/50 border border-white/5 text-[10px] text-stone-300">Stratégie Produit</span>
<span className="px-2 py-1 rounded bg-stone-800/50 border border-white/5 text-[10px] text-stone-300">Roadmap</span>
<span className="px-2 py-1 rounded bg-stone-800/50 border border-white/5 text-[10px] text-stone-300">Discovery</span>
<span className="px-2 py-1 rounded bg-stone-800/50 border border-white/5 text-[10px] text-stone-300">Product Design</span>
<span className="px-2 py-1 rounded bg-stone-800/50 border border-white/5 text-[10px] text-stone-300">UX / UI</span>
</div>
</div>

<div className="relative flex items-center justify-center">
<svg className="w-full h-32 overflow-visible" viewbox="0 0 100 100">

<polygon className="radar-web" points="50,10 90,35 75,80 25,80 10,35"></polygon>
<polygon className="radar-web" points="50,25 70,37.5 62.5,60 37.5,60 30,37.5" style={{opacity: '0.5'}}></polygon>

<line className="radar-axis" x1="50" x2="50" y1="50" y2="10"></line>
<line className="radar-axis" x1="50" x2="90" y1="50" y2="35"></line>
<line className="radar-axis" x1="50" x2="75" y1="50" y2="80"></line>
<line className="radar-axis" x1="50" x2="25" y1="50" y2="80"></line>
<line className="radar-axis" x1="50" x2="10" y1="50" y2="35"></line>

<polygon className="radar-area" points="50,45 90,35 65,70 30,70 10,35" style={{fill: 'rgba(255,255,255,0.1)', stroke: '#e7e5e4'}}></polygon>

<text className="radar-label" x="50" y="5">Tech</text>
<text className="radar-label text-white font-medium" x="98" y="35">Design</text>
<text className="radar-label" x="80" y="90">Biz</text>
<text className="radar-label" x="20" y="90">People</text>
<text className="radar-label text-white font-medium" x="2" y="35">Prod</text>
</svg>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-6 group hover:border-blue-500/30 transition-all duration-500">
<div className="flex items-start justify-between mb-8">
<div className="flex items-center gap-4">
<img alt="Maxime Auburtin" className="w-12 h-12 rounded-full border border-white/10 object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&amp;h=150&amp;fit=crop&amp;crop=faces&amp;q=80"/>
<div className="">
<h3 className="font-semibold text-white">Maxime Auburtin</h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs font-medium text-slate-50" style={{}}>CTO</span>
<span className="text-[10px] bg-stone-800 border border-stone-700 text-stone-400 px-2 py-0.5 rounded-full">Ex-Egerie &amp; Choose</span>
</div>
</div>
</div>
<a className="text-stone-500 hover:text-white transition-colors" href="#">
<iconify-icon className="" icon="lucide:linkedin" width="20"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-3">
<p className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold mb-2">Forces</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded bg-stone-800/50 border border-white/5 text-[10px] text-stone-300">Architecture</span>
<span className="px-2 py-1 rounded bg-stone-800/50 border border-white/5 text-[10px] text-stone-300">Roadmap</span>
<span className="px-2 py-1 rounded bg-stone-800/50 border border-white/5 text-[10px] text-stone-300">Stratégie Tech</span>
<span className="px-2 py-1 rounded bg-stone-800/50 border border-white/5 text-[10px] text-stone-300">DevOps</span>
<span className="px-2 py-1 rounded bg-stone-800/50 border border-white/5 text-[10px] text-stone-300">Team Lead</span>
</div>
</div>

<div className="relative flex items-center justify-center">
<svg className="w-full h-32 overflow-visible" viewbox="0 0 100 100">

<polygon className="radar-web" points="50,10 90,35 75,80 25,80 10,35"></polygon>
<polygon className="radar-web" points="50,25 70,37.5 62.5,60 37.5,60 30,37.5" style={{opacity: '0.5'}}></polygon>

<line className="radar-axis" x1="50" x2="50" y1="50" y2="10"></line>
<line className="radar-axis" x1="50" x2="90" y1="50" y2="35"></line>
<line className="radar-axis" x1="50" x2="75" y1="50" y2="80"></line>
<line className="radar-axis" x1="50" x2="25" y1="50" y2="80"></line>
<line className="radar-axis" x1="50" x2="10" y1="50" y2="35"></line>

<polygon className="radar-area" points="50,10 55,40 70,70 25,80 30,50"></polygon>

<text className="radar-label text-white font-medium" x="50" y="5">Tech</text>
<text className="radar-label" x="98" y="35">Design</text>
<text className="radar-label" x="80" y="90">People</text>
<text className="radar-label" x="2" y="35">Prod</text>
</svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card p-6 rounded-xl flex flex-col h-full">
<div className="mb-4 text-blue-400">
<iconify-icon icon="solar:quote-up-square-linear" width="28"></iconify-icon>
</div>
<p className="text-sm text-stone-300 mb-6 flex-grow leading-relaxed">
                        "L'équipe est agile, extrêmement talentueuse et multidisciplinaire. J'ai été très impressionné par leur travail sur l'UX/UI et le Design System."
                    </p>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center text-xs text-white font-medium">RS</div>
<div>
<div className="text-xs font-medium text-stone-100">Rob Spiro</div>
<div className="text-[10px] text-stone-500">CEO @ Imagination Machine</div>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-xl flex flex-col h-full">
<div className="mb-4 text-blue-400">
<iconify-icon icon="solar:quote-up-square-linear" width="28"></iconify-icon>
</div>
<p className="text-sm text-stone-300 mb-6 flex-grow leading-relaxed">
                        "Au-delà de la vitesse d'exécution, nous avions besoin d'un regard extérieur. C'était un plaisir de travailler avec Duotomic et le résultat est époustouflant."
                    </p>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center text-xs text-white font-medium">BL</div>
<div className="">
<div className="text-xs font-medium text-stone-100">Benjamin Lafaurie</div>
<div className="text-[10px] text-stone-500">Head of Design @ Matera</div>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-xl flex flex-col h-full">
<div className="mb-4 text-blue-400">
<iconify-icon icon="solar:quote-up-square-linear" width="28"></iconify-icon>
</div>
<p className="text-sm text-stone-300 mb-6 flex-grow leading-relaxed">
                        "Leur expertise a permis de repenser les fondations de notre Design System. Ils encouragent une véritable collaboration entre design et tech."
                    </p>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center text-xs text-white font-medium">MF</div>
<div className="">
<div className="text-xs font-medium text-stone-100">Mathias Frey</div>
<div className="text-[10px] text-stone-500">Head of Design @ Yousign</div>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-xl flex flex-col h-full">
<div className="mb-4 text-blue-400">
<iconify-icon icon="solar:quote-up-square-linear" width="28"></iconify-icon>
</div>
<p className="text-sm text-stone-300 mb-6 flex-grow leading-relaxed">
                        "Un workflow extrêmement efficace permettant aux designers de produire un travail remarquable avec une grande autonomie."
                    </p>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center text-xs text-white font-medium">MB</div>
<div className="">
<div className="text-xs font-medium text-stone-100">Mathieu Badimon</div>
<div className="text-[10px] text-stone-500">Head of Design @ Photoroom</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10" id="problem">
<div className="container max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
<div className="">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-4">La "Death Valley" du Seed
                    </h2>
<p className="text-neutral-400 max-w-md text-sm md:text-base leading-relaxed">
                        Le moment critique où votre MVP s'effondre sous la charge et où le produit doit se professionnaliser.
                    </p>
</div>
<div className="hidden md:block h-px w-32 bg-gradient-to-r from-transparent to-neutral-700"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl relative group overflow-hidden md:col-span-2 reveal transition-all duration-500 hover:border-blue-500/30">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[80px] group-hover:bg-blue-600/10 transition-all duration-700">
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 group-hover:border-blue-500/30 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300">
<iconify-icon icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-100 transition-colors">
                            Dette Tech Invisible
                        </h3>
<p className="text-neutral-400 text-sm leading-relaxed max-w-lg group-hover:text-neutral-300 transition-colors">
                            Le code "temporaire" du MVP est devenu permanent. Chaque feature prend 3x plus de temps. Le refactoring paralyse la team.
                        </p>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl relative group overflow-hidden reveal transition-all duration-500 hover:border-white/20">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center mb-6 text-neutral-200 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-lg">
<iconify-icon className="" icon="solar:graph-down-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Produit Incohérent</h3>
</div>
<p className="text-neutral-400 text-sm leading-relaxed">
                            UI instable. UX cassée. Le produit n'inspire plus confiance aux users B2B exigeants.
                        </p>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl relative group overflow-hidden reveal transition-all duration-500 hover:border-white/20">
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center mb-6 text-neutral-200 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-lg">
<iconify-icon icon="solar:hourglass-line-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Hiring Trop Lent</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                            6 à 9 mois pour trouver un CTO/CPO. Pendant ce temps, l'équipe junior manque de direction et de vélocité.
                        </p>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl relative group overflow-hidden md:col-span-2 flex items-center justify-between reveal cursor-pointer hover:bg-white/[0.03]">
<div className="relative z-10 max-w-md">
<h3 className="text-xl font-semibold text-white mb-2">La Solution ?</h3>
<p className="text-neutral-400 text-sm">
                            Ne recrutez pas tout de suite. Louez l'expérience C-Level pour structurer avant de scaler.
                        </p>
</div>
<div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-white/10 text-white group-hover:bg-white group-hover:text-black transition-all duration-300 group-hover:scale-110">
<iconify-icon className="" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-neutral-950" id="expertise">

<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="container max-w-6xl mx-auto px-6">
<div className="text-center mb-24 reveal">
<span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest border border-blue-500/20 px-3 py-1 rounded-full bg-blue-500/5 shadow-[0_0_15px_rgba(59,130,246,0.3)]">Expertise Unifiée</span>
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mt-6 text-glow">Deux Profils. Une Vision.</h2>
</div>
<div className="relative grid md:grid-cols-2 gap-16">

<div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/10 to-blue-500/0">
</div>

<div className="relative group reveal">
<div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
</div>
<div className="relative text-right md:pr-12">
<div className="inline-flex p-3 rounded-xl bg-blue-500/10 text-blue-400 mb-6 border border-blue-500/20 shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:code-scan-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-200 transition-colors">Le CTO</h3>
<p className="text-neutral-400 leading-relaxed mb-8 ml-auto max-w-sm">
                            Architecture, Sécurité, CI/CD. Je transforme votre codebase en infrastructure résiliente capable d'absorber la croissance.
                        </p>
<ul className="flex flex-col items-end gap-3 text-sm text-neutral-300">
<li className="flex items-center gap-3 group-hover:text-white transition-colors">
                                Audit Infra &amp; Sécurité
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_#3b82f6]"></span>
</li>
<li className="flex items-center gap-3 group-hover:text-white transition-colors">
                                Mise en place CI/CD
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_#3b82f6]"></span>
</li>
<li className="flex items-center gap-3 group-hover:text-white transition-colors">
                                Mentoring Tech Lead
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_#3b82f6]"></span>
</li>
</ul>
</div>
</div>

<div className="relative group reveal" style={{transitionDelay: '0.1s'}}>
<div className="absolute -inset-4 bg-gradient-to-l from-neutral-700/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
</div>
<div className="relative md:pl-12">
<div className="inline-flex p-3 rounded-xl bg-neutral-800 text-white mb-6 border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300 group-hover:bg-white group-hover:text-black">
<iconify-icon className="" icon="solar:figma-file-linear" width="32"></iconify-icon>
</div>
<h3 className="group-hover:text-neutral-200 transition-colors text-2xl font-semibold text-white mb-4">Le CPDO</h3>
<p className="text-neutral-400 leading-relaxed mb-8 max-w-sm">
                            Vision, Roadmap, UI/UX. Je ne livre pas juste des wireframes, mais un Design System complet prêt à être implémenté.
                        </p>
<ul className="flex flex-col items-start gap-3 text-sm text-neutral-300">
<li className="flex items-center gap-3 group-hover:text-white transition-colors">
<span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_5px_white]"></span>
                                Stratégie Produit
                            </li>
<li className="flex items-center gap-3 group-hover:text-white transition-colors">
<span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_5px_white]"></span>
                                Design System (Figma)
                            </li>
<li className="flex items-center gap-3 group-hover:text-white transition-colors">
<span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_5px_white]"></span>
                                User Research
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="method">
<div className="container max-w-6xl mx-auto px-6 relative z-10">
<h2 className="text-3xl font-medium text-white mb-20 text-center reveal">Intervention Chirurgicale</h2>
<div className="relative">

<div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 hidden md:block"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="group relative glass-panel p-6 rounded-xl hover:-translate-y-2 transition-all duration-300 reveal cursor-default">
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-white/20 text-white flex items-center justify-center font-bold text-sm mb-4 relative z-10 group-hover:border-blue-500 group-hover:text-blue-400 transition-colors shadow-lg group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                            1</div>
<h3 className="text-white font-semibold mb-2">Audit Flash</h3>
<p className="text-xs text-neutral-400 leading-relaxed group-hover:text-neutral-300">Semaine 1. Analyse sans concession du code, de l'UX et des process.</p>
</div>

<div className="group relative glass-panel p-6 rounded-xl hover:-translate-y-2 transition-all duration-300 delay-75 reveal cursor-default">
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-white/20 text-white flex items-center justify-center font-bold text-sm mb-4 relative z-10 group-hover:border-blue-500 group-hover:text-blue-400 transition-colors shadow-lg group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                            2</div>
<h3 className="text-white font-semibold mb-2">Fondations</h3>
<p className="text-xs text-neutral-400 leading-relaxed group-hover:text-neutral-300">Mois 1. Nettoyage de la dette tech. Implémentation du Design System.</p>
</div>

<div className="group relative glass-panel bg-blue-500/5 p-6 rounded-xl border-blue-500/30 hover:-translate-y-2 transition-all duration-300 delay-100 reveal cursor-default hover:bg-blue-500/10 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.2)]">
<div className="absolute inset-0 bg-blue-500/5 rounded-xl"></div>
<div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mb-4 relative z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-110 transition-transform">
                            3</div>
<h3 className="text-white font-semibold mb-2">Scale</h3>
<p className="text-xs text-blue-100/70 leading-relaxed group-hover:text-blue-100">Mois 2-6. Exécution rapide. Sprints. Mentoring de l'équipe en place.</p>
</div>

<div className="group relative glass-panel p-6 rounded-xl hover:-translate-y-2 transition-all duration-300 delay-150 reveal cursor-default">
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-white/20 text-white flex items-center justify-center font-bold text-sm mb-4 relative z-10 group-hover:border-blue-500 group-hover:text-blue-400 transition-colors shadow-lg group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                            4</div>
<h3 className="text-white font-semibold mb-2">Handover</h3>
<p className="text-xs text-neutral-400 leading-relaxed group-hover:text-neutral-300">Mois 6+. Recrutement des profils permanents et onboarding.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="audit">
<div className="absolute inset-0 bg-blue-900/5 pointer-events-none"></div>
<div className="max-w-5xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium text-stone-100 mb-4 tracking-tight">Simple &amp; Flexible</h2>
<p className="text-stone-400">Pas d'equity. Pas d'engagement long terme. Juste de l'expertise senior à la demande.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="glass-card p-8 rounded-xl border-l-2 border-l-stone-700 hover:border-l-stone-500">
<div className="flex justify-between items-start mb-4">
<h3 className="text-xl font-semibold text-stone-100">Conseil</h3>
<span className="text-sm font-medium text-stone-500 bg-stone-800 px-2 py-1 rounded">2 jours / semaine</span>
</div>
<p className="text-stone-400 text-sm mb-8 h-10">Pour guider l'équipe et structurer les process.</p>
<a className="block w-full py-3 text-center text-sm font-medium text-stone-300 bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors border border-stone-700" href="#">
                        Réserver un créneau
                    </a>
</div>

<div className="glass-card p-8 rounded-xl border-l-2 border-l-blue-500 relative">
<div className="absolute -top-3 right-8 bg-blue-600 text-white text-[10px] uppercase font-bold px-2 py-1 rounded tracking-wider shadow-lg shadow-blue-900/40">
                        Recommandé
                    </div>
<div className="flex justify-between items-start mb-4">
<h3 className="text-xl font-semibold text-stone-100">Temps Plein</h3>
<span className="text-sm font-medium text-blue-400 bg-blue-900/20 px-2 py-1 rounded border border-blue-500/20">Transformation</span>
</div>
<p className="text-stone-400 text-sm mb-8 h-10">Pour exécuter et transformer radicalement l'entreprise.</p>
<a className="block w-full py-3 text-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-lg shadow-blue-900/20" href="#">
                        Commencer l'Audit
                    </a>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-black">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<a className="text-lg font-medium tracking-tighter text-stone-100 flex items-center gap-2 mb-2" href="#">
<div className="w-5 h-5 rounded bg-stone-800 flex items-center justify-center text-[10px] text-white font-bold">D</div>
                    Duotomic
                </a>
<p className="text-xs text-stone-500 max-w-xs">Excellence Engineering &amp; Produit pour startups ambitieuses.</p>
</div>
<div className="flex gap-8 text-xs text-stone-500">
<a className="hover:text-stone-300 transition-colors" href="#">Mission</a>
<a className="hover:text-stone-300 transition-colors" href="#">Expertise</a>
<a className="hover:text-stone-300 transition-colors" href="#">Offre</a>
<a className="hover:text-stone-300 transition-colors" href="#">Mentions Légales</a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-[10px] text-stone-600">
                © 2024 Duotomic. Paris &amp; Remote.
            </div>
<div className="flex items-center gap-2 text-[10px] text-emerald-500 bg-emerald-900/10 px-3 py-1 rounded-full border border-emerald-500/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                All Systems Operational
            </div>
</div>
</footer>

    </>
  );
}
