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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
            const activeClass = 'filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 bg-white text-slate-950 shadow-lg shadow-white/5 scale-105';

            if (category === 'all') {
              btnAll.className = activeClass;
              cardAres.style.display = 'block';
              stackRight.style.display = 'flex';
              cardGateway.style.display = 'block';
              cardTitan.style.display = 'block';
              setTimeout(() => {
                cardAres.classList.remove('opacity-0', 'scale-95', 'hidden');
                stackRight.classList.remove('opacity-0', 'scale-95', 'hidden');
                cardGateway.classList.remove('opacity-0', 'flex-[0]');
                cardTitan.classList.remove('opacity-0', 'flex-[0]');
                stackRight.classList.remove('md:col-span-12');
                stackRight.classList.add('md:col-span-4');
                cardGateway.classList.add('flex-1');
                cardTitan.classList.add('flex-1');
              }, 50);

            } else if (category === 'deep-space') {
              btnDeep.className = activeClass;
              cardAres.style.display = 'block';
              stackRight.style.display = 'flex';
              cardTitan.style.display = 'block';
              cardGateway.classList.add('opacity-0', 'flex-[0]');
              setTimeout(() => { cardGateway.style.display = 'none'; }, 300);
              cardAres.classList.remove('opacity-0', 'scale-95', 'hidden');
              stackRight.classList.remove('opacity-0', 'scale-95', 'hidden');
              cardTitan.classList.remove('opacity-0', 'flex-[0]');
              stackRight.classList.remove('md:col-span-12');
              stackRight.classList.add('md:col-span-4');
              cardTitan.classList.add('flex-1');

            } else if (category === 'orbital') {
              btnOrb.className = activeClass;
              cardGateway.style.display = 'block';
              stackRight.style.display = 'flex';
              cardAres.classList.add('opacity-0', 'scale-95');
              cardTitan.classList.add('opacity-0', 'flex-[0]');
              setTimeout(() => {
                cardAres.style.display = 'none';
                cardTitan.style.display = 'none';
              }, 300);
              stackRight.classList.remove('opacity-0', 'scale-95', 'hidden');
              cardGateway.classList.remove('opacity-0', 'flex-[0]');
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
<nav className="flex transition-all duration-300 bg-slate-900/60 w-full max-w-4xl border-white/10 border rounded-full pt-2 pr-6 pb-2 pl-2 shadow-2xl backdrop-blur-xl items-center justify-between">

<div className="flex items-center gap-3 pl-4">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-950">
<iconify-icon icon="solar:plane-bold-duotone" width="18"></iconify-icon>
</div>
<span className="font-manrope text-lg tracking-tight font-semibold">
            ADAGIO AIR
          </span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
<a className="hover:text-white transition-colors" href="#services">
            Services
          </a>
<a className="hover:text-white transition-colors" href="#about">
            Why Us
          </a>
<a className="hover:text-white transition-colors" href="#footprint">
            Network
          </a>
<a className="hover:text-white transition-colors" href="#process">
            Process
          </a>
<a className="text-sky-400 hover:text-sky-300 transition-colors" href="#contact">
            Contact
          </a>
</div>

<div className="flex items-center gap-2">
<button className="w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
<iconify-icon className="" icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
<button className="relative w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors group">
<iconify-icon className="" icon="solar:menu-dots-square-linear" width="20"></iconify-icon>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-sky-400 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
</button>
</div>
</nav>
</div>

<header className="relative w-full overflow-hidden flex flex-col justify-end pb-12 md:pb-24 min-h-screen md:h-screen">

<div className="absolute inset-0 z-0 bg-slate-950">
<img alt="Cargo Aircraft" className="w-full h-full object-cover animate-cinematic opacity-0 mix-blend-luminosity" src="https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/30 opacity-90"></div>
<div className="bg-sky-900/10 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="absolute top-32 right-6 md:right-12 z-20 flex flex-col items-end gap-2 animate-slide-up [animation-delay:2.5s] opacity-0">
<div className="px-4 py-2 rounded-lg bg-slate-900/40 backdrop-blur-md border border-white/10 flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse"></span>
<span className="text-xs font-mono tracking-wider uppercase text-white/90">
            Network Status: Optimal
          </span>
</div>
</div>
<div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">

<div className="md:col-span-8 relative">

<div className="flex items-center gap-3 mb-6 animate-slide-up [animation-delay:1.2s] opacity-0">
<span className="h-[1px] w-8 bg-sky-400/60"></span>
<span className="text-xs font-mono uppercase tracking-widest text-sky-400/80">
              Air Cargo Solutions
            </span>
</div>
<h1 className="font-manrope text-white leading-[0.85] tracking-tight font-semibold">
<span className="block text-[15vw] md:text-[9rem] lg:text-[11rem] animate-slide-up [animation-delay:1.4s] opacity-0 mix-blend-normal text-white drop-shadow-2xl">
              AFRICA
            </span>
<div className="flex items-baseline gap-4 md:gap-8 -mt-2 md:-mt-8 animate-slide-up [animation-delay:1.6s] opacity-0">
<span className="text-[15vw] md:text-[9rem] lg:text-[11rem] font-serif italic font-thin text-white/60 opacity-50 blur-[1px]">
                &amp;
              </span>
<span className="text-[15vw] md:text-[9rem] lg:text-[11rem] text-white drop-shadow-2xl">
                BEYOND
              </span>
</div>
</h1>
</div>

<div className="md:col-span-4 md:col-start-9 flex flex-col justify-end pb-4 md:pb-8">

<div className="overflow-hidden animate-slide-up [animation-delay:1.8s] md:p-8 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)] bg-slate-900/60 opacity-0 border-white/10 border rounded-2xl ring-white/5 ring-1 pt-6 pr-6 pb-6 pl-6 relative shadow-2xl backdrop-blur-2xl">

<div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent z-0 pointer-events-none animate-shimmer-effect"></div>
<div className="relative z-10">
<p className="text-lg md:text-xl text-white font-light leading-relaxed mb-8 antialiased drop-shadow-md">
                Adagio Air is the strategic link between logistics companies and
                aircraft operators — managing operations and optimizing cargo
                loads across Africa and international routes.
              </p>
<div className="flex flex-col gap-6">
<div className="grid grid-cols-2 gap-4 border-t border-white/20 pt-6">
<div className="">
<span className="block text-[10px] uppercase tracking-widest text-white/50 mb-1">
                      Active Hubs
                    </span>
<span className="text-2xl font-manrope text-white font-semibold">12</span>
</div>
<div className="">
<span className="block text-[10px] uppercase tracking-widest text-white/50 mb-1">
                      Operators
                    </span>
<span className="text-2xl font-manrope text-white font-semibold">40+</span>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-3 pt-2">
<a className="flex-1 text-center bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold py-3 px-4 rounded-full transition-colors" href="#contact">
                    Request Quote
                  </a>
<a className="flex-1 text-center bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-semibold py-3 px-4 rounded-full transition-colors" href="#contact">
                    Partner With Us
                  </a>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-slide-up [animation-delay:2.2s] opacity-0">
<span className="text-[10px] uppercase tracking-widest text-white/40">
          Scroll
        </span>
<div className="w-[1px] h-12 bg-gradient-to-b from-sky-400 to-transparent"></div>
</div>
<div className="absolute bottom-8 left-8 hidden lg:flex flex-col gap-2 animate-slide-up [animation-delay:2.4s] opacity-0 z-20">
<div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-white/40 font-mono">
<span>Sys.Norm</span>
<span className="w-1 h-1 rounded-full bg-sky-500 animate-pulse"></span>
<span>Logistics V. 4.0</span>
</div>
<div className="[--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)] bg-slate-900/80 w-64 border-white/10 border rounded-xl px-4 py-4 backdrop-blur">
<div className="flex justify-between mb-2">
<span className="text-xs text-white/60">Load Efficiency</span>
<span className="text-xs text-sky-400">98.4%</span>
</div>
<div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
<div className="bg-sky-500 w-[98%] h-full shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
</div>
<div className="grid grid-cols-2 gap-4 mt-4">
<div>
<span className="block text-[10px] text-white/40 uppercase tracking-wider">
                Volume
              </span>
<span className="text-sm text-white font-mono">Maximized</span>
</div>
<div>
<span className="block text-[10px] text-white/40 uppercase tracking-wider">
                Clearance
              </span>
<span className="text-sm text-white font-mono">Express</span>
</div>
</div>
</div>
</div>
</header>
<div className="w-full bg-slate-950 py-12 flex items-center justify-center relative z-20 overflow-hidden">
<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/10"></div>
<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent w-3/4 mx-auto"></div>
<div className="relative bg-slate-950 p-3 border border-white/10 rounded-full flex items-center justify-center shadow-2xl">
<div className="w-2.5 h-2.5 bg-sky-500 rounded-full shadow-[0_0_15px_rgba(14,165,233,0.6)] animate-pulse"></div>
</div>
</div>

<section className="relative py-24 md:py-32 bg-slate-950 text-white overflow-hidden selection:bg-sky-500/30" id="services">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[600px] bg-sky-900/20 rounded-full blur-[120px] pointer-events-none opacity-40 mix-blend-screen animate-pulse"></div>
<div className="absolute bottom-0 right-0 w-[60vw] h-[600px] bg-slate-800/30 rounded-full blur-[120px] pointer-events-none opacity-30 mix-blend-screen"></div>
<div className="md:px-12 z-10 w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="max-w-3xl relative animate-on-scroll">
<div className="absolute -left-4 md:-left-8 top-1 bottom-1 w-1 bg-gradient-to-b from-sky-500 to-transparent opacity-50"></div>
<div className="flex items-center gap-3 mb-4 text-sky-400">
<svg className="animate-spin-slow" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-xs font-mono uppercase tracking-[0.2em] text-sky-400/80">
                Service Matrix
              </span>
</div>
<h2 className="text-5xl md:text-7xl font-manrope font-semibold tracking-tight text-white leading-[0.9]">
              Aviation
              <span className="text-white/30 font-light">Capabilities.</span>
</h2>
</div>

<div className="relative group animate-on-scroll delay-100">
<div className="absolute -inset-1 bg-gradient-to-r from-sky-500/20 via-blue-500/20 to-amber-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
<div className="relative flex items-center p-1.5 rounded-full bg-slate-900/90 border border-white/10 backdrop-blur-xl shadow-2xl">
<button className="filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 bg-white text-slate-950 shadow-lg shadow-white/5" id="filter-all" onclick="updateMissionFilter('all')">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
</svg>
                All Services
              </button>
<button className="filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 text-white/50 hover:text-white hover:bg-white/5" id="filter-deep-space" onclick="updateMissionFilter('deep-space')">
<iconify-icon icon="solar:plane-linear" width="16"></iconify-icon>
                Operations
              </button>
<button className="filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 text-white/50 hover:text-white hover:bg-white/5" id="filter-orbital" onclick="updateMissionFilter('orbital')">
<iconify-icon icon="solar:box-minimalistic-linear" width="16"></iconify-icon>
                Logistics
              </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" id="missions-grid">

<div className="group relative md:col-span-8 md:row-span-2 rounded-[2rem] overflow-hidden bg-slate-900 border border-white/10 shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:border-white/20 origin-left animate-on-scroll delay-200" id="card-ares">
<div className="absolute inset-0 z-0">
<img alt="Aircraft Operations" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 ease-out grayscale group-hover:grayscale-0 mix-blend-luminosity" src="https://images.unsplash.com/photo-1554522432-613d5ce2f99a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
</div>

<div className="absolute top-8 left-8 right-8 flex justify-between items-start z-20">
<div className="flex gap-2">
<span className="px-3 py-1 bg-white/10 backdrop-blur border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-mono text-white/80">
                  Coordination
                </span>
<span className="px-3 py-1 bg-sky-500/20 border border-sky-500/30 rounded-full text-[10px] uppercase tracking-widest font-mono text-sky-400 flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-pulse"></span>
                  Active
                </span>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
<div className="max-w-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="text-[8rem] md:text-[12rem] font-manrope font-bold text-white/5 absolute -top-32 md:-top-40 -left-6 pointer-events-none select-none tracking-tighter">
                  01
                </div>
<h3 className="text-4xl md:text-5xl font-manrope font-semibold text-white mb-4 relative tracking-tight">
                  Aircraft Operations Management
                </h3>
<p className="text-white/70 text-lg font-light leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md">
                  Seamless flight coordination, operator communication, and
                  strict alignment with aircraft specifications and safety
                  compliance.
                </p>
<div className="flex items-center gap-8 pt-6 border-t border-white/10 text-xs font-mono text-white/40 uppercase tracking-widest">
<div>
<span className="block text-white mb-1">Scope</span>
                    Global / Africa
                  </div>
<div>
<span className="block text-white mb-1">Focus</span>
                    Safety &amp; Compliance
                  </div>
<div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-colors bg-white/5 backdrop-blur-md">
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

<div className="group relative flex-1 rounded-[2rem] overflow-hidden bg-slate-900 border border-white/10 shadow-xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:border-white/20 origin-top animate-on-scroll delay-300" id="card-gateway">
<div className="absolute inset-0 z-0">
<img alt="Cargo Loading" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0 mix-blend-luminosity" src="https://images.unsplash.com/photo-1586528116311-ad8ed7c83a50?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
</div>
<div className="absolute top-6 right-6 z-20">
<div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-slate-950 transition-colors">
<span className="font-manrope text-sm font-semibold">02</span>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex items-center gap-2 mb-3">
<span className="w-1.5 h-1.5 bg-amber-500 rounded-full shadow-[0_0_10px_rgb(245,158,11)]"></span>
<span className="text-[10px] uppercase text-amber-400 tracking-widest font-mono">
                      Logistics
                    </span>
</div>
<h3 className="text-2xl font-manrope font-semibold text-white mb-2 tracking-tight">
                    Cargo Load Optimization
                  </h3>
<p className="text-white/60 text-sm leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Aircraft-specific load planning, weight distribution analysis,
                    and maximized payload efficiency.
                  </p>
</div>
</div>
</div>

<div className="group relative flex-1 rounded-[2rem] overflow-hidden bg-slate-900 border border-white/10 shadow-xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:border-white/20 origin-bottom animate-on-scroll delay-400" id="card-titan">
<div className="absolute inset-0 z-0">
<img alt="Special Cargo" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0 mix-blend-luminosity" src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
</div>
<div className="absolute top-6 right-6 z-20">
<div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-slate-950 transition-colors">
<span className="font-manrope text-sm font-semibold">03</span>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex items-center gap-2 mb-3">
<span className="w-1.5 h-1.5 bg-sky-400 rounded-full shadow-[0_0_10px_rgb(56,189,248)]"></span>
<span className="text-[10px] uppercase text-sky-400 tracking-widest font-mono">
                      Charter Ops
                    </span>
</div>
<h3 className="text-2xl font-manrope font-semibold text-white mb-2 tracking-tight">
                    Charter &amp; Special Cargo
                  </h3>
<p className="text-white/60 text-sm leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Urgent solutions, project cargo, high-value freight, and
                    humanitarian logistics.
                  </p>
</div>
</div>
</div>
</div>
</div>

</div>
</section>
<div className="w-full bg-slate-950 py-12 flex items-center justify-center relative z-20 overflow-hidden">
<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/5"></div>
<div className="relative bg-slate-950 px-6 py-2 border border-white/5 rounded-full flex items-center gap-4">
<div className="flex gap-1">
<div className="w-0.5 h-3 bg-white/20"></div>
<div className="w-0.5 h-3 bg-white/20"></div>
</div>
<span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30">
          Sync
        </span>
<div className="flex gap-1">
<div className="w-0.5 h-3 bg-white/20"></div>
<div className="w-0.5 h-3 bg-sky-500"></div>
</div>
</div>
</div>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="footprint">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<div className="flex items-center gap-3 mb-6">
<span className="w-8 h-[1px] bg-sky-500"></span>
<span className="text-sky-500 text-xs font-mono uppercase tracking-widest">
                African Footprint
              </span>
</div>
<h2 className="text-4xl md:text-5xl font-manrope font-semibold mb-6 leading-tight animate-on-scroll">
              Strategic
              <br/>
<span className="text-white/40">Logistics Network</span>
</h2>
<p className="text-white/60 text-lg mb-8 leading-relaxed font-light animate-on-scroll delay-100">
              Operating across Africa and beyond, connecting cargo with capacity
              efficiently and intelligently. Our regional air corridor expertise
              ensures seamless cross-border facilitation.
            </p>
<div className="space-y-6">
<div className="flex gap-4 group cursor-default animate-on-scroll delay-200">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-white" icon="solar:global-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="text-xl font-semibold mb-1 font-manrope">
                    Regional Corridors
                  </h4>
<p className="text-sm text-white/50">
                    Navigating remote and high-demand routes with precision planning.
                  </p>
</div>
</div>
<div className="flex gap-4 group cursor-default animate-on-scroll delay-300">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-white" icon="solar:documents-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="text-xl font-semibold mb-1 font-manrope">
                    Customs Coordination
                  </h4>
<p className="text-sm text-white/50">
                    Comprehensive support for cross-border cargo clearance across African hubs.
                  </p>
</div>
</div>
</div>
<button className="mt-10 px-8 py-3 bg-white text-slate-950 rounded-full font-semibold hover:bg-slate-200 transition-colors flex items-center gap-2 group animate-on-scroll delay-300">
              View Route Map
              <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="relative lg:h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 group animate-on-scroll h-[300px] md:h-[500px]">
<img alt="Global Network" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 mix-blend-luminosity" src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/20"></div>
<div className="absolute top-1/4 left-1/3 group/spot">
<div className="w-4 h-4 bg-sky-500 rounded-full animate-ping absolute inset-0"></div>
<div className="w-4 h-4 bg-sky-500 rounded-full relative z-10 cursor-pointer border-2 border-white shadow-[0_0_20px_rgba(14,165,233,0.5)]"></div>
<div className="absolute left-6 top-0 bg-slate-950/80 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10 w-56 opacity-0 group-hover/spot:opacity-100 transition-all duration-300 translate-y-2 group-hover/spot:translate-y-0 pointer-events-none">
<span className="text-xs font-mono text-sky-400 block mb-1 uppercase tracking-wider">
                  Nairobi Hub (NBO)
                </span>
<span className="text-[11px] text-white/70 block">
                  Capacity: High Volume Freight
                </span>
<span className="text-[10px] text-white/40 block mt-1">
                  Status: Operational
                </span>
</div>
</div>
<div className="absolute bottom-1/3 right-1/4 group/spot">
<div className="w-4 h-4 bg-amber-500 rounded-full animate-ping absolute inset-0 [animation-delay:0.5s]"></div>
<div className="w-4 h-4 bg-amber-500 rounded-full relative z-10 cursor-pointer border-2 border-white shadow-[0_0_20px_rgba(245,158,11,0.5)]"></div>
<div className="absolute right-6 top-0 bg-slate-950/80 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10 w-56 opacity-0 group-hover/spot:opacity-100 transition-all duration-300 translate-y-2 group-hover/spot:translate-y-0 pointer-events-none text-right">
<span className="text-xs font-mono text-amber-400 block mb-1 uppercase tracking-wider">
                  Johannesburg (JNB)
                </span>
<span className="text-[11px] text-white/70 block">
                  Coordination: Heavy Cargo
                </span>
<span className="text-[10px] text-white/40 block mt-1">
                  Customs: Active
                </span>
</div>
</div>
</div>
</div>
</div>
</section>
<div className="w-full bg-slate-950 py-12 flex items-center justify-center relative z-20 overflow-hidden">
<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/5"></div>
<div className="relative bg-slate-950 px-6 py-2 border border-white/5 rounded-full flex items-center gap-4">
<div className="flex gap-1">
<div className="w-0.5 h-3 bg-white/20"></div>
<div className="w-0.5 h-3 bg-white/20"></div>
</div>
<span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30">
          Advantage
        </span>
<div className="flex gap-1">
<div className="w-0.5 h-3 bg-white/20"></div>
<div className="w-0.5 h-3 bg-sky-500"></div>
</div>
</div>
</div>
<section className="py-32 bg-slate-950 relative overflow-hidden border-t border-white/5" id="about">
<div className="absolute inset-0 z-0 opacity-20" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-24 animate-on-scroll">
<span className="text-sky-500 font-mono text-xs uppercase tracking-widest">
            Why Adagio Air
          </span>
<h2 className="text-5xl md:text-6xl font-manrope text-white mt-4 font-semibold tracking-tight">
            We Streamline Complexity
          </h2>
</div>
<div className="relative">
<div className="flex flex-col md:flex-row items-center justify-between mb-24 group">
<div className="w-full md:w-5/12 pr-0 md:pr-12 order-2 md:order-1 animate-on-scroll text-center md:text-right" data-anim="slide-right">
<h3 className="text-3xl text-white font-manrope font-semibold">Deep Regional Knowledge</h3>
<p className="text-white/50 mt-2 font-light">
                Unmatched understanding of African aviation logistics, ensuring cargo moves efficiently through complex regulatory environments.
              </p>
</div>
<div className="w-12 h-12 rounded-full bg-slate-900 border border-white/20 z-10 flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] order-1 md:order-2 mb-6 md:mb-0 relative">
<span className="font-mono text-xs">01</span>
</div>
<div className="w-full md:w-5/12 pl-0 md:pl-12 order-3 animate-on-scroll" data-anim="slide-left">
<span className="text-8xl font-manrope text-white/5 font-bold absolute -translate-y-12 select-none pointer-events-none">
                EXP
              </span>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between mb-24 group">
<div className="w-full md:w-5/12 text-right pr-0 md:pr-12 order-2 md:order-1 animate-on-scroll" data-anim="slide-right">
<span className="text-8xl font-manrope text-white/5 font-bold absolute right-6 md:right-12 -translate-y-12 select-none pointer-events-none">
                OPS
              </span>
</div>
<div className="w-12 h-12 rounded-full bg-slate-900 border border-white/20 z-10 flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] order-1 md:order-2 mb-6 md:mb-0 relative">
<span className="font-mono text-xs">02</span>
</div>
<div className="w-full md:w-5/12 pl-0 md:pl-12 order-3 animate-on-scroll text-center md:text-left" data-anim="slide-left">
<h3 className="text-3xl text-white font-manrope font-semibold">Operator Relationships</h3>
<p className="text-white/50 mt-2 font-light">
                Strong partnerships with aircraft operators provide reliable access to capacity tailored to specific cargo requirements.
              </p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between group">
<div className="w-full md:w-5/12 pr-0 md:pr-12 order-2 md:order-1 animate-on-scroll text-center md:text-right" data-anim="slide-right">
<h3 className="text-3xl text-white font-manrope font-semibold">Precision Planning</h3>
<p className="text-white/50 mt-2 font-light">
                Transparent communication and efficient cargo-to-aircraft matching to reduce inefficiencies and operating costs.
              </p>
</div>
<div className="w-12 h-12 rounded-full bg-slate-900 border border-white/20 z-10 flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] order-1 md:order-2 mb-6 md:mb-0 relative">
<span className="font-mono text-xs">03</span>
</div>
<div className="w-full md:w-5/12 pl-0 md:pl-12 order-3 animate-on-scroll" data-anim="slide-left">
<span className="text-8xl font-manrope text-white/5 font-bold absolute -translate-y-12 select-none pointer-events-none">
                PRE
              </span>
</div>
</div>
</div>
</div>
</section>
<div className="w-full bg-slate-950 py-12 flex items-center justify-center relative z-20 overflow-hidden">
<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/5"></div>
<div className="relative bg-slate-950 px-6 py-2 border border-white/5 rounded-full flex items-center gap-4">
<div className="flex gap-1">
<div className="w-0.5 h-3 bg-white/20"></div>
<div className="w-0.5 h-3 bg-white/20"></div>
</div>
<span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30">
          Standards
        </span>
<div className="flex gap-1">
<div className="w-0.5 h-3 bg-white/20"></div>
<div className="w-0.5 h-3 bg-sky-500"></div>
</div>
</div>
</div>
<section className="py-32 bg-slate-950 relative overflow-hidden border-t border-white/5" id="systems">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="flex flex-col md:flex-row justify-between items-end mb-16 animate-on-scroll">
<div className="max-w-2xl">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-[1px] bg-white/20"></div>
<span className="text-xs font-mono uppercase tracking-widest text-white/50">
                Operational Excellence
              </span>
</div>
<h2 className="text-5xl md:text-6xl font-manrope text-white mb-6 tracking-tight font-semibold">
              Trust &amp; Compliance
            </h2>
<p className="text-lg text-white/50 font-light leading-relaxed max-w-lg">
              Adagio Air adheres to the highest corporate standards in global aviation. We ensure regulatory alignment for every payload.
            </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">

<div className="group relative h-[500px] bg-slate-900/40 border border-white/10 rounded-3xl p-8 overflow-hidden hover:bg-slate-900/60 transition-all duration-500 hover:border-white/20 backdrop-blur-sm animate-on-scroll delay-100">
<div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-auto text-sky-400 group-hover:scale-110 group-hover:bg-sky-500/10 group-hover:border-sky-500/20 transition-all duration-500">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none perspective-distant">
<div className="relative w-[300px] h-[300px] group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 rounded-full border border-sky-500/30 animate-[spin_10s_linear_infinite]"></div>
<div className="absolute w-40 h-40 rounded-full border border-dashed border-sky-500/20 animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute w-56 h-56 rounded-full border border-sky-500/10 border-t-sky-500/40 animate-[spin_20s_linear_infinite]"></div>
</div>
</div>
</div>
<div className="relative z-10 mt-auto pt-32">
<div className="flex items-center gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
<span className="w-1.5 h-1.5 rounded-full bg-sky-500 shadow-[0_0_10px_rgb(14,165,233)] animate-pulse"></span>
<span className="text-[10px] font-mono uppercase tracking-widest text-sky-400">
                  Verified
                </span>
</div>
<h3 className="text-3xl text-white font-manrope font-semibold mb-3 tracking-tight group-hover:text-sky-50 transition-colors">
                Safety Alignment
              </h3>
<p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                Strict adherence to international aviation safety protocols and cargo handling procedures.
              </p>
<div className="w-full bg-white/5 h-[2px] mt-6 relative overflow-hidden rounded-full">
<div className="absolute inset-0 bg-sky-500 w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"></div>
</div>
</div>
</div>

<div className="group relative h-[500px] bg-slate-900/40 border border-white/10 rounded-3xl p-8 overflow-hidden hover:bg-slate-900/60 transition-all duration-500 hover:border-white/20 backdrop-blur-sm animate-on-scroll delay-200">
<div className="absolute inset-0 bg-gradient-to-b from-slate-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-auto text-slate-400 group-hover:scale-110 group-hover:bg-slate-500/10 group-hover:border-slate-500/20 transition-all duration-500">
<iconify-icon className="text-2xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none perspective-midrange">
<div className="relative w-[260px] h-[260px] group-hover:scale-105 transition-transform duration-1000 group-hover:rotate-x-15 group-hover:rotate-y-15 transform-style-preserve-3d">
<svg className="absolute inset-0 w-full h-full text-slate-500 animate-[spin_30s_linear_infinite]" fill="none" viewbox="0 0 100 100">
<path className="opacity-30" d="M50 5 L89 27.5 V72.5 L50 95 L11 72.5 V27.5 Z" stroke="currentColor" stroke-dasharray="2 2" strokeWidth="0.2"></path>
<path className="opacity-50" d="M50 15 L80.3 32.5 V67.5 L50 85 L19.7 67.5 V32.5 Z" stroke="currentColor" strokeWidth="0.3"></path>
</svg>
</div>
</div>
<div className="relative z-10 mt-auto pt-32">
<div className="flex items-center gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
<span className="w-1.5 h-1.5 rounded-full bg-slate-400 shadow-[0_0_10px_rgb(148,163,184)] animate-pulse"></span>
<span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                  Compliant
                </span>
</div>
<h3 className="text-3xl text-white font-manrope font-semibold mb-3 tracking-tight group-hover:text-slate-50 transition-colors">
                Regulatory Compliance
              </h3>
<p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                Navigating complex customs and civil aviation authority requirements seamlessly.
              </p>
<div className="w-full bg-white/5 h-[2px] mt-6 relative overflow-hidden rounded-full">
<div className="absolute inset-0 bg-slate-500 w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"></div>
</div>
</div>
</div>

<div className="group relative h-[500px] bg-slate-900/40 border border-white/10 rounded-3xl p-8 overflow-hidden hover:bg-slate-900/60 transition-all duration-500 hover:border-white/20 backdrop-blur-sm animate-on-scroll delay-300">
<div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-auto text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/10 group-hover:border-amber-500/20 transition-all duration-500">
<iconify-icon className="text-2xl" icon="solar:routing-2-linear"></iconify-icon>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none">
<div className="relative w-[300px] h-[300px] group-hover:scale-110 transition-transform duration-1000">
<svg className="absolute inset-0 w-full h-full text-amber-500 animate-[spin_10s_linear_infinite]" fill="none" viewbox="0 0 100 100">
<ellipse className="opacity-40" cx="50" cy="50" rx="45" ry="15" stroke="currentColor" strokeWidth="0.3"></ellipse>
<ellipse className="opacity-40" cx="50" cy="50" rx="45" ry="15" stroke="currentColor" strokeWidth="0.3" transform="rotate(60 50 50)"></ellipse>
</svg>
</div>
</div>
<div className="relative z-10 mt-auto pt-32">
<div className="flex items-center gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_10px_rgb(245,158,11)] animate-pulse"></span>
<span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
                  Specialized
                </span>
</div>
<h3 className="text-3xl text-white font-manrope font-semibold mb-3 tracking-tight group-hover:text-amber-50 transition-colors">
                Technical Mastery
              </h3>
<p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                Deep aircraft technical understanding to match specific cargo to the optimal airframe.
              </p>
<div className="w-full bg-white/5 h-[2px] mt-6 relative overflow-hidden rounded-full">
<div className="absolute inset-0 bg-amber-500 w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="text-white bg-slate-950 border-white/5 border-t pt-32 pr-6 pb-32 pl-6 relative" id="process">
<div className="w-full max-w-7xl mx-auto relative z-10">
<div className="flex flex-col items-center text-center mb-24 animate-on-scroll">
<span className="text-xs uppercase tracking-[0.3em] text-sky-500 font-semibold mb-4 block">
            How It Works
          </span>
<h2 className="text-4xl md:text-5xl font-manrope font-semibold text-white mb-6">
            The Logistics Process
          </h2>
<p className="text-white/50 text-lg max-w-xl font-light">
            We deliver reliability through a methodical, precision-driven approach to every cargo requirement.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="group bg-white/5 rounded-3xl p-8 border border-white/5 shadow-sm hover:shadow-2xl hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 animate-on-scroll [animation-delay:0.1s]">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-slate-950 transition-colors">
<iconify-icon className="" icon="solar:document-add-linear" width="28"></iconify-icon>
</div>
<span className="block text-xs font-semibold text-white/40 mb-2 uppercase tracking-wider">
              Step 01
            </span>
<h3 className="text-xl font-manrope font-semibold mb-3 text-white">
              Submission
            </h3>
<p className="text-sm text-white/50 leading-relaxed">
              Submit comprehensive cargo details, routing needs, and timeline requirements.
            </p>
</div>

<div className="group bg-white/5 rounded-3xl p-8 border border-white/5 shadow-sm hover:shadow-2xl hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 animate-on-scroll [animation-delay:0.2s]">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-slate-950 transition-colors">
<iconify-icon icon="solar:calculator-linear" width="28"></iconify-icon>
</div>
<span className="block text-xs font-semibold text-white/40 mb-2 uppercase tracking-wider">
              Step 02
            </span>
<h3 className="text-xl font-manrope font-semibold mb-3 text-white">
              Analysis
            </h3>
<p className="text-sm text-white/50 leading-relaxed">
              Aircraft suitability analysis and detailed load planning for maximum efficiency.
            </p>
</div>

<div className="group bg-white/5 rounded-3xl p-8 border border-white/5 shadow-sm hover:shadow-2xl hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 animate-on-scroll [animation-delay:0.3s]">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-slate-950 transition-colors">
<iconify-icon className="" icon="solar:user-hands-linear" width="28"></iconify-icon>
</div>
<span className="block text-xs font-semibold text-white/40 mb-2 uppercase tracking-wider">
              Step 03
            </span>
<h3 className="text-xl font-manrope font-semibold mb-3 text-white">
              Coordination
            </h3>
<p className="text-sm text-white/50 leading-relaxed">
              Direct operator coordination and regulatory clearance facilitation.
            </p>
</div>

<div className="group bg-white/5 rounded-3xl p-8 border border-white/5 shadow-sm hover:shadow-2xl hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 animate-on-scroll [animation-delay:0.4s]">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-slate-950 transition-colors">
<iconify-icon icon="solar:plane-bold" width="28"></iconify-icon>
</div>
<span className="block text-xs font-semibold text-white/40 mb-2 uppercase tracking-wider">
              Step 04
            </span>
<h3 className="text-xl font-manrope font-semibold mb-3 text-white">
              Execution
            </h3>
<p className="text-sm text-white/50 leading-relaxed">
              Flight execution, real-time monitoring, and secure payload delivery.
            </p>
</div>
</div>
</div>
</section>

<div className="w-full bg-slate-950 py-12 flex items-center justify-center relative z-20 overflow-hidden">
<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/10"></div>
<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent w-3/4 mx-auto"></div>
<div className="relative bg-slate-950 p-3 border border-white/10 rounded-full flex items-center justify-center shadow-2xl">
<div className="w-2.5 h-2.5 bg-sky-500 rounded-full shadow-[0_0_15px_rgba(14,165,233,0.6)] animate-pulse"></div>
</div>
</div>
<section className="bg-slate-950 border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative" id="contact">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
<div className="z-10 w-full max-w-7xl mr-auto ml-auto relative">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
<div className="max-w-3xl animate-on-scroll">
<div className="flex items-center gap-3 mb-6">
<span className="w-8 h-[1px] bg-sky-500"></span>
<span className="text-sky-500 text-xs font-mono uppercase tracking-widest">
                Contact Adagio
              </span>
</div>
<h2 className="text-5xl md:text-7xl font-manrope font-semibold tracking-tighter text-white leading-[0.9]">
              Let's Move
              <span className="text-white/30">Africa Forward.</span>
</h2>
</div>
<p className="text-slate-400 text-lg max-w-md font-light leading-relaxed mb-2">
            Get in touch for bespoke cargo quotes, strategic partnerships, and general aviation logistics inquiries.
          </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-8 flex flex-col gap-4">

<a className="group relative block p-[1px] rounded-3xl bg-gradient-to-br from-white/10 to-white/0 hover:from-white/20 hover:to-white/5 transition-all duration-500 animate-on-scroll delay-100" href="#">
<div className="relative h-full bg-slate-900/80 backdrop-blur-xl rounded-[23px] p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center border border-white/5 group-hover:border-transparent transition-colors overflow-hidden">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-110 group-hover:bg-white/10 group-hover:text-white group-hover:border-white/30 transition-all duration-500 z-10">
<iconify-icon icon="solar:box-linear" width="28"></iconify-icon>
</div>
<div className="flex-1 text-center md:text-left z-10">
<h3 className="text-xl font-manrope font-semibold text-white mb-2 group-hover:text-white transition-colors">
                    Request Cargo Quote
                  </h3>
<div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
<span>Submit your cargo specs for an optimized routing plan.</span>
</div>
</div>
<div className="flex items-center gap-4 z-10">
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:border-white/50 group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</a>

<a className="group relative block p-[1px] rounded-3xl bg-gradient-to-br from-white/10 to-white/0 hover:from-white/20 hover:to-white/5 transition-all duration-500 animate-on-scroll delay-200" href="#">
<div className="relative h-full bg-slate-900/80 backdrop-blur-xl rounded-[23px] p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center border border-white/5 group-hover:border-transparent transition-colors overflow-hidden">
<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-110 group-hover:bg-white/10 group-hover:text-white group-hover:border-white/30 transition-all duration-500 z-10">
<iconify-icon icon="solar:handshake-linear" width="28"></iconify-icon>
</div>
<div className="flex-1 text-center md:text-left z-10">
<h3 className="text-xl font-manrope font-semibold text-white mb-2 group-hover:text-white transition-colors">
                    Partner With Us
                  </h3>
<div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
<span>For logistics companies and aircraft operators.</span>
</div>
</div>
<div className="flex items-center gap-4 z-10">
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:border-white/50 group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</a>
</div>
<div className="lg:col-span-4 lg:pl-8 animate-on-scroll delay-300">
<div className="p-8 rounded-3xl bg-slate-900/50 backdrop-blur-md border border-white/5 shadow-2xl h-full">
<h3 className="text-lg font-semibold text-white font-manrope mb-8">
                Direct Contact
              </h3>
<div className="space-y-6">
<div className="flex gap-4 group">
<iconify-icon className="text-sky-400 text-xl" icon="solar:letter-linear"></iconify-icon>
<div>
<h4 className="text-white text-sm font-medium">Email</h4>
<p className="text-slate-400 text-sm">ops@adagioair.com</p>
</div>
</div>
<div className="flex gap-4 group">
<iconify-icon className="text-sky-400 text-xl" icon="solar:phone-linear"></iconify-icon>
<div>
<h4 className="text-white text-sm font-medium">Phone</h4>
<p className="text-slate-400 text-sm">+27 (0) 11 123 4567</p>
</div>
</div>
<div className="flex gap-4 group">
<iconify-icon className="text-sky-400 text-xl" icon="solar:map-point-linear"></iconify-icon>
<div>
<h4 className="text-white text-sm font-medium">Headquarters</h4>
<p className="text-slate-400 text-sm">Johannesburg,<br/>South Africa</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-slate-950 border-white/5 border-t pt-20 pb-20">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-12">
<span className="text-xs uppercase tracking-[0.2em] text-white/30">
            Trusted by operators across Africa
          </span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 animate-on-scroll delay-200">
<div className="flex items-center justify-center h-12 text-white font-manrope font-bold text-xl tracking-tighter">
            OPERATOR
            <span className="text-xs font-normal align-top ml-1 opacity-50">
              01
            </span>
</div>
<div className="flex items-center justify-center h-12 text-white font-manrope font-bold text-xl tracking-tighter">
            AERO
          </div>
<div className="flex items-center justify-center h-12 text-white font-manrope font-bold text-xl tracking-tighter">
            LOGISTICS
          </div>
<div className="flex items-center justify-center h-12 text-white font-manrope font-bold text-xl tracking-tighter">
            GLOBAL
          </div>
</div>
</div>
</section>

<footer className="text-white bg-slate-950 z-10 border-white/10 border-t pt-16 pr-6 pb-16 pl-6 relative">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 animate-on-scroll">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-950">
<iconify-icon icon="solar:plane-bold-duotone" width="18"></iconify-icon>
</div>
<h2 className="text-2xl font-manrope font-semibold">ADAGIO AIR</h2>
</div>
<p className="text-white/50 max-w-sm mb-8">
            Air Cargo Solutions for Africa and Beyond. The strategic link between logistics companies and aircraft operators.
          </p>
<div className="flex gap-4 flex-col sm:flex-row">
<input className="bg-white/5 border border-white/10 rounded-full px-6 py-3 focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/20 w-full sm:w-64" placeholder="Email address" type="email"/>
<button className="bg-white text-slate-950 px-6 py-3 rounded-full font-semibold hover:bg-slate-200 transition-colors">
              Subscribe
            </button>
</div>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-semibold text-lg mb-2">Company</h4>
<a className="text-white/60 hover:text-white transition-colors" href="#about">
            Why Adagio
          </a>
<a className="text-white/60 hover:text-white transition-colors" href="#services">
            Services
          </a>
<a className="text-white/60 hover:text-white transition-colors" href="#footprint">
            Network
          </a>
<a className="text-white/60 hover:text-white transition-colors" href="#">
            Newsroom
          </a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-semibold text-lg mb-2">Connect</h4>
<a className="text-white/60 hover:text-white transition-colors" href="#contact">
            Request Quote
          </a>
<a className="text-white/60 hover:text-white transition-colors" href="#contact">
            Partner With Us
          </a>
<a className="text-white/60 hover:text-white transition-colors" href="#">
            Compliance
          </a>
<a className="text-white/60 hover:text-white transition-colors" href="#contact">
            Contact
          </a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/40 animate-on-scroll delay-100">
<p className="">© 2024 Adagio Air. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all" href="#">
<iconify-icon icon="solar:letter-linear" width="14"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all" href="#">
<iconify-icon icon="solar:phone-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
