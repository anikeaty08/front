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
teal: {
50: '#f0fdfa',
100: '#ccfbf1',
500: '#14b8a6',
600: '#0d9488',
900: '#134e4a',
950: '#042f2e',
},
slate: {
850: '#1e293b',
900: '#0f172a',
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-teal-200/20 blur-[100px]"></div>
<div className="absolute top-[20%] -left-[10%] w-[30%] h-[40%] rounded-full bg-blue-200/20 blur-[100px]"></div>
</div>

<div className="max-w-[1600px] mx-auto bg-white/80 shadow-2xl min-h-screen relative z-10">

<nav className="flex md:px-12 fixed z-50 pr-6 pl-6 top-6 right-0 left-0 items-center justify-between max-w-[1600px] mx-auto">

<div className="flex items-center gap-2 mix-blend-multiply cursor-pointer">
<div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center">
<svg className="iconify text-2xl" data-icon="lucide:eye" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-lg font-semibold tracking-tight leading-none text-slate-900">ACL Vision</span>
<span className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">Okuliści</span>
</div>
</div>

<div className="hidden lg:flex text-sm font-medium text-slate-600 bg-white/80 border border-slate-200 shadow-sm rounded-full px-1.5 py-1.5 backdrop-blur-md items-center gap-1">
<a className="px-5 py-2.5 rounded-full hover:bg-slate-100 hover:text-slate-900 transition-all" href="#o-nas">O Nas</a>
<a className="px-5 py-2.5 rounded-full hover:bg-slate-100 hover:text-slate-900 transition-all" href="#uslugi">Usługi</a>
<a className="px-5 py-2.5 rounded-full hover:bg-slate-100 hover:text-slate-900 transition-all" href="#soczewki">Soczewki</a>
<a className="px-5 py-2.5 rounded-full hover:bg-slate-100 hover:text-slate-900 transition-all" href="#mikrochirurgia">Mikrochirurgia</a>
<a className="px-5 py-2.5 rounded-full hover:bg-slate-100 hover:text-slate-900 transition-all" href="#artykuly">Artykuły</a>
<a className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-teal-600 transition-colors shadow-lg shadow-slate-900/20" href="#kontakt">Kontakt</a>
</div>

<button className="lg:hidden w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-900 shadow-sm">
<svg className="iconify text-xl" data-icon="lucide:menu" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

<div className="lg:col-span-7 flex flex-col items-start">
<div className="mb-8 inline-flex items-center gap-2 bg-teal-50 border border-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest">
<span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
                        Ambulatorium i Szpital Jednodniowy
                    </div>
<h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] font-semibold tracking-tighter text-slate-900 mb-8">
                        Okulistyka na <br/>
<span className="text-teal-600">najwyższym poziomie.</span>
</h1>
<p className="text-slate-500 text-lg md:text-xl font-light max-w-xl leading-relaxed mb-10">
                        ACL-Vision Okuliści to zespół lekarzy z pasją. Od 1991 roku dbamy o Twój wzrok, łącząc 30 lat doświadczenia z najnowocześniejszą technologią medyczną.
                    </p>
<div className="flex flex-wrap gap-4">
<a className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-slate-800 transition-all group shadow-xl shadow-slate-900/10" href="#wizyta">
                            Umów wizytę
                            <svg className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="flex items-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-sm font-medium hover:bg-slate-50 transition-all" href="#uslugi">
                            Poznaj usługi
                        </a>
</div>
</div>

<div className="lg:col-span-5 relative h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden group">
<img alt="Badanie wzroku" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>

<div className="absolute bottom-8 left-8 right-8 glass-panel p-6 rounded-2xl text-slate-900 flex items-center gap-4 shadow-lg">
<div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 shrink-0">
<svg className="iconify" data-icon="lucide:activity" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h3 className="font-semibold text-sm">Chirurgia Zaćmy</h3>
<p className="text-xs text-slate-600 mt-1">Najnowocześniejsze soczewki wewnątrzgałkowe i precyzyjne zabiegi.</p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">

