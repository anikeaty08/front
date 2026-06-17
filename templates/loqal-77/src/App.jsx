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



      (function () {
        const el = document.getElementById('hero-typing-word');
        if (!el) return;
        const words = ['sichtbar', 'profitabel', 'modern', 'erfolgreich'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        function type() {
          const word = words[wordIndex % words.length];
          if (isDeleting) charIndex--;
          else charIndex++;
          el.textContent = word.substring(0, charIndex);
          let delay = isDeleting ? 60 : 110;
          if (!isDeleting && charIndex === word.length) {
            delay = 1400; isDeleting = true;
          } else if (isDeleting && charIndex === 0) {
            isDeleting = false; wordIndex++; delay = 400;
          }
          setTimeout(type, delay);
        }
        el.textContent = '';
        type();
      })();
    


      lucide.createIcons();
      document.addEventListener('DOMContentLoaded', () => {
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('active');
                  }
              });
          }, { threshold: 0.1 });
          document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

          // Scroll Logic for Card Stack
          const section = document.querySelector('#pain-points');
          const card1 = document.querySelector('#card-1');
          const card2 = document.querySelector('#card-2');
          const card3 = document.querySelector('#card-3');

          window.addEventListener('scroll', () => {
              if(!section) return;
              const rect = section.getBoundingClientRect();
              const viewportHeight = window.innerHeight;
              let progress = Math.min(1, Math.max(0, -rect.top / (rect.height - viewportHeight)));

              if (progress < 0.4) {
                  const scale = 1 - (progress * 0.15);
                  card1.style.transform = `scale(${scale}) rotate(-2deg)`;
                  card1.style.filter = `brightness(${1 - progress})`;
              } else {
                  card1.style.transform = `scale(0.94) rotate(-2deg)`;
                  card1.style.filter = `brightness(0.6)`;
              }

              if (progress > 0.1) {
                  const p2 = Math.min(1, Math.max(0, (progress - 0.1) / 0.4));
                  const translateY = (1 - p2) * 120;
                  const scale = 0.9 + (p2 * 0.1);
                  card2.style.transform = `translateY(${translateY}%) scale(${scale}) rotate(2deg)`;
                  card2.style.opacity = p2;
              } else {
                  card2.style.transform = `translateY(120%)`;
                  card2.style.opacity = 0;
              }

              if (progress > 0.5) {
                  const p3 = Math.min(1, Math.max(0, (progress - 0.5) / 0.4));
                  const translateY = (1 - p3) * 120;
                  const scale = 0.9 + (p3 * 0.1);
                  card3.style.transform = `translateY(${translateY}%) scale(${scale}) rotate(-1deg)`;
                  card3.style.opacity = p3;
              } else {
                  card3.style.transform = `translateY(120%)`;
                  card3.style.opacity = 0;
              }
          });

          // Card Flip Logic
          const advSection = document.querySelector('#lenora-advantage');
          function updateAdvState() {
              if(!advSection) return;
              const rect = advSection.getBoundingClientRect();
              const vh = window.innerHeight;
              const start = vh * 0.75;
              const end = -vh * 0.25;
              const total = start - end;
              const clampedTop = Math.min(start, Math.max(end, rect.top));
              const progress = 1 - (clampedTop - end) / total;

              if (progress > 0.05) advSection.classList.add('is-visible');
              let stateClass = 'state-1';
              if (progress < 0.33) stateClass = 'state-1';
              else if (progress < 0.66) stateClass = 'state-2';
              else stateClass = 'state-3';

              advSection.classList.remove('state-1', 'state-2', 'state-3');
              advSection.classList.add(stateClass);
          }
          window.addEventListener('scroll', updateAdvState);
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
      

<div className="fixed top-0 left-0 right-0 h-8 bg-orange-500 z-[60] flex items-center justify-center px-4">
<p className="text-[10px] font-bold uppercase tracking-widest text-black flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse"></span>
        Nur noch 3 Plätze für diesen Monat verfügbar
      </p>
</div>

<div className="fixed inset-0 z-0 pointer-events-none bg-[#030303]">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
<div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-orange-600/15 rounded-full blur-[140px] animate-pulse"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[140px] animate-pulse" style={{animationDuration: '7s'}}></div>
</div>

<nav className="fixed top-8 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-3 group" href="#">
<svg className="h-9 w-9 shrink-0" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<circle className="fill-orange-500" cx="50" cy="50" r="50"></circle>
<text dominant-baseline="middle" fill="white" fontFamily="'Inter', sans-serif" fontSize="55" font-weight="bold" letter-spacing="-3" text-anchor="middle" x="50" y="55">
                lo
              </text>
</svg>
<span className="text-lg tracking-tight text-white font-bold">
              loqal
            </span>
</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#loesung">
              Lösungen
            </a>
<a className="hover:text-white transition-colors" href="#ablauf">
              Ablauf
            </a>
<a className="hover:text-white transition-colors" href="#preise">
              Preise
            </a>
<a className="hover:text-white transition-colors" href="#ergebnisse">
              Ergebnisse
            </a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-neutral-300 hover:text-white transition-colors" href="#contact">
            +49 371 934520
          </a>
<a className="h-9 px-4 rounded-full bg-white text-black text-sm flex items-center gap-2 hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] font-medium" href="#contact">
<span className="">Beratung buchen</span>
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</nav>

