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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-6 flex justify-between items-center">
<a className="text-2xl font-semibold tracking-tighter uppercase z-50 group" href="#">
            Kenzy<span className="text-lime-400 group-hover:text-white transition-colors">.</span>
</a>
<div className="hidden md:flex gap-8 text-sm font-medium tracking-tight">
<a className="hover:text-lime-400 hover:skew-x-12 transition-all" href="#menu">MENU</a>
<a className="hover:text-lime-400 hover:skew-x-12 transition-all" href="#about">CHAOS</a>
<a className="hover:text-lime-400 hover:skew-x-12 transition-all" href="#locations">LOCATIONS</a>
</div>
<button className="relative group overflow-hidden border border-zinc-700 bg-black/50 backdrop-blur-md px-6 py-2 rounded-full">
<span className="relative z-10 text-xs font-semibold tracking-wider uppercase group-hover:text-black transition-colors">Order Now</span>
<div className="absolute inset-0 bg-lime-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
</button>
</nav>

<header className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black perspective-container" style={{perspective: '1200px'}}>

<div className="absolute inset-0 preserve-3d flex items-center justify-center pointer-events-none">

<div className="absolute w-[200vw] h-[200vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid-floor opacity-30" style={{transform: 'rotateX(80deg) translateZ(-100px)'}}></div>
<div className="absolute w-[200vw] h-[200vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid-floor opacity-20" style={{transform: 'rotateX(80deg) translateZ(100px)'}}></div>

<div className="relative w-0 h-0 preserve-3d">

<div className="gyro-ring w-[600px] h-[600px] -mt-[300px] -ml-[300px] border-zinc-700" style={{animation: 'object-spin 20s linear infinite'}}></div>
<div className="gyro-ring w-[500px] h-[500px] -mt-[250px] -ml-[250px] border-zinc-600" style={{animation: 'object-spin-reverse 15s linear infinite'}}></div>
<div className="gyro-ring w-[400px] h-[400px] -mt-[200px] -ml-[200px] border-lime-900/40" style={{animation: 'object-spin 10s linear infinite'}}></div>

<div className="absolute top-0 left-0 preserve-3d" style={{animation: 'object-spin 8s linear infinite'}}>
<div className="relative w-32 h-32 -mt-16 -ml-16 preserve-3d">

<div className="cube-face" style={{transform: 'rotateY(0deg) translateZ(64px)'}}>KENZY</div>

<div className="cube-face" style={{transform: 'rotateY(180deg) translateZ(64px)'}}>FOODS</div>

<div className="cube-face" style={{transform: 'rotateY(90deg) translateZ(64px)'}}>NULL</div>

<div className="cube-face" style={{transform: 'rotateY(-90deg) translateZ(64px)'}}>VOID</div>

<div className="cube-face" style={{transform: 'rotateX(90deg) translateZ(64px)'}}>001</div>

<div className="cube-face" style={{transform: 'rotateX(-90deg) translateZ(64px)'}}>EAT</div>
</div>
</div>

<div className="absolute top-0 left-0 preserve-3d" style={{animation: 'object-spin-reverse 4s linear infinite'}}>
<div className="relative w-16 h-16 -mt-8 -ml-8 preserve-3d">
<div className="absolute inset-0 bg-lime-400 opacity-20 blur-sm"></div>
<div className="cube-face border-white bg-transparent" style={{transform: 'rotateY(0deg) translateZ(32px)'}}></div>
<div className="cube-face border-white bg-transparent" style={{transform: 'rotateY(180deg) translateZ(32px)'}}></div>
<div className="cube-face border-white bg-transparent" style={{transform: 'rotateY(90deg) translateZ(32px)'}}></div>
<div className="cube-face border-white bg-transparent" style={{transform: 'rotateY(-90deg) translateZ(32px)'}}></div>
<div className="cube-face border-white bg-transparent" style={{transform: 'rotateX(90deg) translateZ(32px)'}}></div>
<div className="cube-face border-white bg-transparent" style={{transform: 'rotateX(-90deg) translateZ(32px)'}}></div>
</div>
</div>

