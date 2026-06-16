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



        // Initialize Lucide icons with 1.5 stroke width
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none -z-10 bg-[#030014]" style={{}}>
<div className="absolute bottom-0 w-full h-[60vh] cyber-grid opacity-40"></div>
<div className="absolute top-[-10%] left-[20%] w-[40rem] h-[40rem] rounded-full blur-[8rem] mix-blend-screen animate-pulse bg-fuchsia-400/5"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[30rem] h-[30rem] bg-orange-500/5 rounded-full blur-[6rem] mix-blend-screen" style={{}}></div>
<div className="absolute inset-0 scanlines z-50 opacity-20"></div>
</div>

<nav className="fixed w-full z-50 top-0 glass-strong">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer group">
<span className="font-cyber font-semibold text-lg group-hover:neon-text-orange transition-all duration-300 text-stone-900 font-manrope tracking-wide" style={{}}>
                    SOCIETY<span className="text-orange-600 font-manrope tracking-wide" style={{}}>X</span>
</span>
</div>
<div className="hidden md:flex items-center gap-3">
<div className="px-3 py-1 rounded-sm border border-red-500/20 flex items-center gap-2 bg-white/40">
<div className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>
<span className="text-xs font-mono text-red-600/80 font-manrope tracking-wide" style={{}}>SYS: ONLINE</span>
</div>
<div className="px-3 py-1 rounded-sm border border-pink-500/20 flex items-center gap-2 bg-white/40">
<svg className="lucide lucide-users w-3 h-3 text-pink-500/80" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-xs font-mono text-pink-600/80 font-manrope tracking-wide" style={{}}>POP: 8.2M</span>
</div>
</div>
<button className="px-5 py-2 bg-orange-500/5 border border-orange-500/30 font-mono text-xs hover:bg-orange-500/10 transition-all clip-tech text-orange-600 hover:border-orange-600 font-manrope tracking-wide" style={{}}>
                JACK IN
            </button>
</div>
</nav>

<header className="relative pt-32 pb-24 min-h-screen flex flex-col justify-center items-center overflow-hidden">

<div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t to-transparent blur-3xl pointer-events-none from-orange-50/20" style={{}}></div>
<div className="z-10 flex flex-col w-full max-w-7xl mr-auto ml-auto relative items-center">

<div className="relative w-full max-w-lg aspect-square flex items-center justify-center mb-12">

<h1 className="text-[10rem] md:text-[14rem] leading-none text-transparent bg-clip-text bg-gradient-to-b neon-text-orange z-10 mix-blend-overlay opacity-90 select-none from-black via-orange-900/50 to-orange-100/10 font-montserrat font-medium" style={{}}>X</h1>

<div className="absolute top-0 left-0 md:-left-12 animate-float glass-panel p-4 rounded-sm border-l-2 border-stone-500 w-40 z-20 shadow-[0_0_30px_rgba(59,130,246,0.1)]" style={{}}>
<div className="flex items-center gap-2 mb-2 border-b pb-2 border-black/5">
<svg className="lucide lucide-shield w-3 h-3 text-stone-600" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span className="text-xs font-mono text-stone-700 font-manrope tracking-wide" style={{}}>POLICE</span>
</div>
<div className="h-12 bg-stone-500/5 rounded-sm flex items-center justify-center relative overflow-hidden" style={{}}>
<svg className="lucide lucide-user w-6 h-6 text-stone-600/60" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<div className="absolute inset-0 bg-gradient-to-t from-stone-500/10 to-transparent" style={{}}></div>
</div>
</div>
<div className="absolute bottom-12 right-0 md:-right-4 animate-float glass-panel p-4 rounded-sm border-l-2 border-pink-500 w-40 z-20 shadow-[0_0_30px_rgba(245,158,11,0.1)]" style={{animationDelay: '2s'}}>
<div className="flex items-center gap-2 mb-2 border-b pb-2 border-black/5">
<svg className="lucide lucide-gem w-3 h-3 text-pink-600" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
<span className="text-xs font-mono text-pink-700 font-manrope tracking-wide" style={{}}>TYCOON</span>
</div>
<div className="h-12 bg-pink-500/5 rounded-sm flex items-center justify-center relative overflow-hidden">
<svg className="lucide lucide-user w-6 h-6 text-pink-600/60" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 to-transparent"></div>
</div>
</div>
<div className="absolute top-12 right-4 md:-right-16 animate-float glass-panel p-4 rounded-sm border-l-2 border-pink-500 w-40 z-0 blur-[2px] opacity-60" style={{animationDelay: '1s'}}>
<div className="flex items-center gap-2 mb-2 border-b pb-2 border-black/5">
<svg className="lucide lucide-activity w-3 h-3 text-pink-600" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span className="text-xs font-mono text-pink-700 font-manrope tracking-wide" style={{}}>DOCTOR</span>
</div>
<div className="h-12 bg-pink-500/5 rounded-sm flex items-center justify-center">
<svg className="lucide lucide-user w-6 h-6 text-pink-600/60" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</div>
</div>

<div className="text-center space-y-8 max-w-2xl px-6 relative z-30">
<h2 className="text-3xl md:text-5xl uppercase tracking-tight drop-shadow-2xl text-black font-montserrat font-medium" style={{}}>
                    Enter the First 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r neon-text-orange from-orange-700 via-orange-600 to-fuchsia-600 font-montserrat font-medium" style={{}}>Digital Society</span>
</h2>
<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
<button className="relative group px-8 py-4 font-cyber font-semibold tracking-widest clip-tech overflow-hidden hover:bg-orange-500 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.3)] bg-orange-400/90 text-black" style={{}}>
<div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black/20"></div>
<span className="relative z-10 flex items-center gap-2 text-sm font-manrope tracking-wide" style={{}}>
                            ENTER SOCIETY <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
<button className="px-8 py-4 bg-transparent border font-cyber font-semibold clip-tech hover:border-fuchsia-500 hover:shadow-[0_0_20px_rgba(232,121,249,0.2)] transition-all text-sm border-black/10 text-stone-700 hover:text-fuchsia-600 font-manrope tracking-wide" style={{}}>
                        CHOOSE ROLE
                    </button>
</div>
</div>
</div>
</header>

<section className="py-12 border-y backdrop-blur-sm border-black/5 bg-white/40">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" style={{}}></div>
<div className="relative z-10 bg-[#030014] px-8 py-4 border border-orange-500/20 rounded-full min-w-[10rem] flex flex-col items-center shadow-[0_0_15px_rgba(34,211,238,0.05)] group hover:border-orange-500/50 transition-colors" style={{}}>
<svg className="lucide lucide-hammer w-5 h-5 mb-2 group-hover:scale-110 transition-transform text-orange-600" data-lucide="hammer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path><path d="m18 15 4-4"></path><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></svg>
<span className="font-cyber font-semibold text-sm text-stone-800 font-manrope tracking-wide" style={{}}>WORK</span>
<span className="text-xs font-mono mt-1 text-stone-400 font-manrope tracking-wide" style={{}}>COMPLETE TASKS</span>
</div>
<svg className="lucide lucide-chevron-right md:block hidden relative z-10 w-4 h-4 text-stone-300" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<div className="relative z-10 bg-[#030014] px-8 py-4 border border-red-500/20 rounded-full min-w-[10rem] flex flex-col items-center shadow-[0_0_15px_rgba(34,197,94,0.05)] group hover:border-red-500/50 transition-colors" style={{}}>
<svg className="lucide lucide-coins w-5 h-5 mb-2 group-hover:scale-110 transition-transform text-red-600" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
<span className="font-cyber font-semibold text-sm text-stone-800 font-manrope tracking-wide" style={{}}>EARN</span>
<span className="text-xs font-mono mt-1 text-stone-400 font-manrope tracking-wide" style={{}}>GET COINS</span>
</div>
<svg className="lucide lucide-chevron-right md:block hidden relative z-10 w-4 h-4 text-stone-300" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<div className="relative z-10 bg-[#030014] px-8 py-4 border border-fuchsia-500/20 rounded-full min-w-[10rem] flex flex-col items-center shadow-[0_0_15px_rgba(232,121,249,0.05)] group hover:border-fuchsia-500/50 transition-colors" style={{}}>
<svg className="lucide lucide-shopping-bag w-5 h-5 mb-2 group-hover:scale-110 transition-transform text-fuchsia-600" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="font-cyber font-semibold text-sm text-stone-800 font-manrope tracking-wide" style={{}}>SURVIVE</span>
<span className="text-xs font-mono mt-1 text-stone-400 font-manrope tracking-wide" style={{}}>BUY SUPPLIES</span>
</div>
<svg className="lucide lucide-chevron-right md:block hidden relative z-10 w-4 h-4 text-stone-300" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<div className="relative z-10 bg-[#030014] px-8 py-4 border border-pink-500/20 rounded-full min-w-[10rem] flex flex-col items-center shadow-[0_0_15px_rgba(245,158,11,0.05)] group hover:border-pink-500/50 transition-colors" style={{}}>
<svg className="lucide lucide-scale w-5 h-5 mb-2 group-hover:scale-110 transition-transform text-pink-600" data-lucide="scale" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path><path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M7 21h10"></path></svg>
<span className="font-cyber font-semibold text-sm text-stone-800 font-manrope tracking-wide" style={{}}>GOVERN</span>
<span className="text-xs font-mono mt-1 text-stone-400 font-manrope tracking-wide" style={{}}>GAIN RESPECT</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050510] relative overflow-hidden">
<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l to-transparent pointer-events-none from-orange-50/10" style={{}}></div>
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

