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


function toggleFAQ(button) {
  const content = button.querySelector('.hidden');
  const icon = button.querySelector('svg');
  
  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    icon.style.transform = 'rotate(180deg)';
  } else {
    content.classList.add('hidden');
    icon.style.transform = 'rotate(0deg)';
  }
}



      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
        const y = document.getElementById('y');
        if (y) y.textContent = new Date().getFullYear();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="inline-flex items-center gap-2" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center ring-1 ring-white/10 bg-zinc-800 rounded-full">
<svg className="lucide lucide-orbit h-4 w-4 text-zinc-200" data-lucide="orbit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.341 6.484A10 10 0 0 1 10.266 21.85"></path><path d="M3.659 17.516A10 10 0 0 1 13.74 2.152"></path><circle cx="12" cy="12" r="3"></circle><circle cx="19" cy="5" r="2"></circle><circle cx="5" cy="19" r="2"></circle></svg>
</span>
<span className="text-2xl font-semibold tracking-tight font-playfair">Arcflow</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
<a className="hover:text-zinc-100 transition-colors font-sans" href="#">Platform</a>
<a className="hover:text-zinc-100 transition-colors font-sans" href="#">Solutions</a>
<a className="hover:text-zinc-100 transition-colors font-sans" href="#">Pricing</a>
<a className="hover:text-zinc-100 transition-colors font-sans" href="#">Docs</a>
<a className="hover:text-zinc-100 transition-colors font-sans" href="#">Changelog</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex gap-2 hover:text-zinc-100 hover:bg-white/5 ring-1 ring-white/5 text-sm text-zinc-300 rounded-md pt-1.5 pr-3 pb-1.5 pl-3 items-center">
<span className="font-medium font-sans">Log in</span>
</button>
<button aria-label="Create Account" className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(255,255,255,0.05)] hover:shadow-[0_12px_20px_-6px_rgba(255,255,255,0.1)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 transform-gpu hover:-translate-y-0.5 text-white rounded-lg pt-[1px] pr-[1px] pb-[1px] pl-[1px] items-center justify-center" role="button" style={{backgroundImage: 'linear-gradient(144deg,rgba(255,255,255,0.3), rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.2))'}} type="button">
<span className="flex items-center justify-center gap-2 leading-none min-w-[140px] w-full h-full transition-colors duration-300 group-hover:bg-black/50 font-medium bg-black/80 rounded-lg pt-1.5 pr-3 pb-1.5 pl-3">
<span className="text-sm">Create Account</span>
</span>
</button>
<button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md ring-1 ring-white/10 hover:bg-white/5">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden h-[850px]">
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="X0ErZR3QhPzMHfKgBbJJ"></div>
<div className="max-w-7xl sm:px-6 lg:px-8 sm:pt-20 mr-auto ml-auto pt-14 pr-4 pl-4">
<div className="max-w-3xl">
<div className="inline-flex gap-2 text-xs text-zinc-300 bg-white/5 border-white/10 border rounded-full pt-1 pr-3 pb-1 pl-3 items-center">
<span className="font-medium font-sans">New: Insight Engine</span>
<svg className="lucide lucide-arrow-right h-3.5 w-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<h1 className="sm:text-6xl md:text-7xl text-4xl font-light tracking-tighter font-geist mt-6">Arcflow is the system for planning and shipping software</h1>
<p className="max-w-2xl sm:text-lg text-base text-zinc-300 mt-5">
            Streamline issues, projects, and roadmaps in one fast, elegant workspace. Stay focused, automate the busywork, and ship work that matters.
          </p>
<div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
<button aria-label="Create Account" className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(255,255,255,0.05)] hover:shadow-[0_12px_20px_-6px_rgba(255,255,255,0.1)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 transform-gpu hover:-translate-y-0.5 text-white rounded-lg pt-[1px] pr-[1px] pb-[1px] pl-[1px] items-center justify-center" role="button" style={{backgroundImage: 'linear-gradient(144deg,rgba(255,255,255,0.3), rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.2))'}} type="button">
<span className="flex items-center justify-center gap-2 text-[15px] leading-none min-w-[140px] w-full h-full transition-colors duration-300 group-hover:bg-black/50 font-medium bg-black/80 rounded-lg pt-3 pr-5 pb-3 pl-5">
<span className="">Create Account</span>
</span>
</button>
<a className="inline-flex items-center gap-2 ring-1 ring-white/5 hover:bg-white/5 text-sm font-medium text-zinc-200 rounded-md pt-2.5 pr-4 pb-2.5 pl-4" href="#">
<span className="font-sans">Tour the product</span>
</a>
</div>
</div>

<div className="relative sm:mt-20 mt-16 perspective-none">
<div className="absolute inset-x-0 -bottom-8 mx-auto h-40 max-w-6xl bg-gradient-to-t from-black/60 to-transparent blur-2xl"></div>
<div className="max-w-6xl mr-auto ml-auto">
<div className="relative ring-1 ring-black/10 -translate-x-8 -translate-y-16 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] lg:scale-100 md:scale-75 origin-left w-[1200px] bg-gradient-to-b from-zinc-900/70 to-zinc-950/80 border-white/10 border rounded-2xl backdrop-blur-lg translate-x-8 scale-50 rotate-x-30 rotate-y-30 -rotate-z-20 perspective-none">

<div className="flex border-white/10 border-b pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-zinc-600"></span>
<span className="h-2.5 w-2.5 rounded-full bg-zinc-700"></span>
<span className="h-2.5 w-2.5 rounded-full bg-zinc-800"></span>
</div>
<div className="flex items-center gap-3 text-xs text-zinc-400">
<svg className="lucide lucide-cloud w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(161, 161, 170)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
<span className="font-sans">arcflow.app</span>
</div>
</div>
<div className="grid grid-cols-12">

<aside className="col-span-4 md:col-span-3 sm:p-4 border-white/10 border-r pt-3 pr-3 pb-3 pl-3">
<div className="mb-3 flex items-center gap-2 rounded-md bg-white/5 px-2 py-1.5 text-zinc-300 ring-1 ring-white/10">
<svg className="lucide lucide-search h-4 w-4 text-zinc-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full bg-transparent text-xs outline-none placeholder:text-zinc-500" placeholder="Search"/>
</div>
<div className="space-y-1">
<div className="flex items-center justify-between px-2 py-1.5 rounded-md bg-white/5 text-sm text-zinc-100">
<div className="flex items-center gap-2">
<svg className="lucide lucide-inbox h-4 w-4 text-indigo-400" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
<span className="font-medium font-sans">Inbox</span>
</div>
<span className="rounded-md bg-indigo-500/20 px-1.5 py-0.5 text-[10px] text-indigo-300 font-sans">24</span>
</div>
<button className="flex w-full items-center gap-2 px-2 py-1.5 rounded-md text-sm text-zinc-300 hover:bg-white/5 font-sans">
<svg className="lucide lucide-check-circle h-4 w-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> My issues
                    </button>
<button className="flex hover:bg-white/5 text-sm text-zinc-300 w-full rounded-md pt-1.5 pr-2 pb-1.5 pl-2 gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-flag h-4 w-4" data-lucide="flag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path></svg> Projects
                    </button>
<button className="flex w-full items-center gap-2 px-2 py-1.5 rounded-md text-sm text-zinc-300 hover:bg-white/5 font-sans">
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> Roadmap
                    </button>
<button className="flex w-full items-center gap-2 px-2 py-1.5 rounded-md text-sm text-zinc-300 hover:bg-white/5 font-sans">
<svg className="lucide lucide-users h-4 w-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg> Teams
                    </button>
</div>
<div className="mt-4">
<p className="px-2 text-[11px] uppercase tracking-wide text-zinc-500 font-sans">Favorites</p>
<div className="mt-1 space-y-1">
<button className="flex w-full gap-2 hover:bg-white/5 text-sm text-zinc-300 rounded-md pt-1.5 pr-2 pb-1.5 pl-2 items-center">
<svg className="lucide lucide-smartphone h-4 w-4" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg> Mobile Core
                      </button>
<button className="flex w-full items-center gap-2 px-2 py-1.5 rounded-md text-sm text-zinc-300 hover:bg-white/5 font-sans">
<svg className="lucide lucide-cpu h-4 w-4" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg> API Platform
                      </button>
</div>
</div>
</aside>

<main className="col-span-8 md:col-span-9">
<div className="grid grid-cols-12">

<section className="col-span-6 sm:p-4 border-white/10 border-r pt-3 pr-3 pb-3 pl-3">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-zinc-200 tracking-tight font-sans">Inbox</h3>
<div className="flex items-center gap-2 text-zinc-400">
<svg className="lucide lucide-refresh-ccw h-4 w-4" data-lucide="refresh-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg>
<svg className="lucide lucide-bell h-4 w-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</div>
</div>
<ul className="mt-3 space-y-2">

<li className="rounded-lg bg-white/5 p-2 ring-1 ring-white/10 hover:bg-white/10">
<div className="flex items-start gap-3">
<img alt="" className="h-7 w-7 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d3cb9d4-adbe-41e5-a351-a4a6c22d6037_320w.jpg" style={{}}/>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium">ENG-241 Improve image processing speed</p>
<span className="text-[10px] text-zinc-400 font-sans">12m</span>
</div>
<p className="mt-0.5 line-clamp-1 text-xs text-zinc-400 font-sans">Prototype SIMD path found 35% faster on arm64. Need QA signoff.</p>
<div className="mt-1 flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/15 px-1.5 py-0.5 text-[10px] text-emerald-300 font-sans">
<svg className="lucide lucide-zap h-3 w-3" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> Fast Track
                                </span>
<span className="inline-flex items-center gap-1 rounded-md bg-indigo-500/15 px-1.5 py-0.5 text-[10px] text-indigo-300 font-sans">
<svg className="lucide lucide-git-branch h-3 w-3" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg> api-media
                                </span>
</div>
</div>
</div>
</li>

<li className="rounded-lg p-2 hover:bg-white/5">
<div className="flex items-start gap-3">
<img alt="" className="h-7 w-7 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dba30d89-2f48-41ff-b46e-b79d6a8b96ad_320w.jpg" style={{}}/>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-zinc-200 font-sans">DES-112 Update dashboard empty state</p>
<span className="text-[10px] text-zinc-400 font-sans">47m</span>
</div>
<p className="mt-0.5 line-clamp-1 text-xs text-zinc-400 font-sans">Illustrations replaced with minimal 3D renders and fewer steps.</p>
</div>
</div>
</li>

<li className="rounded-lg p-2 hover:bg-white/5">
<div className="flex items-start gap-3">
<img alt="" className="h-7 w-7 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7f6feef-fd3e-4901-bce6-7271aa74dc87_320w.jpg" style={{}}/>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-zinc-200 font-sans">OPS-58 Incident: degraded CDN in eu-west</p>
<span className="text-[10px] text-zinc-400 font-sans">2h</span>
</div>
<p className="mt-0.5 line-clamp-1 text-xs text-zinc-400 font-sans">Traffic rerouted. Postmortem draft prepared.</p>
</div>
</div>
</li>
</ul>
</section>

<section className="col-span-6 sm:p-4 pt-3 pr-3 pb-3 pl-3">
<div className="flex gap-2 text-xs text-zinc-400 items-center">
<svg className="lucide lucide-folder-tree h-4 w-4" data-lucide="folder-tree" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"></path><path d="M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"></path><path d="M3 5a2 2 0 0 0 2 2h3"></path><path d="M3 3v13a2 2 0 0 0 2 2h3"></path></svg>
<span className="font-sans">Engineering</span>
<svg className="lucide lucide-chevron-right h-3 w-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<span className="font-sans">Media</span>
<svg className="lucide lucide-chevron-right h-3 w-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<span className="font-sans">ENG-241</span>
</div>
<h4 className="text-lg font-semibold tracking-tight mt-2">Refactor image pipeline</h4>
<div className="mt-3 space-y-2">
<div className="rounded-md bg-black/30 p-3 ring-1 ring-white/10">
<div className="mb-2 flex flex-wrap gap-2">
<span className="rounded bg-white/10 px-2 py-0.5 text-[10px] text-zinc-300 font-sans">comment.documentContent</span>
<span className="rounded bg-white/10 px-2 py-0.5 text-[10px] text-zinc-300 font-sans">CachePromise</span>
<span className="rounded bg-white/10 px-2 py-0.5 text-[10px] text-zinc-300 font-sans">lazyMany</span>
</div>
<pre className="overflow-x-auto text-[11px] leading-5 text-zinc-300"><code className="font-sans">// pseudo-code
export async function optimize(input) {
  const src = await read(input)
  const sizes = [640, 1280, 1920]
  const variants = await Promise.all(sizes.map(s =&gt; resize(src, s)))
  return await write('optimized', variants)
}</code></pre>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-zinc-400">
<svg className="lucide lucide-link h-4 w-4" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
<span className="font-sans">Links</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-md bg-amber-500/15 px-1.5 py-0.5 text-[10px] text-amber-300 font-sans">
<svg className="lucide lucide-timer h-3 w-3" data-lucide="timer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg> In review
                            </span>
<button className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs ring-1 ring-white/10 hover:bg-white/5">
<svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
<span className="font-sans">Notify</span>
</button>
</div>
</div>
<div className="mt-2 grid grid-cols-3 gap-2">
<img alt="" className="h-16 w-full object-cover rounded-md" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/74356e5b-a09c-458d-8481-ba40b9398881_320w.jpg" style={{}}/>
<img alt="" className="h-16 w-full object-cover rounded-md" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/19f52620-723f-4d8e-8c88-42365d783cc5_320w.jpg" style={{}}/>
<img alt="" className="h-16 w-full object-cover rounded-md" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f2e8fff7-47a1-4d3b-b92a-eb9a07fb90f8_320w.jpg" style={{}}/>
</div>
</div>
</section>
</div>
</main>
</div>
</div>
</div>
</div>
</div>
</section><section className="py-24 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center max-w-3xl mx-auto mb-16">
<div className="inline-flex gap-2 text-xs text-zinc-300 bg-white/5 border-white/10 border rounded-full pt-1 pr-3 pb-1 pl-3 items-center mb-6">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
<span className="font-medium font-sans">Platform Features</span>
</div>
<h2 className="text-4xl sm:text-5xl font-light tracking-tighter font-geist text-white mb-4">Everything you need to ship faster</h2>
<p className="text-lg text-zinc-300 font-sans">Powerful tools that adapt to your workflow, from initial planning to final deployment.</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

<article className="lg:col-span-2 group relative overflow-hidden transition-all duration-300 hover:shadow-2xl bg-zinc-900/50 border-white/10 border rounded-2xl backdrop-blur-sm">
<div className="p-6 sm:p-8">

<div className="relative h-64 sm:h-80 rounded-xl bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 ring-1 ring-inset ring-white/5 mb-6">

<div className="absolute inset-4 rounded-lg bg-zinc-950/90 backdrop-blur border border-white/10">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
<div className="flex items-center gap-3">
<span className="h-2 w-2 rounded-full bg-red-500/60"></span>
<span className="h-2 w-2 rounded-full bg-yellow-500/60"></span>
<span className="h-2 w-2 rounded-full bg-green-500/60"></span>
</div>
<span className="text-xs text-zinc-400 font-sans">Insight Engine</span>
</div>

<div className="grid grid-cols-12 gap-3 p-4 h-full">

<div className="col-span-8 bg-white/5 rounded-lg p-3 border border-white/5">
<div className="flex items-center justify-between mb-3">
<span className="text-xs text-zinc-300 font-medium">Team Velocity</span>
<span className="text-xs text-emerald-400">↗ +23%</span>
</div>
<svg className="w-full h-12 text-zinc-700" viewbox="0 0 200 60">
<defs>
</defs>
<path d="M 0 50 Q 25 45 50 40 T 100 25 T 150 20 T 200 15" fill="none" stroke="#10B981" strokeLinecap="round" strokeWidth="2"></path>
<path d="M 0 50 Q 25 45 50 40 T 100 25 T 150 20 T 200 15 L 200 60 L 0 60 Z" fill="url(#velocityGradient)"></path>
</svg>
</div>

<div className="col-span-4 space-y-2">
<div className="bg-white/5 rounded-lg p-3 border border-white/5">
<div className="text-xs text-zinc-400 mb-1">Active Issues</div>
<div className="text-lg font-semibold text-white">127</div>
</div>
<div className="bg-white/5 rounded-lg p-3 border border-white/5">
<div className="text-xs text-zinc-400 mb-1">Cycle Time</div>
<div className="text-lg font-semibold text-emerald-400">2.4d</div>
</div>
</div>

<div className="col-span-12 space-y-2">
<div className="flex items-center gap-3">
<span className="text-xs text-zinc-400 w-20">Frontend</span>
<div className="flex-1 bg-zinc-800 rounded-full h-1.5">
<div className="bg-blue-500 h-1.5 rounded-full w-3/4"></div>
</div>
<span className="text-xs text-blue-400">75%</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-zinc-400 w-20">Backend</span>
<div className="flex-1 bg-zinc-800 rounded-full h-1.5">
<div className="bg-emerald-500 h-1.5 rounded-full w-4/5"></div>
</div>
<span className="text-xs text-emerald-400">80%</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-zinc-400 w-20">Design</span>
<div className="flex-1 bg-zinc-800 rounded-full h-1.5">
<div className="bg-purple-500 h-1.5 rounded-full w-1/2"></div>
</div>
<span className="text-xs text-purple-400">50%</span>
</div>
</div>
</div>
</div>

<div className="absolute top-6 right-6 w-48 space-y-2">
<div className="bg-zinc-900/95 border border-emerald-500/30 rounded-lg p-2 backdrop-blur">
<div className="flex items-center gap-2">
<div className="h-2 w-2 bg-emerald-500 rounded-full"></div>
<span className="text-xs text-emerald-300">Deploy completed</span>
</div>
</div>
<div className="bg-zinc-900/95 border border-blue-500/30 rounded-lg p-2 backdrop-blur">
<div className="flex items-center gap-2">
<div className="h-2 w-2 bg-blue-500 rounded-full"></div>
<span className="text-xs text-blue-300">PR merged</span>
</div>
</div>
</div>
</div>

<div className="">
<div className="flex items-center gap-3 mb-4">
<h3 className="sm:text-3xl text-2xl font-normal text-white tracking-tight font-geist">Advanced Analytics</h3>
</div>
<p className="text-zinc-300 text-base leading-relaxed font-sans">Get deep insights into your team's performance with automated metrics, cycle time analysis, and predictive forecasting to optimize your workflow.</p>
<div className="mt-6">
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-zinc-300 transition-colors" href="#">
                Explore analytics
                <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</article>

<article className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl bg-zinc-900/50 border-white/10 border rounded-2xl backdrop-blur-sm">
<div className="p-6">

<div className="relative h-48 rounded-xl bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 ring-1 ring-inset ring-white/5 mb-6">

<div className="absolute inset-3 rounded-lg bg-zinc-950/90 backdrop-blur border border-white/10 overflow-hidden">
<div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
<div className="flex items-center gap-2">
<div className="h-2 w-2 bg-red-500/60 rounded-full"></div>
<div className="h-2 w-2 bg-yellow-500/60 rounded-full"></div>
<div className="h-2 w-2 bg-green-500/60 rounded-full"></div>
</div>
<span className="text-xs text-zinc-400">main.js</span>
</div>
<div className="p-3 space-y-1">
<div className="flex">
<span className="text-xs text-zinc-500 w-4">1</span>
<span className="text-xs text-blue-400">import</span>
<span className="text-xs text-zinc-300 ml-1">{ createIssue }</span>
</div>
<div className="flex">
<span className="text-xs text-zinc-500 w-4">2</span>
<span className="text-xs text-purple-400">const</span>
<span className="text-xs text-zinc-300 ml-1">issue =</span>
<span className="text-xs text-yellow-400 ml-1">'ENG-241'</span>
</div>
<div className="flex">
<span className="text-xs text-zinc-500 w-4">3</span>
<span className="text-xs text-emerald-400">await</span>
<span className="text-xs text-zinc-300 ml-1">deploy()</span>
</div>
<div className="flex">
<span className="text-xs text-zinc-500 w-4">4</span>
<span className="text-xs text-zinc-600"># Auto-linked to PR</span>
</div>
</div>
</div>

</div>

<div className="">
<div className="flex gap-3 mb-4 items-center">
<h3 className="text-xl font-normal text-white tracking-tight font-geist">Smart Linking</h3>
</div>
<p className="text-zinc-300 text-sm leading-relaxed font-sans">Automatically connect commits, PRs, and deployments to issues. Never lose context across your development workflow.</p>
<div className="mt-6">
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-zinc-300 transition-colors" href="#">
                View integrations
                <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</article>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

<article className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl bg-zinc-900/50 border-white/10 border rounded-2xl backdrop-blur-sm">
<div className="p-6">

<div className="relative h-48 rounded-xl bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 ring-1 ring-inset ring-white/5 mb-6">

<div className="absolute inset-0 flex items-center justify-center">
<div className="relative">

<div className="w-16 h-16 flex ring-1 ring-white/20 bg-gradient-to-r from-slate-900 to-slate-700 rounded-full items-center justify-center">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path>
<polyline className="" points="3,7 12,13 21,7"></polyline>
</svg>
</div>

<img alt="" className="absolute -top-8 -left-4 w-10 h-10 object-cover border-white/30 border rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5fe82ca0-ec91-4df3-b0fb-d97b643f2178_320w.jpg"/>
<img alt="" className="absolute -top-6 -right-6 w-8 h-8 object-cover border-white/30 border rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec17a2e2-e4f4-4164-b631-f074e640a0c1_320w.jpg"/>
<img alt="" className="absolute -bottom-8 -right-2 w-10 h-10 object-cover border-white/30 border rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e08496f1-bdba-4cb4-83c1-96ac5be57ace_320w.jpg"/>
<img alt="" className="absolute -bottom-6 -left-6 w-8 h-8 object-cover border-white/30 border-1 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1bfea42-f5c9-4b52-974e-36fe36212b17_320w.jpg"/>

<div className="absolute inset-0 pointer-events-none">
<svg className="w-full h-full" viewbox="0 0 100 100">
<line stroke="rgba(255,255,255,0.1)" stroke-dasharray="2,2" strokeWidth="1" x1="50" x2="25" y1="50" y2="25"></line>
<line stroke="rgba(255,255,255,0.1)" stroke-dasharray="2,2" strokeWidth="1" x1="50" x2="75" y1="50" y2="20"></line>
<line stroke="rgba(255,255,255,0.1)" stroke-dasharray="2,2" strokeWidth="1" x1="50" x2="80" y1="50" y2="80"></line>
<line stroke="rgba(255,255,255,0.1)" stroke-dasharray="2,2" strokeWidth="1" x1="50" x2="20" y1="50" y2="75"></line>
</svg>
</div>
</div>
</div>
</div>

<div className="">
<div className="flex items-center gap-3 mb-4">
<h3 className="text-xl font-normal text-white tracking-tight font-geist">Team Collaboration</h3>
</div>
<p className="text-zinc-300 text-sm leading-relaxed font-sans">Real-time updates, smart notifications, and seamless handoffs keep everyone synchronized across time zones.</p>
<div className="mt-6">
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-zinc-300 transition-colors" href="#">
                See team features
                <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</article>

<article className="lg:col-span-2 group relative overflow-hidden transition-all duration-300 hover:shadow-2xl bg-zinc-900/50 border-white/10 border rounded-2xl backdrop-blur-sm">
<div className="p-6 sm:p-8">

<div className="relative h-64 sm:h-80 rounded-xl bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 ring-1 ring-inset ring-white/5 mb-6">

<div className="absolute inset-4">

<div className="absolute top-4 left-8 w-16 h-12 bg-blue-500/20 border border-blue-500/40 rounded-lg flex items-center justify-center">
<svg className="h-5 w-5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="16 18 22 12 16 6"></polyline>
<polyline points="8 6 2 12 8 18"></polyline>
</svg>
</div>
<div className="absolute top-4 right-8 w-16 h-12 bg-emerald-500/20 border border-emerald-500/40 rounded-lg flex items-center justify-center">
<svg className="h-5 w-5 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
<polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
<polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
</svg>
</div>
<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-purple-500/20 border border-purple-500/40 rounded-lg flex items-center justify-center">
<svg className="h-5 w-5 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path className="" d="m9 12 2 2 4-4"></path>
</svg>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" viewbox="0 0 300 200">
<defs>
<marker id="arrowhead" markerheight="7" markerwidth="10" orient="auto" refx="0" refy="3.5">
<polygon fill="rgba(255,255,255,0.4)" points="0 0, 10 3.5, 0 7"></polygon>
</marker>
</defs>
<path d="M 80 25 Q 150 15 220 25" fill="none" marker-end="url(#arrowhead)" stroke="rgba(255,255,255,0.3)" stroke-dasharray="4,4" strokeWidth="2">
<animate attributename="stroke-dashoffset" dur="2s" repeatcount="indefinite" values="0;-8"></animate>
</path>
<path d="M 220 40 Q 200 100 150 150" fill="none" marker-end="url(#arrowhead)" stroke="rgba(255,255,255,0.3)" stroke-dasharray="4,4" strokeWidth="2">
<animate attributename="stroke-dashoffset" dur="2s" repeatcount="indefinite" values="0;-8"></animate>
</path>
<path d="M 140 150 Q 100 100 80 40" fill="none" marker-end="url(#arrowhead)" stroke="rgba(255,255,255,0.3)" stroke-dasharray="4,4" strokeWidth="2">
<animate attributename="stroke-dashoffset" dur="2s" repeatcount="indefinite" values="0;-8"></animate>
</path>
</svg>

<div className="absolute top-20 left-4 space-y-1">
<div className="flex items-center gap-2 text-xs">
<div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></div>
<span className="text-emerald-400">Tests passed</span>
</div>
<div className="flex items-center gap-2 text-xs">
<div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse"></div>
<span className="text-blue-400">Building...</span>
</div>
<div className="flex items-center gap-2 text-xs">
<div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
<span className="text-yellow-400">Deploy queued</span>
</div>
</div>
</div>
</div>

<div className="">
<div className="flex items-center gap-3 mb-4">
<h3 className="sm:text-3xl text-2xl font-normal text-white tracking-tight font-geist">Automated Workflows</h3>
</div>
<p className="text-zinc-300 text-base leading-relaxed font-sans">Streamline your pipeline with intelligent automation. From code to deployment, reduce manual work and eliminate bottlenecks with smart triggers and actions.</p>
<div className="mt-6">
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-zinc-300 transition-colors" href="#">
                Build workflows
                <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</article>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<article className="lg:col-span-2 group relative overflow-hidden transition-all duration-300 hover:shadow-2xl bg-zinc-900/50 border-white/10 border rounded-2xl backdrop-blur-sm">
<div className="p-6 sm:p-8">

<div className="relative h-64 sm:h-80 rounded-xl bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 ring-1 ring-inset ring-white/5 mb-6">

<div className="absolute inset-4 rounded-lg bg-zinc-950/90 backdrop-blur border border-white/10 overflow-hidden">
<div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
<span className="text-sm text-zinc-300 font-medium">Security Overview</span>
<span className="text-xs px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">All Clear</span>
</div>
<div className="p-4 grid grid-cols-2 gap-4 h-full">

<div className="space-y-3">
<div className="text-xs text-zinc-400 mb-2">Vulnerability Scan</div>
<div className="space-y-2">
<div className="flex items-center justify-between">
<span className="text-xs text-zinc-300">Dependencies</span>
<span className="text-xs text-emerald-400">✓ Clean</span>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-zinc-300">Code Quality</span>
<span className="text-xs text-emerald-400">✓ A+</span>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-zinc-300">Secrets</span>
<span className="text-xs text-emerald-400">✓ Secure</span>
</div>
</div>
</div>

<div className="space-y-3">
<div className="text-xs text-zinc-400 mb-2">Access Control</div>
<div className="space-y-2">
<div className="flex items-center gap-2">
<div className="h-6 w-6 bg-blue-500/20 rounded border border-blue-500/40 flex items-center justify-center">
<svg className="h-3 w-3 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<circle cx="12" cy="16" r="1"></circle>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
<span className="text-xs text-zinc-300">2FA Enabled</span>
</div>
<div className="flex items-center gap-2">
<div className="h-6 w-6 bg-emerald-500/20 rounded border border-emerald-500/40 flex items-center justify-center">
<svg className="h-3 w-3 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
</svg>
</div>
<span className="text-xs text-zinc-300">SSO Active</span>
</div>
</div>
</div>

<div className="col-span-2 mt-2">
<div className="text-xs text-zinc-400 mb-2">Recent Activity</div>
<div className="space-y-1 text-xs">
<div className="flex items-center justify-between p-2 bg-white/5 rounded border border-white/5">
<span className="text-zinc-300">Admin access granted</span>
<span className="text-zinc-500">2m ago</span>
</div>
<div className="flex items-center justify-between p-2 bg-white/5 rounded border border-white/5">
<span className="text-zinc-300">Permissions updated</span>
<span className="text-zinc-500">5m ago</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="">
<div className="flex items-center gap-3 mb-4">
<h3 className="sm:text-3xl text-2xl font-normal text-white tracking-tight font-geist">Enterprise Security</h3>
</div>
<p className="text-zinc-300 text-base leading-relaxed font-sans">SOC2 compliant with advanced security controls, automated vulnerability scanning, and comprehensive audit trails to keep your data safe.</p>
<div className="mt-6">
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-zinc-300 transition-colors" href="#">
                Security details
                <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</article>

<article className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl bg-zinc-900/50 border-white/10 border rounded-2xl backdrop-blur-sm">
<div className="p-6">

<div className="relative h-48 rounded-xl bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 ring-1 ring-inset ring-white/5 mb-6">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-24 h-40 bg-zinc-950/90 rounded-2xl border-2 border-white/20 overflow-hidden">

<div className="h-6 bg-zinc-900 flex items-center justify-center">
<div className="w-12 h-1 bg-white/30 rounded-full"></div>
</div>

<div className="p-2 space-y-2">
<div className="h-3 bg-blue-500/30 rounded"></div>
<div className="space-y-1">
<div className="h-2 bg-white/10 rounded w-3/4"></div>
<div className="h-2 bg-white/10 rounded w-1/2"></div>
</div>
<div className="flex gap-1">
<div className="flex-1 h-8 bg-emerald-500/20 rounded border border-emerald-500/40"></div>
<div className="flex-1 h-8 bg-white/10 rounded"></div>
</div>
<div className="space-y-1">
<div className="h-1 bg-white/10 rounded"></div>
<div className="h-1 bg-white/10 rounded w-2/3"></div>
</div>
</div>

</div>
</div>
</div>

<div className="">
<div className="flex items-center gap-3 mb-4">
<h3 className="text-xl font-normal text-white tracking-tight font-geist">Mobile Ready</h3>
</div>
<p className="text-zinc-300 text-sm leading-relaxed font-sans">Stay productive anywhere with our native mobile apps. Full feature parity with offline sync and push notifications.</p>
<div className="mt-6">
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-zinc-300 transition-colors" href="#">
                Download apps
                <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</article>
</div>
</div>
</section><section className="relative bg-black pt-24 pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center max-w-3xl mx-auto mb-16">
<div className="inline-flex gap-2 text-xs text-zinc-300 bg-white/5 border-white/10 border rounded-full pt-1 pr-3 pb-1 pl-3 items-center mb-6">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="21" r="1"></circle>
<circle cx="19" cy="21" r="1"></circle>
<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
</svg>
<span className="font-medium font-sans">Pricing</span>
</div>
<h2 className="text-4xl sm:text-5xl font-light tracking-tighter font-geist text-white mb-4">Simple, transparent pricing</h2>
<p className="text-lg text-zinc-300 font-sans">Start building for free, then add a site plan to go live. Account plans unlock additional features.</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

<div className="relative group rounded-2xl bg-zinc-900/50 border border-white/10 backdrop-blur-sm p-8">
<div className="mb-6">
<h3 className="text-xl font-semibold text-white font-geist">Starter</h3>
<p className="text-zinc-400 text-sm mt-2 font-sans">Perfect for personal projects and small teams getting started.</p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-light text-white font-geist">$0</span>
<span className="text-zinc-400 font-sans">/month</span>
</div>
<p className="text-xs text-zinc-400 mt-1 font-sans">Free forever</p>
</div>
<ul className="space-y-3 mb-8 text-sm">
<li className="flex items-center gap-3">
<svg className="h-4 w-4 text-emerald-400 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-zinc-300 font-sans">Up to 5 team members</span>
</li>
<li className="flex items-center gap-3">
<svg className="h-4 w-4 text-emerald-400 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-zinc-300 font-sans">Unlimited personal projects</span>
</li>
<li className="flex items-center gap-3">
<svg className="h-4 w-4 text-emerald-400 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-zinc-300 font-sans">Basic analytics</span>
</li>
</ul>
<button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 rounded-lg py-3 px-4 text-sm font-medium transition-all duration-200 font-sans">
          Get Started
        </button>
</div>

<div className="relative group rounded-2xl bg-zinc-900/50 border-2 border-white/30 backdrop-blur-sm p-8">

<div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
<span className="bg-white text-black text-xs font-semibold px-3 py-1 rounded-full font-sans">Most Popular</span>
</div>
<div className="mb-6">
<h3 className="text-xl font-semibold text-white font-geist">Pro</h3>
<p className="text-zinc-400 text-sm mt-2 font-sans">For growing teams that need more power and collaboration features.</p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-light text-white font-geist">$19</span>
<span className="text-zinc-400 font-sans">/member/month</span>
</div>
<p className="text-xs text-zinc-400 mt-1 font-sans">Billed annually or $24 monthly</p>
</div>
<ul className="space-y-3 mb-8 text-sm">
<li className="flex items-center gap-3">
<svg className="h-4 w-4 text-emerald-400 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-zinc-300 font-sans">Everything in Starter</span>
</li>
<li className="flex items-center gap-3">
<svg className="h-4 w-4 text-emerald-400 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-zinc-300 font-sans">Unlimited team members</span>
</li>
<li className="flex items-center gap-3">
<svg className="h-4 w-4 text-emerald-400 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-zinc-300 font-sans">Advanced analytics &amp; insights</span>
</li>
</ul>
<button aria-label="Start Pro Trial" className="group relative inline-flex w-full shadow-[0_8px_16px_-4px_rgba(255,255,255,0.05)] hover:shadow-[0_12px_20px_-6px_rgba(255,255,255,0.1)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 transform-gpu hover:-translate-y-0.5 text-white rounded-lg pt-[1px] pr-[1px] pb-[1px] pl-[1px] items-center justify-center" role="button" style={{backgroundImage: 'linear-gradient(144deg,rgba(255,255,255,0.3), rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.2))'}} type="button">
<span className="flex items-center justify-center gap-2 leading-none w-full h-full transition-colors duration-300 group-hover:bg-black/50 font-medium bg-black/80 rounded-lg pt-3 pr-4 pb-3 pl-4">
<span className="text-sm font-sans">Start Free Trial</span>
</span>
</button>
</div>

<div className="relative group rounded-2xl bg-zinc-900/50 border border-white/10 backdrop-blur-sm p-8">
<div className="mb-6">
<h3 className="text-xl font-semibold text-white font-geist">Enterprise</h3>
<p className="text-zinc-400 text-sm mt-2 font-sans">Advanced security and compliance features for large organizations.</p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-light text-white font-geist">$49</span>
<span className="text-zinc-400 font-sans">/member/month</span>
</div>
<p className="text-xs text-zinc-400 mt-1 font-sans">Custom pricing available</p>
</div>
<ul className="space-y-3 mb-8 text-sm">
<li className="flex items-center gap-3">
<svg className="h-4 w-4 text-emerald-400 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-zinc-300 font-sans">Everything in Pro</span>
</li>
<li className="flex items-center gap-3">
<svg className="h-4 w-4 text-emerald-400 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-zinc-300 font-sans">SOC2 compliance</span>
</li>
<li className="flex items-center gap-3">
<svg className="h-4 w-4 text-emerald-400 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-zinc-300 font-sans">SSO &amp; advanced security</span>
</li>
</ul>
<button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 rounded-lg py-3 px-4 text-sm font-medium transition-all duration-200 font-sans">
          Contact Sales
        </button>
</div>
</div>

<section className="relative z-10 sm:py-24 fade-in fade-in-delay-4 pt-8 pb-8" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-12">
<p className="uppercase text-xs font-medium text-zinc-500 tracking-wide">Trusted by teams at</p>
</div>

<div className="relative overflow-hidden">

<div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

<div className="ticker-track flex gap-16 pt-2 pb-2 items-center">

<div className="flex gap-16 shrink-0 items-center">
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">TechFlow</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter font-bricolage">Nexus Labs</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-merriweather">DataSync</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter font-instrument-serif">VisionCorp</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-playfair">CloudBase</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">InnovateTech</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter">FlowState</span>
</div>
</div>

<div className="flex items-center gap-16 shrink-0">
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">TechFlow</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter font-bricolage">Nexus Labs</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-merriweather">DataSync</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter font-instrument-serif">VisionCorp</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-playfair">CloudBase</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">InnovateTech</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter">FlowState</span>
</div>
</div>
</div>
</div>
</div>
<style>
            @keyframes ticker {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(-100%);
                }
            }
            
            .ticker-track {
                animation: ticker 40s linear infinite;
                width: calc(200% + 16px);
            }
            
            .ticker-track:hover {
                animation-play-state: paused;
            }
        </style>
