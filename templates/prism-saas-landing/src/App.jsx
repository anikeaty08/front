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
        


            (function() {
              const wrapper = document.querySelector('[data-element-id="aura-emjrzrytm2vh204y1"]');
              if(!wrapper) return;

              const cards = Array.from(wrapper.querySelectorAll('.feature-card'));
              let activeIndex = 0;

              function cycle() {
                cards.forEach((card, idx) => {
                  if(idx === activeIndex) {
                    card.classList.remove('border-gray-100');
                    card.classList.add('border-indigo-500', 'ring-1', 'ring-indigo-500', 'scale-[1.005]', 'bg-indigo-50/10');
                  } else {
                    card.classList.remove('border-indigo-500', 'ring-1', 'ring-indigo-500', 'scale-[1.005]', 'bg-indigo-50/10');
                    card.classList.add('border-gray-100');
                  }
                });
                activeIndex = (activeIndex + 1) % cards.length;
              }

              // Start the loop
              cycle();
              setInterval(cycle, 3000);
            })();
          


          (function() {
            // Configuration: [LeftCard, CenterCard, RightCard]
            // Corresponds to Position 0, Position 1, Position 2
            const cardIds = ['testimonial-card-1', 'testimonial-card-2', 'testimonial-card-3'];

            // Store references
            const cards = cardIds.map(id => document.getElementById(id));

            // Define styles for each position
            // Pos 0: Left
            const pos0 = "md:w-[400px] md:-translate-x-[125%] md:-translate-y-[60%] md:-rotate-[6deg] md:scale-[0.9] z-10 hover:z-20 opacity-100 rounded-[2rem]";
            // Pos 1: Center
            const pos1 = "md:w-[460px] md:-translate-x-1/2 md:-translate-y-[65%] md:rotate-0 md:scale-100 z-30 opacity-100 rounded-[2.5rem] shadow-2xl";
            // Pos 2: Right
            const pos2 = "md:w-[400px] md:translate-x-[25%] md:-translate-y-[60%] md:rotate-[6deg] md:scale-[0.9] z-10 hover:z-20 opacity-100 rounded-[2rem]";

            // Base classes for all
            const baseClasses = "transition-all duration-700 ease-out md:absolute md:top-1/2 md:left-1/2 w-full bg-white border border-slate-100 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] mb-6 md:mb-0";

            // Helper to update classes
            function updateCardClasses() {
              // Card at index 0 gets pos0 (Left)
              // Card at index 1 gets pos1 (Center)
              // Card at index 2 gets pos2 (Right)

              // Note: The Center card (index 1) has specific internal styling like 'border-gray-100' instead of 'border-slate-100'
              // and bigger padding 'p-10' vs 'p-8'.
              // We will swap these basic structural classes too to ensure smooth emphasis.

              cards.forEach((card, index) => {
                let specificClasses = "";
                let paddingClasses = "";
                let borderClasses = "";

                if (index === 0) { // Left Position
                   specificClasses = pos0;
                   paddingClasses = "p-8";
                   borderClasses = "border-slate-100";
                } else if (index === 1) { // Center Position
                   specificClasses = pos1;
                   paddingClasses = "p-10"; // Larger padding for center
                   borderClasses = "border-gray-100";
                } else { // Right Position
                   specificClasses = pos2;
                   paddingClasses = "p-8";
                   borderClasses = "border-slate-100";
                }

                card.className = `${baseClasses} ${specificClasses} ${paddingClasses} ${borderClasses}`;
              });
            }

            window.handleTestimonialSwipe = function(direction) {
              if (direction === 1) {
                 // Next (Right Arrow clicked):
                 // Flow is Right -> Center -> Left -> Right(Wrap)
                 // Array shift: [Left, Center, Right] -> [Center, Right, Left] is WRONG flow.
                 // Visual Flow: Item at Right(Pos2) moves to Center(Pos1).
                 // This means the item at Index 2 moves to Index 1.
                 // Item at Index 1 (Center) moves to Index 0 (Left).
                 // Item at Index 0 (Left) moves to Index 2 (Right).
                 // This operation is: Take First element, move to End.
                 // [A, B, C] -> [B, C, A]
                 // Old A (Pos0) -> becomes Pos2 (Right).
                 // Old B (Pos1) -> becomes Pos0 (Left).
                 // Old C (Pos2) -> becomes Pos1 (Center).

                 const first = cards.shift();
                 cards.push(first);
              } else {
                 // Prev (Left Arrow clicked):
                 // Flow is Left -> Center -> Right -> Left(Wrap)
                 // Item at Left(Pos0) moves to Center(Pos1).
                 // [A, B, C] -> [C, A, B]
                 // Old C (Pos2) -> becomes Pos0 (Left).
                 // Old A (Pos0) -> becomes Pos1 (Center).
                 // Old B (Pos1) -> becomes Pos2 (Right).

                 const last = cards.pop();
                 cards.unshift(last);
              }
              updateCardClasses();
            };
          })();
        


      lucide.createIcons();
    


      document.addEventListener("DOMContentLoaded",()=>{const o=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("scroll-enter-active"),o.unobserve(t.target))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});document.querySelectorAll(".scroll-enter").forEach(e=>o.observe(e))});
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 hue-rotate-15 blur-md" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ty3N7ZPaIU7KlWixQFIc"></div>

</div>
</div>

<div className="fixed overflow-hidden -z-10 pointer-events-none w-full h-full top-0 left-0" style={{}}>
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gray-200/50 rounded-full blur-[120px]" style={{}}></div>
<div className="absolute top-[10%] right-[-5%] w-[30%] h-[50%] rounded-full blur-[100px] bg-indigo-100/40" style={{}}></div>
</div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
<div className="flex transition-all duration-300 hover:shadow-[0_4px_25px_rgba(0,0,0,0.06)] bg-white border-white/50 border rounded-full pt-2 pr-2 pb-2 pl-2 shadow-[0_2px_20px_rgba(0,0,0,0.04)] backdrop-blur-xl items-center justify-between aura-animate-fade-up">
<a className="inline-flex items-center justify-center bg-center w-[130px] h-[50px] bg-[url(https://cdn.midjourney.com/1236bb43-5d1e-478e-a588-0715b46dfd77/0_3.png?w=800&amp;q=80)] bg-cover rounded-full" href="#"></a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-sans font-medium" href="#" style={{}}>
            Features
          </a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-sans font-medium" href="#" style={{}}>
            Methodology
          </a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-sans font-medium" href="#" style={{}}>
            Pricing
          </a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-sans font-medium" href="#" style={{}}>
            Blog
          </a>
</div>
<a className="hover:bg-slate-800 shadow-slate-900/20 transition-all transform hover:scale-[1.02] text-sm text-white bg-[#0F172A] rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg font-sans font-medium" href="#" style={{}}>
          Get Started
        </a>
</div>
</nav>

<main className="flex flex-col overflow-visible max-w-7xl mr-auto ml-auto pt-40 pb-20 relative items-center">


<div className="hidden lg:block absolute left-10 top-60 w-32 h-32 rotate-[-12deg] animate-float-slow opacity-80 z-0" style={{}}>
<div className="relative w-full h-full bg-white/60 backdrop-blur-md border border-white/60 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center p-4">
<div className="absolute top-0 w-12 h-2 bg-gray-200 rounded-b-lg mb-2"></div>
<div className="flex gap-4 mb-2 absolute top-[-6px]">
<div className="w-2 h-4 bg-gray-300 rounded-full"></div>
<div className="w-2 h-4 bg-gray-300 rounded-full"></div>
</div>
<span className="text-6xl text-gray-300 font-newsreader mt-2">24</span>
</div>
</div>

<div className="hidden lg:block pointer-events-none z-0 w-48 h-48 absolute top-52 right-0">
<div className="bg-gradient-to-br from-indigo-400 to-indigo-500 opacity-90 w-28 h-28 rounded-3xl absolute top-0 right-8 shadow-lg rotate-[10deg]"></div>
<div className="absolute right-14 top-8 w-32 h-32 bg-white/20 backdrop-blur-xl border border-white/40 rounded-3xl flex items-end justify-center pb-4 gap-2 z-10 rotate-[5deg] shadow-[0_20px_50px_rgba(99,102,241,0.2)]">
<div className="w-2 h-8 bg-white/40 rounded-full"></div>
<div className="w-2 h-14 bg-white/60 rounded-full"></div>
<div className="w-2 h-11 bg-white/40 rounded-full"></div>
</div>
</div>

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] mb-10 transition-transform hover:scale-105 cursor-default aura-animate-fade delay-100">
<svg className="lucide lucide-sparkles w-3.5 h-3.5 text-slate-500" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
<span className="text-xs text-slate-500 uppercase font-sans font-medium" style={{}}>
          INTEGRATES WITH GITHUB · SLACK · JIRA
        </span>
