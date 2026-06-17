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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        lucide.createIcons();
    
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="BqS5vTHVEpn6NiF0g8iJ"></div>

</div></div>

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

<div className="absolute inset-0 bg-grid z-10"></div>

<div className="absolute top-[-10%] left-[20%] w-96 h-96 bg-blue-900/20 rounded-full blur-[100px] animate-glow"></div>
<div className="absolute bottom-[-10%] right-[20%] w-[30rem] h-[30rem] bg-indigo-900/10 rounded-full blur-[120px] animate-glow delay-1000"></div>
<div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-zinc-900/30 rounded-full blur-[100px] animate-glow delay-2000"></div>
</div>

<header className="md:px-12 flex z-50 w-full pt-8 pr-6 pb-6 pl-6 relative items-center justify-center">
<a className="flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-white transition-colors duration-300" href="mailto:pete@peteharrison.com">
<svg className="lucide lucide-mail w-3 h-3" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
            GET IN TOUCH
        </a>
</header>

<main className="z-20 flex-grow flex flex-col text-center pr-6 pl-6 relative items-center justify-center">

<div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-medium text-zinc-300 tracking-wide uppercase">Work in progress</span>
</div>

<h1 className="md:text-7xl lg:text-8xl leading-[1.1] bg-clip-text text-5xl font-medium text-white tracking-tighter bg-gradient-to-b from-white via-white to-zinc-500 max-w-4xl mr-auto mb-6 ml-auto">Prepare for a Visual Upgrade</h1>

<p className="md:text-lg leading-relaxed text-base font-light text-zinc-400 tracking-tight max-w-lg mr-auto mb-10 ml-auto">I'm currently heads-down building a new portfolio to showcase my latest work in digital art, video production and branding.</p>

</main>

<footer className="relative z-20 w-full px-6 py-8 md:px-12 flex justify-center items-center text-zinc-600">
<div className="text-xs font-normal tracking-tight">
            © 2025 Pete Harrison. All rights reserved.
        </div>
</footer>



    </>
  );
}
