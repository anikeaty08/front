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



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
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
      

<div className="bg-red-500/90 text-white text-xs text-center py-1 font-medium tracking-wide">
        OSTATNIE MIEJSCA W PROMOCYJNEJ CENIE - ZAPISY TRWAJĄ
    </div>

<header className="relative pt-20 pb-32 px-6 overflow-hidden circuit-bg">

<div className="absolute top-0 left-0 w-full h-full pointer-events-none">
<div className="absolute top-20 left-10 opacity-20 text-cyan-500"><i className="w-24 h-24" data-lucide="cpu"></i></div>
<div className="absolute top-40 right-10 opacity-20 text-cyan-500"><i className="w-32 h-32" data-lucide="circuit-board"></i></div>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 border border-cyan-500/30 rounded-full px-3 py-1 bg-cyan-950/30 mb-8 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
<span className="text-xs text-cyan-300 font-medium tracking-wide uppercase">Nowy Kurs AI &amp; Web</span>
</div>
<h1 className="text-5xl md:text-7xl text-white font-semibold tracking-tight leading-[1.1] mb-6">
                Stwórz profesjonalną stronę<br/>
                WWW w <span className="text-cyan-400 text-glow">10 minut.</span><br/>
                Bez kodowania.
            </h1>
<p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Ten szablon <strong>SKRACA CZAS</strong> tworzenia stron o połowę. 10 lekcji w pigułce, od czystej kartki po gotowy projekt. Już nie musisz być programistą.
            </p>
<button className="group relative inline-flex items-center justify-center px-8 py-4 bg-cyan-500 text-slate-950 text-base font-semibold rounded-full hover:bg-cyan-400 transition-all duration-300 cyber-glow hover:scale-105">
<i className="w-5 h-5 mr-2" data-lucide="zap"></i>
                O TO PROFESJONALNA STRONA W 2...
                <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40"></div>
</button>
<p className="mt-4 text-xs text-slate-500">
                14 dni na zwrot • Certyfikat ukończenia • Dożywotni dostęp
            </p>
</div>

<div className="relative mt-16 max-w-3xl mx-auto">
<div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full"></div>

<div className="relative z-10 flex justify-center items-center py-10">

<svg className="text-cyan-300 w-64 h-64 drop-shadow-[0_0_30px_rgba(34,211,238,0.6)]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" viewbox="0 0 24 24">
<path d="M6 3h12l4 6-10 13L2 9z"></path>
<path d="M11 3 8 9l4 13 4-13-3-6"></path>
<path d="M2 9h20"></path>
</svg>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-cyan-400 blur-md"></div>
</div>
</header>

<section className="py-24 px-6 relative z-10">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<div className="inline-flex items-center justify-center p-3 mb-4 rounded-xl bg-slate-900 border border-slate-800 shadow-lg">
<i className="text-cyan-400 w-6 h-6" data-lucide="gem"></i>
</div>
<h2 className="text-3xl md:text-4xl text-white font-semibold tracking-tight">CO ZYSKASZ?</h2>
<p className="text-slate-500 mt-2 text-lg">Oto dlaczego warto dołączyć do ponad 500+ zadowolonych kursantów.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">

<div className="bg-slate-900/40 border border-slate-800/60 p-8 rounded-2xl hover:border-cyan-500/30 transition-colors group backdrop-blur-sm">
<div className="w-10 h-10 rounded-lg bg-cyan-950/50 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="hourglass"></i>
</div>
<h3 className="text-xl text-slate-100 font-medium mb-3 tracking-tight uppercase">Oszczędność czasu</h3>
<p className="text-base text-slate-400 leading-relaxed">
                        Gotowe szablony i komponenty, które po prostu kopiujesz. Zamiast budować od zera, składasz stronę jak z klocków.
                    </p>
</div>

<div className="bg-slate-900/40 border border-slate-800/60 p-8 rounded-2xl hover:border-cyan-500/30 transition-colors group backdrop-blur-sm">
<div className="w-10 h-10 rounded-lg bg-cyan-950/50 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="wand-2"></i>
</div>
<h3 className="text-xl text-slate-100 font-medium mb-3 tracking-tight uppercase">Design bez grafika</h3>
<p className="text-base text-slate-400 leading-relaxed">
                        Nauczysz się zasad nowoczesnego designu UI. Twoje strony będą wyglądać jak z drogiej agencji, bez zatrudniania grafika.
                    </p>
</div>

