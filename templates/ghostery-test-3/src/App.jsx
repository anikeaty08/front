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



    // Interaction script for Flashlight Cards
    // This updates CSS variables based on mouse position for the reveal effect
    document.addEventListener('mousemove', e => {
      const cards = document.querySelectorAll('.flashlight-card');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed -z-50 overflow-hidden w-full h-full top-0 right-0 bottom-0 left-0" style={{}}>

<div className="w-full h-full absolute top-0 right-0 bottom-0 left-0" style={{background: 'linear-gradient(rgb(0, 24, 113) 0%, rgb(0, 82, 194) 25%, rgb(74, 150, 228) 45%, rgb(217, 230, 245) 65%, rgb(255, 173, 125) 75%, rgb(247, 93, 77) 85%, rgb(204, 0, 61) 95%, rgb(82, 0, 61) 100%)'}}>
</div>

<div className="pointer-events-none opacity-40 mix-blend-screen absolute top-0 right-0 bottom-0 left-0" style={{background: 'radial-gradient(circle at 50% 100%, #38bdf8, transparent 60%)', animation: 'aurora-move 15s ease-in-out infinite'}}>
</div>

<div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-[#020412] to-transparent opacity-90">
</div>
</div>

<nav className="fixed z-50 bg-[#020412]/20 border-white/5 border-b top-0 right-0 left-0 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="" href="/home">
<div className="flex font-medium text-white gap-x-2 gap-y-x-2 items-center">

<svg className="text-white" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="M8 11h.01"></path>
<path d="M16 11h.01"></path>
<path d="M12 16a4 4 0 0 0 4-2"></path>
</svg>
<span className="tracking-tight">Ghostery</span>
</div>
</a>

<div className="hidden md:flex gap-8 text-sm font-medium text-slate-300 h-full items-center">

<div className="relative group h-full flex items-center">
<button className="flex items-center gap-1.5 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors font-manrope outline-none">
                Features
                <svg className="text-slate-500 group-hover:text-white transition-colors duration-200 group-hover:rotate-180" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>

<div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[600px] invisible opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-50 pointer-events-none group-hover:pointer-events-auto">
<div className="bg-[#020412] backdrop-blur-3xl border border-white/10 rounded-2xl p-2 shadow-2xl ring-1 ring-white/5 grid grid-cols-2 gap-1 overflow-hidden">

<a className="group/item relative flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-all" href="/features/ad-blocking">
<div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-slate-400 group-hover/item:text-indigo-400 group-hover/item:border-indigo-500/30 group-hover/item:bg-indigo-500/10 transition-all duration-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path>
<path d="m21 21-4.3-4.3"></path>
<path d="M11 8h2"></path>
</svg>
</div>
<div>
<div className="text-sm font-semibold text-slate-200 group-hover/item:text-white transition-colors font-manrope">
                  Ad Blocking</div>
<div className="text-xs text-slate-500 mt-1 leading-relaxed group-hover/item:text-slate-400 font-manrope">
                  Block intrusive ads and pop-ups instantly.</div>
</div>
</a>

<a className="group/item relative flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-all" href="/features/anti-tracking">
<div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-slate-400 group-hover/item:text-indigo-400 group-hover/item:border-indigo-500/30 group-hover/item:bg-indigo-500/10 transition-all duration-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12h20"></path>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
<div>
<div className="text-sm font-semibold text-slate-200 group-hover/item:text-white transition-colors font-manrope">
                  Anti-Tracking</div>
<div className="text-xs text-slate-500 mt-1 leading-relaxed group-hover/item:text-slate-400 font-manrope">
                  Stop invisible trackers from collecting your data.</div>
</div>
</a>

<a className="group/item relative flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-all" href="/features/never-consent">
<div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-slate-400 group-hover/item:text-indigo-400 group-hover/item:border-indigo-500/30 group-hover/item:bg-indigo-500/10 transition-all duration-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div>
<div className="text-sm font-semibold text-slate-200 group-hover/item:text-white transition-colors font-manrope">
                  Never-Consent</div>
<div className="text-xs text-slate-500 mt-1 leading-relaxed group-hover/item:text-slate-400 font-manrope">
                  Automatically reject annoying cookie banners.</div>
</div>
</a>

<a className="group/item relative flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-all" href="/features/search">
<div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-slate-400 group-hover/item:text-indigo-400 group-hover/item:border-indigo-500/30 group-hover/item:bg-indigo-500/10 transition-all duration-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
</div>
<div>
<div className="text-sm font-semibold text-slate-200 group-hover/item:text-white transition-colors font-manrope">
                  Private Search</div>
<div className="text-xs text-slate-500 mt-1 leading-relaxed group-hover/item:text-slate-400 font-manrope">
                  Search the web without your history being logged.</div>
</div>
</a>
</div>
</div>
</div>
<a className="hover:text-white transition-colors font-manrope" href="#">Pricing</a>
<a className="hover:text-white transition-colors font-manrope" href="/resources">Resources</a>
<a className="hover:text-white transition-colors font-manrope" href="/who-we-are">Who We Are</a>
</div>

<div className="flex gap-4 text-sm font-medium gap-x-4 gap-y-4 items-center">
<a className="hidden sm:block hover:text-white transition-colors font-manrope" href="/login">Log in</a>
<a className="hover:bg-white/15 transition-all text-white font-manrope bg-white/10 border border-white/10 rounded-full py-1.5 px-4" href="/download">
        Get Ghostery
      </a>

<button aria-label="Toggle menu" className="md:hidden hover:text-white transition-colors text-slate-300 pt-1 pr-1 pb-1 pl-1 z-50 relative" onclick="
          const menu = document.getElementById('ghostery-mobile-menu');
          const menuIcon = document.getElementById('menu-icon');
          const closeIcon = document.getElementById('close-icon');
          
          if(menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
            menu.classList.add('flex');
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
          } else {
            menu.classList.add('hidden');
            menu.classList.remove('flex');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            document.body.style.overflow = '';
          }
        ">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="menu" fill="none" height="24" id="menu-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line className="" x1="4" x2="20" y1="6" y2="6"></line><line className="" x1="4" x2="20" y1="18" y2="18"></line></svg>
<svg className="hidden" height="24" id="close-icon" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="m14.5 9.5l-5 5m0-5l5 5" strokeLinecap="round"></path></g></svg>
</button>
</div>

<div className="fixed inset-x-0 top-[64px] z-40 h-dvh bg-[#020412]/95 backdrop-blur-3xl hidden md:hidden flex-col px-6 pb-12 overflow-y-auto flex" id="ghostery-mobile-menu">
<div className="flex flex-col gap-6 text-lg font-medium text-slate-300 pt-6">

<div>
<button className="flex items-center justify-between w-full text-left font-manrope transition-colors" onclick="
                    const list = document.getElementById('mobile-features-list');
                    const icon = this.querySelector('svg');
                    list.classList.toggle('hidden');
                    list.classList.toggle('flex');
                    icon.classList.toggle('rotate-180');
                    this.classList.toggle('text-white');
                ">
                    Features
                    <svg className="w-5 h-5 transition-transform duration-300 text-slate-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="flex hidden flex-col gap-6 mt-5" id="mobile-features-list">

<a className="text-sm" href="#">Ad Blocking</a>
<a className="text-sm" href="#">Anti-Tracking</a>
<a className="text-sm" href="#">Never-Consent</a>
<a className="text-sm" href="#">Private Search</a>
</div>
</div>
<a className="hover:text-white transition-colors font-manrope" href="#">Pricing</a>
<a className="hover:text-white transition-colors font-manrope" href="#">Resources</a>
<a className="hover:text-white transition-colors font-manrope" href="#">Who We Are</a>
<div className="h-px bg-white/10 w-full my-2"></div>
<a className="hover:text-white transition-colors font-manrope" href="/login">Log in</a>
</div>
</div>
</div>
</nav>

<main className="overflow-hidden min-h-screen flex flex-col pt-28 pb-0 relative items-center">

<div className="animate-intro z-10 flex flex-col text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 items-center">
<h1 className="md:text-7xl leading-[1.1] text-3xl font-medium tracking-tight mb-6">
<span className="title-reflection block sm:inline font-manrope font-medium" style={{}}>Browse the web</span> <br className="hidden sm:block"/>
<span className="bg-clip-text font-medium text-transparent font-manrope bg-gradient-to-r from-indigo-200 via-white to-cyan-200">faster, cleaner, and safer.</span>
</h1>
<p className="leading-relaxed md:text-xl text-base text-slate-50 font-manrope opacity-90 max-w-2xl mr-auto mb-6 ml-auto">
        Block ads, stop trackers, and protect your digital privacy with the world's most trusted open-source privacy extension.
      </p>
<div className="flex sm:flex-row gap-2 gap-x-2 gap-y-2 items-center">

<button className="group overflow-hidden transition-transform active:scale-95 text-sm font-medium text-slate-950 bg-white rounded-full pt-2.5 pr-4 pb-2.5 pl-4 relative">
<span className="flex items-center gap-2 font-manrope z-10 relative">Add to Browser - It's Free <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg></span>

<div className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-transparent via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="animate-[spin_2s_linear_infinite] opacity-50 w-full h-full absolute top-0 left-0"></div>
</div>
</button>
<button className="hover:bg-white/10 transition-colors flex group text-sm text-white font-manrope bg-white/5 border-white/10 border rounded-full pt-2.5 pr-4 pb-2.5 pl-4 gap-x-2 gap-y-2 items-center">
                    How it works
                    <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
</button>
</div>
</div>

<div className="animate-intro md:px-8 w-full max-w-6xl mt-12 mb-20 pr-4 pl-4 relative perspective-1000" style={{maxHeight: '400px'}}>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-indigo-500/20 blur-[80px] -z-10 rounded-full">
</div>

<div className="relative bg-[#0F111A]/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden ring-1 ring-white/5">

<div className="h-14 border-b border-white/5 flex items-center justify-between px-4 bg-white/[0.02]">
<div className="flex gap-4 gap-x-2 gap-y-4 items-center">
<div className="flex gap-2">
<span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></span>
<span className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></span>
<span className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></span>
</div>

<div className="flex gap-2 text-xs font-medium text-slate-400 gap-x-1 gap-y-2 items-center">
<div className="flex items-center gap-1.5 p-1 px-2 rounded hover:bg-white/5 transition-colors cursor-pointer">
<svg aria-hidden="true" className="iconify text-indigo-400" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
<span className="text-slate-300 font-manrope">Ghostery Suite</span>
</div>
<span className="text-slate-600 font-manrope">/</span>
<div className="flex items-center gap-1.5 p-1 px-2 rounded hover:bg-white/5 transition-colors cursor-pointer">
<svg aria-hidden="true" className="iconify text-cyan-400" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<rect fill="none" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="1.5" width="18" x="3" y="3"></rect>
<path d="M9 3v18" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
<span className="text-slate-300 font-manrope" style={{}}>Dashboard</span>
</div>
<span className="text-slate-600 font-manrope" style={{}}>/</span>
<div className="flex items-center gap-1.5 bg-green-900/20 border border-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-green-400 sonar-emitter"></span>
<span className="font-manrope" style={{}}>Protected</span>
</div>
</div>
</div>

<div className="flex gap-4 gap-x-2 gap-y-2 items-center">
<div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-xs text-slate-500 w-48 justify-between cursor-text">
<div className="flex items-center gap-2">
<svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<span className="font-manrope" style={{}}>Search trackers...</span>
</div>
</div>
</div>
</div>

<div className="flex border-white/5 border-b pr-6 pl-6 gap-x-6 gap-y-6 items-center">
<button className="py-3 text-sm text-white border-b-2 border-indigo-500 font-manrope" style={{}}>Summary</button>
<button className="py-3 text-sm text-slate-500 hover:text-slate-300 transition-colors font-manrope" style={{}}>Trackers</button>
<button className="py-3 text-sm text-slate-500 hover:text-slate-300 transition-colors font-manrope" style={{}}>Ads</button>
<button className="py-3 text-sm text-slate-500 hover:text-slate-300 transition-colors font-manrope" style={{}}>Settings</button>
</div>

<div className="md:p-8 min-h-[500px] bg-[#0B0D15] relative overflow-hidden flex items-center justify-center p-4 group/container">

<div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse">
</div>
<div className="absolute bottom-[-20%] right-[20%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen">
</div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0 opacity-40">
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="beam-gradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#6366f1" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#818cf8" stop-opacity="0.5"></stop>
<stop offset="100%" stop-color="#22d3ee" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path className="hidden md:block" d="M 320 250 C 400 250, 400 250, 460 250" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"></path>
<path className="hidden md:block noodle-path" d="M 320 250 C 400 250, 400 250, 460 250" fill="none" stroke="url(#beam-gradient)" stroke-dasharray="10 10" strokeWidth="2"></path>
<path className="hidden md:block" d="M 780 250 C 820 250, 820 180, 880 180" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"></path>
<path className="hidden md:block" d="M 780 250 C 820 250, 820 380, 880 380" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"></path>
</svg>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl relative z-10 items-start">

<div className="flex flex-col gap-4">
<div className="flex items-center gap-2 text-slate-400 text-xs font-medium pl-1 uppercase tracking-wider opacity-80">
<svg className="" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
<span className="font-manrope" style={{}}>Tracker Protection</span>
</div>

<div className="flashlight-card bg-[#11131A] border border-white/5 rounded-xl p-0 shadow-lg hover:border-white/10 transition-colors overflow-hidden" style={{-MouseX: '152px', -MouseY: '142px'}}>
<div className="p-4 border-b border-white/5 bg-white/[0.01] flex justify-between items-center">
<h3 className="text-slate-200 text-sm font-manrope" style={{}}>Blocked Items</h3>
<div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse"></span>
<span className="text-[10px] text-emerald-400 font-manrope" style={{}}>Active</span>
</div>
</div>
<div className="p-4 space-y-3">
<div className="flex justify-between items-center text-xs group">
<div className="flex items-center gap-2 text-slate-400 group-hover:text-slate-300 transition-colors font-manrope">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
                      Ad Trackers
                    </div>
<span className="text-emerald-500/80 font-manrope">142 Blocked</span>
</div>
<div className="flex justify-between items-center text-xs group">
<div className="flex items-center gap-2 text-slate-400 group-hover:text-slate-300 transition-colors font-manrope">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M2 12h10"></path><path d="M9 4v16"></path><path d="m3 9 3 3-3 3"></path><path d="M14 8V7c0-1.1.9-2 2-2h6"></path><path d="M14 12v4c0 1.1.9 2 2 2h6"></path></svg>
                      Site Analytics
                    </div>
<span className="text-emerald-500/80 font-manrope">89 Blocked</span>
</div>
<div className="flex justify-between items-center text-xs group">
<div className="flex items-center gap-2 text-slate-400 group-hover:text-slate-300 transition-colors font-manrope">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><circle cx="19" cy="5" r="2"></circle><circle cx="5" cy="19" r="2"></circle><path d="M10.4 13.7 6.6 17.4"></path><path d="M17.4 6.6l-3.7 3.8"></path></svg>
                      Social Media
                    </div>
<span className="text-emerald-500/80 font-manrope">12 Blocked</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-4 mt-8 md:mt-0 relative">

<div className="absolute inset-0 bg-indigo-500/5 blur-3xl -z-10 rounded-full"></div>
<div className="flex items-center gap-2 text-slate-400 text-xs font-medium pl-1 uppercase tracking-wider opacity-80">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path><path d="m21 21-4.3-4.3"></path>
</svg>
<span className="font-manrope" style={{}}>Ad Blocker</span>
</div>

<div className="flashlight-card bg-[#11131A] border border-indigo-500/20 rounded-xl p-0 shadow-2xl hover:border-indigo-500/30 transition-all duration-300" style={{-MouseX: '161.671875px', -MouseY: '142px'}}>
<div className="p-4 border-b border-white/5 bg-white/[0.01] flex justify-between items-center">
<div className="flex items-center gap-3">
<span className="text-white text-sm tracking-tight font-manrope" style={{}}>wired.com</span>
<span className="text-[10px] text-slate-400 bg-white/5 px-1.5 py-0.5 rounded border border-white/10 flex items-center gap-1 font-manrope" style={{}}>
                      Safe
                    </span>
</div>
<button className="text-slate-500 hover:text-white transition-colors"><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
</div>
<div className="p-5 space-y-4">
<div className="flex justify-between items-center text-xs">
<div className="flex items-center gap-2 text-slate-400 font-manrope" style={{}}>
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m21 21-4.3-4.3"></path><path d="M11 8h2"></path><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path>
</svg>
                      Ads Removed
                    </div>
<span className="text-slate-200 font-manrope" style={{}}>14</span>
</div>
<div className="flex justify-between items-center text-xs">
<div className="flex items-center gap-2 text-slate-400 font-manrope" style={{}}>
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
</svg>
                      Page Speed
                    </div>
<span className="text-slate-200 font-manrope" style={{}}>+45% Faster</span>
</div>
<div className="flex justify-between items-center text-xs">
<div className="flex items-center gap-2 text-slate-400 font-manrope" style={{}}>
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
</svg>
                      Clean Web
                    </div>
<span className="text-slate-200 font-manrope" style={{}}>Optimized</span>
</div>
</div>
<div className="p-3 bg-white/[0.02] border-t border-white/5">
<button className="w-full text-xs text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/5 py-1.5 rounded transition-colors flex items-center justify-center gap-1.5 font-manrope" style={{}}>
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
             Trust this site
           </button>
</div>
</div>
</div>

<div className="flex flex-col gap-4 mt-16 md:mt-0">
<div className="flex items-center gap-2 text-slate-400 text-xs font-medium pl-1 uppercase tracking-wider opacity-80">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
</svg>
<span className="font-manrope" style={{}}>Privacy Impact</span>
</div>

<div className="flashlight-card bg-[#11131A] border border-white/5 rounded-xl p-0 shadow-lg hover:border-white/10 transition-colors" style={{-MouseX: '175.34375px', -MouseY: '149px'}}>
<div className="p-4 border-b border-white/5 bg-white/[0.01] flex justify-between items-center">
<div className="flex items-center gap-3">
<span className="text-white text-sm font-manrope" style={{}}>Never-Consent</span>
<span className="flex items-center gap-1 text-[10px] text-orange-400 bg-orange-500/10 px-1.5 py-0.5 rounded border border-orange-500/20 font-manrope">
               Cookies
            </span>
</div>
</div>
<div className="p-4 space-y-3">
<div className="flex justify-between items-center text-xs">
<span className="text-slate-400 flex items-center gap-2 font-manrope"><svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> Popups</span>
<span className="text-slate-200 font-manrope" style={{}}>Auto-Rejected</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-slate-400 flex items-center gap-2 font-manrope"><svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 3-3v0h.2"></path><path d="M14 10v.2a3 3 0 0 1 1 5.8v0h3.9v0h0a3 3 0 0 1 1-5.8V10a3 3 0 0 1-3-3v0h-.2"></path></svg> Data Saved</span>
<span className="text-slate-200 font-manrope" style={{}}>~ 25 MB</span>
</div>
</div>
</div>

<div className="flashlight-card bg-[#11131A] border border-white/5 rounded-xl p-0 shadow-lg hover:border-white/10 transition-colors opacity-80 hover:opacity-100" style={{-MouseX: '28.34375px', -MouseY: '26px'}}>
<div className="p-3 border-b border-white/5 bg-white/[0.01] flex justify-between items-center">
<div className="flex items-center gap-3">
<span className="text-white text-sm font-manrope" style={{}}>WhoTracks.me</span>
<span className="flex items-center gap-1 text-[10px] text-purple-400 bg-purple-500/10 px-1.5 py-0.5 rounded border border-purple-500/20 font-manrope">
               Database
            </span>
</div>
</div>
<div className="p-3 space-y-2">
<div className="flex justify-between items-center text-xs">
<span className="text-slate-400 font-manrope" style={{}}>Known Trackers</span>
<span className="text-slate-200 font-manrope" style={{}}>5,000+</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-slate-400 font-manrope" style={{}}>Companies</span>
<span className="text-slate-200 font-manrope" style={{}}>3,200+</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
<button className="flex items-center gap-2 bg-white text-black text-xs px-5 py-2 rounded-full hover:bg-slate-200 transition-colors shadow-2xl shadow-indigo-500/20 ring-4 ring-black/20 font-manrope" style={{}}>
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
      Download Extension
    </button>
</div>
</div>

<div className="h-8 bg-[#0D1117] border-t border-white/5 flex items-center justify-between px-4 text-[10px] text-slate-600">
<span className="font-manrope" style={{}}>Protected</span>
<div className="flex gap-4">
<span className="font-manrope" style={{}}>v8.12.0</span>
<span className="font-manrope" style={{}}>Ghostery</span>
</div>
</div>
</div>
</div>
<div className="-translate-x-1/2 text-slate-900 bg-white w-screen border-0 border-t mt-0 pt-24 pb-8 relative left-1/2">

<div className="[background-size:24px_24px] pointer-events-none opacity-40 absolute top-0 right-0 bottom-0 left-0">
</div>

<div className="z-10 text-center max-w-7xl mr-auto mb-32 ml-auto pr-6 pl-6 relative">
<p className="text-xs text-slate-500 mb-10 uppercase tracking-widest font-manrope" style={{}}>Compatible with your favorite browsers</p>
<div className="flex flex-wrap hover:grayscale-0 transition-all duration-700 opacity-50 grayscale gap-x-12 gap-y-10 items-center justify-center">

<svg className="w-8 h-8 text-slate-900" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 1 0-9-9c0 1.48.35 2.87.97 4.1"></path><path d="M12 21c-2.8 0-5.34-1.29-7-3.32"></path><path d="M12 21a11.1 11.1 0 0 1-2.07-.19"></path><path d="M12 7a5 5 0 1 0 4.54 7.68"></path><path d="M16.2 4.49a9 9 0 0 0-4.2-2.49c-.27 0-.54 0-.8.03"></path><path d="M5.52 5.52A9 9 0 0 0 3.32 7.68"></path></svg>

<svg className="w-8 h-8 text-slate-900" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" x2="12" y1="8" y2="8"></line><line x1="3.95" x2="8.54" y1="6.06" y2="14.01"></line><line x1="10.88" x2="15.46" y1="21.94" y2="14.01"></line></svg>

<svg className="w-8 h-8 text-slate-900" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path></svg>

<svg className="w-8 h-8 text-slate-900" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M8 16l-2-6 6-2 2 6-6 2"></path><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>

<svg className="w-8 h-8 text-slate-900" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><ellipse cx="12" cy="12" rx="4" ry="9"></ellipse></svg>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 relative gap-x-20 gap-y-20">

<div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 hidden lg:block -translate-x-1/2"></div>

<div className="absolute left-1/2 top-12 w-2 h-2 rounded-full bg-slate-300 hidden lg:block -translate-x-1/2 shadow-sm ring-4 ring-white">
</div>
<div className="absolute left-1/2 bottom-12 w-2 h-2 rounded-full bg-slate-300 hidden lg:block -translate-x-1/2 shadow-sm ring-4 ring-white">
</div>

<div className="flex flex-col gap-8 group">

<div className="flex flex-col gap-4 max-w-lg">
<div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 mb-2">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path><path d="m21 21-4.3-4.3"></path>
</svg>
</div>
<h3 className="text-2xl text-slate-900 tracking-tight font-manrope font-medium" style={{}}>Block Ads &amp; Popups</h3>
<p className="text-lg text-slate-500 leading-relaxed font-manrope" style={{}}>
                Ghostery removes intrusive ads from webpages, allowing you to focus on the content that matters.
                Experience a cleaner, faster internet instantly.
              </p>
</div>

<div className="relative mt-4">

<svg className="absolute -top-12 left-8 h-12 w-px overflow-visible text-slate-300 hidden md:block" stroke="currentColor" strokeWidth="1.5">
<path d="M0.5 0v48" stroke-dasharray="4 4"></path>
<circle cx="0.5" cy="48" fill="white" r="3" stroke="currentColor" strokeWidth="1.5"></circle>
</svg>
<div className="bg-white rounded-xl border border-slate-200 shadow-xl shadow-slate-200/50 p-6 relative overflow-hidden transition-transform duration-500 hover:-translate-y-1">

<div className="flex justify-between items-center mb-8">
<h4 className="text-slate-900 font-manrope" style={{}}>Ad Settings</h4>
<div className="flex gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-slate-200"></span>
<span className="w-2.5 h-2.5 rounded-full bg-slate-200"></span>
</div>
</div>

<div className="space-y-6 relative z-10">
<div className="space-y-2">
<label className="text-xs text-slate-400 uppercase tracking-wider font-manrope" style={{}}>Protection Level</label>
<div className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-700">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-sm font-manrope">Aggressive Blocking</span>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-400 uppercase tracking-wider font-manrope" style={{}}>Category Filter</label>
<div className="bg-white rounded-lg border border-indigo-500 shadow-[0_0_0_3px_rgba(99,102,241,0.1)] overflow-hidden">
<div className="p-3 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
<div className="flex items-center gap-2 text-sm text-slate-700 font-manrope" style={{}}>
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
</svg>
                          All Categories
                        </div>
<svg className="text-slate-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</div>
<div className="p-1">
<div className="flex items-center gap-2 p-2 rounded bg-indigo-50 text-indigo-700 text-sm cursor-pointer font-manrope">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path><path d="m21 21-4.3-4.3"></path>
</svg>
                          Commercial Ads
                          <svg className="ml-auto opacity-100" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<div className="flex items-center gap-2 p-2 rounded hover:bg-slate-50 text-slate-600 text-sm cursor-pointer transition-colors font-manrope">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><path d="m9 12 2 2 4-4"></path>
</svg>
                          Cookie Popups
                        </div>
</div>
</div>
</div>
</div>

<div className="absolute -right-20 -bottom-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none">
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-8 group lg:mt-12">

<div className="flex flex-col gap-4 max-w-lg">
<div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 mb-2">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
<h3 className="text-2xl text-slate-900 tracking-tight font-manrope font-medium" style={{}}>Advanced Anti-Tracking
              </h3>
<p className="text-lg text-slate-500 leading-relaxed font-manrope" style={{}}>
                We neutralize invisible trackers that collect your personal data. Ghostery sees what you don't, stopping data brokers in their tracks.
              </p>
</div>

<div className="relative mt-4">

<svg className="absolute -top-12 left-8 h-12 w-px overflow-visible text-slate-300 hidden md:block" stroke="currentColor" strokeWidth="1.5">
<path d="M0.5 0v48" stroke-dasharray="4 4"></path>
<circle cx="0.5" cy="48" fill="white" r="3" stroke="currentColor" strokeWidth="1.5"></circle>
</svg>
<div className="flex flex-col gap-4 relative">

<div className="bg-white rounded-xl border border-blue-200 p-5 shadow-lg shadow-blue-500/5 relative z-20 group-hover:translate-x-1 transition-transform duration-500">
<div className="flex items-start justify-between">
<div className="flex gap-3">
<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 border border-blue-100">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path>
</svg>
</div>
<div className="">
<div className="flex items-center gap-2 mb-1">
<h4 className="text-slate-900 text-sm font-manrope" style={{}}>Google Analytics</h4>
<span className="w-1 h-1 rounded-full bg-red-400"></span>
<span className="text-slate-600 text-sm font-manrope" style={{}}>Blocked</span>
</div>
<div className="flex items-center gap-3 text-xs text-slate-500">
<span className="flex items-center gap-1.5 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100 font-manrope">
                                                Analytics
                                            </span>
<span className="flex items-center gap-1.5 font-manrope">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                                Just now
                                            </span>
</div>
</div>
</div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]">
</div>
</div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none rounded-xl">
</div>
</div>

<div className="bg-white rounded-xl border border-slate-100 p-5 opacity-60 scale-95 origin-top relative z-10 hover:opacity-100 hover:scale-100 transition-all duration-300 cursor-pointer">
<div className="flex items-start justify-between">
<div className="flex gap-3">
<div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600 border border-green-100">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</div>
<div className="">
<div className="flex items-center gap-2 mb-1">
<h4 className="text-slate-900 text-sm font-manrope" style={{}}>Facebook Pixel</h4>
<span className="w-1 h-1 rounded-full bg-red-400"></span>
<span className="text-slate-600 text-sm font-manrope" style={{}}>Blocked</span>
</div>
<div className="flex items-center gap-3 text-xs text-slate-500">
<span className="font-manrope" style={{}}>Social Tracker</span>
</div>
</div>
</div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/50 border border-green-500"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mt-32 mb-32">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">

<div className="order-2 lg:order-1">
<div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600 mb-6">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
</svg>
</div>
<h2 className="text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4 font-manrope font-medium" style={{}}>
              Speed up your browsing experience
            </h2>
<p className="text-lg text-slate-500 leading-relaxed mb-8 font-manrope" style={{}}>
              Ads and trackers add weight to webpages, slowing them down. Ghostery strips out the clutter so pages load faster and use less data.
            </p>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 shadow-sm">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20h9"></path>
<path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
</svg>
</div>
<div className="">
<h4 className="text-sm text-slate-900 font-manrope" style={{}}>Reduce Data Usage</h4>
<p className="text-sm text-slate-500 font-manrope" style={{}}>Save mobile data by blocking heavy ad scripts.
                  </p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 shadow-sm">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
<div className="">
<h4 className="text-sm text-slate-900 font-manrope" style={{}}>Faster Load Times</h4>
<p className="text-sm text-slate-500 font-manrope" style={{}}>Pages load up to 2x faster without tracking code.</p>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative h-[500px] perspective-1000 group">

<div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-indigo-500/10 rounded-full blur-3xl -z-10">
</div>

<div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-[60%] w-[340px] bg-white rounded-2xl border border-slate-200 shadow-2xl transition-all duration-700 group-hover:-translate-y-[65%] group-hover:rotate-x-6">

<div className="h-10 border-b border-slate-100 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
<div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
<div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
</div>
<div className="mx-auto text-xs text-slate-400 font-manrope" style={{}}>Page Performance</div>
</div>

<div className="p-2 space-y-1">

<div className="flex items-center justify-between p-3 rounded-lg bg-emerald-50/50 border border-emerald-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
</svg>
</div>
<div className="">
<div className="text-xs text-slate-900 font-manrope" style={{}}>0.8s Load Time
                        <span className="text-slate-500 mx-1 font-manrope" style={{}}>Ghostery On</span>
</div>
<div className="text-[10px] text-slate-500 font-manrope" style={{}}>Optimized</div>
</div>
</div>
<span className="text-[10px] text-emerald-600 bg-white px-2 py-1 rounded-full shadow-sm font-manrope" style={{}}>Excellent</span>
</div>

<div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group/item cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover/item:bg-white group-hover/item:shadow-sm transition-all">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
<div className="">
<div className="text-xs text-slate-700 font-manrope" style={{}}>3.4s Load Time
                        <span className="text-slate-400 mx-1 font-manrope" style={{}}>No Protection</span>
</div>
<div className="text-[10px] text-slate-400 font-manrope" style={{}}>Slow</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-[60%] left-[60%] -translate-x-1/2 -translate-y-1/2 w-[320px] bg-slate-900 rounded-xl shadow-2xl transition-all duration-700 group-hover:translate-x-4 group-hover:translate-y-4 -z-10 rotate-3">
<div className="h-8 border-b border-white/10 flex items-center px-3 gap-1.5">
<div className="w-2 h-2 rounded-full bg-slate-700"></div>
<div className="w-2 h-2 rounded-full bg-slate-700"></div>
</div>
<div className="p-4 font-mono text-[10px] leading-relaxed">
<div className="text-emerald-400 font-manrope" style={{}}>$ ghostery analyze https://news.site</div>
<div className="text-slate-400 mt-1 font-manrope" style={{}}>Detecting trackers...</div>
<div className="text-slate-400 font-manrope" style={{}}>Found 24 ad scripts...</div>
<div className="text-slate-300 mt-1 font-manrope" style={{}}>✓ Blocked doubleclick.net</div>
<div className="text-slate-300 font-manrope" style={{}}>✓ Blocked analytics.js</div>
<div className="text-emerald-400 mt-2 font-manrope" style={{}}>Page clean. Load time: 0.82s</div>
<div className="animate-pulse text-emerald-400 inline-block font-manrope" style={{}}>_</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="-translate-x-1/2 text-slate-900 bg-white w-screen border-0 border-t pt-24 pb-24 relative left-1/2">
<style className="">
        @keyframes float-slow { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes float-delayed { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes float-reverse { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(6px); } }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite 1s; }
        .animate-float-reverse { animation: float-reverse 8s ease-in-out infinite; }
        .noodle-glow { stroke-dasharray: 10; animation: dash 30s linear infinite; }
      </style>
<div className="sm:px-6 z-10 max-w-7xl mt-0 mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="sm:text-5xl text-4xl font-medium text-slate-900 tracking-tight font-manrope mb-6">
            Comprehensive privacy
            <span className="font-medium text-indigo-600 font-manrope">built for everyone</span>
</h2>
<p className="text-xl text-slate-500 leading-relaxed font-manrope" style={{}}>
            Ghostery is more than just an ad blocker. It's a complete privacy suite powered by the world's largest tracker database.
          </p>
</div>

<div className="relative w-full h-[600px] sm:h-[700px] bg-slate-50/50 rounded-3xl border border-slate-100 overflow-hidden select-none">

<div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:32px_32px]">
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{overflow: 'visible'}}>
<defs>
<lineargradient id="line-gradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#94a3b8" stop-opacity="0.2"></stop>
<stop offset="50%" stop-color="#6366f1" stop-opacity="0.6"></stop>
<stop offset="100%" stop-color="#94a3b8" stop-opacity="0.2"></stop>
</lineargradient>
</defs>
<path className="noodle-glow hidden lg:block" d="M 300 200 C 350 200, 350 250, 420 250" fill="none" stroke="url(#line-gradient)" strokeWidth="1.5"></path>
<path className="noodle-glow hidden lg:block" d="M 680 250 C 750 250, 750 180, 820 180" fill="none" stroke="url(#line-gradient)" strokeWidth="1.5"></path>
<path className="noodle-glow hidden lg:block" d="M 680 250 C 750 250, 750 350, 820 350" fill="none" stroke="url(#line-gradient)" strokeWidth="1.5"></path>
<path className="noodle-glow hidden lg:block" d="M 550 380 C 550 420, 550 450, 550 500" fill="none" stroke="url(#line-gradient)" strokeWidth="1.5"></path>
</svg>

