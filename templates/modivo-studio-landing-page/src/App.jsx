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


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


      // Mobile menu toggle
      const mobileButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileButton && mobileMenu) {
        mobileButton.addEventListener('click', () => {
          const isOpen = mobileMenu.classList.contains('hidden') === false;
          mobileMenu.classList.toggle('hidden');
          mobileButton.setAttribute('aria-expanded', String(!isOpen));
        });
      }

      // Dynamic year
      const yearEl =
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bmaMERjX2VZDtPrh4Zwx"></div></div>
<div className="relative isolate overflow-hidden">

<div className="pointer-events-none absolute inset-0 opacity-60">
<div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-900"></div>
<div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tr from-sky-400/15 via-violet-500/10 to-fuchsia-500/20 blur-3xl"></div>
<div className="absolute bottom-[-18rem] right-[-6rem] h-[28rem] w-[28rem] rounded-full bg-gradient-to-tl from-sky-400/15 via-emerald-400/10 to-transparent blur-3xl"></div>
</div>

<section className="isolate min-h-screen w-full relative">

<div className="pointer-events-none absolute inset-0 ring-1 ring-white/5"></div>

<header className="z-20 relative">
<div className="flex sm:px-6 lg:px-8 sm:pt-6 max-w-6xl mr-auto ml-auto pt-4 pr-4 pl-4 items-center justify-between">

<a className="flex items-center gap-2" href="#">
<div className="h-8 w-8 rounded-2xl bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-300 shadow-sm flex items-center justify-center">
<span className="text-xs font-semibold tracking-tight text-neutral-900">M</span>
</div>
<span className="text-base sm:text-lg font-medium tracking-tight text-neutral-50">Modivo</span>
</a>

<nav className="hidden md:flex items-center gap-4">
<div className="flex items-center gap-1 rounded-full bg-white/5 px-1 py-1 ring-1 ring-white/10 backdrop-blur">
<a className="px-3 py-1.5 text-sm font-medium text-neutral-100 hover:text-white" href="#services">
                  Services
                </a>
<a className="px-3 py-1.5 text-sm font-medium text-neutral-200/90 hover:text-white" href="#process">
                  Process
                </a>
<a className="px-3 py-1.5 text-sm font-medium text-neutral-200/90 hover:text-white" href="#work">
                  Work
                </a>
<a className="px-3 py-1.5 text-sm font-medium text-neutral-200/90 hover:text-white" href="#testimonials">
                  Clients
                </a>
<a className="hover:text-white text-sm font-medium text-neutral-200/90 pt-1.5 pr-3 pb-1.5 pl-3" href="#contact">
                  Contact
                </a>
<button className="ml-1 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-neutral-900 hover:bg-white/90 transition">
                  Book intro call
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</div>
</nav>

<button aria-expanded="false" aria-label="Toggle menu" className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 backdrop-blur text-white" id="mobile-menu-button">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16"></path>
<path d="M4 12h16"></path>
<path d="M4 18h16"></path>
</svg>
</button>
</div>

<div className="md:hidden max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 hidden" id="mobile-menu">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl p-3 space-y-1">
<a className="block rounded-xl px-3 py-2 text-sm font-medium text-neutral-50 hover:bg-white/5" href="#services">
                Services
              </a>
<a className="block rounded-xl px-3 py-2 text-sm font-medium text-neutral-100 hover:bg-white/5" href="#process">
                Process
              </a>
<a className="block rounded-xl px-3 py-2 text-sm font-medium text-neutral-100 hover:bg-white/5" href="#work">
                Work
              </a>
<a className="block rounded-xl px-3 py-2 text-sm font-medium text-neutral-100 hover:bg-white/5" href="#testimonials">
                Clients
              </a>
<a className="block rounded-xl px-3 py-2 text-sm font-medium text-neutral-100 hover:bg-white/5" href="#contact">
                Contact
              </a>
<button className="w-full mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 hover:bg-white/90 transition">
                Book intro call
              </button>
</div>
</div>
</header>

<div className="z-10 relative">
<div className="sm:pt-28 lg:pt-32 sm:px-6 lg:px-8 max-w-6xl mr-auto ml-auto pt-20 pr-4 pb-20 pl-4">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

<div className="space-y-7">
<div className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-1 ring-1 ring-white/15 backdrop-blur">
<span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs font-medium px-2 py-0.5">
                    New
                  </span>
<span className="sm:text-sm text-xs font-medium text-neutral-100 ml-2">
                    Product teams choose Modivo for pixel-perfect software.
                  </span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-normal text-neutral-50">
                  Software that feels
                  <span className="block bg-gradient-to-r from-neutral-50 via-sky-200 to-neutral-50 bg-clip-text text-transparent">
                    impossibly polished.
                  </span>
</h1>
<p className="text-base sm:text-lg text-neutral-200/90 max-w-xl">
                  Modivo is a software studio for teams who care about detail.
                  We design and build web and mobile experiences that feel
                  effortless, fast, and distinctly yours.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 pt-2">

<div className="relative z-10 rounded-full bg-transparent pointer-events-none" style={{animation: 'fadeIn 1s ease-out 0.3s both'}}>
<button className="glass-button all-unset cursor-pointer relative rounded-full pointer-events-auto z-30 outline-none focus:outline-none" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<span className="button-text relative block select-none font-medium tracking-tight px-7 py-3.5 text-neutral-900 text-sm sm:text-base">
                        Schedule a strategy call
                      </span>
