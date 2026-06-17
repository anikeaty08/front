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



{
"@context": "https://schema.org",
"@type": "MedicalBusiness",
"name": "Reset Inside",
"image": "https://www.reset-inside.de/logo.png",
"url": "https://www.reset-inside.de",
"address": {
"@type": "PostalAddress",
"addressLocality": "Ulm",
"postalCode": "89073",
"addressCountry": "DE"
},
"priceRange": "$$",
"medicalSpecialty": ["Hypnotherapy"]
}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Manrope', 'sans-serif'],
serif: ['Lora', 'serif'],
},
colors: {
paper: '#FDFCF9', // Slightly warmer paper
sand: {
50: '#FBF9F6',
100: '#F5F2ED',
200: '#EBE6DC',
300: '#DDD5C5',
400: '#C4B9A3',
500: '#A99D87',
600: '#8C806B',
},
earth: {
50: '#F8F7F6',
100: '#EFEDEB',
200: '#DCD9D6',
300: '#C2BEBA',
400: '#A8A29D',
500: '#78716C',
600: '#57534E',
700: '#44403C',
800: '#292524',
900: '#1C1917',
},
moss: {
500: '#7FA99B',
600: '#647D75',
700: '#50635D',
}
},
letterSpacing: {
tight: '-0.02em',
tighter: '-0.04em',
wide: '0.025em',
wider: '0.05em',
widest: '0.15em',
},
boxShadow: {
'soft': '0 2px 15px -3px rgba(41, 37, 36, 0.04), 0 4px 6px -4px rgba(41, 37, 36, 0.02)',
'soft-hover': '0 10px 30px -4px rgba(41, 37, 36, 0.06), 0 4px 10px -4px rgba(41, 37, 36, 0.02)',
'glow': '0 0 20px -5px rgba(169, 157, 135, 0.15)',
}
}
}
}



        function switchView(viewName) {
            const homeView = document.getElementById('home-view');
            const localView = document.getElementById('local-view');
            
            if (viewName === 'local') {
                homeView.classList.add('hidden-view');
                localView.classList.remove('hidden-view');
                window.scrollTo(0, 0);
                history.pushState(null, '', '#hypnose-in-ulm');
            } else {
                homeView.classList.remove('hidden-view');
                localView.classList.add('hidden-view');
            }
        }

        window.addEventListener('popstate', () => {
            if(window.location.hash === '#hypnose-in-ulm') {
                switchView('local');
            } else {
                switchView('home');
            }
        });
        
        document.addEventListener('DOMContentLoaded', () => {
            if(window.location.hash === '#hypnose-in-ulm') {
                switchView('local');
            }

            const revealElements = document.querySelectorAll('.reveal-on-scroll');
            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-visible');
                        observer.unobserve(entry.target); 
                    }
                });
            }, { root: null, threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
            revealElements.forEach(el => revealObserver.observe(el));

            const subLine = document.getElementById('hero-subline');
            if(subLine) {
                const phrases = ["Ruhe.", "Klarheit.", "Sicherheit."];
                let phraseIndex = 0;

                function typeWriter(text, i, fnCallback) {
                    if (i < text.length) {
                        subLine.innerHTML = text.substring(0, i+1);
                        setTimeout(function() { typeWriter(text, i + 1, fnCallback) }, 120); // Slightly faster for pro feel
                    } else if (typeof fnCallback == 'function') {
                        setTimeout(fnCallback, 3000);
                    }
                }

                function startTextAnimation() {
                    if (phraseIndex >= phrases.length) phraseIndex = 0;
                    const currentPhrase = phrases[phraseIndex];
                    typeWriter(currentPhrase, 0, function(){
                        setTimeout(function(){
                            subLine.innerHTML = '';
                            phraseIndex++;
                            startTextAnimation();
                        }, 1000);
                    });
                }
                startTextAnimation();
            }

            const details = document.querySelectorAll("details");
            details.forEach((targetDetail) => {
                targetDetail.addEventListener("click", () => {
                    details.forEach((detail) => {
                        if (detail !== targetDetail) detail.removeAttribute("open");
                    });
                });
            });

            const btn = document.getElementById('mobile-menu-btn');
            const menu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');
            if (btn && menu) {
                btn.addEventListener('click', () => menu.classList.toggle('hidden'));
                mobileLinks.forEach(link => link.addEventListener('click', () => menu.classList.add('hidden')));
            }

            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.group\\/link');
            const scrollObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.target.id) {
                        navLinks.forEach(link => {
                            link.classList.remove('text-earth-900');
                            const indicator = link.querySelector('span');
                            if(indicator) indicator.classList.remove('scale-x-100');
                            
                            if (link.getAttribute('href') === `#${entry.target.id}`) {
                                link.classList.add('text-earth-900');
                                if(indicator) indicator.classList.add('scale-x-100');
                            }
                        });
                    }
                });
            }, { rootMargin: '-20% 0px -70% 0px' });
            sections.forEach(section => scrollObserver.observe(section));
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
      

<nav aria-label="Hauptnavigation" className="fixed w-full z-50 bg-paper/90 backdrop-blur-md border-b border-sand-200/60 transition-all duration-500">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

<a className="group flex items-center gap-3 focus:outline-none" href="#" onclick="switchView('home')" title="Zur Startseite">
<div className="flex flex-col">
<span className="font-serif font-medium text-2xl tracking-tighter text-earth-900 leading-none group-hover:text-earth-700 transition-colors">Reset Inside</span>
<span className="text-[0.6rem] uppercase tracking-[0.25em] text-sand-500 font-semibold mt-1.5 ml-0.5">Hypnose Ulm</span>
</div>
</a>

<div className="hidden md:flex items-center gap-10 text-sm font-medium text-earth-600">
<a className="py-2 hover:text-earth-900 transition-colors duration-300 relative group/link" href="#warum" onclick="switchView('home')">
                    Methode
                    <span className="absolute inset-x-0 -bottom-0.5 h-px bg-sand-400 scale-x-0 group-hover/link:scale-x-100 transition-transform origin-center duration-300"></span>
</a>
<a className="py-2 hover:text-earth-900 transition-colors duration-300 relative group/link" href="#anwendungsgebiete" onclick="switchView('home')">
                    Arbeitsfelder
                    <span className="absolute inset-x-0 -bottom-0.5 h-px bg-sand-400 scale-x-0 group-hover/link:scale-x-100 transition-transform origin-center duration-300"></span>
