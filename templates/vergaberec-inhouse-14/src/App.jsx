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
hp: {
// Neues "blaueres" Blau (Royal Blue / Azure) statt Cyan
blue: '#2563EB',
dark: '#1E40AF',
light: '#EFF6FF'
}
},
animation: {
'fade-in': 'fadeIn 0.8s ease-out forwards',
'slide-up': 'slideUp 0.8s ease-out forwards',
'float-slow': 'float 20s ease-in-out infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0) rotate(-12deg)' },
'50%': { transform: 'translateY(-20px) rotate(-8deg)' },
}
}
}
}
}



        // Init Icons
        lucide.createIcons();

        // Scroll Animation Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
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
      

<div className="fixed inset-0 -z-10 bg-white">
<div className="absolute inset-0 bg-grid-slate [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-hp-light rounded-full blur-[100px] opacity-60 pointer-events-none"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded bg-hp-blue flex items-center justify-center text-white">
<svg className="lucide lucide-building-2 w-5 h-5" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">VergabeCampus</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-hp-blue transition-colors" href="#seminars">Seminare</a>
<a className="text-sm font-medium text-slate-600 hover:text-hp-blue transition-colors" href="#features">Vorteile</a>
<a className="text-sm font-medium text-slate-600 hover:text-hp-blue transition-colors" href="#experts">Experten</a>
<a className="text-sm font-medium text-slate-600 hover:text-hp-blue transition-colors" href="#contact">Kontakt</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Login</a>
<a className="btn-primary rounded-lg px-4 py-2 text-sm font-medium shadow-sm" href="#offer">
                        Angebot anfordern
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 overflow-hidden">

<div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
<div className="absolute right-[-10%] top-[5%] w-[800px] h-[800px] opacity-[0.04] text-hp-blue animate-float-slow transform -rotate-12">

<svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 24 24">
<circle cx="8" cy="21" r="1"></circle>
<circle cx="19" cy="21" r="1"></circle>
<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
</svg>
</div>

<div className="absolute left-[-5%] bottom-[-10%] w-[400px] h-[400px] opacity-[0.02] text-hp-blue transform rotate-45">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 24 24">
<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
<path d="M3 6h18"></path>
<path d="M16 10a4 4 0 0 1-8 0"></path>
</svg>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="max-w-4xl mx-auto text-center">

<h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 animate-slide-up leading-[1.1]" style={{animationDelay: '0.2s'}}>
                    Vergaberecht einfach.<br/>
<span className="text-hp-blue relative inline-block">
                        Inhouse.
                        
<svg className="absolute w-full h-3 -bottom-1 left-0 text-hp-blue opacity-30" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3"></path>
</svg>
</span> Praxisnah.
                </h1>

<p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{animationDelay: '0.3s'}}>
                    Maßgeschneiderte Inhouse-Schulungen für öffentliche Auftraggeber. 
                    Rechtssicherheit und Effizienz für Ihre Beschaffungsprozesse – direkt bei Ihnen vor Ort.
                </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
<a className="btn-primary h-12 px-8 rounded-xl flex items-center justify-center gap-2 text-base font-medium min-w-[160px]" href="#contact">
                        Beratungstermin
                        <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<button className="group relative h-12 px-8 rounded-xl flex items-center justify-center gap-2 text-base font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all min-w-[160px]">
<svg className="lucide lucide-play-circle w-4 h-4 text-slate-400 group-hover:text-hp-blue transition-colors" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                        Video ansehen
                    </button>
</div>

