import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



(function () {
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
      

<div className="aura-background-component fixed z-10 pointer-events-none opacity-50 mix-blend-screen w-full h-screen top-0 saturate-0 brightness-50" data-alpha-mask="80" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bKN5upvoulAmWvInmHza"></div>

</div>
</div>

<div className="gradient-blur">
<div></div>
<div className=""></div>
<div></div>
<div className=""></div>
<div></div>
<div></div>
</div>

<div className="fixed flex z-50 w-full pt-6 pr-4 pl-4 top-0 left-0 justify-center">
<nav className="flex md:gap-12 md:w-auto shadow-black/50 md:pl-6 md:gap-x-8 z-50 group bg-black/60 w-full max-w-5xl rounded-full pt-2 pr-2 pb-2 pl-4 shadow-2xl backdrop-blur-xl gap-x-3 gap-y-8 items-center justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2))', -BorderRadiusBefore: '9999px'}}>
<div className="flex items-center gap-2 shrink-0">
<span className="text-base font-medium tracking-tight flex items-center text-white" onclick="window.location.href='/home-page'" role="button">
<img alt="TERN" className="cursor-pointer w-auto h-7 object-contain rounded-full" onclick="window.location.href='/home-page';window.location.href='/';window.location.href='/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2bcdd201-cf91-4148-b0a2-fe375ba529d0_1600w.png?w=800&amp;q=80"/>
</span>
</div>

<div className="hidden md:flex items-center gap-6">
<a className="transition-colors hover:text-white text-xs font-medium text-gray-400" href="/">
      Home
    </a>
<a className="transition-colors hover:text-white text-xs font-medium text-gray-400" href="/platform">
      Platform
    </a>
<a className="transition-colors text-xs font-medium hover:text-white text-gray-400" href="/security">
      Security
    </a>
<a className="transition-colors text-xs font-medium hover:text-white text-gray-400" href="#">
      Company
    </a>
</div>
<div className="flex items-center gap-2 md:gap-4 shrink-0">

<button className="group/btn inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center" onclick="window.location.href='/book-a-demo'" role="button">

<span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ffffff_100%)] opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100"></span>

<span className="transition-opacity duration-300 group-hover/btn:opacity-0 rounded-full absolute top-0 right-0 bottom-0 left-0 bg-zinc-800"></span>

<span className="flex items-center justify-center gap-2 uppercase transition-colors duration-300 group-hover/btn:text-white text-xs font-medium tracking-widest bg-gradient-to-b w-full h-full rounded-full relative shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] text-zinc-400 from-zinc-800 to-zinc-950 pt-2 px-3 pb-2 md:pt-2.5 md:px-6 md:pb-2.5 md:pr-6">
<span className="relative z-10 whitespace-nowrap">Book Demo</span>
<svg className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>

<button className="md:hidden relative flex items-center justify-center w-9 h-9 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all border border-transparent hover:border-white/5" onclick="const menu = document.getElementById('mobile-drawer'); const icon = this.querySelector('svg'); const isOpen = !menu.classList.contains('hidden'); if(isOpen) { menu.classList.remove('opacity-100', 'translate-y-0'); menu.classList.add('opacity-0', '-translate-y-2'); setTimeout(() =&gt; menu.classList.add('hidden'), 300); } else { menu.classList.remove('hidden'); setTimeout(() =&gt; { menu.classList.remove('opacity-0', '-translate-y-2'); menu.classList.add('opacity-100', 'translate-y-0'); }, 10); }">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>

<div className="hidden left-0 right-0 p-1.5 z-50 transform transition-all duration-300 ease-out opacity-0 -translate-y-2 origin-top fixed top-[90px]" id="mobile-drawer">
<div className="bg-black/90 backdrop-blur-xl border border-white/5 rounded-[2rem] p-4 flex flex-col shadow-2xl overflow-hidden">
<a className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-colors group" href="/home-page">
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">
                Home
              </span>
<svg className="text-zinc-600 group-hover:text-white transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
<div className="h-px w-full bg-white/5 mx-auto"></div>
<a className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-colors group" href="/platform">
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">
                Platform
              </span>
<svg className="text-zinc-600 group-hover:text-white transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
<div className="h-px w-full bg-white/5 mx-auto"></div>
<a className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-colors group" href="/security">
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">
                Security
              </span>
<svg className="text-zinc-600 group-hover:text-white transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
<div className="h-px w-full bg-white/5 mx-auto"></div>
<a className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-colors group" href="#">
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">
                Company
              </span>
<svg className="text-zinc-600 group-hover:text-white transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
</div>
</div>
</nav>
</div>

<section className="min-h-screen flex flex-col md:pt-20 overflow-hidden w-full pt-32 relative items-center justify-center" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 95%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 95%, transparent)'}}>

