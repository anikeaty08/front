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



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
<div className="bg-stone-900/90 backdrop-blur-md text-stone-200 px-6 py-3 rounded-full shadow-2xl border border-stone-700/50 flex items-center gap-6 text-xs font-medium tracking-wide transition-all hover:scale-105">
<a className="hover:text-white transition-colors" href="#overview">Overview</a>
<span className="w-1 h-1 bg-stone-600 rounded-full"></span>
<a className="hover:text-white transition-colors" href="#research">Research</a>
<span className="w-1 h-1 bg-stone-600 rounded-full"></span>
<a className="hover:text-white transition-colors" href="#design">Design</a>
<span className="w-1 h-1 bg-stone-600 rounded-full"></span>
<a className="hover:text-white transition-colors" href="#outcome">Outcome</a>
</div>
</nav>

<header className="relative min-h-screen flex flex-col justify-between pt-12 pb-12 px-6 md:px-12 overflow-hidden bg-white">

<div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gradient-to-b from-orange-100/40 to-stone-100/0 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>

<div className="flex justify-between items-start relative z-10 opacity-60">
<div className="text-xs font-bold tracking-[0.2em] uppercase">UX Case Study '24</div>
<div className="text-xs font-bold tracking-[0.2em] uppercase text-right">Voice InterfaceSocial Impact</div>
</div>

<div className="relative z-10 max-w-[1600px] mx-auto w-full mt-20">
<h1 className="text-[14vw] leading-[0.8] font-bold tracking-tighter text-stone-900 select-none">
                SAHA<span className="text-orange-600">YAK</span>
</h1>
<div className="grid md:grid-cols-12 gap-8 mt-12 items-end">
<div className="md:col-span-7">
<p className="text-3xl md:text-5xl font-serif italic text-stone-500 leading-tight">
                        "Giving a voice to the invisible labor force of India."
                    </p>
</div>
<div className="md:col-span-5 md:text-right">
<p className="text-sm md:text-base text-stone-600 font-medium max-w-sm ml-auto leading-relaxed">
                        A voice-first grievance reporting platform designed to bridge the gap between complex labor laws and semi-literate construction workers.
                    </p>
</div>
</div>
</div>

<div className="relative z-10 mt-auto pt-20">
<div className="w-full h-[1px] bg-stone-200">
<div className="w-32 h-[1px] bg-orange-600"></div>
</div>
<div className="flex justify-between items-end mt-4">
<span className="text-xs font-mono text-stone-400">01 / 08</span>
<svg className="lucide lucide-arrow-down w-5 h-5 text-stone-400 animate-bounce" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
</div>
</header>
<main className="max-w-[1600px] mx-auto">

<section className="md:px-12 bg-stone-50 pt-32 pr-6 pb-32 pl-6" id="overview">
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 bg-stone-900 rounded-[2rem] p-10 text-white flex flex-col justify-between relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-stone-800 rounded-full blur-[80px] group-hover:bg-orange-900/40 transition-colors duration-700"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center mb-6">
<svg className="lucide lucide-target w-5 h-5 text-orange-400" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<h3 className="text-3xl font-light mb-4">The Challenge</h3>
<p className="leading-relaxed font-light text-stone-400">
                            51 Million construction workers. 90% in the unorganized sector. When wage theft happens, literacy barriers and fear prevent them from accessing legal aid. Current systems are text-heavy and bureaucratic.
                        </p>
</div>
<div className="relative z-10 mt-8">
<div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-orange-400">
<span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                            Priority High
                        </div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 shadow-sm border border-stone-100 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
<div className="">
<span className="text-xs font-bold tracking-widest uppercase text-stone-400">Role</span>
<div className="mt-4 flex flex-wrap gap-2">
<span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium">Research</span>
<span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium">UX Design</span>
<span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium">Prototyping</span>
</div>
</div>
<svg className="lucide lucide-user w-6 h-6 text-stone-300 self-end" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>

<div className="bg-white rounded-[2rem] p-8 shadow-sm border border-stone-100 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
<div>
<span className="text-xs font-bold tracking-widest uppercase text-stone-400">Tools</span>
<div className="mt-4 text-2xl font-semibold text-stone-800">Figma</div>
<div className="text-2xl font-semibold text-stone-300">ProtoPie</div>
<div className="text-2xl font-semibold text-stone-300">Maze</div>
</div>
<svg className="lucide lucide-pen-tool w-6 h-6 text-stone-300 self-end" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>

