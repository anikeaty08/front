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
fontFamily: {
sans: ['Geist', 'sans-serif'],
},
colors: {
brand: {
lime: '#c1ff72',
},
neutral: {
50: '#fafafa',
100: '#f5f5f5',
200: '#e5e5e5',
300: '#d4d4d4',
400: '#a3a3a3',
500: '#737373',
600: '#525252',
700: '#404040',
800: '#262626',
900: '#171717',
}
},
animation: {
'marquee': 'marquee 40s linear infinite',
'clip-in': 'clipIn 1.2s cubic-bezier(0.25, 1, 0.5, 1) both',
'fade-up': 'fadeUp 0.8s ease-out forwards',
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
clipIn: {
'0%': { opacity: '0', clipPath: 'inset(0 0 100% 0)' },
'100%': { opacity: '1', clipPath: 'inset(0 0 0 0)' },
},
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        function handleSpotlight(e) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
            e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
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
      

<header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-stone-200/50">
<div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-16 lg:h-20 flex items-center justify-between">

<a className="block group text-2xl lg:text-3xl font-semibold tracking-tighter font-google-sans-flex" href="#">
                The 1% <span className="transition-colors text-stone-500">Advantage</span>
</a>

<nav className="hidden lg:flex font-montserrat gap-x-10 items-center">
<a className="hover:text-stone-900 transition-colors text-sm font-medium text-stone-600" href="#analyse">De Analyse</a>
<a className="hover:text-stone-900 transition-colors text-sm font-medium text-stone-600" href="#roadmap">Roadmap</a>
<a className="hover:text-stone-900 transition-colors text-sm font-medium text-stone-600" href="#voor-wie">Voor Wie</a>
</nav>

<div className="flex gap-x-8 items-center">
<button className="bg-stone-900 text-[#c1ff72] hover:bg-stone-800 transition-all font-medium px-4 py-2 lg:px-5 lg:py-2.5 rounded-lg text-xs lg:text-sm flex items-center gap-2 group">
                    Doe de Check
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="fixed grid-lines w-full h-[100vh] top-0 right-0 left-0 pointer-events-none z-0"></div>
<div className="relative z-10 flex flex-col min-h-screen pt-16 lg:pt-20">

<main className="flex-1 w-full">

<section className="lg:px-12 lg:pt-16 lg:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-h-[60vh] lg:min-h-[75vh] max-w-[1600px] mr-auto ml-auto pt-8 pr-6 pb-12 pl-6 items-center">
<div className="animate-clip-in lg:col-span-7 space-y-8" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium bg-white border-stone-200 text-stone-600">
<span className="w-2 h-2 rounded-full bg-[#c1ff72] animate-pulse"></span>
                        Strategic Framework
                    </div>

<h1 className="leading-[0.95] lg:text-7xl xl:text-8xl text-5xl font-medium text-stone-900 tracking-tighter">
                        De meeste bedrijven spelen het spel.
                        <span className="text-stone-400 font-google-sans-flex relative inline-block">Top 1% bedrijven
                        </span> bepalen de regels.
                    </h1>
<div className="space-y-4">
<p className="leading-relaxed lg:text-xl text-lg font-normal text-stone-500 font-montserrat max-w-2xl">
<span className="font-semibold text-stone-900">The 1% Advantage</span> is een strategische analyse die blootlegt waarom jouw bedrijf (nog) niet opereert als een top-1% speler — en wat daarvoor nodig is.
                        </p>
<p className="text-xs uppercase tracking-widest text-stone-400 font-semibold">Niet voor iedereen. Alleen voor ondernemers die serieus willen winnen.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="glass-button all-unset cursor-pointer outline-none focus:outline-none z-30 pointer-events-auto text-base rounded-full relative group">
<span className="button-text block select-none text-lg font-semibold text-stone-900 tracking-tight pt-4 pr-8 pb-4 pl-8 relative">
                                Ontdek of je klaar bent
                            </span>
<div className="button-shine"></div>
</button>
<div className="flex items-center gap-3 px-4 text-sm text-stone-500">
<iconify-icon className="text-[#c1ff72]" icon="lucide:check-circle"></iconify-icon>
<span>Korte, vrijblijvende kennismaking</span>
</div>
</div>
<style>
                    @property --angle-1 { syntax: "<angle>"; inherits: false; initial-value: -75deg; }
                    @property --angle-2 { syntax: "<angle>"; inherits: false; initial-value: -45deg; }
                    .glass-button {
                        background: linear-gradient(-75deg, rgba(193, 255, 114, 0.1), rgba(255, 255, 255, 0.5), rgba(193, 255, 114, 0.1));
                        box-shadow: inset 0 0.125em 0.125em rgba(0, 0, 0, 0.05), inset 0 -0.125em 0.125em rgba(255, 255, 255, 0.5), 0 0.25em 0.125em -0.125em rgba(0, 0, 0, 0.2), 0 0 0.1em 0.25em rgba(193, 255, 114, 0.4) inset, 0 0 0 0 rgba(255, 255, 255, 1);
                        backdrop-filter: blur(4px);
                        transition: all 400ms cubic-bezier(0.25, 1, 0.5, 1);
                    }
                    .glass-button:hover { transform: scale(0.98); }
                    .button-shine {
                        position: absolute; inset: 0; border-radius: 999px; width: calc(100% - 1px); height: calc(100% - 1px); top: 0.5px; left: 0.5px;
                        background: linear-gradient(var(--angle-2), rgba(255, 255, 255, 0) 0%, rgba(193, 255, 114, 0.5) 40% 50%, rgba(255, 255, 255, 0) 55%);
                        mix-blend-mode: screen; pointer-events: none; background-size: 200% 200%; background-position: 0% 50%; background-repeat: no-repeat;
                        transition: background-position 500ms, --angle-2 500ms;
                    }
                    .glass-button:hover .button-shine { background-position: 25% 50%; }
                    </style>
</div>

<div className="lg:col-span-5 flex flex-col animate-fade-up lg:mt-0 h-full mt-8 relative justify-center" style={{animationDelay: '0.3s'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#c1ff72] opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative space-y-4">

<div className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-lg lg:ml-0 max-w-sm mx-auto w-full" style={{animationDelay: '0s'}}>
<div className="w-10 h-10 rounded-full flex items-center justify-center border shrink-0 bg-lime-50 text-lime-600 border-lime-100">
<iconify-icon className="" icon="lucide:target" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<p className="text-xs font-semibold text-stone-900">Marktpositie</p>
<span className="text-[10px] text-stone-400">Analyse</span>
</div>
<p className="text-xs text-stone-500 truncate">Dominantie vs. Competitie</p>
</div>
<span className="text-[10px] px-2 py-0.5 rounded border font-medium bg-stone-100 text-stone-600 border-stone-200">Top 1%</span>
</div>

<div className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-lg lg:ml-8 max-w-sm mx-auto w-full" style={{animationDelay: '1.5s'}}>
<div className="flex shrink-0 text-stone-900 bg-[#c1ff72] w-10 h-10 border-lime-600 border rounded-full items-center justify-center">
<svg className="" data-icon-set="lucide" data-lucide="trending-up" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<p className="text-xs font-semibold text-stone-900">Winst Drivers</p>
<span className="text-[10px] text-stone-400">Focus</span>
</div>
<p className="text-xs text-stone-500 truncate">Hefboom Identificatie</p>
</div>
<span className="bg-[#c1ff72] text-[10px] px-2 py-0.5 rounded border border-[#aae65f] font-medium text-stone-900">+300%</span>
</div>

<div className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-lg lg:-ml-4 max-w-sm mx-auto w-full" style={{animationDelay: '2.5s'}}>
<div className="w-10 h-10 rounded-full text-[#c1ff72] flex items-center justify-center border shrink-0 bg-stone-900 border-stone-800">
<iconify-icon className="" icon="lucide:scale" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<p className="text-xs font-semibold text-stone-900">Opportunity Cost</p>
<span className="text-[10px] text-stone-400">Risk</span>
</div>
<p className="text-xs text-stone-500 truncate">Beslissing Impact Analyse</p>
</div>
<span className="text-[10px] px-2 py-0.5 rounded border font-medium bg-stone-900 text-white border-stone-700">Heldere Keuze</span>
</div>
</div>
</div>
</section>

<div className="bg-white w-full z-20 rounded-t-[40px] pt-12 pb-12 relative shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">

<section className="max-w-[1600px] mx-auto w-full mb-16 lg:mb-24 px-6 lg:px-12">
<div className="overflow-hidden w-full relative">
<div className="z-10 bg-gradient-to-r to-transparent w-12 lg:w-40 h-full absolute top-0 left-0 from-white"></div>
<div className="bg-gradient-to-l to-transparent w-12 lg:w-40 h-full z-10 absolute top-0 right-0 from-white"></div>
<div className="flex w-max animate-marquee hover:pause-animation">
<div className="flex items-center gap-12 lg:gap-24 opacity-30 grayscale transition-all duration-500">
<span className="text-xl font-bold tracking-widest uppercase">Strategie</span>
<span className="text-xl font-bold tracking-widest uppercase">Focus</span>
<span className="text-xl font-bold tracking-widest uppercase">Winst</span>
<span className="text-xl font-bold tracking-widest uppercase">Schaalbaarheid</span>
<span className="text-xl font-bold tracking-widest uppercase">Dominantie</span>
<span className="text-xl font-bold tracking-widest uppercase">Regie</span>
</div>
<div className="flex items-center gap-12 lg:gap-24 opacity-30 grayscale transition-all duration-500 ml-12 lg:ml-24">
<span className="text-xl font-bold tracking-widest uppercase">Strategie</span>
<span className="text-xl font-bold tracking-widest uppercase">Focus</span>
<span className="text-xl font-bold tracking-widest uppercase">Winst</span>
<span className="text-xl font-bold tracking-widest uppercase">Schaalbaarheid</span>
<span className="text-xl font-bold tracking-widest uppercase">Dominantie</span>
<span className="text-xl font-bold tracking-widest uppercase">Regie</span>
</div>
</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto px-6 lg:px-12 animate-fade-up w-full mb-12 lg:mb-20" style={{animationDelay: '0.4s'}}>
<div className="text-center mb-12 max-w-3xl mx-auto">
<h2 className="lg:text-5xl text-3xl font-medium text-stone-900 tracking-tight font-montserrat mb-4">
                            Waarom de meeste bedrijven <span className="text-stone-400">nooit in de top 1% komen.</span>
</h2>
<p className="text-stone-500">Niet omdat ze niet hard werken, geen klanten hebben of geen tools gebruiken.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="p-8 bg-neutral-50 border border-stone-200 rounded-2xl hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="lucide:eye-off" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-2">Beslissingen zonder inzicht</h3>
<p className="text-stone-500 text-sm leading-relaxed">Ze sturen op gevoel in plaats van data, waardoor kostbare fouten herhaald worden.</p>
</div>

<div className="p-8 bg-neutral-50 border border-stone-200 rounded-2xl hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="" icon="lucide:list-x" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2 text-stone-900">Groei zonder prioriteit</h3>
<p className="text-stone-500 text-sm leading-relaxed">Alles lijkt belangrijk, waardoor focus ontbreekt en echte schaalbaarheid uitblijft.</p>
</div>

<div className="p-8 bg-neutral-50 border border-stone-200 rounded-2xl hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-stone-200 text-stone-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="lucide:activity" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2 text-stone-900">Reageren ipv regisseren</h3>
<p className="text-stone-500 text-sm leading-relaxed">Ze zijn gevangenen van hun eigen operatie in plaats van architecten van hun succes.</p>
</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto px-6 lg:px-12 mb-20">
<div className="bg-stone-900 rounded-[32px] p-8 lg:p-16 relative overflow-hidden">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#c1ff72 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl lg:text-5xl font-medium text-white tracking-tight mb-6">
                                    Top 1% prestaties zijn geen toeval — <span className="text-[#c1ff72]">ze zijn ontworpen.</span>
</h2>
<p className="text-stone-400 text-lg mb-8 leading-relaxed">
                                    Bedrijven die structureel winnen, investeren pas nadat helder is wat werkt. Ze bouwen rust, focus en schaalbaarheid in.
                                </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3 text-stone-300">
<iconify-icon className="text-[#c1ff72]" icon="lucide:check-circle-2"></iconify-icon>
                                        Weten exact waar winst wordt gemaakt
                                    </div>
<div className="flex items-center gap-3 text-stone-300">
<iconify-icon className="text-[#c1ff72]" icon="lucide:check-circle-2"></iconify-icon>
                                        Weten welke keuzes hen vooruithelpen
                                    </div>
<div className="flex items-center gap-3 text-stone-300">
<iconify-icon className="text-[#c1ff72]" icon="lucide:check-circle-2"></iconify-icon>
                                        Elimineren wat afleidt van groei
                                    </div>
</div>
</div>
<div className="lg:pl-12">
<div className="glass-panel-dark p-8 rounded-2xl border border-stone-700/50">
<h3 className="text-white text-xl font-semibold mb-4">Wat is The 1% Advantage?</h3>
<p className="text-stone-400 mb-6 text-sm">Een strategisch framework + analyse dat laat zien waar jouw bedrijf staat, wat je tegenhoudt en wat er nodig is om door te breken.</p>
<div className="grid grid-cols-2 gap-4 text-xs font-mono text-stone-500 mb-6">
<div className="flex items-center gap-2"><iconify-icon className="text-red-500" icon="lucide:x"></iconify-icon> Geen software</div>
<div className="flex items-center gap-2"><iconify-icon className="text-red-500" icon="lucide:x"></iconify-icon> Geen implementatie</div>
<div className="flex items-center gap-2"><iconify-icon className="text-red-500" icon="lucide:x"></iconify-icon> Geen rompslomp</div>
</div>
<div className="flex items-center gap-3 p-4 bg-[#c1ff72]/10 rounded-lg border border-[#c1ff72]/20">
<iconify-icon className="text-[#c1ff72]" icon="lucide:zap"></iconify-icon>
<span className="text-stone-200 text-sm font-medium">Alleen strategische helderheid vóór actie.</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="lg:px-12 lg:mb-20 max-w-[1600px] mr-auto mb-12 ml-auto pr-6 pl-6" id="analyse">
<h2 className="text-3xl lg:text-5xl font-medium text-stone-900 tracking-tight font-montserrat mb-10 lg:mb-12">Wat je ontvangt</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">

<div className="row-span-1 lg:row-span-2 group overflow-hidden lg:p-10 flex flex-col min-h-[500px] lg:min-h-full transition-transform hover:scale-[1.01] duration-300 bg-[#002f43] border-[#002f43] border rounded-[32px] pt-6 pr-6 pb-6 pl-6 relative justify-between">

<div className="z-20 mt-auto relative">
<div className="flex text-white bg-white/10 w-12 h-12 border-white/10 border rounded-2xl mb-6 backdrop-blur-md items-center justify-center">
<iconify-icon className="" icon="lucide:file-bar-chart-2" width="24"></iconify-icon>
</div>
<h3 className="lg:text-3xl text-2xl font-bold text-white font-montserrat mb-3">1. Strategic Report</h3>
<p className="text-stone-300 mb-6 text-sm lg:text-base leading-relaxed max-w-sm">
                                    Een helder rapport dat laat zien waarom je (nog) niet in de top 1% zit, waar je onderpresteert en waar de hefboom ligt.
                                </p>
</div>
<div className="flex-1 flex w-full mt-8 mb-8 relative items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl pointer-events-none"></div>

<div className="transform group-hover:-translate-y-2 transition-transform duration-500 bg-stone-50 w-full max-w-[280px] z-10 rounded-xl pt-5 pr-5 pb-5 pl-5 relative shadow-2xl border border-stone-200">
<div className="flex justify-between items-end border-b pb-4 mb-4">
<div>
<div className="text-[10px] uppercase text-stone-400 tracking-wider font-bold">Performance Score</div>
<div className="text-3xl font-bold text-stone-900">42<span className="text-stone-300 text-lg">/100</span></div>
</div>
<div className="text-xs font-medium text-red-500 bg-red-50 px-2 py-1 rounded">Needs Focus</div>
</div>
<div className="space-y-3">
<div className="flex justify-between text-xs">
<span className="text-stone-500">Winst Lekkage</span>
<span className="font-bold text-stone-900">High</span>
</div>
<div className="h-1 w-full bg-stone-200 rounded overflow-hidden">
<div className="h-full bg-red-400 w-[80%]"></div>
</div>
<div className="flex justify-between text-xs pt-2">
<span className="text-stone-500">Schaalbaarheid</span>
<span className="font-bold text-stone-900">Low</span>
</div>
<div className="h-1 w-full bg-stone-200 rounded overflow-hidden">
<div className="h-full bg-orange-400 w-[30%]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 group overflow-hidden lg:p-10 min-h-[400px] flex flex-col md:flex-row transition-transform hover:scale-[1.01] duration-300 bg-lime-300 border-lime-300 border rounded-[32px] pt-6 pr-6 pb-6 pl-6 relative items-center justify-between" id="roadmap">

<div className="relative z-20 flex flex-col h-full justify-between w-full md:w-1/2 mb-8 md:mb-0">
<div className="">
<div className="w-12 h-12 rounded-2xl bg-white/40 backdrop-blur-sm flex items-center justify-center mb-6 text-stone-900">
<iconify-icon icon="lucide:map" width="24"></iconify-icon>
</div>
<h3 className="lg:text-3xl text-2xl font-bold text-stone-900 font-montserrat mb-3">2. Roadmap (90 dagen)</h3>
<p className="text-stone-800 text-sm lg:text-base mb-6 leading-relaxed max-w-xs">
                                        Wat stoppen. Wat verdubbelen. Waar de focus op moet. Welke beslissingen eerst.
                                    </p>
</div>
</div>

<div className="relative w-full md:w-1/2 h-full min-h-[220px] flex items-center justify-end">
<div className="absolute right-[-20px] md:right-[-40px] w-[120%] md:w-[110%] group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500 ease-out">
<div className="bg-white/90 backdrop-blur rounded-xl shadow-lg border border-lime-400/50 p-6 space-y-4">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-bold">1</div>
<div className="flex-1">
<div className="text-xs font-bold text-stone-900">Stop Lekken</div>
<div className="text-[10px] text-stone-500">Directe kostenbesparing</div>
</div>
</div>
<div className="h-4 w-0.5 bg-stone-200 ml-4"></div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-bold">2</div>
<div className="flex-1">
<div className="text-xs font-bold text-stone-900">Optimaliseer Core</div>
<div className="text-[10px] text-stone-500">Procesverbetering</div>
</div>
</div>
<div className="h-4 w-0.5 bg-stone-200 ml-4"></div>
<div className="flex items-center gap-4 opacity-50">
<div className="w-8 h-8 rounded-full bg-stone-200 text-stone-500 flex items-center justify-center text-xs font-bold">3</div>
<div className="flex-1">
<div className="text-xs font-bold text-stone-900">Schaal</div>
<div className="text-[10px] text-stone-500">Groeiversnelling</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden bg-lime-100/80 rounded-[32px] p-6 lg:p-10 flex flex-col justify-between min-h-[350px] transition-transform hover:scale-[1.01] duration-300 border border-lime-200">
<div className="relative w-full h-32 mb-4 flex items-center justify-center">
<div className="bg-white p-4 rounded-2xl shadow-sm text-center w-full max-w-[200px] transform group-hover:-translate-y-1 transition-transform">
<div className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Deep Dive</div>
<div className="text-lg font-bold text-stone-900 mb-2">Besliscall</div>
<div className="inline-flex items-center gap-1 text-[10px] bg-lime-100 text-lime-800 px-2 py-1 rounded">
<iconify-icon icon="lucide:clock"></iconify-icon> 60-90 min
                                    </div>
</div>
</div>
<div className="mt-auto relative z-20">
<div className="w-10 h-10 rounded-xl bg-white/60 backdrop-blur flex items-center justify-center mb-4 text-stone-900">
<iconify-icon icon="lucide:phone-call" width="20"></iconify-icon>
</div>
<h3 className="lg:text-2xl text-xl font-bold text-stone-900 font-montserrat mb-2">3. Strategische Sessie</h3>
<p className="text-stone-700 text-sm mb-4 leading-relaxed">Context &amp; interpretatie. Confronterende inzichten. Heldere keuzes. Rust en richting.</p>
</div>
</div>

<div className="group relative overflow-hidden bg-sky-50 rounded-[32px] p-6 lg:p-10 flex flex-col justify-between min-h-[350px] transition-transform hover:scale-[1.01] duration-300 border border-sky-100">

<div className="flex flex-col gap-2 mb-8">
<div className="bg-white p-2 rounded-lg border border-sky-100 shadow-sm flex items-center gap-3 text-xs text-stone-600">
<iconify-icon className="text-sky-500" icon="lucide:search"></iconify-icon>
                                    Waar winst wordt gecreëerd
                                </div>
<div className="bg-white p-2 rounded-lg border border-sky-100 shadow-sm flex items-center gap-3 text-xs text-stone-600 ml-4">
<iconify-icon className="text-sky-500" icon="lucide:search"></iconify-icon>
                                    Waar focus ontbreekt
                                </div>
<div className="bg-white p-2 rounded-lg border border-sky-100 shadow-sm flex items-center gap-3 text-xs text-stone-600">
<iconify-icon className="text-sky-500" icon="lucide:search"></iconify-icon>
                                    Welke bottlenecks blokkeren
                                </div>
</div>
<div className="z-20 mt-auto relative">
<div className="w-10 h-10 rounded-xl bg-white/60 backdrop-blur flex items-center justify-center mb-4 text-stone-900">
<iconify-icon icon="lucide:microscope" width="20"></iconify-icon>
</div>
<h3 className="lg:text-2xl text-xl font-bold text-stone-900 font-montserrat mb-2">Diepte Analyse</h3>
<p className="text-stone-700 text-sm mb-4 leading-relaxed">Alles wordt vertaald naar impact, prioriteit en consequenties.</p>
</div>
</div>
</div>
</section>

<section className="py-12 lg:py-16 max-w-[1600px] mx-auto px-6 lg:px-12" id="voor-wie">
<div className="grid md:grid-cols-2 gap-8 lg:gap-16">

<div className="p-8 lg:p-12 rounded-[32px] border border-lime-200 bg-lime-50/50">
<h3 className="text-2xl font-bold text-stone-900 mb-6 font-montserrat">Dit is voor jou als je:</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-[#c1ff72] text-stone-900 flex items-center justify-center flex-shrink-0 text-xs"><iconify-icon icon="lucide:check"></iconify-icon></div>
<span className="text-stone-700 font-medium">Een serieus bedrijf runt en niet tevreden bent met "goed genoeg".</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-[#c1ff72] text-stone-900 flex items-center justify-center flex-shrink-0 text-xs"><iconify-icon icon="lucide:check"></iconify-icon></div>
<span className="text-stone-700 font-medium">Betere beslissingen wilt nemen dan je concurrenten.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-[#c1ff72] text-stone-900 flex items-center justify-center flex-shrink-0 text-xs"><iconify-icon icon="lucide:check"></iconify-icon></div>
<span className="text-stone-700 font-medium">Wilt opereren met overzicht, focus en controle.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-[#c1ff72] text-stone-900 flex items-center justify-center flex-shrink-0 text-xs"><iconify-icon icon="lucide:check"></iconify-icon></div>
<span className="text-stone-700 font-medium">Ambieert om top 1% te zijn — niet gemiddeld.</span>
</li>
</ul>
</div>

<div className="p-8 lg:p-12 rounded-[32px] border border-stone-200 bg-white">
<h3 className="text-2xl font-bold text-stone-400 mb-6 font-montserrat">Dit is <span className="text-stone-900">níet</span> voor jou als je:</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-stone-300" icon="lucide:x"></iconify-icon>
<span className="text-stone-500">Alleen op zoek bent naar snelle tactieken of "meer leads".</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-stone-300" icon="lucide:x"></iconify-icon>
<span className="text-stone-500">Iemand zoekt die alleen uitvoert zonder na te denken.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-stone-300" icon="lucide:x"></iconify-icon>
<span className="text-stone-500">Bevestiging wilt in plaats van de waarheid.</span>
</li>
</ul>
</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12 text-center">
<div className="max-w-2xl mx-auto space-y-6">
<h2 className="text-3xl font-medium font-montserrat text-stone-900">Investering</h2>
<div className="text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 font-geist">
                            €1.500 – €5.000
                        </div>
<p className="text-stone-500">Eenmalige strategische investering, afhankelijk van complexiteit.</p>
<p className="text-sm font-medium text-stone-900 bg-stone-100 inline-block px-4 py-2 rounded-full">
                            Voor bedrijven met ambitie is dit geen kostenpost, maar de prijs van betere beslissingen.
                        </p>
</div>
</section>

<section className="max-w-[1600px] mx-auto px-6 lg:px-12 my-12 lg:my-20">
<div className="lg:p-20 overflow-hidden text-center bg-[#c1ff72] rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative">
<div className="relative z-10 max-w-3xl mx-auto space-y-8">
<h2 className="text-3xl lg:text-6xl leading-tight font-medium text-stone-900 tracking-tight font-montserrat">Klaar om te zien waar je écht staat?</h2>
<p className="text-stone-800 text-lg">Tools maken geen top 1% bedrijven. Hard werken ook niet. </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
<button className="font-medium px-8 py-4 rounded-full transition-transform hover:scale-105 shadow-xl bg-stone-900 text-white hover:bg-stone-800 w-full sm:w-auto text-center justify-center flex items-center gap-2">
                                    Plan een korte kennismaking
                                    <iconify-icon icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
<p className="text-sm text-stone-700 opacity-75">Geen pitch. Geen verplichting.</p>
</div>
<div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.8) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(255,255,255,0.8) 0%, transparent 20%)'}}></div>
</div>
</section>

<footer className="max-w-[1600px] mx-auto px-6 lg:px-12 pb-8">
<div className="border rounded-3xl p-8 lg:p-12 shadow-sm bg-neutral-50 border-stone-200">
<div className="flex flex-col lg:flex-row gap-10 lg:gap-16 justify-between">
<div className="lg:w-1/3 space-y-5">
<div className="flex gap-2 items-center">
<span className="text-2xl font-bold tracking-tighter font-google-sans-flex">The 1% <span className="text-lime-500">Advantage</span></span>
</div>
<p className="text-sm text-stone-500 font-montserrat max-w-sm leading-relaxed">
                                The 1% Advantage — voor ondernemers die niet willen meedoen, maar willen domineren.
                            </p>
</div>
<div className="flex flex-wrap gap-10 lg:gap-20 text-sm">
<div className="space-y-4">
<h3 className="text-xs uppercase font-semibold tracking-wider text-stone-400">Info</h3>
<ul className="space-y-3 text-stone-600">
<li><a className="hover:text-stone-900 transition-colors" href="#analyse">Analyse</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#roadmap">Roadmap</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#voor-wie">Voor wie</a></li>
</ul>
</div>
<div className="space-y-4">
<h3 className="text-xs uppercase font-semibold tracking-wider text-stone-400">Connect</h3>
<ul className="space-y-3 text-stone-600">
<li><a className="flex items-center gap-2 hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="simple-icons:linkedin" width="14"></iconify-icon> LinkedIn</a></li>
<li><a className="flex items-center gap-2 hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="lucide:mail" width="14"></iconify-icon> Contact</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs border-stone-200 text-stone-400">
<p>© 2026 The 1% Advantage. All rights reserved.</p>
</div>
</div>
</footer>
</div>

</main>
</div>


    </>
  );
}
