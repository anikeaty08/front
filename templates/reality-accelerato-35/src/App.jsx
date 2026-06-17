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



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


      // Initialize Lucide Icons
      lucide.createIcons();

      document.addEventListener('DOMContentLoaded', () => {
          // 1. Scroll Reveal Animation with Staggering
          const observerOptions = {
              root: null,
              rootMargin: '100px 0px 100px 0px',
              threshold: 0.05
          };

          let delay = 0;
          let resetTimer;

          const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      setTimeout(() => {
                          entry.target.classList.add('is-visible');
                      }, delay);
                      delay += 40;

                      clearTimeout(resetTimer);
                      resetTimer = setTimeout(() => { delay = 0; }, 100);

                      observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          document.querySelectorAll('.reveal-item').forEach(item => {
              observer.observe(item);
          });

          // 2. Header Scroll Morph
          const header = document.getElementById('main-header');
          window.addEventListener('scroll', () => {
              if (window.scrollY > 50) {
                  header.classList.remove('py-8', 'bg-transparent');
                  header.classList.add('py-4', 'bg-[#091221]/80', 'backdrop-blur-xl', 'border-b', 'border-[#C5A059]/20');
              } else {
                  header.classList.add('py-8', 'bg-transparent');
                  header.classList.remove('py-4', 'bg-[#091221]/80', 'backdrop-blur-xl', 'border-b', 'border-[#C5A059]/20');
              }
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
      
<header className="fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out hidden lg:block" id="main-header">
<div className="flex md:px-8 h-full max-w-[1400px] z-10 mr-auto ml-auto pr-6 pl-6 relative items-center justify-between">
<div className="flex-1 flex justify-start">
<nav className="hidden lg:flex items-center gap-10">
<a className="nav-link text-sm font-light text-neutral-300 tracking-wide" href="#shift">
              Der Shift
            </a>
<a className="nav-link text-sm font-light text-neutral-300 tracking-wide" href="#methodik">
              Methodik
            </a>
<a className="nav-link text-sm font-light text-neutral-300 tracking-wide" href="#ueber-mich">
              Über Mich
            </a>
<a className="nav-link text-sm font-light text-neutral-300 tracking-wide" href="#resultate">
              Resultate
            </a>
</nav>
</div>
<a className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center shrink-0 z-10 group" href="/">
<img alt="Logo" className="transition-transform duration-500 group-hover:scale-105 w-auto h-16 object-contain cursor-pointer" onclick="window.location.href='/start'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/102bab99-dda3-48c5-b550-a8095ee4b515_320w.png"/>
</a>
<div className="flex-1 flex shrink-0 relative items-center justify-end">
<a className="hidden md:inline-flex items-center justify-center uppercase hover:-translate-y-1 transition-all duration-300 text-xs font-normal text-slate-300 tracking-widest bg-white/5 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 hover:bg-white/10" href="https:///realityaccelerator.app">
            Login
          </a>
</div>
</div>
</header>
<div className="aura-background-component top-0 w-full -z-10 absolute h-screen saturate-200 brightness-50 hue-rotate-15 opacity-40" data-alpha-mask="0" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 0%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 0%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="UtvhDctN8AjL6tvf1yKd"></div>

</div>
</div>
<div className="noise-bg"></div>
<div className="fixed z-0 pointer-events-none overflow-hidden flex top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="absolute top-[-10%] left-[-10%] w-[60vw] aspect-square bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#14284b]/30 via-[#0d1a30]/10 to-transparent rounded-full blur-3xl" style={{animation: 'pulse-glow 8s infinite alternate'}}></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[70vw] aspect-square bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#14284b]/20 via-[#091221] to-transparent rounded-full blur-3xl" style={{animation: 'float-slow 12s ease-in-out infinite'}}></div>
</div>
<main className="flex-grow flex flex-col overflow-hidden mask-edges md:pt-0 w-full z-10 pt-15 pb-32 relative items-center">

<section className="flex flex-col md:mt-44 text-center w-full max-w-7xl mt-11 mr-auto mb-32 ml-auto pr-6 pl-6 relative items-center">
<img alt="Logo" className="block md:hidden z-10 w-auto h-10 object-contain mr-auto mb-10 ml-auto relative" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/102bab99-dda3-48c5-b550-a8095ee4b515_320w.png"/>
<h1 className="leading-[1.1] sm:text-4xl md:text-6xl lg:text-7xl [--fx-filter:blur(10px)_liquid-glass(0,10)_saturate(1.25)_noise(0.5,1,0)] text-4xl text-white tracking-tight font-serif mix-blend-plus-lighter max-w-4xl z-10 mr-auto mb-8 ml-auto pr-6 pl-6 relative scale-110">
          Meistere deine Realität und
          <br/>
<span className="bg-clip-text font-light italic text-transparent font-playfair" style={{backgroundImage: 'linear-gradient(90deg, rgb(197, 160, 89) 0%, rgb(223, 183, 108) 25%, rgb(255, 254, 235) 50%, rgb(223, 183, 108) 75%, rgb(197, 160, 89) 100%)', backgroundSize: '200%', animation: '4s linear 0s infinite normal none running cms-shimmer'}}>
            Manifestiere
          </span>
          mit Leichtigkeit deine Ziele.
        
                
                
            </h1>
<p className="reveal-item leading-relaxed is-visible text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-3xl z-10 mr-auto mb-14 ml-auto relative scale-100">
          Ich helfe dir deine inneren Blockaden zu lösen und deine Vision in die
          Realität umzusetzen.
        </p>

<div className="reveal-item w-full overflow-hidden relative -mt-6 mb-12 mask-edges md:[mask-image:none] md:[-webkit-mask-image:none] group py-4 max-w-4xl mx-auto is-visible">
<div className="animate-marquee group-hover:[animation-play-state:paused] gap-12 sm:gap-16 items-center pr-12 sm:pr-16 md:pr-0">
<div className="flex items-center gap-12 sm:gap-16">
<div className="flex text-left gap-x-3 items-center shrink-0">
<div className="w-6 h-6 rounded-full bg-[#65F973] flex items-center justify-center shrink-0">
<svg className="lucide lucide-check text-[#03050a] sm:w-[18px] sm:h-[18px]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="leading-snug text-sm sm:text-base font-light text-slate-200">
                  50.000+ YouTube
                  <br/>
                  Abonnenten
                </span>
</div>
<div className="flex text-left gap-x-3 items-center shrink-0">
<div className="w-6 h-6 rounded-full bg-[#65F973] flex items-center justify-center shrink-0">
<svg className="lucide lucide-check text-[#03050a] sm:w-[18px] sm:h-[18px]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="leading-snug text-sm sm:text-base font-light text-slate-200">
                  Bestseller Dozent
                  <br/>
                  auf Udemy
                </span>
</div>
<div className="flex text-left gap-x-3 items-center shrink-0">
<div className="w-6 h-6 rounded-full bg-[#65F973] flex items-center justify-center shrink-0">
<svg className="lucide lucide-check text-[#03050a] sm:w-[18px] sm:h-[18px]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="leading-snug text-sm sm:text-base font-light text-slate-200">
                  Mit 200+ Kunden
                  <br/>
                  zusammengearbeitet
                </span>
</div>
</div>
<div className="flex items-center gap-12 sm:gap-16 md:hidden">
<div className="flex text-left gap-x-3 items-center shrink-0">
<div className="w-6 h-6 rounded-full bg-[#65F973] flex items-center justify-center shrink-0">
<svg className="lucide lucide-check text-[#03050a] sm:w-[18px] sm:h-[18px]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="leading-snug text-sm sm:text-base font-light text-slate-200">
                  50.000+ YouTube
                  <br/>
                  Abonnenten
                </span>
</div>
<div className="flex text-left gap-x-3 items-center shrink-0">
<div className="w-6 h-6 rounded-full bg-[#65F973] flex items-center justify-center shrink-0">
<svg className="lucide lucide-check text-[#03050a] sm:w-[18px] sm:h-[18px]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="leading-snug text-sm sm:text-base font-light text-slate-200">
                  Bestseller Dozent
                  <br/>
                  auf Udemy
                </span>
</div>
<div className="flex text-left gap-x-3 items-center shrink-0">
<div className="w-6 h-6 rounded-full bg-[#65F973] flex items-center justify-center shrink-0">
<svg className="lucide lucide-check text-[#03050a] sm:w-[18px] sm:h-[18px]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="leading-snug text-sm sm:text-base font-light text-slate-200">
                  Mit 200+ Kunden
                  <br/>
                  zusammengearbeitet
                </span>
</div>
</div>
</div>
</div>
<div className="flex flex-col gap-8 z-10 w-full relative gap-x-10 gap-y-8 items-center">
<div className="btn-wrapper reveal-item z-10 is-visible">
<a className="magnetic-button" href="/umfrage">
<span>Strategie-Gespräch buchen</span>
<span className="arrow-icon">→</span>
</a>
</div>
</div>
</section>

<section className="w-full flex flex-col items-center relative z-20 mt-12 px-6 max-w-5xl mx-auto" id="shift">
<div className="text-center mb-16">
<h2 className="reveal-item text-2xl sm:text-3xl md:text-4xl text-gradient font-light tracking-tight font-serif mb-4">
            Erlebe deinen Shift
          </h2>
<p className="reveal-item leading-relaxed sm:text-lg md:text-xl text-base font-light text-slate-50/80 max-w-3xl mr-auto ml-auto">
            Lass die inneren Widerstände endgültig los. Spüre, was passiert,
            wenn dein Bewusstsein richtig ausgerichtet ist: Du hörst auf, Dinge
            mühsam zu erzwingen, und beginnst stattdessen, deine neue Realität
            mit vollkommener Leichtigkeit zu manifestieren.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">

<div className="reveal-item md:p-10 overflow-hidden group transition-all duration-700 border-gradient-card bg-[#0b0c10] rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl">
<svg aria-hidden="true" className="lucide lucide-cloud-rain absolute -right-8 -top-8 w-40 h-40 text-[#14284b]/30 group-hover:text-[#14284b]/50 transition-colors duration-700 pointer-events-none" data-lucide="cloud-rain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M16 14v6"></path><path d="M8 14v6"></path><path d="M12 16v6"></path></svg>
<div className="relative z-10">
<h3 className="reveal-item uppercase text-xs font-light text-[#5975a6] tracking-[0.25em] mb-8">
      Deine aktuelle Realität
    </h3>
<ul className="space-y-6">
<li className="reveal-item flex gap-4 gap-x-4 gap-y-4 items-start">
<div className="flex items-center gap-3 mt-1 shrink-0">
<span className="text-[#5975a6] text-base font-playfair italic w-3 text-right">
                      I.
                    </span>
<i className="w-6 h-6 text-red-900/80" data-lucide="x-circle" strokeWidth="1.5"></i>
</div>
<span className="leading-relaxed text-lg font-light text-slate-300">
                    Du rennst im Außen ständig gegen eine Wand und versuchst,
                    Ergebnisse extrem mühsam zu erzwingen.
                  </span>
</li>
<li className="reveal-item flex gap-4 gap-x-4 gap-y-4 items-start">
<div className="flex items-center gap-3 mt-1 shrink-0">
<span className="text-[#5975a6] text-base font-playfair italic w-3 text-right">
                      II.
                    </span>
<i className="w-6 h-6 text-red-900/80" data-lucide="x-circle" strokeWidth="1.5"></i>
</div>
<span className="leading-relaxed text-lg font-light text-slate-300">
                    Alte, limitierende Denkmuster halten dich klein und in einer
                    endlosen Gedankenschleife gefangen.
                  </span>
</li>
<li className="reveal-item flex gap-4 items-start">
<div className="flex shrink-0 mt-1 gap-x-4 gap-y-4 items-center">
<span className="text-[#5975a6] text-base font-playfair italic w-3 text-right">
                      III.
                    </span>
<i className="w-6 h-6 text-red-900/80" data-lucide="x-circle" strokeWidth="1.5"></i>
</div>
<span className="leading-relaxed text-lg font-light text-slate-300">
                    Du blockierst deinen eigenen Durchbruch unbewusst immer
                    wieder selbst, kurz bevor du ihn erreichst.
                  </span>
</li>
<li className="reveal-item flex gap-4 items-start">
<div className="flex items-center gap-3 mt-1 shrink-0">
<span className="text-[#5975a6] text-base font-playfair italic w-3 text-right">
                      IV.
                    </span>
<i className="w-6 h-6 text-red-900/80" data-lucide="x-circle" strokeWidth="1.5"></i>
</div>
<span className="leading-relaxed text-lg font-light text-slate-300">
                    Du fühlst dich oft ausgelaugt und hast das Gefühl, permanent
                    auf der Stelle zu treten, egal wie hart du arbeitest.
                  </span>
</li>
</ul>
</div>
</div>

<div className="reveal-item glass-panel md:p-10 overflow-hidden group hover:bg-[#112240]/10 transition-all duration-700 rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-[0_0_30px_rgba(197,160,89,0.15)] hover:shadow-[0_0_50px_rgba(197,160,89,0.3)]">

<div className="energy-border"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.1)_0%,transparent_70%)] opacity-50 animate-[pulse-glow_4s_ease-in-out_infinite] pointer-events-none rounded-2xl z-0"></div>
<i className="absolute -right-8 -top-8 w-40 h-40 text-[#C5A059]/10 group-hover:text-[#C5A059]/30 transition-colors duration-700 pointer-events-none z-10" data-lucide="sparkles" strokeWidth="1.5"></i>
<div className="relative z-10">
<div className="reveal-item flex items-center gap-4 mb-8">
<h3 className="uppercase text-xs font-light text-[#C5A059] tracking-[0.25em]">
                  Im Schöpfer-Zustand
                </h3>
<div className="flex-grow h-px bg-gradient-to-r from-[#C5A059]/50 to-transparent"></div>
</div>
<ul className="space-y-6">
<li className="reveal-item flex items-start gap-4">
<div className="flex items-center gap-3 mt-1 shrink-0">
<span className="text-slate-400 text-base font-playfair italic w-3 text-right">
                      I.
                    </span>
<i className="w-6 h-6 text-[#65a30d]" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<span className="leading-relaxed text-lg font-light text-slate-50">
                    Der Widerstand fällt weg. Du hörst auf zu kämpfen und ziehst
                    deine Ziele im Flow an.
                  </span>
</li>
<li className="reveal-item flex items-start gap-4">
<div className="flex items-center gap-3 mt-1 shrink-0">
<span className="text-slate-400 text-base font-playfair italic w-3 text-right">
                      II.
                    </span>
<i className="w-6 h-6 text-[#65a30d]" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<span className="leading-relaxed text-lg font-light text-slate-50">
                    Deine alten Programme sind gelöscht. Du agierst aus einem
                    unerschütterlichen Selbstvertrauen heraus.
                  </span>
</li>
<li className="reveal-item flex items-start gap-4">
<div className="flex items-center gap-3 mt-1 shrink-0">
<span className="text-slate-400 text-base font-playfair italic w-3 text-right">
                      III.
                    </span>
<i className="w-6 h-6 text-[#65a30d]" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<span className="leading-relaxed text-lg font-light text-slate-50">
                    Deine innere und äußere Welt sind im Einklang. Du triffst
                    intuitiv und vollautomatisch die richtigen Entscheidungen.
                  </span>
</li>
<li className="reveal-item flex items-start gap-4">
<div className="flex items-center gap-3 mt-1 shrink-0">
<span className="text-slate-400 text-base font-playfair italic w-3 text-right">
                      IV.
                    </span>
<i className="w-6 h-6 text-[#65a30d]" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<span className="leading-relaxed text-lg font-light text-slate-50">
                    Du ruhst in völliger Klarheit und spürst die absolute
                    Gewissheit, dass sich deine Vision bereits materialisiert.
                  </span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="w-full relative z-20 mt-40 px-6" id="methodik">
<div className="max-w-[1200px] mx-auto text-center mb-20">
<span className="reveal-item text-xs uppercase tracking-[0.25em] text-[#C5A059] font-light mb-4 block">
            Die Methodik
          </span>
<h2 className="reveal-item text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gradient leading-tight tracking-tight font-serif mb-6">
            Die Architektur deiner neuen Realität.
          </h2>
<p className="reveal-item leading-relaxed text-xl font-light text-slate-400 max-w-2xl mr-auto ml-auto">
            Keine oberflächlichen Taktiken oder Methoden. Ein tiefgreifendes
            System, das dein Bewusstsein im Kern neu ausrichtet.
          </p>
</div>
<div className="max-w-[1200px] mx-auto w-full relative reveal-item">
<div className="bg-[#112240]/30 border border-[#112240]/50 p-[1px] relative shadow-2xl">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px]">

