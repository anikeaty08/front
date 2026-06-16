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



      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

<div className="absolute inset-0 bg-dot-slate-300 opacity-[0.4]" style={{maskImage: 'linear-gradient(to bottom, white 0%, transparent 80%)'}}></div>


<div className="absolute top-[-10%] -left-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-[100px] animate-blob"></div>

<div className="absolute top-[20%] -right-20 w-96 h-96 bg-orange-400/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>

<div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-blue-400/20 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
</div>

<div className="fixed top-8 left-0 w-full z-50 flex justify-center px-4">
<nav className="glass-panel rounded-full px-2 py-2 max-w-5xl w-full flex items-center justify-between shadow-2xl shadow-slate-200/50">

<div className="hidden md:flex items-center gap-1 pl-4">
<a className="px-4 py-2 text-sm font-medium transition-colors text-slate-600 hover:text-slate-900" href="#about">
            About
          </a>
<a className="px-4 py-2 text-sm font-medium transition-colors text-slate-600 hover:text-slate-900" href="#features">
            Services
          </a>
<a className="px-4 py-2 text-sm font-medium transition-colors text-slate-600 hover:text-slate-900" href="#reviews">
            Reviews
          </a>
<a className="px-4 py-2 text-sm font-medium transition-colors text-slate-600 hover:text-slate-900" href="#portfolio">
            Portfolio
          </a>
</div>

<div className="md:hidden pl-4 text-slate-900">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</div>

<div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5">
<span className="brand-font text-2xl font-semibold tracking-tight uppercase text-slate-900">
            Infusiv
            
<span className="bg-clip-text bg-center text-transparent bg-gradient-to-r from-cyan-400 to-orange-400">
              *
            </span>
</span>
</div>

<div className="flex items-center gap-6 pr-2">
<div className="hidden lg:flex flex-col items-end leading-none">
<span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">
              System Status
            </span>
<span className="text-xs font-semibold flex items-center gap-1 text-emerald-400">
<span className="w-1.5 h-1.5 rounded-full animate-pulse bg-emerald-400"></span>
              Operational
            </span>
</div>
<a className="transition-colors hover:bg-slate-50 text-sm font-semibold text-slate-900 tracking-tight bg-white ring-slate-200 ring-1 rounded-full pt-2.5 pr-6 pb-2.5 pl-6 shadow-sm" href="#contact">
            Contact
          </a>
</div>
</nav>
</div>

<main className="md:pt-48 overflow-hidden min-h-screen flex flex-col z-10 w-full pt-40 pb-20 relative justify-center">

<section className="w-full max-w-[1400px] mr-auto ml-auto pr-4 pl-4 relative perspective-1000 mb-20">

<div className="flex justify-center mb-10 relative z-50">
<div className="px-5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-lg rotate-[-2deg] bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-cyan-900/50 border border-white/20">
            System Process v2.0
          </div>
</div>

<div className="relative z-50 text-center flex flex-col items-center justify-center select-none pointer-events-none">
<div className="leading-[0.85] mb-10">
<h1 className="text-[clamp(3.5rem,9vw,9rem)] font-semibold uppercase tracking-tighter text-glow-subtle flex flex-wrap justify-center gap-x-6 text-slate-900">
<span>Empowering</span>
<span className="text-slate-400">Your</span>
</h1>
<h1 className="text-[clamp(3.5rem,9vw,9rem)] font-semibold uppercase tracking-tighter text-glow-subtle text-slate-900">
              Business With
            </h1>
<div className="flex flex-wrap justify-center gap-x-4 md:gap-x-8">
<h1 className="text-[clamp(3.5rem,9vw,9rem)] font-semibold uppercase tracking-tighter text-slate-900">
                Tailored
              </h1>

<h1 className="text-[clamp(3.5rem,9vw,9rem)] font-semibold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r pb-2 from-cyan-400 via-sky-400 to-orange-400">
                Digital
              </h1>
</div>

<h1 className="text-[clamp(3.5rem,9vw,9rem)] font-semibold uppercase tracking-tighter text-slate-400">
              Solutions
            </h1>
</div>

<p className="pointer-events-auto text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12 px-4 text-slate-600">
            Transform scattered workflows into a unified digital ecosystem. We
            build intelligent systems that scale with your vision.
          </p>

<a className="inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl font-bold uppercase text-sm text-slate-900 tracking-tight bg-white pointer-events-auto ring-1 ring-slate-200 rounded-full pt-4 pr-8 pb-4 pl-8 shadow-sm" href="#contact">
            Get your DIGITAL IV
            <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>


