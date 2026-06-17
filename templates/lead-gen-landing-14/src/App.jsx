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
heading: ['Poppins', 'sans-serif'],
},
colors: {
brand: {
50: '#ecfeff',
100: '#cffafe',
400: '#22d3ee',
500: '#06b6d4',
600: '#0891b2',
700: '#0e7490',
},
darkblue: {
800: '#1e3a8a',
900: '#1e3a8a',
},
cta: {
500: '#f97316',
600: '#ea580c',
}
}
}
}
}



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
        });
    
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
      

<nav className="w-full py-6 px-4 md:px-8 border-b border-gray-100/80 bg-white/80 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-6xl mx-auto flex justify-center md:justify-start">
<span className="font-heading font-semibold text-xl tracking-tight text-darkblue-900 flex items-center gap-2">
<i className="w-5 h-5 text-brand-500" data-lucide="paint-brush"></i>
                malermarketing.net
            </span>
</div>
</nav>

<header className="overflow-hidden lg:pt-28 lg:pb-36 pt-12 pb-20 relative">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 text-sm font-medium border border-brand-100 mb-8">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500"></span>
</span>
                        100% Kostenloser Download
                    </div>
<h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-semibold text-gray-900 tracking-tight leading-[1.1] mb-8">
                        So wird Ihr Malerbetrieb bei Google auf <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">Platz 1 gefunden</span>
</h1>
<p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-3xl leading-relaxed">
                        Laden Sie jetzt den Google My Business Komplettleitfaden für Malerbetriebe herunter und gewinnen Sie automatisch neue Kunden – ohne teure Werbung!
                    </p>
<div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
<a className="group inline-flex items-center justify-center gap-2 bg-cta-500 hover:bg-cta-600 text-white text-lg font-medium py-4 px-10 rounded-xl shadow-lg shadow-orange-500/20 transition-all transform hover:-translate-y-1 duration-200 w-full sm:w-auto" href="#download">
                            Jetzt kostenlosen Leitfaden sichern
                            <svg aria-hidden="true" className="lucide lucide-arrow-right w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6 text-base text-gray-500 font-medium">
<span className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 100% kostenlos</span>
<span className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Sofort per E-Mail</span>
<span className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Kein Spam</span>
</div>
</div>

<div className="lg:col-span-5 relative mt-12 lg:mt-0">
<div className="relative mx-auto w-full max-w-[450px] lg:max-w-full group">
<div className="absolute -inset-8 bg-gradient-to-tr from-brand-100 via-brand-50 to-white rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>

<img alt="Google My Business Komplettleitfaden für Malerbetriebe E-Book Cover" className="hover:scale-[1.02] transition-transform duration-500 w-full h-auto object-cover bg-center relative drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0f0c445c-d538-4ce4-9717-47a5be5637a8_1600w.png"/>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-slate-50 border-y border-slate-100">
<div className="max-w-5xl mx-auto px-4 sm:px-6">
<div className="text-center mb-20">
<h2 className="font-heading text-4xl font-semibold text-gray-900 tracking-tight mb-5">Kommt Ihnen das bekannt vor?</h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">Die meisten Malerbetriebe verschenken täglich potenzielle Kunden an die Konkurrenz.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-5 hover:border-brand-200 transition-colors duration-300">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 mt-1">
<svg aria-hidden="true" className="lucide lucide-x w-6 h-6" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<div>
<h3 className="font-semibold text-gray-900 mb-3 text-xl tracking-tight">Unsichtbar bei Google</h3>
<p className="text-gray-600 leading-relaxed text-lg">Sie werden bei Google nicht gefunden – Ihre Konkurrenz schnappt Ihnen die lukrativen Aufträge direkt vor der Nase weg.</p>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-5 hover:border-brand-200 transition-colors duration-300">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 mt-1">
<svg aria-hidden="true" className="lucide lucide-search-x w-6 h-6" data-lucide="search-x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m13.5 8.5-5 5"></path><path d="m8.5 8.5 5 5"></path><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</div>
<div className="">
<h3 className="font-semibold text-gray-900 mb-3 text-xl tracking-tight">Keine Anfragen</h3>
<p className="text-gray-600 leading-relaxed text-lg">Ihr Google-Eintrag existiert zwar theoretisch, bringt aber faktisch keine neuen Kundenanfragen oder Anrufe.</p>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-5 hover:border-brand-200 transition-colors duration-300">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 mt-1">
<svg aria-hidden="true" className="lucide lucide-clock w-6 h-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<h3 className="font-semibold text-gray-900 mb-3 text-xl tracking-tight">Zeitmangel</h3>
<p className="text-gray-600 leading-relaxed text-lg">Sie stehen auf der Baustelle und haben schlichtweg keine Zeit, sich in komplexes Online-Marketing einzuarbeiten.</p>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-5 hover:border-brand-200 transition-colors duration-300">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 mt-1">
<svg aria-hidden="true" className="lucide lucide-banknote w-6 h-6" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
</div>
<div className="">
<h3 className="font-semibold text-gray-900 mb-3 text-xl tracking-tight">Geld verbrannt</h3>
<p className="text-gray-600 leading-relaxed text-lg">Teure Zeitungsanzeigen oder Google Ads haben bisher viel gekostet, aber kaum Ergebnisse geliefert.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-20 gap-x-20 gap-y-20 items-center">
<div className="order-2 lg:order-1">
<h2 className="font-heading text-4xl font-semibold text-gray-900 tracking-tight mb-10">
            Was Sie in diesem kostenlosen Leitfaden lernen:
        </h2>
