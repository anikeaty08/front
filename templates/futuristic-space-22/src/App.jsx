import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



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



          function updateMissionFilter(category) {
            const btnAll = document.getElementById('filter-all');
            const btnDeep = document.getElementById('filter-deep-space');
            const btnOrb = document.getElementById('filter-orbital');

            const cardAres = document.getElementById('card-ares');
            const cardGateway = document.getElementById('card-gateway');
            const cardTitan = document.getElementById('card-titan');
            const stackRight = document.getElementById('stack-right');

            // Reset Buttons
            const btns = [btnAll, btnDeep, btnOrb];
            btns.forEach(b => {
              b.className = 'filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 text-white/50 hover:text-white hover:bg-white/5';
            });

            // Active Button Style
            const activeClass = 'filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 bg-white text-neutral-950 shadow-lg shadow-white/5 scale-105';

            // Reset Cards Layout
            // Default: Ares (col-span-8), RightStack (col-span-4), RightStack > Cards (flex-1)

            if (category === 'all') {
              btnAll.className = activeClass;

              // Show all
              cardAres.style.display = 'block';
              stackRight.style.display = 'flex';
              cardGateway.style.display = 'block';
              cardTitan.style.display = 'block';

              setTimeout(() => {
                cardAres.classList.remove('opacity-0', 'scale-95', 'hidden');
                stackRight.classList.remove('opacity-0', 'scale-95', 'hidden');
                cardGateway.classList.remove('opacity-0', 'flex-[0]');
                cardTitan.classList.remove('opacity-0', 'flex-[0]');

                // Restore Layout
                stackRight.classList.remove('md:col-span-12');
                stackRight.classList.add('md:col-span-4');
                cardGateway.classList.add('flex-1');
                cardTitan.classList.add('flex-1');
              }, 50);

            } else if (category === 'deep-space') {
              btnDeep.className = activeClass;

              // Show Ares & Titan, Hide Gateway
              cardAres.style.display = 'block';
              stackRight.style.display = 'flex';
              cardTitan.style.display = 'block';

              // Hide Gateway
              cardGateway.classList.add('opacity-0', 'flex-[0]');
              setTimeout(() => { cardGateway.style.display = 'none'; }, 300);

              // Show others
              cardAres.classList.remove('opacity-0', 'scale-95', 'hidden');
              stackRight.classList.remove('opacity-0', 'scale-95', 'hidden');
              cardTitan.classList.remove('opacity-0', 'flex-[0]');

              // Layout: Same as All but Titan expands
              stackRight.classList.remove('md:col-span-12');
              stackRight.classList.add('md:col-span-4');
              cardTitan.classList.add('flex-1');

            } else if (category === 'orbital') {
              btnOrb.className = activeClass;

              // Show Gateway, Hide Ares & Titan
              cardGateway.style.display = 'block';
              stackRight.style.display = 'flex';

              // Hide others
              cardAres.classList.add('opacity-0', 'scale-95');
              cardTitan.classList.add('opacity-0', 'flex-[0]');

              setTimeout(() => {
                cardAres.style.display = 'none';
                cardTitan.style.display = 'none';
              }, 300);

              // Show Gateway
              stackRight.classList.remove('opacity-0', 'scale-95', 'hidden');
              cardGateway.classList.remove('opacity-0', 'flex-[0]');

              // Layout Change: Right Stack takes full width
              stackRight.classList.remove('md:col-span-4');
              stackRight.classList.add('md:col-span-12');
              cardGateway.classList.add('flex-1');
            }
          }
        
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="bg-grain"></div>


<div className="fixed flex animate-slide-up [animation-delay:0.5s] z-50 opacity-0 pr-4 pl-4 top-6 right-0 left-0 justify-center">
<nav className="flex transition-all duration-300 bg-neutral-900/60 w-full max-w-4xl border-white/10 border rounded-full pt-2 pr-6 pb-2 pl-2 shadow-2xl backdrop-blur-xl items-center justify-between">

<div className="flex items-center gap-3 pl-4">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black">
<iconify-icon icon="solar:planet-bold-duotone" width="18"></iconify-icon>
</div>
<span className="font-bricolage text-lg tracking-tight font-medium">
            VELOS
          </span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
<a className="text-white hover:text-white transition-colors" href="#">
            Fleet
          </a>
<a className="hover:text-white transition-colors" href="#projects">
            Missions
          </a>
<a className="hover:text-white transition-colors" href="#process">Tech</a>
<a className="hover:text-white transition-colors" href="#careers">Crew</a>
<a className="hover:text-white transition-colors" href="#methodology">
            Protocol
          </a>
</div>

<div className="flex items-center gap-2">
<button className="w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
<iconify-icon className="" icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
<button className="relative w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors group">
<iconify-icon className="" icon="solar:menu-dots-square-linear" width="20"></iconify-icon>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
</button>
</div>
</nav>
</div>

<header className="relative w-full overflow-hidden flex flex-col justify-end pb-12 md:pb-24 min-h-screen md:h-screen">

<div className="absolute inset-0 z-0 bg-black">
<img alt="Brutalist Architecture Detail" className="w-full h-full object-cover animate-cinematic opacity-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/25904405-aa15-491b-9a03-de5fc75f18b3_3840w.webp"/>

<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80"></div>
<div className="bg-black/10 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="absolute top-32 right-6 md:right-12 z-20 flex flex-col items-end gap-2 animate-slide-up [animation-delay:2.5s] opacity-0">
<div className="px-4 py-2 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-mono tracking-wider uppercase text-white/90">
            Live: Orbital Station Alpha
          </span>
</div>
</div>
<div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">

<div className="md:col-span-7 relative">

<div className="flex items-center gap-3 mb-6 animate-slide-up [animation-delay:1.2s] opacity-0">
<span className="h-[1px] w-8 bg-white/60"></span>
<span className="text-xs font-mono uppercase tracking-widest text-white/80">
              Est. 2042
            </span>
</div>
<h1 className="font-bricolage text-white leading-[0.85] tracking-tight font-semibold">
<span className="block text-[15vw] md:text-[9rem] lg:text-[11rem] animate-slide-up [animation-delay:1.4s] opacity-0 mix-blend-normal text-white drop-shadow-2xl">
              DARK
            </span>
<div className="flex items-baseline gap-4 md:gap-8 -mt-2 md:-mt-8 animate-slide-up [animation-delay:1.6s] opacity-0">
<span className="text-[15vw] md:text-[9rem] lg:text-[11rem] font-serif italic font-thin text-white/60 opacity-50 blur-[1px]">
                &amp;
              </span>
