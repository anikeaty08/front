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
colors: {
brand: {
400: '#60a5fa',
500: '#3b82f6',
600: '#2563eb',
700: '#1d4ed8',
},
slate: {
850: '#1e293b',
900: '#0f172a',
950: '#020617',
},
emerald: {
500: '#10b981',
}
},
animation: {
'spin-slow': 'spin-slow 20s linear infinite',
}
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



      // Icons
      lucide.createIcons();

      // Scroll Animation Observer
      const observerOptions = {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px"
      };

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('active');

                  // Trigger counters/bars
                  const bars = entry.target.querySelectorAll('.progress-bar');
                  bars.forEach(bar => {
                      // handled by CSS class active on parent
                  });
              }
          });
      }, observerOptions);

      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    


      (function(){const s=document.getElementById('card-stack');if(!s)return;const cT=s.querySelector('[data-index="0"]'),cM=s.querySelector('[data-index="1"]'),cB=s.querySelector('[data-index="2"]');let cards=[cT,cM,cB];function update(){cards.forEach((c,i)=>{c.style.zIndex=30-(i*10);const sc=1-(i*0.05),y=i*50,x=i*20,r=i*4,op=1-(i*0.1);c.style.transform=`translate(${x}px,${y}px) rotate(${r}deg) scale(${sc})`;c.style.opacity=op;c.style.pointerEvents=i===0?'auto':'none';c.classList.remove('swiping')})}let sx=0,cx=0,drag=false;function start(e){if(!e.target.closest('.stack-card')||e.target.closest('.stack-card')!==cards[0])return;drag=true;sx=e.type.includes('mouse')?e.clientX:e.touches[0].clientX;cards[0].classList.add('swiping')}function move(e){if(!drag)return;e.preventDefault();const x=e.type.includes('mouse')?e.clientX:e.touches[0].clientX;cx=x-sx;const r=cx*0.05;cards[0].style.transform=`translate(${cx}px,0) rotate(${r}deg) scale(1)`}function end(){if(!drag)return;drag=false;if(Math.abs(cx)>100){const dir=cx>0?1:-1;const endX=window.innerWidth*dir*0.5;cards[0].style.transition='transform 0.4s ease-in, opacity 0.4s ease';cards[0].style.transform=`translate(${endX}px,50px) rotate(${dir*30}deg)`;cards[0].style.opacity='0';setTimeout(()=>{cards.push(cards.shift());cards.forEach(c=>c.style.transition='');update()},300)}else{update()}cx=0}s.addEventListener('mousedown',start);s.addEventListener('touchstart',start);window.addEventListener('mousemove',move);window.addEventListener('touchmove',move,{passive:false});window.addEventListener('mouseup',end);window.addEventListener('touchend',end);update()})();
    


      const menuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      if(menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
          const isHidden = mobileMenu.classList.contains('invisible');
          if(isHidden) {
            mobileMenu.classList.remove('invisible', 'opacity-0', 'scale-95');
            mobileMenu.classList.add('opacity-100', 'scale-100');
          } else {
            mobileMenu.classList.add('invisible', 'opacity-0', 'scale-95');
            mobileMenu.classList.remove('opacity-100', 'scale-100');
          }
        });
        mobileMenu.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => {
             mobileMenu.classList.add('invisible', 'opacity-0', 'scale-95');
             mobileMenu.classList.remove('opacity-100', 'scale-100');
          });
        });
        document.addEventListener('click', (e) => {
          if(!menuBtn.contains(e.target) && !mobileMenu.contains(e.target) && !mobileMenu.classList.contains('invisible')) {
             mobileMenu.classList.add('invisible', 'opacity-0', 'scale-95');
             mobileMenu.classList.remove('opacity-100', 'scale-100');
          }
        });
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
      

<nav className="fixed top-0 w-full flex justify-between items-center py-5 px-6 lg:px-12 z-50 transition-all duration-300 border-b backdrop-blur-2xl bg-slate-950/70 border-white/10">
<a className="flex gap-3 group cursor-pointer gap-x-3 gap-y-3 items-center" href="/home">

<div className="w-8 h-8 bg-brand-600 rounded-md flex items-center justify-center">
<svg className="lucide lucide-bar-chart-2 w-5 h-5 text-white" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
<span className="text-lg font-medium text-white tracking-tight">
          Orizon
        </span>
</a>
<div className="hidden lg:flex gap-8 text-sm text-slate-400 font-medium">
<a className="hover:text-white transition-colors" href="/how-it-works">
  How It Works
</a>
<a className="hover:text-white transition-colors" href="/portfolios">
  Portfolios
</a>
<a className="hover:text-white transition-colors" href="/strategy">
  Strategy
</a>
<a className="hover:text-white transition-colors" href="/disclosures">
  Disclosure
</a>
</div>
<div className="flex items-center gap-4">
<a className="flex items-center gap-2 text-sm font-medium bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full border border-white/10 transition-all text-white" href="#start">
          Start Investing
          <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<button aria-label="Open menu" className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none" id="mobile-menu-btn">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 19h6"></path>
<path d="M9 12h6"></path>
<path d="M15 5h6"></path>
</svg>
</button>
</div>
<div className="absolute top-full right-6 mt-4 w-64 bg-slate-950/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl transform origin-top-right transition-all duration-300 scale-95 opacity-0 invisible flex flex-col gap-4 z-50" id="mobile-menu">
<a className="block text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#how-it-works">
          How It Works
        </a>
<a className="block text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#portfolios">
          Portfolios
        </a>
<a className="block text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#philosophy">
          Philosophy
        </a>
<a className="block text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#education">
          Education
        </a>
</div>
</nav>

<header className="relative pt-40 pb-32 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">

<div className="relative z-10 mb-16 reveal active max-w-4xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium uppercase tracking-wider mb-6">
<span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
          Data-Driven Guidance
        </div>
<h1 className="text-5xl md:text-7xl font-medium leading-[1.1] tracking-tight text-white">
          Smart investing for the
          <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-400">
            long term.
          </span>
</h1>
</div>
<div className="grid lg:grid-cols-12 gap-16 items-start">

