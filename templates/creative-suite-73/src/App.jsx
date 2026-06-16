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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


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
                  // Calculate offset logic for non-active cards
                  // Simple approach: Push others back based on distance from active or just stack them
                  // If we want a consistent stack:
                  // If active is 1: 2 is middle, 3 is back
                  // If active is 2: 3 is middle, 1 is back (or vice versa depending on rotation logic)
                  // Let's do a "Rotate" feel: Previous moves to bottom, Next moves to middle.

                  let position = 0; // 0 = active (handled above), 1 = middle, 2 = bottom

                  // Determine stack order relative to active
                  // logic: (id - activeId + 3) % 3
                  // If active=1: id=2 is (2-1+3)%3 = 1 (middle). id=3 is (3-1+3)%3 = 2 (bottom).
                  // If active=2: id=3 is (3-2+3)%3 = 1 (middle). id=1 is (1-2+3)%3 = 2 (bottom).

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
          // Add hover logic for icon visibility via group-hover classes in HTML, just reset base state here

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
      


<div className="fixed z-0 top-0 right-0 bottom-0 left-0 gap-x-8 gap-y-8" style={{}}>
<img alt="Landscape" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2b5079f4-4ddd-433b-a936-fc8f7dea9df0_3840w.webp" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/60 to-[#050505]"></div>
<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/10 via-[#050505]/0 to-[#050505]/0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="aura-background-component fixed -z-10 mix-blend-screen w-full h-screen top-0 hue-rotate-90 saturate-50 gap-x-8 gap-y-8" data-alpha-mask="80" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div></div>

<div className="flex-1 flex flex-col w-full max-w-7xl mr-auto ml-auto relative">


<div className="flex-1 grid grid-cols-1 lg:grid-cols-12 pt-24 pb-10 gap-x-4 gap-y-4 items-center">

<div className="col-span-1 lg:col-span-6 pl-6 md:pl-10 pt-10 lg:pt-0 flex flex-col justify-center">
<h1 className="md:text-7xl lg:text-8xl leading-[0.9] animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both] animate text-6xl text-white tracking-tighter mb-6 font-sans font-bold" style={{}}>AI changes the <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-500 font-sans font-bold" style={{}}>rules.</span></h1>
</div>

</div>

<div className="md:px-10 mt-32 pt-4 pb-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-8 items-end">

<div className="col-span-1 lg:col-span-4 relative group animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both] animate">
<div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" style={{}}></div>
<div className="flex flex-col min-h-[180px] transition-transform hover:-translate-y-1 duration-300 text-black bg-gradient-to-b from-orange-400 to-orange-600 rounded-xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '12px'}}>
<div className="flex justify-between items-start mb-4">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-orange-400" src="https://i.pravatar.cc/100?img=12" style={{}}/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-orange-400" src="https://i.pravatar.cc/100?img=32"/>
<div className="w-8 h-8 rounded-full border-2 border-orange-400 bg-black text-white flex items-center justify-center text-[10px] font-bold font-sans" style={{}}>
                    +2k
                  </div>
</div>
<svg className="lucide lucide-quote w-5 h-5 text-black/40 fill-black/20" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<div className="">
<p className="text-lg font-semibold leading-snug tracking-tight max-w-[80%] font-sans" style={{}}>
                  "Lumina changed my entire workflow."
                </p>
<div className="mt-4 pt-4 border-t border-black/10 flex items-center gap-2 text-xs font-medium uppercase tracking-wide opacity-70">
<span className="font-sans" style={{}}>Verified Creator</span>
<span className="w-1 h-1 bg-black rounded-full"></span>
<span className="font-sans" style={{}}>5.0 Rating</span>
</div>
</div>
</div>
</div>
<div className="hidden lg:block col-span-2"></div>

<div className="col-span-1 lg:col-span-6 flex flex-col justify-end text-right lg:text-left">
<div className="flex items-center gap-2 lg:justify-start justify-end mb-3 text-orange-400 text-xs font-medium uppercase tracking-wider animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both] animate">
<svg className="lucide lucide-sparkles w-3 h-3" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="font-sans" style={{}}>Version 2.0 Available</span>
</div>
<h2 className="text-4xl lg:text-5xl tracking-tighter text-white animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both] animate font-sans font-bold" style={{}}>
              Next generation
              <span className="text-white/60 font-sans font-bold" style={{}}>creative suite.</span>
</h2>
</div>
</div>
</div>
<div className="flex-1 flex flex-col w-full max-w-7xl mr-auto ml-auto relative">


<div className="flex-1 grid grid-cols-1 lg:grid-cols-12 pt-24 pb-10 gap-x-4 gap-y-4 items-center">

<div className="col-span-1 lg:col-span-6 pl-6 md:pl-10 pt-10 lg:pt-0 flex flex-col justify-center">
<h1 className="md:text-7xl lg:text-8xl leading-[0.9] animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both] animate text-6xl text-white tracking-tighter mb-6 font-sans font-bold" style={{}}>AI changes the <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-500 font-sans font-bold" style={{}}>rules.</span></h1>
</div>

</div>

</div></div><div className="fixed z-0 pointer-events-none flex opacity-60 w-full max-w-7xl border-white/5 border-r mr-auto ml-auto top-0 right-0 bottom-0 left-0 gap-x-8 gap-y-8">

<div className="flex-1 overflow-hidden h-full border-white/5 border-l relative">
<span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono font-sans" style={{}}>
          01
        </span>
</div>

<div className="flex-1 border-l border-white/5 h-full relative overflow-hidden">
<div className="absolute top-0 -left-[1px] w-[1px] h-64 bg-gradient-to-b from-transparent via-orange-500/60 to-transparent animate-beam-1"></div>
<span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono font-sans" style={{}}>
          02
        </span>
</div>

<div className="flex-1 border-l border-white/5 h-full flex justify-center relative overflow-hidden">
<div className="absolute top-0 -left-[1px] w-[1px] h-96 bg-gradient-to-b from-transparent via-orange-500/80 to-transparent animate-beam-2"></div>
<div className="h-full border-r border-dashed border-orange-500/20 w-px"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-64 bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-beam-1" style={{animationDelay: '1.5s'}}></div>
<div className="absolute bottom-[30%] translate-y-1/2 text-orange-500/80 rotate-90">
<svg className="lucide lucide-play w-4 h-4 fill-current" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
<span className="absolute bottom-8 text-orange-500/30 text-xs font-mono font-sans" style={{}}>
          03
        </span>
</div>

<div className="flex-1 border-l border-white/5 h-full relative overflow-hidden">
<div className="absolute top-0 -left-[1px] w-[1px] h-48 bg-gradient-to-b from-transparent via-orange-500/60 to-transparent animate-beam-3"></div>
<span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono font-sans" style={{}}>
          04
        </span>
</div>

<div className="flex-1 border-l border-white/5 h-full relative overflow-hidden">
<span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono font-sans" style={{}}>
          05
        </span>
</div>
</div>
<div className="z-10 flex flex-col md:px-10 lg:py-32 w-full max-w-7xl border-white/5 border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">

<div className="flex justify-start mb-12 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both] [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.3s_both] [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.4s_both]">
</div>

<div className="relative animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.4s_both] [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.5s_both]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[80%] bg-orange-500/10 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
<h3 className="leading-[1.05] md:text-6xl lg:text-7xl animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.3s_both] text-5xl text-white/40 tracking-tight max-w-6xl font-sans font-bold" style={{}}> How we work is being rewritten right now. The changes are massive and are happening at tremendous speed. <span className="text-white font-sans font-bold" style={{}}>Work is being restructured at its core. </span> Capabilities that defined success in the past are no longer relevant, while new competitive advantages are emerging, under conditions that are not yet fully visible. </h3>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 mt-24 pt-12 border-t border-white/5 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.5s_both] [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.6s_both]">

