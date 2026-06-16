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



        const world = document.getElementById('world');
        const sections = document.querySelectorAll('.section-room');
        const progressBar = document.getElementById('progress-indicator');
        
        const depth = 5000;
        const roomGap = 1000;
        
        let currentScroll = 0;
        let targetScroll = 0;
        
        function update() {
            currentScroll += (targetScroll - currentScroll) * 0.06; // Slightly smoother/slower feel
            
            const zPosition = -currentScroll;
            world.style.transform = `translate3d(0, 0, ${zPosition}px)`;
            
            sections.forEach((section, index) => {
                const sectionZ = index * roomGap;
                const distance = Math.abs(sectionZ - currentScroll);
                
                let opacity = 0;
                if (distance < 900) {
                    opacity = 1 - (distance / 900);
                    // Quintic ease out for opacity
                    opacity = 1 - Math.pow(1 - opacity, 5); 
                    if(opacity > 1) opacity = 1;
                    if(opacity < 0) opacity = 0;
                }
                
                const scale = distance < 900 ? 1 : 0.95;
                
                section.style.opacity = opacity;
                section.style.transform = `translateZ(${sectionZ}px) scale(${scale})`;
                
                // Depth of field blur
                const blur = distance < 300 ? 0 : Math.min(8, (distance - 300) / 50);
                section.style.filter = `blur(${blur}px)`;
                
                // Toggle pointer events
                if (distance < 400) {
                    section.style.pointerEvents = 'auto';
                } else {
                    section.style.pointerEvents = 'none';
                }
            });
            
            requestAnimationFrame(update);
        }
        
        window.addEventListener('scroll', () => {
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = window.scrollY / maxScroll;
            targetScroll = scrollPercent * depth;
            progressBar.style.height = `${scrollPercent * 100}%`;
        });
        
        window.scrollToZ = (zValue) => {
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const fraction = zValue / depth;
            const pixelY = fraction * maxScroll;
            
            window.scrollTo({
                top: pixelY,
                behavior: 'smooth'
            });
        };

        update();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-[100] px-8 py-8 flex justify-between items-center mix-blend-difference pointer-events-none">
<div className="pointer-events-auto flex items-center gap-3">

<div className="w-8 h-8 relative hidden md:block">
<div className="absolute inset-0 bg-blue-900 rounded-bl-xl rounded-tr-xl opacity-80"></div>
<div className="absolute top-0 right-0 w-4 h-4 bg-yellow-400"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 bg-cyan-400 rounded-bl-xl"></div>
<div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-lime-400 rounded-full"></div>
</div>
<span className="text-xl font-normal tracking-tighter uppercase text-white flex flex-col md:flex-row md:items-baseline md:gap-1 leading-none">
<span className="text-cyan-400 font-medium">BIZNESS</span>
<span className="text-zinc-500 tracking-[0.2em] text-sm md:text-xl">WAREHOUSE</span>
</span>
</div>
<div className="hidden md:flex space-x-10 text-sm font-normal tracking-tight pointer-events-auto">
<a className="nav-link relative text-zinc-400 hover:text-white transition-colors" href="#" onclick="scrollToZ(0); return false;">Start</a>
<a className="nav-link relative text-zinc-400 hover:text-white transition-colors" href="#" onclick="scrollToZ(1000); return false;">Identity</a>
<a className="nav-link relative text-zinc-400 hover:text-white transition-colors" href="#" onclick="scrollToZ(2000); return false;">Production</a>
<a className="nav-link relative text-zinc-400 hover:text-white transition-colors" href="#" onclick="scrollToZ(3000); return false;">Digital</a>
<a className="nav-link relative text-zinc-400 hover:text-white transition-colors" href="#" onclick="scrollToZ(4000); return false;">Growth</a>
<a className="nav-link relative text-zinc-400 hover:text-white transition-colors" href="#" onclick="scrollToZ(5000); return false;">Contact</a>
</div>
<div className="pointer-events-auto">
<button className="bg-cyan-400 text-black px-6 py-2.5 text-sm font-semibold rounded-sm hover:bg-white transition-colors shadow-[0_0_20px_rgba(34,211,238,0.3)] tracking-tight">
                BOOK TOUR
            </button>
</div>
</nav>

<div className="fixed right-8 top-1/2 -translate-y-1/2 h-40 w-[1px] bg-zinc-800 z-[100] hidden md:block">
<div className="w-[3px] bg-cyan-400 absolute top-0 -left-[1px] transition-all duration-100 ease-out shadow-[0_0_10px_rgba(34,211,238,0.5)]" id="progress-indicator" style={{height: '0%'}}></div>
</div>