<div className="absolute inset-0 -z-20">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[80%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-zinc-900/20 to-black"></div>
<div className="opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="absolute inset-0 w-full h-full grid grid-cols-1 md:grid-cols-7 gap-0 -z-10 pointer-events-none">
<div className="relative h-full hidden md:block border-r col-anim delay-1 border-white/5">
<div className="absolute bottom-0 left-0 right-0 h-[75%] border-t shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)] bg-black border-white/10"></div>
</div>
<div className="relative h-full hidden md:block border-r col-anim delay-2 border-white/5">
<div className="absolute bottom-0 left-0 right-0 h-[65%] border-t shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)] bg-black border-white/10"></div>
</div>
<div className="relative h-full hidden md:block border-r col-anim delay-3 border-white/5">
<div className="absolute bottom-0 left-0 right-0 h-[55%] border-t shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)] bg-black border-white/10"></div>
</div>
<div className="relative h-full border-r md:border-none col-anim delay-4 border-white/5">
<div className="absolute bottom-0 left-0 right-0 h-[45%] border-t shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)] bg-black border-white/10"></div>
<div className="absolute top-[20%] left-0 right-0 h-[30%] bg-gradient-to-b to-transparent pointer-events-none from-white/5"></div>
</div>
<div className="relative h-full hidden md:block border-l col-anim delay-5 border-white/5">
<div className="absolute bottom-0 left-0 right-0 h-[55%] border-t shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)] bg-black border-white/10"></div>
</div>
<div className="relative h-full hidden md:block border-l col-anim delay-6 border-white/5">
<div className="absolute bottom-0 left-0 right-0 h-[65%] border-t shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)] bg-black border-white/10"></div>
</div>
<div className="relative h-full hidden md:block border-l col-anim delay-7 border-white/5">
<div className="absolute bottom-0 left-0 right-0 h-[75%] border-t shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)] bg-black border-white/10"></div>
</div>
</div>

<div className="md:mt-12 md:mb-10 md:px-6 z-10 text-center max-w-5xl mt-0 mr-auto mb-8 ml-auto pr-4 pl-4 relative">

<div className="[animation:fadeSlideIn_1s_ease-out_0.8s_both] animate-on-scroll inline-flex transition-transform hover:scale-105 cursor-pointer group animate bg-gradient-to-br rounded-full mb-6 md:mb-10 pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center from-white/10 to-white/0" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', -BorderRadiusBefore: '9999px'}}>
<span className="flex h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)] group-hover:animate-pulse"></span>
<span className="group-hover:text-white transition-colors text-xs font-medium text-orange-100/80 tracking-wide">
            Introducing TERN: Workforce Intelligence
          </span>
</div>

<h1 className="[animation:fadeSlideIn_1s_ease-out_1s_both] animate-on-scroll animate flex flex-wrap justify-center gap-x-[0.25em] gap-y-2 leading-tight md:leading-[1.1] md:text-8xl cursor-default sm:text-7xl font-semibold tracking-tighter font-manrope mb-6 md:mb-8 text-white drop-shadow-2xl text-4xl">
          Clinical AI Workforce Operating System
        </h1>

<p className="[animation:fadeSlideIn_1s_ease-out_1.2s_both] animate-on-scroll leading-relaxed md:text-2xl animate text-lg sm:text-xl font-medium text-gray-400 tracking-normal font-manrope max-w-3xl mx-auto mb-8 md:mb-12">
          Unify Global Sourcing, AI-driven Clinical Assessment &amp; Readiness
          Check into one healthcare-native system.
        </p>

<div className="[animation:fadeSlideIn_1s_ease-out_1.4s_both] animate-on-scroll flex flex-col md:flex-row items-center justify-center gap-6 animate mb-8">
<button className="group flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] focus:outline-none text-sm font-medium tracking-widest font-geist rounded-full relative items-center justify-center text-white w-full md:w-auto px-6 py-4 md:pt-5 md:pr-12 md:pb-5 md:pl-12">
<style>
              @keyframes beam-spin { to { transform: rotate(360deg); } }
              @keyframes dots-move {
                  0% { background-position: 0 0; }
                  100% { background-position: 24px 24px; }
              }
            </style>

<div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#ea580c_360deg)]" style={{animation: 'beam-spin 3s linear infinite'}}></div>
<div className="absolute inset-[1px] rounded-full bg-black"></div>
</div>

<div className="overflow-hidden rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px] bg-zinc-950" onclick="window.location.href='/book-a-demo'" role="button">

<div className="absolute inset-0 bg-gradient-to-b to-transparent from-zinc-800/60"></div>

<div className="opacity-30 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '12px 12px', animation: 'dots-move 8s linear infinite'}}></div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-orange-500/10 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-orange-500/30"></div>
</div>

<span className="z-10 transition-colors group-hover:text-white relative text-white/90">
              Book a Platform Demo
            </span>
<svg className="lucide lucide-arrow-right relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>

</div>

<div className="[animation:fadeSlideIn_1s_ease-out_1.8s_both] animate-on-scroll animate md:pb-10 w-full max-w-6xl z-20 mr-auto ml-auto pr-6 pb-0 pl-6 relative">
<div className="inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] hover:grayscale-0 transition-all duration-700 group opacity-40 w-full grayscale">
<style>
            @keyframes infinite-scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-infinite-scroll {
                animation: infinite-scroll 40s linear infinite;
            }
            /* Pause animation on hover */
            .group:hover .animate-infinite-scroll {
                animation-play-state: paused;
            }
          </style>
<div className="flex md:justify-start [&amp;_div]:mx-8 animate-infinite-scroll w-max mr-8 ml-8 items-center justify-center">

<div className="group flex items-center gap-2">
<span className="font-medium text-lg font-sans text-white">git</span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-3xl iconify--simple-icons text-white" data-icon="simple-icons:npm" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019l-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" fill="currentColor"></path>
</svg>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl iconify--simple-icons text-white" data-icon="simple-icons:lucid" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0L3.694 4.8V24L12 19.2Zm0 19.2v4.502h8.305V14.4Z" fill="currentColor"></path>
</svg>
<span className="font-medium text-lg font-sans text-white">
                Lucidchart
              </span>
</div>
<div className="group flex items-center gap-2">
<span className="iconify text-xl text-white" data-icon="simple-icons:wrike"></span>
<span className="font-medium text-lg font-sans text-white">
                wrike
              </span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl iconify--simple-icons text-white" data-icon="simple-icons:jquery" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M1.525 5.87c-2.126 3.054-1.862 7.026-.237 10.269q.057.117.118.229q.035.076.077.15q.021.042.047.082q.04.078.081.152l.157.266c.03.049.057.097.09.146c.056.094.12.187.178.281q.037.06.079.117a6 6 0 0 0 .31.445q.115.16.24.315l.086.115l.22.269c.028.03.055.067.084.099q.148.176.306.35l.005.006a3 3 0 0 0 .425.44q.119.125.245.245l.101.097q.165.158.34.309q.002 0 .005.003l.057.05q.153.135.31.26l.125.105l.26.2l.137.105c.093.07.192.139.287.207q.052.038.106.073l.03.023l.28.185l.12.08q.221.14.44.272q.063.031.123.068q.164.095.329.183q.09.05.184.094q.113.062.234.125a.3.3 0 0 1 .056.023l.096.047q.18.09.375.175q.037.014.076.034q.215.094.438.182c.034.01.07.027.105.04q.204.078.411.152l.05.018q.23.078.46.15l.111.033c.16.048.314.105.474.137c10.273 1.872 13.258-6.177 13.258-6.177c-2.508 3.266-6.958 4.127-11.174 3.169c-.156-.036-.312-.086-.47-.132a14 14 0 0 1-.567-.182l-.062-.024q-.202-.07-.4-.148l-.11-.04q-.22-.09-.433-.184c-.031-.01-.057-.024-.088-.036l-.362-.17l-.106-.052c-.094-.044-.188-.095-.28-.143a4 4 0 0 1-.187-.096c-.114-.06-.227-.125-.34-.187q-.052-.035-.112-.066a16 16 0 0 1-.439-.27a2 2 0 0 1-.118-.078a6 6 0 0 1-.312-.207l-.103-.073a10 10 0 0 1-.295-.212q-.064-.05-.132-.1c-.088-.07-.177-.135-.265-.208l-.118-.095a11 11 0 0 1-.335-.28l-.037-.031l-.347-.316l-.1-.094q-.123-.125-.25-.246l-.098-.1a9 9 0 0 1-.309-.323l-.015-.016q-.159-.174-.313-.355q-.04-.046-.08-.097l-.227-.277a21 21 0 0 1-.34-.449C2.152 11.79 1.306 7.384 3.177 3.771m4.943-.473c-1.54 2.211-1.454 5.169-.254 7.508a9 9 0 0 0 .678 1.133c.23.33.484.721.793.988q.162.181.344.36l.09.09q.172.164.35.325l.016.013a10 10 0 0 0 .414.342c.034.023.063.05.096.073q.21.161.428.316l.015.009q.093.066.198.13c.028.018.06.042.09.06q.158.1.318.197l.048.023c.09.055.188.108.282.157c.033.02.065.035.1.054q.1.05.197.102l.032.014q.204.1.408.19q.05.02.092.039q.167.072.336.137c.05.017.097.037.144.052c.102.038.21.073.31.108l.14.045c.147.045.295.104.449.13C22.164 17.206 24 11.098 24 11.098c-1.653 2.38-4.852 3.513-8.261 2.628a8 8 0 0 1-.449-.13c-.048-.014-.09-.029-.136-.043c-.104-.036-.211-.07-.312-.109l-.144-.054c-.113-.045-.227-.087-.336-.135c-.034-.015-.065-.025-.091-.04q-.211-.093-.418-.192l-.206-.107l-.119-.06a6 6 0 0 1-.265-.15l-.062-.035c-.106-.066-.217-.13-.318-.198q-.05-.03-.097-.062l-.208-.136c-.144-.1-.285-.208-.428-.313q-.048-.042-.094-.079c-1.499-1.178-2.681-2.79-3.242-4.613c-.59-1.897-.46-4.023.56-5.75m4.292-.147c-.909 1.334-.996 2.99-.37 4.46c.665 1.563 2.024 2.79 3.608 3.37q.096.036.196.07l.088.027c.092.03.185.063.28.084c4.381.845 5.567-2.25 5.886-2.704c-1.043 1.498-2.792 1.857-4.938 1.335a5 5 0 0 1-.516-.16a6 6 0 0 1-.618-.254a6.5 6.5 0 0 1-1.082-.66c-1.922-1.457-3.113-4.236-1.859-6.5" fill="currentColor"></path>
</svg>
<span className="font-medium text-lg font-sans text-white">
                jQuery
              </span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl iconify--simple-icons text-white" data-icon="simple-icons:openstack" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M18.575 9.29h5.418v5.42h-5.418zM0 9.29h5.419v5.42H0zm18.575 7.827a1.207 1.207 0 0 1-1.206 1.206H6.623a1.207 1.207 0 0 1-1.205-1.206v-.858H0v5.252a2.236 2.236 0 0 0 2.229 2.23h19.53A2.237 2.237 0 0 0 24 21.512V16.26h-5.425zM21.763.258H2.233a2.236 2.236 0 0 0-2.23 2.23V7.74h5.419v-.858a1.206 1.206 0 0 1 1.205-1.206h10.746a1.206 1.206 0 0 1 1.205 1.206v.858H24V2.487A2.237 2.237 0 0 0 21.763.258" fill="currentColor"></path>
</svg>
<span className="font-medium text-lg font-sans text-white">
                openstack
              </span>
</div>
<div className="group flex items-center gap-2">
<span className="iconify text-xl text-white" data-icon="simple-icons:servicenow"></span>
<span className="font-medium text-lg tracking-tight font-sans text-white">
                servicenow
              </span>
</div>
<div className="group flex items-center gap-2">
<span className="font-bold text-xl tracking-tight font-sans text-white">
                paysafe:
              </span>
</div>

<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-2xl iconify--simple-icons text-white" data-icon="simple-icons:git" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 0 1 1.9 3.039a1.837 1.837 0 0 1-2.6 0a1.85 1.85 0 0 1-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348a1.85 1.85 0 0 1 0 2.6a1.844 1.844 0 0 1-2.609 0a1.834 1.834 0 0 1 0-2.598c.182-.18.387-.316.605-.406V8.835a1.834 1.834 0 0 1-.996-2.41L7.636 3.7L.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477a1.545 1.545 0 0 0 2.186 0l10.43-10.43a1.544 1.544 0 0 0 0-2.187" fill="currentColor"></path>
</svg>
<span className="font-medium text-lg font-sans text-white">git</span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-3xl iconify--simple-icons text-white" data-icon="simple-icons:npm" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019l-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" fill="currentColor"></path>
</svg>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl iconify--simple-icons text-white" data-icon="simple-icons:lucid" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0L3.694 4.8V24L12 19.2Zm0 19.2v4.502h8.305V14.4Z" fill="currentColor"></path>
</svg>
<span className="font-medium text-lg font-sans text-white">
                Lucidchart
              </span>
</div>
<div className="group flex items-center gap-2">
<span className="iconify text-xl text-white" data-icon="simple-icons:wrike"></span>
<span className="font-medium text-lg font-sans text-white">
                wrike
              </span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl iconify--simple-icons text-white" data-icon="simple-icons:jquery" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M1.525 5.87c-2.126 3.054-1.862 7.026-.237 10.269q.057.117.118.229q.035.076.077.15q.021.042.047.082q.04.078.081.152l.157.266c.03.049.057.097.09.146c.056.094.12.187.178.281q.037.06.079.117a6 6 0 0 0 .31.445q.115.16.24.315l.086.115l.22.269c.028.03.055.067.084.099q.148.176.306.35l.005.006a3 3 0 0 0 .425.44q.119.125.245.245l.101.097q.165.158.34.309q.002 0 .005.003l.057.05q.153.135.31.26l.125.105l.26.2l.137.105c.093.07.192.139.287.207q.052.038.106.073l.03.023l.28.185l.12.08q.221.14.44.272q.063.031.123.068q.164.095.329.183q.09.05.184.094q.113.062.234.125a.3.3 0 0 1 .056.023l.096.047q.18.09.375.175q.037.014.076.034q.215.094.438.182c.034.01.07.027.105.04q.204.078.411.152l.05.018q.23.078.46.15l.111.033c.16.048.314.105.474.137c10.273 1.872 13.258-6.177 13.258-6.177c-2.508 3.266-6.958 4.127-11.174 3.169c-.156-.036-.312-.086-.47-.132a14 14 0 0 1-.567-.182l-.062-.024q-.202-.07-.4-.148l-.11-.04q-.22-.09-.433-.184c-.031-.01-.057-.024-.088-.036l-.362-.17l-.106-.052c-.094-.044-.188-.095-.28-.143a4 4 0 0 1-.187-.096c-.114-.06-.227-.125-.34-.187q-.052-.035-.112-.066a16 16 0 0 1-.439-.27a2 2 0 0 1-.118-.078a6 6 0 0 1-.312-.207l-.103-.073a10 10 0 0 1-.295-.212q-.064-.05-.132-.1c-.088-.07-.177-.135-.265-.208l-.118-.095a11 11 0 0 1-.335-.28l-.037-.031l-.347-.316l-.1-.094q-.123-.125-.25-.246l-.098-.1a9 9 0 0 1-.309-.323l-.015-.016q-.159-.174-.313-.355q-.04-.046-.08-.097l-.227-.277a21 21 0 0 1-.34-.449C2.152 11.79 1.306 7.384 3.177 3.771m4.943-.473c-1.54 2.211-1.454 5.169-.254 7.508a9 9 0 0 0 .678 1.133c.23.33.484.721.793.988q.162.181.344.36l.09.09q.172.164.35.325l.016.013a10 10 0 0 0 .414.342c.034.023.063.05.096.073q.21.161.428.316l.015.009q.093.066.198.13c.028.018.06.042.09.06q.158.1.318.197l.048.023c.09.055.188.108.282.157c.033.02.065.035.1.054q.1.05.197.102l.032.014q.204.1.408.19q.05.02.092.039q.167.072.336.137c.05.017.097.037.144.052c.102.038.21.073.31.108l.14.045c.147.045.295.104.449.13C22.164 17.206 24 11.098 24 11.098c-1.653 2.38-4.852 3.513-8.261 2.628a8 8 0 0 1-.449-.13c-.048-.014-.09-.029-.136-.043c-.104-.036-.211-.07-.312-.109l-.144-.054c-.113-.045-.227-.087-.336-.135c-.034-.015-.065-.025-.091-.04q-.211-.093-.418-.192l-.206-.107l-.119-.06a6 6 0 0 1-.265-.15l-.062-.035c-.106-.066-.217-.13-.318-.198q-.05-.03-.097-.062l-.208-.136c-.144-.1-.285-.208-.428-.313q-.048-.042-.094-.079c-1.499-1.178-2.681-2.79-3.242-4.613c-.59-1.897-.46-4.023.56-5.75m4.292-.147c-.909 1.334-.996 2.99-.37 4.46c.665 1.563 2.024 2.79 3.608 3.37q.096.036.196.07l.088.027c.092.03.185.063.28.084c4.381.845 5.567-2.25 5.886-2.704c-1.043 1.498-2.792 1.857-4.938 1.335a5 5 0 0 1-.516-.16a6 6 0 0 1-.618-.254a6.5 6.5 0 0 1-1.082-.66c-1.922-1.457-3.113-4.236-1.859-6.5" fill="currentColor"></path>
</svg>
<span className="font-medium text-lg font-sans text-white">
                jQuery
              </span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl iconify--simple-icons text-white" data-icon="simple-icons:openstack" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M18.575 9.29h5.418v5.42h-5.418zM0 9.29h5.419v5.42H0zm18.575 7.827a1.207 1.207 0 0 1-1.206 1.206H6.623a1.207 1.207 0 0 1-1.205-1.206v-.858H0v5.252a2.236 2.236 0 0 0 2.229 2.23h19.53A2.237 2.237 0 0 0 24 21.512V16.26h-5.425zM21.763.258H2.233a2.236 2.236 0 0 0-2.23 2.23V7.74h5.419v-.858a1.206 1.206 0 0 1 1.205-1.206h10.746a1.206 1.206 0 0 1 1.205 1.206v.858H24V2.487A2.237 2.237 0 0 0 21.763.258" fill="currentColor"></path>
</svg>
<span className="font-medium text-lg font-sans text-white">
                openstack
              </span>
</div>
<div className="group flex items-center gap-2">
<span className="iconify text-xl text-white" data-icon="simple-icons:servicenow"></span>
<span className="font-medium text-lg tracking-tight font-sans text-white">
                servicenow
              </span>
</div>
<div className="group flex items-center gap-2">
<span className="font-bold text-xl tracking-tight font-sans text-white">
                paysafe:
              </span>
</div>
</div>
</div>
</div>
</section>
<section className="z-20 w-full max-w-7xl mt-0 mr-auto mb-20 ml-auto pt-0 pr-2 pb-20 pl-2 relative gap-x-16 gap-y-16">

<div className="flex w-full mb-10 justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 backdrop-blur-sm shadow-[0_0_15px_rgba(239,68,68,0.15)]">
<span className="flex relative h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-red-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
<span className="text-[11px] font-semibold uppercase tracking-widest font-sans text-red-100">
            Whats Broken Today?
          </span>
</div>
</div>

<div className="group overflow-hidden bg-zinc-900/30 z-10 rounded-[2.5rem] mb-6 relative backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.05))', -BorderRadiusBefore: '2.5rem'}}>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent pointer-events-none">
</div>
<div className="grid lg:grid-cols-12 min-h-[550px]">

<div className="lg:col-span-5 md:p-12 flex flex-col z-10 lg:border-r border-white/5 pt-8 pr-8 pb-8 pl-8 relative justify-center">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 border border-orange-500/20 flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(249,115,22,0.1)] to-orange-600/5">
<svg className="text-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>
<h2 className="md:text-4xl lg:text-5xl leading-[1.1] text-3xl font-semibold tracking-tighter font-manrope mb-6 text-white">
          Fragmented processes
          <span className="text-zinc-500">delay care</span>
