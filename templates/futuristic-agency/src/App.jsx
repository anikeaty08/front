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



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.0/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


      lucide.createIcons({
          attrs: {
              "stroke-width": 1.5,
              "class": "text-white"
          }
      });

      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.15
      };

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const delay = entry.target.dataset.delay || 0;
                  setTimeout(() => {
                      entry.target.classList.remove('opacity-0', 'translate-y-8', 'blur-sm');
                      entry.target.classList.add('opacity-100', 'translate-y-0', 'blur-0');
                  }, delay);
                  observer.unobserve(entry.target);
              }
          });
      }, observerOptions);

      document.addEventListener('DOMContentLoaded', () => {
        const animatedSelectors = [
          '#hero-section h1', '#hero-section p', '#hero-section .inline-flex', '#hero-section #hero-dashboard',
          'section h2', 'section h3', 'section p', 'section .group',
          '.grid > div', '#capabilities .group', 'form label', 'form input', 'form button', '.glass-panel'
        ];

        const elements = document.querySelectorAll(animatedSelectors.join(','));
        elements.forEach((el) => {
            // Prevent double animation of nested elements (e.g. p inside a card)
            if(el.closest('.grid > div') && el.tagName !== 'DIV') return;
            if(el.closest('.group') && !el.classList.contains('group')) return;

            el.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-8', 'blur-sm');

            // Stagger for Grids and Lists
            if (el.parentElement.classList.contains('grid') || el.parentElement.classList.contains('flex-col')) {
                const index = Array.from(el.parentElement.children).indexOf(el);
                el.dataset.delay = index * 100;
            }

            observer.observe(el);
        });
      });
    


      let ticking = false;

      function updateDashboard() {
        const hero = document.getElementById('hero-section');
        const dashboard = document.getElementById('hero-dashboard');
        if (hero && dashboard) {
          const scrollY = window.scrollY;
          const heroHeight = hero.offsetHeight;
          // Calculate progress based on scroll (complete by 80% of hero height)
          const progress = Math.min(Math.max(scrollY / (heroHeight * 0.8), 0), 1);

          // Verso (angled back 45deg) to Recto (flat 0deg)
          const rotate = 45 * (1 - progress);

          // Scaling bigger: 0.9 to 1.1
          const scale = 0.9 + (progress * 0.2);

          dashboard.style.setProperty('--tw-rotate-x', `${rotate}deg`);
          dashboard.style.setProperty('--tw-scale-x', scale);
          dashboard.style.setProperty('--tw-scale-y', scale);
        }
      }

      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            updateDashboard();
            ticking = false;
          });
          ticking = true;
        }
      });

      // Initialize state immediately
      updateDashboard();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="12" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 12%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 12%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div data-us-project="G2OBjVkMrg8juHghbIqJ" style={{width: '1440px', height: '900px'}}></div>

</div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none flex justify-center px-6">
<div className="w-full max-w-7xl h-full grid grid-cols-4 border-x border-white/5">
<div className="border-r border-white/5 h-full hidden md:block transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="0"></div>
<div className="border-r border-white/5 h-full transition-all duration-700 ease-out" data-delay="100"></div>
<div className="border-r border-white/5 h-full hidden md:block transition-all duration-700 ease-out" data-delay="200"></div>

</div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 noise-bg"></div>
<div className="absolute top-[-10%] left-[20%] w-[30vw] h-[30vw] bg-emerald-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] bg-neutral-800/20 rounded-full blur-[100px]"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
<div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between gap-8 md:gap-12 transition-all duration-300 hover:border-white/20 duration-700 ease-out opacity-0 translate-y-8 blur-sm">
<a className="font-serif text-xl italic tracking-tight hover:opacity-80 transition-opacity" href="#">
          Vanguard.
        </a>
<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors tracking-wide uppercase" href="#projects">
            Projects
          </a>
<a className="hover:text-white transition-colors uppercase text-xs font-medium text-neutral-400 tracking-wide" href="#capabilities">
            Services
          </a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors tracking-wide uppercase" href="#firm">
            Agency
          </a>
</div>
<a className="group flex items-center gap-2 text-xs font-medium bg-white text-black px-4 py-1.5 rounded-full hover:bg-neutral-200 transition-colors" href="#inquire">
          Inquire
          <svg className="lucide lucide-arrow-right group-hover:translate-x-0.5 transition-transform text-neutral-950 w-[24px] h-[12px] text-white" data-icon-replaced="true" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '12px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</nav>

<section className="min-h-screen flex flex-col overflow-hidden z-10 pt-32 pr-6 pb-20 pl-6 relative items-center justify-center" id="hero-section">
<div className="flex flex-col transition-all duration-1000 text-center opacity-100 max-w-7xl mr-auto ml-auto translate-y-0 items-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-neutral-400 mb-8 animate-float transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="0">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Accepting Projects Q1 2025
        </div>

<h1 className="md:text-8xl lg:text-9xl leading-[0.9] bg-clip-text text-6xl font-normal text-transparent tracking-tight bg-gradient-to-b from-white via-white to-neutral-600 mb-8 transition-all duration-700 ease-out" data-delay="100">
          Crafting digital
          <br/>
<span className="font-light italic text-neutral-500">excellence</span>
</h1>

<p className="text-lg md:text-xl text-neutral-400 max-w-xl leading-relaxed mb-12 font-light transition-all duration-700 ease-out" data-delay="200">
          We partner with ambitious brands to design, build, and scale
          world-class digital products that drive measurable business impact.
        </p>

<div className="relative w-full max-w-full aspect-[16/10] md:aspect-video mt-12 group perspective-midrange transition-all duration-700 ease-out" data-delay="300">

<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/30 via-teal-500/20 to-emerald-900/30 blur-[90px] opacity-60 group-hover:opacity-80 transition-opacity duration-1000"></div>