<section className="lg:pt-40 lg:pb-32 overflow-hidden z-10 pt-32 pb-20 relative">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col lg:flex-row gap-16 items-center">

<div className="flex-1 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-300 text-xs font-medium mb-8 reveal active">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="">loqal · Webdesign &amp; SEO Sachsen</span>
</div>
<div className="min-h-[9rem] sm:min-h-[10rem] lg:min-h-[11rem]">
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif tracking-tight leading-[1.1] text-white mb-6 font-normal reveal delay-100 active">
                Ihre digitale Identität.
                <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-600">
<span id="hero-typing-word">sichtba</span>
                  .
                  <span className="text-orange-500">loqal</span>
                  .
                </span>
</h1>
</div>
<p className="text-lg text-neutral-400 mb-10 max-w-lg leading-relaxed reveal delay-200 active">
              Ihre Website in 48 Stunden. Top 10 Rankings in 6 Monaten. Wir
              bringen lokale Unternehmen in Sachsen nach vorne. Ohne
              Agentur-Preise. Ohne Kompromisse.
            </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 reveal delay-300 active">
<a className="w-full sm:w-auto text-center group shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 overflow-hidden font-medium text-orange-900 bg-gradient-to-r from-[#FFEBB1] to-[#FFC438] rounded-xl pt-4 pr-8 pb-4 pl-8 relative shadow-lg" href="#contact" style={{boxShadow: '0 15px 33px -12px rgba(255, 162, 42, 0.9), inset 0 4px 6.3px rgba(252, 220, 134, 1), inset 0 -5px 6.3px rgba(255,162,38,1)', borderRadius: '9999px'}}>
<div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute top-0 right-0 bottom-0 left-0 translate-y-full"></div>
<span className="relative flex items-center justify-center gap-2">
                  Kostenlose Vorschau sichern
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
<button className="w-full sm:w-auto h-12 px-8 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
<svg className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                Demo ansehen
              </button>
</div>
</div>

<div className="flex-1 w-full relative perspective-near reveal delay-300 active">

<div className="relative z-10 glass-panel rounded-2xl p-1 shadow-2xl transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-transform duration-700 ease-out">
<div className="bg-neutral-900 rounded-xl overflow-hidden border border-white/5 flex flex-col h-[480px]">

<div className="flex bg-black/50 h-10 border-white/5 border-b pr-4 pl-4 items-center justify-between shrink-0 z-20 relative">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-xs font-mono text-neutral-500 flex items-center gap-2 bg-neutral-800/50 px-3 py-1 rounded">
<svg className="lucide lucide-lock w-3 h-3" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    loqal.de
                  </div>
<div className="w-4"></div>
</div>

<div className="p-0 overflow-hidden relative h-full bg-neutral-950 flex flex-col items-center pt-8">

<div className="w-[90%] h-32 bg-neutral-800/30 rounded-lg border border-white/5 mb-4 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"></div>
<div className="text-center z-10">
<div className="h-2 w-24 bg-neutral-700 rounded mb-2 mx-auto"></div>
<div className="h-6 w-48 bg-white/10 rounded mb-2 mx-auto"></div>
<div className="h-8 px-4 bg-orange-500 rounded text-[10px] text-black font-bold flex items-center justify-center mx-auto mt-4 w-32">
                        JETZT ANFRAGEN
                      </div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[85%] glass-panel rounded-xl p-4 border border-green-500/20 shadow-lg shadow-green-900/10 flex items-center justify-between gap-4 animate-fade-up delay-500">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
<svg className="lucide lucide-trending-up w-5 h-5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div>
<div className="text-[10px] uppercase text-neutral-500 font-bold tracking-wider">
                          Google Ranking
                        </div>
<div className="text-sm text-white font-medium">
                          Platz #1 in Chemnitz
                        </div>
</div>
</div>
<div className="text-green-400 text-xs font-bold">+124% 📈</div>
</div>

<svg className="absolute bottom-0 w-full h-40 text-orange-500/5" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0 40 L0 30 Q 20 35 40 10 T 100 5 L 100 40 Z" fill="currentColor"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section>



<section className="border-y overflow-hidden border-white/5 bg-neutral-950/30 py-10 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-neutral-500 uppercase tracking-widest mb-8">
          Erfolgreiche Kunden in Sachsen
        </p>
<div className="relative flex overflow-x-hidden group">
<div className="animate-marquee whitespace-nowrap flex gap-16 items-center transition-all duration-500 text-white opacity-100">
<span className="text-xl font-serif font-bold tracking-tight">
              Physiotherapie Müller
            </span>
<span className="text-xl font-sans font-bold tracking-tighter italic">
              Dachdeckerei Schmidt
            </span>
<span className="text-xl font-mono font-black tracking-tight">
              Kanzlei Weber &amp; Co
            </span>
<span className="text-xl font-serif italic tracking-wide">
              Restaurant "Zur Linde"
            </span>
<span className="text-xl font-sans font-bold">Autohaus Leipzig</span>
<span className="text-xl font-serif font-bold tracking-tight">
              Zahnarztpraxis Dr. Klein
            </span>

<span className="text-xl font-serif font-bold tracking-tight">
              Physiotherapie Müller
            </span>
<span className="text-xl font-sans font-bold tracking-tighter italic">
              Dachdeckerei Schmidt
            </span>
<span className="text-xl font-mono font-black tracking-tight">
              Kanzlei Weber &amp; Co
            </span>
