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



        // Simple Intersection Observer for fade-in animations
        document.addEventListener("DOMContentLoaded", function() {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.fade-in-section').forEach(section => {
                observer.observe(section);
            });
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
      

<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-center w-full">
<div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between w-full max-w-5xl shadow-sm transition-all duration-300 hover:shadow-md">
<a className="text-lg tracking-tight font-medium text-neutral-900 flex items-center gap-2" href="#">
<span className="bg-neutral-900 text-white w-8 h-8 flex items-center justify-center rounded-lg text-sm font-semibold">M</span>
<span>Müller Bau</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-neutral-600">
<a className="hover:text-neutral-900 transition-colors" href="#leistungen">Leistungen</a>
<a className="hover:text-neutral-900 transition-colors" href="#projekte">Projekte</a>
<a className="hover:text-neutral-900 transition-colors" href="#unternehmen">Unternehmen</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-200" href="#kontakt">
                Projekt anfragen
            </a>

<button className="md:hidden text-neutral-900 flex items-center">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden px-4">

<div className="absolute inset-0 z-0">
<img alt="Modern Concrete Architecture" className="w-full h-full object-cover object-center brightness-90 transform scale-105" onload="this.style.transform='scale(1)'" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2400&amp;auto=format&amp;fit=crop" style={{transition: 'transform 10s ease-out'}}/>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 z-10"></div>

<div className="relative z-20 w-full max-w-5xl text-center md:text-left flex flex-col md:flex-row items-end justify-between gap-10 bottom-0 md:translate-y-12 pb-24 md:pb-0">
<div className="max-w-2xl fade-in-section is-visible">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-dark text-white/90 text-xs mb-6 backdrop-blur-md border-white/10">
<span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                    Jetzt verfügbar für 2024
                </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6 drop-shadow-xl">
                    Wir bauen <br/>
<span className="text-white/90">Ihre Zukunft.</span>
</h1>
<p className="text-lg md:text-xl text-white/80 font-light max-w-lg leading-relaxed mb-8">
                    Präzision, Qualität und Nachhaltigkeit seit 20 Jahren. Wir realisieren Visionen aus Beton und Glas.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-orange-600 rounded-full hover:bg-orange-500 transition-all duration-300 shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_30px_rgba(234,88,12,0.5)]" href="#kontakt">
                        Projekt anfragen
                        <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white glass-dark rounded-full hover:bg-white/20 transition-all duration-300" href="#leistungen">
                        Leistungen ansehen
                    </a>
</div>
</div>

<div className="hidden md:block glass-panel p-6 rounded-3xl w-64 transform translate-y-[-20%] fade-in-section" style={{transitionDelay: '200ms'}}>
<div className="flex items-start justify-between mb-4">
<div className="p-3 bg-neutral-100 rounded-2xl">
<iconify-icon className="text-neutral-900" icon="solar:buildings-2-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-400 bg-white px-2 py-1 rounded-lg border border-neutral-100">Statistik</span>
</div>
<div className="text-3xl font-semibold text-neutral-900 tracking-tight mb-1">250+</div>
<div className="text-sm text-neutral-500 font-normal">Realisierte Bauprojekte in der DACH-Region</div>
</div>
</div>
</header>

<section className="py-24 px-4 bg-[#f5f5f7]" id="leistungen">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 fade-in-section">
<div>
<h2 className="text-3xl md:text-5xl font-medium text-neutral-900 tracking-tight mb-4">Unsere Expertise</h2>
<p className="text-lg text-neutral-500 font-light max-w-xl">
                        Umfassende Baulösungen, maßgeschneidert auf Ihre Anforderungen. Von der Planung bis zur Schlüsselübergabe.
                    </p>
</div>
<a className="text-orange-600 font-medium hover:text-orange-700 transition-colors flex items-center gap-1 group" href="#">
                    Alle Leistungen
                    <iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

<div className="md:col-span-2 relative group overflow-hidden rounded-[2rem] bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500 fade-in-section">
<div className="absolute inset-0 bg-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:city-linear" width="32"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-medium text-neutral-900 mb-2 tracking-tight">Hochbau</h3>
<p className="text-neutral-500 leading-relaxed max-w-md">
                                Wir realisieren komplexe Wohn- und Gewerbeprojekte mit höchsten Ansprüchen an Architektur und Statik. Innovation trifft auf soliden Beton.
                            </p>
</div>
</div>

<div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 pointer-events-none">
<iconify-icon className="absolute -bottom-20 -right-20" height="400" icon="solar:city-linear" width="400"></iconify-icon>
</div>
</div>

<div className="md:row-span-2 relative group overflow-hidden rounded-[2rem] bg-neutral-900 text-white p-8 shadow-sm hover:shadow-xl transition-all duration-500 fade-in-section" style={{transitionDelay: '100ms'}}>
<img alt="Tiefbau" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-14 h-14 glass-dark rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md border-white/10">
<iconify-icon className="text-white" icon="solar:excavator-linear" width="32"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-medium mb-3 tracking-tight">Tiefbau</h3>
<p className="text-white/70 leading-relaxed font-light">
                                Fundamentarbeiten, Kanalbau und Erdbewegung. Wir schaffen die Basis für Großes mit modernstem Maschinenpark.
                            </p>
<div className="mt-8 pt-8 border-t border-white/10 flex gap-4">
<div className="text-center">
<span className="block text-2xl font-semibold tracking-tight">100%</span>
<span className="text-xs text-white/50 uppercase tracking-wider">Präzision</span>
</div>
<div className="text-center">
<span className="block text-2xl font-semibold tracking-tight">50+</span>
<span className="text-xs text-white/50 uppercase tracking-wider">Maschinen</span>
</div>
</div>
</div>
</div>
</div>