<div className="overflow-hidden origin-bottom transform-style-preserve-3d bg-[#161618] w-full h-full rounded-xl relative shadow-2xl rotate-x-45 will-change-transform" id="hero-dashboard" style={{position: 'relative', -BorderGradient: 'linear-gradient(0deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '12px', -TwScaleX: '0.9', -TwScaleY: '0.9', -TwRotateX: '45deg'}}>

<div className="h-10 border-b border-white/5 bg-white/[0.02] flex items-center justify-between px-4 relative z-20">
<div className="flex items-center gap-4">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-[#FF5F57] transition-colors duration-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-[#FEBC2E] transition-colors duration-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-[#28C840] transition-colors duration-300"></div>
</div>

<div className="flex items-center gap-2 px-3 py-1 rounded bg-black/20 border border-white/5 text-[10px] text-neutral-500 font-mono transition-colors group-hover:border-white/10 group-hover:text-neutral-400">
<svg className="opacity-50" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
<span>vanguard.agency/analytics</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<div className="w-5 h-5 rounded-full bg-indigo-500 border border-[#161618] flex items-center justify-center text-[8px] text-white font-medium shadow-sm">
                    JD
                  </div>
<div className="w-5 h-5 rounded-full bg-emerald-500 border border-[#161618] flex items-center justify-center text-[8px] text-white font-medium shadow-sm">
                    AL
                  </div>
</div>
<div className="h-3 w-px bg-white/10"></div>
<svg className="text-neutral-600 hover:text-white transition-colors cursor-pointer" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
</div>
</div>

<div className="flex h-[calc(100%-40px)] relative">
<div className="absolute inset-0 noise-bg opacity-10 pointer-events-none"></div>

<div className="w-14 border-r border-white/5 flex flex-col items-center py-6 gap-6 bg-white/[0.01] z-10 hidden sm:flex">
<div className="p-2 rounded-lg bg-white/10 text-white cursor-pointer shadow-[0_0_10px_rgba(255,255,255,0.1)]">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="9" rx="1" width="7" x="3" y="3"></rect>
<rect height="5" rx="1" width="7" x="14" y="3"></rect>
<rect height="9" rx="1" width="7" x="14" y="12"></rect>
<rect height="5" rx="1" width="7" x="3" y="16"></rect>
</svg>
</div>
<div className="p-2 rounded-lg text-neutral-600 hover:text-neutral-300 hover:bg-white/5 transition-all cursor-pointer">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>
<div className="p-2 rounded-lg text-neutral-600 hover:text-neutral-300 hover:bg-white/5 transition-all cursor-pointer">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</div>
<div className="mt-auto p-2 rounded-lg text-neutral-600 hover:text-neutral-300 hover:bg-white/5 transition-all cursor-pointer">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</div>
</div>

<div className="flex-1 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto z-10 scrollbar-none pt-6 pr-6 pb-6 pl-6 relative gap-x-6 gap-y-6">

<div className="col-span-1 lg:col-span-2 space-y-6">

<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group/metric">
<div className="text-[10px] text-neutral-500 font-mono mb-2 uppercase tracking-wider">
                        LIVE_INSIGHTS
                      </div>
<div className="flex items-end justify-between">
<span className="text-2xl text-white font-medium tracking-tight">
                          1.2M
                        </span>
<span className="text-[10px] text-emerald-400 font-mono mb-1 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                          ▲ 12%
                        </span>
</div>

<div className="flex items-end gap-1 h-6 mt-3">
<div className="w-full bg-white/5 rounded-sm h-[40%] group-hover/metric:bg-emerald-500/40 transition-colors duration-500"></div>
<div className="w-full bg-white/5 rounded-sm h-[70%] group-hover/metric:bg-emerald-500/40 transition-colors duration-500 delay-75"></div>
<div className="w-full bg-white/5 rounded-sm h-[50%] group-hover/metric:bg-emerald-500/40 transition-colors duration-500 delay-100"></div>
<div className="w-full bg-emerald-500 rounded-sm h-[90%] shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
<div className="w-full bg-white/5 rounded-sm h-[60%] group-hover/metric:bg-emerald-500/40 transition-colors duration-500 delay-150"></div>
</div>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group/metric">
<div className="text-[10px] text-neutral-500 font-mono mb-2 uppercase tracking-wider">
                        Conversion Rate
                      </div>
<div className="flex items-end justify-between">
<span className="text-2xl text-white font-medium tracking-tight">
                          4.8%
                        </span>
<span className="text-[10px] text-emerald-400 font-mono mb-1 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                          +1.2%
                        </span>
</div>

<div className="mt-4 h-5 w-full flex items-center relative">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent translate-x-[-100%] group-hover/metric:translate-x-[100%] transition-transform duration-1000"></div>
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 20">
<path d="M0 10 L10 12 L20 8 L30 14 L40 10 L50 16 L60 5 L70 12 L80 10 L90 8 L100 10" fill="none" stroke="#34d399" stroke-opacity="0.5" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<circle className="animate-pulse" cx="100" cy="10" fill="#34d399" r="2"></circle>
</svg>
</div>
</div>
<div className="hidden sm:block p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group/metric">
<div className="text-[10px] text-neutral-500 font-mono mb-2 uppercase tracking-wider">
                        Client Satisfaction
                      </div>
<div className="flex items-end justify-between">
<span className="text-2xl text-white font-medium tracking-tight">
                          100%
                        </span>
</div>
<div className="w-full bg-white/10 h-1 mt-6 rounded-full overflow-hidden">
<div className="w-[99%] h-full bg-emerald-500 relative">
<div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]"></div>
</div>
</div>
</div>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] relative overflow-hidden group/chart h-[240px] flex flex-col">
<div className="flex justify-between items-center mb-6 relative z-10">
<div className="text-sm font-medium text-neutral-200">
                        Revenue Growth
                      </div>
<div className="flex gap-1 bg-black/20 p-0.5 rounded-lg border border-white/5">
<span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-white border border-white/5 shadow-sm">
                          1H
                        </span>
<span className="px-2 py-0.5 rounded text-[10px] text-neutral-500 hover:text-white cursor-pointer transition-colors">
                          24H
                        </span>
<span className="px-2 py-0.5 rounded text-[10px] text-neutral-500 hover:text-white cursor-pointer transition-colors">
                          7D
                        </span>
</div>
</div>

<div className="relative flex-1 w-full flex items-end gap-1 z-10">

<div className="flex-1 bg-gradient-to-t from-emerald-500/10 to-transparent h-[40%] rounded-t-[1px] group-hover/chart:bg-emerald-500/20 transition-colors border-t border-emerald-500/30"></div>
<div className="flex-1 bg-gradient-to-t from-emerald-500/10 to-transparent h-[60%] rounded-t-[1px] group-hover/chart:bg-emerald-500/20 transition-colors border-t border-emerald-500/30"></div>
<div className="flex-1 bg-gradient-to-t from-emerald-500/10 to-transparent h-[30%] rounded-t-[1px] group-hover/chart:bg-emerald-500/20 transition-colors border-t border-emerald-500/30"></div>
<div className="flex-1 bg-gradient-to-t from-emerald-500/10 to-transparent h-[50%] rounded-t-[1px] group-hover/chart:bg-emerald-500/20 transition-colors border-t border-emerald-500/30"></div>
<div className="flex-1 bg-gradient-to-t from-emerald-500/10 to-transparent h-[80%] rounded-t-[1px] group-hover/chart:bg-emerald-500/20 transition-colors border-t border-emerald-500/30"></div>
<div className="flex-1 bg-gradient-to-t from-emerald-500/10 to-transparent h-[45%] rounded-t-[1px] group-hover/chart:bg-emerald-500/20 transition-colors border-t border-emerald-500/30"></div>
<div className="flex-1 bg-gradient-to-t from-emerald-500/10 to-transparent h-[70%] rounded-t-[1px] group-hover/chart:bg-emerald-500/20 transition-colors border-t border-emerald-500/30"></div>
<div className="flex-1 bg-gradient-to-t from-emerald-500/10 to-transparent h-[90%] rounded-t-[1px] group-hover/chart:bg-emerald-500/20 transition-colors border-t border-emerald-500/30 relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-800 text-[9px] text-white px-1.5 py-0.5 rounded border border-white/10 opacity-0 group-hover/chart:opacity-100 transition-opacity whitespace-nowrap">
                          Peak: $42k
                        </div>
</div>
<div className="flex-1 bg-gradient-to-t from-emerald-500/10 to-transparent h-[65%] rounded-t-[1px] group-hover/chart:bg-emerald-500/20 transition-colors border-t border-emerald-500/30"></div>
<div className="flex-1 bg-gradient-to-t from-emerald-500/10 to-transparent h-[85%] rounded-t-[1px] group-hover/chart:bg-emerald-500/20 transition-colors border-t border-emerald-500/30"></div>
<div className="flex-1 bg-gradient-to-t from-emerald-500/10 to-transparent h-[55%] rounded-t-[1px] group-hover/chart:bg-emerald-500/20 transition-colors border-t border-emerald-500/30"></div>
<div className="flex-1 bg-gradient-to-t from-emerald-500/10 to-transparent h-[75%] rounded-t-[1px] group-hover/chart:bg-emerald-500/20 transition-colors border-t border-emerald-500/30"></div>
</div>

<div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
</div>
</div>

<div className="col-span-1 h-full min-h-[300px] bg-black/40 border border-white/5 rounded-xl relative overflow-hidden flex flex-col">

<div className="absolute top-0 left-0 w-full h-[2px] bg-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.5)] animate-scan z-20"></div>
<div className="absolute top-4 left-4 z-10 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-[10px] font-mono text-emerald-500 tracking-widest">
                      LIVE_VIEW
                    </span>
</div>

<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-48 h-48 rounded-full border border-white/5 flex items-center justify-center relative">
<div className="absolute inset-0 rounded-full border-t border-l border-emerald-500/20 animate-[spin_4s_linear_infinite]"></div>
<div className="absolute inset-2 rounded-full border-b border-r border-emerald-500/10 animate-[spin_6s_linear_infinite_reverse]"></div>
<div className="w-32 h-32 rounded-full border border-white/5 flex items-center justify-center relative bg-emerald-500/5 backdrop-blur-[1px]">
<div className="absolute inset-0 rounded-full border-b border-emerald-500/40 animate-[spin_3s_linear_infinite_reverse]"></div>
<div className="w-16 h-16 rounded-full bg-emerald-500/20 blur-xl animate-pulse absolute"></div>
<div className="relative z-10 flex flex-col items-center justify-center">
<span className="text-4xl font-mono font-medium text-white tracking-tighter drop-shadow-[0_0_15px_rgba(16,185,129,0.6)]">
                            87
                          </span>
</div>
</div>

<div className="absolute top-8 right-10 w-1 h-1 bg-emerald-400 rounded-full animate-ping"></div>
<div className="absolute bottom-12 left-8 w-1 h-1 bg-emerald-400 rounded-full animate-ping delay-700"></div>
<div className="absolute top-1/2 left-4 w-0.5 h-0.5 bg-white/50 rounded-full"></div>
</div>
</div>

<div className="mt-auto p-4 bg-gradient-to-t from-black via-black/90 to-transparent z-10 border-t border-white/5">
<div className="space-y-2 font-mono text-[9px] text-neutral-500">
<div className="flex gap-2 items-center">
<span className="text-neutral-700">10:42:01</span>
<span className="text-emerald-500/80">
                          Packets routed: 492mb
                        </span>
</div>
<div className="flex gap-2 items-center">
<span className="text-neutral-700">10:42:03</span>
<span className="flex items-center gap-1">
<span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                          Node handshake [OK]
                        </span>
</div>
<div className="flex gap-2 items-center">
<span className="text-neutral-700">10:42:04</span>
<span className="">Sync complete (24ms)</span>
</div>
<div className="flex gap-2 items-center">
<span className="text-neutral-700">10:42:05</span>
<span className="animate-pulse text-white/40">_</span>
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

<div className="border-y overflow-hidden bg-black/50 w-full z-10 border-white/5 pt-6 pb-6 relative" style={{maskImage: 'linear-gradient(90deg, transparent, black 45%, black 60%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 45%, black 60%, transparent)'}}>
<div className="flex w-[200%] animate-ticker">
<div className="flex items-center justify-around w-1/2 px-10 gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-serif italic">Ventura</span>
<span className="text-lg font-semibold tracking-widest">ONYX</span>
<span className="text-xl font-semibold font-sans">Pacific</span>
<span className="text-lg font-medium tracking-tight">Summit</span>
<span className="text-xl font-serif">Atlas</span>
<span className="text-lg font-semibold">NorthStar</span>
</div>
<div className="flex items-center justify-around w-1/2 px-10 gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-serif italic">Ventura</span>
<span className="text-lg font-semibold tracking-widest">ONYX</span>
<span className="text-xl font-semibold font-sans">Pacific</span>
<span className="text-lg font-medium tracking-tight">Summit</span>
<span className="text-xl font-serif">Atlas</span>
<span className="text-lg font-semibold">NorthStar</span>
</div>
</div>
</div>

<section className="max-w-7xl z-10 mr-auto ml-auto pt-32 pr-6 pb-32 pl-6 relative" id="projects">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="">
<span className="text-emerald-500 text-xs font-mono tracking-widest uppercase mb-2 block">
            Selected Works
          </span>
<h2 className="text-4xl md:text-5xl font-normal leading-tight transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm">
            Impact driven work.
          </h2>
</div>
<a className="text-sm text-neutral-400 hover:text-white border-b border-neutral-800 hover:border-white transition-colors pb-0.5" href="#">
          View all case studies
        </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px] gap-x-6 gap-y-6">

