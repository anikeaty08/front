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



      // Scroll Reveal Animation
      document.addEventListener('DOMContentLoaded', () => {
        const observerOptions = {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            }
          });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
          observer.observe(el);
        });

        // Mobile Menu Toggle Logic (Simple implementation)
        const mobileMenuBtn = document.querySelector('nav button.md\\:hidden');
        if(mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                alert('Mobile menu logic would go here in production build.');
            });
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-[#030303]/80 backdrop-blur-md border-b border-emerald-500/10 transition-all duration-300">
<div className="w-full h-20 relative flex items-center justify-center bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">

<div className="absolute inset-0 overflow-hidden pointer-events-none">

<div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJ4Ij48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI3gpIiBvcGFjaXR5PSIxIi8+PC9zdmc+')]"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[100px] bg-emerald-500/5 blur-[90px] rounded-full"></div>

<div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
</div>

<div className="w-full max-w-7xl mx-auto px-6 h-full flex items-center justify-between relative z-10">

<a className="flex items-center gap-3 group" href="#">
</a>

<nav className="hidden md:flex items-center gap-10">
<a className="text-sm font-normal text-slate-400 hover:text-white transition-colors relative group/item py-2" href="#">
              Home
              <span className="absolute bottom-0 left-0 w-full h-px bg-emerald-500 scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-right group-hover/item:origin-left shadow-[0_0_8px_rgba(16,185,129,1)]"></span>
</a>

<div className="relative group/menu h-full flex items-center">
<button className="hover:text-emerald-400 transition-colors flex cursor-pointer text-sm font-normal text-slate-400 pt-2 pb-2 gap-x-1.5 gap-y-1.5 items-center" onclick="window.location.href='/custom-development'" role="button">
                Services
                <svg className="group-hover/menu:rotate-180 transition-transform duration-300 opacity-70 w-3 h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path className="" d="m6 9 6 6 6-6"></path>
</svg>
</button>

<div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[800px] invisible opacity-0 group-hover/menu:visible group-hover/menu:opacity-100 transition-all duration-300 transform group-hover/menu:translate-y-0 translate-y-2 pointer-events-none group-hover/menu:pointer-events-auto">
<div className="overflow-hidden bg-[#050505]/95 border-emerald-500/20 border ring-emerald-500/10 ring-1 rounded-2xl pt-1 pr-1 pb-1 pl-1 shadow-[0_20px_60px_-10px_rgba(0,0,0,1)] backdrop-blur-2xl gap-x-1.5 gap-y-1.5">
<div className="flex gap-x-1.5 gap-y-1.5">

<div className="grid grid-cols-1 gap-1 w-2/3 pt-4 pr-4 pb-4 pl-4 gap-x-1.5 gap-y-1.5">
<a className="flex items-center gap-4 hover:bg-emerald-500/5 hover:border-emerald-500/10 transition-all group/item border-transparent border rounded-xl pt-3 pr-3 pb-3 pl-3" href="/custom-development">
<div className="flex group-hover/item:border-emerald-500/40 group-hover/item:shadow-[0_0_15px_rgba(16,185,129,0.2)] text-emerald-400 bg-emerald-500/10 w-10 h-10 border-emerald-500/20 border rounded-lg items-center justify-center">
<svg className="" data-icon-set="solar" data-solar="code-square-bold-duotone" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" fill="currentColor" opacity=".5"></path><path className="" d="M13.488 6.446a.75.75 0 0 1 .53.918l-2.588 9.66a.75.75 0 0 1-1.449-.389l2.589-9.659a.75.75 0 0 1 .918-.53M14.97 8.47a.75.75 0 0 1 1.06 0l.209.208c.635.635 1.165 1.165 1.529 1.642c.384.504.654 1.036.654 1.68s-.27 1.176-.654 1.68c-.364.477-.894 1.007-1.53 1.642l-.208.208a.75.75 0 1 1-1.06-1.06l.171-.172c.682-.682 1.139-1.14 1.434-1.528c.283-.37.347-.586.347-.77s-.064-.4-.347-.77c-.295-.387-.752-.846-1.434-1.528l-.171-.172a.75.75 0 0 1 0-1.06m-7 0a.75.75 0 0 1 1.06 1.06l-.171.172c-.682.682-1.138 1.14-1.434 1.528c-.283.37-.346.586-.346.77s.063.4.346.77c.296.387.752.846 1.434 1.528l.172.172a.75.75 0 1 1-1.061 1.06l-.208-.208c-.636-.635-1.166-1.165-1.53-1.642c-.384-.504-.653-1.036-.653-1.68s.27-1.176.653-1.68c.364-.477.894-1.007 1.53-1.642z" fill="currentColor"></path></svg>
</div>
<div className="">
<div className="text-sm font-normal text-white group-hover/item:text-emerald-400 transition-colors">
                            Custom Development
                          </div>
<div className="text-[11px] text-slate-500 mt-0.5">
                            React, Next.js, High Performance
                          </div>
</div>
</a>
<a className="flex items-center gap-4 hover:bg-emerald-500/5 hover:border-emerald-500/10 transition-all group/item border-transparent border rounded-xl pt-3 pr-3 pb-3 pl-3" href="#">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 group-hover/item:border-emerald-500/40 group-hover/item:shadow-[0_0_15px_rgba(16,185,129,0.2)]">
<iconify-icon icon="solar:palette-bold-duotone" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-normal text-white group-hover/item:text-emerald-400 transition-colors">
                            High-End Web Design
                          </div>
<div className="text-[11px] text-slate-500 mt-0.5">
                            Premium UI/UX Systems
                          </div>
</div>
</a>
<a className="flex items-center gap-4 p-3 rounded-xl hover:bg-emerald-500/5 border border-transparent hover:border-emerald-500/10 transition-all group/item" href="#">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 group-hover/item:border-emerald-500/40 group-hover/item:shadow-[0_0_15px_rgba(16,185,129,0.2)]">
<iconify-icon icon="solar:magic-stick-3-bold-duotone" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-normal text-white group-hover/item:text-emerald-400 transition-colors">
                            Animations &amp; Interactions
                          </div>
<div className="text-[11px] text-slate-500 mt-0.5">
                            GSAP, WebGL, Motion
                          </div>
</div>
</a>
<a className="flex items-center gap-4 p-3 rounded-xl hover:bg-emerald-500/5 border border-transparent hover:border-emerald-500/10 transition-all group/item" href="#">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 group-hover/item:border-emerald-500/40 group-hover/item:shadow-[0_0_15px_rgba(16,185,129,0.2)]">
<iconify-icon icon="solar:graph-up-bold-duotone" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-normal text-white group-hover/item:text-emerald-400 transition-colors">
                            Conversion Strategy
                          </div>
<div className="text-[11px] text-slate-500 mt-0.5">
                            ROI-Focused Architecture
                          </div>
</div>
</a>
</div>

<div className="w-1/3 p-2">
<div className="h-full rounded-xl bg-gradient-to-b from-emerald-950/40 to-black border border-emerald-500/20 p-5 flex flex-col justify-between relative overflow-hidden group/card">
<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(16,185,129,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_4s_infinite]"></div>
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-[50px] rounded-full pointer-events-none"></div>
<div className="relative z-10">
<div className="w-8 h-8 rounded bg-emerald-500 text-black flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
<iconify-icon icon="solar:bolt-bold" width="18"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-2">
                            Start your project
                          </h4>
<p className="text-xs text-slate-400 leading-relaxed">
                            Let’s build a website that makes your brand
                            impossible to ignore.
                          </p>
</div>
<button className="relative z-10 w-full py-2.5 rounded-lg bg-emerald-500 text-black text-[10px] font-bold uppercase tracking-wide hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                          Start Project
                        </button>
</div>
</div>
</div>
</div>
</div>
</div>
<a className="hover:text-white transition-colors group/item text-sm font-normal text-slate-400 pt-2 pb-2 relative" href="#work">
              Projects
              <span className="absolute bottom-0 left-0 w-full h-px bg-emerald-500 scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-right group-hover/item:origin-left shadow-[0_0_8px_rgba(16,185,129,1)]"></span>
</a>
<a className="text-sm font-normal text-slate-400 hover:text-white transition-colors relative group/item py-2" href="#process">
              Process
              <span className="absolute bottom-0 left-0 w-full h-px bg-emerald-500 scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-right group-hover/item:origin-left shadow-[0_0_8px_rgba(16,185,129,1)]"></span>
</a>
<a className="text-sm font-normal text-slate-400 hover:text-white transition-colors relative group/item py-2" href="#">
              About
              <span className="absolute bottom-0 left-0 w-full h-px bg-emerald-500 scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-right group-hover/item:origin-left shadow-[0_0_8px_rgba(16,185,129,1)]"></span>
</a>
<a className="text-sm font-normal text-slate-400 hover:text-white transition-colors relative group/item py-2" href="#contact">
              Contact
              <span className="absolute bottom-0 left-0 w-full h-px bg-emerald-500 scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-right group-hover/item:origin-left shadow-[0_0_8px_rgba(16,185,129,1)]"></span>
</a>
</nav>

<div className="hidden md:flex items-center gap-6">
<a className="relative group px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-semibold tracking-wide hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all hover:scale-105 overflow-hidden" href="#contact">
<span className="relative z-10 flex items-center gap-2">
                Start Project
                <svg className="opacity-80 group-hover:translate-x-0.5 transition-transform" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</span>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<div className="absolute inset-0 rounded-full bg-emerald-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
</a>
</div>

<button className="md:hidden text-white hover:text-emerald-400 transition-colors">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-32 pb-32 bg-black overflow-x-hidden">

<div className="z-0 absolute top-0 right-0 bottom-0 left-0" style={{outlineColor: '#10b981 !important'}}>

<div className="absolute top-0 right-0 bottom-0 left-0 pointer-events-none overflow-hidden select-none z-0">

<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_30%,#000_60%,transparent_100%)]"></div>

<div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[100px] rounded-full mix-blend-screen opacity-60"></div>


<div className="absolute top-0 left-[25%] w-px h-full bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent opacity-40 hidden md:block">
<div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent animate-[shimmer_8s_infinite] blur-[1px]"></div>
</div>

<div className="absolute top-[40%] left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent opacity-40">
<div className="absolute left-0 top-0 h-full w-[300px] bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent animate-[shimmer_10s_infinite] blur-[1px]"></div>
</div>

<div className="absolute top-[40%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_15px_#34d399] animate-pulse hidden md"></div>

<div className="absolute bottom-0 left-0 w-full h-56 bg-gradient-to-t from-emerald-950/30 via-black/85 to-transparent"></div>
</div>

<div className="-translate-x-1/2 blur-[120px] animate-pulse bg-emerald-900/20 opacity-50 mix-blend-screen w-[1000px] h-[600px] rounded-full absolute top-0 left-1/2"></div>
<div className="blur-[100px] bg-emerald-950/30 opacity-30 w-[800px] h-[800px] rounded-full absolute bottom-0 left-0"></div>

<div className="[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] absolute top-0 right-0 bottom-0 left-0 overflow-hidden pointer-events-none">
<style>
            @keyframes subtle-sweep {
              0% { transform: translateX(-100%) skewX(-20deg); opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { transform: translateX(150%) skewX(-20deg); opacity: 0; }
            }
          </style>

<div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent blur-[100px]" style={{animation: 'subtle-sweep 8s linear infinite'}}></div>

<div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent blur-[60px]" style={{animation: 'subtle-sweep 8s linear infinite', animationDelay: '0.1s'}}></div>
</div>

<div className="absolute top-1/4 right-1/4 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399] animate-float"></div>
<div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-emerald-600 rounded-full blur-[1px] animate-float" style={{animationDelay: '2s'}}></div>
</div>
<div className="z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide mb-8 hover:bg-emerald-950/50 transition-colors cursor-default shadow-[0_0_20px_rgba(16,185,129,0.1)] active">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
          ACCEPTING NEW PROJECTS
        </div>

<h1 className="reveal sm:text-5xl md:text-6xl lg:text-7xl leading-tight md:leading-[1.15] active text-4xl font-semibold text-white tracking-tight font-geist max-w-3xl mr-auto mb-8 ml-auto">We build websites that make brands <br className="hidden md:block"/> <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-emerald-500 bg-[length:200%_auto] animate-[gradient_8s_ease_infinite] drop-shadow-[0_0_20px_rgba(16,185,129,0.25)]">
            impossible to ignore.
            <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 mix-blend-overlay animate-[shine_6s_ease-in-out_infinite]"></span>
</span> <style>
            @keyframes shine {
              0%, 15% { transform: translateX(-150%) skewX(-12deg); }
              45%, 100% { transform: translateX(250%) skewX(-12deg); }
            }
            @keyframes gradient {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          </style></h1>

<p className="reveal text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light active">
          Custom websites with
          <span className="text-slate-200">high-end design</span>
          ,
          <span className="text-slate-200">advanced animations</span>
          , and conversion-focused strategy for serious brands.
        </p>

<div className="reveal flex flex-col sm:flex-row gap-x-8 gap-y-6 items-center justify-center active">

<div className="relative group">

<div className="-inset-2 group-hover:opacity-100 transition-opacity duration-500 bg-emerald-500/20 opacity-0 rounded-full absolute blur-xl"></div>

<div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity duration-200 animate-pulse"></div>
<a className="relative flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 text-slate-950 font-medium tracking-tight shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] transition-all duration-300 hover:scale-[1.03] overflow-hidden ring-1 ring-white/20" href="#contact">

<div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
<span className="relative flex items-center gap-2">
                Start Your Project
                <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</span>
</a>
</div>

<a className="px-8 py-4 rounded-full:border-white/20 transition-all backdrop-blur-sm flex items-center gap-2 group hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#work">
            View Our Work
            <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="reveal mt-24 relative max-w-6xl mx-auto z-40 mb-20 perspective-distant">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-emerald-500/10 blur-[120px] rounded-full opacity-60 pointer-events-none"></div>

<div className="relative w-full rounded-[2rem] border border-white/10 bg-[#050505]/90 backdrop-blur-2xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] p-8 md:p-12 z-10 hover:border-emerald-500/30 transition-all duration-700 hover:shadow-[0_0_80px_rgba(16,185,129,0.15)] group ring-1 ring-white/5">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none rounded-[2rem]"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent blur-[1px]"></div>

<div className="flex border-white/5 border-b mb-10 pb-6 relative items-center justify-between">
<div className="flex items-center gap-5">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-900/20 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.15)] group-hover:scale-105 transition-transform duration-500">
<iconify-icon icon="solar:chart-square-bold-duotone" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-white tracking-tight leading-tight">
                    Website Impact
                  </h3>
<div className="flex items-center gap-2 mt-1">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[11px] font-mono uppercase tracking-widest text-emerald-500/80 font-semibold">
                      Live Performance
                    </span>
</div>
</div>
</div>
<div className="hidden sm:flex px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-400 font-medium items-center gap-2 hover:bg-white/10 transition-colors cursor-pointer hover:text-white">
                Last 30 Days
                <iconify-icon className="opacity-50" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
</div>

<div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 z-10">

<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-emerald-500/5 hover:border-emerald-500/20 transition-all duration-300 group/card relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-5">
<div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/10">
<iconify-icon icon="solar:graph-new-up-bold-duotone" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                    +32%
                  </span>
</div>
<div className="text-3xl font-bold text-white tracking-tight mb-1 group-hover/card:text-emerald-50 transition-colors">
                  4.8%
                </div>
<div className="text-xs text-slate-500 uppercase tracking-wide font-medium">
                  Conversion Rate
                </div>
<div className="mt-5 h-1.5 w-full bg-slate-800/50 rounded-full overflow-hidden">
<div className="h-full w-[65%] bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
</div>
</div>

<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-emerald-500/5 hover:border-emerald-500/20 transition-all duration-300 group/card relative overflow-hidden">
<div className="flex justify-between items-start mb-5">
<div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/10">
<iconify-icon icon="solar:bolt-bold-duotone" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                    Fast
                  </span>
</div>
<div className="text-3xl font-bold text-white tracking-tight mb-1 group-hover/card:text-emerald-50 transition-colors">
                  0.4s
                </div>
<div className="text-xs text-slate-500 uppercase tracking-wide font-medium">
                  Load Time
                </div>
<div className="mt-5 h-1.5 w-full bg-slate-800/50 rounded-full overflow-hidden">
<div className="h-full w-[98%] bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
</div>
</div>

<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 group/card">
<div className="flex justify-between items-start mb-5">
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-300 border border-white/5">
<iconify-icon icon="solar:users-group-rounded-bold-duotone" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-bold text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                    +12%
                  </span>
</div>
<div className="text-3xl font-bold text-white tracking-tight mb-1">
                  4m 20s
                </div>
<div className="text-xs text-slate-500 uppercase tracking-wide font-medium">
                  Avg. Session
                </div>
<div className="mt-5 h-1.5 w-full bg-slate-800/50 rounded-full overflow-hidden">
<div className="h-full w-[75%] bg-slate-600 rounded-full group-hover/card:bg-white transition-colors"></div>
</div>
</div>

<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 group/card">
<div className="flex justify-between items-start mb-5">
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-300 border border-white/5">
<iconify-icon icon="solar:magnifer-bold-duotone" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-bold text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                    +45%
                  </span>
</div>
<div className="text-3xl font-bold text-white tracking-tight mb-1">
                  2.4k
                </div>
<div className="text-xs text-slate-500 uppercase tracking-wide font-medium">
                  Organic Traffic
                </div>
<div className="mt-5 h-1.5 w-full bg-slate-800/50 rounded-full overflow-hidden">
<div className="h-full w-[85%] bg-slate-600 rounded-full group-hover/card:bg-white transition-colors"></div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-16 -left-4 md:-left-16 w-72 p-5 rounded-2xl border border-white/10 bg-[#050505]/80 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] z-30 animate-float hover:-translate-y-2 transition-transform duration-500 hover:border-emerald-500/30 hover:bg-[#050505]/95 ring-1 ring-white/5" style={{animationDuration: '5s'}}>
<div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/5">
<div className="w-6 h-6 rounded bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:server-square-bold-duotone" width="14"></iconify-icon>
</div>
<span className="text-xs font-bold text-white tracking-wide uppercase">
                Core Vitals
              </span>
<div className="ml-auto flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-xs group/item">
<span className="text-slate-400 font-medium">LCP (Loading)</span>
<div className="flex items-center gap-2">
<div className="w-16 h-1 bg-slate-800 rounded-full overflow-hidden">
<div className="w-[90%] h-full bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
</div>
<span className="text-emerald-400 font-mono font-semibold">
                    0.8s
                  </span>
</div>
</div>
<div className="flex items-center justify-between text-xs group/item">
<span className="text-slate-400 font-medium">CLS (Stability)</span>
<div className="flex items-center gap-2">
<div className="w-16 h-1 bg-slate-800 rounded-full overflow-hidden">
<div className="w-[98%] h-full bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
</div>
<span className="text-emerald-400 font-mono font-semibold">
                    0.00
                  </span>
</div>
</div>
<div className="flex items-center justify-between text-xs group/item">
<span className="text-slate-400 font-medium">INP (Response)</span>
<div className="flex items-center gap-2">
<div className="w-16 h-1 bg-slate-800 rounded-full overflow-hidden">
<div className="w-[95%] h-full bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
</div>
<span className="text-emerald-400 font-mono font-semibold">
                    45ms
                  </span>
</div>
</div>
</div>
</div>

<div className="absolute -top-12 -right-4 md:-right-12 w-64 p-5 rounded-2xl border border-white/10 bg-[#050505]/80 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] z-20 animate-float hover:-translate-y-2 transition-transform duration-500 hover:border-emerald-500/30 hover:bg-[#050505]/95 ring-1 ring-white/5" style={{animationDuration: '7s', animationDelay: '1.5s'}}>
<div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
<span className="text-xs font-bold text-white tracking-wide uppercase flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:filter-bold-duotone"></iconify-icon>
                Funnel
              </span>
<span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                LIVE
              </span>
</div>
<div className="space-y-2">

<div className="relative h-8 w-full bg-emerald-900/10 rounded-lg overflow-hidden flex items-center px-2.5 border border-white/5">
<div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-500/5 w-full border-r border-emerald-500/30"></div>
<span className="relative z-10 text-[10px] text-slate-300 font-medium">
                  Visits
                </span>
<span className="relative z-10 text-[10px] text-white font-mono ml-auto">
                  12.5k
                </span>
</div>

<div className="relative h-8 w-full bg-emerald-900/10 rounded-lg overflow-hidden flex items-center px-2.5 border border-white/5 mx-auto w-[90%]">
<div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-emerald-500/10 w-[75%] border-r border-emerald-500/40 shadow-[4px_0_15px_rgba(16,185,129,0.1)]"></div>
<span className="relative z-10 text-[10px] text-slate-300 font-medium">
                  Add to Cart
                </span>
<span className="relative z-10 text-[10px] text-white font-mono ml-auto">
                  60%
                </span>
</div>

<div className="relative h-8 w-full bg-emerald-900/10 rounded-lg overflow-hidden flex items-center px-2.5 border border-white/5 mx-auto w-[80%]">
<div className="absolute inset-0 bg-gradient-to-r from-emerald-500/40 to-emerald-500/10 w-[55%] border-r border-emerald-500/50 shadow-[4px_0_15px_rgba(16,185,129,0.1)]"></div>
<span className="relative z-10 text-[10px] text-slate-300 font-medium">
                  Checkout
                </span>
<span className="relative z-10 text-[10px] text-white font-mono ml-auto">
                  35%
                </span>
</div>
</div>
</div>

<div className="hidden md:block absolute -top-8 -left-8 w-56 p-4 rounded-2xl border border-white/10 bg-[#050505]/80 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] z-20 animate-float hover:-translate-y-2 transition-transform duration-500 hover:border-emerald-500/30 hover:bg-[#050505]/95 ring-1 ring-white/5" style={{animationDuration: '8s', animationDelay: '0.5s'}}>
<div className="flex items-center gap-2 mb-3">
<div className="w-5 h-5 rounded bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:clock-circle-bold-duotone" width="12"></iconify-icon>
</div>
<span className="text-xs font-bold text-white tracking-wide uppercase">
                Pipeline
              </span>
</div>
<div className="relative pl-3.5 ml-1.5 border-l border-white/10 space-y-4 py-1">
<div className="flex items-center gap-3">
<div className="absolute -left-[5px] w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.6)] ring-2 ring-black"></div>
<span className="text-[10px] text-slate-400 font-medium">
                  Strategy
                </span>
<iconify-icon className="text-emerald-400 ml-auto" icon="lucide:check" width="10"></iconify-icon>
</div>
<div className="flex items-center gap-3">
<div className="absolute -left-[5px] w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.6)] ring-2 ring-black"></div>
<span className="text-[10px] text-slate-400 font-medium">
                  Design System
                </span>
<iconify-icon className="text-emerald-400 ml-auto" icon="lucide:check" width="10"></iconify-icon>
</div>
<div className="flex items-center gap-3">
<div className="absolute -left-[5px] w-2.5 h-2.5 rounded-full bg-white animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.5)] ring-2 ring-black"></div>
<span className="text-[10px] text-white font-bold">
                  Development
                </span>
<span className="text-[9px] text-emerald-400 ml-auto font-mono bg-emerald-500/10 px-1 rounded">
                  WIP
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden border-y group/section bg-slate-950 border-white/5 py-32 relative" id="process" style={{backgroundColor: '#000000'}}>

<style>
        @keyframes card-wave {
          0% { transform: translateY(0); border-color: rgba(255,255,255,0.05); background-color: rgba(10,10,10,0.6); box-shadow: none; }
          30% { transform: translateY(-6px); border-color: rgba(52, 211, 153, 0.2); }
          50% { transform: translateY(-12px); border-color: rgba(52, 211, 153, 0.5); box-shadow: 0 0 50px -10px rgba(16, 185, 129, 0.25); background-color: rgba(16, 185, 129, 0.08); }
          100% { transform: translateY(0); border-color: rgba(255,255,255,0.05); background-color: rgba(10,10,10,0.6); box-shadow: none; }
        }
        @keyframes line-streak {
          0% { left: -10%; opacity: 0; width: 10%; }
          10% { opacity: 1; width: 30%; }
          90% { opacity: 1; width: 30%; }
          100% { left: 110%; opacity: 0; width: 10%; }
        }
        @keyframes dot-pulse {
          0% { transform: translate(-50%, -50%) scale(1); box-shadow: 0 0 10px rgba(16,185,129,0.2); border-color: rgba(16,185,129,0.3); }
          40% { transform: translate(-50%, -50%) scale(1.6); box-shadow: 0 0 35px rgba(16,185,129,099; }
          100% { transform: translate(-50%, -50%) scale(1); }
        }
      </style>

<div className="absolute inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 bg-gradient-to-b from-black via-black to-emerald-950"></div>

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.9)_100%)]"></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40 [mask-image:radial-gradient(ellipse_60%_55%_at_50%_40%,#000_60%,transparent_100%)]" style={{filter: 'drop-shadow(0 0 10px rgba(16,185,129,0.12))'}}></div>

