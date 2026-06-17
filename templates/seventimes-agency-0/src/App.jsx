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



    lucide.createIcons();

    (function() {
      const container = document.getElementById('card-grid-container');
      const cards = container.querySelectorAll('.card-item');
      let activeCard = null;
      
      cards.forEach((card, index) => {
        card.addEventListener('click', function(e) {
          e.stopPropagation();
          
          if (activeCard === card) {
            resetCards();
            return;
          }
          
          // Reset all cards first
          cards.forEach((c) => {
            c.style.filter = 'blur(4px) grayscale(80%)';
            c.style.opacity = '0.3';
            c.style.transform = 'scale(0.9)';
            c.style.zIndex = '1';
            c.style.transition = 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
          });
          
          // Focus the clicked card
          card.style.filter = 'blur(0px) grayscale(0%)';
          card.style.opacity = '1';
          card.style.transform = 'scale(1.2) translateY(-10px) rotate(0deg)';
          card.style.zIndex = '50';
          card.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.7)';
          
          activeCard = card;
        });

        // Hover effect helper when no card is active
        card.addEventListener('mouseenter', function() {
          if (!activeCard) {
            card.style.zIndex = '20';
          }
        });
        card.addEventListener('mouseleave', function() {
          if (!activeCard) {
            setTimeout(() => { card.style.zIndex = ''; }, 300);
          }
        });
      });
      
      // Click outside to reset
      document.addEventListener('click', function(e) {
        if (activeCard && !container.contains(e.target)) {
          resetCards();
        }
      });
      
      function resetCards() {
        cards.forEach((c) => {
          c.style.filter = '';
          c.style.opacity = '';
          c.style.transform = '';
          c.style.zIndex = '';
          c.style.boxShadow = '';
        });
        activeCard = null;
      }
    })();
  
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[120px]"></div>
</div>

<nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-lg leading-none tracking-tighter">7</div>
<span className="text-sm font-semibold tracking-wide text-neutral-200 group-hover:text-white transition-colors">SEVENTIMES</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="hover:text-white transition-colors text-xs font-medium text-neutral-400" href="#">Unser Prozess</a>
<a className="hover:text-white transition-colors text-xs font-medium text-neutral-400" href="#">Case Studies</a>
<a className="hover:text-white transition-colors text-xs font-medium text-neutral-400" href="#">E-com Vault</a>
</div>

<div>
<a className="hidden sm:inline-flex h-9 items-center justify-center rounded-full border border-white/10 bg-neutral-900 px-4 text-xs font-medium text-white transition-colors hover:bg-neutral-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-900" href="#">
          Kontakt
        </a>
</div>
</div>
</nav>

<section className="sm:pt-40 sm:pb-32 flex flex-col max-w-7xl z-10 mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative items-center">

<div className="mx-auto max-w-6xl text-center relative z-20" style={{animation: 'fadeSlideIn 0.8s ease-out 0.1s both'}}>
<h1 className="sm:text-6xl lg:text-7xl leading-[1.05] text-4xl font-semibold text-white tracking-tighter font-sans">
        Dein Skalierungspartner
        <span className="block text-neutral-400 mt-1">
          ohne das typische
          <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent relative pb-2">
            Agentur-Blabla.
          </span>
</span>
</h1>
</div>

<div className="w-full mt-16 sm:mt-20 relative max-w-5xl mx-auto" style={{animation: 'fadeSlideIn 1s ease-out 0.3s both'}}>

<div className="-top-8 sm:-top-10 sm:left-[20%] z-30 absolute left-[5%] animate-pulse" style={{animationDuration: '4s'}}>
<div className="relative group cursor-default">
<span className="inline-flex items-center gap-2 border border-white/10 text-xs font-medium text-white bg-blue-600/90 backdrop-blur-sm rounded-full py-1.5 px-3 shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-transform group-hover:-translate-y-1">
            paid social
            <i className="w-3.5 h-3.5" data-lucide="trending-up"></i>
