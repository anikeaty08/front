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
            const tiltContainers = document.querySelectorAll('.tilt-container');

            tiltContainers.forEach(container => {
                const inner = container.querySelector('.tilt-inner');
                
                // Determine max rotation based on whether it's the hero card or a smaller product card
                const isHero = container.classList.contains('max-w-lg');
                const maxRotation = isHero ? 15 : 10;

                container.addEventListener('mousemove', (e) => {
                    // Reduce transition time for smooth tracking during movement
                    inner.style.transitionDuration = '50ms';
                    
                    const rect = container.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const rotateX = ((y - centerY) / centerY) * -maxRotation;
                    const rotateY = ((x - centerX) / centerX) * maxRotation;

                    inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                });

                container.addEventListener('mouseleave', () => {
                    // Reset transition for smooth return to original state
                    inner.style.transitionDuration = '500ms';
                    inner.style.transform = `rotateX(0deg) rotateY(0deg)`;
                });
                
                container.addEventListener('mouseenter', () => {
                    inner.style.transitionDuration = '200ms';
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/60 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-white font-medium text-sm tracking-[0.25em]" href="#">AERO</a>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Models</a>
<a className="hover:text-white transition-colors" href="#">Technology</a>
<a className="hover:text-white transition-colors" href="#">Sustainability</a>
</div>
</div>
<div className="flex items-center gap-4 text-zinc-400">
<button className="hover:text-white transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="1.25em"></iconify-icon>
</button>
<button className="hover:text-white transition-colors flex items-center gap-2">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="1.25em"></iconify-icon>
<span className="text-xs font-medium">0</span>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[95vh]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] md:w-[50rem] md:h-[50rem] bg-zinc-800/20 rounded-full blur-[100px] pointer-events-none animate-glow"></div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none z-10"></div>
<div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center relative z-20">

<div className="flex flex-col items-start gap-6 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    AERO-X1 Concept Now Live
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tighter leading-[1.1]">
                    Defy <br/>
<span className="text-zinc-600">Gravity.</span>
</h1>
<p className="text-sm md:text-base text-zinc-400 max-w-md leading-relaxed font-medium">
                    Engineered with quantum foam architecture for weightless performance. The next evolution of human movement is here.
                </p>
<div className="flex items-center gap-4 mt-2 w-full sm:w-auto">
<button className="w-full sm:w-auto bg-white text-zinc-950 px-6 py-3 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                        Pre-order <iconify-icon icon="solar:arrow-right-linear" width="1.25em"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-medium text-white border border-white/10 hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="1.25em"></iconify-icon> Play Film
                    </button>
</div>
</div>

<div className="relative w-full aspect-square max-w-lg mx-auto tilt-container perspective-[2000px] cursor-crosshair">
<div className="w-full h-full relative transition-transform duration-200 ease-out transform-style-preserve-3d tilt-inner" style={{transformStyle: 'preserve-3d'}}>

<div className="absolute inset-8 bg-gradient-to-tr from-zinc-700/40 to-transparent rounded-full blur-3xl" style={{transform: 'translateZ(-100px)'}}></div>

<div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col p-8" style={{transform: 'translateZ(0px)'}}>

<div className="flex justify-between items-center text-[10px] font-medium text-zinc-500 tracking-[0.2em] mb-4 z-10 uppercase">
<span>Aero / Protocol</span>
<span>v.1.0.4</span>
</div>

<div className="flex-grow flex items-center justify-center relative z-20">

<img alt="Aero Sneaker" className="w-[110%] max-w-none h-auto object-cover rounded-xl animate-float mix-blend-lighten opacity-90" src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" style={{filter: 'grayscale(1) contrast(1.5) brightness(0.8) drop-shadow(0 30px 40px rgba(0,0,0,0.8))', transform: 'translateZ(80px) rotate(-10deg)'}}/>
</div>

<div className="mt-auto grid grid-cols-3 gap-4 border-t border-white/5 pt-6 z-10" style={{transform: 'translateZ(40px)'}}>
<div>
<div className="text-[10px] text-zinc-500 mb-1 tracking-wider">MASS</div>
<div className="text-sm text-white font-medium tracking-tight">195g</div>
</div>
<div>
<div className="text-[10px] text-zinc-500 mb-1 tracking-wider">DROP</div>
<div className="text-sm text-white font-medium tracking-tight">4mm</div>
</div>
<div>
<div className="text-[10px] text-zinc-500 mb-1 tracking-wider">CORE</div>
<div className="text-sm text-white font-medium tracking-tight">Q-Foam</div>
</div>
</div>
</div>

<div className="absolute -right-4 top-1/4 bg-zinc-950 border border-white/10 text-white px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 backdrop-blur-md" style={{transform: 'translateZ(120px)'}}>
<iconify-icon className="text-zinc-400" icon="solar:shield-check-linear" width="1em"></iconify-icon>
<span className="text-xs font-medium tracking-tight">Verified Structure</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative z-20 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tighter mb-2">Engineered Precision</h2>
<p className="text-sm text-zinc-500 font-medium max-w-md">Every microscopic detail optimized for maximum kinetic return.</p>
</div>
<div className="flex items-center gap-2">

<span className="text-xs text-zinc-500 font-medium">Metric</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-600"></div>
</label>
<span className="text-xs text-zinc-300 font-medium">Imperial</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
<iconify-icon className="text-zinc-100 mb-6" icon="solar:wind-linear" width="2em"></iconify-icon>
<h3 className="text-base font-semibold text-white tracking-tight mb-2">AeroKnit Upper</h3>
<p className="text-xs text-zinc-400 leading-relaxed font-medium">Seamless, breathable structural mesh that adapts to micro-movements of your foot.</p>
</div>

<div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
<iconify-icon className="text-zinc-100 mb-6" icon="solar:bolt-linear" width="2em"></iconify-icon>
<h3 className="text-base font-semibold text-white tracking-tight mb-2">Kinetic Return</h3>
<p className="text-xs text-zinc-400 leading-relaxed font-medium">Proprietary sole compound recovers 94% of energy expended per footstrike.</p>
</div>

<div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
<iconify-icon className="text-zinc-100 mb-6" icon="solar:leaf-linear" width="2em"></iconify-icon>
<h3 className="text-base font-semibold text-white tracking-tight mb-2">Carbon Neutral</h3>
<p className="text-xs text-zinc-400 leading-relaxed font-medium">Manufactured using 100% renewable energy and recycled ocean plastics.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-20">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tighter mb-12">The Collection</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group flex flex-col gap-4 tilt-container perspective-[1000px]">
<div className="w-full aspect-[4/5] rounded-2xl bg-zinc-900 border border-white/5 relative overflow-hidden flex items-center justify-center tilt-inner transition-transform duration-300 ease-out" style={{transformStyle: 'preserve-3d'}}>
<img alt="Shoe" className="w-4/5 object-cover mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80" style={{transform: 'translateZ(50px)'}}/>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{transform: 'translateZ(30px)'}}>

<div className="flex gap-1 bg-zinc-950/80 backdrop-blur-md p-1 rounded-lg border border-white/10">
<button className="w-7 h-7 flex items-center justify-center text-[10px] font-medium text-white hover:bg-white/10 rounded-md">8</button>
<button className="w-7 h-7 flex items-center justify-center text-[10px] font-medium text-white hover:bg-white/10 rounded-md bg-white/10">9</button>
<button className="w-7 h-7 flex items-center justify-center text-[10px] font-medium text-white hover:bg-white/10 rounded-md">10</button>
</div>
<button className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform">
<iconify-icon icon="solar:bag-3-linear" width="1.2em"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-semibold text-white tracking-tight">Aero Phantom</h3>
<p className="text-xs text-zinc-500 font-medium">Core Collection</p>
</div>
<span className="text-sm font-medium text-white">$185</span>
</div>
</div>

<div className="group flex flex-col gap-4 tilt-container perspective-[1000px]">
<div className="w-full aspect-[4/5] rounded-2xl bg-zinc-900 border border-white/5 relative overflow-hidden flex items-center justify-center tilt-inner transition-transform duration-300 ease-out" style={{transformStyle: 'preserve-3d'}}>
<img alt="Shoe" className="w-4/5 object-cover mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80" style={{transform: 'translateZ(50px)', filter: 'hue-rotate(180deg)'}}/>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{transform: 'translateZ(30px)'}}>
<div className="flex gap-1 bg-zinc-950/80 backdrop-blur-md p-1 rounded-lg border border-white/10">
<button className="w-7 h-7 flex items-center justify-center text-[10px] font-medium text-zinc-500 cursor-not-allowed rounded-md">8</button>
<button className="w-7 h-7 flex items-center justify-center text-[10px] font-medium text-white hover:bg-white/10 rounded-md">9</button>
<button className="w-7 h-7 flex items-center justify-center text-[10px] font-medium text-white hover:bg-white/10 rounded-md bg-white/10">10</button>
</div>
<button className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform">
<iconify-icon icon="solar:bag-3-linear" width="1.2em"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-semibold text-white tracking-tight">Aero Velocity</h3>
<p className="text-xs text-zinc-500 font-medium">Track Series</p>
</div>
<span className="text-sm font-medium text-white">$210</span>
</div>
</div>

<div className="group flex flex-col gap-4 tilt-container perspective-[1000px] hidden lg:flex">
<div className="w-full aspect-[4/5] rounded-2xl bg-zinc-900 border border-white/5 relative overflow-hidden flex items-center justify-center tilt-inner transition-transform duration-300 ease-out" style={{transformStyle: 'preserve-3d'}}>
<img alt="Shoe" className="w-4/5 object-cover mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80" style={{transform: 'translateZ(50px)', filter: 'contrast(1.2)'}}/>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{transform: 'translateZ(30px)'}}>
<div className="flex gap-1 bg-zinc-950/80 backdrop-blur-md p-1 rounded-lg border border-white/10">
<button className="w-7 h-7 flex items-center justify-center text-[10px] font-medium text-white hover:bg-white/10 rounded-md bg-white/10">8</button>
<button className="w-7 h-7 flex items-center justify-center text-[10px] font-medium text-white hover:bg-white/10 rounded-md">9</button>
<button className="w-7 h-7 flex items-center justify-center text-[10px] font-medium text-zinc-500 cursor-not-allowed rounded-md">10</button>
</div>
<button className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform">
<iconify-icon icon="solar:bag-3-linear" width="1.2em"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-semibold text-white tracking-tight">Aero Stealth</h3>
<p className="text-xs text-zinc-500 font-medium">Limited Edition</p>
</div>
<span className="text-sm font-medium text-white">$250</span>
</div>
</div>
</div>
</div>
</section>

<footer className="mt-auto border-t border-white/5 py-12 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-white font-medium text-sm tracking-[0.2em]">AERO</span>
<span className="text-xs text-zinc-600 font-medium">© 2024</span>
</div>
<div className="flex items-center gap-6 text-xs font-medium text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Instagram</a>
</div>
</div>
</footer>



    </>
  );
}