<div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group cursor-pointer">
<div className="text-teal-600 mb-4 group-hover:scale-110 transition-transform origin-left">
<svg className="iconify" data-icon="lucide:eye-off" height="28" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575a1 1 0 0 1 0 .696a10.747 10.747 0 0 1-1.444 2.49" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M14.084 14.158a2 2 0 0 1-2.181 1.918" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20a10.7 10.7 0 0 1-9.938-7.652a1 1 0 0 1 0-.696A10.7 10.7 0 0 1 5.38 6.38" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M9.88 9.88a2 2 0 0 1 2.213-2.02m-7.217-3L2 22" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Operacje Zaćmy</h3>
<p className="text-sm text-slate-500 mb-4">Zapisz się na operację zaćmy w trybie jednodniowym.</p>
<span className="text-xs font-medium text-teal-600 flex items-center gap-1 group-hover:gap-2 transition-all">Więcej <svg className="iconify" data-icon="lucide:arrow-right" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></span>
</div>

<div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group cursor-pointer">
<div className="text-teal-600 mb-4 group-hover:scale-110 transition-transform origin-left">
<svg className="iconify" data-icon="lucide:smile" height="28" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Okuloplastyka</h3>
<p className="text-sm text-slate-500 mb-4">Chirurgia powiek i okolicy oczu dla zdrowia i estetyki.</p>
<span className="text-xs font-medium text-teal-600 flex items-center gap-1 group-hover:gap-2 transition-all">Więcej <svg className="iconify" data-icon="lucide:arrow-right" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></span>
</div>

<div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group cursor-pointer">
<div className="text-teal-600 mb-4 group-hover:scale-110 transition-transform origin-left">
<svg className="iconify" data-icon="lucide:triangle" height="28" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 21a2 2 0 0 1-3.46 0l-8-14A2 2 0 0 1 4 4h16a2 2 0 0 1 1.73 3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Stożek Rogówki</h3>
<p className="text-sm text-slate-500 mb-4">Specjalistyczne soczewki i zabiegi Cross-Linking (CXL).</p>
<span className="text-xs font-medium text-teal-600 flex items-center gap-1 group-hover:gap-2 transition-all">Więcej <svg className="iconify" data-icon="lucide:arrow-right" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></span>
</div>

<div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group cursor-pointer">
<div className="text-teal-600 mb-4 group-hover:scale-110 transition-transform origin-left">
<svg className="iconify" data-icon="lucide:moon" height="28" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a6 6 0 0 0 9 9a9 9 0 1 1-9-9Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Ortokorekcja</h3>
<p className="text-sm text-slate-500 mb-4">Soczewki na noc, które korygują wzrok w dzień.</p>
<span className="text-xs font-medium text-teal-600 flex items-center gap-1 group-hover:gap-2 transition-all">Więcej <svg className="iconify" data-icon="lucide:arrow-right" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></span>
</div>
</div>
</header>

<section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-100" id="o-nas">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div>
<span className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-4 block">Dlaczego My</span>
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-8">
                        Lekarze z pasją, z najwyższą troską o <span className="text-slate-400">zdrowie pacjenta.</span>
</h2>
<div className="space-y-6 text-slate-600 leading-relaxed font-light">
<p>
                            ACL-Vision Okuliści to Specjalistyczne Ambulatorium Okulistyczne i Jednodniowy Szpital Okulistyczny. Działamy od 1991 roku, nieprzerwanie ciesząc się uznaniem i zaufaniem naszych pacjentów.
                        </p>
<p>
                            Zabiegi operacyjne przeprowadzane są u nas przez zespół doskonałych chirurgów z wieloletnim doświadczeniem zdobytym w najbardziej renomowanych warszawskich ośrodkach. Pracujemy na najlepszych materiałach.
                        </p>
</div>