<div className="flex flex-col gap-2 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.4s_both]">
<div className="md:text-7xl lg:text-8xl leading-none text-6xl text-white tracking-tighter font-sans font-bold" style={{}}>
            $500M
          </div>
<div className="text-xl font-medium pl-1 text-neutral-500 font-sans" style={{}}>
            Creator Revenue
          </div>
</div>

<div className="flex flex-col gap-2 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.5s_both]">
<div className="md:text-7xl lg:text-8xl leading-none text-6xl text-white tracking-tighter font-sans font-bold" style={{}}>
            99%
          </div>
<div className="text-xl font-medium pl-1 text-neutral-500 font-sans" style={{}}>
            Client Satisfaction
          </div>
</div>

<div className="flex flex-col gap-2 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.6s_both]">
<div className="md:text-7xl lg:text-8xl leading-none text-6xl text-white tracking-tighter font-sans font-bold" style={{}}>
            2M+
          </div>
<div className="text-xl font-medium pl-1 text-neutral-500 font-sans" style={{}}>
            Videos Generated
          </div>
</div>

<div className="flex flex-col gap-2 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.7s_both]">
<div className="md:text-7xl lg:text-8xl leading-none text-6xl text-white tracking-tighter font-sans font-bold" style={{}}>
            4.9
          </div>
