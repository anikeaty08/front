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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #262626 1px, transparent 1px), linear-gradient(to bottom, #262626 1px, transparent 1px)",
}
}
}
}



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
      

<div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{backgroundSize: '300px 300px', backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)', backgroundPosition: 'center'}}>
</div>

<div className="absolute inset-0 z-0 bg-radial-gradient from-transparent via-neutral-950/50 to-neutral-950 pointer-events-none"></div>

<div className="relative z-10 flex items-stretch justify-center h-[600px] w-full max-w-[900px]">

<div className="flex-1 border-r border-neutral-800/50 relative hidden md:block">
<div className="absolute right-4 top-1/2 -translate-y-1/2 -rotate-90 origin-center whitespace-nowrap text-neutral-600 text-sm tracking-widest font-medium opacity-50">
                Bento Card Design
            </div>
</div>

<div className="w-[340px] shrink-0 flex items-center justify-center relative px-8 md:px-0">

<div className="group relative w-full bg-neutral-900/40 rounded-[32px] border border-white/5 p-1 shadow-2xl overflow-hidden backdrop-blur-sm">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-white/5 blur-[80px] rounded-full pointer-events-none"></div>
<div className="relative bg-neutral-950/80 rounded-[28px] border border-white/5 h-full overflow-hidden">

<div className="h-56 relative flex items-center justify-center overflow-hidden">

<svg className="absolute inset-0 w-full h-full text-neutral-700/30" viewbox="0 0 300 224" xmlns="http://www.w3.org/2000/svg">

<line stroke="currentColor" strokeWidth="1" x1="80" x2="0" y1="112" y2="100"></line>
<line stroke="currentColor" strokeWidth="1" x1="80" x2="0" y1="112" y2="124"></line>
<circle cx="80" cy="112" fill="currentColor" r="2"></circle>

<line stroke="currentColor" strokeWidth="1" x1="220" x2="300" y1="70" y2="30"></line>
<line stroke="currentColor" strokeWidth="1" x1="220" x2="300" y1="100" y2="100"></line>
<line stroke="currentColor" strokeWidth="1" x1="220" x2="300" y1="130" y2="170"></line>
</svg>

<div className="relative z-10">

<div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-12 h-12 bg-neutral-800 rounded-t-lg opacity-50 blur-[1px]"></div>

<div className="relative flex items-center justify-center">

<div className="relative z-10 w-20 h-20 bg-gradient-to-b from-neutral-700 to-neutral-900 rounded-2xl border border-white/10 shadow-xl flex items-center justify-center icon-glow transform -translate-x-3 group-hover:-translate-x-4 transition-transform duration-500 ease-out">
<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl pointer-events-none"></div>
<i className="w-8 h-8 text-neutral-200 drop-shadow-md" data-lucide="lock"></i>
</div>

<div className="absolute z-20 left-6 w-24 h-16 bg-neutral-600/30 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl flex flex-col items-center justify-center gap-1.5 transform translate-x-1 group-hover:translate-x-2 transition-transform duration-500 ease-out card-inner-shadow">
<div className="w-12 h-1 bg-white/70 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
<div className="w-12 h-1 bg-white/40 rounded-full"></div>
<div className="w-8 h-1 bg-white/20 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="px-7 pb-8 pt-2 flex flex-col items-center text-center relative z-20">
<h2 className="text-2xl font-semibold tracking-tight text-white mb-2">Safe &amp; Secure</h2>
<p className="text-base text-neutral-500 leading-relaxed mb-8 max-w-[200px]">
                            Secure Cryptocurrency Exchange
                        </p>

<div className="w-full max-w-[220px]">
<button className="w-full relative group/btn overflow-hidden rounded-full bg-neutral-900 border border-neutral-800 p-[1px] transition-colors hover:border-neutral-700">
<div className="relative h-10 flex items-center justify-center bg-neutral-900 rounded-full px-4 group-hover/btn:bg-neutral-800/50 transition-colors">
<span className="text-sm font-medium text-neutral-400 group-hover/btn:text-neutral-300">Ask any question</span>
</div>
</button>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-950/80 to-transparent pointer-events-none"></div>
</div>
</div>
</div>

<div className="flex-1 border-l border-neutral-800/50 relative hidden md:block">
<div className="absolute left-4 top-1/2 -translate-y-1/2 rotate-90 origin-center whitespace-nowrap text-neutral-600 text-sm tracking-widest font-medium opacity-50">
                Bento Card Design
            </div>
</div>
</div>

<div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>


    </>
  );
}
