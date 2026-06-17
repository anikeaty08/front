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



{"@context":"https://schema.org","@type":"Organization","name":"NATIMA GmbH","url":"https://www.natima.gmbh/","logo":"https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e2a7032a-fe52-4715-9011-7f9bee8783cb_320w.jpg","description":"Ihr Partner für sichere digitale Transformation im Gesundheitswesen. KI-Beratung, Compliance und Prozessautomatisierung.","address":{"@type":"PostalAddress","streetAddress":"Heinestraße 12a","addressLocality":"Bad Salzuflen","postalCode":"32105","addressCountry":"DE"},"email":"info@natima.gmbh","sameAs":["https://www.linkedin.com/company/natima-gmbh"],"founder":[{"@type":"Person","name":"Nadine Mühlenberg","jobTitle":"CEO","url":"https://nadinemuehlenberg.com/"},{"@type":"Person","name":"Tim Marxmeier","jobTitle":"CFO","url":"https://www.timmarxmeier.de/"},{"@type":"Person","name":"Dr. Martin Prause","jobTitle":"CTO","url":"https://www.linkedin.com/in/martin-prause/"}],"knowsAbout":["Künstliche Intelligenz im Gesundheitswesen","EU-KI-Verordnung","DSGVO Compliance","NIS-2","Digitale Transformation Pharma","Prozessautomatisierung"]}



{"@context":"https://schema.org","@type":"WebPage","name":"NATIMA GmbH — Sichere Digitale Transformation im Gesundheitswesen","description":"Ihr Partner für sichere digitale Transformation im Gesundheitswesen. KI-Potentialanalyse, Compliance-Beratung und Training.","url":"https://www.natima.gmbh/","inLanguage":"de-DE","isPartOf":{"@type":"WebSite","name":"NATIMA GmbH","url":"https://www.natima.gmbh/"},"mainEntity":{"@type":"ProfessionalService","name":"NATIMA GmbH","serviceType":["KI-Potentialanalyse","Prozessautomatisierung","Compliance & Security Beratung","Kompetenzaufbau","Technische Implementierung","KI Integration","Training"],"areaServed":{"@type":"Country","name":"Germany"}}}



{"@context":"https://schema.org","@type":"Book","name":"Künstliche Intelligenz verantwortungsvoll einsetzen","description":"Praxisnah und verständlich: Was ist KI eigentlich, wie funktioniert sie und was kann jeder einzelne tun, um sie sicher und gesetzeskonform zu nutzen.","url":"https://www.amazon.de/dp/3691540023","author":{"@type":"Organization","name":"NATIMA GmbH"},"isbn":"3691540023"}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons();

      // Simple parallax/glow effect on mousemove for body
      document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth * 100;
        const y = e.clientY / window.innerHeight * 100;
        document.documentElement.style.setProperty('--cursor-x', `${x}%`);
        document.documentElement.style.setProperty('--cursor-y', `${y}%`);
      });
    


      lucide.createIcons();
    
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
      

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-lime-500/10 mesh-blob"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 mesh-blob" style={{animationDelay: '-2s'}}></div>
<div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full bg-violet-500/10 mesh-blob" style={{animationDelay: '-4s'}}></div>
<div className="absolute inset-0 grid-pattern opacity-40"></div>
<div className="cursor-glow"></div>
</div>

<header className="fixed glass-nav w-full z-50 top-0" role="banner">
<div className="flex h-28 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<img alt="NATIMA GmbH Logo — Sichere Digitale Transformation im Gesundheitswesen" className="border-none w-auto h-20 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e2a7032a-fe52-4715-9011-7f9bee8783cb_320w.jpg"/>
</a>

<nav aria-label="Hauptnavigation" className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#herausforderungen" title="Herausforderungen der digitalen Transformation im Gesundheitswesen">
            Herausforderungen
          </a>
<a className="hover:text-zinc-900 transition-colors" href="#loesungen" title="Unser Leistungsspektrum — KI-Beratung, Compliance und Implementierung">
            Leistungsspektrum
          </a>
<a className="hover:text-zinc-900 transition-colors" href="#publikationen" title="Publikationen — Bücher, Whitepaper und Leitfäden zu KI und Compliance">
            Publikationen
          </a>
