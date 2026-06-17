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
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
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
      

<div className="grid-lines">
<div className="grid-line"></div>
<div className="grid-line hidden md:block"></div>
<div className="grid-line hidden md:block"></div>
<div className="grid-line"></div>
</div>

<div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 animate-slide-up [animation-delay:0.5s] opacity-0">
<nav className="w-full max-w-4xl flex items-center justify-between px-2 py-2 pr-6 border border-white/10 bg-neutral-900/80 backdrop-blur-xl rounded-full shadow-2xl transition-all duration-300">

<div className="flex items-center gap-3 pl-4">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black">
<iconify-icon icon="solar:infinity-bold" width="18"></iconify-icon>
</div>
<span className="font-bricolage font-semibold text-lg tracking-tight">Velos</span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
<a className="text-white hover:text-white transition-colors" href="#">Atelier</a>
<a className="hover:text-white transition-colors" href="#projects">Selected Works</a>
<a className="hover:text-white transition-colors" href="#process">Substance</a>
<a className="hover:text-white transition-colors" href="#careers">Join</a>
<a className="hover:text-white transition-colors" href="#methodology">Methodology</a>
</div>

<div className="flex items-center gap-2">
<button className="w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
<button className="relative w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors group">
<iconify-icon className="" icon="solar:menu-dots-square-linear" width="20"></iconify-icon>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
</button>
</div>
</nav>
</div>

<header className="relative w-full h-screen overflow-hidden flex flex-col justify-end pb-12 md:pb-24">

<div className="absolute inset-0 z-0 bg-black">
<img alt="Brutalist Architecture Detail" className="w-full h-full object-cover animate-cinematic opacity-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/182d91e1-5681-49cf-a16e-4d56864a24ff_3840w.webp"/>

<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80"></div>
<div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
</div>

<div className="absolute top-32 right-6 md:right-12 z-20 flex flex-col items-end gap-2 animate-slide-up [animation-delay:2.5s] opacity-0">
<div className="px-4 py-2 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-mono tracking-wider uppercase text-white/90">Live: Tokyo Project</span>
</div>
</div>
<div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">

<div className="md:col-span-7 relative">

<div className="flex items-center gap-3 mb-6 animate-slide-up [animation-delay:1.2s] opacity-0">
<span className="h-[1px] w-8 bg-white/60"></span>
<span className="text-xs font-mono uppercase tracking-widest text-white/80">Est. 2024</span>
</div>
<h1 className="font-bricolage font-bold text-white leading-[0.85] tracking-tight">
<span className="block text-[15vw] md:text-[9rem] lg:text-[11rem] animate-slide-up [animation-delay:1.4s] opacity-0 mix-blend-normal text-white drop-shadow-2xl">VOID</span>
<div className="flex items-baseline gap-4 md:gap-8 -mt-2 md:-mt-8 animate-slide-up [animation-delay:1.6s] opacity-0">
<span className="text-[15vw] md:text-[9rem] lg:text-[11rem] font-serif italic font-thin text-white/60">&amp;</span>
<span className="text-[15vw] md:text-[9rem] lg:text-[11rem] text-white drop-shadow-2xl">MASS</span>
</div>
</h1>
</div>

<div className="md:col-span-4 md:col-start-9 flex flex-col justify-end pb-4 md:pb-8">

<div className="relative overflow-hidden bg-neutral-950/60 backdrop-blur-2xl border border-white/10 p-8 rounded-2xl shadow-2xl animate-slide-up [animation-delay:1.8s] opacity-0 ring-1 ring-white/5">

<div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent z-0 pointer-events-none animate-shimmer-effect"></div>
<div className="relative z-10">
<p className="text-lg md:text-xl text-white font-light leading-relaxed mb-8 antialiased drop-shadow-md">
                            We sculpt the negative space. A reductionist approach to modern living that prioritizes light, silence, and raw materiality over ornamentation.
                        </p>