<div className="absolute top-28 left-1/2 -translate-x-1/2 w-[900px] h-[420px] bg-emerald-400/10 blur-[110px] rounded-full mix-blend-screen opacity-70"></div>

<div className="absolute -top-24 right-1/2 translate-x-1/2 w-[1100px] h-[520px] bg-emerald-900/10 blur-[140px] rounded-full opacity-60"></div>

<div className="absolute bottom-0 left-0 w-full h-56 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="text-center mb-24 max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold tracking-wider uppercase mb-8 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            The Workflow
          </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
            Our process turns ideas into
            <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
              It performs.
            </span>
</h2>
<p className="text-slate-400 text-lg font-light leading-relaxed">
            A structured approach that combines strategy, design and technology
            to build websites that actually grow businesses.
          </p>
</div>

<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent overflow-hidden">

<div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent -translate-x-full animate-[shimmer_3s_infinite]"></div>

<div className="absolute top-0 w-[30%] h-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent blur-[4px] opacity-0 group-hover/section:animate-[line-streak_2.2s_linear_1]"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

<div className="group relative">

<div className="hidden md:flex absolute top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-slate-950 border border-emerald-500/50 z-20 items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.4)] group-hover:scale-125 group-hover:border-emerald-400 transition-all duration-300 group-hover/section:animate-[dot-pulse_0.9s_cubic-bezier(0.2,0.8,0.2,1)_1]" style={{animationDelay: '200ms'}}>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:bg-emerald-300 transition-colors"></div>
</div>
<div className="pt-0 md:pt-20 h-full">
<div className="h-full p-6 rounded-2xl bg-[#0A0A0A]/60 border border-white/5 hover:border-emerald-500/40 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.15)] relative overflow-hidden group-hover/section:animate-[card-wave_0.9s_cubic-bezier(0.2,0.8,0.2,1)_1]" style={{animationDelay: '200ms'}}>

