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



(function(){const once=true;if(!window.__inViewIO){window.__inViewIO=new IntersectionObserver((entries)=>{entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.classList.add("animate");if(once)window.__inViewIO.unobserve(entry.target)}})},{threshold:0.15,rootMargin:"0px 0px -10% 0px"})}window.initInViewAnimations=function(selector=".animate-on-scroll"){document.querySelectorAll(selector).forEach((el)=>{window.__inViewIO.observe(el)})};document.addEventListener("DOMContentLoaded",()=>initInViewAnimations())})();



      lucide.createIcons({
          attrs: {
              'stroke-width': 1.5
          }
      });

      let currentStep = 1;

      function activateStep(step) {
          if (step === currentStep) return;

          // Update UI for Steps List
          const prevStep = currentStep;
          currentStep = step;
          updateStepStyles(prevStep, step);

          // Update Stack Visuals
          updateCardStack(step);
      }

      function updateCardStack(activeId) {
          const cards = [1, 2, 3];

          cards.forEach(id => {
              const card = document.getElementById(`card-${id}`);

              if (id === activeId) {
                  // Active Card: Front, Opaque, Full Scale
                  card.style.transform = 'translateY(0px) scale(1)';
                  card.style.zIndex = '30';
                  card.style.opacity = '1';
              } else {
                  // Rotation Logic
                  const relativePos = (id - activeId + 3) % 3;

                  if (relativePos === 1) {
                      // Middle of stack
                      card.style.transform = 'translateY(12px) scale(0.95)';
                      card.style.zIndex = '20';
                      card.style.opacity = '0.6';
                  } else {
                      // Bottom of stack
                      card.style.transform = 'translateY(24px) scale(0.9)';
                      card.style.zIndex = '10';
                      card.style.opacity = '0.4';
                  }
              }
          });
      }

      function updateStepStyles(prev, next) {
          // Reset Previous
          const prevStepEl = document.getElementById(`step-${prev}`);
          const prevBadge = document.getElementById(`badge-${prev}`);
          const prevText = document.getElementById(`text-${prev}`);
          const prevIcon = document.getElementById(`icon-${prev}`);

          prevStepEl.className = "step-item flex items-center gap-4 p-2 rounded-lg hover:bg-white/5 border border-transparent transition-all duration-300 cursor-pointer group";
          prevBadge.className = "w-6 h-6 rounded-full bg-transparent flex items-center justify-center text-[10px] font-bold text-gray-500 group-hover:text-orange-400 transition-colors duration-300";
          prevText.className = "text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300";
          prevIcon.classList.add('opacity-0', 'text-gray-600');
          prevIcon.classList.remove('opacity-100', 'text-orange-500');

          // Set Active
          const nextStepEl = document.getElementById(`step-${next}`);
          const nextBadge = document.getElementById(`badge-${next}`);
          const nextText = document.getElementById(`text-${next}`);
          const nextIcon = document.getElementById(`icon-${next}`);

          nextStepEl.className = "step-item flex items-center gap-4 p-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md translate-x-[-10px] shadow-xl cursor-pointer transition-all duration-300";
          nextBadge.className = "w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-[10px] font-bold text-black shadow-lg shadow-orange-500/20 transition-colors duration-300";
          nextText.className = "text-sm font-medium text-white transition-colors duration-300";
          nextIcon.classList.remove('opacity-0', 'text-gray-600');
          nextIcon.classList.add('opacity-100', 'text-orange-500');
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed z-0 top-0 right-0 bottom-0 left-0">
<img alt="Landscape" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/60 to-[#050505]"></div>
<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/10 via-[#050505]/0 to-[#050505]/0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none flex w-full max-w-7xl mx-auto border-r border-white/5 opacity-60">
<div className="flex-1 border-l border-white/5 h-full relative overflow-hidden"><span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono">01</span></div>
<div className="flex-1 border-l border-white/5 h-full relative overflow-hidden">
<div className="absolute top-0 -left-[1px] w-[1px] h-64 bg-gradient-to-b from-transparent via-orange-500/60 to-transparent animate-beam-1"></div>
<span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono">02</span>
</div>
<div className="flex-1 border-l border-white/5 h-full flex justify-center relative overflow-hidden">
<div className="absolute top-0 -left-[1px] w-[1px] h-96 bg-gradient-to-b from-transparent via-orange-500/80 to-transparent animate-beam-2"></div>
<div className="h-full border-r border-dashed border-orange-500/20 w-px"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-64 bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-beam-1" style={{animationDelay: '1.5s'}}></div>
<div className="absolute bottom-[30%] translate-y-1/2 text-orange-500/80 rotate-90">
<svg className="lucide lucide-dna w-4 h-4 text-current" data-lucide="dna" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 16 1.5 1.5"></path><path d="m14 8-1.5-1.5"></path><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"></path><path d="m16.5 10.5 1 1"></path><path d="m17 6-2.891-2.891"></path><path d="M2 15c6.667-6 13.333 0 20-6"></path><path d="m20 9 .891.891"></path><path d="M3.109 14.109 4 15"></path><path d="m6.5 12.5 1 1"></path><path d="m7 18 2.891 2.891"></path><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"></path></svg>
</div>
<span className="absolute bottom-8 text-orange-500/30 text-xs font-mono">03</span>
</div>
<div className="flex-1 border-l border-white/5 h-full relative overflow-hidden">
<div className="absolute top-0 -left-[1px] w-[1px] h-48 bg-gradient-to-b from-transparent via-orange-500/60 to-transparent animate-beam-3"></div>
<span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono">04</span>
</div>
<div className="flex-1 border-l border-white/5 h-full relative overflow-hidden"><span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono">05</span></div>
</div>

<div className="flex-1 flex flex-col w-full max-w-7xl mr-auto ml-auto relative">

<nav className="flex justify-between items-center py-8 px-6 md:px-10 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.1s_both] animate">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="flex bg-gradient-to-tr from-orange-500 to-amber-500 w-8 h-8 rounded-full items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '9999px'}}>
<div className="w-2.5 h-2.5 bg-black rounded-full" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '9999px'}}></div>
</div>
<span className="text-lg font-semibold tracking-tight text-white uppercase">
            Prime
          </span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium tracking-widest uppercase hover:text-white transition-colors text-neutral-400" href="#">
            Protocol
          </a>
<a className="text-xs font-medium tracking-widest uppercase hover:text-white transition-colors text-neutral-400" href="#">
            Results
          </a>
<a className="text-xs font-medium tracking-widest uppercase hover:text-white transition-colors text-neutral-400" href="#">
            Coaching
          </a>
</div>
<div className="flex items-center gap-6">
<a className="text-sm font-medium hover:text-white transition-colors text-neutral-400" href="#">
            Client Login
          </a>
<button className="button-custom scale-95" type="button">
<div className="points_wrapper">
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
</div>
<span className="inner">Apply Now</span>
</button>
</div>
</nav>

<div className="flex-1 grid grid-cols-1 lg:grid-cols-12 pt-24 pb-10 gap-x-4 gap-y-4 items-center">

<div className="col-span-1 lg:col-span-6 md:pl-10 lg:pt-0 flex flex-col pt-10 pr-10 pl-6 justify-center">
<div className="inline-flex items-center gap-2 text-orange-500 mb-8 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.1s_both] animate">
<span className="flex h-2 w-2 rounded-full bg-orange-500"></span>
<span className="text-xs font-bold tracking-widest uppercase text-orange-500/80">
              Personal Evolution Protocol
            </span>
</div>
<h1 className="md:text-7xl lg:text-8xl leading-[0.9] animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both] animate text-6xl font-medium text-white tracking-tighter">A Better Way to Live.  Every Day.</h1>
<p className="leading-relaxed animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.35s_both] animate text-lg font-medium text-white/60 max-w-lg">Built to support clarity, stability, and sustained performance, Proven across millennia.  Validated by the World's elite organizations.</p>
<div className="flex flex-wrap animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.5s_both] animate mt-10 gap-x-6 gap-y-6 items-center">
<a className="group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_10px_rgba(249,115,22,0.45)] bg-gradient-to-b from-white/20 via-white/0 to-white/5 rounded-full relative shadow-[0_0_25px_rgba(249,115,22,0.3),0_8px_40px_rgba(249,115,22,0.15)]" href="#">

<div className="absolute inset-0 overflow-hidden rounded-full">
<div className="absolute inset-[-100%] w-[300%] h-[300%] left-[-100%] top-[-100%] animate-[spin_3s_linear_infinite]" style={{background: 'conic-gradient(from 0deg, transparent 0deg, transparent 80deg, rgba(253,186,116,0.8) 180deg, transparent 280deg, transparent 360deg)'}}></div>
</div>
<div className="absolute inset-[1px] rounded-full backdrop-blur-xl z-0 bg-neutral-950/90"></div>
<div className="z-10 flex gap-3 sm:w-auto overflow-hidden text-sm font-medium text-white w-full rounded-full pt-3 pr-5 pb-3 pl-4 relative items-center">
<div className="relative z-20 w-7 h-7 rounded-full bg-gradient-to-b from-orange-400 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30 ring-1 ring-white/20 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-zap w-3.5 h-3.5 text-white" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
<span className="whitespace-nowrap relative z-10 font-medium tracking-tight text-base text-white/95 group-hover:text-white transition-colors">
                  Start Transformation
                </span>
<span className="inline-flex items-center justify-center z-10 bg-white/10 w-6 h-6 rounded-full ml-1 relative group-hover:translate-x-0.5 transition-transform text-white/80 group-hover:text-white">
<svg className="lucide lucide-arrow-right w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</div>
</a>
<div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
<svg className="lucide lucide-check w-3.5 h-3.5 text-orange-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span>Scientific Consultation Included</span>
</div>
</div>
</div>

</div>

<div className="md:px-10 mt-32 pt-4 pb-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">

<div className="col-span-1 lg:col-span-4 relative group animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both]">
<div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
<div className="flex flex-col min-h-[180px] transition-transform hover:-translate-y-1 duration-300 text-black bg-gradient-to-b from-orange-400 to-orange-600 rounded-xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '12px'}}>
<div className="flex justify-between items-start mb-4">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-orange-400" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-orange-400" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="w-8 h-8 rounded-full border-2 border-orange-400 bg-black text-white flex items-center justify-center text-[10px] font-bold">
                    +4k
                  </div>
</div>
<svg className="lucide lucide-quote w-5 h-5 text-black/40 fill-black/20" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<div className="">
<p className="text-lg font-semibold leading-snug tracking-tight max-w-[90%]">
                  "My biological age dropped by 10 years in just 6 months."
                </p>
<div className="mt-4 pt-4 border-t border-black/10 flex items-center gap-2 text-xs font-medium uppercase tracking-wide opacity-70">
<span>Verified Client</span>
<span className="w-1 h-1 bg-black rounded-full"></span>
<span>5.0 Rating</span>
</div>
</div>
</div>
</div>
<div className="hidden lg:block col-span-2"></div>

<div className="col-span-1 lg:col-span-6 flex flex-col justify-end text-right lg:text-left">
<div className="flex items-center gap-2 lg:justify-start justify-end mb-3 text-orange-400 text-xs font-medium uppercase tracking-wider animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both]">
<svg className="lucide lucide-sparkles w-3 h-3" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span>Waitlist Open</span>
</div>
<h2 className="text-4xl lg:text-5xl font-normal tracking-tighter text-white animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both]">
              Next generation
              <span className="text-white/60">human optimization.</span>
</h2>
</div>
</div>
</div>
</div>
<div className="z-10 flex flex-col md:px-10 lg:py-32 w-full max-w-7xl border-white/5 border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">

<div className="flex justify-start mb-12 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both]">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-orange-400 text-sm font-medium tracking-wide uppercase hover:bg-white/10 transition-colors cursor-default">
<svg className="lucide lucide-zap w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4Z"></path>
</svg>
<span className="">The Philosophy</span>
</div>
</div>

<div className="relative animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.4s_both]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[80%] bg-orange-500/10 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
<h3 className="leading-[1.05] md:text-6xl lg:text-7xl text-5xl font-medium text-white/40 tracking-tight max-w-6xl animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.3s_both]">
<span className="text-white">We are a biological intelligence engine</span>
          dedicated to transforming how you
          <span className="text-white">experience life.</span>
          With a team of physicians, geneticists, and trainers, we build protocols
          that empower
          <span className="text-white">ambitious men</span>
          to design, reshape, and reclaim their vitality at the speed of
          science.
        </h3>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 mt-24 pt-12 border-t border-white/5 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.5s_both]">

