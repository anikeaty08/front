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
      

<div className="fixed inset-0 -z-50 h-full w-full bg-neutral-950">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

<div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-500 opacity-20 blur-[100px]"></div>
<div className="absolute right-0 top-0 -z-10 h-screen w-screen bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>

<div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute top-1/2 left-0 h-[400px] w-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-lg font-medium tracking-tight text-white flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-neutral-900/80 border border-neutral-800 flex items-center justify-center group-hover:border-neutral-600 transition-colors shadow-lg shadow-indigo-500/10">
<span className="font-semibold text-sm font-geist">M</span>
</div>
<span className="text-neutral-300 group-hover:text-white transition-colors font-geist">Montaż.</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-400 hover:text-white transition-colors font-geist" href="#portfolio">Projekty</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors font-geist" href="#uslugi">Usługi</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors font-geist" href="#o-mnie">O mnie</a>
</div>
<a className="text-sm font-medium bg-white/90 text-black px-4 py-2 rounded-full hover:bg-white transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="mailto:kontakt@example.com">
<span className="font-geist">Współpraca</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</nav>

<header className="md:pt-40 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mr-auto ml-auto gap-x-12 gap-y-12 items-center">

<div className="flex flex-col items-start text-left z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/40 mb-8 animate-fade-in-up backdrop-blur-md shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-medium text-neutral-300 tracking-wide font-geist">DOSTĘPNY DO ZLECEŃ</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 leading-[1.1]">
<span className="gradient-text font-geist font-semibold">Nadaję rytm Twoim</span><br/>
<span className="text-neutral-500 font-geist font-semibold">wizualnym historiom.</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-semibold text-neutral-400 font-geist max-w-lg mb-10">
                    Specjalizuję się w dynamicznym montażu dla YouTube, reklamach social media i teledyskach. Przekształcam surowy materiał w angażującą opowieść.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 sm:w-auto text-sm font-medium text-black bg-white/90 w-full rounded-lg pt-3 pr-6 pb-3 pl-6 shadow-[0_0_15px_-3px_rgba(255,255,255,0.2)] font-geist" href="#portfolio">
                        Zobacz Portfolio
                        <iconify-icon className="" icon="solar:play-circle-linear" width="18"></iconify-icon>
</a>
<a className="sm:w-auto hover:border-neutral-600 hover:bg-neutral-800/50 hover:text-white transition-all flex items-center justify-center gap-2 text-sm font-medium text-neutral-300 font-geist bg-neutral-900/30 w-full border-neutral-800 border rounded-lg pt-3 pr-6 pb-3 pl-6 backdrop-blur-sm" href="#kontakt">
<iconify-icon className="" icon="solar:calendar-linear" width="18"></iconify-icon>
                        Umów konsultację
                    </a>
</div>

<div className="mt-12 flex items-center gap-4 text-neutral-500 text-sm">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-900"></div>
<div className="bg-neutral-700 w-8 h-8 border-neutral-900 border rounded-full"></div>
<div className="flex text-[10px] font-medium text-white font-geist bg-neutral-600 w-8 h-8 border-neutral-900 border rounded-full items-center justify-center">+15</div>
</div>
<span className="font-geist">Zadowolonych twórców</span>
</div>
</div>

<div className="lg:max-w-none group w-full max-w-md mr-auto ml-auto relative perspective-1000">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-indigo-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 animate-pulse">
</div>

<div className="aspect-[3/4] md:aspect-[4/5] overflow-hidden transition-transform duration-500 ease-out lg:rotate-2 group-hover:rotate-0 group-hover:scale-[1.02] bg-neutral-900/30 border-white/10 border rounded-3xl relative shadow-2xl backdrop-blur-sm">

<div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 z-20 pointer-events-none"></div>
<img alt="Profil Montażysty" className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1517598024396-46c53fb391a1?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="z-10 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>

