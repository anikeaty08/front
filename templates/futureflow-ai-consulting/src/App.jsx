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



      lucide.createIcons();

      // Counter Animation
      const counterElement = document.getElementById('counter');
      const targetNumber = 1000000;
      const duration = 2500; // Animation duration in ms
      let hasAnimated = false;

      function animateValue(obj, start, end, duration) {
          let startTimestamp = null;
          const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);

              // Ease out quart function for smoother landing
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);

              const currentVal = Math.floor(easeOutQuart * (end - start) + start);
              obj.innerHTML = currentVal.toLocaleString();

              if (progress < 1) {
                  window.requestAnimationFrame(step);
              } else {
                  obj.innerHTML = end.toLocaleString();
              }
          };
          window.requestAnimationFrame(step);
      }

      // Intersection Observer for Counter
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting && !hasAnimated) {
                  hasAnimated = true;
                  animateValue(counterElement, 0, targetNumber, duration);
              }
          });
      }, { threshold: 0.2 });

      observer.observe(document.getElementById('impact-section'));

      // Generate Random Floating Pixels (Background decor)
      const pixelContainer = document.getElementById('pixel-container');
      const colors = ['bg-purple-200', 'bg-blue-200', 'bg-emerald-200', 'bg-slate-200', 'bg-orange-200', 'bg-pink-200'];
      const pixelCount = 30; // Number of floating pixels

      for(let i=0; i<pixelCount; i++) {
          const pixel = document.createElement('div');
          // Random styling
          const size = Math.random() < 0.8 ? 'w-3 h-3' : 'w-6 h-6'; // Mostly small, some large
          const color = colors[Math.floor(Math.random() * colors.length)];
          const top = Math.floor(Math.random() * 100) + '%';
          const left = Math.floor(Math.random() * 100) + '%';
          const delay = Math.random() * 3 + 's';
          const duration = (Math.random() * 2 + 2) + 's';

          pixel.className = `pixel-dot ${size} ${color} rounded-sm`;
          pixel.style.top = top;
          pixel.style.left = left;
          pixel.style.animationDelay = delay;
          pixel.style.animationDuration = duration;

          pixelContainer.appendChild(pixel);
      }
    


      document.addEventListener('mousemove', (e) => { const glow = document.querySelector('.cursor-glow'); if (glow) { glow.style.setProperty('--x', `${e.clientX}px`); glow.style.setProperty('--y', `${e.clientY}px`); } });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="cursor-glow"></div>

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white shadow-md">
<svg className="lucide lucide-sparkles w-3.5 h-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
</div>
<span className="font-semibold text-lg tracking-tight text-slate-900">
            FutureFlow
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">
            Platform
          </a>
<a className="hover:text-slate-900 transition-colors" href="#">
            Customers
          </a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">
            Pricing
          </a>
<a className="hover:text-slate-900 transition-colors" href="#">Company</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-slate-600 hover:text-slate-900" href="#">
            Log in
          </a>
<a className="bg-slate-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10" href="#">
            Contact Sales
          </a>
</div>
</div>
</nav>

<main className="pt-32 pb-24 relative">

<div className="max-w-7xl mx-auto px-6 mb-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">
<div className="">
<div className="flex items-center gap-2 text-purple-600 mb-6">
<span className="px-2 py-1 rounded-full bg-purple-50 text-xs font-semibold tracking-wide uppercase border border-purple-100">
                New Workflow v2.0
              </span>
</div>
<h1 className="text-5xl md:text-7xl text-slate-900 leading-[1.05] mb-6 serif tracking-tight">
              Unlock your data,
              <br/>
<span className="italic text-slate-400 font-light">
                scale your soul.
              </span>
</h1>
</div>
<div className="pb-4">
<p className="text-xl text-slate-500 leading-relaxed font-light max-w-lg">
              We help enterprises weave GPT-4 and custom models into their daily
              infrastructure. Move beyond prompting to autonomous systems that
              scale with your needs.
            </p>