<a className="hover:text-zinc-900 transition-colors" href="#experten" title="Unser Expertenteam für digitale Transformation im Gesundheitswesen">
            Team
          </a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex px-4 py-2 bg-zinc-900 text-white text-xs font-semibold rounded-full transition-all hover:bg-zinc-800 hover:scale-105 items-center gap-2" href="mailto:info@natima.gmbh?subject=Kontaktanfrage%20%C3%BCber%20natima.gmbh" target="_self" title="Kontakt aufnehmen — E-Mail an NATIMA GmbH senden">
<span className="">Kontakt</span>
<svg aria-hidden="true" className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<button className="md:hidden text-zinc-500 hover:text-zinc-900">
<svg aria-hidden="true" className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</header>
<main className="relative z-10 pt-20" role="main">

<section className="overflow-hidden pt-24 pb-32 relative">
<div className="z-10 text-center max-w-6xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 bg-zinc-50 backdrop-blur-md mb-8 animate-[fadeIn_1s_ease-out]">
<span className="flex h-1.5 w-1.5 rounded-full bg-lime-500 shadow-[0_0_10px_rgba(132,204,22,0.8)]"></span>
<span className="text-xs font-medium text-zinc-600 tracking-wide">
              Secure Digital Transformation
            </span>
</div>

<h1 className="text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
            Sichere Digitale
            <br/>
<span className="aura-text">Transformation.</span>
</h1>

<p className="text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-2xl mx-auto font-light mb-12">
            Ihr Partner für Unternehmen im Gesundheitswesen. Von der Strategie
            bis zur erfolgreichen Umsetzung.
          </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="px-8 py-4 bg-zinc-900 text-white rounded-full font-medium text-sm transition-all hover:scale-105 hover:shadow-xl flex items-center gap-2" href="#loesungen">
              Leistungsspektrum
            </a>
<a className="glass hover:bg-zinc-50 transition-all flex items-center gap-2 text-sm font-medium text-zinc-900 border-zinc-200 border rounded-full pt-4 pr-8 pb-4 pl-8" href="mailto:info@natima.gmbh?subject=Kontaktanfrage%20%C3%BCber%20natima.gmbh" target="_self">
              Gespräch vereinbaren
            </a>
</div>

<div className="mt-24 relative max-w-4xl mx-auto perspective-1000">
<div className="absolute inset-0 bg-lime-500/20 blur-[100px] rounded-full opacity-50"></div>
<div className="relative glass rounded-2xl border border-zinc-200 p-2 shadow-2xl overflow-hidden">
<div className="aspect-[16/9] rounded-xl overflow-hidden relative bg-zinc-900">
<img alt="NATIMA Dashboard — EU-AI-Ready Compliance-Übersicht für digitale Transformation im Gesundheitswesen" className="w-full h-full object-cover opacity-80 transition-all duration-700 hover:scale-105" src="https://static.wixstatic.com/media/127d6ea4b14a46fea73e92b3b4d4d0d0.jpg/v1/fill/w_976,h_524,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Laptop.jpg"/>
<div className="bg-gradient-to-t from-zinc-950 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute bottom-8 left-8 p-4 glass rounded-xl border border-white/10 flex items-center gap-3" style={{pointerEvents: 'none', cursor: 'default'}}>
<div className="w-10 h-10 rounded-full bg-lime-500/20 flex items-center justify-center text-lime-400">
<svg aria-hidden="true" className="lucide lucide-check-circle w-5 h-5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<div>
<div className="text-xs text-zinc-400">Compliance</div>
<div className="text-lg font-bold text-white">EU-AI Ready</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-32 pb-32 relative" id="herausforderungen">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 mb-4 tracking-tight">
              Aktuelle Herausforderungen
              <br/>
<span className="text-zinc-500">vieler Unternehmen.</span>
</h2>
<p className="text-zinc-600 max-w-2xl mx-auto">
              Die digitale Transformation im Gesundheitswesen wirft viele Fragen
              auf. Wir liefern die Antworten.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="glass-card rounded-3xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<svg aria-hidden="true" className="lucide lucide-help-circle w-24 h-24 text-lime-400" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</div>
<div className="w-12 h-12 rounded-2xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center text-lime-600 mb-8 icon-glow-container">
<svg aria-hidden="true" className="lucide lucide-target w-6 h-6" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-3">
                Persönlicher Nutzen
              </h3>
<p className="text-sm text-zinc-600 leading-relaxed mb-6">
                Alle sprechen über Digitale Transformation und KI -
                <span className="text-zinc-900 font-medium">
                  was bringt MIR die Digitale Transformation?
                </span>