<span className="text-[15vw] md:text-[9rem] lg:text-[11rem] text-white drop-shadow-2xl">
                MATTER
              </span>
</div>
</h1>
</div>

<div className="md:col-span-4 md:col-start-9 flex flex-col justify-end pb-4 md:pb-8">

<div className="overflow-hidden animate-slide-up [animation-delay:1.8s] md:p-8 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)] bg-neutral-950/60 opacity-0 border-white/10 border rounded-2xl ring-white/5 ring-1 pt-6 pr-6 pb-6 pl-6 relative shadow-2xl backdrop-blur-2xl">

<div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent z-0 pointer-events-none animate-shimmer-effect"></div>
<div className="relative z-10">
<p className="text-lg md:text-xl text-white font-light leading-relaxed mb-8 antialiased drop-shadow-md">
                We do not just fly. We conquer the abyss. A logistics network
                for the post-terrestrial era, bridging the gap between worlds.
              </p>
<div className="flex flex-col gap-6">
<div className="grid grid-cols-2 gap-4 border-t border-white/20 pt-6">
<div className="">
<span className="block text-[10px] uppercase tracking-widest text-white/50 mb-1">
                      Launches
                    </span>
<span className="text-2xl font-bricolage text-white">142</span>
</div>
<div className="">
<span className="block text-[10px] uppercase tracking-widest text-white/50 mb-1">
                      Bases
                    </span>
<span className="text-2xl font-bricolage text-white">04</span>
</div>
</div>
<a className="group flex items-center justify-between w-full p-1 border-b border-white/30 hover:border-white transition-colors pb-2" href="#projects">
<span className="text-sm font-medium tracking-wide text-white">
                    View Manifest
                  </span>
<iconify-icon className="text-white group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-slide-up [animation-delay:2.2s] opacity-0">
<span className="text-[10px] uppercase tracking-widest text-white/40">
          Scroll
        </span>
<div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
</div>
<div className="absolute bottom-8 left-8 hidden lg:flex flex-col gap-2 animate-slide-up [animation-delay:2.4s] opacity-0 z-20">
<div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-white/40 font-mono">
<span>Sys.Norm</span>
<span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
<span>V. 4.0.2</span>
</div>
<div className="[--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)] bg-neutral-900/80 w-64 border-white/10 border rounded-xl px-4 py-4 backdrop-blur">
<div className="flex justify-between mb-2">
<span className="text-xs text-white/60">Orbit Stability</span>
<span className="text-xs text-emerald-400">99.9%</span>
</div>
<div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
<div className="bg-emerald-500 w-[99%] h-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
</div>
<div className="grid grid-cols-2 gap-4 mt-4">
<div>
<span className="block text-[10px] text-white/40 uppercase tracking-wider">
                Apogee
              </span>
<span className="text-sm text-white font-mono">402km</span>
</div>
<div>
<span className="block text-[10px] text-white/40 uppercase tracking-wider">
                Perigee
              </span>
<span className="text-sm text-white font-mono">398km</span>
</div>
</div>
</div>
</div>
</header>
<div className="w-full bg-neutral-950 py-12 flex items-center justify-center relative z-20 overflow-hidden">
<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/10"></div>
<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent w-3/4 mx-auto"></div>
<div className="relative bg-neutral-950 p-3 border border-white/10 rounded-full flex items-center justify-center shadow-2xl">
<div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.6)] animate-pulse"></div>
</div>
</div>