<div className="text-xl font-medium pl-1 text-neutral-500 font-sans" style={{}}>
            Average Rating
          </div>
</div>
</div>

</div>
<div className="z-10 md:px-10 lg:py-32 w-full max-w-7xl border-white/5 border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">

<div className="flex-1 flex flex-col md:px-10 w-full max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-32 pl-6 relative">

<div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 gap-x-12 gap-y-12 items-start">

<div className="col-span-1 md:col-span-3 lg:col-span-2 md:sticky md:top-32 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.1s_both]">
<div className="inline-flex items-center gap-3 border border-orange-500/20 bg-orange-500/5 px-3 py-1 rounded-full backdrop-blur-md">
<div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
<span className="text-xs font-mono font-medium tracking-widest text-orange-500 font-sans" style={{}}>EN</span>
</div>
</div>

<div className="col-span-1 md:col-span-9 lg:col-span-8 flex flex-col gap-24 lg:pt-0 pt-8">

<div className="flex flex-col gap-6 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both]">
<h1 className="md:text-6xl lg:text-7xl leading-[0.95] text-5xl text-white tracking-tighter font-sans font-bold" style={{}}>AI changes the rules.</h1>
<div className="h-px w-24 bg-gradient-to-r from-orange-500 to-transparent"></div>
<p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-2xl font-sans" style={{}}>
              How we work is being rewritten right now. The changes are massive and are happening at tremendous speed. Work is being restructured at its core. Capabilities that defined success in the past are no longer relevant, while new competitive advantages are emerging, under conditions that are not yet fully visible.
            </p>
</div>

<div className="flex flex-col gap-6 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both]">
<h2 className="text-4xl md:text-5xl tracking-tighter text-white font-sans font-bold" style={{}}>
              Understand fast.
            </h2>
<p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-2xl font-sans" style={{}}>
              Market leadership, stability, and security can no longer be taken for granted. Adaptability and continuous learning are decisive in the transition currently underway. Access to technology, knowledge, and practical work environments is essential — without it, disorientation and exclusion are inevitable for individuals and organizations alike.
            </p>
</div>

<div className="flex flex-col gap-6 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both]">
<h2 className="text-4xl md:text-5xl tracking-tighter text-white font-sans font-bold" style={{}}>
              Act with intention.
            </h2>
<p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-2xl font-sans" style={{}}>
              The future cannot be predicted, but participation remains possible when one knows how. We know the way and provide orientation. Those who engage from the start, learn fast, and act consistently and with knowledge shape outcomes, rather than being shaped by them.
            </p>
</div>

<div className="flex flex-col gap-6 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both]">
<h2 className="text-4xl md:text-5xl tracking-tighter text-white font-sans font-bold" style={{}}>
              We leave no partner behind.
            </h2>
<p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-2xl font-sans" style={{}}>
              Performance Workspace supports the global transition of work in the age of artificial intelligence by providing tools, structure, and a stable environment to adapt, grow, and remain an active part of the future of work.
            </p>
</div>
</div>
</div>
</div><div className="flex flex-col md:flex-row md:items-end gap-8 mb-20 justify-between">
<h2 className="md:text-6xl animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both] text-5xl text-white tracking-tighter font-sans font-bold" style={{}}>
          Success Stories
        </h2>
<div className="flex gap-2 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.3s_both] text-sm font-medium text-neutral-500 mb-1 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
<span className="uppercase tracking-widest text-xs font-sans" style={{}}>Case Studies</span>
</div>
</div>

<div className="flex flex-col w-full border-t border-white/5">

<div className="group relative border-b border-white/5 transition-colors duration-300 hover:bg-white/[0.02] cursor-pointer">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-8 pb-8 gap-x-6 gap-y-6 items-center">
<div className="col-span-1 md:col-span-3">
<span className="text-xs font-semibold tracking-widest uppercase text-neutral-500 group-hover:text-white transition-colors font-sans" style={{}}>
                Fintech
              </span>
</div>
<div className="col-span-1 md:col-span-8 flex items-center gap-3">