<ul className="space-y-8">
<li className="flex items-start gap-5">
<div className="flex-shrink-0 w-8 h-8 mt-1 rounded-full bg-brand-100 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-brand-600 stroke-[3]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<span className="text-gray-600 text-lg">Zur perfekten Google My Business Optimierung, auch ohne Vorkenntnisse.</span>
</div>
</li>
<li className="flex items-start gap-5">
<div className="flex-shrink-0 w-8 h-8 mt-1 rounded-full bg-brand-100 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-brand-600 stroke-[3]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<span className="text-gray-600 text-lg">Die Malerbetriebe bei Google machen (und wie Sie diese elegant vermeiden).</span>
</div>
</li>
<li className="flex items-start gap-5">
<div className="flex-shrink-0 w-8 h-8 mt-1 rounded-full bg-brand-100 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-brand-600 stroke-[3]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<span className="text-gray-600 text-lg">Wie Sie systematisch Top-Bewertungen von zufriedenen Kunden erhalten.</span>
</div>
</li>
<li className="flex items-start gap-5">
<div className="flex-shrink-0 w-8 h-8 mt-1 rounded-full bg-brand-100 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-brand-600 stroke-[3]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<span className="text-gray-600 text-lg">Spezielle Hacks, damit Sie genau in Ihrer Region ganz oben stehen.</span>
</div>
</li>
</ul>
</div>
<div className="order-1 lg:order-2 text-center bg-gradient-to-b from-slate-50 to-white border-slate-100 border rounded-3xl pt-10 pr-10 pb-10 pl-10 shadow-sm">
<img alt="Guide Preview" className="hover:scale-[1.02] transition-transform duration-500 w-4/5 object-cover bg-center mr-auto mb-8 ml-auto drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5ae3aab2-0f41-4244-a49d-7b7f7dc960c9_320w.png"/>
<p className="font-medium text-brand-600 text-lg">Bereits über 1.200 Downloads</p>
</div>
</div>
</div>
</section>

<section className="bg-center bg-slate-50 border-slate-200 border-t pt-20 pb-20">
<div className="sm:px-6 text-center max-w-6xl mr-auto ml-auto pr-4 pl-4">
<h2 className="font-heading text-3xl font-semibold text-gray-900 mb-14 tracking-tight">Warum über 500 Unternehmen
            uns vertrauen</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6 text-blue-600">
<svg aria-hidden="true" className="lucide lucide-trophy w-7 h-7" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
</div>
<div className="font-bold text-4xl text-gray-900 mb-2 tracking-tight">20+ Jahre</div>
<p className="text-sm text-gray-500 font-semibold uppercase tracking-wide">Erfahrung</p>
<p className="text-gray-600 mt-4 text-base">Wir unterstützen Unternehmen seit zwei Jahrzehnten bei der
                    Kundengewinnung.</p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6 text-blue-600">