<div className="button-shine"></div>
</button>
</div>

<button className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/0 px-4 sm:px-5 py-2.5 text-sm font-medium text-neutral-50 hover:bg-white/5 transition">
                    View case studies
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>

<div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4">
<div className="flex -space-x-2">
<div className="h-8 w-8 rounded-full border border-neutral-900 overflow-hidden">
<img alt="Client avatar" className="h-full w-full object-cover" src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" style={{}}/>
</div>
<div className="h-8 w-8 rounded-full border border-neutral-900 overflow-hidden">
<img alt="Client avatar" className="h-full w-full object-cover" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"/>
</div>
<div className="h-8 w-8 rounded-full border border-neutral-900 overflow-hidden">
<img 80="" alt="Client avatar" bg-neutral-800="" border="" border-neutral-900="" className="h-full w-full object-cover &lt;/div&gt; &lt;div class=" flex="" h-8="" items-center="" justify-center="" rounded-full="" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" text-neutral-200"="" text-xs="" w-8=""/>
                      +18
                    </div>
</div>
<p className="text-sm sm:text-base text-neutral-300/90">
                    Trusted by fast-growing teams shipping to millions of users.
                  </p>
</div>
</div>

<div className="relative">
<div className="relative mx-auto max-w-md lg:max-w-none">

<div className="-inset-10 bg-gradient-to-tr from-white/5 via-white/0 to-white/10 rounded-[2.5rem] absolute blur-3xl"></div>
<div className="grid gap-4 sm:gap-6 relative gap-x-4 gap-y-4">
<div className="sm:p-5 flex flex-col gap-4 bg-white/5 ring-white/10 ring-1 rounded-3xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-xl gap-x-4 gap-y-4">
<div className="flex items-center justify-between">
<span className="text-xs sm:text-sm font-medium text-neutral-200">Live product dashboards</span>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-300/30 px-2 py-0.5 text-[0.7rem] sm:text-xs font-medium">
                          24/7 uptime
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
</span>
</div>
<div className="grid grid-cols-2 gap-3 sm:gap-4">
<div className="rounded-2xl bg-neutral-900/80 ring-1 ring-white/5 p-3">
<p className="text-[0.7rem] sm:text-xs text-neutral-400 mb-1.5">
                            Weekly releases
                          </p>
<p className="text-lg sm:text-xl tracking-tight text-neutral-50">
                            4.8× faster
                          </p>
<p className="text-[0.7rem] sm:text-xs text-neutral-400 mt-2">
                            Deployment velocity across client portfolio.
                          </p>
</div>
<div className="rounded-2xl bg-neutral-900/80 ring-1 ring-white/5 p-3 flex flex-col justify-between">
<div className="">
<p className="text-[0.7rem] sm:text-xs text-neutral-400 mb-1.5">
                              CSAT
                            </p>
<p className="text-lg sm:text-xl tracking-tight text-neutral-50">
                              97%
                            </p>
</div>
<div className="mt-2 h-1.5 w-full rounded-full bg-neutral-800 overflow-hidden">
<div className="h-full w-[92%] bg-gradient-to-r from-sky-400 via-emerald-400 to-teal-300"></div>
</div>
</div>
</div>
</div>
<div className="flex gap-3 sm:gap-4 gap-x-3 gap-y-3">
<div className="flex-1 rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl p-3 sm:p-4">
<div className="flex items-center justify-between mb-2">
<p className="text-[0.7rem] sm:text-xs text-neutral-300">Stack</p>
<span className="inline-flex items-center gap-1 text-[0.7rem] sm:text-xs text-neutral-400">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                            Tailored per project
                          </span>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="text-[0.7rem] sm:text-xs px-2 py-0.5 rounded-full bg-neutral-900/80 ring-1 ring-white/5 text-neutral-200">
                            TypeScript
                          </span>
<span className="text-[0.7rem] sm:text-xs px-2 py-0.5 rounded-full bg-neutral-900/80 ring-1 ring-white/5 text-neutral-200">
                            React
                          </span>
<span className="text-[0.7rem] sm:text-xs px-2 py-0.5 rounded-full bg-neutral-900/80 ring-1 ring-white/5 text-neutral-200">
                            Swift
                          </span>
<span className="text-[0.7rem] sm:text-xs px-2 py-0.5 rounded-full bg-neutral-900/80 ring-1 ring-white/5 text-neutral-200">
                            Node
                          </span>
</div>
</div>
<div className="hidden sm:flex flex-col justify-between rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl p-3 w-28">
<p className="text-[0.7rem] text-neutral-300 mb-2">
                          Time to first prototype
                        </p>
<p className="text-lg tracking-tight text-neutral-50">
                          14 days
                        </p>
<p className="mt-1 text-[0.7rem] text-neutral-400">
                          From kickoff to interactive build.
                        </p>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
</section>

<section className="z-10 bg-gradient-to-b from-neutral-950/80 to-neutral-950/95 border-white/5 border-t relative" id="services">
<div className="sm:px-6 lg:px-8 sm:py-18 max-w-6xl mr-auto ml-auto pt-14 pr-4 pb-14 pl-4">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 gap-x-6 gap-y-6">
<div className="">
<p className="text-[0.7rem] sm:text-xs uppercase tracking-[0.16em] text-neutral-400 mb-2">
                Services
              </p>
