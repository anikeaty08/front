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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px]"></div>
<div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[100px]"></div>
</div>

<div className="w-full glass-panel border-b border-white/5 relative z-50">
<div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
<div className="flex items-center gap-4">
<span className="font-semibold text-white tracking-wide">CLEARANCE SALE</span>
<div className="flex items-center gap-2 text-xs font-mono text-purple-300">
<span>00<span className="text-slate-500 ml-0.5">d</span></span>:
                    <span>12<span className="text-slate-500 ml-0.5">h</span></span>:
                    <span>45<span className="text-slate-500 ml-0.5">m</span></span>:
                    <span>30<span className="text-slate-500 ml-0.5">s</span></span>
</div>
</div>
<div className="hidden sm:flex gap-4 opacity-70">
<i className="w-4 h-4 hover:text-white transition-colors cursor-pointer" data-lucide="facebook"></i>
<i className="w-4 h-4 hover:text-white transition-colors cursor-pointer" data-lucide="instagram"></i>
<i className="w-4 h-4 hover:text-white transition-colors cursor-pointer" data-lucide="twitter"></i>
</div>
<button className="absolute right-4 top-2 sm:hidden"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
</div>

<nav className="sticky top-0 z-40 glass-panel border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

<a className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 hover:opacity-80 transition-opacity" href="#">
                Color Glass
            </a>

<div className="hidden md:flex items-center gap-8 text-base font-medium text-slate-400">
<a className="text-white hover:text-purple-300 transition-colors" href="#">Home</a>
<a className="hover:text-purple-300 transition-colors" href="#">Apparel</a>
<a className="hover:text-purple-300 transition-colors" href="#">About Us</a>
<a className="hover:text-purple-300 transition-colors" href="#">Track Order</a>
</div>

<div className="flex items-center gap-5 text-slate-300">
<i className="w-5 h-5 cursor-pointer hover:text-white transition-colors" data-lucide="search"></i>
<i className="w-5 h-5 cursor-pointer hover:text-white transition-colors" data-lucide="user"></i>
<div className="relative group cursor-pointer">
<i className="w-5 h-5 group-hover:text-white transition-colors" data-lucide="shopping-bag"></i>
<span className="absolute -top-2 -right-2 w-4 h-4 bg-purple-500 text-[10px] flex items-center justify-center rounded-full text-white font-bold">2</span>
</div>
</div>
</div>
</nav>

<main className="max-w-7xl mx-auto px-4 py-10 lg:py-16">

<div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
<a className="hover:text-purple-400 transition-colors" href="#">Home</a>
<i className="w-3 h-3" data-lucide="chevron-right"></i>
<a className="hover:text-purple-400 transition-colors" href="#">Summer Collection</a>
<i className="w-3 h-3" data-lucide="chevron-right"></i>
<span className="text-slate-300">Prism Holographic Tee</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

<div className="flex flex-col-reverse lg:flex-row gap-6 h-fit sticky top-28">

<div className="flex lg:flex-col gap-4 justify-center lg:justify-start overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
<button className="w-20 h-24 glass-panel rounded-xl overflow-hidden border border-purple-500/50 hover:border-purple-400 transition-all">
<img alt="Thumb 1" className="w-full h-full object-cover opacity-80 hover:opacity-100" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</button>
<button className="w-20 h-24 glass-panel rounded-xl overflow-hidden border-transparent hover:border-white/20 transition-all">
<img alt="Thumb 2" className="w-full h-full object-cover opacity-60 hover:opacity-100" src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</button>
<button className="w-20 h-24 glass-panel rounded-xl overflow-hidden border-transparent hover:border-white/20 transition-all">
<img alt="Thumb 3" className="w-full h-full object-cover opacity-60 hover:opacity-100" src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</button>
</div>

<div className="flex-1 relative group perspective-1000">
<div className="w-full aspect-[4/5] glass-panel rounded-3xl p-8 flex items-center justify-center relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-3xl"></div>
<img alt="Prism Tee" className="w-full h-full object-cover rounded-xl shadow-2xl animate-float transition-transform duration-500 hover:scale-105 z-10 mix-blend-overlay opacity-90" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<img alt="Prism Tee Base" className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-20 z-0 animate-float" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 text-xs font-semibold bg-red-500/20 text-red-300 border border-red-500/30 rounded-full backdrop-blur-md">
                                -40% OFF
                            </span>
</div>
<button className="absolute top-4 right-4 p-2 rounded-full glass-button text-slate-300 hover:text-red-400">
<i className="w-5 h-5" data-lucide="heart"></i>
</button>
</div>
</div>
</div>

<div className="flex flex-col gap-8">

<div>
<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-2">Prism Holographic Tee</h1>
<div className="flex items-baseline gap-4 mt-4">
<span className="text-3xl font-medium text-red-400">Rs. 4,200.00</span>
<span className="text-xl text-slate-600 line-through decoration-slate-600">Rs. 7,000.00</span>
</div>
</div>

<div>
<label className="block text-base text-slate-400 mb-3">Color: <span className="text-white font-medium">Obsidian Black</span></label>
<div className="flex gap-4">
<button className="w-10 h-10 rounded-full bg-slate-900 border-2 border-white ring-2 ring-purple-500 ring-offset-4 ring-offset-slate-950 transition-all"></button>
<button className="w-10 h-10 rounded-full bg-slate-200 border border-white/10 hover:scale-110 transition-transform"></button>
<button className="w-10 h-10 rounded-full bg-rose-300 border border-white/10 hover:scale-110 transition-transform"></button>
<button className="w-10 h-10 rounded-full bg-emerald-800 border border-white/10 hover:scale-110 transition-transform"></button>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-3">
<label className="block text-base text-slate-400">Size</label>
<button className="text-sm text-purple-400 hover:text-purple-300 underline underline-offset-4">Size Chart</button>
</div>
<div className="grid grid-cols-4 gap-3">
<button className="py-3 glass-button rounded-lg text-slate-400 hover:text-white font-medium text-lg">S</button>
<button className="py-3 glass-button bg-white/10 border-purple-500/50 text-white rounded-lg font-medium text-lg shadow-[0_0_10px_rgba(168,85,247,0.2)]">M</button>
<button className="py-3 glass-button rounded-lg text-slate-400 hover:text-white font-medium text-lg">L</button>
<button className="py-3 glass-button rounded-lg text-slate-400 hover:text-white font-medium text-lg">XL</button>
</div>
</div>

