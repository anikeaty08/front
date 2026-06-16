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



      lucide.createIcons({
          attrs: {
              class: "lucide",
              "stroke-width": 1.5
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="spline-container top-0 w-full h-screen -z-10 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<iframe className="" frameborder="0" height="100%" src="https://app.spline.design/community/file/8cfb6748-f3dd-44dd-89fb-f46c7ab4186e" width="100%"></iframe>
</div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

<nav className="fixed z-50 flex pr-6 pl-6 top-6 right-0 left-0 justify-center">
<div className="glass-card rounded-full px-6 py-3 flex items-center gap-8 shadow-2xl shadow-black/50 border-white/10 backdrop-blur-xl">
<a className="text-sm font-semibold tracking-tighter text-white flex items-center gap-2" href="#">
<div className="w-5 h-5 bg-gradient-to-br from-red-500 to-red-700 rounded flex items-center justify-center text-white text-[10px] font-bold shadow-lg shadow-red-500/30">
            T
          </div>
          TRISDEL
        </a>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#services">
            Services
          </a>
<a className="hover:text-white transition-colors" href="#process">
            Process
          </a>
<a className="hover:text-white transition-colors" href="#about">About</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-1.5 text-[11px] font-semibold tracking-wide text-white transition-all bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 rounded-full group" href="#contact">
          Start Growing
          <span className="group-hover:translate-x-0.5 transition-transform ml-1">
            →
          </span>
</a>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-40 pb-20 relative">
<div className="absolute inset-0 bg-grid-pattern opacity-30 -z-10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-16 items-center">

<div className="lg:col-span-6 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
<span className="text-[10px] font-mono font-medium text-zinc-400 uppercase tracking-widest">
                Next-Gen SEO Intelligence
              </span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white leading-[1.05] mb-6">
              Dominate Search
              <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500 animate-gradient">
                With Data Velocity.
              </span>
</h1>
<p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-xl font-light">
              We don't just optimize; we engineer search dominance. Leveraging
              semantic entities, AI-driven analytics, and technical precision to
              future-proof your digital footprint.
            </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wide text-white bg-gradient-to-b from-red-600 to-red-700 rounded-lg hover:shadow-[0_0_20px_-5px_rgba(220,38,38,0.5)] transition-all border border-red-500/50" href="#contact">
                Unlock Growth Potential
                <svg className="lucide lucide-zap w-3.5 h-3.5 ml-2 fill-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wide text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 hover:text-white transition-all" href="#services">
                View Protocols
              </a>
</div>

<div className="pt-8 flex items-center gap-6 border-t border-white/5">
<div className="">
<p className="text-2xl font-bold text-white tracking-tight">240%</p>
<p className="text-[10px] text-zinc-500 uppercase tracking-wider">
                  Avg Traffic Increase
                </p>
</div>
<div className="w-px h-8 bg-zinc-800"></div>
<div className="">
<p className="text-2xl font-bold text-white tracking-tight">15M+</p>
<p className="text-[10px] text-zinc-500 uppercase tracking-wider">
                  Keywords Indexed
                </p>
</div>
</div>
</div>

<div className="lg:col-span-6 relative perspective-1000">
<div className="relative glass-card rounded-2xl overflow-hidden shadow-2xl shadow-black border border-white/10 group transform transition-transform hover:rotate-y-1 hover:rotate-x-1 duration-500 ease-out">

<div className="h-12 border-b border-white/5 bg-black/20 flex items-center justify-between px-4">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700/50"></div>
</div>
<div className="font-mono text-[10px] text-zinc-600">
                  analysis_v2.4.exe
                </div>
</div>

<div className="p-8 relative">

<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
<div className="flex justify-between items-end mb-8 relative z-10">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-[pulse_2s_infinite]"></span>
<p className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                        Live Traffic Data
                      </p>
</div>
<h3 className="text-4xl font-semibold text-white tracking-tighter text-glow">
                      842.3k
                    </h3>
</div>
<div className="text-right">
<div className="inline-flex items-center px-2 py-1 rounded bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-mono">
                      +24.5%
                      <svg className="lucide lucide-arrow-up-right w-3 h-3 ml-1" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>
</div>

<div className="relative h-48 w-full">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 50">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#ef4444" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#ef4444" stop-opacity="0"></stop>
</lineargradient>
<filter height="140%" id="glow" width="140%" x="-20%" y="-20%">
<fegaussianblur result="blur" stddeviation="1"></fegaussianblur>
<fecomposite in="SourceGraphic" in2="blur" operator="over"></fecomposite>
</filter>
</defs>

<line stroke="#333" strokeWidth="0.5" x1="0" x2="100" y1="50" y2="50"></line>
<line stroke="#333" stroke-dasharray="2" strokeWidth="0.5" x1="0" x2="100" y1="37.5" y2="37.5"></line>
<line stroke="#333" stroke-dasharray="2" strokeWidth="0.5" x1="0" x2="100" y1="25" y2="25"></line>

<path d="M0,50 L0,40 C10,40 15,35 25,30 S40,25 50,15 S70,15 80,10 S90,5 100,2 L100,50 Z" fill="url(#chartGradient)"></path>

<path d="M0,40 C10,40 15,35 25,30 S40,25 50,15 S70,15 80,10 S90,5 100,2" fill="none" filter="url(#glow)" stroke="#ef4444" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>

<circle cx="50" cy="15" fill="#050505" r="2" stroke="#ef4444" strokeWidth="1.5"></circle>
<circle cx="80" cy="10" fill="#050505" r="2" stroke="#ef4444" strokeWidth="1.5"></circle>
<circle className="animate-pulse" cx="100" cy="2" fill="#fff" r="2.5" stroke="rgba(239,68,68,0.5)" strokeWidth="4"></circle>
</svg>
</div>

<div className="mt-4 flex justify-between font-mono text-[10px] text-zinc-600">
<span>JAN</span>
<span>FEB</span>
<span>MAR</span>
<span>APR</span>
<span>MAY</span>
<span>JUN</span>
</div>
</div>

<div className="absolute -right-4 top-20 glass-card p-3 rounded-lg border-l-2 border-l-red-500 shadow-xl flex items-center gap-3 animate-[pulse_4s_infinite]">
<div className="bg-red-500/10 p-1.5 rounded text-red-400">
<svg className="lucide lucide-target w-4 h-4" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="6"></circle>
<circle cx="12" cy="12" r="2"></circle>
</svg>
</div>
<div>
<p className="text-[10px] text-zinc-400">Keyword Achievement</p>
<p className="text-xs font-semibold text-white">
                    Rank #1 Secured
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative bg-black/50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold tracking-tighter text-white">
              System Architecture
            </h2>
<p className="text-sm text-zinc-500 mt-2 font-light">
              Analyzing the data points that drive visibility.
            </p>
</div>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-red-600"></span>
<span className="w-2 h-2 rounded-full bg-zinc-800"></span>
<span className="w-2 h-2 rounded-full bg-zinc-800"></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-6 rounded-xl flex flex-col justify-between h-72 relative overflow-hidden group scanline">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent)]"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 text-white group-hover:text-red-400 transition-colors">
<svg className="lucide lucide-network w-5 h-5" data-lucide="network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="6" rx="1" width="6" x="16" y="16"></rect>
<rect height="6" rx="1" width="6" x="2" y="16"></rect>
<rect height="6" rx="1" width="6" x="9" y="2"></rect>
<path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
<path d="M12 12V8"></path>
</svg>
</div>
<h3 className="text-sm font-semibold text-white">
                Semantic Topology
              </h3>
<p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                Mapping contextual relationships between entities to establish
                authoritative topical relevance.
              </p>
</div>

<div className="relative z-10 mt-6 h-full border border-white/5 rounded bg-black/40 p-3 font-mono text-[9px] text-zinc-500 flex flex-col gap-2">
<div className="flex justify-between items-center text-zinc-300">
<span>Root: "SEO"</span>
<span className="text-red-500">1.0</span>
</div>
<div className="pl-2 border-l border-zinc-700 flex justify-between items-center">
<span>└ Node: "Technical"</span>
<span className="text-zinc-600">0.85</span>
</div>
<div className="pl-2 border-l border-zinc-700 flex justify-between items-center">
<span>└ Node: "Content"</span>
<span className="text-zinc-600">0.92</span>
</div>
<div className="pl-4 border-l border-zinc-700 flex justify-between items-center text-red-400">
<span>└ Leaf: "Strategy"</span>
<span>LINKED</span>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-xl flex flex-col h-72">
<div className="flex justify-between items-start mb-6">
<div className="">
<h3 className="text-sm font-semibold text-white">
                  Core Web Vitals
                </h3>
<p className="text-[10px] text-zinc-500 font-mono mt-1">
                  PERFORMANCE_AUDIT
                </p>
</div>
<svg className="lucide lucide-activity w-4 h-4 text-zinc-600" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>
<div className="space-y-6 flex-1 flex flex-col justify-center">
<div className="group/bar">
<div className="flex justify-between text-[10px] font-mono mb-1 text-zinc-400">
<span>LCP (Largest Contentful Paint)</span>
<span className="text-green-400 group-hover/bar:text-white transition-colors">
                    0.8s
                  </span>
</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-green-600 to-green-400 w-[85%] rounded-full shadow-[0_0_12px_rgba(34,197,94,0.5)] transition-all duration-1000 ease-out group-hover/bar:w-[90%]"></div>
</div>
</div>
<div className="group/bar">
<div className="flex justify-between text-[10px] font-mono mb-1 text-zinc-400">
<span>FID (First Input Delay)</span>
<span className="text-green-400 group-hover/bar:text-white transition-colors">
                    12ms
                  </span>
</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-green-600 to-green-400 w-[95%] rounded-full shadow-[0_0_12px_rgba(34,197,94,0.5)] transition-all duration-1000 ease-out"></div>
</div>
</div>
<div className="group/bar">
<div className="flex justify-between text-[10px] font-mono mb-1 text-zinc-400">
<span>CLS (Cumulative Layout Shift)</span>
<span className="text-green-400 group-hover/bar:text-white transition-colors">
                    0.00
                  </span>
</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-green-600 to-green-400 w-full rounded-full shadow-[0_0_12px_rgba(34,197,94,0.5)] transition-all duration-1000 ease-out"></div>
</div>
</div>
</div>
</div>

<div className="glass-card p-0 rounded-xl flex flex-col h-72 overflow-hidden bg-[#0a0a0a]">
<div className="h-8 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
</div>
<div className="p-6 font-mono text-[10px] leading-loose text-zinc-400 overflow-hidden">
<div className="flex">
<span className="w-6 text-zinc-700 select-none">1</span>
<span className="text-purple-400">const</span>
<span className="text-yellow-200">schema</span>
<span className="text-white">=</span>
                {
              </div>
<div className="flex">
<span className="w-6 text-zinc-700 select-none">2</span>
                  
                <span className="text-blue-400">"@context"</span>
                :
                <span className="text-green-400">"https://schema.org"</span>
                ,
              </div>
<div className="flex">
<span className="w-6 text-zinc-700 select-none">3</span>
                  
                <span className="text-blue-400">"@type"</span>
                :
                <span className="text-green-400">"Organization"</span>
                ,
              </div>
<div className="flex">
<span className="w-6 text-zinc-700 select-none">4</span>
                  
                <span className="text-blue-400">"name"</span>
                :
                <span className="text-green-400">"Trisdel Media"</span>
                ,
              </div>
<div className="flex">
<span className="w-6 text-zinc-700 select-none">5</span>
                  
                <span className="text-blue-400">"url"</span>
                :
                <span className="text-green-400">"https://trisdel.com"</span>
                ,
              </div>
<div className="flex">
<span className="w-6 text-zinc-700 select-none">6</span>
                  
                <span className="text-blue-400">"sameAs"</span>
                : [
              </div>
<div className="flex">
<span className="w-6 text-zinc-700 select-none">7</span>
                    
                <span className="text-green-400">"https://x.com/trisdel"</span>
</div>
<div className="flex">
<span className="w-6 text-zinc-700 select-none">8</span>
                  ]
              </div>
<div className="flex">
<span className="w-6 text-zinc-700 select-none">9</span>
                }
              </div>
<div className="mt-2 text-zinc-600 text-[9px]">
                // Validated Structured Data
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-32 pl-6" id="services">
<div className="mb-20 max-w-3xl">
<h2 className="text-xs font-bold font-mono text-red-500 uppercase tracking-widest mb-4 flex items-center gap-2">
<span className="w-4 h-px bg-red-500"></span>
          Capabilities
        </h2>
<h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-6 leading-tight">
          Engineering
          <br/>
<span className="text-zinc-500">Digital Supremacy.</span>
</h3>
<p className="text-zinc-400 text-lg font-light">
          End-to-end solutions designed for the semantic web era.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="glass-card p-8 rounded-2xl md:col-span-2 group relative overflow-hidden">
<div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 text-white flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:border-red-500 transition-all duration-300">
<svg className="lucide lucide-brain-circuit w-6 h-6" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
<path d="M9 13a4.5 4.5 0 0 0 3-4"></path>
<path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
<path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
<path d="M6 18a4 4 0 0 1-1.967-.516"></path>
<path d="M12 13h4"></path>
<path d="M12 18h6a2 2 0 0 1 2 2v1"></path>
<path d="M12 8h8"></path>
<path d="M16 8V5a2 2 0 0 1 2-2"></path>
<circle cx="16" cy="13" r=".5"></circle>
<circle cx="18" cy="3" r=".5"></circle>
<circle cx="20" cy="21" r=".5"></circle>
<circle cx="20" cy="8" r=".5"></circle>
</svg>
</div>
<h4 className="text-xl font-semibold text-white mb-3 tracking-tight">
            Semantic SEO &amp; Entities
          </h4>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed max-w-sm">
            Search engines now think in concepts, not just keywords. We
            construct advanced topical maps and entity-rich content layers to
            establish your brand as the definitive source of truth.
          </p>
<div className="flex gap-2">
<span className="px-2 py-1 text-[10px] border border-zinc-800 rounded bg-zinc-900/50 text-zinc-500">
              NLP
            </span>
<span className="px-2 py-1 text-[10px] border border-zinc-800 rounded bg-zinc-900/50 text-zinc-500">
              Knowledge Graph
            </span>
</div>
</div>

<div className="glass-card p-8 rounded-2xl md:col-span-2 group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none"></div>
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 text-white flex items-center justify-center mb-6 group-hover:text-red-500 transition-colors">
<svg className="lucide lucide-map-pin w-6 h-6" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
</div>
<h4 className="text-xl font-semibold text-white mb-3 tracking-tight">
            Geo-Spatial Dominance
          </h4>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed max-w-sm">
            Hyper-local optimization strategies. We manage citations, optimize
            GBP assets, and capture high-intent local traffic to drive physical
            footprint conversion.
          </p>
<div className="flex gap-2">
<span className="px-2 py-1 text-[10px] border border-zinc-800 rounded bg-zinc-900/50 text-zinc-500">
              Local Pack
            </span>
<span className="px-2 py-1 text-[10px] border border-zinc-800 rounded bg-zinc-900/50 text-zinc-500">
              Citations
            </span>
</div>
</div>

<div className="glass-card p-6 rounded-2xl group hover:bg-zinc-900/80 transition-colors">
<svg className="lucide lucide-shopping-bag w-8 h-8 text-zinc-600 mb-4 group-hover:text-white transition-colors" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 10a4 4 0 0 1-8 0"></path>
<path d="M3.103 6.034h17.794"></path>
<path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
</svg>
<h4 className="text-base font-semibold text-white mb-2 tracking-tight">
            eCommerce Scale
          </h4>
<p className="text-xs text-zinc-500 leading-relaxed">
            Product schema, faceted navigation optimization, and category
            hierarchy for maximum SKU visibility.
          </p>
</div>

<div className="glass-card p-6 rounded-2xl group hover:bg-zinc-900/80 transition-colors">
<svg className="lucide lucide-file-code w-8 h-8 text-zinc-600 mb-4 group-hover:text-white transition-colors" data-lucide="file-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
<path d="M10 12.5 8 15l2 2.5"></path>
<path d="m14 12.5 2 2.5-2 2.5"></path>
</svg>
<h4 className="text-base font-semibold text-white mb-2 tracking-tight">
            Content Engineering
          </h4>
<p className="text-xs text-zinc-500 leading-relaxed">
            Data-backed content production that targets specific funnel stages
            and user intents.
          </p>
</div>

<div className="glass-card p-6 rounded-2xl group hover:bg-zinc-900/80 transition-colors">
<svg className="lucide lucide-code-2 w-8 h-8 text-zinc-600 mb-4 group-hover:text-white transition-colors" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m18 16 4-4-4-4"></path>
<path d="m6 8-4 4 4 4"></path>
<path d="m14.5 4-5 16"></path>
</svg>
<h4 className="text-base font-semibold text-white mb-2 tracking-tight">
            Technical Audits
          </h4>
<p className="text-xs text-zinc-500 leading-relaxed">
            Deep-dive architectural analysis to resolve crawl budget issues, JS
            rendering, and indexing blocks.
          </p>
</div>

<div className="glass-card p-6 rounded-2xl group hover:bg-zinc-900/80 transition-colors">
<svg className="lucide lucide-link w-8 h-8 text-zinc-600 mb-4 group-hover:text-white transition-colors" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
</svg>
<h4 className="text-base font-semibold text-white mb-2 tracking-tight">
            Authority Acquisition
          </h4>
<p className="text-xs text-zinc-500 leading-relaxed">
            High-quality backlink procurement through digital PR and strategic
            partnerships.
          </p>
</div>

<div className="glass-card p-8 rounded-2xl md:col-span-2 group relative overflow-hidden bg-gradient-to-br from-zinc-900 to-black border-zinc-800">
<div className="flex items-center justify-between relative z-10">
<div className="">
<div className="w-10 h-10 rounded-lg bg-red-600/10 text-red-500 flex items-center justify-center mb-4 border border-red-500/20">
<svg className="lucide lucide-cpu w-5 h-5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20v2"></path>
<path d="M12 2v2"></path>
<path d="M17 20v2"></path>
<path d="M17 2v2"></path>
<path d="M2 12h2"></path>
<path d="M2 17h2"></path>
<path d="M2 7h2"></path>
<path d="M20 12h2"></path>
<path d="M20 17h2"></path>
<path d="M20 7h2"></path>
<path d="M7 20v2"></path>
<path d="M7 2v2"></path>
<rect height="16" rx="2" width="16" x="4" y="4"></rect>
<rect height="8" rx="1" width="8" x="8" y="8"></rect>
</svg>
</div>
<h4 className="text-lg font-semibold text-white mb-2 tracking-tight">
                AI-Driven Predictive Analysis
              </h4>
<p className="text-sm text-zinc-400 mb-4 leading-relaxed max-w-xs">
                Utilizing machine learning models to forecast trends and adapt
                strategies before competitors react.
              </p>
</div>
<div className="hidden sm:block">
<div className="w-24 h-24 rounded-full border border-red-500/20 flex items-center justify-center relative">
<div className="absolute inset-0 rounded-full border border-red-500/10 animate-[spin_10s_linear_infinite]"></div>
<svg className="lucide lucide-bot w-10 h-10 text-red-500" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-2xl md:col-span-2 group relative overflow-hidden">
<div className="flex items-center justify-between relative z-10">
<div>
<div className="w-10 h-10 rounded-lg bg-zinc-800 text-white flex items-center justify-center mb-4 border border-zinc-700">
<svg className="lucide lucide-layers w-5 h-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
<path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
<path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
</svg>
</div>
<h4 className="text-lg font-semibold text-white mb-2 tracking-tight">
                SaaS Growth Engines
              </h4>
<p className="text-sm text-zinc-400 mb-4 leading-relaxed max-w-xs">
                Scalable organic acquisition frameworks for software companies
                focusing on MRR and user retention.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-black/50" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-xs font-bold font-mono text-zinc-500 uppercase tracking-widest mb-4">
            Methodology
          </h2>
<h3 className="text-3xl font-semibold text-white tracking-tight">
            Algorithmic Precision.
          </h3>
</div>
<div className="relative">

<div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent -z-10"></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card p-6 rounded-xl relative group hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-full bg-black border border-zinc-800 text-zinc-400 flex items-center justify-center text-sm font-mono font-bold mb-4 shadow-lg group-hover:border-red-500 group-hover:text-red-500 transition-colors">
                01
              </div>
<h4 className="text-sm font-semibold text-white mb-2">
                Discovery &amp; Audit
              </h4>
<p className="text-xs text-zinc-500">
                Full stack analysis of current assets and competitive landscape.
              </p>
</div>

<div className="glass-card p-6 rounded-xl relative group hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-full bg-black border border-zinc-800 text-zinc-400 flex items-center justify-center text-sm font-mono font-bold mb-4 shadow-lg group-hover:border-red-500 group-hover:text-red-500 transition-colors">
                02
              </div>
<h4 className="text-sm font-semibold text-white mb-2">
                Strategic Mapping
              </h4>
<p className="text-xs text-zinc-500">
                Developing the entity graph and content architecture.
              </p>
</div>

<div className="glass-card p-6 rounded-xl relative group hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-full bg-black border border-zinc-800 text-zinc-400 flex items-center justify-center text-sm font-mono font-bold mb-4 shadow-lg group-hover:border-red-500 group-hover:text-red-500 transition-colors">
                03
              </div>
<h4 className="text-sm font-semibold text-white mb-2">
                Execution &amp; Scale
              </h4>
<p className="text-xs text-zinc-500">
                Implementation of technical fixes and content velocity.
              </p>
</div>

<div className="glass-card p-6 rounded-xl relative group hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-full bg-red-900/20 border border-red-500/30 text-red-500 flex items-center justify-center text-sm font-mono font-bold mb-4 shadow-lg">
                04
              </div>
<h4 className="text-sm font-semibold text-white mb-2">
                Loop Optimization
              </h4>
<p className="text-xs text-zinc-500">
                Continuous data feedback loops to refine rankings.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-xs font-bold font-mono text-red-500 uppercase tracking-widest mb-4">
            The Trisdel Advantage
          </h2>
<h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tighter mb-6">
            Built for the next decade of Search.
          </h3>
<p className="text-zinc-400 mb-8 font-light">
            Traditional agencies rely on outdated tactics. We operate at the
            intersection of technology and user psychology to deliver
            sustainable, compounding growth.
          </p>
<div className="space-y-6">
<div className="flex gap-4 group">
<div className="w-6 h-6 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white mt-0.5 shrink-0 group-hover:border-red-500 transition-colors">
<svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div className="">
<h4 className="text-sm font-semibold text-white">
                  Transparent Telemetry
                </h4>
<p className="text-xs text-zinc-500 mt-1">
                  Real-time reporting dashboards, no hidden metrics.
                </p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-6 h-6 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white mt-0.5 shrink-0 group-hover:border-red-500 transition-colors">
<svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div className="">
<h4 className="text-sm font-semibold text-white">
                  Full-Stack Capabilities
                </h4>
<p className="text-xs text-zinc-500 mt-1">
                  From server-side rendering fixes to creative content.
                </p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-6 h-6 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white mt-0.5 shrink-0 group-hover:border-red-500 transition-colors">
<svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div className="">
<h4 className="text-sm font-semibold text-white">
                  Future-Proof Strategies
                </h4>
<p className="text-xs text-zinc-500 mt-1">
                  Prepared for SGE (Search Generative Experience) and AI shifts.
                </p>
</div>
</div>
</div>
<div className="mt-10">
<a className="inline-flex items-center text-sm font-semibold text-red-500 hover:text-red-400 transition-colors group" href="#contact">
              Initiate Partnership
              <svg className="lucide lucide-arrow-right w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>

<div className="grid grid-cols-2 gap-4 relative">
<div className="absolute inset-0 bg-red-600/5 blur-3xl -z-10"></div>
<div className="space-y-4 translate-y-8">
<div className="glass-card p-6 rounded-xl bg-zinc-900/40 h-40 flex flex-col justify-between border-zinc-800">
<svg className="lucide lucide-shield-check w-8 h-8 text-white" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-sm font-semibold text-white">
                BrandIntegrity
              </span>
</div>
<div className="glass-card p-6 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 h-56 flex flex-col justify-between border-zinc-700 shadow-xl">
<div className="flex justify-between items-start">
<svg className="lucide lucide-trending-up w-8 h-8 text-red-500" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path>
<path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
<span className="text-[10px] font-mono text-zinc-500">
                  ROI_FOCUS
                </span>
</div>
<span className="text-sm font-semibold text-white">
                MeasurableImpact
              </span>
</div>
</div>
<div className="space-y-4">
<div className="glass-card p-6 rounded-xl bg-zinc-900/80 h-56 flex flex-col justify-between border-zinc-700">
<svg className="lucide lucide-zap w-8 h-8 text-yellow-500" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
<span className="text-sm font-semibold text-white">
                Velocity&amp; Speed
              </span>
</div>
<div className="glass-card p-6 rounded-xl bg-black h-40 flex flex-col justify-between border-zinc-800">
<svg className="lucide lucide-globe w-8 h-8 text-zinc-400" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
<path d="M2 12h20"></path>
</svg>
<span className="text-sm font-semibold text-zinc-400">
                GlobalReach
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6" id="faq">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12 text-center">
        Protocol FAQ
      </h2>
<div className="space-y-4">

<details className="group glass-card rounded-lg overflow-hidden border border-white/5">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-white hover:bg-white/5 transition-colors">
<span className="text-sm">What defines Semantic SEO?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4 text-zinc-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="text-zinc-400 text-sm p-5 pt-0 leading-relaxed">
            Semantic SEO optimizes for topics, entities, and context rather than
            isolated keywords. It aligns your content with the Knowledge Graph,
            helping search engines understand your authority.
          </div>
</details>

<details className="group glass-card rounded-lg overflow-hidden border border-white/5">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-white hover:bg-white/5 transition-colors">
<span className="text-sm">How do you approach Technical Audits?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4 text-zinc-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="text-zinc-400 text-sm p-5 pt-0 leading-relaxed">
            We execute a 100+ point inspection covering crawlability,
            indexation, Core Web Vitals, schema markup, and JS rendering to
            ensure a flawless technical foundation.
          </div>
</details>

<details className="group glass-card rounded-lg overflow-hidden border border-white/5">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-white hover:bg-white/5 transition-colors">
<span className="text-sm">
              Is local SEO relevant for non-brick-and-mortar?
            </span>
<span className="transition-transform duration-300 group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4 text-zinc-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="text-zinc-400 text-sm p-5 pt-0 leading-relaxed">
            Yes. Service Area Businesses (SABs) need local visibility to
            dominate specific geographic markets, even without a customer-facing
            storefront.
          </div>
</details>

<details className="group glass-card rounded-lg overflow-hidden border border-white/5">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-white hover:bg-white/5 transition-colors">
<span className="text-sm">Timeline for results?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4 text-zinc-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="text-zinc-400 text-sm p-5 pt-0 leading-relaxed">
            While technical fixes can yield quick wins, significant organic
            growth typically compounds over 3–6 months depending on market
            competition and authority baselines.
          </div>
</details>
</div>
</section>

<footer className="bg-black border-t border-zinc-900 pt-24 pb-12 relative overflow-hidden" id="contact">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-900/20 blur-[100px] pointer-events-none"></div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16 border-b border-zinc-800">
<div className="">
<h2 className="text-4xl font-semibold tracking-tighter text-white mb-6">
              Ready to upgrade your visibility?
            </h2>
<p className="text-zinc-400 text-lg mb-8 max-w-md font-light">
              The future of search belongs to those who prepare today. Let's
              engineer your growth strategy.
            </p>
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-500 transition-all shadow-[0_0_30px_-5px_rgba(220,38,38,0.6)] hover:shadow-[0_0_50px_-10px_rgba(220,38,38,0.8)]" href="#">
              Get Your Free Audit
            </a>
</div>
<div className="flex flex-col justify-end lg:items-end">
<div className="grid grid-cols-2 gap-12 text-sm text-zinc-500">
<ul className="space-y-3">
<li>
<a className="hover:text-white transition-colors" href="#">
                    Services
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Process
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    About Us
                  </a>
</li>
</ul>
<ul className="space-y-3">
<li>
<a className="hover:text-white transition-colors" href="#">
                    Privacy
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Terms
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Social
                  </a>
</li>
</ul>
</div>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-zinc-800 rounded-sm flex items-center justify-center text-white text-[8px] font-bold">
              T
            </div>
<span className="font-semibold text-zinc-500">
              Trisdel Media © 2023
            </span>
</div>
<p>Designed for the Future.</p>
</div>
</div>
</footer>


    </>
  );
}
