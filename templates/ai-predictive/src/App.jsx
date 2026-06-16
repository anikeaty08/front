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
  


    function updateBilling(period) {
      const isMonthly = period === 'monthly';
      const monthlyBtns = document.querySelectorAll('.billing-toggle-monthly');
      const quarterlyBtns = document.querySelectorAll('.billing-toggle-quarterly');
      
      // Update Monthly Buttons
      monthlyBtns.forEach(btn => {
        if (isMonthly) {
          btn.classList.remove('text-white/40', 'bg-transparent', 'hover:text-white');
          btn.classList.add('bg-zinc-800', 'text-white', 'shadow-sm', 'border', 'border-white/5', 'hover:bg-zinc-700');
        } else {
          btn.classList.add('text-white/40', 'bg-transparent', 'hover:text-white');
          btn.classList.remove('bg-zinc-800', 'text-white', 'shadow-sm', 'border', 'border-white/5', 'hover:bg-zinc-700');
        }
      });

      // Update Quarterly Buttons
      quarterlyBtns.forEach(btn => {
        if (!isMonthly) {
          btn.classList.remove('text-white/40', 'bg-transparent', 'hover:text-white');
          btn.classList.add('bg-zinc-800', 'text-white', 'shadow-sm', 'border', 'border-white/5', 'hover:bg-zinc-700');
        } else {
          btn.classList.add('text-white/40', 'bg-transparent', 'hover:text-white');
          btn.classList.remove('bg-zinc-800', 'text-white', 'shadow-sm', 'border', 'border-white/5', 'hover:bg-zinc-700');
        }
      });

      // Update Prices & Labels
      const starterPrice = document.getElementById('price-starter');
      const growthPrice = document.getElementById('price-growth');
      const labels = document.querySelectorAll('.billing-period-label');

      if (isMonthly) {
        if(starterPrice) starterPrice.textContent = '$49';
        if(growthPrice) growthPrice.textContent = '$149';
        labels.forEach(l => l.textContent = 'Billed monthly.');
      } else {
        if(starterPrice) starterPrice.textContent = '$39';
        if(growthPrice) growthPrice.textContent = '$119';
        labels.forEach(l => l.textContent = 'Billed quarterly.');
      }
    }
  


      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) window.lucide.createIcons();
      });
    

document.addEventListener('DOMContentLoaded', () => { const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.style.animation = 'fadeSlideBlurIn 1s cubic-bezier(0.16, 1, 0.3, 1) both'; entry.target.style.animationDelay = entry.target.dataset.delay || '0s'; observer.unobserve(entry.target); } }); }, { threshold: 0.1 }); document.querySelectorAll('.scroll-animate').forEach((el, i) => { observer.observe(el); }); });
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed w-full top-0 h-[800px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full" style={{}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="zNLwDraPwdiE0ELhd8Z4"></div>

</div></div>
<div className="fixed z-0 pointer-events-none sm:px-6 lg:px-8 border-x flex max-w-7xl border-white/5 mr-auto ml-auto pr-4 pl-4 top-0 right-0 bottom-0 left-0 justify-between" style={{}}><div className="w-px h-full bg-white/5 relative overflow-hidden"><div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-transparent via-orange-500/40 to-transparent animate-[border-beam_5s_linear_infinite]"></div></div><div className="w-px h-full bg-white/5 hidden md:block relative overflow-hidden"><div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-transparent via-orange-500/40 to-transparent animate-[border-beam_7s_linear_infinite_2s]"></div></div><div className="w-px h-full bg-white/5 hidden lg:block relative overflow-hidden"><div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-transparent via-orange-500/40 to-transparent animate-[border-beam_5s_linear_infinite_4s]"></div></div><div className="w-px h-full bg-white/5 relative overflow-hidden"><div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-transparent via-orange-500/40 to-transparent animate-[border-beam_8s_linear_infinite_1s]"></div></div></div>


<header className="fixed z-50 top-0 right-0 left-0">
<nav className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-5 pr-4 pb-5 pl-4">
<div className="flex [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)] [animation:animationIn_0.8s_ease-out_0.1s_both] bg-gradient-to-br from-black/10 to-black/0 border-white/5 border rounded-none pt-3 pr-4 pb-3 pl-4 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-3">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[120px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d611305f-e463-4124-a8dc-3fd66dafd9e8_1600w.png)] bg-cover rounded-none" href="#"></a>
</div>

<div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
<a className="group flex items-center hover:text-white transition-colors h-[36px] relative" href="/features">
          Features
          <span className="absolute -bottom-[13px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_10px_2px_rgba(251,146,60,0.5)]"></span>
</a>
<a className="group flex items-center hover:text-white transition-colors h-[36px] relative" href="/usecases">
          Use Cases
          <span className="absolute -bottom-[13px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_10px_2px_rgba(251,146,60,0.5)]"></span>
</a>
<a className="group flex items-center hover:text-white transition-colors h-[36px] relative" href="/pricing">
          Pricing
          <span className="absolute -bottom-[13px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_10px_2px_rgba(251,146,60,0.5)]"></span>
</a>
<a className="group flex items-center hover:text-white transition-colors h-[36px] relative" href="/changelog">
          Changelog
          <span className="absolute -bottom-[13px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_10px_2px_rgba(251,146,60,0.5)]"></span>
</a><a className="group flex items-center hover:text-white transition-colors h-[36px] relative" href="/changelog">
  Documentation
  <span className="absolute -bottom-[13px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_10px_2px_rgba(251,146,60,0.5)]"></span>
</a>
</div>

<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex gap-2 hover:from-orange-500 hover:to-yellow-400 transition text-sm font-medium text-white bg-gradient-to-br from-orange-400 to-orange-600 rounded-none px-4 py-2 shadow-[0_0_20px_rgba(255,140,0,0.4)] gap-x-2 gap-y-2 items-center">
        Get Started
      </button>
<button aria-expanded="false" aria-label="Menu" className="md:hidden inline-flex hover:bg-white/10 transition text-white/90 bg-white/5 border-white/10 border rounded-xl pt-2 pr-3 pb-2 pl-3 items-center justify-center" id="mobile-menu-toggle">
<iconify-icon className="h-6 w-6 menu-icon" height="24" icon="solar:hamburger-menu-bold-duotone" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="md:hidden hidden overflow-hidden transition-all duration-300 ease-out" id="mobile-menu" style={{maxHeight: '0'}}>
<div className="mt-3 border border-white/10 bg-white/5 backdrop-blur-md p-4 rounded-none">
<div className="flex flex-col gap-3">
<a className="text-sm text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5" href="#features" style={{}}>Features</a>
<a className="text-sm text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5" href="#usecases" style={{}}>Use Cases</a>
<a className="text-sm text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5" href="#pricing" style={{}}>Pricing</a>
<a className="text-sm text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5" href="#docs" style={{}}>Docs</a>
<a className="text-sm text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5" href="#changelog" style={{}}>Changelog</a>
<div className="h-px bg-white/10 my-2"></div>
<button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-white/90 hover:bg-white/10 transition w-full justify-center">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                        GitHub
                    </button>
</div>
</div>
</div>
</nav>
</header>

<main className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-20 pr-4 pl-4 relative">
<section className="grid grid-cols-1 gap-10 lg:gap-12 md:py-14 min-h-[500px] pt-10 pb-10 relative gap-x-10 gap-y-10 items-center">
<div className="z-10 flex-grow flex flex-col md:py-0 pt-14 pb-14 relative justify-center">


<div className="group relative">

<h1 className="text-[13vw] md:text-[11vw] lg:text-[10rem] leading-[0.8] uppercase select-none md:text-left md:mt-6 [animation:animationIn_0.8s_ease-out_0.2s_both] font-medium text-white tracking-tighter font-oswald text-center mix-blend-normal max-w-4xl mt-6">

<span className="inline-block">
<span className="inline-block overflow-hidden py-1 -my-1"><span className="inline-block animate-[slideDownClip_0.8s_cubic-bezier(0.16,1,0.3,1)_backwards] delay-[400ms]">Y</span></span><span className="inline-block overflow-hidden py-1 -my-1"><span className="inline-block animate-[slideDownClip_0.8s_cubic-bezier(0.16,1,0.3,1)_backwards] delay-[500ms]">u</span></span><span className="inline-block overflow-hidden py-1 -my-1"><span className="inline-block animate-[slideDownClip_0.8s_cubic-bezier(0.16,1,0.3,1)_backwards] delay-[600ms]">n</span></span><span className="inline-block overflow-hidden py-1 -my-1"><span className="inline-block animate-[slideDownClip_0.8s_cubic-bezier(0.16,1,0.3,1)_backwards] delay-[700ms]">a</span></span>
</span>

<span className="inline-flex md:pl-16 font-normal pl-0">
<style>
        @keyframes slideDownClip {
            0% { transform: translateY(-105%); }
            100% { transform: translateY(0); }
        }
    </style>
<span className="inline-block overflow-hidden py-1 -my-1"><span className="inline-block animate-[slideDownClip_0.8s_cubic-bezier(0.16,1,0.3,1)_backwards] delay-[800ms]">P</span></span><span className="inline-block overflow-hidden py-1 -my-1"><span className="inline-block animate-[slideDownClip_0.8s_cubic-bezier(0.16,1,0.3,1)_backwards] delay-[900ms]">r</span></span><span className="inline-block overflow-hidden py-1 -my-1"><span className="inline-block animate-[slideDownClip_0.8s_cubic-bezier(0.16,1,0.3,1)_backwards] delay-[1000ms]">e</span></span><span className="inline-block overflow-hidden py-1 -my-1"><span className="inline-block animate-[slideDownClip_0.8s_cubic-bezier(0.16,1,0.3,1)_backwards] delay-[1100ms]">d</span></span><span className="inline-block overflow-hidden py-1 -my-1"><span className="inline-block animate-[slideDownClip_0.8s_cubic-bezier(0.16,1,0.3,1)_backwards] delay-[1200ms]">i</span></span><span className="inline-block overflow-hidden py-1 -my-1"><span className="inline-block animate-[slideDownClip_0.8s_cubic-bezier(0.16,1,0.3,1)_backwards] delay-[1300ms]">c</span></span><span className="inline-block overflow-hidden py-1 -my-1"><span className="inline-block animate-[slideDownClip_0.8s_cubic-bezier(0.16,1,0.3,1)_backwards] delay-[1400ms]">t</span></span><span className="inline-block overflow-hidden py-1 -my-1"><span className="inline-block animate-[slideDownClip_0.8s_cubic-bezier(0.16,1,0.3,1)_backwards] delay-[1500ms]">i</span></span><span className="inline-block overflow-hidden py-1 -my-1"><span className="inline-block animate-[slideDownClip_0.8s_cubic-bezier(0.16,1,0.3,1)_backwards] delay-[1600ms]">v</span></span><span className="inline-block overflow-hidden py-1 -my-1"><span className="inline-block animate-[slideDownClip_0.8s_cubic-bezier(0.16,1,0.3,1)_backwards] delay-[1700ms]">e</span></span>
</span>

<span className="block text-neutral-600">
<span className="inline-block overflow-hidden py-1 -my-1"><span className="inline-block animate-[slideDownClip_0.8s_cubic-bezier(0.16,1,0.3,1)_backwards] delay-[1800ms]">E</span></span><span className="inline-block overflow-hidden py-1 -my-1"><span className="inline-block animate-[slideDownClip_0.8s_cubic-bezier(0.16,1,0.3,1)_backwards] delay-[1900ms]">n</span></span><span className="inline-block overflow-hidden py-1 -my-1"><span className="inline-block animate-[slideDownClip_0.8s_cubic-bezier(0.16,1,0.3,1)_backwards] delay-[2000ms]">g</span></span><span className="inline-block overflow-hidden py-1 -my-1"><span className="inline-block animate-[slideDownClip_0.8s_cubic-bezier(0.16,1,0.3,1)_backwards] delay-[2100ms]">i</span></span><span className="inline-block overflow-hidden py-1 -my-1"><span className="inline-block animate-[slideDownClip_0.8s_cubic-bezier(0.16,1,0.3,1)_backwards] delay-[2200ms]">n</span></span><span className="inline-block overflow-hidden py-1 -my-1"><span className="inline-block animate-[slideDownClip_0.8s_cubic-bezier(0.16,1,0.3,1)_backwards] delay-[2300ms]">e</span></span>
</span>
</h1>
</div>

<div className="flex flex-col md:flex-row md:items-center md:gap-4 md:mt-14 md:mb-24 mt-12 mb-24 gap-x-6 gap-y-6">
<p className="md:text-lg leading-relaxed animate-on-scroll md:text-left md:mx-0 [animation:animationIn_0.8s_ease-out_0.3s_both] text-base text-neutral-400 text-center max-w-xl mr-auto ml-auto" data-animation="up" data-delay="800">
          Yuna analyzes your data in real time to forecast churn, detect system failures, and predict user
          behavior—giving
          your team the clarity to act before problems happen.
        </p>
