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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-stone-100">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 border border-orange-200/50">
<svg className="lucide lucide-scissors w-5 h-5" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
</div>
<span className="text-xl font-semibold text-stone-900 tracking-tight font-serif-display" style={{}}>Hundtrim</span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-600">
<a className="hover:text-orange-600 transition-colors" href="#tjanster">Tjänster</a>
<a className="hover:text-orange-600 transition-colors" href="#om-oss">Om oss</a>
<a className="hover:text-orange-600 transition-colors" href="/#kontakt">Kontakt</a>
</div>

<a className="group flex items-center gap-2 hover:bg-orange-600 transition-all duration-300 shadow-stone-200 hover:shadow-orange-200 text-white bg-stone-900 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg" href="/#kontakt">
<span className="cursor-pointer text-sm font-semibold" onclick="window.location.href='/Kontakta oss';window.location.href='/#kontakt';window.location.href='/Kontakt';window.location.href='/#kontakt';window.location.href='/#kontakt';window.location.href='/#';window.location.href='/#kontakt';window.location.href='/kontakt';window.location.href='/#kontakt'" role="button">Boka tid</span>
<svg className="lucide lucide-paw-print w-4 h-4 text-orange-200 group-hover:text-white transition-colors" data-lucide="paw-print" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="4" r="2"></circle><circle cx="18" cy="8" r="2"></circle><circle cx="20" cy="16" r="2"></circle><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"></path></svg>
</a>
</div>
</nav>

<section className="min-h-screen overflow-hidden flex flex-col pt-32 pb-20 relative justify-center">

<div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-orange-50/80 to-transparent -z-20"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[100px] -z-20 translate-y-1/3"></div>

<div className="absolute top-20 inset-x-0 flex justify-center -z-10 pointer-events-none select-none overflow-hidden opacity-50">
<h1 className="font-instrument text-[15vw] leading-none text-stone-100 tracking-tighter whitespace-nowrap">
                HUNDVÅRD
            </h1>
</div>
<div className="max-w-7xl mx-auto px-4 w-full relative z-10">

<div className="grid lg:grid-cols-12 gap-x-8 gap-y-8 items-center">

<div className="hidden lg:flex lg:col-span-3 flex-col items-start gap-6">
<div className="bg-white/90 backdrop-blur-xl border border-white/50 p-2 rounded-full shadow-xl shadow-stone-200/50 flex flex-col gap-2 w-full max-w-[200px]">
<button className="flex items-center gap-3 px-5 py-3 bg-orange-50 text-orange-900 rounded-full shadow-sm border border-orange-100 transition-all w-full">
<svg className="lucide lucide-scissors w-4 h-4" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
<span className="font-semibold text-sm">Klippning</span>
</button>
<button className="flex items-center gap-3 px-5 py-3 text-stone-500 hover:bg-stone-50 rounded-full transition-all w-full">
<svg className="lucide lucide-brush w-4 h-4" data-lucide="brush" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 10 3 3"></path><path d="M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z"></path><path d="M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031"></path></svg>
<span className="font-medium text-sm">Trimning</span>
</button>
</div>
<p className="text-stone-500 text-sm leading-relaxed max-w-[200px] pl-2">
                        Vi anpassar behandlingen efter varje individ. Ingen stress, bara trygghet.
                    </p>
</div>

<div className="col-span-12 lg:col-span-6 flex flex-col items-center relative">

<div className="relative w-full max-w-md aspect-[4/5] mx-auto rounded-[3rem] overflow-hidden shadow-2xl shadow-stone-200 bg-stone-200 border-4 border-white">
<img alt="Happy Golden Retriever" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black/40 to-transparent"></div>

<div className="absolute top-6 right-6 bg-white/95 backdrop-blur px-4 py-2 rounded-full shadow-lg flex items-center gap-2 z-20">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-stone-200 border border-white overflow-hidden"><img className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=1"/></div>
<div className="w-6 h-6 rounded-full bg-stone-200 border border-white overflow-hidden"><img className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=5"/></div>
</div>
<span className="text-xs font-bold text-stone-900">4.9/5 Betyg</span>
</div>
</div>

<div className="absolute bottom-[-3rem] md:bottom-[-4rem] z-30 text-center w-full pointer-events-none">
<div className="bg-white/30 backdrop-blur-sm p-4 rounded-3xl inline-block shadow-sm">
<p className="text-2xl md:text-3xl italic text-orange-600 font-instrument mb-0 leading-none drop-shadow-sm">Södertälje</p>
<h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl tracking-tighter text-stone-900 leading-[0.9] drop-shadow-xl text-shadow-white">
                                HUNDTRIM
                            </h1>
</div>
</div>
</div>

<div className="hidden lg:flex lg:col-span-3 flex-col gap-6 items-end pt-12">

<div className="group bg-white p-3 rounded-3xl shadow-lg shadow-stone-200/40 border border-stone-100 w-44 hover:-translate-x-2 transition-transform duration-300 cursor-pointer">
<div className="aspect-square rounded-2xl bg-stone-100 overflow-hidden mb-3 relative">
<img alt="Bathing" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="px-1">
<span className="text-[10px] text-orange-600 font-bold uppercase tracking-wider">Tjänst</span>
<p className="leading-tight text-lg font-medium text-stone-900 font-serif-display" style={{}}>Hundvård</p>
</div>
</div>