<div className="bg-slate-900/40 border border-slate-800/60 p-8 rounded-2xl hover:border-cyan-500/30 transition-colors group backdrop-blur-sm">
<div className="w-10 h-10 rounded-lg bg-cyan-950/50 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="file-code"></i>
</div>
<h3 className="text-xl text-slate-100 font-medium mb-3 tracking-tight uppercase">Kompletne szablony</h3>
<p className="text-base text-slate-400 leading-relaxed">
                        Dostęp do biblioteki ponad 50 sekcji. Hero, Feature, Pricing, FAQ, Footer - wszystko gotowe do użycia.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-2/3 mx-auto">

<div className="bg-slate-900/40 border border-slate-800/60 p-8 rounded-2xl hover:border-cyan-500/30 transition-colors group backdrop-blur-sm">
<div className="w-10 h-10 rounded-lg bg-cyan-950/50 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="layout"></i>
</div>
<h3 className="text-xl text-slate-100 font-medium mb-3 tracking-tight uppercase">Pełna responsywność</h3>
<p className="text-base text-slate-400 leading-relaxed">
                        Każdy element jest zoptymalizowany pod mobile, tablet i desktop. Zero problemów z wyświetlaniem.
                    </p>
</div>

<div className="bg-slate-900/40 border border-slate-800/60 p-8 rounded-2xl hover:border-cyan-500/30 transition-colors group backdrop-blur-sm">
<div className="w-10 h-10 rounded-lg bg-cyan-950/50 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl text-slate-100 font-medium mb-3 tracking-tight uppercase">Wsparcie i aktualizacje</h3>
<p className="text-base text-slate-400 leading-relaxed">
                        Dostęp do zamkniętej grupy na Discordzie oraz darmowe aktualizacje kursu w przyszłości.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-950/50 relative">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<div className="inline-flex items-center justify-center p-3 mb-4 rounded-xl bg-slate-900 border border-slate-800 shadow-lg">
<i className="text-cyan-400 w-6 h-6" data-lucide="rocket"></i>
</div>
<h2 className="text-3xl md:text-4xl text-white font-semibold tracking-tight">DLA KOGO JEST TEN KURS?</h2>
<p className="text-slate-500 mt-2 text-lg">Bez względu na to czy dopiero zaczynasz, czy chcesz skalować swój biznes.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-8 rounded-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 p-32 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none"></div>
<div className="flex items-center gap-4 mb-6">
<div className="bg-cyan-900/20 p-3 rounded-lg text-cyan-400">
<i className="w-6 h-6" data-lucide="briefcase"></i>
</div>
<h3 className="text-xl text-white font-medium tracking-tight">Przedsiębiorcy i Freelancerzy</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-cyan-500 mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-base text-slate-400">Chcesz stworzyć stronę dla swojej firmy bez wydawania 5000 zł na agencję.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-cyan-500 mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-base text-slate-400">Potrzebujesz landing page do sprzedaży swoich usług lub produktów cyfrowych.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-cyan-500 mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-base text-slate-400">Chcesz szybko testować nowe pomysły biznesowe (MVP).</span>
</li>
</ul>
</div>

<div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-8 rounded-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 p-32 bg-purple-500/5 blur-[80px] rounded-full pointer-events-none"></div>
<div className="flex items-center gap-4 mb-6">
<div className="bg-purple-900/20 p-3 rounded-lg text-purple-400">
<i className="w-6 h-6" data-lucide="palette"></i>
</div>
<h3 className="text-xl text-white font-medium tracking-tight">Początkujący UI/UX Designerzy</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-purple-500 mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-base text-slate-400">Chcesz zamienić swoje projekty z Figmy w działające strony WWW.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-purple-500 mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-base text-slate-400">Szukasz sposobu na podniesienie stawek za swoje usługi.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-purple-500 mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-base text-slate-400">Chcesz zrozumieć jak myślą deweloperzy, by lepiej projektować.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16">
<div className="inline-flex items-center justify-center p-3 mb-4 rounded-xl bg-slate-900 border border-slate-800 shadow-lg">
<i className="text-amber-400 w-6 h-6" data-lucide="list-video"></i>
</div>
<h2 className="text-3xl md:text-4xl text-white font-semibold tracking-tight">PROGRAM KURSU</h2>
<p className="text-slate-500 mt-2 text-lg">Od zera do wdrożenia. Praktyczne przykłady bez zbędnej teorii.</p>
</div>
<div className="space-y-4">