<div className="group md:col-span-2 relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/5 cursor-pointer transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="0">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3ff0f777-6fef-48b9-81ec-9c3949d95efa_1600w.webp)]" style={{}}></div>
<div className="bg-gradient-to-t from-black via-black/40 to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c8a4f42-8383-42b5-8225-2fe26499aecc_1600w.webp)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute inset-0 flex items-center justify-center z-40 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
<button className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full flex items-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.3)] transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto hover:bg-neutral-200">
              View Project
              <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end">
<div className="">
<span className="text-xs font-mono text-emerald-400 mb-2 block">
                  Enterprise SaaS
                </span>
<h3 className="text-3xl font-serif italic mb-2">Orbital Finance</h3>
<p className="text-neutral-400 text-sm max-w-md">
                  Next-gen banking infrastructure for the modern economy.
                </p>
</div>
</div>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/5 cursor-pointer transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="100">
<div className="absolute inset-0 bg-neutral-900 transition-colors group-hover:bg-neutral-800"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-orange-500/20 rounded-full blur-[80px]"></div>
<div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-95 group-hover:opacity-50">
<div className="relative w-48 h-64 border border-white/10 rounded-xl bg-black/40 backdrop-blur-md rotate-[6deg] group-hover:rotate-0 transition-transform duration-500 flex flex-col p-4 shadow-2xl">
<div className="flex gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-neutral-700"></div>
<div className="w-2 h-2 rounded-full bg-neutral-700"></div>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center">
<div className="w-8 h-8 rounded-full bg-white/10"></div>
<div className="w-16 h-2 bg-white/10 rounded"></div>
</div>
<div className="bg-gradient-to-br from-orange-500/20 to-transparent w-full h-24 border-white/5 border rounded"></div>
<div className="w-full h-2 bg-white/10 rounded mt-2"></div>
<div className="w-2/3 h-2 bg-white/10 rounded"></div>
</div>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center z-40 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
<button className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full flex items-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.3)] transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto hover:bg-neutral-200">
              View Project
              <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<span className="text-xs font-mono text-orange-400 mb-1 block">
              Healthcare
            </span>
