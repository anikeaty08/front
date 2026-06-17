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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center rounded-lg">
<span className="font-semibold text-xs tracking-tighter">SFGZ</span>
</div>
<span className="font-semibold text-sm tracking-tight text-zinc-800 group-hover:text-black transition-colors">Schule für Gestaltung Zürich</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#angebote">Bildungsangebote</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#ueber-uns">Über uns</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#aktuell">Aktuell</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Intranet</a>
<a className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium rounded-md transition-all flex items-center gap-2" href="#kontakt">
                    Kontakt
                    <svg aria-hidden="true" data-height="14" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-zinc-100 to-transparent rounded-[100%] blur-3xl -z-10 opacity-60"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 mb-8">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-medium text-zinc-600 tracking-wide uppercase">Kompetenzzentrum für Gestaltung</span>
</div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-semibold text-zinc-900 tracking-tight mb-6">Gestaltung, Medien<br/><span className="text-zinc-400">und Technologie.</span></h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Die Berufsfachschule und Höhere Fachschule in Zürich. Wir verbinden Handwerk mit digitaler Innovation und bereiten Sie auf die kreative Zukunft vor.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-6 py-3 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200/50 flex items-center justify-center gap-2" href="#angebote">
                    Angebote entdecken
                    <svg aria-hidden="true" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="w-full md:w-auto px-6 py-3 bg-white text-zinc-700 border border-zinc-200 rounded-lg text-sm font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all flex items-center justify-center gap-2" href="#infoabende">
<svg aria-hidden="true" data-icon="lucide:calendar" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
                    Nächste Infoabende
                </a>
</div>
</div>
</section>

<section className="border-y border-zinc-100 bg-zinc-50/50">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center md:items-start">
<span className="text-3xl font-semibold tracking-tight text-zinc-900">2000+</span>
<span className="text-sm text-zinc-500 mt-1">Lernende &amp; Studierende</span>
</div>
<div className="flex flex-col items-center md:items-start">
<span className="text-3xl font-semibold tracking-tight text-zinc-900">20+</span>
<span className="text-sm text-zinc-500 mt-1">Berufe &amp; Lehrgänge</span>
</div>
<div className="flex flex-col items-center md:items-start">
<span className="text-3xl font-semibold tracking-tight text-zinc-900">100%</span>
<span className="text-sm text-zinc-500 mt-1">Praxisbezug</span>
</div>
<div className="flex flex-col items-center md:items-start">
<span className="text-3xl font-semibold tracking-tight text-zinc-900">ZH</span>
<span className="text-sm text-zinc-500 mt-1">Zentral am Limmatplatz</span>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24" id="angebote">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:flex justify-between items-end">
<div className="">
<h2 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-4">Bildungsbereiche</h2>
<p className="text-zinc-500 max-w-xl">Von der Grundbildung bis zur höheren Fachschule. Finden Sie den passenden Weg für Ihre Karriere in der Kreativwirtschaft.</p>
</div>
<a className="hidden md:flex text-sm font-medium text-zinc-900 items-center gap-1 hover:gap-2 transition-all" href="#">
                    Alle Lehrgänge ansehen <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-white border border-zinc-200 rounded-xl p-6 hover:shadow-lg hover:shadow-zinc-200/50 transition-all hover:-translate-y-1">
<div className="w-10 h-10 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center text-zinc-900 mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<svg aria-hidden="true" data-icon="lucide:backpack" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm4 0h8m-8 8h8"></path><path d="M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path></g></svg>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Grundbildung</h3>
<p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                        Berufliche Grundbildung (Lehre) in diversen gestalterischen und technischen Berufen.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-zinc-600">
<svg aria-hidden="true" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Grafiker/in EFZ
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-600">
<svg aria-hidden="true" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Polygraf/in EFZ
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-600">
<svg aria-hidden="true" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Interactive Media Designer
                        </li>
</ul>
<a className="absolute inset-0 z-10" href="#"></a>
</div>

