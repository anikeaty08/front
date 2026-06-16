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
        


      document.addEventListener('DOMContentLoaded', () => {
        const cursor = document.getElementById('cursor');
        if (!cursor) return;

        document.addEventListener('mousemove', (e) => {
          cursor.style.left = `${e.clientX}px`;
          cursor.style.top = `${e.clientY}px`;

          document.querySelectorAll('.glass-panel').forEach(panel => {
            const rect = panel.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            panel.style.setProperty('--mouse-x', `${x}px`);
            panel.style.setProperty('--mouse-y', `${y}px`);
          });
        });

        document.addEventListener('mouseover', (e) => {
          if (e.target.closest('a, button, input, textarea, select, .hover-trigger')) {
            cursor.classList.add('hovered');
          } else {
            cursor.classList.remove('hovered');
          }
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ZHhDKfVqqu8PKOSMwfuA"></div>

</div>
</div>
<div className="custom-cursor" id="cursor" style={{left: '358px', top: '0px'}}></div>
<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px] animate-pulse"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[120px]"></div>
</div>
<div className="fixed inset-0 z-0 pointer-events-none bg-grid"></div>
<header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="group flex items-center gap-2 relative z-50 cursor-pointer hover-trigger" href="#">
<div className="relative w-8 h-8 flex items-center justify-center">
<svg className="w-8 h-8 text-orange-500 transition-transform duration-500 group-hover:rotate-180" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"></path>
</svg>
</div>
<span className="text-2xl font-semibold tracking-tight text-white">
            qolaba
          </span>
</a>
<nav className="hidden md:flex items-center gap-8">
<div className="group relative">
<button className="flex items-center gap-1 text-sm font-medium text-zinc-400 transition-colors hover-trigger hover:text-orange-400 group-hover:text-orange-400">
              Products
              <svg className="lucide lucide-chevron-down w-4 h-4 transition-transform group-hover:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
</div>
<div className="group relative">
<button className="flex items-center gap-1 text-sm font-medium text-zinc-400 transition-colors hover-trigger hover:text-orange-400 group-hover:text-orange-400">
              Resources
              <svg className="lucide lucide-chevron-down w-4 h-4 transition-transform group-hover:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
</div>
<div className="group relative">
<button className="flex items-center gap-1 text-sm font-medium text-zinc-400 transition-colors hover-trigger hover:text-orange-400 group-hover:text-orange-400">
              Company
              <svg className="lucide lucide-chevron-down w-4 h-4 transition-transform group-hover:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
</div>
<a className="text-sm font-medium text-zinc-400 transition-colors hover-trigger hover:text-orange-400" href="#">
            Pricing
          </a>
</nav>
<div className="flex items-center">
<button className="hover-trigger group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95 overflow-hidden">
<span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]"></span>
<svg className="lucide lucide-layout-grid w-5 h-5 text-zinc-400 group-hover:text-orange-400 transition-colors" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
</svg>
            Dashboard
          </button>
</div>
</div>
</header>
<main className="relative z-10 overflow-hidden">
<section className="sm:pt-32 sm:pb-40 pt-24 pb-32 relative">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="animate-reveal opacity-0">
<h1 className="text-6xl sm:text-7xl text-white tracking-tight mb-6 font-medium">
              Qolaba AI Studio
            </h1>
</div>
<div className="animate-reveal delay-100 opacity-0">
<p className="text-2xl sm:text-2xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Your unified workspace for AI-powered content, automation, and
              collaboration.
            </p>
</div>
<div className="animate-reveal delay-200 opacity-0 flex justify-center mb-24">
<button className="hover-trigger group relative inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 bg-black text-base font-medium text-white transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.4)] hover:border-orange-500 hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.6)] hover:scale-105">
<span>Explore Qolaba</span>
<svg className="lucide lucide-arrow-right w-5 h-5 text-zinc-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<div className="animate-reveal delay-300 opacity-0 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
<div className="hover-trigger group relative p-8 rounded-2xl glass-panel text-left transition-all duration-500 hover:-translate-y-2">
<div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<h3 className="relative text-3xl font-semibold text-white tracking-tight mb-2 group-hover:text-orange-100 transition-colors">
                70% Faster
              </h3>
<p className="relative text-zinc-400 text-base font-light">
                Less tool-switching
              </p>
</div>
<div className="hover-trigger group relative p-8 rounded-2xl glass-panel text-left transition-all duration-500 hover:-translate-y-2">
<div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<h3 className="relative text-3xl font-semibold text-white tracking-tight mb-2 group-hover:text-orange-100 transition-colors">
                60+ Models
              </h3>
<p className="relative text-zinc-400 text-base font-light">
                All accessible in one place
              </p>
</div>
<div className="hover-trigger group relative p-8 rounded-2xl glass-panel text-left transition-all duration-500 hover:-translate-y-2">
<div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<h3 className="relative text-3xl font-semibold text-white tracking-tight mb-2 group-hover:text-orange-100 transition-colors">
                300% ROI
              </h3>
<p className="relative text-zinc-400 text-base font-light">
                Automate more, spend less
              </p>
</div>
</div>
</div>
</section>
<section className="py-24 relative border-t border-white/5">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-3 py-1 text-xs font-medium text-orange-200 backdrop-blur mb-6">
<svg className="lucide lucide-sparkles w-4 h-4 text-orange-500" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
              Features
            </div>
<h2 className="text-4xl sm:text-4xl text-white tracking-tight font-medium">
              Everything you need to create faster
            </h2>
<p className="mt-3 text-xl text-zinc-400 font-light">
              Powerful features designed for modern creative teams
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="hover-trigger group relative overflow-hidden rounded-3xl glass-panel transition-all duration-500 hover:-translate-y-2">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-8 relative z-10">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 ring-1 ring-orange-500/20">
<svg className="lucide lucide-zap w-5 h-5 text-orange-500" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">
                  Generative AI
                </h3>
<p className="text-base text-zinc-400 leading-relaxed font-light">
                  Access top-tier models for text, image, and code generation
                  instantly.
                </p>
</div>
</div>
<div className="hover-trigger group relative overflow-hidden rounded-3xl glass-panel transition-all duration-500 hover:-translate-y-2">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-8 relative z-10">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 ring-1 ring-orange-500/20">
<svg className="lucide lucide-workflow w-5 h-5 text-orange-500" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="2" width="8" x="3" y="3"></rect>
<path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
<rect height="8" rx="2" width="8" x="13" y="13"></rect>
</svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">
                  Automated Workflows
                </h3>
<p className="text-base text-zinc-400 leading-relaxed font-light">
                  Build custom chains of tasks to automate repetitive creative
                  processes.
                </p>
</div>
</div>
<div className="hover-trigger group relative overflow-hidden rounded-3xl glass-panel transition-all duration-500 hover:-translate-y-2">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-8 relative z-10">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 ring-1 ring-orange-/20">
<svg className="lucide lucide-users w-5 h-5 text-orange-500" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">
                  Real-time Collab
                </h3>
<p className="text-base text-zinc-400 leading-relaxed font-light">
                  Work together with your team on prompts and assets in
                  real-time.
                </p>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 relative border-t border-white/5 bg-black/40 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative z-10">
<h2 className="text-5xl sm:text-6xl text-white tracking-tight mb-8 leading-tight font-medium">
                Access the World’s Best AI Models Instantly
              </h2>
<p className="text-2xl sm:text-2xl text-zinc-400 font-light leading-relaxed mb-10 max-w-lg">
                Access GPT-4.5, Claude, Gemini, Mistral, LLaMA, and more — all
                in one place. Switch models mid-chat, tailor responses by task,
                and pay once to use them all.
              </p>
<div className="flex flex-wrap gap-4">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-xs font-medium text-zinc-400">
<svg className="text-orange-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
</svg>
<span>Zero Latency</span>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-xs font-medium text-zinc-400">
<svg className="text-green-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20"></path>
<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
<span>Pay-per-token</span>
</div>
</div>
</div>
<div className="relative group perspective-1000">
<div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-amber-500/10 rounded-2xl blur-2xl opacity-40 transition-opacity duration-700 group-hover:opacity-60"></div>
<div className="relative rounded-xl glass-panel overflow-hidden shadow-2xl transition-transform duration-700 hover:rotate-y-1 hover:rotate-x-1 hover:scale-[1.01]">
<div className="h-12 border-b border-white/5 flex items-center px-4 gap-2 bg-zinc-900/50 backdrop-blur-md">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-red-500 transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-yellow-500 transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-green-500 transition-colors"></div>
</div>
<div className="ml-4 text-[10px] font-medium text-zinc-500 flex items-center gap-2 uppercase tracking-wide">
<span className="text-orange-500 flex items-center gap-1">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"></path>
</svg>
                      qolaba
                    </span>
<span className="text-zinc-700">/</span>
                    models
                  </div>
</div>
<div className="flex h-[450px]">
<div className="w-64 border-r border-white/5 p-5 flex flex-col gap-6 hidden sm:flex bg-zinc-900/20">
<div className="space-y-2">
<div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-zinc-800/80 border border-white/10 text-xs text-white shadow-lg ring-1 ring-white/5">
<i className="w-4 h-4 text-blue-400" data-lucide="sparkles"></i>
                        GEMINI 2.0 Flash
                      </div>
<div className="flex items-center gap-2.5 p-2.5 rounded-lg border border-transparent hover:bg-white/5 text-xs text-zinc-400 transition-colors cursor-pointer hover-trigger">
<i className="w-4 h-4 text-orange-400" data-lucide="user"></i>
                        Personal Assistant
                      </div>
<button className="text-xs text-orange-500 font-medium pl-2.5 hover:text-orange-400 transition-colors mt-1 flex items-center gap-1 hover-trigger">
<i className="w-4 h-4" data-lucide="plus"></i>
                        Create Agent
                      </button>
</div>
<div className="space-y-6 mt-2">
<div className="space-y-2.5">
<div className="flex justify-between text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">
<span>Temperature</span>
<span className="text-zinc-300">0.5</span>
</div>
<div className="h-1 bg-zinc-800 rounded-full overflow-hidden relative group/slider cursor-pointer">
<div className="absolute inset-0 w-1/2 bg-orange-500"></div>
<div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg transform -translate-x-1/2 transition-transform group-hover/slider:scale-125"></div>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between group/toggle cursor-pointer hover-trigger">
<div className="flex items-center gap-2">
<span className="text-xs text-zinc-400 group-hover/toggle:text-zinc-300 transition-colors">
                              Internet Search
                            </span>
<i className="w-3 h-3 text-zinc-700" data-lucide="info"></i>
</div>
<div className="w-10 h-5 rounded-full bg-zinc-800 border border-zinc-700 relative transition-colors group-hover/toggle:border-zinc-600">
<div className="absolute left-1 top-1 w-3 h-3 bg-zinc-500 rounded-full transition-all"></div>
</div>
</div>
<div className="flex items-center justify-between group/toggle cursor-pointer hover-trigger">
<div className="flex items-center gap-2">
<span className="text-xs text-zinc-400 group-hover/toggle:text-zinc-300 transition-colors">
                              Image Generation
                            </span>
<i className="w-3 h-3 text-zinc-700" data-lucide="info"></i>
</div>
<div className="w-10 h-5 rounded-full bg-white relative transition-colors shadow-[0_0_10px_rgba(255,255,255,0.2)]">
<div className="absolute right-1 top-1 w-3 h-3 bg-black rounded-full transition-all"></div>
</div>
</div>
<div className="flex items-center justify-between group/toggle cursor-pointer hover-trigger">
<div className="flex items-center gap-2">
<span className="text-xs text-zinc-400 group-hover/toggle:text-zinc-300 transition-colors">
                              Run Code
                            </span>
<i className="w-3 h-3 text-zinc-700" data-lucide="info"></i>
</div>
<div className="w-10 h-5 rounded-full bg-white relative transition-colors shadow-[0_0_10px_rgba(255,255,255,0.2)]">
<div className="absolute right-1 top-1 w-3 h-3 bg-black rounded-full transition-all"></div>
</div>
</div>
<div className="flex items-center justify-between group/toggle cursor-pointer hover-trigger">
<div className="flex items-center gap-2">
<span className="text-xs text-zinc-400 group-hover/toggle:text-zinc-300 transition-colors">
                              PII Protection
                            </span>
<i className="w-3 h-3 text-zinc-700" data-lucide="info"></i>
</div>
<div className="w-10 h-5 rounded-full bg-white relative transition-colors shadow-[0_0_10px_rgba(255,255,255,0.2)]">
<div className="absolute right-1 top-1 w-3 h-3 bg-black rounded-full transition-all"></div>
</div>
</div>
</div>
</div>
</div>
<div className="flex-1 bg-black/40 p-0 overflow-hidden flex flex-col backdrop-blur-sm">
<div className="grid grid-cols-12 gap-2 px-6 py-4 border-b border-white/5 text-[10px] uppercase tracking-wider text-zinc-500 font-semibold bg-zinc-900/20">
<div className="col-span-5">Model</div>
<div className="col-span-3">Context Length</div>
<div className="col-span-2 text-center">Features</div>
<div className="col-span-2 text-right">Credits/1k</div>
</div>
<div className="overflow-y-auto custom-scrollbar flex-1 p-2">
<div className="grid grid-cols-12 gap-2 px-4 py-3 items-center rounded-lg border border-transparent hover:bg-white/5 transition-all duration-200 group cursor-pointer hover-trigger">
<div className="col-span-5 flex items-center gap-3">
<div className="w-7 h-7 rounded-md bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500">
<i className="w-4 h-4" data-lucide="bot"></i>
</div>
<div className="flex items-center gap-1.5">
<span className="text-sm text-zinc-300 font-medium group-hover:text-white transition-colors">
                              GPT 4o
                            </span>
<i className="w-3 h-3 text-yellow-500/50" data-lucide="crown"></i>
</div>
</div>
<div className="col-span-3 text-xs text-zinc-500 font-medium">
                          128K
                        </div>
<div className="col-span-2 flex justify-center gap-1.5 opacity-50 group-hover:opacity-100 transition-opacity">
<i className="w-4 h-4 text-zinc-400" data-lucide="message-square-text"></i>
<i className="w-4 h-4 text-zinc-400" data-lucide="image"></i>
</div>
<div className="col-span-2 text-right text-xs text-zinc-400 flex items-center justify-end gap-1">
<i className="w-3 h-3 text-zinc-600" data-lucide="database"></i>
                          3
                        </div>
</div>
<div className="grid grid-cols-12 gap-2 px-4 py-3.5 items-center bg-[#FF5500] rounded-lg shadow-xl shadow-orange-900/20 relative z-10 my-1 cursor-pointer transform transition-transform hover:scale-[1.01] hover-trigger border border-orange-400/50">
<div className="col-span-5 flex items-center gap-3">
<div className="w-7 h-7 rounded-md bg-white/20 border border-white/20 flex items-center justify-center text-white">
<i className="w-4 h-4" data-lucide="sparkles"></i>
</div>
<div className="flex items-center gap-1.5">
<span className="text-sm text-white font-semibold">
                              Claude 3.5 Sonnet
                            </span>
<i className="w-3 h-3 text-yellow-200" data-lucide="crown"></i>
</div>
</div>
<div className="col-span-3 text-xs text-orange-100 font-semibold">
                          200K
                        </div>
<div className="col-span-2 flex justify-center gap-1.5">
<i className="w-4 h-4 text-white/80" data-lucide="message-square-text"></i>
<i className="w-4 h-4 text-white/80" data-lucide="files"></i>
</div>
<div className="col-span-2 text-right text-xs text-white font-semibold flex items-center justify-end gap-1">
<i className="w-3 h-3 text-orange-200" data-lucide="database"></i>
                          4.45
                        </div>
</div>
<div className="grid grid-cols-12 gap-2 px-4 py-3 items-center rounded-lg border border-transparent hover:bg-white/5 transition-all duration-200 group cursor-pointer hover-trigger">
<div className="col-span-5 flex items-center gap-3">
<div className="w-7 h-7 rounded-md bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
<i className="w-4 h-4" data-lucide="sparkles"></i>
</div>
<div className="flex items-center gap-1.5">
<span className="text-sm text-zinc-300 font-medium group-hover:text-white transition-colors">
                              Claude 3.7 Sonnet
                            </span>
<i className="w-3 h-3 text-yellow-500/50" data-lucide="crown"></i>
</div>
</div>
<div className="col-span-3 text-xs text-zinc-500 font-medium">
                          200K
                        </div>
<div className="col-span-2 flex justify-center gap-1.5 opacity-50 group-hover:opacity-100 transition-opacity">
<i className="w-4 h-4 text-zinc-400" data-lucide="message-square-text"></i>
<i className="w-4 h-4 text-zinc-400" data-lucide="files"></i>
<i className="w-4 h-4 text-zinc-400" data-lucide="mic"></i>
</div>
<div className="col-span-2 text-right text-xs text-zinc-400 flex items-center justify-end gap-1">
<i className="w-3 h-3 text-zinc-600" data-lucide="database"></i>
                          4.45
                        </div>
</div>
<div className="grid grid-cols-12 gap-2 px-4 py-3 items-center rounded-lg border border-transparent hover:bg-white/5 transition-all duration-200 group cursor-pointer hover-trigger">
<div className="col-span-5 flex items-center gap-3">
<div className="w-7 h-7 rounded-md bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500">
<i className="w-4 h-4" data-lucide="bot"></i>
</div>
<span className="text-sm text-zinc-300 font-medium group-hover:text-white transition-colors">
                            GPT-4o mini
                          </span>
</div>
<div className="col-span-3 text-xs text-zinc-500 font-medium">
                          128K
                        </div>
<div className="col-span-2 flex justify-center gap-1.5 opacity-50 group-hover:opacity-100 transition-opacity">
<i className="w-4 h-4 text-zinc-400" data-lucide="message-square-text"></i>
<i className="w-4 h-4 text-zinc-400" data-lucide="image"></i>
</div>
<div className="col-span-2 text-right text-xs text-zinc-400 flex items-center justify-end gap-1">
<i className="w-3 h-3 text-zinc-600" data-lucide="database"></i>
                          0.18
                        </div>
</div>
<div className="grid grid-cols-12 gap-2 px-4 py-3 items-center rounded-lg border border-transparent hover:bg-white/5 transition-all duration-200 group cursor-pointer hover-trigger">
<div className="col-span-5 flex items-center gap-3">
<div className="w-7 h-7 rounded-md bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
<i className="w-4 h-4" data-lucide="globe"></i>
</div>
<div className="flex items-center gap-1.5">
<span className="text-sm text-zinc-300 font-medium group-hover:text-white transition-colors truncate">
                              Perplexity Sonar Large
                            </span>
<i className="w-3 h-3 text-yellow-500/50" data-lucide="crown"></i>
</div>
</div>
<div className="col-span-3 text-xs text-zinc-500 font-medium">
                          127K
                        </div>
<div className="col-span-2 flex justify-center gap-1.5 opacity-50 group-hover:opacity-100 transition-opacity">
<i className="w-4 h-4 text-zinc-400" data-lucide="message-square-text"></i>
</div>
<div className="col-span-2 text-right text-xs text-zinc-400 flex items-center justify-end gap-1">
<i className="w-3 h-3 text-zinc-600" data-lucide="database"></i>
                          0.37
                        </div>
</div>
<div className="grid grid-cols-12 gap-2 px-4 py-3 items-center rounded-lg border border-transparent hover:bg-white/5 transition-all duration-200 group cursor-pointer hover-trigger opacity-50">
<div className="col-span-5 flex items-center gap-3">
<div className="w-7 h-7 rounded-md bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500">
<i className="w-4 h-4" data-lucide="cpu"></i>
</div>
<span className="text-sm text-zinc-300 font-medium">
                            Mistral Large
                          </span>
</div>
<div className="col-span-3 text-xs text-zinc-500 font-medium">
                          32K
                        </div>
<div className="col-span-2 flex justify-center gap-1.5">
<i className="w-4 h-4 text-zinc-400" data-lucide="code"></i>
</div>
<div className="col-span-2 text-right text-xs text-zinc-400 flex items-center justify-end gap-1">
<i className="w-3 h-3 text-zinc-600" data-lucide="database"></i>
                          0.2
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
<section className="py-24 relative border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="rounded-3xl glass-panel overflow-hidden flex flex-col lg:flex-row shadow-2xl transition-all duration-500 hover:shadow-orange-500/10">
<div className="flex-1 p-8 lg:p-12 bg-black/50 border-r border-white/5 relative group hover-trigger">
<div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none"></div>
<div className="relative rounded-xl border border-white/10 bg-[#0A0A0A] p-6 shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.01]">
<h3 className="text-sm font-medium text-white mb-6">
                  Create Agent
                </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-4">
<div className="space-y-1.5 group/input">
<label className="text-xs text-zinc-500 block group-hover/input:text-zinc-400 transition-colors">
                        Select Base AI Model
                      </label>
<div className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-white/10 bg-zinc-900 text-xs text-white group-hover/input:border-white/20 transition-colors cursor-pointer">
<div className="w-4 h-4 flex items-center justify-center">
<i className="w-3 h-3 text-blue-400" data-lucide="sparkles"></i>
</div>
                        GEMINI 2.0 Flash
                      </div>
</div>
<div className="space-y-1.5 group/input">
<label className="text-xs text-zinc-500 block group-hover/input:text-zinc-400 transition-colors">
                        What would you like to call your Agent?
                      </label>
<input className="w-full bg-transparent border border-white/10 rounded-lg px-3 py-2.5 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all hover-trigger" placeholder="Name your Agent" type="text"/>
</div>
<div className="space-y-1.5 group/input">
<label className="text-xs text-zinc-500 block group-hover/input:text-zinc-400 transition-colors">
                        Tagline (optional)
                      </label>
<input className="w-full bg-transparent border border-white/10 rounded-lg px-3 py-2.5 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all hover-trigger" placeholder="Add a short tagline" type="text"/>
</div>
<div className="border border-dashed border-white/10 rounded-xl p-4 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group/drop hover-trigger">
<div className="flex gap-3">
<div className="shrink-0 w-8 h-8 rounded bg-zinc-800 flex items-center justify-center border border-white/5">
<i className="w-4 h-4 text-zinc-500 group-hover/drop:text-orange-500 transition-colors" data-lucide="file-text"></i>
</div>
<div className="text-[10px] text-zinc-500 leading-relaxed">
<span className="text-zinc-300 font-medium group-hover/drop:text-white transition-colors">
                            Drop your PDF, CSV, DOC, DOCX, or TXT here, or
                            browse.
                          </span>
                          Maximum size: 20MB for images and 1000 pages (or
                          200MBs) for files
                        </div>
</div>
</div>
</div>
<div className="flex flex-col h-full group/textarea">
<label className="text-xs text-zinc-500 block mb-1.5 group-hover/textarea:text-zinc-400 transition-colors">
                      What's your agent background, profession, and expertise?
                    </label>
<textarea className="flex-1 w-full bg-zinc-900/50 border border-white/10 rounded-lg p-3 text-xs text-white placeholder-zinc-700 resize-none focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all hover-trigger" placeholder="Submit your prompt. Be creative, bold, or straightforward - we'll manage the rest!"></textarea>
</div>
</div>
<div className="flex justify-end gap-3 mt-6 pt-4 border-t border-white/5">
<button className="px-4 py-1.5 rounded-md text-xs font-medium text-zinc-400 hover:text-white transition-colors hover-trigger">
                    Cancel
                  </button>
<button className="px-4 py-1.5 rounded-md text-xs font-medium bg-zinc-800 text-white hover:bg-zinc-700 border border-white/5 hover:border-white/10 transition-all hover-trigger">
                    Create
                  </button>
</div>
</div>
</div>
<div className="lg:w-[45%] p-8 lg:p-12 flex flex-col justify-center">
<h2 className="text-4xl sm:text-4xl text-white tracking-tight mb-6 font-medium">
                Build Custom AI Agents, No Code Needed
              </h2>
<p className="text-2xl text-zinc-400 font-light leading-relaxed mb-8">
                Train your AI with PDFs, Docs, and URLs, while customizing its
                behavior, tone, and memory. Perfect for support bots, research
                assistants, and personal AI use cases.
              </p>
<button className="self-start text-sm text-orange-500 hover:text-orange-400 font-medium flex items-center gap-1 group/btn hover-trigger">
                Start Building
                <i className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="rounded-3xl glass-panel p-6 md:p-10 lg:p-12 flex flex-col lg:flex-row gap-10 lg:gap-16 transition-all duration-500 hover:border-orange-500/30">

<div className="flex-1">
<div className="relative rounded-2xl border border-white/10 bg-[#101010] text-zinc-100 shadow-2xl overflow-hidden">

<div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-amber-400"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500"></div>
</div>
<div className="text-xs text-zinc-500">Add to test</div>
<button className="hover-trigger text-zinc-500 hover:text-zinc-300">
<i className="w-5 h-5" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>

<div className="flex items-center gap-2 px-5 pt-4">
<button className="hover-trigger flex-1 text-xs font-medium rounded-full bg-orange-500 text-black py-2 text-center">
                    Add New
                  </button>
<button className="hover-trigger flex-1 text-xs font-medium rounded-full bg-zinc-900 text-zinc-400 py-2 text-center border border-zinc-800">
                    Choose from History
                  </button>
<div className="flex items-center gap-1 text-[10px] text-zinc-500 ml-2">
<span>Upload limit</span>
<i className="w-4 h-4" data-lucide="info" strokeWidth="1.5"></i>
</div>
</div>

<div className="mt-4 px-5 pb-5 pt-3 space-y-4 max-h-[420px] overflow-y-auto custom-scrollbar">

<div className="border border-dashed border-zinc-700 rounded-xl bg-zinc-900/80 px-4 py-4 hover-trigger hover:border-orange-500/70 hover:bg-zinc-900 transition-colors">
<div className="flex items-start gap-4">
<div className="shrink-0 w-10 h-10 rounded-lg border border-zinc-700 flex items-center justify-center bg-black/40">
<i className="w-6 h-6 text-zinc-300" data-lucide="file-plus" strokeWidth="1.5"></i>
</div>
<div className="space-y-1">
<p className="text-xs font-medium text-zinc-100">
                          Drop your Image, PDF, DOC, DOCX, TXT here, or
                          <span className="text-orange-500">browse</span>
</p>
<p className="text-[10px] text-zinc-500 leading-relaxed">
                          Maximum size: 20MB for Images and 1000 pages (or
                          200MBs) for files.
                        </p>
</div>
</div>
</div>

<p className="text-[10px] text-zinc-500 leading-relaxed">
                    Please note: Credits will be used for document uploads.
                    Credit deduction varies with file size — bigger documents
                    use more credits.
                  </p>

<div className="flex items-center gap-3">
<div className="h-px flex-1 bg-zinc-800"></div>
<span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                      OR
                    </span>
<div className="h-px flex-1 bg-zinc-800"></div>
</div>

<div className="flex items-center justify-between rounded-xl bg-zinc-900 px-4 py-3 border border-zinc-800">
<div className="space-y-0.5">
<div className="flex items-center gap-1.5">
<span className="text-xs text-zinc-100">Deep Scraping</span>
<i className="w-4 h-4 text-zinc-500" data-lucide="info" strokeWidth="1.5"></i>
</div>
<p className="text-[10px] text-zinc-500">
                        Scrape all internal links on the page
                      </p>
</div>

<div className="hover-trigger w-11 h-5 rounded-full border border-zinc-600 bg-zinc-900 relative cursor-pointer transition-colors">
<div className="absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-zinc-500 shadow-sm transition-transform"></div>
</div>
</div>

<div className="space-y-1.5">
<label className="text-[10px] text-zinc-500">
                      Enter Website URLs
                    </label>
<div className="flex items-center gap-2 rounded-lg bg-zinc-950 border border-zinc-800 px-3 py-2">
<input className="flex-1 bg-transparent text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none" placeholder="https://example.com" type="text"/>
<button className="hover-trigger text-xs font-medium text-zinc-200 bg-zinc-800 px-3 py-1.5 rounded-md">
                        Enter
                      </button>
</div>
</div>
</div>

<div className="flex items-center justify-between px-5 py-4 border-t border-white/10 bg-[#050505]">
<span className="text-[10px] text-zinc-500">2/2</span>
<div className="flex gap-3">
<button className="hover-trigger text-xs text-zinc-300 bg-zinc-900 border border-zinc-700 px-3 py-1.5 rounded-full">
                      Previous
                    </button>
<button className="hover-trigger text-xs text-zinc-500 bg-zinc-800 border border-zinc-700 px-3 py-1.5 rounded-full">
                      Add To Knowledge Base
                    </button>
</div>
</div>
</div>
</div>

<div className="lg:w-[40%] flex flex-col justify-center">
<h2 className="text-4xl md:text-4xl tracking-tight text-white mb-4 font-medium">
                Smart File Uploads &amp; Web Analysis
              </h2>
<p className="text-2xl text-zinc-400 leading-relaxed font-light">
                Drag and drop PDFs, DOCs, and images, or extract content from
                entire websites with deep scraping. Perfect for content reuse,
                audits, research, and creating detailed briefs in a single
                workflow.
              </p>
</div>
</div>
</div>
</section>
<section className="py-24 relative border-t border-white/5">
<div className="max-w-5xl mx-auto px-6">
<div className="rounded-3xl glass-panel p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-500 group shadow-lg hover:shadow-orange-500/10">
<div>
<h2 className="text-4xl sm:text-4xl text-white tracking-tight mb-6 font-medium">
                Create With AI Across All Mediums
              </h2>
<p className="text-xl text-zinc-400 font-light leading-relaxed">
                Create with top-tier tools —
                <span className="text-zinc-300 font-medium">GPT</span>
                ,
                <span className="text-zinc-300 font-medium">Flux Pro</span>
                ,
                <span className="text-zinc-300 font-medium">craft V3</span>
                ,
                <span className="text-zinc-300 font-medium">Ideogram</span>
                and
                <span className="text-zinc-300 font-medium">SD3</span>
                for images;
                <span className="text-zinc-300 font-medium">ElevenLabs</span>
                for voice;
                <span className="text-zinc-300 font-medium">Runway</span>
                ,
                <span className="text-zinc-300 font-medium">Kling</span>
                ,
                <span className="text-zinc-300 font-medium">Veo 2</span>
                and
                <span className="text-zinc-300 font-medium">LumaLabs</span>
                for video. Ideal for marketing, learning, ads, and storytelling.
              </p>
</div>
<div className="relative pl-0 md:pl-8">
<div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent hidden md:block"></div>
<h3 className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-6 ml-2">
                AI Tools
              </h3>
<div className="space-y-3">
<div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 cursor-pointer group/item hover:scale-[1.02] active:scale-[0.98]">
<div className="shrink-0 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover/item:bg-orange-500/10 transition-colors border border-white/5 group-hover/item:border-orange-500/20">
<svg className="text-zinc-400 group-hover/item:text-orange-500 transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
</div>
<span className="text-sm text-zinc-300 font-medium group-hover/item:text-white transition-colors">
                    Chatbot
                  </span>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 cursor-pointer group/item hover:scale-[1.02] active:scale-[0.98]">
<div className="shrink-0 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover/item:bg-orange-500/10 transition-colors border border-white/5 group-hover/item:border-orange-500/20">
<svg className="text-zinc-400 group-hover/item:text-orange-500 transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<circle cx="9" cy="9" r="2"></circle>
<path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
</svg>
</div>
<span className="text-sm text-zinc-300 font-medium group-hover/item:text-white transition-colors">
                    Text To Image
                  </span>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 cursor-pointer group/item hover:scale-[1.02] active:scale-[0.98]">
<div className="shrink-0 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover/item:bg-orange-500/10 transition-colors border border-white/5 group-hover/item:border-orange-500/20">
<svg className="text-zinc-400 group-hover/item:text-orange-500 transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="14.31" x2="20.05" y1="8" y2="17.94"></line>
<line x1="9.69" x2="21.17" y1="8" y2="8"></line>
<line x1="7.38" x2="13.12" y1="12" y2="2.06"></line>
<line x1="9.69" x2="3.95" y1="16" y2="6.06"></line>
<line x1="14.31" x2="2.83" y1="16" y2="16"></line>
<line x1="16.62" x2="10.88" y1="12" y2="21.94"></line>
</svg>
</div>
<span className="text-sm text-zinc-300 font-medium group-hover/item:text-white transition-colors">
                    Image To Image
                  </span>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 cursor-pointer group/item hover:scale-[1.02] active:scale-[0.98]">
<div className="shrink-0 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover/item:bg-orange-500/10 transition-colors border border-white/5 group-hover/item:border-orange-500/20">
<svg className="text-zinc-400 group-hover/item:text-orange-500 transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
<path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
</svg>
</div>
<span className="text-sm text-zinc-300 font-medium group-hover/item:text-white transition-colors">
                    Image Editing
                  </span>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 cursor-pointer group/item hover:scale-[1.02] active:scale-[0.98]">
<div className="shrink-0 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover/item:bg-orange-500/10 transition-colors border border-white/5 group-hover/item:border-orange-500/20">
<svg className="text-zinc-400 group-hover/item:text-orange-500 transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M24.5 12C24.5 18.9036 18.9036 24.5 12 24.5C5.09644 24.5 -0.5 18.9036 -0.5 12C-0.5 5.09644 5.09644 -0.5 12 -0.5C18.9036 -0.5 24.5 5.09644 24.5 12Z" stroke-opacity="0"></path>
<path d="M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
<path d="M4 16h16"></path>
<path d="M4 11h16"></path>
<path d="M2 8h20"></path>
<path d="m13.5 8-5 13"></path>
</svg>
</div>
<span className="text-sm text-zinc-300 font-medium group-hover/item:text-white transition-colors">
                    Video Generation
                  </span>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 cursor-pointer group/item hover:scale-[1.02] active:scale-[0.98]">
<div className="shrink-0 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover/item:bg-orange-500/10 transition-colors border border-white/5 group-hover/item:border-orange-500/20">
<svg className="text-zinc-400 group-hover/item:text-orange-500 transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
<path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
<line x1="12" x2="12" y1="19" y2="22"></line>
</svg>
</div>
<span className="text-sm text-zinc-300 font-medium group-hover/item:text-white transition-colors">
                    Speech Generator
                  </span>
</div>
</div>
</div>
</div>
<div className="mt-24 text-center max-w-5xl mx-auto">
<h3 className="text-3xl sm:text-4xl font-medium text-white leading-tight tracking-tight">
              Managing 10+ tools? Qolaba replaces them with one smart, seamless
              AI workspace for creation, collaboration, and automation.
            </h3>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 mb-10">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-200 backdrop-blur">
<i className="w-4 h-4 text-emerald-400" data-lucide="workflow" strokeWidth="1.5"></i>
                AI Automations
              </div>
<h2 className="mt-4 text-4xl md:text-5xl tracking-tight text-white font-medium">
                Design end‑to‑end AI workflows visually
              </h2>
<p className="mt-3 text-2xl text-zinc-400 font-light max-w-xl">
                Orchestrate triggers, models, and actions in a few clicks.
                Connect your stack, branch on sentiment, and ship
                production‑ready flows without touching code.
              </p>
</div>
</div>

<div className="relative w-full md:h-[500px] glass-panel rounded-2xl shadow-xl custom-scrollbar h-[500px] grid overflow-x-auto overflow-y-hidden justify-start md:justify-center">

<div className="relative w-[1000px] h-[500px] md:scale-100 md:h-full transition-transform duration-500 col-start-1 row-start-1" style={{backgroundImage: 'radial-gradient(#666 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 to-transparent pointer-events-none"></div>
<div className="relative w-[1000px] h-[500px] md:h-full transition-transform duration-500 col-start-1 row-start-1 z-10">

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.1))'}}>
<defs>
<lineargradient id="gradientFlow" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: 'rgba(255,255,255,0.1)', stopOpacity: '1'}}></stop>
<stop offset="50%" style={{stopColor: 'rgba(255,255,255,0.6)', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: 'rgba(255,255,255,0.1)', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>

<path d="M 210 250 L 290 250" fill="none" stroke="#333" strokeWidth="2"></path>
<path className="animate-flow" d="M 210 250 L 290 250" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2"></path>

<path d="M 450 250 L 539 250" fill="none" stroke="#333" strokeWidth="2"></path>
<path className="animate-flow" d="M 450 250 L 539 250" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2"></path>

<path d="M 651 235 C 710 235, 710 150, 770 150" fill="none" stroke="#333" strokeWidth="2"></path>
<path className="animate-flow" d="M 651 235 C 710 235, 710 150, 770 150" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2"></path>

<path d="M 651 265 C 710 265, 710 350, 770 350" fill="none" stroke="#333" strokeWidth="2"></path>
<path className="animate-flow" d="M 651 265 C 710 265, 710 350, 770 350" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2"></path>
</svg>

<div className="absolute left-[670px] top-[195px] text-[10px] text-zinc-500 bg-[#0A0A0A] px-1.5 py-0.5 rounded border border-zinc-800 z-10 font-medium tracking-wide shadow-lg">
                true
              </div>
<div className="absolute left-[670px] top-[295px] text-[10px] text-zinc-500 bg-[#0A0A0A] px-1.5 py-0.5 rounded border border-zinc-800 z-10 font-medium tracking-wide shadow-lg">
                false
              </div>

<div className="absolute left-[50px] top-1/2 -translate-y-1/2 w-40 h-40 bg-[#121214] rounded-2xl border border-zinc-800 shadow-[0_0_20px_rgba(0,0,0,0.4)] flex flex-col items-center justify-center p-4 z-10 hover:border-zinc-600 transition-all cursor-pointer group hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)] hover:-translate-y-1">
<div className="w-16 h-16 rounded-full border border-zinc-700 bg-zinc-900/50 flex items-center justify-center mb-4 group-hover:border-zinc-500 transition-colors shadow-inner">
<span className="font-serif text-3xl text-zinc-300">T</span>
</div>
<div className="text-center">
<div className="text-sm font-semibold text-zinc-100 mb-1">
                    Typeform Trigger
                  </div>
<div className="text-[10px] text-zinc-500 font-mono">
                    Form ID: DuJHEGW5
                  </div>
</div>

<div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-zinc-400 rounded-full border-[3px] border-[#121214] box-content shadow-[0_0_5px_rgba(255,255,255,0.5)]"></div>
</div>

<div className="absolute left-[290px] top-1/2 -translate-y-1/2 w-40 h-40 bg-[#121214] rounded-2xl border border-zinc-800 shadow-[0_0_20px_rgba(0,0,0,0.4)] flex flex-col items-center justify-center p-4 z-10 hover:border-teal-500/50 transition-all cursor-pointer group hover:shadow-[0_0_30px_-5px_rgba(20,184,166,0.2)] hover:-translate-y-1">
<div className="w-14 h-16 rounded-lg bg-teal-800/80 flex items-center justify-center mb-4 shadow-lg relative overflow-hidden group-hover:bg-teal-700 transition-colors border border-teal-600/30">
<i className="w-7 h-7 text-white absolute left-2.5 top-2.5 opacity-40" data-lucide="file-text"></i>
<div className="relative z-10 bg-black/20 rounded-full p-1">
<i className="w-5 h-5 text-yellow-300 fill-yellow-300" data-lucide="lightbulb"></i>
</div>
</div>
<div className="text-center w-full">
<div className="text-sm font-semibold text-zinc-100 mb-1 truncate px-2">
                    AWS Comprehend
                  </div>
<div className="text-[10px] text-zinc-500 font-mono truncate px-2">
                    detectSentiment: text
                  </div>
</div>

<div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-zinc-400 rounded-full border-[3px] border-[#121214] box-content shadow-[0_0_5px_rgba(255,255,255,0.5)]"></div>

<div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-zinc-400 rounded-full border-[3px] border-[#121214] box-content shadow-[0_0_5px_rgba(255,255,255,0.5)]"></div>
</div>

<div className="absolute left-[539px] top-1/2 -translate-y-1/2 w-28 h-32 bg-[#121214] rounded-2xl border border-zinc-800 shadow-[0_0_20px_rgba(0,0,0,0.4)] flex flex-col items-center justify-center p-3 z-10 hover:border-emerald-500/50 transition-all cursor-pointer group hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.2)] hover:-translate-y-1">
<div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-3 shadow-sm border border-zinc-200">
<i className="w-8 h-8 text-emerald-800 fill-emerald-800" data-lucide="signpost"></i>
</div>
<div className="text-center">
<div className="text-sm font-semibold text-zinc-100">IF</div>
</div>

<div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-zinc-400 rounded-full border-[3px] border-[#121214] box-content shadow-[0_0_5px_rgba(255,255,255,0.5)]"></div>

<div className="absolute -right-1.5 top-[35%] -translate-y-1/2 w-3 h-3 bg-zinc-400 rounded-full border-[3px] border-[#121214] box-content shadow-[0_0_5px_rgba(255,255,255,0.5)]"></div>

<div className="absolute -right-1.5 top-[65%] -translate-y-1/2 w-3 h-3 bg-zinc-400 rounded-full border-[3px] border-[#121214] box-content shadow-[0_0_5px_rgba(255,255,255,0.5)]"></div>
</div>

<div className="absolute left-[770px] top-[150px] -translate-y-1/2 w-40 h-36 bg-[#121214] rounded-2xl border border-zinc-800 shadow-[0_0_20px_rgba(0,0,0,0.4)] flex flex-col items-center justify-center p-4 z-10 hover:border-blue-500/50 transition-all cursor-pointer group hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.2)] hover:-translate-y-1">
<div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-3 shadow-sm overflow-hidden p-1 border border-zinc-200">
<div className="w-full h-full bg-[#1e40af] rounded-xl flex items-center justify-center">
<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" fill="white"></path>
<path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="#1e40af"></path>
<path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#1e40af" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="text-center">
<div className="text-sm font-semibold text-zinc-100 mb-0.5">
                    Mattermost
                  </div>
<div className="text-[10px] text-zinc-500 font-mono">
                    post: message
                  </div>
</div>

<div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-zinc-400 rounded-full border-[3px] border-[#121214] box-content shadow-[0_0_5px_rgba(255,255,255,0.5)]"></div>

<div className="absolute -right-1.5 top-1/2 -translate-y-1/2 flex items-center">
<div className="w-3 h-3 bg-zinc-400 rounded-full border-[3px] border-[#121214] box-content shadow-[0_0_5px_rgba(255,255,255,0.5)]"></div>
<div className="ml-2 w-5 h-5 rounded border border-zinc-600 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-400 transition-colors bg-[#121214]">
                    +
                  </div>
</div>
</div>

<div className="absolute left-[770px] top-[350px] -translate-y-1/2 w-40 h-36 bg-[#121214] rounded-2xl border border-zinc-800 shadow-[0_0_20px_rgba(0,0,0,0.4)] flex flex-col items-center justify-center p-4 z-10 hover:border-zinc-500 transition-all cursor-pointer group hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)] hover:-translate-y-1">
<div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-3 shadow-sm border border-zinc-200">
<i className="w-8 h-8 text-zinc-400 stroke-[3px]" data-lucide="arrow-right"></i>
</div>
<div className="text-center">
<div className="text-sm font-semibold text-zinc-100">NoOp</div>
</div>

<div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-zinc-400 rounded-full border-[3px] border-[#121214] box-content shadow-[0_0_5px_rgba(255,255,255,0.5)]"></div>

<div className="absolute -right-1.5 top-1/2 -translate-y-1/2 flex items-center">
<div className="w-3 h-3 bg-zinc-400 rounded-full border-[3px] border-[#121214] box-content shadow-[0_0_5px_rgba(255,255,255,0.5)]"></div>
<div className="ml-2 w-5 h-5 rounded border border-zinc-600 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-400 transition-colors bg-[#121214]">
                    +
                  </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="rounded-3xl glass-panel overflow-hidden flex flex-col lg:flex-row group transition-all duration-500 hover:shadow-orange-500/10">

<div className="p-10 lg:p-16 flex flex-col justify-center lg:w-1/3 relative z-10">
<h2 className="text-4xl md:text-5xl text-white tracking-tight mb-6 font-medium">
                Transparent Usage &amp; Performance Insights
              </h2>
<p className="text-xl text-zinc-400 font-light">
                Track credit usage across your organization.
              </p>
</div>

<div className="lg:w-2/3 bg-zinc-900/20 border-l border-white/5 p-6 lg:p-10 relative overflow-hidden">

<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="rounded-xl border border-white/10 bg-[#050505] overflow-hidden shadow-2xl relative z-10">

<div className="flex items-center justify-between p-4 border-b border-white/5 bg-zinc-900/40">
<div className="flex items-center gap-4">
<span className="text-xs font-medium text-zinc-400">
                      Organization Dashboard
                    </span>
</div>
<div className="flex items-center gap-2">
<button className="px-2 py-1 rounded text-[10px] text-zinc-500 hover:text-white transition-colors hover-trigger">
                      Overview
                    </button>
<button className="px-2 py-1 rounded bg-orange-600 text-[10px] text-white font-medium hover-trigger">
                      Members
                    </button>
<button className="px-2 py-1 rounded text-[10px] text-zinc-500 hover:text-white transition-colors hover-trigger">
                      Profile
                    </button>
<button className="px-2 py-1 rounded text-[10px] text-zinc-500 hover:text-white transition-colors hover-trigger">
                      History
                    </button>
</div>
</div>

<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#080808]">
<span className="text-[10px] font-semibold text-zinc-300">
                    Members
                  </span>
<div className="flex items-center gap-2">
<div className="flex items-center gap-1 px-2 py-1 rounded border border-white/10 bg-zinc-900 text-[10px] text-zinc-400">
<span>Workspace:</span>
<span className="text-white">Qolaba Team Check</span>
<i className="w-3 h-3 ml-1" data-lucide="chevron-down"></i>
</div>
<button className="px-2 py-1 rounded border border-orange-500/30 bg-orange-500/10 text-[10px] text-orange-400 hover:bg-orange-500/20 hover:text-orange-300 transition-colors hover-trigger">
                      Invite Member
                    </button>
</div>
</div>

<div className="overflow-x-auto custom-scrollbar">
<table className="w-full text-left text-[10px] border-collapse">
<thead className="text-zinc-500 font-medium bg-zinc-900/20">
<tr>
<th className="p-3 font-medium tracking-wide">EMAIL</th>
<th className="p-3 font-medium tracking-wide text-center">
                          IMAGE/SPEECH CREDITS
                        </th>
<th className="p-3 font-medium tracking-wide text-center">
                          CHATBOT CREDITS
                        </th>
<th className="p-3 font-medium tracking-wide text-center">
                          TOTAL CREDITS
                        </th>
<th className="p-3 font-medium tracking-wide">STATUS</th>
<th className="p-3 font-medium tracking-wide">ROLE</th>
<th className="p-3 font-medium tracking-wide">WORKSPACE</th>
<th className="p-3 font-medium tracking-wide text-right">
                          ACTION
                        </th>
</tr>
</thead>
<tbody className="text-zinc-400 divide-y divide-white/5">
<tr className="hover:bg-white/5 transition-colors cursor-pointer group/row hover-trigger">
<td className="p-3 text-zinc-300 group-hover/row:text-white transition-colors">
                          kashyap@qolaba.io
                        </td>
<td className="p-3 text-center">0</td>
<td className="p-3 text-center">0</td>
<td className="p-3 text-center">0</td>
<td className="p-3 text-emerald-500">Active</td>
<td className="p-3">Owner</td>
<td className="p-3">Qolaba Team Check</td>
<td className="p-3 text-right">--</td>
</tr>
<tr className="hover:bg-white/5 transition-colors cursor-pointer group/row hover-trigger">
<td className="p-3 text-zinc-300 group-hover/row:text-white transition-colors">
                          sam@qolaba.io
                        </td>
<td className="p-3 text-center">152</td>
<td className="p-3 text-center">287</td>
<td className="p-3 text-center text-white font-medium">
                          439
                        </td>
<td className="p-3 text-emerald-500">Active</td>
<td className="p-3">Admin</td>
<td className="p-3">Qolaba Team Check</td>
<td className="p-3 text-right flex justify-end">
<i className="w-3 h-3 text-zinc-600 group-hover/row:text-zinc-400" data-lucide="more-horizontal"></i>
</td>
</tr>
<tr className="hover:bg-white/5 transition-colors cursor-pointer group/row hover-trigger">
<td className="p-3 text-zinc-300 group-hover/row:text-white transition-colors">
                          dhruv@qolaba.io
                        </td>
<td className="p-3 text-center">642</td>
<td className="p-3 text-center">4437</td>
<td className="p-3 text-center text-white font-medium">
                          5079
                        </td>
<td className="p-3 text-emerald-500">Active</td>
<td className="p-3">Admin</td>
<td className="p-3">Qolaba Team Check</td>
<td className="p-3 text-right flex justify-end">
<i className="w-3 h-3 text-zinc-600 group-hover/row:text-zinc-400" data-lucide="more-horizontal"></i>
</td>
</tr>
<tr className="hover:bg-white/5 transition-colors cursor-pointer group/row hover-trigger">
<td className="p-3 text-zinc-300 group-hover/row:text-white transition-colors">
                          prakhar@qolaba.io
                        </td>
<td className="p-3 text-center">17987</td>
<td className="p-3 text-center">134</td>
<td className="p-3 text-center text-white font-medium">
                          18121
                        </td>
<td className="p-3 text-emerald-500">Active</td>
<td className="p-3">Admin</td>
<td className="p-3">Qolaba Team Check</td>
<td className="p-3 text-right flex justify-end">
<i className="w-3 h-3 text-zinc-600 group-hover/row:text-zinc-400" data-lucide="more-horizontal"></i>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

<div className="rounded-3xl glass-panel p-10 lg:p-14 text-center transition-all duration-500 group cursor-default hover:shadow-lg hover:shadow-orange-900/10 hover-trigger hover:-translate-y-2">
<h3 className="text-4xl lg:text-4xl font-semibold text-white tracking-tight mb-8 group-hover:text-orange-100 transition-colors">
                Creators &amp; Innovators
              </h3>
<ul className="space-y-4 text-xl lg:text-xl text-zinc-400 font-light">
<li className="group-hover:text-zinc-300 transition-colors">
                  Content Creators
                </li>
<li className="group-hover:text-zinc-300 transition-colors">
                  Educators &amp; Coaches
                </li>
<li className="group-hover:text-zinc-300 transition-colors">
                  Freelancers
                </li>
</ul>
</div>

<div className="rounded-3xl glass-panel p-10 lg:p-14 text-center transition-all duration-500 group cursor-default hover:shadow-lg hover:shadow-orange-900/10 hover-trigger hover:-translate-y-2">
<h3 className="text-4xl lg:text-4xl font-semibold text-white tracking-tight mb-8 group-hover:text-orange-100 transition-colors">
                Business Ops
              </h3>
<ul className="space-y-4 text-xl lg:text-xl text-zinc-400 font-light">
<li className="group-hover:text-zinc-300 transition-colors">
                  Product Teams
                </li>
<li className="group-hover:text-zinc-300 transition-colors">
                  Project Managers
                </li>
<li className="group-hover:text-zinc-300 transition-colors">
                  IT &amp; Ops Leaders
                </li>
</ul>
</div>

<div className="rounded-3xl glass-panel p-10 lg:p-14 text-center transition-all duration-500 group cursor-default hover:shadow-lg hover:shadow-orange-900/10 hover-trigger hover:-translate-y-2">
<h3 className="text-4xl lg:text-4xl font-semibold text-white tracking-tight mb-8 group-hover:text-orange-100 transition-colors">
                Growth &amp; Strategy
              </h3>
<ul className="space-y-4 text-xl lg:text-xl text-zinc-400 font-light">
<li className="group-hover:text-zinc-300 transition-colors">
                  Marketing Teams
                </li>
<li className="group-hover:text-zinc-300 transition-colors">
                  Agencies
                </li>
<li className="group-hover:text-zinc-300 transition-colors">
                  Founders &amp; Startups
                </li>
</ul>
</div>
</div>

<div className="mt-6 rounded-3xl border border-white/10 bg-black/50 p-12 lg:p-20 text-center relative overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<h2 className="relative z-10 text-4xl sm:text-5xl text-white font-medium tracking-tight mb-4">
              One Studio. Infinite AI Possibilities.
            </h2>
<p className="relative z-10 text-xl text-zinc-400 font-light mb-10">
              Try Qolaba free or talk to our team about a tailored solution.
            </p>
<button className="relative z-10 hover-trigger inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/10 bg-black text-base font-medium text-white transition-all duration-300 hover:bg-zinc-900 hover:border-white/20 hover:scale-105 active:scale-95">
              Try Qolaba Free
            </button>
</div>
</div>
</section>
</main>
<footer className="bg-black border-t border-white/5 pt-24 pb-16 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">

<div>
<h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-6">
                Resources
              </h4>
<ul className="space-y-4">
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="#">
                    Docs
                  </a>
</li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="#">
                    Blogs
                  </a>
</li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="#">
                    White Paper
                  </a>
</li>
</ul>
</div>

<div>
<h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-6">
                Company
              </h4>
<ul className="space-y-4">
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="#">
                    About US
                  </a>
</li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="#">
                    Contact US
                  </a>
</li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="#">
                    API Platform
                  </a>
</li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="#">
                    Pricing
                  </a>
</li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="#">
                    Privacy Policy
                  </a>
</li>
</ul>
</div>

<div>
<h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-6">
                Address
              </h4>
<address className="text-sm text-zinc-300 not-italic leading-relaxed">
                30 N Gould St
                <br/>
                Sheridan, WY 82801, USA
              </address>
</div>
</div>

<div className="lg:col-span-5 lg:text-right flex flex-col items-start lg:items-end">
<h2 className="text-3xl sm:text-4xl font-semibold leading-tight mb-8 text-orange-500 tracking-tight">
              AFFORDABLE
              <span className="text-white">AND ACCESSIBLE</span>
<br/>
              AI FOR EVERYONE
            </h2>
</div>
</div>
</div>
</footer>


    </>
  );
}