<svg className="h-6 w-auto text-white opacity-80 group-hover:opacity-100 transition-opacity" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect fill="currentColor" fillOpacity="0.2" height="12" rx="2" width="20" x="2" y="6"></rect>
<path d="M2 10H22" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M6 14H10" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
<span className="text-lg font-semibold tracking-tight text-white font-sans" style={{}}>
                Midday Financial
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
<span className="text-xs font-semibold tracking-widest uppercase text-neutral-500 group-hover:text-white transition-colors font-sans" style={{}}>
                Infrastructure
              </span>
</div>
<div className="col-span-1 md:col-span-8 flex items-center gap-3">

<svg className="h-5 w-auto text-white opacity-80 group-hover:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 1L24 22H0L12 1Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-lg font-semibold tracking-tight text-white font-sans" style={{}}>
                Vercel
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
<div className="grid grid-cols-1 md:grid-cols-12 pt-8 pb-8 gap-x-6 gap-y-6 items-center">
<div className="col-span-1 md:col-span-3">
<span className="text-xs font-semibold tracking-widest uppercase text-neutral-500 group-hover:text-white transition-colors font-sans" style={{}}>
                Database
              </span>
</div>
<div className="col-span-1 md:col-span-8 flex items-center gap-3">

<svg className="h-6 w-auto text-white opacity-80 group-hover:opacity-100 transition-opacity" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2L5 11H11L9 22L17 13H11L13 2Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-lg font-semibold tracking-tight text-white font-sans" style={{}}>
                Supabase
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
<span className="text-xs font-semibold tracking-widest uppercase text-orange-500 font-sans" style={{}}>
                Productivity
              </span>
<span className="text-[10px] font-medium text-neutral-500 font-sans" style={{}}>
                48 Workflows Optimized
              </span>
</div>
<div className="col-span-1 md:col-span-8 flex items-center gap-3">

<svg className="h-6 w-auto text-white" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" fillOpacity="0.2"></path>
<path d="M8 8L16 16M16 8L8 16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-lg font-semibold tracking-tight text-white font-sans" style={{}}>
                Linear Systems
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
<span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 font-sans" style={{}}>
                  Challenge
                </span>
<p className="text-sm leading-relaxed text-neutral-300 font-sans" style={{}}>
                  Internal fragmentation led to
                  <span className="text-white font-medium font-sans" style={{}}>
                    siloed decision-making
                  </span>
                  and slower release cycles across distributed engineering
                  teams.
                </p>
</div>
<div className="flex flex-col gap-3">
<span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 font-sans" style={{}}>
                  Solution
                </span>
<p className="text-sm leading-relaxed text-neutral-300 font-sans" style={{}}>
                  Deployed Lumina's collaborative engine to synchronize
                  <span className="text-white font-medium font-sans" style={{}}>asset pipelines</span>
                  and automate status reporting in real-time.
                </p>
</div>
<div className="flex flex-col gap-3">
<span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 font-sans" style={{}}>
                  Result
                </span>
<p className="text-sm leading-relaxed text-neutral-300 font-sans" style={{}}>
                  Achieved a
                  <span className="text-orange-400 font-semibold font-sans" style={{}}>
                    40% reduction
                  </span>
                  in meeting times and doubled the velocity of feature shipments
                  within Q3.
                </p>
</div>
</div>
</div>
</div>
</div>
</div><div className="z-10 md:px-10 lg:py-32 w-full max-w-7xl border-white/5 border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="relative flex justify-center lg:justify-start group perspective-1000 animate-on-scroll [animation:fadeSlideIn_1.2s_cubic-bezier(0.2,0.8,0.2,1)_0.3s_both]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-orange-500/20 blur-[120px] -z-10 rounded-full opacity-40 pointer-events-none"></div>

<div className="relative w-[340px] h-[680px] bg-[#0a0a0a] border-[6px] border-[#1a1a1a] rounded-[3rem] shadow-2xl overflow-hidden rotate-[-2deg] hover:rotate-0 transition-transform duration-700 ease-out">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-50 flex justify-center items-center"></div>

<div className="flex justify-between items-center px-6 pt-4 pb-2 text-white text-xs font-medium relative z-40">
<span className="font-sans" style={{}}>9:41</span>
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
<span className="font-bold text-xl tracking-tight text-white font-sans" style={{}}>
                  Lumina
                </span>
<svg className="text-orange-500" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" fill="currentColor"></path>
</svg>
</div>
<div className="flex gap-4 text-white">