<div className="grid grid-cols-2 gap-6 mt-12">
<div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
<span className="block text-3xl font-bold text-slate-900 mb-1">30+</span>
<span className="text-xs text-slate-500 uppercase tracking-wide">Lat doświadczenia</span>
</div>
<div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
<span className="block text-3xl font-bold text-slate-900 mb-1">1991</span>
<span className="text-xs text-slate-500 uppercase tracking-wide">Rok założenia</span>
</div>
</div>
</div>
<div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden bg-slate-100">
<img alt="Chirurgia oka" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl">
<h4 className="font-semibold text-slate-900 mb-2">Dzielimy się wiedzą</h4>
<p className="text-sm text-slate-600">Nasz zespół nie tylko leczy, ale aktywnie uczestniczy w rozwoju polskiej okulistyki.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 px-6 md:px-12" id="uslugi">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Kompleksowa opieka okulistyczna</h2>
<p className="text-slate-500 font-light">Szeroki zakres badań diagnostycznych, chirurgia oraz specjalistyczna kontaktologia.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
<div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
<svg className="iconify" data-icon="lucide:scan-eye" height="28" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2m-10 0H5a2 2 0 0 1-2-2v-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M16.123 16.123A1.5 1.5 0 0 1 12 18a1.5 1.5 0 0 1 0-3a1.5 1.5 0 0 1 0 3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M12 21c-3.5 0-6-3-9-6s5.5-6 9-6s9 3 9 6s-5.5 6-9 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Diagnostyka Chorób Oczu</h3>
<ul className="text-sm text-slate-500 space-y-2 mb-6 font-light">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-teal-500 rounded-full"></div>OCT Siatkówki i Nerwu Wzrokowego</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-teal-500 rounded-full"></div>Topografia Rogówki</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-teal-500 rounded-full"></div>Komputerowe Pole Widzenia</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-teal-500 rounded-full"></div>Biometria Optyczna i USG</li>
</ul>
</div>

<div className="bg-white p-8 rounded-3xl border border-teal-100 shadow-md ring-1 ring-teal-500/20 relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-teal-50 rounded-bl-[4rem] -mr-8 -mt-8"></div>
<div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-6 relative">
<svg className="iconify" data-icon="lucide:disc" height="28" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><circle cx="12" cy="12" fill="none" r="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Kontaktologia Specjalistyczna</h3>
<p className="text-sm text-slate-500 mb-4 font-light">Najszerszy zakres soczewek w Polsce.</p>
<ul className="text-sm text-slate-500 space-y-2 mb-6 font-light">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-teal-500 rounded-full"></div>Soczewki Twarde RGP</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-teal-500 rounded-full"></div>Soczewki Hybrydowe</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-teal-500 rounded-full"></div>Soczewki Skleralne</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-teal-500 rounded-full"></div>Ortokorekcja Nocna</li>
</ul>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
<div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
<svg className="iconify" data-icon="lucide:scalpel" height="28" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="m19 22l-2-2l-6-6l-8-8l-2 2l18 14Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Chirurgia Okulistyczna</h3>
<ul className="text-sm text-slate-500 space-y-2 mb-6 font-light">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-teal-500 rounded-full"></div>Usunięcie Zaćmy</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-teal-500 rounded-full"></div>Operacje Jaskry</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-teal-500 rounded-full"></div>Okuloplastyka Powiek</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-teal-500 rounded-full"></div>Iniekcje Doszklistkowe (AMD)</li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 text-white py-24 rounded-[3rem] mx-2 md:mx-4 mb-20 relative overflow-hidden" id="soczewki">

<div className="opacity-10 absolute inset-0 pointer-events-none" style={{backgroundImage: 'url(\'https://grainy-gradients.vercel.app/noise.svg\')'}}></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div>
<span className="text-teal-400 font-semibold text-xs uppercase tracking-widest mb-4 block">Specjalizacja</span>
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-tight">
                            Najnowocześniejsze <br/>
<span className="text-slate-500">soczewki kontaktowe.</span>
</h2>
</div>
<div className="bg-teal-900/30 border border-teal-500/20 px-6 py-4 rounded-xl backdrop-blur-sm">
<p className="text-teal-100 text-sm">
<span className="font-bold text-white block mb-1">Refundacja NFZ</span>
                            Mamy umowę na refundację twardych soczewek kontaktowych (stożek rogówki).
                        </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-8 bg-slate-800/50 border border-slate-700 rounded-3xl p-8 hover:bg-slate-800 transition-colors group">
<div className="flex justify-between items-start mb-12">
<h3 className="text-2xl font-semibold">Twarde Rogówkowe (RGP)</h3>
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center group-hover:bg-teal-600 transition-colors">
<svg className="iconify" data-icon="lucide:arrow-up-right" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10m0-10L7 17" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<p className="text-slate-400 max-w-lg mb-4">Soczewki pierwszego wyboru w stożku rogówki (Rose-K, McGuire), wysokich wadach refrakcji oraz bezsoczewkowości. Wykonane z materiału wysokogazoprzepuszczalnego.</p>
<div className="flex gap-2">
<span className="px-3 py-1 bg-slate-700 rounded-full text-xs text-slate-300">Stożek Rogówki</span>
<span className="px-3 py-1 bg-slate-700 rounded-full text-xs text-slate-300">Astygmatyzm</span>
</div>
</div>