<div className="flex flex-col gap-2 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.4s_both]">
<div className="md:text-7xl lg:text-8xl leading-none text-6xl font-light text-white tracking-tighter">
            15lbs
          </div>
<div className="text-xl font-medium pl-1 text-neutral-500">
            Muscle Gained Avg
          </div>
</div>

<div className="flex flex-col gap-2 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.5s_both]">
<div className="md:text-7xl lg:text-8xl leading-none text-6xl font-light text-white tracking-tighter">
            99%
          </div>
<div className="text-xl font-medium pl-1 text-neutral-500">
            Client Success
          </div>
</div>

<div className="flex flex-col gap-2 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.6s_both]">
<div className="md:text-7xl lg:text-8xl leading-none text-6xl font-light text-white tracking-tighter">
            10yr
          </div>
<div className="text-xl font-medium pl-1 text-neutral-500">
            Younger Bio-Age
          </div>
</div>

<div className="flex flex-col gap-2 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.7s_both]">
<div className="md:text-7xl lg:text-8xl leading-none text-6xl font-light text-white tracking-tighter">
            4.9
          </div>
<div className="text-xl font-medium pl-1 text-neutral-500">
            Health Score
          </div>
</div>
</div>

<div className="mt-24 animate-on-scroll [animation:fadeSlideIn_1.2s_cubic-bezier(0.2,0.8,0.2,1)_0.8s_both]">
<p className="text-lg font-medium mb-8 uppercase tracking-widest text-center md:text-left text-neutral-500">
          Trusted by high performers at
        </p>