<div className="flex flex-col gap-6">
<div className="grid grid-cols-2 gap-4 border-t border-white/20 pt-6">
<div>
<span className="block text-[10px] uppercase tracking-widest text-white/50 mb-1">Projects</span>
<span className="text-2xl font-bricolage text-white">42</span>
</div>
<div>
<span className="block text-[10px] uppercase tracking-widest text-white/50 mb-1">Awards</span>
<span className="text-2xl font-bricolage text-white">18</span>
</div>
</div>
<a className="group flex items-center justify-between w-full p-1 border-b border-white/30 hover:border-white transition-colors pb-2" href="#projects">
<span className="text-sm font-medium tracking-wide text-white">Explore Portfolio</span>
<iconify-icon className="text-white group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-slide-up [animation-delay:2.2s] opacity-0">
<span className="text-[10px] uppercase tracking-widest text-white/40">Scroll</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
</div>
</header>

<section className="bg-[#fdfdfd] text-neutral-900 py-24 md:py-32 relative overflow-hidden" id="projects">

<div className="absolute top-12 left-6 md:left-12 z-0 opacity-[0.05] font-bricolage font-bold text-[8rem] md:text-[12rem] leading-none text-black pointer-events-none select-none">
            VOL. II
        </div>

<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
<div>
<span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-medium mb-4 block">Selected Works</span>
<h2 className="text-5xl md:text-7xl leading-[0.95] tracking-tighter font-bricolage font-light text-neutral-900">
                        Defined <br/>
<span className="text-neutral-300 font-bricolage font-light">Horizons.</span>
</h2>
</div>
<div className="flex gap-8 items-baseline border-b border-neutral-100 pb-2">
<button className="text-2xl md:text-3xl text-neutral-900 font-bricolage font-light border-b-2 border-black pb-1">Private</button>
<button className="md:text-3xl hover:text-neutral-500 transition-colors text-2xl font-light text-neutral-300 font-bricolage pb-1">Public</button>
<button className="text-2xl md:text-3xl text-neutral-300 hover:text-neutral-500 transition-colors font-bricolage font-light pb-1">Experimental</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative h-[520px] w-full bg-[#151515] rounded-[32px] overflow-hidden flex flex-col justify-between p-8 transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both]">
<div className="absolute top-0 right-0 p-6 opacity-40 z-20 group-hover:opacity-100 transition-opacity">
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm text-white">
<iconify-icon icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
</div>
<div className="absolute inset-0 w-full h-full">
<img alt="Modern Villa" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4774bd65-dd1f-43a8-9d99-2b78ca5ea386_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent"></div>
</div>
<div className="mt-auto relative z-10">
<div className="mb-4">
<iconify-icon className="text-white/80" height="32" icon="solar:home-angle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-white text-3xl tracking-tight leading-none mb-4 font-bricolage font-light">Casa Nocturna</h3>
<div className="flex justify-between items-center text-white/90 border-t border-white/10 pt-5">
<span className="text-xl font-serif italic">Finalized</span>
<span className="text-xs tracking-wide uppercase text-white/50">Mexico City</span>
</div>
</div>
</div>

<div className="group relative h-[520px] w-full bg-[#151515] rounded-[32px] overflow-hidden flex flex-col justify-between p-8 transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both]">
<div className="absolute top-0 right-0 p-6 opacity-40 z-20 group-hover:opacity-100 transition-opacity">
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm text-white">
<iconify-icon icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
</div>
<div className="absolute inset-0 w-full h-full">
<img alt="Glass Tower" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2a662871-accd-4114-b384-662748965262_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent"></div>
</div>
<div className="mt-auto relative z-10">
<div className="mb-4">
<iconify-icon className="text-white/80" height="32" icon="solar:buildings-linear" width="32"></iconify-icon>
</div>
<h3 className="text-white text-3xl tracking-tight leading-none mb-4 font-bricolage font-light">Vertex HQ</h3>
<div className="flex justify-between items-center text-white/90 border-t border-white/10 pt-5">
<span className="text-xl font-serif italic">Developing</span>
<span className="text-xs tracking-wide uppercase text-white/50">Singapore</span>
</div>
</div>
</div>

<div className="group relative h-[520px] w-full bg-[#151515] rounded-[32px] overflow-hidden flex flex-col justify-between p-8 transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl animate-on-scroll [animation:animationIn_0.8s_ease-out_0.5s_both]">
<div className="absolute top-0 right-0 p-6 opacity-40 z-20 group-hover:opacity-100 transition-opacity">
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm text-white">
<iconify-icon icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
</div>
<div className="absolute inset-0 w-full h-full">
<img alt="Zen Garden" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0bd8636d-7546-4246-b9ad-5d35e6af5f29_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent"></div>
</div>
<div className="mt-auto relative z-10">
<div className="mb-4">
<iconify-icon className="text-white/80" height="32" icon="solar:tea-cup-linear" width="32"></iconify-icon>
</div>
<h3 className="text-white text-3xl tracking-tight leading-none mb-4 font-bricolage font-light">Lotus Gallery</h3>
<div className="flex justify-between items-center text-white/90 border-t border-white/10 pt-5">
<span className="text-xl font-serif italic">Awarded</span>
<span className="text-xs tracking-wide uppercase text-white/50">Bangkok</span>
</div>
</div>
</div>
</div>
<div className="mt-16 flex justify-center animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both]">
<button className="group flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl">
<span className="font-medium tracking-wide">Explore All Projects</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="bg-neutral-950 border-t border-white/5 py-24 px-6 relative" id="process">

<div className="absolute top-12 right-6 md:right-12 z-0 opacity-10 font-bricolage font-bold text-[8rem] md:text-[10rem] leading-none text-white pointer-events-none select-none tracking-tighter">
            VOL. III
        </div>
<div className="w-full max-w-5xl mx-auto relative z-10">
<div className="text-center mb-16 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
<h3 className="text-3xl md:text-5xl font-bricolage font-light text-white mb-4">Tactile Substance</h3>
<p className="text-white/50">Engineered elements for the new era of durability.</p>
</div>
<div className="flex flex-col gap-4">

<div className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-4 md:p-6 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl transition-all duration-300 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both]">

