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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const playArea = document.querySelector('main');
            const targetBtn = document.getElementById('targetBtn');
            const overlay = document.getElementById('overlay');
            const startBtn = document.getElementById('startBtn');
            const overlayTitle = document.getElementById('overlayTitle');
            const overlayDesc = document.getElementById('overlayDesc');
            const statsGrid = document.getElementById('statsGrid');
            const iconContainer = document.getElementById('iconContainer');
            
            const timeDisplay = document.getElementById('timeDisplay');
            const scoreDisplay = document.getElementById('scoreDisplay');
            const finalScoreDisplay = document.getElementById('finalScore');
            const finalAccuracyDisplay = document.getElementById('finalAccuracy');

            const GAME_DURATION = 30;
            const BASE_TARGET_SIZE = 48;
            const MIN_TARGET_SIZE = 24;

            let score = 0;
            let time = GAME_DURATION;
            let isPlaying = false;
            let timerInterval;
            let clicksTotal = 0;
            let clicksHit = 0;

            // Start Game
            function startGame() {
                score = 0;
                time = GAME_DURATION;
                clicksTotal = 0;
                clicksHit = 0;
                isPlaying = true;
                
                updateUI();
                
                overlay.classList.add('opacity-0', 'pointer-events-none');
                statsGrid.classList.add('hidden');
                statsGrid.classList.remove('grid');
                
                targetBtn.classList.remove('hidden');
                moveTarget();

                timerInterval = setInterval(() => {
                    time--;
                    timeDisplay.textContent = time;
                    if (time <= 0) endGame();
                }, 1000);
            }

            // End Game
            function endGame() {
                isPlaying = false;
                clearInterval(timerInterval);
                targetBtn.classList.add('hidden');
                
                const accuracy = clicksTotal > 0 ? Math.round((clicksHit / clicksTotal) * 100) : 0;
                
                overlayTitle.textContent = "Session Complete";
                overlayDesc.classList.add('hidden');
                
                iconContainer.innerHTML = '<iconify-icon icon="solar:cup-star-linear" style="stroke-width: 1.5;" class="text-2xl text-emerald-400"></iconify-icon>';
                
                finalScoreDisplay.textContent = score;
                finalAccuracyDisplay.textContent = `${accuracy}%`;
                
                statsGrid.classList.remove('hidden');
                statsGrid.classList.add('grid');
                startBtn.textContent = "Play Again";
                
                overlay.classList.remove('opacity-0', 'pointer-events-none');
            }

            // Move Target to random position
            function moveTarget() {
                // Shrink target slightly based on score for difficulty curve
                const sizeReduction = Math.floor(score / 500) * 2;
                const currentSize = Math.max(MIN_TARGET_SIZE, BASE_TARGET_SIZE - sizeReduction);
                
                targetBtn.style.width = `${currentSize}px`;
                targetBtn.style.height = `${currentSize}px`;

                const areaRect = playArea.getBoundingClientRect();
                const maxX = areaRect.width - currentSize;
                const maxY = areaRect.height - currentSize;

                const randomX = Math.floor(Math.random() * maxX);
                const randomY = Math.floor(Math.random() * maxY);

                targetBtn.style.left = `${randomX}px`;
                targetBtn.style.top = `${randomY}px`;

                // Re-trigger animation
                targetBtn.classList.remove('target-anim');
                void targetBtn.offsetWidth; // trigger reflow
                targetBtn.classList.add('target-anim');
            }

            function updateUI() {
                scoreDisplay.textContent = score;
                timeDisplay.textContent = time;
            }

            // Event Listeners
            startBtn.addEventListener('click', startGame);

            // Handle misses by listening to the whole play area
            playArea.addEventListener('mousedown', (e) => {
                if (!isPlaying) return;
                clicksTotal++;
            });

            // Handle hits
            targetBtn.addEventListener('mousedown', (e) => {
                if (!isPlaying) return;
                e.stopPropagation(); // Prevent the playArea miss event
                clicksTotal++;
                clicksHit++;
                
                // Score based on speed could be added, keeping it simple for now
                score += 100; 
                updateUI();
                moveTarget();
            });

            // Keyboard shortcuts
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && isPlaying) {
                    endGame();
                } else if ((e.key === 'Enter' || e.key === ' ') && !isPlaying) {
                    startGame();
                }
            });
        });
    
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
      
<div className="w-full max-w-4xl flex flex-col gap-6">

<header className="flex items-center justify-between px-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-100">
<iconify-icon className="text-lg" icon="solar:gamepad-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="tracking-tighter font-semibold text-lg text-zinc-100">AIM</span>
</div>
<div className="flex items-center gap-6 text-sm font-medium bg-zinc-900/50 border border-zinc-800/50 rounded-full px-4 py-1.5 backdrop-blur-md">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Time: <span className="text-zinc-100 w-6 inline-block text-right" id="timeDisplay">30</span>s</span>
</div>
<div className="w-px h-4 bg-zinc-700"></div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Score: <span className="text-emerald-400 w-10 inline-block text-right" id="scoreDisplay">0</span></span>
</div>
</div>
</header>

<main className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 cursor-cross">

<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px'}}></div>

<button className="absolute hidden flex items-center justify-center rounded-full border border-emerald-500 bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 transition-colors focus:outline-none focus:ring-4 focus:ring-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.2)]" id="targetBtn" style={{width: '48px', height: '48px'}}>
<iconify-icon className="text-xl" icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>

<div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm flex flex-col items-center justify-center z-10 transition-opacity duration-300" id="overlay">
<div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl max-w-sm w-full text-center shadow-xl">
<div className="w-12 h-12 mx-auto rounded-full bg-zinc-800/50 border border-zinc-700 flex items-center justify-center text-zinc-300 mb-4" id="iconContainer">
<iconify-icon className="text-2xl" icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h2 className="text-2xl tracking-tight font-medium text-zinc-100 mb-2" id="overlayTitle">Ready to aim?</h2>
<p className="text-sm text-zinc-500 mb-8 leading-relaxed" id="overlayDesc">Click the targets as fast as you can. Accuracy matters. You have 30 seconds.</p>
<div className="hidden grid-cols-2 gap-3 mb-8 text-left" id="statsGrid">
<div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-3">
<span className="block text-xs text-zinc-500 mb-1">Final Score</span>
<span className="block text-xl tracking-tight font-medium text-emerald-400" id="finalScore">0</span>
</div>
<div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-3">
<span className="block text-xs text-zinc-500 mb-1">Accuracy</span>
<span className="block text-xl tracking-tight font-medium text-zinc-100" id="finalAccuracy">0%</span>
</div>
</div>
<button className="w-full py-2.5 px-4 bg-zinc-100 text-zinc-900 rounded-lg text-sm font-medium hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-100 focus:ring-offset-2 focus:ring-offset-zinc-900" id="startBtn">
                        Start Session
                    </button>
</div>
</div>
</main>

<p className="text-center text-xs text-zinc-600 font-medium tracking-wide">
            PRESS <kbd className="font-sans px-1.5 py-0.5 rounded border border-zinc-800 bg-zinc-900 text-zinc-400">ESC</kbd> TO ABORT
        </p>
</div>


    </>
  );
}