<div className="md:col-span-4 bg-slate-800/50 border border-slate-700 rounded-3xl p-8 hover:bg-slate-800 transition-colors group flex flex-col justify-between">
<div className="w-12 h-12 bg-teal-500/20 text-teal-400 rounded-xl flex items-center justify-center mb-6">
<svg className="iconify" data-icon="lucide:layers" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12.83 2.18l5.86 3.29c.63.35.63 1.2 0 1.55L14.45 9.4c-.9.51-2 .51-2.9 0L7.31 7.02c-.63-.35-.63-1.2 0-1.55l5.86-3.29c.6-.33 1.28-.33 1.66 0M2 12l5.52 3.11c1.28.71 2.55 1.43 3.82 2.15c.66.37 1.66.37 2.32 0l8.34-4.7M2 17l9.55 5.37c.66.37 1.66.37 2.32 0L22 17" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h3 className="text-xl font-semibold mb-2">Soczewki Hybrydowe</h3>
<p className="text-slate-400 text-sm">Połączenie twardego centrum optycznego z miękkim kołnierzem dla maksymalnego komfortu.</p>
</div>
</div>

<div className="md:col-span-5 bg-slate-800/50 border border-slate-700 rounded-3xl p-8 hover:bg-slate-800 transition-colors group">
<h3 className="text-xl font-semibold mb-2">Skleralne i Semiskleralne</h3>
<p className="text-slate-400 text-sm mb-6">Duże soczewki pokrywające rogówkę i twardówkę. Rozwiązanie dla najbardziej nietypowych przypadków.</p>
<div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
<div className="h-full bg-teal-500 w-3/4"></div>
</div>
<span className="text-xs text-slate-500 mt-2 block">Wysoka specjalizacja</span>
</div>

<div className="md:col-span-7 bg-gradient-to-br from-teal-900/50 to-slate-800/50 border border-teal-500/30 rounded-3xl p-8 hover:bg-slate-800 transition-colors group relative overflow-hidden">
<div className="absolute right-0 top-0 w-32 h-32 bg-teal-500/20 blur-[50px] rounded-full"></div>
<h3 className="text-xl font-semibold mb-2 text-white">Ortokorekcja (Ortho-K)</h3>
<p className="text-teal-100 text-sm mb-4">Korekcja wzroku podczas snu. Zakładasz soczewki na noc, w dzień widzisz idealnie bez okularów.</p>
<a className="inline-flex items-center text-sm font-medium text-teal-400 hover:text-teal-300" href="#">Dowiedz się o hamowaniu krótkowzroczności <svg className="iconify ml-1" data-icon="lucide:arrow-right" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 md:px-12 max-w-7xl mx-auto" id="mikrochirurgia">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 relative">

<div className="aspect-square rounded-[2rem] bg-slate-100 relative overflow-hidden">
<img alt="Mikrochirurgia" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&amp;w=2532&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg border border-slate-200 shadow-lg">
<span className="text-xs font-bold text-slate-900 block">Cross-Linking (CXL)</span>
<span className="text-[10px] text-slate-500">Terapia stożka rogówki</span>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<span className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-4 block">Chirurgia</span>
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">Mikrochirurgia Oka</h2>
<p className="text-slate-500 font-light mb-8 text-lg">
                        Specjalizujemy się w zaawansowanych procedurach chirurgicznych, zapewniając bezpieczeństwo i komfort pacjenta.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 mt-1">1</div>