<svg aria-hidden="true" className="lucide lucide-users w-7 h-7" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="font-bold text-4xl text-gray-900 mb-2 tracking-tight">500+</div>
<p className="text-sm text-gray-500 font-semibold uppercase tracking-wide">Zufriedene Kunden</p>
<p className="text-gray-600 mt-4 text-base">Schließen Sie sich hunderten erfolgreichen Handwerksbetrieben
                    an.</p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6 text-blue-600">
<svg aria-hidden="true" className="lucide lucide-target w-7 h-7" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<div className="font-bold text-4xl text-gray-900 mb-2 tracking-tight">100%</div>
<p className="text-sm text-gray-500 font-semibold uppercase tracking-wide">Fokus Handwerk</p>
<p className="text-gray-600 mt-4 text-base">Wir kennen die speziellen Herausforderungen von Malerbetrieben
                    genau.</p>
</div>
</div>
<div className="mt-16 bg-white inline-block px-10 py-8 rounded-2xl shadow-sm border border-slate-200 max-w-3xl">
<div className="flex flex-col sm:flex-row items-center gap-6 text-left">
<div className="flex text-yellow-400">
<svg aria-hidden="true" className="lucide lucide-star w-6 h-6 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-6 h-6 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-6 h-6 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-6 h-6 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-6 h-6 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-700 italic text-xl leading-relaxed">"Seit der Optimierung unseres Google-Eintrags
                    erhalten wir 3x mehr Anfragen als vorher. Ein Muss für jeden Maler!"</p>
</div>
<p className="text-gray-900 font-semibold mt-4 text-right text-base">— M. Schmidt, Malermeister aus Berlin</p>
</div>
</div>
</section>

<section className="py-28 relative overflow-hidden bg-brand-700" id="download">

<div className="absolute inset-0 bg-gradient-to-br from-brand-600 to-darkblue-900 opacity-95"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-25 brightness-100 contrast-150"></div>
<div className="max-w-4xl mx-auto px-4 relative z-10">
<div className="text-center mb-12 text-white">
<h2 className="font-heading text-4xl sm:text-5xl font-semibold tracking-tight mb-6">Jetzt kostenlosen Leitfaden anfordern</h2>
<p className="text-brand-100 text-xl max-w-2xl mx-auto">Füllen Sie das kurze Formular aus und erhalten Sie sofort Zugang zum PDF.</p>
</div>
<div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-8 sm:p-12 max-w-xl mx-auto border border-white/20">
<div className="mb-8 bg-orange-50 border border-orange-100 rounded-xl p-4 flex items-start gap-4">
<svg aria-hidden="true" className="lucide lucide-gift w-6 h-6 text-orange-500 mt-0.5 flex-shrink-0" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
<p className="text-base text-orange-800 font-medium"><strong>BONUS:</strong> Inklusive kostenloser 15-Minuten-Analyse Ihres aktuellen Google-Eintrags!</p>
</div>

<form action="https://api.web3forms.com/submit" className="space-y-5" method="POST">

<input name="access_key" type="hidden" value="d9eae0b1-5d75-4739-b61d-8380d4dffe64"/>

<div>
<label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="name">Vollständiger Name</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
<svg aria-hidden="true" className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<input className="block w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all shadow-sm text-base" id="name" name="name" placeholder="Max Mustermann" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">E-Mail-Adresse</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
<svg aria-hidden="true" className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<input className="block w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all shadow-sm text-base" id="email" name="email" placeholder="max@malerbetrieb.de" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="phone">Telefonnummer</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
<svg aria-hidden="true" className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<input className="block w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all shadow-sm text-base" id="phone" name="phone" placeholder="0123 456789" required="" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="employees">Anzahl Mitarbeiter</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
<svg aria-hidden="true" className="lucide lucide-users-2 w-5 h-5" data-lucide="users-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></svg>
</div>
<select className="block w-full pl-11 pr-10 py-3.5 border border-gray-200 rounded-xl text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all shadow-sm appearance-none text-base cursor-pointer" id="employees" name="employees" required="">
<option disabled="" selected="" value="">Bitte wählen...</option>
<option value="1-5">1-5 Mitarbeiter</option>
<option value="6-10">6-10 Mitarbeiter</option>
<option value="11-20">11-20 Mitarbeiter</option>
<option value="20+">Mehr als 20 Mitarbeiter</option>
</select>
<div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400">
<svg aria-hidden="true" className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
<div className="pt-4">
<button className="w-full bg-cta-500 hover:bg-cta-600 text-white font-semibold text-xl py-4 px-6 rounded-xl shadow-lg shadow-orange-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex justify-center items-center gap-3" type="submit">
<svg aria-hidden="true" className="lucide lucide-download w-6 h-6" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                            Kostenlosen Leitfaden herunterladen
                        </button>
