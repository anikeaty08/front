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



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
50: '#fdf4ff',
500: '#d946ef', /* Fuchsia 500 */
600: '#c026d3',
900: '#701a75',
},
neutral: {
800: '#262626',
900: '#171717',
950: '#0a0a0a',
}
},
fontFamily: {
sans: ['Manrope', 'sans-serif'],
display: ['Inter', 'sans-serif'],
},
letterSpacing: {
tight: '-0.025em',
tighter: '-0.04em',
}
}
}
}

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
      

<nav className="fixed top-0 w-full z-50 border-b border-neutral-800 glass-panel">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center shrink-0 text-neutral-950">
<span className="iconify" data-icon="lucide:dumbbell" data-strokeWidth="2" data-width="18"></span>
</div>
<span className="font-display font-semibold text-neutral-100 tracking-tight text-base uppercase">Bona Forma</span>
</div>
<div className="hidden lg:flex items-center gap-8 text-[14px] font-medium">
<a className="hover:text-white transition-colors duration-300 ease-in-out" href="#serveis">Serveis</a>
<a className="hover:text-white transition-colors duration-300 ease-in-out" href="#instalacions">Instal·lacions</a>
<a className="hover:text-white transition-colors duration-300 ease-in-out" href="#contacte">Contacte</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-[14px] text-neutral-300 hover:text-white transition-colors" href="tel:+376123456">
<span className="iconify" data-icon="lucide:phone" data-strokeWidth="1.5" data-width="16"></span>
                    (+376) 123 456
                </a>
<button className="bg-neutral-100 hover:bg-neutral-200 text-neutral-950 text-[14px] font-semibold px-5 py-2 rounded-full transition-colors duration-300 ease-in-out">
                    Uneix-te ara
                </button>
</div>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-[12px] font-medium text-brand-500 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                Obert 24 hores • Andorra la Vella
            </div>
<h1 className="font-display text-[40px] md:text-7xl font-semibold text-white tracking-tighter mb-6 leading-[1.1]">
                Entrena sense <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">límits a Andorra.</span>
</h1>
<p className="text-[16px] md:text-[18px] text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                El teu espai de fitness premium. Accés biomètric 24/7, maquinària d'alta gamma i entrenaments personals dissenyats per a tu.
            </p>
<div className="flex flex-col items-center gap-6">
<div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
<button className="w-full md:w-auto bg-white hover:bg-neutral-200 text-neutral-950 h-12 px-8 rounded-full font-semibold text-[14px] transition-all duration-300 ease-in-out flex items-center justify-center gap-2">
                        Comença avui
                        <span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="2" data-width="16"></span>
</button>
<button className="w-full md:w-auto h-12 px-8 rounded-full font-medium text-[14px] text-neutral-300 border border-neutral-800 hover:bg-neutral-800/50 transition-all duration-300 ease-in-out flex items-center justify-center gap-2">
                        Veure tarifes
                    </button>
</div>
</div>
</div>

<div className="mt-20 relative max-w-6xl mx-auto border border-neutral-800 rounded-2xl bg-neutral-900 overflow-hidden h-64 md:h-[500px] shadow-2xl">
<img alt="Interior Gimnàs Bona Forma" className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="image-overlay absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex items-end justify-between">
<div className="hidden md:block">
<div className="flex items-center gap-2 mb-2">
<div className="h-2 w-2 rounded-full bg-brand-500 animate-pulse"></div>
<span className="text-[12px] uppercase tracking-widest text-neutral-300 font-medium">Aforament actual: Baix</span>
</div>
<p className="text-neutral-400 text-[14px]">Carrer Prat de la Creu, Andorra.</p>
</div>
<div className="grid grid-cols-3 gap-6 md:gap-12 w-full md:w-auto">
<div className="flex flex-col items-center md:items-start gap-1">
<span className="font-display text-[24px] md:text-[32px] font-semibold text-white tracking-tight">24h</span>
<span className="text-[12px] text-neutral-400 uppercase tracking-wide font-semibold">Accés</span>
</div>
<div className="flex flex-col items-center md:items-start gap-1">
<span className="font-display text-[24px] md:text-[32px] font-semibold text-white tracking-tight">365</span>
<span className="text-[12px] text-neutral-400 uppercase tracking-wide font-semibold">Dies</span>
</div>
<div className="flex flex-col items-center md:items-start gap-1">
<span className="font-display text-[24px] md:text-[32px] font-semibold text-white tracking-tight">100%</span>
<span className="text-[12px] text-neutral-400 uppercase tracking-wide font-semibold">Premium</span>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-neutral-800 bg-neutral-950/50 py-10">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-[12px] text-neutral-500 mb-8 font-semibold tracking-widest uppercase">Equipament d'alta competició</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="font-display text-xl font-bold tracking-tighter text-white">Techno<span className="font-light text-neutral-400">gym</span></span>
<span className="font-display text-xl font-semibold tracking-widest text-white uppercase">Hammer</span>
<span className="font-display text-xl font-bold italic tracking-tight text-white">ELEIKO</span>
<span className="font-display text-xl font-light tracking-wide text-white uppercase border border-white px-2">Rogue</span>
<span className="font-display text-xl font-medium tracking-tight text-white">Life<span className="text-brand-500">Fitness</span></span>
</div>
</div>
</section>

