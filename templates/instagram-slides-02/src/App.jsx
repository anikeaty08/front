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



        // Existing Animation Observer
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
            }, { threshold: 0.2 });
            }

            window.initInViewAnimations = function (selector = ".animate-on-scroll") {
            document.querySelectorAll(selector).forEach((el) => {
                window.__inViewIO.observe(el);
            });
            };

            document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
        })();

        // Navigation Logic
        const sections = document.querySelectorAll('section');
        const dots = document.querySelectorAll('.nav-dot');
        const scroller = document.getElementById('main-scroll');
        let currentSectionIndex = 0;

        // Update Active Dot based on scroll
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = parseInt(entry.target.getAttribute('data-index'));
                    currentSectionIndex = index;
                    
                    // Update dots
                    dots.forEach(d => {
                        d.classList.remove('bg-white', 'scale-125');
                        d.classList.add('bg-white/20');
                    });
                    
                    // Highlight current dot
                    if(dots[index]) {
                        dots[index].classList.remove('bg-white/20');
                        dots[index].classList.add('bg-white', 'scale-125');
                    }
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => navObserver.observe(section));

        // Arrow Navigation
        window.navigateSlide = function(direction) {
            let nextIndex = currentSectionIndex + direction;
            
            // Clamp
            if (nextIndex < 0) nextIndex = 0;
            if (nextIndex >= sections.length) nextIndex = sections.length - 1;
            
            // Scroll
            const target = sections[nextIndex];
            if(target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    
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
      

<header className="fixed top-0 left-0 right-0 z-[60] px-4 md:px-8 py-4 md:py-6 flex justify-between items-center pointer-events-none">
<div className="pointer-events-auto">
<h1 className="text-xs md:text-sm font-semibold tracking-tight text-white uppercase opacity-90 backdrop-blur-md px-3 md:px-4 py-2 rounded-none bg-black/40">
                Instagram Slides
            </h1>
</div>
<div className="pointer-events-auto flex items-center gap-2 backdrop-blur-md p-2 rounded-full bg-black/40">
<button className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-white/70 hover:text-white" onclick="navigateSlide(-1)">
<iconify-icon className="md:w-6 md:h-6" icon="solar:alt-arrow-up-bold-duotone" width="20"></iconify-icon>
</button>
<div className="w-[1px] h-4 md:h-5 bg-white/10"></div>
<button className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-white/70 hover:text-white" onclick="navigateSlide(1)">
<iconify-icon className="md:w-6 md:h-6" icon="solar:alt-arrow-down-bold-duotone" width="20"></iconify-icon>
</button>
</div>
</header>

<div className="fixed right-8 top-1/2 -translate-y-1/2 z-[60] hidden md:flex flex-col gap-5" id="nav-dots">
<a aria-label="Go to slide 1" className="nav-dot w-2 h-2 rounded-full hover:bg-white transition-all duration-300" href="#section-1"></a>
<a aria-label="Go to slide 2" className="nav-dot w-2 h-2 rounded-full hover:bg-white transition-all duration-300" href="#section-2"></a>
<a aria-label="Go to slide 3" className="nav-dot w-2 h-2 rounded-full hover:bg-white transition-all duration-300" href="#section-3"></a>
<a aria-label="Go to slide 4" className="nav-dot w-2 h-2 rounded-full hover:bg-white transition-all duration-300" href="#section-4"></a>
<a aria-label="Go to slide 5" className="nav-dot w-2 h-2 rounded-full hover:bg-white transition-all duration-300" href="#section-5"></a>
<a aria-label="Go to slide 6" className="nav-dot w-2 h-2 rounded-full hover:bg-white transition-all duration-300" href="#section-6"></a>
<a aria-label="Go to slide 7" className="nav-dot w-2 h-2 rounded-full hover:bg-white transition-all duration-300" href="#section-7"></a>
<a aria-label="Go to slide 8" className="nav-dot w-2 h-2 rounded-full hover:bg-white transition-all duration-300" href="#section-8"></a>
</div>

<main className="overflow-y-scroll snap-y snap-mandatory scroll-smooth w-full h-screen relative" id="main-scroll">

<section className="snap-start shrink-0 flex w-full h-screen pt-0 pr-0 pb-0 pl-0 relative items-center justify-center" data-index="0" id="section-1">
<div className="h-full md:h-auto md:aspect-[3/4] glass-panel overflow-hidden flex flex-col group bg-center w-full max-w-none md:max-w-xl bg-cover rounded-none pt-20 md:pt-12 pr-6 md:pr-12 pb-12 pl-6 md:pl-12 relative shadow-2xl justify-between bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/53970266-f8db-425c-8883-5535f3e41c4d_1600w.webp)]" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex justify-between items-center opacity-70 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both] animate">
<span className="text-xs uppercase tracking-[0.25em] font-mono text-neutral-300">Mono V3.0</span>
<span className="text-xs font-mono text-neutral-400">01 / 08</span>
</div>
<div className="relative z-10 space-y-6 md:space-y-10">
<div className="flex animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] animate bg-gradient-to-br from-white/10 to-white/0 w-12 h-12 md:w-14 md:h-14 rounded-lg mb-4 md:mb-6 backdrop-blur-md items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '8px'}}>

<iconify-icon className="text-2xl md:text-3xl text-white" icon="solar:stars-minimalistic-bold-duotone"></iconify-icon>
</div>
<h1 className="leading-[0.9] animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] animate text-6xl md:text-8xl font-semibold text-white tracking-tighter">
          Gemini 3<br/>
<span className="font-light text-neutral-500">Motion</span>
</h1>
<p className="leading-relaxed animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both] animate text-sm md:text-base font-light text-neutral-300 max-w-[90%]">
          Monotone architecture. Precise physics. Pure neutral palette.
        </p>
</div>
<div className="space-y-6 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] animate">
<div className="h-[1px] w-full bg-white/20"></div>
<div className="flex justify-between items-end">
<div className="flex items-center gap-3 text-xs text-neutral-400 font-mono uppercase tracking-widest">
<span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
            Ready
          </div>
<iconify-icon className="text-2xl text-white animate-bounce" icon="solar:arrow-down-bold-duotone"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="snap-start shrink-0 flex w-full h-screen pt-0 pr-0 pb-0 pl-0 relative items-center justify-center" data-index="1" id="section-2">
<div className="h-full md:h-auto md:aspect-[3/4] glass-panel overflow-hidden flex flex-col bg-center w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d1e715c0-e250-4e7f-a4f5-433e96d81f31_1600w.webp)] max-w-none md:max-w-xl bg-cover rounded-none pt-20 md:pt-12 pr-6 md:pr-12 pb-12 pl-6 md:pl-12 relative">
<span className="text-xs uppercase tracking-[0.25em] font-mono text-neutral-400 mb-6 md:mb-10 block animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">02 — Intro</span>
<h2 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] text-4xl md:text-6xl font-medium text-white tracking-tight mb-4 md:mb-6">
        Enhance with<br/><span className="text-neutral-500">Motion</span></h2>