<div className="md:-left-[5%] xl:left-[2%] md:w-64 animate-float hover:z-50 hover:scale-105 transition-transform duration-500 ease-out hidden sm:block w-48 z-10 pointer-events-auto absolute top-[15%] left-[-5%]">
<div className="relative rounded-xl p-1.5 shadow-2xl border -rotate-6 bg-white border-slate-200">

<div className="bg-[#0F1115] rounded-lg overflow-hidden border h-full relative border-slate-200">

<div className="flex gap-1.5 bg-white border-b border-slate-200 h-6 px-2 items-center">
<div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
<div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
</div>

<div className="p-3 h-full bg-white">
<div className="flex items-center justify-between mb-3">
<div className="h-2 w-12 rounded bg-slate-200"></div>
<div className="h-4 w-4 rounded bg-cyan-500/10 flex items-center justify-center text-cyan-600">
<svg className="lucide lucide-activity w-2.5 h-2.5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
</div>
<div className="space-y-2">
<div className="flex gap-2 items-center p-1.5 rounded border bg-slate-50 border-slate-100">
<div className="w-6 h-6 rounded bg-orange-500/10 flex items-center justify-center">
<svg className="lucide lucide-users w-3 h-3 text-orange-600" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="flex-1">
<div className="h-1.5 w-16 rounded mb-1 bg-slate-300"></div>
<div className="h-1 w-8 rounded bg-slate-200"></div>
</div>
</div>

<div className="mt-2 h-16 flex items-end gap-1 px-1">
<div className="w-full bg-cyan-500/20 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-orange-500/40 rounded-t-sm h-[70%]"></div>
<div className="w-full bg-cyan-500/30 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-gradient-to-t from-orange-500/60 to-cyan-500/60 rounded-t-sm h-[85%]"></div>
<div className="w-full bg-cyan-500/20 rounded-t-sm h-[60%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="md:right-[-5%] xl:right-[0%] md:w-80 z-10 animate-float-delayed pointer-events-auto hover:z-50 hover:scale-105 transition-transform duration-500 ease-out hidden sm:block w-64 absolute right-[-5%] bottom-[0%]">
<div className="relative bg-white rounded-xl border shadow-2xl rotate-6 transform-style-3d border-slate-200">

<div className="aspect-[16/10] bg-slate-50 rounded-t-lg p-2 relative overflow-hidden flex flex-col">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/5 to-transparent pointer-events-none"></div>
<div className="flex items-center gap-2 mb-2 border-b pb-2 border-slate-200/60">
<span className="text-[8px] text-slate-400 font-mono">
                  dashboard.infusiv.io
                </span>
</div>
<div className="flex-1 flex gap-2">
<div className="flex flex-col bg-white w-1/4 h-full border-slate-200/60 border rounded pt-1 pr-1 pb-1 pl-1 gap-x-1 gap-y-1">
<div className="w-full h-1 rounded bg-slate-100"></div>
<div className="w-2/3 h-1 rounded bg-slate-100"></div>
<div className="mt-auto w-full h-4 bg-orange-500/20 rounded"></div>
</div>
<div className="flex-1 grid grid-cols-2 gap-2">
<div className="rounded border p-1 bg-white border-slate-200/60">
<div className="w-4 h-4 rounded-full bg-cyan-500/20 mb-1"></div>
<div className="w-full h-1 rounded bg-slate-100"></div>
</div>
<div className="rounded border p-1 bg-white border-slate-200/60">
<div className="w-4 h-4 rounded-full bg-orange-500/20 mb-1"></div>
<div className="w-full h-1 rounded bg-slate-100"></div>
</div>
<div className="col-span-2 rounded border h-full relative overflow-hidden bg-white border-slate-200/60">
<svg className="absolute bottom-0 left-0 w-full h-full text-cyan-500/30" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0 40 L0 30 C 20 20, 40 35, 60 15 C 80 5, 100 20, 100 20 L 100 40 Z" fill="currentColor"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="h-3 bg-slate-100 rounded-b-lg border-t relative border-slate-200">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-b-sm bg-slate-200"></div>
</div>
</div>
</div>
</section>

