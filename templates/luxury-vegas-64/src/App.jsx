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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="X0ErZR3QhPzMHfKgBbJJ"></div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="star w-0.5 h-0.5 top-1/4 left-1/4" style={{animationDuration: '3s'}}></div>
<div className="star w-1 h-1 top-1/3 left-2/3" style={{animationDuration: '5s'}}></div>
<div className="star w-0.5 h-0.5 top-10 left-10" style={{animationDuration: '4s'}}></div>
<div className="star w-0.5 h-0.5 bottom-1/4 right-1/4" style={{animationDuration: '6s'}}></div>
<div className="star w-0.5 h-0.5 bottom-10 left-1/2" style={{animationDuration: '7s'}}></div>

<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-900/20 blur-[120px] rounded-full mix-blend-screen"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/10 blur-[100px] rounded-full mix-blend-screen"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020406]/80 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-emerald-400 to-emerald-700 flex items-center justify-center">
<svg className="lucide lucide-gem text-white w-3 h-3 stroke-[3]" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
</div>
<span className="text-base font-medium tracking-tight text-white font-sans">Emerald Vegas</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-cyan-400">
<a className="hover:text-white transition-colors" href="#">Tours</a>
<a className="hover:text-white transition-colors flex items-center gap-1" href="#">Leistungen</a>
<a className="hover:text-white transition-colors font-sans" href="#">VIP Access</a>
<a className="hover:text-white transition-colors font-sans" href="#">About</a>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-cyan-400 hover:text-white transition-colors font-sans">Log in</button>
<button className="bg-white text-black text-sm font-medium px-4 py-2 rounded-full hover:bg-cyan-200 transition-colors font-sans">
                    Book Now
                </button>
</div>
</div>
</nav>

<main className="lg:pt-48 lg:pb-32 flex flex-col min-h-screen z-10 pt-32 pb-20 relative items-center justify-center">
<div className="text-center max-w-4xl z-20 mr-auto ml-auto pr-4 pl-4 relative">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-8 font-sans">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Now booking for Summer 2024
            </div>

<h1 className="text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 leading-[1.1] mb-6 tracking-wide font-instrument-serif font-normal" style={{color: 'rgba(0, 0, 0, 0)', position: 'static'}}>
                Elevate Your <br className=""/>
<span className="text-glow font-normal tracking-wide font-instrument-serif">Vegas Experience</span>
</h1>

<p className="text-lg md:text-xl text-cyan-400 max-w-2xl mx-auto leading-relaxed font-light mb-10 font-sans">
                Unlock the hidden side of Sin City. From private helicopter tours to exclusive high-roller table access, we curate the unforgettable.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group relative px-8 py-3 bg-white text-black rounded-full font-medium text-sm overflow-hidden transition-all hover:pr-10">
<span className="relative z-10 flex items-center gap-2 font-sans">
                        Explore Packages
                        <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
<div className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
</button>
<button className="px-8 py-3 rounded-full text-sm font-medium text-cyan-300 border border-white/10 hover:bg-white/5 transition-colors font-sans">
                    View Gallery
                </button>
</div>
</div>

<div className="relative w-full max-w-5xl mx-auto mt-20 h-[500px] flex items-center justify-center perspective-[1000px]">

<div className="relative w-64 h-64 md:w-96 md:h-96">

<div className="absolute inset-0 rounded-full bg-emerald-500 blur-[80px] opacity-20 animate-pulse"></div>

<div className="relative w-full h-full rounded-full bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm border border-white/5 shadow-[inset_0_0_60px_rgba(16,185,129,0.2)] overflow-hidden">

<div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-full blur-xl transform -skew-x-12"></div>
<div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-emerald-500/10 rounded-full blur-2xl"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[40%] bg-emerald-400/30 rounded-[100%] blur-md rotate-[-30deg]"></div>
</div>

<div className="absolute inset-[-40px] border border-emerald-500/10 rounded-full rotate-[70deg] scale-y-50 pointer-events-none"></div>
<div className="absolute inset-[-80px] border border-white/5 rounded-full rotate-[-20deg] scale-y-[0.3] pointer-events-none"></div>
</div>