<p className="text-sm md:text-base text-neutral-400 mb-8 md:mb-12 leading-relaxed max-w-md animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both]">
        Structure: Hero intro, hover interactions, reveal.
      </p>
<div className="flex-1 bg-neutral-900/60 rounded-none p-4 md:p-6 relative overflow-hidden group animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both]">
<div className="bg-center bg-gradient-to-br from-black/10 to-black/0 opacity-100 absolute top-0 right-0 bottom-0 left-0 backdrop-blur-lg">
</div>
<div className="z-10 mt-2 relative space-y-4">
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.5s_both] bg-gradient-to-br from-white/10 to-white/0 w-2/3 h-8 rounded-none backdrop-blur">
</div>
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] bg-gradient-to-br from-white/10 to-white/0 w-full h-16 md:h-24 rounded-none backdrop-blur">
</div>
<div className="flex gap-3">
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.7s_both] bg-gradient-to-br from-white/10 to-white/0 w-1/2 h-16 md:h-20 rounded-none backdrop-blur">
</div>
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.8s_both] bg-gradient-to-br from-white/10 to-white/0 w-1/2 h-16 md:h-20 rounded-none backdrop-blur">
</div>
</div>
</div>
<div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md p-4 rounded-none animate-on-scroll [animation:animationIn_0.8s_ease-out_1s_both]">
<p className="leading-tight text-xs md:text-base text-neutral-300 font-mono">
            "Animate when in view: fade in, slide in, blur in..."
          </p>
