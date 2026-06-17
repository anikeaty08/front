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



        // Configuration
        const config = {
            gravity: 0.0,
            friction: 1.0, // No friction for DVD effect
            bounce: 1.0,   // Perfect elasticity
            particleCount: 20,
            trails: false,
            // Neon/DVD style colors
            colors: ['#60a5fa', '#f472b6', '#34d399', '#facc15', '#a78bfa', '#fb923c']
        };

        // DOM Elements
        const canvas = document.getElementById('simCanvas');
        const ctx = canvas.getContext('2d');
        const elGravity = document.getElementById('gravity');
        const elBounce = document.getElementById('bounce');
        const elPCount = document.getElementById('p-count');
        const elTrails = document.getElementById('trails');
        const btnAdd = document.getElementById('add-ball');
        const btnClear = document.getElementById('clear-canvas');
        const valGravity = document.getElementById('val-gravity');
        const valBounce = document.getElementById('val-bounce');
        const valParticles = document.getElementById('val-particles');
        const elFps = document.getElementById('fps');

        // State
        let balls = [];
        let particles = [];
        let width, height;
        let lastTime = 0;

        // Resize Handling
        function resize() {
            width = canvas.parentElement.clientWidth;
            height = canvas.parentElement.clientHeight;
            const dpr = window.devicePixelRatio || 1;
            
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
        }
        window.addEventListener('resize', resize);
        resize();

        // Classes
        class Particle {
            constructor(x, y, color) {
                this.x = x;
                this.y = y;
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 3 + 1;
                this.vx = Math.cos(angle) * speed;
                this.vy = Math.sin(angle) * speed;
                this.life = 1.0;
                this.decay = Math.random() * 0.03 + 0.02;
                this.color = color;
                this.size = Math.random() * 2 + 0.5;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.life -= this.decay;
            }

            draw(ctx) {
                ctx.globalAlpha = this.life;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1.0;
            }
        }

        class Ball {
            constructor(x, y) {
                this.radius = 24; // Slightly larger for the "Logo" feel
                this.x = x || Math.random() * (width - this.radius * 2) + this.radius;
                this.y = y || Math.random() * (height - this.radius * 2) + this.radius;
                
                // Ensure constant diagonal speed
                const speed = 4;
                const angle = (Math.random() * Math.PI * 2);
                // Snap to diagonals roughly to avoid boring straight lines
                this.vx = (Math.random() > 0.5 ? 1 : -1) * speed;
                this.vy = (Math.random() > 0.5 ? 1 : -1) * speed;
                
                this.color = config.colors[Math.floor(Math.random() * config.colors.length)];
            }

            changeColor() {
                let newColor = this.color;
                while (newColor === this.color) {
                    newColor = config.colors[Math.floor(Math.random() * config.colors.length)];
                }
                this.color = newColor;
            }

            update() {
                // Physics
                this.vy += parseFloat(config.gravity);
                this.vx *= config.friction;
                this.vy *= config.friction;

                this.x += this.vx;
                this.y += this.vy;

                // Collisions
                let hit = false;
                let hitX, hitY, side;

                // Bottom
                if (this.y + this.radius > height) {
                    this.y = height - this.radius;
                    this.vy *= -parseFloat(config.bounce);
                    hit = true; hitX = this.x; hitY = height; side = 'bottom';
                }
                // Top
                else if (this.y - this.radius < 0) {
                    this.y = this.radius;
                    this.vy *= -parseFloat(config.bounce);
                    hit = true; hitX = this.x; hitY = 0; side = 'top';
                }

                // Right
                if (this.x + this.radius > width) {
                    this.x = width - this.radius;
                    this.vx *= -parseFloat(config.bounce);
                    hit = true; hitX = width; hitY = this.y; side = 'right';
                }
                // Left
                else if (this.x - this.radius < 0) {
                    this.x = this.radius;
                    this.vx *= -parseFloat(config.bounce);
                    hit = true; hitX = 0; hitY = this.y; side = 'left';
                }

                if (hit) {
                    this.changeColor();
                    if (Math.abs(this.vx) > 0.5 || Math.abs(this.vy) > 0.5) {
                        this.spawnParticles(hitX, hitY, side);
                    }
                }
            }

            spawnParticles(x, y, side) {
                const count = parseInt(config.particleCount);
                for (let i = 0; i < count; i++) {
                    const p = new Particle(x, y, this.color);
                    // Emit particles inward from the wall
                    if (side === 'bottom') p.vy = -Math.abs(p.vy);
                    if (side === 'top') p.vy = Math.abs(p.vy);
                    if (side === 'right') p.vx = -Math.abs(p.vx);
                    if (side === 'left') p.vx = Math.abs(p.vx);
                    particles.push(p);
                }
            }

            draw(ctx) {
                ctx.fillStyle = this.color;
                
                // Glow effect similar to a screen
                ctx.shadowBlur = 30;
                ctx.shadowColor = this.color;
                
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
                
                // Inner white shine
                ctx.shadowBlur = 0;
                ctx.fillStyle = 'rgba(255,255,255,0.15)';
                ctx.beginPath();
                ctx.arc(this.x - this.radius*0.3, this.y - this.radius*0.3, this.radius/3, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Animation Loop
        function loop(timestamp) {
            // FPS Calc
            if (timestamp - lastTime >= 1000) {
                lastTime = timestamp;
            }

            // Clear
            if (config.trails) {
                ctx.fillStyle = 'rgba(9, 9, 11, 0.15)'; // nice trails
                ctx.fillRect(0, 0, width, height);
            } else {
                ctx.clearRect(0, 0, width, height);
            }

            // Update & Draw Balls
            balls.forEach(ball => {
                ball.update();
                ball.draw(ctx);
            });

            // Update & Draw Particles
            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.update();
                p.draw(ctx);
                if (p.life <= 0) {
                    particles.splice(i, 1);
                }
            }

            requestAnimationFrame(loop);
        }

        // Initial Setup - Start with one ball
        balls.push(new Ball(width / 2, height / 2));
        requestAnimationFrame(loop);

        // Event Listeners
        elGravity.addEventListener('input', (e) => {
            config.gravity = e.target.value;
            valGravity.textContent = e.target.value;
        });

        elBounce.addEventListener('input', (e) => {
            config.bounce = e.target.value;
            valBounce.textContent = e.target.value;
        });

        elPCount.addEventListener('input', (e) => {
            config.particleCount = e.target.value;
            valParticles.textContent = e.target.value;
        });

        elTrails.addEventListener('change', (e) => {
            config.trails = e.target.checked;
        });

        btnAdd.addEventListener('click', () => {
            balls.push(new Ball(width / 2, height / 2));
        });

        btnClear.addEventListener('click', () => {
            balls = [];
            particles = [];
            ctx.clearRect(0, 0, width, height);
        });

        canvas.addEventListener('mousedown', (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            balls.push(new Ball(x, y));
        });
        
        canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            const rect = canvas.getBoundingClientRect();
            const touch = e.touches[0];
            const x = touch.clientX - rect.left;
            const y = touch.clientY - rect.top;
            balls.push(new Ball(x, y));
        }, { passive: false });

        setInterval(() => {
            const fps = Math.round(60 - (particles.length / 50)); 
            elFps.textContent = (fps > 0 ? fps : 60) + " FPS";
        }, 500);

    
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
      