<div className="md:col-span-2 bg-orange-500 rounded-[2rem] p-10 text-white flex items-center justify-between relative overflow-hidden">
<div className="relative z-10">
<h3 className="text-5xl font-bold tracking-tighter">72%</h3>
<p className="mt-2 text-orange-100 font-medium">Of workers own smartphones but cannot use text-based apps.</p>
</div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 opacity-20">
<svg className="lucide lucide-smartphone w-48 h-48" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 py-32 bg-white rounded-t-[3rem] shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.05)]" id="research">
<div className="max-w-4xl mx-auto">
<span className="text-xs font-bold tracking-[0.3em] text-orange-600 uppercase mb-4 block">01 — Discovery</span>
<h2 className="text-5xl md:text-6xl font-bold text-stone-900 mb-16 tracking-tight">Understanding the <span className="font-serif italic text-stone-500">invisible</span> user.</h2>
<div className="space-y-24">

<div className="flex flex-col md:flex-row gap-12 items-start border-t border-stone-100 pt-12 group">
<div className="md:w-1/3">
<span className="text-5xl font-light text-stone-200 group-hover:text-orange-500 transition-colors">01</span>
</div>
<div className="md:w-2/3">
<h3 className="text-2xl font-semibold mb-4">The Literacy Gap</h3>
<p className="text-stone-500 leading-relaxed mb-6">
                                During field interviews at labor Chowks (marketplaces), we found that while many workers could navigate YouTube or WhatsApp using muscle memory, they froze when presented with a standard form.
                            </p>
<div className="bg-stone-50 p-6 rounded-xl border-l-4 border-orange-500 italic text-stone-700">
                                "I can't read the letters, but I know the green button means 'Go' and the red button means 'Stop'."
                            </div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-12 items-start border-t border-stone-100 pt-12 group">
<div className="md:w-1/3">
<span className="text-5xl font-light text-stone-200 group-hover:text-orange-500 transition-colors">02</span>
</div>
<div className="md:w-2/3">
<h3 className="text-2xl font-semibold mb-4">Trust through Authority</h3>
<p className="text-stone-500 leading-relaxed mb-6">
                                Workers didn't trust unofficial-looking apps. They associated "Government" and "Justice" with specific visual cues: emblem colors, ID cards, and official seals.
                            </p>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600"><svg className="lucide lucide-badge-check w-6 h-6" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg></div>
<div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600"><svg className="lucide lucide-file-check w-6 h-6" data-lucide="file-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m9 15 2 2 4-4"></path></svg></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-stone-900 text-stone-200 overflow-hidden relative" id="design">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[120px]"></div>
<div className="px-6 md:px-12 mb-20 relative z-10 text-center">
<span className="text-xs font-bold tracking-[0.3em] text-orange-400 uppercase mb-4 block">02 — The Solution</span>
<h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">Voice-First. <span className="text-stone-500">Text-Optional.</span></h2>
</div>

<div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 relative z-10 px-6">

<div className="relative group perspective-1000">
<div className="w-[300px] h-[620px] bg-stone-800 rounded-[3rem] border-8 border-stone-700 shadow-2xl relative overflow-hidden transition-transform duration-500 hover:-translate-y-4">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-stone-900 rounded-b-2xl z-20"></div>

<div className="w-full h-full bg-stone-50 text-stone-900 flex flex-col relative">

<div className="pt-12 px-6 pb-4 flex justify-between items-center">
<div className="w-8 h-8 rounded-full bg-stone-200"></div>
<div className="font-bold text-lg">Sahayak</div>
<svg className="lucide lucide-bell w-5 h-5 text-stone-400" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</div>

<div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
<h3 className="text-2xl font-bold text-stone-800 mb-2">शिकायत दर्ज करें</h3>
<p className="text-stone-400 text-sm mb-12">Register Complaint</p>

