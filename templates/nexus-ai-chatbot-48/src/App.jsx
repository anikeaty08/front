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



// Configure Tailwind
tailwind.config = {
theme: {
extend: {
colors: {
gold: {
50: '#fbf7eb',
100: '#f5ebd1',
200: '#edd6a3',
300: '#e3bd6d',
400: '#d9a241',
500: '#d08826',
600: '#b4671e',
700: '#904b1b',
800: '#763b1b',
900: '#62321a',
950: '#38190b',
}
}
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`,
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`,
};
}
});
addUtilities({ ...rotateXUtilities });
}
]
};



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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-3 group" href="#">
<div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-gold-500/30 bg-gold-950/30 text-gold-400">
<span className="font-serif font-bold text-xl">P</span>
</div>
<span className="font-serif font-medium tracking-wide text-lg text-neutral-100 group-hover:text-gold-400 transition-colors">PUUR <span className="text-xs font-sans text-neutral-500 font-light ml-1 uppercase tracking-widest">Emmen</span></span>
</a>
<div className="hidden md:flex items-center gap-8 pl-8 border-l border-white/5">
<a className="text-xs uppercase tracking-widest font-medium text-neutral-400 hover:text-white transition-colors" href="#">Concept</a>
<a className="text-xs uppercase tracking-widest font-medium text-neutral-400 hover:text-white transition-colors" href="#">Keukens</a>
<a className="text-xs uppercase tracking-widest font-medium text-neutral-400 hover:text-white transition-colors" href="#">Tarieven</a>
<a className="text-xs uppercase tracking-widest font-medium text-neutral-400 hover:text-white transition-colors" href="#">Groepen</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-gold-400 transition-colors" href="#">
<svg className="lucide lucide-phone" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    0591 - 123 456
                </a>
<a className="text-xs font-medium bg-gold-600 hover:bg-gold-500 text-white rounded-none px-6 py-2.5 transition-all uppercase tracking-wider shadow-[0_0_20px_-5px_rgba(208,136,38,0.3)]" href="#">
                    Reserveer Nu
                </a>
</div>
</div>
</nav>

<main className="sm:pt-40 sm:pb-24 flex flex-col pt-32 pb-20 relative items-center justify-center overflow-hidden">

<div className="absolute top-0 inset-x-0 h-[800px] overflow-hidden pointer-events-none">
<div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-gold-600/10 blur-[150px] rounded-full opacity-40 mix-blend-screen"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
</div>

<div className="relative z-10 max-w-5xl mx-auto px-6 text-center mb-24">

<div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-gold-500/20 bg-gold-950/20 text-gold-300 text-[10px] uppercase tracking-[0.2em] font-medium mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
<span>Het grootste wereldrestaurant van Drenthe</span>
</div>

<h1 className="font-serif text-6xl sm:text-8xl font-medium tracking-tight leading-[1] mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-400">
                Proef de Wereld <br/>
<span className="text-gold-400 italic font-light pr-2">in Emmen</span>
</h1>

<p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                Ervaar culinaire perfectie met ons all-you-can-eat concept. Van verse sushi en Aziatische wok tot Europese grillgerechten en een grandioos dessertbuffet.
            </p>

<div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
<button className="group relative px-10 h-14 bg-white text-black text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:bg-neutral-200">
<span className="relative z-10">Direct Reserveren</span>
<div className="absolute inset-0 border border-white translate-x-1.5 translate-y-1.5 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></div>
</button>
<button className="group relative h-14 px-8 text-neutral-300 text-sm uppercase tracking-widest font-medium flex items-center gap-3 hover:text-white transition-colors">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold-500 group-hover:text-gold-500 transition-colors">
<svg className="lucide lucide-play w-4 h-4 fill-current" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
                    Bekijk de sfeer
                </button>
</div>
</div>

<div className="sm:mt-0 w-full max-w-6xl mt-12 mr-auto ml-auto pr-4 pl-4 relative" style={{perspective: '2000px'}}>
<div className="absolute -inset-12 bg-gradient-to-tr from-gold-600/10 via-orange-900/10 to-transparent rounded-[100%] blur-3xl opacity-30 -z-10"></div>

<div className="relative rounded-xl border border-white/10 bg-[#080808] shadow-2xl overflow-hidden ring-1 ring-white/5 flex flex-col h-[700px] rotate-x-5 transform transition-transform duration-700 hover:rotate-x-0 origin-bottom">