<div id="viewport">
<div id="world">

<div className="floor-grid"></div>

<section className="section-room" id="room-0" style={{transform: 'translateZ(0px)'}}>
<div className="text-center relative">

<div className="absolute -top-20 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-cyan-500/50"></div>
<div className="inline-flex items-center justify-center mb-8 px-4 py-1.5 rounded-full border border-cyan-900/50 bg-blue-950/30 backdrop-blur-sm">
<span className="iconify text-cyan-400 mr-2.5" data-icon="lucide:box" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs uppercase tracking-[0.2em] text-cyan-200 font-medium">Facility v2.0</span>
</div>
<h1 className="text-7xl md:text-9xl font-semibold text-white tracking-tighter mb-8 leading-none">
<span className="block bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">BIZNESS</span>
<span className="block text-4xl md:text-6xl text-zinc-600 font-light tracking-[0.15em] mt-2">WAREHOUSE</span>
</h1>
<p className="text-zinc-400 max-w-lg mx-auto text-base leading-relaxed mb-12 font-light">
                        Industrial-grade brand acceleration. <span className="text-cyan-400">Deep strategy</span> meets <span className="text-yellow-400">high design</span> in a multidimensional space.
                    </p>
<div className="animate-bounce mt-8 text-zinc-600">
<span className="iconify" data-icon="lucide:arrow-down" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</section>

<section className="section-room" id="room-1" style={{transform: 'translateZ(1000px)'}}>
<div className="flex flex-col md:flex-row items-center gap-16 md:gap-32 max-w-7xl px-8 w-full">

<div className="flex-1 order-2 md:order-1 space-y-8 text-left">
<div className="text-cyan-400 flex items-center space-x-3 mb-2">
<span className="iconify" data-icon="lucide:pen-tool" data-width="18" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs uppercase tracking-widest font-semibold text-cyan-400">Identity Systems</span>
</div>
<h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tighter">Constructing<br/><span className="text-zinc-500">Visual Language.</span></h2>
<p className="text-zinc-400 text-base leading-relaxed max-w-md">
                            We forge memorable marks using geometric precision. From logotypes to comprehensive guidelines, we define your market stance with bold contrast and clarity.
                        </p>
<div className="flex gap-3 mt-6">
<span className="px-3 py-1 border border-cyan-900 text-cyan-200 text-xs rounded-full">Typography</span>
<span className="px-3 py-1 border border-blue-900 text-blue-200 text-xs rounded-full">Color Theory</span>
<span className="px-3 py-1 border border-lime-900 text-lime-200 text-xs rounded-full">Motion</span>
</div>
</div>

<div className="flex-1 order-1 md:order-2 relative h-[500px] w-full flex items-center justify-center perspective-1000">

<div className="animate-float glass-panel w-72 h-96 absolute rotate-y-12 rotate-z-2 rounded-sm border-l-4 border-cyan-400 flex flex-col p-8 overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 pattern-dots opacity-20 rounded-bl-full"></div>
<div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mb-8 relative">
<div className="absolute inset-0 border border-cyan-400 rounded-full translate-x-1 translate-y-1"></div>
<span className="text-4xl font-serif italic text-white">B</span>
</div>
<div className="w-full h-px bg-zinc-700 mb-6"></div>
<div className="space-y-3">
<div className="w-full h-2 bg-zinc-800 rounded-sm overflow-hidden"><div className="h-full w-3/4 bg-cyan-500"></div></div>
<div className="w-2/3 h-2 bg-zinc-800 rounded-sm"></div>
<div className="w-1/2 h-2 bg-zinc-800 rounded-sm"></div>
</div>
<div className="mt-auto flex justify-between items-end">
<div className="w-8 h-8 rounded-full border border-yellow-400"></div>
<div className="w-4 h-4 bg-lime-400 rounded-sm"></div>
</div>
</div>

<div className="animate-float-delayed glass-panel w-48 h-48 absolute -bottom-8 -left-8 z-10 rotate-y-6 -rotate-z-3 rounded-sm border border-zinc-800 bg-black/90 flex flex-col p-4">
<div className="flex-1 grid grid-cols-2 gap-2 mb-2">
<div className="bg-cyan-400 rounded-sm"></div>
<div className="bg-blue-900 rounded-sm"></div>
<div className="bg-lime-400 rounded-sm"></div>
<div className="bg-yellow-400 rounded-sm"></div>
</div>
<span className="text-[10px] font-mono text-zinc-500">PALETTE_V1.ASE</span>
</div>
</div>
</div>
</section>

