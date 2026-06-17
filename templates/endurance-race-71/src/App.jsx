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



tailwind.config = {
theme: {
extend: {
colors: {
blue: {
50: '#fff0f0',
100: '#ffcccc',
200: '#ff9999',
300: '#ff6666',
400: '#ff3333',
500: '#FF0000',
600: '#cc0000',
700: '#990000',
800: '#660000',
900: '#330000',
950: '#1a0000',
}
}
}
},
plugins: [
function({ addUtilities }) {
const utilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
rotateValues.forEach((v) => {
utilities[`.rotate-x-${v}`] = { '--tw-rotate-x': `${v}deg`, transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))` };
if (v!==0) utilities[`.-rotate-x-${v}`] = { '--tw-rotate-x': `-${v}deg`, transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))` };
utilities[`.rotate-y-${v}`] = { '--tw-rotate-y': `${v}deg`, transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))` };
if (v!==0) utilities[`.-rotate-y-${v}`] = { '--tw-rotate-y': `-${v}deg`, transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))` };
utilities[`.rotate-z-${v}`] = { '--tw-rotate-z': `${v}deg`, transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))` };
if (v!==0) utilities[`.-rotate-z-${v}`] = { '--tw-rotate-z': `-${v}deg`, transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))` };
});
addUtilities({
...utilities,
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
});
}
]
};



      document.addEventListener("DOMContentLoaded", () => {
        gsap.registerPlugin(ScrollTrigger);

        // Masked Staggered Word Reveal
        document.querySelectorAll("h1, h2, .h-reveal").forEach(el => {
          if (!el.textContent.trim()) return;
          const words = el.innerText.split(/\s+/);
          el.innerHTML = words.map(w =>
            `<span style="display:inline-block;overflow:hidden;vertical-align:top;margin-right:0.25em">` +
            `<span class="reveal-word" style="display:inline-block;transform:translateY(110%)">${w}</span>` +
            `</span>`
          ).join("");

          gsap.to(el.querySelectorAll(".reveal-word"), {
            y: 0,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.05,
            scrollTrigger: {
              trigger: el,
              start: "top 85%"
            }
          });
        });

        // Fade/Blur/Slide In
        const targets = document.querySelectorAll("p, .grid > div, li, img:not(.absolute), button, a.group");
        targets.forEach(el => {
          if (el.closest("h1, h2")) return;
          gsap.fromTo(el,
            { y: 40, opacity: 0, filter: "blur(10px)" },
            {
              y: 0, opacity: 1, filter: "blur(0px)",
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 90%"
              }
            }
          );
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
      
<div className="" id="wrapper" style={{}}>

<div className="gradient-blur">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
<style className="">
        .gradient-blur {
          position: fixed;
          z-index: 25;
          inset: 0 0 auto 0;
          height: 15%;
          pointer-events: none;
        }

        .gradient-blur>div,
        .gradient-blur::before,
        .gradient-blur::after {
          position: absolute;
          inset: 0;
        }

        .gradient-blur::before {
          content: "";
          z-index: 1;
          backdrop-filter: blur(0.5px);
          mask: linear-gradient(to top,
              rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 1) 12.5%,
              rgba(0, 0, 0, 1) 25%,
              rgba(0, 0, 0, 0) 37.5%);
        }

        .gradient-blur>div:nth-of-type(1) {
          z-index: 2;
          backdrop-filter: blur(1px);
          mask: linear-gradient(to top,
              rgba(0, 0, 0, 0) 12.5%,
              rgba(0, 0, 0, 1) 25%,
              rgba(0, 0, 0, 1) 37.5%,
              rgba(0, 0, 0, 0) 50%);
        }

        .gradient-blur>div:nth-of-type(2) {
          z-index: 3;
          backdrop-filter: blur(2px);
          mask: linear-gradient(to top,
              rgba(0, 0, 0, 0) 25%,
              rgba(0, 0, 0, 1) 37.5%,
              rgba(0, 0, 0, 1) 50%,
              rgba(0, 0, 0, 0) 62.5%);
        }

        .gradient-blur>div:nth-of-type(3) {
          z-index: 4;
          backdrop-filter: blur(4px);
          mask: linear-gradient(to top,
              rgba(0, 0, 0, 0) 37.5%,
              rgba(0, 0, 0, 1) 50%,
              rgba(0, 0, 0, 1) 62.5%,
              rgba(0, 0, 0, 0) 75%);
        }

        .gradient-blur>div:nth-of-type(4) {
          z-index: 5;
          backdrop-filter: blur(8px);
          mask: linear-gradient(to top,
              rgba(0, 0, 0, 0) 50%,
              rgba(0, 0, 0, 1) 62.5%,
              rgba(0, 0, 0, 1) 75%,
              rgba(0, 0, 0, 0) 87.5%);
        }

        .gradient-blur>div:nth-of-type(5) {
          z-index: 6;
          backdrop-filter: blur(16px);
          mask: linear-gradient(to top,
              rgba(0, 0, 0, 0) 62.5%,
              rgba(0, 0, 0, 1) 75%,
              rgba(0, 0, 0, 1) 87.5%,
              rgba(0, 0, 0, 0) 100%);
        }

        .gradient-blur>div:nth-of-type(6) {
          z-index: 7;
          backdrop-filter: blur(32px);
          mask: linear-gradient(to top,
              rgba(0, 0, 0, 0) 75%,
              rgba(0, 0, 0, 1) 87.5%,
              rgba(0, 0, 0, 1) 100%);
        }

        .gradient-blur::after {
          content: "";
          z-index: 8;
          backdrop-filter: blur(64px);
          mask: linear-gradient(to top,
              rgba(0, 0, 0, 0) 87.5%,
              rgba(0, 0, 0, 1) 100%);
        }
      </style>
</div>

<div className="max-w-[1600px] mx-auto shadow-2xl min-h-screen overflow-hidden relative bg-neutral-950" style={{}}>

<nav className="fixed top-8 left-0 right-0 z-50 flex justify-center w-full px-6 pointer-events-none">
<div className="w-full max-w-[1600px] flex items-center justify-between pointer-events-auto mx-auto md:px-16">

<div className="flex items-center gap-4">
<div className="flex flex-col">
<span className="text-white font-bold text-2xl tracking-tighter leading-none">
                SPARTAN
              </span>
<span className="text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase mt-0.5">
                Endurance
              </span>
</div>
</div>

<div className="flex items-center gap-4">

<div className="hidden md:flex items-center bg-white rounded-full pl-8 pr-10 py-3.5 shadow-2xl">
<div className="flex items-center gap-8">
<a className="text-xs font-bold text-neutral-900 uppercase tracking-widest hover:text-orange-600 transition-colors flex items-center gap-2 group" href="#" style={{filter: 'blur(0px)'}}>
<span className="text-neutral-400 group-hover:text-orange-600 transition-colors">
                    •
                  </span>
                  Races
                </a>
<a className="text-xs font-bold text-neutral-900 uppercase tracking-widest hover:text-orange-600 transition-colors flex items-center gap-2 group" href="#" style={{filter: 'blur(0px)'}}>
<span className="text-neutral-400 group-hover:text-orange-600 transition-colors">
                    •
                  </span>
                  Training
                </a>
<a className="text-xs font-bold text-neutral-900 uppercase tracking-widest hover:text-orange-600 transition-colors flex items-center gap-2 group" href="#" style={{filter: 'blur(0px)'}}>
<span className="text-neutral-400 group-hover:text-orange-600 transition-colors">
                    •
                  </span>
                  Coaching
                </a>
<a className="text-xs font-bold text-neutral-900 uppercase tracking-widest hover:text-orange-600 transition-colors flex items-center gap-2 group" href="#" style={{filter: 'blur(0px)'}}>
<span className="text-neutral-400 group-hover:text-orange-600 transition-colors">
                    •
                  </span>
                  Store
                </a>
</div>
</div>

<a className="hover:bg-orange-600 transition-all flex items-center gap-3 hover:shadow-orange-500/20 hover:-translate-y-0.5 group text-white bg-blue-500 rounded-full px-8 py-3.5 shadow-xl" href="#" style={{filter: 'blur(0px)'}}>
<span className="text-xs font-bold uppercase tracking-widest">
                Join Now
              </span>
<svg className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>

<button className="md:hidden w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors" style={{filter: 'blur(0px)'}}>
<svg className="lucide lucide-menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
</div>
</nav>

<header className="md:h-[850px] overflow-hidden group w-full h-[90vh] relative">

<img alt="Creative Studio" className="absolute inset-0 w-full h-full object-cover brightness-[0.85] group-hover:scale-105 transition-transform duration-1000 ease-in-out" src="https://cdn.midjourney.com/9542fac3-8634-4e2d-aa8f-851160415266/0_3.png?w=800&amp;q=80" style={{}}/>

<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/20"></div>


<div className="flex flex-col md:pb-24 text-center pb-16 absolute top-0 right-0 bottom-0 left-0 items-center justify-end">
<div className="mb-8">
<span className="backdrop-blur border text-white px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest bg-blue-900/40 border-blue-500/30 text-blue-100">
              Spartan Protocol v2.0 Live
            </span>
</div>

<h1 className="text-[20vw] leading-[0.8] font-medium text-white tracking-tighter opacity-90 mix-blend-overlay"><span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}><span className="reveal-word" style={{display: 'inline-block'}}>ENDURE</span></span></h1>
<p className="text-white/80 text-lg md:text-xl font-light max-w-xl mt-6 px-4 leading-relaxed" style={{filter: 'blur(0px)'}}>
            Forge your legacy. The ultimate test of physical and mental
            endurance starts here.
          </p>
</div>
</header>

<section className="border-y grid grid-cols-1 md:grid-cols-4 border-white/10">
<div className="flex flex-col group text-center bg-zinc-950 border-white/10 border-r pt-12 pr-12 pb-12 pl-12 items-center justify-center transition-colors hover:bg-zinc-900/50" style={{filter: 'blur(0px)'}}>
<span className="text-7xl font-semibold tracking-tighter transition-colors group-hover:text-blue-500 text-white">
            12
          </span>
<span className="text-xs uppercase tracking-[0.25em] mt-4 text-white/50 font-medium">
            Weeks of Prep
          </span>
</div>
<div className="flex flex-col text-center bg-zinc-950 border-white/10 border-r pt-12 pr-12 pb-12 pl-12 items-center justify-center" style={{filter: 'blur(0px)'}}>
<span className="text-xs uppercase tracking-[0.25em] text-white/40 font-medium">
            System Status
          </span>
<span className="text-xl font-medium mt-2 tracking-tight text-white flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
            PROTOCOL LIVE
          </span>
</div>
<div className="p-12 border-r border-white/10 col-span-1 md:col-span-2 relative overflow-hidden flex items-end group" style={{filter: 'blur(0px)'}}>
<img alt="Atmospheric" className="contrast-125 transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 brightness-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/99089245-a2a7-4c8d-8c8b-4f6f66c39b93_1600w.webp"/>
<div className="bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 p-2">
<div className="text-3xl font-semibold tracking-tighter uppercase text-white">
              NEURAL ENDURANCE
            </div>
<p className="text-sm text-white/60 max-w-sm mt-2 font-light leading-relaxed" style={{filter: 'blur(0px)'}}>
              Optimizing the cognitive threshold between physical failure and
              ultimate victory through sensory deprivation.
            </p>
</div>
</div>
</section>
<section className="md:px-12 text-white bg-neutral-950 pt-24 pr-6 pb-24 pl-6">
<div className="max-w-[1600px] mr-auto ml-auto">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
<div className="flex flex-col gap-2 gap-x-2 gap-y-2 items-start">
<div className="flex items-center gap-3 mb-2">
<span className="w-8 h-[2px] bg-blue-600"></span>
<span className="text-blue-500 font-mono text-lg font-bold tracking-widest uppercase">
          01
        </span>
<span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
          FEATURED EVENT
        </span>
</div>
<h2 className="md:text-8xl uppercase leading-[0.9] text-6xl font-bold text-white tracking-tighter font-oswald"><span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}><span className="reveal-word" style={{display: 'inline-block'}}>NIGHTSPARTANRACE</span></span></h2>
</div>
<div className="flex flex-col items-start md:items-end gap-6">
<p className="text-neutral-400 max-w-md md:text-right text-sm leading-relaxed" style={{filter: 'blur(0px)'}}>
        Obstacles, mud, and endurance — powered by music and lights under the night sky.
      </p>