</div>
</div>
</div>

<div className="w-full border-y border-slate-50 bg-slate-50/50 mb-32 py-12">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm text-slate-400 mb-8 font-medium">
            Helping everyone from startups to Fortune 10 enterprises
          </p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-1">
<div className="w-8 h-8 rounded-full border-2 border-red-600 flex items-center justify-center overflow-hidden">
<div className="w-full h-full border-2 border-white rounded-full"></div>
</div>
<span className="font-serif font-bold text-xl tracking-widest text-slate-800">
                JLL
              </span>
</div>

<div className="flex items-center gap-1">
<svg className="lucide lucide-activity w-6 h-6 text-slate-900" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
</svg>
<span className="font-bold text-xl tracking-tight text-slate-900">
                vise
              </span>
</div>

<div className="flex items-center gap-1">
<span className="font-serif font-bold text-2xl tracking-tight text-slate-800">
                laurel
              </span>
</div>

<div className="flex items-center gap-2">
<svg className="lucide lucide-send w-5 h-5 text-slate-900 -rotate-45 fill-current" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
<path d="m21.854 2.147-10.94 10.939"></path>
</svg>
<span className="font-bold text-xl tracking-tight text-slate-900">
                ascend
              </span>
</div>
<div className="text-sm font-medium text-slate-400 flex items-center gap-1">
              + many more
            </div>
</div>
</div>
</div>

<div className="relative w-full min-h-[600px] flex flex-col items-center justify-center py-20 overflow-hidden mb-24" id="impact-section">

<div className="z-0 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" id="pixel-container">

