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
50: '#f0f9ff',
100: '#e0f2fe',
900: '#0c4a6e',
}
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



      // 1. Scroll Reveal Animation
      const revealElements = document.querySelectorAll('.reveal');

      const revealObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if(entry.isIntersecting) {
                  entry.target.classList.add('active');
              }
          });
      }, {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px"
      });

      revealElements.forEach(el => revealObserver.observe(el));

      // 2. Parallax Effects & Navbar Logic
      const parallaxBg = document.querySelector('.parallax-bg');
      const parallaxElements = document.querySelectorAll('.parallax-element');
      const footerText = document.getElementById('footer-text');
      const navbar = document.getElementById('navbar');
      const logoK = document.getElementById('logo-k');
      const logoText = document.getElementById('logo-text');

      window.addEventListener('scroll', () => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;

          // Navbar & Logo Logic
          if(scrollY > 50) {
              navbar.classList.add('bg-white/80', 'shadow-2xl', 'py-3', 'scale-[0.99]');
              navbar.classList.remove('bg-white/60', 'py-4', 'scale-100');

              if(logoText) {
                  logoText.classList.remove('max-w-[100px]', 'opacity-100');
                  logoText.classList.add('max-w-0', 'opacity-0');
              }
              if(logoK) {
                  logoK.classList.remove('text-xl');
                  logoK.classList.add('text-3xl');
              }
          } else {
              navbar.classList.remove('bg-white/80', 'shadow-2xl', 'py-3', 'scale-[0.99]');
              navbar.classList.add('bg-white/60', 'py-4', 'scale-100');

              if(logoText) {
                  logoText.classList.add('max-w-[100px]', 'opacity-100');
                  logoText.classList.remove('max-w-0', 'opacity-0');
              }
              if(logoK) {
                  logoK.classList.add('text-xl');
                  logoK.classList.remove('text-3xl');
              }
          }

          if (parallaxBg) {
              const speed = parseFloat(parallaxBg.dataset.speed) || 0.1;
              parallaxBg.style.transform = `translateY(${scrollY * speed}px)`;
          }

          parallaxElements.forEach(el => {
              const speed = parseFloat(el.dataset.speed) || -0.05;
              el.style.transform = `translateY(${scrollY * speed}px)`;
          });

          if (footerText) {
              const footerPosition = footerText.getBoundingClientRect().top;
              if (footerPosition < windowHeight) {
                  const move = (windowHeight - footerPosition) * 0.1;
                  footerText.style.transform = `translateX(-${move}px)`;
              }
          }
      });

      window.addEventListener('load', () => {
           document.querySelectorAll('.reveal').forEach((el, index) => {
               if(el.getBoundingClientRect().top < window.innerHeight) {
                   setTimeout(() => {
                       el.classList.add('active');
                   }, index * 100);
               }
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
      

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between rounded-full border border-white/40 px-8 shadow-lg shadow-neutral-500/5 backdrop-blur-xl transition-all duration-500 w-[94%] max-w-6xl" id="navbar">
<div className="text-xl font-bold tracking-tight cursor-pointer hover:opacity-70 transition-opacity flex items-center">
<span className="font-bold tracking-tighter transition-all duration-500 inline-block" id="logo-k">
          [k]
        </span>
<span className="font-bold tracking-tight text-xl transition-all duration-500 overflow-hidden inline-block whitespace-nowrap" id="logo-text">
          opilot
        </span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-neutral-600">
<a className="hover:text-black transition-colors" href="#how-it-works">
          How It Works
        </a>
<a className="hover:text-black transition-colors" href="#who-we-serve">
          Who It’s For
        </a>
<a className="hover:text-black transition-colors" href="#results">
          Results
        </a>
<a className="hover:text-black transition-colors" href="#faq">FAQ</a>
</div>
<button className="px-5 py-2.5 bg-neutral-900 text-white rounded-full text-xs font-semibold hover:bg-neutral-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-neutral-200/50">
        Free 401
        <span className="font-bold">[k]</span>
        Review
      </button>
</nav>
<main className="md:px-8 w-full max-w-[1800px] mt-24 mr-auto ml-auto pr-4 pb-20 pl-4">

<section className="pt-10 md:pt-20 pb-12 relative">
<div className="grid grid-cols-1 lg:grid-cols-12 mb-12 gap-x-12 gap-y-12 items-end">
<div className="lg:col-span-7 reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 rounded-full text-[10px] font-bold uppercase tracking-wider text-neutral-600 border border-neutral-200 mb-6">
<iconify-icon className="text-indigo-600 text-sm" icon="solar:stars-minimalistic-linear"></iconify-icon>
              Powered by AI + Human CFP® Expertise
            </div>
<h1 className="md:text-8xl lg:text-8xl leading-none text-balance text-6xl font-bold tracking-tighter">
              Your Independent
              <br/>
              401
              <span className="font-extrabold">[k]</span>
              Co-Pilot
            </h1>
</div>
<div className="lg:col-span-5 flex flex-col lg:items-end lg:pl-10 reveal delay-100 active items-start">
<div className="mb-8 flex flex-col items-start lg:items-end gap-2">
<p className="text-lg md:text-xl text-neutral-600 max-w-sm lg:text-right font-medium leading-relaxed mt-4">
                We help business owners and HR leaders reduce costs, simplify
                administration, and improve employee outcomes.
              </p>
</div>
<div className="flex flex-wrap gap-3 justify-end">
<button className="group flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-all duration-300 shadow-xl shadow-neutral-900/10 hover:shadow-neutral-900/20 hover:-translate-y-1">
<span className="text-sm font-semibold">
                  Schedule a Free Review
                </span>
<iconify-icon className="text-lg" icon="solar:calendar-linear"></iconify-icon>
</button>
<button className="px-6 py-3 bg-white border border-neutral-200 text-neutral-900 rounded-full hover:border-neutral-900 transition-all duration-300">
<span className="text-sm font-semibold">See How It Works</span>
</button>
</div>
</div>
</div>

<div className="reveal delay-200 w-full h-[450px] md:h-[650px] rounded-[2rem] md:rounded-[3rem] overflow-hidden relative border border-neutral-200 shadow-sm group active">
<div className="parallax-bg absolute inset-0 w-full h-[120%] -top-[10%]" data-speed="0.05" style={{transform: 'translateY(251.65px)'}}>

<img alt="Consultation" className="grayscale-[20%] w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a7c218ac-b4a3-4174-8e47-4eeffaddaad5_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

<div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-2xl max-w-sm w-full hidden md:block parallax-element border border-white/50" data-speed="-0.03" style={{transform: 'translateY(-150.99px)'}}>
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
<iconify-icon className="text-xl" icon="solar:pie-chart-2-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-bold text-neutral-900">
                    Plan Health Score
                  </h4>
<p className="text-[10px] text-neutral-500 font-medium">
                    AI Analysis • Just now
                  </p>
</div>
</div>
<div className="text-2xl font-bold tracking-tight text-neutral-900">
                94
                <span className="text-sm text-neutral-400 font-normal">/100</span>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between text-xs pb-3 border-b border-neutral-100">
<span className="text-neutral-500 font-medium">Fee Benchmark</span>
<span className="text-green-600 bg-green-50 px-2 py-1 rounded-md font-semibold">
                  0.45% (Optimal)
                </span>
</div>
<div className="flex items-center justify-between text-xs pb-3 border-b border-neutral-100">
<span className="text-neutral-500 font-medium">Participation</span>
<span className="text-neutral-900 font-semibold flex items-center gap-1">
<iconify-icon className="text-green-600" icon="solar:trending-up-linear"></iconify-icon>
                  92% (+5%)
                </span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-neutral-500 font-medium">
                  Fiduciary Status
                </span>
<span className="text-indigo-600 font-semibold flex items-center gap-1">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
                  Monitored
                </span>
</div>
</div>
</div>

<div className="absolute top-8 left-8 bg-neutral-900/90 backdrop-blur text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wide border border-white/10 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
            Independent Fiduciary Guidance
          </div>
</div>

<div className="mt-8 flex flex-wrap items-center justify-center md:justify-between gap-6 text-xs font-medium text-neutral-500 border-t border-neutral-100 pt-6">
<span className="flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:server-square-linear"></iconify-icon>
            Provider-Agnostic (ADP, Vestwell, Paychex + more)
          </span>
<span className="flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:graph-up-linear"></iconify-icon>
            AI-Powered Benchmarking
          </span>
<span className="flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
            Employee Support
          </span>
</div>
</section>

<section className="py-20 md:py-32 border-t border-neutral-100">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 reveal">
<div className="">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-[1.1] mb-6">
              If your 401
              <span className="font-bold">[k]</span>
              is on autopilot...
              <span className="text-neutral-400">
                you may be overpaying and underdelivering.
              </span>
</h2>
<p className="text-lg text-neutral-600 leading-relaxed max-w-md">
              Most business owners and HR teams don’t know exactly what they’re
              paying for, or whether their investments are actually competitive.
              When the plan gets confusing, HR becomes the help desk — and the
              business assumes the risk.
            </p>
</div>
<div className="bg-neutral-50 rounded-3xl p-8 md:p-10">
<h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
<iconify-icon className="text-red-500" icon="solar:danger-circle-linear"></iconify-icon>
              The Reality
            </h3>
<ul className="space-y-4">
<li className="flex items-start gap-4 p-4 bg-white rounded-xl border border-neutral-100 shadow-sm">
<iconify-icon className="text-neutral-400 text-xl mt-0.5 flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-sm text-neutral-600 font-medium">
                  Fees are unclear, hidden, or hard to explain to employees.
                </span>
</li>
<li className="flex items-start gap-4 p-4 bg-white rounded-xl border border-neutral-100 shadow-sm">
<iconify-icon className="text-neutral-400 text-xl mt-0.5 flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-sm text-neutral-600 font-medium">
                  Fund lineup hasn't been benchmarked or reviewed in years.
                </span>
</li>
<li className="flex items-start gap-4 p-4 bg-white rounded-xl border border-neutral-100 shadow-sm">
<iconify-icon className="text-neutral-400 text-xl mt-0.5 flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-sm text-neutral-600 font-medium">
                  No clear fiduciary monitoring process exists.
                </span>
</li>
<li className="flex items-start gap-4 p-4 bg-white rounded-xl border border-neutral-100 shadow-sm">
<iconify-icon className="text-neutral-400 text-xl mt-0.5 flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-sm text-neutral-600 font-medium">
                  Service issues create constant interruptions for HR.
                </span>
</li>
</ul>
</div>
</div>
</section>

<section className="bg-neutral-100 rounded-[2rem] p-12 md:p-20 text-center mb-20 reveal">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
          The hidden cost of doing nothing.
        </h3>
<p className="text-neutral-600 max-w-2xl mx-auto mb-10 text-lg">
          A “decent” plan can still quietly cost your company thousands each
          year through hidden fees, outdated lineups, and fiduciary exposure.
        </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-10">
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-neutral-900 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold text-neutral-500">
              Unnecessary Costs
            </span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-neutral-900 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:emoji-funny-circle-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold text-neutral-500">
              Low Satisfaction
            </span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-neutral-900 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:document-add-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold text-neutral-500">
              Fiduciary Risk
            </span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-neutral-900 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:user-hand-up-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold text-neutral-500">
              HR Burden
            </span>
</div>
</div>
<button className="px-8 py-3 bg-neutral-900 text-white rounded-full text-sm font-semibold hover:bg-neutral-800 transition-all">
          Get a Free Benchmark + Fee Review
        </button>
</section>

<section className="relative w-full max-w-[1800px] mx-auto px-4 md:px-8 py-12 lg:py-24">
<div className="flex flex-col lg:flex-row w-full bg-black rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[650px] border border-neutral-800">

<div className="w-full lg:w-1/2 p-10 md:p-16 lg:p-24 flex flex-col justify-center relative border-r border-white/10 z-10">

<div className="absolute top-0 left-0 w-full h-1.5 bg-neutral-900">
<div className="w-32 md:w-48 h-full bg-white"></div>
</div>

<div className="text-neutral-700 font-bold text-3xl mb-12 tracking-tighter opacity-40 select-none">
              [K]
            </div>

<h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white tracking-tighter leading-[0.95] mb-10 text-balance">
              If Managing Your 401(k) Feels Overwhelming —
              <span className="text-neutral-500 block mt-2">You're Not Alone.</span>
</h2>

<p className="text-lg md:text-xl text-neutral-300 font-medium leading-relaxed max-w-lg mb-10">
              We help business owners and HR managers eliminate the headaches of
              401(k) administration and navigate the complexity of investment
              management.
            </p>

<div className="flex items-start gap-4 border-l border-neutral-700 pl-6 max-w-md">
<p className="text-base text-neutral-400 font-medium leading-relaxed">
                Our independent advisors simplify your plan, improve results,
                and give you back your time.
              </p>
</div>
</div>

<div className="w-full lg:w-1/2 bg-gradient-to-br from-[#22d3ee] to-[#2563eb] relative flex items-center justify-center p-12 overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(white 2px, transparent 2px)', backgroundSize: '32px 32px'}}></div>

<div className="relative w-full h-full max-w-lg flex flex-col justify-between py-8 md:py-12">

<div className="relative z-10 space-y-12">

<div className="group relative w-fit">
<h3 className="text-5xl md:text-6xl font-extrabold text-white italic tracking-tighter opacity-90 hover:opacity-100 transition-opacity cursor-default">
                    ADP
                  </h3>

<div className="hidden md:block absolute top-1/2 left-[110%] w-24 h-[2px] border-t-[3px] border-dashed border-white/40 translate-y-2"></div>
<div className="hidden md:block absolute top-1/2 left-[calc(100%+6rem)] w-[2px] h-32 border-l-[3px] border-dashed border-white/40 translate-y-2"></div>
</div>

<div className="group relative w-fit ml-4 md:ml-12">
<h3 className="text-4xl md:text-5xl font-extrabold text-white italic tracking-tighter opacity-90 hover:opacity-100 transition-opacity cursor-default">
                    PAYCHEX
                  </h3>

<div className="hidden md:block absolute top-1/2 left-[110%] w-12 h-[2px] border-t-[3px] border-dashed border-white/40 translate-y-2"></div>

<div className="hidden md:block absolute top-1/2 left-[calc(100%+3rem)] w-[2px] h-[calc(100%+8rem)] border-l-[3px] border-dashed border-white/40 -translate-y-[calc(100%+8rem)]"></div>
</div>
</div>

<div className="self-end mt-auto relative z-10 pr-4 md:pr-12">

<div className="hidden md:block absolute -top-24 left-1/2 -translate-x-1/2 w-[2px] h-24 border-l-[3px] border-dashed border-white/40"></div>
<div className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)] transform hover:scale-105 transition-transform duration-300 relative z-20">
<div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
<iconify-icon className="text-5xl text-blue-600 stroke-[1.5]" icon="lucide:store"></iconify-icon>
</div>

<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-black/20 rounded-full blur-sm"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group p-8 rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-neutral-900 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:magnifer-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Clarity</h3>
<p className="text-neutral-500 text-sm leading-relaxed">
              Know exactly what you’re paying, what’s working, and what needs to
              improve. No jargon.
            </p>
</div>
<div className="group p-8 rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-neutral-900 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Better Economics</h3>
<p className="text-neutral-500 text-sm leading-relaxed">
              Reduce unnecessary fees, improve fund quality, and strengthen plan
              efficiency.
            </p>
</div>
<div className="group p-8 rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-neutral-900 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:user-speak-rounded-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Less HR Burden</h3>
<p className="text-neutral-500 text-sm leading-relaxed">
              Employees get answers fast directly from us — without HR becoming
              the middleman.
            </p>
</div>
</div>
</section>

<section className="mt-20 scroll-mt-24" id="how-it-works">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 bg-black rounded-[2.5rem] p-8 md:p-16 text-white overflow-hidden shadow-2xl">

<div className="md:sticky md:top-32 self-start reveal">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-semibold text-neutral-200 mb-8 backdrop-blur-sm">
<span className="text-sm">🧭</span>
<span>Our Process</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-[1.1] mb-8 text-white text-balance">
              A Clear Path to a Smarter 401
              <span className="text-neutral-500">[k]</span>
              .
            </h2>
<p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-medium mb-8 text-pretty">
              You shouldn’t have to wonder what’s happening in your 401(k).
            </p>
<p className="text-base text-neutral-500 leading-relaxed max-w-md">
              Our process gives you total clarity — on costs, performance, and
              plan health — so you can focus on running your business while we
              handle the details.
            </p>
</div>

<div className="flex flex-col gap-6" id="process-list">

<div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 hover:bg-neutral-800/80 transition-all duration-300 group reveal delay-100">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-cyan-400 text-black flex items-center justify-center text-lg font-bold shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.4)] group-hover:scale-110 transition-transform">
                  1
                </div>
<h3 className="text-2xl font-semibold tracking-tight">Discover</h3>
</div>
<div className="space-y-3">
<h4 className="text-sm font-bold text-white uppercase tracking-wide opacity-90">
                  We Listen First.
                </h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                  We start by understanding your business, your team, and your
                  current 401(k) setup. You’ll share what’s working, what’s not,
                  and what you want your plan to achieve.
                </p>
</div>
</div>

<div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 hover:bg-neutral-800/80 transition-all duration-300 group reveal delay-100">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-yellow-400 text-black flex items-center justify-center text-lg font-bold shrink-0 shadow-[0_0_15px_rgba(250,204,21,0.4)] group-hover:scale-110 transition-transform">
                  2
                </div>
<h3 className="text-2xl font-semibold tracking-tight">
                  Compare &amp; Benchmark
                </h3>
</div>
<div className="space-y-3">
<h4 className="text-sm font-bold text-white uppercase tracking-wide opacity-90">
                  We Find the Best Fit.
                </h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                  We compare your current plan against leading 401(k) providers
                  like ADP, Vestwell, Paychex, and Guideline, uncovering
                  opportunities to reduce costs, improve fund quality, and
                  enhance service.
                </p>
</div>
</div>

<div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 hover:bg-neutral-800/80 transition-all duration-300 group reveal delay-100">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center text-lg font-bold shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.4)] group-hover:scale-110 transition-transform">
                  3
                </div>
<h3 className="text-2xl font-semibold tracking-tight">
                  Optimize &amp; Implement
                </h3>
</div>
<div className="space-y-3">
<h4 className="text-sm font-bold text-white uppercase tracking-wide opacity-90">
                  We Put Your Plan into Action.
                </h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                  Whether you stick with your current provider or move to a new
                  one, we handle the details — updating investments, aligning
                  fees, and setting up fiduciary oversight.
                </p>
</div>
</div>

<div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 hover:bg-neutral-800/80 transition-all duration-300 group reveal delay-100">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-amber-500 text-black flex items-center justify-center text-lg font-bold shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.4)] group-hover:scale-110 transition-transform">
                  4
                </div>
<h3 className="text-2xl font-semibold tracking-tight">
                  Engage &amp; Educate Employees
                </h3>
</div>
<div className="space-y-3">
<h4 className="text-sm font-bold text-white uppercase tracking-wide opacity-90">
                  We Empower Your Team.
                </h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                  We host virtual or in-person enrollment meetings, offer 1:1
                  employee consultations, and provide access to our
                  financial-planning platform so every employee feels confident
                  investing for their future.
                </p>
</div>
</div>

<div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 hover:bg-neutral-800/80 transition-all duration-300 group reveal delay-100">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center text-lg font-bold shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.4)] group-hover:scale-110 transition-transform">
                  5
                </div>
<h3 className="text-2xl font-semibold tracking-tight">
                  Monitor &amp; Report
                </h3>
</div>
<div className="space-y-3">
<h4 className="text-sm font-bold text-white uppercase tracking-wide opacity-90">
                  We Stay Involved.
                </h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                  Each quarter, you’ll receive a Virtual Trustee Review — a
                  clear report on fund performance, employee participation, and
                  plan health. We’ll meet to discuss improvements, new
                  opportunities, and any updates needed.
                </p>
</div>
</div>

<div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 hover:bg-neutral-800/80 transition-all duration-300 group reveal delay-100">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-emerald-500 text-black flex items-center justify-center text-lg font-bold shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.4)] group-hover:scale-110 transition-transform">
                  6
                </div>
<h3 className="text-2xl font-semibold tracking-tight">
                  Grow Together
                </h3>
</div>
<div className="space-y-3">
<h4 className="text-sm font-bold text-white uppercase tracking-wide opacity-90">
                  We’re Your Long-Term Partner.
                </h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                  As your business evolves, your plan does too. We’ll continue
                  to guide you through changes in regulations, investments, and
                  employee needs — ensuring your 401(k) always supports your
                  growth.
                </p>
</div>
</div>
</div>
</div>
</section>

<div className="w-full h-px bg-neutral-200 my-20"></div>

<section className="md:py-12 reveal pt-12 pb-12 relative" id="who-we-serve">
<div className="mb-16">
<div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4">
            Audience
          </div>
<h2 className="md:text-5xl lg:text-5xl leading-[1.1] text-4xl font-semibold text-neutral-900 tracking-tighter">
            Built for the whole company.
          </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">

<div className="relative bg-neutral-900 text-white rounded-3xl p-8 flex flex-col min-h-[400px] hover:scale-[1.01] transition-transform duration-300">
<div className="flex items-center gap-2 mb-6">
<div className="flex bg-amber-400/10 w-10 h-10 rounded-full items-center justify-center">
<iconify-icon className="text-xl text-amber-400" icon="solar:briefcase-linear"></iconify-icon>
</div>
</div>
<h3 className="text-3xl font-semibold tracking-tight mb-4">
              Business Owners
            </h3>
<ul className="space-y-3 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<iconify-icon className="mt-0.5 text-white" icon="solar:check-circle-linear"></iconify-icon>
                Optimize tax efficiency
              </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<iconify-icon className="mt-0.5 text-white" icon="solar:check-circle-linear"></iconify-icon>
                Transparent fees
              </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<iconify-icon className="mt-0.5 text-white" icon="solar:check-circle-linear"></iconify-icon>
                Fiduciary oversight
              </li>
</ul>
<div className="mt-auto pt-6 border-t border-white/10">
<div className="text-xs font-medium text-neutral-400">Outcome</div>
<div className="text-lg font-semibold">Protected Business</div>
</div>
</div>

<div className="bg-neutral-50 rounded-3xl p-8 flex flex-col min-h-[400px] hover:bg-indigo-50/50 transition-colors duration-300">
<div className="flex items-center gap-2 mb-6">
<div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
<iconify-icon className="text-xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
</div>
<h3 className="text-3xl font-semibold tracking-tight mb-4 text-neutral-900">
              HR &amp; Ops
            </h3>
<ul className="space-y-3 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="mt-0.5 text-indigo-600" icon="solar:check-circle-linear"></iconify-icon>
                No HR bottlenecks
              </li>
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="mt-0.5 text-indigo-600" icon="solar:check-circle-linear"></iconify-icon>
                Simplified workflows
              </li>
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="mt-0.5 text-indigo-600" icon="solar:check-circle-linear"></iconify-icon>
                Real-time health visibility
              </li>
</ul>
<div className="mt-auto pt-6 border-t border-neutral-200">
<div className="text-xs font-medium text-neutral-500">Outcome</div>
<div className="text-lg font-semibold text-neutral-900">
                Reduced Burden
              </div>
</div>
</div>

<div className="bg-neutral-50 rounded-3xl p-8 flex flex-col min-h-[400px] hover:bg-green-50/50 transition-colors duration-300">
<div className="flex items-center gap-2 mb-6">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<iconify-icon className="text-xl" icon="solar:emoji-funny-circle-linear"></iconify-icon>
</div>
</div>
<h3 className="text-3xl font-semibold tracking-tight mb-4 text-neutral-900">
              Employees
            </h3>
<ul className="space-y-3 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="mt-0.5 text-green-600" icon="solar:check-circle-linear"></iconify-icon>
                Real human advisors
              </li>
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="mt-0.5 text-green-600" icon="solar:check-circle-linear"></iconify-icon>
                1:1 investment meetings
              </li>
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="mt-0.5 text-green-600" icon="solar:check-circle-linear"></iconify-icon>
                Fiduciary guidance
              </li>
</ul>
<div className="mt-auto pt-6 border-t border-neutral-200">
<div className="text-xs font-medium text-neutral-500">Outcome</div>
<div className="text-lg font-semibold text-neutral-900">
                Financial Confidence
              </div>
</div>
</div>
</div>
</section>
<section className="md:py-28 scroll-mt-24 border-neutral-100 border-t pt-20 pb-20" id="results">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
<div className="reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 rounded-full text-[10px] font-semibold uppercase tracking-wider text-neutral-600 border border-neutral-200 mb-6">
<iconify-icon className="text-indigo-600 text-sm" icon="lucide:shield-check"></iconify-icon>
              Pure Alignment
            </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter leading-[1.1] text-neutral-900 mb-6">
              Independent. Fiduciary. On Your Side.
            </h2>
<p className="text-xl font-medium text-neutral-900 mb-6 leading-relaxed tracking-tight">
              We’re not here to sell you a provider. We’re here to protect your
              plan.
            </p>
<p className="text-base text-neutral-600 leading-relaxed max-w-lg">
              (k)opilot is an independent 401(k) plan advisor — not a provider
              and not a payroll company. That means we don’t push a platform. We
              help you make better decisions with clear benchmarking, better
              oversight, and fiduciary guidance that protects your business and
              supports your employees.
            </p>
</div>
<div className="reveal delay-100">
<div className="bg-neutral-50 rounded-3xl p-8 md:p-10 border border-neutral-100 hover:shadow-xl hover:shadow-neutral-200/40 transition-all duration-300">
<ul className="space-y-5">
<li className="flex items-start gap-4 group">
<div className="w-6 h-6 rounded-full bg-white border border-neutral-200 flex items-center justify-center shrink-0 text-indigo-600 mt-0.5 shadow-sm group-hover:border-indigo-200 group-hover:scale-110 transition-all duration-300">
<iconify-icon className="text-[12px] stroke-[3px]" icon="lucide:check"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-700 leading-relaxed group-hover:text-neutral-900 transition-colors">
                    Quarterly fiduciary monitoring and documentation
                  </span>
</li>
<li className="flex items-start gap-4 group">
<div className="w-6 h-6 rounded-full bg-white border border-neutral-200 flex items-center justify-center shrink-0 text-indigo-600 mt-0.5 shadow-sm group-hover:border-indigo-200 group-hover:scale-110 transition-all duration-300">
<iconify-icon className="text-[12px] stroke-[3px]" icon="lucide:check"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-700 leading-relaxed group-hover:text-neutral-900 transition-colors">
                    Investment lineup review and benchmarking
                  </span>
</li>
<li className="flex items-start gap-4 group">
<div className="w-6 h-6 rounded-full bg-white border border-neutral-200 flex items-center justify-center shrink-0 text-indigo-600 mt-0.5 shadow-sm group-hover:border-indigo-200 group-hover:scale-110 transition-all duration-300">
<iconify-icon className="text-[12px] stroke-[3px]" icon="lucide:check"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-700 leading-relaxed group-hover:text-neutral-900 transition-colors">
                    Fee analysis and negotiation support
                  </span>
</li>
<li className="flex items-start gap-4 group">
<div className="w-6 h-6 rounded-full bg-white border border-neutral-200 flex items-center justify-center shrink-0 text-indigo-600 mt-0.5 shadow-sm group-hover:border-indigo-200 group-hover:scale-110 transition-all duration-300">
<iconify-icon className="text-[12px] stroke-[3px]" icon="lucide:check"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-700 leading-relaxed group-hover:text-neutral-900 transition-colors">
                    Vendor accountability across recordkeepers, payroll, and
                    TPAs
                  </span>
</li>
</ul>
</div>
</div>
</div>
</section>


<section className="py-20 md:py-28 border-t border-neutral-100 bg-neutral-50/30">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full text-[10px] font-bold uppercase tracking-wider text-neutral-600 border border-neutral-200 mb-6 shadow-sm">
<iconify-icon className="text-indigo-600 text-sm" icon="lucide:arrow-left-right"></iconify-icon>
              Seamless Transition
            </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-neutral-900 mb-6 leading-[1.1]">
              Switching Is Easier Than You Think
            </h2>
<h3 className="text-xl text-neutral-600 font-medium mb-6 leading-relaxed">
              Changing advisors doesn’t have to mean changing everything.
            </h3>
<p className="text-base text-neutral-600 leading-relaxed mb-8">
              In many cases, we can improve your plan without switching
              providers. If switching makes sense, we manage the transition
              end-to-end with minimal burden on your team.
            </p>
<p className="text-lg font-bold text-neutral-900">
              You stay focused on running the business. We run the plan.
            </p>
</div>
<div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-neutral-100">
<ul className="space-y-5">
<li className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
<iconify-icon className="text-xl" icon="lucide:scale"></iconify-icon>
</div>
<span className="font-bold text-neutral-900 text-sm">
                  Provider comparisons and negotiation
                </span>
</li>
<li className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
<iconify-icon className="text-xl" icon="lucide:banknote"></iconify-icon>
</div>
<span className="font-bold text-neutral-900 text-sm">
                  Payroll and recordkeeper coordination
                </span>
</li>
<li className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
<iconify-icon className="text-xl" icon="lucide:trending-up"></iconify-icon>
</div>
<span className="font-bold text-neutral-900 text-sm">
                  Investment updates and fiduciary structure
                </span>
</li>
<li className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
<iconify-icon className="text-xl" icon="lucide:graduation-cap"></iconify-icon>
</div>
<span className="font-bold text-neutral-900 text-sm">
                  Employee communication and education
                </span>
</li>
<li className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
<iconify-icon className="text-xl" icon="lucide:calendar-check"></iconify-icon>
</div>
<span className="font-bold text-neutral-900 text-sm">
                  Clear timeline from start to launch
                </span>
</li>
</ul>
</div>
</div>
</section>
<section className="py-12 max-w-4xl" id="faq">
<h3 className="text-2xl font-semibold mb-8">Frequently Asked Questions</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
<div className="">
<h4 className="font-bold text-neutral-900 mb-2">
              Do we have to change providers?
            </h4>
<p className="text-sm text-neutral-600 leading-relaxed">
              No. We can improve your plan where it is — or recommend a change
              only if it materially improves outcomes.
            </p>
</div>
<div className="">
<h4 className="font-bold text-neutral-900 mb-2">
              How do you get paid?
            </h4>
<p className="text-sm text-neutral-600 leading-relaxed">
              Our pricing is transparent and clearly explained upfront. No
              hidden incentives. No confusing markups.
            </p>
</div>
<div className="">
<h4 className="font-bold text-neutral-900 mb-2">
              Will this create more work for HR?
            </h4>
<p className="text-sm text-neutral-600 leading-relaxed">
              It should do the opposite. We support employees directly, run the
              reviews, and coordinate plan improvements.
            </p>
</div>
<div className="">
<h4 className="font-bold text-neutral-900 mb-2">
              Are you a fiduciary?
            </h4>
<p className="text-sm text-neutral-600 leading-relaxed">
              Yes. We provide fiduciary guidance and ongoing monitoring to
              support prudent oversight.
            </p>
</div>
</div>
</section>

<section className="mb-20 mt-20">
<div className="overflow-hidden md:py-32 reveal text-center bg-[#0F172A] w-full rounded-[2.5rem] pt-20 pr-8 pb-20 pl-8 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
<h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tighter leading-[1.1] mb-8">
              Ready to take control of your 401
              <span className="font-bold">[k]</span>
              ?
            </h2>
<p className="text-neutral-300 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
              Let’s simplify your plan, reduce costs, and make oversight
              effortless.
            </p>
<div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center">
<button className="px-10 py-4 bg-white text-neutral-900 rounded-full text-base font-bold hover:bg-neutral-200 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] min-w-[200px]">
                Schedule Free Review
              </button>
<button className="px-10 py-4 bg-transparent border border-neutral-600 text-white rounded-full text-base font-semibold hover:border-white transition-all duration-300 min-w-[200px]">
                See How It Works
              </button>
</div>
</div>
</div>
</section>

<section className="mt-20 overflow-hidden border-t border-neutral-200 pt-12 relative">
<div className="w-full overflow-hidden py-10">
<h1 className="text-[15vw] leading-[0.8] uppercase whitespace-nowrap select-none transition-transform duration-75 will-change-transform font-bold text-neutral-900 tracking-tighter translate-x-0" id="footer-text" style={{transform: 'translateX(-5.725px)'}}>
            [k]opilot.
          </h1>
</div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-8 gap-6 pb-12 reveal px-4">
<div className="text-sm font-medium text-neutral-500 max-w-xs">
            Independent 401
            <span className="font-bold text-neutral-900">[k]</span>
            Plan Advisors Fiduciary | AI + Human Guidance

            <a className="hover:text-black mt-2 inline-block" href="mailto:info@kopilot.com">
              info@kopilot.com
            </a>
</div>
<div className="text-sm font-medium text-neutral-400">
            © 2026 (k)opilot. All Rights Reserved.
          </div>
</div>
</section>
</main>


    </>
  );
}
