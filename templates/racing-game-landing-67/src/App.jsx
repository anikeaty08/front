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
            const player = document.getElementById('playerCar');
            const obsContainer = document.getElementById('obstaclesContainer');
            const scoreEl = document.getElementById('scoreDisplay');
            const overlay = document.getElementById('overlay');
            const actionBtn = document.getElementById('actionBtn');
            const overlayTitle = document.getElementById('overlayTitle');
            const overlayDesc = document.getElementById('overlayDesc');
            const btnText = document.getElementById('btnText');
            const centerLine = document.getElementById('centerLine');
            
            // Touch zones
            const touchLeft = document.getElementById('touchLeft');
            const touchRight = document.getElementById('touchRight');

            // Game Constants & State
            const boardW = 320;
            const boardH = 520;
            const carW = 36;
            const carH = 56;
            const startX = (boardW / 2) - (carW / 2);
            
            let isPlaying = false;
            let score = 0;
            let baseSpeed = 4.5;
            let speed = baseSpeed;
            let playerX = startX;
            let obstacles = [];
            let frameCount = 0;
            let roadOffset = 0;
            let animationId;

            // Input State
            const keys = { ArrowLeft: false, ArrowRight: false, a: false, d: false };
            let isTouchingLeft = false;
            let isTouchingRight = false;

            // Event Listeners
            document.addEventListener('keydown', e => { if(keys.hasOwnProperty(e.key)) keys[e.key] = true; });
            document.addEventListener('keyup', e => { if(keys.hasOwnProperty(e.key)) keys[e.key] = false; });
            
            // Touch controls mapping
            touchLeft.addEventListener('touchstart', (e) => { e.preventDefault(); isTouchingLeft = true; });
            touchLeft.addEventListener('touchend', (e) => { e.preventDefault(); isTouchingLeft = false; });
            touchRight.addEventListener('touchstart', (e) => { e.preventDefault(); isTouchingRight = true; });
            touchRight.addEventListener('touchend', (e) => { e.preventDefault(); isTouchingRight = false; });

            actionBtn.addEventListener('click', startGame);

            function createObstacle() {
                // Determine spawn x. Keep within road bounds (approx 20px padding left/right)
                const minX = 24;
                const maxX = boardW - carW - 24;
                // Snap to loose lanes for better flow, but add slight randomness
                const lanes = [minX, (boardW/2)-(carW/2), maxX];
                let baseLane = lanes[Math.floor(Math.random() * lanes.length)];
                let x = baseLane + (Math.random() * 10 - 5); 
                
                // Keep strictly in bounds
                x = Math.max(minX, Math.min(x, maxX));

                const obsEl = document.createElement('div');
                // Styling a generic enemy car/block
                obsEl.className = 'absolute w-[36px] h-[56px] bg-neutral-800 rounded border border-neutral-700 shadow-lg flex flex-col items-center py-1';
                
                // Headlights
                obsEl.innerHTML = `
                    <div class="flex justify-between w-full px-1 mt-1">
                        <div class="w-1.5 h-0.5 bg-yellow-500/50 shadow-[0_0_6px_rgba(234,179,8,0.4)] rounded-full"></div>
                        <div class="w-1.5 h-0.5 bg-yellow-500/50 shadow-[0_0_6px_rgba(234,179,8,0.4)] rounded-full"></div>
                    </div>
                    <div class="w-full h-2 bg-neutral-950/40 rounded-[2px] mt-1 w-[28px]"></div>
                `;

                obsEl.style.left = `${x}px`;
                obsEl.style.top = `-60px`;
                obsContainer.appendChild(obsEl);

                obstacles.push({
                    element: obsEl,
                    x: x,
                    y: -60,
                    w: carW,
                    h: carH,
                    passed: false
                });
            }

            function update() {
                if (!isPlaying) return;

                // 1. Player Movement
                // Responsiveness based on speed
                const moveSpeed = 4.5 + (speed * 0.15); 
                
                if ((keys.ArrowLeft || keys.a || isTouchingLeft) && playerX > 16) {
                    playerX -= moveSpeed;
                }
                if ((keys.ArrowRight || keys.d || isTouchingRight) && playerX < boardW - carW - 16) {
                    playerX += moveSpeed;
                }
                player.style.left = `${playerX}px`;

                // 2. Animate Road
                roadOffset += speed;
                if (roadOffset > 48) roadOffset -= 48; // Reset based on background size
                centerLine.style.backgroundPositionY = `${roadOffset}px`;

                // 3. Obstacle Management
                frameCount++;
                // Spawn logic: decrease frames between spawns as speed increases
                const spawnRate = Math.max(35, 80 - Math.floor(speed * 3.5));
                
                if (frameCount >= spawnRate) {
                    createObstacle();
                    frameCount = 0;
                }

                // Move and Check Collisions
                for (let i = obstacles.length - 1; i >= 0; i--) {
                    let obs = obstacles[i];
                    obs.y += speed;
                    obs.element.style.top = `${obs.y}px`;

                    // Hitbox logic (slightly smaller than visual size for fairness)
                    const pRect = { x: playerX + 4, y: boardH - 32 - carH + 4, w: carW - 8, h: carH - 8 }; // bottom-8 = 32px
                    const oRect = { x: obs.x + 4, y: obs.y + 4, w: obs.w - 8, h: obs.h - 8 };

                    // AABB Collision
                    if (pRect.x < oRect.x + oRect.w &&
                        pRect.x + pRect.w > oRect.x &&
                        pRect.y < oRect.y + oRect.h &&
                        pRect.y + pRect.h > oRect.y) {
                        endGame();
                        return; // Halt update loop
                    }

                    // Score increment (passed car)
                    if (!obs.passed && obs.y > pRect.y + pRect.h) {
                        obs.passed = true;
                        score += 10;
                        scoreEl.innerText = score;
                        
                        // Gradual difficulty curve
                        if (score % 50 === 0 && speed < 14) {
                            speed += 0.4;
                        }
                    }

                    // Cleanup offscreen
                    if (obs.y > boardH + 20) {
                        obs.element.remove();
                        obstacles.splice(i, 1);
                    }
                }

                animationId = requestAnimationFrame(update);
            }

            function startGame() {
                // Reset State
                isPlaying = true;
                score = 0;
                speed = baseSpeed;
                frameCount = 0;
                playerX = startX;
                scoreEl.innerText = score;
                player.style.left = `${playerX}px`;

                // Clear DOM & Array
                obstacles.forEach(obs => obs.element.remove());
                obstacles = [];

                // UI Transition
                overlay.style.opacity = '0';
                overlay.style.pointerEvents = 'none';
                setTimeout(() => { 
                    if(isPlaying) overlay.style.display = 'none'; 
                }, 300);

                // Start Loop
                cancelAnimationFrame(animationId);
                animationId = requestAnimationFrame(update);
            }

            function endGame() {
                isPlaying = false;
                cancelAnimationFrame(animationId);

                // Screen shake effect on board wrapper
                const board = player.parentElement;
                board.style.transform = 'translate(4px, 4px)';
                setTimeout(() => board.style.transform = 'translate(-4px, -4px)', 50);
                setTimeout(() => board.style.transform = 'translate(4px, -4px)', 100);
                setTimeout(() => board.style.transform = 'translate(0, 0)', 150);

                // Update & Show UI
                overlayTitle.innerText = 'SYSTEM FAILURE';
                overlayDesc.innerText = `Distance covered: ${score}`;
                btnText.innerText = 'RESTART SYSTEM';
                
                overlay.style.display = 'flex';
                // Small delay to allow display:flex to apply before animating opacity
                requestAnimationFrame(() => {
                    overlay.style.opacity = '1';
                    overlay.style.pointerEvents = 'auto';
                });
            }
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
      

