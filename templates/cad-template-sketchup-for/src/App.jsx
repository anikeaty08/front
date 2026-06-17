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



        const btnNo = document.getElementById('btn-no');
        const proposalCard = document.getElementById('proposal-card');
        const successCard = document.getElementById('success-card');
        
        let moveCount = 0;
        const noTexts = ["Are you sure?", "Really?", "Don't break my heart!", "Pretty please?", "Last chance!", "Ok, I'll cry..."];

        function dodgeButton() {
            moveCount++;
            
            // 1. Change Text
            const span = btnNo.querySelector('span');
            if (moveCount <= noTexts.length) {
                span.innerText = noTexts[moveCount - 1];
            } else {
                // Eventually just turn it into a Yes button logically
                span.innerText = "YES 💖";
                btnNo.onclick = handleYes;
                btnNo.style.backgroundColor = "#f43f5e"; // rose-500
                btnNo.onmouseover = null;
                return;
            }

            // 2. Shrink slightly
            const currentScale = 1 - (moveCount * 0.05);
            btnNo.style.transform = `scale(${Math.max(0.5, currentScale)})`;

            // 3. Move Randomly
            // Get viewport dimensions
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            
            // Get button dimensions
            const btnRect = btnNo.getBoundingClientRect();
            
            // Calculate safe boundaries (keeping it somewhat on screen)
            const maxLeft = viewportWidth - btnRect.width - 20;
            const maxTop = viewportHeight - btnRect.height - 20;
            
            const newLeft = Math.max(20, Math.random() * maxLeft);
            const newTop = Math.max(20, Math.random() * maxTop);

            btnNo.style.position = 'fixed';
            btnNo.style.left = newLeft + 'px';
            btnNo.style.top = newTop + 'px';
            btnNo.style.zIndex = '50';
        }

        function handleYes() {
            // 1. Transition UI
            proposalCard.style.opacity = '0';
            proposalCard.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
                proposalCard.style.display = 'none';
                successCard.classList.remove('hidden-state');
                successCard.classList.add('fade-enter');
                
                // Trigger animation start
                requestAnimationFrame(() => {
                    successCard.classList.add('fade-enter-active');
                });
            }, 600);

            // 2. Fire Confetti
            createConfetti();
        }

        function createConfetti() {
            const colors = ['#fb7185', '#f43f5e', '#ffe4e6', '#ffffff'];
            const icons = ['heart-bold', 'heart-shine-linear', 'star-bold'];

            // Create 50 pieces
            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.className = 'confetti-heart';
                    
                    // Random Icon
                    const icon = icons[Math.floor(Math.random() * icons.length)];
                    confetti.innerHTML = `<iconify-icon icon="solar:${icon}"></iconify-icon>`;
                    
                    // Random Position & Style
                    confetti.style.left = Math.random() * 100 + 'vw';
                    confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
                    confetti.style.fontSize = (Math.random() * 20 + 10) + 'px';
                    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
                    
                    document.body.appendChild(confetti);

                    // Cleanup
                    setTimeout(() => confetti.remove(), 5000);
                }, i * 50);
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
      

<div className="absolute inset-0 z-0">

<img alt="Background Memory" className="w-full h-full object-cover blur-sm scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e4420f9a-29c2-4e34-9043-83222233849b_1600w.png"/>

<div className="absolute inset-0 bg-rose-950/60 mix-blend-multiply transition-opacity duration-1000"></div>
<div className="bg-gradient-to-tr from-white/10 to-white/0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
<div className="absolute top-[15%] left-[10%] text-rose-300/20 text-6xl floating-heart">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute bottom-[20%] right-[15%] text-rose-300/20 text-5xl floating-heart delay-100">
<iconify-icon icon="solar:heart-shine-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute top-[40%] right-[20%] text-rose-300/10 text-7xl floating-heart delay-200">
<iconify-icon icon="solar:cupid-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<main className="flex flex-col text-center w-full max-w-lg z-10 pr-6 pl-6 relative items-center">

<div className="flex flex-col transition-all duration-700 ease-in-out items-center" id="proposal-card">

<div className="mb-8 p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl shadow-rose-900/50 animate-heartbeat">
<iconify-icon className="text-4xl text-rose-400" height="36" icon="solar:heart-bold" style={{color: 'rgb(251, 113, 133)'}} width="36"></iconify-icon>
</div>

<h1 className="md:text-6xl leading-tight text-4xl font-medium text-white tracking-tight font-playfair mb-6 drop-shadow-lg">
                Love, will you be my <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-300 to-rose-200">
                    Valentine?
                </span>
</h1>
<p className="text-lg font-light text-rose-100/80 mb-10 max-w-sm leading-relaxed">
                Life is just better with you by my side.
            </p>

<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center relative min-h-[60px]">
<button className="group sm:w-40 hover:bg-rose-400 shadow-rose-900/40 transition-all duration-300 hover:-translate-y-1 active:scale-95 flex overflow-hidden text-white bg-rose-500 w-full rounded-xl pt-3.5 pb-3.5 relative shadow-lg gap-x-2 gap-y-2 items-center justify-center" onclick="handleYes()">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shine_1s_infinite]"></div>
<span className="font-medium text-sm tracking-wide">YES 💖</span>
</button>
<button className="w-full sm:w-40 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-rose-100 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 active:scale-95" id="btn-no" onclick="dodgeButton()" onmouseover="dodgeButton()" style={{position: 'fixed', left: '20px', top: '297.622px', zIndex: '50'}}>
<span className="font-medium text-sm tracking-wide">Really?</span>
</button>
</div>
</div>

<div className="hidden-state flex flex-col max-w-md mr-auto ml-auto items-center" id="success-card">
<div className="mb-6 relative">
<div className="absolute inset-0 bg-rose-500 blur-2xl opacity-20 rounded-full"></div>
<img alt="Happy Cat" className="relative w-32 h-32 object-cover rounded-2xl border-2 border-white/20 shadow-2xl" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3R6eW56bmR6ZzR6eW56bmR6ZzR6eW56bmR6ZzR6eW56bmR6ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MDJ9IbxxvDUQM/giphy.gif"/>
</div>
<h2 className="md:text-5xl text-3xl font-medium text-white tracking-tight mb-6 drop-shadow-md">
                Yay!
            </h2>
<p className="leading-relaxed text-xl font-light text-rose-50 mb-8">
                I love you so much, <span className="font-medium text-rose-300">Tenshi</span> 💕 <br/>
                Happy Valentine’s Day.
            </p>
<div className="flex gap-3">
<button className="px-6 py-2.5 rounded-lg bg-white/10 border border-white/10 text-xs font-medium text-rose-200 hover:bg-white/20 transition-colors backdrop-blur-sm" onclick="window.location.reload()">
                    Replay Moment
                </button>
</div>
</div>
</main>

<footer className="absolute bottom-6 w-full text-center z-10">
<p className="text-xs font-medium tracking-widest text-rose-200/40 uppercase">
            Forever &amp; Always
        </p>
</footer>



    </>
  );
}
