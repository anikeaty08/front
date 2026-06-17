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
      

<nav className="glass-nav fixed top-0 w-full z-50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex items-center gap-2 group cursor-pointer">
<div className="bg-rose-50 p-2 rounded-xl group-hover:bg-rose-100 transition-colors">
<svg aria-hidden="true" className="iconify text-rose-500 iconify--lucide" data-height="28" data-icon="lucide:heart-handshake" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight text-stone-900 group-hover:text-rose-600 transition-colors">
                        Empathie mit Herz
                    </span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium hover:text-rose-600 transition-colors" href="#mission">Mission</a>
<a className="text-sm font-medium hover:text-rose-600 transition-colors" href="#products">Produkte</a>
<a className="text-sm font-medium hover:text-rose-600 transition-colors" href="#about">Über Uns</a>
<a className="px-5 py-2.5 bg-stone-900 text-white text-sm font-medium rounded-full hover:bg-stone-800 transition-all shadow-lg shadow-stone-200" href="#contact">
                        Kontaktieren
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="p-2 text-stone-600 hover:bg-stone-100 rounded-lg">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="absolute inset-0 -z-10">
<div className="absolute top-0 right-0 w-1/2 h-full bg-orange-50/50 rounded-l-[100px] blur-3xl opacity-60"></div>
<div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-rose-50/60 rounded-r-full blur-3xl opacity-60"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 mb-6">
<svg aria-hidden="true" className="iconify text-rose-500 iconify--lucide" data-icon="lucide:heart" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs font-semibold text-rose-700 tracking-wide uppercase">Sozialer Impact</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-stone-900 leading-[1.1] mb-6">
                        Mit jedem Einkauf <br/>
<span className="text-rose-500">ein Herz zeigen.</span>
</h1>
<p className="text-lg text-stone-600 mb-8 leading-relaxed max-w-lg">
                        Wir schaffen Arbeitsplätze für Menschen mit Behinderungen. Wenn Sie bei uns Alltags- &amp; Hygieneprodukte bestellen, fördern Sie echte Inklusion.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-8 py-4 bg-rose-600 text-white font-medium rounded-full hover:bg-rose-700 transition-all shadow-xl shadow-rose-200 hover:shadow-rose-300" href="#products">
                            Produkte ansehen
                            <svg aria-hidden="true" className="iconify ml-2 iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="inline-flex justify-center items-center px-8 py-4 bg-white border border-stone-200 text-stone-700 font-medium rounded-full hover:bg-stone-50 hover:border-stone-300 transition-all" href="#contact">
                            Jetzt unterstützen
                        </a>
</div>
<div className="mt-12 flex items-center gap-4 text-sm text-stone-500">
<div className="flex -space-x-3">
<img alt="Supporter" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="Supporter" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="Supporter" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<p>Bereits <span className="font-semibold text-stone-900">500+</span> zufriedene Firmen &amp; Haushalte.</p>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative group">

<img alt="Team bei der Arbeit" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/edf94896-24fd-4a18-81cd-6d37972b9b6d_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-white/20 shadow-lg">
<p className="text-sm font-semibold text-stone-900">Logistik &amp; Versand</p>
<p className="text-xs text-stone-600">Sorgfältig verpackt von unserem inklusiven Team.</p>
</div>
</div>
</div>

<div className="absolute -bottom-6 -right-6 bg-rose-100 p-6 rounded-3xl -z-10 w-full h-full"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="mission">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-4">Warum Empathie mit Herz?</h2>
<p className="text-lg text-stone-600">Unsere Mission ist es, Wirtschaftlichkeit und Menschlichkeit zu vereinen. Jeder Handgriff bei uns hat eine Bedeutung.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 hover:shadow-lg transition-all group">
<div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-600 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:briefcase" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></g></svg>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-2 tracking-tight">Arbeitsplätze sichern</h3>
<p className="text-stone-600 text-sm leading-relaxed">
                        Wir schaffen faire Arbeitsbedingungen und sinnstiftende Tätigkeiten für Menschen mit Behinderungen.
                    </p>