</a>
<a className="py-2 hover:text-earth-900 transition-colors duration-300 relative group/link" href="#ablauf" onclick="switchView('home')">
                    Ablauf &amp; Honorar
                    <span className="absolute inset-x-0 -bottom-0.5 h-px bg-sand-400 scale-x-0 group-hover/link:scale-x-100 transition-transform origin-center duration-300"></span>
</a>
<a className="py-2 hover:text-earth-900 transition-colors duration-300 relative group/link" href="#faq" onclick="switchView('home')">
                    Fragen
                    <span className="absolute inset-x-0 -bottom-0.5 h-px bg-sand-400 scale-x-0 group-hover/link:scale-x-100 transition-transform origin-center duration-300"></span>
</a>
</div>

<div className="flex items-center gap-5">
<a className="hidden md:inline-flex items-center justify-center px-7 py-2.5 text-sm font-medium bg-earth-900 text-sand-50 rounded-full hover:bg-earth-800 hover:shadow-lg hover:shadow-sand-300/20 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sand-400" href="#kontakt" onclick="switchView('home')">
                    Termin anfragen
                </a>
<button aria-label="Menü öffnen" className="md:hidden p-2 -mr-2 text-earth-800 hover:text-earth-600 transition-colors focus:outline-none" id="mobile-menu-btn">
<svg aria-hidden="true" className="iconify iconify--lucide" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 8h16M4 16h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
</div>
</div>

<div className="hidden md:hidden absolute top-24 left-0 w-full bg-paper border-b border-sand-200 shadow-xl overflow-hidden rounded-b-3xl" id="mobile-menu">
<div className="flex flex-col px-6 py-8 space-y-6">
<a className="text-earth-600 hover:text-earth-900 mobile-link text-xl font-serif italic border-l-2 border-transparent hover:border-sand-400 pl-4 transition-all" href="#warum" onclick="switchView('home')">Methode</a>
<a className="text-earth-600 hover:text-earth-900 mobile-link text-xl font-serif italic border-l-2 border-transparent hover:border-sand-400 pl-4 transition-all" href="#anwendungsgebiete" onclick="switchView('home')">Arbeitsfelder</a>
<a className="text-earth-600 hover:text-earth-900 mobile-link text-xl font-serif italic border-l-2 border-transparent hover:border-sand-400 pl-4 transition-all" href="#ablauf" onclick="switchView('home')">Ablauf &amp; Honorar</a>
<a className="text-earth-600 hover:text-earth-900 mobile-link text-xl font-serif italic border-l-2 border-transparent hover:border-sand-400 pl-4 transition-all" href="#faq" onclick="switchView('home')">Häufige Fragen</a>
<div className="pt-6 border-t border-sand-100">
<a className="block w-full text-center px-5 py-3 text-base font-medium bg-earth-900 text-sand-50 rounded-full hover:bg-earth-800 transition-all mobile-link shadow-md" href="#kontakt" onclick="switchView('home')">
                        Vorgespräch vereinbaren
                    </a>
</div>
</div>
</div>
</nav>

<main className="view-section flex-grow" id="home-view">

<section className="relative bg-paper pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">

<div className="absolute inset-0 bg-gradient-to-br from-sand-50 via-paper to-sand-100/30 opacity-60 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

<div className="lg:col-span-6 space-y-10 reveal-on-scroll text-center lg:text-left">
<div className="relative inline-block">

<div className="hidden lg:block absolute -left-8 top-3 w-px h-16 bg-sand-300"></div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tighter leading-[1.1] text-earth-900 mb-6">
                                Hypnosetherapie <br/><span className="italic text-earth-700 font-normal">in Ulm.</span>
</h1>
<div className="flex items-center justify-center lg:justify-start gap-3 h-10">
<span className="font-serif italic text-2xl md:text-3xl text-sand-600" id="hero-subline"></span>
<span className="cursor-blink w-0.5 h-8 bg-sand-300"></span>
</div>
</div>
<div className="max-w-lg mx-auto lg:mx-0 space-y-6 reveal-on-scroll delay-100">
<p className="text-lg md:text-xl text-earth-600 leading-relaxed font-light">
                                Ein wissenschaftlich fundierter Ansatz zur Lösung innerer Konflikte. 
                                Wir unterstützen Sie dabei, Blockaden zu lösen und eigene Ressourcen gezielt zu aktivieren.
                            </p>
</div>
<div className="pt-6 reveal-on-scroll delay-200">
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<a className="inline-flex items-center justify-center px-10 py-4 text-base font-medium bg-earth-900 text-sand-50 rounded-full hover:bg-earth-800 hover:shadow-lg hover:shadow-sand-300/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sand-400" href="#kontakt">
                                    Vorgespräch vereinbaren
                                </a>
<a className="inline-flex items-center justify-center px-10 py-4 text-base font-medium text-earth-800 bg-white border border-sand-200 rounded-full hover:bg-sand-50 hover:border-sand-300 transition-all duration-300 focus:outline-none" href="#warum">
                                    Methode kennenlernen
                                </a>
</div>
<div className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-sm text-earth-500 font-medium tracking-wide opacity-90">
<svg className="iconify iconify--lucide text-moss-600" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeWidth="1.5"></circle><path d="m9 12l2 2l4-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<span>Kostenfreies Telefonat (30 Min).</span>
</div>
</div>
</div>

