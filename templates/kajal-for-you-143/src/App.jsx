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



        // --- Romantic Heart Rain ---
        function createHeart() {
            const container = document.getElementById('heartsContainer');
            if(container.children.length > 25) return; 

            const heart = document.createElement('div');
            heart.classList.add('floating-heart');
            const icons = ['heart-bold', 'heart-linear', 'heart-angle-bold'];
            const randomIcon = icons[Math.floor(Math.random() * icons.length)];
            
            // Warmer colors for the hearts
            heart.innerHTML = `<iconify-icon icon="solar:${randomIcon}" style="color: rgba(225, 29, 72, ${Math.random() * 0.4 + 0.1}); font-size: ${Math.random() * 24 + 12}px;"></iconify-icon>`;
            
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 5 + 12 + 's';
            
            container.appendChild(heart);
            setTimeout(() => heart.remove(), 17000);
        }
        setInterval(createHeart, 600);

        // --- No Button Logic ---
        const noBtn = document.getElementById('noBtn');
        
        function moveButton() {
            const radius = 140; 
            const randomAngle = Math.random() * 2 * Math.PI; 
            
            const x = Math.cos(randomAngle) * radius;
            const y = Math.sin(randomAngle) * (radius * 0.8); // Slightly flattened vertically
            
            noBtn.style.transform = `translate(${x}px, ${y}px)`;
            
            const phrases = ["Try Again", "Kajal Please", "Be Mine?", "Click Yes"];
            noBtn.innerText = phrases[Math.floor(Math.random() * phrases.length)];
        }

        // --- Acceptance Logic ---
        function acceptProposal() {
            const duration = 3000;
            const end = Date.now() + duration;
            // Warmer confetti colors
            const colors = ['#e11d48', '#f43f5e', '#ffe4e6', '#ffd700'];

            (function frame() {
                confetti({
                    particleCount: 5,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: colors
                });
                confetti({
                    particleCount: 5,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: colors
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }());

            const card = document.getElementById('questionCard');
            const success = document.getElementById('successMessage');
            
            // Fade out card
            card.classList.add('fade-exit-active');
            
            setTimeout(() => {
                card.classList.add('hidden');
                card.classList.remove('fade-exit-active');
                
                success.classList.remove('hidden');
                success.classList.add('fade-enter');
                
                // Trigger reflow
                void success.offsetWidth;
                
                success.classList.add('fade-enter-active');
                success.classList.remove('fade-enter');
            }, 500);
        }

        // --- Reset Logic ---
        function resetProposal() {
            const card = document.getElementById('questionCard');
            const success = document.getElementById('successMessage');
            
            // Fade out success
            success.style.opacity = '0';
            success.style.transform = 'scale(0.9)';
            success.style.transition = 'all 0.5s ease';

            setTimeout(() => {
                success.classList.add('hidden');
                success.style.opacity = '';
                success.style.transform = '';
                success.style.transition = '';
                success.classList.remove('fade-enter-active');

                card.classList.remove('hidden');
                // Trigger reflow for animation
                void card.offsetWidth;
                card.classList.add('fade-enter');
                requestAnimationFrame(() => {
                    card.classList.add('fade-enter-active');
                    card.classList.remove('fade-enter');
                    setTimeout(() => card.classList.remove('fade-enter-active'), 800);
                });

                // Reset No Button
                noBtn.style.transform = "translateX(140px)";
                noBtn.innerText = "No";
            }, 500);
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
      


<div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-950 via-slate-950 to-black z-0"></div>

<div className="blob w-[600px] h-[600px] bg-rose-900/30 rounded-full top-0 left-1/4 -translate-x-1/2 -translate-y-1/2 mix-blend-screen animate-pulse"></div>
<div className="blob w-[500px] h-[500px] bg-red-900/20 rounded-full bottom-0 right-1/4 translate-x-1/2 translate-y-1/3 mix-blend-screen" style={{animationDelay: '-5s'}}></div>

<div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 z-0 pointer-events-none"></div>

<div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" id="heartsContainer"></div>

<main className="relative z-10 w-full max-w-lg mx-4 flex flex-col items-center justify-center min-h-[400px]">

<div className="hidden absolute inset-0 z-20 flex flex-col items-center justify-center text-center" id="successMessage">

<div className="relative mb-10">
<div className="absolute inset-0 bg-rose-600 blur-[60px] opacity-40 animate-pulse"></div>
<div className="heart-beat">
<iconify-icon className="text-rose-500 text-7xl md:text-8xl relative z-10" icon="solar:heart-angle-bold"></iconify-icon>
</div>
</div>
<h2 className="font-display italic text-4xl md:text-5xl text-white tracking-tight mb-6 text-glow drop-shadow-2xl">
                My heart is yours forever.
            </h2>
<p className="text-rose-100/80 text-xl font-light leading-relaxed mb-12 drop-shadow-lg max-w-xs mx-auto">
                I love you, Kajal. I can't wait to celebrate with you.
            </p>

<button className="group flex items-center gap-2 px-6 py-2 rounded-full border border-rose-200/20 text-rose-200/60 hover:text-white hover:border-rose-200/50 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm" onclick="resetProposal()">
<iconify-icon className="text-lg group-hover:-rotate-180 transition-transform duration-500" icon="solar:restart-linear"></iconify-icon>
<span className="font-display italic text-sm tracking-wide">Replay</span>
</button>
</div>

<div className="w-full glass-panel rounded-[2.5rem] p-8 md:p-14 text-center transform transition-all duration-700" id="questionCard">

<div className="flex justify-center mb-8">
<iconify-icon className="text-rose-500/80 text-5xl animate-bounce" icon="solar:heart-bold" style={{animationDuration: '3s'}}></iconify-icon>
</div>

<p className="font-display italic text-rose-300/90 text-xl mb-3 tracking-wide">My Dearest Kajal,</p>
<h1 className="font-display italic font-medium text-4xl md:text-5xl text-white mb-6 tracking-tight leading-[1.1] text-glow">
                Will you be my Valentine?
            </h1>
<p className="text-lg text-white/60 font-light leading-relaxed mb-12 mx-auto max-w-sm">
                You are the poetry my heart writes every day.
            </p>

<div className="relative h-28 w-full flex items-center justify-center" id="interactionArea">

<button className="absolute z-20 px-10 py-4 rounded-full bg-rose-600 text-white font-display italic text-xl tracking-wide shadow-[0_0_40px_rgba(225,29,72,0.3)] hover:shadow-[0_0_60px_rgba(225,29,72,0.5)] hover:bg-rose-500 hover:scale-105 transition-all duration-300 overflow-hidden group border border-rose-400/30" id="yesBtn" onclick="acceptProposal()">
<span className="relative z-10 flex items-center gap-2">
                        Yes, Always
                        <iconify-icon className="text-xl group-hover:fill-current transition-colors" icon="solar:heart-linear"></iconify-icon>
</span>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
</button>

<button className="absolute z-30 px-6 py-2 rounded-full bg-white/5 text-white/40 font-display italic text-base border border-white/5 hover:bg-white/10 hover:text-white transition-colors backdrop-blur-md" id="noBtn" onmouseover="moveButton()" style={{transform: 'translateX(140px)'}}>
                    No
                </button>
</div>
</div>
</main>

<div className="fixed bottom-6 w-full text-center z-10 pointer-events-none opacity-30">
<iconify-icon className="text-rose-200 text-2xl" icon="solar:infinity-linear"></iconify-icon>
</div>


    </>
  );
}
