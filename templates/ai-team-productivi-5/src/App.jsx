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
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1 // Trigger when 10% of the element is visible
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    } else {
                        // Remove class when out of view to trigger animation again next time
                        entry.target.classList.remove('active');
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030304]/80 backdrop-blur-md transition-all duration-300 reveal active">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-[10px] font-semibold tracking-tighter">N</div>
<span className="text-white font-medium tracking-tight text-sm group-hover:opacity-80 transition-opacity">NEURALINK</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#demo">How it Works</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-xs font-medium hover:text-white transition-colors" href="#">Sign in</a>
<a className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-full border border-white/10 transition-all duration-300 backdrop-blur-sm" href="#join">
                    Get Early Access
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] hero-glow pointer-events-none opacity-60"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">
<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[11px] font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    v2.0 Beta is live
                </div>
<h1 className="reveal delay-100 text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1] title-gradient">
                    Supercharge Your Team’s <br className="hidden md:block"/> Productivity with AI.
                </h1>
<p className="reveal delay-200 text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-light">
                    NeuraLink seamlessly integrates with your workflow to make collaboration smarter, faster, and completely intuitive.
                </p>
<div className="reveal delay-300 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto group relative px-8 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-slate-100 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                        Get Early Access
                        <span className="iconify inline ml-1 group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/10 hover:border-white/20 text-white text-sm font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:play-circle" data-width="16"></span>
                        See How It Works
                    </button>
</div>
</div>

<div className="mt-20 relative perspective-[2000px] group reveal delay-300">
<div className="relative w-full max-w-5xl mx-auto glass-panel rounded-xl p-1 shadow-2xl transition-transform duration-700 ease-out transform rotate-x-12 group-hover:rotate-x-0 overflow-hidden border-t border-white/10">
<div className="bg-[#0A0A0C] rounded-lg overflow-hidden border border-white/5 h-[400px] md:h-[600px] flex">

<div className="w-16 md:w-64 border-r border-white/5 flex flex-col p-4 bg-[#050507]">
<div className="flex items-center gap-3 mb-8">
<div className="w-4 h-4 rounded bg-indigo-500/20 border border-indigo-500/50"></div>
<div className="hidden md:block h-2 w-20 bg-white/10 rounded"></div>
</div>
<div className="space-y-4">
<div className="h-8 w-full bg-white/5 rounded flex items-center px-3 border border-white/5">
<span className="iconify text-indigo-400" data-icon="lucide:layout-dashboard" data-width="16"></span>
<span className="hidden md:block ml-3 text-xs text-white">Overview</span>
</div>
<div className="h-8 w-full rounded flex items-center px-3 hover:bg-white/5 transition-colors cursor-pointer opacity-60">
<span className="iconify" data-icon="lucide:check-square" data-width="16"></span>
<span className="hidden md:block ml-3 text-xs">Tasks</span>
</div>
<div className="h-8 w-full rounded flex items-center px-3 hover:bg-white/5 transition-colors cursor-pointer opacity-60">
<span className="iconify" data-icon="lucide:users" data-width="16"></span>
<span className="hidden md:block ml-3 text-xs">Team</span>
</div>
</div>
<div className="mt-auto pt-4 border-t border-white/5">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500"></div>
<div className="hidden md:block text-xs text-slate-400">Neura AI Active</div>
</div>
</div>
</div>

<div className="flex-1 p-6 md:p-8 overflow-hidden relative">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

<div className="flex justify-between items-center mb-8">
<div>
<div className="h-4 w-32 bg-white/10 rounded mb-2"></div>
<div className="h-8 w-64 bg-white/5 rounded border border-white/5 flex items-center px-3">
<span className="text-xs text-slate-500">Ask Neura AI to optimize schedule...</span>
</div>
</div>
<div className="flex gap-2">
<div className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center">
<span className="iconify text-slate-400" data-icon="lucide:bell" data-width="14"></span>
</div>
<div className="h-8 w-24 bg-indigo-600/20 border border-indigo-500/30 rounded-full flex items-center justify-center text-[10px] text-indigo-300">
                                        + New Project
                                    </div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="col-span-2 glass-panel rounded-lg p-5 relative overflow-hidden group/card">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[50px] rounded-full pointer-events-none"></div>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="iconify text-indigo-400" data-icon="lucide:sparkles" data-width="14"></span>