</div>
</div>
</div>
</section>

<section className="snap-start shrink-0 flex w-full h-screen pt-0 pr-0 pb-0 pl-0 relative items-center justify-center" data-index="2" id="section-3">
<div className="h-full md:h-auto md:aspect-[3/4] glass-panel overflow-hidden flex flex-col bg-center w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6ea6d66c-a7a6-4548-9b3f-680a206078c3_1600w.webp)] max-w-none md:max-w-xl bg-cover rounded-none pt-20 md:pt-12 pr-6 md:pr-12 pb-12 pl-6 md:pl-12 relative items-center justify-center">
<div className="absolute top-20 md:top-12 left-6 md:left-12 right-6 md:right-12">
<span className="text-xs uppercase tracking-[0.25em] font-mono text-neutral-400">03 — Buttons</span>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mt-4">Beam Animation</h2>
</div>
<div className="group animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] mt-20 md:mt-80 relative scale-110 md:scale-125">
<div className="-inset-2 group-hover:opacity-100 transition duration-500 bg-neutral-600/30 opacity-0 rounded-full absolute blur-xl">
</div>

<div className="absolute -inset-[1px] rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] animate-[spin_2s_linear_infinite]"></div>
</div>
<button className="group relative z-10 flex items-center justify-center overflow-hidden rounded-full p-[1px] leading-none">
<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)]"></span>
<span className="relative flex h-full w-full items-center rounded-full bg-black pt-4 pr-10 pb-4 pl-10 ring-1 ring-white/10">
<span className="absolute inset-0 overflow-hidden rounded-full">
<span className="absolute top-0 left-0 h-full w-full -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:animate-[shimmer_1.5s_infinite] group-hover:opacity-100"></span>
</span>
<span className="relative z-10 flex items-center">
<span className="text-lg font-medium tracking-wide text-white">Get Access</span>
</span>
<span className="relative z-10 ml-4 flex items-center text-neutral-500 transition duration-200 group-hover:translate-x-1 group-hover:text-white">
<iconify-icon className="text-2xl" icon="solar:arrow-right-bold-duotone"></iconify-icon>
</span>
</span>
</button>
</div>
<div className="mt-20 p-6 border-l-2 border-white/20 rounded-none w-full animate-on-scroll [animation:animationIn_0.8s_ease-out_0.5s_both]">
<p className="leading-relaxed text-sm md:text-base text-neutral-400 font-mono">
<span className="text-white">Prompt:</span> "Add a 1px shimmer beam animation around the pill-shaped button on
          hover."
        </p>
</div>
</div>
</section>