<h3 className="text-xl font-medium">Apex Health</h3>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden bg-[#0A0A0A] border border-white/5 cursor-pointer transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="200">
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0 overflow-hidden pointer-events-none">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>

<div className="absolute inset-0 flex items-center justify-center group-hover:scale-95 group-hover:opacity-40 transition-all duration-500">

<div className="w-48 h-48 rounded-full border border-white/5 flex items-center justify-center scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 ease-out">
<div className="absolute inset-0 rounded-full border-t border-l border-white/10 animate-[spin_12s_linear_infinite]"></div>

<div className="w-32 h-32 rounded-full border border-white/5 flex items-center justify-center relative">
<div className="absolute inset-0 rounded-full border-b border-r border-emerald-500/20 animate-[spin_8s_linear_infinite_reverse]"></div>

<div className="absolute inset-0 animate-[spin_3s_linear_infinite]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
</div>

<div className="w-20 h-20 rounded-full bg-white/[0.02] backdrop-blur-[1px] border border-white/10 flex items-center justify-center relative">
<div className="absolute inset-0 rounded-full border-t border-emerald-500/40 animate-[spin_4s_linear_infinite]"></div>
<svg className="w-8 h-8 text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"></path>
<path d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"></path>
<path d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"></path>
<path d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="absolute top-6 left-6 transition-all duration-500 -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
<div className="flex items-center gap-2 mb-1">
<div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
<span className="text-[10px] font-mono text-emerald-500/90 tracking-widest uppercase">
                  ATOM_SYS_V2
                </span>
</div>
<div className="w-12 h-px bg-emerald-500/30"></div>
</div>
<div className="absolute bottom-6 right-6 text-right transition-all duration-500 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-75">
<div className="text-[9px] font-mono text-neutral-500 uppercase mb-0.5">
                Active Nodes
              </div>
<div className="text-sm font-mono text-white font-medium">84/84</div>
</div>

<div className="absolute top-1/2 left-4 w-1.5 h-px bg-white/20"></div>
<div className="absolute top-1/2 right-4 w-1.5 h-px bg-white/20"></div>
<div className="absolute top-4 left-1/2 h-1.5 w-px bg-white/20"></div>
<div className="absolute bottom-4 left-1/2 h-1.5 w-px bg-white/20"></div>
</div>

<div className="absolute inset-0 flex items-center justify-center z-40 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
<button className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full flex items-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.3)] transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto hover:bg-neutral-200">
              View Project
              <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<div className="p-8 h-full flex flex-col justify-between relative z-10 pointer-events-none group-hover:opacity-40 transition-opacity duration-300">
<div className="flex justify-between items-start">
<div className="p-3 bg-white/5 rounded-xl border border-white/5">
<svg className="lucide lucide-component w-6 h-6 text-white" data-lucide="component" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"></path><path d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"></path><path d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"></path><path d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"></path></svg>
</div>
<span className="px-2 py-1 rounded border border-white/10 text-[10px] uppercase text-neutral-500">
                Internal
              </span>
</div>
<div className="">
<h3 className="text-xl font-medium mb-2">Vanguard System</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                Enterprise component library for rapid development.
              </p>
</div>
</div>
</div>

<div className="group md:col-span-2 relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/5 cursor-pointer transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="300">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-50 group-hover:opacity-30 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e168e200-dbe9-4ef1-96e7-7d1d585cf7c4_1600w.webp)]"></div>
<div className="bg-center bg-gradient-to-t from-black via-black/50 to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e168e200-dbe9-4ef1-96e7-7d1d585cf7c4_1600w.webp)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute inset-0 flex items-center justify-center z-40 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
<button className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full flex items-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.3)] transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto hover:bg-neutral-200">
              View Project
              <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end">
<div className="">
<span className="text-xs font-mono text-blue-400 mb-2 block">
                  Architecture
                </span>
<h3 className="text-3xl font-serif italic mb-2">Meridian Spaces</h3>
<p className="text-neutral-400 text-sm max-w-md">
                  Immersive 3D showcase for sustainable architecture.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative z-10 py-24 border-t border-white/5 overflow-hidden">
<style>
        .perspective-container { perspective: 1000px; }
        .rotate-card { transform-style: preserve-3d; transition: transform 0.6s ease; }
        .group:hover .rotate-card { transform: rotateY(-10deg) rotateX(5deg); }
      </style>
<div className="grid lg:grid-cols-2 gap-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-16 gap-y-16 items-center">

<div className="perspective-container group h-[500px] w-full flex items-center justify-center relative transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="0">

<div className="absolute inset-0 bg-emerald-500/20 blur-[120px] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-pulse" style={{animationDuration: '4s'}}></div>
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"></div>

<div className="rotate-card relative w-full h-full bg-[#0A0A0A]/90 border border-white/10 backdrop-blur-xl rounded-2xl flex flex-col overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-white/20">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

<div className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
<div className="flex items-center gap-3">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
</div>
<div className="px-3 py-1 rounded bg-black/40 border border-white/5 text-[10px] font-mono text-neutral-400 flex items-center gap-2">
<svg className="w-3 h-3 text-neutral-600" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  sim_core_v2.sh
                </div>
</div>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-[10px] font-mono text-emerald-500 tracking-wider">
                  RUNNING
                </span>
</div>
</div>

<div className="relative z-10 flex-1 p-6 flex flex-col gap-6 overflow-hidden">

<div className="flex gap-6 h-32">

