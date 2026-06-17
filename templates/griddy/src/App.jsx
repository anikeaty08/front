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
      

<div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 eclipse-gradient"></div>

<div className="absolute inset-0 noise-overlay opacity-40"></div>

<div className="aurora-gradient opacity-60 h-64 absolute top-0 right-0 left-0"></div>

<div className="absolute top-0 left-1/4 w-1 h-full light-ray" style={{transform: 'rotate(15deg) translateX(-100px)'}}></div>
<div className="absolute top-0 left-1/2 w-1 h-full light-ray" style={{transform: 'rotate(-8deg)', opacity: '0.4'}}></div>
<div className="absolute top-0 right-1/3 w-1 h-full light-ray" style={{transform: 'rotate(20deg) translateX(80px)', opacity: '0.5'}}></div>

<div className="absolute inset-0 pointer-events-none">
<div className="absolute w-1 h-1 bg-violet-400 rounded-full blur-sm particle" style={{left: '10%', animationDuration: '15s', animationDelay: '0s'}}></div>
<div className="absolute w-1 h-1 bg-cyan-400 rounded-full blur-sm particle" style={{left: '25%', animationDuration: '18s', animationDelay: '2s'}}></div>
<div className="absolute w-0.5 h-0.5 bg-amber-400 rounded-full blur-sm particle" style={{left: '40%', animationDuration: '20s', animationDelay: '4s'}}></div>
<div className="absolute w-1 h-1 bg-violet-300 rounded-full blur-sm particle" style={{left: '55%', animationDuration: '16s', animationDelay: '1s'}}></div>
<div className="absolute w-0.5 h-0.5 bg-cyan-300 rounded-full blur-sm particle" style={{left: '70%', animationDuration: '19s', animationDelay: '3s'}}></div>
<div className="absolute w-1 h-1 bg-amber-300 rounded-full blur-sm particle" style={{left: '85%', animationDuration: '17s', animationDelay: '5s'}}></div>
<div className="absolute w-0.5 h-0.5 bg-violet-400 rounded-full blur-sm particle" style={{left: '15%', animationDuration: '21s', animationDelay: '6s'}}></div>
<div className="absolute w-1 h-1 bg-cyan-400 rounded-full blur-sm particle" style={{left: '60%', animationDuration: '14s', animationDelay: '7s'}}></div>
</div>

<div className="absolute inset-0 pointer-events-none" style={{perspective: '1000px'}}>

<div className="absolute top-20 left-10 md:left-32 w-48 h-72 md:w-64 md:h-96 glass-panel rounded-2xl panel-1" style={{transformStyle: 'preserve-3d'}}></div>

<div className="absolute bottom-20 right-10 md:right-40 w-56 h-80 md:w-72 md:h-[28rem] glass-panel rounded-3xl panel-2" style={{transformStyle: 'preserve-3d'}}></div>

<div className="absolute top-1/3 left-5 md:left-20 w-40 h-64 md:w-56 md:h-80 glass-panel rounded-xl panel-3" style={{transformStyle: 'preserve-3d'}}></div>
</div>

<div className="relative z-10 flex flex-col items-center justify-center px-6">

<div className="relative flex items-center justify-center">

<div className="absolute w-64 h-64 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] rounded-full ring-violet"></div>

<div className="absolute w-80 h-80 md:w-[28rem] md:h-[28rem] lg:w-[40rem] lg:h-[40rem] rounded-full ring-cyan"></div>

<div className="absolute w-96 h-96 md:w-[32rem] md:h-[32rem] lg:w-[48rem] lg:h-[48rem] rounded-full ring-amber"></div>

<div className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full" style={{background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0) 70%)', filter: 'blur(30px)'}}></div>

<div className="relative text-center">
<h1 className="md:text-7xl lg:text-8xl xl:text-9xl title-glow text-5xl font-light text-white tracking-tighter" style={{fontFamily: '"Space Grotesk", sans-serif', letterSpacing: '-0.04em'}}>GRIDDY</h1>

<p className="mt-6 md:mt-8 text-sm md:text-base lg:text-lg text-gray-400 font-light tracking-wide" style={{letterSpacing: '0.1em'}}>
                        WHERE CONSCIOUSNESS MEETS INFINITY
                    </p>
</div>
</div>

<div className="relative mt-16 md:mt-24 flex flex-col sm:flex-row items-center gap-4">
<button className="group relative px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full transition-all duration-300 backdrop-blur-sm">
<span className="text-sm font-medium tracking-wide text-white">Enter the Void</span>
</button>
<button className="group relative px-8 py-3.5 bg-transparent hover:bg-white/5 border border-violet-500/30 hover:border-violet-400/50 rounded-full transition-all duration-300">
<span className="text-sm font-medium tracking-wide text-violet-300 group-hover:text-violet-200">Discover More</span>
</button>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#14121e] to-transparent"></div>

<div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full blur-3xl opacity-20" style={{background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, transparent 70%)'}}></div>
<div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full blur-3xl opacity-15" style={{background: 'radial-gradient(circle, rgba(251, 146, 60, 0.5) 0%, transparent 70%)'}}></div>
<div className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full blur-3xl opacity-10" style={{background: 'radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, transparent 70%)'}}></div>
</div>

    </>
  );
}