<div className="">
<div className="flex items-center gap-4 mb-8">
<div className="w-1 h-10 bg-orange-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]" style={{}}></div>
<h3 className="text-3xl uppercase tracking-tight text-black font-montserrat font-medium" style={{}}>Identity <br/>Initialization</h3>
</div>
<div className="glass-panel p-8 space-y-8 rounded-sm border-orange-500/10" style={{}}>
<div className="">
<label className="text-xs font-mono block mb-3 text-orange-600/80 font-manrope tracking-wide" style={{}}>BIOLOGICAL AGE</label>
<div className="grid grid-cols-3 gap-3">
<button className="py-3 border rounded-sm hover:bg-orange-500/10 hover:border-orange-500/50 text-xs font-mono transition-all bg-black/5 border-black/5 text-stone-700 font-manrope tracking-wide" style={{}}>TEEN</button>
<button className="py-3 bg-orange-500/10 border border-orange-500/50 rounded-sm text-xs font-mono shadow-[0_0_10px_rgba(34,211,238,0.1)] text-black font-manrope tracking-wide" style={{}}>ADULT</button>
<button className="py-3 border rounded-sm hover:bg-orange-500/10 hover:border-orange-500/50 text-xs font-mono transition-all bg-black/5 border-black/5 text-stone-700 font-manrope tracking-wide" style={{}}>ELDER</button>
</div>
</div>
<div className="">
<label className="text-xs font-mono block mb-3 text-orange-600/80 font-manrope tracking-wide" style={{}}>GENDER SIGNATURE</label>
<div className="flex items-center justify-between p-1.5 rounded-sm border bg-white/60 border-black/5">
<button className="flex-1 transition-colors hover:text-black text-xs text-stone-600 tracking-wide font-mono rounded-sm pt-2 pb-2">FEMALE</button>
<button className="flex-1 py-2 rounded-sm border border-orange-500/20 font-mono shadow-sm bg-orange-100/40 text-black font-manrope tracking-wide" style={{}}>MALE</button>
</div>
</div>
<div className="">
<label className="text-xs font-mono block mb-3 text-orange-600/80 font-manrope tracking-wide" style={{}}>CYBERNETICS LEVEL</label>
<div className="h-2 rounded-full overflow-hidden border bg-stone-100 border-black/5" style={{}}>
<div className="h-full w-2/3 bg-gradient-to-r from-orange-400 to-fuchsia-400" style={{}}></div>
</div>
<div className="flex justify-between mt-2 text-xs font-mono text-stone-400" style={{}}>
<span className="font-manrope tracking-wide" style={{}}>NATURAL</span>
<span className="font-manrope tracking-wide" style={{}}>FULL BORG</span>
</div>
</div>
</div>
</div>

