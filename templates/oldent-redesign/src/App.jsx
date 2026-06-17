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
},
colors: {
brand: {
50: '#eff6ff',
100: '#dbeafe',
200: '#bfdbfe',
300: '#93c5fd',
400: '#60a5fa',
500: '#3b82f6',
600: '#2563eb',
700: '#1d4ed8',
900: '#1e3a8a',
}
},
letterSpacing: {
tight: '-0.025em',
tighter: '-0.04em',
}
}
}
}



        // Initialize Lucide Icons
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
      

<nav className="fixed w-full z-50 transition-all duration-300 glass-nav border-b border-slate-200/80">
<div className="max-w-7xl mx-auto px-6">
<div className="flex h-20 items-center justify-between">

<a className="flex items-center gap-2.5 group" href="#">

<img alt="OLDENT Logo" className="w-auto h-10 object-contain" onerror="this.onerror=null; this.src='https://placehold.co/180x50/white/3b82f6?text=OLDENT';" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6023d1d4-8a70-4687-9235-3dc86cb0bd9d_320w.png"/>
</a>

<div className="hidden md:flex items-center space-x-8">
<a className="text-base font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#sluzby">Služby</a>
<a className="text-base font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#o-klinice">O klinice</a>
<a className="text-base font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#kontakt">Kontakt</a>
</div>

<div className="hidden md:block">
<a className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10" href="#objednat">
<span className="">Objednat se</span>
<svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<button className="md:hidden text-slate-900">
<svg aria-hidden="true" className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</nav>

