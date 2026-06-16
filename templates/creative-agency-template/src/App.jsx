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
        


                  if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                  }
                


            (function() {
                if (typeof window === 'undefined') return;

                const tracks = document.querySelectorAll('.marquee-track');
                if (!tracks.length) return;

                let scrollSpeed = 0;
                let lastScrollY = window.scrollY;
                let rafId = null;

                // State for each track
                const trackStates = Array.from(tracks).map(track => {
                    const direction = track.getAttribute('data-direction') || 'up';
                    const baseSpeed = parseFloat(track.getAttribute('data-speed') || '0.5');
                    return {
                        element: track,
                        direction: direction === 'up' ? -1 : 1,
                        baseSpeed: baseSpeed,
                        currentPos: 0,
                        contentHeight: 0
                    };
                });

                function init() {
                    trackStates.forEach(state => {
                        // Content is doubled, so wrap height is half the total height
                        state.contentHeight = state.element.offsetHeight / 2;
                    });
                }

                function update() {
                    // Decay scroll speed influence
                    scrollSpeed *= 0.9;
                    if (Math.abs(scrollSpeed) < 0.01) scrollSpeed = 0;

                    trackStates.forEach(state => {
                        const speed = state.baseSpeed + (scrollSpeed * 0.5);

                        state.currentPos += speed * state.direction;

                        // Wrap Logic:
                        if (state.direction === -1 && state.currentPos <= -state.contentHeight) {
                            state.currentPos += state.contentHeight;
                        }
                        if (state.direction === 1) {
                           if (state.currentPos >= 0) {
                               state.currentPos -= state.contentHeight;
                           }
                        }

                        state.element.style.transform = `translate3d(0, ${state.currentPos}px, 0)`;
                    });

                    rafId = requestAnimationFrame(update);
                }

                window.addEventListener('scroll', () => {
                    const currentScrollY = window.scrollY;
                    const delta = Math.abs(currentScrollY - lastScrollY);
                    lastScrollY = currentScrollY;

                    scrollSpeed += delta * 0.15;
                    if (scrollSpeed > 15) scrollSpeed = 15;
                }, { passive: true });

                setTimeout(() => {
                    init();
                    trackStates.forEach(state => {
                        if (state.direction === 1) {
                            // Start 'Down' tracks shifted up so they have content to scroll down from
                            state.currentPos = -state.contentHeight;
                        }
                    });
                    update();
                }, 100);

                window.addEventListener('resize', () => {
                    init();
                });
            })();
          


          function updatePricing(plan, period) {
            // Configuration for pricing
            const pricingData = {
              'growth': {
                'monthly': '3,000',
                'yearly': '2,400'
              },
              'scale': {
                'monthly': '5,000',
                'yearly': '4,000'
              }
            };

            const descData = {
              'monthly': 'Pause or cancel anytime.',
              'yearly': 'Billed annually. Save 20%.'
            };

            // Update the displayed price and description
            const priceElement = document.getElementById(`price-${plan}`);
            const descElement = document.getElementById(`desc-${plan}`);

            if (priceElement && pricingData[plan] && pricingData[plan][period]) {
              // Simple animation effect
              priceElement.style.opacity = '0.5';
              if (descElement) descElement.style.opacity = '0.5';

              setTimeout(() => {
                priceElement.textContent = pricingData[plan][period];
                priceElement.style.opacity = '1';

                if (descElement) {
                    descElement.textContent = descData[period];
                    descElement.style.opacity = '1';
                }
              }, 150);
            }

            // Update button styles
            const toggleContainer = document.getElementById(`toggle-${plan}`);
            if (toggleContainer) {
              const buttons = toggleContainer.querySelectorAll('button');
              buttons.forEach(btn => {
                const isSelected = btn.dataset.period === period;
                if (isSelected) {
                  btn.className = 'px-4 py-1.5 bg-zinc-700 text-white text-xs font-semibold font-sans rounded-sm shadow-sm transition-all';
                } else {
                  btn.className = 'px-4 py-1.5 text-xs font-medium text-zinc-500 font-sans bg-transparent rounded-sm hover:text-zinc-300 transition-colors';
                }
              });
            }
          }
        


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

<div className="gradient-blur" style={{height: '120px'}}>
<div className=""></div>
<div className="" style={{}}></div>
<div className="" style={{}}></div>
<div className="" style={{}}></div>
<div className="" style={{}}></div>
<div className="" style={{}}></div>
</div>

<div className="fixed flex [animation:fadeSlideIn_1s_ease-out_1s_both] w-full z-50 pt-6 pr-4 pl-4 top-0 left-0 justify-center">
<nav className="shadow-black/50 flex md:gap-12 md:w-auto bg-black/60 w-full max-w-5xl rounded-none pt-2 pr-2 pb-2 pl-3 shadow-2xl backdrop-blur-lg gap-x-8 gap-y-8 items-center justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2))', -BorderRadiusBefore: '0'}}>
<div className="flex gap-2 shrink-0 gap-x-2 gap-y-2 items-center">
<div className="flex gap-x-3 gap-y-3 items-center" onclick="window.location.href='/home'" role="button">
<div className="grid grid-cols-2 opacity-90 w-6 h-6 gap-x-1 gap-y-1">
<div className="bg-[#ef233c] w-full h-full rounded-sm"></div>
<div className="w-full h-full bg-zinc-700 rounded-sm [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll animate"></div>
<div className="w-full h-full bg-zinc-800 rounded-sm"></div>
<div className="w-full h-full bg-white rounded-sm shadow-[0_0_10px_rgba(255,255,255,0.4)]"></div>
</div>
<span className="text-xl font-bold text-white tracking-tight font-manrope">
              Creative
            </span>
</div>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="group hover:text-white transition-colors text-sm font-medium text-gray-400 font-sans pt-1 pb-1 relative" href="/work">
            Work
            <span className="absolute -bottom-3 left-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-[#ef233c] to-transparent group-hover:w-full group-hover:opacity-100 transition-all duration-300 ease-out -translate-x-1/2 shadow-[0_0_10px_rgba(239,35,60,0.8)]"></span>
</a>
<a className="group hover:text-white transition-colors text-sm font-medium text-gray-400 font-sans py-1 relative" href="/services">
            Services
            <span className="absolute -bottom-3 left-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-[#ef233c] to-transparent group-hover:w-full group-hover:opacity-100 transition-all duration-300 ease-out -translate-x-1/2 shadow-[0_0_10px_rgba(239,35,60,0.8)]"></span>
</a>
<a className="group hover:text-white transition-colors text-sm font-medium text-gray-400 font-sans py-1 relative" href="/about">
            About
            <span className="absolute -bottom-3 left-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-[#ef233c] to-transparent group-hover:w-full group-hover:opacity-100 transition-all duration-300 ease-out -translate-x-1/2 shadow-[0_0_10px_rgba(239,35,60,0.8)]"></span>
</a>
<a className="group hover:text-white transition-colors text-sm font-medium text-gray-400 font-sans pt-1 pb-1 relative" href="/pricing">Pricing</a>
</div>
<div className="flex gap-4 shrink-0 gap-x-4 gap-y-4 items-center" style={{}}>
<button className="group inline-flex overflow-hidden transition-transform active:scale-95 cursor-pointer outline-none rounded-none pt-2.5 pr-6 pb-2.5 pl-6 relative gap-x-4 gap-y-4 items-center justify-center" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)'}}>

<span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ef233c_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{}}></span>

<span className="absolute inset-0 rounded-none bg-zinc-800 transition-opacity duration-300 group-hover:opacity-0" style={{}}></span>

<span className="bg-black z-10 rounded-none absolute top-[1px] right-[1px] bottom-[1px] left-[1px]" onclick="window.location.href='/bookcall'" role="button"></span>

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

<section className="h-auto min-h-[800px] flex flex-col md:pt-20 overflow-hidden w-full pt-32 relative items-center justify-start" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 95%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 95%, transparent)'}}>



<div className="z-10 text-center max-w-5xl mt-24 mr-auto mb-12 ml-auto pr-6 pl-6 relative">

<div className="[animation:fadeSlideIn_1s_ease-out_0.8s_both] inline-flex transition-transform hover:scale-105 cursor-pointer group animate bg-gradient-to-br from-white/10 to-white/0 bg-gradient-to-b from-white/20 via-white/0 to-white/10 rounded-full mb-10 pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', -BorderRadiusBefore: '9999px'}}>
<span className="flex h-1.5 w-1.5 rounded-full group-hover:animate-pulse bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]"></span>
<span className="text-xs font-medium tracking-wide group-hover:text-white transition-colors font-sans text-red-100/80">
            Available for new projects
          </span>
</div>

<h1 className="[animation:fadeSlideIn_1s_ease-out_1s_both] animate flex flex-wrap justify-center gap-x-[0.25em] gap-y-2 leading-[1.1] md:text-8xl cursor-default text-6xl font-medium tracking-tighter font-manrope mb-8">
<span className="inline-blox leading-[1.3] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">
            Design
          </span>
<span className="inline-blox leading-[1.3] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">
            your
          </span>
<span className="inline-blox leading-[1.3] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-100">
            vision
          </span>
<span className="inline-blox leading-[1.3] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">
            with
          </span>
<span className="inline-blox leading-[1.3] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">
            creative
          </span>
<span className="inline-blox leading-[1.3] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">
            excellence
          </span>
</h1>

<p className="[animation:fadeSlideIn_1s_ease-out_1.2s_both] leading-relaxed md:text-2xl animate text-xl font-medium text-gray-400 tracking-normal font-manrope max-w-3xl mr-auto mb-12 ml-auto">
    Crafting digital experiences that merge art and technology. From
    branding to web development, I build it all.
  </p>

<div className="[animation:fadeSlideIn_1s_ease-out_1.4s_both] flex flex-col md:flex-row animate mb-12 gap-6 items-center justify-center">

<button className="group relative flex min-w-[180px] h-[50px] w-auto items-center justify-center rounded-none px-6 outline-none cursor-pointer transition-transform active:scale-95" data-framer-name="desktop" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', border: 'none'}} type="button">

<div className="pointer-events-none absolute inset-0 opacity-100 transition-opacity duration-[1200ms] ease-in-out group-hover:opacity-0" data-framer-name="Glow" style={{background: 'radial-gradient(15% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', filter: 'blur(15px)'}}></div>

<div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-[1200ms] ease-in-out group-hover:opacity-100" data-framer-name="Glow Hover" style={{background: 'radial-gradient(60.6% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', filter: 'blur(18px)'}}></div>

<div className="pointer-events-none will-change-auto absolute inset-0 opacity-100 transition-opacity duration-[1200ms] ease-in-out group-hover:opacity-0" data-framer-name="Stroke" style={{background: 'radial-gradient(10.7% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)'}}></div>

<div className="pointer-events-none will-change-auto absolute inset-0 opacity-0 transition-opacity duration-[1200ms] ease-in-out group-hover:opacity-100" data-framer-name="Stroke Hover" style={{background: 'radial-gradient(60.1% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)'}}></div>

<div className="pointer-events-none absolute inset-0 overflow-hidden rounded-none">
<div className="absolute -inset-[300%] animate-[spin_4s_linear_infinite]" style={{background: 'conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 90%, #ffffff 100%)'}}></div>
</div>

<div className="absolute inset-[1px] rounded-none" data-framer-name="Fill" style={{backgroundColor: 'rgb(0, 0, 0)'}}></div>

