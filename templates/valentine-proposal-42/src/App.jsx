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



        // Background Animation
        const container = document.getElementById('hearts-container');
        const icons = ['solar:heart-linear', 'solar:heart-shine-linear', 'solar:cupid-linear'];
        
        for(let i = 0; i < 12; i++) {
            const heart = document.createElement('div');
            heart.className = 'bg-heart text-rose-300/40';
            heart.innerHTML = `<iconify-icon icon="${icons[Math.floor(Math.random() * icons.length)]}" width="${Math.random() * 20 + 10}"></iconify-icon>`;
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 5 + 10) + 's';
            heart.style.animationDelay = (Math.random() * 5) + 's';
            container.appendChild(heart);
        }

        // Logic for the jumping "No" button
        const noBtn = document.getElementById('noBtn');
        const phrases = ["u r mean", "try again", "nope", "not that"];
        let phraseIndex = 0;

        function moveButton() {
            // Calculate random position within viewport, keeping padding from edges
            const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 40) + 20;
            const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 40) + 20;

            noBtn.style.position = 'fixed';
            noBtn.style.left = `${x}px`;
            noBtn.style.top = `${y}px`;
            
            // Cycle through text
            noBtn.innerText = phrases[phraseIndex];
            phraseIndex = (phraseIndex + 1) % phrases.length;
            
            // Add slight rotation for chaotic effect
            const rotate = Math.random() * 20 - 10;
            noBtn.style.transform = `rotate(${rotate}deg)`;
        }

        // Handle touch for mobile devices
        noBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            moveButton();
        });

        // Yes Button Logic
        function sayYes() {
            const card = document.getElementById('card');
            const success = document.getElementById('success');
            const noButton = document.getElementById('noBtn');

            // Hide No button immediately
            noButton.style.display = 'none';

            // Transition cards
            card.style.opacity = '0';
            card.style.transform = 'scale(0.9)';
            
            setTimeout(() => {
                card.style.display = 'none';
                success.classList.remove('hidden');
                
                // Force reflow
                void success.offsetWidth;
                
                success.style.opacity = '1';
                success.style.transform = 'scale(1)';
                
                triggerConfetti();
            }, 300);
        }

        function triggerConfetti() {
            const colors = ['#f43f5e', '#fb7185', '#fda4af'];
            
            const end = Date.now() + 3000;

            (function frame() {
                confetti({
                    particleCount: 3,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: colors
                });
                confetti({
                    particleCount: 3,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: colors
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }());
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
      

<div className="absolute inset-0 pointer-events-none z-0">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/0 to-rose-100/50"></div>
<div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-pink-200/30 rounded-full blur-[100px]"></div>
<div className="absolute top-[40%] right-[0%] w-[40%] h-[40%] bg-rose-200/30 rounded-full blur-[100px]"></div>
<div id="hearts-container"></div>
</div>
<main className="relative z-10 w-full max-w-sm mx-4">

<div className="glass rounded-3xl p-8 shadow-2xl shadow-rose-900/10 text-center transition-all duration-500 ease-in-out" id="card">

<div className="mb-6 inline-flex justify-center items-center relative">
<div className="absolute inset-0 bg-rose-400 blur-xl opacity-20 rounded-full animate-pulse"></div>
<div className="bg-white rounded-2xl p-4 shadow-sm border border-rose-50 relative">
<iconify-icon className="text-rose-500" icon="solar:heart-angle-linear" width="42"></iconify-icon>
</div>
</div>

<h1 className="text-3xl text-slate-900 font-medium tracking-tight mb-3 leading-tight">
                Will u bee my valentine my <span className="text-rose-500 italic">little fairy?</span>
</h1>

<p className="text-slate-500 text-sm mb-8 font-light leading-relaxed">
                I promise to make it special.
            </p>

<div className="relative h-12 w-full flex justify-center items-center gap-4">

<button className="btn-transition z-10 px-8 py-2.5 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-500/25 active:scale-95 flex items-center gap-2" onclick="sayYes()">
<span>Yes</span>
<iconify-icon icon="solar:heart-linear" width="16"></iconify-icon>
</button>

<button className="btn-transition px-8 py-2.5 bg-white text-slate-600 border border-slate-200 rounded-full text-sm font-medium hover:bg-rose-50 z-20 whitespace-nowrap" id="noBtn" onfocus="moveButton()" onmouseover="moveButton()">
                    No
                </button>
</div>
</div>

<div className="hidden glass rounded-3xl p-8 shadow-2xl shadow-rose-500/20 text-center transform scale-95 opacity-0 transition-all duration-700" id="success">
<div className="mb-6 inline-flex justify-center">
<div className="bg-gradient-to-tr from-rose-400 to-pink-500 rounded-full p-4 shadow-lg shadow-rose-500/30 text-white animate-bounce">
<iconify-icon icon="solar:confetti-minimalistic-linear" width="48"></iconify-icon>
</div>
</div>
<h1 className="text-3xl text-slate-900 font-medium tracking-tight mb-4">
                Yayyyyyyy!
            </h1>
<p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                Hello my valentine, I've planned a date for us on 14th Feb. Hope to see u!
            </p>
<div className="inline-flex items-center justify-center gap-2 text-xs text-rose-500 font-medium tracking-widest uppercase bg-rose-50 px-4 py-2 rounded-full border border-rose-100">
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon>
<span>Save the Date</span>
</div>
</div>
</main>


    </>
  );
}