<div className="relative group overflow-hidden rounded-[2rem] bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500 fade-in-section" style={{transitionDelay: '200ms'}}>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
<iconify-icon icon="solar:home-smile-linear" width="32"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-medium text-neutral-900 mb-2 tracking-tight">Sanierung</h3>
<p className="text-neutral-500 leading-relaxed">
                                Energetische Sanierung und Denkmalschutz. Wir bewahren Werte und steigern Effizienz.
                            </p>
</div>
</div>
</div>

<div className="relative group overflow-hidden rounded-[2rem] bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-center items-center text-center fade-in-section" style={{transitionDelay: '300ms'}}>
<div className="relative w-full h-full min-h-[160px] flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-neutral-50 rounded-xl"></div>
<div className="relative z-10 space-y-2">
<iconify-icon className="text-neutral-800 mb-2" icon="solar:ruler-pen-linear" width="48"></iconify-icon>
<h3 className="text-xl font-medium text-neutral-900 tracking-tight">Planung &amp; Design</h3>
<p className="text-sm text-neutral-500">Architekten-Service inkl.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="fade-in-section">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 text-xs mb-6 font-medium uppercase tracking-wider">
                        Unsere Philosophie
                    </div>
<h2 className="text-4xl md:text-5xl font-medium text-neutral-900 tracking-tight mb-6 leading-tight">
                        Nachhaltigkeit trifft <br/>
<span className="text-neutral-400">auf Ingenieurskunst.</span>
</h2>
<p className="text-lg text-neutral-500 font-light mb-8 leading-relaxed">
                        Wir glauben, dass modernes Bauen Verantwortung bedeutet. Deshalb setzen wir auf ressourcenschonende Materialien und energieeffiziente Bauweisen, ohne Kompromisse bei der Ästhetik einzugehen.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-neutral-900 font-medium">Ökologische Baustoffe</h4>
<p className="text-sm text-neutral-500 mt-1">Verwendung von Recycling-Beton und Holz.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-neutral-900 font-medium">TÜV-Zertifizierte Sicherheit</h4>
<p className="text-sm text-neutral-500 mt-1">Höchste Standards für langlebige Strukturen.</p>
</div>
</li>
</ul>
</div>
<div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl fade-in-section" style={{transitionDelay: '200ms'}}>
<img alt="Architectural Detail" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute bottom-6 left-6 right-6 glass-panel p-6 rounded-2xl border border-white/60">
<div className="flex items-center justify-between">
<div>
<p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Aktuelles Projekt</p>
<p className="text-neutral-900 font-medium">Skyline Tower, Berlin</p>
</div>
<div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-[#f5f5f7]" id="kontakt">
<div className="max-w-4xl mx-auto text-center fade-in-section">
<h2 className="text-4xl md:text-6xl font-medium text-neutral-900 tracking-tight mb-6">Starten Sie Ihr Projekt.</h2>
<p className="text-xl text-neutral-500 font-light mb-10 max-w-xl mx-auto">
                Lassen Sie uns gemeinsam etwas Einzigartiges schaffen. Wir beraten Sie gerne unverbindlich.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-white bg-orange-600 rounded-full hover:bg-orange-500 transition-all duration-300 shadow-xl shadow-orange-200 hover:shadow-orange-300 hover:-translate-y-1" href="mailto:kontakt@mueller-bau.de">
<iconify-icon className="mr-2" icon="solar:letter-linear" width="24"></iconify-icon>
                    Projekt anfragen
                </a>
<a className="w-full md:w-auto inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-neutral-900 bg-white rounded-full hover:bg-neutral-50 border border-neutral-200 transition-all duration-300 hover:-translate-y-1" href="tel:+49123456789">
<iconify-icon className="mr-2" icon="solar:phone-calling-linear" width="24"></iconify-icon>
                    +49 (0) 30 123 456
                </a>
</div>
</div>
</section>

<footer className="bg-neutral-900 text-neutral-400 py-16 px-6 rounded-t-[3rem] mt-12">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="text-xl font-medium text-white tracking-tight flex items-center gap-2 mb-6" href="#">
<span className="bg-white text-neutral-900 w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold">M</span>
                        Müller Bau
                    </a>
<p className="text-sm font-light leading-relaxed">
                        Qualität, die bleibt. Ihr Partner für anspruchsvolle Bauprojekte in Deutschland.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Leistungen</h4>
<ul className="space-y-2 text-sm font-light">
<li><a className="hover:text-white transition-colors" href="#">Hochbau</a></li>
<li><a className="hover:text-white transition-colors" href="#">Tiefbau</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sanierung</a></li>
<li><a className="hover:text-white transition-colors" href="#">Projektmanagement</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Unternehmen</h4>
<ul className="space-y-2 text-sm font-light">
<li><a className="hover:text-white transition-colors" href="#">Über uns</a></li>
<li><a className="hover:text-white transition-colors" href="#">Karriere</a></li>
<li><a className="hover:text-white transition-colors" href="#">Presse</a></li>
<li><a className="hover:text-white transition-colors" href="#">Kontakt</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Rechtliches</h4>
<ul className="space-y-2 text-sm font-light">
<li><a className="hover:text-white transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-white transition-colors" href="#">Datenschutz</a></li>
<li><a className="hover:text-white transition-colors" href="#">AGB</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light">
<p>© 2024 Müller Bau Design GmbH. Alle Rechte vorbehalten.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:basketball-linear"></iconify-icon></a> 
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:instagram-filled"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:linkedin-rect"></iconify-icon></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