</h2>
<p className="md:text-lg leading-relaxed text-base mb-8 text-zinc-400">
          Legacy workflows rely on fragmented tools, leading to clinical
          risk and operational blindness.
        </p>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400">
<svg fill="none" height="10" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="10">
<path d="M18 6L6 18M6 6l12 12"></path>
</svg>
</div>
<span className="text-sm text-zinc-400">
                  Disconnected sourcing cycles drive high operational latency.
                </span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400">
<svg fill="none" height="10" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="10">
<path d="M18 6L6 18M6 6l12 12"></path>
</svg>
</div>
<span className="text-sm text-zinc-400">
                  Inconsistent clinical validation leads to variable
                  performance.
                </span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400">
<svg fill="none" height="10" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="10">
<path d="M18 6L6 18M6 6l12 12"></path>
</svg>
</div>
<span className="text-sm text-zinc-400">
                  Data-blind retention strategies result in high clinician
                  churn.
                </span>
</div>
</div>
</div>

<div className="lg:col-span-7 relative overflow-hidden flex flex-col bg-black/30 min-h-[400px] lg:min-h-full">

<div className="h-12 border-b flex items-center px-5 gap-3 w-full backdrop-blur-md border-white/5 bg-zinc-900/50">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
<div className="flex-1 text-center"></div>
<div className="w-10"></div>
</div>

<div className="flex-1 relative flex items-center justify-center p-2 md:p-12">

<div className="flex group lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:left-0 bg-[#2B2B2B] w-full relative perspective-midrange items-center justify-center rounded-xl overflow-hidden md:overflow-visible">

<div className="bg-center opacity-[0.06] bg-[url(https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80)] bg-cover absolute inset-0 pointer-events-none">
</div>

<img alt="Candidate Tracking Dashboard" className="z-10 w-full md:w-[85%] shadow-black/60 transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:shadow-black/80 group-hover:rotate-x-0 border-white/10 border rounded-lg md:rounded-xl relative shadow-2xl rotate-x-0 md:rotate-x-5 scale-100 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ef00d360-c137-44fc-b0e6-95429dbd67c5_1600w.png"/>
</div>
</div>
</div>
</div>
</div>

<section className="w-full max-w-7xl z-20 mt-20 mr-auto mb-0 ml-auto pt-10 pr-2 pb-10 pl-2 relative gap-x-16 gap-y-16">

<div className="flex flex-col w-full border-white/5 border-t pt-20 relative gap-x-16 gap-y-16">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] -z-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent opacity-40 pointer-events-none mix-blend-screen">
</div>
<div className="flex flex-col items-center text-center w-full mx-auto max-w-3xl px-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.2)] border-white/10 bg-white/5">
<span className="flex relative h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-[11px] font-semibold uppercase tracking-widest font-sans text-zinc-300">
              Platform Modules
            </span>
</div>
<h2 className="md:text-5xl lg:text-6xl leading-[1.05] text-4xl font-medium text-white tracking-tight font-manrope text-center w-full mb-6">
        One platform for
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              clinical lifecycle.
            </span>
</h2>
<p className="leading-relaxed text-lg text-zinc-400 max-w-2xl mr-auto ml-auto">
        TERN consolidates fragmented staffing operations into a single,
        intelligent infrastructure layer covering the entire
        source-to-management journey.
      </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 w-full py-10 gap-x-6 gap-y-6">

<div className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/40 hover:border-white/20 hover:bg-zinc-900/80 transition-all duration-500 h-[560px]">
<div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-500/20 transition-colors">
</div>
<div className="flex flex-col z-10 h-full relative px-5 py-8 md:p-8">
<div className="mb-8">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/5 border border-blue-500/20 flex items-center justify-center mb-5 text-blue-400">
<svg className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="10"></circle>
<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
<path d="M2 12h20"></path>
</svg>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight font-manrope mb-3">
              Hire for Better
            </h3>
<p className="leading-relaxed text-sm font-medium text-zinc-400">
              Transition from fragmented agencies to a sovereign, direct
              pipeline of the world’s most qualified clinical talent.
            </p>
</div>
<div className="flex flex-col gap-3 mb-8">
<div className="flex items-start gap-3 group/item">
<div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<div className="">
<div className="text-xs font-semibold text-zinc-200 mb-0.5">
                  Sourcing
                </div>
<div className="text-[10px] leading-snug text-zinc-500">
                  Command unmediated access to global clinical registries.
                </div>
</div>
</div>
<div className="flex items-start gap-3 group/item">
<div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<div className="">
<div className="text-xs font-semibold text-zinc-200 mb-0.5">
                  Screening
                </div>
<div className="text-[10px] leading-snug text-zinc-500">
                  Automate top-of-funnel vetting via clinician-led AI
                  rubrics.
                </div>
</div>
</div>
<div className="flex items-start gap-3 group/item">
<div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
<svg className="" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<div className="">
<div className="text-xs font-semibold text-zinc-200 mb-0.5">
                  Credentialing
                </div>
<div className="text-[10px] leading-snug text-zinc-500">
                  Eliminate latency through primary-source verification.
                </div>
</div>
</div>
</div>
<div className="mt-auto w-full rounded-xl border border-white/5 bg-zinc-950/50 overflow-hidden relative shadow-2xl group-hover:border-white/10 transition-all duration-500 backdrop-blur-md">
<div className="h-8 border-b border-white/5 flex items-center px-3 gap-1.5 bg-white/[0.02]">
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
<div className="ml-auto text-[9px] font-mono text-zinc-600">
                analytics.json
              </div>
</div>
<div className="p-5 grid grid-cols-2 gap-4">
<div className="space-y-1.5 p-3 rounded-lg bg-white/[0.02] border border-white/5">
<div className="text-[9px] uppercase tracking-wider text-zinc-500 font-semibold">
                  Total Candidates
                </div>
<div className="font-mono text-white tracking-tight">
                  12,482
                </div>
<div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden mt-1">
<div className="h-full bg-blue-500 w-[85%] rounded-full"></div>
</div>
</div>
<div className="space-y-1.5 p-3 rounded-lg bg-white/[0.02] border border-white/5">
<div className="text-[9px] uppercase tracking-wider text-zinc-500 font-semibold">
                  Verified
                </div>
<div className="text-xl font-mono text-blue-400 tracking-tight text-lg md:text-xl">
                  8,103
                </div>
<div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden mt-1">
<div className="h-full bg-blue-400 w-[65%] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/40 hover:border-white/20 hover:bg-zinc-900/80 transition-all duration-500 h-[560px]">
<div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-purple-500/20 transition-colors">
</div>
<div className="flex flex-col z-10 h-full relative px-5 py-8 md:p-8">
<div className="mb-8">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/5 border border-purple-500/20 flex items-center justify-center mb-5 text-purple-400">
<svg className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v4"></path>
<path d="m16.2 7.8 2.9-2.9"></path>
<path d="M18 12h4"></path>
<path d="m16.2 16.2 2.9 2.9"></path>
<path d="M12 18v4"></path>
<path d="m7.8 16.2-2.9 2.9"></path>
<path d="M6 12H2"></path>
<path d="m7.8 7.8-2.9-2.9"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight font-manrope mb-3">
              Develop for Tomorrow
            </h3>
<p className="leading-relaxed text-sm font-medium text-zinc-400">
              Replace subjective bias with a validated, AI-native science of
              medical judgment and clinical validation.
            </p>
</div>
<div className="flex flex-col gap-3 mb-8">
<div className="flex items-start gap-3 group/item">
<div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<div className="">
<div className="text-xs font-semibold text-zinc-200 mb-0.5">
                  Assessment
                </div>
<div className="text-[10px] leading-snug text-zinc-500">
                  Measure clinical reasoning through scenario-based
                  situational testing.
                </div>
</div>
</div>
<div className="flex items-start gap-3 group/item">
<div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<div className="">
<div className="text-xs font-semibold text-zinc-200 mb-0.5">
                  Growth
                </div>
<div className="text-[10px] leading-snug text-zinc-500">
                  Map longitudinal career paths aligned with facility
                  requirements.
                </div>
</div>
</div>
<div className="flex items-start gap-3 group/item">
<div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<div className="">
<div className="text-xs font-semibold text-zinc-200 mb-0.5">
                  Learning
                </div>
<div className="text-[10px] leading-snug text-zinc-500">
                  Close specific skill gaps with adaptive, healthcare-native
                  learning tools.
                </div>
</div>
</div>
</div>
<div className="mt-auto w-full rounded-xl border border-white/5 bg-zinc-950/50 overflow-hidden relative shadow-2xl group-hover:border-white/10 transition-all duration-500 backdrop-blur-md">
<div className="h-8 border-b border-white/5 flex items-center px-3 gap-1.5 bg-white/[0.02]">
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
<div className="ml-auto text-[9px] font-mono text-zinc-600">
                scores.log
              </div>
</div>
<div className="p-5 flex flex-col justify-center h-full gap-4">
<div className="flex items-center gap-3">
<div className="text-[10px] font-mono text-zinc-400 w-16">
                  DOMAIN_1
                </div>
<div className="flex-1 h-1.5 rounded-full bg-zinc-800 overflow-hidden">
<div className="h-full w-[98%] bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.4)]"></div>
</div>
<div className="text-[10px] font-mono text-purple-400 font-bold">
                  98%
                </div>
</div>
<div className="flex items-center gap-3">
<div className="text-[10px] font-mono text-zinc-400 w-16">
                  DOMAIN_2
                </div>
<div className="flex-1 h-1.5 rounded-full bg-zinc-800 overflow-hidden">
<div className="h-full w-[94%] bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.4)]"></div>
</div>
<div className="text-[10px] font-mono text-purple-400 font-bold">
                  94%
                </div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/40 hover:border-white/20 hover:bg-zinc-900/80 transition-all duration-500 h-[560px]">
<div className="absolute -top-24 -right-24 w-64 h-64 bg-red-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-red-500/20 transition-colors">
</div>
<div className="flex flex-col z-10 h-full relative px-5 py-8 md:p-8">
<div className="mb-8">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/5 border border-orange-500/20 flex items-center justify-center mb-5 text-orange-400">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M23 7l-7 5 7 5V7z"></path>
<rect height="14" rx="2" ry="2" width="15" x="1" y="5"></rect>
</svg>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight font-manrope mb-3">
              Retain Your Frontline
            </h3>
<p className="leading-relaxed text-sm font-medium text-zinc-400">
              Proactively protect your medical workforce through predictive
              intelligence and dedicated clinical support.
            </p>
</div>
<div className="flex flex-col gap-3 mb-8">
<div className="flex items-start gap-3 group/item">
<div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<div className="">
<div className="text-xs font-semibold text-zinc-200 mb-0.5">
                  Burnout
                </div>
<div className="text-[10px] leading-snug text-zinc-500">
                  Predict attrition risks before they impact care delivery.
                </div>
</div>
</div>
<div className="flex items-start gap-3 group/item">
<div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<div className="">
<div className="text-xs font-semibold text-zinc-200 mb-0.5">
                  Analytics
                </div>
<div className="text-[10px] leading-snug text-zinc-500">
                  Gain real-time visibility into workforce sentiment and
                  engagement.
                </div>
</div>
</div>
<div className="flex items-start gap-3 group/item">
<div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<div className="">
<div className="text-xs font-semibold text-zinc-200 mb-0.5">
                  Support
                </div>
<div className="text-[10px] leading-snug text-zinc-500">
                  Assist clinicians 24/7 through AI-native professional
                  companionship.
                </div>
</div>
</div>
</div>
<div className="mt-auto w-full rounded-xl border border-white/5 bg-zinc-950/50 overflow-hidden relative shadow-2xl group-hover:border-white/10 transition-all duration-500 backdrop-blur-md">
<div className="h-8 border-b border-white/5 flex items-center px-3 gap-1.5 bg-white/[0.02]">
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
<div className="ml-auto flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
<div className="text-[9px] font-mono text-zinc-400">
                  REC: SESSION_842
                </div>
</div>
</div>
<div className="p-5 flex items-center justify-center h-full relative">