<div className="absolute w-full h-full preserve-3d" style={{animation: 'scene-rotate 30s linear infinite'}}>
<div className="absolute w-2 h-2 bg-lime-400 rounded-full blur-[2px]" style={{transform: 'translateX(180px) translateY(-50px) translateZ(100px)'}}></div>
<div className="absolute w-3 h-3 bg-white rounded-full blur-[1px]" style={{transform: 'translateX(-150px) translateY(120px) translateZ(-50px)'}}></div>
<div className="absolute w-1 h-1 bg-red-500 rounded-full" style={{transform: 'translateX(200px) translateY(200px) translateZ(200px)'}}></div>
<div className="absolute w-16 h-1 bg-lime-500" style={{transform: 'translateX(-220px) rotateY(45deg)'}}></div>
<div className="absolute w-1 h-24 bg-zinc-600" style={{transform: 'translateY(-180px) rotateX(45deg)'}}></div>
</div>
</div>
</div>

<div className="z-10 text-center mix-blend-exclusion pointer-events-none relative">
<h1 className="text-8xl md:text-9xl lg:text-[13rem] font-semibold tracking-tighter leading-none glitch-hover select-none text-white drop-shadow-[0_0_15px_rgba(0,0,0,1)]">
                KENZY
            </h1>
<h2 className="text-5xl md:text-7xl lg:text-8xl font-medium text-stroke-title tracking-tighter leading-none -mt-4 md:-mt-8 italic drop-shadow-[0_0_10px_rgba(0,0,0,1)]">
                FOODS
            </h2>
</div>

<div className="absolute bottom-10 left-6 flex flex-col gap-1 pointer-events-none mix-blend-difference">
<div className="flex gap-4 items-center">
<div className="w-3 h-3 bg-lime-400 rounded-full animate-pulse"></div>
<p className="text-xs text-lime-400 font-mono uppercase tracking-widest">System Online</p>
</div>
<div className="font-mono text-[10px] text-zinc-500 space-y-1">
<p>&gt; RENDER_ENGINE: CSS_3D</p>
<p>&gt; CALORIES: UNKNOWN</p>
<p>&gt; SECTOR: 7-ALPHA</p>
</div>
</div>
</header>

<div className="bg-lime-400 py-4 overflow-hidden -rotate-2 scale-110 z-20 relative border-y-4 border-black">
<div className="whitespace-nowrap flex animate-[marquee_10s_linear_infinite]">
<span className="text-4xl md:text-6xl font-bold text-black px-8 tracking-tighter">DON'T EAT BORING FOOD.</span>
<span className="text-4xl md:text-6xl font-bold text-black px-8 tracking-tighter text-stroke-title" style={{WebkitTextStroke: '1px black', color: 'transparent'}}>TASTE THE CHAOS.</span>
<span className="text-4xl md:text-6xl font-bold text-black px-8 tracking-tighter">KENZY FOODS.</span>
<span className="text-4xl md:text-6xl font-bold text-black px-8 tracking-tighter">DON'T EAT BORING FOOD.</span>
<span className="text-4xl md:text-6xl font-bold text-black px-8 tracking-tighter text-stroke-title" style={{WebkitTextStroke: '1px black', color: 'transparent'}}>TASTE THE CHAOS.</span>
<span className="text-4xl md:text-6xl font-bold text-black px-8 tracking-tighter">KENZY FOODS.</span>
</div>
</div>

<section className="py-24 px-4 md:px-12 bg-zinc-950 relative" id="menu">
<div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-600/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="flex justify-between items-end mb-16">
<h3 className="text-4xl md:text-6xl font-semibold tracking-tight text-white max-w-lg">
                DECONSTRUCTED <span className="text-zinc-600">DELICACIES</span>
</h3>
<iconify-icon className="text-lime-400" height="48" icon="lucide:arrow-down-right" width="48"></iconify-icon>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">

