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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-1] h-full w-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="fixed inset-0 z-[-1] h-full w-full bg-gradient-to-tr from-neutral-950 via-neutral-950 to-neutral-900/20"></div>

<nav className="sticky z-50 bg-neutral-950/60 border-neutral-900 border-b top-0 backdrop-blur-xl">
<div className="flex md:px-12 lg:px-24 w-full h-16 pr-6 pl-6 items-center justify-between">
<div className="text-lg font-medium text-neutral-50 tracking-tighter cursor-pointer" onclick="window.location.href='/home'" role="button">AYUSH GIRI.</div>
<div className="flex items-center gap-6 text-sm font-normal">
<div className="hidden md:flex gap-6 mr-2">
<a className="hover:text-neutral-50 transition-colors" href="#home">Home</a>
<a className="hover:text-neutral-50 transition-colors" href="#work">Work</a>
<a className="hover:text-neutral-50 transition-colors" href="#about">About</a>
</div>
<a className="inline-flex items-center justify-center hover:bg-[#E26900] transition-colors text-xs font-medium text-[#FFFFFF] bg-[#EA580C] rounded-md pt-1.5 pr-4 pb-1.5 pl-4" href="#resume">
    Resume
</a>
</div>
</div>
</nav>

<header className="relative z-10 w-full px-6 md:px-12 lg:px-24 pt-32 pb-24 md:pt-40 md:pb-32 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12 overflow-hidden" id="home">

<div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#EA580C]/5 blur-[120px] rounded-full pointer-events-none"></div>

<div className="flex-1 flex flex-col items-start relative z-10 w-full max-w-3xl lg:max-w-xl xl:max-w-2xl">
<div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-neutral-800/80 bg-neutral-900/40 text-xs font-light text-neutral-300 mb-8 backdrop-blur-md shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="inline-flex bg-emerald-500 w-2 h-2 rounded-full relative"></span>
</span>
<span className="tracking-wide">Available for Fall Internships</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.05] font-normal text-neutral-50 tracking-tighter mb-8">
            Engineering Data.<br/> Designing Experiences.
        </h1>
<p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl leading-relaxed mb-10">
            Bridging the gap between complex data systems and intuitive user interfaces. I build products that are both
            analytically rigorous and experientially seamless.
        </p>
<div className="flex flex-wrap items-center gap-4">
<a className="inline-flex items-center justify-center hover:bg-[#E26900] transition-all duration-300 text-sm font-normal text-white bg-[#EA580C] rounded-lg px-6 py-3 shadow-[0_0_20px_rgba(234,88,12,0.15)] hover:shadow-[0_0_30px_rgba(234,88,12,0.3)] ring-1 ring-white/10" href="#work">
                View Projects
            </a>
<a className="group inline-flex items-center gap-2.5 justify-center hover:bg-neutral-800 hover:text-white transition-all duration-300 text-sm font-light text-neutral-300 border border-neutral-800 bg-neutral-900/30 rounded-lg px-6 py-3 backdrop-blur-sm" href="#resume">
<svg className="lucide lucide-download group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
                Download Resume
            </a>
</div>
</div>

<div className="flex-1 w-full relative z-10 flex justify-center lg:justify-end mt-4 lg:mt-0">

<div className="relative w-full max-w-md lg:max-w-lg xl:max-w-[540px] aspect-[4/5] sm:aspect-[4/4.5] lg:aspect-[4/5] group perspective-distant">

<div className="absolute -inset-1 bg-gradient-to-tr from-[#EA580C]/30 via-transparent to-emerald-500/30 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>

<div className="relative w-full h-full rounded-[2rem] border border-neutral-700/50 bg-neutral-900/50 p-2 md:p-3 backdrop-blur-xl shadow-2xl transform lg:rotate-y-5 lg:rotate-x-5 group-hover:rotate-y-0 group-hover:rotate-x-0 transition-all duration-700 ease-out">
<div className="w-full h-full rounded-[1.5rem] overflow-hidden relative border border-neutral-800/80">
<div className="absolute inset-0 bg-neutral-950/20 z-10 mix-blend-overlay"></div>
<img alt="My Profile" className="w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>

<div className="absolute top-6 left-6 z-20 flex flex-col gap-3 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 delay-100">
<div className="bg-neutral-950/70 backdrop-blur-md border border-white/10 rounded-lg p-2.5 shadow-xl flex items-center gap-2.5">
<svg className="lucide lucide-code-2" fill="none" height="14" stroke="#10b981" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
<span className="text-[10px] font-mono text-neutral-200 tracking-wide">DATA ENGINEER</span>
</div>
</div>
<div className="absolute bottom-6 right-6 z-20 flex flex-col gap-3 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 delay-200">
<div className="bg-neutral-950/70 backdrop-blur-md border border-white/10 rounded-lg p-2.5 shadow-xl flex items-center gap-2.5">
<span className="text-[10px] font-mono text-neutral-200 tracking-wide">UI/UX DESIGNER</span>
<svg className="lucide lucide-pen-tool" fill="none" height="14" stroke="#EA580C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m12 19 7-7 3 3-7 7-3-3z"></path><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="m2 2 7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="border-y bg-neutral-950/50 border-neutral-900 px-6 md:px-12 lg:px-24 py-24 backdrop-blur-sm" id="about">
<div className="w-full">
<h2 className="text-2xl text-neutral-50 font-medium tracking-tight mb-10">Core Architecture</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6">