<div className="relative w-40 h-40 flex items-center justify-center cursor-pointer group-hover:scale-105 transition-transform">
<div className="absolute w-full h-full bg-orange-500/20 rounded-full animate-ping"></div>
<div className="absolute w-32 h-32 bg-orange-500/40 rounded-full animate-pulse"></div>
<div className="relative w-24 h-24 bg-gradient-to-tr from-orange-500 to-orange-400 rounded-full shadow-lg shadow-orange-500/30 flex items-center justify-center text-white">
<svg className="lucide lucide-mic w-10 h-10" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</div>
</div>
<p className="mt-12 text-stone-400 text-sm font-medium">Tap to speak</p>
</div>

<div className="h-20 bg-white border-t border-stone-100 flex justify-around items-center px-4 pb-2">
<div className="flex flex-col items-center gap-1 text-orange-600">
<svg className="lucide lucide-home w-6 h-6" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-[10px] font-bold">Home</span>
</div>
<div className="flex flex-col items-center gap-1 text-stone-300">
<svg className="lucide lucide-clock w-6 h-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-[10px] font-medium">Status</span>
</div>
<div className="flex flex-col items-center gap-1 text-stone-300">
<svg className="lucide lucide-user w-6 h-6" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-[10px] font-medium">Profile</span>
</div>
</div>
</div>
</div>

<div className="text-center mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<p className="text-white font-medium">Single Tap Interaction</p>
<p className="text-stone-500 text-sm">Removes keyboard friction</p>
</div>
</div>

<div className="relative group perspective-1000 mt-12 md:mt-0">
<div className="w-[300px] h-[620px] bg-stone-800 rounded-[3rem] border-8 border-stone-700 shadow-2xl relative overflow-hidden transition-transform duration-500 hover:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-stone-900 rounded-b-2xl z-20"></div>
<div className="w-full h-full bg-stone-50 text-stone-900 flex flex-col">

<div className="bg-stone-900 text-white pt-14 pb-8 px-6 rounded-b-[2rem] shadow-xl relative z-10">
<div className="flex justify-between items-start mb-6">
<div>
<div className="text-stone-400 text-xs uppercase tracking-wider mb-1">Ticket ID</div>
<div className="text-3xl font-mono text-white">#8291</div>
</div>
<div className="bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                        Active
                                    </div>
</div>
<div className="flex gap-3 mt-4">
<div className="h-1 flex-1 bg-green-500 rounded-full"></div>
<div className="h-1 flex-1 bg-green-500 rounded-full"></div>
<div className="h-1 flex-1 bg-stone-700 rounded-full"></div>
</div>
<div className="flex justify-between mt-2 text-xs text-stone-400">
<span>Sent</span>
<span>Review</span>
<span>Resolved</span>
</div>
</div>

<div className="p-6 space-y-8 mt-4 overflow-hidden relative">
<div className="absolute left-9 top-6 bottom-6 w-[2px] bg-stone-200"></div>
<div className="relative flex gap-4 items-start">
<div className="w-6 h-6 rounded-full bg-green-500 border-4 border-white shadow-sm z-10 shrink-0"></div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 flex-1">
<h4 className="font-bold text-sm">Review Started</h4>
<p className="text-xs text-stone-500 mt-1">Officer Rajesh assigned.</p>
</div>
</div>
<div className="relative flex gap-4 items-start">
<div className="w-6 h-6 rounded-full bg-stone-300 border-4 border-white z-10 shrink-0"></div>
<div className="bg-white/50 p-4 rounded-xl border border-stone-100 flex-1 opacity-60">
<h4 className="font-bold text-sm">Resolution Expected</h4>
<p className="text-xs text-stone-500 mt-1">Est. 2 Days</p>
</div>
</div>
</div>

<div className="mt-auto m-4 p-4 bg-orange-50 border border-orange-100 rounded-2xl flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
<svg className="lucide lucide-phone-call w-5 h-5" data-lucide="phone-call" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div>
<div className="text-xs font-bold text-orange-800 uppercase">Emergency</div>
<div className="text-sm text-orange-900 font-medium">Call Support</div>
</div>
</div>
</div>
</div>

