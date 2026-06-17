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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00475F] to-[#8B5A2B] flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
<iconify-icon className="text-white text-base" icon="solar:leaf-linear"></iconify-icon>
</div>

<span className="text-xl font-semibold text-gray-900 tracking-tighter uppercase">Nussbaum</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-900 hover:text-[#8B5A2B] transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#8B5A2B] transition-colors" href="#philosophie">Philosophie</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#8B5A2B] transition-colors" href="#immobilien">Objekte</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#8B5A2B] transition-colors" href="#kontakt">Kontakt</a>
</nav>
<div className="md:hidden">
<button className="text-gray-900 p-2">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative bg-[#00475F] text-white overflow-hidden" id="home">

<div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{backgroundImage: 'radial-gradient(circle at 50% 50%, transparent 10%, #fff 11%, #fff 12%, transparent 13%), radial-gradient(circle at 50% 50%, transparent 20%, #fff 21%, #fff 22%, transparent 23%), radial-gradient(circle at 50% 50%, transparent 30%, #fff 31%, #fff 32%, transparent 33%)', backgroundSize: '100vmax 100vmax', backgroundPosition: 'center'}}></div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#8B5A2B]/20 border border-[#8B5A2B]/30 mb-8 backdrop-blur-sm">
<iconify-icon className="text-[#E6B981] text-sm" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-sm font-medium text-[#E6B981]">Wir knacken jede harte Nuss</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight mb-6">
                        Erfolgreich verkaufen – mit starken Wurzeln in Thüringen.
                    </h1>
<p className="text-lg text-blue-100/90 font-normal mb-10 leading-relaxed max-w-xl">
                        Wie ein Nussbaum stehen wir für Beständigkeit, tiefes Vertrauen und verlässliches Wachstum. Wir lösen auch komplexe Immobilienverkäufe transparent, sicher und zu besten Konditionen.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#8B5A2B] text-white rounded-xl font-medium text-sm hover:bg-[#724922] transition-colors shadow-lg shadow-[#8B5A2B]/20" href="#kontakt">
                            Kostenlose Beratung
                            <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent text-white border border-white/30 rounded-xl font-medium text-sm hover:bg-white/10 transition-colors" href="#philosophie">
                            Unsere Philosophie
                        </a>
</div>
</div>
<div className="relative flex justify-center items-center">
<div className="absolute inset-0 bg-gradient-to-tr from-[#8B5A2B]/40 to-transparent z-10 nut-shape"></div>

<img alt="Elegante Immobilie" className="object-cover h-[500px] w-full max-w-[450px] shadow-2xl shadow-black/30 nut-shape z-0 relative" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute bottom-4 -left-4 bg-white rounded-2xl p-5 shadow-xl z-20 flex gap-5 items-center border border-gray-100">
<div className="flex flex-col items-center justify-center bg-gray-50 rounded-xl w-12 h-12 text-[#8B5A2B]">
<iconify-icon className="text-2xl" icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm text-gray-500">Immobilien</span>
<span className="text-lg font-semibold tracking-tight text-gray-900">100% Erfolgsquote</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative border-b border-gray-100" id="philosophie">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-3xl mx-auto text-center mb-20">
<span className="text-[#8B5A2B] font-medium text-sm tracking-widest uppercase mb-3 block">Die Nussbaum Philosophie</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
                        Struktur, Schutz und ein wertvoller Kern
                    </h2>
<p className="text-lg text-gray-600 leading-relaxed">
                        Eine Immobilie zu verkaufen, ist oft eine "harte Nuss". Komplexe Verträge, Preisfindung und Bonitätsprüfungen erfordern Erfahrung und Feingefühl. Wir begleiten Sie durch diesen Prozess – organisch, sicher und absolut zuverlässig.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-[#00475F] group-hover:text-white transition-colors duration-300 border border-gray-100 text-[#00475F]">
<iconify-icon className="text-2xl" icon="solar:routing-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-2">Tiefe Wurzeln</h3>
<p className="text-sm text-gray-500 leading-relaxed">Verwurzelt in Thüringen. Wir kennen den lokalen Markt und seine Besonderheiten im Detail.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-[#00475F] group-hover:text-white transition-colors duration-300 border border-gray-100 text-[#00475F]">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-2">Starker Stamm</h3>
<p className="text-sm text-gray-500 leading-relaxed">Ein stabiles Fundament aus Transparenz, Ehrlichkeit und verlässlicher Kommunikation.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-[#00475F] group-hover:text-white transition-colors duration-300 border border-gray-100 text-[#00475F]">
<iconify-icon className="text-2xl" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-2">Weite Krone</h3>
<p className="text-sm text-gray-500 leading-relaxed">Maximale Reichweite für Ihr Objekt durch ein weitreichendes Netzwerk und kluges Marketing.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-[#8B5A2B] group-hover:text-white transition-colors duration-300 border border-gray-100 text-[#8B5A2B]">
<iconify-icon className="text-2xl" icon="solar:star-fall-minimalistic-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-2">Wertvoller Kern</h3>
<p className="text-sm text-gray-500 leading-relaxed">Wir knacken jede Herausforderung, um am Ende das bestmögliche Ergebnis für Sie freizulegen.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                        Ihre Vorteile mit uns als Partner
                    </h2>
<p className="text-lg text-gray-600 max-w-2xl">
                        Ein Rundum-Service, der Ihnen Zeit, Geld und Nerven spart. Vom ersten Kennenlernen bis lange nach der Schlüsselübergabe.
                    </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm text-[#00475F]">
<iconify-icon className="text-xl" icon="solar:user-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-base font-semibold text-gray-900 mb-2">Persönliche Betreuung</h3>
<p className="text-sm text-gray-600 leading-relaxed">Direkter Kontakt – von der Erstberatung bis zur Schlüsselübergabe.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm text-[#00475F]">
<iconify-icon className="text-xl" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-base font-semibold text-gray-900 mb-2">Transparente Kommunikation</h3>
<p className="text-sm text-gray-600 leading-relaxed">Ehrlich, zuverlässig und verständlich in jeder Phase des Verkaufs.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm text-[#00475F]">
<iconify-icon className="text-xl" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-base font-semibold text-gray-900 mb-2">Fundierte Wertermittlung</h3>
<p className="text-sm text-gray-600 leading-relaxed">Detaillierte Marktanalyse für eine realistische und starke Preisstrategie.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm text-[#00475F]">
<iconify-icon className="text-xl" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-base font-semibold text-gray-900 mb-2">Geprüfte Käuferdatenbank</h3>
<p className="text-sm text-gray-600 leading-relaxed">Zugang zu zahlreichen vorgemerkten und bonitätsgeprüften Interessenten.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm text-[#00475F]">
<iconify-icon className="text-xl" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-base font-semibold text-gray-900 mb-2">Professionelle Präsentation</h3>
<p className="text-sm text-gray-600 leading-relaxed">Hochwertige Fotos, Drohnenaufnahmen und ansprechende Exposés.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm text-[#00475F]">
<iconify-icon className="text-xl" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-base font-semibold text-gray-900 mb-2">Rechtssicherheit</h3>
<p className="text-sm text-gray-600 leading-relaxed">Zusammenarbeit mit Notaren und Nutzung stets aktueller, geprüfter Verträge.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#00475F] py-16 relative overflow-hidden">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-[#8B5A2B]/20 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-2">
                        Maximale Reichweite für Ihre Immobilie
                    </h2>
<p className="text-sm text-blue-100">
                        Inserate auf allen führenden Portalen, eigener Website &amp; Social Media.
                    </p>
</div>
<div className="flex flex-wrap gap-4 opacity-70">
<span className="text-white font-medium text-lg">ImmoScout24</span>
<span className="text-white font-medium text-lg">•</span>
<span className="text-white font-medium text-lg">Immowelt</span>
<span className="text-white font-medium text-lg">•</span>
<span className="text-white font-medium text-lg">Immonet</span>
</div>
</div>
</section>

<section className="py-24 bg-white" id="immobilien">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                            Ausgewählte Objekte
                        </h2>
<p className="text-lg text-gray-600 max-w-2xl">
                            Entdecken Sie eine Auswahl unserer derzeitigen Immobilienangebote.
                        </p>
</div>
<a className="inline-flex items-center gap-2 text-[#8B5A2B] font-medium text-sm hover:text-[#6B4423] transition-colors" href="#">
                        Alle Objekte ansehen
                        <iconify-icon className="text-sm" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
<div className="relative h-64 overflow-hidden bg-gray-100 p-2">
<img alt="Haus" className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#00475F]">
                                Zu Verkaufen
                            </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-1">Modernes Einfamilienhaus</h3>
<p className="text-sm text-gray-500 flex items-center gap-1">
<iconify-icon className="text-base" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
                                        Erfurt, Thüringen
                                    </p>
</div>
</div>
<div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-100 mb-4">
<div className="flex flex-col">
<span className="text-gray-400 text-xs uppercase tracking-wider">Zimmer</span>
<span className="text-gray-900 font-medium text-sm mt-1">5</span>
</div>
<div className="flex flex-col">
<span className="text-gray-400 text-xs uppercase tracking-wider">Fläche</span>
<span className="text-gray-900 font-medium text-sm mt-1">145 m²</span>
</div>
<div className="flex flex-col">
<span className="text-gray-400 text-xs uppercase tracking-wider">Grund</span>
<span className="text-gray-900 font-medium text-sm mt-1">650 m²</span>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-xl font-semibold tracking-tight text-[#00475F]">485.000 €</span>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
<div className="relative h-64 overflow-hidden bg-gray-100 p-2">
<img alt="Wohnung" className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#00475F]">
                                Zu Verkaufen
                            </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-1">Lichtdurchflutete Wohnung</h3>
<p className="text-sm text-gray-500 flex items-center gap-1">
<iconify-icon className="text-base" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
                                        Jena, Zentrum
                                    </p>
</div>
</div>
<div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-100 mb-4">
<div className="flex flex-col">
<span className="text-gray-400 text-xs uppercase tracking-wider">Zimmer</span>
<span className="text-gray-900 font-medium text-sm mt-1">3</span>
</div>
<div className="flex flex-col">
<span className="text-gray-400 text-xs uppercase tracking-wider">Fläche</span>
<span className="text-gray-900 font-medium text-sm mt-1">86 m²</span>
</div>
<div className="flex flex-col">
<span className="text-gray-400 text-xs uppercase tracking-wider">Etage</span>
<span className="text-gray-900 font-medium text-sm mt-1">2. OG</span>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-xl font-semibold tracking-tight text-[#00475F]">295.000 €</span>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
<div className="relative h-64 overflow-hidden bg-gray-100 p-2">
<img alt="Haus" className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-6 left-6 bg-[#8B5A2B]/90 text-white backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider">
                                Reserviert
                            </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-1">Sanierter Altbau</h3>
<p className="text-sm text-gray-500 flex items-center gap-1">
<iconify-icon className="text-base" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
                                        Weimar, Süd
                                    </p>
</div>
</div>
<div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-100 mb-4">
<div className="flex flex-col">
<span className="text-gray-400 text-xs uppercase tracking-wider">Zimmer</span>
<span className="text-gray-900 font-medium text-sm mt-1">4</span>
</div>
<div className="flex flex-col">
<span className="text-gray-400 text-xs uppercase tracking-wider">Fläche</span>
<span className="text-gray-900 font-medium text-sm mt-1">112 m²</span>
</div>
<div className="flex flex-col">
<span className="text-gray-400 text-xs uppercase tracking-wider">Balkon</span>
<span className="text-gray-900 font-medium text-sm mt-1">Ja</span>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-xl font-semibold tracking-tight text-gray-400">Auf Anfrage</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#00475F]/5 border-t border-gray-100 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtNGgtMnY0aC00djJoNHY0aDJ2LTRoNHYtMmgtNHptMC0zMFYwaC0ydjRoLTR2Mmg0djRoMnYtNGg0VjRoLTR6TTYuNiA1NC42bDEuNC0xLjRWMzRsLTItMnoiIGZpbGw9IiMwMDQ3NUYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                        Das sagen unsere Kunden
                    </h2>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
<div className="flex text-[#8B5A2B] mb-6">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-600 leading-relaxed mb-8 flex-grow">
                            "Normalerweise bin ich skeptisch solchen Bewertungen gegenüber, aber unser Bauchgefühl hat uns bei der Maklersuche nicht getäuscht. Die Fotos, die er mit seiner Drohne geschossen hat, haben uns direkt überzeugt. Spontane Wochenendeinsätze, weil es manchmal nicht anders zu machen ging. Danke Tom 👍"
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-semibold text-sm">MM</div>
<span className="font-medium text-gray-900 text-sm">Marcell Michel</span>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
<div className="flex text-[#8B5A2B] mb-6">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-600 leading-relaxed mb-8 flex-grow">
                            "Sehr empathischer und freundlicher Makler. Er versteht sein Handwerk und glänzt durch seine ehrliche und fachliche Expertise. Durch seine Flexibilität konnte er uns super beim Verkauf unseres Hauses begleiten. Sein Humor prägte die Zusammenarbeit sehr positiv. Einen besseren Makler hätten wir uns nicht vorstellen können."
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-semibold text-sm">KL</div>
<span className="font-medium text-gray-900 text-sm">Kevin Licht</span>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
<div className="flex text-[#8B5A2B] mb-6">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-600 leading-relaxed mb-8 flex-grow">
                            "Wir sind sehr zufrieden mit der Zusammenarbeit. Tom ist zuverlässig, flexibel und quasi jederzeit für Fragen/Gedanken/Anregungen erreichbar. Auch auf menschlicher Ebene ist es total angenehm. Wir haben uns als junge Familie beim Kauf unseres zukünftigen zu Hauses sehr gut begleitet gefühlt."
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-semibold text-sm">LU</div>
<span className="font-medium text-gray-900 text-sm">Lena Sophie Ukenings</span>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#003649] text-white pt-24 pb-12" id="kontakt">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 mb-16 border-b border-white/10 pb-16">
<div>

<h2 className="text-4xl font-semibold tracking-tighter uppercase mb-6 text-white/90 flex items-center gap-3">
<iconify-icon className="text-[#8B5A2B]" icon="solar:leaf-linear"></iconify-icon>
                        NUSSBAUM
                    </h2>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 text-blue-50/90 leading-tight">
                        Wurzeln schlagen in der Region,<br/>war noch nie so einfach.
                    </h3>
</div>
<div className="flex flex-col justify-center gap-6 lg:ml-auto">
<a className="flex items-center gap-4 text-lg font-medium hover:text-[#E6B981] transition-colors group" href="tel:+491747806090">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#8B5A2B]/20 group-hover:border-[#8B5A2B]/50 transition-all text-[#E6B981]">
<iconify-icon className="text-xl" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
</div>
                        +49 174 780 60 90
                    </a>
<a className="flex items-center gap-4 text-lg font-medium hover:text-[#E6B981] transition-colors group" href="mailto:kontakt@nussbaum-immobilien.de">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#8B5A2B]/20 group-hover:border-[#8B5A2B]/50 transition-all text-[#E6B981]">
<iconify-icon className="text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
                        kontakt@nussbaum-immobilien.de
                    </a>
<a className="flex items-center gap-4 text-lg font-medium hover:text-[#E6B981] transition-colors group" href="https://www.nussbaum-immobilien.de" target="_blank">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#8B5A2B]/20 group-hover:border-[#8B5A2B]/50 transition-all text-[#E6B981]">
<iconify-icon className="text-xl" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</div>
                        www.nussbaum-immobilien.de
                    </a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-100/50">
<p>Copyright © Nussbaum Immobilien</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Impressum</a>
<a className="hover:text-white transition-colors" href="#">Datenschutz</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