<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300">
<iconify-icon icon="solar:target-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">
                      Strategy
                    </h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">
                      Understanding the business, audience and growth goals to
                      define the path.
                    </p>
<div className="mt-auto pt-5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-emerald-500/70 uppercase tracking-widest">
<span>Step 01</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="group relative">
<div className="hidden md:flex absolute top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-slate-950 border border-emerald-500/50 z-20 items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.4)] group-hover:scale-125 group-hover:border-emerald-400 transition-all duration-300 group-hover/section:animate-[dot-pulse_0.9s_cubic-bezier(0.2,0.8,0.2,1)_1]" style={{animationDelay: '500ms'}}>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:bg-emerald-300 transition-colors"></div>
</div>
<div className="pt-0 md:pt-20 h-full">
<div className="h-full p-6 rounded-2xl bg-[#0A0A0A]/60 border border-white/5 hover:border-emerald-500/40 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.15)] relative overflow-hidden group-hover/section:animate-[card-wave_0.9s_cubic-bezier(0.2,0.8,0.2,1)_1]" style={{animationDelay: '500ms'}}>
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:scale-110 group-hover:shadow-[0_020px_rgba(16,185,129,0.3)] transition-all duration-300">
<iconify-icon className="" icon="solar:palette-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">
                      UX &amp; Product Design
                    </h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">
                      Creating intuitive user flows and premium interface design
                      for maximum impact.
                    </p>