<div className="absolute top-1/2 left-4 md:left-20 -translate-y-1/2 animate-float z-30">
<div className="glass-card p-4 rounded-2xl w-48 md:w-56 transform transition hover:scale-105 duration-500 group cursor-pointer">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-emerald-400 font-sans">Night Flight</span>
<div className="bg-emerald-500/20 p-1.5 rounded-lg">
<svg className="lucide lucide-plane w-3 h-3 text-emerald-400" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
</div>
</div>
<div className="h-px w-full bg-gradient-to-r from-emerald-500/50 to-transparent mb-3"></div>
<div className="flex items-end justify-between">
<div className="">
<div className="text-xs text-cyan-500 mb-0.5 font-sans">Strip View</div>
<div className="text-sm text-white font-medium font-sans">Unparalleled</div>
</div>
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-zinc-600 group-hover:text-emerald-400 transition-colors" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>

<div className="absolute top-[60%] right-4 md:right-20 -translate-y-1/2 animate-float-delayed z-30">
<div className="glass-card p-4 rounded-2xl w-48 md:w-64 transform transition hover:scale-105 duration-500 group cursor-pointer">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-cyan-800/50 flex items-center justify-center border border-white/10">
<svg className="lucide lucide-crown w-5 h-5 text-yellow-500/80" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
</div>
<div>
<div className="text-sm font-medium text-white font-sans">VIP Access</div>
<div className="text-xs text-cyan-500 font-sans">Instant Entry</div>
</div>
</div>
<div className="relative h-1.5 w-full bg-cyan-800 rounded-full overflow-hidden mb-2">
<div className="absolute left-0 top-0 bottom-0 w-[96%] bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full"></div>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-cyan-400 font-sans">Availability</span>
<span className="text-emerald-400 font-medium font-sans">96% Booked</span>
</div>
</div>
</div>
</div>

<div className="w-full border-white/5 border-t mt-24 pt-12">
<p className="text-center text-xs font-medium text-cyan-600 uppercase tracking-widest mb-8 font-sans">Trusted by elite travelers from</p>
<div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">

<div className="flex items-center gap-2 text-lg font-semibold text-white font-sans"><svg className="lucide lucide-command w-5 h-5" data-lucide="command" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg> VOYAGER</div>
<div className="flex items-center gap-2 text-lg font-semibold text-white font-sans"><svg className="lucide lucide-hexagon w-5 h-5" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg> LUXE</div>
<div className="flex items-center gap-2 text-lg font-semibold text-white font-sans"><svg className="lucide lucide-globe w-5 h-5" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg> ATLAS</div>
<div className="flex items-center gap-2 text-lg font-semibold text-white font-sans"><svg className="lucide lucide-triangle w-5 h-5" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg> PEAK</div>
</div>
</div>
</main>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
<svg className="lucide lucide-glass-water w-5 h-5 text-emerald-400" data-lucide="glass-water" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z"></path><path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2 font-sans">Curated Nightlife</h3>
<p className="text-sm text-cyan-400 leading-relaxed font-sans">Skip the lines at Omnia and XS. Our hosts ensure your glass is never empty and your table is always the best in the house.</p>
</div>

<div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
<svg className="lucide lucide-ticket w-5 h-5 text-emerald-400" data-lucide="ticket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2 font-sans">Sold-Out Shows</h3>
<p className="text-sm text-cyan-400 leading-relaxed font-sans">Access to sold-out residencies and Cirque du Soleil performances. Front row seats guaranteed for our premium members.</p>
</div>

<div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
<svg className="lucide lucide-car w-5 h-5 text-emerald-400" data-lucide="car" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2 font-sans">Private Transport</h3>
<p className="text-sm text-cyan-400 leading-relaxed font-sans">From airport tarmac pickup to limo transfers between casinos. Move through the city in absolute comfort and style.</p>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-emerald-600 flex items-center justify-center">
<svg className="lucide lucide-gem text-white w-2.5 h-2.5 stroke-[3]" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
</div>
<span className="text-sm font-medium text-cyan-300 font-sans">Emerald Vegas</span>
</div>
<div className="flex gap-6 text-sm text-cyan-500">
<a className="hover:text-emerald-400 transition-colors font-sans" href="#">Privacy</a>
<a className="hover:text-emerald-400 transition-colors font-sans" href="#">Terms</a>
<a className="hover:text-emerald-400 transition-colors font-sans" href="#">Contact</a>
</div>
<div className="text-sm text-cyan-600 font-sans">
                © 2024 Emerald Vegas Tours.
            </div>
</div>
</footer>


    </>
  );
}