<div className="flex-1 space-y-2">
<div className="flex justify-between text-[10px] font-mono text-neutral-500 mb-1">
<span>CORE_LOAD</span>
<span className="text-white">84%</span>
</div>
<div className="flex items-end gap-1 h-20 border-b border-white/5 pb-2">
<div className="w-1.5 h-[40%] bg-emerald-500/30 rounded-t-sm animate-pulse"></div>
<div className="w-1.5 h-[70%] bg-emerald-500/40 rounded-t-sm animate-pulse delay-75"></div>
<div className="w-1.5 h-[50%] bg-emerald-500/30 rounded-t-sm animate-pulse delay-150"></div>
<div className="w-1.5 h-[80%] bg-emerald-500/50 rounded-t-sm animate-pulse delay-100"></div>
<div className="w-1.5 h-[60%] bg-emerald-500/40 rounded-t-sm animate-pulse delay-300"></div>
<div className="w-1.5 h-[90%] bg-emerald-500 rounded-t-sm shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse delay-75"></div>
<div className="w-1.5 h-[40%] bg-emerald-500/30 rounded-t-sm animate-pulse delay-200"></div>
<div className="w-1.5 h-[75%] bg-emerald-500/40 rounded-t-sm animate-pulse delay-100"></div>
<div className="w-1.5 h-[55%] bg-emerald-500/30 rounded-t-sm animate-pulse delay-500"></div>
<div className="w-1.5 h-[85%] bg-emerald-500/50 rounded-t-sm animate-pulse delay-150"></div>
</div>
</div>

<div className="w-32 flex items-center justify-center relative">
<svg className="w-24 h-24 transform -rotate-90">
<circle className="text-white/5" cx="48" cy="48" fill="none" r="40" stroke="currentColor" strokeWidth="4"></circle>
<circle className="text-emerald-500" cx="48" cy="48" fill="none" r="40" stroke="currentColor" stroke-dasharray="251.2" stroke-dashoffset="60" strokeWidth="4"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-2xl font-medium text-white tracking-tighter animate-pulse">
                      98
                    </span>
<span className="text-[9px] font-mono text-neutral-500 uppercase">
                      Score
                    </span>
</div>
</div>
</div>

<div className="flex-1 bg-black/40 rounded-lg border border-white/5 p-3 overflow-hidden font-mono text-[10px] text-neutral-400 space-y-1.5 relative">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
<div className="flex gap-2">
<span className="text-blue-400">➜</span>
<span className="text-white">init_sequence --force</span>
</div>
<div className="flex gap-2">
<span className="text-neutral-600">10:24:01</span>
<span>Compiling assets... [OK]</span>
</div>
<div className="flex gap-2">
<span className="text-neutral-600">10:24:02</span>
<span>Optimizing routes... [OK]</span>
</div>
<div className="flex gap-2">
<span className="text-neutral-600">10:24:03</span>
<span className="text-emerald-400">
                    Deployment successful (42ms)
                  </span>
</div>
<div className="flex gap-2">
<span className="text-neutral-600">10:24:04</span>
<span>Starting health check...</span>
</div>
<div className="flex gap-2">
<span className="text-blue-400 animate-pulse">_</span>
</div>
</div>
</div>

<div className="relative z-10 bg-white/[0.02] border-t border-white/5 p-4 flex justify-between items-center text-[10px] font-mono">
<div className="flex gap-4">
<div className="flex items-center gap-1.5 text-neutral-400">
<svg className="w-3 h-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>CPU 12%</span>
</div>
<div className="flex items-center gap-1.5 text-neutral-400">
<svg className="w-3 h-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>MEM 4.2GB</span>
</div>
</div>
<div className="text-emerald-500 flex items-center gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                Connected
              </div>
</div>
</div>


<div className="absolute -right-6 top-[20%] z-20 animate-float">
<div className="bg-[#161618] border border-white/10 p-4 rounded-xl shadow-2xl transform translate-z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
<svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<div className="text-xs text-white font-medium">Efficiency</div>
<div className="text-[10px] text-emerald-400 font-mono">
                    +24.5% Boost
                  </div>
</div>
</div>
</div>
</div>

<div className="absolute -left-4 bottom-[20%] z-20 animate-float" style={{animationDelay: '2s'}}>
<div className="bg-[#161618] border border-white/10 p-3 rounded-xl shadow-2xl transform translate-z-20 transition-transform duration-500 group-hover:-translate-x-2 delay-75 flex items-center gap-3">
<div className="w-2 h-8 bg-blue-500/50 rounded-full"></div>
<div>
<div className="text-[10px] text-neutral-400 uppercase tracking-wider">
                  Latency
                </div>
<div className="text-sm text-white font-medium font-mono">14ms</div>
</div>
</div>
</div>
</div>

<div className="relative transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="100">

<div className="absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block"></div>
<span className="text-emerald-500 text-xs font-mono tracking-widest uppercase mb-4 block flex items-center gap-2">
<span className="w-8 h-px bg-emerald-500/50"></span>
            Simulation Engine
          </span>
<h2 className="text-4xl md:text-5xl font-serif italic mb-6 tracking-tight text-white">
            Real-time foresight.
          </h2>
<p className="text-neutral-400 text-sm leading-relaxed mb-8 max-w-md">
            We simulate millions of user interactions before a single line of
            production code is written. Our predictive modeling ensures your
            infrastructure is ready for any magnitude of success.
          </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4 text-sm text-neutral-300">
<div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-emerald-500">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="">Predictive load balancing</span>
</div>
<div className="flex items-center gap-4 text-sm text-neutral-300">
<div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-emerald-500">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="">Automated failure recovery</span>
</div>
</div>
<a className="group inline-flex items-center gap-2 text-sm text-white mt-10 border-b border-white/20 pb-1 hover:border-white transition-colors" href="#">
            Explore The Lab
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</a>
</div>
</div>
</section>
<section className="relative z-10 py-32 border-t border-white/5 bg-neutral-900/20 backdrop-blur-sm overflow-hidden" id="protocol">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative">

<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 pb-8 border-b border-white/5">
<div className="max-w-xl">
<div className="flex items-center gap-3 mb-4">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</div>
<span className="text-emerald-500 text-xs font-mono tracking-widest uppercase">
                Methodology
              </span>
</div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm">
              Our Process
            </h2>
</div>
<div className="hidden md:flex items-center gap-4 text-xs font-mono text-neutral-500">
<span className="uppercase tracking-wider">System Status</span>
<span className="h-px w-8 bg-neutral-800"></span>
<span className="text-emerald-500">Active v2.4</span>
</div>
</div>

<div className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-4 gap-px">

<div className="group bg-[#050505] p-8 hover:bg-[#0A0A0A] transition-all duration-300 relative duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="0">
<div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex justify-between items-start mb-16">
<span className="font-mono text-xs text-neutral-600 group-hover:text-emerald-500 transition-colors">
                01
              </span>
<svg className="lucide lucide-telescope w-5 h-5 text-neutral-600 group-hover:text-white transition-colors text-white" data-lucide="telescope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"></path><path d="m13.56 11.747 4.332-.924"></path><path d="m16 21-3.105-6.21"></path><path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"></path><path d="m6.158 8.633 1.114 4.456"></path><path d="m8 21 3.105-6.21"></path><circle cx="12" cy="13" r="2"></circle></svg>
</div>
<div className="space-y-3">
<h3 className="text-lg font-medium text-white group-hover:text-emerald-400 transition-colors tracking-tight">
                Discovery
              </h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors">
                We leverage advanced analytics and user testing to validate
                assumptions before development begins.
              </p>
</div>
</div>

