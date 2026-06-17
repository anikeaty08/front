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
display: ['Space Grotesk', 'sans-serif'],
},
colors: {
cyan: {
400: '#22d3ee',
500: '#06b6d4',
900: '#164e63',
}
},
animation: {
'fade-in': 'fadeIn 1s ease-out forwards',
'fade-in-up': 'fadeInUp 1s ease-out forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'spin-slow': 'spin 3s linear infinite',
'shimmer': 'shimmer 2s linear infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
shimmer: {
from: { backgroundPosition: '0 0' },
to: { backgroundPosition: '-200% 0' }
}
}
}
}
}



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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 mix-blend-normal hue-rotate-90" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="cqcLtDwfoHqqRPttBbQE"></div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="stars absolute w-[1px] h-[1px] bg-transparent rounded-full opacity-30"></div>
<div className="absolute inset-0 bg-grid opacity-30"></div>
<div className="absolute top-[-20%] left-[20%] w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[100px] mix-blend-screen"></div>
</div>

<nav className="absolute top-0 left-0 w-full z-10 pt-8 px-8 pointer-events-none">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-4">
<div className="hidden md:block"></div>
<div className="flex justify-center w-full md:w-auto pointer-events-auto">
<button className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 hover:scale-105 active:scale-95">

<span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#06b6d4_50%,#000000_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

<span className="relative flex items-center gap-2 h-full w-full rounded-full bg-black/60 backdrop-blur-md border border-white/10 px-6 py-2.5 transition-all duration-300 group-hover:bg-black/90 group-hover:border-transparent">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
</span>
<span className="text-[10px] tracking-[0.2em] font-medium text-white/90 group-hover:text-cyan-200 uppercase font-sans transition-colors bg-clip-text">
                            Letter from the founders
                        </span>
</span>
</button>
</div>
<div className="flex justify-center md:justify-end w-full md:w-auto pointer-events-auto">
<button className="group flex items-center gap-2 px-3 py-2 rounded-full hover:bg-white/5 transition-all duration-300">
<span className="text-[10px] tracking-[0.2em] font-medium text-white/50 group-hover:text-cyan-200 uppercase font-sans transition-colors">
                        The Future of Connection Report 2026
                    </span>
<i className="w-3 h-3 text-white/30 group-hover:text-cyan-200 transition-colors" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</nav>

<main className="z-20 relative flex flex-col justify-center min-h-[140vh]">

<div className="flex flex-col items-center text-center px-4 max-w-4xl mx-auto w-full pt-40 pb-20">
<h1 className="animate-fade-in-up font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter text-white mb-8">
                MOSAIC
            </h1>
<p className="animate-fade-in-up delay-[100ms] text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-snug mb-24">
                A living network for human experiences, <br className="hidden md:block"/>
<span className="text-gradient">co-created.</span>
</p>
<div className="animate-fade-in-up delay-[200ms] w-full max-w-xl mx-auto relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-1000"></div>
<div className="glass-panel rounded-xl p-8 md:p-10 text-left relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-20">
<svg className="lucide lucide-fingerprint text-white" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c0-3 2.5-5.5 5-5.5 4 0 7 2.5 7 7s-3 7-7 7c-3.7 0-6.2-2.8-6.2-6.5a6.5 6.5 0 0 1 12.1-4.1"></path><path d="M7 15.3c-2.4-2.4-3-6.5-1.1-9.1"></path><path d="m2 12 6.5 7.5"></path><path d="m2 12 5.5-6.5"></path></svg>
</div>
<div className="flex items-center gap-2 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
<span className="font-mono text-[10px] uppercase tracking-widest text-cyan-400">An Invitation</span>
</div>
<h2 className="font-display text-2xl font-medium text-white mb-4">The Founding Circle</h2>
<p className="text-white/60 text-sm leading-relaxed mb-8 font-light">
                        A small, invitation-only group of practitioners, facilitators, and thinkers shaping the future of how humans gather, learn, and connect.
                    </p>
<div className="space-y-3 mb-12 border-l border-white/10 pl-4">
<div className="flex items-center gap-3 text-white/40 text-sm">
<svg className="lucide lucide-x" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                            Not a platform.
                        </div>
<div className="flex items-center gap-3 text-white/40 text-sm">
<svg className="lucide lucide-x" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                            Not a programme.
                        </div>
<div className="flex items-center gap-3 text-white/40 text-sm">
<svg className="lucide lucide-x" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                            Not a finished idea.
                        </div>
</div>
<div className="flex flex-col items-center justify-center gap-8 pt-8 border-t border-white/5">
<span className="font-display text-white text-lg tracking-tight">Be a part of what it becomes...</span>
<button className="relative inline-flex h-12 w-full max-w-[280px] overflow-hidden rounded-full p-[1px] focus:outline-none transition-transform hover:scale-105 active:scale-95 duration-200">
<span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#22d3ee_50%,#000000_100%)]"></span>
<span className="inline-flex h-full w-full items-center justify-center rounded-full bg-black px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl border border-white/10 group-hover:bg-neutral-900/80 transition-colors uppercase tracking-wider">
                                Invite me
                                <svg className="lucide lucide-arrow-right ml-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
</div>
</div>
</div>
</div>
<div className="h-[40vh] w-full pointer-events-none"></div>
<footer className="absolute bottom-6 w-full text-center pb-8">
<p className="text-[10px] text-white/20 uppercase tracking-widest font-mono">© 2025 Mosaic</p>
</footer>
</main>


    </>
  );
}