<div className="lg:col-span-5 flex flex-col gap-10 reveal delay-200 active">
<p className="text-lg text-slate-400 font-normal leading-relaxed">
            We guide you through the noise of the market. Explore expert-modeled
            stock and ETF portfolios tailored to your risk tolerance, then
            invest securely with our trusted partners.
          </p>
<div className="flex flex-col sm:flex-row sm:items-center gap-4 gap-x-4 gap-y-4 items-start">
<button className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-slate-950 sm:w-auto w-full transition-all duration-300 shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] hover:shadow-[0_0_50px_-10px_rgba(59,130,246,0.6)] hover:-translate-y-1" onclick="document.getElementById('portfolios').scrollIntoView({behavior: 'smooth'})">

<span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#020617_0%,#3b82f6_50%,#020617_100%)] opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>

<span className="relative flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-base font-medium text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-slate-900/90">

<span className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent shadow-[0_0_10px_rgba(96,165,250,0.5)]"></span>

<span className="flex items-center gap-2 tracking-wide">
                  Start Investing
                  <svg className="w-4 h-4 transition-transform duration-300 grouph14" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</span>
</button>
<div className="flex items-center gap-4 px-4">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full ring-4 ring-slate-950 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-[10px] font-semibold text-white tracking-wider shadow-lg">
                  JP
                </div>
<div className="w-10 h-10 rounded-full ring-4 ring-slate-950 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-[10px] font-semibold text-white tracking-wider shadow-lg">
                  MS
                </div>
<div className="w-10 h-10 rounded-full ring-4 ring-slate-950 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-[10px] font-semibold text-white tracking-wider shadow-lg">
                  GS
                </div>
</div>
<span className="text-sm text-slate-400 font-medium">
                Partnered with top tier platforms
              </span>
</div>
</div>
<div className="pt-6 border-t border-white/5">
<div className="grid grid-cols-3 gap-6">
<div className="">
<p className="text-3xl font-medium text-white tracking-tight">0%</p>
<p className="text-xs text-slate-500 uppercase tracking-wide mt-1">
                  Advisory Fees
                </p>
</div>
<div>
<p className="text-3xl font-medium text-white tracking-tight">4</p>
<p className="text-xs text-slate-500 uppercase tracking-wide mt-1">
                  Model Portfolios
                </p>
</div>
<div>
<p className="text-3xl font-medium text-white tracking-tight">
                  24/7
                </p>
<p className="text-xs text-slate-500 uppercase tracking-wide mt-1">
                  Digital Guidance
                </p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 relative h-[500px] flex justify-center items-center perspective-1000 reveal delay-300 w-full active" id="hero-stack-container">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-900/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative w-80 h-96" id="card-stack">

<div className="stack-card absolute inset-0 w-full h-full bg-slate-800 rounded-2xl border border-white/10 p-6 flex flex-col z-10" data-index="2" style={{zIndex: '10', transform: 'translate(40px, 100px) rotate(8deg) scale(0.9)', opacity: '0.8', pointerEvents: 'none'}}>
<div className="flex justify-between items-center mb-6">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Top Holdings
                </span>
<div className="p-2 bg-white/5 rounded-lg">
<svg className="text-slate-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="m19 9-5 5-4-4-3 3"></path>
</svg>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg border border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-semibold">
                      AP
                    </div>
<div>
<div className="text-sm font-medium text-white">
                        Apple Inc.
                      </div>
<div className="text-[10px] text-slate-400">Technology</div>
</div>
</div>
<span className="text-sm font-medium text-emerald-400">5.2%</span>
</div>
<div className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg border border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs font-semibold">
                      MS
                    </div>
<div>
<div className="text-sm font-medium text-white">
                        Microsoft
                      </div>
<div className="text-[10px] text-slate-400">Software</div>
</div>
</div>
<span className="text-sm font-medium text-emerald-400">4.8%</span>
</div>
<div className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg border border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-semibold">
                      AM
                    </div>
<div>
<div className="text-sm font-medium text-white">Amazon</div>
<div className="text-[10px] text-slate-400">Consumer</div>
</div>
</div>
<span className="text-sm font-medium text-emerald-400">3.1%</span>
</div>
</div>
</div>

<div className="stack-card absolute inset-0 w-full h-full bg-slate-900 rounded-2xl border border-white/10 p-6 flex flex-col z-20" data-index="1" style={{zIndex: '20', transform: 'translate(20px, 50px) rotate(4deg) scale(0.95)', opacity: '0.9', pointerEvents: 'none'}}>
<div className="flex justify-between items-center mb-6">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Asset Allocation
                </span>
<svg className="lucide lucide-pie-chart w-4 h-4 text-slate-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path>
<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
</svg>
</div>
<div className="relative w-32 h-32 mx-auto mb-6">

<svg className="w-full h-full rotate-[-90deg]" viewbox="0 0 100 100">

<circle cx="50" cy="50" fill="none" r="40" stroke="#1e293b" strokeWidth="12"></circle>

<circle className="donut-segment" cx="50" cy="50" fill="none" r="40" stroke="#3b82f6" stroke-dasharray="151 1000" strokeLinecap="butt" strokeWidth="12" style={{'--dash': '151', '--offset': '0'}}></circle>

<circle className="donut-segment" cx="50" cy="50" fill="none" r="40" stroke="#1d4ed8" stroke-dasharray="100 1000" stroke-dashoffset="-151" strokeLinecap="butt" strokeWidth="12" style={{'--dash': '100', '--offset': '-151'}}></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<span className="text-xl font-medium text-white">60%</span>
<span className="text-[9px] text-slate-500 uppercase tracking-wide">
                    Equities
                  </span>
</div>
</div>
<div className="flex gap-2 text-xs justify-center">
<div className="flex items-center gap-1.5 text-slate-300">
<div className="w-2 h-2 rounded-full bg-brand-500"></div>
                  Stocks
                </div>
<div className="flex items-center gap-1.5 text-slate-300">
<div className="w-2 h-2 rounded-full bg-brand-700"></div>
                  Bonds
                </div>