<div className="relative h-[28rem] border rounded-sm flex items-center justify-center overflow-hidden shadow-2xl border-black/10 bg-white/40">

<div className="absolute inset-0 cyber-grid opacity-30"></div>

<div className="absolute left-0 w-full h-1 bg-orange-500/50 animate-scan shadow-[0_0_15px_rgba(34,211,238,0.5)] z-20" style={{}}></div>
<div className="relative z-10 flex flex-col items-center hologram-pulse">
<div className="w-40 h-40 rounded-full border border-orange-500/30 flex items-center justify-center bg-orange-500/5 mb-6 relative" style={{}}>

<div className="absolute inset-[-10px] border border-dashed border-orange-500/20 rounded-full animate-[spin_10s_linear_infinite]" style={{}}></div>
<svg className="lucide lucide-user w-20 h-20 opacity-80 text-orange-600" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div className="px-4 py-1.5 border border-orange-500/40 text-xs font-mono rounded-full shadow-[0_0_10px_rgba(34,211,238,0.2)] bg-white text-orange-600 font-manrope tracking-wide" style={{}}>
                        GENERATING..
                    </div>
</div>

<div className="absolute top-6 left-6 text-xs font-mono space-y-2 text-stone-400" style={{}}>
<div className="flex items-center gap-2 font-manrope tracking-wide" style={{}}><span className="w-1.5 h-1.5 bg-orange-500 rounded-full" style={{}}></span> FACE_ID: #992XA</div>
<div className="flex items-center gap-2 font-manrope tracking-wide" style={{}}><span className="w-1.5 h-1.5 bg-orange-500/50 rounded-full" style={{}}></span> POLY_COUNT: HIGH</div>
</div>
<div className="absolute bottom-6 right-6">
<svg className="lucide lucide-fingerprint w-12 h-12 text-orange-500/10" data-lucide="fingerprint" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path><path d="M2 12a10 10 0 0 1 18-6"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></path><path d="M8.65 22c.21-.66.45-1.32.57-2"></path><path d="M9 6.8a6 6 0 0 1 9 5.2v2"></path></svg>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl mb-3 neon-text-orange tracking-tight text-black font-montserrat font-medium" style={{}}>CHOOSE YOUR PATH</h2>
<p className="text-stone-500 font-mono text-xs uppercase font-manrope tracking-wide" style={{}}>10 Classes Available // Citizenship Required</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

<div className="group relative border hover:border-stone-500/50 h-64 overflow-hidden clip-card transition-all duration-300 hover:-translate-y-1 bg-stone-100/30 border-black/5" style={{}}>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500 from-stone-100/30" style={{}}></div>
<div className="absolute top-5 right-5 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
<svg className="lucide lucide-shield w-5 h-5 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] text-stone-600" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<div className="absolute bottom-0 p-5 w-full">
<div className="text-xs font-mono mb-1 opacity-80 text-stone-600 font-manrope tracking-wide" style={{}}>LAW</div>
<h3 className="text-lg font-cyber font-semibold group-hover:text-white text-stone-800 font-manrope tracking-wide" style={{}}>POLICE</h3>
</div>
</div>