<div className="mt-auto pt-5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-emerald-500/70 uppercase tracking-widest">
<span>Step 02</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="group relative">
<div className="hidden md:flex absolute top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-slate-950 border border-emerald-500/50 z-20 items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.4)] group-hover:scale-125 group-hover:border-emerald-400 transition-all duration-300 group-hover/section:animate-[dot-pulse_0.9s_cubic-bezier(0.2,0.8,0.2,1)_1]" style={{animationDelay: '800ms'}}>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:bg-emerald-300 transition-colors"></div>
</div>
<div className="pt-0 md:pt-20 h-full">
<div className="h-full p-6 rounded-2xl bg-[#0A0A0A]/60 border border-white/5 hover:border-emerald-500/40 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.15)] relative overflow-hidden group-hover/section:animate-[card-wave_0.9s_cubic-bezier(0.2,0.8,0.2,1)_1]" style={{animationDelay: '800ms'}}>
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300">
<iconify-icon icon="solar:code-square-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">
                      Development
                    </h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">
                      Building high-performance websites with modern technology
                      stack.
                    </p>
<div className="mt-auto pt-5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-emerald-500/70 uppercase tracking-widest">
<span>Step 03</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="group relative">
<div className="hidden md:flex absolute top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-slate-950 border border-emerald-500/50 z-20 items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.4)] group-hover:scale-125 group-hover:border-emerald-400 transition-all duration-300 group-hover/section:animate-[dot-pulse_0.9s_cubic-bezier(0.2,0.8,0.2,1)_1]" style={{animationDelay: '1100ms'}}>
<div className="w-.5 h-1.5 rounded-full bg-emerald-400 group-hover:bg-emerald-300 transition-colors"></div>
</div>
<div className="pt-0 md:pt-20 h-full">
<div className="h-full p-6 rounded-2xl bg-[#0A0A0A]/60 border border-white/5 hover:border-emerald-500/40 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.15)] relative overflow-hidden group-hover/section:animate-[card-wave_0.9s_cubic-bezier(0.2,0.8,0.2,1)_1]" style={{animationDelay: '1100ms'}}>
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300">
<iconify-icon icon="solar:rocket-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">
                      Launch &amp; Growth
                    </h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">
                      Optimizing the website for conversions, SEO and long-term
                      business growth.
                    </p>