<div className="overflow-x-auto overflow-y-hidden w-full h-full pt-10 pr-10 pb-10 pl-10 relative">
<div className="min-w-[1000px] h-full mr-auto ml-auto relative">

<div className="absolute top-[120px] left-[20px] w-64 bg-white rounded-xl border border-blue-100 shadow-xl shadow-blue-900/5 animate-float-slow z-10">
<div className="p-3 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
<div className="flex items-center gap-2 text-slate-500 text-xs font-manrope">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"></path>
</svg>
                    WhoTracks.me
                  </div>
<svg className="text-slate-300" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
<div className="p-4 space-y-3">
<div className="flex items-center justify-between text-sm">
<span className="text-slate-800 font-manrope">Tracker DB</span>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs items-center">
<span className="text-slate-500 font-manrope">Known Trackers</span>
<span className="text-emerald-500 font-manrope">5,000+</span>
</div>
</div>
</div>
</div>

<div className="absolute top-[340px] left-[50px] w-64 bg-white rounded-xl border border-blue-500 shadow-[0_0_0_2px_rgba(59,130,246,0.1),0_10px_20px_-5px_rgba(59,130,246,0.1)] animate-float-delayed z-20">
<div className="p-3 border-b border-slate-50 text-xs text-slate-800 font-manrope">Browser Extension</div>
<div className="p-4 space-y-4">
<div className="flex items-start justify-between">
<div className="flex flex-col gap-1">
<span className="text-xs text-slate-500 font-manrope">Status</span>
<span className="text-[10px] text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded font-manrope">Active</span>
</div>
<span className="text-[10px] text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 font-manrope">Protecting</span>
</div>
</div>
</div>