<section className="py-24 px-6 relative bg-neutral-950" id="serveis">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:mb-20">
<h2 className="font-display text-[32px] md:text-[40px] font-semibold text-white tracking-tight mb-4">Tot el que necessites</h2>
<p className="text-neutral-400 text-[16px] max-w-xl leading-relaxed">Un ecosistema complet per al teu rendiment físic. Des de la llibertat d'horaris fins al millor assessorament professional.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-brand-500/30 transition-all duration-300 ease-in-out overflow-hidden">
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-neutral-900 flex items-center justify-center mb-8 text-white border border-neutral-800 group-hover:border-brand-500/50 transition-colors">
<span className="iconify text-brand-500" data-icon="lucide:clock" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="font-display text-[22px] font-semibold text-white mb-3 tracking-tight">Accés 24h / 7 dies</h3>
<p className="text-[15px] leading-relaxed text-neutral-400 mb-8">
                            Entrena quan vulguis. El nostre sistema d'accés biomètric et permet entrar al gimnàs a qualsevol hora.
                        </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-[14px] text-neutral-500">
<span className="iconify text-brand-500" data-icon="lucide:check" data-width="16"></span>
                                Accés il·limitat
                            </li>
<li className="flex items-center gap-3 text-[14px] text-neutral-500">
<span className="iconify text-brand-500" data-icon="lucide:check" data-width="16"></span>
                                Seguretat 24h
                            </li>
</ul>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-brand-500/30 transition-all duration-300 ease-in-out overflow-hidden">
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-neutral-900 flex items-center justify-center mb-8 text-white border border-neutral-800 group-hover:border-brand-500/50 transition-colors">
<span className="iconify text-brand-500" data-icon="lucide:users" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="font-display text-[22px] font-semibold text-white mb-3 tracking-tight">Entrenador Personal</h3>
<p className="text-[15px] leading-relaxed text-neutral-400 mb-8">
                            Plans a mida dissenyats pels nostres experts per assolir els teus objectius de forma eficient.
                        </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-[14px] text-neutral-500">
<span className="iconify text-brand-500" data-icon="lucide:check" data-width="16"></span>
                                Plans nutricionals
                            </li>
<li className="flex items-center gap-3 text-[14px] text-neutral-500">
<span className="iconify text-brand-500" data-icon="lucide:check" data-width="16"></span>
                                Seguiment mensual
                            </li>
</ul>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-brand-500/30 transition-all duration-300 ease-in-out overflow-hidden">
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-neutral-900 flex items-center justify-center mb-8 text-white border border-neutral-800 group-hover:border-brand-500/50 transition-colors">
<span className="iconify text-brand-500" data-icon="lucide:shopping-bag" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="font-display text-[22px] font-semibold text-white mb-3 tracking-tight">Botiga Pro</h3>
<p className="text-[15px] leading-relaxed text-neutral-400 mb-8">
                            Suplementació esportiva de primera qualitat i equipament per al teu gimnàs domèstic.
                        </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-[14px] text-neutral-500">
<span className="iconify text-brand-500" data-icon="lucide:check" data-width="16"></span>
                                Proteïna i Creatina
                            </li>
<li className="flex items-center gap-3 text-[14px] text-neutral-500">
<span className="iconify text-brand-500" data-icon="lucide:check" data-width="16"></span>
                                Assessorament inclòs
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-neutral-800 bg-neutral-900/20" id="instalacions">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between mb-8">
<h3 className="font-display text-[24px] font-semibold text-white tracking-tight">Les nostres instal·lacions</h3>
<span className="text-[12px] text-brand-500 font-mono flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                    LIVE
                </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[400px]">