<div className="flex items-center gap-0.5 h-8">
<div className="w-1 bg-zinc-700 h-3 rounded-full"></div>
<div className="w-1 bg-zinc-700 h-5 rounded-full"></div>
<div className="w-1 bg-zinc-600 h-8 rounded-full"></div>
<div className="w-1 bg-orange-500 h-6 rounded-full"></div>
<div className="w-1 bg-orange-400 h-4 rounded-full"></div>
<div className="w-1 bg-zinc-600 h-3 rounded-full"></div>
<div className="w-1 bg-zinc-700 h-2 rounded-full"></div>
<div className="w-1 bg-zinc-700 h-4 rounded-full"></div>
<div className="w-1 bg-zinc-700 h-3 rounded-full"></div>
<div className="w-1 bg-zinc-700 h-2 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/40 hover:border-white/20 hover:bg-zinc-900/80 transition-all duration-500 h-[560px]">
<div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-emerald-500/20 transition-colors">
</div>
<div className="flex flex-col z-10 h-full relative px-5 py-8 md:p-8">
<div className="mb-8">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-emerald-600/5 border border-emerald-500/20 flex items-center justify-center mb-5 text-emerald-400">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight font-manrope mb-3">
              Management OS
            </h3>
<p className="leading-relaxed text-sm font-medium text-zinc-400">
              Establish a single source of truth for national-scale
              capacity, safety, and operational oversight.
            </p>
</div>
<div className="flex flex-col gap-3 mb-8">
<div className="flex items-start gap-3 group/item">
<div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<div className="">
<div className="text-xs font-semibold text-zinc-200 mb-0.5">
                  Planning
                </div>
<div className="text-[10px] leading-snug text-zinc-500">
                  Forecast system-wide demand against real-time workforce
                  capacity.
                </div>
</div>
</div>
<div className="flex items-start gap-3 group/item">
<div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<div className="">
<div className="text-xs font-semibold text-zinc-200 mb-0.5">
                  Command Center
                </div>
<div className="text-[10px] leading-snug text-zinc-500">
                  Oversee multi-facility operations through a single pane of
                  glass.
                </div>
</div>
</div>
<div className="flex items-start gap-3 group/item">
<div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<div className="">
<div className="text-xs font-semibold text-zinc-200 mb-0.5">
                  Compliance
                </div>
<div className="text-[10px] leading-snug text-zinc-500">
                  Ensure absolute safety through immutable, automated audit
                  trails.
                </div>
</div>
</div>
</div>
<div className="mt-auto w-full rounded-xl border border-white/5 bg-zinc-950/50 overflow-hidden relative shadow-2xl group-hover:border-white/10 transition-all duration-500 backdrop-blur-md">
<div className="h-8 border-b border-white/5 flex items-center px-3 gap-1.5 bg-white/[0.02]">
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
<div className="ml-auto text-[9px] font-mono text-zinc-600">
                status.check
              </div>
</div>
<div className="p-5 flex flex-col items-center justify-center gap-2">
<div className="w-full flex items-center justify-between px-2 mb-1">
<span className="text-[10px] font-mono text-zinc-500">
                      READY_STATE
                    </span>
<span className="text-[10px] font-mono text-emerald-500">
                      TRUE
                    </span>
</div>
<div className="w-full h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between px-4">
<div className="flex flex-col">
<span className="text-xs font-semibold text-emerald-400">
                        Deploy Ready
                      </span>
<span className="text-[10px] text-emerald-500/60">
                        All checks passed
                      </span>
</div>
<span className="font-bold font-geist text-white">100%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="group overflow-hidden z-10 rounded-[2.5rem] mb-6 relative backdrop-blur-xl border bg-zinc-900/30 border-white/5" style={{-BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.05))', -BorderRadiusBefore: '2.5rem'}}>
<div className="absolute inset-0 bg-gradient-to-br to-transparent pointer-events-none from-zinc-900/50 via-zinc-900/20">
</div>
<div className="z-10 md:p-12 flex flex-col h-full pt-8 pr-5 pb-8 pl-5 relative justify-center">

<div className="flex flex-col items-center text-center mb-16 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.2)]">
<span className="flex relative h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-orange-500"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400"></span>
</span>
<span className="text-[10px] font-semibold uppercase tracking-widest font-sans text-orange-200">
                Operational Pipeline
              </span>
</div>
<h2 className="md:text-5xl text-3xl font-medium text-white tracking-tight font-manrope mb-4">
          Integrated Clinical Lifecycle
        </h2>
<p className="md:text-lg leading-relaxed text-base text-zinc-400 max-w-2xl">
          Data-driven continuity: Insights from initial acquisition inform
          long-term competency and systemic governance.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative gap-x-6 gap-y-6">
<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent z-0">
</div>

<div className="group relative h-full">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
</div>
<div className="relative z-10 flex flex-col h-full bg-zinc-900/40 border border-white/5 rounded-2xl backdrop-blur-sm hover:border-white/10 transition-all duration-300 hover:bg-zinc-900/80 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 p-5 md:p-6">
<div className="flex justify-between items-start mb-10">
<div className="w-12 h-12 rounded-xl bg-zinc-950 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-white/20 group-hover:bg-white/5 transition-all duration-300 shadow-lg relative z-10">
<svg aria-hidden="true" className="lucide lucide-hard-drive-download w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" data-lucide="hard-drive-download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v8"></path><path d="m16 6-4 4-4-4"></path><rect height="8" rx="2" width="20" x="2" y="14"></rect><path d="M6 18h.01"></path><path d="M10 18h.01"></path></svg>
</div>
<span className="text-[10px] font-mono font-medium text-zinc-600 group-hover:text-zinc-400 transition-colors border border-white/5 px-2 py-1 rounded bg-zinc-950/50">
                    01
                  </span>
</div>
<div className="mt-auto">
<h3 className="group-hover:text-zinc-200 transition-colors text-lg font-medium text-white font-geist mb-2">
                Recruiting
              </h3>
<p className="leading-relaxed group-hover:text-zinc-300 transition-colors text-sm text-zinc-400">
                Global sourcing, automated parsing, and primary-source
                verification.
              </p>
</div>
</div>
</div>

<div className="group relative h-full">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
</div>
<div className="relative z-10 flex flex-col h-full bg-zinc-900/40 border border-white/5 rounded-2xl backdrop-blur-sm hover:border-white/10 transition-all duration-300 hover:bg-zinc-900/80 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 p-5 md:p-6">
<div className="flex justify-between items-start mb-10">
<div className="w-12 h-12 rounded-xl bg-zinc-950 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-white/20 group-hover:bg-white/5 transition-all duration-300 shadow-lg relative z-10">
<svg aria-hidden="true" className="lucide lucide-shield-check w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<span className="text-[10px] font-mono font-medium text-zinc-600 group-hover:text-zinc-400 transition-colors border border-white/5 px-2 py-1 rounded bg-zinc-950/50">
                    02
                  </span>
</div>
<div className="mt-auto">
<h3 className="group-hover:text-zinc-200 transition-colors text-lg font-medium text-white font-geist mb-2">
                Developing
              </h3>
<p className="leading-relaxed group-hover:text-zinc-300 transition-colors text-sm text-zinc-400">
                Clinician-led AI assessments and longitudinal competency
                mapping.
              </p>
</div>
</div>
</div>

<div className="group relative h-full">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
</div>
<div className="relative z-10 flex flex-col h-full bg-zinc-900/40 border border-white/5 rounded-2xl backdrop-blur-sm hover:border-white/10 transition-all duration-300 hover:bg-zinc-900/80 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 p-5 md:p-6">
<div className="flex justify-between items-start mb-10">
<div className="w-12 h-12 rounded-xl bg-zinc-950 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-white/20 group-hover:bg-white/5 transition-all duration-300 shadow-lg relative z-10">
<svg aria-hidden="true" className="lucide lucide-clipboard-check w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" data-lucide="clipboard-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
</div>
<span className="text-[10px] font-mono font-medium text-zinc-600 group-hover:text-zinc-400 transition-colors border border-white/5 px-2 py-1 rounded bg-zinc-950/50">
                    03
                  </span>
</div>
<div className="mt-auto">
<h3 className="group-hover:text-zinc-200 transition-colors text-lg font-medium text-white font-geist mb-2">
                Sustaining
              </h3>
<p className="leading-relaxed group-hover:text-zinc-300 transition-colors text-sm text-zinc-400">
                Predictive burnout modeling and AI-enabled engagement
                analytics.
              </p>
</div>
</div>
</div>

<div className="group relative h-full">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
</div>
<div className="relative z-10 flex flex-col h-full bg-zinc-900/40 border border-white/5 p-6 rounded-2xl backdrop-blur-sm hover:border-white/10 transition-all duration-300 hover:bg-zinc-900/80 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50">
<div className="flex justify-between items-start mb-10">
<div className="w-12 h-12 rounded-xl bg-zinc-950 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-white/20 group-hover:bg-white/5 transition-all duration-300 shadow-lg relative z-10">
<svg aria-hidden="true" className="lucide lucide-zap w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-[10px] font-mono font-medium text-zinc-600 group-hover:text-zinc-400 transition-colors border border-white/5 px-2 py-1 rounded bg-zinc-950/50">
                    04
                  </span>
</div>
<div className="mt-auto">
<h3 className="group-hover:text-zinc-200 transition-colors text-lg font-medium text-white font-geist mb-2">
                Governance
              </h3>
<p className="leading-relaxed group-hover:text-zinc-300 transition-colors text-sm text-zinc-400">
                Real-time capacity forecasting and system-wide audit
                readiness.
              </p>
</div>
</div>
</div>
</div>
</div>
</div>

</section>
</section>
<section className="overflow-hidden w-full max-w-7xl z-20 mt-0 mr-auto mb-20 ml-auto pt-10 pb-20 relative max-w-full">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none z-0">
<h2 className="text-[12vw] leading-none font-bold text-white/[0.03] text-center whitespace-nowrap font-manrope tracking-tighter">
          VISIBILITY
        </h2>
</div>
<div className="grid lg:grid-cols-12 gap-8 items-center relative z-10 px-6">

<div className="lg:col-span-4 flex flex-col justify-center order-2 lg:order-1">
<div className="flex items-center gap-2 mb-6 opacity-60">
<span className="w-2 h-2 rounded-full bg-orange-500"></span>
<span className="text-xs tracking-widest font-mono text-gray-400">
              2026
            </span>
</div>
<h3 className="leading-[1.1] uppercase md:text-7xl text-4xl font-normal text-white tracking-tight font-manrope text-left mb-8 relative z-20">
            Real-time visibility into workforce readiness.
          </h3>
<div className="hidden lg:block h-px w-24 mt-4 bg-white/10"></div>
</div>

<div className="lg:col-span-4 flex order-1 lg:order-2 lg:py-0 pt-12 pb-12 relative justify-center">

<div className="-translate-x-1/2 -translate-y-1/2 blur-[100px] pointer-events-none bg-orange-500/20 w-64 h-96 rounded-full absolute top-1/2 left-1/2"></div>

<div className="border-[1px] overflow-hidden w-[330px] h-[660px] z-10 rounded-[3.5rem] ring-1 relative shadow-[0_5.7px_8.6px_rgba(0,_0,_0,_0.07),_0_13.7px_10.9px_rgba(0,_0,_0,_0.099),_0_25.7px_20.5px_rgba(0,_0,_0,_0.123),_0_45.8px_36.6px_rgba(0,_0,_0,_0.147),_0_85.8px_68.5px_rgba(0,_0,_0,_0.176),_0_205px_163.4px_rgba(0,_0,_0,_0.246)] bg-zinc-950 border-zinc-800 ring-white/10">

<div className="absolute top-3 left-1/2 -translate-x-1/2 h-[32px] w-[110px] rounded-full z-50 flex items-center justify-between px-3 transition-all duration-500 hover:w-[140px] hover:shadow-[0_0_20px_rgba(0,0,0,0.8)] group/island bg-black">

<div className="flex gap-2 h-full items-center opacity-0 group-hover/island:opacity-100 transition-opacity duration-300 delay-100">
<div className="w-1 h-1 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)] animate-pulse"></div>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1.5">
<div className="w-4 h-4 rounded-full backdrop-blur-md border bg-zinc-900/80 border-white/5"></div>
</div>

<div className="flex gap-2 h-full items-center opacity-0 group-hover/island:opacity-100 transition-opacity duration-300 delay-100 ml-auto">
<div className="w-1 h-1 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
</div>
</div>