<section className="section-room" id="room-2" style={{transform: 'translateZ(2000px)'}}>
<div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-32 max-w-7xl px-8 w-full">
<div className="flex-1 space-y-8 text-left">
<div className="text-yellow-400 flex items-center space-x-3 mb-2">
<div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
<span className="text-xs uppercase tracking-widest font-semibold">Studio Production</span>
</div>
<h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tighter">High Fidelity<br/><span className="text-zinc-500">Capture.</span></h2>
<p className="text-zinc-400 text-base leading-relaxed max-w-md">
                            Industrial warehouse studio equipped for commercial shooting. Crisp lighting, dynamic angles, and premium post-production editing.
                        </p>
<div className="flex items-center space-x-6 mt-8">
<button className="flex items-center space-x-3 text-sm font-medium text-white border-b border-yellow-400 pb-1 hover:text-yellow-400 transition-colors">
<span className="iconify" data-icon="lucide:play-circle" data-width="18" style={{strokeWidth: '1.5'}}></span>
<span>Watch Showreel</span>
</button>
</div>
</div>
<div className="flex-1 relative h-[450px] w-full flex items-center justify-center">

<div className="relative w-72 h-72 rounded-full border border-zinc-800 bg-zinc-900/40 backdrop-blur-md flex items-center justify-center shadow-2xl animate-float">

<div className="absolute inset-0 border-2 border-dashed border-yellow-400/20 rounded-full scale-110 animate-[spin_20s_linear_infinite]"></div>
<div className="absolute inset-0 border border-zinc-600 rounded-full scale-90 opacity-50"></div>

<div className="w-40 h-40 rounded-full bg-gradient-to-tr from-black via-zinc-900 to-zinc-800 border border-zinc-700 flex items-center justify-center shadow-inner relative overflow-hidden">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-cyan-500/10 to-transparent"></div>
<div className="w-20 h-20 rounded-full bg-black border border-zinc-600 shadow-[0_0_30px_rgba(255,255,255,0.1)] z-10"></div>
</div>

<div className="absolute top-0 right-0 p-3 glass-panel rounded-sm border-l-2 border-yellow-400 text-[10px] text-yellow-400 font-mono tracking-widest">
                                ISO 800<br/>1/50
                            </div>
<div className="absolute bottom-6 flex gap-4">
<span className="iconify text-zinc-500" data-icon="lucide:mic-2" data-width="18" style={{strokeWidth: '1.5'}}></span>
<span className="iconify text-zinc-500" data-icon="lucide:aperture" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
</div>
</section>

<section className="section-room" id="room-3" style={{transform: 'translateZ(3000px)'}}>
<div className="flex flex-col items-center gap-12 max-w-5xl px-8 w-full">
<div className="text-center space-y-6">
<div className="text-blue-500 inline-flex items-center space-x-3 mb-2">
<span className="iconify" data-icon="lucide:code-2" data-width="18" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs uppercase tracking-widest font-semibold text-blue-400">Digital Infrastructure</span>
</div>
<h2 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter">Web &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Ecommerce</span></h2>
<p className="text-zinc-400 text-base max-w-xl mx-auto font-light">
                            Building the backbone of your digital presence. Headless CMS, responsive UI, and high-conversion storefronts engineered for speed.
                        </p>
</div>

<div className="relative w-full h-[450px] perspective-1000">

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" style={{zIndex: '0'}}>
<line stroke="#1e3a8a" strokeWidth="1" x1="30%" x2="50%" y1="50%" y2="50%"></line>
<line stroke="#1e3a8a" strokeWidth="1" x1="70%" x2="50%" y1="50%" y2="50%"></line>
</svg>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 md:w-[450px] h-72 glass-panel rounded-sm border-t-2 border-blue-600 flex flex-col overflow-hidden animate-float z-20 shadow-[0_0_50px_rgba(30,58,138,0.2)]">
<div className="h-8 border-b border-white/5 bg-[#0a0a0a] flex items-center px-4 justify-between">
<div className="flex space-x-2">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
<div className="text-[10px] text-zinc-600 font-mono">localhost:3000</div>
</div>
<div className="p-6 grid grid-cols-12 gap-4 h-full bg-[#050505] pattern-lines">
<div className="col-span-12 h-32 rounded-sm border border-blue-900/30 bg-blue-900/10 relative overflow-hidden">
<div className="absolute top-4 left-4 w-24 h-4 bg-blue-600/20 rounded-sm"></div>
<div className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-cyan-500/50"></div>
</div>
<div className="col-span-4 h-16 rounded-sm bg-zinc-900 border border-zinc-800"></div>
<div className="col-span-4 h-16 rounded-sm bg-zinc-900 border border-zinc-800"></div>
<div className="col-span-4 h-16 rounded-sm bg-zinc-900 border border-zinc-800"></div>
</div>
</div>