<span className="relative z-20 flex items-center justify-center gap-2 text-xs font-medium text-white tracking-wide uppercase">
<span style={{WebkitFontSmoothing: 'antialiased', textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>
        VIEW PORTFOLIO
      </span>
<svg className="transition-transform duration-300 group-hover:translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>

<button className="group relative inline-flex min-w-[180px] h-[50px] items-center justify-center overflow-hidden rounded-none outline-none cursor-pointer transition-transform active:scale-95" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)'}} type="button">

<span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ef233c_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>

<span className="absolute inset-0 rounded-none bg-zinc-800 transition-opacity duration-300 group-hover:opacity-0"></span>

<span className="absolute inset-[1px] rounded-none bg-black z-10"></span>

<span className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10" style={{background: 'radial-gradient(50% 50% at 50% 100%, rgba(239, 35, 60, 0.2) 0%, transparent 100%)'}}></span>

<span className="relative z-20 flex items-center justify-center gap-2 text-xs font-medium text-white tracking-wide uppercase">
<span>CONTACT ME</span>
<svg className="transition-transform duration-300 group-hover:translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>

</div>

<div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl mt-8 mr-auto mb-8 ml-auto relative px-6 md:px-0">

<section className="flex-1 bg-black border border-zinc-800 border-dashed relative p-8 flex flex-col justify-between group hover:border-[#ef233c]/50 transition-all duration-500 rounded-none animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">

<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#ef233c]"></div>
<div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#ef233c]"></div>
<div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#ef233c]"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#ef233c]"></div>
<div className="space-y-8">
<div className="flex items-center justify-between border-b border-zinc-800 pb-4 border-dashed">
<span className="font-mono text-[10px] text-[#ef233c] tracking-widest uppercase font-bold">
                [ System Status ]
              </span>
<div className="flex gap-1.5">
<div className="w-1.5 h-1.5 bg-[#ef233c] animate-pulse rounded-none"></div>
<div className="w-1.5 h-1.5 bg-zinc-800 rounded-none"></div>
<div className="w-1.5 h-1.5 bg-zinc-800 rounded-none"></div>
</div>
</div>
<div className="">
<h3 className="text-zinc-500 text-[10px] font-mono mb-2 uppercase tracking-wider">
                Active Projects
              </h3>
<div className="flex items-baseline gap-2">
<p className="text-5xl font-medium text-white font-manrope tracking-tighter">
                  24
                </p>
<span className="text-[#ef233c] text-xs font-mono">▲ 12%</span>
</div>
<p className="text-xs text-zinc-400 mt-2 font-sans">
                Global deployment across 3 regions.
              </p>
</div>
<div className="w-full h-px bg-zinc-800 border-t border-dashed border-zinc-700"></div>
<div className="">
<h3 className="text-zinc-500 text-[10px] font-mono mb-2 uppercase tracking-wider">
                Client Retention
              </h3>
<div className="flex items-baseline gap-2">
<p className="text-5xl font-medium text-white font-manrope tracking-tighter">
                  98
                  <span className="text-2xl text-zinc-500">.4%</span>
</p>
</div>
<p className="text-xs text-zinc-400 mt-2 font-sans">
                Based on annual recurring contracts.
              </p>
</div>
</div>
<button className="mt-8 w-full bg-transparent border border-[#ef233c] text-[#ef233c] hover:bg-[#ef233c] hover:text-white transition-all uppercase text-[11px] font-bold tracking-widest py-4 px-4 flex items-center justify-center gap-3 group/btn rounded-none">
<span className="">View Dashboard</span>
<svg className="w-3 h-3 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2"></path>
</svg>
</button>
</section>

<section className="lg:flex-[1.6] min-h-[500px] group overflow-hidden border-zinc-800 border rounded-none relative animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.4s_both]" style={{}}>

<img alt="Agency Hero" className="group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 opacity-100 mix-blend-normal w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://cdn.midjourney.com/6512533c-2ac4-41b3-b676-56e877226748/0_3.png?w=800&amp;q=80"/>

<div className="flex flex-col z-20 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between" style={{}}>
<div className="flex items-start justify-between">
<div className="bg-black border-zinc-800 border pt-4 pr-4 pb-4 pl-4 shadow-xl">
<div className="flex gap-2 mb-2 items-center">
<span className="w-1.5 h-1.5 bg-[#ef233c]"></span>
<p className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest">
                    Featured Case Study
                  </p>
</div>
<h3 className="text-white font-manrope text-2xl font-semibold tracking-tight uppercase">
                  Neon Nexus
                </h3>
</div>
<button className="w-12 h-12 bg-[#ef233c] text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors rounded-none border border-transparent hover:border-white">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="flex flex-col gap-6">
<div className="flex gap-0 border border-zinc-800 w-fit bg-black">
<span className="px-4 py-2 border-r border-zinc-800 text-[10px] text-zinc-300 uppercase font-mono hover:text-[#ef233c] hover:bg-white/5 transition-colors cursor-default">
                  Fintech
                </span>
<span className="px-4 py-2 border-r border-zinc-800 text-[10px] text-zinc-300 uppercase font-mono hover:text-[#ef233c] hover:bg-white/5 transition-colors cursor-default">
                  Web App
                </span>
<span className="px-4 py-2 text-[10px] text-zinc-300 uppercase font-mono hover:text-[#ef233c] hover:bg-white/5 transition-colors cursor-default">
                  2024
                </span>
</div>
<div className="bg-black/90 backdrop-blur border-l-4 border-[#ef233c] p-5 max-w-md shadow-2xl">
<p className="text-zinc-300 text-sm leading-relaxed font-sans">
                  Redefining digital finance with a brutalist interface and
                  real-time data visualization engine.
                </p>
</div>
</div>
</div>

<div className="absolute bottom-8 right-8 w-24 h-24 border-r border-b border-[#ef233c]/30 z-10"></div>
</section>

<section className="flex-1 flex flex-col bg-black border border-zinc-800 rounded-none relative animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.6s_both]">
<div className="p-5 border-b border-zinc-800 border-dashed flex justify-between items-center bg-zinc-900/10">
<span className="font-mono text-[10px] text-white uppercase tracking-widest font-bold">
              Capabilities Index
            </span>
<div className="flex gap-1">
<div className="w-0.5 h-3 bg-[#ef233c]"></div>
<div className="w-0.5 h-3 bg-zinc-800"></div>
<div className="w-0.5 h-3 bg-zinc-800"></div>
</div>
</div>
<div className="flex-1 flex flex-col">

<a className="flex-1 border-b border-zinc-800 p-6 flex items-center justify-between group hover:bg-zinc-900/30 transition-colors relative overflow-hidden" href="#">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ef233c] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-200"></div>
<div className="">
<span className="block text-[10px] text-zinc-600 font-mono mb-1 group-hover:text-[#ef233c] transition-colors">
                  01
                </span>
<h4 className="text-lg text-white font-manrope font-normal tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  Digital Strategy
                </h4>
</div>
<svg className="w-4 h-4 text-zinc-700 group-hover:text-[#ef233c] transition-colors transform group-hover:rotate-[-45deg] duration-300" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5"></path>
</svg>
</a>

<a className="flex-1 border-b border-zinc-800 p-6 flex items-center justify-between group hover:bg-zinc-900/30 transition-colors relative overflow-hidden" href="#">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ef233c] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-200"></div>
<div className="">
<span className="block text-[10px] text-zinc-600 font-mono mb-1 group-hover:text-[#ef233c] transition-colors">
                  02
                </span>
<h4 className="text-lg text-white font-manrope font-normal tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  UI/UX Design
                </h4>
</div>
<svg className="w-4 h-4 text-zinc-700 group-hover:text-[#ef233c] transition-colors transform group-hover:rotate-[-45deg] duration-300" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5"></path>
</svg>
</a>

<a className="flex-1 border-b border-zinc-800 p-6 flex items-center justify-between group hover:bg-zinc-900/30 transition-colors relative overflow-hidden" href="#">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ef233c] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-200"></div>
<div className="">
<span className="block text-[10px] text-zinc-600 font-mono mb-1 group-hover:text-[#ef233c] transition-colors">
                  03
                </span>
<h4 className="text-lg text-white font-manrope font-normal tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  Development
                </h4>
</div>
<svg className="w-4 h-4 text-zinc-700 group-hover:text-[#ef233c] transition-colors transform group-hover:rotate-[-45deg] duration-300" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5"></path>
</svg>
</a>

<a className="flex-1 p-6 flex items-center justify-between group hover:bg-zinc-900/30 transition-colors relative overflow-hidden" href="#">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ef233c] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-200"></div>
<div className="">
<span className="block text-[10px] text-zinc-600 font-mono mb-1 group-hover:text-[#ef233c] transition-colors">
                  04
                </span>
<h4 className="text-lg text-white font-manrope font-normal tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  Brand Identity
                </h4>
</div>
<svg className="w-4 h-4 text-zinc-700 group-hover:text-[#ef233c] transition-colors transform group-hover:rotate-[-45deg] duration-300" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5"></path>
</svg>
</a>
</div>
</section>
</div>
<div className="[animation:fadeSlideIn_1s_ease-out_1s_both] animate-on-scroll animate md:pb-20 md:pt-20 w-full max-w-6xl z-20 mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 relative">
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
<path className="" d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019l-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" fill="currentColor"></path>
</svg>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl text-white iconify--simple-icons" data-icon="simple-icons:lucid" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 0L3.694 4.8V24L12 19.2Zm0 19.2v4.502h8.305V14.4Z" fill="currentColor"></path>
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
<section className="[animation:fadeSlideIn_1s_ease-out_1s_both] animate-on-scroll w-full max-w-7xl z-20 mt-24 mr-auto mb-24 ml-auto pt-10 pr-2 pb-32 pl-2 relative gap-x-y-6 gap-y-8">

<div className="relative w-full">

<div className="flex flex-col md:flex-row md:items-end w-full mt-0 mb-12 relative gap-x-8 gap-y-0 justify-between">
<div className="flex flex-col max-w-3xl gap-x-6 gap-y-6">

<div className="flex items-center gap-3 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]" style={{animationPlayState: 'running'}}>
<span className="uppercase text-sm font-medium text-[#ef233c] tracking-widest">
                01.FEATURED CASE STUDY
              </span>
</div>

<div className="flex flex-col gap-x-6 gap-y-6 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.4s_both]" style={{animationPlayState: 'running'}}>
<h2 className="md:text-6xl text-5xl font-medium text-white tracking-tighter font-manrope">
                Real
                <span className="bg-clip-text text-transparent bg-[#ef233c]">
                  Products
                </span>
</h2>
<p className="leading-relaxed text-lg font-light text-gray-400 max-w-xl">
                A selected case study showcasing how we design and build
                scalable digital products, driven by performance, data, and real
                business impact.
              </p>
</div>
</div>
<button className="group flex min-w-[180px] decoration-0 transition-transform active:scale-95 cursor-pointer outline-none w-auto h-[50px] rounded-none pr-6 pl-6 relative items-center justify-center" data-framer-name="desktop" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '0px', opacity: '1', border: 'none'}} type="button">