<div>
<h4 className="font-semibold text-slate-900">Chirurgia Zaćmy</h4>
<p className="text-sm text-slate-500 font-light">Usuwanie zaćmy metodą fakoemulsyfikacji z wszczepem soczewek premium.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 mt-1">2</div>
<div>
<h4 className="font-semibold text-slate-900">Cross-Linking (CXL)</h4>
<p className="text-sm text-slate-500 font-light">Zabieg zatrzymujący postęp stożka rogówki poprzez wzmocnienie wiązań kolagenowych.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 mt-1">3</div>
<div>
<h4 className="font-semibold text-slate-900">Okuloplastyka</h4>
<p className="text-sm text-slate-500 font-light">Korekcja ustawienia powiek, usuwanie zmian, zabiegi estetyczne.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 px-6 md:px-12 border-t border-slate-200" id="artykuly">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-semibold text-slate-900 mb-12 tracking-tight">Baza Wiedzy</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="h-48 bg-white rounded-2xl border border-slate-200 mb-4 p-6 flex flex-col justify-between hover:border-teal-300 transition-colors">
<span className="text-xs text-slate-400">07 Stycznia 2019</span>
<h3 className="text-lg font-medium text-slate-900 group-hover:text-teal-700 transition-colors">Ortokorekcja u dzieci i młodzieży, czy to działa?</h3>
</div>
</article>

<article className="group cursor-pointer">
<div className="h-48 bg-white rounded-2xl border border-slate-200 mb-4 p-6 flex flex-col justify-between hover:border-teal-300 transition-colors">
<span className="text-xs text-slate-400">07 Stycznia 2019</span>
<h3 className="text-lg font-medium text-slate-900 group-hover:text-teal-700 transition-colors">Ortokeratologia – przegląd i podsumowanie badań klinicznych.</h3>
</div>
</article>

<article className="group cursor-pointer">
<div className="h-48 bg-white rounded-2xl border border-slate-200 mb-4 p-6 flex flex-col justify-between hover:border-teal-300 transition-colors">
<span className="text-xs text-slate-400">07 Stycznia 2019</span>
<h3 className="text-lg font-medium text-slate-900 group-hover:text-teal-700 transition-colors">Cross-linking w terapii stożka rogówki – nowe możliwości.</h3>
</div>
</article>
</div>
</div>
</section>

<footer className="bg-slate-900 text-white mx-2 md:mx-4 mb-4 rounded-[3rem] px-8 md:px-16 py-16" id="kontakt">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">

<div>
<div className="flex items-center gap-2 mb-8">
<div className="w-8 h-8 bg-white text-slate-900 rounded-lg flex items-center justify-center">
<svg className="iconify" data-icon="lucide:eye" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3-7 10-7s10 7 10 7s-3 7-10 7s-10-7-10-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><circle cx="12" cy="12" fill="none" r="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
</div>
<span className="text-xl font-semibold">ACL Vision Okuliści</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-400 font-light">
<div>
<h4 className="text-white font-medium mb-2">Adres</h4>
<p>Al. Niepodległości 20<br/>02-653 Warszawa</p>
<p className="mt-4">Metro Wilanowska<br/>Tramwaje: 4, 14, 31, 35</p>
</div>
<div>
<h4 className="text-white font-medium mb-2">Kontakt</h4>
<p>Tel: +48 22 848 05 62</p>
<p>Email: acl@soczewki.biz</p>
</div>
<div>
<h4 className="text-white font-medium mb-2">Godziny Pracy</h4>
<p>Pon - Pią: 10:00 - 19:00</p>
<p>Sob - Nd: Zamknięte</p>
</div>
<div>
<h4 className="text-white font-medium mb-2">Dane Rejestrowe</h4>
<p>NZOZ 14-01169</p>
<p>NIP: 951-173-54-63</p>
</div>
</div>
</div>

<div className="flex flex-col justify-between">
<div className="w-full h-48 bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center text-slate-500 mb-8">
<span className="flex items-center gap-2"><svg className="iconify" data-icon="lucide:map-pin" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><circle cx="12" cy="10" fill="none" r="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg> Mapa Google</span>
</div>
<div>
<span className="text-xs uppercase tracking-widest text-slate-500 mb-4 block">Partnerzy</span>
<div className="flex gap-6 opacity-60 grayscale">
<span className="text-lg font-bold">AQUALENS</span>
<span className="text-lg font-bold">Soczewkujemy.pl</span>
</div>
</div>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<span>© 2024 ACL Vision Okuliści NZOZ. Wszelkie prawa zastrzeżone.</span>
<div className="flex gap-6">
<a className="hover:text-white transition" href="#">Polityka Prywatności</a>
<a className="hover:text-white transition" href="#">Regulamin</a>
</div>
</div>
</footer>
</div>

    </>
  );
}