<button className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all text-xs font-bold uppercase tracking-widest" style={{filter: 'blur(0px)'}}>
        VIEW EVENT DETAILS
        <span className="group-hover:translate-x-1 transition-transform">→</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">

<div className="lg:col-span-5 lg:h-auto overflow-hidden group h-[500px] border-white/10 border rounded-none relative" style={{filter: 'blur(0px)'}}>
<img alt="Night Spartan Race" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://cdn.midjourney.com/f2614459-13da-42fd-89d4-011b62220a5d/0_1.png?w=800&amp;q=80" style={{filter: 'blur(0px)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<h3 className="text-white text-2xl font-medium">Obstacle Training</h3>
<p className="text-white/60 text-sm mt-1" style={{filter: 'blur(0px)'}}>
      Strength • Carries • Climbs • Grip</p>
</div>
</div>

<div className="lg:col-span-7 flex flex-col gap-8" style={{filter: 'blur(0px)'}}>

<div className="overflow-hidden h-[350px] border-white/10 border rounded-none relative">
<img alt="Runner at night" className="w-full h-full object-cover" src="https://cdn.midjourney.com/21b652fa-cfd7-4cc9-a5a5-ac8725af453d/0_3.png?w=800&amp;q=80" style={{filter: 'blur(0px)'}}/>
<div className="bg-gradient-to-r from-black/40 via-transparent to-black/40 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-6 right-6 bg-white rounded-full p-3 shadow-xl">
<svg aria-hidden="true" className="iconify text-2xl iconify--lucide text-blue-600" data-icon="lucide:music" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18V5l12-2v13M9 18a3 3 0 1 0 0-6a3 3 0 0 0 0 6m12-2a3 3 0 1 0 0-6a3 3 0 0 0 0 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="md:p-12 bg-white/5 border-[#ffffff]/10 border rounded-none pt-10 pr-10 pb-10 pl-10">
<p className="text-lg md:text-xl leading-relaxed mb-8 font-light text-neutral-300" style={{filter: 'blur(0px)'}}>
          This is not a traditional marathon.
          It’s a <span className="text-blue-500 font-semibold">Spartan night race</span> built around extreme obstacles,
          strength challenges, and mental resilience. Expect mud, walls, carries, and climbs —
          while <span className="text-blue-500 font-semibold">music</span> and lights keep the energy high from start to finish.
        </p>