</div>
<style>
            .animate-marquee { animation: marquee 30s linear infinite; }
            @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          </style>
</div>
</div>
</section>

<section className="relative z-20 bg-black" id="pain-points">
<div className="sticky flex flex-col overflow-hidden w-full h-screen pt-20 pr-6 pb-20 pl-6 top-0 items-center justify-center min-h-[600px]">
<div className="text-center mb-12 relative z-10 transition-opacity duration-300">
<h2 className="text-4xl md:text-6xl font-serif text-white mb-4 leading-tight tracking-tight">
            Kennen Sie
            <br/>
<span className="text-neutral-500">das Problem?</span>
</h2>
</div>
<div className="card-stack-wrapper md:h-[500px] w-full h-[480px] max-w-sm py-1 relative">

<div className="stack-card absolute inset-0 rounded-3xl p-8 md:p-12 flex flex-col justify-between border border-white/10 bg-[#111] shadow-2xl" id="card-1" style={{transform: 'scale(0.94) rotate(-2deg)', filter: 'brightness(0.6)'}}>
<div className="relative">
<svg className="lucide lucide-ghost w-12 h-12 text-neutral-600 mb-6 opacity-50" data-lucide="ghost" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 10h.01"></path><path d="M15 10h.01"></path><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"></path></svg>
<p className="text-3xl md:text-3xl font-serif text-white leading-tight">
                "Ich habe keine Website."
              </p>
<p className="mt-6 text-neutral-500 text-lg leading-relaxed">
                Sie existieren online nicht. Kunden suchen nach Ihnen, finden
                aber die Konkurrenz. Sie verlieren täglich Umsatz.
              </p>
</div>
<div className="text-[10px] font-bold tracking-widest text-red-500 uppercase">
              Problem #1
            </div>
</div>

<div className="stack-card absolute inset-0 rounded-3xl p-8 md:p-12 flex flex-col justify-between border border-white/10 bg-[#111] shadow-2xl translate-y-[120%] opacity-0" id="card-2" style={{transform: 'translateY(0%) scale(1) rotate(2deg)', opacity: '1'}}>
<div className="relative">
<i className="w-12 h-12 text-neutral-600 mb-6 opacity-50" data-lucide="smartphone-off"></i>
<p className="text-3xl md:text-3xl font-serif text-white leading-tight">
                "Meine Seite ist veraltet."
              </p>
<p className="mt-6 text-neutral-500 text-lg leading-relaxed">
                Nicht mobil-optimiert, langsam und bei Google auf Seite 10. Ihre
                Website schreckt Kunden eher ab.
              </p>
</div>
<div className="text-[10px] font-bold tracking-widest text-red-500 uppercase">
              Problem #2
            </div>
</div>

<div className="stack-card absolute inset-0 rounded-3xl p-8 md:p-12 flex flex-col justify-between border border-white/10 bg-[#111] shadow-2xl translate-y-[120%] opacity-0" id="card-3" style={{transform: 'translateY(0%) scale(1) rotate(-1deg)', opacity: '1'}}>
<div className="relative">
<svg className="lucide lucide-banknote w-12 h-12 text-neutral-600 mb-6 opacity-50" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
<p className="text-3xl md:text-3xl font-serif text-white leading-tight">
                "Agenturen sind zu teuer."
              </p>
<p className="mt-6 text-neutral-500 text-lg leading-relaxed">
                Angebote zwischen 5.000€ und 15.000€ sind für lokale Unternehmen
                unrealistisch. Und es dauert Monate.
              </p>
</div>
<div className="text-[10px] font-bold tracking-widest text-red-500 uppercase">
              Problem #3
            </div>
</div>
</div>
</div>
<div className="h-[250vh]"></div>
</section>

<section className="md:py-32 bg-black pt-24 pb-24 relative overflow-hidden" id="ablauf">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="mb-20">
<p className="text-xs font-bold tracking-[0.2em] uppercase text-orange-500 mb-4">
            HOW IT WORKS
          </p>
<h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight max-w-4xl">
            Der klare Weg von der Idee zur Website mit loqal
          </h2>
</div>
<div className="relative" id="timeline-wrapper">

<div className="absolute left-[9px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-orange-500 via-orange-500/50 to-neutral-800 z-0 hidden md:block"></div>
<div className="space-y-32">

<div className="timeline-step grid md:grid-cols-[400px_1fr] gap-12 lg:gap-24 relative group" data-step="1">

<div className="relative pl-12 md:pl-10 flex flex-col justify-center">

<div className="absolute left-0 md:-left-[2px] top-2 w-5 h-5 bg-orange-500 rounded-sm shadow-[0_0_15px_rgba(249,115,22,0.6)] z-10 flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
</div>
<h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                   Anforderungen besprechen
                 </h3>
<p className="text-lg text-neutral-400 leading-relaxed">
                   Beschreiben Sie Ihre Idee und Ihr Geschäft in einfachen Worten – wir benötigen kein kompliziertes technisches Briefing.
                 </p>
</div>

<div className="relative">
<div className="bg-[#111] border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden group-hover:border-white/20 transition-colors duration-500">
<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-orange-500/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="bg-black/80 border border-white/10 rounded-2xl p-2 relative">
<div className="flex flex-col md:flex-row gap-4 p-4 md:items-center">
<p className="text-neutral-300 text-lg font-medium flex-1">
                          "Erstelle eine moderne Website für meine Physiotherapie in Dresden, einladend und professionell."
                        </p>
