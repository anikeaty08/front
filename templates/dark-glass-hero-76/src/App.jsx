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



        // Script to handle letter-by-letter splitting and animation delays
        document.addEventListener('DOMContentLoaded', () => {
            const splitTargets = document.querySelectorAll('.split-text-3d');
            
            splitTargets.forEach(target => {
                const text = target.getAttribute('data-text');
                target.innerHTML = '';
                
                // Base delay for this block
                let baseDelay = 0.1; 
                
                // If it's the second line, add more delay
                if(target.classList.contains('text-slate-400')) {
                    baseDelay = 0.3; 
                }

                text.split('').forEach((char, index) => {
                    const span = document.createElement('span');
                    span.textContent = char === ' ' ? '\u00A0' : char;
                    span.className = 'animate-letter';
                    
                    // Staggered delay: 0.2s duration requested, 0.1s delay staggered per letter roughly
                    // Adjusting slightly for smoother flow: 0.03s per letter increment
                    const delay = baseDelay + (index * 0.04); 
                    span.style.animationDelay = `${delay}s`;
                    
                    target.appendChild(span);
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="glass-sidebar w-20 h-full flex flex-col items-center py-8 z-50 shrink-0 relative shadow-md">

<div className="mb-12">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
<span className="font-semibold text-lg tracking-tighter text-white">T</span>
</div>
</div>

<nav className="flex-1 flex flex-col gap-6 w-full items-center">
<button className="p-3 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200 group relative">
<span className="iconify" data-height="24" data-icon="lucide:layout-grid" data-width="24" style={{strokeWidth: '1.5'}}></span>
<span className="absolute left-14 bg-zinc-800 text-xs px-2 py-1 rounded border border-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Dashboard</span>
</button>
<button className="p-3 rounded-lg text-blue-500 bg-blue-500/10 border border-blue-500/20 shadow-sm transition-all duration-200 relative">
<span className="iconify" data-height="24" data-icon="lucide:sparkles" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="p-3 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200 group relative">
<span className="iconify" data-height="24" data-icon="lucide:folder-open" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="p-3 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200 group relative">
<span className="iconify" data-height="24" data-icon="lucide:bar-chart-2" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
</nav>

<div className="mt-auto flex flex-col gap-6 items-center">
<button className="p-3 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200">
<span className="iconify" data-height="24" data-icon="lucide:settings" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center overflow-hidden">
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:user" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</aside>

<main className="flex-1 h-full relative flex flex-col items-center justify-center overflow-hidden perspective-container">

<div className="absolute inset-0 z-0 pointer-events-none">

<div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen opacity-40"></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
</div>

<div className="relative z-10 w-full max-w-5xl px-8 md:px-12 flex flex-col items-start justify-center h-full">

<div className="mb-8 animate-fade-in opacity-0" style={{animation: 'reveal3d 0.8s ease 0s forwards'}}>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm shadow-sm hover:border-zinc-700 transition-colors cursor-default">
<span className="flex h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
<span className="text-xs font-medium text-slate-300 tracking-wide uppercase">Available for projects</span>
</div>
</div>

<h1 aria-label="Digital experience designer" className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[1.1] text-white mb-6 max-w-4xl">
<span className="sr-only">Digital experience designer</span>
<span className="split-text-3d block" data-text="Digital experience"></span>
<span className="split-text-3d block text-slate-400" data-text="designer &amp; builder."></span>
</h1>

<p className="text-xl md:text-2xl text-slate-400 font-normal tracking-tight max-w-2xl leading-relaxed mb-10 opacity-0" style={{animation: 'reveal3d 0.8s ease 0.6s forwards'}}>
                Crafting interfaces that feel alive. Focusing on motion, interaction, and visual clarity for the modern web.
            </p>

<div className="flex flex-col sm:flex-row gap-4 opacity-0" style={{animation: 'reveal3d 0.8s ease 0.8s forwards'}}>
<button className="group relative px-6 py-3.5 bg-slate-50 hover:bg-slate-200 text-slate-950 text-base font-medium rounded-lg transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] flex items-center gap-2">
<span>View Projects</span>
<span className="iconify transition-transform duration-300 group-hover:translate-x-0.5" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="group px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-zinc-800 hover:border-zinc-700 text-white text-base font-medium rounded-lg transition-all duration-200 backdrop-blur-sm flex items-center gap-2">
<span className="iconify text-slate-400 group-hover:text-white transition-colors" data-icon="lucide:mail" style={{strokeWidth: '1.5'}}></span>
<span>Contact Me</span>
</button>
</div>

<div className="mt-20 pt-8 border-t border-zinc-800/50 w-full max-w-3xl flex gap-12 opacity-0" style={{animation: 'reveal3d 0.8s ease 1.0s forwards'}}>
<div>
<div className="text-3xl font-semibold text-white tracking-tight mb-1">10+</div>
<div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Years Experience</div>
</div>
<div>
<div className="text-3xl font-semibold text-white tracking-tight mb-1">120+</div>
<div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Projects Shipped</div>
</div>
<div>
<div className="text-3xl font-semibold text-white tracking-tight mb-1">15</div>
<div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Awards Won</div>
</div>
</div>
</div>
</main>

<div className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:block z-20 opacity-0" style={{animation: 'reveal3d 1s ease 1.2s forwards'}}>
<div className="glass-panel p-6 rounded-2xl w-72 transform rotate-y-12 rotate-z-2 hover:rotate-0 transition-transform duration-500 cursor-pointer group">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
<span className="iconify text-blue-500" data-icon="lucide:activity" data-width="20"></span>
</div>
<div>
<div className="text-sm font-semibold text-white">System Status</div>
<div className="text-xs text-green-400 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                        Operational
                    </div>
</div>
</div>
<div className="space-y-3">
<div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-3/4 rounded-full"></div>
</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-purple-500 w-1/2 rounded-full"></div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-zinc-800 flex justify-between items-center">
<span className="text-xs text-slate-500 font-mono">ID-8921</span>
<span className="text-xs text-white bg-white/10 px-2 py-0.5 rounded">Live</span>
</div>
</div>
</div>


    </>
  );
}