<svg className="" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12z" fill="currentColor" opacity="0.5"></path>
<path className="" d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12z" fill="currentColor" opacity="0.2"></path>
</svg>

<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5.025.45.79.196 1.75-.463 2.46A2.966 2.966 0 0 0 2.36 22H12z" fill="currentColor" opacity="0.5"></path>
<path d="M16.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-4.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-4.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="currentColor"></path>
</svg>
</div>
</div>

<div className="flex gap-4 px-5 py-4 overflow-x-hidden border-b border-white/5">

<div className="flex flex-col items-center gap-1.5">
<div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-orange-400 to-pink-600">
<div className="w-full h-full rounded-full bg-black flex items-center justify-center border-2 border-black">
<svg className="text-white fill-current w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="solar" data-solar="wallpaper-bold-duotone" height="24" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15.721 7.349a1.86 1.86 0 1 1-3.72 0a1.86 1.86 0 0 1 3.72 0" fill="#ffffff"></path>
<path clip-rule="evenodd" d="M16.086 2.108C15.279 2 14.254 2 12.982 2h-1.963c-1.272 0-2.298 0-3.104.108c-.837.113-1.542.354-2.102.914s-.801 1.265-.914 2.102c-.108.806-.108 1.832-.108 3.104v7.544c0 1.272 0 2.298.108 3.104c.113.837.354 1.542.914 2.102s1.265.801 2.102.914C8.721 22 9.747 22 11.019 22h1.963c1.272 0 2.297 0 3.104-.108c.837-.113 1.542-.354 2.102-.914s.8-1.265.913-2.102c.109-.806.109-1.832.109-3.104V8.228c0-1.272 0-2.298-.109-3.104c-.112-.837-.353-1.542-.913-2.102s-1.265-.801-2.102-.914m.723 14.522l.986 1.04c.019-.536.02-1.175.02-1.95V8.28c0-1.336-.002-2.267-.097-2.97c-.091-.683-.26-1.044-.517-1.302c-.257-.257-.619-.425-1.301-.517c-.703-.094-1.634-.096-2.97-.096h-1.86c-1.335 0-2.266.002-2.97.096c-.682.092-1.043.26-1.3.517c-.258.258-.426.62-.518 1.302c-.094.703-.096 1.634-.096 2.97v4.624l.004-.003c.916-.941 2.335-.876 3.183.118l2.94 3.448c.236.276.546.289.783.093l.205-.169c1.076-.886 2.551-.77 3.508.24" fill="#ffffff" fill-rule="evenodd"></path>
<path d="M5.016 4.5H5c-.465 0-.697 0-.891.03A2.5 2.5 0 0 0 2.03 6.61C2 6.803 2 7.035 2 7.5v9c0 .465 0 .697.03.891a2.5 2.5 0 0 0 2.08 2.079c.194.031.426.031.891.031h.016a6 6 0 0 1-.117-.624c-.108-.806-.108-1.832-.108-3.104V8.228c0-1.272 0-2.298.108-3.104q.043-.325.117-.624m13.968 15q.074-.299.116-.624c.109-.806.109-1.832.109-3.104V8.228c0-1.272 0-2.298-.109-3.104a6 6 0 0 0-.116-.624H19c.465 0 .697 0 .891.03a2.5 2.5 0 0 1 2.079 2.08c.031.194.031.426.031.891v9c0 .465 0 .697-.03.891a2.5 2.5 0 0 1-2.079 2.078c-.194.031-.426.031-.891.031z" fill="#ffffff" opacity=".5"></path>
</svg>
</div>
</div>
<span className="text-[10px] text-neutral-400 font-sans" style={{}}>News</span>
</div>