<div className="group border border-slate-800 bg-slate-900/30 rounded-xl p-6 hover:bg-slate-900 transition-colors cursor-pointer">
<div className="flex items-start gap-4">
<div className="flex items-center justify-center w-8 h-8 rounded bg-cyan-500/10 text-cyan-400 font-semibold text-sm shrink-0">1</div>
<div>
<h4 className="text-lg text-white font-medium mb-1">Konfiguracja środowiska</h4>
<p className="text-slate-400 text-base">Instalacja niezbędnych narzędzi, konfiguracja VS Code, pierwsze repozytorium.</p>
</div>
</div>
</div>

<div className="group border border-slate-800 bg-slate-900/30 rounded-xl p-6 hover:bg-slate-900 transition-colors cursor-pointer">
<div className="flex items-start gap-4">
<div className="flex items-center justify-center w-8 h-8 rounded bg-cyan-500/10 text-cyan-400 font-semibold text-sm shrink-0">2</div>
<div>
<h4 className="text-lg text-white font-medium mb-1">Struktura HTML5</h4>
<p className="text-slate-400 text-base">Semantyka, SEO w kodzie, poprawne budowanie szkieletu strony.</p>
</div>
</div>
</div>

<div className="group border border-slate-800 bg-slate-900/30 rounded-xl p-6 hover:bg-slate-900 transition-colors cursor-pointer">
<div className="flex items-start gap-4">
<div className="flex items-center justify-center w-8 h-8 rounded bg-cyan-500/10 text-cyan-400 font-semibold text-sm shrink-0">3</div>
<div>
<h4 className="text-lg text-white font-medium mb-1">Stylizacja z Tailwind CSS</h4>
<p className="text-slate-400 text-base">Grid, Flexbox, typografia, kolory, responsywność (Mobile First).</p>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="h-64 relative overflow-hidden w-full border-t border-cyan-500/30 bg-slate-950">
<div className="absolute inset-0 perspective-floor"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
</div>

<section className="py-24 px-6 relative z-10 -mt-32">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<div className="inline-flex items-center justify-center p-3 mb-4 rounded-xl bg-slate-900 border border-slate-800 shadow-lg">
<i className="text-amber-400 w-6 h-6" data-lucide="star"></i>
</div>
<h2 className="text-3xl md:text-4xl text-white font-semibold tracking-tight">OPINIE KURSANTÓW</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl backdrop-blur-md">
<div className="flex text-amber-400 mb-4 gap-1">
<i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-300 text-base mb-6 leading-relaxed">"Niesamowite, że w tak krótkim czasie można nauczyć się tworzyć tak profesjonalne strony. Kurs zwrócił się po pierwszym zleceniu!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-bold text-xs">MK</div>
<div>
<div className="text-white text-sm font-medium">Marek Kowalski</div>
<div className="text-slate-500 text-xs">Freelancer</div>
</div>
</div>
</div>

<div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl backdrop-blur-md">
<div className="flex text-amber-400 mb-4 gap-1">
<i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-300 text-base mb-6 leading-relaxed">"To nie jest kolejny nudny kurs wideo. To konkretna mapa drogowa. Sekcja o designie otworzyła mi oczy."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-bold text-xs">AN</div>
<div>
<div className="text-white text-sm font-medium">Anna Nowak</div>
<div className="text-slate-500 text-xs">UI Designer</div>
</div>
</div>
</div>

<div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl backdrop-blur-md">
<div className="flex text-amber-400 mb-4 gap-1">
<i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-300 text-base mb-6 leading-relaxed">"Szablon dołączony do kursu to złoto. Używam go w każdym projekcie. Polecam każdemu kto chce oszczędzić czas."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-bold text-xs">TP</div>
<div>
<div className="text-white text-sm font-medium">Tomasz Piątek</div>
<div className="text-slate-500 text-xs">Właściciel agencji</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">

<div className="w-full md:w-1/2 relative group">
<div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full group-hover:bg-cyan-500/30 transition-all"></div>
<div className="relative bg-slate-900 border border-slate-700 rounded-lg p-2 shadow-2xl transform group-hover:rotate-y-6 transition-transform duration-700" style={{perspective: '1000px'}}>

<div className="bg-slate-950 aspect-[4/3] rounded border border-slate-800 flex items-center justify-center overflow-hidden">
<div className="space-y-2 w-3/4 opacity-50">
<div className="h-2 w-1/3 bg-slate-700 rounded"></div>
<div className="h-2 w-full bg-slate-700 rounded"></div>
<div className="h-2 w-full bg-slate-700 rounded"></div>
<div className="h-20 w-full bg-slate-800 rounded mt-4 border border-cyan-900/30"></div>
</div>
</div>

