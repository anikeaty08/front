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
            display.style.transform = 'translateY(5px)';
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
                "Last chance!",
                "Pretty please?",
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
            
            // Constrain within safer bounds to prevent overflow
            const safeMargin = 100;
            const btnW = btnNo.offsetWidth;
            const btnH = btnNo.offsetHeight;
            
            let newLeft = Math.random() * (vw - btnW - (safeMargin * 2)) + safeMargin;
            let newTop = Math.random() * (vh - btnH - (safeMargin * 2)) + safeMargin;

            btnNo.style.position = 'fixed';
            btnNo.style.zIndex = '50';
            btnNo.style.left = `${newLeft}px`;
            btnNo.style.top = `${newTop}px`;
            btnNo.style.transform = `rotate(${Math.random() * 8 - 4}deg)`;
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
      

<div className="fixed inset-0 pointer-events-none overflow-hidden select-none">
<div className="absolute top-[12%] left-[8%] text-rose-100 text-7xl floating-icon" style={{animationDelay: '0s'}}>
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute bottom-[25%] right-[12%] text-rose-100 text-6xl floating-icon" style={{animationDelay: '-2.5s'}}>
<iconify-icon icon="solar:heart-shine-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute top-[35%] right-[20%] text-rose-50 text-5xl floating-icon" style={{animationDelay: '-4s'}}>
<iconify-icon icon="solar:cupid-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<nav className="w-full flex justify-center py-8 z-40 fixed top-0">
<div className="bg-white/70 backdrop-blur-md border border-white/60 shadow-sm shadow-rose-100/30 px-5 py-2 rounded-full flex items-center gap-3 transition-transform hover:scale-[1.02]">
<span className="text-xs font-medium tracking-widest uppercase text-slate-500">
                Priority Mail
            </span>
<div className="h-1 w-1 rounded-full bg-rose-400"></div>
<span className="text-xs font-medium tracking-widest uppercase text-rose-600">
                Bineet Kaur
            </span>
</div>
</nav>

<main className="flex-grow flex flex-col items-center justify-center px-6 pt-32 pb-24 max-w-5xl mx-auto w-full z-10">

<div className="reveal mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-rose-100 text-rose-600 shadow-sm">
<iconify-icon className="text-sm" icon="solar:bell-bing-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium tracking-wide uppercase">
                Important Question
            </span>
</div>

<div className="reveal delay-100 text-center mb-8 max-w-4xl">
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-slate-900 leading-[1.15]">
                Bineet Kaur Pritpal Singh Gulati,
                <span className="block mt-1 text-slate-400 font-light">will you be my</span>
<span className="block mt-1 bg-gradient-to-r from-rose-400 via-pink-500 to-rose-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_4s_ease_infinite] font-semibold pb-2">
                    Valentine?
                </span>
</h1>
</div>

<p className="reveal delay-200 text-center text-base md:text-lg font-light text-slate-500 max-w-lg mx-auto leading-relaxed mb-12">
            I've curated a day full of sweet moments, but it's completely missing the most essential ingredient: <span className="font-medium text-slate-800 border-b border-rose-200">You</span>.
        </p>

<div className="reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto relative min-h-[60px]">
<button className="group relative w-full sm:w-auto px-10 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl shadow-lg shadow-rose-200/50 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden" onclick="acceptProposal()">
<div className="btn-shine"></div>
<div className="flex items-center justify-center gap-2.5 relative z-10">
<span className="text-sm font-medium tracking-wide">
                        Yes, I'd love to
                    </span>
<iconify-icon className="text-lg" icon="solar:heart-angle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</button>
<button className="w-full sm:w-auto px-10 py-3.5 bg-white/50 hover:bg-white/80 backdrop-blur-sm border border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-700 rounded-xl transition-all duration-300 flex items-center justify-center gap-2" id="btn-no" onclick="dodgeButton()" onmouseover="dodgeButton()">
<span className="text-sm font-medium tracking-wide">No, thanks</span>
</button>
</div>

<div className="reveal delay-500 mt-20 flex flex-col items-center gap-4 w-full">
<p className="text-xs font-medium tracking-widest uppercase text-rose-300/80">
                Tap to reveal
            </p>