<div className="absolute top-[180px] left-[420px] w-72 bg-white rounded-xl border border-indigo-200 shadow-2xl shadow-indigo-500/10 z-30 animate-float-reverse">
<div className="absolute -top-6 left-0 text-xs text-slate-400 flex items-center gap-1 font-manrope">
                  AI Anti-Tracking
                </div>
<div className="p-4 border-b border-indigo-50 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-slate-900 font-manrope">Ghostery Core</span>
</div>
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
</div>
<div className="p-5 space-y-4">
<div className="flex justify-between items-center text-sm">
<span className="text-slate-500 flex items-center gap-2 font-manrope"><svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> Heuristics</span>
<span className="text-emerald-600 text-xs bg-emerald-50 px-2 py-0.5 rounded-full font-manrope">• Active</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-slate-500 flex items-center gap-2 font-manrope"> Block Rate</span>
<span className="text-slate-700 font-manrope">99.8%</span>
</div>
</div>
</div>

<div className="absolute top-[420px] left-[450px] w-64 bg-white rounded-xl border border-slate-200 shadow-lg animate-float-delayed">
<div className="p-3 border-b border-slate-50 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-slate-900 text-sm font-manrope">Never-Consent</span>
</div>
</div>
<div className="p-3 space-y-2">
<div className="flex justify-between text-xs">
<span className="text-slate-500 font-manrope">Action</span>
<span className="text-slate-700 font-manrope">Reject All</span>
</div>
</div>
</div>

