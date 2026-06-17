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
  
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, observerOptions);
  
  // Observe all elements with animation classes
  document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .fade-in, .blur-in, .scale-in').forEach(el => {
    observer.observe(el);
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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="100" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 100%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ZPruWnhzwuk5Tf6nc1q0"></div></div></div>

<nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/50 border-b border-white/5">
<div className="flex max-w-7xl mr-auto ml-auto pt-0 pr-6 pb-0 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<span className="bg-center text-xl font-semibold tracking-tight bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6506f57d-d763-4f65-be30-e4db135775b2_1600w.png)] bg-cover pt-10 pr-12 pb-10 pl-12"></span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-slate-400 hover:text-white transition-all duration-300 hover:scale-105" href="#features">Features</a>
<a className="text-sm text-slate-400 hover:text-white transition-all duration-300 hover:scale-105" href="#showcase">Showcase</a>
<a className="text-sm text-slate-400 hover:text-white transition-all duration-300 hover:scale-105" href="#workflow">Workflow</a>
<a className="text-sm text-slate-400 hover:text-white transition-all duration-300 hover:scale-105" href="#pricing">Pricing</a>
</div>
<button className="px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
      Get Started
    </button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
<div className="absolute inset-0 grid-pattern"></div>
<div className="bg-gradient-to-b from-violet-500/10 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 animate-scale-in hover:bg-white/10 transition-all duration-300 hover:scale-105">
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
<span className="text-sm text-slate-300">Now with real-time AI collaboration</span>
</div>
<h1 className="md:text-8xl bg-clip-text text-6xl font-bold text-transparent tracking-tighter bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 mb-6" style={{maskImage: 'linear-gradient(90deg, transparent, black 50%, black 50%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 50%, black 50%, transparent)'}}>
      Design Beyond<br/>Imagination
    </h1>
<p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
      Transform concepts into breathtaking designs with AI-powered creative intelligence. Generate, iterate, and perfect in real-time.
    </p>
<div className="flex items-center justify-center gap-4">
<button className="px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl font-medium hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
        Start Creating Free
      </button>
<button className="hover:bg-white/10 transition-all duration-300 hover:scale-105 flex font-medium bg-white/5 border-white/10 border rounded-xl pt-4 pr-8 pb-4 pl-8 backdrop-blur-md gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-play-circle w-5 h-5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
        Watch Demo
      </button>
</div>
<div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
<div className="text-center fade-in-up delay-100 animated">
<div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">2M+</div>
<div className="text-sm text-slate-500 mt-1">Designs Created</div>
</div>
<div className="text-center fade-in-up delay-200 animated">
<div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">50K+</div>
<div className="text-sm text-slate-500 mt-1">Active Creators</div>
</div>
<div className="text-center fade-in-up delay-300 animated">
<div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">99.9%</div>
<div className="text-sm text-slate-500 mt-1">Satisfaction Rate</div>
</div>
</div>
</div>
</section>

<div className="flex xl:pt-0 xl:pb-0 sm:pl-4 sm:pr-4 sm:pt-20 w-screen h-1000 pt-20 pr-2 pb-40 pl-2 scale-100 rotate-x-5 items-center justify-center blur-in" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 1%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 1%, transparent)'}}>
<div className="flex flex-col overflow-hidden xl:bg-neutral-900/20 bg-neutral-900 w-full h-[700px] max-w-7xl max-h-[95vh] border-white/10 border rounded-2xl shadow-2xl backdrop-blur-xl perspective-none transition-all duration-300 hover:border-white/20">

<div className="flex items-center justify-between border-b border-white/10 px-5 py-3 bg-black/60 backdrop-blur">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-xs font-medium tracking-tight hover:scale-110 transition-transform duration-300">
          DF
        </div>
<div>
<h2 className="text-sm font-semibold tracking-tight">DesignForge Workspace</h2>
<p className="text-xs text-neutral-400">Portfolio overview · Last updated 2 mins ago</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs text-neutral-300 border border-white/10 hover:bg-white/5 transition-all duration-300 hover:scale-105">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
          Search
        </button>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs text-neutral-300 border border-white/10 hover:bg-white/5 transition-all duration-300 hover:scale-105">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 21a8 8 0 1 0-12.9 0"></path>
<circle cx="12" cy="11" r="4"></circle>
</svg>
          Share
        </button>
</div>
</div>

<div className="flex-1 flex overflow-hidden">