<div className="flex flex-wrap gap-8 md:gap-12 hover:grayscale-0 transition-all duration-500 opacity-60 grayscale gap-x-8 gap-y-8 items-center justify-between">

<svg className="h-8 w-auto fill-white" viewbox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
<text fontFamily="sans-serif" fontSize="20" font-weight="bold" x="0" y="20">WHOOP</text>
</svg>
<svg className="h-8 w-auto fill-white" viewbox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
<text fontFamily="sans-serif" fontSize="20" font-weight="bold" x="0" y="20">OURA</text>
</svg>
<svg className="h-8 w-auto fill-white" viewbox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
<text fontFamily="sans-serif" fontSize="20" font-weight="bold" x="0" y="20">HUBERMAN</text>
</svg>
<svg className="h-8 w-auto fill-white" viewbox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
<text fontFamily="sans-serif" fontSize="20" font-weight="bold" x="0" y="20">EQUINOX</text>
</svg>
</div>
</div>
</div>

<div className="z-10 relative w-full max-w-7xl mx-auto px-6 md:px-10 py-24 lg:py-32 border-t border-white/5">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="relative flex justify-center lg:justify-start group perspective-1000 animate-on-scroll [animation:fadeSlideIn_1.2s_cubic-bezier(0.2,0.8,0.2,1)_0.3s_both]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-orange-500/20 blur-[120px] -z-10 rounded-full opacity-40 pointer-events-none"></div>