<div className="absolute top-[100px] left-[820px] w-64 bg-white rounded-xl border border-orange-200 shadow-xl shadow-orange-500/5 animate-float-slow z-20">
<div className="p-3 bg-gradient-to-r from-white to-orange-50/50 border-b border-orange-100 flex items-center justify-between rounded-t-xl">
<div className="flex items-center gap-2">
<span className="text-slate-900 text-sm font-manrope">Private Search</span>
<span className="text-[10px] text-orange-600 bg-orange-100 px-1.5 py-0.5 rounded border border-orange-200 font-manrope">
                                Beta
                            </span>
</div>
</div>
<div className="p-4 bg-white/50 space-y-1">
<div className="text-xs text-slate-500 font-manrope">No history logging. No ad profiling.</div>
</div>
</div>

<div className="shadow-purple-500/5 animate-float-reverse bg-white w-64 border-purple-200 border rounded-xl absolute top-[320px] left-[820px] shadow-xl">
<div className="p-3 border-b border-purple-50 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-slate-900 text-sm font-manrope">Privacy Score</span>
</div>
</div>
<div className="p-3 space-y-2 text-xs">
<div className="flex justify-between">
<span className="text-slate-500 font-manrope">Protection</span>
<span className="text-slate-700 font-manrope">Maximum</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="-translate-x-1/2 text-slate-900 bg-white w-screen border-0 border-t pt-24 pb-24 relative left-1/2">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="lg:text-center lg:mb-28 max-w-2xl mr-auto mb-28 ml-auto">
<h2 className="sm:text-5xl text-4xl font-medium text-slate-900 tracking-tight font-manrope mb-6">Open Source <span className="font-medium text-indigo-600 font-manrope">Transparency</span></h2>
<p className="mt-6 text-lg leading-8 text-slate-500 font-manrope">
            We believe you should know exactly what code runs in your browser. Ghostery is open source, owned by a non-profit, and dedicated to your privacy.
          </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-32">