<div className="transition-colors duration-500 p-10 lg:p-14 flex flex-col items-center text-center group relative z-0 bg-[#060c18] hover:bg-[#0a1526]">
<div className="mb-8 relative flex items-center justify-center h-24 w-24">
<div className="absolute inset-0 bg-gradient-radial from-[#C5A059]/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full scale-150"></div>
<i className="w-14 h-14 text-[#C5A059] relative z-10 group-hover:scale-110 transition-transform duration-500" data-lucide="compass" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-2xl lg:text-3xl tracking-tight text-slate-100 mb-5">
                  Absolute Klarheit
                </h3>
<p className="text-lg text-slate-400 font-light leading-relaxed">
                  Entdecke deine wahre Bestimmung und entfache deinen tiefsten
                  emotionalen Antrieb, um das glasklare Fundament deiner neuen
                  Realität zu erschaffen.
                </p>
</div>

<div className="bg-[#060c18] hover:bg-[#0a1526] transition-colors duration-500 p-10 lg:p-14 flex flex-col items-center text-center group relative z-0">
<div className="mb-8 relative flex items-center justify-center h-24 w-24">
<div className="absolute inset-0 bg-gradient-radial from-[#C5A059]/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full scale-150"></div>
<i className="w-14 h-14 text-[#C5A059] relative z-10 group-hover:scale-110 transition-transform duration-500" data-lucide="brain" strokeWidth="1.5"></i>
</div>
<h3 className="lg:text-3xl text-2xl text-slate-100 tracking-tight font-serif mb-5">
                  Neuprogrammierung
                </h3>
