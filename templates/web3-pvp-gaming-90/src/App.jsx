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
      

<div className="fixed inset-0 z-0">

<img alt="Background" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-b from-[#020408]/80 via-[#051025]/60 to-[#020408]"></div>
<div className="absolute top-0 right-0 w-2/3 h-full bg-cyan-900/10 blur-3xl rounded-full mix-blend-screen lightning-bg"></div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-transparent to-transparent"></div>
</div>

<header className="relative z-50 w-full pt-4 px-4 flex justify-center animate-fade-up">
<div className="w-full max-w-7xl relative">

<div className="bg-[#0a111e]/90 backdrop-blur-md border-b-2 border-cyan-500/50 rounded-b-3xl px-8 py-4 flex flex-col md:flex-row items-center justify-between shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)]">

<div className="flex items-center gap-3 mb-4 md:mb-0">
<div className="relative w-8 h-8 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-rocket w-8 h-8 text-yellow-400 fill-yellow-400 absolute transform -rotate-45" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
<div className="absolute inset-0 bg-yellow-400 blur-md opacity-30"></div>
</div>
<span className="text-xl font-bold tracking-widest uppercase">Arka</span>
</div>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300 tracking-wide">
<a className="text-white hover:text-cyan-400 transition-colors" href="#">HOME</a>
<a className="hover:text-cyan-400 transition-colors" href="#">VISION</a>
<a className="hover:text-cyan-400 transition-colors" href="#">OUR GAMES</a>
<a className="hover:text-cyan-400 transition-colors" href="#">FEATURES</a>
<a className="hover:text-cyan-400 transition-colors" href="#">TEAM</a>
<a className="hover:text-cyan-400 transition-colors" href="#">TESTIMONIALS</a>
</nav>

<button className="group relative px-6 py-2 bg-gradient-to-r from-cyan-200 to-cyan-400 rounded-md text-[#020408] text-xs font-bold uppercase tracking-wider flex items-center gap-2 overflow-hidden hover:scale-105 transition-transform duration-200">
<span className="relative z-10 flex items-center gap-2">
                        Join Discord <svg aria-hidden="true" className="lucide lucide-gamepad-2 w-4 h-4" data-lucide="gamepad-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg>
</span>
<div className="absolute inset-0 bg-white/20 group-hover:bg-white/40 transition-colors"></div>
</button>
</div>
</div>
</header>

<main className="z-10 md:py-20 lg:py-28 flex flex-col lg:flex-row w-full max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 relative items-center">

<div className="w-full lg:w-1/2 flex flex-col items-start text-left mb-16 lg:mb-0">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] text-white animate-fade-up delay-100">
                FAST. FAIR. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">SKILL-BASED.</span>
</h1>
<p className="mt-8 text-lg md:text-xl text-slate-300 max-w-xl font-normal leading-relaxed animate-fade-up delay-200">
                Snackable PvP matches powered by Web3. Compete, earn, and control your destiny with instant stablecoin rewards.
            </p>
<div className="mt-6 mb-10 animate-fade-up delay-300">
<h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#F59E0B] drop-shadow-[0_2px_10px_rgba(251,191,36,0.3)]">
                    PLAY TO WIN.
                </h2>
</div>
<div className="flex flex-col sm:flex-row items-center gap-6 animate-fade-up delay-500 w-full sm:w-auto">
<button className="w-full sm:w-auto relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-200"></div>
<div className="relative px-8 py-4 bg-gradient-to-b from-[#ffcf40] to-[#ffaa00] rounded-lg border border-yellow-300 text-black font-bold text-lg flex items-center justify-center gap-2 shadow-xl hover:translate-y-[-2px] transition-transform">
                        Download now
                    </div>
</button>
<button className="w-full sm:w-auto px-6 py-4 text-slate-400 hover:text-white font-medium text-lg flex items-center justify-center gap-2 transition-colors group">
                    Explore more 
                    <svg aria-hidden="true" className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="lg:w-1/2 md:h-[600px] flex animate-fade-up delay-300 w-full h-[500px] relative perspective-1000 items-center justify-center">


<div className="absolute left-0 md:left-10 top-10 md:top-20 z-10 w-48 md:w-64 aspect-[9/19] bg-black rounded-[2rem] border-[6px] border-slate-800 shadow-2xl animate-float-reverse overflow-hidden transform rotate-12">

<div className="w-full h-full bg-slate-900 relative">
<img alt="Game Screen 1" className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-4 left-4 right-4 h-12 bg-slate-800/80 rounded-xl backdrop-blur border border-white/10 p-2 flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-blue-500"></div>
<div className="h-2 w-16 bg-slate-600 rounded"></div>
</div>
</div>
</div><div className="blur-[100px] bg-cyan-500/20 rounded-full absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute right-0 md:right-20 top-0 z-20 w-52 md:w-72 aspect-[9/19] bg-black rounded-[2.5rem] border-[6px] border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float overflow-hidden transform -rotate-6">