</div>
</div>

<div className="stack-card absolute inset-0 w-full h-full bg-slate-800 rounded-2xl border border-white/10 p-8 flex flex-col z-30 cursor-grab active:cursor-grabbing" data-index="0" style={{zIndex: '30', transform: 'translate(0px, 0px) rotate(0deg) scale(1)', opacity: '1', pointerEvents: 'auto'}}>
<div className="flex justify-between items-start mb-8">
<div>
<span className="text-xs font-medium text-brand-400 uppercase tracking-wider block mb-1">
                    Projected Growth
                  </span>
<span className="text-3xl font-medium text-white tracking-tight">
                    $42,509
                  </span>
</div>
<div className="bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                  +8.4%
                  <svg className="w-3 h-3" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path>
<path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
</div>
</div>
<div className="flex-1 flex items-end justify-between gap-2 mb-6 pointer-events-none">
<div className="w-full bg-slate-700/50 rounded-t-sm h-[20%] relative group">
<div className="absolute bottom-0 w-full bg-brand-600/40 h-full"></div>
</div>
<div className="w-full bg-slate-700/50 rounded-t-sm h-[35%] relative group">
<div className="absolute bottom-0 w-full bg-brand-600/50 h-full"></div>
</div>
<div className="w-full bg-slate-700/50 rounded-t-sm h-[45%] relative group">
<div className="absolute bottom-0 w-full bg-brand-600/60 h-full"></div>
</div>
<div className="w-full bg-slate-700/50 rounded-t-sm h-[60%] relative group">
<div className="absolute bottom-0 w-full bg-brand-600/70 h-full"></div>
</div>
<div className="w-full bg-slate-700/50 rounded-t-sm h-[85%] relative group">
<div className="absolute bottom-0 w-full bg-brand-500 h-full"></div>
</div>
</div>
<div className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg border border-white/5 pointer-events-none">
<div className="w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div>
<p className="text-xs font-medium text-white">
                    Aggressive Portfolio
                  </p>
<p className="text-[10px] text-slate-500">
                    High Risk / High Reward
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="bg-slate-50 text-slate-900 py-24 px-6 lg:px-12 rounded-t-[3rem] relative z-20" id="portfolios">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
<div>
<p className="text-xs font-semibold tracking-wider uppercase text-brand-600 mb-4 flex items-center gap-2">
<span className="w-8 h-[1px] bg-gradient-to-r from-brand-600 to-transparent"></span>
              Model Portfolios
            </p>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">
              Strategies built for
              <br/>
              every risk level.
            </h2>
</div>
<div className="flex items-end">
<p className="text-lg text-slate-600 font-normal leading-relaxed max-w-lg">
              We don't chase trends. Our portfolios use broad-market ETFs to
              balance risk and reward based on your specific financial horizon.
            </p>
</div>
</div>

<div className="grid md:grid-cols-3 gap-6">

<div className="border border-slate-200 rounded-2xl p-8 flex flex-col justify-between min-h-[420px] relative hover-card-rise reveal delay-100 group bg-gradient-to-b from-white to-slate-50 shadow-sm">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
<svg className="lucide lucide-shield w-6 h-6" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<span className="text-xs font-semibold uppercase tracking-wide bg-slate-100 text-slate-600 px-2 py-1 rounded">
                Low Risk
              </span>
</div>
<div className="mb-6">
<h3 className="text-2xl font-medium text-slate-900 mb-2 tracking-tight">
                Conservative
              </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                Prioritizes capital preservation. Best for short time horizons.
              </p>
</div>

<div className="relative w-48 h-48 mx-auto my-4">
<svg className="w-full h-full" viewbox="0 0 100 100">
<g transform="rotate(-90 50 50)">

<circle cx="50" cy="50" fill="none" r="36" stroke="#f1f5f9" strokeWidth="18"></circle>

<circle className="donut-segment" cx="50" cy="50" fill="none" r="36" stroke="#2563eb" stroke-dasharray="158.3 1000" strokeLinecap="butt" strokeWidth="18" style={{'--dash': '158.3', '--offset': '0'}}></circle>

<circle className="donut-segment" cx="50" cy="50" fill="none" r="36" stroke="#93c5fd" stroke-dasharray="45.2 1000" strokeLinecap="butt" strokeWidth="18" style={{'--dash': '45.2', '--offset': '-158.3'}}></circle>

<circle className="donut-segment" cx="50" cy="50" fill="none" r="36" stroke="#e2e8f0" stroke-dasharray="22.6 1000" strokeLinecap="butt" strokeWidth="18" style={{'--dash': '22.6', '--offset': '-203.5'}}></circle>
</g>

<text className="font-semibold text-[5px] fill-white chart-label" dominant-baseline="central" text-anchor="middle" x="79" y="71">
                  70%
                </text>
<text className="font-semibold text-[5px] fill-slate-900 chart-label" dominant-baseline="central" text-anchor="middle" x="16" y="39">
                  20%
                </text>
<text className="font-semibold text-[5px] fill-slate-600 chart-label" dominant-baseline="central" text-anchor="middle" x="39" y="16">
                  10%
                </text>
</svg>
</div>
<div className="grid grid-cols-2 gap-3 text-xs mt-4">
<div className="flex items-center gap-2">
<span className="legend-dot bg-brand-600"></span>
<span className="text-slate-900 font-medium">Bonds</span>
</div>
<div className="flex items-center gap-2">
<span className="legend-dot bg-blue-300"></span>
<span className="text-slate-600">Stocks</span>
</div>
<div className="flex items-center gap-2">
<span className="legend-dot bg-slate-200"></span>
<span className="text-slate-600">Cash</span>
</div>
</div>
</div>

<div className="bg-slate-900 rounded-2xl p-8 flex flex-col justify-between min-h-[420px] text-white relative hover-card-rise reveal delay-200 shadow-xl overflow-hidden group">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-900/40 rounded-full blur-3xl group-hover:bg-brand-800/40 transition-colors"></div>
<div className="flex justify-between items-start mb-6 relative z-10">
<div className="w-12 h-12 bg-brand-600 rounded-lg flex items-center justify-center text-white">
<svg className="lucide lucide-scale w-6 h-6" data-lucide="scale" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path><path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M7 21h10"></path></svg>
</div>
<span className="text-xs font-semibold uppercase tracking-wide bg-brand-900/50 text-brand-300 border border-brand-500/20 px-2 py-1 rounded">
                Moderate Risk
              </span>
