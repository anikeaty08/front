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



/*
Sequence animation on scroll when visible. Requires Animation Keyframe. Usage:
1) Insert this code in the <head> along with the Animation Keyframe code.
2) Add to Tailwind Classes: [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll
*/
(function () {
// Inject CSS for paused/running states
const style = document.createElement("style");
style.textContent = `
/* Default: paused */
.animate-on-scroll { animation-play-state: paused !important; }
/* Activated by JS */
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
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el); // observing twice is a no-op
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component -z-10 w-full top-0 absolute h-[800px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="sajpUiTp7MIKdX6daDCu"></div>

</div>
</div>

<div className="gradient-blur" style={{}}>
<div className=""></div>
<div className="" style={{}}></div>
<div className="" style={{}}></div>
<div className="" style={{}}></div>
<div className="" style={{}}></div>
<div className="" style={{}}></div>
</div>

<div className="fixed flex z-50 w-full pt-6 pr-4 pl-4 top-0 left-0 justify-center">
<nav className="shadow-black/50 flex md:gap-12 md:w-auto bg-black/60 w-full max-w-5xl rounded-none pt-2 pr-2 pb-2 pl-6 shadow-2xl backdrop-blur-lg gap-x-8 gap-y-8 items-center justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2))', -BorderRadiusBefore: '0'}}>
<div className="flex items-center gap-2 shrink-0">
<span className="text-base font-medium text-white tracking-tight font-sans">FUZONIX</span>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="hover:text-white transition-colors text-xs font-medium text-gray-400 font-sans" href="#">
            Work
          </a>
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors font-sans" href="#">
            Services
          </a>
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors font-sans" href="#">
            About
          </a>
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors font-sans" href="#">
            Contact
          </a>
</div>
<div className="flex gap-4 shrink-0 gap-x-4 gap-y-4 items-center" style={{}}>
<a className="hidden md:block text-xs font-medium text-gray-300 hover:text-white transition-colors font-sans" href="#">
            Hire Me
          </a>
<button className="group inline-flex overflow-hidden transition-transform active:scale-95 cursor-pointer outline-none rounded-none pt-2.5 pr-6 pb-2.5 pl-6 relative gap-x-4 gap-y-4 items-center justify-center" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)'}}>

<span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ef233c_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{}}></span>

<span className="absolute inset-0 rounded-none bg-zinc-800 transition-opacity duration-300 group-hover:opacity-0" style={{}}></span>

<span className="z-10 bg-black rounded-none absolute top-[1px] right-[1px] bottom-[1px] left-[1px]"></span>

<div className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 z-10" style={{background: 'radial-gradient(50% 50% at 50% 100%, rgba(239, 35, 60, 0.2) 0%, transparent 100%)'}}></div>

<span className="relative z-20 flex items-center justify-center gap-2 text-xs font-medium text-white tracking-wide uppercase">
<span className="">Book Call</span>
<svg className="transition-transform duration-300 group-hover:translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>
</nav>
</div>

<section className="min-h-screen flex flex-col md:pt-20 overflow-hidden w-full pt-32 relative items-center justify-center" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 95%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 95%, transparent)'}}>



<div className="z-10 text-center max-w-5xl mt-24 mr-auto mb-24 ml-auto pr-6 pl-6 relative">

<div className="[animation:fadeSlideIn_1s_ease-out_0.8s_both] animate-on-scroll inline-flex transition-transform hover:scale-105 cursor-pointer group animate bg-gradient-to-br from-white/10 to-white/0 rounded-full mb-10 pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', -BorderRadiusBefore: '9999px'}}>
<span className="flex h-1.5 w-1.5 rounded-full group-hover:animate-pulse bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]"></span>
<span className="text-xs font-medium tracking-wide group-hover:text-white transition-colors font-sans text-red-100/80">
            Available for new projects
          </span>
</div>

<h1 className="[animation:fadeSlideIn_1s_ease-out_1s_both] animate-on-scroll animate flex flex-wrap justify-center gap-x-[0.25em] gap-y-2 leading-[1.1] md:text-8xl cursor-default text-6xl font-medium tracking-tighter font-manrope mb-8">
<span className="inline-flex bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">
            Design
          </span>
<span className="inline-flex bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">
            your
          </span>
<span className="inline-flex bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-100">
            vision
          </span>
<span className="inline-flex bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">
            with
          </span>
<span className="inline-flex bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">
            creative
          </span>
<span className="inline-flex bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">
            excellence
          </span>
</h1>

<p className="[animation:fadeSlideIn_1s_ease-out_1.2s_both] animate-on-scroll leading-relaxed md:text-2xl text-xl text-gray-400 tracking-normal max-w-3xl mr-auto mb-12 ml-auto animate font-manrope font-medium" style={{}}>
          Crafting digital experiences that merge art and technology. From
          branding to web development, I build it all.
        </p>

<div className="[animation:fadeSlideIn_1s_ease-out_1.4s_both] animate-on-scroll flex flex-col md:flex-row gap-6 animate mb-12 gap-x-6 gap-y-6 items-center justify-center">
<button className="group flex min-w-[180px] decoration-0 transition-transform active:scale-95 cursor-pointer outline-none w-auto h-[50px] pr-6 pl-6 relative items-center justify-center" data-framer-name="desktop" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', opacity: '1', border: 'none'}} type="button">

<div className="pointer-events-none transition-opacity ease-in-out duration-[1200ms] group-hover:opacity-0 opacity-100 absolute top-0 right-0 bottom-0 left-0" data-framer-name="Glow" style={{background: 'radial-gradient(15% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '8px', filter: 'blur(15px)'}}></div>

<div className="pointer-events-none transition-opacity ease-in-out duration-[1200ms] group-hover:opacity-100 opacity-0 absolute top-0 right-0 bottom-0 left-0" data-framer-name="Glow Hover" style={{background: 'radial-gradient(60.6% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '8px', filter: 'blur(18px)'}}></div>

<div className="pointer-events-none will-change-auto transition-opacity ease-in-out duration-[1200ms] group-hover:opacity-0 opacity-100 absolute top-0 right-0 bottom-0 left-0" data-framer-name="Stroke" style={{background: 'radial-gradient(10.7% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '8px'}}></div>

<div className="pointer-events-none will-change-auto transition-opacity ease-in-out duration-[1200ms] group-hover:opacity-100 opacity-0 absolute top-0 right-0 bottom-0 left-0" data-framer-name="Stroke Hover" style={{background: 'radial-gradient(60.1% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '8px'}}></div>

<div className="rounded-[7px] absolute top-[1px] right-[1px] bottom-[1px] left-[1px]" data-framer-name="Fill" style={{backgroundColor: 'rgb(0, 0, 0)', opacity: '1'}}></div>

<div className="relative z-20 flex items-center justify-center gap-2 opacity-100" data-framer-name="text content">
<span className="m-0 p-0 font-sans text-[15px] font-medium text-white tracking-wide" style={{WebkitFontSmoothing: 'antialiased', textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>
                View Portfolio
              </span>
<svg className="lucide lucide-arrow-right transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</button>
<button className="group min-w-[180px] overflow-hidden z-10 cursor-pointer outline-none transition-all duration-300 active:scale-95 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] bg-black w-auto h-[50px] rounded-xl relative" type="button">

<div className="-translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 blur-[12px] group-hover:animate-[spin_3s_linear_infinite] transition-all duration-700 bg-gradient-to-tr from-[#ef233c] via-[#ff7f51] to-[#ef233c] opacity-60 w-[250%] h-[500%] absolute top-1/2 left-1/2"></div>

<div className="z-[1] bg-black rounded-[10px] absolute top-[1.5px] right-[1.5px] bottom-[1.5px] left-[1.5px]"></div>

<div className="absolute z-10 top-0 left-0 h-full w-24 -translate-x-32 group-hover:translate-x-[20rem] ease-in transition-all duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"></div>

<span className="relative z-20 flex items-center justify-center gap-2 font-sans text-[15px] font-medium text-zinc-300 group-hover:text-white tracking-wide transition-colors">
              Contact Me
            </span>
</button>
</div>

<div className="[animation:fadeSlideIn_1s_ease-out_1.6s_both] animate-on-scroll flex flex-col animate mt-32 mb-20 gap-x-4 gap-y-4 items-center">
<p className="text-xs text-gray-500 font-medium uppercase tracking-widest font-sans">
            Trusted by forward-thinking brands
          </p>
<a className="inline-flex items-center gap-1 hover:text-white hover:border-white transition-all group text-sm text-gray-400 font-sans border-transparent border-b pb-0.5" href="#">Start your project </a>
</div>
</div>

<div className="[animation:fadeSlideIn_1s_ease-out_1.8s_both] animate-on-scroll z-20 md:pb-20 animate w-full max-w-6xl mr-auto ml-auto pr-6 pb-12 pl-6 relative">
<div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] opacity-40 grayscale hover:grayscale-0 transition-all duration-700 group">
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
<div className="flex items-center justify-center md:justify-start [&amp;_div]:mx-8 w-max animate-infinite-scroll">

<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-2xl text-white iconify--simple-icons" data-icon="simple-icons:git" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 0 1 1.9 3.039a1.837 1.837 0 0 1-2.6 0a1.85 1.85 0 0 1-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348a1.85 1.85 0 0 1 0 2.6a1.844 1.844 0 0 1-2.609 0a1.834 1.834 0 0 1 0-2.598c.182-.18.387-.316.605-.406V8.835a1.834 1.834 0 0 1-.996-2.41L7.636 3.7L.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477a1.545 1.545 0 0 0 2.186 0l10.43-10.43a1.544 1.544 0 0 0 0-2.187" fill="currentColor"></path>
</svg>
<span className="font-medium text-lg text-white font-sans">git</span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-3xl text-white iconify--simple-icons" data-icon="simple-icons:npm" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019l-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" fill="currentColor"></path>
</svg>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl text-white iconify--simple-icons" data-icon="simple-icons:lucid" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0L3.694 4.8V24L12 19.2Zm0 19.2v4.502h8.305V14.4Z" fill="currentColor"></path>
</svg>
<span className="font-medium text-lg text-white font-sans">
                Lucidchart
              </span>
</div>
<div className="group flex items-center gap-2">
<span className="iconify text-xl text-white" data-icon="simple-icons:wrike"></span>
<span className="font-medium text-lg text-white font-sans">
                wrike
              </span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl text-white iconify--simple-icons" data-icon="simple-icons:jquery" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M1.525 5.87c-2.126 3.054-1.862 7.026-.237 10.269q.057.117.118.229q.035.076.077.15q.021.042.047.082q.04.078.081.152l.157.266c.03.049.057.097.09.146c.056.094.12.187.178.281q.037.06.079.117a6 6 0 0 0 .31.445q.115.16.24.315l.086.115l.22.269c.028.03.055.067.084.099q.148.176.306.35l.005.006a3 3 0 0 0 .425.44q.119.125.245.245l.101.097q.165.158.34.309q.002 0 .005.003l.057.05q.153.135.31.26l.125.105l.26.2l.137.105c.093.07.192.139.287.207q.052.038.106.073l.03.023l.28.185l.12.08q.221.14.44.272q.063.031.123.068q.164.095.329.183q.09.05.184.094q.113.062.234.125a.3.3 0 0 1 .056.023l.096.047q.18.09.375.175q.037.014.076.034q.215.094.438.182c.034.01.07.027.105.04q.204.078.411.152l.05.018q.23.078.46.15l.111.033c.16.048.314.105.474.137c10.273 1.872 13.258-6.177 13.258-6.177c-2.508 3.266-6.958 4.127-11.174 3.169c-.156-.036-.312-.086-.47-.132a14 14 0 0 1-.567-.182l-.062-.024q-.202-.07-.4-.148l-.11-.04q-.22-.09-.433-.184c-.031-.01-.057-.024-.088-.036l-.362-.17l-.106-.052c-.094-.044-.188-.095-.28-.143a4 4 0 0 1-.187-.096c-.114-.06-.227-.125-.34-.187q-.052-.035-.112-.066a16 16 0 0 1-.439-.27a2 2 0 0 1-.118-.078a6 6 0 0 1-.312-.207l-.103-.073a10 10 0 0 1-.295-.212q-.064-.05-.132-.1c-.088-.07-.177-.135-.265-.208l-.118-.095a11 11 0 0 1-.335-.28l-.037-.031l-.347-.316l-.1-.094q-.123-.125-.25-.246l-.098-.1a9 9 0 0 1-.309-.323l-.015-.016q-.159-.174-.313-.355q-.04-.046-.08-.097l-.227-.277a21 21 0 0 1-.34-.449C2.152 11.79 1.306 7.384 3.177 3.771m4.943-.473c-1.54 2.211-1.454 5.169-.254 7.508a9 9 0 0 0 .678 1.133c.23.33.484.721.793.988q.162.181.344.36l.09.09q.172.164.35.325l.016.013a10 10 0 0 0 .414.342c.034.023.063.05.096.073q.21.161.428.316l.015.009q.093.066.198.13c.028.018.06.042.09.06q.158.1.318.197l.048.023c.09.055.188.108.282.157c.033.02.065.035.1.054q.1.05.197.102l.032.014q.204.1.408.19q.05.02.092.039q.167.072.336.137c.05.017.097.037.144.052c.102.038.21.073.31.108l.14.045c.147.045.295.104.449.13C22.164 17.206 24 11.098 24 11.098c-1.653 2.38-4.852 3.513-8.261 2.628a8 8 0 0 1-.449-.13c-.048-.014-.09-.029-.136-.043c-.104-.036-.211-.07-.312-.109l-.144-.054c-.113-.045-.227-.087-.336-.135c-.034-.015-.065-.025-.091-.04q-.211-.093-.418-.192l-.206-.107l-.119-.06a6 6 0 0 1-.265-.15l-.062-.035c-.106-.066-.217-.13-.318-.198q-.05-.03-.097-.062l-.208-.136c-.144-.1-.285-.208-.428-.313q-.048-.042-.094-.079c-1.499-1.178-2.681-2.79-3.242-4.613c-.59-1.897-.46-4.023.56-5.75m4.292-.147c-.909 1.334-.996 2.99-.37 4.46c.665 1.563 2.024 2.79 3.608 3.37q.096.036.196.07l.088.027c.092.03.185.063.28.084c4.381.845 5.567-2.25 5.886-2.704c-1.043 1.498-2.792 1.857-4.938 1.335a5 5 0 0 1-.516-.16a6 6 0 0 1-.618-.254a6.5 6.5 0 0 1-1.082-.66c-1.922-1.457-3.113-4.236-1.859-6.5" fill="currentColor"></path>
</svg>
<span className="font-medium text-lg text-white font-sans">
                jQuery
              </span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl text-white iconify--simple-icons" data-icon="simple-icons:openstack" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M18.575 9.29h5.418v5.42h-5.418zM0 9.29h5.419v5.42H0zm18.575 7.827a1.207 1.207 0 0 1-1.206 1.206H6.623a1.207 1.207 0 0 1-1.205-1.206v-.858H0v5.252a2.236 2.236 0 0 0 2.229 2.23h19.53A2.237 2.237 0 0 0 24 21.512V16.26h-5.425zM21.763.258H2.233a2.236 2.236 0 0 0-2.23 2.23V7.74h5.419v-.858a1.206 1.206 0 0 1 1.205-1.206h10.746a1.206 1.206 0 0 1 1.205 1.206v.858H24V2.487A2.237 2.237 0 0 0 21.763.258" fill="currentColor"></path>
</svg>
<span className="font-medium text-lg text-white font-sans">
                openstack
              </span>
</div>
<div className="group flex items-center gap-2">
<span className="iconify text-xl text-white" data-icon="simple-icons:servicenow"></span>
<span className="font-medium text-lg text-white tracking-tight font-sans">
                servicenow
              </span>
</div>
<div className="group flex items-center gap-2">
<span className="font-bold text-xl text-white tracking-tight font-sans">
                paysafe:
              </span>
</div>

<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-2xl text-white iconify--simple-icons" data-icon="simple-icons:git" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 0 1 1.9 3.039a1.837 1.837 0 0 1-2.6 0a1.85 1.85 0 0 1-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348a1.85 1.85 0 0 1 0 2.6a1.844 1.844 0 0 1-2.609 0a1.834 1.834 0 0 1 0-2.598c.182-.18.387-.316.605-.406V8.835a1.834 1.834 0 0 1-.996-2.41L7.636 3.7L.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477a1.545 1.545 0 0 0 2.186 0l10.43-10.43a1.544 1.544 0 0 0 0-2.187" fill="currentColor"></path>
</svg>
<span className="font-medium text-lg text-white font-sans">git</span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-3xl text-white iconify--simple-icons" data-icon="simple-icons:npm" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019l-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" fill="currentColor"></path>
</svg>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl text-white iconify--simple-icons" data-icon="simple-icons:lucid" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0L3.694 4.8V24L12 19.2Zm0 19.2v4.502h8.305V14.4Z" fill="currentColor"></path>
</svg>
<span className="font-medium text-lg text-white font-sans">
                Lucidchart
              </span>
</div>
<div className="group flex items-center gap-2">
<span className="iconify text-xl text-white" data-icon="simple-icons:wrike"></span>
<span className="font-medium text-lg text-white font-sans">
                wrike
              </span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl text-white iconify--simple-icons" data-icon="simple-icons:jquery" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M1.525 5.87c-2.126 3.054-1.862 7.026-.237 10.269q.057.117.118.229q.035.076.077.15q.021.042.047.082q.04.078.081.152l.157.266c.03.049.057.097.09.146c.056.094.12.187.178.281q.037.06.079.117a6 6 0 0 0 .31.445q.115.16.24.315l.086.115l.22.269c.028.03.055.067.084.099q.148.176.306.35l.005.006a3 3 0 0 0 .425.44q.119.125.245.245l.101.097q.165.158.34.309q.002 0 .005.003l.057.05q.153.135.31.26l.125.105l.26.2l.137.105c.093.07.192.139.287.207q.052.038.106.073l.03.023l.28.185l.12.08q.221.14.44.272q.063.031.123.068q.164.095.329.183q.09.05.184.094q.113.062.234.125a.3.3 0 0 1 .056.023l.096.047q.18.09.375.175q.037.014.076.034q.215.094.438.182c.034.01.07.027.105.04q.204.078.411.152l.05.018q.23.078.46.15l.111.033c.16.048.314.105.474.137c10.273 1.872 13.258-6.177 13.258-6.177c-2.508 3.266-6.958 4.127-11.174 3.169c-.156-.036-.312-.086-.47-.132a14 14 0 0 1-.567-.182l-.062-.024q-.202-.07-.4-.148l-.11-.04q-.22-.09-.433-.184c-.031-.01-.057-.024-.088-.036l-.362-.17l-.106-.052c-.094-.044-.188-.095-.28-.143a4 4 0 0 1-.187-.096c-.114-.06-.227-.125-.34-.187q-.052-.035-.112-.066a16 16 0 0 1-.439-.27a2 2 0 0 1-.118-.078a6 6 0 0 1-.312-.207l-.103-.073a10 10 0 0 1-.295-.212q-.064-.05-.132-.1c-.088-.07-.177-.135-.265-.208l-.118-.095a11 11 0 0 1-.335-.28l-.037-.031l-.347-.316l-.1-.094q-.123-.125-.25-.246l-.098-.1a9 9 0 0 1-.309-.323l-.015-.016q-.159-.174-.313-.355q-.04-.046-.08-.097l-.227-.277a21 21 0 0 1-.34-.449C2.152 11.79 1.306 7.384 3.177 3.771m4.943-.473c-1.54 2.211-1.454 5.169-.254 7.508a9 9 0 0 0 .678 1.133c.23.33.484.721.793.988q.162.181.344.36l.09.09q.172.164.35.325l.016.013a10 10 0 0 0 .414.342c.034.023.063.05.096.073q.21.161.428.316l.015.009q.093.066.198.13c.028.018.06.042.09.06q.158.1.318.197l.048.023c.09.055.188.108.282.157c.033.02.065.035.1.054q.1.05.197.102l.032.014q.204.1.408.19q.05.02.092.039q.167.072.336.137c.05.017.097.037.144.052c.102.038.21.073.31.108l.14.045c.147.045.295.104.449.13C22.164 17.206 24 11.098 24 11.098c-1.653 2.38-4.852 3.513-8.261 2.628a8 8 0 0 1-.449-.13c-.048-.014-.09-.029-.136-.043c-.104-.036-.211-.07-.312-.109l-.144-.054c-.113-.045-.227-.087-.336-.135c-.034-.015-.065-.025-.091-.04q-.211-.093-.418-.192l-.206-.107l-.119-.06a6 6 0 0 1-.265-.15l-.062-.035c-.106-.066-.217-.13-.318-.198q-.05-.03-.097-.062l-.208-.136c-.144-.1-.285-.208-.428-.313q-.048-.042-.094-.079c-1.499-1.178-2.681-2.79-3.242-4.613c-.59-1.897-.46-4.023.56-5.75m4.292-.147c-.909 1.334-.996 2.99-.37 4.46c.665 1.563 2.024 2.79 3.608 3.37q.096.036.196.07l.088.027c.092.03.185.063.28.084c4.381.845 5.567-2.25 5.886-2.704c-1.043 1.498-2.792 1.857-4.938 1.335a5 5 0 0 1-.516-.16a6 6 0 0 1-.618-.254a6.5 6.5 0 0 1-1.082-.66c-1.922-1.457-3.113-4.236-1.859-6.5" fill="currentColor"></path>
</svg>
<span className="font-medium text-lg text-white font-sans">
                jQuery
              </span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl text-white iconify--simple-icons" data-icon="simple-icons:openstack" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M18.575 9.29h5.418v5.42h-5.418zM0 9.29h5.419v5.42H0zm18.575 7.827a1.207 1.207 0 0 1-1.206 1.206H6.623a1.207 1.207 0 0 1-1.205-1.206v-.858H0v5.252a2.236 2.236 0 0 0 2.229 2.23h19.53A2.237 2.237 0 0 0 24 21.512V16.26h-5.425zM21.763.258H2.233a2.236 2.236 0 0 0-2.23 2.23V7.74h5.419v-.858a1.206 1.206 0 0 1 1.205-1.206h10.746a1.206 1.206 0 0 1 1.205 1.206v.858H24V2.487A2.237 2.237 0 0 0 21.763.258" fill="currentColor"></path>
</svg>
<span className="font-medium text-lg text-white font-sans">
                openstack
              </span>
</div>
<div className="group flex items-center gap-2">
<span className="iconify text-xl text-white" data-icon="simple-icons:servicenow"></span>
<span className="font-medium text-lg text-white tracking-tight font-sans">
                servicenow
              </span>
</div>
<div className="group flex items-center gap-2">
<span className="font-bold text-xl text-white tracking-tight font-sans">
                paysafe:
              </span>
</div>
</div>
</div>
</div>
</section>
<section className="w-full max-w-7xl z-20 mt-24 mr-auto mb-24 ml-auto pt-10 pr-2 pb-32 pl-2 relative">

<div className="mb-16 text-center [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight font-manrope mb-4">
          Powerful Features
        </h2>
<p className="text-lg text-gray-400 font-sans max-w-2xl mx-auto">
          Everything you need to create, collaborate, and convert. Built for
          modern teams.
        </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-6 gap-6 gap-x-6 gap-y-6">

<div className="lg:col-span-2 group overflow-hidden hover:border-white/20 transition-all duration-300 border-dashed bg-black border-zinc-800 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">
<div className="relative z-10 h-full flex flex-col">
<div className="mb-8">
<h3 className="text-2xl font-semibold text-white font-manrope mb-2 tracking-tight">
                Brand Identity
              </h3>
<p className="text-sm text-gray-400 font-sans leading-relaxed">
                Visual systems that tell your story. Logos, color palettes, and
                typography.
              </p>
</div>
<div className="overflow-hidden bg-black/20 w-full h-48 border-white/5 border rounded-none mt-auto relative">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
<div className="flex opacity-30 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<span className="text-6xl font-bold text-white/10 tracking-tighter">
                  Aa
                </span>
</div>
<button className="-translate-x-1/2 shadow-red-600/25 flex hover:scale-105 transition-transform group/btn text-sm font-medium text-white bg-[#ef233c] border-red-600/20 border rounded-none pt-2.5 pr-5 pb-2.5 pl-5 absolute bottom-6 left-1/2 shadow-sm gap-x-2 gap-y-2 items-center">
<svg className="animate-pulse" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
                Start Project
              </button>
</div>
</div>
</div>

<div className="lg:col-span-2 group overflow-hidden hover:border-white/20 transition-all duration-300 bg-zinc-900/40 border-white/10 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll">
<div className="relative z-10 h-full flex flex-col">
<div className="mb-8">
<h3 className="text-2xl font-semibold text-white font-manrope mb-2 tracking-tight">
                Web Design
              </h3>
<p className="text-sm text-gray-400 font-sans leading-relaxed">
                Immersive web experiences designed to convert visitors into
                loyal customers.
              </p>
</div>
<div className="flex flex-col overflow-hidden bg-black/20 w-full h-48 border-white/5 border rounded-none mt-auto pt-4 pr-4 pb-4 pl-4 relative justify-end">
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
<div className="transform transition-transform group-hover:-translate-y-1 duration-500 bg-zinc-900 w-full border-white/10 border rounded-none pt-4 pr-4 pb-4 pl-4 relative shadow-xl">
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] uppercase font-bold text-[#ef233c] tracking-wider">
                    Concept A
                  </span>
</div>
<h4 className="text-sm font-medium text-white mb-1">
                  Visual Impact
                </h4>
<p className="text-xs text-zinc-500 leading-relaxed">
                  Strategic layout designed for maximum user retention.
                </p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 group overflow-hidden hover:border-white/20 transition-all duration-300 bg-zinc-900/40 border-white/10 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll">
<div className="relative z-10 h-full flex flex-col">
<div className="mb-8">
<h3 className="text-2xl font-semibold text-white font-manrope mb-2 tracking-tight">
                Art Direction
              </h3>
<p className="text-sm text-gray-400 font-sans leading-relaxed">
                Defining the visual language, photography, and tone for your
                brand.
              </p>
</div>
<div className="flex overflow-hidden bg-black/20 w-full h-48 border-white/5 border rounded-none mt-auto pt-6 pr-6 pb-6 pl-6 relative items-center justify-center">
<div className="w-full max-w-[200px] space-y-4">
<div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-4">
                  Style Settings
                </div>
<div className="relative pl-4">
<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-zinc-800 rounded-full"></div>
<div className="w-0.5 bg-[#ef233c] h-6 rounded-full absolute top-0 left-0 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
<div className="space-y-3">
<div className="flex items-center gap-3">
<span className="text-lg font-medium text-white">
                        Cinematic
                      </span>
</div>
<div className="flex items-center gap-3 opacity-40">
<span className="text-base font-medium text-zinc-400">
                        Minimalist
                      </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 group overflow-hidden hover:border-white/20 transition-all duration-300 border-dashed bg-black border-zinc-800 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll">
<div className="relative z-10 h-full flex flex-col">
<div className="mb-8 max-w-sm">
<h3 className="text-2xl font-semibold text-white font-manrope mb-2 tracking-tight">
                Strategy
              </h3>
<p className="text-sm text-gray-400 font-sans leading-relaxed">
                Data-driven insights to position your brand for market
                leadership.
              </p>
</div>
<div className="mt-auto relative w-full h-[280px] rounded-xl border border-white/5 bg-black/20 p-8 overflow-hidden">
<div className="space-y-4 opacity-40 select-none blur-[1px] group-hover:blur-0 transition-all duration-500">
<p className="text-lg text-zinc-300 leading-relaxed font-serif">
                  Our launch strategy focuses on aggressive growth —
                  <span className="bg-red-600/20 text-red-200 px-1 rounded">
                    market penetration
                  </span>
                  and brand equity.
                </p>
</div>
<div className="-translate-x-1/2 -translate-y-1/2 transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-[60%] bg-zinc-900 w-72 border-white/10 border rounded-none pt-4 pr-4 pb-4 pl-4 absolute top-1/2 left-1/2 shadow-2xl">
<div className="flex items-start gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 border border-white/10 flex items-center justify-center">
<span className="text-xs font-bold text-zinc-300">ST</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<span className="text-sm font-semibold text-white">
                        Strategy Team
                      </span>
</div>
<p className="text-xs text-zinc-300 leading-relaxed">
                      Target audience analysis complete.
                    </p>
</div>
</div>
<div className="flex gap-2 mt-2">
<button className="flex-1 hover:bg-red-700 transition-colors shadow-red-600/20 flex text-xs font-medium text-white bg-[#ef233c] rounded-none pt-1.5 pr-3 pb-1.5 pl-3 shadow-lg gap-x-1.5 gap-y-1.5 items-center justify-center">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                    Approve
                  </button>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 group overflow-hidden hover:border-white/20 transition-all duration-300 bg-zinc-900/40 border-white/10 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm [animation:fadeSlideIn_1s_ease-out_0.7s_both] animate-on-scroll">
<div className="relative z-10 h-full flex flex-col">
<div className="mb-8 max-w-sm">
<h3 className="text-2xl font-semibold text-white font-manrope mb-2 tracking-tight">
                Content Production
              </h3>
<p className="text-sm text-gray-400 font-sans leading-relaxed">
                High-quality asset creation, from photography to 3D motion
                design.
              </p>
</div>
<div className="flex overflow-hidden bg-black/20 w-full h-[280px] border-white/5 border rounded-none mt-auto pt-8 pr-8 pb-8 pl-8 relative items-center justify-center">
<div className="-translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-red-600/5 to-transparent opacity-50 w-full h-full absolute top-1/2 left-1/2"></div>
<div className="relative w-full max-w-md">
<h4 className="text-2xl md:text-3xl font-medium text-zinc-500 text-center leading-tight font-manrope">
                  Create with
                  <span className="inline-block transition-colors duration-300 text-white bg-[#ef233c]/10 rounded-lg px-1 relative">
                    passion.
                    <span className="-right-0.5 w-0.5 animate-pulse bg-[#ef233c] absolute top-0 bottom-0"></span>
</span>
</h4>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden w-full max-w-7xl z-20 mt-0 mr-auto mb-32 ml-auto pt-20 pb-20 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none z-0">
<h2 className="text-[15vw] leading-none font-semibold text-white/[0.02] text-center whitespace-nowrap font-manrope tracking-tighter">
          REVIEWS
        </h2>
</div>

<div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-[120px] pointer-events-none select-none -z-10 mix-blend-screen bg-red-600/10"></div>
<div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none select-none -z-10 mix-blend-screen"></div>
<div className="z-10 pr-6 pl-6 relative">

<div className="text-center mb-20 max-w-3xl mx-auto [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">

<h3 className="leading-[1.1] md:text-6xl text-4xl font-normal text-white tracking-tight font-manrope mb-6">
            Loved by
            <span className="text-zinc-500">passionate</span>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
              builders
            </span>
</h3>
<p className="text-lg text-zinc-400 font-sans leading-relaxed max-w-2xl mx-auto">
            Join thousands of developers and designers who rely on our tools to
            ship better products, faster.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">

<div className="flex flex-col gap-6">

<div className="group hover:border-white/10 transition-all duration-300 overflow-hidden border-dashed bg-black/50 border-zinc-800 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">
<div className="flex items-center gap-1 mb-6 text-zinc-300">
<svg className="lucide lucide-star" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<p className="text-zinc-300 font-sans leading-relaxed text-base mb-8">
                "This platform completely changed how we approach design
                systems. The speed and consistency we've achieved is
                mind-blowing. It's the standard we've been looking for."
              </p>
<div className="flex items-center gap-4 border-t border-white/5 pt-6">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 overflow-hidden ring-2 ring-white/5">
<img alt="Sarah" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop"/>
</div>
<div>
<div className="text-sm font-semibold text-white font-manrope">
                    Sarah Jenkins
                  </div>
<div className="text-xs text-zinc-500 font-medium">
                    Product Designer at Stripe
                  </div>
</div>
</div>
</div>

<div className="group hover:border-white/10 transition-all duration-300 overflow-hidden bg-zinc-900/40 border-white/5 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll">
<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold border border-blue-500/20 text-xs">
                    JD
                  </div>
<div>
<div className="text-sm font-semibold text-white font-manrope">
                      James Doe
                    </div>
<div className="text-xs text-zinc-500 font-medium">
                      @jamesbuilds
                    </div>
</div>
</div>
<svg className="text-zinc-700 opacity-50 group-hover:opacity-100 transition-opacity" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</div>
<p className="text-zinc-300 font-sans leading-relaxed text-base">
                Just shipped my portfolio using the new components. The
                attention to detail is insane. 🚀
              </p>
</div>
</div>

<div className="flex flex-col gap-6 md:pt-12">

<div className="group hover:border-white/20 transition-all duration-300 overflow-hidden shadow-black/20 border-dashed bg-black border-zinc-700 border rounded-none pt-8 pr-8 pb-8 pl-8 relative shadow-2xl backdrop-blur-md [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll">

<svg className="mb-8 opacity-90 text-zinc-200" fill="currentColor" height="32" stroke="none" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
<path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
</svg>
<p className="text-xl text-white font-manrope font-medium leading-relaxed mb-8 tracking-tight">
                "I've used every UI kit out there. Nothing comes close to the
                polish and flexibility of this one. It's not just a library,
                it's a design education."
              </p>
<div className="flex items-center gap-4 border-t border-white/5 pt-6">
<div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 overflow-hidden ring-2 ring-white/10">
<img alt="Michael" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
</div>
<div>
<div className="text-base font-semibold text-white font-manrope">
                    Michael Chen
                  </div>
<div className="text-xs text-zinc-500 font-medium">
                    CTO at Vercel
                  </div>
</div>
</div>
</div>

<div className="group hover:border-white/10 transition-all duration-300 overflow-hidden bg-zinc-900/40 border-white/5 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll">
<p className="text-zinc-300 font-sans leading-relaxed text-base mb-8">
                "Finally, a tool that bridges the gap between design and code
                perfectly. Our developer handoff time has been cut in half."
              </p>
<div className="flex items-center gap-4 border-t border-white/5 pt-6">
<div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold border border-purple-500/20 text-xs">
                  EL
                </div>
<div>
<div className="text-sm font-semibold text-white font-manrope">
                    Elena Rodriguez
                  </div>
<div className="text-xs text-zinc-500 font-medium">
                    Frontend Lead
                  </div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6 md:col-span-2 lg:col-span-1">

<div className="group hover:border-white/10 transition-all duration-300 overflow-hidden bg-zinc-900/40 border-white/5 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-none [animation:fadeSlideIn_1s_ease-out_0.7s_both] animate-on-scroll">
<div className="flex items-center gap-1 mb-6 text-zinc-300">
<svg className="lucide lucide-star" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<p className="text-zinc-300 font-sans leading-relaxed text-base mb-8">
                "We redesigned our entire SaaS dashboard in a weekend. The
                components are not just beautiful, they're robust and
                accessible."
              </p>
<div className="flex items-center gap-4 border-t border-white/5 pt-6">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 overflow-hidden ring-2 ring-white/5">
<img alt="David" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop"/>
</div>
<div>
<div className="text-sm font-semibold text-white font-manrope">
                    David Kim
                  </div>
<div className="text-xs text-zinc-500 font-medium">
                    Founder at Stack
                  </div>
</div>
</div>
</div>

<div className="group hover:border-white/10 transition-all duration-300 overflow-hidden bg-zinc-900/40 border-white/5 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm [animation:fadeSlideIn_1s_ease-out_0.8s_both] animate-on-scroll">
<p className="text-zinc-300 font-sans leading-relaxed text-base mb-8">
                "Best investment we made for our design team this year. The ROI
                was immediate and the support is fantastic."
              </p>
<div className="flex items-center gap-4 border-t border-white/5 pt-6">
<div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold border border-emerald-500/20 text-xs">
                  AK
                </div>
<div>
<div className="text-sm font-semibold text-white font-manrope">
                    Anna K.
                  </div>
<div className="text-xs text-zinc-500 font-medium">
                    Director of Product
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="w-full max-w-7xl z-20 mt-0 mr-auto mb-32 ml-auto pt-6 pr-6 pb-6 pl-6 relative">

<div className="flex flex-col text-center mb-20 items-center [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-600/20 bg-red-600/5 mb-6">
<svg aria-hidden="true" className="iconify text-red-600 iconify--solar" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8" fill="currentColor" opacity=".5"></path>
<path d="M15 11h-1.5a.5.5 0 0 1 0-1h.632a1.326 1.326 0 0 0 0-2.652h-2.257V6.5a.5.5 0 0 0-1 0v.848h-.632a1.326 1.326 0 0 0 0 2.652h2.257V11a.5.5 0 0 1 0 1h-.632a1.326 1.326 0 0 0 0 2.652h2.257v.848a.5.5 0 0 0 1 0v-.848h.632a1.326 1.326 0 0 0 0-2.652H13.5V11" fill="currentColor"></path>
</svg>
<span className="text-xs font-semibold text-red-200 uppercase tracking-widest font-sans">
            Pricing
          </span>
</div>
<h2 className="md:text-7xl text-5xl font-medium text-white tracking-tighter font-manrope mb-6">
          Simple, transparent
          <span className="bg-clip-text text-transparent bg-[#ef233c]">
            pricing
          </span>
</h2>
<p className="text-xl text-gray-400 font-sans max-w-2xl leading-relaxed">
          Choose the perfect plan for your business needs. Pause or cancel
          anytime.
        </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 mb-12 pt-4 pr-4 pb-4 pl-4 gap-x-6 gap-y-6" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))'}}>

<div className="lg:col-span-4 flex flex-col h-full bg-black border p-8 md:p-10 hover:border-zinc-700 transition-colors duration-300 border-dashed border-zinc-800 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll">
<div className="mb-auto">
<h3 className="text-4xl font-medium text-white tracking-tighter font-manrope mb-4">
              Growth
            </h3>
<p className="text-zinc-400 text-base font-sans leading-relaxed mb-8 h-12">
              Perfect for growing businesses with steady design needs.
            </p>

<div className="inline-flex items-center border border-zinc-800 mb-8 w-fit bg-zinc-900/50 p-1 rounded-sm">
<button className="px-4 py-1.5 bg-zinc-700 text-white text-xs font-semibold font-sans rounded-sm shadow-sm transition-all">
                Monthly
              </button>
<button className="px-4 py-1.5 bg-transparent text-zinc-500 hover:text-zinc-300 text-xs font-medium font-sans transition-colors">
                Quarterly
              </button>
</div>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-[1.5rem] align-top text-zinc-400 font-medium translate-y-2">
                $
              </span>
<span className="text-6xl font-medium text-white tracking-tighter font-manrope">
                7,500
              </span>
<span className="text-zinc-500 text-lg font-normal font-sans">
                / mo
              </span>
</div>
<p className="text-zinc-500 text-sm font-sans mb-10">
              Pause or cancel anytime.
            </p>
<button className="group flex items-center justify-center gap-2 px-6 py-3 border border-zinc-700 text-white text-sm font-medium font-sans hover:bg-zinc-800 transition-all w-full">
              Get Started
            </button>
</div>
<div className="border-t border-zinc-800/80 my-10 w-full"></div>
<div>
<h4 className="text-sm font-medium text-white font-manrope mb-6 uppercase tracking-wider">
              What's included
            </h4>
<div className="space-y-4">
<div className="flex items-start gap-3">
<svg className="text-red-600 shrink-0 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm text-zinc-300 font-sans leading-snug">
                  45 hours of dedicated design time
                </span>
</div>
<div className="flex items-start gap-3">
<svg className="text-red-600 shrink-0 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm text-zinc-300 font-sans leading-snug">
                  Two active projects at a time
                </span>
</div>
<div className="flex items-start gap-3">
<svg className="text-red-600 shrink-0 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm text-zinc-300 font-sans leading-snug">
                  Twice-weekly syncs
                </span>
</div>
<div className="flex items-start gap-3">
<svg className="text-red-600 shrink-0 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm text-zinc-300 font-sans leading-snug">
                  24-hour response time
                </span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col h-full bg-zinc-900/30 border p-8 md:p-10 relative overflow-hidden transition-colors duration-300 border-dashed border-zinc-800 hover:border-zinc-700 [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-[#ef233c]/10 blur-[90px] rounded-full pointer-events-none"></div>
<div className="mb-auto relative z-10">
<div className="flex items-center justify-between mb-4">
<h3 className="text-4xl font-medium text-white tracking-tighter font-manrope">
                Scale
              </h3>
<span className="text-[10px] uppercase font-semibold text-white tracking-wider bg-[#ef233c] rounded-sm px-2 py-1 shadow-[0_0_10px_rgba(239,35,60,0.35)]">
                Most Popular
              </span>
</div>
<p className="text-zinc-400 text-base font-sans leading-relaxed mb-8 h-12">
              For teams that need to move fast and ship often.
            </p>

<div className="inline-flex items-center border border-zinc-800 mb-8 w-fit bg-zinc-900/50 p-1 rounded-sm">
<button className="px-4 py-1.5 bg-zinc-700 text-white text-xs font-semibold font-sans rounded-sm shadow-sm">
                Monthly
              </button>
<button className="px-4 py-1.5 bg-transparent text-zinc-500 hover:text-zinc-300 text-xs font-medium font-sans">
                Quarterly
              </button>
</div>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-[1.5rem] text-zinc-400 font-medium translate-y-2">
                $
              </span>
<span className="text-6xl font-medium text-white tracking-tighter font-manrope">
                15,000
              </span>
<span className="text-zinc-500 text-lg font-sans">/ mo</span>
</div>
<p className="text-zinc-500 text-sm font-sans mb-10">
              Pause or cancel anytime.
            </p>
<button className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black text-sm font-bold font-sans hover:bg-zinc-200 transition-all w-full">
              Get Started
            </button>
</div>
<div className="border-t border-zinc-800/80 my-10 w-full relative z-10"></div>
<div className="relative z-10">
<h4 className="text-sm font-medium text-white font-manrope mb-6 uppercase tracking-wider">
              Everything in Growth, plus:
            </h4>
<div className="space-y-4">
<div className="flex items-start gap-3">
<svg className="text-[#ef233c] shrink-0 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm text-zinc-300">
                  100 hours of dedicated design time
                </span>
</div>
<div className="flex items-start gap-3">
<svg className="text-[#ef233c] shrink-0 mt-0.5" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm text-zinc-300">
                  Unlimited active projects
                </span>
</div>
<div className="flex items-start gap-3">
<svg className="text-[#ef233c] shrink-0 mt-0.5" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm text-zinc-300">Daily syncs available</span>
</div>
<div className="flex items-start gap-3">
<svg className="text-[#ef233c] shrink-0 mt-0.5" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm text-zinc-300">
                  Same-day response time
                </span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-6 h-full [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll">

<div className="flex flex-col flex-1 bg-black border p-8 md:p-10 hover:border-zinc-700 transition-colors duration-300 border-dashed border-zinc-800">
<h3 className="text-4xl font-medium text-white tracking-tighter font-manrope mb-4">
              Custom
            </h3>
<p className="text-zinc-400 text-base font-sans leading-relaxed mb-auto">
              Clear scope, fixed timeline, no surprises.
            </p>
<div className="mt-8">
<p className="text-zinc-500 text-sm font-sans mb-1 uppercase tracking-wide font-medium">
                Starts at
              </p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-[1.5rem] align-top text-zinc-400 font-medium translate-y-2">
                  $
                </span>
<span className="text-6xl font-medium text-white tracking-tighter font-manrope">
                  10k
                </span>
</div>
<button className="group flex items-center justify-center gap-2 px-5 py-3 border border-zinc-700 text-white text-sm font-medium font-sans hover:bg-zinc-900 transition-all w-full">
                Book a Call
              </button>
</div>
</div>

<div className="flex flex-col flex-1 bg-black border border-zinc-800 p-6 md:p-8 hover:border-zinc-700 transition-colors duration-300">
<div className="flex items-center gap-4 mb-6">
<img alt="Profile" className="w-12 h-12 rounded bg-zinc-800 object-cover grayscale" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&amp;h=150&amp;fit=crop"/>
<div className="">
<h4 className="text-base font-medium text-white font-manrope">
                  Sarah Park
                </h4>
<p className="text-xs text-zinc-500 font-sans uppercase tracking-wide">
                  Project Manager
                </p>
</div>
</div>
<p className="text-zinc-400 text-sm font-sans leading-relaxed mb-6">
              "We'll help you choose the right plan and get you started within
              3-5 days."
            </p>
<div className="border-t border-zinc-800 w-full my-auto"></div>
<div className="flex items-center justify-between mt-6 pt-2">
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-white font-sans">
                  2 spots left for
                  <span className="text-zinc-400">July</span>
</span>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-center gap-6 px-4 [animation:fadeSlideIn_1s_ease-out_0.7s_both] animate-on-scroll">
<div className="flex items-center gap-2 text-zinc-500 text-sm font-sans">
<svg className="text-zinc-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
<span className="">30-day money-back guarantee</span>
</div>
<div className="w-1 h-1 rounded-full bg-zinc-800 hidden md:block"></div>
<div className="flex items-center gap-2 text-zinc-500 text-sm font-sans">
<svg className="text-zinc-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
</svg>
<span>Cancel anytime</span>
</div>
</div>
</section>
<section className="w-full max-w-7xl z-20 mt-32 mr-auto mb-32 ml-auto pr-6 pl-6 relative">
<div className="grid lg:grid-cols-12 gap-16 items-start">

<div className="lg:col-span-5 pt-4 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<h2 className="text-5xl md:text-6xl font-medium text-white tracking-tighter font-manrope mb-6 leading-[1.1]">
            Ready to launch your
            <span className="bg-clip-text text-transparent bg-[#ef233c]">
              vision?
            </span>
</h2>
<p className="text-lg text-zinc-400 font-sans leading-relaxed max-w-md">
            I work with brands that believe in quality design. Let's build
            something amazing together.
          </p>
</div>

<div className="lg:col-span-7 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll">
<form className="space-y-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-transparent focus:border-red-600 focus:outline-none transition-colors font-sans text-lg" id="name" placeholder="Name" required="" type="text"/>
<label className="absolute left-0 -top-5 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-red-600 font-sans uppercase tracking-wider font-medium" htmlFor="name">
                  Name
                </label>
</div>
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-transparent focus:border-red-600 focus:outline-none transition-colors font-sans text-lg" id="email" placeholder="Email" required="" type="email"/>
<label className="absolute left-0 -top-5 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-red-600 font-sans uppercase tracking-wider font-medium" htmlFor="email">
                  Email
                </label>
</div>
</div>
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-transparent focus:border-red-600 focus:outline-none transition-colors font-sans text-lg" id="project" placeholder="Project Type / Budget" type="text"/>
<label className="absolute left-0 -top-5 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-red-600 font-sans uppercase tracking-wider font-medium" htmlFor="project">
                Project Type / Budget
              </label>
</div>
<div className="group relative">
<textarea className="peer w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-transparent focus:border-red-600 focus:outline-none transition-colors font-sans text-lg resize-none" id="message" placeholder="Anything we should know?" rows="1"></textarea>
<label className="absolute left-0 -top-5 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-red-600 font-sans uppercase tracking-wider font-medium" htmlFor="message">
                Anything we should know?
              </label>
</div>
<div className="flex justify-end pt-8">
<button className="group flex min-w-[180px] decoration-0 transition-transform active:scale-95 cursor-pointer outline-none w-auto h-[50px] px-6 relative items-center justify-center" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', opacity: '1', border: 'none'}} type="button">

<div className="absolute inset-0 pointer-events-none transition-opacity ease-in-out duration-[1200ms] opacity-100 group-hover:opacity-0" style={{background: 'radial-gradient(15% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '8px', filter: 'blur(15px)'}}></div>

<div className="absolute inset-0 pointer-events-none transition-opacity ease-in-out duration-[1200ms] opacity-0 group-hover:opacity-100" style={{background: 'radial-gradient(60.6% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '8px', filter: 'blur(18px)'}}></div>

<div className="absolute inset-0 pointer-events-none will-change-auto transition-opacity ease-in-out duration-[1200ms] opacity-100 group-hover:opacity-0" style={{background: 'radial-gradient(10.7% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '8px'}}></div>

<div className="absolute inset-0 pointer-events-none will-change-auto transition-opacity ease-in-out duration-[1200ms] opacity-0 group-hover:opacity-100" style={{background: 'radial-gradient(60.1% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '8px'}}></div>

<div className="absolute inset-[1px] pointer-events-none z-10 rounded-[7px]" style={{backgroundColor: 'rgb(0, 0, 0)', opacity: '1'}}></div>

<div className="relative z-20 flex items-center justify-center gap-2 opacity-100">
<span className="m-0 p-0 font-sans text-[15px] font-medium text-white tracking-wide" style={{WebkitFontSmoothing: 'antialiased', textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>
                    Start Conversation
                  </span>
<svg className="lucide lucide-arrow-right transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</button>
</div>
</form>
</div>
</div>
</section>
<footer className="overflow-hidden border-dashed text-white bg-black w-full border-zinc-800 border-t relative">

<div className="w-full max-w-7xl mx-auto border-x border-dashed border-zinc-800">

<div className="grid lg:grid-cols-12">

<div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-dashed border-zinc-800 relative min-h-[360px] [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<div className="">

<div className="flex items-center gap-3 mb-8">
<div className="grid grid-cols-2 gap-1 w-8 h-8 opacity-90">
<div className="bg-[#ef233c] w-full h-full rounded-sm"></div>
<div className="w-full h-full bg-zinc-700 rounded-sm [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll"></div>
<div className="w-full h-full bg-zinc-800 rounded-sm"></div>
<div className="w-full h-full bg-white rounded-sm shadow-[0_0_10px_rgba(255,255,255,0.4)]"></div>
</div>
<span className="text-2xl font-bold text-white tracking-tight font-manrope">FUZONIX</span>
</div>
<p className="leading-relaxed text-sm font-medium text-zinc-400 max-w-sm mb-12">Custom software solutions and scalable systems for forward-thinking businesses.</p>
</div>

<div className="flex items-center gap-3 mt-auto">
<a className="w-10 h-10 flex items-center justify-center border border-dashed border-zinc-700 hover:border-red-600 hover:bg-red-600/10 hover:text-red-600 transition-all duration-300 rounded text-zinc-400 group" href="#">
<svg className="lucide lucide-instagram" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="w-10 h-10 flex items-center justify-center border border-dashed border-zinc-700 hover:border-red-600 hover:bg-red-600/10 hover:text-red-600 transition-all duration-300 rounded text-zinc-400 group" href="#">
<svg className="lucide lucide-twitter" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="w-10 h-10 flex items-center justify-center border border-dashed border-zinc-700 hover:border-red-600 hover:bg-red-600/10 hover:text-red-600 transition-all duration-300 rounded text-zinc-400 group" href="#">
<svg className="lucide lucide-globe" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
<path d="M2 12h20"></path>
</svg>
</a>
</div>
</div>

<div className="lg:col-span-7 p-8 md:p-12 bg-black/50">
<div className="grid grid-cols-2 md:grid-cols-3 gap-10 h-full content-start">

<div className="flex flex-col gap-8">
<h4 className="uppercase text-xs font-bold text-[#ef233c] tracking-widest font-manrope">
                  Map
                </h4>
<div className="flex flex-col gap-5">
<a className="group flex items-center justify-between text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">
                    FEATURES
                    <svg className="lucide lucide-chevron-right opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-red-600" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m9 18 6-6-6-6"></path>
</svg>
</a>
<a className="group flex items-center justify-between text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">
                    SERVICES
                    <svg className="lucide lucide-chevron-right opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-red-600" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
<a className="group flex items-center justify-between text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">
                    REVIEWS
                    <svg className="lucide lucide-chevron-right opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-red-600" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
<a className="group flex items-center justify-between text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">
                    FAQS
                    <svg className="lucide lucide-chevron-right opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-red-600" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
</div>
</div>

<div className="flex flex-col gap-8">
<h4 className="uppercase text-xs font-bold text-[#ef233c] tracking-widest font-manrope">
                  Company
                </h4>
<div className="flex flex-col gap-5">
<a className="group flex items-center justify-between text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">
                    HOME
                    <svg className="lucide lucide-chevron-right opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-red-600" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
<a className="group flex items-center justify-between text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">
                    ABOUT
                    <svg className="lucide lucide-chevron-right opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-red-600" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
<a className="group flex items-center justify-between text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">
                    PRICING
                    <svg className="lucide lucide-chevron-right opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-red-600" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
<a className="group flex items-center justify-between text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">
                    CONTACT
                    <svg className="lucide lucide-chevron-right opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-red-600" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
</div>
</div>

<div className="flex flex-col gap-8">
<h4 className="uppercase text-xs font-bold text-[#ef233c] tracking-widest font-manrope">
                  Legal
                </h4>
<div className="flex flex-col gap-5">
<a className="group flex items-center justify-between text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">
                    PRIVACY POLICY
                    <svg className="lucide lucide-chevron-right opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-red-600" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
<a className="group flex items-center justify-between text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">
                    TERMS &amp; CONDITIONS
                    <svg className="lucide lucide-chevron-right opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-red-600" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</div>

<div className="w-full border-t border-dashed border-zinc-800"></div>

</div>

<div className="w-full py-8 text-center border-t border-dashed border-zinc-800 bg-black z-20 relative [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll">
<p className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em] font-sans">
          Made with love by
          <a className="hover:text-white transition-colors text-[#ef233c]" href="#">© TRADING FUSION LLC</a>
</p>
</div>
</footer>


    </>
  );
}