<section className="h-screen w-full snap-start shrink-0 flex items-center justify-center relative p-0" data-index="3" id="section-4">
<div className="h-full md:h-auto md:aspect-[3/4] glass-panel overflow-hidden flex flex-col bg-neutral-900/50 w-full max-w-none md:max-w-xl rounded-none pt-20 md:pt-12 pr-6 md:pr-12 pb-12 pl-6 md:pl-12 relative justify-center">
<span className="absolute top-20 md:top-12 left-6 md:left-12 text-xs uppercase tracking-[0.25em] font-mono text-neutral-500 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">04 — Typography</span>
<div className="space-y-1">
<div className="flex animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
<h2 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter" style={{animationDelay: '0s'}}>Clip-path</h2>
</div>
<div className="flex animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both]">
<h2 className="text-5xl md:text-7xl font-semibold text-neutral-600 tracking-tighter" style={{animationDelay: '0.1s'}}>Typography</h2>
</div>
<div className="flex animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both]">
<h2 className="text-5xl md:text-7xl font-semibold text-neutral-800 tracking-tighter" style={{animationDelay: '0.2s'}}>Animation</h2>
</div>
</div>
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] text-sm md:text-base font-light text-neutral-500 border-neutral-800 border-l-2 mt-16 pl-6">
        "Add a vertical text clip slide down animation letter by letter"
      </div>
</div>
</section>

<section className="snap-start shrink-0 flex w-full h-screen pt-0 pr-0 pb-0 pl-0 relative items-center justify-center" data-index="4" id="section-5">
<div className="h-full md:h-auto md:aspect-[3/4] glass-panel overflow-hidden flex flex-col w-full max-w-none md:max-w-xl rounded-none p-0 relative justify-center bg-neutral-900/40">
<div className="p-6 md:p-12 pb-0">
<span className="text-xs uppercase tracking-[0.25em] font-mono text-neutral-500 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">05 — Social Proof</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mt-4 mb-8 md:mb-16 text-white animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
          Infinite Loop</h2>
