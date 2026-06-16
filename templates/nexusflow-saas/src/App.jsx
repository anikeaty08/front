import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
document.addEventListener("DOMContentLoaded", () => {
gsap.registerPlugin(ScrollTrigger);
// Hero Text Mask Reveal
gsap.to(".word-inner", {
y: "0%",
duration: 1.2,
stagger: 0.1,
ease: "power4.out",
delay: 0.2
});
// Hero Elements Fade
gsap.to(".hero-fade", {
opacity: 1,
y: 0,
duration: 1,
stagger: 0.2,
ease: "power3.out",
delay: 0.6
});
// Dashboard Float Animation
gsap.to(".dashboard-wrapper", {
y: -15,
rotationX: 10,
rotationY: -15,
duration: 4,
repeat: -1,
yoyo: true,
ease: "sine.inOut"
});
// Typing Lines Reveal
gsap.fromTo(".typing-line",
{ opacity: 0, x: -10 },
{
scrollTrigger: {
trigger: ".code-window",
start: "top 85%"
},
opacity: 1,
x: 0,
duration: 0.4,
stagger: 0.15,
ease: "power2.out"
}
);
// Generic Fade Up Elements
gsap.utils.toArray('.gs-fade-up').forEach(elem => {
gsap.fromTo(elem,
{ y: 50, opacity: 0 },
{
scrollTrigger: {
trigger: elem,
start: "top 85%",
},
y: 0,
opacity: 1,
duration: 1,
ease: "power3.out"
}
);
});
// Generic Scale Up Elements
gsap.utils.toArray('.gs-scale-up').forEach(elem => {
gsap.fromTo(elem,
{ scale: 0.95, opacity: 0 },
{
scrollTrigger: {
trigger: elem,
start: "top 85%",
},
scale: 1,
opacity: 1,
duration: 1.2,
ease: "expo.out"
}
);
});
// Staggered Elements (Bento Grids)
gsap.utils.toArray('.gs-stagger').forEach((elem, i) => {
gsap.fromTo(elem,
{ y: 40, opacity: 0 },
{
scrollTrigger: {
trigger: elem.parentElement,
start: "top 80%",
},
y: 0,
opacity: 1,
duration: 0.8,
delay: (i % 3) * 0.1,
ease: "power2.out"
}
);
});
// Workflow Connecting Lines Animation
gsap.to(".line-anim", {
strokeDashoffset: -20,
duration: 1,
repeat: -1,
ease: "linear"
});
// Testimonial Wall Entrance Stagger
gsap.utils.toArray('.gs-stagger-test').forEach((elem, i) => {
const isCenter = elem.classList.contains('center-card');
gsap.fromTo(elem,
{ y: 60, opacity: 0, scale: 0.9 },
{
scrollTrigger: {
trigger: elem.parentElement,
start: "top 75%",
},
y: 0,
opacity: 1,
scale: isCenter ? 1 : 0.95,
duration: 1.2,
delay: i * 0.15,
ease: "back.out(1.2)"
}
);
});
});



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



        document.addEventListener("DOMContentLoaded", () => {
          if(typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
            gsap.to(".dashboard-plane", {
              scrollTrigger: {
                trigger: ".perspective-container",
                start: "top 60%",
                end: "bottom 80%",
                scrub: 1,
              },
              rotationX: 0,
              rotationY: 0,
              rotationZ: 0,
              scale: 1,
              ease: "power1.inOut"
            });
          }
        });
      


      document.addEventListener("DOMContentLoaded", () => {
        gsap.registerPlugin(ScrollTrigger);

        // Hero Text Mask Reveal
        gsap.to(".word-inner", {
          y: "0%",
          duration: 1.2,
          stagger: 0.1,
          ease: "power4.out",
          delay: 0.2
        });

        // Dashboard Float Animation
        gsap.to(".dashboard-wrapper", {
          y: -15,
          rotationX: 10,
          rotationY: -15,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });

        // Generic Fade Up Elements
        gsap.utils.toArray('.gs-fade-up').forEach(elem => {
          gsap.fromTo(elem,
            { y: 50, opacity: 0 },
            {
              scrollTrigger: {
                trigger: elem,
                start: "top 85%",
              },
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out"
            }
          );
        });

        // Generic Scale Up Elements
        gsap.utils.toArray('.gs-scale-up').forEach(elem => {
          gsap.fromTo(elem,
            { scale: 0.95, opacity: 0 },
            {
              scrollTrigger: {
                trigger: elem,
                start: "top 85%",
              },
              scale: 1,
              opacity: 1,
              duration: 1.2,
              ease: "expo.out"
            }
          );
        });

        // Staggered Elements (Bento Grids)
        gsap.utils.toArray('.gs-stagger').forEach((elem, i) => {
          gsap.fromTo(elem,
            { y: 40, opacity: 0 },
            {
              scrollTrigger: {
                trigger: elem.parentElement,
                start: "top 80%",
              },
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: (i % 3) * 0.1, // Stagger based on column index
              ease: "power2.out"
            }
          );
        });

        // Workflow Connecting Lines Animation
        gsap.to(".line-anim", {
          strokeDashoffset: -20,
          duration: 1,
          repeat: -1,
          ease: "linear"
        });

        // Testimonial Wall Entrance Stagger
        gsap.utils.toArray('.gs-stagger-test').forEach((elem, i) => {
          const isCenter = elem.classList.contains('center-card');
          gsap.fromTo(elem,
            { y: 60, opacity: 0, scale: 0.9 },
            {
              scrollTrigger: {
                trigger: elem.parentElement,
                start: "top 75%",
              },
              y: 0,
              opacity: 1,
              scale: isCenter ? 1 : 0.95,
              duration: 1.2,
              delay: i * 0.15,
              ease: "back.out(1.2)"
            }
          );
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
<div className="bg-orb w-[800px] h-[800px] bg-orange-600 top-[-10%] left-[-10%]"></div>
<div className="bg-orb w-[600px] h-[600px] bg-neutral-600 bottom-[-10%] right-[-10%]" style={{animationDelay: '-5s'}}></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] opacity-20"></div>
</div>

<nav className="z-50 flex bg-black/20 w-full max-w-full border-white/5 border-b mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-3 text-lg font-normal tracking-tight text-white cursor-pointer group">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.3)] group-hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] transition-all">
<iconify-icon className="text-white text-xl" icon="lucide:layers"></iconify-icon>
</div>
<span className="tracking-tight">NexusFlow</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-neutral-400 font-light">
<a className="hover:text-white transition-colors" href="#features">
          Platform
        </a>
<a className="hover:text-white transition-colors" href="#workflow">
          Solutions
        </a>
<a className="hover:text-white transition-colors" href="#pricing">
          Pricing
        </a>
<a className="hover:text-white transition-colors" href="#">Developers</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="text-sm text-neutral-300 hover:text-white font-normal transition-colors" href="#">
          Log in
        </a>
<button className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-normal transition-all backdrop-blur-sm">
          Get Started
        </button>
</div>
<button className="md:hidden text-white text-2xl">
<iconify-icon icon="lucide:menu"></iconify-icon>
</button>
</nav>

<section className="relative z-10 w-full min-h-[90vh] pt-20 pb-32 flex flex-col items-center scene-container overflow-hidden">
<div className="max-w-[1400px] w-full mx-auto px-6 flex flex-col items-center">

<div className="max-w-3xl flex flex-col items-center text-center mb-20 relative z-20 mx-auto">

<div className="hero-fade inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-normal mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(249,115,22,0.1)]">
<iconify-icon icon="lucide:wand-2"></iconify-icon>
<span>Unify &amp; Automate</span>
</div>

<h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white mb-6 leading-[1.05]">
<span className="word-wrapper">
<span className="word-inner">Unify </span>
</span>
<span className="word-wrapper">
<span className="word-inner">your </span>
</span>
<span className="word-wrapper">
<span className="word-inner">operations </span>
</span>
<span className="word-wrapper">
<span className="word-inner">into </span>
</span>
<span className="word-wrapper">
<span className="word-inner">one </span>
</span>
<span className="word-wrapper">
<span className="word-inner">intelligent </span>
</span>
<span className="word-wrapper">
<span className="word-inner">platform.</span>
</span>
</h1>

<p className="hero-fade text-neutral-400 text-base md:text-lg lg:text-xl mb-8 max-w-xl leading-relaxed font-light">
            Bring fragmented tools together in a single command center. Optimize
            daily processes and empower your team to scale effortlessly without
            extensive coding.
          </p>

<div className="hero-fade flex flex-wrap justify-center items-center gap-4">
<button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-base font-normal shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:from-orange-400 hover:to-orange-500 border border-orange-400/50 transition-all">
              Start for free
            </button>
<button className="px-6 py-2.5 rounded-full bg-neutral-900/60 border border-neutral-800 text-neutral-300 text-base font-normal hover:bg-neutral-800 transition-all backdrop-blur-md">
              View demo
            </button>
</div>
</div>

<div className="perspective-container w-full max-w-5xl mx-auto relative z-10 hero-fade">