<header className="h-12 border-b border-white/5 flex items-center px-6 gap-4 bg-[#0F0F0F] shrink-0 justify-between">
<div className="flex items-center gap-2">
<span className="text-xs font-serif italic text-gold-500">Wereld Keuken &amp; Lounge</span>
</div>
<div className="text-[10px] font-medium text-neutral-600 uppercase tracking-widest flex items-center gap-2">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Open tot 22:30
                    </div>
</header>
<div className="flex flex-1 overflow-hidden">

<nav className="w-64 border-r border-white/5 bg-[#0A0A0A] hidden md:flex flex-col flex-shrink-0">
<div className="p-6">
<h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-6 font-medium">Onze Keukens</h3>
<div className="space-y-1">
<button className="w-full flex items-center justify-between px-4 py-3 rounded-none border-l-2 border-gold-500 bg-white/5 text-white transition-all">
<span className="text-sm font-serif">Aziatische Wok</span>
<svg className="lucide lucide-flame text-gold-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
</button>
<button className="w-full flex items-center justify-between px-4 py-3 rounded-none border-l-2 border-transparent hover:bg-white/5 text-neutral-400 hover:text-white transition-all">
<span className="text-sm font-serif">Verse Sushi</span>
<svg className="lucide lucide-fish" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.46 6-7 6s-7.06-2.53-8-6z"></path><path d="M18 12v.5"></path><path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"></path><path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"></path><path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"></path><path d="M10.46 16.74c-.26 1.38-1.29 3.02-2.46 4.26h5.8a2 2 0 0 0 1.98-1.67l.23-1.4"></path></svg>
</button>
<button className="w-full flex items-center justify-between px-4 py-3 rounded-none border-l-2 border-transparent hover:bg-white/5 text-neutral-400 hover:text-white transition-all">
<span className="text-sm font-serif">Grill &amp; Steak</span>
<svg className="lucide lucide-utensils-crossed" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"></path><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"></path><path d="m2.1 21.8 6.4-6.3"></path><path d="m19 5-7 7"></path></svg>
</button>
<button className="w-full flex items-center justify-between px-4 py-3 rounded-none border-l-2 border-transparent hover:bg-white/5 text-neutral-400 hover:text-white transition-all">
<span className="text-sm font-serif">Dessert Buffet</span>
<svg className="lucide lucide-ice-cream-2" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6Zm-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"></path><path d="M12.14 11a3.5 3.5 0 1 1 6.71 0"></path><path d="M15.5 6.5a3.5 3.5 0 0 0-7 0"></path></svg>
</button>
</div>
</div>
<div className="mt-auto p-6 border-t border-white/5">
<div className="bg-gradient-to-br from-gold-900/40 to-black border border-gold-500/20 p-4 relative overflow-hidden">
<h4 className="text-gold-200 font-serif text-lg mb-1 relative z-10">Speciale Actie</h4>
<p className="text-xs text-neutral-400 relative z-10 mb-3">Jarig? Eet gratis mee bij 4 betalende gasten!</p>
<a className="text-[10px] uppercase tracking-widest text-white border-b border-white/30 hover:border-white pb-0.5 relative z-10" href="#">Voorwaarden lezen</a>
<div className="absolute -right-4 -bottom-4 w-20 h-20 bg-gold-500/20 blur-2xl rounded-full"></div>
</div>
</div>
</nav>

<main className="flex-1 relative bg-[#0C0C0C] flex flex-col min-w-0">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
<div className="flex-1 p-8 sm:p-12 overflow-y-auto relative z-10 flex flex-col">
<div className="flex items-end justify-between mb-10 pb-6 border-b border-white/5">
<div>
<span className="text-gold-500 text-xs uppercase tracking-widest font-bold mb-2 block">Live Cooking Experience</span>
<h2 className="text-4xl font-serif text-white">De Aziatische Wok</h2>
</div>
<div className="hidden sm:block text-right">
<div className="text-2xl font-serif text-white">All-in</div>
<div className="text-sm text-neutral-500">Inclusief dranken</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">

<div className="relative group h-64 md:h-auto rounded-none border border-white/5 bg-neutral-900/50 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-900 to-black group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(208,136,38,0.2),transparent_70%)] opacity-60"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
<h3 className="text-xl font-serif text-white mb-2">Stel zelf samen</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">Kies uit verse groenten, vlees of vis en laat het à la minute wokken in uw favoriete saus door onze chefs.</p>
</div>

<div className="absolute top-4 right-4 bg-white text-black text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
                                        Vers
                                    </div>
