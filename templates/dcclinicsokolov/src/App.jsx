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
      

<nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-slate-100 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<a className="flex items-center gap-2" href="#">
<div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
<span className="text-white font-semibold tracking-tighter text-lg">DC</span>
</div>
<span className="font-semibold text-slate-900 tracking-tight hidden sm:block">DC Clinic</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-slate-600 hover:text-emerald-600 transition-colors" href="#sluzby">Služby</a>
<a className="text-sm text-slate-600 hover:text-emerald-600 transition-colors" href="#tym">Náš tým</a>
<a className="text-sm text-slate-600 hover:text-emerald-600 transition-colors" href="#galerie">Galerie</a>
<a className="text-sm text-slate-600 hover:text-emerald-600 transition-colors" href="#kontakt">Kontakt</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:flex items-center gap-2 text-sm text-slate-600 hover:text-emerald-600 transition-colors" href="tel:+420352123456">
<svg aria-hidden="true" data-icon="lucide:phone" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        +420 352 123 456
                    </a>
<a className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors" href="#objednat">
                        Objednat se
                    </a>
</div>
</div>
</div>
</nav>

<section className="pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
<svg aria-hidden="true" data-icon="lucide:heart" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Péče s láskou od roku 2010
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-tight mb-6">
                        Profesionální péče pro vaše
                        <span className="text-emerald-600">mazlíčky</span>
</h1>
<p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                        Veterinární klinika DC Clinic Sokolov nabízí komplexní péči o malá zvířata s důrazem na individuální přístup a moderní vybavení.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-xl transition-colors" href="#objednat">
<svg aria-hidden="true" data-icon="lucide:calendar" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
                            Objednat návštěvu
                        </a>
<a className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-medium px-6 py-3 rounded-xl border border-slate-200 transition-colors" href="#sluzby">
                            Naše služby
                            <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="flex items-center gap-8 mt-10 pt-10 border-t border-slate-100">