<div className="flex flex-col gap-8">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3 text-slate-900 font-manrope font-semibold text-lg">
<svg className="text-slate-900" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
</svg>
                Global Tracker Intelligence
              </div>
<p className="text-slate-500 font-manrope leading-relaxed">
                Ghostery relies on WhoTracks.me, the world's largest database of trackers, to identify and block new threats in real-time across the globe.
              </p>
</div>

<div className="relative w-full aspect-[4/3] lg:aspect-square xl:aspect-[4/3] bg-white rounded-2xl overflow-hidden mt-4 select-none">

<svg className="w-full h-full text-indigo-500/20 fill-current" viewbox="0 0 400 240">

<g className="text-indigo-500 fill-current">
<circle className="animate-blink-1" cx="50" cy="50" r="1.5"></circle>
<circle className="animate-blink-2" cx="80" cy="55" r="1.5"></circle>
<circle className="animate-blink-3" cx="65" cy="65" r="1.5"></circle>
<circle className="animate-blink-2" cx="100" cy="60" r="1.5"></circle>
<circle className="animate-blink-1" cx="200" cy="45" r="1.5"></circle>
<circle className="animate-blink-3" cx="210" cy="50" r="1.5"></circle>
<circle className="animate-blink-1" cx="250" cy="60" r="1.5"></circle>
<circle className="animate-blink-1" cx="300" cy="55" r="1.5"></circle>
</g>