<div className="flex flex-wrap gap-3 mb-8">
<span className="px-4 py-2 rounded-full border border-white/15 text-white/70 text-xs uppercase tracking-widest">
            Obstacles
          </span>
<span className="px-4 py-2 rounded-full border border-white/15 text-white/70 text-xs uppercase tracking-widest">
            Night lights
          </span>
<span className="px-4 py-2 rounded-full border border-white/15 text-white/70 text-xs uppercase tracking-widest">
            Live music
          </span>
<span className="px-4 py-2 rounded-full border border-white/15 text-white/70 text-xs uppercase tracking-widest">
            Mont-Tremblant
          </span>
</div>
<button className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-white hover:text-black transition-all text-xs font-bold uppercase tracking-widest text-white" style={{filter: 'blur(0px)'}}>
          GET TICKETS
          <svg aria-hidden="true" className="iconify ml-2 iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</section><div className="overflow-hidden border-y bg-blue-600 border-black pt-3 pb-3">
<div className="relative flex whitespace-nowrap">
<div className="flex items-center gap-8 animate-marquee">
<span className="text-2xl font-oswald font-bold uppercase italic tracking-tight text-black px-4">
              UNBREAKABLE DISCIPLINE • FORGE YOUR LEGACY • ELITE ENDURANCE • NO
              SURRENDER •
            </span>
<span className="text-2xl font-oswald font-bold uppercase italic tracking-tight text-black px-4">
              UNBREAKABLE DISCIPLINE • FORGE YOUR LEGACY • ELITE ENDURANCE • NO
              SURRENDER •
            </span>
<span className="text-2xl font-oswald font-bold uppercase italic tracking-tight text-black px-4">
              UNBREAKABLE DISCIPLINE • FORGE YOUR LEGACY • ELITE ENDURANCE • NO
              SURRENDER •
            </span>
</div>
</div>
</div>
<section className="md:px-12 text-white bg-neutral-950 pt-24 pr-6 pb-24 pl-6">
<div className="max-w-[1600px] mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
<div className="flex flex-col items-start gap-2">
<div className="flex items-center gap-3 mb-2">
<span className="w-8 h-[2px] bg-blue-600"></span>
<span className="text-blue-500 font-mono text-lg font-bold tracking-widest uppercase">
                  02
                </span>
<span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                  CALENDAR
                </span>
</div>
<h2 className="text-6xl md:text-8xl uppercase font-bold text-white tracking-tighter font-oswald leading-[0.95] px-2 md:px-4"><span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}><span className="reveal-word" style={{display: 'inline-block'}}>UPCOMINGRACES</span></span></h2>
</div>
<div className="flex flex-col items-start md:items-end gap-6">
<p className="text-neutral-400 max-w-md md:text-right text-sm leading-relaxed" style={{filter: 'blur(0px)'}}>
          The 2026 season is open. Secure your entry for the ultimate
          test.
        </p>
<button className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all text-xs font-bold uppercase tracking-widest" style={{filter: 'blur(0px)'}}>
                FULL SCHEDULE
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
</button>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-12 gap-8 hover:bg-white/5 transition-colors -mx-4 border-white/10 rounded-none border-b pt-12 pr-4 pb-12 pl-4 gap-x-8 gap-y-8 items-center">
<div className="md:col-span-2" style={{filter: 'blur(0px)'}}>
<span className="text-xl md:text-2xl font-mono font-medium text-neutral-500 group-hover:text-blue-500 transition-colors">
                2026-07-04
              </span>
</div>
<div className="md:col-span-6 space-y-4" style={{filter: 'blur(0px)'}}>
<h3 className="md:text-5xl uppercase leading-none text-4xl font-bold italic text-white tracking-tight font-oswald drop-shadow-md">
          BEAST OPENER
        </h3>
<div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
<span className="flex items-center gap-1.5">
<svg aria-hidden="true" data-icon="lucide:map-pin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</g>
</svg>
                  Death Valley
                </span>
<span className="text-white/20">|</span>
<span className="flex items-center gap-1.5">
<svg aria-hidden="true" className="" data-icon="lucide:trending-up" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 7h6v6"></path>
<path d="m22 7l-8.5 8.5l-5-5L2 17"></path>
</g>
</svg>
                  ELV: 2,400M
                </span>
