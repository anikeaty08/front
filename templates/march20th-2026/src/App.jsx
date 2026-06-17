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



tailwind.config = {
theme: {
extend: {
colors: {
lavender: { 50: '#faf5ff', 100: '#f3e8ff', 200: '#e9d5ff', 300: '#d8b4fe', 400: '#c084fc', 500: '#a855f7', 600: '#9333ea' },
blush: '#fbcfe8',
cream: '#fffbeb',
paper: '#fdfbf7',
},
fontFamily: {
display: ['Fredoka', 'sans-serif'],
body: ['Nunito', 'sans-serif'],
hand: ['Caveat', 'cursive'],
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'spin-slow': 'spin 12s linear infinite',
'wiggle': 'wiggle 1s ease-in-out infinite',
'pop': 'pop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
},
keyframes: {
float: { '0%, 100%': { transform: 'translateY(0) rotate(0)' }, '50%': { transform: 'translateY(-10px) rotate(1deg)' } },
pulseGlow: { '0%, 100%': { opacity: 1, filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.6))' }, '50%': { opacity: .6, filter: 'drop-shadow(0 0 2px rgba(168, 85, 247, 0.2))' } },
wiggle: { '0%, 100%': { transform: 'rotate(-2deg)' }, '50%': { transform: 'rotate(2deg)' } },
pop: { '0%': { transform: 'scale(0.8)', opacity: 0 }, '100%': { transform: 'scale(1)', opacity: 1 } }
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const $ = id => document.getElementById(id);
        
        window.addEventListener('load', () => {
            setTimeout(() => {
                initParticles(); initScrapbook(false);
                [g1, g2, g3, g4].forEach(g => g.setupUI());
            }, 100);
            
            let lastWidth = window.innerWidth; let resizeTimer;
            window.addEventListener('resize', () => {
                if(window.innerWidth === lastWidth) return;
                lastWidth = window.innerWidth;
                clearTimeout(resizeTimer); resizeTimer = setTimeout(() => { initScrapbook(false); }, 300);
            });
        });

        function initParticles() {
            const container = $('particles');
            const icons = ['solar:heart-linear', 'solar:star-fall-linear', 'solar:sparkles-linear'];
            const colors = ['text-pink-300/40', 'text-lavender-400/40', 'text-purple-300/30'];
            for(let i=0; i<15; i++) {
                const el = document.createElement('div');
                el.className = `particle ${colors[Math.floor(Math.random()*colors.length)]}`;
                el.style.left = Math.random() * 100 + 'vw'; el.style.top = Math.random() * 100 + 'vh';
                el.style.animationDuration = (Math.random() * 6 + 6) + 's'; el.style.animationDelay = (Math.random() * 5) + 's';
                el.style.fontSize = (Math.random() * 1.5 + 0.8) + 'rem';
                el.innerHTML = `<iconify-icon icon="${icons[Math.floor(Math.random()*icons.length)]}"></iconify-icon>`;
                container.appendChild(el);
            }
        }

        let musicPlaying = false; const audio = $('bg-music');
        function toggleMusic(btn) {
            if(musicPlaying) { audio.pause(); btn.innerHTML = '<iconify-icon icon="solar:music-note-linear" width="1.5rem" class="pointer-events-none"></iconify-icon>'; btn.classList.remove('bg-purple-100'); }
            else { audio.play(); btn.innerHTML = '<iconify-icon icon="solar:music-note-linear" width="1.5rem" class="text-pink-500 animate-pulse pointer-events-none"></iconify-icon>'; btn.classList.add('bg-purple-100'); }
            musicPlaying = !musicPlaying;
        }

        let voicePlaying = false; const vAudio = $('voice-audio'); const visContainer = $('visualizer');
        for(let i=0; i<15; i++) { const bar = document.createElement('div'); bar.className = 'bar bg-pink-400'; bar.style.height = '0.25rem'; visContainer.appendChild(bar); }
        let visInterval;
        function toggleVoiceNote() {
            const icon = $('play-icon');
            if(voicePlaying) { vAudio.pause(); icon.setAttribute('icon', 'solar:play-linear'); clearInterval(visInterval); Array.from(visContainer.children).forEach(b => b.style.height = '0.25rem'); } 
            else { vAudio.play(); icon.setAttribute('icon', 'solar:pause-linear'); visInterval = setInterval(() => { Array.from(visContainer.children).forEach(b => b.style.height = (Math.random() * 1.25 + 0.25) + 'rem'); }, 100); }
            voicePlaying = !voicePlaying;
        }
        vAudio.onended = () => toggleVoiceNote();

        const photos = [
            { s: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=300', c: 'Us being cute' },
            { s: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=300', c: 'That one funny picture' },
            { s: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=300', c: 'Perfect memory' },
            { s: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=300', c: 'My favorite photo' },
            { s: 'https://images.unsplash.com/photo-1509927083803-4bd519298ac4?auto=format&fit=crop&q=80&w=300', c: 'Our best day' }
        ];
        let zIndexCounter = 10;
        
        function initScrapbook(shuffle = false) {
            const board = $('photo-board'); board.innerHTML = '';
            const isMobile = window.innerWidth < 640;
            const elW = isMobile ? 144 : 176; const elH = elW + 40; 
            const rect = board.getBoundingClientRect();
            const boardW = Math.max(rect.width, 300); const boardH = Math.max(rect.height, 450);
            const cols = isMobile ? 2 : 3; const rows = Math.ceil(photos.length / cols);
            const cellW = boardW / cols; const cellH = boardH / rows;
            
            photos.forEach((p, i) => {
                const el = document.createElement('div');
                el.className = 'polaroid flex flex-col items-center animate-pop touch-none z-10';
                el.style.width = elW + 'px';
                el.innerHTML = `<div class="tape scale-90 -top-4 pointer-events-none"></div><img src="${p.s}" class="w-full aspect-square object-cover bg-gray-100 mb-3 pointer-events-none rounded-sm border border-gray-200" alt="Photo"><span class="font-hand text-xl text-purple-900 pointer-events-none leading-none">${p.c}</span>`;
                board.appendChild(el);
                
                let x, y, rot;
                if (!shuffle) {
                    const col = i % cols; const row = Math.floor(i / cols);
                    const itemsInThisRow = row === rows - 1 ? (photos.length % cols || cols) : cols;
                    const rowOffsetX = (boardW - (itemsInThisRow * cellW)) / 2;
                    x = rowOffsetX + (col * cellW) + (cellW - elW) / 2; y = (row * cellH) + (cellH - elH) / 2;
                    rot = (i % 2 === 0 ? -2 : 2) + (Math.random() * 2 - 1);
                } else {
                    x = Math.random() * (boardW - elW - 20) + 10; y = Math.random() * (boardH - elH - 20) + 10; rot = (Math.random() * 20) - 10;
                }
                
                x = Math.max(10, Math.min(x, boardW - elW - 10)); y = Math.max(10, Math.min(y, boardH - elH - 10));
                el.style.transform = `translate(${x}px, ${y}px) rotate(${rot}deg)`; el.dataset.x = x; el.dataset.y = y; el.dataset.rot = rot;

                let isDragging = false, hasMoved = false, startX, startY, initX, initY;
                el.onpointerdown = (e) => {
                    isDragging = true; hasMoved = false;
                    try { if(e.pointerId !== undefined) el.setPointerCapture(e.pointerId); } catch(err){}
                    el.style.zIndex = zIndexCounter++; el.style.transition = 'none';
                    startX = e.clientX; startY = e.clientY; initX = parseFloat(el.dataset.x); initY = parseFloat(el.dataset.y);
                };
                el.onpointermove = (e) => {
                    if(!isDragging) return; e.preventDefault();
                    const dx = e.clientX - startX; const dy = e.clientY - startY;
                    if(Math.abs(dx) > 3 || Math.abs(dy) > 3) hasMoved = true;
                    let newX = Math.max(0, Math.min(initX + dx, board.clientWidth - elW)); let newY = Math.max(0, Math.min(initY + dy, board.clientHeight - elH));
                    el.dataset.x = newX; el.dataset.y = newY;
                    el.style.transform = `translate(${newX}px, ${newY}px) rotate(${el.dataset.rot}deg) scale(1.05)`;
                };
                const endDrag = (e) => {
                    if(!isDragging) return; isDragging = false;
                    try { if(e.pointerId !== undefined) el.releasePointerCapture(e.pointerId); } catch(err){}
                    el.style.transition = 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
                    el.style.transform = `translate(${el.dataset.x}px, ${el.dataset.y}px) rotate(${el.dataset.rot}deg) scale(1)`;
                    if(!hasMoved) openLightbox(p.s, p.c);
                };
                el.onpointerup = endDrag; el.onpointercancel = endDrag;
            });
        }

        function openLightbox(src, caption) {
            const lb = $('lightbox'); $('lightbox-img').src = src; $('lightbox-caption').textContent = caption;
            lb.classList.remove('hidden'); setTimeout(() => { lb.style.opacity = '1'; lb.style.pointerEvents = 'auto'; }, 10);
        }
        function closeLightbox() {
            const lb = $('lightbox'); lb.style.opacity = '0'; lb.style.pointerEvents = 'none';
            setTimeout(() => lb.classList.add('hidden'), 300);
        }

        let clicks = 0; $('easter-egg').addEventListener('click', function() { clicks++; if(clicks === 3) { alert('You found the secret! I love you Tamar! 💜'); clicks = 0; }});

        // GAMES ENGINE
        class GameManager {
            constructor() { this.activeGame = null; this.reqId = null; }
            stopCurrent() { if(this.reqId) { cancelAnimationFrame(this.reqId); this.reqId = null; } if(this.activeGame) { this.activeGame.stop(); this.activeGame = null; } }
            start(gameObj) { this.stopCurrent(); this.activeGame = gameObj; gameObj.init(); }
        }
        const Engine = new GameManager();

        class MiniGame {
            constructor(containerId, title, desc) {
                this.container = $(containerId); this.title = title; this.desc = desc;
                this.level = 1; this.score = 0; this.lives = 3; this.maxLevel = 5; this.state = 'start';
            }
            setupUI() {
                this.screen = this.container.querySelector('.ui-screen'); this.uiTitle = this.container.querySelector('.title');
                this.uiDesc = this.container.querySelector('.desc'); this.startBtn = this.container.querySelector('.start-btn');
                this.hudLvl = this.container.querySelector('.level-disp'); this.hudScore = this.container.querySelector('.score-disp');
                this.hudLives = this.container.querySelector('.lives-disp');
                this.showScreen(this.title, this.desc, 'Tap to Start');
                this.startBtn.onclick = (e) => {
                    e.preventDefault(); e.stopPropagation();
                    if(this.state === 'start' || this.state === 'over' || this.state === 'win') { this.reset(); Engine.start(this); } 
                    else if(this.state === 'levelComplete') { this.level++; this.state = 'play'; this.startLevel(); }
                };
            }
            updateHUD() {
                this.hudLvl.textContent = this.level; this.hudScore.textContent = this.score;
                this.hudLives.innerHTML = Array(this.lives).fill('<iconify-icon icon="solar:heart-bold"></iconify-icon>').join('');
                if(this.lives <= 0 && this.state === 'play') this.gameOver();
            }
            showScreen(title, desc, btnText) {
                this.screen.style.opacity = '1'; this.screen.style.pointerEvents = 'auto'; this.screen.classList.remove('pointer-events-none');
                this.uiTitle.textContent = title; this.uiDesc.textContent = desc; this.startBtn.textContent = btnText;
                this.screen.querySelector('.screen-box').classList.add('scale-100'); this.screen.querySelector('.screen-box').classList.remove('scale-90');
            }
            hideScreen() { 
                this.screen.style.opacity = '0'; this.screen.style.pointerEvents = 'none'; this.screen.classList.add('pointer-events-none');
                this.screen.querySelector('.screen-box').classList.remove('scale-100'); this.screen.querySelector('.screen-box').classList.add('scale-90');
            }
            reset() { this.level = 1; this.score = 0; this.lives = 3; }
            gameOver() { this.state = 'over'; this.stop(); this.showScreen('Game Over', `Score: ${this.score}`, 'Try Again'); }
            gameWin() { this.state = 'win'; this.stop(); this.showScreen('You Won!', `Final Score: ${this.score}`, 'Play Again'); }
            levelComplete() {
                this.state = 'levelComplete'; this.stop();
                if(this.level >= this.maxLevel) this.gameWin(); else this.showScreen(`Level ${this.level} Cleared!`, `Awesome! Keep going.`, `Next Level`);
            }
            stop() { if(Engine.reqId) { cancelAnimationFrame(Engine.reqId); Engine.reqId = null; } if(this.state !== 'over' && this.state !== 'win' && this.state !== 'levelComplete') this.state = 'stopped'; }
            init() {} startLevel() {}
        }

        // 1. MATCH GAME
        class GameMatch extends MiniGame {
            constructor() { super('g1-container', 'Love Match', 'Match 3 emojis in a row.'); this.board = $('g1-board'); this.icons = ['💖', '🌹', '💍', '✨', '💌']; this.grid = []; this.selected = null; this.animating = false; }
            init() { this.state = 'play'; this.startLevel(); }
            startLevel() {
                if(Engine.reqId) { cancelAnimationFrame(Engine.reqId); Engine.reqId = null; }
                this.hideScreen(); this.updateHUD(); this.targetScore = this.score + (this.level * 300);
                this.board.innerHTML = ''; this.grid = [];
                for(let i=0; i<36; i++) {
                    let el = document.createElement('div'); el.className = 'game-item animate-pop touch-none'; el.style.animationDelay = `${(i%6)*0.05}s`;
                    let type = Math.floor(Math.random() * this.icons.length); el.dataset.type = type; el.dataset.idx = i; el.innerHTML = this.icons[type];
                    el.onclick = () => this.selectItem(el); this.board.appendChild(el); this.grid.push(el);
                }
            }
            selectItem(el) {
                if(this.state !== 'play' || this.animating) return;
                if(!this.selected) { this.selected = el; el.classList.add('selected'); } 
                else {
                    if(this.selected === el) { el.classList.remove('selected'); this.selected = null; return; }
                    let idx1 = parseInt(this.selected.dataset.idx); let idx2 = parseInt(el.dataset.idx);
                    let valid = [idx1-1, idx1+1, idx1-6, idx1+6].includes(idx2) && (Math.floor(idx1/6) === Math.floor(idx2/6) || idx1%6 === idx2%6);
                    if(valid) {
                        this.animating = true; this.swapDOM(this.selected, el);
                        setTimeout(() => {
                            if(!this.checkMatches()) { this.swapDOM(this.selected, el); this.lives--; this.updateHUD(); }
                            if(this.selected) this.selected.classList.remove('selected'); this.selected = null; this.animating = false;
                        }, 250);
                    } else { this.selected.classList.remove('selected'); this.selected = null; }
                }
            }
            swapDOM(el1, el2) {
                let tType = el1.dataset.type; let tHTML = el1.innerHTML;
                el1.dataset.type = el2.dataset.type; el1.innerHTML = el2.innerHTML; el2.dataset.type = tType; el2.innerHTML = tHTML;
                el1.classList.add('animate-pop'); el2.classList.add('animate-pop');
                setTimeout(()=>{ el1.classList.remove('animate-pop'); el2.classList.remove('animate-pop'); },300);
            }
            checkMatches() {
                let matched = false;
                for(let i=0; i<36; i++) {
                    let type = this.grid[i].dataset.type; if(type === '-1') continue;
                    if(i%6 <= 3 && type === this.grid[i+1].dataset.type && type === this.grid[i+2].dataset.type) { this.clearItems([i, i+1, i+2]); matched = true; }
                    if(i < 24 && type === this.grid[i+6].dataset.type && type === this.grid[i+12].dataset.type) { this.clearItems([i, i+6, i+12]); matched = true; }
                }
                if(matched) {
                    this.animating = true; setTimeout(() => { this.fillEmpty(); this.animating = false; }, 350);
                    if(this.score >= this.targetScore && this.state === 'play') setTimeout(() => this.levelComplete(), 500);
                }
                return matched;
            }
            clearItems(arr) { arr.forEach(i => { if(this.grid[i].dataset.type !== '-1') { this.grid[i].dataset.type = '-1'; this.grid[i].style.transform = 'scale(0)'; this.score += 20; } }); this.updateHUD(); }
            fillEmpty() {
                this.grid.forEach(el => { if(el.dataset.type === '-1') { let type = Math.floor(Math.random() * this.icons.length); el.dataset.type = type; el.innerHTML = this.icons[type]; el.style.transform = 'scale(1)'; } });
                setTimeout(() => { if(!this.animating && this.state === 'play') this.checkMatches(); }, 400);
            }
        }
        const g1 = new GameMatch();

        // 2. CHASE GAME
        class GameChase extends MiniGame {
            constructor() {
                super('g2-container', 'Chase My Heart', 'Swipe to move and catch stars.'); this.canvas = $('g2-canvas'); this.ctx = this.canvas.getContext('2d'); this.tsX = null; this.tsY = null;
                this.canvas.onpointerdown = e => { if(this.state !== 'play') return; e.preventDefault(); this.tsX = e.clientX; this.tsY = e.clientY; };
                this.canvas.onpointermove = e => {
                    if(this.state!=='play' || !this.tsX) return; e.preventDefault();
                    let dx = e.clientX - this.tsX; let dy = e.clientY - this.tsY;
                    if(Math.abs(dx)>20 || Math.abs(dy)>20) {
                        if(Math.abs(dx) > Math.abs(dy)) { this.player.dx = dx>0?1:-1; this.player.dy = 0; } else { this.player.dy = dy>0?1:-1; this.player.dx = 0; }
                        this.tsX = null; this.tsY = null;
                    }
                };
                this.canvas.onpointerup = () => { this.tsX = null; this.tsY = null; }; this.canvas.onpointercancel = () => { this.tsX = null; this.tsY = null; };
            }
            init() { this.state = 'play'; this.startLevel(); }
            startLevel() {
                if(Engine.reqId) { cancelAnimationFrame(Engine.reqId); Engine.reqId = null; }
                this.hideScreen(); this.updateHUD();
                this.canvas.width = this.container.clientWidth; this.canvas.height = this.container.clientHeight; this.ts = this.canvas.width / 10;
                this.player = { x: 1.5, y: 1.5, dx: 0, dy: 0, s: this.ts*0.6, trail: [] };
                this.enemies = Array(this.level+1).fill(0).map(() => ({ x: 8.5, y: 8.5, dx: Math.random()>0.5?1:-1, dy: Math.random()>0.5?1:-1, s: this.ts*0.6, spd: 0.04 + (this.level*0.015) }));
                this.dots = []; for(let i=1; i<9; i++) for(let j=1; j<9; j++) if(Math.random() > 0.4 && (i!==1 || j!==1)) this.dots.push({x:i+0.5, y:j+0.5});
                this.loop();
            }
            loop() { if(this.state !== 'play') return; this.update(); this.draw(); if(this.state === 'play') Engine.reqId = requestAnimationFrame(() => this.loop()); }
            update() {
                this.player.x += this.player.dx * 0.12; this.player.y += this.player.dy * 0.12;
                if(this.player.x < 1) this.player.x = 1; if(this.player.x > 9) this.player.x = 9; if(this.player.y < 1) this.player.y = 1; if(this.player.y > 9) this.player.y = 9;
                this.player.trail.unshift({x:this.player.x, y:this.player.y}); if(this.player.trail.length > 10) this.player.trail.pop();
                for(let i=this.dots.length-1; i>=0; i--) {
                    let d = this.dots[i]; if(Math.hypot(this.player.x - d.x, this.player.y - d.y) < 0.6) { this.dots.splice(i, 1); this.score += 15; this.updateHUD(); if(this.dots.length === 0 && this.state === 'play') this.levelComplete(); }
                }
                this.enemies.forEach(e => {
                    e.x += e.dx * e.spd; e.y += e.dy * e.spd;
                    if(e.x < 1 || e.x > 9) { e.dx *= -1; e.x += e.dx * e.spd; } if(e.y < 1 || e.y > 9) { e.dy *= -1; e.y += e.dy * e.spd; }
                    if(Math.hypot(this.player.x - e.x, this.player.y - e.y) < 0.8) { this.lives--; this.updateHUD(); if(this.state === 'play') { this.player.x = 1.5; this.player.y = 1.5; this.player.dx=0; this.player.dy=0; this.player.trail=[]; } }
                });
            }
            draw() {
                this.ctx.fillStyle = '#0f172a'; this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
                this.ctx.beginPath(); this.player.trail.forEach((p,i) => { this.ctx.lineTo(p.x*this.ts, p.y*this.ts); });
                this.ctx.strokeStyle = 'rgba(236, 72, 153, 0.5)'; this.ctx.lineWidth = 4; this.ctx.stroke();
                this.ctx.fillStyle = '#fbcfe8'; this.dots.forEach(d => { this.ctx.beginPath(); this.ctx.arc(d.x*this.ts, d.y*this.ts, 4, 0, Math.PI*2); this.ctx.fill(); });
                this.ctx.font = `${this.player.s}px Arial`; this.ctx.textAlign='center'; this.ctx.textBaseline='middle';
                this.ctx.fillText('💖', this.player.x*this.ts, this.player.y*this.ts); this.enemies.forEach(e => { this.ctx.fillText('💔', e.x*this.ts, e.y*this.ts); });
            }
        }
        const g2 = new GameChase();

        // 3. GLIDE GAME
        class GameGlide extends MiniGame {
            constructor() { super('g3-container', 'Love Glide', 'Tap to fly the letter safely.'); this.canvas = $('g3-canvas'); this.ctx = this.canvas.getContext('2d'); this.canvas.onpointerdown = (e) => { if(this.state === 'play') { e.preventDefault(); this.flap(); } }; }
            init() { this.state = 'play'; this.startLevel(); }
            startLevel() {
                if(Engine.reqId) { cancelAnimationFrame(Engine.reqId); Engine.reqId = null; }
                this.hideScreen(); this.updateHUD();
                this.canvas.width = this.container.clientWidth; this.canvas.height = this.container.clientHeight;
                this.p = { y: this.canvas.height/2, v: 0, g: 0.4, j: -7, s: 32 }; this.obs = []; this.frames = 0;
                this.targetScore = this.score + 300; this.speed = 3 + (this.level * 0.5); this.loop();
            }
            flap() { this.p.v = this.p.j; }
            loop() { if(this.state !== 'play') return; this.update(); this.draw(); if(this.state === 'play') Engine.reqId = requestAnimationFrame(() => this.loop()); }
            update() {
                this.p.v += this.p.g; this.p.y += this.p.v;
                if(this.p.y > this.canvas.height-10 || this.p.y < 10) this.hit();
                this.frames++; let freq = Math.max(70, 110 - (this.level*5));
                if(this.frames % freq === 0) {
                    let gap = 140 - (this.level*8); let topH = Math.random() * (this.canvas.height - gap - 60) + 30;
                    this.obs.push({ x: this.canvas.width, top: topH, gap: gap, w: 45, passed: false });
                }
                for(let i=this.obs.length-1; i>=0; i--) {
                    let o = this.obs[i]; o.x -= this.speed;
                    let cx = 60, cy = this.p.y; let r = this.p.s/2 - 4;
                    let nearX = Math.max(o.x, Math.min(cx, o.x + o.w));
                    let nearY1 = Math.max(0, Math.min(cy, o.top)); let nearY2 = Math.max(o.top+o.gap, Math.min(cy, this.canvas.height));
                    if(Math.hypot(cx - nearX, cy - nearY1) < r || Math.hypot(cx - nearX, cy - nearY2) < r) this.hit();
                    if(!o.passed && o.x + o.w < 60) { o.passed = true; this.score += 50; this.updateHUD(); if(this.score >= this.targetScore && this.state === 'play') this.levelComplete(); }
                    if(o.x + o.w < 0) this.obs.splice(i, 1);
                }
            }
            hit() { this.lives--; this.updateHUD(); if(this.state === 'play') { this.p.y = this.canvas.height/2; this.p.v = 0; this.obs = []; this.frames = 0; } }
            draw() {
                this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
                this.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                // Using fillRect instead of roundRect to ensure full support on older iOS/Safari browsers
                this.obs.forEach(o => {
                    this.ctx.fillRect(o.x, 0, o.w, o.top);
                    this.ctx.fillRect(o.x, o.top + o.gap, o.w, this.canvas.height);
                });
                this.ctx.font = `${this.p.s}px Arial`; this.ctx.textAlign='center'; this.ctx.textBaseline='middle';
                this.ctx.save(); this.ctx.translate(60, this.p.y); this.ctx.rotate(Math.min(Math.PI/4, Math.max(-Math.PI/4, this.p.v * 0.1)));
                this.ctx.fillText('💌', 0, 0); this.ctx.restore();
            }
        }
        const g3 = new GameGlide();

        // 4. MEMORY GAME
        class GameMemory extends MiniGame {
            constructor() { super('g4-container', 'Memory Rush', 'Find all matching pairs.'); this.board = $('g4-board'); this.icons = ['💖','🌹','💍','✨','💌','🧸','🎀','💝']; this.cards = []; this.flipped = []; this.matches = 0; }
            init() { this.state = 'play'; this.startLevel(); }
            startLevel() {
                if(Engine.reqId) { cancelAnimationFrame(Engine.reqId); Engine.reqId = null; }
                this.hideScreen(); this.updateHUD();
                this.board.innerHTML = ''; this.cards = []; this.flipped = []; this.matches = 0;
                let pairs = Math.min(4 + this.level, 8); let deck = [];
                for(let i=0; i<pairs; i++) { deck.push(this.icons[i]); deck.push(this.icons[i]); }
                deck.sort(() => Math.random() - 0.5);
                let cols = pairs > 6 ? 4 : (pairs > 4 ? 3 : 2);
                this.board.style.gridTemplateColumns = `repeat(${cols}, minmax(0, 1fr))`;
                deck.forEach((icon, i) => {
                    let card = document.createElement('div'); card.className = 'game-item perspective-1000 w-full aspect-square touch-none';
                    card.innerHTML = `<div class="relative w-full h-full transition-transform duration-500 transform-style-3d cursor-pointer card-inner"><div class="absolute w-full h-full backface-hidden bg-pink-100 rounded-xl border-2 border-pink-200 flex items-center justify-center text-3xl shadow-sm">❓</div><div class="absolute w-full h-full backface-hidden bg-white rounded-xl border-2 border-purple-200 flex items-center justify-center text-3xl shadow-md rotate-y-180">${icon}</div></div>`;
                    card.dataset.icon = icon; card.dataset.idx = i; card.onclick = () => this.flipCard(card);
                    this.board.appendChild(card); this.cards.push(card);
                });
            }
            flipCard(card) {
                if(this.state !== 'play' || this.flipped.length >= 2 || card.classList.contains('matched') || this.flipped.includes(card)) return;
                card.querySelector('.card-inner').style.transform = 'rotateY(180deg)'; this.flipped.push(card);
                if(this.flipped.length === 2) {
                    let match = this.flipped[0].dataset.icon === this.flipped[1].dataset.icon;
                    setTimeout(() => {
                        if(match) {
                            this.flipped.forEach(c => { c.classList.add('matched'); c.style.opacity = '0.5'; });
                            this.score += 50; this.matches++; this.updateHUD();
                            if(this.matches >= Math.min(4 + this.level, 8)) this.levelComplete();
                        } else {
                            this.flipped.forEach(c => c.querySelector('.card-inner').style.transform = 'rotateY(0deg)'); this.lives--; this.updateHUD();
                        }
                        this.flipped = [];
                    }, 800);
                }
            }
        }
        const g4 = new GameMemory();
    
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
      
<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" id="particles"></div>
<button className="fixed glass-heavy flex active:scale-90 transition-all hover:bg-white cursor-pointer text-purple-700 w-12 h-12 z-50 border-transparent border-2 rounded-full top-4 right-4 shadow-lg items-center justify-center" onclick="toggleMusic(this)">
<iconify-icon className="pointer-events-none" icon="solar:music-note-linear" width="1.5rem"></iconify-icon>
</button>
<audio id="bg-music" loop=""><source src="https://assets.mixkit.co/music/preview/mixkit-beautiful-dream-493.mp3" type="audio/mpeg"/></audio>
<div className="fixed inset-0 z-[100] bg-purple-950/90 backdrop-blur-sm flex-col items-center justify-center p-4 opacity-0 pointer-events-none transition-opacity duration-300 flex" id="lightbox">
<button className="absolute top-6 right-6 text-white/80 hover:text-white p-2 text-4xl leading-none active:scale-90 transition-transform cursor-pointer" onclick="closeLightbox()">×</button>
<img alt="Zoomed Photo" className="max-w-full max-h-[60vh] object-contain rounded-xl shadow-2xl mb-6 border-4 border-white pointer-events-none" id="lightbox-img" src=""/>
<p className="font-hand text-4xl text-pink-300 text-center tracking-wide pointer-events-none" id="lightbox-caption"></p>
</div>
<section className="relative min-h-[95svh] flex flex-col items-center justify-center p-4 z-10 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-lavender-200/40 via-blush/30 to-transparent pointer-events-none"></div>
<div className="bg-paper rounded-[2rem] p-6 sm:p-8 max-w-[90%] sm:max-w-md w-full shadow-2xl relative mt-8 animate-float border border-white rotate-1">
<div className="tape"></div>
<div className="absolute -right-4 -top-6 text-4xl transform rotate-12 animate-wiggle pointer-events-none">✨</div>
<div className="text-center mt-4">
<span className="font-hand text-xl text-pink-500 font-bold tracking-widest block mb-1 transform -rotate-2">365 Days Later</span>
<h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-purple-900 mb-6 leading-none">One Year<br/>With You</h1>
</div>
<div className="aspect-square overflow-hidden border-[6px] group transform transition-transform hover:rotate-0 duration-300 bg-gray-100 w-full border-white rounded-2xl mb-6 relative shadow-md -rotate-1">
<img alt="Us" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none" src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-sm font-hand font-bold text-purple-800 flex items-center gap-1 shadow-sm pointer-events-none">
<iconify-icon className="text-pink-400" icon="solar:calendar-date-bold"></iconify-icon> S &amp; T
  </div>
</div>
<p className="text-sm text-purple-800 mb-8 leading-relaxed font-medium text-center px-2">
                Tamar, I made you your own little world. For our memories, our love, and fun little games for whenever you miss me.
            </p>
<div className="flex flex-col gap-3">
<button className="cursor-pointer w-full py-3.5 px-6 bg-purple-900 hover:bg-purple-800 text-white rounded-xl font-semibold shadow-xl active:scale-95 transition-all text-sm flex items-center justify-center gap-2 group" onclick="document.getElementById('story').scrollIntoView()">
                    Enter Our World <iconify-icon className="group-hover:translate-x-1 transition-transform pointer-events-none" icon="solar:arrow-right-linear" width="1.2rem"></iconify-icon>
</button>
<button className="cursor-pointer w-full py-3.5 px-6 bg-white text-purple-900 rounded-xl font-semibold shadow-sm active:scale-95 transition-all text-sm flex items-center justify-center gap-2 border border-purple-100 hover:border-purple-300 hover:bg-lavender-50" onclick="document.getElementById('games').scrollIntoView()">
                    Play The Arcade <iconify-icon className="text-lavender-500 pointer-events-none" icon="solar:gamepad-linear" width="1.2rem"></iconify-icon>
</button>
</div>
</div>
</section>
<section className="py-10 md:py-16 px-4 relative z-10 flex flex-col gap-6 max-w-lg mx-auto" id="story">
<div className="bg-paper rounded-2xl p-6 sm:p-8 shadow-xl relative transform rotate-[1deg] border border-gray-100">
<div className="tape tape-alt pointer-events-none"></div>
<iconify-icon className="absolute -right-3 -top-3 text-4xl text-pink-300 transform rotate-12 pointer-events-none" icon="solar:hearts-linear"></iconify-icon>
<h2 className="font-display text-2xl tracking-tight mb-4 flex items-center gap-2 text-purple-950 mt-2">
<iconify-icon className="text-lavender-500" icon="solar:pen-linear"></iconify-icon> A Note For You
            </h2>
<div className="space-y-4 text-sm leading-relaxed text-purple-800 font-medium">
<p>My beautiful Tamar,</p>
<p>I can't believe it's already been a year. Every single day with you feels like a gift. I wanted to make something special for you, something that lasts longer than a normal card.</p>
<p>This little world is yours. Whenever you feel down, or just miss me, open this up. Look at our photos, read my reasons, or try to beat my high score in the games.</p>
<p>Thank you for the best 365 days of my life.</p>
<p className="font-hand text-3xl mt-6 text-purple-900 text-right">Love always,<br/><span className="text-4xl text-pink-500">Sebastian</span></p>
</div>
</div>
<div className="glass-heavy rounded-3xl p-5 shadow-lg border border-white transform -rotate-[1deg]">
<div className="flex items-center justify-between mb-3">
<h2 className="font-display text-lg tracking-tight">Press play if you miss me</h2>
<iconify-icon className="text-pink-500 text-xl animate-pulse" icon="solar:record-circle-linear"></iconify-icon>
</div>
<div className="flex items-center gap-4 bg-white/60 p-2.5 rounded-full border border-purple-100">
<button className="cursor-pointer w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center text-white shadow-md active:scale-95 transition-transform shrink-0 relative z-20" id="play-btn" onclick="toggleVoiceNote()">
<iconify-icon className="pointer-events-none" icon="solar:play-linear" id="play-icon" width="1.5rem"></iconify-icon>
</button>
<div className="flex-1 flex items-center gap-1 h-8 overflow-hidden px-2 pointer-events-none" id="visualizer"></div>
</div>
<audio id="voice-audio" src="https://assets.mixkit.co/sfx/preview/mixkit-paper-slide-1530.mp3"></audio>
</div>
</section>
<section className="py-10 md:py-16 px-4 relative z-10">
<div className="max-w-md mx-auto">
<h2 className="font-display text-3xl text-center tracking-tight mb-8">Our Memory Path</h2>
<div className="space-y-8 relative before:absolute before:inset-0 before:ml-[1.1rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-lavender-300 before:via-pink-300 before:to-lavender-300 before:rounded-full">
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-9 h-9 rounded-full border-4 border-white bg-lavender-400 text-white shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative left-0 md:left-1/2 transform -translate-x-[5px] md:translate-x-0">
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-paper p-4 rounded-2xl shadow-lg border border-purple-100 transform transition-transform hover:-translate-y-1 rotate-1">
<span className="font-hand text-xl text-pink-500 block mb-1">The Beginning</span>
<img alt="Memory" className="w-full h-40 object-cover rounded-xl mb-3 shadow-inner pointer-events-none" src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<h3 className="leading-tight text-lg tracking-tight font-display mb-1">The Start of it All</h3>
<p className="text-sm text-purple-800">Me sending you a DM for the CAS concert, even though my real intention was to talk to you 😉</p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-9 h-9 rounded-full border-4 border-white bg-pink-400 text-white shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative left-0 md:left-1/2 transform -translate-x-[5px] md:translate-x-0">
<iconify-icon icon="solar:cup-hot-linear"></iconify-icon>
</div>
<div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-paper p-4 rounded-2xl shadow-lg border border-purple-100 transform transition-transform hover:-translate-y-1 -rotate-1">
<span className="font-hand text-xl text-lavender-500 block mb-1">First Date</span>
<img alt="Memory" className="w-full h-40 object-cover rounded-xl mb-3 shadow-inner pointer-events-none" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<h3 className="leading-tight text-lg tracking-tight font-display mb-1">True Foods</h3>
<p className="text-sm text-purple-800">THROWBACK you literally did not eat any food but then we went to cheesecake factory after and you ate all my fries!</p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-9 h-9 rounded-full border-4 border-white bg-purple-600 text-white shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative left-0 md:left-1/2 transform -translate-x-[5px] md:translate-x-0">
<iconify-icon icon="solar:heart-angle-linear"></iconify-icon>
</div>
<div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-paper p-4 rounded-2xl shadow-lg border border-purple-100 transform transition-transform hover:-translate-y-1 rotate-1">
<span className="font-hand text-xl text-pink-500 block mb-1">Milestone</span>
<img alt="Memory" className="w-full h-40 object-cover rounded-xl mb-3 shadow-inner pointer-events-none" src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<h3 className="font-display text-lg mb-1 leading-tight tracking-tight">One Year Later</h3>
<p className="text-sm text-purple-800">And we are just getting started. I love you more today than yesterday.</p>
</div>
</div>
</div>
</div>
</section>
<section className="py-10 md:py-16 px-2 relative z-10 overflow-hidden">
<div className="max-w-4xl mx-auto">
<h2 className="font-display text-3xl text-center tracking-tight mb-1">Scrapbook</h2>
<p className="font-hand text-xl text-center text-pink-500 mb-6">Drag us around, tap to view!</p>
<div className="relative min-h-[450px] md:min-h-[650px] w-full bg-[#e5e5f7] rounded-[2rem] border-4 border-white shadow-inner overflow-hidden touch-none" id="photo-board" style={{backgroundImage: 'radial-gradient(#d8b4fe 2px, transparent 2px)', backgroundSize: '1.875rem 1.875rem'}}></div>
<div className="text-center mt-6 flex justify-center gap-3">
<button className="cursor-pointer active:scale-95 transition-transform flex hover:bg-lavender-50 text-sm font-semibold text-purple-800 bg-white border-purple-100 border rounded-full py-3 px-5 shadow-sm items-center gap-2" onclick="initScrapbook(false)">
<iconify-icon className="text-lavender-500 pointer-events-none" icon="solar:layers-linear" width="1.2rem"></iconify-icon> Arrange Neatly
                </button>
<button className="cursor-pointer active:scale-95 transition-transform flex hover:bg-lavender-50 text-sm font-semibold text-purple-800 bg-white border-purple-100 border rounded-full py-3 px-5 shadow-sm items-center gap-2" onclick="initScrapbook(true)">
<iconify-icon className="text-pink-500 pointer-events-none" icon="solar:refresh-circle-linear" width="1.2rem"></iconify-icon> Shuffle
                </button>
</div>
</div>
</section>
<section className="py-10 md:py-16 px-4 relative z-10">
<div className="max-w-2xl mx-auto">
<h2 className="font-display text-3xl text-center tracking-tight mb-8">Things I Love About You</h2>
<div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-max" id="postit-grid">
<div className="bg-[#fef9c3] p-4 rounded-lg shadow-md border border-black/5 flex flex-col items-center justify-center text-center transform transition-transform hover:scale-105 hover:z-20 relative rotate-2">
<div className="tape scale-75"></div>
<iconify-icon className="text-3xl text-purple-400/50 mb-2 absolute top-4 pointer-events-none" icon="solar:star-fall-linear"></iconify-icon>
<p className="font-hand text-xl text-purple-900 leading-tight relative z-10 mt-4 font-semibold pointer-events-none">You make normal days feel special</p>
</div>
<div className="bg-[#fce7f3] p-4 rounded-lg shadow-md border border-black/5 flex flex-col items-center justify-center text-center transform transition-transform hover:scale-105 hover:z-20 relative -rotate-2">
<div className="tape scale-75"></div>
<iconify-icon className="text-3xl text-purple-400/50 mb-2 absolute top-4 pointer-events-none" icon="solar:smile-circle-linear"></iconify-icon>
<p className="font-hand text-xl text-purple-900 leading-tight relative z-10 mt-4 font-semibold pointer-events-none">Your smile changes everything</p>
</div>
<div className="bg-[#fef9c3] p-4 rounded-lg shadow-md border border-black/5 flex flex-col items-center justify-center text-center transform transition-transform hover:scale-105 hover:z-20 relative rotate-1">
<div className="tape scale-75"></div>
<iconify-icon className="text-3xl text-purple-400/50 mb-2 absolute top-4 pointer-events-none" icon="solar:home-smile-linear"></iconify-icon>
<p className="font-hand text-xl text-purple-900 leading-tight relative z-10 mt-4 font-semibold pointer-events-none">You feel like home</p>
</div>
<div className="bg-[#fce7f3] p-4 rounded-lg shadow-md border border-black/5 flex flex-col items-center justify-center text-center transform transition-transform hover:scale-105 hover:z-20 relative -rotate-1">
<div className="tape scale-75"></div>
<iconify-icon className="text-3xl text-purple-400/50 mb-2 absolute top-4 pointer-events-none" icon="solar:heart-pulse-linear"></iconify-icon>
<p className="font-hand text-xl text-purple-900 leading-tight relative z-10 mt-4 font-semibold pointer-events-none">You care deeply about others</p>
</div>
<div className="bg-[#fef9c3] p-4 rounded-lg shadow-md border border-black/5 flex flex-col items-center justify-center text-center transform transition-transform hover:scale-105 hover:z-20 relative rotate-3">
<div className="tape scale-75"></div>
<iconify-icon className="text-3xl text-purple-400/50 mb-2 absolute top-4 pointer-events-none" icon="solar:camera-linear"></iconify-icon>
<p className="font-hand text-xl text-purple-900 leading-tight relative z-10 mt-4 font-semibold pointer-events-none">You make memories effortless</p>
</div>
<div className="bg-[#fce7f3] p-4 rounded-lg shadow-md border border-black/5 flex flex-col items-center justify-center text-center transform transition-transform hover:scale-105 hover:z-20 relative -rotate-3">
<div className="tape scale-75"></div>
<iconify-icon className="text-3xl text-purple-400/50 mb-2 absolute top-4 pointer-events-none" icon="solar:moon-stars-linear"></iconify-icon>
<p className="font-hand text-xl text-purple-900 leading-tight relative z-10 mt-4 font-semibold pointer-events-none">Beautiful in every version</p>
</div>
</div>
</div>
</section>
<section className="py-10 md:py-16 px-4 relative z-10">
<div className="max-w-md mx-auto">
<div className="flex items-center justify-center gap-3 mb-8">
<iconify-icon className="text-4xl text-lavender-500" icon="solar:mailbox-linear"></iconify-icon>
<h2 className="font-display text-3xl tracking-tight">Open When...</h2>
</div>
<div className="grid grid-cols-1 gap-5">
<div className="bg-paper p-5 rounded-2xl shadow-lg border border-purple-100 relative transform transition-transform hover:-translate-y-1 rotate-1">
<div className="absolute -left-2 top-4 w-4 h-8 bg-pink-300 rounded-r-full shadow-sm pointer-events-none"></div>
<h3 className="font-hand text-2xl text-pink-500 font-bold mb-2 pl-4 border-b border-purple-100/50 pb-2">Open when you miss me</h3>
<p className="text-sm text-purple-800 font-medium pl-4 leading-relaxed">I miss you too. More than you know. Look at our photos, or just call me right now.</p>
</div>
<div className="bg-paper p-5 rounded-2xl shadow-lg border border-purple-100 relative transform transition-transform hover:-translate-y-1 -rotate-1">
<div className="absolute -left-2 top-4 w-4 h-8 bg-pink-300 rounded-r-full shadow-sm pointer-events-none"></div>
<h3 className="font-hand text-2xl text-pink-500 font-bold mb-2 pl-4 border-b border-purple-100/50 pb-2">Open when you had a bad day</h3>
<p className="text-sm text-purple-800 font-medium pl-4 leading-relaxed">Take a deep breath. You are doing amazing. I am so proud of you, and I am always in your corner.</p>
</div>
<div className="bg-paper p-5 rounded-2xl shadow-lg border border-purple-100 relative transform transition-transform hover:-translate-y-1 rotate-1">
<div className="absolute -left-2 top-4 w-4 h-8 bg-pink-300 rounded-r-full shadow-sm pointer-events-none"></div>
<h3 className="font-hand text-2xl text-pink-500 font-bold mb-2 pl-4 border-b border-purple-100/50 pb-2">Open when you need a smile</h3>
<p className="text-sm text-purple-800 font-medium pl-4 leading-relaxed">Remember that time we got totally lost and couldn't stop laughing? You have the prettiest smile in the world.</p>
</div>
</div>
</div>
</section>
<section className="pt-16 pb-24 px-4 relative z-10 bg-purple-950 text-white mt-10 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(147,51,234,0.3)]" id="games">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiLz48L3N2Zz4=')] opacity-50 rounded-t-[3rem] pointer-events-none"></div>
<div className="max-w-lg mx-auto text-center relative z-10">
<div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-3xl backdrop-blur-md border border-white/20 mb-6 shadow-2xl transform rotate-3">
<iconify-icon className="text-5xl text-pink-400" icon="solar:gamepad-linear"></iconify-icon>
</div>
<h2 className="font-display text-4xl tracking-tight mb-3">The Love Arcade</h2>
<p className="text-sm text-purple-200 mb-10 px-4 font-medium">For when you miss me, need a smile, or want to beat my high score.</p>
</div>
<div className="max-w-md mx-auto space-y-16">
<div className="relative" id="game1">
<div className="flex items-center gap-2 mb-3 px-2"><iconify-icon className="text-2xl text-pink-400" icon="solar:puzzle-linear"></iconify-icon><h2 className="font-display text-2xl tracking-tight">Love Match</h2></div>
<div className="relative w-full aspect-square bg-[#fdf8ff] rounded-2xl shadow-2xl border-4 border-white/20 overflow-hidden touch-none" id="g1-container">
<div className="game-grid w-full h-full grid-cols-6 grid-rows-6 p-2 bg-gradient-to-br from-lavender-100 to-pink-50 touch-none relative z-10" id="g1-board"></div>
<div className="absolute top-3 left-3 right-3 flex justify-between items-center z-20 font-semibold text-white drop-shadow-md pointer-events-none">
<div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-sm"><span className="text-pink-300">Lvl <span className="level-disp text-white">1</span></span><div className="w-px h-3 bg-white/30"></div><span><span className="score-disp">0</span> pts</span></div>
<div className="flex gap-1 text-pink-500 text-lg lives-disp drop-shadow-[0_0_5px_rgba(236,72,153,0.8)]"><iconify-icon icon="solar:heart-bold"></iconify-icon><iconify-icon icon="solar:heart-bold"></iconify-icon><iconify-icon icon="solar:heart-bold"></iconify-icon></div>
</div>
<div className="absolute inset-0 z-[60] flex flex-col items-center justify-center bg-black/60 backdrop-blur-md rounded-xl p-6 text-center ui-screen transition-opacity duration-300" style={{pointerEvents: 'auto'}}>
<div className="bg-white/10 p-6 rounded-3xl border border-white/20 shadow-2xl max-w-[17.5rem] w-full transform transition-all screen-box backdrop-blur-lg relative z-[70]">
<h3 className="font-display text-3xl tracking-tight text-white mb-2 title drop-shadow-lg">Love Match</h3><p className="text-sm text-purple-200 mb-6 desc font-medium leading-tight">Match 3 emojis in a row.</p>
<button className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl font-semibold shadow-lg shadow-pink-500/30 active:scale-95 transition-transform text-lg start-btn tracking-wide cursor-pointer relative z-[100]">Tap to Start</button>
</div>
</div>
</div>
</div>
<div className="relative" id="game2">
<div className="flex items-center gap-2 mb-3 px-2"><iconify-icon className="text-2xl text-pink-400" icon="solar:map-arrow-square-linear"></iconify-icon><h2 className="font-display text-2xl tracking-tight">Chase My Heart</h2><span className="ml-auto text-xs uppercase tracking-widest text-purple-300 bg-white/10 px-2 py-1 rounded-md font-semibold pointer-events-none">Swipe</span></div>
<div className="relative w-full aspect-square bg-slate-900 rounded-2xl shadow-2xl border-4 border-white/20 overflow-hidden touch-none" id="g2-container">
<canvas className="block w-full h-full touch-none relative z-10" id="g2-canvas"></canvas>
<div className="absolute top-3 left-3 right-3 flex justify-between items-center z-20 font-semibold text-white drop-shadow-md pointer-events-none">
<div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-sm"><span className="text-pink-300">Lvl <span className="level-disp text-white">1</span></span><div className="w-px h-3 bg-white/30"></div><span><span className="score-disp">0</span> pts</span></div>
<div className="flex gap-1 text-pink-500 text-lg lives-disp drop-shadow-[0_0_5px_rgba(236,72,153,0.8)]"><iconify-icon icon="solar:heart-bold"></iconify-icon><iconify-icon icon="solar:heart-bold"></iconify-icon><iconify-icon icon="solar:heart-bold"></iconify-icon></div>
</div>
<div className="absolute inset-0 z-[60] flex flex-col items-center justify-center bg-black/60 backdrop-blur-md rounded-xl p-6 text-center ui-screen transition-opacity duration-300" style={{pointerEvents: 'auto'}}>
<div className="bg-white/10 p-6 rounded-3xl border border-white/20 shadow-2xl max-w-[17.5rem] w-full transform transition-all screen-box backdrop-blur-lg relative z-[70]">
<h3 className="font-display text-3xl tracking-tight text-white mb-2 title drop-shadow-lg">Chase My Heart</h3><p className="text-sm text-purple-200 mb-6 desc font-medium leading-tight">Swipe to move and catch stars.</p>
<button className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl font-semibold shadow-lg shadow-pink-500/30 active:scale-95 transition-transform text-lg start-btn tracking-wide cursor-pointer relative z-[100]">Tap to Start</button>
</div>
</div>
</div>
</div>
<div className="relative" id="game3">
<div className="flex items-center gap-2 mb-3 px-2"><iconify-icon className="text-2xl text-pink-400" icon="solar:paperplane-linear"></iconify-icon><h2 className="font-display text-2xl tracking-tight">Love Glide</h2><span className="ml-auto text-xs uppercase tracking-widest text-purple-300 bg-white/10 px-2 py-1 rounded-md font-semibold pointer-events-none">Tap</span></div>
<div className="relative w-full h-[25rem] bg-gradient-to-b from-blue-300 to-pink-200 rounded-2xl shadow-2xl border-4 border-white/20 overflow-hidden touch-none" id="g3-container">
<div className="absolute inset-x-0 bottom-0 h-32 bg-white/40 backdrop-blur-sm rounded-t-[50%] blur-[2px] pointer-events-none z-0"></div>
<canvas className="block w-full h-full relative z-10 touch-none" id="g3-canvas"></canvas>
<div className="absolute top-3 left-3 right-3 flex justify-between items-center z-20 font-semibold text-white drop-shadow-md pointer-events-none">
<div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-sm"><span className="text-pink-300">Lvl <span className="level-disp text-white">1</span></span><div className="w-px h-3 bg-white/30"></div><span><span className="score-disp">0</span> pts</span></div>
<div className="flex gap-1 text-pink-500 text-lg lives-disp drop-shadow-[0_0_5px_rgba(236,72,153,0.8)]"><iconify-icon icon="solar:heart-bold"></iconify-icon><iconify-icon icon="solar:heart-bold"></iconify-icon><iconify-icon icon="solar:heart-bold"></iconify-icon></div>
</div>
<div className="absolute inset-0 z-[60] flex flex-col items-center justify-center bg-black/60 backdrop-blur-md rounded-xl p-6 text-center ui-screen transition-opacity duration-300" style={{pointerEvents: 'auto'}}>
<div className="bg-white/10 p-6 rounded-3xl border border-white/20 shadow-2xl max-w-[17.5rem] w-full transform transition-all screen-box backdrop-blur-lg relative z-[70]">
<h3 className="font-display text-3xl tracking-tight text-white mb-2 title drop-shadow-lg">Love Glide</h3><p className="text-sm text-purple-200 mb-6 desc font-medium leading-tight">Tap to fly the letter safely.</p>
<button className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl font-semibold shadow-lg shadow-pink-500/30 active:scale-95 transition-transform text-lg start-btn tracking-wide cursor-pointer relative z-[100]">Tap to Start</button>
</div>
</div>
</div>
</div>
<div className="relative" id="game4">
<div className="flex items-center gap-2 mb-3 px-2"><iconify-icon className="text-2xl text-pink-400" icon="solar:cards-linear"></iconify-icon><h2 className="font-display text-2xl tracking-tight">Memory Rush</h2></div>
<div className="relative w-full aspect-[4/5] bg-paper rounded-2xl shadow-2xl border-4 border-white/20 p-3 overflow-hidden touch-none" id="g4-container">
<div className="game-grid w-full h-full gap-3 relative z-10 touch-none" id="g4-board"></div>
<div className="absolute top-3 left-3 right-3 flex justify-between items-center z-20 font-semibold text-white drop-shadow-md pointer-events-none">
<div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-sm"><span className="text-pink-300">Lvl <span className="level-disp text-white">1</span></span><div className="w-px h-3 bg-white/30"></div><span><span className="score-disp">0</span> pts</span></div>
<div className="flex gap-1 text-pink-500 text-lg lives-disp drop-shadow-[0_0_5px_rgba(236,72,153,0.8)]"><iconify-icon icon="solar:heart-bold"></iconify-icon><iconify-icon icon="solar:heart-bold"></iconify-icon><iconify-icon icon="solar:heart-bold"></iconify-icon></div>
</div>
<div className="absolute inset-0 z-[60] flex flex-col items-center justify-center bg-black/60 backdrop-blur-md rounded-xl p-6 text-center ui-screen transition-opacity duration-300" style={{pointerEvents: 'auto'}}>
<div className="bg-white/10 p-6 rounded-3xl border border-white/20 shadow-2xl max-w-[17.5rem] w-full transform transition-all screen-box backdrop-blur-lg relative z-[70]">
<h3 className="font-display text-3xl tracking-tight text-white mb-2 title drop-shadow-lg">Memory Rush</h3><p className="text-sm text-purple-200 mb-6 desc font-medium leading-tight">Find all matching pairs.</p>
<button className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl font-semibold shadow-lg shadow-pink-500/30 active:scale-95 transition-transform text-lg start-btn tracking-wide cursor-pointer relative z-[100]">Tap to Start</button>
</div>
</div>
</div>
</div>
</div>
</section>
<footer className="py-16 px-4 relative z-10 bg-white text-center rounded-t-[3rem] -mt-8 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] border-t border-purple-100">
<div className="max-w-md mx-auto relative z-10">
<h2 className="font-hand text-4xl text-pink-500 mb-4 transform -rotate-2">I love you, Tamar.</h2>
<p className="text-sm text-purple-800 mb-8 leading-relaxed font-medium px-4">
                Whenever you feel stressed, overwhelmed, or just need a reminder that someone loves you unconditionally—open this. You are never alone.
            </p>
<button className="cursor-pointer px-8 py-4 bg-purple-900 text-white rounded-full text-sm font-semibold shadow-xl hover:bg-purple-800 active:scale-95 transition-all flex items-center justify-center gap-2 mx-auto mb-12 w-full sm:w-auto" onclick="window.scrollTo(0,0)">
                Back to Top <iconify-icon className="text-pink-400 text-lg pointer-events-none" icon="solar:round-arrow-up-linear"></iconify-icon>
</button>
<div className="text-xs text-purple-400 uppercase tracking-widest flex items-center justify-center gap-2 font-semibold">
                Made for Tamar <span className="cursor-pointer text-pink-500 text-base hover:scale-150 transition-transform" id="easter-egg">❤</span> by Sebastian
            </div>
</div>
</footer>


    </>
  );
}