<div className="group bg-[#050505] p-8 hover:bg-[#0A0A0A] transition-all duration-300 relative duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="100">
<div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75"></div>
<div className="flex justify-between items-start mb-16">
<span className="font-mono text-xs text-neutral-600 group-hover:text-emerald-500 transition-colors">
                02
              </span>
<svg className="lucide lucide-pen-tool w-5 h-5 text-neutral-600 group-hover:text-white transition-colors text-white" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<div className="space-y-3">
<h3 className="text-lg font-medium text-white group-hover:text-emerald-400 transition-colors tracking-tight">
                Design
              </h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors">
                Iterative UI/UX synthesis focusing on modularity, scalability,
                and visual impact.
              </p>
</div>
</div>

<div className="group bg-[#050505] p-8 hover:bg-[#0A0A0A] transition-all duration-300 relative duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="200">
<div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
<div className="flex justify-between items-start mb-16">
<span className="font-mono text-xs text-neutral-600 group-hover:text-emerald-500 transition-colors">
                03
              </span>
<svg className="lucide lucide-cpu w-5 h-5 text-neutral-600 group-hover:text-white transition-colors text-white" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<div className="space-y-3">
<h3 className="text-lg font-medium text-white group-hover:text-emerald-400 transition-colors tracking-tight">
                Develop
              </h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors">
                High-velocity engineering sprints using Next.js and WebGL for
                maximum performance.
              </p>
</div>
</div>

<div className="group bg-[#050505] p-8 hover:bg-[#0A0A0A] transition-all duration-300 relative duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="300">
<div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150"></div>
<div className="flex justify-between items-start mb-16">
<span className="font-mono text-xs text-neutral-600 group-hover:text-emerald-500 transition-colors">
                04
              </span>
<svg className="lucide lucide-globe w-5 h-5 text-neutral-600 group-hover:text-white transition-colors text-white" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<div className="space-y-3">
<h3 className="text-lg font-medium text-white group-hover:text-emerald-400 transition-colors tracking-tight">
                Deploy
              </h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors">
                Global edge distribution with real-time monitoring and automated
                scaling.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 max-w-7xl border-white/5 border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative" id="capabilities">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-4 transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="0">
<h2 className="text-4xl md:text-5xl font-serif italic mb-6">Services</h2>
<p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
            We bridge the gap between creative ambition and technical
            feasibility.
          </p>
</div>
<div className="lg:col-span-8 flex flex-col transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="100">

<div className="group py-8 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-xl transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="0">
<div className="flex items-center gap-6">
<span className="text-xs font-mono text-neutral-600">01</span>
<h3 className="text-2xl font-medium group-hover:translate-x-2 transition-transform duration-300">
                Product Strategy
              </h3>
</div>
<p className="text-sm text-neutral-500 max-w-xs md:text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
              Roadmapping, MVP Definition, Audit
            </p>
</div>

<div className="group py-8 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-xl transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="100">
<div className="flex items-center gap-6">
<span className="text-xs font-mono text-neutral-600">02</span>
<h3 className="text-2xl font-medium group-hover:translate-x-2 transition-transform duration-300">
                Interface Design
              </h3>
</div>
<p className="text-sm text-neutral-500 max-w-xs md:text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
              Web, Mobile, Visual Systems
            </p>
</div>

<div className="group py-8 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-xl transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="200">
<div className="flex items-center gap-6">
<span className="text-xs font-mono text-neutral-600">03</span>
<h3 className="text-2xl font-medium group-hover:translate-x-2 transition-transform duration-300">
                Engineering
              </h3>
</div>
<p className="text-sm text-neutral-500 max-w-xs md:text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
              React, Next.js, Node, Python
            </p>
</div>

<div className="group py-8 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-xl transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="300">
<div className="flex items-center gap-6">
<span className="text-xs font-mono text-neutral-600">04</span>
<h3 className="text-2xl font-medium group-hover:translate-x-2 transition-transform duration-300">
                Creative Tech
              </h3>
</div>
<p className="text-sm text-neutral-500 max-w-xs md:text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
              WebGL, AR/VR, Installations
            </p>