</div>
</div>
<div className="md:col-span-4 overflow-hidden h-[280px] border-white/5 border rounded-none relative shadow-2xl" style={{filter: 'blur(0px)'}}>
<img alt="Event image" className="group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 opacity-60 w-full h-full object-cover grayscale" src="https://cdn.midjourney.com/dd2b9765-6c5b-4922-8c9e-2f2546c87003/0_2.png?w=800&amp;q=80" style={{filter: 'blur(0px)'}}/>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-12 gap-8 hover:bg-white/5 transition-colors -mx-4 border-white/10 rounded-none border-b pt-12 pr-4 pb-12 pl-4 gap-x-8 gap-y-8 items-center">
<div className="md:col-span-2" style={{filter: 'blur(0px)'}}>
<span className="text-xl md:text-2xl font-mono font-medium text-neutral-500 group-hover:text-blue-500 transition-colors">
                2026-07-11
              </span>
</div>
<div className="md:col-span-6 space-y-4" style={{filter: 'blur(0px)'}}>
<h3 className="md:text-5xl uppercase leading-none text-4xl font-bold italic text-white tracking-tight font-oswald drop-shadow-md">
    SUMMIT SPRINT
  </h3>
<div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
<span className="flex items-center gap-1.5">
<svg aria-hidden="true" data-icon="lucide:map-pin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</g>
</svg>
                  Mont Tremblant
                </span>
<span className="text-white/20">|</span>
<span className="flex items-center gap-1.5">
<svg aria-hidden="true" data-icon="lucide:trending-up" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 7h6v6"></path>
<path d="m22 7l-8.5 8.5l-5-5L2 17"></path>
</g>
</svg>
                  ELV: 1,200M
                </span>
</div>
</div>
<div className="md:col-span-4 overflow-hidden h-[280px] border-white/5 border rounded-none relative shadow-2xl" style={{filter: 'blur(0px)'}}>
<img alt="Event image" className="group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 opacity-60 w-full h-full object-cover grayscale" src="https://cdn.midjourney.com/148df933-1941-4e2d-b4c0-102bb224f50e/0_3.png?w=800&amp;q=80" style={{filter: 'blur(0px)'}}/>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-12 hover:bg-white/5 transition-colors -mx-4 border-white/10 rounded-none border-b pt-12 pr-4 pb-12 pl-4 gap-x-8 gap-y-8 items-center">
<div className="md:col-span-2" style={{filter: 'blur(0px)'}}>
<span className="text-xl md:text-2xl font-mono font-medium text-neutral-500 group-hover:text-blue-500 transition-colors">
                2026-07-18
              </span>
</div>
<div className="md:col-span-6 space-y-4" style={{filter: 'blur(0px)'}}>
<h3 className="md:text-5xl uppercase leading-none text-4xl font-bold italic text-white tracking-tight font-oswald drop-shadow-md">
          URBAN GRIND
        </h3>
<div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
<span className="flex items-center gap-1.5">
<svg aria-hidden="true" data-icon="lucide:map-pin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</g>
</svg>
                  Montreal Core
                </span>
<span className="text-white/20">|</span>
<span className="flex items-center gap-1.5">
<svg aria-hidden="true" className="" data-icon="lucide:trending-up" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 7h6v6"></path>
<path d="m22 7l-8.5 8.5l-5-5L2 17"></path>
</g>
</svg>
                  ELV: 450M
                </span>
</div>
</div>
<div className="md:col-span-4 overflow-hidden h-[280px] border-white/5 border rounded-none relative shadow-2xl" style={{filter: 'blur(0px)'}}>
<img alt="Event image" className="group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 opacity-60 w-full h-full object-cover grayscale" src="https://cdn.midjourney.com/284eb122-4a56-42a9-ba46-c7624edca6a7/0_0.png?w=800&amp;q=80" style={{filter: 'blur(0px)'}}/>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
</div>
</div>
</section>
<div className="overflow-hidden border-y bg-blue-600 border-black pt-3 pb-3">
<div className="relative flex whitespace-nowrap">
<div className="flex items-center gap-8 animate-marquee">
<span className="text-2xl font-oswald font-bold uppercase italic tracking-tight text-black px-4">
              UNBREAKABLE DISCIPLINE • FORGE YOUR LEGACY • ELITE ENDURANCE • NO
              SURRENDER •
            </span>
<span className="text-2xl font-oswald font-bold uppercase italic tracking-tight text-black px-4">
              UNBREAKABLE DISCIPLINE • FORGE YOUR LEGACY • ELITE ENDURANCE • NO
              SURRENDER •
            </span>
<span className="text-2xl font-oswald font-bold uppercase italic tracking-tight text-black px-4">
              UNBREAKABLE DISCIPLINE • FORGE YOUR LEGACY • ELITE ENDURANCE • NO
              SURRENDER •
            </span>
</div>
</div>
</div>


<section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-8">
<div className="flex flex-col items-start gap-2">
<div className="flex items-center gap-3 mb-2">
<span className="w-8 h-[2px] bg-blue-600"></span>
<span className="uppercase text-lg font-bold text-blue-500 tracking-widest font-mono">03</span>
<span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                CATEGORIES
              </span>
</div>
<h2 className="text-6xl md:text-8xl font-oswald font-bold uppercase tracking-tighter text-white leading-[0.9]"><span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}><span className="reveal-word" style={{display: 'inline-block'}}>RACEFORMATS</span></span></h2>
</div>
<div className="flex gap-8 md:gap-12 pb-2 gap-x-8 gap-y-8 items-center">

<div className="flex flex-col">
<span className="text-[10px] md:text-xs font-bold text-neutral-500 uppercase tracking-[0.2em] mb-1">
                Distance
              </span>
<div className="text-3xl md:text-4xl font-oswald font-bold text-white uppercase tracking-tight">
                5
                <span className="text-lg md:text-xl font-normal text-neutral-400 ml-0.5">
                  KM
                </span>
</div>
</div>
<div className="w-px h-10 bg-white/10"></div>

<div className="flex flex-col">
<span className="text-[10px] md:text-xs font-bold text-neutral-500 uppercase tracking-[0.2em] mb-1">
                Obstacles
              </span>
<div className="text-3xl md:text-4xl font-oswald font-bold text-white uppercase tracking-tight">
                20
              </div>
</div>
<div className="w-px h-10 bg-white/10"></div>

<div className="flex flex-col">
<span className="text-[10px] md:text-xs font-bold text-neutral-500 uppercase tracking-[0.2em] mb-1">
                Avg Time
              </span>
<div className="text-3xl md:text-4xl font-oswald font-bold text-white uppercase tracking-tight flex items-baseline">
                1
                <span className="text-base font-normal text-neutral-400 mx-1">
                  H
                </span>
                32
                <span className="text-base font-normal text-neutral-400 mx-1">
                  M
                </span>
                12
                <span className="text-base font-normal text-neutral-400 ml-1">
                  S
                </span>
</div>
</div>
</div>
</div>