</div>

<h1 className="leading-[1.1] md:text-5xl lg:text-7xl text-4xl text-slate-900 font-newsreader text-center max-w-4xl mr-auto mb-8 ml-auto pr-4 pl-4 aura-animate-fade-up delay-200" style={{}}>
        Design, develop, and
        <br/>
<span className="bg-clip-text text-transparent font-newsreader bg-[#000000]">
          deploy with precision
        </span>
</h1>
<p className="leading-relaxed md:text-2xl text-xl text-slate-700 font-newsreader text-center max-w-2xl mb-12 px-4 aura-animate-fade-up delay-300">
        The intelligent platform for engineering roadmaps, CI/CD visibility, and
        feature-flagged rollouts.
      </p>

<div className="flex flex-col sm:flex-row gap-4 w-full mb-24 pr-4 pl-4 items-center justify-center aura-animate-fade-up delay-400">
<button className="w-full sm:w-auto px-8 py-4 bg-[#0F172A] hover:bg-slate-800 text-white rounded-xl shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] transition-all transform hover:-translate-y-0.5 text-lg font-sans font-medium" style={{}}>
          Start Free Trial
        </button>
<button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-slate-900 border border-gray-200/80 rounded-xl shadow-sm transition-all transform hover:-translate-y-0.5 text-lg flex items-center justify-center gap-2 font-sans font-medium" style={{}}>
<svg className="lucide lucide-play-circle w-5 h-5 text-gray-400" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
          Watch Demo
        </button>
</div>

<div className="group z-10 w-full max-w-[1200px] mr-auto mb-32 ml-auto pr-4 pl-4 relative aura-animate-fade-up delay-500">

<div className="-inset-1 transition-all duration-700 group-hover:opacity-50 group-hover:duration-300 group-hover:blur-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 rounded-[1.6rem] absolute blur-xl" style={{backgroundSize: '200% 200%', animation: 'aura-gradient-move 4s ease infinite'}}>
<style>
            @keyframes aura-gradient-move{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
          </style>
</div>
<div className="overflow-hidden bg-white border-gray-200/80 border rounded-3xl relative shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px]">

<div className="flex bg-[#F9FAFB] h-10 border-gray-200 border-b pr-4 pl-4 items-center justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
</div>
<div className="bg-white border border-gray-200 px-3 py-0.5 rounded text-[11px] text-gray-400 flex items-center gap-1 font-sans font-medium" style={{}}>
<svg className="lucide lucide-lock w-3 h-3" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
              app.prism.io / dashboard app.streamline.so / dashboard
            </div>
<div className="w-10"></div>

</div>

<div className="flex md:h-[600px] bg-white h-[700px]" style={{}}>

<aside className="hidden md:flex flex-col bg-[#FCFCFD] w-64 border-gray-100 border-r pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center gap-3 mb-8">
<div className="">
<div className="text-sm text-slate-900 font-sans font-medium" style={{}}>
                    Acme Corp
                  </div>
<div className="text-xs text-slate-500 font-sans font-medium" style={{}}>
                    Enterprise Plan
                  </div>
</div>
<svg className="lucide lucide-chevron-down w-4 h-4 ml-auto text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>

<div className="flex flex-wrap gap-2 mb-8">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] text-blue-600 font-sans font-medium" style={{}}>
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  Eng
                </span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] text-emerald-600 font-sans font-medium" style={{}}>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  Design
                </span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-50 border border-purple-100 text-[10px] text-purple-600 font-sans font-medium" style={{}}>
<div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                  Product
                </span>
</div>

