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



        const noBtn = document.getElementById('no-btn');
        const questionState = document.getElementById('question-state');
        const successState = document.getElementById('success-state');
        
        // Define texts
        const noTexts = [
            "Why Nooo? Choose Yes 😂",
            "Pleaseeeeeeeee",
            "I want youuu 😂"
        ];
        
        let clickIndex = 0;

        // Logic for clicking No
        function handleNoClick() {
            // Update button text
            noBtn.innerText = noTexts[clickIndex];
            
            // Advance index, loop back to start if at the end to keep the game going
            clickIndex = (clickIndex + 1) % noTexts.length;
            
            // Add a small shake animation
            noBtn.classList.add('translate-x-1');
            setTimeout(() => {
                noBtn.classList.remove('translate-x-1');
                noBtn.classList.add('-translate-x-1');
            }, 50);
            setTimeout(() => {
                noBtn.classList.remove('-translate-x-1');
            }, 100);
        }

        // Logic for success
        function acceptProposal() {
            questionState.style.display = 'none';
            successState.classList.remove('hidden');
            successState.classList.add('flex');
            createEmojiConfetti();
        }

        function createEmojiConfetti() {
            const emojis = ['❤️', '🌹', '✨', '🥰', '🤍'];
            for (let i = 0; i < 60; i++) {
                const el = document.createElement('div');
                el.innerText = emojis[Math.floor(Math.random() * emojis.length)];
                el.style.position = 'fixed';
                el.style.left = Math.random() * 100 + 'vw';
                el.style.top = '-5vh';
                el.style.fontSize = (Math.random() * 20 + 20) + 'px';
                el.style.transition = `top ${Math.random() * 2 + 1.5}s ease-in, opacity ${Math.random() * 2 + 1.5}s`;
                el.style.zIndex = '50';
                el.style.pointerEvents = 'none';
                document.body.appendChild(el);

                setTimeout(() => {
                    el.style.top = '105vh';
                    el.style.opacity = '0';
                }, 100);

                setTimeout(() => {
                    el.remove();
                }, 3500);
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
      

<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 pattern-grid opacity-40"></div>
<div className="absolute top-[-20%] left-[20%] w-96 h-96 bg-rose-200/30 rounded-full blur-3xl mix-blend-multiply filter animate-pulse"></div>
<div className="absolute bottom-[-10%] right-[20%] w-[30rem] h-[30rem] bg-indigo-100/40 rounded-full blur-3xl mix-blend-multiply filter"></div>
</div>

<nav className="relative z-10 w-full px-6 py-6 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-zinc-100 to-zinc-50 border border-zinc-200 shadow-sm flex items-center justify-center">
<iconify-icon className="text-rose-500 text-lg" icon="solar:heart-angle-linear"></iconify-icon>
</div>
<span className="text-xs sm:text-sm font-medium tracking-tighter text-zinc-500 uppercase">Proposal_v1.0</span>
</div>
</nav>

<main className="z-10 flex-1 flex flex-col pt-6 pr-6 pb-6 pl-6 relative items-center justify-center">

<div className="glass-panel w-full max-w-lg rounded-2xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-zinc-900/5 p-8 sm:p-10 transition-all duration-500" id="card-container">

<div className="flex flex-col items-center text-center space-y-8" id="question-state">
<div className="relative group">
<div className="absolute inset-0 bg-rose-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative w-16 h-16 rounded-2xl bg-gradient-to-b from-white to-zinc-50 border border-zinc-200 shadow-sm flex items-center justify-center">
<iconify-icon className="text-rose-500 text-3xl" icon="solar:heart-pulse-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<h1 className="sm:text-4xl text-3xl font-medium text-zinc-900 tracking-tight">Baby</h1>
<p className="text-lg sm:text-xl font-normal text-zinc-600 tracking-tight">
                        Will you be my Valentine?
                    </p>
</div>
<p className="text-sm text-zinc-400 max-w-xs mx-auto leading-relaxed">
                    This Valentine request is sponsored by my heart...Please say yes before I start overthinking.
                </p>
<div className="w-full pt-2 flex flex-col sm:flex-row gap-3 relative justify-center items-center">
<button className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 transition-all active:scale-95 w-full sm:w-auto z-20 whitespace-nowrap" onclick="acceptProposal()">
<span className="">Yes, absolutely</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="inline-flex hover:bg-zinc-50 hover:border-zinc-300 transition-all focus:outline-none sm:w-auto whitespace-nowrap text-sm font-medium text-zinc-600 bg-white w-full z-10 border-zinc-200 border rounded-lg pt-3 pr-8 pb-3 pl-8 items-center justify-center" id="no-btn" onclick="handleNoClick()">
                        No
                    </button>
</div>
</div>

<div className="hidden flex-col items-center text-center space-y-6 animate-fade-in" id="success-state">
<div className="w-16 h-16 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center">
<iconify-icon className="text-rose-500 text-3xl" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="space-y-2 w-full">
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-900">
                        Best decision you've made today.
                    </h2>
</div>

<div className="bg-zinc-50/50 rounded-xl p-6 border border-zinc-100 text-left w-full">
<p className="text-sm text-zinc-600 leading-relaxed font-normal tracking-tight">
<span className="text-rose-500 font-medium">"</span>
                        IThank you for saying yes, my love. I’ve never shared Valentine’s with anyone before, but with you it feels special — like the beginning of a beautiful tradition meant only for us
                        <span className="text-rose-500 font-medium">". Call me if you chose YESSSS!!!</span>
</p>
</div>
<div className="pt-4 w-full">
<div className="flex flex-col gap-3">

<div className="flex items-center justify-between p-4 bg-white border border-zinc-200 rounded-lg shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500">
<iconify-icon className="text-lg" icon="solar:calendar-date-linear"></iconify-icon>
</div>
<div className="text-left">
<p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Reservation</p>
<p className="text-sm text-zinc-900 font-medium">February 14th</p>
</div>
</div>
<div className="text-right">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600 border border-emerald-100">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Confirmed
                                </span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="relative z-10 py-6 text-center">
<p className="text-xs text-zinc-400">
    © 2026
    <a className="underline hover:text-white" href="https://dev-ebenezer.netlify.app/">
      View My Portfolio
    </a>.
    All rights reserved.
  </p>
</footer>


    </>
  );
}
