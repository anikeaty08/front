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
carbon: '#0A0C10',
asphalt: '#1F2228',
titanium: '#FFFFFF',
ebitda: '#00E08F',
ebitdaDim: 'rgba(0, 224, 143, 0.1)',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
heading: ['Plus Jakarta Sans', 'sans-serif'],
geist: ['Inter', 'sans-serif'], // Mapping requested footer font to Inter
},
letterSpacing: {
tightest: '-0.05em',
}
}
}
}



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    
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
      

<nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-carbon/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">

<div className="flex-shrink-0 flex items-center">
<a className="font-heading font-bold text-xl tracking-tighter text-white uppercase" href="#">
                        Socials<span className="text-ebitda">.</span>
</a>
</div>

<div className="hidden md:flex items-center space-x-10">
<a className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#services">Služby</a>
<a className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#about">O nás</a>
<a className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#references">Reference</a>
</div>

<div className="hidden md:flex items-center">
<button className="shiny-cta">
<span className="z-10 font-bold tracking-tight relative">Vyberte si partnera</span>
</button>
</div>

<div className="md:hidden flex items-center">
<button className="text-white/70 hover:text-white">
<iconify-icon height="24" icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="min-h-screen flex overflow-hidden pt-20 relative items-center">

<div className="absolute w-full h-full left-0 top-0 -z-10 opacity-60 mix-blend-screen pointer-events-none" data-us-project="bmaMERjX2VZDtPrh4Zwx"></div>


<div className="absolute inset-0 bg-grid -z-20"></div>
<div className="sm:px-6 lg:px-8 z-10 w-full max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="max-w-3xl">
<div className="inline-flex items-center space-x-2 border border-ebitda/30 bg-ebitda/5 rounded-full px-3 py-1 mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-ebitda animate-pulse"></span>
<span className="text-xs font-semibold tracking-wide text-ebitda uppercase">Elite Performance Boutique</span>
</div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-semibold tracking-tight font-heading mb-12">
                Garance Seniority.
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Ziskovost bez kompromisů.</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-white/60 max-w-2xl mb-10">
                Pro ambiciózní e-shopy s obratem nad 20 mil. CZK. Eliminujeme riziko nezkušených juniorů a
                maximalizujeme vaši EBITDA pomocí chirurgicky přesné reklamy na Metě a Googlu.
            </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
<button className="shiny-cta group">Naše služby</button>
<a className="group flex items-center gap-2 text-sm font-medium text-white/70 hover:text-ebitda transition-colors" href="#protocol">
<span className="group-hover:border-ebitda transition-all border-transparent border-b">Příběhy, na které jsme pyšní</span>
</a>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-carbon to-transparent pointer-events-none">
</div>
</section>

<section className="z-10 border-white/5 border-b pt-12 pb-12 relative" id="references">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-xs font-semibold text-center text-white/40 uppercase tracking-widest mb-8">Strategický partner pro růst značek</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-heading font-bold tracking-tight">PROFIMODEL</span>
<span className="text-xl font-heading font-bold tracking-tight">KONOPNÝ TÁTA</span>
<span className="text-xl font-heading font-bold tracking-tight">DOMANSKÝ</span>
<span className="text-xl font-heading font-bold tracking-tight">NATIMA</span>
<span className="text-xl font-heading font-bold tracking-tight">MOTOGARAZ.CZ</span>
</div>
</div>
</section><section className="py-24 bg-carbon relative border-b border-white/5 z-10" id="case-studies">
<div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="max-w-2xl">
<span className="text-ebitda font-medium tracking-wider text-xs uppercase mb-3 block">Real Results</span>
<h2 className="font-heading font-medium text-3xl md:text-5xl tracking-tight text-white leading-tight">
                    Čísla, která mění <span className="text-white/40">trajektorii byznysu.</span>
</h2>
</div>
<div className="hidden md:block">

</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[380px]">

