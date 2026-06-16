import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['JetBrains Mono', 'monospace'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
neutral: {
900: '#171717',
925: '#0a0a0a',
950: '#050505',
},
accent: {
50: '#fdf4ff',
100: '#fae8ff',
200: '#f5d0fe',
300: '#f0abfc',
400: '#e879f9',
500: '#d946ef', // Fuchsia 500
600: '#c026d3',
700: '#a21caf',
800: '#86198f',
900: '#701a75',
950: '#4a044e',
}
},
letterSpacing: {
tighter: '-0.05em',
tight: '-0.025em',
normal: '0',
wide: '0.025em',
wider: '0.05em',
widest: '0.1em',
},
animation: {
'marquee': 'marquee 40s linear infinite',
'beam': 'beam 6s linear infinite',
'blink': 'blink 1s step-end infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
},
beam: {
'0%': { top: '-200px', opacity: '0' },
'10%': { opacity: '1' },
'90%': { opacity: '1' },
'100%': { top: '100%', opacity: '0' },
},
blink: {
'0%, 100%': { opacity: '1' },
'50%': { opacity: '0' },
}
}
}
}
}



document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
}
});
}, { threshold: 0.1 });
document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
});



    const body = document.getElementById('main-body');
    const spotlightGroups = document.querySelectorAll('.spotlight-group');

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        spotlightGroups.forEach(group => {
            const rect = group.getBoundingClientRect();
            const relX = x - rect.left;
            const relY = y - rect.top;
            group.style.setProperty('--mouse-x', `${relX}px`);
            group.style.setProperty('--mouse-y', `${relY}px`);
        });
    });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 bg-grid-pattern pointer-events-none h-full w-full"></div>

<div className="fixed inset-0 pointer-events-none z-0 grid grid-cols-6 md:grid-cols-12 max-w-7xl mx-auto border-x border-white/5 h-full">
<div className="border-r border-white/5 h-full hidden md:block relative overflow-hidden">
<div className="absolute -top-40 -right-[1px] w-[1px] h-40 bg-gradient-to-b from-transparent via-accent-500 to-transparent animate-beam" style={{animationDuration: '5s', animationDelay: '0s'}}></div>
</div>
<div className="border-r border-white/5 h-full hidden md:block"></div>
<div className="border-r border-white/5 h-full hidden md:block relative overflow-hidden">
<div className="absolute -top-40 -right-[1px] w-[1px] h-40 bg-gradient-to-b from-transparent via-accent-500 to-transparent animate-beam" style={{animationDuration: '7s', animationDelay: '2s'}}></div>
</div>
<div className="border-r border-white/5 h-full hidden md:block"></div>
<div className="border-r border-white/5 h-full hidden md:block"></div>
<div className="border-r border-white/5 h-full hidden md:block relative overflow-hidden">
<div className="absolute -top-40 -right-[1px] w-[1px] h-40 bg-gradient-to-b from-transparent via-accent-500 to-transparent animate-beam" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
</div>
<div className="border-r border-white/5 h-full hidden md:block"></div>
<div className="border-r border-white/5 h-full hidden md:block relative overflow-hidden">
<div className="absolute -top-40 -right-[1px] w-[1px] h-40 bg-gradient-to-b from-transparent via-accent-500 to-transparent animate-beam" style={{animationDuration: '8s', animationDelay: '3s'}}></div>
</div>
<div className="border-r border-white/5 h-full hidden md:block"></div>
<div className="border-r border-white/5 h-full hidden md:block"></div>
<div className="border-r border-white/5 h-full hidden md:block relative overflow-hidden">
<div className="absolute -top-40 -right-[1px] w-[1px] h-40 bg-gradient-to-b from-transparent via-accent-500 to-transparent animate-beam" style={{animationDuration: '6s', animationDelay: '4s'}}></div>
</div>
</div>

<nav className="sticky top-0 z-50 w-full bg-neutral-950/80 backdrop-blur-sm border-b border-white/10">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-accent-500 flex items-center justify-center text-black font-bold text-sm">
                706
            </div>
<span className="text-sm font-bold tracking-widest text-white uppercase glitch-hover cursor-default">
                Network_
            </span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-wider">