<div className="group relative border hover:border-pink-500/50 h-64 overflow-hidden clip-card transition-all duration-300 hover:-translate-y-1 bg-stone-100/30 border-black/5" style={{}}>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500 from-pink-100/30" style={{}}></div>
<div className="absolute top-5 right-5 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all">
<svg className="lucide lucide-stethoscope w-5 h-5 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)] text-pink-600" data-lucide="stethoscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 2v2"></path><path d="M5 2v2"></path><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></svg>
</div>
<div className="absolute bottom-0 p-5 w-full">
<div className="text-xs font-mono mb-1 opacity-80 text-pink-600 font-manrope tracking-wide" style={{}}>HEALTH</div>
<h3 className="text-lg font-cyber font-semibold group-hover:text-white text-stone-800 font-manrope tracking-wide" style={{}}>DOCTOR</h3>
</div>
</div>

<div className="group relative border h-64 overflow-hidden clip-card transition-all duration-300 hover:-translate-y-1 bg-stone-100/30 border-black/5 hover:border-pink-600/50" style={{}}>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500 from-pink-100/30" style={{}}></div>
<div className="absolute top-5 right-5 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all">
<svg className="lucide lucide-book-open w-5 h-5 text-pink-600" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</div>
<div className="absolute bottom-0 p-5 w-full">
<div className="text-xs font-mono mb-1 opacity-80 text-pink-600 font-manrope tracking-wide" style={{}}>EDU</div>
<h3 className="text-lg font-cyber font-semibold group-hover:text-white text-stone-800 font-manrope tracking-wide" style={{}}>TEACHER</h3>
</div>
</div>

<div className="group relative border h-64 overflow-hidden clip-card transition-all duration-300 hover:-translate-y-1 bg-stone-100/30 border-black/5 hover:border-teal-600/50" style={{}}>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500 from-teal-100/30"></div>
<div className="absolute top-5 right-5 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all">
<svg className="lucide lucide-backpack w-5 h-5 text-teal-600" data-lucide="backpack" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></path><path d="M8 10h8"></path><path d="M8 18h8"></path><path d="M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6"></path><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path></svg>
</div>
<div className="absolute bottom-0 p-5 w-full">
<div className="text-xs font-mono mb-1 opacity-80 text-teal-600 font-manrope tracking-wide" style={{}}>LEARN</div>
<h3 className="text-lg font-cyber font-semibold group-hover:text-white text-stone-800 font-manrope tracking-wide" style={{}}>STUDENT</h3>
</div>
</div>

<div className="group relative border hover:border-red-500/50 h-64 overflow-hidden clip-card transition-all duration-300 hover:-translate-y-1 bg-stone-100/30 border-black/5" style={{}}>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500 from-red-100/30"></div>
<div className="absolute top-5 right-5 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all">
<svg className="lucide lucide-laptop w-5 h-5 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)] text-red-600" data-lucide="laptop" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"></path><path d="M20.054 15.987H3.946"></path></svg>
</div>
<div className="absolute bottom-0 p-5 w-full">
<div className="text-xs font-mono mb-1 opacity-80 text-red-600 font-manrope tracking-wide" style={{}}>NET</div>
<h3 className="text-lg font-cyber font-semibold group-hover:text-white text-stone-800 font-manrope tracking-wide" style={{}}>HACKER</h3>
</div>
</div>

<div className="group relative border h-64 overflow-hidden clip-card transition-all duration-300 hover:-translate-y-1 bg-stone-100/30 border-black/5 hover:border-red-600/50" style={{}}>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500 from-red-100/30"></div>
<div className="absolute top-5 right-5 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all">
<svg className="lucide lucide-coins w-5 h-5 text-red-600" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
</div>
<div className="absolute bottom-0 p-5 w-full">
<div className="text-xs font-mono mb-1 opacity-80 text-red-600 font-manrope tracking-wide" style={{}}>ELITE</div>
<h3 className="text-lg font-cyber font-semibold group-hover:text-white text-stone-800 font-manrope tracking-wide" style={{}}>BILLIONAIRE</h3>
</div>
</div>

<div className="group relative border hover:border-purple-500/50 h-64 overflow-hidden clip-card transition-all duration-300 hover:-translate-y-1 bg-stone-100/30 border-black/5" style={{}}>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500 from-purple-100/30" style={{}}></div>
<div className="absolute top-5 right-5 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all">
<svg className="lucide lucide-palette w-5 h-5 text-purple-600" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<div className="absolute bottom-0 p-5 w-full">
<div className="text-xs font-mono mb-1 opacity-80 text-purple-600 font-manrope tracking-wide" style={{}}>CREATIVE</div>
<h3 className="text-lg font-cyber font-semibold group-hover:text-white text-stone-800 font-manrope tracking-wide" style={{}}>ARTIST</h3>
</div>
</div>

<div className="group relative border hover:border-orange-500/50 h-64 overflow-hidden clip-card transition-all duration-300 hover:-translate-y-1 bg-stone-100/30 border-black/5" style={{}}>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500 from-orange-100/30" style={{}}></div>
<div className="absolute top-5 right-5 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all">
<svg className="lucide lucide-shopping-cart w-5 h-5 text-orange-600" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
</div>
<div className="absolute bottom-0 p-5 w-full">
<div className="text-xs font-mono mb-1 opacity-80 text-orange-600 font-manrope tracking-wide" style={{}}>TRADE</div>
<h3 className="text-lg font-cyber font-semibold group-hover:text-white text-stone-800 font-manrope tracking-wide" style={{}}>SHOPKEEPER</h3>
</div>
</div>

