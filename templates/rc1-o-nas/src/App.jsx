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
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
950: '#0a0a0a',
}
},
animation: {
'fade-in': 'fadeIn 0.6s ease-out forwards',
'draw': 'draw 2s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
draw: {
'0%': { strokeDasharray: '1000', strokeDashoffset: '1000' },
'100%': { strokeDasharray: '1000', strokeDashoffset: '0' },
}
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
      

<div className="fixed inset-0 -z-20 pointer-events-none">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/95 to-neutral-900/90"></div>
<div className="absolute inset-0 bg-grid opacity-20 mask-gradient"></div>
</div>

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">

<a className="text-white font-normal tracking-tight text-lg flex items-center gap-2 group z-20" href="index.html">
<iconify-icon className="text-xl text-white/80 group-hover:text-amber-500 transition-colors duration-300" icon="solar:layers-linear"></iconify-icon>
<span className="group-hover:text-white/90 transition-colors">Real Change</span>
</a>

<nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-2">
<a className="uppercase transition-all duration-300 hover:bg-amber-500/10 hover:border-amber-500/50 hover:text-amber-500 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] text-base font-normal text-neutral-400 tracking-wide border-transparent border rounded pt-2 pr-4 pb-2 pl-4" href="jak-pracujemy.html">Jak pracujemy</a>
<a className="uppercase transition-all duration-300 hover:bg-amber-500/10 hover:border-amber-500/50 hover:text-amber-500 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] text-base font-normal text-neutral-400 tracking-wide border-transparent border rounded pt-2 pr-4 pb-2 pl-4" href="propozycja.html">PROPOZYCJA</a>
<a className="uppercase transition-all duration-300 hover:bg-amber-500/10 hover:border-amber-500/50 hover:text-amber-500 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] text-base font-normal text-neutral-400 tracking-wide border-transparent border rounded pt-2 pr-4 pb-2 pl-4" href="o-nas.html">O Nas</a>
</nav>

<div className="flex items-center gap-4 z-20">

<div className="hidden md:flex items-center gap-3 pr-2 border-r border-white/10 mr-1 h-6">
<a className="flex items-center text-neutral-400 hover:text-white transition-colors duration-300" href="#" target="_blank">
<iconify-icon className="text-lg" icon="lucide:linkedin" strokeWidth="1.5"></iconify-icon>
</a>
<a className="flex items-center text-neutral-400 hover:text-white transition-colors duration-300" href="#" target="_blank">
<iconify-icon className="text-lg" icon="lucide:youtube" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<a className="hidden md:inline-flex items-center justify-center rounded border border-white/10 bg-white/10 px-4 py-2 text-xs font-normal text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:bg-amber-500/10 hover:border-amber-500/50 hover:text-amber-500 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] active:scale-[0.98]" href="#contact">
                    KONTAKT
                </a>

<a className="hidden md:inline-flex items-center justify-center rounded border border-transparent px-3 py-2 text-xs font-normal text-neutral-400 transition-all duration-300 hover:text-white hover:bg-white/5" href="#">
<iconify-icon className="mr-1.5 text-lg" icon="solar:globe-linear"></iconify-icon>
                    EN
                </a>

<button className="md:hidden text-white" onclick="document.getElementById('mobile-nav').classList.toggle('hidden')">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:hidden border-t border-white/5 bg-neutral-950 px-6 py-4 flex flex-col gap-4 text-center" id="mobile-nav">
<a className="text-lg uppercase tracking-wide text-neutral-400 hover:text-amber-500" href="jak-pracujemy.html">Jak pracujemy</a>
<a className="text-lg uppercase tracking-wide text-neutral-400 hover:text-amber-500" href="propozycja.html">Dla Ciebie</a>
<a className="text-lg uppercase tracking-wide text-neutral-400 hover:text-amber-500" href="o-nas.html">My</a>
<a className="text-lg uppercase tracking-wide text-neutral-400 hover:text-amber-500 flex items-center justify-center gap-2" href="#">
<iconify-icon className="text-lg" icon="solar:globe-linear"></iconify-icon> EN
            </a>
<div className="flex justify-center gap-6 pt-2 border-t border-white/5 mt-2">
<a className="text-neutral-400 hover:text-white" href="#"><iconify-icon className="text-xl" icon="lucide:linkedin" strokeWidth="1.5"></iconify-icon></a>
<a className="text-neutral-400 hover:text-white" href="#"><iconify-icon className="text-xl" icon="lucide:youtube" strokeWidth="1.5"></iconify-icon></a>
</div>
</div>
</header>

<main className="pt-24 flex-grow animate-fade-in">

<section className="z-10 lg:pt-24 lg:pb-32 overflow-hidden pt-12 pb-20 relative">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-6 text-center lg:text-left order-2 lg:order-1">

<div className="flex justify-center lg:justify-start">
<div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/5 backdrop-blur-sm">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_6px_rgba(245,158,11,0.6)]"></div>
<span className="text-[10px] uppercase font-semibold text-amber-500 tracking-[0.15em]">Kryzys Decyzyjny &amp; Operacyjny</span>
</div>
</div>

<div className="space-y-4 pt-2">
<h1 className="leading-[1.1] sm:text-5xl lg:text-6xl text-4xl font-normal text-white tracking-normal font-serif">Twoja firma nie <br className="hidden lg:block"/> potrzebuje kolejnej <br className="hidden lg:block"/> strategii.</h1>
<h2 className="leading-[1.2] sm:text-4xl lg:text-3xl text-3xl italic text-amber-500 tracking-tight font-serif text-right">
                            Potrzebuje wdrożenia i <br className="hidden lg:block"/>
                            odpowiedzialności.
                        </h2>
</div>

<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-6">
<a className="inline-flex items-center justify-center transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] sm:w-auto hover:text-amber-500 hover:bg-amber-500/10 hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] text-base font-normal text-white bg-white/5 w-full border-white/10 border rounded-lg pt-4 pr-8 pb-4 pl-8 backdrop-blur-md" href="#contact">
                            Porozmawiajmy, czy to ma sens
                        </a>
</div>
</div>

<div className="relative hidden lg:block group order-1 lg:order-2">

<div className="absolute -inset-1 bg-gradient-to-tr from-neutral-800 to-neutral-700 rounded-2xl blur opacity-20 transition duration-1000 group-hover:opacity-40"></div>

<div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0f0f0f] aspect-square shadow-2xl shadow-black/50 p-8 flex flex-col transition-all duration-500 group-hover:border-amber-500/30">