<div className="md:col-span-2 p-8 md:p-10 rounded-xl border border-neutral-800/60 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors flex flex-col group">
<div className="flex gap-3 mb-8 items-center">
<div className="group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors text-neutral-300 bg-neutral-950 border-neutral-800 border rounded-md pt-2.5 pr-2.5 pb-2.5 pl-2.5">
<iconify-icon height="24" icon="solar:database-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-normal text-neutral-200 tracking-tight">Languages</h3>
</div>
<p className="text-base font-light text-neutral-500 mb-8 max-w-2xl">Architecting robust pipelines, predictive
                    models, and scalable architectures to extract signal from noise.</p>
<div className="mt-auto flex flex-wrap gap-3">
<span className="text-sm text-[#EA580C] font-mono bg-[#EA580C]/10 border-[#EA580C]/50 border rounded-md px-4 py-2">C</span>
<span className="text-sm text-[#EA580C] font-mono bg-[#EA580C]/10 border-[#EA580C]/50 border rounded-md px-4 py-2">Python</span>
<span className="text-sm text-[#EA580C] font-mono bg-[#EA580C]/10 border-[#EA580C]/50 border rounded-md px-4 py-2">SQL</span>
<span className="text-sm text-[#EA580C] font-mono bg-[#EA580C]/10 border-[#EA580C]/50 border rounded-md px-4 py-2">Java</span>
</div>
</div>

<div className="md:col-span-1 md:row-span-2 p-8 md:p-10 hover:bg-neutral-900/40 transition-colors flex flex-col overflow-hidden bg-neutral-900/20 border-neutral-800/60 border rounded-xl relative">

<div className="absolute -right-8 -top-8 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl"></div>
<div className="flex items-center justify-between mb-10 relative z-10">
<h3 className="text-sm text-neutral-400 font-medium tracking-widest uppercase">System Status</h3>
<div className="flex items-center gap-2 px-3 py-1.5 rounded border border-emerald-500/20 bg-emerald-500/10 text-xs font-mono text-emerald-400">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        ONLINE
                    </div>
</div>
<div className="flex flex-col gap-8 mt-auto relative z-10">
<div className="">
<div className="text-4xl text-neutral-100 font-medium tracking-tighter mb-2">12+</div>
<div className="text-sm font-mono text-neutral-500">Projects Deployed</div>
</div>
<div className="h-px w-full bg-neutral-800"></div>
<div className="">
<div className="text-4xl text-neutral-100 font-medium tracking-tighter mb-2">50k+</div>
<div className="text-sm font-mono text-neutral-500">Lines of Code</div>
</div>
<div className="h-px w-full bg-neutral-800"></div>
<div className="">
<div className="text-4xl text-neutral-100 font-medium tracking-tighter mb-2">99.9%</div>
<div className="text-sm font-mono text-neutral-500">Curiosity Uptime</div>
</div>
</div>
</div>