<div className="mt-12 pt-8 border-t border-slate-200/60 animate-slide-up" style={{animationDelay: '0.5s'}}>
<p className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-6">Vertraut von Behörden und Institutionen</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-lg font-bold text-slate-800 flex items-center gap-2"><svg className="lucide lucide-landmark w-5 h-5" data-lucide="landmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 18v-7"></path><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"></path><path d="M14 18v-7"></path><path d="M18 18v-7"></path><path d="M3 22h18"></path><path d="M6 18v-7"></path></svg> BUND</span>
<span className="text-lg font-bold text-slate-800 flex items-center gap-2"><svg className="lucide lucide-building w-5 h-5" data-lucide="building" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M12 6h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M16 6h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path><path d="M8 6h.01"></path><path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path><rect height="20" rx="2" width="16" x="4" y="2"></rect></svg> STADT KÖLN</span>
<span className="text-lg font-bold text-slate-800 flex items-center gap-2"><svg className="lucide lucide-graduation-cap w-5 h-5" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg> UNIVERSITÄT</span>
<span className="text-lg font-bold text-slate-800 flex items-center gap-2"><svg className="lucide lucide-activity w-5 h-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> KLINIKUM</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative border-y border-slate-100" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Warum VergabeCampus?</h2>
<p className="text-slate-600 text-lg">
                    Wir übersetzen komplexe Paragraphen in handlungsweisende Praxis. Unsere Seminare sind interaktiv, verständlich und auf Ihren Bedarf zugeschnitten.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

<div className="md:col-span-2 rounded-3xl bg-slate-50 border border-slate-200 p-8 relative overflow-hidden card-hover group">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="bg-white w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center shadow-sm mb-6 text-hp-blue">
<svg className="lucide lucide-shield-check w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">100% Rechtssicherheit</h3>
<p className="text-slate-600 max-w-md">
                                Vermeiden Sie teure Rügen und Nachprüfungsverfahren. Unsere Experten schulen Sie punktgenau zu VgV, UVgO und aktuellen Urteilen der Vergabekammern.
                            </p>
</div>
</div>

<div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-white to-transparent opacity-50"></div>
<div className="absolute -right-10 -top-10 w-40 h-40 bg-hp-blue/10 rounded-full blur-2xl group-hover:bg-hp-blue/20 transition-all"></div>
</div>

<div className="md:row-span-2 rounded-3xl bg-hp-blue p-8 relative overflow-hidden card-hover text-white">
<div className="relative z-10 h-full flex flex-col">
<div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
<svg className="lucide lucide-users w-6 h-6 text-white" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-xl font-semibold mb-2">Interaktive Workshops</h3>
<p className="text-blue-100 mb-8">
                            Kein Frontalunterricht. Wir arbeiten an Ihren konkreten Fällen und Ausschreibungsunterlagen.
                        </p>

<div className="mt-auto bg-white/10 rounded-xl p-4 backdrop-blur-md border border-white/20">
<div className="flex items-center gap-3 mb-3 border-b border-white/10 pb-3">
<div className="w-8 h-8 rounded-full bg-white/20"></div>
<div>
<div className="w-20 h-2 bg-white/40 rounded mb-1"></div>
<div className="w-12 h-2 bg-white/20 rounded"></div>
</div>
</div>
<div className="space-y-2">
<div className="w-full h-2 bg-white/20 rounded"></div>
<div className="w-3/4 h-2 bg-white/20 rounded"></div>
</div>
</div>
</div>
</div>

<div className="rounded-3xl bg-white border border-slate-200 p-8 card-hover relative group">
<div className="bg-slate-50 w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center shadow-sm mb-6 text-hp-blue">
<svg className="lucide lucide-file-text w-6 h-6" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Vorlagen &amp; Checklisten</h3>
<p className="text-slate-600">
                        Sie erhalten direkt einsetzbare Musterdokumente für Ihre tägliche Arbeit.
                    </p>
<div className="absolute bottom-4 right-4 text-slate-200 group-hover:text-hp-light transition-colors">
<svg className="lucide lucide-files w-24 h-24 opacity-20 -rotate-12" data-lucide="files" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"></path><path d="M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z"></path><path d="M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"></path></svg>
</div>
</div>

<div className="rounded-3xl bg-white border border-slate-200 p-8 card-hover group">
<div className="bg-slate-50 w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center shadow-sm mb-6 text-hp-blue">
<svg className="lucide lucide-award w-6 h-6" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Zertifizierte Fortbildung</h3>
<p className="text-slate-600">
                        Teilnahmezertifikate als Nachweis der Fachkunde gemäß GWB.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="seminars">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="animate-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                        Maßgeschneiderte Inhalte <br/>