</section>
</div>
</section><section className="py-24 relative">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center mb-16">
<div className="inline-flex gap-2 text-xs text-zinc-300 bg-white/5 border-white/10 border rounded-full pt-1 pr-3 pb-1 pl-3 items-center mb-6">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
<path d="M12 17h.01"></path>
</svg>
<span className="font-medium font-sans">FAQ</span>
</div>
<h2 className="text-4xl sm:text-5xl font-light tracking-tighter font-geist text-white mb-4">Frequently asked questions</h2>
<p className="text-lg text-zinc-300 font-sans">Everything you need to know about Arcflow and how it works.</p>
</div>

<div className="space-y-4">

<div className="group relative overflow-hidden bg-zinc-900/50 border border-white/10 rounded-xl backdrop-blur-sm">
<button className="w-full text-left p-6 hover:bg-white/5 transition-colors" onclick="toggleFAQ(this)">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium text-white font-geist pr-4">How does Arcflow compare to Linear or Jira?</h3>
<svg className="h-5 w-5 text-zinc-400 flex-shrink-0 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9l6 6 6-6"></path>
</svg>
</div>
<div className="mt-4 text-zinc-300 font-sans hidden">
<p>Arcflow combines the speed and simplicity of Linear with enterprise features comparable to Jira. We focus on intelligent automation, predictive analytics, and seamless integration across your development workflow. Unlike Linear, we offer advanced reporting and custom workflows. Unlike Jira, we maintain a clean, fast interface that doesn't slow your team down.</p>
</div>
</button>
</div>

