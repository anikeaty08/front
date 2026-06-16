import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


        (function() {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.counter');
                counters.forEach(counter => {
                  const target = parseFloat(counter.getAttribute('data-target'));
                  const duration = 2000;
                  const startTime = performance.now();

                  const updateCount = (currentTime) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const ease = 1 - Math.pow(1 - progress, 3); // Cubic ease-out

                    const current = target * ease;

                    if (Number.isInteger(target)) {
                      counter.innerText = Math.floor(current);
                    } else {
                      counter.innerText = current.toFixed(1);
                    }

                    if (progress < 1) {
                      requestAnimationFrame(updateCount);
                    } else {
                      counter.innerText = target;
                    }
                  };
                  requestAnimationFrame(updateCount);
                });
                observer.unobserve(entry.target);
              }
            });
          }, { threshold: 0.2 });

          const section = document.getElementById('stats-section');
          if (section) observer.observe(section);
        })();
      


      lucide.createIcons({
          attrs: {
              'stroke-width': 1.5
          }
      });
    


      document.addEventListener('DOMContentLoaded', () => {
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('is-visible');
                      observer.unobserve(entry.target);
                  }
              });
          }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

          document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

          // Ensure icons in new sections are rendered
          if (window.lucide) lucide.createIcons();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="EET25BiXxR2StNXZvAzF"></div>

</div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="bg-center text-lg font-medium text-white tracking-tight bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e6ef1253-f714-416b-82fd-6d609fc8aa94_1600w.png)] bg-cover pt-8 pr-12 pb-8 pl-14 cursor-pointer" onclick="window.location.href='/home'" role="button"></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
<a className="hover:text-white transition-colors duration-200" href="/features">
            Features
          </a>
<a className="hover:text-white transition-colors duration-200" href="/method">
            Method
          </a>
<a className="hover:text-white transition-colors duration-200" href="/customers">
            Customers
          </a>
<a className="hover:text-white transition-colors duration-200" href="#">
            Changelog
          </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm text-zinc-400 hover:text-white transition-colors" href="#">
            Log in
          </a>
<a className="group relative px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 transition-all text-sm font-medium text-white overflow-hidden" href="#">
<span className="relative z-10 flex items-center gap-2">
              Get Started
              <svg className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</span>
<div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500"></div>
</a>
</div>
</div>
</nav>

<section className="overflow-x-hidden overflow-y-visible flex flex-col pt-24 pb-40 relative items-center">
<style className="">
    @keyframes line-grow {
      from { transform: scaleY(0); opacity: 0; }
      to { transform: scaleY(1); opacity: 1; }
    }
    @keyframes card-enter {
      from { transform: translateY(20px) translateZ(0); opacity: 0; }
      to { transform: translateY(0) translateZ(0); opacity: 1; }
    }
    @keyframes path-draw {
      from { stroke-dashoffset: 1000; opacity: 0; }
      to { stroke-dashoffset: 0; opacity: 0.2; }
    }
  </style>

<div className="-translate-x-1/2 blur-[120px] overflow-visible bg-emerald-500/10 w-[1000px] h-[500px] rounded-full absolute top-0 left-1/2"></div>

<div className="relative z-10 container mx-auto px-6 text-center max-w-4xl animate-reveal">
<div className="inline-flex text-sm text-emerald-400 bg-emerald-500/10 border-emerald-500/20 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 backdrop-blur-md gap-x-2 gap-y-2 items-center">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
<span className="">Project and long-term planning</span>
<svg className="w-3 h-3 opacity-50" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
      Set the product direction
    </h1>
<p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light mb-10">
      Align your team around a unified product timeline. Plan, manage, and
      track all product initiatives with Chronos' visual planning tools.
    </p>
<div className="flex flex-col sm:flex-row w-full gap-x-6 gap-y-6 items-center justify-center overflow-visible">
<a className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-zinc-900 group" href="#">
<span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#047857_0%,#000000_50%,#10b981_100%)]"></span>
<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-zinc-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors group-hover:bg-zinc-900">
          Start Building
          <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>
<a className="group flex items-center gap-3 text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-all duration-300">
<svg className="w-3 h-3 text-zinc-300 group-hover:text-emerald-400 transition-colors" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="6 3 20 12 6 21 6 3"></polygon>
</svg>
</div>
<span>Watch Demo</span>
</a>
</div>
</div>


<div className="animate-reveal delay-200 select-none overflow-visible sm:h-[480px] md:h-[520px] -mt-16 sm:-mt-20 md:-mt-24 w-full h-[440px] max-w-[1400px] relative perspective-container">
<div className="perspective-plane absolute inset-0 w-full h-full flex flex-col justify-start items-center pt-10 sm:pt-12 md:pt-14">

<div className="opacity-30 absolute inset-0"></div>

<div className="absolute top-0 bottom-0 left-[20%] w-px bg-white/5 flex flex-col justify-end pb-4 origin-top scale-y-0 opacity-0 animate-[line-grow_1s_cubic-bezier(0.16,1,0.3,1)_0.4s_forwards]">
<span className="text-zinc-500 text-xs -rotate-90 origin-bottom-left translate-x-3 mb-2">AUG 01</span>
</div>
<div className="absolute top-0 bottom-0 left-[40%] w-px bg-white/5 flex flex-col justify-end pb-4 origin-top scale-y-0 opacity-0 animate-[line-grow_1s_cubic-bezier(0.16,1,0.3,1)_0.5s_forwards]">
<span className="text-zinc-500 text-xs -rotate-90 origin-bottom-left translate-x-3 mb-2">AUG 15</span>
</div>
<div className="absolute top-0 bottom-0 left-[60%] w-px bg-white/20 z-10 flex flex-col items-start origin-top scale-y-0 opacity-0 animate-[line-grow_1s_cubic-bezier(0.16,1,0.3,1)_0.6s_forwards]">
<div className="px-2 py-1 bg-zinc-800 border border-white/10 rounded text-xs text-white -translate-y-1/2 -translate-x-1/2">
          TODAY
        </div>