<span className="text-slate-400">für Ihr Team</span>
</h2>
<p className="text-lg text-slate-600 mb-8">
                        Wählen Sie aus unseren Modulen oder lassen Sie sich ein individuelles Curriculum zusammenstellen.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-hp-blue flex items-center justify-center mt-1">
<svg className="lucide lucide-check w-3.5 h-3.5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Grundlagen des Vergaberechts</h4>
<p className="text-sm text-slate-500 mt-1">Einführung in GWB, VgV und UVgO für Einsteiger.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-hp-blue flex items-center justify-center mt-1">
<svg className="lucide lucide-check w-3.5 h-3.5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">E-Vergabe &amp; Digitalisierung</h4>
<p className="text-sm text-slate-500 mt-1">Sicherer Umgang mit Vergabeplattformen und digitalen Akten.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-hp-blue flex items-center justify-center mt-1">
<svg className="lucide lucide-check w-3.5 h-3.5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Leistungsbeschreibung &amp; Wertungskriterien</h4>
<p className="text-sm text-slate-500 mt-1">Fehlerfreie Erstellung der Vergabeunterlagen.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-hp-blue flex items-center justify-center mt-1">
<svg className="lucide lucide-check w-3.5 h-3.5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">IT-Beschaffung (EVB-IT)</h4>
<p className="text-sm text-slate-500 mt-1">Spezialseminar für Software- und Hardwarebeschaffung.</p>
</div>
</li>
</ul>
</div>
<div className="relative animate-on-scroll">

<div className="absolute inset-0 bg-gradient-to-tr from-hp-light to-white rounded-3xl transform rotate-3 scale-105 -z-10"></div>
<div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
<div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-amber-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
<div className="ml-4 text-xs text-slate-400 font-mono">agenda.pdf</div>
</div>
<div className="p-8">
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-16 text-sm font-semibold text-hp-blue">09:00</div>
<div className="flex-1 pb-6 border-l-2 border-slate-100 pl-6 relative">
<div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-hp-blue ring-4 ring-white"></div>
<h5 className="text-sm font-semibold text-slate-900">Begrüßung &amp; Einführung</h5>
<p className="text-xs text-slate-500 mt-1">Aktuelle Rechtslage 2025</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-16 text-sm font-semibold text-hp-blue">10:30</div>
<div className="flex-1 pb-6 border-l-2 border-slate-100 pl-6 relative">
<div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-slate-200 ring-4 ring-white"></div>
<h5 className="text-sm font-semibold text-slate-900">Modul 1: Die Leistungsbeschreibung</h5>
<p className="text-xs text-slate-500 mt-1">Produktneutralität vs. Bestimmtheit</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-16 text-sm font-semibold text-hp-blue">13:00</div>
<div className="flex-1 border-l-2 border-slate-100 pl-6 relative">
<div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-slate-200 ring-4 ring-white"></div>
<h5 className="text-sm font-semibold text-slate-900">Modul 2: Wertungsmethoden</h5>
<p className="text-xs text-slate-500 mt-1">UfAB V und einfache Richtwertmethode</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Stimmen aus der Praxis</h2>
</div>
<div className="scroller relative w-full overflow-hidden">
<div className="scroller-inner flex gap-6 px-4">

<div className="w-[350px] flex-shrink-0 p-6 bg-slate-50 rounded-2xl border border-slate-200">
<div className="flex gap-1 mb-4 text-hp-blue">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">
                        "Endlich ein Seminar, das nicht nur Paragraphen reitet, sondern echte Lösungen für unseren Beschaffungsalltag bietet. Sehr kompetente Referenten."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium">MS</div>
<div>
<div className="text-sm font-semibold text-slate-900">Michael Schmidt</div>
<div className="text-xs text-slate-500">Leiter Zentrale Dienste, Stadtverwaltung</div>
</div>
</div>
</div>

<div className="w-[350px] flex-shrink-0 p-6 bg-slate-50 rounded-2xl border border-slate-200">
<div className="flex gap-1 mb-4 text-hp-blue">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">
                        "Die Inhouse-Schulung war perfekt auf unser Team abgestimmt. Wir konnten direkt an unseren aktuellen Ausschreibungen arbeiten."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium">SK</div>
