import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- 1. PARTICLE GENERATOR ---
        const particleContainer = document.getElementById('particles');
        const particleCount = 20;

        for(let i=0; i < particleCount; i++) {
            const p = document.createElement('div');
            p.classList.add('particle', 'absolute');
            p.style.left = Math.random() * 100 + 'vw';
            const size = Math.random() * 4 + 2;
            p.style.width = size + 'px';
            p.style.height = size + 'px';
            p.style.animationDuration = (Math.random() * 10 + 15) + 's'; // Slower, more floaty
            p.style.animationDelay = '-' + (Math.random() * 10) + 's'; // Start immediately at random positions
            p.style.opacity = Math.random() * 0.5;
            particleContainer.appendChild(p);
        }

        // --- 2. BREATH SYNC ENGINE ---
        const mainText = document.getElementById('main-text');
        
        // Cycle Duration in ms (Must match CSS --cycle-duration)
        // 6000ms = 6 seconds total cycle
        // 3000ms Inhale (Expansion), 3000ms Exhale (Contraction)
        const CYCLE_DURATION = 6000; 

        function runBreathCycle() {
            // Phase 1: Inhale (0ms)
            mainText.innerText = "Inhale";
            mainText.style.opacity = '1';
            mainText.style.transform = 'scale(1.1)';
            
            // Phase 2: Exhale (Starts at 50% of cycle)
            setTimeout(() => {
                mainText.innerText = "Exhale";
                mainText.style.transform = 'scale(0.9)';
            }, CYCLE_DURATION / 2);
        }

        // Initial Run
        runBreathCycle();

        // Loop
        setInterval(runBreathCycle, CYCLE_DURATION);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden" id="particles"></div>

<div className="relative w-[240px] h-[240px] flex justify-center items-center z-10 mb-8">

<div className="blob-glow opacity-50 w-[120%] h-[120%] absolute"></div>

<div className="blob-liquid absolute w-[200px] h-[200px] opacity-90 rounded-[40%_60%_70%_30%/40%_50%_60%_50%]"></div>

<div className="blob-surface absolute w-[200px] h-[200px] z-20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%]"></div>
</div>

<div className="z-10 text-center relative h-16 w-full flex flex-col items-center justify-center">

<div className="uppercase text-3xl font-semibold text-slate-500/90 tracking-[0.25em] font-['Poppins'] absolute transition-all duration-500" id="main-text">
            Inhale
        </div>
</div>

<div className="z-10 mt-8">
<p className="text-xs font-medium tracking-widest text-slate-400 uppercase opacity-60">
            System Calibrating
        </p>
</div>


    </>
  );
}
