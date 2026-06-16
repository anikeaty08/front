import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        (function(){
            const h = document.querySelector('[data-element-id="aura-emmsukjbn1khw7ebp"]');
            if(!h) return;
            h.addEventListener('mousemove', e => {
                if(Math.random() > 0.15) return;
                const b = document.createElement('div');
                const s = Math.random() * 20 + 10;
                b.style.cssText = `position:absolute;width:${s}px;height:${s}px;border:2px solid #E0FF4F;border-radius:50%;pointer-events:none;z-index:9999;left:${e.clientX - h.getBoundingClientRect().left}px;top:${e.clientY - h.getBoundingClientRect().top}px;transform:translate(-50%,-50%);transition:transform 1.5s ease-out, opacity 1.5s ease-out;background:rgba(224,255,79,0.1);`;
                h.appendChild(b);
                requestAnimationFrame(() => {
                    b.style.transform = `translate(-50%, -${100 + Math.random()*150}px) scale(${1 + Math.random()})`;
                    b.style.opacity = '0';
                });
                setTimeout(() => b.remove(), 1500);
            });
        })();
        


        // Initialize Lucide icons
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="JUFg0MwEcM3urKc9W7Vg"></div>

</div></div>

<div className="uppercase flex gap-3 z-50 text-sm font-medium text-white tracking-widest text-center bg-[#00272B] pt-2.5 pb-2.5 relative gap-x-3 gap-y-3 items-center justify-center">FREE SHIPPING OVER $75</div>

<nav className="sticky lg:px-12 flex transition-all duration-300 bg-white/70 z-50 border-[#00272B]/5 border-b pt-5 pr-6 pb-5 pl-6 top-0 backdrop-blur-xl items-center justify-between">
<div className="hidden lg:flex items-center gap-10">
<div className="relative group">
<button className="font-medium text-lg flex items-center gap-1.5 hover:text-[#00272B]/60 transition-colors py-2">
                    SHOP 
                    <i className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="absolute top-full left-0 pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
<div className="bg-white/90 backdrop-blur-xl border border-[#00272B]/10 rounded-2xl shadow-[0_20px_40px_rgba(0,39,43,0.1)] p-3 flex flex-col gap-1">
<a className="px-4 py-2.5 hover:bg-[#E0FF4F]/50 rounded-xl transition-colors font-medium text-[#00272B]" href="#">All Flavors</a>
<a className="px-4 py-2.5 hover:bg-[#E0FF4F]/50 rounded-xl transition-colors font-medium text-[#00272B]" href="#">Variety Packs</a>
<a className="px-4 py-2.5 hover:bg-[#E0FF4F]/50 rounded-xl transition-colors font-medium text-[#00272B]" href="#">Merch</a>
</div>
</div>
</div>
<div className="relative group">
<a className="font-medium text-lg flex items-center gap-1.5 hover:text-[#00272B]/60 transition-colors py-2" href="#">
                    SUBSCRIBE
                    <i className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" data-lucide="chevron-down" strokeWidth="1.5"></i>
</a>
<div className="absolute top-full left-0 pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
<div className="bg-white/90 backdrop-blur-xl border border-[#00272B]/10 rounded-2xl shadow-[0_20px_40px_rgba(0,39,43,0.1)] p-3 flex flex-col gap-1">
<a className="px-4 py-2.5 hover:bg-[#E0FF4F]/50 rounded-xl transition-colors font-medium text-[#00272B]" href="#">Manage Plan</a>
<a className="px-4 py-2.5 hover:bg-[#E0FF4F]/50 rounded-xl transition-colors font-medium text-[#00272B]" href="#">Perks &amp; Rewards</a>
<a className="px-4 py-2.5 hover:bg-[#E0FF4F]/50 rounded-xl transition-colors font-medium text-[#00272B]" href="#">Gift a Subscription</a>
</div>
</div>
</div>
</div>

<a className="lg:text-4xl uppercase -translate-x-1/2 flex items-center gap-1 group text-3xl font-extrabold tracking-tighter absolute left-1/2" href="#">
<div className="absolute -top-16 left-0 right-0 h-20 overflow-hidden pointer-events-none z-10">
<div className="absolute bottom-[-20px] left-[15%] w-1.5 h-1.5 bg-[#A3D900] rounded-full animate-[rise_4s_ease-in_infinite_0.5s]"></div>
<div className="absolute bottom-[-20px] left-[35%] w-2 h-2 border border-[#E0FF4F] rounded-full animate-[rise_5s_ease-in_infinite_1.5s]"></div>
<div className="absolute bottom-[-20px] left-[60%] w-1 h-1 bg-[#A3D900] rounded-full animate-[rise_3s_ease-in_infinite_0.2s]"></div>
<div className="absolute bottom-[-20px] left-[80%] w-2.5 h-2.5 border border-[#A3D900] rounded-full animate-[rise_4.5s_ease-in_infinite_0.8s]"></div>
<div className="absolute bottom-[-20px] left-[90%] w-1.5 h-1.5 bg-[#E0FF4F] rounded-full animate-[rise_6s_ease-in_infinite_1.2s]"></div>
</div>
    NEON<span className="text-[#A3D900] font-ibm-sans relative drop-shadow-[0_1px_1px_rgba(0,39,43,0.3)]" style={{WebkitTextStroke: '1.00px white'}}>
        PULP
        <span className="group-hover:opacity-100 transition-opacity duration-300 bg-[#A3D900] opacity-90 absolute -inset-2 blur-lg -z-10 rounded-full">
<style>
        span:has(> [data-element-id="aura-emn1edwdh3euwicrh"]) {
            color: transparent !important;
            -webkit-text-fill-color: transparent !important;
            -webkit-text-stroke: 2px rgba(255, 255, 255, 0.9) !important;
        }
    </style>
</span>
</span>
</a>
<div className="hidden lg:flex gap-x-1 gap-y-10 items-center">
<div className="relative group">
<button className="font-medium text-lg flex items-center gap-1.5 hover:text-[#00272B]/60 transition-colors py-2">
                    LEARN 
                    <i className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="absolute top-full left-0 pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
<div className="bg-white/90 backdrop-blur-xl border border-[#00272B]/10 rounded-2xl shadow-[0_20px_40px_rgba(0,39,43,0.1)] p-3 flex flex-col gap-1">
<a className="px-4 py-2.5 hover:bg-[#E0FF4F]/50 rounded-xl transition-colors font-medium text-[#00272B]" href="#">Our Story</a>
<a className="px-4 py-2.5 hover:bg-[#E0FF4F]/50 rounded-xl transition-colors font-medium text-[#00272B]" href="#">Ingredients</a>
<a className="px-4 py-2.5 hover:bg-[#E0FF4F]/50 rounded-xl transition-colors font-medium text-[#00272B]" href="#">Sustainability</a>
</div>
</div>
</div>
<div className="relative group">
<a className="font-medium text-lg flex items-center gap-1.5 hover:text-[#00272B]/60 transition-colors py-2" href="#">
                    FIND NEON PULP
                    <i className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" data-lucide="chevron-down" strokeWidth="1.5"></i>
</a>
<div className="absolute top-full left-0 pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
<div className="bg-white/90 backdrop-blur-xl border border-[#00272B]/10 rounded-2xl shadow-[0_20px_40px_rgba(0,39,43,0.1)] p-3 flex flex-col gap-1">
<a className="px-4 py-2.5 hover:bg-[#E0FF4F]/50 rounded-xl transition-colors font-medium text-[#00272B]" href="#">Store Locator</a>
<a className="px-4 py-2.5 hover:bg-[#E0FF4F]/50 rounded-xl transition-colors font-medium text-[#00272B]" href="#">Distributors</a>
<a className="px-4 py-2.5 hover:bg-[#E0FF4F]/50 rounded-xl transition-colors font-medium text-[#00272B]" href="#">Upcoming Events</a>
</div>
</div>
</div>
<div className="flex items-center gap-5 border-l border-[#00272B]/10 pl-6 ml-2">
<button className="hover:text-[#00272B]/60 transition-colors"><i className="w-6 h-6" data-lucide="user" strokeWidth="1.5"></i></button>
<button className="hover:text-[#00272B]/60 transition-colors relative">
<i className="w-6 h-6" data-lucide="shopping-cart" strokeWidth="1.5"></i>
<span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#E0FF4F] text-[#00272B] rounded-full text-xs font-semibold flex items-center justify-center border border-[#00272B]">0</span>
</button>
</div>
</div>

<button className="lg:hidden ml-auto" style={{display: 'none'}}>
<i className="w-7 h-7" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</nav>

<header className="min-h-[90vh] flex overflow-hidden w-full relative items-center" style={{cursor: 'url(\'data:image/svg+xml', charset=utf-8,%3Csvg xmlns=%22http: '//www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22%3E%3Ccircle cx=%2212%22 cy=%2212%22 r=%2210%22 fill=%22rgba(224,255,79,0.2)%22 stroke=%22%23E0FF4F%22 strokeWidth=%222%22/%3E%3Ccircle cx=%228%22 cy=%228%22 r=%222%22 fill=%22%23E0FF4F%22/%3E%3C/svg%3E\') 12 12, auto'}}>

<div className="z-0 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none opacity-[0.04] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="container lg:px-12 flex flex-col lg:flex-row lg:py-0 z-10 h-full mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 relative items-center justify-between">

<div className="lg:w-[55%] flex flex-col z-20 w-full relative space-y-10 items-start justify-center">
<div className="inline-flex gap-3 text-sm font-medium text-[#00272B] bg-white border-[#00272B]/10 border rounded-full pt-2 pr-4 pb-2 pl-4 shadow-[0_2px_10px_rgba(0,39,43,0.05)] items-center">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E0FF4F] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#B8E600]"></span>
</span>
                    Now shipping nationwide
                </div>