<section className="z-30 text-slate-500 bg-white/60 w-full border-slate-200 border-t pt-8 pb-8 absolute bottom-0 backdrop-blur-md">
<div className="max-w-[1200px] mx-auto px-6 overflow-hidden">
<div className="flex justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<svg className="h-6 w-auto" fill="currentColor" viewbox="0 0 100 30">
<path d="M10,15 L20,5 L30,15 L20,25 Z M40,5 H50 V25 H40 Z M60,5 H80 V10 H65 V12 H75 V17 H65 V25 H60 Z"></path>
</svg>
<svg className="h-5 w-auto" fill="currentColor" viewbox="0 0 100 30">
<circle cx="15" cy="15" r="10"></circle>
<rect height="20" width="20" x="35" y="5"></rect>
<rect height="20" width="20" x="65" y="5"></rect>
</svg>
<svg className="h-6 w-auto" fill="currentColor" viewbox="0 0 100 30">
<path d="M10,25 L15,5 L20,25 M30,5 H50 M40,5 V25 M60,5 H80 L70,25 L60,5" stroke="currentColor" strokeWidth="3"></path>
</svg>
<svg className="h-5 w-auto" fill="currentColor" viewbox="0 0 100 30">
<rect height="20" rx="5" width="20" x="10" y="5"></rect>
<circle cx="50" cy="15" r="10"></circle>
<rect height="10" width="20" x="70" y="10"></rect>
</svg>
<svg className="h-6 w-auto" fill="currentColor" viewbox="0 0 100 30">
<path d="M10,15 L30,15 M20,5 L20,25 M50,5 L70,25 M70,5 L50,25" stroke="currentColor" strokeWidth="2"></path>
</svg>
</div>
</div>
</section>
</main>

<section className="py-32 border-t relative z-20 bg-white border-slate-200" id="features">
<div className="max-w-[1200px] mr-auto ml-auto pr-6 pl-6">
<div className="mb-24 flex flex-col items-center text-center">
<span className="text-cyan-500 font-bold tracking-widest uppercase text-xs mb-4">
            Features
          </span>
<h2 className="text-5xl md:text-7xl font-semibold uppercase tracking-tight mb-6 brand-font text-slate-900">
            Designed for
            <br/>
<span className="text-slate-600">Flow State.</span>
</h2>
<p className="text-lg max-w-2xl leading-relaxed font-light text-slate-400">
            Infusiv plugs into the business you already have and carefully
            infuses it with AI, automations, and clean digital workflows.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative h-[420px] rounded-[2rem] border border-slate-200 bg-slate-50 overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="z-10 pt-8 pr-8 pb-8 pl-8 relative">
<div className="w-12 h-12 rounded-xl bg-cyan-100/50 flex items-center justify-center text-cyan-600 mb-4 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>
</div>
<h3 className="text-2xl font-semibold mb-2 brand-font uppercase text-slate-900 tracking-tight">
                Website Development
              </h3>
<p className="text-slate-500 font-medium leading-relaxed max-w-sm text-sm mb-5">
                Custom-built, high-performance websites designed to convert and elevate your brand online.
              </p>
</div>

<div className="absolute bottom-0 left-8 right-8 top-52 bg-white rounded-t-xl border border-slate-200 shadow-2xl group-hover:translate-y-[-10px] transition-transform duration-500">
<div className="h-8 border-b border-slate-100 flex items-center gap-1.5 px-3">
<div className="w-2 h-2 rounded-full bg-red-400/80"></div>
<div className="w-2 h-2 rounded-full bg-amber-400/80"></div>
<div className="w-2 h-2 rounded-full bg-emerald-400/80"></div>
</div>
<div className="p-4 grid grid-cols-3 gap-3 opacity-60">
<div className="col-span-3 h-24 bg-slate-100 rounded mb-2"></div>
<div className="h-20 bg-slate-100 rounded"></div>
<div className="h-20 bg-slate-100 rounded"></div>
<div className="h-20 bg-slate-100 rounded"></div>
</div>
</div>
</div>

<div className="group relative h-[420px] rounded-[2rem] border border-slate-200 bg-slate-50 overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-8 relative z-10">
<div className="w-12 h-12 rounded-xl bg-orange-100/50 flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="text-2xl font-semibold mb-3 brand-font uppercase text-slate-900 tracking-tight">
                Web &amp; Mobile App Development
              </h3>
<p className="text-slate-500 font-medium leading-relaxed max-w-sm text-sm">
                Purpose-built digital products engineered for scale, speed, and a seamless user experience.
              </p>
</div>