<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group overflow-hidden hover:-translate-y-1 transition-transform duration-300 bg-red-700 h-[450px] z-10 rounded-none relative" style={{filter: 'blur(0px)'}}>

<img alt="Sprint Background" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-multiply grayscale contrast-125" src="https://images.unsplash.com/photo-1574680096141-1cddd32e04ca?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-red-900/90 to-red-600/40 mix-blend-multiply"></div>

<div className="flex flex-col z-10 pt-8 pr-8 pb-10 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end">
<h3 className="md:text-9xl leading-none text-8xl font-bold italic text-white tracking-tighter font-oswald drop-shadow-lg">
                5K
              </h3>
<p className="md:text-5xl uppercase leading-none text-4xl font-bold italic text-white tracking-tight font-oswald drop-shadow-md" style={{filter: 'blur(0px)'}}>
                20 Obstacles
              </p>
</div>

<button className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform shadow-lg z-20" style={{filter: 'blur(0px)'}}>
<svg className="" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 5v14M5 12h14"></path>
</svg>
</button>
</div>

<div className="group overflow-hidden hover:-translate-y-1 transition-transform duration-300 bg-neutral-900 h-[450px] border-neutral-800 border rounded-none relative" style={{filter: 'blur(0px)'}}>
<img alt="Atlas Carry" className="transition-transform duration-700 group-hover:scale-110 opacity-80 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://cdn.midjourney.com/b26f1d05-33fe-486f-9a7b-6d2d28cefe53/0_1.png?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 pb-10">
<span className="block text-xs font-bold text-white/70 uppercase tracking-[0.25em] mb-2 font-oswald">
                Strength
              </span>
<h3 className="uppercase leading-none text-5xl font-bold italic text-white tracking-tight font-oswald">
                Atlas Carry
              </h3>
</div>
<button className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-black transition-all border border-white/10 group-hover:border-white" style={{filter: 'blur(0px)'}}>
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14M5 12h14"></path>
</svg>
</button>
</div>

<div className="group overflow-hidden hover:-translate-y-1 transition-transform duration-300 bg-neutral-900 h-[450px] border-neutral-800 border rounded-none relative" style={{filter: 'blur(0px)'}}>
<img alt="A-Frame Cargo" className="transition-transform duration-700 group-hover:scale-110 opacity-80 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://cdn.midjourney.com/795ba0d4-4a31-484c-841b-5ebbc7a05e72/0_3.png?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 pb-10">
<span className="block text-xs font-bold text-white/70 uppercase tracking-[0.25em] mb-2 font-oswald">
                Agility
              </span>
<h3 className="text-5xl font-oswald font-bold text-white uppercase italic tracking-tight leading-none">
                A-Frame Cargo
              </h3>
</div>
<button className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-black transition-all border border-white/10 group-hover:border-white" style={{filter: 'blur(0px)'}}>
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14M5 12h14"></path>
</svg>
</button>
</div>
</div>
</section><div className="overflow-hidden border-y bg-blue-600 border-black pt-3 pb-3">
<div className="relative flex whitespace-nowrap">
<div className="flex items-center gap-8 animate-marquee">
<span className="text-2xl font-oswald font-bold uppercase italic tracking-tight text-black px-4">
              UNBREAKABLE DISCIPLINE • FORGE YOUR LEGACY • ELITE ENDURANCE • NO
              SURRENDER •
            </span>
<span className="text-2xl font-oswald font-bold uppercase italic tracking-tight text-black px-4">
              UNBREAKABLE DISCIPLINE • FORGE YOUR LEGACY • ELITE ENDURANCE • NO
              SURRENDER •
            </span>
<span className="text-2xl font-oswald font-bold uppercase italic tracking-tight text-black px-4">
              UNBREAKABLE DISCIPLINE • FORGE YOUR LEGACY • ELITE ENDURANCE • NO
              SURRENDER •
            </span>
</div>
</div>
</div>
<section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto border-b border-white/10">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
<div className="flex flex-col items-start gap-2">
<div className="flex items-center gap-3 mb-2">
<span className="w-8 h-[2px] bg-blue-600"></span>
<span className="uppercase text-lg font-bold text-blue-500 tracking-widest font-mono">04</span>
<span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                GLOBAL
              </span>
</div>
<h2 className="text-6xl md:text-8xl font-oswald font-bold uppercase tracking-tighter text-white leading-[0.9]"><span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}><span className="reveal-word" style={{display: 'inline-block'}}>COURSEMAPS</span></span></h2>
</div>
<div className="flex flex-col items-start md:items-end gap-6">
<p className="text-neutral-400 max-w-md md:text-right text-sm leading-relaxed" style={{filter: 'blur(0px)'}}>
              Tremblant. Death Valley. Montreal. Terrain that demands respect.
            </p>
<button className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all text-xs font-bold uppercase tracking-widest" style={{filter: 'blur(0px)'}}>
              ALL LOCATIONS
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
</button>
</div>
</div>

<div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden group bg-neutral-900 w-full border-white/10 border rounded-none relative shadow-2xl">

<img alt="Course Map" className="contrast-125 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000 ease-in-out group-hover:scale-100 opacity-50 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6842d21d-42e4-4021-a18d-a739a9909ede_3840w.png"/>

<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent pointer-events-none"></div>

<div className="absolute inset-0 pointer-events-none">

<div className="absolute top-[40%] left-[20%] flex flex-col items-center group/marker transition-transform hover:scale-110 pointer-events-auto cursor-pointer">
<div className="px-2 py-1 bg-blue-600 rounded text-[10px] font-bold text-white mb-2 shadow-lg opacity-0 group-hover/marker:opacity-100 transition-opacity -translate-y-2 group-hover/marker:translate-y-0">
                START LINE
              </div>
<div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-[0_0_20px_rgba(59,130,246,0.8)] relative">
<div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75"></div>
</div>
</div>

<svg className="absolute inset-0 w-full h-full text-blue-500/60 stroke-current stroke-2 fill-none stroke-dashed opacity-60 group-hover:opacity-100 transition-opacity duration-700" style={{strokeDasharray: '6 6'}}>
<path d="M 20% 40% Q 35% 35% 50% 55% T 80% 45%" vector-effect="non-scaling-stroke"></path>
</svg>

<div className="absolute top-[55%] left-[50%] flex flex-col items-center group/marker pointer-events-auto cursor-pointer">
<div className="px-2.5 py-1 bg-neutral-900/90 border border-white/20 backdrop-blur-md rounded text-[10px] font-mono text-white mb-2">
                3KM • AID STATION
              </div>