<div className="lg:col-span-6 lg:pl-10 reveal-on-scroll delay-200">
<div className="relative group">
<div className="absolute -inset-4 bg-sand-100/60 rounded-[2.5rem] -rotate-2 scale-95 opacity-50 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-100"></div>
<div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-sand-200/50 aspect-[4/5] md:aspect-[4/3] bg-sand-50">
<img alt="Ruhige Atmosphäre bei Reset Inside" className="w-full h-full object-cover img-warm" height="600" src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" width="800"/>
<div className="absolute inset-0 bg-gradient-to-t from-earth-900/5 to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="relative z-10 border-y border-sand-200/60 bg-sand-50/40">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-sand-200/60">
<div className="text-center md:text-left py-12 md:pr-12 group reveal-on-scroll">
<p className="text-3xl md:text-4xl font-serif font-medium text-earth-800 mb-2 group-hover:text-moss-600 transition-colors duration-500">1:1</p>
<p className="text-earth-500 text-[0.65rem] font-bold uppercase tracking-widest opacity-80">Individueller Prozess</p>
</div>
<div className="text-center md:text-left py-12 md:px-12 group reveal-on-scroll delay-100">
<p className="text-3xl md:text-4xl font-serif font-medium text-earth-800 mb-2 group-hover:text-moss-600 transition-colors duration-500">30 Min</p>
<p className="text-earth-500 text-[0.65rem] font-bold uppercase tracking-widest opacity-80">Vorgespräch kostenfrei</p>
</div>
<div className="text-center md:text-left py-12 md:px-12 group reveal-on-scroll delay-200">
<div className="flex items-center justify-center md:justify-start gap-2 mb-2">
<p className="text-3xl md:text-4xl font-serif font-medium text-earth-800 group-hover:text-moss-600 transition-colors duration-500">4.9</p>
<svg aria-hidden="true" className="iconify text-sand-400 fill-sand-100 iconify--lucide" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<p className="text-earth-500 text-[0.65rem] font-bold uppercase tracking-widest opacity-80">Positive Resonanz</p>
</div>
<div className="text-center md:text-left py-12 md:pl-12 group reveal-on-scroll delay-300">
<p className="text-3xl md:text-4xl font-serif font-medium text-earth-800 mb-2 group-hover:text-moss-600 transition-colors duration-500">500+</p>
<p className="text-earth-500 text-[0.65rem] font-bold uppercase tracking-widest opacity-80">Praxiserfahrung</p>
</div>
</div>
</div>
</div>

<section className="py-24 lg:py-32 bg-paper" id="warum">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
<div className="reveal-on-scroll lg:sticky lg:top-32">
<div className="inline-flex items-center gap-3 mb-8">
<span className="w-10 h-px bg-sand-400"></span>
<span className="text-earth-500 font-semibold tracking-widest text-xs uppercase">Arbeitsweise</span>
</div>
<h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-earth-900 mb-8 leading-[1.15]">
                            Wie Hypnose wirkt. <br/><span className="italic text-earth-600 font-normal">Zugang zu eigenen Ressourcen.</span>
</h2>
<div className="space-y-6">
<p className="text-earth-700 leading-loose font-light text-lg">
                                Oft versuchen wir, tiefgreifende Gewohnheiten oder emotionale Reaktionen rein rational zu kontrollieren. Doch viele Verhaltensmuster sind auf einer anderen Ebene verankert, die dem bewussten Willen nur schwer zugänglich ist.
                            </p>
<div className="pl-6 border-l-2 border-sand-300 my-8">
<p className="text-earth-900 leading-relaxed font-serif text-xl italic">
                                    "Hypnose ist ein Zustand fokussierter Aufmerksamkeit."
                                </p>
</div>
<p className="text-earth-700 leading-loose font-light text-lg">
                                Ähnlich wie in einem tiefen Flow-Zustand oder einer konzentrierten Entspannung, ermöglicht Hypnose den Zugang zu diesem inneren Erleben. In der Therapie nutzen wir diesen Zustand, um gemeinsam neue Lösungswege zu entwickeln.
                            </p>
</div>
</div>
<div className="grid gap-6">

<div className="p-10 bg-sand-50 rounded-2xl border border-sand-100 hover:border-sand-200 hover:shadow-soft-hover hover:-translate-y-1 transition-all duration-500 reveal-on-scroll delay-100 group">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-moss-600 shadow-sm border border-sand-50 group-hover:bg-moss-50/50 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4m0 4h.01"></path></g></svg>
</div>
<h3 className="font-serif text-2xl text-earth-900 mb-3 tracking-tight">Konflikte klären</h3>
<p className="text-base text-earth-600 leading-relaxed font-light">Widersprüche zwischen "Kopf" und "Bauchgefühl" erkennen und auflösen.</p>
</div>

<div className="p-10 bg-sand-50 rounded-2xl border border-sand-100 hover:border-sand-200 hover:shadow-soft-hover hover:-translate-y-1 transition-all duration-500 reveal-on-scroll delay-200 group">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-moss-600 shadow-sm border border-sand-50 group-hover:bg-moss-50/50 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="m17 2l4 4l-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4l4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></g></svg>
</div>
<h3 className="font-serif text-2xl text-earth-900 mb-3 tracking-tight">Muster unterbrechen</h3>
<p className="text-base text-earth-600 leading-relaxed font-light">Automatisierte Reaktionen verstehen und neue Handlungsalternativen etablieren.</p>
</div>

<div className="p-10 bg-sand-50 rounded-2xl border border-sand-100 hover:border-sand-200 hover:shadow-soft-hover hover:-translate-y-1 transition-all duration-500 reveal-on-scroll delay-300 group">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-moss-600 shadow-sm border border-sand-50 group-hover:bg-moss-50/50 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M22 14v-4M6 14v-4"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></g></svg>
</div>
<h3 className="font-serif text-2xl text-earth-900 mb-3 tracking-tight">Selbstwirksamkeit stärken</h3>
<p className="text-base text-earth-600 leading-relaxed font-light">Eigene Ressourcen mobilisieren und das Vertrauen in die eigene Handlungsfähigkeit fördern.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-sand-50/40 border-y border-sand-200/60" id="anwendungsgebiete">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 reveal-on-scroll">
<div>
<h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-earth-900 mb-6">Therapiefelder</h2>
<p className="text-xl text-earth-600 max-w-xl font-light">Unsere Schwerpunkte liegen in der Begleitung von Veränderungsprozessen.</p>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<article className="group relative reveal-on-scroll flex flex-col h-full p-9 bg-white rounded-2xl border border-sand-100 hover:border-sand-200 hover:shadow-soft-hover transition-all duration-500 hover:-translate-y-1">
<div className="mb-8 text-sand-400 group-hover:text-moss-600 transition-colors duration-500">
<svg className="iconify iconify--lucide" height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13m2-8c0-2.5-2-2.5-2-5M2 2l20 20m-1-10a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866M22 8c0-2.5-2-2.5-2-5M7 12v4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<h3 className="text-xl font-serif text-earth-900 mb-3 tracking-tight">Rauchentwöhnung</h3>
<p className="text-base text-earth-600 font-light mb-8 flex-grow leading-relaxed">Unterstützung bei der Entscheidung, rauchfrei zu leben. Innere Konflikte lösen und neue Verhaltensmuster verankern.</p>
<a className="text-sm font-semibold uppercase tracking-widest text-moss-600 hover:text-earth-900 flex items-center gap-2 pt-6 border-t border-sand-100 group-hover:border-sand-200 transition-colors" href="#kontakt">Details besprechen</a>
</article>