<p className="text-lg text-slate-400 font-light leading-relaxed">
                  Überschreibe limitierende Programme in deinem Unterbewusstsein
                  und nutze gezielte tägliche Routinen, um deine Ziele ab sofort
                  auf Autopilot anzuziehen.
                </p>
</div>

<div className="bg-[#060c18] hover:bg-[#0a1526] transition-colors duration-500 p-10 lg:p-14 flex flex-col items-center text-center group relative z-0">
<div className="mb-8 relative flex items-center justify-center h-24 w-24">
<div className="absolute inset-0 bg-gradient-radial from-[#C5A059]/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full scale-150"></div>
<i className="w-14 h-14 text-[#C5A059] relative z-10 group-hover:scale-110 transition-transform duration-500" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-2xl lg:text-3xl tracking-tight text-slate-100 mb-5">
                  Reality Creation
                </h3>
<p className="text-lg text-slate-400 font-light leading-relaxed">
                  Entschlüssele die wahren Spielregeln der Realität und meistere
                  die Fähigkeit, deine Außenwelt als bewusster Schöpfer nach
                  deinen exakten Wünschen zu formen.
                </p>
</div>

<div className="bg-[#060c18] hover:bg-[#0a1526] transition-colors duration-500 p-10 lg:p-14 flex flex-col items-center text-center group relative z-0">
<div className="mb-8 relative flex items-center justify-center h-24 w-24">
<div className="absolute inset-0 bg-gradient-radial from-[#C5A059]/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full scale-150"></div>
<i className="w-14 h-14 text-[#C5A059] relative z-10 group-hover:scale-110 transition-transform duration-500" data-lucide="scale" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-2xl lg:text-3xl tracking-tight text-slate-100 mb-5">
                  Innere Harmonisierung
                </h3>