<div className="w-3 h-3 rounded-full bg-white border-2 border-neutral-900 shadow-lg"></div>
</div>

<div className="absolute top-[45%] left-[80%] flex flex-col items-center group/marker pointer-events-auto cursor-pointer">
<div className="w-4 h-4 rounded-full bg-orange-500 border-2 border-white shadow-[0_0_20px_rgba(249,115,22,0.6)]"></div>
<div className="mt-2 px-2 py-1 bg-neutral-900/90 border border-white/20 backdrop-blur-md rounded text-[10px] font-bold text-white uppercase tracking-wider">
                Finish
              </div>
</div>
</div>

<div className="absolute bottom-6 right-6 flex flex-col gap-2 pointer-events-auto">
<button className="w-10 h-10 bg-neutral-900/90 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-black transition-all shadow-lg group/btn" style={{filter: 'blur(0px)'}}>
<svg className="lucide lucide-plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</button>
<button className="w-10 h-10 bg-neutral-900/90 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-black transition-all shadow-lg group/btn" style={{filter: 'blur(0px)'}}>
<svg className="lucide lucide-minus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
</svg>
</button>
</div>
</div>

<div className="mt-6 flex items-start gap-3 text-sm text-neutral-500 font-medium">
<svg className="lucide lucide-info mt-0.5 shrink-0 text-blue-500/50" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 16v-4"></path>
<path d="M12 8h.01"></path>
</svg>
<p className="italic opacity-80" style={{filter: 'blur(0px)'}}>
            Course maps are subject to change depending on conditions. Distance
            and obstacles may vary on race day.
          </p>
</div>
</section><div className="overflow-hidden border-y bg-blue-600 border-black pt-3 pb-3">
<div className="relative flex whitespace-nowrap">
<div className="flex items-center gap-8 animate-marquee">
<span className="uppercase text-2xl font-bold text-black tracking-tight pr-4 pl-4">
              JULY 2026 • AUGUST 2026 • JULY 2026 • AUGUST 2026 •
            </span>
<span className="uppercase text-2xl font-bold text-black tracking-tight pr-4 pl-4">
              JULY 2026 • AUGUST 2026 • JULY 2026 • AUGUST 2026 •
            </span>
<span className="text-2xl font-bold uppercase tracking-tight text-black px-4">
              JULY 2026 • AUGUST 2026 • JULY 2026 • AUGUST 2026 •
            </span>
<span className="text-2xl font-bold uppercase tracking-tight text-black px-4">
              JULY 2026 • AUGUST 2026 • JULY 2026 • AUGUST 2026 •
            </span>
</div>
</div>
</div>


<section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
<div className="flex flex-col items-start gap-2">
<div className="flex items-center gap-3 mb-2">
<span className="w-8 h-[2px] bg-blue-600"></span>
<span className="uppercase text-lg font-bold text-blue-500 tracking-widest font-mono">05</span>
<span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                LEGION
              </span>
</div>
<h2 className="text-6xl md:text-8xl font-oswald font-bold uppercase tracking-tighter text-white leading-[0.9]"><span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}><span className="reveal-word" style={{display: 'inline-block'}}>JOINTHEELITE</span></span></h2>
</div>
<div className="flex flex-col items-start md:items-end gap-6">
<p className="text-neutral-400 max-w-md md:text-right text-sm leading-relaxed" style={{filter: 'blur(0px)'}}>
              Connect with athletes who refuse to compromise. Forge your new
              reality.
            </p>
<button className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all text-xs font-bold uppercase tracking-widest" style={{filter: 'blur(0px)'}}>
              COMMUNITY HUB
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

<div className="space-y-12" style={{filter: 'blur(0px)'}}>

<div className="flex gap-6 items-start group">
<div className="mt-1">
<span className="iconify text-4xl text-neutral-300 group-hover:text-orange-500 transition-colors" data-icon="solar:quote-up-square-bold-duotone"></span>
</div>
<div className="">
<p className="text-neutral-500 text-lg leading-relaxed mb-4" style={{filter: 'blur(0px)'}}>
                  "Success isn't just about aesthetics—it's about solving the
                  right problems. Aura's exclusive framework brings ambitious
                  founders together."
                </p>
<div className="flex items-center gap-2 text-sm font-medium">
<img alt="User" className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/150?u=1" style={{filter: 'blur(0px)'}}/>
<span className="">Ashley Cooper</span>
<span className="text-xs text-blue-500">★★★★★</span>
</div>
</div>
<div className="hidden md:flex flex-col justify-center items-center min-w-[80px]">
<span className="text-4xl font-semibold tracking-tight text-neutral-900 text-white">
                  85%
                </span>
<span className="text-[10px] uppercase text-neutral-400 text-center mt-1">
                  EfficiencyBoost
                </span>
</div>
</div>
<div className="h-px bg-[#ffffff]/10 w-full"></div>

<div className="flex gap-6 items-start group">
<div className="mt-1">
<span className="iconify text-4xl text-neutral-300 group-hover:text-orange-500 transition-colors" data-icon="solar:quote-up-square-bold-duotone"></span>
</div>
<div className="">
<p className="text-neutral-500 text-lg leading-relaxed mb-4" style={{filter: 'blur(0px)'}}>
                  "Surrounding yourself with the right design partners changes
                  everything. The ROI we've seen since the rebrand is
                  unprecedented."
                </p>
<div className="flex items-center gap-2 text-sm font-medium text-neutral-900">
<img alt="User" className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/150?u=2" style={{filter: 'blur(0px)'}}/>
<span className="">James Wilson</span>
<span className="text-orange-500 text-xs">★★★★★</span>
</div>
</div>
<div className="hidden md:flex flex-col justify-center items-center min-w-[80px]">
<span className="text-4xl font-semibold tracking-tight text-neutral-900">
                  95%
                </span>
<span className="text-[10px] uppercase text-neutral-400 text-center mt-1">
                  ClientRetention
                </span>
</div>
</div>
</div>

<div className="flex flex-col gap-6" style={{filter: 'blur(0px)'}}>
<div className="overflow-hidden group w-full h-64 rounded-none relative">
<img alt="Office 1" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://cdn.midjourney.com/4e51269a-fda0-4304-af47-dde9c1253077/0_2.png?w=800&amp;q=80" style={{filter: 'blur(0px)'}}/>
<div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
<span className="text-sm font-bold text-neutral-900">
                  85% Growth
                </span>
