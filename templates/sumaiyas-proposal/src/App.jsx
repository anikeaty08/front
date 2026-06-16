import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
            
            // Text variations
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

            // Mobile fallback
            if (window.innerWidth < 768 && moveCount > 4) {
                btnNo.style.opacity = '0';
                setTimeout(acceptProposal, 600);
                return;
            }

            // Calculate safe area
            const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
            
            const btnW = btnNo.offsetWidth;
            const btnH = btnNo.offsetHeight;
            
            let newLeft = Math.random() * (vw - btnW - 40) + 20;
            let newTop = Math.random() * (vh - btnH - 40) + 20;

            btnNo.style.position = 'fixed';
            btnNo.style.zIndex = '50';
            btnNo.style.left = `${newLeft}px`;
            btnNo.style.top = `${newTop}px`;
            
            // Add jitter
            btnNo.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
        }

        function acceptProposal() {
            // Hide No button
            if(btnNo) btnNo.style.display = 'none';
            
            // Show Modal
            successModal.classList.remove('opacity-0', 'pointer-events-none');
            modalContent.classList.remove('scale-95');
            modalContent.classList.add('scale-100');
            
            // Launch confetti
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
                
                // Random positioning
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.top = -50 + 'px';
                heart.style.color = colors[Math.floor(Math.random() * colors.length)];
                heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
                
                // Random duration
                heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
                
                document.body.appendChild(heart);
                
                // Cleanup
                setTimeout(() => heart.remove(), 4000);
            }, 100);

            // Stop generating after 3 seconds
            setTimeout(() => clearInterval(interval), 3000);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
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

<nav className="w-full flex justify-center py-6 z-40 fixed top-0">
<div className="bg-white/50 backdrop-blur-xl border border-white/60 shadow-sm shadow-rose-100/20 px-6 py-2.5 rounded-full flex items-center gap-3">
<span className="text-xs font-medium tracking-widest uppercase text-rose-900/80">Special Delivery</span>
<div className="h-1 w-1 rounded-full bg-rose-400"></div>
<span className="text-xs font-medium tracking-widest uppercase text-rose-900/80">For Sumaiya</span>
</div>
</nav>

<main className="flex-grow flex flex-col items-center justify-center px-6 pt-32 pb-20 max-w-4xl mx-auto w-full z-10">

<div className="reveal mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50/80 border border-rose-100 text-rose-600 shadow-sm">
<iconify-icon className="text-sm" icon="solar:bell-bing-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-normal tracking-wide uppercase">New Question Received</span>
</div>

<div className="reveal delay-100 text-center mb-6">
<h1 className="text-5xl md:text-7xl font-normal tracking-tight text-slate-900 leading-[1.1]">
                Sumaiya, will you be my
                <span className="block mt-2 bg-gradient-to-r from-rose-400 via-pink-500 to-rose-400 bg-clip-text text-transparent animate-gradient pb-2">
                    Valentine?
                </span>
</h1>
</div>

<p className="reveal delay-200 text-center text-lg md:text-xl font-light text-slate-500 max-w-lg mx-auto leading-relaxed mb-12">
            I've planned a day full of sweet moments, but it's missing the most important ingredient: 
            <span className="font-normal text-slate-800">You</span>.
        </p>

<div className="reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto relative min-h-[60px]">
<button className="group relative w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl shadow-lg shadow-rose-200 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden" onclick="acceptProposal()">
<div className="btn-shine"></div>
<div className="flex items-center justify-center gap-2.5 relative z-10">
<span className="text-sm font-normal tracking-wide">Yes, I'd love to</span>
<iconify-icon className="text-lg" icon="solar:heart-angle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white/60 hover:bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-500 rounded-xl transition-all duration-300 flex items-center justify-center gap-2" id="btn-no" onclick="dodgeButton()" onmouseover="dodgeButton()">
<span className="text-sm font-normal tracking-wide">No, thanks</span>
</button>
</div>