<h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight font-normal text-neutral-50">
                From idea to launch — all under one roof.
              </h2>
</div>
<p className="sm:text-base text-sm text-neutral-300 max-w-md">
              A focused team of designers and engineers, working as an extension
              of your product org. We handle the craft so you can focus on vision.
            </p>
</div>
<div className="grid md:grid-cols-3 gap-5 sm:gap-6">

<button className="group text-left rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl p-5 sm:p-6 flex flex-col gap-4 transition transform duration-200 hover:-translate-y-1 hover:bg-white/7 hover:ring-sky-400/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/80">
<div className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-neutral-900/90 ring-1 ring-white/10">
<span className="text-xs text-neutral-200">01</span>
</div>
<h3 className="text-lg sm:text-xl tracking-tight text-neutral-50">
                Product design
              </h3>
<p className="text-sm sm:text-base text-neutral-300">
                UX research, interaction design, visual systems, and prototyping
                that feel native to your brand and platform.
              </p>

<div className="relative mt-1 h-32 sm:h-40 w-full">
<div className="absolute inset-0 flex items-center justify-center perspective-normal">
<div className="relative w-full max-w-sm mx-auto transform-style-preserve-3d -rotate-x-10 rotate-y-8">
<div className="relative rounded-3xl bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-300 shadow-2xl overflow-hidden border border-white/20">

<div className="absolute inset-0 rounded-[1.3rem] m-1 border border-white/60/0 pointer-events-none" style={{border: '1px solid rgba(255,255,255,0.6)', borderRadius: '1.3rem'}}></div>

<div className="relative m-[0.38rem] rounded-[1.2rem] bg-neutral-950 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-sky-400/15 via-neutral-900 to-emerald-400/15"></div>
<div className="relative h-24 sm:h-28 p-3 flex flex-col justify-between">
<div className="flex items-center justify-between">
<div className="h-1.5 w-10 rounded-full bg-white/20"></div>
<div className="h-1.5 w-6 rounded-full bg-white/10"></div>
</div>
<div className="space-y-1.5">
<div className="h-1.5 w-24 rounded-full bg-white/60"></div>
<div className="flex items-end gap-1">
<div className="h-7 flex-1 rounded-xl bg-gradient-to-t from-sky-400/60 to-sky-400/10"></div>
<div className="h-5 flex-1 rounded-xl bg-gradient-to-t from-emerald-400/70 to-emerald-400/10"></div>
<div className="h-9 flex-1 rounded-xl bg-gradient-to-t from-sky-400/80 to-sky-400/10"></div>
<div className="h-6 flex-1 rounded-xl bg-gradient-to-t from-emerald-400/60 to-emerald-400/10"></div>
</div>
</div>
<div className="flex justify-between items-center pt-1">
<div className="h-1 w-10 rounded-full bg-white/20"></div>
<div className="h-1 w-10 rounded-full bg-white/20"></div>
</div>
</div>
</div>
</div>

<div className="hidden sm:block absolute -right-6 -bottom-2 w-16 h-10 rounded-2xl bg-neutral-950/90 border border-white/10 shadow-2xl backdrop-blur-xl transform rotate-y-6 -rotate-x-6">
<div className="h-full w-full flex flex-col justify-center px-2">
<div className="h-1 w-10 rounded-full bg-sky-400/70 mb-1"></div>
<div className="h-1 w-6 rounded-full bg-white/20"></div>
</div>
</div>
<div className="hidden sm:block absolute -left-6 -top-3 w-14 h-9 rounded-2xl bg-neutral-950/90 border border-white/10 shadow-2xl backdrop-blur-xl transform -rotate-y-6 -rotate-x-4">
<div className="h-full w-full flex items-center justify-center gap-1 px-2">
<span className="h-1 w-1 rounded-full bg-sky-400"></span>
<span className="h-1 w-6 rounded-full bg-white/40"></span>
</div>
</div>
</div>
</div>
</div>
<ul className="mt-1 space-y-1.5 text-sm text-neutral-300/90">
<li className="flex items-center gap-2">
<span className="h-1 w-1 rounded-full bg-neutral-400 group-hover:bg-sky-400"></span>
                  User flows &amp; prototypes
                </li>
<li className="flex items-center gap-2">
<span className="h-1 w-1 rounded-full bg-neutral-400 group-hover:bg-sky-400"></span>
                  Design systems
                </li>
</ul>
<span className="mt-3 inline-flex items-center gap-2 text-xs sm:text-sm text-neutral-300 group-hover:text-sky-200">
                Explore design sprints
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>

<button className="group text-left rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl p-5 sm:p-6 flex flex-col gap-4 transition transform duration-200 hover:-translate-y-1 hover:bg-white/7 hover:ring-sky-400/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/80">
<div className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-neutral-900/90 ring-1 ring-white/10">
<span className="text-xs text-neutral-200">02</span>
</div>
<h3 className="text-lg sm:text-xl tracking-tight text-neutral-50">
                Web &amp; mobile engineering
              </h3>
<p className="text-sm sm:text-base text-neutral-300">
                Robust frontend and backend builds with performance and
                maintainability engineered in from day one.
              </p>

<div className="relative mt-1 h-32 sm:h-40 w-full">
<div className="absolute inset-0 flex items-center justify-center perspective-normal">
<div className="relative w-full max-w-sm mx-auto transform-style-preserve-3d -rotate-x-10 rotate-y-10">