<div>
<div className="text-sm font-semibold text-slate-900">Sabine Klein</div>
<div className="text-xs text-slate-500">Vergabestelle, Landkreis</div>
</div>
</div>
</div>

<div className="w-[350px] flex-shrink-0 p-6 bg-slate-50 rounded-2xl border border-slate-200">
<div className="flex gap-1 mb-4 text-hp-blue">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">
                        "Hervorragende Unterlagen und Checklisten. Das spart uns im Alltag enorm viel Zeit."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium">TW</div>
<div>
<div className="text-sm font-semibold text-slate-900">Thomas Weber</div>
<div className="text-xs text-slate-500">IT-Einkauf, Universitätsklinikum</div>
</div>
</div>
</div>

<div className="w-[350px] flex-shrink-0 p-6 bg-slate-50 rounded-2xl border border-slate-200">
<div className="flex gap-1 mb-4 text-hp-blue">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">
                        "Endlich ein Seminar, das nicht nur Paragraphen reitet, sondern echte Lösungen für unseren Beschaffungsalltag bietet."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium">MS</div>
<div>
<div className="text-sm font-semibold text-slate-900">Michael Schmidt</div>
<div className="text-xs text-slate-500">Leiter Zentrale Dienste, Stadtverwaltung</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="offer">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Investieren Sie in Kompetenz</h2>
<p className="text-slate-600">Transparente Pauschalpreise für Inhouse-Schulungen inkl. Unterlagen und Zertifikaten.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
<div className="mb-4">
<h3 className="text-lg font-semibold text-slate-900">Kompakt</h3>
<p className="text-sm text-slate-500 mt-1">Halbtages-Seminar</p>
</div>
<div className="mb-6 flex items-baseline">
<span className="text-4xl font-bold tracking-tight text-slate-900">1.890€</span>
<span className="text-slate-500 ml-2 text-sm">zzgl. MwSt.</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-slate-600">
<svg className="lucide lucide-check w-5 h-5 text-hp-blue flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 4 Stunden Intensivtraining
                        </li>
<li className="flex gap-3 text-sm text-slate-600">
<svg className="lucide lucide-check w-5 h-5 text-hp-blue flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Bis zu 12 Teilnehmer
                        </li>
<li className="flex gap-3 text-sm text-slate-600">
<svg className="lucide lucide-check w-5 h-5 text-hp-blue flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Digitale Schulungsunterlagen
                        </li>
</ul>
<a className="w-full block text-center rounded-xl border border-slate-200 bg-white py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors" href="#">
                        Anfragen
                    </a>
</div>

<div className="bg-white rounded-3xl p-8 border-2 border-hp-blue shadow-lg relative flex flex-col transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-hp-blue text-white px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase">
                        Bestseller
                    </div>
<div className="mb-4">
<h3 className="text-lg font-semibold text-slate-900">Praxis Intensiv</h3>
<p className="text-sm text-slate-500 mt-1">Ganztages-Seminar</p>
</div>
<div className="mb-6 flex items-baseline">
<span className="text-4xl font-bold tracking-tight text-slate-900">2.950€</span>
<span className="text-slate-500 ml-2 text-sm">zzgl. MwSt.</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-slate-600">
<svg className="lucide lucide-check w-5 h-5 text-hp-blue flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 8 Stunden Training
                        </li>
<li className="flex gap-3 text-sm text-slate-600">
<svg className="lucide lucide-check w-5 h-5 text-hp-blue flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Bis zu 15 Teilnehmer
                        </li>
<li className="flex gap-3 text-sm text-slate-600">
<svg className="lucide lucide-check w-5 h-5 text-hp-blue flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Workshop an eigenen Fällen
                        </li>
<li className="flex gap-3 text-sm text-slate-600">
<svg className="lucide lucide-check w-5 h-5 text-hp-blue flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Inkl. Zertifikate &amp; Checklisten
                        </li>