<aside className="w-full md:w-80 border-b md:border-b-0 md:border-r border-zinc-900 bg-zinc-950/50 backdrop-blur-xl flex flex-col z-10 shrink-0">

<div className="p-6 border-b border-zinc-900">
<div className="flex items-center gap-3 mb-1">
<div className="h-6 w-6 bg-white rounded-md flex items-center justify-center text-black">
<span className="iconify" data-icon="lucide:disc-3" data-strokeWidth="2.5" data-width="14"></span>
</div>
<h1 className="text-sm font-semibold text-zinc-100 tracking-tight">KINETIC<span className="text-zinc-500 font-normal ml-1">DVD</span></h1>
</div>
<p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                Screensaver mode. Frictionless collision dynamics with color cycling.
            </p>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-8">

<div className="space-y-4">
<div className="flex items-center justify-between">
<label className="text-xs font-medium text-zinc-200 uppercase tracking-wider">Gravity</label>
<span className="text-xs font-mono text-zinc-500" id="val-gravity">0.0</span>
</div>

<input className="w-full" id="gravity" max="1" min="0" step="0.05" type="range" value="0"/>
<div className="flex items-center justify-between pt-2">
<label className="text-xs font-medium text-zinc-200 uppercase tracking-wider">Elasticity</label>
<span className="text-xs font-mono text-zinc-500" id="val-bounce">1.0</span>
</div>

<input className="w-full" id="bounce" max="1.5" min="0.1" step="0.05" type="range" value="1.0"/>
</div>
<hr className="border-zinc-900"/>

<div className="space-y-4">
<div className="flex items-center justify-between">
<label className="text-xs font-medium text-zinc-200 uppercase tracking-wider">Impact Sparks</label>
<span className="text-xs font-mono text-zinc-500" id="val-particles">20</span>
</div>
<input className="w-full" id="p-count" max="50" min="0" step="1" type="range" value="20"/>
<label className="flex items-center justify-between cursor-pointer custom-checkbox pt-2 group">
<span className="text-xs font-medium text-zinc-300 group-hover:text-white transition-colors">Show Trails</span>
<input className="hidden" id="trails" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-700 rounded bg-transparent flex items-center justify-center transition-all">
<svg className="hidden w-3 h-3 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</label>
</div>
<hr className="border-zinc-900"/>

<div className="grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-2 bg-zinc-100 hover:bg-white text-black text-xs font-medium py-2.5 px-4 rounded shadow-lg shadow-zinc-900/20 transition-all active:scale-95" id="add-ball">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
                    Add Object
                </button>
<button className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-medium py-2.5 px-4 rounded transition-all active:scale-95" id="clear-canvas">
<span className="iconify" data-icon="lucide:trash-2" data-width="14"></span>
                    Reset
                </button>
</div>
</div>

<div className="p-6 border-t border-zinc-900 mt-auto">
<div className="flex items-center gap-2 text-xs text-zinc-600">
<div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
<span>Linear Velocity</span>
<span className="ml-auto font-mono text-zinc-700" id="fps">60 FPS</span>
</div>
</div>
</aside>

<main className="flex-1 relative bg-zinc-950 overflow-hidden cursor-crosshair">

<div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(#3f3f46 1px, transparent 1px)', backgroundSize: '32px 32px'}}>
</div>

<canvas className="block w-full h-full relative z-10" id="simCanvas"></canvas>

<div className="absolute top-6 right-6 pointer-events-none select-none">
<div className="bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded px-3 py-1.5 flex items-center gap-2 shadow-xl">
<span className="iconify text-zinc-500" data-icon="lucide:mouse-pointer-2" data-width="12"></span>
<span className="text-xs text-zinc-400">Click to spawn • Bounce changes color</span>
</div>
</div>
</main>


    </>
  );
}