</div>
<div className="relative w-full py-12 md:py-16 border-y border-white/5 bg-black/40 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both]">
<div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 z-10 bg-gradient-to-r from-[#0d0d0d] to-transparent"></div>
<div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 z-10 bg-gradient-to-l from-[#0d0d0d] to-transparent"></div>
<div className="flex overflow-hidden w-full">
<div className="flex animate-marquee whitespace-nowrap gap-8 md:gap-16 items-center">

<iconify-icon className="text-2xl md:text-3xl text-neutral-400" icon="simple-icons:nvidia"></iconify-icon>
<iconify-icon className="text-2xl md:text-3xl text-neutral-400" icon="simple-icons:linear"></iconify-icon>
<iconify-icon className="text-2xl md:text-3xl text-neutral-400" icon="simple-icons:vercel"></iconify-icon>
<iconify-icon className="text-2xl md:text-3xl text-neutral-400" icon="simple-icons:apple"></iconify-icon>
<iconify-icon className="text-4xl md:text-5xl text-neutral-400" icon="simple-icons:stripe"></iconify-icon>
<iconify-icon className="text-4xl md:text-5xl text-neutral-400" icon="simple-icons:spacex"></iconify-icon>
<iconify-icon className="text-2xl md:text-3xl text-neutral-400" icon="simple-icons:nvidia"></iconify-icon>
<iconify-icon className="text-2xl md:text-3xl text-neutral-400" icon="simple-icons:linear"></iconify-icon>
<iconify-icon className="text-2xl md:text-3xl text-neutral-400" icon="simple-icons:vercel"></iconify-icon>
<iconify-icon className="text-2xl md:text-3xl text-neutral-400" icon="simple-icons:apple"></iconify-icon>
<iconify-icon className="text-4xl md:text-5xl text-neutral-400" icon="simple-icons:stripe"></iconify-icon>
<iconify-icon className="text-4xl md:text-5xl text-neutral-400" icon="simple-icons:spacex"></iconify-icon>
</div>
</div>
</div>
<div className="pt-8 pr-6 md:pr-12 pb-12 pl-6 md:pl-12">
<p className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] text-sm md:text-base text-neutral-400 font-mono">
          "Add a marquis infinite loop slow animation using alpha mask"
        </p>
</div>
</div>
</section>

<section className="h-screen w-full snap-start shrink-0 flex items-center justify-center relative p-0" data-index="5" id="section-6">
<div className="h-full md:h-auto md:aspect-[3/4] glass-panel overflow-hidden flex flex-col bg-center w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/47ccf769-0cb4-4a95-804e-cc919fd6d449_1600w.webp)] max-w-none md:max-w-xl bg-cover rounded-none pt-20 md:pt-12 pr-6 md:pr-12 pb-12 pl-6 md:pl-12 relative items-center justify-center">
<span className="absolute top-20 md:top-12 left-6 md:left-12 text-xs uppercase tracking-[0.25em] font-mono text-neutral-500 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">06 — Switching</span>
<div className="flex animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] w-full h-80 relative perspective-1000 items-center justify-center">
<div className="absolute w-[80%] h-[80%] bg-neutral-800/80 backdrop-blur rounded-none -translate-y-6 scale-95 opacity-40">
</div>
<div className="flex flex-col transition-all duration-500 hover:scale-[1.02] z-10 bg-stone-950 w-[85%] h-[85%] ring-white/10 ring-1 rounded-none pt-8 pr-8 pb-8 pl-8 absolute shadow-2xl">
<div className="flex bg-gradient-to-br from-white/10 to-white/0 w-12 h-12 rounded-none mb-6 items-center justify-center">
<iconify-icon className="text-2xl text-white" icon="solar:database-bold-duotone"></iconify-icon>
</div>
<div className="bg-gradient-to-br from-white/10 to-white/0 w-16 h-3 rounded-sm mb-6"></div>
<div className="bg-gradient-to-br from-white/10 to-white/0 w-full h-3 rounded-sm mb-3"></div>
<div className="bg-gradient-to-br from-white/10 to-white/0 w-2/3 h-3 rounded-sm"></div>
</div>
<div className="absolute -bottom-12 flex gap-6">
<button className="flex hover:bg-white hover:text-black transition-colors text-neutral-400 bg-neutral-900 w-12 h-12 rounded-full items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px'}}>
<iconify-icon className="text-xl" icon="solar:arrow-left-bold-duotone"></iconify-icon>
</button>
<button className="flex hover:bg-white hover:text-black transition-colors text-neutral-400 bg-neutral-900 w-12 h-12 rounded-full items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px'}}>
<iconify-icon className="text-xl" icon="solar:arrow-right-bold-duotone"></iconify-icon>
</button>
</div>
</div>
<div className="mt-24 pt-8 pr-6 md:pr-12 pb-12 pl-6 md:pl-12">
<p className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] text-sm md:text-base text-neutral-400 font-mono">"Animate the cards to rotate between 3 cards in a loop. Add prev/next arrows to switch between cards."</p>
</div></div>
</section>

<section className="h-screen w-full snap-start shrink-0 flex items-center justify-center relative p-0" data-index="6" id="section-7">
<div className="h-full md:h-auto md:aspect-[3/4] glass-panel overflow-hidden flex flex-col bg-center w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7b8e6a1f-44f9-49ef-a26c-bf0d87724acf_1600w.webp)] max-w-none md:max-w-xl bg-cover rounded-none pt-20 md:pt-12 pr-6 md:pr-12 pb-12 pl-6 md:pl-12 relative justify-center">
<span className="absolute top-20 md:top-12 left-6 md:left-12 text-xs uppercase tracking-[0.25em] font-mono text-neutral-500 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">07 — Interaction</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 md:mb-12 text-white animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
        Flashlight Reveal</h2>
