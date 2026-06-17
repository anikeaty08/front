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



document.addEventListener('DOMContentLoaded', () => {
document.addEventListener('click', e => {
const link = e.target.closest('a');
if (link && link.href && !link.hash && link.target !== '_blank' && link.origin === window.location.origin) {
e.preventDefault();
document.body.classList.add('fade-out');
setTimeout(() => {
window.location = link.href;
}, 1200);
}
});
});



document.addEventListener('DOMContentLoaded', () => {
if (typeof Lenis !== 'undefined') {
const lenis = new Lenis({
duration: 1.5,
easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
smoothWheel: true,
wheelMultiplier: 1.2,
touchMultiplier: 2
});
function raf(time) {
lenis.raf(time);
requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
}
});



document.addEventListener('DOMContentLoaded', () => {
document.body.classList.add('loading');
setTimeout(() => {
document.body.classList.add('loaded');
document.body.classList.remove('loading');
}, 500);
});



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener('DOMContentLoaded', () => {
        const observerOptions = {
          threshold: 0.05,
          rootMargin: "0px 0px -30px 0px"
        };

        let queue = [];
        let timeout;

        const processQueue = () => {
          // Sort queue by vertical position so items higher up appear first
          queue.sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);

          queue.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('reveal-visible');
            }, Math.min(index * 100, 1000)); // Stagger by 100ms, max 1s delay
          });
          queue = [];
        };

        const observer = new IntersectionObserver((entries) => {
          let hasIntersects = false;
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              queue.push(entry.target);
              observer.unobserve(entry.target);
              hasIntersects = true;
            }
          });
          if (hasIntersects) {
            clearTimeout(timeout);
            timeout = setTimeout(processQueue, 30);
          }
        }, observerOptions);

        document.querySelectorAll('section:not(#hero)').forEach(el => {
          el.classList.add('reveal-hidden');
        });

        document.querySelectorAll('.reveal-hidden').forEach(el => {
          observer.observe(el);
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
      

<header className="fixed z-50 tracking-tight w-full border-white/5 border-b top-0" style={{background: 'rgba(0, 0, 0, 0.85)', backdropFilter: 'blur(20px)'}}>
<div className="flex h-16 max-w-[90rem] mx-auto px-6 md:px-12 items-center justify-between">
<div className="flex gap-3 items-center">
<div className="flex bg-white/5 border border-white/10 w-8 h-8 rounded-lg items-center justify-center">
<svg className="w-4 h-5 text-white" data-icon-replaced="true" data-icon-set="solar" data-solar="flame-bold" height="26" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 15c0 4.255-2.618 6.122-4.641 6.751c-.432.134-.715-.369-.457-.74c.88-1.265 1.898-3.195 1.898-5.01c0-1.951-1.644-4.254-2.928-5.675c-.293-.324-.805-.11-.821.328c-.053 1.45-.282 3.388-1.268 4.908a.412.412 0 0 1-.677.036c-.308-.39-.616-.871-.924-1.252c-.166-.204-.466-.207-.657-.026c-.747.707-1.792 1.809-1.792 3.18c0 .93.36 1.905.767 2.69c.224.43-.174.95-.604.724C6.113 19.98 4 18.084 4 15c0-3.146 4.31-7.505 5.956-11.623c.26-.65 1.06-.955 1.617-.531C14.943 5.414 20 10.378 20 15" fill="currentColor"></path>
</svg>
</div>
<span className="text-sm font-medium text-zinc-300 tracking-wide font-montserrat">FLAME PRODUKCJA BEATSHOP</span>
</div>
<nav className="hidden md:flex gap-8 uppercase text-xs font-medium text-zinc-500 tracking-widest">
<a className="nav-link hover:text-white transition-colors font-montserrat" href="#hero">
            Home
          </a>
<a className="nav-link hover:text-white transition-colors text-slate-50 font-montserrat" href="#beatshop">
            Beatshop
          </a>
<a className="nav-link hover:text-white transition-colors font-montserrat" href="#licenses">
            Licencje
          </a>
<a className="nav-link hover:text-white transition-colors font-montserrat" href="#about">
            O mnie
          </a>
<a className="nav-link hover:text-white transition-colors font-montserrat" href="#contact">
            Kontakt
          </a>
</nav>
<a className="hidden md:inline-flex items-center gap-2 hover:bg-orange-500 transition-colors uppercase text-xs text-black font-medium tracking-wider font-montserrat bg-orange-400 rounded-full px-5 py-2" href="#beatshop">
<svg className="lucide lucide-shopping-cart" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
          Kup Beat
        </a>
<button className="md:hidden text-zinc-400 hover:text-white" id="menuBtn">
<svg className="lucide lucide-menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</div>
</header>

<section className="min-h-screen flex flex-col overflow-hidden relative" id="hero">
<div className="flex-grow grid lg:grid-cols-12 gap-8 z-10 w-full max-w-[90rem] mx-auto pt-32 pb-16 px-6 md:px-12 relative items-center">
<div className="lg:col-span-6 flex flex-col z-10 text-left relative">
<div className="inline-flex items-center w-max gap-2 border border-white/10 bg-white/[0.02] backdrop-blur-md rounded-full px-4 py-2 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
</span>
<span className="text-xs text-zinc-400 uppercase tracking-widest font-montserrat">
              Oficjalny Beatshop
            </span>
</div>
<h1 className="text-6xl sm:text-7xl lg:text-8xl leading-[1.1] uppercase font-semibold text-white tracking-tight font-display mb-6">
<span className="text-7xl font-black italic text-zinc-50 scale-100" style={{maskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)'}}>FLAME</span>
<span className="bg-clip-text text-6xl font-black italic text-transparent bg-gradient-to-bl from-white/30 via-white/10 to-white/40">
              Produkcja.
            </span>
</h1>
<p className="leading-relaxed text-base font-normal text-zinc-400 max-w-lg border-l border-white/10 pl-6 mb-10 font-montserrat">
            Nowoczesne brzmienia, potężny bas i bezkompromisowy mix. Wybierz
            spośród setek bitów w katalogu lub zamów pełną produkcję szytą na
            miarę.
          </p>
<div className="flex flex-col sm:flex-row gap-4 items-start">
<a className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-colors font-montserrat" href="#beatshop">
              Eksploruj Katalog
            </a>
<a className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider hover:bg-white/5 transition-colors font-montserrat" href="#contact">
              Współpraca
            </a>
</div>
</div>
<div className="lg:col-span-6 relative flex items-center justify-center mt-16 lg:mt-0">
<div className="w-full max-w-lg aspect-square rounded-3xl border border-white/10 bg-white/[0.01] backdrop-blur-3xl p-6 relative overflow-hidden group shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-50"></div>
<div className="h-full w-full border border-white/5 rounded-2xl flex flex-col justify-between p-8 relative z-10 bg-black/40 backdrop-blur-md">
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
<svg className="text-zinc-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18V5l12-2v13"></path>
<circle cx="6" cy="18" r="3"></circle>
<circle cx="18" cy="16" r="3"></circle>
</svg>
</div>
<span className="text-xs font-montserrat font-medium text-zinc-500 uppercase tracking-widest border border-white/10 px-3 py-1.5 rounded-full bg-white/5">
                  Odtwarzacz
                </span>
</div>
<div className="space-y-5">
<div className="h-2 w-1/3 bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-white/40 rounded-full"></div>
</div>
<div className="h-2 w-1/2 bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-1/3 bg-white/30 rounded-full"></div>
</div>
<div className="flex items-end gap-2 h-20 mt-8 opacity-60">
<div className="w-2.5 bg-white/80 rounded-t-sm h-[30%] animate-[b1_1s_ease-in-out_infinite]"></div>
<div className="w-2.5 bg-white/80 rounded-t-sm h-[70%] animate-[b2_1.2s_ease-in-out_infinite]"></div>
<div className="w-2.5 bg-white/80 rounded-t-sm h-[40%] animate-[b3_0.9s_ease-in-out_infinite]"></div>
<div className="w-2.5 bg-white/80 rounded-t-sm h-[90%] animate-[b4_1.1s_ease-in-out_infinite]"></div>
<div className="w-2.5 bg-white/80 rounded-t-sm h-[50%] animate-[b5_1.3s_ease-in-out_infinite]"></div>
<div className="w-2.5 bg-white/80 rounded-t-sm h-[80%] animate-[b6_1s_ease-in-out_infinite]"></div>
<div className="w-2.5 bg-white/80 rounded-t-sm h-[60%] animate-[b7_1.4s_ease-in-out_infinite]"></div>
<div className="w-2.5 bg-white/80 rounded-t-sm h-[40%] animate-[b1_1.1s_ease-in-out_infinite]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</section>

<section className="reveal-hidden bg-black pt-24 pb-24 relative" id="top-singles">
<div className="md:px-12 max-w-[90rem] mr-auto ml-auto pr-6 pl-6 scale-100">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div className="">
<h2 className="text-4xl md:text-5xl font-semibold text-white font-display uppercase tracking-tight mb-4">
              Top 3 Bestsellery
            </h2>
<p className="text-zinc-400 text-base font-montserrat max-w-md">
              Najczęściej wybierane produkcje w tym miesiącu. Sprawdź, co
              aktualnie dominuje w podziemiu.
            </p>
</div>
<a className="text-xs font-montserrat uppercase tracking-widest text-zinc-400 hover:text-white transition-colors border-b border-white/10 hover:border-white pb-1 mt-6 md:mt-0" href="#beatshop">
            Zobacz wszystkie
          </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group border border-white/5 bg-white/[0.01] backdrop-blur-sm rounded-2xl p-8 hover:border-white/20 transition-all duration-500 flex flex-col">
<div className="w-full aspect-[4/3] bg-white/[0.02] rounded-xl mb-8 relative overflow-hidden flex items-center justify-center border border-white/5 group-hover:bg-white/[0.04] transition-colors">
<svg className="text-zinc-600 group-hover:text-white transition-colors duration-500 group-hover:scale-110" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20"></path>
<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
</div>
<div className="flex justify-between items-start mb-3">
<h3 className="text-xl font-medium text-white font-montserrat tracking-tight">
                Midnight Flow
              </h3>
<span className="text-xs font-medium bg-white/5 border border-white/10 text-zinc-400 px-3 py-1 rounded-full">
                140 BPM
              </span>
</div>
<p className="text-sm text-zinc-500 font-montserrat mb-8">
              Dark Trap / Drill
            </p>
<button className="mt-auto w-full py-3.5 rounded-xl border border-white/10 bg-white/5 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors">
              Odtwórz
            </button>
</div>
<div className="group hover:border-white/20 transition-all duration-500 flex flex-col border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8 backdrop-blur-sm">
<div className="w-full aspect-[4/3] bg-white/[0.02] rounded-xl mb-8 relative overflow-hidden flex items-center justify-center border border-white/5 group-hover:bg-white/[0.04] transition-colors">
<svg className="text-zinc-600 group-hover:text-white transition-colors duration-500 group-hover:scale-110" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20"></path>
<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
</div>
<div className="flex justify-between items-start mb-3">
<h3 className="text-xl font-medium text-white font-montserrat tracking-tight">
                Velocity
              </h3>
<span className="text-xs font-medium bg-white/5 border border-white/10 text-zinc-400 px-3 py-1 rounded-full">
                155 BPM
              </span>
</div>
<p className="text-sm text-zinc-500 font-montserrat mb-8">
              Travis Scott Type
            </p>
<button className="mt-auto w-full py-3.5 rounded-xl border border-white/10 bg-white/5 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors">
              Odtwórz
            </button>
</div>
<div className="group hover:border-white/20 transition-all duration-500 flex flex-col border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8 backdrop-blur-sm">
<div className="w-full aspect-[4/3] bg-white/[0.02] rounded-xl mb-8 relative overflow-hidden flex items-center justify-center border border-white/5 group-hover:bg-white/[0.04] transition-colors">
<svg className="text-zinc-600 group-hover:text-white transition-colors duration-500 group-hover:scale-110" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20"></path>
<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
</div>
<div className="flex justify-between items-start mb-3">
<h3 className="text-xl font-medium text-white font-montserrat tracking-tight">
                Mirage
              </h3>
<span className="text-xs font-medium bg-white/5 border border-white/10 text-zinc-400 px-3 py-1 rounded-full">
                138 BPM
              </span>
</div>
<p className="text-sm text-zinc-500 font-montserrat mb-8">
              Melodic Trap
            </p>
<button className="mt-auto w-full py-3.5 rounded-xl border border-white/10 bg-white/5 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors">
              Odtwórz
            </button>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</section>

<section className="scroll-mt-16 reveal-hidden reveal-visible pt-24 pb-16 relative bg-black" id="beatshop">
<div className="z-10 max-w-[90rem] mx-auto relative px-6 md:px-12">
<div className="p-6 md:p-10 border border-white/5 rounded-3xl relative bg-white/[0.01] backdrop-blur-md shadow-2xl overflow-visible">

<div className="flex flex-col xl:flex-row xl:items-end gap-6 z-20 mb-10 relative justify-between">
<div className="">
<div className="flex items-center gap-3 mb-2">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight font-display">
                  BEAT STORE
                </h2>
</div>
<p className="text-xs text-zinc-500 font-montserrat uppercase tracking-widest">
                Wszystkie prawa zastrzeżone.
              </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">

<div className="flex p-1 bg-white/5 border border-white/10 rounded-xl shadow-inner gap-1">
<button className="px-4 py-2 rounded-lg text-xs font-medium transition-all text-zinc-400 hover:text-white flex items-center gap-2 font-geist bg-transparent border border-transparent" id="tab-ne" onclick="document.getElementById('list-ne').classList.remove('hidden'); document.getElementById('list-ex').classList.add('hidden'); this.className='px-4 py-2 rounded-lg text-xs font-medium transition-all text-white flex items-center gap-2 font-geist bg-white/10 shadow-sm border border-white/5'; document.getElementById('tab-ex').className='px-4 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 font-geist bg-transparent border border-transparent text-zinc-400 hover:text-orange-400 hover:bg-orange-500/10 hover:border-orange-500/30';">
<svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
</svg>
                  Non-Exclusive
                </button>
<button className="px-4 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 font-geist bg-orange-500/10 border border-orange-500/20 text-orange-400 shadow-sm" id="tab-ex" onclick="document.getElementById('list-ex').classList.remove('hidden'); document.getElementById('list-ne').classList.add('hidden'); this.className='px-4 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 font-geist bg-orange-500/10 border border-orange-500/20 text-orange-400 shadow-sm'; document.getElementById('tab-ne').className='px-4 py-2 rounded-lg text-xs font-medium transition-all text-zinc-400 hover:text-white flex items-center gap-2 font-geist bg-transparent border border-transparent';">
<svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path>
</svg>
                  Exclusive
                </button>
</div>

<div className="relative">
<svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
<input className="bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all w-full sm:w-56 font-geist" placeholder="Szukaj..." type="text"/>
</div>
</div>
</div>

<div className="overflow-hidden bg-black/50 backdrop-blur-lg border border-white/5 rounded-2xl relative z-10">

<div className="flex gap-4 text-xs uppercase font-medium text-zinc-500 tracking-widest font-geist border-white/5 border-b p-4 items-center bg-white/[0.02]">
<div className="w-8 text-center flex-shrink-0">#</div>
<div className="w-10 text-center flex-shrink-0">Play</div>
<div className="w-56 flex-shrink-0">Tytuł</div>
<div className="flex-1 hidden lg:block text-center opacity-0">
                Waveform
              </div>
<div className="w-40 hidden md:block">Gatunek</div>
<div className="w-20 hidden sm:block text-center">BPM</div>
<div className="w-16 hidden sm:block text-center">Key</div>
<div className="w-[240px] text-right flex-shrink-0">Licencja</div>
</div>

<div className="flex flex-col hidden" id="list-ne">
<div className="flex items-center gap-2 px-5 py-3 border-b border-purple-500/10 bg-purple-500/5 font-geist">
<svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 16v-4"></path>
<path d="M12 8h.01"></path>
</svg>
<span className="text-purple-300 text-xs font-medium">
                  Playlista z bitami na niewyłączność. Bity te są w ciągłej
                  sprzedaży.
                </span>
</div>

<div className="flex items-center gap-4 px-4 py-3 border-b border-white/5 hover:bg-white/[0.03] transition-colors duration-200 group cursor-pointer font-geist">
<div className="w-8 text-center flex-shrink-0 text-xs text-zinc-600 font-medium group-hover:text-purple-400 transition-colors">
                  01
                </div>
<div className="w-10 flex justify-center items-center relative flex-shrink-0">
<button className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all relative group/btn">
<svg className="w-3.5 h-3.5 ml-[2px] relative z-10 transition-transform group-hover/btn:scale-110" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="6 3 20 12 6 21 6 3"></polygon>
</svg>
</button>
</div>
<div className="w-56 flex-shrink-0 flex items-center gap-3">
<div className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors flex items-center gap-2">
                    Nightfall
                    <svg className="w-3.5 h-3.5 text-purple-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
</svg>
</div>
</div>
<div className="flex-1 hidden lg:flex items-end justify-between h-8 text-purple-500 opacity-20 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden px-4 w-full">
<div className="waveform-bar h-[40%]"></div>
<div className="waveform-bar h-[80%]"></div>
<div className="waveform-bar h-[50%]"></div>
<div className="waveform-bar h-[100%]"></div>
<div className="waveform-bar h-[60%]"></div>
<div className="waveform-bar h-[30%]"></div>
<div className="waveform-bar h-[70%]"></div>
<div className="waveform-bar h-[90%]"></div>
<div className="waveform-bar h-[40%]"></div>
<div className="waveform-bar h-[80%]"></div>
<div className="waveform-bar h-[50%]"></div>
<div className="waveform-bar h-[100%]"></div>
<div className="waveform-bar h-[60%]"></div>
<div className="waveform-bar h-[30%]"></div>
<div className="waveform-bar h-[70%]"></div>
<div className="waveform-bar h-[90%]"></div>
<div className="waveform-bar h-[40%]"></div>
<div className="waveform-bar h-[80%]"></div>
<div className="waveform-bar h-[50%]"></div>
<div className="waveform-bar h-[100%]"></div>
</div>
<div className="w-40 hidden md:block text-xs text-zinc-500">
                  Dark Trap / Drill
                </div>
<div className="w-20 hidden sm:block text-xs text-zinc-500 text-center">
                  140
                </div>
<div className="w-16 hidden sm:block text-xs text-zinc-500 text-center">
                  Cm
                </div>
<div className="w-[240px] flex justify-end gap-2 flex-shrink-0 text-xs font-medium">
<button className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:text-white text-zinc-300 transition-colors flex items-center gap-2">
                    WAV
                    <span className="text-zinc-500 font-normal">150 zł</span>
</button>
<button className="px-4 py-2 rounded-lg border border-purple-500/20 bg-purple-500/10 hover:bg-purple-500 hover:text-white text-purple-300 transition-colors flex items-center gap-2">
                    WAV+
                    <span className="opacity-70 font-normal text-purple-300 group-hover:text-white">
                      270 zł
                    </span>
</button>
</div>
</div>
</div>

<div className="flex flex-col" id="list-ex">
<div className="flex items-center gap-2 px-5 py-3 border-b border-orange-500/10 bg-orange-500/5 font-geist">
<svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path>
</svg>
<span className="text-orange-300 text-xs font-medium">
                  Pełne prawa własności — 1 of 1. Bit znika ze sklepu po
                  zakupie.
                </span>
</div>

<div className="flex items-center gap-4 px-4 py-3 border-b border-white/5 hover:bg-white/[0.03] transition-colors duration-200 group cursor-pointer font-geist">
<div className="w-8 text-center flex-shrink-0 text-xs text-zinc-600 font-medium group-hover:text-orange-400 transition-colors">
                  01
                </div>
<div className="w-10 flex justify-center items-center relative flex-shrink-0">
<button className="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 flex items-center justify-center hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all relative group/btn">
<svg className="w-3.5 h-3.5 ml-[2px] relative z-10 transition-transform group-hover/btn:scale-110" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon className="" points="6 3 20 12 6 21 6 3"></polygon>
</svg>
</button>
</div>
<div className="w-56 flex-shrink-0 flex items-center gap-3">
<div className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors flex items-center gap-2">
                    Golden Era
                    <svg className="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path>
</svg>
</div>
</div>
<div className="flex-1 hidden lg:flex items-end justify-between h-8 text-orange-500 opacity-20 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden px-4 w-full">
<div className="waveform-bar h-[40%]"></div>
<div className="waveform-bar h-[80%]"></div>
<div className="waveform-bar h-[50%]"></div>
<div className="waveform-bar h-[100%]"></div>
<div className="waveform-bar h-[60%]"></div>
<div className="waveform-bar h-[30%]"></div>
<div className="waveform-bar h-[70%]"></div>
<div className="waveform-bar h-[40%]"></div>
<div className="waveform-bar h-[80%]"></div>
<div className="waveform-bar h-[50%]"></div>
<div className="waveform-bar h-[100%]"></div>
<div className="waveform-bar h-[60%]"></div>
<div className="waveform-bar h-[30%]"></div>
<div className="waveform-bar h-[70%]"></div>
<div className="waveform-bar h-[90%]"></div>
<div className="waveform-bar h-[40%]"></div>
<div className="waveform-bar h-[80%]"></div>
<div className="waveform-bar h-[50%]"></div>
<div className="waveform-bar h-[100%]"></div>
</div>
<div className="w-40 hidden md:block text-xs text-orange-500/60">
                  Exclusive Only
                </div>
<div className="w-20 hidden sm:block text-xs text-zinc-500 text-center">
                  144
                </div>
<div className="w-16 hidden sm:block text-xs text-zinc-500 text-center">
                  Am
                </div>
<div className="w-[240px] flex justify-end gap-2 flex-shrink-0 text-xs">
<button className="px-4 py-2 rounded-lg border border-orange-500/30 bg-orange-500/10 hover:bg-orange-500 hover:text-black text-orange-400 font-medium transition-colors flex items-center gap-2">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="21" r="1"></circle>
<circle cx="19" cy="21" r="1"></circle>
<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
</svg>
                    Kup Wyłączność
                  </button>
</div>
</div>
</div>
</div>
</div>
<style className="">
          #tab-ne.lic-tab-active { background: rgba(168,85,247,0.1) !important; color: #c084fc !important; border: 1px solid rgba(168,85,247,0.3) !important; }
          #tab-ex.lic-tab-active { background: rgba(249,115,22,0.1) !important; color: #fb923c !important; border: 1px solid rgba(249,115,22,0.3) !important; }
          .lic-tab-idle { background: transparent !important; color: #71717a !important; border: 1px solid transparent !important; }
          .lic-tab-idle:hover { color: #fff !important; background: rgba(255,255,255,0.05) !important; }

          @keyframes wave-pulse {
              0%, 100% { transform: scaleY(0.2); }
              50% { transform: scaleY(1); }
          }

          .waveform-bar {
              width: 3px;
              background-color: currentColor;
              border-radius: 99px;
              transform-origin: bottom;
              will-change: transform;
          }
        </style>
</div>
<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</section>

<section className="reveal-hidden reveal-visible bg-black pt-24 pb-24 relative" id="licenses">
<div className="z-10 md:px-12 max-w-[90rem] mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col text-left mt-10 mb-16 max-w-2xl">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight font-display py-4">
            Wybierz swoją licencję
          </h2>
<p className="text-base text-zinc-400 font-montserrat">
            Trzy proste opcje, idealnie dopasowane do skali i potrzeb Twojego
            projektu. Niezależnie od tego, czy to Twój pierwszy singiel, czy
            duży komercyjny hit.
          </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-white/10 border-white/10 border rounded-3xl scale-100">

<div className="lg:p-12 flex flex-col hover:bg-white/[0.02] transition-colors group pt-10 pr-10 pb-10 pl-10 relative scale-90">
<div className="mb-8">
<span className="text-xs text-zinc-500 uppercase tracking-widest font-montserrat font-medium">
                Basic
              </span>
<div className="text-4xl font-semibold text-white mt-4 tracking-tight">150 PLN</div>
</div>
<p className="text-zinc-400 text-sm leading-relaxed mb-10 font-montserrat min-h-[60px]">
              Idealna na start. Wysokiej jakości plik audio do pierwszych publikacji.
            </p>
<ul className="space-y-5 mb-12 flex-grow">
<li className="flex items-center gap-4 text-sm text-zinc-300 font-montserrat">
<svg className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M5 12l5 5L20 7"></path></svg>
                Wysoka jakość MP3
              </li>
<li className="flex items-center gap-4 text-sm text-zinc-300 font-montserrat">
<svg className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M5 12l5 5L20 7"></path></svg>
                Do 100 000 streamów
              </li>
<li className="flex items-center gap-4 text-sm text-zinc-300 font-montserrat">
<svg className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M5 12l5 5L20 7"></path></svg>
                1 Teledysk komercyjny
              </li>
</ul>
<button className="w-full py-4 rounded-xl border border-white/10 bg-transparent text-white text-xs font-semibold uppercase tracking-wider group-hover:bg-white/5 transition-colors font-montserrat">
              Wybierz Basic
            </button>
</div>

<div className="lg:p-12 flex flex-col hover:bg-white/[0.02] transition-colors group pt-10 pr-10 pb-10 pl-10 relative scale-90">
<div className="mb-8">
<span className="text-xs text-zinc-400 uppercase tracking-widest font-montserrat font-medium">
                Premium (Trackout)
              </span>
<div className="text-4xl font-semibold text-white mt-4 tracking-tight">270 PLN</div>
</div>
<p className="text-zinc-400 text-sm leading-relaxed mb-10 font-montserrat min-h-[60px]">
              Pełna kontrola nad mixem. Brak limitów na platformach i najwyższa jakość dźwięku.
            </p>
<ul className="space-y-5 mb-12 flex-grow">
<li className="flex items-center gap-4 text-sm text-white font-montserrat font-medium">
<svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M5 12l5 5L20 7"></path></svg>
                WAV + MP3 + Trackout (Stems)
              </li>
<li className="flex items-center gap-4 text-sm text-white font-montserrat font-medium">
<svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M5 12l5 5L20 7"></path></svg>
                Nielimitowane streamy
              </li>
<li className="flex items-center gap-4 text-sm text-white font-montserrat font-medium">
<svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M5 12l5 5L20 7"></path></svg>
                Nielimitowane teledyski
              </li>
</ul>
<button className="w-full py-4 rounded-xl bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-colors font-montserrat">
              Wybierz Premium
            </button>
</div>

<div className="lg:p-12 flex flex-col hover:bg-orange-950/20 transition-colors group overflow-hidden bg-orange-950/10 pt-10 pr-10 pb-10 pl-10 relative scale-90 space-x-0">

<div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-orange-600/0 via-orange-500 to-orange-600/0 opacity-50"></div>

<div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none"></div>
<div className="mb-8 relative z-10">
<svg className="text-orange-500 mb-4" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.518l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
<span className="text-xs text-orange-500 uppercase tracking-widest font-montserrat font-medium">
                Exclusive
              </span>
<div className="text-4xl font-semibold text-white mt-4 tracking-tight">Oferta</div>
</div>
<p className="text-zinc-400 text-sm leading-relaxed mb-10 font-montserrat min-h-[60px] relative z-10">
              Pełne prawa majątkowe i wolność artystyczna. Bit natychmiast znika ze sklepu.
            </p>
<ul className="space-y-5 mb-12 flex-grow relative z-10">
<li className="flex items-center gap-4 text-sm text-zinc-200 font-montserrat">
<svg className="w-5 h-5 text-orange-500/70" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M5 12l5 5L20 7"></path></svg>
                Pełne prawa majątkowe
              </li>
<li className="flex items-center gap-4 text-sm text-zinc-200 font-montserrat">
<svg className="w-5 h-5 text-orange-500/70" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M5 12l5 5L20 7"></path></svg>
                Bit usunięty ze sklepu (1 of 1)
              </li>
<li className="flex items-center gap-4 text-sm text-zinc-200 font-montserrat">
<svg className="w-5 h-5 text-orange-500/70" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M5 12l5 5L20 7"></path></svg>
                Umowa prawna w PDF
              </li>
</ul>
<button className="w-full py-4 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider hover:bg-orange-500 hover:text-black transition-colors font-montserrat relative z-10">
              Napisz do mnie
            </button>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</section><section className="reveal reveal-hidden border-neutral-900 border-t pt-24 pb-24" id="services">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl text-white tracking-normal font-futuristic text-center mb-12">
      USŁUGI MIX &amp; MASTERING
    </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="sharp hover:border-orange-500/50 transition-colors overflow-hidden group border-neutral-800 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-orange-500/10 transition-colors">
</div>
<iconify-icon className="text-4xl text-orange-500 mb-6" icon="solar:tuning-square-2-linear"></iconify-icon>
<h3 className="font-futuristic text-xl text-white tracking-tight mb-4">
          MIX WOKALI + BEAT (WAV/MP3)
        </h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed">
          Złożenie Twoich wokali z gotowym bitem w jednym pliku. Wyrównanie,
          korekcja barwy, kompresja, efekty przestrzenne (reverb/delay) oraz
          finalny mastering utworu, aby brzmiał głośno i czysto na
          platformach streamingowych.
        </p>
<button className="text-xs text-white uppercase tracking-widest border-b border-white pb-1 hover:text-orange-500 hover:border-orange-500 transition-colors inline-flex items-center gap-2">
              Sprawdź Cennik
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="sharp hover:border-orange-500/50 transition-colors overflow-hidden group border-neutral-800 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-orange-500/10 transition-colors">
</div>
<iconify-icon className="text-4xl text-orange-500 mb-6" icon="solar:soundwave-linear"></iconify-icon>
<h3 className="font-futuristic text-xl text-white tracking-tight mb-4">
          PEŁNY MIX ŚLADÓW (STEMS)
        </h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed">
          Zaawansowany mix i master, gdzie bit oraz wokale dostarczone są w
          osobnych śladach. Pełna kontrola nad każdym elementem utworu.
          Chirurgiczne cięcia częstotliwości, kreowanie głębi i maksymalne
          uderzenie finalnego miksu.
        </p>
<button className="text-xs text-white uppercase tracking-widest border-b border-white pb-1 hover:text-orange-500 hover:border-orange-500 transition-colors inline-flex items-center gap-2">
              Sprawdź Cennik
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>


<div className="w-full border-t border-b border-white/10 bg-black overflow-hidden relative font-geist flex items-center h-12">
<div className="absolute w-full flex whitespace-nowrap animate-[ticker_30s_linear_infinite] gap-16 text-xs text-zinc-500 uppercase tracking-widest font-medium">
<span>Modules</span><span>Energy</span><span>Vertex</span><span>Pulse</span><span>Global</span><span>Layers</span><span>Command</span>
<span>Modules</span><span>Energy</span><span className="">Vertex</span><span>Pulse</span><span className="">Global</span><span>Layers</span><span>Command</span>
<span className="">Modules</span><span>Energy</span><span>Vertex</span><span>Pulse</span><span className="">Global</span><span>Layers</span><span>Command</span>
</div>
<div className="absolute right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
<div className="absolute left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
</div>
<style>@keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }</style>

<section className="w-full bg-black relative border-b border-white/10 font-geist reveal-hidden" id="about">
<div className="w-full grid grid-cols-1 lg:grid-cols-[300px_1fr] xl:grid-cols-[400px_1fr]">

<div className="lg:border-b-0 lg:border-r lg:p-12 flex flex-col border-white/10 border-b pt-8 pr-8 pb-8 pl-8 relative">
<div className="text-xs text-zinc-600 tracking-widest uppercase mb-4 flex items-center gap-2 font-medium">
<span className="text-zinc-500">///</span> About
          </div>
<h2 className="md:text-2xl text-xl font-medium text-white tracking-tight">Kim jest Flame ?</h2>

<div className="hidden lg:block absolute -top-1.5 -right-1.5 text-zinc-600/50 text-xs leading-none select-none font-light z-20">+</div>
<div className="hidden lg:block absolute -bottom-1.5 -right-1.5 text-zinc-600/50 text-xs leading-none select-none font-light z-20">+</div>
</div>

<div className="flex flex-col">

<div className="lg:p-16 flex flex-col xl:flex-row gap-12 xl:items-end border-white/10 border-b pt-8 pr-8 pb-8 pl-8 relative gap-x-12 gap-y-12 items-start justify-between">
<div className="max-w-4xl">
<h3 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tighter leading-tight mb-8">
                Flame Studio to agencja projektowania dźwięku skupiona na pomaganiu artystom w wyraźnej komunikacji.
              </h3>
<p className="text-zinc-400 text-base leading-relaxed max-w-2xl font-normal">
                Wierzymy, że świetny bit to nie tylko to, jak coś brzmi — to jak działa, jak się go czuje i jak skutecznie rozwiązuje wizję muzyczną.
              </p>
</div>
<a className="flex-shrink-0 border border-white/10 bg-[#0a0a0a] hover:bg-white/5 text-zinc-300 text-xs font-medium uppercase tracking-widest px-6 py-4 rounded-md transition-all relative group overflow-hidden" href="#contact">
<span className="relative z-10">O Nas</span>
<div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
</a>

<div className="hidden xl:block absolute -bottom-1.5 right-1/3 text-zinc-600/50 text-xs leading-none select-none font-light z-20">+</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 h-full">
<div className="border-b md:border-b-0 md:border-r border-white/10 p-8 lg:p-16 relative flex flex-col justify-center min-h-[300px]">
<div className="text-6xl lg:text-7xl xl:text-8xl font-medium text-white tracking-tighter mb-2 leading-none">500+</div>
</div>
<div className="border-b xl:border-b-0 xl:border-r border-white/10 p-8 lg:p-16 relative flex flex-col justify-center min-h-[300px]">
<div className="text-6xl lg:text-7xl xl:text-8xl font-medium text-white tracking-tighter mb-2 leading-none">12+</div>

<div className="hidden xl:block absolute -top-1.5 -right-1.5 text-zinc-600/50 text-xs leading-none select-none font-light z-20">+</div>
</div>
<div className="relative bg-[#050505] min-h-[300px] overflow-hidden group border-white/10 border-t md:border-t-0 col-span-1 md:col-span-2 xl:col-span-1 flex items-end justify-end p-4">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-800/10 to-transparent z-0"></div>

<div className="absolute right-0 bottom-0 w-full h-full translate-x-10 translate-y-10 opacity-50 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none">
<div className="absolute bottom-10 right-10 w-48 h-32 bg-zinc-900 rounded-xl border border-white/5 transform -rotate-12 shadow-2xl flex flex-col overflow-hidden">
<div className="w-full h-6 border-b border-white/5 flex items-center px-3 gap-1.5 bg-white/[0.02]">
<div className="w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
<div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50"></div>
<div className="w-1.5 h-1.5 rounded-full bg-green-500/50"></div>
</div>
<div className="p-4 flex-1 flex flex-col gap-2 relative">
<div className="w-3/4 h-1.5 bg-white/10 rounded-full"></div>
<div className="w-1/2 h-1.5 bg-white/10 rounded-full"></div>

<div className="absolute bottom-0 left-4 right-4 h-12 flex items-end justify-between gap-1 opacity-60">
<div className="w-full bg-orange-500/40 rounded-t-sm" style={{height: '40%'}}></div>
<div className="w-full bg-orange-500/60 rounded-t-sm" style={{height: '70%'}}></div>
<div className="w-full bg-orange-500/50 rounded-t-sm" style={{height: '50%'}}></div>
<div className="w-full bg-orange-500/80 rounded-t-sm" style={{height: '90%'}}></div>
<div className="w-full bg-orange-500/30 rounded-t-sm" style={{height: '30%'}}></div>
</div>
</div>
</div>
</div>
<div className="relative z-10 border border-white/10 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-md text-xs font-medium text-zinc-300 flex items-center gap-2">
<svg className="text-white" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z"></path></svg> Made in Flame
               </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-black overflow-hidden reveal-hidden" id="youtube">
<div className="max-w-[90rem] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
<h2 className="text-4xl md:text-6xl font-semibold text-white font-display uppercase tracking-tight mb-6 relative z-10">
          Sprawdź mój kanał
        </h2>
<p className="text-zinc-400 text-base font-montserrat max-w-2xl mx-auto mb-16 relative z-10">
          Subskrybuj kanał YouTube, aby być na bieżąco z nowymi produkcjami.
          Nowe bity wlatują w każdym tygodniu. Zobacz proces i posłuchaj nowości.
        </p>

<div className="w-full max-w-5xl aspect-video md:aspect-[21/9] border border-white/10 bg-zinc-950 rounded-[2rem] relative flex items-center justify-center group cursor-pointer overflow-hidden shadow-2xl">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/40 via-black to-black opacity-60 transition-transform duration-700 group-hover:scale-105"></div>

<div className="relative z-20 w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500 group-hover:bg-white/20">
<svg className="ml-2" fill="currentColor" height="32" stroke="none" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
<div className="absolute bottom-6 left-8 z-20 text-left hidden md:block">
<div className="text-white text-lg font-medium font-montserrat tracking-tight mb-1">Ostatnia Produkcja</div>
<div className="text-zinc-400 text-sm font-montserrat">Flame - Dark Drill Type Beat "Shadows"</div>
</div>
</div>
<button className="mt-16 px-10 py-4 rounded-full border border-white/10 bg-white/[0.02] text-white text-xs font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors inline-block font-montserrat relative z-10">
          Przejdź na YouTube
        </button>
</div>
<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</section>

<footer className="bg-black pt-24 pb-10" id="contact">
<div className="max-w-[90rem] mx-auto px-6 md:px-12">
<div className="grid md:grid-cols-2 gap-16 mb-20">
<div>
<h2 className="text-4xl font-semibold text-white font-display uppercase tracking-tight mb-6">
          Kontakt
        </h2>
<p className="text-zinc-400 text-base font-montserrat mb-10 max-w-sm">
          Masz pytania dotyczące licencji, mix/masteringu, czy chcesz
          zamówić custom beat? Napisz do mnie.
        </p>
<div className="space-y-6">
<a className="flex items-center gap-4 text-base text-zinc-300 hover:text-white transition-colors font-montserrat" href="mailto:kontakt@flameprodukcja.pl">
<div className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
</div>
            kontakt@flameprodukcja.pl
          </a>
<a className="flex items-center gap-4 text-base text-zinc-300 hover:text-white transition-colors font-montserrat" href="#">
<div className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</div>
            @flame.produkcja
          </a>
</div>
</div>
<div>
<form className="flex flex-col gap-4">
<div className="grid grid-cols-2 gap-4">
<input className="bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors font-montserrat" placeholder="Imię / Ksywa" type="text"/>
<input className="bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors font-montserrat" placeholder="E-mail" type="email"/>
</div>
<textarea className="bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors font-montserrat resize-none" placeholder="Twoja wiadomość..." rows="5"></textarea>
<button className="w-full py-4 rounded-xl bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-colors font-montserrat mt-2" type="submit">
                Wyślij wiadomość
              </button>
</form>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-sm text-zinc-600 font-montserrat">
        © 2024 Flame Produkcja. Wszelkie prawa zastrzeżone.
      </div>
<div className="flex gap-8">
<a className="text-sm text-zinc-600 hover:text-zinc-300 transition-colors font-montserrat" href="#">
          Regulamin
        </a>
<a className="text-sm text-zinc-600 hover:text-zinc-300 transition-colors font-montserrat" href="#">
          Polityka Prywatności
        </a>
</div>
</div>
</div>
</footer>
<style>
      .reveal-hidden {
        opacity: 0;
        transform: translateY(40px);
        transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        will-change: opacity, transform;
      }
      .reveal-visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
      /* Lenis recommended styles */
      html.lenis, html.lenis body {
        height: auto;
      }
      .lenis.lenis-smooth {
        scroll-behavior: auto !important;
      }
      .lenis.lenis-smooth [data-lenis-prevent] {
        overscroll-behavior: contain;
      }
      .lenis.lenis-stopped {
        overflow: hidden;
      }
      .lenis.lenis-smooth iframe {
        pointer-events: none;
      }
    </style>


    </>
  );
}