<div className="flex gap-4">
<button className="group w-14 h-14 rounded-2xl bg-white border border-slate-100 text-rose-400 hover:border-rose-200 hover:shadow-md hover:shadow-rose-100/50 transition-all duration-300 flex items-center justify-center" onclick="showSecret('Your smile lights up my world ✨')">
<iconify-icon className="text-2xl group-hover:scale-110 transition-transform" icon="solar:letter-heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="group w-14 h-14 rounded-2xl bg-white border border-slate-100 text-rose-400 hover:border-rose-200 hover:shadow-md hover:shadow-rose-100/50 transition-all duration-300 flex items-center justify-center" onclick="showSecret('You are my favorite thought 💭')">
<iconify-icon className="text-2xl group-hover:scale-110 transition-transform" icon="solar:heart-lock-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="group w-14 h-14 rounded-2xl bg-white border border-slate-100 text-rose-400 hover:border-rose-200 hover:shadow-md hover:shadow-rose-100/50 transition-all duration-300 flex items-center justify-center" onclick="showSecret('I adore everything about you 💖')">
<iconify-icon className="text-2xl group-hover:scale-110 transition-transform" icon="solar:star-shine-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="h-6 text-sm font-medium text-rose-600 transition-all duration-300 opacity-0 translate-y-2" id="secret-display"></div>
</div>

<div className="reveal delay-500 mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">

<div className="group p-6 rounded-2xl bg-white/60 border border-white shadow-sm hover:shadow-md hover:shadow-rose-100/30 transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
<iconify-icon className="text-xl" icon="solar:smile-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900 mb-2">
                    Endless Laughter
                </h3>
<p className="text-xs font-normal text-slate-500 leading-relaxed">
                    I promise to bring my absolute best mood and just enough terrible jokes to ensure you're smiling all night.
                </p>
</div>

<div className="group p-6 rounded-2xl bg-white/60 border border-white shadow-sm hover:shadow-md hover:shadow-rose-100/30 transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
<iconify-icon className="text-xl" icon="solar:crown-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900 mb-2">Just For You</h3>
<p className="text-xs font-normal text-slate-500 leading-relaxed">
                    You’re my favorite person, Bineet. You deserve a day that is entirely focused on making you feel celebrated.
                </p>
</div>

<div className="group p-6 rounded-2xl bg-white/60 border border-white shadow-sm hover:shadow-md hover:shadow-rose-100/30 transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
<iconify-icon className="text-xl" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900 mb-2">
                    Sweet Memories
                </h3>
<p className="text-xs font-normal text-slate-500 leading-relaxed">
                    Let's add another wonderful chapter to our story. I simply can't wait to spend this time with you.
                </p>
</div>
</div>
</main>

<footer className="w-full py-8 text-center border-t border-slate-100/50 bg-white/30 backdrop-blur-sm">
<p className="text-xs text-slate-400 font-medium tracking-widest uppercase opacity-70">
            Made with ❤️ for Bineet
        </p>
</footer>

<div className="fixed inset-0 z-50 flex items-center justify-center opacity-0 pointer-events-none transition-all duration-700 bg-white/80 backdrop-blur-xl" id="success-modal">
<div className="text-center p-10 max-w-md w-full scale-95 transition-all duration-500 rounded-3xl border border-white shadow-2xl shadow-rose-100" id="modal-content">
<div className="w-20 h-20 mx-auto bg-rose-50 rounded-full flex items-center justify-center text-rose-500 mb-6 border border-rose-100">
<iconify-icon className="text-4xl animate-pulse" icon="solar:heart-bold"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">
                It's a Date!
            </h2>
<p className="text-sm font-normal text-slate-500 leading-relaxed mb-8">
                You've just made me the happiest person. Get ready for an amazing time, Bineet.
            </p>
<div className="inline-flex items-center gap-3 px-5 py-2.5 bg-slate-50 rounded-lg border border-slate-100 text-slate-600">
<iconify-icon className="text-rose-500 text-lg" icon="solar:calendar-linear"></iconify-icon>
<span className="text-xs font-medium">February 14th · 7:00 PM</span>
</div>
</div>
</div>


    </>
  );
}