<div className="mt-auto pt-5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-emerald-500/70 uppercase tracking-widest">
<span>Step 04</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-black pt-32 pb-32 relative" id="projects">

<div className="absolute inset-0 pointer-events-none">

<div className="absolute inset-0 bg-black"></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_60%,transparent_100%)]"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full mix-blend-screen opacity-50"></div>

<div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-emerald-900/10 blur-[100px] rounded-full opacity-30"></div>
</div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="text-center mb-20 max-w-3xl mx-auto">
<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-400 text-[10px] font-semibold tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Selected Work
          </div>
<h2 className="reveal text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Projects that drive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
              real growth.
            </span>
</h2>
<p className="reveal text-lg text-slate-400 font-light leading-relaxed">
            We partner with ambitious brands to design and build websites that
            convert visitors into customers.
          </p>
</div>

<div className="reveal relative rounded-3xl border border-white/5 bg-[#0A0A0A]/50 overflow-hidden group mb-24 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-[0_0_50px_-20px_rgba(16,185,129,0.15)] backdrop-blur-sm">

<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="grid lg:grid-cols-2 gap-12 p-8 md:p-12 items-center">

<div className="order-2 lg:order-1 relative z-10">
<div className="flex items-center gap-3 mb-6">
<span className="uppercase text-xs text-emerald-400 tracking-wider font-mono">webraketa.cz</span>
<span className="w-1 h-1 rounded-full bg-emerald-500/50"></span>
<span className="text-slate-500 text-sm">Fintech • 2024</span>
</div>
<h3 className="md:text-4xl leading-tight text-3xl font-medium text-white tracking-tight mb-4">AI Powered website agency</h3>
<p className="text-slate-400 mb-10 leading-relaxed max-w-md font-light">
                A complete digital overhaul for a Series B fintech platform. We
                rebuilt their marketing site and dashboard architecture to
                support rapid scaling.
              </p>