<button className="bg-orange-500 hover:bg-orange-400 text-black px-6 py-3 rounded-full font-semibold text-sm transition-colors whitespace-nowrap shadow-lg shadow-orange-500/20">
                          Anfrage senden
                        </button>
</div>
</div>
</div>
</div>
</div>

<div className="timeline-step grid md:grid-cols-[400px_1fr] gap-12 lg:gap-24 relative group" data-step="2">

<div className="relative pl-12 md:pl-10 flex flex-col justify-center">

<div className="absolute left-0 md:-left-[2px] top-2 w-5 h-5 bg-orange-500 rounded-sm shadow-[0_0_15px_rgba(249,115,22,0.6)] z-10 flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
</div>
<h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                   Smarte Vorschau erhalten
                 </h3>
<p className="text-lg text-neutral-400 leading-relaxed">
                   loqal verwandelt Ihre Anforderungen in einen strukturierten, design-fertigen Entwurf. Sie erhalten Ihren Preview-Link in nur 24 Stunden.
                 </p>
</div>

<div className="relative">
<div className="bg-[#111] border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden group-hover:border-white/20 transition-colors duration-500">
<p className="text-orange-500 font-bold text-sm mb-6 flex items-center gap-2">
<span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                     Entwurf generiert von loqal
                   </p>
<h4 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                     Physiotherapie Müller: Zurück zu Ihrer Stärke
                   </h4>
<p className="text-neutral-400 text-lg leading-relaxed mb-8">
                     Willkommen in unserer modernen Praxis im Herzen von Dresden. Wir helfen Ihnen dabei, schmerzfrei zu werden und Ihre Mobilität zurückzugewinnen. Unser erfahrenes Team steht für ganzheitliche Therapieansätze...
                   </p>
<div className="flex gap-3">
<div className="h-3 w-24 bg-neutral-800 rounded-full"></div>
<div className="h-3 w-16 bg-neutral-800 rounded-full"></div>
<div className="h-3 w-32 bg-neutral-800 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="timeline-step grid md:grid-cols-[400px_1fr] gap-12 lg:gap-24 relative group" data-step="3">

<div className="relative pl-12 md:pl-10 flex flex-col justify-center">

<div className="absolute left-0 md:-left-[2px] top-2 w-5 h-5 bg-orange-500 rounded-sm shadow-[0_0_15px_rgba(249,115,22,0.6)] z-10 flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
</div>
<h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                   Live &amp; Optimieren
                 </h3>
<p className="text-lg text-neutral-400 leading-relaxed">
                   Nach Ihrem Feedback geht die Seite live. Wir starten die SEO-Optimierung automatisch, damit Sie gefunden werden.
                 </p>
</div>

<div className="relative">
<div className="bg-[#111] border border-white/10 rounded-[32px] p-2 md:p-2 shadow-2xl relative overflow-hidden group-hover:border-white/20 transition-colors duration-500">
<div className="bg-neutral-900 rounded-[28px] overflow-hidden border border-white/5">

<div className="h-10 bg-black border-b border-white/5 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
</div>
<div className="ml-4 bg-neutral-800/50 rounded px-2 py-0.5 text-[10px] text-neutral-500 font-mono flex items-center gap-1">
<svg fill="none" height="10" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="10"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                physio-mueller-dresden.de
                            </div>
</div>

<div className="h-64 bg-neutral-950 relative flex flex-col items-center justify-center">
<div className="w-full h-full absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
<div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-4 border border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
<svg fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="40"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
</div>
<h5 className="text-white text-2xl font-bold mb-1">Website Online</h5>
<p className="text-neutral-500 text-sm">SEO-Modul aktiv</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    Technologie, die für Sie arbeitet.
                </h2>