<aside className="hidden md:flex md:flex-col w-64 border-r border-white/5 bg-black/50">
<div className="px-4 py-3 border-b border-white/5">
<p className="text-[11px] uppercase tracking-wide text-neutral-500 mb-1">Workspace</p>
<div className="flex flex-wrap gap-1.5">
<span className="text-[11px] px-2 py-1 rounded-full bg-white/5 text-neutral-300 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">All projects</span>
<span className="text-[11px] px-2 py-1 rounded-full bg-transparent text-neutral-400 border border-white/5 hover:bg-white/5 transition-colors cursor-pointer">Client work</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto px-3 py-3 space-y-5">

<div>
<p className="text-[11px] uppercase tracking-wide text-neutral-500 mb-2 px-1">Overview</p>
<div className="space-y-1">
<button className="flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-xs text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                Dashboard
              </button>
<button className="flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-xs text-neutral-300 hover:bg-white/5 transition-all duration-300">
<span className="h-1.5 w-1.5 rounded-full bg-neutral-500"></span>
                Gallery
              </button>
<button className="flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-xs text-neutral-300 hover:bg-white/5 transition-all duration-300">
<span className="h-1.5 w-1.5 rounded-full bg-neutral-500"></span>
                Workflows
              </button>
</div>
</div>

<div>
<p className="text-[11px] uppercase tracking-wide text-neutral-500 mb-2 px-1">Recent projects</p>
<div className="space-y-1">
<button className="flex flex-col w-full rounded-md px-2.5 py-2 text-xs text-neutral-300 hover:bg-white/5 border border-white/5 transition-all duration-300 hover:border-white/10">
<span className="text-neutral-100">Bankify mobile UI</span>
<span className="text-[11px] text-neutral-500 mt-0.5">Product design · 18 screens</span>
</button>
<button className="flex flex-col w-full rounded-md px-2.5 py-2 text-xs text-neutral-300 hover:bg-white/5 border border-transparent transition-all duration-300 hover:border-white/10">
<span className="text-neutral-100">Lux photography site</span>
<span className="text-[11px] text-neutral-500 mt-0.5">Marketing · Web</span>
</button>
<button className="flex flex-col w-full rounded-md px-2.5 py-2 text-xs text-neutral-300 hover:bg-white/5 border border-transparent transition-all duration-300 hover:border-white/10">
<span className="text-neutral-100">DesignForge hero visuals</span>
<span className="text-[11px] text-neutral-500 mt-0.5">Brand · Landing page</span>
</button>
</div>
</div>

<div>
<p className="text-[11px] uppercase tracking-wide text-neutral-500 mb-2 px-1">System</p>
<div className="space-y-1">
<button className="flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-xs text-neutral-300 hover:bg-white/5 transition-all duration-300">
<span className="flex items-center gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-neutral-500"></span>
                  Settings
                </span>
<span className="text-[11px] text-neutral-500">⌘,</span>
</button>
<button className="flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-xs text-neutral-300 hover:bg-white/5 transition-all duration-300">
<span className="flex items-center gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-neutral-500"></span>
                  Changelog
                </span>
<span className="text-[11px] text-neutral-500">7.3</span>
</button>
</div>
</div>
</nav>

<div className="border-t border-white/5 px-4 py-3">
<div className="flex items-center justify-between mb-1.5">
<span className="text-xs text-neutral-400">Render credits</span>
<span className="text-xs font-medium text-white">1,280 / 2,000</span>
</div>
<div className="w-full h-1.5 bg-neutral-900 rounded-full overflow-hidden mb-1">
<div className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500" style={{width: '64%'}}></div>
</div>
<p className="text-[11px] text-neutral-500 mb-2">Resets in 11 days</p>
<button className="w-full rounded-md px-3 py-1.5 text-xs font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            Upgrade workspace
          </button>
</div>
</aside>