<div className="group relative overflow-hidden bg-zinc-900/50 border border-white/10 rounded-xl backdrop-blur-sm">
<button className="w-full text-left p-6 hover:bg-white/5 transition-colors" onclick="toggleFAQ(this)">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium text-white font-geist pr-4">Can I migrate my existing data from other tools?</h3>
<svg className="h-5 w-5 text-zinc-400 flex-shrink-0 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9l6 6 6-6"></path>
</svg>
</div>
<div className="mt-4 text-zinc-300 font-sans hidden">
<p>Yes! We provide comprehensive migration tools for Linear, Jira, GitHub Issues, Asana, and more. Our migration service preserves your issue history, comments, attachments, and project structure. For Enterprise customers, we offer white-glove migration assistance to ensure a smooth transition with zero data loss.</p>
</div>
</button>
</div>

<div className="group relative overflow-hidden bg-zinc-900/50 border border-white/10 rounded-xl backdrop-blur-sm">
<button className="w-full text-left p-6 hover:bg-white/5 transition-colors" onclick="toggleFAQ(this)">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium text-white font-geist pr-4">What integrations do you support?</h3>
<svg className="h-5 w-5 text-zinc-400 flex-shrink-0 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9l6 6 6-6"></path>
</svg>
</div>
<div className="mt-4 text-zinc-300 font-sans hidden">
<p>Arcflow integrates with your entire development stack: GitHub, GitLab, Bitbucket, Slack, Discord, Figma, Notion, and dozens more. We support webhooks, REST APIs, and custom integrations. Our Smart Linking automatically connects commits, PRs, and deployments to relevant issues without manual work.</p>
</div>
</button>
</div>

