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



        // Intersection Observer for scroll-triggered animations
        document.addEventListener('DOMContentLoaded', function() {
            const animatedElements = document.querySelectorAll('.animate-on-scroll');
            
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const element = entry.target;
                        const animationType = element.dataset.animation || 'up';
                        const delay = element.dataset.delay || 0;
                        
                        setTimeout(() => {
                            switch(animationType) {
                                case 'up':
                                    element.classList.add('animate-up');
                                    break;
                                case 'left':
                                    element.classList.add('animate-left');
                                    break;
                                case 'right':
                                    element.classList.add('animate-right');
                                    break;
                                case 'fade':
                                    element.classList.add('animate-fade');
                                    break;
                                default:
                                    element.classList.add('animate-up');
                            }
                        }, parseInt(delay));
                        
                        // Unobserve after animation triggers
                        observer.unobserve(element);
                    }
                });
            }, observerOptions);
            
            animatedElements.forEach(element => {
                observer.observe(element);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="border-gradient xl:rounded-[3.5rem] xl:p-12 overflow-hidden flex flex-col xl:max-w-[96rem] xl:shadow-2xl bg-neutral-900 w-full rounded-none pt-6 pr-6 pb-6 pl-6 relative shadow-none justify-between"><img alt="Container background" className="w-1/2 h-[960px] object-cover rounded-[40px] absolute top-4 right-4 bottom-0" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b243e82-f723-488d-8219-cb8900a58d96_1600w.webp"/>

<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neutral-800/20 via-transparent to-blue-950/10 pointer-events-none"></div>

<div className="absolute inset-0 pointer-events-none overflow-hidden xl:rounded-[3.5rem]">
<div className="absolute top-0 bottom-0 left-[10%] w-px bg-gradient-to-b from-transparent via-neutral-700/30 to-transparent"></div>
<div className="absolute top-0 bottom-0 left-[25%] w-px bg-gradient-to-b from-transparent via-neutral-700/20 to-transparent"></div>
<div className="absolute top-0 bottom-0 left-[50%] w-px bg-gradient-to-b from-transparent via-neutral-700/30 to-transparent"></div>
<div className="absolute top-0 bottom-0 left-[75%] w-px bg-gradient-to-b from-transparent via-neutral-700/20 to-transparent"></div>
<div className="absolute top-0 bottom-0 left-[90%] w-px bg-gradient-to-b from-transparent via-neutral-700/30 to-transparent"></div>
</div>

<nav className="z-20 flex flex-wrap gap-6 md:mb-0 mix-blend-plus-lighter mb-12 relative gap-x-6 gap-y-6 items-center justify-between">

<div className="animate-on-scroll flex items-center gap-2 group cursor-pointer" data-animation="left" data-delay="0">
<div className="flex gap-1">
<div className="w-3 h-8 bg-white rounded-full"></div>
<div className="w-3 h-8 bg-white rounded-full group-hover:h-5 transition-all duration-300"></div>
<div className="w-3 h-8 bg-white rounded-full"></div>
</div>
<span className="text-sm font-medium tracking-tight ml-2">TALENT HUB</span>
</div>

<div className="hidden md:flex items-center gap-12 text-xs font-medium tracking-widest uppercase text-neutral-400">
<a className="animate-on-scroll hover:text-white transition-colors flex items-center gap-2" data-animation="up" data-delay="100" href="#">
<div className="w-2 h-2 rounded-full bg-white"></div>
                    Find a Job
                </a>
<a className="animate-on-scroll hover:text-white transition-colors flex items-center gap-2" data-animation="up" data-delay="150" href="#">
<div className="w-2 h-2 rounded-full border border-neutral-600"></div>
                    Post a Job
                </a>
<a className="animate-on-scroll hover:text-white transition-colors mix-blend-hard-light" data-animation="up" data-delay="200" href="#">Companies</a>
<a className="animate-on-scroll hover:text-white transition-colors" data-animation="up" data-delay="250" href="#">Resources</a>
</div>

<div className="flex items-center gap-4">
<button className="animate-on-scroll hidden uppercase hover:bg-neutral-800 transition-colors md:flex text-xs font-semibold tracking-widest bg-gradient-to-br from-white/10 to-white/0 rounded-full px-6 py-3" data-animation="right" data-delay="100" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '9999px'}}>
                    Log In
                </button>
<button className="md:hidden p-3 rounded-full bg-white text-neutral-950">
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--streamline" data-icon="streamline:interface-setting-menu-1-button-parallel-horizontal-lines-menu-navigation-three-hamburger" height="1em" role="img" viewbox="0 0 14 14" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 2H.5m13 5H.5m13 5H.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</div>
</nav>

<div className="z-10 flex-grow flex flex-col md:py-0 pt-10 pb-10 relative justify-center">

<div className="animate-on-scroll flex md:mb-4 md:mt-12 mt-4 mb-6 gap-x-4 gap-y-4 items-center" data-animation="up" data-delay="300">
<div className="flex -space-x-2">
<img alt="user" className="w-8 h-8 rounded-full border-2 border-neutral-900" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&amp;h=40&amp;fit=crop&amp;crop=face"/>
<img alt="user" className="w-8 h-8 rounded-full border-2 border-neutral-900" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&amp;h=40&amp;fit=crop&amp;crop=face"/>
<img alt="user" className="w-8 h-8 rounded-full border-2 border-neutral-900" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&amp;h=40&amp;fit=crop&amp;crop=face"/>
</div>
<p className="text-xs md:text-sm uppercase tracking-widest text-neutral-500 max-w-md font-medium">
                    75k+ talents found their dream job
                </p>
</div>

<div className="group relative">

<div className="animate-on-scroll hidden -top-4 hover:scale-105 transition-transform cursor-default lg:flex bg-neutral-900 z-20 border-neutral-700 border rounded-full px-5 py-2 absolute top-[0%] left-[38%] shadow-sm gap-x-2 gap-y-2 items-center" data-animation="fade" data-delay="800">
<span className="text-[0.65rem] font-bold uppercase tracking-widest text-neutral-300">Remote Friendly</span>
</div>

<div className="animate-on-scroll hidden hover:scale-105 transition-transform cursor-default lg:flex bg-neutral-900 z-20 border-neutral-700 border rounded-full px-5 py-2 absolute top-[45%] right-[0%] shadow-sm gap-x-2 gap-y-2 items-center" data-animation="right" data-delay="900">
<span className="text-[0.65rem] font-bold uppercase tracking-widest text-neutral-300">Top Companies</span>
</div>

<div className="animate-on-scroll hidden lg:flex z-20 gap-2 hover:scale-105 transition-transform cursor-default text-neutral-950 bg-emerald-400 rounded-full px-5 py-2 absolute bottom-[-12%] left-[2%] shadow-lg gap-x-2 gap-y-2 items-center" data-animation="left" data-delay="1000">
<span className="text-[0.65rem] font-bold uppercase tracking-widest">New Offers Daily</span>
</div>
<h1 className="text-[16vw] md:text-[14vw] lg:text-[12rem] leading-[0.8] uppercase select-none md:text-left font-medium text-white tracking-tighter font-oswald text-center mix-blend-normal max-w-4xl">
<span className="animate-on-scroll inline-block" data-animation="up" data-delay="400">Your</span>
<span className="animate-on-scroll inline-block pl-0 md:pl-16" data-animation="up" data-delay="500">Creative</span>
<span className="animate-on-scroll block text-neutral-600" data-animation="up" data-delay="600">Journey</span>
</h1>
</div>
</div>

<div className="z-20 flex flex-col lg:flex-row gap-12 mt-8 relative gap-x-12 gap-y-12 items-end justify-between">

<div className="flex flex-col gap-6 max-w-lg">
<div className="animate-on-scroll flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-neutral-500" data-animation="up" data-delay="700">
<span>Explore Opportunities</span>
<span className="w-4 h-[1px] bg-neutral-600"></span>
<span>Build Your Career</span>
</div>
<p className="animate-on-scroll text-sm md:text-base text-neutral-400 leading-relaxed font-normal text-pretty uppercase tracking-wide" data-animation="up" data-delay="800">
                    The ultimate platform to discover and apply to the most exciting creative roles, with complete transparency.
                </p>

<div className="flex flex-wrap gap-3 items-center">
<button className="animate-on-scroll group flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] focus:outline-none text-sm font-medium text-white tracking-widest font-space rounded-full pt-5 pr-12 pb-5 pl-12 relative items-center justify-center" data-animation="up" data-delay="900">

<div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#3b82f6_360deg)]" style={{animation: 'beam-spin 3s linear infinite'}}></div>
<div className="absolute inset-[1px] rounded-full bg-neutral-950"></div>
</div>

<div className="-z-10 overflow-hidden bg-neutral-950 rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">
<div className="absolute inset-0 bg-gradient-to-b from-neutral-800/60 to-transparent"></div>
<div className="opacity-30 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '12px 12px', animation: 'dots-move 8s linear infinite'}}></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-blue-500/10 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-blue-500/30"></div>
</div>
<span className="relative z-10 text-white/90 transition-colors group-hover:text-white">Start Searching</span>
<span className="iconify relative z-10 ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" data-icon="streamline:arrow-right-1"></span>
</button>
<button className="animate-on-scroll px-5 py-2 rounded-full border border-neutral-700 text-[0.7rem] font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors" data-animation="up" data-delay="1000">
                        Post a Job
                    </button>
</div>
</div>

<div className="lg:w-auto flex flex-col md:flex-row gap-4 w-full gap-x-4 gap-y-4">