<article className="group relative reveal-on-scroll delay-100 flex flex-col h-full p-9 bg-white rounded-2xl border border-sand-100 hover:border-sand-200 hover:shadow-soft-hover transition-all duration-500 hover:-translate-y-1">
<div className="mb-8 text-sand-400 group-hover:text-moss-600 transition-colors duration-500">
<svg className="iconify iconify--lucide" height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M12 3v18m7-13l3 8a5 5 0 0 1-6 0zV7"></path><path d="M3 7h1a17 17 0 0 0 8-2a17 17 0 0 0 8 2h1M5 8l3 8a5 5 0 0 1-6 0zV7m2 14h10"></path></g></svg>
</div>
<h3 className="text-xl font-serif text-earth-900 mb-3 tracking-tight">Gewichtsmanagement</h3>
<p className="text-base text-earth-600 font-light mb-8 flex-grow leading-relaxed">Das eigene Essverhalten verstehen. Emotionale Hintergründe bearbeiten und einen natürlichen Umgang mit Nahrung finden.</p>
<a className="text-sm font-semibold uppercase tracking-widest text-moss-600 hover:text-earth-900 flex items-center gap-2 pt-6 border-t border-sand-100 group-hover:border-sand-200 transition-colors" href="#kontakt">Details besprechen</a>
</article>

<article className="group relative reveal-on-scroll delay-200 flex flex-col h-full p-9 bg-white rounded-2xl border border-sand-100 hover:border-sand-200 hover:shadow-soft-hover transition-all duration-500 hover:-translate-y-1">
<div className="mb-8 text-sand-400 group-hover:text-moss-600 transition-colors duration-500">
<svg className="iconify iconify--lucide" height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v2m-7.07.93l1.41 1.41M20 12h2m-2.93-7.07l-1.41 1.41m-1.713 6.31a4 4 0 0 0-5.925-4.128M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<h3 className="text-xl font-serif text-earth-900 mb-3 tracking-tight">Ängste &amp; Phobien</h3>
<p className="text-base text-earth-600 font-light mb-8 flex-grow leading-relaxed">Umgang mit Prüfungsangst, Flugangst oder sozialen Unsicherheiten. Innere Sicherheit wiedergewinnen.</p>
<a className="text-sm font-semibold uppercase tracking-widest text-moss-600 hover:text-earth-900 flex items-center gap-2 pt-6 border-t border-sand-100 group-hover:border-sand-200 transition-colors" href="#kontakt">Details besprechen</a>
</article>

<article className="group relative reveal-on-scroll delay-100 flex flex-col h-full p-9 bg-white rounded-2xl border border-sand-100 hover:border-sand-200 hover:shadow-soft-hover transition-all duration-500 hover:-translate-y-1">
<div className="mb-8 text-sand-400 group-hover:text-moss-600 transition-colors duration-500">
<svg className="iconify iconify--lucide" height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m11 7l-3 5h4l-3 5m5.856-11H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935M22 14v-4M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<h3 className="text-xl font-serif text-earth-900 mb-3 tracking-tight">Stressbewältigung</h3>
<p className="text-base text-earth-600 font-light mb-8 flex-grow leading-relaxed">Tiefenentspannung und Resilienztraining. Strategien zur mentalen Entlastung im Alltag.</p>
<a className="text-sm font-semibold uppercase tracking-widest text-moss-600 hover:text-earth-900 flex items-center gap-2 pt-6 border-t border-sand-100 group-hover:border-sand-200 transition-colors" href="#kontakt">Details besprechen</a>
</article>

<article className="group relative reveal-on-scroll delay-200 flex flex-col h-full p-9 bg-white rounded-2xl border border-sand-100 hover:border-sand-200 hover:shadow-soft-hover transition-all duration-500 hover:-translate-y-1">
<div className="mb-8 text-sand-400 group-hover:text-moss-600 transition-colors duration-500">
<svg className="iconify iconify--lucide" height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<h3 className="text-xl font-serif text-earth-900 mb-3 tracking-tight">Schlafqualität</h3>
<p className="text-base text-earth-600 font-light mb-8 flex-grow leading-relaxed">Gedankenkreisen beruhigen und die Fähigkeit zur körperlichen und mentalen Regeneration fördern.</p>
<a className="text-sm font-semibold uppercase tracking-widest text-moss-600 hover:text-earth-900 flex items-center gap-2 pt-6 border-t border-sand-100 group-hover:border-sand-200 transition-colors" href="#kontakt">Details besprechen</a>
</article>

<article className="group relative reveal-on-scroll delay-300 flex flex-col h-full p-9 bg-white rounded-2xl border border-sand-100 hover:border-sand-200 hover:shadow-soft-hover transition-all duration-500 hover:-translate-y-1">
<div className="mb-8 text-sand-400 group-hover:text-moss-600 transition-colors duration-500">
<svg className="iconify iconify--lucide" height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978m7-7.318v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978M18 9h1.5a1 1 0 0 0 0-5H18M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm0 0H4.5a1 1 0 0 1 0-5H6"></path></g></svg>
</div>
<h3 className="text-xl font-serif text-earth-900 mb-3 tracking-tight">Persönlichkeit</h3>
<p className="text-base text-earth-600 font-light mb-8 flex-grow leading-relaxed">Selbstvertrauen stärken und Blockaden lösen. Für mehr Gelassenheit im beruflichen und privaten Kontext.</p>
<a className="text-sm font-semibold uppercase tracking-widest text-moss-600 hover:text-earth-900 flex items-center gap-2 pt-6 border-t border-sand-100 group-hover:border-sand-200 transition-colors" href="#kontakt">Details besprechen</a>
</article>
</div>
</div>
</section>

