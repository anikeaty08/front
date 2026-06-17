import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
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
        


        document.getElementById('year').textContent = new Date().getFullYear();
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
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
<nav className="shadow-black/50 flex md:gap-12 md:w-auto bg-black/60 w-full max-w-5xl rounded-none pt-2 pr-2 pb-2 pl-6 shadow-2xl backdrop-blur-lg gap-x-8 gap-y-8 items-center justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2))', '--border-radius-before': '0'}}>
<div className="flex items-center gap-2 shrink-0">
<span className="text-base font-medium tracking-tight text-white font-sans">
            Creative
          </span>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors font-sans" href="#">
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

<span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#0169FF_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{}}></span>

<span className="absolute inset-0 rounded-none bg-zinc-800 transition-opacity duration-300 group-hover:opacity-0" style={{}}></span>

<span className="z-10 bg-black rounded-none absolute top-[1px] right-[1px] bottom-[1px] left-[1px]"></span>

<div className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 z-10" style={{background: 'radial-gradient(50% 50% at 50% 100%, rgba(1, 105, 255, 0.2) 0%, transparent 100%)'}}></div>

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

<div className="[animation:fadeSlideIn_1s_ease-out_0.8s_both] animate-on-scroll inline-flex transition-transform hover:scale-105 cursor-pointer group animate bg-gradient-to-br from-white/10 to-white/0 rounded-full mb-10 pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', '--border-radius-before': '9999px'}}>
<span className="flex h-1.5 w-1.5 rounded-full group-hover:animate-pulse bg-[#0169FF] shadow-[0_0_10px_rgba(1,105,255,0.5)]"></span>
<span className="text-xs font-medium tracking-wide group-hover:text-white transition-colors font-sans text-[#0169FF]/80">
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
<button className="group min-w-[180px] overflow-hidden z-10 cursor-pointer outline-none transition-all duration-300 active:scale-95 hover:shadow-[0_0_20px_rgba(1,105,255,0.4)] bg-black w-auto h-[50px] rounded-xl relative" type="button">

