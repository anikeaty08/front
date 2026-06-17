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



(function () {
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
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        
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
      

<div className="aura-background-component -z-10 w-full top-0 absolute h-[800px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="hRFfUymDGOHwtFe7evR2"></div>

</div>
</div>

<div className="gradient-blur" style={{}}>
<div className=""></div>
<div className="" style={{}}></div>
<div className="" style={{}}></div>
<div className="" style={{}}></div>
<div className="" style={{}}></div>
<div className="" style={{}}></div>
</div>

<div className="fixed flex z-50 w-full pt-6 pr-4 pl-4 top-0 left-0 justify-center">
<nav className="shadow-black/50 flex md:gap-12 md:w-auto bg-black/60 w-full max-w-5xl rounded-none pt-2 pr-2 pb-2 pl-6 shadow-2xl backdrop-blur-lg gap-x-8 gap-y-8 items-center justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2))', '--border-radius-before': '0'}}>
<div className="flex items-center gap-2 shrink-0">
<span className="text-base font-normal tracking-tight text-white font-sans">
            Architect
          </span>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-normal text-gray-400 hover:text-white transition-colors font-sans" href="#">
            Projects
          </a>
<a className="text-xs font-normal text-gray-400 hover:text-white transition-colors font-sans" href="#">
            Methodology
          </a>
<a className="text-xs font-normal text-gray-400 hover:text-white transition-colors font-sans" href="#">
            Studio
          </a>
<a className="text-xs font-normal text-gray-400 hover:text-white transition-colors font-sans" href="#">
            Insights
          </a>
</div>
<div className="flex gap-4 shrink-0 gap-x-4 gap-y-4 items-center" style={{}}>
<a className="hidden md:block text-xs font-normal text-gray-300 hover:text-white transition-colors font-sans" href="#">
            Login
          </a>
<button className="group inline-flex overflow-hidden transition-transform active:scale-95 cursor-pointer outline-none rounded-none pt-2.5 pr-6 pb-2.5 pl-6 relative gap-x-4 gap-y-4 items-center justify-center" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)'}}>

<span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#eab308_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{}}></span>

<span className="absolute inset-0 rounded-none bg-zinc-800 transition-opacity duration-300 group-hover:opacity-0" style={{}}></span>

<span className="z-10 bg-black rounded-none absolute top-[1px] right-[1px] bottom-[1px] left-[1px]"></span>

<div className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 z-10" style={{background: 'radial-gradient(50% 50% at 50% 100%, rgba(234, 179, 8, 0.2) 0%, transparent 100%)'}}></div>

<span className="relative z-20 flex items-center justify-center gap-2 text-xs font-normal text-white tracking-wide uppercase">
<span className="">Initial Consult</span>
<svg className="transition-transform duration-300 group-hover:translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>
</nav>
</div>

<section className="min-h-screen flex flex-col md:pt-20 overflow-hidden w-full pt-32 relative items-center justify-center" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 95%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 95%, transparent)'}}>

<div className="absolute top-1/4 left-10 opacity-20 text-yellow-500 pointer-events-none">+</div>
<div className="absolute bottom-1/4 right-10 opacity-20 text-yellow-500 pointer-events-none">+</div>

<div className="z-10 text-center max-w-5xl mt-24 mr-auto mb-24 ml-auto pr-6 pl-6 relative">

<div className="[animation:fadeSlideIn_1s_ease-out_0.8s_both] animate-on-scroll inline-flex transition-transform hover:scale-105 cursor-pointer group animate bg-gradient-to-br from-white/10 to-white/0 rounded-full mb-10 pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', '--border-radius-before': '9999px'}}>
<span className="relative flex h-2 w-2">
<span className="animate-sonar absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.8)]"></span>
</span>
<span className="text-xs font-normal tracking-wide group-hover:text-white transition-colors font-sans text-yellow-100/80">
            System v2.4 Live
          </span>
</div>

<h1 className="[animation:fadeSlideIn_1s_ease-out_1s_both] animate-on-scroll animate flex flex-wrap justify-center gap-x-[0.25em] gap-y-2 leading-[1.1] md:text-8xl cursor-default text-6xl font-medium tracking-tighter font-manrope mb-8">
<span className="inline-flex bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">
            Constructing
          </span>
<span className="inline-flex bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">
            the
          </span>
<span className="inline-flex bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-100">
            architecture
          </span>
<span className="inline-flex bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">
            of
          </span>
<span className="inline-flex bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">
            tomorrow's
          </span>
<span className="inline-flex bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">
            web
          </span>
</h1>