<div className="group relative border h-64 overflow-hidden clip-card transition-all duration-300 hover:-translate-y-1 bg-stone-100/30 border-black/5 hover:border-red-600/50" style={{}}>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500 from-red-100/30"></div>
<div className="absolute top-5 right-5 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all">
<svg className="lucide lucide-home w-5 h-5 text-red-600" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<div className="absolute bottom-0 p-5 w-full">
<div className="text-xs font-mono mb-1 opacity-80 text-red-600 font-manrope tracking-wide" style={{}}>CIVIL</div>
<h3 className="text-lg font-cyber font-semibold group-hover:text-white text-stone-800 font-manrope tracking-wide" style={{}}>HOMEMAKER</h3>
</div>
</div>

<div className="group relative border h-64 overflow-hidden clip-card transition-all duration-300 hover:-translate-y-1 bg-stone-100/30 border-black/5 hover:border-red-400/50" style={{}}>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500 from-red-100/30"></div>
<div className="absolute top-5 right-5 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all">
<svg className="lucide lucide-gavel w-5 h-5 text-red-500" data-lucide="gavel" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381"></path><path d="m16 16 6-6"></path><path d="m21.5 10.5-8-8"></path><path d="m8 8 6-6"></path><path d="m8.5 7.5 8 8"></path></svg>
</div>
<div className="absolute bottom-0 p-5 w-full">
<div className="text-xs font-mono text-red-500 mb-1 opacity-80 font-manrope tracking-wide" style={{}}>JUSTICE</div>
<h3 className="text-lg font-cyber font-semibold group-hover:text-white text-stone-800 font-manrope tracking-wide" style={{}}>JUDGE</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y relative bg-white/60 border-black/5">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl mb-16 flex items-center gap-4 text-black font-montserrat font-medium" style={{}}>
<span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                LIVE JUSTICE SYSTEM
            </h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">

<div className="hidden md:block absolute top-10 left-0 w-full h-px z-0 bg-stone-200" style={{}}></div>

<div className="relative z-10 p-6 bg-[#0a0a0f] border hover:border-red-500/50 transition-colors group h-full border-stone-200" style={{}}>
<div className="w-12 h-12 border flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.1)] transition-shadow bg-stone-100 border-stone-300" style={{}}>
<svg className="lucide lucide-file-warning w-5 h-5 text-stone-500 group-hover:text-red-500 transition-colors" data-lucide="file-warning" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
</div>
<h4 className="text-lg font-bold font-cyber mb-2 text-black font-manrope tracking-wide" style={{}}>COMPLAINT</h4>
<p className="text-xs text-stone-500 font-mono leading-relaxed font-manrope tracking-wide" style={{}}>Terminal Log #492.Citizen files report.</p>
</div>

<div className="relative z-10 p-6 bg-[#0a0a0f] border hover:border-stone-500/50 transition-colors group h-full border-stone-200" style={{}}>
<div className="w-12 h-12 border flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-shadow bg-stone-100 border-stone-300" style={{}}>
<svg className="lucide lucide-siren w-5 h-5 text-stone-500 group-hover:text-stone-500 transition-colors" data-lucide="siren" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 18v-6a5 5 0 1 1 10 0v6"></path><path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"></path><path d="M21 12h1"></path><path d="M18.5 4.5 18 5"></path><path d="M2 12h1"></path><path d="M12 2v1"></path><path d="m4.929 4.929.707.707"></path><path d="M12 12v6"></path></svg>
</div>
<h4 className="text-lg font-bold font-cyber mb-2 text-black font-manrope tracking-wide" style={{}}>INVESTIGATION</h4>
<p className="text-xs text-stone-500 font-mono leading-relaxed font-manrope tracking-wide" style={{}}>Unit 7 deployed.Evidence collected.</p>
</div>

<div className="relative z-10 p-6 bg-[#0a0a0f] border hover:border-red-500/50 transition-colors group h-full border-stone-200" style={{}}>
<div className="w-12 h-12 border flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.1)] transition-shadow bg-stone-100 border-stone-300" style={{}}>
<svg className="lucide lucide-gavel w-5 h-5 text-stone-500 group-hover:text-red-500 transition-colors" data-lucide="gavel" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381"></path><path d="m16 16 6-6"></path><path d="m21.5 10.5-8-8"></path><path d="m8 8 6-6"></path><path d="m8.5 7.5 8 8"></path></svg>
</div>
<h4 className="text-lg font-bold font-cyber mb-2 text-black font-manrope tracking-wide" style={{}}>COURTROOM</h4>
<p className="text-xs text-stone-500 font-mono leading-relaxed font-manrope tracking-wide" style={{}}>Judge presides.Defense vs Prosecution.</p>
</div>