<div className="-translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 blur-[12px] group-hover:animate-[spin_3s_linear_infinite] transition-all duration-700 bg-gradient-to-tr from-[#0169FF] via-[#57A1FF] to-[#0169FF] opacity-60 w-[250%] h-[500%] absolute top-1/2 left-1/2"></div>

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
<a className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white border-b border-transparent hover:border-white transition-all pb-0.5 group font-sans" href="#">
            Read the story
            <svg className="lucide lucide-arrow-right w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
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
<path d="M1.525 5.87c-2.126 3.054-1.862 7.026-.237 10.269q.057.117.118.229q.035.076.077.15q.021.042.047.082q.04.078.081.152l.157.266c.03.049.057.097.09.146c.056.094.12.187.178.281q.037.06.079.117a6 6 0 0 0 .31.445q.115.16.24.315l.086.115l.22.269c.028.03.055.067.084.099q.148.176.306.35l.005.006a3 3 0 0 0 .425.44q.119.125.245.245l.101.097q.165.158.34.309q.002 0 .005.003l.057.05q.153.135.31.26l.125.105l.26.2l.137.105c.093.07.192.139.287.207q.052.038.106.073l.03.023l.28.185l.12.08q.221.14.44.272q.063.031.123.068q.164.095.329.183q.09.05.184.094q.113.062.234.125a.3.3 0 0 1 .056.023l.096.047q.18.09.375.175q.037.014.076.034q.215.094.438.182c.034.01.07.027.105.04q.204.078.411.152l.05.018q.23.078.46.15l.111.033c.16.048.314.105.474.137c10.273 1.872 13.258-6.177 13.258-6.177c-2.508 3.266-6.958 4.127-11.174 3.169c-.156-.036-.312-.086-.47-.132a14 14 0 0 1-.567-.182l-.062-.024q-.202-.07-.4-.148l-.11-.04q-.22-.09-.433-.184c-.031-.01-.057-.024-.088-.036l-.362-.17l-.106-.052c-.094-.044-.188-.095-.28-.143a4 4 0 0 1-.187-.096c-.114-.06-.227-.125-.34-.187q-.052-.035-.112-.066a16 16 0 0 1-.439-.27a2 2 0 0 1-.118-.078a6 6 0 0 1-.312-.207l-.103-.073a10 10 0 0 1-.295-.212q-.064-.05-.132-.1c-.088-.07-.177-.135-.265-.208l-.118-.095a11 11 0 0 1-.335-.28l-.037-.031l-.347-.316l-.1-.094q-.123-.125-.25-.246l-.098-.1a9 9 0 0 1-.309-.323l-.015-.016q-.159-.174-.313-.355q-.04-.046-.08-.097l-.227-.277a21 21 0 0 1-.34-.449C2.152 11.79 1.306 7.384 3.177 3.771m4.943-.473c-1.54 2.211-1.454 5.169-.254 7.508a9 9 0 0 0 .678 1.133c.23.33.484.721.793.988q.162.181.344.36l.09.09q.172.164.35.325l.016.013a10 10 0 0 0 .414.342c.034 .023.063 .05.096 .073q.21 .161.428 .316l.015 .009q.093 .066.198 .13c.028 .018.06 .042.09 .06q.158 .1.318 .197l.048 .023c.09 .055.188 .108.282 .157c.033 .02.065 .035.1 .054q.1 .05.197 .102l.032 .014q.204 .1.408 .19q.05 .02.092 .039q.167 .072.336 .137c.05 .017.097 .037.144 .052c.102 .038.21 .073.31 .108l.14 .045c.147 .045.295 .104.449 .13C22.164 17.206 24 11.098 24 11.098c-1.653 2.38-4.852 3.513-8.261 2.628a8 8 0 0 1-.449-.13c-.048-.014-.09-.029-.136-.043c-.104-.036-.211-.07-.312-.109l-.144-.054c-.113-.045-.227-.087-.336-.135c-.034-.015-.065-.025-.091-.04q-.211-.093-.418-.192l-.206-.107l-.119-.06a6 6 0 0 1-.265-.15l-.062-.035c-.106-.066-.217-.13-.318-.198q-.05-.03-.097-.062l-.208-.136c-.144-.1-.285-.208-.428-.313q-.048-.042-.094-.079c-1.499-1.178-2.681-2.79-3.242-4.613c-.59-1.897-.46-4.023.56-5.75m4.292-.147c-.909 1.334-.996 2.99-.37 4.46c.665 1.563 2.024 2.79 3.608 3.37q.096.036.196.07l.088.027c.092.03.185.063.28.084c4.381.845 5.567-2.25 5.886-2.704c-1.043 1.498-2.792 1.857-4.938 1.335a5 5 0 0 1-.516-.16a6 6 0 0 1-.618-.254a6.5 6.5 0 0 1-1.082-.66c-1.922-1.457-3.113-4.236-1.859-6.5" fill="currentColor"></path>
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
<path d="M1.525 5.87c-2.126 3.054-1.862 7.026-.237 10.269q.057.117.118.229q.035.076.077.15q.021.042.047.082q.04.078.081.152l.157.266c.03.049.057.097.09.146c.056.094.12.187.178.281q.037.06.079.117a6 6 0 0 0 .31.445q.115.16.24.315l.086.115l.22.269c.028.03.055.067.084.099q.148.176.306.35l.005.006a3 3 0 0 0 .425.44q.119.125.245.245l.101.097q.165.158.34.309q.002 0 .005.003l.057.05q.153.135.31.26l.125.105l.26.2l.137.105c.093.07.192.139.287.207q.052.038.106.073l.03.023l.28.185l.12.08q.221.14.44.272q.063.031.123.068q.164.095.329.183q.09.05.184.094q.113.062.234.125a.3.3 0 0 1 .056.023l.096.047q.18.09.375.175q.037.014.076.034q.215.094.438.182c.034.01.07.027.105.04q.204.078.411.152l.05.018q.23.078.46.15l.111.033c.16.048.314.105.474.137c10.273 1.872 13.258-6.177 13.258-6.177c-2.508 3.266-6.958 4.127-11.174 3.169c-.156-.036-.312-.086-.470-.132a14 14 0 0 1-.567-.182l-.062-.024q-.202-.07-.4-.148l-.11-.04q-.22-.09-.433-.184c-.031-.01-.057-.024-.088-.036l-.362-.17l-.106-.052c-.094-.044-.188-.095-.28-.143a4 4 0 0 1-.187-.096c-.114-.06-.227-.125-.34-.187q-.052-.035-.112-.066a16 16 0 0 1-.439-.27a2 2 0 0 1-.118-.078a6 6 0 0 1-.312-.207l-.103-.073a10 10 0 0 1-.295-.212q-.064-.05-.132-.1c-.088-.07-.177-.135-.265-.208l-.118-.095a11 11 0 0 1-.335-.28l-.037-.031l-.347-.316l-.1-.094q-.123-.125-.25-.246l-.098-.1a9 9 0 0 1-.309-.323l-.015-.016q-.159-.174-.313-.355q-.04-.046-.08-.097l-.227-.277a21 21 0 0 1-.34-.449C2.152 11.79 1.306 7.384 3.177 3.771m4.943-.473c-1.54 2.211-1.454 5.169-.254 7.508a9 9 0 0 0 .678 1.133c.23.33.484.721.793.988q.162.181.344.36l.09.09q.172.164.35.325l.016.013a10 10 0 0 0 .414.342c.034.023.063.05.096.073q.21.161.428.316l.015.009q.093.066.198.13c.028.018.06.042.09.06q.158.1.318.197l.048.023c.09.055.188.108.282.157c.033.02.065.035.1.054q.1.05.197.102l.032.014q.204.1.408.19q.05.02.092.039q.167.072.336.137c.05.017.097.037.144.052c.102.038.21.073.31.108l.14.045c.147.045.295.104.449.13C22.164 17.206 24 11.098 24 11.098c-1.653 2.38-4.852 3.513-8.261 2.628a8 8 0 0 1-.449-.13c-.048-.014-.09-.029-.136-.043c-.104-.036-.211-.07-.312-.109l-.144-.054c-.113-.045-.227-.087-.336-.135c-.034-.015-.065-.025-.091-.04q-.211-.093-.418-.192l-.206-.107l-.119-.06a6 6 0 0 1-.265-.15l-.062-.035c-.106-.066-.217-.13-.318-.198q-.05-.03-.097-.062l-.208-.136c-.144-.1-.285-.208-.428-.313q-.048-.042-.094-.079c-1.499-1.178-2.681-2.79-3.242-4.613c-.59-1.897-.46-4.023.56-5.75m4.292-.147c-.909 1.334-.996 2.99-.37 4.46c.665 1.563 2.024 2.79 3.608 3.37q.096.036.196.07l.088.027c.092.03.185.063.28.084c4.381.845 5.567-2.25 5.886-2.704c-1.043 1.498-2.792 1.857-4.938 1.335a5 5 0 0 1-.516-.16a6 6 0 0 1-.618-.254a6.5 6.5 0 0 1-1.082-.66c-1.922-1.457-3.113-4.236-1.859-6.5" fill="currentColor"></path>
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
<button className="-translate-x-1/2 shadow-[0_0_20px_rgba(1,105,255,0.25)] flex hover:scale-105 transition-transform group/btn text-sm font-medium text-white bg-[#0169FF] border-[#0169FF]/20 border rounded-none pt-2.5 pr-5 pb-2.5 pl-5 absolute bottom-6 left-1/2 shadow-sm gap-x-2 gap-y-2 items-center">
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
<span className="text-[10px] uppercase font-bold text-[#0169FF] tracking-wider">
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
<div className="w-0.5 bg-[#0169FF] h-6 rounded-full absolute top-0 left-0 shadow-[0_0_10px_rgba(1,105,255,0.8)]"></div>
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
                  <span className="bg-[#0169FF]/20 text-[#9EC7FF] px-1 rounded">
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
<button className="flex-1 hover:bg-[#0159DB] transition-colors shadow-[0_0_12px_rgba(1,105,255,0.2)] flex text-xs font-medium text-white bg-[#0169FF] rounded-none pt-1.5 pr-3 pb-1.5 pl-3 gap-x-1.5 gap-y-1.5 items-center justify-center">
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
<div className="-translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-[#0169FF]/5 to-transparent opacity-50 w-full h-full absolute top-1/2 left-1/2"></div>
<div className="relative w-full max-w-md">
<h4 className="text-2xl md:text-3xl font-medium text-zinc-500 text-center leading-tight font-manrope">
                  Create with
                  <span className="inline-block transition-colors duration-300 text-white bg-[#0169FF]/10 rounded-lg px-1 relative">
                    passion.
                    <span className="-right-0.5 w-0.5 animate-pulse bg-[#0169FF] absolute top-0 bottom-0"></span>
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