</div>
<div className="mb-6 relative z-10">
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">
                Balanced
              </h3>
<p className="text-sm text-slate-400 leading-relaxed">
                A blend of growth and stability. Suitable for medium-term
                outlooks.
              </p>
</div>

<div className="relative w-48 h-48 mx-auto my-4 z-10">
<svg className="w-full h-full" viewbox="0 0 100 100">
<g transform="rotate(-90 50 50)">
<circle cx="50" cy="50" fill="none" r="36" stroke="#1e293b" strokeWidth="18"></circle>

<circle className="donut-segment" cx="50" cy="50" fill="none" r="36" stroke="#3b82f6" stroke-dasharray="101.8 1000" strokeLinecap="butt" strokeWidth="18" style={{'--dash': '101.8', '--offset': '0'}}></circle>

<circle className="donut-segment" cx="50" cy="50" fill="none" r="36" stroke="#64748b" stroke-dasharray="67.9 1000" strokeLinecap="butt" strokeWidth="18" style={{'--dash': '67.9', '--offset': '-101.8'}}></circle>

<circle className="donut-segment" cx="50" cy="50" fill="none" r="36" stroke="#93c5fd" stroke-dasharray="33.9 1000" strokeLinecap="butt" strokeWidth="18" style={{'--dash': '33.9', '--offset': '-169.7'}}></circle>

<circle className="donut-segment" cx="50" cy="50" fill="none" r="36" stroke="#10b981" stroke-dasharray="22.6 1000" strokeLinecap="butt" strokeWidth="18" style={{'--dash': '22.6', '--offset': '-203.6'}}></circle>
</g>

<text className="font-semibold text-[5px] fill-white chart-label" dominant-baseline="central" text-anchor="middle" x="85.5" y="44.3">
                  45%
                </text>
<text className="font-semibold text-[5px] fill-white chart-label" dominant-baseline="central" text-anchor="middle" x="28.8" y="79.1">
                  30%
                </text>
<text className="font-semibold text-[5px] fill-slate-900 chart-label" dominant-baseline="central" text-anchor="middle" x="18" y="34">
                  15%
                </text>
<text className="font-semibold text-[5px] fill-white chart-label" dominant-baseline="central" text-anchor="middle" x="39" y="16">
                  10%
                </text>
</svg>
</div>
<div className="grid grid-cols-2 gap-3 text-xs mt-4 relative z-10">
<div className="flex items-center gap-2">
<span className="legend-dot bg-brand-500"></span>
<span className="text-slate-200 font-medium">US Stock</span>
</div>
<div className="flex items-center gap-2">
<span className="legend-dot bg-slate-500"></span>
<span className="text-slate-400">Bonds</span>
</div>
<div className="flex items-center gap-2">
<span className="legend-dot bg-blue-300"></span>
<span className="text-slate-400">Intl Stock</span>
</div>
<div className="flex items-center gap-2">
<span className="legend-dot bg-emerald-500"></span>
<span className="text-slate-400">Real Est</span>
</div>
</div>
</div>

<div className="border border-slate-200 rounded-2xl p-8 flex flex-col justify-between min-h-[420px] relative hover-card-rise reveal delay-300 group bg-gradient-to-b from-white to-slate-50 shadow-sm">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
<svg className="lucide lucide-trending-up w-6 h-6" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="text-xs font-semibold uppercase tracking-wide bg-slate-100 text-slate-600 px-2 py-1 rounded">
                High Risk
              </span>
</div>
<div className="mb-6">
<h3 className="text-2xl font-medium text-slate-900 mb-2 tracking-tight">
                Aggressive Growth
              </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                Maximizes long-term growth potential. Designed for those with
                10+ years to invest.
              </p>
</div>

<div className="relative w-48 h-48 mx-auto my-4">
<svg className="w-full h-full" viewbox="0 0 100 100">
<g transform="rotate(-90 50 50)">
<circle cx="50" cy="50" fill="none" r="36" stroke="#f1f5f9" strokeWidth="18"></circle>

<circle className="donut-segment" cx="50" cy="50" fill="none" r="36" stroke="#10b981" stroke-dasharray="124.4 1000" strokeLinecap="butt" strokeWidth="18" style={{'--dash': '124.4', '--offset': '0'}}></circle>

<circle className="donut-segment" cx="50" cy="50" fill="none" r="36" stroke="#6ee7b7" stroke-dasharray="56.5 1000" strokeLinecap="butt" strokeWidth="18" style={{'--dash': '56.5', '--offset': '-124.4'}}></circle>

<circle className="donut-segment" cx="50" cy="50" fill="none" r="36" stroke="#a7f3d0" stroke-dasharray="33.9 1000" strokeLinecap="butt" strokeWidth="18" style={{'--dash': '33.9', '--offset': '-180.9'}}></circle>

<circle className="donut-segment" cx="50" cy="50" fill="none" r="36" stroke="#cbd5e1" stroke-dasharray="11.3 1000" strokeLinecap="butt" strokeWidth="18" style={{'--dash': '11.3', '--offset': '-214.8'}}></circle>
</g>

<text className="font-semibold text-[5px] fill-white chart-label" dominant-baseline="central" text-anchor="middle" x="85.5" y="55.6">
                  55%
                </text>
<text className="font-semibold text-[5px] fill-emerald-950 chart-label" dominant-baseline="central" text-anchor="middle" x="17.9" y="66.3">
                  25%
                </text>
<text className="font-semibold text-[5px] fill-emerald-900 chart-label" dominant-baseline="central" text-anchor="middle" x="24.5" y="24.5">
                  15%
                </text>
<text className="font-semibold text-[4px] fill-slate-700 chart-label" dominant-baseline="central" text-anchor="middle" x="44.3" y="14.4">
                  5%
                </text>