<div className="col-span-1 md:col-span-4 flex items-center gap-6">
<div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-xl overflow-hidden shrink-0 relative flex items-center justify-center">
<img alt="Concrete Texture" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/33b2ce34-6e4a-4514-b20d-7104ecf14efd_320w.webp" style={{}}/>
</div>
<div>
<iconify-icon className="text-white/60 mb-1" icon="solar:layers-minimalistic-linear" width="32"></iconify-icon>
<h4 className="text-xl text-white font-bricolage font-light">Travertine Slate</h4>
<p className="text-xs text-white/40 mt-1 uppercase tracking-wider">Honed Finish</p>
</div>
</div>

<div className="col-span-1 md:col-span-6 grid grid-cols-3 gap-y-4 gap-x-2 border-l border-white/10 pl-6">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-wide">
<iconify-icon icon="solar:scale-linear" width="14"></iconify-icon> Weight
                            </div>
<span className="text-white text-sm">2800 kg/m³</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-wide">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon> Origin
                            </div>
<span className="text-white text-sm">Tuscany</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-wide">
<iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon> Rating
                            </div>
<span className="text-white text-sm">Class A1 Fire</span>
</div>
<div className="col-span-3 mt-2">
<div className="flex items-center justify-between text-xs text-white/30 mb-1">
<span>Acoustic Damping</span>
<span>Freq. Response</span>
</div>
<div className="w-full h-8 flex items-end gap-0.5 opacity-50">
<div className="w-1 bg-white h-[40%] rounded-t-sm"></div>
<div className="w-1 bg-white h-[60%] rounded-t-sm"></div>
<div className="w-1 bg-white h-[80%] rounded-t-sm"></div>
<div className="w-1 bg-white h-[65%] rounded-t-sm"></div>
<div className="w-1 bg-white h-[50%] rounded-t-sm"></div>
<div className="w-1 bg-white h-[45%] rounded-t-sm"></div>
<div className="w-1 bg-white h-[60%] rounded-t-sm"></div>
<div className="w-1 bg-white h-[75%] rounded-t-sm"></div>
<div className="w-1 bg-white h-[90%] rounded-t-sm"></div>
<div className="w-1 bg-white h-[70%] rounded-t-sm"></div>
<div className="w-1 bg-white h-[55%] rounded-t-sm"></div>
<div className="w-1 bg-white h-[40%] rounded-t-sm"></div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 flex items-center justify-between md:justify-end gap-6">
<span className="text-xl font-serif italic text-white">Tier S</span>
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors group-hover:border-white">
<iconify-icon className="" icon="solar:file-download-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-4 md:p-6 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl transition-all duration-300 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both]">