<path className="animate-pulse" d="M105 75 Q 160 30 200 45" fill="none" stroke="currentColor" stroke-opacity="0.2" strokeWidth="0.5"></path>
<path className="animate-pulse" d="M200 45 Q 250 20 280 50" fill="none" stroke="currentColor" stroke-opacity="0.2" strokeWidth="0.5" style={{animationDelay: '1s'}}></path>
</svg>

<div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-20 pointer-events-none">
</div>
</div>
</div>

<div className="flex flex-col gap-8">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3 text-slate-900 font-manrope font-semibold text-lg">
<svg className="text-slate-900" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
                Privacy by Design
              </div>
<p className="text-slate-500 font-manrope leading-relaxed">
                We don't collect your data. We don't sell your data. We exist to protect it.
              </p>
</div>

<div className="flex flex-col gap-3 mt-4">
<div className="flex items-center gap-2 text-slate-900 font-manrope font-semibold">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
</svg>
                Open Source
              </div>
<p className="text-sm text-slate-500 font-manrope leading-relaxed">
                Our code is public. Anyone can audit it to verify that we do exactly what we say we do.
              </p>
</div>

<div className="flex flex-col gap-3">
<div className="flex items-center gap-2 text-slate-900 font-manrope font-semibold">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
</svg>
                Non-Profit Ownership
              </div>