</div>
<div className="flex flex-col gap-4">

<div className="flex-1 p-6 border border-white/5 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors flex items-start gap-4">
<div className="w-10 h-10 bg-gold-500/10 text-gold-500 flex items-center justify-center shrink-0 border border-gold-500/20">
<svg className="lucide lucide-flame" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
</div>
<div>
<h4 className="text-white font-serif mb-1">8 Verschillende Sauzen</h4>
<p className="text-xs text-neutral-500 font-light">Van zoetzuur tot extra pittige szechuan.</p>
</div>
</div>

<div className="flex-1 p-6 border border-white/5 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors flex items-start gap-4">
<div className="w-10 h-10 bg-gold-500/10 text-gold-500 flex items-center justify-center shrink-0 border border-gold-500/20">
<svg className="lucide lucide-leaf" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.77 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<div>
<h4 className="text-white font-serif mb-1">Dagverse Ingrediënten</h4>
<p className="text-xs text-neutral-500 font-light">Elke dag vers aangeleverd van lokale leveranciers.</p>
</div>
</div>
</div>
</div>
</div>

<div className="p-6 border-t border-white/5 bg-[#0C0C0C]">
<div className="flex items-center justify-between">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full border border-[#0C0C0C] bg-neutral-700"></div>
<div className="w-8 h-8 rounded-full border border-[#0C0C0C] bg-neutral-600"></div>
<div className="w-8 h-8 rounded-full border border-[#0C0C0C] bg-neutral-500 flex items-center justify-center text-[10px] text-white font-medium">+12</div>
</div>
<div className="text-right">
<span className="text-xs text-neutral-500 block mb-1">Nu bekeken door 15 mensen</span>
<a className="text-xs text-gold-500 hover:text-white transition-colors uppercase tracking-widest border-b border-gold-500/30 pb-0.5" href="#">Volledige menu bekijken</a>
</div>
</div>
</div>
</main>
</div>
</div>
</div>

<section className="z-10 w-full max-w-7xl mt-32 mr-auto mb-20 ml-auto pt-12 pr-6 pl-6 relative">
<div className="text-center mb-20">
<span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium block mb-4">Ontdek onze formule</span>
<h2 className="text-4xl sm:text-5xl font-serif text-white mb-6">Meer dan alleen eten</h2>
<div className="w-24 h-1 bg-gold-500 mx-auto"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="lg:col-span-2 relative group p-10 border border-white/10 bg-[#0A0A0A] flex flex-col justify-end overflow-hidden hover:border-gold-500/30 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(50,50,50,0.5),transparent_50%)] group-hover:scale-110 transition-transform duration-700"></div>
<div className="relative z-20">
<div className="w-12 h-12 mb-6 bg-gold-500 text-black flex items-center justify-center">
<svg className="lucide lucide-wine" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 22h8"></path><path d="M7 10h10"></path><path d="M12 15v7"></path><path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"></path></svg>
</div>
<h3 className="text-2xl font-serif text-white mb-3">All-in Arrangementen</h3>
<p className="text-neutral-400 font-light max-w-md">Onbeperkt genieten van al onze gerechten inclusief frisdrank, bier, wijn, koffie en thee voor een vaste, scherpe prijs.</p>
</div>
</div>

<div className="relative group p-10 border border-white/10 bg-[#0F0F0F] flex flex-col justify-between overflow-hidden hover:border-gold-500/30 transition-all duration-500">
<div className="absolute top-0 right-0 p-4 opacity-20">
<svg className="lucide lucide-chef-hat" fill="none" height="100" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" viewbox="0 0 24 24" width="100" xmlns="http://www.w3.org/2000/svg"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"></path><line x1="6" x2="18" y1="17" y2="17"></line></svg>
</div>
<div>
<h3 className="text-xl font-serif text-white mb-2">Live Cooking</h3>
<p className="text-sm text-neutral-400 font-light">Onze chefs bereiden uw gerechten waar u bij staat.</p>
</div>
<div className="flex items-center gap-2 text-gold-500 text-xs uppercase tracking-widest mt-4">
                        Bekijk video <svg className="lucide lucide-arrow-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="relative group p-10 border border-white/10 bg-[#0F0F0F] flex flex-col justify-end overflow-hidden hover:border-gold-500/30 transition-all duration-500">
<div className="relative z-20">
<div className="w-10 h-10 mb-4 rounded-full border border-white/20 flex items-center justify-center text-white">
<svg className="lucide lucide-gamepad-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="13" y2="13"></line><line x1="18" x2="18.01" y1="11" y2="11"></line><rect height="12" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<h3 className="text-xl font-serif text-white mb-2">Kids Corner</h3>
<p className="text-sm text-neutral-400 font-light">Groot speelparadijs met bioscoop voor de kleintjes.</p>
</div>
</div>

<div className="lg:col-span-2 relative group p-10 border border-white/10 bg-[#0A0A0A] flex flex-col justify-center items-start overflow-hidden hover:border-gold-500/30 transition-all duration-500">
<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-gold-900/10 to-transparent"></div>
<div className="relative z-20 max-w-md">
<h3 className="text-2xl font-serif text-white mb-4">Luxe Dessert Buffet</h3>
<p className="text-neutral-400 font-light mb-6">Sluit af in stijl met onze chocoladefontein, schepijs vitrine met 12 smaken, verse patisserie en fruit.</p>
<a className="inline-block border-b border-gold-500 text-gold-500 pb-1 text-xs uppercase tracking-widest hover:text-white hover:border-white transition-all" href="#">Bekijk de dessertkaart</a>
</div>
</div>
</div>
</section>

<section className="z-10 w-full max-w-5xl mt-12 mr-auto mb-28 ml-auto pt-12 pr-6 pl-6 relative">
<div className="text-center mb-16 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-gold-600/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
<h2 className="text-4xl sm:text-5xl font-serif text-white mb-4">Tarieven</h2>
<p className="text-neutral-400 font-light italic font-serif">Prijzen zijn inclusief frisdrank, bier, wijn, koffie &amp; thee.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="relative p-8 border border-white/10 bg-[#0A0A0A] text-center group hover:border-gold-500/20 transition-colors">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0A0A0A] border border-white/10 px-4 py-1 text-xs uppercase tracking-widest text-neutral-400">
                        Di - Wo - Do
                    </div>
<div className="py-6 border-b border-white/5 mb-6">
<span className="block text-sm text-neutral-500 uppercase tracking-widest mb-2">Volwassenen</span>
<div className="flex items-start justify-center gap-1 text-gold-400">
<span className="text-2xl font-serif mt-1">€</span>
<span className="text-6xl font-serif">37</span>
<span className="text-xl font-serif mt-1">,50</span>
</div>
<span className="text-sm text-neutral-500 font-light mt-2">2,5 Uur onbeperkt</span>
</div>
<div className="space-y-3 text-sm font-light text-neutral-300">
<div className="flex justify-between">
<span>Kinderen 3 t/m 11 jaar</span>
<span>€ 2,50 per jaar</span>
</div>
<div className="flex justify-between">
<span>Kinderen 0 t/m 2 jaar</span>
<span className="text-gold-500">Gratis</span>
</div>
</div>
</div>

<div className="relative p-8 border border-gold-500/30 bg-[#0F0F0F] text-center shadow-[0_0_30px_-10px_rgba(208,136,38,0.1)]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-600 text-white px-6 py-1 text-xs uppercase tracking-widest shadow-lg">
                        Vr - Za - Zo &amp; Feestdagen
                    </div>
<div className="py-6 border-b border-white/5 mb-6">
<span className="block text-sm text-neutral-500 uppercase tracking-widest mb-2">Volwassenen</span>
<div className="flex items-start justify-center gap-1 text-white">
<span className="text-2xl font-serif mt-1">€</span>
<span className="text-6xl font-serif">39</span>
<span className="text-xl font-serif mt-1">,50</span>
</div>
<span className="text-sm text-neutral-500 font-light mt-2">2,5 Uur onbeperkt</span>
</div>
<div className="space-y-3 text-sm font-light text-neutral-300">
<div className="flex justify-between">
<span>Kinderen 3 t/m 11 jaar</span>
<span>€ 2,50 per jaar</span>
</div>
<div className="flex justify-between">
<span>Kinderen 0 t/m 2 jaar</span>
<span className="text-gold-500">Gratis</span>
</div>
</div>
<div className="mt-8">
<button className="w-full py-3 bg-gold-600 hover:bg-gold-500 text-white text-xs uppercase tracking-widest transition-colors">
                            Nu Reserveren
                        </button>
</div>
</div>
</div>
<p className="text-center text-xs text-neutral-500 mt-8 font-light max-w-2xl mx-auto">
                * Voor feestdagen gelden afwijkende tarieven. Verspilling wordt niet gewaardeerd; wij kunnen hiervoor extra kosten in rekening brengen.
            </p>
</section>

<section className="z-10 w-full max-w-4xl mr-auto mb-32 ml-auto pr-6 pl-6 relative">
<div className="space-y-4">

<details className="group border-b border-white/10 bg-transparent transition-all duration-300">
<summary className="flex items-center justify-between py-6 cursor-pointer list-none">
<span className="text-lg font-serif text-white group-hover:text-gold-400 transition-colors">Zijn er glutenvrije opties?</span>
<span className="transition group-open:rotate-45">
<svg className="lucide lucide-plus w-5 h-5 text-neutral-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<div className="pb-6 text-sm text-neutral-400 leading-relaxed font-light">
                        Absoluut. Onze chefs kunnen u begeleiden langs het buffet om aan te geven welke gerechten glutenvrij zijn. Daarnaast kunnen we diverse gerechten à la minute glutenvrij voor u bereiden bij de wok en grill.
                    </div>
</details>

<details className="group border-b border-white/10 bg-transparent transition-all duration-300">
<summary className="flex items-center justify-between py-6 cursor-pointer list-none">
<span className="text-lg font-serif text-white group-hover:text-gold-400 transition-colors">Moet ik reserveren?</span>
<span className="transition group-open:rotate-45">
<svg className="lucide lucide-plus w-5 h-5 text-neutral-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<div className="pb-6 text-sm text-neutral-400 leading-relaxed font-light">
                        Vooral in de weekenden raden wij aan om tijdig te reserveren om teleurstelling te voorkomen. U kunt eenvoudig online reserveren via deze website of telefonisch contact opnemen.
                    </div>
</details>
</div>
</section>
</main>

<footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10 relative overflow-hidden">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-600/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">

<div className="md:col-span-1 flex flex-col items-start">
<a className="font-serif text-2xl text-white mb-6" href="#">PUUR <span className="text-xs font-sans text-neutral-500 font-light ml-1 uppercase tracking-widest">Emmen</span></a>
<p className="text-neutral-500 text-sm leading-relaxed mb-6 font-light">
                        Een wereldse beleving in het hart van Drenthe. Ontdek, proef en geniet.
                    </p>
<div className="flex gap-4">

<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-gold-600 transition-all cursor-pointer">
<svg className="lucide lucide-facebook" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</div>
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-gold-600 transition-all cursor-pointer">
<svg className="lucide lucide-instagram" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</div>
</div>
</div>

<div className="md:col-span-1">
<h4 className="text-white font-medium mb-6 text-xs uppercase tracking-widest">Contact</h4>
<ul className="space-y-4 text-sm text-neutral-400 font-light">
<li className="flex items-start gap-3">
<svg className="lucide lucide-map-pin mt-1 text-gold-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Nijbracht 124<br/>7821 CE Emmen</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-phone text-gold-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
<span>0591 - 123 456</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-mail text-gold-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
<span>info@puur-emmen.nl</span>
</li>
</ul>
</div>

<div className="md:col-span-1">
<h4 className="text-white font-medium mb-6 text-xs uppercase tracking-widest">Openingstijden</h4>
<ul className="space-y-3 text-sm text-neutral-400 font-light">
<li className="flex justify-between border-b border-white/5 pb-2">
<span>Maandag</span>
<span>Gesloten</span>
</li>
<li className="flex justify-between border-b border-white/5 pb-2">
<span>Di - Do</span>
<span>17:00 - 22:00</span>
</li>
<li className="flex justify-between border-b border-white/5 pb-2">
<span>Vr - Za</span>
<span>16:30 - 22:30</span>
</li>
<li className="flex justify-between border-b border-white/5 pb-2">
<span>Zondag</span>
<span>16:30 - 22:00</span>
</li>
</ul>
</div>

<div className="md:col-span-1">
<div className="w-full h-32 bg-neutral-900 rounded-lg border border-white/10 relative overflow-hidden mb-4 group cursor-pointer">
<div className="absolute inset-0 flex items-center justify-center z-10">
<div className="bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded text-xs text-white flex items-center gap-2 group-hover:bg-gold-600 transition-colors">
<svg className="lucide lucide-map" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
                                Plan Route
                            </div>
</div>

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>
</div>
</div>
</div>

<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-600 font-light">© 2024 Wereld Restaurant Puur. Alle rechten voorbehouden.</p>
<div className="flex items-center gap-6 text-xs text-neutral-600 font-light">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Cookies</a>
<a className="hover:text-white transition-colors" href="#">Algemene Voorwaarden</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