<div className="group relative md:col-span-2 rounded-[2rem] overflow-hidden border border-white/10 bg-asphalt cursor-pointer">
<div className="absolute inset-0 bg-carbon">
<img alt="Profimodel Case Study" className="w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/50 to-transparent opacity-90"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs font-medium text-white/80">
                            Scale-up Strategy
                        </div>
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md border border-white/10">
<iconify-icon className="text-white" height="20" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
</div>
<div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<h3 className="text-2xl font-heading font-semibold text-white mb-2">Profimodel.cz</h3>
<p className="text-white/60 text-sm md:text-base max-w-lg mb-6 leading-relaxed">
                            Kompletní restrukturalizace účtů a expanze na 3 zahraniční trhy s maximálním důrazem na profitabilitu.
                        </p>
<div className="flex items-baseline gap-3">
<span className="text-5xl md:text-6xl font-semibold text-ebitda font-heading tracking-tight">+42%</span>
<span className="text-white/50 text-sm font-medium uppercase tracking-wide">YoY Revenue</span>
</div>
</div>
</div>
</div>

<div className="group relative md:col-span-1 rounded-[2rem] overflow-hidden border border-white/10 bg-asphalt cursor-pointer">
<div className="absolute inset-0 bg-carbon">
<img alt="Konopný Táta Case Study" className="w-full h-full object-cover opacity-50 mix-blend-overlay group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/40 to-transparent"></div>
</div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="mb-4">
<span className="text-4xl font-semibold text-white font-heading tracking-tight">850%</span>
<span className="block text-ebitda text-sm font-medium mt-1">Stabilní ROAS</span>
</div>
<h3 className="text-lg font-heading font-medium text-white/90">Konopný Táta</h3>
<p className="text-white/50 text-xs mt-2 line-clamp-2">Optimalizace kreativy a nasazení dynamických produktových sad.</p>
</div>
</div>
</div>

<div className="group relative md:col-span-1 rounded-[2rem] overflow-hidden border border-white/10 bg-asphalt cursor-pointer">
<div className="absolute inset-0 bg-carbon">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-t from-carbon to-transparent"></div>
</div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="mb-4">
<span className="text-4xl font-semibold text-white font-heading tracking-tight">-35%</span>
<span className="block text-ebitda text-sm font-medium mt-1">Cena za Lead (CPL)</span>
</div>
<h3 className="text-lg font-heading font-medium text-white/90">Domanský.cz</h3>
</div>
</div>
</div>

<div className="group relative md:col-span-1 rounded-[2rem] overflow-hidden border border-white/10 bg-asphalt cursor-pointer">
<div className="absolute inset-0 bg-carbon">
<img alt="Natima Case Study" className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105 rotate-180" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-tr from-ebitda/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="mb-4">
<span className="text-4xl font-semibold text-white font-heading tracking-tight">2.4x</span>
<span className="block text-ebitda text-sm font-medium mt-1">Konverzní poměr</span>
</div>
<h3 className="text-lg font-heading font-medium text-white/90">Natima</h3>
</div>
</div>
</div>

<div className="group relative md:col-span-1 rounded-[2rem] overflow-hidden border border-white/10 bg-asphalt cursor-pointer">
<div className="absolute inset-0 bg-carbon">
<img alt="Motogaraz Case Study" className="w-full h-full object-cover opacity-40 mix-blend-color-dodge group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/60 to-transparent"></div>
</div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="mb-4">
<span className="text-4xl font-semibold text-white font-heading tracking-tight">12%</span>
<span className="block text-ebitda text-sm font-medium mt-1">Dlouhodobé PNO</span>
</div>
<h3 className="text-lg font-heading font-medium text-white/90">Motogaraz.cz</h3>
</div>
</div>
</div>
</div>

<div className="mt-12 flex justify-center">
<button className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-sm font-medium text-white transition-all duration-300 overflow-hidden hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
<span className="relative z-10">Zobrazit všechny case studies</span>
<iconify-icon className="relative z-10 text-ebitda group-hover:translate-x-1 transition-transform duration-300" height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>
</section><section className="z-10 border-white/5 border-b pt-12 pb-12 relative" id="references">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-xs font-semibold text-center text-white/40 uppercase tracking-widest mb-8">Strategický partner pro růst značek</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-heading font-bold tracking-tight">PROFIMODEL</span>
<span className="text-xl font-heading font-bold tracking-tight">KONOPNÝ TÁTA</span>
<span className="text-xl font-heading font-bold tracking-tight">DOMANSKÝ</span>
<span className="text-xl font-heading font-bold tracking-tight">NATIMA</span>
<span className="text-xl font-heading font-bold tracking-tight">MOTOGARAZ.CZ</span>
</div>
</div>
</section>

