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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            particlesJS('particles-js', {
                particles: {
                    number: { value: 40, density: { enable: true, value_area: 800 } },
                    color: { value: "#ffffff" },
                    shape: { type: "circle" },
                    opacity: { value: 0.3, random: false },
                    size: { value: 2, random: true },
                    line_linked: { enable: true, distance: 150, color: "#34d399", opacity: 0.2, width: 1 },
                    move: { enable: true, speed: 1, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
                    modes: { grab: { distance: 140, line_linked: { opacity: 0.5 } }, push: { particles_nb: 2 } }
                },
                retina_detect: true
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
      

<div className="fixed inset-0 z-[5] pointer-events-none mix-blend-screen opacity-60">
<div className="absolute inset-0 w-full h-full" id="particles-js"><canvas className="particles-js-canvas-el" height="1538" style={{width: '100%', height: '100%'}} width="2000"></canvas></div>
</div>
<div className="relative min-h-screen flex flex-col">

<div className="pointer-events-none absolute inset-0 z-0">

<div className="absolute inset-y-0 left-[12.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-[25%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-[37.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-[50%] w-px bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent"></div>
<div className="absolute inset-y-0 left-[62.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-[75%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-[87.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>

<div className="absolute inset-x-0 top-[20%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-x-0 top-[40%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-x-0 top-[60%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-x-0 top-[80%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

<div className="absolute inset-0 opacity-30 mix-blend-luminosity">
<img alt="Background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/20"></div>
<div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950"></div>
</div>
</div>

<header className="z-20 border-white/5 border-b relative">
<div className="flex md:px-8 max-w-7xl mx-auto pt-5 pb-5 px-6 items-center justify-between">

<div className="flex md:gap-6 ring-white/5 ring-1 rounded-full p-1 items-center bg-white/5 backdrop-blur-md animate-fade-in" style={{animationDelay: '0.1s'}}>

<a className="flex items-center gap-2 pl-4 pr-3 group" href="#">
<iconify-icon className="text-emerald-400 group-hover:text-emerald-300 transition-colors" height="20" icon="solar:leaf-linear" width="20"></iconify-icon>
<span className="font-medium text-lg tracking-tight text-white">EarthCare</span>
</a>

<nav className="hidden md:flex gap-1 items-center pr-1">
<a className="inline-flex items-center gap-2 text-sm font-medium text-white/90 bg-white/10 ring-white/10 ring-1 rounded-full px-4 py-2 backdrop-blur-sm transition-colors" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
                            Start
                        </a>
<a className="inline-flex items-center text-sm font-medium text-white/60 hover:text-white/90 hover:bg-white/5 rounded-full px-4 py-2 transition-colors" href="#">Initiatives</a>
<a className="inline-flex items-center text-sm font-medium text-white/60 hover:text-white/90 hover:bg-white/5 rounded-full px-4 py-2 transition-colors" href="#">Results</a>
<a className="inline-flex items-center text-sm font-medium text-white/60 hover:text-white/90 hover:bg-white/5 rounded-full px-4 py-2 transition-colors" href="#">Our Story</a>
</nav>
</div>

<div className="flex ring-white/5 ring-1 rounded-full p-1 items-center bg-white/5 backdrop-blur-md animate-fade-in" style={{animationDelay: '0.2s'}}>
<button className="inline-flex gap-2 hover:bg-slate-200 transition-colors text-sm font-medium text-slate-900 bg-white rounded-full pt-2 pr-5 pb-2 pl-5 gap-x-2 gap-y-2 items-center cursor-pointer" onclick="window.location.href='https://www.youtube.com/'" role="button">
                        Support Us
                    </button>
</div>
</div>
</header>

<main className="z-20 flex-1 flex relative items-center justify-center pt-12 pb-24 lg:pt-0">
<section className="px-6 md:px-8 max-w-7xl w-full mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

<div className="lg:col-span-6 relative">

<div className="inline-flex items-center gap-2 text-xs font-medium text-white/80 bg-white/5 ring-white/10 ring-1 rounded-full px-3 py-1.5 mb-6 backdrop-blur-sm animate-fade-in" style={{animationDelay: '0.1s'}}>
<div className="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.6)]"></div>
                            Partnered with EcoTrust
                        </div>

<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter leading-[1.05] text-white mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
                            Grow a Greener <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-emerald-100 to-white/70">
                                Tomorrow
                            </span>
</h1>
<p className="text-lg md:text-xl font-light text-white/60 leading-relaxed max-w-lg mb-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
                            Every Action Counts. We design and build intelligent platforms and community-driven forest management programs to scale sustainable action.
                        </p>

<div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 ring-1 ring-white/20 px-6 py-3 text-sm font-medium hover:bg-neutral-100 transition-colors">
                                Support Initiative
                                <iconify-icon className="" height="16" icon="solar:arrow-right-up-outline" style={{color: 'rgb(15, 23, 42)'}} width="16"></iconify-icon>
</button>
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-white/5 text-white ring-1 ring-white/15 px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors backdrop-blur-sm">
                                Explore Platform
                                <iconify-icon height="16" icon="solar:leaf-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="hidden lg:block lg:col-span-1 relative h-[60%]">
<div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2"></div>
</div>

<div className="lg:col-span-5 relative animate-fade-in" style={{animationDelay: '0.5s'}}>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none"></div>

<div className="relative bg-slate-900/40 ring-1 ring-white/10 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 shadow-2xl overflow-hidden group hover:ring-white/20 transition-colors duration-500">

<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

<div className="flex items-center justify-between mb-10 relative z-10">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<iconify-icon className="text-emerald-400" height="16" icon="solar:leaf-linear" width="16"></iconify-icon>
</div>
<span className="font-medium text-sm tracking-tight text-white">EarthCare</span>
</div>
<div className="flex items-center gap-2 bg-white/5 ring-1 ring-white/10 px-3 py-1 rounded-full">
<span className="w-1 h-1 rounded-full bg-white/80"></span>
<span className="font-medium text-[11px] text-white/80 uppercase tracking-wider">2024</span>
</div>
</div>

<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white leading-tight mb-4 relative z-10">
                                Community <br/> Reforestation <br/> Initiative
                            </h2>
<p className="text-sm text-white/50 mb-10 leading-relaxed relative z-10 max-w-sm">
                                Sustainable tree planting and community-driven forest management programs structured for long-term ecological impact.
                            </p>

<button className="w-full inline-flex items-center justify-between p-1.5 bg-black/40 ring-1 ring-white/10 rounded-full hover:bg-black/60 transition-colors group/btn relative z-10">
<span className="text-white px-5 py-2.5 rounded-full text-sm font-medium">
                                    Support
                                </span>
<span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white ring-1 ring-white/5 group-hover/btn:bg-white group-hover/btn:text-slate-900 transition-all">
<iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</button>
</div>
</div>
</div>
</section>
</main>
</div>



    </>
  );
}