<div className="grid grid-cols-3 gap-6 mb-10 border-t border-white/5 pt-8">
<div className="group/metric">
<div className="text-2xl md:text-3xl font-semibold text-white mb-1 tracking-tight group-hover/metric:text-emerald-400 transition-colors">
                    +240%
                  </div>
<div className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">
                    Conversion
                  </div>
</div>
<div className="group/metric">
<div className="text-2xl md:text-3xl font-semibold text-white mb-1 tracking-tight group-hover/metric:text-emerald-400 transition-colors">
                    3×
                  </div>
<div className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">
                    Faster Speed
                  </div>
</div>
<div className="group/metric">
<div className="text-2xl md:text-3xl font-semibold text-white mb-1 tracking-tight group-hover/metric:text-emerald-400 transition-colors">
                    +60%
                  </div>
<div className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">
                    Engagement
                  </div>
</div>
</div>
<button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-950 text-sm font-semibold tracking-wide hover:bg-emerald-400 transition-all duration-300 group/btn shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]">
                View Case Study
                <iconify-icon className="group-hover/btn:translate-x-1 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>

<div className="order-1 lg:order-2 relative perspective-normal h-full min-h-[300px] flex items-center justify-center">
<div className="relative w-full rounded-xl overflow-hidden border border-white/5 shadow-2xl bg-[#050505] transform transition-all duration-700 ease-out group-hover:-rotate-y-5 group-hover:rotate-x-5 group-hover:scale-[1.02] group-hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.8)]">

<div className="absolute top-0 left-0 w-full h-10 bg-[#050505]/90 backdrop-blur border-b border-white/5 flex items-center px-4 gap-2 z-20">
<div className="w-2.5 h-2.5 rounded-full bg-slate-800 group-hover:bg-[#FF5F57] transition-colors duration-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-800 group-hover:bg-[#FEBC2E] transition-colors duration-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-800 group-hover:bg-[#28C840] transition-colors duration-300"></div>
<div className="mx-auto w-1/2 h-5 rounded-md bg-white/5 text-[10px] flex items-center justify-center text-slate-600 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                    novafinance.com
                  </div>
</div>
<img alt="Project Preview" className="w-full h-auto object-cover aspect-[4/3] pt-10 opacity-90 group-hover:opacity-100 transition-opacity scale-105" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>

<div className="absolute bottom-8 -left-4 p-4 rounded-xl bg-black/80 backdrop-blur-xl border border-emerald-500/20 shadow-[0_0_30px_rgba(0,0,0,0.5)] transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 z-30 w-48 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/30">
<iconify-icon icon="lucide:trending-up" width="14"></iconify-icon>
</div>
<div>
<div className="text-[10px] text-slate-400 uppercase tracking-wider">
                        Revenue
                      </div>
<div className="text-sm font-semibold text-white">$2.4M</div>
</div>
</div>
<div className="w-full h-1 bg-emerald-900/30 rounded-full overflow-hidden">
<div className="h-full w-[75%] bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-3 gap-6">

<div className="reveal group relative rounded-2xl border border-white/5 bg-[#0A0A0A]/50 overflow-hidden hover:bg-emerald-500/5 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]">
<div className="aspect-[16/10] overflow-hidden border-b border-white/5 relative">
<img alt="Lumina UI Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-3">
<h4 className="text-lg font-medium text-white group-hover:text-emerald-400 transition-colors">
                  Lumina UI
                </h4>