<div className="flex flex-col items-center gap-1.5">
<div className="bg-neutral-800 w-14 h-14 rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px]">
<div className="w-full h-full rounded-full bg-black flex items-center justify-center border-2 border-black">
<svg className="fill-current w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="solar" data-solar="ruler-bold-duotone" height="24" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 15.616c0 .847.682 1.529 2.045 2.892l1.447 1.447C6.855 21.318 7.537 22 8.384 22s1.53-.682 2.893-2.045l8.678-8.678C21.318 9.913 22 9.23 22 8.384s-.682-1.529-2.045-2.892l-1.447-1.447C17.145 2.682 16.463 2 15.616 2c-.754 0-1.376.54-2.464 1.618l-1.05 1.048l-1.072 1.073l-1.05 1.048L8.91 7.86L7.86 8.909L6.788 9.98L5.74 11.03l-1.073 1.073l-1.048 1.049C2.539 14.24 2 14.862 2 15.616" fill="#ffffff" opacity=".5"></path>
<path d="M13.238 3.691a1 1 0 0 0-.086-.073l-1.049 1.048q.033.045.074.086l1.414 1.414a.75.75 0 0 0 1.06-1.06zm-2.122 2.122a1 1 0 0 0-.086-.074L9.982 6.787q.033.045.074.086l2.121 2.122a.75.75 0 0 0 1.06-1.061zM8.995 7.934a1 1 0 0 0-.086-.074L7.86 8.908q.033.046.074.087l1.415 1.414a.75.75 0 1 0 1.06-1.06zm-2.121 2.121a1 1 0 0 0-.086-.074L5.739 11.03q.033.045.074.086l2.121 2.121a.75.75 0 1 0 1.061-1.06zm-2.122 2.122a1 1 0 0 0-.086-.075l-1.048 1.05q.033.045.074.085l1.414 1.414a.75.75 0 1 0 1.06-1.06z" fill="#ffffff"></path>
</svg>
</div>
</div>
<span className="text-[10px] text-neutral-400 font-sans" style={{}}>Updates</span>
</div>

<div className="flex flex-col items-center gap-1.5">
<div className="bg-neutral-800 w-14 h-14 rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px]">
<div className="flex bg-black w-full h-full border-black border-2 rounded-full items-center justify-center">
<svg className="fill-current w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="solar" data-solar="file-check-bold-duotone" height="24" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22" fill="#ffffff" fill-rule="evenodd" opacity=".5"></path>
<path d="M10.56 15.498a.75.75 0 1 0-1.12-.996l-2.107 2.37l-.772-.87a.75.75 0 0 0-1.122.996l1.334 1.5a.75.75 0 0 0 1.12 0zm.95-13.238l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z" fill="#ffffff"></path>
</svg>
</div>
</div>
<span className="text-[10px] text-neutral-400 font-sans" style={{}}>Verified</span>
</div>

<div className="flex flex-col items-center gap-1.5">
<div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-orange-400 to-pink-600">
<div className="w-full h-full rounded-full bg-black flex items-center justify-center border-2 border-black">
<div className="text-[9px] font-bold text-white font-sans" style={{}}>New</div>
</div>
</div>
<span className="text-[10px] text-neutral-400 font-sans" style={{}}>Feature</span>
</div>
</div>

<div className="flex flex-col pb-20">

<div className="flex justify-between items-center px-4 py-3">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/00c67fef-ab0b-47aa-b2ca-4b8a84c0382c_320w.webp)] bg-cover bg-center border-white/10 border rounded-full"></div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-white font-sans" style={{}}>
                      Lumina_official
                    </span>
<span className="text-[10px] text-neutral-500 font-sans" style={{}}>Sponsored</span>
</div>
</div>
<svg className="text-white" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="5" cy="12" fill="currentColor" r="2"></circle>
<circle cx="12" cy="12" fill="currentColor" r="2"></circle>
<circle cx="19" cy="12" fill="currentColor" r="2"></circle>
</svg>
</div>

<div className="w-full aspect-square bg-[#111] relative overflow-hidden group">

<div className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b02f3053-26c7-4f46-a379-f073cacac0f0_800w.webp)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-orange-500/30 rounded-full blur-2xl"></div>
<div className="flex overflow-hidden border-white/5 border rounded-xl absolute top-8 right-8 bottom-8 left-8 items-center justify-center">
<div className="transform group-hover:rotate-6 transition-transform duration-700 bg-gradient-to-b from-white/10 via-white/0 to-white/10 w-24 h-24 rounded-2xl shadow-[0_5.7px_8.6px_rgba(0,_0,_0,_0.07),_0_13.7px_10.9px_rgba(0,_0,_0,_0.099),_0_25.7px_20.5px_rgba(0,_0,_0,_0.123),_0_45.8px_36.6px_rgba(0,_0,_0,_0.147),_0_85.8px_68.5px_rgba(0,_0,_0,_0.176),_0_205px_163.4px_rgba(0,_0,_0,_0.246)] backdrop-blur-md rotate-12" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '16px'}}></div>
<div className="transform group-hover:-rotate-3 transition-transform duration-700 bg-gradient-to-b from-white/10 via-white/0 to-white/10 w-24 h-24 rounded-2xl absolute shadow-[0_5.7px_8.6px_rgba(0,_0,_0,_0.07),_0_13.7px_10.9px_rgba(0,_0,_0,_0.099),_0_25.7px_20.5px_rgba(0,_0,_0,_0.123),_0_45.8px_36.6px_rgba(0,_0,_0,_0.147),_0_85.8px_68.5px_rgba(0,_0,_0,_0.176),_0_205px_163.4px_rgba(0,_0,_0,_0.246)] backdrop-blur-md translate-x-4 translate-y-4 -rotate-6" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '16px'}}></div>
</div>