<section className="py-24 bg-sand-100/40 border-b border-sand-200/50">
<div className="max-w-3xl mx-auto px-6 text-center reveal-on-scroll">
<h3 className="text-2xl md:text-3xl font-serif italic text-earth-800 mb-6 tracking-tight">Unsicher, ob Hypnose für Ihr Anliegen passt?</h3>
<p className="text-earth-600 font-light mb-10 max-w-xl mx-auto text-lg leading-relaxed">
                    Nicht jedes Thema lässt sich in eine Kategorie einordnen. In einem kurzen Telefonat klären wir, ob wir Ihnen helfen können.
                </p>
<div className="flex flex-col items-center gap-4">
<a className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium bg-white text-earth-900 border border-sand-200 rounded-full hover:border-sand-300 hover:shadow-soft transition-all duration-300 focus:outline-none" href="#kontakt">
                        Unverbindlich Rücksprache halten
                    </a>
<span className="text-xs font-medium text-earth-500/80 mt-2 uppercase tracking-wide">Dauer ca. 10–15 Minuten • Kostenfrei</span>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-paper text-earth-900" id="ablauf">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 max-w-2xl reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight mb-6">Der Weg zur Veränderung</h2>
<p className="text-xl text-earth-600 font-light leading-relaxed">
                        Ein strukturierter Prozess schafft Sicherheit. In vier klaren Schritten begleiten wir Sie von der ersten Kontaktaufnahme bis zur Zielerreichung.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-on-scroll">
<div className="group p-9 rounded-2xl bg-sand-50/50 hover:bg-white border border-transparent hover:border-sand-100 transition-all duration-500 hover:shadow-soft">
<span className="block text-5xl font-serif text-sand-300 mb-8 group-hover:text-moss-500 transition-colors">01</span>
<h3 className="text-xl font-medium mb-3 text-earth-900">Erstgespräch</h3>
<p className="text-earth-600 text-base leading-relaxed font-light">
                            Kostenfreies Telefonat (ca. 30 Min). Wir klären Ihr Anliegen und prüfen gemeinsam, ob die Chemie stimmt und Hypnose der passende Weg ist.
                        </p>
</div>
<div className="group p-9 rounded-2xl bg-sand-50/50 hover:bg-white border border-transparent hover:border-sand-100 transition-all duration-500 hover:shadow-soft">
<span className="block text-5xl font-serif text-sand-300 mb-8 group-hover:text-moss-500 transition-colors">02</span>
<h3 className="text-xl font-medium mb-3 text-earth-900">Anamnese &amp; Ziel</h3>
<p className="text-earth-600 text-base leading-relaxed font-light">
                            Tiefgehende Analyse der Hintergründe. Wir definieren konkrete, realistische Ziele und den individuellen Fahrplan für Ihre Sitzungen.
                        </p>
</div>
<div className="group p-9 rounded-2xl bg-sand-50/50 hover:bg-white border border-transparent hover:border-sand-100 transition-all duration-500 hover:shadow-soft">
<span className="block text-5xl font-serif text-sand-300 mb-8 group-hover:text-moss-500 transition-colors">03</span>
<h3 className="text-xl font-medium mb-3 text-earth-900">Hypnose-Sitzung</h3>
<p className="text-earth-600 text-base leading-relaxed font-light">
                            Arbeit an den Ursachen in fokussierter Entspannung. Alte Muster werden gelöst und neue Ressourcen im Unterbewusstsein verankert.
                        </p>
</div>
<div className="group p-9 rounded-2xl bg-sand-50/50 hover:bg-white border border-transparent hover:border-sand-100 transition-all duration-500 hover:shadow-soft">
<span className="block text-5xl font-serif text-sand-300 mb-8 group-hover:text-moss-500 transition-colors">04</span>
<h3 className="text-xl font-medium mb-3 text-earth-900">Transfer &amp; Festigung</h3>
<p className="text-earth-600 text-base leading-relaxed font-light">
                            Integration der Veränderung in den Alltag. Nachbesprechung der Wirkung und bei Bedarf Feinjustierung für nachhaltigen Erfolg.
                        </p>
</div>
</div>
<div className="mt-32 pt-24 border-t border-sand-200/50">
<div className="mb-16 text-center md:text-left reveal-on-scroll">
<h3 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-earth-900 mb-3">Honorar</h3>
<p className="text-earth-600 font-light text-lg">Transparente Kosten ohne versteckte Gebühren.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
<div className="bg-white p-10 rounded-2xl text-center shadow-sm hover:shadow-soft-hover border border-sand-100 transition-all duration-500 reveal-on-scroll">
<p className="text-earth-400 text-xs uppercase tracking-widest mb-6 font-semibold">Einzelsitzung</p>
<p className="text-5xl font-serif text-earth-900 mb-6 tracking-tight">100 €</p>
<p className="text-earth-500 text-sm">pro Sitzung (ca. 60 Min)</p>
</div>
<div className="bg-paper border border-moss-500/30 p-10 rounded-2xl text-center shadow-lg transition-all duration-500 reveal-on-scroll delay-100 relative overflow-hidden transform md:-translate-y-2 hover:shadow-xl">
<div className="absolute top-0 inset-x-0 h-1.5 bg-moss-600"></div>
<p className="text-moss-600 text-xs uppercase tracking-widest mb-6 font-bold">Intensiv-Paket (5er)</p>
<p className="text-5xl font-serif text-earth-900 mb-3 tracking-tight">450 €</p>
<p className="text-earth-500 text-sm mb-6">Begleitung über mehrere Wochen</p>
<span className="inline-block px-4 py-1.5 bg-moss-500/10 text-moss-700 text-[10px] uppercase tracking-widest font-bold rounded-full">Häufig gewählt</span>
</div>
<div className="bg-white p-10 rounded-2xl text-center shadow-sm hover:shadow-soft-hover border border-sand-100 transition-all duration-500 reveal-on-scroll delay-200">
<p className="text-earth-400 text-xs uppercase tracking-widest mb-6 font-semibold">Prozess-Paket (10er)</p>
<p className="text-5xl font-serif text-earth-900 mb-3 tracking-tight">800 €</p>
<p className="text-earth-500 text-sm mb-4">Für tiefgreifende Themen</p>
</div>
</div>
<div className="text-center reveal-on-scroll delay-300">
<p className="text-base text-earth-600 font-light mb-4">Sie sind unsicher, welches Paket sinnvoll ist? Das klären wir im Vorgespräch.</p>
<a className="text-moss-600 font-medium hover:text-earth-900 underline underline-offset-4 decoration-1 transition-all" href="#kontakt">Termin vereinbaren</a>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-sand-50/30 border-y border-sand-200/60" id="erfahrungen">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 reveal-on-scroll text-center">
<h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-earth-900 mb-6">Erfahrungen aus der Praxis</h2>
<p className="text-xl text-earth-600 max-w-2xl mx-auto font-light">Rückmeldungen von Klienten, die ihren Veränderungsprozess bei Reset Inside durchlaufen haben.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="reveal-on-scroll">
<div className="bg-white p-10 rounded-2xl flex flex-col justify-between h-full shadow-sm hover:shadow-soft-hover border border-sand-100/60 transition-all duration-500 group">
<div>
<div className="flex gap-1 text-sand-300 mb-8">
<svg className="iconify iconify--lucide fill-sand-300" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<svg className="iconify iconify--lucide fill-sand-300" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<svg className="iconify iconify--lucide fill-sand-300" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<svg className="iconify iconify--lucide fill-sand-300" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<svg className="iconify iconify--lucide fill-sand-300" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<p className="text-earth-700 leading-loose mb-8 font-serif font-light italic text-lg">
                                    "Ich war skeptisch, aber die sachliche Arbeitsweise hat mich angesprochen. Die Sitzungen waren eine wertvolle Unterstützung auf meinem Weg zur Rauchfreiheit."
                                </p>