<div className="group relative bg-white border border-zinc-200 rounded-xl p-6 hover:shadow-lg hover:shadow-zinc-200/50 transition-all hover:-translate-y-1">
<div className="w-10 h-10 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center text-zinc-900 mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<svg aria-hidden="true" data-icon="lucide:graduation-cap" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></g></svg>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Höhere Fachschule (HF)</h3>
<p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                        Vertiefende Studiengänge für Berufsleute, die Führungspositionen anstreben.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-zinc-600">
<svg aria-hidden="true" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Visuelle Gestaltung
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-600">
<svg aria-hidden="true" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Kommunikationsdesign
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-600">
<svg aria-hidden="true" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Interaction Design
                        </li>
</ul>
<a className="absolute inset-0 z-10" href="#"></a>
</div>

<div className="group relative bg-white border border-zinc-200 rounded-xl p-6 hover:shadow-lg hover:shadow-zinc-200/50 transition-all hover:-translate-y-1">
<div className="w-10 h-10 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center text-zinc-900 mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<svg aria-hidden="true" data-icon="lucide:pencil-ruler" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13 7L8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13m1-7l2-2m8 12l2-2m-3-3l4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Vorkurse &amp; Propädeutikum</h3>
<p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                        Die ideale Vorbereitung auf eine gestalterische Berufslehre oder ein Studium.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-zinc-600">
<svg aria-hidden="true" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Gestalterischer Vorkurs
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-600">
<svg aria-hidden="true" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Propädeutikum
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-600">
<svg aria-hidden="true" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Mappenkurse
                        </li>
</ul>
<a className="absolute inset-0 z-10" href="#"></a>
</div>

<div className="group relative bg-white border border-zinc-200 rounded-xl p-6 hover:shadow-lg hover:shadow-zinc-200/50 transition-all hover:-translate-y-1">
<div className="w-10 h-10 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center text-zinc-900 mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<svg aria-hidden="true" data-icon="lucide:layers" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Weiterbildung</h3>
<p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                        Kurse, Workshops und Lehrgänge zur gezielten Erweiterung Ihrer Kompetenzen.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-zinc-600">
<svg aria-hidden="true" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Software-Kurse
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-600">
<svg aria-hidden="true" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Fotografie &amp; Video
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-600">
<svg aria-hidden="true" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Berufsprüfungen (BP)
                        </li>
</ul>
<a className="absolute inset-0 z-10" href="#"></a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50" id="aktuell">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-12">Aktuelles &amp; Termine</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="flex flex-col group cursor-pointer">
<div className="h-48 w-full bg-zinc-200 rounded-lg mb-4 overflow-hidden relative">

<div className="absolute inset-0 flex items-center justify-center text-zinc-400 bg-zinc-100">
<svg aria-hidden="true" data-icon="lucide:image" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></g></svg>
</div>
</div>
<span className="text-xs font-medium text-emerald-600 mb-2">Ausstellung</span>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 group-hover:text-zinc-600 transition-colors">Abschlussarbeiten 2024</h3>
<p className="text-sm text-zinc-500 line-clamp-2">Besuchen Sie die Werkschau unserer Absolventinnen und Absolventen der Höheren Fachschule.</p>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="h-48 w-full bg-zinc-200 rounded-lg mb-4 overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center text-zinc-400 bg-zinc-100">
<svg aria-hidden="true" data-icon="lucide:calendar-clock" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 14v2.2l1.6 1M16 2v4m5 1.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5M3 10h5m0-8v4"></path><circle cx="16" cy="16" r="6"></circle></g></svg>
</div>
</div>
<span className="text-xs font-medium text-blue-600 mb-2">Infoanlass</span>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 group-hover:text-zinc-600 transition-colors">Informationsabend Vorkurs</h3>
<p className="text-sm text-zinc-500 line-clamp-2">Erfahren Sie alles über das Aufnahmeverfahren und die Inhalte des Vorkurses. Jetzt anmelden.</p>
</article>

<div className="bg-white p-6 rounded-xl border border-zinc-200">
<h3 className="font-semibold text-zinc-900 mb-4">Direkteinstieg</h3>
<ul className="space-y-4">
<li>
<a className="flex items-center justify-between text-sm text-zinc-600 hover:text-zinc-900 group" href="#">
<span>Ferienplan &amp; Termine</span>
<svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</li>
<li className="h-px bg-zinc-100 w-full"></li>
<li>
<a className="flex items-center justify-between text-sm text-zinc-600 hover:text-zinc-900 group" href="#">
<span>Mediothek</span>
<svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-zinc-200 border-t pt-24 pb-24" id="ueber-uns">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-6">Medien Form Farbe</h2>
<div className="space-y-6 text-zinc-500 text-base leading-relaxed">
<p className="">
                            Die Schule für Gestaltung Zürich (SfGZ) ist das führende Kompetenzzentrum für die Aus- und Weiterbildung in den Bereichen Gestaltung, Medien und Drucktechnologie im Kanton Zürich.
                        </p>