<div className="flex flex-col md:flex-row md:mx-0 [animation:animationIn_0.8s_ease-out_0.4s_both] mr-auto ml-auto gap-x-4 gap-y-4 items-center">
<button className="group flex overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_70px_-12px_#f97316] active:scale-[0.98] z-10 text-lg font-semibold text-white bg-black h-14 ring-white/20 ring-1 px-10 relative shadow-[0_0_50px_-12px_#f97316] gap-x-2 gap-y-2 items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-600 to-red-600 opacity-80 transition-opacity duration-300 group-hover:opacity-100" style={{}}></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.2),transparent_50%)] mix-blend-overlay"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.2),transparent_50%)] mix-blend-overlay"></div>
<div className="transition-all duration-300 group-hover:border-white/70 group-hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.7)] border-white/50 border absolute top-0 right-0 bottom-0 left-0 shadow-[inset_0_0_15px_rgba(255,255,255,0.5)]"></div>
<div className="transition-all duration-300 group-hover:border-white/70 group-hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.7)] border-white/50 border absolute top-0 right-0 bottom-0 left-0 shadow-[inset_0_0_15px_rgba(255,255,255,0.5)]"></div>
<span className="flex items-center gap-2 leading-none z-10 relative drop-shadow-md">Explore Yuna</span>
</button>
<button className="group flex transition-all duration-500 hover:scale-[1.03] active:scale-[0.98] hover:shadow-[-15px_0_40px_-5px_rgba(249,115,22,0.6),15px_0_40px_-5px_rgba(255,255,255,0.4)] text-lg font-semibold text-white h-14 pr-10 pl-10 relative gap-x-2 gap-y-2 items-center justify-center" style="background: linear-gradient(#000, #000) padding-box,
                     linear-gradient(90deg, #f97316 0%, #fbbf24 50%, #ffffff 100%) border-box;
           border: 1.5px solid transparent">
<span className="flex items-center gap-2 leading-none z-10 relative drop-shadow-md">Learn More</span>
</button>
</div>
</div>
</div>
<div className="flex transform-style-preserve-3d group [animation:animationIn_0.8s_ease-out_0.5s_both] w-full h-[700px] max-w-[1200px] mt-16 mb-16 relative perspective-[2000px] items-center justify-center">
<style className="">
        @keyframes float-slow {

          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-medium {

          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float-fast {

          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 5s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
      </style>

<div className="hero-perspective -mt-8 group md:px-0 md:pt-20 mt-24 mb-24 pt-20 pr-4 pb-20 pl-4" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 25%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 25%, transparent)'}}>
<div className="hero-rotate overflow-hidden transform transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:rotate-x-0 group-hover:rotate-y-0 group-hover:rotate-z-0 group-hover:left-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:shadow-2xl bg-[#0F1012] max-w-[1300px] border-white/10 border rounded-xl mr-auto ml-auto relative left-20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] rotate-x-20 rotate-y-30 -rotate-z-20" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 50%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 50%, transparent)'}}>
<div className="shimmer" style={{}}></div>

<div className="grid grid-cols-[260px_380px_1fr] divide-x divide-white/5 h-[800px]" style={{}}>

<div className="flex flex-col bg-[#0F1012]" style={{}}>

<div className="flex h-14 border-white/5 border-b pr-4 pl-4 gap-y-3 items-center gap-x-0">
<span className="ml-3 font-medium text-gray-200">Yuna Intelligence</span>
<svg aria-hidden="true" className="iconify iconify--solar ml-auto w-[16px] h-[16px]" data-icon="solar:alt-arrow-down-bold" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(107, 114, 128)'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m12.37 15.835l6.43-6.63C19.201 8.79 18.958 8 18.43 8H5.57c-.528 0-.771.79-.37 1.205l6.43 6.63c.213.22.527.22.74 0" fill="currentColor"></path>
</svg>
</div>
<div className="p-3 space-y-1">
<div className="flex gap-3 text-gray-200 bg-white/5 border-white/5 border rounded-md pt-2 pr-3 pb-2 pl-3 gap-x-3 gap-y-3 items-center">
<svg aria-hidden="true" className="iconify iconify--solar text-orange-400" data-icon="solar:add-square-bold-duotone" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.536 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.464 8.536C19.07 22 16.714 22 12 22c-4.714 0-7.071 0-8.536-1.464C2 19.07 2 16.714 2 12" fill="currentColor" opacity=".5"></path>
<path d="M15 12a.75.75 0 0 1-.75.75H12.75V15a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V9a.75.75 0 0 1 1.5 0v2.25H14.25a.75.75 0 0 1 .75.75" fill="currentColor">
</path>
</svg>
<span className="text-sm">New Model</span>
<span className="ml-auto text-xs text-gray-600 border border-white/10 rounded px-1.5 py-0.5" style={{}}>M</span>
</div>
</div>
<div className="p-3 space-y-0.5 mt-2">
<div className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-400 hover:text-gray-200 hover:bg-white/5 cursor-pointer transition-colors" style={{}}>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:chart-2-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2" fill="currentColor" opacity=".5">
</path>
<path d="M13.5 15.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m4-2a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-8 3a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" fill="currentColor">
</path>
</svg>
<span className="text-sm">Dashboard</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-400 hover:text-gray-200 hover:bg-white/5 cursor-pointer transition-colors" style={{}}>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:bell-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M18.75 9v.704c0 .812.1 1.609.297 2.379c.162.636.425 1.393.737 2.181c.21.533.434 1.103.58 1.517c.46 1.309-.324 2.719-1.71 2.719h-3.4c-.53 2.61-3.038 4.5-6.004 4.5c-2.966 0-5.474-1.89-6.004-4.5H3.356c-1.386 0-2.17-1.41-1.71-2.719c.146-.414.37-.984.58-1.517c.312-.788.575-1.545.737-2.181a10 10 0 0 0 .297-2.379V9c0-3.375 3.06-6.19 7.032-6.894A2.001 2.001 0 0 1 12 0a2.001 2.001 0 0 1 1.71 3.106C16.696 3.992 18.75 6.29 18.75 9" fill="currentColor" opacity=".5"></path>
<path d="M12.75 18.5h-1.5s.25 2.5 1.5 2.5s1.5-2.5 1.5-2.5z" fill="currentColor"></path>
</svg>
<span className="text-sm">Alerts</span>
<span className="ml-auto text-xs px-1.5 rounded text-orange-400 bg-orange-400/10" style={{}}>3</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-400 hover:text-gray-200 hover:bg-white/5 cursor-pointer transition-colors" style={{}}>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:layers-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2a10 10 0 1 0 0 20a10 10 0 0 0 0-20m0 16a1 1 0 1 1 0-2a1 1 0 0 1 0 2m2-5.18c-.37.31-.8.56-1.12.87c-.28.27-.38.52-.38 1.31h-1c0-1.12.33-1.63.88-2.17c.43-.43.91-.71 1.12-1.08c.17-.27.25-.56.25-.85c0-1.1-1-1.9-2.25-1.9c-1.07 0-2.03.74-2.22 1.83H8.22c.22-1.74 1.74-2.83 3.53-2.83c1.93 0 3.25 1.32 3.25 2.9c0 .88-.33 1.59-1 2.12" fill="currentColor" opacity=".5"></path>
<path className="" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5">
</path>
</svg>
<span className="text-sm">Data Sources</span>
</div>
</div>
<div className="mt-6 px-6 text-xs font-medium text-gray-600 uppercase tracking-wider" style={{}}>Projects
              </div>
<div className="p-3 space-y-0.5">
<div className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-200 bg-white/5 cursor-pointer" style={{}}>
<svg aria-hidden="true" className="iconify iconify--solar text-yellow-400" data-icon="solar:users-group-rounded-bold-duotone" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<circle cx="9" cy="9" fill="currentColor" opacity=".5" r="4"></circle>
<path d="M13 13.5a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9" fill="currentColor"></path>
</svg>
<span className="text-sm">User Retention</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-400 hover:text-gray-200 hover:bg-white/5 cursor-pointer transition-colors" style={{}}>
<svg aria-hidden="true" className="iconify iconify--solar text-orange-500" data-icon="solar:server-square-bold-duotone" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.536 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.464 8.536C19.07 22 16.714 22 12 22c-4.714 0-7.071 0-8.536-1.464C2 19.07 2 16.714 2 12" fill="currentColor" opacity=".5"></path>
<path d="M17 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-6-4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-6-4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2" fill="currentColor">
</path>
</svg>
<span className="text-sm">Infrastructure</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-400 hover:text-gray-200 hover:bg-white/5 cursor-pointer transition-colors" style={{}}>
<svg aria-hidden="true" className="iconify iconify--solar text-amber-500" data-icon="solar:wallet-money-bold-duotone" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2" fill="currentColor" opacity=".5">
</path>
<path d="M12.5 7.5a.5.5 0 0 0-1 0v.5h-1a1 1 0 0 0 0 2h1v1h-1a2.5 2.5 0 1 0 0 5h1v.5a.5.5 0 0 0 1 0v-.5h1a1 1 0 0 0 0-2h-1v-1h1a2.5 2.5 0 1 0 0-5h-1zM11 14.5v-1h1a1 1 0 0 1 0 2h-1v-1zm1.5-3v-1h-1a1 1 0 0 1 0 2h1v-1z" fill="currentColor">
</path>
</svg>
<span className="text-sm">Revenue</span>
</div>
</div>
</div>

<div className="flex flex-col bg-[#0B0C0E]" style={{}}>

<div className="flex h-14 border-white/5 border-b pr-5 pl-5 items-center justify-between">
<span className="text-sm font-medium text-gray-400" style={{}}>User Retention</span>
<div className="flex gap-3 text-gray-500" style={{}}>
<svg aria-hidden="true" className="iconify cursor-pointer hover:text-gray-300 iconify--solar" data-icon="solar:filter-bold-duotone" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M5 3h14L8.816 13.184a2.7 2.7 0 0 0-.778-1.086c-.228-.198-.547-.377-1.183-.736l-2.913-1.64c-.949-.533-1.423-.8-1.682-1.23C2 8.061 2 7.541 2 6.503v-.69c0-1.326 0-1.99.44-2.402C2.878 3 3.585 3 5 3" fill="currentColor" fill-rule="evenodd"></path>
<path d="M22 6.504v-.69c0-1.326 0-1.99-.44-2.402C21.122 3 20.415 3 19 3L8.815 13.184q.075.193.121.403c.064.285.064.619.064 1.286v2.67c0 .909 0 1.364.252 1.718c.252.355.7.53 1.594.88c1.879.734 2.818 1.101 3.486.683S15 19.452 15 17.542v-2.67c0-.666 0-1 .063-1.285a2.68 2.68 0 0 1 .9-1.49c.227-.197.545-.376 1.182-.735l2.913-1.64c.948-.533 1.423-.8 1.682-1.23c.26-.43.26-.95.26-1.988" fill="currentColor" opacity=".5"></path>
</svg>
<svg aria-hidden="true" className="iconify cursor-pointer hover:text-gray-300 iconify--solar" data-icon="solar:sort-vertical-bold-duotone" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M20 10.875a.75.75 0 0 0 .538-1.272l-4-4.125a.75.75 0 0 0-1.076 0l-4 4.125A.75.75 0 0 0 12 10.875h3.25V18a.75.75 0 0 0 1.5 0v-7.125z" fill="currentColor">
</path>
<path className="" d="M12 13.125a.75.75 0 0 1 .538 1.272l-4 4.125a.75.75 0 0 1-1.076 0l-4-4.125A.75.75 0 0 1 4 13.125h3.25V6a.75.75 0 1 1 1.5 0v7.125z" fill="currentColor" opacity=".5"></path>
</svg>
</div>
</div>

<div className="flex-1 overflow-y-auto">

<div className="group flex flex-col gap-1 p-4 border-b border-white/5 bg-[#16181D] border-l-2 cursor-pointer border-l-orange-500" style={{}}>
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-mono text-orange-400" style={{}}>PRED-2491</span>
<div className="w-1 h-1 rounded-full bg-gray-600" style={{}}></div>
<span className="text-xs text-gray-500" style={{}}>High Priority</span>
</div>
<span className="text-sm font-medium text-white" style={{}}>High Churn Risk Segment - Enterprise</span>
<div className="flex items-center gap-2 mt-2">
<div className="w-2 h-2 rounded-full animate-pulse bg-yellow-400"></div>
<span className="text-xs text-gray-500" style={{}}>Monitoring</span>
<div className="w-5 h-5 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 ml-auto border border-black/50 text-[10px] flex items-center justify-center text-white" style={{}}>94</div>
</div>
</div>

<div className="group flex flex-col gap-1 p-4 border-b border-white/5 hover:bg-[#131416] cursor-pointer transition-colors" style={{}}>
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-mono text-gray-500 group-hover:text-gray-400" style={{}}>PRED-2490</span>
</div>
<span className="text-sm text-gray-300 group-hover:text-white" style={{}}>Engagement Drop Detection</span>
<div className="flex items-center gap-2 mt-2">
<svg aria-hidden="true" className="iconify text-base iconify--solar text-orange-500" data-icon="solar:check-circle-bold-duotone" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path>
<path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor">
</path>
</svg>
<span className="text-xs text-gray-500" style={{}}>Deployed</span>
<span className="ml-auto text-xs text-orange-400" style={{}}>98.2% acc</span>
</div>
</div>
<div className="group flex flex-col gap-1 p-4 border-b border-white/5 hover:bg-[#131416] cursor-pointer transition-colors" style={{}}>
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-mono text-gray-500 group-hover:text-gray-400" style={{}}>PRED-2489</span>
</div>
<span className="text-sm text-gray-300 group-hover:text-white" style={{}}>LTV Prediction Model v2</span>
<div className="flex items-center gap-2 mt-2">
<svg aria-hidden="true" className="iconify text-amber-500 text-base iconify--solar" data-icon="solar:refresh-circle-bold-duotone" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" fill="currentColor" opacity=".5"></path>
<path d="M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0" fill="currentColor"></path>
</svg>
<span className="text-xs text-gray-500" style={{}}>Training</span>
<span className="ml-auto text-xs text-gray-600">4h remaining</span>
</div>
</div>
<div className="group flex flex-col gap-1 p-4 border-b border-white/5 hover:bg-[#131416] cursor-pointer transition-colors" style={{}}>
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-mono text-gray-500 group-hover:text-gray-400" style={{}}>PRED-2488</span>
</div>
<span className="text-sm text-gray-300 group-hover:text-white" style={{}}>Feature Usage Correlation</span>
<div className="flex items-center gap-2 mt-2">
<svg aria-hidden="true" className="iconify text-base iconify--solar text-gray-500" data-icon="solar:pause-circle-bold-duotone" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10" fill="currentColor" opacity=".5"></path>
<path d="M9 9h1.5v6H9zM13.5 9H15v6h-1.5z" fill="currentColor"></path>
</svg>
<span className="text-xs text-gray-500" style={{}}>Backlog</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col bg-[#0B0C0E] relative">

<div className="flex h-14 border-white/5 border-b pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2 text-gray-500" style={{}}>
<span className="text-xs font-mono">User Retention</span>
<span className="text-xs">/</span>
<span className="text-xs font-mono text-gray-300" style={{}}>PRED-2491</span>
</div>
<div className="flex gap-4 text-gray-500" style={{}}>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:link-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M15.728 3.884c1.434-1.44 3.532-1.47 4.694-.304c1.164 1.168 1.132 3.28-.303 4.72l-2.424 2.433a.75.75 0 0 0 1.063 1.059l2.424-2.433c1.91-1.919 2.15-4.982.303-6.838c-1.85-1.857-4.907-1.615-6.82.304L9.818 7.692c-1.912 1.919-2.152 4.982-.303 6.837a.75.75 0 1 0 1.062-1.058c-1.163-1.168-1.132-3.28.303-4.72z" fill="currentColor">
</path>
<path aria-hidden="true" className="iconify iconify--solar" d="M14.485 9.47a.75.75 0 0 0-1.063 1.06c1.164 1.168 1.132 3.279-.303 4.72L8.27 20.116c-1.434 1.44-3.532 1.47-4.694.304c-1.163-1.168-1.132-3.28.303-4.72l2.424-2.433a.75.75 0 1 0-1.062-1.059l-2.424 2.433C.906 16.56.666 19.623 2.515 21.48c1.85 1.858 4.907 1.615 6.819-.304l4.848-4.867c1.91-1.918 2.15-4.982.303-6.8w3.org/2000/svg" data-icon="solar:menu-dots-bold-duotone" fill="currentColor" height="1em" role="img" viewbox="0 0 24 24" width="1em">
<path d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m14 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" fill="currentColor">
</path>
<path d="M14 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0" fill="currentColor" opacity=".5"></path>
</path>
</svg>
</div>
</div>

<div className="p-8 overflow-y-auto">
<h2 className="text-2xl font-medium text-white mb-4 tracking-tight" style={{}}>High Churn Risk Segment -
                  Enterprise</h2>
<div className="flex items-center gap-6 mb-8 pb-6 border-b border-white/5" style={{}}>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full border border-white/10 bg-white/5 flex items-center justify-center" style={{}}>
<svg aria-hidden="true" className="iconify text-gray-400 text-xs iconify--solar" data-icon="solar:user-bold-duotone" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="6" fill="currentColor" r="4"></circle>
<path d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5" fill="currentColor" opacity=".5">
</path>
</svg>
</div>
<span className="text-sm text-gray-400" style={{}}>Managed by <span className="text-gray-200" style={{}}>Data Science Team</span></span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--solar text-yellow-400" data-icon="solar:clock-circle-bold-duotone" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" fill="currentColor" opacity=".5"></path>
<path clip-rule="evenodd" d="M12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75" fill="currentColor" fill-rule="evenodd"></path>
</svg>
<span className="text-sm text-gray-400" style={{}}>Live Monitoring</span>
</div>
<div className="flex items-center gap-2 ml-auto">
<span className="text-xs border px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-400 border-yellow-500/20">Acc: 94.5%</span>
</div>
</div>
<div className="space-y-6 text-base text-gray-300 leading-relaxed" style={{}}>
<p className="">The Enterprise churn model has detected a statistical drift in the
                    <span className="font-mono text-sm bg-white/10 px-1 rounded">seat_utilization</span> feature
                    distribution. Re-training is recommended to maintain prediction accuracy above the 94%
                    threshold.
                  </p>
<div className="rounded-lg bg-[#090A0B] border border-white/10 overflow-hidden my-6 shadow-2xl" style={{}}>
<div className="flex items-center justify-between px-4 py-2 bg-[#131416] border-b border-white/5" style={{}}>
<span className="text-xs text-gray-500 font-mono" style={{}}>train_model.py</span>
<span className="text-xs text-gray-600" style={{}}>Python</span>
</div>
<div className="p-4 font-mono text-xs md:text-sm leading-6 overflow-x-auto">
<div className="text-gray-500" style={{}}># Initialize Gradient Boosting Classifier</div>
<div className="flex">
<span className="text-yellow-400" style={{}}>model</span> <span className="text-white" style={{}}>=</span> <span className="text-yellow-300" style={{}}>GradientBoostingClassifier</span><span className="text-gray-400" style={{}}>(</span>
</div>
<div className="pl-4 flex">
<span className="text-orange-300" style={{}}>n_estimators</span><span className="text-white" style={{}}>=</span><span className="text-orange-400" style={{}}>100</span><span className="text-gray-400" style={{}}>,</span>
</div>
<div className="pl-4 flex">
<span className="text-orange-300" style={{}}>learning_rate</span><span className="text-white" style={{}}>=</span><span className="text-orange-400" style={{}}>0.1</span><span className="text-gray-400" style={{}}>,</span>
</div>
<div className="pl-4 flex">
<span className="text-orange-300" style={{}}>random_state</span><span className="text-white" style={{}}>=</span><span className="text-orange-400" style={{}}>42</span>
</div>
<div className="text-gray-400" style={{}}>)</div>
<div className="flex mt-2">
<span className="text-gray-500" style={{}}># Fit model on training data</span>
</div>
<div className="flex">
<span className="text-yellow-400" style={{}}>model</span><span className="text-yellow-300" style={{}}>.fit</span><span className="text-gray-400" style={{}}>(</span><span className="text-orange-300" style={{}}>X_train</span>,
                        <span className="text-orange-300" style={{}}>y_train</span><span className="text-gray-400" style={{}}>)</span>
</div>
<div className="flex mt-2">
<span className="text-yellow-400" style={{}}>predictions</span> <span className="text-white" style={{}}>=</span> <span className="text-yellow-400" style={{}}>model</span><span className="text-yellow-300" style={{}}>.predict_proba</span><span className="text-gray-400" style={{}}>(</span><span className="text-orange-300" style={{}}>X_test</span><span className="text-gray-400" style={{}}>)[:,</span>
<span className="text-orange-400" style={{}}>1</span><span className="text-gray-400" style={{}}>]</span>
</div>
</div>
</div>
<p className="">Feature importance analysis suggests recent changes in "Last Login" are highly
                    correlated with churn events in the top 5% of at-risk accounts.
                  </p>
</div>

<div className="mt-12 pt-8 border-t border-white/5" style={{}}>
<div className="flex gap-4 mb-6">
<div className="w-8 h-8 rounded-full border flex items-center justify-center text-xs bg-orange-900/50 border-orange-500/30 text-orange-300" style={{}}>AC</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="text-sm font-medium text-white" style={{}}>Alex Chen</span>
<span className="text-xs text-gray-500" style={{}}>2 hours ago</span>
</div>
<p className="text-sm text-gray-400" style={{}}>I've adjusted the feature weights for the Q3
                        dataset. Validation score improved by 2.3%.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full border flex items-center justify-center text-xs bg-yellow-900/50 border-yellow-500/30 text-yellow-300" style={{}}>SB</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="text-sm font-medium text-white" style={{}}>Sarah Baker</span>
<span className="text-xs text-gray-500" style={{}}>1 hour ago</span>
</div>
<p className="text-sm text-gray-400" style={{}}>Deploying to production endpoint for A/B
                        testing against v1 model.</p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 right-8">
<button className="bg-white text-black hover:bg-gray-200 transition-colors rounded-full p-3 shadow-lg shadow-white/10" style={{}}>
<svg aria-hidden="true" className="iconify text-xl iconify--solar" data-icon="solar:play-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2" fill="currentColor" opacity=".5"></path><path d="M16.22 12.637l-5.717 3.51c-.812.498-1.836-.12-1.836-1.112V8.037c0-.992 1.024-1.61 1.836-1.112l5.717 3.51c.732.45.732 1.552 0 2.002" fill="currentColor"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll pb-14">
<div className="max-w-7xl mr-auto ml-auto pt-0 pb-0">
<div className="shadow-black/30 overflow-hidden bg-gradient-to-br from-black/10 to-black/0 border-white/5 border rounded-none shadow-2xl backdrop-blur-sm" style={{maskImage: 'linear-gradient(90deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/5 gap-x-0 gap-y-0 items-stretch">
<div className="overflow-hidden flex bg-gradient-to-br from-black/10 to-black/0 w-full pt-10 pr-10 pb-10 pl-10 relative items-center justify-center">
<div className="flex flex-col lg:flex-row w-full h-[72px] items-center justify-center lg:justify-start">
<div className="z-20 flex w-full h-full max-w-[320px] lg:max-w-[360px] items-center justify-center lg:justify-start lg:pr-10">
<p className="sm:text-xl leading-snug text-lg font-medium text-white/90 tracking-tight text-center lg:text-left">
 Trusted by 4500+
  companies worldwide
</p>
</div>
<div className="overflow-hidden w-full max-w-full h-full relative" style={{maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'}}>
<style>
                @keyframes scrollLogos {
                  0% {
                    transform: translateX(0);
                  }

                  100% {
                    transform: translateX(-50%);
                  }
                }

                .logo-scroll-container {
                  display: flex;
                  animation: scrollLogos 20s linear infinite;
                  will-change: transform;
                  height: 100%; /* Ensure container takes full height for vertical centering */
                  align-items: center;
                }

                .logo-scroll-container:hover {
                  animation-play-state: paused;
                }
              </style>
<div className="logo-scroll-container w-max">
<div className="opacity-50 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0 cursor-pointer flex-shrink-0" style={{paddingRight: '48px'}}>
<svg aria-hidden="true" className="iconify w-[96px] h-[72px]" height="72" role="img" strokeWidth="2" style={{width: '96px', height: '72px'}} viewbox="0 0 512 95" width="96" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M102.607 46.54c0-25.695-20.21-46.54-46.54-46.54c-17.495 0-32.682 9.585-40.65 23.847L38.11 46.54c0-9.932 8.372-17.958 17.957-17.958c10.163 0 17.958 8.026 17.958 17.958s-7.853 17.958-17.958 17.958H17.38C7.795 64.498 0 72.293 0 81.878V93.08h56.067c26.157 0 46.54-20.845 46.54-46.54" fill="#ffffff">
</path>
<path className="" d="M314.635 41.054h21.711c8.43 0 12.819-3.984 12.819-11.432c0-7.565-4.389-11.549-12.819-11.549h-21.71zm12.53 18.131h-12.53V93.08h-19.459V10.45c0-5.774 4.677-10.451 10.51-10.451h31.238c20.151 0 32.393 12.126 32.393 29.506c0 13.974-7.853 24.598-21.48 28.351l24.251 35.223h-23.327zm184.832 31.412c-3.811 2.483-8.315 4.215-13.165 4.215c-13.396 0-19.69-9.18-19.69-22.23V4.85l18.42-4.388v72.293c0 3.637 1.79 5.89 5.023 5.89c.981 0 2.079-.232 3.118-.694zm-32.162 0c-3.811 2.483-8.315 4.215-13.166 4.215c-13.396 0-19.69-9.18-19.69-22.23V12.53l18.42-4.562v64.787c0 3.637 1.79 5.89 5.024 5.89c.981 0 2.078-.232 3.118-.694zm-57.8-31.18c0-10.798-6.929-18.247-17.323-18.247s-17.322 7.333-17.322 18.246c0 10.914 6.929 18.247 17.322 18.247c10.394 0 17.323-7.333 17.323-18.247m-53.469 0c0-20.729 15.186-35.222 36.146-35.222s36.262 14.378 36.262 35.222c0 20.903-15.359 35.396-36.262 35.396c-20.96 0-36.146-14.493-36.146-35.396M156.307 55.49l13.28-35.57l13.281 35.57zm-.693-48.907L121.547 93.08h20.671l7.276-19.517h40.13L196.9 93.08h20.671L180.905 0h-15.532a10.54 10.54 0 0 0-9.759 6.583m95.101 71.08c-10.278 0-17.323-7.333-17.323-18.247s7.045-18.246 17.323-18.246s17.323 7.333 17.323 18.246c0 11.202-7.218 18.247-17.323 18.247m16.11-45.097c-4.562-5.312-11.49-8.372-19.863-8.372c-18.016 0-32.393 14.378-32.393 35.107c0 20.902 14.377 35.511 31.873 35.511c9.354 0 16.688-4.1 21.365-10.913l.808 9.18h16.514V0h-7.795c-5.774 0-10.509 4.677-10.509 10.451z" fill="#ffffff"></path>
</svg>
</div>
<div className="opacity-50 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0 cursor-pointer flex-shrink-0" style={{paddingRight: '48px'}}>
<svg aria-hidden="true" className="iconify w-[96px] h-[72px]" height="72" role="img" strokeWidth="2" style={{width: '96px', height: '72px'}} viewbox="0 0 512 209" width="96" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M156.166 152.93h-20.86l18.07-36.587h.224zm.892 16.621l1.227 14.501h22.979l-7.697-84.44h-34.245l-43.169 84.44h23.425l7.25-14.5zm56.331-22.532h3.458l16.509-22.198h21.082l-22.755 28.333l14.055 30.675h-22.533l-9.147-23.87h-3.234l-5.132 23.87h-19.52l17.847-84.106h19.41zm65.924 12.493c6.358 0 10.597.446 9.37 5.354c-1.45 6.358-4.015 7.25-12.158 7.25c-3.012 0-8.478 0-7.028-6.357c1.116-5.355 5.131-6.247 9.816-6.247m5.355 24.317h19.186l7.696-36.81c4.462-20.413-3.57-22.756-23.201-22.756c-13.832 0-27.218-.223-31.234 18.294h19.187c1.227-5.354 4.461-6.358 9.146-6.358c8.478 0 8.255 3.57 6.805 8.923l-1.897 9.37h-.892c-.67-6.804-9.147-6.58-14.724-6.58c-14.055 0-22.31 4.461-25.321 18.516c-3.235 15.059 4.015 18.294 17.401 18.294c6.804 0 15.728-1.45 18.963-9.37h.67zm58.45-59.008l-1.673 8.477h.67c3.792-7.027 11.488-8.923 18.07-8.923c8.477 0 16.62 1.45 15.505 11.49h.892c2.789-8.479 11.49-11.49 18.963-11.49c13.609 0 19.41 5.577 16.397 19.186l-8.7 40.38h-19.186l7.25-34.245c.893-6.358 1.897-10.82-5.354-10.82c-7.25 0-10.04 4.908-11.266 11.266l-7.028 33.576h-19.186l7.474-35.695c.892-5.355 1.45-9.147-5.354-9.147c-7.92 0-10.374 4.239-11.713 11.266l-7.027 33.576h-19.186l12.716-59.12h17.848v.223zm99.165 34.691c6.358 0 10.597.446 9.37 5.354c-1.227 6.358-4.016 7.25-12.158 7.25c-2.79 0-8.478 0-7.028-6.357c1.116-5.355 4.908-6.247 9.816-6.247m5.131 24.317H466.6l7.697-36.81c4.462-20.413-3.57-22.756-23.202-22.756c-13.831 0-27.217-.223-31.233 18.294h19.186c1.227-5.354 4.462-6.358 9.147-6.358c8.478 0 8.255 3.57 6.805 8.923l-1.897 9.37h-.892c-.67-6.804-9.147-6.58-14.724-6.58c-14.055 0-22.31 4.461-25.321 18.516c-3.235 15.059 4.015 18.294 17.4 18.294c6.805 0 15.729-1.45 18.964-9.37h.67zm47.408 0h-19.186l12.381-59.12h19.186zm16.843-75.182c0 5.912-4.908 10.82-10.82 10.82s-10.82-4.908-10.82-10.82c0-6.135 4.908-10.82 10.82-10.82s10.82 4.685 10.82 10.82" fill="#ffffff"></path>
<path d="M106.193 204.242c-42.946-13.162-74.068-52.761-74.068-99.388c0-47.407 31.903-87.23 75.518-100.169c4.462-1.227 3.235-4.239-2.12-4.239C47.631.446.446 47.073.446 104.52s46.85 104.074 105.077 104.074c5.355.334 5.578-2.678.67-4.35m-54.1-75.294c-.224-2.789-.447-5.577-.447-8.477c0-45.735 37.034-82.768 82.768-82.768c43.169 0 56.331 19.186 57.67 18.07c1.673-1.45-15.728-39.599-66.37-39.599c-45.735 0-82.768 37.034-82.768 82.768c0 10.597 2.119 20.636 5.577 30.006c1.45 4.016 3.792 4.016 3.57 0M86.56 69.382c21.306-9.37 48.523-9.593 75.071-.446c17.848 6.358 28.11 15.059 29.114 14.724c1.45-.67-10.374-19.186-31.68-27.217c-25.767-9.593-53.43-4.685-73.62 11.266c-2.231 1.673-1.562 2.9 1.115 1.673" fill="#ffffff">
</path>
</svg>
</div>
<div className="opacity-50 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0 cursor-pointer flex-shrink-0" style={{paddingRight: '48px'}}>
<svg aria-hidden="true" className="iconify w-[96px] h-[72px]" height="72" role="img" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '96px', height: '72px'}} viewbox="0 0 512 94" width="96" xmlns="http://www.w3.org/2000/svg">
<defs></defs>
<path d="M139.049 31.254c5.189 0 10.617 1.207 14.962 3.739v16.529c-4.103-2.895-8.327-4.342-12.911-4.342c-9.17 0-16.168 6.394-16.168 15.443c0 8.929 6.877 15.443 16.168 15.443c4.705 0 9.292-1.93 13.032-4.584v16.65c-4.826 2.653-10.136 3.861-15.325 3.861c-18.338 0-31.611-12.669-31.611-31.37c0-17.978 13.152-31.369 31.853-31.369m50.181 0c18.462 0 32.337 13.633 32.337 31.369s-13.875 31.37-32.337 31.37c-18.459 0-32.335-13.634-32.335-31.37s13.876-31.369 32.335-31.369m0 46.694c8.205 0 14.961-6.759 14.961-15.325s-6.756-15.322-14.961-15.322c-8.203 0-14.962 6.757-14.962 15.322c0 8.566 6.759 15.325 14.962 15.325M290.272 7.969v84.456h-17.497v-7.963c-4.1 6.033-11.461 9.41-19.303 9.41c-16.048 0-28.232-13.513-28.232-31.249c0-17.615 12.184-31.248 28.232-31.248c7.842 0 15.203 3.016 19.303 9.168V7.969Zm-32.217 70.097c8.569 0 15.325-6.877 15.325-15.443s-6.756-15.443-15.325-15.443c-8.565 0-15.321 6.878-15.321 15.443c0 8.566 6.756 15.443 15.321 15.443m40.384 14.359V32.821h17.615v59.604Zm64.6-59.604h17.615v59.604h-17.615v-7.6c-3.501 5.67-9.534 9.168-17.376 9.168c-13.513 0-21.836-9.41-21.836-24.372v-36.8h17.615v32.577c0 7.842 3.86 12.429 10.496 12.429c6.756 0 11.101-5.068 11.101-13.515Zm43.4 59.604h-17.615V32.821h17.615v7.482c3.137-5.431 8.928-9.049 16.771-9.049c8.084 0 14.238 3.86 17.497 10.375c3.739-6.273 10.495-10.375 19.182-10.375c13.633 0 21.355 9.289 21.355 23.769v37.402h-17.615v-33.3c0-7.361-3.377-11.824-9.531-11.824c-6.033 0-10.136 4.947-10.257 12.911v32.213h-17.615v-33.06c0-7.601-3.376-12.064-9.409-12.064c-6.275 0-10.378 5.066-10.378 13.271ZM502.09 8.802v19.072h-5.522v-2.546c-1.312 1.931-3.667 3.011-6.178 3.011c-5.135 0-9.033-4.325-9.033-10.001c0-5.635 3.898-9.998 9.033-9.998c2.511 0 4.866.965 6.178 2.933V8.802Zm-10.232 14.48c2.742 0 4.904-2.201 4.904-4.944c0-2.739-2.162-4.941-4.904-4.941s-4.904 2.202-4.904 4.941c0 2.743 2.162 4.944 4.904 4.944m14.042 4.592V8.802h5.638v19.072Zm2.82-21.311c-1.815 0-3.283-1.506-3.283-3.28c0-1.777 1.468-3.283 3.283-3.283S512 1.506 512 3.283c0 1.774-1.465 3.28-3.28 3.28M307.247 7.842c5.67 0 10.254 4.708 10.254 10.257s-4.584 10.254-10.254 10.254s-10.257-4.705-10.257-10.254s4.587-10.257 10.257-10.257" fill="#ffffff">
</path>
<path d="M31.187 31.67c4.479 0 8.726.947 12.574 2.649c-8.526 4.836-14.475 15.792-14.475 28.538c0 12.744 5.955 23.702 14.475 28.538a31 31 0 0 1-12.574 2.649C13.964 94.044 0 80.08 0 62.857S13.964 31.67 31.187 31.67" fill="#ffffff">
</path>
<path d="M55.781 43.691a31.3 31.3 0 0 0-12.023-9.372c2.995-1.702 6.302-2.649 9.781-2.649c3.282 0 6.42.847 9.272 2.366c-2.788 2.076-5.207 5.431-7.035 9.655z" fill="#ffffff">
</path>
<path d="M55.776 82.023c1.828 4.224 4.247 7.571 7.035 9.655c-2.858 1.524-5.99 2.366-9.272 2.366c-3.485 0-6.791-.947-9.781-2.649a31.36 31.36 0 0 0 12.023-9.372z" fill="#ffffff">
</path>
<path d="M29.283 62.857c0-12.746 5.955-23.702 14.475-28.538a31.36 31.36 0 0 1 12.023 9.372c-2.296 5.291-3.662 11.939-3.662 19.166c0 7.224 1.371 13.875 3.662 19.164a31.3 31.3 0 0 1-12.023 9.374c-8.525-4.836-14.475-15.794-14.475-28.538" fill="#ffffff">
</path>
<path d="M74.673 78.152c.882 4.702 2.159 8.646 3.699 11.429c-2.605 2.831-5.659 4.46-8.931 4.46c-2.347 0-4.584-.842-6.627-2.366c5.033-2.678 9.205-7.474 11.859-13.515z" fill="#ffffff">
</path>
<path d="M62.814 34.036c2.043-1.524 4.28-2.366 6.627-2.366c3.267 0 6.321 1.63 8.931 4.461c-1.535 2.782-2.812 6.724-3.699 11.426c-2.654-6.044-6.826-10.838-11.859-13.515z" fill="#ffffff">
</path>
<path d="M55.781 82.018a31.06 31.06 0 0 0 6.589-19.164a31.06 31.06 0 0 0-6.589-19.163c1.831-4.221 4.248-7.574 7.038-9.657c5.031 2.677 9.203 7.474 11.857 13.515c-.853 4.519-1.336 9.74-1.336 15.3s.489 10.778 1.336 15.298c-2.654 6.043-6.826 10.84-11.857 13.517c-2.79-2.078-5.207-5.43-7.038-9.657z" fill="#ffffff">
</path>
<path d="M55.778 82.023c-2.293-5.291-3.659-11.939-3.659-19.166c0-7.224 1.371-13.873 3.659-19.164a31.05 31.05 0 0 1 6.592 19.164a31.05 31.05 0 0 1-6.592 19.166" fill="#ffffff">
</path>
<path d="M78.372 36.131c1.565-2.831 3.396-4.461 5.361-4.461c5.743 0 10.397 13.965 10.397 31.187s-4.654 31.187-10.397 31.187c-1.96 0-3.796-1.632-5.361-4.461c5.031-5.46 8.397-15.38 8.397-26.726s-3.366-21.271-8.397-26.726" fill="#ffffff">
</path>
<path d="M78.372 36.131c1.565-2.831 3.396-4.461 5.361-4.461c5.743 0 10.397 13.965 10.397 31.187s-4.654 31.187-10.397 31.187c-1.96 0-3.796-1.632-5.361-4.461c5.031-5.46 8.397-15.38 8.397-26.726s-3.366-21.271-8.397-26.726" fill="#ffffff">
</path>
<path d="M77.797 62.86c0-5.563-1.135-10.781-3.124-15.3c.882-4.703 2.159-8.644 3.702-11.427c5.03 5.455 8.396 15.387 8.396 26.727c0 11.337-3.366 21.271-8.396 26.726c-1.538-2.785-2.812-6.727-3.702-11.429c1.984-4.519 3.124-9.737 3.124-15.297" fill="#ffffff">
</path>
<path d="M74.673 78.155c-.852-4.52-1.336-9.738-1.336-15.298c0-5.562.489-10.781 1.336-15.3c1.984 4.519 3.124 9.738 3.124 15.3c0 5.56-1.135 10.778-3.124 15.298" fill="#ffffff">
</path>
</svg>
</div>
<div className="opacity-50 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0 cursor-pointer flex-shrink-0" style={{paddingRight: '48px'}}>
<svg aria-hidden="true" className="iconify w-[96px] h-[72px]" height="72" role="img" strokeWidth="2" style={{width: '96px', height: '72px'}} viewbox="0 0 512 95" width="96" xmlns="http://www.w3.org/2000/svg">
<path d="M102.607 46.54c0-25.695-20.21-46.54-46.54-46.54c-17.495 0-32.682 9.585-40.65 23.847L38.11 46.54c0-9.932 8.372-17.958 17.957-17.958c10.163 0 17.958 8.026 17.958 17.958s-7.853 17.958-17.958 17.958H17.38C7.795 64.498 0 72.293 0 81.878V93.08h56.067c26.157 0 46.54-20.845 46.54-46.54" fill="#ffffff">
</path>
<path className="" d="M314.635 41.054h21.711c8.43 0 12.819-3.984 12.819-11.432c0-7.565-4.389-11.549-12.819-11.549h-21.71zm12.53 18.131h-12.53V93.08h-19.459V10.45c0-5.774 4.677-10.451 10.51-10.451h31.238c20.151 0 32.393 12.126 32.393 29.506c0 13.974-7.853 24.598-21.48 28.351l24.251 35.223h-23.327zm184.832 31.412c-3.811 2.483-8.315 4.215-13.165 4.215c-13.396 0-19.69-9.18-19.69-22.23V4.85l18.42-4.388v72.293c0 3.637 1.79 5.89 5.023 5.89c.981 0 2.079-.232 3.118-.694zm-32.162 0c-3.811 2.483-8.315 4.215-13.166 4.215c-13.396 0-19.69-9.18-19.69-22.23V12.53l18.42-4.562v64.787c0 3.637 1.79 5.89 5.024 5.89c.981 0 2.078-.232 3.118-.694zm-57.8-31.18c0-10.798-6.929-18.247-17.323-18.247s-17.322 7.333-17.322 18.246c0 10.914 6.929 18.247 17.322 18.247c10.394 0 17.323-7.333 17.323-18.247m-53.469 0c0-20.729 15.186-35.222 36.146-35.222s36.262 14.378 36.262 35.222c0 20.903-15.359 35.396-36.262 35.396c-20.96 0-36.146-14.493-36.146-35.396M156.307 55.49l13.28-35.57l13.281 35.57zm-.693-48.907L121.547 93.08h20.671l7.276-19.517h40.13L196.9 93.08h20.671L180.905 0h-15.532a10.54 10.54 0 0 0-9.759 6.583m95.101 71.08c-10.278 0-17.323-7.333-17.323-18.247s7.045-18.246 17.323-18.246s17.323 7.333 17.323 18.246c0 11.202-7.218 18.247-17.323 18.247m16.11-45.097c-4.562-5.312-11.49-8.372-19.863-8.372c-18.016 0-32.393 14.378-32.393 35.107c0 20.902 14.377 35.511 31.873 35.511c9.354 0 16.688-4.1 21.365-10.913l.808 9.18h16.514V0h-7.795c-5.774 0-10.509 4.677-10.509 10.451z" fill="#ffffff"></path>
</svg>
</div>
<div className="opacity-50 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0 cursor-pointer flex-shrink-0" style={{paddingRight: '48px'}}>
<svg aria-hidden="true" className="iconify w-[96px] h-[72px]" height="72" role="img" strokeWidth="2" style={{width: '96px', height: '72px'}} viewbox="0 0 512 209" width="96" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M156.166 152.93h-20.86l18.07-36.587h.224zm.892 16.621l1.227 14.501h22.979l-7.697-84.44h-34.245l-43.169 84.44h23.425l7.25-14.5zm56.331-22.532h3.458l16.509-22.198h21.082l-22.755 28.333l14.055 30.675h-22.533l-9.147-23.87h-3.234l-5.132 23.87h-19.52l17.847-84.106h19.41zm65.924 12.493c6.358 0 10.597.446 9.37 5.354c-1.45 6.358-4.015 7.25-12.158 7.25c-3.012 0-8.478 0-7.028-6.357c1.116-5.355 5.131-6.247 9.816-6.247m5.355 24.317h19.186l7.696-36.81c4.462-20.413-3.57-22.756-23.201-22.756c-13.832 0-27.218-.223-31.234 18.294h19.187c1.227-5.354 4.461-6.358 9.146-6.358c8.478 0 8.255 3.57 6.805 8.923l-1.897 9.37h-.892c-.67-6.804-9.147-6.58-14.724-6.58c-14.055 0-22.31 4.461-25.321 18.516c-3.235 15.059 4.015 18.294 17.401 18.294c6.804 0 15.728-1.45 18.963-9.37h.67zm58.45-59.008l-1.673 8.477h.67c3.792-7.027 11.488-8.923 18.07-8.923c8.477 0 16.62 1.45 15.505 11.49h.892c2.789-8.479 11.49-11.49 18.963-11.49c13.609 0 19.41 5.577 16.397 19.186l-8.7 40.38h-19.186l7.25-34.245c.893-6.358 1.897-10.82-5.354-10.82c-7.25 0-10.04 4.908-11.266 11.266l-7.028 33.576h-19.186l7.474-35.695c.892-5.355 1.45-9.147-5.354-9.147c-7.92 0-10.374 4.239-11.713 11.266l-7.027 33.576h-19.186l12.716-59.12h17.848v.223zm99.165 34.691c6.358 0 10.597.446 9.37 5.354c-1.227 6.358-4.016 7.25-12.158 7.25c-2.79 0-8.478 0-7.028-6.357c1.116-5.355 4.908-6.247 9.816-6.247m5.131 24.317H466.6l7.697-36.81c4.462-20.413-3.57-22.756-23.202-22.756c-13.831 0-27.217-.223-31.233 18.294h19.186c1.227-5.354 4.462-6.358 9.147-6.358c8.478 0 8.255 3.57 6.805 8.923l-1.897 9.37h-.892c-.67-6.804-9.147-6.58-14.724-6.58c-14.055 0-22.31 4.461-25.321 18.516c-3.235 15.059 4.015 18.294 17.4 18.294c6.805 0 15.729-1.45 18.964-9.37h.67zm47.408 0h-19.186l12.381-59.12h19.186zm16.843-75.182c0 5.912-4.908 10.82-10.82 10.82s-10.82-4.908-10.82-10.82c0-6.135 4.908-10.82 10.82-10.82s10.82 4.685 10.82 10.82" fill="#ffffff"></path>
<path d="M106.193 204.242c-42.946-13.162-74.068-52.761-74.068-99.388c0-47.407 31.903-87.23 75.518-100.169c4.462-1.227 3.235-4.239-2.12-4.239C47.631.446.446 47.073.446 104.52s46.85 104.074 105.077 104.074c5.355.334 5.578-2.678.67-4.35m-54.1-75.294c-.224-2.789-.447-5.577-.447-8.477c0-45.735 37.034-82.768 82.768-82.768c43.169 0 56.331 19.186 57.67 18.07c1.673-1.45-15.728-39.599-66.37-39.599c-45.735 0-82.768 37.034-82.768 82.768c0 10.597 2.119 20.636 5.577 30.006c1.45 4.016 3.792 4.016 3.57 0M86.56 69.382c21.306-9.37 48.523-9.593 75.071-.446c17.848 6.358 28.11 15.059 29.114 14.724c1.45-.67-10.374-19.186-31.68-27.217c-25.767-9.593-53.43-4.685-73.62 11.266c-2.231 1.673-1.562 2.9 1.115 1.673" fill="#ffffff">
</path>
</svg>
</div>
<div className="opacity-50 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0 cursor-pointer flex-shrink-0" style={{paddingRight: '48px'}}>
<svg aria-hidden="true" className="iconify w-[96px] h-[72px]" height="72" role="img" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '96px', height: '72px'}} viewbox="0 0 512 94" width="96" xmlns="http://www.w3.org/2000/svg">
<defs></defs>
<path d="M139.049 31.254c5.189 0 10.617 1.207 14.962 3.739v16.529c-4.103-2.895-8.327-4.342-12.911-4.342c-9.17 0-16.168 6.394-16.168 15.443c0 8.929 6.877 15.443 16.168 15.443c4.705 0 9.292-1.93 13.032-4.584v16.65c-4.826 2.653-10.136 3.861-15.325 3.861c-18.338 0-31.611-12.669-31.611-31.37c0-17.978 13.152-31.369 31.853-31.369m50.181 0c18.462 0 32.337 13.633 32.337 31.369s-13.875 31.37-32.337 31.37c-18.459 0-32.335-13.634-32.335-31.37s13.876-31.369 32.335-31.369m0 46.694c8.205 0 14.961-6.759 14.961-15.325s-6.756-15.322-14.961-15.322c-8.203 0-14.962 6.757-14.962 15.322c0 8.566 6.759 15.325 14.962 15.325M290.272 7.969v84.456h-17.497v-7.963c-4.1 6.033-11.461 9.41-19.303 9.41c-16.048 0-28.232-13.513-28.232-31.249c0-17.615 12.184-31.248 28.232-31.248c7.842 0 15.203 3.016 19.303 9.168V7.969Zm-32.217 70.097c8.569 0 15.325-6.877 15.325-15.443s-6.756-15.443-15.325-15.443c-8.565 0-15.321 6.878-15.321 15.443c0 8.566 6.756 15.443 15.321 15.443m40.384 14.359V32.821h17.615v59.604Zm64.6-59.604h17.615v59.604h-17.615v-7.6c-3.501 5.67-9.534 9.168-17.376 9.168c-13.513 0-21.836-9.41-21.836-24.372v-36.8h17.615v32.577c0 7.842 3.86 12.429 10.496 12.429c6.756 0 11.101-5.068 11.101-13.515Zm43.4 59.604h-17.615V32.821h17.615v7.482c3.137-5.431 8.928-9.049 16.771-9.049c8.084 0 14.238 3.86 17.497 10.375c3.739-6.273 10.495-10.375 19.182-10.375c13.633 0 21.355 9.289 21.355 23.769v37.402h-17.615v-33.3c0-7.361-3.377-11.824-9.531-11.824c-6.033 0-10.136 4.947-10.257 12.911v32.213h-17.615v-33.06c0-7.601-3.376-12.064-9.409-12.064c-6.275 0-10.378 5.066-10.378 13.271ZM502.09 8.802v19.072h-5.522v-2.546c-1.312 1.931-3.667 3.011-6.178 3.011c-5.135 0-9.033-4.325-9.033-10.001c0-5.635 3.898-9.998 9.033-9.998c2.511 0 4.866.965 6.178 2.933V8.802Zm-10.232 14.48c2.742 0 4.904-2.201 4.904-4.944c0-2.739-2.162-4.941-4.904-4.941s-4.904 2.202-4.904 4.941c0 2.743 2.162 4.944 4.904 4.944m14.042 4.592V8.802h5.638v19.072Zm2.82-21.311c-1.815 0-3.283-1.506-3.283-3.28c0-1.777 1.468-3.283 3.283-3.283S512 1.506 512 3.283c0 1.774-1.465 3.28-3.28 3.28M307.247 7.842c5.67 0 10.254 4.708 10.254 10.257s-4.584 10.254-10.254 10.254s-10.257-4.705-10.257-10.254s4.587-10.257 10.257-10.257" fill="#ffffff">
</path>
<path d="M31.187 31.67c4.479 0 8.726.947 12.574 2.649c-8.526 4.836-14.475 15.792-14.475 28.538c0 12.744 5.955 23.702 14.475 28.538a31 31 0 0 1-12.574 2.649C13.964 94.044 0 80.08 0 62.857S13.964 31.67 31.187 31.67" fill="#ffffff">
</path>
<path d="M55.781 43.691a31.3 31.3 0 0 0-12.023-9.372c2.995-1.702 6.302-2.649 9.781-2.649c3.282 0 6.42.847 9.272 2.366c-2.788 2.076-5.207 5.431-7.035 9.655z" fill="#ffffff">
</path>
<path d="M55.776 82.023c1.828 4.224 4.247 7.571 7.035 9.655c-2.858 1.524-5.99 2.366-9.272 2.366c-3.485 0-6.791-.947-9.781-2.649a31.36 31.36 0 0 0 12.023-9.372z" fill="#ffffff">
</path>
<path d="M29.283 62.857c0-12.746 5.955-23.702 14.475-28.538a31.36 31.36 0 0 1 12.023 9.372c-2.296 5.291-3.662 11.939-3.662 19.166c0 7.224 1.371 13.875 3.662 19.164a31.3 31.3 0 0 1-12.023 9.374c-8.525-4.836-14.475-15.794-14.475-28.538" fill="#ffffff">
</path>
<path d="M74.673 78.152c.882 4.702 2.159 8.646 3.699 11.429c-2.605 2.831-5.659 4.46-8.931 4.46c-2.347 0-4.584-.842-6.627-2.366c5.033-2.678 9.205-7.474 11.859-13.515z" fill="#ffffff">
</path>
<path d="M62.814 34.036c2.043-1.524 4.28-2.366 6.627-2.366c3.267 0 6.321 1.63 8.931 4.461c-1.535 2.782-2.812 6.724-3.699 11.426c-2.654-6.044-6.826-10.838-11.859-13.515z" fill="#ffffff">
</path>
<path d="M55.781 82.018a31.06 31.06 0 0 0 6.589-19.164a31.06 31.06 0 0 0-6.589-19.163c1.831-4.221 4.248-7.574 7.038-9.657c5.031 2.677 9.203 7.474 11.857 13.515c-.853 4.519-1.336 9.74-1.336 15.3s.489 10.778 1.336 15.298c-2.654 6.043-6.826 10.84-11.857 13.517c-2.79-2.078-5.207-5.43-7.038-9.657z" fill="#ffffff">
</path>
<path d="M55.778 82.023c-2.293-5.291-3.659-11.939-3.659-19.166c0-7.224 1.371-13.873 3.659-19.164a31.05 31.05 0 0 1 6.592 19.164a31.05 31.05 0 0 1-6.592 19.166" fill="#ffffff">
</path>
<path d="M78.372 36.131c1.565-2.831 3.396-4.461 5.361-4.461c5.743 0 10.397 13.965 10.397 31.187s-4.654 31.187-10.397 31.187c-1.96 0-3.796-1.632-5.361-4.461c5.031-5.46 8.397-15.38 8.397-26.726s-3.366-21.271-8.397-26.726" fill="#ffffff">
</path>
<path d="M78.372 36.131c1.565-2.831 3.396-4.461 5.361-4.461c5.743 0 10.397 13.965 10.397 31.187s-4.654 31.187-10.397 31.187c-1.96 0-3.796-1.632-5.361-4.461c5.031-5.46 8.397-15.38 8.397-26.726s-3.366-21.271-8.397-26.726" fill="#ffffff">
</path>
<path d="M77.797 62.86c0-5.563-1.135-10.781-3.124-15.3c.882-4.703 2.159-8.644 3.702-11.427c5.03 5.455 8.396 15.387 8.396 26.727c0 11.337-3.366 21.271-8.396 26.726c-1.538-2.785-2.812-6.727-3.702-11.429c1.984-4.519 3.124-9.737 3.124-15.297" fill="#ffffff">
</path>
<path d="M74.673 78.155c-.852-4.52-1.336-9.738-1.336-15.298c0-5.562.489-10.781 1.336-15.3c1.984 4.519 3.124 9.738 3.124 15.3c0 5.56-1.135 10.778-3.124 15.298" fill="#ffffff">
</path>
</svg>
</div>
</div>
</div>
</div>
</div>
<div className="hidden md:flex flex-col bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/09dc0e81-3730-4910-9053-26ecec7a3816_1600w.webp)] bg-cover pt-12 pr-12 pb-12 pl-12 items-center justify-center" style={{}}>
</div>
</div>
</div>
</div>
</section>
<section className="shadow-black/30 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-br from-black/10 to-black/0 border-[#ffffff]/5 border rounded-none pt-0 pr-8 pb-0 pl-8 shadow-2xl backdrop-blur-sm">
<div className="max-w-7xl rounded-3xl mr-auto ml-auto pt-12 pb-12">
<style className="">
    @keyframes scanline {
      0% { left: -10%; opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { left: 110%; opacity: 0; }
    }
    @keyframes flow-h {
      0% { background-position: 0 0; }
      100% { background-position: 20px 0; }
    }
    @keyframes dash-flow {
      to { stroke-dashoffset: -20; }
    }
    @keyframes pulse-node {
      0%, 100% { transform: scale(1); opacity: 0.5; box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4); }
      50% { transform: scale(1.2); opacity: 1; box-shadow: 0 0 10px 4px rgba(99, 102, 241, 0.2); }
    }
    
    /* New Animations */
    @keyframes scale-loop {
      0% { transform: scaleX(0); }
      15% { transform: scaleX(1); }
      85% { transform: scaleX(1); opacity: 1; }
      100% { transform: scaleX(1); opacity: 0; }
    }
    @keyframes draw-chart-loop {
      0% { stroke-dashoffset: 200; opacity: 0; }
      5% { opacity: 1; }
      30% { stroke-dashoffset: 0; }
      80% { opacity: 1; }
      100% { opacity: 0; stroke-dashoffset: 0; }
    }
    @keyframes draw-chart-dash-loop {
      0% { stroke-dashoffset: 100; opacity: 0; }
      30% { opacity: 0; stroke-dashoffset: 100; }
      50% { stroke-dashoffset: 0; opacity: 0.6; }
      80% { opacity: 0.6; }
      100% { opacity: 0; }
    }
    @keyframes type-loop-1 {
      0% { clip-path: inset(0 100% 0 0); }
      10% { clip-path: inset(0 0 0 0); }
      85% { clip-path: inset(0 0 0 0); opacity: 1; }
      95% { opacity: 0; }
      100% { clip-path: inset(0 100% 0 0); opacity: 0; }
    }
    @keyframes type-loop-2 {
      0% { clip-path: inset(0 100% 0 0); }
      15% { clip-path: inset(0 100% 0 0); }
      25% { clip-path: inset(0 0 0 0); }
      85% { clip-path: inset(0 0 0 0); opacity: 1; }
      95% { opacity: 0; }
      100% { clip-path: inset(0 100% 0 0); opacity: 0; }
    }
    @keyframes type-loop-3 {
      0% { clip-path: inset(0 100% 0 0); }
      30% { clip-path: inset(0 100% 0 0); }
      40% { clip-path: inset(0 0 0 0); }
      85% { clip-path: inset(0 0 0 0); opacity: 1; }
      95% { opacity: 0; }
      100% { clip-path: inset(0 100% 0 0); opacity: 0; }
    }

    .animate-scanline {
      animation: scanline 3s linear infinite;
    }
    .animate-dash {
      animation: dash-flow 1s linear infinite;
    }
  </style>

<div className="w-full lg:mb-24 mb-20">

<div className="w-full lg:mb-24 mb-20">

<div className="w-full">

<div className="max-w-4xl">
<h2 className="lg:text-8xl text-4xl font-medium text-white tracking-tighter mb-8 font-oswald uppercase" style={{animation: 'reveal-up 1s cubic-bezier(0.16, 1, 0.3, 1) both'}}>
            Predictive Intelligence <span className="text-white/30">Engine.</span>
</h2>
</div>

<div className="delay-100 grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4 w-full" style={{animation: 'reveal-up 1s cubic-bezier(0.16, 1, 0.3, 1) both'}}>

<div className="max-w-4xl">
<p className="text-lg text-white/60 font-light leading-relaxed">
              Deploy predictive models that recursively optimize your operations.
              YUNA bridges the gap between raw data and actionable foresight.
            </p>
</div>

<div className="flex gap-4 lg:justify-end items-center w-full">
<button className="group flex transition-all duration-500 hover:scale-[1.03] active:scale-[0.98] hover:shadow-[-15px_0_40px_-5px_rgba(249,115,22,0.6),15px_0_40px_-5px_rgba(255,255,255,0.4)] text-lg font-semibold text-white h-14 pr-10 pl-10 relative gap-x-2 gap-y-2 items-center justify-center" style={{background: 'linear-gradient(#000, #000) padding-box, linear-gradient(90deg, #f97316 0%, #fbbf24 50%, #ffffff 100%) border-box', border: '1.5px solid transparent'}}>
<span className="flex items-center gap-2 leading-none z-10 relative drop-shadow-md">Learn More</span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-0 border-t border-l border-white/5" onmousemove="for(const card of this.children){const rect=card.getBoundingClientRect(),x=event.clientX-rect.left,y=event.clientY-rect.top;card.style.setProperty('--mouse-x', x + 'px');card.style.setProperty('--mouse-y', y + 'px');}">

<div className="col-span-1 lg:col-span-2 group flex flex-col overflow-hidden transition-all hover:bg-white/[0.02] bg-zinc-900/50 border-r border-b border-white/5 rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-md justify-between" style={{animation: '1s cubic-bezier(0.16, 1, 0.3, 1) 0s 1 normal both running reveal-up', -MouseX: '856px', -MouseY: '48px'}}>

<div className="pointer-events-none absolute -inset-px rounded-none opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)', zIndex: '0'}}></div>
<div className="pointer-events-none absolute -inset-px rounded-none opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)', zIndex: '0', padding: '1px', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude'}}></div>
<div className="flex h-48 mb-6 relative items-center justify-center">

<div className="relative w-full h-full max-w-[240px] flex items-center justify-center">
<svg className="w-full h-full" fill="none" height="160" viewbox="0 0 240 160" width="240" xmlns="http://www.w3.org/2000/svg">

<g stroke="url(#paint0_linear)" stroke-opacity="0.3" strokeWidth="1">
<path className="animate-dash" d="M40 40 L120 40" stroke-dasharray="4 4"></path>
<path className="animate-dash" d="M40 40 L120 80" stroke-dasharray="4 4" style={{animationDelay: '0.1s'}}></path>
<path className="animate-dash" d="M40 40 L120 120" stroke-dasharray="4 4" style={{animationDelay: '0.2s'}}></path>
<path className="animate-dash" d="M40 80 L120 40" stroke-dasharray="4 4" style={{animationDelay: '0.3s'}}></path>
<path className="animate-dash" d="M40 80 L120 80" stroke-dasharray="4 4" style={{animationDelay: '0.4s'}}></path>
<path className="animate-dash" d="M40 80 L120 120" stroke-dasharray="4 4" style={{animationDelay: '0.5s'}}></path>
<path className="animate-dash" d="M40 120 L120 40" stroke-dasharray="4 4" style={{animationDelay: '0.6s'}}></path>
<path className="animate-dash" d="M40 120 L120 80" stroke-dasharray="4 4" style={{animationDelay: '0.7s'}}></path>
<path className="animate-dash" d="M40 120 L120 120" stroke-dasharray="4 4" style={{animationDelay: '0.8s'}}></path>
<path className="animate-dash" d="M120 40 L200 80" stroke-dasharray="4 4" style={{animationDelay: '0.2s'}}></path>
<path className="animate-dash" d="M120 80 L200 80" stroke-dasharray="4 4" style={{animationDelay: '0.4s'}}></path>
<path className="animate-dash" d="M120 120 L200 80" stroke-dasharray="4 4" style={{animationDelay: '0.6s'}}></path>
</g>

<circle cx="40" cy="40" fill="#6366f1" r="4" style={{animation: 'pulse-node 2s infinite'}}></circle>
<circle cx="40" cy="80" fill="#6366f1" r="4" style={{animation: 'pulse-node 2s infinite 0.3s'}}></circle>
<circle cx="40" cy="120" fill="#6366f1" r="4" style={{animation: 'pulse-node 2s infinite 0.6s'}}></circle>

<circle cx="120" cy="40" fill="#a855f7" r="5" style={{animation: 'pulse-node 2s infinite 0.9s'}}></circle>
<circle cx="120" cy="80" fill="#a855f7" r="5" style={{animation: 'pulse-node 2s infinite 1.2s'}}></circle>
<circle cx="120" cy="120" fill="#a855f7" r="5" style={{animation: 'pulse-node 2s infinite 1.5s'}}></circle>

<circle cx="200" cy="80" fill="#10b981" r="8" stroke="rgba(255,255,255,0.2)" strokeWidth="2" style={{animation: 'pulse-node 2s infinite 1.8s'}}></circle>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="paint0_linear" x1="0" x2="240" y1="0" y2="0">
<stop stop-color="#6366F1" stop-opacity="0.2"></stop>
<stop offset="0.5" stop-color="#A855F7" stop-opacity="0.6"></stop>
<stop offset="1" stop-color="#10B981" stop-opacity="0.8"></stop>
</lineargradient>
</defs>
</svg>

<div className="absolute top-4 left-0 text-[10px] font-mono uppercase tracking-wider text-indigo-400/80 bg-indigo-500/10 px-1.5 py-0.5 rounded">Input</div>
<div className="absolute bottom-4 right-0 text-[10px] font-mono uppercase tracking-wider text-emerald-400/80 bg-emerald-500/10 px-1.5 py-0.5 rounded">Output</div>
</div>
</div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-white mb-2 tracking-tight flex items-center gap-2">Predictive Models</h3>
<p className="text-sm text-white/50 font-light leading-relaxed">Deploy custom predictive models trained on your specific business data patterns.</p>
</div>
</div>

<div className="col-span-1 lg:col-span-2 group flex flex-col overflow-hidden transition-all hover:bg-white/[0.02] bg-zinc-900/50 border-r border-b border-white/5 rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-md justify-between" style={{animation: '1s cubic-bezier(0.16, 1, 0.3, 1) 0s 1 normal both running reveal-up', -MouseX: '473px', -MouseY: '48px'}}>

<div className="pointer-events-none absolute -inset-px rounded-none opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)', zIndex: '0'}}></div>
<div className="pointer-events-none absolute -inset-px rounded-none opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)', zIndex: '0', padding: '1px', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude'}}></div>
<div className="col-span-1 lg:col-span-2 group flex flex-col overflow-hidden transition-all hover:bg-white/[0.02] bg-zinc-900/50 border-white/5 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-md justify-between">
<div className="w-full max-w-[280px] space-y-4">

<div className="relative group/item">
<div className="flex items-center justify-between mb-1.5 text-xs z-10 relative">
<span className="font-medium text-white">j.parker@co.com</span>
<span className="font-mono text-red-400">98.2</span>
</div>
<div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-red-600 to-orange-500 rounded-full w-[98.2%] origin-left" style={{animation: 'scale-loop 4s cubic-bezier(0.4, 0, 0.2, 1) infinite', animationDelay: '0s'}}></div>
</div>
</div>

<div className="relative group/item opacity-80">
<div className="flex items-center justify-between mb-1.5 text-xs z-10 relative">
<span className="font-medium text-white/80">a.lee@inc.io</span>
<span className="font-mono text-yellow-400">45.0</span>
</div>
<div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full w-[45%] origin-left" style={{animation: 'scale-loop 4s cubic-bezier(0.4, 0, 0.2, 1) infinite', animationDelay: '0.2s'}}></div>
</div>
</div>

<div className="relative group/item opacity-60">
<div className="flex items-center justify-between mb-1.5 text-xs z-10 relative">
<span className="font-medium text-white/80">m.scott@paper.com</span>
<span className="font-mono text-green-400">12.4</span>
</div>
<div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-green-600 to-emerald-400 rounded-full w-[12.4%] origin-left" style={{animation: 'scale-loop 4s cubic-bezier(0.4, 0, 0.2, 1) infinite', animationDelay: '0.4s'}}></div>
</div>
</div>
</div>
</div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Risk Scores</h3>
<p className="text-sm text-white/50 font-light leading-relaxed">Instant risk scoring for every user and account, updated in real-time.</p>
</div>
</div>

<div className="col-span-1 lg:col-span-2 group flex flex-col overflow-hidden transition-all hover:bg-white/[0.02] bg-zinc-900/50 border-r border-b border-white/5 rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-md justify-between" style={{animation: '1s cubic-bezier(0.16, 1, 0.3, 1) 0s 1 normal both running reveal-up', -MouseX: '90px', -MouseY: '48px'}}>

<div className="pointer-events-none absolute -inset-px rounded-none opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)', zIndex: '0'}}></div>
<div className="pointer-events-none absolute -inset-px rounded-none opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)', zIndex: '0', padding: '1px', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude'}}></div>
<div className="flex h-48 mb-6 pr-2 pb-4 pl-2 relative items-end justify-center">

<div className="relative w-full h-32 border-l border-b border-white/10 group-hover:border-white/20 transition-colors">

<svg className="absolute inset-0 w-full h-full overflow-visible" preserveaspectratio="none">
<path d="M0 100 L20 80 L40 85 L60 50 L80 40 L100 20 L100 100 Z" fill="none"></path>
<path d="M0 100 L20 80 L40 85 L60 50 L80 40 L100 20" fill="none" stroke="#a855f7" stroke-dasharray="200" strokeWidth="2" style={{animation: 'draw-chart-loop 5s ease-in-out infinite'}} vector-effect="non-scaling-stroke"></path>

<path className="" d="M100 20 L120 15 L140 10" fill="none" opacity="0.6" stroke="#a855f7" stroke-dasharray="100" strokeWidth="2" style={{animation: 'draw-chart-dash-loop 5s ease-in-out infinite'}} vector-effect="non-scaling-stroke"></path>

<circle cx="100" cy="20" fill="#fff" r="3"></circle>
</svg>
<div className="absolute -top-6 right-0 text-[10px] px-2 py-0.5 rounded-full border font-mono shadow-sm bg-yellow-500/10 text-yellow-300 border-yellow-500/20" style={{}}>
                +14.5% proj
              </div>
</div>
</div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Retention Forecasting</h3>
<p className="text-sm text-white/50 font-light leading-relaxed">Forecast user retention cohorts with high accuracy using historical patterns.</p>
</div>
</div>

<div className="col-span-1 lg:col-span-3 group flex flex-col overflow-hidden transition-all hover:bg-white/[0.02] bg-zinc-900/50 border-r border-b border-white/5 rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-md justify-between" style={{minHeight: '320px', animation: '1s cubic-bezier(0.16, 1, 0.3, 1) 0s 1 normal both running reveal-up', -MouseX: '856px', -MouseY: '-314.5px'}}>

<div className="pointer-events-none absolute -inset-px rounded-none opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)', zIndex: '0'}}></div>
<div className="pointer-events-none -inset-px transition-opacity duration-300 group-hover:opacity-100 opacity-0 rounded-none absolute" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)', zIndex: '0', padding: '1px', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude'}}></div>
<div className="flex-1 flex mb-8 relative items-center justify-center">