<div className="animate-on-scroll group flex-1 lg:flex-none lg:w-48 hover:bg-white hover:text-neutral-950 hover:border-white transition-all duration-300 cursor-pointer overflow-hidden bg-neutral-800/50 rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg" data-animation="up" data-delay="1100" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '16px'}}>
<div className="relative h-28 mb-4 overflow-hidden" style={{maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'}}>
<div className="marquee-content">
<div className="flex flex-col gap-3 pb-3">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify w-5 h-5 text-blue-400 iconify--solar" data-icon="solar:case-round-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none">
<path clip-rule="evenodd" d="M17.192 6H6.808c-1.688 0-2.531 0-3.175.33A3 3 0 0 0 2.33 7.633C2 8.277 2 9.12 2 10.808c0 .429 0 .643.073.824a1 1 0 0 0 .3.404c.153.122.358.183.77.307L8.5 13.95v1.213c0 .765.46 1.471 1.187 1.767l.56.227a4.65 4.65 0 0 0 3.506 0l.56-.227a1.91 1.91 0 0 0 1.187-1.767V13.95l5.358-1.607c.41-.124.616-.185.768-.307a1 1 0 0 0 .3-.404c.074-.18.074-.395.074-.824c0-1.688 0-2.531-.33-3.175a3 3 0 0 0-1.303-1.303C19.723 6 18.88 6 17.192 6M13.6 13h-3.2c-.22 0-.4.182-.4.406v1.757c0 .166.1.315.251.377l.56.228c.764.31 1.614.31 2.377 0l.56-.228a.41.41 0 0 0 .252-.377v-1.757a.403.403 0 0 0-.4-.406" fill="currentColor" fill-rule="evenodd"></path>
<path d="m20.958 12.313l-.034.01L15.5 13.95v1.213c0 .765-.46 1.471-1.187 1.767l-.56.227a4.65 4.65 0 0 1-3.506 0l-.56-.227A1.91 1.91 0 0 1 8.5 15.163V13.95L3 12.3c0 3.675.035 7.388 1.318 8.528C5.636 22 7.758 22 12 22s6.364 0 7.682-1.172c1.283-1.14 1.317-4.853 1.318-8.528z" fill="currentColor" opacity=".5"></path>
<path d="M9.17 4a3.001 3.001 0 0 1 5.66 0" opacity=".5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</g>
</svg>
<span className="text-[0.6rem] uppercase tracking-wider opacity-70">Design</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--solar w-[20px] h-[20px]" data-icon="solar:code-square-bold-duotone" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(52, 211, 153)'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" fill="currentColor" opacity=".5"></path>
<path className="" d="M13.488 6.446a.75.75 0 0 1 .53.918l-2.588 9.66a.75.75 0 0 1-1.449-.389l2.589-9.659a.75.75 0 0 1 .918-.53M14.97 8.47a.75.75 0 0 1 1.06 0l.209.208c.635.635 1.165 1.165 1.529 1.642c.384.504.654 1.036.654 1.68s-.27 1.176-.654 1.68c-.364.477-.894 1.007-1.53 1.642l-.208.208a.75.75 0 1 1-1.06-1.06l.171-.172c.682-.682 1.139-1.14 1.434-1.528c.283-.37.347-.586.347-.77s-.064-.4-.347-.77c-.295-.387-.752-.846-1.434-1.528l-.171-.172a.75.75 0 0 1 0-1.06m-7 0a.75.75 0 0 1 1.06 1.06l-.171.172c-.682.682-1.138 1.14-1.434 1.528c-.283.37-.346.586-.346.77s.063.4.346.77c.296.387.752.846 1.434 1.528l.172.172a.75.75 0 1 1-1.061 1.06l-.208-.208c-.636-.635-1.166-1.165-1.53-1.642c-.384-.504-.653-1.036-.653-1.68s.27-1.176.653-1.68c.364-.477.894-1.007 1.53-1.642z" fill="currentColor"></path>
</svg>
<span className="text-[0.6rem] uppercase tracking-wider opacity-70">Engineering</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify w-5 h-5 text-purple-400 iconify--solar" data-icon="solar:palette-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M7.75 19a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75" fill="currentColor"></path>
<path className="" d="M10 18V6c0-1.4 0-2.1-.272-2.635a2.5 2.5 0 0 0-1.093-1.093C8.1 2 7.4 2 6 2s-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C2 3.9 2 4.6 2 6v12c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C3.9 22 4.6 22 6 22s2.1 0 2.635-.273a2.5 2.5 0 0 0 1.093-1.092C10 20.1 10 19.4 10 18" fill="currentColor" opacity=".4"></path>
<path className="" d="M10 8.243V18c0 .919 0 1.536-.077 2.003l3.299-3.299l5.838-6.09c.973-1.003 1.46-1.505 1.636-2.08a2.5 2.5 0 0 0-.011-1.503C20.5 6.458 20 5.958 19 4.959c-.9-.886-1.352-1.33-1.88-1.514a2.5 2.5 0 0 0-1.353-.085c-.547.118-1.049.502-2.053 1.27L13 5.243zm-1.997 13.68H8v.003z" fill="currentColor" opacity=".7"></path>
<path d="M15.814 14H17.9c1.4 0 2.1 0 2.635.273a2.5 2.5 0 0 1 1.093 1.092C21.9 15.9 21.9 16.6 21.9 18s0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C20 22 19.3 22 17.9 22H6c.917 0 1.534 0 2-.077v.003l.003-.003c.245-.04.448-.102.632-.195a2.5 2.5 0 0 0 1.093-1.093c.093-.184.155-.387.195-.632l3.299-3.299z" fill="currentColor">
</path>
</svg>
<span className="text-[0.6rem] uppercase tracking-wider opacity-70">Creative</span>
</div>
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<svg aria-hidden="true" className="iconify text-purple-400 iconify--solar w-[20px] h-[20px]" data-icon="solar:palette-bold-duotone" data-icon-replaced="true" data-icon-set="solar" data-solar="stars-line-bold-duotone" height="20" role="img" strokeWidth="2" style={{color: 'rgb(192, 132, 252)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12.55 3.44c-.432-.931-.648-1.396-1.029-1.435s-.674.373-1.262 1.198l-.152.214c-.166.234-.25.351-.37.422c-.12.07-.263.087-.55.119l-.26.03c-1.01.112-1.514.168-1.664.52c-.15.351.154.765.761 1.592l.158.214c.172.235.258.352.29.49s.004.28-.05.564l-.05.259c-.192 1-.288 1.5 0 1.757c.289.256.77.099 1.733-.215l.249-.081c.274-.09.41-.134.55-.12s.266.086.519.23l.23.13c.89.506 1.335.759 1.663.566s.322-.704.31-1.725l-.004-.264c-.003-.29-.005-.436.05-.564c.055-.129.16-.227.371-.422l.192-.178c.742-.688 1.113-1.032 1.027-1.408c-.085-.375-.57-.534-1.54-.851L13.47 4.4c-.276-.09-.414-.135-.52-.23c-.105-.093-.166-.225-.289-.49z" fill="#c084fc"></path><path clip-rule="evenodd" d="M11.205 11.279a.75.75 0 0 1 .515.927c-.366 1.283-.454 3.144-.396 5.008a41 41 0 0 0 .417 4.672a.75.75 0 0 1-1.483.228c-.17-1.11-.374-2.94-.433-4.853c-.059-1.894.02-3.95.453-5.467a.75.75 0 0 1 .927-.515m11.442-2.157a.75.75 0 0 1-.27 1.026C16.667 13.48 15.25 18.859 15.25 22a.75.75 0 0 1-1.5 0c0-3.525 1.583-9.48 7.872-13.148a.75.75 0 0 1 1.025.27" fill="#c084fc" fill-rule="evenodd" opacity=".5"></path><path d="M5.133 13.765c-.023-.108.149-.207.23-.133c.238.213.56.457.86.537s.699.03 1.011-.036c.108-.023.207.149.133.23c-.213.238-.456.56-.537.86c-.08.299-.03.698.036 1.011c.023.108-.149.207-.23.133c-.238-.213-.56-.456-.859-.537c-.3-.08-.7-.03-1.012.036c-.108.023-.207-.149-.133-.23c.213-.238.457-.56.537-.859c.08-.3.03-.7-.036-1.012" fill="#c084fc"></path></svg>
<span className="text-[0.6rem] uppercase tracking-wider opacity-70">Marketing</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify w-5 h-5 text-pink-400 iconify--solar" data-icon="solar:camera-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21" fill="currentColor" opacity=".5"></path>
<path d="M17.556 9.272a.826.826 0 0 0-.833.819c0 .452.373.818.833.818h1.111c.46 0 .834-.367.834-.818a.826.826 0 0 0-.834-.819z" fill="currentColor">
</path>
<path clip-rule="evenodd" d="M12 9.272c-2.3 0-4.166 1.832-4.166 4.091s1.865 4.091 4.167 4.091c2.3 0 4.166-1.831 4.166-4.09s-1.865-4.092-4.166-4.092m0 1.637c-1.38 0-2.5 1.099-2.5 2.454s1.12 2.455 2.5 2.455c1.381 0 2.5-1.099 2.5-2.455c0-1.355-1.119-2.454-2.5-2.454" fill="currentColor" fill-rule="evenodd"></path>
</svg>
<span className="text-[0.6rem] uppercase tracking-wider opacity-70">Photography</span>
</div>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify w-5 h-5 text-blue-400 iconify--solar" data-icon="solar:case-round-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none">
<path clip-rule="evenodd" d="M17.192 6H6.808c-1.688 0-2.531 0-3.175.33A3 3 0 0 0 2.33 7.633C2 8.277 2 9.12 2 10.808c0 .429 0 .643.073.824a1 1 0 0 0 .3.404c.153.122.358.183.77.307L8.5 13.95v1.213c0 .765.46 1.471 1.187 1.767l.56.227a4.65 4.65 0 0 0 3.506 0l.56-.227a1.91 1.91 0 0 0 1.187-1.767V13.95l5.358-1.607c.41-.124.616-.185.768-.307a1 1 0 0 0 .3-.404c.074-.18.074-.395.074-.824c0-1.688 0-2.531-.33-3.175a3 3 0 0 0-1.303-1.303C19.723 6 18.88 6 17.192 6M13.6 13h-3.2c-.22 0-.4.182-.4.406v1.757c0 .166.1.315.251.377l.56.228c.764.31 1.614.31 2.377 0l.56-.228a.41.41 0 0 0 .252-.377v-1.757a.403.403 0 0 0-.4-.406" fill="currentColor" fill-rule="evenodd"></path>
<path d="m20.958 12.313l-.034.01L15.5 13.95v1.213c0 .765-.46 1.471-1.187 1.767l-.56.227a4.65 4.65 0 0 1-3.506 0l-.56-.227A1.91 1.91 0 0 1 8.5 15.163V13.95L3 12.3c0 3.675.035 7.388 1.318 8.528C5.636 22 7.758 22 12 22s6.364 0 7.682-1.172c1.283-1.14 1.317-4.853 1.318-8.528z" fill="currentColor" opacity=".5"></path>
<path d="M9.17 4a3.001 3.001 0 0 1 5.66 0" opacity=".5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</g>
</svg>
<span className="text-[0.6rem] uppercase tracking-wider opacity-70">Design</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify w-5 h-5 text-emerald-400 iconify--solar" data-icon="solar:code-square-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" fill="currentColor" opacity=".5"></path>
<path d="M13.488 6.446a.75.75 0 0 1 .53.918l-2.588 9.66a.75.75 0 0 1-1.449-.389l2.589-9.659a.75.75 0 0 1 .918-.53M14.97 8.47a.75.75 0 0 1 1.06 0l.209.208c.635.635 1.165 1.165 1.529 1.642c.384.504.654 1.036.654 1.68s-.27 1.176-.654 1.68c-.364.477-.894 1.007-1.53 1.642l-.208.208a.75.75 0 1 1-1.06-1.06l.171-.172c.682-.682 1.139-1.14 1.434-1.528c.283-.37.347-.586.347-.77s-.064-.4-.347-.77c-.295-.387-.752-.846-1.434-1.528l-.171-.172a.75.75 0 0 1 0-1.06m-7 0a.75.75 0 0 1 1.06 1.06l-.171.172c-.682.682-1.138 1.14-1.434 1.528c-.283.37-.346.586-.346.77s.063.4.346.77c.296.387.752.846 1.434 1.528l.172.172a.75.75 0 1 1-1.061 1.06l-.208-.208c-.636-.635-1.166-1.165-1.53-1.642c-.384-.504-.653-1.036-.653-1.68s.27-1.176.653-1.68c.364-.477.894-1.007 1.53-1.642z" fill="currentColor">
</path>
</svg>
<span className="text-[0.6rem] uppercase tracking-wider opacity-70">Engineering</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify w-5 h-5 text-purple-400 iconify--solar" data-icon="solar:palette-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M7.75 19a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75" fill="currentColor"></path>
<path d="M10 18V6c0-1.4 0-2.1-.272-2.635a2.5 2.5 0 0 0-1.093-1.093C8.1 2 7.4 2 6 2s-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C2 3.9 2 4.6 2 6v12c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C3.9 22 4.6 22 6 22s2.1 0 2.635-.273a2.5 2.5 0 0 0 1.093-1.092C10 20.1 10 19.4 10 18" fill="currentColor" opacity=".4"></path>
<path d="M10 8.243V18c0 .919 0 1.536-.077 2.003l3.299-3.299l5.838-6.09c.973-1.003 1.46-1.505 1.636-2.08a2.5 2.5 0 0 0-.011-1.503C20.5 6.458 20 5.958 19 4.959c-.9-.886-1.352-1.33-1.88-1.514a2.5 2.5 0 0 0-1.353-.085c-.547.118-1.049.502-2.053 1.27L13 5.243zm-1.997 13.68H8v.003z" fill="currentColor" opacity=".7"></path>
<path d="M15.814 14H17.9c1.4 0 2.1 0 2.635.273a2.5 2.5 0 0 1 1.093 1.092C21.9 15.9 21.9 16.6 21.9 18s0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C20 22 19.3 22 17.9 22H6c.917 0 1.534 0 2-.077v.003l.003-.003c.245-.04.448-.102.632-.195a2.5 2.5 0 0 0 1.093-1.093c.093-.184.155-.387.195-.632l3.299-3.299z" fill="currentColor">
</path>
</svg>
<span className="text-[0.6rem] uppercase tracking-wider opacity-70">Creative</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify w-5 h-5 text-orange-400" data-icon="solar:megaphone-bold-duotone"></span>
<span className="text-[0.6rem] uppercase tracking-wider opacity-70">Marketing</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify w-5 h-5 text-pink-400 iconify--solar" data-icon="solar:camera-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21" fill="currentColor" opacity=".5"></path>
<path d="M17.556 9.272a.826.826 0 0 0-.833.819c0 .452.373.818.833.818h1.111c.46 0 .834-.367.834-.818a.826.826 0 0 0-.834-.819z" fill="currentColor">
</path>
<path clip-rule="evenodd" d="M12 9.272c-2.3 0-4.166 1.832-4.166 4.091s1.865 4.091 4.167 4.091c2.3 0 4.166-1.831 4.166-4.09s-1.865-4.092-4.166-4.092m0 1.637c-1.38 0-2.5 1.099-2.5 2.454s1.12 2.455 2.5 2.455c1.381 0 2.5-1.099 2.5-2.455c0-1.355-1.119-2.454-2.5-2.454" fill="currentColor" fill-rule="evenodd"></path>
</svg>
<span className="text-[0.6rem] uppercase tracking-wider opacity-70">Photography</span>
</div>
</div>
</div>
</div>
<h3 className="text-xs font-semibold uppercase tracking-widest mb-1">10k+ Jobs</h3>
<p className="text-[0.65rem] leading-normal opacity-70 uppercase">Creative roles worldwide.</p>
</div>

<div className="animate-on-scroll group flex-1 lg:flex-none lg:w-48 hover:bg-white hover:text-neutral-950 hover:border-white transition-all duration-300 cursor-pointer overflow-hidden bg-neutral-800/50 rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg" data-animation="up" data-delay="1200" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '16px'}}>
<div className="relative h-28 mb-4 overflow-hidden" style={{maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'}}>
<div className="marquee-content" style={{animationDuration: '25s'}}>
<div className="flex flex-col gap-3 pb-3">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[0.5rem] font-bold">G</div>
<span className="text-[0.6rem] uppercase tracking-wider opacity-70">Google</span>
</div>
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[0.5rem] font-bold">M</div>
<span className="text-[0.6rem] uppercase tracking-wider opacity-70">Meta</span>
</div>
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[0.5rem] font-bold">A</div>
<span className="text-[0.6rem] uppercase tracking-wider opacity-70">Apple</span>
</div>
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[0.5rem] font-bold">S</div>
<span className="text-[0.6rem] uppercase tracking-wider opacity-70">Stripe</span>
</div>
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[0.5rem] font-bold">N</div>
<span className="text-[0.6rem] uppercase tracking-wider opacity-70">Netflix</span>
</div>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[0.5rem] font-bold">G</div>
<span className="text-[0.6rem] uppercase tracking-wider opacity-70">Google</span>
</div>
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[0.5rem] font-bold">M</div>
<span className="text-[0.6rem] uppercase tracking-wider opacity-70">Meta</span>
</div>
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[0.5rem] font-bold">A</div>
<span className="text-[0.6rem] uppercase tracking-wider opacity-70">Apple</span>
</div>
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[0.5rem] font-bold">S</div>
<span className="text-[0.6rem] uppercase tracking-wider opacity-70">Stripe</span>
</div>
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[0.5rem] font-bold">N</div>
<span className="text-[0.6rem] uppercase tracking-wider opacity-70">Netflix</span>
</div>
</div>
</div>
</div>
<h3 className="text-xs font-semibold uppercase tracking-widest mb-1">Top Brands</h3>
<p className="text-[0.65rem] leading-normal opacity-70 uppercase">500+ Leading companies.</p>
</div>

<div className="animate-on-scroll group flex-1 lg:flex-none lg:w-48 hover:bg-white hover:text-neutral-950 hover:border-white transition-all duration-300 cursor-pointer overflow-hidden bg-neutral-800/50 rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg" data-animation="up" data-delay="1300" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '16px'}}>
<div className="relative h-28 mb-4 overflow-hidden" style={{maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'}}>
<div className="marquee-content" style={{animationDuration: '18s'}}>
<div className="flex flex-col gap-3 pb-3">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify w-5 h-5 text-emerald-400 iconify--solar" data-icon="solar:check-circle-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path></svg>
<span className="text-[0.6rem] uppercase tracking-wider opacity-70">One Click</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify w-5 h-5 text-blue-400 iconify--solar" data-icon="solar:magic-stick-3-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.845 3.845a2.883 2.883 0 0 0 0 4.077L5.432 9.51c.012-.014.555.503.568.49l4-4c.013-.013-.504-.556-.49-.568L7.922 3.845a2.883 2.883 0 0 0-4.077 0m1.288 11.462a.483.483 0 0 1 .9 0l.157.4a.48.48 0 0 0 .272.273l.398.157a.486.486 0 0 1 0 .903l-.398.158a.48.48 0 0 0-.272.273l-.157.4a.483.483 0 0 1-.9 0l-.157-.4a.48.48 0 0 0-.272-.273l-.398-.158a.486.486 0 0 1 0-.903l.398-.157a.48.48 0 0 0 .272-.274z" fill="currentColor" opacity=".5"></path><path d="M19.967 9.13a.483.483 0 0 1 .9 0l.156.399c.05.125.148.224.273.273l.398.158a.486.486 0 0 1 0 .902l-.398.158a.5.5 0 0 0-.273.273l-.156.4a.483.483 0 0 1-.9 0l-.157-.4a.5.5 0 0 0-.272-.273l-.398-.158a.486.486 0 0 1 0-.902l.398-.158a.5.5 0 0 0 .272-.273z" fill="currentColor" opacity=".2"></path><path d="M16.1 2.307a.483.483 0 0 1 .9 0l.43 1.095a.48.48 0 0 0 .272.274l1.091.432a.486.486 0 0 1 0 .903l-1.09.432a.5.5 0 0 0-.273.273L17 6.81a.483.483 0 0 1-.9 0l-.43-1.095a.5.5 0 0 0-.273-.273l-1.09-.432a.486.486 0 0 1 0-.903l1.09-.432a.5.5 0 0 0 .273-.274z" fill="currentColor" opacity=".7"></path><path d="M10.568 6.49c-.012.014-.555-.503-.568-.49l-4 4c-.013.013.504.556.49.568l9.588 9.587a2.883 2.883 0 1 0 4.078-4.077z" fill="currentColor"></path></svg>
<span className="text-[0.6rem] uppercase tracking-wider opacity-70">Auto Fill</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify w-5 h-5 text-yellow-400 iconify--solar" data-icon="solar:star-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg>
<span className="text-[0.6rem] uppercase tracking-wider opacity-70">Save Jobs</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify w-5 h-5 text-purple-400 iconify--solar" data-icon="solar:bell-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.8 25.8 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.4 4.4 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7" fill="currentColor" opacity=".5"></path><path d="M7.243 18.545a5.002 5.002 0 0 0 9.513 0c-3.145.59-6.367.59-9.513 0" fill="currentColor"></path></svg>
<span className="text-[0.6rem] uppercase tracking-wider opacity-70">Alerts</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify w-5 h-5 text-cyan-400 iconify--solar" data-icon="solar:clock-circle-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" fill="currentColor" opacity=".5"></path><path clip-rule="evenodd" d="M12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75" fill="currentColor" fill-rule="evenodd"></path></svg>
<span className="text-[0.6rem] uppercase tracking-wider opacity-70">Track</span>
</div>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify w-5 h-5 text-emerald-400 iconify--solar" data-icon="solar:check-circle-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path></svg>
<span className="text-[0.6rem] uppercase tracking-wider opacity-70">One Click</span>
</div>
<div className="flex items-center gap-2">
<span className="stick-3-bold-duotone"></span>
<span className="text-[0.6rem] uppercase tracking-wider opacity-70">Auto Fill</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify w-5 h-5 text-yellow-400 iconify--solar" data-icon="solar:star-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg>
<span className="text-[0.6rem] uppercase tracking-wider opacity-70">Save Jobs</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify w-5 h-5 text-purple-400 iconify--solar" data-icon="solar:bell-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.8 25.8 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.4 4.4 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7" fill="currentColor" opacity=".5"></path><path d="M7.243 18.545a5.002 5.002 0 0 0 9.513 0c-3.145.59-6.367.59-9.513 0" fill="currentColor"></path></svg>
<span className="text-[0.6rem] uppercase tracking-wider opacity-70">Alerts</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify w-5 h-5 text-cyan-400 iconify--solar" data-icon="solar:clock-circle-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" fill="currentColor" opacity=".5"></path><path clip-rule="evenodd" d="M12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75" fill="currentColor" fill-rule="evenodd"></path></svg>
<span className="text-[0.6rem] uppercase tracking-wider opacity-70">Track</span>
</div>
</div>
</div>
</div>
<h3 className="text-xs font-semibold uppercase tracking-widest mb-1">Fast Apply</h3>
<p className="text-[0.65rem] leading-normal opacity-70 uppercase">One-click applications.</p>
</div>
</div>
</div><div className="flex flex-col md:px-0 z-20 w-full max-w-[90rem] border-white/5 border-t mt-32 mr-auto ml-auto pt-12 pr-4 pb-12 pl-4 relative gap-x-16 gap-y-16">

<div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
<h2 className="animate-on-scroll md:text-5xl lg:text-6xl uppercase leading-[0.9] text-3xl font-medium text-white tracking-tight font-bricolage" data-animation="up" data-delay="0">
            Intelligent <span className="text-neutral-600">Context</span>  Matching Engine
        </h2>
<p className="animate-on-scroll text-sm md:text-base text-neutral-400 font-normal uppercase tracking-wide max-w-xl" data-animation="up" data-delay="100">
            Our cutting-edge tech groups opportunities by relevance using semantic analysis to match you with top companies.
        </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full gap-x-6 gap-y-6">

<div className="animate-on-scroll group relative bg-neutral-900 border border-neutral-800 rounded-[2.5rem] p-8 md:p-12 overflow-hidden flex flex-col h-[600px] hover:border-neutral-700 transition-all duration-500" data-animation="left" data-delay="200">

<style className="">
        @keyframes draw-noodle {
            0% { stroke-dashoffset: 100; opacity: 0; }
            10% { opacity: 1; }
            100% { stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes flow-noodle {
            0% { stroke-dashoffset: 24; }
            100% { stroke-dashoffset: 0; }
        }
    </style>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

<div className="relative z-10 flex flex-col gap-4 mb-12">
<div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-emerald-400 mb-2 border border-neutral-700 shadow-[0_0_15px_-3px_rgba(52,211,153,0.3)]">
<svg aria-hidden="true" data-icon="solar:magic-stick-3-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.845 3.845a2.883 2.883 0 0 0 0 4.077L5.432 9.51c.012-.014.555.503.568.49l4-4c.013-.013-.504-.556-.49-.568L7.922 3.845a2.883 2.883 0 0 0-4.077 0m1.288 11.462a.483.483 0 0 1 .9 0l.157.4a.48.48 0 0 0 .272.273l.398.157a.486.486 0 0 1 0 .903l-.398.158a.48.48 0 0 0-.272.273l-.157.4a.483.483 0 0 1-.9 0l-.157-.4a.48.48 0 0 0-.272-.273l-.398-.158a.486.486 0 0 1 0-.903l.398-.157a.48.48 0 0 0 .272-.274z" fill="currentColor" opacity=".5"></path><path d="M19.967 9.13a.483.483 0 0 1 .9 0l.156.399c.05.125.148.224.273.273l.398.158a.486.486 0 0 1 0 .902l-.398.158a.5.5 0 0 0-.273.273l-.156.4a.483.483 0 0 1-.9 0l-.157-.4a.5.5 0 0 0-.272-.273l-.398-.158a.486.486 0 0 1 0-.902l.398-.158a.5.5 0 0 0 .272-.273z" fill="currentColor" opacity=".2"></path><path d="M16.1 2.307a.483.483 0 0 1 .9 0l.43 1.095a.48.48 0 0 0 .272.274l1.091.432a.486.486 0 0 1 0 .903l-1.09.432a.5.5 0 0 0-.273.273L17 6.81a.483.483 0 0 1-.9 0l-.43-1.095a.5.5 0 0 0-.273-.273l-1.09-.432a.486.486 0 0 1 0-.903l1.09-.432a.5.5 0 0 0 .273-.274z" fill="currentColor" opacity=".7"></path><path d="M10.568 6.49c-.012.014-.555-.503-.568-.49l-4 4c-.013.013.504.556.49.568l9.588 9.587a2.883 2.883 0 1 0 4.078-4.077z" fill="currentColor"></path></svg>
</div>
<h3 className="uppercase text-2xl font-semibold text-white tracking-tight font-bricolage">Automated Tagging</h3>
<p className="text-neutral-400 text-sm leading-relaxed max-w-xs font-space">We parse job descriptions instantly, extracting skills and context to match your profile.</p>

<div className="flex items-center gap-3 text-[0.6rem] font-bold uppercase tracking-widest text-neutral-500 mt-2">
<span className="bg-neutral-800 px-3 py-1 rounded-full border border-neutral-700">Raw Data</span>
<span className="w-8 h-[1px] bg-neutral-700"></span>
<span className="text-emerald-400">AI Context</span>
<span className="w-8 h-[1px] bg-neutral-700"></span>
<span className="bg-neutral-800 px-3 py-1 rounded-full border border-neutral-700">Smart Tags</span>
</div>
</div>

<div className="flex-1 w-full mt-4 relative perspective-[1000px]">
<div className="transform flex absolute top-0 right-0 bottom-0 left-0 scale-100 rotate-x-12 items-center justify-center">

<svg className="pointer-events-none z-0 w-full h-full absolute top-0 right-0 bottom-0 left-0" preserveaspectratio="xMidYMid slice" style={{overflow: 'visible'}} viewbox="0 0 400 300">
<defs>
</defs>

<path d="M 200 150 L 200 80 Q 200 60 180 60 L 40 60" fill="none" stroke="#262626" strokeWidth="1"></path>
<path className="" d="M 200 150 L 200 80 Q 200 60 180 60 L 40 60" fill="none" stroke="url(#noodleGradient)" stroke-dasharray="6 6" strokeLinecap="round" strokeWidth="1.5" style={{animation: 'flow-noodle 3s linear infinite'}}>
</path>

<path className="" d="M 200 150 L 340 150 Q 360 150 360 130 L 360 80" fill="none" stroke="#262626" strokeWidth="1">
</path>
<path className="" d="M 200 150 L 340 150 Q 360 150 360 130 L 360 80" fill="none" stroke="url(#noodleGradient)" stroke-dasharray="6 6" strokeLinecap="round" strokeWidth="1.5" style={{animation: 'flow-noodle 4s linear infinite reverse'}}></path>

<path d="M 200 150 L 200 220 Q 200 240 180 240 L 60 240" fill="none" stroke="#262626" strokeWidth="1"></path>
<path d="M 200 150 L 200 220 Q 200 240 180 240 L 60 240" fill="none" stroke="url(#noodleGradient)" stroke-dasharray="6 6" strokeLinecap="round" strokeWidth="1.5" style={{animation: 'flow-noodle 3.5s linear infinite'}}>
</path>
</svg>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-emerald-500/20 bg-emerald-500/5 blur-3xl z-0">
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
<div className="flex flex-col items-center gap-2">
<div className="bg-neutral-950 border border-emerald-500/30 p-3 rounded-2xl shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)] relative group cursor-pointer hover:border-emerald-500/60 transition-colors">
<div className="group-hover:opacity-100 transition-opacity bg-emerald-500/20 opacity-0 rounded-2xl absolute top-0 right-0 bottom-0 left-0 blur-xl">
</div>
<svg aria-hidden="true" className="text-emerald-400 relative z-10 w-6 h-6" data-icon="solar:cpu-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M12 3c.385 0 .698.312.698.698v2.79q.764.001 1.395.017V3.698a.698.698 0 0 1 1.395 0v2.79a1 1 0 0 1-.008.108c.936.115 1.585.353 2.078.846s.731 1.142.846 2.078a1 1 0 0 1 .108-.008h2.79a.698.698 0 0 1 0 1.395h-2.807q.017.63.017 1.395h2.79a.698.698 0 0 1 0 1.396h-2.79q-.001.764-.017 1.395h2.807a.698.698 0 0 1 0 1.395h-2.79a1 1 0 0 1-.108-.008c-.115.936-.353 1.585-.846 2.078s-1.142.731-2.078.846q.009.053.008.108v2.79a.698.698 0 0 1-1.395 0v-2.807q-.63.017-1.395.017v2.79a.698.698 0 0 1-1.396 0v-2.79a56 56 0 0 1-1.395-.017v2.807a.698.698 0 0 1-1.395 0v-2.79q0-.056.008-.108c-.936-.115-1.585-.353-2.078-.846s-.731-1.142-.846-2.078a1 1 0 0 1-.108.008h-2.79a.698.698 0 0 1 0-1.395h2.807a56 56 0 0 1-.017-1.395h-2.79a.698.698 0 0 1 0-1.396h2.79q.001-.764.017-1.395H2.698a.698.698 0 0 1 0-1.395h2.79q.056 0 .108.008c.115-.936.353-1.585.846-2.078s1.142-.731 2.078-.846a1 1 0 0 1-.008-.108v-2.79a.698.698 0 0 1 1.395 0v2.807q.63-.017 1.395-.017v-2.79c0-.386.313-.698.698-.698m-.976 5.581c-.619 0-1.152 0-1.578.058c-.458.061-.896.2-1.252.555c-.355.356-.494.794-.555 1.252c-.058.427-.058.96-.058 1.578v1.952c0 .619 0 1.151.058 1.578c.061.458.2.896.555 1.252c.356.355.794.494 1.252.555c.426.058.96.058 1.578.058h1.952c.619 0 1.151 0 1.578-.058c.458-.061.896-.2 1.252-.555c.355-.356.494-.794.555-1.252c.058-.427.058-.96.058-1.578v-1.952c0-.619 0-1.151-.058-1.578c-.061-.458-.2-.896-.555-1.252c-.356-.355-.794-.494-1.252-.555c-.427-.058-.96-.058-1.578-.058z" fill="currentColor" fill-rule="evenodd"></path>
<path d="M9.18 10.18c.054-.052.149-.118.451-.159c.323-.043.761-.044 1.439-.044h1.86c.678 0 1.116.001 1.438.044c.303.041.398.107.45.16c.054.053.12.148.16.45c.044.323.045.761.045 1.439v1.86c0 .678-.001 1.116-.0-.16.45c-.052.054-.147.12-.45.16c-.322.044-.76.045-1.438.045h-1.86c-.678 0-1.116-.001-1.439-.045c-.302-.04-.397-.106-.45-.16c-.053-.052-.119-.147-.16-.45c-.043-.322-.044-.76-.044-1.438v-1.86c0-.678.001-1.116.044-1.438c.041-.303.107-.398.16-.451" fill="currentColor" opacity=".5"></path>
</svg>
</div>
</div>
</div>

<div className="transition-transform duration-700 hover:-translate-y-2 absolute top-[20%] left-[10%]" style={{transform: 'translate(-50%, -250%)'}}>
<div className="flex items-center gap-2 bg-neutral-800/90 backdrop-blur-md border border-neutral-700 pr-4 pl-3 py-2 rounded-full shadow-xl hover:border-blue-500/50 hover:shadow-blue-500/20 transition-all cursor-pointer group">
<svg aria-hidden="true" className="text-blue-400 group-hover:rotate-180 transition-transform duration-700" data-icon="simple-icons:react" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236a2.236 2.236 0 0 1-2.236-2.236a2.236 2.236 0 0 1 2.235-2.236a2.236 2.236 0 0 1 2.236 2.236m2.648-10.69c-1.346 0-3.107.96-4.888 2.622c-1.78-1.653-3.542-2.602-4.887-2.602c-.41 0-.783.093-1.106.278c-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03c-.704 3.113-.39 5.588.988 6.38c.32.187.69.275 1.102.275c1.345 0 3.107-.96 4.888-2.624c1.78 1.654 3.542 2.603 4.887 2.603c.41 0 .783-.09 1.106-.275c1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032c.704-3.11.39-5.587-.988-6.38a2.17 2.17 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127c.666.382.955 1.835.73 3.704c-.054.46-.142.945-.25 1.44a23.5 23.5 0 0 0-3.107-.534A24 24 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28c-.686.72-1.37 1.537-2.02 2.442a23 23 0 0 0-3.113.538a15 15 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707c.19-.09.4-.127.563-.132zm4.882 3.05q.684.704 1.36 1.564c-.44-.02-.89-.034-1.345-.034q-.691-.001-1.36.034c.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093q.61.874 1.183 1.86q.557.961 1.018 1.946c-.308.655-.646 1.31-1.013 1.95c-.38.66-.773 1.288-1.18 1.87a25.6 25.6 0 0 1-4.412.005a27 27 0 0 1-1.183-1.86q-.557-.961-1.018-1.946a25 25 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25 25 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16q-.336.585-.635 1.174c-.265-.656-.49-1.31-.676-1.947c.64-.15 1.315-.283 2.015-.386zm7.26 0q1.044.153 2.006.387c-.18.632-.405 1.282-.66 1.933a26 26 0 0 0-1.345-2.32zm3.063.675q.727.226 1.375.498c1.732.74 2.852 1.708 2.852 2.476c-.005.768-1.125 1.74-2.857 2.475c-.42.18-.88.342-1.355.493a24 24 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23 23 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5c-1.732-.737-2.852-1.706-2.852-2.474s1.12-1.742 2.852-2.476c.42-.18.88-.342 1.356-.494m11.678 4.28c.265.657.49 1.312.676 1.948c-.64.157-1.316.29-2.016.39a26 26 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175q.345.586.705 1.143a22 22 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423c.23 1.868-.054 3.32-.714 3.708c-.147.09-.338.128-.563.128c-1.012 0-2.514-.807-4.11-2.28c.686-.72 1.37-1.536 2.02-2.44c1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532c.66.905 1.345 1.727 2.035 2.446c-1.595 1.483-3.092 2.295-4.11 2.295a1.2 1.2 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703c.054-.46.142-.944.25-1.438zm4.56.64q.661.032 1.345.034q.691.001 1.36-.034c-.44.572-.895 1.095-1.345 1.565q-.684-.706-1.36-1.565" fill="currentColor">
</path>
</svg>
<span className="text-xs font-medium text-white">React Native</span>
</div>
</div>

<div className="transition-transform duration-700 delay-100 hover:-translate-y-2 z-10 absolute top-[27%] right-[10%]" style={{transform: 'translate(50%, -200%)'}}>
<div className="flex items-center gap-2 bg-neutral-800/90 backdrop-blur-md border border-neutral-700 pr-4 pl-3 py-2 rounded-full shadow-xl hover:border-purple-500/50 hover:shadow-purple-500/20 transition-all cursor-pointer">
<svg aria-hidden="true" className="text-purple-400" data-icon="simple-icons:figma" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491M12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539m-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019c1.705 0 3.093-1.376 3.093-3.068v-2.97zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49m-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019z" fill="currentColor">
</path>
</svg>
<span className="text-xs font-medium text-white">Product Design</span>
</div>
</div>

<div className="absolute bottom-[20%] left-[15%] transition-transform duration-700 delay-200 hover:-translate-y-2 z-10" style={{transform: 'translate(-50%, 250%)'}}>
<div className="flex items-center gap-2 bg-neutral-800/90 backdrop-blur-md border border-neutral-700 pr-4 pl-3 py-2 rounded-full shadow-xl hover:border-red-500/50 hover:shadow-red-500/20 transition-all cursor-pointer">
<svg aria-hidden="true" className="text-white" data-icon="simple-icons:google" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133c-1.147 1.147-2.933 2.4-6.053 2.4c-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0C5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36c2.16-2.16 2.84-5.213 2.84-7.667c0-.76-.053-1.467-.173-2.053z" fill="currentColor">
</path>
</svg>
<span className="text-xs font-medium text-white">Senior Lead</span>
</div>
</div>
</div>
</div>
</div>

<div className="animate-on-scroll group relative bg-neutral-900 border border-neutral-800 rounded-[2.5rem] p-8 md:p-12 overflow-hidden flex flex-col h-[600px] hover:border-neutral-700 transition-all duration-500" data-animation="right" data-delay="300">

<div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>

<div className="relative z-10 flex flex-col gap-4 mb-10">
<div className="flex text-blue-400 bg-neutral-800 w-12 h-12 border-neutral-700 border rounded-full mb-2 items-center justify-center">
<svg aria-hidden="true" className="" data-icon="solar:tuning-2-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M9.25 14a3 3 0 1 1 0 6a3 3 0 0 1 0-6m5-10a3 3 0 1 0 0 6a3 3 0 0 0 0-6" fill="currentColor"></path><path className="" d="M17.166 7.709a3 3 0 0 0-.021-1.5h4.605a.75.75 0 0 1 0 1.5zm-5.81-1.5a3 3 0 0 0-.022 1.5H1.75a.75.75 0 0 1 0-1.5zm-5 10H1.75a.75.75 0 0 0 0 1.5h4.584a3 3 0 0 1 .022-1.5m5.81 1.5h9.584a.75.75 0 0 0 0-1.5h-9.605a3 3 0 0 1 .02 1.5" fill="currentColor" opacity=".5"></path></svg>
</div>
<h3 className="uppercase text-2xl font-semibold text-white tracking-tight font-bricolage">Your Rules, Your Feed</h3>
<p className="text-neutral-400 text-sm leading-relaxed max-w-xs font-space">Apply advanced boolean logic to refine your issue lists and create custom views.</p>
</div>

<div className="relative z-10 flex-1 w-full bg-neutral-950 border border-neutral-800 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 font-space overflow-hidden group-hover:border-neutral-700/50 transition-colors">

<div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-2">
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="solar:filter-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M5 3h14L8.816 13.184a2.7 2.7 0 0 0-.778-1.086c-.228-.198-.547-.377-1.183-.736l-2.913-1.64c-.949-.533-1.423-.8-1.682-1.23C2 8.061 2 7.541 2 6.503v-.69c0-1.326 0-1.99.44-2.402C2.878 3 3.585 3 5 3" fill="currentColor" fill-rule="evenodd"></path><path d="M22 6.504v-.69c0-1.326 0-1.99-.44-2.402C21.122 3 20.415 3 19 3L8.815 13.184q.075.193.121.403c.064.285.064.619.064 1.286v2.67c0 .909 0 1.364.252 1.718c.252.355.7.53 1.594.88c1.879.734 2.818 1.101 3.486.683S15 19.452 15 17.542v-2.67c0-.666 0-1 .063-1.285a2.68 2.68 0 0 1 .9-1.49c.227-.197.545-.376 1.182-.735l2.913-1.64c.948-.533 1.423-.8 1.682-1.23c.26-.43.26-.95.26-1.988" fill="currentColor" opacity=".5"></path></svg>
<span className="text-xs font-bold uppercase tracking-wider text-neutral-300">Set Filter Rules</span>
</div>
<span className="bg-blue-900/20 text-blue-300 border border-blue-800/50 text-[0.6rem] font-bold uppercase tracking-wider px-2 py-1 rounded">4 Active</span>
</div>

<div className="flex items-center gap-3">
<span className="text-[0.65rem] font-bold uppercase tracking-wider text-neutral-500 w-10 text-right">Where</span>
<div className="flex-1 bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2.5 text-xs text-neutral-300 flex justify-between items-center group/input hover:border-neutral-600 transition-colors cursor-pointer">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="" data-icon="solar:dollar-minimalistic-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M12.75 6a.75.75 0 0 0-1.5 0v.317c-1.63.292-3 1.517-3 3.183c0 1.917 1.813 3.25 3.75 3.25c1.377 0 2.25.906 2.25 1.75s-.873 1.75-2.25 1.75c-1.376 0-2.25-.906-2.25-1.75a.75.75 0 0 0-1.5 0c0 1.666 1.37 2.891 3 3.183V18a.75.75 0 0 0 1.5 0v-.317c1.63-.292 3-1.517 3-3.183c0-1.917-1.813-3.25-3.75-3.25c-1.376 0-2.25-.906-2.25-1.75s.874-1.75 2.25-1.75c1.377 0 2.25.906 2.25 1.75a.75.75 0 0 0 1.5 0c0-1.666-1.37-2.891-3-3.183z" fill="currentColor"></path></svg>
<span>Salary Range</span>
</div>
<svg aria-hidden="true" data-icon="solar:alt-arrow-down-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m8.303 12.404l3.327 3.431c.213.22.527.22.74 0l6.43-6.63C19.201 8.79 18.958 8 18.43 8h-5.723z" fill="currentColor"></path><path d="M11.293 8H5.57c-.528 0-.771.79-.37 1.205l2.406 2.481z" fill="currentColor" opacity=".5"></path></svg>
</div>
<div className="w-14 bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2.5 text-xs text-neutral-300 flex justify-center font-mono">&gt;</div>
<div className="w-24 bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2.5 text-xs text-white font-medium flex items-center justify-between group/val">
<span>$120k</span>
</div>
</div>

<div className="flex items-center gap-3">
<span className="text-[0.65rem] font-bold uppercase tracking-wider text-neutral-500 w-10 text-right">And</span>
<div className="flex-1 bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2.5 text-xs text-neutral-300 flex justify-between items-center group/input hover:border-neutral-600 transition-colors cursor-pointer">
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="solar:map-point-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c-4.418 0-8 4.003-8 8.5c0 4.462 2.553 9.312 6.537 11.174a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.962 20 10.5C20 6.003 16.418 2 12 2" fill="currentColor" opacity=".5"></path><path d="M12 12.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5" fill="currentColor"></path></svg>
<span>Location</span>
</div>
<svg aria-hidden="true" data-icon="solar:alt-arrow-down-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m8.303 12.404l3.327 3.431c.213.22.527.22.74 0l6.43-6.63C19.201 8.79 18.958 8 18.43 8h-5.723z" fill="currentColor"></path><path d="M11.293 8H5.57c-.528 0-.771.79-.37 1.205l2.406 2.481z" fill="currentColor" opacity=".5"></path></svg>
</div>
<div className="w-14 bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2.5 text-xs text-neutral-300 flex justify-center font-mono">=</div>
<div className="w-24 bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2.5 text-xs text-white font-medium flex items-center justify-between">
<span>Remote</span>
</div>
</div>

<div className="mt-2 bg-neutral-900/40 rounded-xl p-4 border border-dashed border-neutral-800 flex flex-col gap-3 relative">

<div className="absolute -left-3 top-6 w-3 h-[1px] bg-neutral-800"></div>
<div className="absolute -left-3 top-0 h-6 w-[1px] bg-neutral-800"></div>
<div className="flex items-center gap-3">
<span className="text-[0.65rem] font-bold uppercase tracking-wider text-neutral-500 w-10 text-right">Or</span>
<div className="flex-1 bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2.5 text-xs text-neutral-300 flex justify-between items-center group/input hover:border-neutral-600 transition-colors cursor-pointer">
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="solar:suitcase-tag-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14" fill="currentColor" opacity=".5"></path><path d="M11.948 1.25c-.899 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.725c-.456.456-.642 1.023-.726 1.65c-.08.595-.08 1.345-.08 2.243V6h1.5c0-.964.002-1.612.067-2.095c.062-.461.169-.659.3-.789s.327-.237.788-.3c.483-.064 1.131-.066 2.095-.066s1.612.002 2.095.067c.461.062.659.169.789.3s.237.327.3.788c.064.483.066 1.131.066 2.095h1.5v-.052c0-.898 0-1.648-.08-2.242c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726c-.594-.08-1.344-.08-2.242-.08zM10 15H6c-.471 0-.707 0-.854.146C5 15.293 5 15.53 5 16v1c0 .471 0 .707.146.854C5.293 18 5.53 18 6 18h4c.471 0 .707 0 .854-.146C11 17.707 11 17.47 11 17v-1c0-.471 0-.707-.146-.854C10.707 15 10.47 15 10 15" fill="currentColor"></path><path d="M5.25 21.797c.439.079.935.127 1.5.156V18H6c-.374 0-.6 0-.75-.073zm0-6.724v-8.87c.439-.079.935-.127 1.5-.156V15H6c-.374 0-.6 0-.75.073m12 6.88a12 12 0 0 0 1.5-.156V6.203a12 12 0 0 0-1.5-.156z" fill="currentColor"></path></svg>
<span>Role Type</span>
</div>
<svg aria-hidden="true" data-icon="solar:alt-arrow-down-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m8.303 12.404l3.327 3.431c.213.22.527.22.74 0l6.43-6.63C19.201 8.79 18.958 8 18.43 8h-5.723z" fill="currentColor"></path><path d="M11.293 8H5.57c-.528 0-.771.79-.37 1.205l2.406 2.481z" fill="currentColor" opacity=".5"></path></svg>
</div>
<div className="w-14 bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2.5 text-xs text-neutral-300 flex justify-center font-mono">=</div>
<div className="w-24 bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2.5 text-xs text-white font-medium flex items-center justify-between">
<span>Contract</span>
</div>
</div>
</div>

<button className="mt-2 flex items-center gap-2 text-neutral-500 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors w-max py-2">
<svg aria-hidden="true" data-icon="solar:add-circle-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z" fill="currentColor"></path></svg>
<span>Add Condition</span>
</button>
</div>
</div>
</div>
</div><div className="flex flex-col md:px-0 z-20 w-full max-w-[90rem] border-white/5 border-t mt-32 mr-auto ml-auto pt-12 pr-4 pb-12 pl-4 relative gap-x-16 gap-y-16">

<div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
<div className="animate-on-scroll flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm text-[0.65rem] uppercase tracking-widest text-neutral-400 font-semibold" data-animation="up" data-delay="0">
<svg aria-hidden="true" className="w-3 h-3 text-emerald-400" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.592 3.2a6 6 0 0 1-.495.399c-.298.2-.633.338-.985.408c-.153.03-.313.043-.632.068c-.801.064-1.202.096-1.536.214a2.71 2.71 0 0 0-1.655 1.655c-.118.334-.15.735-.214 1.536a6 6 0 0 1-.068.632c-.07.352-.208.687-.408.985c-.087.13-.191.252-.399.495c-.521.612-.782.918-.935 1.238c-.353.74-.353 1.6 0 2.34c.153.32.414.626.935 1.238c.208.243.312.365.399.495c.2.298.338.633.408.985c.03.153.043.313.068.632c.064.801.096 1.202.214 1.536a2.71 2.71 0 0 0 1.655 1.655c.334.118.735.15 1.536.214c.319.025.479.038.632.068c.352.07.687.209.985.408c.13.087.252.191.495.399c.612.521.918.782 1.238.935c.74.353 1.6.353 2.34 0c.32-.153.626-.414 1.238-.935c.243-.208.365-.312.495-.399c.298-.2.633-.338.985-.408c.153-.03.313-.043.632-.068c.801-.064 1.202-.096 1.536-.214a2.71 2.71 0 0 0 1.655-1.655c.118-.334.15-.735.214-1.536c.025-.319.038-.479.068-.632c.07-.352.209-.687.408-.985c.087-.13.191-.252.399-.495c.521-.612.782-.918.935-1.238c.353-.74.353-1.6 0-2.34c-.153-.32-.414-.626-.935-1.238a6 6 0 0 1-.399-.495a2.7 2.7 0 0 1-.408-.985a6 6 0 0 1-.068-.632c-.064-.801-.096-1.202-.214-1.536a2.71 2.71 0 0 0-1.655-1.655c-.334-.118-.735-.15-1.536-.214a6 6 0 0 1-.632-.068a2.7 2.7 0 0 1-.985-.408a6 6 0 0 1-.495-.399c-.612-.521-.918-.782-1.238-.935a2.71 2.71 0 0 0-2.34 0c-.32.153-.626.414-1.238.935" fill="currentColor" opacity=".5"></path><path d="M16.374 9.863a.814.814 0 0 0-1.151-1.151l-4.85 4.85l-1.595-1.595a.814.814 0 0 0-1.151 1.151l2.17 2.17a.814.814 0 0 0 1.15 0z" fill="currentColor"></path></svg>
<span>Venture Backed</span>
</div>
<h2 className="animate-on-scroll md:text-5xl lg:text-6xl uppercase leading-[0.9] text-3xl font-medium text-white tracking-tight font-bricolage" data-animation="up" data-delay="100">
            Clients Funded by <span className="text-neutral-600">Elite Firms</span>
</h2>
<p className="animate-on-scroll text-sm md:text-base text-neutral-400 font-normal uppercase tracking-wide max-w-xl" data-animation="up" data-delay="150">
            Join the next unicorn. Our platform features opportunities from startups backed by the industry's most prestigious investors.
        </p>
</div>

<div className="w-full relative perspective-[2000px]">

<style>
            @keyframes levitate {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
            .animate-levitate { animation: levitate 6s ease-in-out infinite; }
            .animate-levitate-delayed { animation: levitate 6s ease-in-out infinite; animation-delay: -3s; }
        </style>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2">

<div className="animate-on-scroll animate-levitate group relative flex flex-col justify-between h-[420px] bg-neutral-950/40 backdrop-blur-xl border border-white/5 hover:border-white/20 rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.1)] overflow-hidden" data-animation="up" data-delay="200">

<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

<div className="flex justify-between items-start z-10">
<span className="text-[0.6rem] font-bold uppercase tracking-widest text-neutral-500 border border-white/5 px-2 py-1 rounded-md bg-neutral-900/50">Series A+</span>
<span className="font-space font-medium text-emerald-400 text-sm">$8B Funded</span>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110">
<div className="flex flex-col items-center gap-2">
<svg className="w-16 h-16 text-white mb-2" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 8C8 10 5.9 16.17 3.82 21.343C5.628 21.77 7.53 22 9.5 22C11.59 22 13.596 21.745 15.49 21.265C13.886 16.425 13.79 12.062 17 8Z" opacity="0.5"></path><path d="M16.5 2.5C11.5 3 9.5 7 9.5 12C9.5 14.5 9.8 17 10.5 19C11.3 16 12 14 15 12C18 10 17 8 16.5 2.5Z"></path></svg>
<span className="text-xl font-bold tracking-tight text-white">SEQUOIA</span>
</div>
</div>

<div className="z-10 flex flex-col gap-1 border-t border-white/5 pt-4">
<span className="text-3xl font-medium text-white font-bricolage group-hover:translate-x-1 transition-transform duration-300">142</span>
<p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold flex items-center gap-2">
                        Portfolio Companies
                        <svg aria-hidden="true" className="w-3 h-3 text-neutral-600 group-hover:text-white transition-colors" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="currentColor"></path></svg>
</p>
</div>
</div>

<div className="animate-on-scroll animate-levitate-delayed group relative flex flex-col justify-between h-[420px] bg-neutral-950/40 backdrop-blur-xl border border-white/5 hover:border-white/20 rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.1)] overflow-hidden lg:mt-12" data-animation="up" data-delay="300">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="flex justify-between items-start z-10">
<span className="text-[0.6rem] font-bold uppercase tracking-widest text-neutral-500 border border-white/5 px-2 py-1 rounded-md bg-neutral-900/50">Late Stage</span>
<span className="font-space font-medium text-blue-400 text-sm">$12B Funded</span>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110">
<span className="font-bricolage font-bold text-5xl tracking-tighter text-white">a16z</span>
</div>
<div className="z-10 flex flex-col gap-1 border-t border-white/5 pt-4">
<span className="text-3xl font-medium text-white font-bricolage group-hover:translate-x-1 transition-transform duration-300">89</span>
<p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold flex items-center gap-2">
                        Portfolio Companies
                        <svg aria-hidden="true" className="w-3 h-3 text-neutral-600 group-hover:text-white transition-colors" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="currentColor"></path></svg>
</p>
</div>
</div>

<div className="animate-on-scroll animate-levitate group relative flex flex-col justify-between h-[420px] bg-neutral-950/40 backdrop-blur-xl border border-white/5 hover:border-white/20 rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.1)] overflow-hidden" data-animation="up" data-delay="400">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="flex justify-between items-start z-10">
<span className="text-[0.6rem] font-bold uppercase tracking-widest text-neutral-500 border border-white/5 px-2 py-1 rounded-md bg-neutral-900/50">Seed &amp; Growth</span>
<span className="font-space font-medium text-purple-400 text-sm">$5B Funded</span>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110">
<div className="flex items-center gap-3">
<div className="flex gap-0.5">
<div className="w-2 h-8 bg-white/80"></div>
<div className="w-2 h-8 bg-white/60"></div>
<div className="w-2 h-8 bg-white/40"></div>
</div>
<div className="flex flex-col">
<span className="font-bold tracking-tight text-xl leading-none text-white">FOUNDERS</span>
<span className="font-light tracking-widest text-[0.6rem] leading-none text-neutral-400">FUND</span>
</div>
</div>
</div>
<div className="z-10 flex flex-col gap-1 border-t border-white/5 pt-4">
<span className="text-3xl font-medium text-white font-bricolage group-hover:translate-x-1 transition-transform duration-300">56</span>
<p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold flex items-center gap-2">
                        Portfolio Companies
                        <svg aria-hidden="true" className="w-3 h-3 text-neutral-600 group-hover:text-white transition-colors" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="currentColor"></path></svg>
</p>
</div>
</div>

<div className="animate-on-scroll animate-levitate-delayed group relative flex flex-col justify-between h-[420px] bg-neutral-950/40 backdrop-blur-xl border border-white/5 hover:border-white/20 rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.1)] overflow-hidden lg:mt-12" data-animation="up" data-delay="500">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="flex justify-between items-start z-10">
<span className="text-[0.6rem] font-bold uppercase tracking-widest text-neutral-500 border border-white/5 px-2 py-1 rounded-md bg-neutral-900/50">Accelerator</span>
<span className="font-space font-medium text-orange-400 text-sm">$4B Funded</span>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110">
<div className="w-16 h-16 bg-white rounded flex items-center justify-center">
<span className="text-neutral-950 font-bold text-4xl">Y</span>
</div>
</div>
<div className="z-10 flex flex-col gap-1 border-t border-white/5 pt-4">
<span className="text-3xl font-medium text-white font-bricolage group-hover:translate-x-1 transition-transform duration-300">200+</span>
<p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold flex items-center gap-2">
                        Portfolio Companies
                        <svg aria-hidden="true" className="w-3 h-3 text-neutral-600 group-hover:text-white transition-colors" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="currentColor"></path></svg>
</p>
</div>
</div>
</div>
</div>
</div><div className="flex flex-col md:px-0 z-20 w-full max-w-[90rem] border-white/5 border-t mt-32 mr-auto ml-auto pt-12 pr-4 pb-12 pl-4 relative gap-x-16 gap-y-16">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">

<div className="lg:col-span-5 relative flex flex-col justify-center p-6 lg:p-12 overflow-hidden rounded-[2.5rem] bg-neutral-900/50 border border-white/5">

<div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(#10b981 1.5px, transparent 1.5px)', backgroundSize: '32px 32px'}}></div>
<div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-transparent"></div>
<div className="relative z-10 flex flex-col gap-8">

<div className="flex items-center gap-4">
<span className="h-px w-8 bg-emerald-500/50"></span>
<span className="text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase font-space">Statistics</span>
</div>

<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight font-bricolage leading-[1.1]">
                    Hiring At Scale, 
                    <span className="text-neutral-500">Simplified.</span>
</h2>

<p className="text-neutral-400 text-sm md:text-base leading-relaxed font-space max-w-md">
                    TalentHub empowers recruitment teams to move faster without compromising on candidate quality. Our data-driven approach ensures precision in every placement.
                </p>

<button className="mt-4 group flex items-center gap-3 text-sm font-medium text-white w-max">
<span className="border-b border-emerald-500 pb-0.5 group-hover:border-white transition-colors">View full report</span>
<svg aria-hidden="true" className="iconify w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform iconify--solar" data-icon="solar:arrow-right-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="currentColor"></path></svg>
</button>
</div>
</div>

<div className="lg:col-span-7 bg-white text-neutral-950 rounded-[2.5rem] p-8 md:p-16 flex flex-col justify-between gap-12 relative overflow-hidden">

<div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-100 rounded-full blur-[80px] opacity-60 pointer-events-none"></div>

<div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-start sm:items-center relative z-10 group">
<span className="text-6xl md:text-7xl font-medium tracking-tighter font-bricolage w-48 shrink-0 group-hover:scale-105 transition-transform duration-500 origin-left">15K+</span>
<div className="flex flex-col gap-2 max-w-xs">
<h3 className="text-lg font-semibold tracking-tight">Active Candidates Weekly</h3>
<p className="text-xs text-neutral-500 font-medium leading-relaxed uppercase tracking-wide">
                        Numbers that reflect our constantly growing pool of vetted talent.
                    </p>
</div>
</div>

<div className="h-px w-full bg-neutral-100"></div>

<div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-start sm:items-center relative z-10 group">
<span className="text-6xl md:text-7xl font-medium tracking-tighter font-bricolage w-48 shrink-0 group-hover:scale-105 transition-transform duration-500 origin-left">8.5K+</span>
<div className="flex flex-col gap-2 max-w-xs">
<h3 className="text-lg font-semibold tracking-tight">Matches Made Monthly</h3>
<p className="text-xs text-neutral-500 font-medium leading-relaxed uppercase tracking-wide">
                        TalentHub continues to empower creators across the globe.
                    </p>
</div>
</div>

<div className="h-px w-full bg-neutral-100"></div>

<div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-start sm:items-center relative z-10 group">
<span className="text-6xl md:text-7xl font-medium tracking-tighter font-bricolage w-48 shrink-0 group-hover:scale-105 transition-transform duration-500 origin-left">99%</span>
<div className="flex flex-col gap-2 max-w-xs">
<h3 className="text-lg font-semibold tracking-tight">Placement Satisfaction</h3>
<p className="text-xs text-neutral-500 font-medium leading-relaxed uppercase tracking-wide">
                        Our journey in numbers: consistent growth, satisfied clients.
                    </p>
</div>
</div>

<div className="h-px w-full bg-neutral-100"></div>

<div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-start sm:items-center relative z-10 group">
<span className="text-6xl md:text-7xl font-medium tracking-tighter font-bricolage w-48 shrink-0 group-hover:scale-105 transition-transform duration-500 origin-left">24h</span>
<div className="flex flex-col gap-2 max-w-xs">
<h3 className="text-lg font-semibold tracking-tight">Average Time to Hire</h3>
<p className="text-xs text-neutral-500 font-medium leading-relaxed uppercase tracking-wide">
                        Smooth, instant, and distraction-free hiring process.
                    </p>
</div>
</div>
</div>
</div>
</div><footer className="bg-neutral-950 w-full border-white/5 rounded-3xl border-t mt-0 pt-24 pb-12 relative">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-gradient-to-t from-emerald-900/10 to-transparent blur-[100px] pointer-events-none"></div>
<div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-20">

<div className="lg:col-span-2 flex flex-col gap-6">
<a className="flex items-center gap-2 group w-max" href="#">
<div className="flex gap-1">
<div className="w-3 h-8 bg-white rounded-full group-hover:bg-emerald-400 transition-colors duration-300"></div>
<div className="w-3 h-8 bg-white rounded-full h-5 group-hover:h-8 transition-all duration-300"></div>
<div className="w-3 h-8 bg-white rounded-full group-hover:bg-emerald-400 transition-colors duration-300"></div>
</div>
<span className="text-lg font-bold tracking-tight text-white ml-2">TALENT HUB</span>
</a>
<p className="text-neutral-400 text-sm leading-relaxed max-w-xs font-space">
                    The next generation hiring platform for creative and technical talent. Built for speed, designed for quality.
                </p>

<div className="flex items-center gap-4 mt-2">
<a className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-950/30 transition-all duration-300 group" href="#">
<svg aria-hidden="true" data-icon="solar:camera-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21" fill="currentColor" opacity=".5"></path><path d="M17.556 9.272a.826.826 0 0 0-.833.819c0 .452.373.818.833.818h1.111c.46 0 .834-.367.834-.818a.826.826 0 0 0-.834-.819z" fill="currentColor"></path><path clip-rule="evenodd" d="M12 9.272c-2.3 0-4.166 1.832-4.166 4.091s1.865 4.091 4.167 4.091c2.3 0 4.166-1.831 4.166-4.09s-1.865-4.092-4.166-4.092m0 1.637c-1.38 0-2.5 1.099-2.5 2.454s1.12 2.455 2.5 2.455c1.381 0 2.5-1.099 2.5-2.455c0-1.355-1.119-2.454-2.5-2.454" fill="currentColor" fill-rule="evenodd"></path></svg>
</a>
<a className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-950/30 transition-all duration-300 group" href="#">
<svg aria-hidden="true" data-icon="solar:plain-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m16.245 7.76l5.172-5.171l-.003-.003c-1.187-1.187-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.72 2.72 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704c.45.15.957.042 1.294-.291l5.506-5.455a.79.79 0 0 1 1.116.005" fill="currentColor" fill-rule="evenodd"></path><path d="m18.635 15.67l1.717-5.15c1.498-4.495 2.248-6.744 1.064-7.932l-5.172 5.171a.79.79 0 0 1-.005 1.117l-5.416 5.367a1.4 1.4 0 0 0-.324 1.426c1.21 3.631 1.815 5.446 2.703 5.962a2.71 2.71 0 0 0 2.73 0c.888-.516 1.493-2.33 2.703-5.962" fill="currentColor" opacity=".5"></path></svg>
</a>
<a className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-950/30 transition-all duration-300 group" href="#">
<svg aria-hidden="true" data-icon="solar:basketball-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.453 8.397c1.728-1.469 3.087-3.21 3.672-4.949l.01-.031A9.96 9.96 0 0 1 20.66 7A9.95 9.95 0 0 1 22 11.842c-1.995-.431-4.186-.1-6.256.68c-.32-.864-.685-1.688-1.094-2.397a14 14 0 0 0-1.197-1.728" fill="currentColor"></path><path clip-rule="evenodd" d="M3.34 17a9.95 9.95 0 0 0 3.525 3.583v-.002c.818-2.468 3.2-4.945 5.992-6.644q.73-.445 1.508-.822c-.302-.823-.64-1.593-1.014-2.24a13 13 0 0 0-1.082-1.556q-.519.372-1.064.706c-2.757 1.693-6.112 2.743-9.061 2.162l-.145-.028a9.96 9.96 0 0 0 1.34 4.84" fill="currentColor" fill-rule="evenodd"></path><path d="M16.226 13.943c1.887-.72 3.811-.996 5.477-.63l.204.045a10 10 0 0 1-.71 2.57a9.95 9.95 0 0 1-3.538 4.317l-.013-.079a52 52 0 0 0-.687-3.494a40 40 0 0 0-.733-2.73M8.319 3.454a35 35 0 0 0-.6-.465l-.023-.016a9.95 9.95 0 0 1 5.5-.902c.887.107 1.757.333 2.584.67l-.077.229c-.477 1.418-1.65 2.95-3.228 4.29a32 32 0 0 0-2.203-2.16A42 42 0 0 0 8.32 3.453m2.1 5.294c-2.586 1.588-5.55 2.449-7.987 1.969l-.342-.068a10 10 0 0 1 4.19-6.853l.328.239l.002.001l.01.007l.039.029l.154.115a40 40 0 0 1 2.456 2.03c.66.592 1.358 1.26 2.013 1.965q-.42.293-.863.566m5.785 11.916l.002.012v.004l.053.369a10 10 0 0 1-8.04.21l.069-.204c.663-2.002 2.72-4.237 5.348-5.836q.592-.36 1.206-.667c.252.83.471 1.671.655 2.462a51 51 0 0 1 .699 3.597z" fill="currentColor" opacity=".5"></path></svg>
</a>
</div>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-2">Platform</h4>
<a className="text-neutral-400 hover:text-emerald-400 text-sm transition-colors w-max" href="#">Browse Jobs</a>
<a className="text-neutral-400 hover:text-emerald-400 text-sm transition-colors w-max" href="#">For Companies</a>
<a className="text-neutral-400 hover:text-emerald-400 text-sm transition-colors w-max" href="#">Pricing</a>
<a className="text-neutral-400 hover:text-emerald-400 text-sm transition-colors w-max" href="#">Success Stories</a>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-2">Resources</h4>
<a className="text-neutral-400 hover:text-emerald-400 text-sm transition-colors w-max" href="#">Blog</a>
<a className="text-neutral-400 hover:text-emerald-400 text-sm transition-colors w-max" href="#">Salary Guide</a>
<a className="text-neutral-400 hover:text-emerald-400 text-sm transition-colors w-max" href="#">Help Center</a>
<a className="text-neutral-400 hover:text-emerald-400 text-sm transition-colors w-max" href="#">API Docs</a>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-2">Company</h4>
<a className="text-neutral-400 hover:text-emerald-400 text-sm transition-colors w-max" href="#">About Us</a>
<a className="text-neutral-400 hover:text-emerald-400 text-sm transition-colors w-max" href="#">Careers</a>
<a className="text-neutral-400 hover:text-emerald-400 text-sm transition-colors w-max" href="#">Press</a>
<a className="text-neutral-400 hover:text-emerald-400 text-sm transition-colors w-max" href="#">Contact</a>
</div>

</div>

<div className="w-full border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex items-center gap-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">

<svg aria-hidden="true" className="iconify w-24 h-8 text-white iconify--simple-icons" data-icon="simple-icons:stripe" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409c0-.831.683-1.305 1.901-1.305c2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0C9.667 0 7.589.654 6.104 1.872C4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219c2.585.92 3.445 1.574 3.445 2.583c0 .98-.84 1.545-2.354 1.545c-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813c1.664-1.305 2.525-3.236 2.525-5.732c0-4.128-2.524-5.851-6.594-7.305z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify w-24 h-8 text-white iconify--simple-icons" data-icon="simple-icons:vercel" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m12 1.608l12 20.784H0Z" fill="currentColor"></path></svg>
<svg aria-hidden="true" data-icon="simple-icons:notion" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514c-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233l4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify w-24 h-8 text-white iconify--simple-icons" data-icon="simple-icons:spotify" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12s12-5.4 12-12S18.66 0 12 0m5.521 17.34c-.24.359-.66.48-1.021.24c-2.82-1.74-6.36-2.101-10.561-1.141c-.418.122-.779-.179-.899-.539c-.12-.421.18-.78.54-.9c4.56-1.021 8.52-.6 11.64 1.32c.42.18.479.659.301 1.02m1.44-3.3c-.301.42-.841.6-1.262.3c-3.239-1.98-8.159-2.58-11.939-1.38c-.479.12-1.02-.12-1.14-.6s.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2m.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721c-.18-.601.18-1.2.72-1.381c4.26-1.26 11.28-1.02 15.721 1.621c.539.3.719 1.02.419 1.56c-.299.421-1.02.599-1.559.3" fill="currentColor"></path></svg>
</div>
<p className="text-neutral-600 text-xs font-medium uppercase tracking-wider">
                © 2024 Talent Hub Inc. All rights reserved.
            </p>
</div>
</div>
</footer>

<div className="absolute top-[30%] right-[-10%] md:right-[5%] w-[30vw] h-[30vw] md:w-[20rem] md:h-[20rem] rounded-full bg-gradient-to-b from-blue-900/30 to-purple-900/20 opacity-40 blur-3xl pointer-events-none"></div>
<div className="hidden lg:flex animate-[spin_10s_linear_infinite] w-32 h-32 border-neutral-700/30 border rounded-full absolute right-[25%] bottom-[20%] items-center justify-center">
<div className="w-full h-[1px] bg-neutral-700/30"></div>
</div>
</main>


    </>
  );
}