</svg>
</div>
<div className="grid grid-cols-2 gap-3 text-xs mt-4">
<div className="flex items-center gap-2">
<span className="legend-dot bg-emerald-500"></span>
<span className="text-slate-900 font-medium">Growth</span>
</div>
<div className="flex items-center gap-2">
<span className="legend-dot bg-emerald-300"></span>
<span className="text-slate-600">Intl</span>
</div>
<div className="flex items-center gap-2">
<span className="legend-dot bg-emerald-200"></span>
<span className="text-slate-600">Emerging</span>
</div>
<div className="flex items-center gap-2">
<span className="legend-dot bg-slate-300"></span>
<span className="text-slate-600">Small Cap</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white text-slate-900 pb-24 px-6 lg:px-12 border-b border-slate-100" id="how-it-works">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 mb-20 reveal">
<div>
<p className="text-xs font-semibold tracking-wider uppercase text-slate-500 mb-4">
              Guidance Process
            </p>
<h2 className="text-4xl font-medium tracking-tight leading-[1.05] max-w-md">
              From learning to
              <br/>
              investing in minutes.
            </h2>
</div>
</div>
<div className="grid lg:grid-cols-12 gap-0 border-t border-slate-200">

<div className="lg:col-span-5 reveal delay-100">

<div className="group flex items-center justify-between py-10 border-b border-slate-200 pr-8 cursor-pointer hover:bg-slate-50 transition-colors px-4 duration-300">
<div className="flex items-center gap-6">
<span className="text-sm font-mono font-medium text-slate-400 group-hover:text-brand-600 transition-colors">
                  01
                </span>
<div>
<h3 className="text-xl font-medium group-hover:translate-x-1 transition-transform">
                    Learn the Basics
                  </h3>
<p className="text-sm text-slate-500 mt-2 max-w-xs">
                    Understand the difference between stocks, bonds, and funds.
                  </p>
</div>
</div>
<svg className="lucide lucide-book-open w-5 h-5 text-slate-400 group-hover:text-brand-600" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</div>

<div className="group flex items-center justify-between py-10 border-b border-slate-200 pr-8 cursor-pointer hover:bg-slate-50 transition-colors px-4 duration-300">
<div className="flex items-center gap-6">
<span className="text-sm font-mono font-medium text-slate-400 group-hover:text-brand-600 transition-colors">
                  02
                </span>
<div>
<h3 className="text-xl font-medium group-hover:translate-x-1 transition-transform">
                    Choose a Portfolio
                  </h3>
<p className="text-sm text-slate-500 mt-2 max-w-xs">
                    Select a mix that matches your timeline and risk comfort.
                  </p>
</div>
</div>
<svg className="lucide lucide-layout-grid w-5 h-5 text-slate-400 group-hover:text-brand-600" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</div>

<div className="flex items-center justify-between py-10 border-b border-slate-900 pr-8 cursor-pointer bg-slate-900 text-white -mx-4 px-8 relative shadow-xl rounded-r-lg z-10 transform scale-[1.02] transition-transform">
<div className="flex items-center gap-6">
<span className="text-sm font-mono font-medium text-slate-500">
                  03
                </span>
<div>
<h3 className="text-xl font-medium">Start Investing</h3>
<p className="text-sm text-slate-400 mt-2">
                    We redirect you to a secure brokerage to fund your account.
                  </p>
</div>
</div>
<div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center animate-pulse">
<svg className="lucide lucide-arrow-right w-5 h-5 text-white" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<div className="lg:col-span-7 bg-slate-50 lg:rounded-r-3xl p-12 flex items-center justify-center reveal delay-300 overflow-hidden">
<div className="bg-white rounded-xl shadow-xl w-full max-w-md border border-slate-200 hover:shadow-2xl transition-shadow duration-500">

<div className="flex items-center gap-2 p-4 border-b border-slate-100 bg-slate-50/50 rounded-t-xl">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
</div>
<div className="ml-4 h-4 w-32 bg-slate-200 rounded-full"></div>
</div>

<div className="p-8">
<div className="text-center mb-8">
<div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
<svg className="lucide lucide-check w-8 h-8" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<h4 className="text-lg font-semibold text-slate-900">
                    You are ready to go!
                  </h4>
<p className="text-sm text-slate-500 mt-2">
                    Transferring your portfolio selection to Partner Broker...
                  </p>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-4 border border-slate-100 rounded-lg hover:border-brand-500 hover:bg-brand-50/30 transition-all cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center text-white font-serif text-xs">
                        V
                      </div>
<div>
<p className="text-sm font-medium text-slate-900">
                          Vanguard
                        </p>
<p className="text-xs text-slate-500">
                          Low fees, high trust
                        </p>
</div>
</div>
<svg className="lucide lucide-external-link w-4 h-4 text-slate-300 group-hover:text-brand-600" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</div>
<div className="flex items-center justify-between p-4 border border-slate-100 rounded-lg hover:border-brand-500 hover:bg-brand-50/30 transition-all cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white font-sans text-xs">
                        S
                      </div>
<div>
<p className="text-sm font-medium text-slate-900">Schwab</p>
<p className="text-xs text-slate-500">
                          Great research tools
                        </p>
</div>
</div>
<svg className="lucide lucide-external-link w-4 h-4 text-slate-300 group-hover:text-brand-600" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</div>
</div>
<button className="w-full mt-6 bg-slate-900 text-white py-3 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
                  Continue to Broker
                </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 text-slate-900 pb-32 px-6 lg:px-12" id="philosophy">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">

<div className="lg:w-1/2 relative h-[500px] w-full flex items-center justify-center perspective-1000 reveal">

<div className="absolute w-[300px] h-[400px] bg-slate-200 rounded-2xl transform rotate-[-8deg] translate-x-8 translate-y-4 animate-float-delayed"></div>

<div className="absolute w-[300px] h-[400px] border border-slate-100 rounded-2xl shadow-2xl flex flex-col p-8 z-10 animate-float hover:z-20 transition-transform duration-500 hover:rotate-0 bg-gradient-to-b from-white to-slate-50">
<div className="mb-6">
<span className="text-xs font-semibold text-brand-600 uppercase tracking-wide">
                Historical Context
              </span>