<div className="space-y-4 pt-4 border-t border-white/5">
<label className="block text-base text-slate-400">Quantity</label>
<div className="flex flex-col sm:flex-row gap-4">

<div className="flex items-center justify-between glass-panel rounded-xl px-4 py-3 sm:w-40">
<button className="text-slate-400 hover:text-white transition-colors"><i className="w-5 h-5" data-lucide="minus"></i></button>
<span className="text-xl font-medium text-white">1</span>
<button className="text-slate-400 hover:text-white transition-colors"><i className="w-5 h-5" data-lucide="plus"></i></button>
</div>

<button className="flex-1 py-4 glass-button rounded-xl text-lg font-medium text-white flex items-center justify-center gap-2 group">
<i className="w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="shopping-cart"></i>
                            Add to cart
                        </button>
</div>

<button className="w-full py-4 rounded-xl backdrop-blur-md bg-gradient-to-r from-indigo-600/80 to-purple-600/80 hover:from-indigo-500 hover:to-purple-500 border border-white/20 text-white text-lg font-semibold shadow-lg shadow-purple-900/40 hover:shadow-purple-500/30 transition-all duration-300 active:scale-[0.99] flex items-center justify-center gap-2">
                        Buy it now
                        <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>

<div className="grid grid-cols-2 gap-4 mt-2">
<div className="relative">
<select className="w-full appearance-none bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-lg py-3 px-4 text-slate-300 focus:outline-none focus:border-purple-500/50">
<option>Pakistan</option>
<option>International</option>
</select>
<i className="absolute right-4 top-3.5 w-5 h-5 text-slate-500 pointer-events-none" data-lucide="chevron-down"></i>
</div>
<div className="relative">
<select className="w-full appearance-none bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-lg py-3 px-4 text-slate-300 focus:outline-none focus:border-purple-500/50">
<option>Punjab</option>
<option>Sindh</option>
<option>KPK</option>
</select>
<i className="absolute right-4 top-3.5 w-5 h-5 text-slate-500 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>

<div className="bg-purple-900/10 border border-purple-500/20 rounded-xl p-4 text-base space-y-2">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-purple-400 mt-0.5 shrink-0" data-lucide="timer"></i>
<span className="text-slate-300">Order within <span className="text-purple-300 font-medium">15 m</span> to get same-day dispatch.</span>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-purple-400 mt-0.5 shrink-0" data-lucide="truck"></i>
<span className="text-slate-300">Estimated delivery: <span className="text-purple-300 font-medium">Jan 31 - Feb 01</span></span>
</div>
</div>

<div className="py-8 relative">

<div className="absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-white/10 z-0"></div>
<div className="flex justify-between relative z-10">

<div className="flex flex-col items-center gap-3">
<div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center border border-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
<i className="w-5 h-5 text-purple-400" data-lucide="shopping-cart"></i>
</div>
<div className="text-center">
<p className="text-white font-medium text-sm">Ordered</p>
<p className="text-slate-500 text-xs mt-1">Jan 29</p>
</div>
</div>

<div className="flex flex-col items-center gap-3">
<div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center border border-white/10">
<i className="w-5 h-5 text-slate-400" data-lucide="package"></i>
</div>
<div className="text-center">
<p className="text-slate-400 font-medium text-sm">Shipped</p>
<p className="text-slate-500 text-xs mt-1">Jan 30</p>
</div>
</div>

<div className="flex flex-col items-center gap-3">
<div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center border border-white/10">
<i className="w-5 h-5 text-slate-400" data-lucide="home"></i>
</div>
<div className="text-center">
<p className="text-slate-400 font-medium text-sm">Delivered</p>
<p className="text-slate-500 text-xs mt-1">Feb 01</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-20 border-t border-white/5 pt-10">
<div className="flex justify-center gap-12 mb-8 border-b border-white/5 pb-1">
<button className="pb-4 text-lg font-medium text-white border-b-2 border-purple-500">Product description</button>
<button className="pb-4 text-lg font-medium text-slate-500 hover:text-slate-300 transition-colors">Shipping &amp; Return</button>
</div>
<div className="max-w-3xl mx-auto text-center text-slate-400 text-lg leading-relaxed">
<p>Experience the fusion of futuristic design and premium comfort. Our Prism Holographic Tee features advanced fabric technology that shimmers under light, providing a unique glass-like aesthetic. Tailored for an oversized fit, perfect for the modern streetwear enthusiast.</p>
</div>
</div>
</main>

<a className="fixed bottom-6 left-6 w-14 h-14 bg-black border border-white/20 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg z-50" href="#">
<i className="w-6 h-6" data-lucide="phone"></i>
</a>
<div className="fixed bottom-6 right-6 flex items-center gap-3 z-50">
<span className="bg-white text-black px-4 py-2 rounded-xl text-sm font-semibold shadow-lg hidden sm:block animate-pulse">Order here</span>
<a className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-[0_0_20px_rgba(34,197,94,0.4)]" href="#">
<i className="w-7 h-7 fill-current" data-lucide="message-circle"></i>
</a>
</div>


    </>
  );
}
