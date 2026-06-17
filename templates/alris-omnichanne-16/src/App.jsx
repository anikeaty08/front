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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        !(function() {
            if (!window.UnicornStudio) {
                window.UnicornStudio = { isInitialized: false };
                var i = document.createElement("script");
                i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.0-1/dist/unicornStudio.umd.js";
                i.onload = function() {
                    if (document.readyState === "loading") {
                        document.addEventListener("DOMContentLoaded", function() {
                            UnicornStudio.init();
                            window.UnicornStudio.isInitialized = true;
                        });
                    } else {
                        UnicornStudio.init();
                        window.UnicornStudio.isInitialized = true;
                    }
                };
                (document.head || document.body).appendChild(i);
            } else if (!window.UnicornStudio.isInitialized && window.UnicornStudio.init) {
                UnicornStudio.init();
                window.UnicornStudio.isInitialized = true;
            }
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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 fixed mix-blend-normal" data-alpha-mask="75" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 75%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 75%, transparent)'}}>
<title>Aura Background</title>
<div className="aura-background-component absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
<div className="absolute w-full h-full left-0 top-0 z-0" data-us-project="SrJYfPcDUR4StI3maLL6"></div>
</div>
<div className="relative z-10 flex items-center justify-center h-full">
</div>

</div>

<div className="absolute inset-0 z-[-1] flex justify-center pt-0 pointer-events-none">

<div className="absolute w-[800px] h-[500px] bg-[#8624FF]/15 blur-[120px] rounded-[100%] top-0 -translate-y-1/2"></div>

<div className="absolute inset-0 bg-dots mask-radial opacity-70"></div>
</div>

<header className="flex z-50 w-full pt-6 pr-6 pb-6 pl-6 justify-center">
<nav className="max-w-7xl w-full flex items-center justify-between">

<div className="text-xl font-medium tracking-tighter flex items-center gap-2 cursor-pointer text-zinc-900">
                ALRIS
            </div>

<div className="hidden md:flex items-center gap-8 text-sm font-normal text-zinc-600">
<a className="transition-colors duration-200 hover:text-zinc-900" href="#">Platform</a>
<a className="transition-colors duration-200 hover:text-zinc-900" href="#">Solutions</a>
<a className="transition-colors duration-200 hover:text-zinc-900" href="#">Resources</a>
</div>
<div className="flex items-center gap-4 text-sm">
<a className="transition-colors duration-200 hidden sm:block font-normal text-zinc-600 hover:text-zinc-900" href="#">Sign in</a>
</div>
</nav>
</header>

<main className="flex-grow flex flex-col z-10 font-instrument-serif text-center pt-20 pr-6 pb-32 pl-6 relative items-center justify-center">
<div className="flex flex-col w-full max-w-4xl items-center">

<div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-md text-xs font-normal cursor-default border-zinc-200 bg-white/60 text-zinc-700 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-[#8624FF]"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#8624FF]"></span>
</span>
                Agent v2.0 Online
            </div>

<h1 className="sm:text-6xl md:text-7xl bg-clip-text leading-[1.1] text-5xl font-normal text-transparent tracking-tight bg-gradient-to-b to-zinc-500 from-black via-zinc-900 mb-6">Omnichannel AI Platform<br className="hidden sm:block"/> for Customer-Facing Teams</h1>

<p className="leading-relaxed text-lg font-normal text-zinc-600 font-inter max-w-2xl mb-10 md:text-sm">
                One AI agent handles calls 24/7, responds to emails, sends SMS, and updates records automatically. Your team stops doing manual follow-ups. Customers get instant responses on their preferred channel.
            </p>

<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto font-inter">

<a className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-medium hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(134,36,255,0.25)] bg-[#8624FF] text-white hover:opacity-90" href="#">
                    Book Demo
                    <iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '1.2rem', strokeWidth: '1.5'}}></iconify-icon>
</a>

<a className="w-full sm:w-auto px-6 py-3 border rounded-full text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm bg-white/50 border-zinc-200 text-zinc-900 hover:bg-zinc-50 hover:border-zinc-300 shadow-sm" href="#">
<iconify-icon icon="solar:play-circle-linear" style={{fontSize: '1.2rem', strokeWidth: '1.5', color: '#71717a'}}></iconify-icon>
                    Try Alris Live
                </a>
</div>

<div className="mt-8 font-inter">
<a className="group text-sm text-zinc-500 font-normal transition-colors duration-200 flex items-center gap-1.5 hover:text-[#8624FF]" href="#">
                    See pricing
                    <iconify-icon className="group-hover:translate-x-1 transition-transform duration-200" icon="solar:alt-arrow-right-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</main>


    </>
  );
}