<h3 className="text-xl font-medium mt-2">Market Resilience</h3>
</div>

<div className="flex-1 flex items-end gap-1 mb-4">
<div className="w-1/12 bg-gradient-to-t from-slate-300 to-slate-200 h-[20%] rounded-t-md"></div>
<div className="w-1/12 bg-gradient-to-t from-slate-300 to-slate-200 h-[30%] rounded-t-md"></div>
<div className="w-1/12 bg-gradient-to-t from-rose-400 to-rose-300 h-[15%] rounded-t-md relative group shadow-[0_0_15px_rgba(251,113,133,0.4)] z-10">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-medium bg-slate-900 text-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-y-1 whitespace-nowrap">
                  Downturn
                </div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-rose-500/20"></div>
</div>
<div className="w-1/12 bg-gradient-to-t from-slate-300 to-slate-200 h-[35%] rounded-t-md"></div>
<div className="w-1/12 bg-gradient-to-t from-slate-300 to-slate-200 h-[45%] rounded-t-md"></div>
<div className="w-1/12 bg-gradient-to-t from-slate-300 to-slate-200 h-[50%] rounded-t-md"></div>
<div className="w-1/12 bg-gradient-to-t from-slate-300 to-slate-200 h-[40%] rounded-t-md"></div>
<div className="w-1/12 bg-gradient-to-t from-slate-300 to-slate-200 h-[60%] rounded-t-md"></div>
<div className="w-1/12 bg-gradient-to-t from-slate-300 to-slate-200 h-[75%] rounded-t-md"></div>
<div className="w-1/12 bg-gradient-to-t from-brand-600 to-brand-400 h-[85%] rounded-t-md shadow-[0_0_15px_rgba(59,130,246,0.3)]"></div>
<div className="w-1/12 bg-gradient-to-t from-brand-600 to-brand-400 h-[95%] rounded-t-md shadow-[0_0_15px_rgba(59,130,246,0.3)]"></div>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
              Historically, the market has trended upwards over long periods,
              despite short-term volatility.
            </p>
</div>
</div>

<div className="lg:w-1/2 reveal delay-200">
<p className="text-xs font-semibold tracking-wider uppercase text-slate-500 mb-4">
            Our Philosophy
          </p>
<h2 className="text-4xl font-medium tracking-tight leading-[1.05] mb-8">
            Evidence-based investing. No hype.
          </h2>
<div className="space-y-8 mb-10">
<div className="flex gap-5 items-start">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 text-brand-600 flex items-center justify-center shrink-0 shadow-sm">
<svg className="lucide lucide-bar-chart w-5 h-5" data-lucide="bar-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V9"></path><path d="M19 21V3"></path></svg>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-2">
                  Diversification is key
                </h4>
<p className="text-slate-600 leading-relaxed">
                  We focus on broad diversification to reduce the risk of any
                  single company failure affecting your wealth.
                </p>
</div>
</div>
<div className="flex gap-5 items-start">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 text-brand-600 flex items-center justify-center shrink-0 shadow-sm">
<svg className="lucide lucide-clock w-5 h-5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="">
<h4 className="text-lg font-medium text-slate-900 mb-2">
                  Time in the market
                </h4>
<p className="text-slate-600 leading-relaxed">
                  Trying to time the market rarely works. Consistent, long-term
                  investing is the proven path to compounding.
                </p>
</div>
</div>
<div className="flex gap-5 items-start">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 text-brand-600 flex items-center justify-center shrink-0 shadow-sm">
<svg className="lucide lucide-dollar-sign w-5 h-5" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-2">
                  Low fees matter
                </h4>
<p className="text-slate-600 leading-relaxed">
                  We recommend low-cost ETFs. High fees erode your returns
                  significantly over decades.
                </p>
</div>
</div>
</div>
<a className="text-brand-600 font-medium inline-flex items-center gap-2 hover:gap-3 transition-all" href="#education">
            Read our full methodology
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="bg-slate-900 text-white py-24 px-6 lg:px-12 rounded-t-[3rem] relative z-20">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-10 reveal">
<div>
<p className="text-xs font-semibold tracking-wider uppercase text-slate-400 mb-4">
              Execution
            </p>
<h2 className="text-4xl font-medium tracking-tight leading-[1.05] max-w-lg">
              Execute trades with
              <br/>
              trusted brokers.
            </h2>
</div>
<p className="text-lg text-slate-400 max-w-md font-normal">
            We provide the intelligence; they provide the infrastructure. Your
            assets are held by regulated SIPC-insured institutions.
          </p>
</div>
<div className="relative w-full flex flex-col gap-12 lg:block lg:h-[950px] mt-16 perspective-[2500px]">

<div className="reveal opacity-0 scale-90 lg:absolute lg:top-8 lg:left-[2%] lg:w-[280px] lg:h-[300px] z-10 transition-all duration-700 ease-out hover:z-50 hover:scale-105 group">
<div className="w-full h-full bg-slate-950 rounded-[2rem] border border-white/10 p-8 relative overflow-hidden shadow-2xl lg:-rotate-6 group-hover:rotate-0 transition-transform duration-700">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-colors"></div>
<div className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center mb-6 text-emerald-400 relative z-10">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-2 relative z-10">
                SIPC Protected
              </h3>
<p className="text-slate-500 text-xs leading-relaxed relative z-10">
                Your assets are held by regulated partners with up to $500k in
                protection. We never touch your funds.
              </p>
</div>
</div>

<div className="reveal from-right delay-100 lg:absolute lg:-top-4 lg:right-[8%] lg:w-[420px] lg:h-[480px] z-20 transition-all duration-700 ease-out hover:z-50 hover:scale-105 group">
<div className="w-full h-full bg-slate-950 rounded-[2.5rem] border border-white/10 p-10 relative overflow-hidden shadow-2xl lg:rotate-3 group-hover:rotate-0 transition-transform duration-700">