<h1 className="text-7xl lg:text-[7.5rem] font-extrabold text-[#00272B] tracking-tighter leading-[0.85] uppercase">
                    Electric<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00272B] to-[#006A75]">Taste.</span><br/>
<span className="relative inline-block z-10">
                        Pure Pulp.
                        
<svg className="absolute w-[110%] h-auto -bottom-4 -left-4 text-[#E0FF4F] -z-10 drop-shadow-[0_0_10px_rgba(224,255,79,0.5)]" preserveaspectratio="none" viewbox="0 0 200 20">
<path className="animate-[pulse_3s_ease-in-out_infinite]" d="M0 15 Q 50 -5, 100 15 T 200 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="10"></path>
</svg>
</span>
</h1>
<p className="lg:text-2xl leading-relaxed text-xl font-medium text-[#00272B]/70 tracking-tight max-w-xl">Neon Pulp sodas charged with vibrant flavors and real fruit. Bright, crisp, and undeniably neon.</p>
<div className="flex flex-col sm:flex-row sm:w-auto w-full pt-4 -translate-y-12 gap-x-5 gap-y-5 items-center">
<button className="w-full sm:w-auto px-10 py-5 bg-[#E0FF4F] text-[#00272B] text-lg font-semibold tracking-wide rounded-2xl shadow-[0_0_30px_-5px_#E0FF4F] hover:shadow-[0_0_50px_-5px_#E0FF4F] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group border border-[#E0FF4F] hover:border-[#00272B]/20 cursor-pointer">
                        SHOP NOW
                        <i className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="sm:w-auto hover:border-[#00272B]/30 hover:bg-white transition-all duration-300 flex text-lg font-semibold text-[#00272B] tracking-wide bg-white/50 w-full border-[#00272B]/10 border rounded-2xl pt-5 pr-10 pb-5 pl-10 backdrop-blur-sm items-center justify-center cursor-pointer">
                        EXPLORE FLAVORS
                    </button>
</div>
</div>

<div className="lg:w-[45%] lg:h-[700px] lg:mt-0 pointer-events-none sm:pointer-events-auto w-full h-[500px] mt-0 relative perspective-[1200px]">

<div className="-translate-x-1/2 -translate-y-1/2 flex pointer-events-none w-[120%] h-[120%] absolute top-1/2 left-1/2 items-center justify-center">
<div className="blur-[140px] animate-pulse bg-[#E0FF4F] opacity-20 mix-blend-multiply rounded-full absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Product Mockup" className="lg:w-96 lg:h-[600px] animate-[float_5s_ease-in-out_infinite] transform z-40 w-100 h-[650px] object-cover rounded-md relative drop-shadow-2xl scale-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa4839c8-1806-4f0f-a5b9-b79372327545_800w.png"/>
</div>

<div className="animate-[float-reverse_8s_ease-in-out_infinite] transform w-32 h-32 lg:w-44 lg:h-44 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/95938ada-649d-405d-a71b-e9705921de15_800w.png)] bg-contain bg-no-repeat bg-center z-10 absolute drop-shadow-2xl right-[5%] top-[10%]"></div>

<div className="animate-[float_9s_ease-in-out_infinite_1s] transform w-40 h-40 lg:w-64 lg:h-64 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7667a44c-3823-42a3-9dfd-d98725d5a30b_800w.png)] bg-contain bg-no-repeat bg-center z-20 absolute drop-shadow-2xl right-[10%] bottom-[10%]"></div>

<div className="animate-[float_7s_ease-in-out_infinite_2s] transform w-36 h-36 lg:w-56 lg:h-56 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cafd11c2-c54e-496d-9213-81a0eef4d709_1600w.png)] bg-contain bg-no-repeat bg-center z-30 absolute drop-shadow-2xl left-[5%] top-[20%]"></div>

<div aria-hidden="true" className="z-40 absolute top-0 right-0 bottom-0 left-0">

<div className="animate-[rise_5s_ease-in_infinite] bg-white/30 w-10 h-10 border-white border rounded-full absolute bottom-[15%] left-[10%] shadow-[0_0_20px_rgba(255,255,255,0.4)] backdrop-blur-md"></div>

<div className="animate-[rise_4s_ease-in_infinite_0.7s] bg-[#E0FF4F]/20 w-5 h-5 border-white/70 border rounded-full absolute bottom-[5%] left-[25%] backdrop-blur-sm"></div>

<div className="absolute bottom-[25%] left-[40%] w-14 h-14 rounded-full border-2 border-[#E0FF4F]/50 bg-[#E0FF4F]/10 backdrop-blur-lg shadow-[0_0_30px_rgba(224,255,79,0.3)] animate-[rise_6s_ease-in_infinite_1.2s]"></div>

<div className="absolute bottom-[10%] left-[60%] w-7 h-7 rounded-full border border-white/60 bg-white/20 backdrop-blur-md animate-[rise_4.5s_ease-in_infinite_2s]"></div>

<div className="animate-[rise_7s_ease-in_infinite_0.3s] bg-[#E0FF4F]/20 w-12 h-12 border-[#E0FF4F]/80 border rounded-full absolute bottom-[20%] left-[75%] backdrop-blur-xl shadow-[0_0_30px_rgba(224,255,79,0.3)]"></div>

<div className="absolute bottom-[5%] left-[90%] w-6 h-6 rounded-full border border-[#E0FF4F]/80 bg-[#E0FF4F]/40 backdrop-blur-md animate-[rise_5.5s_ease-in_infinite_2.5s]"></div>
</div>
</div>
</div>

</header>

<div className="overflow-hidden border-y z-30 flex bg-[#E0FF4F] w-full border-[#00272B]/10 pt-5 pb-5 relative shadow-lg items-center">

<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#E0FF4F] to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#E0FF4F] to-transparent z-10 pointer-events-none"></div>
<div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite] items-center text-[#00272B] font-semibold text-xl tracking-widest uppercase" style={{width: 'max-content'}}>

<div className="flex items-center">
<span className="mx-10 flex items-center gap-4"><i className="w-6 h-6 fill-current" data-lucide="zap"></i> NEON ENERGY</span>
<span className="mx-10 flex items-center gap-4"><i className="w-6 h-6 fill-[#00272B]" data-lucide="droplets"></i> REAL FRUIT</span>
<span className="mx-10 flex items-center gap-4"><i className="w-6 h-6 fill-current" data-lucide="leaf"></i> ZERO ARTIFICIALS</span>
<span className="mx-10 flex items-center gap-4"><i className="w-6 h-6 fill-current" data-lucide="sun"></i> LEMON ZEST</span>
<span className="mx-10 flex items-center gap-4"><i className="w-6 h-6 fill-current" data-lucide="flame"></i> MANGO CRUSH</span>
<span className="mx-10 flex items-center gap-4"><i className="w-6 h-6 fill-current" data-lucide="asterisk"></i> PERSIMMON PUNCH</span>
</div>

<div className="flex items-center">
<span className="mx-10 flex items-center gap-4"><i className="w-6 h-6 fill-current" data-lucide="zap"></i> NEON ENERGY</span>
<span className="mx-10 flex items-center gap-4"><i className="w-6 h-6 fill-[#00272B]" data-lucide="droplets"></i> REAL FRUIT</span>
<span className="mx-10 flex items-center gap-4"><i className="w-6 h-6 fill-current" data-lucide="leaf"></i> ZERO ARTIFICIALS</span>
<span className="mx-10 flex items-center gap-4"><i className="w-6 h-6 fill-current" data-lucide="sun"></i> LEMON ZEST</span>
<span className="mx-10 flex items-center gap-4"><i className="w-6 h-6 fill-current" data-lucide="flame"></i> MANGO CRUSH</span>
<span className="mx-10 flex items-center gap-4"><i className="w-6 h-6 fill-current" data-lucide="asterisk"></i> PERSIMMON PUNCH</span>
</div>
</div>
</div>

<section className="overflow-hidden bg-white w-full pt-32 pb-32 relative" style={{cursor: 'url("data:image/svg+xml', charset=utf-8,%3Csvg xmlns=%22http: '//www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22%3E%3Ccircle cx=%2212%22 cy=%2212%22 r=%2210%22 fill=%22rgba(224,255,79,0.2)%22 stroke=%22%23E0FF4F%22 strokeWidth=%222%22/%3E%3Ccircle cx=%228%22 cy=%228%22 r=%222%22 fill=%22%23E0FF4F%22/%3E%3C/svg%3E") 12 12, auto'}}>
<div className="fixed overflow-hidden transform hover:-translate-y-2 hover:shadow-[0_30px_70px_-15px_rgba(0,39,43,0.4)] transition-all duration-400 cursor-pointer group flex flex-col bg-white w-[220px] h-[340px] z-10 border-[#00272B]/10 border rounded-[24px] right-8 bottom-8 shadow-[0_20px_60px_-15px_rgba(0,39,43,0.3)] translate-y-1 scale-90" style={{cursor: 'pointer'}}>

<button aria-label="Close" className="absolute top-3 left-3 w-8 h-8 flex items-center justify-center bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors z-30 focus:outline-none" onclick="this.closest('[data-element-id=\'aura-emn2b82xffd7zskc\']').style.display='none'; event.stopPropagation();">
<svg className="lucide lucide-x" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M18 6 6 18"></path><path className="" d="m6 6 12 12"></path></svg>
</button>

<div className="absolute -top-2 -right-2 w-7 h-7 bg-[#E0FF4F] border-2 border-white rounded-full text-[#00272B] text-xs font-extrabold flex items-center justify-center shadow-lg z-20 animate-bounce">1</div>

<div className="flex-1 flex overflow-hidden bg-zinc-900 w-full relative items-center justify-center">

<div className="absolute top-0 right-0 bottom-0 left-0"></div>

<div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-[#FF5C00] rounded-[40%_60%_60%_40%/50%_40%_60%_50%] absolute top-8 blur-[1px] shadow-lg animate-[float_6s_ease-in-out_infinite]"></div>
<div className="w-36 h-32 bg-gradient-to-t from-[#00272B] to-[#005A63] rounded-t-[40px] absolute bottom-0"></div>

<div className="group-hover:bg-black/50 transition-colors duration-300 flex flex-col backdrop-blur-[2px] z-10 text-center bg-black/30 pt-4 pr-4 pb-4 pl-4 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
<i className="w-6 h-6 text-white ml-1 fill-white" data-lucide="play" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="bg-white p-4 border-t border-zinc-100 flex flex-col gap-1">
<span className="leading-tight text-sm font-semibold text-[#00272B]">Taste Test</span>
<span className="text-xs font-medium text-[#00272B]/50">Watch Maria try Persimmon</span>
</div>
</div><div className="container lg:px-12 z-10 flex flex-col lg:flex-row gap-12 lg:gap-8 mr-auto ml-auto pr-6 pl-6 relative items-center justify-between">

<div className="lg:w-1/2 flex flex-col z-20 w-full items-start">
<h2 className="lg:text-[5rem] uppercase leading-[0.9] text-5xl font-extrabold text-[#00272B] tracking-tighter mb-8">
                    Radically<br/>Refreshing
                </h2>
<p className="text-xl font-medium text-[#00272B]/60 max-w-md mb-8">
                    Experience the visceral hit of real pulp and uncompromised flavor. Our new lineup is crafted for those who crave the intense.
                </p>
<button className="uppercase hover:shadow-[0_0_30px_rgba(224,255,79,0.6)] hover:-translate-y-1 transition-all duration-300 text-lg font-bold text-[#00272B] tracking-widest bg-[#E0FF4F] rounded-2xl pt-4 pr-8 pb-4 pl-8 shadow-[0_0_20px_rgba(224,255,79,0.4)]">Explore</button>
</div>

<div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px] flex items-center justify-center pointer-events-none">

<div className="absolute inset-0 bg-[#E0FF4F] rounded-full blur-[100px] opacity-30 animate-[pulse_4s_ease-in-out_infinite]"></div>

<div className="absolute left-0 lg:left-[5%] top-[15%] w-36 lg:w-44 h-64 lg:h-80 rounded-[2rem] overflow-hidden border-4 border-white shadow-[0_20px_40px_rgba(0,39,43,0.15)] -rotate-12 animate-[float-reverse_6s_ease-in-out_infinite] z-10">
<img alt="Orange Flavor Mockup" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7fe28c3a-2e00-4f07-9ffe-9bbd8bd91f6c_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#FF5C00]/60 to-transparent mix-blend-multiply"></div>
</div>

<div className="absolute right-0 lg:right-[5%] bottom-[15%] w-36 lg:w-44 h-64 lg:h-80 rounded-[2rem] overflow-hidden border-4 border-white shadow-[0_20px_40px_rgba(0,39,43,0.15)] rotate-12 animate-[float_7s_ease-in-out_infinite_1s] z-10">
<img alt="Cosmic Flavor Mockup" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa4839c8-1806-4f0f-a5b9-b79372327545_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#005A63]/60 to-transparent mix-blend-multiply"></div>
</div>

<div className="absolute z-20 w-48 lg:w-56 h-80 lg:h-96 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-[0_30px_60px_rgba(0,39,43,0.25)] animate-[float_5s_ease-in-out_infinite]">
<img alt="Lemon Flavor Mockup" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7fe28c3a-2e00-4f07-9ffe-9bbd8bd91f6c_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#E0FF4F]/50 to-transparent mix-blend-multiply"></div>
</div>

<div className="absolute top-[15%] right-[25%] w-8 h-8 rounded-full border-2 border-[#E0FF4F] bg-[#E0FF4F]/20 backdrop-blur-sm animate-[rise_4s_ease-in_infinite]"></div>
<div className="absolute bottom-[20%] left-[25%] w-12 h-12 rounded-full border-2 border-[#00272B]/20 bg-[#00272B]/5 backdrop-blur-sm animate-[rise_6s_ease-in_infinite_1.5s]"></div>
</div>
</div>

</section><section className="lg:py-32 overflow-hidden z-10 bg-[#EAF2ED] w-full border-[#00272B]/5 border-t pt-24 pb-24 relative">

<div aria-hidden="true" className="z-0 absolute inset-0 pointer-events-none overflow-hidden">

<div className="animate-[rise_6s_ease-in_infinite] bg-white/40 w-12 h-12 border-white border rounded-full absolute bottom-[-10%] left-[10%] shadow-[0_0_20px_rgba(255,255,255,0.4)] backdrop-blur-md"></div>
<div className="animate-[rise_5s_ease-in_infinite_1s] bg-[#E0FF4F]/20 w-8 h-8 border-[#E0FF4F]/30 border rounded-full absolute bottom-[-10%] left-[30%] backdrop-blur-sm"></div>
<div className="animate-[rise_7s_ease-in_infinite_2s] bg-white/30 w-16 h-16 border-white border rounded-full absolute bottom-[-15%] right-[20%] shadow-[0_0_20px_rgba(255,255,255,0.4)] backdrop-blur-md"></div>
<div className="animate-[rise_4.5s_ease-in_infinite_0.5s] bg-[#E0FF4F]/20 w-6 h-6 border-[#E0FF4F]/30 border rounded-full absolute bottom-[-5%] right-[40%] backdrop-blur-sm"></div>
<div className="animate-[rise_8s_ease-in_infinite_1.5s] bg-[#E0FF4F]/10 w-24 h-24 border-[#E0FF4F]/20 border rounded-full absolute bottom-[-20%] left-[60%] backdrop-blur-lg"></div>

<div className="animate-[rise_4s_ease-in_infinite_0.5s] bg-[#00272B]/5 w-16 h-16 border-[#00272B]/10 border rounded-full absolute bottom-[-15%] left-[5%] backdrop-blur-sm"></div>
<div className="animate-[rise_6s_ease-in_infinite_1.2s] bg-[#E0FF4F]/20 w-8 h-8 border-[#E0FF4F]/30 border rounded-full absolute bottom-[-10%] left-[15%] backdrop-blur-md"></div>
<div className="animate-[rise_5s_ease-in_infinite_2.5s] bg-white/40 w-12 h-12 border-white/50 border rounded-full absolute bottom-[-20%] left-[25%] shadow-[0_0_15px_rgba(224,255,79,0.3)] backdrop-blur-lg"></div>
<div className="animate-[rise_7s_ease-in_infinite_0.8s] bg-[#E0FF4F]/10 w-20 h-20 border-[#E0FF4F]/20 border rounded-full absolute bottom-[-25%] left-[35%] backdrop-blur-sm"></div>
<div className="animate-[rise_4.5s_ease-in_infinite_1.5s] bg-[#00272B]/5 w-6 h-6 border-[#00272B]/10 border rounded-full absolute bottom-[-5%] left-[45%] backdrop-blur-md"></div>
<div className="animate-[rise_5.5s_ease-in_infinite_0.2s] bg-[#E0FF4F]/30 w-10 h-10 border-[#E0FF4F]/40 border rounded-full absolute bottom-[-15%] left-[55%] backdrop-blur-xl shadow-[0_0_10px_rgba(224,255,79,0.2)]"></div>
<div className="animate-[rise_8s_ease-in_infinite_2s] bg-white/20 w-24 h-24 border-white/30 border rounded-full absolute bottom-[-30%] left-[65%] shadow-[0_0_20px_rgba(255,255,255,0.4)] backdrop-blur-sm"></div>
<div className="animate-[rise_6.5s_ease-in_infinite_1.1s] bg-[#E0FF4F]/15 w-14 h-14 border-[#E0FF4F]/25 border rounded-full absolute bottom-[-10%] left-[75%] backdrop-blur-md"></div>
<div className="animate-[rise_4s_ease-in_infinite_2.8s] bg-[#00272B]/10 w-8 h-8 border-[#00272B]/20 border rounded-full absolute bottom-[-20%] left-[85%] backdrop-blur-lg"></div>
<div className="animate-[rise_7.5s_ease-in_infinite_0.6s] bg-[#E0FF4F]/25 w-18 h-18 border-[#E0FF4F]/40 border rounded-full absolute bottom-[-15%] left-[92%] backdrop-blur-sm"></div>
<div className="animate-[rise_5s_ease-in_infinite_1.9s] bg-white/30 w-5 h-5 border-white/40 border rounded-full absolute bottom-[-5%] left-[40%]"></div>
<div className="animate-[rise_6s_ease-in_infinite_0.3s] bg-[#E0FF4F]/10 w-11 h-11 border-[#E0FF4F]/20 border rounded-full absolute bottom-[-12%] left-[80%] backdrop-blur-sm"></div>
<div className="animate-[rise_8.5s_ease-in_infinite_2.2s] bg-[#00272B]/5 w-28 h-28 border-[#00272B]/10 border rounded-full absolute bottom-[-35%] left-[20%] backdrop-blur-xl"></div>
<div className="animate-[rise_4.2s_ease-in_infinite_1.4s] bg-[#E0FF4F]/40 w-7 h-7 border-[#E0FF4F]/50 border rounded-full absolute bottom-[-8%] left-[60%] backdrop-blur-md shadow-[0_0_10px_rgba(224,255,79,0.5)]"></div>
<div className="animate-[rise_5.8s_ease-in_infinite_0.9s] bg-white/28%] left-[90%] backdrop-blur-sm"></div>
</div>
<div className="container lg:px-12 z-10 mr-auto ml-auto pr-6 pl-6 relative">

<div className="text-center mb-16 lg:mb-20">
<h2 className="text-5xl lg:text-[5rem] font-bold text-[#00272B] tracking-tight uppercase leading-[0.9] flex justify-center items-center gap-4">
                Best Sellers
                
            </h2>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">

<div className="relative w-full rounded-[2rem] overflow-hidden group bg-[#E3D7F4] shadow-sm hover:shadow-[0_20px_40px_rgba(0,39,43,0.2)] transition-all duration-500 border-2 border-transparent hover:border-[#E0FF4F] flex flex-col h-full z-20">

<div className="absolute top-4 left-4 z-40 bg-[#FF5C00] text-white text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-[0_4px_10px_rgba(255,92,0,0.4)] -rotate-6 animate-[bounce_2s_infinite]">
                    15% OFF
                </div>

<div className="absolute inset-0 z-0 bg-[#00272B] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]">
<img alt="Grapes background" className="group-hover:scale-100 transition-transform duration-1000 delay-100 opacity-30 mix-blend-screen w-full h-[60%] object-cover absolute top-0 right-0 bottom-0 left-0 scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa4839c8-1806-4f0f-a5b9-b79372327545_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00272B] 60%"></div>
</div>

<div className="relative h-[250px] flex items-center justify-center z-20 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-4 group-hover:scale-105 mt-8">
<div className="absolute w-[180px] aspect-square rounded-full bg-[#7B2CBF] transition-all duration-700 ease-out group-hover:scale-[2.5] group-hover:opacity-0"></div>
<div className="absolute w-[160px] aspect-square rounded-full bg-[#E0FF4F] blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>

<div className="z-30 flex gap-2 animate-[float-reverse_6s_ease-in-out_infinite] group-hover:rotate-6 transition-transform duration-700 w-full h-full relative gap-x-2 gap-y-2 items-center justify-center">
<div className="bg-center w-14 h-36 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2e53b139-7a00-4d61-a5c0-cbc7e4982921_320w.png)] bg-cover z-10 border-white border-2 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.1)] translate-x-4 -rotate-6"></div>
<div className="z-20 -translate-y-4 bg-center w-14 h-36 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8af1380e-96b9-416a-a187-69c1b470c91f_320w.png)] bg-cover border-white border-2 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.1)]"></div>
<div className="-translate-x-4 z-10 bg-center w-14 h-36 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/af25826f-be4a-4ffb-ae3b-ff9a45009aa6_320w.png)] bg-cover border-white border-2 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.1)] rotate-6"></div>
</div>
</div>

<div className="relative z-20 p-6 flex flex-col flex-grow bg-transparent transition-colors duration-500">
<h3 className="text-2xl font-bold text-[#00272B] group-hover:text-white transition-colors duration-500 tracking-tight uppercase leading-none mb-3">All Flavors Bundle</h3>
<div className="flex items-center gap-3 mb-8 flex-wrap">
<span className="text-[#00272B] group-hover:text-white font-medium text-sm uppercase tracking-wide bg-white/50 group-hover:bg-white/10 px-3 py-1 rounded-md border border-[#00272B]/10 group-hover:border-white/20 transition-colors">Variety 24 Pack</span>
<div className="flex items-center gap-2">
<span className="line-through text-[#00272B]/40 group-hover:text-white/40 font-medium text-lg transition-colors">$88.00</span>
<span className="bg-[#E0FF4F] text-[#00272B] px-2 py-0.5 rounded-md font-semibold text-2xl tracking-tight">$74.00</span>
</div>
</div>
<div className="mt-auto flex flex-col gap-4">
<button className="w-full py-4 bg-[#E0FF4F] text-[#00272B] text-lg font-semibold tracking-widest rounded-2xl shadow-[0_8px_20px_-6px_rgba(224,255,79,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(224,255,79,0.6)] hover:-translate-y-1 transition-all duration-300 uppercase border border-[#00272B]/10 hover:border-[#00272B]/30 group-hover:border-[#E0FF4F]">
                            Add to Cart
                        </button>
<div className="text-center flex flex-col gap-2">
<span className="text-[#00272B]/60 group-hover:text-white/60 transition-colors text-xs font-medium uppercase tracking-widest">Price as marked. One promotion per item.</span>
<a className="text-[#00272B] group-hover:text-white font-medium text-sm underline hover:text-[#005A63] transition-colors uppercase tracking-wide" href="#">See Details</a>
</div>
</div>
</div>
</div>

<div className="overflow-hidden group cursor-pointer hover:shadow-[0_20px_40px_rgba(0,39,43,0.2)] transition-all duration-500 hover:border-[#E0FF4F] flex flex-col z-20 bg-[#FDF6E3] w-full h-full border-transparent border-2 rounded-[2rem] relative shadow-sm">

<div className="absolute top-4 left-4 z-40 bg-[#00272B] text-[#E0FF4F] text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-md -rotate-12 animate-[bounce_2s_infinite]">
                    Best Seller
                </div>

<div className="absolute inset-0 z-0 bg-[#00272B] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]">
<img alt="Lemon background" className="group-hover:scale-100 transition-transform duration-1000 delay-100 opacity-30 mix-blend-screen w-full h-[60%] object-cover absolute top-0 right-0 bottom-0 left-0 scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7fe28c3a-2e00-4f07-9ffe-9bbd8bd91f6c_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00272B] 60%"></div>
</div>

<div className="relative h-[250px] flex items-center justify-center z-20 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-4 group-hover:scale-105 mt-8">
<div className="aspect-square transition-all duration-700 ease-out group-hover:scale-[2.5] group-hover:opacity-0 bg-[#A3D900] w-[180px] rounded-full absolute"></div>
<div className="absolute w-[160px] aspect-square rounded-full bg-[#E0FF4F] blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
<div className="relative z-30 flex gap-4 animate-[float_5s_ease-in-out_infinite] group-hover:rotate-6 transition-transform duration-700">
<div className="transform w-16 h-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8af1380e-96b9-416a-a187-69c1b470c91f_320w.png)] bg-cover bg-center border-white/50 border-2 rounded-xl shadow-2xl -rotate-6"></div>
<div className="transform w-16 h-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8af1380e-96b9-416a-a187-69c1b470c91f_320w.png)] bg-cover bg-center border-white/50 border-2 rounded-xl shadow-2xl translate-y-6 rotate-6"></div>
</div>
</div>

<div className="relative z-20 p-6 flex flex-col flex-grow bg-transparent transition-colors duration-500">
<h3 className="text-2xl font-bold text-[#00272B] group-hover:text-white transition-colors duration-500 tracking-tight uppercase mb-4 leading-tight">Lemon Drink Pack</h3>
<div className="space-y-5 mb-6 flex-grow">

<div className="flex items-center justify-between border-b border-[#00272B]/10 group-hover:border-white/20 transition-colors pb-3">
<span className="text-[#00272B] group-hover:text-white transition-colors font-semibold uppercase text-xs tracking-widest"># Of Cans</span>
<div className="flex bg-[#F0F4F8] group-hover:bg-white/10 transition-colors rounded-xl p-1 shadow-inner border border-[#00272B]/5 group-hover:border-white/10">
<button className="px-3 py-1 bg-[#00272B] group-hover:bg-[#E0FF4F] text-white group-hover:text-[#00272B] transition-colors rounded-lg font-medium text-xs shadow-sm">12</button>
<button className="px-3 py-1 text-[#00272B] group-hover:text-white hover:bg-[#00272B]/5 group-hover:hover:bg-white/10 rounded-lg font-medium text-xs transition-colors">24</button>
</div>
</div>

<div className="space-y-3">
<label className="flex items-center justify-between cursor-pointer group/radio">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border-2 border-[#00272B]/20 group-hover:border-white/40 flex items-center justify-center transition-colors relative bg-white group-hover:bg-transparent"></div>
<span className="text-[#00272B] group-hover:text-white transition-colors font-medium text-sm uppercase tracking-wide">One-time</span>
</div>
<span className="text-[#00272B] group-hover:text-white transition-colors font-semibold text-sm">$44.00</span>
</label>
<label className="flex items-center justify-between cursor-pointer group/radio">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border-2 border-[#00272B] group-hover:border-[#E0FF4F] flex items-center justify-center relative bg-white group-hover:bg-transparent transition-colors shadow-[0_0_10px_rgba(0,39,43,0.1)]">
<div className="w-2.5 h-2.5 bg-[#00272B] group-hover:bg-[#E0FF4F] transition-colors rounded-full"></div>
</div>
<span className="text-[#00272B] group-hover:text-white transition-colors font-medium text-sm uppercase tracking-wide">Subscribe (15%)</span>
</div>
<span className="bg-[#E0FF4F] text-[#00272B] px-1.5 py-0.5 rounded-md font-semibold text-sm">$37.40</span>
</label>
</div>

<div className="relative w-full">
<select className="appearance-none focus:outline-none cursor-pointer transition-colors text-sm font-medium text-[#00272B] bg-white w-full border-[#00272B]/20 border-2 rounded-xl py-3 px-4 shadow-sm hover:border-[#00272B]/50 group-hover:border-white/30 group-hover:bg-white/10 group-hover:text-white group-hover:hover:border-white">
<option className="text-[#00272B] bg-white">Delivery every 4 weeks</option>
<option className="text-[#00272B] bg-white">Delivery every 2 weeks</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#00272B] group-hover:text-white transition-colors">
<i className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</div>
<div className="mt-auto">
<button className="w-full py-3 bg-[#E0FF4F] text-[#00272B] text-base font-semibold tracking-widest rounded-xl shadow-[0_8px_20px_-6px_rgba(224,255,79,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(224,255,79,0.6)] hover:-translate-y-1 transition-all duration-300 uppercase border border-[#00272B]/10 hover:border-[#00272B]/30 group-hover:border-[#E0FF4F]">
                            Add to Cart
                        </button>
<a className="block text-center text-[#00272B] group-hover:text-white transition-colors font-medium text-xs underline mt-4 uppercase tracking-wide" href="#">See Details</a>
</div>
</div>
</div>

<div className="overflow-hidden group cursor-pointer hover:shadow-[0_20px_40px_rgba(0,39,43,0.2)] transition-all duration-500 hover:border-[#E0FF4F] flex flex-col z-20 bg-[#F3D9BA] w-full h-full border-transparent border-2 rounded-[2rem] relative shadow-sm">

<div className="absolute inset-0 z-0 bg-[#00272B] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]">
<img alt="Mango background" className="group-hover:scale-100 transition-transform duration-1000 delay-100 opacity-30 mix-blend-screen w-full h-[60%] object-cover absolute top-0 right-0 bottom-0 left-0 scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/283936ed-5f49-4443-ac3b-fb848fe97db4_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00272B] 60%"></div>
</div>

<div className="relative h-[250px] flex items-center justify-center z-20 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-4 group-hover:scale-105 mt-8">
<div className="aspect-square transition-all duration-700 ease-out group-hover:scale-[2.5] group-hover:opacity-0 bg-[#F77F00] w-[180px] rounded-full absolute"></div>
<div className="absolute w-[160px] aspect-square rounded-full bg-[#E0FF4F] blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
<div className="relative z-30 flex gap-4 animate-[float-reverse_5.5s_ease-in-out_infinite] group-hover:rotate-6 transition-transform duration-700">
<div className="transform w-16 h-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2e53b139-7a00-4d61-a5c0-cbc7e4982921_320w.png)] bg-cover bg-center border-white/50 border-2 rounded-xl shadow-2xl rotate-3"></div>
<div className="transform w-16 h-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2e53b139-7a00-4d61-a5c0-cbc7e4982921_320w.png)] bg-cover bg-center border-white/50 border-2 rounded-xl shadow-2xl translate-y-4 -rotate-3"></div>
</div>
</div>

<div className="z-20 flex flex-col flex-grow transition-colors duration-500 bg-transparent pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="text-2xl font-bold text-[#00272B] group-hover:text-white transition-colors duration-500 tracking-tight uppercase mb-4 leading-tight">Mango Drink Pack</h3>
<div className="space-y-5 mb-6 flex-grow">

<div className="flex items-center justify-between border-b border-[#00272B]/10 group-hover:border-white/20 transition-colors pb-3">
<span className="text-[#00272B] group-hover:text-white transition-colors font-semibold uppercase text-xs tracking-widest"># Of Cans</span>
<div className="flex bg-[#F0F4F8] group-hover:bg-white/10 transition-colors rounded-xl p-1 shadow-inner border border-[#00272B]/5 group-hover:border-white/10">
<button className="px-3 py-1 bg-[#00272B] group-hover:bg-[#E0FF4F] text-white group-hover:text-[#00272B] transition-colors rounded-lg font-medium text-xs shadow-sm">12</button>
<button className="px-3 py-1 text-[#00272B] group-hover:text-white hover:bg-[#00272B]/5 group-hover:hover:bg-white/10 rounded-lg font-medium text-xs transition-colors">24</button>
</div>
</div>

<div className="space-y-3">
<label className="flex items-center justify-between cursor-pointer group/radio">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border-2 border-[#00272B]/20 group-hover:border-white/40 flex items-center justify-center transition-colors relative bg-white group-hover:bg-transparent"></div>
<span className="text-[#00272B] group-hover:text-white transition-colors font-medium text-sm uppercase tracking-wide">One-time</span>
</div>
<span className="text-[#00272B] group-hover:text-white transition-colors font-semibold text-sm">$44.00</span>
</label>
<label className="flex items-center justify-between cursor-pointer group/radio">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border-2 border-[#00272B] group-hover:border-[#E0FF4F] flex items-center justify-center relative bg-white group-hover:bg-transparent transition-colors shadow-[0_0_10px_rgba(0,39,43,0.1)]">
<div className="w-2.5 h-2.5 bg-[#00272B] group-hover:bg-[#E0FF4F] transition-colors rounded-full"></div>
</div>
<span className="text-[#00272B] group-hover:text-white transition-colors font-medium text-sm uppercase tracking-wide">Subscribe (15%)</span>
</div>
<span className="bg-[#E0FF4F] text-[#00272B] px-1.5 py-0.5 rounded-md font-semibold text-sm">$37.40</span>
</label>
</div>

<div className="relative w-full">
<select className="appearance-none focus:outline-none cursor-pointer transition-colors text-sm font-medium text-[#00272B] bg-white w-full border-[#00272B]/20 border-2 rounded-xl py-3 px-4 shadow-sm hover:border-[#00272B]/50 group-hover:border-white/30 group-hover:bg-white/10 group-hover:text-white group-hover:hover:border-white">
<option className="text-[#00272B] bg-white">Delivery every 4 weeks</option>
<option className="text-[#00272B] bg-white">Delivery every 2 weeks</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#00272B] group-hover:text-white transition-colors">
<i className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</div>
<div className="mt-auto">
<button className="w-full py-3 bg-[#E0FF4F] text-[#00272B] text-base font-semibold tracking-widest rounded-xl shadow-[0_8px_20px_-6px_rgba(224,255,79,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(224,255,79,0.6)] hover:-translate-y-1 transition-all duration-300 uppercase border border-[#00272B]/10 hover:border-[#00272B]/30 group-hover:border-[#E0FF4F]">
                            Add to Cart
                        </button>
<a className="block text-center text-[#00272B] group-hover:text-white transition-colors font-medium text-xs underline mt-4 uppercase tracking-wide" href="#">See Details</a>
</div>
</div>
</div>

<div className="relative w-full rounded-[2rem] overflow-hidden group cursor-pointer bg-[#FFBDB0] shadow-sm hover:shadow-[0_20px_40px_rgba(0,39,43,0.2)] transition-all duration-500 border-2 border-transparent hover:border-[#E0FF4F] flex flex-col h-full z-20">

<div className="absolute inset-0 z-0 bg-[#00272B] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]">
<img alt="Persimmon background" className="group-hover:scale-100 transition-transform duration-1000 delay-100 opacity-30 mix-blend-screen w-full h-[60%] object-cover absolute top-0 right-0 bottom-0 left-0 scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa4839c8-1806-4f0f-a5b9-b79372327545_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00272B] 60%"></div>
</div>

<div className="relative h-[250px] flex items-center justify-center z-20 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-4 group-hover:scale-105 mt-8">
<div className="aspect-square transition-all duration-700 ease-out group-hover:scale-[2.5] group-hover:opacity-0 bg-[#D05B43] w-[180px] rounded-full absolute"></div>
<div className="absolute w-[160px] aspect-square rounded-full bg-[#E0FF4F] blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
<div className="relative z-30 flex gap-4 animate-[float_6.5s_ease-in-out_infinite] group-hover:rotate-6 transition-transform duration-700">
<div className="transform w-16 h-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/af25826f-be4a-4ffb-ae3b-ff9a45009aa6_320w.png)] bg-cover bg-center border-white/50 border-2 rounded-xl shadow-2xl translate-y-2 -rotate-8"></div>
<div className="transform -translate-y-2 w-16 h-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/af25826f-be4a-4ffb-ae3b-ff9a45009aa6_320w.png)] bg-cover bg-center border-white/50 border-2 rounded-xl shadow-2xl rotate-8"></div>
</div>
</div>

<div className="relative z-20 p-6 flex flex-col flex-grow bg-transparent transition-colors duration-500">
<h3 className="text-2xl font-bold text-[#00272B] group-hover:text-white transition-colors duration-500 tracking-tight uppercase mb-4 leading-tight">Persimmons Drink Pack</h3>
<div className="space-y-5 mb-6 flex-grow">

<div className="flex items-center justify-between border-b border-[#00272B]/10 group-hover:border-white/20 transition-colors pb-3">
<span className="text-[#00272B] group-hover:text-white transition-colors font-semibold uppercase text-xs tracking-widest"># Of Cans</span>
<div className="flex bg-[#F0F4F8] group-hover:bg-white/10 transition-colors rounded-xl p-1 shadow-inner border border-[#00272B]/5 group-hover:border-white/10">
<button className="px-3 py-1 bg-[#00272B] group-hover:bg-[#E0FF4F] text-white group-hover:text-[#00272B] transition-colors rounded-lg font-medium text-xs shadow-sm">12</button>
<button className="px-3 py-1 text-[#00272B] group-hover:text-white hover:bg-[#00272B]/5 group-hover:hover:bg-white/10 rounded-lg font-medium text-xs transition-colors">24</button>
</div>
</div>

<div className="space-y-3">
<label className="flex items-center justify-between cursor-pointer group/radio">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border-2 border-[#00272B]/20 group-hover:border-white/40 flex items-center justify-center transition-colors relative bg-white group-hover:bg-transparent"></div>
<span className="text-[#00272B] group-hover:text-white transition-colors font-medium text-sm uppercase tracking-wide">One-time</span>
</div>
<span className="text-[#00272B] group-hover:text-white transition-colors font-semibold text-sm">$44.00</span>
</label>
<label className="flex items-center justify-between cursor-pointer group/radio">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border-2 border-[#00272B] group-hover:border-[#E0FF4F] flex items-center justify-center relative bg-white group-hover:bg-transparent transition-colors shadow-[0_0_10px_rgba(0,39,43,0.1)]">
<div className="w-2.5 h-2.5 bg-[#00272B] group-hover:bg-[#E0FF4F] transition-colors rounded-full"></div>
</div>
<span className="text-[#00272B] group-hover:text-white transition-colors font-medium text-sm uppercase tracking-wide">Subscribe (15%)</span>
</div>
<span className="bg-[#E0FF4F] text-[#00272B] px-1.5 py-0.5 rounded-md font-semibold text-sm">$37.40</span>
</label>
</div>

<div className="relative w-full">
<select className="appearance-none focus:outline-none cursor-pointer transition-colors text-sm font-medium text-[#00272B] bg-white w-full border-[#00272B]/20 border-2 rounded-xl py-3 px-4 shadow-sm hover:border-[#00272B]/50 group-hover:border-white/30 group-hover:bg-white/10 group-hover:text-white group-hover:hover:border-white">
<option className="text-[#00272B] bg-white">Delivery every 4 weeks</option>
<option className="text-[#00272B] bg-white">Delivery every 2 weeks</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#00272B] group-hover:text-white transition-colors">
<i className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</div>
<div className="mt-auto">
<button className="w-full py-3 bg-[#E0FF4F] text-[#00272B] text-base font-semibold tracking-widest rounded-xl shadow-[0_8px_20px_-6px_rgba(224,255,79,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(224,255,79,0.6)] hover:-translate-y-1 transition-all duration-300 uppercase border border-[#00272B]/10 hover:border-[#00272B]/30 group-hover:border-[#E0FF4F]">
                            Add to Cart
                        </button>
<a className="block text-center text-[#00272B] group-hover:text-white transition-colors font-medium text-xs underline mt-4 uppercase tracking-wide" href="#">See Details</a>
</div>
</div>
</div>
</div>

<div className="w-full h-1.5 bg-[#00272B]/10 rounded-full mt-24 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full w-[70%] bg-[#E0FF4F] rounded-full border border-[#00272B]"></div>
</div>
</div>
</section><section className="lg:py-32 overflow-hidden bg-[#EAF2ED] w-full pt-24 pb-24 relative">

<div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
<div className="animate-[rise_6s_ease-in_infinite_0.5s] bg-white/60 w-16 h-16 border-white border rounded-full absolute bottom-[-10%] left-[5%] shadow-[0_0_20px_rgba(255,255,255,0.6)] backdrop-blur-md">
</div>
<div className="animate-[rise_4s_ease-in_infinite_1.2s] bg-white/40 w-8 h-8 border-white/50 border rounded-full absolute bottom-[-15%] left-[20%] backdrop-blur-sm">
</div>
<div className="animate-[rise_7s_ease-in_infinite_0.2s] bg-[#E0FF4F]/20 w-24 h-24 border-[#E0FF4F]/30 border rounded-full absolute bottom-[-20%] left-[35%] shadow-[0_0_30px_rgba(224,255,79,0.2)] backdrop-blur-lg">
</div>
<div className="animate-[rise_5s_ease-in_infinite_2.5s] bg-white/50 w-12 h-12 border-white/80 border rounded-full absolute bottom-[-10%] right-[40%] backdrop-blur-sm">
</div>
<div className="animate-[rise_8s_ease-in_infinite_0.8s] bg-[#00272B]/5 w-32 h-32 border-[#00272B]/10 border rounded-full absolute bottom-[-25%] right-[15%] backdrop-blur-xl">
</div>
<div className="animate-[rise_4.5s_ease-in_infinite_1.8s] bg-[#E0FF4F]/30 w-10 h-10 border-[#E0FF4F]/50 border rounded-full absolute bottom-[-12%] right-[5%] shadow-[0_0_15px_rgba(224,255,79,0.3)] backdrop-blur-md">
</div>
<div className="animate-[rise_3.5s_ease-in_infinite_0.4s] bg-white/70 w-5 h-5 border-white border rounded-full absolute bottom-[-5%] left-[50%]">
</div>
<div className="animate-[rise_6.5s_ease-in_infinite_2.1s] bg-[#00272B]/10 w-14 h-14 border-[#00272B]/20 border rounded-full absolute bottom-[-15%] left-[70%] backdrop-blur-sm">
</div>
</div>
<div className="container mx-auto px-6 lg:px-12 max-w-[1400px] relative z-10">

<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
<h2 className="text-5xl lg:text-[5rem] font-extrabold text-[#00272B] tracking-tighter uppercase leading-none flex items-center gap-4">
        Our Flavors
        
      </h2>
<div className="flex items-center gap-3 flex-wrap pb-2">
<span className="text-[#00272B] font-bold uppercase tracking-widest text-sm mr-2 opacity-60">Shop By</span>
<button className="px-6 py-3 rounded-xl bg-[#00272B] text-white border-2 border-[#00272B] font-bold text-sm uppercase tracking-widest shadow-md hover:-translate-y-1 transition-all">Our Flavors</button>
<button className="px-6 py-3 rounded-xl bg-transparent border-2 border-[#00272B]/20 text-[#00272B] font-bold text-sm uppercase tracking-widest hover:border-[#00272B] hover:bg-white hover:-translate-y-1 transition-all">Variety Packs</button>
<button className="px-6 py-3 rounded-xl bg-transparent border-2 border-[#00272B]/20 text-[#00272B] font-bold text-sm uppercase tracking-widest hover:border-[#00272B] hover:bg-white hover:-translate-y-1 transition-all">Gift Cards</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 gap-x-6 gap-y-6">

<div className="aspect-[3/4] overflow-hidden group cursor-pointer hover:shadow-[0_20px_40px_rgba(0,39,43,0.2)] transition-all duration-500 hover:border-[#E0FF4F] bg-orange-300 w-full border-transparent border-2 rounded-[2rem] relative shadow-sm">

<div className="z-40 text-[11px] uppercase animate-[bounce_2s_infinite] font-extrabold text-white tracking-widest bg-[#FF5C00] rounded-full pt-2 pr-4 pb-2 pl-4 absolute top-4 left-4 shadow-[0_4px_10px_rgba(255,92,0,0.4)] -rotate-6">
      Best Seller
    </div>

<div className="z-0 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] bg-[#00272B] absolute top-0 right-0 bottom-0 left-0 translate-y-full">
<img alt="Apples background" className="absolute inset-0 w-full h-[60%] object-cover opacity-30 mix-blend-screen scale-110 group-hover:scale-100 transition-transform duration-1000 delay-100" src="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00272B] 60%"></div>
</div>

<div className="flex z-20 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-6 group-hover:scale-110 h-[65%] mt-4 absolute top-0 right-0 left-0 items-center justify-center">
<div className="aspect-square transition-all duration-700 ease-out group-hover:scale-[2.5] group-hover:opacity-0 bg-orange-800 w-[65%] rounded-full absolute">
</div>
<div className="aspect-square blur-[40px] group-hover:opacity-20 transition-opacity duration-700 bg-amber-500 opacity-0 w-[60%] rounded-full absolute">
</div>
<img alt="Classic Grape" className="z-30 transition-transform duration-700 group-hover:rotate-6 h-[90%] object-contain relative drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa4839c8-1806-4f0f-a5b9-b79372327545_800w.png"/>
</div>

<div className="absolute inset-x-0 bottom-0 h-[35%] z-20 p-6 flex flex-col justify-end">

<div className="text-center absolute inset-x-0 bottom-8 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:translate-y-4">
<h3 className="text-2xl font-extrabold text-[#00272B] tracking-tight uppercase mb-2">Crisp Apple</h3>
<div className="flex items-center justify-center gap-1 text-[#00272B]">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path className="" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path className="" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
</div>
</div>

<div className="group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-150 flex flex-col text-center opacity-0 absolute right-0 bottom-6 left-0 translate-y-4 items-center">
<p className="text-white/90 text-sm font-medium mb-4 px-4 leading-relaxed line-clamp-2">A crisp, refreshing
          apple blend with neon energy.</p>
<button className="px-8 py-3 bg-[#E0FF4F] text-[#00272B] rounded-xl font-bold shadow-[0_0_15px_rgba(224,255,79,0.3)] hover:shadow-[0_0_25px_rgba(224,255,79,0.6)] hover:bg-white hover:-translate-y-1 transition-all duration-300 text-sm uppercase tracking-widest flex items-center gap-2">
                            Add to Cart
                        </button>
</div>
</div>
</div>

<div className="aspect-[3/4] overflow-hidden group cursor-pointer hover:shadow-[0_20px_40px_rgba(0,39,43,0.2)] transition-all duration-500 hover:border-[#E0FF4F] bg-lime-200 w-full border-transparent border-2 rounded-[2rem] relative shadow-sm gap-x-1 gap-y-1">

<div className="absolute inset-0 z-0 bg-[#00272B] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]">
<img alt="Grapes background" className="absolute inset-0 w-full h-[60%] object-cover opacity-30 mix-blend-screen scale-110 group-hover:scale-100 transition-transform duration-1000 delay-100" src="https://images.unsplash.com/photo-1596368708356-6e1e1025ee72?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00272B] 60%"></div>
</div>

<div className="flex z-20 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-6 group-hover:scale-110 h-[65%] mt-4 absolute top-0 right-0 left-0 gap-x-1 gap-y-1 items-center justify-center">
<div className="aspect-square transition-all duration-700 ease-out group-hover:scale-[2.5] group-hover:opacity-0 bg-lime-700 w-[65%] rounded-full absolute gap-x-1 gap-y-1">
</div>
<div className="absolute w-[60%] aspect-square rounded-full bg-[#E0FF4F] blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-700">
</div>
<img alt="Classic Grape" className="z-30 transition-transform duration-700 group-hover:rotate-6 h-[90%] object-contain relative drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7fe28c3a-2e00-4f07-9ffe-9bbd8bd91f6c_800w.png"/>
</div>

<div className="absolute inset-x-0 bottom-0 h-[35%] z-20 p-6 flex flex-col justify-end">

<div className="text-center absolute inset-x-0 bottom-8 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:translate-y-4">
<h3 className="text-2xl font-extrabold text-[#00272B] tracking-tight uppercase mb-2">Classic Grape</h3>
<div className="flex text-[#00272B] gap-x-1 gap-y-1 items-center justify-center">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-4 h-4 fill-current opacity-30" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
</div>
</div>

<div className="text-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-150 absolute inset-x-0 bottom-6 flex flex-col items-center">
<p className="text-white/90 text-sm font-medium mb-4 px-4 leading-relaxed line-clamp-2">The perfect blend of
          sweet &amp; tart.</p>
<button className="px-8 py-3 bg-[#E0FF4F] text-[#00272B] rounded-xl font-bold shadow-[0_0_15px_rgba(224,255,79,0.3)] hover:shadow-[0_0_25px_rgba(224,255,79,0.6)] hover:bg-white hover:-translate-y-1 transition-all duration-300 text-sm uppercase tracking-widest flex items-center gap-2">
                            Add to Cart
                        </button>
</div>
</div>
</div>

<div className="aspect-[3/4] overflow-hidden group cursor-pointer hover:shadow-[0_20px_40px_rgba(0,39,43,0.2)] transition-all duration-500 hover:border-[#E0FF4F] bg-orange-200 w-full border-transparent border-2 rounded-[2rem] relative shadow-sm">

<div className="absolute inset-0 z-0 bg-[#00272B] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]">
<img alt="Cola background" className="absolute inset-0 w-full h-[60%] object-cover opacity-30 mix-blend-screen scale-110 group-hover:scale-100 transition-transform duration-1000 delay-100" src="https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00272B] 60%"></div>
</div>

<div className="absolute inset-x-0 top-0 h-[65%] flex items-center justify-center z-20 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-6 group-hover:scale-110 mt-4">
<div className="absolute w-[65%] aspect-square rounded-full bg-[#D05B43] transition-all duration-700 ease-out group-hover:scale-[2.5] group-hover:opacity-0">
</div>
<div className="absolute w-[60%] aspect-square rounded-full bg-[#E0FF4F] blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-700">
</div>
<img alt="Classic Grape" className="z-30 transition-transform duration-700 group-hover:rotate-6 h-[90%] object-contain relative drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/283936ed-5f49-4443-ac3b-fb848fe97db4_800w.png"/>
</div>

<div className="absolute inset-x-0 bottom-0 h-[35%] z-20 p-6 flex flex-col justify-end">

<div className="text-center absolute inset-x-0 bottom-8 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:translate-y-4">
<h3 className="text-2xl font-extrabold text-[#00272B] tracking-tight uppercase mb-2">Vintage Cola</h3>
<div className="flex items-center justify-center gap-1 text-[#00272B]">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path className="" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path className="" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 .69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
</div>
</div>

<div className="group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-150 flex flex-col text-center opacity-0 absolute right-0 bottom-6 left-0 translate-y-4 items-center">
<p className="text-white/90 text-sm font-medium mb-4 px-4 leading-relaxed line-clamp-2">Old school flavor made
          with new school ingredients.</p>
<button className="px-8 py-3 bg-[#E0FF4F] text-[#00272B] rounded-xl font-bold shadow-[0_0_15px_rgba(224,255,79,0.3)] hover:shadow-[0_0_25px_rgba(224,255,79,0.6)] hover:bg-white hover:-translate-y-1 transition-all duration-300 text-sm uppercase tracking-widest flex items-center gap-2">
                            Add to Cart
                        </button>
</div>
</div>
</div>

<div className="aspect-[3/4] overflow-hidden group cursor-pointer hover:shadow-[0_20px_40px_rgba(0,39,43,0.2)] transition-all duration-500 hover:border-[#E0FF4F] bg-[#F3D9BA] w-full border-transparent border-2 rounded-[2rem] relative shadow-sm">

<div className="absolute inset-0 z-0 bg-[#00272B] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]">
<img alt="Root beer background" className="absolute inset-0 w-full h-[60%] object-cover opacity-30 mix-blend-screen scale-110 group-hover:scale-100 transition-transform duration-1000 delay-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00272B] 60%"></div>
</div>

<div className="absolute inset-x-0 top-0 h-[65%] flex items-center justify-center z-20 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-6 group-hover:scale-110 mt-4">
<div className="absolute w-[65%] aspect-square rounded-full bg-[#B38052] transition-all duration-700 ease-out group-hover:scale-[2.5] group-hover:opacity-0">
</div>
<div className="absolute w-[60%] aspect-square rounded-full bg-[#E0FF4F] blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-700">
</div>
<img alt="Classic Grape" className="z-30 transition-transform duration-700 group-hover:rotate-6 h-[90%] object-contain relative drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7fe28c3a-2e00-4f07-9ffe-9bbd8bd91f6c_800w.png"/>
</div>

<div className="absolute inset-x-0 bottom-0 h-[35%] z-20 p-6 flex flex-col justify-end">

<div className="text-center absolute inset-x-0 bottom-8 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:translate-y-4">
<h3 className="text-2xl font-extrabold text-[#00272B] tracking-tight uppercase mb-2">Classic Root Beer</h3>
<div className="flex items-center justify-center gap-1 text-[#00272B]">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-4 h-4 fill-current opacity-30" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
</div>
</div>

<div className="text-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-150 absolute inset-x-0 bottom-6 flex flex-col items-center">
<p className="text-white/90 text-sm font-medium mb-4 px-4 leading-relaxed line-clamp-2">A rich, creamy, and
          botanically driven experience.</p>
<button className="px-8 py-3 bg-[#E0FF4F] text-[#00272B] rounded-xl font-bold shadow-[0_0_15px_rgba(224,255,79,0.3)] hover:shadow-[0_0_25px_rgba(224,255,79,0.6)] hover:bg-white hover:-translate-y-1 transition-all duration-300 text-sm uppercase tracking-widest flex items-center gap-2">
                            Add to Cart
                        </button>
</div>
</div>
</div>

<div className="aspect-[3/4] overflow-hidden group cursor-pointer hover:shadow-[0_20px_40px_rgba(0,39,43,0.2)] transition-all duration-500 hover:border-[#E0FF4F] bg-fuchsia-400 w-full border-transparent border-2 rounded-[2rem] relative shadow-sm">

<div className="absolute inset-0 z-0 bg-[#00272B] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]">
<img alt="Cream Soda background" className="absolute inset-0 w-full h-[60%] object-cover opacity-30 mix-blend-screen scale-110 group-hover:scale-100 transition-transform duration-1000 delay-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00272B] 60%"></div>
</div>

<div className="absolute inset-x-0 top-0 h-[65%] flex items-center justify-center z-20 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-6 group-hover:scale-110 mt-4">
<div className="aspect-square transition-all duration-700 ease-out group-hover:scale-[2.5] group-hover:opacity-0 bg-fuchsia-700 w-[65%] rounded-full absolute">
</div>
<div className="aspect-square blur-[40px] group-hover:opacity-20 transition-opacity duration-700 bg-fuchsia-950 opacity-0 w-[60%] rounded-full absolute">
</div>
<img alt="Classic Grape" className="z-30 transition-transform duration-700 group-hover:rotate-6 h-[90%] object-contain relative drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/95995501-b750-424b-a854-d4ca2b38f17c_800w.png"/>
</div>

<div className="absolute inset-x-0 bottom-0 h-[35%] z-20 p-6 flex flex-col justify-end">

<div className="text-center absolute inset-x-0 bottom-8 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:translate-y-4">
<h3 className="text-2xl font-extrabold text-[#00272B] tracking-tight uppercase mb-2">Cream Soda</h3>
<div className="flex items-center justify-center gap-1 text-[#00272B]">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
</div>
</div>

<div className="text-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-150 absolute inset-x-0 bottom-6 flex flex-col items-center">
<p className="text-white/90 text-sm font-medium mb-4 px-4 leading-relaxed line-clamp-2">Smooth, velvety, and
          perfectly sweet.</p>
<button className="px-8 py-3 bg-[#E0FF4F] text-[#00272B] rounded-xl font-bold shadow-[0_0_15px_rgba(224,255,79,0.3)] hover:shadow-[0_0_25px_rgba(224,255,79,0.6)] hover:bg-white hover:-translate-y-1 transition-all duration-300 text-sm uppercase tracking-widest flex items-center gap-2">
                            Add to Cart
                        </button>
</div>
</div>
</div>

<div className="aspect-[3/4] overflow-hidden group cursor-pointer hover:shadow-[0_20px_40px_rgba(0,39,43,0.2)] transition-all duration-500 hover:border-[#E0FF4F] bg-red-200 w-full border-transparent border-2 rounded-[2rem] relative shadow-sm">

<div className="absolute inset-0 z-0 bg-[#00272B] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]">
<img alt="Orange background" className="absolute inset-0 w-full h-[60%] object-cover opacity-30 mix-blend-screen scale-110 group-hover:scale-100 transition-transform duration-1000 delay-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00272B] 60%"></div>
</div>

<div className="flex z-20 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-6 group-hover:scale-110 h-[65%] mt-4 absolute top-0 right-0 left-0 items-center justify-center">
<div className="aspect-square transition-all duration-700 ease-out group-hover:scale-[2.5] group-hover:opacity-0 bg-red-900 w-[65%] rounded-full absolute">
</div>
<div className="aspect-square blur-[40px] group-hover:opacity-20 transition-opacity duration-700 bg-red-700 opacity-0 w-[60%] rounded-full absolute">
</div>
<img alt="Classic Grape" className="transition-transform duration-700 group-hover:rotate-6 z-30 h-[90%] object-contain relative drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7bd2cb9a-8b9a-4405-a8d2-a3603687b849_800w.png"/>
</div>

<div className="absolute inset-x-0 bottom-0 h-[35%] z-20 p-6 flex flex-col justify-end">

<div className="text-center absolute inset-x-0 bottom-8 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:translate-y-4">
<h3 className="text-2xl font-extrabold text-[#00272B] tracking-tight uppercase mb-2">Orange Cream</h3>
<div className="flex items-center justify-center gap-1 text-[#00272B]">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-4 h-4 fill-current opacity-30" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-4 h-4 fill-current opacity-30" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
</div>
</div>

<div className="text-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-150 absolute inset-x-0 bottom-6 flex flex-col items-center">
<p className="text-white/90 text-sm font-medium mb-4 px-4 leading-relaxed line-clamp-2">Citrus bite with a
          creamy vanilla finish.</p>
<button className="px-8 py-3 bg-[#E0FF4F] text-[#00272B] rounded-xl font-bold shadow-[0_0_15px_rgba(224,255,79,0.3)] hover:shadow-[0_0_25px_rgba(224,255,79,0.6)] hover:bg-white hover:-translate-y-1 transition-all duration-300 text-sm uppercase tracking-widest flex items-center gap-2">
                            Add to Cart
                        </button>
</div>
</div>
</div>
</div>
</div>
</section><section className="overflow-hidden bg-[#00272B] w-full z-10 border-[#E0FF4F]/10 border-t pt-32 pb-40 relative">

<div className="z-0 pointer-events-none overflow-hidden absolute top-0 right-0 bottom-0 left-0 bg-[#00272B]">

<div className="absolute inset-0 z-20">

<div className="absolute bottom-[-10%] left-[5%] w-16 h-16 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm animate-[rise_7s_ease-in_infinite_0s]"></div>
<div className="absolute bottom-[-15%] left-[25%] w-24 h-24 rounded-full border border-[#E0FF4F]/30 bg-[#E0FF4F]/10 backdrop-blur-md animate-[rise_9s_ease-in_infinite_2s] shadow-[inset_0_0_20px_rgba(224,255,79,0.2)]"></div>
<div className="absolute bottom-[-20%] left-[50%] w-20 h-20 rounded-full border border-[#FF5C00]/20 bg-[#FF5C00]/5 backdrop-blur-sm animate-[rise_8s_ease-in_infinite_4s]"></div>
<div className="absolute bottom-[-10%] left-[75%] w-14 h-14 rounded-full border border-white/30 bg-white/10 backdrop-blur-md animate-[rise_6s_ease-in_infinite_1s]"></div>
<div className="absolute bottom-[-25%] left-[90%] w-32 h-32 rounded-full border border-[#005A63]/50 bg-[#005A63]/20 backdrop-blur-lg animate-[rise_12s_ease-in_infinite_3s]"></div>

<div className="absolute bottom-[-5%] left-[12%] w-8 h-8 rounded-full border border-[#E0FF4F]/40 bg-transparent animate-[rise_5s_ease-in_infinite_1.5s]"></div>
<div className="absolute bottom-[-10%] left-[35%] w-10 h-10 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm animate-[rise_6.5s_ease-in_infinite_0.5s]"></div>
<div className="absolute bottom-[-8%] left-[42%] w-6 h-6 rounded-full border border-[#FF5C00]/40 bg-[#FF5C00]/10 animate-[rise_4s_ease-in_infinite_3.5s]"></div>
<div className="absolute bottom-[-12%] left-[62%] w-12 h-12 rounded-full border border-[#E0FF4F]/20 bg-[#E0FF4F]/5 backdrop-blur-sm animate-[rise_7.5s_ease-in_infinite_2.2s]"></div>
<div className="absolute bottom-[-15%] left-[82%] w-9 h-9 rounded-full border border-white/30 bg-transparent animate-[rise_5.5s_ease-in_infinite_4.1s]"></div>
<div className="absolute bottom-[-5%] left-[95%] w-11 h-11 rounded-full border border-[#005A63]/60 bg-[#005A63]/20 animate-[rise_8s_ease-in_infinite_1.8s]"></div>

<div className="absolute bottom-0 left-[2%] w-3 h-3 rounded-full bg-white/40 animate-[rise_3s_ease-in_infinite_0.2s]"></div>
<div className="absolute bottom-[-2%] left-[18%] w-4 h-4 rounded-full bg-[#E0FF4F]/50 animate-[rise_3.5s_ease-in_infinite_1.1s]"></div>
<div className="absolute bottom-[-4%] left-[28%] w-2 h-2 rounded-full bg-white/60 animate-[rise_2.5s_ease-in_infinite_0.7s]"></div>
<div className="absolute bottom-[-1%] left-[48%] w-5 h-5 rounded-full border border-[#E0FF4F]/60 bg-transparent animate-[rise_4s_ease-in_infinite_2.8s]"></div>
<div className="absolute bottom-[-3%] left-[55%] w-3 h-3 rounded-full bg-[#FF5C00]/50 animate-[rise_3.2s_ease-in_infinite_1.4s]"></div>
<div className="absolute bottom-0 left-[68%] w-4 h-4 rounded-full bg-white/30 animate-[rise_3.8s_ease-in_infinite_0.9s]"></div>
<div className="absolute bottom-[-5%] left-[88%] w-2 h-2 rounded-full bg-[#E0FF4F]/70 animate-[rise_2.8s_ease-in_infinite_3.1s]"></div>

<div className="absolute bottom-[-30%] left-[20%] w-40 h-40 rounded-full border border-[#004A52] bg-[#004A52]/10 blur-sm animate-[rise_15s_ease-in_infinite_0s]"></div>
<div className="absolute bottom-[-40%] left-[60%] w-48 h-48 rounded-full border border-[#005A63] bg-[#005A63]/10 blur-md animate-[rise_18s_ease-in_infinite_5s]"></div>
</div>
</div>
<div className="container lg:px-12 z-30 mr-auto ml-auto pr-6 pl-6 relative">

<div className="flex lg:mb-20 mb-16 justify-center">
<div className="bg-[#FF5C00] text-white border-2 border-white px-8 py-3 font-semibold text-lg uppercase tracking-widest shadow-[6px_6px_0_0_#FFFFFF] hover:shadow-[8px_8px_0_0_#FFFFFF] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-center gap-3">
                All Press
                
            </div>
</div>

<div className="text-center mb-20 lg:mb-32">
<h2 className="text-6xl lg:text-[7.5rem] font-semibold text-white tracking-tighter lowercase leading-[0.9] drop-shadow-[0_0_30px_rgba(224,255,79,0.1)] relative inline-block">
                what they're saying
                
<svg className="absolute w-[80%] h-auto -bottom-6 left-[10%] text-[#E0FF4F] opacity-60" preserveaspectratio="none" viewbox="0 0 200 20">
<path className="animate-[pulse_4s_ease-in-out_infinite]" d="M0 15 Q 50 -10, 100 15 T 200 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="6"></path>
</svg>
</h2>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-10 items-stretch max-w-[1400px] mx-auto">

<div className="relative group mt-0 lg:mt-12 h-full cursor-pointer">

<div className="absolute inset-0 bg-[#E0FF4F] translate-x-4 translate-y-4 lg:translate-x-6 lg:translate-y-6 transition-transform duration-500 group-hover:translate-x-8 group-hover:translate-y-8"></div>

<div className="relative h-full bg-[#005A63] p-10 lg:p-12 flex flex-col justify-center items-center text-center border-2 border-[#E0FF4F] transform transition-transform duration-500 group-hover:-translate-y-2 backdrop-blur-sm">

<span className="text-6xl lg:text-7xl font-serif text-[#E0FF4F] leading-none mb-4 animate-[float_4s_ease-in-out_infinite]">“</span>
<p className="text-2xl lg:text-[1.75rem] font-medium text-white tracking-tight leading-snug mb-10">
                        the right amount of chill, without the artificial junk
                    </p>
<p className="uppercase text-lg font-semibold text-[#E0FF4F]/80 tracking-widest mt-auto">– John h.</p>
</div>
</div>

<div className="relative group h-full cursor-pointer lg:-mt-12 z-20">

<div className="absolute inset-0 bg-white translate-x-4 translate-y-4 lg:translate-x-6 lg:translate-y-6 transition-transform duration-500 group-hover:translate-x-8 group-hover:translate-y-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"></div>

<div className="relative h-full bg-[#E0FF4F] p-10 lg:p-14 flex flex-col justify-center items-center text-center border-2 border-[#00272B] transform transition-transform duration-500 group-hover:-translate-y-3">

<div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

<span className="text-7xl lg:text-8xl font-serif text-[#00272B] leading-none mb-4 animate-[float-reverse_5s_ease-in-out_infinite]">“</span>
<p className="text-3xl lg:text-4xl font-semibold text-[#00272B] tracking-tight leading-[1.15] mb-12">
                        hooked on the @neonpulp sodas. perfect afternoon pick-me-up without the fake sugar crash
                    </p>
<p className="uppercase flex items-center gap-2 text-lg font-bold text-[#00272B]/60 tracking-widest mt-auto">– Swaraj J. <i className="w-5 h-5 text-[#005A63]" data-lucide="check-circle-2" strokeWidth="2"></i></p>
</div>
</div>

<div className="relative group mt-0 lg:mt-12 h-full cursor-pointer">

<div className="absolute inset-0 bg-[#FF5C00] translate-x-4 translate-y-4 lg:translate-x-6 lg:translate-y-6 transition-transform duration-500 group-hover:translate-x-8 group-hover:translate-y-8"></div>

<div className="relative h-full bg-[#004A52] p-10 lg:p-12 flex flex-col justify-center items-center text-center border-2 border-[#FF5C00] transform transition-transform duration-500 group-hover:-translate-y-2 backdrop-blur-sm">

<span className="text-6xl lg:text-7xl font-serif text-[#FF5C00] leading-none mb-4 animate-[float_6s_ease-in-out_infinite]">“</span>
<p className="text-2xl lg:text-[1.75rem] font-medium text-white tracking-tight leading-snug mb-10">
                        swapping out my evening glass of wine for a persimmon punch
                    </p>
<p className="mt-auto uppercase tracking-widest text-lg font-semibold text-[#FF5C00]/80">
                        – @vibrantlife
                    </p>
</div>
</div>
</div>

<div className="flex justify-center items-center gap-4 mt-24 lg:mt-32 relative z-30">
<button aria-label="Go to slide 1" className="w-4 h-4 rounded-full bg-white transition-transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-[#E0FF4F] focus:ring-offset-2 focus:ring-offset-[#00272B]"></button>
<button aria-label="Go to slide 2" className="w-4 h-4 rounded-full border-2 border-white hover:bg-white/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#E0FF4F] focus:ring-offset-2 focus:ring-offset-[#00272B]"></button>
<button aria-label="Go to slide 3" className="w-4 h-4 rounded-full border-2 border-white hover:bg-white/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#E0FF4F] focus:ring-offset-2 focus:ring-offset-[#00272B]"></button>
<button aria-label="Go to slide 4" className="w-4 h-4 rounded-full border-2 border-white hover:bg-white/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#E0FF4F] focus:ring-offset-2 focus:ring-offset-[#00272B]"></button>
</div>

<div className="flex justify-center mt-20 relative z-30">
<button className="bg-[#004A52] text-white border-2 border-[#E0FF4F] px-12 py-5 font-semibold text-xl tracking-widest uppercase shadow-[8px_8px_0_0_#E0FF4F] hover:shadow-[12px_12px_0_0_#E0FF4F] hover:bg-[#005A63] hover:-translate-y-1 transition-all duration-300 group flex items-center gap-4">
                Shop All Products
                <i className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 text-[#E0FF4F]" data-lucide="arrow-right" strokeWidth="2"></i>
</button>
</div>
</div>
</section><section className="lg:pt-32 lg:pb-40 overflow-hidden z-20 bg-[#00272B] w-full border-[#E0FF4F]/10 border-t pt-24 pb-32 relative">

<div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute bottom-[-10%] left-[5%] w-16 h-16 rounded-full border border-[#E0FF4F]/10 bg-[#E0FF4F]/5 backdrop-blur-sm animate-[rise_7s_ease-in_infinite_0s]"></div>
<div className="absolute bottom-[-20%] left-[25%] w-24 h-24 rounded-full border border-white/5 bg-transparent backdrop-blur-md animate-[rise_9s_ease-in_infinite_2s]"></div>
<div className="absolute bottom-[-15%] right-[15%] w-12 h-12 rounded-full border border-[#FF5C00]/30 bg-[#FF5C00]/10 backdrop-blur-sm animate-[rise_6s_ease-in_infinite_1s]"></div>
<div className="absolute bottom-[-5%] right-[35%] w-8 h-8 rounded-full bg-white/5 backdrop-blur-sm animate-[rise_4s_ease-in_infinite_0.5s]"></div>
<div className="absolute bottom-[-25%] left-[60%] w-32 h-32 rounded-full border-2 border-[#E0FF4F]/10 bg-transparent backdrop-blur-lg animate-[rise_12s_ease-in_infinite_3s]"></div>
<div className="absolute bottom-[-5%] left-[10%] w-3 h-3 bg-[#FFB800]/60 rounded-full animate-[rise_3s_ease-in_infinite_1.2s]"></div>
<div className="absolute bottom-[-2%] left-[40%] w-4 h-4 bg-white/10 rounded-full animate-[rise_4.5s_ease-in_infinite_0.8s]"></div>
<div className="absolute bottom-[-8%] right-[25%] w-2 h-2 bg-[#E0FF4F]/80 rounded-full animate-[rise_2.5s_ease-in_infinite_2.1s]"></div>
<div className="absolute bottom-[-4%] right-[50%] w-5 h-5 border border-[#FF5C00]/40 rounded-full animate-[rise_5s_ease-in_infinite_0.3s]"></div>
<div className="absolute bottom-[-6%] left-[80%] w-3 h-3 bg-[#E0FF4F]/50 rounded-full animate-[rise_3.5s_ease-in_infinite_1.7s]"></div>
<div className="absolute bottom-[-20%] left-[70%] w-20 h-20 border-2 border-[#E0FF4F]/5 bg-[#E0FF4F]/5 rounded-full shadow-[inset_0_0_20px_rgba(224,255,79,0.1)] animate-[rise_10s_ease-in_infinite_1.8s]"></div>
<div className="absolute bottom-[-25%] left-[45%] w-28 h-28 rounded-full border border-white/5 bg-white/5 backdrop-blur-xl animate-[rise_14s_ease-in_infinite_3.5s]"></div>
</div>

<div className="container lg:px-12 z-10 lg:mb-12 text-center mr-auto mb-10 ml-auto pr-6 pl-6 relative">
<h2 className="text-5xl md:text-6xl lg:text-[6rem] font-bold text-white tracking-tighter uppercase leading-none inline-block relative group drop-shadow-md">
            The <span className="text-[#E0FF4F]">Pulp</span> Journey
            <svg className="absolute w-[110%] h-auto -bottom-4 -left-4 text-[#E0FF4F] -z-10 drop-shadow-[0_0_10px_rgba(224,255,79,0.3)] opacity-60" preserveaspectratio="none" viewbox="0 0 200 20">
<path className="animate-[pulse_3s_ease-in-out_infinite]" d="M0 15 Q 50 -5, 100 15 T 200 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="6"></path>
</svg>
</h2>
</div>

<div className="w-full relative z-10 h-[650px] flex items-center overflow-hidden">

<div className="absolute top-1/2 left-0 w-[200vw] h-0 border-t-2 border-dashed border-white/20 -translate-y-1/2 pointer-events-none z-0"></div>

<div className="absolute left-0 top-0 bottom-0 w-12 lg:w-32 bg-gradient-to-r from-[#00272B] to-transparent z-30 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-12 lg:w-32 bg-gradient-to-l from-[#00272B] to-transparent z-30 pointer-events-none"></div>

<div className="flex overflow-x-auto snap-x snap-mandatory lg:gap-[10vw] [&amp;::-webkit-scrollbar]:hidden z-20 w-full h-full pr-[10vw] pl-[10vw] relative gap-x-[15vw] gap-y-[15vw] items-center" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>

<div className="snap-center shrink-0 w-[85vw] sm:w-[380px] lg:w-[420px] flex flex-col relative h-[500px] group justify-start pt-8">

<div className="absolute top-0 right-10 bg-[#FF5C00] text-white border-4 border-white font-bold text-3xl px-8 py-2 rounded-full shadow-[0_10px_20px_rgba(255,92,0,0.3)] transform rotate-6 z-30 animate-[float_4s_ease-in-out_infinite]">
                    2024
                </div>

<div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_20px_40px_rgba(0,0,0,0.3)] w-full relative z-20 mt-8 group-hover:-translate-y-2 transition-transform duration-500">
<h3 className="text-2xl font-bold text-white tracking-tight uppercase mb-4">The Spark</h3>
<p className="text-lg font-medium text-white/70 leading-relaxed">
                        Initial concept born from a frustration with boring, artificial sodas. We wanted real fruit, high energy, and uncompromising flavor. Neon Pulp is conceived in a tiny kitchen, experimenting with real persimmons and yuzu.
                    </p>

<svg className="absolute -bottom-16 left-[20%] w-16 h-20 text-white/50 drop-shadow-sm group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 60 100">
<path className="animate-[pulse_3s_ease-in-out_infinite]" d="M30 0 C 60 30, 0 50, 30 80 L 30 95 M 15 80 L 30 95 L 45 80"></path>
</svg>
</div>

<div className="absolute top-1/2 left-[20%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#00272B] border-4 border-[#FF5C00] shadow-[0_0_15px_rgba(255,92,0,0.5)] z-30 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
<div className="bg-white w-2 h-2 rounded-full"></div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
<div className="w-16 h-24 bg-gradient-to-t from-[#FF5C00] to-transparent rounded-t-xl opacity-20 border-t border-x border-[#FF5C00]/30"></div>
<span className="text-xs font-semibold text-white tracking-widest uppercase">Lab Phase</span>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] sm:w-[380px] lg:w-[420px] flex flex-col relative h-[500px] group justify-end pb-8">

<div className="absolute top-1/2 right-[20%] translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#00272B] border-4 border-[#E0FF4F] shadow-[0_0_15px_rgba(224,255,79,0.5)] z-30 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
<div className="w-2 h-2 bg-[#E0FF4F] rounded-full"></div>
</div>

<div className="bg-[#E0FF4F] text-[#00272B] border-2 border-white rounded-3xl p-8 shadow-[12px_12px_0_0_rgba(255,255,255,0.1)] w-full relative z-20 mb-8 group-hover:translate-y-2 transition-transform duration-500">

<svg className="absolute -top-16 right-[20%] translate-x-1/2 w-16 h-20 text-[#E0FF4F] drop-shadow-[0_0_10px_rgba(224,255,79,0.3)]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 60 100">
<path className="animate-[pulse_3s_ease-in-out_infinite_1s]" d="M30 100 C 60 70, 0 50, 30 20 L 30 5 M 15 20 L 30 5 L 45 20"></path>
</svg>
<h3 className="text-2xl font-bold text-[#00272B] tracking-tight uppercase mb-4">The Formula</h3>
<p className="text-lg font-medium text-[#00272B]/80 leading-relaxed">
                        Perfecting the "Electric Taste". We partnered with flavor scientists to lock in the intense, radical refreshment without the junk. The iconic Mango Crush and Electric Lemon profiles are finalized. First small-batch canning run sells out in hours.
                    </p>
</div>

<div className="absolute bottom-0 left-10 bg-[#001A1D] text-[#E0FF4F] border-4 border-[#E0FF4F] font-bold text-3xl px-8 py-2 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.5)] transform -rotate-3 z-30 animate-[float-reverse_5s_ease-in-out_infinite]">
                    2025
                </div>

<div className="absolute top-10 right-[30%] text-[#E0FF4F] opacity-30 animate-[spin-slow_10s_linear_infinite]">
<svg className="lucide lucide-asterisk" fill="none" height="60" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="60" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] sm:w-[380px] lg:w-[420px] flex flex-col relative h-[500px] group justify-start pt-8">

<div className="absolute top-0 right-1/2 translate-x-1/2 bg-[#FFB800] text-[#00272B] border-4 border-[#00272B] font-bold text-3xl px-8 py-2 rounded-[2rem] shadow-[6px_6px_0_0_#FFB800] transform rotate-2 z-30 animate-[float_6s_ease-in-out_infinite_1s]">
                    2026
                </div>

<div className="bg-gradient-to-br from-[#004A52] to-[#00272B] border border-[#FFB800]/30 rounded-3xl p-8 shadow-[0_20px_40px_rgba(0,0,0,0.4)] w-full relative z-20 mt-12 group-hover:-translate-y-2 transition-transform duration-500">
<h3 className="text-2xl font-bold text-[#FFB800] tracking-tight uppercase mb-4">Nationwide Neon</h3>
<p className="text-lg font-medium text-white/80 leading-relaxed">
                        Scaling the pulp. We launch our online store and secure our first major retail partnerships. The Neon energy spreads across the US, proving that radically refreshing soda is exactly what the people needed. The flavor revolution is fully underway.
                    </p>

<svg className="absolute -bottom-16 left-[50%] -translate-x-1/2 w-16 h-20 text-[#FFB800]/70 drop-shadow-sm group-hover:text-[#FFB800] transition-colors duration-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 60 100">
<path className="animate-[pulse_3s_ease-in-out_infinite_2s]" d="M30 0 C 0 30, 60 50, 30 80 L 30 95 M 15 80 L 30 95 L 45 80"></path>
</svg>

<div className="absolute -bottom-12 -right-8 w-28 h-28 rounded-full border border-dashed border-[#E0FF4F]/40 flex items-center justify-center animate-[spin-slow_12s_linear_infinite] bg-[#00272B] z-10 shadow-lg">
<svg className="w-full h-full overflow-visible p-2 text-[#E0FF4F]" viewbox="0 0 100 100">
<path d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" id="neon-curve"></path>
<text className="text-[11px] font-bold uppercase tracking-[0.2em]" fill="currentColor">
<textpath href="#neon-curve" startoffset="0%">PURE PULP • NEON TASTE •</textpath>
</text>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-2 h-2 bg-[#E0FF4F] rounded-full"></div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#00272B] border-4 border-[#FFB800] shadow-[0_0_15px_rgba(255,184,0,0.5)] z-30 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
</div>

<div className="shrink-0 w-[5vw] lg:w-[10vw]"></div>
</div>
</div>

<div className="container mx-auto px-6 lg:px-24 mt-2 relative z-10 hidden md:block">
<div className="h-1.5 overflow-hidden group bg-white/10 w-full max-w-md mx-auto rounded-full relative">
<div className="absolute top-0 left-1/4 h-full w-[25%] bg-[#E0FF4F] rounded-full shadow-[0_0_10px_rgba(224,255,79,0.5)]"></div>
</div>
<div className="text-center mt-6">
<span className="text-[#E0FF4F]/60 text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-3">
<svg className="lucide lucide-arrow-left" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
                Scroll to uncover the timeline
                <svg className="lucide lucide-arrow-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</section><footer className="overflow-hidden z-20 text-white bg-[#00272B] w-full border-[#E0FF4F]/20 border-t pt-32 pb-8 relative">

<div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

<div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-[#E0FF4F] rounded-full blur-[150px] animate-[float_15s_ease-in-out_infinite] opacity-5"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[#E0FF4F] rounded-full blur-[120px] animate-[float-reverse_20s_ease-in-out_infinite] opacity-5"></div>

<div className="absolute bottom-[-10%] left-[5%] w-12 h-12 rounded-full border border-[#E0FF4F]/30 bg-[#E0FF4F]/10 backdrop-blur-sm animate-[rise_5s_ease-in_infinite_0s]"></div>
<div className="absolute bottom-[-15%] left-[12%] w-6 h-6 rounded-full border border-[#E0FF4F]/40 bg-transparent animate-[rise_4s_ease-in_infinite_1.2s]"></div>
<div className="absolute bottom-[-20%] left-[18%] w-20 h-20 rounded-full border-2 border-[#E0FF4F]/20 bg-[#E0FF4F]/5 backdrop-blur-md animate-[rise_7s_ease-in_infinite_0.5s]"></div>
<div className="absolute bottom-[-5%] left-[25%] w-3 h-3 bg-[#E0FF4F]/60 rounded-full animate-[rise_3s_ease-in_infinite_2s]"></div>
<div className="absolute bottom-[-12%] left-[32%] w-16 h-16 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm animate-[rise_6s_ease-in_infinite_0.8s]"></div>
<div className="absolute bottom-[-25%] left-[38%] w-32 h-32 rounded-full border border-[#E0FF4F]/10 bg-transparent backdrop-blur-lg animate-[rise_10s_ease-in_infinite_2.5s]"></div>
<div className="absolute bottom-[-8%] left-[45%] w-8 h-8 rounded-full border border-[#E0FF4F]/50 bg-[#E0FF4F]/20 animate-[rise_4.5s_ease-in_infinite_0.3s]"></div>
<div className="absolute bottom-[-15%] left-[52%] w-5 h-5 bg-[#E0FF4F]/40 rounded-full animate-[rise_3.5s_ease-in_infinite_1.8s]"></div>
<div className="absolute bottom-[-10%] left-[60%] w-14 h-14 rounded-full border border-white/30 bg-white/10 backdrop-blur-md animate-[rise_5.5s_ease-in_infinite_1.1s]"></div>
<div className="absolute bottom-[-30%] left-[68%] w-24 h-24 rounded-full border-2 border-[#E0FF4F]/15 bg-[#E0FF4F]/5 backdrop-blur-xl animate-[rise_8s_ease-in_infinite_0.2s]"></div>
<div className="absolute bottom-[-5%] left-[75%] w-4 h-4 bg-white/50 rounded-full animate-[rise_3.2s_ease-in_infinite_2.2s]"></div>
<div className="absolute bottom-[-18%] left-[82%] w-10 h-10 rounded-full border border-[#E0FF4F]/40 bg-[#E0FF4F]/10 backdrop-blur-sm animate-[rise_4.8s_ease-in_infinite_0.7s]"></div>
<div className="absolute bottom-[-12%] left-[90%] w-18 h-18 rounded-full border border-white/20 bg-transparent backdrop-blur-md animate-[rise_6.5s_ease-in_infinite_1.5s]"></div>
<div className="absolute bottom-[-6%] left-[95%] w-7 h-7 rounded-full border border-[#E0FF4F]/60 bg-[#E0FF4F]/20 animate-[rise_4.2s_ease-in_infinite_0.9s]"></div>
<div className="absolute bottom-[-2%] left-[8%] w-2 h-2 bg-[#E0FF4F]/80 rounded-full animate-[rise_2.5s_ease-in_infinite_0.4s]"></div>
<div className="absolute bottom-[-22%] left-[28%] w-28 h-28 rounded-full border border-[#E0FF4F]/20 bg-[#E0FF4F]/5 backdrop-blur-lg animate-[rise_9s_ease-in_infinite_1.7s]"></div>
<div className="absolute bottom-[-4%] left-[48%] w-3 h-3 bg-white/60 rounded-full animate-[rise_3.8s_ease-in_infinite_0.6s]"></div>
<div className="absolute bottom-[-14%] left-[58%] w-11 h-11 rounded-full border border-[#E0FF4F]/30 bg-transparent animate-[rise_5.2s_ease-in_infinite_2.1s]"></div>
<div className="absolute bottom-[-9%] left-[72%] w-6 h-6 rounded-full border border-white/40 bg-white/10 animate-[rise_4.1s_ease-in_infinite_1.3s]"></div>
<div className="absolute bottom-[-3%] left-[88%] w-2 h-2 bg-[#E0FF4F]/70 rounded-full animate-[rise_2.8s_ease-in_infinite_0.1s]"></div>
</div>
<div className="container mx-auto px-6 lg:px-12 relative z-10">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">

<div className="lg:col-span-5 flex flex-col justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E0FF4F]/30 bg-[#E0FF4F]/10 text-[#E0FF4F] text-xs font-semibold uppercase tracking-widest w-max mb-6">
<i className="w-3 h-3" data-lucide="zap"></i>
                    Join The Club
                </div>
<h3 className="text-4xl lg:text-5xl font-semibold tracking-tight uppercase leading-none mb-4 text-white">
                    Stay <span className="text-[#E0FF4F]">Fizzy.</span>
</h3>
<p className="text-white/70 font-medium text-lg mb-8 max-w-md">
                    Subscribe for secret flavor drops, very weird merch, and 15% off your first neon case.
                </p>
<form className="relative w-full max-w-md group" onsubmit="event.preventDefault();">

<input className="w-full bg-white/5 border-2 border-white/10 rounded-2xl py-4 pl-5 pr-36 text-white placeholder:text-white/40 focus:outline-none focus:border-[#E0FF4F] transition-colors shadow-inner" placeholder="Enter your email" required="" type="email"/>

<button className="absolute right-2 top-2 bottom-2 bg-[#E0FF4F] text-[#00272B] font-semibold uppercase tracking-widest px-6 rounded-xl hover:bg-white hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(224,255,79,0.5)] transition-all duration-300 flex items-center justify-center gap-2 group/btn overflow-hidden" type="submit">
<span className="relative z-10">Pop It</span>

<div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/btn:opacity-100 transition-opacity">
<div className="absolute bottom-0 left-[20%] w-1 h-1 bg-[#00272B]/30 rounded-full animate-[rise_1s_ease-in_infinite_0s]"></div>
<div className="absolute bottom-0 left-[50%] w-1.5 h-1.5 bg-[#00272B]/30 rounded-full animate-[rise_1.2s_ease-in_infinite_0.2s]"></div>
<div className="absolute bottom-0 left-[80%] w-1 h-1 bg-[#00272B]/30 rounded-full animate-[rise_0.8s_ease-in_infinite_0.1s]"></div>
</div>
</button>
</form>
</div>

<div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10 lg:pl-12">

<div className="flex flex-col gap-4">
<h4 className="text-[#E0FF4F] font-semibold uppercase tracking-widest text-sm mb-2">Shop</h4>
<a className="text-white/70 hover:text-white hover:translate-x-2 transition-transform duration-300 font-medium flex items-center gap-2 group text-lg" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-[#E0FF4F] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                       All Flavors
                    </a>
<a className="text-white/70 hover:text-white hover:translate-x-2 transition-transform duration-300 font-medium flex items-center gap-2 group text-lg" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-[#E0FF4F] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                       Variety Packs
                    </a>
<a className="text-white/70 hover:text-white hover:translate-x-2 transition-transform duration-300 font-medium flex items-center gap-2 group text-lg" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-[#E0FF4F] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                       Subscriptions
                    </a>
<a className="text-white/70 hover:text-white hover:translate-x-2 transition-transform duration-300 font-medium flex items-center gap-2 group text-lg" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-[#E0FF4F] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                       Merch
                    </a>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-[#E0FF4F] font-semibold uppercase tracking-widest text-sm mb-2">Learn</h4>
<a className="text-white/70 hover:text-white hover:translate-x-2 transition-transform duration-300 font-medium flex items-center gap-2 group text-lg" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-[#E0FF4F] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                       Our Story
                    </a>
<a className="text-white/70 hover:text-white hover:translate-x-2 transition-transform duration-300 font-medium flex items-center gap-2 group text-lg" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-[#E0FF4F] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                       Ingredients
                    </a>
<a className="text-white/70 hover:text-white hover:translate-x-2 transition-transform duration-300 font-medium flex items-center gap-2 group text-lg" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-[#E0FF4F] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                       Find a Store
                    </a>
<a className="text-white/70 hover:text-white hover:translate-x-2 transition-transform duration-300 font-medium flex items-center gap-2 group text-lg" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-[#E0FF4F] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                       Press
                    </a>
</div>

<div className="flex flex-col gap-4 col-span-2 md:col-span-1">
<h4 className="text-[#E0FF4F] font-semibold uppercase tracking-widest text-sm mb-2">Support</h4>
<a className="text-white/70 hover:text-white hover:translate-x-2 transition-transform duration-300 font-medium flex items-center gap-2 group text-lg" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-[#E0FF4F] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                       FAQ
                    </a>
<a className="text-white/70 hover:text-white hover:translate-x-2 transition-transform duration-300 font-medium flex items-center gap-2 group text-lg" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-[#E0FF4F] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                       Contact Us
                    </a>
<a className="text-white/70 hover:text-white hover:translate-x-2 transition-transform duration-300 font-medium flex items-center gap-2 group text-lg" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-[#E0FF4F] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                       Shipping
                    </a>
<a className="text-white/70 hover:text-white hover:translate-x-2 transition-transform duration-300 font-medium flex items-center gap-2 group text-lg" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-[#E0FF4F] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                       Returns
                    </a>
</div>
</div>
</div>

<div className="relative w-full py-8 md:py-12 border-y border-white/10 mb-10 overflow-hidden group cursor-crosshair flex justify-center items-center select-none rounded-[2rem] bg-white/5 backdrop-blur-sm">

<div className="group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] z-0 bg-[#E0FF4F] rounded-[2rem] absolute top-0 right-0 bottom-0 left-0 translate-y-full"></div>
<h2 className="text-[13vw] lg:text-[140px] leading-[0.85] uppercase group-hover:text-[#00272B] transition-colors duration-700 z-10 font-extrabold text-white tracking-tighter text-center relative drop-shadow-md">
                NEON PULP
            </h2>

<div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:animate-[float-reverse_4s_ease-in-out_infinite] transition-all duration-500 z-20 pointer-events-none hidden md:block">
<i className="w-20 h-20 text-[#00272B]" data-lucide="sun"></i>
</div>
</div>

<div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 pt-4">

<div className="flex flex-col md:flex-row items-center gap-4 text-white/50 text-sm font-medium">
<span className="">© 2024 Neon Pulp Beverages.</span>
<div className="flex items-center gap-4">
<a className="hover:text-[#E0FF4F] transition-colors" href="#">Privacy</a>
<span className="w-1 h-1 rounded-full bg-white/20"></span>
<a className="hover:text-[#E0FF4F] transition-colors" href="#">Terms</a>
<span className="w-1 h-1 rounded-full bg-white/20"></span>
<a className="hover:text-[#E0FF4F] transition-colors" href="#">designed by Kunal Lonare</a>
</div>
</div>

<div className="flex items-center gap-6">

<div className="flex items-center gap-3">
<a aria-label="Instagram" className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:border-[#E0FF4F] hover:text-[#00272B] hover:bg-[#E0FF4F] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(224,255,79,0.2)] group relative" href="#">
<i className="w-5 h-5 group-hover:animate-[spin-slow_2s_linear_infinite]" data-lucide="instagram"></i>
<span className="absolute -top-2 -right-2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-[rise_1s_ease-in_infinite] pointer-events-none"></span>
</a>
<a aria-label="Twitter" className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:border-[#E0FF4F] hover:text-[#00272B] hover:bg-[#E0FF4F] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(224,255,79,0.2)] group relative" href="#">
<i className="w-5 h-5 group-hover:-rotate-12 transition-transform" data-lucide="twitter"></i>
<span className="absolute -top-2 left-0 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-[rise_1.2s_ease-in_infinite] pointer-events-none"></span>
</a>
<a aria-label="TikTok" className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:border-[#E0FF4F] hover:text-[#00272B] hover:bg-[#E0FF4F] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(224,255,79,0.2)] group relative" href="#">

<i className="w-5 h-5 group-hover:rotate-12 transition-transform" data-lucide="music-2"></i>
<span className="absolute -top-3 right-1 w-2.5 h-2.5 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-[rise_0.8s_ease-in_infinite] pointer-events-none"></span>
</a>
</div>

<button aria-label="Back to top" className="w-14 h-14 rounded-full bg-[#E0FF4F]/10 border-2 border-[#E0FF4F] flex items-center justify-center group hover:bg-[#E0FF4F] transition-all duration-300 shadow-[0_0_20px_rgba(224,255,79,0.1)] hover:shadow-[0_0_30px_rgba(224,255,79,0.4)] ml-4 animate-[float_4s_ease-in-out_infinite]" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
<i className="w-6 h-6 text-[#E0FF4F] group-hover:text-[#00272B] group-hover:-translate-y-1 transition-transform" data-lucide="arrow-up"></i>
</button>
</div>
</div>
</div>
</footer>


    </>
  );
}