<div className="relative w-[340px] h-[680px] bg-[#0a0a0a] border-[6px] border-[#1a1a1a] rounded-[3rem] shadow-2xl overflow-hidden rotate-[-2deg] hover:rotate-0 transition-transform duration-700 ease-out">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-50 flex justify-center items-center"></div>

<div className="flex justify-between items-center px-6 pt-4 pb-2 text-white text-xs font-medium relative z-40">
<span>9:41</span>
<div className="flex gap-1.5 items-center">
<svg fill="currentColor" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2z" opacity=".5"></path>
<path d="M1 1h22v22H1z" fill="none"></path>
</svg>
<div className="w-5 h-3 border border-white/30 rounded-[3px] relative">
<div className="absolute top-0.5 left-0.5 bottom-0.5 right-1 bg-white rounded-[1px]"></div>
</div>
</div>
</div>

<div className="flex justify-between items-center px-5 py-3 border-b border-white/5 bg-[#0a0a0a]/90 backdrop-blur-md sticky top-0 z-30">
<div className="flex items-center gap-1">
<span className="font-instrument-serif font-bold text-xl tracking-tight text-white">
                  Prime
                </span>
<svg className="text-orange-500" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>
<div className="flex gap-4 text-white">
<svg className="lucide lucide-bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
</svg>
</div>
</div>