<div className="absolute -top-6 -right-6 text-[180px] font-serif font-bold text-rose-950/20 leading-none select-none pointer-events-none group-hover:text-rose-900/30 transition-colors">
                V
              </div>
<div className="relative z-10 flex flex-col justify-between h-full">
<div>
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 bg-rose-950/30 rounded-lg flex items-center justify-center text-rose-500 font-serif text-xl border border-rose-500/10 font-semibold">
                      V
                    </div>
<span className="text-2xl font-serif font-semibold text-white tracking-tight">
                      Vanguard
                    </span>
</div>
<div className="inline-block px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] uppercase tracking-widest mb-6 font-semibold">
                    Low Cost Leader
                  </div>
<p className="text-xl text-slate-300 font-medium leading-relaxed max-w-[280px]">
                    The pioneer of index investing. Built for the long haul with
                    industry-low expense ratios.
                  </p>
</div>
</div>

<svg className="absolute bottom-0 left-0 w-full h-64 text-rose-500/5 group-hover:text-rose-500/10 transition-colors duration-500 vanguard-lines pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 100 100">
<line x1="0" x2="100" y1="100" y2="0"></line>
<line x1="20" x2="120" y1="100" y2="0"></line>
<line x1="40" x2="140" y1="100" y2="0"></line>
<line x1="60" x2="160" y1="100" y2="0"></line>
</svg>
</div>
</div>

<div className="reveal from-left delay-200 lg:absolute lg:top-[340px] lg:left-[12%] lg:w-[480px] lg:h-[380px] z-30 transition-all duration-700 ease-out hover:z-50 hover:scale-105 group">
<div className="w-full h-full bg-slate-950 rounded-[2.5rem] border border-white/10 p-10 relative overflow-hidden shadow-2xl lg:-rotate-2 group-hover:rotate-0 transition-transform duration-700">

<svg className="absolute -bottom-12 -left-12 w-64 h-64 text-emerald-900/10 group-hover:text-emerald-900/20 transition-colors pointer-events-none" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 12l-2.5-2.25L12 11zm0 2.5l-5-2.5-5 2.5 10 5 10-5-5-2.5-5 2.5z"></path>
</svg>
<div className="flex justify-between items-start mb-8 relative z-10">
<div className="flex items-center gap-3">
<svg className="w-8 h-8 text-emerald-500" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 12l-2.5-2.25L12 11zm0 2.5l-5-2.5-5 2.5 10 5 10-5-5-2.5-5 2.5z"></path>
</svg>
<span className="text-2xl text-white tracking-tight font-semibold">
                    Fidelity
                  </span>
</div>
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
</div>
<p className="text-lg text-slate-300 font-medium leading-relaxed relative z-10 max-w-sm">
                Renowned for zero-expense funds, top-tier research, and
                world-class trade execution.
              </p>

<svg className="absolute bottom-8 right-8 w-32 h-32 text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors duration-500 fidelity-dots" fill="currentColor" viewbox="0 0 100 100">
<circle cx="10" cy="90" r="3"></circle>
<circle cx="30" cy="90" r="3"></circle>
<circle cx="50" cy="90" r="3"></circle>
<circle cx="70" cy="90" r="3"></circle>
<circle cx="90" cy="90" r="3"></circle>
<circle cx="30" cy="70" r="3"></circle>
<circle cx="50" cy="70" r="3"></circle>
<circle cx="70" cy="70" r="3"></circle>
<circle cx="50" cy="50" r="3"></circle>
</svg>
</div>
</div>

<div className="reveal delay-300 lg:absolute lg:top-[420px] lg:right-0 lg:w-[520px] lg:h-[460px] z-40 transition-all duration-700 ease-out hover:z-50 hover:scale-105 group">
<div className="w-full h-full bg-slate-950 rounded-[3rem] border border-white/10 p-12 relative overflow-hidden shadow-2xl lg:rotate-2 group-hover:rotate-0 transition-transform duration-700">

<div className="absolute -top-10 -left-10 text-[120px] font-bold text-blue-950/20 whitespace-nowrap select-none pointer-events-none group-hover:text-blue-900/30 transition-colors">
                SCHWAB
              </div>
<div className="relative z-10 flex flex-col justify-between h-full">
<div className="flex items-center gap-4">
<span className="text-3xl font-medium text-white tracking-tighter">
                    charles
                    <span className="font-semibold">SCHWAB</span>
</span>
</div>
<div className="flex flex-col gap-6">
<div className="inline-block w-fit px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase tracking-widest font-semibold">
                    Top Platform
                  </div>
<p className="text-xl text-slate-300 font-medium leading-relaxed">
                    Robust banking integration meets superior trading
                    technology. The complete financial hub.
                  </p>
<div className="flex items-baseline gap-2">
<span className="text-4xl font-light text-white/20 group-hover:text-white/40 transition-colors">
                      #1
                    </span>
<span className="text-xs text-slate-600 uppercase tracking-widest">
                      Satisfaction
                    </span>
</div>
</div>
</div>

<svg className="absolute -bottom-10 -right-10 w-full h-full text-blue-500/5 group-hover:text-blue-500/10 transition-colors duration-1000 schwab-waves pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 100 100">
<path d="M-20 90 Q 30 60 80 90 T 180 90"></path>
<path d="M-20 70 Q 30 40 80 70 T 180 70"></path>
<path d="M-20 50 Q 30 20 80 50 T 180 50"></path>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 text-white pb-24 px-6 lg:px-12 relative z-20">
<div className="max-w-7xl mx-auto border-t border-white/5 pt-24">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal gap-6">
<div>
<p className="text-xs font-semibold tracking-wider uppercase text-slate-400 mb-4">
              Testimonials
            </p>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight leading-[1.05]">
              Trusted by investors
              <br/>
              building their future.
            </h2>
</div>
</div>
<div className="relative max-w-5xl mx-auto mt-20 flex flex-col gap-16 lg:gap-0 lg:block pb-12">

<div className="relative lg:w-8/12 lg:ml-auto reveal z-10">
<div className="bg-slate-800 p-10 md:p-14 rounded-[2.5rem] border border-white/5 shadow-2xl relative group hover:bg-slate-800/80 transition-colors duration-500">