<div className="md:col-span-2 p-8 md:p-10 hover:bg-neutral-900/40 transition-colors flex flex-col group bg-neutral-900/20 border-neutral-800/60 border rounded-xl">
<div className="flex items-center gap-3 mb-8">
<div className="p-2.5 rounded-md bg-neutral-950 border border-neutral-800 text-neutral-300 group-hover:text-purple-400 group-hover:border-purple-500/30 transition-colors">
<iconify-icon height="24" icon="solar:pen-new-square-linear" strokeWidth="1.5" style={{color: 'rgb(192, 132, 252)'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl text-neutral-200 font-normal tracking-tight">Interface Design</h3>
</div>
<p className="text-base font-light text-neutral-500 mb-8 max-w-2xl">Crafting logic-driven, user-centric
                    interfaces through comprehensive design systems and high-fidelity prototyping.</p>
<div className="mt-auto flex flex-wrap gap-3">
<span className="text-sm text-[#EA580C] font-mono bg-[#EA580C]/10 border-[#EA580C]/50 border rounded-md px-4 py-2">Figma</span>
<span className="text-sm text-[#EA580C] font-mono bg-[#EA580C]/10 border-[#EA580C]/50 border rounded-md px-4 py-2">Prototyping</span>
<span className="text-sm text-[#EA580C] font-mono bg-[#EA580C]/10 border-[#EA580C]/50 border rounded-md px-4 py-2">Design Systems</span>
<span className="text-sm text-[#EA580C] font-mono bg-[#EA580C]/10 border-[#EA580C]/50 border rounded-md px-4 py-2">UX Research</span>
</div>
</div>

<div className="md:col-span-2 p-8 md:p-10 hover:bg-neutral-900/40 transition-colors flex flex-col group bg-neutral-900/20 border-neutral-800/60 border rounded-xl">
<div className="flex items-center gap-3 mb-8">
<div className="p-2.5 rounded-md bg-neutral-950 border border-neutral-800 text-neutral-300 group-hover:text-purple-400 group-hover:border-purple-500/30 transition-colors">
<iconify-icon height="24" icon="solar:chart-square-linear" strokeWidth="1.5" style={{color: 'rgb(192, 132, 252)'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-normal text-neutral-200 tracking-tight">Data Science &amp; Analytics</h3>
</div>
<p className="text-base font-light text-neutral-500 mb-8 max-w-2xl">Transforming raw data sets into actionable insights using advanced statistical models and predictive machine learning algorithms.</p>
<div className="mt-auto flex flex-wrap gap-3">
<span className="text-sm text-[#EA580C] font-mono bg-[#EA580C]/10 border-[#EA580C]/50 border rounded-md px-4 py-2">TensorFlow</span>
<span className="text-sm text-[#EA580C] font-mono bg-[#EA580C]/10 border-[#EA580C]/50 border rounded-md px-4 py-2">Pandas</span>
<span className="text-sm text-[#EA580C] font-mono bg-[#EA580C]/10 border-[#EA580C]/50 border rounded-md px-4 py-2">Data Viz</span>
</div>
</div>
</div>
</div>
</section>


<section className="md:px-12 lg:pl-24 lg:pr-24 lg:pb-4 w-full pt-24 pr-24 pb-12 pl-24" id="work">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-14">
<div>
<h2 className="text-3xl font-medium text-neutral-50 tracking-tight mb-3">Case Studies in UI/UX</h2>
<p className="text-base font-light text-neutral-500">Case studies at the intersection of logic and aesthetics.</p>
</div>
<a className="inline-flex items-center gap-2 hover:bg-neutral-900 hover:text-neutral-50 transition-colors text-sm font-medium text-neutral-300 border-neutral-800 border rounded px-5 py-2.5 shrink-0" href="#">
      View More Projects
      <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="group relative flex flex-col rounded-xl border border-neutral-800/60 bg-neutral-900/20 hover:bg-neutral-900/40 transition-all duration-500 overflow-hidden">
<div className="aspect-[16/10] flex overflow-hidden bg-neutral-950 border-neutral-800/60 border-b relative items-center justify-center">
<img alt="Steam System Requirement" className="w-full h-full object-cover border-0 absolute top-0 right-0 bottom-0 left-0 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
</div>
<div className="flex flex-col flex-1 bg-[radial-gradient(circle_at_bottom_right,var(--tw-gradient-stops))] from-blue-500/10 to-transparent p-6 lg:p-8">
<h3 className="group-hover:text-white transition-colors text-xl font-normal text-neutral-100 tracking-tight mb-3">
          Steam System Requirement</h3>
<p className="line-clamp-2 text-sm lg:text-base font-light text-neutral-400 mb-6 leading-relaxed">Redesigning the
          core interaction loop for an LLM-based tool, drastically reducing cognitive load and improving advanced
          parameter discoverability.</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-2.5 py-1 rounded text-[11px] font-mono bg-neutral-900 border border-neutral-800 text-neutral-400">Figma</span>
<span className="px-2.5 py-1 rounded text-[11px] font-mono bg-neutral-900 border border-neutral-800 text-neutral-400">UX Research</span>
<span className="px-2.5 py-1 rounded text-[11px] font-mono bg-neutral-900 border border-neutral-800 text-neutral-400">Framer</span>
</div>
<div className="flex gap-3 mt-auto items-center flex-wrap">
<a className="inline-flex items-center gap-2 transition-colors text-xs lg:text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded px-4 py-2 shadow-lg shadow-blue-500/20" href="#">
            Prototype
            <svg className="lucide lucide-play" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="6 3 20 12 6 21 6 3"></polygon>
</svg>
</a>
<a className="inline-flex items-center gap-2 hover:bg-neutral-900 hover:text-neutral-50 transition-colors text-xs lg:text-sm font-medium text-neutral-300 border-neutral-800 border rounded px-4 py-2" href="#">
<svg className="lucide lucide-folder" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z">
</path>
</svg>
            Case Study
          </a>
</div>
</div>
</div>

<div className="group relative flex flex-col rounded-xl border border-neutral-800/60 bg-neutral-900/20 hover:bg-neutral-900/40 transition-all duration-500 overflow-hidden">
<div className="aspect-[16/10] flex overflow-hidden bg-neutral-950 border-neutral-800/60 border-b relative items-center justify-center">
<img alt="Fintech Dashboard Auth" className="w-full h-full object-cover border-0 absolute top-0 right-0 bottom-0 left-0 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
</div>
<div className="flex flex-col flex-1 bg-[radial-gradient(circle_at_bottom_right,var(--tw-gradient-stops))] from-purple-500/10 to-transparent p-6 lg:p-8">
<h3 className="group-hover:text-white transition-colors text-xl font-normal text-neutral-100 tracking-tight mb-3">
          Fintech Dashboard Auth</h3>
<p className="line-clamp-2 text-sm lg:text-base font-light text-neutral-400 mb-6 leading-relaxed">Streamlining the
          onboarding and authentication flow for enterprise financial platforms, ensuring zero-friction secure access.
        </p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-2.5 py-1 rounded text-[11px] font-mono bg-neutral-900 border border-neutral-800 text-neutral-400">React</span>
<span className="px-2.5 py-1 rounded text-[11px] font-mono bg-neutral-900 border border-neutral-800 text-neutral-400">Tailwind</span>
<span className="px-2.5 py-1 rounded text-[11px] font-mono bg-neutral-900 border border-neutral-800 text-neutral-400">Next.js</span>
</div>
<div className="flex gap-3 mt-auto items-center flex-wrap">
<a className="inline-flex items-center gap-2 transition-colors text-xs lg:text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded px-4 py-2 shadow-lg shadow-purple-500/20" href="#">
            Prototype
            <svg className="lucide lucide-play" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="6 3 20 12 6 21 6 3"></polygon>
</svg>
</a>
<a className="inline-flex items-center gap-2 hover:bg-neutral-900 hover:text-neutral-50 transition-colors text-xs lg:text-sm font-medium text-neutral-300 border-neutral-800 border rounded px-4 py-2" href="#">
<svg className="lucide lucide-folder" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z">
</path>
</svg>
            Case Study
          </a>
</div>
</div>
</div>

<div className="group relative flex flex-col rounded-xl border border-neutral-800/60 bg-neutral-900/20 hover:bg-neutral-900/40 transition-all duration-500 overflow-hidden">
<div className="aspect-[16/10] flex overflow-hidden bg-neutral-950 border-neutral-800/60 border-b relative items-center justify-center">
<img alt="Healthcare Analytics" className="w-full h-full object-cover border-0 absolute top-0 right-0 bottom-0 left-0 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
</div>
<div className="flex flex-col flex-1 bg-[radial-gradient(circle_at_bottom_right,var(--tw-gradient-stops))] from-emerald-500/10 to-transparent p-6 lg:p-8">
<h3 className="group-hover:text-white transition-colors text-xl font-normal text-neutral-100 tracking-tight mb-3">
          Healthcare Analytics</h3>
<p className="line-clamp-2 text-sm lg:text-base font-light text-neutral-400 mb-6 leading-relaxed">Designing complex
          data visualization dashboards for healthcare professionals, enabling rapid interpretation of patient vitals.
        </p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-2.5 py-1 rounded text-[11px] font-mono bg-neutral-900 border border-neutral-800 text-neutral-400">Supabase</span>
<span className="px-2.5 py-1 rounded text-[11px] font-mono bg-neutral-900 border border-neutral-800 text-neutral-400">Chart.js</span>
<span className="px-2.5 py-1 rounded text-[11px] font-mono bg-neutral-900 border border-neutral-800 text-neutral-400">Design Systems</span>
</div>
<div className="flex gap-3 mt-auto items-center flex-wrap">
<a className="inline-flex items-center gap-2 transition-colors text-xs lg:text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded px-4 py-2 shadow-lg shadow-emerald-500/20" href="#">
            Prototype
            <svg className="lucide lucide-play" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="6 3 20 12 6 21 6 3"></polygon>
</svg>
</a>
<a className="inline-flex items-center gap-2 hover:bg-neutral-900 hover:text-neutral-50 transition-colors text-xs lg:text-sm font-medium text-neutral-300 border-neutral-800 border rounded px-4 py-2" href="#">
<svg className="lucide lucide-folder" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z">
</path>
</svg>
            Case Study
          </a>
</div>
</div>
</div>
</div>
</section>
<section className="md:px-12 lg:px-24 w-full pt-12 pr-6 pb-32 pl-6" id="work">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-14">
<div>
<h2 className="text-3xl font-medium text-neutral-50 tracking-tight mb-3">Case Studies in UI/UX</h2>
<p className="text-base font-light text-neutral-500">Case studies at the intersection of logic and aesthetics.</p>
</div>
<a className="inline-flex items-center gap-2 hover:bg-neutral-900 hover:text-neutral-50 transition-colors text-sm font-medium text-neutral-300 border-neutral-800 border rounded px-5 py-2.5 shrink-0" href="#">
      View More Projects
      <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="group relative flex flex-col rounded-xl border border-neutral-800/60 bg-neutral-900/20 hover:bg-neutral-900/40 transition-all duration-500 overflow-hidden">
<div className="aspect-[16/10] flex overflow-hidden bg-neutral-950 border-neutral-800/60 border-b relative items-center justify-center">
<img alt="Steam System Requirement" className="w-full h-full object-cover border-0 absolute top-0 right-0 bottom-0 left-0 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
</div>
<div className="flex flex-col flex-1 bg-[radial-gradient(circle_at_bottom_right,var(--tw-gradient-stops))] from-blue-500/10 to-transparent p-6 lg:p-8">
<h3 className="group-hover:text-white transition-colors text-xl font-normal text-neutral-100 tracking-tight mb-3">
          Steam System Requirement</h3>
<p className="line-clamp-2 text-sm lg:text-base font-light text-neutral-400 mb-6 leading-relaxed">Redesigning the
          core interaction loop for an LLM-based tool, drastically reducing cognitive load and improving advanced
          parameter discoverability.</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-2.5 py-1 rounded text-[11px] font-mono bg-neutral-900 border border-neutral-800 text-neutral-400">Figma</span>
<span className="px-2.5 py-1 rounded text-[11px] font-mono bg-neutral-900 border border-neutral-800 text-neutral-400">UX Research</span>
<span className="px-2.5 py-1 rounded text-[11px] font-mono bg-neutral-900 border border-neutral-800 text-neutral-400">Framer</span>
</div>
<div className="flex gap-3 mt-auto items-center flex-wrap">
<a className="inline-flex items-center gap-2 transition-colors text-xs lg:text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded px-4 py-2 shadow-lg shadow-blue-500/20" href="#">
            Prototype
            <svg className="lucide lucide-play" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="6 3 20 12 6 21 6 3"></polygon>
</svg>
</a>
<a className="inline-flex items-center gap-2 hover:bg-neutral-900 hover:text-neutral-50 transition-colors text-xs lg:text-sm font-medium text-neutral-300 border-neutral-800 border rounded px-4 py-2" href="#">
<svg className="lucide lucide-folder" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z">
</path>
</svg>
            Case Study
          </a>
</div>
</div>
</div>

<div className="group relative flex flex-col rounded-xl border border-neutral-800/60 bg-neutral-900/20 hover:bg-neutral-900/40 transition-all duration-500 overflow-hidden">
<div className="aspect-[16/10] flex overflow-hidden bg-neutral-950 border-neutral-800/60 border-b relative items-center justify-center">
<img alt="Fintech Dashboard Auth" className="w-full h-full object-cover border-0 absolute top-0 right-0 bottom-0 left-0 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
</div>
<div className="flex flex-col flex-1 bg-[radial-gradient(circle_at_bottom_right,var(--tw-gradient-stops))] from-purple-500/10 to-transparent p-6 lg:p-8">
<h3 className="group-hover:text-white transition-colors text-xl font-normal text-neutral-100 tracking-tight mb-3">
          Fintech Dashboard Auth</h3>
<p className="line-clamp-2 text-sm lg:text-base font-light text-neutral-400 mb-6 leading-relaxed">Streamlining the
          onboarding and authentication flow for enterprise financial platforms, ensuring zero-friction secure access.
        </p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-2.5 py-1 rounded text-[11px] font-mono bg-neutral-900 border border-neutral-800 text-neutral-400">React</span>
<span className="px-2.5 py-1 rounded text-[11px] font-mono bg-neutral-900 border border-neutral-800 text-neutral-400">Tailwind</span>
<span className="px-2.5 py-1 rounded text-[11px] font-mono bg-neutral-900 border border-neutral-800 text-neutral-400">Next.js</span>
</div>
<div className="flex gap-3 mt-auto items-center flex-wrap">
<a className="inline-flex items-center gap-2 transition-colors text-xs lg:text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded px-4 py-2 shadow-lg shadow-purple-500/20" href="#">
            Prototype
            <svg className="lucide lucide-play" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="6 3 20 12 6 21 6 3"></polygon>
</svg>
</a>
<a className="inline-flex items-center gap-2 hover:bg-neutral-900 hover:text-neutral-50 transition-colors text-xs lg:text-sm font-medium text-neutral-300 border-neutral-800 border rounded px-4 py-2" href="#">
<svg className="lucide lucide-folder" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z">
</path>
</svg>
            Case Study
          </a>
</div>
</div>
</div>

<div className="group relative flex flex-col rounded-xl border border-neutral-800/60 bg-neutral-900/20 hover:bg-neutral-900/40 transition-all duration-500 overflow-hidden">
<div className="aspect-[16/10] flex overflow-hidden bg-neutral-950 border-neutral-800/60 border-b relative items-center justify-center">
<img alt="Healthcare Analytics" className="w-full h-full object-cover border-0 absolute top-0 right-0 bottom-0 left-0 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
</div>
<div className="flex flex-col flex-1 bg-[radial-gradient(circle_at_bottom_right,var(--tw-gradient-stops))] from-emerald-500/10 to-transparent p-6 lg:p-8">
<h3 className="group-hover:text-white transition-colors text-xl font-normal text-neutral-100 tracking-tight mb-3">
          Healthcare Analytics</h3>
<p className="line-clamp-2 text-sm lg:text-base font-light text-neutral-400 mb-6 leading-relaxed">Designing complex
          data visualization dashboards for healthcare professionals, enabling rapid interpretation of patient vitals.
        </p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-2.5 py-1 rounded text-[11px] font-mono bg-neutral-900 border border-neutral-800 text-neutral-400">Supabase</span>
<span className="px-2.5 py-1 rounded text-[11px] font-mono bg-neutral-900 border border-neutral-800 text-neutral-400">Chart.js</span>
<span className="px-2.5 py-1 rounded text-[11px] font-mono bg-neutral-900 border border-neutral-800 text-neutral-400">Design Systems</span>
</div>
<div className="flex gap-3 mt-auto items-center flex-wrap">
<a className="inline-flex items-center gap-2 transition-colors text-xs lg:text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded px-4 py-2 shadow-lg shadow-emerald-500/20" href="#">
            Prototype
            <svg className="lucide lucide-play" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="6 3 20 12 6 21 6 3"></polygon>
</svg>
</a>
<a className="inline-flex items-center gap-2 hover:bg-neutral-900 hover:text-neutral-50 transition-colors text-xs lg:text-sm font-medium text-neutral-300 border-neutral-800 border rounded px-4 py-2" href="#">
<svg className="lucide lucide-folder" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z">
</path>
</svg>
            Case Study
          </a>
</div>
</div>
</div>
</div>
</section>

<footer className="text-[11px] text-neutral-400 font-mono bg-neutral-950 w-full border-neutral-800 border-t">
<div className="grid grid-cols-1 md:grid-cols-4 border-b border-neutral-800">
<div className="flex flex-col min-h-[300px] bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-[#48d77c]/5 to-white/0 border-neutral-800 border-r pt-8 pr-8 pb-4 pl-8 justify-between">
<div className="">
<div className="flex items-center gap-2 mb-10 group cursor-pointer">
<span className="text-sm font-medium text-white tracking-normal font-inter">AYUSH GIRI.</span>
</div>
<div className="overflow-hidden group hover:border-neutral-700 transition-colors bg-black border-neutral-800 border rounded-sm relative flex">
<div className="w-[3px] bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
<div className="text-[#050505] bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-green-400/10 to-green-600/0 w-full pt-5 pr-5 pb-5 pl-5">
<div className="flex justify-between items-center mb-6">
<span className="text-[10px] uppercase text-neutral-400 tracking-[0.2em] font-mono">System_Status</span>
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</div>
</div>
<h3 className="uppercase text-sm font-medium text-white tracking-widest font-mono mb-1">OPEN FOR INTERNSHIPS
            </h3>
<p className="text-[11px] text-neutral-400 font-mono mb-6">Type: ONLINE / REMOTE</p>
<div className="h-[1px] bg-neutral-800 w-full mb-5"></div>
<div className="flex justify-between items-center">
<span className="text-[10px] text-neutral-400 font-mono" id="status-clock">AS OF 2026...</span>
<a className="text-[10px] flex items-center gap-1 group-hover:gap-2 transition-all uppercase font-bold text-green-400 tracking-tighter font-mono" href="#">View
                projects<span className="text-xs">→</span></a>
</div>
</div>
</div>
</div>
<div className="flex mt-5 mb-5 gap-x-4 gap-y-x-4">
<a className="hover:text-[#EA580C] transition-colors" href="#"><svg className="font-sans w-[18px] h-[18px]" data-icon-replaced="true" data-icon-set="logos" data-logos="github-icon" height="18" icon="logos:github-octocat" strokeWidth="2" style={{color: 'rgb(163, 163, 163)', width: '18px', height: '18px'}} viewbox="0 0 256 250" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0m-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931m6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66m4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08m7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27m9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622m10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868m10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403" fill="#a3a3a3">
</path>
</svg></a>
<a className="hover:text-[#EA580C] transition-colors" href="#"><svg className="w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="logos" data-logos="linkedin-icon" height="16" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(234, 88, 12)'}} viewbox="0 0 256 256" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#a3a3a3">
</path>
</svg></a>
<a className="hover:text-[#EA580C] transition-colors" href="#"><svg className="w-[18px] h-[18px]" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="behance" height="18" strokeWidth="2" style={{width: '18px', height: '18px', color: 'rgb(163, 163, 163)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M16.969 16.927a2.56 2.56 0 0 0 1.901.677a2.5 2.5 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.1 5.1 0 0 1-1.9 2.896a5.3 5.3 0 0 1-3.091.88a5.8 5.8 0 0 1-2.284-.433a4.9 4.9 0 0 1-1.723-1.211a5.7 5.7 0 0 1-1.08-1.874a7 7 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.31 5.31 0 0 1 5.088-3.604a4.9 4.9 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187M6.947 4.084a8 8 0 0 1 1.928.198a4.3 4.3 0 0 1 1.49.638c.418.303.748.711.958 1.182c.241.579.357 1.203.341 1.83a3.5 3.5 0 0 1-.506 1.961a3.7 3.7 0 0 1-1.503 1.287a3.6 3.6 0 0 1 2.027 1.437c.464.747.697 1.615.67 2.494a4.6 4.6 0 0 1-.423 2.032a3.95 3.95 0 0 1-1.163 1.413a5.1 5.1 0 0 1-1.683.807a7 7 0 0 1-1.928.259H0V4.084zm-.235 12.9q.464.006.916-.099a2.2 2.2 0 0 0 .766-.332c.228-.158.411-.371.534-.619c.142-.317.208-.663.191-1.009a2.08 2.08 0 0 0-.642-1.715a2.62 2.62 0 0 0-1.696-.505h-3.54v4.279zm13.635-5.967a2.13 2.13 0 0 0-1.654-.619a2.34 2.34 0 0 0-1.163.259a2.5 2.5 0 0 0-.738.62a2.4 2.4 0 0 0-.396.792q-.111.36-.137.734h4.769a3.24 3.24 0 0 0-.679-1.785zm-13.813-.648a2.25 2.25 0 0 0 1.423-.433c.399-.355.607-.88.56-1.413a1.9 1.9 0 0 0-.178-.891a1.3 1.3 0 0 0-.495-.533a1.85 1.85 0 0 0-.711-.274a4 4 0 0 0-.835-.073H3.241v3.631h3.293zM21.62 5.122h-5.976v1.527h5.976z" fill="currentColor">
</path>
</svg></a>
</div>
</div>
<div className="border-r border-neutral-800 flex flex-col">
<div className="flex-1 hover:bg-neutral-900/40 bg-neutral-950 border-neutral-800 border-b pt-8 pr-8 pb-8 pl-8">
<h4 className="text-[11px] uppercase font-bold text-neutral-500 tracking-[0.2em] mb-6">THE WORK</h4>
<ul className="space-y-3">
<li className=""><a className="group flex items-center gap-1.5 hover:text-white transition-colors duration-300 text-neutral-400" href="#">
<span className="text-[13px] hover:text-white text-xs font-medium text-neutral-400 tracking-normal">UI/UX Projects</span>
<svg className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 w-[12px] h-[12px] translate-y-[0.5px]" data-icon-replaced="true" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" style={{width: '12px', height: '12px', color: 'rgb(234, 88, 12)'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline className="" points="7 7 17 7 17 17"></polyline>
</svg>
</a></li>
<a className="group flex items-center gap-1.5 hover:text-white transition-colors duration-300 text-neutral-400" href="#">
<span className="text-[13px] hover:text-white text-xs font-medium text-neutral-400 tracking-normal">Data-Science based Projects</span>
<svg className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 w-[12px] h-[12px] translate-y-[0.5px]" data-icon-replaced="true" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" style={{width: '12px', height: '12px', color: 'rgb(234, 88, 12)'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</a>
</ul>
</div>
<div className="flex-1 hover:bg-neutral-900/40 bg-neutral-950 border-neutral-800 border-b pt-8 pr-8 pb-8 pl-8">
<h4 className="text-[11px] uppercase font-bold text-neutral-500 tracking-[0.2em] mb-6">Community Operations</h4>
<ul className="space-y-3">
<li className=""><a className="group flex items-center gap-1.5 hover:text-white transition-colors duration-300 text-neutral-400" href="#">
<span className="text-[13px] hover:text-white text-xs font-medium text-neutral-400 tracking-normal">Discord Server Management</span>
<svg className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 w-[12px] h-[12px] translate-y-[0.5px]" data-icon-replaced="true" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" style={{width: '12px', height: '12px', color: 'rgb(234, 88, 12)'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</a></li>
</ul>
</div>
</div>
<div className="border-r border-neutral-800 flex flex-col">
<div className="flex-1 hover:bg-neutral-900/40 bg-neutral-950 border-neutral-800 border-b pt-8 pr-8 pb-8 pl-8">
<h4 className="text-[11px] uppercase font-bold text-neutral-500 tracking-[0.2em] mb-6">the portfolio</h4>
<ul className="space-y-3">
<li className=""><a className="group flex items-center gap-1.5 hover:text-white transition-colors duration-300 text-neutral-400" href="#">
<span className="text-[13px] hover:text-white text-xs font-medium text-neutral-400 tracking-normal">About Me</span>
<svg className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 w-[12px] h-[12px] translate-y-[0.5px]" data-icon-replaced="true" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" style={{width: '12px', height: '12px', color: 'rgb(234, 88, 12)'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</a></li>
<a className="group flex items-center gap-1.5 hover:text-white transition-colors duration-300 text-neutral-400" href="#">
<span className="text-[13px] hover:text-white text-xs font-medium text-neutral-400 tracking-normal">Tech Skills</span>
<svg className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 w-[12px] h-[12px] translate-y-[0.5px]" data-icon-replaced="true" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" style={{width: '12px', height: '12px', color: 'rgb(234, 88, 12)'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</a>
</ul>
</div>
<div className="flex-1 hover:bg-neutral-900/40 bg-neutral-950 border-neutral-800 border-b pt-8 pr-8 pb-8 pl-8">
<h4 className="text-[11px] uppercase font-bold text-neutral-500 tracking-[0.2em] mb-6">EXTRACURRICULAR ACTIVITIES
        </h4>
<ul className="space-y-3">
<li className=""><a className="group flex items-center gap-1.5 hover:text-white transition-colors duration-300 text-neutral-400" href="#">
<span className="text-[13px] hover:text-white text-xs font-medium text-neutral-400 tracking-normal">Virtual Game Photography</span>
<svg className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 w-[12px] h-[12px] translate-y-[0.5px]" data-icon-replaced="true" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" style={{width: '12px', height: '12px', color: 'rgb(234, 88, 12)'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</a></li>
<a className="group flex items-center gap-1.5 hover:text-white transition-colors duration-300 text-neutral-400" href="#">
<span className="text-[13px] hover:text-white text-xs font-medium text-neutral-400 tracking-normal">Lightroom Editing</span>
<svg className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 w-[12px] h-[12px] translate-y-[0.5px]" data-icon-replaced="true" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" style={{width: '12px', height: '12px', color: 'rgb(234, 88, 12)'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</a>
</ul>
</div>
</div>
<div className="flex flex-col bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-[#ea580c]/10 to-white/0 h-full border-neutral-800 border-l pt-10 pr-10 pb-10 pl-10 justify-between">
<div className="space-y-6">
<div className="flex gap-3 items-center">
<span className="w-1.5 h-1.5 bg-[#EA580C] animate-pulse rounded-full"></span>
<span className="text-[10px] font-bold text-[#EA580C] tracking-[0.3em] font-mono">// COMMUNICATION</span>
</div>
<div className="">
<h2 className="leading-[0.9] text-xl font-normal text-white tracking-tight font-inter mb-6">CONNECT WITH ME</h2>
<p className="leading-relaxed text-sm text-neutral-500">I’m currently looking for internships...</p>
</div>
<div className="flex group cursor-pointer hover:border-neutral-700 transition-colors bg-black/40 border-neutral-800 border rounded-md pt-2 pr-3 pb-2 pl-3 items-center justify-between" id="email-box">
<code className="text-[13px] text-neutral-400 font-mono">giriayush2003@gmail.com</code>
<iconify-icon className="group-hover:text-[#EA580C] transition-colors text-neutral-600" height="14" icon="solar:copy-linear" style={{color: 'rgb(234, 88, 12)'}} width="14">
</iconify-icon>
</div>
</div>
<div className="mt-4 mb-0 space-y-4">
<button className="hover:bg-[#E26900] flex transition-all duration-300 transform hover:-translate-y-1 active:scale-95 shadow-[#EA580C]/20 font-bold text-white bg-[#EA580C] w-full rounded-md pt-5 pr-6 pb-5 pl-6 shadow-xl items-center justify-between">
<span className="tracking-wide font-inter">CLICK TO CONNECT</span>
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</button>
<button className="hover:text-neutral-400 transition-colors text-[10px] uppercase text-sm text-[#ffffff]/50 tracking-[0.3em] font-mono text-center w-full pt-2 pb-2">will be redirected...</button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row text-[10px] text-neutral-500 bg-neutral-950/50 pt-6 pr-8 pb-6 pl-8 items-center justify-between">
<div className="flex gap-10 items-center">
<span className="tracking-widest">© 2026 CALCULUSION STUDIOS</span>
<div className="hidden md:flex gap-6 border-l border-neutral-800 pl-10">
<span className="flex items-center gap-1.5"><span className="w-1 h-1 bg-neutral-700 rounded-full"></span> BUILD BY AYUSH
        GIRI</span>
<span className="flex items-center gap-1.5"><span className="w-1 h-1 bg-neutral-700 rounded-full"></span> USING
        AURA.BUILD</span>
</div>
</div>
<div className="flex items-center gap-6 mt-4 md:mt-0">
<div className="flex items-center gap-2">
<span className="text-neutral-700">LOCATION:</span>
<span className="text-neutral-400">KOLKATA, WEST BENGAL</span>
</div>
<div className="h-4 w-[1px] bg-neutral-800"></div>
<div className="flex items-center gap-2">
<span className="">INDIA</span>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 group">

<div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none">
<div className="bg-neutral-800 text-neutral-200 text-xs font-medium px-3 py-1.5 rounded-md shadow-lg border border-neutral-700 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span> Ask my AI Twin
            </div>
</div>

<button className="w-14 h-14 rounded-full bg-neutral-100 text-neutral-900 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-all duration-300 border border-white/20 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black/10"></div>
<iconify-icon className="relative z-10" height="26" icon="solar:magic-stick-3-linear" width="26"></iconify-icon>
</button>
</div>

    </>
  );
}