<div className="absolute bottom-6 left-6 right-6 z-20">
<div className="flex items-center justify-between">
<div>
<h3 className="text-white font-medium text-lg drop-shadow-md font-geist">Twój Montażysta</h3>
<p className="text-neutral-300 text-xs drop-shadow-md font-geist">Warszawa / Remote</p>
</div>
<div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 text-white shadow-lg">
<iconify-icon icon="solar:videocamera-record-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="absolute -top-6 -right-6 w-24 h-24 bg-neutral-900/60 backdrop-blur-md border border-white/5 rounded-2xl p-4 flex flex-col justify-center items-center gap-2 shadow-xl animate-float hidden md:flex">
<iconify-icon className="text-indigo-400" icon="solar:monitor-camera-linear" width="24"></iconify-icon>
<span className="text-[10px] text-neutral-300 font-medium font-geist">4K Ready</span>
</div>
<div className="absolute -bottom-8 -left-8 w-auto px-4 py-3 bg-neutral-900/60 backdrop-blur-md border border-white/5 rounded-xl flex items-center gap-3 shadow-xl hidden md:flex animate-float" style={{animationDelay: '1s'}}>
<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
<span className="text-xs text-neutral-200 font-medium font-geist">Premiere Pro Expert</span>
</div>
</div>
</div>
</header>

<section className="border-y border-white/5 bg-neutral-900/30 backdrop-blur-sm relative z-10">
<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center md:items-start group cursor-default">
<div className="p-3 rounded-lg bg-white/5 mb-3 border border-white/5 group-hover:border-white/10 group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-neutral-400 group-hover:text-indigo-300 transition-colors" icon="solar:clapperboard-edit-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white font-geist">Montaż Wideo</h3>
<p className="text-xs text-neutral-500 mt-1 font-geist">Premiere Pro / DaVinci</p>
</div>
<div className="flex flex-col items-center md:items-start group cursor-default">
<div className="p-3 rounded-lg bg-white/5 mb-3 border border-white/5 group-hover:border-white/10 group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-neutral-400 group-hover:text-indigo-300 transition-colors" icon="solar:palette-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white font-geist">Color Grading</h3>
<p className="text-xs text-neutral-500 mt-1 font-geist">Korekcja kolorów</p>
</div>
<div className="flex flex-col items-center md:items-start group cursor-default">
<div className="p-3 rounded-lg bg-white/5 mb-3 border border-white/5 group-hover:border-white/10 group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-neutral-400 group-hover:text-indigo-300 transition-colors" icon="solar:soundwave-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white font-geist">Sound Design</h3>
<p className="text-xs text-neutral-500 mt-1 font-geist">Miks i efekty SFX</p>
</div>
<div className="flex flex-col items-center md:items-start group cursor-default">
<div className="p-3 rounded-lg bg-white/5 mb-3 border border-white/5 group-hover:border-white/10 group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-neutral-400 group-hover:text-indigo-300 transition-colors" icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white font-geist">Retencja</h3>
<p className="text-xs text-neutral-500 mt-1 font-geist">Optymalizacja pod YT</p>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto relative z-10" id="portfolio">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl tracking-tight text-white mb-2 font-geist font-semibold">Wybrane Projekty</h2>
<p className="text-neutral-400 text-sm max-w-md font-geist">Zbiór moich ostatnich realizacji. Od dynamicznych vlogów po kinowe reklamy.</p>
</div>

<div className="flex gap-1 p-1 bg-neutral-900/60 rounded-lg border border-white/5 backdrop-blur-md">
<button className="px-4 py-1.5 rounded-md bg-white/10 border border-white/5 text-xs font-medium text-white shadow-sm hover:bg-white/20 transition-colors font-geist">Wszystkie</button>
<button className="px-4 py-1.5 rounded-md text-neutral-400 hover:text-white hover:bg-white/5 text-xs font-medium transition-colors font-geist">YouTube</button>
<button className="px-4 py-1.5 rounded-md text-neutral-400 hover:text-white hover:bg-white/5 text-xs font-medium transition-colors font-geist">Reklamy</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group relative bg-neutral-900/40 border border-white/5 rounded-xl overflow-hidden hover:border-indigo-500/30 hover:bg-neutral-900/60 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/5">
<div className="aspect-video w-full bg-black relative overflow-hidden">
<div className="absolute inset-0 bg-neutral-800 animate-pulse z-0"></div>
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full absolute inset-0 z-10" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" src="https://youtu.be/wrPX6GcAXRQ" title="YouTube video player"></iframe>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-medium text-white group-hover:text-indigo-300 transition-colors font-geist">Travel Vlog: Japonia 4K</h3>
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<p className="text-xs text-neutral-400 mb-4 line-clamp-2 font-geist">Dynamiczny montaż z podróży, focus na sound design i płynne przejścia.</p>
<div className="flex gap-2">
<span className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] text-neutral-300 uppercase tracking-wide font-geist">Vlog</span>
<span className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] text-neutral-300 uppercase tracking-wide font-geist">4K</span>
</div>
</div>
</article>