<div className="pointer-events-none transition-opacity ease-in-out duration-[1200ms] group-hover:opacity-0 opacity-100 absolute inset-0" data-framer-name="Glow" style={{background: 'radial-gradient(15% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '0px', filter: 'blur(15px)'}}></div>

<div className="pointer-events-none transition-opacity ease-in-out duration-[1200ms] group-hover:opacity-100 opacity-0 absolute inset-0" data-framer-name="Glow Hover" style={{background: 'radial-gradient(60.6% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '0px', filter: 'blur(18px)'}}></div>

<div className="pointer-events-none will-change-auto transition-opacity ease-in-out duration-[1200ms] group-hover:opacity-0 opacity-100 absolute inset-0" data-framer-name="Stroke" style={{background: 'radial-gradient(10.7% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '0px'}}></div>

<div className="pointer-events-none will-change-auto transition-opacity ease-in-out duration-[1200ms] group-hover:opacity-100 opacity-0 absolute inset-0" data-framer-name="Stroke Hover" style={{background: 'radial-gradient(60.1% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '0px'}}></div>

<div className="absolute inset-0 rounded-none overflow-hidden pointer-events-none">
<div className="absolute -inset-[300%] animate-[spin_4s_linear_infinite]" style={{background: 'conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 90%, #ffffff 100%)'}}></div>
</div>

<div className="rounded-none absolute top-[1px] right-[1px] bottom-[1px] left-[1px]" data-framer-name="Fill" style={{backgroundColor: 'rgb(0, 0, 0)', opacity: '1'}}></div>

<div className="relative z-20 flex items-center justify-center gap-2 opacity-100" data-framer-name="text content">
<span className="m-0 p-0 font-sans text-[15px] font-medium text-white tracking-wide" style={{WebkitFontSmoothing: 'antialiased', textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>
                View Case Study
              </span>
<svg className="lucide lucide-arrow-right transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</button>

<div className="pointer-events-none absolute left-0 right-0 -bottom-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

<div className="pointer-events-none absolute left-0 right-0 -bottom-6 h-6 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md"></div>
</div>
</div>

<section className="grid grid-cols-1 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:pt-0 lg:pl-0 lg:pr-0 pt-8 pr-4 pb-8 pl-4 gap-x-6 gap-y-6">
<style className="" id="border-gradient-shared-style">
          [style*="--border-gradient"]::before {
            content: "";
            position: absolute;
            inset: 0;
            padding: 1px;
            border-radius: var(--border-radius-before, inherit);
            -webkit-mask: linear-gradient(#fff 0 0) content-box,
              linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            background: var(--border-gradient);
            pointer-events: none;
          }
        </style>

<div className="overflow-hidden flex h-full group border-slate-800/90 border rounded-none relative items-stretch">
<div className="z-10 opacity-60 absolute top-0 right-0 bottom-0 left-0" style={{visibility: 'hidden'}}></div>
<div className="flex + w-full h-full max-w-5xl mt-0 mr-auto ml-auto relative items-center justify-center animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both]" style={{animationPlayState: 'running'}}>







<div className="border-[8px] overflow-hidden flex flex-col bg-[#050505] w-full h-[680px] max-w-[380px] border-[#222] rounded-[3rem] ring-white/10 ring-1 mt-6 mr-auto ml-auto relative shadow-2xl">

<div className="flex z-20 bg-[#050505] w-full h-12 pr-8 pb-2 pl-8 items-end justify-between">
<span className="text-[13px] font-medium text-white tracking-widest font-sans">
                  9:41
                </span>
<div className="flex gap-1.5 items-center">
<svg className="text-white" fill="currentColor" height="12" viewbox="0 0 16 12" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M14.6 2.4C14.2 2 13.5 2 13.1 2.4L8 7.5 2.9 2.4C2.5 2 1.8 2 1.4 2.4C1 2.8 1 3.5 1.4 3.9L7.3 9.8C7.7 10.2 8.3 10.2 8.7 9.8L14.6 3.9C15 3.5 15 2.8 14.6 2.4Z"></path>
<path className="" d="M12.4 0.2C12 0.6 12 1.3 12.4 1.7L8 6.1 3.6 1.7C4 1.3 4 0.6 3.6 0.2C3.2 -0.2 2.5 -0.2 2.1 0.2L7.3 5.4C7.7 5.8 8.3 5.8 8.7 5.4L13.9 0.2C13.5 -0.2 12.8 -0.2 12.4 0.2Z"></path>
<path className="" d="M8 8.2C8.4 8.2 8.7 8.5 8.7 8.9C8.7 9.3 8.4 9.6 8 9.6C7.6 9.6 7.3 9.3 7.3 8.9C7.3 8.5 7.6 8.2 8 8.2Z"></path>
</svg>
<svg className="text-white" fill="currentColor" height="12" viewbox="0 0 18 12" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M15 2H3C1.3 2 0 3.3 0 5V7C0 8.7 1.3 10 3 10H15C16.7 10 18 8.7 18 7V5C18 3.3 16.7 2 15 2ZM3 3H15C16.1 3 17 3.9 17 5V7C17 8.1 16.1 9 15 9H3C1.9 9 1 8.1 1 7V5C1 3.9 1.9 3 3 3Z"></path>
<path className="" d="M11.5 4H6.5C5.7 4 5 4.7 5 5.5V6.5C5 7.3 5.7 8 6.5 8H11.5C12.3 8 13 7.3 13 6.5V5.5C13 4.7 12.3 4 11.5 4Z"></path>
</svg>
<div className="w-6 h-3 rounded-[4px] border border-white/30 relative ml-0.5 p-0.5">
<div className="h-full bg-white rounded-[2px] w-full"></div>
</div>
</div>
</div>

<div className="px-6 pt-2 pb-4 flex items-center justify-between z-10 bg-[#050505]">
<h1 className="text-2xl text-white font-oswald font-light tracking-tight">
                  Stats
                </h1>
<div className="flex items-center gap-4">
<button className="text-white hover:text-gray-300 transition-colors">
<svg className="lucide lucide-bell" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
<path className="" d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
</svg>
</button>
<button className="w-9 h-9 rounded-full bg-[#27272A] flex items-center justify-center text-white hover:bg-[#3F3F46] transition-colors">
<svg className="lucide lucide-plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="M12 5v14"></path>
</svg>
</button>
</div>
</div>


<div className="flex-1 overflow-y-auto no-scrollbar px-5 pb-[120px]">

<div className="overflow-visible border-white/[0.08] bg-[#101018] border rounded-[2rem] mb-6 pt-5 pr-5 pb-5 pl-5 relative shadow-2xl">
<style>
                    @keyframes bar-grow {
                      0% {
                        transform: scaleY(0);
                        opacity: 0;
                      }
                      25% {
                        transform: scaleY(1);
                        opacity: 1;
                      }
                      75% {
                        transform: scaleY(1);
                        opacity: 1;
                      }
                      100% {
                        transform: scaleY(0);
                        opacity: 0;
                      }
                    }

                    @keyframes tooltip-fade {
                      0% {
                        opacity: 0;
                        transform: translateY(5px);
                      }

                      100% {
                        opacity: 1;
                        transform: translateY(0);
                      }
                    }
                  </style>
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-red-500/5 via-transparent to-red-500/5 rounded-[2rem] pointer-events-none"></div>
<div className="flex z-10 mb-8 relative items-start justify-between">
<div className="">
<h2 className="text-xl font-medium text-white tracking-tight font-sans">
                        New User
                      </h2>
<p className="text-[13px] text-gray-400 font-sans mt-1">
                        Last 6 months
                      </p>
</div>
<div className="flex items-center gap-2 mt-1">
<div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse"></div>
<span className="text-[11px] text-gray-400 font-sans">
                        Overall - 80%
                      </span>
</div>
</div>
<div className="relative h-64 w-full pl-6">
<div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[11px] text-gray-500 font-medium pb-8 pt-2">
<span className="font-sans">100</span>
<span className="font-sans">75</span>
<span className="font-sans">50</span>
<span className="font-sans">25</span>
<span className="font-sans">0</span>
</div>
<div className="absolute left-8 right-0 top-0 h-full flex flex-col justify-between pb-8 pt-2 pointer-events-none">
<div className="w-full h-px border-t border-dashed border-white/10"></div>
<div className="w-full h-px border-t border-dashed border-white/10"></div>
<div className="w-full h-px border-t border-dashed border-white/10"></div>
<div className="w-full h-px border-t border-dashed border-white/10"></div>
<div className="w-full h-px border-t border-dashed border-white/10"></div>
</div>
<div className="flex justify-between items-end h-full pl-3 pb-8 relative z-10">
<div className="flex flex-col items-center gap-3 w-1/4 group cursor-pointer relative h-full justify-end">
<div className="bg-[#1A1A24] border border-white/10 rounded-lg py-1.5 px-2.5 mb-1 absolute -top-4 shadow-xl z-20 opacity-0 transition-opacity group-hover:opacity-100" style={{animation: 'tooltip-fade 0.5s ease-out forwards 0.8s'}}>
<div className="text-[11px] font-medium text-white text-center leading-tight font-sans">
                            80%
                            <span className="text-gray-400 font-normal font-sans">
                              46K
                            </span>
</div>
</div>
<div className="w-12 h-[75%] bg-gradient-to-b from-red-500 to-red-500/10 rounded-t-lg relative overflow-hidden group-hover:brightness-125 transition-all origin-bottom scale-y-0" style={{animation: 'bar-grow 5s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.1s'}}>
<div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-white/20 to-transparent"></div>
</div>
<span className="text-[10px] text-gray-400 font-medium whitespace-nowrap absolute -bottom-6 font-sans">
                          App Install
                        </span>
</div>
<div className="flex flex-col items-center gap-3 w-1/4 group cursor-pointer relative h-full justify-end">
<div className="bg-[#1A1A24] border border-white/10 rounded-lg py-1.5 px-2.5 mb-1 absolute top-[15%] shadow-xl z-20 opacity-0 transition-opacity group-hover:opacity-100" style={{animation: 'tooltip-fade 0.5s ease-out forwards 0.9s'}}>
<div className="text-[11px] font-medium text-white text-center leading-tight font-sans">
                            70%
                            <span className="text-gray-400 font-normal font-sans">
                              41K
                            </span>
</div>
</div>
<div className="w-12 h-[60%] bg-gradient-to-b from-red-500 to-red-500/10 rounded-t-lg relative overflow-hidden group-hover:brightness-125 transition-all origin-bottom scale-y-0" style={{animation: 'bar-grow 5s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.3s'}}>
<div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-white/20 to-transparent"></div>
</div>
<span className="text-[10px] text-gray-400 font-medium whitespace-nowrap absolute -bottom-6 font-sans">
                          App open
                        </span>
</div>
<div className="flex flex-col items-center gap-3 w-1/4 group cursor-pointer relative h-full justify-end">
<div className="bg-[#1A1A24] border border-white/10 rounded-lg py-1.5 px-2.5 mb-1 absolute top-[15%] shadow-xl z-20 opacity-0 transition-opacity group-hover:opacity-100" style={{animation: 'tooltip-fade 0.5s ease-out forwards 1.0s'}}>
<div className="text-[11px] font-medium text-white text-center leading-tight font-sans">
                            70%
                            <span className="text-gray-400 font-normal font-sans">
                              41K
                            </span>
</div>
</div>
<div className="w-12 h-[60%] bg-gradient-to-b from-red-500 to-red-500/10 rounded-t-lg relative overflow-hidden group-hover:brightness-125 transition-all origin-bottom scale-y-0" style={{animation: 'bar-grow 5s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.5s'}}>
<div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-white/20 to-transparent"></div>
</div>
<span className="text-[10px] text-gray-400 font-medium whitespace-nowrap absolute -bottom-6 font-sans">
                          Sign Up
                        </span>
</div>
<div className="flex flex-col items-center gap-3 w-1/4 group cursor-pointer relative h-full justify-end">
<div className="bg-[#1A1A24] border border-white/10 rounded-lg py-1.5 px-2.5 mb-1 absolute top-[5%] shadow-xl z-20 opacity-0 transition-opacity group-hover:opacity-100" style={{animation: 'tooltip-fade 0.5s ease-out forwards 1.1s'}}>
<div className="text-[11px] font-medium text-white text-center leading-tight font-sans">
                            78%
                            <span className="text-gray-400 font-normal font-sans">
                              30K
                            </span>
</div>
</div>
<div className="w-12 h-[70%] bg-gradient-to-b from-red-500 to-red-500/10 rounded-t-lg relative overflow-hidden group-hover:brightness-125 transition-all origin-bottom scale-y-0" style={{animation: 'bar-grow 5s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.7s'}}>
<div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-white/20 to-transparent"></div>
</div>
<span className="text-[10px] text-gray-400 font-medium whitespace-nowrap absolute -bottom-6 font-sans">
                          Home page
                        </span>
</div>
</div>
</div>
<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-red-500/10 blur-xl rounded-full pointer-events-none"></div>
</div>

<div className="border-white/[0.08] bg-[#101018] border rounded-[2rem] pt-5 pr-5 pb-5 pl-5 relative">
<style>
                    @keyframes progress-loop {
                      0% {
                        width: 0;
                        opacity: 0.5;
                      }

                      40% {
                        width: var(--target-width);
                        opacity: 1;
                      }

                      80% {
                        width: var(--target-width);
                        opacity: 1;
                      }

                      100% {
                        width: var(--target-width);
                        opacity: 0;
                      }
                    }
                  </style>
<div className="flex justify-between items-start mb-6">
<div className="">
<h2 className="text-lg font-medium text-white tracking-tight font-sans">
                        Top Content
                      </h2>
<p className="text-[13px] text-gray-400 mt-1 font-normal font-sans">
                        Last 14 days
                      </p>
</div>
<button className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors font-sans">
                      More
                    </button>
</div>
<div className="flex items-baseline gap-3 mb-8">
<span className="text-xl font-light text-white tracking-tight font-oswald">
                      $6.295,29
                    </span>
<span className="text-xs text-gray-500 font-medium font-sans">
                      Estimated revenue
                    </span>
</div>
<div className="space-y-6">
<div className="flex gap-4 items-start group cursor-pointer">
<div className="w-12 h-12 rounded-[10px] overflow-hidden bg-gray-800 shrink-0 shadow-lg ring-1 ring-white/5">
<div className="w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-400 via-red-500 to-purple-600 scale-125 group-hover:scale-110 transition-transform duration-500"></div>
</div>
<div className="flex-1 min-w-0 pt-0.5">
<div className="flex justify-between items-center mb-2">
<h3 className="text-sm font-normal text-white truncate pr-2 font-sans">
                            Asset Allocation
                          </h3>
<span className="text-xs font-medium text-white font-sans">
                            $ 157.49
                          </span>
</div>
<div className="w-full h-1.5 bg-[#2A2A35] rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full" style={{-TargetWidth: '70%', width: '70%', animation: 'progress-loop 3s cubic-bezier(0.4, 0, 0.2, 1) infinite'}}></div>
</div>
</div>
</div>
<div className="flex gap-4 items-start group cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
<div className="w-12 h-12 rounded-[10px] overflow-hidden bg-gray-800 shrink-0 shadow-lg ring-1 ring-white/5">
<div className="w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-400 via-indigo-500 to-purple-600 scale-125"></div>
</div>
<div className="flex-1 min-w-0 pt-0.5">
<div className="flex justify-between items-center mb-2">
<h3 className="text-sm font-normal text-white truncate pr-2 font-sans">
                            Build an Interactive site
                          </h3>
<span className="text-xs font-medium text-white font-sans">
                            $ 157.49
                          </span>
</div>
<div className="w-full h-1.5 bg-[#2A2A35] rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" style={{-TargetWidth: '40%', width: '40%', animation: 'progress-loop 3s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.2s'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full h-[90px] z-30 px-4"></div>
</div>

<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-0 pointer-events-none"></div>
</div>

<div className="absolute right-0 top-0 flex z-20"></div>

<div className="absolute left-0 bottom-0 w-full flex items-end justify-between bg-black/60 border-t border-white/10 px-6 py-5 backdrop-blur-md z-20">
<div className="flex flex-col gap-1">
<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ef233c]">
                Featured Case Study
              </span>
<span className="text-2xl md:text-3xl font-semibold tracking-tighter text-white">
                Nexus Finance App
              </span>
</div>
<div className="hidden sm:flex flex-col text-right">
<span className="text-[10px] uppercase tracking-wider text-slate-400">
                Total Users
              </span>
<span className="text-lg font-mono font-medium text-white tracking-tight">
                2.4M+
              </span>
</div>
</div>
</div>

<div className="flex flex-col h-full lg:gap-5 gap-y-6">

<div className="flex flex0 border-white/10 border rounded-none pt-5 pr-6 pb-5 pl-6 backdrop-blur-xl gap-x-4 gap-y-4">
<div className="flex items-center gap-5">
<div className="">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                  Creative Agency
                </h1>
<p className="text-xs font-medium text-zinc-400 uppercase tracking-wide mt-0.5">
                  Digital Product Studio · est. 2012
                </p>
</div>
</div>
<div className="flex flex-col sm:items-end gap-4">
<div className="flex gap-6 text-xs text-zinc-300">
<div className="flex flex-col items-end">
<span className="text-[10px] uppercase tracking-[0.1em] text-zinc-500 font-bold">
                    Projects
                  </span>
<span className="mt-0.5 font-mono text-base font-medium text-white">
                    142
                  </span>
</div>
<div className="flex flex-col items-end">
<span className="text-[10px] uppercase tracking-[0.1em] text-zinc-500 font-bold">
                    Awards
                  </span>
<span className="mt-0.5 font-mono text-base font-medium text-white">
                    28
                  </span>
</div>
<div className="flex flex-col items-end">
<span className="text-[10px] uppercase tracking-[0.1em] text-zinc-500 font-bold">
                    Offices
                  </span>
<span className="mt-0.5 font-mono text-base font-medium text-white">
                    4
                  </span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-5 gap-4">
<div className="md:col-span-3 flex flex-col gap-4 bg-zinc-900/40 border-white/10 border rounded-none pt-6 pr-6 pb-6 pl-6 backdrop-blur-xl justify-between">
<p className="leading-relaxed text-sm text-zinc-300">
                We craft digital experiences that merge art, technology, and
                strategy. Our approach is rooted in rigorous design systems and
                future-ready engineering to help brands thrive in the modern
                economy.
              </p>
<div className="flex flex-wrap items-center gap-4 mt-2">
<button className="inline-flex hover:bg-[#ef233c] hover:border-[#ef233c] hover:text-white transition duration-300 text-[11px] font-bold uppercase tracking-wider text-white bg-white/5 border border-white/10 rounded-none pt-2 pr-4 pb-2 pl-4 gap-x-2 items-center">
<svg className="lucide lucide-play h-3 w-3" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="6 3 20 12 6 21 6 3"></polygon>
</svg>
                  Agency Reel
                </button>
<div className="flex items-center gap-2 text-[11px] text-zinc-500 font-medium uppercase tracking-wider">
<span className="w-1.5 h-1.5 bg-[#ef233c] rounded-none animate-pulse"></span>
                  Accepting Q3 Projects
                </div>
</div>
</div>
<div className="md:col-span-2 flex flex-col gap-3 bg-zinc-900/40 border border-white/10 rounded-none pt-4 pr-4 pb-4 pl-4 backdrop-blur-xl">
<div className="flex flex-col gap-2 text-xs text-white">
<button className="flex items-center justify-between rounded-none bg-black/40 border border-white/5 px-4 py-2.5 hover:bg-[#ef233c] hover:border-[#ef233c] transition group">
<span className="font-medium">LinkedIn</span>
<svg className="lucide lucide-arrow-up-right w-3.5 h-3.5 text-zinc-500 group-hover:text-white" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
<button className="flex items-center justify-between rounded-none bg-black/40 border border-white/5 px-4 py-2.5 hover:bg-[#ef233c] hover:border-[#ef233c] transition group">
<span className="font-medium">Behance</span>
<svg className="lucide lucide-arrow-up-right w-3.5 h-3.5 text-zinc-500 group-hover:text-white" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</div>
<button className="mt-auto w-full inline-flex hover:bg-white hover:text-black transition-colors duration-300 text-xs font-bold uppercase tracking-wider text-white bg-[#ef233c] rounded-none pt-3 pr-4 pb-3 pl-4 items-center justify-center gap-2">
<span className="">Start a Project</span>
<svg className="lucide lucide-arrow-right w-3.5 h-3.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>

<div className="flex flex-col flex-1 min-h-0 bg-zinc-900/40 border border-white/10 rounded-none pt-5 pr-5 pb-5 pl-5 backdrop-blur-xl gap-4">
<div className="flex items-center justify-between border-b border-white/5 pb-3 mb-1">
<div className="flex items-center gap-2">
<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ef233c]">
                  Recent Work
                </span>
</div>
<button className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">
                View All Projects
              </button>
</div>
<div className="grid grid-cols-2 gap-4 flex-1 min-h-0">

<article className="group relative rounded-none bg-black border border-white/10 overflow-hidden flex flex-col h-full min-h-[220px]">
<img alt="Dark abstract gradient" className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="bg-[#ef233c] w-8 h-8 flex items-center justify-center text-white">
<svg className="lucide lucide-arrow-up-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>
<div className="mt-auto relative p-4 z-10">
<h4 className="text-white font-semibold tracking-tight text-lg mb-0.5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    Vertex AI
                  </h4>
<p className="text-[10px] text-zinc-400 uppercase tracking-wider font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                    Brand Identity
                  </p>
</div>
</article>

<article className="group relative rounded-none bg-black border border-white/10 overflow-hidden flex flex-col h-full min-h-[220px]">
<img alt="Abstract architectural forms" className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="bg-[#ef233c] w-8 h-8 flex items-center justify-center text-white">
<svg className="lucide lucide-arrow-up-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>
<div className="mt-auto relative p-4 z-10">
<h4 className="text-white font-semibold tracking-tight text-lg mb-0.5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    Echo Platform
                  </h4>
<p className="text-[10px] text-zinc-400 uppercase tracking-wider font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                    Product Design
                  </p>
</div>
</article>
</div>
</div>
</div>
</section>
</section>
<section className="[animation:fadeSlideIn_1s_ease-out_1s_both] animate-on-scroll w-full max-w-7xl z-20 mt-24 mr-auto mb-24 ml-auto pt-10 pr-2 pb-32 pl-2 relative gap-x-y-6 gap-y-8">

<div className="relative w-full">

<div className="flex flex-col md:flex-row md:items-end w-full mt-0 mb-12 relative gap-x-8 gap-y-0 justify-between">
<div className="flex flex-col max-w-3xl gap-x-6 gap-y-6">

<div className="flex items-center gap-3 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]" style={{animationPlayState: 'running'}}>
<span className="uppercase text-sm font-medium text-[#ef233c] tracking-widest">
                01. CAPABILITIES
              </span>
</div>

<div className="flex flex-col gap-x-6 gap-y-6 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.4s_both]" style={{animationPlayState: 'running'}}>
<h2 className="md:text-6xl text-5xl font-medium text-white tracking-tighter font-manrope">
                Digital
                <span className="bg-clip-text text-transparent bg-[#ef233c]">
                  Expertise
                </span>
</h2>
<p className="leading-relaxed text-lg font-light text-gray-400 max-w-xl">
                A comprehensive suite of design and engineering services. We
                build scalable digital products for ambitious brands.
              </p>
</div>
</div>
<button className="group flex min-w-[180px] decoration-0 transition-transform active:scale-95 cursor-pointer outline-none w-auto h-[50px] rounded-none pr-6 pl-6 relative items-center justify-center" data-framer-name="desktop" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '0px', opacity: '1', border: 'none'}} type="button">

<div className="pointer-events-none transition-opacity ease-in-out duration-[1200ms] group-hover:opacity-0 opacity-100 absolute inset-0" data-framer-name="Glow" style={{background: 'radial-gradient(15% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '0px', filter: 'blur(15px)'}}></div>

<div className="pointer-events-none transition-opacity ease-in-out duration-[1200ms] group-hover:opacity-100 opacity-0 absolute inset-0" data-framer-name="Glow Hover" style={{background: 'radial-gradient(60.6% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '0px', filter: 'blur(18px)'}}></div>

<div className="pointer-events-none will-change-auto transition-opacity ease-in-out duration-[1200ms] group-hover:opacity-0 opacity-100 absolute inset-0" data-framer-name="Stroke" style={{background: 'radial-gradient(10.7% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '0px'}}></div>

<div className="pointer-events-none will-change-auto transition-opacity ease-in-out duration-[1200ms] group-hover:opacity-100 opacity-0 absolute inset-0" data-framer-name="Stroke Hover" style={{background: 'radial-gradient(60.1% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '0px'}}></div>

<div className="absolute inset-0 rounded-none overflow-hidden pointer-events-none">
<div className="absolute -inset-[300%] animate-[spin_4s_linear_infinite]" style={{background: 'conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 90%, #ffffff 100%)'}}></div>
</div>

<div className="rounded-none absolute top-[1px] right-[1px] bottom-[1px] left-[1px]" data-framer-name="Fill" style={{backgroundColor: 'rgb(0, 0, 0)', opacity: '1'}}></div>

<div className="relative z-20 flex items-center justify-center gap-2 opacity-100" data-framer-name="text content">
<span className="m-0 p-0 font-sans text-[15px] font-medium text-white tracking-wide" style={{WebkitFontSmoothing: 'antialiased', textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>
                View Services
              </span>
<svg className="lucide lucide-arrow-right transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</button>

<div className="pointer-events-none absolute left-0 right-0 -bottom-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

<div className="pointer-events-none absolute left-0 right-0 -bottom-6 h-6 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md"></div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-6 gap-6 gap-x-6 gap-y-6">

<div className="lg:col-span-2 group overflow-hidden hover:border-white/20 transition-all duration-300 border-dashed [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll animate bg-black border-zinc-800 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm">
<div className="relative z-10 h-full flex flex-col">
<div className="mb-8">
<h3 className="text-2xl font-medium text-white font-manrope mb-2 tracking-tight">
                Brand Identity
              </h3>
<p className="text-sm text-gray-400 font-sans leading-relaxed">
                Visual systems that tell your story. Logos, color palettes, and
                typography.
              </p>
</div>
<div className="overflow-hidden bg-zinc-900/30 w-full h-48 border-white/5 border rounded-none mt-auto relative p-6">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.03),transparent_70%)]"></div>
<style>
                @keyframes brandIdentityLoop {
                  0% { opacity: 0; transform: scale(0.94) translateY(4px); filter: blur(2px); }
                  5% { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
                  55% { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
                  65% { opacity: 0; transform: scale(0.98) translateY(-2px); filter: blur(2px); }
                  100% { opacity: 0; transform: scale(0.94) translateY(4px); filter: blur(2px); }
                }
                .animate-brand-item {
                  animation: brandIdentityLoop 8s cubic-bezier(0.4, 0, 0.2, 1) infinite both;
                }
              </style>
<div className="flex flex-col h-full justify-between relative z-10">
<div className="flex justify-between items-start">
<div className="space-y-1">
<span className="text-5xl font-serif text-white tracking-tighter block leading-none animate-brand-item" style={{animationDelay: '0.1s'}}>
                      Aa
                    </span>
<span className="text-[10px] text-zinc-500 font-mono block tracking-widest uppercase animate-brand-item" style={{animationDelay: '0.2s'}}>
                      Instrument Serif
                    </span>
</div>
<div className="flex flex-col gap-2">
<div className="w-6 h-6 rounded-full bg-[#ef233c] shadow-lg ring-1 ring-white/10 animate-brand-item" style={{animationDelay: '0.4s'}}></div>
<div className="w-6 h-6 rounded-full bg-zinc-200 shadow-lg ring-1 ring-white/10 animate-brand-item" style={{animationDelay: '0.5s'}}></div>
<div className="w-6 h-6 rounded-full bg-zinc-800 shadow-lg ring-1 ring-white/10 animate-brand-item" style={{animationDelay: '0.6s'}}></div>
</div>
</div>
<div className="grid grid-cols-3 gap-2 mt-4">
<div className="h-10 border border-dashed border-white/10 rounded-sm flex items-center justify-center bg-white/5 animate-brand-item" style={{animationDelay: '0.9s'}}>
<div className="w-3 h-3 border border-white/30 rotate-45"></div>
</div>
<div className="h-10 border border-dashed border-white/10 rounded-sm flex items-center justify-center bg-white/5 animate-brand-item" style={{animationDelay: '1.0s'}}>
<div className="w-3 h-3 rounded-full border border-white/30"></div>
</div>
<div className="h-10 border border-dashed border-white/10 rounded-sm flex items-center justify-center bg-white/5 animate-brand-item" style={{animationDelay: '1.1s'}}>
<div className="w-3 h-3 bg-white/30 rounded-[1px]"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 group overflow-hidden hover:border-white/20 transition-all duration-300 bg-zinc-900/40 border-white/10 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll animate">
<div className="z-10 flex flex-col h-full relative">
<div className="mb-8">
<h3 className="text-2xl font-semibold text-white font-manrope mb-2 tracking-tight">
                Web Design
              </h3>
<p className="text-sm text-gray-400 font-sans leading-relaxed">
                Immersive web experiences designed to convert visitors into
                loyal customers.
              </p>
</div>
<style>
              @keyframes frameUp {
                0% { transform: translateY(30px); opacity: 0; }
                18% { transform: translateY(0); opacity: 1; }
                78% { transform: translateY(0); opacity: 1; }
                100% { transform: translateY(30px); opacity: 0; }
              }

              @keyframes stepFadeUp {
                0%, 20% { transform: translateY(10px); opacity: 0; }
                35% { transform: translateY(0); opacity: 1; }
                78% { transform: translateY(0); opacity: 1; }
                100% { transform: translateY(10px); opacity: 0; }
              }

              @keyframes shimmerMove {
                0%, 35% { opacity: 0; transform: translateX(-20%); }
                55% { opacity: 1; transform: translateX(0); }
                78% { opacity: 1; transform: translateX(20%); }
                100% { opacity: 0; transform: translateX(20%); }
              }

              .wf {
                will-change: transform, opacity;
                backface-visibility: hidden;
                transform: translateZ(0);
              }
            </style>

<div className="relative overflow-hidden">

<div className="wf w-full bg-[#0a0a0a] border border-white/10 rounded-t-lg shadow-2xl relative" style={{animation: 'frameUp 7s ease-in-out infinite'}}>

<div className="h-7 border-b border-white/5 flex items-center px-3 gap-1.5 bg-white/[0.02]">
<div className="w-2 h-2 rounded-full bg-red-500/40"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/40"></div>
<div className="w-2 h-2 rounded-full bg-green-500/40"></div>
<div className="ml-auto w-16 h-1.5 bg-white/5 rounded-full"></div>
</div>

<div className="p-4 space-y-3">
<div className="flex gap-3">

<div className="wf w-1/3 space-y-2" style={{animation: 'stepFadeUp 7s ease-in-out infinite', animationDelay: '0.15s'}}>
<div className="h-8 bg-white/10 rounded-sm w-full"></div>
<div className="h-2 bg-white/5 rounded-sm w-2/3"></div>
<div className="h-2 bg-white/5 rounded-sm w-1/2"></div>
</div>

<div className="wf w-2/3 h-20 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/5 rounded-sm relative overflow-hidden" style={{animation: 'stepFadeUp 7s ease-in-out infinite', animationDelay: '0.35s'}}>

<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)] bg-[length:250%_250%]" style={{animation: 'shimmerMove 7s ease-in-out infinite', animationDelay: '0.55s'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 group overflow-hidden hover:border-white/20 transition-all duration-300 bg-zinc-900/40 border-white/10 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll animate">
<div className="relative z-10 h-full flex flex-col">
<div className="mb-8">
<h3 className="text-2xl font-semibold text-white tracking-tight font-manrope mb-2">
                UI/UX Design
              </h3>
<p className="text-sm text-gray-400 font-sans leading-relaxed">
                Defining the visual language, photography, and tone for your
                brand.
              </p>
</div>
<div className="flex overflow-hidden bg-zinc-900/30 w-full h-48 border-white/5 border rounded-none mt-auto relative items-center justify-center p-6">
<style>
                @keyframes cursor-sim-path {
                  0% {
                    transform: translate3d(20px, 20px, 0) scale(1);
                  }
                  25% {
                    transform: translate3d(-168px, -52px, 0) scale(1);
                  }
                  32% {
                    transform: translate3d(-168px, -52px, 0) scale(1);
                  }
                  35% {
                    transform: translate3d(-168px, -52px, 0) scale(0.9);
                  }
                  38% {
                    transform: translate3d(-168px, -52px, 0) scale(1);
                  }
                  55% {
                    transform: translate3d(-72px, -52px, 0) scale(1);
                  }
                  65% {
                    transform: translate3d(-72px, -52px, 0) scale(1);
                  }
                  100% {
                    transform: translate3d(20px, 20px, 0) scale(1);
                  }
                }
              </style>
<div className="w-full max-w-[240px] bg-[#0F0F11] border border-white/10 rounded-lg p-4 shadow-xl relative group-hover:scale-105 transition-transform duration-500">
<div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
<span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wide">
                    Component
                  </span>
<div className="w-6 h-3.5 bg-[#ef233c] rounded-full relative">
<div className="absolute right-0.5 top-0.5 w-2.5 h-2.5 bg-white rounded-full shadow-sm"></div>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between gap-3">
<div className="h-2 w-16 bg-zinc-800 rounded-full"></div>
<div className="h-2 flex-1 bg-zinc-800 rounded-full max-w-[60px]"></div>
</div>
<div className="flex gap-2">
<button className="flex-1 py-1.5 bg-white text-black text-[10px] font-semibold rounded shadow hover:bg-zinc-200 transition-colors">
                      Confirm
                    </button>
<button className="flex-1 py-1.5 bg-zinc-800 text-zinc-300 text-[10px] font-medium rounded border border-white/5 hover:bg-zinc-700 transition-colors">
                      Cancel
                    </button>
</div>
</div>

<div className="absolute -bottom-3 -right-3 text-white drop-shadow-lg z-20 pointer-events-none" style={{animation: 'cursor-sim-path 5s ease-in-out infinite'}}>
<svg className="" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 19.5L5.5 5.5L19.5 11.5L12.5 13.5L8.5 19.5Z" stroke="black" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 group overflow-hidden hover:border-white/20 transition-all duration-300 border-dashed bg-black border-zinc-800 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll animate">
<div className="relative z-10 h-full flex flex-col">
<div className="mb-8 max-w-sm">
<h3 className="text-2xl font-semibold text-white tracking-tight font-manrope mb-2">
                Strategy
              </h3>
<p className="text-sm text-gray-400 font-sans leading-relaxed">
                Data-driven insights to position your brand for market
                leadership.
              </p>
</div>
<div className="overflow-hidden flex flex-col bg-zinc-900/30 w-full h-[280px] border-white/5 border rounded-xl mt-auto pt-8 pr-8 pb-8 pl-8 relative justify-end">
<style>
                @property --num {
                  syntax: '<integer>';
                  initial-value: 0;
                  inherits: false;
                }

                @keyframes countUp {
                  0% {
                    --num: 0;
                    opacity: 0;
                    transform: translateY(10px);
                    filter: blur(4px);
                  }
                  15% {
                    opacity: 1;
                    transform: translateY(0);
                    filter: blur(0);
                  }
                  35% {
                    --num: 127;
                  }
                  85% {
                    --num: 127;
                    opacity: 1;
                    transform: translateY(0);
                    filter: blur(0);
                  }
                  100% {
                    --num: 140;
                    opacity: 0;
                    transform: translateY(-10px);
                    filter: blur(4px);
                  }
                }

                @keyframes barCycle {
                  0% {
                    transform: scaleY(0);
                    opacity: 0;
                  }
                  15% {
                    transform: scaleY(1.05);
                    opacity: 1;
                  }
                  25% {
                    transform: scaleY(1);
                    opacity: 1;
                  }
                  85% {
                    transform: scaleY(1);
                    opacity: 1;
                  }
                  100% {
                    transform: scaleY(0);
                    opacity: 0;
                  }
                }

                .animate-metric-count {
                  animation: countUp 6s cubic-bezier(0.22, 1, 0.36, 1) infinite;
                  counter-reset: num var(--num);
                }

                .animate-metric-count::after {
                  content: "+" counter(num) "%";
                }

                .animate-bar-loop {
                  animation: barCycle 6s cubic-bezier(0.22, 1, 0.36, 1) infinite;
                  transform-origin: bottom;
                  will-change: transform, opacity;
                }
              </style>

<div className="absolute top-6 left-6 z-20 flex flex-col">
<div className="flex items-center gap-2 mb-1 opacity-0 animate-[fadeSlideIn_6s_ease-out_infinite]">
<span className="text-[10px] font-mono font-medium tracking-widest text-zinc-500 uppercase">
                    Growth Rate
                  </span>
<div className="w-1.5 h-1.5 rounded-full bg-[#ef233c] animate-pulse"></div>
</div>
<div className="text-4xl font-semibold text-white font-manrope tracking-tighter tabular-nums animate-metric-count"></div>
</div>

<div className="absolute inset-0 z-0 flex flex-col justify-end pb-8 px-8 pointer-events-none gap-[3rem] opacity-30">
<div className="border-t border-dashed border-zinc-700 w-full h-px"></div>
<div className="border-t border-dashed border-zinc-700 w-full h-px"></div>
<div className="border-t border-dashed border-zinc-700 w-full h-px"></div>
<div className="border-t border-dashed border-zinc-700 w-full h-px"></div>
</div>

<div className="flex items-end justify-between gap-3 h-48 relative z-10 w-full">

<div className="w-full flex flex-col justify-end h-full group">
<div className="w-full bg-zinc-800 rounded-t-sm h-[35%] relative animate-bar-loop opacity-0" style={{animationDelay: '0.1s'}}>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>
<span className="text-[10px] text-zinc-500 font-mono text-center mt-3 opacity-0 animate-[fadeSlideIn_6s_ease-out_infinite] delay-100">
                    Q1
                  </span>
</div>

<div className="w-full flex flex-col justify-end h-full group">
<div className="w-full bg-zinc-800 rounded-t-sm h-[52%] relative animate-bar-loop opacity-0" style={{animationDelay: '0.2s'}}>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>
<span className="text-[10px] text-zinc-500 font-mono text-center mt-3 opacity-0 animate-[fadeSlideIn_6s_ease-out_infinite] delay-200">
                    Q2
                  </span>
</div>

<div className="w-full flex flex-col justify-end h-full group">
<div className="w-full bg-zinc-700 rounded-t-sm h-[68%] relative animate-bar-loop opacity-0" style={{animationDelay: '0.3s'}}>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>
<span className="text-[10px] text-zinc-500 font-mono text-center mt-3 opacity-0 animate-[fadeSlideIn_6s_ease-out_infinite] delay-300">
                    Q3
                  </span>
</div>

<div className="w-full flex flex-col justify-end h-full group">
<div className="w-full bg-[#ef233c] rounded-t-sm h-[88%] relative shadow-[0_0_20px_rgba(239,35,60,0.3)] animate-bar-loop opacity-0" style={{animationDelay: '0.4s'}}>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-white/10"></div>

<div className="absolute top-0 left-0 w-full h-[1px] bg-white/50"></div>
</div>
<span className="text-[10px] text-[#ef233c] font-bold font-mono text-center mt-3 opacity-0 animate-[fadeSlideIn_6s_ease-out_infinite] delay-500">
                    Q4
                  </span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 group overflow-hidden hover:border-white/20 transition-all duration-300 [animation:fadeSlideIn_1s_ease-out_0.7s_both] animate-on-scroll animate bg-zinc-900/40 border-white/10 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm">
<div className="relative z-10 h-full flex flex-col">
<div className="max-w-sm mb-8">
<h3 className="text-2xl font-semibold text-white tracking-tight font-manrope mb-2">
                Content / Motion
              </h3>
<p className="text-sm text-gray-400 font-sans leading-relaxed">
                High-quality asset creation, from photography to 3D motion
                design.
              </p>
</div>
<div className="flex overflow-hidden bg-zinc-900/30 w-full h-[280px] border-white/5 border rounded-none mt-auto relative items-center justify-center">

<div className="flex overflow-hidden absolute top-0 right-0 bottom-0 left-0 items-center justify-center">

<div className="pointer-events-none bg-gradient-to-tr from-red-900/20 via-black to-red-900/20 opacity-50 absolute top-0 right-0 bottom-0 left-0"></div>
<style className="">
                  @keyframes float-visual {
                    0%, 100% { transform: translateY(0px) rotateX(0deg) rotateZ(0deg); }
                    50% { transform: translateY(-15px) rotateX(5deg) rotateZ(2deg); }
                  }
                  .visual-anim {
                    animation: float-visual 6s ease-in-out infinite;
                  }
                </style>

<div className="pointer-events-none w-full h-full flex items-center justify-center relative z-10">
<div className="w-80 h-80 visual-anim transition-transform duration-700 ease-out group-hover:scale-110">
<svg className="w-full h-full drop-shadow-[0_20px_50px_rgba(239,35,60,0.25)]" fill="none" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">

<path className="transition-colors duration-500" d="M100 160 L30 125 L100 90 L170 125 Z" fill="#18181b" stroke="#27272a" strokeWidth="1"></path>
<path d="M30 125 V140 L100 175 L170 140 V125" fill="#18181b" fillOpacity="0.6"></path>

<path className="animate-pulse" d="M100 90 V160" opacity="0.4" stroke="#ef233c" stroke-dasharray="4 4" strokeWidth="2"></path>
<circle cx="100" cy="125" opacity="0.3" r="30" stroke="#3f3f46" strokeWidth="1" transform="scale(1 0.5)"></circle>

<g className="origin-center">
<animatetransform attributename="transform" dur="4s" repeatcount="indefinite" type="translate" values="0 0; 0 -8; 0 0"></animatetransform>

<path className="transition-colors duration-500" d="M100 80 L60 60 L100 40 L140 60 Z" fill="#ef233c"></path>

<path className="transition-colors duration-500" d="M60 60 V90 L100 110 V80 L60 60 Z" fill="#d90429"></path>
<path className="transition-colors duration-500" d="M140 60 V90 L100 110 V80 L140 60 Z" fill="#b91c1c"></path>

<path className="" d="M100 40 L140 60 L100 80 L60 60 Z" fill="url(#red-gradient-3d)" opacity="0.6"></path>
</g>

<circle className="" cx="150" cy="50" fill="#ef233c" opacity="0.8" r="4">
<animate attributename="cy" dur="5s" repeatcount="indefinite" values="50; 40; 50"></animate>
<animate attributename="opacity" dur="5s" repeatcount="indefinite" values="0.8; 0.4; 0.8"></animate>
</circle>
<circle className="" cx="50" cy="100" fill="#d90429" opacity="0.6" r="3">
<animate attributename="cy" dur="4s" repeatcount="indefinite" values="100; 110; 100"></animate>
</circle>
<circle className="" cx="170" cy="140" fill="#ef233c" opacity="0.5" r="2">
<animate attributename="cy" dur="3s" repeatcount="indefinite" values="140; 135; 140"></animate>
</circle>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="red-gradient-3d" x1="100" x2="100" y1="40" y2="80">
<stop stop-color="#fff" stop-opacity="0.6"></stop>
<stop offset="1" stop-color="#ef233c" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>

</div>


</div>
</div>
</div>
</div>
</section>
<section className="[animation:fadeSlideIn_1s_ease-out_1s_both] animate-on-scroll w-full max-w-7xl z-20 mt-24 mr-auto mb-24 ml-auto pt-10 pr-2 pb-32 pl-2 relative gap-x-y-6 gap-y-8">

<div className="relative w-full mb-16">
<div className="flex flex-col md:flex-row md:items-end w-full justify-between gap-8 mb-12">
<div className="flex flex-col max-w-2xl gap-6">

<div className="flex gap-3 gap-x-3 gap-y-3 items-center animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]" style={{animationPlayState: 'running'}}>
<span className="uppercase text-sm font-medium text-gray-500 tracking-widest">
                02. HOW IT WORKS
              </span>
</div>

<div className="animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.4s_both]">
<h2 className="md:text-6xl text-5xl font-medium text-white tracking-tighter font-manrope mb-4">
                How We
                <span className="bg-clip-text text-transparent bg-[#ef233c]">
                  Work
                </span>
</h2>
<p className="leading-relaxed text-lg font-light text-gray-400 max-w-xl">
                A transparent, step-by-step workflow designed to make
                collaboration seamless and results predictable. From chaos to
                clarity.
              </p>
</div>
</div>

<button className="group flex min-w-[180px] decoration-0 transition-transform active:scale-95 cursor-pointer outline-none w-auto h-[50px] rounded-none pr-6 pl-6 relative items-center justify-center" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '0px', opacity: '1', border: 'none'}} type="button">
<div className="pointer-events-none transition-opacity ease-in-out duration-[1200ms] group-hover:opacity-0 opacity-100 absolute inset-0" style={{background: 'radial-gradient(15% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '0px', filter: 'blur(15px)'}}></div>
<div className="pointer-events-none transition-opacity ease-in-out duration-[1200ms] group-hover:opacity-100 opacity-0 absolute inset-0" style={{background: 'radial-gradient(60.6% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '0px', filter: 'blur(18px)'}}></div>
<div className="pointer-events-none will-change-auto transition-opacity ease-in-out duration-[1200ms] group-hover:opacity- 50% at 100%, rgb(255, 255, 255) 0%, rgba(255, 0) 100%); border-radius: 0px"></div>
<div className="pointer-events-none will-change-auto transition-opacity ease-in-out duration-[1200ms] group-hover:opacity-100 opacity-0 absolute inset-0" style={{background: 'radial-gradient(60.1% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '0px'}}></div>
<div className="absolute inset-0 rounded-none overflow-hidden pointer-events-none">
<div className="absolute -inset-[300%] animate-[spin_4s_linear_infinite]" style={{background: 'conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 90%, #ffffff 100%)'}}></div>
</div>
<div className="rounded-none absolute top-[1px] right-[1px] bottom-[1px] left-[1px]" style={{backgroundColor: 'rgb(0, 0, 0)', opacity: '1'}}></div>
<div className="relative z-20 flex items-center justify-center gap-2 opacity-1 font-medium text-white tracking-wide" style={{WebkitFontSmoothing: 'antialiased', textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>
              Start a Project
              <svg className="lucide lucide-arrow-right transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</button>
</div>

<div className="pointer-events-none absolute left-0 right-0 -bottom-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="pointer-events-none absolute left-0 right-0 -bottom-8 h-6 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md"></div>
</div>

<section className="bg-black w-full">
<div className="md:px-6 md:pt-6 md:pb-6 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 bg-black w-full border border-white/10">

<div className="group relative border-b border-white/10 lg:border-b-0 lg:border-r p-8 hover:bg-zinc-900/20 transition-all duration-500 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ef233c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-start justify-between mb-8">
<span className="font-mono text-xs font-medium text-zinc-600 group-hover:text-[#ef233c] transition-colors duration-300">
                    01
                  </span>
<div className="p-2 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-white group-hover:border-zinc-700 transition-all duration-300 group-hover:scale-110">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
</div>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight group-hover:text-[#ef233c] transition-colors duration-300">
                  Discovery
                </h3>
<p className="text-sm text-zinc-400 leading-relaxed font-sans">
                  We audit your goals, users, and constraints, then define what
                  “success” looks like.
                </p>
</div>
</div>

<div className="group relative border-b border-white/10 lg:border-b-0 lg:border-r p-8 hover:bg-zinc-900/20 transition-all duration-500 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both]">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ef233c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-start justify-between mb-8">
<span className="font-mono text-xs font-medium text-zinc-600 group-hover:text-[#ef233c] transition-colors duration-300">
                    02
                  </span>
<div className="p-2 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-white group-hover:border-zinc-700 transition-all duration-300 group-hover:scale-110">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
</svg>
</div>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight group-hover:text-[#ef233c] transition-colors duration-300">
                  Strategy
                </h3>
<p className="text-sm text-zinc-400 leading-relaxed font-sans">
                  We map the user journey and technical architecture, so every
                  screen has a purpose.
                </p>
</div>
</div>

<div className="group relative border-b border-white/10 lg:border-b-0 lg:border-r p-8 hover:bg-zinc-900/20 transition-all duration-500 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.4s_both]">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ef233c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-start justify-between mb-8">
<span className="font-mono text-xs font-medium text-zinc-600 group-hover:text-[#ef233c] transition-colors duration-300">
                    03
                  </span>
<div className="p-2 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-white group-hover:border-zinc-700 transition-all duration-300 group-hover:scale-110">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19l7-7 3 3-7 7-3-3z"></path>
<path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
<path d="M2 2l7.586 7.586"></path>
<circle cx="11" cy="11" r="2"></circle>
</svg>
</div>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight group-hover:text-[#ef233c] transition-colors duration-300">
                  Design
                </h3>
<p className="text-sm text-zinc-400 leading-relaxed font-sans">
                  We craft high-fidelity UI and clickable prototypes, then
                  iterate fast with your feedback.
                </p>
</div>
</div>

<div className="group relative border-b border-white/10 lg:border-b-0 lg:border-r p-8 hover:bg-zinc-900/20 transition-all duration-500 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.5s_both]">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ef233c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-start justify-between mb-8">
<span className="font-mono text-xs font-medium text-zinc-600 group-hover:text-[#ef233c] transition-colors duration-300">
                    04
                  </span>
<div className="p-2 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-white group-hover:border-zinc-700 transition-all duration-300 group-hover:scale-110">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="16 18 22 12 16 6"></polyline>
<polyline points="8 6 2 12 8 18"></polyline>
</svg>
</div>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight group-hover:text-[#ef233c] transition-colors duration-300">
                  Build
                </h3>
<p className="text-sm text-zinc-400 leading-relaxed font-sans">
                  We ship production-ready code, optimized for performance, SEO,
                  and clean handoff.
                </p>
</div>
</div>

<div className="group relative p-8 hover:bg-zinc-900/20 transition-all duration-500 border-white/10 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.6s_both]">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ef233c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-start justify-between mb-8">
<span className="font-mono text-xs font-medium text-zinc-600 group-hover:text-[#ef233c] transition-colors duration-300">
                    05
                  </span>
<div className="p-2 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-white group-hover:border-zinc-700 transition-all duration-300 group-hover:scale-110">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
<path d="M9 12H4s.55-3.03 2-4c1.62-1.1 4-1 4-1s.25 4 1 6c.9 2.4 2 5 2 5l-9-9"></path>
</svg>
</div>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight group-hover:text-[#ef233c] transition-colors duration-300">
                  Launch
                </h3>
<p className="text-sm text-zinc-400 leading-relaxed font-sans">
                  We deploy, QA, and track results. You get analytics,
                  documentation, and a smooth handoff.
                </p>
</div>
</div>
</div>
</div>
</section>
</section>
<div className="mx-auto max-w-7xl"></div>
<section className="overflow-hidden [animation:fadeSlideIn_1s_ease-out_1s_both] animate-on-scroll w-full max-w-7xl z-20 mt-0 mr-auto mb-32 ml-auto pt-20 pb-20 relative">


<div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none select-none -z-10 mix-blend-screen"></div>
<div className="z-10 pr-6 pl-6 relative" style={{}}>

<div className="flex flex-col md:flex-row md:items-end w-full mt-0 mb-12 relative gap-x-8 gap-y-0 justify-between z-30" style={{}}>
<div className="flex flex-col max-w-3xl gap-x-6 gap-y-6">

<div className="flex gap-3 gap-x-3 gap-y-3 items-center animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]" style={{animationPlayState: 'running'}}>
<span className="uppercase text-sm font-medium text-gray-500 tracking-widest">
                03. TESTIMONIALS
              </span>
</div>

<div className="flex flex-col gap-x-6 gap-y-6 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.4s_both]" style={{animationPlayState: 'running'}}>
<h2 className="md:text-6xl text-5xl font-medium text-white tracking-tighter font-manrope">
                Loved by
                <span className="bg-clip-text text-transparent bg-[#ef233c]">
                  passionate
                </span>
</h2>
<p className="leading-relaxed text-lg font-light text-gray-400 max-w-xl">
                Everything you need to create, collaborate, and convert. Built
                for modern teams.
              </p>
</div>
</div>
<button className="group flex min-w-[180px] decoration-0 transition-transform active:scale-95 cursor-pointer outline-none w-auto h-[50px] rounded-none pr-6 pl-6 relative items-center justify-center" data-framer-name="desktop" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '0px', opacity: '1', border: 'none'}} type="button">

<div className="pointer-events-none transition-opacity ease-in-out duration-[1200ms] group-hover:opacity-0 opacity-100 absolute inset-0" data-framer-name="Glow" style={{background: 'radial-gradient(15% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '0px', filter: 'blur(15px)'}}></div>

<div className="pointer-events-none transition-opacity ease-in-out duration-[1200ms] group-hover:opacity-100 opacity-0 absolute inset-0" data-framer-name="Glow Hover" style={{background: 'radial-gradient(60.6% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '0px', filter: 'blur(18px)'}}></div>

<div className="pointer-events-none will-change-auto transition-opacity ease-in-out duration-[1200ms] group-hover:opacity-0 opacity-100 absolute inset-0" data-framer-name="Stroke" style={{background: 'radial-gradient(10.7% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '0px'}}></div>

<div className="pointer-events-none will-change-auto transition-opacity ease-in-out duration-[1200ms] group-hover:opacity-100 opacity-0 absolute inset-0" data-framer-name="Stroke Hover" style={{background: 'radial-gradient(60.1% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '0px'}}></div>

<div className="absolute inset-0 rounded-none overflow-hidden pointer-events-none">
<div className="absolute -inset-[300%] animate-[spin_4s_linear_infinite]" style={{background: 'conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 90%, #ffffff 100%)'}}></div>
</div>

<div className="rounded-none absolute top-[1px] right-[1px] bottom-[1px] left-[1px]" data-framer-name="Fill" style={{backgroundColor: 'rgb(0, 0, 0)', opacity: '1'}}></div>

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

<div className="pointer-events-none absolute left-0 right-0 -bottom-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

<div className="pointer-events-none absolute left-0 right-0 -bottom-6 h-6 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md"></div>
</div>

<div className="overflow-hidden z-20 bg-black w-full h-[800px] relative animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.6s_both]" id="marquee-wrapper">

<div className="z-10 pointer-events-none bg-gradient-to-b from-black to-transparent w-full h-32 absolute top-0 left-0" style={{}}></div>
<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-6" style={{maskImage: 'linear-gradient(180deg, transparent, black 30%, black 60%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 30%, black 60%, transparent)'}}>

<div className="h-full overflow-hidden relative">
<div className="marquee-track flex flex-col gap-6 will-change-transform" data-direction="up" data-speed="0.5" style={{transform: 'translate3d(0px, -0.5px, 0px)'}}>

<div className="p-8 border border-zinc-800 border-dashed bg-zinc-900/20 backdrop-blur-sm">
<div className="flex gap-1 text-zinc-500 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
<p className="text-zinc-300 font-medium font-sans mb-6">
                    "This platform completely changed how we approach design
                    systems. The speed and consistency is mind-blowing."
                  </p>
<div className="flex items-center gap-3">
<img alt="Sarah" className="w-8 h-8 rounded-full border border-white/10" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop"/>
<div className="">
<div className="text-sm text-white font-semibold font-manrope">
                        Sarah Jenkins
                      </div>
<div className="text-xs text-zinc-500 font-medium">
                        Stripe
                      </div>
</div>
</div>
</div>
<div className="p-8 border border-white/5 bg-zinc-900/40 backdrop-blur-sm">
<p className="text-zinc-400 italic mb-4 font-sans text-sm">
                    "Just shipped my portfolio using the new components. Detail
                    is insane. 🚀"
                  </p>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px] font-bold">
                      JD
                    </div>
<span className="text-xs text-zinc-500 font-mono">
                      @jamesbuilds
                    </span>
</div>
</div>
<div className="p-8 border border-zinc-800 border-dashed bg-black/50">
<p className="text-zinc-300 mb-6 font-sans">
                    "Accessibility features saved us weeks. Rare to find a kit
                    this robust."
                  </p>
<div className="flex items-center gap-3">
<img alt="Marcus" className="w-8 h-8 rounded-full border border-white/10" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="text-sm text-white font-semibold font-manrope">
                        Marcus T.
                      </div>
<div className="text-xs text-zinc-500 font-medium">
                        Linear
                      </div>
</div>
</div>
</div>

<div className="p-8 border border-zinc-800 border-dashed bg-zinc-900/20 backdrop-blur-sm">
<div className="flex gap-1 text-zinc-500 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
<p className="text-zinc-300 font-medium font-sans mb-6">
                    "This platform completely changed how we approach design
                    systems. The speed and consistency is mind-blowing."
                  </p>
<div className="flex items-center gap-3">
<img alt="Sarah" className="w-8 h-8 rounded-full border border-white/10" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="text-sm text-white font-semibold font-manrope">
                        Sarah Jenkins
                      </div>
<div className="text-xs text-zinc-500 font-medium">
                        Stripe
                      </div>
</div>
</div>
</div>
<div className="p-8 border border-white/5 bg-zinc-900/40 backdrop-blur-sm">
<p className="text-zinc-400 italic mb-4 font-sans text-sm">
                    "Just shipped my portfolio using the new components. Detail
                    is insane. 🚀"
                  </p>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px] font-bold">
                      JD
                    </div>
<span className="text-xs text-zinc-500 font-mono">
                      @jamesbuilds
                    </span>
</div>
</div>
<div className="p-8 border border-zinc-800 border-dashed bg-black/50">
<p className="text-zinc-300 mb-6 font-sans">
                    "Accessibility features saved us weeks. Rare to find a kit
                    this robust."
                  </p>
<div className="flex items-center gap-3">
<img alt="Marcus" className="w-8 h-8 rounded-full border border-white/10" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="text-sm text-white font-semibold font-manrope">
                        Marcus T.
                      </div>
<div className="text-xs text-zinc-500 font-medium">
                        Linear
                      </div>
</div>
</div>
</div>
</div>
</div>

<div className="h-full overflow-hidden relative hidden md:block" style={{}}>
<div className="marquee-track flex flex-col gap-6 will-change-transform gap-x-6 gap-y-6" data-direction="down" data-speed="0.6" style={{transform: 'translate3d(0px, -666.9px, 0px)'}}>

<div className="p-8 border border-zinc-700 bg-black shadow-2xl relative group">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<p className="text-xl text-white font-medium mb-6 leading-relaxed font-manrope">
                    "I've used every UI kit out there. Nothing comes close to
                    the polish and flexibility of this one."
                  </p>
<div className="flex items-center gap-3">
<img alt="Michael" className="w-10 h-10 rounded-full border border-white/20" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="text-sm text-white font-semibold font-manrope">
                        Michael Chen
                      </div>
<div className="text-xs text-zinc-500 font-medium">
                        CTO at Vercel
                      </div>
</div>
</div>
</div>
<div className="p-8 border border-white/5 bg-zinc-900/40">
<p className="text-zinc-300 mb-6 font-sans">
                    "Finally, a tool that bridges the gap between design and
                    code perfectly."
                  </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center text-xs font-bold border border-purple-500/20">
                      EL
                    </div>
<div>
<div className="text-sm text-white font-semibold font-manrope">
                        Elena Rodriguez
                      </div>
<div className="text-xs text-zinc-500 font-medium">
                        Frontend Lead
                      </div>
</div>
</div>
</div>
<div className="p-8 border border-zinc-800 border-dashed bg-black/50">
<div className="flex gap-1 text-zinc-600 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
<p className="text-zinc-300 mb-6 font-sans">
                    "Refactoring legacy apps was daunting until we adopted this
                    system."
                  </p>
<div className="flex items-center gap-3">
<img alt="Sofia" className="w-8 h-8 rounded-full border border-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="text-sm text-white font-semibold font-manrope">
                        Sofia Davis
                      </div>
<div className="text-xs text-zinc-500 font-medium">
                        Notion
                      </div>
</div>
</div>
</div>

<div className="p-8 border border-zinc-700 bg-black shadow-2xl relative group">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<p className="text-xl text-white font-medium mb-6 leading-relaxed font-manrope">
                    "I've used every UI kit out there. Nothing comes close to
                    the polish and flexibility of this one."
                  </p>
<div className="flex items-center gap-3">
<img alt="Michael" className="w-10 h-10 rounded-full border border-white/20" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="text-sm text-white font-semibold font-manrope">
                        Michael Chen
                      </div>
<div className="text-xs text-zinc-500 font-medium">
                        CTO at Vercel
                      </div>
</div>
</div>
</div>
<div className="p-8 border border-white/5 bg-zinc-900/40">
<p className="text-zinc-300 mb-6 font-sans">
                    "Finally, a tool that bridges the gap between design and
                    code perfectly."
                  </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center text-xs font-bold border border-purple-500/20">
                      EL
                    </div>
<div>
<div className="text-sm text-white font-semibold font-manrope">
                        Elena Rodriguez
                      </div>
<div className="text-xs text-zinc-500 font-medium">
                        Frontend Lead
                      </div>
</div>
</div>
</div>
<div className="p-8 border border-zinc-800 border-dashed bg-black/50">
<div className="flex gap-1 text-zinc-600 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
<p className="text-zinc-300 mb-6 font-sans">
                    "Refactoring legacy apps was daunting until we adopted this
                    system."
                  </p>
<div className="flex items-center gap-3">
<img alt="Sofia" className="w-8 h-8 rounded-full border border-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="text-sm text-white font-semibold font-manrope">
                        Sofia Davis
                      </div>
<div className="text-xs text-zinc-500 font-medium">
                        Notion
                      </div>
</div>
</div>
</div>
</div>
</div>

<div className="h-full overflow-hidden relative hidden lg:block">
<div className="marquee-track flex flex-col gap-6 will-change-transform" data-direction="up" data-speed="0.55" style={{transform: 'translate3d(0px, -0.55px, 0px)'}}>

<div className="bg-zinc-900/40 border-white/5 border pt-8 pr-8 pb-8 pl-8">
<p className="text-zinc-300 mb-6 font-sans">
                    "We redesigned our entire SaaS dashboard in a weekend.
                    Robust and accessible."
                  </p>
<div className="flex items-center gap-3">
<img alt="David" className="w-8 h-8 rounded-full border border-white/10" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="text-sm text-white font-semibold font-manrope">
                        David Kim
                      </div>
<div className="text-xs text-zinc-500 font-medium">Stack</div>
</div>
</div>
</div>
<div className="p-8 border border-white/5 bg-zinc-900/40">
<p className="text-zinc-300 mb-6 font-sans">
                    "Best investment we made for our design team this year. ROI
                    was immediate."
                  </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xs font-bold border border-emerald-500/20">
                      AK
                    </div>
<div>
<div className="text-sm text-white font-semibold font-manrope">
                        Anna K.
                      </div>
<div className="text-xs text-zinc-500 font-medium">
                        Product Director
                      </div>
</div>
</div>
</div>
<div className="p-8 border border-zinc-800 border-dashed bg-black/50">
<p className="text-zinc-300 mb-6 font-sans">
                    "I've cancelled 3 other subscriptions. This is the only UI
                    kit I need."
                  </p>
<div className="flex items-center gap-3">
<img alt="Alex" className="w-8 h-8 rounded-full border border-white/10" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&amp;h=100&amp;fit=crop"/>
<div className="">
<div className="text-sm text-white font-semibold font-manrope">
                        Alex Morgan
                      </div>
<div className="text-xs text-zinc-500 font-medium">
                        Indie Dev
                      </div>
</div>
</div>
</div>

<div className="p-8 border border-white/5 bg-zinc-900/40">
<p className="text-zinc-300 mb-6 font-sans">
                    "We redesigned our entire SaaS dashboard in a weekend.
                    Robust and accessible."
                  </p>
<div className="flex items-center gap-3">
<img alt="David" className="w-8 h-8 rounded-full border border-white/10" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="text-sm text-white font-semibold font-manrope">
                        David Kim
                      </div>
<div className="text-xs text-zinc-500 font-medium">Stack</div>
</div>
</div>
</div>
<div className="p-8 border border-white/5 bg-zinc-900/40">
<p className="text-zinc-300 mb-6 font-sans">
                    "Best investment we made for our design team this year. ROI
                    was immediate."
                  </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xs font-bold border border-emerald-500/20">
                      AK
                    </div>
<div>
<div className="text-sm text-white font-semibold font-manrope">
                        Anna K.
                      </div>
<div className="text-xs text-zinc-500 font-medium">
                        Product Director
                      </div>
</div>
</div>
</div>
<div className="p-8 border border-zinc-800 border-dashed bg-black/50">
<p className="text-zinc-300 mb-6 font-sans">
                    "I've cancelled 3 other subscriptions. This is the only UI
                    kit I need."
                  </p>
<div className="flex items-center gap-3">
<img alt="Alex" className="w-8 h-8 rounded-full border border-white/10" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="text-sm text-white font-semibold font-manrope">
                        Alex Morgan
                      </div>
<div className="text-xs text-zinc-500 font-medium">
                        Indie Dev
                      </div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</section>
<section className="[animation:fadeSlideIn_1s_ease-out_1s_both] animate-on-scroll w-full max-w-7xl z-20 mt-0 mr-auto mb-32 ml-auto pt-6 pr-6 pb-6 pl-6 relative">

<div className="flex flex-col md:flex-row md:items-end w-full mt-0 mb-12 relative gap-x-8 gap-y-0 justify-between">
<div className="flex flex-col max-w-3xl gap-x-6 gap-y-6">

<div className="flex items-center gap-3 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]" style={{animationPlayState: 'running'}}>
<span className="uppercase text-sm font-medium text-gray-500 tracking-widest">
              03. PRICING
            </span>
</div>

<div className="flex flex-col gap-x-6 gap-y-6 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.4s_both]" style={{animationPlayState: 'running'}}>
<h2 className="md:text-6xl text-5xl font-medium text-white tracking-tighter font-manrope">
              Simple, transparent
              <span className="bg-clip-text text-transparent bg-[#ef233c]">
                pricing
              </span>
</h2>
<p className="leading-relaxed text-lg font-light text-gray-400 max-w-xl">
              Choose the perfect plan for your business needs. Pause or cancel
              anytime.
            </p>
</div>
</div>

<div className="pointer-events-none absolute left-0 right-0 -bottom-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

<div className="pointer-events-none absolute left-0 right-0 -bottom-6 h-6 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md"></div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 mb-12 pt-4 pr-4 pb-4 pl-4 gap-x-6 gap-y-6" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))'}}>

<div className="lg:col-span-4 flex flex-col h-full bg-black border p-8 md:p-10 hover:border-zinc-700 transition-colors duration-300 border-dashed border-zinc-800 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll animate">
<div className="mb-auto">
<h3 className="text-4xl font-medium text-white tracking-tight font-manrope mb-4">
              Growth
            </h3>
<p className="text-zinc-400 text-base font-sans leading-relaxed mb-8 h-12">
              Perfect for growing businesses with steady design needs.
            </p>

<div className="inline-flex bg-zinc-900/50 w-fit border-zinc-800 border rounded-sm mb-8 p-1 items-center" id="toggle-growth">
<button className="px-4 py-1.5 bg-zinc-700 text-white text-xs font-semibold font-sans rounded-sm shadow-sm transition-all" data-period="monthly" onclick="updatePricing('growth', 'monthly')">
                Monthly
              </button>
<button className="px-4 py-1.5 text-xs font-medium text-zinc-500 font-sans bg-transparent rounded-sm hover:text-zinc-300 transition-colors" data-period="yearly" onclick="updatePricing('growth', 'yearly')">
                Yearly
              </button>
</div>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-[1.5rem] align-top text-zinc-400 font-medium translate-y-2">
                $
              </span>

<span className="text-6xl font-medium text-white tracking-tighter font-manrope" id="price-growth">
                3,000
              </span>
<span className="text-zinc-500 text-lg font-normal font-sans">
                / mo
              </span>
</div>
<p className="text-zinc-500 text-sm font-sans mb-10 transition-opacity duration-300" id="desc-growth">
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

<div className="lg:col-span-4 flex flex-col h-full bg-zinc-900/30 border p-8 md:p-10 relative overflow-hidden transition-colors duration-300 border-dashed border-zinc-800 hover:border-zinc-700 [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll animate">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-[#ef233c]/10 blur-[90px] rounded-full pointer-events-none"></div>
<div className="mb-auto relative z-10">
<div className="flex items-center justify-between mb-4">
<h3 className="text-4xl font-medium text-white tracking-tight font-manrope">
                Scale
              </h3>
<span className="text-[10px] uppercase font-medium text-white tracking-wider bg-[#ef233c] rounded-sm px-2 py-1 shadow-[0_0_10px_rgba(239,35,60,0.35)]">
                Most Popular
              </span>
</div>
<p className="text-zinc-400 text-base font-sans leading-relaxed mb-8 h-12">
              For teams that need to move fast and ship often.
            </p>

<div className="inline-flex items-center border border-zinc-800 mb-8 w-fit bg-zinc-900/50 p-1 rounded-sm" id="toggle-scale">
<button className="px-4 py-1.5 bg-zinc-700 text-white text-xs font-semibold font-sans rounded-sm shadow-sm transition-all" data-period="monthly" onclick="updatePricing('scale', 'monthly')">
                Monthly
              </button>
<button className="px-4 py-1.5 text-xs font-medium text-zinc-500 font-sans bg-transparent rounded-sm hover:text-zinc-300 transition-colors" data-period="yearly" onclick="updatePricing('scale', 'yearly')">
                Yearly
              </button>
</div>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-[1.5rem] text-zinc-400 font-medium translate-y-2">
                $
              </span>

<span className="text-6xl font-medium text-white tracking-tighter font-manrope" id="price-scale">
                5,000
              </span>
<span className="text-zinc-500 text-lg font-sans">/ mo</span>
</div>
<p className="text-zinc-500 text-sm font-sans mb-10 transition-opacity duration-300" id="desc-scale">
              Pause or cancel anytime.
            </p>
<button className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold font-sans hover:bg-zinc-200 transition-all w-full">
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

<div className="lg:col-span-4 flex flex-col gap-6 h-full [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll animate">

<div className="flex flex-col flex-1 bg-black border p-8 md:p-10 hover:border-zinc-700 transition-colors duration-300 border-dashed border-zinc-800">
<h3 className="text-4xl font-medium text-white tracking-tight font-manrope mb-4">
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
                  6k
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

</section>
<section className="[animation:fadeSlideIn_1s_ease-out_1s_both] animate-on-scroll w-full max-w-7xl z-20 mt-32 mr-auto mb-32 ml-auto pr-6 pl-6 relative">
<div className="grid lg:grid-cols-12 gap-16 items-start">

<div className="lg:col-span-5 pt-4 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll animate">
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

<div className="lg:col-span-7 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll animate">
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
<footer className="overflow-hidden border-dashed [animation:fadeSlideIn_1s_ease-out_1s_both] animate-on-scroll text-white bg-black w-full border-zinc-800 border-t relative">

<div className="w-full max-w-7xl mx-auto border-x border-dashed border-zinc-800">

<div className="grid lg:grid-cols-12">

<div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-dashed border-zinc-800 relative min-h-[360px] [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll animate">
<div className="">

<div className="flex mb-8 gap-x-3 gap-y-3 items-center">
<div className="grid grid-cols-2 gap-1 w-8 h-8 opacity-90">
<div className="bg-[#ef233c] w-full h-full rounded-sm"></div>
<div className="w-full h-full bg-zinc-700 rounded-sm [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll animate"></div>
<div className="w-full h-full bg-zinc-800 rounded-sm"></div>
<div className="w-full h-full bg-white rounded-sm shadow-[0_0_10px_rgba(255,255,255,0.4)]"></div>
</div>
<span className="text-2xl font-bold tracking-tight text-white font-manrope">
                  Creative
                </span>
</div>
<p className="text-zinc-400 max-w-sm text-sm leading-relaxed mb-12 font-medium">
                We offer clarity and collaboration tools to help teams
                effectively plan, track, and launch digital products.
              </p>
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

<div className="w-full h-auto py-12 md:py-24 px-4 overflow-hidden flex justify-center items-center relative bg-black select-none [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll animate">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)] pointer-events-none"></div>
<h2 className="text-[14vw] leading-[0.8] font-bold text-transparent tracking-tighter pointer-events-none font-manrope" style={{WebkitTextStroke: '1px rgba(63, 63, 70, 0.5)'}}>
            CREATIVE
          </h2>

<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
</div>
</div>

<div className="w-full py-8 text-center border-t border-dashed border-zinc-800 bg-black z-20 relative [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll animate">
<p className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em] font-sans">
          Made with love by
          <a className="hover:text-white transition-colors text-[#ef233c]" href="#">
            Creative Team
          </a>
</p>
</div>
</footer>


    </>
  );
}