<section className="relative py-24 md:py-32 bg-neutral-950 text-white overflow-hidden selection:bg-emerald-500/30" id="projects">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[600px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none opacity-40 mix-blend-screen animate-pulse"></div>
<div className="absolute bottom-0 right-0 w-[60vw] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none opacity-30 mix-blend-screen"></div>
<div className="md:px-12 z-10 w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="max-w-3xl relative animate-on-scroll">
<div className="absolute -left-4 md:-left-8 top-1 bottom-1 w-1 bg-gradient-to-b from-emerald-500 to-transparent opacity-50"></div>
<div className="flex items-center gap-3 mb-4 text-emerald-400">
<svg className="animate-spin-slow" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400/80">
                Mission Log 2024
              </span>
</div>
<h2 className="text-5xl md:text-8xl font-bricolage font-medium tracking-tighter text-white leading-[0.9]">
              Stellar
              <span className="text-white/20 font-light">Range.</span>
</h2>
</div>

<div className="relative group animate-on-scroll delay-100">
<div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
<div className="relative flex items-center p-1.5 rounded-full bg-neutral-900/90 border border-white/10 backdrop-blur-xl shadow-2xl">
<button className="filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 bg-white text-neutral-950 shadow-lg shadow-white/5" id="filter-all" onclick="updateMissionFilter('all')">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
</svg>
                All Missions
              </button>
<button className="filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 text-white/50 hover:text-white hover:bg-white/5" id="filter-deep-space" onclick="updateMissionFilter('deep-space')">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
</svg>
                Deep Space
              </button>
<button className="filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 text-white/50 hover:text-white hover:bg-white/5" id="filter-orbital" onclick="updateMissionFilter('orbital')">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<path d="M12 3v3"></path>
<path d="M16.5 7.5 14 10"></path>
<path d="M19 12h3"></path>
<path d="M16.5 16.5 14 14"></path>
<path d="M12 21v-3"></path>
<path d="M7.5 16.5 10 14"></path>
<path d="M5 12H2"></path>
<path d="M7.5 7.5 10 10"></path>
</svg>
                Orbital
              </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" id="missions-grid">

<div className="group relative md:col-span-8 md:row-span-2 rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:border-white/20 origin-left animate-on-scroll delay-200" id="card-ares">
<div className="absolute inset-0 z-0">
<img alt="Ares Heavy Launch" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 ease-out grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ea262fd9-14f0-4917-be69-86fd3b302ccd_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
</div>

<div className="absolute top-8 left-8 right-8 flex justify-between items-start z-20">
<div className="flex gap-2">
<span className="px-3 py-1 bg-white/10 backdrop-blur border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-mono text-white/80">
                  MK-IV Config
                </span>
<span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-[10px] uppercase tracking-widest font-mono text-emerald-400 flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                  Active
                </span>
</div>
<div className="text-[10px] font-mono text-white/40 tabular-nums text-right hidden sm:block">
                LAT: 28.5721° N LNG: 80.6480° W
              </div>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
<div className="max-w-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="text-[8rem] md:text-[12rem] font-bricolage font-bold text-white/5 absolute -top-32 md:-top-40 -left-6 pointer-events-none select-none tracking-tighter">
                  01
                </div>
<h3 className="text-4xl md:text-6xl font-bricolage font-medium text-white mb-4 relative tracking-tight">
                  Ares Heavy
                </h3>
<p className="text-white/70 text-lg font-light leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md">
                  Designed for super-heavy payloads to LEO and lunar transfer
                  injection. The backbone of interstellar logistics
                  infrastructure.
                </p>
<div className="flex items-center gap-8 pt-6 border-t border-white/10 text-xs font-mono text-white/40 uppercase tracking-widest">
<div>
<span className="block text-white mb-1">Payload</span>
                    45,000 KG
                  </div>
<div>
<span className="block text-white mb-1">Thrust</span>
                    7.2 MN
                  </div>
<div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors bg-white/5 backdrop-blur-md">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 md:row-span-2 flex flex-col gap-6 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" id="stack-right">

<div className="group relative flex-1 rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/10 shadow-xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:border-white/20 origin-top animate-on-scroll delay-300" id="card-gateway">
<div className="absolute inset-0 z-0">
<img alt="Gateway Station" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ee3841e8-ef6d-45b3-9f33-9df069f9708a_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
</div>
<div className="absolute top-6 right-6 z-20">
<div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-colors">
<span className="font-bricolage text-sm font-medium">02</span>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex items-center gap-2 mb-3">
<span className="w-1.5 h-1.5 bg-amber-500 rounded-full shadow-[0_0_10px_rgb(245,158,11)]"></span>
<span className="text-[10px] uppercase text-amber-400 tracking-widest font-mono">
                      Orbital Habitat
                    </span>
</div>
<h3 className="text-3xl font-bricolage font-medium text-white mb-2 tracking-tight">
                    Gateway Station
                  </h3>
<p className="text-white/60 text-sm leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Permanent staging post for deep space operations. Currently
                    housing a crew of 24.
                  </p>
</div>
</div>
</div>

<div className="group relative flex-1 rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/10 shadow-xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:border-white/20 origin-bottom animate-on-scroll delay-400" id="card-titan">
<div className="absolute inset-0 z-0">
<img alt="Titan Rover" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/68494c15-da1d-47aa-a9ac-b6ee8c9286cc_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
</div>
<div className="absolute top-6 right-6 z-20">
<div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-colors">
<span className="font-bricolage text-sm font-medium">03</span>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex items-center gap-2 mb-3">
<span className="w-1.5 h-1.5 bg-amber-500 rounded-full shadow-[0_0_10px_rgb(245,158,11)]"></span>
<span className="text-[10px] uppercase text-amber-400 tracking-widest font-mono">
                      Surface Ops
                    </span>
</div>
<h3 className="text-3xl font-bricolage font-medium text-white mb-2 tracking-tight">
                    Titan Rover
                  </h3>
<p className="text-white/60 text-sm leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Next-generation autonomous vehicle equipped with advanced
                    methane-cycle analysis tools.
                  </p>
</div>
</div>
</div>
</div>
</div>

<div className="mt-20 flex justify-center">
<a className="group inline-flex items-center gap-3 px-6 py-3 rounded-full text-xs font-mono text-white/60 hover:text-white hover:bg-white/5 transition-all uppercase tracking-widest border border-transparent hover:border-white/10" href="#">
            View Complete Manifest
            <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

</div>
</section>
<div className="w-full bg-neutral-950 py-12 flex items-center justify-center relative z-20 overflow-hidden">
<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/5"></div>
<div className="relative bg-neutral-950 px-6 py-2 border border-white/5 rounded-full flex items-center gap-4">
<div className="flex gap-1">
<div className="w-0.5 h-3 bg-white/20"></div>
<div className="w-0.5 h-3 bg-white/20"></div>
</div>
<span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30">
          Sync
        </span>
<div className="flex gap-1">
<div className="w-0.5 h-3 bg-white/20"></div>
<div className="w-0.5 h-3 bg-emerald-500"></div>
</div>
</div>
</div>
<section className="py-24 bg-neutral-900 text-white relative overflow-hidden" id="infrastructure">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<div className="flex items-center gap-3 mb-6">
<span className="w-8 h-[1px] bg-emerald-500"></span>
<span className="text-emerald-500 text-xs font-mono uppercase tracking-widest">
                Global Network
              </span>
</div>
<h2 className="text-4xl md:text-6xl font-bricolage font-medium mb-6 leading-tight animate-on-scroll">
              Interplanetary
              <br/>
<span className="text-white/40">Infrastructure</span>
</h2>
<p className="text-white/60 text-lg mb-8 leading-relaxed font-light animate-on-scroll delay-100">
              Beyond vehicles, we build the ribbons of commerce that tie the
              planets together. From orbital shipyards to lunar helium
              extraction plants, our footprint ensures continuous supply chain
              dominance.
            </p>
<div className="space-y-6">
<div className="flex gap-4 group cursor-default animate-on-scroll delay-200">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-white" icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="text-xl font-medium mb-1 font-bricolage">
                    Zero-G Manufactory
                  </h4>
<p className="text-sm text-white/50">
                    Production of fiber optics and bio-organs in vacuum
                    environments.
                  </p>
</div>
</div>
<div className="flex gap-4 group cursor-default animate-on-scroll delay-300">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-white" icon="solar:bolt-circle-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="text-xl font-medium mb-1 font-bricolage">
                    He-3 Energy Grid
                  </h4>
<p className="text-sm text-white/50">
                    Powering 40% of Earth's consumption via lunar mining
                    operations.
                  </p>
</div>
</div>
</div>
<button className="mt-10 px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2 group animate-on-scroll delay-300">
              View Infrastructure Map
              <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="relative lg:h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 group animate-on-scroll h-[300px] md:h-[500px]">
<img alt="Orbital Station" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ee3841e8-ef6d-45b3-9f33-9df069f9708a_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-neutral-900/20"></div>
<div className="absolute top-1/4 left-1/3 group/spot">
<div className="w-4 h-4 bg-emerald-500 rounded-full animate-ping absolute inset-0"></div>
<div className="w-4 h-4 bg-emerald-500 rounded-full relative z-10 cursor-pointer border-2 border-white shadow-[0_0_20px_rgba(16,185,129,0.5)]"></div>
<div className="absolute left-6 top-0 bg-black/80 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10 w-56 opacity-0 group-hover/spot:opacity-100 transition-all duration-300 translate-y-2 group-hover/spot:translate-y-0 pointer-events-none">
<span className="text-xs font-mono text-emerald-400 block mb-1 uppercase tracking-wider">
                  Docking Bay A
                </span>
<span className="text-[11px] text-white/70 block">
                  Capacity: 4 Heavy Cruisers
                </span>
<span className="text-[10px] text-white/40 block mt-1">
                  Status: Operational
                </span>
</div>
</div>
<div className="absolute bottom-1/3 right-1/4 group/spot">
<div className="w-4 h-4 bg-blue-500 rounded-full animate-ping absolute inset-0 [animation-delay:0.5s]"></div>
<div className="w-4 h-4 bg-blue-500 rounded-full relative z-10 cursor-pointer border-2 border-white shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
<div className="absolute right-6 top-0 bg-black/80 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10 w-56 opacity-0 group-hover/spot:opacity-100 transition-all duration-300 translate-y-2 group-hover/spot:translate-y-0 pointer-events-none text-right">
<span className="text-xs font-mono text-blue-400 block mb-1 uppercase tracking-wider">
                  Command Spire
                </span>
<span className="text-[11px] text-white/70 block">
                  Personnel: 420 active
                </span>
<span className="text-[10px] text-white/40 block mt-1">
                  Security: Level 5
                </span>
</div>
</div>
</div>
</div>
</div>
</section>
<div className="w-full bg-neutral-950 py-12 flex items-center justify-center relative z-20 overflow-hidden">
<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/10"></div>
<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent w-3/4 mx-auto"></div>
<div className="relative bg-neutral-950 p-3 border border-white/10 rounded-full flex items-center justify-center shadow-2xl">
<div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.6)] animate-pulse"></div>
</div>
</div>
<section className="py-32 bg-neutral-950 relative overflow-hidden border-t border-white/5" id="timeline">
<div className="absolute inset-0 z-0 opacity-20" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-24 animate-on-scroll">
<span className="text-emerald-500 font-mono text-xs uppercase tracking-widest">
            Chronology
          </span>
