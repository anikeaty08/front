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
        


      lucide.createIcons();
    


      (function() {
        const track = document.getElementById('hero-scroll-track');
        const flipper = document.getElementById('dashboard-flipper');
        const content = document.getElementById('dashboard-content');
        const title = document.getElementById('hero-title-group');

        function runAnimations() {
           const counters = content.querySelectorAll('.count-up');
           counters.forEach(counter => {
               const value = parseFloat(counter.getAttribute('data-value'));
               const prefix = counter.getAttribute('data-prefix') || '';
               const suffix = counter.getAttribute('data-suffix') || '';
               counter.innerText = prefix + '0' + suffix;
               
               const duration = 1200;
               let startTimestamp = null;
               const step = (timestamp) => {
                 if (!startTimestamp) startTimestamp = timestamp;
                 const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                 const ease = 1 - Math.pow(1 - progress, 3);
                 const current = ease * value;
                 const isFloat = value % 1 !== 0;
                 const formatted = isFloat ? current.toFixed(1) : Math.floor(current);
                 counter.innerText = prefix + formatted + suffix;
                 if (progress < 1) {
                   window.requestAnimationFrame(step);
                 } else {
                   counter.innerText = prefix + value + suffix;
                 }
               };
               window.requestAnimationFrame(step);
           });
        }

        const state1HTML = content.innerHTML;

        const state2HTML = `
          <div class="h-11 border-b border-gray-100/60 flex items-center px-4 gap-4 bg-gradient-to-r from-gray-50/80 to-white/80">
            <div class="flex gap-2">
              <div class="w-2.5 h-2.5 rounded-full bg-[#FF5F57] border border-[#E0443E]/30"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-[#FEBC2E] border border-[#D89E24]/30"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-[#28C840] border border-[#1AAB29]/30"></div>
            </div>
            <div class="flex-1 flex justify-center">
              <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/60 border border-gray-200/50 text-[10px] text-gray-400 font-medium shadow-sm">
                <i data-lucide="book-open" width="10"></i>
                system.brandappart.com
              </div>
            </div>
          </div>
          <div class="flex h-[400px] md:h-[520px]">
            <div class="w-16 md:w-60 border-r border-gray-100/60 bg-gray-50/40 p-4 flex flex-col gap-1 hidden md:flex">
              <div class="flex items-center gap-3 px-2 py-3 mb-6">
                <div class="w-8 h-8 rounded-lg bg-[#1d1d1f] flex items-center justify-center text-white shadow-lg shadow-black/20">
                  <i data-lucide="library" width="16"></i>
                </div>
                <span class="font-semibold text-sm text-gray-800 tracking-tight">Design System</span>
              </div>
              <div class="space-y-1">
                <div class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100/50 text-xs font-medium text-gray-500 transition-colors cursor-pointer">
                  <i data-lucide="layout-grid" width="14"></i>
                  Overview
                </div>
                <div class="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white shadow-sm border border-gray-200/50 text-xs font-semibold text-gray-800">
                  <i data-lucide="type" width="14" class="text-[#d49a1a]"></i>
                  Typography
                </div>
                <div class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100/50 text-xs font-medium text-gray-500 transition-colors cursor-pointer">
                  <i data-lucide="palette" width="14"></i>
                  Colors
                </div>
                <div class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100/50 text-xs font-medium text-gray-500 transition-colors cursor-pointer">
                  <i data-lucide="component" width="14"></i>
                  Components
                </div>
              </div>
            </div>
            <div class="flex-1 bg-white/70 p-6 md:p-10 overflow-hidden relative flex flex-col">
              <div class="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
              <div class="relative z-10 mb-8">
                 <h3 class="text-2xl font-display font-semibold text-[#1d1d1f] tracking-tight">Typography & Color</h3>
                 <p class="text-xs text-gray-500 mt-1 font-medium">Primary brand assets v2.4</p>
              </div>
              <div class="grid grid-cols-2 gap-6 relative z-10 h-full">
                 <div class="col-span-1 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between group hover:border-[#d49a1a]/30 transition-colors">
                    <div class="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Display Font</div>
                    <div class="text-6xl font-display font-medium text-[#1d1d1f]">Aa</div>
                    <div class="text-sm font-display text-gray-600">Space Grotesk<br><span class="text-gray-400 text-xs"><span class="count-up" data-value="3">0</span> Styles</span></div>
                 </div>
                 <div class="col-span-1 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between group hover:border-[#d49a1a]/30 transition-colors">
                    <div class="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Brand Palette</div>
                    <div class="flex gap-2">
                       <div class="h-12 w-12 rounded-full bg-[#d49a1a] shadow-lg shadow-[#d49a1a]/20"></div>
                       <div class="h-12 w-12 rounded-full bg-[#1d1d1f] shadow-lg shadow-black/20"></div>
                       <div class="h-12 w-12 rounded-full bg-[#f5f5f7] border border-gray-200"></div>
                    </div>
                    <div class="text-xs text-gray-500 font-mono"><span class="count-up" data-value="2">0</span> Brand Colors<br>#D49A1A, #1D1D1F</div>
                 </div>
                 <div class="col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mt-auto group hover:border-[#d49a1a]/30 transition-colors">
                    <div class="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-4">Button Components</div>
                    <div class="flex gap-4">
                       <button class="px-5 py-2.5 bg-[#1d1d1f] text-white text-xs font-medium rounded-lg shadow-lg shadow-gray-200">Primary Action</button>
                       <button class="px-5 py-2.5 bg-white border border-gray-200 text-[#1d1d1f] text-xs font-medium rounded-lg hover:bg-gray-50">Secondary</button>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        `;

        let swapped = false;

        runAnimations();

        function handleScroll() {
          if (!track || !flipper) return;

          const rect = track.getBoundingClientRect();
          const viewportH = window.innerHeight;
          const scrollDist = rect.height - viewportH;
          const scrolled = -rect.top;

          let progress = scrolled / scrollDist;
          progress = Math.max(0, Math.min(1, progress));

          if(title) {
             title.style.opacity = Math.max(0, 1 - progress * 2.5);
             title.style.transform = `translateY(${progress * -50}px) scale(${1 - progress * 0.1})`;
             title.style.filter = `blur(${progress * 10}px)`;
          }

          const rotation = progress * 180;
          flipper.style.transform = `rotateX(${rotation}deg)`;

          const distFrom90 = Math.abs(rotation - 90);
          const blurAmount = Math.max(0, (45 - distFrom90) / 10);
          content.style.filter = `brightness(${0.8 + (distFrom90/90)*0.2}) blur(${blurAmount}px)`;

          if (progress > 0.5 && !swapped) {
            content.innerHTML = state2HTML;
            content.style.transform = 'rotateX(180deg)';
            lucide.createIcons();
            runAnimations();
            swapped = true;
          } else if (progress <= 0.5 && swapped) {
            content.innerHTML = state1HTML;
            content.style.transform = 'rotateX(0deg)';
            lucide.createIcons();
            runAnimations();
            swapped = false;
          }
        }

        window.addEventListener('scroll', () => requestAnimationFrame(handleScroll));
        handleScroll();
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen -z-10 hue-rotate-180 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ty3N7ZPaIU7KlWixQFIc"></div>

</div>
</div>
<div className="fixed inset-0 z-0 pointer-events-none flex justify-center w-full h-full select-none">
<div className="w-full max-w-7xl h-full mx-auto px-6 md:px-8">
<div className="w-full h-full border-x border-gray-200/50 grid grid-cols-4">
<div className="border-r border-gray-200/50 h-full"></div>
<div className="border-r border-gray-200/50 h-full"></div>
<div className="border-r border-gray-200/50 h-full"></div>
<div className="h-full"></div>
</div>
</div>
</div><div id="wrapper">
<div className="gradient-blur">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
<style>
    .gradient-blur {
      position: fixed;
      z-index: 5;
      inset: auto 0 0 0;
      height: 42%;
      /* was 65% */
      pointer-events: none;
    }

    .gradient-blur>div,
    .gradient-blur::before,
    .gradient-blur::after {
      position: absolute;
      inset: 0;
    }

    .gradient-blur::before {
      content: "";
      z-index: 1;
      backdrop-filter: blur(0.25px);
      /* was 0.5 */
      mask: linear-gradient(to bottom,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 12.5%,
          rgba(0, 0, 0, 1) 25%,
          rgba(0, 0, 0, 0) 37.5%);
    }

    .gradient-blur>div:nth-of-type(1) {
      z-index: 2;
      backdrop-filter: blur(0.5px);
      /* was 1 */
      mask: linear-gradient(to bottom,
          rgba(0, 0, 0, 0) 12.5%,
          rgba(0, 0, 0, 1) 25%,
          rgba(0, 0, 0, 1) 37.5%,
          rgba(0, 0, 0, 0) 50%);
    }

    .gradient-blur>div:nth-of-type(2) {
      z-index: 3;
      backdrop-filter: blur(1px);
      /* was 2 */
      mask: linear-gradient(to bottom,
          rgba(0, 0, 0, 0) 25%,
          rgba(0, 0, 0, 1) 37.5%,
          rgba(0, 0, 0, 1) 50%,
          rgba(0, 0, 0, 0) 62.5%);
    }

    .gradient-blur>div:nth-of-type(3) {
      z-index: 4;
      backdrop-filter: blur(2px);
      /* was 4 */
      mask: linear-gradient(to bottom,
          rgba(0, 0, 0, 0) 37.5%,
          rgba(0, 0, 0, 1) 50%,
          rgba(0, 0, 0, 1) 62.5%,
          rgba(0, 0, 0, 0) 75%);
    }

    .gradient-blur>div:nth-of-type(4) {
      z-index: 5;
      backdrop-filter: blur(4px);
      /* was 8 */
      mask: linear-gradient(to bottom,
          rgba(0, 0, 0, 0) 50%,
          rgba(0, 0, 0, 1) 62.5%,
          rgba(0, 0, 0, 1) 75%,
          rgba(0, 0, 0, 0) 87.5%);
    }

    .gradient-blur>div:nth-of-type(5) {
      z-index: 6;
      backdrop-filter: blur(8px);
      /* was 16 */
      mask: linear-gradient(to bottom,
          rgba(0, 0, 0, 0) 62.5%,
          rgba(0, 0, 0, 1) 75%,
          rgba(0, 0, 0, 1) 87.5%,
          rgba(0, 0, 0, 0) 100%);
    }

    .gradient-blur>div:nth-of-type(6) {
      z-index: 7;
      backdrop-filter: blur(12px);
      /* was 32 */
      mask: linear-gradient(to bottom,
          rgba(0, 0, 0, 0) 75%,
          rgba(0, 0, 0, 1) 87.5%,
          rgba(0, 0, 0, 1) 100%);
    }

    .gradient-blur::after {
      content: "";
      z-index: 8;
      backdrop-filter: blur(18px);
      /* was 64 */
      mask: linear-gradient(to bottom,
          rgba(0, 0, 0, 0) 87.5%,
          rgba(0, 0, 0, 1) 100%);
    }
  </style>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 bg-[#161617CC] backdrop-blur-md border-b border-[#ffffff1a] h-12 transition-all duration-300">
<div className="max-w-5xl mx-auto px-6 h-full flex items-center justify-between">
<a className="flex items-center gap-2 hover:opacity-80 transition-opacity text-[#f5f5f7]" href="#">
<span className="font-display font-semibold text-lg tracking-tight">brand</span>
</a>
<div className="hidden md:flex gap-8 text-[12px] font-normal tracking-wide">
<a className="text-[#E8E8ED] hover:text-white transition-colors" href="#">
        Work
      </a>
<a className="text-[#E8E8ED] hover:text-white transition-colors" href="#">
        Services
      </a>
<a className="text-[#E8E8ED] hover:text-white transition-colors" href="#">
        Pricing
      </a>
<a className="text-[#E8E8ED] hover:text-white transition-colors" href="#">
        About
      </a>
</div>
<a className="bg-white text-black px-4 py-1 rounded-full text-[11px] font-medium hover:bg-gray-100 transition-colors" href="#">
      Book Sprint
    </a>
</div>
</nav>

<main className="flex-1 w-full pt-[80px]">
<div className="md:px-8 md:py-20 max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">

<div className="relative z-10 w-full" id="hero-scroll-track" style={{height: '250vh', marginBottom: '8rem'}}>
<div className="sticky flex flex-col overflow-visible w-full h-screen top-0 items-center justify-center">

<div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#f5f5f7]/80">
</div>

<div className="flex flex-col z-20 transition-all duration-300 origin-center text-center mb-8 relative items-center" id="hero-title-group" style={{filter: 'blur(0px)'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(212,154,26,0.1)] border border-[rgba(212,154,26,0.2)] text-[#d49a1a] text-[11px] font-medium mb-8 anim-hero backdrop-blur-sm shadow-sm">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d49a1a] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#d49a1a]"></span>
</span>
<span className="">Now booking Q4 2024</span>
</div>
<h1 className="md:text-8xl leading-[1] overflow-visible text-5xl font-semibold text-[#1d1d1f] tracking-tight font-display mb-6">
<span className="clip-text-parent block py-8 overflow-visible leading-[1.2]">
<span className="clip-text-child block text-hero-animated overflow-visible">
    We engineer brands
  </span>
</span>
<span className="clip-text-parent">
<span className="clip-text-child block delay-1 text-hero-animated-secondary">
                    for future tech.
                  </span>
</span>
</h1>
<p className="text-xl text-[#86868b] max-w-2xl leading-relaxed anim-hero delay-200 font-medium">
      We clarify positioning, define tone of voice, and build visual
      systems that work across acquisition and product.
    </p>
</div>

<div className="w-full max-w-5xl mx-auto relative z-30 px-4" style={{perspective: '2500px'}}>
<div className="relative w-full" id="dashboard-flipper" style={{transformStyle: 'preserve-3d', willChange: 'transform'}}>

<div className="relative rounded-2xl border border-gray-200/60 bg-white/40 backdrop-blur-xl shadow-2xl overflow-hidden ring-1 ring-black/5 transition-all duration-300" id="dashboard-content" style={{filter: 'brightness(1) blur(0px)'}}>

<div className="h-11 border-b border-gray-100/60 flex items-center px-4 gap-4 bg-gradient-to-r from-gray-50/80 to-white/80">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] border border-[#E0443E]/30"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E] border border-[#D89E24]/30"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#28C840] border border-[#1AAB29]/30"></div>
</div>
<div className="flex-1 flex justify-center">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/60 border border-gray-200/50 text-[10px] text-gray-400 font-medium shadow-sm">
<svg aria-hidden="true" className="lucide lucide-lock" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="8" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              app.brandappart.com
            </div>
</div>
</div>
<div className="flex h-[400px] md:h-[520px]">
<div className="w-16 md:w-60 border-r border-gray-100/60 bg-gray-50/40 p-4 flex flex-col gap-1 hidden md:flex">
<div className="flex items-center gap-3 px-2 py-3 mb-6">
<div className="w-8 h-8 rounded-lg bg-[#d49a1a] flex items-center justify-center text-white shadow-lg shadow-[#d49a1a]/40">
<i data-lucide="layers" width="16"></i>
</div>
<span className="font-semibold text-sm text-gray-800 tracking-tight">
                          Workspace
                        </span>
</div>
<div className="space-y-1">
<div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white shadow-sm border border-gray-200/50 text-xs font-semibold text-gray-800">
<i className="text-[#d49a1a]" data-lucide="layout-dashboard" width="14"></i>
                Dashboard
              </div>
<div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100/50 text-xs font-medium text-gray-500 transition-colors cursor-pointer">
<i data-lucide="pie-chart" width="14"></i>
                Analytics
              </div>
<div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100/50 text-xs font-medium text-gray-500 transition-colors cursor-pointer">
<i data-lucide="users" width="14"></i>
                Team Members
              </div>
<div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100/50 text-xs font-medium text-gray-500 transition-colors cursor-pointer">
<i data-lucide="settings" width="14"></i>
                Settings
              </div>
</div>
<div className="mt-auto">
<div className="p-4 rounded-2xl bg-gradient-to-br from-[#1d1d1f] to-[#2d2d2f] text-white relative overflow-hidden group/card cursor-pointer">
<div className="relative z-10">
<div className="text-[10px] font-medium opacity-60 mb-1 uppercase tracking-wider">
                    Pro Plan
                  </div>
<div className="text-sm font-semibold mb-2">
                    Upgrade Account
                  </div>
<div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
<div className="h-full w-2/3"></div>
</div>
</div>
<i className="absolute -bottom-2 -right-2 text-white/10 w-16 h-16 group-hover/card:rotate-12 transition-transform duration-500" data-lucide="sparkles"></i>
</div>
</div>
</div>
<div className="flex-1 bg-white/70 p-6 md:p-10 overflow-hidden relative">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none">
</div>
<div className="flex justify-between items-center mb-10 relative z-10">
<div className="">
<h3 className="text-2xl font-display font-semibold text-[#1d1d1f] tracking-tight">
                  Performance
                </h3>
<p className="text-xs text-gray-500 mt-1 font-medium">
                  Real-time data across all channels.
                </p>
</div>
<div className="flex gap-3">
<div className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-600 shadow-sm flex items-center gap-2 cursor-pointer hover:bg-gray-50">
                  Last 30 Days
                  <i data-lucide="chevron-down" width="12"></i>
</div>
<div className="shadow-gray-200 hover:bg-black transition-colors cursor-pointer text-xs font-medium text-white bg-[#1d1d1f] rounded-lg pt-2 pr-3 pb-2 pl-3 shadow-md">
                  Export Report
                </div>
</div>
</div>
<div className="grid grid-cols-3 gap-6 mb-10 relative z-10">
<div className="col-span-1 bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
<div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold mb-3 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  Total Revenue
                </div>
<div className="flex items-end gap-2">
<span className="text-3xl font-display font-semibold text-[#1d1d1f]"><span className="count-up" data-prefix="$" data-suffix="k" data-value="24">$0k</span></span>
<span className="text-[10px] text-green-700 bg-green-50 border border-green-100 px-1.5 py-0.5 rounded-md font-medium mb-1.5">
                              +12%
                            </span>
</div>
</div>
<div className="col-span-1 bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
<div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold mb-3 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  Active Users
                </div>
<div className="flex items-end gap-2">
<span className="text-3xl font-display font-semibold text-[#1d1d1f]"><span className="count-up" data-suffix="k" data-value="1.2">0k</span></span>
<span className="text-[10px] text-green-700 bg-green-50 border border-green-100 px-1.5 py-0.5 rounded-md font-medium mb-1.5">
                              +5%
                            </span>
</div>
</div>
<div className="col-span-1 bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
<div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold mb-3 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                  Churn Rate
                </div>
<div className="flex items-end gap-2">
<span className="text-3xl font-display font-semibold text-[#1d1d1f]"><span className="count-up" data-suffix="%" data-value="0.8">0%</span></span>
<span className="text-[10px] text-gray-500 bg-gray-50 border border-gray-100 px-1.5 py-0.5 rounded-md font-medium mb-1.5">
                              -2%
                            </span>
</div>
</div>
</div>
<div className="h-52 w-full bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-6px_rgba(0,0,0,0.08)] p-6 relative flex items-end justify-between gap-3 overflow-hidden z-10">
<div className="absolute inset-0 flex flex-col justify-between p-6 pointer-events-none">
<div className="w-full h-px bg-gray-50"></div>
<div className="w-full h-px bg-gray-50"></div>
<div className="w-full h-px bg-gray-50"></div>
<div className="w-full h-px bg-gray-50"></div>
</div>
<div className="w-full bg-gray-50 rounded-t-sm h-[30%] relative overflow-hidden group hover:bg-gray-100 transition-colors">
<div className="absolute bottom-0 w-full bg-[#1d1d1f] anim-chart-bar-new" style={{-H: '100%', animationDelay: '0.8s'}}></div>
</div>
<div className="w-full bg-gray-50 rounded-t-sm h-[50%] relative overflow-hidden group hover:bg-gray-100 transition-colors">
<div className="absolute bottom-0 w-full bg-[#1d1d1f] anim-chart-bar-new" style={{-H: '100%', animationDelay: '0.9s'}}></div>
</div>
<div className="w-full bg-gray-50 rounded-t-sm h-[40%] relative overflow-hidden group hover:bg-gray-100 transition-colors">
<div className="absolute bottom-0 w-full bg-[#1d1d1f] anim-chart-bar-new" style={{-H: '100%', animationDelay: '1.0s'}}></div>
</div>
<div className="w-full bg-gray-50 rounded-t-sm h-[70%] relative overflow-hidden group hover:bg-gray-100 transition-colors">
<div className="absolute bottom-0 w-full bg-[#1d1d1f] anim-chart-bar-new" style={{-H: '100%', animationDelay: '1.1s'}}></div>
</div>
<div className="w-full bg-gray-50 rounded-t-sm h-[60%] relative overflow-hidden group hover:bg-gray-100 transition-colors">
<div className="absolute bottom-0 w-full bg-[#1d1d1f] anim-chart-bar-new" style={{-H: '100%', animationDelay: '1.2s'}}></div>
</div>
<div className="w-full bg-gray-50 rounded-t-sm h-[90%] relative overflow-hidden group hover:bg-gray-100 transition-colors">
<div className="absolute bottom-0 w-full bg-[#1d1d1f] anim-chart-bar-new" style={{-H: '100%', animationDelay: '1.3s'}}></div>
</div>
<div className="w-full bg-gray-50 rounded-t-sm h-[75%] relative overflow-hidden group hover:bg-gray-100 transition-colors">
<div className="absolute bottom-0 w-full bg-[#1d1d1f] anim-chart-bar-new" style={{-H: '100%', animationDelay: '1.4s'}}></div>
</div>
<div className="w-full bg-gray-50 rounded-t-sm h-[85%] relative overflow-hidden group hover:bg-gray-100 transition-colors">
<div className="absolute bottom-0 w-full bg-[#1d1d1f] anim-chart-bar-new" style={{-H: '100%', animationDelay: '1.5s'}}></div>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
</div>
</div>

<div className="anim-blur-in mb-32">
<div className="mb-16">
<h2 className="leading-[1.1] md:text-5xl text-3xl font-semibold text-[#1d1d1f] tracking-tight font-display mt-44 mb-6">
              Flexible systems for every
              <span className="text-gray-400">growth stage.</span>
</h2>
<p className="leading-relaxed text-xl font-medium text-[#86868b] max-w-3xl">
              Scale your brand with a comprehensive set of visual tools and
              guidelines — designed to work individually or together across your
              entire product stack.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[560px]">

<div className="md:col-span-2 bg-white rounded-[32px] border border-gray-100/80 p-8 md:p-10 relative overflow-hidden group shadow-sm hover:shadow-2xl hover:shadow-orange-100/40 transition-all duration-700">

<div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-orange-50/50 pointer-events-none"></div>
<div className="absolute bottom-[-30%] left-[-10%] w-[120%] h-[70%] bg-gradient-to-r from-orange-200/40 via-purple-200/30 to-blue-200/40 blur-[80px] opacity-60 group-hover:opacity-100 transition-opacity duration-1000"></div>

<div className="relative z-10 flex justify-between items-start mb-12">
<h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight max-w-sm text-[#1d1d1f]">
                  Deploy and optimise identity globally — web and product.
                </h3>
<button className="w-10 h-10 rounded-full bg-[#F5F5F7] flex items-center justify-center text-[#1d1d1f] transition-transform duration-300 group-hover:scale-110">
<i data-lucide="maximize-2" strokeWidth="2" width="18"></i>
</button>
</div>

<div className="relative z-10 w-full h-full flex items-end justify-center md:justify-start gap-8 translate-y-8 md:translate-y-4 transition-transform duration-700 ease-out">

<div className="rotate-mockup w-[240px] bg-white rounded-[40px] border-[6px] border-[#1d1d1f] shadow-2xl overflow-hidden relative z-20 shrink-0 transform -rotate-3 transition-all duration-700 cubic-bezier(0.165, 0.84, 0.44, 1)">

<div className="absolute top-0 w-full h-6 flex justify-center items-center z-20 pointer-events-none">
<div className="w-20 h-5 bg-black rounded-b-xl"></div>
</div>

<div className="p-6 flex flex-col h-[480px] bg-white relative">
<div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none"></div>
<div className="relative z-10 mt-6">
<div className="w-10 h-10 rounded-full bg-gray-100 mb-6 flex items-center justify-center mx-auto border border-gray-200">
<i className="text-gray-400" data-lucide="fingerprint" width="20"></i>
</div>
<div className="text-center mb-8">
<div className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-2">
                          Total Balance
                        </div>
<div className="text-4xl font-display font-semibold tracking-tighter text-[#1d1d1f]">
                          $26.89
                        </div>
</div>
<div className="space-y-4 mt-auto mb-8 bg-gray-50 p-4 rounded-2xl border border-gray-100">
<div className="flex justify-between text-[11px] text-gray-500 pb-2 border-b border-gray-200/50">
<span>Design Sprint</span>
<span className="font-semibold text-black">$22.60</span>
</div>
<div className="flex justify-between text-[11px] text-gray-500">
<span>VAT (19%)</span>
<span className="font-semibold text-black">$4.29</span>
</div>
</div>
<button className="w-full h-12 bg-[#1d1d1f] text-white rounded-xl flex items-center justify-center text-xs font-medium mt-auto hover:bg-black transition-colors shadow-lg shadow-gray-200">
                        Confirm Payment
                      </button>
</div>
</div>
</div>

<div className="hidden md:block flex-1 bg-white rounded-tl-[24px] shadow-[0_0_50px_-12px_rgba(0,0,0,0.12)] border-l border-t border-gray-100 h-[420px] overflow-hidden relative -mb-16 transform transition-transform duration-700 translate-y-4 group-hover:translate-y-0">
<div className="h-11 border-b border-gray-100 flex items-center px-4 gap-3 bg-white">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
</div>
<div className="bg-gray-50 px-3 py-1.5 rounded-md text-[10px] text-gray-400 flex items-center gap-1.5 shadow-sm border border-gray-100 w-48">
<svg aria-hidden="true" className="lucide lucide-lock" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="8" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span className="opacity-70">checkout.brandappart.com</span>
</div>
</div>
<div className="p-8 bg-[#fafafa] h-full">
<div className="text-[10px] font-bold text-orange-500 tracking-widest uppercase mb-6 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                      Checkout Flow
                    </div>
<div className="grid grid-cols-2 gap-5 max-w-sm">
<div className="col-span-2">
<label className="block text-[10px] font-semibold text-gray-400 mb-1.5 uppercase tracking-wide">
                          Email Address
                        </label>
<div className="h-10 w-full bg-white border border-gray-200 rounded-lg flex items-center px-3 text-xs text-[#1d1d1f] shadow-sm">
                          jane@acme.com
                        </div>
</div>
<div className="col-span-2 mt-1">
<div className="flex gap-3 mb-4">
<button className="flex-1 h-10 bg-[#22c55e] text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 shadow-sm shadow-green-200 hover:bg-green-600 transition-colors">
<i data-lucide="link" width="12"></i>
                            Link
                          </button>
<button className="flex-1 h-10 bg-[#1d1d1f] text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 shadow-sm shadow-gray-300 hover:bg-black transition-colors">
<i data-lucide="apple" width="12"></i>
                            Pay
                          </button>
</div>
<div className="text-center text-[10px] text-gray-300 font-medium my-3 relative">
<span className="bg-[#fafafa] px-2 relative z-10">
                            or pay with card
                          </span>
<div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 -z-0"></div>
</div>
</div>
<div className="col-span-2">
<div className="h-10 w-full bg-white border border-gray-200 rounded-lg flex items-center px-3 text-xs text-gray-400 gap-3 shadow-sm">
<i className="text-gray-300" data-lucide="credit-card" width="14"></i>
                          Card number
                        </div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 bg-[#fbfbfd] rounded-[32px] border border-gray-100 p-8 md:p-10 relative overflow-hidden group min-h-[500px] md:h-auto hover:shadow-2xl transition-all duration-700 hover:shadow-[#d49a1a]/20">

<div className="absolute inset-0 bg-gradient-to-b from-[#fbfbfd] via-[#d49a1a]/5 to-[#d49a1a]/15"></div>
<div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#d49a1a]/10 to-transparent opacity-50 blur-2xl"></div>

<div className="relative z-10 flex justify-between items-start mb-12">
<h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-[#1d1d1f]">
                  Adapt to any
                  <br/>
                  market shift.
                </h3>
<button className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center text-[#1d1d1f] backdrop-blur-md transition-transform duration-300 group-hover:scale-110 shadow-sm border border-white/50">
<i data-lucide="maximize-2" strokeWidth="2" width="18"></i>
</button>
</div>

<div className="relative z-10 flex flex-col gap-5 h-full pb-10">

<div className="lift-card bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 mb-2 transition-transform duration-500 ease-out">
<div className="flex items-start gap-4 mb-5">
<div className="w-10 h-10 rounded-xl bg-[#d49a1a]/10 flex items-center justify-center text-[#d49a1a] border border-[#d49a1a]/20">
<i className="absolute -bottom-2 -right-2 text-white/10 w-16 h-16 group-hover/card:rotate-12 transition-transform duration-500" data-lucide="sparkles"></i>
</div>
<div>
<div className="text-sm font-semibold text-[#1d1d1f]">
                        Pro Plan
                      </div>
<div className="text-xs text-gray-400 font-medium">
                        Billed monthly
                      </div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-gray-500 font-semibold">
                        Asset Usage
                      </span>
<span className="text-gray-400 font-mono">85%</span>
</div>
<div className="text-[10px] text-gray-400 mb-3 font-medium opacity-60">
                      Automated generation
                    </div>
<div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full w-[85%] bg-gradient-to-r from-[#d49a1a] to-[#f5c358] rounded-full"></div>
</div>
</div>
</div>

<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50 flex-1 relative overflow-hidden flex flex-col hover:bg-white transition-colors duration-500">
<div className="mb-6">
<div className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-1">
                      Total Impressions
                    </div>
<div className="text-2xl font-display font-semibold text-[#1d1d1f] tracking-tight">
                      1.9M
                    </div>
</div>
<div className="flex items-end justify-between gap-1 h-32 w-full mt-auto">
<div className="w-1.5 bg-[#d49a1a]/20 rounded-t-sm anim-bar" style={{-H: '20%', animationDelay: '0.1s'}}></div>
<div className="w-1.5 bg-[#d49a1a]/30 rounded-t-sm anim-bar" style={{-H: '35%', animationDelay: '0.15s'}}></div>
<div className="w-1.5 bg-[#d49a1a]/40 rounded-t-sm anim-bar" style={{-H: '50%', animationDelay: '0.2s'}}></div>
<div className="w-1.5 bg-[#d49a1a]/30 rounded-t-sm anim-bar" style={{-H: '30%', animationDelay: '0.25s'}}></div>
<div className="w-1.5 bg-[#d49a1a]/20 rounded-t-sm anim-bar" style={{-H: '25%', animationDelay: '0.3s'}}></div>
<div className="w-1.5 bg-[#d49a1a]/40 rounded-t-sm anim-bar" style={{-H: '60%', animationDelay: '0.35s'}}></div>
<div className="w-1.5 bg-[#d49a1a]/60 rounded-t-sm anim-bar" style={{-H: '80%', animationDelay: '0.4s'}}></div>
<div className="w-1.5 bg-[#d49a1a]/40 rounded-t-sm anim-bar" style={{-H: '45%', animationDelay: '0.45s'}}></div>
<div className="w-1.5 bg-[#d49a1a]/30 rounded-t-sm anim-bar" style={{-H: '40%', animationDelay: '0.5s'}}></div>
<div className="w-1.5 bg-[#d49a1a]/20 rounded-t-sm anim-bar" style={{-H: '30%', animationDelay: '0.55s'}}></div>
<div className="w-1.5 bg-[#d49a1a]/40 rounded-t-sm anim-bar" style={{-H: '55%', animationDelay: '0.6s'}}></div>
<div className="w-1.5 bg-[#d49a1a]/60 rounded-t-sm anim-bar" style={{-H: '75%', animationDelay: '0.65s'}}></div>
<div className="w-1.5 bg-[#d49a1a] rounded-t-sm anim-bar" style={{-H: '90%', animationDelay: '0.7s'}}></div>
<div className="w-1.5 bg-[#d49a1a]/60 rounded-t-sm anim-bar" style={{-H: '65%', animationDelay: '0.75s'}}></div>
<div className="w-1.5 bg-[#d49a1a]/40 rounded-t-sm anim-bar" style={{-H: '50%', animationDelay: '0.8s'}}></div>
<div className="w-1.5 bg-[#d49a1a]/30 rounded-t-sm anim-bar" style={{-H: '35%', animationDelay: '0.85s'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24 md:p-12 lg:p-20 overflow-hidden bg-white w-full border-gray-100 border rounded-[48px] pt-8 pr-8 pb-8 pl-8 relative shadow-[0_2px_40px_rgba(0,0,0,0.04)] gap-x-12 gap-y-12 items-center">

<div className="md:h-[540px] overflow-hidden flex flex-col group isolate bg-[#F9FAFB] w-full h-[460px] border-gray-100 border rounded-[32px] relative items-center justify-end" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 75%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 75%, transparent)'}}>

<div className="[background-size:24px_24px] opacity-60 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute top-12 left-[10%] right-[-10%] bottom-0 bg-white rounded-tl-2xl border border-gray-200 shadow-xl opacity-50 scale-95 origin-bottom-left z-0">
<div className="h-10 border-b border-gray-100 flex items-center px-4 space-x-2">
<div className="w-2 h-2 rounded-full bg-gray-200"></div>
<div className="w-2 h-2 rounded-full bg-gray-200"></div>
</div>
</div>

<div className="z-10 overflow-hidden transition-transform duration-700 ease-out group-hover:-translate-y-2 bg-white w-full border-gray-200 border rounded-t-2xl mb-0 relative left-28 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)]">

<div className="flex bg-white h-11 border-b border-gray-100 px-4 items-center justify-between">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
</div>
<div className="bg-gray-50 border border-gray-100 px-3 py-1 rounded-md text-[10px] text-gray-400 font-medium flex items-center gap-1.5 w-32 justify-center">
<svg fill="none" height="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="8" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
      brand.io
    </div>
<div className="w-10"></div>
</div>

<div className="aspect-[4/3] flex bg-white pt-6 pr-6 pb-6 pl-6 relative items-center justify-center">

<div className="relative w-full max-w-[260px] h-[220px] translate-x-4 md:translate-x-6 scale-[1.02]">

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewbox="0 0 260 220">
<path d="M130 110 L130 50" stroke="#E5E7EB" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<path d="M130 110 L130 170" stroke="#E5E7EB" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<path d="M70 110 L190 110" stroke="#E5E7EB" stroke-dasharray="4 4" strokeWidth="1.5"></path>
</svg>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
<div className="bg-white px-4 py-2 rounded-lg shadow-lg shadow-blue-500/10 border border-blue-100 flex items-center gap-2 ring-1 ring-blue-50 transition-transform duration-300 hover:scale-105">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
<span className="text-xs font-semibold text-gray-900">Brand Value</span>
</div>
</div>

<div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
<div className="bg-white px-3 py-1.5 rounded-md shadow-sm border border-gray-100 flex flex-col items-center">
<span className="text-[9px] text-gray-400 uppercase tracking-wider font-semibold">Time</span>
<span className="text-xs font-bold text-gray-900">14 Days</span>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
<div className="bg-white px-3 py-1.5 rounded-md shadow-sm border border-gray-100 flex flex-col items-center">
<span className="text-[9px] text-gray-400 uppercase tracking-wider font-semibold">Impact</span>
<span className="text-xs font-bold text-green-600">+$120M</span>
</div>
</div>

<div className="absolute top-1/2 left-0 -translate-y-1/2 z-10">
<div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center">
<svg className="text-gray-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>

<div className="absolute top-1/2 right-0 -translate-y-1/2 z-10">
<div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center">
<svg className="text-gray-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col justify-center">
<div className="mb-8">
<span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-900 tracking-tight">
                (01) Service Sprint
              </span>
</div>
<h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1d1d1f] mb-6 leading-[1.05]">
              Logos that drive valuation.
            </h2>
<p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed mb-12 max-w-lg">
              Sprint-based branding for startups raising Series A to C.
              Everything is meticulously designed to ensure scalability.
            </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">

<div className="flex items-start gap-4">
<div className="mt-1 text-blue-600 shrink-0">
<svg className="lucide lucide-check" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div>
<h4 className="text-base font-semibold text-gray-900 mb-1">
                    14 Days
                  </h4>
<p className="text-sm text-gray-500 font-medium">
                    Sprint duration
                  </p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="mt-1 text-blue-600 shrink-0">
<svg className="lucide lucide-check" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div>
<h4 className="text-base font-semibold text-gray-900 mb-1">
                    $120M+ Raised
                  </h4>
<p className="text-sm text-gray-500 font-medium">
                    Client funding
                  </p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="mt-1 text-blue-600 shrink-0">
<svg className="lucide lucide-check" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div>
<h4 className="text-base font-semibold text-gray-900 mb-1">
                    Series A to C
                  </h4>
<p className="text-sm text-gray-500 font-medium">Target stage</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="mt-1 text-blue-600 shrink-0">
<svg className="lucide lucide-check" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div>
<h4 className="text-base font-semibold text-gray-900 mb-1">
                    High Velocity
                  </h4>
<p className="text-sm text-gray-500 font-medium">
                    Rapid deployment
                  </p>
</div>
</div>
</div>
</div>
</div>
<div className="mt-32 mb-44">
<div className="flex justify-between items-end mb-12">
<h2 className="font-display text-4xl font-medium tracking-tight">
              Selected Work
            </h2>
<a className="hidden md:flex items-center gap-2 text-sm font-medium hover:gap-4 transition-all duration-300" href="#">
              View all projects
              <iconify-icon className="" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-x-8 gap-y-8">

<div className="group relative aspect-[4/3] bg-[#0d0d0d] rounded-[30px] overflow-hidden cursor-pointer hover-elastic">
<div className="absolute inset-0 bg-gradient-to-br from-[#d49a1a]/20 to-[#f5c358]/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
<div className="absolute inset-0 p-10 flex flex-col justify-between z-20">
<div className="flex justify-between text-white/60 text-xs uppercase tracking-widest font-medium">
<span>Fintech</span>
<span>2024</span>
</div>
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
<h3 className="text-white text-3xl font-display font-medium mb-2">
                    Vault®
                  </h3>
<p className="text-white/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    Identity &amp; Product Design
                  </p>
</div>
</div>
<img alt="Project" className="absolute inset-0 w-full h-full object-cover anim-reveal-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2a4bfa35-9462-4ac6-9c81-6a5beaf863e6_1600w.jpg" style={{}}/>
</div>

<div className="group relative aspect-[4/3] bg-[#f0f0f0] rounded-[30px] overflow-hidden cursor-pointer mt-0 md:mt-16 hover-elastic">
<div className="absolute inset-0 bg-gradient-to-bl from-[#d49a1a]/20 to-[#f5c358]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
<div className="flex flex-col z-20 pt-10 pr-10 pb-10 pl-10 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between text-black/60 text-xs uppercase tracking-widest font-medium">
<span className="">AI Infrastructure</span>
<span>2023</span>
</div>
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
<h3 className="text-black text-3xl font-display font-medium mb-2">
                    Nexus Core
                  </h3>
<p className="text-black/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    Brand System
                  </p>
</div>
</div>
<img alt="Project" className="absolute inset-0 w-full h-full object-cover anim-reveal-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8ee12030-d881-47e3-a66f-4c7f209811e7_1600w.webp" style={{}}/>
</div>
</div>
</div>

<div className="w-full overflow-hidden mb-32 relative">
<div className="flex w-max animate-marquee items-center opacity-60 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
<div className="flex hover:grayscale-0 transition-all duration-500 opacity-50 pr-4 pl-4 grayscale gap-x-8 gap-y-8" style={{maskImage: 'linear-gradient(90deg, transparent, black 20%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 20%, black 70%, transparent)'}}>

<div className="h-16 flex items-center gap-2 px-6 border border-gray-200 rounded-full">
<div className="w-4 h-4 bg-black rounded-sm"></div>
<span className="font-bold tracking-tight text-xl">ACME</span>
</div>
<div className="h-16 flex items-center gap-2 px-6 border border-gray-200 rounded-full">
<div className="w-4 h-4 rounded-full border-2 border-black"></div>
<span className="font-display font-medium text-xl">Loom</span>
</div>
<div className="h-16 flex items-center gap-2 px-6 border border-gray-200 rounded-full">
<iconify-icon icon="solar:infinity-linear" width="24"></iconify-icon>
<span className="font-sans font-semibold text-xl italic">
                  Raycast
                </span>
</div>
<div className="h-16 flex items-center gap-2 px-6 border border-gray-200 rounded-full">
<div className="w-0 h-0 border-l-[8px] border-l-transparent border-b-[12px] border-b-black border-r-[8px] border-r-transparent"></div>
<span className="font-display font-bold text-xl tracking-widest">
                  VERCEL
                </span>
</div>
<div className="h-16 flex items-center gap-2 px-6 border border-gray-200 rounded-full">
<iconify-icon className="" icon="solar:command-linear" width="24"></iconify-icon>
<span className="font-mono font-medium text-xl">Linear</span>
</div>

<div className="h-16 flex items-center gap-2 px-6 border border-gray-200 rounded-full">
<div className="w-4 h-4 bg-black rounded-sm"></div>
<span className="font-bold tracking-tight text-xl">ACME</span>
</div>
<div className="h-16 flex items-center gap-2 px-6 border border-gray-200 rounded-full">
<div className="w-4 h-4 rounded-full border-2 border-black"></div>
<span className="font-display font-medium text-xl">Loom</span>
</div>
<div className="h-16 flex items-center gap-2 px-6 border border-gray-200 rounded-full">
<iconify-icon icon="solar:infinity-linear" width="24"></iconify-icon>
<span className="font-sans font-semibold text-xl italic">
                  Raycast
                </span>
</div>
</div>
</div>
</div>
<div className="mb-32 py-24 px-8 md:px-20 bg-[#161617] rounded-[40px] relative overflow-hidden text-center anim-scale-reveal">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/30 via-[#161617] to-[#161617]"></div>
<div className="relative z-10 max-w-3xl mx-auto">
<p className="text-[#86868b] text-sm font-medium tracking-widest uppercase mb-8">
              Our Philosophy
            </p>
<h3 className="font-display text-4xl md:text-6xl text-white font-medium leading-tight mb-8">
              We don't just design.
              <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d49a1a] to-[#f5c358]">
                We engineer desire.
              </span>
</h3>
<p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              In a noisy world, only the distinct survive. We strip away the
              non-essential to reveal the core truth of your brand, then amplify
              it with motion, depth, and precision.
            </p>
</div>
</div>
<div className="mb-32">
<div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

<div className="lg:w-1/3 lg:sticky lg:top-32">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100/80 border border-gray-200 text-gray-500 text-[11px] font-medium mb-6 uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-[#d49a1a]"></span>
                Our Expertise
              </div>
<h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] mb-6 leading-tight">
                Comprehensive design capabilities.
              </h2>
<p className="text-lg text-[#86868b] leading-relaxed mb-8 font-medium">
                We don't just make things look good. We build scalable design systems that bridge the gap between marketing and product.
              </p>
<a className="group inline-flex items-center text-sm font-semibold text-[#1d1d1f] hover:opacity-70 transition-opacity" href="#">
                View Service Menu
                <svg className="ml-2 transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative p-8 bg-white rounded-[32px] border border-gray-100 hover:border-gray-300/60 hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-500 hover:-translate-y-1 overflow-hidden">

<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
<span className="text-6xl font-display font-bold text-gray-100 group-hover:text-gray-50 transition-colors">01</span>
</div>

<div className="w-12 h-12 rounded-2xl bg-[#F5F5F7] text-[#1d1d1f] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-[#1d1d1f] group-hover:text-white border border-transparent group-hover:border-gray-500/20">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z">
</path>
</svg>
</div>
<h3 className="text-xl font-display font-semibold text-[#1d1d1f] mb-3 tracking-tight">Branding</h3>
<p className="text-sm text-gray-500 leading-relaxed font-medium">
      Strategic positioning, visual identity systems, and tone of voice that cuts through the noise.
    </p>
</div>

<div className="group relative p-8 bg-white rounded-[32px] border border-gray-100 hover:border-gray-300/60 hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-500 hover:-translate-y-1 overflow-hidden">

<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
<span className="text-6xl font-display font-bold text-gray-100 group-hover:text-gray-50 transition-colors">02</span>
</div>

<div className="w-12 h-12 rounded-2xl bg-[#F5F5F7] text-[#1d1d1f] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-[#1d1d1f] group-hover:text-white border border-transparent group-hover:border-gray-500/20">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<line x1="3" x2="21" y1="9" y2="9"></line>
<line x1="9" x2="9" y1="21" y2="9"></line>
</svg>
</div>
<h3 className="text-xl font-display font-semibold text-[#1d1d1f] mb-3 tracking-tight">Web Design</h3>
<p className="text-sm text-gray-500 leading-relaxed font-medium">
      High-converting marketing sites and complex product interfaces designed for clarity.
    </p>
</div>

<div className="group relative p-8 bg-white rounded-[32px] border border-gray-100 hover:border-gray-300/60 hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-500 hover:-translate-y-1 overflow-hidden">

<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
<span className="text-6xl font-display font-bold text-gray-100 group-hover:text-gray-50 transition-colors">03</span>
</div>

<div className="w-12 h-12 rounded-2xl bg-[#F5F5F7] text-[#1d1d1f] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-[#1d1d1f] group-hover:text-white border border-transparent group-hover:border-gray-500/20">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="16 18 22 12 16 6"></polyline>
<polyline points="8 6 2 12 8 18"></polyline>
</svg>
</div>
<h3 className="text-xl font-display font-semibold text-[#1d1d1f] mb-3 tracking-tight">Development</h3>
<p className="text-sm text-gray-500 leading-relaxed font-medium">
      Next.js, Tailwind, and WebGL implementations that are fast, accessible, and pixel-perfect.
    </p>
</div>

<div className="group relative p-8 bg-white rounded-[32px] border border-gray-100 hover:border-gray-300/60 hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-500 hover:-translate-y-1 overflow-hidden">

<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
<span className="text-6xl font-display font-bold text-gray-100 group-hover:text-gray-50 transition-colors">04</span>
</div>

<div className="w-12 h-12 rounded-2xl bg-[#F5F5F7] text-[#1d1d1f] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-[#1d1d1f] group-hover:text-white border border-transparent group-hover:border-gray-500/20">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12h5"></path>
<path d="M17 12h5"></path>
<path d="M7 12a5 5 0 0 1 5-5"></path>
<path d="M12 7a5 5 0 0 1 5 5"></path>
<path d="M12 7V2"></path>
<path d="M12 22v-5"></path>
</svg>
</div>
<h3 className="text-xl font-display font-semibold text-[#1d1d1f] mb-3 tracking-tight">Motion</h3>
<p className="text-sm text-gray-500 leading-relaxed font-medium">
      Interaction design and 2D/3D motion graphics that bring your digital presence to life.
    </p>
</div>
</div>
</div>
</div>

<div className="mb-32">
<div className="flex flex-col md:flex-row gap-12 items-start">
<div className="md:w-1/3 sticky top-32">
<h2 className="font-display text-5xl tracking-tight mb-6 font-semibold">
                How we move fast.
              </h2>
<p className="text-gray-500 mb-8">
                No bloat. No middle-management. Just senior designers and direct
                communication.
              </p>
<button className="bg-[#d49a1a] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#b88616] transition-colors flex items-center gap-2">
                Our Methodology
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
<div className="md:w-2/3 flex flex-col gap-6">

<div className="anim-list-item group bg-white border border-gray-100 p-8 rounded-3xl hover:border-gray-300 transition-all hover:shadow-lg shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 bg-[rgba(212,154,26,0.1)] text-[#d49a1a] rounded-full flex items-center justify-center font-display font-bold">
                    01
                  </div>
<iconify-icon className="text-gray-300 group-hover:text-black transition-colors" icon="solar:magnifer-linear" width="24"></iconify-icon>
</div>
<h3 className="font-display text-2xl font-medium mb-2">
                  Discovery &amp; Strategy
                </h3>
<p className="text-gray-500 text-sm leading-relaxed">
                  We deep dive into your market, analyze competitors, and find
                  the "white space" where your brand can dominate.
                </p>
</div>

<div className="anim-list-item group bg-white border border-gray-100 p-8 rounded-3xl hover:border-gray-300 transition-all hover:shadow-lg" style={{animationDelay: '0.1s'}}>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 bg-[rgba(212,154,26,0.1)] text-[#d49a1a] rounded-full flex items-center justify-center font-display font-bold">
                    02
                  </div>
<iconify-icon className="text-gray-300 group-hover:text-black transition-colors" icon="solar:palette-linear" width="24"></iconify-icon>
</div>
<h3 className="font-display text-2xl font-medium mb-2">
                  Visual Identity Sprint
                </h3>
<p className="text-gray-500 text-sm leading-relaxed">
                  Two weeks of intense design. We explore, iterate, and refine
                  until we have a logo, color system, and typography that sings.
                </p>
</div>

<div className="anim-list-item group bg-white border border-gray-100 p-8 rounded-3xl hover:border-gray-300 transition-all hover:shadow-lg" style={{animationDelay: '0.2s'}}>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 bg-[rgba(212,154,26,0.1)] text-[#d49a1a] rounded-full flex items-center justify-center font-display font-bold">
                    03
                  </div>
<iconify-icon className="text-gray-300 group-hover:text-black transition-colors" icon="solar:rocket-2-linear" width="24"></iconify-icon>
</div>
<h3 className="font-display text-2xl font-medium mb-2">
                  Handoff &amp; Guidelines
                </h3>
<p className="text-gray-500 text-sm leading-relaxed">
                  You get a comprehensive Notion based brand book and all assets
                  exported for Web, iOS, and Print ready for immediate use.
                </p>
</div>
</div>
</div>
</div>

<div className="mb-12">
<h2 className="text-4xl tracking-tight font-display text-center mb-12">
            Simple Pricing
          </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="pricing-card group bg-white p-12 rounded-[30px] shadow-sm relative overflow-hidden border border-white hover:border-gray-200 hover:shadow-2xl transition-all duration-500">

<div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 left-[-100%] group-hover:left-[200%] transition-all duration-700 ease-out z-10 pointer-events-none"></div>

<div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
<div className="-mr-8 -mt-8 transition-transform duration-700 group-hover:scale-110 bg-gray-50 w-32 h-32 z-0 rounded-bl-[4rem] absolute top-0 right-0 blur-lg"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-6">
<div className="p-2 bg-gray-100 rounded-lg group-hover:bg-gray-200 transition-colors duration-300">
<iconify-icon icon="solar:bolt-circle-linear" width="24"></iconify-icon>
</div>
<span className="font-medium text-sm tracking-wide uppercase text-gray-500">
                    The Sprint
                  </span>
</div>
<div className="mb-8">
<span className="text-5xl font-display font-semibold">
                    $8,500
                  </span>
<span className="text-gray-400 block mt-2 text-sm">
                    One-time payment
                  </span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="textli class=" flex="" gap-3="" icon="solar:check-circle-linear" items-center="" text-gray-600"="" text-sm="">
<iconify-icon className="text-green-600" icon="solar:check-circle-linear"></iconify-icon>
                    Full Visual Identity
                  </iconify-icon></li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-green-600" icon="solar:check-circle-linear"></iconify-icon>
                    Social Media Kit
                  </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-green-600" icon="solar:check-circle-linear"></iconify-icon>
                    Brand Guidelines
                  </li>
</ul>
<button className="w-full py-4 border border-[#1d1d1f] text-[#1d1d1f] rounded-full font-medium hover:bg-[#1d1d1f] hover:text-white transition-colors group-hover:shadow-lg">
                  Book Sprint
                </button>
</div>
</div>

<div className="pricing-card group bg-[#1d1d1f] text-white p-12 rounded-[30px] shadow-xl relative overflow-hidden border border-white/5 hover:border-[#d49a1a]/50 hover:shadow-2xl hover:shadow-[#d49a1a]/20 transition-all duration-500">

<div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 left-[-100%] group-hover:left-[200%] transition-all duration-1000 ease-out z-10 pointer-events-none"></div>

<div className="absolute inset-0 bg-gradient-to-br from-[#d49a1a]/0 via-[#d49a1a]/0 to-[#d49a1a]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
<div className="absolute top-0 right-0 p-3 bg-[#d49a1a] rounded-bl-2xl text-xs font-bold tracking-wider z-20 shadow-lg">
                POPULAR
              </div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-6">
<div className="p-2 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors duration-300">
<iconify-icon className="text-yellow-400" icon="solar:crown-star-linear" width="24"></iconify-icon>
</div>
<span className="font-medium text-sm tracking-wide uppercase text-gray-400">
                    Partner
                  </span>
</div>
<div className="mb-8">
<span className="text-5xl font-display font-semibold group-hover:text-white transition-colors duration-300">
                    $4,500
                  </span>
<span className="text-gray-400 block mt-2 text-sm">
                    per month / pause anytime
                  </span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-[#d49a1a]" icon="solar:check-circle-bold"></iconify-icon>
                    Unlimited Requests
                  </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-[#d49a1a]" icon="solar:check-circle-bold"></iconify-icon>
                    Web Design &amp; Decks
                  </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-[#d49a1a]" icon="solar:check-circle-bold"></iconify-icon>
                    Marketing Assets
                  </li>
</ul>
<button className="w-full py-4 bg-[#d49a1a] text-white rounded-full font-medium hover:bg-[#b88616] transition-all shadow-lg shadow-[#d49a1a]/20 group-hover:shadow-[#d49a1a]/40 group-hover:scale-[1.02] duration-300">
                  Subscribe
                </button>
</div>
</div>
</div>
</div>

<footer className="md:mt-32 mt-24 pb-44">

<div className="relative bg-[#0F0F10] rounded-[40px] p-10 md:p-20 overflow-hidden text-white shadow-2xl group ring-1 ring-white/10 isolate">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" style={{}}></div>
<div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none animate-pulse duration-1000 bg-[#d49a1a]/20"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none bg-[#d49a1a]/10"></div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/90 text-[11px] font-medium mb-8 backdrop-blur-md shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2"></span>
</span>
                  Accepting new projects for Q4
                </div>
<h2 className="font-display text-5xl md:text-7xl font-semibold tracking-tighter leading-[0.95] mb-6 text-white">
                  Ready to define
                  <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d49a1a] via-[#f5c358] to-[#d49a1a]">
                    your category?
                  </span>
</h2>
<p className="text-lg text-gray-400 max-w-md leading-relaxed mb-10 font-medium">
                  We help ambitious startups build brands that are impossible to
                  ignore. Secure your dedicated sprint week today.
                </p>
<div className="flex flex-wrap gap-4">
<a className="group relative inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/5" href="#">
                    Start a Project
                    <svg className="transition-transform group-hover:translate-x-1" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-medium text-white border border-white/15 hover:bg-white/10 transition-colors backdrop-blur-sm" href="#">
                    View Pricing
                  </a>
</div>
</div>

<div className="hidden md:block relative perspective-midrange">
<div className="group-hover:rotate-3 group-hover:scale-105 transition-all duration-700 ease-out flex flex-col overflow-hidden text-center bg-gradient-to-tr from-white/0 via-white/10 to-white/0 w-72 h-72 rounded-3xl px-8 py-8 relative shadow-2xl backdrop-blur-xl rotate-6 items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '24px'}}>
<div className="bg-gradient-to-t from-[#d49a1a]/10 to-transparent opacity-50 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="w-16 h-16 rounded-2xl bg-[#1d1d1f] border border-white/10 flex items-center justify-center mb-6 shadow-xl relative z-10 group-hover:-translate-y-2 transition-transform duration-500">
<svg className="text-[#d49a1a]" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 7-7 7 7"></path>
<path d="M12 19V5"></path>
</svg>
</div>
<div className="font-display font-bold text-3xl text-white relative z-10 mb-1">
                    Let's fly
                  </div>
<div className="text-gray-500 text-xs mt-2 uppercase tracking-widest font-semibold relative z-10">
                    Book a Call
                  </div>
</div>
</div>
</div>
</div>

<div className="md:px-6 mt-20 pr-4 pl-4">
<div className="grid grid-cols-2 md:grid-cols-12 md:gap-8 border-gray-200 border-b pb-12 gap-x-y-12 gap-y-12">

<div className="col-span-2 md:col-span-4 pr-0 md:pr-12">
<a className="inline-block font-display font-bold text-xl tracking-tight mb-6 text-[#1d1d1f]" href="#">brand</a>
<p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-sm">
                  A design partner for startups who want to move fast and break
                  things (beautifully). We clarify positioning and build visual
                  systems that scale.
                </p>
<div className="flex gap-3">
<a className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-black hover:text-white transition-all hover:scale-110" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-black hover:text-white transition-all hover:scale-110" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-black hover:text-white transition-all hover:scale-110" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</a>
</div>
</div>

<div className="col-span-1 md:col-span-2 md:col-start-6">
<h4 className="font-semibold text-sm mb-5 text-[#1d1d1f]">
                  Sitemap
                </h4>
<ul className="space-y-3 text-sm text-gray-500 font-medium">
<li>
<a className="hover:text-black transition-colors" href="#">
                      Selected Work
                    </a>
</li>
<li>
<a className="hover:text-black transition-colors" href="#">
                      Services
                    </a>
</li>
<li>
<a className="hover:text-black transition-colors" href="#">
                      Pricing Structure
                    </a>
</li>
</ul>
</div>

<div className="col-span-1 md:col-span-2">
<h4 className="font-semibold text-sm mb-5 text-[#1d1d1f]">
                  Company
                </h4>
<ul className="space-y-3 text-sm text-gray-500 font-medium">
<li>
<a className="hover:text-black transition-colors" href="#">
                      About Us
                    </a>
</li>
<li>
<a className="hover:text-black transition-colors" href="#">
                      Careers
                    </a>
</li>
<li>
<a className="hover:text-black transition-colors" href="#">
                      Legal &amp; Privacy
                    </a>
</li>
</ul>
</div>

<div className="col-span-2 md:col-span-3">
<h4 className="font-semibold text-sm mb-5 text-[#1d1d1f]">
                  Stay updated
                </h4>
<form className="flex flex-col gap-3">
<div className="relative group/input">
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-300 transition-all placeholder:text-gray-400" placeholder="Enter your email" type="email"/>
<button className="absolute right-1.5 top-1/2 -translate-y-1/2 p-2 bg-white text-black rounded-md border border-gray-100 shadow-sm hover:bg-gray-50 hover:scale-105 transition-all" type="submit">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<p className="text-xs text-gray-400 font-medium">
                    Join 5,000+ founders getting our monthly design digest.
                  </p>
</form>
</div>
</div>

<div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-medium">
<p className="">© 2024 brand Inc. All rights reserved.</p>
<div className="flex items-center gap-2 mt-4 md:mt-0 px-3 py-1.5 rounded-full bg-green-50 text-green-700 border border-green-100">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                All systems operational
              </div>
</div>
</div>
</footer>
</div>
</main>



    </>
  );
}
