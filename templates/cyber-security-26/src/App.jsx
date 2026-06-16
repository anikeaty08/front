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
  


        // Simple script to enhance the marquee effect smoothness if needed
        // but CSS handles most of it.
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full -z-10 h-3/4" data-alpha-mask="62" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 62%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 62%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="yWZ2Tbe094Fsjgy9NRnD"></div>

</div></div>

<div className="scanlines"></div>
<div className="noise"></div>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px]"></div>
<div className="absolute inset-0 cyber-grid z-0"></div>
</div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-[#030303]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-2 h-2 bg-emerald-500 rounded-sm group-hover:animate-pulse"></div>
<span className="font-mono text-sm tracking-tight text-slate-100 font-medium group-hover:text-emerald-400 transition-colors">
                    0xREQ <span className="text-slate-600">//</span> PLATFORM
                </span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide">
<a className="hover:text-white transition-colors" href="#">MODULES</a>
<a className="hover:text-white transition-colors" href="#">CTF ARENA</a>
<a className="hover:text-white transition-colors" href="#">BOUNTIES</a>
<a className="hover:text-white transition-colors" href="#">LEADERBOARD</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors">
<svg aria-hidden="true" data-icon="lucide:terminal" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8M4 17l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    _LOGIN
                </button>
<button className="bg-white/10 hover:bg-white/15 text-white text-xs font-medium px-4 py-1.5 rounded border border-white/10 transition-all hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    INITIALIZE
                </button>
</div>
</div>
</nav>
<main className="z-10 pt-32 pb-20 relative">

<div className="max-w-7xl mx-auto px-6 mb-24">
<div className="flex flex-col text-center items-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="font-mono text-[10px] text-emerald-400 font-medium tracking-wider uppercase">System Online v2.4</span>
</div>

<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tight mb-6">
                    Master the art of <br className="hidden md:block"/>
<span className="bg-clip-text glitch-hover cursor-default text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">exploitation</span>
</h1>

<p className="md:text-lg leading-relaxed text-base font-light text-white max-w-2xl mb-10">Bug Hunting <span className="text-emerald-500">|</span> CTF <span className="text-emerald-500">|</span> Web SecurityLearning by testing, breaking, and understanding systems.<span className="font-medium text-emerald-400">Keya</span></p>

<div className="w-full max-w-3xl mx-auto perspective-1000 group">
<div className="relative bg-[#0A0A0A] rounded-lg border border-white/10 shadow-2xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.01] group-hover:border-emerald-500/30">

<div className="flex border-white/5 border-b pt-3 pr-4 pb-3 pl-4 items-center">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
</div>
<div className="flex-1 text-center font-mono text-[10px] text-slate-500">root@0xREQ:~</div>
</div>

<div className="p-6 font-mono text-xs md:text-sm text-left h-64 overflow-hidden relative">
<div className="text-emerald-500 mb-2">➜  ~ <span className="text-white">init_sequence --target=all</span></div>
<div className="text-slate-400 mb-1">[+] Analyzing network topology...</div>
<div className="text-slate-400 mb-1">[+] Bypassing firewall rules... <span className="text-emerald-400">SUCCESS</span></div>
<div className="text-slate-400 mb-1">[+] Enumerating services...</div>
<div className="grid grid-cols-2 max-w-sm gap-2 my-4 text-[10px] opacity-80">
<div className="flex justify-between border-b border-dashed border-white/10 pb-1"><span>PORT 22</span> <span className="text-red-400">OPEN (SSH)</span></div>
<div className="flex justify-between border-b border-dashed border-white/10 pb-1"><span>PORT 80</span> <span className="text-emerald-400">OPEN (HTTP)</span></div>
<div className="flex justify-between border-b border-dashed border-white/10 pb-1"><span>PORT 443</span> <span className="text-emerald-400">OPEN (HTTPS)</span></div>
<div className="flex justify-between border-b border-dashed border-white/10 pb-1"><span className="">PORT 3306</span> <span className="text-red-400">FILTERED</span></div>
</div>
<div className="text-emerald-500">➜  ~ <span className="text-white">inject_payload</span><span className="cursor-blink bg-white w-2 h-4 inline-block align-middle ml-1"></span></div>

<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full border-y border-white/5 bg-white/[0.02] overflow-hidden py-3 mb-24">
<div className="flex whitespace-nowrap gap-16 animate-[marquee_20s_linear_infinite] items-center">

<div className="flex items-center gap-2 text-xs font-mono text-slate-400">
<span className="text-emerald-500">USER_882</span> PWNED <span className="text-white">MACHINE_CORP_V1</span>
</div>
<div className="flex items-center gap-2 text-xs font-mono text-slate-400">
<span className="text-cyan-500">NEW BOUNTY</span> <span className="text-white">$15,000</span> ADDED BY FINTECH_SYS
                </div>
<div className="flex items-center gap-2 text-xs font-mono text-slate-400">
<span className="text-purple-500">CVE-2023-9021</span> PATCH ANALYZED
                </div>
<div className="flex items-center gap-2 text-xs font-mono text-slate-400">
<span className="text-emerald-500">ANON_X</span> CAPTURED FLAG <span className="text-white">{R00T_ACC3SS}</span>
</div>

<div className="flex items-center gap-2 text-xs font-mono text-slate-400">
<span className="text-emerald-500">USER_882</span> PWNED <span className="text-white">MACHINE_CORP_V1</span>
</div>
<div className="flex items-center gap-2 text-xs font-mono text-slate-400">
<span className="text-cyan-500">NEW BOUNTY</span> <span className="text-white">$15,000</span> ADDED BY FINTECH_SYS
                </div>
<div className="flex items-center gap-2 text-xs font-mono text-slate-400">
<span className="text-purple-500">CVE-2023-9021</span> PATCH ANALYZED
                </div>
</div>
</div>

<div className="max-w-7xl mr-auto mb-32 ml-auto pr-6 pl-6">
<div className="flex justify-between items-end mb-12">
<div className="">
<h2 className="text-2xl font-medium text-white tracking-tight mb-2">Training Modules</h2>
<p className="text-sm text-slate-500">Select your attack vector.</p>
</div>
<a className="text-xs font-mono text-emerald-500 hover:text-emerald-400 flex items-center gap-1" href="#">
                    VIEW_ALL_MODULES <svg aria-hidden="true" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">

<div className="group relative p-6 bg-[#080808] rounded-xl border border-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:bg-white/[0.02]">
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" data-icon="lucide:arrow-up-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-500">
<svg aria-hidden="true" data-icon="lucide:globe" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-slate-100 mb-2 tracking-tight">Web Exploitation</h3>
<p className="leading-relaxed text-sm text-slate-500 mb-4" style={{}}>Master OWASP Top 10, SQL injection, XSS, and server-side vulnerabilities in modern web apps.</p>
<div className="flex gap-2">
<span className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 text-slate-400 border border-white/5">SQLi</span>
<span className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 text-slate-400 border border-white/5">RCE</span>
</div>
</div>

<div className="group hover:border-cyan-500/30 transition-all duration-300 hover:bg-white/[0.02] bg-[#080808] border-white/5 border rounded-xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" data-icon="lucide:arrow-up-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6 text-cyan-500">
<svg aria-hidden="true" data-icon="lucide:binary" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="6" rx="2" width="4" x="14" y="14"></rect><rect height="6" rx="2" width="4" x="6" y="4"></rect><path d="M6 20h4m4-10h4M6 14h2v6m6-16h2v6"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-slate-100 mb-2 tracking-tight">Binary Exploitation</h3>
<p className="leading-relaxed text-sm text-slate-500 mb-4">
                        Dive deep into memory corruption, buffer overflows, and ROP chains. Reverse engineer the unknown.
                    </p>
<div className="flex gap-2">
<span className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 text-slate-400 border border-white/5">Assembly</span>
<span className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 text-slate-400 border border-white/5">GDB</span>
</div>
</div>

<div className="group relative p-6 bg-[#080808] rounded-xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:bg-white/[0.02]">
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" data-icon="lucide:arrow-up-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 text-purple-500">
<svg aria-hidden="true" data-icon="lucide:shield-alert" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-8-5v4m0 4h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-slate-100 mb-2 tracking-tight">Privilege Escalation</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">
                        Learn how to move from a standard user to root. Linux and Windows kernel exploitation techniques.
                    </p>
<div className="flex gap-2">
<span className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 text-slate-400 border border-white/5">Linux</span>
<span className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 text-slate-400 border border-white/5">Active Directory</span>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6">
<div className="relative rounded-2xl border border-white/10 bg-[#050505] overflow-hidden">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-900/10 to-transparent pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/5">
<div className="flex items-center gap-2 mb-6">
<span className="flex h-2 w-2 rounded-full bg-red-500"></span>
<span className="text-xs font-mono text-red-400 tracking-widest uppercase">Live Target</span>
</div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Operation: Black Citadel</h2>
<p className="text-slate-400 mb-8 leading-relaxed text-sm">
                            A highly secured banking infrastructure simulation. Infiltrate the perimeter, bypass the IDS, and exfiltrate the customer database. 
                        </p>
<div className="space-y-4 mb-8">
<div className="flex items-center justify-between text-xs font-mono">
<span className="text-slate-500">DIFFICULTY</span>
<div className="flex gap-1">
<div className="w-8 h-1 bg-red-500 rounded-full"></div>
<div className="w-8 h-1 bg-red-500 rounded-full"></div>
<div className="w-8 h-1 bg-red-500 rounded-full"></div>
<div className="w-8 h-1 bg-red-900/30 rounded-full"></div>
</div>
</div>
<div className="flex items-center justify-between text-xs font-mono">
<span className="text-slate-500">REWARD POOL</span>
<span className="text-emerald-400">$2,500.00</span>
</div>
<div className="flex items-center justify-between text-xs font-mono">
<span className="text-slate-500">ACTIVE HACKERS</span>
<span className="text-white">142</span>
</div>
</div>
<button className="hover:bg-slate-200 transition-colors flex text-sm font-medium text-black bg-white w-full rounded pt-3 pb-3 gap-x-2 gap-y-2 items-center justify-center">
<svg aria-hidden="true" data-icon="lucide:swords" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 17.5L3 6V3h3l11.5 11.5M13 19l6-6m-3 3l4 4m-1 1l2-2M14.5 6.5L18 3h3v3l-3.5 3.5M5 14l4 4m-2-1l-3 3m-1-1l2 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Enter Arena
                        </button>
</div>
<div className="p-8 md:p-12 relative flex flex-col justify-center">

<div className="font-mono text-xs space-y-2 text-slate-500">
<div className="flex justify-between border-b border-white/5 pb-2">
<span>TARGET_IP</span>
<span className="text-slate-300">10.10.24.88</span>
</div>
<div className="flex justify-between border-b border-white/5 pb-2">
<span>OS</span>
<span className="text-slate-300">Linux (Debian)</span>
</div>
<div className="mt-8 p-4 rounded bg-black border border-white/10 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-[shimmer_2s_infinite]"></div>
<pre className="text-emerald-500/80"><span className="text-purple-400">function</span> <span className="text-blue-400">authenticate</span>(user) {
  <span className="text-purple-400">if</span> (user.access_level != <span className="text-yellow-300">"admin"</span>) {
    <span className="text-slate-400">// TODO: Fix race condition here</span>
    <span className="text-purple-400">return</span> false;
  }
  <span className="text-purple-400">return</span> true;
}</pre>
</div>
<div className="mt-4 flex gap-2">
<div className="h-1 flex-1 bg-emerald-500/20 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[75%]"></div>
</div>
<span className="text-[10px] text-emerald-500">75% PWNED</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/10 bg-[#020202] pt-16 pb-8 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div>
<h4 className="text-white text-sm font-medium mb-4">Platform</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">CTF Challenges</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Bug Bounty</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Academia</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Resources</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Tools Directory</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Community</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-2">
<h4 className="text-white text-sm font-medium mb-4">Subscribe to Intelligence</h4>
<div className="flex gap-2">
<input className="bg-white/5 border border-white/10 rounded px-4 py-2 text-xs text-white w-full focus:outline-none focus:border-emerald-500 transition-colors font-mono placeholder:text-slate-600" placeholder="enter_email_address" type="email"/>
<button className="bg-white text-black px-4 py-2 rounded text-xs font-medium hover:bg-emerald-400 hover:text-black transition-colors">
                            SUBSCRIBE
                        </button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
<div className="text-[10px] text-slate-600 font-mono">
                    © 2024 0xREQ SECURITY INC. ALL RIGHTS RESERVED.
                </div>
<div className="flex gap-4">
<svg aria-hidden="true" data-icon="lucide:github" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg>
<svg aria-hidden="true" data-icon="lucide:twitter" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:disc" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="2"></circle></g></svg>
</div>
</div>
</div>
</footer>


    </>
  );
}