</div>
</div>
</div>
</section>
<section className="bg-neutral-900/10 z-10 border-white/5 border-t pt-32 pr-6 pb-32 pl-6 relative">
<style>
        @keyframes beam-horz {
          0% { left: -100px; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes beam-vert {
          0% { top: -100px; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0px rgba(16, 185, 129, 0); }
          50% { box-shadow: 0 0 15px 2px rgba(16, 185, 129, 0.3); }
        }
      </style>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-5 transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="0">
<span className="text-neutral-500 text-xs font-mono tracking-widest uppercase mb-2 block">
            Architecture
          </span>
<h2 className="text-4xl md:text-5xl font-serif italic mb-6 text-white tracking-tight">
            System Topology.
          </h2>
<p className="text-neutral-400 text-sm leading-relaxed mb-8">
            Our mesh network structure eliminates single points of failure,
            ensuring consistent throughput via redundant signal paths.
            Engineered for absolute stability.
          </p>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5 group hover:border-white/20 transition-colors transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm">
<div className="flex items-center gap-3">
<svg className="lucide lucide-zap w-4 h-4 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-sm font-medium text-neutral-200">
                  Latency
                </span>
</div>
<span className="font-mono text-sm text-neutral-400">&lt; 15ms</span>
</div>
<div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5 group hover:border-white/20 transition-colors transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm">
<div className="flex items-center gap-3">
<svg className="lucide lucide-globe w-4 h-4 text-white" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="text-sm font-medium text-neutral-200">
                  Distribution
                </span>
</div>
<span className="font-mono text-sm text-neutral-400">
                Global Mesh
              </span>
</div>
<div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5 group hover:border-white/20 transition-colors transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm">
<div className="flex items-center gap-3">
<svg className="lucide lucide-lock w-4 h-4 text-white" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span className="text-sm font-medium text-neutral-200">
                  Encryption
                </span>
</div>
<span className="font-mono text-sm text-neutral-400">End-to-End</span>
</div>
</div>
</div>

<div className="lg:col-span-7 relative transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="100">
<div className="aspect-square md:aspect-video w-full glass-panel rounded-2xl border border-white/10 overflow-hidden relative flex items-center justify-center bg-[#080808] transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40"></div>

<div className="flex pt-12 pr-12 pb-12 pl-12 absolute top-0 right-0 bottom-0 left-0 items-center justify-center" style={{perspective: '1000px'}}>

<div className="relative w-full h-full max-w-[360px] max-h-[360px] flex items-center justify-center transform-style-preserve-3d">

<div className="absolute inset-0 bg-emerald-500/10 blur-[80px] rounded-full opacity-40"></div>

<div className="relative w-full h-full flex items-center justify-center transform-style-preserve-3d">

<div className="absolute w-[320px] h-[320px] rounded-full border border-white/5 border-dashed animate-[spin_60s_linear_infinite]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/20 rounded-full"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/20 rounded-full"></div>
</div>

<div className="absolute inset-0 flex items-center justify-center rotate-x-75 transform-style-preserve-3d">
<div className="w-[280px] h-[280px] rounded-full border border-white/10 border-t-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.15)] animate-[spin_12s_linear_infinite] flex items-center justify-center">
<div className="absolute top-0 w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center rotate-y-75 transform-style-preserve-3d">
<div className="w-[240px] h-[240px] rounded-full border border-white/10 border-r-emerald-500/50 animate-[spin_16s_linear_infinite_reverse] flex items-center justify-center">
<div className="absolute right-0 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center rotate-x-45 rotate-z-45 transform-style-preserve-3d">
<div className="w-[200px] h-[200px] rounded-full border border-dashed border-white/10 animate-[spin_20s_linear_infinite]"></div>
</div>

<div className="relative w-24 h-24 transform-style-preserve-3d flex items-center justify-center">

<div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl animate-pulse"></div>

<div className="relative w-16 h-16 bg-[#0A0A0A] rounded-full border border-white/10 flex items-center justify-center shadow-2xl backdrop-blur-md z-10 group overflow-hidden transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent opacity-50"></div>

<div className="text-emerald-400 animate-[spin_8s_linear_infinite]">
<svg className="lucide lucide-hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent translate-y-[-100%] animate-[scan_3s_ease-in-out_infinite]"></div>
</div>

<div className="absolute inset-[-20px] animate-[spin_4s_linear_infinite] pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
</div>
</div>
</div>

<div className="absolute top-4 -right-4 animate-float transform translate-z-10">
<div className="flex flex-col items-end gap-1">
<div className="flex items-center gap-2">
<div className="px-2 py-1 bg-neutral-900/90 border border-white/10 rounded backdrop-blur-sm shadow-lg">
<span className="text-[9px] font-mono text-emerald-400 font-bold tracking-wider">
                          SYNCED
                        </span>
</div>
<div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
</div>
<div className="h-8 w-px bg-gradient-to-b from-white/20 to-transparent mr-[3px]"></div>
</div>
</div>

<div className="absolute bottom-4 -left-4 animate-[float_5s_ease-in-out_infinite_1.5s] transform translate-z-10">
<div className="flex flex-col items-start gap-1">
<div className="h-8 w-px bg-gradient-to-t from-white/20 to-transparent ml-[3px]"></div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
<div className="px-2 py-1 bg-neutral-900/90 border border-white/10 rounded backdrop-blur-sm shadow-lg">
<span className="text-[9px] font-mono text-neutral-400 font-bold tracking-wider">
                          LATENCY: 4ms
                        </span>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-6 p-3 border border-white/10 bg-neutral-900/90 text-[10px] font-mono space-y-1 z-10 w-32 backdrop-blur-md">
<div className="flex justify-between text-neutral-500">
<span className="">LOAD</span>
<span className="text-white">12%</span>
</div>
<div className="w-full h-0.5 bg-neutral-800">
<div className="w-[12%] h-full bg-white"></div>
</div>
</div>

<div className="absolute top-6 right-6 p-3 border border-white/10 bg-neutral-900/90 text-[10px] font-mono space-y-1 z-10 w-auto backdrop-blur-md">
<div className="flex justify-between gap-4 text-neutral-500">
<span>STATUS</span>
<span className="text-emerald-500 animate-pulse">OPTIMAL</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 border-t border-white/5 bg-[#030303] overflow-hidden">

<div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="mb-20 md:text-center max-w-3xl mx-auto">
<div className="flex items-center gap-2 justify-center mb-6 transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-mono text-emerald-500 tracking-widest uppercase">Network Status: Operational</span>
</div>
<h2 className="text-5xl md:text-7xl font-serif italic mb-6 tracking-tight text-white transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="100">
            Global Scale.
          </h2>
<p className="text-neutral-400 text-lg font-light leading-relaxed transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="200">
            Deployed across 24 regions, our intelligent mesh network guarantees data
            sovereignty and sub-millisecond propagation worldwide.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">

<div className="md:col-span-8 bg-[#080808] border border-white/10 rounded-[32px] relative overflow-hidden group transition-all duration-1000 ease-out opacity-0 translate-y-8 blur-sm duration-700" data-delay="0">

<div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen group-hover:scale-105 transition-transform duration-[2s] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d24bbfb5-ee1c-414e-86a1-235f1d292807_1600w.webp)]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent"></div>
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>

<div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
<div className="flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 shadow-lg">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-[10px] font-mono text-emerald-500 font-medium tracking-wider">LIVE</span>
</div>
<div className="w-px h-3 bg-white/10"></div>
<span className="text-[10px] font-mono text-neutral-400">US-WEST-2</span>
</div>

<div className="w-24 h-24 rounded-full border border-white/5 bg-white/[0.01] backdrop-blur-[2px] flex items-center justify-center relative -mr-4 -mt-4 group-hover:bg-white/[0.03] transition-colors">
<div className="absolute inset-0 rounded-full border-t border-white/20 animate-spin"></div>
<div className="absolute inset-4 rounded-full border border-white/5"></div>
<span className="text-[8px] font-mono text-white/40 tracking-widest">SCANNING</span>
</div>
</div>

<div className="absolute top-[30%] left-[25%] group/node cursor-crosshair">
<div className="w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] relative z-10"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/10 rounded-full animate-ping"></div>
<div className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur border border-white/10 px-3 py-1.5 rounded opacity-0 group-hover/node:opacity-100 transition-opacity translate-x-2 group-hover/node:translate-x-0 duration-300">
<div className="text-[10px] font-mono text-white">Node_84</div>
<div className="text-[9px] font-mono text-emerald-500">99.9% Uptime</div>
</div>
</div>
<div className="absolute bottom-[40%] right-[35%] group/node cursor-crosshair">
<div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)] relative z-10"></div>
<div className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur border border-white/10 px-3 py-1.5 rounded opacity-0 group-hover/node:opacity-100 transition-opacity -translate-x-2 group-hover/node:translate-x-0 duration-300 text-right">
<div className="text-[10px] font-mono text-white">Relay_Alpha</div>
<div className="text-[9px] font-mono text-emerald-500">Active</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/90 to-transparent pt-32">
<div className="flex flex-col md:flex-row justify-between items-end gap-8">
<div className="max-w-md">
<div className="flex gap-2 mb-4">
<span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-neutral-300 backdrop-blur-sm">
                      Latency: 12ms
                    </span>
<span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-neutral-300 backdrop-blur-sm">
                      Load: 42%
                    </span>
</div>
<h3 className="text-3xl font-medium text-white mb-2 tracking-tight">Tier-1 Infrastructure</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
                    Distributed mesh topology ensuring data sovereignty and
                    sub-millisecond propagation across 24 global regions.
                  </p>