<section className="relative pt-36 pb-32 lg:pt-52 lg:pb-52 overflow-hidden wave-bg text-white">
<div className="opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 lg:h-32 bg-slate-50" style={{clipPath: 'ellipse(60% 100% at 50% 100%)'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-50 text-sm font-medium mb-10 backdrop-blur-sm">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
<span className="inline-flex h-2.5 w-2.5 bg-blue-400 rounded-full relative"></span>
</span>
                Přijímáme nové pacienty
            </div>
<h1 className="text-5xl sm:text-6xl lg:text-8xl font-medium tracking-tighter text-white leading-[1.05] mb-10 max-w-5xl mx-auto">
                Komplexní zubní péče <br className="hidden sm:block"/>
<span className="text-blue-200">v srdci Olomouce.</span>
</h1>
<p className="text-xl text-blue-100 leading-relaxed mb-12 max-w-2xl mx-auto font-light">
                Provádíme komplexní stomatologickou péči zaměřenou především na prevenci, estetickou a záchovnou stomatologii, protetiku a implantologii.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="min-w-[170px] inline-flex justify-center items-center gap-2 px-8 py-4 bg-white text-brand-600 text-base font-semibold rounded-xl hover:bg-blue-50 transition-all" href="#sluzby">
                    Naše služby
                    <svg aria-hidden="true" className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
<a className="min-w-[170px] inline-flex justify-center items-center gap-2 hover:bg-brand-700 transition-all text-base font-semibold text-white bg-brand-700/50 border-brand-400/30 border rounded-xl pt-4 pr-8 pb-4 pl-8 backdrop-blur-sm" href="#kontakt">
                    Kontaktovat
                </a>
</div>
</div>
</section>

<section className="py-24 lg:py-36 bg-slate-50" id="sluzby">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 md:mb-28 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="max-w-3xl">
<h2 className="text-4xl font-semibold tracking-tighter text-slate-900 mb-6">Specializace kliniky</h2>
<p className="text-slate-500 text-xl font-light leading-relaxed">Kombinujeme moderní technologie s letitou praxí pro nejlepší možné výsledky.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="service-card group relative p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-brand-500/10 hover:border-brand-200 transition-all duration-300 flex flex-col justify-between h-full min-h-[280px]">
<div className="w-14 h-14 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-600 flex items-center justify-center transition-colors mb-6">
<svg aria-hidden="true" className="lucide lucide-sparkles w-7 h-7 stroke-[1.5]" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-slate-900 group-hover:text-brand-600 transition-colors tracking-tight">Dentální hygiena</h3>
<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out">
<p className="text-base text-slate-500 overflow-hidden pt-0 group-hover:pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                Profesionální čištění a prevence.
                            </p>
</div>
</div>
</div>

<div className="service-card group relative p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-brand-500/10 hover:border-brand-200 transition-all duration-300 flex flex-col justify-between h-full min-h-[280px]">
<div className="w-14 h-14 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-600 flex items-center justify-center transition-colors mb-6">
<svg aria-hidden="true" className="lucide lucide-microscope w-7 h-7 stroke-[1.5]" data-lucide="microscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 18h8"></path><path d="M3 22h18"></path><path d="M14 22a7 7 0 1 0 0-14h-1"></path><path d="M9 14h2"></path><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path></svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-slate-900 group-hover:text-brand-600 transition-colors tracking-tight">Mikroskopická endodoncie</h3>
<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out">
<p className="text-base text-slate-500 overflow-hidden pt-0 group-hover:pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                Ošetření kořenových kanálků.
                            </p>
</div>
</div>
</div>

<div className="service-card group relative p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-brand-500/10 hover:border-brand-200 transition-all duration-300 flex flex-col justify-between h-full min-h-[280px]">
<div className="w-14 h-14 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-600 flex items-center justify-center transition-colors mb-6">
<svg aria-hidden="true" className="lucide lucide-anchor w-7 h-7 stroke-[1.5]" data-lucide="anchor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v16"></path><path d="m19 13 2-1a9 9 0 0 1-18 0l2 1"></path><path d="M9 11h6"></path><circle cx="12" cy="4" r="2"></circle></svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-slate-900 group-hover:text-brand-600 transition-colors tracking-tight">Zubní implantáty</h3>
<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out">
<p className="text-base text-slate-500 overflow-hidden pt-0 group-hover:pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                Kvalitní náhrada ztracených zubů.
                            </p>
</div>
</div>
</div>

<div className="service-card group relative p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-brand-500/10 hover:border-brand-200 transition-all duration-300 flex flex-col justify-between h-full min-h-[280px]">
<div className="w-14 h-14 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-600 flex items-center justify-center transition-colors mb-6">
<svg aria-hidden="true" className="lucide lucide-smile w-7 h-7 stroke-[1.5]" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-slate-900 group-hover:text-brand-600 transition-colors tracking-tight">Estetická stomatologie</h3>
<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out">
<p className="text-base text-slate-500 overflow-hidden pt-0 group-hover:pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                Design dokonalého úsměvu.
                            </p>
</div>
</div>
</div>

<div className="service-card group relative p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-brand-500/10 hover:border-brand-200 transition-all duration-300 flex flex-col justify-between h-full min-h-[280px]">
<div className="w-14 h-14 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-600 flex items-center justify-center transition-colors mb-6">
<svg aria-hidden="true" className="lucide lucide-settings w-7 h-7 stroke-[1.5]" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-slate-900 group-hover:text-brand-600 transition-colors tracking-tight">Komplexní protetické ošetření</h3>
<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out">
<p className="text-base text-slate-500 overflow-hidden pt-0 group-hover:pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                Náhrada ztracených tkání.
                            </p>
</div>
</div>
</div>

<div className="service-card group relative p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-brand-500/10 hover:border-brand-200 transition-all duration-300 flex flex-col justify-between h-full min-h-[280px]">
<div className="w-14 h-14 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-600 flex items-center justify-center transition-colors mb-6">
<svg aria-hidden="true" className="lucide lucide-gem w-7 h-7 stroke-[1.5]" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-slate-900 group-hover:text-brand-600 transition-colors tracking-tight">Keramické fasety a korunky</h3>
<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out">
<p className="text-base text-slate-500 overflow-hidden pt-0 group-hover:pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                Pro dokonalou estetiku.
                            </p>
</div>
</div>
</div>

<div className="service-card group relative p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-brand-500/10 hover:border-brand-200 transition-all duration-300 flex flex-col justify-between h-full min-h-[280px]">
<div className="w-14 h-14 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-600 flex items-center justify-center transition-colors mb-6">
<svg aria-hidden="true" className="lucide lucide-activity w-7 h-7 stroke-[1.5]" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-slate-900 group-hover:text-brand-600 transition-colors tracking-tight">Dentální chirurgie</h3>
<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out">
<p className="text-base text-slate-500 overflow-hidden pt-0 group-hover:pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                Bezbolestné zákroky.
                            </p>
</div>
</div>
</div>

<div className="service-card group relative p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-brand-500/10 hover:border-brand-200 transition-all duration-300 flex flex-col justify-between h-full min-h-[280px]">
<div className="w-14 h-14 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-600 flex items-center justify-center transition-colors mb-6">
<svg aria-hidden="true" className="lucide lucide-sun w-7 h-7 stroke-[1.5]" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-slate-900 group-hover:text-brand-600 transition-colors tracking-tight">Bělení zubů</h3>
<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out">
<p className="text-base text-slate-500 overflow-hidden pt-0 group-hover:pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                Zářivý úsměv šetrně.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-white border-slate-200/60 pt-24 pb-24" id="o-klinice">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 items-center">

<div className="">
<div className="inline-flex items-center gap-2 text-brand-600 font-medium text-sm mb-6 bg-brand-50 px-3 py-1 rounded-full w-fit">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-4 h-4 stroke-[1.5]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="">OLDENT Standard</span>
</div>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tighter text-slate-900 mb-8 leading-[1.1]">
                        Zdraví vašeho úsměvu je naší prioritou.
                    </h2>
<p className="text-slate-600 text-lg mb-10 leading-relaxed font-light">
                        V příjemném prostředí naší kliniky v Olomouci se postaráme o to, aby vaše návštěva byla co nejpříjemnější. Používáme nejmodernější technologie pro diagnostiku a léčbu, což nám umožňuje pracovat přesně, šetrně a bezbolestně.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-5 p-5 rounded-2xl hover:bg-slate-50 transition-colors cursor-default border border-transparent hover:border-slate-100">
<div className="w-12 h-12 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
<svg aria-hidden="true" className="lucide lucide-clock w-6 h-6 stroke-[1.5]" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="">
<h4 className="font-medium text-slate-900 text-lg tracking-tight">Na čas bez čekání</h4>
<p className="text-base text-slate-500 mt-2 font-light">Respektujeme váš čas. Náš objednávkový systém zajišťuje minimální prostoje.</p>
</div>
</div>
<div className="flex items-start gap-5 p-5 rounded-2xl hover:bg-slate-50 transition-colors cursor-default border border-transparent hover:border-slate-100">
<div className="w-12 h-12 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
<svg aria-hidden="true" className="lucide lucide-shield w-6 h-6 stroke-[1.5]" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<div className="">
<h4 className="font-medium text-slate-900 text-lg tracking-tight">5 let záruka</h4>
<p className="text-base text-slate-500 mt-2 font-light">Za kvalitou naší práce si stojíme. Na protetické práce a implantáty poskytujeme prodlouženou záruku.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-tr from-brand-100 to-slate-100 rounded-[2.5rem] -z-10 transform rotate-2"></div>
<img alt="Moderní ordinace" className="shadow-slate-200 aspect-[4/3] w-full object-cover border-white/50 border rounded-3xl shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0da65f7c-0189-447b-91dd-de411881694d_1600w.png"/>

<div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-[240px] hidden md:block">
<p className="text-5xl font-bold text-slate-900 tracking-tighter">15+</p>
<p className="text-sm text-slate-500 uppercase tracking-wide font-medium mt-2">Let zkušeností v oboru</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden" id="kontakt">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-5 gap-16">

<div className="lg:col-span-2 space-y-10">
<div className="">
<h2 className="text-4xl font-semibold tracking-tighter text-slate-900 mb-6">Kde nás najdete</h2>
<p className="text-slate-600 text-lg font-light">Jsme tu pro vás každý všední den v Olomouci.</p>
</div>
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center bg-white text-slate-900 shrink-0 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-map-pin w-6 h-6 stroke-[1.5]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div className="">
<h4 className="text-base font-medium text-slate-900 uppercase tracking-wide">Adresa kliniky</h4>
<p className="text-lg text-slate-600 mt-2 font-light">Štítného 1, 779 00 Olomouc 9</p>
</div>
</div>
<div className="flex gap-5 gap-x-5 gap-y-5 items-start">
<div className="w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center bg-white text-slate-900 shrink-0 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-phone w-6 h-6 stroke-[1.5]" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div className="">
<h4 className="text-base font-medium text-slate-900 uppercase tracking-wide">Telefon</h4>
<a className="hover:underline block text-lg font-medium text-brand-600 mt-2" href="/tel:+420585222198">+420 585 222 198</a>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center bg-white text-slate-900 shrink-0 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-mail w-6 h-6 stroke-[1.5]" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div className="">
<h4 className="text-base font-medium text-slate-900 uppercase tracking-wide">Email</h4>
<a className="text-lg text-brand-600 hover:underline mt-2 block font-medium" href="mailto:info@oldent.cz">info@oldent.cz</a>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3">
<div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-200 p-8 sm:p-12" id="objednat">
<h3 className="text-2xl font-semibold text-slate-900 mb-8 tracking-tight">Nezávazná objednávka</h3>
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Jméno</label>
<input className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all placeholder:text-slate-400" placeholder="Jan Novák" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Telefon</label>
<input className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all placeholder:text-slate-400" placeholder="+420 777 000 000" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Typ ošetření</label>
<select className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-slate-600 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2364748b%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[right_1.5rem_center] bg-no-repeat pr-12">
<option>Vstupní vyšetření</option>
<option>Dentální hygiena</option>
<option>Bolestivý případ</option>
<option>Konzultace - Implantáty/Estetika</option>
<option>Jiné</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Poznámka</label>
<textarea className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all placeholder:text-slate-400" placeholder="Popište stručně váš problém..." rows="3"></textarea>
</div>
<button className="w-full py-4 bg-brand-600 text-white font-medium text-base rounded-xl hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/30 flex justify-center items-center gap-2 mt-4" type="submit">
                                Odeslat žádost
                                <svg aria-hidden="true" className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
<p className="text-center text-xs text-slate-400 mt-6">
                                Kliknutím souhlasíte se zpracováním osobních údajů.
                            </p>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">

<img alt="OLDENT Logo" className="opacity-90 w-auto h-8 object-contain" onerror="this.onerror=null; this.src='https://placehold.co/150x40/white/3b82f6?text=OLDENT';" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bc74fc92-b762-461e-9c6c-155178727e10_320w.png"/>
</a>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                        Moderní stomatologické centrum zaměřené na kvalitu, estetiku a dlouhodobou funkčnost.
                    </p>
</div>
<div className="">
<h5 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-6">Menu</h5>
<ul className="space-y-4 text-sm text-slate-600">
<li className=""><a className="hover:text-brand-600 transition-colors" href="#">Úvod</a></li>
<li className=""><a className="hover:text-brand-600 transition-colors" href="#sluzby">Služby</a></li>
<li className=""><a className="hover:text-brand-600 transition-colors" href="#o-klinice">O klinice</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#kontakt">Kontakt</a></li>
</ul>
</div>
<div className="">
<h5 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-6">Služby</h5>
<ul className="space-y-4 text-sm text-slate-600">
<li><a className="hover:text-brand-600 transition-colors" href="#">Implantologie</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Estetika</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Hygiena</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Chirurgie</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-6">Otevírací doba</h5>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex justify-between w-full border-b border-slate-100 pb-2">
<span className="font-medium text-slate-700">Po - Čt</span>
<span>7:30 - 17:30</span>
</li>
<li className="flex justify-between w-full border-b border-slate-100 pb-2">
<span className="font-medium text-slate-700">Pátek</span>
<span>7:30 - 16:00</span>
</li>
<li className="flex justify-between w-full text-slate-400">
<span>So - Ne</span>
<span>Zavřeno</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-sm text-slate-400">© 2026 OLDENT s.r.o. Všechna práva vyhrazena.</p>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#"><svg aria-hidden="true" className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#"><svg aria-hidden="true" className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
