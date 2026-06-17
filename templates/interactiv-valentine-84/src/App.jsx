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
        const bgMusic = document.getElementById('bg-music');
        let moveCount = 0;

        function nextScreen(current, next) {
            const currentEl = document.getElementById(`screen-${current}`);
            const nextEl = document.getElementById(`screen-${next}`);
            
            // Fade out current
            currentEl.classList.add('fade-out');
            
            setTimeout(() => {
                currentEl.classList.add('hidden');
                currentEl.classList.remove('fade-out');
                
                // Show next
                nextEl.classList.remove('hidden');
                nextEl.classList.add('flex'); // Ensure flex display
                
                // Trigger animations for next screen elements
                const children = nextEl.querySelectorAll('.fade-in-up');
                children.forEach(child => {
                    child.style.animation = 'none';
                    child.offsetHeight; /* trigger reflow */
                    child.style.animation = null; 
                });
            }, 450);
        }

        function dodgeButton() {
            moveCount++;
            const phrases = [
                "Oops… missed it 😜",
                "Not so easy 😏",
                "Try again, cutie 👀❤️",
                "Too slow! 🏃‍♂️",
                "Nice try! ✨"
            ];

            // Update text
            const span = btnNo.querySelector('span');
            span.innerText = phrases[moveCount % phrases.length];

            // Mobile fallback
            if (window.innerWidth < 768 && moveCount > 5) {
                btnNo.style.opacity = '0.5';
                btnNo.style.pointerEvents = 'none';
            }

            // Calculate movement
            // Using fixed positioning relative to viewport to ensure it runs away
            const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
            
            const btnRect = btnNo.getBoundingClientRect();
            const btnW = btnRect.width;
            const btnH = btnRect.height;

            // Generate new random position with padding
            let newX = Math.random() * (vw - btnW - 40) + 20;
            let newY = Math.random() * (vh - btnH - 40) + 20;

            btnNo.style.position = 'fixed';
            btnNo.style.left = `${newX}px`;
            btnNo.style.top = `${newY}px`;
            btnNo.style.width = 'auto'; // allow it to shrink if needed
            btnNo.style.minWidth = '120px';
            btnNo.style.zIndex = '50';
            
            // Add tilt
            const rotate = Math.random() * 20 - 10;
            btnNo.style.transform = `rotate(${rotate}deg)`;
        }

        function handleYes() {
            // Play Music
            bgMusic.volume = 0.5;
            bgMusic.play().catch(e => console.log("Audio requires interaction first"));
            
            // Confetti
            fireConfetti();
            document.body.classList.add('celebrate');
            
            // Transition
            nextScreen(2, 3);
            
            // Auto advance after reading (optional, but button provided)
            setTimeout(() => {
               // Optional auto-scroll or hint could go here
            }, 2000);
        }

        function finalizeChoice(choice) {
            // Show sealed deal alert
            const btn = event.currentTarget;
            btn.innerHTML = `
                <div class="w-12 h-12 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center text-2xl mb-3">
                    <iconify-icon icon="solar:check-circle-bold"></iconify-icon>
                </div>
                <span class="text-sm font-medium text-emerald-600">Valentine Confirmed 💘</span>
            `;
            
            setTimeout(() => {
                nextScreen(4, 5);
                fireConfetti();
            }, 800);
        }

        function fireConfetti() {
            const icons = ['heart-bold', 'star-bold', 'music-note-bold', 'confetti-minimalistic-bold'];
            const colors = ['#f43f5e', '#fb7185', '#fda4af', '#e11d48'];

            const interval = setInterval(() => {
                const heart = document.createElement('div');
                const randomIcon = icons[Math.floor(Math.random() * icons.length)];
                
                heart.innerHTML = `<iconify-icon icon="solar:${randomIcon}"></iconify-icon>`;
                heart.className = 'confetti-heart';
                
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.top = -50 + 'px';
                heart.style.color = colors[Math.floor(Math.random() * colors.length)];
                heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
                heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
                
                document.body.appendChild(heart);
                setTimeout(() => heart.remove(), 4000);
            }, 100);

            setTimeout(() => clearInterval(interval), 3000);
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
      

<div className="fixed inset-0 pointer-events-none overflow-hidden">
<div className="absolute top-[10%] left-[5%] text-rose-200/40 text-7xl floating-icon" style={{animationDelay: '0s'}}>
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute bottom-[20%] right-[10%] text-rose-200/40 text-6xl floating-icon" style={{animationDelay: '-2s'}}>
<iconify-icon icon="solar:heart-shine-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute top-[40%] right-[25%] text-rose-200/30 text-4xl floating-icon" style={{animationDelay: '-4s'}}>
<iconify-icon icon="solar:cupid-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<audio id="bg-music" loop="">

<source src="https://pixabay.com/music/download/music-116238.mp3" type="audio/mp3"/>
</audio>
<main className="relative z-10 w-full max-w-2xl px-6 flex flex-col items-center justify-center min-h-[400px]" id="main-container">

<div className="w-full flex flex-col items-center text-center fade-in-up" id="screen-1">
<div className="mb-8 p-4 bg-white/50 backdrop-blur-xl border border-white/60 rounded-full shadow-sm shadow-rose-100/20 inline-flex">
<iconify-icon className="text-3xl text-rose-400" icon="solar:chat-round-dots-linear"></iconify-icon>
</div>
<h1 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900 mb-8 leading-tight">
                Hey… can I ask you<br/>something important? 🥺❤️
            </h1>
<button className="group relative px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full shadow-lg shadow-slate-200 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden" onclick="nextScreen(1, 2)">
<div className="btn-shine"></div>
<div className="flex items-center gap-2 relative z-10">
<span className="text-sm font-medium">Okay 💕</span>
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</button>
</div>

<div className="w-full hidden flex-col items-center text-center relative h-[400px]" id="screen-2">
<div className="fade-in-up w-full flex flex-col items-center">
<div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-[10px] font-medium tracking-widest uppercase">
                    Question for you
                </div>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-slate-900 mb-12">
                    Will you be my<br/>
<span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">Valentine?</span> 🌹✨
                </h2>
<div className="flex flex-col items-center gap-4 w-full max-w-xs relative">
<button className="w-full py-3.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl shadow-lg shadow-rose-200 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 z-20" onclick="handleYes()">
<span className="text-sm font-medium">Yes 😍</span>
<iconify-icon className="text-lg" icon="solar:heart-bold"></iconify-icon>
</button>
<button className="w-full py-3.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-500 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 z-10" id="btn-no" onmouseover="dodgeButton()" ontouchstart="dodgeButton()">
<span className="text-sm font-medium">No 😅</span>
</button>
</div>
</div>
</div>

<div className="w-full hidden flex-col items-center text-center" id="screen-3">
<div className="fade-in-up flex flex-col items-center">
<div className="w-24 h-24 mb-6 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 shadow-inner">
<iconify-icon className="text-5xl animate-pulse" icon="solar:heart-bold"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-4">
                    YAYYY!! 💖🥹
                </h2>
<p className="text-lg font-light text-slate-500 max-w-md mx-auto leading-relaxed mb-8">
                    You just made my Valentine’s Day unforgettable ✨
                </p>
<div className="animate-bounce mt-4">
<iconify-icon className="text-2xl text-rose-300" icon="solar:arrow-down-linear"></iconify-icon>
</div>
<button className="mt-8 text-sm text-slate-400 hover:text-rose-500 underline underline-offset-4 transition-colors" onclick="nextScreen(3, 4)">
                    Continue...
                </button>
</div>
</div>

<div className="w-full hidden flex-col items-center text-center" id="screen-4">
<div className="fade-in-up w-full flex flex-col items-center">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 mb-2">
                    But wait… one last thing 👀💕
                </h2>
<p className="text-sm text-slate-400 mb-8 font-light">Choose your treat</p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
<button className="group p-6 rounded-2xl bg-white border border-slate-100 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-50 transition-all duration-300 flex flex-col items-center gap-3" onclick="finalizeChoice('Hug')">
<div className="w-12 h-12 rounded-full bg-orange-50 text-orange-400 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:emoji-funny-circle-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-600 group-hover:text-rose-600">A Warm Hug 🤍</span>
</button>
<button className="group p-6 rounded-2xl bg-white border border-slate-100 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-50 transition-all duration-300 flex flex-col items-center gap-3" onclick="finalizeChoice('Coffee')">
<div className="w-12 h-12 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:cup-hot-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-600 group-hover:text-rose-600">Coffee Date ☕</span>
</button>
<button className="group p-6 rounded-2xl bg-white border border-slate-100 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-50 transition-all duration-300 flex flex-col items-center gap-3" onclick="finalizeChoice('Chocolate')">
<div className="w-12 h-12 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:donut-bitten-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-600 group-hover:text-rose-600">Chocolate Treat 🍫</span>
</button>
</div>
</div>
</div>

<div className="w-full hidden flex-col items-center text-center" id="screen-5">
<div className="fade-in-up flex flex-col items-center">
<div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600">
<iconify-icon className="text-base" icon="solar:verified-check-bold"></iconify-icon>
<span className="text-[10px] font-semibold tracking-widest uppercase">Deal Sealed 🤝</span>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">
                    So… it’s a date then ❤️
                </h2>
<p className="text-xl font-light text-rose-500 mb-12">
                    Happy Valentine’s Day 💖
                </p>
<div className="relative pt-8 border-t border-slate-200/60 w-48 mx-auto">
<p className="text-sm text-slate-400 font-medium tracking-wide italic">
                        — Niranjan 😌
                    </p>
</div>
</div>
</div>
</main>


    </>
  );
}