<div className="relative z-10 p-6 bg-[#0a0a0f] border hover:border-red-500/50 transition-colors group h-full border-stone-200" style={{}}>
<div className="w-12 h-12 border flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.1)] transition-shadow bg-stone-100 border-stone-300" style={{}}>
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-stone-500 group-hover:text-red-500 transition-colors" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h4 className="text-lg font-bold font-cyber mb-2 text-black font-manrope tracking-wide" style={{}}>VERDICT</h4>
<p className="text-xs text-stone-500 font-mono leading-relaxed font-manrope tracking-wide" style={{}}>Jail Time: 2 YearsOR Fine: 5000◈</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#060611]">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10">

<div className="lg:col-span-1 space-y-6">
<div className="glass-panel p-6 border-t-2 border-t-orange-500 relative rounded-sm" style={{}}>
<div className="absolute top-3 right-3 text-xs font-mono text-orange-500 animate-pulse font-manrope tracking-wide" style={{}}>LIVE DATA</div>
<div className="flex items-center gap-4 mb-6">
<div className="w-14 h-14 rounded-sm border flex items-center justify-center bg-stone-100 border-black/5" style={{}}>
<svg className="lucide lucide-user text-stone-700" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div>
<div className="font-bold font-cyber text-lg text-black font-manrope tracking-wide" style={{}}>CITIZEN #9902</div>
<div className="text-xs text-stone-500 font-mono mt-0.5 font-manrope tracking-wide" style={{}}>RANK: NOVICE</div>
</div>
</div>

