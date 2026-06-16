import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



/*
Sequence animation on scroll when visible. Requires Animation Keyframe. Usage:
1) Insert this code in the <head> along with the Animation Keyframe code.
2) Add to Tailwind Classes: [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll
*/
(function () {
// Inject CSS for paused/running states
const style = document.createElement("style");
style.textContent = `
/* Default: paused */
.animate-on-scroll { animation-play-state: paused !important; }
/* Activated by JS */
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el); // observing twice is a no-op
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="overflow-hidden bg-[#080808] w-full max-w-[1400px] border-white/5 border relative shadow-2xl" style={{}}>

<header className="flex flex-col lg:flex-row z-30 bg-[#080808]/80 border-white/5 border-b pt-6 pr-6 pb-6 pl-6 relative backdrop-blur-md items-center justify-between" style={{}}>
<div className="beam-border-h"></div>
<div className="flex items-center gap-12 w-full lg:w-auto justify-between lg:justify-start">

<div className="flex items-center gap-3 text-white hover:text-[#3B82F6] transition-colors cursor-pointer group" style={{}}>
<svg className="group-hover:rotate-90 transition-transform duration-500" data-icon-set="simple-icons" data-simple-icons="openai" height="24" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22.282 9.821a6 6 0 0 0-.516-4.91a6.05 6.05 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a6 6 0 0 0-3.998 2.9a6.05 6.05 0 0 0 .743 7.097a5.98 5.98 0 0 0 .51 4.911a6.05 6.05 0 0 0 6.515 2.9A6 6 0 0 0 13.26 24a6.06 6.06 0 0 0 5.772-4.206a6 6 0 0 0 3.997-2.9a6.06 6.06 0 0 0-.747-7.073M13.26 22.43a4.48 4.48 0 0 1-2.876-1.04l.141-.081l4.779-2.758a.8.8 0 0 0 .392-.681v-6.737l2.02 1.168a.07.07 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494M3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085l4.783 2.759a.77.77 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646M2.34 7.896a4.5 4.5 0 0 1 2.366-1.973V11.6a.77.77 0 0 0 .388.677l5.815 3.354l-2.02 1.168a.08.08 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.08.08 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667m2.01-3.023l-.141-.085l-4.774-2.782a.78.78 0 0 0-.785 0L9.409 9.23V6.897a.07.07 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.8.8 0 0 0-.393.681zm1.097-2.365l2.602-1.5l2.607 1.5v2.999l-2.597 1.5l-2.607-1.5Z" fill="currentColor"></path></svg>
<span className="font-mono text-sm tracking-widest uppercase font-manrope" style={{}}>Neural<span className="text-neutral-600 font-manrope" style={{}}>Mind</span></span>
</div>

<nav className="hidden lg:flex gap-8 font-mono text-[10px] tracking-widest font-medium text-neutral-500" style={{}}>
<a className="hover:text-white transition-colors flex items-center gap-2 group font-manrope" href="#" style={{}}>
<span className="w-1 h-1 bg-transparent group-hover:bg-[#3B82F6] rounded-full transition-colors"></span>
                        MATRIX
                    </a>
<a className="hover:text-white transition-colors flex items-center gap-2 group font-manrope" href="#" style={{}}>
<span className="w-1 h-1 bg-transparent group-hover:bg-[#3B82F6] rounded-full transition-colors"></span>
                        PROTOCOL
                    </a>
<a className="hover:text-white transition-colors flex items-center gap-2 group font-manrope" href="#" style={{}}>
<span className="w-1 h-1 bg-transparent group-hover:bg-[#3B82F6] rounded-full transition-colors"></span>
                        LABS
                    </a>
</nav>
</div>
<div className="flex items-center gap-6 mt-4 lg:mt-0 w-full lg:w-auto justify-between lg:justify-end">
<div className="flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-white/[0.02]" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" style={{}}></span>
<span className="font-mono text-[10px] font-medium uppercase tracking-wider text-neutral-400 font-manrope" style={{}}>Systems Online</span>
</div>
<button className="text-white hover:text-[#3B82F6] transition-colors" style={{}}>
<iconify-icon icon="solar:menu-dots-bold-duotone" width="24"></iconify-icon>
</button>
</div>
</header>

<main className="grid grid-cols-1 lg:grid-cols-12 min-h-[800px] relative">

<div className="lg:col-span-5 relative flex flex-col justify-between border-r border-white/5 bg-[#050505]" style={{}}>

<div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
<div className="relative p-8 lg:p-12 flex flex-col h-full z-10 justify-center">
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
<div className="inline-flex items-center gap-3 px-3 py-1 border border-white/10 font-mono text-[10px] font-medium tracking-widest mb-10 bg-white/[0.03] text-[#3B82F6]/80 backdrop-blur-sm font-manrope" style={{}}>
<span className="w-1 h-1 bg-[#3B82F6]" style={{}}></span>
                            SYS 2.0 // ALPHA
                        </div>
<h1 className="lg:text-[5rem] leading-[0.9] uppercase text-6xl text-white tracking-tighter mb-8 font-manrope font-medium" style={{}}>
                            Neural <br/>
<span className="text-neutral-600 font-manrope font-medium" style={{}}>Synthesis</span>
</h1>
<p className="leading-relaxed text-base font-light text-neutral-400 max-w-sm mb-12 font-manrope" style={{}}>Converting chaotic data streams into structured cognitive models. The benchmark for autonomous reasoning engines.</p>
<div className="flex items-center gap-6">

<div className="btn-wrapper">
<div className="line horizontal top" style={{height: '1px', width: '100%', top: '-1px', left: '0'}}></div>
<div className="line vertical right" style={{width: '1px', height: '100%', top: '0', right: '-1px'}}></div>
<div className="line horizontal bottom" style={{height: '1px', width: '100%', bottom: '-1px', left: '0'}}></div>
<div className="line vertical left" style={{width: '1px', height: '100%', top: '0', left: '-1px'}}></div>
<div className="dot top left"></div>
<div className="dot top right"></div>
<div className="dot bottom right"></div>
<div className="dot bottom left"></div>
<button className="btn gap-3">
<span className="font-manrope" style={{}}>Initialize Core</span>
<iconify-icon className="" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
<button className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-[#3B82F6] hover:text-[#3B82F6] text-neutral-500 transition-colors bg-white/[0.02]" style={{}}>
<iconify-icon className="" icon="solar:play-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="border-t border-white/5 bg-[#080808] p-6 lg:px-12 lg:py-8 flex items-center gap-6 relative z-10" style={{}}>
<span className="text-[#3B82F6] font-mono text-xl font-manrope" style={{}}>///</span>
<span className="font-mono text-xs tracking-widest uppercase text-neutral-500 font-manrope" style={{}}>Latency Removed</span>
</div>
</div>

<div className="lg:col-span-4 flex flex-col border-r border-white/5 relative bg-[#060606]" style={{}}>

<div className="beam-border-v"></div>

<div className="relative h-[400px] lg:h-[60%] overflow-hidden group border-b border-white/5" style={{}}>

<div className="absolute inset-0 bg-[#050505]/40 z-10 mix-blend-multiply"></div>
<img alt="Abstract Liquid 3D" className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 opacity-60 transition-transform duration-[2s] group-hover:scale-110" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] z-10 opacity-50"></div>
<button className="absolute top-8 right-8 w-14 h-14 border border-white/10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center hover:border-[#3B82F6] hover:text-[#3B82F6] text-white transition-all z-20 group/btn" style={{}}>
<iconify-icon className="group-hover/btn:rotate-45 transition-transform duration-300" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</button>

<div className="absolute bottom-8 left-8 z-20 flex gap-4">
<div className="px-3 py-1 bg-black/80 border border-white/10 backdrop-blur text-[10px] font-mono text-white tracking-widest uppercase font-manrope" style={{}}>
                            Rendering Node 01
                        </div>
</div>
</div>

<div className="h-auto lg:h-[40%] bg-[#080808] p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden min-h-[300px]">
<div className="absolute inset-0 grid-bg opacity-10"></div>
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.15s_both] relative z-10">
<div className="flex justify-between items-start mb-8 lg:mb-0">
<div className="flex gap-2">
<span className="w-2 h-2 rounded-sm bg-[#3B82F6] shadow-[0_0_10px_#3B82F6]" style={{}}></span>
<span className="w-2 h-2 rounded-sm bg-white/10"></span>
<span className="w-2 h-2 rounded-sm bg-white/10"></span>
</div>
<iconify-icon className="text-neutral-600 hover:text-white transition-colors cursor-pointer" icon="solar:settings-linear" style={{}} width="20"></iconify-icon>
</div>
<div className="">
<div className="text-5xl lg:text-6xl tracking-tighter mb-2 text-white font-manrope font-medium" style={{}}>
                                98.4<span className="text-2xl text-neutral-600 align-top ml-1 font-manrope font-medium" style={{}}>%</span>
</div>
<p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-8 font-manrope" style={{}}>Processing Capacity</p>

<div className="w-full h-px bg-white/10 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full w-[70%] bg-[#3B82F6] shadow-[0_0_15px_#3B82F6]" style={{}}></div>
</div>
<div className="flex justify-between mt-4 font-mono text-[10px] text-neutral-600" style={{}}>
<span className="hover:text-[#3B82F6] cursor-pointer transition-colors font-manrope" style={{}}>GEN 1</span>
<span className="hover:text-[#3B82F6] cursor-pointer transition-colors font-manrope" style={{}}>GEN 2</span>
<span className="text-white font-manrope" style={{}}>GEN 3</span>
<span className="hover:text-[#3B82F6] cursor-pointer transition-colors font-manrope" style={{}}>GEN 4</span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 flex flex-col bg-[#050505] relative">

<div className="beam-border-v"></div>

<div className="flex-1 p-8 lg:p-10 border-b border-white/5 hover:bg-white/[0.02] transition-colors group cursor-pointer flex flex-col justify-center relative overflow-hidden min-h-[160px]" style={{}}>
<div className="absolute right-0 top-0 w-[2px] h-0 bg-[#3B82F6] group-hover:h-full transition-all duration-500 ease-in-out" style={{}}></div>
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
<span className="font-mono text-[10px] text-neutral-600 mb-4 block group-hover:text-[#3B82F6] transition-colors font-manrope" style={{}}>/01</span>
<h3 className="text-2xl lg:text-3xl tracking-tight mb-2 text-white group-hover:translate-x-2 transition-transform duration-300 font-manrope font-medium" style={{}}>ADAPTIVE</h3>
<p className="text-xs text-neutral-500 font-mono tracking-wide font-manrope" style={{}}>Real-time mutation</p>
</div>
</div>

<div className="flex-1 p-8 lg:p-10 border-b border-white/5 hover:bg-white/[0.02] transition-colors group cursor-pointer flex flex-col justify-center relative overflow-hidden min-h-[160px]" style={{}}>
<div className="absolute right-0 top-0 w-[2px] h-0 bg-[#3B82F6] group-hover:h-full transition-all duration-500 ease-in-out delay-75" style={{}}></div>
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.15s_both]">
<span className="font-mono text-[10px] text-neutral-600 mb-4 block group-hover:text-[#3B82F6] transition-colors font-manrope" style={{}}>/02</span>
<h3 className="text-2xl lg:text-3xl tracking-tight mb-2 text-white group-hover:translate-x-2 transition-transform duration-300 font-manrope font-medium" style={{}}>COGNITIVE</h3>
<p className="text-xs text-neutral-500 font-mono tracking-wide font-manrope" style={{}}>Deep logic chains</p>
</div>
</div>

<div className="flex-1 p-8 lg:p-10 border-b border-white/5 hover:bg-white/[0.02] transition-colors group cursor-pointer flex flex-col justify-center relative overflow-hidden min-h-[160px]" style={{}}>
<div className="absolute right-0 top-0 w-[2px] h-0 bg-[#3B82F6] group-hover:h-full transition-all duration-500 ease-in-out delay-150" style={{}}></div>
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
<span className="font-mono text-[10px] text-neutral-600 mb-4 block group-hover:text-[#3B82F6] transition-colors font-manrope" style={{}}>/03</span>
<h3 className="text-2xl lg:text-3xl tracking-tight mb-2 text-white group-hover:translate-x-2 transition-transform duration-300 font-manrope font-medium" style={{}}>MODULAR</h3>
<p className="text-xs text-neutral-500 font-mono tracking-wide font-manrope" style={{}}>Stackable logic</p>
</div>
</div>

<div className="flex-1 p-8 lg:p-10 flex flex-col justify-center relative overflow-hidden group cursor-pointer min-h-[160px]">

<div className="absolute inset-0 bg-[#3B82F6] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" style={{}}></div>
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.25s_both] relative z-10 group-hover:text-white transition-colors duration-300">
<h3 className="text-2xl tracking-tight uppercase mb-1 text-white group-hover:text-white font-manrope font-medium" style={{}}>Access Beta</h3>
<p className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 group-hover:text-white/80 font-manrope" style={{}}>Limited nodes open</p>
</div>
<iconify-icon className="absolute bottom-8 right-8 text-neutral-700 group-hover:text-white group-hover:rotate-45 transition-transform duration-300 z-10" icon="solar:arrow-right-up-linear" style={{}} width="32"></iconify-icon>
</div>
</div>
</main>

<div className="flex flex-col lg:px-12 overflow-hidden bg-[#050505] w-full z-10 border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative" style={{}}>

<div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>
<div className="max-w-[1400px] w-full mx-auto relative z-10">

<div className="flex justify-start mb-12 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
<div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-500/[0.05] border border-blue-500/20 backdrop-blur-sm text-[#3B82F6] text-[10px] font-mono font-medium tracking-widest uppercase hover:bg-blue-500/10 transition-colors cursor-default" style={{}}>
<iconify-icon icon="solar:server-square-linear" width="16"></iconify-icon>
<span className="font-manrope" style={{}}>System Architecture</span>
</div>
</div>

<div className="relative animate-on-scroll [animation:animationIn_0.8s_ease-out_0.15s_both]">

<div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[80%] bg-[#3B82F6]/5 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
<h3 className="leading-[1.1] text-3xl md:text-5xl lg:text-6xl text-neutral-500 tracking-tight max-w-5xl font-manrope font-medium" style={{}}>
<span className="text-white font-manrope font-medium" style={{}}>We construct the neural pathways</span>
                        for the next generation of synthetic intelligence. A decentralized lattice designed for 
                        <span className="text-white font-manrope font-medium" style={{}}>infinite scalability</span>
                        and zero-latency reasoning.
                    </h3>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 mt-24 pt-12 border-t border-white/5 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]" style={{}}>

<div className="flex flex-col gap-2">
<div className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter font-manrope font-medium" style={{}}>
                            99.99<span className="text-2xl text-neutral-600 font-manrope font-medium" style={{}}>%</span>
</div>
<div className="text-sm font-mono tracking-widest uppercase text-neutral-500 font-manrope" style={{}}>
                            System Uptime
                        </div>
</div>

<div className="flex flex-col gap-2">
<div className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter font-manrope font-medium" style={{}}>
                            840<span className="text-2xl text-neutral-600 font-manrope font-medium" style={{}}>PF</span>
</div>
<div className="text-sm font-mono tracking-widest uppercase text-neutral-500 font-manrope" style={{}}>
                            Compute Power
                        </div>
</div>

<div className="flex flex-col gap-2">
<div className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter font-manrope font-medium" style={{}}>
                            45<span className="text-2xl text-neutral-600 font-manrope font-medium" style={{}}>B+</span>
</div>
<div className="text-sm font-mono tracking-widest uppercase text-neutral-500 font-manrope" style={{}}>
                            Parameters Tuned
                        </div>
</div>

<div className="flex flex-col gap-2">
<div className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter font-manrope font-medium" style={{}}>
                            &lt;12<span className="text-2xl text-neutral-600 font-manrope font-medium" style={{}}>ms</span>
</div>
<div className="text-sm font-mono tracking-widest uppercase text-neutral-500 font-manrope" style={{}}>
                            Global Latency
                        </div>
</div>
</div>

<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.25s_both] mt-24">
<p className="text-[10px] font-mono font-medium mb-10 uppercase tracking-widest text-neutral-600 font-manrope" style={{}}>
                        Integrated with Core Infrastructure
                    </p>
<div className="flex flex-wrap gap-x-12 gap-y-8 items-center">
<iconify-icon className="text-white opacity-40 grayscale hover:opacity-100 hover:text-blue-500 hover:grayscale-0 transition-all duration-700" height="36" icon="simple-icons:vercel" style={{}} width="96"></iconify-icon>
<iconify-icon className="text-white opacity-40 grayscale hover:opacity-100 hover:text-blue-500 hover:grayscale-0 transition-all duration-700" height="36" icon="simple-icons:stripe" style={{}} width="96"></iconify-icon>
<iconify-icon className="text-white opacity-40 grayscale hover:opacity-100 hover:text-blue-500 hover:grayscale-0 transition-all duration-700" height="36" icon="simple-icons:nvidia" style={{}} width="96"></iconify-icon>
<iconify-icon className="text-white opacity-40 grayscale hover:opacity-100 hover:text-blue-500 hover:grayscale-0 transition-all duration-700" height="36" icon="simple-icons:datadog" style={{}} width="96"></iconify-icon>
<iconify-icon className="text-white opacity-40 grayscale hover:opacity-100 hover:text-blue-500 hover:grayscale-0 transition-all duration-700" height="36" icon="simple-icons:amazonaws" style={{}} width="96"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row w-full border-t border-white/5 bg-[#050505] relative z-10 group/section" style={{}}>

<div className="lg:w-[40%] lg:border-b-0 lg:border-r lg:p-16 flex flex-col overflow-hidden bg-[#050505] w-full border-white/5 border-b pt-8 pr-8 pb-8 pl-8 relative justify-between" style={{}}>

<div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" style={{}}></div>
<div className="relative z-10 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">

<div className="inline-flex items-center gap-2 px-3 py-1 mb-16 rounded-full border border-white/10 bg-white/[0.02] w-fit" style={{}}>
<iconify-icon className="text-white text-xs" icon="solar:bolt-linear" style={{}}></iconify-icon>
<span className="text-[10px] font-mono font-medium tracking-widest uppercase text-neutral-400 font-manrope" style={{}}>System Core</span>
</div>

<h2 className="text-5xl lg:text-7xl text-white leading-[0.95] tracking-tight mb-8 font-instrument-serif" style={{}}>
<span className="block mb-2 text-neutral-300 font-manrope font-medium" style={{}}>Architected for</span>
<span className="text-white font-manrope font-medium" style={{}}>Synaptic</span> <span className="text-neutral-700 font-manrope font-medium" style={{}}>&amp;</span>
<span className="text-neutral-500 font-manrope font-medium" style={{}}>Velocity</span>
</h2>

<p className="text-neutral-500 text-sm lg:text-base leading-relaxed max-w-sm font-light mt-8 font-manrope" style={{}}>
                        We don't just process data; we engineer digital nervous systems that evolve with your cognitive throughput demands.
                    </p>
</div>

<div className="relative z-10 mt-16 lg:mt-0 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.15s_both]">
<button className="group md:w-auto inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] w-full rounded-none p-[1px] relative items-center justify-center">
<span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#3B82F6_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
<span className="absolute inset-0 rounded-none bg-white/10 transition-opacity duration-300 group-hover:opacity-0"></span>
<span className="flex items-center justify-between gap-8 text-[11px] uppercase transition-colors duration-300 group-hover:bg-[#080808] font-medium text-white tracking-widest font-mono bg-[#050505] w-full h-full rounded-none pt-4 pr-6 pb-4 pl-6 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
<span className="relative z-10">Initialize Integration</span>
<iconify-icon className="relative z-10 text-white transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{}} width="18"></iconify-icon>
</span>
</button>
</div>
</div>

<div className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2">
<div className="p-10 lg:p-14 border-b md:border-r border-white/5 flex flex-col gap-6 hover:bg-white/[0.01] transition-colors group relative animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]" style={{}}>
<div className="w-12 h-12 border border-white/10 flex items-center justify-center rounded bg-black/50 text-neutral-400 group-hover:text-[#3B82F6] group-hover:border-[#3B82F6]/30 transition-colors duration-300" style={{}}>
<iconify-icon icon="solar:rocket-2-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-2xl text-white mb-3 font-manrope font-medium" style={{}}>Latency Nullified</h3>
<p className="text-neutral-500 text-sm leading-relaxed font-light font-manrope" style={{}}>Deploy inference-ready nodes in milliseconds. Our pre-warmed neural pathways eliminate cold-start latency entirely.</p>
</div>
</div>
<div className="lg:p-14 flex flex-col gap-6 hover:bg-white/[0.01] transition-colors group border-white/5 border-b pt-10 pr-10 pb-10 pl-10 relative gap-x-6 gap-y-6 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.15s_both]" style={{}}>
<div className="w-12 h-12 border border-white/10 flex items-center justify-center rounded bg-black/50 text-neutral-400 group-hover:text-[#3B82F6] group-hover:border-[#3B82F6]/30 transition-colors duration-300" style={{}}>
<iconify-icon className="" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-2xl text-white mb-3 font-manrope font-medium" style={{}}>Neural Encryption</h3>
<p className="text-neutral-500 text-sm leading-relaxed font-light font-manrope" style={{}}>Quantum-resistant cryptography for every synapse. Your logic models remain sovereign within our secure enclave.</p>
</div>
</div>
<div className="p-10 lg:p-14 border-b md:border-r border-white/5 flex flex-col gap-6 hover:bg-white/[0.01] transition-colors group relative animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]" style={{}}>
<div className="w-12 h-12 border border-white/10 flex items-center justify-center rounded bg-black/50 text-neutral-400 group-hover:text-[#3B82F6] group-hover:border-[#3B82F6]/30 transition-colors duration-300" style={{}}>
<iconify-icon className="" icon="solar:graph-new-up-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-2xl text-white mb-3 font-manrope font-medium" style={{}}>Cognitive Scaling</h3>
<p className="leading-relaxed text-sm font-light text-neutral-500 font-manrope">Architecture that scales from a single neuron to a global hive mind without manual intervention or oversight.</p>
</div>
</div>
<div className="p-10 lg:p-14 border-b border-white/5 flex flex-col gap-6 hover:bg-white/[0.01] transition-colors group relative animate-on-scroll [animation:animationIn_0.8s_ease-out_0.25s_both]" style={{}}>
<div className="w-12 h-12 border border-white/10 flex items-center justify-center rounded bg-black/50 text-neutral-400 group-hover:text-[#3B82F6] group-hover:border-[#3B82F6]/30 transition-colors duration-300" style={{}}>
<iconify-icon icon="solar:code-square-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-2xl text-white mb-3 font-manrope font-medium" style={{}}>Protocol Native</h3>
<p className="text-neutral-500 text-sm leading-relaxed font-light font-manrope" style={{}}>Direct integration with PyTorch and TensorFlow. Written by machine learning engineers for AI researchers.</p>
</div>
</div>
<div className="p-10 lg:p-14 md:border-r border-white/5 flex flex-col gap-6 hover:bg-white/[0.01] transition-colors group relative animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both]" style={{}}>
<div className="w-12 h-12 border border-white/10 flex items-center justify-center rounded bg-black/50 text-neutral-400 group-hover:text-[#3B82F6] group-hover:border-[#3B82F6]/30 transition-colors duration-300" style={{}}>
<iconify-icon className="" icon="solar:user-hand-up-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-2xl text-white mb-3 font-manrope font-medium" style={{}}>Direct Uplink</h3>
<p className="text-neutral-500 text-sm leading-relaxed font-light font-manrope" style={{}}>Instant access to core architects. We don't hide behind automated responses when your model training is live.</p>
</div>
</div>
<div className="p-10 lg:p-14 flex flex-col gap-6 hover:bg-white/[0.01] transition-colors group relative animate-on-scroll [animation:animationIn_0.8s_ease-out_0.35s_both]">
<div className="w-12 h-12 border border-white/10 flex items-center justify-center rounded bg-black/50 text-neutral-400 group-hover:text-[#3B82F6] group-hover:border-[#3B82F6]/30 transition-colors duration-300" style={{}}>
<iconify-icon className="" icon="solar:global-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-2xl text-white mb-3 font-manrope font-medium" style={{}}>Global Mesh</h3>
<p className="text-neutral-500 text-sm leading-relaxed font-light font-manrope" style={{}}>Data propagation across 40+ edge regions ensuring your logic executes as close to the input source as possible.</p>
</div>
</div>
</div>
</div>

<div className="md:px-12 overflow-hidden flex flex-col z-10 text-center bg-[#050505] border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative items-center">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both] flex flex-col w-full items-center">
<h2 className="md:text-6xl lg:text-7xl text-5xl font-medium text-white tracking-tighter font-manrope mb-6" style={{}}>Ready to scale?</h2>
<p className="md:text-xl leading-relaxed text-lg font-light text-neutral-400 font-manrope max-w-2xl mb-12" style={{}}>Join thousands of teams accelerating inference, cutting global latency, and shipping reliable intelligence across every node.</p>
<div className="flex flex-col sm:flex-row gap-5 gap-x-5 gap-y-5 items-center">
<button className="uppercase hover:bg-[#3B82F6] hover:text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all hover:-translate-y-1 duration-300 flex group text-xs font-medium text-black tracking-widest font-mono bg-white rounded-none pt-4 pr-8 pb-4 pl-8 gap-x-3 gap-y-3 items-center">Initialize Node<iconify-icon className="group-hover:rotate-12 transition-transform" icon="solar:bolt-bold" width="14"></iconify-icon></button>
<button className="uppercase hover:bg-[#3B82F6]/10 hover:text-[#3B82F6] hover:border-[#3B82F6] transition-all flex group hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] text-xs font-medium text-neutral-300 tracking-widest font-mono border-white/10 border rounded-none pt-4 pr-8 pb-4 pl-8 gap-x-3 gap-y-3 items-center" style={{}}>
            Read Protocol
            <iconify-icon className="group-hover:translate-x-1 transition-transform text-neutral-500 group-hover:text-[#3B82F6]" icon="solar:arrow-right-linear" style={{}} width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<footer className="md:px-12 z-10 bg-[#050505] border-white/5 border-t pt-16 pr-6 pb-8 pl-6 relative -multi" style={{}}>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
<div className="lg:col-span-2 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
<div className="text-xl font-bold text-white tracking-tight font-manrope mb-4" style={{}}>neuralmind<span className="text-neutral-400" style={{}}>.io</span></div>
<p className="leading-relaxed text-sm text-neutral-500 font-manrope max-w-xs" style={{}}>
                        The neural layer for high-velocity teams—automate workflows, harden systems, and scale intelligence across every node.
                    </p>
</div>
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.15s_both]">
<h4 className="text-white font-medium text-sm mb-6 font-manrope" style={{}}>Product</h4>
<ul className="space-y-4 text-sm text-neutral-500 font-manrope" style={{}}>
<li className=""><a className="hover:text-blue-500 transition-colors" href="#" style={{}}>Features</a></li>
<li className=""><a className="hover:text-blue-500 transition-colors" href="#" style={{}}>Integrations</a></li>
<li className=""><a className="hover:text-blue-500 transition-colors" href="#" style={{}}>Pricing</a></li>
<li className=""><a className="hover:text-blue-500 transition-colors" href="#" style={{}}>Changelog</a></li>
</ul>
</div>
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
<h4 className="text-white font-medium text-sm mb-6 font-manrope" style={{}}>Resources</h4>
<ul className="space-y-4 text-sm text-neutral-500 font-manrope" style={{}}>
<li className=""><a className="hover:text-blue-500 transition-colors" href="#" style={{}}>Documentation</a></li>
<li className=""><a className="hover:text-blue-500 transition-colors" href="#" style={{}}>API Reference</a></li>
<li className=""><a className="hover:text-blue-500 transition-colors" href="#" style={{}}>Community</a></li>
<li className=""><a className="hover:text-blue-500 transition-colors" href="#" style={{}}>Blog</a></li>
</ul>
</div>
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.25s_both]">
<h4 className="text-white font-medium text-sm mb-6 font-manrope" style={{}}>Company</h4>
<ul className="space-y-4 text-sm text-neutral-500 font-manrope" style={{}}>
<li className=""><a className="hover:text-blue-500 transition-colors" href="#" style={{}}>About</a></li>
<li className=""><a className="hover:text-blue-500 transition-colors" href="#" style={{}}>Careers</a></li>
<li className=""><a className="hover:text-blue-500 transition-colors" href="#" style={{}}>Legal</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#" style={{}}>Contact</a></li>
</ul>
</div>
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both]">
<h4 className="text-white font-medium text-sm mb-6 font-manrope" style={{}}>Legal</h4>
<ul className="space-y-4 text-sm text-neutral-500 font-manrope" style={{}}>
<li className=""><a className="hover:text-blue-500 transition-colors" href="#" style={{}}>Privacy</a></li>
<li className=""><a className="hover:text-blue-500 transition-colors" href="#" style={{}}>Terms</a></li>
<li className=""><a className="hover:text-blue-500 transition-colors" href="#" style={{}}>Security</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row gap-4 border-white/5 border-t pt-8 gap-x-4 gap-y-4 items-center justify-between" style={{}}>
<p className="text-xs text-neutral-600 font-manrope" style={{}}>© 2025 Neuralmind Inc. All rights reserved.</p>
<div className="flex gap-6 text-neutral-500 items-center" style={{}}>
<a className="hover:text-blue-500 transition-colors" href="#" style={{}}>
<iconify-icon icon="simple-icons:x" width="16"></iconify-icon>
</a>
<a className="hover:text-blue-500 transition-colors" href="#" style={{}}>
<iconify-icon icon="simple-icons:github" width="18"></iconify-icon>
</a>
<a className="hover:text-blue-500 transition-colors" href="#" style={{}}>
<iconify-icon icon="simple-icons:linkedin" width="18"></iconify-icon>
</a>
</div>
</div>
</footer>
</div>

    </>
  );
}