<div className="pixel-dot w-3 h-3 bg-purple-200 rounded-sm" style={{top: '13%', left: '20%', animationDelay: '1.090535s', animationDuration: '3.943862s'}}></div>
<div className="pixel-dot w-3 h-3 bg-blue-200 rounded-sm" style={{top: '7%', left: '99%', animationDelay: '2.066978s', animationDuration: '2.058736s'}}></div>
<div className="pixel-dot w-3 h-3 bg-orange-200 rounded-sm" style={{top: '97%', left: '8%', animationDelay: '0.71809s', animationDuration: '2.551199s'}}></div>
<div className="pixel-dot w-3 h-3 bg-purple-200 rounded-sm" style={{top: '36%', left: '59%', animationDelay: '1.363693s', animationDuration: '2.833755s'}}></div>
<div className="pixel-dot w-3 h-3 bg-emerald-200 rounded-sm" style={{top: '32%', left: '12%', animationDelay: '1.138186s', animationDuration: '3.075698s'}}></div>
<div className="pixel-dot w-6 h-6 bg-orange-200 rounded-sm" style={{top: '92%', left: '70%', animationDelay: '1.542415s', animationDuration: '2.53523s'}}></div>
<div className="pixel-dot w-3 h-3 bg-emerald-200 rounded-sm" style={{top: '90%', left: '85%', animationDelay: '0.084176s', animationDuration: '2.424089s'}}></div>
<div className="pixel-dot w-3 h-3 bg-purple-200 rounded-sm" style={{top: '34%', left: '39%', animationDelay: '0.105202s', animationDuration: '2.215558s'}}></div>
<div className="pixel-dot w-3 h-3 bg-pink-200 rounded-sm" style={{top: '54%', left: '47%', animationDelay: '1.45465s', animationDuration: '2.077633s'}}></div>
<div className="pixel-dot w-3 h-3 bg-orange-200 rounded-sm" style={{top: '7%', left: '17%', animationDelay: '1.664169s', animationDuration: '3.695637s'}}></div>
<div className="pixel-dot w-3 h-3 bg-slate-200 rounded-sm" style={{top: '17%', left: '50%', animationDelay: '0.001572s', animationDuration: '2.367277s'}}></div>
<div className="pixel-dot w-3 h-3 bg-pink-200 rounded-sm" style={{top: '32%', left: '66%', animationDelay: '1.362842s', animationDuration: '2.255257s'}}></div>
<div className="pixel-dot w-6 h-6 bg-pink-200 rounded-sm" style={{top: '33%', left: '10%', animationDelay: '2.732891s', animationDuration: '2.525057s'}}></div>
<div className="pixel-dot w-3 h-3 bg-pink-200 rounded-sm" style={{top: '80%', left: '81%', animationDelay: '2.18882s', animationDuration: '2.398927s'}}></div>
<div className="pixel-dot w-3 h-3 bg-blue-200 rounded-sm" style={{top: '20%', left: '83%', animationDelay: '1.782606s', animationDuration: '3.515224s'}}></div>
<div className="pixel-dot w-6 h-6 bg-emerald-200 rounded-sm" style={{top: '24%', left: '23%', animationDelay: '2.325232s', animationDuration: '3.1419s'}}></div>
<div className="pixel-dot w-6 h-6 bg-purple-200 rounded-sm" style={{top: '73%', left: '10%', animationDelay: '0.254223s', animationDuration: '2.212308s'}}></div>
<div className="pixel-dot w-6 h-6 bg-emerald-200 rounded-sm" style={{top: '8%', left: '22%', animationDelay: '1.07472s', animationDuration: '3.582988s'}}></div>
<div className="pixel-dot w-3 h-3 bg-pink-200 rounded-sm" style={{top: '68%', left: '17%', animationDelay: '1.320721s', animationDuration: '3.545836s'}}></div>
<div className="pixel-dot w-6 h-6 bg-slate-200 rounded-sm" style={{top: '76%', left: '37%', animationDelay: '1.374854s', animationDuration: '2.085859s'}}></div>
<div className="pixel-dot w-3 h-3 bg-orange-200 rounded-sm" style={{top: '36%', left: '38%', animationDelay: '0.650403s', animationDuration: '2.209395s'}}></div>
<div className="pixel-dot w-3 h-3 bg-orange-200 rounded-sm" style={{top: '15%', left: '25%', animationDelay: '0.563649s', animationDuration: '3.771113s'}}></div>
<div className="pixel-dot w-3 h-3 bg-slate-200 rounded-sm" style={{top: '96%', left: '58%', animationDelay: '0.263638s', animationDuration: '3.577821s'}}></div>
<div className="pixel-dot w-6 h-6 bg-blue-200 rounded-sm" style={{top: '25%', left: '81%', animationDelay: '1.329091s', animationDuration: '2.129986s'}}></div>
<div className="pixel-dot w-3 h-3 bg-orange-200 rounded-sm" style={{top: '54%', left: '68%', animationDelay: '2.108782s', animationDuration: '3.244646s'}}></div>
<div className="pixel-dot w-3 h-3 bg-emerald-200 rounded-sm" style={{top: '51%', left: '87%', animationDelay: '1.709531s', animationDuration: '2.631572s'}}></div>
<div className="pixel-dot w-3 h-3 bg-purple-200 rounded-sm" style={{top: '71%', left: '83%', animationDelay: '2.018524s', animationDuration: '3.047485s'}}></div>
<div className="pixel-dot w-3 h-3 bg-slate-200 rounded-sm" style={{top: '91%', left: '49%', animationDelay: '1.263618s', animationDuration: '3.690778s'}}></div>
<div className="pixel-dot w-3 h-3 bg-orange-200 rounded-sm" style={{top: '97%', left: '23%', animationDelay: '2.902361s', animationDuration: '2.142399s'}}></div>
<div className="pixel-dot w-3 h-3 bg-slate-200 rounded-sm" style={{top: '12%', left: '41%', animationDelay: '1.903442s', animationDuration: '3.526503s'}}></div>
</div>
<div className="relative z-10 text-center px-4">
<span className="block text-sm md:text-base font-medium text-slate-500 uppercase tracking-[0.2em] mb-4 md:mb-8 bg-white/50 backdrop-blur-sm px-4 py-1 rounded-full w-fit mx-auto border border-slate-100">
            Cumulative Impact
          </span>