<h2 className="text-5xl md:text-7xl font-bricolage text-white mt-4 font-semibold tracking-tight">
            The Ascent
          </h2>
</div>
<div className="relative">
<div className="flex flex-col md:flex-row items-center justify-between mb-24 group">
<div className="w-full md:w-5/12 pr-0 md:pr-12 order-2 md:order-1 animate-on-scroll text-center md:text-right" data-anim="slide-right">
<h3 className="text-3xl text-white font-bricolage">Foundation</h3>
<p className="text-white/40 mt-2 font-light">
                The coalition is formed in the ruins of the old world, uniting
                fragmented space agencies.
              </p>
</div>
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/20 z-10 flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] order-1 md:order-2 mb-6 md:mb-0 relative">
<span className="font-mono text-xs">30</span>
</div>
<div className="w-full md:w-5/12 pl-0 md:pl-12 order-3 animate-on-scroll" data-anim="slide-left">
<span className="text-8xl font-bricolage text-white/5 font-bold absolute -translate-y-12 select-none pointer-events-none">
                2030
              </span>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between mb-24 group">
<div className="w-full md:w-5/12 text-right pr-0 md:pr-12 order-2 md:order-1 animate-on-scroll" data-anim="slide-right">
<span className="text-8xl font-bricolage text-white/5 font-bold absolute right-6 md:right-12 -translate-y-12 select-none pointer-events-none">
                2042
              </span>
</div>
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/20 z-10 flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] order-1 md:order-2 mb-6 md:mb-0 relative">
<span className="font-mono text-xs">42</span>
</div>
<div className="w-full md:w-5/12 pl-0 md:pl-12 order-3 animate-on-scroll text-center md:text-left" data-anim="slide-left">
<h3 className="text-3xl text-white font-bricolage">First Light</h3>
<p className="text-white/40 mt-2 font-light">
                The Ares Heavy prototype breaks atmosphere, carrying the first
                permanent orbital modules.
              </p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between group">
<div className="w-full md:w-5/12 pr-0 md:pr-12 order-2 md:order-1 animate-on-scroll text-center md:text-right" data-anim="slide-right">
<h3 className="text-3xl text-white font-bricolage">Mars Colony</h3>
<p className="text-white/40 mt-2 font-light">
                Self-sustaining habitats established in Cydonia. The first
                off-world generation is born.
              </p>
</div>
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/20 z-10 flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] order-1 md:order-2 mb-6 md:mb-0 relative">
<span className="font-mono text-xs">55</span>
</div>
<div className="w-full md:w-5/12 pl-0 md:pl-12 order-3 animate-on-scroll" data-anim="slide-left">
<span className="text-8xl font-bricolage text-white/5 font-bold absolute -translate-y-12 select-none pointer-events-none">
                2055
              </span>
</div>
</div>
</div>
</div>
</section>
<div className="w-full bg-neutral-950 py-12 flex items-center justify-center relative z-20 overflow-hidden">
<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/5"></div>
<div className="relative bg-neutral-950 px-6 py-2 border border-white/5 rounded-full flex items-center gap-4">
<div className="flex gap-1">
<div className="w-0.5 h-3 bg-white/20"></div>
<div className="w-0.5 h-3 bg-white/20"></div>
</div>
<span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30">
          Log
        </span>
<div className="flex gap-1">
<div className="w-0.5 h-3 bg-white/20"></div>
<div className="w-0.5 h-3 bg-emerald-500"></div>
</div>
</div>
</div>

<section className="bg-neutral-950 border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative" id="process">

<div className="absolute top-12 right-6 md:right-12 z-0 opacity-10 font-bricolage font-bold text-[8rem] md:text-[10rem] leading-none text-white pointer-events-none select-none tracking-tighter">
        VOL. III
      </div>
<div className="z-10 w-full max-w-5xl mr-auto ml-auto relative">
<style className="">
          @keyframes fanSlideIn {
            0% { opacity: 0; transform: translateY(40px) rotate(2deg) scale(0.96); filter: blur(4px); }
            100% { opacity: 1; transform: translateY(0) rotate(0) scale(1); filter: blur(0); }
          }
          @keyframes barEqualizer {
            0%, 100% { transform: scaleY(1); }
            50% { transform: scaleY(0.3); }
          }
          .bar-anim {
            transform-origin: bottom;
            animation-name: barEqualizer;
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            animation-iteration-count: infinite;
          }
        </style>
<div className="text-center mb-16 animate-on-scroll" style={{animation: 'fanSlideIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.1s both'}}>
<h3 className="text-3xl md:text-5xl font-bricolage font-light text-white mb-4 tracking-tight">
            Hull Integrity
          </h3>
<p className="text-white/50">
            Composite shielding engineered for vacuum survival.
          </p>
</div>
<div className="flex flex-col gap-4">