</span>
<span className="absolute -bottom-1 left-6 h-2 w-2 rotate-45 bg-blue-600/90"></span>
</div>
</div>

<div className="-top-6 sm:-top-8 sm:right-[18%] z-30 absolute right-[5%] animate-pulse" style={{animationDuration: '5s'}}>
<div className="relative group cursor-default">
<span className="inline-flex items-center gap-2 border border-white/10 text-xs font-medium text-white bg-emerald-600/90 backdrop-blur-sm rounded-full py-1.5 px-3 shadow-[0_0_15px_rgba(5,150,105,0.5)] transition-transform group-hover:-translate-y-1">
            scale profit
            <i className="w-3.5 h-3.5" data-lucide="pie-chart"></i>
</span>
<span className="absolute -bottom-1 left-6 h-2 w-2 rotate-45 bg-emerald-600/90"></span>
</div>
</div>

<div className="flex justify-center perspective-1000">
<div className="grid grid-cols-6 sm:gap-4 w-full max-w-3xl gap-x-2 gap-y-2" id="card-grid-container">

<div className="card-item col-span-2 sm:col-span-1 self-end transform -rotate-12 translate-y-4 sm:translate-y-8 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer hover:scale-110 grayscale-[30%] hover:grayscale-0" data-card-index="0">
<div className="aspect-[3/4] overflow-hidden rounded-xl ring-1 ring-white/15 shadow-2xl bg-neutral-900 border-gradient before:rounded-xl">
<img alt="Data Analytics" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-3 left-3">
<p className="text-[10px] font-mono text-blue-300">ROAS +240%</p>
</div>
</div>
</div>

<div className="card-item col-span-2 sm:col-span-1 self-end transform -rotate-6 translate-y-8 sm:translate-y-12 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer hover:scale-110 grayscale-[10%] hover:grayscale-0" data-card-index="1">
<div className="aspect-[3/4] overflow-hidden rounded-xl ring-1 ring-white/15 shadow-2xl bg-neutral-900 border-gradient before:rounded-xl">
<img alt="UGC Creator" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-black/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-3 left-3">
<div className="flex items-center gap-1.5 text-white/90">
<svg className="lucide lucide-play-circle w-3 h-3 text-pink-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
<span className="text-[10px] font-medium tracking-wide">UGC CONTENT</span>
</div>
</div>
</div>
</div>

<div className="card-item col-span-2 sm:col-span-1 self-end transform rotate-0 -translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer hover:scale-110 z-10" data-card-index="2">
<div className="aspect-[3/4] overflow-hidden rounded-xl ring-1 ring-white/20 shadow-2xl bg-neutral-800 border-gradient before:rounded-xl">
<img alt="Premium Product" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-3 left-3">
<div className="flex items-center gap-1.5 text-white/90">
<svg className="lucide lucide-shopping-bag w-3 h-3 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
<span className="text-[10px] font-medium tracking-wide">BESTSELLER</span>
</div>
</div>
</div>
</div>

<div className="card-item col-span-2 sm:col-span-1 self-end transform rotate-3 translate-y-6 sm:translate-y-10 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer hover:scale-110 grayscale-[30%] hover:grayscale-0" data-card-index="3">
<div className="aspect-[3/4] overflow-hidden rounded-xl ring-1 ring-white/15 shadow-2xl bg-neutral-900 border-gradient before:rounded-xl">
<img alt="Search Interface" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-3 left-3">
<div className="flex items-center gap-1.5 text-white/90">
<svg className="lucide lucide-search w-3 h-3 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="text-[10px] font-medium tracking-wide">GOOGLE</span>
</div>
</div>
</div>
</div>

<div className="card-item col-span-2 sm:col-span-1 self-end transform rotate-6 translate-y-3 sm:translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer hover:scale-110 grayscale-[30%] hover:grayscale-0" data-card-index="4">
<div className="aspect-[3/4] overflow-hidden rounded-xl ring-1 ring-white/15 shadow-2xl bg-neutral-900 border-gradient before:rounded-xl">
<img alt="Scaling Chart" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-3 left-3">
<p className="text-[10px] font-mono text-purple-300">Scale +150%</p>
</div>
</div>
</div>