</div>

<div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 hover:shadow-lg transition-all group">
<div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-2 tracking-tight">Echte Inklusion</h3>
<p className="text-stone-600 text-sm leading-relaxed">
                        Teilhabe am Arbeitsleben ist ein Grundrecht. Wir setzen es täglich in die Tat um.
                    </p>
</div>

<div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 hover:shadow-lg transition-all group">
<div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:leaf" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-2 tracking-tight">Nachhaltigkeit</h3>
<p className="text-stone-600 text-sm leading-relaxed">
                        Nicht nur sozial, sondern auch ökologisch. Effiziente Logistik und sinnvolle Produkte.
                    </p>
</div>

<div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 hover:shadow-lg transition-all group">
<div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:package-check" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 16l2 2l4-4"></path><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14M7.5 4.27l9 5.15"></path><path d="M3.29 7L12 12l8.71-5M12 22V12"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-2 tracking-tight">Qualität &amp; Service</h3>
<p className="text-stone-600 text-sm leading-relaxed">
                        Zuverlässige Lieferung, hochwertige Produkte und faire Preise für Firmen und Haushalte.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-rose-50/50" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="relative order-2 md:order-1">
<img alt="Inklusion bei der Arbeit" className="w-full h-[500px] object-cover rounded-3xl shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/948bf456-9af8-4882-a48d-41b8ac76cd90_1600w.png" style={{}}/>
<div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-lg max-w-xs hidden lg:block">
<div className="flex items-start gap-4">
<svg aria-hidden="true" className="iconify text-rose-500 mt-1 shrink-0 iconify--lucide" data-icon="lucide:quote" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-stone-600 text-sm italic">„Arbeit bedeutet für uns nicht nur Lohn, sondern Stolz, Zugehörigkeit und Struktur.“</p>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-6">Über Uns</h2>
<h3 className="text-xl text-rose-600 font-medium mb-4">Verantwortung übernehmen, Chancen schaffen.</h3>
<p className="text-stone-600 mb-6 leading-relaxed">
                        „Empathie mit Herz“ ist mehr als nur ein Lieferant für Hygiene- und Alltagsprodukte. Wir sind eine soziale Firma mit dem klaren Ziel, die Barrieren am ersten Arbeitsmarkt abzubauen.
                    </p>
<p className="text-stone-600 mb-8 leading-relaxed">
                        Jede Bestellung, die Sie tätigen, löst eine Kette positiver Ereignisse aus. Von der Sortierung im Lager bis zur sorgfältigen Verpackung – jeder Schritt wird von Menschen mit Behinderungen begleitet und ausgeführt. So erhalten unsere Mitarbeiter die Wertschätzung und Sicherheit, die sie verdienen.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-green-500 iconify--lucide" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-stone-700 font-medium">100% Soziale Verantwortung</span>
</li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-green-500 iconify--lucide" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-stone-700 font-medium">Förderung von Selbstständigkeit</span>
</li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-green-500 iconify--lucide" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-stone-700 font-medium">Transparente Lieferkette</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="products">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-4">Unser Sortiment</h2>
<p className="text-stone-600">Hochwertige Produkte für Firmen &amp; Haushalte. Sortierung, Verpackung und Versand erfolgen durch unser inklusives Team.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-rose-600 font-medium hover:text-rose-700" href="#contact">
                    Katalog anfordern <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-stone-50 rounded-3xl p-8 border border-stone-100 hover:border-rose-100 hover:shadow-xl hover:shadow-rose-100/50 transition-all duration-300">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-stone-700 shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:scroll" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 17V5a2 2 0 0 0-2-2H4"></path><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"></path></g></svg>
