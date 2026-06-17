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



        // Initialize Lucide Icons
        lucide.createIcons();

        // GSAP Animations
        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            // Hero section animations
            const tlHero = gsap.timeline();
            
            tlHero.from(".gsap-fade-up", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.2,
                delay: 0.2
            });

            // Floating animations for hero cards
            gsap.to(".gsap-float-1", {
                y: -15,
                duration: 4,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1
            });
            gsap.to(".gsap-float-2", {
                y: 15,
                x: 5,
                duration: 5,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
                delay: 1
            });
            gsap.to(".gsap-float-3", {
                y: -10,
                rotation: 8,
                duration: 3.5,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
                delay: 0.5
            });

            // Bento Grid animations
            gsap.utils.toArray(".gsap-bento-item").forEach((item, i) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    },
                    y: 40,
                    opacity: 0,
                    duration: 0.7,
                    ease: "power2.out",
                    delay: i * 0.1
                });
            });

            // General fade up for generic sections (like CTA)
            gsap.utils.toArray(".gsap-fade-up[data-scroll]").forEach(element => {
                 gsap.from(element, {
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                    },
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out"
                });
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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center transform transition-transform group-hover:scale-105">
<i className="text-white w-5 h-5" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<span className="text-xl tracking-tight text-slate-900 font-semibold font-jakarta">Agency<span className="text-emerald-600 font-semibold font-jakarta">.</span></span>
</a>

<nav className="hidden lg:flex items-center gap-8 h-full">
<a className="text-base text-slate-600 hover:text-slate-900 transition-colors font-roboto" href="#">Startseite</a>
<a className="text-base text-slate-600 hover:text-slate-900 transition-colors font-roboto" href="#">Über uns</a>

<div className="relative h-full flex items-center group cursor-pointer">
<span className="text-base text-slate-600 group-hover:text-slate-900 transition-colors flex items-center gap-1 font-roboto">
                        Leistungen <i className="w-4 h-4 transition-transform group-hover:rotate-180" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>

<div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mega-menu-wrapper w-[48rem]">
<div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 grid grid-cols-2 gap-4">
<a className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors" href="#">
<div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
<i className="w-5 h-5" data-lucide="monitor" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base tracking-tight text-slate-900 font-roboto">Webdesign</h3>
<p className="text-sm text-slate-500 mt-1 font-roboto">Moderne, conversion-optimierte Webseiten.</p>
</div>
</a>
<a className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors" href="#">
<div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
<i className="w-5 h-5" data-lucide="refresh-cw" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base tracking-tight text-slate-900 font-roboto">Webseiten Relaunch</h3>
<p className="text-sm text-slate-500 mt-1 font-roboto">Frischer Wind für Ihren bestehenden Auftritt.</p>
</div>
</a>
<a className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors" href="#">
<div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
<i className="w-5 h-5" data-lucide="layout-template" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base tracking-tight text-slate-900 font-roboto">WordPress &amp; Framer</h3>
<p className="text-sm text-slate-500 mt-1 font-roboto">Flexible Systeme für maximale Performance.</p>
</div>
</a>
<a className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors" href="#">
<div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
<i className="w-5 h-5" data-lucide="bar-chart" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base tracking-tight text-slate-900 font-roboto">SEO Optimierung</h3>
<p className="text-sm text-slate-500 mt-1 font-roboto">Bessere Rankings bei Google &amp; Co.</p>
</div>
</a>
<a className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors" href="#">
<div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
<i className="w-5 h-5" data-lucide="server" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base tracking-tight text-slate-900 font-roboto">Hosting &amp; Pflege</h3>
<p className="text-sm text-slate-500 mt-1 font-roboto">Sicherer Betrieb und regelmäßige Updates.</p>
</div>
</a>
<a className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors" href="#">
<div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
<i className="w-5 h-5" data-lucide="pen-tool" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base tracking-tight text-slate-900 font-roboto">Corporate Design</h3>
<p className="text-sm text-slate-500 mt-1 font-roboto">Einheitlicher Markenauftritt über alle Kanäle.</p>
</div>
</a>
<div className="col-span-2 mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
<span className="text-sm text-slate-500 font-roboto">Kennen Sie Ihr Potenzial?</span>
<a className="text-sm text-emerald-600 hover:text-emerald-700 flex items-center gap-1 font-roboto" href="#">
                                    Kostenlose Webseitenanalyse <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</div>

<div className="relative h-full flex items-center group cursor-pointer">
<span className="text-base text-slate-600 group-hover:text-slate-900 transition-colors flex items-center gap-1 font-roboto">
                        Branchen <i className="w-4 h-4 transition-transform group-hover:rotate-180" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>

<div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mega-menu-wrapper w-[40rem]">
<div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 flex">
<div className="w-1/3 border-r border-slate-100 pr-6">
<h3 className="text-lg tracking-tight text-slate-900 mb-2 font-roboto">Unsere Expertise</h3>
<p className="text-sm text-slate-500 font-roboto">Wir kennen die spezifischen Anforderungen verschiedenster Industrien und gestalten maßgeschneiderte Lösungen.</p>
<a className="mt-4 inline-flex items-center text-sm text-emerald-600 hover:text-emerald-700 font-roboto" href="#">
                                    Alle Branchen ansehen
                                </a>
</div>
<div className="w-2/3 pl-6 grid grid-cols-2 gap-y-4 gap-x-6">
<a className="group/item flex items-center gap-3" href="#">
<div className="p-2 rounded-md bg-slate-50 text-slate-600 group-hover/item:bg-emerald-50 group-hover/item:text-emerald-600 transition-colors">
<i className="w-4 h-4" data-lucide="hammer" strokeWidth="1.5"></i>
</div>
<span className="text-base text-slate-700 group-hover/item:text-slate-900 font-roboto">Handwerker</span>
</a>
<a className="group/item flex items-center gap-3" href="#">
<div className="p-2 rounded-md bg-slate-50 text-slate-600 group-hover/item:bg-emerald-50 group-hover/item:text-emerald-600 transition-colors">
<i className="w-4 h-4" data-lucide="stethoscope" strokeWidth="1.5"></i>
</div>
<span className="text-base text-slate-700 group-hover/item:text-slate-900 font-roboto">Ärzte &amp; Kliniken</span>
</a>
<a className="group/item flex items-center gap-3" href="#">
<div className="p-2 rounded-md bg-slate-50 text-slate-600 group-hover/item:bg-emerald-50 group-hover/item:text-emerald-600 transition-colors">
<i className="w-4 h-4" data-lucide="utensils" strokeWidth="1.5"></i>
</div>
<span className="text-base text-slate-700 group-hover/item:text-slate-900 font-roboto">Gastronomie</span>
</a>
<a className="group/item flex items-center gap-3" href="#">
<div className="p-2 rounded-md bg-slate-50 text-slate-600 group-hover/item:bg-emerald-50 group-hover/item:text-emerald-600 transition-colors">
<i className="w-4 h-4" data-lucide="scale" strokeWidth="1.5"></i>
</div>
<span className="text-base text-slate-700 group-hover/item:text-slate-900 font-roboto">Kanzleien</span>
</a>
<a className="group/item flex items-center gap-3" href="#">
<div className="p-2 rounded-md bg-slate-50 text-slate-600 group-hover/item:bg-emerald-50 group-hover/item:text-emerald-600 transition-colors">
<i className="w-4 h-4" data-lucide="building" strokeWidth="1.5"></i>
</div>
<span className="text-base text-slate-700 group-hover/item:text-slate-900 font-roboto">Immobilien</span>
</a>
<a className="group/item flex items-center gap-3" href="#">
<div className="p-2 rounded-md bg-slate-50 text-slate-600 group-hover/item:bg-emerald-50 group-hover/item:text-emerald-600 transition-colors">
<i className="w-4 h-4" data-lucide="shopping-bag" strokeWidth="1.5"></i>
</div>
<span className="text-base text-slate-700 group-hover/item:text-slate-900 font-roboto">E-Commerce</span>
</a>
</div>
</div>
</div>
</div>
<a className="text-base text-slate-600 hover:text-slate-900 transition-colors font-roboto" href="#">Kontakt</a>
</nav>

<div className="hidden lg:flex items-center gap-4">
<a className="text-base text-slate-600 hover:text-slate-900 transition-colors font-roboto" href="#">Login</a>
<a className="px-5 py-2.5 rounded-full bg-emerald-600 text-white text-base hover:bg-emerald-700 transition-colors shadow-sm shadow-emerald-600/20 font-roboto" href="#">
                    Projekt starten
                </a>
</div>

<button className="lg:hidden p-2 text-slate-600">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</header>
<main className="">

<section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/50 via-slate-50 to-slate-50 z-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

<div className="max-w-2xl text-left gsap-fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/60 shadow-sm mb-6">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-sm text-slate-700 font-roboto">Premium Webdesign Agentur in Münster</span>
</div>
<h1 className="text-5xl lg:text-7xl tracking-tight text-slate-900 leading-[1.1] mb-6 font-semibold font-jakarta">
                            Webseiten, die <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400 font-semibold font-jakarta">Kunden gewinnen</span>.
                        </h1>
<p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg font-semibold font-jakarta">
                            Verabschieden Sie sich von einer Webseite, die nur existiert. Wir bauen digitale Erlebnisse, die auf Google ranken, überzeugen und messbar neue Kunden generieren.
                        </p>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-600 text-white text-lg hover:bg-emerald-700 transition-all transform hover:scale-[1.02] shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 font-roboto" href="#">
                                Kostenlose Analyse <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-700 text-lg hover:bg-slate-50 transition-colors border border-slate-200 shadow-sm flex items-center justify-center font-roboto" href="#">
                                Unsere Leistungen
                            </a>
</div>

<div className="mt-12 flex items-center gap-4">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-slate-50 bg-emerald-100 flex items-center justify-center overflow-hidden"><img alt="Client" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=1"/></div>
<div className="w-10 h-10 rounded-full border-2 border-slate-50 bg-emerald-200 flex items-center justify-center overflow-hidden"><img alt="Client" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=2"/></div>
<div className="w-10 h-10 rounded-full border-2 border-slate-50 bg-emerald-300 flex items-center justify-center overflow-hidden"><img alt="Client" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=3"/></div>
<div className="w-10 h-10 rounded-full border-2 border-slate-50 bg-slate-100 flex items-center justify-center text-xs text-slate-600 font-roboto">+50</div>
</div>
<div className="text-sm text-slate-500 font-roboto">
<div className="flex items-center text-emerald-500 mb-0.5">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<span className="text-slate-700 font-roboto">5.0</span> von zufriedenen Kunden
                            </div>
</div>
</div>

<div className="relative h-[500px] hidden lg:block perspective-1000">

<div className="absolute top-1/2 right-0 -translate-y-1/2 w-[340px] h-[460px] bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden transform -rotate-6 transition-transform hover:rotate-0 duration-500 gsap-float-1 z-20 flex flex-col">

<div className="h-10 border-b border-slate-100 flex items-center px-4 gap-2 bg-slate-50/50">
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
</div>
<div className="p-6 flex-1 bg-slate-50 flex flex-col gap-4">
<div className="w-3/4 h-6 bg-slate-200 rounded animate-pulse"></div>
<div className="w-full h-32 bg-emerald-100 rounded-xl"></div>
<div className="w-1/2 h-4 bg-slate-200 rounded"></div>
<div className="w-full h-4 bg-slate-200 rounded"></div>
<div className="w-5/6 h-4 bg-slate-200 rounded"></div>
<div className="mt-auto w-full h-10 bg-emerald-600 rounded-lg"></div>
</div>
</div>

<div className="absolute top-10 right-32 w-[280px] h-[360px] bg-white rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 overflow-hidden transform -rotate-12 opacity-80 blur-[1px] gsap-float-2 z-10">
<div className="p-5 flex flex-col gap-3 h-full">
<div className="w-10 h-10 bg-slate-100 rounded-full mb-2"></div>
<div className="w-full h-3 bg-slate-200 rounded"></div>
<div className="w-2/3 h-3 bg-slate-200 rounded"></div>
<div className="mt-4 grid grid-cols-2 gap-2">
<div className="h-20 bg-slate-100 rounded-lg"></div>
<div className="h-20 bg-slate-100 rounded-lg"></div>
</div>
</div>
</div>

<div className="absolute bottom-10 right-48 w-[240px] p-4 bg-white rounded-2xl shadow-lg border border-slate-100 transform rotate-6 z-30 gsap-float-3 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<i data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-sm text-slate-500 font-roboto">Sichtbarkeit</p>
<p className="text-xl text-slate-900 font-semibold font-jakarta">+124%</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-7xl mx-auto px-6 sm:px-8">
<div className="mb-16 max-w-2xl text-left gsap-fade-up">
<span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-600 text-sm mb-4 font-roboto">Digitale Lösungen</span>
<h2 className="text-4xl lg:text-5xl tracking-tight text-slate-900 mb-6 font-semibold font-jakarta">Alles für Ihren digitalen Erfolg</h2>
<p className="text-xl text-slate-600 font-semibold font-jakarta">Wir kombinieren state-of-the-art Design mit technischer Exzellenz, um Ihre Ziele zu übertreffen.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

<div className="lg:col-span-2 bg-slate-50 rounded-3xl p-8 border border-slate-100 relative overflow-hidden group gsap-bento-item">
<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 transform translate-x-1/2 -translate-y-1/2"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="max-w-md">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600 mb-6 border border-slate-100">
<i data-lucide="layout" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl tracking-tight text-slate-900 mb-3 font-semibold font-jakarta">Premium Custom Webseiten</h3>
<p className="text-lg text-slate-600 mb-6 font-roboto">Wir erstellen maßgeschneiderte Webseiten, die Ihre Marke perfekt repräsentieren und darauf ausgelegt sind, Besucher in Kunden zu verwandeln. Kein Baukasten, 100% individuell.</p>
</div>

<div className="mt-8 bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center justify-between max-w-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
<i className="w-5 h-5 text-slate-500" data-lucide="code" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-sm text-slate-900 font-roboto">Performance Score</p>
<p className="text-xs text-slate-500 font-roboto">Google Lighthouse</p>
</div>
</div>
<div className="text-emerald-600 text-lg flex items-center gap-1 font-roboto">
                                    99 <span className="text-xs text-slate-400 font-roboto">/100</span>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 relative overflow-hidden gsap-bento-item">
<div className="h-full flex flex-col">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600 mb-6 border border-slate-100">
<i data-lucide="search" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl tracking-tight text-slate-900 mb-3 font-semibold font-jakarta">SEO Optimierung</h3>
<p className="text-lg text-slate-600 mb-8 font-roboto">Platz 1 in Münster ist kein Zufall. Wir optimieren Struktur und Inhalte für maximale Sichtbarkeit.</p>

<div className="mt-auto relative h-24 w-full flex items-end gap-2 justify-between px-2">
<div className="w-1/6 bg-slate-200 rounded-t-sm h-1/4"></div>
<div className="w-1/6 bg-slate-200 rounded-t-sm h-2/4"></div>
<div className="w-1/6 bg-emerald-200 rounded-t-sm h-3/4"></div>
<div className="w-1/6 bg-emerald-400 rounded-t-sm h-full relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-emerald-600 ring-4 ring-white"></div>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col justify-between gsap-bento-item">
<div>
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600 mb-6 border border-slate-100">
<i data-lucide="blocks" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl tracking-tight text-slate-900 mb-3 font-semibold font-jakarta">WordPress &amp; Framer</h3>
<p className="text-lg text-slate-600 font-roboto">Egal ob hochflexibles CMS oder rasend schnelle Frontend-Lösung. Wir nutzen das beste Werkzeug für Ihren Fall.</p>
</div>
<ul className="mt-8 space-y-3">
<li className="flex items-center gap-3 text-slate-700 text-base font-roboto">
<i className="w-5 h-5 text-emerald-500 shrink-0" data-lucide="check" strokeWidth="1.5"></i> Einfache Inhaltspflege
                             </li>
<li className="flex items-center gap-3 text-slate-700 text-base font-roboto">
<i className="w-5 h-5 text-emerald-500 shrink-0" data-lucide="check" strokeWidth="1.5"></i> Höchste Sicherheit
                             </li>
</ul>
</div>

<div className="lg:col-span-2 bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 relative overflow-hidden gsap-bento-item">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
<div className="relative z-10 h-full flex flex-col md:flex-row gap-8 justify-between">
<div className="max-w-sm">
<h3 className="text-2xl tracking-tight text-white mb-3 font-semibold font-jakarta">Reibungsloser Ablauf</h3>
<p className="text-lg text-slate-400 mb-8 font-roboto">Vom ersten Konzept bis zum Launch in unter 30 Tagen. Wir kümmern uns um alles, Sie sparen wertvolle Zeit.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-300 text-base font-roboto">
<i className="w-4 h-4 text-emerald-400" data-lucide="pencil" strokeWidth="1.5"></i> Kostenlose Erstanalyse
                                    </li>
<li className="flex items-center gap-3 text-slate-300 text-base font-roboto">
<i className="w-4 h-4 text-emerald-400" data-lucide="settings" strokeWidth="1.5"></i> Maßgeschneidertes Konzept
                                    </li>
</ul>
</div>

<div className="hidden md:flex flex-col items-center justify-center w-64 bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6 backdrop-blur-sm">
<div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
<i className="w-8 h-8 text-emerald-400" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<p className="text-white mb-1 font-roboto">Projekt Abgeschlossen</p>
<p className="text-sm text-slate-400 text-center font-roboto">Ihre neue Webseite ist online und bereit Kunden zu gewinnen.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-5xl mx-auto px-6 sm:px-8">
<div className="bg-emerald-600 rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-emerald-900/10 gsap-fade-up">
<div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')]"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl tracking-tight text-white mb-6 font-semibold font-jakarta">Bereit für den digitalen Durchbruch?</h2>
<p className="text-xl text-emerald-50 mb-10 leading-relaxed font-semibold font-jakarta">
                            Lassen Sie uns gemeinsam herausfinden, wie viel Potenzial in Ihrem digitalen Auftritt steckt. Unverbindlich und kostenlos.
                        </p>
<a className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-emerald-600 text-lg hover:bg-slate-50 transition-transform transform hover:scale-105 shadow-lg font-roboto" href="#">
                            Analyse anfordern <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6 sm:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

<div className="lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center">
<i className="text-white w-5 h-5" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<span className="text-xl tracking-tight text-slate-900 font-semibold font-jakarta">Agency<span className="text-emerald-600 font-semibold font-jakarta">.</span></span>
</a>
<p className="text-lg text-slate-500 max-w-sm mb-6 font-roboto">
                        Ihre Webdesign Agentur für messbare Ergebnisse, starke Sichtbarkeit und modernes Design in Münster und bundesweit.
                    </p>
<div className="flex items-center gap-4 text-slate-400">
<a className="hover:text-emerald-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="hover:text-emerald-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i></a>
<a className="hover:text-emerald-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i></a>
</div>
</div>

<div>
<h4 className="text-base text-slate-900 mb-6 font-roboto">Leistungen</h4>
<ul className="space-y-4">
<li><a className="text-base text-slate-500 hover:text-emerald-600 transition-colors font-roboto" href="#">Webdesign</a></li>
<li><a className="text-base text-slate-500 hover:text-emerald-600 transition-colors font-roboto" href="#">Webseiten Relaunch</a></li>
</ul>
</div>
<div>
<h4 className="text-base text-slate-900 mb-6 font-roboto">Agentur</h4>
<ul className="space-y-4">
<li><a className="text-base text-slate-500 hover:text-emerald-600 transition-colors font-roboto" href="#">Über uns</a></li>
<li><a className="text-base text-slate-500 hover:text-emerald-600 transition-colors font-roboto" href="#">Branchen</a></li>
</ul>
</div>
<div>
<h4 className="text-base text-slate-900 mb-6 font-roboto">Rechtliches</h4>
<ul className="space-y-4">
<li><a className="text-base text-slate-500 hover:text-emerald-600 transition-colors font-roboto" href="#">Impressum</a></li>
<li><a className="text-base text-slate-500 hover:text-emerald-600 transition-colors font-roboto" href="#">Datenschutz</a></li>
</ul>
</div>
</div>

<div className="border-t border-slate-100 pt-8 pb-8">
<p className="text-sm text-slate-900 mb-4 font-roboto">Webdesign vor Ort:</p>
<div className="flex flex-wrap gap-x-6 gap-y-2">
<a className="text-sm text-slate-500 hover:text-emerald-600 transition-colors font-roboto" href="#">Webdesign Münster</a>
<a className="text-sm text-slate-500 hover:text-emerald-600 transition-colors font-roboto" href="#">Webdesign Telgte</a>
<a className="text-sm text-slate-500 hover:text-emerald-600 transition-colors font-roboto" href="#">Webdesign Greven</a>
<a className="text-sm text-slate-500 hover:text-emerald-600 transition-colors font-roboto" href="#">Webdesign Warendorf</a>
<a className="text-sm text-slate-500 hover:text-emerald-600 transition-colors font-roboto" href="#">Webdesign Steinfurt</a>
<a className="text-sm text-slate-500 hover:text-emerald-600 transition-colors font-roboto" href="#">Webdesign Coesfeld</a>
<a className="text-sm text-slate-500 hover:text-emerald-600 transition-colors font-roboto" href="#">Webdesign Osnabrück</a>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-slate-400 font-roboto">© 2024 Agency. Alle Rechte vorbehalten.</p>
<p className="text-sm text-slate-400 flex items-center gap-1 font-roboto">Mit <i className="w-3 h-3 text-red-500 fill-current" data-lucide="heart"></i> entwickelt in Münster</p>
</div>
</div>
</footer>


    </>
  );
}