<div className="flex overflow-hidden bg-zinc-900/50 w-full h-48 border-white/5 border rounded-xl pr-8 pl-8 relative items-center justify-between">

<div className="[mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] pointer-events-none absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<div className="relative z-10 w-16 h-16 bg-zinc-800 border border-white/10 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105">
<div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 relative z-10">
<svg className="lucide lucide-database" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
</div>

<div className="flex-1 h-full relative px-0 mx-[-1px]">
<svg className="absolute inset-0 w-full h-full pointer-events-none" preserveaspectratio="none" viewbox="0 0 100 192">
<defs>
<lineargradient id="grad-orange-blue" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#f97316"></stop>
<stop offset="100%" stop-color="#3b82f6"></stop>
</lineargradient>
<lineargradient id="grad-orange-purple" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#f97316"></stop>
<stop offset="100%" stop-color="#a855f7"></stop>
</lineargradient>
</defs>

<path d="M0,96 C50,96 50,68 100,68" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<path d="M0,96 C50,96 50,68 100,68" fill="none" stroke="url(#grad-orange-blue)" stroke-dasharray="30 200" strokeLinecap="round" strokeWidth="2" vector-effect="non-scaling-stroke">
<animate attributename="stroke-dashoffset" dur="2.5s" from="230" repeatcount="indefinite" to="0"></animate>
</path>

