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
      

<header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">

<div className="flex items-center gap-2">
<div className="text-blue-900 font-bold text-2xl tracking-tight flex items-center">
<div className="w-8 h-8 bg-gradient-to-tr from-pink-500 to-blue-800 rounded-md mr-2 flex items-center justify-center text-white">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
</div>
<span className="flex flex-col leading-none text-base">
<span className="">Asociația</span>
<span className="text-lg">Mavromati</span>
</span>
</div>
</div>

<nav className="hidden md:flex bg-slate-100 rounded-full px-2 py-1 gap-1 text-sm font-medium text-slate-600">
<a className="px-4 py-1.5 rounded-full hover:bg-white hover:shadow-sm transition-all" href="#">Despre noi</a>
<a className="px-4 py-1.5 rounded-full hover:bg-white hover:shadow-sm transition-all" href="#">Proiecte</a>
<a className="hover:bg-white hover:shadow-sm transition-all flex items-center gap-1 rounded-full pt-1.5 pr-4 pb-1.5 pl-4" href="#" style={{}}>Cum donez<svg className="lucide lucide-chevron-down w-3 h-3" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></a>
<a className="px-4 py-1.5 rounded-full hover:bg-white hover:shadow-sm transition-all" href="#">Contact</a>
</nav>

<a className="hover:bg-pink-700 flex items-center gap-2 transition-colors shadow-pink-200 font-medium text-white bg-pink-600 rounded-lg pt-2 pr-5 pb-2 pl-5 shadow-lg" href="#" style={{}}>Donează<svg className="lucide lucide-heart w-4 h-4 fill-current" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg></a>
</div>
</header>

<section className="relative bg-[#003380] overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] max-w-7xl mr-auto ml-auto">

<div className="flex flex-col lg:py-24 z-10 pt-16 pr-6 pb-16 pl-6 justify-center">
<h3 className="uppercase text-lg font-bold text-pink-500 tracking-wide text-left mb-4">Persoană Fizică</h3>
<h1 className="lg:text-5xl leading-tight text-4xl font-semibold text-white tracking-tight mb-6" style={{}}><span className="text-pink-500" style={{}}>Un om contribuie</span><br/> O comunitate construiește</h1>
<p className="text-blue-100 text-lg lg:text-xl font-normal max-w-xl leading-relaxed">
                    Redirecționează 3,5% din impozitul pe venit sau donează online și susține pacienții din Spitalul Mavromati.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mt-8">
<button className="inline-flex items-center justify-center h-12 px-6 font-medium text-white transition-all duration-200 bg-pink-600 rounded-full hover:bg-pink-700 hover:shadow-lg hover:shadow-pink-500/20 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-slate-900">
<svg className="mr-2 w-5 h-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M12 13v6"></path><path d="M12 13l-3 3"></path><path d="M12 13l3 3"></path></svg>
                        Redirecționează 3.5%
                    </button>
<button className="inline-flex items-center justify-center h-12 px-6 font-medium text-pink-100 transition-all duration-200 bg-white/5 border border-pink-200/20 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-slate-900">
<svg className="mr-2 w-5 h-5 text-pink-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                        Donează direct
                    </button>
</div>
</div>

