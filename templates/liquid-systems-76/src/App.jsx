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



          (function () {
            const section = document.getElementById("liquid-timeline");
            if (!section) return;
            const steps = Array.from(section.querySelectorAll(".tl-step"));
            const io = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                if (entry.target === section) { section.classList.add("is-inview"); return; }
                const el = entry.target;
                const idx = steps.indexOf(el);
                el.style.transitionDelay = Math.min(idx * 120, 360) + "ms";
                el.classList.add("is-inview");
                io.unobserve(el);
              });
            }, { threshold: 0.28, rootMargin: "0px 0px -10% 0px" });
            io.observe(section);
            steps.forEach((s) => io.observe(s));
          })();
        


      // --------------------------------------------------------
      // 1. WebGL Liquid Glass Background Setup
      // --------------------------------------------------------
      const canvas = document.getElementById('webgl-canvas');
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);

      const scene = new THREE.Scene();

      // Using an Orthographic camera for a perfect full-screen 2D quad
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const geometry = new THREE.PlaneGeometry(2, 2);

      // Uniforms for the shader
      const uniforms = {
          uTime: { value: 0 },
          uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
          uMouse: { value: new THREE.Vector2(-10, -10) },
          uScroll: { value: 0 }
      };

      // Custom Shader Material
      const material = new THREE.ShaderMaterial({
          uniforms: uniforms,
          vertexShader: `
              varying vec2 vUv;
              void main() {
                  vUv = uv;
                  gl_Position = vec4(position, 1.0);
              }
          `,
          fragmentShader: `
              uniform float uTime;
              uniform vec2 uResolution;
              uniform vec2 uMouse;
              uniform float uScroll;

              varying vec2 vUv;

              vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
              vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
              vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
              vec4 taylorInvSqrt(vec4 r) { return 1.79
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="fixed top-4 left-0 w-full z-50 px-4 sm:px-6 transition-all duration-300 pointer-events-none" id="creative-header">
<div className="max-w-6xl mx-auto pointer-events-auto">
<div className="relative backdrop-blur-xl bg-white/70 border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-full px-2 py-2 pl-6 flex items-center justify-between transition-all duration-500 hover:bg-white/80 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]">

<a className="flex items-center gap-2 group" href="#">
<span className="font-medium text-slate-800 tracking-tight text-sm uppercase hidden sm:block">
              Orion
            </span>
</a>

<nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
<a className="hover:text-slate-900 uppercase hover:bg-white/60 transition-all text-xs font-medium text-slate-500 tracking-wider rounded-full pt-2 pr-4 pb-2 pl-4" href="#">
              Product
            </a>
<a className="px-4 py-2 text-xs font-medium text-slate-500 hover:text-slate-900 uppercase tracking-wider rounded-full hover:bg-white/60 transition-all" href="#">
              Platform
            </a>
<a className="px-4 py-2 text-xs font-medium text-slate-500 hover:text-slate-900 uppercase tracking-wider rounded-full hover:bg-white/60 transition-all" href="#">
              Solutions
            </a>
<a className="px-4 py-2 text-xs font-medium text-slate-500 hover:text-slate-900 uppercase tracking-wider rounded-full hover:bg-white/60 transition-all" href="#">
              Resources
            </a>
<a className="px-4 py-2 text-xs font-medium text-slate-500 hover:text-slate-900 uppercase tracking-wider rounded-full hover:bg-white/60 transition-all" href="#">
              Pricing
            </a>
</nav>

<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-xs font-medium text-white uppercase tracking-widest bg-slate-900 rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 hover:shadow-xl hover:shadow-slate-900/20 hover:-translate-y-0.5" href="#">
              Access
            </a>

<button className="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-slate-600 hover:bg-white/60 transition-colors focus:outline-none" id="mobile-menu-btn">
<iconify-icon height="20" icon="solar:hamburger-menu-linear" id="menu-icon" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<iconify-icon className="hidden" height="20" icon="solar:close-circle-linear" id="close-icon" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
</div>

<div className="absolute top-full left-0 w-full px-4 mt-3 origin-top transform scale-95 opacity-0 invisible transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]" id="mobile-menu">
<div className="bg-white/80 backdrop-blur-2xl border border-white/60 rounded-[2rem] p-3 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] flex flex-col gap-1">
<a className="p-4 text-center text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white/60 rounded-2xl transition-all" href="#">
              Product
            </a>
<a className="p-4 text-center text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white/60 rounded-2xl transition-all" href="#">
              Platform
            </a>
<a className="p-4 text-center text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white/60 rounded-2xl transition-all" href="#">
              Solutions
            </a>
<div className="h-px bg-slate-200/50 mx-6 my-1"></div>
<a className="p-4 text-center text-sm font-medium text-white bg-slate-900 rounded-2xl shadow-lg shadow-slate-900/10" href="#">
              Access Platform
            </a>
</div>
</div>
</div>
</header>

<canvas height="1564" id="webgl-canvas" style={{width: '1512px', height: '782px'}} width="3024"></canvas>

<section className="hero-container">
<div className="content-wrapper">
<div className="text-section">
<h1 className="tracking-tight">
    Real-Time
    <br/>
            Intelligence.
  </h1>
<p className="">
    Monitor performance, detect issues early, and automate operational
    workflows from one unified, AI-powered control platform.
  </p>
<div className="flex flex-col sm:flex-row sm:items-center gap-4 items-start">
<button className="cta-btn">
    Request Demo
  </button>
<button className="hover:bg-white/60 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 text-sm font-medium text-slate-50 bg-gradient-to-tl from-slate-400 to-slate-600 border-white/60 border rounded-full pt-4 pr-8 pb-4 pl-8 shadow-[0_10px_30px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl">
    View Platform
  </button>
</div>
</div>
<div className="card-section relative perspective-[1400px] flex justify-center items-center">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[125%] bg-blue-400/10 rounded-full blur-[90px] -z-10 pointer-events-none">
</div>

<div className="card-floater relative w-[340px] h-[720px] mx-auto transform-gpu transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.02]">

<div className="absolute -left-[9px] top-[122px] w-[9px] h-[28px] bg-[#e2e8f0] rounded-l-lg shadow-[inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(15,23,42,0.15)] border border-white/60 border-r-0 z-0 transition-transform hover:-translate-x-[1px]">
</div>
<div className="absolute -left-[9px] top-[176px] w-[9px] h-[56px] bg-[#e2e8f0] rounded-l-lg shadow-[inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(15,23,42,0.15)] border border-white/60 border-r-0 z-0 transition-transform hover:-translate-x-[1px]">
</div>
<div className="absolute -left-[9px] top-[244px] w-[9px] h-[56px] bg-[#e2e8f0] rounded-l-lg shadow-[inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(15,23,42,0.15)] border border-white/60 border-r-0 z-0 transition-transform hover:-translate-x-[1px]">
</div>
<div className="absolute -right-[9px] top-[190px] w-[9px] h-[78px] bg-[#e2e8f0] rounded-r-lg shadow-[inset_-2px_2px_4px_rgba(255,255,255,0.9),inset_2px_-2px_4px_rgba(15,23,42,0.15)] border border-white/60 border-l-0 z-0 transition-transform hover:translate-x-[1px]">
</div>

<div className="absolute inset-0 bg-[#e2e8f0] rounded-[3.9rem] shadow-[25px_35px_65px_rgba(15,23,42,0.15),inset_-6px_-6px_16px_rgba(15,23,42,0.08),inset_6px_6px_16px_rgba(255,255,255,0.95)] border-[5px] border-[#f1f5f9] z-0">
</div>

<div className="absolute inset-x-[10px] top-[10px] bottom-[10px] bg-[#f8f9fb] rounded-[3.25rem] overflow-hidden flex flex-col z-10 shadow-[inset_0_0_20px_rgba(15,23,42,0.06)] border border-slate-200/70">

<div className="absolute top-3 left-1/2 -translate-x-1/2 w-[116px] h-[30px] bg-[#0f172a] rounded-full z-50 shadow-[inset_0_-2px_4px_rgba(255,255,255,0.08),0_4px_10px_rgba(0,0,0,0.12)] flex items-center justify-between px-2.5 hover:w-[126px] transition-all duration-500 cursor-pointer">
<div className="w-3 h-3 bg-[#1e293b] rounded-full flex items-center justify-center border border-white/5">
<div className="w-1 h-1 bg-blue-500/50 rounded-full blur-[1px]"></div>
</div>
<div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_4px_rgba(16,185,129,0.6)] animate-pulse"></div>
</div>

<div className="h-14 w-full pt-3 px-6 flex justify-between items-center text-[11px] font-semibold text-slate-800 z-40 bg-gradient-to-b from-[#f8f9fb] to-transparent">
<span className="ml-1 tracking-tight">9:41</span>
<div className="flex gap-1.5 items-center opacity-80 mr-1">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M2 20h.01"></path>
<path d="M7 20v-4"></path>
<path d="M12 20v-8"></path>
<path d="M17 20V4"></path>
<path d="M22 20V4"></path>
</svg>
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20h.01"></path>
<path d="M2 8.82a15 15 0 0 1 20 0"></path>
<path d="M5 12.859a10 10 0 0 1 14 0"></path>
<path d="M8.5 16.429a5 5 0 0 1 7 0"></path>
</svg>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect fill="currentColor" height="10" rx="2" ry="2" width="16" x="2" y="7"></rect>
<line x1="22" x2="22" y1="11" y2="13"></line>
</svg>
</div>
</div>

<div className="flex-1 px-4 pt-2 pb-10 flex flex-col gap-3 overflow-hidden relative z-10 bg-gradient-to-br from-[#f8f9fb] to-[#e2e8f0]/30">
<div className="flex flex-col mb-1 ml-1 transform-gpu transition-all duration-700 hover:translate-x-1">
<h2 className="text-[22px] font-semibold text-slate-800 tracking-tight leading-none">Intelligence</h2>
<p className="text-xs text-slate-500 font-medium mt-1">All systems operational</p>
</div>

<div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_4px_12px_rgba(15,23,42,0.03),inset_0_1px_2px_rgba(255,255,255,1)] p-4 flex items-center justify-between relative border border-slate-100/80 group transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
<div className="flex flex-col gap-1">
<span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Global Uptime</span>
<span className="text-3xl font-semibold text-slate-800 tracking-tight mt-1">
              99.9<span className="text-base text-slate-400 font-medium ml-px">%</span>
</span>
</div>
<div className="relative w-[60px] h-[60px] rounded-full flex items-center justify-center">
<svg className="absolute inset-0 w-full h-full -rotate-90 transform-gpu transition-transform duration-1000 group-hover:rotate-[360deg]" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="42" stroke="#f1f5f9" strokeWidth="8"></circle>
<circle cx="50" cy="50" fill="none" r="42" stroke="#3b82f6" stroke-dasharray="264" stroke-dashoffset="26.4" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center border border-blue-100/50 text-blue-500 transform-gpu transition-transform duration-500 group-hover:scale-110">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2">
</path>
</svg>
</div>
</div>
</div>

<div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_4px_12px_rgba(15,23,42,0.03),inset_0_1px_2px_rgba(255,255,255,1)] p-4 flex flex-col relative overflow-hidden border border-slate-100/80 group transition-all duration-500 hover:shadow-lg hover:-translate-y-1 h-[168px]">
<div className="flex justify-between items-center mb-2 z-10">
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.4)] animate-pulse">
</div>
<span className="text-[10px] font-semibold text-slate-400 tracking-widest uppercase">Response</span>
</div>
<div className="text-sm font-semibold text-slate-800">
              182<span className="text-slate-400 font-normal text-[10px] ml-0.5">ms</span>
</div>
</div>
<div className="flex-1 flex items-end gap-[3px] z-10 w-full pt-2">
<div className="flex-1 bg-blue-500/10 rounded-t-[2px] h-[30%] transition-all duration-700 group-hover:h-[40%] group-hover:bg-blue-500/20">
</div>
<div className="flex-1 bg-blue-500/20 rounded-t-[2px] h-[45%] transition-all duration-700 group-hover:h-[55%] group-hover:bg-blue-500/30">
</div>
<div className="flex-1 bg-blue-500/30 rounded-t-[2px] h-[35%] transition-all duration-700 group-hover:h-[25%] group-hover:bg-blue-500/40">
</div>
<div className="flex-1 bg-blue-500/15 rounded-t-[2px] h-[55%] transition-all duration-700 group-hover:h-[65%] group-hover:bg-blue-500/25">
</div>
<div className="flex-1 bg-blue-500/40 rounded-t-[2px] h-[75%] transition-all duration-700 group-hover:h-[85%] group-hover:bg-blue-500/50">
</div>
<div className="flex-1 bg-emerald-500/60 rounded-t-[2px] h-[100%] relative transition-all duration-700 group-hover:h-[90%] group-hover:bg-emerald-500/80">
<div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-emerald-500 border border-white shadow-[0_0_8px_rgba(16,185,129,0.5)]">
</div>
</div>
<div className="flex-1 bg-blue-500/25 rounded-t-[2px] h-[65%] transition-all duration-700 group-hover:h-[55%] group-hover:bg-blue-500/35">
</div>
<div className="flex-1 bg-blue-500/10 rounded-t-[2px] h-[45%] transition-all duration-700 group-hover:h-[60%] group-hover:bg-blue-500/20">
</div>
<div className="flex-1 bg-blue-500/5 rounded-t-[2px] h-[25%] transition-all duration-700 group-hover:h-[20%] group-hover:bg-blue-500/15">
</div>
<div className="flex-1 bg-blue-500/10 rounded-t-[2px] h-[40%] transition-all duration-700 group-hover:h-[30%] group-hover:bg-blue-500/20">
</div>
<div className="flex-1 bg-blue-500/20 rounded-t-[2px] h-[50%] transition-all duration-700 group-hover:h-[45%] group-hover:bg-blue-500/30">
</div>
<div className="flex-1 bg-blue-500/15 rounded-t-[2px] h-[35%] transition-all duration-700 group-hover:h-[25%] group-hover:bg-blue-500/25">
</div>
</div>
<div className="absolute inset-0 bg-[linear-gradient(rgba(241,245,249,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(241,245,249,0.6)_1px,transparent_1px)] bg-[size:14px_14px] z-0 opacity-60">
</div>
</div>

<div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_4px_12px_rgba(15,23,42,0.03),inset_0_1px_2px_rgba(255,255,255,1)] p-4 border border-slate-100/80 flex flex-col justify-between relative overflow-hidden min-h-[120px] flex-1 group transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
<div className="flex items-center justify-between z-10">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-50/80 flex items-center justify-center border border-purple-100/50 transform-gpu transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
<svg className="text-purple-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-800 tracking-tight">Auto-Remediation</h4>
<p className="text-[10px] text-purple-500 font-medium mt-0.5">Active • 3 actions</p>
</div>
</div>
<div className="w-8 h-4 bg-purple-500 rounded-full relative shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)]">
<div className="absolute right-[2px] top-[2px] w-3 h-3 bg-white rounded-full shadow-sm"></div>
</div>
</div>
<svg className="absolute bottom-0 left-0 w-full h-12 opacity-[0.05] text-purple-600 transition-all duration-700 transform-gpu group-hover:-translate-y-1 group-hover:opacity-10" preserveaspectratio="none" viewbox="0 0 100 20">
<path d="M0,20 L0,10 C20,15 40,5 60,10 C80,15 90,5 100,5 L100,20 Z" fill="currentColor"></path>
</svg>
</div>
</div>

<div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[124px] h-[4px] bg-slate-900/10 rounded-full z-40 transition-all duration-300 hover:bg-slate-900/20 hover:scale-x-105 cursor-pointer">
</div>
</div>
</div>
</div>
</div>
</section>
<main className="z-10 w-full relative">

<section className="flex flex-col w-full max-w-[1400px] border-slate-200/30 border-t mx-auto pt-20 pb-20 items-center justify-center overflow-hidden">
<p className="text-sm text-slate-400 font-semibold tracking-wide uppercase mb-12 px-6 text-center">
    Trusted by engineering teams at scale
  </p>
<div className="w-full relative flex items-center overflow-hidden" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="marquee-track flex w-max hover:[animation-play-state:paused]" style={{animationDuration: '40s'}}>

<div className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24">

<div className="flex items-center gap-3 text-slate-400 opacity-60 transition-all duration-300 hover:opacity-100 hover:text-slate-800 cursor-pointer">
<svg className="h-9 w-9" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 4.5l6.5 11.5H5.5L12 6.5z"></path></svg>
<span className="text-2xl font-semibold tracking-tight">Acme Corp</span>
</div>

<div className="flex items-center gap-3 text-slate-400 opacity-60 transition-all duration-300 hover:opacity-100 hover:text-slate-800 cursor-pointer">
<svg className="h-9 w-9" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2l10 6-10 6-10-6 10-6zm0 15.5l-10-6v4.5l10 6 10-6v-4.5l-10 6z"></path></svg>
<span className="text-2xl font-semibold tracking-tight">DataFlow</span>
</div>

<div className="flex items-center gap-3 text-slate-400 opacity-60 transition-all duration-300 hover:opacity-100 hover:text-slate-800 cursor-pointer">
<svg className="h-9 w-9" fill="currentColor" viewbox="0 0 24 24"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-15H9v10h2V7zm4 0h-2v10h2V7z"></path></svg>
<span className="text-2xl font-semibold tracking-tight">Nexus </span>
</div>

<div className="flex items-center gap-3 text-slate-400 opacity-60 transition-all duration-300 hover:opacity-100 hover:text-slate-800 cursor-pointer">
<svg className="h-9 w-9" fill="currentColor" viewbox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"></path></svg>
<span className="text-2xl font-semibold tracking-tight">CloudSync</span>
</div>

<div className="flex items-center gap-3 text-slate-400 opacity-60 transition-all duration-300 hover:opacity-100 hover:text-slate-800 cursor-pointer">
<svg className="h-9 w-9" fill="currentColor" viewbox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path></svg>
<span className="text-2xl font-semibold tracking-tight">Sentinel</span>
</div>

<div className="flex items-center gap-3 text-slate-400 opacity-60 transition-all duration-300 hover:opacity-100 hover:text-slate-800 cursor-pointer">
<svg className="h-9 w-9" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2L2 12l10 10 10-10L12 2zm0 4.8l5.2 5.2-5.2 5.2L6.8 12 12 6.8z"></path></svg>
<span className="text-2xl font-semibold tracking-tight">Quantum</span>
</div>
</div>

<div className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24">

<div className="flex items-center gap-3 text-slate-400 opacity-60 transition-all duration-300 hover:opacity-100 hover:text-slate-800 cursor-pointer">
<svg className="h-9 w-9" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 4.5l6.5 11.5H5.5L12 6.5z"></path></svg>
<span className="text-2xl font-semibold tracking-tight">Acme Corp</span>
</div>

<div className="flex items-center gap-3 text-slate-400 opacity-60 transition-all duration-300 hover:opacity-100 hover:text-slate-800 cursor-pointer">
<svg className="h-9 w-9" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2l10 6-10 6-10-6 10-6zm0 15.5l-10-6v4.5l10 6 10-6v-4.5l-10 6z"></path></svg>
<span className="text-2xl font-semibold tracking-tight">DataFlow</span>
</div>

<div className="flex items-center gap-3 text-slate-400 opacity-60 transition-all duration-300 hover:opacity-100 hover:text-slate-800 cursor-pointer">
<svg className="h-9 w-9" fill="currentColor" viewbox="0 0 24 24"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-15H9v10h2V7zm4 0h-2v10h2V7z"></path></svg>
<span className="text-2xl font-semibold tracking-tight">Nexus AI</span>
</div>

<div className="flex items-center gap-3 text-slate-400 opacity-60 transition-all duration-300 hover:opacity-100 hover:text-slate-800 cursor-pointer">
<svg className="h-9 w-9" fill="currentColor" viewbox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"></path></svg>
<span className="text-2xl font-semibold tracking-tight">CloudSync</span>
</div>

<div className="flex items-center gap-3 text-slate-400 opacity-60 transition-all duration-300 hover:opacity-100 hover:text-slate-800 cursor-pointer">
<svg className="h-9 w-9" fill="currentColor" viewbox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path></svg>
<span className="text-2xl font-semibold tracking-tight">Sentinel</span>
</div>

<div className="flex items-center gap-3 text-slate-400 opacity-60 transition-all duration-300 hover:opacity-100 hover:text-slate-800 cursor-pointer">
<svg className="h-9 w-9" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2L2 12l10 10 10-10L12 2zm0 4.8l5.2 5.2-5.2 5.2L6.8 12 12 6.8z"></path></svg>
<span className="text-2xl font-semibold tracking-tight">Quantum</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1400px] mr-auto ml-auto pt-20 pr-6 pb-32 pl-6">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-4">
            Complete Operational Visibility
          </h2>
<p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
            See risks instantly, eliminate noise, and give your team the context
            they need to resolve incidents faster.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 min-h-[800px] gap-x-8 gap-y-8">

<div className="glass-panel md:col-span-2 flex flex-col reveal-on-scroll transition-all duration-1000 group rounded-[2rem] p-10 justify-between">
<div className="">
<div className="flex bg-slate-200/50 w-14 h-14 rounded-full mb-6 items-center justify-center">
<iconify-icon className="text-slate-700" height="24" icon="solar:cpu-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-3xl font-medium text-[var(--primary)] mb-3 tracking-tight">
                  AI Root Cause Analysis
                </h3>
<p className="text-[var(--text-muted)] text-lg">
                  Automatically correlate metrics, logs, and traces to pinpoint
                  the exact origin of an issue instantly.
                </p>
</div>
</div>

<div className="mt-10 flex flex-col md:flex-row gap-6 h-auto md:h-44">
<div className="flex-1 bg-white/60 border border-white/80 rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden shadow-sm min-h-[160px]">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40"></div>
<div className="flex justify-between items-center w-full mb-4 relative z-10">
<div className="text-xs font-medium text-slate-500 tracking-wider uppercase">
                    System Load
                  </div>
<div className="flex gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
</div>
</div>
<div className="flex items-end gap-1.5 h-full pt-4 relative z-10">
<div className="bg-slate-400/10 w-full h-[30%] rounded-t-sm"></div>
<div className="w-full bg-slate-400/20 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-slate-400/30 rounded-t-sm h-[80%]"></div>
<div className="w-full bg-slate-600/50 rounded-t-sm h-[100%] relative">
<div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-600 shadow-[0_0_10px_rgba(71,85,105,0.6)]"></div>
</div>
<div className="w-full bg-slate-400/20 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-slate-400/10 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-slate-400/10 rounded-t-sm h-[45%]"></div>
<div className="w-full bg-slate-400/5 rounded-t-sm h-[20%]"></div>
</div>
</div>

<div className="w-full md:w-1/3 bg-white/60 border border-white/80 rounded-2xl p-5 flex flex-col gap-4 shadow-sm">
<div className="text-xs font-medium text-slate-500 tracking-wider uppercase mb-1">
                  Insights Generated
                </div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 text-slate-700">
<iconify-icon height="16" icon="solar:danger-triangle-linear" width="16"></iconify-icon>
</div>
<div className="flex-1 space-y-2">
<div className="h-1.5 w-full bg-slate-300 rounded-full"></div>
<div className="h-1.5 w-2/3 bg-slate-200 rounded-full"></div>
</div>
</div>
<div className="flex items-center gap-3 opacity-60">
<div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500">
<iconify-icon height="16" icon="solar:info-circle-linear" width="16"></iconify-icon>
</div>
<div className="flex-1 space-y-2">
<div className="h-1.5 w-5/6 bg-slate-300 rounded-full"></div>
<div className="h-1.5 w-1/2 bg-slate-200 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-[2rem] p-10 flex flex-col justify-between reveal-on-scroll transition-all duration-1000 group">
<div className="">
<div className="flex bg-slate-200/50 w-14 h-14 rounded-full mb-6 items-center justify-center">
<iconify-icon className="text-slate-700" height="24" icon="solar:layers-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-2xl font-medium text-[var(--primary)] mb-3 tracking-tight">
                  Multi-Cloud Visibility
                </h3>
<p className="text-[var(--text-muted)]">
                  Unify telemetry data across your entire infrastructure.
                </p>
</div>
</div>

<div className="mt-10 relative h-44 w-full flex items-end justify-center perspective-[1000px]">
<div className="absolute w-[85%] bottom-16 h-24 bg-white/40 border border-white/60 rounded-xl transform transition-transform duration-500 group-hover:-translate-y-4"></div>
<div className="absolute w-[92%] bottom-8 h-24 bg-white/60 border border-white/80 rounded-xl backdrop-blur-md shadow-sm transform transition-transform duration-500 group-hover:-translate-y-2"></div>
<div className="absolute w-full bottom-0 h-24 bg-white/90 border border-white rounded-xl backdrop-blur-xl shadow-xl flex items-center px-6 gap-4 transform transition-transform duration-500">
<div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shadow-inner border border-slate-200">
<iconify-icon className="text-slate-600" height="24" icon="solar:server-square-linear" width="24"></iconify-icon>
</div>
<div className="space-y-2.5 flex-1">
<div className="h-2.5 bg-slate-300 w-1/2 rounded-full"></div>
<div className="h-2 w-1/3 bg-slate-200 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="glass-panel flex flex-col reveal-on-scroll transition-all duration-1000 group rounded-[2rem] p-10 justify-between">
<div className="">
<div className="flex bg-slate-200/50 w-14 h-14 rounded-full mb-6 items-center justify-center">
<iconify-icon className="text-slate-700" height="24" icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-2xl font-medium text-[var(--primary)] mb-3 tracking-tight">
                  Automated Runbooks
                </h3>
<p className="text-[var(--text-muted)]">
                  Trigger self-healing workflows without human intervention.
                </p>
</div>
</div>

<div className="mt-10 space-y-3">

<div className="flex items-center justify-between bg-white/70 border border-white p-4 rounded-xl shadow-sm backdrop-blur-md">
<div className="flex items-center gap-3.5">
<div className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">
<iconify-icon className="text-slate-600" height="16" icon="solar:code-circle-linear" width="16"></iconify-icon>
</div>
<div className="h-2.5 w-24 bg-slate-700 rounded-full"></div>
</div>
<div className="w-11 h-6 bg-slate-700 rounded-full relative shadow-inner">
<div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow border border-slate-200"></div>
</div>
</div>

<div className="flex items-center justify-between bg-white/40 border border-white/60 p-4 rounded-xl backdrop-blur-sm">
<div className="flex items-center gap-3.5">
<div className="w-7 h-7 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400">
<iconify-icon height="16" icon="solar:restart-linear" width="16"></iconify-icon>
</div>
<div className="h-2 w-28 bg-slate-400 rounded-full"></div>
</div>
<div className="w-11 h-6 bg-slate-200 rounded-full relative shadow-inner border border-slate-300">
<div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-sm border border-slate-100"></div>
</div>
</div>
</div>
</div>

<div className="glass-panel md:col-span-2 flex flex-col reveal-on-scroll transition-all duration-1000 group rounded-[2rem] p-10 gap-6">

<div className="">
<div className="flex bg-slate-200/50 w-14 h-14 rounded-full mb-6 items-center justify-center">
<iconify-icon className="text-slate-700" height="24" icon="solar:earth-linear" width="24"></iconify-icon>
</div>

<h3 className="text-2xl font-medium text-slate-900 mb-2">
                Global Edge Tracing
              </h3>

<p className="text-slate-500 max-w-lg">
                Distributed tracing infrastructure with ultra-low latency.
                Follow requests across microservices and catch bottlenecks in
                real-time.
              </p>
</div>

<div className="mt-4 flex flex-col md:flex-row gap-5 h-auto md:h-48">

<div className="flex-[2] bg-white/60 border border-white/80 rounded-2xl relative overflow-hidden flex items-center justify-center shadow-sm min-h-[160px]">
<svg className="absolute inset-0 w-full h-full opacity-30" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M 15,30 L 40,60 L 65,35 L 85,75" fill="none" stroke="#cbd5e1" stroke-dasharray="2 2" strokeWidth="0.5"></path>
<path d="M 40,60 L 55,85" fill="none" stroke="#cbd5e1" stroke-dasharray="2 2" strokeWidth="0.5"></path>
</svg>
<div className="absolute top-[30%] left-[15%] w-3.5 h-3.5 rounded-full bg-slate-400 shadow-[0_0_15px_rgba(148,163,184,0.4)] border border-white"></div>
<div className="absolute top-[60%] left-[40%] w-5 h-5 rounded-full bg-white border-2 border-slate-200 shadow-[0_0_20px_rgba(148,163,184,0.3)] flex items-center justify-center">
<div className="w-2 h-2 bg-slate-500 rounded-full animate-ping"></div>
<div className="w-2 h-2 bg-slate-500 rounded-full absolute"></div>
</div>
<div className="absolute top-[35%] left-[65%] w-3 h-3 rounded-full bg-slate-300 shadow-[0_0_10px_rgba(148,163,184,0.3)] border border-white"></div>
<div className="absolute top-[75%] left-[85%] w-3.5 h-3.5 rounded-full bg-slate-400 shadow-[0_0_15px_rgba(148,163,184,0.4)] border border-white"></div>
<div className="absolute top-[85%] left-[55%] w-2.5 h-2.5 rounded-full bg-slate-300"></div>
</div>

<div className="flex-[1] flex flex-col gap-4">
<div className="bg-white/60 border border-white/80 rounded-xl p-5 flex-1 flex flex-col justify-center shadow-sm">
<div className="text-xs font-medium text-slate-500 tracking-wider uppercase mb-1">
                    Global Latency
                  </div>
<div className="flex items-baseline gap-1.5">
<span className="text-3xl font-medium text-slate-800">12</span>
<span className="text-sm font-medium text-slate-500">ms</span>
</div>
<div className="mt-3 h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-slate-400 w-[15%] rounded-full"></div>
</div>
</div>
<div className="bg-white/60 border border-white/80 rounded-xl p-5 flex-1 flex flex-col justify-center shadow-sm">
<div className="text-xs font-medium text-slate-500 tracking-wider uppercase mb-1">
                    Active Traces
                  </div>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-medium text-slate-800">
                      3,492
                    </span>
</div>
<div className="mt-3 flex gap-1.5">
<div className="h-2 flex-1 bg-slate-400/20 rounded-full"></div>
<div className="h-2 flex-1 bg-slate-400/40 rounded-full"></div>
<div className="h-2 flex-1 bg-slate-400/60 rounded-full"></div>
<div className="h-2 flex-[0.5] bg-slate-200 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-48 overflow-hidden bg-slate-50/30 pt-32 pb-32 relative border-t border-slate-200/40" id="liquid-timeline">
<style>
          @keyframes breathe {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.04); }
          }
          .animate-breathe { animation: breathe 6s ease-in-out infinite; }
          .shadow-skeuo {
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03), 0 12px 24px rgba(0, 0, 0, 0.02), inset 0 1px 0 rgba(255, 255, 255, 1);
          }
          .shadow-skeuo:hover {
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05), 0 20px 40px rgba(0, 0, 0, 0.03), inset 0 1px 0 rgba(255, 255, 255, 1);
          }
          #liquid-timeline .tl-title, #liquid-timeline .tl-step {
            opacity: 0; transform: translateY(14px); filter: blur(6px); transition: opacity 900ms ease, transform 900ms ease, filter 900ms ease; will-change: opacity, transform, filter;
          }
          #liquid-timeline.is-inview .tl-title, #liquid-timeline .tl-step.is-inview {
            opacity: 1; transform: translateY(0); filter: blur(0);
          }
          #liquid-timeline .tl-spine {
            position: absolute; left: 50%; top: 0; bottom: 0; width: 1px; transform: translateX(-50%); background: rgba(226, 232, 240, 0.35); overflow: hidden; display: none;
          }
          @media (min-width: 768px) { #liquid-timeline .tl-spine { display: block; } }
          #liquid-timeline .tl-spine::after {
            content: ""; position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(148, 163, 184, 0), rgba(148, 163, 184, 0.55), rgba(148, 163, 184, 0)); transform-origin: top; transform: scaleY(0); filter: blur(0.2px); transition: transform 1300ms cubic-bezier(0.2, 0.8, 0.2, 1); will-change: transform;
          }
          #liquid-timeline.is-inview .tl-spine::after { transform: scaleY(1); }
          #liquid-timeline .tl-node {
            transition: transform 700ms ease, box-shadow 900ms ease, border-color 900ms ease; will-change: transform, box-shadow;
          }
          #liquid-timeline .tl-step.is-inview .tl-node {
            transform: scale(1.08); border-color: rgba(226, 232, 240, 0.95); box-shadow: 0 8px 22px rgba(0, 0, 0, 0.06), inset 0 2px 4px rgba(255, 255, 255, 0.95);
          }
          #liquid-timeline .tl-halo {
            opacity: 0; transform: scale(0.92); transition: opacity 900ms ease, transform 900ms ease;
          }
          #liquid-timeline .tl-step.is-inview .tl-halo { opacity: 1; transform: scale(1); }
          @media (prefers-reduced-motion: reduce) {
            #liquid-timeline .tl-title, #liquid-timeline .tl-step { opacity: 1 !important; transform: none !important; filter: none !important; transition: none !important; }
            #liquid-timeline .tl-spine::after { transform: scaleY(1) !important; transition: none !important; }
            #liquid-timeline .tl-node, #liquid-timeline .tl-halo { transition: none !important; }
          }
        </style>
<div className="max-w-6xl mx-auto px-6 relative z-20 text-center mb-16 md:mb-24 tl-title">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 border border-slate-200/70 backdrop-blur-md text-[11px] font-medium tracking-widest uppercase text-slate-500 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
<span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
            Workflow
          </div>
<h2 className="mt-6 text-4xl md:text-5xl font-medium text-slate-900 tracking-tight leading-[0.95]">
            From incident to resolution in seconds.
          </h2>
<p className="mt-4 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
            Automated workflows eliminate manual debugging and accelerate your
            mean time to recovery.
          </p>
</div>
<div aria-hidden="true" className="tl-spine" style={{maskImage: 'linear-gradient(180deg, transparent, black 30%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 30%, black 100%, transparent)'}}></div>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-[100px] opacity-40 pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col gap-24 md:gap-40">

<div className="tl-step group relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start" style={{transitionDelay: '0ms'}}>
<div className="absolute left-1/2 top-[3.5rem] -translate-x-1/2 hidden md:flex items-center justify-center z-20">
<div className="tl-halo absolute w-24 h-24 border border-slate-100/50 rounded-full pointer-events-none"></div>
<div className="tl-node w-14 h-14 bg-white rounded-full border border-slate-100 shadow-[0_4px_12px_rgba(0,0,0,0.04),inset_0_2px_4px_rgba(255,255,255,0.9)] flex items-center justify-center animate-breathe group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-slate-400" height="20" icon="solar:download-square-linear" width="20"></iconify-icon>
</div>
</div>
<div className="md:text-right md:pr-24 md:mt-0 mt-8">
<div className="relative bg-white rounded-2xl p-8 md:p-10 shadow-skeuo border border-slate-100/80 transition-transform duration-500 group-hover:-translate-y-2">
<div className="md:hidden absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full border border-slate-100 shadow-sm flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-slate-300 rounded-full"></div>
</div>
<div className="text-[10px] font-medium tracking-[0.25em] text-slate-400 uppercase mb-4">
                  Phase 01
                </div>
<h3 className="text-3xl font-medium text-slate-800 mb-4 tracking-tight">
                  Ingest &amp; Detect
                </h3>
<p className="text-slate-500 leading-relaxed text-lg font-light">
                  Orion continuously ingests metrics and logs across your entire
                  infrastructure, immediately detecting anomalies before users
                  notice.
                </p>
</div>
</div>
<div className="hidden md:block"></div>
</div>

<div className="tl-step group relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start" style={{transitionDelay: '120ms'}}>
<div className="absolute left-1/2 top-[3.5rem] -translate-x-1/2 hidden md:flex items-center justify-center z-20">
<div className="tl-halo absolute w-24 h-24 border border-slate-100/50 rounded-full pointer-events-none"></div>
<div className="tl-node w-14 h-14 bg-white rounded-full border border-slate-100 shadow-[0_4px_12px_rgba(0,0,0,0.04),inset_0_2px_4px_rgba(255,255,255,0.9)] flex items-center justify-center animate-breathe group-hover:scale-105 transition-transform duration-500" style={{animationDelay: '1.5s'}}>
<iconify-icon className="text-slate-400" height="20" icon="solar:cpu-linear" width="20"></iconify-icon>
</div>
</div>
<div className="hidden md:block"></div>
<div className="md:text-left md:pl-24 mt-8 md:mt-0">
<div className="relative bg-white rounded-2xl p-8 md:p-10 shadow-skeuo border border-slate-100/80 transition-transform duration-500 group-hover:-translate-y-2">
<div className="md:hidden absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full border border-slate-100 shadow-sm flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-slate-300 rounded-full"></div>
</div>
<div className="text-[10px] font-medium tracking-[0.25em] text-slate-400 uppercase mb-4">
                  Phase 02
                </div>
<h3 className="text-3xl font-medium text-slate-800 mb-4 tracking-tight">
                  AI Contextualization
                </h3>
<p className="text-slate-500 leading-relaxed text-lg font-light">
                  The AI engine groups related alerts, strips away noise, and
                  generates a human-readable summary of the root cause in
                  real-time.
                </p>
</div>
</div>
</div>

<div className="tl-step group relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start" style={{transitionDelay: '240ms'}}>
<div className="absolute left-1/2 top-[3.5rem] -translate-x-1/2 hidden md:flex items-center justify-center z-20">
<div className="tl-halo absolute w-24 h-24 border border-slate-100/50 rounded-full pointer-events-none"></div>
<div className="tl-node w-14 h-14 bg-white rounded-full border border-slate-100 shadow-[0_4px_12px_rgba(0,0,0,0.04),inset_0_2px_4px_rgba(255,255,255,0.9)] flex items-center justify-center animate-breathe group-hover:scale-105 transition-transform duration-500" style={{animationDelay: '3s'}}>
<iconify-icon className="text-slate-400" height="20" icon="solar:settings-linear" width="20"></iconify-icon>
</div>
</div>
<div className="md:text-right md:pr-24 mt-8 md:mt-0">
<div className="relative bg-white rounded-2xl p-8 md:p-10 shadow-skeuo border border-slate-100/80 transition-transform duration-500 group-hover:-translate-y-2">
<div className="md:hidden absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full border border-slate-100 shadow-sm flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-slate-300 rounded-full"></div>
</div>
<div className="text-[10px] font-medium tracking-[0.25em] text-slate-400 uppercase mb-4">
                  Phase 03
                </div>
<h3 className="text-3xl font-medium text-slate-800 mb-4 tracking-tight">
                  Automate &amp; Resolve
                </h3>
<p className="text-slate-500 leading-relaxed text-lg font-light">
                  Orion triggers predefined runbooks to automatically scale
                  resources, roll back deploys, or alert the right on-call
                  engineer instantly.
                </p>
</div>
</div>
<div className="hidden md:block"></div>
</div>
</div>

</section>

<section className="min-h-screen flex overflow-hidden bg-slate-50/30 pt-32 pb-32 relative items-center justify-center">
<style>
    @keyframes orbit-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes orbit-counter {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(-360deg);
      }
    }

    @keyframes logo-pulse {
      0%, 100% {
        transform: scale(1);
        opacity: 0.7;
      }
      50% {
        transform: scale(1.04);
        opacity: 1;
      }
    }

    .animate-orbit-track {
      animation: orbit-spin 28s linear infinite;
    }

    .animate-orbit-card {
      animation: orbit-counter 28s linear infinite;
    }

    .animate-logo-pulse {
      animation: logo-pulse 4s ease-in-out infinite;
    }
  </style>
<div className="absolute top-16 left-1/2 -translate-x-1/2 text-center z-20 px-6">
<h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-4">
      Connects with your stack
    </h2>
<p className="text-lg text-slate-500">
      Orion integrates seamlessly with the tools your team already uses.
    </p>
</div>
<div className="relative w-[800px] h-[800px] scale-[0.45] md:scale-75 lg:scale-100 transition-transform duration-700 ease-out flex items-center justify-center mt-10">

<div className="relative z-10 w-40 h-40 rounded-full bg-[#eef2f6] border border-white/80 shadow-[0_25px_60px_rgba(15,23,42,0.08),inset_8px_8px_18px_rgba(255,255,255,0.95),inset_-10px_-10px_20px_rgba(148,163,184,0.12)] flex items-center justify-center">

<div className="absolute inset-0 rounded-full bg-white/40 blur-xl scale-110 pointer-events-none"></div>

<div className="relative w-[112px] h-[112px] rounded-full border border-slate-300/40 bg-gradient-to-br from-white to-slate-100 shadow-[inset_0_2px_10px_rgba(255,255,255,0.95),0_10px_24px_rgba(15,23,42,0.04)] flex items-center justify-center animate-logo-pulse">

<div className="relative w-[58px] h-[58px]">

<div className="absolute inset-0 rounded-full border border-slate-400/40"></div>

<div className="absolute inset-[7px] rounded-full border border-slate-500/25 rotate-45"></div>

<div className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-slate-700 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_0_6px_rgba(148,163,184,0.08)]"></div>

<div className="absolute top-[4px] left-1/2 w-2.5 h-2.5 rounded-full bg-slate-500 -translate-x-1/2"></div>

<div className="absolute bottom-[8px] right-[6px] w-2 h-2 rounded-full bg-slate-400"></div>

<div className="absolute bottom-[10px] left-[7px] w-1.5 h-1.5 rounded-full bg-slate-300"></div>
</div>
</div>

<div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-center">
<span className="text-[11px] uppercase tracking-[0.35em] text-slate-400 font-medium">ORION</span>
</div>
</div>

<div className="absolute inset-0 rounded-full border border-slate-900/[0.03] animate-orbit-track">

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-24 flex items-center justify-center">
<div className="animate-orbit-card w-full">
<div className="bg-white/70 backdrop-blur-xl border border-white/60 p-4 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 cursor-default group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon className="text-slate-600" height="20" icon="solar:cloud-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-800 tracking-tight">
                  Cloud Infrastructure
                </h3>
<p className="text-xs text-slate-500 font-medium">
                  AWS, GCP, Azure
                </p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-64 h-24 flex items-center justify-center">
<div className="animate-orbit-card w-full">
<div className="bg-white/70 backdrop-blur-xl border border-white/60 p-4 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 cursor-default group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon className="text-slate-600" height="20" icon="solar:bell-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-800 tracking-tight">
                  Incident Management
                </h3>
<p className="text-xs text-slate-500 font-medium">
                  PagerDuty, Opsgenie
                </p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-64 h-24 flex items-center justify-center">
<div className="animate-orbit-card w-full">
<div className="bg-white/70 backdrop-blur-xl border border-white/60 p-4 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 cursor-default group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon className="text-slate-600" height="20" icon="solar:chart-square-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-800 tracking-tight">
                  Telemetry &amp; Metrics
                </h3>
<p className="text-xs text-slate-500 font-medium">
                  Datadog, New Relic
                </p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-24 flex items-center justify-center">
<div className="animate-orbit-card w-full">
<div className="bg-white/70 backdrop-blur-xl border border-white/60 p-4 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 cursor-default group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon className="text-slate-600" height="20" icon="solar:chat-line-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-800 tracking-tight">
                  Collaboration
                </h3>
<p className="text-xs text-slate-500 font-medium">
                  Slack, Microsoft Teams
                </p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute inset-[180px] border border-slate-900/[0.02] rounded-full pointer-events-none"></div>
<div className="absolute inset-[280px] border border-slate-900/[0.015] rounded-full pointer-events-none"></div>
</div>
</section>

<section className="overflow-hidden md:pt-32 md:pb-32 bg-slate-50/50 max-w-[1400px] mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
<div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
<div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-slate-200/40 rounded-full blur-[100px] mix-blend-multiply opacity-50 animate-blob"></div>
<div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-slate-100/60 rounded-full blur-[80px] mix-blend-multiply opacity-60 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-white rounded-full blur-[100px] opacity-60"></div>
</div>
<div className="relative z-10 max-w-3xl mx-auto text-center mb-10 md:mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-slate-200/60 backdrop-blur-md text-[10px] font-medium tracking-widest uppercase text-slate-500 shadow-sm cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
            Platform Modules
          </div>
<h2 className="mt-6 text-4xl md:text-5xl font-medium text-slate-900 tracking-tight leading-[1.1]">
            Everything you need.
            <br/>
            In one unified console.
          </h2>
<p className="mt-4 text-lg text-slate-500 font-light max-w-xl mx-auto leading-relaxed">
            Hover to explore the components of the Orion platform.
          </p>
</div>
<div className="relative z-10 w-full max-w-[1000px] h-[500px] md:h-[600px] mx-auto flex items-center justify-center perspective-[1200px] group cursor-pointer" id="gallery-interaction" onclick="this.classList.toggle('active')">
<style>
            .transition-spring { transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1); }
            @media (min-width: 768px) {
              #gallery-interaction:hover .card-scatter-1, #gallery-interaction.active .card-scatter-1 { transform: translate(-130%, -100%) rotate(-4deg); opacity: 1; }
              #gallery-interaction:hover .card-scatter-2, #gallery-interaction.active .card-scatter-2 { transform: translate(130%, -90%) rotate(3deg); opacity: 1; }
              #gallery-interaction:hover .card-scatter-3, #gallery-interaction.active .card-scatter-3 { transform: translate(-110%, 100%) rotate(2deg); opacity: 1; }
              #gallery-interaction:hover .card-scatter-4, #gallery-interaction.active .card-scatter-4 { transform: translate(110%, 95%) rotate(-3deg); opacity: 1; }
            }
            @media (max-width: 767px) {
              #gallery-interaction.active .card-scatter-1 { transform: translateY(-130px) scale(0.95); opacity: 1; z-index: 40; }
              #gallery-interaction.active .card-scatter-2 { transform: translateY(130px) scale(0.95); opacity: 1; z-index: 40; }
              #gallery-interaction.active .card-scatter-3 { transform: translateY(-240px) scale(0.85); opacity: 1; z-index: 30; }
              #gallery-interaction.active .card-scatter-4 { transform: translateY(240px) scale(0.85); opacity: 1; z-index: 30; }
            }
          </style>

<div className="relative z-50 w-[300px] md:w-[360px] bg-white/70 backdrop-blur-2xl border border-white/80 rounded-[32px] p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] group-hover:scale-105 group-hover:-translate-y-2">
<div className="flex justify-between items-center mb-6">
<span className="text-[10px] font-medium tracking-[0.2em] uppercase text-slate-400">
                Core
              </span>
<div className="w-8 h-8 rounded-full bg-slate-100/50 border border-white flex items-center justify-center text-slate-400">
<iconify-icon height="16" icon="solar:monitor-linear" width="16"></iconify-icon>
</div>
</div>
<h3 className="text-2xl font-medium text-slate-900 tracking-tight">
              Command Center
            </h3>
<p className="mt-3 text-sm text-slate-500 leading-relaxed font-light">
              Your single pane of glass for real-time observability across all
              distributed systems.
            </p>
<div className="overflow-hidden flex flex-col bg-white/50 w-full h-32 border-white/60 border rounded-2xl mt-8 p-3 relative shadow-inner gap-2">
<div className="w-1/2 h-2 bg-slate-200/80 rounded-full"></div>
<div className="flex-1 bg-slate-100/50 w-full border-slate-200/30 border rounded-xl relative">
<div className="absolute top-3 left-3 right-3 h-2 bg-white rounded-full w-2/3 shadow-sm"></div>
</div>
</div>
</div>

<div className="card-scatter-1 absolute w-[260px] md:w-[280px] bg-white/60 backdrop-blur-xl border border-white/60 rounded-[28px] p-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] opacity-0 transition-all duration-700 transition-spring z-40 pointer-events-none group-hover:pointer-events-auto">
<div className="flex items-center justify-between mb-4">
<span className="text-[10px] font-medium tracking-[0.2em] uppercase text-slate-400">
                Observe
              </span>
<div className="w-7 h-7 rounded-full bg-blue-50/50 border border-blue-100/50 flex items-center justify-center text-blue-500">
<iconify-icon height="14" icon="solar:folder-with-files-linear" width="14"></iconify-icon>
</div>
</div>
<h4 className="text-lg font-medium text-slate-800 tracking-tight">
              Log Explorer
            </h4>
<div className="mt-4 flex items-center gap-3 bg-white/40 p-2.5 rounded-xl border border-white/50">
<div className="h-1.5 w-12 bg-slate-300/50 rounded-full"></div>
<div className="w-8 h-5 bg-blue-500 rounded-full ml-auto relative shadow-sm">
<div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"></div>
</div>
</div>
</div>

<div className="card-scatter-2 md:w-[280px] transition-all duration-700 transition-spring delay-75 z-30 pointer-events-none group-hover:pointer-events-auto bg-white/60 opacity-0 w-[260px] border-white/60 border rounded-[28px] p-6 absolute shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] backdrop-blur-xl">
<div className="flex items-center justify-between mb-4">
<span className="text-[10px] font-medium tracking-[0.2em] uppercase text-slate-400">
                Analyze
              </span>
<div className="w-7 h-7 rounded-full bg-purple-50/50 border border-purple-100/50 flex items-center justify-center text-purple-500">
<iconify-icon height="14" icon="solar:share-circle-linear" width="14"></iconify-icon>
</div>
</div>
<h4 className="text-lg font-medium text-slate-800 tracking-tight">
              Trace Viewer
            </h4>
<div className="mt-4 grid grid-cols-3 gap-2">
<div className="flex-1 bg-slate-100/50 w-full border-slate-200/30 border rounded-xl relative"></div>
<div className="flex-1 bg-slate-100/50 w-full border-slate-200/30 border rounded-xl relative"></div>
<div className="aspect-square bg-white/50 rounded-lg border border-white/60"></div>
</div>
</div>

<div className="card-scatter-3 absolute w-[260px] md:w-[280px] bg-white/60 backdrop-blur-xl border border-white/60 rounded-[28px] p-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] opacity-0 transition-all duration-700 transition-spring delay-100 z-20 pointer-events-none group-hover:pointer-events-auto">
<div className="flex items-center justify-between mb-4">
<span className="text-[10px] font-medium tracking-[0.2em] uppercase text-slate-400">
                Detect
              </span>
<div className="w-7 h-7 rounded-full bg-emerald-50/50 border border-emerald-100/50 flex items-center justify-center text-emerald-500">
<iconify-icon height="14" icon="solar:danger-triangle-linear" width="14"></iconify-icon>
</div>
</div>
<h4 className="text-lg font-medium text-slate-800 tracking-tight">
              Smart Alerts
            </h4>
<div className="mt-4 flex items-end gap-1.5 h-10 px-1">
<div className="bg-slate-500/20 w-1/4 h-[40%] rounded-t-sm"></div>
<div className="bg-slate-500/40 w-1/4 h-[70%] rounded-t-sm"></div>
<div className="bg-slate-500/30 w-1/4 h-[50%] rounded-t-sm"></div>
<div className="bg-slate-500/50 w-1/4 h-[90%] rounded-t-sm"></div>
</div>
</div>

<div className="card-scatter-4 absolute w-[260px] md:w-[280px] bg-white/60 backdrop-blur-xl border border-white/60 rounded-[28px] p-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] opacity-0 transition-all duration-700 transition-spring delay-150 z-10 pointer-events-none group-hover:pointer-events-auto">
<div className="flex items-center justify-between mb-4">
<span className="text-[10px] font-medium tracking-[0.2em] uppercase text-slate-400">
                Act
              </span>
<div className="w-7 h-7 rounded-full bg-amber-50/50 border border-amber-100/50 flex items-center justify-center text-amber-500">
<iconify-icon height="14" icon="solar:play-circle-linear" width="14"></iconify-icon>
</div>
</div>
<h4 className="text-lg font-medium text-slate-800 tracking-tight">
              Runbook Builder
            </h4>
<div className="overflow-hidden flex flex-col bg-white/50 w-full h-12 border-white/60 border rounded-full mt-8 p-3 relative shadow-inner gap-2">
<div className="animate-pulse bg-slate-400 w-7 h-7 rounded-full shadow-sm"></div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/30 bg-white/5 backdrop-blur-sm overflow-hidden">
<div className="marquee-track whitespace-nowrap" style={{maskImage: 'linear-gradient(90deg, transparent, black 30%, black 60%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 30%, black 60%, transparent)'}}>
<span className="text-[8rem] text-[var(--primary)] font-bold opacity-5 mx-12">
            SYSTEM MONITORING
          </span>
<span className="text-[8rem] font-bold text-[var(--primary)] opacity-5 mx-12">
            AI INSIGHTS
          </span>
<span className="text-[8rem] font-bold text-[var(--primary)] opacity-5 mx-12">
            AUTOMATED WORKFLOWS
          </span>
<span className="text-[8rem] font-bold text-[var(--primary)] opacity-5 mx-12">
            INCIDENT DETECTION
          </span>
</div>
</section>

<section className="max-w-[1400px] mr-auto ml-auto pt-32 pr-6 pb-32 pl-6 relative">
<div className="text-center mb-20 md:mb-24 reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-6 leading-[1.1]">
            Built for modern reliability teams
          </h2>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
            Everything engineers need to maintain high availability, without the
            configuration headaches.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[600px]">

<div className="glass-panel rounded-[2.5rem] p-10 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-700 reveal-on-scroll shadow-[0_18px_55px_rgba(15,23,42,0.06)] hover:shadow-[0_28px_85px_rgba(15,23,42,0.09)]">
<div className="">
<div className="w-14 h-14 rounded-2xl bg-white/70 border border-slate-200/70 backdrop-blur-md flex items-center justify-center mb-8 text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.06)] group-hover:bg-white/80 group-hover:text-slate-900 transition-colors">
<iconify-icon height="24" icon="solar:eye-linear" width="24"></iconify-icon>
</div>
<h3 className="text-3xl font-medium text-slate-900 mb-4 tracking-tight">
                Observability
              </h3>
<p className="text-slate-500 leading-relaxed">
                Metrics, logs, and traces centralized. Powerful query
                capabilities instantly slice through petabytes of telemetry
                data.
              </p>
</div>
<div className="mt-12 relative w-full aspect-[4/3] bg-white/50 border border-white/60 rounded-2xl overflow-hidden p-5 flex flex-col gap-3 shadow-inner group-hover:bg-white/70 transition-colors">
<div className="w-full h-1/4 bg-slate-200/50 rounded-lg border border-slate-300/20"></div>
<div className="flex-1 flex gap-3">
<div className="w-1/3 bg-slate-200/50 rounded-lg border border-slate-300/20"></div>
<div className="flex-1 bg-slate-100/50 rounded-lg border border-slate-300/20 flex flex-col gap-2 p-2">
<div className="w-2/3 h-2 bg-slate-200 rounded-full"></div>
<div className="w-full h-2 bg-slate-200/50 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-[2.5rem] p-10 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-700 reveal-on-scroll delay-100 shadow-[0_18px_55px_rgba(15,23,42,0.06)] hover:shadow-[0_28px_85px_rgba(15,23,42,0.09)]">
<div className="">
<div className="w-14 h-14 rounded-2xl bg-white/70 border border-slate-200/70 backdrop-blur-md flex items-center justify-center mb-8 text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.06)] group-hover:bg-white/80 group-hover:text-slate-900 transition-colors">
<iconify-icon height="24" icon="solar:magnifer-linear" width="24"></iconify-icon>
</div>
<h3 className="text-3xl font-medium text-slate-900 mb-4 tracking-tight">
                AIOps
              </h3>
<p className="text-slate-500 leading-relaxed">
                Dramatically reduce alert fatigue. Machine learning models group
                related incidents and surface predictive warnings.
              </p>
</div>
<div className="aspect-[4/3] overflow-hidden flex group-hover:bg-white/70 transition-colors bg-white/50 w-full border-white/60 border rounded-2xl mt-12 relative shadow-inner items-center justify-center">
<div className="w-full px-8">
<div className="relative w-full h-2 bg-slate-200 rounded-full overflow-hidden">
<div className="absolute left-0 top-0 h-full w-1/3 bg-slate-900/80 rounded-full"></div>
</div>
<div className="mt-6 flex justify-between items-center relative">
<div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
<div className="w-2 h-2 bg-slate-300 rounded-full"></div>
</div>
<div className="w-10 h-10 rounded-full bg-slate-900 shadow-[0_10px_30px_rgba(15,23,42,0.18)] flex items-center justify-center scale-110 ring-4 ring-white/60">
<iconify-icon className="text-white" height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
<div className="w-2 h-2 bg-slate-200 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-[2.5rem] p-10 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-700 reveal-on-scroll delay-200 shadow-[0_18px_55px_rgba(15,23,42,0.06)] hover:shadow-[0_28px_85px_rgba(15,23,42,0.09)]">
<div className="">
<div className="w-14 h-14 rounded-2xl bg-white/70 border border-slate-200/70 backdrop-blur-md flex items-center justify-center mb-8 text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.06)] group-hover:bg-white/80 group-hover:text-slate-900 transition-colors">
<iconify-icon className="" height="24" icon="solar:magic-stick-linear" width="24"></iconify-icon>
</div>
<h3 className="text-3xl font-medium text-slate-900 mb-4 tracking-tight">
                Automation
              </h3>
<p className="text-slate-500 leading-relaxed">
                Turn tribal knowledge into code. Build low-code workflows that
                auto-remediate common infrastructure failures.
              </p>
</div>
<div className="mt-12 relative w-full aspect-[4/3] bg-white/50 border border-white/60 rounded-2xl overflow-hidden shadow-inner group-hover:bg-white/70 transition-colors flex items-center justify-center">
<div className="relative w-28 h-20 bg-white/40 backdrop-blur-md border border-white/60 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] transform -rotate-12 translate-y-2 translate-x-2 z-10 transition-transform duration-700 group-hover:-rotate-[15deg] group-hover:translate-x-0"></div>
<div className="relative w-28 h-20 bg-white/60 backdrop-blur-xl border border-white/80 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.1)] transform rotate-6 -translate-x-4 -translate-y-2 z-20 transition-transform duration-700 group-hover:rotate-[10deg] group-hover:-translate-y-4"></div>
</div>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 pb-32">
<div className="text-center mb-16 reveal-on-scroll">
<span className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-200 bg-white/70 text-[11px] tracking-[0.2em] uppercase text-slate-500 mb-5">
            Testimonials
          </span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight mb-4">
            Loved by engineering leaders
          </h2>
<p className="max-w-2xl mx-auto text-slate-500 text-base md:text-lg leading-relaxed font-light">
            Teams rely on Orion to reduce noise, accelerate incident response,
            and bring clarity to complex operations.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-[2rem] reveal-on-scroll flex flex-col justify-between min-h-[320px] border border-white/60 bg-white/70 backdrop-blur-xl shadow-[0_20px_80px_rgba(15,23,42,0.06)] hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(15,23,42,0.1)] transition-all duration-500">
<div>
<div className="flex items-center justify-between mb-7">
<div className="flex gap-1 text-amber-400">
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  5.0 Rating
                </div>
</div>
<p className="text-slate-700 text-[17px] leading-8 font-light mb-10">
                "Orion cut our MTTR by 60% in the first month. The AI root cause
                analysis is like having our best principal engineer on-call
                24/7."
              </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-slate-200/70">
<img alt="Portrait of Sarah Jenkins" className="w-14 h-14 rounded-full object-cover border border-white shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div>
<p className="text-sm font-medium text-slate-900">Sarah Jenkins</p>
<p className="text-sm text-slate-500">VP Engineering, DataFlow</p>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-[2rem] reveal-on-scroll delay-100 flex flex-col justify-between min-h-[320px] border border-white/60 bg-white/70 backdrop-blur-xl shadow-[0_20px_80px_rgba(15,23,42,0.06)] hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(15,23,42,0.1)] transition-all duration-500">
<div>
<div className="flex items-center justify-between mb-7">
<div className="flex gap-1 text-amber-400">
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  Enterprise
                </div>
</div>
<p className="text-slate-700 text-[17px] leading-8 font-light mb-10">
                "We replaced three legacy monitoring tools with Orion. The
                interface is beautiful, but the automated runbooks are the real
                game changer."
              </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-slate-200/70">
<img alt="Portrait of Michael Chang" className="w-14 h-14 rounded-full object-cover border border-white shadow-sm" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div>
<p className="text-sm font-medium text-slate-900">Michael Chang</p>
<p className="text-sm text-slate-500">Director of SRE, Acme Corp</p>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-[2rem] reveal-on-scroll delay-200 flex flex-col justify-between min-h-[320px] border border-white/60 bg-white/70 backdrop-blur-xl shadow-[0_20px_80px_rgba(15,23,42,0.06)] hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(15,23,42,0.1)] transition-all duration-500">
<div>
<div className="flex items-center justify-between mb-7">
<div className="flex gap-1 text-amber-400">
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  Fast Impact
                </div>
</div>
<p className="text-slate-700 text-[17px] leading-8 font-light mb-10">
                "Alert fatigue was destroying our team's morale. Orion grouped
                the noise so perfectly that our paging volume dropped
                immediately."
              </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-slate-200/70">
<img alt="Portrait of Elena Rostova" className="w-14 h-14 rounded-full object-cover border border-white shadow-sm" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div>
<p className="text-sm font-medium text-slate-900">Elena Rostova</p>
<p className="text-sm text-slate-500">Platform Lead, Sentinel</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1200px] mx-auto px-6 pb-32">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-4xl font-medium text-slate-900 tracking-tight mb-4">
            Transparent Pricing
          </h2>
<p className="text-lg text-slate-500 font-light">
            Start for free. Scale as your infrastructure grows.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="glass-panel p-10 rounded-[2rem] reveal-on-scroll flex flex-col border border-white/60">
<h3 className="text-xl font-medium text-slate-900 mb-2">Team</h3>
<div className="mb-6">
<span className="text-4xl font-semibold text-slate-900">$0</span>
<span className="text-slate-500">/mo</span>
</div>
<p className="text-sm text-slate-500 mb-8 font-light">
              Perfect for small teams getting started with observability.
            </p>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
                Up to 5 users
              </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
                100GB data ingestion
              </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
                Standard dashboards
              </li>
</ul>
<button className="w-full py-3 rounded-xl border border-slate-300 text-slate-700 font-medium hover:bg-white/50 transition-colors">
              Start Free
            </button>
</div>
<div className="glass-panel p-10 rounded-[2rem] reveal-on-scroll delay-100 flex flex-col bg-white/70 border-blue-200 shadow-xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px]"></div>
<div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-2">
              Most Popular
            </div>
<h3 className="text-xl font-medium text-slate-900 mb-2">
              Professional
            </h3>
<div className="mb-6">
<span className="text-4xl font-semibold text-slate-900">$99</span>
<span className="text-slate-500">/user/mo</span>
</div>
<p className="text-sm text-slate-500 mb-8 font-light">
              Advanced features for growing engineering organizations.
            </p>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
                Unlimited users
              </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
                5TB data ingestion
              </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
                AI Root Cause Analysis
              </li>
</ul>
<button className="w-full py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors shadow-lg">
              Start Free Trial
            </button>
</div>
<div className="glass-panel p-10 rounded-[2rem] reveal-on-scroll delay-200 flex flex-col border border-white/60">
<h3 className="text-xl font-medium text-slate-900 mb-2">Enterprise</h3>
<div className="mb-6">
<span className="text-4xl font-semibold text-slate-900">Custom</span>
</div>
<p className="text-sm text-slate-500 mb-8 font-light">
              Custom scale, compliance, and dedicated support for large orgs.
            </p>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
                Custom data limits
              </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
                Advanced RBAC
              </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
                Custom Integrations
              </li>
</ul>
<button className="w-full py-3 rounded-xl border border-slate-300 text-slate-700 font-medium hover:bg-white/50 transition-colors">
              Contact Sales
            </button>
</div>
</div>
</section>

<section className="flex flex-col text-center h-[60vh] pr-6 pl-6 relative items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 pointer-events-none"></div>
<div className="w-64 h-64 rounded-full bg-blue-400/20 blur-[100px] absolute"></div>
<h2 className="text-5xl md:text-7xl font-medium text-[var(--primary)] tracking-tighter mb-6 relative z-10">
          Stop reacting.
          <br/>
          Start anticipating.
        </h2>
<p className="text-lg md:text-xl text-slate-500 max-w-xl mx-auto mb-10 relative z-10 font-light">
          Join hundreds of engineering teams who rely on Orion to secure their
          uptime and automate incident response.
        </p>
<div className="relative z-10">
<button className="cta-btn text-lg pt-4 pr-10 pb-4 pl-10 shadow-lg">
            Request Demo
          </button>
</div>
</section>

<footer className="bg-white/80 backdrop-blur-md border-t border-slate-200 pt-20 pb-10 relative z-10">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

<div className="md:col-span-4 flex flex-col items-start">
<a className="flex items-center gap-3 group" href="#">
<span className="text-lg font-medium text-slate-900 tracking-tight uppercase">
                  Orion
                </span>
</a>
<p className="mt-6 text-slate-500 leading-relaxed max-w-sm text-sm font-light">
                An AI-powered operational intelligence platform helping
                engineering teams maintain critical system uptime through
                automation and insights.
              </p>
</div>

<div className="md:col-span-2 md:col-start-7">
<h4 className="font-medium text-slate-900 mb-6 tracking-tight">
                Product
              </h4>
<ul className="space-y-4 text-sm text-slate-500">
<li>
<a className="hover:text-blue-600 transition-colors" href="#">
                    Platform
                  </a>
</li>
<li>
<a className="hover:text-blue-600 transition-colors" href="#">
                    AIOps
                  </a>
</li>
<li>
<a className="hover:text-blue-600 transition-colors" href="#">
                    Automation
                  </a>
</li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="font-medium text-slate-900 mb-6 tracking-tight">
                Resources
              </h4>
<ul className="space-y-4 text-sm text-slate-500">
<li>
<a className="hover:text-blue-600 transition-colors" href="#">
                    Documentation
                  </a>
</li>
<li>
<a className="hover:text-blue-600 transition-colors" href="#">
                    API Reference
                  </a>
</li>
<li>
<a className="hover:text-blue-600 transition-colors" href="#">
                    Case Studies
                  </a>
</li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="font-medium text-slate-900 mb-6 tracking-tight">
                Company
              </h4>
<ul className="space-y-4 text-sm text-slate-500">
<li>
<a className="hover:text-blue-600 transition-colors" href="#">
                    About Us
                  </a>
</li>
<li>
<a className="hover:text-blue-600 transition-colors" href="#">
                    Careers
                  </a>
</li>
<li>
<a className="hover:text-blue-600 transition-colors" href="#">
                    Security
                  </a>
</li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-sm text-slate-400 font-light">
              © 2024 Orion Intelligence. All rights reserved.
            </p>
<div className="flex gap-6 items-center">
<a aria-label="Twitter" className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<iconify-icon height="20" icon="solar:twitter-linear" width="20"></iconify-icon>
</a>
<a aria-label="GitHub" className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<iconify-icon height="20" icon="solar:code-circle-linear" width="20"></iconify-icon>
</a>
<a aria-label="LinkedIn" className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<iconify-icon height="20" icon="solar:link-circle-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>
</main>




    </>
  );
}
