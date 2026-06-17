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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200 text-zinc-950">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-950 text-white flex items-center justify-center font-semibold text-sm rounded-md tracking-tight">
                    GN
                </div>
<span className="font-semibold text-lg tracking-tight">GlobalNode</span>
</div>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-950 transition-colors" href="#">About</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-950 transition-colors" href="#">Services</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-950 transition-colors" href="#">Tech Stack</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-950 transition-colors" href="#">Process</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-950 transition-colors" href="#">Work</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-950 transition-colors" href="#">Career</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-950 transition-colors" href="#">Contact</a>
</nav>

<div className="flex items-center gap-4">
<button className="hidden sm:inline-flex bg-zinc-950 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors items-center justify-center">
                    GET STARTED
                </button>
<button className="lg:hidden p-2 text-zinc-600 hover:text-zinc-950 flex items-center justify-center">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</header>

<main className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[100dvh]">

<div className="absolute inset-0 pointer-events-none z-0">
<img alt="Abstract Background" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/30"></div>
<div className="absolute inset-0 bg-zinc-950/40 backdrop-blur-[2px]"></div>
</div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
<div className="absolute w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-3xl translate-x-1/3 -translate-y-1/4"></div>
<div className="absolute w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/4"></div>
</div>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJub25lIi8+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none z-0"></div>
<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
<div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">

<div className="lg:col-span-7 flex flex-col items-start z-10">

<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-[1px] bg-zinc-600"></div>
<span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">
                            Software Development &amp; IT Services
                        </span>
</div>

<h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-semibold text-white tracking-tight leading-[1.05] mb-6 drop-shadow-sm">
                        Reinventing Every<br/> Product With AI
                    </h1>

<p className="text-lg sm:text-xl text-zinc-300 leading-relaxed mb-10 max-w-2xl drop-shadow-sm">
                        We build intelligent software that transforms how businesses operate and grow. Leverage advanced machine learning to automate complex processes and unlock new revenue streams.
                    </p>

<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-16 sm:mb-20">
<button className="flex items-center justify-center gap-2 bg-white text-zinc-950 px-6 py-3.5 rounded-lg text-sm font-medium hover:bg-zinc-100 transition-colors w-full sm:w-auto">
                            START YOUR PROJECT
                            <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="flex items-center justify-center gap-2 bg-zinc-950/50 backdrop-blur-md border border-zinc-700 text-white px-6 py-3.5 rounded-lg text-sm font-medium hover:bg-zinc-900 hover:border-zinc-600 transition-colors w-full sm:w-auto">
                            VIEW OUR WORK
                        </button>
</div>

<div className="grid grid-cols-3 gap-6 sm:gap-12 w-full pt-8 border-t border-zinc-700/60">
<div className="flex flex-col">
<span className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-1 drop-shadow-sm">50+</span>
<span className="text-sm text-zinc-400 font-medium">Projects Delivered</span>
</div>
<div className="flex flex-col">
<span className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-1 drop-shadow-sm">8+</span>
<span className="text-sm text-zinc-400 font-medium">Years Experience</span>
</div>
<div className="flex flex-col">
<span className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-1 drop-shadow-sm">30+</span>
<span className="text-sm text-zinc-400 font-medium">Happy Clients</span>
</div>
</div>
</div>

<div className="lg:col-span-5 relative lg:ml-10 mt-12 lg:mt-0">

<div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-[4/5] rounded-2xl border border-zinc-700/50 bg-zinc-900/40 backdrop-blur-2xl overflow-hidden group shadow-2xl shadow-black/80 ring-1 ring-white/10">

<div className="absolute inset-0 bg-gradient-to-br from-zinc-800/30 via-transparent to-transparent opacity-50"></div>

<div className="absolute top-4 left-4 flex gap-1.5 z-20">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-600/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-600/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-600/50"></div>
</div>

<div className="absolute inset-0 flex items-center justify-center z-10">

<div className="relative w-64 h-64 border border-zinc-600/30 rounded-full flex items-center justify-center before:absolute before:inset-0 before:rounded-full before:border-t before:border-zinc-300/50 before:animate-[spin_4s_linear_infinite]">
<div className="absolute w-[120%] h-[120%] border border-dashed border-zinc-700/60 rounded-full animate-[spin_60s_linear_infinite_reverse]"></div>

<div className="absolute w-full h-[1px] bg-zinc-700/50 rotate-45"></div>
<div className="absolute w-[1px] h-full bg-zinc-700/50 rotate-45"></div>

<div className="relative w-20 h-20 bg-zinc-950 border border-zinc-700 rounded-full flex items-center justify-center shadow-[0_0_40px_10px_rgba(255,255,255,0.05)]">
<span className="text-xl font-semibold tracking-tight text-white z-10">AI</span>

<div className="absolute inset-0 rounded-full bg-white/5 blur-md"></div>
</div>
</div>
</div>

<div className="absolute right-6 top-16 w-32 h-16 border border-zinc-700/50 bg-zinc-950/60 backdrop-blur-md rounded-lg p-3 hidden sm:flex flex-col gap-1.5 z-10">
<div className="w-full h-1 bg-zinc-700 rounded-full"></div>
<div className="w-3/4 h-1 bg-zinc-700 rounded-full"></div>
<div className="w-1/2 h-1 bg-zinc-600 rounded-full mt-1"></div>
</div>

<div className="absolute inset-0 flex items-center justify-center z-30 transition-all duration-300">
<button className="w-16 h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-105 hover:border-white/30 transition-all duration-300 shadow-2xl cursor-pointer">
<iconify-icon className="ml-1 text-white" height="28" icon="solar:play-linear" width="28"></iconify-icon>
</button>
</div>
</div>

<div className="absolute -inset-4 bg-white/5 rounded-[2rem] blur-2xl -z-10 opacity-50"></div>
</div>
</div>
</div>
</main>

    </>
  );
}
