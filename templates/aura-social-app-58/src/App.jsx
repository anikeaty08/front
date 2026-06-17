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
      

<div className="w-full max-w-[1600px] h-[90vh] bg-[#0A0A0A] rounded-2xl shadow-2xl shadow-black/50 border border-white/10 flex flex-col overflow-hidden relative animate-clip-intro" style={{}}>

<div className="flex z-50 sticky bg-[#0A0A0A]/80 h-12 border-white/5 border-b pr-4 pl-4 top-0 backdrop-blur-md items-center justify-between">
<div className="flex text-amber-700 gap-x-2 gap-y-2">
<div className="w-3 h-3 rounded-full bg-[#2A2A2A] border border-white/5" style={{}}></div>
<div className="w-3 h-3 rounded-full bg-[#2A2A2A] border border-white/5" style={{}}></div>
<div className="bg-[#2A2A2A] w-3 h-3 border-white/5 border rounded-full"></div>
</div>
<div className="flex-1 flex justify-center text-xs text-amber-600 font-medium tracking-wide" style={{}}>
                aura.app
            </div>
<div className="w-16"></div> 
</div>

<main className="flex-1 overflow-y-auto relative scroll-smooth bg-[#0A0A0A]">

<div className="absolute inset-0 pointer-events-none z-0 flex justify-between px-4 sm:px-12 md:px-24 w-full h-full opacity-[0.3]">
<div className="w-px h-full bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
<div className="w-px h-full bg-gradient-to-b from-white/10 via-white/5 to-transparent hidden sm:block"></div>
<div className="w-px h-full bg-gradient-to-b from-white/10 via-white/5 to-transparent hidden md:block"></div>
<div className="w-px h-full bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>

<nav className="relative z-10 w-full max-w-4xl mx-auto mt-8 px-6">
<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg shadow-lg py-4 px-6 flex justify-between items-center" style={{}}>
<div className="flex gap-8 text-xs font-medium text-amber-500 uppercase tracking-widest" style={{}}>
<a className="hover:text-orange-400 transition-colors" href="#" style={{}}>Philosophy</a>
<a className="hover:text-orange-400 transition-colors" href="#" style={{}}>Safety</a>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]" style={{}}></div>
<span className="text-lg font-medium text-amber-200 tracking-tight" style={{}}>NOISELESS</span>
</div>
<div className="flex gap-8 text-xs font-medium text-amber-500 uppercase tracking-widest" style={{}}>
<a className="hover:text-orange-400 transition-colors" href="#" style={{}}>Download</a>
<a className="hover:text-orange-400 transition-colors" href="#" style={{}}>Login</a>
</div>
</div>
</nav>

<section className="z-10 flex flex-col text-center pt-20 pr-4 pb-32 pl-4 relative items-center">

<h1 className="text-7xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9] font-medium text-white mb-12 select-none drop-shadow-2xl" style={{}}>
                    NOISELESS<br/>
<span className="font-normal text-orange-500" style={{}}>CONNECTION</span>
</h1>

<div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-10 w-full max-w-5xl">

<div className="inline-flex items-center gap-3 pl-2 pr-5 py-2 rounded-full bg-white/5 border border-white/10 shadow-sm hover:border-orange-500/30 transition-colors cursor-default group backdrop-blur-sm" style={{}}>
<div className="w-8 h-8 rounded-full bg-black border border-white/10 flex items-center justify-center relative overflow-hidden" style={{}}>
<iconify-icon className="text-white text-lg animate-rotate-slow" icon="solar:infinity-linear" style={{}}></iconify-icon>
</div>
<div className="flex items-center gap-2 text-sm">
<span className="text-amber-500 font-medium uppercase tracking-wider text-xs" style={{}}>System Status</span>
<span className="text-amber-600" style={{}}>→</span>
<span className="text-orange-400 font-medium" style={{}}>Zen Mode</span>
</div>
</div>

<h2 className="md:text-3xl text-2xl font-normal text-orange-400 tracking-tight" style={{}}>
                        Your sanctuary for mindful dialogue.
                    </h2>
</div>

<p className="md:text-xl leading-relaxed antialiased text-lg font-light text-orange-400 max-w-2xl mb-16" style={{}}>
                    See who matters, plan deep conversations, and stay in the moment—without the algorithmic clutter. Aura brings clarity back to your social life.
                </p>

<div className="relative group cursor-pointer">
<div className="absolute -inset-1 bg-orange-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-md transition duration-500" style={{}}></div>

<button className="relative bg-orange-600 h-14 px-10 rounded-full overflow-hidden transition-transform duration-200 active:scale-95 shadow-lg shadow-orange-900/20" style={{}}>

<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="absolute inset-[-100%] w-[300%] h-[300%] animate-[border-beam_4s_linear_infinite] [background:conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_45%,#ffffff_50%,transparent_55%,transparent_100%)]"></div>
</div>

<div className="[--fx-filter:blur(0px)_liquid-glass(0,10)_saturate(1.25)_noise(0.5,1,0)] bg-orange-600 z-0 rounded-full absolute top-[1px] right-[1px] bottom-[1px] left-[1px]">
</div>

<div className="relative z-10 flex items-center gap-3 text-white" style={{}}>
<span className="text-sm font-semibold tracking-widest uppercase">Start Chatting</span>
<iconify-icon className="" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</button>
</div>

<div className="mt-24 pt-10 border-t border-white/5 w-full max-w-4xl mx-auto" style={{}}>
<p className="text-xs text-amber-600 uppercase tracking-widest mb-8 font-medium" style={{}}>Loved by teams at</p>
<div className="flex flex-wrap md:gap-20 hover:text-amber-400 transition-all duration-500 text-amber-700 gap-x-12 gap-y-12 justify-center" style={{}}>
<iconify-icon className="current-color" height="36" icon="simple-icons:linear" width="96"></iconify-icon>
<svg className="current-color" data-icon-set="simple-icons" data-simple-icons="vercel" height="36" style={{}} viewbox="0 0 24 24" width="96" xmlns="http://www.w3.org/2000/svg"><path className="" d="m12 1.608l12 20.784H0Z" fill="currentColor"></path></svg>
<iconify-icon className="current-color" height="36" icon="simple-icons:stripe" width="96"></iconify-icon>
<iconify-icon className="current-color" height="36" icon="simple-icons:raycast" width="96"></iconify-icon>
</div>
</div>
</section>
</main>
</div>

    </>
  );
}