<div className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-4 md:p-6 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl transition-all duration-300 animate-on-scroll" style={{animation: 'fanSlideIn 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) 0.25s both'}}>

<div className="col-span-1 md:col-span-4 flex items-center gap-6">
<div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-xl overflow-hidden shrink-0 relative flex items-center justify-center">
<img alt="Concrete Texture" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/44d41d4e-32d5-4432-bf2b-95b01b1df21f_320w.webp"/>
</div>
<div className="">
<iconify-icon className="text-white/60 mb-1" icon="solar:layers-minimalistic-linear" width="32"></iconify-icon>
<h4 className="text-xl text-white font-bricolage font-light">
                  Ceramic Shield
                </h4>
<p className="text-xs text-white/40 mt-1 uppercase tracking-wider">
                  Thermal Class A
                </p>
</div>
</div>

<div className="col-span-1 md:col-span-6 grid gap-y-4 gap-x-2 border-l border-white/10 pl-6 grid-cols-2 sm:grid-cols-3">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-wide">
<iconify-icon className="" icon="solar:scale-linear" width="14"></iconify-icon>
                  Weight
                </div>
<span className="text-white text-sm">2800 kg/m³</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-wide">
<iconify-icon className="" icon="solar:map-point-linear" width="14"></iconify-icon>
                  Origin
                </div>
<span className="text-white text-sm">Tuscany</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-wide">
<iconify-icon className="" icon="solar:shield-check-linear" width="14"></iconify-icon>
                  Rating
                </div>
<span className="text-white text-sm">Class A1 Fire</span>
</div>
<div className="col-span-3 mt-2">
<div className="flex items-center justify-between text-xs text-white/30 mb-1">
<span className="">Acoustic Damping</span>
<span>Freq. Response</span>
</div>
<div className="w-full h-8 flex items-end gap-0.5 opacity-50">
<div className="w-1 bg-white h-[40%] rounded-t-sm bar-anim" style={{animationDuration: '2.1s', animationDelay: '-0.5s'}}></div>
<div className="w-1 bg-white h-[60%] rounded-t-sm bar-anim" style={{animationDuration: '1.8s', animationDelay: '-1.2s'}}></div>
<div className="w-1 bg-white h-[80%] rounded-t-sm bar-anim" style={{animationDuration: '2.5s', animationDelay: '-0.1s'}}></div>
<div className="w-1 bg-white h-[65%] rounded-t-sm bar-anim" style={{animationDuration: '1.9s', animationDelay: '-2.3s'}}></div>
<div className="w-1 bg-white h-[50%] rounded-t-sm bar-anim" style={{animationDuration: '2.3s', animationDelay: '-1.5s'}}></div>
<div className="w-1 bg-white h-[45%] rounded-t-sm bar-anim" style={{animationDuration: '1.6s', animationDelay: '-0.8s'}}></div>
<div className="w-1 bg-white h-[60%] rounded-t-sm bar-anim" style={{animationDuration: '2.2s', animationDelay: '-1.9s'}}></div>
<div className="w-1 bg-white h-[75%] rounded-t-sm bar-anim" style={{animationDuration: '1.7s', animationDelay: '-0.3s'}}></div>
<div className="w-1 bg-white h-[90%] rounded-t-sm bar-anim" style={{animationDuration: '2.6s', animationDelay: '-2.1s'}}></div>
<div className="w-1 bg-white h-[70%] rounded-t-sm bar-anim" style={{animationDuration: '2.0s', animationDelay: '-0.9s'}}></div>
<div className="w-1 bg-white h-[55%] rounded-t-sm bar-anim" style={{animationDuration: '1.5s', animationDelay: '-1.4s'}}></div>
<div className="w-1 bg-white h-[40%] rounded-t-sm bar-anim" style={{animationDuration: '2.4s', animationDelay: '-0.6s'}}></div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 flex items-center justify-between md:justify-end gap-6">
<span className="text-xl font-serif italic text-white">Tier S</span>
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors group-hover:border-white">
<iconify-icon className="" icon="solar:file-download-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-4 md:p-6 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl transition-all duration-300 animate-on-scroll" style={{animation: 'fanSlideIn 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) 0.4s both'}}>

<div className="col-span-1 md:col-span-4 flex items-center gap-6">
<div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-xl overflow-hidden shrink-0 relative flex items-center justify-center">
<img alt="Timber Texture" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a5122f84-43cb-4170-94c3-aded75f0d3ed_320w.webp"/>
</div>
<div>
<iconify-icon className="text-white/60 mb-1" icon="solar:tree-linear" width="32"></iconify-icon>
<h4 className="text-xl text-white font-bricolage font-light">
                  Solar Array
                </h4>
<p className="text-xs text-white/40 mt-1 uppercase tracking-wider">
                  Efficiency 48%
                </p>
</div>
</div>

<div className="col-span-1 md:col-span-6 grid gap-y-4 gap-x-2 border-l border-white/10 pl-6 grid-cols-2 sm:grid-cols-3">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-wide">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
                  Life
                </div>
<span className="text-white text-sm">100+ Years</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-wide">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
                  Recycled
                </div>
<span className="text-white text-sm">95% Content</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-wide">
<iconify-icon icon="solar:umbrella-linear" width="14"></iconify-icon>
                  Coating
                </div>
<span className="text-white text-sm">Self-Healing</span>
</div>
<div className="col-span-3 mt-2">
<div className="flex items-center justify-between text-xs text-white/30 mb-1">
<span className="">Reflectivity Index</span>
<span>Solar Gain</span>
</div>
<div className="w-full h-8 flex items-end gap-0.5 opacity-50">
<div className="w-1 bg-white h-[50%] rounded-t-sm bar-anim" style={{animationDuration: '2.2s', animationDelay: '-0.3s'}}></div>
<div className="w-1 bg-white h-[52%] rounded-t-sm bar-anim" style={{animationDuration: '1.9s', animationDelay: '-1.5s'}}></div>
<div className="w-1 bg-white h-[55%] rounded-t-sm bar-anim" style={{animationDuration: '2.4s', animationDelay: '-0.7s'}}></div>
<div className="w-1 bg-white h-[58%] rounded-t-sm bar-anim" style={{animationDuration: '1.7s', animationDelay: '-2.0s'}}></div>
<div className="w-1 bg-white h-[60%] rounded-t-sm bar-anim" style={{animationDuration: '2.5s', animationDelay: '-0.4s'}}></div>
<div className="w-1 bg-white h-[60%] rounded-t-sm bar-anim" style={{animationDuration: '1.8s', animationDelay: '-1.1s'}}></div>
<div className="w-1 bg-white h-[60%] rounded-t-sm bar-anim" style={{animationDuration: '2.1s', animationDelay: '-0.9s'}}></div>
<div className="w-1 bg-white h-[58%] rounded-t-sm bar-anim" style={{animationDuration: '2.3s', animationDelay: '-1.8s'}}></div>
<div className="w-1 bg-white h-[55%] rounded-t-sm bar-anim" style={{animationDuration: '1.6s', animationDelay: '-0.2s'}}></div>
<div className="w-1 bg-white h-[52%] rounded-t-sm bar-anim" style={{animationDuration: '2.0s', animationDelay: '-1.3s'}}></div>
<div className="w-1 bg-white h-[50%] rounded-t-sm bar-anim" style={{animationDuration: '1.9s', animationDelay: '-0.6s'}}></div>
<div className="w-1 bg-white h-[48%] rounded-t-sm bar-anim" style={{animationDuration: '2.2s', animationDelay: '-1.9s'}}></div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 flex items-center justify-between md:justify-end gap-6">
<span className="text-xl font-serif italic text-white">Tier A</span>
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors group-hover:border-white">
<iconify-icon icon="solar:file-download-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-4 md:p-6 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl transition-all duration-300 animate-on-scroll" style={{animation: 'fanSlideIn 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) 0.55s both'}}>