<div className="relative rounded-3xl bg-neutral-950 shadow-2xl overflow-hidden border border-white/10">
<div className="flex items-center justify-between px-3 pt-2 pb-1 border-b border-white/10">
<div className="flex items-center gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-red-400/80"></span>
<span className="h-1.5 w-1.5 rounded-full bg-amber-300/80"></span>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80"></span>
</div>
<div className="h-1.5 w-12 rounded-full bg-white/8"></div>
</div>
<div className="relative h-24 sm:h-28 px-3.5 py-2.5 text-[0.65rem] sm:text-[0.68rem] leading-relaxed font-geist-mono">
<div className="flex items-center gap-1 mb-1 text-neutral-500">
<svg className="h-3.5 w-3.5 text-sky-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 4 12 20 4 4z"></path>
</svg>
<span className="h-1.5 w-16 rounded-full bg-white/10"></span>
</div>
<div className="space-y-0.5">
<div className=""><span className="text-sky-400">const</span> <span className="text-emerald-300">AppLayout</span> <span className="text-neutral-400">=</span> <span className="text-sky-400">async</span> <span className="text-neutral-50">()</span> <span className="text-neutral-400">=&gt;</span> <span className="text-neutral-50">{</span></div>
<div className="pl-3"><span className="text-sky-400">const</span> <span className="text-neutral-50">session</span> <span className="text-neutral-400">= await</span> <span className="text-emerald-300">getSession</span><span className="text-neutral-50">()</span></div>
<div className="pl-3"><span className="text-sky-400">return</span> <span className="text-neutral-50">&lt;Shell user={session.user} /&gt;</span></div>
<div className=""><span className="text-neutral-50">}</span></div>
</div>
</div>
</div>

<div className="hidden sm:block absolute -right-6 -bottom-3 w-16 h-24 rounded-3xl bg-neutral-900 border border-white/10 shadow-2xl backdrop-blur-xl transform rotate-y-8 -rotate-x-4">
<div className="relative h-full w-full rounded-[1.3rem] overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
<div className="absolute inset-x-4 top-2 h-1 rounded-full bg-neutral-800"></div>
<div className="absolute inset-0 pt-5 pb-3 px-2.5 flex flex-col justify-between">
<div className="h-1.5 w-12 rounded-full bg-white/40 mb-2"></div>
<div className="space-y-1.5">
<div className="h-2 w-10 rounded-full bg-sky-400/80"></div>
<div className="h-2 w-8 rounded-full bg-emerald-400/60"></div>
<div className="flex gap-1">
<div className="flex-1 h-4 rounded-xl bg-gradient-to-t from-sky-400/80 to-sky-400/10"></div>
<div className="flex-1 h-4 rounded-xl bg-gradient-to-t from-emerald-400/70 to-emerald-400/10"></div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden sm:block absolute -left-5 -top-2 h-8 w-16 rounded-2xl bg-neutral-900/90 border border-white/10 shadow-2xl backdrop-blur-xl flex items-center justify-center gap-1 text-[0.6rem] text-neutral-200 transform -rotate-y-6 -rotate-x-4">
<span className="h-1 w-1 rounded-full bg-emerald-400"></span>
<span className="">95ms TTFB</span>
</div>
</div>
</div>
</div>
<ul className="mt-1 space-y-1.5 text-sm text-neutral-300/90">
<li className="flex items-center gap-2">
<span className="h-1 w-1 rounded-full bg-neutral-400 group-hover:bg-sky-400"></span>
                  TypeScript, React, Next.js
                </li>
<li className="flex items-center gap-2">
<span className="h-1 w-1 rounded-full bg-neutral-400 group-hover:bg-sky-400"></span>
                  Native iOS &amp; Android
                </li>
</ul>
<span className="mt-3 inline-flex items-center gap-2 text-xs sm:text-sm text-neutral-300 group-hover:text-sky-200">
                View engineering standards
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>

<button className="group text-left rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl p-5 sm:p-6 flex flex-col gap-4 transition transform duration-200 hover:-translate-y-1 hover:bg-white/7 hover:ring-sky-400/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/80">
<div className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-neutral-900/90 ring-1 ring-white/10">
<span className="text-xs text-neutral-200">03</span>
</div>
<h3 className="text-lg sm:text-xl tracking-tight text-neutral-50">
                Ongoing product partnership
              </h3>
<p className="text-sm sm:text-base text-neutral-300">
                Dedicated squads that iterate, ship, and maintain as your
                roadmap evolves.
              </p>

<div className="relative mt-1 h-32 sm:h-40 w-full">
<div className="absolute inset-0 flex items-center justify-center perspective-normal">
<div className="relative w-full max-w-sm mx-auto transform-style-preserve-3d -rotate-x-8 rotate-y-6">

<div className="relative rounded-3xl bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-300 shadow-2xl overflow-hidden border border-white/20">
<div className="relative m-[0.38rem] rounded-[1.2rem] bg-neutral-950 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-sky-400/10 via-neutral-900 to-emerald-400/10"></div>
<div className="relative h-24 sm:h-28 p-3.5 flex flex-col justify-between">
<div className="flex items-center justify-between mb-1.5">
<div className="h-1.5 w-16 rounded-full bg-white/60"></div>
<div className="h-1.5 w-8 rounded-full bg-white/15"></div>
</div>