<div className="card-item col-span-2 sm:col-span-1 self-end transform rotate-12 translate-y-8 sm:translate-y-14 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer hover:scale-110 grayscale-[20%] hover:grayscale-0" data-card-index="5">
<div className="aspect-[3/4] overflow-hidden rounded-xl ring-1 ring-white/15 shadow-2xl bg-neutral-900 border-gradient before:rounded-xl">
<img alt="Lifestyle Product" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-3 left-3">
<div className="flex items-center gap-1.5 text-white/90">
<svg className="lucide lucide-star w-3 h-3 text-yellow-400 fill-yellow-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<span className="text-[10px] font-medium tracking-wide">4.9 RATING</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<p className="leading-relaxed sm:mt-24 sm:text-base text-sm text-stone-400 font-sans text-center max-w-2xl mt-16" style={{animation: 'fadeSlideIn 1s ease-out 0.5s both'}}>
      Unser ursprüngliches Ziel war es, der Marketing- und Skalierungspartner unserer Träume zu werden – frei von den üblichen Herausforderungen einer Agentur. Heute haben wir die Agenturszene auf den Kopf gestellt und mit über 150 Marken zusammengearbeitet, um Gewinne zu skalieren – nicht nur den Umsatz.
    </p>

<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full" style={{animation: 'fadeSlideIn 1s ease-out 0.7s both'}}>

<button className="group inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-full pr-8 pl-8 relative outline outline-1 outline-white/10 hover:outline-white/20 transition-all duration-500 hover:-translate-y-0.5">

<span aria-hidden="true" className="absolute -inset-px h-full w-full overflow-hidden rounded-full">
<span className="absolute inset-0 rounded-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"></span>
<span className="absolute -top-[50px] right-1 w-20 h-20 bg-blue-500 opacity-10 mix-blend-screen blur-[30px] rounded-full"></span>
<span className="absolute top-0 right-1 h-[25px] w-16 bg-blue-400 opacity-10 mix-blend-screen blur-[20px] rounded-full"></span>
<span className="absolute -bottom-[40px] -left-[10px] w-20 h-20 bg-emerald-500 opacity-10 mix-blend-screen blur-[30px] rounded-full"></span>
<span className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-full"></span>
</span>

<span className="absolute inset-0 overflow-hidden rounded-full">
<span className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/10 opacity-0 skew-x-12 blur-md transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-[250%] rounded-full"></span>
</span>

<span className="relative z-10 flex items-center gap-2 text-sm font-medium text-white tracking-tight">
          Jetzt Mehrwert Call sichern
          <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</span>
</button>

<a className="group inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 text-sm font-medium text-neutral-300 transition-all hover:bg-white/10 hover:text-white hover:border-white/20" href="#">
<i className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" data-lucide="layers"></i>
        Case Studies ansehen
      </a>
</div>

<div className="mt-20 pt-10 border-t border-white/5 w-full max-w-4xl mx-auto flex flex-col items-center gap-4 opacity-60" style={{animation: 'fadeSlideIn 1s ease-out 0.9s both'}}>
<span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">Powering Growth on</span>
<div className="flex items-center gap-8 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2"><i className="w-5 h-5" data-lucide="facebook"></i><span className="font-bold text-sm">Meta</span></div>
<div className="flex items-center gap-2"><i className="w-5 h-5" data-lucide="chrome"></i><span className="font-bold text-sm">Google Ads</span></div>
<div className="flex items-center gap-2"><i className="w-5 h-5" data-lucide="shopping-bag"></i><span className="font-bold text-sm">Shopify</span></div>
<div className="flex items-center gap-2"><i className="w-5 h-5" data-lucide="video"></i><span className="font-bold text-sm">TikTok</span></div>
</div>
</div>
</section>



    </>
  );
}
