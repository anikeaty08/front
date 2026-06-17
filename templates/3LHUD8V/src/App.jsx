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



        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: {
                            500: 'hsl(25, 95%, 53%)', // orange
                            600: 'hsl(15, 95%, 50%)', // darker orange
                            700: 'hsl(35, 95%, 60%)', // lighter orange
                        },
                        secondary: {
                            800: 'hsl(45, 90%, 80%)', // light orange/gold
                        },
                        darkGray: {
                            50: 'hsl(25, 20%, 10%)', // dark orange-tinted gray
                            100: 'hsl(25, 15%, 15%)', // slightly lighter
                        }
                    },
                    fontFamily: {
                        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
                        inter: ['Inter', 'sans-serif'],
                    }
                }
            }
        }
    
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
      
<div className="relative">

<div className="card-bottom bg-gradient-to-br from-primary-700 via-primary-500 to-primary-600 shadow-lg absolute -translate-x-1/2 -translate-y-1/2 top-8 left-0 glow"></div>

<div className="card-top glass-effect bg-gradient-to-r from-white/20 to-white/5 absolute -translate-x-1/2 -translate-y-1/2 -top-8 left-0 overflow-hidden">

<div className="absolute inset-0 rounded-[1em] border border-white/50 [mask-image:linear-gradient(135deg,white,transparent_50%)]"></div>
<div className="absolute inset-0 rounded-[1em] border border-primary-500/50 [mask-image:linear-gradient(135deg,transparent_50%,white)]"></div>

<div className="flex flex-col h-full p-5 pb-6 card-content-gradient">
<div className="flex justify-between items-start">
<h1 className="w-3/4 text-[24px] font-light leading-tight tracking-tight font-jakarta">Advancing Digital Innovation for Tomorrow</h1>
<div className="w-1/4 text-[24px] font-semibold text-right font-jakarta">NOVA</div>
</div>

<div className="flex items-center gap-2 mt-3">
<div className="icon-circle">
<i className="fas fa-microchip text-xs"></i>
</div>
<div className="card-vertical-divider h-4"></div>
<div className="icon-circle">
<i className="fas fa-network-wired text-xs"></i>
</div>
<div className="card-vertical-divider h-4"></div>
<div className="icon-circle">
<i className="fas fa-brain text-xs"></i>
</div>
</div>

<div className="card-divider w-full my-4"></div>

<div className="flex justify-between mb-3 max-w-md">
<div className="text-center px-2">
<div className="stat-value gradient-text bg-gradient-to-r from-white/90 to-white/70">97<span className="text-sm">%</span></div>
<div className="stat-label">Efficiency</div>
</div>
<div className="card-vertical-divider h-12 my-auto"></div>
<div className="text-center px-2">
<div className="stat-value gradient-text bg-gradient-to-r from-white/90 to-white/70">156<span className="text-sm">+</span></div>
<div className="stat-label">Patents</div>
</div>
<div className="card-vertical-divider h-12 my-auto"></div>
<div className="text-center px-2">
<div className="stat-value gradient-text bg-gradient-to-r from-white/90 to-white/70">23</div>
<div className="stat-label">Markets</div>
</div>
</div>

<div className="card-divider w-full my-1 opacity-70"></div>

<div className="flex flex-wrap gap-2 mt-2 mb-4">
<span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 border border-white/20">QUANTUM READY</span>
<span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 border border-white/20">AI OPTIMIZED</span>
<span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 border border-white/20">CARBON NEUTRAL</span>
<span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 border border-white/20">EDGE COMPUTING</span>
<span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 border border-white/20">BLOCKCHAIN SECURED</span>
</div>

<div className="mt-auto flex justify-between w-full">
<div className="flex flex-col">
<span className="opacity-70 flex items-center gap-1 text-[0.8rem] mb-1">
<i className="fas fa-shield-alt text-xs"></i> ISO 27001
                        </span>
<span className="text-[0.75rem] opacity-60 flex items-center gap-1">
<i className="fas fa-key text-xs"></i> ID:87A52C
                        </span>
</div>
<div className="flex flex-col items-end">
<span className="opacity-70 flex items-center gap-1 text-[0.8rem] mb-1">
<i className="fas fa-code-branch text-xs"></i> v3.8.2
                        </span>
<p className="text-[0.9rem] font-medium flex items-center gap-1">
<i className="fas fa-globe text-xs"></i> nova-systems.xyz
                        </p>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