<div className="col-span-1 md:col-span-4 flex items-center gap-6">
<div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-xl overflow-hidden shrink-0 relative flex items-center justify-center">
<img alt="Graphene Texture" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7de1229a-6a54-423d-a41c-2377d871bf2c_320w.jpg"/>
</div>
<div className="">
<iconify-icon className="text-white/60 mb-1" icon="solar:atom-linear" width="32"></iconify-icon>
<h4 className="text-xl text-white font-bricolage font-light">
                  Graphene Weave
                </h4>
<p className="text-xs text-white/40 mt-1 uppercase tracking-wider">
                  Tensile Strength S+
                </p>
</div>
</div>

<div className="col-span-1 md:col-span-6 grid gap-y-4 gap-x-2 border-l border-white/10 pl-6 grid-cols-2 sm:grid-cols-3">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-wide">
<iconify-icon icon="solar:ruler-angular-linear" width="14"></iconify-icon>
                  Width
                </div>
<span className="text-white text-sm">1 Atom</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-wide">
<iconify-icon icon="solar:graph-up-linear" width="14"></iconify-icon>
                  Conductivity
                </div>
<span className="text-white text-sm">Super</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-wide">
<iconify-icon icon="solar:shield-warning-linear" width="14"></iconify-icon>
                  Grade
                </div>
<span className="text-white text-sm">Mil-Spec 5</span>
</div>
<div className="col-span-3 mt-2">
<div className="flex items-center justify-between text-xs text-white/30 mb-1">
<span>Structural Integrity</span>
<span>Mass Ratio</span>
</div>
<div className="w-full h-8 flex items-end gap-0.5 opacity-50">
<div className="w-1 bg-white h-[90%] rounded-t-sm bar-anim" style={{animationDuration: '2.0s', animationDelay: '-0.1s'}}></div>
<div className="w-1 bg-white h-[95%] rounded-t-sm bar-anim" style={{animationDuration: '2.3s', animationDelay: '-1.2s'}}></div>
<div className="w-1 bg-white h-[92%] rounded-t-sm bar-anim" style={{animationDuration: '1.8s', animationDelay: '-0.7s'}}></div>
<div className="w-1 bg-white h-[98%] rounded-t-sm bar-anim" style={{animationDuration: '2.5s', animationDelay: '-2.0s'}}></div>
<div className="w-1 bg-white h-[100%] rounded-t-sm bar-anim" style={{animationDuration: '2.1s', animationDelay: '-1.5s'}}></div>
<div className="w-1 bg-white h-[98%] rounded-t-sm bar-anim" style={{animationDuration: '1.9s', animationDelay: '-0.3s'}}></div>
<div className="w-1 bg-white h-[96%] rounded-t-sm bar-anim" style={{animationDuration: '2.4s', animationDelay: '-1.8s'}}></div>
<div className="w-1 bg-white h-[94%] rounded-t-sm bar-anim" style={{animationDuration: '1.7s', animationDelay: '-0.9s'}}></div>
<div className="w-1 bg-white h-[92%] rounded-t-sm bar-anim" style={{animationDuration: '2.2s', animationDelay: '-2.2s'}}></div>
<div className="w-1 bg-white h-[95%] rounded-t-sm bar-anim" style={{animationDuration: '2.0s', animationDelay: '-0.5s'}}></div>
<div className="w-1 bg-white h-[98%] rounded-t-sm bar-anim" style={{animationDuration: '1.6s', animationDelay: '-1.1s'}}></div>
<div className="w-1 bg-white h-[99%] rounded-t-sm bar-anim" style={{animationDuration: '2.5s', animationDelay: '-1.9s'}}></div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 flex items-center justify-between md:justify-end gap-6">
<span className="text-xl font-serif italic text-white">Tier X</span>
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors group-hover:border-white">
<iconify-icon icon="solar:file-download-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>
<div className="w-full bg-neutral-950 py-12 flex items-center justify-center relative z-20 overflow-hidden">
<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/10"></div>
<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent w-3/4 mx-auto"></div>
<div className="relative bg-neutral-950 p-3 border border-white/10 rounded-full flex items-center justify-center shadow-2xl">
<div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.6)] animate-pulse"></div>
</div>
</div>
<section className="py-32 bg-black relative overflow-hidden border-t border-white/5" id="systems">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="flex flex-col md:flex-row justify-between items-end mb-16 animate-on-scroll">
<div className="max-w-2xl">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-[1px] bg-white/20"></div>
<span className="text-xs font-mono uppercase tracking-widest text-white/50">
                System Architecture
              </span>
</div>
<h2 className="text-5xl md:text-7xl font-bricolage text-white mb-6 tracking-tighter leading-none">
              Core Systems
            </h2>
<p className="text-lg text-white/50 font-light leading-relaxed max-w-lg">
              Proprietary technology engineered for zero-tolerance environments.
              The infrastructure that powers the void.
            </p>
</div>
<a className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-sm font-medium hover:bg-neutral-200 transition-all mt-8 md:mt-0" href="#">
<span>View Schematics</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">

<div className="group relative h-[500px] bg-neutral-900/40 border border-white/10 rounded-3xl p-8 overflow-hidden hover:bg-neutral-900/60 transition-all duration-500 hover:border-white/20 backdrop-blur-sm animate-on-scroll delay-100">

<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