<div className="text-center mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<p className="text-white font-medium">Visual Status Tracking</p>
<p className="text-stone-500 text-sm">Traffic light system for clarity</p>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 py-32 bg-stone-50">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<span className="text-xs font-bold tracking-[0.3em] text-orange-600 uppercase mb-4 block">03 — Design System</span>
<h2 className="text-4xl font-bold text-stone-900 mb-8">Accessible Palette.</h2>
<p className="text-stone-600 leading-relaxed mb-8">
                        We moved away from the standard corporate blue. The palette borrows from construction safety gear (High-vis Orange) and official documentation (Paper White, Ink Black, Stamp Green) to create an environment that feels both familiar and authoritative.
                    </p>
<div className="flex gap-4">
<div className="space-y-2">
<div className="w-20 h-20 rounded-2xl bg-stone-900 shadow-xl"></div>
<div className="text-xs font-mono text-stone-500">#Ink</div>
</div>
<div className="space-y-2">
<div className="w-20 h-20 rounded-2xl bg-orange-500 shadow-xl shadow-orange-500/20"></div>
<div className="text-xs font-mono text-stone-500">#Safety</div>
</div>
<div className="space-y-2">
<div className="w-20 h-20 rounded-2xl bg-white border border-stone-200 shadow-xl"></div>
<div className="text-xs font-mono text-stone-500">#Paper</div>
</div>
<div className="space-y-2">
<div className="w-20 h-20 rounded-2xl bg-green-600 shadow-xl shadow-green-600/20"></div>
<div className="text-xs font-mono text-stone-500">#Go</div>
</div>
</div>
</div>

<div className="bg-white p-12 rounded-[2rem] shadow-sm border border-stone-100 relative overflow-hidden">
<div className="absolute -right-10 -top-10 text-[200px] font-bold text-stone-50 opacity-50 select-none">Aa</div>
<div className="relative z-10 space-y-8">
<div>
<p className="text-xs text-stone-400 uppercase tracking-widest mb-2">Display Font</p>
<p className="text-4xl md:text-5xl font-bold text-stone-900">Manrope</p>
<p className="text-stone-500 mt-2">Modern, geometric, legible.</p>
</div>
<div className="h-px w-full bg-stone-100"></div>
<div>
<p className="text-xs text-stone-400 uppercase tracking-widest mb-2">Iconography</p>
<div className="flex gap-6 text-stone-800">
<svg className="lucide lucide-mic w-8 h-8" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
<svg className="lucide lucide-home w-8 h-8" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<svg className="lucide lucide-file-text w-8 h-8" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<svg className="lucide lucide-shield w-8 h-8" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-orange-600 text-white py-24 overflow-hidden rounded-t-[3rem] relative z-20" id="outcome">
<div className="marquee-container mb-12 opacity-30">
<div className="marquee-content text-[10vw] font-bold leading-none select-none">
                    EMPOWER • VOICE • JUSTICE • DIGNITY • RIGHTS • SAHAYAK • EMPOWER • VOICE • JUSTICE • 
                </div>
</div>
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-bold mb-8">"Finally, I don't need to beg someone to write a letter for me."</h2>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
<svg className="lucide lucide-quote w-5 h-5 text-white" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<div className="text-left">
<div className="font-bold text-lg">Ramesh Kumar</div>
<div className="text-orange-200 text-sm">Beta Tester, New Delhi Site</div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-20 px-6 md:px-12">
<div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
<div>
<h2 className="text-2xl text-white font-bold tracking-tight mb-2">Sahayak.</h2>
<p className="text-sm max-w-xs">Designing for the next billion users requires leaving our assumptions at the door.</p>
</div>
<div className="grid grid-cols-2 gap-12 text-sm">
<div className="flex flex-col gap-3">
<span className="text-white font-bold uppercase tracking-widest text-xs mb-2">Connect</span>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Email</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-white font-bold uppercase tracking-widest text-xs mb-2">More</span>
<a className="hover:text-white transition-colors" href="#">Case Studies</a>
<a className="hover:text-white transition-colors" href="#">Resume</a>
</div>
</div>
</div>
<div className="border-t border-stone-800 mt-20 pt-8 flex justify-between items-center text-xs">
<span>© 2024 UX Portfolio</span>
<span>Made with HTML &amp; Tailwind</span>
</div>
</footer>
</main>



    </>
  );
}