<div className="absolute top-4 left-0 w-full px-8 flex justify-between items-center z-40 text-[10px] font-semibold tracking-wide text-white/90">
<span>9:41</span>
<div className="flex gap-1.5 items-center">
<span className="iconify" data-icon="solar:signal-bold-duotone"></span>
<svg aria-hidden="true" data-icon="solar:battery-full-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h1.5c3.771 0 5.657 0 6.828-1.172S19.5 15.771 19.5 12s0-5.657-1.172-6.828S15.271 4 11.5 4H10C6.229 4 4.343 4 3.172 5.172" fill="currentColor" opacity=".5"></path>
<path d="M19.491 14c.009-.6.009-1.264.009-2c0-.735 0-1.4-.009-2H20c.942 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.942 14 20 14zM6.636 8.345a.75.75 0 0 1 1.02.29L7 9l.656-.363l.001.002l.002.003l.004.007l.01.018l.026.053q.03.064.076.175c.058.147.131.356.202.631c.14.551.273 1.364.273 2.474s-.132 1.923-.273 2.474a5 5 0 0 1-.202.631a3 3 0 0 1-.103.228l-.01.018l-.003.008l-.002.003v.001l-.001.001a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.1s-.118-1.678-.226-2.102a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01m4.52.291a.75.75 0 0 0-1.317.72l.005.01q.01.02.038.086c.035.087.087.235.142.447c.108.424.226 1.111.226 2.101s-.118 1.677-.226 2.101a4 4 0 0 1-.18.534l-.005.01a.75.75 0 0 0 1.317.72L10.5 15l.656.363l.001-.001l.002-.003l.004-.008l.01-.018l.026-.053q.03-.064.076-.175a5 5 0 0 0 .202-.631c.14-.551.273-1.364.273-2.474s-.132-1.923-.273-2.474a5 5 0 0 0-.202-.631a3 3 0 0 0-.103-.228l-.01-.018l-.003-.007l-.002-.003zm2.48-.291a.75.75 0 0 1 1.02.29L14 9l.656-.363l.001.002l.002.003l.004.007l.01.018l.026.053q.03.064.076.175a5 5 0 0 1 .202.631c.14.551.273 1.364.273 2.474s-.132 1.923-.273 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.103.228l-.01.018l-.003.008l-.002.003v.001l-.001.001a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.1s-.118-1.678-.226-2.102a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01" fill="currentColor"></path>
</svg>
</div>
</div>

<div className="flex flex-col z-10 bg-gradient-to-b w-full h-full pt-16 pr-6 pl-6 relative from-zinc-900 to-black">

<div className="flex z-10 mb-8 relative items-center justify-between">
<button className="flex transition-colors bg-gradient-to-br w-8 h-8 rounded-full backdrop-blur-sm items-center justify-center hover:bg-white/10 text-white/70 from-white/10 to-white/0" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '9999px'}}>
<svg className="lucide lucide-arrow-left" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m12 19-7-7 7-7"></path>
<path d="M19 12H5"></path>
</svg>
</button>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse"></div>
<span className="text-sm font-semibold tracking-wide text-white">
                    TERN Core
                  </span>
</div>
<button className="flex transition-colors bg-gradient-to-br w-8 h-8 rounded-full backdrop-blur-sm items-center justify-center hover:bg-white/10 text-white/70 from-white/10 to-white/0" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '9999px'}}>
<svg className="lucide lucide-more-horizontal" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
</div>

<div className="text-center mb-4">
<p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-2">
                  Active Placements
                </p>
<h4 className="text-5xl font-medium tracking-tighter font-geist text-white">
                  1,248
                </h4>
<div className="flex gap-1.5 mt-2 gap-x-1.5 gap-y-1.5 items-center justify-center">
<div className="flex items-center text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded text-[10px] font-semibold border border-emerald-500/20">
<svg className="lucide lucide-trending-up mr-1" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
<polyline points="16 7 22 7 22 13"></polyline>
</svg>
                    +12.4%
                  </div>
<span className="text-xs text-zinc-500 font-medium">
                    this week
                  </span>
</div>
</div>

<div className="w-full h-40 mb-6 relative">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 280 120">
<defs>

<pattern height="120" id="grid" patternunits="userSpaceOnUse" width="40">
<line opacity="0.3" stroke="#3f3f46" stroke-dasharray="2 2" strokeWidth="1" x1="0" x2="0" y1="0" y2="120"></line>
</pattern>
</defs>

<rect className="" fill="url(#grid)" height="100%" width="100%"></rect>
<line opacity="0.5" stroke="#3f3f46" strokeWidth="1" x1="0" x2="280" y1="120" y2="120"></line>

<path d="M0,80 C20,80 30,60 50,65 C70,70 80,90 100,85 C120,80 130,40 150,45 C170,50 180,70 200,60 C220,50 230,20 250,25 C265,28 275,10 280,15 V120 H0 Z" fill="url(#d3Gradient)"></path>

<path className="" d="M0,80 C20,80 30,60 50,65 C70,70 80,90 100,85 C120,80 130,40 150,45 C170,50 180,70 200,60 C220,50 230,20 250,25 C265,28 275,10 280,15" fill="none" stroke="#f97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>

<g transform="translate(150, 45)">
<circle className="animate-pulse" fill="#18181b" r="4" stroke="#f97316" strokeWidth="2"></circle>
<line opacity="0.5" stroke="#f97316" stroke-dasharray="2 2" strokeWidth="1" x1="0" x2="0" y1="4" y2="75"></line>
</g>
</svg>

<div className="flex pt-2 pr-2 pl-2 justify-between">
<button className="text-[9px] font-semibold transition-colors text-zinc-600 hover:text-white">
                    1H
                  </button>
<button className="text-[9px] font-semibold transition-colors text-zinc-600 hover:text-white">
                    1D
                  </button>
<button className="text-[9px] font-semibold text-orange-500 bg-orange-500/10 rounded px-2 py-0.5 border border-orange-500/20">
                    1W
                  </button>
<button className="text-[9px] font-semibold transition-colors text-zinc-600 hover:text-white">
                    1M
                  </button>
<button className="text-[9px] font-semibold transition-colors text-zinc-600 hover:text-white">
                    1Y
                  </button>
</div>
</div>

<div className="grid grid-cols-3 mt-4 mb-8 gap-x-3 gap-y-3">
<button className="flex flex-col gap-2 group gap-x-2 gap-y-2 items-center">
<div className="flex shadow-[0_0_20px_-5px_rgba(249,115,22,0.4)] transition-transform group-active:scale-95 bg-gradient-to-b w-12 h-12 rounded-xl items-center justify-center border text-white from-orange-400 to-orange-600 border-white/10">
<svg className="lucide lucide-arrow-down-to-line w-[18px] h-[18px]" data-icon-replaced="true" data-icon-set="solar" data-solar="round-arrow-down-bold-duotone" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="#ffffff" opacity=".5"></path>
<path d="M8.47 13.53a.75.75 0 1 1 1.06-1.06l1.72 1.72V8a.75.75 0 0 1 1.5 0v6.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0z" fill="#ffffff"></path>
</svg>
</div>
<span className="text-[10px] font-medium group-hover:text-white transition-colors text-zinc-400">
                    Deposit
                  </span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="flex transition-all group-active:scale-95 bg-gradient-to-br w-12 h-12 rounded-xl items-center justify-center hover:bg-zinc-800 text-white from-white/10 to-white/0" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '12px'}}>
<svg className="lucide lucide-arrow-left-right w-[18px] h-[18px]" data-icon-replaced="true" data-icon-set="solar" data-solar="sort-horizontal-bold-duotone" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M10.875 4a.75.75 0 0 0-1.272-.538l-4.125 4a.75.75 0 0 0 0 1.076l4.125 4A.75.75 0 0 0 10.875 12V8.75H18a.75.75 0 0 0 0-1.5h-7.125z" fill="#ffffff"></path>
<path d="M13.125 12a.75.75 0 0 1 1.272-.538l4.125 4a.75.75 0 0 1 0 1.076l-4.125 4A.75.75 0 0 1 13.125 20v-3.25H6a.75.75 0 0 1 0-1.5h7.125z" fill="#ffffff" opacity=".5"></path>
</svg>
</div>
<span className="text-[10px] font-medium group-hover:text-white transition-colors text-zinc-400">
                    Swap
                  </span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="flex transition-all group-active:scale-95 bg-gradient-to-br w-12 h-12 rounded-xl items-center justify-center hover:bg-zinc-800 text-white from-white/10 to-white/0" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '12px'}}>
<svg className="lucide lucide-send w-[18px] h-[18px]" data-icon-replaced="true" data-icon-set="solar" data-solar="file-send-bold-duotone" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" clip-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22" fill="#ffffff" fill-rule="evenodd" opacity=".5"></path>
<path d="M7.987 12.953a.75.75 0 0 1 1.026 0l2 1.875a.75.75 0 0 1-1.026 1.094l-.737-.69V18.5a.75.75 0 0 1-1.5 0v-3.269l-.737.691a.75.75 0 0 1-1.026-1.094zM11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z" fill="#ffffff"></path>
</svg>
</div>
<span className="text-[10px] font-medium group-hover:text-white transition-colors text-zinc-400">
                    Send
                  </span>
</button>
</div>

<div className="flex-1 rounded-t-[2rem] -mx-6 px-6 pt-6 pb-4 backdrop-blur-md border-t bg-zinc-900/60 border-white/5">
<div className="flex items-center justify-between mb-4">
<p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                    Live Deployments
                  </p>
<div className="flex gap-1">
<span className="w-1 h-1 rounded-full bg-zinc-600"></span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
</div>
</div>
<div className="space-y-3">
<div className="flex hover:bg-white/[0.04] transition-colors cursor-pointer group bg-gradient-to-br rounded-xl px-3 py-3 items-center justify-between from-white/10 to-white/0" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '12px'}}>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center p-1.5 border border-indigo-500/20 group-hover:border-indigo-500/40 transition-colors">
<svg aria-hidden="true" className="text-indigo-400" data-icon="simple-icons:ethereum" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.944 17.97L4.58 13.62L11.943 24l7.37-10.38l-7.372 4.35zM12.056 0L4.69 12.223l7.365 4.354l7.365-4.35z" fill="currentColor"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-white">
                          Clinical Nurse
                        </span>
<span className="text-[10px] text-emerald-500 font-medium flex items-center gap-1">
                          Time-to-Hire
                        </span>
</div>
</div>
<svg className="lucide lucide-chevron-right group-hover:text-white transition-colors text-zinc-600" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border hover:bg-white/[0.04] transition-colors cursor-pointer group border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center p-1.5 border border-purple-500/20 group-hover:border-purple-500/40 transition-colors">
<svg aria-hidden="true" className="text-purple-400" data-icon="simple-icons:solana" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m23.876 18.031l-3.962 4.14a.9.9 0 0 1-.306.21a.9.9 0 0 1-.367.074H.46a.47.47 0 0 1-.252-.073a.45.45 0 0 1-.17-.196a.44.44 0 0 1-.031-.255a.44.44 0 0 1 .117-.23l3.965-4.139a.9.9 0 0 1 .305-.21a.9.9 0 0 1 .366-.075h18.78a.47.47 0 0 1 .252.074a.45.45 0 0 1 .17.196a.44.44 0 0 1 .031.255a.44.44 0 0 1-.117.23m-3.962-8.335a.9.9 0 0 0-.306-.21a.9.9 0 0 0-.367-.075H.46a.47.47 0 0 0-.252.073a.45.45 0 0 0-.17.197a.44.44 0 0 0-.031.254a.44.44 0 0 0 .117.23l3.965 4.14a.9.9 0 0 0 .305.21a.9.9 0 0 0 .366.074h18.78a.47.47 0 0 0 .252-.073a.45.45 0 0 0 .17-.196a.44.44 0 0 0 .031-.255a.44.44 0 0 0-.117-.23zM.46 6.723h18.782a.9.9 0 0 0 .367-.075a.9.9 0 0 0 .306-.21l3.962-4.14a.44.44 0 0 0 .117-.23a.44.44 0 0 0-.032-.254a.45.45 0 0 0-.17-.196a.47.47 0 0 0-.252-.073H4.76a.9.9 0 0 0-.366.074a.9.9 0 0 0-.305.21L.125 5.97a.44.44 0 0 0-.117.23a.44.44 0 0 0 .03.254a.45.45 0 0 0 .17.196a.47.47 0 0 0 .252.074z" fill="currentColor"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-white">
                          Manchester Royal
                        </span>
<span className="text-[10px] font-medium flex items-center gap-1 text-orange-400">
<span className="w-1 h-1 rounded-full animate-pulse bg-orange-400"></span>
                          Sourcing...
                        </span>
</div>
</div>
<svg className="lucide lucide-chevron-right group-hover:text-white transition-colors text-zinc-600" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-5 lg:items-end order-3 justify-center relative z-10">

