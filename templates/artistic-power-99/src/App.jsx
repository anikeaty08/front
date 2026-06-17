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


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div data-us-project="N9XzvQXu7fA5SY2ewADJ" style={{width: '1440px', height: '900px'}}></div></div>

<nav className="fixed flex bg-black/80 w-full z-50 border-white/5 border-b pt-5 pr-6 pb-5 pl-6 top-0 right-0 left-0 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-8">

<a className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity" href="#">
<svg aria-hidden="true" className="iconify text-3xl iconify--simple-icons" data-icon="simple-icons:artstation" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m0 17.723l2.027 3.505h.001a2.42 2.42 0 0 0 2.164 1.333h13.457l-2.792-4.838zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.42 2.42 0 0 0-2.142-1.289H9.419L21.598 22.54l1.92-3.325c.378-.637.482-.919.482-1.467m-11.129-3.462L7.428 4.858l-5.444 9.428z" fill="currentColor"></path></svg>
<span className="text-xl font-black tracking-tighter italic uppercase">
            Canvas
          </span>
</a>

<div className="hidden md:flex items-center gap-6">
<button className="group flex items-center gap-1 text-sm text-gray-300 hover:text-[#B2F868] transition-colors font-bold uppercase tracking-wider">
            Product
            <svg aria-hidden="true" className="iconify text-gray-500 group-hover:text-[#B2F868] transition-colors iconify--solar" data-icon="solar:alt-arrow-down-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m8.303 12.404l3.327 3.431c.213.22.527.22.74 0l6.43-6.63C19.201 8.79 18.958 8 18.43 8h-5.723z" fill="currentColor"></path><path d="M11.293 8H5.57c-.528 0-.771.79-.37 1.205l2.406 2.481z" fill="currentColor" opacity=".5"></path></svg>
</button>
<a className="text-sm text-gray-300 hover:text-[#B2F868] transition-colors font-bold uppercase tracking-wider" href="#">
            Resources
          </a>
<a className="text-sm text-gray-300 hover:text-[#B2F868] transition-colors font-bold uppercase tracking-wider" href="#">
            Support
          </a>
</div>
</div>

<div>
<a className="inline-flex items-center gap-2 bg-[#B2F868] hover:bg-[#a2ec56] text-black px-6 py-3 rounded-none skew-x-[-10deg] transition-all duration-200 font-bold text-sm uppercase tracking-wider group" href="#">
<svg aria-hidden="true" className="iconify text-xl skew-x-[10deg] iconify--solar" data-icon="solar:download-square-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" fill="currentColor" opacity=".5"></path><path d="M12.75 7a.75.75 0 0 0-1.5 0v5.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72zM8 16.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z" fill="currentColor"></path></svg>
<span className="skew-x-[10deg]">Download App</span>
</a>
</div>
</nav>

<main className="min-h-screen flex flex-col overflow-hidden w-full pt-20 pb-10 relative items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime-500/5 rounded-full blur-[120px] pointer-events-none"></div>



<div className="absolute top-32 left-4 lg:left-20 xl:left-40 w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 z-10 hidden sm:block animate-float-slow hover:z-30 hover:scale-105 transition-transform duration-500">
<img alt="Nature macro" className="w-full h-full object-cover shadow-2xl shadow-black/50 grayscale-[20%] hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1470114716159-e389f8712fda?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-24 md:top-32 left-1/2 -translate-x-1/2 w-40 h-40 md:w-52 md:h-52 z-10 animate-float hover:z-30 hover:scale-105 transition-transform duration-500">
<img alt="Abstract Illustration" className="w-full h-full object-cover shadow-2xl shadow-black/50" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-28 right-4 lg:right-20 xl:right-32 w-36 h-36 md:w-64 md:h-64 z-10 hidden sm:block animate-float-delayed hover:z-30 hover:scale-105 transition-transform duration-500">
<img alt="Portrait" className="w-full h-full object-cover shadow-2xl shadow-black/50 grayscale-[10%] hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-10 w-28 h-28 md:w-40 md:h-40 z-10 hidden md:block animate-float hover:z-30 hover:scale-105 transition-transform duration-500">
<img alt="Flowers" className="w-full h-full object-cover shadow-2xl shadow-black/50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-10 w-28 h-28 md:w-44 md:h-44 z-10 hidden md:block animate-float-slow hover:z-30 hover:scale-105 transition-transform duration-500">
<img alt="Abstract" className="w-full h-full object-cover shadow-2xl shadow-black/50" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute bottom-20 left-6 lg:left-32 w-32 h-32 md:w-48 md:h-48 z-10 hidden sm:block animate-float-delayed hover:z-30 hover:scale-105 transition-transform duration-500">
<img alt="Street Photography" className="w-full h-full object-cover shadow-2xl shadow-black/50 grayscale-[30%] hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1558507652-2d9626c4e67a?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute bottom-24 right-6 lg:right-40 w-36 h-36 md:w-56 md:h-56 z-10 hidden sm:block animate-float hover:z-30 hover:scale-105 transition-transform duration-500">
<img alt="Ocean Art" className="w-full h-full object-cover shadow-2xl shadow-black/50" src="https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute bottom-10 left-1/2 ml-20 md:ml-32 w-24 h-24 md:w-40 md:h-40 z-10 hidden lg:block animate-float-slow hover:z-30 hover:scale-105 transition-transform duration-500">
<img alt="Person in nature" className="w-full h-full object-cover shadow-2xl shadow-black/50" src="https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative z-20 max-w-5xl mx-auto text-center px-4 mt-10 md:mt-0 mix-blend-difference">
<h1 className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] tracking-tighter leading-[0.85] text-white mb-6">
          Artistic
          <br/>
<span className="text-[#B2F868]">Power</span>
</h1>
<p className="font-display not-italic text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-400 tracking-tight leading-tight">
          Absolutely Boundless
        </p>
<div className="md:hidden mt-12">
<a className="inline-flex items-center gap-2 bg-[#B2F868] text-black px-8 py-3 rounded-none skew-x-[-10deg] font-bold uppercase tracking-wider" href="#">
<span className="skew-x-[10deg]">Get Started</span>
</a>
</div>
</div>
</main>

    </>
  );
}