<div className="col-span-1 md:col-span-4 flex items-center gap-6">
<div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-xl overflow-hidden shrink-0 relative flex items-center justify-center">
<img alt="Timber Texture" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e4989cc-80c7-45b1-9eb3-3f72b473d778_320w.jpg"/>
</div>
<div>
<iconify-icon className="text-white/60 mb-1" icon="solar:tree-linear" width="32"></iconify-icon>
<h4 className="text-xl text-white font-bricolage font-light">Oxidized Copper</h4>
<p className="text-xs text-white/40 mt-1 uppercase tracking-wider">Patina Green</p>
</div>
</div>

<div className="col-span-1 md:col-span-6 grid grid-cols-3 gap-y-4 gap-x-2 border-l border-white/10 pl-6">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-wide">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon> Life
                            </div>
<span className="text-white text-sm">100+ Years</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-wide">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon> Recycled
                            </div>
<span className="text-white text-sm">95% Content</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-wide">
<iconify-icon icon="solar:umbrella-linear" width="14"></iconify-icon> Coating
                            </div>
<span className="text-white text-sm">Self-Healing</span>
</div>
<div className="col-span-3 mt-2">
<div className="flex items-center justify-between text-xs text-white/30 mb-1">
<span>Reflectivity Index</span>
<span>Solar Gain</span>
</div>
<div className="w-full h-8 flex items-end gap-0.5 opacity-50">
<div className="w-1 bg-white h-[50%] rounded-t-sm"></div>
<div className="w-1 bg-white h-[52%] rounded-t-sm"></div>
<div className="w-1 bg-white h-[55%] rounded-t-sm"></div>
<div className="w-1 bg-white h-[58%] rounded-t-sm"></div>
<div className="w-1 bg-white h-[60%] rounded-t-sm"></div>
<div className="w-1 bg-white h-[60%] rounded-t-sm"></div>
<div className="w-1 bg-white h-[60%] rounded-t-sm"></div>
<div className="w-1 bg-white h-[58%] rounded-t-sm"></div>
<div className="w-1 bg-white h-[55%] rounded-t-sm"></div>
<div className="w-1 bg-white h-[52%] rounded-t-sm"></div>
<div className="w-1 bg-white h-[50%] rounded-t-sm"></div>
<div className="w-1 bg-white h-[48%] rounded-t-sm"></div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 flex items-center justify-between md:justify-end gap-6">
<span className="text-xl font-serif italic text-white">Tier A</span>
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors group-hover:border-white">
<iconify-icon icon="solar:file-download-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-950 border-t border-white/5 py-24 px-6 relative" id="careers">
<div className="w-full max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
<div>
<span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-medium mb-4 block">Opportunities</span>
<h2 className="text-5xl md:text-6xl leading-[0.95] tracking-tighter font-bricolage font-light text-white">
                        Shape the <br/>
<span className="text-white/50 font-bricolage font-light">Skyline.</span>
</h2>
</div>
<p className="text-white/60 text-lg max-w-md font-light border-l border-white/10 pl-6">
                    We are searching for minds that refuse to accept the standard geometry of today.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

<div className="lg:col-span-8 flex flex-col gap-3">