<div className="absolute bottom-4 left-4 px-3 py-1 bg-black/60 backdrop-blur border border-white/10 rounded-full flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
<span className="text-[10px] font-medium text-white font-sans" style={{}}>
                    AI Generated
                  </span>
</div>
</div>

<div className="flex bg-gradient-to-b from-orange-400 to-orange-600 px-4 py-2.5 items-center justify-between">
<span className="text-xs font-semibold text-white font-sans" style={{}}>
                  Try Lumina for free
                </span>
<svg className="text-white" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>

<div className="flex justify-between items-center px-4 py-3">
<div className="flex gap-4 text-white">

<svg className="" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12z" fill="currentColor" opacity="0.5"></path>
<path d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12z" fill="currentColor" opacity="0.2"></path>
</svg>

<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5.025.45.79.196 1.75-.463 2.46A2.966 2.966 0 0 0 2.36 22H12z" fill="currentColor" opacity="0.5"></path>
<path d="M16.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-4.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-4.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="currentColor"></path>
</svg>

<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 5.523 4.477 10 10 10z" fill="currentColor" opacity="0.5"></path>
<path d="M14.293 8.293a1 1 0 0 1 1.414 1.414l-2.293 2.293h3.586a1 1 0 1 1 0 2h-3.586l2.293 2.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4z" fill="currentColor"></path>
</svg>
</div>

<svg className="text-white" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-7-4.5L5 21z" fill="currentColor" opacity="0.5"></path>
</svg>
</div>
<div className="px-4 pb-4">
<p className="text-sm font-semibold text-white font-sans" style={{}}>12,453 likes</p>
<p className="text-sm text-neutral-300 mt-1 font-sans" style={{}}>
<span className="font-semibold text-white font-sans" style={{}}>Lumina_official</span>
                  Transform your workflow with our new Creative Engine 2.0 🚀
                  <span className="text-blue-400 font-sans" style={{}}>#MadeWithLumina</span>
</p>
</div>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full"></div>
</div>
</div>

<div className="flex flex-col justify-center gap-2 pl-0 lg:pl-12">

<div className="flex flex-col gap-2 pb-8 border-b border-white/5 animate-on-scroll [animation:fadeSlideIn_0.8s_cubic-bezier(0.2,0.8,0.2,1)_0.4s_both]">
<div className="text-5xl md:text-6xl text-white tracking-tight font-sans font-bold" style={{}}>
              10+
            </div>
<div className="text-lg text-neutral-500 font-medium font-sans" style={{}}>
              Industries Transformed
            </div>
</div>

<div className="flex flex-col gap-2 py-8 border-b border-white/5 animate-on-scroll [animation:fadeSlideIn_0.8s_cubic-bezier(0.2,0.8,0.2,1)_0.5s_both]">
<div className="text-5xl md:text-6xl text-white tracking-tight font-sans font-bold" style={{}}>
              500 Million
            </div>
<div className="text-lg text-neutral-500 font-medium font-sans" style={{}}>
              Assets Generated Annually
            </div>
</div>

<div className="flex flex-col gap-2 py-8 border-b border-white/5 animate-on-scroll [animation:fadeSlideIn_0.8s_cubic-bezier(0.2,0.8,0.2,1)_0.6s_both]">
<div className="text-5xl md:text-6xl text-white tracking-tight font-sans font-bold" style={{}}>
              1,800%
            </div>
<div className="text-lg text-neutral-500 font-medium font-sans" style={{}}>
              Production Efficiency Lift
            </div>
</div>

<div className="flex flex-col gap-2 pt-8 animate-on-scroll [animation:fadeSlideIn_0.8s_cubic-bezier(0.2,0.8,0.2,1)_0.7s_both]">
<div className="text-5xl md:text-6xl text-white tracking-tight font-sans font-bold" style={{}}>
              140,000
            </div>
<div className="text-lg text-neutral-500 font-medium font-sans" style={{}}>
              Active Creative Teams
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