<div className="absolute -top-10 -left-6 md:-left-10 w-24 h-24 rounded-full border-[8px] border-slate-950 overflow-hidden shadow-2xl">
<img alt="James D." className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&amp;h=200&amp;fit=crop&amp;crop=faces"/>
</div>
<svg className="w-12 h-12 text-brand-500/40 mb-8" fill="currentColor" height="24" viewbox="0 0 24 24" width="24">
<path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C9.55228 16 10 15.5523 10 15V9C10 8.44772 9.55228 8 9 8H5C4.44772 8 4 8.44772 4 9V15C4 16.6569 5.34315 18 7 18H9.983L9.983 21H14.017ZM19.017 21L19.017 18C19.017 16.8954 18.1216 16 17.017 16H14C14.5523 16 15 15.5523 15 15V9C15 8.44772 14.5523 8 14 8H10C9.44772 8 9 8.44772 9 9V15C9 16.6569 10.3431 18 12 18H14.983L14.983 21H19.017Z"></path>
</svg>
<h3 className="text-2xl md:text-3xl font-normal text-white leading-tight tracking-tight mb-8">
                "VestGuide's Balanced portfolio was exactly what I needed—
                <span className="text-brand-400">simple, transparent</span>
                , and aligned with my goals."
              </h3>
<div className="flex items-center gap-4">
<div className="h-[1px] w-12 bg-white/10"></div>
<div>
<p className="font-medium text-white tracking-wide">James D.</p>
<p className="text-xs text-slate-500 uppercase tracking-wider mt-0.5">
                    Balanced Portfolio
                  </p>
</div>
</div>
</div>
</div>

<div className="relative lg:w-5/12 lg:mr-auto lg:-mt-24 reveal delay-100 z-20">
<div className="bg-slate-800 p-8 md:p-10 rounded-[2rem] border border-white/5 shadow-2xl relative group hover:bg-slate-800/80 transition-colors duration-500">
<div className="absolute -top-8 -right-6 w-16 h-16 rounded-full border-[6px] border-slate-950 overflow-hidden shadow-xl">
<img alt="Sarah K." className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&amp;h=200&amp;fit=crop&amp;crop=faces"/>
</div>
<p className="text-lg text-slate-300 leading-relaxed mb-6 font-normal">
                "The educational approach is a game changer. I'm not just
                blindly following a robo-advisor; I actually understand why I'm
                invested."
              </p>
<div className="flex items-center gap-3">
<div className="h-[1px] w-8 bg-white/10"></div>
<div>
<p className="font-medium text-white text-sm">Sarah K.</p>
<p className="text-xs text-slate-500 uppercase tracking-wider">
                    Growth Portfolio
                  </p>
</div>
</div>
</div>
</div>

<div className="relative lg:w-5/12 lg:ml-[50%] lg:-mt-20 reveal delay-200 z-30">
<div className="bg-slate-800 p-8 md:p-10 rounded-[2rem] border border-white/5 shadow-2xl relative group hover:bg-slate-800/80 transition-colors duration-500">
<div className="absolute -bottom-8 -left-6 w-16 h-16 rounded-full border-[6px] border-slate-950 overflow-hidden shadow-xl">
<img alt="Michael R." className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&amp;h=200&amp;fit=crop&amp;crop=faces"/>
</div>
<p className="text-lg text-slate-300 leading-relaxed mb-8 font-normal">
                "Low fees were my priority. Finding a service that guides you to
                Vanguard ETFs without adding an advisory fee on top is
                incredibly rare."
              </p>
<div className="flex items-center gap-3 pl-8">
<div className="h-[1px] w-8 bg-white/10"></div>
<div>
<p className="font-medium text-white text-sm">Michael R.</p>
<p className="text-xs text-slate-500 uppercase tracking-wider">
                    Aggressive Portfolio
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<footer className="overflow-hidden text-slate-400 bg-slate-950 border-white/10 border-t pt-24 pb-12 relative">
<div className="lg:px-12 z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8 reveal">
<h2 className="text-3xl font-medium text-white tracking-tight">
            Start your journey to financial clarity.
          </h2>
<button className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-slate-950 sm:w-auto w-full transition-all duration-300 shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] hover:shadow-[0_0_50px_-10px_rgba(59,130,246,0.6)] hover:-translate-y-1" onclick="document.getElementById('portfolios').scrollIntoView({behavior: 'smooth'})">
<span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#020617_0%,#3b82f6_50%,#020617_100%)] opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
<span className="relative flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-base font-medium text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-slate-900/90">
<span className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent shadow-[0_0_10px_rgba(96,165,250,0.5)]"></span>
<span className="flex items-center gap-2 tracking-wide">
                Start Investing Now
                <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</span>
</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 reveal delay-100 text-sm border-white/10 border-b mb-16 pb-12">
<div className="">
<h4 className="font-semibold text-white mb-4">Platform</h4>
<ul className="space-y-3 opacity-80">
<li className="">
<a className="hover:text-white transition-colors" href="#">
          Portfolios
        </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
          Risk Profiles
        </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
          Methodology
        </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
          Broker Integrations
        </a>
</li>
</ul>
</div>
<div className="">
<h4 className="font-semibold text-white mb-4">Learn</h4>
<ul className="space-y-3 opacity-80">
<li className="">
<a className="hover:text-white transition-colors" href="#">
          How It Works
        </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
          Investing Basics
        </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
          ETF Guide
        </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
          Risk &amp; Diversification
        </a>
</li>
</ul>
</div>
<div className="">
<h4 className="font-semibold text-white mb-4">Company</h4>
<ul className="space-y-3 opacity-80">
<li className="">
<a className="hover:text-white transition-colors" href="#">About</a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
          Contact
        </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
          Privacy Policy
        </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
          Terms of Use
        </a>
</li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center text-xs font-medium opacity-60">
<p>© 2024 Orizon Inc. All Rights Reserved.</p>
</div>
</div>
</footer>




    </>
  );
}
