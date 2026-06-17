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
animation: {
'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        // Simple timestamp update
        function updateTime() {
            const now = new Date();
            document.getElementById('timestamp').textContent = now.toISOString().split('T')[1].split('.')[0] + ' UTC';
        }
        setInterval(updateTime, 1000);
        updateTime();
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-red-900/20 rounded-full blur-[120px] opacity-40 animate-pulse-slow"></div>

<div className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] bg-red-800/10 rounded-full blur-[100px] opacity-30"></div>

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
</div>

<nav className="absolute top-0 left-0 w-full p-6 z-20 flex justify-between items-center">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-6 h-6 rounded bg-neutral-900 border border-white/10 flex items-center justify-center group-hover:border-red-500/50 transition-colors duration-300">
<span className="iconify text-neutral-400 group-hover:text-red-500 transition-colors" data-icon="lucide:aperture" data-strokeWidth="1.5" data-width="14"></span>
</div>
<span className="text-sm font-medium tracking-tight text-neutral-300 group-hover:text-white transition-colors">NEXUS</span>
</div>
<div className="hidden sm:flex items-center gap-6 text-xs font-medium tracking-tight">
<a className="hover:text-white transition-colors" href="#">Documentation</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-400">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
<span>System Operational</span>
</div>
</div>
</nav>

<main className="relative z-10 w-full max-w-2xl px-6">
<div className="relative bg-neutral-900/40 backdrop-blur-2xl border border-white/5 rounded-3xl p-8 sm:p-12 overflow-hidden shadow-2xl shadow-black/50 group">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-red-500/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-red-500/30 transition-colors duration-700"></div>
<div className="relative flex flex-col items-center text-center">

<div className="relative mb-2">
<h1 className="text-[120px] sm:text-[160px] leading-none font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-600 select-none">
                        404
                    </h1>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-red-500/5 blur-3xl -z-10"></div>
</div>

<div className="flex items-center gap-3 mb-6">
<div className="h-px w-8 bg-gradient-to-r from-transparent to-red-500/50"></div>
<span className="text-red-400 font-mono text-xs uppercase tracking-[0.2em]">Error Code: Not Found</span>
<div className="h-px w-8 bg-gradient-to-l from-transparent to-red-500/50"></div>
</div>

<p className="text-lg sm:text-xl text-neutral-300 font-light max-w-md mx-auto leading-relaxed mb-10">
                    The requested sequence could not be located within the current sector. It may have been moved, deleted, or never existed.
                </p>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-sm">

<a className="relative flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black rounded-xl font-medium text-sm hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] group/btn" href="#">
<span className="iconify" data-icon="lucide:arrow-left" data-strokeWidth="1.5" data-width="18"></span>
<span>Return Home</span>
</a>

<a className="relative flex items-center justify-center gap-2 px-6 py-3.5 bg-black/50 border border-white/10 rounded-xl font-medium text-sm text-neutral-300 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all duration-300 group/btn-sec" href="#">
<span className="iconify text-neutral-500 group-hover/btn-sec:text-neutral-300 transition-colors" data-icon="lucide:search" data-strokeWidth="1.5" data-width="18"></span>
<span>Search Logs</span>
</a>
</div>

<div className="mt-12 pt-6 border-t border-white/5 w-full flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-600 font-mono gap-2">
<span>ID: <span className="text-neutral-500">ERR_7X29_B</span></span>
<span className="flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:clock" data-width="12"></span>
<span id="timestamp">00:00:00 UTC</span>
</span>
</div>
</div>
</div>

<div className="mt-8 flex justify-center gap-6 text-xs text-neutral-500 font-medium tracking-tight">
<a className="hover:text-red-400 transition-colors duration-300" href="#">Report Incident</a>
<span className="text-neutral-800">•</span>
<a className="hover:text-neutral-300 transition-colors duration-300" href="#">Privacy Protocol</a>
</div>
</main>


    </>
  );
}