</div>
<span className="bg-rose-100 text-rose-700 text-[10px] px-2 py-1 rounded-full uppercase font-bold tracking-wider">Bestseller</span>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-4">Hygienepapiere</h3>
<ul className="space-y-2 mb-6 text-sm text-stone-600">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-rose-400 rounded-full"></span>Toilettenpapier (div. Lagen)</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-rose-400 rounded-full"></span>Küchenrollen &amp; Servietten</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-rose-400 rounded-full"></span>Einweghandtücher</li>
</ul>
<div className="pt-6 border-t border-stone-200">
<p className="text-xs text-stone-500 flex items-center gap-1">
<svg aria-hidden="true" className="iconify text-rose-500 iconify--lucide" data-icon="lucide:heart-handshake" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Verpackt von Menschen mit Behinderung
                        </p>
</div>
</div>

<div className="group bg-stone-50 rounded-3xl p-8 border border-stone-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-stone-700 shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:hand-metal" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4m0-.4V9a2 2 0 1 0-4 0v2m0-.5V5a2 2 0 1 0-4 0v9"></path><path d="m7 15l-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"></path></g></svg>
</div>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-4">Handschuhe &amp; Schutz</h3>
<ul className="space-y-2 mb-6 text-sm text-stone-600">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-400 rounded-full"></span>Einmalhandschuhe (Nitril/Latex)</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-400 rounded-full"></span>Medizinische Handschuhe</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-400 rounded-full"></span>Einwegbekleidung (Kittel)</li>
</ul>
<div className="pt-6 border-t border-stone-200">
<p className="text-xs text-stone-500 flex items-center gap-1">
<svg aria-hidden="true" className="iconify text-rose-500 iconify--lucide" data-icon="lucide:heart-handshake" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Sortiert von unserem Team
                        </p>
</div>
</div>

<div className="group bg-stone-50 rounded-3xl p-8 border border-stone-100 hover:border-teal-100 hover:shadow-xl hover:shadow-teal-100/50 transition-all duration-300">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-stone-700 shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-4">Reinigung &amp; Müll</h3>
<ul className="space-y-2 mb-6 text-sm text-stone-600">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-teal-400 rounded-full"></span>Müllbeutel &amp; Industriesäcke</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-teal-400 rounded-full"></span>Desinfektionsmittel</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-teal-400 rounded-full"></span>Allzweck- &amp; Glasreiniger</li>
</ul>
<div className="pt-6 border-t border-stone-200">
<p className="text-xs text-stone-500 flex items-center gap-1">
<svg aria-hidden="true" className="iconify text-rose-500 iconify--lucide" data-icon="lucide:heart-handshake" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Kommissioniert mit Sorgfalt
                        </p>
</div>
</div>

<div className="group bg-stone-50 rounded-3xl p-8 border border-stone-100 hover:border-orange-100 hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-stone-700 shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:home" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></g></svg>
</div>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-4">Haushalt &amp; Alltag</h3>
<ul className="space-y-2 mb-6 text-sm text-stone-600">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-orange-400 rounded-full"></span>Alu- &amp; Frischhaltefolien</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-orange-400 rounded-full"></span>Spülmittel &amp; Schwämme</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-orange-400 rounded-full"></span>Einweggeschirr &amp; Becher</li>
</ul>
<div className="pt-6 border-t border-stone-200">
<p className="text-xs text-stone-500 flex items-center gap-1">
<svg aria-hidden="true" className="iconify text-rose-500 iconify--lucide" data-icon="lucide:heart-handshake" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Konfektioniert für Sie
                        </p>
</div>
</div>

<div className="group bg-stone-50 rounded-3xl p-8 border border-stone-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-stone-700 shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:coffee" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2m4-2v2m2 4a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1M6 2v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-4">Büro &amp; Gastronomie</h3>
<ul className="space-y-2 mb-6 text-sm text-stone-600">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-indigo-400 rounded-full"></span>Kaffeebecher &amp; Rührstäbchen</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-indigo-400 rounded-full"></span>Zuckersticks &amp; Servietten</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-indigo-400 rounded-full"></span>To-Go Verpackungen</li>
</ul>
<div className="pt-6 border-t border-stone-200">
<p className="text-xs text-stone-500 flex items-center gap-1">
<svg aria-hidden="true" className="iconify text-rose-500 iconify--lucide" data-icon="lucide:heart-handshake" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Liebevoll zusammengestellt
                        </p>