<main className="flex-1 flex flex-col xl:bg-neutral-950/80 bg-neutral-950/60">

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-white/5 px-5 py-3 bg-black/50">
<div>
<h1 className="text-lg font-semibold tracking-tight">Creative overview</h1>
<p className="text-xs text-neutral-400 mt-0.5">Track your DesignForge output at a glance</p>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs text-neutral-300 border border-white/10 hover:bg-white/5 transition-all duration-300">
              Last 7 days
            </button>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs text-white bg-white text-black hover:bg-white/90 transition-all duration-300 hover:scale-105">
              New project
            </button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-5 space-y-5">

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-xl border border-white/10 bg-black/60 px-4 py-3 hover:border-violet-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
<p className="text-[11px] uppercase tracking-wide text-neutral-500 mb-1">Generations</p>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight">486</span>
<span className="text-[11px] text-emerald-400">+23% vs last week</span>
</div>
<p className="text-[11px] text-neutral-500 mt-1">Across 14 projects</p>
</div>
<div className="rounded-xl border border-white/10 bg-black/60 px-4 py-3 hover:border-violet-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
<p className="text-[11px] uppercase tracking-wide text-neutral-500 mb-1">Accepted designs</p>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight">72%</span>
<span className="text-[11px] text-emerald-400">+8% quality lift</span>
</div>
<p className="text-[11px] text-neutral-500 mt-1">After manual edits</p>
</div>
<div className="rounded-xl border border-white/10 bg-black/60 px-4 py-3 hover:border-violet-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
<p className="text-[11px] uppercase tracking-wide text-neutral-500 mb-1">Time saved</p>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight">39h</span>
<span className="text-[11px] text-emerald-400">This month</span>
</div>
<p className="text-[11px] text-neutral-500 mt-1">vs manual workflows</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

<div className="lg:col-span-3 rounded-xl border border-white/10 bg-black/60 p-4 hover:border-white/20 transition-all duration-300">
<div className="flex items-center justify-between mb-3">
<div>
<p className="text-xs font-medium text-neutral-300">Latest outputs</p>
<p className="text-[11px] text-neutral-500 mt-0.5">From "Bankify mobile UI" workflow</p>
</div>
<button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[11px] text-neutral-300 border border-white/10 hover:bg-white/5 transition-all duration-300">
                  View gallery
                </button>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
<div className="relative overflow-hidden rounded-lg border border-white/10 bg-cover bg-center aspect-square bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a2df0305-406b-4c70-bd26-98c6e9b0205d_800w.webp)] hover:scale-105 transition-transform duration-300 cursor-pointer">
<div className="bg-gradient-to-t from-black/80 via-black/0 to-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
<p className="text-[11px] text-neutral-200 truncate">Onboarding screen</p>
<span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/60 border border-white/10 text-neutral-300">v3</span>
</div>
</div>
<div className="relative overflow-hidden rounded-lg border border-white/10 bg-cover bg-center aspect-square bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ed79ea39-f11e-4cb6-a686-f04fa4f7acb0_320w.webp)] hover:scale-105 transition-transform duration-300 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0"></div>
<div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
<p className="text-[11px] text-neutral-200 truncate">Analytics summary</p>
<span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/60 border border-white/10 text-neutral-300">v2</span>
</div>
</div>
<div className="relative overflow-hidden rounded-lg border border-white/10 bg-cover bg-center aspect-square hidden sm:block bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/34e5cb91-cea6-44d5-bd39-8a2ece326073_320w.webp)] hover:scale-105 transition-transform duration-300 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0"></div>
<div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
<p className="text-[11px] text-neutral-200 truncate">Cards overview</p>
<span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/60 border border-white/10 text-neutral-300">v1</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 rounded-xl border border-white/10 bg-black/60 p-4 flex flex-col hover:border-white/20 transition-all duration-300">
<div className="flex items-center justify-between mb-2">
<div>
<p className="text-xs font-medium text-neutral-300">Prompt inspector</p>
<p className="text-[11px] text-neutral-500 mt-0.5">Current generation recipe</p>
</div>
<button className="px-2 py-1 rounded-md text-[11px] text-neutral-300 border border-white/10 hover:bg-white/5 transition-all duration-300">
                  Copy
                </button>
</div>
<div className="flex-1 rounded-lg border border-white/10 bg-black/50 px-3 py-2">
<p className="text-[11px] text-neutral-400 leading-relaxed">
                  "Design a clean, modern finance dashboard for a mobile app. Emphasize clarity, soft gradients, and ample whitespace. Include a hero balance card, recent transactions, and a compact analytics summary. Style consistent with DesignForge hero visuals."
                </p>