<h2 className="text-[12vw] md:text-[8rem] lg:text-[10rem] leading-none tabular-nums md:mb-8 text-slate-900 tracking-tighter font-serif mix-blend-multiply mb-4 drop-shadow-sm">
<span className="" id="counter">0</span>
</h2>
<p className="text-lg md:text-2xl text-slate-500 font-light bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full inline-block border border-slate-100 shadow-sm">
            AI tokens optimized &amp; processed
          </p>
</div>

<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
</div>

<div className="relative max-w-7xl mx-auto px-6 w-full min-h-[700px] flex flex-col lg:block mt-12 mb-32">
<div className="text-center mb-16 lg:hidden">
<h3 className="text-2xl font-serif text-slate-900 mb-2">
            The Architecture
          </h3>
<p className="text-slate-500">How we process your data securely.</p>
</div>

<div className="relative lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-full max-w-md mx-auto h-[400px] z-10 perspective-[1000px] flex justify-center items-center">

<div className="absolute w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

<div className="layer-base absolute w-64 h-64 bg-white/60 border border-slate-200 rounded-full shadow-xl flex items-center justify-center backdrop-blur-sm" style={{top: '180px'}}>
<div className="transform -rotate-z-[-45deg] -rotate-x-[60deg]">
<div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
<svg className="lucide lucide-file-check w-6 h-6 text-slate-400" data-lucide="file-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
<path d="m9 15 2 2 4-4"></path>
</svg>
</div>
</div>
</div>

<div className="layer-mid absolute w-64 h-64 bg-gradient-to-br from-white/90 to-purple-50/50 border border-purple-200 rounded-full shadow-2xl flex items-center justify-center glow-pulse backdrop-blur-md" style={{top: '90px', zIndex: '2'}}>