<a className="text-gray-400 hover:text-accent-500 transition-colors" href="#mission">[Mission]</a>
<a className="hover:text-accent-500 transition-colors text-gray-400" href="/#nodes">[Nodes]</a>
<a className="text-gray-400 hover:text-accent-500 transition-colors" href="#events">[Events]</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex gap-2 uppercase border-accent-500/50 text-accent-500 hover:bg-accent-500 hover:text-black transition-all duration-200 text-xs font-bold tracking-wider border rounded-none pt-2 pr-4 pb-2 pl-4 gap-x-2 gap-y-2 items-center">
<span className="animate-blink w-2 h-2 bg-current rounded-none"></span>
                Join_Grid
            </button>
</div>
</div>
</nav>
<main className="z-10 pt-20 relative">

<section className="relative w-full max-w-7xl mx-auto px-6 mb-32" id="hero">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

<div className="lg:col-span-8 animate-on-scroll">
<div className="inline-flex items-center gap-2 px-2 py-1 bg-white/5 border border-white/10 mb-6">
<span className="w-2 h-2 bg-green-500 rounded-none"></span>
<span className="text-[10px] uppercase tracking-widest text-gray-400">System_Status: Online</span>
</div>
<h1 className="md:text-7xl lg:text-8xl leading-none text-5xl font-bold text-white tracking-tighter mb-8" style={{}}>Create the future.</h1>
<p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed border-l-2 border-accent-500 pl-6">
<span className="text-accent-500 font-bold">&gt;&gt;</span> 706 is a decentralized collective of creative minds. We compile ideas, deploy projects, and debug the future.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mt-12 gap-x-4 gap-y-4">
<button className="h-14 px-8 bg-accent-500 text-black font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-3">
                        Execute_Init
                        <svg className="" data-icon-set="lucide" data-lucide="terminal" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8M4 17l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="h-14 px-8 bg-transparent border border-white/20 text-white font-bold text-sm uppercase tracking-wider hover:border-accent-500 hover:text-accent-500 transition-colors">
                        View_Manifesto.md
                    </button>
</div>
</div>

<div className="lg:col-span-4 animate-on-scroll">
<div className="w-full bg-neutral-900 border border-white/10 p-4 font-mono text-xs relative group">

<div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
<span className="text-gray-500">terminal@706:~</span>
<div className="flex gap-1">
<div className="w-3 h-3 bg-white/20"></div>
<div className="w-3 h-3 bg-white/20"></div>
</div>
</div>

<div className="space-y-2 text-gray-400">
<p className=""><span className="text-accent-500">root@706:~$</span> npm install community</p>
<p className="text-gray-500">... downloading packages ...</p>
<p className="text-gray-500">[+] creativity@latest added</p>
<p className="text-gray-500">[+] collaboration@2.4.0 added</p>
<p className="text-gray-500">[+] open-source@1.0.0 added</p>
<p className="mt-4"><span className="text-accent-500">root@706:~$</span> ./start-server.sh</p>
<p className="text-white">&gt; Server listening on port 706...</p>
<p className="text-white animate-pulse">&gt; Ready for connection_</p>
</div>

<div className="absolute inset-0 bg-accent-500/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"></div>
</div>
</div>
</div>
</section>

<div className="border-y overflow-hidden bg-neutral-925 w-full border-white/10 mb-32 pt-4 pb-4 relative">
<div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-neutral-925 to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-925 to-transparent z-10"></div>
<div className="flex animate-marquee whitespace-nowrap">
<div className="flex gap-16 pr-8 pl-8 gap-x-16 gap-y-16 items-center">
<span className="text-sm font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
<svg className="text-accent-500" data-icon-set="lucide" data-lucide="cpu" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg> HARDWARE
                </span>
<span className="text-sm font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
<svg className="text-accent-500" data-icon-set="lucide" data-lucide="code-2" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> SOFTWARE
                </span>
<span className="uppercase flex items-center gap-2 text-sm font-bold text-gray-500 tracking-widest">
<svg className="text-accent-500" data-icon-set="lucide" data-lucide="palette" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path className="" d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></g></svg> DESIGN
                </span>
<span className="uppercase flex items-center gap-2 text-sm font-bold text-gray-500 tracking-widest">
<svg className="text-accent-500" data-icon-set="lucide" data-lucide="music" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></g></svg> AUDIO
                </span>
<span className="text-sm font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
<svg className="text-accent-500" data-icon-set="lucide" data-lucide="box" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path className="" d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path className="" d="m3.3 7l8.7 5l8.7-5M12 22V12"></path></g></svg> 3D_PRINT
                </span>