<div className="flex gap-4 px-5 py-4 overflow-x-hidden border-b border-white/5">

<div className="flex flex-col items-center gap-1.5">
<div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-orange-400 to-pink-600">
<div className="w-full h-full rounded-full bg-black flex items-center justify-center border-2 border-black">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m5 8 6 6"></path>
<path d="m4 14 6-6 2-3"></path>
<path d="M2 5h12"></path>
<path d="M7 2h1"></path>
<path d="m22 22-5-10-5 10"></path>
<path d="M14 17h6"></path>
</svg>
</div>
</div>
<span className="text-[10px] text-neutral-400">Workout</span>
</div>

<div className="flex flex-col items-center gap-1.5">
<div className="bg-neutral-800 w-14 h-14 rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px]">
<div className="w-full h-full rounded-full bg-black flex items-center justify-center border-2 border-black">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M3.2 14.7a1 1 0 0 0 1.6 0l.6-.8a1 1 0 0 1 1.6 0l.6.8a1 1 0 0 0 1.6 0l.6-.8a1 1 0 0 1 1.6 0l.6.8a1 1 0 0 0 1.6 0l.6-.8a1 1 0 0 1 1.6 0l.6.8a1 1 0 0 0 1.6 0"></path>
<path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7"></path>
<path d="M22 13v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5"></path>
</svg>
</div>
</div>
<span className="text-[10px] text-neutral-400">Diet</span>
</div>

<div className="flex flex-col items-center gap-1.5">
<div className="bg-neutral-800 w-14 h-14 rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px]">
<div className="w-full h-full rounded-full bg-black flex items-center justify-center border-2 border-black">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12h5"></path>
<path d="M17 12h5"></path>
<path d="M7 12a5 5 0 0 1 5-5"></path>
<path d="M12 7a5 5 0 0 1 5 5"></path>
<path d="M12 7V3"></path>
<path d="M12 21v-4"></path>
<path d="M7 12v9"></path>
<path d="M17 12v9"></path>
</svg>
</div>
</div>
<span className="text-[10px] text-neutral-400">Sleep</span>
</div>
</div>

<div className="flex flex-col pb-20">

<div className="flex justify-between items-center px-4 py-3">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 bg-neutral-800 flex items-center justify-center border-white/10 border rounded-full text-xs font-bold">PR</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-white">
                      Prime_Official
                    </span>
<span className="text-[10px] text-neutral-500">Sponsored</span>
</div>
</div>
<svg className="text-white" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="5" cy="12" fill="currentColor" r="2"></circle>
<circle cx="12" cy="12" fill="currentColor" r="2"></circle>
<circle cx="19" cy="12" fill="currentColor" r="2"></circle>
</svg>
</div>

<div className="w-full aspect-square bg-[#111] relative overflow-hidden group">
<img alt="Gym" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-4 left-4 px-3 py-1 bg-black/60 backdrop-blur border border-white/10 rounded-full flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
<span className="text-[10px] font-medium text-white">
                    Testosterone Optimized
                  </span>
</div>
</div>

<div className="flex bg-gradient-to-b from-orange-400 to-orange-600 px-4 py-2.5 items-center justify-between">
<span className="text-xs font-semibold text-white">
                  Join the Program
                </span>
<svg className="text-white" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>

<div className="flex justify-between items-center px-4 py-3">
<div className="flex gap-4 text-white">
<svg className="lucide lucide-heart" fill="none" height="24" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
<svg className="lucide lucide-message-circle" fill="none" height="24" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
</div>
</div>
<div className="px-4 pb-4">
<p className="text-sm font-semibold text-white">45,210 likes</p>
<p className="text-sm text-neutral-300 mt-1">
<span className="font-semibold text-white">Prime_Official</span>
                  Day 1 vs Day 1000. Trust the process.
                  <span className="text-blue-400">#GlowUp #Transformation</span>