<div className="space-y-5">
<div>
<div className="flex justify-between text-xs font-mono text-stone-500 mb-1.5" style={{}}>
<span className="font-manrope tracking-wide" style={{}}>FOOD</span>
<span className="text-orange-600 font-manrope tracking-wide" style={{}}>78%</span>
</div>
<div className="h-1 w-full rounded-full overflow-hidden bg-stone-100" style={{}}>
<div className="h-full bg-orange-500 w-[78%] shadow-[0_0_8px_#f97316]" style={{}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-mono text-stone-500 mb-1.5" style={{}}>
<span className="font-manrope tracking-wide" style={{}}>WATER</span>
<span className="text-orange-600 font-manrope tracking-wide" style={{}}>42%</span>
</div>
<div className="h-1 w-full rounded-full overflow-hidden bg-stone-100" style={{}}>
<div className="h-full bg-orange-500 w-[42%] shadow-[0_0_8px_#06b6d4]" style={{}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-mono text-stone-500 mb-1.5" style={{}}>
<span className="font-manrope tracking-wide" style={{}}>RESPECT</span>
<span className="text-fuchsia-600 font-manrope tracking-wide" style={{}}>15%</span>
</div>
<div className="h-1 w-full rounded-full overflow-hidden bg-stone-100" style={{}}>
<div className="h-full bg-fuchsia-500 w-[15%] shadow-[0_0_8px_#d946ef]"></div>
</div>
</div>
</div>

<div className="mt-6 pt-6 border-t border-black/5">
<div className="flex justify-between items-center p-4 rounded-sm border border-red-500/10 bg-white/40">
<span className="text-xs font-mono text-red-400 font-manrope tracking-wide" style={{}}>BALANCE</span>
<span className="text-xl font-bold font-cyber text-black font-manrope tracking-wide" style={{}}>24,592 ◈</span>
</div>
</div>
</div>

<div className="glass-panel p-6 rounded-sm">
<h3 className="text-sm font-semibold font-cyber mb-4 uppercase text-black font-manrope tracking-wide" style={{}}>Active Missions</h3>
<div className="space-y-3">
<div className="flex items-center gap-3 text-xs p-3 border-l-2 border-red-500 rounded-r-sm text-stone-700 bg-black/5" style={{}}>
<svg className="lucide lucide-crosshair w-4 h-4 text-red-500" data-lucide="crosshair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
<span className="font-mono font-manrope tracking-wide" style={{}}>Neutralize Target (Sector 4)</span>
</div>
<div className="flex items-center gap-3 text-xs p-3 border-l-2 border-red-500 rounded-r-sm text-stone-700 bg-black/5" style={{}}>
<svg className="lucide lucide-box w-4 h-4 text-red-500" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
<span className="font-mono font-manrope tracking-wide" style={{}}>Deliver Package (15m)</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2">
<div className="flex justify-between items-end mb-8">
<h2 className="text-3xl tracking-tight text-black font-montserrat font-medium" style={{}}>NEON BAZAAR</h2>
<div className="flex gap-2">
<button className="px-4 py-1.5 border text-xs font-mono rounded-sm transition-colors bg-fuchsia-400/10 text-fuchsia-600 border-fuchsia-400/30 hover:bg-fuchsia-400/20 font-manrope tracking-wide" style={{}}>ALL</button>
<button className="px-4 py-1.5 bg-transparent text-stone-500 border text-xs font-mono rounded-sm transition-colors border-black/10 hover:text-black hover:border-black/20 font-manrope tracking-wide" style={{}}>FOOD</button>
<button className="px-4 py-1.5 bg-transparent text-stone-500 border text-xs font-mono rounded-sm transition-colors border-black/10 hover:text-black hover:border-black/20 font-manrope tracking-wide" style={{}}>GEAR</button>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-6">

<div className="border p-5 relative group transition-all rounded-sm bg-stone-100/40 border-black/5 hover:border-orange-600/50" style={{}}>
<div className="absolute top-3 right-3 text-xs font-mono opacity-70 text-red-600 font-manrope tracking-wide" style={{}}>STABLE</div>
<div className="h-32 rounded-sm mb-4 flex items-center justify-center relative overflow-hidden bg-white/50">
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity from-orange-100/20" style={{}}></div>
<svg className="lucide lucide-coffee w-10 h-10 opacity-80 group-hover:scale-110 transition-transform duration-300 text-orange-800" data-lucide="coffee" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2"></path><path d="M14 2v2"></path><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path><path d="M6 2v2"></path></svg>
</div>
<h4 className="font-semibold font-cyber text-black font-manrope tracking-wide" style={{}}>SYNTH-COFFEE</h4>
<div className="flex justify-between items-center mt-3 pt-3 border-t border-black/5">
<span className="text-xs text-stone-500 font-mono font-manrope tracking-wide" style={{}}>+10 ENERGY</span>
<span className="font-semibold text-sm text-red-600 font-manrope tracking-wide" style={{}}>25◈</span>
</div>
</div>

<div className="border p-5 relative group transition-all rounded-sm bg-stone-100/40 border-black/5 hover:border-fuchsia-600/50" style={{}}>
<div className="absolute top-3 right-3 text-xs font-mono opacity-70 text-red-600 font-manrope tracking-wide" style={{}}>SCARCE</div>
<div className="h-32 rounded-sm mb-4 flex items-center justify-center relative overflow-hidden bg-white/50">
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity from-fuchsia-100/20"></div>
<svg className="lucide lucide-zap w-10 h-10 opacity-80 group-hover:scale-110 transition-transform duration-300 text-fuchsia-800" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h4 className="font-semibold font-cyber text-black font-manrope tracking-wide" style={{}}>POWER CELL</h4>
<div className="flex justify-between items-center mt-3 pt-3 border-t border-black/5">
<span className="text-xs text-stone-500 font-mono font-manrope tracking-wide" style={{}}>BATTERY</span>
<span className="font-semibold text-sm text-red-600 font-manrope tracking-wide" style={{}}>150◈</span>
</div>
</div>

<div className="border p-5 relative group transition-all rounded-sm bg-stone-100/40 border-black/5 hover:border-red-600/50" style={{}}>
<div className="absolute top-3 right-3 text-xs font-mono opacity-70 text-red-600 font-manrope tracking-wide" style={{}}>STABLE</div>
<div className="h-32 rounded-sm mb-4 flex items-center justify-center relative overflow-hidden bg-white/50">
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity from-red-100/20"></div>
<svg className="lucide lucide-droplet w-10 h-10 opacity-80 group-hover:scale-110 transition-transform duration-300 text-red-800" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
</div>
<h4 className="font-semibold font-cyber text-black font-manrope tracking-wide" style={{}}>PURE H2O</h4>
<div className="flex justify-between items-center mt-3 pt-3 border-t border-black/5">
<span className="text-xs text-stone-500 font-mono font-manrope tracking-wide" style={{}}>+50 HYDRATION</span>
<span className="font-semibold text-sm text-red-600 font-manrope tracking-wide" style={{}}>45◈</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b to-[#0a0500] border-t relative overflow-hidden from-white border-pink-100/20">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjM0LIDE3OSwgOCwgMC4wNSkiLz48L3N2Zz4=')] opacity-20 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="inline-block mb-8 relative">
<div className="absolute inset-0 bg-pink-500/20 blur-2xl rounded-full"></div>
<svg className="lucide lucide-crown w-16 h-16 text-pink-500 relative z-10 animate-pulse drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
</div>
<h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b mb-4 neon-text-gold tracking-tight from-pink-800 to-pink-200 font-montserrat font-medium" style={{}}>COUNCIL OF ELDERS</h2>
<p className="font-mono text-xs mb-16 uppercase text-pink-800/50 font-manrope tracking-wide" style={{}}>Supreme Governance // Prestige Rank 100+</p>
<div className="glass-panel border border-pink-500/20 p-8 rounded-xl shadow-[0_0_60px_rgba(245,158,11,0.05)] backdrop-blur-xl max-w-2xl mx-auto">
<div className="flex items-center justify-between border-b border-pink-500/10 pb-4 mb-6">
<span className="font-mono text-xs text-pink-500/80 font-manrope tracking-wide" style={{}}>CURRENT RULER</span>
<span className="font-mono text-xs text-pink-500/80 font-manrope tracking-wide" style={{}}>NET WORTH: ∞</span>
</div>
<div className="flex items-center gap-8 text-left">
<div className="w-24 h-24 bg-gradient-to-br rounded-lg flex items-center justify-center border border-pink-500/40 shadow-inner from-pink-400/20 to-pink-100/20">
<span className="text-4xl grayscale brightness-150 font-montserrat font-medium" style={{}}>👑</span>
</div>
<div>
<h3 className="text-2xl tracking-wide text-stone-900 font-montserrat font-medium" style={{}}>LORD_CYPHER</h3>
<div className="text-xs font-mono mt-1 italic text-pink-600/60 font-manrope tracking-wide" style={{}}>"Order through Code."</div>
<div className="mt-4 flex gap-2">
<span className="px-2 py-1 bg-pink-500/10 border border-pink-500/30 text-xs rounded-sm text-pink-700 font-manrope tracking-wide" style={{}}>VETO POWER</span>
<span className="px-2 py-1 bg-pink-500/10 border border-pink-500/30 text-xs rounded-sm text-pink-700 font-manrope tracking-wide" style={{}}>TAX CONTROL</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#030014] relative border-t border-black/5" style={{}}>
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl mb-20 tracking-tight text-black font-montserrat font-medium" style={{}}>MOBILE INTERFACE LINKED</h2>
<div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 perspective-[1000px]">

<div className="w-64 h-[500px] border-[6px] rounded-[2.5rem] relative overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500 group border-stone-200 bg-white" style={{}}>
<div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-white via-orange-50/20 to-white" style={{}}>
<div className="w-16 h-16 border border-orange-500/50 flex items-center justify-center rounded-lg mb-8 shadow-[0_0_20px_rgba(34,211,238,0.2)]" style={{}}>
<span className="text-3xl text-orange-600 font-montserrat font-medium" style={{}}>X</span>
</div>
<div className="font-cyber font-bold text-xl mb-10 text-black font-manrope tracking-wide" style={{}}>WELCOME</div>
<button className="px-8 py-2.5 rounded-full text-xs font-semibold shadow-lg bg-orange-400 text-black shadow-orange-100/50 font-manrope tracking-wide" style={{}}>CONNECT</button>
</div>
</div>

<div className="w-64 h-[500px] border-[6px] rounded-[2.5rem] relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-500 z-10 md:-mt-12 bg-gradient-to-b border-stone-200 bg-white from-stone-100 to-white" style={{}}>
<div className="p-6 h-full flex flex-col">
<div className="font-mono text-xs mb-6 text-center mt-4 text-stone-600 font-manrope tracking-wide" style={{}}>SELECT CLASS</div>
<div className="space-y-4 flex-1">
<div className="h-16 border border-stone-500/50 rounded-lg p-3 flex items-center gap-4 transition-colors cursor-pointer bg-stone-100/20 hover:bg-stone-100/30" style={{}}>
<svg className="lucide lucide-shield w-5 h-5 text-stone-600" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<div className="text-sm font-semibold text-black font-manrope tracking-wide" style={{}}>POLICE</div>
</div>
<div className="h-16 border border-pink-500/20 rounded-lg p-3 flex items-center gap-4 opacity-60 bg-pink-100/10">
<svg className="lucide lucide-activity w-5 h-5 text-pink-600" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<div className="text-sm font-semibold text-black font-manrope tracking-wide" style={{}}>DOCTOR</div>
</div>
<div className="h-16 border border-pink-500/20 rounded-lg p-3 flex items-center gap-4 opacity-60 bg-pink-100/10">
<svg className="lucide lucide-gem w-5 h-5 text-pink-600" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
<div className="text-sm font-semibold text-black font-manrope tracking-wide" style={{}}>TYCOON</div>
</div>
</div>
<div className="w-16 h-1 mx-auto rounded-full mb-2 bg-black/20"></div>
</div>
</div>

<div className="w-64 h-[500px] border-[6px] rounded-[2.5rem] relative overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500 border-stone-200 bg-white" style={{}}>
<div className="absolute inset-0 bg-gradient-to-b p-6 flex flex-col from-stone-100 via-white to-white" style={{}}>
<div className="mt-10 mx-auto w-24 h-24 rounded-full border border-orange-500/50 relative flex items-center justify-center bg-orange-100/10" style={{}}>
<svg className="lucide lucide-user w-12 h-12 text-stone-800" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<div className="absolute bottom-0 right-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center font-bold shadow-lg border-2 text-white border-white font-manrope tracking-wide" style={{}}>+</div>
</div>
<div className="mt-8 space-y-3">
<div className="h-2 rounded-full w-full bg-stone-200/50" style={{}}></div>
<div className="h-2 rounded-full w-2/3 bg-stone-200/50" style={{}}></div>
</div>
<button className="mt-auto mb-8 w-full py-3 font-bold text-xs rounded-lg transition-colors bg-black text-white hover:bg-stone-800 font-manrope tracking-wide" style={{}}>FINALIZE</button>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t bg-[#020205] pt-12 pb-8 border-black/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<span className="text-2xl tracking-widest text-stone-800 font-montserrat font-medium" style={{}}>
                SOCIETY<span className="text-orange-500 font-montserrat font-medium" style={{}}>X</span>
</span>
<div className="flex gap-8 text-xs font-mono text-stone-500" style={{}}>
<a className="transition-colors hover:text-orange-600 font-manrope tracking-wide" href="#" style={{}}>LEGAL</a>
<a className="transition-colors hover:text-orange-600 font-manrope tracking-wide" href="#" style={{}}>PRIVACY</a>
<a className="transition-colors hover:text-orange-600 font-manrope tracking-wide" href="#" style={{}}>STATUS</a>
</div>
<div className="flex items-center gap-2 text-xs font-mono text-stone-400 font-manrope tracking-wide" style={{}}>
<span className="w-2 h-2 rounded-full animate-pulse bg-red-100"></span>
                SECURE CONNECTION ESTABLISHED
            </div>
</div>
</footer>


    </>
  );
}
