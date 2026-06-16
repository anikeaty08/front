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
sans: ['Inter', 'sans-serif'],
serif: ['Newsreader', 'serif'],
},
colors: {
neutral: {
925: '#0a0a0a',
950: '#050505',
},
brand: {
400: '#7c66ff',
500: '#6b55e8',
600: '#5a45d0',
}
},
letterSpacing: {
tighter: '-0.04em',
},
animation: {
'marquee': 'marquee 40s linear infinite',
'beam': 'beam 8s linear infinite',
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
}
}
}
}
}



(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


 
const body = document.getElementById('main-body'); 
const spotlightGroups = document.querySelectorAll('.spotlight-group'); 
document.addEventListener('mousemove', (e) => { 
    const x = e.clientX; 
    const y = e.clientY; 
    body.style.setProperty('--mouse-x', `${x}px`); 
    body.style.setProperty('--mouse-y', `${y}px`); 
    spotlightGroups.forEach(group => { 
        const rect = group.getBoundingClientRect(); 
        const relX = x - rect.left; 
        const relY = y - rect.top; 
        group.style.setProperty('--mouse-x-rel', `${relX}px`); 
        group.style.setProperty('--mouse-y-rel', `${relY}px`); 
    }); 
}); 

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="0WrRbFIPaKoWVkiQWBG0"></div>
</div>

<div className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300" style={{background: 'radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(16,185,129,0.06), transparent 40%)'}}></div>

<div className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 z-50 opacity-60"></div>

<div className="fixed inset-0 pointer-events-none z-0 grid grid-cols-6 md:grid-cols-12 max-w-7xl mx-auto border-x h-full border-white/5">
<div className="border-r h-full hidden md:block animate-line relative overflow-hidden border-white/5" style={{animationDelay: '0.1s'}}>
<div className="absolute -top-40 -right-[1px] w-[1px] h-40 bg-gradient-to-b from-transparent via-emerald-500 to-transparent animate-beam" style={{animationDuration: '7s', animationDelay: '1.5s'}}></div>
</div>
<div className="border-r h-full hidden md:block animate-line relative overflow-hidden border-white/5" style={{animationDelay: '0.3s'}}></div>
<div className="border-r h-full hidden md:block animate-line relative overflow-hidden border-white/5" style={{animationDelay: '0.15s'}}>
<div className="absolute -top-52 -right-[1px] w-[1px] h-52 bg-gradient-to-b from-transparent via-teal-400 to-transparent animate-beam" style={{animationDuration: '11s', animationDelay: '4s'}}></div>
</div>
<div className="border-r h-full hidden md:block animate-line relative overflow-hidden border-white/5" style={{animationDelay: '0.4s'}}></div>
<div className="border-r h-full hidden md:block animate-line relative overflow-hidden border-white/5" style={{animationDelay: '0.25s'}}>
<div className="absolute -top-32 -right-[1px] w-[1px] h-32 bg-gradient-to-b from-transparent via-emerald-500 to-transparent animate-beam" style={{animationDuration: '6s', animationDelay: '0.5s'}}></div>
</div>
<div className="border-r h-full hidden md:block animate-line relative overflow-hidden border-white/5" style={{animationDelay: '0.1s'}}></div>
<div className="border-r h-full hidden md:block animate-line relative overflow-hidden border-white/5" style={{animationDelay: '0.35s'}}>
<div className="absolute -top-64 -right-[1px] w-[1px] h-64 bg-gradient-to-b from-transparent via-emerald-300 to-transparent animate-beam" style={{animationDuration: '9s', animationDelay: '2.5s'}}></div>
</div>
<div className="border-r h-full hidden md:block animate-line relative overflow-hidden border-white/5" style={{animationDelay: '0.2s'}}></div>
<div className="border-r h-full hidden md:block animate-line relative overflow-hidden border-white/5" style={{animationDelay: '0.45s'}}>
<div className="absolute -top-40 -right-[1px] w-[1px] h-40 bg-gradient-to-b from-transparent via-emerald-500 to-transparent animate-beam" style={{animationDuration: '8s', animationDelay: '5s'}}></div>
</div>
<div className="border-r h-full hidden md:block animate-line relative overflow-hidden border-white/5" style={{animationDelay: '0.15s'}}></div>
<div className="border-r h-full hidden md:block animate-line relative overflow-hidden border-white/5" style={{animationDelay: '0.3s'}}></div>
</div>

<nav className="sticky top-0 z-40 w-full border-b backdrop-blur-md shrink-0 border-white/5 bg-black/60">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2">
<svg className="iconify iconify--lucide" data-icon-replaced="true" data-icon-set="lucide" data-lucide="truck" fill="none" height="30" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(16, 185, 129)'}} viewbox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
<span className="text-xl font-semibold tracking-tight uppercase text-white"> Triple R </span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal transition-colors flex items-center gap-1 group hover:text-white text-emerald-400" href="#services"> Services </a>
<a className="text-sm font-normal transition-colors hover:text-white text-emerald-400" href="#comparison"> Compare </a>
<a className="text-sm font-normal transition-colors hover:text-white text-emerald-400" href="#pricing"> Pricing </a>
</div>

<div className="flex items-center gap-6">
<a className="hidden md:flex items-center gap-1 hover:text-white text-sm font-normal text-emerald-300" href="#">470-799-3151</a>
<button className="transition-all duration-300 overflow-hidden group hover:bg-white/10 text-xs font-semibold text-white tracking-wide bg-white/5 border-white/10 border rounded-full pt-2 pr-5 pb-2 pl-5 relative">
<span className="relative z-10 uppercase">Get a Quote</span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" style={{}}></div>
</button>
</div>
</div>
</nav>

<main className="relative bottom--5 w-full">

<div className="absolute top-0 inset-x-0 h-[850px] w-full z-0 overflow-hidden pointer-events-none select-none">

<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black z-10"></div>
<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-black/90 z-10"></div>

<img alt="Junk Removal Truck Background" className="w-full h-full object-cover object-center opacity-50 grayscale-[30%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<section className="flex flex-col z-10 w-full max-w-7xl mt-24 mr-auto mb-32 ml-auto pr-6 pl-6 relative">

<div className="flex spotlight-group [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate w-full mb-8 relative justify-start" style={{-MouseXRel: '1196px', -MouseYRel: '527px'}}>
<div className="-inset-px spotlight-border transition-opacity duration-300 opacity-0 w-fit rounded-full absolute" style={{background: 'radial-gradient(120px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(16,185,129,0.4), transparent)'}}></div>
<a className="relative z-10 group flex items-center gap-4 rounded-full border pr-4 pl-1.5 py-1.5 transition-all overflow-hidden border-white/10 bg-black/60 backdrop-blur-sm hover:border-white/20" href="#">
<span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-[10px] font-semibold text-emerald-400 tracking-wide uppercase"> New </span>
<span className="text-sm font-light text-emerald-200">Spring Cleanout Discount Available</span>
<svg className="iconify group-hover:translate-x-1 transition-transform iconify--lucide text-emerald-400" height="1em" style={{width: '14px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:gap-24 w-full border-0 translate-x-0 md:translate-x-12 scale-100 md:scale-105 gap-x-12 gap-y-12 items-center">

<div className="relative z-20 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate">
<div className="flex flex-col gap-2 drop-shadow-2xl">
<div className="font-mono text-xs mb-3 flex items-center gap-2 text-white/50 shadow-black drop-shadow-md"> 
                        EST_2023 
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
</div>
<h1 className="md:text-6xl lg:text-[78px] leading-[0.9] text-5xl italic tracking-tight font-serif text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
<span className="block">One Call.</span>
<span className="block not-italic font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-emerald-100 to-emerald-400 uppercase">WE HAUL.</span>
</h1>
</div>
</div>
</div>

<div className="mt-12 md:mt-16 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-end [animation:animationIn_0.8s_ease-out_0.7s_both] animate-on-scroll animate">

<div className="group relative rounded-2xl bg-black/40 backdrop-blur-sm p-6 md:p-8 spotlight-group spotlight-card overflow-hidden" style={{-MouseXRel: '1196px', -MouseYRel: '200px'}}>
<div className="absolute inset-0 pointer-events-none border rounded-2xl border-white/5"></div>
<div className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 spotlight-border transition-opacity duration-300 border border-transparent" style={{background: 'border-box radial-gradient(300px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(16,185,129,0.2), transparent) border-box', WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude'}}></div>
<div className="absolute left-0 top-6 w-0.5 h-10 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-r-full" style={{}}></div>
<p className="md:text-lg leading-relaxed text-base italic font-serif max-w-lg z-10 relative text-emerald-100/90 drop-shadow-md">"More than just junk removal. We are space reclamation specialists. Whether it's a single item or a full estate clear-out, we handle the heavy lifting so you can enjoy your space again."</p>
<div className="mt-6 flex gap-3 items-center">
<span className="text-lg font-bold tracking-tight text-white drop-shadow-md">Eco-Friendly Disposal</span>
<span className="text-[10px] tracking-wider font-mono ml-auto text-emerald-400">100%_Recycled_Or_Donated</span>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-center gap-5 z-10 pl-2 relative justify-end">

<button className="group/btn rounded-full relative">
<div className="-inset-1 group-hover/btn:opacity-75 transition duration-500 bg-emerald-600/50 opacity-40 rounded-full absolute blur"></div>
<div className="flex active:translate-y-[2px] active:shadow-[0_0_0_1px_rgba(16,185,129,0.5),0_2px_0_#065f46] transition-all duration-150 text-white bg-gradient-to-b from-[#1c803e] to-[#14532d] hover:bg-[#15803d] h-14 rounded-full pr-8 pl-8 relative shadow-[0_0_0_1px_rgba(16,185,129,0.5),0_4px_0_#064e3b,0_10px_15px_-3px_rgba(0,0,0,0.5)] gap-x-3 gap-y-3 items-center">
<span className="text-lg font-bold tracking-tight uppercase">Book Pickup</span>
<svg aria-hidden="true" className="iconify iconify--lucide text-white/90" height="1em" role="img" style={{width: '20px', height: '20px', strokeWidth: '2'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</button>

<a className="transition-all flex items-center justify-center group overflow-hidden hover:bg-black/40 backdrop-blur-md text-sm font-medium h-14 rounded-full pr-8 pl-8 relative text-emerald-200" href="#pricing" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))', -BorderRadiusBefore: '9999px'}}>
<span className="group-hover:text-white transition-colors text-base font-medium tracking-tight text-emerald-50 drop-shadow-md">View Pricing</span>
</a>
</div>
</div>

<div className="[animation:animationIn_0.8s_ease-out_0.9s_both] animate-on-scroll animate w-full z-20 mt-16 relative">
<p className="uppercase text-xs font-semibold tracking-widest font-mono text-center mb-8 text-emerald-600">SERVING RESIDENTIAL &amp; COMMERCIAL SPACES</p>
<div className="relative flex overflow-hidden group marquee-mask opacity-100">
<div className="flex animate-marquee whitespace-nowrap min-w-full gap-x-20 gap-y-20 items-center">

<div className="flex gap-2 items-center opacity-60 hover:opacity-100 transition-opacity text-emerald-500">
<svg height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m3 9l9-7l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M9 22V12h6v10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<span className="font-serif italic text-2xl">Residential</span>
</div>
<div className="flex gap-2 items-center opacity-60 hover:opacity-100 transition-opacity text-emerald-500">
<svg height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M3 21h18M5 21V7l8-4l8 4v14M8 21V12a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<span className="font-serif italic text-2xl">Commercial</span>
</div>
<div className="flex gap-2 items-center opacity-60 hover:opacity-100 transition-opacity text-emerald-500">
<svg height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<span className="font-serif italic text-2xl">Hoarding Cleanup</span>
</div>
<div className="flex gap-2 items-center opacity-60 hover:opacity-100 transition-opacity text-emerald-500">
<svg height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M7 19a2 2 0 1 0 2 2a2 2 0 0 0-2-2m10 0a2 2 0 1 0 2 2a2 2 0 0 0-2-2m-2-6V8a2 2 0 0 0-2-2H5.8a2 2 0 0 0-1.4.6L1 10.4V19a2 2 0 0 0 2 2h2m13 0h2a2 2 0 0 0 2-2v-3c0-1.1-1.3-1.6-2.2-.9L15 17Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M14 17h1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<span className="font-serif italic text-2xl">Haul Away</span>
</div>
<div className="flex gap-2 items-center opacity-60 hover:opacity-100 transition-opacity text-emerald-500">
<svg height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881a1.785 1.785 0 0 1-.004-1.784L7.196 9.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89a1.784 1.784 0 0 0 0-1.775l-1.226-2.12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="m14 16l-3 3l-3-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M8.293 13.596L7.196 9.5L7.1 5.943a1.83 1.83 0 0 1 1.582-2.376a1.78 1.78 0 0 1 1.657 1.526l.848 3.351l1.913 7.152" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M12.214 9.5l3.833-.848a1.84 1.84 0 0 1 2.023 1.165a1.784 1.784 0 0 1-.94 2.19l-3.393 1.258" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<span className="font-serif italic text-2xl">Recycling</span>
</div>
</div>
<div aria-hidden="true" className="flex gap-20 animate-marquee whitespace-nowrap items-center min-w-full absolute top-0 left-full pl-20">
<div className="flex gap-2 items-center opacity-60 hover:opacity-100 transition-opacity text-emerald-500"><svg className="" height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m3 9l9-7l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M9 22V12h6v10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg><span className="font-serif italic text-2xl">Residential</span></div>
<div className="flex gap-2 items-center opacity-60 hover:opacity-100 transition-opacity text-emerald-500"><svg className="" height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M3 21h18M5 21V7l8-4l8 4v14M8 21V12a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg><span className="font-serif italic text-2xl">Commercial</span></div>
<div className="flex gap-2 items-center opacity-60 hover:opacity-100 transition-opacity text-emerald-500"><svg height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg><span className="font-serif italic text-2xl">Hoarding Cleanup</span></div>
<div className="flex gap-2 items-center opacity-60 hover:opacity-100 transition-opacity text-emerald-500"><svg height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M7 19a2 2 0 1 0 2 2a2 2 0 0 0-2-2m10 0a2 2 0 1 0 2 2a2 2 0 0 0-2-2m-2-6V8a2 2 0 0 0-2-2H5.8a2 2 0 0 0-1.4.6L1 10.4V19a2 2 0 0 0 2 2h2m13 0h2a2 2 0 0 0 2-2v-3c0-1.1-1.3-1.6-2.2-.9L15 17Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M14 17h1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg><span className="font-serif italic text-2xl">Haul Away</span></div>
<div className="flex gap-2 items-center opacity-60 hover:opacity-100 transition-opacity text-emerald-500"><svg height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881a1.785 1.785 0 0 1-.004-1.784L7.196 9.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89a1.784 1.784 0 0 0 0-1.775l-1.226-2.12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="m14 16l-3 3l-3-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M8.293 13.596L7.196 9.5L7.1 5.943a1.83 1.83 0 0 1 1.582-2.376a1.78 1.78 0 0 1 1.657 1.526l.848 3.351l1.913 7.152" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M12.214 9.5l3.833-.848a1.84 1.84 0 0 1 2.023 1.165a1.784 1.784 0 0 1-.94 2.19l-3.393 1.258" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg><span className="font-serif italic text-2xl">Recycling</span></div>
</div>
</div>
</div>
</section>

<section className="flex flex-col z-20 w-full max-w-7xl mt-44 mr-auto mb-44 ml-auto pr-6 pl-6 relative items-center" id="services">

<div className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate text-center max-w-2xl mr-auto mb-16 ml-auto pr-6 pl-6">
<h2 className="text-4xl md:text-5xl font-serif italic tracking-tight mb-4 text-white">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-emerald-500">Reclaim your space</span>
<span className="text-emerald-500">in 24 hours.</span>
</h2>
<p className="leading-relaxed text-lg font-light text-emerald-400">Professional, insured, and efficient. We don't just dump it; we sort, recycle, and donate.</p>
</div><div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full relative gap-x-6 gap-y-6">

<div className="group spotlight-group overflow-hidden hover:bg-white/[0.04] transition-colors duration-500 flex flex-col [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll h-full border-white/5 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative" style={{-MouseXRel: '1196px', -MouseYRel: '-536.5px'}}>
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(600px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(16,185,129,0.08), transparent 40%)'}}></div>
<div className="overflow-hidden flex flex-col select-none group hover:bg-white/[0.02] transition-all duration-500 hover:border-white/10 bg-black/40 w-full h-48 border-white/5 border rounded-xl mb-8 relative gap-x-3 gap-y-3 items-center justify-center">
<div className="w-16 h-16 backdrop-blur-sm rounded-xl border flex items-center justify-center shadow-[0_0_15px_-5px_rgba(255,255,255,0.05)] transition-all duration-300 group-hover:scale-105 group-hover:border-emerald-500/40 group-hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.2)] bg-black/40 border-white/10">
<svg className="group-hover:text-emerald-500 transition-colors duration-300 w-[32px] h-[32px]" data-icon-replaced="true" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(16, 185, 129)', width: '32px', height: '32px'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m19 13.5l-6-6l-2.3 2.3a2.06 2.06 0 0 0 0 2.9l6.4 6.4a2.06 2.06 0 0 0 2.9 0l1.3-1.3a2.06 2.06 0 0 0 0-2.9z"></path><path d="m10.7 17.7l-4.7 3.3l-2.5-2.5l3.3-4.7"></path><path className="" d="M15 13.5V6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2"></path><path d="M11 6h2"></path>
</svg>
</div>
</div>
<div className="mt-auto relative z-10">
<div className="flex gap-3 mb-3 gap-x-3 gap-y-3 items-center">
<span className="text-xs font-mono text-emerald-500 border border-emerald-500/20 bg-emerald-500/5 px-2 py-0.5 rounded"> HANDS-OFF </span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2 text-white">White-Glove Service</h3>
<p className="leading-relaxed text-sm text-emerald-500">You point, we lift. From dusty basements to attics, our team handles the sorting, loading, and sweeping up afterwards.</p>
</div>
</div>

<div className="group spotlight-group overflow-hidden hover:bg-white/[0.04] transition-colors duration-500 flex flex-col [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll h-full border-white/5 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative" style={{-MouseXRel: '777.34375px', -MouseYRel: '-536.5px'}}>
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(600px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(16,185,129,0.08), transparent 40%)'}}></div>
<div className="overflow-hidden flex select-none bg-black/40 w-full h-48 border-white/5 border rounded-xl mb-8 pt-4 pr-4 pb-4 pl-4 relative items-center justify-center">
<div className="text-center">
<div className="text-5xl font-bold text-emerald-500 tracking-tighter font-mono mb-2">24h</div>
<div className="uppercase text-xs tracking-widest text-emerald-500">Turnaround</div>
</div>
<div className="absolute bottom-4 left-4 right-4 h-1 rounded-full overflow-hidden bg-emerald-900/40">
<div className="h-full bg-emerald-500 w-full animate-beam" style={{animationDuration: '1.5s'}}></div>
</div>
</div>
<div className="z-10 mt-auto relative">
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-mono text-emerald-500 border border-emerald-500/20 bg-emerald-500/5 px-2 py-0.5 rounded"> FAST </span>
<svg aria-hidden="true" className="iconify group-hover:text-emerald-500 transition-colors iconify--lucide text-emerald-400" height="1em" role="img" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<polygon className="" fill="none" points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></polygon>
</svg>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Same Day Removal</h3>
<p className="leading-relaxed text-sm text-emerald-500">Need it gone now? We offer priority same-day service for urgent cleanouts and estate closures.</p>
</div>
</div>

<div className="group spotlight-group overflow-hidden hover:bg-white/[0.04] transition-colors duration-500 flex flex-col [animation:animationIn_0.8s_ease-out_0.8s_both] animate-on-scroll h-full border-white/5 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative" style={{-MouseXRel: '358.671875px', -MouseYRel: '-536.5px'}}>
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(600px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(16,185,129,0.08), transparent 40%)'}}></div>
<div className="overflow-hidden flex select-none w-full h-48 border rounded-xl mb-8 pt-6 pr-6 pb-6 pl-6 relative items-center justify-center bg-black/40 border-white/5">
<div className="border-dashed flex w-32 h-32 border rounded-full relative items-center justify-center border-white/20">
<svg className="text-emerald-500" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881a1.785 1.785 0 0 1-.004-1.784L7.196 9.5"></path><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89a1.784 1.784 0 0 0 0-1.775l-1.226-2.12"></path><path d="m14 16l-3 3l-3-3"></path><path d="M8.293 13.596L7.196 9.5L7.1 5.943a1.83 1.83 0 0 1 1.582-2.376a1.78 1.78 0 0 1 1.657 1.526l.848 3.351l1.913 7.152"></path><path d="M12.214 9.5l3.833-.848a1.84 1.84 0 0 1 2.023 1.165a1.784 1.784 0 0 1-.94 2.19l-3.393 1.258"></path></svg>
<div className="absolute -bottom-3 -right-3 bg-emerald-500 rounded-full p-1.5 shadow-lg text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" height="1em" role="img" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
<div className="mt-auto relative z-10">
<div className="flex items-center gap-3 mb-3">
<span className="text-xs text-emerald-500 font-mono bg-emerald-500/5 border-emerald-500/20 border rounded pt-0.5 pr-2 pb-0.5 pl-2">RESPONSIBLE</span>
<svg className="group-hover:text-emerald-500 transition-colors text-emerald-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path><circle cx="12" cy="12" r="2"></circle><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path></svg>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2 text-white">Donated &amp; Recycled</h3>
<p className="leading-relaxed text-sm text-emerald-500">We partner with local charities and recycling centers to ensure your "junk" finds a second life.</p>
</div>
</div>
</div>

</section>

<section className="flex flex-col w-full max-w-7xl z-20 mr-auto mb-32 ml-auto pr-6 pl-6 relative" id="pricing">
<div className="text-center mb-16">
<h2 className="md:text-6xl text-4xl tracking-tight font-serif mb-6 text-white">The only <span className="italic text-emerald-500">transparent pricing.</span></h2>
<p className="leading-relaxed text-lg font-light max-w-2xl mr-auto ml-auto text-emerald-300">No hidden dump fees, no surprise hourly rates. Just honest, upfront quotes based on volume.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative">

<div className="bg-[#0A0A0A] border rounded-2xl p-8 flex flex-col gap-6 relative group transition-colors h-full border-white/10 hover:border-white/20">
<div className="">
<span className="text-xs font-bold uppercase tracking-widest text-emerald-400"> Single Item </span>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-sm font-mono text-emerald-400"> Starting at </span>
<span className="text-5xl font-serif tracking-tight text-white"> $99 </span>
</div>
<p className="text-xs text-emerald-500 font-bold font-mono mt-3 uppercase tracking-wide"> Curbside Pickup </p>
<p className="text-sm mt-4 leading-relaxed text-emerald-400"> Perfect for getting rid of that one old sofa or appliance. </p>
</div>
<div className="w-full h-px bg-white/5"></div>
<ul className="space-y-4 text-sm font-medium text-emerald-300">
<li className="flex gap-3 items-center">
<svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg> 
                        Mattress / Sofa 
                    </li>
<li className="flex gap-3 items-center">
<svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg> 
                        Appliances 
                    </li>
<li className="flex gap-3 items-center">
<svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg> 
                        Curbside discount 
                    </li>
<li className="flex gap-3 items-center">
<svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg> 
                        Eco-disposal included 
                    </li>
</ul>
<a className="w-full py-4 rounded-lg border font-semibold text-center transition-all mt-auto bg-white/5 border-white/10 hover:bg-white/10 hover:text-white text-emerald-200" href="#"> Book Pickup </a>
</div>

<div className="relative group z-10 md:-my-6">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-teal-500/10 rounded-2xl blur-xl opacity-100"></div>
<div className="relative border border-emerald-500/50 rounded-2xl p-8 flex flex-col gap-6 shadow-[0_0_40px_-10px_rgba(16,185,129,0.15)] h-full bg-black">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg text-white"> Most Popular </div>
<div className="">
<span className="text-xs font-bold text-emerald-400 uppercase tracking-widest"> 1/4 Truck </span>
<div className="flex gap-2 mt-4 gap-x-2 gap-y-2 items-baseline">
<span className="text-sm font-mono text-emerald-400"> Est. </span>
<span className="text-5xl text-white tracking-tight font-serif">$400</span>
</div>
<p className="text-xs text-emerald-500 font-bold font-mono mt-3 uppercase tracking-wide"> Room Cleanout </p>
<p className="text-sm mt-4 leading-relaxed text-emerald-400"> Ideal for clearing out a garage, small basement, or bedroom. </p>
</div>
<div className="w-full h-px bg-white/10"></div>
<ul className="space-y-4 text-sm font-medium text-white">
<li className="flex gap-3 items-center">
<svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg> 
                            Two-person crew 
                        </li>
<li className="flex gap-3 items-center">
<svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg> 
                            Includes labor &amp; loading 
                        </li>
<li className="flex gap-3 items-center">
<svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg> 
                            Sweep-up finish 
                        </li>
<li className="flex gap-3 items-center">
<svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg> 
                            Donation receipts provided 
                        </li>
</ul>
<a className="w-full py-4 rounded-lg bg-emerald-600 font-bold text-center text-lg hover:bg-emerald-500 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] mt-auto hover:-translate-y-0.5 text-white" href="#"> Schedule Now </a>
</div>
</div>

<div className="bg-[#0A0A0A] border rounded-2xl p-8 flex flex-col gap-6 relative group transition-colors h-full border-white/10 hover:border-white/20">
<div className="">
<span className="text-xs font-bold uppercase tracking-widest text-emerald-400"> Full Truck </span>
<div className="flex gap-2 mt-4 gap-x-2 gap-y-2 items-baseline">
<span className="text-sm font-mono text-emerald-400"> Est. </span>
<span className="text-5xl text-white tracking-tight font-serif">$550</span>
</div>
<p className="text-xs text-emerald-500 font-bold font-mono mt-3 uppercase tracking-wide"> Estate / Hoarding </p>
<p className="text-sm mt-4 leading-relaxed text-emerald-400"> Large scale removal for whole homes, estates, or commercial. </p>
</div>
<div className="w-full h-px bg-white/5"></div>
<ul className="space-y-4 text-sm font-medium text-emerald-300">
<li className="flex gap-3 items-center">
<svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg> 
                        15 cubic yards capacity 
                    </li>
<li className="flex gap-3 items-center">
<svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg> 
                        Priority scheduling 
                    </li>
<li className="flex gap-3 items-center">
<svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg> 
                        Same-day service available 
                    </li>
<li className="flex gap-3 items-center">
<svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg> 
                        Heavy item surcharge waived 
                    </li>
</ul>
<a className="w-full py-4 rounded-lg border font-semibold text-center transition-all mt-auto bg-white/5 border-white/10 hover:bg-white/10 hover:text-white text-emerald-200" href="#"> Get Quote </a>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-sm flex items-center justify-center gap-2 text-emerald-400">
<svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 3"></path></svg> 
                Fully Licensed &amp; Insured. 100% Satisfaction Guarantee. 
            </p>
</div>
</section>

<section className="flex flex-col w-full max-w-7xl z-20 mt-32 mr-auto mb-32 ml-auto pr-6 pl-6 relative" id="comparison">

<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="max-w-2xl">
<div className="flex items-center gap-2 mb-6">
<svg aria-hidden="true" className="iconify text-emerald-500 text-lg iconify--lucide" data-icon="lucide:scale" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m16 16l3-8l3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1m-11 0l3-8l3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1M2 21h20M12 3v18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-xs font-mono tracking-widest uppercase text-emerald-500"> Why Choose Us </span>
</div>
<h2 className="text-5xl md:text-6xl font-serif tracking-tight mb-6 leading-[0.95] text-white">
<span className="block font-light italic text-emerald-500">The messy way .</span>
<span className="font-medium">The Triple R way.</span>
</h2>
<p className="text-lg font-light leading-relaxed max-w-lg text-emerald-400"> See why homeowners choose Triple R over dumpsters or generic haulers. </p>
</div>
</div>

<div className="w-full overflow-x-auto pb-8 [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="min-w-[900px]">

<div className="grid grid-cols-4 border-b pb-4 border-white/10">
<div className="px-6 text-sm font-mono uppercase tracking-widest text-emerald-500"> Feature </div>
<div className="px-6 text-sm font-semibold text-emerald-400"> DIY / Dumpster </div>
<div className="px-6 text-sm font-semibold text-emerald-400"> Generic Hauler </div>
<div className="px-6 text-sm font-bold text-emerald-500">Triple R</div>
</div>

<div className="bg-[#0A0A0A]/50 backdrop-blur-sm">

<div className="grid grid-cols-4 border-b hover:bg-white/[0.02] transition-colors group/row items-center border-white/5">
<div className="text-sm font-medium pt-6 pr-6 pb-6 pl-6 text-emerald-300">Labor Include</div>
<div className="p-6 text-sm font-mono text-sky-400/80"> No (You lift) </div>
<div className="text-sm text-indigo-500/80 font-mono px-6 py-6"> Varies </div>
<div className="p-6 text-sm text-emerald-100 bg-emerald-900/[0.2] border-x border-emerald-500/10 font-mono flex items-center gap-2">
<svg className="lucide lucide-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg> 
                            Full Crew 
                        </div>
</div>

<div className="grid grid-cols-4 border-b hover:bg-white/[0.02] transition-colors group/row items-center border-white/5">
<div className="p-6 text-sm font-medium text-emerald-300"> Pricing Model </div>
<div className="p-6 text-sm font-mono text-emerald-500">Rental + Weight Fees</div>
<div className="p-6 text-sm font-mono text-emerald-500"> Hourly / Surprise </div>
<div className="p-6 text-sm text-emerald-100 bg-emerald-900/[0.2] border-x border-emerald-500/10 font-mono flex items-center gap-2">
<svg className="lucide lucide-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg> 
                            Flat Volume Rate 
                        </div>
</div>

<div className="grid grid-cols-4 border-b hover:bg-white/[0.02] transition-colors group/row items-center border-white/5">
<div className="p-6 text-sm font-medium text-emerald-300"> Eco-Friendly </div>
<div className="p-6 text-sm font-mono text-sky-400/80"> Landfill </div>
<div className="p-6 text-sm font-mono text-indigo-500/80"> Landfill </div>
<div className="p-6 text-sm text-emerald-100 bg-emerald-900/[0.2] border-x border-emerald-500/10 font-mono flex items-center gap-2">
<svg className="lucide lucide-leaf" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 13-11 18Z"></path>
<path d="M12 22v-8.3a4 4 0 0 0-1.17-2.8"></path>
</svg> 
                            Sorted &amp; Recycled 
                        </div>
</div>

<div className="grid grid-cols-4 border-b hover:bg-white/[0.02] transition-colors group/row items-center border-white/5">
<div className="p-6 text-sm font-medium text-emerald-300"> Clean Up </div>
<div className="p-6 text-sm font-mono text-sky-400/80"> None </div>
<div className="p-6 text-sm font-mono text-sky-400/80"> Basic </div>
<div className="p-6 text-sm text-emerald-100 bg-emerald-900/[0.2] border-x border-emerald-500/10 font-mono flex items-center gap-2">
<svg className="lucide lucide-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg> 
                            Swept Finish 
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full max-w-7xl z-20 mx-auto my-32 pr-6 pl-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="">
<h3 className="text-2xl text-white font-serif mb-8">About Us</h3>
<div className="space-y-4">
<details className="group border-b pb-4 border-white/10">
<summary className="flex cursor-pointer font-medium items-center justify-between text-emerald-200">
<span className="">At Triple R Contractors, We are dedicated to providing junk removal services at the highest level. Serving Metro Atlanta for over 3 years, Our team is experienced and passionate about helping you reclaim your space. From residential homes, to large commercial properties, Triple R Contractors can be trusted to remove junk of any kind in the most efficient way possible.</span>
<span className="transition group-open:rotate-180">
</span>
</summary>
<p className="group-open:animate-fadeIn mt-3 text-sm text-emerald-400"> We take almost everything: furniture, appliances, electronics, yard waste, and construction debris. Hazardous materials (paint, chemicals) are excluded. </p>
</details>
</div>
</div><div className="">
<h3 className="text-2xl text-white font-serif mb-8"> What our clients say </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-4 rounded-xl border bg-white/5 border-white/5">
<p className="text-sm mb-3 text-emerald-300"> "I had a garage full of 20 years of stuff. Triple R cleared it in 3 hours. Incredible." </p>
<div className="text-xs font-medium text-emerald-500"> — Sarah M., Homeowner </div>
</div>
<div className="p-4 rounded-xl border bg-white/5 border-white/5">
<p className="text-sm mb-3 text-emerald-300"> "Professional crew. They didn't scratch a single wall moving the piano out." </p>
<div className="text-xs font-medium text-emerald-500"> — James P., Estate Mgr </div>
</div>
<div className="p-4 rounded-xl border bg-white/5 border-white/5">
<p className="text-sm mb-3 text-emerald-300"> "Knowing they donate the furniture instead of trashing it made me choose them." </p>
<div className="text-xs font-medium text-emerald-500"> — Emily R. </div>
</div>
<div className="p-4 rounded-xl border bg-white/5 border-white/5">
<p className="text-sm mb-3 text-emerald-300"> "Cheaper than the dumpster rental I looked at, and I didn't have to lift a finger." </p>
<div className="text-xs font-medium text-emerald-500"> — Mark D. </div>
</div>
</div>
</div>

</div>
</section>

<section className="overflow-hidden bg-black w-full border-white/10 border-t pt-32 pb-32 relative">

<div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 pointer-events-none to-black"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<h2 className="leading-none md:text-[80px] text-6xl text-emerald-500 tracking-tight font-serif mb-8">Ready to clear the clutter?</h2>
<p className="text-xl font-light max-w-2xl mb-12 text-emerald-400"> 
                Stop letting clutter pay rent. Get a free estimate today and have your space back by tomorrow. 
            </p>
<div className="flex flex-col md:flex-row gap-4 items-center">
<button className="h-14 px-8 rounded-full bg-emerald-600 font-semibold text-lg hover:bg-emerald-500 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center gap-2 text-white"> 
                    Get Your Free Quote 
                    <svg aria-hidden="true" className="iconify text-xl iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="text-sm mt-4 md:mt-0 text-emerald-500"> 
                    Serving the greater metro area. 
                </div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6 relative z-20 border-white/5">
<div className="flex items-center gap-2 text-white">
<svg className="iconify text-emerald-500 text-xl iconify--lucide" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m19 9l-5 5l-4-4l-3 3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-sm font-semibold tracking-tight uppercase">Triple R Contractor</span>
</div>
<div className="text-xs font-mono text-emerald-600"> 
                © 2024 Triple R Contractor. Licensed &amp; Insured. 
            </div>
</div>
</section>
</main>

<div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t to-transparent pointer-events-none z-20 from-black via-black/90"></div>


    </>
  );
}