<div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">15+</div>
<div className="text-sm text-slate-500">let zkušeností</div>
</div>
<div className="">
<div className="text-2xl font-semibold text-slate-900 tracking-tight">5000+</div>
<div className="text-sm text-slate-500">spokojených klientů</div>
</div>
<div className="">
</div>
</div>
</div>
<div className="order-1 lg:order-2 relative">
<div className="relative">
<img alt="Šťastný pes" className="rounded-3xl shadow-2xl shadow-emerald-900/10 w-full object-cover aspect-[4/5]" src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&amp;h=700&amp;fit=crop"/>
<div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
<svg aria-hidden="true" data-icon="lucide:shield-check" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Certifikovaná klinika</div>
<div className="text-xs text-slate-500">Komora veterinárních lékařů ČR</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-white" id="sluzby">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Naše služby</h2>
<p className="text-slate-600">Poskytujeme komplexní veterinární péči s využitím nejmodernějších technologií a postupů.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="group p-6 bg-slate-50 hover:bg-emerald-50 rounded-2xl transition-colors cursor-pointer">
<div className="w-12 h-12 bg-white group-hover:bg-emerald-100 rounded-xl flex items-center justify-center mb-4 transition-colors">
<svg aria-hidden="true" data-icon="lucide:syringe" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 2l4 4m-5 1l3-3m-1 5L8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5m-6 6l4 4m-8 4l-3 3M14 4l6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Vakcinace</h3>
<p className="text-sm text-slate-600">Kompletní očkovací programy pro psy i kočky podle nejnovějších doporučení.</p>
</div>
<div className="group p-6 bg-slate-50 hover:bg-emerald-50 rounded-2xl transition-colors cursor-pointer">
<div className="w-12 h-12 bg-white group-hover:bg-emerald-100 rounded-xl flex items-center justify-center mb-4 transition-colors">
<svg aria-hidden="true" data-icon="lucide:scan" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Diagnostika</h3>
<p className="text-sm text-slate-600">RTG, ultrazvuk a laboratorní vyšetření pro přesnou diagnózu.</p>
</div>
<div className="group p-6 bg-slate-50 hover:bg-emerald-50 rounded-2xl transition-colors cursor-pointer">
<div className="w-12 h-12 bg-white group-hover:bg-emerald-100 rounded-xl flex items-center justify-center mb-4 transition-colors">
<svg aria-hidden="true" data-icon="lucide:scissors" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12L12 12m8-8L8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8L20 20"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Chirurgie</h3>
<p className="text-sm text-slate-600">Měkkotkáňová i ortopedická chirurgie v moderním operačním sále.</p>
</div>
<div className="group p-6 bg-slate-50 hover:bg-emerald-50 rounded-2xl transition-colors cursor-pointer">
<div className="w-12 h-12 bg-white group-hover:bg-emerald-100 rounded-xl flex items-center justify-center mb-4 transition-colors">
<svg aria-hidden="true" data-icon="lucide:smile" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Stomatologie</h3>
<p className="text-sm text-slate-600">Dentální hygiena, ošetření a extrakce zubů pod narkózou.</p>
</div>
<div className="group p-6 bg-slate-50 hover:bg-emerald-50 rounded-2xl transition-colors cursor-pointer">
<div className="w-12 h-12 bg-white group-hover:bg-emerald-100 rounded-xl flex items-center justify-center mb-4 transition-colors">
<svg aria-hidden="true" data-icon="lucide:bone" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5a.5.5 0 0 1-.5-.5a2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Ortopedie</h3>
<p className="text-sm text-slate-600">Léčba zlomenin a onemocnění pohybového aparátu.</p>
</div>
<div className="group p-6 bg-slate-50 hover:bg-emerald-50 rounded-2xl transition-colors cursor-pointer">
<div className="w-12 h-12 bg-white group-hover:bg-emerald-100 rounded-xl flex items-center justify-center mb-4 transition-colors">
<svg aria-hidden="true" data-icon="lucide:cpu" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Čipování</h3>
<p className="text-sm text-slate-600">Identifikační mikročipy a registrace do národní databáze.</p>
</div>
<div className="group p-6 bg-slate-50 hover:bg-emerald-50 rounded-2xl transition-colors cursor-pointer">
<div className="w-12 h-12 bg-white group-hover:bg-emerald-100 rounded-xl flex items-center justify-center mb-4 transition-colors">
<svg aria-hidden="true" data-icon="lucide:file-text" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Pet pasy</h3>
<p className="text-sm text-slate-600">Vystavení cestovních dokladů pro zvířata do zahraničí.</p>
</div>
<div className="group p-6 bg-slate-50 hover:bg-emerald-50 rounded-2xl transition-colors cursor-pointer">
<div className="w-12 h-12 bg-white group-hover:bg-emerald-100 rounded-xl flex items-center justify-center mb-4 transition-colors">
<svg aria-hidden="true" data-icon="lucide:heart-pulse" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1l2 4.5l2-7l1.5 3.5h5.27"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Preventivní péče</h3>
<p className="text-sm text-slate-600">Pravidelné prohlídky a poradenství pro zdraví vašeho mazlíčka.</p>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-slate-50" id="tym">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Náš tým</h2>
<p className="text-slate-600">Zkušení veterináři s láskou ke zvířatům a individuálním přístupem ke každému pacientovi.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
<img alt="MVDr. Dana Čermáková" className="w-full h-64 object-cover object-top" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&amp;h=400&amp;fit=crop&amp;crop=face"/>
<div className="p-6">
<h3 className="text-lg font-medium text-slate-900 mb-1">MVDr. Dana Čermáková</h3>
<p className="text-emerald-600 text-sm font-medium mb-3">Zakladatelka &amp; hlavní veterinářka</p>
<p className="text-sm text-slate-600 mb-4">Specializace na měkkotkáňovou chirurgii a interní medicínu. 18 let praxe.</p>
<div className="flex gap-2">
<span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md">Chirurgie</span>
<span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md">Interní med.</span>
</div>
</div>
</div>
<div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
<img alt="MVDr. Petr Novák" className="w-full h-64 object-cover object-top" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&amp;h=400&amp;fit=crop&amp;crop=face"/>
<div className="p-6">
<h3 className="text-lg font-medium text-slate-900 mb-1">MVDr. Petr Novák</h3>
<p className="text-emerald-600 text-sm font-medium mb-3">Veterinární chirurg</p>
<p className="text-sm text-slate-600 mb-4">Expert na ortopedickou chirurgii a traumatologii. 12 let zkušeností.</p>
<div className="flex gap-2">
<span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md">Ortopedie</span>
<span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md">RTG</span>
</div>
</div>
</div>
<div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
<img alt="MVDr. Martina Svobodová" className="w-full h-64 object-cover object-top" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&amp;h=400&amp;fit=crop&amp;crop=face"/>
<div className="p-6">
<h3 className="text-lg font-medium text-slate-900 mb-1">MVDr. Martina Svobodová</h3>
<p className="text-emerald-600 text-sm font-medium mb-3">Veterinární stomatoložka</p>
<p className="text-sm text-slate-600 mb-4">Specialistka na dentální péči a ultrazvukovou diagnostiku. 8 let praxe.</p>
<div className="flex gap-2">
<span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md">Stomatologie</span>
<span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md">USG</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-white" id="galerie">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Naši pacienti</h2>
<p className="text-slate-600">Šťastní a zdraví mazlíčci jsou naší největší odměnou.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
<div className="aspect-square rounded-2xl overflow-hidden">
<img alt="Pes" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-2xl overflow-hidden">
<img alt="Kočka" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-2xl overflow-hidden">
<img alt="Pes" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-2xl overflow-hidden">
<img alt="Kočka" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-2xl overflow-hidden">
<img alt="Pes" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-2xl overflow-hidden">
<img alt="Kočka" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-2xl overflow-hidden">
<img alt="Pes" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1534361960057-19889db9621e?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-2xl overflow-hidden">
<img alt="Kočka" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&amp;h=400&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-600 to-emerald-700" id="objednat">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 gap-x-12 gap-y-12 items-center">
<div className="text-white">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Objednejte návštěvu online</h2>
<p className="text-emerald-100 mb-8 text-lg">Vyplňte jednoduchý formulář a my vás budeme kontaktovat k potvrzení termínu.</p>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
<svg aria-hidden="true" className="" data-icon="lucide:clock" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<div className="">
<div className="font-medium">Otevírací doba</div>
<div className="text-sm text-emerald-100">Po-Pá: 8:00-12:00, 13:00-17     
So: 9:00-12:00</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
<svg aria-hidden="true" data-icon="lucide:phone" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<div className="font-medium">Kontakt na objednání</div>
<div className="text-emerald-100 text-sm">+420 352 123 456</div>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
<form className="space-y-5">
<div className="grid sm:grid-cols-2 gap-4">
<div className="">
<label className="block text-sm font-medium text-slate-700 mb-2">Vaše jméno</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm" placeholder="Jan Novák" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium text-slate-700 mb-2">Telefon</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm" placeholder="+420 777 888 999" type="tel"/>
</div>
</div>
<div className="">
<label className="block text-sm font-medium text-slate-700 mb-2">E-mail</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm" placeholder="vas@email.cz" type="email"/>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div className="">
<label className="block text-sm font-medium text-slate-700 mb-2">Druh zvířete</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm appearance-none bg-white">
<option>Pes</option>
<option>Kočka</option>
<option>Jiné</option>
</select>
<svg aria-hidden="true" data-icon="lucide:chevron-down" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Preferovaný termín</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm" type="date"/>
</div>
</div>
<div className="">
<label className="block text-sm font-medium text-slate-700 mb-2">Důvod návštěvy</label>
<textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm resize-none" placeholder="Popište prosím důvod návštěvy..." rows="3"></textarea>
</div>
<button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2" type="submit">
<svg aria-hidden="true" data-icon="lucide:send" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Odeslat žádost
                        </button>
