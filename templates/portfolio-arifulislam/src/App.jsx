import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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



        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        // Unobserve after animating so it only animates once
                        observer.unobserve(entry.target);
                    }
                });
            }, { 
                threshold: 0.1, 
                rootMargin: '0px 0px -50px 0px' 
            });

            document.querySelectorAll('.fade-in-up').forEach((el) => {
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-20 lg:w-24 border-r border-[#1F2937] bg-[#070B14] flex-col items-center py-8 justify-between shrink-0 hidden md:flex z-50">

<div className="flex flex-col gap-8 items-center w-full fade-in-up is-visible">
<div className="flex gap-1.5 mb-2">
<div className="w-3.5 h-3.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] animate-pulse"></div>
<div className="w-3.5 h-3.5 rounded-full bg-slate-200"></div>
</div>

<nav className="flex flex-col gap-2 w-full">
<button className="w-full py-4 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors">
<iconify-icon className="text-xl" icon="solar:widget-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium tracking-tight">Dashboard</span>
</button>
<button className="w-full py-4 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors">
<iconify-icon className="text-xl" icon="solar:transfer-horizontal-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium tracking-tight">Transfers</span>
</button>

<button className="w-full py-4 flex flex-col items-center gap-2 text-emerald-400 relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-emerald-400 rounded-l-full shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
<iconify-icon className="text-xl" icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium tracking-tight">Portfolio</span>
</button>
<button className="w-full py-4 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors">
<iconify-icon className="text-xl" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium tracking-tight">Settings</span>
</button>
</nav>
</div>

<div className="flex flex-col gap-6 items-center fade-in-up is-visible" style={{transitionDelay: '200ms'}}>
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-500 p-[2px] hover:scale-110 transition-transform duration-300">
<div className="w-full h-full rounded-full bg-slate-800 overflow-hidden border-2 border-[#070B14]">

<div className="w-full h-full bg-[#1F2937] flex items-center justify-center text-slate-400 text-xs font-semibold">ME</div>
</div>
</div>
<button className="text-slate-500 hover:text-slate-300 transition-colors">
<iconify-icon className="text-xl" icon="solar:logout-2-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 h-full overflow-y-auto relative w-full scroll-smooth">

<header className="md:hidden flex items-center justify-between p-6 border-b border-[#1F2937] bg-[#0B1120]/80 backdrop-blur-md sticky top-0 z-50">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
</div>
<button className="text-slate-300">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</header>
<div className="max-w-[1600px] mx-auto p-6 md:p-10 lg:p-16 flex flex-col min-h-full pb-24">

<div className="w-full flex justify-between items-center mb-12 lg:mb-0 fade-in-up">
<h1 className="text-2xl lg:text-3xl font-semibold text-white tracking-tight hidden md:block">Portfolio Overview</h1>
<div className="flex items-center gap-4 ml-auto">
<button className="px-4 py-2 rounded-lg border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium flex items-center gap-2 hover:bg-indigo-500/20 transition-colors group">
<iconify-icon className="text-base group-hover:scale-110 transition-transform" icon="solar:crown-linear" strokeWidth="1.5"></iconify-icon> Available for work
                    </button>
<div className="flex items-center gap-4 text-slate-400 border-l border-[#1F2937] pl-4">
<button className="hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="hover:text-white transition-colors relative">
<iconify-icon className="text-xl" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-rose-500 border border-[#0B1120] animate-pulse"></span>
</button>
<button className="hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:menu-dots-vertical-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<section className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center flex-1 min-h-[calc(100vh-200px)] py-12 lg:py-0">

<div className="flex-1 w-full flex flex-col justify-center space-y-8 z-10 lg:pr-10">
<div className="space-y-6">
<h2 className="text-5xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1] fade-in-up" style={{transitionDelay: '100ms'}}>
                            Digital product <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">designer &amp; dev.</span>
</h2>
<p className="text-lg lg:text-xl text-slate-400 leading-relaxed font-normal max-w-xl fade-in-up" style={{transitionDelay: '200ms'}}>
                            Specializing in crafting premium, intuitive interfaces and robust applications. Turning complex problems into elegant, user-centric solutions.
                        </p>
</div>

<div className="flex flex-wrap items-center gap-4 pt-4 fade-in-up" style={{transitionDelay: '300ms'}}>
<a className="px-8 py-4 rounded-xl bg-[#5A52FF] hover:bg-[#4f46e5] hover:scale-105 text-white text-lg font-medium transition-all shadow-[0_0_20px_rgba(90,82,255,0.3)] flex items-center gap-2" href="#projects">
                            Explore Work
                        </a>
<a className="px-8 py-4 rounded-xl border border-[#1F2937] hover:border-slate-500 bg-[#111827]/50 hover:bg-[#1F2937]/50 text-slate-200 text-lg font-medium transition-all flex items-center gap-2" href="#contact">
                            Contact Me
                        </a>
</div>

<div className="mt-8 p-6 rounded-2xl border border-[#1F2937] bg-[#111827]/40 backdrop-blur-sm max-w-md w-full fade-in-up" style={{transitionDelay: '400ms'}}>
<div className="flex justify-between items-center mb-6">
<span className="text-sm font-medium text-slate-300">Design execution</span>
<span className="text-xs text-slate-500">Global</span>
</div>

<div className="mb-6">
<div className="flex justify-between text-xs text-slate-400 mb-2 font-medium">
<span>Precision</span>
<span className="text-emerald-400">100%</span>
</div>
<div className="w-full h-1 bg-[#1F2937] rounded-full relative">
<div className="absolute left-0 top-0 h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.4)] animate-slide-fill" style={{animationDelay: '800ms'}}>
<div className="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md border-2 border-emerald-500"></div>
</div>
</div>
</div>

<div>
<span className="text-xs text-slate-400 font-medium mb-3 block">Aesthetic</span>
<div className="flex gap-3">
<button className="flex-1 py-2.5 rounded-xl border border-[#1F2937] bg-transparent flex items-center justify-center text-slate-400 hover:text-white transition-colors">
<span className="text-sm font-normal">Minimal</span>
</button>
<button className="flex-1 py-2.5 rounded-xl border border-indigo-500 bg-indigo-500/10 flex items-center justify-center text-indigo-400 shadow-[inset_0_0_15px_rgba(99,102,241,0.1)]">
<span className="text-sm font-medium tracking-tight">Trendy</span>
</button>
</div>
</div>
</div>
</div>

<div className="flex-1 w-full relative h-[500px] md:h-[600px] lg:h-[750px] flex items-center justify-center mt-12 lg:mt-0 perspective-1000">

<div className="absolute w-[90%] h-[90%] bg-indigo-600/10 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse-glow"></div>

<div className="absolute z-30 hover:z-50 left-0 md:left-[5%] top-[10%] w-[65%] md:w-[55%] aspect-[3/4] animate-float-slow fade-in-up" style={{transitionDelay: '300ms'}}>
<a className="block w-full h-full rounded-[2rem] border border-white/10 bg-[#161B26] shadow-2xl overflow-hidden group transform rotate-[-4deg] hover:rotate-0 hover:scale-[1.02] transition-all duration-500 ease-out" href="#projects">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-[#1e1b4b] to-slate-950 opacity-100 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent z-10"></div>
<div className="absolute inset-[-50%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent group-hover:opacity-70 opacity-40 transition-opacity duration-500"></div>
<div className="absolute bottom-0 w-full p-6 md:p-8 z-20">
<div className="flex justify-between items-end">
<div>
<p className="text-sm text-indigo-400 mb-2 font-medium tracking-tight">01 // Web App</p>
<h3 className="text-2xl lg:text-3xl font-semibold text-white tracking-tight leading-none mb-1">Fintech Core</h3>
<p className="text-lg text-slate-400 font-normal">Banking Dashboard</p>
</div>
<div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div className="absolute top-6 left-6 z-20 flex gap-2">
<div className="px-3 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/10 text-xs text-white font-medium">React</div>
<div className="px-3 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/10 text-xs text-white font-medium">Tailwind</div>
</div>
</a>
</div>

<div className="absolute z-20 hover:z-50 right-0 md:right-[5%] top-[5%] w-[55%] md:w-[45%] aspect-square animate-float-fast fade-in-up" style={{transitionDelay: '400ms'}}>
<a className="block w-full h-full rounded-3xl border border-white/10 bg-[#161B26] shadow-xl overflow-hidden group transform rotate-[6deg] hover:rotate-0 hover:scale-[1.02] transition-all duration-500 ease-out" href="#projects">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-900 via-teal-900 to-[#0B1120] opacity-90 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/90 to-transparent z-10"></div>
<div className="absolute bottom-0 w-full p-6 z-20">
<p className="text-sm text-emerald-400 mb-2 font-medium tracking-tight">02 // Mobile</p>
<h3 className="text-xl lg:text-2xl font-semibold text-white tracking-tight leading-none mb-1">Vitals iOS</h3>
</div>
</a>
</div>

<div className="absolute z-40 hover:z-50 right-[10%] md:right-[15%] bottom-[5%] w-[50%] md:w-[45%] aspect-[4/3] animate-float-slow fade-in-up" style={{transitionDelay: '500ms'}}>
<a className="block w-full h-full rounded-3xl border border-white/10 bg-[#161B26] shadow-2xl overflow-hidden group transform rotate-[-2deg] hover:rotate-0 hover:scale-[1.02] transition-all duration-500 ease-out backdrop-blur-xl" href="#projects">
<div className="absolute inset-0 bg-gradient-to-bl from-rose-900/80 via-slate-900/90 to-[#0B1120] opacity-95 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] to-transparent z-10 opacity-80"></div>
<div className="absolute bottom-0 w-full p-6 z-20">
<p className="text-sm text-rose-400 mb-2 font-medium tracking-tight">03 // Platform</p>
<h3 className="text-xl lg:text-2xl font-semibold text-white tracking-tight leading-none">Nexus Market</h3>
</div>
</a>
</div>

<div className="absolute z-50 left-[55%] top-[45%] animate-float-fast fade-in-up" style={{transitionDelay: '600ms'}}>
<div className="w-auto px-4 py-3 rounded-xl bg-[#1c2230]/90 border border-[#2A3143] backdrop-blur-xl shadow-2xl transform rotate-[-8deg] flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
<iconify-icon className="text-base text-indigo-400" icon="solar:layers-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 font-medium">Component Lib</p>
<p className="text-sm text-white font-semibold tracking-tight">Synced</p>
</div>
</div>
</div>
</div>
</section>

<section className="mt-20 lg:mt-32 border-y border-[#1F2937] bg-[#070B14]/50 backdrop-blur-md fade-in-up" style={{transitionDelay: '100ms'}}>
<div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#1F2937]">
<div className="p-8 md:p-12 flex flex-col items-center justify-center text-center gap-2 hover:bg-[#111827]/50 transition-colors">
<h3 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight">40+</h3>
<p className="text-sm text-slate-400 font-medium">Projects Shipped</p>
</div>
<div className="p-8 md:p-12 flex flex-col items-center justify-center text-center gap-2 hover:bg-[#111827]/50 transition-colors">
<h3 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight">1M+</h3>
<p className="text-sm text-slate-400 font-medium">Active Users</p>
</div>
<div className="p-8 md:p-12 flex flex-col items-center justify-center text-center gap-2 hover:bg-[#111827]/50 transition-colors">
<h3 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight">99%</h3>
<p className="text-sm text-slate-400 font-medium">Client Satisfaction</p>
</div>
<div className="p-8 md:p-12 flex flex-col items-center justify-center text-center gap-2 hover:bg-[#111827]/50 transition-colors">
<h3 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight">12</h3>
<p className="text-sm text-slate-400 font-medium">Design Awards</p>
</div>
</div>
</section>

<section className="mt-32 flex flex-col gap-12" id="projects">
<div className="flex flex-col gap-4 fade-in-up">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight">Selected Projects</h2>
<p className="text-lg text-slate-400 max-w-2xl">A deeper dive into some of the comprehensive platforms and digital experiences I've engineered.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="group relative rounded-[2rem] border border-[#1F2937] bg-[#070B14] overflow-hidden hover:border-indigo-500/30 transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] flex flex-col fade-in-up" style={{transitionDelay: '100ms'}}>
<div className="aspect-[16/10] bg-[#111827] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 group-hover:scale-105 transition-transform duration-700"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity duration-500">
<div className="w-64 h-64 rounded-full border border-indigo-400/30 absolute"></div>
<div className="w-48 h-48 rounded-full border border-indigo-400/50 absolute"></div>
</div>
</div>
<div className="p-8 lg:p-10 flex flex-col flex-1 justify-between gap-8">
<div>
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-2xl font-semibold text-white tracking-tight">Nexus Architecture</h3>
<p className="text-sm text-indigo-400 font-medium mt-2">Next.js • Tailwind • TypeScript</p>
</div>
<button className="w-10 h-10 rounded-full border border-[#1F2937] flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-[#0B1120] transition-all transform group-hover:rotate-45">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<p className="text-base text-slate-400 leading-relaxed">A highly scalable enterprise platform managing complex data flows, featuring an intuitive real-time dashboard and seamless integrations.</p>
</div>
</div>
</div>

<div className="group relative rounded-[2rem] border border-[#1F2937] bg-[#070B14] overflow-hidden hover:border-emerald-500/30 transition-all hover:shadow-[0_0_30px_rgba(52,211,153,0.1)] flex flex-col fade-in-up" style={{transitionDelay: '200ms'}}>
<div className="aspect-[16/10] bg-[#111827] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 group-hover:scale-105 transition-transform duration-700"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity duration-500">
<div className="w-full h-px bg-emerald-400/30 absolute top-1/2 -translate-y-1/2"></div>
<div className="w-px h-full bg-emerald-400/30 absolute left-1/2 -translate-x-1/2"></div>
</div>
</div>
<div className="p-8 lg:p-10 flex flex-col flex-1 justify-between gap-8">
<div>
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-2xl font-semibold text-white tracking-tight">Vitals Financial</h3>
<p className="text-sm text-emerald-400 font-medium mt-2">React Native • Node.js • Stripe</p>
</div>
<button className="w-10 h-10 rounded-full border border-[#1F2937] flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-[#0B1120] transition-all transform group-hover:rotate-45">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<p className="text-base text-slate-400 leading-relaxed">A consumer banking application built from the ground up to provide seamless cross-border transfers with a focus on accessibility and security.</p>
</div>
</div>
</div>
</div>
</section>

<section className="mt-32 flex flex-col gap-12">
<div className="flex flex-col gap-4 fade-in-up">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight">Core Competencies</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="p-8 rounded-3xl border border-[#1F2937] bg-[#070B14] hover:bg-[#111827] transition-all hover:-translate-y-1 fade-in-up" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-indigo-400" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-4">Product Design</h3>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">Crafting design systems and pixel-perfect interfaces that prioritize user experience and aesthetic appeal.</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-lg border border-[#1F2937] bg-[#0B1120] text-xs text-slate-300 font-medium hover:border-indigo-500/50 transition-colors cursor-default">Figma</span>
<span className="px-3 py-1.5 rounded-lg border border-[#1F2937] bg-[#0B1120] text-xs text-slate-300 font-medium hover:border-indigo-500/50 transition-colors cursor-default">Prototyping</span>
<span className="px-3 py-1.5 rounded-lg border border-[#1F2937] bg-[#0B1120] text-xs text-slate-300 font-medium hover:border-indigo-500/50 transition-colors cursor-default">Design Systems</span>
</div>
</div>

<div className="p-8 rounded-3xl border border-[#1F2937] bg-[#070B14] hover:bg-[#111827] transition-all hover:-translate-y-1 fade-in-up" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-emerald-400" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-4">Frontend Eng.</h3>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">Developing robust, highly interactive web applications using modern JavaScript frameworks and styling solutions.</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-lg border border-[#1F2937] bg-[#0B1120] text-xs text-slate-300 font-medium hover:border-emerald-500/50 transition-colors cursor-default">React</span>
<span className="px-3 py-1.5 rounded-lg border border-[#1F2937] bg-[#0B1120] text-xs text-slate-300 font-medium hover:border-emerald-500/50 transition-colors cursor-default">Next.js</span>
<span className="px-3 py-1.5 rounded-lg border border-[#1F2937] bg-[#0B1120] text-xs text-slate-300 font-medium hover:border-emerald-500/50 transition-colors cursor-default">Tailwind CSS</span>
</div>
</div>

<div className="p-8 rounded-3xl border border-[#1F2937] bg-[#070B14] hover:bg-[#111827] transition-all hover:-translate-y-1 fade-in-up" style={{transitionDelay: '300ms'}}>
<div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-rose-400" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-4">Backend &amp; Cloud</h3>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">Building scalable APIs, managing databases, and deploying infrastructure across modern cloud environments.</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-lg border border-[#1F2937] bg-[#0B1120] text-xs text-slate-300 font-medium hover:border-rose-500/50 transition-colors cursor-default">Node.js</span>
<span className="px-3 py-1.5 rounded-lg border border-[#1F2937] bg-[#0B1120] text-xs text-slate-300 font-medium hover:border-rose-500/50 transition-colors cursor-default">PostgreSQL</span>
<span className="px-3 py-1.5 rounded-lg border border-[#1F2937] bg-[#0B1120] text-xs text-slate-300 font-medium hover:border-rose-500/50 transition-colors cursor-default">AWS</span>
</div>
</div>
</div>
</section>

<section className="mt-32 flex flex-col gap-12">
<div className="flex flex-col gap-4 fade-in-up">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight">Work History</h2>
</div>
<div className="flex flex-col relative mt-8">

<div className="hidden md:block absolute left-[10.5rem] top-2 bottom-8 w-px bg-gradient-to-b from-[#1F2937] via-[#1F2937] to-transparent"></div>

<div className="relative pl-0 md:pl-0 mb-16 fade-in-up" style={{transitionDelay: '100ms'}}>
<div className="flex flex-col md:flex-row gap-4 md:gap-20 relative group">
<div className="md:w-36 shrink-0 pt-1">
<span className="text-sm text-slate-500 font-medium group-hover:text-indigo-400 transition-colors">2021 — Present</span>
</div>

<div className="hidden md:block absolute left-[10.5rem] top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#0B1120] border-2 border-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)] group-hover:scale-125 transition-transform"></div>
<div className="flex flex-col gap-2 flex-1">
<h3 className="text-xl lg:text-2xl font-semibold text-white tracking-tight group-hover:text-indigo-300 transition-colors">Senior Product Engineer</h3>
<h4 className="text-base text-indigo-400 font-medium">Acme Corporation</h4>
<p className="text-base text-slate-400 leading-relaxed mt-4 max-w-3xl">Led the frontend architecture transition from legacy SPA to a modern Next.js stack, improving performance metrics by 40%. Mentored a team of 5 junior developers and established the company's first cohesive design system utilized across 3 core products.</p>
</div>
</div>
</div>

<div className="relative pl-0 md:pl-0 mb-16 fade-in-up" style={{transitionDelay: '200ms'}}>
<div className="flex flex-col md:flex-row gap-4 md:gap-20 relative group">
<div className="md:w-36 shrink-0 pt-1">
<span className="text-sm text-slate-500 font-medium group-hover:text-slate-300 transition-colors">2018 — 2021</span>
</div>

<div className="hidden md:block absolute left-[10.5rem] top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#0B1120] border-2 border-slate-600 group-hover:border-slate-400 group-hover:scale-125 transition-all"></div>
<div className="flex flex-col gap-2 flex-1">
<h3 className="text-xl lg:text-2xl font-semibold text-white tracking-tight">Full Stack Developer</h3>
<h4 className="text-base text-slate-300 font-medium">Nexus Tech</h4>
<p className="text-base text-slate-400 leading-relaxed mt-4 max-w-3xl">Developed and maintained multiple client-facing e-commerce applications. Implemented scalable backend APIs using Node.js and improved database query efficiency by 25%. Collaborated directly with stakeholders to translate business requirements into technical deliverables.</p>
</div>
</div>
</div>

<div className="relative pl-0 md:pl-0 fade-in-up" style={{transitionDelay: '300ms'}}>
<div className="flex flex-col md:flex-row gap-4 md:gap-20 relative group">
<div className="md:w-36 shrink-0 pt-1">
<span className="text-sm text-slate-500 font-medium group-hover:text-slate-300 transition-colors">2016 — 2018</span>
</div>

<div className="hidden md:block absolute left-[10.5rem] top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#0B1120] border-2 border-slate-600 group-hover:border-slate-400 group-hover:scale-125 transition-all"></div>
<div className="flex flex-col gap-2 flex-1">
<h3 className="text-xl lg:text-2xl font-semibold text-white tracking-tight">UI/UX Designer</h3>
<h4 className="text-base text-slate-300 font-medium">Creative Agency Studio</h4>
<p className="text-base text-slate-400 leading-relaxed mt-4 max-w-3xl">Spearheaded web design projects for over 20 clients ranging from startups to enterprise levels. Conducted user research, created wireframes, and delivered high-fidelity prototypes that drove an average 30% increase in user conversion rates.</p>
</div>
</div>
</div>
</div>
</section>

<section className="mt-32 rounded-[2.5rem] border border-[#1F2937] bg-gradient-to-b from-[#111827]/80 to-[#070B14] p-10 md:p-16 lg:p-24 text-center flex flex-col items-center justify-center relative overflow-hidden fade-in-up" id="contact" style={{transitionDelay: '100ms'}}>

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6 relative z-10">Let's build the next big thing.</h2>
<p className="text-lg text-slate-400 mb-10 max-w-xl relative z-10 leading-relaxed">Currently available for select freelance opportunities. Whether you have a specific project in mind or just want to explore possibilities, let's connect.</p>
<div className="flex flex-wrap justify-center items-center gap-4 relative z-10">
<a className="px-8 py-4 rounded-xl bg-white hover:bg-slate-200 hover:-translate-y-1 text-[#0B1120] text-base font-semibold transition-all flex items-center gap-3" href="mailto:hello@example.com">
<iconify-icon className="text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon> Send an email
                    </a>
<button className="px-8 py-4 rounded-xl border border-[#1F2937] hover:border-slate-500 hover:-translate-y-1 bg-[#0B1120]/50 hover:bg-[#1F2937]/50 text-slate-200 text-base font-medium transition-all flex items-center gap-3 backdrop-blur-md">
<iconify-icon className="text-xl" icon="solar:link-circle-linear" strokeWidth="1.5"></iconify-icon> Copy Link
                    </button>
</div>

<div className="mt-20 pt-10 border-t border-[#1F2937]/50 w-full flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
<p className="text-sm text-slate-500 font-medium">© 2024 Portfolio. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-slate-500 hover:text-white hover:-translate-y-1 transition-all" href="#">
<span className="sr-only">Twitter</span>
<iconify-icon className="text-xl" icon="solar:hashtag-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white hover:-translate-y-1 transition-all" href="#">
<span className="sr-only">GitHub</span>
<iconify-icon className="text-xl" icon="solar:code-circle-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white hover:-translate-y-1 transition-all" href="#">
<span className="sr-only">LinkedIn</span>
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>
</div>
</main>



    </>
  );
}