<iconify-icon className="text-slate-500 group-hover:text-emerald-400 transition-colors" icon="lucide:arrow-up-right"></iconify-icon>
</div>
<p className="text-sm text-slate-500 mb-4 font-light">
                Design System &amp; Component Library
              </p>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/5 border border-emerald-500/10 text-[10px] text-emerald-100 tracking-wide group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-colors">
<iconify-icon className="text-emerald-400" icon="lucide:download" width="10"></iconify-icon>
                10k+ Downloads
              </div>
</div>
</div>

<div className="reveal group relative rounded-2xl border border-white/5 bg-[#0A0A0A]/50 overflow-hidden hover:bg-emerald-500/5 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]">
<div className="aspect-[16/10] overflow-hidden border-b border-white/5 relative">
<img alt="Vortex Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-3">
<h4 className="text-lg font-medium text-white group-hover:text-emerald-400 transition-colors">
                  Vortex SaaS
                </h4>
<iconify-icon className="text-slate-500 group-hover:text-emerald-400 transition-colors" icon="lucide:arrow-up-right"></iconify-icon>
</div>
<p className="text-sm text-slate-500 mb-4 font-light">
                Marketing Site with WebGL
              </p>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/5 border border-emerald-500/10 text-[10px] text-emerald-100 tracking-wide group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-colors">
<iconify-icon className="text-emerald-400" icon="lucide:bar-chart-2" width="10"></iconify-icon>
                45% Lift in MRR
              </div>
</div>
</div>

<div className="reveal group relative rounded-2xl border border-white/5 bg-[#0A0A0A]/50 overflow-hidden hover:bg-emerald-500/5 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]">
<div className="aspect-[16/10] overflow-hidden border-b border-white/5 relative bg-[#050505]">

<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(16,185,129,0.05)_50%,transparent_75%)] bg-[length:250%_250%] group-hover:animate-[shimmer_3s_infinite]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="p-6 w-full opacity-60 font-mono text-[10px] text-emerald-400/60 leading-relaxed overflow-hidden">
                  import { motion } from 'framer-motion';
                  <br/>
                  export const Hero = () =&gt; (
                  <br/>
                    &lt;motion.div initial={{ opacity: 0 }}&gt;
                  <br/>
                      &lt;h1&gt;Build Faster&lt;/h1&gt;
                  <br/>
                    &lt;/motion.div&gt;
                  <br/>
                  );
                </div>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-3">
<h4 className="text-lg font-medium text-white group-hover:text-emerald-400 transition-colors">
                  DevFlow
                </h4>
<iconify-icon className="text-slate-500 group-hover:text-emerald-400 transition-colors" icon="lucide:arrow-up-right"></iconify-icon>
</div>
<p className="text-sm text-slate-500 mb-4 font-light">
                Developer Tools Branding
              </p>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/5 border border-emerald-500/10 text-[10px] text-emerald-100 tracking-wide group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-colors">
<iconify-icon className="text-emerald-400" icon="lucide:rocket" width="10"></iconify-icon>
                Acquired by TechCo
              </div>
</div>
</div>
</div>
</div>
</section>
<section className="relative py-32 bg-black border-t border-white/5 overflow-hidden" id="results">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-emerald-500/5 blur-[120px] rounded-full mix-blend-screen opacity-50"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20 max-w-3xl mx-auto">
<h2 className="reveal text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Real results for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
              ambitious brands.
            </span>
</h2>
<p className="reveal text-lg text-slate-400 font-light leading-relaxed">
            Our websites are built not only to look exceptional but to deliver
            measurable business growth.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="reveal group relative p-8 rounded-3xl border border-white/5 bg-[#0A0A0A] hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_50px_-20px_rgba(16,185,129,0.15)] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
<div className="absolute -right-10 -top-10 w-32 h-32 bg-emerald-500/10 blur-[60px] rounded-full group-hover:bg-emerald-500/20 transition-colors"></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-950/30 border border-emerald-500/20 text-[10px] font-mono uppercase tracking-widest text-emerald-400 mb-8">
<span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse"></span>
                E-Commerce
              </div>
<div className="text-6xl font-semibold tracking-tighter text-white mb-4 group-hover:scale-105 origin-left transition-transform duration-500">
                +240%
              </div>
<h3 className="text-lg text-white font-medium mb-2">
                Conversion Increase
              </h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                Optimized checkout flows and product discovery for a leading
                fashion retailer, maximizing revenue per user.
              </p>
</div>
</div>

<div className="reveal group relative p-8 rounded-3xl border border-white/5 bg-[#0A0A0A] hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_50px_-20px_rgba(6,182,212,0.15)] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
<div className="absolute -right-10 -top-10 w-32 h-32 bg-cyan-500/10 blur-[60px] rounded-full group-hover:bg-cyan-500/20 transition-colors"></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-[10px] font-mono uppercase tracking-widest text-cyan-400 mb-8">
<span className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse"></span>
                SaaS Platform
              </div>
<div className="text-6xl font-semibold tracking-tighter text-white mb-4 group-hover:scale-105 origin-left transition-transform duration-500">
                3×
              </div>
<h3 className="text-lg text-white font-medium mb-2">
                Faster Page Load
              </h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                Rebuilding the core architecture on Next.js resulted in instant
                page transitions and improved SEO rankings.
              </p>
</div>
</div>

<div className="reveal group relative p-8 rounded-3xl border border-white/5 bg-[#0A0A0A] hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_50px_-20px_rgba(168,85,247,0.15)] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
<div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-500/10 blur-[60px] rounded-full group-hover:bg-purple-500/20 transition-colors"></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-purple-950/30 border border-purple-500/20 text-[10px] font-mono uppercase tracking-widest text-purple-400 mb-8">
<span className="w-1 h-1 rounded-full bg-purple-400 animate-pulse"></span>
                Fintech App
              </div>
<div className="text-6xl font-semibold tracking-tighter text-white mb-4 group-hover:scale-105 origin-left transition-transform duration-500">
                +68%
              </div>
<h3 className="text-lg text-white font-medium mb-2">
                User Engagement
              </h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                Creating an interactive, data-rich dashboard experience that
                keeps users active and exploring longer.
              </p>