<section className="py-24 bg-carbon relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16">
<h2 className="font-heading font-semibold text-3xl md:text-4xl tracking-tight mb-4">
                    Agenturní svět je plný prázdných slibů. <span className="text-ebitda">Znáte to?</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl group transition-all duration-300">
<div className="flex group-hover:bg-red-500/20 transition-colors bg-red-500/10 w-12 h-12 rounded-lg mb-6 items-center justify-center">
<iconify-icon className="text-red-500 text-2xl" icon="lucide:alert-triangle" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-xl mb-3 text-white">The Junior Trap</h3>
<p className="text-white/60 text-sm leading-relaxed">
                        Platíte seniorské sazby, ale na vašem účtu se učí junioři a stážisté. Platíte za jejich chyby svými penězi.
                    </p>
</div>

<div className="glass-card p-8 rounded-2xl group transition-all duration-300">
<div className="flex group-hover:bg-yellow-500/20 transition-colors bg-yellow-500/10 w-12 h-12 rounded-lg mb-6 items-center justify-center">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(234, 179, 8)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<h3 className="font-heading font-semibold text-xl mb-3 text-white">Performance Blindness</h3>
<p className="text-white/60 text-sm leading-relaxed">
                        Dostáváte barevné reporty plné impresí a kliknutí, ale na bankovním účtu chybí reálný zisk.
                    </p>
</div>

<div className="glass-card p-8 rounded-2xl group transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
<svg className="text-orange-500 text-2xl" data-icon-set="lucide" data-lucide="activity" height="24" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-heading font-semibold text-xl mb-3 text-white">Micromanagement Hell</h3>
<p className="text-white/60 text-sm leading-relaxed">
                        Místo strategie trávíte čas kontrolou chyb agentury. Nejste partner, ale hlídač.
                    </p>
</div>
</div>
</div>
</section>

<section className="border-y overflow-hidden border-white/5 pt-24 pb-24 relative" id="protocol" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)'}}>

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ebitda/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="max-w-3xl mb-16">
<span className="text-ebitda font-bold tracking-wider text-xs uppercase mb-2 block">Project Black</span>
<h2 className="font-heading font-semibold text-3xl md:text-5xl tracking-tight mb-6">
                    Návrat k číslům a expertíze
                </h2>
<p className="text-xl text-white/60 font-light">
                    Nejsme továrna na reklamu. Jsme vaši strategičtí partneři.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

<div className="flex flex-col gap-4">
<div className="w-10 h-10 rounded-full bg-ebitda/10 flex items-center justify-center text-ebitda border border-ebitda/20">
<iconify-icon height="20" icon="lucide:shield-check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-xl text-white">Anti-Junior Protocol</h3>
<p className="text-white/60 leading-relaxed text-sm">
                        Garantujeme, že na vašem účtu pracují pouze seniorní stratégové. Žádní prostředníci, žádní junioři. Mluvíte přímo s experty.
                    </p>
</div>

<div className="flex flex-col gap-4">
<div className="w-10 h-10 rounded-full bg-ebitda/10 flex items-center justify-center text-ebitda border border-ebitda/20">
<iconify-icon height="20" icon="lucide:bar-chart-2" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-xl text-white">EBITDA First</h3>
<p className="text-white/60 leading-relaxed text-sm">
                        Ignorujeme "vanity metrics". Náš úspěch měříme čistým ziskem vašeho e-shopu. Reportujeme jako finančníci, ne jako marketéři.
                    </p>
</div>

<div className="flex flex-col gap-4">
<div className="w-10 h-10 rounded-full bg-ebitda/10 flex items-center justify-center text-ebitda border border-ebitda/20">
<iconify-icon height="20" icon="lucide:handshake" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-xl text-white">Adult-to-Adult Partnerství</h3>
<p className="text-white/60 leading-relaxed text-sm">
                        Proaktivní přístup bez nutnosti mikromanagementu. Říkáme vám pravdu, i když je nepříjemná. Šetříme váš čas i nervy.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-carbon" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="font-heading font-semibold text-3xl tracking-tight mb-16 text-center">Chirurgická přesnost napříč platformami</h2>