<article className="group relative bg-neutral-900/40 border border-white/5 rounded-xl overflow-hidden hover:border-indigo-500/30 hover:bg-neutral-900/60 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/5">
<div className="aspect-video w-full bg-black relative">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full absolute inset-0" frameborder="0" src="https://www.youtube.com/embed/tgbNymZ7vqY?si=placeholder" title="YouTube video player"></iframe>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-medium text-white group-hover:text-indigo-300 transition-colors font-geist">Tech Review: Nowy iPhone</h3>
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<p className="text-xs text-neutral-400 mb-4 line-clamp-2 font-geist">Czysty, studyjny styl montażu. Animacje tekstowe i zbliżenia produktowe.</p>
<div className="flex gap-2">
<span className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] text-neutral-300 uppercase tracking-wide font-geist">Tech</span>
<span className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] text-neutral-300 uppercase tracking-wide font-geist">B-Roll</span>
</div>
</div>
</article>

<article className="group relative bg-neutral-900/40 border border-white/5 rounded-xl overflow-hidden hover:border-indigo-500/30 hover:bg-neutral-900/60 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/5">
<div className="aspect-video w-full bg-black relative">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full absolute inset-0" frameborder="0" src="https://www.youtube.com/embed/LXb3EKWsInQ?si=placeholder" title="YouTube video player"></iframe>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-medium text-white group-hover:text-indigo-300 transition-colors font-geist">Reklama Marki Odzieżowej</h3>
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<p className="text-xs text-neutral-400 mb-4 line-clamp-2 font-geist">Szybkie cięcia, synchronizacja z muzyką, format pionowy (Reels/TikTok).</p>
<div className="flex gap-2">
<span className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] text-neutral-300 uppercase tracking-wide font-geist">Social</span>
<span className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] text-neutral-300 uppercase tracking-wide font-geist">Fashion</span>
</div>
</div>
</article>

<article className="group relative bg-neutral-900/40 border border-white/5 rounded-xl overflow-hidden hover:border-indigo-500/30 hover:bg-neutral-900/60 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/5">
<div className="aspect-video w-full bg-black relative">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full absolute inset-0" frameborder="0" src="https://www.youtube.com/embed/M7fi_EL0C_U?si=placeholder" title="YouTube video player"></iframe>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="group-hover:text-indigo-300 transition-colors text-base font-medium text-white font-geist">Podcast: Wywiad z Twórcą</h3>
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<p className="text-xs text-neutral-400 mb-4 line-clamp-2 font-geist">Montaż wielokamerowy (multicam), korekcja audio, napisy.</p>
<div className="flex gap-2">
<span className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] text-neutral-300 uppercase tracking-wide font-geist">Podcast</span>
<span className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] text-neutral-300 uppercase tracking-wide font-geist">Long-form</span>
</div>
</div>
</article>

<article className="group relative bg-neutral-900/40 border border-white/5 rounded-xl overflow-hidden hover:border-indigo-500/30 hover:bg-neutral-900/60 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/5">
<div className="aspect-video w-full bg-black relative">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full absolute inset-0" frameborder="0" src="https://www.youtube.com/embed/ScMzIvxBSi4?si=placeholder" title="YouTube video player"></iframe>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-medium text-white group-hover:text-indigo-300 transition-colors font-geist">Gaming Highlights</h3>
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<p className="text-xs text-neutral-400 mb-4 line-clamp-2 font-geist">Efektowny montaż gameplayu, memy, napisy trackowane.</p>
<div className="flex gap-2">
<span className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] text-neutral-300 uppercase tracking-wide font-geist">Gaming</span>
<span className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] text-neutral-300 uppercase tracking-wide font-geist">Fun</span>
</div>
</div>
</article>