<div className="col-span-1 md:col-span-2 row-span-2 group perspective-container">
<div className="w-full h-full bg-zinc-900 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden card-3d">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&amp;w=1200&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity grayscale group-hover:grayscale-0"></div>
<div className="relative z-10 flex flex-col justify-between h-full transform translate-z-10">
<div className="bg-black/80 backdrop-blur w-fit px-4 py-1 rounded-full border border-zinc-700">
<span className="text-xs font-mono text-lime-400">BESTSELLER</span>
</div>
<div>
<h4 className="text-4xl font-semibold tracking-tight mb-2 group-hover:translate-x-4 transition-transform">THE GLITCH BURGER</h4>
<p className="text-zinc-300 text-sm max-w-xs">Double smashed patty, radioactive cheese sauce, jalapeño dust.</p>
<div className="mt-4 text-2xl font-mono">$18.00</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-1 row-span-2 group perspective-container mt-12 md:mt-0">
<div className="w-full h-full bg-zinc-900 border border-zinc-800 rounded-3xl p-6 relative overflow-hidden card-3d flex flex-col justify-end">
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541592106381-b9c19b59410f?q=80&amp;w=600&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-70 group-hover:scale-110 transition-transform duration-700"></div>
<div className="relative z-20">
<h4 className="text-2xl font-semibold tracking-tight mb-1">NEON FRIES</h4>
<p className="text-zinc-400 text-xs mb-3">Truffle oil, parmesan, LED lights (jk).</p>
<button className="w-full py-2 border border-zinc-600 rounded-lg hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-colors text-xs font-semibold">ADD +</button>
</div>
</div>
</div>

<div className="col-span-1 bg-lime-400 rounded-3xl p-6 flex flex-col justify-center items-center text-center -rotate-3 hover:rotate-0 transition-transform duration-300">
<iconify-icon className="text-black mb-4" icon="lucide:flame" width="32"></iconify-icon>
<h4 className="text-black font-bold text-xl tracking-tight leading-5">SPICY LEVEL: <br/> UNBEARABLE</h4>
</div>

<div className="col-span-1 group perspective-container">
<div className="w-full h-full bg-zinc-900 border border-zinc-800 rounded-3xl p-6 relative overflow-hidden card-3d">
<div className="absolute top-4 right-4 text-white">
<iconify-icon icon="lucide:arrow-up-right" width="24"></iconify-icon>
</div>
<div className="mt-auto h-full flex flex-col justify-end">
<h4 className="text-xl font-semibold tracking-tight">CYBER SHAKE</h4>
<p className="text-zinc-500 text-xs">$9.00</p>
</div>
<div className="absolute -bottom-10 -right-10 w-32 h-32 bg-fuchsia-500 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
</div>
</div>

<div className="col-span-1 md:col-span-2 lg:col-span-2 group perspective-container">
<div className="w-full h-full bg-zinc-50 rounded-3xl p-8 relative overflow-hidden card-3d text-black">
<div className="flex justify-between items-start">
<div>
<h4 className="text-3xl font-semibold tracking-tight">VOID PIZZA</h4>
<p className="text-zinc-600 text-sm mt-2">Black charcoal dough, white sauce, infinite flavor.</p>
</div>
<div className="bg-black text-white px-3 py-1 rounded-full text-xs font-mono">$24.00</div>
</div>
<div className="absolute -right-10 -bottom-20 w-64 h-64 bg-zinc-900 rounded-full blur-3xl opacity-10"></div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black overflow-hidden relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-zinc-800 rounded-full opacity-20 animate-[spin-slow_30s_linear_infinite]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-zinc-800 rounded-full opacity-20 animate-[spin-slow_20s_linear_reverse_infinite]"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-1/2">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-none mb-8">
                        NOT YOUR <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-600">AVERAGE</span> <br/>
                        SUSTENANCE.
                    </h2>
<p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                        We don't cook. We engineer edible experiences using high-fidelity ingredients and low-latency delivery. Welcome to the future of chewing.
                    </p>
<div className="mt-10 flex gap-4">
<div className="flex flex-col gap-2">
<span className="text-3xl font-bold text-white">4.9</span>
<span className="text-xs text-zinc-500 uppercase tracking-wide">Star Rating</span>
</div>
<div className="w-px h-12 bg-zinc-800"></div>
<div className="flex flex-col gap-2">
<span className="text-3xl font-bold text-white">12k</span>
<span className="text-xs text-zinc-500 uppercase tracking-wide">Happy Cyborgs</span>
</div>
</div>
</div>
<div className="w-full md:w-1/2 perspective-container">
<div className="relative w-full aspect-square bg-zinc-900 border border-zinc-800 rounded-lg p-2 transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-transform duration-500 shadow-2xl shadow-lime-900/20">