</div>
<div className="absolute top-0 bottom-0 left-[80%] w-px bg-white/5 border-r border-dashed border-white/10 flex flex-col justify-end pb-4 origin-top scale-y-0 opacity-0 animate-[line-grow_1s_cubic-bezier(0.16,1,0.3,1)_0.7s_forwards]">
<span className="text-zinc-500 text-xs -rotate-90 origin-bottom-left translate-x-3 mb-2">SEP 01</span>
</div>

<div className="absolute top-[14%] left-[15%] w-[45%] h-14 bg-gradient-to-r from-zinc-800/80 to-zinc-900/80 backdrop-blur-md border border-white/10 rounded-lg flex items-center px-4 shadow-2xl group transform transition-transform hover:scale-105 opacity-0 animate-[card-enter_1s_cubic-bezier(0.16,1,0.3,1)_0.8s_forwards]">
<div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 flex items-center justify-center rounded bg-emerald-500/20 text-emerald-400">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-base text-white font-medium tracking-tight">Realtime Inference</span>
<span className="text-xs text-zinc-500">Infrastructure Team</span>
</div>
</div>
<div className="ml-auto flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-zinc-700 border border-zinc-900"></div>
<div className="w-6 h-6 rounded-full bg-zinc-600 border border-zinc-900"></div>
</div>
</div>

<div className="absolute top-[34%] left-[35%] w-[50%] h-14 bg-gradient-to-r from-zinc-800/80 to-zinc-900/80 backdrop-blur-md border border-white/10 rounded-lg flex items-center px-4 shadow-2xl opacity-0 animate-[card-enter_1s_cubic-bezier(0.16,1,0.3,1)_1s_forwards]">
<div className="flex items-center gap-3">
<div className="w-6 h-6 flex items-center justify-center rounded bg-purple-500/20 text-purple-400">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
</div>
<div className="flex flex-col">
<span className="text-base text-white font-medium tracking-tight">RLHF Fine Tuning</span>
<span className="text-xs text-zinc-500">AI Research</span>
</div>
</div>
</div>

<div className="absolute top-[56%] left-[10%] w-[30%] h-12 bg-zinc-900/40 border border-white/5 rounded-lg flex items-center px-4 opacity-0 animate-[card-enter_1s_cubic-bezier(0.16,1,0.3,1)_1.2s_forwards]">
<span className="text-sm text-zinc-400 font-medium">Q3 Prototype</span>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-0 animate-[path-draw_2s_ease-out_1.4s_forwards]" style={{zIndex: '-1'}}>
<path d="M 300 180 L 300 300 L 520 300" fill="none" stroke="white" stroke-dasharray="4 4" strokeWidth="1"></path>
</svg>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none h-full"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] pointer-events-none w-full"></div>
</div>
</section>

<section className="border-y overflow-hidden bg-zinc-950 border-white/5 pt-32 pb-32 relative">

<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="text-center max-w-3xl mr-auto mb-20 ml-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-xs mb-8 font-medium">
<svg className="lucide lucide-layers" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
<path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
<path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
</svg>
            WORKFLOW
          </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Turn chaos into predictable cycles
          </h2>
<p className="leading-relaxed text-xl font-light text-zinc-400">
            Connect your planning, coding, and deployment tools into a single
            source of truth that keeps everyone aligned.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] bg-[#0C0C0E] border border-white/10 p-8 h-[420px] hover:border-white/20 transition-all duration-500">

<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

<div className="relative z-10 flex-1 flex flex-col gap-3 items-center justify-center opacity-80 mask-image-b">

<div className="w-full max-w-[260px] flex items-center justify-between px-4 py-3 rounded-xl bg-zinc-900/80 border border-white/5 backdrop-blur-sm shadow-lg transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-500 delay-0">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
<svg className="lucide lucide-git-pull-request" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="18" r="3"></circle>
<circle cx="6" cy="6" r="3"></circle>
<path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
<line x1="6" x2="6" y1="9" y2="21"></line>
</svg>
</div>
<span className="text-sm text-zinc-300 font-medium">
                    Merge PR #420
                  </span>
</div>
<div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
<svg className="lucide lucide-check text-emerald-500" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17 4 12"></path>
</svg>
</div>
</div>

<div className="w-full max-w-[260px] flex items-center justify-between px-4 py-3 rounded-xl bg-zinc-900/60 border border-white/5 backdrop-blur-sm shadow-lg transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-500 delay-75">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
<svg className="lucide lucide-test-tube-2" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3"></path>
<path d="m16 2 6 6"></path>
<path d="M12 16H4"></path>
</svg>
</div>
<span className="text-sm text-zinc-400 font-medium">
                    Run E2E Tests
                  </span>
</div>
<div className="w-4 h-4 rounded-full border-2 border-zinc-700 border-t-zinc-400 animate-spin"></div>
</div>

<div className="w-full max-w-[260px] flex items-center justify-between px-4 py-3 rounded-xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm shadow-lg transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-500 delay-150 blur-[1px]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-500">
<svg className="lucide lucide-upload-cloud" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
<path d="M12 12v9"></path>
<path d="m16 16-4-4-4 4"></path>
</svg>
</div>
<span className="text-sm text-zinc-500 font-medium">
                    Deploy Staging
                  </span>
</div>
<div className="w-5 h-5 rounded-full border border-zinc-800"></div>
</div>
</div>

<div className="relative z-20 mt-8">
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">
                Automate cycle tasks
              </h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">
                Streamline your release process by automating manual
                checkpoints, status updates, and notifications.
              </p>
</div>
</div>

<div className="md:col-span-2 group relative flex flex-col justify-between overflow-hidden rounded-[32px] bg-[#0C0C0E] border border-white/10 p-8 h-[420px] hover:border-white/20 transition-all duration-500">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] opacity-30"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E] to-transparent z-10"></div>

<div className="relative z-10 flex-1 w-full flex items-center justify-center">