<div className="md:col-span-2 relative group rounded-xl overflow-hidden border border-neutral-800 h-full">
<img alt="Zona de Pes Lliure" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-neutral-950/40 group-hover:bg-neutral-950/20 transition-colors"></div>
<div className="absolute bottom-6 left-6">
<span className="text-white text-[16px] font-semibold tracking-tight block mb-1">Zona de Pes Lliure</span>
<p className="text-neutral-300 text-[12px]">Equipament Olímpic</p>
</div>
</div>

<div className="md:col-span-1 flex flex-col gap-4 h-full">
<div className="relative group rounded-xl overflow-hidden border border-neutral-800 flex-1">
<img alt="Zona Cardio" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-neutral-950/40 group-hover:bg-neutral-950/20 transition-colors"></div>
<div className="absolute bottom-6 left-6">
<span className="text-white text-[16px] font-semibold tracking-tight">Cardio Connectat</span>
</div>
</div>
<div className="relative group rounded-xl overflow-hidden border border-neutral-800 flex-1">
<img alt="Entrenament Funcional" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-neutral-950/40 group-hover:bg-neutral-950/20 transition-colors"></div>
<div className="absolute bottom-6 left-6">
<span className="text-white text-[16px] font-semibold tracking-tight">Zona Funcional</span>
</div>
</div>
</div>

<div className="md:col-span-1 relative group rounded-xl overflow-hidden border border-neutral-800 h-full">
<img alt="Vestuaris" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1540497077202-7c8a33801524?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-neutral-950/40 group-hover:bg-neutral-950/20 transition-colors"></div>
<div className="absolute bottom-6 left-6">
<span className="text-white text-[16px] font-semibold tracking-tight block mb-1">Vestuaris Premium</span>
<p className="text-neutral-300 text-[12px]">Taquilles i Dutxes</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-neutral-800 bg-neutral-900/10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-display text-[32px] md:text-[40px] font-semibold text-white tracking-tight mb-6 leading-tight">Sense matrícula,<br/>sense permanència.</h2>
<p className="text-neutral-400 mb-8 leading-relaxed text-[16px]">
                        Entenem que el teu estil de vida necessita flexibilitat. El procés d'alta és digital, ràpid i transparent.
                    </p>
<div className="space-y-8">

<div className="flex gap-5">
<div className="flex-none flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-brand-500/50 text-brand-500 flex items-center justify-center text-[12px] font-bold bg-brand-500/10 shadow-[0_0_15px_rgba(217,70,239,0.3)]">1</div>
<div className="w-px h-full bg-neutral-800 my-2"></div>
</div>
<div className="pb-8">
<h4 className="text-white font-semibold text-[16px] tracking-tight">Registre Online</h4>
<p className="text-[14px] text-neutral-500 mt-2">Omple el formulari i tria la teva quota. Tot en menys de 2 minuts.</p>
</div>
</div>

<div className="flex gap-5">
<div className="flex-none flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-neutral-800 text-neutral-400 flex items-center justify-center text-[12px] font-bold bg-neutral-900">2</div>
<div className="w-px h-full bg-neutral-800 my-2"></div>
</div>
<div className="pb-8">
<h4 className="text-white font-semibold text-[16px] tracking-tight">Accés Biomètric</h4>
<p className="text-[14px] text-neutral-500 mt-2">Vine al centre i configura la teva empremta digital per a l'accés 24h.</p>
</div>
</div>

<div className="flex gap-5">
<div className="flex-none flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-neutral-800 text-neutral-400 flex items-center justify-center text-[12px] font-bold bg-neutral-900">3</div>
</div>
<div>
<h4 className="text-white font-semibold text-[16px] tracking-tight">Comença a Entrenar</h4>
<p className="text-[14px] text-neutral-500 mt-2">Gaudeix de totes les instal·lacions sense límits d'horari.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-brand-500/10 blur-[80px] rounded-full"></div>
<div className="relative bg-neutral-950 border border-neutral-800 rounded-2xl p-6 md:p-10 shadow-2xl">
<div className="flex items-center justify-between mb-8 border-b border-neutral-800 pb-4">
<span className="text-[12px] uppercase tracking-widest text-neutral-500 font-semibold">Ubicacions</span>
<span className="flex h-2 w-2 rounded-full bg-brand-500 shadow-[0_0_10px_rgba(217,70,239,0.5)]"></span>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between text-[14px]">
<span className="text-neutral-300 flex items-center gap-3">
<span className="iconify text-neutral-600" data-icon="lucide:map-pin" data-width="16"></span>
                                    Andorra la Vella
                                </span>