</div>
</div>

<div className="group bg-stone-50 rounded-3xl p-8 border border-stone-100 hover:border-slate-100 hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-300">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-stone-700 shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:building-2" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></g></svg>
</div>
<span className="bg-stone-200 text-stone-700 text-[10px] px-2 py-1 rounded-full uppercase font-bold tracking-wider">B2B</span>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-4">Profi-Reinigung</h3>
<ul className="space-y-2 mb-6 text-sm text-stone-600">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-slate-400 rounded-full"></span>Gewerbliche Bodenreiniger</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-slate-400 rounded-full"></span>Sanitärreiniger Großgebinde</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-slate-400 rounded-full"></span>Küchenreiniger Gastro</li>
</ul>
<div className="pt-6 border-t border-stone-200">
<p className="text-xs text-stone-500 flex items-center gap-1">
<svg aria-hidden="true" className="iconify text-rose-500 iconify--lucide" data-icon="lucide:heart-handshake" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Logistik durch Inklusion
                        </p>
</div>
</div>
</div>
<div className="mt-12 text-center md:hidden">
<a className="inline-flex items-center gap-2 text-rose-600 font-medium hover:text-rose-700" href="#contact">
                    Gesamten Katalog anfordern <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-20 bg-stone-900 text-stone-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Bereit, Verantwortung zu zeigen?</h2>
<p className="text-lg text-stone-400 mb-10 max-w-2xl mx-auto">
                Wechseln Sie Ihren Lieferanten für Alltagsbedarf und bewirken Sie Großes. Pünktlich, fair und mit Herz.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="px-8 py-4 bg-rose-600 text-white font-medium rounded-full hover:bg-rose-500 transition-all flex items-center justify-center gap-2" href="mailto:hallo@empathie-mit-herz.de">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
                    Angebot anfordern
                </a>
<a className="px-8 py-4 bg-transparent border border-stone-700 text-white font-medium rounded-full hover:bg-stone-800 transition-all flex items-center justify-center gap-2" href="https://wa.me/4900000000">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-circle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    WhatsApp Kontakt
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="grid lg:grid-cols-2 gap-16">

<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-6">Kontaktieren Sie uns</h2>
<p className="text-stone-600 mb-12">
                        Haben Sie Fragen zu unseren Produkten oder möchten Sie als Firma bestellen? Wir freuen uns auf Ihre Nachricht.
                    </p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center text-rose-600 shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<div className="">
<h4 className="font-semibold text-stone-900">Anschrift</h4>
<p className="text-stone-600">Richard Wagner Str 12, Ingolstadt 85057</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center text-rose-600 shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<div className="">
<h4 className="font-semibold text-stone-900">E-Mail</h4>
<a className="hover:text-rose-600 transition-colors text-stone-600" href="/mailto:arbeitergemeinschaft@gmail.com">arbeitergemeinschaft@gmail.com</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<h4 className="font-semibold text-stone-900">Telefon &amp; WhatsApp</h4>
<p className="text-stone-600">+4924558113999</p>
<p className="text-xs text-stone-400 mt-1">Mo-Fr: 09:00 - 17:00 Uhr</p>
</div>
</div>
</div>
</div>

