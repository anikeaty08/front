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
                display.innerHTML = `<span class="flex items-center gap-2"><iconify-icon icon="solar:heart-linear"></iconify-icon> ${message}</span>`;
                display.style.opacity = '1';
                display.style.transform = 'translateY(0)';
            }, 200);
        }

        function dodgeButton() {
            moveCount++;
            
            const phrases = [
                "Are you sure?",
                "Think again...",
                "Wait, really?",
                "Please?",
                "Don't break my heart!",
                "Try the other one!"
            ];

            const span = btnNo.querySelector('span');
            if (moveCount <= phrases.length) {
                span.innerText = phrases[moveCount - 1];
            }

            // Mobile fallback
            if (window.innerWidth < 768 && moveCount > 4) {
                btnNo.style.opacity = '0';
                btnNo.style.pointerEvents = 'none';
                setTimeout(acceptProposal, 800);
                return;
            }

            const main = document.querySelector('main');
            const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

            const btnW = btnNo.offsetWidth;
            const btnH = btnNo.offsetHeight;

            // Keep within somewhat reasonable bounds
            let newLeft = Math.random() * (vw - btnW - 60) + 30;
            let newTop = Math.random() * (vh - btnH - 60) + 30;

            btnNo.style.position = 'fixed';
            btnNo.style.zIndex = '50';
            btnNo.style.left = `${newLeft}px`;
            btnNo.style.top = `${newTop}px`;
            
            // Random rotation for effect
            const rotation = Math.random() * 20 - 10;
            btnNo.style.transform = `rotate(${rotation}deg)`;
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
            const colors = ['#f43f5e', '#ec4899', '#e11d48', '#be123c'];

            const interval = setInterval(() => {
                const heart = document.createElement('div');
                const randomIcon = icons[Math.floor(Math.random() * icons.length)];
                
                heart.innerHTML = `<iconify-icon icon="solar:${randomIcon}"></iconify-icon>`;
                heart.className = 'confetti-heart';
                
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.top = -20 + 'px';
                heart.style.color = colors[Math.floor(Math.random() * colors.length)];
                heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
                
                // Randomize fall speed
                heart.style.animationDuration = (Math.random() * 2 + 3) + 's';

                document.body.appendChild(heart);
                setTimeout(() => heart.remove(), 5000);
            }, 80);

            setTimeout(() => clearInterval(interval), 3000);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none overflow-hidden select-none">
<div className="absolute top-[15%] left-[8%] text-rose-200/50 text-7xl floating-icon" style={{animationDelay: '0s'}}>
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute bottom-[25%] right-[8%] text-rose-200/50 text-6xl floating-icon" style={{animationDelay: '-2s'}}>
<iconify-icon icon="solar:heart-shine-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute top-[35%] right-[20%] text-rose-200/40 text-4xl floating-icon" style={{animationDelay: '-4s'}}>
<iconify-icon icon="solar:cupid-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute bottom-[10%] left-[20%] text-rose-200/30 text-5xl floating-icon" style={{animationDelay: '-1s'}}>
<iconify-icon icon="solar:stars-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<nav className="w-full flex justify-center py-6 z-40 fixed top-0">
<div className="bg-white/70 backdrop-blur-md border border-white/50 shadow-sm shadow-slate-200/40 px-5 py-2 rounded-full flex items-center gap-3">
<span className="text-[11px] font-medium tracking-widest uppercase text-slate-500">
                Encrypted
            </span>
<div className="h-px w-3 bg-slate-300"></div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-rose-400 text-xs" icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon>
<span className="text-[11px] font-medium tracking-widest uppercase text-slate-900">
                    For You Only
                </span>
</div>
</div>
</nav>

<main className="flex-grow flex flex-col items-center justify-center px-6 pt-32 pb-20 max-w-3xl mx-auto w-full z-10">

<div className="reveal mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
<div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></div>
<span className="text-[11px] font-medium tracking-wide uppercase text-slate-600">
                Priority Question
            </span>
</div>

<div className="reveal delay-100 text-center mb-6 relative">
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-slate-900 leading-[1.1]">
                Baby will you be my
                <span className="block mt-1 bg-gradient-to-r from-rose-500 via-pink-600 to-rose-500 bg-clip-text text-transparent animate-gradient pb-2">
                    Valentine?
                </span>
</h1>
</div>

<p className="reveal delay-200 text-center text-lg md:text-xl font-light text-slate-500 max-w-lg mx-auto leading-relaxed mb-10 tracking-tight">
            I've curated a proposal that requires your specific input.
            <span className="text-slate-900 font-normal">Terms and conditions apply</span> (endless love included).
        </p>

<div className="reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto relative min-h-[60px]">

<button className="group relative w-full sm:w-auto px-10 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden border border-slate-800" onclick="acceptProposal()">
<div className="btn-shine"></div>
<div className="flex items-center justify-center gap-2 relative z-10">
<span className="text-sm font-medium tracking-wide">
                        Yes, absolutely
                    </span>
<iconify-icon className="text-lg text-rose-300" icon="solar:heart-angle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</button>

<button className="w-full sm:w-auto px-10 py-3.5 bg-white/50 hover:bg-white/80 backdrop-blur-sm border border-slate-200 hover:border-slate-300 text-slate-600 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-sm" id="btn-no" onclick="dodgeButton()" onmouseover="dodgeButton()">
<span className="text-sm font-medium tracking-wide">No, thanks</span>
</button>
</div>

<div className="reveal delay-500 mt-20 flex flex-col items-center w-full">
<p className="text-[10px] font-semibold tracking-widest uppercase text-slate-400 mb-4">
                Tap for a secret
            </p>
<div className="flex gap-3">
<button className="group w-14 h-14 rounded-2xl bg-white border border-slate-200 hover:border-rose-200 hover:shadow-md hover:shadow-rose-100/40 transition-all duration-300 flex items-center justify-center relative overflow-hidden" onclick="showSecret('My heart beats for you 💓')">
<div className="absolute inset-0 bg-rose-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-xl text-slate-400 group-hover:text-rose-500 transition-colors relative z-10" icon="solar:letter-heart-linear"></iconify-icon>
</button>
<button className="group w-14 h-14 rounded-2xl bg-white border border-slate-200 hover:border-rose-200 hover:shadow-md hover:shadow-rose-100/40 transition-all duration-300 flex items-center justify-center relative overflow-hidden" onclick="showSecret('You are my favorite view ✨')">
<div className="absolute inset-0 bg-rose-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-xl text-slate-400 group-hover:text-rose-500 transition-colors relative z-10" icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon>
</button>
<button className="group w-14 h-14 rounded-2xl bg-white border border-slate-200 hover:border-rose-200 hover:shadow-md hover:shadow-rose-100/40 transition-all duration-300 flex items-center justify-center relative overflow-hidden" onclick="showSecret('Forever yours 🕊️')">
<div className="absolute inset-0 bg-rose-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-xl text-slate-400 group-hover:text-rose-500 transition-colors relative z-10" icon="solar:star-shine-linear"></iconify-icon>
</button>
</div>
<div className="h-8 mt-4 text-sm font-medium text-rose-600 transition-all duration-300 opacity-0 translate-y-2" id="secret-display"></div>
</div>

<div className="reveal delay-500 mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 w-full">

<div className="group p-5 rounded-2xl bg-white/60 border border-white/60 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] backdrop-blur-sm hover:bg-white hover:border-rose-100 hover:shadow-lg hover:shadow-rose-100/20 transition-all duration-300">
<div className="h-9 w-9 rounded-lg bg-slate-50 border border-slate-100 text-rose-500 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
<iconify-icon className="text-lg" icon="solar:smile-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1.5 tracking-tight">
                    Unlimited Smiles
                </h3>
<p className="text-xs font-light text-slate-500 leading-relaxed">
                    Guaranteed supply of laughter and joy, non-negotiable and delivered daily.
                </p>
</div>

<div className="group p-5 rounded-2xl bg-white/60 border border-white/60 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] backdrop-blur-sm hover:bg-white hover:border-rose-100 hover:shadow-lg hover:shadow-rose-100/20 transition-all duration-300">
<div className="h-9 w-9 rounded-lg bg-slate-50 border border-slate-100 text-rose-500 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
<iconify-icon className="text-lg" icon="solar:crown-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1.5 tracking-tight">
                    VIP Treatment
                </h3>
<p className="text-xs font-light text-slate-500 leading-relaxed">
                    An entire day dedicated to your happiness. You are the main character.
                </p>
</div>

<div className="group p-5 rounded-2xl bg-white/60 border border-white/60 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] backdrop-blur-sm hover:bg-white hover:border-rose-100 hover:shadow-lg hover:shadow-rose-100/20 transition-all duration-300">
<div className="h-9 w-9 rounded-lg bg-slate-50 border border-slate-100 text-rose-500 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
<iconify-icon className="text-lg" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1.5 tracking-tight">
                    Core Memories
                </h3>
<p className="text-xs font-light text-slate-500 leading-relaxed">
                    Capturing moments that we'll look back on with pure fondness.
                </p>
</div>
</div>
</main>

<footer className="w-full py-8 text-center z-10">
<p className="text-[10px] text-slate-400 font-medium tracking-widest uppercase opacity-60">
            Crafted with Love · 2024
        </p>
</footer>

<div className="fixed inset-0 z-50 flex items-center justify-center opacity-0 pointer-events-none transition-all duration-700 bg-white/90 backdrop-blur-xl" id="success-modal">
<div className="text-center p-8 max-w-sm w-full scale-95 transition-all duration-500" id="modal-content">
<div className="w-20 h-20 mx-auto bg-gradient-to-tr from-rose-50 to-white rounded-full flex items-center justify-center text-rose-500 mb-6 border border-rose-100 shadow-lg shadow-rose-100/50">
<iconify-icon className="text-4xl animate-pulse drop-shadow-sm" icon="solar:heart-bold"></iconify-icon>
</div>
<h2 className="text-2xl font-medium tracking-tight text-slate-900 mb-3">
                It's a Date!
            </h2>
<p className="text-sm font-light text-slate-500 leading-relaxed mb-8">
                You've just made me the happiest person. I'm counting down the seconds.
            </p>
<div className="flex flex-col gap-3">
<div className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-rose-500">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
</div>
<div className="text-left">
<p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Date</p>
<p className="text-xs font-medium text-slate-700">February 14th</p>
</div>
</div>
</div>
<div className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-rose-500">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div className="text-left">
<p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Time</p>
<p className="text-xs font-medium text-slate-700">7:00 PM</p>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
