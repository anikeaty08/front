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



        function acceptProposal() {
            const proposalView = document.getElementById('proposal-view');
            const successView = document.getElementById('success-view');
            
            proposalView.style.opacity = '0';
            proposalView.style.transform = 'scale(0.95)';
            proposalView.style.transition = 'all 0.4s ease';
            
            setTimeout(() => {
                proposalView.classList.add('hidden');
                successView.classList.remove('hidden');
                successView.classList.add('flex', 'animate-fade-in');
                
                // Set today's date
                const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                document.getElementById('current-date').textContent = new Date().toLocaleDateString(undefined, dateOptions);
            }, 400);
        }

        function moveButton(btn) {
            // Adds a subtle playful movement to the "No" button
            const rx = (Math.random() - 0.5) * 60;
            const ry = (Math.random() - 0.5) * 60;
            btn.style.setProperty('--random-x', rx);
            btn.style.setProperty('--random-y', ry);
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
      

<div className="absolute top-1/4 left-1/4 w-3/4 aspect-square rounded-full bg-rose-500/5 blur-[120px] pointer-events-none transform -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-1/4 right-1/4 w-1/2 aspect-square rounded-full bg-violet-500/5 blur-[100px] pointer-events-none transform translate-x-1/2 translate-y-1/2"></div>

<nav className="absolute top-0 w-full p-6 flex justify-between items-center z-20">
<div className="text-sm font-medium tracking-tighter text-zinc-300">A.</div>
<div className="flex items-center gap-2 text-zinc-500 text-xs font-normal">
<iconify-icon className="text-base" icon="solar:stars-linear"></iconify-icon>
<span>Just for you</span>
</div>
</nav>

<main className="relative z-10 w-full max-w-2xl px-6">

<div className="flex flex-col items-center text-center animate-fade-in" id="proposal-view">
<div className="mb-8 w-16 h-16 rounded-2xl bg-gradient-to-b from-zinc-800 to-zinc-900 border border-zinc-800 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_8px_16px_-4px_rgba(0,0,0,0.5)] flex items-center justify-center animate-float">
<iconify-icon className="text-2xl text-rose-300" icon="solar:heart-angle-linear"></iconify-icon>
</div>
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 mb-6">
                Hi Ashritha,
            </h1>
<p className="text-sm sm:text-base font-normal text-zinc-400 leading-relaxed mb-10 max-w-lg mx-auto text-balance">
                If you are reading this I am very happy. Another thing is that I have been wanting to tell you this since 8 years: I have a crush on you. I know that you might be disgusted about me having a crush on you, and I didn't want to tell you yet, but I am extremely sorry I could not control it. I am not the type of guy who wants to date right now, but I would be able to date you later. If you accept me, I would love to date during college because I understand that you need to concentrate on your studies right now.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">

<button className="group relative w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-white text-zinc-950 px-8 py-3 text-sm font-medium transition-all duration-200 hover:scale-[1.02] hover:bg-zinc-100 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#0A0A0B]" onclick="acceptProposal()">
<span>I understand, I accept</span>
<iconify-icon className="text-base transition-transform group-hover:translate-x-0.5" icon="solar:arrow-right-linear"></iconify-icon>
</button>

<button className="no-button-trick relative w-full sm:w-auto flex items-center justify-center rounded-full bg-transparent border border-zinc-800 text-zinc-400 px-8 py-3 text-sm font-normal transition-all duration-300 hover:bg-zinc-900 hover:text-zinc-300 hover:border-zinc-700 focus:outline-none" onmouseenter="moveButton(this)">
<span>Maybe later</span>
</button>
</div>
</div>

<div className="hidden flex-col items-center text-center" id="success-view">
<div className="mb-8 relative w-20 h-20 flex items-center justify-center">
<div className="absolute inset-0 rounded-full bg-rose-500/20 blur-xl animate-pulse"></div>
<div className="relative w-full h-full rounded-2xl bg-gradient-to-b from-rose-500/10 to-rose-900/10 border border-rose-500/20 shadow-[0_0_0_1px_rgba(244,63,94,0.1),0_8px_32px_-4px_rgba(244,63,94,0.2)] flex items-center justify-center">
<iconify-icon className="text-4xl text-rose-500" icon="solar:heart-bold"></iconify-icon>
</div>
</div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
                Thank you!
            </h2>
<p className="text-sm sm:text-base font-normal text-zinc-400 max-w-sm mx-auto mb-8">
                I am so happy you understand. We can focus on our studies now, and I will look forward to the future when college starts.
            </p>
<div className="text-xs font-normal text-zinc-500 flex items-center justify-center gap-1.5">
<iconify-icon className="text-sm" icon="solar:calendar-linear"></iconify-icon>
<span id="current-date"></span>
</div>
</div>
</main>

<div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-50"></div>


    </>
  );
}