</div>
<div className="border-t border-sand-100 pt-6">
<p className="font-medium text-earth-900">Michael Weber</p>
<p className="text-xs text-earth-500 mt-1 uppercase tracking-wider font-semibold">Rauchentwöhnung</p>
</div>
</div>
</div>
<div className="reveal-on-scroll delay-100">
<div className="bg-white p-10 rounded-2xl flex flex-col justify-between h-full shadow-sm hover:shadow-soft-hover border border-sand-100/60 transition-all duration-500 group">
<div>
<div className="flex gap-1 text-sand-300 mb-8">
<svg className="iconify iconify--lucide fill-sand-300" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<svg className="iconify iconify--lucide fill-sand-300" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<svg className="iconify iconify--lucide fill-sand-300" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<svg className="iconify iconify--lucide fill-sand-300" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<svg className="iconify iconify--lucide fill-sand-300" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<p className="text-earth-700 leading-loose mb-8 font-serif font-light italic text-lg">
                                    "Die Angst vor Prüfungen hat mich lange blockiert. Durch die Hypnose habe ich gelernt, meine Aufmerksamkeit anders zu fokussieren und ruhiger zu bleiben."
                                </p>
</div>
<div className="border-t border-sand-100 pt-6">
<p className="font-medium text-earth-900">Sarah K.</p>
<p className="text-xs text-earth-500 mt-1 uppercase tracking-wider font-semibold">Prüfungssituationen</p>
</div>
</div>
</div>
<div className="reveal-on-scroll delay-200">
<div className="bg-white p-10 rounded-2xl flex flex-col justify-between h-full shadow-sm hover:shadow-soft-hover border border-sand-100/60 transition-all duration-500 group">
<div className="">
<div className="flex gap-1 text-sand-300 mb-8">
<svg className="iconify iconify--lucide fill-sand-300" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<svg className="iconify iconify--lucide fill-sand-300" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<svg className="iconify iconify--lucide fill-sand-300" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<svg className="iconify iconify--lucide fill-sand-300" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<svg className="iconify iconify--lucide fill-sand-300" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<p className="text-earth-700 leading-loose mb-8 font-serif font-light italic text-lg">
                                    "Sehr angenehme Atmosphäre. Der Ansatz ist professionell und transparent. Ich habe mich zu jeder Zeit gut begleitet und verstanden gefühlt."
                                </p>