<div className="absolute inset-0 rounded-full opacity-20" style={{backgroundImage: 'radial-gradient(#a855f7 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="transform -rotate-z-[-45deg] -rotate-x-[60deg] bg-white p-4 rounded-xl shadow-lg border border-purple-100 flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
<span className="text-xs font-semibold text-purple-700 tracking-wide uppercase">
                Processing
              </span>
</div>
</div>

<div className="layer-top absolute w-64 h-64 bg-white border border-slate-200 rounded-full shadow-2xl flex items-center justify-center z-10" style={{top: '0px'}}>
<div className="transform -rotate-z-[-45deg] -rotate-x-[60deg] text-center">
<span className="block text-sm font-serif text-slate-400 italic mb-1">
                Raw Data
              </span>
<div className="bg-slate-50 border border-slate-100 px-4 py-2 rounded-full shadow-sm">
<svg className="lucide lucide-database w-5 h-5 text-slate-700 mx-auto" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
<path d="M3 12A9 3 0 0 0 21 12"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="lg:absolute lg:top-24 lg:left-0 lg:max-w-xs space-y-3 z-20 group cursor-default p-6 rounded-2xl hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-2 mb-2">
<div className="bg-white p-1.5 rounded shadow-sm border border-slate-100">
<svg className="lucide lucide-shield-check w-4 h-4 text-slate-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<h3 className="font-medium text-slate-900 text-lg">Secure Context</h3>
</div>
<p className="text-base text-slate-500 font-light leading-relaxed">
            Data never leaves your secure VPC. We inject context dynamically,
            ensuring strategic boundaries are respected before any generation
            occurs.
          </p>
<svg className="hidden lg:block absolute -right-16 top-10 w-16 h-[1px] text-slate-300" overflow="visible">
<line stroke="currentColor" stroke-dasharray="4 2" x1="0" x2="60" y1="0" y2="40"></line>
</svg>
</div>

<div className="mt-8 lg:mt-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 lg:max-w-xs space-y-3 z-20 p-6 rounded-2xl hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-2 mb-2">
<div className="bg-white p-1.5 rounded shadow-sm border border-slate-100">
<svg className="lucide lucide-cpu w-4 h-4 text-purple-600" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20v2"></path>
<path d="M12 2v2"></path>
<path d="M17 20v2"></path>
<path d="M17 2v2"></path>
<path d="M2 12h2"></path>
<path d="M2 17h2"></path>
<path d="M2 7h2"></path>
<path d="M20 12h2"></path>
<path d="M20 17h2"></path>
<path d="M20 7h2"></path>
<path d="M7 20v2"></path>
<path d="M7 2v2"></path>
<rect height="16" rx="2" width="16" x="4" y="4"></rect>
<rect height="8" rx="1" width="8" x="8" y="8"></rect>
</svg>
</div>
<h3 className="font-medium text-slate-900 text-lg">The Engine</h3>
</div>
<p className="text-base text-slate-500 font-light leading-relaxed">
            Deep integration with GPT-4 and Claude 3. We manage context windows
            and recursive refinement to eliminate hallucinations.
          </p>
<svg className="hidden lg:block absolute -left-16 top-10 w-16 h-[1px] text-purple-300" overflow="visible">
<line stroke="currentColor" x1="0" x2="60" y1="0" y2="0"></line>
<circle cx="60" cy="0" fill="#a855f7" r="2"></circle>
</svg>
</div>

<div className="mt-8 lg:mt-0 lg:absolute lg:bottom-12 lg:left-0 lg:max-w-xs space-y-3 z-20 p-6 rounded-2xl hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-2 mb-2">
<div className="bg-white p-1.5 rounded shadow-sm border border-slate-100">
<svg className="lucide lucide-git-branch w-4 h-4 text-slate-400" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="6" x2="6" y1="3" y2="15"></line>
<circle cx="18" cy="6" r="3"></circle>
<circle cx="6" cy="18" r="3"></circle>
<path d="M18 9a9 9 0 0 1-9 9"></path>
</svg>
</div>
<h3 className="font-medium text-slate-900 text-lg">
              Iterative Feedback
            </h3>
</div>
<p className="text-base text-slate-500 font-light leading-relaxed">
            Automated feedback loops allow the system to self-correct. Like a
            senior editor, it reviews output against your brand guidelines.
          </p>
<svg className="hidden lg:block absolute -right-16 top-10 w-16 h-[1px] text-slate-300" overflow="visible">
<line stroke="currentColor" stroke-dasharray="4 2" x1="0" x2="60" y1="0" y2="-60"></line>
</svg>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-100" id="pricing">
<div className="text-center max-w-2xl mx-auto mb-16">
<div className="flex items-center justify-center gap-2 text-lime-700 mb-6">
<svg className="lucide lucide-circle-dollar-sign w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
<path d="M12 18V6"></path>
</svg>
<span className="text-sm font-medium tracking-wide">
              Flexible plans
            </span>
</div>
<h2 className="text-5xl md:text-6xl text-slate-900 font-serif tracking-tight leading-[1.1] mb-4">
            Choose the plan
            <br className="hidden md:block"/>
            that
            <span className="text-purple-600">best fits</span>
            your needs
          </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="border border-slate-200 rounded-xl p-8 bg-gradient-to-b from-blue-50/40 via-white to-white flex flex-col h-full hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 relative group">
<div className="mb-6">
<div className="w-10 h-10 bg-white rounded-lg border border-slate-100 flex items-center justify-center text-blue-500 shadow-sm mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-file-text w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
<path d="M10 9H8"></path>
<path d="M16 13H8"></path>
<path d="M16 17H8"></path>
</svg>
</div>
<h3 className="font-serif text-3xl text-slate-900 mb-2">Standard</h3>
<p className="text-slate-500 text-sm">
                Pay-as-you-go for early-stage teams
              </p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-2 mb-1">
<span className="text-4xl font-semibold text-slate-900">Free</span>
</div>
<p className="text-slate-400 text-sm">Up to your first 15K credits</p>
</div>
<button className="w-full bg-slate-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10 mb-8">
              Get started
            </button>
<div className="mt-auto">
<p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4">
                Core Functionality
              </p>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-slate-600">
<svg className="lucide lucide-check w-4 h-4 text-blue-500 shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Parse API
                </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<svg className="lucide lucide-check w-4 h-4 text-blue-500 shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Extract API
                </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<svg className="lucide lucide-check w-4 h-4 text-blue-500 shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Edit API
                </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<svg className="lucide lucide-check w-4 h-4 text-blue-500 shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Split API
                </li>
</ul>
</div>
</div>

<div className="border border-slate-200 rounded-xl p-8 bg-gradient-to-b from-lime-50/40 via-white to-white flex flex-col h-full hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 relative group">
<div className="absolute top-4 right-4 bg-lime-100 text-lime-800 text-xs font-semibold px-3 py-1 rounded-full">
              Most Popular
            </div>
<div className="mb-6">
<div className="w-10 h-10 bg-white rounded-lg border border-slate-100 flex items-center justify-center text-lime-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-arrow-up-right w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
<h3 className="font-serif text-3xl text-slate-900 mb-2">Growth</h3>
<p className="text-slate-500 text-sm">Built for scaling teams</p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-2 mb-1">
<span className="text-4xl font-semibold text-slate-900">
                  Custom pricing
                </span>
</div>
</div>
<button className="w-full bg-slate-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10 mb-8">
              Get started
            </button>
<div className="mt-auto">
<p className="text-[10px] font-bold text-lime-700 uppercase tracking-wider mb-4">
                Everything in Standard, plus:
              </p>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-slate-600">
<svg className="lucide lucide-check w-4 h-4 text-lime-600 shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Volume Discounts
                </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<svg className="lucide lucide-check w-4 h-4 text-lime-600 shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Zero Data Retention Agreement
                </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<svg className="lucide lucide-check w-4 h-4 text-lime-600 shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Business Associate Agreement
                </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<svg className="lucide lucide-check w-4 h-4 text-lime-600 shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Premium Rate Limits
                </li>
</ul>
</div>
</div>

<div className="border border-slate-200 rounded-xl p-8 bg-gradient-to-b from-purple-50/40 via-white to-white flex flex-col h-full hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 relative group">
<div className="mb-6">
<div className="w-10 h-10 bg-white rounded-lg border border-slate-100 flex items-center justify-center text-purple-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-building-2 w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
<path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
<path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
<path d="M10 6h4"></path>
<path d="M10 10h4"></path>
<path d="M10 14h4"></path>
<path d="M10 18h4"></path>
</svg>
</div>
<h3 className="font-serif text-3xl text-slate-900 mb-2">
                Enterprise
              </h3>
<p className="text-slate-500 text-sm">
                Built for full control &amp; custom needs
              </p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-2 mb-1">
<span className="text-4xl font-semibold text-slate-900">
                  Custom pricing
                </span>
</div>
</div>
<button className="w-full bg-slate-50 text-slate-900 border border-slate-200 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors mb-8 flex items-center justify-center gap-2 group-hover:border-slate-300">
              Contact sales
              <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<div className="mt-auto">
<p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-4">
                Everything in Growth, plus:
              </p>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-slate-600">
<svg className="lucide lucide-check w-4 h-4 text-purple-600 shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  VPC and On-Prem Deployments
                </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<svg className="lucide lucide-check w-4 h-4 text-purple-600 shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Custom MSA
                </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<svg className="lucide lucide-check w-4 h-4 text-purple-600 shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Custom SLA
                </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<svg className="lucide lucide-check w-4 h-4 text-purple-600 shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Custom Rate Limits
                </li>
</ul>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mt-32 border-t border-slate-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<span className="font-serif italic font-semibold">F</span>
</div>
<p className="text-slate-500 text-sm">© 2024 FutureFlow Inc.</p>
</div>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</a>
</div>
</div>
</main>



    </>
  );
}