<path d="M0,96 C50,96 50,124 100,124" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<path d="M0,96 C50,96 50,124 100,124" fill="none" stroke="url(#grad-orange-purple)" stroke-dasharray="30 200" strokeLinecap="round" strokeWidth="2" vector-effect="non-scaling-stroke">
<animate attributename="stroke-dashoffset" dur="3s" from="230" repeatcount="indefinite" to="0"></animate>
</path>
</svg>
</div>

<div className="flex flex-col h-full justify-between py-[40px] relative z-10">

<div className="flex transition-transform duration-300 hover:scale-105 bg-zinc-800 w-10 h-10 border-white/10 border rounded-xl shadow-lg items-center justify-center">
<div className="w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 relative z-10">
<svg className="lucide lucide-cpu" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" rx="1" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
</div>
</div>

<div className="flex transition-transform duration-300 hover:scale-105 bg-zinc-800 w-10 h-10 border-white/10 border rounded-xl shadow-lg items-center justify-center">
<div className="w-7 h-7 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 relative z-10">
<svg className="lucide lucide-share-2" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle className="" cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</div>
</div>
</div>
</div>
</div>
<div className="relative z-10 mt-auto">
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">AI Pipelines Editor</h3>
<p className="text-sm text-white/50 font-light leading-relaxed max-w-md">Drag-and-drop editor to build and customize your AI data pipelines without writing code.</p>
</div>
</div>