<div className="group relative overflow-hidden bg-zinc-900/50 border border-white/10 rounded-xl backdrop-blur-sm">
<button className="w-full text-left p-6 hover:bg-white/5 transition-colors" onclick="toggleFAQ(this)">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium text-white font-geist pr-4">Is there a free trial available?</h3>
<svg className="h-5 w-5 text-zinc-400 flex-shrink-0 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9l6 6 6-6"></path>
</svg>
</div>
<div className="mt-4 text-zinc-300 font-sans hidden">
<p>Yes! Our Starter plan is free forever for up to 5 team members. For Pro and Enterprise features, we offer a 14-day free trial with no credit card required. You can upgrade, downgrade, or cancel anytime. We also provide demo environments for Enterprise customers to test advanced features.</p>
</div>
</button>
</div>

<div className="group relative overflow-hidden bg-zinc-900/50 border border-white/10 rounded-xl backdrop-blur-sm">
<button className="w-full text-left p-6 hover:bg-white/5 transition-colors" onclick="toggleFAQ(this)">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium text-white font-geist pr-4">How secure is my data?</h3>
<svg className="h-5 w-5 text-zinc-400 flex-shrink-0 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9l6 6 6-6"></path>
</svg>
</div>
<div className="mt-4 text-zinc-300 font-sans hidden">
<p>Security is our top priority. We're SOC2 Type II certified with end-to-end encryption, regular security audits, and compliance with GDPR, CCPA, and other privacy regulations. Your data is stored in secure cloud infrastructure with automated backups and 99.9% uptime SLA. Enterprise customers get additional security controls including SSO, advanced permissions, and audit logs.</p>
</div>
</button>
</div>