<div className="transition-transform duration-500 hover:scale-[1.01] text-left bg-gradient-to-br w-full max-w-sm rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-2xl backdrop-blur-xl from-white/10 to-white/0" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.05))', -BorderRadiusBefore: '24px'}}>
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 p-0.5 shadow-lg shadow-orange-500/20 to-orange-600">
<div className="w-full h-full rounded-full flex items-center justify-center bg-black">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="solar" data-solar="box-minimalistic-bold-duotone" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(249, 115, 22)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M8.422 20.618C10.178 21.54 11.056 22 12 22V12L2.638 7.073l-.04.067C2 8.154 2 9.417 2 11.942v.117c0 2.524 0 3.787.597 4.801c.598 1.015 1.674 1.58 3.825 2.709z" fill="#f97316"></path>
<path className="" d="m17.577 4.432l-2-1.05C13.822 2.461 12.944 2 12 2c-.945 0-1.822.46-3.578 1.382l-2 1.05C4.318 5.536 3.242 6.1 2.638 7.072L12 12l9.362-4.927c-.606-.973-1.68-1.537-3.785-2.641" fill="#f97316" opacity=".7"></path>
<path className="" d="m21.403 7.14l-.041-.067L12 12v10c.944 0 1.822-.46 3.578-1.382l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.597-1.014.597-2.277.597-4.8v-.117c0-2.525 0-3.788-.597-4.802" fill="#f97316" opacity=".5"></path>
</svg>
</div>
</div>
<div className="">
<h3 className="text-lg font-semibold tracking-tight font-manrope text-white">
                  Pipeline Velocity
                </h3>
<p className="text-xs font-medium font-sans text-zinc-400">
                  Health System A
                </p>
</div>
<div className="ml-auto">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse"></div>
</div>
</div>
<div className="flex justify-between gap-2 mb-5">
<div className="flex flex-col flex-1 transition-colors bg-gradient-to-br rounded-2xl pt-3 pr-3 pb-3 pl-3 hover:bg-white/10 from-white/10 to-white/0" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '16px'}}>
<span className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-sans">
                  Uptime
                </span>
<span className="text-sm font-semibold font-geist text-white">
                  12 Days
                </span>
</div>
<div className="flex flex-col flex-1 transition-colors bg-gradient-to-br rounded-2xl pt-3 pr-3 pb-3 pl-3 hover:bg-white/10 from-white/10 to-white/0" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '16px'}}>
<span className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-sans">
                  Fill Rate
                </span>
<span className="text-sm font-semibold font-geist text-white">
                  94%
                </span>
</div>
<div className="flex flex-col flex-1 transition-colors bg-gradient-to-br rounded-2xl pt-3 pr-3 pb-3 pl-3 hover:bg-white/10 from-white/10 to-white/0" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '16px'}}>
<span className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-sans">
                  Retention
                </span>
<span className="text-sm font-semibold font-geist text-white">
                  98%
                </span>
</div>
</div>
<button className="transition-colors duration-300 flex gap-2 group text-xs font-medium bg-gradient-to-br w-full rounded-full pt-2.5 pb-2.5 gap-x-2 gap-y-2 items-center justify-center hover:bg-white/10 text-white from-white/10 to-white/0" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '9999px'}}>
<span className="">View Analytics</span>
<svg className="group-hover:translate-x-0.5 transition-transform" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>

<div className="transition-transform duration-500 hover:scale-[1.01] text-left bg-gradient-to-br w-full max-w-sm rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-xl backdrop-blur-xl from-white/10 to-white/0" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.05))', -BorderRadiusBefore: '24px'}}>
<p className="text-sm leading-relaxed mb-4 font-sans text-zinc-400">
              Enterprise-grade infrastructure with automated scaling and
              zero-knowledge security proofs built-in.
            </p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="inline-flex items-center gap-1.5 text-[10px] font-medium bg-gradient-to-br rounded-full pt-1 pr-2.5 pb-1 pl-2.5 text-zinc-300 from-white/10 to-white/0" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '9999px'}}>
<svg className="" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
                zk-SNARKs
              </span>
<span className="inline-flex items-center gap-1.5 text-[10px] font-medium bg-gradient-to-br rounded-full pt-1 pr-2.5 pb-1 pl-2.5 text-zinc-300 from-white/10 to-white/0" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '9999px'}}>
<svg className="" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
</svg>
                Auto-scale
              </span>
<span className="inline-flex items-center gap-1.5 text-[10px] font-medium bg-gradient-to-br rounded-full pt-1 pr-2.5 pb-1 pl-2.5 text-zinc-300 from-white/10 to-white/0" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '9999px'}}>
<svg className="" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<line x1="3" x2="21" y1="9" y2="9"></line>
<path d="m9 16 3-3 3 3"></path>
</svg>
                CLI Access
              </span>
</div>
<div className="flex gap-2">
<button className="flex-1 flex items-center justify-between rounded-xl border px-3 py-2 transition-colors group bg-zinc-950/50 border-white/5 hover:border-white/20">
<span className="text-xs font-medium font-sans text-zinc-300">
                  Documentation
                </span>
<svg className="text-zinc-500 group-hover:text-white transition-colors" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
<button className="flex-1 flex items-center justify-between rounded-xl border px-3 py-2 transition-colors group bg-zinc-950/50 border-white/5 hover:border-white/20">
<span className="text-xs font-medium font-sans text-zinc-300">
                  API Status
                </span>
<svg className="text-zinc-500 group-hover:text-white transition-colors" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</div>
</div>

<div className="transition-transform duration-500 hover:scale-[1.01] text-left bg-gradient-to-br w-full max-w-sm rounded-3xl pt-4 pr-4 pb-4 pl-4 shadow-xl backdrop-blur-xl from-white/10 to-white/0" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.05))', -BorderRadiusBefore: '24px'}}>
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 font-sans">
                  Live Logs
                </span>
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping"></div>
</div>
<button className="text-[10px] font-medium transition-colors font-sans underline underline-offset-2 text-zinc-400 hover:text-white decoration-zinc-700">
                View all
              </button>
</div>
<div className="space-y-2">

<div className="group rounded-xl border p-2.5 flex items-center gap-3 hover:bg-white/[0.02] transition-colors cursor-default bg-zinc-950/50 border-white/5 hover:border-white/10">
<div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
<svg className="text-blue-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<path className="" d="M7 7h10"></path>
<path d="M7 12h10"></path>
<path d="M7 17h10"></path>
</svg>
</div>
<div className="flex flex-col min-w-0">
<span className="text-xs font-medium truncate font-geist text-zinc-200">
                    Contract Deployed
                  </span>
<span className="text-[10px] text-zinc-500 font-mono">
                    0x82...92a1 · 2m ago
                  </span>
</div>
</div>

<div className="group rounded-xl border p-2.5 flex items-center gap-3 hover:bg-white/[0.02] transition-colors cursor-default bg-zinc-950/50 border-white/5 hover:border-white/10">
<div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
<svg className="text-purple-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="3.29 8.7 12 12 20.71 8.7"></polyline>
<line x1="12" x2="12" y1="22" y2="12"></line>
</svg>
</div>
<div className="flex flex-col min-w-0">
<span className="text-xs font-medium truncate font-geist text-zinc-200">
                    New Block Synced
                  </span>
<span className="text-[10px] text-zinc-500 font-mono">
                    #18293492 · 120ms
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="w-full max-w-7xl z-20 mt-0 mr-auto mb-15 ml-auto pt-6 pr-6 pb-6 pl-6 relative overflow-hidden max-w-full" id="security">

<div className="flex flex-col text-center mb-20 items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 mb-6">
<svg aria-hidden="true" className="iconify text-orange-500 iconify--solar" data-icon="solar:star-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path>
<path className="" d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path>
</svg>
<span className="text-xs font-semibold uppercase tracking-widest font-sans text-orange-200">
            Trust Center
          </span>
</div>
<h2 className="md:text-7xl text-5xl font-medium tracking-tighter font-manrope mb-6 text-white">
          Built to Global Healthcare Standards
        </h2>
<p className="text-xl font-sans max-w-2xl leading-relaxed text-gray-400">
          TERN ensures data integrity through encryption at rest and in transit,
          with full audit trails for every staffing decision.
        </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 mb-12 pt-4 pr-4 pb-4 pl-4 gap-x-6 gap-y-6" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))'}}>
<style>
          @keyframes carousel-fade {
              0% {
                  opacity: 0;
                  z-index: 10;
              }

              5% {
                  opacity: 1;
                  z-index: 20;
              }

              28% {
                  opacity: 1;
                  z-index: 20;
              }

              33% {
                  opacity: 0;
                  z-index: 10;
              }

              100% {
                  opacity: 0;
                  z-index: 10;
              }
          }

          .animate-carousel {
              animation: carousel-fade 15s infinite;
              position: absolute;
              inset: 0;
              height: 100%;
              width: 100%;
          }

          /* Fix for relative positioning context in grid cell */
          .carousel-container {
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              min-height: 600px;
          }

          @media (min-width: 1024px) {
              .carousel-container {
                  min-height: auto;
              }
          }

          .carousel-card {
              grid-area: 1 / 1 / 2 / 2;
          }
        </style>

<div className="lg:col-span-7 flex flex-col gap-6">

<div className="group transition-all duration-500 hover:bg-zinc-900/60 bg-zinc-900/40 rounded-[2.5rem] relative backdrop-blur-sm px-5 py-8 md:p-10" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', -BorderRadiusBefore: '2.5rem'}}>

<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-bl from-blue-500/5 via-transparent to-transparent opacity-0 rounded-[2.5rem] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

<div className="flex flex-col items-center justify-center p-8 rounded-2xl border border-white/5 bg-zinc-950/40 transition-colors hover:bg-zinc-900/60 group/item text-center">
<div className="mb-6 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center overflow-hidden shadow-lg group-hover/item:scale-105 transition-transform duration-500 relative">
<div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
<img alt="ISO Logo" className="group-hover/item:opacity-100 transition-opacity group-hover/item:grayscale-0 opacity-80 w-full h-full object-cover bg-center pt-5 pr-5 pb-5 pl-5 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ee58f05c-805d-42d4-b4a9-9c00e9da5032_3840w.png?w=800&amp;q=80"/>
</div>
<div className="flex flex-col gap-1.5">
<h3 className="font-medium tracking-tight font-geist text-white whitespace-nowrap text-sm sm:text-lg">
                      ISO 27001
                    </h3>
<p className="text-xs font-normal text-zinc-500 uppercase tracking-wider">
                      Certified
                    </p>
</div>
</div>

<div className="flex flex-col items-center justify-center p-8 rounded-2xl border border-white/5 bg-zinc-950/40 transition-colors hover:bg-zinc-900/60 group/item text-center">
<div className="mb-6 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center overflow-hidden shadow-lg group-hover/item:scale-105 transition-transform duration-500 relative">
<div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay"></div>
<img alt="Cyber Security Logo" className="group-hover/item:opacity-100 transition-opacity group-hover/item:grayscale-0 opacity-80 w-full h-full object-contain grayscale p-5" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/447bddff-e8f5-4914-a4ed-ab06a540e7ff_3840w.png"/>
</div>
<div className="flex flex-col gap-1.5">
<h3 className="font-medium text-white tracking-tight font-geist whitespace-nowrap text-sm sm:text-lg">
                      Cyber Essentials
                    </h3>
<p className="text-xs font-normal text-zinc-500 uppercase tracking-wider">
                      Certified
                    </p>
</div>
</div>

<div className="flex flex-col items-center justify-center p-8 rounded-2xl border border-white/5 bg-zinc-950/40 transition-colors hover:bg-zinc-900/60 group/item text-center">
<div className="mb-6 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center overflow-hidden shadow-lg group-hover/item:scale-105 transition-transform duration-500 relative">
<div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay"></div>
<img alt="GDPR Logo" className="group-hover/item:opacity-100 transition-opacity group-hover/item:grayscale-0 opacity-80 w-full h-full object-contain grayscale p-5" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4a04ed62-08c4-4292-a185-6deeaa28b85f_3840w.jpg"/>
</div>
<div className="flex flex-col gap-1.5">
<h3 className="font-medium tracking-tight font-geist text-white whitespace-nowrap text-sm sm:text-lg">
                      UK GDPR
                    </h3>
<p className="text-xs font-normal text-zinc-500 uppercase tracking-wider">
                      Compliant
                    </p>
</div>
</div>
</div>

<blockquote className="text-lg font-sans leading-relaxed mb-8 text-gray-300 max-w-2xl border-l-2 border-emerald-500/30 pl-6">
                "We ensure rigorous data protection and compliance standards for
                all clinical workforce operations."
              </blockquote>

