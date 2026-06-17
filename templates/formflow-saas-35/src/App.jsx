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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Newsreader', 'serif'],
},
colors: {
neutral: {
925: '#0a0a0a',
950: '#050505',
},
brand: {
400: '#7c66ff',
500: '#6b55e8',
600: '#5a45d0',
}
},
letterSpacing: {
tighter: '-0.04em',
},
animation: {
'marquee': 'marquee 40s linear infinite',
'beam': 'beam 8s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
},
beam: {
'0%': { top: '-200px', opacity: '0' },
'10%': { opacity: '1' },
'90%': { opacity: '1' },
'100%': { top: '100%', opacity: '0' },
}
}
}
}
}



/*
Sequence animation on scroll when visible.
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
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el); // observing twice is a no-op
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


      const body = document.getElementById('main-body');
      const spotlightGroups = document.querySelectorAll('.spotlight-group');

      document.addEventListener('mousemove', (e) => {
          const x = e.clientX;
          const y = e.clientY;

          body.style.setProperty('--mouse-x', `${x}px`);
          body.style.setProperty('--mouse-y', `${y}px`);

          spotlightGroups.forEach(group => {
              const rect = group.getBoundingClientRect();
              const relX = x - rect.left;
              const relY = y - rect.top;

              group.style.setProperty('--mouse-x-rel', `${relX}px`);
              group.style.setProperty('--mouse-y-rel', `${relY}px`);
          });
      });
    
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="UtvhDctN8AjL6tvf1yKd"></div>

</div>
</div>

<div className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300" style={{background: 'radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(124,102,255,0.06), transparent 40%)'}}></div>

<div className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7c66ff] via-[#9d8cff] to-[#7c66ff] z-50 opacity-60" style={{}}></div>

<div className="fixed inset-0 pointer-events-none z-0 grid grid-cols-6 md:grid-cols-12 max-w-7xl mx-auto border-x border-white/5 h-full" style={{}}>

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.1s'}}>
<div className="absolute -top-40 -right-[1px] w-[1px] h-40 bg-gradient-to-b from-transparent via-[#7c66ff] to-transparent animate-beam" style={{animationDuration: '7s', animationDelay: '1.5s'}}></div>
</div>

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.3s'}}></div>

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.15s'}}>
<div className="absolute -top-52 -right-[1px] w-[1px] h-52 bg-gradient-to-b from-transparent via-[#9d8cff] to-transparent animate-beam" style={{animationDuration: '11s', animationDelay: '4s'}}></div>
</div>

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.4s'}}></div>

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.25s'}}>
<div className="absolute -top-32 -right-[1px] w-[1px] h-32 bg-gradient-to-b from-transparent via-[#7c66ff] to-transparent animate-beam" style={{animationDuration: '6s', animationDelay: '0.5s'}}></div>
</div>

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.1s'}}></div>

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.35s'}}>
<div className="absolute -top-64 -right-[1px] w-[1px] h-64 bg-gradient-to-b from-transparent via-[#8a75ff] to-transparent animate-beam" style={{animationDuration: '9s', animationDelay: '2.5s'}}></div>
</div>

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.2s'}}></div>

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.45s'}}>
<div className="absolute -top-40 -right-[1px] w-[1px] h-40 bg-gradient-to-b from-transparent via-[#7c66ff] to-transparent animate-beam" style={{animationDuration: '8s', animationDelay: '5s'}}></div>
</div>

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.15s'}}></div>

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.3s'}}></div>
</div>

<nav className="sticky top-0 z-40 w-full border-b border-white/5 bg-black/60 backdrop-blur-md shrink-0" id="__FPSC_ID_1_1765917669860" style={{}}>
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-[#7c66ff] text-3xl iconify--lucide" data-icon="lucide:workflow" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M16 11h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3m-6-6h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3m6-6V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xl font-semibold tracking-tight text-white">
            Formflow
          </span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors flex items-center gap-1 group" href="#features">
            Features
          </a>
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors" href="#comparison">
            Compare
          </a>
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors" href="#pricing">
            Pricing
          </a>
</div>

<div className="flex items-center gap-6">
<a className="hidden md:flex items-center gap-1 text-sm font-normal text-gray-300 hover:text-white" href="#">
            Login
          </a>
<button className="hover:bg-white/10 transition-all duration-300 overflow-hidden group text-xs font-semibold text-white tracking-wide bg-white/5 border-white/10 border rounded-full pt-2 pr-5 pb-2 pl-5 relative">
<span className="relative z-10 uppercase">Start at $14.50</span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7c66ff]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
</button>
</div>
</div>
</nav>

<main className="relative bottom--5">

<section className="flex flex-col z-10 w-full max-w-7xl mt-24 mr-auto mb-32 ml-auto pr-6 pl-6 relative">

<div className="w-full flex justify-start mb-8 spotlight-group relative [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate" style={{'--mouse-x-rel': '1243px', '--mouse-y-rel': '1732px'}}>
<div className="-inset-px spotlight-border transition-opacity duration-300 opacity-0 w-fit rounded-full absolute" style={{background: 'radial-gradient(120px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(124,102,255,0.4), transparent)'}}></div>
<a className="relative z-10 group flex items-center gap-4 rounded-full border border-white/10 bg-black/40 pr-4 pl-1.5 py-1.5 hover:border-white/20 transition-all overflow-hidden" href="#">
<span className="rounded-full bg-[#7c66ff]/10 border border-[#7c66ff]/30 px-3 py-1 text-[10px] font-semibold text-[#7c66ff] tracking-wide uppercase">
              Offer
            </span>
<span className="text-sm font-light text-gray-300">5 Concept Renders for FREE</span>
<svg aria-hidden="true" className="iconify text-gray-500 group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" style={{width: '14px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:gap-24 w-full gap-x-12 gap-y-12 items-center">

<div className="relative z-20 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate">
<div className="flex flex-col gap-2">
<div className="text-white/30 font-mono text-xs mb-3 flex items-center gap-2">
                01_UNLOCKED
                <div className="w-1.5 h-1.5 rounded-full bg-[#7c66ff] animate-pulse"></div>
</div>
<h1 className="md:text-6xl lg:text-[78px] leading-[0.9] text-5xl italic text-white tracking-tight font-serif">
<span className="block">From floor plans</span>
<span className="block not-italic font-light text-gray-400 tracking-tighter">to living experiences</span>
</h1>
</div>
</div>

<div className="relative z-20 md:text-right [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll animate">
</div>
</div>

<div className="mt-12 md:mt-16 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-end [animation:animationIn_0.8s_ease-out_0.7s_both] animate-on-scroll animate">

<div className="group relative rounded-2xl bg-white/[0.02] p-6 md:p-8 spotlight-group spotlight-card overflow-hidden" style={{'--mouse-x-rel': '1243px', '--mouse-y-rel': '1327px'}}>
<div className="absolute inset-0 pointer-events-none border border-white/5 rounded-2xl"></div>
<div className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 spotlight-border transition-opacity duration-300 border border-transparent" style={{background: 'border-box radial-gradient(300px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(124, 102, 255, 0.2), transparent) border-box', WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude'}}></div>
<div className="absolute left-0 top-6 w-0.5 h-10 bg-gradient-to-b from-[#7c66ff] to-[#5e4ad0] rounded-r-full"></div>
<p className="md:text-lg leading-relaxed z-10 text-base italic text-gray-300 font-serif max-w-lg relative" style={{}}>"Everything in one place. Digital twin, renders, walkthroughs, cinematic VR, all working together and available everywhere on mobile. One system that actually carries the project from first pitch to final sale."</p>
<div className="mt-6 flex gap-3 items-center">
<span className="text-lg font-bold text-white tracking-tight" style={{}}>Fully Integrated</span>
<span className="text-[10px] text-gray-500 tracking-wider font-mono ml-auto">18%_Sales_Acceleration</span>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-center gap-5 z-10 pl-2 relative justify-end">

<button className="group/btn rounded-full relative">
<div className="-inset-1 group-hover/btn:opacity-75 transition duration-500 bg-[#7c66ff]/50 opacity-40 rounded-full absolute blur"></div>
<div className="flex gap-3 active:translate-y-[2px] active:shadow-[0_0_0_1px_rgba(124,102,255,0.5),0_2px_0_#5a45d0] transition-all duration-150 text-white bg-gradient-to-b from-[#9d8cff] via-[#8c79ff] to-[#7c66ff] h-14 rounded-full px-8 relative shadow-[0_0_0_1px_rgba(124,102,255,0.5),0_4px_0_#5a45d0,0_10px_15px_-3px_rgba(0,0,0,0.5)] items-center">
<span className="text-lg font-semibold tracking-tight">Book Demo</span>
<svg aria-hidden="true" className="iconify text-white/80 iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" style={{width: '20px', height: '20px', strokeWidth: '2'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</button>

<a className="hover:bg-white/5 transition-all flex h-14 text-sm font-medium text-gray-200 bg-white/[0.03] rounded-full px-8 items-center justify-center group relative overflow-hidden" href="#comparison" style={{'--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))', '--border-radius-before': '9999px'}}>
<span className="group-hover:text-white transition-colors text-base font-medium text-gray-300 tracking-tight">Calculate Your ROI</span>
</a>
</div>
</div>

<div className="[animation:animationIn_0.8s_ease-out_0.9s_both] animate-on-scroll animate w-full z-20 mt-16 relative">
<p className="uppercase text-xs font-semibold text-gray-600 tracking-widest font-mono text-center mb-8" style={{}}>TRUSTED BY VISIONARIES</p>
<div className="relative flex overflow-hidden group marquee-mask opacity-100">
<div className="flex animate-marquee whitespace-nowrap min-w-full gap-x-20 gap-y-20 items-center">
<svg className="text-gray-500" data-icon-set="simple-icons" data-simple-icons="slack" height="36" style={{}} viewbox="0 0 24 24" width="96" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5.042 15.165a2.53 2.53 0 0 1-2.52 2.523A2.53 2.53 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52a2.527 2.527 0 0 1 2.521 2.52v6.313A2.53 2.53 0 0 1 8.834 24a2.53 2.53 0 0 1-2.521-2.522zM8.834 5.042a2.53 2.53 0 0 1-2.521-2.52A2.53 2.53 0 0 1 8.834 0a2.53 2.53 0 0 1 2.521 2.522v2.52zm0 1.271a2.53 2.53 0 0 1 2.521 2.521a2.53 2.53 0 0 1-2.521 2.521H2.522A2.53 2.53 0 0 1 0 8.834a2.53 2.53 0 0 1 2.522-2.521zm10.122 2.521a2.53 2.53 0 0 1 2.522-2.521A2.53 2.53 0 0 1 24 8.834a2.53 2.53 0 0 1-2.522 2.521h-2.522zm-1.268 0a2.53 2.53 0 0 1-2.523 2.521a2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.53 2.53 0 0 1 2.523 2.522zm-2.523 10.122a2.53 2.53 0 0 1 2.523 2.522A2.53 2.53 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522zm0-1.268a2.527 2.527 0 0 1-2.52-2.523a2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.53 2.53 0 0 1-2.522 2.523z" fill="currentColor"></path></svg>
<svg className="w-[96px] h-[36px]" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="zapier" height="36" strokeWidth="2" style={{width: '96px', height: '36px', color: 'rgb(107, 114, 128)'}} viewbox="0 0 24 24" width="96" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M4.157 0A4.15 4.15 0 0 0 0 4.161v15.678A4.15 4.15 0 0 0 4.157 24h15.682A4.15 4.15 0 0 0 24 19.839V4.161A4.15 4.15 0 0 0 19.839 0zm10.61 8.761h.03a.6.6 0 0 1 .23.038a.6.6 0 0 1 .201.124a.63.63 0 0 1 .162.431a.6.6 0 0 1-.162.435a.6.6 0 0 1-.201.128a.6.6 0 0 1-.23.042a.5.5 0 0 1-.235-.042a.6.6 0 0 1-.332-.328a.6.6 0 0 1-.038-.235a.6.6 0 0 1 .17-.431a.6.6 0 0 1 .405-.162m2.853 1.572q.044.005.095.004c.325-.011.646.064.937.219c.238.144.431.355.552.609c.128.279.189.582.185.888v.193a2 2 0 0 1 0 .219h-2.498c.003.227.075.45.204.642a.78.78 0 0 0 .646.265a.7.7 0 0 0 .484-.136a.64.64 0 0 0 .23-.318l.915.257a1.4 1.4 0 0 1-.28.537c-.14.159-.321.284-.521.355a2.2 2.2 0 0 1-.836.136a1.9 1.9 0 0 1-1.001-.245a1.6 1.6 0 0 1-.665-.703a2.2 2.2 0 0 1-.227-1.036a1.95 1.95 0 0 1 .48-1.398a1.9 1.9 0 0 1 1.3-.488m-9.607.023c.162.004.325.026.48.079c.207.065.4.174.563.314c.26.302.393.692.366 1.088v2.276H8.53l-.109-.711h-.065q-.096.245-.272.439a1.1 1.1 0 0 1-.374.264a1 1 0 0 1-.453.083a1.33 1.33 0 0 1-.866-.264a.97.97 0 0 1-.329-.801a1 1 0 0 1 .076-.431a1 1 0 0 1 .242-.363a1.48 1.48 0 0 1 1.043-.303h.952v-.181a.7.7 0 0 0-.136-.454a.55.55 0 0 0-.438-.154a.7.7 0 0 0-.378.086a.48.48 0 0 0-.193.254l-.99-.144a1.26 1.26 0 0 1 .257-.563c.14-.174.321-.302.533-.378c.261-.091.54-.136.82-.129q.078-.006.163-.007m4.384.007c.174 0 .347.038.506.114c.182.083.34.211.458.374c.257.423.377.911.351 1.406a2.53 2.53 0 0 1-.355 1.448a1.15 1.15 0 0 1-1.009.517c-.204 0-.401-.045-.582-.136a1.05 1.05 0 0 1-.48-.457a1.3 1.3 0 0 1-.114-.234h-.045l.004 1.784h-1.059v-4.713h.904l.117.805h.057c.068-.208.177-.401.328-.56a1.13 1.13 0 0 1 .843-.344h.076zm7.559.084h.903l.113.805h.053a1.4 1.4 0 0 1 .235-.484a.8.8 0 0 1 .313-.242a.8.8 0 0 1 .39-.076h.234v1.051h-.401a.66.66 0 0 0-.313.008a.6.6 0 0 0-.272.155a.66.66 0 0 0-.174.26a.7.7 0 0 0-.027.314v1.875h-1.054zm-17.515.003h3.262v.896L3.73 13.104l.034.113h1.973l.042.9H2.4v-.9l1.931-1.754l-.045-.117H2.441zm11.815 0h1.055v3.659h-1.055zm3.443.684l.019.016a.7.7 0 0 0-.351.045a.76.76 0 0 0-.287.204c-.11.155-.174.336-.189.522h1.545c-.034-.526-.257-.787-.74-.787zm-5.718.163c-.026 0-.057 0-.083.004a.8.8 0 0 0-.31.053a.75.75 0 0 0-.257.189a1.02 1.02 0 0 0-.204.695v.064c-.015.257.057.507.204.711a.63.63 0 0 0 .253.196a.64.64 0 0 0 .314.061a.64.64 0 0 0 .578-.265c.14-.223.204-.48.189-.74a1.2 1.2 0 0 0-.181-.711a.68.68 0 0 0-.503-.257m-4.509 1.266a.46.46 0 0 0-.268.102a.37.37 0 0 0-.114.276q0 .08.027.155a.4.4 0 0 0 .087.132a.58.58 0 0 0 .397.11v.004a.86.86 0 0 0 .563-.182a.57.57 0 0 0 .211-.457v-.14z" fill="currentColor"></path>
</svg>
<iconify-icon className="text-gray-500" height="36" icon="simple-icons:hubspot" width="96"></iconify-icon>
<iconify-icon className="text-gray-500" height="36" icon="simple-icons:salesforce" width="96"></iconify-icon>
<iconify-icon className="text-gray-500" height="36" icon="simple-icons:notion" width="96"></iconify-icon>
<iconify-icon className="text-gray-500" height="36" icon="simple-icons:airtable" width="96"></iconify-icon>
</div>
<div aria-hidden="true" className="flex gap-20 animate-marquee whitespace-nowrap items-center min-w-full absolute top-0 left-full pl-20">
<iconify-icon className="text-gray-500" height="36" icon="simple-icons:slack" width="96"></iconify-icon>
<iconify-icon className="text-gray-500" height="36" icon="simple-icons:zapier" width="96"></iconify-icon>
<iconify-icon className="text-gray-500" height="36" icon="simple-icons:hubspot" width="96"></iconify-icon>
<iconify-icon className="text-gray-500" height="36" icon="simple-icons:salesforce" width="96"></iconify-icon>
<iconify-icon className="text-gray-500" height="36" icon="simple-icons:notion" width="96"></iconify-icon>
<iconify-icon className="text-gray-500" height="36" icon="simple-icons:airtable" width="96"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="flex flex-col z-20 w-full max-w-7xl mt-44 mr-auto mb-44 ml-auto pr-6 pl-6 relative items-center" id="features">

<div className="text-center max-w-2xl mx-auto px-6 mb-16 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">
<h2 className="text-4xl md:text-5xl font-serif italic text-white tracking-tight mb-4">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">Accelerate presales</span>
<span className="text-[#7c66ff]">by 18%+</span>
</h2>
<p className="leading-relaxed text-lg font-light text-gray-400">Stunning, fully interactive digital twins. One link. Any device. Anywhere.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full relative">

<div className="group relative rounded-2xl bg-white/[0.02] border border-white/5 p-6 spotlight-group overflow-hidden hover:bg-white/[0.04] transition-colors duration-500 flex flex-col h-full [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll" style={{'--mouse-x-rel': '1243px', '--mouse-y-rel': '645.75px'}}>

<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(600px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(124,102,255,0.08), transparent 40%)'}}></div>

<div className="overflow-hidden flex flex-col select-none bg-black/40 w-full h-48 border-white/5 border rounded-xl mb-8 relative gap-x-3 gap-y-3 group hover:border-white/10 hover:bg-white/[0.02] transition-all duration-500">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px] opacity-20 pointer-events-none"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none text-white/10" style={{zIndex: '0'}}>
<defs>
<lineargradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: 'rgba(124, 102, 255, 0.05)'}}></stop>
<stop offset="50%" style={{stopColor: 'rgba(124, 102, 255, 0.4)'}}></stop>
<stop offset="100%" style={{stopColor: 'rgba(124, 102, 255, 0.05)'}}></stop>
</lineargradient>
</defs>

<path className="transition-all duration-700 opacity-60 group-hover:opacity-100 group-hover:stroke-[#7c66ff]/40" d="M56,96 L140,96" stroke="url(#lineGradient)" stroke-dasharray="4,4" strokeWidth="1.5"></path>

<path className="transition-all duration-700 opacity-60 group-hover:opacity-100 group-hover:stroke-[#7c66ff]/40" d="M140,36 L140,156" stroke="url(#lineGradient)" stroke-dasharray="4,4" strokeWidth="1.5"></path>

<path className="transition-all duration-700 opacity-60 group-hover:opacity-100 group-hover:stroke-[#7c66ff]/40" d="M140,36 L400,36" stroke="url(#lineGradient)" stroke-dasharray="4,4" strokeWidth="1.5"></path>

<path className="transition-all duration-700 opacity-60 group-hover:opacity-100 group-hover:stroke-[#7c66ff]/40" d="M140,96 L400,96" stroke="url(#lineGradient)" stroke-dasharray="4,4" strokeWidth="1.5"></path>

<path className="transition-all duration-700 opacity-60 group-hover:opacity-100 group-hover:stroke-[#7c66ff]/40" d="M140,156 L400,156" stroke="url(#lineGradient)" stroke-dasharray="4,4" strokeWidth="1.5"></path>
</svg>

<div className="absolute left-6 top-1/2 -translate-y-1/2 z-10">
<div className="w-14 h-14 bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 flex items-center justify-center shadow-[0_0_15px_-5px_rgba(255,255,255,0.05)] transition-all duration-300 group-hover:scale-105 group-hover:border-[#7c66ff]/40 group-hover:shadow-[0_0_20px_-5px_rgba(124,102,255,0.2)]">
<svg className="text-white/40 group-hover:text-[#7c66ff] transition-colors duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="2" x2="22" y1="12" y2="12"></line>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
</svg>
</div>
</div>

<div className="absolute right-6 top-0 bottom-0 flex flex-col justify-center gap-5 z-10 py-4">

<div className="relative group/icon">
<div className="w-10 h-10 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:border-purple-500/40 group-hover/icon:shadow-[0_0_15px_-5px_rgba(168,85,247,0.2)]">
<svg className="text-white/40 group-hover/icon:text-purple-400 transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" ry="2" width="20" x="2" y="3"></rect>
<line x1="8" x2="16" y1="21" y2="21"></line>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
</div>
</div>

<div className="relative group/icon">
<div className="w-10 h-10 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:border-pink-500/40 group-hover/icon:shadow-[0_0_15px_-5px_rgba(236,72,153,0.2)]">
<svg className="text-white/40 group-hover/icon:text-pink-400 transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21 9V7.5a2.5 2.5 0 0 0-2.5-2.5h-13A2.5 2.5 0 0 0 3 7.5V9"></path>
<path d="M3 9h18v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9z"></path>
<path d="M10 14a2 2 0 1 0 4 0"></path>
</svg>
</div>
</div>

<div className="relative group/icon">
<div className="w-10 h-10 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:border-orange-500/40 group-hover/icon:shadow-[0_0_15px_-5px_rgba(249,115,22,0.2)]">
<svg className="text-white/40 group-hover/icon:text-orange-400 transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect>
<line x1="12" x2="12.01" y1="18" y2="18"></line>
</svg>
</div>
</div>
</div>
</div>

<div className="mt-auto relative z-10">
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-mono text-[#7c66ff] border border-[#7c66ff]/20 bg-[#7c66ff]/5 px-2 py-0.5 rounded">
                  INCLUDED
                </span>
<svg aria-hidden="true" className="iconify text-gray-400 group-hover:text-[#7c66ff] transition-colors iconify--lucide" data-icon="lucide:git-merge" height="1em" role="img" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="18" fill="none" r="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle>
<circle cx="6" cy="6" fill="none" r="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle>
<path d="M6 21V9a9 9 0 0 0 9 9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Across All Devices</h3>
<p className="leading-relaxed text-sm text-gray-500">Desktop, mobile, showroom, VR. Same experience everywhere. Available on cloud and offline.</p>
</div>
</div>

<div className="group relative rounded-2xl bg-white/[0.02] border border-white/5 p-6 spotlight-group overflow-hidden hover:bg-white/[0.04] transition-colors duration-500 flex flex-col h-full [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll" style={{'--mouse-x-rel': '824.3359375px', '--mouse-y-rel': '645.75px'}}>
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(600px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(124,102,255,0.08), transparent 40%)'}}></div>

<div className="h-48 w-full mb-8 rounded-xl bg-black/40 border border-white/5 relative overflow-hidden flex items-center justify-center p-4 select-none">
<div className="text-center">
<div className="text-5xl font-bold text-[#7c66ff] tracking-tighter font-mono mb-2" style={{}}>18%</div>
<div className="uppercase text-xs text-gray-500 tracking-widest">Acceleration</div>
</div>
<div className="absolute bottom-4 left-4 right-4 h-1 bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-[#7c66ff] w-full animate-beam" style={{animationDuration: '1.5s'}}></div>
</div>
</div>

<div className="mt-auto relative z-10">
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-mono text-[#7c66ff] border border-[#7c66ff]/20 bg-[#7c66ff]/5 px-2 py-0.5 rounded">
                  FAST
                </span>
<svg aria-hidden="true" className="iconify text-gray-400 group-hover:text-[#7c66ff] transition-colors iconify--lucide" data-icon="lucide:zap" height="1em" role="img" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<polygon fill="none" points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></polygon>
</svg>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2" style={{}}>Increased Conversions</h3>
<p className="leading-relaxed text-sm text-gray-500" style={{}}>Our technology shortens presales by 18% on average, delivering clients an ROI of 15x+.</p>
</div>
</div>

<div className="group spotlight-group overflow-hidden hover:bg-white/[0.04] transition-colors duration-500 flex flex-col [animation:animationIn_0.8s_ease-out_0.8s_both] animate-on-scroll h-full border-white/5 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative" style={{'--mouse-x-rel': '405.671875px', '--mouse-y-rel': '645.75px'}}>
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(600px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(124,102,255,0.08), transparent 40%)'}}></div>

<div className="overflow-hidden flex select-none bg-black/40 w-full h-48 border-white/5 border rounded-xl mb-8 pt-6 pr-6 pb-6 pl-6 relative items-center justify-center">
<div className="border-dashed flex w-32 h-32 border-white/20 border rounded-full relative items-center justify-center">
<span className="text-xs text-gray-500">Your Logo</span>
<div className="absolute -bottom-3 -right-3 bg-[#7c66ff] text-white rounded-full p-1.5 shadow-lg">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" height="1em" role="img" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>

<div className="mt-auto relative z-10">
<div className="flex items-center gap-3 mb-3">
<span className="text-xs text-[#7c66ff] font-mono bg-[#7c66ff]/5 border-[#7c66ff]/20 border rounded pt-0.5 pr-2 pb-0.5 pl-2" style={{}}>ACCURATE</span>
<svg aria-hidden="true" className="iconify text-gray-400 group-hover:text-[#7c66ff] transition-colors iconify--lucide" data-icon="lucide:palette" height="1em" role="img" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle>
<circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle>
<circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle>
<circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle>
<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688c0-.437-.18-.835-.437-1.125c-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">AI Powered </h3>
<p className="leading-relaxed text-sm text-gray-500" style={{}}>Our proprietary AI creates a living copy of your project's city. Faster than ever, always up to date.</p>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full max-w-7xl z-20 mr-auto mb-32 ml-auto pr-6 pl-6 relative" id="pricing">
<div className="text-center mb-16">
<h2 className="md:text-6xl text-4xl text-white tracking-tight font-serif mb-6">The only <span className="italic text-[#7c66ff]">fully integrated platform.</span></h2>
<p className="leading-relaxed text-lg font-light text-gray-300 max-w-2xl mr-auto ml-auto">A single AI-powered digital twin that drives every experience your buyer touches. One source of truth from introduction to final sale.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative">

<div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 flex flex-col gap-6 relative group hover:border-white/20 transition-colors h-full">
<div>
<span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Starter
              </span>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-lg text-red-500/60 line-through font-mono decoration-1">
                  $29
                </span>
<span className="text-5xl font-serif text-white tracking-tight">
                  $14.50
                </span>
</div>
<p className="text-xs text-[#7c66ff] font-bold font-mono mt-3 uppercase tracking-wide">
                First Month 50% Off
              </p>
<p className="text-sm text-gray-400 mt-4 leading-relaxed">
                Perfect for solos &amp; small businesses starting out.
              </p>
</div>
<div className="w-full h-px bg-white/5"></div>
<ul className="space-y-4 text-sm text-gray-300 font-medium">
<li className="flex gap-3 items-center">
<svg className="w-5 h-5 text-[#6b55e8]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                1,000 submissions/mo
              </li>
<li className="flex gap-3 items-center">
<svg className="w-5 h-5 text-[#6b55e8]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Unlimited forms
              </li>
<li className="flex gap-3 items-center">
<svg className="w-5 h-5 text-[#6b55e8]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Remove branding
              </li>
<li className="flex gap-3 items-center">
<svg className="w-5 h-5 text-[#6b55e8]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Visual logic
              </li>
</ul>
<a className="w-full py-4 rounded-lg bg-white/5 border border-white/10 text-gray-200 font-semibold text-center hover:bg-white/10 hover:text-white transition-all mt-auto" href="#">
              Start Starter
            </a>
</div>

<div className="relative group z-10 md:-my-6">
<div className="absolute inset-0 bg-gradient-to-b from-[#7c66ff]/20 to-[#5a45d0]/10 rounded-2xl blur-xl opacity-100"></div>
<div className="relative bg-black border border-[#7c66ff]/50 rounded-2xl p-8 flex flex-col gap-6 shadow-[0_0_40px_-10px_rgba(124,102,255,0.15)] h-full">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#7c66ff] to-[#6b55e8] text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg">
                Most Popular
              </div>
<div className="">
<span className="text-xs font-bold text-[#7c66ff] uppercase tracking-widest">
                  Pro
                </span>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-lg text-red-500/60 line-through font-mono decoration-1">
                    $59
                  </span>
<span className="text-5xl font-serif text-white tracking-tight">
                    $29.50
                  </span>
</div>
<p className="text-xs text-[#7c66ff] font-bold font-mono mt-3 uppercase tracking-wide">
                  First Month 50% Off
                </p>
<p className="text-sm text-gray-400 mt-4 leading-relaxed">
                  For fast-growing businesses requiring scale.
                </p>
</div>
<div className="w-full h-px bg-white/10"></div>
<ul className="space-y-4 text-sm text-white font-medium">
<li className="flex gap-3 items-center">
<svg className="w-5 h-5 text-[#7c66ff] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Everything in Starter
                </li>
<li className="flex gap-3 items-center">
<svg className="w-5 h-5 text-[#7c66ff] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  7,500 submissions/mo
                </li>
<li className="flex gap-3 items-center">
<svg className="w-5 h-5 text-[#7c66ff] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Partial form recovery
                </li>
<li className="flex gap-3 items-center">
<svg className="w-5 h-5 text-[#7c66ff] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  A/B Testing
                </li>
</ul>
<a className="w-full py-4 rounded-lg bg-[#7c66ff] text-white font-bold text-center text-lg hover:bg-[#6b55e8] transition-all shadow-[0_0_20px_rgba(124,102,255,0.3)] hover:shadow-[0_0_30px_rgba(124,102,255,0.5)] mt-auto hover:-translate-y-0.5" href="#">
                Get Pro 50% Off
              </a>
</div>
</div>

<div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 flex flex-col gap-6 relative group hover:border-white/20 transition-colors h-full">
<div>
<span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Scale
              </span>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-lg text-red-500/60 line-through font-mono decoration-1">
                  $119
                </span>
<span className="text-5xl font-serif text-white tracking-tight">
                  $59.50
                </span>
</div>
<p className="text-xs text-[#7c66ff] font-bold font-mono mt-3 uppercase tracking-wide">
                First Month 50% Off
              </p>
<p className="text-sm text-gray-400 mt-4 leading-relaxed">
                Teams &amp; advanced workflows.
              </p>
</div>
<div className="w-full h-px bg-white/5"></div>
<ul className="space-y-4 text-sm text-gray-300 font-medium">
<li className="flex gap-3 items-center">
<svg className="w-5 h-5 text-[#6b55e8]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Everything in Pro
              </li>
<li className="flex gap-3 items-center">
<svg className="w-5 h-5 text-[#6b55e8]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                20,000 submissions/mo
              </li>
<li className="flex gap-3 items-center">
<svg className="w-5 h-5 text-[#6b55e8]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                In-flow visual analytics
              </li>
<li className="flex gap-3 items-center">
<svg className="w-5 h-5 text-[#6b55e8]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Priority Support
              </li>
</ul>
<a className="w-full py-4 rounded-lg bg-white/5 border border-white/10 text-gray-200 font-semibold text-center hover:bg-white/10 hover:text-white transition-all mt-auto" href="#">
              Start Scale
            </a>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-sm text-gray-400 flex items-center justify-center gap-2">
<svg className="w-4 h-4 text-[#7c66ff]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 8v4l3 3"></path>
</svg>
            30-day money-back guarantee. Cancel anytime.
          </p>
</div>
</section>
<section className="flex flex-col w-full max-w-7xl z-20 mt-32 mr-auto mb-32 ml-auto px-6 relative" id="comparison">

<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="max-w-2xl">
<div className="flex items-center gap-2 mb-6">
<svg aria-hidden="true" className="iconify text-[#7c66ff] text-lg iconify--lucide" data-icon="lucide:scale" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m16 16l3-8l3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1m-11 0l3-8l3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1M2 21h20M12 3v18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-xs font-mono tracking-widest uppercase text-[#7c66ff]">
                The Honest Truth
              </span>
</div>
<h2 className="text-5xl md:text-6xl font-serif text-white tracking-tight mb-6 leading-[0.95]">
<span className="italic block text-gray-500 font-light">
                What they charge.
              </span>
<span className="font-medium">What you pay.</span>
</h2>
<p className="text-lg text-gray-400 font-light leading-relaxed max-w-lg">
              See why 2,000+ businesses switched. No hidden fees. No "upgrade"
              traps.
            </p>
</div>
</div>

<div className="w-full overflow-x-auto pb-8 [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="min-w-[900px]">

<div className="grid grid-cols-4 border-b border-white/10 pb-4">
<div className="px-6 text-sm font-mono text-gray-500 uppercase tracking-widest">
                Feature
              </div>
<div className="px-6 text-sm font-semibold text-gray-400">
                Typeform
              </div>
<div className="px-6 text-sm font-semibold text-gray-400">
                Jotform
              </div>
<div className="px-6 text-sm font-bold text-[#7c66ff]">Formflow</div>
</div>

<div className="bg-[#0A0A0A]/50 backdrop-blur-sm">

<div className="grid grid-cols-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors group/row items-center">
<div className="p-6 text-sm text-gray-300 font-medium">
                  Visual Conditional Logic
                </div>
<div className="p-6 text-sm text-red-400/80 font-mono">
                  $99/mo (Business)
                </div>
<div className="p-6 text-sm text-yellow-500/80 font-mono">
                  $34/mo (Clunky)
                </div>
<div className="p-6 text-sm text-[#dcd6ff] bg-[#7c66ff]/[0.1] border-x border-[#7c66ff]/10 font-mono flex items-center gap-2">
<svg className="lucide lucide-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Starter ($14.50)
                </div>
</div>

<div className="grid grid-cols-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors group/row items-center">
<div className="p-6 text-sm text-gray-300 font-medium">
                  Remove Branding
                </div>
<div className="p-6 text-sm text-red-400/80 font-mono">$99/mo</div>
<div className="p-6 text-sm text-yellow-500/80 font-mono">
                  $34/mo
                </div>
<div className="p-6 text-sm text-[#dcd6ff] bg-[#7c66ff]/[0.1] border-x border-[#7c66ff]/10 font-mono flex items-center gap-2">
<svg className="lucide lucide-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  ALL Plans
                </div>
</div>

<div className="grid grid-cols-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors group/row items-center">
<div className="p-6 text-sm text-gray-300 font-medium">
                  Load Speed
                </div>
<div className="p-6 text-sm text-gray-500 font-mono">
                  3.2 seconds
                </div>
<div className="p-6 text-sm text-gray-500 font-mono">
                  4.1 seconds
                </div>
<div className="p-6 text-sm text-[#dcd6ff] bg-[#7c66ff]/[0.1] border-x border-[#7c66ff]/10 font-mono flex items-center gap-2">
<svg className="lucide lucide-zap" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
                  0.8 seconds
                </div>
</div>

<div className="grid grid-cols-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors group/row items-center">
<div className="p-6 text-sm text-gray-300 font-medium">
                  Partial Submissions
                </div>
<div className="p-6 text-sm text-red-400/80 font-mono">
                  Gone forever
                </div>
<div className="p-6 text-sm text-red-400/80 font-mono">
                  Not available
                </div>
<div className="p-6 text-sm text-[#dcd6ff] bg-[#7c66ff]/[0.1] border-x border-[#7c66ff]/10 font-mono flex items-center gap-2">
<svg className="lucide lucide-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Captured Auto
                </div>
</div>

<div className="grid grid-cols-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors group/row items-center">
<div className="p-6 text-sm text-gray-300 font-medium">
                  Real Human Support
                </div>
<div className="p-6 text-sm text-gray-500 font-mono">
                  AI Chatbot
                </div>
<div className="p-6 text-sm text-gray-500 font-mono">Good luck</div>
<div className="p-6 text-sm text-[#dcd6ff] bg-[#7c66ff]/[0.1] border-x border-[#7c66ff]/10 font-mono flex items-center gap-2">
<svg className="lucide lucide-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  &lt; 2 Hours
                </div>
</div>
</div>
</div>
</div>
</section>


<section className="flex flex-col w-full max-w-7xl z-20 mb-32 ml-auto px-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h3 className="text-2xl font-serif text-white mb-8">
              Why Smart Businesses Switched
            </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="bg-white/5 p-4 rounded-xl border border-white/5">
<p className="text-sm text-gray-300 mb-3">
                  "I've tried MANY form creators, but this is by FAR my
                  favorite."
                </p>
<div className="text-xs text-gray-500 font-medium">
                  — David, Gray Matter
                </div>
</div>
<div className="bg-white/5 p-4 rounded-xl border border-white/5">
<p className="text-sm text-gray-300 mb-3">
                  "I've made far more money than the cost of the software.
                  Instant alerts close deals."
                </p>
<div className="text-xs text-gray-500 font-medium">
                  — Jordan, Gym Owner
                </div>
</div>
<div className="bg-white/5 p-4 rounded-xl border border-white/5">
<p className="text-sm text-gray-300 mb-3">
                  "Hands down the best on the market. Drag-and-drop is
                  incredibly powerful."
                </p>
<div className="text-xs text-gray-500 font-medium">
                  — Samuel Hanono
                </div>
</div>
<div className="bg-white/5 p-4 rounded-xl border border-white/5">
<p className="text-sm text-gray-300 mb-3">
                  "Doing what no other tool can. The customization Jotform can't
                  come close to."
                </p>
<div className="text-xs text-gray-500 font-medium">
                  — Dima, eCommerce Brand
                </div>
</div>
</div>
</div>

<div className="">
<h3 className="text-2xl font-serif text-white mb-8">
              Common Questions
            </h3>
<div className="space-y-4">
<details className="group border-b border-white/10 pb-4">
<summary className="flex cursor-pointer items-center justify-between font-medium text-gray-200">
<span>What happens after Month 1?</span>
<span className="transition group-open:rotate-180">
<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M6 9l6 6 6-6"></path>
</svg>
</span>
</summary>
<p className="group-open:animate-fadeIn mt-3 text-sm text-gray-400">
                  You pay the regular monthly price ($29, $59, or $119). You can
                  cancel anytime.
                </p>
</details>
<details className="group border-b border-white/10 pb-4">
<summary className="flex cursor-pointer items-center justify-between font-medium text-gray-200">
<span>Can I cancel before Month 2?</span>
<span className="transition group-open:rotate-180">
<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M6 9l6 6 6-6"></path>
</svg>
</span>
</summary>
<p className="group-open:animate-fadeIn mt-3 text-sm text-gray-400">
                  Yes. If you cancel in the first 30 days, you pay nothing else.
                </p>
</details>
<details className="group border-b border-white/10 pb-4">
<summary className="flex cursor-pointer items-center justify-between font-medium text-gray-200">
<span className="">Is there a setup fee?</span>
<span className="transition group-open:rotate-180">
<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M6 9l6 6 6-6"></path>
</svg>
</span>
</summary>
<p className="group-open:animate-fadeIn mt-3 text-sm text-gray-400">
                  No. The discounted price is all you pay to get started.
                </p>
</details>
<details className="group border-b border-white/10 pb-4">
<summary className="flex cursor-pointer items-center justify-between font-medium text-gray-200">
<span>When does AI Copilot launch?</span>
<span className="transition group-open:rotate-180">
<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M6 9l6 6 6-6"></path>
</svg>
</span>
</summary>
<p className="group-open:animate-fadeIn mt-3 text-sm text-gray-400">
                  Within 30 days. If you lock in your plan now, you get Copilot
                  for free when it launches.
                </p>
</details>
</div>
</div>
</div>
</section>

<section className="w-full relative py-32 overflow-hidden border-t border-white/10 bg-black">

<div className="absolute inset-0 bg-gradient-to-t from-[#7c66ff]/20 to-black pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#7c66ff]/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<h2 className="text-6xl md:text-[80px] font-serif text-white tracking-tight leading-none mb-8">
            Our "You Win or
            
            <span className="italic text-transparent bg-clip-text bg-gradient-to-br from-[#9d8cff] to-[#7c66ff]">
              We Lose" Guarantee.
            </span>
</h2>
<p className="text-xl text-gray-400 font-light max-w-2xl mb-12">
            Use Formflow for 30 days. If it doesn't convert better, save you
            hours, and pay for itself... we refund every penny. No questions
            asked.
          </p>
<div className="flex flex-col md:flex-row gap-4 items-center">
<button className="h-14 px-8 rounded-full bg-[#7c66ff] text-white font-semibold text-lg hover:bg-[#6b55e8] transition-colors shadow-[0_0_20px_rgba(124,102,255,0.4)] flex items-center gap-2">
              Start at 50% Off
              <svg aria-hidden="true" className="iconify text-xl iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="text-sm text-gray-500 mt-4 md:mt-0">
              2,000+ businesses already switched.
            </div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 relative z-20">
<div className="flex items-center gap-2 text-white">
<svg aria-hidden="true" className="iconify text-[#7c66ff] text-xl iconify--lucide" data-icon="lucide:workflow" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M16 11h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3m-6-6h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3m6-6V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-sm font-semibold tracking-tight">Formflow</span>
</div>
<div className="text-xs text-gray-600 font-mono">
            © 2024 Formflow Inc. All rights reserved.
          </div>
</div>
</section>
</main>

<div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none z-20" style={{}}></div>


    </>
  );
}