<div className="group grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl transition-all duration-300 cursor-pointer animate-on-scroll">
<div className="col-span-1 md:col-span-6 flex items-center gap-5">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white shrink-0 border border-white/10 group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon icon="solar:ruler-pen-linear" width="22"></iconify-icon>
</div>
<div>
<h4 className="text-lg text-white font-bricolage font-normal group-hover:translate-x-1 transition-transform">Design Principal</h4>
<div className="flex items-center gap-3 mt-1 text-sm text-white/40">
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear" width="12"></iconify-icon> London</span>
<span className="w-1 h-1 rounded-full bg-white/20"></span>
<span>Creative</span>
</div>
</div>
</div>
<div className="col-span-1 md:col-span-4 flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full border border-white/10 text-[11px] uppercase tracking-wider text-white/60 bg-white/5">Full-time</span>
</div>
<div className="col-span-1 md:col-span-2 flex justify-end">
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:text-white group-hover:border-white transition-all">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl transition-all duration-300 cursor-pointer animate-on-scroll">
<div className="col-span-1 md:col-span-6 flex items-center gap-5">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white shrink-0 border border-white/10 group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon icon="solar:sofa-linear" width="22"></iconify-icon>
</div>
<div>
<h4 className="text-lg text-white font-bricolage font-normal group-hover:translate-x-1 transition-transform">Atmosphere Director</h4>
<div className="flex items-center gap-3 mt-1 text-sm text-white/40">
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear" width="12"></iconify-icon> Global</span>
<span className="w-1 h-1 rounded-full bg-white/20"></span>
<span>Interiors</span>
</div>
</div>
</div>
<div className="col-span-1 md:col-span-4 flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full border border-white/10 text-[11px] uppercase tracking-wider text-white/60 bg-white/5">Contract</span>
</div>
<div className="col-span-1 md:col-span-2 flex justify-end">
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:text-white group-hover:border-white transition-all">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl transition-all duration-300 cursor-pointer animate-on-scroll">
<div className="col-span-1 md:col-span-6 flex items-center gap-5">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white shrink-0 border border-white/10 group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon icon="solar:clipboard-check-linear" width="22"></iconify-icon>
</div>
<div>
<h4 className="text-lg text-white font-bricolage font-normal group-hover:translate-x-1 transition-transform">Site Lead</h4>
<div className="flex items-center gap-3 mt-1 text-sm text-white/40">
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear" width="12"></iconify-icon> Dubai</span>
<span className="w-1 h-1 rounded-full bg-white/20"></span>
<span>Engineering</span>
</div>
</div>
</div>
<div className="col-span-1 md:col-span-4 flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full border border-white/10 text-[11px] uppercase tracking-wider text-white/60 bg-white/5">Project</span>
</div>
<div className="col-span-1 md:col-span-2 flex justify-end">
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:text-white group-hover:border-white transition-all">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="lg:col-span-4 pl-0 lg:pl-12">
<div className="bg-white/5 border border-white/5 rounded-3xl p-8 sticky top-32 backdrop-blur-md">
<div className="flex items-center justify-between mb-8">
<h3 className="text-white font-bricolage font-light text-xl">Refine Search</h3>
<button className="text-xs text-white/40 hover:text-white transition-colors underline">Clear</button>
</div>

<div className="mb-8">
<h4 className="text-xs uppercase tracking-widest text-white/40 font-medium mb-4">Focus Area</h4>
<div className="space-y-3">
<label className="flex items-center gap-3 group cursor-pointer">
<div className="relative flex items-center justify-center">
<input checked="" className="peer appearance-none w-5 h-5 rounded border border-white/20 checked:bg-white checked:border-white transition-colors" type="checkbox"/>
<iconify-icon className="absolute text-black opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-white/70 group-hover:text-white transition-colors text-sm">Design (5)</span>
</label>
<label className="flex items-center gap-3 group cursor-pointer">
<div className="relative flex items-center justify-center">
<input className="peer appearance-none w-5 h-5 rounded border border-white/20 checked:bg-white checked:border-white transition-colors" type="checkbox"/>
<iconify-icon className="absolute text-black opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-white/70 group-hover:text-white transition-colors text-sm">Tech (2)</span>
</label>
</div>
</div>

<div className="">
<h4 className="text-xs uppercase tracking-widest text-white/40 font-medium mb-4">Region</h4>
<div className="space-y-3">
<label className="flex items-center gap-3 group cursor-pointer">
<div className="relative flex items-center justify-center">
<input checked="" className="peer appearance-none w-5 h-5 rounded-full border border-white/20 checked:border-white transition-colors" name="location" type="radio"/>
<div className="absolute w-2.5 h-2.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-white/70 group-hover:text-white transition-colors text-sm">Global</span>
</label>
<label className="flex items-center gap-3 group cursor-pointer">
<div className="relative flex items-center justify-center">
<input className="peer appearance-none w-5 h-5 rounded-full border border-white/20 checked:border-white transition-colors" name="location" type="radio"/>
<div className="absolute w-2.5 h-2.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-white/70 group-hover:text-white transition-colors text-sm">HQ Only</span>
</label>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#f8f8f8] text-neutral-900 py-32 px-6 relative border-t border-neutral-200" id="methodology">
<div className="w-full max-w-7xl mx-auto relative z-10">
<div className="flex flex-col items-center text-center mb-24 animate-on-scroll">
<span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-medium mb-4 block">Core Principles</span>
<h2 className="text-4xl md:text-5xl font-bricolage font-light text-neutral-900 mb-6">The Methodology</h2>
<p className="text-neutral-500 text-lg max-w-xl font-light">From abstract thought to concrete reality, our workflow is a disciplined reduction of chaos.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="group bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-on-scroll [animation-delay:0.1s]">
<div className="w-14 h-14 rounded-2xl bg-neutral-100 text-neutral-900 flex items-center justify-center mb-6 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:chat-line-linear" width="28"></iconify-icon>
</div>
<span className="block text-xs font-bold text-neutral-400 mb-2 uppercase tracking-wider">Phase I</span>
<h3 className="text-xl font-bricolage font-medium mb-3">Discovery</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Uncovering the hidden potential of the site and the unspoken desires of the inhabitant.</p>
</div>