</div>
<div className="flex flex-wrap gap-1.5 mt-3">
<span className="text-[11px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:bg-white/10 transition-colors cursor-pointer">Aspect: 9:16</span>
<span className="text-[11px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:bg-white/10 transition-colors cursor-pointer">Style: Product UI</span>
<span className="text-[11px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:bg-white/10 transition-colors cursor-pointer">Quality: High</span>
</div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-black/70 p-4 hover:border-violet-500/30 transition-all duration-300">
<div className="flex flex-col md:flex-row md:items-end gap-3">
<div className="flex-1">
<label className="text-[11px] uppercase tracking-wide text-neutral-500 mb-1 block">New prompt</label>
<div className="rounded-lg border border-white/10 bg-black/60 focus-within:border-violet-500/50 transition-colors">
<textarea className="w-full bg-transparent text-xs placeholder-neutral-500 focus:outline-none resize-none px-3 py-2" placeholder="Describe the next DesignForge visual you want to generate…" rows="3"></textarea>
</div>
</div>
<div className="flex flex-col gap-2 md:w-52">
<div className="flex items-center gap-1.5">
<button className="flex-1 flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-md text-[11px] text-neutral-300 border border-white/10 bg-black/60 hover:bg-white/5 transition-all duration-300">
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="m9 9 6 6"></path>
<path d="m15 9-6 6"></path>
</svg>
                    Random idea
                  </button>
<button className="flex-1 flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-md text-[11px] text-neutral-300 border border-white/10 bg-black/60 hover:bg-white/5 transition-all duration-300">
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
</svg>
                    Use preset
                  </button>
</div>
<button className="flex items-center justify-center gap-1.5 rounded-md px-3 py-2 text-xs font-medium text-black bg-white hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l4 4-4 4"></path>
<path d="M2 12h20"></path>
<path d="M12 14l4 4-4 4"></path>
</svg>
                  Generate with DesignForge
                </button>
<p className="text-[11px] text-neutral-500 text-right">4 credits · AuraGen High</p>
</div>
</div>
</div>
</div>
</main>

<aside className="hidden lg:flex flex-col w-72 border-l border-white/5 bg-black/60">
<div className="px-4 py-3 border-b border-white/5">
<p className="text-sm font-semibold tracking-tight">Session insights</p>
<p className="text-[11px] text-neutral-500 mt-0.5">How today compares to your usual workflow</p>
</div>
<div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">

<div className="rounded-lg border border-white/10 bg-black/60 px-3 py-3 hover:border-violet-500/50 transition-all duration-300 cursor-pointer">
<p className="text-[11px] uppercase tracking-wide text-neutral-500 mb-1">Focus time</p>
<p className="text-xl font-semibold tracking-tight">2h 14m</p>
<p className="text-[11px] text-neutral-500 mt-0.5">You're in the top 20% of creators today.</p>
</div>

<div className="space-y-2">
<p className="text-[11px] uppercase tracking-wide text-neutral-500">Recent activity</p>
<div className="space-y-1.5">
<div className="flex items-start gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<div>
<p className="text-xs text-neutral-200">Generated 6 mobile screens for "Bankify"</p>
<p className="text-[11px] text-neutral-500">2 mins ago · 18 credits</p>
</div>
</div>
<div className="flex items-start gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400"></span>
<div>
<p className="text-xs text-neutral-200">Updated prompt preset "Product UI · Soft"</p>
<p className="text-[11px] text-neutral-500">23 mins ago</p>
</div>
</div>
<div className="flex items-start gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-500"></span>
<div>
<p className="text-xs text-neutral-200">Imported reference board "DesignForge hero"</p>
<p className="text-[11px] text-neutral-500">1h 04m ago</p>
</div>
</div>
</div>
</div>

<div>
<p className="text-[11px] uppercase tracking-wide text-neutral-500 mb-2">Shortcuts</p>
<div className="space-y-1.5">
<button className="w-full flex items-center justify-between rounded-md px-3 py-1.5 text-[11px] text-neutral-300 border border-white/10 bg-black/60 hover:bg-white/5 transition-all duration-300">
<span>Open command palette</span>
<span className="text-[10px] text-neutral-500">⌘ K</span>
</button>
<button className="w-full flex items-center justify-between rounded-md px-3 py-1.5 text-[11px] text-neutral-300 border border-white/10 bg-black/60 hover:bg-white/5 transition-all duration-300">
<span>Toggle reference grid</span>
<span className="text-[10px] text-neutral-500">G</span>
</button>
<button className="w-full flex items-center justify-between rounded-md px-3 py-1.5 text-[11px] text-neutral-300 border border-white/10 bg-black/60 hover:bg-white/5 transition-all duration-300">
<span>Switch theme</span>
<span className="text-[10px] text-neutral-500">T</span>
</button>
</div>
</div>
</div>
</aside>
</div>
</div>
</div>
<section className="bg-black py-20">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-5xl font-bold tracking-tight mb-4 fade-in-up">Powerful Creative Tools</h2>
<p className="text-xl text-slate-400 fade-in-up delay-100">Everything you need to bring your vision to life</p>
</div>
<div className="mx-auto max-w-6xl lg:max-w-7xl px-4">
<div className="grid gap-10 lg:grid-cols-2">