</div>
</div>
</div>
</div>
</section>
<section className="relative py-32 bg-black border-t border-white/5 overflow-hidden" id="technology">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-900/10 blur-[120px] rounded-full opacity-30"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="text-center mb-20 max-w-3xl mx-auto">
<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-400 text-[10px] font-semibold tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Tech Stack
          </div>
<h2 className="reveal text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Built with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
              modern technology.
            </span>
</h2>
<p className="reveal text-lg text-slate-400 font-light leading-relaxed">
            We combine cutting-edge tools, performance-first development and
            AI-powered workflows to build next-generation websites.
          </p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="reveal group relative p-6 rounded-2xl border border-white/5 bg-[#0A0A0A] hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.15)]">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:code-square-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Frontend Core</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
              React, Next.js, and TypeScript architectures designed for scale,
              speed, and maintainability.
            </p>
</div>

<div className="reveal group relative p-6 rounded-2xl border border-white/5 bg-[#0A0A0A] hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.15)]">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:magic-stick-3-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Motion &amp; WebGL</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
              Award-winning animations using GSAP, Framer Motion, and Three.js
              to create immersive experiences.
            </p>
</div>

<div className="reveal group relative p-6 rounded-2xl border border-white/5 bg-[#0A0A0A] hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.15)]">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:pallete-2-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">UI/UX Design</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
              Figma-first workflows focused on atomic design systems and
              conversion-optimized user journeys.
            </p>
</div>

<div className="reveal group relative p-6 rounded-2xl border border-white/5 bg-[#0A0A0A] hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.15)]">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:database-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Headless CMS</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
              Flexible content management via Sanity or Strapi, empowering your
              team to update content instantly.
            </p>
</div>
</div>
</div>
</section>

<footer className="overflow-hidden bg-black border-white/5 border-t pt-20 pb-10 relative" id="contact">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full opacity-30"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<a className="flex items-center gap-2 group w-fit" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-black font-semibold text-xs shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                MJ
              </div>
<span className="text-lg font-medium tracking-tight text-white">
                MJ
                <span className="text-emerald-400">Design</span>
</span>
</a>
<p className="text-sm text-slate-400 font-light leading-relaxed max-w-xs">
              MJDesign is a digital studio focused on building high-performance
              websites that help brands grow online.
            </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors group/link" href="#contact">
              Start Your Project
              <iconify-icon className="group-hover/link:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>

<div className="flex items-center gap-3 pt-2">
<a className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-500/10 hover:border-emerald-500/20 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300 group" href="#">
<iconify-icon icon="ri:linkedin-fill" width="16"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-500/10 hover:border-emerald-500/20 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300 group" href="#">
<iconify-icon icon="ri:instagram-line" width="16"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-500/10 hover:border-emerald-500/20 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300 group" href="#">
<iconify-icon icon="ri:dribbble-line" width="16"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-500/10 hover:border-emerald-500/20 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300 group" href="#">
<iconify-icon icon="ri:behance-fill" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="">
<h4 className="text-sm font-semibold text-white tracking-wide uppercase mb-6">
              Navigation
            </h4>
<ul className="space-y-3">
<li className="">
<a className="text-sm text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group" href="#">
<span className="w-1 h-1 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </a>
</li>
<li>
<a className="text-sm text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group" href="#">
<span className="w-1 h-1 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Services
                </a>
</li>
<li className="">
<a className="text-sm text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group" href="#work">
<span className="w-1 h-1 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Projects
                </a>
</li>
<li className="">
<a className="text-sm text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group" href="#process">
<span className="w-1 h-1 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Process
                </a>
</li>
<li className="">
<a className="text-sm text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group" href="#">
<span className="w-1 h-1 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About
                </a>
</li>
<li>
<a className="text-sm text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group" href="#contact">
<span className="w-1 h-1 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </a>
</li>
</ul>
</div>

<div className="">
<h4 className="text-sm font-semibold text-white tracking-wide uppercase mb-6">
              Services
            </h4>
<ul className="space-y-3">
<li className="">
<a className="text-sm text-slate-400 hover:text-emerald-400 transition-colors block" href="#">
                  Custom Web Development
                </a>
</li>
<li className="">
<a className="text-sm text-slate-400 hover:text-emerald-400 transition-colors block" href="#">
                  High-End Web Design
                </a>
</li>
<li className="">
<a className="text-sm text-slate-400 hover:text-emerald-400 transition-colors block" href="#">
                  Conversion Strategy
                </a>
</li>
<li className="">
<a className="text-sm text-slate-400 hover:text-emerald-400 transition-colors block" href="#">
                  Animations &amp; Motion
                </a>
</li>
<li>
<a className="text-sm text-slate-400 hover:text-emerald-400 transition-colors block" href="#">
                  Technical SEO
                </a>
</li>
</ul>
</div>

<div className="">
<h4 className="text-sm font-semibold text-white tracking-wide uppercase mb-6">
              Contact
            </h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 mt-0.5" icon="solar:letter-linear" width="18"></iconify-icon>
<a className="hover:text-white transition-colors text-sm text-slate-400" href="mailto:hello@mjdesign.cz">info@mjdesign.cz</a>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 mt-0.5" icon="solar:phone-linear" width="18"></iconify-icon>
<span className="text-sm text-slate-400">+420 603 193 812</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 mt-0.5" icon="solar:map-point-linear" width="18"></iconify-icon>
<span className="text-sm text-slate-400">Opava, Czech Republic</span>
</li>
</ul>
<div className="mt-8">
<a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold uppercase tracking-wider text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/40 transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] group" href="#">
                Book a Strategy Call
                <iconify-icon className="group-hover:text-white transition-colors" icon="solar:calendar-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-slate-500">
            © 2025 MJDesign Studio. All rights reserved.
          </div>
<div className="flex items-center gap-8">
<a className="text-xs text-slate-500 hover:text-emerald-400 transition-colors" href="#">
              Privacy Policy
            </a>
<a className="text-xs text-slate-500 hover:text-emerald-400 transition-colors" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>



    </>
  );
}
