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



        // Initialize Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        const btn = document.getElementById('downloadBtn');
        const content = document.getElementById('btnContent');
        const loading = document.getElementById('loadingState');
        const success = document.getElementById('successState');
        let isAnimating = false;

        btn.addEventListener('click', function() {
            if (isAnimating) return;
            isAnimating = true;

            // 1. Transition to Loading
            content.classList.add('-translate-y-full', 'opacity-0');
            loading.classList.remove('translate-y-full', 'opacity-0');
            
            // Change button base styles for loading context (darker)
            btn.classList.remove('bg-zinc-100', 'hover:bg-white');
            btn.classList.add('bg-zinc-800', 'cursor-wait');

            // Simulate Download Delay
            setTimeout(() => {
                // 2. Transition to Success
                loading.classList.add('opacity-0', 'scale-95'); // Fade out loader
                
                // Slight delay for smooth swap
                setTimeout(() => {
                    loading.classList.add('hidden'); // Hide loader fully
                    success.classList.remove('opacity-0', 'scale-90');
                    success.classList.add('opacity-100', 'scale-100');
                    
                    // Change button styles for success
                    btn.classList.remove('bg-zinc-800');
                    btn.classList.add('bg-zinc-900', 'ring-1', 'ring-emerald-500/50', 'cursor-default');
                    
                    // Reset logic (optional - for demo purposes, resets after 3s)
                    setTimeout(() => {
                        resetButton();
                    }, 3000);

                }, 200);

            }, 2000);
        });

        function resetButton() {
            // Reset classes to initial state
            loading.classList.remove('hidden', 'opacity-0', 'scale-95');
            loading.classList.add('translate-y-full', 'opacity-0'); // Move loader back down

            success.classList.remove('opacity-100', 'scale-100');
            success.classList.add('opacity-0', 'scale-90');

            content.classList.remove('-translate-y-full', 'opacity-0');
            
            // Reset button container styles
            btn.classList.remove('bg-zinc-900', 'ring-1', 'ring-emerald-500/50', 'cursor-default', 'cursor-wait', 'bg-zinc-800');
            btn.classList.add('bg-zinc-100', 'hover:bg-white');

            isAnimating = false;
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
      

<div className="w-full max-w-sm relative group">

<div className="absolute -inset-0.5 bg-gradient-to-b from-zinc-700 to-zinc-900 rounded-2xl blur opacity-20 transition duration-500 group-hover:opacity-40"></div>

<div className="relative bg-zinc-900 rounded-xl ring-1 ring-white/10 shadow-2xl shadow-black/50 overflow-hidden">

<div className="h-32 bg-zinc-900/50 border-b border-white/5 flex items-center justify-center relative overflow-hidden">

<div className="font-mono absolute inset-0">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#3f3f46 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: '0.2', maskImage: 'linear-gradient(80deg, transparent, black 0%, black 35%, transparent)', WebkitMaskImage: 'linear-gradient(80deg, transparent, black 0%, black 35%, transparent)'}}></div>

<div className="absolute inset-0 pointer-events-none" style={{mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude', WebkitMaskComposite: 'xor', padding: '1px'}}>
<div className="absolute inset-[-100%] animate-spin" style={{background: 'conic-gradient(from 0deg, transparent 0 340deg, rgba(255,255,255,0.5) 360deg)', animationDuration: '4s'}}></div>
</div>
</div>

<div className="relative z-10 flex flex-col items-center gap-3 transition-transform duration-500 hover:scale-105">
<div className="h-12 w-12 rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 flex items-center justify-center shadow-inner shadow-white/5">
<svg className="lucide lucide-package text-zinc-400 w-6 h-6" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</div>
</div>
</div>

<div className="p-6">
<div className="flex justify-between items-start mb-6">
<div className="">
<h2 className="text-zinc-100 font-medium text-lg tracking-tight mb-1">Design_System_v2.zip</h2>
<p className="text-zinc-500 text-xs font-normal">Updated 2 hours ago • 42.8 MB</p>
</div>
<div className="h-8 w-8 rounded-full border border-white/5 flex items-center justify-center bg-white/5">
<span className="text-xs font-medium text-zinc-400 tracking-tighter mx-10px">ZIP</span>
</div>
</div>

<div className="space-y-3 mb-8">
<div className="flex items-center justify-between text-xs group/item">
<div className="flex items-center gap-2 text-zinc-400">
<svg className="lucide lucide-file-code w-3.5 h-3.5 opacity-70" data-lucide="file-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 12.5 8 15l2 2.5"></path><path d="m14 12.5 2 2.5-2 2.5"></path></svg>
<span className="font-normal group-hover/item:text-zinc-300 transition-colors">Token Definitions</span>
</div>
<span className="text-zinc-600">JSON</span>
</div>
<div className="flex items-center justify-between text-xs group/item">
<div className="flex items-center gap-2 text-zinc-400">
<svg className="lucide lucide-type w-3.5 h-3.5 opacity-70" data-lucide="type" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16"></path><path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"></path><path d="M9 20h6"></path></svg>
<span className="font-normal group-hover/item:text-zinc-300 transition-colors">Typography Scale</span>
</div>
<span className="text-zinc-600">WOFF2</span>
</div>
<div className="flex items-center justify-between text-xs group/item">
<div className="flex items-center gap-2 text-zinc-400">
<svg className="lucide lucide-component w-3.5 h-3.5 opacity-70" data-lucide="component" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"></path><path d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"></path><path d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"></path><path d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"></path></svg>
<span className="font-normal group-hover/item:text-zinc-300 transition-colors">Icon Set</span>
</div>
<span className="text-zinc-600">SVG</span>
</div>
</div>

<button className="relative w-full h-10 group overflow-hidden rounded-md transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-offset-2 focus:ring-offset-zinc-900 bg-zinc-100 hover:bg-white text-zinc-900" id="downloadBtn">

<div className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-300" id="btnContent">
<span className="text-sm font-medium mr-2">Download Assets</span>
<svg className="lucide lucide-arrow-down w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-full transition-all duration-300 bg-zinc-800 text-zinc-300" id="loadingState">
<div className="absolute inset-0 animate-shimmer"></div>
<div className="relative z-10 flex items-center gap-2">
<svg className="lucide lucide-loader-2 w-4 h-4 animate-spin text-zinc-400" data-lucide="loader-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
<span className="text-sm font-normal">Processing...</span>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 scale-90 transition-all duration-300 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" id="successState">
<div className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm font-medium">Complete</span>
</div>
</div>
</button>
</div>

<div className="bg-black/20 p-3 text-center border-t border-white/5">
<p className="text-[10px] text-zinc-600 font-medium tracking-wide uppercase">Secure Transfer Encrypted</p>
</div>
</div>

<div className="absolute -top-12 -right-4 -z-10 select-none pointer-events-none">
<span className="text-[120px] font-bold leading-none text-white opacity-[0.02] tracking-tighter">DS</span>
</div>
</div>


    </>
  );
}