<div className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl fade-in-left hover:border-white/10 transition-all duration-500 hover:scale-[1.02]">

<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.32),transparent_60%)]">
</div>

<div className="sm:h-[360px] lg:h-[420px] h-[320px] relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))'}}>
<div className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f9e5019c-5dfa-4d86-9a59-c29b6c5b66d2_1600w.jpg)] bg-cover rounded-[2.5rem] absolute top-0 right-0 bottom-0 left-0 group-hover:scale-105 transition-transform duration-500">
</div>

<div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
</div>
</div>

<div className="absolute inset-x-4 sm:inset-x-6 bottom-4 sm:bottom-6 z-10">
<div className="max-w-xl mx-auto">
<div className="group/card flex overflow-hidden sm:px-8 sm:py-6 bg-black/40 border-white/10 border rounded-3xl px-6 py-5 relative backdrop-blur-xl gap-x-5 gap-y-5 items-center justify-between hover:bg-black/60 transition-all duration-300" id="project-card-one">

<div className="group-hover/card:opacity-100 transition-opacity duration-500 opacity-0 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="relative z-10 flex flex-col gap-3">
<div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 hover:bg-white/10 transition-colors cursor-pointer">
<span className="text-xs text-slate-300">Published Android App</span>
</div>
<div className="">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-1">
                      Bankify
                    </h3>
<p className="text-sm text-slate-400">
                      The simplest way to track your spending and keep every transaction in one place.
                    </p>
</div>
</div>
<div className="relative z-10 flex items-center justify-center">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover/card:scale-110 transition-transform duration-300">

<svg className="h-5 w-5 text-slate-100" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="2" width="10" x="7" y="2"></rect>
<circle cx="12" cy="18" r="1"></circle>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl fade-in-right hover:border-white/10 transition-all duration-500 hover:scale-[1.02]">

<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.4),transparent_60%)]">
</div>

<div className="relative h-[260px] sm:h-[300px] lg:h-[340px] rounded-[2.5rem] overflow-hidden">
<div className="grid grid-cols-3 grid-rows-2 h-full">
<div className="col-span-1 row-span-2 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&amp;fit=crop&amp;w=700&amp;q=80')] bg-cover bg-center hover:scale-110 transition-transform duration-500">
</div>
<div className="col-span-2 row-span-1 bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0b28110e-49d0-45d6-814e-65757d951541_1600w.webp)] bg-cover hover:scale-110 transition-transform duration-500">
</div>
<div className="col-span-1 row-span-1 bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7673e8dd-9bec-4141-a633-6743d6877baa_800w.webp)] bg-cover hover:scale-110 transition-transform duration-500">
</div>
<div className="col-span-1 row-span-1 bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&amp;fit=crop&amp;w=700&amp;q=80')] bg-cover bg-center hover:scale-110 transition-transform duration-500">
</div>
</div>

<div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 via-black/40 to-transparent">
</div>
<div className="absolute top-4 left-4 flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-black/70 backdrop-blur border border-white/20 flex items-center justify-center hover:scale-110 transition-transform duration-300">
<span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
</div>
</div>
<div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-black/70 backdrop-blur flex items-center justify-center border border-white/20 hover:scale-110 transition-transform duration-300 cursor-pointer">
<div className="space-y-0.5">
<span className="block h-0.5 w-3 bg-white rounded-full"></span>
<span className="block h-0.5 w-3 bg-white/70 rounded-full"></span>
<span className="block h-0.5 w-3 bg-white/50 rounded-full"></span>
</div>
</div>
</div>

<div className="absolute inset-x-4 sm:inset-x-6 bottom-4 sm:bottom-6 z-10">
<div className="max-w-xl mx-auto">
<div className="group/card relative flex items-center justify-between gap-5 overflow-hidden rounded-3xl border border-white/10 bg-black/75 px-6 py-5 sm:px-8 sm:py-6 backdrop-blur-xl hover:bg-black/60 transition-all duration-300" id="project-card-two">

<div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.55),transparent_55%)]">
</div>
<div className="relative z-10 flex flex-col gap-3">
<div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 hover:bg-white/10 transition-colors cursor-pointer">
<span className="text-xs text-slate-300">Framer Website Template</span>
</div>
<div className="">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-1">
                      Lux
                    </h3>