<p className="text-lg text-slate-400 font-light leading-relaxed">
                  Beende jegliche Selbstsabotage und bringe deine Gedanken,
                  Emotionen und Handlungen in einen perfekten Einklang, sodass
                  dein Erfolg unvermeidbar wird.
                </p>
</div>

<div className="bg-[#060c18] hover:bg-[#0a1526] transition-colors duration-500 p-10 lg:p-14 flex flex-col items-center text-center group relative z-0">
<div className="mb-8 relative flex items-center justify-center h-24 w-24">
<div className="absolute inset-0 bg-gradient-radial from-[#C5A059]/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full scale-150"></div>
<i className="w-14 h-14 text-[#C5A059] relative z-10 group-hover:scale-110 transition-transform duration-500" data-lucide="feather" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-2xl lg:text-3xl tracking-tight text-slate-100 mb-5">
                  Die Kunst des Loslassens
                </h3>
<p className="text-lg text-slate-400 font-light leading-relaxed">
                  Befreie dich von innerem Druck und Kontrolle. Lerne, deiner
                  Intuition so tief zu vertrauen, dass absolute Selbstbestimmung
                  dein natürlicher Zustand wird.
                </p>
</div>

<div className="bg-[#060c18] hover:bg-[#0a1526] transition-colors duration-500 p-10 lg:p-14 flex flex-col items-center text-center group relative z-0">
<div className="mb-8 relative flex items-center justify-center h-24 w-24">
<div className="absolute inset-0 bg-gradient-radial from-[#C5A059]/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full scale-150"></div>
<i className="w-14 h-14 text-[#C5A059] relative z-10 group-hover:scale-110 transition-transform duration-500" data-lucide="fingerprint" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-2xl lg:text-3xl tracking-tight text-slate-100 mb-5">
                  Vollständige Verkörperung
                </h3>