<p className="text-sm text-slate-500 font-manrope leading-relaxed">
                Ghostery is owned by a non-profit organization dedicated to fighting for user privacy rights.
              </p>
</div>

<div className="flex flex-col gap-3">
<div className="flex items-center gap-2 text-slate-900 font-manrope font-semibold">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 19c0-1.7-1.3-3-3-3h-5c-1.7 0-3-1.3-3-3"></path><path d="M6 19c0-1.7 1.3-3 3-3h5c1.7 0 3-1.3 3-3"></path>
</svg>
                Smart Blocking
              </div>
<p className="text-sm text-slate-500 font-manrope leading-relaxed">
                Our smart technology breaks trackers without breaking the websites you love to visit.
              </p>
</div>
</div>
</div>
</div>
</div>

<div className="-translate-x-1/2 text-slate-900 bg-white w-screen border-0 border-t pt-24 pb-24 relative left-1/2">
<div className="sm:px-6 sm:pt-0 max-w-3xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4">
<div className="text-center mb-16">
<h2 className="text-3xl text-slate-900 tracking-tight mb-4 font-manrope font-medium" style={{}}>Frequently asked
            questions</h2>
<p className="text-slate-500 text-lg font-manrope" style={{}}>Common questions about Ghostery.</p>
</div>
<div className="space-y-4">
<details className="group p-4 bg-white rounded-xl border border-slate-200 open:ring-2 open:ring-indigo-100 open:border-indigo-200 transition-all">
<summary className="flex items-center justify-between cursor-pointer text-slate-900 marker:content-none list-none font-manrope" style={{}}>
              Is Ghostery free to use?
              <svg className="text-slate-400 group-open:rotate-180 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="mt-4 text-slate-500 text-sm leading-relaxed font-manrope" style={{}}>
              Yes! Ghostery is free to download and use. We offer premium features for advanced users who want even more protection, but our core blocking technology is free for everyone.
            </div>