<div className="bg-stone-50 border-stone-100 border rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-sm">
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="col-span-2 sm:col-span-1">
<label className="block text-sm font-medium text-stone-700 mb-2" htmlFor="name">Name</label>
<input className="w-full px-4 py-3 rounded-xl bg-white border border-stone-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all placeholder:text-stone-400" id="name" placeholder="Max Mustermann" type="text"/>
</div>
<div className="col-span-2 sm:col-span-1">
<label className="block text-sm font-medium text-stone-700 mb-2" htmlFor="company">Firma (Optional)</label>
<input className="w-full px-4 py-3 rounded-xl bg-white border border-stone-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all placeholder:text-stone-400" id="company" placeholder="Firma GmbH" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="col-span-2 sm:col-span-1">
<label className="block text-sm font-medium text-stone-700 mb-2" htmlFor="email">E-Mail Adresse</label>
<input className="w-full px-4 py-3 rounded-xl bg-white border border-stone-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all placeholder:text-stone-400" id="email" placeholder="max@beispiel.de" type="email"/>
</div>
<div className="col-span-2 sm:col-span-1">
<label className="block text-sm font-medium text-stone-700 mb-2" htmlFor="phone">Telefonnummer</label>
<input className="w-full px-4 py-3 rounded-xl bg-white border border-stone-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all placeholder:text-stone-400" id="phone" placeholder="+49 151 12345678" type="tel"/>
</div>
</div>
<div className="">
<label className="block text-sm font-medium text-stone-700 mb-2" htmlFor="category">Interesse an</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-xl bg-white border border-stone-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all appearance-none text-stone-600" id="category">
<option>Allgemeine Anfrage</option>
<option>Bürobedarf &amp; Hygiene</option>
<option>Reinigungsprodukte</option>
<option>Großbestellung B2B</option>
</select>
<svg aria-hidden="true" className="iconify absolute right-4 top-3.5 text-stone-400 pointer-events-none iconify--lucide" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="">
<label className="block text-sm font-medium text-stone-700 mb-2" htmlFor="message">Nachricht</label>
<textarea className="w-full px-4 py-3 rounded-xl bg-white border border-stone-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all placeholder:text-stone-400" id="message" placeholder="Wie können wir helfen?" rows="4"></textarea>
</div>
<button className="hover:bg-stone-800 transition-all flex hover:shadow-xl font-medium text-white bg-stone-900 w-full rounded-xl pt-4 pb-4 shadow-lg gap-x-2 gap-y-2 items-center justify-center" onclick="const v=i=&gt;document.getElementById(i)?.value||'';location.href='mailto:arbeitergemeinschaft@gmail.com?subject=Anfrage%20via%20Website&amp;body='+encodeURIComponent('Name: '+v('name')+'\nFirma: '+v('company')+'\nEmail: '+v('email')+'\nTelefon: '+v('phone')+'\nInteresse: '+v('category')+'\n\nNachricht:\n'+v('message'))" type="button">
            Nachricht senden
            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:send" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-stone-900 border-stone-800 border-t pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="bg-rose-600 p-1.5 rounded-lg">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:heart-handshake" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-xl font-semibold tracking-tight text-white">Empathie mit Herz</span>
</div>
<p className="text-stone-400 max-w-sm mb-6 leading-relaxed">
                        Wir liefern mehr als Produkte. Wir liefern Perspektiven, Inklusion und Hoffnung. Danke, dass Sie Teil unserer Mission sind.
                    </p>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="text-stone-400 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="text-stone-400 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg></a>
</div>
</div>
<div className="">
<h4 className="text-white font-semibold mb-6">Produkte</h4>
<ul className="space-y-3 text-sm text-stone-400">
<li className=""><a className="hover:text-rose-400 transition-colors" href="#">Hygienepapier</a></li>
<li className=""><a className="hover:text-rose-400 transition-colors" href="#">Reinigungsmittel</a></li>
<li className=""><a className="hover:text-rose-400 transition-colors" href="#">Gastronomiebedarf</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-semibold mb-6">Rechtliches</h4>
<ul className="space-y-3 text-sm text-stone-400">
<li className=""><a className="hover:text-rose-400 transition-colors" href="#">Impressum</a></li>
<li className=""><a className="hover:text-rose-400 transition-colors" href="#">Datenschutz</a></li>
<li className=""><a className="hover:text-rose-400 transition-colors" href="#">AGB</a></li>
</ul>
</div>
</div>
<div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
<p className="">© 2023 Empathie mit Herz. Alle Rechte vorbehalten.</p>
<div className="flex items-center gap-2">
<span>Made with</span>
<svg aria-hidden="true" className="iconify text-rose-500 animate-pulse iconify--lucide" data-icon="lucide:heart" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>for social impact.</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
