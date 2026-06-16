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
      

<div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">

<div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-blue-900/10 rounded-full blur-[150px] opacity-60 mix-blend-screen"></div>

<div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-red-900/20 rounded-full blur-[120px] opacity-80 mix-blend-screen"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_90%)]"></div>

<div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-150 contrast-150"></div>
</div>

<nav className="fixed top-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference text-white">
<div className="flex items-center gap-2 group cursor-pointer">
<span className="iconify text-2xl group-hover:text-red-500 transition-colors duration-500" data-icon="lucide:dna"></span>
<span className="cinematic-text font-bold tracking-widest text-sm opacity-90">GENESIS_V1</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-ultra text-gray-400">
<a className="hover:text-white transition-colors uppercase" href="#">Origins</a>
<a className="hover:text-white transition-colors uppercase" href="#">Hosts</a>
<a className="hover:text-white transition-colors uppercase" href="#">Abilities</a>
<a className="text-red-600 hover:text-red-500 transition-colors uppercase flex items-center gap-1" href="#">
                Access <span className="iconify" data-icon="lucide:lock" data-width="12"></span>
</a>
</div>
<div className="md:hidden">
<span className="iconify text-2xl" data-icon="lucide:menu"></span>
</div>
</nav>

<main className="relative w-full h-screen flex flex-col items-center justify-center perspective-1000">

<div className="absolute inset-0 z-0 flex items-center justify-center opacity-30">

<svg className="w-full h-full absolute top-0 left-0 pointer-events-none" preserveaspectratio="xMidYMid slice" viewbox="0 0 1920 1080">
<g className="animate-tendril-1 opacity-60">
<path d="M-100,200 C300,400 500,0 800,300" fill="none" stroke="#111" strokeLinecap="round" strokeWidth="40"></path>
<path className="opacity-50" d="M-100,200 C300,400 500,0 800,300" fill="none" stroke="#222" strokeLinecap="round" strokeWidth="10"></path>
</g>
<g className="animate-tendril-2 opacity-50">
<path d="M2000,800 C1600,600 1200,900 1000,500" fill="none" stroke="#0f0f0f" strokeLinecap="round" strokeWidth="60"></path>
</g>
</svg>
</div>

<div className="relative z-20 w-full max-w-4xl h-[75vh] flex items-center justify-center">

<div className="absolute inset-0 rounded-full blur-3xl bg-black opacity-80 scale-75 animate-breathe"></div>

<div className="relative w-[300px] md:w-[450px] h-[500px] md:h-[600px] animate-breathe">

<div className="absolute inset-0 bg-black rounded-[40%] shadow-[0_0_50px_rgba(0,0,0,1)] z-10 overflow-hidden">

<div className="absolute inset-0 symbiote-texture opacity-90"></div>

<div className="absolute top-1/4 left-1/4 w-24 h-24 bg-blue-500/20 blur-xl rounded-full mix-blend-overlay"></div>
<div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-red-500/10 blur-xl rounded-full mix-blend-overlay"></div>
</div>

<div className="absolute top-[20%] left-0 w-full h-[150px] z-20 flex justify-center gap-8 md:gap-16 px-4">

<div className="relative w-24 h-16 md:w-36 md:h-24 bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)] clip-path-eye-left animate-glitch" style={{clipPath: 'polygon(100% 0, 0% 40%, 40% 100%, 100% 60%)', background: 'radial-gradient(circle at 70% 30%, #fff, #ddd)'}}>
<div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white opacity-80"></div>
</div>

<div className="relative w-24 h-16 md:w-36 md:h-24 bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)] clip-path-eye-right animate-glitch" style={{clipPath: 'polygon(0 0, 100% 40%, 60% 100%, 0 60%)', background: 'radial-gradient(circle at 30% 30%, #fff, #ddd)', animationDelay: '0.1s'}}>
<div className="absolute inset-0 bg-gradient-to-tl from-transparent to-white opacity-80"></div>
</div>
</div>

<svg className="absolute top-[-20%] left-[-40%] w-[180%] h-[140%] z-0 pointer-events-none" viewbox="0 0 500 500">

<path className="animate-tendril-1" d="M250,250 Q100,150 50,50" fill="none" stroke="#080808" strokeLinecap="round" strokeWidth="12"></path>
<path className="animate-tendril-1" d="M250,250 Q100,150 50,50" fill="none" opacity="0.3" stroke="#222" strokeLinecap="round" strokeWidth="4"></path>
<path className="animate-tendril-2" d="M250,250 Q400,100 450,20" fill="none" stroke="#050505" strokeLinecap="round" strokeWidth="16"></path>
<path className="animate-tendril-3" d="M250,300 Q450,350 480,450" fill="none" stroke="#0a0a0a" strokeLinecap="round" strokeWidth="10"></path>
<path className="animate-tendril-2" d="M250,300 Q50,400 20,480" fill="none" stroke="#080808" strokeLinecap="round" strokeWidth="14"></path>
</svg>
</div>
</div>