</div>
</div>
<div className="overflow-hidden group w-full h-64 rounded-none relative">
<img alt="Office 2" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://cdn.midjourney.com/9e287538-f791-40cb-9ff6-d2999a34f141/0_3.png?w=800&amp;q=80" style={{filter: 'blur(0px)'}}/>
<div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
<span className="text-sm font-bold text-neutral-900">
                  95% Speed
                </span>
</div>
</div>
</div>
</div>
</section><div className="overflow-hidden border-y bg-blue-600 border-black pt-3 pb-3">
<div className="relative flex whitespace-nowrap">
<div className="flex items-center gap-8 animate-marquee">
<span className="uppercase text-2xl font-bold text-black tracking-tight pr-4 pl-4">
              JULY 2026 • AUGUST 2026 • JULY 2026 • AUGUST 2026 •
            </span>
<span className="uppercase text-2xl font-bold text-black tracking-tight pr-4 pl-4">
              JULY 2026 • AUGUST 2026 • JULY 2026 • AUGUST 2026 •
            </span>
<span className="text-2xl font-bold uppercase tracking-tight text-black px-4">
              JULY 2026 • AUGUST 2026 • JULY 2026 • AUGUST 2026 •
            </span>
<span className="text-2xl font-bold uppercase tracking-tight text-black px-4">
              JULY 2026 • AUGUST 2026 • JULY 2026 • AUGUST 2026 •
            </span>
</div>
</div>
</div><section className="md:px-12 text-white bg-neutral-950 pt-24 pr-6 pb-24 pl-6">
<div className="max-w-[1600px] mx-auto">
<div className="flex flex-col md:flex-row md:items-end gap-6 border-white/10 border-b mb-16 pb-8 gap-x-6 gap-y-6 justify-between">
<div className="flex flex-col items-start gap-2">
<div className="flex items-center gap-3 mb-2">
<span className="w-8 h-[2px] bg-blue-600"></span>
<span className="uppercase text-lg font-bold text-blue-500 tracking-widest font-mono">06</span>
<span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                    ADMISSION
                  </span>
</div>
<h2 className="md:text-8xl uppercase leading-[0.9] text-6xl font-bold text-white tracking-tighter font-oswald"><span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}><span className="reveal-word" style={{display: 'inline-block'}}>SECUREACCESS</span></span></h2>
</div>
<div className="flex flex-col items-start md:items-end gap-6">
<p className="text-neutral-400 max-w-md md:text-right text-sm leading-relaxed" style={{filter: 'blur(0px)'}}>
                  Limited availability for Sprint, Beast, and Ultra categories.
                </p>
<button className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all text-xs font-bold uppercase tracking-widest" style={{filter: 'blur(0px)'}}>
                  TICKET OPTIONS
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch"> <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8" style={{filter: 'blur(0px)'}}>
<div className="relative bg-black border border-white/20" style={{filter: 'blur(0px)'}}>
<div className="absolute left-0 right-0 -top-[10px] h-5" style={{background: 'radial-gradient(circle, transparent 10px, rgba(0,0,0,1) 10px) repeat-x', backgroundSize: '26px 20px'}}></div>
<div className="absolute left-0 right-0 -bottom-[10px] h-5" style={{background: 'radial-gradient(circle, transparent 10px, rgba(0,0,0,1) 10px) repeat-x', backgroundSize: '26px 20px'}}></div>
<div className="relative p-8 pt-14 min-h-[560px] flex flex-col text-center">
<h3 className="uppercase leading-none text-6xl font-bold italic text-white tracking-tight font-oswald">SPRINT</h3>
<p className="mt-4 text-xs text-white/55 leading-relaxed max-w-[240px] mx-auto" style={{filter: 'blur(0px)'}}>Buying SPRINT pass for the night race you gain access to:</p>
<div className="mt-10 h-px bg-white/15"></div>
<ul className="mt-10 space-y-5 text-sm text-white/75 text-left">
<li className="flex items-center gap-4" style={{filter: 'blur(0px)'}}><span className="inline-flex justify-center text-white w-5">✦</span> 5K Course Access</li>
<li className="flex items-center gap-4" style={{filter: 'blur(0px)'}}><span className="inline-flex w-5 justify-center text-white">✦</span> 20 Obstacles</li>
<li className="flex items-center gap-4" style={{filter: 'blur(0px)'}}><span className="inline-flex w-5 justify-center text-white">✦</span> “Flash” Start Wave</li>
</ul>
<div className="mt-auto pt-12">
<div className="h-px bg-white/15 mb-8"></div>
<div className="text-5xl font-black tracking-tight">$89</div>
</div>
</div>
</div>
<div className="relative bg-black border border-white/20" style={{filter: 'blur(0px)'}}>
<div className="absolute left-0 right-0 -top-[10px] h-5" style={{background: 'radial-gradient(circle, transparent 10px, rgba(0,0,0,1) 10px) repeat-x', backgroundSize: '26px 20px'}}></div>
<div className="absolute left-0 right-0 -bottom-[10px] h-5" style={{background: 'radial-gradient(circle, transparent 10px, rgba(0,0,0,1) 10px) repeat-x', backgroundSize: '26px 20px'}}></div>
<div className="relative p-8 pt-14 min-h-[560px] flex flex-col text-center">
<h3 className="uppercase leading-none text-6xl font-bold italic text-white tracking-tight font-oswald">BEAST</h3>
<p className="mt-4 text-xs text-white/55 leading-relaxed max-w-[240px] mx-auto" style={{filter: 'blur(0px)'}}>Buying BEAST pass for the night race you gain access to:</p>
<div className="mt-10 h-px bg-white/15"></div>
<ul className="mt-10 space-y-5 text-sm text-white/75 text-left">
<li className="flex items-center gap-4" style={{filter: 'blur(0px)'}}><span className="inline-flex justify-center text-white w-5">✦</span> 21K Half Marathon</li>
<li className="flex items-center gap-4" style={{filter: 'blur(0px)'}}><span className="inline-flex justify-center text-white w-5">✦</span> 30 Obstacles</li>
<li className="flex items-center gap-4" style={{filter: 'blur(0px)'}}><span className="inline-flex justify-center text-white w-5">✦</span> Elite Timing Chip</li>
</ul>
<div className="mt-auto pt-12">
<div className="h-px bg-white/15 mb-8"></div>
<div className="text-5xl font-black tracking-tight">$129</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5 h-full" style={{filter: 'blur(0px)'}}> <div className="border border-white/15 h-full flex flex-col"> <div className="relative aspect-[2.2/1] overflow-hidden shrink-0">
<img alt="" className="opacity-70 w-full h-full object-cover grayscale" src="https://cdn.midjourney.com/0e245ffa-8c07-4437-8d7a-abbd1a012617/0_0.png?w=800&amp;q=80" style={{filter: 'blur(0px)'}}/>
<div className="absolute inset-0 bg-black/35"></div>
<div className="opacity-30 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E\')'}}>
</div>
</div>
<div className="flex flex-col flex-1 pt-8 pr-8 pb-8 pl-8"> <h2 className="text-4xl font-black tracking-tight uppercase leading-[0.9]"><span className="" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}><span className="reveal-word" style={{display: 'inline-block'}}>BOOKYOURTICKETS</span></span></h2>
<p className="mt-4 text-xs text-white/50" style={{filter: 'blur(0px)'}}>Select your quantity and secure your wave time.</p>
<div className="flex-1"></div>
<button className="uppercase hover:invert transition-all text-sm font-black text-black tracking-widest bg-white w-full mt-8 pt-5 pb-5" style={{filter: 'blur(0px)'}}>Buy Tickets</button>
<p className="mt-6 text-[10px] text-white/30 text-center leading-relaxed" style={{filter: 'blur(0px)'}}>
          Prices include all taxes and event insurance. 
          <br/>By clicking "Buy" you agree to our terms of service.
        </p>