</p>
</div>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full"></div>
</div>
</div>

<div className="flex flex-col justify-center gap-2 pl-0 lg:pl-12">

<div className="flex flex-col gap-2 pb-8 border-b border-white/5 animate-on-scroll [animation:fadeSlideIn_0.8s_cubic-bezier(0.2,0.8,0.2,1)_0.4s_both]">
<div className="text-5xl md:text-6xl font-medium text-white tracking-tight">
              34+
            </div>
<div className="text-lg text-neutral-500 font-medium">
              Biomarkers Tracked
            </div>
</div>

<div className="flex flex-col gap-2 py-8 border-b border-white/5 animate-on-scroll [animation:fadeSlideIn_0.8s_cubic-bezier(0.2,0.8,0.2,1)_0.5s_both]">
<div className="text-5xl md:text-6xl font-medium text-white tracking-tight">
              100%
            </div>
<div className="text-lg text-neutral-500 font-medium">
              Natural Protocols
            </div>
</div>

<div className="flex flex-col gap-2 py-8 border-b border-white/5 animate-on-scroll [animation:fadeSlideIn_0.8s_cubic-bezier(0.2,0.8,0.2,1)_0.6s_both]">
<div className="text-5xl md:text-6xl font-medium text-white tracking-tight">
              1,800%
            </div>
<div className="text-lg text-neutral-500 font-medium">
              Confidence Lift
            </div>
</div>

<div className="flex flex-col gap-2 pt-8 animate-on-scroll [animation:fadeSlideIn_0.8s_cubic-bezier(0.2,0.8,0.2,1)_0.7s_both]">
<div className="text-5xl md:text-6xl font-medium text-white tracking-tight">
              2,500
            </div>
<div className="text-lg text-neutral-500 font-medium">
              Active Members
            </div>
</div>
</div>
</div>
</div>
<div className="z-10 relative w-full max-w-7xl mx-auto px-6 md:px-10 py-24 lg:py-32 border-t border-white/5">

<div className="flex flex-col md:flex-row justify-between md:items-end mb-20 gap-8">
<h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-white animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both]">
          Success Stories
        </h2>
<div className="flex items-center gap-2 text-sm font-medium text-neutral-500 mb-1 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.3s_both]">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
<span className="uppercase tracking-widest text-xs">Case Studies</span>
</div>
</div>

<div className="flex flex-col w-full border-t border-white/5">

<div className="group relative border-b border-white/5 transition-colors duration-300 hover:bg-white/[0.02] cursor-pointer">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-8 pb-8 gap-x-6 gap-y-6 items-center">
<div className="col-span-1 md:col-span-3">
<span className="text-xs font-semibold tracking-widest uppercase text-neutral-500 group-hover:text-white transition-colors">
                Executive
              </span>
</div>
<div className="col-span-1 md:col-span-8 flex items-center gap-3">
<span className="text-lg font-semibold tracking-tight text-white">
                John D. - CEO
              </span>
</div>
<div className="col-span-1 flex justify-end">
<svg className="w-6 h-6 text-neutral-600 group-hover:text-white transition-colors" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="currentColor" fillOpacity="0.1" r="10"></circle>
<path d="M10 16L14 12L10 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</div>

<div className="group relative border-b border-white/5 transition-colors duration-300 hover:bg-white/[0.02] cursor-pointer">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-8 pb-8 gap-x-6 gap-y-6 items-center">
<div className="col-span-1 md:col-span-3">
<span className="text-xs font-semibold tracking-widest uppercase text-neutral-500 group-hover:text-white transition-colors">
                Athlete
              </span>
</div>
<div className="col-span-1 md:col-span-8 flex items-center gap-3">
<span className="text-lg font-semibold tracking-tight text-white">
                Sarah M. - Pro Triathlete
              </span>
</div>
<div className="col-span-1 flex justify-end">
<svg className="w-6 h-6 text-neutral-600 group-hover:text-white transition-colors" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="currentColor" fillOpacity="0.1" r="10"></circle>
<path d="M10 16L14 12L10 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</div>