<div className="flex items-center gap-2 text-emerald-500">
<div className="relative flex h-2.5 w-2.5 mr-1">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-500"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
</div>
<span className="font-medium text-sm tracking-wide">
                  Active &amp; Verified
                </span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 gap-x-6 gap-y-6">

<div className="md:col-span-2 group transition-all duration-500 md:p-10 flex flex-col hover:bg-zinc-900/60 bg-zinc-900/40 rounded-[2.5rem] relative backdrop-blur-sm justify-between px-5 py-8" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', -BorderRadiusBefore: '2.5rem'}}>

<div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="z-10 w-full relative">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
<div className="space-y-2">
<h3 className="text-2xl font-medium tracking-tight font-manrope flex items-center gap-3 text-white">
                      Compliance Roadmap
                    </h3>
<p className="text-sm font-sans max-w-lg text-zinc-400">
                      We are actively engaged in audits and implementation for
                      the following regulatory standards.
                    </p>
</div>

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-orange-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-xs font-medium uppercase tracking-wider font-sans text-orange-200 whitespace-nowrap">
                      Verification Underway
                    </span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full gap-x-4 gap-y-4">

<div className="p-8 rounded-2xl border transition-all duration-300 group/item relative overflow-hidden bg-zinc-950/40 border-white/5 hover:border-white/10 hover:bg-zinc-900/60 flex flex-col items-center justify-between">

<div className="mb-6 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center overflow-hidden shadow-lg group-hover/item:scale-105 transition-transform duration-500 relative">
<div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay"></div>
<img alt="HIPAA" className="group-hover/item:opacity-100 group-hover/item:grayscale-0 transition-all duration-500 opacity-50 w-full h-full object-contain pt-4 pr-4 pb-4 pl-4 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9efd5b05-cf9e-43fa-b79b-e9e163ad6333_3840w.png?w=800&amp;q=80"/>
</div>
<div className="w-full text-center flex flex-col items-center">
<h4 className="font-medium tracking-tight font-manrope text-white whitespace-nowrap mb-6 text-sm sm:text-lg">
                        HIPAA
                      </h4>
<div className="w-full space-y-2">
<div className="flex items-center justify-between w-full">
<span className="text-[10px] font-medium uppercase tracking-[0.2em] text-indigo-400 whitespace-nowrap">
                            In Review
                          </span>
</div>
<div className="h-1 w-full rounded-full overflow-hidden bg-zinc-800">
<div className="h-full w-1/2 bg-indigo-500 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl border transition-all duration-300 group/item relative overflow-hidden bg-zinc-950/40 border-white/5 hover:border-white/10 hover:bg-zinc-900/60 flex flex-col items-center justify-between">

<div className="mb-6 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center overflow-hidden shadow-lg group-hover/item:scale-105 transition-transform duration-500 relative">
<div className="absolute inset-0 bg-purple-500/10 mix-blend-overlay"></div>
<img alt="DPIA" className="group-hover/item:opacity-100 group-hover/item:grayscale-0 transition-all duration-500 opacity-50 w-full h-full object-cover pt-4 pr-4 pb-4 pl-4 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/75591abf-4abf-4d54-ad34-3a05f47188ec_3840w.jpg?w=800&amp;q=80"/>
</div>
<div className="w-full text-center flex flex-col items-center">
<h4 className="font-medium tracking-tight font-manrope text-white whitespace-nowrap mb-6 text-sm sm:text-lg">
                        DPIA
                      </h4>
<div className="w-full space-y-2">
<div className="flex items-center justify-between w-full">
<span className="text-[10px] font-medium uppercase tracking-[0.2em] text-purple-400 whitespace-nowrap">
                            Ongoing
                          </span>
</div>
<div className="h-1 w-full rounded-full overflow-hidden bg-zinc-800">
<div className="h-full w-3/4 bg-purple-500 rounded-full animate-pulse"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 carousel-container relative">

<div className="carousel-card group flex flex-col transition-all duration-500 rounded-[2.5rem] relative backdrop-blur-sm justify-between animate-carousel hover:bg-zinc-900/60 bg-zinc-900/40 px-5 py-8 md:p-10" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', -BorderRadiusBefore: '2.5rem', animationDelay: '0s', opacity: '0'}}>

<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 rounded-[2.5rem] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10">
<div className="flex items-baseline gap-2 mb-4">
<h3 className="text-6xl font-semibold tracking-tighter font-geist text-white">
                  System Core
                </h3>
</div>
<p className="text-xl font-medium border-l-2 border-orange-500 pl-4 mb-12 text-zinc-300">
                Healthcare-Native Infrastructure
              </p>
<blockquote className="text-lg font-sans leading-relaxed mb-8 text-gray-300">
                "TERN provides the standardized infrastructure needed to unify
                our clinical talent flow. It acts as the central intelligence
                layer, ensuring every clinician is verified against a single
                standard."
              </blockquote>
</div>
<div className="relative z-10 flex items-center justify-between pt-8 border-t border-white/5">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full border overflow-hidden bg-zinc-800 border-white/10">
<img alt="Avatar" className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=uniswap"/>
</div>
<div>
<h4 className="text-sm font-semibold font-manrope text-white">
                    Sushant V.
                  </h4>
<p className="text-xs text-zinc-500 font-sans">
                    Director of Healthcare Systems
                  </p>
</div>
</div>
<div className="text-zinc-500 opacity-50 group-hover:opacity-100 transition-opacity">
<span className="iconify text-2xl" data-icon="simple-icons:uniswap"></span>
</div>
</div>
</div>

<div className="carousel-card group flex flex-col transition-all duration-500 rounded-[2.5rem] relative backdrop-blur-sm justify-between animate-carousel hover:bg-zinc-900/60 bg-zinc-900/40 px-5 py-8 md:p-10" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', -BorderRadiusBefore: '2.5rem', animationDelay: '5s', opacity: '0'}}>

<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 rounded-[2.5rem] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10">
<div className="flex items-baseline gap-2 mb-4">
<h3 className="text-8xl font-semibold tracking-tighter font-geist text-white">
                  99
                  <span className="text-blue-500">%</span>
</h3>
</div>
<p className="text-xl font-medium border-l-2 border-blue-500 pl-4 mb-12 text-zinc-300">
                Uptime Service Level Agreement (SLA)
              </p>
<span className="iconify text-4xl mb-6 text-zinc-700" data-icon="solar:quote-up-bold-duotone"></span>
<blockquote className="text-lg font-sans leading-relaxed mb-8 text-gray-300">
                "We have seen zero downtime even during peak emergency
                healthcare staffing cycles."
              </blockquote>
</div>
<div className="relative z-10 flex items-center justify-between pt-8 border-t border-white/5">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full border overflow-hidden bg-zinc-800 border-white/10">
<img alt="Avatar" className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=arbitrum"/>
</div>
<div>
<h4 className="text-sm font-semibold font-manrope text-white">
                    Dr. Elena S.
                  </h4>
<p className="text-xs text-zinc-500 font-sans">
                    Clinical Operations Lead
                  </p>
</div>
</div>
<div className="text-zinc-500 opacity-50 group-hover:opacity-100 transition-opacity">
<span className="iconify text-2xl" data-icon="simple-icons:arbitrum"></span>
</div>
</div>
</div>

<div className="carousel-card group flex flex-col transition-all duration-500 rounded-[2.5rem] relative backdrop-blur-sm justify-between animate-carousel hover:bg-zinc-900/60 bg-zinc-900/40 px-5 py-8 md:p-10" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', -BorderRadiusBefore: '2.5rem', animationDelay: '10s', opacity: '0'}}>

<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-red-500/5 via-transparent to-transparent opacity-0 rounded-[2.5rem] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10">
<div className="flex items-baseline gap-2 mb-4">
<h3 className="text-8xl font-semibold tracking-tighter font-geist text-white">
                  1.5
                  <span className="text-red-500 text-4xl align-top ml-1">sec</span>
</h3>
</div>
<p className="text-xl font-medium border-l-2 border-red-500 pl-4 mb-12 text-zinc-300">
                Clinical AI Inference Latency.
              </p>
<span className="iconify text-4xl mb-6 text-zinc-700" data-icon="solar:quote-up-bold-duotone"></span>
<blockquote className="leading-relaxed text-lg mb-8 text-gray-300">
                "The speed of TERN’s inference infrastructure is unmatched. We
                can now validate clinical competency across multiple regions
                almost instantaneously."
              </blockquote>
</div>
<div className="relative z-10 flex items-center justify-between pt-8 border-t border-white/5">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full border overflow-hidden bg-zinc-800 border-white/10">
<img alt="Avatar" className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=optimism"/>
</div>
<div className="">
<h4 className="text-sm font-semibold font-manrope text-white">
                    Mohammed A.
                  </h4>
<p className="text-xs text-zinc-500 font-sans">
                    Chief Transformation Officer
                  </p>
</div>
</div>
<div className="text-zinc-500 opacity-50 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" data-icon="simple-icons:optimism" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0M9.61 8.705q.693 0 1.244.235q.549.225.863.683q.316.45.316 1.08q0 .19-.045.479a20 20 0 0 1-.324 1.558q-.315 1.234-1.09 1.846q-.774.603-2.072.604q-1.072 0-1.756-.504q-.675-.514-.676-1.46q0-.197.045-.486q.117-.648.334-1.558q.612-2.477 3.16-2.477m4.17.09h2.397q1 0 1.603.414q.613.414.612 1.197q-.001.225-.055.47q-.224 1.035-.908 1.53q-.676.496-1.856.496h-1.217l-.414 1.973a.26.26 0 0 1-.1.162a.27.27 0 0 1-.17.063h-1.224q-.1 0-.154-.063a.22.22 0 0 1-.027-.162L13.51 9.02a.26.26 0 0 1 .097-.162a.28.28 0 0 1 .172-.063m-4.287 1.207q-.503 0-.863.297q-.351.298-.504.91q-.162.603-.324 1.477a2 2 0 0 0-.037.379q0 .828.865.828q.504 0 .855-.297q.36-.297.514-.91q.206-.847.314-1.477a2 2 0 0 0 .038-.389q0-.819-.858-.818m5.45.045l-.342 1.611h1.035q.379 0 .658-.207a.97.97 0 0 0 .377-.594q.027-.152.027-.27q0-.26-.152-.396q-.153-.144-.524-.144z" fill="currentColor"></path>
</svg>
</div>
</div>
</div>
</div>
</div>

</section>
<section className="z-20 w-full max-w-7xl mt-32 mr-auto mb-32 ml-auto pr-6 pl-6 relative">
<div className="grid lg:grid-cols-12 gap-x-16 gap-y-16 items-start">

<div className="lg:col-span-5 pt-4">
<h2 className="text-5xl md:text-6xl font-medium tracking-tighter font-manrope mb-6 leading-[1.1] text-white">
            Discuss your workforce requirements.
          </h2>
<p className="leading-relaxed text-lg max-w-md text-zinc-400" style={{}}>
            Speak with our team today.
          </p>
</div>

<div className="lg:col-span-7">
<div className="md:p-10 overflow-hidden border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl backdrop-blur-xl bg-zinc-900/40 border-white/10">

<div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -z-10 pointer-events-none -mr-16 -mt-16"></div>
<form className="z-10 relative space-y-10" id="demo-form" onsubmit="event.preventDefault(); const btn = document.getElementById('submit-btn'); const btnText = document.getElementById('btn-text'); const btnLoader = document.getElementById('btn-loader'); const btnArrow = document.getElementById('btn-arrow'); const success = document.getElementById('success-message'); btn.setAttribute('disabled', 'true'); btnText.classList.add('opacity-0'); btnArrow.classList.add('opacity-0'); btnLoader.classList.remove('hidden'); setTimeout(() =&gt; { btn.classList.add('hidden'); success.classList.remove('hidden'); }, 1500);">

<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div className="group relative">
<input className="peer w-full bg-transparent border-b py-3 placeholder-transparent focus:border-orange-500 focus:outline-none transition-colors text-lg border-white/10 text-white" id="name" placeholder="Name" required="" type="text"/>
<label className="absolute left-0 -top-5 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-orange-500 uppercase tracking-wider font-medium cursor-text" htmlFor="name">
                    Name
                    <span className="text-orange-500">*</span>
</label>
</div>