<div className="w-full h-full bg-indigo-950 relative">
<div className="z-10 bg-gradient-to-b from-black/80 to-transparent w-full h-24 pt-4 pr-4 pb-4 pl-4 absolute top-0">
<div className="flex justify-between text-xs font-mono text-cyan-300">
<span className="">SCORE</span>
<span>$125.00</span>
</div>
</div><img alt="Game Lobby Interface" className="cursor-pointer w-full h-full object-cover" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>

<div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
<button className="w-full py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl shadow-lg shadow-red-600/30 text-xs uppercase tracking-wider">
                            Play Now
                        </button>
</div>
</div>
</div>


<div className="absolute -right-4 bottom-0 z-30 hidden md:block w-64 h-80 pointer-events-none">

<div className="w-full h-full bg-gradient-to-t from-blue-600/30 to-transparent mix-blend-screen"></div>
</div>
</div>
</main>

<div className="relative z-20 w-full bg-gradient-to-r from-blue-900/40 via-blue-800/40 to-blue-900/40 backdrop-blur-sm border-y border-white/10 transform -skew-y-1">
<div className="max-w-7xl mx-auto px-6 py-6 transform skew-y-1">
<div className="flex flex-wrap justify-around items-center gap-6 md:gap-12">
<div className="flex items-center gap-3 group cursor-default">
<div className="p-1 rounded bg-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
<svg aria-hidden="true" className="lucide lucide-sparkles w-5 h-5 text-cyan-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="text-lg font-bold tracking-tight uppercase text-white group-hover:text-cyan-300 transition-colors">Skill-Based</span>
</div>
<div className="flex items-center gap-3 group cursor-default">
<div className="p-1 rounded bg-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
<svg aria-hidden="true" className="lucide lucide-users w-5 h-5 text-cyan-300" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<span className="text-lg font-bold tracking-tight uppercase text-white group-hover:text-cyan-300 transition-colors">Social PvP</span>
</div>
<div className="flex items-center gap-3 group cursor-default">
<div className="p-1 rounded bg-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
<svg aria-hidden="true" className="lucide lucide-zap w-5 h-5 text-cyan-300" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-lg font-bold tracking-tight uppercase text-white group-hover:text-cyan-300 transition-colors">Fast-Paced</span>
</div>
<div className="flex items-center gap-3 group cursor-default">
<div className="p-1 rounded bg-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
<svg aria-hidden="true" className="lucide lucide-blocks w-5 h-5 text-cyan-300" data-lucide="blocks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"></path><rect height="8" rx="1" width="8" x="14" y="2"></rect></svg>
</div>
<span className="text-lg font-bold tracking-tight uppercase text-white group-hover:text-cyan-300 transition-colors">Web3-Powered</span>
</div>
</div>
</div>
</div>

<footer className="relative z-20 w-full py-16 bg-[#020408]">
<div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
<div className="flex flex-col items-center group">
<div className="mb-4 p-4 rounded-full bg-slate-900 border border-slate-800 group-hover:border-cyan-500/50 transition-colors">
<svg aria-hidden="true" className="lucide lucide-circle-dollar-sign w-8 h-8 text-white" data-lucide="circle-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
</div>
<div className="text-5xl font-bold tracking-tighter text-cyan-400 mb-1 group-hover:scale-110 transition-transform">50M+</div>
<div className="text-sm font-medium text-slate-400 uppercase tracking-widest">In Payouts</div>
</div>
<div className="flex flex-col items-center group">
<div className="mb-4 p-4 rounded-full bg-slate-900 border border-slate-800 group-hover:border-cyan-500/50 transition-colors">
<div className="flex gap-1">
<svg aria-hidden="true" className="lucide lucide-apple w-8 h-8 text-white" data-lucide="apple" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></svg>
</div>
</div>
<div className="text-5xl font-bold tracking-tighter text-white mb-1 group-hover:scale-110 transition-transform">10M+</div>
<div className="text-sm font-medium text-slate-400 uppercase tracking-widest">Downloads</div>
</div>
<div className="flex flex-col items-center group">
<div className="mb-4 p-4 rounded-full bg-slate-900 border border-slate-800 group-hover:border-cyan-500/50 transition-colors">
<svg aria-hidden="true" className="lucide lucide-gamepad w-8 h-8 text-white" data-lucide="gamepad" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="10" y1="12" y2="12"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="15" x2="15.01" y1="13" y2="13"></line><line x1="18" x2="18.01" y1="11" y2="11"></line><rect height="12" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<div className="text-5xl font-bold tracking-tighter text-white mb-1 group-hover:scale-110 transition-transform">100M+</div>
<div className="text-sm font-medium text-slate-400 uppercase tracking-widest">Games Played</div>
</div>
</div>
</footer>


    </>
  );
}