<article className="group relative bg-neutral-900/40 border border-white/5 rounded-xl overflow-hidden hover:border-indigo-500/30 hover:bg-neutral-900/60 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/5">
<div className="aspect-video w-full bg-black relative">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full absolute inset-0" frameborder="0" src="https://www.youtube.com/embed/Bey4XXJAqS8?si=placeholder" title="YouTube video player"></iframe>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-medium text-white group-hover:text-indigo-300 transition-colors font-geist">Dokument Krótkometrażowy</h3>
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<p className="text-xs text-neutral-400 mb-4 line-clamp-2 font-geist">Budowanie napięcia, zaawansowany color grading, narracja wizualna.</p>
<div className="flex gap-2">
<span className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] text-neutral-300 uppercase tracking-wide font-geist">Doc</span>
<span className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] text-neutral-300 uppercase tracking-wide font-geist">Cinematic</span>
</div>
</div>
</article>
</div>
<div className="mt-12 text-center">
<button className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5 group">
<span className="font-geist">Zobacz całe archiwum</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-neutral-900/30 relative overflow-hidden backdrop-blur-sm z-10" id="uslugi">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-50"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<h2 className="text-2xl tracking-tight text-white mb-16 text-center font-geist font-semibold">Proces Współpracy</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px bg-white/10 -z-10"></div>
<div className="text-center group">
<div className="w-24 h-24 mx-auto bg-neutral-900/80 border border-white/10 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-black/20 group-hover:border-indigo-500/50 group-hover:shadow-indigo-500/20 group-hover:scale-110 transition-all duration-300 backdrop-blur-md">
<iconify-icon className="text-white group-hover:text-indigo-400 transition-colors" icon="solar:chat-round-line-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 font-geist">1. Brief &amp; Pliki</h3>
<p className="text-sm text-neutral-400 px-4 leading-relaxed font-geist">Przesyłasz surowy materiał i wytyczne. Ustalamy styl i cel filmu.</p>
</div>
<div className="text-center group">
<div className="w-24 h-24 mx-auto bg-neutral-900/80 border border-white/10 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-black/20 group-hover:border-indigo-500/50 group-hover:shadow-indigo-500/20 group-hover:scale-110 transition-all duration-300 delay-75 backdrop-blur-md">
<iconify-icon className="text-white group-hover:text-indigo-400 transition-colors" icon="solar:scissors-square-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 font-geist">2. Montaż (Draft)</h3>
<p className="text-sm text-neutral-400 px-4 leading-relaxed font-geist">Tworzę pierwszą wersję. Dodaję muzykę, efekty i kolory.</p>
</div>
<div className="text-center group">
<div className="w-24 h-24 mx-auto bg-neutral-900/80 border border-white/10 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-black/20 group-hover:border-indigo-500/50 group-hover:shadow-indigo-500/20 group-hover:scale-110 transition-all duration-300 delay-150 backdrop-blur-md">
<iconify-icon className="text-white group-hover:text-indigo-400 transition-colors" icon="solar:check-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 font-geist">3. Finalizacja</h3>
<p className="text-sm text-neutral-400 px-4 leading-relaxed font-geist">Nanosisz poprawki, a ja eksportuję gotowy plik w najwyższej jakości.</p>
</div>
</div>
</div>
</section>

<footer className="pt-24 pb-12 px-6 border-t border-white/5 bg-neutral-950/80 backdrop-blur-md relative z-10" id="kontakt">
<div className="max-w-2xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl tracking-tight text-white mb-4 font-geist font-semibold">Stwórzmy coś razem.</h2>
<p className="text-neutral-400 mb-8 text-sm md:text-base font-geist">Masz materiał, który czeka na ożywienie? Napisz do mnie.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
<a className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-lg font-medium text-sm hover:bg-neutral-200 transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.15)] font-geist" href="mailto:kontakt@montaz.pl">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
                    kontakt@montaz.pl
                </a>
<a className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 bg-neutral-900 border border-neutral-800 text-white rounded-lg font-medium text-sm hover:bg-neutral-800 hover:border-neutral-700 transition-all transform hover:-translate-y-1 font-geist" href="https://wa.me/48123456789" rel="noopener noreferrer" target="_blank">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                    Napisz na WhatsApp
                </a>
</div>
<div className="flex flex-wrap items-center justify-center gap-4 mb-12">
<a className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10" href="#">
<iconify-icon icon="solar:videocamera-linear" width="20"></iconify-icon>
<span className="font-geist">YouTube</span>
</a>
<a className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10" href="https://instagram.com/twojprofil" rel="noopener noreferrer" target="_blank">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
<span className="font-geist">Instagram</span>
</a>
<a className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10" href="#">
<iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon>
<span className="font-geist">Portfolio</span>
</a>
</div>
<div className="text-xs text-neutral-500 flex flex-col md:flex-row items-center justify-center gap-4 border-t border-white/5 pt-8">
<span className="font-geist">© 2023 Portfolio Montażysty. Wszelkie prawa zastrzeżone.</span>
<div className="flex gap-4">
<a className="hover:text-neutral-300 transition-colors font-geist" href="#">Prywatność</a>
<a className="hover:text-neutral-300 transition-colors font-geist" href="#">Regulamin</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