<div className="absolute bottom-[-40px] right-[-20px] w-48 h-64 bg-white border border-slate-200 rounded-[2rem] shadow-2xl rotate-[-12deg] group-hover:rotate-[-8deg] transition-transform duration-500 p-2">
<div className="w-full h-full bg-slate-50 rounded-[1.5rem] overflow-hidden relative">
<div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-b-xl z-20"></div>
<div className="p-4 pt-10 space-y-2">
<div className="w-full h-16 bg-orange-500/10 rounded-xl"></div>
<div className="flex gap-2">
<div className="w-1/2 h-20 bg-slate-200 rounded-xl"></div>
<div className="w-1/2 h-20 bg-slate-200 rounded-xl"></div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative h-[420px] rounded-[2rem] border border-slate-200 bg-slate-50 overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-8 relative z-10">
<div className="w-12 h-12 rounded-xl bg-purple-100/50 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<h3 className="text-2xl font-semibold mb-3 brand-font uppercase text-slate-900 tracking-tight">
                AI Agents &amp; Automation
              </h3>
<p className="text-slate-500 font-medium leading-relaxed max-w-sm text-sm">
                Intelligent workflows and automated systems that eliminate repetitive tasks.
              </p>
</div>

<div className="absolute bottom-8 left-8 right-8 flex flex-col gap-3">
<div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3 translate-x-2 opacity-60 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
<div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
<svg className="lucide lucide-sparkles" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
</div>
<div className="text-xs font-medium text-slate-700">Analyzing Data Pattern...</div>
</div>
<div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3 translate-x-6 opacity-40 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
<div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
<svg className="lucide lucide-check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="text-xs font-medium text-slate-700">Task Automated</div>
</div>
</div>
</div>

<div className="group relative h-[420px] rounded-[2rem] border border-slate-200 bg-slate-50 overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-tl from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-8 relative z-10">
<div className="w-12 h-12 rounded-xl bg-emerald-100/50 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
</div>
<h3 className="text-2xl font-semibold mb-3 brand-font uppercase text-slate-900 tracking-tight">
                Growth Systems
              </h3>
<p className="text-slate-500 font-medium leading-relaxed max-w-sm text-sm">
                Data-driven campaigns and streamlined funnels built to reliably turn traffic into customers.
              </p>
</div>

<div className="absolute bottom-0 right-8 left-8 h-32 flex items-end justify-between gap-2 px-4 pb-0">
<div className="w-full bg-emerald-500/20 h-[30%] rounded-t-sm group-hover:h-[40%] transition-all duration-500"></div>
<div className="w-full bg-emerald-500/30 h-[50%] rounded-t-sm group-hover:h-[65%] transition-all duration-500 delay-75"></div>
<div className="w-full bg-emerald-500/40 h-[40%] rounded-t-sm group-hover:h-[55%] transition-all duration-500 delay-100"></div>
<div className="w-full bg-emerald-500/60 h-[70%] rounded-t-sm group-hover:h-[85%] transition-all duration-500 delay-150 relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">+145%</div>
</div>
<div className="w-full bg-emerald-500/80 h-[90%] rounded-t-sm group-hover:h-[95%] transition-all duration-500 delay-200"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-20 bg-slate-50 border-t border-slate-200" id="reviews">
<div className="max-w-[1200px] mx-auto px-6">
<div className="mb-16 text-center md:text-left">
<span className="text-cyan-500 font-bold tracking-widest uppercase text-xs mb-4 block">
            Client Stories
          </span>
<h2 className="text-4xl md:text-5xl font-semibold uppercase tracking-tight brand-font text-slate-900">
            Trusted by
            <span className="text-slate-400">Industry Leaders</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
<div className="">
<div className="flex gap-1 text-yellow-400 mb-6">

<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-slate-700 leading-relaxed mb-6 font-medium">
                "Infusiv completely overhauled our legacy backend. The transition was seamless, and our system throughput increased by 300% in the first week."
              </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 font-bold text-xs border border-cyan-200">
                JD
              </div>
<div>
<p className="text-sm font-bold text-slate-900">James Driscoll</p>
<p className="text-xs text-slate-500">CTO, FinTech Corp</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
<div className="">
<div className="flex gap-1 text-yellow-400 mb-6">

<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-slate-700 leading-relaxed mb-6 font-medium">
                "We needed a mobile app that felt native but scaled globally. The team delivered ahead of schedule and the UX is absolutely world-class."
              </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 font-bold text-xs border border-orange-200">
                MK
              </div>
