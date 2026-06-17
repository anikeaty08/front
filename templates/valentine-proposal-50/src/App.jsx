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
      const successModal = document.getElementById('success-modal');
      const modalContent = document.getElementById('modal-content');
      let moveCount = 0;

      function showSecret(message) {
        const display = document.getElementById('secret-display');
        display.style.opacity = '0';
        display.style.transform = 'translateY(8px)';
        setTimeout(() => {
            display.innerText = message;
            display.style.opacity = '1';
            display.style.transform = 'translateY(0)';
        }, 200);
      }

      function dodgeButton() {
          moveCount++;
          const phrases = [
              "Are you sure?",
              "Really?",
              "Think again...",
              "Aya, please!",
              "Last chance!",
              "Don't be mean!"
          ];

          const span = btnNo.querySelector('span');
          if (moveCount <= phrases.length) {
              span.innerText = phrases[moveCount - 1];
          }

          if (window.innerWidth < 768 && moveCount > 4) {
              btnNo.style.opacity = '0';
              setTimeout(acceptProposal, 600);
              return;
          }

          const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
          const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
          
          const btnW = btnNo.offsetWidth;
          const btnH = btnNo.offsetHeight;

          // Limit movement to center 80% of screen to avoid getting stuck at edges
          let newLeft = Math.random() * (vw - btnW - 100) + 50;
          let newTop = Math.random() * (vh - btnH - 100) + 50;

          btnNo.style.position = 'fixed';
          btnNo.style.zIndex = '50';
          btnNo.style.left = `${newLeft}px`;
          btnNo.style.top = `${newTop}px`;
          btnNo.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
      }

      function acceptProposal() {
          if(btnNo) btnNo.style.display = 'none';
          successModal.classList.remove('opacity-0', 'pointer-events-none');
          modalContent.classList.remove('scale-95');
          modalContent.classList.add('scale-100');
          fireConfetti();
      }

      function fireConfetti() {
          const icons = ['heart-bold', 'star-bold', 'music-note-bold', 'confetti-minimalistic-bold'];
          const colors = ['#f43f5e', '#fb7185', '#fda4af', '#e11d48', '#fecdd3'];

          const interval = setInterval(() => {
              const heart = document.createElement('div');
              const randomIcon = icons[Math.floor(Math.random() * icons.length)];

              heart.innerHTML = `<iconify-icon icon="solar:${randomIcon}"></iconify-icon>`;
              heart.className = 'confetti-heart';

              heart.style.left = Math.random() * 100 + 'vw';
              heart.style.top = -50 + 'px';
              heart.style.color = colors[Math.floor(Math.random() * colors.length)];
              heart.style.fontSize = (Math.random() * 24 + 16) + 'px';
              heart.style.animationDuration = (Math.random() * 2 + 2.5) + 's';

              document.body.appendChild(heart);
              setTimeout(() => heart.remove(), 4000);
          }, 80);

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
      

<div className="fixed inset-0 pointer-events-none overflow-hidden select-none">
<div className="absolute top-[12%] left-[8%] text-rose-200/50 text-7xl floating-icon" style={{animationDelay: '0s'}}>
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute bottom-[25%] right-[12%] text-rose-200/50 text-6xl floating-icon" style={{animationDelay: '-2.5s'}}>
<iconify-icon icon="solar:heart-shine-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute top-[35%] right-[28%] text-rose-100/60 text-4xl floating-icon" style={{animationDelay: '-4s'}}>
<iconify-icon icon="solar:cupid-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute bottom-[15%] left-[20%] text-rose-100/60 text-5xl floating-icon" style={{animationDelay: '-1.5s'}}>
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<nav className="w-full flex justify-center py-6 z-40 fixed top-0">
<div className="bg-white/70 backdrop-blur-xl border border-slate-200/60 shadow-sm shadow-slate-200/20 px-5 py-2 rounded-full flex items-center gap-3 transition-transform hover:scale-[1.02] duration-300">
<span className="text-xs font-medium tracking-wide uppercase text-slate-500">
                Priority Mail
            </span>
<div className="h-1 w-1 rounded-full bg-rose-400/60"></div>
<span className="text-xs font-medium tracking-wide uppercase text-rose-600">
                For Aya Shaheen
            </span>
</div>
</nav>

<main className="flex-grow flex flex-col items-center justify-center px-6 pt-32 pb-20 max-w-4xl mx-auto w-full z-10">

<div className="reveal mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50/50 border border-rose-100/80 text-rose-600 shadow-[0_2px_8px_-2px_rgba(251,113,133,0.15)]">
<iconify-icon className="text-base" icon="solar:bell-bing-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium tracking-wide uppercase">
                Important Question
            </span>
</div>

<div className="reveal delay-100 text-center mb-6">
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-slate-900 leading-[1.15]">
                Will you be my Valentine,
                <span className="block mt-2 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 bg-clip-text text-transparent animate-gradient pb-2">
                    Aya Shaheen?
                </span>
</h1>
</div>

<p className="reveal delay-200 text-center text-lg md:text-xl font-light text-slate-500 max-w-lg mx-auto leading-relaxed mb-12 tracking-tight">
            I've planned a beautiful day on <span className="text-slate-800 font-medium">Feb 13th</span>, but it's missing the most important ingredient: <span className="text-slate-800 font-medium">You</span>.
        </p>

<div className="reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto relative min-h-[60px]">
<button className="group relative w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl shadow-lg shadow-rose-900/10 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden border border-transparent" onclick="acceptProposal()">
<div className="btn-shine"></div>
<div className="flex items-center justify-center gap-2.5 relative z-10">
<span className="text-sm font-medium tracking-wide">
                        Yes, I'd love to
                    </span>
<iconify-icon className="text-lg" icon="solar:heart-angle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white/60 hover:bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-600 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow hover:border-slate-300" id="btn-no" onclick="dodgeButton()" onmouseover="dodgeButton()">
<span className="text-sm font-medium tracking-wide">No, thanks</span>
</button>
</div>

<div className="reveal delay-500 mt-20 mb-2 flex flex-col items-center gap-4 w-full">
<p className="text-xs font-medium tracking-widest uppercase text-slate-400/80">
                Unlock Secret Notes
            </p>
<div className="flex gap-4">
<button className="group w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-rose-500 hover:border-rose-100 hover:shadow-lg hover:shadow-rose-100/50 hover:-translate-y-1 transition-all flex items-center justify-center" onclick="showSecret('I really like you ✨')">
<iconify-icon className="text-xl" icon="solar:letter-heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="group w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-rose-500 hover:border-rose-100 hover:shadow-lg hover:shadow-rose-100/50 hover:-translate-y-1 transition-all flex items-center justify-center" onclick="showSecret('I want to be with you forever ♾️')">
<iconify-icon className="text-xl" icon="solar:heart-lock-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="group w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-rose-500 hover:border-rose-100 hover:shadow-lg hover:shadow-rose-100/50 hover:-translate-y-1 transition-all flex items-center justify-center" onclick="showSecret('I love everything about you 💖')">
<iconify-icon className="text-xl" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="h-6 text-sm font-medium text-rose-500 transition-all duration-300 opacity-0 translate-y-2" id="secret-display"></div>
</div>

<div className="reveal delay-500 mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

<div className="group p-6 rounded-2xl bg-white border border-slate-200/60 shadow-[0_4px_20px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-12px_rgba(251,113,133,0.15)] hover:border-rose-100/50 transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-xl" icon="solar:smile-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-2 tracking-tight">
                    Endless Laughter
                </h3>
<p className="text-xs font-normal text-slate-500 leading-relaxed">
                    I promise to bring my best mood—and probably some terrible jokes—just to see you smile, Aya.
                </p>
</div>

<div className="group p-6 rounded-2xl bg-white border border-slate-200/60 shadow-[0_4px_20px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-12px_rgba(251,113,133,0.15)] hover:border-rose-100/50 transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-xl" icon="solar:crown-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-2 tracking-tight">Just For You</h3>
<p className="text-xs font-normal text-slate-500 leading-relaxed">
                    You’re my favorite person, and you deserve a day that is entirely focused on making you happy.
                </p>
</div>

<div className="group p-6 rounded-2xl bg-white border border-slate-200/60 shadow-[0_4px_20px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-12px_rgba(251,113,133,0.15)] hover:border-rose-100/50 transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-xl" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-2 tracking-tight">
                    Sweet Memories
                </h3>
<p className="text-xs font-normal text-slate-500 leading-relaxed">
                    Let's add another wonderful chapter to our story. I can't wait to spend Feb 13th with you.
                </p>
</div>
</div>
</main>

<footer className="w-full py-8 text-center border-t border-slate-100/50 bg-white/30 backdrop-blur-sm">
<p className="text-xs text-slate-400 font-medium tracking-widest uppercase opacity-70">
            Made with <iconify-icon className="inline text-rose-400 align-middle" icon="solar:heart-bold"></iconify-icon> for Aya Shaheen
        </p>
</footer>

<div className="fixed inset-0 z-50 flex items-center justify-center opacity-0 pointer-events-none transition-all duration-700 bg-white/90 backdrop-blur-xl" id="success-modal">
<div className="text-center p-10 max-w-md w-full scale-95 transition-all duration-500" id="modal-content">
<div className="w-24 h-24 mx-auto bg-rose-50 rounded-full flex items-center justify-center text-rose-500 mb-8 border border-rose-100 shadow-sm animate-bounce">
<iconify-icon className="text-5xl" icon="solar:heart-bold"></iconify-icon>
</div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">
                It's a Date!
            </h2>
<p className="text-sm font-light text-slate-500 leading-relaxed mb-10 px-4">
                You've made me the happiest person, Aya. Get ready for an amazing time.
            </p>
<div className="inline-flex items-center gap-3 px-5 py-3 bg-white rounded-xl border border-slate-200 text-slate-600 shadow-sm">
<iconify-icon className="text-lg text-rose-500" icon="solar:calendar-linear"></iconify-icon>
<span className="text-sm font-medium">February 13th</span>
<span className="text-slate-300">|</span>
<span className="text-sm font-medium">7:00 PM</span>
</div>
</div>
</div>


    </>
  );
}