<div className="w-full h-full bg-black rounded border border-zinc-800 p-6 flex flex-col">
<div className="flex items-center gap-2 mb-8">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="space-y-4 font-mono text-sm text-lime-400">
<p>&gt; Initiating hunger_protocol.exe...</p>
<p>&gt; Scanning cravings...</p>
<p className="text-white">&gt; Subject desires: <span className="text-fuchsia-500">Void Pizza</span></p>
<p>&gt; Preparation time: 0.0004s</p>
<div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden mt-4">
<div className="bg-lime-400 w-3/4 h-full"></div>
</div>
</div>
<div className="mt-auto flex justify-between items-center border-t border-zinc-800 pt-4">
<span className="text-xs text-zinc-500">KENZY_SYSTEM_V2.0</span>
<iconify-icon className="text-zinc-500" icon="lucide:cpu"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-lime-400 text-black">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-stroke-title" style={{WebkitTextStroke: '2px black', color: 'transparent'}}>GET THE DROP</h2>
<p className="text-xl md:text-2xl font-medium mb-12 max-w-2xl mx-auto">
                Join the Kenzy Foods cult. We send secret menu items and coordinates to underground pop-ups.
            </p>
<form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto transform -rotate-1">
<div className="relative w-full">
<input className="w-full bg-black text-white px-6 py-4 border-2 border-black focus:outline-none focus:ring-4 focus:ring-white/50 placeholder:text-zinc-500 font-mono text-sm" placeholder="ENTER_EMAIL_ADDRESS" type="email"/>
<div className="absolute top-1 right-1 bottom-1 w-8 bg-zinc-800 flex items-center justify-center">
<div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
</div>
</div>
<button className="bg-white text-black px-8 py-4 font-bold border-2 border-black hover:bg-black hover:text-white transition-colors tracking-tight uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1" type="button">
                    Submit
                </button>
</form>
</div>
</section>

<footer className="bg-zinc-950 pt-20 pb-10 border-t border-zinc-900">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-2">
<a className="text-5xl font-semibold tracking-tighter uppercase block mb-6" href="#">Kenzy.</a>
<p className="text-zinc-500 text-sm max-w-sm">
                        Redefining the mastication process since 2024. 
                        Chaos is the only constant. Flavor is the only variable.
                    </p>
</div>
<div>
<h5 className="text-white font-mono text-xs uppercase tracking-widest mb-6 text-lime-400">Coordinates</h5>
<ul className="space-y-4 text-sm text-zinc-400">
<li className="hover:text-white cursor-pointer flex items-center gap-2">
<iconify-icon icon="lucide:map-pin" width="16"></iconify-icon> Sector 7, Neo Tokyo
                        </li>
<li className="hover:text-white cursor-pointer flex items-center gap-2">
<iconify-icon icon="lucide:map-pin" width="16"></iconify-icon> Brooklyn, Basement 4
                        </li>
<li className="hover:text-white cursor-pointer flex items-center gap-2">
<iconify-icon icon="lucide:map-pin" width="16"></iconify-icon> The Metaverse (Server 9)
                        </li>
</ul>
</div>
<div>
<h5 className="text-white font-mono text-xs uppercase tracking-widest mb-6 text-lime-400">Socials</h5>
<div className="flex gap-4">
<a className="w-10 h-10 border border-zinc-800 rounded-full flex items-center justify-center hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all" href="#">
<iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 border border-zinc-800 rounded-full flex items-center justify-center hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all" href="#">
<iconify-icon icon="lucide:twitter" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 border border-zinc-800 rounded-full flex items-center justify-center hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all" href="#">
<iconify-icon icon="lucide:github" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-zinc-900 pt-8 text-xs text-zinc-600 font-mono">
<p>© 2024 KENZY FOODS INC. ALL RIGHTS RESERVED.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-400" href="#">PRIVACY</a>
<a className="hover:text-zinc-400" href="#">TERMS</a>
<a className="hover:text-zinc-400" href="#">GLITCH REPORT</a>
</div>
</div>

<div className="mt-20 overflow-hidden select-none opacity-10">
<h1 className="text-[12rem] md:text-[20rem] font-bold tracking-tighter leading-none text-center whitespace-nowrap text-zinc-800">
                    EAT. NOW.
                </h1>
</div>
</div>
</footer>

    </>
  );
}