<div className="absolute z-30 flex flex-col items-center justify-center text-center pointer-events-none w-full mix-blend-screen">
<h2 className="text-xs md:text-sm tracking-[0.5em] text-red-500 font-bold mb-4 animate-pulse uppercase">Host Subject: Eddie Brock</h2>
<h1 className="text-7xl md:text-9xl font-black italic tracking-tighter text-white opacity-10 blur-[1px]">
                LETHAL
            </h1>
<h1 className="text-7xl md:text-9xl font-black italic tracking-tighter text-transparent text-outline opacity-30 mt-[-2rem] md:mt-[-4rem]">
                PROTECTOR
            </h1>
</div>

<div className="absolute bottom-12 w-full max-w-6xl px-6 z-40 flex flex-col md:flex-row justify-between items-end">

<div className="hidden md:block w-48 text-[10px] text-gray-500 font-mono space-y-2 border-l border-red-900/40 pl-4">
<div className="flex justify-between">
<span>STATUS</span>
<span className="text-red-500">UNSTABLE</span>
</div>
<div className="flex justify-between">
<span>BOND</span>
<span className="text-blue-500">94.2%</span>
</div>
<div className="h-0.5 w-full bg-gray-900 mt-2 overflow-hidden">
<div className="h-full bg-red-600 w-3/4 animate-pulse"></div>
</div>
<p className="opacity-50 leading-tight pt-2">SYMBIOTE IS COMPATIBLE. HUNGER LEVELS CRITICAL.</p>
</div>

<div className="flex flex-col items-center gap-6 mx-auto md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:bottom-0">
<button className="group relative px-8 py-4 bg-transparent border border-gray-700 overflow-hidden hover:border-red-600 transition-all duration-300">
<div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
<span className="relative z-10 font-bold text-sm tracking-widest uppercase flex items-center gap-3">
                        Initiate Bond
                        <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right"></span>
</span>
</button>
<div className="text-[10px] text-gray-600 tracking-widest uppercase">
                    Audio Recommended
                </div>
</div>

<div className="hidden md:flex gap-4 items-center">
<button className="w-12 h-12 flex items-center justify-center border border-gray-800 text-gray-500 hover:text-white hover:border-gray-600 transition-all">
<span className="iconify" data-icon="lucide:volume-2"></span>
</button>
<button className="w-12 h-12 flex items-center justify-center border border-gray-800 text-gray-500 hover:text-white hover:border-gray-600 transition-all">
<span className="iconify" data-icon="lucide:share-2"></span>
</button>
</div>
</div>

<div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
<div className="absolute top-1/4 left-1/4 w-1 h-1 bg-red-500 rounded-full opacity-60 animate-pulse"></div>
<div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-500 rounded-full opacity-40 animate-bounce"></div>

<svg className="absolute bottom-20 left-10 w-32 h-32 opacity-20 animate-tendril-3" viewbox="0 0 100 100">
<path d="M10,90 Q50,50 90,90" fill="none" stroke="white"></path>
</svg>
</div>
</main>

<section className="relative z-20 bg-[#020202] py-32 px-6 border-t border-gray-900">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
<div>
<h3 className="text-red-600 tracking-widest text-xs font-bold mb-4 flex items-center gap-2">
<span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    ORIGIN STORY
                </h3>
<h2 className="text-5xl md:text-7xl font-bold mb-8 leading-[0.9] text-white">
                    WE ARE <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">VENOM</span>
</h2>
<p className="text-gray-400 text-lg leading-relaxed max-w-md font-light">
                    An amorphous, liquid-like form that requires a host to survive. Once bonded, the symbiote grants superhuman abilities, shape-shifting weaponry, and a hunger that cannot be satisfied.
                </p>
<div className="mt-12 flex gap-8 border-t border-gray-800 pt-8">
<div>
<span className="block text-3xl font-bold text-white">01</span>
<span className="text-xs text-gray-500 tracking-widest uppercase">Symbiote</span>
</div>
<div>
<span className="block text-3xl font-bold text-white">02</span>
<span className="text-xs text-gray-500 tracking-widest uppercase">Parasite</span>
</div>
<div>
<span className="block text-3xl font-bold text-white">03</span>
<span className="text-xs text-gray-500 tracking-widest uppercase">Protector</span>
</div>
</div>
</div>

<div className="relative h-[600px] bg-[#080808] border border-gray-800 flex items-center justify-center overflow-hidden group">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 group-hover:scale-105 transition-transform duration-1000 grayscale"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<span className="iconify text-white opacity-20 w-32 h-32" data-icon="lucide:fingerprint"></span>
</div>
</div>
</section>

<footer className="bg-black py-12 border-t border-gray-900 text-center">
<p className="text-xs text-gray-600 tracking-widest uppercase">© 2024 MARVEL | SONY PICTURES. ALL RIGHTS RESERVED.</p>
</footer>

    </>
  );
}