<div className="col-span-1 lg:col-span-3 group flex flex-col overflow-hidden transition-all hover:bg-white/[0.02] bg-zinc-900/50 border-r border-b border-white/5 rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-md justify-between" style={{minHeight: '320px', animation: '1s cubic-bezier(0.16, 1, 0.3, 1) 0s 1 normal both running reveal-up', -MouseX: '281.5px', -MouseY: '-314.5px'}}>

<div className="pointer-events-none absolute -inset-px rounded-none opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)', zIndex: '0'}}></div>
<div className="pointer-events-none absolute -inset-px rounded-none opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)', zIndex: '0', padding: '1px', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude'}}></div>
<div className="relative flex-1 mb-8 flex items-center justify-center">

<div className="w-full max-w-sm border border-white/10 bg-black/40 rounded-lg overflow-hidden backdrop-blur-sm shadow-xl">
<div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5 bg-white/5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
<div className="ml-auto text-[10px] text-white/30 font-mono">activity.log</div>
</div>
<div className="p-4 space-y-3 font-mono text-[11px] leading-relaxed">
<div className="flex gap-2" style={{animation: 'type-loop-1 6s steps(30, end) infinite'}}>
<span className="text-green-500">✓</span>
<span className="text-white/80">Cluster scaling initiated</span>
<span className="text-white/30 ml-auto">12:04:45</span>
</div>
<div className="flex gap-2" style={{animation: 'type-loop-2 6s steps(30, end) infinite'}}>
<span className="text-green-500">✓</span>
<span className="text-white/80">Redis cache cleared</span>
<span className="text-white/30 ml-auto">12:04:42</span>
</div>
<div className="flex gap-2 opacity-60" style={{animation: 'type-loop-3 6s steps(30, end) infinite'}}>
<span className="text-yellow-500 animate-pulse">●</span>
<span className="text-white/80">Optimizing shards...</span>
</div>
</div>
</div>
</div>
<div className="relative z-10 mt-auto">
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Automated Mitigation</h3>
<p className="text-sm text-white/50 font-light leading-relaxed max-w-md">Trigger preventative workflows and route alerts to the right engineers before incidents escalate.</p>
</div>
</div>
</div>
</div>
</section>
<section className="pb-0 relative" style={{minHeight: '2400px'}}>
<div className="shadow-black/30 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-br from-black/10 to-black/0 border-white/5 border mt-12 mb-20 pt-12 pr-8 pb-12 pl-8 shadow-2xl backdrop-blur-sm">