</div>
<div className="border-t border-sand-100 pt-6">
<p className="font-medium text-earth-900">Thomas B.</p>
<p className="text-xs text-earth-500 mt-1 uppercase tracking-wider font-semibold">Gewichtsmanagement</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-paper" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-earth-900 mb-16 text-center reveal-on-scroll">Häufige Fragen</h2>
<div className="space-y-6 reveal-on-scroll delay-100" id="faq-container">
<details className="group bg-sand-50/50 rounded-2xl border border-transparent hover:border-sand-200 open:bg-white open:border-sand-200 open:shadow-soft transition-all duration-300 overflow-hidden" itemprop="mainEntity" itemscope="" itemtype="https://schema.org/Question">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-earth-900 text-lg hover:text-moss-600 transition-colors duration-300 focus:outline-none" itemprop="name">
<span>Verliere ich in Hypnose die Kontrolle?</span>
<span className="bg-white rounded-full p-1 text-sand-400 group-open:rotate-180 transition-transform duration-300">
<svg className="iconify iconify--lucide" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</span>
</summary>
<div className="text-earth-600 px-6 pb-8 text-base leading-relaxed font-light opacity-0 group-open:opacity-100 transition-opacity duration-500" itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
<div itemprop="text">Nein. Hypnose ist kein Zustand der Bewusstlosigkeit, sondern der fokussierten Aufmerksamkeit. Sie bekommen alles mit, können jederzeit sprechen und den Prozess aktiv mitgestalten. Nichts geschieht gegen Ihren Willen.</div>
</div>
</details>
<details className="group bg-sand-50/50 rounded-2xl border border-transparent hover:border-sand-200 open:bg-white open:border-sand-200 open:shadow-soft transition-all duration-300 overflow-hidden" itemprop="mainEntity" itemscope="" itemtype="https://schema.org/Question">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-earth-900 text-lg hover:text-moss-600 transition-colors duration-300 focus:outline-none" itemprop="name">
<span>Wie viele Sitzungen sind notwendig?</span>
<span className="bg-white rounded-full p-1 text-sand-400 group-open:rotate-180 transition-transform duration-300">
<svg className="iconify iconify--lucide" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</span>
</summary>
<div className="text-earth-600 px-6 pb-8 text-base leading-relaxed font-light opacity-0 group-open:opacity-100 transition-opacity duration-500" itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
<div itemprop="text">Das ist individuell verschieden und hängt vom Thema ab. Hypnose wird oft als Kurzzeittherapie genutzt. Bei Themen wie Rauchentwöhnung können wenige Sitzungen ausreichen, komplexere Anliegen erfordern oft einen etwas längeren Prozess.</div>
</div>
</details>
<details className="group bg-sand-50/50 rounded-2xl border border-transparent hover:border-sand-200 open:bg-white open:border-sand-200 open:shadow-soft transition-all duration-300 overflow-hidden" itemprop="mainEntity" itemscope="" itemtype="https://schema.org/Question">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-earth-900 text-lg hover:text-moss-600 transition-colors duration-300 focus:outline-none" itemprop="name">
<span>Wo befindet sich die Praxis?</span>
<span className="bg-white rounded-full p-1 text-sand-400 group-open:rotate-180 transition-transform duration-300">
<svg className="iconify iconify--lucide" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</span>
</summary>
<div className="text-earth-600 px-6 pb-8 text-base leading-relaxed font-light opacity-0 group-open:opacity-100 transition-opacity duration-500" itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
<div itemprop="text">Unsere Praxis für Hypnose liegt zentral in 89073 Ulm. Parkmöglichkeiten finden Sie in unmittelbarer Umgebung, zudem sind wir gut an den öffentlichen Nahverkehr angebunden.</div>
</div>
</details>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-sand-100/30 border-t border-sand-200/50">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
<div className="order-2 md:order-1 reveal-on-scroll">
<div className="relative group">
<div className="absolute -inset-3 bg-white rounded-[2rem] opacity-70 border border-sand-200"></div>
<div className="relative w-full aspect-[4/5] bg-sand-200 rounded-[1.5rem] overflow-hidden shadow-xl shadow-sand-200/60">
<img alt="Hypnosetherapeut bei Reset Inside Ulm" className="w-full h-full object-cover img-warm" height="750" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=2144&amp;auto=format&amp;fit=crop" width="600"/>
</div>
<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-soft max-w-xs border border-sand-100 hidden lg:block">
<p className="font-serif italic text-earth-800 text-lg">"Begegnung auf Augenhöhe ist der Schlüssel."</p>
</div>
</div>
</div>
<div className="order-1 md:order-2 reveal-on-scroll delay-100">
<h2 className="text-4xl font-serif font-medium tracking-tight text-earth-900 mb-8">Über Reset Inside</h2>
<div className="space-y-6 text-earth-700 leading-loose font-light text-lg">
<p>
                            Mein Ziel mit Reset Inside ist es, Menschen in Ulm und Umgebung eine fundierte Anlaufstelle für moderne Hypnosetherapie zu bieten.
                        </p>
<p>
                            In meiner Arbeit distanziere ich mich klar von Show-Effekten oder esoterischen Ansätzen. Ich verstehe Hypnose als eine kooperative Methode: Sie bringen die Kompetenz für Ihr Leben mit, ich biete Ihnen die methodische Unterstützung, um Zugang zu Ihren Ressourcen zu finden.
                        </p>
<p>
                            Diskretion, Professionalität und ein respektvoller Umgang auf Augenhöhe bilden die Basis jeder Sitzung.
                        </p>
</div>
<div className="mt-12 pt-10 border-t border-sand-200 flex gap-16">
<div>
<p className="text-4xl font-serif text-earth-900 tracking-tight">10+</p>
<p className="text-[0.65rem] font-bold uppercase tracking-widest text-moss-600 mt-2">Jahre Erfahrung</p>
</div>
<div>
<p className="text-4xl font-serif text-earth-900 tracking-tight">100%</p>
<p className="text-[0.65rem] font-bold uppercase tracking-widest text-moss-600 mt-2">Diskretion</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-earth-900 text-center relative overflow-hidden" id="kontakt">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
<div className="max-w-2xl mx-auto px-6 relative z-10 reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-serif font-medium text-sand-50 mb-8 leading-tight tracking-tight">Raum für <span className="italic text-sand-200 font-normal">Veränderung.</span></h2>
<p className="text-xl text-sand-200/80 mb-12 font-light leading-relaxed">
                    Der erste Schritt ist oft ein unverbindliches Gespräch. <br/>
                    Lassen Sie uns klären, wie ich Sie unterstützen kann.
                </p>
<a className="inline-flex items-center justify-center px-10 py-4 text-lg font-medium bg-sand-100 text-earth-900 rounded-full hover:bg-white hover:scale-105 shadow-xl shadow-black/20 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-earth-900" href="mailto:kontakt@reset-inside.de">
                    Kostenfreies Erstgespräch vereinbaren
                </a>
<p className="mt-8 text-sm text-sand-400 opacity-60 font-light">Wir antworten in der Regel innerhalb von 24h.</p>
</div>
</section>
</main>

<article className="view-section hidden-view bg-paper flex-grow" id="local-view">
<div className="pt-32 pb-20 border-b border-sand-200/50 bg-sand-50/50">
<div className="max-w-3xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-3 mb-6">
<span className="w-8 h-px bg-sand-400"></span>
<span className="text-earth-500 font-semibold tracking-widest text-xs uppercase">Standortinformationen</span>
<span className="w-8 h-px bg-sand-400"></span>
</div>
<h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-earth-900 mb-6">Hypnosetherapie in der Wissenschaftsstadt Ulm</h1>
<p className="text-xl text-earth-600 font-light leading-relaxed">
                    Hintergrundinformationen zu unserem Standort und dem wissenschaftlichen Kontext unserer Arbeit in der Region Donau-Iller.
                </p>
</div>
</div>
<div className="max-w-3xl mx-auto px-6 py-16 space-y-12">

<div className="prose prose-lg prose-stone max-w-none">
<h2 className="text-2xl font-serif font-medium text-earth-900 mb-4 tracking-tight">Einordnung der Hypnose im medizinischen Kontext Ulms</h2>
<p className="text-earth-700 leading-relaxed font-light mb-6">
                    Ulm hat sich durch die Universität Ulm und den Science Park am Eselsberg zu einem bedeutenden Standort für Medizin und Wissenschaft entwickelt. In diesem Umfeld verstehen wir Hypnosetherapie nicht als esoterische Nische, sondern als evidenzbasierte Methode, die moderne psychologische Erkenntnisse nutzt.
                </p>