</p>
</div>

<div className="glass-card rounded-3xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<svg aria-hidden="true" className="lucide lucide-scale w-24 h-24 text-cyan-400" data-lucide="scale" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path><path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M7 21h10"></path></svg>
</div>
<div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 mb-8 icon-glow-container">
<svg aria-hidden="true" className="lucide lucide-shield-alert w-6 h-6" data-lucide="shield-alert" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-3">
                Regulatorik-Dschungel
              </h3>
<p className="text-sm text-zinc-600 leading-relaxed mb-6">
                Viele regulatorische Anforderungen (KBV, EU-KI Verordnung, CRA,
                DSGVO, Data Act, EHDS etc.) -
                <span className="text-zinc-900 font-medium">
                  welche Verordnung ist relevant für MICH?
                </span>
</p>
</div>

<div className="glass-card rounded-3xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<svg aria-hidden="true" className="lucide lucide-layout-grid w-24 h-24 text-violet-400" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</div>
<div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-600 mb-8 icon-glow-container">
<svg aria-hidden="true" className="lucide lucide-cpu w-6 h-6" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-3">
                System-Auswahl
              </h3>
<p className="text-sm text-zinc-600 leading-relaxed mb-6">
                Unübersichtlicher Markt für KI-Systeme -
                <span className="text-zinc-900 font-medium">
                  wie und welche KI setze ICH nun erfolgreich ein?
                </span>
</p>
</div>

<div className="glass-card rounded-3xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<svg aria-hidden="true" className="lucide lucide-trending-up w-24 h-24 text-pink-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-600 mb-8 icon-glow-container">
<svg aria-hidden="true" className="lucide lucide-award w-6 h-6" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-3">
                Wettbewerbsvorteil
              </h3>
<p className="text-sm text-zinc-600 leading-relaxed mb-6">
                Wir sind Experten im medizinisch / pharmazeutischen Bereich -
                <span className="text-zinc-900 font-medium">
                  wie nutze ICH die Digitale Transformation als
                  Wettbewerbsvorteil?
                </span>
</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative border-t border-zinc-200" id="loesungen">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 mb-4 tracking-tight">
              Leistungsspektrum
            </h2>
<p className="text-zinc-600 max-w-2xl mx-auto">
              Von der Analyse bis zur erfolgreichen Implementierung — alles aus
              einer Hand.
            </p>
</div>
<div className="grid lg:grid-cols-2 gap-8 items-stretch">
<div className="glass-card rounded-3xl p-8 md:p-12 flex flex-col h-full">
<h2 className="text-4xl md:text-5xl font-semibold text-zinc-900 mb-6 tracking-tight">
                Analyse und
                <br/>
                Beratung.
              </h2>
<p className="text-zinc-600 mb-8 leading-relaxed">
                Wir identifizieren Potenziale und sichern Sie rechtlich ab.
              </p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-lime-600">
                    1
                  </div>
<div className="">
<h4 className="text-zinc-900 font-medium mb-1">
                      KI Potentialanalyse
                    </h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                      Identifikation konkreter Anwendungsfälle für KI im
                      medizinischen und pharmazeutischen Kontext. Verhindern Sie
                      Fehlinvestitionen und fokussieren Sie sich auf Use Cases
                      mit echtem ROI.
                    </p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-lime-600">
                    2
                  </div>
<div className="">
<h4 className="text-zinc-900 font-medium mb-1">
                      Prozessautomatisierung
                    </h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                      Analyse und Optimierung bestehender Geschäftsprozesse. Oft
                      bringt nicht die neueste Hype-Technologie den Mehrwert,
                      sondern fundierte Datenanalyse und Automation.
                    </p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-lime-600">
                    3
                  </div>
<div className="">
<h4 className="text-zinc-900 font-medium mb-1">
                      Compliance &amp; Security
                    </h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                      Beratung zu regulatorischen Anforderungen
                      (EU-Verordnungen, ISO-Normen). Rechtssichere
                      Implementierung neuer digitaler Technologien.
                    </p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-lime-600">
                    4
                  </div>
<div className="">
<h4 className="text-zinc-900 font-medium mb-1">
                      Kompetenzaufbau
                    </h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                      Befähigung der Mitarbeitenden in digitalen Technologien
                      als neuer Hygienefaktor im Unternehmen.
                    </p>