<p className="[animation:fadeSlideIn_1s_ease-out_1.2s_both] animate-on-scroll leading-relaxed md:text-2xl text-xl text-gray-400 tracking-normal max-w-3xl mr-auto mb-12 ml-auto animate font-manrope font-normal" style={{}}>
          We build digital infrastructures with precision code and scalable design systems.
          Engineering the foundation for your next breakthrough.
        </p>

<div className="[animation:fadeSlideIn_1s_ease-out_1.4s_both] animate-on-scroll flex flex-col md:flex-row gap-6 animate mb-12 gap-x-6 gap-y-6 items-center justify-center">
<button className="group flex min-w-[180px] decoration-0 transition-transform active:scale-95 cursor-pointer outline-none w-auto h-[50px] pr-6 pl-6 relative items-center justify-center shiny-cta" style={{borderRadius: '8px'}} type="button">
<div className="relative z-20 flex items-center justify-center gap-2 opacity-100">
<span className="m-0 p-0 font-sans text-[15px] font-normal text-white tracking-wide" style={{WebkitFontSmoothing: 'antialiased', textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>
                Explore Blueprint
              </span>
<svg className="lucide lucide-arrow-right transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</button>
<button className="group min-w-[180px] overflow-hidden z-10 cursor-pointer outline-none transition-all duration-300 active:scale-95 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] bg-black w-auto h-[50px] rounded-xl relative" type="button">

<div className="-translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 blur-[12px] group-hover:animate-[spin_3s_linear_infinite] transition-all duration-700 bg-gradient-to-tr from-[#eab308] via-[#facc15] to-[#eab308] opacity-60 w-[250%] h-[500%] absolute top-1/2 left-1/2"></div>

<div className="z-[1] bg-black rounded-[10px] absolute top-[1.5px] right-[1.5px] bottom-[1.5px] left-[1.5px]"></div>

<div className="absolute z-10 top-0 left-0 h-full w-24 -translate-x-32 group-hover:translate-x-[20rem] ease-in transition-all duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"></div>

<span className="relative z-20 flex items-center justify-center gap-2 font-sans text-[15px] font-normal text-zinc-300 group-hover:text-white tracking-wide transition-colors">
              Access Terminal
            </span>
</button>
</div>

<div className="[animation:fadeSlideIn_1s_ease-out_1.6s_both] animate-on-scroll flex flex-col animate mt-32 mb-20 gap-x-4 gap-y-4 items-center">
<p className="text-xs text-gray-500 font-normal uppercase tracking-widest font-sans">
            Powering next-gen infrastructures
          </p>
<a className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white border-b border-transparent hover:border-white transition-all pb-0.5 group font-sans" href="#">
            View System Status
            <svg className="lucide lucide-arrow-right w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>

<div className="[animation:fadeSlideIn_1s_ease-out_1.8s_both] animate-on-scroll z-20 md:pb-20 animate w-full max-w-6xl mr-auto ml-auto pr-6 pb-12 pl-6 relative">

<div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] opacity-40 grayscale hover:grayscale-0 transition-all duration-700 group">


<style>
            @keyframes infinite-scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-infinite-scroll {
                animation: infinite-scroll 40s linear infinite;
            }
            .group:hover .animate-infinite-scroll { animation-play-state: paused; }
          </style>
<div className="flex items-center justify-center md:justify-start [&amp;_div]:mx-8 w-max animate-infinite-scroll">

<div className="group flex items-center gap-2"><span className="font-normal text-lg text-white font-sans">Next.js</span></div>
<div className="group flex items-center gap-2"><span className="font-normal text-lg text-white font-sans">React</span></div>
<div className="group flex items-center gap-2"><span className="font-normal text-lg text-white font-sans">Node</span></div>
<div className="group flex items-center gap-2"><span className="font-normal text-lg text-white font-sans">Python</span></div>
<div className="group flex items-center gap-2"><span className="font-normal text-lg text-white font-sans">AWS</span></div>
<div className="group flex items-center gap-2"><span className="font-normal text-lg text-white font-sans">Docker</span></div>
<div className="group flex items-center gap-2"><span className="font-normal text-lg text-white font-sans">Kubernetes</span></div>

<div className="group flex items-center gap-2"><span className="font-normal text-lg text-white font-sans">Next.js</span></div>
<div className="group flex items-center gap-2"><span className="font-normal text-lg text-white font-sans">React</span></div>
<div className="group flex items-center gap-2"><span className="font-normal text-lg text-white font-sans">Node</span></div>
<div className="group flex items-center gap-2"><span className="font-normal text-lg text-white font-sans">Python</span></div>
<div className="group flex items-center gap-2"><span className="font-normal text-lg text-white font-sans">AWS</span></div>
<div className="group flex items-center gap-2"><span className="font-normal text-lg text-white font-sans">Docker</span></div>
<div className="group flex items-center gap-2"><span className="font-normal text-lg text-white font-sans">Kubernetes</span></div>
</div>
</div>
</div>
</section>
<section className="w-full max-w-7xl z-20 mt-24 mr-auto mb-24 ml-auto pt-10 pr-2 pb-32 pl-2 relative">

<div className="mb-16 text-center [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight font-manrope mb-4">
          Core Modules
        </h2>
<p className="text-lg text-gray-400 font-sans max-w-2xl mx-auto">
          Scalable components designed for high-velocity deployment.
        </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-6 gap-6 gap-x-6 gap-y-6">

<div className="lg:col-span-2 group overflow-hidden hover:border-yellow-500/30 transition-all duration-300 border-dashed bg-black border-zinc-800 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">

<div className="absolute top-2 right-2 text-yellow-500/30 text-xs">+</div>
<div className="relative z-10 h-full flex flex-col">
<div className="mb-8">
<h3 className="text-2xl font-medium text-white font-manrope mb-2 tracking-tight">
                System Design
              </h3>
<p className="text-sm text-gray-400 font-sans leading-relaxed">
                Architectural blueprints that ensure stability and growth.
              </p>
</div>
<div className="overflow-hidden bg-black/20 w-full h-48 border-white/5 border rounded-none mt-auto relative">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
<div className="flex opacity-30 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<svg className="text-white/20" fill="none" height="64" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24" width="64">
<rect height="20" rx="2" width="20" x="2" y="2"></rect>
<path d="M2 12h20"></path>
<path d="M12 2v20"></path>
</svg>
</div>
<button className="-translate-x-1/2 shadow-yellow-600/25 flex hover:scale-105 transition-transform group/btn text-sm font-normal text-black bg-[#eab308] border-yellow-600/20 border rounded-none pt-2.5 pr-5 pb-2.5 pl-5 absolute bottom-6 left-1/2 shadow-sm gap-x-2 gap-y-2 items-center">
<svg className="animate-pulse" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
                Initialize
              </button>
</div>
</div>
</div>

<div className="lg:col-span-2 group overflow-hidden hover:border-yellow-500/30 transition-all duration-300 bg-zinc-900/40 border-white/10 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll">

<div className="absolute bottom-2 left-2 text-yellow-500/30 text-xs">+</div>
<div className="relative z-10 h-full flex flex-col">
<div className="mb-8">
<h3 className="text-2xl font-medium text-white font-manrope mb-2 tracking-tight">
                Frontend Eng.
              </h3>
<p className="text-sm text-gray-400 font-sans leading-relaxed">
                Responsive interfaces optimized for zero-latency interactions.
              </p>
</div>
<div className="flex flex-col overflow-hidden bg-black/20 w-full h-48 border-white/5 border rounded-none mt-auto pt-4 pr-4 pb-4 pl-4 relative justify-end">
<div className="transform transition-transform group-hover:-translate-y-1 duration-500 bg-zinc-900 w-full border-white/10 border rounded-none pt-4 pr-4 pb-4 pl-4 relative shadow-xl">
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] uppercase font-bold text-[#eab308] tracking-wider">
                    Build 4.0
                  </span>
</div>
<h4 className="text-sm font-normal text-white mb-1">
                  Latency Check
                </h4>
<p className="text-xs text-zinc-500 leading-relaxed">
                  Optimization protocols active.
                </p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 group overflow-hidden hover:border-yellow-500/30 transition-all duration-300 bg-zinc-900/40 border-white/10 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll">
<div className="relative z-10 h-full flex flex-col">
<div className="mb-8">
<h3 className="text-2xl font-medium text-white font-manrope mb-2 tracking-tight">
                Backend Logic
              </h3>
<p className="text-sm text-gray-400 font-sans leading-relaxed">
                Robust server-side operations and secure data pipelines.
              </p>
</div>
<div className="flex overflow-hidden bg-black/20 w-full h-48 border-white/5 border rounded-none mt-auto pt-6 pr-6 pb-6 pl-6 relative items-center justify-center">
<div className="w-full max-w-[200px] space-y-4">
<div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-4">
                  Server Load
                </div>
<div className="relative pl-4">
<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-zinc-800 rounded-full"></div>
<div className="w-0.5 bg-[#eab308] h-12 rounded-full absolute top-0 left-0 shadow-[0_0_10px_rgba(234,179,8,0.8)]"></div>
<div className="space-y-3">
<div className="flex items-center gap-3">
<span className="text-lg font-normal text-white">
                        Optimal
                      </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 group overflow-hidden hover:border-yellow-500/30 transition-all duration-300 border-dashed bg-black border-zinc-800 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll">
<div className="relative z-10 h-full flex flex-col">
<div className="mb-8 max-w-sm">
<h3 className="text-2xl font-medium text-white font-manrope mb-2 tracking-tight">
                Data Analytics
              </h3>
<p className="text-sm text-gray-400 font-sans leading-relaxed">
                Real-time insights to drive decision making matrices.
              </p>
</div>
<div className="mt-auto relative w-full h-[280px] rounded-xl border border-white/5 bg-black/20 p-8 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-yellow-500/10 rounded-full animate-sonar"></div>
<div className="-translate-x-1/2 -translate-y-1/2 transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-[60%] bg-zinc-900 w-72 border-white/10 border rounded-none pt-4 pr-4 pb-4 pl-4 absolute top-1/2 left-1/2 shadow-2xl">
<div className="flex items-start gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 border border-white/10 flex items-center justify-center">
<span className="text-xs font-bold text-zinc-300">DA</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<span className="text-sm font-medium text-white">
                        Data Stream
                      </span>
</div>
<p className="text-xs text-zinc-300 leading-relaxed">
                      98.4% Accuracy achieved.
                    </p>
</div>
</div>
<div className="flex gap-2 mt-2">
<button className="flex-1 hover:bg-yellow-600 transition-colors shadow-yellow-600/20 flex text-xs font-normal text-black bg-[#eab308] rounded-none pt-1.5 pr-3 pb-1.5 pl-3 shadow-lg gap-x-1.5 gap-y-1.5 items-center justify-center">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                    Confirm
                  </button>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 group overflow-hidden hover:border-yellow-500/30 transition-all duration-300 bg-zinc-900/40 border-white/10 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm [animation:fadeSlideIn_1s_ease-out_0.7s_both] animate-on-scroll">
<div className="relative z-10 h-full flex flex-col">
<div className="mb-8 max-w-sm">
<h3 className="text-2xl font-medium text-white font-manrope mb-2 tracking-tight">
                Infrastructure
              </h3>
<p className="text-sm text-gray-400 font-sans leading-relaxed">
                Cloud-native solutions for boundless scalability.
              </p>
</div>
<div className="flex overflow-hidden bg-black/20 w-full h-[280px] border-white/5 border rounded-none mt-auto pt-8 pr-8 pb-8 pl-8 relative items-center justify-center">
<div className="-translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-yellow-600/5 to-transparent opacity-50 w-full h-full absolute top-1/2 left-1/2"></div>
<div className="relative w-full max-w-md">
<h4 className="text-2xl md:text-3xl font-normal text-zinc-500 text-center leading-tight font-manrope">
                  Build with
                  <span className="inline-block transition-colors duration-300 text-white bg-[#eab308]/10 rounded-lg px-1 relative">
                    velocity.
                    <span className="-right-0.5 w-0.5 animate-pulse bg-[#eab308] absolute top-0 bottom-0"></span>
</span>
</h4>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden w-full max-w-7xl z-20 mt-0 mr-auto mb-32 ml-auto pt-20 pb-20 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none z-0">
<h2 className="text-[15vw] leading-none font-medium text-white/[0.02] text-center whitespace-nowrap font-manrope tracking-tighter">
          CLIENTS
        </h2>
</div>

<div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-[120px] pointer-events-none select-none -z-10 mix-blend-screen bg-yellow-600/10"></div>
<div className="absolute bottom-20 right-10 w-96 h-96 bg-zinc-500/10 rounded-full blur-[120px] pointer-events-none select-none -z-10 mix-blend-screen"></div>
<div className="z-10 pr-6 pl-6 relative">

<div className="text-center mb-20 max-w-3xl mx-auto [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<h3 className="leading-[1.1] md:text-6xl text-4xl font-normal text-white tracking-tight font-manrope mb-6">
            Trust by
            <span className="text-zinc-500">industry</span>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
              leaders
            </span>
</h3>
<p className="text-lg text-zinc-400 font-sans leading-relaxed max-w-2xl mx-auto">
            Our framework powers mission-critical applications for global enterprises.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">

<div className="flex flex-col gap-6">

<div className="group hover:border-white/10 transition-all duration-300 overflow-hidden border-dashed bg-black/50 border-zinc-800 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">
<div className="flex items-center gap-1 mb-6 text-yellow-500">
<svg className="lucide lucide-star" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<p className="text-zinc-300 font-sans leading-relaxed text-base mb-8">
                "The structural integrity of our platform has never been stronger. Deployment times were cut by 60% within the first month."
              </p>
<div className="flex items-center gap-4 border-t border-white/5 pt-6">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 overflow-hidden ring-2 ring-white/5">
<img alt="Alex" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&amp;h=100&amp;fit=crop"/>
</div>
<div>
<div className="text-sm font-medium text-white font-manrope">
                    Alex Thorne
                  </div>
<div className="text-xs text-zinc-500 font-medium">
                    VP Engineering at Nexus
                  </div>
</div>
</div>
</div>

<div className="group hover:border-white/10 transition-all duration-300 overflow-hidden bg-zinc-900/40 border-white/5 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll">
<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold border border-yellow-500/20 text-xs">
                    MR
                  </div>
<div>
<div className="text-sm font-medium text-white font-manrope">
                      Marcus Reed
                    </div>
<div className="text-xs text-zinc-500 font-medium">
                      @marcus_builds
                    </div>
</div>
</div>
</div>
<p className="text-zinc-300 font-sans leading-relaxed text-base">
                Precise documentation and flawless execution. A developer's dream environment. ⚡️
              </p>
</div>
</div>

<div className="flex flex-col gap-6 md:pt-12">

<div className="group hover:border-white/20 transition-all duration-300 overflow-hidden shadow-black/20 border-dashed bg-black border-zinc-700 border rounded-none pt-8 pr-8 pb-8 pl-8 relative shadow-2xl backdrop-blur-md [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll">
<svg className="mb-8 opacity-90 text-zinc-200" fill="currentColor" height="32" stroke="none" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
<path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
</svg>
<p className="text-xl text-white font-manrope font-normal leading-relaxed mb-8 tracking-tight">
                "We needed a system that could handle millions of requests without blinking. This architecture delivered beyond expectations."
              </p>
<div className="flex items-center gap-4 border-t border-white/5 pt-6">
<div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 overflow-hidden ring-2 ring-white/10">
<img alt="David" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
</div>
<div>
<div className="text-base font-medium text-white font-manrope">
                    David Ross
                  </div>
<div className="text-xs text-zinc-500 font-medium">
                    CTO at Vertex
                  </div>
</div>
</div>
</div>

<div className="group hover:border-white/10 transition-all duration-300 overflow-hidden bg-zinc-900/40 border-white/5 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll">
<p className="text-zinc-300 font-sans leading-relaxed text-base mb-8">
                "The API integration was seamless. We saved months of development time."
              </p>
<div className="flex items-center gap-4 border-t border-white/5 pt-6">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white font-bold border border-white/10 text-xs">
                  SV
                </div>
<div>
<div className="text-sm font-medium text-white font-manrope">
                    Sarah Vane
                  </div>
<div className="text-xs text-zinc-500 font-medium">
                    Lead Dev
                  </div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6 md:col-span-2 lg:col-span-1">

<div className="group hover:border-white/10 transition-all duration-300 overflow-hidden bg-zinc-900/40 border-white/5 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-none [animation:fadeSlideIn_1s_ease-out_0.7s_both] animate-on-scroll">
<div className="flex items-center gap-1 mb-6 text-yellow-500">
<svg className="lucide lucide-star" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<p className="text-zinc-300 font-sans leading-relaxed text-base mb-8">
                "Robust, reliable, and ridiculously fast. The new standard for web infrastructure."
              </p>
<div className="flex items-center gap-4 border-t border-white/5 pt-6">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 overflow-hidden ring-2 ring-white/5">
<img alt="James" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&amp;h=100&amp;fit=crop"/>
</div>
<div>
<div className="text-sm font-medium text-white font-manrope">
                    James Lin
                  </div>
<div className="text-xs text-zinc-500 font-medium">
                    Architect at Flow
                  </div>
</div>
</div>
</div>

<div className="group hover:border-white/10 transition-all duration-300 overflow-hidden bg-zinc-900/40 border-white/5 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm [animation:fadeSlideIn_1s_ease-out_0.8s_both] animate-on-scroll">
<p className="text-zinc-300 font-sans leading-relaxed text-base mb-8">
                "The ROI was immediate. Support response times are under 15 minutes."
              </p>
<div className="flex items-center gap-4 border-t border-white/5 pt-6">
<div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold border border-yellow-500/20 text-xs">
                  PL
                </div>
<div>
<div className="text-sm font-medium text-white font-manrope">
                    Paul L.
                  </div>
<div className="text-xs text-zinc-500 font-medium">
                    Product Lead
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="w-full max-w-7xl z-20 mt-0 mr-auto mb-32 ml-auto pt-6 pr-6 pb-6 pl-6 relative">

<div className="flex flex-col text-center mb-20 items-center [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/20 bg-yellow-500/5 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
</span>
<span className="text-xs font-semibold text-yellow-200 uppercase tracking-widest font-sans">
            Invest
          </span>
</div>
<h2 className="md:text-7xl text-5xl font-medium text-white tracking-tighter font-manrope mb-6">
          Transparent
          <span className="bg-clip-text text-transparent bg-[#eab308]">
            Costing
          </span>
</h2>
<p className="text-xl text-gray-400 font-sans max-w-2xl leading-relaxed">
          Operational expenses for varying scales of deployment.
        </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 mb-12 pt-4 pr-4 pb-4 pl-4 gap-x-6 gap-y-6" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))'}}>

<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-yellow-500/20"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-yellow-500/20"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-yellow-500/20"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-yellow-500/20"></div>

<div className="lg:col-span-4 flex flex-col h-full bg-black border p-8 md:p-10 hover:border-zinc-700 transition-colors duration-300 border-dashed border-zinc-800 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll">
<div className="mb-auto">
<h3 className="text-4xl font-medium text-white tracking-tighter font-manrope mb-4">
              Standard
            </h3>
<p className="text-zinc-400 text-base font-sans leading-relaxed mb-8 h-12">
              Essential architecture for growing startups.
            </p>

<div className="inline-flex items-center border border-zinc-800 mb-8 w-fit bg-zinc-900/50 p-1 rounded-sm">
<button className="px-4 py-1.5 bg-zinc-700 text-white text-xs font-semibold font-sans rounded-sm shadow-sm transition-all">
                Monthly
              </button>
<button className="px-4 py-1.5 bg-transparent text-zinc-500 hover:text-zinc-300 text-xs font-medium font-sans transition-colors">
                Yearly
              </button>
</div>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-[1.5rem] align-top text-zinc-400 font-medium translate-y-2">
                $
              </span>
<span className="text-6xl font-medium text-white tracking-tighter font-manrope">
                8,900
              </span>
<span className="text-zinc-500 text-lg font-normal font-sans">
                / mo
              </span>
</div>
<p className="text-zinc-500 text-sm font-sans mb-10">
              Cancel with 30-day notice.
            </p>
<button className="group flex items-center justify-center gap-2 px-6 py-3 border border-zinc-700 text-white text-sm font-medium font-sans hover:bg-zinc-800 transition-all w-full">
              Deploy
            </button>
</div>
<div className="border-t border-zinc-800/80 my-10 w-full"></div>
<div>
<h4 className="text-sm font-medium text-white font-manrope mb-6 uppercase tracking-wider">
              Modules included
            </h4>
<div className="space-y-4">
<div className="flex items-start gap-3">
<svg className="text-yellow-500 shrink-0 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm text-zinc-300 font-sans leading-snug">
                  60 hours engineering time
                </span>
</div>
<div className="flex items-start gap-3">
<svg className="text-yellow-500 shrink-0 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm text-zinc-300 font-sans leading-snug">
                  Single Active Sprint
                </span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col h-full bg-zinc-900/30 border p-8 md:p-10 relative overflow-hidden transition-colors duration-300 border-dashed border-zinc-800 hover:border-zinc-700 [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-[#eab308]/10 blur-[90px] rounded-full pointer-events-none"></div>
<div className="mb-auto relative z-10">
<div className="flex items-center justify-between mb-4">
<h3 className="text-4xl font-medium text-white tracking-tighter font-manrope">
                Enterprise
              </h3>
<span className="text-[10px] uppercase font-semibold text-black tracking-wider bg-[#eab308] rounded-sm px-2 py-1 shadow-[0_0_10px_rgba(234,179,8,0.35)]">
                Recommended
              </span>
</div>
<p className="text-zinc-400 text-base font-sans leading-relaxed mb-8 h-12">
              For organizations requiring rapid scaling.
            </p>

<div className="inline-flex items-center border border-zinc-800 mb-8 w-fit bg-zinc-900/50 p-1 rounded-sm">
<button className="px-4 py-1.5 bg-zinc-700 text-white text-xs font-semibold font-sans rounded-sm shadow-sm">
                Monthly
              </button>
<button className="px-4 py-1.5 bg-transparent text-zinc-500 hover:text-zinc-300 text-xs font-medium font-sans">
                Yearly
              </button>
</div>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-[1.5rem] text-zinc-400 font-medium translate-y-2">
                $
              </span>
<span className="text-6xl font-medium text-white tracking-tighter font-manrope">
                16,000
              </span>
<span className="text-zinc-500 text-lg font-sans">/ mo</span>
</div>
<p className="text-zinc-500 text-sm font-sans mb-10">
              Flexible cancellation policy.
            </p>
<button className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black text-sm font-bold font-sans hover:bg-zinc-200 transition-all w-full">
              Deploy
            </button>
</div>
<div className="border-t border-zinc-800/80 my-10 w-full relative z-10"></div>
<div className="relative z-10">
<h4 className="text-sm font-medium text-white font-manrope mb-6 uppercase tracking-wider">
              Everything in Standard, plus:
            </h4>
<div className="space-y-4">
<div className="flex items-start gap-3">
<svg className="text-[#eab308] shrink-0 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm text-zinc-300">
                  120 hours engineering time
                </span>
</div>
<div className="flex items-start gap-3">
<svg className="text-[#eab308] shrink-0 mt-0.5" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm text-zinc-300">
                  Multiple Active Streams
                </span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-6 h-full [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll">

<div className="flex flex-col flex-1 bg-black border p-8 md:p-10 hover:border-zinc-700 transition-colors duration-300 border-dashed border-zinc-800">
<h3 className="text-4xl font-medium text-white tracking-tighter font-manrope mb-4">
              Bespoke
            </h3>
<p className="text-zinc-400 text-base font-sans leading-relaxed mb-auto">
              Custom specifications for unique systems.
            </p>
<div className="mt-8">
<p className="text-zinc-500 text-sm font-sans mb-1 uppercase tracking-wide font-medium">
                Commencing at
              </p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-[1.5rem] align-top text-zinc-400 font-medium translate-y-2">
                  $
                </span>
<span className="text-6xl font-medium text-white tracking-tighter font-manrope">
                  25k
                </span>
</div>
<button className="group flex items-center justify-center gap-2 px-5 py-3 border border-zinc-700 text-white text-sm font-medium font-sans hover:bg-zinc-900 transition-all w-full">
                Consultation
              </button>
</div>
</div>

<div className="flex flex-col flex-1 bg-black border border-zinc-800 p-6 md:p-8 hover:border-zinc-700 transition-colors duration-300">
<div className="flex items-center gap-4 mb-6">
<img alt="Profile" className="w-12 h-12 rounded bg-zinc-800 object-cover grayscale" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&amp;h=150&amp;fit=crop"/>
<div className="">
<h4 className="text-base font-medium text-white font-manrope">
                  Maria Silva
                </h4>
<p className="text-xs text-zinc-500 font-sans uppercase tracking-wide">
                  Account Director
                </p>
</div>
</div>
<p className="text-zinc-400 text-sm font-sans leading-relaxed mb-6">
              "I'll coordinate your requirements and assemble the team within 48 hours."
            </p>
<div className="border-t border-zinc-800 w-full my-auto"></div>
<div className="flex items-center justify-between mt-6 pt-2">
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
</span>
<span className="text-xs font-medium text-white font-sans">
                  4 spots left for
                  <span className="text-zinc-400">Quarter 3</span>
</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="w-full max-w-7xl z-20 mt-32 mr-auto mb-32 ml-auto pr-6 pl-6 relative">
<div className="grid lg:grid-cols-12 gap-16 items-start">

<div className="lg:col-span-5 pt-4 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<h2 className="text-5xl md:text-6xl font-medium text-white tracking-tighter font-manrope mb-6 leading-[1.1]">
            Ready to optimize your
            <span className="bg-clip-text text-transparent bg-[#eab308]">
              stack?
            </span>
</h2>
<p className="text-lg text-zinc-400 font-sans leading-relaxed max-w-md">
            Partner with engineers who value precision and performance.
          </p>
</div>

<div className="lg:col-span-7 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll">
<form className="space-y-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-transparent focus:border-yellow-500 focus:outline-none transition-colors font-sans text-lg" id="name" placeholder="Name" required="" type="text"/>
<label className="absolute left-0 -top-5 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-yellow-500 font-sans uppercase tracking-wider font-medium" htmlFor="name">
                  Name
                </label>
</div>
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-transparent focus:border-yellow-500 focus:outline-none transition-colors font-sans text-lg" id="email" placeholder="Email" required="" type="email"/>
<label className="absolute left-0 -top-5 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-yellow-500 font-sans uppercase tracking-wider font-medium" htmlFor="email">
                  Email
                </label>
</div>
</div>
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-transparent focus:border-yellow-500 focus:outline-none transition-colors font-sans text-lg" id="project" placeholder="Project Scope" type="text"/>
<label className="absolute left-0 -top-5 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-yellow-500 font-sans uppercase tracking-wider font-medium" htmlFor="project">
                Project Scope
              </label>
</div>
<div className="group relative">
<textarea className="peer w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-transparent focus:border-yellow-500 focus:outline-none transition-colors font-sans text-lg resize-none" id="message" placeholder="Technical Requirements?" rows="1"></textarea>
<label className="absolute left-0 -top-5 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-yellow-500 font-sans uppercase tracking-wider font-medium" htmlFor="message">
                Technical Requirements?
              </label>
</div>
<div className="flex justify-end pt-8">
<button className="group flex min-w-[180px] decoration-0 transition-transform active:scale-95 cursor-pointer outline-none w-auto h-[50px] px-6 relative items-center justify-center" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', opacity: '1', border: 'none'}} type="button">

<div className="absolute inset-0 pointer-events-none transition-opacity ease-in-out duration-[1200ms] opacity-100 group-hover:opacity-0" style={{background: 'radial-gradient(15% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '8px', filter: 'blur(15px)'}}></div>

<div className="absolute inset-0 pointer-events-none transition-opacity ease-in-out duration-[1200ms] opacity-0 group-hover:opacity-100" style={{background: 'radial-gradient(60.6% 50% at 50% 100%, rgb(234, 179, 8) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '8px', filter: 'blur(18px)'}}></div>

<div className="absolute inset-0 pointer-events-none will-change-auto transition-opacity ease-in-out duration-[1200ms] opacity-100 group-hover:opacity-0" style={{background: 'radial-gradient(10.7% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '8px'}}></div>

<div className="absolute inset-0 pointer-events-none will-change-auto transition-opacity ease-in-out duration-[1200ms] opacity-0 group-hover:opacity-100" style={{background: 'radial-gradient(60.1% 50% at 50% 100%, rgb(234, 179, 8) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '8px'}}></div>

<div className="absolute inset-[1px] pointer-events-none z-10 rounded-[7px]" style={{backgroundColor: 'rgb(0, 0, 0)', opacity: '1'}}></div>

<div className="relative z-20 flex items-center justify-center gap-2 opacity-100">
<span className="m-0 p-0 font-sans text-[15px] font-medium text-white tracking-wide" style={{WebkitFontSmoothing: 'antialiased', textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>
                    Submit Query
                  </span>
<svg className="lucide lucide-arrow-right transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</button>
</div>
</form>
</div>
</div>
</section>
<footer className="overflow-hidden border-dashed text-white bg-black w-full border-zinc-800 border-t relative">

<div className="w-full max-w-7xl mx-auto border-x border-dashed border-zinc-800">

<div className="grid lg:grid-cols-12">

<div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-dashed border-zinc-800 relative min-h-[360px] [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<div className="">

<div className="flex items-center gap-3 mb-8">
<div className="grid grid-cols-2 gap-1 w-8 h-8 opacity-90">
<div className="bg-[#eab308] w-full h-full rounded-sm"></div>
<div className="w-full h-full bg-zinc-700 rounded-sm [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll"></div>
<div className="w-full h-full bg-zinc-800 rounded-sm"></div>
<div className="w-full h-full bg-white rounded-sm shadow-[0_0_10px_rgba(255,255,255,0.4)]"></div>
</div>
<span className="text-2xl font-bold tracking-tight text-white font-manrope">
                  Architect
                </span>
</div>
<p className="text-zinc-400 max-w-sm text-sm leading-relaxed mb-12 font-medium">
                Engineering digital foundations.
              </p>
</div>

<div className="flex items-center gap-3 mt-auto">
<a className="w-10 h-10 flex items-center justify-center border border-dashed border-zinc-700 hover:border-yellow-500 hover:bg-yellow-600/10 hover:text-yellow-500 transition-all duration-300 rounded text-zinc-400 group" href="#">
<svg className="lucide lucide-instagram" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="w-10 h-10 flex items-center justify-center border border-dashed border-zinc-700 hover:border-yellow-500 hover:bg-yellow-600/10 hover:text-yellow-500 transition-all duration-300 rounded text-zinc-400 group" href="#">
<svg className="lucide lucide-twitter" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
</div>
</div>

<div className="lg:col-span-7 p-8 md:p-12 bg-black/50">
<div className="grid grid-cols-2 md:grid-cols-3 gap-10 h-full content-start">

<div className="flex flex-col gap-8">
<h4 className="uppercase text-xs font-bold text-[#eab308] tracking-widest font-manrope">
                  Index
                </h4>
<div className="flex flex-col gap-5">
<a className="group flex items-center justify-between text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">
                    SYSTEMS
                    <svg className="lucide lucide-chevron-right opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-yellow-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m9 18 6-6-6-6"></path>
</svg>
</a>
<a className="group flex items-center justify-between text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">
                    PROTOCOL
                    <svg className="lucide lucide-chevron-right opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-yellow-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</div>

<div className="w-full border-t border-dashed border-zinc-800"></div>

<div className="w-full h-auto py-12 md:py-24 px-4 overflow-hidden flex justify-center items-center relative bg-black select-none [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)] pointer-events-none"></div>
<h2 className="text-[14vw] leading-[0.8] font-bold text-transparent tracking-tighter pointer-events-none font-manrope" style={{WebkitTextStroke: '1px rgba(63, 63, 70, 0.5)'}}>
            ARCHITECT
          </h2>

<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
</div>
</div>

<div className="w-full py-8 text-center border-t border-dashed border-zinc-800 bg-black z-20 relative [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll">
<p className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em] font-sans">
          Constructed by
          <a className="hover:text-white transition-colors text-[#eab308]" href="#"></a></p></div></footer>
    </>
  );
}
