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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const views = ['home', 'start', 'learn', 'knowledge', 'about', 'login', 'phase-detail', 'topic-detail'];
        
        const breadcrumbNames = {
            'home': 'Home',
            'start': 'Starte Hier',
            'learn': 'Lernweg',
            'knowledge': 'Wissenssammlung',
            'about': 'Über Uns',
            'login': 'Login',
            'phase-detail': 'Micro-Garten Grundlagen',
            'topic-detail': 'Balkon Pflanzen'
        };

        function navigate(targetView) {
            // Update Views
            views.forEach(v => {
                const el = document.getElementById(`view-${v}`);
                if(el) {
                    if(v === targetView) {
                        el.classList.add('active');
                    } else {
                        el.classList.remove('active');
                    }
                }
            });

            // Update Nav Active State
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('text-white', 'bg-white/5');
                link.classList.add('text-white/70');
                if(link.getAttribute('onclick').includes(`'${targetView}'`)) {
                    link.classList.remove('text-white/70');
                    link.classList.add('text-white', 'bg-white/5');
                }
            });

            // Handle Breadcrumbs
            const bcContainer = document.getElementById('breadcrumb-container');
            const bcCurrent = document.getElementById('breadcrumb-current');
            
            if(targetView === 'home') {
                bcContainer.classList.add('hidden');
            } else {
                bcContainer.classList.remove('hidden');
                bcCurrent.textContent = breadcrumbNames[targetView] || targetView;
            }

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
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
      

<nav className="bg-[#3E5F55] sticky top-0 z-50 shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 md:h-20">
<div className="flex-shrink-0 cursor-pointer" onclick="navigate('home')">
<span className="font-inter font-medium text-lg uppercase tracking-tighter text-white">UMG</span>
</div>
<div className="flex h-full items-end overflow-x-auto no-scrollbar ml-8">
<button className="nav-link active flex-shrink-0 px-4 md:px-6 py-4 h-full flex items-center justify-center text-sm md:text-base font-medium uppercase tracking-wider transition-all duration-200 whitespace-nowrap text-white/70 hover:text-white hover:bg-white/5 border-b-2 border-transparent" onclick="navigate('home')">
<iconify-icon className="mr-2 text-lg" icon="solar:home-2-linear"></iconify-icon> Home
                    </button>
<button className="nav-link flex-shrink-0 px-4 md:px-6 py-4 h-full flex items-center justify-center text-sm md:text-base font-medium uppercase tracking-wider transition-all duration-200 whitespace-nowrap text-white/70 hover:text-white hover:bg-white/5 border-b-2 border-transparent" onclick="navigate('start')">
<iconify-icon className="mr-2 text-lg" icon="solar:leaf-linear"></iconify-icon> Starte Hier
                    </button>
<button className="nav-link flex-shrink-0 px-4 md:px-6 py-4 h-full flex items-center justify-center text-sm md:text-base font-medium uppercase tracking-wider transition-all duration-200 whitespace-nowrap text-white/70 hover:text-white hover:bg-white/5 border-b-2 border-transparent" onclick="navigate('learn')">
<iconify-icon className="mr-2 text-lg" icon="solar:book-2-linear"></iconify-icon> Lernweg
                    </button>
<button className="nav-link flex-shrink-0 px-4 md:px-6 py-4 h-full flex items-center justify-center text-sm md:text-base font-medium uppercase tracking-wider transition-all duration-200 whitespace-nowrap text-white/70 hover:text-white hover:bg-white/5 border-b-2 border-transparent" onclick="navigate('knowledge')">
<iconify-icon className="mr-2 text-lg" icon="solar:library-linear"></iconify-icon> Wissen
                    </button>
<button className="nav-link flex-shrink-0 px-4 md:px-6 py-4 h-full flex items-center justify-center text-sm md:text-base font-medium uppercase tracking-wider transition-all duration-200 whitespace-nowrap text-white/70 hover:text-white hover:bg-white/5 border-b-2 border-transparent" onclick="navigate('about')">
<iconify-icon className="mr-2 text-lg" icon="solar:info-circle-linear"></iconify-icon> Über Uns
                    </button>
<button className="nav-link flex-shrink-0 px-4 md:px-6 py-4 h-full flex items-center justify-center text-sm md:text-base font-medium uppercase tracking-wider transition-all duration-200 whitespace-nowrap text-white/70 hover:text-white hover:bg-white/5 border-b-2 border-transparent" onclick="navigate('login')">
<iconify-icon className="mr-2 text-lg" icon="solar:widget-linear"></iconify-icon> Login
                    </button>
</div>
</div>
</div>
</nav>

<nav aria-label="Breadcrumb" className="bg-white py-4 border-b border-[#D7DDD9]/50 hidden" id="breadcrumb-container">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<ol className="flex items-center space-x-2 text-xs font-medium uppercase tracking-widest text-[#6F6F6F]">
<li className="flex items-center">
<button className="hover:text-[#222222] transition-colors flex items-center" onclick="navigate('home')">
<iconify-icon className="mr-1" icon="solar:home-2-linear"></iconify-icon>
<span className="hidden sm:inline">Home</span>
</button>
</li>
<li><iconify-icon className="text-[#D7DDD9]" icon="solar:alt-arrow-right-linear"></iconify-icon></li>
<li>
<span aria-current="page" className="text-[#222222] font-medium" id="breadcrumb-current">Current</span>
</li>
</ol>
</div>
</nav>
<main className="flex-grow flex flex-col">

<div className="view-section active" id="view-home">