<span className="text-brand-500 text-[11px] font-semibold bg-brand-500/10 border border-brand-500/20 px-2 py-1 rounded">24h Obert</span>
</div>
<div className="flex items-center justify-between text-[14px]">
<span className="text-neutral-300 flex items-center gap-3">
<span className="iconify text-neutral-600" data-icon="lucide:map-pin" data-width="16"></span>
                                    Escaldes-Engordany
                                </span>
<span className="text-neutral-500 text-[11px] font-semibold bg-neutral-900 border border-neutral-800 px-2 py-1 rounded">Propera obertura</span>
</div>
<div className="flex items-center justify-between text-[14px]">
<span className="text-neutral-300 flex items-center gap-3">
<span className="iconify text-neutral-600" data-icon="lucide:map-pin" data-width="16"></span>
                                    Sant Julià de Lòria
                                </span>
<span className="text-neutral-500 text-[11px] font-semibold bg-neutral-900 border border-neutral-800 px-2 py-1 rounded">Propera obertura</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-950" id="contacte">
<div className="max-w-3xl mx-auto text-center mb-12">
<h2 className="font-display text-[32px] font-semibold text-white tracking-tight mb-4">Contacta amb nosaltres</h2>
<p className="text-neutral-400 text-[16px]">Tens dubtes? Truca'ns al <a className="text-white hover:text-brand-500 font-medium transition-colors border-b border-brand-500/30" href="tel:+376123456">(+376) 123 456</a></p>
</div>
<div className="max-w-xl mx-auto bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-xl">
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-[12px] text-neutral-500 font-semibold ml-1 uppercase tracking-wide">Nom</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-[14px] text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-neutral-700" placeholder="El teu nom" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[12px] text-neutral-500 font-semibold ml-1 uppercase tracking-wide">Telèfon</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-[14px] text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-neutral-700" placeholder="(+376) ..." type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[12px] text-neutral-500 font-semibold ml-1 uppercase tracking-wide">Email</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-[14px] text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-neutral-700" placeholder="exemple@correu.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-[12px] text-neutral-500 font-semibold ml-1 uppercase tracking-wide">Missatge</label>
<textarea className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-[14px] text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-neutral-700" placeholder="Com et podem ajudar?" rows="3"></textarea>
</div>
<button className="w-full bg-white hover:bg-neutral-200 text-neutral-950 font-semibold h-12 rounded-lg transition-colors mt-2 text-[14px]" type="button">
                    Enviar Missatge
                </button>
</form>
</div>
</section>

<footer className="bg-neutral-950 border-neutral-800 border-t pt-16 pr-6 pb-12 pl-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
<div className="flex flex-col gap-3">
<div className="flex items-center justify-center md:justify-start gap-3 mb-1">
<div className="w-8 h-8 bg-neutral-800 rounded flex items-center justify-center text-white border border-neutral-700">
<span className="iconify" data-icon="lucide:dumbbell" data-width="16"></span>
</div>
<span className="font-display text-white text-[16px] font-semibold tracking-tight uppercase">Bona Forma</span>
</div>
<span className="text-neutral-500 text-[13px]">El teu gimnàs de referència a Andorra des de 2010.</span>
</div>
<div className="flex gap-8 text-[14px] text-neutral-500 font-medium">
<a className="hover:text-white transition-colors duration-200" href="#">Avís Legal</a>
<a className="hover:text-white transition-colors duration-200" href="#">Privacitat</a>
<a className="hover:text-white transition-colors duration-200" href="#">Contacte</a>
</div>
<div className="flex gap-5">
<a className="text-neutral-500 hover:text-white transition-colors duration-200" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="20"></span>
</a>
<a className="text-neutral-500 hover:text-white transition-colors duration-200" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="20"></span>
</a>
<a className="text-neutral-500 hover:text-white transition-colors duration-200" href="#">
<span className="iconify" data-icon="lucide:map-pin" data-width="20"></span>
</a>
</div>
</div>
</footer>

    </>
  );
}