<div className="group relative">
<input className="peer w-full bg-transparent border-b py-3 placeholder-transparent focus:border-orange-500 focus:outline-none transition-colors text-lg border-white/10 text-white" id="email" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" placeholder="Email" required="" title="Please enter a valid email address" type="email"/>
<label className="absolute left-0 -top-5 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-orange-500 uppercase tracking-wider font-medium cursor-text" htmlFor="email">
                    Work Email
                    <span className="text-orange-500">*</span>
</label>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div className="group relative">
<label className="absolute -top-5 left-0 text-[10px] text-zinc-500 uppercase tracking-wider font-medium" htmlFor="phone">
                    Phone (Optional)
                  </label>
<div className="flex items-center border-b focus-within:border-orange-500 transition-colors h-full border-white/10">
<div className="shrink-0 relative">
<select className="appearance-none focus:outline-none cursor-pointer border-none -translate-x-2 text-base bg-transparent w-[90px] ring-0 pt-3 pr-3 pb-3 pl-2 text-zinc-300" id="country-code">
<option selected="" value="+971">🇦🇪 +971</option>
<option value="+1">🇺🇸 +1</option>
<option value="+1">🇨🇦 +1</option>
<option value="+44">🇬🇧 +44</option>
<option value="+353">🇮🇪 +353</option>
<option value="+49">🇩🇪 +49</option>
<option value="+33">🇫🇷 +33</option>
<option value="+31">🇳🇱 +31</option>
<option value="+41">🇨🇭 +41</option>
<option value="+39">🇮🇹 +39</option>
<option value="+34">🇪🇸 +34</option>
<option value="+351">🇵🇹 +351</option>
<option value="+46">🇸🇪 +46</option>
<option value="+47">🇳🇴 +47</option>
<option value="+45">🇩🇰 +45</option>
<option value="+48">🇵🇱 +48</option>
<option value="+40">🇷🇴 +40</option>
<option value="+380">🇺🇦 +380</option>
<option value="+7">🇷🇺 +7</option>
<option value="+90">🇹🇷 +90</option>
<option value="+91">🇮🇳 +91</option>
<option value="+92">🇵🇰 +92</option>
<option value="+880">🇧🇩 +880</option>
<option value="+94">🇱🇰 +94</option>
<option value="+977">🇳🇵 +977</option>
<option value="+93">🇦🇫 +93</option>
<option value="+966">🇸🇦 +966</option>
<option value="+974">🇶🇦 +974</option>
<option value="+968">🇴🇲 +968</option>
<option value="+965">🇰🇼 +965</option>
<option value="+973">🇧🇭 +973</option>
<option value="+65">🇸🇬 +65</option>
<option value="+60">🇲🇾 +60</option>
<option value="+62">🇮🇩 +62</option>
<option value="+63">🇵🇭 +63</option>
<option value="+66">🇹🇭 +66</option>
<option value="+84">🇻🇳 +84</option>
<option value="+86">🇨🇳 +86</option>
<option value="+81">🇯🇵 +81</option>
<option value="+82">🇰🇷 +82</option>
<option value="+7">🇰🇿 +7</option>
<option value="+998">🇺🇿 +998</option>
<option value="+994">🇦🇿 +994</option>
<option value="+995">🇬🇪 +995</option>
<option value="+374">🇦🇲 +374</option>
<option value="+27">🇿🇦 +27</option>
<option value="+216">🇹🇳 +216</option>
<option value="+20">🇪🇬 +20</option>
<option value="+234">🇳🇬 +234</option>
<option value="+254">🇰🇪 +254</option>
<option value="+233">🇬🇭 +233</option>
<option value="+251">🇪🇹 +251</option>
<option value="+61">🇦🇺 +61</option>
<option value="+64">🇳🇿 +64</option>
</select>

<div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
<input className="border-none placeholder-zinc-700 focus:ring-0 focus:outline-none text-base bg-transparent w-full h-full pt-3 pb-3 pl-3 text-white" id="phone" inputmode="numeric" maxlength="10" oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0, 10)" pattern="[0-9]*" placeholder="50 123 4567" type="tel"/>
</div>
</div>

<div className="group relative">
<input className="peer w-full bg-transparent border-b py-3 placeholder-transparent focus:border-orange-500 focus:outline-none transition-colors text-lg border-white/10 text-white" id="organization" placeholder="Organization" required="" type="text"/>
<label className="absolute left-0 -top-5 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-orange-500 uppercase tracking-wider font-medium cursor-text" htmlFor="organization">
                    Organization
                    <span className="text-orange-500">*</span>
</label>
</div>
</div>

<div className="group relative">
<textarea className="peer w-full bg-transparent border-b py-3 placeholder-transparent focus:border-orange-500 focus:outline-none transition-colors text-lg resize-none border-white/10 text-white" id="message" placeholder="Anything we should know?" rows="3"></textarea>
<label className="absolute left-0 -top-5 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-orange-500 uppercase tracking-wider font-medium cursor-text" htmlFor="message">
                  Anything we should know?
                </label>
</div>

<div className="flex flex-col items-end gap-6 pt-4">
<button className="group flex gap-3 uppercase transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed md:w-auto text-xs font-semibold tracking-widest w-full pt-4 pr-10 pb-4 pl-10 relative gap-x-3 gap-y-3 items-center justify-center rounded-sm hover:bg-zinc-200 text-black bg-white" id="submit-btn" type="submit">
<span className="" id="btn-text">Book Demo</span>

<svg className="hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 animate-spin text-zinc-800" fill="none" id="btn-loader" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
<path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
</svg>

<svg className="group-hover:translate-x-1 transition-transform" fill="none" height="16" id="btn-arrow" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>

<div className="hidden w-full bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 flex items-center gap-3 text-emerald-400" id="success-message">
<div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm font-medium">
                    Thank you! Our team will reach out shortly.
                  </span>
</div>
</div>
</form>
</div>
</div>
</div>
</section>
<footer className="z-20 w-full border-t pt-24 pb-8 relative backdrop-blur-sm bg-zinc-900/30 border-white/5">
<div className="w-full max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid lg:grid-cols-12 gap-16 mb-24">

<div className="lg:col-span-5 flex flex-col">

<h3 className="mb-4">
<img alt="TERN" className="w-auto h-12 object-contain rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2bcdd201-cf91-4148-b0a2-fe375ba529d0_800w.png"/>
</h3>
<p className="text-sm text-zinc-500 max-w-xs">
              Clinical AI Workforce Operating System
            </p>
</div>

<div className="lg:col-span-7">
<div className="grid grid-cols-2 md:grid-cols-3 gap-10">
<div className="flex flex-col gap-8">
<h4 className="text-base font-medium font-manrope text-white">
                  About Us
                </h4>
<div className="flex flex-col gap-4">
<a className="transition-colors text-sm hover:text-white text-zinc-400" href="/platform">
                    Platform
                  </a>
<a className="transition-colors text-sm hover:text-white text-zinc-400" href="#">
                    Team
                  </a>
<a className="transition-colors text-sm hover:text-white text-zinc-400" href="/security">
                    Security
                  </a>
<a className="transition-colors text-sm hover:text-white text-zinc-400" href="#">
                    Company
                  </a>
</div>
</div>
<div className="flex flex-col gap-8">
<h4 className="text-base font-medium font-manrope text-white">
                  Support
                </h4>
<div className="flex flex-col gap-4">
<a className="transition-colors text-sm hover:text-white text-zinc-400" href="/book-a-demo">
                    Contact Us
                  </a>
<a className="transition-colors text-sm hover:text-white text-zinc-400" href="/book-a-demo">
                    Book A Demo
                  </a>
<a className="transition-colors text-sm hover:text-white text-zinc-400" href="/book-a-demo">
                    Request Technical Briefing
                  </a>
</div>
</div>
<div className="flex flex-col gap-8">
<h4 className="text-base font-medium font-manrope text-white">
                  Social
                </h4>
<div className="flex flex-col gap-4">
<a className="group flex items-center gap-3 transition-colors text-sm hover:text-white text-zinc-400" href="https://www.instagram.com/terngroup/">
<svg aria-hidden="true" className="" data-icon="simple-icons:instagram" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M7.03.084c-1.277.06-2.149.264-2.91.563a5.9 5.9 0 0 0-2.124 1.388a5.9 5.9 0 0 0-1.38 2.127C.321 4.926.12 5.8.064 7.076s-.069 1.688-.063 4.947s.021 3.667.083 4.947c.061 1.277.264 2.149.563 2.911c.308.789.72 1.457 1.388 2.123a5.9 5.9 0 0 0 2.129 1.38c.763.295 1.636.496 2.913.552c1.278.056 1.689.069 4.947.063s3.668-.021 4.947-.082c1.28-.06 2.147-.265 2.91-.563a5.9 5.9 0 0 0 2.123-1.388a5.9 5.9 0 0 0 1.38-2.129c.295-.763.496-1.636.551-2.912c.056-1.28.07-1.69.063-4.948c-.006-3.258-.02-3.667-.081-4.947c-.06-1.28-.264-2.148-.564-2.911a5.9 5.9 0 0 0-1.387-2.123a5.9 5.9 0 0 0-2.128-1.38c-.764-.294-1.636-.496-2.914-.55C15.647.009 15.236-.006 11.977 0S8.31.021 7.03.084m.14 21.693c-1.17-.05-1.805-.245-2.228-.408a3.7 3.7 0 0 1-1.382-.895a3.7 3.7 0 0 1-.9-1.378c-.165-.423-.363-1.058-.417-2.228c-.06-1.264-.072-1.644-.08-4.848c-.006-3.204.006-3.583.061-4.848c.05-1.169.246-1.805.408-2.228c.216-.561.477-.96.895-1.382a3.7 3.7 0 0 1 1.379-.9c.423-.165 1.057-.361 2.227-.417c1.265-.06 1.644-.072 4.848-.08c3.203-.006 3.583.006 4.85.062c1.168.05 1.804.244 2.227.408c.56.216.96.475 1.382.895s.681.817.9 1.378c.165.422.362 1.056.417 2.227c.06 1.265.074 1.645.08 4.848c.005 3.203-.006 3.583-.061 4.848c-.051 1.17-.245 1.805-.408 2.23c-.216.56-.477.96-.896 1.38a3.7 3.7 0 0 1-1.378.9c-.422.165-1.058.362-2.226.418c-1.266.06-1.645.072-4.85.079s-3.582-.006-4.848-.06m9.783-16.192a1.44 1.44 0 1 0 1.437-1.442a1.44 1.44 0 0 0-1.437 1.442M5.839 12.012a6.161 6.161 0 1 0 12.323-.024a6.162 6.162 0 0 0-12.323.024M8 12.008A4 4 0 1 1 12.008 16A4 4 0 0 1 8 12.008" fill="currentColor"></path>
</svg>
                    Instagram
                  </a>
<a className="group flex items-center gap-3 transition-colors text-sm hover:text-white text-zinc-400" href="https://www.linkedin.com/company/terngroup/">
<svg aria-hidden="true" className="" data-icon="simple-icons:linkedin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" fill="currentColor"></path>
</svg>
                    LinkedIn
                  </a>
<a className="group flex items-center gap-3 transition-colors text-sm hover:text-white text-zinc-400" href="https://www.youtube.com/@TERN-Group">
<svg aria-hidden="true" className="" data-icon="simple-icons:youtube" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M23.498 6.186a3.02 3.02 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.02 3.02 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.02 3.02 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.02 3.02 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814M9.545 15.568V8.432L15.818 12z" fill="currentColor"></path>
</svg>
                    YouTube
                  </a>
</div>
</div>
</div>
</div>
</div>

<div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-6 border-white/5">
<p className="text-xs text-zinc-500">Copyright © TERN Group</p>
<div className="flex items-center gap-10">
<a className="text-xs text-zinc-500 transition-colors font-sans hover:text-white" href="#">
              Terms of Service
            </a>
<button className="group flex transition-colors uppercase text-xs text-zinc-500 tracking-wider gap-x-3 gap-y-3 items-center hover:text-white" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
              Back to top
              <div className="w-6 h-6 rounded border flex items-center justify-center group-hover:border-zinc-600 group-hover:bg-zinc-800 transition-all border-zinc-800">
<svg aria-hidden="true" className="" data-icon="solar:arrow-up-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M12 20.75a.75.75 0 0 0 .75-.75v-9.25h-1.5V20c0 .414.336.75.75.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path>
<path d="M6 10.75a.75.75 0 0 1-.53-1.28l6-6a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1-.53 1.28z" fill="currentColor"></path>
</svg>
</div>
</button>
</div>
</div>
</div>
</footer>


    </>
  );
}