</form>
</div>
</div>
</div>
</section>

<section className="lg:py-24 bg-slate-50 pt-16 pb-16" id="kontakt">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12">
<div className="">
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Kde nás najdete</h2>
<p className="text-slate-600 mb-8">Naše klinika se nachází v centru Sokolova s dobrým dopravním spojením a parkováním přímo u budovy.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
<svg aria-hidden="true" data-icon="lucide:map-pin" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<div className="">
<h3 className="font-medium text-slate-900 mb-1">Adresa</h3>
<p className="text-slate-600">Lipová 2266, 356 01 Sokolov 1</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
<svg aria-hidden="true" data-icon="lucide:phone" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<h3 className="font-medium text-slate-900 mb-1">Telefon</h3>
<p className="text-slate-600">+420 777 888 999 </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
<svg aria-hidden="true" data-icon="lucide:mail" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<div className="">
<h3 className="font-medium text-slate-900 mb-1">E-mail</h3>
<p className="text-slate-600">info@dcclinic-sokolov.cz</p>
</div>
</div>
</div>
</div>
<div className="rounded-2xl overflow-hidden h-80 lg:h-auto">
<iframe allowfullscreen="" className="rounded-2xl" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20584.18889087614!2d12.626!3d50.181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a0f0e5f1a1c8d5%3A0x1!2sSokolov!5e0!3m2!1scs!2scz!4v1" style={{border: '0', minHeight: '320px'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-white py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
<span className="text-white font-semibold tracking-tighter text-lg">DC</span>
</div>
<span className="font-semibold tracking-tight">DC Clinic Sokolov</span>
</div>
<p className="text-slate-400 text-sm">Profesionální veterinární péče s láskou a individuálním přístupem.</p>
</div>
<div className="">
<h4 className="font-medium mb-4">Služby</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Vakcinace</a></li>
<li><a className="hover:text-white transition-colors" href="#">Chirurgie</a></li>
<li><a className="hover:text-white transition-colors" href="#">Diagnostika</a></li>
<li><a className="hover:text-white transition-colors" href="#">Stomatologie</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4">Rychlé odkazy</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#tym">Náš tým</a></li>
<li><a className="hover:text-white transition-colors" href="#kontakt">Kontakt</a></li>
<li><a className="hover:text-white transition-colors" href="#objednat">Objednání</a></li>
<li><a className="hover:text-white transition-colors" href="#">Ceník</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4">Sledujte nás</h4>
<div className="flex gap-3">
<a className="w-10 h-10 bg-slate-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:facebook" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="w-10 h-10 bg-slate-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:instagram" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
</div>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-sm text-slate-400">© 2024 DC Clinic Sokolov. Všechna práva vyhrazena.</p>
<div className="flex gap-6 text-sm text-slate-400">
<a className="hover:text-white transition-colors" href="#">Ochrana soukromí</a>
<a className="hover:text-white transition-colors" href="#">Obchodní podmínky</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
