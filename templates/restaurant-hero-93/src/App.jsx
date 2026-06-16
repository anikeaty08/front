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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

<div className="absolute top-[-10%] left-[20%] w-[50vw] h-[50vw] bg-orange-900/30 rounded-full blur-[120px] mix-blend-screen animate-drift opacity-60"></div>

<div className="absolute bottom-[-10%] right-[10%] w-[40vw] h-[40vw] bg-lime-900/20 rounded-full blur-[100px] mix-blend-screen animate-drift opacity-50" style={{animationDelay: '-5s'}}></div>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDI1Ii8+Cjwvc3ZnPg==')] opacity-30"></div>
</div>

<div className="relative z-10 w-full h-full flex flex-col animate-camera">

<nav className="w-full px-8 py-6 flex justify-between items-center z-50">

<div className="glass px-5 py-2 rounded-full flex items-center gap-3 fade-in" style={{animation: 'fade-in-up 0.8s ease-out forwards'}}>
<span className="text-lg tracking-tight font-semibold text-orange-50">GUSTO</span>
</div>

<div className="hidden md:flex gap-8 items-center glass px-8 py-3 rounded-full text-xs font-medium tracking-wide text-stone-300" style={{animation: 'fade-in-up 0.8s ease-out 0.2s forwards', opacity: '0'}}>
<a className="hover:text-white transition-colors duration-300" href="#">MENU</a>
<a className="hover:text-white transition-colors duration-300" href="#">RESERVATIONS</a>
<a className="hover:text-white transition-colors duration-300" href="#">CHEF'S TABLE</a>
<a className="hover:text-white transition-colors duration-300" href="#">STORY</a>
</div>

<div className="flex items-center gap-4" style={{animation: 'fade-in-up 0.8s ease-out 0.4s forwards', opacity: '0'}}>
<button className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors group">
<iconify-icon className="text-xl text-stone-300 group-hover:text-white" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors group relative">
<div className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
<iconify-icon className="text-xl text-stone-300 group-hover:text-white" icon="solar:bag-3-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="glass px-5 py-2 rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors text-xs font-semibold tracking-wide">
<span>BOOK TABLE</span>
</button>
</div>
</nav>

<main className="flex-1 flex items-center justify-center relative perspective-[1200px]">

<div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center animate-float z-20">

<div className="absolute bottom-[-40px] w-[60%] h-[20px] bg-black/60 blur-[30px] rounded-[100%]"></div>

<div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl animate-spin-slow ring-1 ring-white/10">
<img alt="Fresh Pasta" className="w-full h-full object-cover scale-110" src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&amp;w=2032&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-radial-gradient(circle, transparent 40%, rgba(0,0,0,0.4) 100%) pointer-events-none"></div>
</div>

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-20 h-20 pointer-events-none">
<div className="absolute top-0 left-0 w-16 h-24 bg-white/20 blur-[20px] rounded-full animate-steam-1"></div>
<div className="absolute top-4 -left-8 w-12 h-20 bg-white/15 blur-[25px] rounded-full animate-steam-2"></div>
<div className="absolute top-2 left-6 w-14 h-28 bg-white/10 blur-[18px] rounded-full animate-steam-3"></div>
</div>


<div className="absolute top-0 -left-12 md:-left-32 glass p-4 rounded-2xl flex flex-col gap-2 w-48 backdrop-blur-xl transition-all hover:scale-105 duration-500 cursor-pointer group" style={{animation: 'fade-in-up 1s ease-out 0.5s forwards', opacity: '0'}}>
<div className="flex items-center gap-3 mb-1">
<div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-xs font-semibold tracking-wide text-white/90">Fresh Basil</span>
</div>
<div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-orange-400 w-[85%]"></div>
</div>
<p className="text-[10px] text-stone-400 leading-relaxed">Hand-picked from our organic garden this morning.</p>
</div>

<div className="absolute bottom-12 -right-4 md:-right-24 glass p-4 rounded-2xl flex items-center gap-4 w-auto min-w-[180px] transition-all hover:scale-105 duration-500 cursor-pointer" style={{animation: 'fade-in-up 1s ease-out 0.7s forwards', opacity: '0'}}>
<div className="flex flex-col">
<span className="text-2xl serif text-white italic">4.9</span>
<div className="flex text-orange-400 gap-0.5 text-[10px]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
<div className="h-8 w-[1px] bg-white/10"></div>
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-widest text-stone-400 mb-1">Cuisine</span>
<span className="text-xs font-medium text-stone-200">Italian Artisan</span>
</div>
</div>

<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 glass px-6 py-2 rounded-full flex items-center gap-2 hover:bg-orange-500/20 transition-colors duration-300 cursor-pointer" style={{animation: 'fade-in-up 1s ease-out 0.9s forwards', opacity: '0'}}>
<span className="text-orange-400 text-lg serif italic">$24</span>
<span className="w-[1px] h-3 bg-white/20"></span>
<span className="text-[10px] uppercase tracking-wider font-medium">Add to Order</span>
<iconify-icon className="ml-1 text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 select-none">
<h1 className="text-[15vw] leading-none text-white/[0.03] font-serif italic tracking-tighter blur-[2px]">
                    Arrabiata
                </h1>
</div>
</main>

<footer className="w-full px-8 py-8 flex justify-between items-end relative z-50">
<div className="flex flex-col gap-4" style={{animation: 'fade-in-up 1s ease-out 1s forwards', opacity: '0'}}>
<div className="flex items-center gap-2 text-xs font-medium tracking-widest text-stone-500 uppercase">
<span className="text-orange-500">01</span>
<span className="w-8 h-[1px] bg-stone-700"></span>
<span>Signature Dish</span>
</div>
<h2 className="text-4xl md:text-5xl font-serif text-white/90 leading-tight">
                    Spicy Tomato <br/> <span className="text-stone-500 italic">Basilico</span>
</h2>
</div>
<div className="hidden md:flex flex-col items-end gap-6" style={{animation: 'fade-in-up 1s ease-out 1.2s forwards', opacity: '0'}}>
<div className="glass p-1 rounded-full flex flex-col gap-2">
<button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
<iconify-icon icon="solar:arrow-down-linear" strokeWidth="2" width="20"></iconify-icon>
</button>
</div>
<p className="text-[10px] text-stone-400 max-w-[150px] text-right leading-relaxed">
                    Scroll to explore our ingredients and the story behind the dish.
                </p>
</div>

<div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
<div className="w-1 h-1 bg-white rounded-full"></div>
<div className="w-1 h-1 bg-white/20 rounded-full"></div>
<div className="w-1 h-1 bg-white/20 rounded-full"></div>
<div className="w-1 h-1 bg-white/20 rounded-full"></div>
</div>
</footer>
</div>

    </>
  );
}