<div className="">
<p className="text-sm font-bold text-slate-900">Maya K.</p>
<p className="text-xs text-slate-500">Product Lead, Streamline</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-slate-900 border border-slate-700 shadow-xl flex flex-col justify-between group overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 to-transparent"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white border border-white/20">
<svg className="lucide lucide-handshake" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-1.42-1.42l4.82-4.82a3 3 0 0 1 4.24 0l2.12 2.12a3 3 0 0 1 0 4.24l-8 8a1 1 0 1 1-1.42-1.42l4.82-4.82a3 3 0 0 1 4.24 0l2.12 2.12a3 3 0 0 1 0 4.24"></path><path d="m7 17-.5-1"></path><path d="m6 8-1 1"></path></svg>
</div>
<h3 className="text-xl font-bold text-white mb-2">Referrals &amp; Partners</h3>
<p className="text-slate-300 text-sm leading-relaxed mb-6">
                 Know a business that needs an upgrade? Join our partner network and grow with us. We value long-term relationships.
               </p>
</div>
<a className="relative z-10 flex items-center gap-2 text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors" href="#contact">
               Become a Partner
               <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-20 border-t bg-white border-slate-200" id="about">
<div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2 relative text-slate-900">
<div className="aspect-square rounded-[2rem] overflow-hidden relative border border-slate-200 bg-slate-50">

<div className="absolute inset-0 bg-gradient-to-tr to-transparent z-10 from-cyan-900/10"></div>
<div className="w-full h-full flex items-center justify-center">
<div className="w-2/3 h-2/3 rounded-full border border-dashed animate-[spin_30s_linear_infinite] border-slate-300"></div>
<div className="absolute w-1/3 h-1/3 rounded-full border animate-[spin_20s_linear_infinite_reverse] border-slate-400"></div>
</div>
</div>

<div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-amber-500 p-6 rounded-2xl shadow-xl z-20 ring-4 ring-white">
<p className="font-bold text-3xl brand-font text-white">24/7</p>
<p className="text-[10px] uppercase tracking-wider font-medium text-white/90">
              System Active
            </p>
</div>
</div>
<div className="w-full md:w-1/2 text-slate-900">
<span className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-4 block">
            About Us
          </span>
<h2 className="text-4xl md:text-5xl font-semibold uppercase tracking-tight mb-6 brand-font text-slate-900">
            Bridging Human Vision
            <span className="text-slate-600">With Digital Power</span>
</h2>
<p className="text-lg leading-relaxed mb-8 text-slate-500 font-light">
            Infusiv isn't just a development agency. We are systems architects
            dedicated to the philosophy that technology should be an invisible,
            powerful force that amplifies human potential.
          </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3 text-slate-900">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-cyan-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-medium text-sm text-slate-600">
                Strategic Digital Planning
              </span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-cyan-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-medium text-sm text-slate-600">
                Enterprise-Grade Security
              </span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-cyan-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-medium text-sm text-slate-600">
                Scalable Cloud Infrastructure
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-20 border-t bg-slate-50 border-slate-200 overflow-hidden" id="portfolio">

<div className="pointer-events-none select-none absolute top-1/2 -translate-y-1/2 left-0 w-full flex justify-between px-4 xl:px-20 overflow-hidden z-0">
<span className="text-[12vw] leading-none font-bold font-oswald text-slate-200 tracking-tighter opacity-40 hidden md:block">RECENT</span>
<span className="text-[12vw] leading-none font-bold font-oswald text-slate-200 tracking-tighter opacity-40 hidden md:block">WORKS</span>
</div>
<div className="max-w-[1600px] mx-auto relative z-10 w-full">

<div className="flex flex-col items-center mb-16 text-center px-6">
<span className="text-cyan-500 font-bold tracking-widest uppercase text-xs mb-4">
            Our Portfolio
          </span>
<h2 className="text-4xl md:text-5xl font-semibold uppercase tracking-tight brand-font text-slate-900">
            Selected <span className="text-slate-400">Projects</span>
</h2>
</div>

<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 px-6 md:px-20 scrollbar-hide">

<div className="group relative w-full md:w-[700px] shrink-0 snap-center aspect-[16/10] rounded-[32px] bg-[#0A0A0A] border border-white/10 overflow-hidden shadow-2xl">

<div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-black z-0">

<div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-cyan-500/10 blur-[100px] rounded-full"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[80px] rounded-full"></div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl flex flex-col shadow-2xl group-hover:scale-[1.02] transition-transform duration-700">