<span className="text-sm font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
<svg className="text-accent-500" data-icon-set="lucide" data-lucide="cpu" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg> HARDWARE
                </span>
<span className="text-sm font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
<svg className="text-accent-500" data-icon-set="lucide" data-lucide="code-2" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> SOFTWARE
                </span>
<span className="text-sm font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
<svg className="text-accent-500" data-icon-set="lucide" data-lucide="palette" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></g></svg> DESIGN
                </span>
<span className="text-sm font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
<svg className="text-accent-500" data-icon-set="lucide" data-lucide="music" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></g></svg> AUDIO
                </span>
<span className="text-sm font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
<svg className="text-accent-500" data-icon-set="lucide" data-lucide="box" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path></g></svg> 3D_PRINT
                </span>
</div>
</div>
</div>

<section className="max-w-7xl mx-auto px-6 mb-32" id="nodes">
<div className="flex animate-on-scroll border-white/10 border-b mb-12 pb-6 items-end justify-between">
<h2 className="text-3xl font-bold text-white uppercase tracking-tight">
<span className="text-accent-500">/</span>Core_Protocols
            </h2>
<span className="text-xs font-mono text-gray-500">v1.0</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">

<div className="group relative bg-neutral-950 p-8 hover:bg-neutral-925 transition-colors duration-300 animate-on-scroll spotlight-group overflow-hidden" style={{-MouseX: '945px', -MouseY: '-663px'}}>
<div className="absolute inset-0 pointer-events-none spotlight-card opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="mb-6 text-accent-500">
<svg className="" data-icon-set="lucide" data-lucide="network" height="32" style={{}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3m-7-4V8"></path></g></svg>
</div>
<h3 className="uppercase text-lg font-bold text-white tracking-wide mb-3" style={{}}>Decentralized</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                    No leaders. No hierarchy. Just nodes in a network working towards a common goal. Your contribution defines your rank.
                </p>
<div className="mt-8 flex items-center gap-2 text-xs font-bold text-accent-500 uppercase opacity-0 group-hover:opacity-100 transition-opacity">
<span>Read_Protocol</span> <svg className="" data-icon-set="lucide" data-lucide="arrow-right" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>

<div className="group relative bg-neutral-950 p-8 hover:bg-neutral-925 transition-colors duration-300 animate-on-scroll spotlight-group overflow-hidden" style={{-MouseX: '534.671875px', -MouseY: '-663px'}}>
<div className="absolute inset-0 pointer-events-none spotlight-card opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="mb-6 text-accent-500">
<svg className="w-[32px] h-[32px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="anvil" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(217, 70, 239)', width: '32px', height: '32px'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4"></path><path d="M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z"></path><path d="M9 12v5"></path><path d="M15 12v5"></path><path d="M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1"></path></svg>
</div>
<h3 className="text-lg font-bold text-white uppercase tracking-wide mb-3">Open Source</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                    Knowledge should be free. All projects built within 706 are documented and shared. Fork, star, and deploy.
                </p>
<div className="mt-8 flex items-center gap-2 text-xs font-bold text-accent-500 uppercase opacity-0 group-hover:opacity-100 transition-opacity">
<span>View_Repos</span> <svg className="" data-icon-set="lucide" data-lucide="arrow-right" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>

<div className="group relative bg-neutral-950 p-8 hover:bg-neutral-925 transition-colors duration-300 animate-on-scroll spotlight-group overflow-hidden" style={{-MouseX: '124.3359375px', -MouseY: '-663px'}}>
<div className="absolute inset-0 pointer-events-none spotlight-card opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="mb-6 text-accent-500">
<svg className="w-[32px] h-[32px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="air-vent" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(217, 70, 239)', width: '32px', height: '32px'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><path d="M6 8h12"></path><path d="M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12"></path><path d="M6.6 15.6A2 2 0 1 0 10 17v-5"></path></svg>
</div>
<h3 className="text-lg font-bold text-white uppercase tracking-wide mb-3">High Voltage</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                    We move fast. Hackathons every weekend. Late night shipping. The energy of the grid is always high.
                </p>
<div className="mt-8 flex items-center gap-2 text-xs font-bold text-accent-500 uppercase opacity-0 group-hover:opacity-100 transition-opacity">
<span className="">Check_Velocity</span> <svg className="" data-icon-set="lucide" data-lucide="arrow-right" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32 animate-on-scroll" id="events">
<div className="border border-white/10 bg-black">
<div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
<div className="flex items-center gap-3">
<svg className="text-accent-500" data-icon-set="lucide" data-lucide="calendar-clock" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 14v2.2l1.6 1M16 2v4m5 1.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5M3 10h5m0-8v4"></path><circle cx="16" cy="16" r="6"></circle></g></svg>
<span className="text-sm font-bold uppercase tracking-widest text-white">Event_Log</span>
</div>
<div className="text-xs text-gray-500 font-mono">./fetch_upcoming.sh</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="">
<tr className="text-xs text-gray-500 uppercase tracking-wider border-b border-white/10">
<th className="p-6 font-medium">Status</th>
<th className="p-6 font-medium">Event_ID</th>
<th className="p-6 font-medium">Date_Time</th>
<th className="p-6 font-medium">Location</th>
<th className="p-6 font-medium">Action</th>
</tr>
</thead>
<tbody className="text-sm font-mono">
<tr className="group border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="p-6">
<span className="flex items-center gap-2 text-accent-500 font-bold uppercase text-xs">
<span className="w-2 h-2 bg-accent-500 rounded-none animate-pulse"></span>
                                    Live
                                </span>
</td>
<td className="p-6 text-white font-bold">HACK_NIGHT_042</td>
<td className="p-6 text-gray-400">Tonight, 20:00</td>
<td className="p-6 text-gray-400">Sector 7 (Main Hall)</td>
<td className="p-6">
<a className="text-accent-500 hover:text-white hover:underline decoration-accent-500 decoration-2 underline-offset-4" href="#">RSVP_NOW</a>
</td>
</tr>
<tr className="group border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="p-6">
<span className="flex items-center gap-2 text-gray-500 font-bold uppercase text-xs">
<span className="w-2 h-2 border border-gray-500 rounded-none"></span>
                                    Queued
                                </span>
</td>
<td className="p-6 text-white font-bold">WORKSHOP: RUST_101</td>
<td className="p-6 text-gray-400">Oct 24, 18:30</td>
<td className="p-6 text-gray-400">Virtual Node</td>
<td className="p-6">
<a className="text-gray-500 group-hover:text-accent-500 transition-colors" href="#">Join_Waitlist</a>
</td>
</tr>
<tr className="group border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="p-6">
<span className="flex items-center gap-2 text-gray-500 font-bold uppercase text-xs">
<span className="w-2 h-2 border border-gray-500 rounded-none"></span>
                                    Queued
                                </span>
</td>
<td className="p-6 text-white font-bold">DEMO_DAY_V3</td>
<td className="p-6 text-gray-400">Nov 01, 19:00</td>
<td className="p-6 text-gray-400">The Warehouse</td>
<td className="p-6">
<a className="text-gray-500 group-hover:text-accent-500 transition-colors" href="#">Register</a>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-4 border-t border-white/10 text-xs text-gray-600 font-mono text-center uppercase">
                End of line.
            </div>
</div>
</section>

<section className="border-t border-white/10 bg-neutral-950 relative">
<div className="max-w-7xl mx-auto px-6 py-24 text-center">
<h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8 uppercase animate-on-scroll">
                Initialize<span className="text-accent-500">_Sequence</span>
</h2>
<p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg animate-on-scroll">
                The network is growing. Connect your node to the 706 grid and start building the future today.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-on-scroll">
<button className="md:w-auto uppercase hover:bg-white hover:scale-[1.02] transition-all duration-200 font-bold text-black tracking-widest w-full h-16 pr-10 pl-10 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                    Create_Account
                </button>
<button className="md:w-auto uppercase hover:border-accent-500 hover:text-accent-500 transition-colors font-bold text-white tracking-widest bg-black w-full h-16 border-white/20 border pr-10 pl-10">
                    Contact_Admin
                </button>
</div>
</div>

<div className="border-t border-white/10 bg-black py-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-accent-500"></div>
<span className="text-sm font-bold text-white uppercase tracking-widest">706_NETWORK</span>
</div>
<div className="text-xs text-gray-600 font-mono">
<span className="mr-4">Latency: 12ms</span>
<span>© 2024 LOCAL_HOST</span>
</div>
</div>
</div>
</section>
</main>



    </>
  );
}
