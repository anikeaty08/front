import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const noBtn = document.getElementById('btn-no');
        const yesBtn = document.getElementById('btn-yes');
        const card = document.getElementById('main-card');
        const successOverlay = document.getElementById('success-overlay');

        // Initial check to ensure they are side-by-side (handled by CSS flex),
        // but this logic handles the "running away"
        
        function moveButton() {
            // Get viewport dimensions
            const maxX = window.innerWidth - noBtn.offsetWidth - 50;
            const maxY = window.innerHeight - noBtn.offsetHeight - 50;
            
            // Random coordinates within viewport
            const randomX = Math.max(20, Math.random() * maxX);
            const randomY = Math.max(20, Math.random() * maxY);

            // Change from static/flex to fixed positioning
            noBtn.style.position = 'fixed';
            noBtn.style.left = `${randomX}px`;
            noBtn.style.top = `${randomY}px`;
            
            // Visual feedback
            noBtn.style.borderColor = 'rgba(244, 63, 94, 0.3)';
            noBtn.style.color = 'rgba(255, 255, 255, 0.8)';
            noBtn.innerText = "Are you sure? 💔";
        }

        // Trigger on mouse enter (Desktop)
        noBtn.addEventListener('mouseenter', moveButton);
        
        // Trigger on touch start (Mobile)
        noBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            moveButton();
        });

        // Success Action
        function acceptProposal() {
            // Hide No button
            noBtn.style.display = 'none';
            
            // Fade out main card
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
            
            // Show Success Overlay
            setTimeout(() => {
                successOverlay.classList.remove('hidden-opacity');
                successOverlay.classList.add('visible-opacity');
                createConfetti();
            }, 300);
        }

        function createConfetti() {
            const colors = ['#f43f5e', '#e11d48', '#ffffff', '#fb7185'];
            
            for (let i = 0; i < 120; i++) {
                const confetti = document.createElement('div');
                confetti.style.position = 'fixed';
                confetti.style.width = Math.random() * 6 + 3 + 'px';
                confetti.style.height = Math.random() * 8 + 4 + 'px';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.top = -20 + 'px';
                confetti.style.zIndex = '60';
                confetti.style.opacity = '0.9';
                confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
                
                const duration = Math.random() * 2 + 2;
                confetti.style.transition = `top ${duration}s ease-in, opacity ${duration}s ease-in, transform ${duration}s linear`;
                
                document.body.appendChild(confetti);

                // Animation frame
                setTimeout(() => {
                    confetti.style.top = '110vh';
                    confetti.style.opacity = '0';
                    confetti.style.transform = `rotate(${Math.random() * 720}deg)`;
                }, 50);

                setTimeout(() => {
                    confetti.remove();
                }, duration * 1000);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-gradient-mesh opacity-70 z-0 scale-110"></div>
<div className="grain"></div>

<main className="relative z-10 flex flex-col items-center justify-center h-full w-full px-6">

<div className="glass-panel rounded-[2rem] p-8 md:p-14 w-full max-w-lg flex flex-col items-center text-center transition-all duration-700 border-t border-white/10" id="main-card">
<div className="mb-8 animate-float text-rose-300 drop-shadow-[0_0_15px_rgba(253,164,175,0.3)]">
<iconify-icon height="56" icon="solar:heart-angle-linear" strokeWidth="1.5" width="56"></iconify-icon>
</div>
<div className="space-y-1 mb-8">
<p className="text-xs uppercase tracking-[0.2em] text-rose-200/60 font-medium font-sans">A question for</p>
<h1 className="font-romantic text-6xl md:text-7xl font-medium tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-rose-100 to-rose-200/80 pb-2 italic">
                    Kajal
                </h1>
</div>
<p className="font-romantic text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-sm italic">
                In a world of variables, you are my only constant. Will you be my Valentine?
            </p>

<div className="flex flex-row gap-6 w-full justify-center items-center relative h-14">

<button className="btn-shine group relative min-w-[140px] h-12 rounded-full bg-white text-rose-950 font-medium text-sm hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_30px_-5px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_-10px_rgba(244,63,94,0.5)] z-20 flex items-center justify-center gap-2 font-sans tracking-wide" id="btn-yes" onclick="acceptProposal()">
<span>Yes, I will</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mr-4 group-hover:mr-0" icon="solar:heart-linear" width="16"></iconify-icon>
</button>

<button className="absolute-fix min-w-[140px] h-12 rounded-full border border-white/10 text-white/50 font-medium text-sm hover:bg-white/5 transition-all duration-300 z-20 backdrop-blur-sm font-sans tracking-wide" id="btn-no">
                    No
                </button>
</div>
</div>

<div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-2xl hidden-opacity" id="success-overlay">
<div className="text-center p-8 animate-float">
<div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-rose-500 to-purple-600 mb-6 shadow-2xl shadow-rose-500/30">
<iconify-icon className="text-white" icon="solar:cupid-linear" width="40"></iconify-icon>
</div>
<h2 className="font-romantic text-5xl md:text-6xl font-medium tracking-tight text-white mb-4 italic">She said Yes! 💖</h2>
<p className="font-sans text-white/60 text-lg font-light tracking-wide">Best decision ever, Kajal.</p>
<div className="mt-10">
<button className="text-xs text-white/30 hover:text-white transition-colors uppercase tracking-[0.2em] font-sans" onclick="location.reload()">Replay</button>
</div>
</div>
</div>
</main>


    </>
  );
}