<div className="relative mt-1 mb-2">
<div className="h-0.5 w-full rounded-full bg-white/5"></div>
<div className="absolute -top-1 left-2 h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/40"></div>
<div className="absolute -top-1 left-1/2 h-2.5 w-2.5 rounded-full bg-sky-400 shadow-sm shadow-sky-400/40"></div>
<div className="absolute -top-1 right-3 h-2.5 w-2.5 rounded-full bg-emerald-400/70 shadow-sm shadow-emerald-400/30"></div>
</div>
<div className="grid grid-cols-3 gap-1.5 text-[0.6rem] text-neutral-300">
<div className="rounded-xl bg-white/5 px-2 py-1">
<div className="h-1 w-8 rounded-full bg-white/40 mb-1"></div>
<div className="h-1 w-6 rounded-full bg-white/15"></div>
</div>
<div className="rounded-xl bg-white/5 px-2 py-1">
<div className="h-1 w-8 rounded-full bg-white/40 mb-1"></div>
<div className="h-1 w-6 rounded-full bg-white/15"></div>
</div>
<div className="rounded-xl bg-white/5 px-2 py-1">
<div className="h-1 w-8 rounded-full bg-white/40 mb-1"></div>
<div className="h-1 w-6 rounded-full bg-white/15"></div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden sm:block absolute -right-5 -top-3 h-10 w-24 rounded-2xl bg-neutral-900/90 border border-white/10 shadow-2xl backdrop-blur-xl flex items-center justify-between px-2.5 text-[0.62rem] text-neutral-200 transform rotate-y-8 -rotate-x-4">
<div>
<div className="h-1 w-9 rounded-full bg-white/35 mb-1"></div>
<div className="flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Weekly</span>
</div>
</div>
<div className="flex flex-col items-end">
<span className="text-emerald-300 text-[0.7rem]">+32%</span>
<span className="h-1 w-6 rounded-full bg-white/15 mt-0.5"></span>
</div>
</div>

<div className="hidden sm:block absolute -left-6 -bottom-3 h-16 w-20 rounded-2xl bg-neutral-900/90 border border-white/10 shadow-2xl backdrop-blur-xl px-2.5 py-2 text-[0.6rem] text-neutral-200 transform -rotate-y-6 -rotate-x-4">
<div className="flex items-center gap-1 mb-1.5">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
<span className="h-1 w-10 rounded-full bg-white/30"></span>
</div>
<div className="space-y-1">
<div className="flex items-center gap-1">
<span className="h-1 w-1 rounded-full bg-emerald-400"></span>
<span className="h-1 w-10 rounded-full bg-white/15"></span>
</div>
<div className="flex items-center gap-1">
<span className="h-1 w-1 rounded-full bg-emerald-400/70"></span>
<span className="h-1 w-8 rounded-full bg-white/10"></span>
</div>
</div>
</div>
</div>
</div>
</div>
<ul className="mt-1 space-y-1.5 text-sm text-neutral-300/90">
<li className="flex items-center gap-2">
<span className="h-1 w-1 rounded-full bg-neutral-400 group-hover:bg-sky-400"></span>
                  Continuous delivery
                </li>
<li className="flex items-center gap-2">
<span className="h-1 w-1 rounded-full bg-neutral-400 group-hover:bg-sky-400"></span>
                  Design &amp; code reviews
                </li>
</ul>
<span className="mt-3 inline-flex items-center gap-2 text-xs sm:text-sm text-neutral-300 group-hover:text-sky-200">
                Learn about retainers
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>
</div>
</section>

<section className="relative z-10 border-t border-white/5 bg-gradient-to-b from-neutral-950/95 to-neutral-950" id="work">
<div className="sm:px-6 lg:px-8 sm:py-18 max-w-6xl mr-auto ml-auto pt-14 pr-4 pb-14 pl-4">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
<div className="">
<p className="text-[0.7rem] sm:text-xs uppercase tracking-[0.16em] text-neutral-400 mb-2">
                Featured work
              </p>
<h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight font-normal text-neutral-50">
                Launches that feel like inflection points.
              </h2>
</div>
<div className="flex items-center gap-3">
<p className="max-w-sm text-sm sm:text-base text-neutral-300">
                A snapshot of recent collaborations across SaaS, fintech, and
                developer tools — shipped from first workshop to production.
              </p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-5 sm:gap-6">

<article className="group relative overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl">
<div className="aspect-[4/3] bg-gradient-to-br from-sky-500/15 via-neutral-900 to-emerald-500/10">
<div className="flex h-full w-full items-end justify-between p-4">
<div className="space-y-1">
<span className="inline-flex items-center rounded-full bg-black/60 px-2 py-0.5 text-[0.7rem] text-neutral-200 ring-1 ring-white/10">
                      SaaS dashboard
                    </span>
<p className="text-sm sm:text-base font-medium tracking-tight text-neutral-50">
                      Northwind Analytics
                    </p>
</div>
<div className="flex items-center gap-2 text-right">
<div className="text-[0.7rem] text-neutral-300">
                      Release cadence
                      <div className="text-sm text-neutral-50">4.8×</div>
</div>
</div>
</div>
</div>
<div className="p-4 sm:p-5 space-y-3">
<h3 className="text-base sm:text-lg tracking-tight text-neutral-50">
                  Real‑time analytics suite for ops teams
                </h3>
<p className="text-sm sm:text-base text-neutral-300">
                  Partnered from concept to launch on a responsive dashboard
                  used daily by global operations teams.
                </p>