</div>
</div>
</div>
</div>
<div className="glass-card rounded-3xl p-8 md:p-12 flex flex-col h-full">
<h2 className="text-4xl md:text-5xl font-semibold text-zinc-900 mb-6 tracking-tight">
                Implementierung
                <br/>
                &amp; Training.
              </h2>
<p className="text-zinc-600 mb-8 leading-relaxed">
                Wir setzen um und nehmen Ihre Teams mit auf die Reise.
              </p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-cyan-600">
<svg aria-hidden="true" className="lucide lucide-settings w-4 h-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<div className="">
<h4 className="text-zinc-900 font-medium mb-1">
                      Technische Implementierung
                    </h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                      Umsetzung von Workflow-Automatisierungen. Direkte
                      Umsetzung und/oder Befähigung Ihrer IT, um das Beste aus
                      Ihren Daten herauszuholen.
                    </p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-cyan-600">
<svg aria-hidden="true" className="lucide lucide-link w-4 h-4" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
</div>
<div className="">
<h4 className="text-zinc-900 font-medium mb-1">
                      KI Integration
                    </h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                      Verbindung moderner KI-Lösungen mit bestehenden
                      Systemlandschaften (ERP, CRM, QMS), ohne Workflows zu
                      unterbrechen.
                    </p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-cyan-600">
<svg aria-hidden="true" className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="">
<h4 className="text-zinc-900 font-medium mb-1">Training</h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                      Praktische Schulungen. Wir befähigen Ihre Mitarbeitenden,
                      eigenständig mit KI-Tools zu arbeiten und diese
                      kontinuierlich zu optimieren.
                    </p>
</div>
</div>
</div>
<div className="mt-12 mt-auto">
<a className="btn-primary inline-flex px-6 py-3 rounded-full text-white text-sm font-medium items-center gap-2" href="mailto:info@natima.gmbh?subject=Kontaktanfrage%20%C3%BCber%20natima.gmbh" target="_self">
                  Detailliertes Angebot anfordern
                  <svg aria-hidden="true" className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-50 pt-32 pb-32 relative" id="publikationen">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 mb-4">
              Theorie trifft Praxis.
            </h2>
<p className="text-zinc-600">
              Unser Wissen für Ihren Erfolg zum Nachlesen.
            </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="glass-card p-6 rounded-2xl flex flex-col h-full">
<div className="mb-4">
<span className="text-xs font-bold text-violet-600 uppercase tracking-widest bg-violet-100 px-2 py-1 rounded border border-violet-200">
                  Buch
                </span>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">
                Künstliche Intelligenz verantwortungsvoll einsetzen
              </h3>
<p className="text-sm text-zinc-600 mb-6 flex-grow">
                Praxisnah und verständlich: Was ist KI eigentlich, wie
                funktioniert sie und was kann jeder einzelne tun, um sie sicher
                und gesetzeskonform zu nutzen.
              </p>
<a className="hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 text-sm font-medium text-zinc-900 text-center bg-zinc-100 w-full rounded-lg pt-3 pb-3" href="https://www.amazon.de/dp/3691540023" target="_blank">
<span className="">Auf Amazon ansehen</span>
<svg aria-hidden="true" className="lucide lucide-external-link w-3 h-3" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>

<div className="glass-card p-6 rounded-2xl flex flex-col h-full">
<div className="mb-4">
<span className="text-xs font-bold text-cyan-600 uppercase tracking-widest bg-cyan-100 px-2 py-1 rounded border border-cyan-200">
                  Whitepaper
                </span>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">
                EU-Regularien für medizinische Labore
              </h3>
<p className="text-sm text-zinc-600 mb-6 flex-grow">
                Compliance-Wegweiser für die digitale Transformation. Leitfaden
                durch NIS-2, Produkthaftungsrichtlinie, KI-Verordnung, CRA,
                IVDR, MDR, DSGVO und EHDS.
              </p>
<a className="hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 text-sm font-medium text-zinc-900 text-center bg-zinc-100 w-full rounded-lg pt-3 pb-3" href="http://files.natima.gmbh/Whitepaper-EU-Regulation-Labore.pdf" target="_blank">
<span className="">Download PDF</span>
<svg aria-hidden="true" className="lucide lucide-download w-3 h-3" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</a>
</div>