</ul>
<a className="w-full block text-center rounded-xl bg-hp-blue py-3 text-sm font-medium text-white hover:bg-hp-dark transition-colors shadow-md" href="#">
                        Termin buchen
                    </a>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
<div className="mb-4">
<h3 className="text-lg font-semibold text-slate-900">Campus Plus</h3>
<p className="text-sm text-slate-500 mt-1">Mehrtägige Schulungsreihe</p>
</div>
<div className="mb-6 flex items-baseline">
<span className="text-4xl font-bold tracking-tight text-slate-900">Individuell</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-slate-600">
<svg className="lucide lucide-check w-5 h-5 text-hp-blue flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Modulares Konzept
                        </li>
<li className="flex gap-3 text-sm text-slate-600">
<svg className="lucide lucide-check w-5 h-5 text-hp-blue flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Unbegrenzte Teilnehmerzahl
                        </li>
<li className="flex gap-3 text-sm text-slate-600">
<svg className="lucide lucide-check w-5 h-5 text-hp-blue flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Bundesweite Durchführung
                        </li>
</ul>
<a className="w-full block text-center rounded-xl border border-slate-200 bg-white py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors" href="#">
                        Kontaktieren
                    </a>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="relative rounded-3xl bg-hp-blue overflow-hidden px-6 py-16 sm:px-16 sm:py-24 text-center">
<div className="relative z-10">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6">
                        Bereit für rechtssichere Vergaben?
                    </h2>
<p className="text-blue-100 max-w-xl mx-auto mb-10 text-lg">
                        Lassen Sie uns gemeinsam den Schulungsbedarf Ihrer Behörde analysieren. Unverbindlich und kostenlos.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3 text-sm font-semibold text-hp-blue shadow-sm hover:bg-blue-50 transition-colors" href="#contact">
                            Jetzt anfragen
                        </a>
<a className="inline-flex items-center justify-center rounded-xl border border-blue-400 bg-transparent px-8 py-3 text-sm font-semibold text-white hover:bg-blue-800/20 transition-colors" href="tel:+4912345678">
<svg className="lucide lucide-phone w-4 h-4 mr-2" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> 030 / 123 456 78
                        </a>
</div>
</div>

<svg aria-hidden="true" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" viewbox="0 0 1024 1024">
<circle cx="512" cy="512" fill="url(#gradient)" fillOpacity="0.25" r="512"></circle>
<defs>
<radialgradient id="gradient">
<stop stop-color="white"></stop>
<stop offset="1" stop-color="white"></stop>
</radialgradient>
</defs>
</svg>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="h-6 w-6 rounded bg-hp-blue flex items-center justify-center text-white">
<svg className="lucide lucide-building-2 w-3 h-3" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<span className="text-base font-semibold text-slate-900">VergabeCampus</span>
</div>
<p className="text-sm text-slate-500 mb-4">
                        Ihr Partner für Inhouse-Schulungen im öffentlichen Vergaberecht.
                    </p>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-3">Seminare</h3>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-hp-blue" href="#">VgV Grundlagen</a></li>
<li><a className="hover:text-hp-blue" href="#">UVgO Praxis</a></li>
<li><a className="hover:text-hp-blue" href="#">IT-Vergabe</a></li>
<li><a className="hover:text-hp-blue" href="#">Bauvergabe (VOB/A)</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-3">Unternehmen</h3>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-hp-blue" href="#">Über uns</a></li>
<li><a className="hover:text-hp-blue" href="#">Referenzen</a></li>
<li><a className="hover:text-hp-blue" href="#">Dozenten</a></li>
<li><a className="hover:text-hp-blue" href="#">Karriere</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-3">Rechtliches</h3>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-hp-blue" href="#">Impressum</a></li>
<li><a className="hover:text-hp-blue" href="#">Datenschutz</a></li>
<li><a className="hover:text-hp-blue" href="#">AGB</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2025 VergabeCampus GmbH. Alle Rechte vorbehalten.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-hp-blue transition-colors" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="text-slate-400 hover:text-hp-blue transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