<div className="w-full pb-24">

<div className="max-w-4xl">
<h2 className="lg:text-8xl text-4xl font-medium text-white tracking-tighter mb-8 font-oswald uppercase" style={{animation: 'reveal-up 1s cubic-bezier(0.16, 1, 0.3, 1) both'}}>
            How Yuna <span className="text-white/30">Works.</span>
</h2>
</div>

<div className="delay-100 grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4 w-full" style={{animation: 'reveal-up 1s cubic-bezier(0.16, 1, 0.3, 1) both'}}>

<div className="max-w-4xl">
<p className="text-lg text-white/60 font-light leading-relaxed">
              A unified platform that streamlines the journey from raw data to actionable foresight. Connect your
              sources, train models continuously, and prevent incidents before they occur.
            </p>
</div>

<div className="flex gap-4 lg:justify-end items-center w-full">
<button className="group flex transition-all duration-500 hover:scale-[1.03] active:scale-[0.98] hover:shadow-[-15px_0_40px_-5px_rgba(249,115,22,0.6),15px_0_40px_-5px_rgba(255,255,255,0.4)] text-lg font-semibold text-white h-14 pr-10 pl-10 relative gap-x-2 gap-y-2 items-center justify-center" style="background: linear-gradient(#000, #000) padding-box,
                     linear-gradient(90deg, #f97316 0%, #fbbf24 50%, #ffffff 100%) border-box;
           border: 1.5px solid transparent">
<span className="flex items-center gap-2 leading-none z-10 relative drop-shadow-md">Get Started</span>
</button>
</div>
</div>
</div>

<div className="relative" style={{minHeight: '2400px'}}>

<div className="sticky mb-8 top-32">
<div className="shadow-black/30 sm:pd2e32]/95 border-white/10 border pt-4 pr-4 pb-4 pl-4 shadow-2xl backdrop-blur-sm">
<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 gap-8 gap-x-8 gap-y-8 items-center">
<div className="lg:col-span-2 flex items-center justify-center">
<span className="text-[120px] sm:text-[140px] leading-none font-bold tracking-tighter text-white/5 select-none font-variant-numeric tabular-nums">01</span>
</div>
<div className="lg:col-span-5">
<h3 className="sm:text-3xl text-2xl font-semibold text-white tracking-tight">Connect Your Data</h3>
<p className="sm:text-lg text-base text-slate-300 mt-4" style={{}}>Integrate YUNA with your data warehouse, CRM, and
                  observability tools. It automatically ingests and normalizes historical data.</p>
<div className="mt-6 flex flex-col gap-4">
<div className="inline-flex text-sm text-slate-200 w-full max-w-full border-white/10 border rounded-2xl px-4 py-3 shadow-sm gap-3 items-center" style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px -12px 24px inset, rgba(255, 255, 255, 0.04) 0px 1px 0px inset'}}>
<span className="inline-flex items-center justify-center shrink-0 w-10 h-10 ring-white/10 ring-1 rounded-xl">
<svg className="h-4.5 w-4.5 text-white/90" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</span>
<span className="font-medium tracking-[-0.01em]">Zero-config ingestion pipelines.</span>
</div>
<div className="inline-flex text-sm text-slate-200 w-full max-w-full border-white/10 border rounded-2xl px-4 py-3 shadow-sm gap-3 items-center" style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px -12px 24px inset, rgba(255, 255, 255, 0.04) 0px 1px 0px inset'}}>
<span className="inline-flex items-center justify-center shrink-0 w-10 h-10 ring-white/10 ring-1 rounded-xl">
<svg className="h-4.5 w-4.5 text-white/90" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"></path><path d="M2 6h4"></path><path d="M2 10h4"></path><path d="M2 14h4"></path><path d="M2 18h4"></path><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path></svg>
</span>
<span className="font-medium tracking-[-0.01em]">Auto-schema detection.</span>
</div>
</div>
</div>
<div className="lg:col-span-5 relative">
<style>
                  @keyframes floatBadge {

                    0%,
                    100% {
                      transform: translateY(0px);
                    }

                    50% {
                      transform: translateY(-8px);
                    }
                  }

                  @keyframes slideInFromTop {
                    from {
                      transform: translateY(-20px);
                      opacity: 0;
                    }

                    to {
                      transform: translateY(0);
                      opacity: 1;
                    }
                  }

                  @keyframes slideInFromBottom {
                    from {
                      transform: translateY(20px);
                      opacity: 0;
                    }

                    to {
                      transform: translateY(0);
                      opacity: 1;
                    }
                  }

                  @keyframes pulse {

                    0%,
                    100% {
                      opacity: 1;
                    }

                    50% {
                      opacity: 0.7;
                    }
                  }
                </style>
<div className="relative overflow-hidden border border-white/10 bg-white/[0.03] shadow-lg aspect-[4/3]">
<div 10"="" absolute="" className="bg-gradient-to-br from-white/10 via-white/0 to-white/10 opacity-20 absolute top-0 right-0 bottom-0 left-0" inset-0="" pointer-events-none="" ring-1="" ring-white="" rounded-2xl="" style="background-image: linear-gradient(0deg, rgba(255,255,255,0.06) 1px, rgba(0,0,0,0) 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, rgba(0,0,0,0) 1px); background-size: 48&lt;/div&gt;
                &lt;div class="></div>
<div className="absolute left-8 right-8 top-10" style={{animation: 'slideInFromTop 0.6s ease-out 0.2s both'}}>
<div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md px-5 py-4 shadow-black/30 shadow-lg">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full ring-1 ring-white/15 flex items-center justify-center" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(139,92,246,.35), rgba(99,102,241,.35))', animation: 'pulse 2s ease-in-out infinite'}}>
<span className="text-xs font-medium text-white/90">M</span>
</div>
<span className="text-sm sm:text-base font-medium tracking-[-0.01em] text-slate-200" style={{}}>YUNA</span>
</div>
</div>
</div>
<div className="absolute left-8 right-8 bottom-8" style={{animation: 'slideInFromBottom 0.6s ease-out 0.4s both'}}>
<div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md px-5 py-4 shadow-lg shadow-black/40" style={{animation: 'floatBadge 3s ease-in-out infinite'}}>
<div className="flex items-start justify-between gap-4">
<p className="text-slate-200 text-base sm:text-lg leading-snug" style={{}}>Connection established: Snowflake
                          &amp; Datadog.</p>
<div className="flex items-center gap-2 shrink-0">
<button className="h-flex items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-all hover:bg-white/10 hover:scale-110">
<svg className="text-white/80 h-4.5 w-4.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-all hover:bg-white/10 hover:scale-110">
<svg className="text-white/80 h-4.5 w-4.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</div>
</div>
</div>
</div>
<div className="pointer-events-none absolute -inset-1 rounded-2xl opacity-60 blur-xl" style={{background: 'radial-gradient(60% 60% at 70% 20%, rgba(99,102,241,.18), rgba(217,70,239,0) 70%)'}}>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="sticky mb-8 top-36">
<div className="shadow-black/30 sm:pd2e32]/95 bg-zinc-950 border-white/10 border pt-4 pr-4 pb-4 pl-4 shadow-2xl backdrop-blur-sm">
<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 gap-8 items-center">
<div className="lg:col-span-2 flex items-center justify-center">
<span className="text-[120px] sm:text-[140px] leading-none font-bold tracking-tighter text-white/5 select-none font-variant-numeric tabular-nums">02</span>
</div>
<div className="lg:col-span-5">
<h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">Continuous Learning</h3>
<p className="text-base sm:text-lg text-slate-300 mt-4" style={{}}>YUNA trains custom models on your specific
                  environment, constantly refining its accuracy as new data flows in.</p>