<div className="relative h-full min-h-[300px] lg:min-h-full">
<img alt="Newborn baby" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay" src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="bg-gradient-to-r from-[#003380] to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
</section>

<div className="flex text-pink-300 opacity-50 max-w-7xl mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 items-center justify-between">
<svg className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
<div className="flex gap-1">
<div className="w-1 h-1 bg-pink-400 rounded-full"></div>
<div className="w-1 h-1 bg-pink-400 rounded-full"></div>
<div className="w-1 h-1 bg-pink-400 rounded-full"></div>
</div>
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>

<section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
<div className="max-w-4xl mx-auto text-center mb-16">
<blockquote className="font-playfair text-3xl md:text-4xl leading-tight text-blue-900 mb-8 italic">
                „Ne câștigăm traiul din ceea ce primim, dar ne construim viața din ceea ce dăruim.”
            </blockquote>
<p className="text-slate-500 text-lg leading-relaxed font-medium max-w-2xl mx-auto">
                Fiecare donație ne arată că nu suntem singuri în misiunea noastră. Nu ești doar un donator; ești acea parte din comunitate care înțelege că sănătatea nu are nevoie de compromisuri.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<button className="group flex flex-col items-start text-left bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:border-pink-200/50 transition-all duration-300 transform hover:-translate-y-1">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-4 group-hover:bg-pink-50 group-hover:text-pink-600 transition-colors duration-300 text-slate-600">
<svg className="lucide lucide-file-heart w-6 h-6" data-lucide="file-heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v7"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M3.62 18.8A2.25 2.25 0 1 1 7 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a1 1 0 0 1-1.507 0z"></path></svg>
</div>
<h3 className="text-lg font-semibold text-blue-900 mb-2 tracking-tight group-hover:text-pink-600 transition-colors">Redirecționează 3.5%</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-4">
                    Completează gratuit formularul 230. Banii din impozitul tău rămân în comunitate.
                </p>
<div className="mt-auto flex items-center text-pink-600 font-medium text-xs uppercase tracking-wide">
                    Completează <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</button>

<button className="group flex flex-col items-start text-left bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:border-pink-200/50 transition-all duration-300 transform hover:-translate-y-1">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-4 group-hover:bg-pink-50 group-hover:text-pink-600 transition-colors duration-300 text-slate-600">
<svg className="lucide lucide-credit-card w-6 h-6" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<h3 className="text-lg font-semibold text-blue-900 mb-2 tracking-tight group-hover:text-pink-600 transition-colors">Donează online</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-4">
                    Susține rapid și sigur cauzele noastre prin plată cu cardul. Orice sumă contează.
                </p>
<div className="mt-auto flex items-center text-pink-600 font-medium text-xs uppercase tracking-wide">
                    Donează acum <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</button>

<button className="group flex flex-col items-start text-left bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:border-pink-200/50 transition-all duration-300 transform hover:-translate-y-1">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-4 group-hover:bg-pink-50 group-hover:text-pink-600 transition-colors duration-300 text-slate-600">
<svg className="lucide lucide-landmark w-6 h-6" data-lucide="landmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 18v-7"></path><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"></path><path d="M14 18v-7"></path><path d="M18 18v-7"></path><path d="M3 22h18"></path><path d="M6 18v-7"></path></svg>
</div>
<h3 className="text-lg font-semibold text-blue-900 mb-2 tracking-tight group-hover:text-pink-600 transition-colors">Transfer bancar</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-4">
                    Transferă direct în conturile asociației pentru donații sau sponsorizări.
                </p>
<div className="mt-auto flex items-center text-pink-600 font-medium text-xs uppercase tracking-wide">
                    Vezi conturile <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</button>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pr-6 pb-20 pl-6">
<div className="text-center mb-10">
<h2 className="text-3xl md:text-4xl font-semibold text-blue-900 tracking-tight">Redirecționează 3.5% din impozitul pe venit</h2>
</div>
<div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100 grid lg:grid-cols-2">

<div className="relative min-h-[400px] lg:min-h-full">
<img alt="Signing papers" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="flex flex-col lg:p-12 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end">
<p className="text-white font-bold mb-8 leading-tight text-3xl tracking-tight drop-shadow-sm md:text-3xl">
                        Din impozitul pe care statul îl reține oricum din venitul tău, ai posibilitatea să decizi ca 3,5% să meargă către o cauză în care crezi.
                    </p>
<div className="flex flex-wrap gap-3">
<div className="flex items-center gap-2 text-emerald-300 font-semibold text-sm bg-slate-900/80 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md shadow-lg">
<svg className="lucide lucide-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Nu plătești nimic în plus</span>
</div>
<div className="flex items-center gap-2 text-emerald-300 font-semibold text-sm bg-slate-900/80 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md shadow-lg">
<svg className="lucide lucide-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Nu donezi din buzunarul tău</span>
</div>
</div>
</div>
</div>

<div className="p-8 lg:p-12 flex flex-col justify-center bg-slate-50">
<h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                    Completează formularul 230
                </h3>
<p className="text-pink-600 font-medium mb-8">în mai puțin de 60 secunde</p>

<div className="space-y-6 mb-10">

<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm border border-blue-200">1</div>
<div>
<p className="text-slate-800 font-semibold text-sm">Completezi online</p>
<p className="text-slate-500 text-sm">Introduci datele tale în formularul digital (durează 1 min).</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm border border-blue-200">2</div>
<div>
<p className="text-slate-800 font-semibold text-sm">Semnezi documentul</p>
<p className="text-slate-500 text-sm">Semnezi electronic direct pe ecran sau olograf.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-100 text-pink-700 font-bold flex items-center justify-center text-sm border border-pink-200">3</div>
<div>
<p className="text-slate-800 font-semibold text-sm">Noi depunem la ANAF</p>
<p className="text-slate-500 text-sm">Ne ocupăm noi de tot procesul birocratic.</p>
</div>
</div>
</div>
<button className="w-full sm:w-auto hover:bg-blue-700 shadow-blue-200/50 transition-all hover:scale-[1.02] inline-flex justify-center gap-2 font-medium text-white bg-pink-600 rounded-xl py-4 px-8 shadow-lg items-center text-lg">
                    Redirecționează acum
                    <svg className="lucide lucide-arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</section>

<div className="flex justify-between items-center text-pink-300 px-4 py-4 max-w-7xl mx-auto opacity-50">
<svg className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
<div className="flex gap-1">
<div className="w-1 h-1 bg-pink-400 rounded-full"></div>
<div className="w-1 h-1 bg-pink-400 rounded-full"></div>
<div className="w-1 h-1 bg-pink-400 rounded-full"></div>
</div>
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>

<section className="max-w-6xl mx-auto px-6 py-16">
<div className="text-center mb-10">
<h2 className="text-3xl md:text-4xl font-semibold text-blue-900 tracking-tight mb-2">Donează online - Durează cât să îți faci o cafea.</h2>
<p className="text-3xl md:text-4xl font-semibold text-pink-500 tracking-tight">Și costă tot atât.</p>
</div>

<div className="max-w-3xl mx-auto">
<div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl h-80 flex items-center justify-center mb-6">
<span className="text-slate-400 font-medium text-lg">Inserează chenarul de donații online aici</span>
</div>
<div className="flex items-center justify-center gap-2 text-slate-500 text-sm font-medium">
<svg className="lucide lucide-lock w-4 h-4 text-emerald-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                Datele tale sunt în siguranță. Plata se face printr-un procesator de plăți.
            </div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 pb-20 pt-8">
<div className="text-center mb-12">
<h2 className="text-slate-800 text-2xl font-semibold tracking-tight max-w-2xl mx-auto">
                Sau poți folosi transferul bancar direct
            </h2>
</div>
<div className="flex justify-center mt-8">

<div className="bg-gradient-to-br from-pink-600 to-purple-900 rounded-2xl p-8 text-white relative overflow-hidden h-64 flex flex-col justify-between shadow-2xl w-full max-w-md transform hover:scale-[1.02] transition-transform duration-300">

<div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
<div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-500 opacity-20 rounded-full -ml-10 -mb-10 blur-2xl"></div>
<div className="relative z-10">
<p className="font-semibold text-lg opacity-90">Asociația Mavromati</p>
<p className="text-xs opacity-70 mb-6 uppercase tracking-wider">Spitalul Mavromati</p>
<div className="space-y-1">
<p className="font-mono text-sm opacity-60">IBAN</p>
<div className="flex items-center gap-3">
<p className="font-mono text-xl tracking-wider select-all">RO42 BTRL 0080 1234 5678 90XX</p>
<button className="text-white/80 hover:text-white hover:bg-white/20 p-1.5 rounded-lg transition-colors backdrop-blur-sm" title="Copiază IBAN">
<svg className="lucide lucide-copy" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
</button>
</div>
</div>
</div>
<div className="relative z-10 flex justify-between items-end">
<div className="">
<p className="text-xs opacity-60">BANCA</p>
<p className="font-medium">BANCA TRANSILVANIA</p>
</div>

<svg className="w-16 h-auto opacity-90" fill="currentColor" viewbox="0 0 50 16">
<path d="M19.7 0.2L12.9 15.6H8.6L5.3 3.6C5.1 2.8 4.9 2.5 4.3 2.2C3.2 1.7 1.5 1.1 0 0.8L0.1 0.2H6.9C7.8 0.2 8.6 0.8 8.8 1.8L10.5 10.8L16.4 0.2H19.7ZM37.1 10.6C37.2 6.6 31.6 6.4 31.7 4.6C31.7 4 32.3 3.4 33.7 3.3C34.4 3.2 36.3 3.2 37.2 3.6L37.9 0.4C36.9 0.1 35.7 0 34.1 0C29.9 0 26.9 2.2 26.9 5.4C26.8 7.8 29 9.1 30.6 9.9C32.3 10.7 32.8 11.2 32.8 11.9C32.8 13 31.5 13.5 30.3 13.5C28.2 13.5 27 13.2 26.1 12.8L25.3 16C26.3 16.4 28.1 16.7 30 16.8C34.4 16.8 37.1 14.6 37.1 10.6ZM48 15.6H51.8L48.4 0.2H44.8C44 0.2 43.3 0.7 43 1.4L36.7 15.6H41.1L42 13.1H47.3L48 15.6ZM43.2 9.8L45.3 4L46.5 9.8H43.2ZM23.8 0.2L20.6 15.6H16.6L19.8 0.2H23.8Z"></path>
</svg>
</div>
</div>
</div>
</section>

<div className="bg-slate-50 border-t border-slate-100 py-6">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<h3 className="text-blue-900 font-semibold text-lg tracking-tight">Investiția ta e parte de schimbare.</h3>
<p className="text-slate-500 font-medium text-sm hidden md:block">Împreună putem construi un sistem medical mai performant.</p>
<a className="bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-2 rounded-lg text-sm shadow-md transition-colors" href="#">
                Donează
            </a>
</div>
</div>

<footer className="bg-white pt-16 pb-8 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div className="space-y-4">
<div className="flex items-center gap-2">
<div className="text-blue-900 font-bold text-xl tracking-tight flex items-center">
<div className="w-8 h-8 bg-gradient-to-tr from-pink-500 to-blue-800 rounded-md mr-2 flex items-center justify-center text-white">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
</div>
<span className="flex flex-col leading-none">
<span>Asociația</span>
<span className="text-base">Mavromati</span>
</span>
</div>
</div>
<p className="text-slate-500 text-sm font-medium">
                        Noi credem în puterea comunității de a schimba lucrurile în bine.
                    </p>
<p className="text-slate-400 text-xs">
                        CIF: 12345678<br/>
                        Reg. Asoc. 12/2020
                    </p>
<div className="flex gap-4 pt-2">
<a className="text-blue-600 hover:text-blue-700" href="#">
<svg className="lucide lucide-facebook w-6 h-6" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="text-pink-600 hover:text-pink-700" href="#">
<svg className="lucide lucide-instagram w-6 h-6" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</div>

<div>
<h4 className="text-blue-900 font-semibold mb-4 text-sm uppercase tracking-wide">Navigare Rapidă</h4>
<ul className="space-y-3 text-sm font-medium text-slate-500">
<li><a className="hover:text-pink-600 transition-colors" href="#">Acasă</a></li>
<li><a className="hover:text-pink-600 transition-colors" href="#">Despre noi</a></li>
<li><a className="hover:text-pink-600 transition-colors" href="#">Proiecte</a></li>
<li><a className="hover:text-pink-600 transition-colors" href="#">Rapoarte anuale</a></li>
</ul>
</div>

<div>
<h4 className="text-blue-900 font-semibold mb-4 text-sm uppercase tracking-wide">Legal &amp; Info</h4>
<ul className="space-y-3 text-sm font-medium text-slate-500">
<li><a className="hover:text-pink-600 transition-colors" href="#">Termeni și condiții</a></li>
<li><a className="hover:text-pink-600 transition-colors" href="#">Politica de confidențialitate</a></li>
<li><a className="hover:text-pink-600 transition-colors" href="#">Cookie Policy</a></li>
<li><a className="hover:text-pink-600 transition-colors" href="#">ANPC</a></li>
</ul>
</div>

<div>
<h4 className="text-blue-900 font-semibold mb-4 text-sm uppercase tracking-wide">Informații contact</h4>
<ul className="space-y-3 text-sm font-medium text-slate-500">
<li className="flex items-center gap-2">
<svg className="lucide lucide-map-pin w-4 h-4 text-slate-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            Str. Marchian nr. 11, Botoșani
                        </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-phone w-4 h-4 text-slate-400" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                            +40 740 123 456
                        </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-mail w-4 h-4 text-slate-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                            contact@mavromati.ro
                        </li>
</ul>
<a className="mt-6 inline-block bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium px-6 py-2 rounded-lg transition-colors" href="#">
                        Contactează-ne
                    </a>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 font-medium">
<p>© 2024 Asociația Mavromati. Toate drepturile rezervate.</p>
<div className="flex gap-4 mt-2 md:mt-0">
<a className="hover:text-slate-600" href="#">Privacy</a>
<a className="hover:text-slate-600" href="#">Terms</a>
<a className="hover:text-slate-600" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

<div className="bg-[#003380] py-2 text-center">
<p className="text-[10px] text-blue-300/60 uppercase tracking-widest font-semibold">Dezvoltat pentru comunitate</p>
</div>


    </>
  );
}