<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 bg-[#0F172A] text-white rounded-lg text-sm shadow-md shadow-slate-900/10 font-sans font-medium" href="#" style={{}}>
<svg className="lucide lucide-layout-grid w-4 h-4 opacity-90" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
</svg>
                  Dashboard
                  <div className="w-2 h-2 ml-auto rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></div>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-gray-100 rounded-lg text-sm transition-colors font-sans font-medium" href="#" style={{}}>
<svg className="lucide lucide-bar-chart-2 w-4 h-4" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 21v-6"></path>
<path d="M12 21V3"></path>
<path d="M19 21V9"></path>
</svg>
                  Analytics
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-gray-100 rounded-lg text-sm transition-colors font-sans font-medium" href="#" style={{}}>
<svg className="lucide lucide-git-branch w-4 h-4" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="6" x2="6" y1="3" y2="15"></line>
<circle cx="18" cy="6" r="3"></circle>
<circle cx="6" cy="18" r="3"></circle>
<path d="M18 9a9 9 0 0 1-9 9"></path>
</svg>
                  Workflows
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-gray-100 rounded-lg text-sm transition-colors font-sans font-medium" href="#" style={{}}>
<svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
<path d="M10 9H8"></path>
<path d="M16 13H8"></path>
<path d="M16 17H8"></path>
</svg>
                  Docs
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-gray-100 rounded-lg text-sm transition-colors font-sans font-medium" href="#" style={{}}>
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
                  Team
                </a>
</nav>
<div className="mt-auto pt-6 border-t border-gray-100">
<a className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 text-sm transition-colors font-sans font-medium" href="#" style={{}}>
<svg className="lucide lucide-settings w-4 h-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
                  Settings
                </a>
</div>
</aside>

<main className="flex-1 bg-white p-6 md:p-8 overflow-y-auto no-scrollbar">

<header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
<div className="">
<h2 className="text-2xl text-slate-900 font-newsreader" style={{}}>
                    Overview
                  </h2>
<p className="text-sm text-slate-500 mt-1 font-sans font-medium" style={{}}>
                    Track velocity, deployment signals, and team health.
                  </p>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-slate-600 shadow-sm hover:bg-gray-50 font-sans font-medium" style={{}}>
<svg className="lucide lucide-calendar w-4 h-4 text-gray-400" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
                    Last 30 days
                  </button>
<button className="flex items-center gap-2 px-3 py-2 bg-[#0F172A] text-white rounded-lg text-sm shadow-sm hover:bg-slate-800 font-sans font-medium" style={{}}>
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V3"></path>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10 5 5 5-5"></path>
</svg>
                    Export
                  </button>
</div>
</header>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-7 bg-white rounded-xl border border-gray-100 p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow">
<div className="flex items-start justify-between mb-8">
<div className="flex items-start gap-4">
<div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
<svg className="lucide lucide-activity w-6 h-6 text-slate-700" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
</svg>
</div>
<div className="">
<h3 className="text-lg text-slate-900 font-sans font-medium" style={{}}>
                          Sprint Velocity
                        </h3>
<p className="text-sm text-slate-500 max-w-[200px] leading-relaxed font-sans font-medium" style={{}}>
                          Average points completed per sprint cycle.
                        </p>
</div>
</div>
<div className="text-right">
<div className="text-xs text-slate-400 uppercase font-sans font-medium" style={{}}>
                        Cadence
                      </div>
<div className="text-lg text-slate-900 flex items-center justify-end gap-1 font-sans font-medium" style={{}}>
                        +24%
                        <span className="text-xs text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded font-sans font-medium" style={{}}>
                          QoQ
                        </span>
</div>
</div>
</div>

<div className="relative h-48 w-full">
<svg className="w-full h-full overflow-visible preserve-3d" viewbox="0 0 400 150">
<defs>
<lineargradient id="gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#818CF8" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#818CF8" stop-opacity="0"></stop>
</lineargradient>
</defs>

<line stroke="#F1F5F9" strokeWidth="1" x1="0" x2="400" y1="150" y2="150"></line>
<line stroke="#F1F5F9" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="400" y1="100" y2="100"></line>
<line stroke="#F1F5F9" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="400" y1="50" y2="50"></line>

<path className="" d="M0 120 C 50 120, 80 80, 120 90 C 160 100, 180 130, 220 110 C 260 90, 280 40, 320 60 C 350 75, 380 20, 400 10 L 400 150 L 0 150 Z" fill="url(#gradient)"></path>
<path d="M0 120 C 50 120, 80 80, 120 90 C 160 100, 180 130, 220 110 C 260 90, 280 40, 320 60 C 350 75, 380 20, 400 10" fill="none" stroke="#6366F1" strokeLinecap="round" strokeWidth="2.5"></path>
</svg>
<div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
<span className="font-sans font-medium" style={{}}>Week 1</span>
<span className="font-sans font-medium" style={{}}>Week 2</span>
<span className="font-sans font-medium" style={{}}>Week 3</span>
<span className="font-sans font-medium" style={{}}>Week 4</span>
<span className="font-sans font-medium" style={{}}>
                        Current
                      </span>
</div>
</div>
<div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-50">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-indigo-400"></div>
<span className="text-xs text-slate-500 font-sans font-medium" style={{}}>
                        Projected trend
                      </span>
</div>
<div className="px-2 py-1 rounded bg-emerald-50 text-emerald-700 text-xs flex items-center gap-1 font-sans font-medium" style={{}}>
<svg className="lucide lucide-trending-up w-3 h-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path>
<path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
                      Stable growth
                    </div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-6">

<div className="bg-white rounded-xl border border-gray-100 p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<h3 className="text-lg text-slate-900 font-sans font-medium" style={{}}>
                          Live Signals
                        </h3>
</div>
<button className="text-xs text-slate-500 hover:text-slate-900 flex items-center gap-1 border border-gray-200 rounded px-2 py-1 bg-gray-50 font-sans font-medium" style={{}}>
<svg className="lucide lucide-refresh-ccw w-3 h-3" data-lucide="refresh-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
<path d="M3 3v5h5"></path>
<path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
<path d="M16 16h5v5"></path>
</svg>
                        Sync
                      </button>
</div>

<div className="grid grid-cols-3 gap-2 mb-6">
<div className="bg-gray-50/50 p-3 rounded-lg border border-gray-100">
<div className="text-[10px] uppercase text-gray-400 mb-1 font-sans font-medium" style={{}}>
                          Commits
                        </div>
<div className="text-xl text-slate-900 font-sans font-medium" style={{}}>
                          142
                        </div>
<div className="text-[10px] text-emerald-600 bg-emerald-50 inline-block px-1 rounded mt-1 font-sans font-medium" style={{}}>
                          +12%
                        </div>
</div>
<div className="bg-gray-50/50 p-3 rounded-lg border border-gray-100">
<div className="text-[10px] uppercase text-gray-400 mb-1 font-sans font-medium" style={{}}>
                          NPS
                        </div>
<div className="text-xl text-slate-900 font-sans font-medium" style={{}}>
                          68
                        </div>
<div className="text-[10px] text-emerald-600 bg-emerald-50 inline-block px-1 rounded mt-1 font-sans font-medium" style={{}}>
                          Good
                        </div>
</div>
<div className="bg-gray-50/50 p-3 rounded-lg border border-gray-100">
<div className="text-[10px] uppercase text-gray-400 mb-1 font-sans font-medium" style={{}}>
                          Bugs
                        </div>
<div className="text-xl text-slate-900 font-sans font-medium" style={{}}>
                          3
                        </div>
<div className="text-[10px] text-gray-500 bg-gray-100 inline-block px-1 rounded mt-1 font-sans font-medium" style={{}}>
                          Low
                        </div>
</div>
</div>

<div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-2">
<svg className="lucide lucide-alert-triangle w-4 h-4 text-indigo-500" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
<path d="M12 9v4"></path>
<path d="M12 17h.01"></path>
</svg>
<span className="text-sm text-slate-800 font-sans font-medium" style={{}}>
                            Latency spike detected
                          </span>
</div>
<button className="text-[10px] bg-indigo-100 text-indigo-700 px-2 py-1 rounded hover:bg-indigo-200 transition-colors font-sans font-medium" style={{}}>
                          Investigate
                        </button>
</div>
<p className="text-xs text-slate-500 mb-3 font-sans font-medium" style={{}}>
                        API response time &gt; 400ms in EU-West region.
                      </p>
<div className="w-full h-1.5 bg-indigo-100 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[75%] rounded-full"></div>
</div>
</div>
</div>

<div className="flex-1 bg-white rounded-xl border border-gray-100 p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
<div className="flex items-center gap-3 mb-4">
<svg className="lucide lucide-message-square w-5 h-5 text-gray-400" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
</svg>
<div className="">
<h3 className="text-base text-slate-900 font-sans font-medium" style={{}}>
                          Review Hub
                        </h3>
<p className="text-xs text-slate-500 font-sans font-medium" style={{}}>
                          Pending team actions
                        </p>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
<div className="flex items-center gap-3">
<svg className="lucide lucide-git-pull-request w-4 h-4 text-purple-500" data-lucide="git-pull-request" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="18" r="3"></circle>
<circle cx="6" cy="6" r="3"></circle>
<path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
<line x1="6" x2="6" y1="9" y2="21"></line>
</svg>
<div className="">
<div className="text-xs text-slate-900 font-sans font-medium" style={{}}>
                              PR: OAuth implementation
                            </div>
<div className="text-[10px] text-slate-400 font-sans font-medium" style={{}}>
                              #2492 · Platform Team
                            </div>
</div>
</div>
<span className="text-[10px] text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded font-sans font-medium" style={{}}>
                          Merged
                        </span>
</div>
<div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100 opacity-60">
<div className="flex items-center gap-3">
<svg className="lucide lucide-file-text w-4 h-4 text-blue-500" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
<path d="M10 9H8"></path>
<path d="M16 13H8"></path>
<path d="M16 17H8"></path>
</svg>
<div className="">
<div className="text-xs text-slate-900 font-sans font-medium" style={{}}>
                              Spec: Billing Refactor
                            </div>
<div className="text-[10px] text-slate-400 font-sans font-medium" style={{}}>
                              Doc · Product
                            </div>
</div>
</div>
<span className="text-[10px] text-amber-600 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded font-sans font-medium" style={{}}>
                          Review
                        </span>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
</div>
</div>

<section className="w-full max-w-7xl mx-auto mb-24 px-4">

<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 px-4">
<div className="max-w-2xl">
<div className="flex items-center gap-3 mb-6 scroll-enter">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 text-sm border border-indigo-200/50 shadow-sm font-sans font-medium" style={{}}>
                01
              </span>
<span className="h-px w-20 bg-gradient-to-r to-transparent from-indigo-200"></span>
</div>
<h2 className="text-4xl lg:text-[2.75rem] text-slate-900 mb-5 font-newsreader scroll-enter delay-100" style={{}}>
              Precision at every scale
            </h2>
<p className="text-xl text-slate-500 leading-relaxed font-sans font-medium scroll-enter delay-200" style={{}}>
              Connect every part of your engineering workflow in one unified
              interface. Track progress, catch regressions, and ship faster with
              confidence.
            </p>
</div>
<button className="whitespace-nowrap flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm text-slate-700 hover:bg-gray-50 hover:text-slate-900 transition-all shadow-sm group font-sans font-medium scroll-enter delay-300" style={{}}>
            Explore all features
            <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6">

<div className="feature-card flex flex-col transition-all duration-700 ease-out bg-white border-gray-100 border rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] gap-x-8 gap-y-8 scroll-enter">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-[#1e293b] flex items-center justify-center shrink-0 shadow-md">
<svg className="lucide lucide-line-chart w-6 h-6 text-white stroke-[1.5]" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
<path d="m19 9-5 5-4-4-3 3"></path>
</svg>
</div>
<div className="">
<h3 className="text-2xl font-medium text-slate-900">
                  Prism velocity
                </h3>
<p className="text-slate-500 mt-1 font-sans font-medium" style={{}}>
                  Track engineering throughput and release momentum.
                </p>
</div>
</div>

<div className="bg-gray-50/40 rounded-2xl p-6 border border-gray-100/60">

<div className="flex justify-between items-center mb-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.4)]"></div>
<span className="text-sm text-slate-600 font-sans font-medium" style={{}}>
                    Deployment frequency
                  </span>
</div>
<span className="text-sm text-emerald-600 font-sans font-medium" style={{}}>
                  +24% efficiency
                </span>
</div>

<div className="h-48 w-full relative">
<style>
                  @keyframes drawLine {
                    0% { stroke-dashoffset: 1000; }
                    40% { stroke-dashoffset: 0; }
                    80% { stroke-dashoffset: 0; opacity: 1; }
                    100% { stroke-dashoffset: 0; opacity: 0; }
                  }
                  @keyframes fadeInArea {
                    0% { opacity: 0; }
                    40% { opacity: 0; }
                    60% { opacity: 1; }
                    80% { opacity: 1; }
                    100% { opacity: 0; }
                  }
                  .animate-stroke {
                    stroke-dasharray: 1000;
                    stroke-dashoffset: 1000;
                    animation: drawLine 6s cubic-bezier(0.22, 1, 0.36, 1) infinite;
                  }
                  .animate-area {
                    opacity: 0;
                    animation: fadeInArea 6s ease-out infinite;
                  }
                </style>
<svg className="w-full h-full overflow-visible" viewbox="0 0 400 180">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#818CF8" stop-opacity="0.25"></stop>
<stop offset="100%" stop-color="#818CF8" stop-opacity="0"></stop>
</lineargradient>
</defs>

<line stroke="#E2E8F0" stroke-dasharray="4 4" strokeWidth="1" x1="50" x2="50" y1="0" y2="160"></line>
<line stroke="#E2E8F0" stroke-dasharray="4 4" strokeWidth="1" x1="100" x2="100" y1="0" y2="160"></line>
<line stroke="#E2E8F0" stroke-dasharray="4 4" strokeWidth="1" x1="150" x2="150" y1="0" y2="160"></line>
<line stroke="#E2E8F0" stroke-dasharray="4 4" strokeWidth="1" x1="200" x2="200" y1="0" y2="160"></line>
<line stroke="#E2E8F0" stroke-dasharray="4 4" strokeWidth="1" x1="250" x2="250" y1="0" y2="160"></line>
<line stroke="#E2E8F0" stroke-dasharray="4 4" strokeWidth="1" x1="300" x2="300" y1="0" y2="160"></line>
<line stroke="#E2E8F0" stroke-dasharray="4 4" strokeWidth="1" x1="350" x2="350" y1="0" y2="160"></line>

<path className="animate-area" d="M 0 140 C 40 135, 60 110, 100 100 C 140 90, 160 130, 200 120 C 240 110, 260 80, 300 85 C 340 90, 360 40, 400 30 V 180 H 0 Z" fill="url(#chartGradient)"></path>
<path className="animate-stroke" d="M 0 140 C 40 135, 60 110, 100 100 C 140 90, 160 130, 200 120 C 240 110, 260 80, 300 85 C 340 90, 360 40, 400 30" fill="none" stroke="#6366F1" strokeLinecap="round" strokeWidth="2"></path>
</svg>

<div className="flex justify-between text-[10px] text-gray-400 mt-[-10px] font-medium px-2">
<span className="font-sans font-medium" style={{}}>Oct</span>
<span className="font-sans font-medium" style={{}}>Nov</span>
<span className="font-sans font-medium" style={{}}>Dec</span>
<span className="font-sans font-medium" style={{}}>Jan</span>
<span className="font-sans font-medium" style={{}}>Feb</span>
<span className="font-sans font-medium" style={{}}>Mar</span>
<span className="font-sans font-medium" style={{}}>Apr</span>
<span className="font-sans font-medium" style={{}}>May</span>
</div>
</div>
</div>

<div className="bg-gray-50/40 rounded-xl p-4 flex items-center justify-between border border-gray-100/60">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_6px_rgba(99,102,241,0.4)]"></div>
<span className="text-sm text-slate-600 font-sans font-medium" style={{}}>
                  On-time delivery
                </span>
</div>
<span className="text-sm text-indigo-500 font-sans font-medium" style={{}}>
                98%
              </span>
</div>
</div>

<div className="feature-card flex flex-col transition-all duration-700 ease-out bg-white border-gray-100 border rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] gap-x-8 gap-y-8 scroll-enter delay-100">
<style>
              @keyframes vertical-loop-scroll {
                0% { transform: translateY(0); }
                100% { transform: translateY(-50%); }
              }
              .animate-vertical-loop-scroll {
                animation: vertical-loop-scroll 20s linear infinite;
              }
              .animate-vertical-loop-scroll:hover {
                animation-play-state: paused;
              }
            </style>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-[#1e293b] flex items-center justify-center shrink-0 shadow-md">
<svg className="lucide lucide-activity w-6 h-6 text-white stroke-[1.5]" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
</svg>
</div>
<div className="">
<h3 className="text-2xl font-medium tracking-tight text-slate-900">
                  Pipeline intelligence
                </h3>
<p className="text-slate-500 mt-1 font-sans font-medium" style={{}}>
                  Real-time build health and deployment insights.
                </p>
</div>
</div>

<div className="grid grid-cols-3 gap-4">
<div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
<div className="text-[11px] text-slate-400 mb-1 font-sans font-medium" style={{}}>
                  Lead Time
                </div>
<div className="text-lg font-medium text-slate-900">1.2d</div>
</div>
<div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
<div className="text-[11px] text-slate-400 mb-1 font-sans font-medium" style={{}}>
                  Cycle Time
                </div>
<div className="text-lg text-slate-900 font-sans font-medium" style={{}}>
                  8h
                </div>
</div>
<div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
<div className="text-[11px] text-slate-400 mb-1 font-sans font-medium" style={{}}>
                  Fail Rate
                </div>
<div className="text-lg text-emerald-600 font-sans font-medium" style={{}}>
                  0.5%
                </div>
</div>
</div>

<div className="relative h-[240px] overflow-hidden -mx-2 px-2" style={{maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'}}>
<div className="animate-vertical-loop-scroll space-y-3 pb-3">

<div className="p-5 rounded-xl border border-indigo-100 bg-indigo-50/20">
<div className="flex justify-between items-center mb-3">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
<span className="text-sm text-slate-700 font-sans font-medium" style={{}}>
                        Production latency detected
                      </span>
</div>
<span className="text-sm text-indigo-600 cursor-pointer hover:underline font-sans font-medium" style={{}}>
                      View Logs
                    </span>
</div>
<div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
<div className="w-[35%] h-full bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-full"></div>
</div>
</div>

<div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
<span className="text-sm text-slate-700 font-sans font-medium" style={{}}>
                      Active sessions
                    </span>
</div>
<span className="text-sm text-blue-600 font-sans font-medium" style={{}}>
                    +32%
                  </span>
</div>

<div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="text-sm text-slate-700 font-sans font-medium" style={{}}>
                      Build #4291 passed
                    </span>
</div>
<div className="flex items-center gap-1 text-emerald-600">
<svg className="lucide lucide-check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm font-sans font-medium" style={{}}>
                      v2.1
                    </span>
</div>
</div>

<div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></div>
<span className="text-sm text-slate-700 font-sans font-medium" style={{}}>
                      Deploying to staging
                    </span>
</div>
<span className="text-sm text-amber-600 font-sans font-medium" style={{}}>
                    34s
                  </span>
</div>


<div className="p-5 rounded-xl border border-indigo-100 bg-indigo-50/20">
<div className="flex justify-between items-center mb-3">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
<span className="text-sm text-slate-700 font-sans font-medium" style={{}}>
                        Production latency detected
                      </span>
</div>
<span className="text-sm text-indigo-600 cursor-pointer hover:underline font-sans font-medium" style={{}}>
                      View Logs
                    </span>
</div>
<div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
<div className="w-[35%] h-full bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-full"></div>
</div>
</div>

<div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
<span className="text-sm text-slate-700 font-sans font-medium" style={{}}>
                      Active sessions
                    </span>
</div>
<span className="text-sm text-blue-600 font-sans font-medium" style={{}}>
                    +32%
                  </span>
</div>

<div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="text-sm text-slate-700 font-sans font-medium" style={{}}>
                      Build #4291 passed
                    </span>
</div>
<div className="flex items-center gap-1 text-emerald-600">
<svg className="lucide lucide-check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm font-sans font-medium" style={{}}>
                      v2.1
                    </span>
</div>
</div>

<div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></div>
<span className="text-sm text-slate-700 font-sans font-medium" style={{}}>
                      Deploying to staging
                    </span>
</div>
<span className="text-sm text-amber-600 font-sans font-medium" style={{}}>
                    34s
                  </span>
</div>
</div>
</div>
</div>

<div className="feature-card flex flex-col transition-all duration-700 ease-out bg-white border-gray-100 border rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] gap-x-8 gap-y-8 scroll-enter">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-[#1e293b] flex items-center justify-center shrink-0 shadow-md">
<svg className="lucide lucide-users w-6 h-6 text-white stroke-[1.5]" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
</div>
<div className="">
<h3 className="text-2xl font-medium text-slate-900">
                  Workflow alignment
                </h3>
<p className="text-slate-500 mt-1 font-sans font-medium" style={{}}>
                  Bridge the gap between product specs and merged code.
                </p>
</div>
</div>
<div className="relative h-[240px] overflow-hidden" style={{maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'}}>
<style>
                @keyframes vertical-loop {
                  0% { transform: translateY(0); }
                  100% { transform: translateY(-50%); }
                }
                .animate-vertical-loop {
                  animation: vertical-loop 15s linear infinite;
                }
                .animate-vertical-loop:hover {
                  animation-play-state: paused;
                }
              </style>
<div className="animate-vertical-loop space-y-4 pb-4">

<div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm flex justify-between items-center group hover:border-gray-200 transition-colors">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
<span className="text-sm text-slate-700 font-sans font-medium">
                      Canary: v2.0 Rollout
                    </span>
</div>
<span className="text-sm text-indigo-600 font-sans font-medium">
                    Paused
                  </span>
</div>

<div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm flex items-center justify-between group cursor-default hover:border-gray-200 transition-colors">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-gray-50 rounded text-gray-500 border border-gray-100">
<svg className="lucide lucide-bell w-4 h-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
<path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
</svg>
</div>
<span className="text-sm text-slate-700 font-sans font-medium">
                      Spec: API Rate Limits
                    </span>
</div>
<span className="text-xs text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded border border-indigo-100 font-sans font-medium">
                    Draft
                  </span>
</div>

<div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm flex items-center justify-between group cursor-default hover:border-gray-200 transition-colors">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-gray-50 rounded text-gray-500 border border-gray-100">
<svg className="lucide lucide-check-square w-4 h-4" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
</div>
<span className="text-sm text-slate-700 font-sans font-medium">
                      Handoff: User Settings
                    </span>
</div>
<span className="text-xs text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-100 font-sans font-medium">
                    Review
                  </span>
</div>


<div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm flex justify-between items-center group hover:border-gray-200 transition-colors">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
<span className="text-sm text-slate-700 font-sans font-medium">
                      Canary: v2.0 Rollout
                    </span>
</div>
<span className="text-sm text-indigo-600 font-sans font-medium">
                    Paused
                  </span>
</div>

<div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm flex items-center justify-between group cursor-default hover:border-gray-200 transition-colors">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-gray-50 rounded text-gray-500 border border-gray-100">
<svg className="lucide lucide-bell w-4 h-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
<path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
</svg>
</div>
<span className="text-sm text-slate-700 font-sans font-medium">
                      Spec: API Rate Limits
                    </span>
</div>
<span className="text-xs text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded border border-indigo-100 font-sans font-medium">
                    Draft
                  </span>
</div>

<div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm flex items-center justify-between group cursor-default hover:border-gray-200 transition-colors">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-gray-50 rounded text-gray-500 border border-gray-100">
<svg className="lucide lucide-check-square w-4 h-4" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
</div>
<span className="text-sm text-slate-700 font-sans font-medium">
                      Handoff: User Settings
                    </span>
</div>
<span className="text-xs text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-100 font-sans font-medium">
                    Review
                  </span>
</div>
</div>
</div>
</div>

<div className="feature-card flex flex-col transition-all duration-700 ease-out bg-white border-gray-100 border rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] gap-x-8 gap-y-8 scroll-enter delay-100">
<style>
              @keyframes widgetSwap1 {
                0%, 45% { opacity: 1; transform: scale(1); pointer-events: auto; }
                50%, 95% { opacity: 0; transform: scale(0.96); pointer-events: none; }
                100% { opacity: 1; transform: scale(1); pointer-events: auto; }
              }
              @keyframes widgetSwap2 {
                0%, 45% { opacity: 0; transform: scale(0.96); pointer-events: none; }
                50%, 95% { opacity: 1; transform: scale(1); pointer-events: auto; }
                100% { opacity: 0; transform: scale(0.96); pointer-events: none; }
              }
              .animate-widget-1 { animation: widgetSwap1 8s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
              .animate-widget-2 { animation: widgetSwap2 8s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
            </style>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-[#1e293b] flex items-center justify-center shrink-0 shadow-md">
<svg className="lucide lucide-terminal w-6 h-6 text-white stroke-[1.5]" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19h8"></path>
<path d="m4 17 6-6-6-6"></path>
</svg>
</div>
<div className="">
<h3 className="text-2xl font-medium text-slate-900">
                  Feature control
                </h3>
<p className="text-slate-500 mt-1 font-sans font-medium">
                  Manage feature flags and canary releases confidently.
                </p>
</div>
</div>

<div className="relative h-[170px] w-full">

<div className="absolute inset-0 bg-gray-50/40 rounded-xl border border-gray-100/60 p-5 animate-widget-1 shadow-sm">
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-2">
<div className="p-1 bg-gray-100 border border-gray-200 rounded text-slate-500">
<svg className="lucide lucide-bar-chart-2 w-3.5 h-3.5" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 21v-6"></path>
<path d="M12 21V3"></path>
<path d="M19 21V9"></path>
</svg>
</div>
<span className="text-sm text-slate-600 font-sans font-medium">
                      Impact Analysis
                    </span>
</div>
<span className="text-[10px] text-slate-400 uppercase font-sans font-medium bg-white px-1.5 py-0.5 rounded border border-gray-100">
                    Real-time
                  </span>
</div>
<div className="grid grid-cols-3 gap-3">
<div className="p-3 bg-white border border-gray-100 rounded-lg shadow-sm">
<div className="text-[10px] text-slate-400 mb-1 font-sans font-medium">
                      Effort
                    </div>
<div className="text-base text-slate-900 font-sans font-medium">
                      Low
                    </div>
</div>
<div className="p-3 bg-white border border-gray-100 rounded-lg shadow-sm">
<div className="text-[10px] text-slate-400 mb-1 font-sans font-medium">
                      Impact
                    </div>
<div className="text-base text-emerald-600 font-sans font-medium">
                      High
                    </div>
</div>
<div className="p-3 bg-white border border-gray-100 rounded-lg shadow-sm">
<div className="text-[10px] text-slate-400 mb-1 font-sans font-medium">
                      Score
                    </div>
<div className="text-base font-sans font-medium">9.4</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-gray-50/40 rounded-xl border border-gray-100/60 p-5 animate-widget-2 opacity-0 shadow-sm">
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-2">
<div className="p-1 bg-gray-100 border border-gray-200 rounded text-slate-500">
<svg className="lucide lucide-activity w-3.5 h-3.5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
</svg>
</div>
<span className="text-sm text-slate-600 font-sans font-medium">
                      System Health
                    </span>
</div>
<span className="text-[10px] text-emerald-600 uppercase font-sans font-medium bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">
                    Healthy
                  </span>
</div>
<div className="grid grid-cols-3 gap-3">
<div className="p-3 bg-white border border-gray-100 rounded-lg shadow-sm">
<div className="text-[10px] text-slate-400 mb-1 font-sans font-medium">
                      Latency
                    </div>
<div className="text-base text-slate-900 font-sans font-medium">
                      24ms
                    </div>
</div>
<div className="p-3 bg-white border border-gray-100 rounded-lg shadow-sm">
<div className="text-[10px] text-slate-400 mb-1 font-sans font-medium">
                      Errors
                    </div>
<div className="text-base text-slate-900 font-sans font-medium">
                      0%
                    </div>
</div>
<div className="p-3 bg-white border border-gray-100 rounded-lg shadow-sm">
<div className="text-[10px] text-slate-400 mb-1 font-sans font-medium">
                      U-medium"&gt;99.9%
                    </div>
</div>
</div>
</div>
</div>

<div className="space-y-3">
<div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm flex justify-between items-center group hover:border-gray-200 transition-colors">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
<span className="text-sm text-slate-700 font-sans font-medium">
                    Canary: v2.0 Rollout
                  </span>
</div>
<span className="text-sm text-orange-600 font-sans font-medium">
                  Paused
                </span>
</div>
<div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm flex justify-between items-center group hover:border-gray-200 transition-colors">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="text-sm text-slate-700 font-sans font-medium">
                    Expand: Dark Mode
                  </span>
</div>
<span className="text-sm text-emerald-600 font-sans font-medium">
                  50%
                </span>
</div>
</div>
</div>

</div>
</section>

<section className="w-full max-w-7xl mx-auto mb-32 px-4 overflow-hidden md:overflow-visible">
<div className="flex flex-col md:flex-row gap-6 mb-16 px-4 items-end justify-between">
<div className="max-w-2xl scroll-enter">
<div className="flex items-center gap-3 mb-6">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 text-sm border border-indigo-200/50 shadow-sm font-sans font-medium">
                02
              </span>
<span className="h-px w-20 bg-gradient-to-r from-orange-200 to-transparent"></span>
</div>
<h2 className="text-4xl lg:text-[2.75rem] text-slate-900 mb-5 font-newsreader tracking-tight">
              Trusted by engineering teams
            </h2>
<p className="text-xl text-slate-500 leading-relaxed font-sans font-medium">
              Join thousands of developers who are shipping code faster and
              safer with Streamline.
            </p>
</div>
</div>
<div className="flex flex-col md:block md:h-[650px] w-full max-w-[1200px] mx-auto py-12 px-4 relative perspective-distant group/container scroll-enter delay-200" id="testimonials-container">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-tr via-purple-50/40 to-blue-50/40 blur-[100px] rounded-full -z-10 pointer-events-none opacity-0 md:opacity-100 transition-opacity duration-700 from-indigo-100/40"></div>

<div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 gap-6 z-40">
<button className="w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 bg-white shadow-sm hover:scale-105 active:scale-95 text-slate-600 hover:text-slate-900 hover:border-slate-300" onclick="handleTestimonialSwipe(-1)">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<button className="w-14 h-14 rounded-full border border-orange-500/30 flex items-center justify-center hover:bg-orange-50 hover:border-orange-500 transition-all duration-300 bg-white shadow-sm hover:scale-105 active:scale-95 text-indigo-500 hover:text-orange-500" onclick="handleTestimonialSwipe(1)">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>

<div className="transition-all duration-700 ease-out md:absolute md:top-1/2 md:left-1/2 w-full bg-white border border-slate-100 p-8 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] md:w-[400px] md:-translate-x-[125%] md:-translate-y-[60%] md:-rotate-[6deg] md:scale-[0.9] z-10 hover:z-20 rounded-[2rem] opacity-100 mb-6 md:mb-0" id="testimonial-card-1">
<div className="flex items-center gap-1 mb-6 text-slate-400">
<svg className="w-4 h-4 text-orange-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-4 h-4 text-orange-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-4 h-4 text-orange-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-4 h-4 text-orange-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-4 h-4 text-orange-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<blockquote className="leading-relaxed text-lg text-slate-800 mb-8 font-sans font-medium">
              "Prism has completely transformed how we ship code. The visibility
              into our pipeline is unmatched."
            </blockquote>
<div className="flex items-center gap-4 pt-4 border-t border-gray-50">
<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-sm ring-4 ring-white shadow-sm font-sans font-medium">
                SJ
              </div>
<div>
<div className="text-sm text-slate-900 font-sans font-medium">
                  Sarah Jenkins
                </div>
<div className="text-xs text-slate-500 font-sans font-medium">
                  CTO at TechFlow
                </div>
</div>
</div>
</div>

<div className="transition-all duration-700 ease-out md:absolute md:top-1/2 md:left-1/2 w-full bg-white border border-gray-100 p-10 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] md:w-[460px] md:-translate-x-1/2 md:-translate-y-[65%] md:rotate-0 md:scale-100 z-30 rounded-[2.5rem] opacity-100 mb-6 md:mb-0" id="testimonial-card-2">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-20"></div>
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-1.5 text-orange-500">
<svg className="w-5 h-5 drop-shadow-sm" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-5 h-5 drop-shadow-sm" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-5 h-5 drop-shadow-sm" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-5 h-5 drop-shadow-sm" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-5 h-5 drop-shadow-sm" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs uppercase border border-indigo-100 font-sans font-medium">
                Featured
              </span>
</div>
<blockquote className="text-[1.35rem] text-slate-900 mb-10 leading-snug font-newsreader">
              "The feature flags integration is a game changer. We can test on
              production with zero anxiety."
            </blockquote>
<div className="flex items-center gap-5 pt-6 border-t border-gray-100">
<div className="relative">
<div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 text-base ring-4 shadow-md font-sans font-medium">
                  MK
                </div>
<div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-[3px] border-white"></div>
</div>
<div>
<div className="text-base text-slate-900 font-sans font-medium">
                  Michael Klein
                </div>
<div className="text-sm text-slate-500 font-sans font-medium">
                  Lead Engineer at Vercel
                </div>
</div>
<div className="ml-auto md:opacity-100 opacity-0 transition-opacity">
<svg className="text-gray-200" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
</svg>
</div>
</div>
</div>

<div className="transition-all duration-700 ease-out md:absolute md:top-1/2 md:left-1/2 w-full bg-white border border-slate-100 p-8 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] md:w-[400px] md:translate-x-[25%] md:-translate-y-[60%] md:rotate-[6deg] md:scale-[0.9] z-10 hover:z-20 rounded-[2rem] opacity-100 mb-6 md:mb-0" id="testimonial-card-3">
<div className="flex items-center gap-1 mb-6 text-indigo-400">
<svg className="w-4 h-4 text-orange-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-4 h-4 text-orange-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-4 h-4 text-orange-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-4 h-4 text-orange-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-4 h-4 text-orange-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<blockquote className="leading-relaxed text-lg text-slate-800 mb-8 font-sans font-medium">
              "Simply the best tool for tracking velocity. It helped us identify
              bottlenecks we didn't know existed."
            </blockquote>
<div className="flex items-center gap-4 pt-4 border-t border-gray-50">
<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-sm ring-4 ring-white shadow-sm font-sans font-medium">
                EL
              </div>
<div>
<div className="text-sm text-slate-900 font-sans font-medium">
                  Emily Liu
                </div>
<div className="text-xs text-slate-500 font-sans font-medium">
                  VP Eng at Stripe
                </div>
</div>
</div>
</div>
</div>

</section>

<section className="w-full max-w-7xl mr-auto mb-32 ml-auto pr-4 pl-4">

<div className="flex flex-col md:flex-row mb-16 pr-4 pl-4 gap-x-6 gap-y-6 items-end justify-between">
<div className="max-w-2xl scroll-enter" style={{}}>
<div className="flex gap-3 mb-6 items-center">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 text-sm border border-indigo-200/50 shadow-sm font-sans font-medium" style={{}}>
                03
              </span>
<span className="h-px w-20 bg-gradient-to-r from-orange-200 to-transparent"></span>
</div>
<h2 className="text-4xl lg:text-[2.75rem] text-slate-900 mb-5 font-newsreader" style={{}}>
              Smart pricing
              <span className="font-newsreader">for serious growth</span>
</h2>
<p className="text-xl text-slate-500 leading-relaxed font-sans font-medium" style={{}}>
              Our plans are designed to give you everything you need to grow.
            </p>
</div>

<div className="flex bg-slate-100/50 border-gray-200 border rounded-full p-1 shadow-sm items-center scroll-enter delay-100">
<button className="transition-all text-sm font-medium text-white bg-indigo-600 rounded-full px-6 py-2 shadow-md">
              Monthly
            </button>
<button className="hover:text-slate-900 transition-all flex text-sm font-medium text-slate-500 rounded-full pt-2 pr-2 pb-2 pl-6 gap-x-2 gap-y-2 items-center">
              Yearly
              <span className="text-[10px] uppercase font-bold text-emerald-800 tracking-wider bg-emerald-200 rounded-full px-2 py-0.5">
                Save 20%
              </span>
</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mr-auto ml-auto gap-x-8 gap-y-8">

<div className="group relative rounded-[2rem] w-full transition-all duration-500 hover:-translate-y-1 scroll-enter">

<div className="absolute -inset-[1px] bg-gradient-to-br from-indigo-400 via-purple-500 to-indigo-600 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="relative flex flex-col h-full bg-[#F5F7FF] group-hover:bg-white border border-indigo-100/50 group-hover:border-transparent rounded-[1.9rem] p-8 md:p-12 transition-all duration-500 overflow-hidden shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] group-hover:shadow-2xl justify-between">

<div className="absolute bottom-0 left-0 w-full h-[55%] bg-gradient-to-t from-indigo-600 via-indigo-500 to-transparent opacity-0 group-hover:opacity-95 transition-opacity duration-500 pointer-events-none z-0"></div>

<div className="relative z-10 flex flex-col h-full justify-between">

<div className="">
<div className="flex items-center gap-2 mb-6">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors duration-500"></div>
<span className="text-sm text-indigo-600 font-sans font-medium group-hover:text-indigo-500 transition-colors duration-500">
                      Developer
                    </span>
</div>
<h3 className="text-4xl text-slate-900 mb-4 font-newsreader tracking-tight">
                    Perfect for builders
                    <span className="text-indigo-500 font-newsreader group-hover:text-indigo-500 transition-colors duration-500">
                      shipping side projects
                    </span>
</h3>
<div className="flex items-baseline gap-1 mt-8 mb-8">
<span className="text-6xl text-slate-900 font-newsreader">
                      $29
                    </span>
<span className="text-xl text-slate-500 font-sans font-medium">
                      /mo
                    </span>
</div>
<button className="w-full bg-[#111] text-white rounded-full py-4 text-lg hover:bg-slate-800 transition-all shadow-lg shadow-black/20 mb-10 font-sans font-medium group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-xl group-hover:border-transparent">
                    Start building
                  </button>
<div className="bg-indigo-100/50 border border-indigo-200/50 rounded-2xl p-4 flex items-center justify-between mb-10 transition-colors duration-500 group-hover:bg-white/90 group-hover:border-white/50 group-hover:shadow-sm">
<div className="flex items-center gap-3">
<span className="text-sm text-slate-700 leading-tight font-sans font-medium">
                        Need more build minutes?
                      </span>
</div>
<button className="bg-white px-4 py-2 rounded-full text-xs text-slate-900 shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors font-sans font-medium">
                      See add-ons
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
<div className="flex items-start gap-3">
<div className="mt-1 w-4 h-4 rounded-full border border-indigo-500 flex items-center justify-center shrink-0 group-hover:border-white/40 group-hover:bg-white/20 transition-all duration-500">
<svg className="w-2.5 h-2.5 text-indigo-500 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7"></path>
</svg>
</div>
<span className="text-sm text-slate-600 font-sans font-medium group-hover:text-white/90 transition-colors duration-500">
                      5 active repositories
                    </span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 w-4 h-4 rounded-full border border-indigo-500 flex items-center justify-center shrink-0 group-hover:border-white/40 group-hover:bg-white/20 transition-all duration-500">
<svg className="w-2.5 h-2.5 text-indigo-500 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7"></path>
</svg>
</div>
<span className="text-sm text-slate-600 font-sans font-medium group-hover:text-white/90 transition-colors duration-500">
                      Basic CI/CD analytics
                    </span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 w-4 h-4 rounded-full border border-indigo-500 flex items-center justify-center shrink-0 group-hover:border-white/40 group-hover:bg-white/20 transition-all duration-500">
<svg className="w-2.5 h-2.5 text-indigo-500 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7"></path>
</svg>
</div>
<span className="text-sm text-slate-600 font-sans font-medium group-hover:text-white/90 transition-colors duration-500">
                      10 feature flags
                    </span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 w-4 h-4 rounded-full border border-indigo-500 flex items-center justify-center shrink-0 group-hover:border-white/40 group-hover:bg-white/20 transition-all duration-500">
<svg className="w-2.5 h-2.5 text-indigo-500 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7"></path>
</svg>
</div>
<span className="text-sm text-slate-600 font-sans font-medium group-hover:text-white/90 transition-colors duration-500">
                      30-day log retention
                    </span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 w-4 h-4 rounded-full border border-indigo-500 flex items-center justify-center shrink-0 group-hover:border-white/40 group-hover:bg-white/20 transition-all duration-500">
<svg className="w-2.5 h-2.5 text-indigo-500 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7"></path>
</svg>
</div>
<span className="text-sm text-slate-600 font-sans font-medium group-hover:text-white/90 transition-colors duration-500">
                      Community support
                    </span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 w-4 h-4 rounded-full border border-indigo-500 flex items-center justify-center shrink-0 group-hover:border-white/40 group-hover:bg-white/20 transition-all duration-500">
<svg className="w-2.5 h-2.5 text-indigo-500 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7"></path>
</svg>
</div>
<span className="text-sm text-slate-600 font-sans font-medium group-hover:text-white/90 transition-colors duration-500">
                      5,000 build minutes
                    </span>
</div>
</div>
</div>
</div>
</div>

<div className="group relative rounded-[2rem] w-full transition-all duration-500 hover:-translate-y-1 scroll-enter delay-100">

<div className="absolute -inset-[1px] bg-gradient-to-br from-indigo-400 via-purple-500 to-indigo-600 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="relative flex flex-col h-full bg-[#F5F7FF] group-hover:bg-white border border-indigo-100/50 group-hover:border-transparent rounded-[1.9rem] p-8 md:p-12 transition-all duration-500 overflow-hidden shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] group-hover:shadow-2xl justify-between">

<div className="absolute bottom-0 left-0 w-full h-[55%] bg-gradient-to-t from-indigo-600 via-indigo-500 to-transparent opacity-0 group-hover:opacity-95 transition-opacity duration-500 pointer-events-none z-0"></div>

<div className="relative z-10 flex flex-col h-full justify-between">

<div className="">
<div className="flex items-center gap-2 mb-6">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors duration-500"></div>
<span className="text-sm text-indigo-600 font-sans font-medium group-hover:text-indigo-500 transition-colors duration-500">
                      Organization
                    </span>
</div>
<h3 className="text-4xl text-slate-900 mb-4 font-newsreader tracking-tight">
                    Built for scaling
                    <span className="text-indigo-500 font-newsreader group-hover:text-indigo-500 transition-colors duration-500">
                      engineering teams
                    </span>
</h3>
<div className="flex items-baseline gap-1 mt-8 mb-8">
<span className="text-6xl text-slate-900 font-newsreader">
                      $149
                    </span>
<span className="text-xl text-slate-500 font-sans font-medium">
                      /mo
                    </span>
</div>
<button className="w-full bg-[#111] text-white rounded-full py-4 text-lg hover:bg-slate-800 transition-all shadow-lg shadow-black/20 mb-10 font-sans font-medium group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-xl group-hover:border-transparent">
                    Scale operations
                  </button>
<div className="bg-indigo-100/50 border border-indigo-200/50 rounded-2xl p-4 flex items-center justify-between mb-10 transition-colors duration-500 group-hover:bg-white/90 group-hover:border-white/50 group-hover:shadow-sm">
<div className="flex items-center gap-3">
<span className="text-sm text-slate-700 leading-tight font-sans font-medium">
                        Need enterprise features?
                      </span>
</div>
<button className="bg-white px-4 py-2 rounded-full text-xs text-slate-900 shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors font-sans font-medium">
                      Contact sales
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
<div className="flex items-start gap-3">
<div className="mt-1 w-4 h-4 rounded-full border border-indigo-500 flex items-center justify-center shrink-0 group-hover:border-white/40 group-hover:bg-white/20 transition-all duration-500">
<svg className="w-2.5 h-2.5 text-indigo-500 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7"></path>
</svg>
</div>
<span className="text-sm text-slate-600 font-sans font-medium group-hover:text-white/90 transition-colors duration-500">
                      Unlimited repositories
                    </span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 w-4 h-4 rounded-full border border-indigo-500 flex items-center justify-center shrink-0 group-hover:border-white/40 group-hover:bg-white/20 transition-all duration-500">
<svg className="w-2.5 h-2.5 text-indigo-500 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7"></path>
</svg>
</div>
<span className="text-sm text-slate-600 font-sans font-medium group-hover:text-white/90 transition-colors duration-500">
                      Advanced DORA metrics
                    </span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 w-4 h-4 rounded-full border border-indigo-500 flex items-center justify-center shrink-0 group-hover:border-white/40 group-hover:bg-white/20 transition-all duration-500">
<svg className="w-2.5 h-2.5 text-indigo-500 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7"></path>
</svg>
</div>
<span className="text-sm text-slate-600 font-sans font-medium group-hover:text-white/90 transition-colors duration-500">
                      Unlimited feature flags
                    </span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 w-4 h-4 rounded-full border border-indigo-500 flex items-center justify-center shrink-0 group-hover:border-white/40 group-hover:bg-white/20 transition-all duration-500">
<svg className="w-2.5 h-2.5 text-indigo-500 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7"></path>
</svg>
</div>
<span className="text-sm text-slate-600 font-sans font-medium group-hover:text-white/90 transition-colors duration-500">
                      SSO &amp; Audit logs
                    </span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 w-4 h-4 rounded-full border border-indigo-500 flex items-center justify-center shrink-0 group-hover:border-white/40 group-hover:bg-white/20 transition-all duration-500">
<svg className="w-2.5 h-2.5 text-indigo-500 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7"></path>
</svg>
</div>
<span className="text-sm text-slate-600 font-sans font-medium group-hover:text-white/90 transition-colors duration-500">
                      Priority Slack support
                    </span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 w-4 h-4 rounded-full border border-indigo-500 flex items-center justify-center shrink-0 group-hover:border-white/40 group-hover:bg-white/20 transition-all duration-500">
<svg className="w-2.5 h-2.5 text-indigo-500 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7"></path>
</svg>
</div>
<span className="text-sm text-slate-600 font-sans font-medium group-hover:text-white/90 transition-colors duration-500">
                      Unlimited build minutes
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t pt-10 pb-10">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4" style={{}}>

<div className="overflow-hidden group md:rounded-[2.5rem] md:p-12 md:mb-24 lg:p-16 bg-[#F8F9FB] border-[#000000]/10 border rounded-[2rem] mb-24 pt-8 pr-8 pb-8 pl-8 relative shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] scroll-enter">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 z-10 relative gap-x-12 gap-y-12 items-center">
<div className="max-w-xl">
<h2 className="text-4xl md:text-5xl lg:text-[3.5rem] text-slate-900 leading-[1.1] mb-8 font-newsreader" style={{}}>
                Ready to Ship Faster with Confidence?
              </h2>
<div className="flex flex-wrap gap-4 mb-12 items-center">
<button className="group inline-flex items-center gap-2 bg-[#0F172A] text-white px-8 py-4 rounded-full hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/20 font-sans font-medium" style={{}}>
                  Get Started
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<button className="group inline-flex items-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 font-sans font-medium" style={{}}>
                  View Pricing
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<div className="grid grid-cols-2 gap-8 border-slate-200 border-t pt-8">
<div className="">
<div className="text-3xl text-slate-900 mb-1 font-newsreader" style={{}}>
                    50k+
                  </div>
<div className="text-sm text-slate-500 font-sans font-medium" style={{}}>
                    Active engineers
                  </div>
</div>
<div>
<div className="text-3xl text-slate-900 mb-1 font-newsreader" style={{}}>
                    Top 10
                  </div>
<div className="text-sm text-slate-500 font-sans font-medium" style={{}}>
                    DevTools on GitHub
                  </div>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] transform lg:translate-x-12 transition-transform hover:scale-[1.02] duration-500 overflow-hidden bg-white border-gray-200/80 border rounded-2xl relative shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px]">

<div className="h-9 bg-[#F9FAFB] border-b border-gray-200 flex items-center px-4 gap-2 shrink-0">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
</div>

<div className="ml-3 h-5 flex-1 max-w-[140px] bg-white border border-gray-200 rounded flex items-center px-2">
<div className="w-2 h-2 rounded-full bg-slate-200"></div>
<div className="w-12 h-1 ml-1.5 rounded-full bg-slate-100"></div>
</div>
</div>

<div className="flex flex-1 h-[calc(100%-2.25rem)]">

<div className="flex flex-col gap-3 shrink-0 bg-[#FCFCFD] w-14 border-gray-100 border-r pt-4 pb-4 gap-x-3 gap-y-3 items-center">

<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center mb-1">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24">
<path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
</svg>
</div>

<div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center">
<div className="w-4 h-4 rounded-sm bg-indigo-500/20"></div>
</div>
<div className="w-8 h-8 rounded-lg flex items-center justify-center opacity-60">
<div className="w-4 h-4 rounded-sm bg-slate-300"></div>
</div>
<div className="w-8 h-8 rounded-lg flex items-center justify-center opacity-60">
<div className="w-4 h-4 rounded-sm bg-slate-300"></div>
</div>
<div className="mt-auto w-6 h-6 rounded-full bg-slate-100 border border-slate-200"></div>
</div>

<div className="flex-1 bg-white p-4 flex flex-col overflow-hidden relative">

<div className="flex justify-between items-center mb-4 shrink-0">
<div className="space-y-1.5">
<div className="h-2.5 w-20 bg-slate-900 rounded-sm"></div>
<div className="h-2 w-28 bg-slate-100 rounded-sm"></div>
</div>
<div className="flex gap-2">
<div className="h-7 w-7 bg-white border border-slate-200 rounded-md"></div>
<div className="h-7 w-16 bg-slate-900 rounded-md"></div>
</div>
</div>

<div className="flex-1 flex flex-col gap-3">

<div className="grid grid-cols-2 gap-3 shrink-0">
<div className="h-20 rounded-xl border border-gray-100 p-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)] bg-white flex flex-col justify-between">
<div className="w-6 h-6 rounded bg-indigo-50 border border-indigo-100/50 flex items-center justify-center">
<div className="w-3 h-3 text-indigo-500 rounded-full border-[1.5px] border-current"></div>
</div>
<div className="space-y-1">
<div className="h-1.5 w-8 bg-slate-100 rounded"></div>
<div className="h-3 w-10 bg-slate-900 rounded"></div>
</div>
</div>
<div className="h-20 rounded-xl border border-gray-100 p-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)] bg-white flex flex-col justify-between">
<div className="w-6 h-6 rounded bg-emerald-50 border border-emerald-100/50 flex items-center justify-center">
<div className="w-3 h-3 text-emerald-500 rounded-full border-[1.5px] border-current"></div>
</div>
<div className="space-y-1">
<div className="h-1.5 w-8 bg-slate-100 rounded"></div>
<div className="h-3 w-10 bg-slate-900 rounded"></div>
</div>
</div>
</div>

<div className="flex-1 rounded-xl border border-gray-100 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)] p-3 relative overflow-hidden">
<div className="flex justify-between items-center mb-2 z-10 relative">
<div className="h-2 w-16 bg-slate-100 rounded"></div>
</div>

<div className="absolute inset-0 pt-8 pl-3 pr-3 pb-0">
<div className="w-full h-full border-t border-dashed border-slate-100 relative">
<div className="absolute bottom-0 left-0 right-0 top-2 opacity-10">
<svg className="w-full h-full text-indigo-600 fill-current" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0 40 L0 30 C 20 25, 40 10, 60 20 S 100 5, 100 5 V 40 Z"></path>
</svg>
</div>
<svg className="absolute bottom-0 left-0 right-0 top-2 w-full h-full text-indigo-500 fill-none stroke-current stroke-[0.75]" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0 30 C 20 25, 40 10, 60 20 S 100 5, 100 5"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-indigo-50/10 via-transparent to-transparent -z-0 pointer-events-none"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

<div className="lg:col-span-4 pr-0 lg:pr-12 scroll-enter">
<a className="inline-flex items-center justify-center bg-center w-[130px] h-[50px] bg-[url(https://cdn.midjourney.com/1236bb43-5d1e-478e-a588-0715b46dfd77/0_3.png?w=800&amp;q=80)] bg-cover rounded-full" href="#"></a>
<p className="text-slate-500 leading-relaxed text-base mb-8 max-w-sm font-sans font-medium" style={{}}>
              The intelligent platform for engineering roadmaps, CI/CD
              visibility, and feature-flagged rollouts.
            </p>
<div className="flex items-center gap-5">
<a className="text-slate-900 hover:text-slate-600 transition-colors transform hover:scale-110" href="#">
<svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</a>
<a className="text-slate-900 hover:text-slate-600 transition-colors transform hover:scale-110" href="#">
<svg className="lucide lucide-twitter w-5 h-5 fill-current" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="text-slate-900 hover:text-slate-600 transition-colors transform hover:scale-110" href="#">
<svg className="lucide lucide-linkedin w-5 h-5 fill-current" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>

<div className="lg:col-span-2 scroll-enter delay-100">
<h3 className="text-lg text-slate-900 mb-6 font-sans font-medium" style={{}}>
              Product
            </h3>
<ul className="space-y-4">
<li>
<a className="text-slate-600 hover:text-slate-900 transition-colors font-sans font-medium" href="#" style={{}}>
                  Features
                </a>
</li>
<li>
<a className="text-slate-600 hover:text-slate-900 transition-colors font-sans font-medium" href="#" style={{}}>
                  Methodology
                </a>
</li>
<li>
<a className="text-slate-600 hover:text-slate-900 transition-colors font-sans font-medium" href="#" style={{}}>
                  Integrations
                </a>
</li>
<li className="">
<a className="text-slate-600 hover:text-slate-900 transition-colors font-sans font-medium" href="#" style={{}}>
                  Pricing
                </a>
</li>
</ul>
</div>

<div className="lg:col-span-2 scroll-enter delay-200">
<h3 className="text-lg text-slate-900 mb-6 font-sans font-medium" style={{}}>
              Resources
            </h3>
<ul className="space-y-4">
<li className="">
<a className="text-slate-600 hover:text-slate-900 transition-colors font-sans font-medium" href="#" style={{}}>
                  Documentation
                </a>
</li>
<li className="">
<a className="text-slate-600 hover:text-slate-900 transition-colors font-sans font-medium" href="#" style={{}}>
                  API Reference
                </a>
</li>
<li className="">
<a className="text-slate-600 hover:text-slate-900 transition-colors font-sans font-medium" href="#" style={{}}>
                  Community
                </a>
</li>
<li>
<a className="text-slate-600 hover:text-slate-900 transition-colors font-sans font-medium" href="#" style={{}}>
                  Status
                </a>
</li>
</ul>
</div>

<div className="lg:col-span-4 scroll-enter delay-300">
<div className="bg-white rounded-[1.5rem] p-8 border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow">
<h3 className="text-xl text-slate-900 mb-3 font-sans font-medium" style={{}}>
                Subscribe to Engineering Weekly
              </h3>
<p className="text-slate-500 mb-6 text-sm leading-relaxed font-sans font-medium" style={{}}>
                Get the latest updates on CI/CD trends, engineering metrics, and
                release strategies.
              </p>
<div className="relative group">
<input className="w-full pl-6 pr-36 py-4 bg-slate-50 border border-slate-100 rounded-full text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all" placeholder="Email address" type="email"/>
<button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#0F172A] text-white pl-5 pr-4 rounded-full hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-md font-sans font-medium" style={{}}>
                  Subscribe
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium text-slate-500">
<p className="font-sans font-medium" style={{}}>
            Designed for engineers, by engineers.
          </p>
<p className="font-sans font-medium" style={{}}>
            Copyright © Prism. All Rights Reserved
          </p>
</div>
</div>
</footer>



    </>
  );
}