<div className="h-3 bg-slate-800 rounded-b mt-1 mx-4"></div>
</div>

<div className="absolute -left-8 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"></div>
</div>

<div className="w-full md:w-1/2">
<div className="flex items-center gap-2 mb-4">
<i className="text-amber-400 w-5 h-5" data-lucide="gift"></i>
<span className="text-white font-semibold tracking-wide uppercase text-sm">ILE TO JEST WARTE?</span>
</div>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Błyskawiczny start<br/>Twojej kariery</h3>
<p className="text-slate-400 mb-8 text-base leading-relaxed">
                    Koszt kursu zwraca się szybciej niż myślisz. To inwestycja w umiejętność, która jest teraz najbardziej poszukiwana na rynku.
                </p>
<div className="flex items-end gap-6">
<div>
<span className="block text-slate-500 line-through text-lg">2500 zł</span>
<span className="block text-4xl text-cyan-400 font-bold tracking-tight">197 zł</span>
<span className="text-xs text-slate-500 uppercase tracking-widest mt-1 block">Cena promocyjna</span>
</div>
<div className="border-l border-slate-800 pl-6">
<span className="block text-4xl text-white font-bold tracking-tight">10</span>
<span className="text-xs text-slate-500 uppercase tracking-widest mt-1 block">Wolnych Miejsc</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 pb-32">
<div className="max-w-3xl mx-auto">
<div className="relative rounded-3xl border border-slate-800 bg-slate-900/50 p-1 md:p-2 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 opacity-30 blur-xl"></div>
<div className="relative bg-[#020617] rounded-[22px] p-8 md:p-12 text-center">
<div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20">
<i className="text-orange-400 w-6 h-6" data-lucide="flame"></i>
</div>
<h2 className="text-3xl md:text-4xl text-white font-semibold mb-10 tracking-tight">ZDECYDUJ TERAZ</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left">
<div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
<div className="flex items-center gap-2 mb-2">
<i className="text-red-400 w-4 h-4" data-lucide="x-circle"></i>
<span className="text-red-400 font-medium text-xs uppercase tracking-wide">Szukasz wymówek</span>
</div>
<p className="text-slate-400 text-sm">Wracasz do oglądania seriali i narzekania na brak zleceń. Nic się nie zmienia.</p>
</div>
<div className="bg-cyan-900/10 p-4 rounded-xl border border-cyan-900/30">
<div className="flex items-center gap-2 mb-2">
<i className="text-cyan-400 w-4 h-4" data-lucide="check-circle-2"></i>
<span className="text-cyan-400 font-medium text-xs uppercase tracking-wide">Działasz</span>
</div>
<p className="text-slate-400 text-sm">Dołączasz do kursu, poznajesz nowe technologie i zaczynasz zarabiać realne pieniądze.</p>
</div>
</div>
<div className="text-slate-400 text-sm mb-6">Wybierz mądrze. To Twoja przyszłość.</div>
<button className="w-full md:w-auto px-10 py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl hover:bg-cyan-400 transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] text-lg">
                        DOŁĄCZ TERAZ - 197 ZŁ
                    </button>
<div className="flex justify-center gap-6 mt-6 text-xs text-slate-600">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="lock"></i> Bezpieczna płatność</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="clock"></i> Natychmiastowy dostęp</span>
</div>
</div>
</div>
</div>
</section>

<footer className="py-10 border-t border-slate-900 text-center relative overflow-hidden">

<div className="absolute right-10 bottom-10 opacity-20 text-slate-700 animate-spin-slow">
<i className="w-32 h-32" data-lucide="asterisk"></i>
</div>
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2 text-slate-500 font-semibold">
<i className="w-5 h-5" data-lucide="code-2"></i>
                Build &amp; Grow
            </div>
<div className="text-slate-600 text-sm">
                © 2023 Wszelkie prawa zastrzeżone. Projekt edukacyjny.
            </div>
<div className="flex gap-6 text-xs text-slate-600">
<a className="hover:text-slate-400 transition-colors" href="#">Regulamin</a>
<a className="hover:text-slate-400 transition-colors" href="#">Polityka Prywatności</a>
</div>
</div>
</footer>


    </>
  );
}