<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
</div>

<div className="flex-1 p-6 relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="w-1/3 h-8 bg-white/5 rounded-lg mb-4"></div>
<div className="flex gap-4 mb-4">
<div className="w-1/2 h-32 bg-white/5 rounded-lg"></div>
<div className="w-1/2 h-32 bg-white/5 rounded-lg"></div>
</div>
<div className="w-full h-24 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg"></div>
</div>
</div>
</div>

<div className="absolute inset-0 z-10 flex flex-col justify-between p-8 md:p-12">
<div className="flex justify-between items-start text-xs font-medium tracking-widest text-slate-400 uppercase">
<span>01 / SaaS Platform</span>
<span>2024</span>
</div>
<div>
<div className="flex items-center gap-4 mb-6">
<h3 className="text-6xl md:text-7xl font-oswald font-semibold text-white tracking-tight">STEALTH<span className="text-cyan-400">*</span></h3>
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/25">
<svg className="lucide lucide-lock w-8 h-8 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
</div>
<div className="flex flex-wrap items-center gap-3 mb-4">
<span className="px-4 py-1.5 bg-white text-slate-900 rounded-full text-xs font-bold uppercase tracking-wide">Coming Soon</span>
<span className="px-4 py-1.5 bg-white/10 border border-white/10 text-white backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wide">Web Design</span>
<span className="px-4 py-1.5 bg-white/10 border border-white/10 text-white backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wide">UI/UX</span>
</div>
<p className="text-slate-400 text-sm md:text-base max-w-md font-light">High-performance dashboard for next-gen analytics, built for scale and speed.</p>
</div>
</div>
</div>

<div className="group relative w-full md:w-[700px] shrink-0 snap-center aspect-[16/10] rounded-[32px] bg-[#0A0A0A] border border-white/10 overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-black z-0">
<div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-500/10 blur-[100px] rounded-full"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-600/10 blur-[80px] rounded-full"></div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl flex flex-col shadow-2xl group-hover:scale-[1.02] transition-transform duration-700">
<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-slate-600/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-600/50"></div>
</div>
<div className="flex-1 p-6 flex flex-col items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
<div className="w-32 h-32 rounded-full border border-purple-500/20 flex items-center justify-center">
<div className="w-20 h-20 rounded-full bg-purple-500/20"></div>
</div>
</div>
</div>
</div>
<div className="absolute inset-0 z-10 flex flex-col justify-between p-8 md:p-12">
<div className="flex justify-between items-start text-xs font-medium tracking-widest text-slate-400 uppercase">
<span>02 / AI Interface</span>
<span>2024</span>
</div>
<div>
<div className="flex items-center gap-4 mb-6">
<h3 className="text-6xl md:text-7xl font-oswald font-semibold text-white tracking-tight">LUMINA<span className="text-purple-400">*</span></h3>
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/25">
<svg className="lucide lucide-zap w-8 h-8 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
</div>
<div className="flex flex-wrap items-center gap-3 mb-4">
<span className="px-4 py-1.5 bg-white text-slate-900 rounded-full text-xs font-bold uppercase tracking-wide">Live Demo</span>
<span className="px-4 py-1.5 bg-white/10 border border-white/10 text-white backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wide">Gen AI</span>
</div>
<p className="text-slate-400 text-sm md:text-base max-w-md font-light">Next-generation conversational interface for enterprise data management.</p>
</div>
</div>
</div>

<div className="group relative w-full md:w-[700px] shrink-0 snap-center aspect-[16/10] rounded-[32px] bg-[#0A0A0A] border border-white/10 overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-black z-0">
<div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-emerald-500/10 blur-[100px] rounded-full"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-teal-600/10 blur-[80px] rounded-full"></div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl flex flex-col shadow-2xl group-hover:scale-[1.02] transition-transform duration-700">
<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-slate-600/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-600/50"></div>
</div>
<div className="flex-1 p-6 relative">
<div className="w-full h-full flex items-end gap-2">
<div className="w-full bg-emerald-500/10 h-[40%] rounded-t"></div>
<div className="w-full bg-emerald-500/20 h-[70%] rounded-t"></div>
<div className="w-full bg-emerald-500/30 h-[50%] rounded-t"></div>
<div className="w-full bg-emerald-500/40 h-[80%] rounded-t"></div>
</div>
</div>
</div>
</div>
<div className="absolute inset-0 z-10 flex flex-col justify-between p-8 md:p-12">
<div className="flex justify-between items-start text-xs font-medium tracking-widest text-slate-400 uppercase">
<span>03 / Finance</span>
<span>2024</span>
</div>
<div>
<div className="flex items-center gap-4 mb-6">
<h3 className="text-6xl md:text-7xl font-oswald font-semibold text-white tracking-tight">APEX<span className="text-emerald-400">*</span></h3>
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
<svg className="lucide lucide-activity w-8 h-8 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
</div>
<div className="flex flex-wrap items-center gap-3 mb-4">
<span className="px-4 py-1.5 bg-white text-slate-900 rounded-full text-xs font-bold uppercase tracking-wide">In Development</span>
<span className="px-4 py-1.5 bg-white/10 border border-white/10 text-white backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wide">FinTech</span>
</div>
<p className="text-slate-400 text-sm md:text-base max-w-md font-light">Real-time financial modeling tool for investment professionals.</p>
</div>
</div>
</div>