<div className="relative z-10 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-auto text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all duration-500">
<iconify-icon className="text-2xl" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none perspective-distant">
<div className="relative w-[300px] h-[300px] group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 rounded-full border border-emerald-500/30 animate-[spin_10s_linear_infinite]"></div>
<div className="absolute w-40 h-40 rounded-full border border-dashed border-emerald-500/20 animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute w-56 h-56 rounded-full border border-emerald-500/10 border-t-emerald-500/40 animate-[spin_20s_linear_infinite]"></div>

<div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent animate-pulse top-1/2 -translate-y-1/2 rotate-45"></div>
<div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent animate-pulse top-1/2 -translate-y-1/2 -rotate-45"></div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_15px_rgba(52,211,153,0.8)] animate-ping"></div>
</div>

<div className="absolute top-10 right-20 text-[8px] font-mono text-emerald-500/60 rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Processing...
                </div>
<div className="absolute bottom-10 left-20 text-[8px] font-mono text-emerald-500/60 -rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Target Lock
                </div>
</div>
</div>

<div className="relative z-10 mt-auto pt-32">
<div className="flex items-center gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgb(16,185,129)] animate-pulse"></span>
<span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                  Online
                </span>
</div>
<h3 className="text-3xl text-white font-bricolage mb-3 tracking-tight group-hover:text-emerald-50 transition-colors">
                Nav-AI Core
              </h3>
<p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                Quantum probabilistic navigation calculating FTL-adjacent travel
                vectors in real-time.
              </p>

<div className="w-full bg-white/5 h-[2px] mt-6 relative overflow-hidden rounded-full">
<div className="absolute inset-0 bg-emerald-500 w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"></div>
</div>
</div>
</div>

<div className="group relative h-[500px] bg-neutral-900/40 border border-white/10 rounded-3xl p-8 overflow-hidden hover:bg-neutral-900/60 transition-all duration-500 hover:border-white/20 backdrop-blur-sm animate-on-scroll delay-200">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-auto text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-500">
<iconify-icon className="text-2xl" icon="solar:shield-star-linear"></iconify-icon>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none perspective-midrange">
<div className="relative w-[260px] h-[260px] group-hover:scale-105 transition-transform duration-1000 group-hover:rotate-x-15 group-hover:rotate-y-15 transform-style-preserve-3d">

<svg className="absolute inset-0 w-full h-full text-blue-500 animate-[spin_30s_linear_infinite]" fill="none" viewbox="0 0 100 100">
<path className="opacity-30" d="M50 5 L89 27.5 V72.5 L50 95 L11 72.5 V27.5 Z" stroke="currentColor" stroke-dasharray="2 2" strokeWidth="0.2"></path>
<path className="opacity-50" d="M50 15 L80.3 32.5 V67.5 L50 85 L19.7 67.5 V32.5 Z" stroke="currentColor" strokeWidth="0.3"></path>
</svg>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 border-[0.5px] border-blue-400/30 rotate-45 animate-[spin_8s_linear_infinite]"></div>
<div className="absolute w-32 h-32 border-[0.5px] border-blue-400/30 -rotate-45 animate-[spin_8s_linear_infinite_reverse]"></div>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 via-blue-500/10 to-blue-500/0 animate-[shimmerMove_3s_ease-in-out_infinite] opacity-50 skew-y-12"></div>
</div>
</div>
<div className="relative z-10 mt-auto pt-32">
<div className="flex items-center gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgb(59,130,246)] animate-pulse"></span>
<span className="text-[10px] font-mono uppercase tracking-widest text-blue-400">
                  Integrity 100%
                </span>
</div>
<h3 className="text-3xl text-white font-bricolage mb-3 tracking-tight group-hover:text-blue-50 transition-colors">
                Aegis Hull
              </h3>
<p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                Self-healing nanomaterial composite with active radiation
                dampening fields.
              </p>
<div className="w-full bg-white/5 h-[2px] mt-6 relative overflow-hidden rounded-full">
<div className="absolute inset-0 bg-blue-500 w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"></div>
</div>
</div>
</div>

<div className="group relative h-[500px] bg-neutral-900/40 border border-white/10 rounded-3xl p-8 overflow-hidden hover:bg-neutral-900/60 transition-all duration-500 hover:border-white/20 backdrop-blur-sm animate-on-scroll delay-300">
<div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-auto text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/10 group-hover:border-purple-500/20 transition-all duration-500">
<iconify-icon className="text-2xl" icon="solar:atom-linear"></iconify-icon>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none">
<div className="relative w-[300px] h-[300px] group-hover:scale-110 transition-transform duration-1000">

<svg className="absolute inset-0 w-full h-full text-purple-500 animate-[spin_10s_linear_infinite]" fill="none" viewbox="0 0 100 100">
<ellipse className="opacity-40" cx="50" cy="50" rx="45" ry="15" stroke="currentColor" strokeWidth="0.3"></ellipse>
<ellipse className="opacity-40" cx="50" cy="50" rx="45" ry="15" stroke="currentColor" strokeWidth="0.3" transform="rotate(60 50 50)"></ellipse>
<ellipse className="opacity-40" cx="50" cy="50" rx="45" ry="15" stroke="currentColor" strokeWidth="0.3" transform="rotate(120 50 50)"></ellipse>
</svg>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-purple-500/10 blur-xl animate-pulse"></div>
<div className="w-8 h-8 rounded-full bg-purple-400/20 blur-md animate-ping"></div>
<div className="w-2 h-2 rounded-full bg-white shadow-[0_0_20px_rgb(168,85,247)]"></div>
</div>

<div className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 border border-dashed border-purple-500/20 rounded-full animate-[spin_4s_linear_infinite]"></div>
</div>
</div>
<div className="relative z-10 mt-auto pt-32">
<div className="flex items-center gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
<span className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgb(168,85,247)] animate-pulse"></span>
<span className="text-[10px] font-mono uppercase tracking-widest text-purple-400">
                  Stable
                </span>
</div>
<h3 className="text-3xl text-white font-bricolage mb-3 tracking-tight group-hover:text-purple-50 transition-colors">
                Fusion Drive
              </h3>
<p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                Compact magnetic confinement fusion delivering continuous 3.5g
                thrust.
              </p>
<div className="w-full bg-white/5 h-[2px] mt-6 relative overflow-hidden rounded-full">
<div className="absolute inset-0 bg-purple-500 w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"></div>
</div>
</div>
</div>
</div>
</div>
</section>
<div className="w-full bg-neutral-950 py-12 flex items-center justify-center relative z-20 overflow-hidden">
<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/5"></div>
<div className="relative bg-neutral-950 px-6 py-2 border border-white/5 rounded-full flex items-center gap-4">
<div className="flex gap-1">
<div className="w-0.5 h-3 bg-white/20"></div>
<div className="w-0.5 h-3 bg-white/20"></div>
</div>
<span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30">
          Scan
        </span>