<div className="group bg-white p-3 rounded-3xl shadow-lg shadow-stone-200/40 border border-stone-100 w-44 hover:-translate-x-2 transition-transform duration-300 cursor-pointer translate-x-4">
<div className="aspect-square rounded-2xl bg-stone-100 overflow-hidden mb-3 relative">
<img alt="Grooming" className="group-hover:scale-110 transition-transform duration-500 opacity-90 w-full h-full object-cover" src="https://images.unsplash.com/photo-1611173622933-91942d394b04?w=800&amp;q=80"/>
</div>
<div className="px-1">
<span className="text-[10px] text-orange-600 font-bold uppercase tracking-wider">Tjänst</span>
<p className="leading-tight text-lg font-medium text-stone-900 font-serif-display" style={{}}>Hund klippning</p>
</div>
</div>
</div>
</div>
<p className="text-stone-500 text-center text-lg mt-20 max-w-md mx-auto relative z-20 font-medium">
                Professionell pälsvård med hjärta och engagemang sedan 1994.
            </p>
</div>
</section>

<section className="bg-white pt-24 pb-24 relative" id="tjanster">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div className="max-w-2xl">
<span className="text-orange-600 font-semibold tracking-wider text-sm uppercase mb-2 block">Våra Behandlingar</span>
<h2 className="font-serif-display text-4xl md:text-5xl text-stone-900 leading-tight">
                        Vi tar hand om din hund<br/>från nos till svans
                    </h2>
</div>
<a className="hidden md:flex items-center gap-2 text-stone-900 font-medium border-b border-stone-900 pb-1 hover:text-orange-600 hover:border-orange-600 transition-colors mt-6 md:mt-0" href="#kontakt">
                    Se fullständig prislista <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid gap-y-6 gap-x-6 md:grid-cols-2 lg:grid-cols-3">

<div className="group hover:bg-orange-50 transition-colors duration-300 hover:shadow-md bg-[#FDFCF8] border-stone-100 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative shadow-sm">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-stone-900 group-hover:scale-110 transition-transform duration-300 ring-1 ring-stone-100">
<svg className="lucide lucide-scissors w-7 h-7" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
</div>
<h3 className="font-serif-display text-2xl text-stone-900 mb-3">Klippning</h3>
<p className="text-stone-500 text-sm leading-relaxed mb-6">Rasstandard eller vardagsfrisyr. Vi formar pälsen för både stil och komfort.</p>
</div>

<div className="group hover:bg-orange-50 transition-colors duration-300 hover:shadow-md bg-[#FDFCF8] border-stone-100 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative shadow-sm">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-stone-900 group-hover:scale-110 transition-transform duration-300 ring-1 ring-stone-100">
<svg className="lucide lucide-brush w-7 h-7" data-lucide="brush" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 10 3 3"></path><path d="M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z"></path><path d="M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031"></path></svg>
</div>
<h3 className="font-serif-display text-2xl text-stone-900 mb-3">Trimning</h3>
<p className="text-stone-500 text-sm leading-relaxed mb-6">För strävhåriga raser. Handplockning som bevarar pälsens kvalitet och färg.</p>
</div>

<div className="group hover:bg-orange-50 transition-colors duration-300 hover:shadow-md bg-[#FDFCF8] border-stone-100 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative shadow-sm">
<div className="flex group-hover:scale-110 transition-transform duration-300 text-stone-900 bg-white w-14 h-14 ring-stone-100 ring-1 rounded-2xl mb-6 shadow-sm items-center justify-center">
<svg className="lucide lucide-droplets w-7 h-7" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</div>
<h3 className="font-serif-display text-2xl text-stone-900 mb-3">Bad &amp; Fön</h3>
<p className="text-stone-500 text-sm leading-relaxed mb-6">Djuprengörande tvätt och skonsam torkning som gör pälsen mjuk och fri från tovor.</p>
</div>

</div>
</div>
</section>

<section className="py-24 bg-[#FDFCF8]" id="om-oss">
<div className="max-w-6xl mx-auto px-6">
<div className="bg-stone-900 rounded-[3rem] p-8 md:p-12 lg:p-16 relative overflow-hidden text-white shadow-2xl">

<div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20"></div>
<div className="absolute bottom-0 left-0 w-80 h-80 bg-stone-700 rounded-full blur-[80px] opacity-30 -ml-20 -mb-20"></div>
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 relative z-10 items-center">
<div className="space-y-8 order-2 lg:order-1">
<div>
<span className="text-orange-300 font-semibold tracking-wider text-sm uppercase">Om oss</span>
<h2 className="font-serif-display text-4xl md:text-5xl mt-4 leading-tight">
                                Mer än bara en <br/> <span className="text-orange-300 italic font-instrument text-5xl md:text-6xl">frisering</span>