<div className="mt-6 flex flex-col gap-4">
<div className="inline-flex text-sm text-slate-200 w-full max-w-full border-white/10 border rounded-2xl px-4 py-3 shadow-sm gap-3 items-center" style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px -12px 24px inset, rgba(255, 255, 255, 0.04) 0px 1px 0px inset'}}>
<span className="inline-flex items-center justify-center shrink-0 w-10 h-10 rounded-xl ring-white/10 ring-1">
<svg className="h-4.5 w-4.5 text-white/90" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
</span>
<span className="font-medium tracking-[-0.01em]">Real-time model retraining.</span>
</div>
<div className="inline-flex text-sm text-slate-200 w-full max-w-full border-white/10 border rounded-2xl px-4 py-3 shadow-sm gap-3 items-center" style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px -12px 24px inset, rgba(255, 255, 255, 0.04) 0px 1px 0px inset'}}>
<span className="inline-flex items-center justify-center shrink-0 w-10 h-10 ring-white/10 ring-1 rounded-xl">
<svg className="h-4.5 w-4.5 text-white/90" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
</span>
<span className="font-medium tracking-[-0.01em]">Anomaly detection at scale.</span>
</div>
</div>
</div>
<div className="lg:col-span-5 relative" style={{}}>
<style>
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes progressGrow {
      from { width: 0%; }
      to { width: 65%; }
    }
    @keyframes scaleIn {
      from { transform: scale(0.8); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
  </style>
<div className="overflow-hidden aspect-[4/3] border-white/10 border relative shadow-lg">
<div className="opacity-20 absolute inset-0" style="background-image: linear-gradient(0deg, rgba(255,255,255,0.06) 1px, rgba(0,0,0,0) 1px), 
      linear-gradient(90deg, rgba(255,255,255,0.06) 1px, rgba(0,0,0,0) 1px);
      background-size: 48px 48px">
</div>

<div className="pointer-events-none absolute inset-0 ring-1 ring-white/10"></div>
<div className="absolute inset-8 flex items-center justify-center">
<div className="border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-md px-8 py-12 shadow-black/30 shadow-lg w-full" style={{animation: 'scaleIn 0.5s ease-out'}}>
<div className="flex flex-col items-center gap-6">
<div className="relative">

<div className="flex animate-pulse w-16 h-16 ring-white/20 ring-2 items-center justify-center" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(139,92,246,.5), rgba(99,102,241,.5))'}}>
<svg className="text-white" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{animation: 'spin 2s linear infinite'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 2v4"></path>
<path d="m16.2 7.8 2.9-2.9"></path>
<path d="M18 12h4"></path>
<path d="m16.2 16.2 2.9 2.9"></path>
<path d="M12 18v4"></path>
<path d="m4.9 19.1 2.9-2.9"></path>
<path d="M2 12h4"></path>
<path d="m4.9 4.9 2.9 2.9"></path>
</svg>
</div>
</div>
<div className="text-center">
<p className="text-white/90 text-lg font-medium">Training Model...</p>
<p className="text-slate-300 text-sm mt-2" style={{}}>Processing 50M events</p>
</div>

<div className="w-full bg-white/10 h-2 overflow-hidden">
<div className="bg-gradient-to-br from-amber-400 to-amber-600 h-full" style={{width: '65%', animation: '2s ease-out 0s 1 normal none running progressGrow'}}></div>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute -inset-1 opacity-60 blur-xl" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(139,92,246,.22), rgba(217,70,239,0) 70%)'}}>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="sticky top-40">
<div className="shadow-black/30 sm:pd2e32]/95 bg-zinc-950 border-white/10 border pt-4 pr-4 pb-4 pl-4 shadow-2xl backdrop-blur-sm">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
<div className="lg:col-span-2 flex items-center justify-center order-1 lg:order-1">
<span className="text-[120px] sm:text-[180px] leading-none font-semibold tracking-tight text-white/5 select-none">3</span>
</div>
<div className="lg:col-span-5 order-2 lg:order-2">
<h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white tracking-tight">Predict &amp;
                  Prevent</h3>
<p className="text-sm sm:text-base lg:text-lg text-slate-300 mt-3 sm:mt-4" style={{}}>View forecasts on dashboards or
                  trigger webhooks to automate preventative actions. One-click integrations make execution seamless.</p>
<div className="mt-4 sm:mt-6 flex flex-col gap-3 sm:gap-4">
<div className="inline-flex text-xs sm:text-sm text-slate-200 w-full border-white/10 border rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 shadow-sm gap-2 sm:gap-3 items-center" style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px -12px 24px inset, rgba(255, 255, 255, 0.04) 0px 1px 0px inset'}}>
<span className="inline-flex items-center justify-center shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-xl ring-white/10 ring-1">
<svg className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-white/90" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</span>
<span className="font-medium tracking-[-0.01em]">95%+ Prediction Accuracy.</span>
</div>
<div className="inline-flex text-xs sm:text-sm text-slate-200 w-full border-white/10 border rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 shadow-sm gap-2 sm:gap-3 items-center" style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px -12px 24px inset, rgba(255, 255, 255, 0.04) 0px 1px 0px inset'}}>
<span className="inline-flex items-center justify-center shrink-0 w-8 h-8 sm:w-10 sm:h-10 ring-white/10 ring-1 rounded-xl">
<svg className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-white/90" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
</span>
<span className="font-medium tracking-[-0.01em]">Integrates with PagerDuty &amp; Slack.</span>
</div>
</div>
</div>
<div className="lg:col-span-5 relative order-3 lg:order-3">
<style className="">
                  @keyframes slideUp {
                    from {
                      transform: 0;
                    }

                    to {
                      transform: translateY(0);
                      opacity: 1;
                    }
                  }

                  @keyframes shimmer {
                    0% {
                      opacity: 0.6;
                    }

                    50% {
                      opacity: 1;
                    }

                    100% {
                      opacity: 0.6;
                    }
                  }

                  @keyframes fadeIn {
                    from {
                      opacity: 0;
                    }

                    to {
                      opacity: 1;
                    }
                  }
                </style>
<div className="overflow-hidden aspect-[4/3] border-white/10 border relative shadow-lg">
<div className="opacity-20 absolute top-0 right-0 bottom-0 left-0" style="background-image: linear-gradient(0deg, rgba(255,255,255,0.06) 1px, rgba(0,0,0,0) 1px),
    linear-gradient(90deg, rgba(255,255,255,0.06) 1px, rgba(0,0,0,0) 1px);
    background-size: 48px 48px">
</div>

<div className="pointer-events-none absolute inset-0 ring-1 ring-white/10"></div>
<div className="absolute inset-4 sm:inset-8">
<div className="border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-md p-3 sm:p-6 shadow-black/30 shadow-lg h-full flex flex-col" style={{animation: 'slideUp 0.6s ease-out'}}>
<div className="flex items-center justify-between mb-3 sm:mb-4" style={{animation: 'fadeIn 0.5s ease-out 0.2s both'}}>
<span className="text-white/90 font-medium text-xs sm:text-sm">Prediction Alert</span>

<div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 border bg-orange-500/20 border-orange-500/30" style={{animation: '0.5s ease-out 0.4s 1 normal both running fadeIn'}}>

<div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400" style={{animation: '2s ease-in-out 0s infinite normal none running pulse'}}></div>
<span className="text-[10px] sm:text-xs text-orange-300" style={{}}>Actionable</span>
</div>
</div>

<div className="flex-1 bg-black/20 p-2.5 sm:p-4 mb-3 sm:mb-4 overflow-hidden" style={{animation: 'fadeIn 0.5s ease-out 0.3s both'}}>
<div className="space-y-1.5 sm:space-y-2">

<div className="h-2 sm:h-3 bg-white/20 w-full" style={{animation: 'shimmer 2s ease-in-out infinite'}}></div>
<div className="h-2 sm:h-3 bg-white/20 w-5/6" style={{animation: 'shimmer 2s ease-in-out infinite 0.2s'}}></div>
<p className="text-xs text-white/80 leading-relaxed">
            High probability of server failure in region us-west-2 (92%). Auto-scaling initiated.
          </p>
<div className="h-2 sm:h-3 bg-white/20 w-full" style={{animation: 'shimmer 2s ease-in-out infinite 0.6s'}}></div>
<div className="h-2 sm:h-3 bg-white/20 w-3/4" style={{animation: 'shimmer 2s ease-in-out infinite 0.8s'}}></div>
</div>
</div>
<div className="flex gap-1.5 sm:gap-2" style={{animation: 'slideUp 0.5s ease-out 0.5s both'}}>

<button className="flex-1 inline-flex gap-1.5 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 text-xs font-medium text-white bg-gradient-to-br from-orange-400 to-orange-600 px-2.5 py-1.5 gap-x-1.5 gap-y-1.5 items-center justify-center">
<svg className="h-3 w-3 sm:h-4 sm:w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect>
<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
</svg>
          Copy
        </button>

<button className="flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 bg-white/10 text-white text-xs sm:text-sm font-medium border border-white/10 transition-all hover:bg-white/15 hover:scale-105">
<svg className="h-3 w-3 sm:h-4 sm:w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="17 8 12 3 7 8"></polyline>
<line x1="12" x2="12" y1="3" y2="15"></line>
</svg>
          Share
        </button>
</div>
</div>
</div>

<div className="pointer-events-none absolute -inset-1 opacity-60 blur-xl" style={{background: 'radial-gradient(60% 60% at 30% 80%, rgba(34,197,94,.18), rgba(16,185,129,0) 70%)'}}>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative">
<div className="shadow-black/30 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-br from-black/10 to-black/0 border-white/5 border mt-12 mb-20 pt-12 pr-8 pl-8 shadow-2xl backdrop-blur-sm">

<div className="w-full mb-24">

<div className="max-w-4xl">
<h2 className="lg:text-8xl text-4xl font-medium text-white tracking-tighter mb-6 scroll-animate font-oswald uppercase" data-delay="0s" style={{animation: '1s cubic-bezier(0.16, 1, 0.3, 1) 0s 1 normal both running fadeSlideBlurIn'}}>
            What People <span className="text-white/30">Are Saying.</span>
</h2>
</div>

<div className="delay-100 grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4 w-full" style={{animation: 'reveal-up 1s cubic-bezier(0.16, 1, 0.3, 1) both'}}>

<div className="max-w-4xl">
<p className="text-lg text-white/60 font-light leading-relaxed scroll-animate" data-delay="0.1s" style={{animation: '1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s 1 normal both running fadeSlideBlurIn'}}>
              Real feedback from designers and teams who use YUNA every day.
              Discover how our predictive intelligence tools transformed their workflow.
            </p>
</div>

<div className="flex gap-4 lg:justify-end w-full gap-x-4 gap-y-4 items-center">
<button className="group flex transition-all duration-500 hover:scale-[1.03] active:scale-[0.98] hover:shadow-[-15px_0_40px_-5px_rgba(249,115,22,0.6),15px_0_40px_-5px_rgba(255,255,255,0.4)] text-lg font-semibold text-white h-14 pr-10 pl-10 relative gap-x-2 gap-y-2 items-center justify-center scroll-animate" data-delay="0.2s" style={{background: 'linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0)) padding-box padding-box, linear-gradient(90deg, rgb(249, 115, 22) 0%, rgb(251, 191, 36) 50%, rgb(255, 255, 255) 100%) border-box border-box', border: '1.5px solid transparent', animation: '1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s 1 normal both running fadeSlideBlurIn'}}>
<span className="flex items-center gap-2 leading-none z-10 relative drop-shadow-md">View More</span>
</button>
</div>
</div>
</div>

<section className="overflow-hidden scroll-animate pt-0 pb-0 relative" data-delay="0.3s" style={{animation: '1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s 1 normal both running fadeSlideBlurIn'}}>
<style className="">
    @import url('https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap');
    .font-signature {
      font-family: 'Nothing You Could Do', cursive;
    }
    .scrollbar-hide::-webkit-scrollbar {
        display: none;
    }
    .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
  </style>

<div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
</div>

<div className="w-full overflow-hidden relative pb-12" style={{maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>
<style>
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      animation: marquee 80s linear infinite;
    }
  </style>
<div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-max gap-x-6 gap-y-6">

<div className="shrink-0 w-[340px] md:w-[380px] h-[520px] rounded-none bg-zinc-900 relative group overflow-hidden border border-white/5 cursor-pointer" onmousemove="const rect=this.getBoundingClientRect();this.style.setProperty('--mouse-x',(event.clientX-rect.left)+'px');this.style.setProperty('--mouse-y',(event.clientY-rect.top)+'px');" style={{-MouseX: '140.5px', -MouseY: '5px'}}>
<div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)', zIndex: '10'}}></div>
<div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)', zIndex: '10', padding: '1px', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude'}}></div>
<img alt="Patrick Nawrocki" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-all duration-500 group-hover:bg-black/80 z-0">
</div>
<div className="absolute inset-0 p-10 flex flex-col justify-between z-20">
<div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 delay-75">
<div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/20 mb-6 backdrop-blur-md">
<img alt="Patrick Nawrocki" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<p className="text-[17px] leading-relaxed text-zinc-100 font-light drop-shadow-md">
            "The lovely team at DesignMe has provided our startup with significant leverage. Their work is exceptionally
            professional, and Adrian is always attentive to our needs."
          </p>
</div>
<div className="z-20 transform transition-transform duration-500 group-hover:translate-y-0">
<div className="font-signature text-white text-4xl mb-2 opacity-90 drop-shadow-md">Patrick Nawrocki</div>
<div className="text-xs font-medium tracking-wide text-zinc-300 uppercase drop-shadow-md">UX Manager at Superhabits
          </div>
</div>
</div>
</div>

<div className="shrink-0 w-[340px] md:w-[380px] h-[520px] rounded-none bg-zinc-900 relative group overflow-hidden border border-white/5 cursor-pointer" onmousemove="const rect=this.getBoundingClientRect();this.style.setProperty('--mouse-x',(event.clientX-rect.left)+'px');this.style.setProperty('--mouse-y',(event.clientY-rect.top)+'px');" style={{-MouseX: '348.5px', -MouseY: '37.5px'}}>
<div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)', zIndex: '10'}}></div>
<div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)', zIndex: '10', padding: '1px', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude'}}></div>
<img alt="Pri Patel" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-all duration-500 group-hover:bg-black/80 z-0"></div>
<div className="flex flex-col pt-10 pr-10 pb-10 pl-10 absolute top-0 right-0 bottom-0 left-0 justify-between z-20">
<div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 delay-75">
<div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/20 mb-6 backdrop-blur-md">
<img alt="Pri Patel" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<p className="text-[17px] leading-relaxed text-zinc-100 font-light drop-shadow-md">
            "YUNA has completely transformed our workflow. The predictive insights are spot-on and have saved us countless hours of manual analysis and guesswork."
          </p>
</div>
<div className="z-20 transform transition-transform duration-500 group-hover:translate-y-0">
<div className="font-signature text-white text-4xl mb-2 opacity-90 drop-shadow-md">Pri Patel</div>
<div className="text-xs font-medium tracking-wide text-zinc-300 uppercase drop-shadow-md">Product Designer at Lightdash</div>
</div>
</div>
</div>

<div className="shrink-0 md:w-[380px] group overflow-hidden cursor-pointer bg-zinc-900 w-[340px] h-[520px] border-white/5 border rounded-none relative" onmousemove="const rect=this.getBoundingClientRect();this.style.setProperty('--mouse-x',(event.clientX-rect.left)+'px');this.style.setProperty('--mouse-y',(event.clientY-rect.top)+'px');" style={{-MouseX: '28.5px', -MouseY: '5.5px'}}>
<div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)', zIndex: '10'}}></div>
<div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)', zIndex: '10', padding: '1px', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude'}}></div>
<img alt="Rob West" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-all duration-500 group-hover:bg-black/80 z-0">
</div>
<div className="flex flex-col pt-10 pr-10 pb-10 pl-10 absolute top-0 right-0 bottom-0 left-0 justify-between z-20">
<div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 delay-75">
<div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/20 mb-6 backdrop-blur-md">
<img alt="Rob West" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<p className="text-[17px] leading-relaxed text-zinc-100 font-light drop-shadow-md">
            "DesignMe has greatly exceeded our expectations. The communication is always excellent, the turnaround is
            extremely quick, and the designs are fresh."
          </p>
</div>
<div className="z-20 transform transition-transform duration-500 group-hover:translate-y-0">
<div className="font-signature text-white text-4xl mb-2 opacity-90 drop-shadow-md">Rob West</div>
<div className="text-xs font-medium tracking-wide text-zinc-300 uppercase drop-shadow-md">CEO of Kingdom Advisors
          </div>
</div>
</div>
</div>

<div className="shrink-0 w-[340px] md:w-[380px] h-[520px] rounded-none bg-zinc-900 relative group overflow-hidden border border-white/5 cursor-pointer" onmousemove="const rect=this.getBoundingClientRect();this.style.setProperty('--mouse-x',(event.clientX-rect.left)+'px');this.style.setProperty('--mouse-y',(event.clientY-rect.top)+'px');">
<div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)', zIndex: '10'}}></div>
<div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)', zIndex: '10', padding: '1px', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude'}}></div>
<img alt="Dom Tyler" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-all duration-500 group-hover:bg-black/80 z-0"></div>
<div className="flex flex-col pt-10 pr-10 pb-10 pl-10 absolute top-0 right-0 bottom-0 left-0 justify-between z-20">
<div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 delay-75">
<div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/20 mb-6 backdrop-blur-md">
<img alt="Dom Tyler" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<p className="text-[17px] leading-relaxed text-zinc-100 font-light drop-shadow-md">
            "The lovely team at DesignMe provided our startup with significant leverage. Their work is exceptionally professional, and they always take the time to understand us."
          </p>
</div>
<div className="z-20 transform transition-transform duration-500 group-hover:translate-y-0">
<div className="font-signature text-white text-4xl mb-2 opacity-90 drop-shadow-md">Dom Tyler</div>
<div className="text-xs font-medium tracking-wide text-zinc-300 uppercase drop-shadow-md">CEO of Kin</div>
</div>
</div>
</div>


<div className="shrink-0 w-[340px] md:w-[380px] h-[520px] rounded-none bg-zinc-900 relative group overflow-hidden border border-white/5 cursor-pointer" onmousemove="const rect=this.getBoundingClientRect();this.style.setProperty('--mouse-x',(event.clientX-rect.left)+'px');this.style.setProperty('--mouse-y',(event.clientY-rect.top)+'px');">
<div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)', zIndex: '10'}}></div>
<div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)', zIndex: '10', padding: '1px', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude'}}></div>
<img alt="Patrick Nawrocki" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-all duration-500 group-hover:bg-black/80 z-0"></div>
<div className="absolute inset-0 p-10 flex flex-col justify-between z-20">
<div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 delay-75">
<div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/20 mb-6 backdrop-blur-md">
<img alt="Patrick Nawrocki" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<p className="text-[17px] leading-relaxed text-zinc-100 font-light drop-shadow-md">
            "The lovely team at DesignMe has provided our startup with significant leverage. Their work is exceptionally professional, and Adrian is always attentive to our needs."
          </p>
</div>
<div className="z-20 transform transition-transform duration-500 group-hover:translate-y-0">
<div className="font-signature text-white text-4xl mb-2 opacity-90 drop-shadow-md">Patrick Nawrocki</div>
<div className="text-xs font-medium tracking-wide text-zinc-300 uppercase drop-shadow-md">UX Manager at Superhabits</div>
</div>
</div>
</div>

<div className="shrink-0 w-[340px] md:w-[380px] h-[520px] rounded-none bg-zinc-900 relative group overflow-hidden border border-white/5 cursor-pointer" onmousemove="const rect=this.getBoundingClientRect();this.style.setProperty('--mouse-x',(event.clientX-rect.left)+'px');this.style.setProperty('--mouse-y',(event.clientY-rect.top)+'px');">
<div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)', zIndex: '10'}}></div>
<div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)', zIndex: '10', padding: '1px', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude'}}></div>
<img alt="Pri Patel" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-all duration-500 group-hover:bg-black/80 z-0"></div>
<div className="absolute inset-0 p-10 flex flex-col justify-between z-20">
<div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 delay-75">
<div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/20 mb-6 backdrop-blur-md">
<img alt="Pri Patel" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<p className="text-[17px] leading-relaxed text-zinc-100 font-light drop-shadow-md">
            "YUNA has completely transformed our workflow. The predictive insights are spot-on and have saved us countless hours of manual analysis and guesswork."
          </p>
</div>
<div className="z-20 transform transition-transform duration-500 group-hover:translate-y-0">
<div className="font-signature text-white text-4xl mb-2 opacity-90 drop-shadow-md">Pri Patel</div>
<div className="text-xs font-medium tracking-wide text-zinc-300 uppercase drop-shadow-md">Product Designer at Lightdash</div>
</div>
</div>
</div>

<div className="shrink-0 w-[340px] md:w-[380px] h-[520px] rounded-none bg-zinc-900 relative group overflow-hidden border border-white/5 cursor-pointer" onmousemove="const rect=this.getBoundingClientRect();this.style.setProperty('--mouse-x',(event.clientX-rect.left)+'px');this.style.setProperty('--mouse-y',(event.clientY-rect.top)+'px');">
<div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)', zIndex: '10'}}></div>
<div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)', zIndex: '10', padding: '1px', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude'}}></div>
<img alt="Rob West" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-all duration-500 group-hover:bg-black/80 z-0"></div>
<div className="absolute inset-0 p-10 flex flex-col justify-between z-20">
<div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 delay-75">
<div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/20 mb-6 backdrop-blur-md">
<img alt="Rob West" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<p className="text-[17px] leading-relaxed text-zinc-100 font-light drop-shadow-md">
            "DesignMe has greatly exceeded our expectations. The communication is always excellent, the turnaround is extremely quick, and the designs are fresh."
          </p>
</div>
<div className="z-20 transform transition-transform duration-500 group-hover:translate-y-0">
<div className="font-signature text-white text-4xl mb-2 opacity-90 drop-shadow-md">Rob West</div>
<div className="text-xs font-medium tracking-wide text-zinc-300 uppercase drop-shadow-md">CEO of Kingdom Advisors</div>
</div>
</div>
</div>

<div className="shrink-0 w-[340px] md:w-[380px] h-[520px] rounded-none bg-zinc-900 relative group overflow-hidden border border-white/5 cursor-pointer" onmousemove="const rect=this.getBoundingClientRect();this.style.setProperty('--mouse-x',(event.clientX-rect.left)+'px');this.style.setProperty('--mouse-y',(event.clientY-rect.top)+'px');">
<div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)', zIndex: '10'}}></div>
<div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)', zIndex: '10', padding: '1px', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude'}}></div>
<img alt="Dom Tyler" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-all duration-500 group-hover:bg-black/80 z-0"></div>
<div className="absolute inset-0 p-10 flex flex-col justify-between z-20">
<div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 delay-75">
<div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/20 mb-6 backdrop-blur-md">
<img alt="Dom Tyler" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<p className="text-[17px] leading-relaxed text-zinc-100 font-light drop-shadow-md">
            "The lovely team at DesignMe provided our startup with significant leverage. Their work is exceptionally professional, and they always take the time to understand us."
          </p>