<div className="group relative overflow-hidden bg-zinc-900/50 border border-white/10 rounded-xl backdrop-blur-sm">
<button className="w-full text-left p-6 hover:bg-white/5 transition-colors" onclick="toggleFAQ(this)">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium text-white font-geist pr-4">Can I customize workflows for my team?</h3>
<svg className="h-5 w-5 text-zinc-400 flex-shrink-0 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9l6 6 6-6"></path>
</svg>
</div>
<div className="mt-4 text-zinc-300 font-sans hidden">
<p>Absolutely! Pro and Enterprise plans include powerful workflow automation. Create custom statuses, automated transitions, smart notifications, and triggered actions. Set up rules for auto-assignment, label management, and cross-project dependencies. Our visual workflow builder makes it easy to design processes that match your team's unique needs.</p>
</div>
</button>
</div>
</div>

<div className="mt-12 text-center">
<p className="text-zinc-400 text-sm mb-4 font-sans">Still have questions?</p>
<a className="inline-flex items-center gap-2 text-white hover:text-zinc-300 transition-colors font-sans" href="#">
<span className="font-medium">Contact our team</span>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</section>

<footer className="mt-24 border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center ring-1 ring-white/10 bg-zinc-800 rounded-full">
<svg className="lucide lucide-orbit h-4 w-4 text-zinc-200" data-lucide="orbit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.341 6.484A10 10 0 0 1 10.266 21.85"></path><path d="M3.659 17.516A10 10 0 0 1 13.74 2.152"></path><circle cx="12" cy="12" r="3"></circle><circle cx="19" cy="5" r="2"></circle><circle cx="5" cy="19" r="2"></circle></svg>
</span>
<span className="font-medium font-sans">Arcflow</span>
<span className="font-sans">© <span className="font-sans" id="y">2025</span></span>
</div>
<div className="flex items-center gap-6">
<a className="hover:text-zinc-200 font-sans" href="#">Privacy</a>
<a className="hover:text-zinc-200 font-sans" href="#">Terms</a>
<a className="hover:text-zinc-200 font-sans" href="#">Status</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