<div className="relative bg-[#3E5F55] overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Balkon Garten" className="w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#3E5F55] via-[#3E5F55]/95 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col justify-center min-h-[70vh]">
<div className="max-w-2xl">
<h1 className="font-inter text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 font-semibold tracking-tight">
                            Pflanze Gemüse &amp; Heilkräuter an <br/>
<span className="text-[#BFA58A] italic font-medium opacity-90">– auch in den kleinsten Flächen</span>
</h1>
<p className="text-lg md:text-xl text-white/80 mb-10 font-light leading-relaxed max-w-xl">
                            Eine Schritt-für-Schritt Lernplattform für Urbane Gärtner*innen mit Balkonen, Fenstersims und wenig Platz.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded text-[#3E5F55] bg-[#BFA58A] hover:bg-[#BFA58A]/90 transition-all shadow-sm" onclick="navigate('start')">
                                Starte hier
                                <iconify-icon className="ml-2 text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded text-white border border-white/20 hover:bg-white/5 transition-colors" onclick="navigate('learn')">
                                Lernweg erkunden
                            </button>
</div>
</div>
</div>
</div>

<section className="py-24 bg-[#FAFAF7]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-inter text-[#222222] font-semibold tracking-tight mb-4">Kommt dir das bekannt vor?</h2>
<p className="text-lg text-[#6F6F6F] max-w-2xl mx-auto">Viele Stadtbewohner geben ihren Traum vom eigenen Garten auf, bevor sie überhaupt angefangen haben.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded border border-[#D7DDD9]/50 shadow-sm flex flex-col">
<div className="flex items-start gap-4 mb-6">
<iconify-icon className="text-red-400 text-2xl flex-shrink-0 mt-1" icon="solar:close-circle-linear"></iconify-icon>
<h3 className="text-xl font-inter text-[#222222] font-medium tracking-tight">"Ich habe nicht genug Platz"</h3>
</div>
<div className="pl-10 mt-auto">
<div className="h-px w-full bg-[#D7DDD9]/40 mb-5"></div>
<div className="flex items-start gap-3">
<iconify-icon className="text-[#5E7F73] text-xl flex-shrink-0 mt-1" icon="solar:check-circle-linear"></iconify-icon>
<p className="text-base text-[#222222]/80 font-medium italic">Du brauchst nicht mehr Platz, du brauchst das richtige System (z.B. Vertikalgarten).</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded border border-[#D7DDD9]/50 shadow-sm flex flex-col">
<div className="flex items-start gap-4 mb-6">
<iconify-icon className="text-red-400 text-2xl flex-shrink-0 mt-1" icon="solar:close-circle-linear"></iconify-icon>
<h3 className="text-xl font-inter text-[#222222] font-medium tracking-tight">"Ich habe keinen grünen Daumen"</h3>
</div>
<div className="pl-10 mt-auto">
<div className="h-px w-full bg-[#D7DDD9]/40 mb-5"></div>
<div className="flex items-start gap-3">
<iconify-icon className="text-[#5E7F73] text-xl flex-shrink-0 mt-1" icon="solar:check-circle-linear"></iconify-icon>
<p className="text-base text-[#222222]/80 font-medium italic">Gärtnern ist ein Handwerk, das jeder durch Beobachtung und kleine Schritte lernen kann.</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded border border-[#D7DDD9]/50 shadow-sm flex flex-col">
<div className="flex items-start gap-4 mb-6">
<iconify-icon className="text-red-400 text-2xl flex-shrink-0 mt-1" icon="solar:close-circle-linear"></iconify-icon>
<h3 className="text-xl font-inter text-[#222222] font-medium tracking-tight">"Gärtnern ist in der Stadt zu kompliziert"</h3>
</div>
<div className="pl-10 mt-auto">
<div className="h-px w-full bg-[#D7DDD9]/40 mb-5"></div>
<div className="flex items-start gap-3">
<iconify-icon className="text-[#5E7F73] text-xl flex-shrink-0 mt-1" icon="solar:check-circle-linear"></iconify-icon>
<p className="text-base text-[#222222]/80 font-medium italic">Wir brechen die Komplexität in 6 machbare Phasen herunter – exakt für deinen Balkon.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-[#D7DDD9]/30">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-inter text-[#222222] font-semibold tracking-tight mb-4">Zwei Wege zu deinem Ernteglück</h2>
<p className="text-lg text-[#6F6F6F] max-w-2xl mx-auto">Ob du strukturierte Anleitung suchst oder gezielt Wissen nachschlagen möchtest – wir haben das passende Angebot.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

<div className="flex flex-col bg-[#FAFAF7] p-10 rounded border border-[#D7DDD9]/50 shadow-sm">
<div className="flex items-center gap-5 mb-8">
<div className="bg-[#3E5F55] text-white p-4 rounded shadow-sm">
<iconify-icon className="text-3xl" icon="solar:book-2-linear"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-inter text-[#222222] font-semibold tracking-tight">Dein Lernweg</h3>
<p className="text-xs font-medium uppercase tracking-widest text-[#6F6F6F] mt-1">Geführt &amp; Strukturiert</p>
</div>
</div>
<p className="text-lg text-[#222222]/80 leading-relaxed mb-10 flex-grow">
                                Unser strukturierter 6-Schritte-Pfad für Einsteiger. Wir nehmen dich an die Hand: Von der ersten Raum-Analyse bis zur nachhaltigen Ernte.
                            </p>
<div className="space-y-3 mb-10">
<div className="flex items-center gap-4 p-4 rounded bg-white border border-[#D7DDD9]/40 text-sm font-medium text-[#222222]">
<span className="text-[#6F6F6F]/50 font-mono">01</span>
<span>Micro-Garten Grundlagen</span>
</div>
<div className="flex items-center gap-4 p-4 rounded bg-white border border-[#D7DDD9]/40 text-sm font-medium text-[#222222]">
<span className="text-[#6F6F6F]/50 font-mono">02</span>
<span>Containers &amp; Space Setup</span>
</div>
<div className="flex items-center gap-4 p-4 rounded bg-white border border-[#D7DDD9]/40 text-sm font-medium text-[#222222]">
<span className="text-[#6F6F6F]/50 font-mono">03</span>
<span>Pflanzen für beschränkte Raumfläche</span>
</div>
</div>
<button className="w-full bg-[#3E5F55] text-white px-8 py-4 rounded font-medium text-base hover:bg-[#3E5F55]/90 transition-colors flex items-center justify-center gap-2" onclick="navigate('learn')">
                                Programm starten <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="flex flex-col bg-[#FAFAF7] p-10 rounded border border-[#D7DDD9]/50 shadow-sm">
<div className="flex items-center gap-5 mb-8">
<div className="bg-[#5E7F73] text-white p-4 rounded shadow-sm">
<iconify-icon className="text-3xl" icon="solar:library-linear"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-inter text-[#222222] font-semibold tracking-tight">Wissenssammlung</h3>
<p className="text-xs font-medium uppercase tracking-widest text-[#6F6F6F] mt-1">Referenz &amp; Tiefe</p>
</div>
</div>
<p className="text-lg text-[#222222]/80 leading-relaxed mb-10 flex-grow">
                                Das digitale Handbuch für gezielte Fragen. Ob Pflanzenporträts, Heilkräuter-Apotheke oder Methoden zur Haltbarmachung deiner Ernte.
                            </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
<div className="p-4 rounded bg-white border border-[#D7DDD9]/40 text-xs font-medium uppercase tracking-wider text-[#6F6F6F] flex items-center gap-3">
<iconify-icon className="text-[#5E7F73] text-lg" icon="solar:leaf-linear"></iconify-icon>
<span className="truncate">Balkon Pflanzen</span>
</div>
<div className="p-4 rounded bg-white border border-[#D7DDD9]/40 text-xs font-medium uppercase tracking-wider text-[#6F6F6F] flex items-center gap-3">
<iconify-icon className="text-[#5E7F73] text-lg" icon="solar:heart-pulse-linear"></iconify-icon>
<span className="truncate">Heilpflanzen</span>
</div>
<div className="p-4 rounded bg-white border border-[#D7DDD9]/40 text-xs font-medium uppercase tracking-wider text-[#6F6F6F] flex items-center gap-3">
<iconify-icon className="text-[#5E7F73] text-lg" icon="solar:fridge-linear"></iconify-icon>
<span className="truncate">Verarbeitung</span>
</div>
<div className="p-4 rounded bg-white border border-[#D7DDD9]/40 text-xs font-medium uppercase tracking-wider text-[#6F6F6F] flex items-center gap-3">
<iconify-icon className="text-[#5E7F73] text-lg" icon="solar:calendar-linear"></iconify-icon>
<span className="truncate">Saisonplanung</span>
</div>
</div>
<button className="w-full bg-white text-[#3E5F55] border border-[#3E5F55]/20 px-8 py-4 rounded font-medium text-base hover:bg-[#FAFAF7] transition-colors flex items-center justify-center gap-2" onclick="navigate('knowledge')">
                                Bibliothek öffnen <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>
</div>

<div className="view-section pb-24" id="view-start">
<div className="bg-[#3E5F55] text-white py-20 mb-16">
<div className="max-w-4xl mx-auto px-4 text-center">
<h1 className="font-inter text-4xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">Wie es funktioniert</h1>
<p className="text-lg md:text-xl text-white/80 font-light">Dein Weg vom "Pflanzenkiller" zum confident Urban Gardener in 4 klaren Schritten.</p>
</div>
</div>
<div className="max-w-4xl mx-auto px-4">
<div className="space-y-12 relative">

<div className="flex gap-6 md:gap-8 items-start group relative z-10">
<div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#3E5F55] text-[#BFA58A] flex items-center justify-center font-medium text-xl shadow-sm font-inter border-4 border-[#FAFAF7]">1</div>
<div className="flex-grow bg-white p-8 rounded border border-[#D7DDD9]/50 shadow-sm transition-colors">
<div className="flex items-center gap-4 mb-3 text-[#3E5F55]">
<iconify-icon className="text-2xl md:text-3xl" icon="solar:magnifer-linear"></iconify-icon>
<h3 className="font-inter text-xl md:text-2xl font-semibold tracking-tight">Raum-Analyse</h3>
</div>
<p className="text-base text-[#6F6F6F] leading-relaxed">Finde heraus, was auf deinem Platz möglich ist (Licht, Wind, Statik).</p>
</div>
</div>
<div className="flex gap-6 md:gap-8 items-start group relative z-10">
<div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#3E5F55] text-[#BFA58A] flex items-center justify-center font-medium text-xl shadow-sm font-inter border-4 border-[#FAFAF7]">2</div>
<div className="flex-grow bg-white p-8 rounded border border-[#D7DDD9]/50 shadow-sm transition-colors">
<div className="flex items-center gap-4 mb-3 text-[#3E5F55]">
<iconify-icon className="text-2xl md:text-3xl" icon="solar:layout-linear"></iconify-icon>
<h3 className="font-inter text-xl md:text-2xl font-semibold tracking-tight">System-Plan</h3>
</div>
<p className="text-base text-[#6F6F6F] leading-relaxed">Wähle Töpfe und Pflanzen, die deinem Lebensstil entsprechen.</p>
</div>
</div>
<div className="flex gap-6 md:gap-8 items-start group relative z-10">
<div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#3E5F55] text-[#BFA58A] flex items-center justify-center font-medium text-xl shadow-sm font-inter border-4 border-[#FAFAF7]">3</div>
<div className="flex-grow bg-white p-8 rounded border border-[#D7DDD9]/50 shadow-sm transition-colors">
<div className="flex items-center gap-4 mb-3 text-[#3E5F55]">
<iconify-icon className="text-2xl md:text-3xl" icon="solar:book-2-linear"></iconify-icon>
<h3 className="font-inter text-xl md:text-2xl font-semibold tracking-tight">Lernweg</h3>
</div>
<p className="text-base text-[#6F6F6F] leading-relaxed">Folge unserem geführten 6-Phasen-Programm für maximale Sicherheit.</p>
</div>
</div>
<div className="flex gap-6 md:gap-8 items-start group relative z-10">
<div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#3E5F55] text-[#BFA58A] flex items-center justify-center font-medium text-xl shadow-sm font-inter border-4 border-[#FAFAF7]">4</div>
<div className="flex-grow bg-white p-8 rounded border border-[#D7DDD9]/50 shadow-sm transition-colors">
<div className="flex items-center gap-4 mb-3 text-[#3E5F55]">
<iconify-icon className="text-2xl md:text-3xl" icon="solar:waterdrops-linear"></iconify-icon>
<h3 className="font-inter text-xl md:text-2xl font-semibold tracking-tight">Anbau &amp; Pflege</h3>
</div>
<p className="text-base text-[#6F6F6F] leading-relaxed">Begleite mit unseren Anleitungen deine Pflanzen bis zur Ernte.</p>
</div>
</div>

<div className="absolute left-6 md:left-8 top-8 bottom-8 w-px bg-[#D7DDD9] z-0 ml-[0.5px]"></div>
</div>
<div className="mt-20 bg-white p-8 md:p-10 rounded border border-[#D7DDD9]/50 flex flex-col md:flex-row items-center gap-8 shadow-sm">
<div className="bg-[#FAFAF7] p-6 rounded-full border border-[#D7DDD9]/30">
<iconify-icon className="text-4xl text-[#5E7F73]" icon="solar:info-circle-linear"></iconify-icon>
</div>
<div className="flex-grow">
<h4 className="text-xs font-inter text-[#222222] font-semibold uppercase tracking-widest mb-6">Besonders geeignet für:</h4>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<li className="flex items-center gap-3 text-sm md:text-base text-[#222222]/80"><iconify-icon className="text-[#5E7F73] text-lg" icon="solar:check-read-linear"></iconify-icon> Anfänger ohne Vorwissen</li>
<li className="flex items-center gap-3 text-sm md:text-base text-[#222222]/80"><iconify-icon className="text-[#5E7F73] text-lg" icon="solar:check-read-linear"></iconify-icon> Gärtnern bei Platzmangel</li>
<li className="flex items-center gap-3 text-sm md:text-base text-[#222222]/80"><iconify-icon className="text-[#5E7F73] text-lg" icon="solar:check-read-linear"></iconify-icon> Motivierte Hobbygärtner*innen</li>
<li className="flex items-center gap-3 text-sm md:text-base text-[#222222]/80"><iconify-icon className="text-[#5E7F73] text-lg" icon="solar:check-read-linear"></iconify-icon> Stadtbewohner mit Balkon</li>
</ul>
</div>
</div>
<div className="mt-16 text-center">
<button className="bg-[#3E5F55] text-white px-10 py-4 rounded font-medium text-base hover:bg-[#3E5F55]/90 transition-all flex items-center mx-auto shadow-sm" onclick="navigate('learn')">
                        Hier klicken <iconify-icon className="ml-3 text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="view-section pb-24" id="view-learn">
<div className="bg-[#3E5F55] text-white py-20 border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 text-center">
<h1 className="text-4xl md:text-5xl font-inter font-semibold tracking-tight mb-6">Dein Lernweg</h1>
<p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
                        Vom ersten Samen bis zur eigenen Ernte. Folge unserem strukturierten 6-Phasen-Programm für den urbanen Raum.
                    </p>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 -mt-10">
<div className="bg-white rounded shadow-sm p-8 md:p-12 border border-[#D7DDD9]/40">
<div className="mb-10 text-center md:text-left">
<h2 className="text-2xl md:text-3xl font-inter text-[#222222] font-semibold tracking-tight mb-3">Die 6 Phasen</h2>
<p className="text-base text-[#6F6F6F]">Jeder Schritt baut auf dem vorherigen auf.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

<div className="cursor-pointer relative bg-[#FAFAF7] p-8 rounded border border-[#D7DDD9]/50 shadow-sm hover:border-[#5E7F73]/40 transition-all duration-200 group flex flex-col h-full" onclick="navigate('phase-detail')">
<div className="absolute top-4 right-4 bg-[#3E5F55] text-white text-[10px] font-semibold px-3 py-1 rounded-full tracking-widest uppercase font-inter">Schritt 1</div>
<div className="text-[#3E5F55] mb-6 p-4 bg-white w-fit rounded border border-[#D7DDD9]/30 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:book-2-linear"></iconify-icon>
</div>
<h3 className="text-xl font-inter text-[#222222] font-semibold tracking-tight mb-3 group-hover:text-[#5E7F73] transition-colors">Micro-Garten Grundlagen</h3>
<p className="text-sm text-[#6F6F6F] mb-8 flex-grow leading-relaxed">Verstehe das Ökosystem deines Balkons und die Prinzipien des Micro-Gärtnerns.</p>
<div className="text-[#3E5F55] text-xs font-semibold uppercase tracking-widest flex items-center group-hover:translate-x-1 transition-transform">
                                Starten <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="relative bg-[#FAFAF7] p-8 rounded border border-[#D7DDD9]/50 shadow-sm opacity-70 flex flex-col h-full">
<div className="absolute top-4 right-4 bg-[#D7DDD9] text-[#6F6F6F] text-[10px] font-semibold px-3 py-1 rounded-full tracking-widest uppercase font-inter">Schritt 2</div>
<div className="text-[#6F6F6F] mb-6 p-4 bg-white w-fit rounded border border-[#D7DDD9]/30">
<iconify-icon className="text-2xl" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-xl font-inter text-[#222222] font-semibold tracking-tight mb-3">Containers &amp; Space Setup</h3>
<p className="text-sm text-[#6F6F6F] mb-8 flex-grow leading-relaxed">Die richtige Wahl von Töpfen, Erde und vertikalen Strukturen für maximalen Ertrag.</p>
<div className="text-[#6F6F6F]/50 text-xs font-semibold uppercase tracking-widest flex items-center">Gesperrt</div>
</div>

<div className="relative bg-[#FAFAF7] p-8 rounded border border-[#D7DDD9]/50 shadow-sm opacity-70 flex flex-col h-full">
<div className="absolute top-4 right-4 bg-[#D7DDD9] text-[#6F6F6F] text-[10px] font-semibold px-3 py-1 rounded-full tracking-widest uppercase font-inter">Schritt 3</div>
<div className="text-[#6F6F6F] mb-6 p-4 bg-white w-fit rounded border border-[#D7DDD9]/30">
<iconify-icon className="text-2xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<h3 className="text-xl font-inter text-[#222222] font-semibold tracking-tight mb-3">Pflanzen für begrenzten Raum</h3>
<p className="text-sm text-[#6F6F6F] mb-8 flex-grow leading-relaxed">Kuration von Gemüse &amp; Kräutern, die auf engstem Raum wirklich funktionieren.</p>
<div className="text-[#6F6F6F]/50 text-xs font-semibold uppercase tracking-widest flex items-center">Gesperrt</div>
</div>
</div>
</div>
</div>
</div>

<div className="view-section pb-24 bg-[#FAFAF7]" id="view-phase-detail">
<div className="fixed top-16 md:top-20 left-0 w-full h-1 bg-[#D7DDD9]/30 z-[40]">
<div className="h-full bg-[#5E7F73] w-[16%]"></div>
</div>
<div className="bg-[#3E5F55] text-white py-16 mb-12">
<div className="max-w-3xl mx-auto px-4">
<button className="inline-flex items-center text-[#BFA58A] hover:text-white mb-8 font-semibold text-xs uppercase tracking-widest transition-colors" onclick="navigate('learn')">
<iconify-icon className="mr-2 text-lg" icon="solar:arrow-left-linear"></iconify-icon> Zurück zum Lernweg
                    </button>
<div className="flex items-center gap-3 mb-4 text-[#BFA58A]">
<div className="p-2 bg-white/10 rounded border border-white/5">
<iconify-icon className="text-xl" icon="solar:book-2-linear"></iconify-icon>
</div>
<span className="uppercase tracking-widest text-[10px] font-semibold font-inter text-white/70">Schritt 1</span>
</div>
<h1 className="text-3xl md:text-4xl lg:text-5xl font-inter font-semibold tracking-tight mb-5 leading-tight">Micro-Garten Grundlagen</h1>
<p className="text-lg text-white/80 font-light leading-relaxed">Verstehe das Ökosystem deines Balkons und die Prinzipien des Micro-Gärtnerns.</p>
</div>
</div>
<div className="max-w-3xl mx-auto px-4">
<div className="flex items-center gap-2 text-[#6F6F6F] mb-8 text-xs font-semibold uppercase tracking-widest">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
<span>Lernzeit: ca. 45 Minuten</span>
</div>
<div className="bg-white p-8 rounded border border-[#D7DDD9]/50 border-l-[4px] border-l-[#5E7F73] mb-12 shadow-sm">
<h2 className="text-lg font-inter text-[#222222] font-semibold mb-3 uppercase tracking-wider flex items-center gap-2">
<iconify-icon className="text-[#5E7F73] text-xl" icon="solar:list-check-linear"></iconify-icon>
                        Das Wichtigste in Kürze
                    </h2>
<p className="text-[#222222]/80 text-base italic font-medium leading-relaxed">
                        Licht, Wind und Raum-Analyse sind das Fundament.
                    </p>
</div>
<article className="space-y-10">
<h3 className="text-2xl font-inter text-[#222222] font-semibold tracking-tight border-b border-[#D7DDD9]/40 pb-4">Lerninhalt</h3>
<div className="text-lg text-[#222222]/80 space-y-6 leading-relaxed font-light">
<p>Hier lernst du die absoluten Basics: Lichtverhältnisse analysieren, Windschutz verstehen und wie viel Zeit du wirklich investieren musst.</p>
<p>In Städten sind Mikro-Klimate entscheidend. Ohne die Analyse deines Standorts riskierst du, dass Pflanzen an falscher Stelle verkümmern.</p>
</div>
<div className="p-8 bg-white rounded border border-[#D7DDD9]/50 shadow-sm mt-8">
<h4 className="text-xl font-inter text-[#222222] font-semibold mb-6">Lernziele:</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#5E7F73] text-xl shrink-0 mt-[2px]" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-[#222222]/80">Du verstehst die physikalischen Bedingungen deines Standorts.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#5E7F73] text-xl shrink-0 mt-[2px]" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-[#222222]/80">Du kannst Ressourcen gezielt steuern und optimieren.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#5E7F73] text-xl shrink-0 mt-[2px]" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-[#222222]/80">Du vermeidest teure Fehlkäufe im Gartencenter.</span>
</li>
</ul>
</div>
<div className="bg-[#FAFAF7] p-8 rounded border border-[#D7DDD9] mt-12 shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-[#3E5F55]"></div>
<div className="flex items-center gap-3 mb-4 text-[#5E7F73]">
<iconify-icon className="text-2xl" icon="solar:sun-linear"></iconify-icon>
<h4 className="text-xs font-semibold uppercase tracking-widest font-inter">Praxis-Aufgabe</h4>
</div>
<p className="text-lg font-inter text-[#222222] font-medium leading-relaxed mb-8">
                            Beobachte den Sonnenverlauf auf deinem Balkon für einen Tag. Wo ist der hellste Fleck?
                        </p>
<div className="flex justify-end">
<button className="bg-[#3E5F55] text-white px-6 py-3 rounded font-medium text-sm transition-colors hover:bg-[#3E5F55]/90">
                                Aufgabe abschließen
                            </button>
</div>
</div>
</article>
<div className="mt-16 pt-8 border-t border-[#D7DDD9]/50 flex justify-between items-center">
<button className="text-[#6F6F6F] font-semibold uppercase text-xs tracking-widest hover:text-[#222222] transition-colors flex items-center gap-2" onclick="navigate('learn')">
<iconify-icon className="text-base" icon="solar:arrow-left-linear"></iconify-icon> Übersicht
                    </button>
<button className="bg-white border border-[#D7DDD9] text-[#222222] px-6 py-3 rounded font-medium text-sm flex items-center gap-2 hover:bg-[#FAFAF7] transition-colors opacity-50 cursor-not-allowed">
                        Nächste Lektion <iconify-icon className="text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="view-section pb-24" id="view-knowledge">
<div className="bg-[#5E7F73] text-white py-20">
<div className="max-w-7xl mx-auto px-4 text-center">
<h1 className="text-4xl md:text-5xl font-inter font-semibold tracking-tight mb-5">Wissenssammlung</h1>
<p className="text-lg md:text-xl max-w-2xl mx-auto text-white/80 leading-relaxed font-light">
                        Dein digitales Handbuch für tiefergehendes Gartenwissen und Ressourcen.
                    </p>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 -mt-10 space-y-10">

<section className="bg-white rounded shadow-sm p-8 md:p-12 border border-[#D7DDD9]/40">
<div className="mb-10 border-b border-[#D7DDD9]/40 pb-6 flex items-center gap-4">
<iconify-icon className="text-3xl text-[#5E7F73]" icon="solar:leaf-linear"></iconify-icon>
<div>
<h2 className="text-2xl font-inter text-[#222222] font-semibold tracking-tight">Pflanzen Enzyklopädie</h2>
<p className="text-[#6F6F6F] text-sm mt-1">Detaillierte Profile der besten Stadt-Bewohner.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="cursor-pointer group h-full" onclick="navigate('topic-detail')">
<div className="p-6 rounded bg-[#FAFAF7] border border-[#D7DDD9]/50 group-hover:border-[#5E7F73]/40 transition-colors h-full flex flex-col">
<div className="mb-4 text-[#5E7F73] bg-white w-fit p-3 rounded border border-[#D7DDD9]/30">
<iconify-icon className="text-xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<h4 className="text-lg font-inter text-[#222222] font-semibold mb-1 tracking-tight">Balkon Pflanzen</h4>
<p className="text-[10px] font-semibold uppercase tracking-widest text-[#6F6F6F] mb-4">Die besten Sorten für Töpfe</p>
<p className="text-sm text-[#222222]/80 mb-6 flex-grow">Container-Champions für Stadtgärtner.</p>
<span className="text-[#3E5F55] text-xs font-semibold uppercase tracking-widest group-hover:translate-x-1 transition-transform inline-flex items-center">
                                    Lesen <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
<div className="cursor-pointer group h-full">
<div className="p-6 rounded bg-[#FAFAF7] border border-[#D7DDD9]/50 h-full flex flex-col opacity-70">
<div className="mb-4 text-[#6F6F6F] bg-white w-fit p-3 rounded border border-[#D7DDD9]/30">
<iconify-icon className="text-xl" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<h4 className="text-lg font-inter text-[#222222] font-semibold mb-1 tracking-tight">Heilpflanzen</h4>
<p className="text-[10px] font-semibold uppercase tracking-widest text-[#6F6F6F] mb-4">Apotheke auf dem Fensterbrett</p>
<p className="text-sm text-[#222222]/80 mb-6 flex-grow">Nutze die Kraft der Kräuter für Wohlbefinden.</p>
</div>
</div>
<div className="cursor-pointer group h-full">
<div className="p-6 rounded bg-[#FAFAF7] border border-[#D7DDD9]/50 h-full flex flex-col opacity-70">
<div className="mb-4 text-[#6F6F6F] bg-white w-fit p-3 rounded border border-[#D7DDD9]/30">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h4 className="text-lg font-inter text-[#222222] font-semibold mb-1 tracking-tight">Ein-Topf Kombis</h4>
<p className="text-[10px] font-semibold uppercase tracking-widest text-[#6F6F6F] mb-4">Referenz für Partner</p>
<p className="text-sm text-[#222222]/80 mb-6 flex-grow">Vermeide Wurzel-Krieg im Pflanzkasten.</p>
</div>
</div>
</div>
</section>

<section className="bg-white rounded shadow-sm p-8 md:p-12 border border-[#D7DDD9]/40">
<div className="mb-10 border-b border-[#D7DDD9]/40 pb-6 flex items-center gap-4">
<iconify-icon className="text-3xl text-[#5E7F73]" icon="solar:scissors-linear"></iconify-icon>
<div>
<h2 className="text-2xl font-inter text-[#222222] font-semibold tracking-tight">Praxis &amp; Methoden</h2>
<p className="text-[#6F6F6F] text-sm mt-1">Handwerkliches Wissen für die Zeit nach der Aussaat.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="cursor-pointer group h-full">
<div className="p-6 rounded bg-[#FAFAF7] border border-[#D7DDD9]/50 h-full flex flex-col opacity-70">
<div className="mb-4 text-[#6F6F6F] bg-white w-fit p-3 rounded border border-[#D7DDD9]/30">
<iconify-icon className="text-xl" icon="solar:fridge-linear"></iconify-icon>
</div>
<h4 className="text-lg font-inter text-[#222222] font-semibold mb-1 tracking-tight">Verarbeitung</h4>
<p className="text-[10px] font-semibold uppercase tracking-widest text-[#6F6F6F] mb-4">Haltbarkeit auf wenig Raum</p>
<p className="text-sm text-[#222222]/80 mb-6 flex-grow">Konservieren ohne Keller oder Gefriertruhe.</p>
</div>
</div>
</div>
</section>
</div>
</div>

<div className="view-section pb-24 bg-white" id="view-topic-detail">
<div className="bg-white text-[#222222] py-16 border-b border-[#D7DDD9]">
<div className="max-w-3xl mx-auto px-4">
<button className="inline-flex items-center text-[#6F6F6F] hover:text-[#222222] mb-8 font-semibold text-xs uppercase tracking-widest transition-colors" onclick="navigate('knowledge')">
<iconify-icon className="mr-2 text-base" icon="solar:arrow-left-linear"></iconify-icon> Zurück zur Sammlung
                    </button>
<div className="flex items-center gap-3 mb-4 text-[#6F6F6F]">
<div className="p-1.5 bg-[#FAFAF7] rounded border border-[#D7DDD9]/50">
<iconify-icon className="text-lg" icon="solar:leaf-linear"></iconify-icon>
</div>
<span className="uppercase tracking-widest text-[10px] font-semibold">Wissensdatenbank • Referenz</span>
</div>
<h1 className="font-inter text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 leading-tight tracking-tight">Balkon Pflanzen</h1>
<p className="text-lg text-[#222222]/60 font-medium leading-relaxed italic">Die besten Sorten für Töpfe &amp; Kästen</p>
</div>
</div>
<div className="max-w-3xl mx-auto px-4 py-12">
<div className="flex items-center gap-2 text-[#6F6F6F] mb-8 text-xs font-semibold uppercase tracking-widest">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
<span>Referenzzeit: ca. 10 Minuten</span>
</div>
<div className="bg-[#FAFAF7] p-8 rounded border border-[#D7DDD9]/50 mb-10 shadow-sm">
<h2 className="text-base font-semibold text-[#222222] mb-3 uppercase tracking-wider flex items-center gap-2">
<iconify-icon className="text-[#5E7F73] text-xl" icon="solar:list-check-linear"></iconify-icon>
                        Das Wichtigste in Kürze
                    </h2>
<p className="text-[#222222]/80 text-base italic leading-relaxed font-medium">
                        Container-Champions für Stadtgärtner.
                    </p>
</div>
<article className="space-y-6 text-[#222222]/80 leading-relaxed font-light text-lg">
<h3 className="text-xl font-inter font-semibold text-[#222222] mb-4">Wissens-Vertiefung</h3>
<p>Vom pflegeleichten Radieschen bis zur anspruchsvollen Chili.</p>
<p>Wir führen dich durch die Sorten, die mit begrenztem Wurzelraum und Hitzeabstrahlung von Hauswänden klarkommen.</p>
<div className="my-10 p-8 bg-white rounded border border-[#D7DDD9]/50 shadow-sm">
<h4 className="text-lg font-semibold text-[#222222] mb-5">Praxis-Tipps:</h4>
<ul className="space-y-3 m-0 p-0 list-none">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#3E5F55] text-xl shrink-0 mt-[2px]" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base font-medium">Regelmäßige Kontrolle ist wichtiger als viel Pflege auf einmal.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#3E5F55] text-xl shrink-0 mt-[2px]" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base font-medium">Dokumentiere deine Beobachtungen.</span>
</li>
</ul>
</div>
<div className="bg-[#3E5F55] text-white p-8 rounded mt-12 shadow-sm">
<div className="flex items-center gap-3 mb-5">
<div className="bg-white/10 text-white p-2 rounded">
<iconify-icon className="text-xl" icon="solar:sun-linear"></iconify-icon>
</div>
<h4 className="text-xs font-semibold uppercase tracking-widest text-white/80">Deine Aufgabe</h4>
</div>
<p className="text-base font-medium leading-relaxed mb-8">
                            Vergleiche zwei Tomatensorten: Busch- vs. Stabtomate. Welche passt besser auf deinen Platz?
                        </p>
<div className="flex justify-end">
<button className="bg-white text-[#3E5F55] px-6 py-3 rounded font-semibold text-xs uppercase tracking-widest hover:bg-[#FAFAF7] transition-colors">
                                Verstanden
                            </button>
</div>
</div>
</article>
<div className="mt-16 pt-8 border-t border-[#D7DDD9]/40 flex justify-between items-center">
<button className="text-[#6F6F6F] font-semibold uppercase text-xs hover:text-[#222222] transition-colors" onclick="navigate('knowledge')">
                        ← Zurück
                    </button>
</div>
</div>
</div>

<div className="view-section py-24 min-h-[70vh]" id="view-about">
<div className="max-w-3xl mx-auto px-4 text-center">
<h1 className="font-inter text-4xl md:text-5xl font-semibold tracking-tight text-[#222222] mb-12">Über Uns</h1>
<div className="bg-white p-10 md:p-16 rounded shadow-sm border border-[#D7DDD9]/50 text-left md:text-center">
<p className="text-lg md:text-xl text-[#222222]/80 leading-relaxed mb-8 font-medium">
                        Unsere Mission ist es, jedem Stadtbewohner die Möglichkeit zu geben, seine eigene Nahrung anzubauen – unabhängig davon, wie klein der Wohnraum ist.
                    </p>
<p className="text-base md:text-lg text-[#6F6F6F] leading-relaxed font-light">
                        Wir glauben daran, dass Gärtnern nicht nur Pflanzen wachsen lässt, sondern auch Ruhe und Erdung in den hektischen städtischen Alltag bringt.
                    </p>
<div className="mt-12 flex justify-center gap-6">
<div className="w-16 h-16 bg-[#FAFAF7] rounded-full border border-[#D7DDD9]/50 flex items-center justify-center text-[#D7DDD9]"><iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon></div>
<div className="w-16 h-16 bg-[#FAFAF7] rounded-full border border-[#D7DDD9]/50 flex items-center justify-center text-[#D7DDD9]"><iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon></div>
<div className="w-16 h-16 bg-[#FAFAF7] rounded-full border border-[#D7DDD9]/50 flex items-center justify-center text-[#D7DDD9]"><iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon></div>
</div>
</div>
</div>
</div>

<div className="view-section py-24 min-h-[70vh] flex items-center justify-center" id="view-login">
<div className="max-w-md w-full mx-4 bg-white rounded shadow-sm p-8 border border-[#D7DDD9]/50 border-t-[6px] border-t-[#5E7F73]">
<h1 className="text-2xl font-inter font-semibold tracking-tight mb-2 text-[#222222]">Dein Dashboard</h1>
<p className="text-sm text-[#6F6F6F] mb-8">Melde dich an, um deinen Lernfortschritt zu speichern.</p>
<div className="space-y-5">
<div>
<label className="block text-xs font-semibold mb-2 uppercase tracking-wider text-[#6F6F6F]">E-Mail</label>
<input className="w-full px-4 py-3 rounded border border-[#D7DDD9] focus:outline-none focus:border-[#5E7F73] focus:ring-1 focus:ring-[#5E7F73] placeholder-[#D7DDD9] text-sm transition-colors" placeholder="beispiel@mail.ch" type="email"/>
</div>
<div>
<label className="block text-xs font-semibold mb-2 uppercase tracking-wider text-[#6F6F6F]">Passwort</label>
<input className="w-full px-4 py-3 rounded border border-[#D7DDD9] focus:outline-none focus:border-[#5E7F73] focus:ring-1 focus:ring-[#5E7F73] placeholder-[#D7DDD9] text-sm transition-colors" placeholder="••••••••" type="password"/>
</div>
<button className="w-full bg-[#5E7F73] text-white py-3 mt-2 rounded font-medium text-sm transition-colors hover:bg-[#5E7F73]/90 shadow-sm">
                        Anmelden
                    </button>
</div>
<p className="mt-8 text-center text-xs text-[#6F6F6F]">
                    Noch kein Konto? <span className="text-[#222222] font-semibold underline cursor-pointer">Registrieren</span>
</p>
</div>
</div>
</main>

<footer className="bg-[#3E5F55] text-white/70 py-16 font-source mt-auto">
<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
<div>
<h3 className="text-white text-xl font-inter font-semibold tracking-tight mb-5">UMG Academy</h3>
<p className="text-sm font-light leading-relaxed max-w-sm">
                    Deine Plattform für den Anbau von Gemüse und Heilkräutern auf kleinstem Raum.
                </p>
</div>
<div>
<h3 className="text-white text-base font-inter font-semibold tracking-tight mb-5 uppercase">Links</h3>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-white transition-colors" href="#">Datenschutz</a></li>
<li><a className="hover:text-white transition-colors" href="#">Kontakt</a></li>
</ul>
</div>
<div>
<h3 className="text-white text-base font-inter font-semibold tracking-tight mb-5 uppercase">Newsletter</h3>
<p className="text-sm mb-4 font-light">Erhalte monatliche Pflanztipps.</p>
<div className="flex flex-col sm:flex-row gap-2">
<input className="px-4 py-3 rounded bg-white/10 border border-white/10 text-white focus:outline-none focus:border-[#BFA58A] text-sm w-full placeholder-white/30 transition-colors" placeholder="Deine Email" type="email"/>
<button className="px-6 py-3 bg-[#BFA58A] text-[#3E5F55] font-semibold rounded hover:bg-[#BFA58A]/90 transition-colors text-sm whitespace-nowrap">
                        Abonnieren
                    </button>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/10 text-xs font-semibold uppercase tracking-widest opacity-50 text-center md:text-left">
            © 2024 Urban Micro-Garten. Alle Rechte vorbehalten.
        </div>
</footer>


    </>
  );
}