<p className="text-earth-700 leading-relaxed font-light">
                    Wir arbeiten eng mit dem Verständnis zusammen, dass Veränderungsprozesse neurobiologische Grundlagen haben. Unsere Praxis in der Ulmer Innenstadt bietet einen geschützten Raum, um abseits des hektischen Klinikalltags an individuellen Themen zu arbeiten – von der Rauchentwöhnung bis zur Bewältigung von Prüfungsstress an der Universität oder den Hochschulen der Region.
                </p>
</div>

<div className="bg-white p-10 rounded-2xl border border-sand-100 shadow-sm">
<h2 className="text-2xl font-serif font-medium text-earth-900 mb-4 tracking-tight">Erreichbarkeit &amp; Einzugsgebiet</h2>
<p className="text-earth-700 leading-relaxed font-light mb-6">
                    Unsere Praxisräume befinden sich zentral in 89073 Ulm. Durch die günstige Verkehrslage sind wir nicht nur für Klienten aus der Stadtmitte oder Söflingen gut erreichbar, sondern dienen als Anlaufstelle für den gesamten Alb-Donau-Kreis und Neu-Ulm.
                </p>
<ul className="space-y-4 text-base text-earth-600 font-light">
<li className="flex items-start gap-4">
<div className="mt-1 bg-sand-100 p-1.5 rounded-full text-moss-600">
<svg className="iconify iconify--lucide" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M19 19h-6V8h-2v11H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<span><strong>ÖPNV:</strong> Wenige Gehminuten vom Ulmer Hauptbahnhof und den zentralen Straßenbahnhaltestellen.</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 bg-sand-100 p-1.5 rounded-full text-moss-600">
<svg className="iconify iconify--lucide" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><circle cx="7" cy="17" fill="none" r="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle><circle cx="17" cy="17" fill="none" r="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle><path d="m9 17l6 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<span><strong>PKW:</strong> Parkhäuser "Deutschhaus" und "Salzstadel" in unmittelbarer Nähe. Gute Anbindung über die B10 und B28 für Klienten aus Blaustein, Senden oder Langenau.</span>
</li>
</ul>
</div>
<div className="text-center pt-8">
<a className="text-moss-600 font-medium hover:text-earth-900 underline underline-offset-4 decoration-1 transition-all" href="#kontakt" onclick="switchView('home')">
                    Zurück zur Startseite &amp; Kontakt
                </a>
</div>
</div>
</article>

<footer className="bg-sand-50/80 text-earth-600 py-20 border-t border-sand-200 mt-auto">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="mb-6 opacity-100">
<div className="flex flex-col">
<span className="font-serif font-medium text-2xl tracking-tighter text-earth-900 leading-none">Reset Inside</span>
<span className="text-[0.6rem] uppercase tracking-[0.25em] text-sand-500 font-semibold mt-1.5 ml-0.5">Hypnose Ulm</span>
</div>
</div>
<address className="text-sm leading-relaxed text-earth-600 font-light not-italic">
                    Praxis für Hypnosetherapie.<br/>
                    Musterstraße 12<br/>
                    89073 Ulm<br/>
                    Deutschland
                </address>
<div className="mt-4 text-xs font-light text-earth-500 max-w-xs">
                    Einzugsgebiet: Ulm, Neu-Ulm, Blaustein, Senden &amp; Alb-Donau-Kreis.
                </div>
</div>
<nav aria-label="Footer Themen-Navigation">
<h4 className="text-earth-900 font-serif font-medium mb-6">Arbeitsfelder</h4>
<ul className="space-y-3 text-sm font-light text-earth-600">
<li><a className="hover:text-earth-900 transition-colors duration-300 block" href="#anwendungsgebiete" onclick="switchView('home')">Rauchentwöhnung</a></li>
<li><a className="hover:text-earth-900 transition-colors duration-300 block" href="#anwendungsgebiete" onclick="switchView('home')">Gewichtsmanagement</a></li>
<li><a className="hover:text-earth-900 transition-colors duration-300 block" href="#anwendungsgebiete" onclick="switchView('home')">Ängste &amp; Phobien</a></li>
<li><a className="hover:text-earth-900 transition-colors duration-300 block" href="#anwendungsgebiete" onclick="switchView('home')">Stressbewältigung</a></li>
</ul>
</nav>
<nav aria-label="Footer Unternehmens-Navigation">
<h4 className="text-earth-900 font-serif font-medium mb-6">Praxis</h4>
<ul className="space-y-3 text-sm font-light text-earth-600">
<li><a className="hover:text-earth-900 transition-colors duration-300 block" href="#warum" onclick="switchView('home')">Methode &amp; Ansatz</a></li>
<li><a className="hover:text-earth-900 transition-colors duration-300 block" href="#ablauf" onclick="switchView('home')">Ablauf &amp; Honorar</a></li>
<li><a className="hover:text-earth-900 transition-colors duration-300 block" href="#faq" onclick="switchView('home')">Häufige Fragen</a></li>
<li><a className="hover:text-earth-900 transition-colors duration-300 block" href="#hypnose-in-ulm" onclick="switchView('local')">Wissenswertes: Standort Ulm</a></li>
</ul>
</nav>
<nav aria-label="Rechtliches">
<h4 className="text-earth-900 font-serif font-medium mb-6">Rechtliches</h4>
<ul className="space-y-3 text-sm font-light text-earth-600">
<li><a className="hover:text-earth-900 transition-colors duration-300 block" href="#">Impressum</a></li>
<li><a className="hover:text-earth-900 transition-colors duration-300 block" href="#">Datenschutz</a></li>
<li><a className="hover:text-earth-900 transition-colors duration-300 block" href="#">AGB</a></li>
</ul>
</nav>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-sand-200 flex flex-col md:flex-row justify-between items-center text-sm text-earth-500 font-light">
<p>© 2024 Reset Inside. Alle Rechte vorbehalten.</p>
<div className="flex gap-6 mt-6 md:mt-0 opacity-60">
<a aria-label="Instagram" className="hover:text-earth-900 transition-colors duration-300" href="#"><svg className="iconify iconify--lucide" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a aria-label="Facebook" className="hover:text-earth-900 transition-colors duration-300" href="#"><svg className="iconify iconify--lucide" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg></a>
</div>
</div>
</footer>


    </>
  );
}
