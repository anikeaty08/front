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



            function toggleService(index) {
                for (let i = 1; i <= 5; i++) {
                    const isSelected = i === index;
                    
                    const desktopImg = document.getElementById(`service-desktop-img-${i}`);
                    if (desktopImg) desktopImg.style.opacity = isSelected ? '1' : '0';
                    
                    const content = document.getElementById(`service-content-${i}`);
                    if (content) content.className = isSelected 
                        ? 'grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out' 
                        : 'grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out';
                    
                    const inner = document.getElementById(`service-inner-${i}`);
                    if (inner) {
                        inner.className = isSelected
                            ? 'pt-2 pb-4 opacity-100 transition-opacity duration-500 delay-100'
                            : 'pt-0 pb-0 opacity-0 transition-opacity duration-500 delay-100';
                    }

                    const title = document.getElementById(`service-title-${i}`);
                    if (title) {
                        title.className = isSelected
                            ? 'text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 transition-colors mb-4'
                            : 'text-2xl md:text-3xl font-medium tracking-tight text-neutral-500 transition-colors mb-4';
                    }
                    
                    const num = document.getElementById(`service-num-${i}`);
                    if (num) {
                        num.className = isSelected
                            ? 'text-xl font-mono text-neutral-900 transition-colors pt-2'
                            : 'text-xl font-mono text-neutral-400 transition-colors pt-2';
                    }

                    const icon = document.getElementById(`service-icon-${i}`);
                    if (icon) {
                        icon.className = isSelected
                            ? 'w-10 h-10 rounded-full border border-neutral-900 bg-neutral-900 text-white flex items-center justify-center transition-all ml-4 shrink-0'
                            : 'w-10 h-10 rounded-full border border-neutral-200 bg-transparent text-neutral-400 flex items-center justify-center transition-all ml-4 shrink-0';
                        
                        const svg = icon.querySelector('svg');
                        if (svg) {
                            svg.setAttribute('class', isSelected 
                                ? 'transition-transform duration-300 rotate-0' 
                                : 'transition-transform duration-300 -rotate-45');
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
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-neutral-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-lg font-semibold tracking-widest uppercase" href="#">SARIKAYA</a>
<div className="hidden md:flex gap-8 text-sm font-medium text-neutral-500">
<a className="transition-colors hover:text-neutral-900" href="#about">About</a>
<a className="transition-colors hover:text-neutral-900" href="#vision">Vision</a>
<a className="transition-colors hover:text-neutral-900" href="#work">Work</a>
<a className="transition-colors hover:text-neutral-900" href="#skills">Skills</a>
<a className="transition-colors hover:text-neutral-900" href="#app">App</a>
</div>
<a className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-colors group bg-neutral-900 text-neutral-50 hover:bg-neutral-800" href="#contact">
                Kontakt
                <svg aria-hidden="true" className="iconify group-hover:translate-x-0.5 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<button className="md:hidden p-2 text-neutral-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<header className="relative pt-24 pb-12 lg:pt-32 lg:pb-12 overflow-hidden bg-white">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

<div className="lg:col-span-7 flex flex-col gap-10 lg:gap-14">

<div className="space-y-2 lg:space-y-4">
<h1 className="font-oswald text-6xl md:text-7xl lg:text-[7rem] font-medium leading-[0.9] tracking-tighter uppercase text-neutral-900">
                            Ich baue die Zukunft.
                        </h1>
<div className="flex items-center gap-4 lg:gap-6 flex-wrap">
<div className="h-14 md:h-20 w-32 md:w-56 rounded-full overflow-hidden relative shrink-0 border shadow-sm border-neutral-100">
<img alt="Focus" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<h1 className="font-oswald text-6xl md:text-7xl lg:text-[7rem] font-medium leading-[0.9] tracking-tighter uppercase text-neutral-900">
                                — Schon jetzt.
                            </h1>
</div>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center gap-8 lg:gap-12 mt-2">
<p className="text-neutral-500 text-base md:text-lg max-w-sm font-light leading-relaxed">
                            18 • Fachabi + Jahrespraktikum 2025/26 • Strategisch. Schnell. Mit trockenem Humor.
                        </p>
<a className="inline-flex items-center justify-center h-14 px-10 rounded-full text-sm font-medium tracking-wider uppercase transition-all shrink-0 shadow-lg bg-neutral-900 text-white hover:bg-neutral-800 shadow-neutral-900/20" href="#work">
                            Meine Projekte sehen
                        </a>
</div>

<div className="flex flex-wrap gap-x-12 gap-y-6 pt-4">
<div className="flex items-center gap-3">
<span className="font-oswald text-4xl md:text-5xl tracking-tight text-neutral-800">18</span>
<span className="text-xs text-neutral-500 leading-tight max-w-[80px] font-medium">Jahre<br/>jung</span>
</div>
<div className="flex items-center gap-3">
<span className="font-oswald text-4xl md:text-5xl tracking-tight text-neutral-800">2026</span>
<span className="text-xs text-neutral-500 leading-tight max-w-[80px] font-medium">App<br/>Launch</span>
</div>
<div className="flex items-center gap-3">
<span className="font-oswald text-4xl md:text-5xl tracking-tight text-neutral-800">100%</span>
<span className="text-xs text-neutral-500 leading-tight max-w-[80px] font-medium">Fokus &amp;<br/>Energie</span>
</div>
</div>

<div className="hidden md:block relative h-64 w-full rounded-[2rem] overflow-hidden mt-auto group shadow-sm border border-neutral-100">
<img alt="Code" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute right-6 bottom-6 flex flex-col gap-2 z-10">
<button className="w-10 h-10 rounded-full backdrop-blur border flex items-center justify-center transition-colors shadow-sm bg-white/90 border-white/20 hover:bg-white text-neutral-900">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
</button>
<button className="w-10 h-10 rounded-full backdrop-blur border flex items-center justify-center transition-colors shadow-sm bg-white/90 border-white/20 hover:bg-white text-neutral-900">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
<div className="absolute inset-0 bg-gradient-to-t to-transparent pointer-events-none from-neutral-900/10"></div>
</div>
</div>

<div className="lg:col-span-5 relative h-[600px] lg:h-auto min-h-[600px] rounded-[2rem] overflow-hidden shadow-xl group bg-neutral-100">
<img alt="Vision" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-6 right-6 flex gap-3 z-20">
<a className="w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-md bg-white hover:bg-neutral-100 text-neutral-900" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</a>
<a className="w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-md bg-white hover:bg-neutral-100 text-neutral-900" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
</a>
</div>

<div className="absolute top-6 left-6 max-w-[220px] rounded-2xl p-3 shadow-xl z-20 bg-white">
<div className="h-24 rounded-xl overflow-hidden mb-3 relative">
<img alt="App Preview" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-[10px] font-medium mb-3 leading-snug text-neutral-600">
                            Ziel: Chaos in Struktur verwandeln – ohne dass die Magie verloren geht.
                        </p>
<button className="w-8 h-8 rounded-full flex items-center justify-center ml-auto transition-colors bg-neutral-900 text-white hover:bg-neutral-800">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</button>
</div>

<div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t to-transparent flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 z-20 from-black/80 via-black/40">
<p className="text-sm max-w-xs font-light leading-relaxed drop-shadow-sm text-white/90">
                            Ich arbeite an einer Produktivitäts-App speziell für junge Creator, Maker und schnelle Denker.
                        </p>
<a className="px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 shadow-lg bg-white text-neutral-900 hover:bg-neutral-100" href="#app">
                            Vision &amp; kommende App
                        </a>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 border-b bg-white border-neutral-200" id="about">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative bg-neutral-100">
<img alt="Portrait" className="w-full h-full object-cover grayscale opacity-80 hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 backdrop-blur px-4 py-2 rounded-md border bg-white/90 border-white/20">
<p className="text-xs font-medium text-neutral-900">Suheyl Sarikaya</p>
</div>
</div>
</div>
<div className="lg:w-1/2">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-6 text-neutral-900">
                    Hey, ich bin <span className="text-neutral-400">Suheyl.</span>
</h2>
<div className="space-y-6 text-sm md:text-base leading-relaxed max-w-lg text-neutral-600">
<p>
                        Ich bin 18, mache gerade Fachabitur und ein Jahrespraktikum. Ich habe entschieden, dass "später mal" jetzt ist.
                    </p>
<p>
                        Ich liebe es, Probleme strategisch zu zerlegen, schnell zu lernen und saubere Ergebnisse zu liefern. Humor gehört bei mir dazu – ohne wird alles schnell langweilig.
                    </p>
<p className="font-semibold text-neutral-900 text-lg">
                        Ich pack das jetzt schon – und werde noch deutlich besser.
                    </p>
</div>
<div className="mt-10 flex gap-4">
<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg> Strategie
                     </div>
<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg> Code
                     </div>
<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg> Umsetzung
                     </div>
</div>
</div>
</div>
</section>

<div className="w-full h-96 md:h-[400px] relative overflow-hidden bg-neutral-200">
<img alt="Minimalist" className="w-full h-full object-cover grayscale opacity-90" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-neutral-900/10"></div>
</div>

<section className="py-24 px-6 border-b bg-white border-neutral-200" id="vision">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
<div className="lg:w-1/2">
<div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative bg-neutral-100">
<img alt="Vision" className="w-full h-full object-cover grayscale opacity-80 hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2301&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="lg:w-1/2">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-6 text-neutral-900">
                    Wo ich in <span className="text-neutral-400">2–4 Jahren</span> stehen will
                </h2>
<div className="space-y-6 text-sm md:text-base leading-relaxed max-w-lg text-neutral-600">
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="mt-1 w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0"></span>
                            Vollzeit-Entwickler oder Product Builder in einem schnell wachsenden Tech-/Startup-Team
                        </li>
<li className="flex items-start gap-3">
<span className="mt-1 w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0"></span>
                            Eigene App launchen (Produktivitäts-Tool speziell für junge Creator und Maker)
                        </li>
<li className="flex items-start gap-3">
<span className="mt-1 w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0"></span>
                            Zusammenarbeit mit Menschen, die deutlich schneller denken als der Durchschnitt
                        </li>
<li className="flex items-start gap-3">
<span className="mt-1 w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0"></span>
                            Erste bezahlte Projekte &amp; Side-Hustles aufbauen
                        </li>
<li className="flex items-start gap-3">
<span className="mt-1 w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0"></span>
                            Langfristig eigene kleine Produkt-/Studio-Struktur aufbauen
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-t pt-24 pr-6 pb-24 pl-6 bg-white border-neutral-200" id="work">
<div className="max-w-7xl mx-auto">
<span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase block mb-20">Was ich bewege</span>
<div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative gap-x-12 gap-y-12 items-start">

<div className="w-full lg:w-5/12 lg:sticky lg:top-32 h-[300px] lg:h-[500px] rounded-2xl overflow-hidden shadow-sm order-2 lg:order-1 hidden lg:block bg-neutral-100">
<div className="relative w-full h-full">
<img alt="Work 1" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-100 z-10" id="service-desktop-img-1" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=2160&amp;q=80"/>
<img alt="Work 2" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-0 z-10" id="service-desktop-img-2" src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=2160&amp;q=80"/>
<img alt="Work 3" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-0 z-10" id="service-desktop-img-3" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=2160&amp;q=80"/>
<img alt="Work 4" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-0 z-10" id="service-desktop-img-4" src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=2160&amp;q=80"/>
<img alt="Work 5" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-0 z-10" id="service-desktop-img-5" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent z-20 pointer-events-none from-neutral-900/20"></div>
</div>
</div>

<div className="w-full lg:w-7/12 flex flex-col order-1 lg:order-2">

<div className="border-b py-8 cursor-pointer border-neutral-200" onclick="toggleService(1)">
<div className="flex items-start gap-6 md:gap-12">
<span className="text-xl font-mono transition-colors pt-2 text-neutral-900" id="service-num-1">01</span>
<div className="flex-1 w-full">
<div className="flex justify-between items-start w-full">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight transition-colors mb-4 text-neutral-900" id="service-title-1">Interne Prozessautomatisierung</h3>
<div className="w-10 h-10 rounded-full border flex items-center justify-center transition-all ml-4 shrink-0 border-neutral-900 bg-neutral-900 text-white" id="service-icon-1">
<svg className="transition-transform duration-300 rotate-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
<div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out" id="service-content-1">
<div className="overflow-hidden">
<div className="pt-2 pb-4 opacity-100 transition-opacity duration-500 delay-100" id="service-inner-1">
<p className="text-neutral-500 leading-relaxed max-w-lg mb-6 text-base">
                                                42% Zeitersparnis bei wiederkehrenden Reports. Durch gezielte Automatisierung wurden manuelle Schritte eliminiert.
                                            </p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="cursor-pointer border-b py-8 border-neutral-200" onclick="toggleService(2)">
<div className="flex items-start gap-6 md:gap-12">
<span className="text-xl font-mono transition-colors pt-2 text-neutral-400" id="service-num-2">02</span>
<div className="flex-1 w-full">
<div className="flex justify-between items-start w-full">
<h3 className="md:text-3xl transition-colors text-2xl font-medium text-neutral-500 tracking-tight mb-4" id="service-title-2">UI/UX Redesign Projekt</h3>
<div className="w-10 h-10 rounded-full border bg-transparent flex items-center justify-center transition-all ml-4 shrink-0 border-neutral-200 text-neutral-400" id="service-icon-2">
<svg className="transition-transform duration-300 -rotate-45" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out" id="service-content-2">
<div className="overflow-hidden">
<div className="pt-0 pb-0 opacity-0 transition-opacity duration-500 delay-100" id="service-inner-2">
<p className="text-neutral-500 leading-relaxed max-w-lg mb-6 text-base">
                                                Von veraltet zu modern in wenigen Wochen. Fokus auf Klarheit, Usability und moderne Design-Patterns.
                                            </p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-b py-8 cursor-pointer border-neutral-200" onclick="toggleService(3)">
<div className="flex items-start gap-6 md:gap-12">
<span className="text-xl font-mono transition-colors pt-2 text-neutral-400" id="service-num-3">03</span>
<div className="flex-1 w-full">
<div className="flex justify-between items-start w-full">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-500 transition-colors mb-4" id="service-title-3">Automatisierungs-Tool (Python)</h3>
<div className="w-10 h-10 rounded-full border bg-transparent flex items-center justify-center transition-all ml-4 shrink-0 border-neutral-200 text-neutral-400" id="service-icon-3">
<svg className="transition-transform duration-300 -rotate-45" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out" id="service-content-3">
<div className="overflow-hidden">
<div className="pt-0 pb-0 opacity-0 transition-opacity duration-500 delay-100" id="service-inner-3">
<p className="text-neutral-500 leading-relaxed max-w-lg mb-6 text-base">
                                                Erstes eigenes Tool zur Datenverarbeitung. Effizient, schnell und skalierbar geschrieben.
                                            </p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-b py-8 cursor-pointer border-neutral-200" onclick="toggleService(4)">
<div className="flex items-start gap-6 md:gap-12">
<span className="text-xl font-mono transition-colors pt-2 text-neutral-400" id="service-num-4">04</span>
<div className="flex-1 w-full">
<div className="flex justify-between items-start w-full">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-500 transition-colors mb-4" id="service-title-4">Personal Brand Website</h3>
<div className="w-10 h-10 rounded-full border bg-transparent flex items-center justify-center transition-all ml-4 shrink-0 border-neutral-200 text-neutral-400" id="service-icon-4">
<svg className="transition-transform duration-300 -rotate-45" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out" id="service-content-4">
<div className="overflow-hidden">
<div className="pt-0 pb-0 opacity-0 transition-opacity duration-500 delay-100" id="service-inner-4">
<p className="text-neutral-500 leading-relaxed max-w-lg mb-6 text-base">
                                                Aufbau dieser digitalen Präsenz. Clean Code, Tailwind, Performance-optimiert.
                                            </p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-b py-8 cursor-pointer border-neutral-200" onclick="toggleService(5)">
<div className="flex items-start gap-6 md:gap-12">
<span className="text-xl font-mono transition-colors pt-2 text-neutral-400" id="service-num-5">05</span>
<div className="flex-1 w-full">
<div className="flex justify-between items-start w-full">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-500 transition-colors mb-4" id="service-title-5">Aktuelles Lernprojekt</h3>
<div className="w-10 h-10 rounded-full border bg-transparent flex items-center justify-center transition-all ml-4 shrink-0 border-neutral-200 text-neutral-400" id="service-icon-5">
<svg className="transition-transform duration-300 -rotate-45" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out" id="service-content-5">
<div className="overflow-hidden">
<div className="pt-0 pb-0 opacity-0 transition-opacity duration-500 delay-100" id="service-inner-5">
<p className="text-neutral-500 leading-relaxed max-w-lg mb-6 text-base">
                                                Noch unter Verschluss – wird stark. Ein Deep-Dive in moderne Web-Technologien.
                                            </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="py-24 px-6 bg-white" id="skills">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:flex justify-between items-end">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Meine aktuelle Power</h2>
<p className="text-neutral-500 max-w-md">Stand Januar 2026. Ständiges Lernen ist der Standard.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border rounded-2xl overflow-hidden shadow-sm bg-neutral-200 border-neutral-200">

<div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chess-knight" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.654 0 3-1.346 3-3V7c0-1.654-1.346-3-3-3s-3 1.346-3 3v1h-4V7c0-1.654-1.346-3-3-3S6 5.346 6 7v4c0 1.654 1.346 3 3 3h10zM5 19h14M7 16h10M9 19v2h6v-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Strategisches Denken</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        93% – Planvoll vorgehen, Risiken abwägen und das Ziel nicht aus den Augen verlieren.
                    </p>
</div>

<div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Schnell lernen</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        96% – Neue Tools, Sprachen oder Frameworks adaptiere ich extrem schnell.
                    </p>
</div>

<div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:puzzle" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19.439 15.424a1 1 0 0 0-1.015 1.014c0 1.258-1.02 2.278-2.278 2.278c-1.258 0-2.278-1.02-2.278-2.278c0-1.258-1.02-2.278-2.278-2.278c-1.258 0-2.278 1.02-2.278 2.278c0 1.258-1.02 2.278-2.278 2.278c-1.258 0-2.278-1.02-2.278-2.278c0-1.258-1.02-2.278-2.278-2.278c-1.258 0-2.278 1.02-2.278 2.278A1 1 0 0 0 1.015 17.702l2.924 2.924a1 1 0 0 0 1.414 0l2.924-2.924a1 1 0 0 0 0-1.414L5.353 13.364a1 1 0 0 1 1.015-1.015" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Probleme zerlegen</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        91% – Komplexe Herausforderungen in machbare Schritte unterteilen.
                    </p>
</div>

<div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:code-2" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="m6 8-4 4 4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="m14.5 4-5 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">HTML • CSS • Tailwind</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        88% – Modernes Frontend. Schnell, responsiv und sauber strukturiert.
                    </p>
</div>

<div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:terminal" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" points="4 17 10 11 4 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="20" y1="19" y2="19"></line></svg>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Python &amp; Auto</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        80% – Skripte schreiben, Prozesse automatisieren und Daten bändigen.
                    </p>
</div>

<div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-square" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Kommunikation</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        89% – Klare Ansagen. Präzises Feedback. Kein unnötiges Blabla.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900 text-white" id="app">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">Meine eigene App</h2>
<p className="text-neutral-400">Chaos in Struktur verwandeln – ohne dass die Magie verloren geht.</p>
</div>
<a className="text-sm border-b pb-1 transition-colors border-neutral-700 hover:border-white" href="#contact">Stay Tuned</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="border-l pl-6 relative border-neutral-800">
<span className="font-mono text-xs mb-4 block text-neutral-600">01</span>
<h3 className="text-lg font-medium mb-3 text-white">Die Idee</h3>
<p className="text-sm leading-relaxed text-neutral-400">Ich arbeite gerade an einer Produktivitäts-App speziell für junge Creator, Maker und schnelle Denker.</p>
</div>
<div className="border-l pl-6 relative border-neutral-800">
<span className="font-mono text-xs mb-4 block text-neutral-600">02</span>
<h3 className="text-lg font-medium mb-3 text-white">Das Ziel</h3>
<p className="text-sm leading-relaxed text-neutral-400">Fokus schaffen, ohne die Kreativität einzuschränken. Ein Tool, das so schnell denkt wie du.</p>
</div>
<div className="border-l pl-6 relative border-neutral-800">
<span className="font-mono text-xs mb-4 block text-neutral-600">03</span>
<h3 className="text-lg font-medium mb-3 text-white">Launch</h3>
<p className="text-sm leading-relaxed text-neutral-400">Geplant für Ende 2026 / Anfang 2027. Die Entwicklung läuft bereits auf Hochtouren.</p>
</div>
<div className="border-l pl-6 relative border-neutral-800">
<span className="font-mono text-xs mb-4 block text-neutral-600">04</span>
<h3 className="text-lg font-medium mb-3 text-white">Mitmachen</h3>
<p className="text-sm leading-relaxed text-neutral-400">Early Feedback, Ideen oder Kollaboration? Schreib mir gerne, wenn du Input hast!</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center bg-neutral-50" id="contact">
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6 text-neutral-900">Lass uns reden. Ohne Bullshit.</h2>
<p className="text-neutral-500 text-lg mb-10 max-w-lg mx-auto">
                hi@sarikaya.de | @sari_kaya<br/>
                Antworte garantiert in &lt;48h – sonst darfst du mich beleidigen.
            </p>
<form className="max-w-md mx-auto space-y-4 text-left">
<div>
<label className="sr-only" htmlFor="email">Email</label>
<input className="w-full border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all placeholder:text-neutral-400 bg-white border-neutral-300" id="email" placeholder="Deine E-Mail Adresse" type="email"/>
</div>
<button className="w-full font-medium rounded-md px-4 py-3 text-sm transition-colors flex justify-center items-center gap-2 bg-neutral-900 text-white hover:bg-neutral-800" type="button">
                    Nachricht senden
                </button>
<p className="text-xs text-center mt-4 text-neutral-400">Direkter Draht. Professionell &amp; Schnell.</p>
</form>
</div>
</section>

<footer className="border-t pt-16 pb-8 px-6 bg-white border-neutral-200">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="text-lg font-semibold tracking-widest uppercase block mb-6" href="#">SARIKAYA</a>
<p className="text-neutral-500 text-sm max-w-xs leading-relaxed">
                        Strategisch. Schnell. Sauber.
                        Personal Brand Website.
                    </p>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-neutral-900">Inhalt</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="transition-colors hover:text-neutral-900" href="#about">About</a></li>
<li><a className="transition-colors hover:text-neutral-900" href="#vision">Vision</a></li>
<li><a className="transition-colors hover:text-neutral-900" href="#work">Work</a></li>
<li><a className="transition-colors hover:text-neutral-900" href="#app">App</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-neutral-900">Kontakt</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg> Deutschland
                        </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg> hi@sarikaya.de
                        </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:at-sign" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="none" r="4" stroke="currentColor" strokeWidth="2"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" fill="none" stroke="currentColor" strokeWidth="2"></path></svg> @sari_kaya
                        </li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-neutral-100">
<p className="text-xs text-neutral-400">© 2026 Suheyl Sarikaya. All rights reserved.</p>
<div className="flex gap-4">
<a className="transition-colors text-neutral-400 hover:text-neutral-900" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="transition-colors text-neutral-400 hover:text-neutral-900" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