</div>
<div className="grid grid-cols-2 gap-8 w-full md:w-auto border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
<div>
<div className="text-[10px] font-mono text-neutral-500 uppercase mb-1 tracking-wider">Packet Loss</div>
<div className="text-xl font-mono text-white">0.00%</div>
</div>
<div>
<div className="text-[10px] font-mono text-neutral-500 uppercase mb-1 tracking-wider">Throughput</div>
<div className="text-xl font-mono text-emerald-400">4.2 TB/s</div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 flex flex-col gap-6 transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="100">

<div className="flex-1 bg-neutral-900/40 border border-white/5 rounded-[32px] p-8 relative overflow-hidden group hover:border-white/10 hover:bg-neutral-900/60 transition-all duration-500 opacity-0 translate-y-8 blur-sm duration-700 ease-out" data-delay="0">

<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute top-8 right-8 text-white/5 group-hover:text-emerald-500/10 transition-colors duration-500 transform group-hover:scale-110">
<svg fill="none" height="80" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 24 24" width="80"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="text-4xl font-light text-white/10 font-mono group-hover:text-emerald-500/30 transition-colors">01</span>
</div>
<div className="mt-auto">
<h4 className="text-xl font-medium text-white mb-2 group-hover:translate-x-1 transition-transform">Zero Trust</h4>
<p className="text-sm text-neutral-500 leading-relaxed font-light">
                    Identity-aware proxy architecture built for the modern threat landscape.
                  </p>
</div>
</div>
</div>

<div className="flex-1 bg-neutral-900/40 border border-white/5 rounded-[32px] p-8 relative overflow-hidden group hover:border-white/10 hover:bg-neutral-900/60 transition-all duration-500 opacity-0 translate-y-8 blur-sm duration-700 ease-out" data-delay="100">

<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute top-8 right-8 text-white/5 group-hover:text-blue-500/10 transition-colors duration-500 transform group-hover:rotate-90">
<svg fill="none" height="80" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 24 24" width="80"><path d="M12 2v4"></path><path d="m16.2 7.8 2.9-2.9"></path><path d="M18 12h4"></path><path d="m16.2 16.2 2.9 2.9"></path><path d="M12 18v4"></path><path d="m4.9 19.1 2.9-2.9"></path><path d="M2 12h4"></path><path d="m4.9 4.9 2.9 2.9"></path></svg>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="text-4xl font-light text-white/10 font-mono group-hover:text-blue-500/30 transition-colors">02</span>
</div>
<div className="mt-auto">
<h4 className="text-xl font-medium text-white mb-2 group-hover:translate-x-1 transition-transform">Self-Healing</h4>
<p className="text-sm text-neutral-500 leading-relaxed font-light">
                    Automated recovery protocols that resolve incidents instantly without human intervention.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative z-10 py-32 px-6" id="inquire">
<div className="max-w-4xl mx-auto glass-panel rounded-[32px] p-8 md:p-16 border border-white/10 relative overflow-hidden transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm">

<div className="absolute -top-20 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative z-10 grid md:grid-cols-2 gap-12">
<div className="flex flex-col justify-between transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="0">
<div className="">
<h2 className="text-4xl md:text-5xl font-serif italic mb-4">
                Start a project
              </h2>
<p className="text-neutral-400 text-sm mb-8">
                We are currently accepting new partnerships for 2025.
              </p>
</div>
<div className="space-y-4 hidden md:block">
<div className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="lucide lucide-mail w-4 h-4 text-neutral-500 text-white" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                hello@vanguard.agency
              </div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="lucide lucide-map-pin w-4 h-4 text-neutral-500 text-white" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                San Francisco, CA
              </div>
</div>
</div>

<form className="space-y-6">
<div className="grid grid-cols-2 gap-4">
<div className="col-span-2 sm:col-span-1 transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="0">
<label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">
                  Full Name
                </label>
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-neutral-700" placeholder="Alex Chen" type="text"/>
</div>
<div className="col-span-2 sm:col-span-1 transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="100">
<label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">
                  Work Email
                </label>
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-neutral-700" placeholder="alex@company.com" type="email"/>
</div>
</div>
<div className="">
<label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3 transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm">
                Investment Range
              </label>

<div className="relative w-full h-12 flex items-center">
<input className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-4 [&amp;::-webkit-slider-thumb]:h-4 [&amp;::-webkit-slider-thumb]:bg-white [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" max="200" min="20" type="range" value="50"/>
<div className="absolute -bottom-4 w-full flex justify-between text-[10px] text-neutral-600 font-mono">
<span>$20k</span>
<span>$100k</span>
<span>$200k+</span>
</div>
</div>
</div>
<div className="">
<label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3 transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm">
                Requirement
              </label>
<div className="flex flex-wrap gap-3">

<label className="cursor-pointer relative transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm">
<input className="peer sr-only transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" type="checkbox"/>
<span className="block px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-400 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all hover:border-white/30">
                    New Build
                  </span>
</label>
<label className="cursor-pointer relative transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm">
<input className="peer sr-only transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" type="checkbox"/>
<span className="block px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-400 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all hover:border-white/30">
                    Redesign
                  </span>
</label>
<label className="cursor-pointer relative transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm">
<input className="peer sr-only transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" type="checkbox"/>
<span className="block px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-400 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all hover:border-white/30">
                    Consulting
                  </span>
</label>
</div>
</div>
<div className="pt-4 flex items-center justify-between">

<div className="flex items-center gap-3">
<label className="relative inline-flex items-center cursor-pointer transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm">
<input className="sr-only peer transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" type="checkbox" value=""/>
<div className="w-9 h-5 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600"></div>
<span className="ms-3 text-xs text-neutral-400">
                    Receive briefing
                  </span>
</label>
</div>
<button className="px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-lg hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" type="button">
                Submit
              </button>
</div>
</form>
</div>
</div>
</section>

<footer className="z-10 bg-[#050505] border-white/5 border-t pt-20 pr-6 pb-10 pl-6 relative overflow-hidden">

<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-3xl h-32 bg-emerald-500/10 blur-[80px] -translate-y-1/2 pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="md:col-span-2 transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="0">
<h1 className="text-6xl md:text-8xl font-serif italic mb-6 text-white/90">
              Vanguard.
            </h1>
<p className="text-neutral-500 max-w-sm text-sm">
              Strategic design and engineering for the digital age.
            </p>
</div>
<div className="space-y-4 transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="100">
<h4 className="text-xs font-mono text-white/40 uppercase tracking-widest">
              Index
            </h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li className="">
<a className="hover:text-white transition-colors" href="#">Main</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Projects
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Services
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Agency
                </a>
</li>
</ul>
</div>
<div className="space-y-4 transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="200">
<h4 className="text-xs font-mono text-white/40 uppercase tracking-widest">
              Connect
            </h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Twitter / X
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
                  Instagram
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  LinkedIn
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  GitHub
                </a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-neutral-600">
<span>© 2025 Vanguard Agency Inc.</span>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-neutral-400" href="#">Privacy</a>
<a className="hover:text-neutral-400" href="#">Legal</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
