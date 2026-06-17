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
            "Error 404: Not Found",
            "Logic Error: Response Not Supported",
            "Are you sure? I got munchies 🥺",
            "my heart is buffering… please click yes",
            "this is why sad songs exist 🎧💔",
            "maybe you need more coffee 🫣",
            "your finger slipped, try again 😁",
            "is bebu's plot armor working 👀",
            "i feel like you should get your trackpad fixed 🙁",
            "bebu switching to low happiness mode 🥺"
        ];
        
        let clickIndex = 0;

        // Logic for clicking No
        function handleNoClick() {
            // Update button text
            noBtn.innerText = noTexts[clickIndex];
            
            // Advance index, loop back to start
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
            const emojis = ['💖', '👾', '✨', '😻', '🍄', '⭐'];
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
<div className="absolute inset-0 pattern-grid opacity-50"></div>
<div className="absolute top-[-20%] left-[20%] w-96 h-96 bg-rose-300/40 rounded-full blur-3xl mix-blend-multiply filter animate-pulse"></div>
<div className="absolute bottom-[-10%] right-[20%] w-[30rem] h-[30rem] bg-pink-200/50 rounded-full blur-3xl mix-blend-multiply filter"></div>
</div>

<nav className="relative z-10 w-full px-6 py-6 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-white border border-rose-100 shadow-sm flex items-center justify-center">
<iconify-icon className="text-rose-500 text-lg" icon="solar:heart-angle-linear"></iconify-icon>
</div>
<span className="text-xs sm:text-sm font-bold tracking-tight text-rose-400 uppercase">Pixel_Love_v1.0</span>
</div>
</nav>

<main className="z-10 flex-1 flex flex-col pt-6 pr-6 pb-6 pl-6 relative items-center justify-center">

<div className="glass-panel w-full max-w-lg rounded-2xl border border-white/60 shadow-[0_8px_30px_rgb(255,192,203,0.2)] ring-1 ring-rose-900/5 p-8 sm:p-10 transition-all duration-500" id="card-container">

<div className="flex flex-col items-center text-center space-y-8" id="question-state">
<div className="relative group">
<div className="absolute inset-0 bg-rose-400/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="relative w-16 h-16 rounded-2xl bg-gradient-to-b from-white to-pink-50 border border-pink-100 shadow-sm flex items-center justify-center">
<iconify-icon className="text-rose-500 text-3xl" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="space-y-3">
<h1 className="sm:text-5xl text-4xl font-bold text-zinc-900 tracking-tight">Bebii</h1>
<p className="text-lg sm:text-xl font-medium text-zinc-600 tracking-tight">
                        Will you be my Valentine?
                    </p>
</div>
<p className="text-sm text-zinc-500 max-w-xs mx-auto leading-relaxed font-medium">
                    This request is loading... Please press Start to continue your player 2 journey.
                </p>
<div className="w-full pt-2 flex flex-col sm:flex-row gap-3 relative justify-center items-center">
<button className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 bg-rose-500 text-white text-base font-bold rounded-lg hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-all active:scale-95 w-full sm:w-auto z-20 whitespace-nowrap shadow-lg shadow-rose-200" onclick="acceptProposal()">
<span className="">Yes</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="inline-flex hover:bg-pink-50 hover:border-pink-300 transition-all focus:outline-none sm:w-auto whitespace-nowrap text-base font-bold text-rose-400 bg-white w-full z-10 border-pink-100 border rounded-lg pt-3 pr-8 pb-3 pl-8 items-center justify-center" id="no-btn" onclick="handleNoClick()">
                        No
                    </button>
</div>
</div>

<div className="hidden flex-col items-center text-center space-y-6 animate-fade-in" id="success-state">
<div className="w-16 h-16 rounded-full bg-rose-100 border border-rose-200 flex items-center justify-center">
<iconify-icon className="text-rose-500 text-3xl" icon="solar:star-fall-bold" strokeWidth="1.5"></iconify-icon>
</div>
<div className="space-y-2 w-full">
<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
                        LEVEL UP!
                    </h2>
</div>

<div className="bg-white/60 rounded-xl p-6 border border-pink-100 text-left w-full shadow-sm">
<p className="text-sm text-zinc-700 leading-relaxed font-medium tracking-wide">
<span className="text-rose-500 font-bold">"</span>
                        Thank you for saying yes! You've just unlocked the best Valentine's date ever. No refunds, no exchanges, just pure love!
                        <span className="text-rose-500 font-bold">" Call me ASAP!</span>
</p>
</div>
<div className="pt-4 w-full">
<div className="flex flex-col gap-3">

<div className="flex items-center justify-between p-4 bg-white border border-pink-100 rounded-lg shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-rose-400">
<iconify-icon className="text-lg" icon="solar:calendar-date-bold"></iconify-icon>
</div>
<div className="text-left">
<p className="text-xs text-rose-400 font-bold uppercase tracking-wider">Quest Date</p>
<p className="text-sm text-zinc-900 font-bold">February 14th</p>
</div>
</div>
<div className="text-right">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 border border-green-200">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon> READY
                                </span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="relative z-10 py-6 text-center">
<p className="text-xs text-rose-300 font-medium">
    © 2026
    <a className="underline hover:text-rose-500 transition-colors" href="https://dev-ebenezer.netlify.app/">
      View My Portfolio
    </a>.
    Game On.
  </p>
</footer>


    </>
  );
}