<div className="grid grid-cols-2 gap-x-4 md:gap-x-6 gap-y-4 md:gap-y-6">
<div className="flashlight-card relative aspect-square border-0 bg-neutral-900/60 ring-1 ring-white/5 rounded-none p-4 md:p-6 flex flex-col justify-end group overflow-hidden animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both]" onmousemove="const rect = this.getBoundingClientRect(); this.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`); this.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`);">
<iconify-icon className="text-3xl md:text-5xl text-neutral-500 mb-2 md:mb-4 group-hover:text-white transition-colors duration-500" icon="solar:layers-minimalistic-bold-duotone"></iconify-icon>
<div className="text-xs md:text-sm text-neutral-400 font-medium tracking-wide">Hover Me</div>
</div>
<div className="flashlight-card aspect-square flex flex-col group overflow-hidden animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] bg-neutral-900/60 border-0 ring-white/5 ring-1 rounded-none p-4 md:p-6 relative backdrop-blur justify-end" onmousemove="const rect = this.getBoundingClientRect(); this.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`); this.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`);" style={{'--mouse-x': '106.5px', '--mouse-y': '219px'}}>
<iconify-icon className="text-3xl md:text-5xl text-neutral-500 mb-2 md:mb-4 group-hover:text-white transition-colors duration-500" icon="solar:cpu-bold-duotone"></iconify-icon>
<div className="text-xs md:text-sm text-neutral-400 font-medium tracking-wide">Trace Border</div>
</div>
</div>
<div className="mt-8 md:mt-10 text-xs text-neutral-500 font-mono animate-on-scroll [animation:animationIn_0.8s_ease-out_0.8s_both]">
        "Add a subtle flashlight effect on hover/mouse position to background."
      </div>
</div>
</section>

<section className="h-screen w-full snap-start shrink-0 flex items-center justify-center relative p-0" data-index="7" id="section-8">
<div className="h-full md:h-auto md:aspect-[3/4] glass-panel overflow-hidden flex flex-col bg-center w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/67df17f7-9681-4bd3-927b-ac569042a884_1600w.webp)] max-w-none md:max-w-xl bg-cover rounded-none pt-0 pr-0 pb-0 pl-0 relative justify-between">
<div className="p-6 md:p-12 pt-20 md:pt-12">
<span className="text-xs uppercase tracking-[0.25em] font-mono text-neutral-500 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">08 — End</span>
<h1 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] text-5xl md:text-7xl font-medium text-white tracking-tighter mt-6 mb-4">
          Build Better<br/>Interfaces.</h1>
</div>
<div className="overflow-hidden mask-image-gradient animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both] h-48 md:h-56 z-10 relative" style={{maskImage: 'linear-gradient(180deg, transparent, black 20%, black 95%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 20%, black 95%, transparent)'}}>
<div className="space-y-4 p-6 md:p-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
<div className="bg-gradient-to-br from-black/0 via-black/10 to-black/0 ring-white/5 ring-1 rounded-none px-4 py-4 md:px-6 md:py-6 backdrop-blur-sm">
<p className="text-sm md:text-base text-neutral-300">"The beam effect is subtle but changes everything."</p>
</div>
<div className="bg-gradient-to-br from-black/0 via-black/10 to-black/0 ring-white/5 ring-1 rounded-none ml-4 md:ml-8 px-4 py-4 md:px-6 md:py-6 backdrop-blur-sm">
<p className="text-sm md:text-base text-neutral-300">"Gemini 3 understands motion physics."</p>
</div>
<div className="bg-gradient-to-br from-black/0 via-black/10 to-black/0 rounded-none ring-white/5 ring-1 px-4 py-4 md:px-6 md:py-6 backdrop-blur-sm">
<p className="text-xs md:text-sm text-neutral-300">"Cleanest implementation of glassmorphism."</p>
</div>
</div>
</div>
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] bg-gradient-to-t from-black/90 to-transparent p-6 md:p-12 pb-12">
<button className="w-full group relative flex items-center justify-center gap-3 bg-white text-black py-4 md:py-5 rounded-none overflow-hidden hover:bg-neutral-200 transition-colors">
<span className="text-xs md:text-sm font-bold uppercase tracking-widest z-10">Follow @mengto</span>
<iconify-icon className="text-xl md:text-2xl z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-bold-duotone"></iconify-icon>
</button>
</div>
</div>
</section>
</main>


    </>
  );
}