<div className="flex items-center justify-between pt-1">
<div className="flex flex-wrap gap-1.5">
<span className="text-[0.7rem] sm:text-xs px-2 py-0.5 rounded-full bg-neutral-900/80 ring-1 ring-white/5 text-neutral-200">
                      Product design
                    </span>
<span className="text-[0.7rem] sm:text-xs px-2 py-0.5 rounded-full bg-neutral-900/80 ring-1 ring-white/5 text-neutral-200">
                      Web app
                    </span>
</div>
<button className="inline-flex items-center gap-1 text-xs sm:text-sm text-neutral-300 group-hover:text-sky-200">
                    View case
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl">
<div className="aspect-[4/3] bg-gradient-to-br from-violet-500/18 via-neutral-900 to-sky-400/15">
<div className="flex h-full w-full items-end justify-between p-4">
<div className="space-y-1">
<span className="inline-flex items-center rounded-full bg-black/60 px-2 py-0.5 text-[0.7rem] text-neutral-200 ring-1 ring-white/10">
                      Fintech mobile
                    </span>
<p className="text-sm sm:text-base font-medium tracking-tight text-neutral-50">
                      Lumen
                    </p>
</div>
<div className="text-[0.7rem] text-neutral-300 text-right">
                    App rating
                    <div className="text-sm text-neutral-50">4.9★</div>
</div>
</div>
</div>
<div className="p-4 sm:p-5 space-y-3">
<h3 className="text-base sm:text-lg tracking-tight text-neutral-50">
                  Native iOS app for personal finance
                </h3>
<p className="text-sm sm:text-base text-neutral-300">
                  Built a performant SwiftUI application with a design system
                  that mirrors the web experience one‑to‑one.
                </p>
<div className="flex items-center justify-between pt-1">
<div className="flex flex-wrap gap-1.5">
<span className="text-[0.7rem] sm:text-xs px-2 py-0.5 rounded-full bg-neutral-900/80 ring-1 ring-white/5 text-neutral-200">
                      iOS
                    </span>
<span className="text-[0.7rem] sm:text-xs px-2 py-0.5 rounded-full bg-neutral-900/80 ring-1 ring-white/5 text-neutral-200">
                      Design system
                    </span>
</div>
<button className="inline-flex items-center gap-1 text-xs sm:text-sm text-neutral-300 group-hover:text-sky-200">
                    View case
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl">
<div className="aspect-[4/3] bg-gradient-to-br from-emerald-400/20 via-neutral-900 to-sky-500/15">
<div className="flex h-full w-full items-end justify-between p-4">
<div className="space-y-1">
<span className="inline-flex items-center rounded-full bg-black/60 px-2 py-0.5 text-[0.7rem] text-neutral-200 ring-1 ring-white/10">
                      Devtools
                    </span>
<p className="text-sm sm:text-base font-medium tracking-tight text-neutral-50">
                      Velocity
                    </p>
</div>
<div className="text-[0.7rem] text-neutral-300 text-right">
                    Onboarding time
                    <div className="text-sm text-neutral-50">‑60%</div>
</div>
</div>
</div>
<div className="p-4 sm:p-5 space-y-3">
<h3 className="text-base sm:text-lg tracking-tight text-neutral-50">
                  Developer platform for high‑growth teams
                </h3>
<p className="text-sm sm:text-base text-neutral-300">
                  Reimagined the onboarding and workspace UX, backed by a
                  type‑safe API layer and modern frontend stack.
                </p>
<div className="flex items-center justify-between pt-1">
<div className="flex flex-wrap gap-1.5">
<span className="text-[0.7rem] sm:text-xs px-2 py-0.5 rounded-full bg-neutral-900/80 ring-1 ring-white/5 text-neutral-200">
                      Web app
                    </span>
<span className="text-[0.7rem] sm:text-xs px-2 py-0.5 rounded-full bg-neutral-900/80 ring-1 ring-white/5 text-neutral-200">
                      Platform
                    </span>
</div>
<button className="inline-flex items-center gap-1 text-xs sm:text-sm text-neutral-300 group-hover:text-sky-200">
                    View case
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="z-10 sm:py-24 pt-16 pb-16 relative" id="testimonials">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-10 text-center">
<p className="text-[0.7rem] sm:text-xs uppercase text-neutral-400 tracking-[0.16em] mb-2">
              Featured Reviews
            </p>
<h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight font-normal text-neutral-50">
              Teams who build with Modivo.
            </h2>
</div>
<div className="relative flex items-center justify-center py-10 sm:py-16">
<div className="relative flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">