<p className="text-lg text-slate-400 font-light leading-relaxed">
                  Verbinde dich tief mit deinem idealen Selbst und shifte deine
                  Identität so radikal, dass die physische Realität im Außen
                  automatisch nachziehen muss.
                </p>
</div>
</div>

<div className="absolute -top-[3px] -left-[3px] w-[5px] h-[5px] bg-[#C5A059] z-20"></div>
<div className="absolute -top-[3px] -right-[3px] w-[5px] h-[5px] bg-[#C5A059] z-20"></div>
<div className="absolute -bottom-[3px] -left-[3px] w-[5px] h-[5px] bg-[#C5A059] z-20"></div>
<div className="absolute -bottom-[3px] -right-[3px] w-[5px] h-[5px] bg-[#C5A059] z-20"></div>
<div className="absolute -top-[3px] left-[33.333%] -ml-[2px] w-[5px] h-[5px] bg-[#C5A059] z-20 hidden lg:block"></div>
<div className="absolute -top-[3px] left-[66.666%] -ml-[2px] w-[5px] h-[5px] bg-[#C5A059] z-20 hidden lg:block"></div>
<div className="absolute -bottom-[3px] left-[33.333%] -ml-[2px] w-[5px] h-[5px] bg-[#C5A059] z-20 hidden lg:block"></div>
<div className="absolute -bottom-[3px] left-[66.666%] -ml-[2px] w-[5px] h-[5px] bg-[#C5A059] z-20 hidden lg:block"></div>
<div className="absolute top-[50%] -mt-[2px] -left-[3px] w-[5px] h-[5px] bg-[#C5A059] z-20 hidden lg:block"></div>
<div className="absolute top-[50%] -mt-[2px] left-[33.333%] -ml-[2px] w-[5px] h-[5px] bg-[#C5A059] z-20 hidden lg:block"></div>
<div className="absolute top-[50%] -mt-[2px] left-[66.666%] -ml-[2px] w-[5px] h-[5px] bg-[#C5A059] z-20 hidden lg:block"></div>
<div className="absolute top-[50%] -mt-[2px] -right-[3px] w-[5px] h-[5px] bg-[#C5A059] z-20 hidden lg:block"></div>
</div>
</div>
</section>

