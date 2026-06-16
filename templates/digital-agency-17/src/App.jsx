import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
50: '#eff6ff',
100: '#dbeafe',
200: '#bfdbfe',
300: '#93c5fd',
400: '#60a5fa',
500: '#3b82f6', // Primary Blue
600: '#2563eb',
700: '#1d4ed8',
800: '#1e40af',
900: '#1e3a8a',
950: '#172554',
}
}
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`.replace(/\\s+/g, ' ').trim(),
};
}
});
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`.replace(/\\s+/g, ' ').trim(),
};
}
});
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
addUtilities({ ...rotateXUtilities, ...rotateYUtilities, ...perspectiveUtilities });
}
]
};



      (function () {
        const el = document.getElementById('hero-typing-word');
        if (!el) return;
        const words = ['rychlá', 'úspěšná', 'zisková', 'viditelná'];
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
          const advSection = document.querySelector('#comparison-section');
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
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 right-0 h-8 bg-brand-600 z-[60] flex items-center justify-center px-4">
<p className="text-[10px] font-bold uppercase tracking-widest text-white flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
        Přijímáme nové projekty na Q4 2023
      </p>
</div>

<div className="fixed inset-0 z-0 pointer-events-none bg-[#030303]">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
<div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-brand-600/15 rounded-full blur-[140px] animate-pulse"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[140px] animate-pulse" style={{animationDuration: '7s'}}></div>
</div>

<nav className="fixed top-8 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold text-lg">W</div>
<span className="text-lg tracking-tight text-white font-bold">
              wobify
            </span>
</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#proces">Proces</a>
<a className="hover:text-white transition-colors" href="#sluzby">Služby</a>
<a className="hover:text-white transition-colors" href="#vysledky">Výsledky</a>
<a className="hover:text-white transition-colors" href="#cenik">Ceník</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-neutral-300 hover:text-white transition-colors" href="#contact">
            info@wobify.cz
          </a>
<a className="h-9 px-4 rounded-full bg-white text-black text-sm flex items-center gap-2 hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] font-medium" href="#contact">
<span className="">Konzultace</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="lg:pt-40 lg:pb-32 overflow-hidden z-10 pt-32 pb-20 relative">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col lg:flex-row gap-16 items-center">

<div className="flex-1 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/20 bg-brand-500/5 text-brand-300 text-xs font-medium mb-8 reveal active">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
<span className="">Wobify · Digitální Agentura</span>
</div>
<div className="min-h-[9rem] sm:min-h-[10rem] lg:min-h-[11rem]">
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif tracking-tight leading-[1.1] text-white mb-6 font-normal reveal delay-100 active">
                Vaše digitální identita.
                <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-600">
<span id="hero-typing-word">moderní</span>
                  .
                  <span className="text-brand-500">wobify</span>
                  .
                </span>
</h1>
</div>
<p className="text-lg text-neutral-400 mb-10 max-w-lg leading-relaxed reveal delay-200 active">
              Vytváříme weby, které nejen vypadají skvěle, ale přinášejí reálné výsledky. 
              Moderní design, špičkové technologie a SEO optimalizace v jednom balíčku.
            </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 reveal delay-300 active">
<a className="w-full sm:w-auto text-center group shadow-brand-500/30 hover:shadow-brand-500/50 transition-all duration-300 overflow-hidden font-medium text-white bg-gradient-to-r from-brand-600 to-brand-500 rounded-xl pt-4 pr-8 pb-4 pl-8 relative shadow-lg" href="#contact" style={{borderRadius: '9999px'}}>
<div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute top-0 right-0 bottom-0 left-0 translate-y-full"></div>
<span className="relative flex items-center justify-center gap-2">
                  Nezávazná poptávka
                  <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</span>
</a>
<button className="w-full sm:w-auto h-12 px-8 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                Showreel
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
<iconify-icon icon="solar:lock-keyhole-linear" width="12"></iconify-icon>
                    projekt-klient.cz
                  </div>
<div className="w-4"></div>
</div>

<div className="p-0 overflow-hidden relative h-full bg-neutral-950 flex flex-col items-center pt-8">

<div className="w-[90%] h-32 bg-neutral-800/30 rounded-lg border border-white/5 mb-4 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-brand-500/10 to-transparent"></div>
<div className="text-center z-10">
<div className="h-2 w-24 bg-neutral-700 rounded mb-2 mx-auto"></div>
<div className="h-6 w-48 bg-white/10 rounded mb-2 mx-auto"></div>
<div className="h-8 px-4 bg-brand-600 rounded text-[10px] text-white font-bold flex items-center justify-center mx-auto mt-4 w-32">
                        OBJEDNAT SLUŽBU
                      </div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[85%] glass-panel rounded-xl p-4 border border-green-500/20 shadow-lg shadow-green-900/10 flex items-center justify-between gap-4 animate-fade-up delay-500">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-[10px] uppercase text-neutral-500 font-bold tracking-wider">
                          Výkon webu
                        </div>
<div className="text-sm text-white font-medium">
                          Google PageSpeed 100
                        </div>
</div>
</div>
<div className="text-green-400 text-xs font-bold">+124% 🚀</div>
</div>

<svg className="absolute bottom-0 w-full h-40 text-brand-500/5" preserveaspectratio="none" viewbox="0 0 100 40">
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
          Technologie, které používáme
        </p>
<div className="relative flex overflow-x-hidden group">
<div className="animate-marquee whitespace-nowrap flex gap-16 items-center transition-all duration-500 text-neutral-400 opacity-70 grayscale hover:grayscale-0 hover:opacity-100">
<span className="flex items-center gap-2 font-bold text-xl"><iconify-icon icon="logos:nextjs-icon"></iconify-icon> Next.js</span>
<span className="flex items-center gap-2 font-bold text-xl"><iconify-icon icon="logos:react"></iconify-icon> React</span>
<span className="flex items-center gap-2 font-bold text-xl"><iconify-icon icon="logos:tailwindcss-icon"></iconify-icon> Tailwind</span>
<span className="flex items-center gap-2 font-bold text-xl"><iconify-icon icon="logos:typescript-icon"></iconify-icon> TypeScript</span>
<span className="flex items-center gap-2 font-bold text-xl"><iconify-icon icon="logos:figma"></iconify-icon> Figma</span>
<span className="flex items-center gap-2 font-bold text-xl"><iconify-icon icon="logos:vercel-icon"></iconify-icon> Vercel</span>

<span className="flex items-center gap-2 font-bold text-xl"><iconify-icon icon="logos:nextjs-icon"></iconify-icon> Next.js</span>
<span className="flex items-center gap-2 font-bold text-xl"><iconify-icon icon="logos:react"></iconify-icon> React</span>
<span className="flex items-center gap-2 font-bold text-xl"><iconify-icon icon="logos:tailwindcss-icon"></iconify-icon> Tailwind</span>
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
            Znáte tyto
            <br/>
<span className="text-neutral-500">problémy?</span>
</h2>
</div>
<div className="card-stack-wrapper md:h-[500px] w-full h-[480px] max-w-sm py-1 relative">

<div className="stack-card absolute inset-0 rounded-3xl p-8 md:p-12 flex flex-col justify-between border border-white/10 bg-[#111] shadow-2xl" id="card-1" style={{transform: 'scale(0.94) rotate(-2deg)', filter: 'brightness(0.6)'}}>
<div className="relative">
<iconify-icon className="text-neutral-600 mb-6 opacity-50" icon="solar:ghost-linear" width="48"></iconify-icon>
<p className="text-3xl md:text-3xl font-serif text-white leading-tight">
                "Zákazníci mě nemohou najít."
              </p>
<p className="mt-6 text-neutral-500 text-lg leading-relaxed">
                Online neexistujete. Lidé hledají vaše služby, ale nacházejí konkurenci. Přicházíte o tržby každý den.
              </p>
</div>
<div className="text-[10px] font-bold tracking-widest text-red-500 uppercase">
              Problém #1
            </div>
</div>

<div className="stack-card absolute inset-0 rounded-3xl p-8 md:p-12 flex flex-col justify-between border border-white/10 bg-[#111] shadow-2xl translate-y-[120%] opacity-0" id="card-2" style={{transform: 'translateY(0%) scale(1) rotate(2deg)', opacity: '1'}}>
<div className="relative">
<iconify-icon className="text-neutral-600 mb-6 opacity-50" icon="solar:smartphone-linear" width="48"></iconify-icon>
<p className="text-3xl md:text-3xl font-serif text-white leading-tight">
                "Web na mobilu nefunguje."
              </p>
<p className="mt-6 text-neutral-500 text-lg leading-relaxed">
                Více než 80% návštěv je z mobilu. Pokud se web špatně zobrazuje, zákazník okamžitě odchází.
              </p>
</div>
<div className="text-[10px] font-bold tracking-widest text-red-500 uppercase">
              Problém #2
            </div>
</div>

<div className="stack-card absolute inset-0 rounded-3xl p-8 md:p-12 flex flex-col justify-between border border-white/10 bg-[#111] shadow-2xl translate-y-[120%] opacity-0" id="card-3" style={{transform: 'translateY(0%) scale(1) rotate(-1deg)', opacity: '1'}}>
<div className="relative">
<iconify-icon className="text-neutral-600 mb-6 opacity-50" icon="solar:wad-of-money-linear" width="48"></iconify-icon>
<p className="text-3xl md:text-3xl font-serif text-white leading-tight">
                "Agentury jsou drahé."
              </p>
<p className="mt-6 text-neutral-500 text-lg leading-relaxed">
                Nabídky za stovky tisíc jsou pro menší firmy nereálné. A vývoj trvá měsíce. My to děláme jinak.
              </p>
</div>
<div className="text-[10px] font-bold tracking-widest text-red-500 uppercase">
              Problém #3
            </div>
</div>
</div>
</div>
<div className="h-[250vh]"></div>
</section>

<section className="md:py-32 bg-black pt-24 pb-24 relative overflow-hidden" id="proces">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="mb-20">
<p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-500 mb-4">
            NÁŠ PROCES
          </p>
<h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight max-w-4xl">
            Od nápadu k hotovému webu s Wobify
          </h2>
</div>
<div className="relative" id="timeline-wrapper">

<div className="absolute left-[9px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-brand-500 via-brand-500/50 to-neutral-800 z-0 hidden md:block"></div>
<div className="space-y-32">

<div className="timeline-step grid md:grid-cols-[400px_1fr] gap-12 lg:gap-24 relative group" data-step="1">
<div className="relative pl-12 md:pl-10 flex flex-col justify-center">
<div className="absolute left-0 md:-left-[2px] top-2 w-5 h-5 bg-brand-500 rounded-sm shadow-[0_0_15px_rgba(59,130,246,0.6)] z-10 flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
</div>
<h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Konzultace a Zadání</h3>
<p className="text-lg text-neutral-400 leading-relaxed">
                   Popíšete nám svůj byznys a cíle. Nepotřebujeme technické specifikace, stačí vaše vize.
                 </p>
</div>
<div className="relative">
<div className="bg-[#111] border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden group-hover:border-white/20 transition-colors duration-500">
<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-500/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="bg-black/80 border border-white/10 rounded-2xl p-2 relative">
<div className="flex flex-col md:flex-row gap-4 p-4 md:items-center">
<p className="text-neutral-300 text-lg font-medium flex-1">
                          "Potřebuji moderní web pro mou advokátní kancelář v Praze."
                        </p>
<button className="bg-brand-600 hover:bg-brand-500 text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors whitespace-nowrap shadow-lg shadow-brand-500/20">
                          Odeslat
                        </button>
</div>
</div>
</div>
</div>
</div>

<div className="timeline-step grid md:grid-cols-[400px_1fr] gap-12 lg:gap-24 relative group" data-step="2">
<div className="relative pl-12 md:pl-10 flex flex-col justify-center">
<div className="absolute left-0 md:-left-[2px] top-2 w-5 h-5 bg-brand-500 rounded-sm shadow-[0_0_15px_rgba(59,130,246,0.6)] z-10 flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
</div>
<h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Vývoj a Design</h3>
<p className="text-lg text-neutral-400 leading-relaxed">
                   Wobify vytvoří strukturovaný, designově čistý návrh. Během několika dní vidíte první výsledky.
                 </p>
</div>
<div className="relative">
<div className="bg-[#111] border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden group-hover:border-white/20 transition-colors duration-500">
<p className="text-brand-400 font-bold text-sm mb-6 flex items-center gap-2">
<span className="w-2 h-2 bg-brand-400 rounded-full animate-pulse"></span>
                     Wobify Design System
                   </p>
<h4 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                     Advokáti Novák &amp; Partneři
                   </h4>
<p className="text-neutral-400 text-lg leading-relaxed mb-8">
                     Profesionální právní služby se zaměřením na obchodní právo. Jsme vaším partnerem v podnikání...
                   </p>
<div className="flex gap-3">
<div className="h-3 w-24 bg-neutral-800 rounded-full"></div>
<div className="h-3 w-16 bg-neutral-800 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="timeline-step grid md:grid-cols-[400px_1fr] gap-12 lg:gap-24 relative group" data-step="3">
<div className="relative pl-12 md:pl-10 flex flex-col justify-center">
<div className="absolute left-0 md:-left-[2px] top-2 w-5 h-5 bg-brand-500 rounded-sm shadow-[0_0_15px_rgba(59,130,246,0.6)] z-10 flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
</div>
<h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Spuštění a Růst</h3>
<p className="text-lg text-neutral-400 leading-relaxed">
                   Web jde do světa. Nasadíme SEO optimalizaci, propojíme analytiku a vy začínáte získávat klienty.
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
<iconify-icon icon="solar:lock-keyhole-linear" width="10"></iconify-icon>
                                novak-partneri.cz
                            </div>
</div>
<div className="h-64 bg-neutral-950 relative flex flex-col items-center justify-center">
<div className="w-full h-full absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
<div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-4 border border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
<iconify-icon icon="solar:check-circle-linear" width="40"></iconify-icon>
</div>
<h5 className="text-white text-2xl font-bold mb-1">Web je online</h5>
<p className="text-neutral-500 text-sm">Indexace Google aktivní</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5 relative overflow-hidden" id="sluzby">
<div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    Technologie, které pracují za vás.
                </h2>
<p className="text-lg text-neutral-400">
                    Nestavíme jen hezké weby. Stavíme výkonné stroje pro váš digitální marketing. Rychlé, bezpečné a připravené na růst.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative bg-[#111] rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-[40px] -mr-10 -mt-10 transition-opacity group-hover:opacity-100 opacity-50"></div>
<div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center text-white mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-3">Extrémní rychlost</h3>
<p className="text-neutral-400 leading-relaxed text-sm">
                        Weby optimalizované pro Core Web Vitals. Načítání pod 0.5s zajišťuje lepší pozice na Google.
                    </p>
</div>

<div className="group relative bg-[#111] rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] -mr-10 -mt-10 transition-opacity group-hover:opacity-100 opacity-50"></div>
<div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center text-white mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-3">100% Bezpečnost</h3>
<p className="text-neutral-400 leading-relaxed text-sm">
                        SSL certifikáty, ochrana proti DDoS a pravidelné zálohy. Bezpečnost bereme vážně.
                    </p>
</div>

<div className="group relative bg-[#111] rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-[40px] -mr-10 -mt-10 transition-opacity group-hover:opacity-100 opacity-50"></div>
<div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center text-white mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:smartphone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-3">Mobile First</h3>
<p className="text-neutral-400 leading-relaxed text-sm">
                        Responzivní design, který vypadá a funguje skvěle na každém zařízení, od mobilu po desktop.
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
                        Ekosystém <br/>
<span className="text-neutral-500 italic">vašich nástrojů</span>
</h2>
<p className="text-lg text-neutral-400">
                        Propojíme váš web s nástroji, které již používáte.<br className="hidden md:block"/>
                        Automatizace, analytika a komunikace.
                    </p>
</div>

<div className="absolute top-[10%] left-1/2 -translate-x-1/2 animate-float">
<div className="w-16 h-16 bg-[#1A1A1A] rounded-2xl border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-green-500/50 transition-colors cursor-default group">
<iconify-icon icon="logos:whatsapp-icon" width="32"></iconify-icon>
</div>
</div>
<div className="absolute top-[20%] right-[15%] animate-float delay-1000">
<div className="w-14 h-14 bg-[#1A1A1A] rounded-2xl border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-blue-500/50 transition-colors group">
<iconify-icon icon="logos:google-maps" width="24"></iconify-icon>
</div>
</div>
<div className="absolute top-1/2 right-[5%] -translate-y-1/2 animate-float delay-2000">
<div className="w-16 h-16 bg-[#1A1A1A] rounded-2xl border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-yellow-500/50 transition-colors group">
<iconify-icon icon="logos:google-analytics" width="32"></iconify-icon>
</div>
</div>
<div className="absolute bottom-[20%] right-[15%] animate-float">
<div className="w-14 h-14 bg-[#1A1A1A] rounded-2xl border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-blue-400/50 transition-colors group">
<iconify-icon icon="logos:stripe" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 animate-float delay-1000">
<div className="w-16 h-16 bg-[#1A1A1A] rounded-2xl border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-pink-500/50 transition-colors group">
<iconify-icon icon="logos:instagram-icon" width="32"></iconify-icon>
</div>
</div>
<div className="absolute top-1/2 left-[5%] -translate-y-1/2 animate-float">
<div className="w-16 h-16 bg-[#1A1A1A] rounded-2xl border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-purple-500/50 transition-colors group">
<iconify-icon className="text-purple-500" icon="solar:global-linear" width="32"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-black text-white py-24 md:py-32 overflow-hidden" id="comparison-section">
<div className="max-w-5xl mx-auto px-6 text-center mb-14 md:mb-20">
<h2 className="text-3xl md:text-5xl font-semibold leading-tight text-neutral-50">
          Proč zvolit Wobify?
        </h2>
</div>
<div className="max-w-6xl mx-auto px-6 md:px-10" style={{perspective: '1600px'}}>
<div className="relative h-[420px] md:h-[520px] flex items-center justify-center gap-10 md:gap-16">

<div className="adv-card adv-card-left w-[280px] sm:w-[320px] h-[340px] md:h-[400px]">
<div className="adv-card-inner">
<div className="adv-card-face adv-card-front rounded-[32px] bg-neutral-900 border border-neutral-800 flex items-center justify-center shadow-2xl">
<p className="text-xl font-medium tracking-wide text-neutral-100">
                  Běžná agentura
                </p>
</div>
<div className="adv-card-face adv-card-back rounded-[32px] bg-black/90 border border-neutral-800 flex flex-col p-8">
<h3 className="text-xl font-semibold mb-5 text-neutral-400">Běžná agentura</h3>
<ul className="space-y-4 text-sm text-neutral-300">
<li className="flex gap-3"><span className="text-red-500">✕</span> Drahé (50k - 150k Kč)</li>
<li className="flex gap-3"><span className="text-red-500">✕</span> Vývoj trvá měsíce</li>
<li className="flex gap-3"><span className="text-red-500">✕</span> SEO si platíte zvlášť</li>
</ul>
</div>
</div>
</div>

<div className="adv-card adv-card-right w-[280px] sm:w-[320px] h-[340px] md:h-[400px]">
<div className="adv-card-inner">
<div className="adv-card-face adv-card-front rounded-[32px] bg-brand-600 border border-brand-500 flex items-center justify-center shadow-2xl shadow-brand-900/40">
<p className="text-2xl font-bold tracking-wide text-white">wobify</p>
</div>
<div className="adv-card-face adv-card-back rounded-[32px] bg-gradient-to-br from-brand-900/40 to-black border border-brand-500/50 flex flex-col p-8">
<h3 className="text-xl font-semibold mb-5 text-white">wobify</h3>
<ul className="space-y-4 text-sm text-white">
<li className="flex gap-3"><span className="text-green-400">✔</span> Hotovo do 14 dnů</li>
<li className="flex gap-3"><span className="text-green-400">✔</span> Transparentní cena</li>
<li className="flex gap-3"><span className="text-green-400">✔</span> SEO v základu</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5" id="vysledky">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl md:text-5xl font-serif text-white mb-12 text-center">
          Co říkají naši klienti
        </h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/10 relative">
<iconify-icon className="text-brand-500 w-8 h-8 mb-4 opacity-50" icon="solar:quote-up-square-linear" width="32"></iconify-icon>
<p className="text-neutral-300 mb-6 leading-relaxed">
              "Nový web nám přivedl o 300% více poptávek během prvního měsíce. Investice se vrátila okamžitě."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-neutral-500">JN</div>
<div>
<div className="text-white text-sm font-medium">Jan Novotný</div>
<div className="text-neutral-500 text-xs">Reality Praha</div>
</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/10 relative">
<iconify-icon className="text-brand-500 w-8 h-8 mb-4 opacity-50" icon="solar:quote-up-square-linear" width="32"></iconify-icon>
<p className="text-neutral-300 mb-6 leading-relaxed">
              "Konečně agentura, která rozumí byznysu. Žádné zbytečné řeči, jen perfektní výsledek."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-neutral-500">ES</div>
<div>
<div className="text-white text-sm font-medium">Eva Svobodová</div>
<div className="text-neutral-500 text-xs">Advokacie</div>
</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/10 relative">
<iconify-icon className="text-brand-500 w-8 h-8 mb-4 opacity-50" icon="solar:quote-up-square-linear" width="32"></iconify-icon>
<p className="text-neutral-300 mb-6 leading-relaxed">
              "Rychlost a komunikace na jedničku. Web vypadá skvěle na mobilu i počítači."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-neutral-500">PK</div>
<div>
<div className="text-white text-sm font-medium">Petr Král</div>
<div className="text-neutral-500 text-xs">Autoservis Král</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 text-white bg-black relative" id="cenik">
<div className="lg:px-8 max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16 reveal">
<p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-400 mb-3">#BALÍČKY</p>
<h2 className="text-3xl md:text-5xl font-semibold leading-tight text-neutral-50">Transparentní ceny</h2>
<p className="mt-3 text-neutral-400">Žádné skryté poplatky. Vše, co potřebujete pro online růst.</p>
</div>
<div className="grid gap-6 md:gap-8 md:grid-cols-[1fr_1.1fr_1fr] items-start">

<div className="rounded-[32px] bg-neutral-950/70 border border-neutral-800 p-8 reveal">
<h3 className="text-xl font-medium mb-1">Web Start</h3>
<p className="text-sm text-neutral-500 mb-6">Ideální pro živnostníky</p>
<div className="mb-6">
<span className="text-4xl font-medium tracking-tight">14 990 Kč</span>
</div>
<a className="block w-full text-center rounded-full bg-neutral-800 hover:bg-neutral-700 py-3 text-sm font-medium mb-6 transition-colors" href="#contact">Poptávka</a>
<ul className="space-y-3 text-sm text-neutral-300">
<li className="flex gap-2"><iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> One-page design</li>
<li className="flex gap-2"><iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> Responzivní zobrazení</li>
<li className="flex gap-2"><iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> Kontaktní formulář</li>
</ul>
</div>

<div className="relative rounded-[32px] bg-gradient-to-b from-brand-900/20 to-black border border-brand-500/50 p-8 shadow-[0_0_50px_rgba(59,130,246,0.15)] reveal delay-100">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Doporučujeme</div>
<h3 className="text-xl font-medium mb-1 text-white">Business Web</h3>
<p className="text-sm text-neutral-400 mb-6">Kompletní firemní prezentace</p>
<div className="mb-6">
<span className="text-4xl font-medium tracking-tight text-white">29 990 Kč</span>
</div>
<a className="block w-full text-center rounded-full bg-brand-600 hover:bg-brand-500 py-3 text-sm font-bold text-white mb-6 transition-colors shadow-lg shadow-brand-900/20" href="#contact">Chci tento web</a>
<ul className="space-y-3 text-sm text-white">
<li className="flex gap-2"><iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Až 5 podstránek</li>
<li className="flex gap-2"><iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Základní SEO optimalizace</li>
<li className="flex gap-2"><iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> CMS pro správu obsahu</li>
</ul>
</div>

<div className="rounded-[32px] bg-neutral-950/70 border border-neutral-800 p-8 reveal delay-200">
<h3 className="text-xl font-medium mb-1">Na míru / E-shop</h3>
<p className="text-sm text-neutral-500 mb-6">Pro náročné projekty</p>
<div className="mb-6">
<span className="text-4xl font-medium tracking-tight">Individuální</span>
</div>
<a className="block w-full text-center rounded-full bg-white text-black hover:bg-neutral-200 py-3 text-sm font-medium mb-6 transition-colors" href="#contact">Konzultace zdarma</a>
<ul className="space-y-3 text-sm text-neutral-300">
<li className="flex gap-2"><iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> E-commerce řešení</li>
<li className="flex gap-2"><iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> Pokročilé integrace</li>
<li className="flex gap-2"><iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> Dlouhodobá správa</li>
</ul>
</div>
</div>
</div>
</section>

<footer className="bg-black border-white/10 border-t pt-20 pb-24" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
<div className="max-w-lg reveal">
<h2 className="text-5xl lg:text-6xl font-serif tracking-tight mb-8">
              Připraveni růst?
            </h2>
<p className="text-lg text-neutral-400 mb-8">
              Dejte nám vědět o svém projektu. Odpovíme do 24 hodin.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-brand-600 text-white h-12 rounded-full px-8 font-bold hover:bg-brand-500 transition-colors shadow-lg shadow-brand-500/20">
                Nezávazná poptávka
              </button>
<button className="border border-white/20 text-white h-12 rounded-full px-8 font-medium hover:bg-white/10 transition-colors">
                info@wobify.cz
              </button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-24 reveal delay-200">
<div>
<h4 className="text-white font-medium mb-4">Kontakt</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li className="text-white">Wobify s.r.o.</li>
<li>Praha / Remote</li>
<li>info@wobify.cz</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Služby</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li>Webdesign</li>
<li>E-shopy</li>
<li>SEO Optimalizace</li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<span className="text-sm text-neutral-500">
              © 2023 Wobify. Všechna práva vyhrazena.
            </span>
</div>
<div className="flex gap-4 text-neutral-500 text-xs">
<a className="hover:text-white" href="#">Ochrana osobních údajů</a>
<a className="hover:text-white" href="#">Obchodní podmínky</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 right-0 bg-neutral-900/90 backdrop-blur-md border-t border-white/10 p-4 z-50 transform translate-y-0 transition-transform duration-300">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
<div className="text-sm text-white font-medium hidden sm:block">
          🚀 Začněte svou digitální transformaci ještě dnes
        </div>
<div className="flex items-center gap-4 w-full sm:w-auto">
<span className="text-xs text-brand-400 animate-pulse hidden sm:inline-block">
            ● Omezená kapacita na Q4
          </span>
<button className="w-full sm:w-auto bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold py-2.5 px-6 rounded-full transition-colors">
            Konzultace zdarma
          </button>
</div>
</div>
</div>


    </>
  );
}