<p>
                            An unserem Standort beim Limmatplatz in Zürich vereinen wir Tradition mit modernster Technologie. Unsere Dozierenden sind Fachleute aus der Praxis, die ihr Wissen direkt weitergeben. Ob Grundbildung, höhere Berufsbildung oder Kurse – bei uns steht die Qualität der Ausbildung an erster Stelle.
                        </p>
</div>
<div className="mt-8 grid grid-cols-2 gap-4">
<div className="p-4 bg-zinc-50 rounded-lg border border-zinc-100">
<svg aria-hidden="true" data-icon="lucide:monitor" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" width="20" x="2" y="3"></rect><path d="M8 21h8m-4-4v4"></path></g></svg>
<h4 className="font-medium text-zinc-900 text-sm">Moderne Infrastruktur</h4>
</div>
<div className="p-4 bg-zinc-50 rounded-lg border border-zinc-100">
<svg aria-hidden="true" data-icon="lucide:users" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
<h4 className="font-medium text-zinc-900 text-sm">Vernetzung</h4>
</div>
</div>
</div>
<div className="relative h-96 lg:h-full min-h-[400px] bg-zinc-900 rounded-2xl p-8 flex flex-col justify-end overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-zinc-700 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-30"></div>
<div className="relative z-10">
<span className="text-zinc-400 text-sm font-medium mb-2 block">Standort</span>
<h3 className="text-2xl text-white font-semibold mb-2">Zentral in Zürich</h3>
<p className="text-zinc-400 text-sm mb-6">Ausstellungsstrasse 104<br/>8005 Zürich</p>
<a className="inline-flex items-center text-white text-sm hover:underline" href="https://maps.google.com" target="_blank">
                            Auf Karte anzeigen <svg aria-hidden="true" data-icon="lucide:arrow-up-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 text-white text-center">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Starten Sie Ihre kreative Zukunft.</h2>
<p className="text-zinc-400 text-lg mb-10 font-light">
                Haben Sie Fragen zu unseren Lehrgängen oder Aufnahmeprüfungen? Wir beraten Sie gerne persönlich.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-zinc-950 rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors" href="#kontakt">
                    Kontakt aufnehmen
                </a>
<a className="w-full sm:w-auto px-8 py-3 border border-zinc-800 text-zinc-300 rounded-lg text-sm font-medium hover:bg-zinc-900 hover:text-white transition-colors" href="#anmeldung">
                    Jetzt anmelden
                </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 pt-16 pb-8" id="kontakt">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-4">
<div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center rounded-lg">
<span className="font-semibold text-xs tracking-tighter">SFGZ</span>
</div>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Schule für Gestaltung Zürich<br/>
                        Medien Form Farbe<br/>
                        Berufsfachschule &amp; Höhere Fachschule
                    </p>
</div>

<div>
<h4 className="font-semibold text-zinc-900 text-sm mb-4">Kontakt</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li>Ausstellungsstrasse 104CH-8005 Zürich</li>
<li>
<a className="hover:text-zinc-900 transition-colors" href="tel:+41444469777">+41 44 446 97 77</a>
</li>
<li>
<a className="hover:text-zinc-900 transition-colors" href="mailto:info@sfgz.ch">info@sfgz.ch</a>
</li>
</ul>
</div>

<div>
<h4 className="font-semibold text-zinc-900 text-sm mb-4">Angebot</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Grundbildung</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Höhere Fachschule</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Weiterbildung</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-zinc-900 text-sm mb-4">Service</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Intranet / Login</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Mediothek</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Downloads</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-400">© 2024 Schule für Gestaltung Zürich. Alle Rechte vorbehalten.</p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><svg aria-hidden="true" data-icon="lucide:instagram" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><svg aria-hidden="true" data-icon="lucide:linkedin" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><svg aria-hidden="true" data-icon="lucide:facebook" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