<section className="w-full relative z-20 mt-32 px-6 max-w-4xl mx-auto" id="ueber-mich">
<div className="reveal-item border-gradient-card glass-panel bg-white/[0.02] rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-2xl">
<i className="absolute top-6 left-6 w-16 h-16 text-[#C5A059]/10" data-lucide="quote" strokeWidth="1.5"></i>
<p className="reveal-item text-xl sm:text-2xl md:text-3xl leading-relaxed z-10 font-light italic text-slate-200 font-serif mb-10 relative">
            "Es ist als hätte ich den geheimen Zugang zu den Cheatcodes des
            Lebens erhalten"
          </p>
<div className="reveal-item flex flex-col gap-3 z-10 relative gap-x-3 gap-y-3 items-center">
<div className="border-gradient-card flex overflow-hidden bg-center bg-[#060c18] w-14 h-14 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/07f691c7-b364-400b-88fc-67f8c28abca7_320w.png)] bg-cover rounded-full mb-1 items-center justify-center"></div>
<h4 className="uppercase text-xs font-normal text-[#C5A059] tracking-[0.15em]">
              Samuel F.
            </h4>
<span className="text-[10px] uppercase font-light text-slate-400 tracking-wider">
              Unternehmer, Closer
            </span>
</div>
</div>
</section>

<section className="flex flex-col lg:flex-row lg:gap-16 w-full max-w-6xl z-20 mt-32 mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-start">

<div className="w-full lg:w-5/12 flex flex-col gap-6 md:gap-8">

<div className="aspect-[4/3] border-gradient-card overflow-hidden group reveal-item cursor-pointer bg-[#04080f] rounded-2xl relative lg:top-10 shadow-xl">
<div className="bg-center transition-all duration-700 ease-out grayscale-[1] group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 opacity-70 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/638cb161-946e-4f16-af1a-6543e59ed515_1600w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none from-[#091221] via-[#091221]/20"></div>
<div className="absolute bottom-5 left-5 pointer-events-none">
<span className="backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.15em] text-slate-400 border border-[#C5A059]/10 group-hover:border-[#C5A059]/30 group-hover:text-white transition-colors duration-300 bg-[#091221]/80">
                Damals
              </span>
</div>
</div>

<div className="aspect-[4/3] border-gradient-card overflow-hidden group reveal-item md:aspect-square bg-[#060c18] rounded-3xl relative lg:top-10 shadow-2xl">
<div className="bg-center transition-transform duration-1000 ease-out group-hover:scale-105 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/12d3ebe4-c330-4b1c-af32-55da75072ae5_1600w.png)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none from-[#091221]/90"></div>
<div className="absolute bottom-6 left-6 pointer-events-none">
<span className="bg-[#C5A059]/10 backdrop-blur-md px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] text-[#C5A059] border border-[#C5A059]/30 shadow-[0_0_15px_rgba(197,160,89,0.2)]">
                Heute
              </span>
</div>
</div>
</div>

<div className="w-full lg:w-7/12 flex flex-col pt-2 lg:pt-6">
<h3 className="reveal-item uppercase flex items-center gap-3 text-xs font-light text-[#C5A059] tracking-[0.25em] mb-6">
<span className="w-8 h-px bg-[#C5A059]/50"></span>
            Über Marcel Jan Lüsebrink
          </h3>
<h2 className="reveal-item text-3xl sm:text-4xl lg:text-5xl leading-[1.15] font-light text-white tracking-tight font-serif mb-8">
            Die Illusion der Welt
            <br/>
<span className="text-[#C5A059] italic text-xl sm:text-2xl lg:text-4xl mt-2 block tracking-tight">
              (und wie ich sie durchbrochen habe)
            </span>
</h2>
<div className="space-y-6">
<p className="reveal-item leading-relaxed text-lg font-light text-slate-300 scale-100">
              Die meisten Menschen stecken in einem endlosen Kreislauf fest: Sie
              suchen verzweifelt im Außen nach neuen Taktiken oder dem nächsten
              "Hack", um ihr Leben zu verbessern. Dabei ignorieren sie völlig
              den einzig wahren Treiber ihrer Realität:
              <span className="text-white font-normal">ihren inneren Zustand.</span>