<div className="group relative w-full md:w-[700px] shrink-0 snap-center aspect-[16/10] rounded-[32px] bg-[#0A0A0A] border border-white/10 overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-black z-0">
<div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-rose-500/10 blur-[100px] rounded-full"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-600/10 blur-[80px] rounded-full"></div>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl flex flex-col shadow-2xl group-hover:scale-[1.02] transition-transform duration-700">
<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-slate-600/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-600/50"></div>
</div>
<div className="flex-1 p-6 flex flex-col justify-center gap-3">
<div className="w-full h-4 bg-rose-500/10 rounded-full"></div>
<div className="w-3/4 h-4 bg-rose-500/10 rounded-full"></div>
<div className="w-1/2 h-4 bg-rose-500/10 rounded-full"></div>
</div>
</div>
</div>
<div className="absolute inset-0 z-10 flex flex-col justify-between p-8 md:p-12">
<div className="flex justify-between items-start text-xs font-medium tracking-widest text-slate-400 uppercase">
<span>04 / Health</span>
<span>2024</span>
</div>
<div>
<div className="flex items-center gap-4 mb-6">
<h3 className="text-6xl md:text-7xl font-oswald font-semibold text-white tracking-tight">PULSE<span className="text-rose-400">*</span></h3>
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-400 to-orange-600 flex items-center justify-center shadow-lg shadow-rose-500/25">
<svg className="lucide lucide-heart-pulse w-8 h-8 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg>
</div>
</div>
<div className="flex flex-wrap items-center gap-3 mb-4">
<span className="px-4 py-1.5 bg-white text-slate-900 rounded-full text-xs font-bold uppercase tracking-wide">Launched</span>
<span className="px-4 py-1.5 bg-white/10 border border-white/10 text-white backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wide">App</span>
</div>
<p className="text-slate-400 text-sm md:text-base max-w-md font-light">Patient monitoring system connecting providers with real-time vitals.</p>
</div>
</div>
</div>

<div className="group relative w-full md:w-[700px] shrink-0 snap-center aspect-[16/10] rounded-[32px] bg-[#0A0A0A] border border-white/10 overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-black z-0">
<div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-amber-500/10 blur-[100px] rounded-full"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-600/10 blur-[80px] rounded-full"></div>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl flex flex-col shadow-2xl group-hover:scale-[1.02] transition-transform duration-700">
<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-slate-600/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-600/50"></div>
</div>
<div className="flex-1 p-6 grid grid-cols-2 gap-4">
<div className="bg-amber-500/10 rounded-lg"></div>
<div className="bg-amber-500/10 rounded-lg"></div>
<div className="bg-amber-500/10 rounded-lg"></div>
<div className="bg-amber-500/10 rounded-lg"></div>
</div>
</div>
</div>
<div className="absolute inset-0 z-10 flex flex-col justify-between p-8 md:p-12">
<div className="flex justify-between items-start text-xs font-medium tracking-widest text-slate-400 uppercase">
<span>05 / E-Commerce</span>
<span>2024</span>
</div>
<div>
<div className="flex items-center gap-4 mb-6">
<h3 className="text-6xl md:text-7xl font-oswald font-semibold text-white tracking-tight">VELVET<span className="text-amber-400">*</span></h3>
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/25">
<svg className="lucide lucide-shopping-bag w-8 h-8 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
</div>
</div>
<div className="flex flex-wrap items-center gap-3 mb-4">
<span className="px-4 py-1.5 bg-white text-slate-900 rounded-full text-xs font-bold uppercase tracking-wide">Case Study</span>
<span className="px-4 py-1.5 bg-white/10 border border-white/10 text-white backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wide">Retail</span>
</div>
<p className="text-slate-400 text-sm md:text-base max-w-md font-light">Luxury retail platform with immersive 3D product visualization.</p>
</div>
</div>
</div>
</div>

