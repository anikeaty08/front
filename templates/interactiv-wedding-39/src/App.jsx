import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const noBtn = document.getElementById('no-btn');
        const questionStep = document.getElementById('question-step');
        const successStep = document.getElementById('success-step');
        const cardContainer = document.getElementById('card-container');
        let moveCount = 0;

        function moveButton() {
            moveCount++;
            
            const btnRect = noBtn.getBoundingClientRect();
            
            // Constrain movement to window 
            const maxX = window.innerWidth - btnRect.width - 40;
            const maxY = window.innerHeight - btnRect.height - 40;
            
            let randomX = Math.random() * maxX;
            let randomY = Math.random() * maxY;

            // Apply fixed position style to break flow
            noBtn.style.position = 'fixed';
            noBtn.style.left = Math.max(20, randomX) + 'px';
            noBtn.style.top = Math.max(20, randomY) + 'px';
            noBtn.style.zIndex = '50';
            
            // Change text after a few tries
            const texts = ["Really?", "Think again!", "Misclick?", "Please?", "Arshan pls", "I'm fast!"];
            if (moveCount < texts.length) {
                noBtn.querySelector('span').innerText = texts[moveCount];
            } else {
                noBtn.querySelector('span').innerText = ":(";
            }
            
            // Style changes
            noBtn.style.backgroundColor = '#fff1f2'; // rose-50
            noBtn.style.borderColor = '#fecdd3'; // rose-200
            noBtn.style.color = '#e11d48'; // rose-600
        }

        function handleYes() {
            // Hide question, show success
            questionStep.style.display = 'none';
            successStep.classList.remove('hidden');
            
            // Trigger animation
            setTimeout(() => {
                successStep.classList.remove('opacity-0', 'translate-y-4');
                fireConfetti();
            }, 50);
        }

        function fireConfetti() {
            const colors = ['#f43f5e', '#a855f7', '#fbbf24', '#3b82f6'];
            
            for (let i = 0; i < 100; i++) {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                
                // Random properties
                const left = Math.random() * 100 + 'vw';
                const animDuration = Math.random() * 2 + 2 + 's'; // 2-4s
                const bg = colors[Math.floor(Math.random() * colors.length)];
                
                confetti.style.left = left;
                confetti.style.top = '-10px';
                confetti.style.animationDuration = animDuration;
                confetti.style.backgroundColor = bg;
                
                document.body.appendChild(confetti);
                
                // Cleanup
                setTimeout(() => {
                    confetti.remove();
                }, 4000);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="w-full flex justify-between items-center p-6 md:p-8 fixed top-0 left-0 z-40 bg-gradient-to-b to-transparent backdrop-blur-[2px] from-orange-950 via-orange-950/80">
<div className="flex items-center gap-2 group cursor-default text-orange-100">
<div className="w-6 h-6 rounded flex items-center justify-center group-hover:bg-amber-100 transition-colors duration-300 bg-orange-800">
<iconify-icon className="text-orange-500 group-hover:text-amber-500 transition-colors" icon="solar:heart-angle-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tighter uppercase text-orange-500 group-hover:text-orange-800 transition-colors">ARSHAN</span>
</div>
<div className="flex gap-4">
<button className="transition-colors text-orange-600 hover:text-orange-200">
<iconify-icon className="" height="20" icon="solar:music-note-linear" strokeWidth="1.5" style={{color: 'rgb(254, 215, 170)'}} width="20"></iconify-icon>
</button>
</div>
</nav>

<main className="flex-grow flex flex-col items-center justify-center relative px-4 py-24 md:py-12">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob bg-amber-800/20"></div>
<div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-2000 bg-amber-800/20"></div>
</div>

<div className="relative z-10 w-full max-w-lg backdrop-blur-xl border shadow-xl rounded-2xl p-8 md:p-10 text-center fade-in bg-black/50 border-black/60 shadow-orange-800/50" id="card-container">

<div className="mb-6 flex justify-center">
<div className="relative">
<div className="absolute inset-0 rounded-full blur-md opacity-50 bg-amber-900"></div>
<div className="relative p-4 rounded-2xl shadow-sm border bg-black border-orange-900">
<iconify-icon className="text-amber-500" icon="solar:ring-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
</div>
</div>

<div className="transition-all duration-500 space-y-8">
<div className="space-y-1">
<p className="uppercase text-xs font-semibold text-orange-600 tracking-widest">To My Dearest Arshan</p>
<h1 className="text-3xl font-medium tracking-tight pb-2 text-orange-100">
                        Will you marry me? 💍
                    </h1>
</div>
<div className="space-y-4 text-left px-2 p-6 rounded-xl border shadow-sm bg-black/40 border-black/50">
<div className="space-y-3">
<div className="flex gap-3 items-start">
<iconify-icon className="mt-1 flex-shrink-0 text-amber-600" icon="solar:heart-linear" width="16"></iconify-icon>
<p className="text-sm font-normal leading-relaxed text-orange-400">Will you spend your whole life with me?</p>
</div>
<div className="flex gap-3 items-start">
<iconify-icon className="mt-1 flex-shrink-0 text-amber-600" icon="solar:smile-circle-linear" width="16"></iconify-icon>
<p className="text-sm font-normal leading-relaxed text-orange-400">Will you love me through every smile and every tear?</p>
</div>
<div className="flex gap-3 items-start">
<iconify-icon className="mt-1 flex-shrink-0 text-amber-600" icon="solar:users-group-rounded-linear" width="16"></iconify-icon>
<p className="text-sm font-normal leading-relaxed text-orange-400">Will you be my partner, my best friend, and my forever?</p>
</div>
<div className="flex gap-3 items-start">
<iconify-icon className="mt-1 flex-shrink-0 text-amber-600" icon="solar:leaf-linear" width="16"></iconify-icon>
<p className="text-sm font-normal leading-relaxed text-orange-400">Will you walk with me hand in hand through every season of life?</p>
</div>
<div className="flex gap-3 items-start">
<iconify-icon className="mt-1 flex-shrink-0 text-amber-600" icon="solar:calendar-date-linear" width="16"></iconify-icon>
<p className="text-sm font-normal leading-relaxed text-orange-400">Will you choose me today, tomorrow, and always? 💕</p>
</div>
</div>
</div>
<div className="space-y-2">
<p className="text-sm text-orange-500 font-normal italic">
                        "I may not be perfect, but my heart is true, and my love for you is endless."
                    </p>
</div>
<div className="border-t w-full border-orange-800/60"></div>
<div className="space-y-6">
<h2 className="text-xl font-medium tracking-tight text-orange-100">
                        So tell me, will you be mine forever? ✨
                    </h2>
<div className="flex flex-col gap-3 pt-2 relative min-h-[120px]">
<button className="btn-transition w-full font-medium py-3 rounded-lg shadow-lg flex items-center justify-center gap-2 group bg-orange-100 hover:bg-orange-200 text-black shadow-orange-800/50" onclick="handleYes()">
<span>Yes, forever</span>
<iconify-icon className="group-hover:scale-110 transition-transform text-amber-600" icon="solar:heart-bold" width="16"></iconify-icon>
</button>
<button className="btn-transition w-full border text-orange-500 font-medium py-3 rounded-lg flex items-center justify-center gap-2 bg-black border-orange-800 hover:text-orange-200 hover:border-orange-700" id="no-btn" onclick="moveButton()" onmouseover="moveButton()" style={{position: 'fixed', left: '207.838px', top: '42.2288px', zIndex: '50', backgroundColor: 'rgb(255, 241, 242)', borderColor: 'rgb(254, 205, 211)', color: 'rgb(225, 29, 72)'}}>
<span>Misclick?</span>
</button>
</div>
</div>
</div>

<div className="hidden space-y-8 transition-all duration-500 opacity-0 transform translate-y-4 py-8" id="success-step">
<div className="space-y-4">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full text-amber-500 mb-2 bg-amber-950">
<iconify-icon icon="solar:ring-bold-duotone" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h2 className="text-3xl font-medium tracking-tight text-orange-100">
                        She said Yes!
                    </h2>
<p className="text-orange-500 leading-relaxed max-w-sm mx-auto">
                        You've made me the happiest person alive. Here's to our forever, Arshan.
                    </p>
</div>
<div className="p-4 rounded-xl border flex items-center gap-4 text-left mx-auto max-w-sm bg-orange-950 border-orange-900">
<div className="p-2 rounded-lg border shadow-sm bg-black border-orange-900 text-orange-100">
<iconify-icon className="text-amber-500" icon="solar:heart-bold" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-orange-100">Forever &amp; Always</p>
<p className="text-xs text-orange-600">Our Journey Begins</p>
</div>
</div>
</div>
</div>
</main>

<footer className="w-full p-6 text-center text-xs relative z-10 text-orange-700">
<div className="flex items-center justify-center gap-1 opacity-60">
<span>Made with</span>
<iconify-icon className="text-amber-700" icon="solar:heart-bold" width="12"></iconify-icon>
<span>for Arshan</span>
</div>
</footer>


    </>
  );
}