<div className="border-white/5 border-b relative">

<div className="grid grid-cols-1 md:grid-cols-12 cursor-pointer pt-8 pb-8 gap-x-6 gap-y-6 items-start">
<div className="col-span-1 md:col-span-3 flex flex-col gap-1">
<span className="text-xs font-semibold tracking-widest uppercase text-orange-500">
                Founder
              </span>
<span className="text-[10px] font-medium text-neutral-500">
                5 Year Transformation
              </span>
</div>
<div className="col-span-1 md:col-span-8 flex items-center gap-3">
<span className="text-lg font-semibold tracking-tight text-white">
                Alex K. - "The Titan Protocol"
              </span>
</div>
<div className="col-span-1 flex justify-end">
<svg className="w-6 h-6 text-white" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="currentColor" fillOpacity="0.2" r="10"></circle>
<path d="M8 12H16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 pb-12 gap-x-8 gap-y-8">
<div className="hidden md:block col-span-3 relative">
<div className="absolute right-8 top-0 bottom-4 w-px bg-gradient-to-b from-white/10 to-transparent"></div>
</div>
<div className="col-span-1 md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-8 pr-4 pl-4 md:pl-0">
<div className="flex flex-col gap-3">
<span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                  2018 Baseline
                </span>
<p className="text-sm leading-relaxed text-neutral-300">
                  Struggled with
                  <span className="text-white font-medium">
                    chronic fatigue
                  </span>
                  and weight gain. Testosterone levels were in the low 300s. No clear direction.
                </p>
</div>
<div className="flex flex-col gap-3">
<span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                  Protocol
                </span>
<p className="text-sm leading-relaxed text-neutral-300">
                  Implemented Prime's foundational hormone optimization, 
                  <span className="text-white font-medium">metabolic reset</span>
                  and progressive strength conditioning.
                </p>
</div>
<div className="flex flex-col gap-3">
<span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                  2023 Result
                </span>
<p className="text-sm leading-relaxed text-neutral-300">
                  Achieved a
                  <span className="text-orange-400 font-semibold">
                    complete aesthetic overhaul
                  </span>
                  . Muscle mass up 20lbs, body fat down 12%. Biological age reversed by 8 years.
                </p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="overflow-hidden group bg-[#050505] w-full border-white/5 border-t relative">
<div className="pointer-events-none z-0 absolute top-0 right-0 bottom-0 left-0">
<div className="opacity-30 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80"></div>
<div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-0 flex flex-col min-h-[85vh] justify-between">
<div className="flex flex-col md:flex-row justify-between items-start w-full gap-12 border-b border-white/5 pb-12 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both]">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
<svg className="lucide lucide-mail" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
</div>
<span className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400">
              Start Transformation
            </span>
</div>
<div className="flex flex-wrap gap-8 md:gap-12 text-xs font-semibold tracking-widest uppercase text-neutral-500">
<a className="hover:text-white transition-colors duration-300" href="#">
              Disclaimer
            </a>
<a className="hover:text-white transition-colors duration-300" href="#">
              Terms
            </a>
<span className="text-neutral-700">@2025 Prime Evolution.</span>
</div>
</div>
<div className="flex flex-col gap-6 mt-16 mb-auto relative">
<div className="group/item relative flex flex-col items-start w-fit">
<a className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-white group-hover/item:to-neutral-500 transition-all duration-500 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.3s_both]" href="tel:+18005550199">
              +1 800 555 0199
            </a>
</div>
<div className="group/item relative flex flex-col items-start w-fit animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.5s_both]">
<a className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-white group-hover/item:to-neutral-500 transition-all duration-500 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.4s_both]" href="mailto:hello@prime.ai">
              HELLO@PRIME.AI
            </a>
</div>
</div>
<div className="relative w-full mt-12 select-none overflow-hidden">
<h1 className="text-[17vw] leading-[0.75] font-bold tracking-tighter text-center md:text-left text-white mix-blend-overlay opacity-90 pointer-events-none animate-on-scroll [animation:fadeSlideIn_1.5s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both]">
            PRIME
          </h1>
<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050505] to-transparent"></div>
</div>
</div>
</div>


    </>
  );
}