<div className="glass-card p-6 rounded-2xl flex flex-col h-full">
<div className="mb-4">
<span className="text-xs font-bold text-lime-600 uppercase tracking-widest bg-lime-100 px-2 py-1 rounded border border-lime-200">
                  Leitfaden
                </span>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">
                Sicherheit bei KI-Anwendungen
              </h3>
<p className="text-sm text-zinc-600 mb-6 flex-grow">
                Welche Anforderungen der EU KI-Verordnung sind relevant? Wie
                können Labore KI-gestützte Anwendungen sicher gestalten?
                Orientierung und Risikominimierung.
              </p>
<a className="hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 text-sm font-medium text-zinc-900 text-center bg-zinc-100 w-full rounded-lg pt-3 pb-3" href="http://files.natima.gmbh/Die-EU-KI-Verordnung-im-Medizinprodukte-Sektor.pdf" target="_blank">
<span className="">Download PDF</span>
<svg aria-hidden="true" className="lucide lucide-download w-3 h-3" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="experten">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 mb-4">
              Die Experten.
            </h2>
<p className="text-zinc-600">Kompetenz aus Wissenschaft und Praxis.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative">
<div className="absolute -inset-0.5 bg-gradient-to-r from-lime-500 to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
<div className="relative glass-card rounded-2xl p-1 flex flex-col h-full">
<div className="overflow-hidden rounded-xl relative bg-zinc-200 aspect-[3/4]">
<img alt="Nadine Mühlenberg — CEO NATIMA GmbH, Wirtschaftswissenschaftlerin und zertifizierte Business-Trainerin" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://static.wixstatic.com/media/4ad490_f45ad7192c6e42a3938aa01217a50f7b~mv2.png/v1/fill/w_302,h_403,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Nadine_grau.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<span className="text-xs font-bold text-lime-400 uppercase tracking-widest bg-lime-500/20 px-2 py-1 rounded border border-lime-500/20">
                      CEO
                    </span>
<h3 className="text-xl font-semibold text-white mt-2">
                      Nadine Mühlenberg
                    </h3>
</div>
</div>
<div className="p-6">
<p className="text-xs text-zinc-600 leading-relaxed mb-4">
                    Wirtschaftswissenschaftlerin und zertifizierte
                    Business-Trainerin mit über 15 Jahren Erfahrung im Vertrieb
                    und 17 Jahren in der Erwachsenenbildung. Nadine verbindet
                    tiefes Verständnis für unternehmerische Herausforderungen
                    mit der Fähigkeit, komplexe Themen verständlich und
                    praxisnah zu vermitteln. Sie begleitet Unternehmen im
                    Gesundheitswesen dabei, die digitale Transformation nicht
                    nur strategisch zu planen, sondern im gesamten Team
                    nachhaltig zu verankern. Ihr Credo: Technologie muss von
                    Menschen verstanden und gelebt werden — nur so entstehen
                    nachhaltige Ergebnisse.
                  </p>
<div className="flex gap-3">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="https://nadinemuehlenberg.com/" target="_blank">
<svg aria-hidden="true" className="lucide lucide-globe w-4 h-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</a>
</div>
</div>
</div>
</div>

<div className="group relative">
<div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
<div className="relative glass-card rounded-2xl p-1 flex flex-col h-full">
<div className="overflow-hidden rounded-xl relative bg-zinc-200 aspect-[3/4]">
<img alt="Tim Marxmeier — CFO NATIMA GmbH, KI- und Kommunikationsexperte" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://static.wixstatic.com/media/4ad490_33f193356ed149d1816934e074043899~mv2.png/v1/fill/w_302,h_403,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Bild1%20(1).png"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/20 px-2 py-1 rounded border border-cyan-500/20">
                      CFO
                    </span>
<h3 className="text-xl font-semibold text-white mt-2">
                      Tim Marxmeier
                    </h3>
</div>
</div>
<div className="p-6">
<p className="leading-relaxed text-xs text-zinc-600 mb-4">
                    KI- und Kommunikationsexperte mit einem einzigartigen Profil
                    an der Schnittstelle von Technologie, Strategie und Mensch.
                    Tim verbindet fundierte strategische Beratung mit
                    praxisnahen Trainingskonzepten, die sicherstellen, dass
                    KI-Lösungen nicht nur implementiert, sondern von den Teams
                    aktiv angenommen und produktiv genutzt werden. Mit seiner
                    Erfahrung in der Entwicklung maßgeschneiderter
                    Schulungsprogramme sorgt er dafür, dass Mitarbeitende den
                    Mehrwert neuer Technologien erkennen und eigenständig nutzen
                    können. Sein Credo: KI entfaltet ihren wahren Wert erst
                    dann, wenn sie von den Menschen im Unternehmen verstanden
                    und aktiv eingesetzt wird.
                  </p>