</details>
<details className="group p-4 bg-white rounded-xl border border-slate-200 open:ring-2 open:ring-indigo-100 open:border-indigo-200 transition-all">
<summary className="flex items-center justify-between cursor-pointer text-slate-900 marker:content-none list-none font-manrope" style={{}}>
              Does Ghostery collect my browsing history?
              <svg className="text-slate-400 group-open:rotate-180 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="mt-4 text-slate-500 text-sm leading-relaxed font-manrope" style={{}}>
              No. Ghostery is built on a "Privacy by Design" philosophy. We do not collect, store, or sell your browsing history. We operate as a non-profit organization.
            </div>
</details>
<details className="group p-4 bg-white rounded-xl border border-slate-200 open:ring-2 open:ring-indigo-100 open:border-indigo-200 transition-all">
<summary className="flex items-center justify-between cursor-pointer text-slate-900 marker:content-none list-none font-manrope" style={{}}>
              How does Ghostery make the web faster?
              <svg className="text-slate-400 group-open:rotate-180 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="mt-4 text-slate-500 text-sm leading-relaxed font-manrope" style={{}}>
              Trackers and ads are heavy scripts that slow down page loads. By blocking them beforethey load, Ghostery reduces the data your browser needs to process, resulting in significantly faster page speeds and less data usage.
            </div>
</details>
<details className="group p-4 bg-white rounded-xl border border-slate-200 open:ring-2 open:ring-indigo-100 open:border-indigo-200 transition-all">
<summary className="flex items-center justify-between cursor-pointer text-slate-900 marker:content-none list-none font-manrope" style={{}}>
              Can I whitelist specific websites?
              <svg className="text-slate-400 group-open:rotate-180 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="mt-4 text-slate-500 text-sm leading-relaxed font-manrope" style={{}}>
              Absolutely. Ghostery gives you granular control. You can "Trust" specific sites to allow ads and trackers, or pause blocking temporarily with a single click if a site isn't loading correctly.
            </div>
</details>
</div>
</div>
</div>

<div className="w-full relative z-10 py-32 px-6 text-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 font-manrope">
            Take back your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300">digital freedom</span>
</h2>
<p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 font-manrope">
            Join millions of users who trust Ghostery to browse faster, safer, and cleaner. Open source and free forever.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group overflow-hidden transition-transform active:scale-95 text-sm font-medium text-slate-950 bg-white rounded-full pt-3 pr-6 pb-3 pl-6 relative shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-shadow">
<span className="flex items-center gap-2 font-manrope z-10 relative">Add to Browser <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
<div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</button>
<button className="hover:bg-white/10 transition-colors flex group text-sm text-white font-manrope bg-white/5 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 items-center">
                View Source Code
            </button>
</div>
</div>
</main>

<footer className="border-t border-white/5 bg-[#020412] pt-16 pb-8 px-6 relative z-10">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex font-medium text-white gap-2 items-center mb-6">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="M8 11h.01"></path>
<path d="M16 11h.01"></path>
<path d="M12 16a4 4 0 0 0 4-2"></path>
</svg>
<span className="tracking-tight text-xl font-manrope">Ghostery</span>
</div>
<p className="text-slate-500 text-sm leading-relaxed max-w-xs font-manrope">
              Fighting for a web where privacy is the default, not an option. Ghostery is a registered trademark of Ghostery GmbH.
          </p>
</div>
<div>
<h3 className="text-white font-medium mb-4 font-manrope">Products</h3>
<ul className="space-y-3 text-sm text-slate-500 font-manrope">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Browser Extension</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Private Browser</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Private Search</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">WhoTracks.me</a></li>
</ul>
</div>
<div>
<h3 className="text-white font-medium mb-4 font-manrope">Company</h3>
<ul className="space-y-3 text-sm text-slate-500 font-manrope">
<li><a className="hover:text-indigo-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Manifesto</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h3 className="text-white font-medium mb-4 font-manrope">Legal</h3>
<ul className="space-y-3 text-sm text-slate-500 font-manrope">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Imprint</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600 font-manrope">
<div>© 2024 Ghostery GmbH. All rights reserved.</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Facebook</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