<div className="reveal delay-500 mt-16 mb-2 flex flex-col items-center gap-3 w-full mt-12">
<p className="text-xs font-medium tracking-widest uppercase text-rose-300">Secret Notes</p>
<div className="flex gap-4">
<button className="group w-12 h-12 rounded-2xl bg-white/50 border border-rose-100 text-rose-400 hover:bg-rose-50 hover:scale-110 hover:shadow-sm hover:shadow-rose-100 transition-all flex items-center justify-center" onclick="showSecret('You make my heart smile ✨')">
<iconify-icon className="text-xl group-hover:animate-pulse" icon="solar:letter-heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="group w-12 h-12 rounded-2xl bg-white/50 border border-rose-100 text-rose-400 hover:bg-rose-50 hover:scale-110 hover:shadow-sm hover:shadow-rose-100 transition-all flex items-center justify-center" onclick="showSecret('I love your laugh 💖')">
<iconify-icon className="text-xl group-hover:animate-pulse" icon="solar:heart-lock-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="group w-12 h-12 rounded-2xl bg-white/50 border border-rose-100 text-rose-400 hover:bg-rose-50 hover:scale-110 hover:shadow-sm hover:shadow-rose-100 transition-all flex items-center justify-center" onclick="showSecret('Always thinking of you 💭')">
<iconify-icon className="text-xl group-hover:animate-pulse" icon="solar:star-shine-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="h-6 text-sm font-normal text-rose-500 transition-all duration-300 opacity-0 translate-y-2" id="secret-display"></div>
</div>

<div className="reveal delay-500 mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

<div className="group p-6 rounded-2xl bg-white/40 border border-white/60 shadow-sm backdrop-blur-md hover:bg-white/60 hover:shadow-md hover:shadow-rose-100/50 transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:smile-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-sm font-normal text-slate-900 mb-2">Endless Laughter</h3>
<p className="text-xs font-light text-slate-500 leading-relaxed">
                    I promise to bring my best mood—and probably some terrible jokes—just to see you smile.
                </p>
</div>

<div className="group p-6 rounded-2xl bg-white/40 border border-white/60 shadow-sm backdrop-blur-md hover:bg-white/60 hover:shadow-md hover:shadow-rose-100/50 transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:crown-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-sm font-normal text-slate-900 mb-2">Just For You</h3>
<p className="text-xs font-light text-slate-500 leading-relaxed">
                    You’re my favorite person, and you deserve a day that is entirely focused on making you happy.
                </p>
</div>

<div className="group p-6 rounded-2xl bg-white/40 border border-white/60 shadow-sm backdrop-blur-md hover:bg-white/60 hover:shadow-md hover:shadow-rose-100/50 transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-sm font-normal text-slate-900 mb-2">Sweet Memories</h3>
<p className="text-xs font-light text-slate-500 leading-relaxed">
                    Let's add another wonderful chapter to our story. I can't wait to spend this time with you.
                </p>
</div>
</div>
</main>

<footer className="w-full py-6 text-center">
<p className="text-xs text-slate-400 font-medium tracking-widest uppercase opacity-60">Made with ❤️ for Sumaiya</p>
</footer>

<div className="fixed inset-0 z-50 flex items-center justify-center opacity-0 pointer-events-none transition-all duration-500 bg-white/80 backdrop-blur-2xl" id="success-modal">
<div className="text-center p-8 max-w-md w-full scale-95 transition-all duration-500" id="modal-content">
<div className="w-20 h-20 mx-auto bg-rose-50 rounded-full flex items-center justify-center text-rose-500 mb-6 border border-rose-100 shadow-sm">
<iconify-icon className="text-4xl animate-pulse" icon="solar:heart-bold"></iconify-icon>
</div>
<h2 className="text-3xl font-normal tracking-tight text-slate-900 mb-3">It's a Date!</h2>
<p className="text-sm font-light text-slate-500 leading-relaxed mb-8">
                You've made me the happiest person. Get ready for an amazing time.
            </p>
<div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg border border-slate-100 text-slate-600">
<iconify-icon className="text-rose-500" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-normal">February 14th · 7:00 PM</span>
</div>
</div>
</div>


    </>
  );
}
