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



        // Init Icons
        lucide.createIcons();

        // Game State
        const state = {
            playing: false,
            score: 0,
            lives: 5,
            items: [], 
            lastSpawn: 0,
            spawnRate: 1000,
            baseSpeed: 2.5,
            playerX: 50,
            animationFrame: null
        };

        // DOM Elements
        const gameArea = document.getElementById('game-area');
        const player = document.getElementById('player');
        const scoreDisplay = document.getElementById('score-display');
        const livesDisplay = document.getElementById('lives-display');
        const startScreen = document.getElementById('start-screen');
        const gameOverScreen = document.getElementById('game-over-screen');
        const finalScoreDisplay = document.getElementById('final-score');
        const snowContainer = document.getElementById('snow-container');

        // Assets (SVG Strings for performance)
        const ICONS = {
            apple: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>`,
            orange: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="rgba(249, 115, 22, 0.2)" stroke="#f97316" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/></svg>`,
            plum: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c4.97 0 9-3.3 9-8.5C21 7.2 17.5 2 12 2s-9 5.2-9 11.5c0 5.2 4.03 8.5 9 8.5Z"/><path d="M12 13v-5"/></svg>`,
            coal: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="rgba(64, 64, 64, 0.8)" stroke="#525252" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`
        };

        const HEART_FILLED = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`;
        const HEART_EMPTY = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.3"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`;

        // Input Handling
        function handleInput(clientX) {
            const rect = gameArea.getBoundingClientRect();
            let x = clientX - rect.left;
            x = Math.max(0, Math.min(x, rect.width));
            state.playerX = (x / rect.width) * 100;
            player.style.left = `${state.playerX}%`;
        }

        window.addEventListener('mousemove', (e) => {
            if (state.playing) handleInput(e.clientX);
        });

        window.addEventListener('touchmove', (e) => {
            if (state.playing) {
                e.preventDefault(); 
                handleInput(e.touches[0].clientX);
            }
        }, { passive: false });

        // Logic
        function renderLives() {
            livesDisplay.innerHTML = '';
            for(let i=0; i<5; i++) {
                livesDisplay.innerHTML += i < state.lives ? HEART_FILLED : HEART_EMPTY;
            }
        }

        function spawnItem() {
            const el = document.createElement('div');
            el.className = 'absolute top-0 w-8 h-8 flex items-center justify-center -ml-4';
            
            const coalChance = 0.15 + ((5 - state.lives) * 0.05); 
            const isCoal = Math.random() < coalChance;
            
            if (isCoal) {
                el.innerHTML = ICONS.coal;
                el.dataset.type = 'coal';
            } else {
                const fruits = ['apple', 'orange', 'plum'];
                const fruit = fruits[Math.floor(Math.random() * fruits.length)];
                el.innerHTML = ICONS[fruit];
                el.dataset.type = 'fruit';
            }

            const xPos = 5 + Math.random() * 90;
            el.style.left = `${xPos}%`;
            
            gameArea.appendChild(el);

            const difficultyMultiplier = (6 - state.lives) * 0.6; 
            const speed = (state.baseSpeed + difficultyMultiplier) * (0.8 + Math.random() * 0.4);

            state.items.push({
                el: el,
                x: xPos,
                y: -10, 
                speed: speed,
                type: isCoal ? 'coal' : 'fruit',
                active: true
            });
        }

        function update(timestamp) {
            if (!state.playing) return;

            // Spawning
            const currentSpawnRate = Math.max(400, state.spawnRate - (state.score * 5));
            if (timestamp - state.lastSpawn > currentSpawnRate) {
                spawnItem();
                state.lastSpawn = timestamp;
            }

            // Movement & Collision
            const gameRect = gameArea.getBoundingClientRect();
            // Player visual dimensions roughly 80px wide, but hitbox should be centered
            
            const playerTop = gameRect.height - 100; // Adjusted for taller SVG

            state.items.forEach(item => {
                if (!item.active) return;

                item.y += item.speed;
                item.el.style.transform = `translateY(${item.y}px)`;

                const itemBottom = item.y + 32; 

                // Check Bounds
                if (item.y > gameRect.height) {
                    item.active = false;
                    item.el.remove();
                    return; 
                }

                // Collision
                // Check Y overlap (Top of stocking opening is around 25px down in SVG, player is 120px tall)
                // We want to catch things near the "cuff" area approx
                if (itemBottom > playerTop + 20 && item.y < playerTop + 60) {
                    
                    const itemPxX = (item.x / 100) * gameRect.width;
                    const playerPxX = (state.playerX / 100) * gameRect.width;
                    const dist = Math.abs(playerPxX - itemPxX);
                    
                    if (dist < 35) { // Catch radius
                        item.active = false;
                        item.el.remove();
                        handleCatch(item.type);
                    }
                }
            });

            state.items = state.items.filter(i => i.active);
            state.animationFrame = requestAnimationFrame(update);
        }

        function handleCatch(type) {
            if (type === 'fruit') {
                state.score += 10;
                scoreDisplay.textContent = state.score;
                animateScore();
            } else if (type === 'coal') {
                state.lives--;
                renderLives();
                flashScreen();
                if (state.lives <= 0) {
                    endGame();
                }
            }
        }

        function animateScore() {
            scoreDisplay.classList.add('text-emerald-400');
            setTimeout(() => scoreDisplay.classList.remove('text-emerald-400'), 150);
        }

        function flashScreen() {
            const flash = document.createElement('div');
            flash.className = 'absolute inset-0 bg-rose-500/20 z-40 pointer-events-none transition-opacity duration-300';
            gameArea.appendChild(flash);
            setTimeout(() => {
                flash.classList.add('opacity-0');
                setTimeout(() => flash.remove(), 300);
            }, 50);
        }

        function createSnow() {
            const count = 40;
            for(let i=0; i<count; i++) {
                const snow = document.createElement('div');
                snow.className = 'snowflake';
                snow.style.left = Math.random() * 100 + '%';
                snow.style.width = Math.random() * 3 + 2 + 'px';
                snow.style.height = snow.style.width;
                snow.style.opacity = Math.random() * 0.5 + 0.1;
                snow.style.animationDuration = Math.random() * 5 + 10 + 's';
                snow.style.animationDelay = Math.random() * 5 + 's';
                snowContainer.appendChild(snow);
            }
        }

        function startGame() {
            state.score = 0;
            state.lives = 5;
            state.items.forEach(i => i.el.remove());
            state.items = [];
            state.playing = true;
            
            scoreDisplay.textContent = '0';
            renderLives();
            
            startScreen.style.opacity = '0';
            setTimeout(() => startScreen.classList.add('hidden'), 500);
            gameOverScreen.classList.add('hidden');
            
            if (state.animationFrame) cancelAnimationFrame(state.animationFrame);
            state.lastSpawn = performance.now();
            requestAnimationFrame(update);
        }

        function endGame() {
            state.playing = false;
            finalScoreDisplay.textContent = state.score;
            gameOverScreen.classList.remove('hidden');
        }

        // Init
        createSnow();
        renderLives();
        
        document.getElementById('start-btn').addEventListener('click', startGame);
        document.getElementById('restart-btn').addEventListener('click', () => {
            gameOverScreen.classList.add('hidden');
            startGame();
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
      

<div className="absolute inset-0 z-0 overflow-hidden">

<img alt="Background" className="w-full h-full object-cover grayscale-bg opacity-40" src="https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-900/60 mix-blend-multiply"></div>
</div>
<div className="absolute inset-0 pointer-events-none z-0 opacity-30" id="snow-container"></div>

<div className="z-10 w-full max-w-lg h-full max-h-[900px] flex flex-col relative border-x border-neutral-800/30 bg-neutral-900/40 shadow-2xl backdrop-blur-sm ring-1 ring-white/5">

<header className="flex items-center justify-between px-6 py-5 border-b border-white/5 blur-backdrop bg-neutral-950/30 shrink-0">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-neutral-400" data-lucide="snowflake"></i>
<span className="text-sm font-medium tracking-tight text-neutral-100 uppercase">Holiday<span className="text-neutral-500">Drop</span></span>
</div>
<div className="flex items-center gap-6">
<div className="flex flex-col items-end">
<span className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium">Score</span>
<span className="text-lg font-medium leading-none tracking-tight font-mono transition-colors duration-150" id="score-display">0</span>
</div>
<div className="flex flex-col items-end">
<span className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium">Lives</span>
<div className="flex gap-1 mt-1 text-rose-500" id="lives-display">

</div>
</div>
</div>
</header>

<main className="relative flex-1 w-full overflow-hidden cursor-crosshair" id="game-area">

<div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-neutral-950/80 blur-backdrop transition-opacity duration-500" id="start-screen">
<div className="text-center space-y-6 max-w-xs p-6">
<div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center mx-auto ring-1 ring-white/10 shadow-lg shadow-black/50">
<i className="w-6 h-6 text-emerald-400" data-lucide="gift"></i>
</div>
<div>
<h1 className="text-2xl font-medium text-white tracking-tight mb-2">Winter Protocol</h1>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Collect organic matter (fruit). Avoid fossil fuels (coal). <br/>
<span className="text-rose-400 text-xs block mt-2 font-medium">Warning: System accelerates upon damage.</span>
</p>
</div>
<button className="group relative w-full flex justify-center py-3 px-4 border border-white/10 text-sm font-medium rounded-lg text-white bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:ring-neutral-500" id="start-btn">
<span className="absolute left-0 inset-y-0 flex items-center pl-3">
<i className="h-4 w-4 text-neutral-400 group-hover:text-emerald-400 transition-colors" data-lucide="play"></i>
</span>
                        Initialize Sequence
                    </button>
</div>
</div>

<div className="hidden absolute inset-0 z-50 flex flex-col items-center justify-center bg-neutral-950/90 blur-backdrop" id="game-over-screen">
<div className="text-center space-y-6 max-w-xs p-6 animate-in fade-in zoom-in duration-300">
<div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center mx-auto ring-1 ring-rose-500/20">
<i className="w-6 h-6 text-rose-500" data-lucide="x-octagon"></i>
</div>
<div>
<h2 className="text-xl font-medium text-white tracking-tight">Sequence Terminated</h2>
<div className="mt-4 flex justify-center items-baseline gap-2">
<span className="text-sm text-neutral-500">Final Score</span>
<span className="text-3xl font-mono font-medium text-white" id="final-score">0</span>
</div>
</div>
<button className="w-full py-3 px-4 border border-white/10 text-sm font-medium rounded-lg text-white bg-white/5 hover:bg-white/10 transition-all" id="restart-btn">
                        Reboot System
                    </button>
</div>
</div>

<div className="absolute bottom-4 left-1/2 w-20 h-24 -ml-10 z-20 transition-transform duration-75 will-change-transform" id="player">
<div className="relative w-full h-full drop-shadow-xl filter">
<svg className="w-full h-full" fill="none" viewbox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">

<path d="M25 10 C 25 0, 35 0, 35 10 L 35 20" fill="none" stroke="#991b1b" strokeWidth="4"></path>

<path d="M25 25 
                                 L75 25 
                                 C78 25, 80 27, 80 30
                                 L75 65 
                                 C73 85, 65 95, 55 105
                                 L45 110
                                 C25 115, 10 100, 15 85
                                 L25 25 Z" fill="#dc2626"></path>

<path d="M25 25 L75 25 L75 65 C73 85, 65 95, 55 105 L45 110 C25 115, 10 100, 15 85 L25 25 Z" fill="url(#feltGradient)" style={{mixBlendMode: 'multiply', opacity: '0.3'}}></path>

<path d="M35 55 C 30 60, 30 70, 40 70 M 60 50 C 65 55, 70 60, 65 70 M 45 80 C 40 90, 50 95, 60 90" fill="none" opacity="0.8" stroke="#ca8a04" strokeWidth="1"></path>

<g transform="translate(50, 60) scale(0.8)">

<path d="M0 0 C -5 -5, -10 -2, -12 -5 C -10 -10, -5 -8, 0 -15 C 5 -8, 10 -10, 12 -5 C 10 -2, 5 -5, 0 0 Z" fill="#15803d" transform="rotate(-30)"></path>

<path d="M0 0 C -5 -5, -10 -2, -12 -5 C -10 -10, -5 -8, 0 -15 C 5 -8, 10 -10, 12 -5 C 10 -2, 5 -5, 0 0 Z" fill="#166534" transform="rotate(30)"></path>

<path d="M0 0 C -5 -5, -10 -2, -12 -5 C -10 -10, -5 -8, 0 -15 C 5 -8, 10 -10, 12 -5 C 10 -2, 5 -5, 0 0 Z" fill="#15803d" transform="rotate(180) translate(0, -3)"></path>

<path d="M0 0 L 0 -15" opacity="0.4" stroke="#a3e635" strokeWidth="0.5" transform="rotate(-30)"></path>
<path d="M0 0 L 0 -15" opacity="0.4" stroke="#a3e635" strokeWidth="0.5" transform="rotate(30)"></path>
</g>

<g transform="translate(50, 60)">
<circle cx="-2" cy="-2" fill="#ef4444" r="2.5"></circle>
<circle cx="2" cy="-2" fill="#b91c1c" r="2.5"></circle>
<circle cx="0" cy="1.5" fill="#dc2626" r="2.5"></circle>
</g>

<path d="M22 20 
                                 L78 20 
                                 C80 20, 81 21, 81 23
                                 L79 38
                                 C79 40, 77 41, 75 41
                                 L25 41
                                 C23 41, 21 40, 21 38
                                 L19 23
                                 C19 21, 20 20, 22 20 Z" fill="#f5f5f5" filter="url(#fluff)"></path>
<defs>
<lineargradient id="feltGradient" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#991b1b"></stop>
<stop offset="100%" stop-color="#7f1d1d"></stop>
</lineargradient>
<filter id="fluff">
<feturbulence basefrequency="0.8" numoctaves="3" result="noise" type="fractalNoise"></feturbulence>
<fedisplacementmap in="SourceGraphic" in2="noise" scale="1.5"></fedisplacementmap>
<fegaussianblur stddeviation="0.5"></fegaussianblur>
</filter>
</defs>
</svg>
</div>
</div>
</main>

<footer className="py-3 px-6 border-t border-white/5 text-center shrink-0 bg-neutral-950/40">
<p className="text-[10px] text-neutral-600 tracking-wide uppercase">Seasonal Interactive Experience v1.1</p>
</footer>
</div>


    </>
  );
}