</div>
</div>
</div>
</div>


</div>
</section><div className="overflow-hidden border-y bg-blue-600 border-black pt-3 pb-3">
<div className="relative flex whitespace-nowrap">
<div className="flex items-center gap-8 animate-marquee">
<span className="text-2xl font-bold uppercase tracking-tight text-black px-4">
              JULY 2026 • AUGUST 2026 • JULY 2026 • AUGUST 2026 •
            </span>
<span className="text-2xl font-bold uppercase tracking-tight text-black px-4">
              JULY 2026 • AUGUST 2026 • JULY 2026 • AUGUST 2026 •
            </span>
</div>
</div>
</div>

<footer className="text-white bg-black border-white/10 border-t pt-24 pr-6 pb-0 pl-6">
<div className="max-w-7xl mx-auto">

<div className="flex flex-col md:flex-row gap-16 mb-20 gap-x-16 gap-y-16 items-start justify-between">
<div className="space-y-3">
<a className="group flex items-center gap-4 text-6xl md:text-7xl font-semibold tracking-tighter transition-colors hover:text-blue-500" href="#races" style={{filter: 'blur(10px)'}}>
      RACES
      <svg className="lucide lucide-arrow-up-right text-4xl md:text-5xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
<a className="group flex items-center gap-4 text-6xl md:text-7xl font-semibold tracking-tighter transition-colors hover:text-blue-500" href="#protocol" style={{filter: 'blur(10px)'}}>
      PROTOCOL
      <svg className="lucide lucide-arrow-up-right text-4xl md:text-5xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
<a className="group flex items-center gap-4 text-6xl md:text-7xl font-semibold tracking-tighter transition-colors hover:text-blue-500" href="#legion" style={{filter: 'blur(10px)'}}>
      LEGION
      <svg className="lucide lucide-arrow-up-right text-4xl md:text-5xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
</div>

<div className="md:w-auto md:p-8 bg-neutral-900/50 w-full border-white/10 border rounded-none pt-6 pr-6 pb-6 pl-6 backdrop-blur-sm">
<div className="text-xs uppercase tracking-[0.25em] text-white/50 font-medium">
      Command Center
    </div>
<div className="mt-6 flex flex-col gap-3">
<a className="inline-flex items-center justify-between gap-8 border border-white/15 px-5 py-3.5 hover:border-blue-500/50 transition-colors group rounded-xl" href="#" style={{filter: 'blur(10px)'}}>
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
<span className="text-sm font-semibold uppercase tracking-[0.22em]">
                      Instagram
                    </span>
</div>
<span className="text-sm text-white/40 group-hover:text-blue-400 transition-colors">
                    @spartan.global
                  </span>
</a>
<a className="inline-flex items-center justify-between gap-8 border border-white/15 px-5 py-3.5 hover:border-blue-500/50 transition-colors group rounded-xl" href="#" style={{filter: 'blur(10px)'}}>
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
<span className="text-sm font-semibold uppercase tracking-[0.22em]">
                      Strava
                    </span>
</div>
<span className="text-sm text-white/40 group-hover:text-blue-400 transition-colors">
                    Spartan Elite
                  </span>
</a>
</div>
<div className="mt-6 text-sm text-white/50 leading-relaxed max-w-xs font-light">
      Real-time race tracking, biomechanic insights, and community
      heatmaps. Forge your discipline.
    </div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-white/10 border-t pt-12 gap-x-10 gap-y-10">
<div className="" style={{filter: 'blur(10px)'}}>
<span className="text-xs uppercase tracking-[0.25em] text-white/40 block mb-4 font-medium">
                Direct Intake
              </span>
<p className="text-lg tracking-tight font-medium" style={{filter: 'blur(10px)'}}>
                ELITE@SPARTAN.COM
              </p>
<p className="text-lg tracking-tight text-white/50 font-light" style={{filter: 'blur(10px)'}}>
                Secure line
              </p>
</div>
<div className="" style={{filter: 'blur(10px)'}}>
<span className="text-xs uppercase tracking-[0.25em] text-white/40 block mb-4 font-medium">
                Hub
              </span>
<p className="text-lg tracking-tight font-medium" style={{filter: 'blur(10px)'}}>
                GLOBAL NETWORK
              </p>
<p className="text-lg tracking-tight text-white/50 font-light" style={{filter: 'blur(10px)'}}>
                24/7 Operations · Decentralized
              </p>
</div>
<div className="" style={{filter: 'blur(10px)'}}>
<span className="text-xs uppercase tracking-[0.25em] text-white/40 block mb-4 font-medium">
                Readiness
              </span>
<p className="text-lg tracking-tight font-medium" style={{filter: 'blur(10px)'}}>
                ALWAYS ACTIVE
              </p>
<p className="text-lg tracking-tight text-white/50 font-light" style={{filter: 'blur(10px)'}}>
                Protocol 2.0 deployment live
              </p>
</div>
<div className="md:text-right" style={{filter: 'blur(10px)'}}>
<span className="text-xs uppercase tracking-[0.25em] text-white/40 block mb-4 font-medium">
                Legacy
              </span>
<p className="text-lg tracking-tight font-medium" style={{filter: 'blur(10px)'}}>
                © 2026 SPARTAN
              </p>
<p className="text-lg tracking-tight text-white/20 uppercase font-light" style={{filter: 'blur(10px)'}}>
                No compromise
              </p>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