<img alt="Texture" className="opacity-20 mix-blend-luminosity w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 blur-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c087a1e-aa65-42f7-9a89-dc582f5d807a_3840w.webp" style={{}}/>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-0 flex flex-col min-h-[85vh] justify-between">

<div className="flex flex-col md:flex-row justify-between items-start w-full gap-12 border-b border-white/5 pb-12 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both]">

<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.2)]">

<svg fill="none" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="currentColor" fillOpacity="0.15" r="10"></circle>
<path d="M8 12C8 12.5523 7.55228 13 7 13C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11C7.55228 11 8 11.4477 8 12Z" fill="currentColor"></path>
<path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" fill="currentColor"></path>
<path d="M18 12C18 12.5523 17.5523 13 17 13C16.4477 13 16 12.5523 16 12C16 11.4477 16.4477 11 17 11C17.5523 11 18 11.4477 18 12Z" fill="currentColor"></path>
</svg>
</div>
<span className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400 font-sans" style={{}}>
              Get In Touch
            </span>
</div>

<div className="flex flex-wrap gap-8 md:gap-12 text-xs font-semibold tracking-widest uppercase text-neutral-500">
<a className="hover:text-white transition-colors duration-300 font-sans" href="#" style={{}}>
              Privacy &amp; Policy
            </a>
<a className="hover:text-white transition-colors duration-300 font-sans" href="#" style={{}}>
              Terms of Service
            </a>
<span className="text-neutral-700 font-sans" style={{}}>@2025 Lumina Creative Inc.</span>
</div>
</div>

<div className="flex flex-col gap-6 mt-16 mb-auto relative">

<div className="group/item relative flex flex-col items-start w-fit">
<a className="relative z-10 text-5xl md:text-7xl lg:text-8xl tracking-tighter text-white group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-white group-hover/item:to-neutral-500 transition-all duration-500 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.3s_both] font-sans font-bold" href="tel:+18005550199" style={{}}>
              +1 800 555 0199
            </a>
<div className="absolute -right-8 top-4 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 translate-x-2 group-hover/item:translate-x-0">
<span className="flex items-center justify-center w-5 h-5 rounded bg-orange-500 text-[9px] font-bold text-black uppercase tracking-wider shadow-[0_0_15px_rgba(249,115,22,0.6)] font-sans" style={{}}>
                T
              </span>
</div>
</div>

<div className="group/item relative flex flex-col items-start w-fit animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.5s_both]">
<a className="relative z-10 text-5xl md:text-7xl lg:text-8xl tracking-tighter text-white group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-white group-hover/item:to-neutral-500 transition-all duration-500 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.4s_both] font-sans font-bold" href="mailto:hello@lumina.ai" style={{}}>
              HELLO@LUMINA.AI
            </a>
<div className="absolute -right-8 top-4 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 translate-x-2 group-hover/item:translate-x-0">
<span className="flex items-center justify-center w-5 h-5 rounded bg-orange-500 text-[9px] font-bold text-black uppercase tracking-wider shadow-[0_0_15px_rgba(249,115,22,0.6)] font-sans" style={{}}>
                E
              </span>
</div>
</div>

<div className="flex items-center gap-8 mt-12 pl-1 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.6s_both]">

<a className="text-neutral-600 hover:text-white transition-colors duration-300 transform hover:scale-110" href="#">
<svg className="w-6 h-6 fill-current" role="img" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<title className="font-sans" style={{}}>X</title>
<path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
</svg>
</a>

<a className="text-neutral-600 hover:text-white transition-colors duration-300 transform hover:scale-110" href="#">
<svg className="w-6 h-6 fill-current" role="img" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<title className="font-sans" style={{}}>GitHub</title>
<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
</svg>
</a>

<a className="text-neutral-600 hover:text-white transition-colors duration-300 transform hover:scale-110" href="#">
<svg className="w-6 h-6 fill-current" role="img" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<title className="font-sans" style={{}}>LinkedIn</title>
<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
</svg>
</a>
</div>
</div>

<div className="select-none overflow-hidden w-full mt-12 relative">

<h1 className="text-[17vw] leading-[0.75] tracking-tighter text-center md:text-left text-white mix-blend-overlay opacity-90 pointer-events-none animate-on-scroll [animation:fadeSlideIn_1.5s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both] font-sans font-bold" style={{}}>
            LUMINA
          </h1>

<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050505] to-transparent"></div>
</div>
</div>
</div>


    </>
  );
}
