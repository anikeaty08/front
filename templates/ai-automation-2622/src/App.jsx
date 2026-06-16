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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons({
          attrs: {
              'stroke-width': 1.5
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-bg"></div>

<nav className="fixed top-0 w-full z-50 bg-[#050A18]/80 backdrop-blur-xl border-b border-[#1E2D4A]/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00B4D8] to-[#38BDF8] flex items-center justify-center shadow-[0_0_15px_rgba(0,180,216,0.3)]">
<i className="w-5 h-5 text-[#050A18]" data-lucide="cpu"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-white">
            Pimento
          </span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-base font-medium text-[#94A3B8] hover:text-white transition-colors" href="#services">
            Services
          </a>
<a className="text-base font-medium text-[#94A3B8] hover:text-white transition-colors" href="#approach">
            Approach
          </a>
<a className="text-base font-medium text-[#94A3B8] hover:text-white transition-colors" href="#results">
            Results
          </a>
</div>
<div className="hidden md:block">
<a className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-[#050A18] text-base font-medium hover:bg-[#F1F5F9] transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]" href="#contact">
            Umów konsultację
          </a>
</div>
<button className="md:hidden text-[#94A3B8] hover:text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative min-h-[100svh] flex items-center pt-24 pb-12 z-10">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGg0MHYxbS00MC0xdjQwaDFNMCAwaDF2NDAiIHN0cm9rZT0icmdiYSgzMCwgNDUsIDc0LCAwLjE1KSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIi8+Cjwvc3ZnPg==')] opacity-40 mix-blend-screen pointer-events-none z-0"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="flex flex-col items-start pt-12 lg:pt-0">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1E2D4A] bg-[#0F1A2E]/50 text-xs font-medium text-[#00B4D8] tracking-widest uppercase mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-[#00B4D8] animate-pulse"></span>
            System Operational
          </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-6 text-white">
            Architect your growth with
            <br/>
<span className="font-serif-italic text-transparent bg-clip-text bg-gradient-to-r from-white to-[#94A3B8]">
              intelligent automation.
            </span>
</h1>
<p className="text-lg md:text-xl text-[#94A3B8] font-normal leading-relaxed mb-10 max-w-lg">
            We design and implement secure RPA/BPA solutions and AI
            transformations. Scale operations and eliminate inefficiencies with
            enterprise-grade architecture.
          </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#38BDF8] text-[#050A18] text-lg font-medium hover:opacity-90 transition-opacity shadow-[0_0_30px_rgba(0,180,216,0.2)] group" href="#contact">
              Initialize Protocol
            </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#0F1A2E]/80 border border-[#1E2D4A] text-white text-lg font-medium hover:bg-[#1E2D4A]/50 transition-colors backdrop-blur-sm group" href="#services">
              Explore Systems
              <i className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-10 flex items-center gap-4 text-sm text-[#94A3B8] font-medium border-t border-[#1E2D4A]/50 pt-6 w-full max-w-md">
<i className="w-5 h-5 text-[#00B4D8]" data-lucide="shield-check"></i>
            Zero-latency implementation. Defi native security.
          </div>
</div>

<div className="hidden lg:flex justify-center items-center relative h-[600px] perspective-1000">

<div className="absolute w-64 h-64 bg-[#00B4D8]/20 blur-[80px] rounded-full z-0 animate-pulse"></div>

<div className="relative w-full h-full flex items-center justify-center z-10">

<div className="absolute w-32 h-32 rounded-3xl bg-[#0F1A2E]/80 border border-[#1E2D4A] backdrop-blur-md flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.5)] z-20">
<div className="w-16 h-16 rounded-full border border-[#00B4D8]/30 flex items-center justify-center relative">
<div className="absolute inset-0 rounded-full border border-[#00B4D8] animate-ping opacity-20"></div>
<i className="w-8 h-8 text-[#00B4D8]" data-lucide="brain-circuit"></i>
</div>
</div>


<div className="absolute top-20 left-10 w-48 p-4 rounded-2xl bg-[#050A18]/90 border border-[#1E2D4A] backdrop-blur-sm z-10">
<div className="flex items-center justify-between mb-3">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs font-medium text-[#94A3B8] uppercase tracking-wider">
                  Input Data
                </span>
</div>
<div className="space-y-2">
<div className="h-1.5 w-full bg-[#1E2D4A] rounded-full overflow-hidden">
<div className="h-full bg-[#00B4D8] w-3/4"></div>
</div>
<div className="h-1.5 w-full bg-[#1E2D4A] rounded-full overflow-hidden">
<div className="h-full bg-[#38BDF8] w-1/2"></div>
</div>
</div>
</div>

<svg className="absolute top-36 left-32 w-40 h-32 -z-10" overflow="visible">
<path className="animate-[dash_20s_linear_infinite]" d="M 0 0 C 40 40, 80 80, 120 120" fill="none" stroke="#1E2D4A" stroke-dasharray="4 4" strokeWidth="1.5"></path>
</svg>

<div className="absolute bottom-24 right-4 w-56 p-4 rounded-2xl bg-[#0F1A2E]/90 border border-[#1E2D4A] backdrop-blur-sm z-30 shadow-2xl">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-lg bg-[#1E2D4A] flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="activity"></i>
</div>
<div>
<div className="text-sm font-medium text-white">
                    Execution Status
                  </div>
<div className="text-xs text-[#00B4D8]">Optimal Variance</div>
</div>
</div>
</div>

<svg className="absolute bottom-40 right-48 w-32 h-32 -z-10" overflow="visible">
<path d="M 0 100 C 40 60, 80 40, 100 0" fill="none" opacity="0.5" stroke="#00B4D8" strokeWidth="1.5"></path>
<circle cx="100" cy="0" fill="#00B4D8" r="3"></circle>
</svg>

<div className="absolute w-[400px] h-[400px] rounded-full border border-[#1E2D4A]/40 z-0"></div>
<div className="absolute w-[550px] h-[550px] rounded-full border border-[#1E2D4A]/20 z-0 border-dashed"></div>
</div>
</div>
</div>
</section>

<section className="border-y border-[#1E2D4A]/50 bg-[#0F1A2E]/20 relative z-10 py-10 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
<p className="text-base text-[#94A3B8] font-medium whitespace-nowrap">
          Trusted by ambitious teams building smarter operations
        </p>
<div className="w-full flex items-center justify-between opacity-50 grayscale hover:grayscale-0 transition-all duration-500 gap-8 overflow-x-auto no-scrollbar">

<div className="flex items-center gap-2 min-w-max">
<i className="w-6 h-6" data-lucide="hexagon"></i>
<span className="text-lg font-semibold tracking-tight">AcmeCorp</span>
</div>
<div className="flex items-center gap-2 min-w-max">
<i className="w-6 h-6" data-lucide="triangle"></i>
<span className="text-lg font-semibold tracking-tight">Vanguard</span>
</div>
<div className="flex items-center gap-2 min-w-max">
<i className="w-6 h-6" data-lucide="circle-dot"></i>
<span className="text-lg font-semibold tracking-tight">NexusFlow</span>
</div>
<div className="flex items-center gap-2 min-w-max">
<i className="w-6 h-6" data-lucide="box"></i>
<span className="text-lg font-semibold tracking-tight">AuraSys</span>
</div>
<div className="flex items-center gap-2 min-w-max">
<i className="w-6 h-6" data-lucide="layers"></i>
<span className="text-lg font-semibold tracking-tight">Stratos</span>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10" id="services">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1E2D4A] bg-[#0F1A2E]/50 text-xs font-medium text-[#94A3B8] tracking-widest uppercase mb-4">
            System Capabilities
          </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Intelligence made
            <span className="font-serif-italic text-[#94A3B8]">effortless.</span>
</h2>
<p className="text-lg text-[#94A3B8] max-w-2xl">
            Streamline your operational deployment with protocols designed to
            simplify, automate, and enhance your business architecture.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-[#0F1A2E]/40 border border-[#1E2D4A] rounded-[2rem] p-8 md:p-10 hover:border-[#00B4D8]/40 transition-colors duration-500 overflow-hidden flex flex-col h-full">
<div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-xl border border-[#1E2D4A] bg-[#050A18] flex items-center justify-center mb-8 relative z-10 group-hover:border-[#00B4D8]/50 transition-colors">
<i className="w-6 h-6 text-white group-hover:text-[#00B4D8] transition-colors" data-lucide="workflow"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4 relative z-10">
              RPA/BPA Architecture
            </h3>
<p className="text-lg text-[#94A3B8] mb-8 relative z-10 flex-grow">
              Generate high-yield efficiency strategies and execute end-to-end
              automation across legacy systems in milliseconds.
            </p>

<div className="mt-auto relative z-10 pt-6 border-t border-[#1E2D4A]/50">
<div className="flex items-center justify-between text-xs font-medium text-[#5B5BD6]">
<span>PROTOCOL_v2.1</span>
<div className="flex items-center gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  ACTIVE
                </div>
</div>
<div className="w-full h-8 bg-[#050A18] rounded-md border border-[#1E2D4A] mt-3 flex items-center px-3 opacity-50">
<div className="w-1/3 h-1 bg-[#1E2D4A] rounded-full"></div>
</div>
</div>
</div>

<div className="group relative bg-[#0F1A2E]/40 border border-[#1E2D4A] rounded-[2rem] p-8 md:p-10 hover:border-[#00B4D8]/40 transition-colors duration-500 overflow-hidden flex flex-col h-full md:-translate-y-4">
<div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-xl border border-[#1E2D4A] bg-[#050A18] flex items-center justify-center mb-8 relative z-10 group-hover:border-[#00B4D8]/50 transition-colors">
<i className="w-6 h-6 text-white group-hover:text-[#00B4D8] transition-colors" data-lucide="zap"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4 relative z-10">
              AI Transformation
            </h3>
<p className="text-lg text-[#94A3B8] mb-8 relative z-10 flex-grow">
              Connect to deep cognitive pools to ensure zero-friction decision
              making on institutional workloads using custom LLM architecture.
            </p>

<div className="mt-auto relative z-10 h-24 border border-[#1E2D4A]/50 rounded-xl overflow-hidden flex items-center justify-center bg-[#050A18]/50">
<div className="w-16 h-16 border border-[#1E2D4A] rounded-full flex items-center justify-center relative">
<div className="w-8 h-8 border border-[#00B4D8] rounded-full opacity-50"></div>
<div className="absolute w-full h-[1px] bg-[#1E2D4A] top-1/2 left-0"></div>
<div className="absolute h-full w-[1px] bg-[#1E2D4A] top-0 left-1/2"></div>
<i className="w-4 h-4 text-[#94A3B8] absolute bottom-1 right-1 bg-[#050A18]" data-lucide="eye"></i>
</div>
</div>
</div>

<div className="group relative bg-[#0F1A2E]/40 border border-[#1E2D4A] rounded-[2rem] p-8 md:p-10 hover:border-[#00B4D8]/40 transition-colors duration-500 overflow-hidden flex flex-col h-full">
<div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-xl border border-[#1E2D4A] bg-[#050A18] flex items-center justify-center mb-8 relative z-10 group-hover:border-[#00B4D8]/50 transition-colors">
<i className="w-6 h-6 text-white group-hover:text-[#00B4D8] transition-colors" data-lucide="git-merge"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4 relative z-10">
              Process Optimization
            </h3>
<p className="text-lg text-[#94A3B8] mb-8 relative z-10 flex-grow">
              Manage structural operations with institutional-grade precision.
              Map workflows, audit logs, and redesign operational logic.
            </p>

<div className="mt-auto relative z-10 pt-6 border-t border-[#1E2D4A]/50">
<div className="w-full h-12 bg-[#050A18] rounded-lg border border-[#1E2D4A] flex items-center justify-between px-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs font-medium text-[#94A3B8]">
                    TREASURY_V4
                  </span>
</div>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-[#1E2D4A] border border-[#050A18] flex items-center justify-center text-[10px] text-white">
                    JD
                  </div>
<div className="w-6 h-6 rounded-full bg-[#00B4D8] border border-[#050A18] flex items-center justify-center text-[10px] text-[#050A18] font-medium">
                    AS
                  </div>
<div className="w-6 h-6 rounded-full bg-[#38BDF8] border border-[#050A18] flex items-center justify-center text-[10px] text-[#050A18] font-medium">
                    +3
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 border-t border-[#1E2D4A]/50 bg-gradient-to-b from-[#0F1A2E]/20 to-[#050A18]" id="approach">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-5 flex flex-col justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1E2D4A] bg-[#0F1A2E]/50 text-xs font-medium text-[#94A3B8] tracking-widest uppercase mb-4 w-max">
              Exchange Infrastructure
            </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
              Liquidate &amp; Exchange
              <br/>
<span className="font-serif-italic text-[#94A3B8]">
                Global Inefficiencies.
              </span>
</h2>
<p className="text-lg text-[#94A3B8] mb-8">
              Direct market access to expert automation. Convert manual friction
              into scalable digital assets with zero slippage and immediate
              settlement.
            </p>
<a className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-[#050A18] text-base font-medium hover:bg-[#F1F5F9] transition-colors w-max shadow-lg" href="#contact">
              Get Started
            </a>
</div>
<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="p-6 rounded-2xl bg-[#0F1A2E]/30 border border-[#1E2D4A]/80 backdrop-blur-sm">
<i className="w-6 h-6 text-[#00B4D8] mb-4" data-lucide="layout-template"></i>
<h4 className="text-xl font-medium text-white mb-2 tracking-tight">
                Architecture-first
              </h4>
<p className="text-base text-[#94A3B8]">
                We don't just build bots; we engineer foundational
                infrastructure for scale.
              </p>
</div>

<div className="p-6 rounded-2xl bg-[#0F1A2E]/30 border border-[#1E2D4A]/80 backdrop-blur-sm sm:translate-y-6">
<i className="w-6 h-6 text-[#00B4D8] mb-4" data-lucide="layers-3"></i>
<h4 className="text-xl font-medium text-white mb-2 tracking-tight">
                End-to-end Delivery
              </h4>
<p className="text-base text-[#94A3B8]">
                From process mining to deployment and continuous maintenance.
              </p>
</div>

<div className="p-6 rounded-2xl bg-[#0F1A2E]/30 border border-[#1E2D4A]/80 backdrop-blur-sm">
<i className="w-6 h-6 text-[#00B4D8] mb-4" data-lucide="bar-chart-3"></i>
<h4 className="text-xl font-medium text-white mb-2 tracking-tight">
                Measurable Outcomes
              </h4>
<p className="text-base text-[#94A3B8]">
                Every deployment is tied strictly to OPEX reduction and speed
                KPIs.
              </p>
</div>

<div className="p-6 rounded-2xl bg-[#0F1A2E]/30 border border-[#1E2D4A]/80 backdrop-blur-sm sm:translate-y-6">
<i className="w-6 h-6 text-[#00B4D8] mb-4" data-lucide="lock"></i>
<h4 className="text-xl font-medium text-white mb-2 tracking-tight">
                Secure &amp; Scalable
              </h4>
<p className="text-base text-[#94A3B8]">
                Bank-grade security standards applied to all data flows and API
                layers.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Integration Protocol
          </h2>
<p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            A deterministic four-phase approach to modernizing your core
            operations.
          </p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-[#1E2D4A] -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10">

<div className="flex flex-col items-center text-center group">
<div className="w-14 h-14 rounded-full bg-[#050A18] border-2 border-[#1E2D4A] flex items-center justify-center text-xl font-semibold text-white mb-6 group-hover:border-[#00B4D8] group-hover:shadow-[0_0_20px_rgba(0,180,216,0.3)] transition-all duration-300 relative">
                1
                <div className="md:hidden absolute top-14 left-1/2 w-[1px] h-10 bg-[#1E2D4A] -translate-x-1/2"></div>
</div>
<h4 className="text-xl font-medium text-white mb-3">Audit</h4>
<p className="text-base text-[#94A3B8]">
                Deep dive into existing workflows, identifying bottlenecks and
                feasibility metrics.
              </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-14 h-14 rounded-full bg-[#050A18] border-2 border-[#1E2D4A] flex items-center justify-center text-xl font-semibold text-white mb-6 group-hover:border-[#00B4D8] group-hover:shadow-[0_0_20px_rgba(0,180,216,0.3)] transition-all duration-300 relative">
                2
                <div className="md:hidden absolute top-14 left-1/2 w-[1px] h-10 bg-[#1E2D4A] -translate-x-1/2"></div>
</div>
<h4 className="text-xl font-medium text-white mb-3">Strategy</h4>
<p className="text-base text-[#94A3B8]">
                Architecting the solution design, selecting tech stack, and
                defining ROI parameters.
              </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-14 h-14 rounded-full bg-[#050A18] border-2 border-[#1E2D4A] flex items-center justify-center text-xl font-semibold text-white mb-6 group-hover:border-[#00B4D8] group-hover:shadow-[0_0_20px_rgba(0,180,216,0.3)] transition-all duration-300 relative">
                3
                <div className="md:hidden absolute top-14 left-1/2 w-[1px] h-10 bg-[#1E2D4A] -translate-x-1/2"></div>
</div>
<h4 className="text-xl font-medium text-white mb-3">
                Implementation
              </h4>
<p className="text-base text-[#94A3B8]">
                Agile development of RPA scripts and AI integrations with
                rigorous testing.
              </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-14 h-14 rounded-full bg-[#050A18] border-2 border-[#1E2D4A] flex items-center justify-center text-xl font-semibold text-white mb-6 group-hover:border-[#00B4D8] group-hover:shadow-[0_0_20px_rgba(0,180,216,0.3)] transition-all duration-300">
                4
              </div>
<h4 className="text-xl font-medium text-white mb-3">Optimization</h4>
<p className="text-base text-[#94A3B8]">
                Deployment, continuous monitoring, and iterative refinement for
                peak performance.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 border-t border-[#1E2D4A]/30" id="results">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-12 text-center">
          Proven Economic Velocity
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="p-8 md:p-10 rounded-3xl bg-[#0F1A2E]/50 border border-[#1E2D4A] flex flex-col justify-between group hover:bg-[#0F1A2E]/80 transition-colors">
<div className="flex items-center justify-between mb-16">
<div className="w-10 h-10 rounded-full bg-[#1E2D4A] flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="timer"></i>
</div>
<span className="text-xs font-medium text-[#94A3B8] px-3 py-1 rounded-full border border-[#1E2D4A]">
                Logistics Corp
              </span>
</div>
<div>
<div className="text-5xl md:text-6xl font-semibold text-white mb-4 tracking-tight">
                85
                <span className="text-[#00B4D8]">%</span>
</div>
<h4 className="text-xl font-medium text-white mb-2">
                Process Time Reduction
              </h4>
<p className="text-base text-[#94A3B8]">
                End-to-end automation of customs clearance documentation
                processing via OCR and RPA integration.
              </p>
</div>
</div>

<div className="p-8 md:p-10 rounded-3xl bg-[#0F1A2E]/50 border border-[#1E2D4A] flex flex-col justify-between group hover:bg-[#0F1A2E]/80 transition-colors">
<div className="flex items-center justify-between mb-16">
<div className="w-10 h-10 rounded-full bg-[#1E2D4A] flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="trending-down"></i>
</div>
<span className="text-xs font-medium text-[#94A3B8] px-3 py-1 rounded-full border border-[#1E2D4A]">
                Fintech Org
              </span>
</div>
<div>
<div className="text-5xl md:text-6xl font-semibold text-white mb-4 tracking-tight">
                10k
                <span className="text-[#00B4D8]">+</span>
</div>
<h4 className="text-xl font-medium text-white mb-2">
                Hours Saved Annually
              </h4>
<p className="text-base text-[#94A3B8]">
                Restructured compliance auditing with AI-driven anomaly
                detection, eliminating manual review overhead.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10 px-6" id="contact">
<div className="max-w-5xl mx-auto rounded-[3rem] bg-[#0F1A2E] border border-[#1E2D4A] relative overflow-hidden p-10 md:p-20 text-center shadow-2xl">

<div className="absolute inset-0 bg-gradient-to-b from-[#00B4D8]/10 to-transparent opacity-50"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#00B4D8] to-transparent opacity-50"></div>
<div className="relative z-10 flex flex-col items-center">
<i className="w-10 h-10 text-[#00B4D8] mb-8" data-lucide="power"></i>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
            Ready to scale your
            <span className="font-serif-italic">infrastructure?</span>
</h2>
<p className="text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10">
            Book a strategic consultation to discover how intelligent automation
            can transform your operational overhead into margin.
          </p>
<button className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-[#050A18] text-xl font-medium hover:bg-[#F1F5F9] transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] group">
            Umów konsultację
            <i className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="chevron-right"></i>
</button>
<p className="mt-6 text-sm text-[#5B5BD6] font-medium flex items-center gap-2">
<i className="w-4 h-4" data-lucide="calendar"></i>
            Direct access to lead architects
          </p>
</div>
</div>
</section>

<footer className="bg-[#050A18] pt-20 pb-10 border-t border-[#1E2D4A]/50 relative z-10">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<div className="flex items-center gap-2 mb-6 cursor-pointer">
<div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#00B4D8] to-[#38BDF8] flex items-center justify-center">
<i className="w-3.5 h-3.5 text-[#050A18]" data-lucide="cpu"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-white">
                Pimento
              </span>
</div>
<p className="text-base text-[#94A3B8] max-w-sm">
              Boutique consultancy focused on high-yield automation architecture
              and secure AI transformations for the modern enterprise.
            </p>
</div>
<div>
<h5 className="text-white font-medium mb-6">Capabilities</h5>
<ul className="space-y-4">
<li>
<a className="text-base text-[#94A3B8] hover:text-white transition-colors" href="#">
                  RPA / BPA Design
                </a>
</li>
<li>
<a className="text-base text-[#94A3B8] hover:text-white transition-colors" href="#">
                  AI Implementation
                </a>
</li>
<li>
<a className="text-base text-[#94A3B8] hover:text-white transition-colors" href="#">
                  Process Mining
                </a>
</li>
<li>
<a className="text-base text-[#94A3B8] hover:text-white transition-colors" href="#">
                  Workflow Audits
                </a>
</li>
</ul>
</div>
<div>
<h5 className="text-white font-medium mb-6">Company</h5>
<ul className="space-y-4">
<li>
<a className="text-base text-[#94A3B8] hover:text-white transition-colors" href="#">
                  About Us
                </a>
</li>
<li>
<a className="text-base text-[#94A3B8] hover:text-white transition-colors" href="#">
                  Case Studies
                </a>
</li>
<li>
<a className="text-base text-[#94A3B8] hover:text-white transition-colors" href="#">
                  Careers
                </a>
</li>
<li>
<a className="text-base text-[#94A3B8] hover:text-white transition-colors" href="#">
                  Contact
                </a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#1E2D4A]/50 text-sm text-[#94A3B8]">
<p>© 2024 Pimento Systems. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-white transition-colors" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>



    </>
  );
}