<div className="glass" style={{position: 'relative', width: '18rem', height: '18rem', maxWidth: '100%', background: 'linear-gradient(rgba(255,255,255,0.08), transparent)', border: '1px solid rgba(255,255,255,0.12)', boxShadow: 'rgba(0,0,0,0.5) 0 25px 45px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '1.25rem', margin: '0 -1.75rem', backdropFilter: 'blur(18px)', transform: 'rotate(-6deg)'}}>
<div className="absolute inset-4 rounded-2xl bg-neutral-950/70 text-neutral-50 shadow-2xl ring-1 ring-white/10 overflow-hidden backdrop-blur-xl">
<div className="p-5 sm:p-6 flex h-full flex-col">
<div className="inline-flex items-center justify-center h-8 w-8 rounded-xl bg-neutral-900 ring-1 ring-white/10 mb-4">
<svg className="h-4 w-4 text-neutral-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<p className="text-sm sm:text-base leading-relaxed text-neutral-100 mb-4">
                      “Modivo shipped our new SaaS dashboard in under three
                      months. It feels like something our own team would have
                      designed — just more refined.”
                    </p>
<div className="pt-3 border-t border-white/10 mt-auto flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Client" className="h-7 w-7 rounded-full object-cover" src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"/>
<div className="">
<div className="text-xs font-medium text-neutral-50">
                            Alex Rivera
                          </div>
<div className="text-[0.7rem] text-neutral-300">
                            CEO, Northwind Analytics
                          </div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="h-4 w-4 text-amber-300" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<span className="text-xs font-medium text-neutral-100">5.0</span>
</div>
</div>
</div>
</div>
</div>

<div className="glass" style={{position: 'relative', width: '18rem', height: '18rem', maxWidth: '100%', background: 'linear-gradient(rgba(255,255,255,0.1), transparent)', border: '1px solid rgba(255,255,255,0.16)', boxShadow: 'rgba(0,0,0,0.6) 0 30px 55px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '1.25rem', margin: '0 -1.75rem', backdropFilter: 'blur(20px)', transform: 'rotate(0deg)'}}>
<div className="absolute inset-4 rounded-2xl bg-neutral-950/65 text-neutral-50 shadow-2xl ring-1 ring-white/10 overflow-hidden backdrop-blur-xl">
<div className="p-5 sm:p-6 flex h-full flex-col">
<div className="inline-flex items-center justify-center h-8 w-8 rounded-xl bg-neutral-900 ring-1 ring-white/10 mb-4">
<svg className="h-4 w-4 text-neutral-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<p className="text-sm sm:text-base leading-relaxed text-neutral-100 mb-4">
                      “They operate like a product partner, not a vendor.
                      Our iOS and web apps finally feel consistent — and
                      fast. The attention to micro‑interactions is unreal.”
                    </p>
<div className="pt-3 border-t border-white/10 mt-auto flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Client" className="h-7 w-7 rounded-full object-cover" src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg"/>
<div className="">
<div className="text-xs font-medium text-neutral-50">
                            Nina Patel
                          </div>
<div className="text-[0.7rem] text-neutral-300">
                            Director of Product, Lumen
                          </div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="h-4 w-4 text-amber-300" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<span className="text-xs font-medium text-neutral-100">5.0</span>
</div>
</div>
</div>
</div>
</div>

<div className="glass" style={{position: 'relative', width: '18rem', height: '18rem', maxWidth: '100%', background: 'linear-gradient(rgba(255,255,255,0.07), transparent)', border: '1px solid rgba(255,255,255,0.12)', boxShadow: 'rgba(0,0,0,0.55) 0 25px 45px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '1.25rem', margin: '0 -1.75rem', backdropFilter: 'blur(18px)', transform: 'rotate(5deg)'}}>
<div className="absolute inset-4 rounded-2xl bg-neutral-950/70 text-neutral-50 shadow-2xl ring-1 ring-white/10 overflow-hidden backdrop-blur-xl">
<div className="p-5 sm:p-6 flex h-full flex-col">
<div className="inline-flex items-center justify-center h-8 w-8 rounded-xl bg-neutral-900 ring-1 ring-white/10 mb-4">
<svg className="h-4 w-4 text-neutral-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<p className="text-sm sm:text-base leading-relaxed text-neutral-100 mb-4">
                      “There’s a calm confidence to how Modivo works. Clear
                      communication, thoughtful trade‑offs, and a product we’re
                      proud to demo to anyone.”
                    </p>
<div className="pt-3 border-t border-white/10 mt-auto flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Client" className="h-7 w-7 rounded-full object-cover" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"/>
<div>
<div className="text-xs font-medium text-neutral-50">
                            Marcus Webb
                          </div>
<div className="text-[0.7rem] text-neutral-300">
                            VP Product, Velocity
                          </div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="h-4 w-4 text-amber-300" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<span className="text-xs font-medium text-neutral-100">5.0</span>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
</section>

<section className="relative z-10 border-t border-white/5" id="contact">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 text-center">
<p className="text-[0.7rem] sm:text-xs uppercase tracking-[0.16em] text-neutral-400 mb-3">
            Start a project
          </p>
<h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight font-normal text-neutral-50 mb-4">
            Ready when you are.
          </h2>
<p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto mb-8">
            Tell us about your product, timelines, and goals.
            We’ll respond within one business day with next steps.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<div className="relative z-10 rounded-full bg-transparent pointer-events-none" style={{animation: 'fadeIn 1s ease-out 0.3s both'}}>
<button className="glass-button all-unset cursor-pointer relative rounded-full pointer-events-auto z-30 outline-none focus:outline-none" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<span className="button-text relative block select-none font-medium tracking-tight px-7 py-3.5 text-neutral-900 text-sm sm:text-base">
                  Share your roadmap
                </span>
<div className="button-shine"></div>
</button>
</div>
<button className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 sm:px-5 py-2.5 text-sm font-medium text-neutral-50 hover:bg-white/5 transition">
              Email us instead
            </button>
</div>
<p className="mt-6 text-[0.7rem] sm:text-xs text-neutral-500">
            No spam, no pressure. Just a clear view of whether we’re the right fit.
          </p>
</div>
<footer className="border-t border-white/5">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
<div className="flex items-center gap-2 text-neutral-500 text-xs sm:text-sm">
<span>© <span id="year">2025</span> Modivo Studio</span>
<span className="hidden sm:inline">·</span>
<span className="hidden sm:inline">Software, perfectly crafted.</span>
</div>
<div className="flex items-center gap-4 text-xs sm:text-sm text-neutral-500">
<a className="hover:text-neutral-300" href="#">Privacy</a>
<a className="hover:text-neutral-300" href="#">Imprint</a>
</div>
</div>
</footer>
</section>
</div>

<style>
      @property --angle-1 {
        syntax: "<angle>";
        inherits: false;
        initial-value: -75deg;
      }
      @property --angle-2 {
        syntax: "<angle>";
        inherits: false;
        initial-value: -45deg;
      }

      .glass-button {
        background: linear-gradient(
          -75deg,
          rgba(255, 255, 255, 0.12),
          rgba(255, 255, 255, 0.7),
          rgba(255, 255, 255, 0.2)
        );
        box-shadow:
          inset 0 0.1rem 0.1rem rgba(0, 0, 0, 0.05),
          inset 0 -0.1rem 0.1rem rgba(255, 255, 255, 0.5),
          0 0.45rem 0.35rem -0.2rem rgba(0, 0, 0, 0.55),
          0 0 0.06rem 0.14rem rgba(255, 255, 255, 0.18) inset,
          0 0 0 0 rgba(255, 255, 255, 1);
        backdrop-filter: blur(0.5rem);
        transition: all 400ms cubic-bezier(0.25, 1, 0.5, 1);
      }

      .glass-button:hover {
        transform: scale(0.985);
        backdrop-filter: blur(0.35rem);
        box-shadow:
          inset 0 0.1rem 0.1rem rgba(0, 0, 0, 0.05),
          inset 0 -0.1rem 0.1rem rgba(255, 255, 255, 0.5),
          0 0.28rem 0.18rem -0.16rem rgba(0, 0, 0, 0.6),
          0 0 0.05rem 0.12rem rgba(255, 255, 255, 0.6) inset,
          0 0 0 0 rgba(255, 255, 255, 1);
      }

      .glass-button:active {
        transform: scale(0.97) translateY(0.04rem);
        box-shadow:
          inset 0 0.1rem 0.1rem rgba(0, 0, 0, 0.05),
          inset 0 -0.1rem 0.1rem rgba(255, 255, 255, 0.5),
          0 0.15rem 0.1rem -0.12rem rgba(0, 0, 0, 0.4),
          0 0 0.1rem 0.25rem rgba(255, 255, 255, 0.25) inset,
          0 0.2rem 0.05rem 0 rgba(0, 0, 0, 0.12),
          0 0.24rem 0 0 rgba(255, 255, 255, 0.7),
          inset 0 0.22rem 0.04rem 0 rgba(0, 0, 0, 0.15);
      }

      .button-text {
        text-shadow: 0 0.16rem 0.08rem rgba(0, 0, 0, 0.12);
        transition: all 400ms cubic-bezier(0.25, 1, 0.5, 1);
      }

      .glass-button:hover .button-text {
        text-shadow: 0.03rem 0.06rem 0.06rem rgba(0, 0, 0, 0.18);
      }

      .glass-button:active .button-text {
        text-shadow: 0.03rem 0.18rem 0.08rem rgba(0, 0, 0, 0.18);
      }

      .glass-button::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 999px;
        width: calc(100% + 0.08rem);
        height: calc(100% + 0.08rem);
        top: -0.04rem;
        left: -0.04rem;
        padding: 0.04rem;
        box-sizing: border-box;
        background:
          conic-gradient(
            from var(--angle-1) at 50% 50%,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0) 5% 40%,
            rgba(0, 0, 0, 0.5) 50%,
            rgba(0, 0, 0, 0) 60% 95%,
            rgba(0, 0, 0, 0.5)
          ),
          linear-gradient(180deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6));
        mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
        mask-composite: exclude;
        transition:
          all 400ms cubic-bezier(0.25, 1, 0.5, 1),
          --angle-1 500ms ease;
        box-shadow: inset 0 0 0 0.03rem rgba(255, 255, 255, 0.6);
      }

      .glass-button:hover::after {
        --angle-1: -125deg;
      }

      .glass-button:active::after {
        --angle-1: -75deg;
      }

      .button-shine {
        position: absolute;
        inset: 0;
        border-radius: 999px;
        width: calc(100% - 0.04rem);
        height: calc(100% - 0.04rem);
        top: 0.02rem;
        left: 0.02rem;
        background: linear-gradient(
          var(--angle-2),
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.8) 40% 52%,
          rgba(255, 255, 255, 0) 60%
        );
        mix-blend-mode: screen;
        pointer-events: none;
        background-size: 220% 220%;
        background-position: 0% 50%;
        background-repeat: no-repeat;
        transition:
          background-position 500ms cubic-bezier(0.25, 1, 0.5, 1),
          --angle-2 500ms cubic-bezier(0.25, 1, 0.5, 1);
      }

      .glass-button:hover .button-shine {
        background-position: 30% 50%;
      }

      .glass-button:active .button-shine {
        background-position: 55% 20%;
        --angle-2: -15deg;
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(4px); }
        to   { opacity: 1; transform: translateY(0); }
      }
    </style>

    </>
  );
}