<div className="flex justify-center items-center gap-2 mt-4 opacity-50">
<div className="text-xs font-medium text-slate-400 uppercase tracking-widest">Swipe</div>
<svg className="lucide lucide-arrow-right w-4 h-4 text-slate-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</section>

<section className="py-32 relative z-20 border-t bg-white border-slate-200" id="contact">
<div className="max-w-4xl mx-auto px-6 text-center">
<span className="text-cyan-500 font-bold tracking-widest uppercase text-xs mb-4 block">
          Get In Touch
        </span>
<h2 className="md:text-7xl uppercase brand-font text-5xl font-semibold text-slate-900 tracking-tight mb-8">
            Ready for your 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-orange-500">Digital iv</span>?
        </h2>
<p className="text-lg mb-12 max-w-xl mx-auto font-light text-slate-400">
          Let's discuss how we can streamline your digital operations and
          prepare your business for the future.
        </p>
<form className="max-w-md mx-auto space-y-4 text-left relative z-10">
<div className="">
<label className="sr-only" htmlFor="email">Email Address</label>
<input className="w-full border rounded-xl px-6 py-4 focus:outline-none focus:border-cyan-500 transition-colors bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400" id="email" placeholder="enter@your.email" type="email"/>
</div>
<div>
<label className="sr-only" htmlFor="message">Message</label>
<textarea className="w-full border rounded-xl px-6 py-4 focus:outline-none focus:border-cyan-500 transition-colors resize-none bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400" id="message" placeholder="Tell us about your project..." rows="4"></textarea>
</div>

<button className="w-full bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 font-semibold uppercase tracking-tight rounded-xl px-6 py-4 transition-all shadow-lg flex items-center justify-center gap-2 group from-cyan-600 to-blue-600 text-white shadow-cyan-900/30" type="submit">
            Send Request
            <svg className="lucide lucide-send w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</form>
<div className="mt-16 flex justify-center gap-8 text-slate-600">
<a className="transition-colors hover:text-slate-900" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="transition-colors hover:text-slate-900" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="transition-colors hover:text-slate-900" href="#">
<svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>
</section>

<footer className="border-t py-20 bg-slate-50 border-slate-200">
<div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
<div>
<a className="flex items-center gap-2 mb-6" href="#">
<span className="brand-font text-2xl font-semibold tracking-tight uppercase text-slate-900">
              Infusiv
              <span className="text-orange-500">*</span>
</span>
</a>
<p className="text-slate-500 text-sm max-w-xs">
            Tailor-made <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-orange-500 font-bold">digital IV</span>, gently infused into real-world
            businesses.
          </p>
</div>
<div className="flex gap-12 text-sm">
<div>
<h4 className="font-bold mb-4 uppercase text-xs tracking-wider text-slate-900">
              Platform
            </h4>
<ul className="space-y-3 text-slate-500">
<li>
<a className="transition-colors hover:text-cyan-400" href="#">
                  Features
                </a>
</li>
<li>
<a className="transition-colors hover:text-cyan-400" href="#">
                  Integrations
                </a>
</li>
<li>
<a className="transition-colors hover:text-cyan-400" href="#">
                  Pricing
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4 uppercase text-xs tracking-wider text-slate-900">
              Company
            </h4>
<ul className="space-y-3 text-slate-500">
<li>
<a className="transition-colors hover:text-cyan-400" href="#">
                  About
                </a>
</li>
<li>
<a className="transition-colors hover:text-cyan-400" href="#">
                  Blog
                </a>
</li>
<li>
<a className="transition-colors hover:text-cyan-400" href="#">
                  Contact
                </a>
</li>
</ul>
</div>
</div>
</div>
<div className="max-w-[1200px] mx-auto px-6 mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 border-slate-200">
<div className="text-xs text-slate-600">© 2024 Infusiv Systems Inc.</div>
<div className="flex gap-6 text-xs text-slate-600">
<a className="transition-colors hover:text-slate-900" href="#">Privacy</a>
<a className="transition-colors hover:text-slate-900" href="#">Terms</a>
</div>
</div>
</footer>


    </>
  );
}