<div className="hidden md:block absolute left-[5%] top-1/2 -translate-y-1/2 w-64 h-80 glass-panel rounded-sm -rotate-y-12 translate-z-10 bg-[#020408] font-mono text-xs text-zinc-500 p-6 leading-loose border-l border-lime-400/50 opacity-80">
<div className="text-lime-400/20 text-[10px] mb-4">// Stack Config</div>
<span className="text-blue-400">export</span> <span className="text-cyan-400">const</span> <span className="text-yellow-200">config</span> = {<br/>
                              theme: <span className="text-lime-400">'dark'</span>,<br/>
                              ssr: <span className="text-cyan-400">true</span>,<br/>
                              api: <span className="text-lime-400">'/v1/graphql'</span><br/>
                            };<br/>
<br/>
<span className="text-zinc-600">/* Optimized for 100% uptime */</span>
</div>

<div className="hidden md:block absolute right-[10%] top-1/2 -translate-y-1/2 w-48 h-80 glass-panel rounded-xl rotate-y-12 translate-z-10 border-2 border-zinc-800 bg-black flex flex-col items-center pt-4">
<div className="w-16 h-1 rounded-full bg-zinc-800 mb-6"></div>
<div className="w-full h-full bg-zinc-900/50 rounded-t-lg p-3 space-y-3 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-cyan-400"></div>
<div className="w-full h-24 bg-gradient-to-br from-blue-900/40 to-transparent rounded-sm border border-white/5"></div>
<div className="flex gap-2">
<div className="w-1/2 h-16 bg-zinc-800/50 rounded-sm"></div>
<div className="w-1/2 h-16 bg-zinc-800/50 rounded-sm"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="section-room" id="room-4" style={{transform: 'translateZ(4000px)'}}>
<div className="flex flex-col md:flex-row items-center gap-20 max-w-7xl px-8 w-full">
<div className="flex-1 order-2 md:order-1 relative h-[400px] w-full border border-zinc-800 rounded-sm bg-[#050505] p-8 overflow-hidden group hover:border-lime-500/30 transition-colors duration-500">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
<div className="absolute inset-0 pattern-dots opacity-10"></div>

<div className="flex justify-between items-start mb-12">
<div>
<div className="text-3xl font-mono text-white mb-1">$1.2M</div>
<div className="text-[10px] uppercase text-zinc-500 tracking-widest">Revenue YTD</div>
</div>
<div className="px-2 py-1 bg-lime-400/10 border border-lime-400/20 text-lime-400 text-xs rounded-sm flex items-center gap-1">
<span className="iconify" data-icon="lucide:trending-up" data-width="12"></span> +24%
                            </div>
</div>

<div className="flex justify-between items-end h-48 space-x-4 px-2">
<div className="w-full bg-lime-900/20 border-t border-lime-500/30 h-[30%] relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-zinc-600 opacity-0 group-hover:opacity-100 transition">JAN</div></div>
<div className="w-full bg-lime-900/30 border-t border-lime-500/40 h-[50%] relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-zinc-600 opacity-0 group-hover:opacity-100 transition">FEB</div></div>
<div className="w-full bg-lime-900/40 border-t border-lime-500/50 h-[40%] relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-zinc-600 opacity-0 group-hover:opacity-100 transition">MAR</div></div>
<div className="w-full bg-lime-900/50 border-t border-lime-500/60 h-[75%] relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-zinc-600 opacity-0 group-hover:opacity-100 transition">APR</div></div>
<div className="w-full bg-gradient-to-t from-lime-900/80 to-lime-500 h-[95%] shadow-[0_0_30px_rgba(163,230,53,0.2)] relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-lime-400 opacity-100 transition">MAY</div></div>
</div>
</div>
<div className="flex-1 order-1 md:order-2 space-y-8 text-left">
<div className="text-lime-400 flex items-center space-x-3 mb-2">
<span className="iconify" data-icon="lucide:bar-chart-2" data-width="18" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs uppercase tracking-widest font-semibold">Performance Marketing</span>
</div>
<h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tighter">Scale with<br/>Data.</h2>
<p className="text-zinc-400 text-base leading-relaxed max-w-md">
                            We don't just build; we accelerate. Data-driven paid media strategies across social and search to maximize ROI and dominate the feed.
                        </p>