<div className="dashboard-plane border-gradient-surface w-full aspect-[16/10] flex overflow-hidden">

<div className="w-16 border-r border-white/5 flex flex-col items-center py-6 gap-6 bg-[#0a0a0a]/50">
<div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mb-4">
<iconify-icon className="text-neutral-300" icon="lucide:command" width="18"></iconify-icon>
</div>
<div className="flex flex-col gap-4">
<a className="w-10 h-10 rounded-lg flex items-center justify-center text-orange-500 bg-orange-500/10 relative" href="#">
<iconify-icon icon="lucide:layout-grid" width="20"></iconify-icon>
<div className="absolute left-0 top-2 bottom-2 w-0.5 bg-orange-500 rounded-r-full"></div>
</a>
<a className="w-10 h-10 rounded-lg flex items-center justify-center text-neutral-500 hover:text-neutral-300 transition" href="#">
<iconify-icon icon="lucide:users" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-lg flex items-center justify-center text-neutral-500 hover:text-neutral-300 transition" href="#">
<iconify-icon icon="lucide:bar-chart-3" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-lg flex items-center justify-center text-neutral-500 hover:text-neutral-300 transition" href="#">
<iconify-icon icon="lucide:settings" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="flex-1 flex flex-col bg-[#111111]/80 backdrop-blur-xl relative">

<div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>

<div className="px-8 py-8 border-b border-white/5 flex flex-col sm:flex-row gap-6 justify-between sm:items-center">
<div className="flex justify-between items-center w-full sm:w-auto">
<h2 className="text-xl font-normal tracking-tight text-white flex items-center gap-2">
                    Connections
                    <span className="px-2 py-0.5 rounded-md bg-neutral-800/80 border border-neutral-700/50 text-sm font-normal text-neutral-400">
                      28 total
                    </span>
</h2>
</div>
<div className="relative group w-full sm:w-auto">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 text-base" icon="lucide:search"></iconify-icon>
<input className="w-full sm:w-64 bg-[#161616] border border-neutral-800 rounded-full pl-9 pr-4 py-2 text-sm text-neutral-300 focus:outline-none focus:border-neutral-600 transition-all placeholder:text-neutral-600" placeholder="Search apps..." type="text"/>
</div>
</div>

<div className="flex-1 overflow-y-auto p-8">
<div className="flex flex-wrap gap-2.5 mb-6">
<button className="px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-sm font-normal border border-orange-500/30">
                    All
                  </button>
<button className="px-4 py-1.5 rounded-full bg-[#161616] text-neutral-400 text-sm font-normal border border-neutral-800 hover:text-neutral-200 transition-all">
                    Active
                  </button>
<button className="px-4 py-1.5 rounded-full bg-[#161616] text-neutral-400 text-sm font-normal border border-neutral-800 hover:text-neutral-200 transition-all">
                    Inactive
                  </button>
<button className="px-4 py-1.5 rounded-full bg-[#161616] text-neutral-400 text-sm font-normal border border-neutral-800 hover:text-neutral-200 transition-all">
                    Analytics
                  </button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

<div className="border-gradient-card p-5 flex flex-col gap-4 hover:border-neutral-600 transition-all group">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
<iconify-icon className="text-xl" icon="lucide:code-2"></iconify-icon>
</div>
<div>
<h4 className="text-base font-normal text-white tracking-tight">
                            CodeHub
                          </h4>
</div>
</div>
<span className="px-2 py-1 rounded-md bg-[#222] border border-neutral-800 text-xs text-neutral-400 font-normal tracking-wide">
                        DevOps
                      </span>
</div>
<p className="text-sm text-neutral-500 leading-relaxed font-light">
                      AI-powered platform that allows developers to create,
                      store, manage and collaborate on code efficiently.
                    </p>
<div className="mt-auto pt-4 border-t border-neutral-800/60 flex items-center justify-between">
<a className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors" href="#">
<iconify-icon className="text-base" icon="lucide:settings"></iconify-icon>
                        Setup
                      </a>
<div className="flex items-center gap-2">
<span className="text-sm text-neutral-400 font-normal">
                          Active
                        </span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only toggle-checkbox" type="checkbox"/>
<div className="toggle-label w-7 h-4 bg-neutral-700 rounded-full relative transition-colors border border-transparent after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-transform"></div>
</label>
</div>
</div>
</div>

<div className="border-gradient-card p-5 flex flex-col gap-4 hover:border-neutral-600 transition-all group">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400">
<iconify-icon className="text-xl" icon="lucide:calculator"></iconify-icon>
</div>
<div>
<h4 className="text-base font-normal text-white tracking-tight">
                            LedgerX
                          </h4>
</div>
</div>
<span className="px-2 py-1 rounded-md bg-[#222] border border-neutral-800 text-xs text-neutral-400 font-normal tracking-wide">
                        Finance
                      </span>
</div>
<p className="text-sm text-neutral-500 leading-relaxed font-light">
                      Comprehensive accounting software package developed to
                      manage invoicing, payroll, and cash flow.
                    </p>
<div className="mt-auto pt-4 border-t border-neutral-800/60 flex items-center justify-between">
<a className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors" href="#">
<iconify-icon className="text-base" icon="lucide:settings"></iconify-icon>
                        Setup
                      </a>
<div className="flex items-center gap-2">
<span className="text-sm text-neutral-500 font-normal">
                          Disabled
                        </span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only toggle-checkbox" type="checkbox"/>
<div className="toggle-label w-7 h-4 bg-neutral-800 rounded-full relative transition-colors border border-neutral-700 after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-neutral-500 after:rounded-full after:h-3 after:w-3 after:transition-transform"></div>
</label>
</div>
</div>
</div>

<div className="border-gradient-card p-5 flex flex-col gap-4 hover:border-neutral-600 transition-all group">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-orange-400">
<iconify-icon className="text-xl" icon="lucide:git-branch"></iconify-icon>
</div>
<div>
<h4 className="text-base font-normal text-white tracking-tight">
                            RepoSync
                          </h4>
</div>
</div>
<span className="px-2 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-xs text-orange-400 font-normal tracking-wide">
                        Popular
                      </span>
</div>
<p className="text-sm text-neutral-500 leading-relaxed font-light">
                      Open-core company that operates a DevOps software package
                      to develop, secure, and operate software.
                    </p>
<div className="mt-auto pt-4 border-t border-neutral-800/60 flex items-center justify-between">
<a className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors" href="#">
<iconify-icon className="text-base" icon="lucide:settings"></iconify-icon>
                        Setup
                      </a>
<div className="flex items-center gap-2">
<span className="text-sm text-neutral-400 font-normal">
                          Active
                        </span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only toggle-checkbox" type="checkbox"/>
<div className="toggle-label w-7 h-4 bg-neutral-700 rounded-full relative transition-colors border border-transparent after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-transform"></div>
</label>
</div>
</div>
</div>

<div className="border-gradient-card p-5 flex flex-col gap-4 hover:border-neutral-600 transition-all group">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-rose-400">
<iconify-icon className="text-xl" icon="lucide:calendar"></iconify-icon>
</div>
<div>
<h4 className="text-base font-normal text-white tracking-tight">
                            Gatherly
                          </h4>
</div>
</div>
<span className="px-2 py-1 rounded-md bg-[#222] border border-neutral-800 text-xs text-neutral-400 font-normal tracking-wide">
                        Events
                      </span>
</div>
<p className="text-sm text-neutral-500 leading-relaxed font-light">
                      Global event management and ticketing platform allowing
                      users to browse, create, and promote events.
                    </p>
<div className="mt-auto pt-4 border-t border-neutral-800/60 flex items-center justify-between">
<a className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors" href="#">
<iconify-icon className="text-base" icon="lucide:settings"></iconify-icon>
                        Setup
                      </a>
<div className="flex items-center gap-2">
<span className="text-sm text-neutral-500 font-normal">
                          Disabled
                        </span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only toggle-checkbox" type="checkbox"/>