<p className="text-sm text-slate-400">
                      An immersive photography template that lets your work fill the screen and stay in focus.
                    </p>
</div>
</div>
<div className="relative z-10 flex items-center justify-center">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover/card:scale-110 transition-transform duration-300">

<svg className="h-5 w-5 text-slate-100" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="9"></circle>
<path d="M3 12h18"></path>
<path d="M12 3a14 14 0 0 1 4 9 14 14 0 0 1-4 9 14 14 0 0 1-4-9 14 14 0 0 1 4-9z"></path>
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
</section>

<section className="py-32 relative overflow-hidden" id="workflow">
<div className="bg-gradient-to-b from-violet-500/5 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-5xl font-bold tracking-tight mb-4 fade-in-up">Your Creative Journey</h2>
<p className="text-xl text-slate-400 fade-in-up delay-100">From concept to completion in three simple steps</p>
</div>
<div className="relative">

<div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 transform -translate-y-1/2"></div>
<div className="grid lg:grid-cols-3 gap-12 relative">

<div className="relative fade-in-up delay-100">
<div className="bg-black border border-white/10 rounded-3xl p-8 hover:border-violet-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
<div className="flex text-2xl font-bold bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/0 to-white/10 w-16 h-16 rounded-2xl mr-auto mb-6 ml-auto items-center justify-center hover:scale-110 transition-transform duration-300">1</div>
<h3 className="text-2xl font-semibold mb-4 text-center">Describe Your Vision</h3>
<p className="text-slate-400 text-center mb-6">Simply type what you want to create. Our AI understands natural language and creative intent.</p>
<div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-edit-3 w-4 h-4 text-violet-400" data-lucide="edit-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 21h8"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg>
<span className="text-sm text-slate-400">Prompt</span>
</div>
<p className="text-sm">"Modern minimalist workspace with natural lighting..."</p>
</div>
</div>
</div>

<div className="relative fade-in-up delay-200">
<div className="bg-black border border-white/10 rounded-3xl p-8 hover:border-violet-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
<div className="flex text-2xl font-bold bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/0 to-white/10 w-16 h-16 rounded-2xl mr-auto mb-6 ml-auto items-center justify-center hover:scale-110 transition-transform duration-300">2</div>
<h3 className="text-2xl font-semibold mb-4 text-center">AI Generates Options</h3>
<p className="text-slate-400 text-center mb-6">Watch as multiple design variations materialize instantly, each tailored to your specifications.</p>
<div className="grid grid-cols-2 gap-2">
<div className="aspect-square shimmer bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/88243f91-226d-49c3-b535-10406c562a54_320w.webp)] bg-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"></div>
<div className="aspect-square shimmer bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c10fd820-4859-4f55-9798-672ade46e764_320w.webp)] bg-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer" style={{animationDelay: '0.5s'}}></div>
<div className="aspect-square shimmer bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3b02a4b5-6482-43c9-bc48-44c3acea801b_320w.webp)] bg-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer" style={{animationDelay: '1s'}}></div>
<div className="aspect-square shimmer bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/22fc64f2-1e57-406c-bc42-d4cd1cbbe6bc_320w.webp)] bg-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer" style={{animationDelay: '1.5s'}}></div>
</div>
</div>
</div>

<div className="relative fade-in-up delay-300">
<div className="bg-black border border-white/10 rounded-3xl p-8 hover:border-violet-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
<div className="flex text-2xl font-bold bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/0 to-white/10 w-16 h-16 rounded-2xl mr-auto mb-6 ml-auto items-center justify-center hover:scale-110 transition-transform duration-300">
              3
            </div>
<h3 className="text-2xl font-semibold mb-4 text-center">Refine &amp; Export</h3>
<p className="text-slate-400 text-center mb-6">Polish your design with advanced editing tools, then export in any format you need.</p>
<div className="space-y-2">
<div className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer">
<span className="text-sm">design-final.png</span>
<svg className="lucide lucide-download w-4 h-4 text-violet-400" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
<div className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer">
<span className="text-sm">design-4k.jpg</span>
<svg className="lucide lucide-download w-4 h-4 text-violet-400" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="showcase">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-20">
<h2 className="text-5xl font-bold tracking-tight mb-4 fade-in-up">Created with DesignForge</h2>
<p className="text-xl text-slate-400 fade-in-up delay-100">Explore incredible designs from our community</p>
</div>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-x-6 gap-y-6">