<div className="grid grid-cols-2 gap-4 mt-8">
<div className="p-4 border-l-2 border-lime-400 bg-zinc-900/30">
<div className="text-2xl font-normal text-white mb-1">4.5x</div>
<div className="text-[10px] text-zinc-500 uppercase tracking-wide font-medium">ROAS Average</div>
</div>
<div className="p-4 border-l-2 border-lime-400 bg-zinc-900/30">
<div className="text-2xl font-normal text-white mb-1">24/7</div>
<div className="text-[10px] text-zinc-500 uppercase tracking-wide font-medium">Optimization</div>
</div>
</div>
</div>
</div>
</section>

<section className="section-room" id="room-5" style={{transform: 'translateZ(5000px)'}}>
<div className="flex flex-col items-center w-full max-w-3xl px-6">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-10">Start The Project</h2>

<div className="w-full bg-[#050505] rounded-sm shadow-2xl overflow-hidden border-t-4 border-cyan-400 relative ring-1 ring-white/10">

<div className="bg-[#0f0f0f] px-8 py-5 border-b border-white/5 flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="iconify text-cyan-400" data-icon="lucide:terminal" data-width="14"></span>
<span className="text-xs font-mono text-zinc-400">INQUIRY_FORM.md</span>
</div>
<div className="flex space-x-2">
<div className="w-2 h-2 rounded-full bg-zinc-800"></div>
<div className="w-2 h-2 rounded-full bg-zinc-800"></div>
</div>
</div>

<div className="p-10 space-y-8 relative">

<div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-2 z-10">
<label className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Client Name</label>
<input className="custom-input w-full pb-3 text-base font-light placeholder-zinc-800" placeholder="Full Name" type="text"/>
</div>
<div className="space-y-2 z-10">
<label className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Contact Email</label>
<input className="custom-input w-full pb-3 text-base font-light placeholder-zinc-800" placeholder="name@company.com" type="email"/>
</div>
</div>
<div className="space-y-4 pt-2 z-10 relative">
<label className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold block">Service Required</label>
<div className="flex flex-wrap gap-3">
<label className="cursor-pointer checkbox-wrapper">
<input className="hidden peer" type="checkbox"/>
<div className="px-4 py-2 text-xs font-medium border border-zinc-800 rounded-sm text-zinc-400 transition-all hover:border-zinc-600">Identity</div>
</label>
<label className="cursor-pointer checkbox-wrapper">
<input className="hidden peer" type="checkbox"/>
<div className="px-4 py-2 text-xs font-medium border border-zinc-800 rounded-sm text-zinc-400 transition-all hover:border-zinc-600">Production</div>
</label>
<label className="cursor-pointer checkbox-wrapper">
<input className="hidden peer" type="checkbox"/>
<div className="px-4 py-2 text-xs font-medium border border-zinc-800 rounded-sm text-zinc-400 transition-all hover:border-zinc-600">Web Dev</div>
</label>
<label className="cursor-pointer checkbox-wrapper">
<input className="hidden peer" type="checkbox"/>
<div className="px-4 py-2 text-xs font-medium border border-zinc-800 rounded-sm text-zinc-400 transition-all hover:border-zinc-600">Growth</div>
</label>
</div>
</div>
<div className="space-y-2 pt-2 z-10">
<label className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Project Brief</label>
<textarea className="custom-input w-full pb-3 text-base font-light placeholder-zinc-800 resize-none h-24" placeholder="Briefly describe your objectives..."></textarea>
</div>
<div className="pt-6 flex justify-between items-center z-10 relative">
<span className="text-[10px] text-zinc-600 font-mono">EST_RESPONSE: 24h</span>
<button className="bg-yellow-400 text-black text-xs font-bold px-8 py-3 rounded-sm hover:bg-white transition-colors shadow-[0_0_20px_rgba(250,204,21,0.2)] tracking-wide uppercase">
                                    Submit Request
                                </button>
</div>
</div>
</div>
<footer className="mt-20 text-center pb-8 opacity-50">
<div className="flex items-center justify-center gap-2 mb-4">
<div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
<div className="w-2 h-2 bg-blue-900 rounded-full"></div>
<div className="w-2 h-2 bg-lime-400 rounded-full"></div>
<div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
</div>
<p className="text-[10px] text-zinc-600 tracking-widest uppercase">Bizness Warehouse © 2024</p>
</footer>
</div>
</section>
</div>
</div>

<div className="fog"></div>


    </>
  );
}