<div className="group bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-on-scroll [animation-delay:0.2s]">
<div className="w-14 h-14 rounded-2xl bg-neutral-100 text-neutral-900 flex items-center justify-center mb-6 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:pen-new-square-linear" width="28"></iconify-icon>
</div>
<span className="block text-xs font-bold text-neutral-400 mb-2 uppercase tracking-wider">Phase II</span>
<h3 className="text-xl font-bricolage font-medium mb-3">Blueprint</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Translating philosophy into geometry. The first lines are drawn not on paper, but in the mind.</p>
</div>

<div className="group bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-on-scroll [animation-delay:0.3s]">
<div className="w-14 h-14 rounded-2xl bg-neutral-100 text-neutral-900 flex items-center justify-center mb-6 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:documents-linear" width="28"></iconify-icon>
</div>
<span className="block text-xs font-bold text-neutral-400 mb-2 uppercase tracking-wider">Phase III</span>
<h3 className="text-xl font-bricolage font-medium mb-3">Synthesis</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Merging structural integrity with aesthetic purity. Every joint and junction is calculated.</p>
</div>

<div className="group bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-on-scroll [animation-delay:0.4s]">
<div className="w-14 h-14 rounded-2xl bg-neutral-100 text-neutral-900 flex items-center justify-center mb-6 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:hammer-2-linear" width="28"></iconify-icon>
</div>
<span className="block text-xs font-bold text-neutral-400 mb-2 uppercase tracking-wider">Phase IV</span>
<h3 className="text-xl font-bricolage font-medium mb-3">Execution</h3>
<p className="text-sm text-neutral-500 leading-relaxed">The final act of creation. Where our vision becomes your permanent reality.</p>
</div>
</div>
<div className="mt-20 text-center animate-on-scroll">
<a className="inline-flex items-center gap-2 text-neutral-900 border-b border-neutral-900 pb-0.5 hover:text-neutral-600 hover:border-neutral-600 transition-colors" href="#">
                    Initiate Collaboration
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="bg-black text-white py-16 px-6 border-t border-white/10 relative z-10">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black">
<iconify-icon icon="solar:infinity-bold" width="18"></iconify-icon>
</div>
<h2 className="text-2xl font-bricolage font-semibold">Velos</h2>
</div>
<p className="text-white/50 max-w-xs mb-8">Architecting the void. We build for the next century, using the materials of the past.</p>
<div className="flex gap-4">
<input className="bg-white/5 border border-white/10 rounded-full px-6 py-3 w-64 focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/20" placeholder="Email address" type="email"/>
<button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-neutral-200 transition-colors">Connect</button>
</div>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-medium text-lg mb-2">Velos</h4>
<a className="text-white/60 hover:text-white transition-colors" href="#">Manifesto</a>
<a className="text-white/60 hover:text-white transition-colors" href="#">Collective</a>
<a className="text-white/60 hover:text-white transition-colors" href="#">Recognition</a>
<a className="text-white/60 hover:text-white transition-colors" href="#">Newsroom</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-medium text-lg mb-2">Works</h4>
<a className="text-white/60 hover:text-white transition-colors" href="#">Private Estates</a>
<a className="text-white/60 hover:text-white transition-colors" href="#">Corporate Spires</a>
<a className="text-white/60 hover:text-white transition-colors" href="#">Civic Spaces</a>
<a className="text-white/60 hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
<p>© 2024 Velos Group. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
</div></div></footer>
    </>
  );
}
