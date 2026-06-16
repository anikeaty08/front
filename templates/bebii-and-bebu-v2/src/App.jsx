import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
            "bebu switching to low happiness mode 🥺",
            "This wasn’t in the script 😭",
            "heartware incompatibility detected: bebii.exe not running 💔",
            "okay but like… are you sure sure? 🥹",
            "this button must be tired by now 😂",
            "Retry Count: 3",
            "Retry Count: 2",
            "Retry Count: 1",
            "Okii from the top 😌 hahahaha"
        ];
        
        let clickIndex = 0;

        // Logic for clicking No
        function handleNoClick() {
            // Update button text
            noBtn.innerText = noTexts[clickIndex];
            
            // Advance index, loop back to start if at the end to keep the game going
            clickIndex = (clickIndex + 1) % noTexts.length;
            
            // Add a small shake animation
            const container = document.getElementById('card-container');
            container.classList.add('translate-x-1');
            noBtn.classList.add('bg-red-50', 'text-red-500', 'border-red-200');
            
            setTimeout(() => {
                container.classList.remove('translate-x-1');
                container.classList.add('-translate-x-1');
            }, 50);
            setTimeout(() => {
                container.classList.remove('-translate-x-1');
                noBtn.classList.remove('bg-red-50', 'text-red-500', 'border-red-200');
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
            const emojis = ['❤️', '💘', '🧸', '🎀', '🍓'];
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
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 pattern-grid opacity-50"></div>
<div className="absolute top-[-20%] left-[20%] w-96 h-96 bg-red-300/30 rounded-full blur-3xl mix-blend-multiply filter animate-pulse"></div>
<div className="absolute bottom-[-10%] right-[20%] w-[30rem] h-[30rem] bg-pink-300/40 rounded-full blur-3xl mix-blend-multiply filter"></div>
</div>

<nav className="relative z-10 w-full px-6 py-6 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-white border border-pink-200 shadow-sm flex items-center justify-center">
<iconify-icon className="text-red-500 text-lg" icon="solar:heart-bold"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-pink-900/60 pixel-text">Proposal_v1.0</span>
</div>
</nav>

<main className="z-10 flex-1 flex flex-col p-6 relative items-center justify-center min-h-[500px]">

<div className="glass-panel w-full max-w-2xl rounded-2xl border border-white/60 shadow-[0_8px_30px_rgb(255,182,193,0.3)] ring-1 ring-pink-900/5 p-10 sm:p-12 transition-all duration-500 flex flex-col justify-center my-auto" id="card-container">

<div className="flex flex-col items-center text-center space-y-8 w-full" id="question-state">
<div className="relative group">
<div className="absolute inset-0 bg-red-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative w-20 h-20 rounded-2xl bg-gradient-to-b from-white to-pink-50 border border-pink-100 shadow-sm flex items-center justify-center">
<iconify-icon className="text-red-500 text-4xl drop-shadow-sm" icon="solar:heart-bold"></iconify-icon>
</div>
</div>
<div className="space-y-3">
<h1 className="text-5xl font-bold text-gray-900 tracking-tight">Bebii</h1>
<p className="text-2xl font-medium text-pink-900/80 pixel-text">
                        Will you be my Valentine?
                    </p>
</div>
<p className="text-sm font-medium text-gray-400 max-w-xs mx-auto pixel-text">
                    This request is loading...
                </p>
<div className="w-full pt-4 flex flex-col sm:flex-row gap-4 relative justify-center items-center">
<button className="group relative inline-flex items-center justify-center gap-2 px-10 py-3.5 bg-red-500 text-white text-base font-semibold rounded-xl hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all active:scale-95 w-full sm:w-auto z-20 whitespace-nowrap shadow-lg shadow-red-200 pixel-text" onclick="acceptProposal()">
<span className="">Yes</span>
<iconify-icon className="group-hover:scale-110 transition-transform text-white/90" icon="solar:heart-bold"></iconify-icon>
</button>
<button className="inline-flex hover:bg-pink-50 hover:border-pink-200 transition-all focus:outline-none sm:w-auto whitespace-nowrap text-sm font-medium text-gray-600 bg-white w-full z-10 border-gray-200 border rounded-xl pt-3.5 pr-8 pb-3.5 pl-8 items-center justify-center pixel-text shadow-sm" id="no-btn" onclick="handleNoClick()">
                        No
                    </button>
</div>
</div>

<div className="hidden flex-col items-center text-center space-y-8 animate-fade-in w-full py-4" id="success-state">
<div className="w-16 h-16 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mb-2 shrink-0">
<iconify-icon className="text-red-500 text-3xl" icon="solar:confetti-minimalistic-bold"></iconify-icon>
</div>
<div className="space-y-3 w-full shrink-0">
<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 leading-tight">
                        Thank you for saying yes! <br/>You've just unlocked a Valentine's Date with Bebu!
                    </h2>
</div>

<div className="bg-white/60 rounded-xl p-8 border border-pink-100 text-left w-full shadow-sm">
<div className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium space-y-4">
<p className="pixel-text text-gray-500 text-xs uppercase tracking-widest border-b border-pink-100 pb-2 mb-4">Message from Bebu</p>
<p className="mb-2">Bebii,</p>
<p className="mb-6">
                            from our late night calls that never feel long enough, <br/>
                            to coffee runs that turn into little adventures, to every game, every walk, every quiet moment in between i keep finding reasons to choose you.
                        </p>
<p>
                            i don’t need anything grand. just more days like those, with you. Thank you for being my Valentine 💘
                        </p>
</div>
</div>
<div className="pt-2 w-full shrink-0">
<div className="flex flex-col gap-3">

<div className="flex items-center justify-between p-5 bg-white border border-pink-100 rounded-xl shadow-sm hover:border-pink-300 transition-colors">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center text-pink-500">
<iconify-icon className="text-xl" icon="solar:calendar-heart-bold"></iconify-icon>
</div>
<div className="text-left">
<p className="text-xs text-pink-400 font-bold uppercase tracking-widest pixel-text">Reservation</p>
<p className="text-lg text-gray-900 font-bold pixel-text">February 28</p>
</div>
</div>
<div className="text-right">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-green-50 text-green-600 border border-green-100 pixel-text">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon> Confirmed
                                </span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="relative z-10 py-6 text-center">
<p className="text-xs text-pink-400 font-medium pixel-text">
    © 2026
    <a className="underline hover:text-pink-600 transition-colors" href="https://dev-ebenezer.netlify.app/">
      Bebu Corp
    </a>.
    All rights reserved.
  </p>
</footer>


    </>
  );
}