<div className="relative z-20 w-24 h-24 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shadow-[0_0_60px_rgba(168,85,247,0.15)] group-hover:shadow-[0_0_80px_rgba(168,85,247,0.25)] transition-shadow duration-700">
<div className="absolute inset-0 rounded-full border border-purple-500/20 animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-2 rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]"></div>
<svg className="lucide lucide-sparkles text-white" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
</div>


<div className="absolute w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-lg transform -translate-x-32 -translate-y-12 animate-[float_6s_ease-in-out_infinite]">
<svg className="lucide lucide-github text-zinc-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</div>

<div className="absolute w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-lg transform translate-x-32 -translate-y-8 animate-[float_7s_ease-in-out_infinite_reverse]">
<svg className="lucide lucide-message-square text-zinc-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
</div>

<div className="absolute w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-lg transform translate-x-16 translate-y-20 animate-[float_5s_ease-in-out_infinite] delay-100">
<svg className="lucide lucide-check-square text-zinc-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m9 11 3 3L22 4"></path>
<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
</svg>
</div>

<div className="absolute w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-lg transform -translate-x-20 translate-y-24 animate-[float_8s_ease-in-out_infinite_reverse] delay-200">
<svg className="lucide lucide-terminal text-zinc-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polyline points="4 17 10 11"></polyline>
<line x1="12" x2="20" y1="19" y2="19"></line>
</svg>
</div>
</div>

<div className="relative z-20 mt-8">
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">
                Orchestrate your entire stack
              </h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light max-w-lg">
                Connect your VCS, issue tracker, and communication tools into a
                single, intelligent nervous system that keeps everyone in sync
                without the noise.
              </p>
</div>
</div>

