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



        // 3D Tilt Effect Logic
        const stage = document.getElementById('watch-stage');
        const container = document.querySelector('.perspective-container');

        // Mouse Move Event for 3D Tilt
        document.addEventListener('mousemove', (e) => {
            if (window.innerWidth < 768) return; // Disable on mobile

            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            
            stage.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        // Reset on Mouse Leave
        document.addEventListener('mouseleave', () => {
            stage.style.transform = `rotateY(0deg) rotateX(0deg)`;
        });

        // Smooth Entrance Animation
        window.addEventListener('load', () => {
            setTimeout(() => {
                stage.classList.remove('opacity-0');
            }, 100);
        });

        // Simple Intersection Observer for Fade-in elements
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        });

        // Apply animations to sections
        document.querySelectorAll('h2, .group').forEach((el) => {
            el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-bg"></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-6 h-6 border border-white/20 rounded-full flex items-center justify-center group-hover:border-white/60 transition-colors">
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
</div>
<span className="text-sm font-medium tracking-widest text-white uppercase">Horology</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Collection</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Heritage</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Atelier</a>
</div>
<button className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors">
                Pre-order
            </button>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] glow-spot opacity-50 pointer-events-none"></div>

<div className="perspective-container relative w-full max-w-5xl h-[600px] flex items-center justify-center pointer-events-none md:pointer-events-auto">
<div className="watch-card relative w-full h-full flex items-center justify-center" id="watch-stage">

<h1 className="absolute text-[120px] md:text-[200px] font-semibold tracking-tighter text-white/5 leading-none select-none layer-1 whitespace-nowrap">
                    PHANTOM
                </h1>


<div className="relative w-64 md:w-80 z-10 layer-3 drop-shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-3xl rounded-full"></div>
<img alt="Luxury Watch" className="relative w-full h-auto object-cover mask-image-gradient rounded-full shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/5 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out clip-circle" src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<style>.clip-circle { clip-path: circle(40% at 50% 50%); }</style>
</div>

<div className="absolute left-4 md:left-20 top-1/3 p-4 rounded-xl bg-neutral-900/40 backdrop-blur-md border border-white/10 w-48 layer-4 hidden md:block">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-white/60" icon="lucide:aperture" width="16"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider text-neutral-400">Movement</span>
</div>
<p className="text-sm text-white font-medium">Caliber 9001</p>
<div className="mt-3 h-px w-full bg-white/10"></div>
<div className="mt-3 flex justify-between items-end">
<span className="text-[10px] text-neutral-500">Auto</span>
<span className="text-[10px] text-emerald-400">72h Res</span>
</div>
</div>

<div className="absolute right-4 md:right-20 bottom-1/3 p-4 rounded-xl bg-neutral-900/40 backdrop-blur-md border border-white/10 w-48 layer-2 hidden md:block">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-white/60" icon="lucide:gem" width="16"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider text-neutral-400">Case</span>
</div>
<p className="text-sm text-white font-medium">Carbon Fiber</p>
<p className="text-[10px] text-neutral-500 mt-1">Grade 5 Titanium Bezel</p>
</div>

<div className="absolute inset-0 border border-white/5 rounded-full scale-150 opacity-20 layer-1"></div>
<div className="absolute inset-0 border border-white/5 rounded-full scale-125 opacity-20 layer-1 border-dashed"></div>
</div>
</div>

<div className="absolute bottom-10 left-0 w-full text-center z-20">
<p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">The Series 7 Edition</p>
<div className="flex justify-center gap-4">
<button className="group flex items-center gap-2 px-6 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-neutral-200 transition-all">
<span>Explore</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>

<div className="mt-12 flex justify-center animate-bounce opacity-50">
<iconify-icon className="text-neutral-500" icon="lucide:mouse" width="20"></iconify-icon>
</div>
</div>
</section>

<section className="py-32 px-6 bg-black relative z-10">
<div className="max-w-6xl mx-auto">
<div className="mb-20 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Engineering <span className="text-neutral-600">Perfection</span></h2>
<p className="text-neutral-400 max-w-lg mx-auto text-sm leading-relaxed">
                    Crafted with atomic precision using aerospace-grade materials. Designed not just to tell time, but to define it.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-neutral-900/20 border border-white/5 hover:border-white/10 transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors"></div>
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 border border-white/5 text-white">
<iconify-icon icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Sapphire Crystal</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Double-domed sapphire with anti-reflective coating on both inner and outer surfaces.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-900/20 border border-white/5 hover:border-white/10 transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors"></div>
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 border border-white/5 text-white">
<iconify-icon icon="lucide:waves" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">30 ATM Water</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Withstand pressures equivalent to a depth of 300 meters. Built for the deep.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-900/20 border border-white/5 hover:border-white/10 transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors"></div>
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 border border-white/5 text-white">
<iconify-icon icon="lucide:cpu" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Swiss Mechanics</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        COSC certified chronometer with a variation of -4/+6 seconds per day.
                    </p>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-neutral-900/10 py-12 overflow-hidden">
<div className="flex items-center gap-12 whitespace-nowrap animate-marquee">

<span className="text-6xl font-semibold text-neutral-800 tracking-tighter hover:text-neutral-700 transition-colors">TITANIUM</span>
<span className="text-6xl font-semibold text-white/5 tracking-tighter">—</span>
<span className="text-6xl font-semibold text-neutral-800 tracking-tighter hover:text-neutral-700 transition-colors">CERAMIC</span>
<span className="text-6xl font-semibold text-white/5 tracking-tighter">—</span>
<span className="text-6xl font-semibold text-neutral-800 tracking-tighter hover:text-neutral-700 transition-colors">SAPPHIRE</span>
<span className="text-6xl font-semibold text-white/5 tracking-tighter">—</span>
<span className="text-6xl font-semibold text-neutral-800 tracking-tighter hover:text-neutral-700 transition-colors">AUTOMATIC</span>
<span className="text-6xl font-semibold text-white/5 tracking-tighter">—</span>
<span className="text-6xl font-semibold text-neutral-800 tracking-tighter hover:text-neutral-700 transition-colors">TITANIUM</span>
<span className="text-6xl font-semibold text-white/5 tracking-tighter">—</span>
<span className="text-6xl font-semibold text-neutral-800 tracking-tighter hover:text-neutral-700 transition-colors">CERAMIC</span>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2 relative h-[500px] bg-neutral-900/30 rounded-3xl overflow-hidden border border-white/5 group">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-64 h-64 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute w-48 h-48 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute w-32 h-32 border border-dotted border-white/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
<div className="absolute w-2 h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent rotate-45"></div>
</div>
<div className="absolute bottom-6 left-6">
<div className="px-3 py-1 bg-white/10 backdrop-blur rounded text-[10px] text-white/80 border border-white/10">FIG 01. ASSEMBLY</div>
</div>
</div>
<div className="w-full md:w-1/2 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-medium tracking-wide uppercase">
                    Available Now
                </div>
<h2 className="text-4xl font-semibold text-white tracking-tight leading-tight">
                    Beyond the <br/>
<span className="text-neutral-500">Boundaries of Time.</span>
</h2>
<div className="space-y-6 text-neutral-400 text-sm leading-relaxed border-l border-white/10 pl-6">
<p>
                        The Phantom Series 7 is the culmination of three decades of horological research. We stripped away the non-essential to reveal the pure mechanical heart of the machine.
                    </p>
<p>
                        Every screw, spring, and gear is polished by hand. The dial is cut from a single block of aerospace carbon fiber, ensuring no two watches are exactly alike.
                    </p>
</div>
<div className="pt-4 flex items-center gap-6">
<div className="flex flex-col">
<span className="text-[10px] text-neutral-500 uppercase tracking-wider">Price</span>
<span className="text-xl font-medium text-white">$4,250</span>
</div>
<button className="bg-white hover:bg-neutral-200 text-black px-8 py-3 rounded-full text-sm font-medium transition-colors">
                        Add to Cart
                    </button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 px-6 bg-black">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-4 h-4 border border-white/20 rounded-full flex items-center justify-center">
<div className="w-1 h-1 bg-white rounded-full"></div>
</div>
<span className="text-sm font-medium tracking-widest text-white uppercase">Horology</span>
</div>
<p className="text-xs text-neutral-500 max-w-xs">
                    Designed in Zurich. Assembled in Geneva. <br/>
                    © 2024 Horology Inc. All rights reserved.
                </p>
</div>
<div className="flex gap-12">
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold text-white mb-1">Product</span>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Series 7</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Limited Edition</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Straps</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold text-white mb-1">Company</span>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">About</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Contact</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Press</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold text-white mb-1">Social</span>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Instagram</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Twitter</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