</div>
<p className="text-xs text-center text-gray-500 mt-6 flex items-center justify-center gap-1.5">
<svg aria-hidden="true" className="lucide lucide-lock w-3.5 h-3.5" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        Datenschutz: Ihre Daten sind sicher &amp; werden nicht weitergegeben.
                    </p>
</form>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-4">
<h2 className="font-heading text-3xl font-semibold text-center text-gray-900 mb-12 tracking-tight">Häufig gestellte Fragen</h2>
<div className="space-y-5">
<details className="group border border-slate-200 rounded-2xl bg-slate-50 open:bg-white open:ring-1 open:ring-slate-200 transition-all duration-300 [&amp;::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-gray-900 text-lg">
<span>Ist der Leitfaden wirklich kostenlos?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5 text-gray-400 group-open:text-brand-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-gray-600 px-6 pb-6 leading-relaxed text-base animate-in fade-in slide-in-from-top-2 duration-300">
                        Ja, 100% kostenlos. Es gibt keine versteckten Kosten und Sie gehen kein Abonnement ein. Unser Ziel ist es, Ihnen Mehrwert zu bieten und uns als Experte vorzustellen.
                    </div>
</details>
<details className="group border border-slate-200 rounded-2xl bg-slate-50 open:bg-white open:ring-1 open:ring-slate-200 transition-all duration-300 [&amp;::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-gray-900 text-lg">
<span>Für wen ist der Leitfaden geeignet?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5 text-gray-400 group-open:text-brand-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-gray-600 px-6 pb-6 leading-relaxed text-base animate-in fade-in slide-in-from-top-2 duration-300">
                        Speziell für Maler- und Lackierbetriebe entwickelt, die mehr lokale Kunden über Google gewinnen möchten – egal ob Einzelunternehmer oder Betrieb mit 50 Mitarbeitern.
                    </div>
</details>
<details className="group border border-slate-200 rounded-2xl bg-slate-50 open:bg-white open:ring-1 open:ring-slate-200 transition-all duration-300 [&amp;::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-gray-900 text-lg">
<span>Muss ich technisches Wissen haben?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5 text-gray-400 group-open:text-brand-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-gray-600 px-6 pb-6 leading-relaxed text-base animate-in fade-in slide-in-from-top-2 duration-300">
                        Nein. Wir haben auf Fachchinesisch verzichtet. Der Leitfaden ist eine Praxisanleitung, die jeder Schritt für Schritt umsetzen kann.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
<div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
<div className="font-heading font-semibold text-2xl text-white flex items-center gap-3 mb-8 tracking-tight">
<i className="w-6 h-6 text-brand-500" data-lucide="paint-brush"></i>
                malermarketing.net
            </div>
<div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mb-10 text-base font-medium">
<a className="hover:text-white transition-colors" href="#">030 - 20008403</a>
<span className="hidden sm:inline text-gray-700">|</span>
<a className="hover:text-white transition-colors" href="mailto:kontakt@malermarketing.net">kontakt@malermarketing.net</a>
</div>
<div className="flex gap-8 mb-10 text-base font-medium">
<a className="hover:text-white transition-colors" href="#">Impressum</a>
<a className="hover:text-white transition-colors" href="#">Datenschutz</a>
</div>
<p className="text-sm text-gray-600">
                © 2026 malermarketing.net – Alle Rechte vorbehalten. <br/>
                This site is not a part of the Facebook website or Facebook Inc.
            </p>
</div>
</footer>



    </>
  );
}