<div className="grid grid-cols-1 md:grid-cols-3 border border-white/10 rounded-3xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-white/10 bg-asphalt/30">

<div className="p-10 hover:bg-white/5 transition-colors group">
<div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-3xl text-white" icon="lucide:facebook" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-lg text-white mb-2">Meta Ads</h3>
<p className="text-white/50 text-sm">Facebook &amp; Instagram</p>
</div>

<div className="p-10 hover:bg-white/5 transition-colors group">
<div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-3xl text-white" icon="lucide:search" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-lg text-white mb-2">Google Ads &amp; PPC</h3>
<p className="text-white/50 text-sm">Search, Shopping, YouTube</p>
</div>

<div className="p-10 hover:bg-white/5 transition-colors group">
<div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-3xl text-white" icon="lucide:pen-tool" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-lg text-white mb-2">Performance Kreativa</h3>
<p className="text-white/50 text-sm">&amp; Data Analytics</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-carbon to-asphalt"></div>
<div className="absolute inset-0 bg-grid opacity-30"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ebitda/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<h2 className="font-heading font-semibold text-4xl md:text-5xl tracking-tight mb-6">
                Zastavte krvácení zisku ještě dnes
            </h2>
<p className="text-lg font-light text-white/70 max-w-2xl mr-auto mb-10 ml-auto">
                Odhalte, kde vaše současná strategie selhává. Náš  explicitně ukáže, kolik peněz proděláváte kvůli chybám v nastavení.
            </p>
<button className="shiny-cta">
<span className="relative z-10 font-bold tracking-tight text-base px-4">Chci audit zdarma</span>
</button>
<p className="uppercase text-xs text-white/30 tracking-widest mt-6">Nezávazná konzultace</p>
</div>
</section>

<footer className="bg-carbon pt-20 pb-10 border-t border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
<div className="lg:col-span-5 flex flex-col items-start">
<a className="inline-block font-heading font-semibold text-2xl tracking-tight text-white uppercase mb-6" href="#">
                    Socials<span className="text-ebitda">.</span>
</a>
<p className="text-white/60 font-geist text-sm leading-relaxed max-w-sm mb-8">
                    High-End Performance Marketing Consultancy. Transforming e-commerce businesses into
                    profit-generating machines through data precision and senior expertise.
                </p>
<div className="flex items-center gap-3">
<a aria-label="LinkedIn" className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all duration-200" href="#" target="_blank">
<iconify-icon height="18" icon="lucide:linkedin" width="18"></iconify-icon>
</a>
<a aria-label="Instagram" className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all duration-200" href="#" target="_blank">
<iconify-icon height="18" icon="lucide:instagram" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-10">
<div>
<h3 className="font-heading font-medium text-white text-sm tracking-wide mb-6">Služby</h3>
<ul className="space-y-3">
<li>
<a className="text-sm text-white/50 hover:text-ebitda font-geist transition-colors duration-200" href="#">Meta Ads</a>
</li>
<li>
<a className="text-sm text-white/50 hover:text-ebitda font-geist transition-colors duration-200" href="#">Google Ads</a>
</li>
</ul>
</div>
<div>
<h3 className="font-heading font-medium text-white text-sm tracking-wide mb-6">Company</h3>
<ul className="space-y-3">
<li>
<a className="text-sm text-white/50 hover:text-ebitda font-geist transition-colors duration-200" href="#">O nás</a>
</li>
<li>
<a className="text-sm text-white/50 hover:text-ebitda font-geist transition-colors duration-200" href="#">Project Black</a>
</li>
</ul>
</div>
<div>
<h3 className="font-heading font-medium text-white text-sm tracking-wide mb-6">Kontakt</h3>
<ul className="space-y-3">
<li className="text-sm text-white/50 font-geist">Socials Advertising s.r.o.</li>
<li className="text-sm text-white/50 font-geist">Korunní 2569/108Praha 10</li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-white/40 font-geist">© 2025 Socials Advertising s.r.o.</p>
<div className="flex items-center gap-6">
<a className="text-xs text-white/40 hover:text-white font-geist transition-colors duration-200" href="#">Privacy Policy</a>
<a className="text-xs text-white/40 hover:text-white font-geist transition-colors duration-200" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
