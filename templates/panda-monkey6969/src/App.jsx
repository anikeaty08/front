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



        const noBtn = document.getElementById('no-btn');
        const yesBtn = document.getElementById('yes-btn');
        const mainCard = document.getElementById('main-card');
        const successScreen = document.getElementById('success-screen');
        
        let attempts = 0;
        let scaleFactor = 1;

        // Background Stars Generation
        const container = document.getElementById('stars-container');
        
        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.classList.add('twinkle-star');
            star.innerHTML = `<iconify-icon icon="solar:star-linear" style="font-size: ${Math.random() * 10 + 4}px; color: white"></iconify-icon>`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDuration = `${Math.random() * 3 + 2}s`;
            star.style.animationDelay = `${Math.random() * 5}s`;
            container.appendChild(star);
        }

        // Logic to make the No Button Run
        function moveNoButton() {
            attempts++;
            
            // Calculate available space
            const maxWidth = window.innerWidth - noBtn.offsetWidth - 40;
            const maxHeight = window.innerHeight - noBtn.offsetHeight - 40;
            
            // Generate random position within viewport
            const randomX = Math.max(20, Math.random() * maxWidth);
            const randomY = Math.max(20, Math.random() * maxHeight);

            // Apply Fixed position to escape the flow
            noBtn.style.position = 'fixed';
            noBtn.style.left = randomX + 'px';
            noBtn.style.top = randomY + 'px';
            noBtn.style.zIndex = '30'; // Ensure it stays on top
            
            // Make Yes Button bigger each time No runs away
            scaleFactor += 0.1;
            yesBtn.style.transform = `scale(${scaleFactor})`;
        }

        // Success Logic
        function acceptLove() {
            // Audio effect
            const audio = new Audio('https://cdn.pixabay.com/audio/2022/10/05/audio_6861252033.mp3'); 
            audio.volume = 0.5;
            audio.play().catch(e => console.log("Audio needed interaction"));

            mainCard.style.transform = 'scale(0.8) translateY(-100vh)';
            mainCard.style.opacity = '0';
            
            successScreen.classList.remove('hidden');
            setTimeout(() => {
                successScreen.classList.remove('opacity-0');
                startConfetti();
            }, 300);
        }

        // Confetti Effect
        function startConfetti() {
            const colors = ['#fbbf24', '#818cf8', '#ffffff', '#c084fc'];
            for (let i = 0; i < 100; i++) {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
                confetti.style.opacity = Math.random();
                document.body.appendChild(confetti);
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
      

<div className="absolute inset-0 pointer-events-none overflow-hidden" id="stars-container">
<div className="shooting-star" style={{top: '10%', right: '10%', animationDelay: '2s'}}></div>
<div className="shooting-star" style={{top: '30%', right: '-10%', animationDelay: '6s'}}></div>

</div>

<main className="relative z-10 w-full max-w-lg p-6 flex flex-col items-center transition-all duration-700 ease-out transform" id="main-card">

<div className="mb-8 p-5 bg-white/5 backdrop-blur-md rounded-full shadow-2xl border border-white/10 ring-1 ring-white/20 animate-[bounce_3s_infinite]">
<iconify-icon className="text-indigo-300 drop-shadow-[0_0_15px_rgba(165,180,252,0.5)]" height="56" icon="solar:moon-stars-linear" width="56"></iconify-icon>
</div>

<h1 className="text-3xl md:text-5xl font-medium tracking-tight text-white text-center mb-3 leading-tight drop-shadow-lg">
            Will you be my<br/><span className="text-indigo-400">Moon &amp; Stars?</span> 🌙
        </h1>
<p className="text-slate-400 text-sm md:text-base font-normal mb-12 text-center max-w-xs leading-relaxed">
            I promise to give you the universe (and lots of snacks).
        </p>

<div className="flex flex-col md:flex-row items-center justify-center gap-5 w-full relative h-24">
<button className="group relative px-10 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-full shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all duration-300 transform active:scale-95 flex items-center gap-2 z-20 overflow-hidden border border-indigo-400/30" id="yes-btn" onclick="acceptLove()">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
<span>Yes! ✨</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity text-yellow-200" icon="solar:star-fall-linear"></iconify-icon>
</button>

<button className="px-10 py-3.5 bg-white/5 backdrop-blur-sm text-slate-300 hover:text-white font-medium rounded-full shadow-sm border border-white/10 hover:bg-white/10 z-20 whitespace-nowrap" id="no-btn" onclick="moveNoButton()" onmouseover="moveNoButton()" ontouchstart="moveNoButton()">
                No 🌑
            </button>
</div>
</main>

<div className="fixed inset-0 z-50 bg-slate-950 hidden flex-col items-center justify-center text-center p-6 opacity-0 transition-opacity duration-1000" id="success-screen">

<div className="absolute inset-0 overflow-hidden">
<div className="absolute top-10 left-10 text-yellow-200/20"><iconify-icon icon="solar:star-bold" width="40"></iconify-icon></div>
<div className="absolute bottom-20 right-20 text-indigo-400/20"><iconify-icon icon="solar:moon-bold" width="60"></iconify-icon></div>
</div>
<div className="relative z-10 w-72 h-72 md:w-96 md:h-96 mb-8">

<img alt="Happy Face" className="w-full h-full object-cover rounded-3xl shadow-[0_0_50px_rgba(99,102,241,0.3)] border-2 border-white/20" src="https://media.tenor.com/YoGCaqW-vQAAAAAi/peach-goma-happy.gif"/>
<div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 animate-bounce">
<iconify-icon className="text-yellow-400 text-3xl" icon="solar:smile-circle-bold"></iconify-icon>
</div>
</div>
<h1 className="relative z-10 text-4xl md:text-6xl font-medium tracking-tight text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            YAY! Happy Face! 😻
        </h1>
<p className="relative z-10 text-lg text-indigo-200 max-w-md leading-relaxed animate-pulse">
            See? It was destiny!
        </p>
</div>


    </>
  );
}