<span className="text-xs font-medium text-white">Workflow Suggestion</span>
</div>
<span className="text-[10px] text-slate-500">Just now</span>
</div>
<p className="text-sm text-slate-300 mb-4 leading-relaxed">
                                        Based on team velocity, moving "Q4 Roadmap" to <span className="text-white border-b border-indigo-500/50">Sprint B</span> will increase completion probability by 24%.
                                    </p>
<div className="flex gap-2">
<button className="px-3 py-1.5 bg-indigo-500 hover:bg-indigo-600 text-white text-[10px] rounded transition-colors">Apply Change</button>
<button className="px-3 py-1.5 border border-white/10 hover:bg-white/5 text-slate-400 text-[10px] rounded transition-colors">Dismiss</button>
</div>
</div>

<div className="glass-panel rounded-lg p-5 flex flex-col justify-between">
<span className="text-xs text-slate-500">Productivity Score</span>
<div className="text-3xl font-medium text-white tracking-tight mt-2">94.2</div>
<div className="flex items-center gap-1 mt-2 text-[10px] text-emerald-400">
<span className="iconify" data-icon="lucide:trending-up" data-width="12"></span>
<span>+12% this week</span>
</div>
<div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full w-[94%] bg-gradient-to-r from-emerald-500 to-teal-500"></div>
</div>
</div>