<div className="toggle-label w-7 h-4 bg-neutral-800 rounded-full relative transition-colors border border-neutral-700 after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-neutral-500 after:rounded-full after:h-3 after:w-3 after:transition-transform"></div>
</label>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="border-y overflow-hidden gs-reveal bg-gradient-to-b from-[#050505] to-[#0a0a0a] w-full z-10 border-neutral-800/40 pt-20 pb-20 relative">
<style>
        @keyframes scrollMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
            animation: scrollMarquee 40s linear infinite;
            display: flex;
            width: max-content;
        }
        .animate-infinite-scroll:hover {
            animation-play-state: paused;
        }
        .brand-logo {
            color: #525252;
            transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
            transform-style: preserve-3d;
            backface-visibility: hidden;
            will-change: transform, color, filter;
        }
        .brand-logo:hover {
            color: #ffffff;
            transform: scale(1.1) translateY(-4px) rotateX(12deg) rotateY(-12deg);
            text-shadow: 0 0 25px rgba(255, 255, 255, 0.4);
            z-index: 10;
        }
        .brand-logo:hover iconify-icon {
            filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.5));
        }
        @keyframes subtleSweep {
            0% { left: -20%; opacity: 0; }
            50% { opacity: 1; }
            100% { left: 120%; opacity: 0; }
        }
        .sweep-overlay {
            position: absolute;
            top: 0; bottom: 0;
            width: 25vw;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
            animation: subtleSweep 8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            pointer-events: none;
            transform: skewX(-25deg);
            z-index: 20;
        }
        .marquee-mask {
            mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        @keyframes blurSharp {
            0% { filter: blur(12px); transform: translateY(20px) scale(0.98); }
            100% { filter: blur(0); transform: translateY(0) scale(1); }
        }
        .blur-sharp-anim {
            animation: blurSharp 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      </style>

<div className="absolute inset-0 pointer-events-none z-0">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px]"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,transparent_0%,#050505_100%)]"></div>
</div>

<div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
<div className="sweep-overlay"></div>
</div>
<div className="blur-sharp-anim relative z-10 w-full" style={{perspective: '1200px'}}>
<div className="max-w-7xl mx-auto px-6 text-center mb-14">
<p className="text-sm tracking-[0.2em] uppercase text-neutral-500 font-normal">
            Powering infrastructure for forward-thinking teams
          </p>
</div>
<div className="w-full overflow-hidden marquee-mask relative">
<div className="animate-infinite-scroll py-6">

<div className="flex items-center">
<div className="flex items-center gap-3 px-10 md:px-16 brand-logo cursor-pointer group relative">
<iconify-icon className="text-3xl md:text-4xl" icon="lucide:box"></iconify-icon>
<span className="text-2xl md:text-3xl font-normal tracking-tight">
                  Acme Corp
                </span>
</div>
<div className="flex items-center gap-3 px-10 md:px-16 brand-logo cursor-pointer group relative">
<iconify-icon className="text-3xl md:text-4xl" icon="lucide:globe-2"></iconify-icon>
<span className="text-2xl md:text-3xl font-normal tracking-tight">
                  Globex
                </span>
</div>
<div className="flex items-center gap-3 px-10 md:px-16 brand-logo cursor-pointer group relative">
<iconify-icon className="text-3xl md:text-4xl" icon="lucide:shield"></iconify-icon>
<span className="text-2xl md:text-3xl font-normal tracking-tight">
                  Soylent
                </span>
</div>
<div className="flex items-center gap-3 px-10 md:px-16 brand-logo cursor-pointer group relative">
<iconify-icon className="text-3xl md:text-4xl" icon="lucide:infinity"></iconify-icon>
<span className="text-2xl md:text-3xl font-normal tracking-tight">
                  Initech
                </span>
</div>
<div className="flex items-center gap-3 px-10 md:px-16 brand-logo cursor-pointer group relative">
<iconify-icon className="text-3xl md:text-4xl" icon="lucide:ghost"></iconify-icon>
<span className="text-2xl md:text-3xl font-normal tracking-tight">
                  Umbrella
                </span>
</div>
<div className="flex items-center gap-3 px-10 md:px-16 brand-logo cursor-pointer group relative">
<iconify-icon className="text-3xl md:text-4xl" icon="lucide:radar"></iconify-icon>
<span className="text-2xl md:text-3xl font-normal tracking-tight">
                  Massive
                </span>
</div>
</div>

<div className="flex items-center">
<div className="flex items-center gap-3 px-10 md:px-16 brand-logo cursor-pointer group relative">
<iconify-icon className="text-3xl md:text-4xl" icon="lucide:box"></iconify-icon>
<span className="text-2xl md:text-3xl font-normal tracking-tight">
                  Acme Corp
                </span>
</div>
<div className="flex items-center gap-3 px-10 md:px-16 brand-logo cursor-pointer group relative">
<iconify-icon className="text-3xl md:text-4xl" icon="lucide:globe-2"></iconify-icon>
<span className="text-2xl md:text-3xl font-normal tracking-tight">
                  Globex
                </span>
</div>
<div className="flex items-center gap-3 px-10 md:px-16 brand-logo cursor-pointer group relative">
<iconify-icon className="text-3xl md:text-4xl" icon="lucide:shield"></iconify-icon>
<span className="text-2xl md:text-3xl font-normal tracking-tight">
                  Soylent
                </span>
</div>
<div className="flex items-center gap-3 px-10 md:px-16 brand-logo cursor-pointer group relative">
<iconify-icon className="text-3xl md:text-4xl" icon="lucide:infinity"></iconify-icon>
<span className="text-2xl md:text-3xl font-normal tracking-tight">
                  Initech
                </span>
</div>
<div className="flex items-center gap-3 px-10 md:px-16 brand-logo cursor-pointer group relative">
<iconify-icon className="text-3xl md:text-4xl" icon="lucide:ghost"></iconify-icon>
<span className="text-2xl md:text-3xl font-normal tracking-tight">
                  Umbrella
                </span>
</div>
<div className="flex items-center gap-3 px-10 md:px-16 brand-logo cursor-pointer group relative">
<iconify-icon className="text-3xl md:text-4xl" icon="lucide:radar"></iconify-icon>
<span className="text-2xl md:text-3xl font-normal tracking-tight">
                  Massive
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 w-full pt-32 pb-32 relative" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 gs-fade-up">
<h2 className="text-4xl md:text-6xl font-normal text-white tracking-tight mb-4">
            Powerful primitives.
            <br/>
<span className="text-neutral-500">Infinite possibilities.</span>
</h2>
<p className="text-neutral-400 text-base md:text-lg font-light max-w-xl">
            Everything you need to build complex orchestrations, packaged in a
            beautifully simple interface.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">

<div className="bento-card md:col-span-2 rounded-[2rem] p-8 border border-neutral-800/60 relative overflow-hidden group gs-stagger">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIvPgo8L3N2Zz4=')] opacity-30 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="">
<iconify-icon className="text-orange-500 text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-500" icon="lucide:git-branch"></iconify-icon>
<h3 className="text-2xl font-normal text-white tracking-tight mb-2">
                  Visual Workflow Builder
                </h3>
<p className="text-base text-neutral-400 font-light max-w-sm">
                  Drag, drop, and connect logical nodes to create complex
                  branching scenarios without reading API docs.
                </p>
</div>

<div className="absolute right-[-10%] bottom-[-20%] w-[60%] h-[90%] bg-[#1a1a1a] border border-neutral-800 rounded-tl-xl p-4 shadow-2xl transform rotate-[-5deg] group-hover:rotate-[-2deg] group-hover:-translate-y-2 transition-all duration-500 flex flex-col gap-2">
<div className="w-full h-8 bg-neutral-900 rounded border border-neutral-800 flex items-center px-2 gap-2 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 delay-100 ease-in-out"></div>
<div className="w-2 h-2 rounded-full bg-green-500 group-hover:shadow-[0_0_8px_#22c55e] transition-shadow duration-300"></div>
<div className="w-4 group-hover:w-16 h-2 bg-neutral-700 group-hover:bg-neutral-500 rounded transition-all duration-500 ease-out"></div>
</div>
<div className="w-full h-8 bg-neutral-900 rounded border border-neutral-800 flex items-center px-2 gap-2 ml-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 delay-300 ease-in-out"></div>
<div className="w-2 h-2 rounded-full bg-orange-500 group-hover:shadow-[0_0_8px_#f97316] transition-shadow duration-300 delay-100"></div>
<div className="w-4 group-hover:w-24 h-2 bg-neutral-700 group-hover:bg-neutral-500 rounded transition-all duration-700 delay-100 ease-out"></div>
</div>
<div className="w-full h-8 bg-neutral-900 rounded border border-neutral-800 flex items-center px-2 gap-2 ml-8 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 delay-500 ease-in-out"></div>
<div className="w-2 h-2 rounded-full bg-blue-500 group-hover:shadow-[0_0_8px_#3b82f6] transition-shadow duration-300 delay-200"></div>
<div className="w-4 group-hover:w-12 h-2 bg-neutral-700 group-hover:bg-neutral-500 rounded transition-all duration-500 delay-200 ease-out"></div>
</div>
</div>
</div>
</div>

<div className="bento-card md:col-span-1 rounded-[2rem] p-8 border border-neutral-800/60 flex flex-col justify-between group gs-stagger">
<div className="">
<iconify-icon className="text-white text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-500" icon="lucide:bar-chart-2"></iconify-icon>
<h3 className="text-2xl font-normal text-white tracking-tight mb-2">
                Real-time Telemetry
              </h3>
<p className="text-base text-neutral-400 font-light">
                Monitor execution times and payload sizes instantly.
              </p>
</div>

<div className="mt-4 flex items-end gap-1.5 h-16">
<div className="w-full bg-neutral-800 rounded-t-sm h-[20%] group-hover:h-[40%] group-hover:bg-neutral-700 transition-all duration-300 ease-out"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[30%] group-hover:h-[60%] group-hover:bg-neutral-700 transition-all duration-300 delay-75 ease-out"></div>
<div className="w-full bg-orange-500/40 rounded-t-sm h-[50%] group-hover:h-[100%] border-t border-orange-500 relative overflow-hidden transition-all duration-500 delay-150 ease-out group-hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]">
<div className="absolute inset-0 bg-gradient-to-t from-transparent to-orange-400/50 translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-150"></div>
</div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[25%] group-hover:h-[50%] group-hover:bg-neutral-700 transition-all duration-300 delay-200 ease-out"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[40%] group-hover:h-[75%] group-hover:bg-neutral-700 transition-all duration-300 delay-300 ease-out"></div>
</div>
</div>

<div className="bento-card md:col-span-1 rounded-[2rem] p-8 border border-neutral-800/60 flex flex-col justify-between group gs-stagger">
<div className="flex flex-col h-full">
<div>
<iconify-icon className="text-white text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-500" icon="lucide:shield-check"></iconify-icon>
<h3 className="text-2xl font-normal text-white tracking-tight mb-2">
                  Enterprise Security
                </h3>
<p className="text-base text-neutral-400 font-light">
                  End-to-end encryption and granular role-based access.
                </p>
</div>

<div className="mt-auto pt-6">
<div className="p-4 bg-[#0a0a0a] rounded-xl border border-neutral-800/80 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent -translate-x-full group-hover:translate-x-[200%] transition-transform duration-[1.5s] ease-in-out"></div>
<div className="flex flex-col gap-3 relative z-10">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-neutral-800 group-hover:bg-green-500 transition-colors duration-300 delay-100 group-hover:shadow-[0_0_8px_#22c55e]"></div>
<div className="flex-1 h-1 bg-neutral-800 rounded-full overflow-hidden">
<div className="w-full h-full bg-neutral-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 delay-100 ease-out"></div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-neutral-800 group-hover:bg-green-500 transition-colors duration-300 delay-200 group-hover:shadow-[0_0_8px_#22c55e]"></div>
<div className="w-4/5 h-1 bg-neutral-800 rounded-full overflow-hidden">
<div className="w-full h-full bg-neutral-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 delay-200 ease-out"></div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-neutral-800 group-hover:bg-green-500 transition-colors duration-300 delay-300 group-hover:shadow-[0_0_8px_#22c55e]"></div>
<div className="w-3/5 h-1 bg-neutral-800 rounded-full overflow-hidden">
<div className="w-full h-full bg-neutral-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 delay-300 ease-out"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bento-card md:col-span-2 rounded-[2rem] p-8 border border-neutral-800/60 flex flex-col md:flex-row justify-between items-center gap-8 group gs-stagger overflow-hidden relative">
<div className="relative z-10 flex-1">
<iconify-icon className="text-white text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-500" icon="lucide:file-code-2"></iconify-icon>
<h3 className="text-2xl font-normal text-white tracking-tight mb-2">
                Developer First
              </h3>
<p className="text-base text-neutral-400 font-light max-w-sm">
                Write custom logic snippets in Node.js or Python right within
                the canvas for edge cases.
              </p>
</div>

<div className="w-full md:w-[45%] bg-[#0a0a0a] rounded-xl border border-neutral-800 p-4 font-mono text-xs sm:text-sm text-neutral-400 leading-relaxed shadow-inner relative overflow-hidden group-hover:border-neutral-700 transition-colors duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/10 to-transparent -translate-y-[150%] group-hover:translate-y-[150%] transition-transform duration-[1.5s] ease-in-out"></div>
<div className="flex gap-1 mb-3 relative z-10">
<div className="w-2 h-2 rounded-full bg-neutral-800 group-hover:bg-red-500 transition-colors duration-300"></div>
<div className="w-2 h-2 rounded-full bg-neutral-800 group-hover:bg-yellow-500 transition-colors duration-300 delay-75"></div>
<div className="w-2 h-2 rounded-full bg-neutral-800 group-hover:bg-green-500 transition-colors duration-300 delay-150"></div>
</div>
<div className="relative z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
<span className="text-orange-400">export</span>
<span className="text-purple-400">default</span>
<span className="text-blue-400">async</span>
                function(
                <span className="text-yellow-200">event</span>
                ) {
                <br/>
                  const data = event.payload;
                <br/>
                  
                <span className="text-neutral-500 group-hover:text-green-500/70 transition-colors duration-500 delay-300">
                  // Transform data
                </span>
<br/>
                  return { status:
                <span className="text-green-400">200</span>
                };
                <br/>
                }
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 border-y bg-[#0f0f0f] w-full border-neutral-900/50 pt-32 pb-32 relative" id="workflow">
<div className="max-w-6xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-normal text-white tracking-tight mb-16 gs-fade-up">
          Orchestrate your entire stack
        </h2>
<div className="relative w-full max-w-3xl mx-auto h-[400px] flex items-center justify-center gs-scale-up">

<div className="absolute top-1/2 left-1/2 w-[280px] h-[280px] -translate-x-1/2 -translate-y-1/2 border border-neutral-800/40 rounded-full pointer-events-none">
<div className="absolute inset-0 animate-[spin_8s_linear_infinite]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_10px_#f97316]"></div>
</div>
</div>
<div className="absolute top-1/2 left-1/2 w-[420px] h-[420px] -translate-x-1/2 -translate-y-1/2 border border-neutral-800/30 border-dashed rounded-full pointer-events-none">
<div className="absolute inset-0 animate-[spin_12s_linear_infinite_reverse]">
<div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div>
</div>
</div>

<div className="relative z-20 w-24 h-24 rounded-2xl bg-gradient-to-b from-orange-500 to-orange-700 border border-orange-400/50 flex items-center justify-center shadow-[0_0_40px_rgba(249,115,22,0.4)]">
<div className="absolute inset-0 rounded-2xl bg-orange-400 animate-ping opacity-20"></div>
<div className="absolute inset-[-8px] border border-orange-500/30 rounded-[1.5rem] animate-[pulse_2s_ease-in-out_infinite]"></div>
<iconify-icon className="text-white text-4xl relative z-10" icon="lucide:layers"></iconify-icon>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-10" preserveaspectratio="none" viewbox="0 0 100 100">

<path d="M50,50 L20,20" fill="none" stroke="#262626" strokeWidth="0.3"></path>
<path d="M50,50 L80,20" fill="none" stroke="#262626" strokeWidth="0.3"></path>
<path d="M50,50 L20,80" fill="none" stroke="#262626" strokeWidth="0.3"></path>
<path d="M50,50 L80,80" fill="none" stroke="#262626" strokeWidth="0.3"></path>
<path d="M50,50 L10,50" fill="none" stroke="#262626" strokeWidth="0.3"></path>
<path d="M50,50 L90,50" fill="none" stroke="#262626" strokeWidth="0.3"></path>

<path className="line-anim" d="M50,50 L20,20" fill="none" stroke="#f97316" stroke-dasharray="1 8" strokeLinecap="round" strokeWidth="0.6" style={{strokeDashoffset: '-20px'}}></path>
<path className="line-anim" d="M50,50 L80,20" fill="none" stroke="#3b82f6" stroke-dasharray="1 8" strokeLinecap="round" strokeWidth="0.6" style={{strokeDashoffset: '-20px'}}></path>
<path className="line-anim" d="M50,50 L20,80" fill="none" stroke="#22c55e" stroke-dasharray="1 8" strokeLinecap="round" strokeWidth="0.6" style={{strokeDashoffset: '-20px'}}></path>
<path className="line-anim" d="M50,50 L80,80" fill="none" stroke="#eab308" stroke-dasharray="1 8" strokeLinecap="round" strokeWidth="0.6" style={{strokeDashoffset: '-20px'}}></path>
<path className="line-anim" d="M50,50 L10,50" fill="none" stroke="#a855f7" stroke-dasharray="1 8" strokeLinecap="round" strokeWidth="0.6" style={{strokeDashoffset: '-20px'}}></path>
<path className="line-anim" d="M50,50 L90,50" fill="none" stroke="#ec4899" stroke-dasharray="1 8" strokeLinecap="round" strokeWidth="0.6" style={{strokeDashoffset: '-20px'}}></path>
</svg>

<div className="absolute top-[10%] left-[15%] w-12 h-12 rounded-xl bg-[#161616] border border-neutral-800 flex items-center justify-center text-orange-400 z-20 node-anim shadow-[0_0_15px_rgba(249,115,22,0.1)]">
<div className="absolute inset-[-4px] border border-orange-500/20 rounded-xl animate-[pulse_2s_ease-in-out_infinite]" style={{animationDelay: '0s'}}></div>
<iconify-icon icon="lucide:database"></iconify-icon>
</div>
<div className="absolute top-[10%] right-[15%] w-12 h-12 rounded-xl bg-[#161616] border border-neutral-800 flex items-center justify-center text-blue-400 z-20 node-anim shadow-[0_0_15px_rgba(59,130,246,0.1)]" style={{animationDelay: '-1s'}}>
<div className="absolute inset-[-4px] border border-blue-500/20 rounded-xl animate-[pulse_2s_ease-in-out_infinite]" style={{animationDelay: '-1s'}}></div>
<iconify-icon icon="lucide:message-square"></iconify-icon>
</div>
<div className="absolute bottom-[10%] left-[15%] w-12 h-12 rounded-xl bg-[#161616] border border-neutral-800 flex items-center justify-center text-green-400 z-20 node-anim shadow-[0_0_15px_rgba(34,197,94,0.1)]" style={{animationDelay: '-2s'}}>
<div className="absolute inset-[-4px] border border-green-500/20 rounded-xl animate-[pulse_2s_ease-in-out_infinite]" style={{animationDelay: '-2s'}}></div>
<iconify-icon icon="lucide:shopping-bag"></iconify-icon>
</div>
<div className="absolute bottom-[10%] right-[15%] w-12 h-12 rounded-xl bg-[#161616] border border-neutral-800 flex items-center justify-center text-yellow-400 z-20 node-anim shadow-[0_0_15px_rgba(234,179,8,0.1)]" style={{animationDelay: '-0.5s'}}>
<div className="absolute inset-[-4px] border border-yellow-500/20 rounded-xl animate-[pulse_2s_ease-in-out_infinite]" style={{animationDelay: '-0.5s'}}></div>
<iconify-icon icon="lucide:credit-card"></iconify-icon>
</div>
<div className="absolute top-[50%] left-[5%] -translate-y-1/2 w-12 h-12 rounded-xl bg-[#161616] border border-neutral-800 flex items-center justify-center text-purple-400 z-20 node-anim center-y shadow-[0_0_15px_rgba(168,85,247,0.1)]" style={{animationDelay: '-1.5s'}}>
<div className="absolute inset-[-4px] border border-purple-500/20 rounded-xl animate-[pulse_2s_ease-in-out_infinite]" style={{animationDelay: '-1.5s'}}></div>
<iconify-icon icon="lucide:cloud"></iconify-icon>
</div>
<div className="absolute top-[50%] right-[5%] -translate-y-1/2 w-12 h-12 rounded-xl bg-[#161616] border border-neutral-800 flex items-center justify-center text-pink-400 z-20 node-anim center-y shadow-[0_0_15px_rgba(236,72,153,0.1)]" style={{animationDelay: '-2.5s'}}>
<div className="absolute inset-[-4px] border border-pink-500/20 rounded-xl animate-[pulse_2s_ease-in-out_infinite]" style={{animationDelay: '-2.5s'}}></div>
<iconify-icon icon="lucide:cpu"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="relative z-10 w-full py-32 bg-[#0a0a0a] border-b border-neutral-900/50 overflow-hidden" id="execution-engine">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/5 blur-[150px] rounded-full pointer-events-none z-0"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2 engine-left">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-normal mb-6 shadow-[0_0_15px_rgba(249,115,22,0.15)]">
<iconify-icon className="text-base animate-pulse" icon="lucide:zap"></iconify-icon>
              Sub-millisecond Execution
            </div>
<h2 className="text-4xl md:text-6xl font-normal text-white tracking-tight mb-6 leading-tight">
              Compiled to edge.
              <br/>
<span className="text-neutral-500">Executed globally.</span>
</h2>
<p className="text-neutral-400 text-lg font-light mb-8 max-w-md leading-relaxed">
              Your visual workflows are instantly compiled to highly optimized
              V8 isolates and deployed to 35+ edge regions worldwide.
            </p>
<ul className="flex flex-col gap-4">
<li className="flex items-center gap-3 text-neutral-300 text-base font-light">
<div className="w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-orange-500 shrink-0">
<iconify-icon className="text-base" icon="lucide:check-circle"></iconify-icon>
</div>
                Zero cold starts for instant response times
              </li>
<li className="flex items-center gap-3 text-neutral-300 text-base font-light">
<div className="w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-orange-500 shrink-0">
<iconify-icon className="text-base" icon="lucide:check-circle"></iconify-icon>
</div>
                Automatic horizontal scaling on demand
              </li>
<li className="flex items-center gap-3 text-neutral-300 text-base font-light">
<div className="w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-orange-500 shrink-0">
<iconify-icon className="text-base" icon="lucide:check-circle"></iconify-icon>
</div>
                Failover routing built-in natively
              </li>
</ul>
</div>
<div className="w-full lg:w-1/2 relative engine-right perspective-1000 h-[400px] flex items-center justify-center">

<div className="w-full max-w-lg bg-[#0d0d0d] rounded-2xl border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 relative z-20 code-window">
<div className="h-10 border-b border-neutral-800/80 bg-[#141414] flex items-center px-4 gap-2 relative">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-600"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-600"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-600"></div>
<div className="absolute left-1/2 -translate-x-1/2 text-[11px] text-neutral-500 font-mono tracking-wider">
                  edge-runtime.log
                </div>
</div>
<div className="p-6 font-mono text-sm text-neutral-400 h-64 overflow-hidden relative leading-loose">
<div className="flex flex-col gap-1">
<div className="typing-line text-neutral-500" style={{width: '100%'}}>
                    Initializing V8 isolate context...
                  </div>
<div className="typing-line" style={{width: '100%'}}>
<span className="text-blue-400">INFO</span>
                    Deploying workflow:
                    <span className="text-white">user_sync_v2</span>
</div>
<div className="typing-line" style={{width: '100%'}}>
<span className="text-blue-400">INFO</span>
                    Compiling visual nodes to AST
                  </div>
<div className="typing-line" style={{width: '100%'}}>
<span className="text-green-400">SUCCESS</span>
                    AST compiled in 12ms
                  </div>
<div className="typing-line" style={{width: '100%'}}>
<span className="text-blue-400">INFO</span>
                    Distributing to 35 global edge regions
                  </div>
<div className="typing-line text-green-400" style={{width: '100%'}}>
                    ● Deployment active. Listening for events.
                  </div>
<div className="typing-line text-orange-400 mt-3" style={{width: '100%'}}>
                    &gt; Event payload received: { type: "payment.success" }
                  </div>
<div className="typing-line text-neutral-300" style={{width: '100%'}}>
                    ↳ Routing to PostgreSQL
                    <span className="text-neutral-600">(3ms)</span>
</div>
<div className="typing-line text-neutral-300" style={{width: '100%'}}>
                    ↳ Routing to SendGrid
                    <span className="text-neutral-600">(15ms)</span>
</div>
<div className="typing-line text-green-400" style={{width: '100%'}}>
                    ✓ Workflow execution completed
                    <span className="text-neutral-600">(18ms total)</span>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#0d0d0d] to-transparent pointer-events-none"></div>
</div>
</div>

<div className="absolute inset-0 z-10 pointer-events-none">
<div className="absolute top-[15%] right-[-5%] w-16 h-16 glass-panel rounded-2xl flex items-center justify-center animate-float-slow text-neutral-500">
<iconify-icon className="text-2xl" icon="lucide:server"></iconify-icon>
</div>
<div className="absolute bottom-[20%] right-[5%] w-14 h-14 glass-panel rounded-xl flex items-center justify-center animate-float-fast text-orange-500/50 border-orange-500/20">
<iconify-icon className="text-xl" icon="lucide:globe"></iconify-icon>
</div>
<div className="absolute top-[30%] left-[-10%] w-20 h-20 glass-panel rounded-3xl flex items-center justify-center animate-float-med text-neutral-600">
<iconify-icon className="text-3xl" icon="lucide:cpu"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#050505] w-full border-neutral-900/50 border-b py-32 relative" id="data-transformation">
<style>
        @keyframes pulseSweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes highlightRow1 {
          0%, 25%, 100% { background-color: transparent; border-color: transparent; }
          5%, 20% { background-color: rgba(249, 115, 22, 0.08); border-color: rgba(249, 115, 22, 0.4); }
        }
        @keyframes highlightRow2 {
          0%, 25%, 33%, 58%, 100% { background-color: transparent; border-color: transparent; }
          38%, 53% { background-color: rgba(249, 115, 22, 0.08); border-color: rgba(249, 115, 22, 0.4); }
        }
        @keyframes highlightRow3 {
          0%, 58%, 66%, 91%, 100% { background-color: transparent; border-color: transparent; }
          71%, 86% { background-color: rgba(249, 115, 22, 0.08); border-color: rgba(249, 115, 22, 0.4); }
        }
      </style>
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-normal text-white tracking-tight mb-4">
            Transform data on the fly
          </h2>
<p className="text-neutral-400 text-lg font-light max-w-xl mx-auto">
            No more brittle scripts. Map fields visually and apply powerful
            transformations instantly.
          </p>
</div>
<div className="relative w-full max-w-5xl mx-auto flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-0">

<div className="w-full md:w-[42%] bg-[#0a0a0a] rounded-xl border border-neutral-800 shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col relative z-10 hover:border-neutral-700 transition-colors duration-500 gs-fade-up">
<div className="px-5 py-3 border-b border-neutral-800/80 bg-[#111] flex justify-between items-center">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400 text-sm" icon="lucide:credit-card"></iconify-icon>
<span className="text-xs font-medium text-neutral-300 tracking-wide">
                  Stripe Webhook Payload
                </span>
</div>
</div>
<div className="py-5 font-mono text-sm leading-loose text-neutral-400 flex-1">
<div className="px-5">{</div>
<div className="px-5 py-1 border-l-2 border-transparent transition-colors duration-300" style={{animation: 'highlightRow1 9s infinite'}}>
<span className="text-blue-400">"user_id"</span>
<span className="text-neutral-500">:</span>
<span className="text-green-400">"usr_9x8j2"</span>
                ,
              </div>
<div className="px-5 py-1 border-l-2 border-transparent transition-colors duration-300" style={{animation: 'highlightRow2 9s infinite'}}>
<span className="text-blue-400">"full_name"</span>
<span className="text-neutral-500">:</span>
<span className="text-green-400">"Jane Doe"</span>
                ,
              </div>
<div className="px-5 py-1 border-l-2 border-transparent transition-colors duration-300" style={{animation: 'highlightRow3 9s infinite'}}>
<span className="text-blue-400">"amount_cents"</span>
<span className="text-neutral-500">:</span>
<span className="text-yellow-400">4900</span>
                ,
              </div>
<div className="px-5 py-1 border-l-2 border-transparent">
<span className="text-blue-400">"currency"</span>
<span className="text-neutral-500">:</span>
<span className="text-green-400">"usd"</span>
</div>
<div className="px-5">}</div>
</div>
</div>

<div className="flex-1 hidden md:flex items-center justify-center relative z-0 min-w-[4rem]">

<div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-neutral-800 overflow-hidden">
<div className="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50" style={{animation: 'pulseSweep 3s infinite linear'}}></div>
</div>

<div className="relative z-10 w-12 h-12 rounded-xl bg-[#0a0a0a] border border-neutral-700 flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.15)] group-hover:border-orange-500/50 transition-colors">
<iconify-icon className="text-orange-500 text-lg" icon="lucide:arrow-right-left"></iconify-icon>
</div>
</div>

<div className="md:hidden flex justify-center py-4 relative z-0">
<div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-neutral-800"></div>
<div className="relative z-10 w-10 h-10 rounded-full bg-[#0a0a0a] border border-neutral-700 flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.15)]">
<iconify-icon className="text-orange-500 text-lg" icon="lucide:arrow-down"></iconify-icon>
</div>
</div>

<div className="w-full md:w-[42%] bg-[#0a0a0a] rounded-xl border border-neutral-800 shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col relative z-10 hover:border-neutral-700 transition-colors duration-500 gs-fade-up">
<div className="px-5 py-3 border-b border-neutral-800/80 bg-[#111] flex justify-between items-center">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400 text-sm" icon="lucide:cloud"></iconify-icon>
<span className="text-xs font-medium text-neutral-300 tracking-wide">
                  Salesforce Contact Record
                </span>
</div>
</div>
<div className="py-5 font-mono text-sm leading-loose text-neutral-400 flex-1">
<div className="px-5">{</div>
<div className="px-5 py-1 border-l-2 border-transparent transition-colors duration-300" style={{animation: 'highlightRow1 9s infinite'}}>
<span className="text-purple-400">"ContactId"</span>
<span className="text-neutral-500">:</span>
<span className="text-green-400">"usr_9x8j2"</span>
                ,
              </div>
<div className="px-5 py-1 border-l-2 border-transparent transition-colors duration-300" style={{animation: 'highlightRow2 9s infinite'}}>
<span className="text-purple-400">"FirstName"</span>
<span className="text-neutral-500">:</span>
<span className="text-green-400">"Jane"</span>
                ,
              </div>
<div className="px-5 py-1 border-l-2 border-transparent transition-colors duration-300" style={{animation: 'highlightRow2 9s infinite'}}>
<span className="text-purple-400">"LastName"</span>
<span className="text-neutral-500">:</span>
<span className="text-green-400">"Doe"</span>
                ,
              </div>
<div className="px-5 py-1 border-l-2 border-transparent transition-colors duration-300" style={{animation: 'highlightRow3 9s infinite'}}>
<span className="text-purple-400">"Revenue_USD"</span>
<span className="text-neutral-500">:</span>
<span className="text-yellow-400">49.00</span>
</div>
<div className="px-5">}</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 overflow-hidden bg-[#0a0a0a] w-full border-neutral-900/50 border-b pt-32 pb-32 relative" id="collaboration">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
<div className="w-full lg:w-1/2 gs-fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-normal mb-6 shadow-[0_0_15px_rgba(249,115,22,0.15)] backdrop-blur-md">
<iconify-icon className="text-base" icon="lucide:users"></iconify-icon>
              Multiplayer Mode
            </div>
<h2 className="text-4xl md:text-6xl font-normal text-white tracking-tight mb-6 leading-tight">
              Build and debug
              <br/>
<span className="text-neutral-500">with your entire team.</span>
</h2>
<p className="text-neutral-400 text-lg font-light mb-8 max-w-md leading-relaxed">
              Invite stakeholders to view, comment, or edit workflows in
              real-time. See who's doing what with live presence indicators and
              version history.
            </p>
<ul className="flex flex-col gap-4 mb-8">
<li className="flex items-center gap-3 text-neutral-300 text-base font-light">
<div className="w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-orange-500 shrink-0">
<iconify-icon className="text-base" icon="lucide:check-circle"></iconify-icon>
</div>
                Live cursor tracking and presence
              </li>
<li className="flex items-center gap-3 text-neutral-300 text-base font-light">
<div className="w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-orange-500 shrink-0">
<iconify-icon className="text-base" icon="lucide:check-circle"></iconify-icon>
</div>
                Inline commenting and approvals
              </li>
<li className="flex items-center gap-3 text-neutral-300 text-base font-light">
<div className="w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-orange-500 shrink-0">
<iconify-icon className="text-base" icon="lucide:check-circle"></iconify-icon>
</div>
                Granular permission controls
              </li>
</ul>
</div>
<div className="w-full lg:w-1/2 relative gs-scale-up group perspective-1000">
<div className="absolute inset-0 bg-orange-500/20 blur-[100px] rounded-full pointer-events-none z-0 transform group-hover:scale-110 transition-transform duration-700"></div>
<div className="relative z-10 rounded-[2rem] overflow-hidden border border-neutral-800 shadow-2xl transform rotate-y-[-2deg] rotate-x-[2deg] group-hover:rotate-0 transition-transform duration-700">
<img alt="Collaboration Dashboard" className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0255963c-52aa-4da8-b87e-9a8069544a92_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent opacity-80 pointer-events-none"></div>
<div className="absolute top-6 left-6 flex -space-x-2">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-neutral-900 animate-float-slow" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-neutral-900 animate-float-fast" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;h=100&amp;fit=crop" style={{animationDelay: '1s'}}/>
<div className="w-10 h-10 rounded-full border-2 border-neutral-900 bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-sm text-white font-medium animate-float-med relative" style={{animationDelay: '2s'}}>
<div className="radar-ping"></div>
                  +3
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 overflow-hidden bg-[#050505] w-full border-neutral-900/50 border-b pt-32 pb-32 relative" id="observability">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
<div className="w-full lg:w-1/2 gs-fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-normal mb-6 shadow-[0_0_15px_rgba(249,115,22,0.15)] backdrop-blur-md">
<iconify-icon className="text-base" icon="lucide:activity"></iconify-icon>
              Deep Observability
            </div>
<h2 className="text-4xl md:text-6xl font-normal text-white tracking-tight mb-6 leading-tight">
              See everything.
              <br/>
<span className="text-neutral-500">Miss nothing.</span>
</h2>
<p className="text-neutral-400 text-lg font-light mb-8 max-w-md leading-relaxed">
              Gain unparalleled visibility into your automated processes. Track
              every payload, trace every error, and optimize performance with
              comprehensive logs and metrics.
            </p>
<button className="px-6 py-2.5 rounded-full bg-[#111] hover:bg-neutral-800 border border-neutral-800 text-white text-base font-normal transition-all group flex items-center gap-2 w-max">
              Explore Analytics
              <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
<div className="w-full lg:w-1/2 relative gs-scale-up group perspective-1000">
<div className="absolute inset-0 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none z-0 transform group-hover:scale-110 transition-transform duration-700"></div>
<div className="relative z-10 rounded-[2rem] overflow-hidden border border-neutral-800 shadow-2xl bg-[#0a0a0a] transform rotate-y-[2deg] rotate-x-[2deg] group-hover:rotate-0 transition-transform duration-700">
<img alt="Observability Metrics" className="w-full h-[400px] object-cover opacity-60 transform group-hover:scale-105 transition-transform duration-1000 ease-out mix-blend-luminosity hover:mix-blend-normal pan-image" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/690aa51e-05fd-4ee3-9f85-fd7eb61571e1_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-transparent to-transparent pointer-events-none"></div>
<div className="absolute bottom-6 left-6 right-6 h-28 bg-neutral-900/80 backdrop-blur-md rounded-xl border border-white/10 p-5 flex items-end gap-2.5">
<div className="w-full bg-orange-500/40 rounded-t-sm h-[40%] animate-[pulse_2s_ease-in-out_infinite]"></div>
<div className="w-full bg-orange-500/60 rounded-t-sm h-[60%] animate-[pulse_2s_ease-in-out_infinite]" style={{animationDelay: '100ms'}}></div>
<div className="w-full bg-orange-500/80 rounded-t-sm h-[30%] animate-[pulse_2s_ease-in-out_infinite]" style={{animationDelay: '200ms'}}></div>
<div className="w-full bg-orange-500/50 rounded-t-sm h-[70%] animate-[pulse_2s_ease-in-out_infinite]" style={{animationDelay: '300ms'}}></div>
<div className="w-full bg-orange-500/90 rounded-t-sm h-[100%] animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_15px_rgba(249,115,22,0.4)]" style={{animationDelay: '400ms'}}></div>
<div className="w-full bg-orange-500/70 rounded-t-sm h-[80%] animate-[pulse_2s_ease-in-out_infinite]" style={{animationDelay: '500ms'}}></div>
<div className="w-full bg-orange-500/40 rounded-t-sm h-[50%] animate-[pulse_2s_ease-in-out_infinite]" style={{animationDelay: '600ms'}}></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 w-full py-32 overflow-hidden bg-[#050505]">
<style>
        .test-card-inner {
            transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
            transform-style: preserve-3d;
            border: 1px solid rgba(255, 255, 255, 0.05);
            box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.05), 0 10px 30px -10px rgba(0, 0, 0, 0.5);
        }
        .test-card-wrapper:hover .test-card-inner {
            transform: translateY(-16px) scale(1.02);
            border-color: rgba(249, 115, 22, 0.3);
            box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 20px 40px -10px rgba(249, 115, 22, 0.15);
            background: rgba(30, 30, 30, 0.4);
        }
        .center-card .test-card-inner {
            box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.08), 0 20px 40px -15px rgba(0, 0, 0, 0.8);
            border-color: rgba(255, 255, 255, 0.1);
            background: linear-gradient(180deg, rgba(35, 35, 35, 0.5) 0%, rgba(15, 15, 15, 0.8) 100%);
        }
        .center-card:hover .test-card-inner {
            border-color: rgba(249, 115, 22, 0.5);
            box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.15), 0 30px 60px -15px rgba(249, 115, 22, 0.2);
            background: linear-gradient(180deg, rgba(40, 40, 40, 0.6) 0%, rgba(20, 20, 20, 0.9) 100%);
        }
        .shine-layer {
            position: absolute;
            top: 0;
            left: -150%;
            width: 70%;
            height: 100%;
            background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.08), transparent);
            transform: skewX(-25deg);
            pointer-events: none;
        }
        .test-card-wrapper:hover .shine-layer {
            animation: card-shine 2.5s infinite;
        }
        @keyframes card-shine {
            0% { left: -150%; }
            100% { left: 200%; }
        }
        .anim-ring {
            stroke-dasharray: 60 30;
            animation: ring-spin 6s linear infinite;
            transform-origin: center;
        }
        .test-card-wrapper:hover .anim-ring {
            animation: ring-spin 3s linear infinite;
        }
        @keyframes ring-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .bg-noise-layer {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
            opacity: 0.15;
            mix-blend-mode: overlay;
        }
        .ambient-glow-left {
            animation: pulse-glow 4s infinite alternate;
        }
        @keyframes pulse-glow {
            0% { opacity: 0.3; transform: scale(0.95); }
            100% { opacity: 0.6; transform: scale(1.05); }
        }
      </style>

<div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#111111] z-0 pointer-events-none"></div>
<div className="absolute inset-0 bg-noise-layer z-0 pointer-events-none"></div>

<div className="absolute top-1/2 left-[-15%] -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/20 blur-[150px] rounded-full pointer-events-none z-0 ambient-glow-left"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="text-center mb-24 gs-fade-up">
<h2 className="text-5xl md:text-6xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60 tracking-tight mb-4">
            Loved by builders
          </h2>
<p className="text-lg font-light text-neutral-400 max-w-xl mr-auto ml-auto">
            Discover why the most forward-thinking teams choose our
            infrastructure to scale.
          </p>
</div>

<div className="flex flex-col xl:flex-row items-center justify-center relative w-full gap-8 xl:gap-0 mt-8">

<div className="gs-stagger-test test-card-wrapper relative z-10 xl:-mr-12 w-full max-w-sm xl:scale-95 origin-right">
<div className="test-card-inner relative w-full h-full p-8 rounded-[2rem] bg-[#141414]/60 backdrop-blur-2xl overflow-hidden group">
<div className="shine-layer"></div>
<svg className="absolute top-8 right-8 w-10 h-10 text-white/[0.03] group-hover:text-orange-500/10 transition-colors duration-500" fill="currentColor" viewbox="0 0 24 24">
<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
</svg>
<h3 className="text-2xl font-normal text-white mb-4 tracking-tight group-hover:text-orange-100 transition-colors relative z-10">
                "A Game Changer"
              </h3>
<p className="text-base text-neutral-400 font-light leading-relaxed mb-8 group-hover:text-neutral-300 transition-colors relative z-10">
                "NexusFlow cut our API integration time by 80%. We replaced
                thousands of lines of fragile scripts with a few visual
                workflows. It's absolute magic."
              </p>
<div className="flex items-center gap-4 mt-auto relative z-10">
<div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center">
<svg className="absolute inset-[-6px] w-[calc(100%+12px)] h-[calc(100%+12px)] text-orange-500/30 group-hover:text-orange-500/80 transition-colors duration-500" fill="none" viewbox="0 0 100 100">
<circle className="anim-ring" cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1.5"></circle>
</svg>
<img alt="John Doe" className="w-full h-full object-cover z-10 border-white/10 border rounded-full relative" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/986db8ed-1c5d-42fb-8c1d-4b3716d2e317_320w.jpg"/>
</div>
<div className="">
<div className="text-base font-normal text-white">John Doe</div>
<div className="text-sm text-neutral-500">
                    Lead Engineer, TechCo
                  </div>
</div>
</div>
</div>
</div>

<div className="gs-stagger-test test-card-wrapper center-card relative z-30 w-full max-w-md origin-center">
<div className="test-card-inner relative w-full h-full p-10 rounded-[2rem] backdrop-blur-3xl overflow-hidden group center-card-rock">
<div className="shine-layer"></div>
<svg className="absolute top-10 right-10 w-12 h-12 text-white/[0.03] group-hover:text-orange-500/10 transition-colors duration-500" fill="currentColor" viewbox="0 0 24 24">
<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
</svg>
<h3 className="text-3xl font-normal text-white mb-4 tracking-tight group-hover:text-orange-50 transition-colors relative z-10">
                "Saves us hours daily"
              </h3>
<p className="text-base md:text-lg text-neutral-300 font-light leading-relaxed mb-8 group-hover:text-white transition-colors relative z-10">
                "The telemetry features alone are worth it. Knowing exactly
                where a payload failed across 5 different services instantly
                saves us hours of debugging every single day."
              </p>
<div className="flex items-center gap-4 mt-auto relative z-10 pt-4">
<div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center">
<svg className="absolute inset-[-6px] w-[calc(100%+12px)] h-[calc(100%+12px)] text-orange-500/50 group-hover:text-orange-400 transition-colors duration-500" fill="none" viewbox="0 0 100 100">
<circle className="anim-ring" cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2"></circle>
</svg>
<img alt="Alice Smith" className="w-full h-full rounded-full object-cover border border-white/20 relative z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/90ec73f0-6fd3-4d0c-922c-fcc592c983df_320w.webp"/>
</div>
<div className="">
<div className="text-lg font-normal text-white">Alice Smith</div>
<div className="text-base text-neutral-400 group-hover:text-neutral-300 transition-colors">
                    CTO, DataFlow
                  </div>
</div>
</div>
</div>
</div>

<div className="gs-stagger-test test-card-wrapper relative z-10 xl:-ml-12 w-full max-w-sm xl:scale-95 origin-left">
<div className="test-card-inner relative w-full h-full p-8 rounded-[2rem] bg-[#141414]/60 backdrop-blur-2xl overflow-hidden group">
<div className="shine-layer"></div>
<svg className="absolute top-8 right-8 w-10 h-10 text-white/[0.03] group-hover:text-orange-500/10 transition-colors duration-500" fill="currentColor" viewbox="0 0 24 24">
<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
</svg>
<h3 className="text-2xl font-normal text-white mb-4 tracking-tight group-hover:text-orange-100 transition-colors relative z-10">
                "Incredibly intuitive"
              </h3>
<p className="text-base text-neutral-400 font-light leading-relaxed mb-8 group-hover:text-neutral-300 transition-colors relative z-10">
                "I'm not a developer, but I set up our entire marketing-to-sales
                data sync in an afternoon using their visual builder. It feels
                incredibly seamless."
              </p>
<div className="flex items-center gap-4 mt-auto relative z-10">
<div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center">
<svg className="absolute inset-[-6px] w-[calc(100%+12px)] h-[calc(100%+12px)] text-orange-500/30 group-hover:text-orange-500/80 transition-colors duration-500" fill="none" viewbox="0 0 100 100">
<circle className="anim-ring" cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1.5"></circle>
</svg>
<img alt="Mark Jones" className="w-full h-full rounded-full object-cover border border-white/10 relative z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39e15168-9f77-4837-9a4b-89c74b8bc38b_320w.webp"/>
</div>
<div>
<div className="text-base font-normal text-white">Mark Jones</div>
<div className="text-sm text-neutral-500">RevOps, StartUp</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 w-full py-32 bg-[#050505] border-t border-neutral-900/50 overflow-hidden" id="architecture">
<div className="max-w-[1200px] mx-auto px-6 relative z-10">

<header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 lg:px-8 gs-fade-up">
<h2 className="text-5xl md:text-6xl lg:text-7xl w-full md:w-[65%] leading-[1.05] text-white font-light tracking-tight drop-shadow-sm new-hero-title">
            Architecting Resilient Workflows.
          </h2>
<p className="text-base md:text-lg text-neutral-400 w-full md:w-[30%] max-w-sm text-balance mb-2 md:mb-4 font-light tracking-wide border-l border-white/10 pl-4">
            Discover purposeful automation and robust integrations engineered to
            transform daily operations while safeguarding your data.
          </p>
</header>

<div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 h-auto md:h-[600px] lg:px-8">

<div className="md:col-span-4 flex flex-col gap-4 lg:gap-6 h-full gs-fade-up">

<article className="relative border border-neutral-800 flex-1 overflow-hidden group cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-1 bg-[#0a0a0a] rounded-xl border-pulse-anim">
<div className="absolute inset-0 z-0 bg-neutral-900">
<img alt="Data Mapping" className="w-full h-full object-cover opacity-40 mix-blend-overlay group-hover:opacity-60 transition-opacity duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
<div className="relative z-10 p-6 md:p-8 flex flex-col h-full justify-end">
<h3 className="text-2xl font-normal text-white mb-2 tracking-tight group-hover:text-orange-400 transition-colors">
                  Visual Mapping
                </h3>
<p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed">
                  Intuitive drag-and-drop canvas for complex data routing,
                  eliminating the need for rigid integration scripts.
                </p>
</div>
</article>

<article className="relative border border-neutral-800 flex-1 overflow-hidden group cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-1 bg-[#111111] rounded-xl p-6 md:p-8 flex flex-col justify-between">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[50px] rounded-full group-hover:bg-orange-500/20 transition-colors duration-500"></div>
<div className="text-orange-500 w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-xl" icon="lucide:zap"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-xl font-normal text-white mb-2 tracking-tight">
                  Zero Latency
                </h3>
<p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed">
                  Edge-deployed configurations ensure sub-millisecond execution
                  globally without cold starts.
                </p>
</div>
</article>
</div>

<div className="md:col-span-4 h-full gs-fade-up" style={{animationDelay: '100ms'}}>
<article className="relative border border-neutral-800 h-full overflow-hidden group cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-1 bg-[#0a0a0a] rounded-xl">
<div className="absolute inset-0 z-0 bg-neutral-900">
<img alt="Server Infrastructure" className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/123d5123-5c17-48c6-b870-726635b7b6d2/800w.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
<div className="relative z-10 p-6 md:p-8 flex flex-col h-full justify-end">
<div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shadow-2xl">
<iconify-icon className="text-3xl" icon="lucide:shield-check"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-normal text-white mb-3 tracking-tight">
                  Enterprise Grade Security
                </h3>
<p className="text-base text-neutral-400 font-light leading-relaxed">
                  SOC2 Type II compliant infrastructure with end-to-end
                  encryption. Granular access controls ensure your data never
                  rests in unauthorized regions.
                </p>
</div>
</article>
</div>

<div className="md:col-span-4 flex flex-col gap-4 lg:gap-6 h-full gs-fade-up" style={{animationDelay: '200ms'}}>

<article className="relative border border-neutral-800 h-[60%] overflow-hidden group cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-1 bg-[#111111] rounded-xl p-6 md:p-8 flex flex-col justify-between">
<div>
<h3 className="text-5xl font-light text-white mb-3 tracking-tighter">
                  99.99%
                </h3>
<p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed">
                  Uptime SLA guaranteed for your most mission-critical
                  orchestrations.
                </p>
</div>
<div className="mt-8 flex gap-1.5 h-16 items-end">
<div className="w-full bg-neutral-800 rounded-t-sm h-[40%] group-hover:bg-neutral-700 transition-colors duration-300"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[60%] group-hover:bg-neutral-700 transition-colors duration-300 delay-75"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[75%] group-hover:bg-neutral-700 transition-colors duration-300 delay-100"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[50%] group-hover:bg-neutral-700 transition-colors duration-300 delay-150"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[85%] group-hover:bg-neutral-700 transition-colors duration-300 delay-200"></div>
<div className="w-full bg-orange-500 rounded-t-sm h-[100%] shadow-[0_0_15px_rgba(249,115,22,0.4)] relative overflow-hidden group-hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] transition-shadow duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
</div>
</div>
</article>

<article className="relative border border-orange-500/20 h-[40%] overflow-hidden group cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 bg-gradient-to-br from-orange-600 to-orange-800 rounded-xl p-6 md:p-8 flex items-center justify-between shadow-[0_10px_30px_-10px_rgba(249,115,22,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(249,115,22,0.5)]">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==')] opacity-20 group-hover:opacity-30 transition-opacity"></div>
<div className="relative z-10">
<h3 className="text-2xl font-normal text-white mb-1 tracking-tight">
                  View Docs
                </h3>
<p className="text-sm md:text-base text-orange-200 font-light">
                  Explore the API references
                </p>
</div>
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:translate-x-2 group-hover:bg-white/30 transition-all duration-300 relative z-10">
<iconify-icon className="text-xl" icon="lucide:arrow-right"></iconify-icon>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="md:py-40 overflow-visible bg-[#000000] w-full border-neutral-900/80 border-t pt-32 pb-32 relative" id="pricing">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/30 blur-[150px] rounded-full pointer-events-none z-0 animate-pulse"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 gs-scale-up">
<h2 className="text-5xl md:text-7xl font-normal text-white tracking-tight mb-8 drop-shadow-sm leading-tight">
          Ready to automate your
          <br className="hidden md:block"/>
          entire workflow?
        </h2>
<p className="text-lg md:text-xl text-neutral-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          Join thousands of developers and forward-thinking teams building the
          future of internal tooling and automation without limits.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-5">
<button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black hover:bg-neutral-200 text-base font-medium transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] flex items-center justify-center gap-2">
            Start Building for Free
            <iconify-icon className="text-lg" icon="lucide:arrow-right"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-4 rounded-full border border-neutral-800 bg-neutral-950 hover:bg-neutral-900 text-white text-base font-normal transition-all backdrop-blur-md">
            Talk to Sales
          </button>
</div>
<p className="text-sm text-neutral-600 mt-6 font-light">
          No credit card required. 14-day free trial on Pro plans.
        </p>
</div>
</section>

<footer className="overflow-hidden z-10 bg-[#000000] border-neutral-900/80 border-t pt-16 pb-8 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-3 text-lg font-normal tracking-tight text-white mb-6">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.3)]">
<iconify-icon className="text-white text-xl" icon="lucide:layers"></iconify-icon>
</div>
<span className="tracking-tight">NexusFlow</span>
</div>
<p className="text-sm text-neutral-400 font-light max-w-xs leading-relaxed mb-6">
              The modern automation platform designed for speed, scale, and
              seamless integrations. Build faster, break less.
            </p>
<div className="flex items-center gap-4 text-neutral-500">
<a className="hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="lucide:twitter"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="lucide:github"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="lucide:linkedin"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="lucide:youtube"></iconify-icon>
</a>
</div>
</div>
<div className="">
<h4 className="text-white font-medium mb-6 text-sm">Product</h4>
<ul className="flex flex-col gap-4 text-sm text-neutral-400 font-light">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Integrations
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Visual Builder
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Edge Engine
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-6 text-sm">Resources</h4>
<ul className="flex flex-col gap-4 text-sm text-neutral-400 font-light">
<li className="">
<a className="hover:text-white transition-colors" href="#">
                  Documentation
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
                  API Reference
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Community
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-6 text-sm">Company</h4>
<ul className="flex flex-col gap-4 text-sm text-neutral-400 font-light">
<li className="">
<a className="hover:text-white transition-colors" href="#">
                  About Us
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
                  Careers
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Customers
                </a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row gap-4 border-neutral-900/80 border-t pt-8 gap-x-4 gap-y-4 items-center justify-between">
<div className="text-sm text-neutral-600 font-light">
            © 2023 NexusFlow Inc. All rights reserved.
          </div>
<div className="flex gap-6 text-sm text-neutral-600 font-light">
<a className="hover:text-neutral-300 transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-neutral-300 transition-colors" href="#">
              Terms of Service
            </a>
<a className="hover:text-neutral-300 transition-colors" href="#">
              Security
            </a>
</div>
</div>
</div>
</footer>



    </>
  );
}