</div>
<div className="z-20 transform transition-transform duration-500 group-hover:translate-y-0">
<div className="font-signature text-white text-4xl mb-2 opacity-90 drop-shadow-md">Dom Tyler</div>
<div className="text-xs font-medium tracking-wide text-zinc-300 uppercase drop-shadow-md">CEO of Kin</div>
</div>
</div>
</div></div>
</div>
</section>
</div><div className="shadow-black/30 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-br from-black/10 to-black/0 border-white/5 border mt-12 mb-20 pt-12 pr-8 pl-8 shadow-2xl backdrop-blur-sm">


<div className="w-full mb-16">
<div className="max-w-4xl">
<h2 className="lg:text-8xl text-4xl font-medium text-white tracking-tighter mb-6 scroll-animate font-oswald uppercase" style={{animation: 'fadeSlideBlurIn 1s cubic-bezier(0.16, 1, 0.3, 1) both'}}>
        Predictable <span className="text-white/30">Pricing.</span>
</h2>
</div>
<div className="max-w-4xl">
<p className="text-lg text-white/60 font-light leading-relaxed scroll-animate" data-delay="0.1s" style={{animation: '1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s 1 normal both running fadeSlideBlurIn'}}>
        Scale your predictive intelligence capabilities with infrastructure designed for real-time inference.
        No hidden latency fees, just pure compute power.
      </p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 scroll-animate w-full mb-12 gap-x-6 gap-y-6" data-delay="0.2s" style={{animation: '1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s 1 normal both running fadeSlideBlurIn'}}>

<div className="group flex flex-col overflow-hidden transition-all duration-300 hover:bg-zinc-900/80 z-10 bg-zinc-900/50 h-full border-white/5 border rounded-none relative" onmousemove="const rect=this.getBoundingClientRect(),x=event.clientX-rect.left,y=event.clientY-rect.top;this.style.setProperty('--mouse-x', x + 'px');this.style.setProperty('--mouse-y', y + 'px');" style={{-MouseX: '343px', -MouseY: '366px'}}>

<div className="-inset-px transition-opacity duration-300 group-hover:opacity-100 z-10 opacity-0 rounded-none absolute" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.04), transparent 40%)', zIndex: '0'}}>
</div>
<div className="-inset-px transition-opacity duration-300 group-hover:opacity-100 opacity-0 z-10 rounded-none absolute" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.3), transparent 40%)', zIndex: '0', padding: '1px', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude', WebkitMaskComposite: 'xor'}}>
</div>
<div className="flex flex-col z-10 h-full pt-8 pr-8 pb-8 pl-8 relative">
<h3 className="text-3xl font-medium text-white tracking-tight mb-4">Starter</h3>
<p className="text-white/60 font-light mb-8 h-12 text-sm leading-relaxed">For startups deploying their first
          real-time models into production.</p>

<div className="flex items-center gap-1 bg-white/5 w-max p-1 rounded-lg mb-8 border border-white/5">
<button className="billing-toggle-monthly px-4 py-1.5 text-xs font-medium bg-zinc-800 text-white shadow-sm border border-white/5 hover:bg-zinc-700 transition-colors rounded-md" onclick="updateBilling('monthly')">Monthly</button>
<button className="billing-toggle-quarterly px-4 py-1.5 text-xs font-medium text-white/40 hover:text-white transition-colors rounded-md" onclick="updateBilling('quarterly')">Quarterly</button>
</div>
<div className="mb-2 flex items-baseline gap-2">
<span className="text-5xl font-medium text-white tracking-tight" id="price-starter">$49</span>
<span className="text-white/40 font-light">/ month</span>
</div>
<p className="billing-period-label text-sm text-white/40 mb-8 font-light">Billed monthly.</p>
<button className="hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all flex font-medium text-white w-full border-white/10 border rounded-none mb-10 pt-3 pr-4 pb-3 pl-4 gap-x-2 gap-y-2 items-center justify-center">
          Start Building
          <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<div className="border-t border-white/5 pt-8 mt-auto">
<p className="text-white/90 font-medium mb-6">Core features.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-white/70 font-light">
<svg className="lucide lucide-check text-white/40 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="">10M predictions / mo</span>
</li>
<li className="flex items-center gap-3 text-sm text-white/70 font-light">
<svg className="lucide lucide-check text-white/40 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="">&lt; 100ms inference latency</span>
</li>
<li className="flex items-center gap-3 text-sm text-white/70 font-light">
<svg className="lucide lucide-check text-white/40 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span>Daily model retraining</span>
</li>
<li className="flex items-center gap-3 text-sm text-white/70 font-light">
<svg className="lucide lucide-check text-white/40 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="">30-day data retention</span>
</li>
</ul>
</div>
</div>
</div>

<div className="group flex flex-col overflow-hidden transition-all duration-300 hover:bg-zinc-900/80 z-10 bg-zinc-900 h-full border-white/10 border rounded-none relative shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]" onmousemove="const rect=this.getBoundingClientRect(),x=event.clientX-rect.left,y=event.clientY-rect.top;this.style.setProperty('--mouse-x', x + 'px');this.style.setProperty('--mouse-y', y + 'px');" style={{-MouseX: '316.671875px', -MouseY: '482px'}}>

<div className="pointer-events-none -inset-px transition-opacity duration-300 group-hover:opacity-100 opacity-0 rounded-none absolute" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.04), transparent 40%)', zIndex: '0'}}>
</div>
<div className="pointer-events-none -inset-px transition-opacity duration-300 group-hover:opacity-100 opacity-0 rounded-none absolute" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.3), transparent 40%)', zIndex: '0', padding: '1px', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude', WebkitMaskComposite: 'xor'}}>
</div>
<div className="bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-[1px] z-10 absolute top-0 left-0">
</div>
<div className="flex flex-col z-10 h-full pt-8 pr-8 pb-8 pl-8 relative">
<div className="flex mb-4 items-center justify-between">
<h3 className="text-3xl font-medium text-white tracking-tight">Growth</h3>
<span className="px-2 py-0.5 bg-white text-black text-[10px] font-bold uppercase tracking-wide rounded-sm">Popular</span>
</div>
<p className="text-white/60 font-light mb-8 h-12 text-sm leading-relaxed">For high-velocity data teams needing
          low-latency continuous learning.</p>

<div className="flex items-center gap-1 bg-white/5 w-max p-1 rounded-lg mb-8 border border-white/5">
<button className="billing-toggle-monthly px-4 py-1.5 text-xs font-medium bg-zinc-800 text-white shadow-sm border border-white/5 hover:bg-zinc-700 transition-colors rounded-md" onclick="updateBilling('monthly')">Monthly</button>
<button className="billing-toggle-quarterly px-4 py-1.5 text-xs font-medium text-white/40 hover:text-white transition-colors rounded-md" onclick="updateBilling('quarterly')">Quarterly</button>
</div>
<div className="mb-2 flex items-baseline gap-2">
<span className="text-5xl font-medium text-white tracking-tight" id="price-growth">$149</span>
<span className="text-white/40 font-light">/ month</span>
</div>
<p className="billing-period-label text-sm text-white/40 mb-8 font-light">Billed monthly.</p>
<button className="hover:bg-orange-500 hover:text-white transition-all flex font-semibold text-black bg-white w-full rounded-none mb-10 pt-3 pr-4 pb-3 pl-4 shadow-[0_0_20px_rgba(255,255,255,0.1)] gap-x-2 gap-y-2 items-center justify-center">
          Start Scaling
          <svg className="lucide lucide-zap" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</button>
<div className="border-t border-white/5 pt-8 mt-auto">
<p className="text-white/90 font-medium mb-6">Everything in Growth, plus:</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-white/70 font-light">
<svg className="lucide lucide-check text-white/40 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="">100M predictions / mo</span>
</li>
<li className="flex items-center gap-3 text-sm text-white/70 font-light">
<svg className="lucide lucide-check text-white/40 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="">&lt; 20ms inference latency</span>
</li>
<li className="flex items-center gap-3 text-sm text-white/70 font-light">
<svg className="lucide lucide-check text-white/40 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="">Continuous online learning</span>
</li>
<li className="flex items-center gap-3 text-sm text-white/70 font-light">
<svg className="lucide lucide-check text-white/40 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="">Dedicated solutions engineer</span>
</li>
</ul>
</div>
</div>
</div>

<div className="flex flex-col gap-6 h-full gap-x-6 gap-y-6">

<div className="group flex flex-col hover:border-white/10 transition-colors duration-300 flex-1 overflow-hidden hover:bg-zinc-900/80 bg-zinc-900/50 border-white/5 border rounded-none pt-8 pr-8 pb-8 pl-8 relative gap-x-6 gap-y-6" onmousemove="const rect=this.getBoundingClientRect(),x=event.clientX-rect.left,y=event.clientY-rect.top;this.style.setProperty('--mouse-x', x + 'px');this.style.setProperty('--mouse-y', y + 'px');" style={{-MouseX: '105.3359375px', -MouseY: '384px'}}>

<div className="pointer-events-none -inset-px transition-opacity duration-300 group-hover:opacity-100 opacity-0 rounded-none absolute gap-x-6 gap-y-6" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.04), transparent 40%)', zIndex: '0'}}>
</div>
<div className="-inset-px transition-opacity duration-300 group-hover:opacity-100 opacity-0 rounded-none absolute gap-x-6 gap-y-6" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.3), transparent 40%)', zIndex: '0', padding: '1px', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude', WebkitMaskComposite: 'xor'}}>
</div>
<div className="relative z-10 flex flex-col h-full">
<h3 className="text-3xl font-medium text-white mb-4 tracking-tight">Enterprise</h3>
<p className="text-white/60 font-light mb-8 text-sm leading-relaxed">For mission-critical workloads requiring
            dedicated clusters and SLAs.</p>
<div className="mt-auto">
<p className="text-sm text-white/40 font-light mb-1">Custom volume</p>
<div className="mb-8">
<span className="text-4xl font-medium text-white tracking-tight">Custom</span>
</div>
<button className="hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all flex group-hover:border-white/20 font-medium text-white w-full border-white/10 border rounded-none pt-3 pr-4 pb-3 pl-4 gap-x-2 gap-y-2 items-center justify-center">
              Contact Sales 
              <svg className="lucide lucide-building-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
</button>
</div>
</div>
</div>

<div className="group flex flex-col overflow-hidden transition-all duration-300 hover:bg-zinc-900/80 bg-zinc-900/50 border-white/5 border rounded-none pt-6 pr-6 pb-6 pl-6 relative" onmousemove="const rect=this.getBoundingClientRect(),x=event.clientX-rect.left,y=event.clientY-rect.top;this.style.setProperty('--mouse-x', x + 'px');this.style.setProperty('--mouse-y', y + 'px');" style={{-MouseX: '34.3359375px', -MouseY: '147.5px'}}>

<div className="pointer-events-none -inset-px transition-opacity duration-300 group-hover:opacity-100 opacity-0 rounded-none absolute" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.04), transparent 40%)', zIndex: '0'}}>
</div>
<div className="pointer-events-none -inset-px transition-opacity duration-300 group-hover:opacity-100 opacity-0 rounded-none absolute" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.3), transparent 40%)', zIndex: '0', padding: '1px', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude', WebkitMaskComposite: 'xor'}}>
</div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded overflow-hidden">
<img alt="Sarah" className="opacity-80 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="">
<p className="text-sm font-medium text-white">Jasmin Ly</p>
<p className="text-white/40 text-xs">Head of Solutions</p>
</div>
</div>
<p className="text-white/60 text-sm font-light mb-6 leading-relaxed">
            Not sure which plan fits your event volume? I can help audit your data pipeline.
          </p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs text-white/60">Online now</span>
</div>
<button className="px-3 py-2 bg-white text-black text-xs font-semibold hover:bg-orange-500 hover:text-white transition-colors flex items-center gap-2 rounded-md">
              Book Demo
              <svg className="lucide lucide-calendar" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="pb-10">
<div className="sm:px-6 lg:px-8 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mr-auto ml-auto pr-4 pl-4">

<div className="overflow-hidden sm:p-10 sm:mb-10 bg-center bg-white/5 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0bcb241d-7f62-4899-8da0-434927914200_1600w.webp)] bg-cover rounded-none mb-10 pt-6 pr-6 pb-6 pl-6 relative backdrop-blur-sm" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '0'}}>
<div className="pointer-events-none absolute inset-0 opacity-70" style={{background: 'radial-gradient(120% 80% at 10% 10%, rgba(99,102,241,0.25) 0%, rgba(99,102,241,0.08) 35%, rgba(217,70,239,0.12) 60%, rgba(10,11,16,0) 85%)'}}></div>
<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-10 relative">
<div className="">
<h3 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">Stop Reacting. <br/> Start Predicting.</h3>
</div>
<div className="flex flex-col items-start md:items-end gap-4">
<p className="text-sm sm:text-base text-white/80 max-w-md md:text-right">© 2025 YUNA Inc. All rights reserved.</p>
<a className="inline-flex items-center gap-2 shadow-orange-500/30 text-sm font-medium text-white bg-gradient-to-br from-orange-400 to-orange-600 px-5 py-2.5 shadow-lg" href="#">
            Get Started for Free
            <svg className="lucide lucide-arrow-right h-4.5 w-4.5" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>

<div className="sm:p-10 bg-gradient-to-br from-black/10 to-black/0 border-white/10 border pt-6 pr-6 pb-6 pl-6 backdrop-blur-sm">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="md:col-span-2">
<h4 className="text-white text-xl sm:text-2xl font-semibold tracking-tight">Join Our Newsletter</h4>
<div className="mt-4 relative">
<label className="sr-only" htmlFor="footer-email">Email</label>
<input className="w-full bg-white/5 ring-1 ring-white/10 px-4 pr-12 py-3 text-sm text-white/90 placeholder-white/40 outline-none focus:ring-2 rounded-none focus:ring-orange-400/40" id="footer-email" placeholder="Enter your email" style={{}} type="email"/>
<button aria-label="Subscribe" className="absolute right-1 top-1 bottom-1 inline-flex items-center justify-center rounded-lg px-3 bg-white/10 ring-1 ring-white/15 text-white/90 hover:bg-white/15 transition">
<svg className="lucide lucide-arrow-right h-4.5 w-4.5" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<p className="text-xs text-white/60 mt-3">
        We’ll send weekly product updates and tips. No spam.
      </p>
</div>

<div className="">
<h5 className="text-white text-lg font-semibold tracking-tight mb-3">Pages</h5>
<ul className="space-y-2 text-sm text-white/80">
<li className=""><a className="hover:text-white/90" href="#">Home</a></li>
<li className=""><a className="hover:text-white/90" href="#">About us</a></li>
<li className=""><a className="hover:text-white/90" href="#">Blog</a></li>
<li className=""><a className="hover:text-white/90" href="#">Features</a></li>
</ul>
</div>

<div className="">
<h5 className="text-white text-lg font-semibold tracking-tight mb-3">Resources</h5>
<ul className="space-y-2 text-sm text-white/80">
<li className=""><a className="group inline-flex items-center gap-1 hover:text-white/90" href="#">Integrations <svg className="lucide lucide-arrow-right lucide-arrow-up-right h-3.5 w-3.5 opacity-70 group-hover:opacity-100" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a></li>
<li><a className="group inline-flex items-center gap-1 hover:text-white/90" href="#">Changelog <svg className="lucide lucide-arrow-up-right h-3.5 w-3.5 opacity-70 group-hover:opacity-100" data-lucide="arrow-up-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></li>
<li><a className="group inline-flex items-center gap-1 hover:text-white/90" href="#">Careers <svg className="lucide lucide-arrow-up-right h-3.5 w-3.5 opacity-70 group-hover:opacity-100" data-lucide="arrow-up-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></li>
<li className=""><a className="group inline-flex items-center gap-1 hover:text-white/90" href="#">Contact us <svg className="lucide lucide-arrow-up-right h-3.5 w-3.5 opacity-70 group-hover:opacity-100" data-lucide="arrow-up-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></li>
</ul>
</div>
</div>

<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-wrap items-center gap-3 text-sm">
<a aria-label="Facebook" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 transition" href="#">
<svg className="lucide lucide-facebook h-4 w-4" data-lucide="facebook" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
        Facebook
      </a>
<a aria-label="Instagram" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 transition" href="#">
<svg className="lucide lucide-instagram h-4 w-4" data-lucide="instagram" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
        Instagram
      </a>
<a aria-label="Twitter" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 transition" href="#">
<svg className="lucide lucide-twitter h-4 w-4" data-lucide="twitter" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
        Twitter
      </a>
<a aria-label="LinkedIn" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 transition" href="#">
<svg className="lucide lucide-linkedin h-4 w-4" data-lucide="linkedin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        LinkedIn
      </a>
</div>
<div className="flex items-center justify-start md:justify-end gap-4 text-xs text-white/60">
<a className="hover:text-white/80" href="#">Privacy</a>
<a className="hover:text-white/80" href="#">Terms</a>
<a className="hover:text-white/80" href="#">Status</a>
</div>
</div>
<div className="h-px bg-white/10 my-6"></div>

<div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
<p>© 2025 YUNA Inc. All rights reserved.</p>
<p className="text-white/50">ISO‑27001 ready • SOC 2 in progress • Data residency options</p>
</div>
</div>
</div>
</footer>




    </>
  );
}