<div className="flex gap-3">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="https://www.timmarxmeier.de/" target="_blank">
<svg aria-hidden="true" className="lucide lucide-globe w-4 h-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</a>
</div>
</div>
</div>
</div>

<div className="group relative">
<div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
<div className="relative glass-card rounded-2xl p-1 flex flex-col h-full">
<div className="overflow-hidden rounded-xl relative bg-zinc-200 aspect-[3/4]">
<img alt="Dr. Martin Prause — CTO NATIMA GmbH, Promovierter Wirtschaftswissenschaftler und Informatiker mit 20+ Jahren ML-Expertise" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://static.wixstatic.com/media/4ad490_fd1a1595e17441f58bc5fac3ba677cf7~mv2.png/v1/fill/w_302,h_403,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/martin_grau_edited_edited.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<span className="text-xs font-bold text-violet-400 uppercase tracking-widest bg-violet-500/20 px-2 py-1 rounded border border-violet-500/20">
                      CTO
                    </span>
<h3 className="text-xl font-semibold text-white mt-2">
                      Dr. Martin Prause
                    </h3>
</div>
</div>
<div className="p-6">
<p className="text-xs text-zinc-600 leading-relaxed mb-4">
                    Promovierter Wirtschaftswissenschaftler und Informatiker mit
                    über 20 Jahren Expertise in Machine Learning,
                    datengetriebenen Strategien und technischer Implementierung.
                    Als Assistant Professor an renommierten Hochschulen (HKUST,
                    WHU, AKAD) verbindet Martin akademische Exzellenz mit
                    unternehmerischer Praxis. Er verantwortet die technische
                    Architektur der NATIMA-Lösungen und stellt sicher, dass
                    KI-Systeme nicht nur leistungsfähig, sondern auch
                    regulatorisch konform und skalierbar sind. Sein Credo:
                    Datengetriebene Entscheidungen sind der Schlüssel zu
                    nachhaltigem Wettbewerbsvorteil — wenn sie auf einer soliden
                    technischen und ethischen Grundlage stehen.
                  </p>
<div className="flex gap-3">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="https://www.linkedin.com/in/martin-prause/" target="_blank">
<svg aria-hidden="true" className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-32 pb-32 relative" id="kontakt">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-lime-500/10 pointer-events-none"></div>
<div className="relative max-w-xl mx-auto px-6">
<div className="glass-card rounded-3xl p-8 sm:p-12 border border-zinc-200 shadow-2xl relative text-center">

<div className="absolute -inset-10 bg-gradient-to-r from-lime-500/10 to-cyan-500/10 blur-3xl rounded-full -z-10 opacity-50"></div>
<h2 className="text-2xl font-semibold text-zinc-900 mb-3 tracking-tight">
              Sie möchten uns näher kennenlernen?
            </h2>
<p className="text-sm text-zinc-600 mb-8">
              Kontaktieren Sie uns für ein unverbindliches Erstgespräch.
            </p>
<a className="text-2xl sm:text-3xl font-semibold text-zinc-900 hover:text-lime-600 transition-colors duration-300 tracking-tight inline-block" href="mailto:info@natima.gmbh?subject=Kontaktanfrage%20%C3%BCber%20natima.gmbh" style={{textDecoration: 'underline', textDecorationColor: 'rgba(132,204,22,0.4)', textUnderlineOffset: '6px', textDecorationThickness: '2px'}} target="_self">
              info@natima.gmbh
            </a>
<p className="text-xs text-zinc-500 mt-8">
              Heinestraße 12a, 32105 Bad Salzuflen
            </p>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-200 bg-zinc-50 py-12 relative z-10" role="contentinfo">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="font-semibold text-zinc-900 tracking-wide">
            NATIMA GmbH
          </span>
<span className="text-zinc-400">/</span>
<span className="text-xs text-zinc-500">
            © 2026 All rights reserved.
          </span>
</div>
<div className="flex gap-6">
<a className="hover:text-zinc-900 transition-colors text-xs text-zinc-500" href="/impressum-datenschutz">
            Impressum &amp; Datenschutz
          </a>
</div>
</div>
</footer>



    </>
  );
}