</p>
<p className="reveal-item leading-relaxed text-lg font-light text-slate-300">
              Ich kenne diese Sackgasse nur zu gut. Vor einigen Jahren saß ich
              jeden Tag an der Kasse – gefangen in einem fremdbestimmten Alltag,
              der mich innerlich komplett leergesaugt hat. Geplagt von ständigen
              chronischen Schmerzen und so tief in Depressionen versunken, sah
              ich an meinem absoluten Tiefpunkt keinen Ausweg mehr und
              versuchte, mir das Leben zu nehmen.
            </p>
<p className="reveal-item leading-relaxed text-lg font-light text-slate-300">
              Doch genau an diesem dunkelsten Punkt stieß ich auf das, was alles
              verändern sollte: Ich entschlüsselte die wahren Gesetze des
              Universums und verstand zum ersten Mal, wie Realität wirklich
              erschaffen wird.
            </p>
<p className="reveal-item leading-relaxed text-lg font-light text-slate-300">
              Indem ich aufhörte, gegen das Außen zu kämpfen, und anfing, meine
              innere Frequenz zu shiften, lösten sich meine körperlichen und
              mentalen Blockaden auf. Ich ließ den verhassten Job hinter mir und
              erschuf mir aus dem absoluten Nichts heraus ein Leben in
              <span className="text-[#C5A059]">
                Freiheit, Fülle und Selbstbestimmung.
              </span>
</p>
<p className="reveal-item leading-relaxed text-lg font-light text-slate-300">
              Heute ist es meine Lebensaufgabe, genau dieses Wissen
              weiterzugeben und anderen zu zeigen, wie sie ihre tiefsten Wünsche
              in die Realität manifestieren.
            </p>
<div className="reveal-item mt-8 p-6 lg:p-8 rounded-2xl border border-white/5 bg-white/[0.02] relative overflow-hidden group shadow-[0_0_30px_rgba(0,0,0,0.5)]">
<div className="absolute inset-0 bg-gradient-to-r from-[#C5A059]/0 via-[#C5A059]/5 to-[#C5A059]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
<i className="absolute -right-4 -top-4 w-24 h-24 text-[#C5A059]/10 group-hover:text-[#C5A059]/20 transition-colors duration-700 pointer-events-none" data-lucide="zap" strokeWidth="1.5"></i>
<p className="leading-relaxed text-lg font-light text-slate-200 relative z-10">
                Wir versuchen hier nicht, dein aktuelles, von Zweifeln geprägtes
                „Betriebssystem“ ein bisschen zu optimieren.
                <span className="text-white font-normal">
                  Wir ersetzen es komplett.
                </span>
                Wir installieren ein neues Fundament, das von extremer Klarheit,
                müheloser Manifestation und wahrer Schöpferkraft gesteuert wird.
              </p>
</div>
</div>
</div>
</section>

<section className="w-full relative z-20 mt-40 px-6 max-w-[1400px] mx-auto" id="resultate">
<div className="text-center mb-16 flex flex-col items-center">
<iconify-icon className="w-10 h-10 text-[#C5A059] mb-4 reveal-item" icon="solar:star-fall-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="reveal-item text-gradient leading-tight sm:text-4xl md:text-5xl lg:text-6xl text-3xl tracking-tight font-serif mb-6 py-1">
            Das Außen ist nur der Spiegel.
          </h2>
<p className="reveal-item leading-relaxed text-xl font-light text-slate-400 max-w-2xl mr-auto ml-auto">
            Echte, greifbare Transformationen. Menschen, die aus der Illusion
            ausgebrochen sind und ihre Traumrealität mit Leichtigkeit erschaffen
            haben.
          </p>
</div>