<div className="col-span-3 glass-panel rounded-lg p-5">
<div className="flex justify-between items-center mb-4">
<span className="text-xs font-medium text-white">Prioritized Tasks</span>
<span className="iconify text-slate-500 cursor-pointer hover:text-white" data-icon="lucide:more-horizontal" data-width="14"></span>
</div>
<div className="space-y-2">
<div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded transition-colors group/task cursor-pointer">
<div className="w-4 h-4 rounded border border-indigo-500/50 flex items-center justify-center">
<div className="w-2 h-2 bg-indigo-500 rounded-[1px] opacity-0 group-hover/task:opacity-100 transition-opacity"></div>
</div>
<span className="text-xs text-slate-300 flex-1">Review API Documentation</span>
<div className="px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 text-[10px] border border-red-500/20">High</div>
</div>
<div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded transition-colors group/task cursor-pointer">
<div className="w-4 h-4 rounded border border-white/20 flex items-center justify-center"></div>
<span className="text-xs text-slate-400 flex-1">Update design system tokens</span>
<div className="px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400 text-[10px] border border-yellow-500/20">Medium</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-t from-[#030304] to-transparent z-20"></div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-white/[0.01] overflow-hidden reveal">
<div className="max-w-7xl mx-auto px-6 text-center mb-8">
<p className="text-xs font-medium text-slate-500 tracking-wider uppercase">Trusted by forward-thinking teams</p>
</div>
<div className="relative w-full overflow-hidden" style={{WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>
<div className="animate-marquee flex gap-12 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 flex-shrink-0">
<span className="iconify" data-icon="lucide:hexagon" data-width="24"></span>
<span className="font-bold text-lg text-white tracking-tight">AcmeCorp</span>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<span className="iconify" data-icon="lucide:triangle" data-width="24"></span>
<span className="font-bold text-lg text-white tracking-tight">Vortex</span>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<span className="iconify" data-icon="lucide:circle" data-width="24"></span>
<span className="font-bold text-lg text-white tracking-tight">Sphere</span>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<span className="iconify" data-icon="lucide:square-stack" data-width="24"></span>
<span className="font-bold text-lg text-white tracking-tight">Layer</span>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<span className="iconify" data-icon="lucide:gem" data-width="24"></span>
<span className="font-bold text-lg text-white tracking-tight">Crystal</span>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<span className="iconify" data-icon="lucide:boxes" data-width="24"></span>
<span className="font-bold text-lg text-white tracking-tight">Block</span>
</div>

<div className="flex items-center gap-2 flex-shrink-0">
<span className="iconify" data-icon="lucide:hexagon" data-width="24"></span>
<span className="font-bold text-lg text-white tracking-tight">AcmeCorp</span>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<span className="iconify" data-icon="lucide:triangle" data-width="24"></span>
<span className="font-bold text-lg text-white tracking-tight">Vortex</span>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<span className="iconify" data-icon="lucide:circle" data-width="24"></span>
<span className="font-bold text-lg text-white tracking-tight">Sphere</span>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<span className="iconify" data-icon="lucide:square-stack" data-width="24"></span>
<span className="font-bold text-lg text-white tracking-tight">Layer</span>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<span className="iconify" data-icon="lucide:gem" data-width="24"></span>
<span className="font-bold text-lg text-white tracking-tight">Crystal</span>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<span className="iconify" data-icon="lucide:boxes" data-width="24"></span>
<span className="font-bold text-lg text-white tracking-tight">Block</span>
</div>

<div className="flex items-center gap-2 flex-shrink-0">
<span className="iconify" data-icon="lucide:hexagon" data-width="24"></span>
<span className="font-bold text-lg text-white tracking-tight">AcmeCorp</span>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<span className="iconify" data-icon="lucide:triangle" data-width="24"></span>
<span className="font-bold text-lg text-white tracking-tight">Vortex</span>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<span className="iconify" data-icon="lucide:circle" data-width="24"></span>
<span className="font-bold text-lg text-white tracking-tight">Sphere</span>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<span className="iconify" data-icon="lucide:square-stack" data-width="24"></span>
<span className="font-bold text-lg text-white tracking-tight">Layer</span>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<span className="iconify" data-icon="lucide:gem" data-width="24"></span>
<span className="font-bold text-lg text-white tracking-tight">Crystal</span>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<span className="iconify" data-icon="lucide:boxes" data-width="24"></span>
<span className="font-bold text-lg text-white tracking-tight">Block</span>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-2xl md:mx-auto reveal">
<h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">Intelligence built into every step.</h2>
<p className="text-slate-400 text-lg">
                    Stop managing tools and start managing work. NeuraLink's AI handles the busy work so you can focus on shipping.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 glass-panel rounded-2xl hover:bg-white/[0.05] transition-all duration-300 relative overflow-hidden reveal delay-100">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-indigo-500" data-icon="lucide:zap" data-width="100"></span>
</div>
<div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6 border border-indigo-500/20 group-hover:border-indigo-500/40 transition-colors">
<span className="iconify text-indigo-400" data-icon="lucide:list-todo" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">AI Task Prioritization</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Automatically sorts your daily tasks based on deadlines, complexity, and team availability.
                    </p>
</div>

<div className="group p-8 glass-panel rounded-2xl hover:bg-white/[0.05] transition-all duration-300 md:col-span-2 relative overflow-hidden reveal delay-200">
<div className="flex flex-col md:flex-row gap-8 items-start md:items-center h-full">
<div className="flex-1 z-10">
<div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 border border-purple-500/20">
<span className="iconify text-purple-400" data-icon="lucide:sparkles" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Smart Workflow Suggestions</h3>
<p className="text-sm text-slate-400 leading-relaxed max-w-md">
                                The AI analyzes bottlenecks in real-time and suggests instant optimizations to clear blockers before they become problems.
                            </p>
</div>

<div className="flex-1 w-full bg-[#0A0A0C] border border-white/5 rounded-lg p-4 shadow-lg transform group-hover:translate-y-[-4px] transition-transform duration-500">
<div className="flex gap-2 items-center mb-3 border-b border-white/5 pb-2">
<div className="w-2 h-2 rounded-full bg-purple-500"></div>
<span className="text-[10px] text-purple-300">Suggestion Found</span>
</div>
<div className="flex gap-3">
<div className="h-8 w-8 rounded bg-white/5"></div>
<div className="flex-1 space-y-2">
<div className="h-2 w-3/4 bg-white/10 rounded"></div>
<div className="h-2 w-1/2 bg-white/10 rounded"></div>
</div>
</div>
</div>
</div>
</div>

<div className="group p-8 glass-panel rounded-2xl hover:bg-white/[0.05] transition-all duration-300 reveal delay-100">
<div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 border border-blue-500/20">
<span className="iconify text-blue-400" data-icon="lucide:bar-chart-3" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Data-Driven Insights</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Visual analytics that show you exactly where your team excels and where time is being wasted.
                    </p>
</div>

<div className="group p-8 glass-panel rounded-2xl hover:bg-white/[0.05] transition-all duration-300 reveal delay-200">
<div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6 border border-emerald-500/20">
<span className="iconify text-emerald-400" data-icon="lucide:messages-square" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Integrated Chat</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Context-aware chat that links discussions directly to tasks, so no context is ever lost.
                    </p>
</div>

<div className="group p-8 glass-panel rounded-2xl hover:bg-white/[0.05] transition-all duration-300 reveal delay-300">
<div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 border border-orange-500/20">
<span className="iconify text-orange-400" data-icon="lucide:puzzle" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Seamless Integrations</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Works with GitHub, Slack, Figma, and Notion out of the box. Connect in seconds.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050507] border-y border-white/5 relative overflow-hidden" id="demo">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#050507] to-[#050507]"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-20">
<div className="flex-1 space-y-6 reveal">
<div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium">
                    Live Demo
                </div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Watch AI Optimize Your Day</h2>
<p className="text-slate-400 text-lg">
                    Hover over the task list to see how NeuraLink analyzes complexity and suggests the optimal path forward.
                </p>
<ul className="space-y-4 pt-4">
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-emerald-400" data-icon="lucide:check-circle-2" data-width="18"></span>
                        Real-time complexity analysis
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-emerald-400" data-icon="lucide:check-circle-2" data-width="18"></span>
                        Automated resource allocation
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-emerald-400" data-icon="lucide:check-circle-2" data-width="18"></span>
                        Drag-and-drop reordering
                    </li>
</ul>
</div>

<div className="flex-1 w-full reveal delay-200">
<div className="bg-[#0e0e11] rounded-xl border border-white/10 p-6 shadow-2xl relative">
<div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
<span className="text-sm font-medium text-white">Today's Sprint</span>
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20"></div>
</div>
</div>
<div className="space-y-3">

<div className="group relative bg-[#18181b] rounded border border-white/5 p-4 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer overflow-hidden">
<div className="flex items-start justify-between relative z-10">
<div className="flex items-start gap-3">
<div className="mt-0.5 w-4 h-4 rounded border border-slate-600 flex items-center justify-center group-hover:border-indigo-400">
<span className="iconify opacity-0 group-hover:opacity-100 text-indigo-400" data-icon="lucide:check" data-width="10"></span>
</div>
<div>
<p className="text-sm text-slate-200 font-medium">Refactor Authentication Logic</p>
<p className="text-xs text-slate-500 mt-1">Backend • Due Today</p>
</div>
</div>
<span className="px-2 py-0.5 rounded text-[10px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white transition-colors">High Priority</span>
</div>

<div className="h-0 group-hover:h-auto group-hover:mt-3 opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-in-out">
<div className="pt-3 border-t border-white/10 flex items-center gap-3 text-xs">
<span className="text-indigo-300 flex items-center gap-1">
<span className="iconify" data-icon="lucide:bot" data-width="12"></span>
                                        AI Tip:
                                    </span>
<span className="text-slate-400">Similar task completed by Sarah in 2h. Assigning to her improves throughput.</span>
</div>
</div>
</div>

<div className="bg-[#18181b] rounded border border-white/5 p-4 opacity-60">
<div className="flex items-start justify-between">
<div className="flex items-start gap-3">
<div className="mt-0.5 w-4 h-4 rounded border border-slate-600"></div>
<div>
<p className="text-sm text-slate-300">Update User Documentation</p>
<p className="text-xs text-slate-500 mt-1">Design • Due Tomorrow</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-medium text-center text-white mb-16 tracking-tight reveal">Loved by remote teams worldwide</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass-panel p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors reveal delay-100">
<div className="flex gap-1 mb-4 text-indigo-400">
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-sm text-slate-300 leading-relaxed mb-6">
                    "NeuraLink totally changed how we handle sprints. The AI suggestions are surprisingly accurate and have saved us hours of planning time every week."
                </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<div>
<p className="text-xs font-medium text-white">Alex Chen</p>
<p className="text-[10px] text-slate-500">CTO, DevScale</p>
</div>
</div>
</div>
<div className="glass-panel p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors reveal delay-200">
<div className="flex gap-1 mb-4 text-indigo-400">
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-sm text-slate-300 leading-relaxed mb-6">
                    "The interface is stunning, but the backend AI is where the magic happens. It feels like having a project manager who never sleeps."
                </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<div>
<p className="text-xs font-medium text-white">Sarah Miller</p>
<p className="text-[10px] text-slate-500">Product Lead, Streamline</p>
</div>
</div>
</div>
<div className="glass-panel p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors reveal delay-300">
<div className="flex gap-1 mb-4 text-indigo-400">
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-sm text-slate-300 leading-relaxed mb-6">
                    "We've tried every tool out there. Nothing integrates this smoothly with our existing stack while adding actual intelligence."
                </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<div>
<p className="text-xs font-medium text-white">James Wilson</p>
<p className="text-[10px] text-slate-500">Founder, NextGen</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl font-medium text-white mb-4 tracking-tight">Simple, transparent pricing</h2>
<p className="text-slate-400">Start for free, scale when you need to.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="p-8 rounded-2xl border border-white/5 bg-[#0A0A0C] reveal delay-100">
<h3 className="text-lg font-medium text-white">Starter</h3>
<p className="text-sm text-slate-500 mb-6">For individuals</p>
<div className="text-3xl font-medium text-white mb-6">$0</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-slate-400"><span className="iconify text-slate-600" data-icon="lucide:check" data-width="14"></span> 3 Projects</li>
<li className="flex items-center gap-2 text-sm text-slate-400"><span className="iconify text-slate-600" data-icon="lucide:check" data-width="14"></span> Basic AI suggestions</li>
<li className="flex items-center gap-2 text-sm text-slate-400"><span className="iconify text-slate-600" data-icon="lucide:check" data-width="14"></span> Community Support</li>
</ul>
<button className="w-full py-2 rounded-lg border border-white/10 text-white text-sm hover:bg-white/5 transition-colors">Current Plan</button>
</div>

<div className="p-8 rounded-2xl border border-indigo-500/30 bg-[#0E0E12] relative reveal delay-200">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-indigo-500 text-[10px] text-white font-medium">Most Popular</div>
<h3 className="text-lg font-medium text-white">Pro</h3>
<p className="text-sm text-slate-500 mb-6">For small teams</p>
<div className="text-3xl font-medium text-white mb-6">$12<span className="text-sm text-slate-500 font-normal">/mo</span></div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-slate-300"><span className="iconify text-indigo-400" data-icon="lucide:check" data-width="14"></span> Unlimited Projects</li>
<li className="flex items-center gap-2 text-sm text-slate-300"><span className="iconify text-indigo-400" data-icon="lucide:check" data-width="14"></span> Advanced AI Insights</li>
<li className="flex items-center gap-2 text-sm text-slate-300"><span className="iconify text-indigo-400" data-icon="lucide:check" data-width="14"></span> Integrations</li>
</ul>
<button className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm transition-colors shadow-lg shadow-indigo-500/20">Join Beta</button>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-[#0A0A0C] reveal delay-300">
<h3 className="text-lg font-medium text-white">Business</h3>
<p className="text-sm text-slate-500 mb-6">For organizations</p>
<div className="text-3xl font-medium text-white mb-6">$29<span className="text-sm text-slate-500 font-normal">/mo</span></div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-slate-400"><span className="iconify text-slate-600" data-icon="lucide:check" data-width="14"></span> SSO &amp; Security</li>
<li className="flex items-center gap-2 text-sm text-slate-400"><span className="iconify text-slate-600" data-icon="lucide:check" data-width="14"></span> Dedicated Success Manager</li>
<li className="flex items-center gap-2 text-sm text-slate-400"><span className="iconify text-slate-600" data-icon="lucide:check" data-width="14"></span> Custom AI Models</li>
</ul>
<button className="w-full py-2 rounded-lg border border-white/10 text-white text-sm hover:bg-white/5 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="join">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Ready to work smarter?</h2>
<p className="text-slate-400 text-lg mb-10">Join the waiting list today and get our free guide on "AI-First Productivity".</p>
<form className="max-w-md mx-auto relative flex items-center">
<span className="iconify absolute left-4 text-slate-500" data-icon="lucide:mail" data-width="16"></span>
<input className="w-full bg-white/5 border border-white/10 rounded-full py-3.5 pl-11 pr-32 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Enter your email address" type="email"/>
<button className="absolute right-1.5 top-1.5 bottom-1.5 px-5 bg-white text-black text-xs font-semibold rounded-full hover:bg-slate-200 transition-colors" type="button">
                    Claim Your Spot
                </button>
</form>
<p className="text-[10px] text-slate-600 mt-4">No spam, ever. Unsubscribe anytime.</p>
</div>

<div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 blur-[100px] pointer-events-none"></div>
<div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[100px] pointer-events-none"></div>
</section>

<footer className="border-t border-white/5 bg-[#020203] py-12 text-sm reveal">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 rounded bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-[9px] font-bold">N</div>
<span className="text-white font-medium tracking-tight">NEURALINK</span>
</div>
<p className="text-slate-500 text-xs leading-relaxed">AI That Connects Your Team Smarter. Built for the future of remote work.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Product</h4>
<ul className="space-y-2 text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
<p className="text-slate-600 text-xs">© 2023 NeuraLink Solutions. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="16"></span></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="16"></span></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