<div className="fixed inset-y-0 left-0 w-1/2 z-40 lg:hidden" id="touchLeft"></div>
<div className="fixed inset-y-0 right-0 w-1/2 z-40 lg:hidden" id="touchRight"></div>

<div className="w-full max-w-[320px] flex justify-between items-end mb-4 px-1 relative z-50 pointer-events-none">
<h1 className="text-lg font-medium tracking-tighter text-white">A P E X</h1>
<div className="text-xs font-normal text-neutral-500 tracking-wide flex items-center gap-2">
            SCORE <span className="text-white font-medium w-8 text-right inline-block" id="scoreDisplay">0</span>
</div>
</div>

<div className="relative w-[320px] h-[520px] bg-neutral-900 border border-neutral-800 rounded-xl shadow-[0_0_60px_-15px_rgba(0,0,0,1)] overflow-hidden">

<div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] opacity-20" id="centerLine" style={{backgroundImage: 'linear-gradient(to bottom, #ffffff 50%, transparent 50%)', backgroundSize: '100% 48px'}}></div>

<div className="absolute inset-y-0 left-4 w-px bg-neutral-800/50"></div>
<div className="absolute inset-y-0 right-4 w-px bg-neutral-800/50"></div>

<div className="absolute bottom-8 w-9 h-14 bg-neutral-200 rounded text-neutral-900 shadow-[0_0_20px_rgba(255,255,255,0.1)] z-20 flex flex-col justify-between py-1 px-1 transition-none" id="playerCar" style={{left: '142px'}}>

<div className="w-full h-2.5 bg-neutral-900/20 rounded-[2px] mt-1 relative overflow-hidden">
<div className="absolute -right-2 top-0 w-4 h-full bg-white/30 -skew-x-12"></div>
</div>

<div className="flex justify-between w-full mt-auto mb-0.5 px-0.5">
<div className="w-1.5 h-0.5 bg-red-500 shadow-[0_0_4px_rgba(239,68,68,0.8)] rounded-full"></div>
<div className="w-1.5 h-0.5 bg-red-500 shadow-[0_0_4px_rgba(239,68,68,0.8)] rounded-full"></div>
</div>
</div>

<div className="absolute inset-0 z-10" id="obstaclesContainer"></div>

<div className="absolute inset-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center transition-opacity duration-300" id="overlay">
<h2 className="text-xl font-medium tracking-tight mb-1 text-white" id="overlayTitle">NIGHT RUN</h2>
<p className="text-xs text-neutral-400 mb-8 font-normal" id="overlayDesc">Use Left/Right arrows or tap screen sides to steer.</p>
<button className="px-5 py-2.5 bg-white text-black text-xs font-medium rounded-full hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.15)] pointer-events-auto" id="actionBtn">
<iconify-icon icon="solar:play-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="tracking-wide" id="btnText">START</span>
</button>
</div>
</div>

<div className="mt-8 text-xs text-neutral-600 hidden lg:flex items-center gap-2 font-normal">
<span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-neutral-400">←</span>
<span>Steer</span>
<span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-neutral-400">→</span>
</div>


    </>
  );
}