<div className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] bg-[#0C0C0E] border border-white/10 p-8 h-[380px] hover:border-white/20 transition-all duration-500">

<div className="relative z-10 flex-1 flex flex-col items-center justify-center">
<div className="w-full max-w-[240px] bg-zinc-900 border border-white/10 rounded-xl p-2 shadow-2xl group-hover:scale-105 transition-transform duration-500">
<div className="flex items-center gap-2 px-3 py-2 bg-black rounded-lg border border-white/5 mb-2">
<svg className="lucide lucide-search text-zinc-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
<span className="text-xs text-zinc-500">Search codebase...</span>
<span className="ml-auto text-[10px] bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-400 font-mono">
                    ⌘K
                  </span>
</div>
<div className="space-y-1">
<div className="h-6 w-full rounded bg-white/5 flex items-center px-2">
<div className="w-2 h-2 bg-purple-500 rounded-sm mr-2"></div>
<div className="h-1.5 w-16 bg-zinc-700 rounded"></div>
</div>
<div className="h-6 w-full rounded hover:bg-white/5 flex items-center px-2">
<div className="w-2 h-2 bg-blue-500 rounded-sm mr-2"></div>
<div className="h-1.5 w-24 bg-zinc-800 rounded"></div>
</div>
</div>
</div>
</div>
<div className="relative z-20 mt-6">
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">
                Deep Context
              </h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">
                Query your entire product history and codebase instantly with
                semantic search.
              </p>
</div>
</div>

<div className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] bg-[#0C0C0E] border border-white/10 p-8 h-[380px] hover:border-white/20 transition-all duration-500">

<div className="relative z-10 flex-1 flex flex-col items-center justify-center">
<div className="w-full max-w-[260px] bg-[#09090b] border border-white/10 rounded-lg shadow-2xl overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
<div className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-white/[0.02]">
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
</div>
<span className="text-[9px] font-mono text-zinc-500">
                    chronos.config.ts
                  </span>
</div>
<div className="p-4 font-mono text-[10px] leading-relaxed text-zinc-400">
<div className="flex">
<span className="text-zinc-600 mr-2">1</span>
<span className="text-purple-400">export default</span>
<span className="text-yellow-200">config</span>
                    ({
                  </div>
<div className="flex">
<span className="text-zinc-600 mr-2">2</span>
<span className="text-blue-300">workflows</span>
                    : {
                  </div>
<div className="flex">
<span className="text-zinc-600 mr-2">3</span>
<span className="text-emerald-300">auto_merge</span>
                    :
                    <span className="text-orange-300">true</span>
                    ,
                  </div>
<div className="flex">
<span className="text-zinc-600 mr-2">4</span>
<span className="text-blue-300">reviews</span>
                    :
                    <span className="text-white">2</span>
</div>
<div className="flex">
<span className="text-zinc-600 mr-2">5</span>
                    }
                  </div>
<div className="flex">
<span className="text-zinc-600 mr-2">6</span>
                    });
                  </div>
</div>
</div>
</div>
<div className="relative z-20 mt-6">
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">
                Config as Code
              </h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">
                Define your team's processes, automations, and rules directly in
                TypeScript.
              </p>
</div>
</div>

<div className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] bg-[#0C0C0E] border border-white/10 p-8 h-[380px] hover:border-white/20 transition-all duration-500">

<div className="z-10 flex-1 flex relative items-center justify-center reveal-on-scroll">
<style>
                .is-visible .animate-draw-path { animation: draw-path 2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
                .is-visible .animate-pop-dot { animation: pop-dot 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; opacity: 0; }
                @keyframes draw-path { to { stroke-dashoffset: 0; } }
                @keyframes pop-dot { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }
              </style>
<div className="relative w-full h-32 flex items-center justify-center">
<svg className="absolute inset-0 w-full h-full text-zinc-800" viewbox="0 0 200 100">
<path className="opacity-30" d="M20,80 Q60,80 80,50 T180,20" fill="none" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="2"></path>
<path className="group-hover:opacity-100 opacity-60 transition-opacity duration-700 animate-draw-path" d="M20,80 Q60,80 80,50 T180,20" fill="none" stroke="url(#gradient-line)" stroke-dasharray="300" stroke-dashoffset="300" strokeWidth="2"></path>
<defs>
<lineargradient id="gradient-line" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#3f3f46" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#10b981"></stop>
<stop offset="100%" stop-color="#34d399"></stop>
</lineargradient>
</defs>
</svg>

<div className="absolute left-[40%] top-[50%] w-3 h-3 rounded-full bg-zinc-800 border border-white/10 group-hover:bg-emerald-500 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all duration-500 animate-pop-dot" style={{animationDelay: '0.6s', transform: 'scale(0)'}}></div>
<div className="absolute right-[10%] top-[20%] w-3 h-3 rounded-full bg-zinc-800 border border-white/10 group-hover:bg-emerald-400 group-hover:shadow-[0_0_10px_rgba(52,211,153,0.5)] transition-all duration-500 animate-pop-dot" style={{animationDelay: '0.9s', transform: 'scale(0)'}}>
<div className="absolute -top-6 -right-2 text-[9px] bg-zinc-800 text-white px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    +24%
                  </div>
</div>
</div>
</div>
<div className="relative z-20 mt-6">
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">
                Velocity Insights
              </h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">
                Real-time metrics on team throughput, cycle time, and planning
                accuracy.
              </p>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden md:py-32 bg-zinc-900/10 border-white/5 border-b pt-24 pb-24 relative">

<div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-zinc-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div className="absolute right-0 bottom-0 w-96 h-96 bg-zinc-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="order-2 lg:order-1 group select-none w-full h-[520px] relative perspective-midrange">
<style>
              /* Scoped animations that trigger only when the element is in view */
              .reveal-on-scroll.is-visible .animate-graph-line {
                animation: graph-draw 2.5s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s forwards;
              }
              .reveal-on-scroll.is-visible .animate-graph-area {
                animation: graph-fade-up 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s forwards;
              }
              .reveal-on-scroll.is-visible .animate-graph-stats {
                animation: graph-fade-up 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.6s forwards;
              }
              .reveal-on-scroll.is-visible .animate-stat-bar-1 {
                animation: graph-grow 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.8s forwards;
              }
              .reveal-on-scroll.is-visible .animate-stat-bar-2 {
                animation: graph-grow 1.5s cubic-bezier(0.16, 1, 0.3, 1) 1.0s forwards;
              }

              /* Front card metric bars */
              .reveal-on-scroll.is-visible .animate-metric-bar-1 {
                animation: graph-grow 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
              }
              .reveal-on-scroll.is-visible .animate-metric-bar-2 {
                animation: graph-grow 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
              }
              .reveal-on-scroll.is-visible .animate-metric-bar-3 {
                animation: graph-grow 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.8s forwards;
              }

              @keyframes graph-draw {
                from { stroke-dashoffset: 1000; opacity: 0; }
                to { stroke-dashoffset: 0; opacity: 1; }
              }
              @keyframes graph-fade-up {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
              @keyframes graph-grow {
                from { transform: scaleX(0); }
                to { transform: scaleX(1); }
              }
            </style>

<div className="absolute top-0 left-0 w-[85%] h-[80%] bg-zinc-900/30 backdrop-blur-xl rounded-[24px] border border-white/10 p-8 overflow-hidden shadow-2xl transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:-translate-y-2 origin-bottom-left reveal-on-scroll">

<div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

<div className="w-full h-px bg-white/5 mb-8 relative">
<div className="absolute top-0 left-0 w-24 h-px bg-white/10"></div>
</div>

<div className="absolute left-0 right-0 bottom-24 top-16 px-4">
<svg className="overflow-visible w-[448px] h-[254px]" data-icon-replaced="true" preserveaspectratio="none" strokeWidth="2" style={{width: '448px', height: '254px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 400 200">
<defs>
<lineargradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#3f3f46" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#3f3f46" stop-opacity="0"></stop>
</lineargradient>
<lineargradient id="lineStroke" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="#52525b"></stop>
<stop offset="50%" stop-color="#a1a1aa"></stop>
<stop offset="100%" stop-color="#e4e4e7"></stop>
</lineargradient>
</defs>

<path className="opacity-0 animate-graph-area" d="M0,160 C40,160 60,120 100,120 C140,120 160,70 200,70 C240,70 260,110 300,110 C340,110 360,30 400,30 V200 H0 Z" fill="url(#chartFill)"></path>

<path className="opacity-0 animate-graph-line" d="M0,160 C40,160 60,120 100,120 C140,120 160,70 200,70 C240,70 260,110 300,110 C340,110 360,30 400,30" fill="none" stroke="url(#lineStroke)" stroke-dasharray="1000" stroke-dashoffset="1000" strokeLinecap="round" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>
</div>

<div className="absolute bottom-6 left-8 flex gap-10 opacity-0 animate-graph-stats">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<div className="p-1 rounded bg-zinc-900 border border-white/5">
<svg className="lucide lucide-users text-zinc-500" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<span className="text-xs text-zinc-500 font-medium">Users</span>
</div>
<div className="text-xl font-semibold text-white tracking-tight pl-0.5">
                    3.6K
                  </div>
<div className="h-1 w-8 bg-zinc-800 rounded-full mt-1 overflow-hidden">
<div className="h-full w-1/2 bg-zinc-600 rounded-full origin-left scale-x-0 animate-stat-bar-1"></div>
</div>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<div className="p-1 rounded bg-zinc-900 border border-white/5">
<svg className="lucide lucide-git-commit-horizontal text-zinc-500" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<line x1="3" x2="9" y1="12" y2="12"></line>
<line x1="15" x2="21" y1="12" y2="12"></line>
</svg>
</div>
<span className="text-xs text-zinc-500 font-medium">
                      Commits
                    </span>
</div>
<div className="text-xl font-semibold text-white tracking-tight pl-0.5">
                    2m
                  </div>
<div className="h-1 w-8 bg-zinc-800 rounded-full mt-1 overflow-hidden">
<div className="h-full w-3/4 bg-zinc-600 rounded-full origin-left scale-x-0 animate-stat-bar-2"></div>
</div>
</div>
</div>
</div>

<div className="reveal-on-scroll sm:w-[55%] sm:p-8 transition-all duration-700 ease-out delay-200 group-hover:-translate-y-6 group-hover:-translate-x-6 z-10 bg-zinc-900/60 w-[80%] h-auto border-white/10 border rounded-[24px] pt-6 pr-6 pb-6 pl-6 absolute right-0 bottom-0 shadow-[0_30px_60px_-10px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
<div className="flex items-center gap-3 mb-8">
<span className="text-sm font-medium text-zinc-400">
                  Growth &amp; Efficiency
                </span>
</div>
<div className="space-y-7">

<div className="group/item">
<div className="flex gap-4 mb-2.5 gap-x-4 gap-y-4 items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-500 shadow-sm">
<svg className="lucide lucide-bar-chart-3" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="M18 17V9"></path>
<path d="M13 17V5"></path>
<path d="M8 17v-3"></path>
</svg>
</div>
<span className="text-sm font-medium text-white tracking-tight">
                        Velocity
                      </span>
</div>
<span className="text-xs font-mono text-zinc-500">84%</span>
</div>
<div className="pl-[52px]">
<div className="h-1.5 w-full bg-zinc-900/50 rounded-full overflow-hidden border border-white/5">
<div className="h-full w-0 animate-metric-bar-1 bg-gradient-to-r from-zinc-600 to-zinc-400 rounded-full" style={{width: '84%'}}></div>
</div>
</div>
</div>

<div className="group/item">
<div className="flex items-center justify-between gap-4 mb-2.5">
<div className="flex items-center gap-4">
<div className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,255,255,0.05)]">
<svg className="lucide lucide-sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
</div>
<span className="text-sm font-medium text-white tracking-tight">
                        AI Automation
                      </span>
</div>
<span className="text-xs font-mono text-white font-semibold shadow-black drop-shadow-md">
                      94%
                    </span>
</div>
<div className="pl-[52px]">
<div className="h-2 w-full bg-zinc-900/50 rounded-full overflow-hidden border border-white/5 relative">
<div className="h-full w-0 animate-metric-bar-2 bg-gradient-to-r from-zinc-400 via-white to-zinc-400 rounded-full relative shadow-[0_0_20px_rgba(255,255,255,0.4)]" style={{width: '94%'}}>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 -translate-x-full animate-[shimmer_2s_infinite]"></div>
</div>
</div>
</div>
</div>

<div className="group/item">
<div className="flex items-center justify-between gap-4 mb-2.5">
<div className="flex items-center gap-4">
<div className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-500 shadow-sm">
<svg className="lucide lucide-cpu" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="16" x="4" y="4"></rect>
<rect height="6" rx="1" width="6" x="9" y="9"></rect>
<path d="M15 2v2"></path>
<path d="M15 20v2"></path>
<path d="M2 15h2"></path>
<path d="M2 9h2"></path>
<path d="M20 15h2"></path>
<path d="M20 9h2"></path>
<path d="M9 2v2"></path>
<path d="M9 20v2"></path>
</svg>
</div>
<span className="text-sm font-medium text-white tracking-tight">
                        Optimization
                      </span>
</div>
<span className="text-xs font-mono text-zinc-500">88%</span>
</div>
<div className="pl-[52px]">
<div className="h-1.5 w-full bg-zinc-900/50 rounded-full overflow-hidden border border-white/5">
<div className="h-full w-0 animate-metric-bar-3 bg-gradient-to-r from-zinc-600 to-zinc-400 rounded-full" style={{width: '88%'}}></div>
</div>
</div>
</div>
</div>
<div className="mt-8 border-t border-dashed border-white/5 pt-2 w-full opacity-50"></div>
</div>
</div>

<div className="order-1 lg:order-2 reveal-on-scroll delay-100">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-xs mb-8 font-medium shadow-sm">
<svg className="lucide lucide-terminal-square" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m7 11 2-2-2-2"></path>
<path d="M11 13h4"></path>
<rect className="" height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
</svg>
              DEVELOPER EXPERIENCE
            </div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
              Stay in your
              <span className="text-white">terminal flow</span>
</h2>
<p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-xl font-light">
              Manage tasks, update statuses, and check roadmaps directly from
              your CLI. No context switching required—just pure productivity.
            </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<div className="group relative inline-flex items-center w-full sm:w-auto">
<div className="absolute -inset-0.5 bg-zinc-800 rounded-lg blur opacity-40 group-hover:opacity-80 transition duration-500"></div>
<button className="relative w-full sm:w-auto px-5 py-3.5 bg-[#0A0A0A] rounded-lg border border-white/10 flex items-center gap-3 text-sm font-mono text-zinc-300 hover:text-white transition-colors">
<span className="select-none text-zinc-600">$</span>
<span className="select-all">npm install -g chronos-cli</span>
<div className="ml-auto sm:ml-4 pl-4 border-l border-white/5">
<svg className="lucide lucide-copy opacity-50 group-hover:opacity-100 transition-opacity" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect>
<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
</svg>
</div>
</button>
</div>
<a className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg border border-white/10 hover:bg-white/5 hover:border-white/20 text-sm font-medium text-white transition-colors group w-full sm:w-auto" href="#">
                View Documentation
                <svg className="lucide lucide-arrow-right ml-2 group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="flex items-center gap-8 text-xs font-medium text-zinc-500 border-t border-white/5 pt-8">
<div className="flex items-center gap-2 hover:text-zinc-300 transition-colors cursor-default">
<svg className="lucide lucide-apple" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
<path d="M10 2c1 .5 2 2 2 5"></path>
</svg>
<span>macOS</span>
</div>
<div className="flex items-center gap-2 hover:text-zinc-300 transition-colors cursor-default">
<svg className="lucide lucide-monitor" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="3"></rect>
<line x1="8" x2="16" y1="21" y2="21"></line>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
<span>Windows</span>
</div>
<div className="flex items-center gap-2 hover:text-zinc-300 transition-colors cursor-default">
<svg className="lucide lucide-terminal" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19h8"></path>
<path d="m4 17 6-6-6-6"></path>
</svg>
<span className="">Linux</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden z-10 bg-[#050505] pt-20 pb-20 relative">
<style>
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .pause-on-hover:hover .animate-marquee {
          animation-play-state: paused;
        }
      </style>
<div className="container mx-auto px-6 text-center mb-12">
<h3 className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
          Trusted by engineering teams at
        </h3>
</div>
<div className="relative flex w-full overflow-hidden select-none group pause-on-hover [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

<div className="flex min-w-full shrink-0 items-center justify-around gap-16 px-8 animate-marquee">
<span className="text-2xl font-semibold text-zinc-600 hover:text-zinc-300 transition-colors cursor-default">
            ACME Corp
          </span>
<span className="text-2xl font-bold tracking-tighter text-zinc-600 hover:text-zinc-300 transition-colors cursor-default">
            VORTEX
          </span>
<span className="text-2xl font-mono text-zinc-600 hover:text-zinc-300 transition-colors cursor-default">
            hyperbase
          </span>
<span className="text-2xl font-serif italic text-zinc-600 hover:text-zinc-300 transition-colors cursor-default">
            Starlight
          </span>
<span className="text-2xl font-semibold text-zinc-600 hover:text-zinc-300 transition-colors cursor-default">
            ECHO
          </span>
<span className="text-2xl font-bold tracking-tight text-zinc-600 hover:text-zinc-300 transition-colors cursor-default">
            NEXUS
          </span>
<span className="text-2xl font-light text-zinc-600 hover:text-zinc-300 transition-colors cursor-default">
            O B S I D I A N
          </span>
<span className="text-2xl font-mono font-medium text-zinc-600 hover:text-zinc-300 transition-colors cursor-default">
            syntax_
          </span>
</div>

<div aria-hidden="true" className="flex min-w-full shrink-0 items-center justify-around gap-16 px-8 animate-marquee">
<span className="text-2xl font-semibold text-zinc-600 hover:text-zinc-300 transition-colors cursor-default">
            ACME Corp
          </span>
<span className="text-2xl font-bold tracking-tighter text-zinc-600 hover:text-zinc-300 transition-colors cursor-default">
            VORTEX
          </span>
<span className="text-2xl font-mono text-zinc-600 hover:text-zinc-300 transition-colors cursor-default">
            hyperbase
          </span>
<span className="text-2xl font-serif italic text-zinc-600 hover:text-zinc-300 transition-colors cursor-default">
            Starlight
          </span>
<span className="text-2xl font-semibold text-zinc-600 hover:text-zinc-300 transition-colors cursor-default">
            ECHO
          </span>
<span className="text-2xl font-bold tracking-tight text-zinc-600 hover:text-zinc-300 transition-colors cursor-default">
            NEXUS
          </span>
<span className="text-2xl font-light text-zinc-600 hover:text-zinc-300 transition-colors cursor-default">
            O B S I D I A N
          </span>
<span className="text-2xl font-mono font-medium text-zinc-600 hover:text-zinc-300 transition-colors cursor-default">
            syntax_
          </span>
</div>
</div>
</section>

<section className="pt-24 pb-24 relative" id="stats-section">
<div className="absolute inset-0 bg-zinc-900/20 skew-y-3 transform origin-top-left -z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
<div className="px-4 py-8">
<div className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-2">
<span className="counter" data-target="2.5">0</span>
              x
            </div>
<div className="text-lg text-zinc-400">Faster release cycles</div>
</div>
<div className="px-4 py-8">
<div className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-2">
<span className="counter" data-target="100">0</span>
              %
            </div>
<div className="text-lg text-zinc-400">Visibility on roadmap</div>
</div>
<div className="px-4 py-8">
<div className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-2">
              &lt;
              <span className="counter" data-target="1">0</span>
              ms
            </div>
<div className="text-lg text-zinc-400">Interaction latency</div>
</div>
</div>
</div>

</section>
<section className="relative py-32 bg-[#050505] overflow-hidden">
<style>
        @keyframes marquee-reverse {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 50s linear infinite;
        }
        .animate-marquee-slow {
          animation: marquee 50s linear infinite;
        }
      </style>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-20 max-w-7xl mx-auto px-6 text-center mb-24">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs mb-6 font-medium tracking-wide uppercase">
<svg className="lucide lucide-heart" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
</svg>
          Community
        </div>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
          Loved by high-velocity
          <span className="text-zinc-500 font-serif italic">builders</span>
</h2>
<p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light">
          Don't just take our word for it. See what engineering leaders are
          saying about Chronos.
        </p>
</div>

<div className="relative flex flex-col gap-6 -rotate-2 scale-[1.02] origin-center">

<div className="absolute z-10 inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none"></div>
<div className="absolute z-10 inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none"></div>

<div className="flex min-w-full shrink-0 gap-6 animate-marquee-slow hover:[animation-play-state:paused]">

<div className="relative shrink-0 w-[400px] p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm hover:border-emerald-500/20 transition-colors group">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/43fc57bc-1266-44cf-a579-3f8ec64d4431_320w.webp" style={{}}/>
</div>
<div>
<div className="text-white font-medium">Sarah Jenkins</div>
<div className="text-sm text-zinc-500">
                  VP of Engineering at
                  <span className="text-zinc-300">Vortex</span>
</div>
</div>
</div>
<p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
              "Chronos has completely transformed how we plan our quarters. The
              visualization of our velocity vs. capacity is unlike anything
              else."
            </p>
</div>

<div className="relative shrink-0 w-[400px] p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm hover:border-emerald-500/20 transition-colors group">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2dbcdf02-39a2-4c13-95f7-3118cc995fa0_320w.webp"/>
</div>
<div>
<div className="text-white font-medium">Alex Chen</div>
<div className="text-sm text-zinc-500">
                  Founder at
                  <span className="text-zinc-300">Starlight</span>
</div>
</div>
</div>
<p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
              "Finally, a tool that bridges the gap between high-level product
              strategy and the day-to-day code commits. It's brilliant."
            </p>
</div>

<div className="relative shrink-0 w-[400px] p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm hover:border-emerald-500/20 transition-colors group">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83a1ae5f-c842-4ee9-a912-505fc66a1ee0_320w.webp"/>
</div>
<div>
<div className="text-white font-medium">Marcus Davis</div>
<div className="text-sm text-zinc-500">
                  Product Lead at
                  <span className="text-zinc-300">Acme</span>
</div>
</div>
</div>
<p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
              "The automated insights have saved us from burnout multiple times.
              It's like having a nervous system for your engineering team."
            </p>
</div>

<div className="relative shrink-0 w-[400px] p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm hover:border-emerald-500/20 transition-colors group">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://i.pravatar.cc/150?u=4"/>
</div>
<div>
<div className="text-white font-medium">Elena Rodriguez</div>
<div className="text-sm text-zinc-500">
                  CTO at
                  <span className="text-zinc-300">Hyperbase</span>
</div>
</div>
</div>
<p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
              "We've reduced our cycle time by 40% since adopting Chronos. The
              CLI integration allows our devs to stay in flow state."
            </p>
</div>

<div className="relative shrink-0 w-[400px] p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm hover:border-emerald-500/20 transition-colors group">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/90ec73f0-6fd3-4d0c-922c-fcc592c983df_320w.webp"/>
</div>
<div>
<div className="text-white font-medium">Sarah Jenkins</div>
<div className="text-sm text-zinc-500">
                  VP of Engineering at
                  <span className="text-zinc-300">Vortex</span>
</div>
</div>
</div>
<p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
              "Chronos has completely transformed how we plan our quarters. The
              visualization of our velocity vs. capacity is unlike anything
              else."
            </p>
</div>
<div className="relative shrink-0 w-[400px] p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm hover:border-emerald-500/20 transition-colors group">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc0337fb-ed78-4515-a35d-9bf52d6af946_320w.webp" style={{}}/>
</div>
<div>
<div className="text-white font-medium">Alex Chen</div>
<div className="text-sm text-zinc-500">
                  Founder at
                  <span className="text-zinc-300">Starlight</span>
</div>
</div>
</div>
<p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
              "Finally, a tool that bridges the gap between high-level product
              strategy and the day-to-day code commits. It's brilliant."
            </p>
</div>
<div className="relative shrink-0 w-[400px] p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm hover:border-emerald-500/20 transition-colors group">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f19d9627-4570-4c87-b42e-f42bc9d1bc31_320w.jpg" style={{}}/>
</div>
<div>
<div className="text-white font-medium">Marcus Davis</div>
<div className="text-sm text-zinc-500">
                  Product Lead at
                  <span className="text-zinc-300">Acme</span>
</div>
</div>
</div>
<p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
              "The automated insights have saved us from burnout multiple times.
              It's like having a nervous system for your engineering team."
            </p>
</div>
<div className="relative shrink-0 w-[400px] p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm hover:border-emerald-500/20 transition-colors group">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/48efba97-0b3f-4a79-a4e3-6d8f000e4515_320w.jpg"/>
</div>
<div>
<div className="text-white font-medium">Elena Rodriguez</div>
<div className="text-sm text-zinc-500">
                  CTO at
                  <span className="text-zinc-300">Hyperbase</span>
</div>
</div>
</div>
<p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
              "We've reduced our cycle time by 40% since adopting Chronos. The
              CLI integration allows our devs to stay in flow state."
            </p>
</div>
</div>

<div className="flex min-w-full shrink-0 gap-6 animate-marquee-reverse hover:[animation-play-state:paused]">

<div className="relative shrink-0 w-[400px] p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm hover:border-emerald-500/20 transition-colors group">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/755b89d7-9422-46f3-a01d-39a775a40b46_320w.jpg"/>
</div>
<div>
<div className="text-white font-medium">David Kim</div>
<div className="text-sm text-zinc-500">
                  Staff Engineer at
                  <span className="text-zinc-300">Nexus</span>
</div>
</div>
</div>
<p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
              "The 3D timeline view is not just eye candy—it actually helps
              stakeholders understand the complexity of our roadmap."
            </p>
</div>

<div className="relative shrink-0 w-[400px] p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm hover:border-emerald-500/20 transition-colors group">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/149e33ce-f3dc-40ee-b985-cb0735411ff5_320w.jpg" style={{}}/>
</div>
<div>
<div className="text-white font-medium">Olivia Wilson</div>
<div className="text-sm text-zinc-500">
                  Head of Product at
                  <span className="text-zinc-300">Echo</span>
</div>
</div>
</div>
<p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
              "We used to spend days on quarterly planning. With Chronos, it
              takes hours, and the output is automatically synced to Jira."
            </p>
</div>

<div className="relative shrink-0 w-[400px] p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm hover:border-emerald-500/20 transition-colors group">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/43fc57bc-1266-44cf-a579-3f8ec64d4431_320w.webp" style={{}}/>
</div>
<div>
<div className="text-white font-medium">James O'Connor</div>
<div className="text-sm text-zinc-500">
                  Director of Eng at
                  <span className="text-zinc-300">Flux</span>
</div>
</div>
</div>
<p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
              "Implementation was seamless. The configuration-as-code approach
              meant we could version control our entire workflow."
            </p>
</div>

<div className="relative shrink-0 w-[400px] p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm hover:border-emerald-500/20 transition-colors group">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d27e9bf8-e060-4af6-87f3-3952e627ff04_320w.jpg" style={{}}/>
</div>
<div>
<div className="text-white font-medium">Sophie Turner</div>
<div className="text-sm text-zinc-500">
                  Senior PM at
                  <span className="text-zinc-300">Apex</span>
</div>
</div>
</div>
<p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
              "I love how the deep context search works. I can find why a
              decision was made six months ago in seconds."
            </p>
</div>

<div className="relative shrink-0 w-[400px] p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm hover:border-emerald-500/20 transition-colors group">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c4ee565a-2084-483b-8358-9fc06da5ee99_320w.jpg" style={{}}/>
</div>
<div>
<div className="text-white font-medium">David Kim</div>
<div className="text-sm text-zinc-500">
                  Staff Engineer at
                  <span className="text-zinc-300">Nexus</span>
</div>
</div>
</div>
<p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
              "The 3D timeline view is not just eye candy—it actually helps
              stakeholders understand the complexity of our roadmap."
            </p>
</div>
<div className="relative shrink-0 w-[400px] p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm hover:border-emerald-500/20 transition-colors group">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f19d9627-4570-4c87-b42e-f42bc9d1bc31_320w.jpg" style={{}}/>
</div>
<div>
<div className="text-white font-medium">Olivia Wilson</div>
<div className="text-sm text-zinc-500">
                  Head of Product at
                  <span className="text-zinc-300">Echo</span>
</div>
</div>
</div>
<p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
              "We used to spend days on quarterly planning. With Chronos, it
              takes hours, and the output is automatically synced to Jira."
            </p>
</div>
<div className="relative shrink-0 w-[400px] p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm hover:border-emerald-500/20 transition-colors group">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b868b942-246c-46ca-812c-31b49fd61a16_320w.jpg" style={{}}/>
</div>
<div>
<div className="text-white font-medium">James O'Connor</div>
<div className="text-sm text-zinc-500">
                  Director of Eng at
                  <span className="text-zinc-300">Flux</span>
</div>
</div>
</div>
<p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
              "Implementation was seamless. The configuration-as-code approach
              meant we could version control our entire workflow."
            </p>
</div>
<div className="relative shrink-0 w-[400px] p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm hover:border-emerald-500/20 transition-colors group">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc0337fb-ed78-4515-a35d-9bf52d6af946_320w.webp" style={{}}/>
</div>
<div>
<div className="text-white font-medium">Sophie Turner</div>
<div className="text-sm text-zinc-500">
                  Senior PM at
                  <span className="text-zinc-300">Apex</span>
</div>
</div>
</div>
<p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
              "I love how the deep context search works. I can find why a
              decision was made six months ago in seconds."
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none reveal-on-scroll"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-8">
          Ready to set the direction?
        </h2>
<p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light">
          Join thousands of high-performing teams who build better products with
          Chronos.
        </p>
<div className="flex flex-col sm:flex-row gap-x-6 gap-y-6 items-center justify-center">
<style>
    @keyframes subtle-drift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes gleam {
      0% { transform: translateX(-100%) skewX(-15deg); }
      100% { transform: translateX(250%) skewX(-15deg); }
    }
    .group:hover .animate-gleam {
      animation: gleam 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
  </style>

<button className="group relative px-8 py-4 rounded-full font-medium text-lg text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] w-full sm:w-auto">

<div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-[length:200%_auto] animate-[subtle-drift_4s_ease-in-out_infinite]"></div>

<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-gleam opacity-0 group-hover:opacity-100"></div>

<span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-sm">
      Start for free
      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>

<div className="absolute inset-0 rounded-full border border-white/20 pointer-events-none"></div>
</button>

<button className="group relative px-8 py-4 rounded-full bg-zinc-900/40 backdrop-blur-xl border border-white/10 text-zinc-300 font-medium text-lg overflow-hidden transition-all duration-300 w-full sm:w-auto hover:text-white hover:bg-white/5 hover:border-emerald-500/30">

<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<span className="relative z-10 flex items-center justify-center gap-2">
      Contact Sales
      <svg className="w-4 h-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-emerald-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 2L11 13"></path><path d="M22 2l-7 20-4-9-9-4 20-7z"></path></svg>
</span>
</button>
</div>
</div>
</section>

<footer className="bg-black pt-16 pb-8 relative">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex gap-2 mb-4 gap-x-2 gap-y-2 items-center">
<span className="bg-center text-lg font-medium text-white tracking-tight bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e6ef1253-f714-416b-82fd-6d609fc8aa94_1600w.png)] bg-cover pt-8 pr-12 pb-8 pl-14"></span>
</div>
<p className="text-zinc-500 text-sm max-w-xs">
            Designed for the builders, the planners, and the visionaries.
          </p>
</div>
<div className="">
<h4 className="text-white font-medium mb-4">Product</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li className="">
<a className="hover:text-emerald-400 transition-colors" href="#">
                Features
              </a>
</li>
<li className="">
<a className="hover:text-emerald-400 transition-colors" href="#">
                Integrations
              </a>
</li>
<li className="">
<a className="hover:text-emerald-400 transition-colors" href="#">
                Pricing
              </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li>
<a className="hover:text-emerald-400 transition-colors" href="#">
                About
              </a>
</li>
<li>
<a className="hover:text-emerald-400 transition-colors" href="#">
                Blog
              </a>
</li>
<li>
<a className="hover:text-emerald-400 transition-colors" href="#">
                Careers
              </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li>
<a className="hover:text-emerald-400 transition-colors" href="#">
                Privacy
              </a>
</li>
<li>
<a className="hover:text-emerald-400 transition-colors" href="#">
                Terms
              </a>
</li>
<li>
<a className="hover:text-emerald-400 transition-colors" href="#">
                Security
              </a>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-zinc-600 text-sm">
          © 2024 Chronos Inc. All rights reserved.
        </div>
<div className="flex gap-6">
<svg className="lucide lucide-twitter w-5 h-5 text-zinc-600 hover:text-white cursor-pointer transition-colors" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
<svg className="lucide lucide-github w-5 h-5 text-zinc-600 hover:text-white cursor-pointer transition-colors" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
<svg className="lucide lucide-linkedin w-5 h-5 text-zinc-600 hover:text-white cursor-pointer transition-colors" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</div>
</div>
</footer>



    </>
  );
}