<div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-[120px] pointer-events-none select-none -z-10 mix-blend-screen bg-[#0169FF]/10"></div>
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
                "Clean, modern, and fast. Swapping components, tweaking tokens, and shipping pages has never been this smooth for our team."
              </p>
<div className="flex items-center gap-4 border-t border-white/5 pt-6">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 overflow-hidden ring-2 ring-white/5">
<img alt="Ava" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop"/>
</div>
<div>
<div className="text-sm font-semibold text-white font-manrope">
                    Ava Patel
                  </div>
<div className="text-xs text-zinc-500 font-medium">
                    Design Manager
                  </div>
</div>
</div>
</div>

<div className="group hover:border-white/10 transition-all duration-300 overflow-hidden border-dashed bg-black/40 border-zinc-800 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm [animation:fadeSlideIn_1s_ease-out_0.8s_both] animate-on-scroll">
<div className="flex items-center gap-2 mb-4">
<div className="w-9 h-9 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold border border-emerald-500/20 text-xs">
                  TK
                </div>
<div>
<div className="text-sm font-semibold text-white font-manrope">
                    Tom Keller
                  </div>
<div className="text-xs text-zinc-500 font-medium">
                    Indie Maker
                  </div>
</div>
</div>
<p className="text-zinc-300 font-sans leading-relaxed text-sm">
                Shaved days off my landing page builds. The presets and motion utilities are clutch.
              </p>
<div className="mt-6 flex items-center gap-1 text-[#0169FF]">
<svg className="lucide lucide-sparkles" fill="currentColor" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 3v2m0 0v2m0-2h2M5 5H3m11.5 4.5v1m0 0v1m0-1h1m-1 0h-1M9 13l1 3l3 1l-3 1l-1 3l-1-3l-3-1l3-1l1-3Z"></path>
</svg>
<span className="text-xs font-medium">Time saved: ~12h/wk</span>
</div>
</div>
</div>
</div>

<div className="mt-16 flex flex-col items-center text-center [animation:fadeSlideIn_1s_ease-out_0.9s_both] animate-on-scroll">
<p className="text-sm uppercase tracking-widest text-zinc-500 font-medium mb-4">
            Ready to elevate your brand?
          </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="shiny-cta">
<span>Start Your Project</span>
</button>
<a className="text-sm text-zinc-400 hover:text-white transition-colors underline-offset-4 hover:underline" href="#">
              Explore case studies
            </a>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 md:px-8 pb-28 relative">
<div className="absolute inset-x-0 -top-10 mx-auto w-[90%] h-48 rounded-full blur-[120px] bg-[#0169FF]/5 pointer-events-none -z-10"></div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="col-span-1 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight font-manrope mb-4">
            From idea to experience
          </h3>
<p className="text-zinc-400 leading-relaxed">
            A pragmatic, outcome-focused process that blends strategy, design, and code.
          </p>
</div>
<div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="group border border-white/10 bg-zinc-900/30 rounded-xl p-6 relative overflow-hidden [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">
<div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-[#0169FF]/10 blur-2xl"></div>
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-md bg-[#0169FF]/20 border border-[#0169FF]/30 flex items-center justify-center text-[#9EC7FF]">
                1
              </div>
<h4 className="text-white font-semibold">Discover</h4>
</div>
<p className="text-sm text-zinc-400">
              Align on goals, audience, and constraints. Define measurable KPIs for launch.
            </p>
</div>
<div className="group border border-white/10 bg-zinc-900/30 rounded-xl p-6 relative overflow-hidden [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll">
<div className="absolute -left-6 -bottom-6 w-24 h-24 rounded-full bg-[#0169FF]/10 blur-2xl"></div>
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-md bg-[#0169FF]/20 border border-[#0169FF]/30 flex items-center justify-center text-[#9EC7FF]">
                2
              </div>
<h4 className="text-white font-semibold">Design</h4>
</div>
<p className="text-sm text-zinc-400">
              Design systems, flows, and visuals that are accessible and on-brand.
            </p>
</div>
<div className="group border border-white/10 bg-zinc-900/30 rounded-xl p-6 relative overflow-hidden [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll">
<div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-[#0169FF]/10 blur-2xl"></div>
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-md bg-[#0169FF]/20 border border-[#0169FF]/30 flex items-center justify-center text-[#9EC7FF]">
                3
              </div>
<h4 className="text-white font-semibold">Develop</h4>
</div>
<p className="text-sm text-zinc-400">
              Ship performant, scalable code with modern tooling and CI/CD.
            </p>
</div>
<div className="group border border-white/10 bg-zinc-900/30 rounded-xl p-6 relative overflow-hidden [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll">
<div className="absolute left-1/2 -translate-x-1/2 -top-10 w-40 h-40 rounded-full bg-[#0169FF]/10 blur-3xl"></div>
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-md bg-[#0169FF]/20 border border-[#0169FF]/30 flex items-center justify-center text-[#9EC7FF]">
                4
              </div>
<h4 className="text-white font-semibold">Launch &amp; iterate</h4>
</div>
<p className="text-sm text-zinc-400">
              Measure, learn, and iterate quickly to maximize impact.
            </p>
</div>
</div>
</div>
</section>

<section className="relative w-full max-w-6xl mx-auto px-6 md:px-8 pb-28">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/60 to-black p-10 md:p-14">
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(60% 50% at 100% 0%, rgba(1,105,255,0.15), transparent 60%), radial-gradient(60% 50% at 0% 100%, rgba(1,105,255,0.1), transparent 60%)'}}></div>
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
<div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight font-manrope text-white mb-3">
              Let’s build something exceptional
            </h3>
<p className="text-zinc-400 max-w-xl">
              I help ambitious teams ship brand, product, and web experiences that convert.
            </p>
</div>
<div className="flex items-center gap-4">
<button className="shiny-cta">
<span>Book a Discovery Call</span>
</button>
<a className="text-sm text-zinc-400 hover:text-white transition-colors underline-offset-4 hover:underline" href="#">
              Download capabilities deck
            </a>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 py-12">
<div className="max-w-7xl mx-auto px-6 md:px-8">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex h-2 w-2 rounded-full bg-[#0169FF] shadow-[0_0_14px_rgba(1,105,255,0.6)]"></span>
<span className="text-white font-medium">Creative</span>
</div>
<p className="text-sm text-zinc-500 max-w-sm">
              Crafting digital experiences at the intersection of design and engineering.
            </p>
</div>
<nav className="grid grid-cols-2 sm:flex sm:flex-row gap-6 text-sm">
<a className="text-zinc-400 hover:text-white transition-colors" href="#">Work</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">Services</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">About</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">Contact</a>
</nav>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="text-xs text-zinc-600">
            © <span id="year"></span> Creative. All rights reserved.
          </div>
<div className="flex items-center gap-4 text-zinc-500">
<a aria-label="Twitter" className="hover:text-white transition-colors" href="#">
<svg fill="currentColor" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="Dribbble" className="hover:text-white transition-colors" href="#">
<svg fill="currentColor" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2m6.32 4.94a8.39 8.39 0 0 1 1.86 5.33c-.77-.15-3.3-.57-5.93-.26c-.06-.15-.12-.3-.2-.45a30 30 0 0 0-.89-1.66c3.56-1.45 5.06-2.96 5.16-2.96M12 3.62c2.02 0 3.87.74 5.29 1.94c-.08.08-1.43 1.38-4.8 2.67a34 34 0 0 0-3.52-5.6A8.3 8.3 0 0 1 12 3.62M8.6 4.35a32 32 0 0 1 3.45 5.51c-4.5 1.2-8.72 1.18-9.26 1.17A8.38 8.38 0 0 1 8.6 4.35M3.14 12.1v-.1c.55.01 5.53.06 10.32-1.5c.29.5.55 1 .78 1.53c-.12.04-.25.08-.38.12c-5.27 1.7-7.63 5.1-7.9 5.5a8.36 8.36 0 0 1-2.82-5.55m8.86 8.27a8.33 8.33 0 0 1-5.1-1.72c.19-.36 2.16-3.8 7.68-5.58c.03-.01.05-.01.08-.02c1.37 3.58 1.93 6.53 2.06 7.34a8.29 8.29 0 0 1-4.7-.02m6.36-2.82c-.09-.53-.58-3.21-1.86-6.66c2.48-.31 4.72.2 5.2.32a8.37 8.37 0 0 1-3.34 6.34"></path></svg>
</a>
<a aria-label="GitHub" className="hover:text-white transition-colors" href="#">
<svg fill="currentColor" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.38 7.86 10.9c.58.1.79-.25.79-.56v-2.1c-3.2.7-3.87-1.37-3.87-1.37c-.53-1.36-1.3-1.73-1.3-1.73c-1.06-.73.08-.72.08-.72c1.18.08 1.8 1.2 1.8 1.2c1.04 1.78 2.7 1.27 3.36.97c.1-.76.4-1.27.73-1.56c-2.56-.29-5.25-1.3-5.25-5.77c0-1.27.45-2.3 1.2-3.11c-.12-.29-.52-1.46.11-3.05c0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 5.84 0c2.22-1.5 3.2-1.19 3.2-1.19c.63 1.59.23 2.76.11 3.05c.75.82 1.2 1.84 1.2 3.1c0 4.48-2.7 5.49-5.27 5.78c.41.35.78 1.04.78 2.1v3.11c0 .31.21.66.79.55A11.5 11.5 0 0 0 23.5 12A11.5 11.5 0 0 0 12 .5Z"></path></svg>
</a>
</div>
</div>
</div>

</footer>

    </>
  );
}