</h2>
</div>
<div className="space-y-4 text-stone-300 text-lg font-light leading-relaxed">
<p>
                                På Tälje Hundtrim möts passion och professionalism. Vi har drivit verksamheten sedan 1994 med en enkel filosofi: varje hund förtjänar att känna sig trygg och bli behandlad med respekt.
                            </p>
<p>
                                Vi har särskild kompetens inom hantering av osäkra hundar och arbetar alltid med mjuka metoder. Ett besök hos oss ska vara en positiv upplevelse.
                            </p>
</div>
<div className="pt-4 flex items-center gap-12 border-t border-stone-800">
<div>
<p className="text-4xl font-serif-display text-white">30+</p>
<p className="text-stone-400 text-sm mt-1">Års erfarenhet</p>
</div>
<div>
<p className="text-4xl font-serif-display text-white">1000+</p>
<p className="text-stone-400 text-sm mt-1">Nöjda svansar</p>
</div>
</div>
</div>
<div className="relative order-1 lg:order-2">
<div className="aspect-[4/5] rounded-3xl overflow-hidden bg-stone-800 border border-stone-700/50 relative shadow-2xl">
<img alt="Dog grooming professional" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
<div className="flex items-center gap-4">
<div className="bg-orange-500/80 p-2 rounded-full text-white">
<svg className="lucide lucide-award w-5 h-5" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<div>
<p className="font-medium text-white text-sm">Certifierad personal</p>
<p className="text-stone-300 text-xs">Utbildade inom hundpsykologi</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24" id="kontakt">
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12">
<div className="space-y-8">
<span className="text-orange-600 font-semibold tracking-wider text-sm uppercase">Hitta hit</span>
<h2 className="font-serif-display text-4xl md:text-5xl text-stone-900 leading-tight">
                        Besök vår salong i <br/> <span className="italic font-instrument text-stone-500">Södertälje</span>
</h2>
<div className="space-y-4 pt-4">
<div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-stone-50 transition-colors border border-transparent hover:border-stone-100">
<div className="bg-white p-3 rounded-xl border border-stone-200 text-orange-600 shadow-sm">
<svg className="lucide lucide-map-pin w-6 h-6" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div>
<p className="font-semibold text-stone-900 text-lg">Adress</p>
<p className="text-stone-500 leading-relaxed">Dalgatan 11, 151 33 Södertälje</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-stone-50 transition-colors border border-transparent hover:border-stone-100">
<div className="bg-white p-3 rounded-xl border border-stone-200 text-orange-600 shadow-sm">
<svg className="lucide lucide-phone w-6 h-6" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div>
<p className="font-semibold text-stone-900 text-lg">Bokning</p>
<p className="text-stone-500 mb-2">Ring oss för att boka tid</p>
<a className="text-xl font-serif-display text-stone-900 hover:text-orange-600 underline decoration-orange-300 decoration-2 underline-offset-4 transition-colors" href="tel:0855037747">08-550 377 47</a>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-stone-50 transition-colors border border-transparent hover:border-stone-100">
<div className="bg-white p-3 rounded-xl border border-stone-200 text-orange-600 shadow-sm">
<svg className="lucide lucide-clock w-6 h-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="">
<p className="font-semibold text-stone-900 text-lg">Öppettider</p>
<p className="text-stone-500" style={{}}>Mån - Fre: 10:00 - 20:00</p>
<p className="text-stone-500">Helger: Enligt överenskommelse</p>
</div>
</div>
</div>
</div>
<div className="h-[400px] lg:h-auto bg-stone-100 rounded-[2.5rem] overflow-hidden border border-stone-200 relative shadow-inner">

<iframe allowfullscreen="" className="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2047.534884639947!2d17.62544431605333!3d59.19554498161556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f70a59755209d%3A0xc48756804a504764!2zRGFsZ2F0YW4gMTEsIDE1MSAzMyBTw7ZkZXJ0w6RsamU!5e0!3m2!1ssv!2sse!4v1647856712345!5m2!1ssv!2sse" style={{border: '0', filter: 'contrast(1.1) opacity(0.8)'}} width="100%"></iframe>

<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-stone-100 flex items-center gap-3">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-sm font-medium text-stone-800">Öppet nu</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-100 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex flex-col items-center md:items-start gap-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
<svg className="lucide lucide-scissors w-4 h-4" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
</div>
<span className="text-xl font-serif-display font-semibold text-stone-900">Tälje Hundtrim</span>
</div>
<p className="text-stone-400 text-sm">Omsorgsfull hundvård sedan 1994.</p>
</div>
<div className="flex gap-8 text-sm font-medium text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#tjanster">Tjänster</a>
<a className="hover:text-stone-900 transition-colors" href="#om-oss">Om oss</a>
<a className="hover:text-stone-900 transition-colors" href="#kontakt">Kontakt</a>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 hover:bg-orange-50 hover:text-orange-600 transition-all border border-stone-100" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 hover:bg-orange-50 hover:text-orange-600 transition-all border border-stone-100" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
</div>
</div>
<div className="text-center mt-12 text-stone-300 text-xs border-t border-stone-50 pt-8">
            © 2024 Tälje Hundtrim.
        </div>
</footer>


    </>
  );
}