<div className="reveal-item columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 w-full max-w-6xl mx-auto">
<div className="break-inside-avoid relative rounded-2xl border-gradient-card bg-[#04080f] p-2 shadow-2xl group overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50 z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-20 from-[#091221]/90"></div>
<img alt="Kunden Resultat" className="group-hover:scale-[1.02] transition-transform duration-700 ease-out w-full h-auto object-cover bg-center z-0 rounded-xl relative" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/06bc1d1b-5a6f-4d58-8b7a-4f6374ba5a1e_800w.png"/>
</div>
<div className="break-inside-avoid relative rounded-2xl border-gradient-card bg-[#04080f] p-2 shadow-2xl group overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-[#060c18]/90 via-transparent to-transparent opacity-50 z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-20"></div>
<img alt="Kunden Resultat" className="group-hover:scale-[1.02] transition-transform duration-700 ease-out bg-center w-full h-auto object-cover z-0 rounded-xl relative" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6449278f-e1db-4d2b-b206-36e787e5c66c_800w.jpg"/>
</div>
<div className="break-inside-avoid relative rounded-2xl border-gradient-card bg-[#04080f] p-2 shadow-2xl group overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-[#060c18]/90 via-transparent to-transparent opacity-50 z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-20"></div>
<img alt="Kunden Resultat" className="group-hover:scale-[1.02] transition-transform duration-700 ease-out w-full h-auto object-cover bg-center z-0 rounded-xl relative" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2360476b-ab40-439a-ac47-d31eca3c3b6e_800w.jpg"/>
</div>
<div className="break-inside-avoid relative rounded-2xl border-gradient-card bg-[#04080f] p-2 shadow-2xl group overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-[#060c18]/90 via-transparent to-transparent opacity-50 z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-20"></div>
<img alt="Kunden Resultat" className="group-hover:scale-[1.02] transition-transform duration-700 ease-out bg-center w-full h-auto object-cover z-0 rounded-xl relative" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e5798bc3-feec-485d-b679-558456b8c5eb_800w.png"/>
</div>
<div className="break-inside-avoid border-gradient-card group overflow-hidden bg-[#04080f] rounded-2xl pt-2 pr-2 pb-2 pl-2 relative shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-t from-[#060c18]/90 via-transparent to-transparent opacity-50 z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-20"></div>
<img alt="Kunden Resultat" className="group-hover:scale-[1.02] transition-transform duration-700 ease-out bg-center z-0 w-full h-auto object-cover rounded-xl relative" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0c807d4-c5ee-4328-9ed0-9e45a3dea014_800w.png"/>
</div>
<div className="break-inside-avoid border-gradient-card group overflow-hidden bg-[#04080f] rounded-2xl pt-2 pr-2 pb-2 pl-2 relative shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-t from-[#060c18]/90 via-transparent to-transparent opacity-50 z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-20"></div>
<img alt="Kunden Resultat" className="group-hover:scale-[1.02] transition-transform duration-700 ease-out bg-center w-full h-auto object-cover z-0 rounded-xl relative" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a8a8b73c-45b0-451c-b35e-3a72da1d6628_800w.jpg"/>
</div>
<div className="break-inside-avoid border-gradient-card group overflow-hidden bg-[#04080f] rounded-2xl pt-2 pr-2 pb-2 pl-2 relative shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-t from-[#060c18]/90 via-transparent to-transparent opacity-50 z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-20"></div>
<img alt="Kunden Resultat" className="group-hover:scale-[1.02] transition-transform duration-700 ease-out bg-center w-full h-auto object-cover z-0 rounded-xl relative" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e3b7522b-df47-4966-b50a-188d7d3b666f_800w.jpg"/>
</div>
<div className="break-inside-avoid relative rounded-2xl border-gradient-card bg-[#04080f] p-2 shadow-2xl group overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-[#060c18]/90 via-transparent to-transparent opacity-50 z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-20"></div>
<img alt="Kunden Resultat" className="group-hover:scale-[1.02] transition-transform duration-700 ease-out bg-center w-full h-auto object-cover z-0 rounded-xl relative" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e90be089-345d-4e02-ac34-31b2395a38b3_800w.jpg"/>
</div>
</div>
</section>

<section className="flex flex-col text-center w-full max-w-4xl z-20 mt-40 mr-auto mb-10 ml-auto pr-6 pl-6 relative items-center">
<h2 className="reveal-item text-3xl sm:text-4xl md:text-6xl font-light text-white tracking-tight font-serif mb-6">
          Bereit für deinen Shift?
        </h2>
<p className="reveal-item sm:text-lg md:text-xl text-base font-light text-slate-400 max-w-2xl mr-auto mb-10 ml-auto">
          Du weißt selbst am besten, wann die Zeit für deinen Shift gekommen
          ist. Wenn du bereit bist, lass und sprechen.
        </p>
<div className="btn-wrapper reveal-item">
<a className="magnetic-button" href="/umfrage">
<span className="">Strategie-Gespräch buchen</span>
<span className="arrow-icon">→</span>
</a>
</div>
</section>
</main>
<footer className="w-full py-8 border-t border-[#14284b]/30 mt-auto relative z-20">
<div className="flex flex-col md:flex-row items-center justify-between max-w-[1400px] mx-auto px-6 text-base text-slate-500 font-light">
<span className="uppercase md:mb-0 text-xs tracking-widest mb-4 [--fx-filter:blur(10px)_liquid-glass(0.4,10)_saturate(1.25)_noise(0.5,1,0)] scale-75">
          © 2026 RealityAccelerator
        
                
                
            </span>
<div className="flex gap-8">
<a className="hover:text-[#C5A059] transition-colors duration-300 text-xs" href="https://itrk.legal/1jdU.0.10dy.html">
            Impressum
          </a>
<a className="hover:text-[#C5A059] transition-colors duration-300 text-xs" href="https://itrk.legal/1jdU.bg.10dy.html">
            Datenschutz
          </a>
</div>
</div>
</footer>


    </>
  );
}