<div className="flex gap-1">
<div className="w-0.5 h-3 bg-white/20"></div>
<div className="w-0.5 h-3 bg-emerald-500"></div>
</div>
</div>
</div>
<section className="bg-neutral-950 border-white/5 border-t pt-20 pb-20">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-12">
<span className="text-xs uppercase tracking-[0.2em] text-white/30">
            Trusted By The Coalition
          </span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 animate-on-scroll delay-200">
<div className="flex items-center justify-center h-12 text-white font-bricolage font-bold text-xl tracking-tighter">
            NASA
            <span className="text-xs font-normal align-top ml-1 opacity-50">
              Adv
            </span>
</div>
<div className="flex items-center justify-center h-12 text-white font-bricolage font-bold text-xl tracking-tighter">
            SpaceX
          </div>
<div className="flex items-center justify-center h-12 text-white font-bricolage font-bold text-xl tracking-tighter">
            BLUE
          </div>
<div className="flex items-center justify-center h-12 text-white font-bricolage font-bold text-xl tracking-tighter">
            ESA
          </div>
<div className="flex items-center justify-center h-12 text-white font-bricolage font-bold text-xl tracking-tighter">
            AXIOM
          </div>
<div className="flex items-center justify-center h-12 text-white font-bricolage font-bold text-xl tracking-tighter">
            JAXA
          </div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/5 mt-20 pt-12 gap-x-8 gap-y-8">
<div className="text-center">
<div className="text-4xl md:text-5xl font-bricolage text-white font-light mb-2">
<span>4.2</span>
<span className="text-lg text-emerald-500">%</span>
</div>
<div className="text-xs uppercase tracking-widest text-white/40">
              Market Growth
            </div>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-bricolage text-white font-light mb-2">
<span>128</span>
</div>
<div className="text-xs uppercase tracking-widest text-white/40">
              Active Missions
            </div>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-bricolage text-white font-light mb-2">
<span>2.0</span>
</div>
<div className="text-xs uppercase tracking-widest text-white/40">
              Failure Rate
            </div>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-bricolage text-white font-light mb-2">
<span>24</span>
<span className="text-lg text-emerald-500">/7</span>
</div>
<div className="text-xs uppercase tracking-widest text-white/40">
              Command Support
            </div>
</div>
</div>
</div>
</section>

<div className="w-full bg-neutral-950 py-12 flex items-center justify-center relative z-20 overflow-hidden">
<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/10"></div>
<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent w-3/4 mx-auto"></div>
<div className="relative bg-neutral-950 p-3 border border-white/10 rounded-full flex items-center justify-center shadow-2xl">
<div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.6)] animate-pulse"></div>
</div>
</div>
<section className="bg-neutral-950 border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative" id="careers">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
<div className="z-10 w-full max-w-7xl mr-auto ml-auto relative">

<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
<div className="max-w-3xl animate-on-scroll">
<div className="flex items-center gap-3 mb-6">
<span className="w-8 h-[1px] bg-emerald-500"></span>
<span className="text-emerald-500 text-xs font-mono uppercase tracking-widest">
                Open Positions
              </span>
</div>
<h2 className="text-5xl md:text-7xl font-bricolage font-medium tracking-tighter text-white leading-[0.9]">
              Join the
              <span className="text-white/30">Vanguard.</span>
</h2>
</div>
<p className="text-neutral-400 text-lg max-w-md font-light leading-relaxed mb-2">
            We are searching for pioneers willing to go where no human has gone
            before. The horizon is just a starting line.
          </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-8 flex flex-col gap-4">

<a className="group relative block p-[1px] rounded-3xl bg-gradient-to-br from-white/10 to-white/0 hover:from-white/20 hover:to-white/5 transition-all duration-500 animate-on-scroll delay-100" href="#">
<div className="relative h-full bg-neutral-900/80 backdrop-blur-xl rounded-[23px] p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center border border-white/5 group-hover:border-transparent transition-colors overflow-hidden">

<div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-110 group-hover:bg-white/10 group-hover:text-white group-hover:border-white/30 transition-all duration-500 z-10">
<iconify-icon icon="solar:rocket-2-linear" width="28"></iconify-icon>
</div>
<div className="flex-1 text-center md:text-left z-10">
<h3 className="text-xl font-bricolage font-medium text-white mb-2 group-hover:text-white transition-colors">
                    Propulsion Lead
                  </h3>
<div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">
<span className="flex items-center gap-1.5">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
                      Houston, TX
                    </span>
<span className="w-1 h-1 rounded-full bg-neutral-600 my-auto"></span>
<span className="flex items-center gap-1.5">
<iconify-icon icon="solar:atom-linear" width="16"></iconify-icon>
                      R&amp;D
                    </span>
</div>
</div>
<div className="flex items-center gap-4 z-10">
<span className="px-4 py-1.5 rounded-full border border-white/10 text-xs font-medium text-white/60 bg-white/5 uppercase tracking-wide group-hover:border-white/30 group-hover:bg-white/10 group-hover:text-white transition-colors">
                    Full-time
                  </span>
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:border-white/50 group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</a>

<a className="group relative block p-[1px] rounded-3xl bg-gradient-to-br from-white/10 to-white/0 hover:from-white/20 hover:to-white/5 transition-all duration-500 animate-on-scroll delay-200" href="#">
<div className="relative h-full bg-neutral-900/80 backdrop-blur-xl rounded-[23px] p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center border border-white/5 group-hover:border-transparent transition-colors overflow-hidden">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-110 group-hover:bg-white/10 group-hover:text-white group-hover:border-white/30 transition-all duration-500 z-10">
<iconify-icon icon="solar:user-heart-linear" width="28"></iconify-icon>
</div>
<div className="flex-1 text-center md:text-left z-10">
<h3 className="text-xl font-bricolage font-medium text-white mb-2 group-hover:text-white transition-colors">
                    Exobiology Specialist
                  </h3>
<div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">
<span className="flex items-center gap-1.5">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
                      Orbital Station
                    </span>
<span className="w-1 h-1 rounded-full bg-neutral-600 my-auto"></span>
<span className="flex items-center gap-1.5">
<iconify-icon icon="solar:test-tube-linear" width="16"></iconify-icon>
                      Science
                    </span>
</div>
</div>
<div className="flex items-center gap-4 z-10">
</div></div></a></div></div></div></section>
    </>
  );
}