<div className="flex justify-between items-start mb-8 z-10">
<div className="">
<h3 className="text-white text-lg font-serif italic tracking-wide">REAL CHANGE</h3>
<p className="text-xs text-neutral-500 mt-1 uppercase tracking-widest">REAL CHANCE</p>
</div>

<div className="flex flex-col gap-2 items-end">
<div className="flex items-center gap-2">
<span className="text-[10px] text-neutral-500 font-medium uppercase tracking-wider">Szkolenia</span>
<div className="w-8 h-[2px] border-t border-dashed border-neutral-600"></div>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] text-amber-500 font-bold uppercase tracking-wider">Wdrożenie</span>
<div className="w-8 h-[3px] bg-amber-500 rounded-full shadow-[0_0_6px_rgba(245,158,11,0.8)]"></div>
</div>
</div>
</div>

<div className="relative flex-grow w-full">

<div className="absolute inset-0 border-b border-l border-white/5 box-border">
<div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
</div>

<div className="absolute -left-6 top-0 bottom-0 flex flex-col justify-between text-[9px] text-neutral-600 font-mono py-2">
<span>MAX</span>
<span>MIN</span>
</div>

<svg className="overflow-visible preserve-3d z-10 w-[510px] h-[382px] relative" data-icon-replaced="true" strokeWidth="2" style={{width: '510px', height: '382px', color: 'rgb(241, 245, 249)'}} viewbox="0 0 400 300">
<defs>
<lineargradient id="gradient-amber" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#f59e0b', stopOpacity: '0.2'}}></stop>
<stop offset="100%" style={{stopColor: '#f59e0b', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>


<path className="text-neutral-700 opacity-60" d="M 0 220 L 400 220" fill="none" stroke="currentColor" stroke-dasharray="6 6" strokeWidth="2"></path>



<path className="graph-line-shadow" d="M 0 220 C 60 220, 100 220, 140 260 C 180 300, 220 200, 400 30" fill="none" stroke="#f59e0b" strokeLinecap="round" strokeWidth="3"></path>

<path className="mix-blend-lighten" d="M 0 220 C 60 220, 100 220, 140 260 C 180 300, 220 200, 400 30 L 400 300 L 0 300 Z" fill="url(#gradient-amber)"></path>


<circle cx="0" cy="220" fill="#f59e0b" r="3"></circle>

<g className="" transform="translate(140, 285)">
<text className="text-[8px] fill-neutral-500 font-sans tracking-wide uppercase" style={{}} text-anchor="middle">Trudności</text>
</g>

<g transform="translate(360, 20)">
<rect fill="#f59e0b" fillOpacity="0.1" height="20" rx="4" stroke="#f59e0b" stroke-opacity="0.4" width="60" x="-30" y="-15"></rect>
<text className="text-[9px] fill-amber-500 font-bold font-sans tracking-tight" text-anchor="middle" x="0" y="-2">ZMIANA</text>
</g>
</svg>
</div>

<div className="flex justify-between mt-2 text-[9px] text-neutral-600 font-mono uppercase tracking-widest">
<span className="">Start</span>
<span>Czas</span>
</div>
</div>
</div>
</div>
</section>

<section className="text-center border-white/5 border-t pt-20 pb-20">
<div className="max-w-3xl mx-auto px-6">
<h3 className="uppercase text-3xl font-semibold text-amber-500 tracking-tight mb-8">Jak Powstał Real Change</h3>
<div className="space-y-6 text-xl text-neutral-400 font-light leading-relaxed">
<p className="text-white">
                        Real Change powstało z frustracji.
                    </p>
<p className="" style={{}}>Emocji właścicieli firm, członków zarządów, którzy kupili strategię, pozyskali doradców, opłacili wiele szkoleń, a mimo to nie zauważyli zmiany.</p>
<p className="" style={{}}>Bo problemem nie jest brak wiedzy – tylko brak odpowiedzialności za wdrożenie.</p>
<p className="">Dlatego powstał <span className="font-medium text-white">Real Change</span>.<br/>Projekt dla firm, które mają dość teorii i chcą w końcu zobaczyć efekt.</p>
</div>
</div>
</section>

<section className="bg-neutral-900/20 border-white/5 border-t pt-20 pb-20">
<div className="max-w-6xl mx-auto px-6">
<h3 className="text-3xl font-semibold text-amber-500 tracking-tight text-center mb-16">NASZE WARTOŚCI</h3>
<div className="grid md:grid-cols-3 gap-12">
<div className="space-y-4">
<h4 className="text-lg font-normal text-white text-center">Odpowiedzialność</h4>
<p className="leading-relaxed text-base text-neutral-500 text-center">Nie doradzamy z boku. Jeśli wchodzimy do firmy - odpowiadamy za dowiezienie ustalonych zmian i bierzemy za to odpowiedzialność.</p>
</div>
<div className="space-y-4">
<h4 className="text-lg font-normal text-white text-center">Wdrożenie</h4>
<p className="leading-relaxed text-base text-neutral-500 text-center">Interesuje nas tylko to, co faktycznie zmienia sposób działania firmy. Nie to, co dobrze wygląda w prezentacji. </p>
</div>
<div className="space-y-4">
<h4 className="text-lg font-normal text-white text-center">Szczerość</h4>
<p className="leading-relaxed text-base text-neutral-500 text-center">
                            Jeśli Real Change nie ma sensu w Twojej sytuacji — mówimy to wprost. Nie naciągamy rzeczywistości.
                        </p>
</div>
</div>
</div>
</section>

<section className="border-white/5 border-t pt-24 pb-24">
<div className="max-w-5xl mr-auto ml-auto pr-6 pl-6">
<h3 className="text-3xl font-semibold text-amber-500 tracking-tight text-center mb-16">DLACZEGO NIE JESTEŚMY KOLEJNĄ FIRMĄ SZKOLENIOWĄ</h3>
<div className="grid md:grid-cols-2 gap-12 md:gap-24 relative">

<div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

<div className="text-right space-y-6 opacity-60 hover:opacity-100 transition-opacity">
<h4 className="text-xl text-neutral-100 font-serif mb-6">Firmy szkoleniowe</h4>
<ul className="flex flex-col text-lg text-neutral-100 space-y-4 items-end">
<li className="">sprzedają godziny</li>
<li className="">sprzedają wiedzę</li>
<li className="">kończą pracę na prezentacji</li>
</ul>
</div>

<div className="text-left space-y-6">
<h4 className="text-xl font-normal text-white mb-6">Real Change</h4>
<ul className="space-y-4 text-lg text-white">
<li className="flex gap-2 gap-x-2 gap-y-2 items-center"><iconify-icon className="text-green-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> pracuje w środku firmy</li>
<li className="flex items-center gap-2"><iconify-icon className="text-green-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> bierze odpowiedzialność operacyjną</li>
<li className="flex items-center gap-2"><iconify-icon className="text-green-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> kończy pracę wtedy, gdy zmiana działa</li>
</ul>
</div>
</div>
<div className="text-center mt-16 max-w-lg mx-auto">
<p className="text-3xl font-normal italic text-amber-500 font-serif text-center">
<span className="block whitespace-nowrap md:w-[120%] md:-ml-[10%] text-zinc-200 tracking-tight bg-slate-950 mb-2">"Wiedza bez wdrożenia nie zmienia firm.</span>
<span className="block text-zinc-200">Zmieniają je decyzje, egzekucja i odpowiedzialność."</span>
</p>
</div>
</div>
</section>
</main>

<section className="bg-gradient-to-b from-neutral-950 to-neutral-900 border-white/5 border-t pt-24 pb-24" id="contact">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16 space-y-3">
<h2 className="text-3xl font-semibold text-amber-500 tracking-tight">UMÓW KRÓTKĄ ROZMOWĘ</h2>
<p className="text-base text-neutral-400 font-light">Bezpośredni kontakt lub wybór dogodnego terminu online.</p>
</div>

<div className="grid md:grid-cols-2 gap-6">

<div className="flex flex-col justify-between h-full rounded-xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-amber-500/30">
<div>
<div className="flex items-center gap-3 mb-6 text-white">
<div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-amber-500">
<iconify-icon className="text-xl" icon="solar:user-linear"></iconify-icon>
</div>
<span className="text-lg font-normal tracking-tight">Kontakt bezpośredni</span>
</div>
<p className="text-neutral-400 text-sm leading-relaxed mb-8">
                            Preferujesz tradycyjną formę komunikacji? Zadzwoń lub napisz do nas bezpośrednio.
                        </p>
</div>
<div className="space-y-4">
<a className="group flex items-center justify-between w-full p-4 rounded border border-white/5 bg-black/20 hover:bg-amber-500/5 hover:border-amber-500/30 transition-all duration-300" href="mailto:kontakt@realchange.pl">
<div className="flex items-center gap-3 overflow-hidden">
<iconify-icon className="text-xl text-neutral-500 group-hover:text-amber-500 transition-colors" icon="solar:letter-linear"></iconify-icon>
<span className="text-base text-white font-normal truncate">kontakt@realchange.pl</span>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-amber-500 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
<a className="group flex items-center justify-between w-full p-4 rounded border border-white/5 bg-black/20 hover:bg-amber-500/5 hover:border-amber-500/30 transition-all duration-300" href="tel:+48502130950">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-neutral-500 group-hover:text-amber-500 transition-colors" icon="solar:phone-calling-linear"></iconify-icon>
<span className="text-base text-white font-normal">+48 502 130 950</span>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-amber-500 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>

<div className="relative group rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 overflow-hidden transition-all duration-300 hover:border-amber-500/30 flex flex-col justify-between h-full">

<div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-amber-500/10 blur-3xl group-hover:bg-amber-500/20 transition-all duration-500"></div>
<div>
<div className="flex items-center gap-3 mb-6 text-white z-10 relative">
<div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-amber-500">
<iconify-icon className="text-xl" icon="solar:calendar-linear"></iconify-icon>
</div>
<span className="text-lg font-normal tracking-tight">Wybierz termin</span>
</div>
<p className="text-neutral-400 text-sm leading-relaxed mb-8 z-10 relative">
                            Sprawdź dostępność w kalendarzu i zarezerwuj 30-minutowe spotkanie online, aby omówić Twoje wyzwania.
                        </p>
</div>

<a className="relative z-10 block w-full group/btn" href="#">
<div className="bg-amber-500/10 border border-amber-500/20 rounded h-16 flex items-center justify-center gap-2 transition-all duration-300 group-hover/btn:bg-amber-500 group-hover/btn:border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.05)] group-hover/btn:shadow-[0_0_25px_rgba(245,158,11,0.4)]">
<span className="text-amber-500 font-medium tracking-wide group-hover/btn:text-black transition-colors">Otwórz kalendarz</span>
<iconify-icon className="text-xl text-amber-500 group-hover/btn:text-black transition-colors" icon="solar:calendar-add-linear"></iconify-icon>
</div>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-950 border-white/5 border-t mt-auto pt-12 pb-12">
<div className="max-w-7xl mx-auto px-6 text-center flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] uppercase text-neutral-400 tracking-widest">© 2026 Real Change</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors text-xs text-neutral-400" href="#">Polityka Prywatności</a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"></a>
</div>
</div>
</footer>

    </>
  );
}