<div className="group relative overflow-hidden rounded-3xl bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f080eef4-94c2-48e4-afd7-d2bb7670db6d_800w.webp)] bg-cover bg-center row-span-2 scale-in delay-100 hover:scale-105 transition-all duration-500 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80 group-hover:to-black/90 transition-all duration-300"></div>

<div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
<button className="rounded-full bg-white/90 px-4 py-1 text-xs font-medium text-slate-900 shadow hover:bg-white transition-colors">
            Collect
          </button>
</div>

<div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-4 pt-16 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-sm font-medium text-white">Calm modern workspace</h3>
<p className="text-xs text-slate-300">Clean and focused environment</p>
</div>

<div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
<button className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:scale-110 transition-transform duration-300">
            View Details
          </button>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/603df3a1-12d4-4b90-841e-f37507a6d58e_800w.webp)] bg-cover bg-center row-span-2 scale-in delay-200 hover:scale-105 transition-all duration-500 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80 group-hover:to-black/90 transition-all duration-300"></div>
<div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-4 pt-16 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-sm font-medium text-white">Zen workspace aesthetic</h3>
<p className="text-xs text-slate-300">Minimalist productivity space</p>
</div>
<div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
<button className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:scale-110 transition-transform duration-300">
            View Details
          </button>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cbd18b88-d764-4a5e-9e52-cea4c0b850c3_800w.webp)] bg-cover bg-center row-span-3 scale-in delay-300 hover:scale-105 transition-all duration-500 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80 group-hover:to-black/90 transition-all duration-300"></div>
<div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-4 pt-16 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-sm font-medium text-white">Forest Path</h3>
<p className="text-xs text-slate-300">Nature wanderlust</p>
</div>
<div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
<button className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:scale-110 transition-transform duration-300">
            View Details
          </button>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-[url('https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&amp;fit=crop&amp;w=900&amp;q=80')] bg-cover bg-center row-span-3 scale-in delay-400 hover:scale-105 transition-all duration-500 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80 group-hover:to-black/90 transition-all duration-300"></div>
<div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-4 pt-16 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-sm font-medium text-white">Tech Innovation</h3>
<p className="text-xs text-slate-300">Future technology</p>
</div>
<div className="flex transition-opacity duration-500 group-hover:opacity-100 bg-black/40 opacity-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c2c5bdff-18a1-4599-8ab7-ba7d3f881760_800w.webp)] bg-cover bg-center z-20 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<button className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:scale-110 transition-transform duration-300">
            View Details
          </button>
</div>
</div>

<div className="group overflow-hidden bg-center row-span-2 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/34221b2a-9b4f-41ed-85c2-501075a46999_800w.webp)] bg-cover z-20 rounded-3xl relative scale-in delay-500 hover:scale-105 transition-all duration-500 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80 group-hover:to-black/90 transition-all duration-300"></div>
<div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-4 pt-16 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-sm font-medium text-white">Minimal M monogram</h3>
<p className="text-xs text-slate-300">Brand identity concept</p>
</div>
<div className="z-20 flex transition-opacity duration-500 group-hover:opacity-100 bg-black/40 opacity-0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<button className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:scale-110 transition-transform duration-300">
            View Details
          </button>
</div>
</div>

<div className="group overflow-hidden bg-center row-span-2 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a2df0305-406b-4c70-bd26-98c6e9b0205d_800w.webp)] bg-cover rounded-3xl relative scale-in delay-600 hover:scale-105 transition-all duration-500 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80 group-hover:to-black/90 transition-all duration-300"></div>
<div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-4 pt-16 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-sm font-medium text-white">Ocean Views</h3>
<p className="text-xs text-slate-300">Travel destinations</p>
</div>
<div className="z-20 flex transition-opacity duration-500 group-hover:opacity-100 bg-black/40 opacity-0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<button className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:scale-110 transition-transform duration-300">
            View Details
          </button>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-[url('https://images.unsplash.com/photo-1517840933442-d2dfd588a22a?auto=format&amp;fit=crop&amp;w=900&amp;q=80')] bg-cover bg-center row-span-2 scale-in delay-700 hover:scale-105 transition-all duration-500 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80 group-hover:to-black/90 transition-all duration-300"></div>
<div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-4 pt-16 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-sm font-medium text-white">Fashion Style</h3>
<p className="text-xs text-slate-300">Style inspiration</p>
</div>
<div className="z-20 flex transition-opacity duration-500 group-hover:opacity-100 bg-black/40 opacity-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fe47ac73-e611-4805-a7a2-e405f02a0c34_800w.webp)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<button className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:scale-110 transition-transform duration-300">
            View Details
          </button>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-[url('https://images.unsplash.com/photo-1526481280695-3c687fd543c0?auto=format&amp;fit=crop&amp;w=900&amp;q=80')] bg-cover bg-center row-span-2 scale-in delay-800 hover:scale-105 transition-all duration-500 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80 group-hover:to-black/90 transition-all duration-300"></div>
