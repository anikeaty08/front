import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
zinc: { 850: '#1f1f22', 950: '#09090b' }
},
animation: {
'shake': 'shake 0.2s cubic-bezier(.36,.07,.19,.97) both',
},
keyframes: {
shake: {
'10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
'20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
'30%, 50%, 70%': { transform: 'translate3d(-2px, 0, 0)' },
'40%, 60%': { transform: 'translate3d(2px, 0, 0)' }
}
}
}
}
}



        // --- Configuration & Constants ---
        const CANVAS_SIZE = 400;
        const GRID_SIZE = 20;
        const TILE_COUNT = CANVAS_SIZE / GRID_SIZE;
        const COLORS = {
            bg: '#09090b',
            snakeHead: '#10b981', // Emerald 500
            snakeBody: '#059669', // Emerald 600
            food: '#f43f5e', // Rose 500
            grid: '#1f1f22',
            border: '#27272a',
            particle: '#f43f5e'
        };

        // --- DOM Elements ---
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');
        const scoreEl = document.getElementById('scoreEl');
        const highScoreEl = document.getElementById('highScoreEl');
        const menuOverlay = document.getElementById('menuOverlay');
        const settingsOverlay = document.getElementById('settingsOverlay');
        const startBtn = document.getElementById('startBtn');
        const settingsBtn = document.getElementById('settingsBtn');
        const closeSettingsBtn = document.getElementById('closeSettingsBtn');
        const menuTitle = document.getElementById('menuTitle');
        const menuSubtitle = document.getElementById('menuSubtitle');
        const statusIcon = document.getElementById('statusIcon');
        const pauseOverlay = document.getElementById('pauseOverlay');
        const speedDisplay = document.getElementById('speedDisplay');
        const gameWrapper = document.getElementById('gameWrapper');
        const borderGlow = document.getElementById('borderGlow');

        // Toggles
        const toggleSoundEl = document.getElementById('toggleSound');
        const toggleWallEl = document.getElementById('toggleWall');
        const toggleGridEl = document.getElementById('toggleGrid');

        // --- Game State ---
        let snake = [];
        let food = { x: 15, y: 15 };
        let particles = [];
        let dx = 0;
        let dy = 0;
        let score = 0;
        let highScore = localStorage.getItem('snakeHighScore') || 0;
        let gameLoop;
        let isGameRunning = false;
        let isPaused = false;
        let speed = 100;
        let isFastMode = false;
        let nextDirection = { x: 0, y: 0 };
        
        // Settings State
        let settings = {
            sound: false,
            wallWrap: false,
            grid: true
        };

        highScoreEl.textContent = highScore;

        // --- Audio System (Web Audio API) ---
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        let audioCtx;

        function initAudio() {
            if (!audioCtx) audioCtx = new AudioContext();
        }

        function playSound(type) {
            if (!settings.sound || !audioCtx) return;
            if (audioCtx.state === 'suspended') audioCtx.resume();

            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);

            const now = audioCtx.currentTime;

            if (type === 'eat') {
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(600, now);
                osc.frequency.exponentialRampToValueAtTime(1200, now + 0.1);
                gain.gain.setValueAtTime(0.1, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
                osc.start(now);
                osc.stop(now + 0.1);
            } else if (type === 'die') {
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(200, now);
                osc.frequency.exponentialRampToValueAtTime(50, now + 0.4);
                gain.gain.setValueAtTime(0.1, now);
                gain.gain.linearRampToValueAtTime(0, now + 0.4);
                osc.start(now);
                osc.stop(now + 0.4);
            } else if (type === 'click') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(800, now);
                gain.gain.setValueAtTime(0.05, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
                osc.start(now);
                osc.stop(now + 0.05);
            }
        }

        // --- Particle System ---
        class Particle {
            constructor(x, y) {
                this.x = x * GRID_SIZE + GRID_SIZE/2;
                this.y = y * GRID_SIZE + GRID_SIZE/2;
                const angle = Math.random() * Math.PI * 2;
                const velocity = Math.random() * 2 + 1;
                this.vx = Math.cos(angle) * velocity;
                this.vy = Math.sin(angle) * velocity;
                this.life = 1.0;
                this.decay = Math.random() * 0.05 + 0.02;
                this.size = Math.random() * 3 + 2;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.life -= this.decay;
            }
            draw(ctx) {
                ctx.globalAlpha = this.life;
                ctx.fillStyle = COLORS.particle;
                ctx.fillRect(this.x, this.y, this.size, this.size);
                ctx.globalAlpha = 1.0;
            }
        }

        // --- Core Logic ---

        function initGame() {
            initAudio();
            playSound('click');
            snake = [
                { x: 10, y: 10 },
                { x: 10, y: 11 },
                { x: 10, y: 12 }
            ];
            dx = 0;
            dy = -1;
            nextDirection = { x: 0, y: -1 };
            score = 0;
            particles = [];
            scoreEl.textContent = score;
            placeFood();
            isGameRunning = true;
            isPaused = false;
            menuOverlay.classList.add('opacity-0', 'pointer-events-none');
            pauseOverlay.classList.add('hidden');
            
            // Remove any shake
            gameWrapper.classList.remove('animate-shake');

            if (gameLoop) clearInterval(gameLoop);
            gameLoop = setInterval(update, speed);
        }

        function update() {
            if (isPaused) return;

            // Handle Particles
            for(let i = particles.length - 1; i >= 0; i--) {
                particles[i].update();
                if(particles[i].life <= 0) particles.splice(i, 1);
            }

            // Move
            if (nextDirection.x !== 0 || nextDirection.y !== 0) {
                dx = nextDirection.x;
                dy = nextDirection.y;
            }

            let head = { x: snake[0].x + dx, y: snake[0].y + dy };

            // Wall Collision Handling
            if (head.x < 0 || head.x >= TILE_COUNT || head.y < 0 || head.y >= TILE_COUNT) {
                if (settings.wallWrap) {
                    if (head.x < 0) head.x = TILE_COUNT - 1;
                    if (head.x >= TILE_COUNT) head.x = 0;
                    if (head.y < 0) head.y = TILE_COUNT - 1;
                    if (head.y >= TILE_COUNT) head.y = 0;
                } else {
                    gameOver();
                    return;
                }
            }

            // Self Collision
            for (let i = 0; i < snake.length; i++) {
                if (head.x === snake[i].x && head.y === snake[i].y) {
                    gameOver();
                    return;
                }
            }

            snake.unshift(head);

            // Eat Food
            if (head.x === food.x && head.y === food.y) {
                score += 10;
                scoreEl.textContent = score;
                playSound('eat');
                spawnParticles(head.x, head.y);
                triggerShake();
                placeFood();
                
                // Progressive speed
                if (!isFastMode && speed > 50) {
                     clearInterval(gameLoop);
                     speed = Math.max(50, 100 - (score / 20)); 
                     gameLoop = setInterval(update, speed);
                }
            } else {
                snake.pop();
            }

            draw();
        }

        function draw() {
            ctx.fillStyle = COLORS.bg;
            ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

            // Grid
            if (settings.grid) {
                ctx.fillStyle = COLORS.grid;
                for (let x = 0; x < TILE_COUNT; x++) {
                    for (let y = 0; y < TILE_COUNT; y++) {
                        ctx.beginPath();
                        ctx.arc(x * GRID_SIZE + GRID_SIZE/2, y * GRID_SIZE + GRID_SIZE/2, 1, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }

            // Food
            ctx.shadowColor = COLORS.food;
            ctx.shadowBlur = 15;
            ctx.fillStyle = COLORS.food;
            ctx.beginPath();
            ctx.arc(
                food.x * GRID_SIZE + GRID_SIZE / 2, 
                food.y * GRID_SIZE + GRID_SIZE / 2, 
                GRID_SIZE / 2 - 4, 
                0, Math.PI * 2
            );
            ctx.fill();
            ctx.shadowBlur = 0;

            // Snake
            snake.forEach((segment, index) => {
                const isHead = index === 0;
                ctx.fillStyle = isHead ? COLORS.snakeHead : COLORS.snakeBody;
                
                if(isHead) {
                    ctx.shadowColor = COLORS.snakeHead;
                    ctx.shadowBlur = 15;
                } else {
                    ctx.shadowBlur = 0;
                }

                const x = segment.x * GRID_SIZE;
                const y = segment.y * GRID_SIZE;
                const size = GRID_SIZE - 2;
                
                roundRect(ctx, x + 1, y + 1, size, size, 4);
                ctx.fill();

                if (isHead) {
                    ctx.shadowBlur = 0;
                    ctx.fillStyle = '#064e3b';
                    let lx = x + 6, ly = y + 6, rx = x + 14, ry = y + 6;
                    if (dx === 1) { lx = x + 12; ly = y + 6; rx = x + 12; ry = y + 14; }
                    else if (dx === -1) { lx = x + 6; ly = y + 6; rx = x + 6; ry = y + 14; }
                    else if (dy === 1) { lx = x + 6; ly = y + 12; rx = x + 14; ry = y + 12; }
                    ctx.beginPath();
                    ctx.arc(lx, ly, 2, 0, Math.PI*2);
                    ctx.arc(rx, ry, 2, 0, Math.PI*2);
                    ctx.fill();
                }
            });

            // Particles
            particles.forEach(p => p.draw(ctx));
        }

        function spawnParticles(x, y) {
            for(let i = 0; i < 8; i++) {
                particles.push(new Particle(x, y));
            }
        }

        function placeFood() {
            let valid = false;
            while (!valid) {
                food = {
                    x: Math.floor(Math.random() * TILE_COUNT),
                    y: Math.floor(Math.random() * TILE_COUNT)
                };
                valid = !snake.some(segment => segment.x === food.x && segment.y === food.y);
            }
        }

        function triggerShake() {
            gameWrapper.classList.remove('animate-shake');
            void gameWrapper.offsetWidth; // trigger reflow
            gameWrapper.classList.add('animate-shake');
            setTimeout(() => gameWrapper.classList.remove('animate-shake'), 200);
        }

        function gameOver() {
            isGameRunning = false;
            clearInterval(gameLoop);
            playSound('die');
            triggerShake();
            
            if (score > highScore) {
                highScore = score;
                localStorage.setItem('snakeHighScore', highScore);
                highScoreEl.textContent = highScore;
                menuTitle.textContent = "New Record!";
                menuSubtitle.textContent = `You scored ${score} points`;
            } else {
                menuTitle.textContent = "Game Over";
                menuSubtitle.textContent = `Score: ${score}`;
            }

            statusIcon.innerHTML = `<iconify-icon icon="lucide:rotate-ccw" class="text-zinc-100 text-xl"></iconify-icon>`;
            startBtn.querySelector('span').textContent = 'Play Again';
            menuOverlay.classList.remove('opacity-0', 'pointer-events-none');
        }

        function togglePause() {
            if (!isGameRunning) return;
            isPaused = !isPaused;
            if (isPaused) {
                pauseOverlay.classList.remove('hidden');
                borderGlow.classList.remove('opacity-50');
                borderGlow.classList.add('opacity-0');
            } else {
                pauseOverlay.classList.add('hidden');
                borderGlow.classList.add('opacity-50');
                borderGlow.classList.remove('opacity-0');
            }
            playSound('click');
        }

        function roundRect(ctx, x, y, w, h, r) {
            if (w < 2 * r) r = w / 2;
            if (h < 2 * r) r = h / 2;
            ctx.beginPath();
            ctx.moveTo(x + r, y);
            ctx.arcTo(x + w, y, x + w, y + h, r);
            ctx.arcTo(x + w, y + h, x, y + h, r);
            ctx.arcTo(x, y + h, x, y, r);
            ctx.arcTo(x, y, x + w, y, r);
            ctx.closePath();
        }

        // --- Event Listeners ---

        window.addEventListener('keydown', (e) => {
            if(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) e.preventDefault();
            if (e.key === ' ' || e.key === 'Escape') togglePause();
            else handleInput(e.key);
        });

        startBtn.addEventListener('click', initGame);
        
        // Settings Logic
        function updateToggleUI(el, isActive, colorClass = 'bg-emerald-400') {
            const track = el;
            const thumb = el.querySelector('span');
            if (isActive) {
                track.classList.remove('bg-zinc-800');
                track.classList.add('bg-emerald-900/30');
                thumb.classList.remove('left-1', 'bg-zinc-400');
                thumb.classList.add('right-1', colorClass, 'shadow-sm');
            } else {
                track.classList.add('bg-zinc-800');
                track.classList.remove('bg-emerald-900/30');
                thumb.classList.add('left-1', 'bg-zinc-400');
                thumb.classList.remove('right-1', colorClass, 'shadow-sm');
            }
        }

        // Initialize Toggle UI
        updateToggleUI(toggleSoundEl, settings.sound);
        updateToggleUI(toggleWallEl, settings.wallWrap);
        updateToggleUI(toggleGridEl, settings.grid);

        settingsBtn.addEventListener('click', () => {
            settingsOverlay.classList.remove('hidden');
            setTimeout(() => settingsOverlay.classList.remove('opacity-0'), 10);
            playSound('click');
        });

        closeSettingsBtn.addEventListener('click', () => {
            settingsOverlay.classList.add('opacity-0');
            setTimeout(() => settingsOverlay.classList.add('hidden'), 200);
            playSound('click');
        });

        toggleSoundEl.addEventListener('click', () => {
            settings.sound = !settings.sound;
            updateToggleUI(toggleSoundEl, settings.sound);
            if(settings.sound) initAudio();
            playSound('click');
        });

        toggleWallEl.addEventListener('click', () => {
            settings.wallWrap = !settings.wallWrap;
            updateToggleUI(toggleWallEl, settings.wallWrap);
            playSound('click');
        });

        toggleGridEl.addEventListener('click', () => {
            settings.grid = !settings.grid;
            updateToggleUI(toggleGridEl, settings.grid);
            if(!isGameRunning) draw(); // Redraw if in menu
            playSound('click');
        });

        // Speed Toggle
        document.getElementById('toggleSpeedBtn').addEventListener('click', (e) => {
            e.currentTarget.blur();
            isFastMode = !isFastMode;
            speed = isFastMode ? 50 : 100;
            speedDisplay.textContent = isFastMode ? 'Fast' : 'Normal';
            if (isGameRunning) {
                clearInterval(gameLoop);
                gameLoop = setInterval(update, speed);
            }
            playSound('click');
            // Visual feedback
            const icon = e.currentTarget.querySelector('iconify-icon');
            icon.classList.add('text-emerald-400');
            setTimeout(() => icon.classList.remove('text-emerald-400'), 200);
            
            // Border effect
            if(isFastMode) borderGlow.classList.add('animate-pulse');
            else borderGlow.classList.remove('animate-pulse');
        });

        document.getElementById('pauseBtn').addEventListener('click', (e) => {
            e.currentTarget.blur();
            togglePause();
        });

        // Mobile Controls
        function handleInput(key) {
            if (!isGameRunning) return;
            const goingUp = dy === -1, goingDown = dy === 1;
            const goingRight = dx === 1, goingLeft = dx === -1;

            if ((key === 'ArrowLeft' || key === 'a') && !goingRight) nextDirection = { x: -1, y: 0 };
            else if ((key === 'ArrowUp' || key === 'w') && !goingDown) nextDirection = { x: 0, y: -1 };
            else if ((key === 'ArrowRight' || key === 'd') && !goingLeft) nextDirection = { x: 1, y: 0 };
            else if ((key === 'ArrowDown' || key === 's') && !goingUp) nextDirection = { x: 0, y: 1 };
        }

        const btnMap = { 'btnUp': 'ArrowUp', 'btnDown': 'ArrowDown', 'btnLeft': 'ArrowLeft', 'btnRight': 'ArrowRight' };
        Object.keys(btnMap).forEach(id => {
            const btn = document.getElementById(id);
            const action = (e) => {
                if(e.cancelable) e.preventDefault();
                handleInput(btnMap[id]);
                if (settings.sound) playSound('click'); 
            };
            btn.addEventListener('touchstart', (e) => { action(e); btn.classList.add('bg-zinc-800'); }, {passive: false});
            btn.addEventListener('touchend', () => btn.classList.remove('bg-zinc-800'));
            btn.addEventListener('mousedown', action);
        });

        draw(); // Initial Render
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-md px-6 mb-6 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-900/20">
<iconify-icon className="text-white text-lg" icon="lucide:gamepad-2"></iconify-icon>
</div>
<div>
<h1 className="text-zinc-100 font-medium tracking-tight text-sm leading-none">SNAKE</h1>
<span className="text-xs text-zinc-500 font-medium tracking-tight">OS v2.0</span>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-end">
<span className="text-[10px] uppercase tracking-wider font-medium text-zinc-600">Score</span>
<span className="text-zinc-100 font-mono text-lg leading-none tracking-tight" id="scoreEl">0</span>
</div>
<div className="flex flex-col items-end">
<span className="text-[10px] uppercase tracking-wider font-medium text-zinc-600">Best</span>
<span className="text-emerald-400 font-mono text-lg leading-none tracking-tight" id="highScoreEl">0</span>
</div>
</div>
</div>

<div className="relative group" id="gameWrapper">

<div className="absolute -inset-0.5 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-xl opacity-50 blur-sm transition duration-500" id="borderGlow"></div>
<div className="relative bg-zinc-900 rounded-lg p-1 shadow-2xl shadow-black/50 overflow-hidden ring-1 ring-white/10">
<canvas className="rounded bg-zinc-950 block w-full max-w-[400px] h-auto cursor-none touch-none" height="400" id="gameCanvas" width="400"></canvas>

<div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-zinc-950/90 backdrop-blur-sm transition-opacity duration-300 rounded" id="menuOverlay">
<div className="text-center space-y-6 animate-in fade-in zoom-in duration-300 px-6">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 ring-1 ring-white/10 mb-2 shadow-xl shadow-black" id="statusIcon">
<iconify-icon className="text-emerald-400 text-xl" icon="lucide:play"></iconify-icon>
</div>
<div>
<h2 className="text-2xl font-medium text-zinc-100 tracking-tight" id="menuTitle">Ready?</h2>
<p className="text-sm text-zinc-500 mt-1" id="menuSubtitle">Use arrow keys or swipe</p>
</div>
<div className="flex gap-3 justify-center">
<button className="inline-flex items-center justify-center w-10 h-10 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-400 transition-colors border border-zinc-800" id="settingsBtn">
<iconify-icon icon="lucide:settings-2"></iconify-icon>
</button>
<button className="group relative inline-flex items-center gap-2 px-6 py-2 bg-zinc-100 hover:bg-white text-zinc-950 text-sm font-medium rounded transition-all active:scale-95 shadow-lg shadow-zinc-900/50" id="startBtn">
<span>Start Game</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="absolute inset-0 z-30 flex flex-col bg-zinc-950/95 backdrop-blur-md hidden opacity-0 transition-opacity duration-200 rounded p-6" id="settingsOverlay">
<div className="flex items-center justify-between mb-6">
<h3 className="text-zinc-100 font-medium tracking-tight">Settings</h3>
<button className="text-zinc-500 hover:text-zinc-100" id="closeSettingsBtn">
<iconify-icon className="text-lg" icon="lucide:x"></iconify-icon>
</button>
</div>
<div className="space-y-5">

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-500" icon="lucide:volume-2"></iconify-icon>
<span className="text-sm text-zinc-300">Sound Effects</span>
</div>
<button className="w-10 h-5 rounded-full bg-zinc-800 relative transition-colors duration-200" id="toggleSound">
<span className="absolute top-1 left-1 w-3 h-3 bg-zinc-400 rounded-full transition-all duration-200"></span>
</button>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-500" icon="lucide:minimize"></iconify-icon>
<span className="text-sm text-zinc-300">Wall Wrapping</span>
</div>
<button className="w-10 h-5 rounded-full bg-zinc-800 relative transition-colors duration-200" id="toggleWall">
<span className="absolute top-1 left-1 w-3 h-3 bg-zinc-400 rounded-full transition-all duration-200"></span>
</button>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-500" icon="lucide:grid"></iconify-icon>
<span className="text-sm text-zinc-300">Show Grid</span>
</div>
<button className="w-10 h-5 rounded-full bg-emerald-900/30 relative transition-colors duration-200" id="toggleGrid">
<span className="absolute top-1 right-1 w-3 h-3 bg-emerald-400 rounded-full transition-all duration-200 shadow-sm"></span>
</button>
</div>
</div>
</div>

<div className="absolute top-4 right-4 hidden z-10" id="pauseOverlay">
<div className="flex items-center gap-1.5 px-2 py-1 bg-zinc-800/80 backdrop-blur rounded border border-white/5 text-[10px] uppercase tracking-widest font-medium text-zinc-400 shadow-lg">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></div>
                    Paused
                </div>
</div>
</div>
</div>

<div className="w-full max-w-md mt-6 px-4">

<div className="grid grid-cols-3 gap-2 mb-6 sm:hidden">
<div className="col-start-2">
<button className="w-full aspect-square flex items-center justify-center bg-zinc-900 rounded border border-zinc-800 active:bg-zinc-800 text-zinc-400 transition-colors shadow-sm" id="btnUp">
<iconify-icon className="text-xl" icon="lucide:chevron-up"></iconify-icon>
</button>
</div>
<div className="col-start-1 row-start-2">
<button className="w-full aspect-square flex items-center justify-center bg-zinc-900 rounded border border-zinc-800 active:bg-zinc-800 text-zinc-400 transition-colors shadow-sm" id="btnLeft">
<iconify-icon className="text-xl" icon="lucide:chevron-left"></iconify-icon>
</button>
</div>
<div className="col-start-2 row-start-2">
<button className="w-full aspect-square flex items-center justify-center bg-zinc-900 rounded border border-zinc-800 active:bg-zinc-800 text-zinc-400 transition-colors shadow-sm" id="btnDown">
<iconify-icon className="text-xl" icon="lucide:chevron-down"></iconify-icon>
</button>
</div>
<div className="col-start-3 row-start-2">
<button className="w-full aspect-square flex items-center justify-center bg-zinc-900 rounded border border-zinc-800 active:bg-zinc-800 text-zinc-400 transition-colors shadow-sm" id="btnRight">
<iconify-icon className="text-xl" icon="lucide:chevron-right"></iconify-icon>
</button>
</div>
</div>
<div className="flex items-center justify-between text-xs text-zinc-500 border-t border-zinc-900 pt-6">
<div className="flex items-center gap-4">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-zinc-600" icon="lucide:zap"></iconify-icon>
<span>Speed: <span className="text-zinc-300 font-medium" id="speedDisplay">Normal</span></span>
</div>
</div>
<div className="flex gap-2">
<button className="p-2 hover:bg-zinc-900 rounded text-zinc-400 hover:text-zinc-200 transition-colors" id="toggleSpeedBtn" title="Toggle Speed">
<iconify-icon className="text-base" icon="lucide:gauge"></iconify-icon>
</button>
<button className="p-2 hover:bg-zinc-900 rounded text-zinc-400 hover:text-zinc-200 transition-colors" id="pauseBtn" title="Pause Game">
<iconify-icon className="text-base" icon="lucide:pause"></iconify-icon>
</button>
</div>
</div>
<div className="mt-4 text-center">
<p className="text-[10px] text-zinc-700">Press <span className="font-mono text-zinc-500 bg-zinc-900 px-1 rounded border border-zinc-800">Space</span> to pause</p>
</div>
</div>


    </>
  );
}