<p className="text-lg text-neutral-400">
                    Wir bauen nicht nur schöne Websites. Wir bauen Hochleistungs-Maschinen für Ihr lokales Marketing. Sicher, schnell und optimiert.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative bg-[#111] rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-[40px] -mr-10 -mt-10 transition-opacity group-hover:opacity-100 opacity-50"></div>
<div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center text-white mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<h3 className="text-xl font-bold text-white mb-3">Google PageSpeed 99+</h3>
<p className="text-neutral-400 leading-relaxed text-sm">
                        Ladezeiten unter 0,5 Sekunden. Das freut nicht nur Ihre Kunden, sondern auch den Google Algorithmus für besseres Ranking.
                    </p>
</div>

<div className="group relative bg-[#111] rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] -mr-10 -mt-10 transition-opacity group-hover:opacity-100 opacity-50"></div>
<div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center text-white mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-bold text-white mb-3">100% DSGVO &amp; Sicher</h3>
<p className="text-neutral-400 leading-relaxed text-sm">
                        Keine Abmahngefahr. Wir kümmern uns um Cookie-Banner, SSL-Zertifikate, Impressum und Datenschutzerklärungen.
                    </p>
</div>

<div className="group relative bg-[#111] rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-[40px] -mr-10 -mt-10 transition-opacity group-hover:opacity-100 opacity-50"></div>
<div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center text-white mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="text-xl font-bold text-white mb-3">Mobile First Design</h3>
<p className="text-neutral-400 leading-relaxed text-sm">
                        Über 80% der lokalen Suchen passieren am Handy. Ihre Website sieht auf dem Smartphone genauso brillant aus wie am Desktop.
                    </p>
</div>
</div>
</div>
</section>

<section className="relative min-h-[800px] flex items-center justify-center bg-black overflow-hidden py-24 border-t border-white/5">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
<div className="relative flex flex-col items-center justify-center min-h-[600px]">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-[300px] h-[300px] rounded-full border border-white/5 absolute"></div>
<div className="w-[550px] h-[550px] rounded-full border border-white/5 absolute opacity-50"></div>
<div className="w-[800px] h-[800px] rounded-full border border-white/5 absolute opacity-30"></div>
</div>

<div className="text-center z-20 max-w-2xl bg-black/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 shadow-2xl">
<h2 className="text-4xl md:text-5xl font-serif text-white mb-6 tracking-tight">
                        Nahtlose Integration <br/>
<span className="text-neutral-500 italic">Ihrer Tools</span>
</h2>
<p className="text-lg text-neutral-400">
                        Wir verbinden Ihre Website mit allem, was wichtig ist. <br className="hidden md:block"/>
                        Automatische Terminbuchung, Bewertungen und Kundenkontakt.
                    </p>
</div>


<div className="absolute top-[10%] left-1/2 -translate-x-1/2 animate-float">
<div className="w-16 h-16 bg-[#1A1A1A] rounded-2xl border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-orange-500/50 transition-colors cursor-default group">
<svg className="lucide lucide-message-circle text-green-500 w-8 h-8 group-hover:scale-110 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
<div className="absolute -bottom-8 bg-white/10 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">WhatsApp</div>
</div>
</div>

<div className="absolute top-[20%] right-[15%] animate-float delay-1000">
<div className="w-14 h-14 bg-[#1A1A1A] rounded-2xl border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-orange-500/50 transition-colors group">
<svg className="lucide lucide-map-pin text-red-500 w-6 h-6 group-hover:scale-110 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div className="absolute -bottom-8 bg-white/10 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Google Maps</div>
</div>
</div>

<div className="absolute top-1/2 right-[5%] -translate-y-1/2 animate-float delay-2000">
<div className="w-16 h-16 bg-[#1A1A1A] rounded-2xl border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-orange-500/50 transition-colors group">
<svg className="lucide lucide-bar-chart-3 text-orange-500 w-8 h-8 group-hover:scale-110 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<div className="absolute -bottom-8 bg-white/10 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Analytics</div>
</div>
</div>

<div className="absolute bottom-[20%] right-[15%] animate-float">
<div className="w-14 h-14 bg-[#1A1A1A] rounded-2xl border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-orange-500/50 transition-colors group">
<svg className="lucide lucide-calendar-check text-blue-500 w-6 h-6 group-hover:scale-110 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line><path d="m9 16 2 2 4-4"></path></svg>
<div className="absolute -bottom-8 bg-white/10 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Buchung</div>
</div>
</div>

<div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 animate-float delay-1000">
<div className="w-16 h-16 bg-[#1A1A1A] rounded-2xl border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-orange-500/50 transition-colors group">
<svg className="lucide lucide-instagram text-pink-500 w-8 h-8 group-hover:scale-110 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<div className="absolute -bottom-8 bg-white/10 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Social</div>
</div>
</div>

<div className="absolute bottom-[20%] left-[15%] animate-float delay-2000">
<div className="w-14 h-14 bg-[#1A1A1A] rounded-2xl border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-orange-500/50 transition-colors group">
<svg className="lucide lucide-search text-yellow-500 w-6 h-6 group-hover:scale-110 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<div className="absolute -bottom-8 bg-white/10 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">SEO</div>
</div>
</div>

<div className="absolute top-1/2 left-[5%] -translate-y-1/2 animate-float">
<div className="w-16 h-16 bg-[#1A1A1A] rounded-2xl border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-orange-500/50 transition-colors group">
<svg className="lucide lucide-globe text-purple-500 w-8 h-8 group-hover:scale-110 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
<div className="absolute -bottom-8 bg-white/10 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Domain</div>
</div>
</div>

<div className="absolute top-[20%] left-[15%] animate-float delay-1000">
<div className="w-14 h-14 bg-[#1A1A1A] rounded-2xl border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-orange-500/50 transition-colors group">
<svg className="lucide lucide-shield text-emerald-500 w-6 h-6 group-hover:scale-110 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
<div className="absolute -bottom-8 bg-white/10 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">SSL</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-black text-white py-24 md:py-32 overflow-hidden" id="lenora-advantage">
<div className="max-w-5xl mx-auto px-6 text-center mb-14 md:mb-20">
<h2 className="text-3xl md:text-5xl font-semibold leading-tight text-neutral-50">
          Unser unfairer Vorteil
        </h2>
</div>
<div className="max-w-6xl mx-auto px-6 md:px-10" style={{perspective: '1600px'}}>
<div className="relative h-[420px] md:h-[520px] flex items-center justify-center gap-10 md:gap-16">

<div className="adv-card adv-card-left w-[280px] sm:w-[320px] h-[340px] md:h-[400px]">
<div className="adv-card-inner">
<div className="adv-card-face adv-card-front rounded-[32px] bg-neutral-900 border border-neutral-800 flex items-center justify-center shadow-2xl">
<p className="text-xl font-medium tracking-wide text-neutral-100">
                  Andere Agenturen
                </p>
</div>
<div className="adv-card-face adv-card-back rounded-[32px] bg-black/90 border border-neutral-800 flex flex-col p-8">
<h3 className="text-xl font-semibold mb-5 text-neutral-400">
                  Andere Agenturen
                </h3>
<ul className="space-y-4 text-sm text-neutral-300">
<li className="flex gap-3">
<span className="text-red-500">✕</span>
                    Extrem teuer (5k - 15k€)
                  </li>
<li className="flex gap-3">
<span className="text-red-500">✕</span>
                    Wartezeiten von Monaten
                  </li>
<li className="flex gap-3">
<span className="text-red-500">✕</span>
                    SEO kostet extra
                  </li>
</ul>
</div>
</div>
</div>

<div className="adv-card adv-card-right w-[280px] sm:w-[320px] h-[340px] md:h-[400px]">
<div className="adv-card-inner">
<div className="adv-card-face adv-card-front rounded-[32px] bg-orange-600 border border-orange-400 flex items-center justify-center shadow-2xl shadow-orange-900/40">
<p className="text-2xl font-bold tracking-wide text-white">loqal</p>
</div>
<div className="adv-card-face adv-card-back rounded-[32px] bg-gradient-to-br from-orange-900/40 to-black border border-orange-500/50 flex flex-col p-8">
<h3 className="text-xl font-semibold mb-5 text-white">loqal</h3>
<ul className="space-y-4 text-sm text-white">
<li className="flex gap-3">
<span className="text-green-400">✔</span>
                    Live in 48 Stunden
                  </li>
<li className="flex gap-3">
<span className="text-green-400">✔</span>
                    Günstige Festpreise
                  </li>
<li className="flex gap-3">
<span className="text-green-400">✔</span>
                    SEO inklusive &amp; garantiert
                  </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5" id="ergebnisse">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl md:text-5xl font-serif text-white mb-12 text-center">
          Das sagen unsere Kunden
        </h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/10 relative">
<svg className="lucide lucide-quote text-orange-500 w-8 h-8 mb-4 opacity-50" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="text-neutral-300 mb-6 leading-relaxed">
              "Von 50 auf 800 Website-Besucher in 3 Monaten. Vorher waren wir
              nicht auffindbar, jetzt Platz 3."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-neutral-500">
                PM
              </div>
<div>
<div className="text-white text-sm font-medium">Petra M.</div>
<div className="text-neutral-500 text-xs">
                  Physiotherapie Dresden
                </div>
</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/10 relative">
<svg className="lucide lucide-quote text-orange-500 w-8 h-8 mb-4 opacity-50" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="text-neutral-300 mb-6 leading-relaxed">
              "Endlich eine bezahlbare Lösung. 5.000€ wollten andere, hier ein
              Drittel und SEO dazu."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-neutral-500">
                TK
              </div>
<div>
<div className="text-white text-sm font-medium">Thomas K.</div>
<div className="text-neutral-500 text-xs">
                  Dachdeckerei Chemnitz
                </div>
</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/10 relative">
<svg className="lucide lucide-quote text-orange-500 w-8 h-8 mb-4 opacity-50" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="text-neutral-300 mb-6 leading-relaxed">
              "Top 10 in nur 4 Monaten. Wir waren skeptisch, aber ranken jetzt
              für alle Keywords."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-neutral-500">
                SL
              </div>
<div>
<div className="text-white text-sm font-medium">Sandra L.</div>
<div className="text-neutral-500 text-xs">Friseursalon Leipzig</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-y border-white/5">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl text-center font-serif text-white mb-12">
          Was bringt Ihnen eine professionelle Website?
        </h2>
<div className="bg-neutral-900 rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl">
<div className="flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1 space-y-4 w-full">
<label className="block text-xs uppercase text-neutral-500 tracking-wider">
                Beispielrechnung
              </label>
<div className="text-2xl font-serif text-white">
                Friseur in Chemnitz
              </div>
<div className="space-y-4 pt-4">
<div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
<span className="text-neutral-400">Website-Besucher / Monat</span>
<span className="text-white font-mono">~2.000</span>
</div>
<div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
<span className="text-neutral-400">Neue Anfragen</span>
<span className="text-white font-mono">~100</span>
</div>
<div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
<span className="text-neutral-400">Neukunden (40%)</span>
<span className="text-orange-400 font-mono font-bold">40</span>
</div>
</div>
</div>
<div className="w-full md:w-px h-px md:h-40 bg-white/10"></div>
<div className="flex-1 text-center">
<div className="text-sm text-neutral-500 mb-2">
                Zusätzlicher Umsatz / Monat
              </div>
<div className="text-4xl md:text-5xl font-bold text-white mb-4">
                ~1.600€
              </div>
<div className="inline-block bg-green-500/10 text-green-400 px-3 py-1 rounded text-xs border border-green-500/20">
                ROI nach 3-4 Monaten
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 text-white bg-black relative" id="preise">
<div className="lg:px-8 max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16 reveal">
<p className="text-xs font-semibold tracking-[0.25em] uppercase text-orange-400 mb-3">
            #PAKETE
          </p>
<h2 className="text-3xl md:text-5xl font-semibold leading-tight text-neutral-50">
            Transparente Festpreise
          </h2>
<p className="mt-3 text-neutral-400">
            Alle Pakete inkl. professioneller Website, Mobile-Optimierung und
            SSL.
          </p>
</div>
<div className="grid gap-6 md:gap-8 md:grid-cols-[1fr_1.1fr_1fr] items-start">

<div className="rounded-[32px] bg-neutral-950/70 border border-neutral-800 p-8 reveal">
<h3 className="text-xl font-medium mb-1">Website Express</h3>
<p className="text-sm text-neutral-500 mb-6">
              Perfekt für den schnellen Start
            </p>
<div className="mb-6">
<span className="text-4xl font-medium tracking-tight">1.497€</span>
<span className="text-sm text-neutral-500 block mt-1">einmalig</span>
</div>
<a className="block w-full text-center rounded-full bg-neutral-800 hover:bg-neutral-700 py-3 text-sm font-medium mb-6 transition-colors" href="#contact">
              Jetzt starten
            </a>
<ul className="space-y-3 text-sm text-neutral-300">
<li className="flex gap-2">
<svg className="lucide lucide-check w-4 h-4 text-neutral-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Profi-Website (5 Seiten)
              </li>
<li className="flex gap-2">
<svg className="lucide lucide-check w-4 h-4 text-neutral-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Live in 48 Stunden
              </li>
<li className="flex gap-2">
<svg className="lucide lucide-check w-4 h-4 text-neutral-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Google Maps &amp; Kontakt
              </li>
</ul>
</div>

<div className="relative rounded-[32px] bg-gradient-to-b from-orange-900/20 to-black border border-orange-500/50 p-8 shadow-[0_0_50px_rgba(249,115,22,0.15)] reveal delay-100">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Bestseller
            </div>
<h3 className="text-xl font-medium mb-1 text-white">
              Website + SEO Kickstart
            </h3>
<p className="text-sm text-neutral-400 mb-6">
              Website + 3 Monate SEO Power
            </p>
<div className="mb-6">
<span className="text-4xl font-medium tracking-tight text-white">
                2.997€
              </span>
<span className="text-xs text-orange-400 block mt-1 line-through opacity-70">
                Wert: 4.782€
              </span>
</div>
<a className="block w-full text-center rounded-full bg-orange-500 hover:bg-orange-400 py-3 text-sm font-bold text-black mb-6 transition-colors shadow-lg shadow-orange-900/20" href="#contact">
              Jetzt Top 10 Plätze sichern
            </a>
<ul className="space-y-3 text-sm text-white">
<li className="flex gap-2">
<svg className="lucide lucide-check w-4 h-4 text-orange-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Alles aus Express
              </li>
<li className="flex gap-2">
<svg className="lucide lucide-check w-4 h-4 text-orange-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                30 SEO-Artikel (10/Monat)
              </li>
<li className="flex gap-2">
<svg className="lucide lucide-check w-4 h-4 text-orange-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Keyword-Recherche
              </li>
</ul>
</div>

<div className="rounded-[32px] bg-neutral-950/70 border border-neutral-800 p-8 reveal delay-200">
<h3 className="text-xl font-medium mb-1">Local SEO Dominanz</h3>
<p className="text-sm text-neutral-500 mb-6">Top 10 oder Geld zurück</p>
<div className="mb-6">
<span className="text-4xl font-medium tracking-tight">4.997€</span>
<span className="text-xs text-neutral-500 block mt-1 line-through">
                Wert: 8.964€
              </span>
</div>
<a className="block w-full text-center rounded-full bg-white text-black hover:bg-neutral-200 py-3 text-sm font-medium mb-6 transition-colors" href="#contact">
              Garantie sichern
            </a>
<ul className="space-y-3 text-sm text-neutral-300">
<li className="flex gap-2">
<svg className="lucide lucide-check w-4 h-4 text-neutral-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                180 SEO-Artikel (6 Monate)
              </li>
<li className="flex gap-2">
<svg className="lucide lucide-check w-4 h-4 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</li>
<li className="flex gap-2">
<svg className="lucide lucide-check w-4 h-4 text-neutral-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                20 Hochwertige Backlinks
              </li>
</ul>
</div>
</div>

<div className="mt-12 bg-neutral-900/50 border border-dashed border-orange-500/30 rounded-xl p-6 text-center reveal">
<p className="text-orange-400 font-bold mb-2">
            🎁 SPECIAL OFFER: Buchen Sie heute und erhalten Sie:
          </p>
<p className="text-sm text-neutral-400">
            Kostenlose Website-Vorschau (Wert: 297€) + Google Analytics Setup
            (Wert: 197€)
          </p>
<p className="text-xs text-neutral-500 mt-2 italic">
            Nur noch 3 Plätze verfügbar diesen Monat!
          </p>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-serif text-white mb-12 text-center">
          Häufig gestellte Fragen
        </h2>
<div className="space-y-4">
<details className="group bg-neutral-900/30 border border-white/10 rounded-xl overflow-hidden">
<summary className="flex justify-between items-center p-4 cursor-pointer hover:bg-white/5 transition-colors font-medium text-white">
              Warum sind Sie günstiger als Agenturen?
              <svg className="lucide lucide-chevron-down w-4 h-4 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="p-4 pt-0 text-neutral-400 text-sm leading-relaxed">
              Wir haben Prozesse automatisiert. Während Agenturen manuell bauen,
              nutzen wir moderne Templates und KI für Content. Das spart 80%
              Zeit – diese Ersparnis geben wir weiter.
            </div>
</details>
<details className="group bg-neutral-900/30 border border-white/10 rounded-xl overflow-hidden">
<summary className="flex justify-between items-center p-4 cursor-pointer hover:bg-white/5 transition-colors font-medium text-white">
              Kann ich die Website selbst bearbeiten?
              <svg className="lucide lucide-chevron-down w-4 h-4 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="p-4 pt-0 text-neutral-400 text-sm leading-relaxed">
              Ja! Nach dem Launch erhalten Sie vollen Zugriff und eine
              Einführung. Kleine Änderungen können Sie problemlos selbst
              vornehmen.
            </div>
</details>
<details className="group bg-neutral-900/30 border border-white/10 rounded-xl overflow-hidden">
<summary className="flex justify-between items-center p-4 cursor-pointer hover:bg-white/5 transition-colors font-medium text-white">
              Was, wenn ich nicht in die Top 10 komme?
              <svg className="lucide lucide-chevron-down w-4 h-4 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="p-4 pt-0 text-neutral-400 text-sm leading-relaxed">
              Beim Garantie-Paket erstatten wir 100% der SEO-Kosten, wenn wir
              nicht mind. 3 von 5 Keywords in 6 Monaten in die Top 10 bringen.
            </div>
</details>
<details className="group bg-neutral-900/30 border border-white/10 rounded-xl overflow-hidden">
<summary className="flex justify-between items-center p-4 cursor-pointer hover:bg-white/5 transition-colors font-medium text-white">
              Wie lange dauert es bis zu Ergebnissen?
              <svg className="lucide lucide-chevron-down w-4 h-4 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="p-4 pt-0 text-neutral-400 text-sm leading-relaxed">
              Website ist in 48h live. SEO braucht Zeit: Erste Ergebnisse ab
              Monat 2-3, Top Rankings meist nach 4-6 Monaten.
            </div>
</details>
</div>
</div>
</section>

<footer className="bg-black border-white/10 border-t pt-20 pb-24" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
<div className="max-w-lg reveal">
<h2 className="text-5xl lg:text-6xl font-serif tracking-tight mb-8">
              Bereit, online gefunden zu werden?
            </h2>
<p className="text-lg text-neutral-400 mb-8">
              Starten Sie noch heute. Kostenfreies Erstgespräch. Kein Risiko.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-orange-500 text-black h-12 rounded-full px-8 font-bold hover:bg-orange-400 transition-colors shadow-lg shadow-orange-500/20">
                Kostenlose Beratung buchen
              </button>
<button className="border border-white/20 text-white h-12 rounded-full px-8 font-medium hover:bg-white/10 transition-colors">
                +49 371 934520
              </button>
</div>
<p className="mt-4 text-xs text-neutral-500">
              ⏰ Nächste Termine: Morgen 10:00, 14:00 Uhr
            </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-24 reveal delay-200">
<div>
<h4 className="text-white font-medium mb-4">Kontakt</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li className="text-white">loqal</li>
<li>Daniel Weishar</li>
<li>Chemnitz, Sachsen</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Vertrauen</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li>✓ DSGVO-konform</li>
<li>✓ SSL-verschlüsselt</li>
<li>✓ Made in Germany</li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<span className="text-sm text-neutral-500">
              © 2024 loqal. All rights reserved.
            </span>
</div>
<div className="flex gap-4 text-neutral-500 text-xs uppercase tracking-wider">
<span>Chemnitz</span>
            •
            <span>Dresden</span>
            •
            <span>Leipzig</span>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 right-0 bg-neutral-900/90 backdrop-blur-md border-t border-white/10 p-4 z-50 transform translate-y-0 transition-transform duration-300">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
<div className="text-sm text-white font-medium hidden sm:block">
          🚀 Starten Sie jetzt Ihre digitale Transformation
        </div>
<div className="flex items-center gap-4 w-full sm:w-auto">
<span className="text-xs text-orange-400 animate-pulse hidden sm:inline-block">
            ● Nur noch 3 Plätze
          </span>
<button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-400 text-black text-xs font-bold py-2.5 px-6 rounded-full transition-colors">
            Kostenlose Beratung
          </button>
</div>
</div>
</div>

<style>
      #lenora-advantage .adv-card { opacity: 0; transition: opacity 500ms ease-out; }
      #lenora-advantage.is-visible .adv-card { opacity: 1; }
      #lenora-advantage .adv-card-inner { width: 100%; height: 100%; transform-style: preserve-3d; transition: transform 900ms cubic-bezier(0.19, 1, 0.22, 1); }
      #lenora-advantage .adv-card-face { position: absolute; inset: 0; backface-visibility: hidden; }
      #lenora-advantage .adv-card-back { transform: rotateY(180deg); }
      #lenora-advantage.state-1 .adv-card-left .adv-card-inner { transform: rotateZ(-6deg) rotateY(-18deg); }
      #lenora-advantage.state-1 .adv-card-right .adv-card-inner { transform: rotateZ(6deg) rotateY(18deg); }
      #lenora-advantage.state-2 .adv-card-left .adv-card-inner { transform: translateX(-40px) rotateY(40deg) rotateZ(-4deg); }
      #lenora-advantage.state-2 .adv-card-right .adv-card-inner { transform: translateX(40px) rotateY(-40deg) rotateZ(4deg); }
      #lenora-advantage.state-3 .adv-card-inner { transform: rotateY(180deg); }
    </style>

    </>
  );
}