<div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-4 pt-16 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-sm font-medium text-white">Brand mark Velora</h3>
<p className="text-xs text-slate-300">Logo exploration</p>
</div>
<div className="z-20 flex transition-opacity duration-500 group-hover:opacity-100 bg-black/40 opacity-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dec1be1e-112e-4fb6-8ac5-f3476f1e4613_800w.webp)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<button className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:scale-110 transition-transform duration-300">
            View Details
          </button>
</div>
</div>
</div>
</div>
</section>

<section className="pt-32 pb-32 relative" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-5xl font-bold tracking-tight mb-4 fade-in-up">Simple, Transparent Pricing</h2>
<p className="text-xl text-slate-400 fade-in-up delay-100">Choose the plan that fits your creative needs</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white/5 border border-white/10 rounded-3xl p-8 fade-in-up delay-100 hover:border-white/20 hover:scale-105 transition-all duration-500 hover:-translate-y-2">
<h3 className="text-2xl font-semibold mb-2">Starter</h3>
<div className="text-4xl font-bold mb-6">Free</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-5 h-5 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-300">50 generations/month</span>
</li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-5 h-5 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-300">Standard quality</span>
</li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-5 h-5 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-300">Community support</span>
</li>
</ul>
<button className="w-full py-3 bg-white/10 border border-white/20 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105">
          Get Started
        </button>
</div>

<div className="bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border-2 border-violet-500 rounded-3xl p-8 relative fade-in-up delay-200 hover:scale-105 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/50">
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full text-sm font-medium">
          Most Popular
        </div>
<h3 className="text-2xl font-semibold mb-2">Pro</h3>
<div className="text-4xl font-bold mb-6">$29<span className="text-lg text-slate-400">/mo</span></div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-5 h-5 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-300">Unlimited generations</span>
</li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-5 h-5 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-300">High quality output</span>
</li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-5 h-5 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-300">Priority support</span>
</li>
</ul>
<button className="w-full py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl font-medium hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105">
          Start Free Trial
        </button>
</div>

<div className="bg-white/5 border border-white/10 rounded-3xl p-8 fade-in-up delay-300 hover:border-white/20 hover:scale-105 transition-all duration-500 hover:-translate-y-2">
<h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
<div className="text-4xl font-bold mb-6">Custom</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-5 h-5 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-300">Everything in Pro</span>
</li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-5 h-5 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-300">Dedicated support</span>
</li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-5 h-5 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-300">Custom training</span>
</li>
</ul>
<button className="w-full py-3 bg-white/10 border border-white/20 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105">
          Contact Sales
        </button>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/69e27438-5c70-4909-a25c-efcf041fc04c_3840w.webp)] bg-cover absolute top-0 right-0 bottom-0 left-0" style={{maskImage: 'linear-gradient(180deg, transparent, black 45%, black 60%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 45%, black 60%, transparent)'}}></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 blur-in">Ready to Transform Your Creative Process?</h2>
<p className="text-xl text-slate-400 mb-12 blur-in delay-100">Join thousands of designers creating amazing work with AI</p>
<button className="px-12 py-4 bg-white text-black rounded-xl text-lg font-medium hover:shadow-lg hover:shadow-white/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 blur-in delay-200">
      Start Creating Today
    </button>
</div>
</section>

<footer className="border-t border-white/10 py-12">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="bg-center text-xl font-semibold tracking-tight bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6506f57d-d763-4f65-be30-e4db135775b2_1600w.png)] bg-cover pt-10 pr-12 pb-10 pl-12"></span>
</div>
<div className="flex items-center gap-8">
<a className="text-sm text-slate-400 hover:text-white transition-all duration-300 hover:scale-110" href="#">Privacy</a>
<a className="text-sm text-slate-400 hover:text-white transition-all duration-300 hover:scale-110" href="#">Terms</a>
<a className="text-sm text-slate-400 hover:text-white transition-all duration-300 hover:scale-110" href="#">Contact</a>
</div>
</div>
<div className="text-center mt-8 text-sm text-slate-500">
      © 2024 DesignForge AI. All rights reserved.
    </div>
</div>
</footer>


    </>
  );
}
