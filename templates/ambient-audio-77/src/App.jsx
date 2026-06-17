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



        // --- Setup ---
        lucide.createIcons();
        const audio = document.getElementById('audio-player');
        const playBtn = document.getElementById('play-btn');
        const playIcon = document.getElementById('play-icon');
        const pauseIcon = document.getElementById('pause-icon');
        const progressBar = document.getElementById('progress-bar');
        
        const dashboardView = document.getElementById('dashboard-view');
        const playerView = document.getElementById('player-view');
        const canvasEl = document.getElementById('generative-canvas');
        const playerTitle = document.getElementById('player-title');
        
        let isPlaying = false;
        let currentMode = 'relax'; 
        let animationId;

        // --- Simplex Noise Implementation (Simplified) ---
        // Used for organic liquid movement
        const SimplexNoise = (function() {
            var i, j, k;
            var A = [1.5, 2.5, 3.5]; 
            // Simple pseudo-random hash
            function dot(g, x, y) { return g[0]*x + g[1]*y; }
            function noise(x, y) {
                return Math.sin(x * 1.2 + Math.cos(y * 0.5)); // Fallback simplified noise for 1kb size constraint
            }
            return { noise2D: (x,y) => Math.sin(x) * Math.cos(y) + Math.sin(y*2)*0.5 };
        })();
        
        // Better noise helper
        function noise(t) {
            return Math.sin(t * 0.5) * Math.sin(t * 1.5) * Math.cos(t * 0.2);
        }

        // --- Audio Logic ---
        function toggleAudio() {
            if (isPlaying) {
                audio.pause();
                playIcon.classList.remove('hidden');
                pauseIcon.classList.add('hidden');
                progressBar.style.width = '0%';
            } else {
                audio.play();
                playIcon.classList.add('hidden');
                pauseIcon.classList.remove('hidden');
                progressBar.style.width = '100%';
            }
            isPlaying = !isPlaying;
        }
        playBtn.addEventListener('click', toggleAudio);

        // --- View Switching ---
        function openPlayer(mode) {
            currentMode = mode;
            playerTitle.innerText = mode;
            
            // Dashboard -> Player
            dashboardView.classList.replace('view-active', 'view-hidden');
            playerView.classList.replace('view-hidden', 'view-active');
            
            // Dim canvas slightly for dashboard, full opacity for player is handled by global visual logic
            // But we keep visuals running on dashboard too for "live" feel
            
            if (!isPlaying) toggleAudio();
            initVisuals(mode);
        }

        function closePlayer() {
            playerView.classList.replace('view-active', 'view-hidden');
            dashboardView.classList.replace('view-hidden', 'view-active');
            
            if (isPlaying) toggleAudio();
            
            // Revert to calm visuals for dashboard background
            setTimeout(() => {
                initVisuals('dashboard');
            }, 500);
        }

        // --- ADVANCED GENERATIVE ENGINE ---
        const canvas = document.getElementById('generative-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let entities = [];
        let time = 0;

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            if(!isPlaying && currentMode === 'relax') initVisuals('dashboard');
        }
        window.addEventListener('resize', resize);
        resize();

        // 1. LIQUID BLOB (Relax) - Metaballs approach using gradients
        class LiquidBlob {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.radius = Math.random() * 200 + 100;
                this.colorBase = Math.random() > 0.5 ? 200 : 240; // Blue/White spectrum
            }
            draw(t) {
                this.x += this.vx + Math.sin(t * 0.001 + this.y * 0.01) * 0.5;
                this.y += this.vy + Math.cos(t * 0.001 + this.x * 0.01) * 0.5;

                // Bounce
                if(this.x < -100 || this.x > width + 100) this.vx *= -1;
                if(this.y < -100 || this.y > height + 100) this.vy *= -1;

                // Create a soft glowing gradient
                const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
                grad.addColorStop(0, `rgba(255, 255, 255, 0.15)`);
                grad.addColorStop(0.5, `rgba(${this.colorBase}, 255, 255, 0.05)`);
                grad.addColorStop(1, "rgba(0,0,0,0)");

                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // 2. FOCUS TUNNEL
        class FocusTunnel {
            constructor(i) {
                this.i = i;
                this.offset = i * 0.5;
            }
            draw(t) {
                const cx = width / 2;
                const cy = height / 2;
                // Breathing radius
                const r = (this.i * 60) + Math.sin(t * 0.002 - this.i * 0.2) * 20;
                
                ctx.strokeStyle = `rgba(255,255,255,${0.05 + Math.sin(t*0.001 + this.i)*0.03})`;
                ctx.lineWidth = 1.5;
                
                ctx.beginPath();
                // Distortion
                for(let a=0; a<Math.PI*2; a+=0.1) {
                    let dr = r + Math.sin(a * 5 + t * 0.005) * 5;
                    let x = cx + Math.cos(a) * dr;
                    let y = cy + Math.sin(a) * dr;
                    if(a===0) ctx.moveTo(x,y);
                    else ctx.lineTo(x,y);
                }
                ctx.closePath();
                ctx.stroke();
            }
        }

        // 3. SLEEP - BOREALIS (Flow Field)
        class BorealisStrand {
            constructor() {
                this.x = Math.random() * width;
                this.width = Math.random() * 100 + 50;
            }
            draw(t) {
                ctx.fillStyle = "rgba(255,255,255,0.02)";
                ctx.beginPath();
                ctx.moveTo(this.x, height);
                
                // Curve up
                for(let y = height; y > 0; y-=20) {
                    // Simplex-like noise movement
                    let noiseVal = Math.sin(y * 0.002 + t * 0.001 + this.x * 0.01);
                    ctx.lineTo(this.x + noiseVal * 100, y);
                }
                ctx.lineTo(this.x + 100, 0);
                ctx.lineTo(this.x + this.width, height);
                ctx.fill();
            }
        }

        // 4. MOVE - PARTICLES & WARP
        class WarpParticle {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.z = Math.random() * 2 + 1; // Depth/Speed
                this.len = Math.random() * 50;
            }
            draw(t) {
                this.y -= this.z * 2; // Upward fast movement
                if (this.y < -50) this.reset();
                this.y = (this.y < 0) ? height : this.y;

                let alpha = (this.z / 3) * 0.5;
                ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
                ctx.lineWidth = this.z;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x, this.y + this.len * this.z);
                ctx.stroke();
            }
        }

        function initVisuals(mode) {
            entities = [];
            time = 0; // Reset time helps sync
            
            // Clear canvas style for fresh start
            if (mode === 'relax' || mode === 'dashboard') {
                for(let i=0; i<12; i++) entities.push(new LiquidBlob());
            } else if (mode === 'focus') {
                for(let i=1; i<15; i++) entities.push(new FocusTunnel(i));
            } else if (mode === 'sleep') {
                for(let i=0; i<20; i++) entities.push(new BorealisStrand());
            } else if (mode === 'move') {
                for(let i=0; i<80; i++) entities.push(new WarpParticle());
            }

            if (animationId) cancelAnimationFrame(animationId);
            animate(mode);
        }

        function animate(mode) {
            // Trail effects depending on mode
            if (mode === 'move') {
                 ctx.fillStyle = 'rgba(0, 0, 0, 0.2)'; // Harder clear for sharp lines
                 ctx.fillRect(0, 0, width, height);
            } else if (mode === 'sleep') {
                 ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Very long trails
                 ctx.fillRect(0, 0, width, height);
            } else {
                // Liquid mixing (Lighter composite for "add" effect)
                ctx.clearRect(0, 0, width, height);
            }

            // Liquid Glass Blending Logic
            if (mode === 'relax' || mode === 'dashboard') {
                ctx.globalCompositeOperation = 'screen'; // Makes overlapping blobs glow
            } else {
                ctx.globalCompositeOperation = 'source-over';
            }

            time += 16; // Approx 60fps ms
            
            entities.forEach(e => e.draw(time));

            animationId = requestAnimationFrame(() => animate(mode));
        }

        // Start subtle background on load
        initVisuals('dashboard');

    
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
      

<audio crossorigin="anonymous" id="audio-player" loop="">
<source src="https://cdn.pixabay.com/download/audio/2022/08/02/audio_884fe92c21.mp3?filename=ambient-dream-116568.mp3" type="audio/mpeg"/>
</audio>

<canvas className="fixed inset-0 w-full h-full z-0 pointer-events-none transition-opacity duration-1000" id="generative-canvas"></canvas>

<div className="fixed inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 z-0 pointer-events-none"></div>

<div className="h-full w-full flex flex-col relative z-10">

<div className="absolute top-0 w-full flex justify-between items-center px-6 py-6 pt-10 z-50 mix-blend-difference">
<span className="text-[10px] font-semibold tracking-widest text-zinc-400">ENDEL.IO</span>
<div className="flex space-x-2 items-center text-zinc-400">
<div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
</div>
</div>

<div className="view-active w-full h-full flex flex-col justify-between p-6 pt-28 pb-10 transition-all duration-700" id="dashboard-view">
<div className="space-y-1 relative">
<div className="absolute -left-4 -top-10 w-24 h-24 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
<p className="text-zinc-500 font-medium text-xs tracking-[0.2em] uppercase pl-0.5">Circadian Rhythm</p>
<h1 className="text-[2.5rem] leading-[1.1] font-light tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-zinc-500">
                    Choose your<br/>current flow
                </h1>
</div>

<div className="grid grid-cols-2 gap-3 w-full mt-auto">

<button className="glass-panel group relative flex flex-col justify-between p-5 h-44 rounded-3xl active:scale-[0.98] transition-all duration-300 overflow-hidden hover:bg-white/5" onclick="openPlayer('relax')">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-10 h-10 rounded-full glass-button flex items-center justify-center group-hover:bg-white text-white group-hover:text-black transition-colors duration-300">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="waves"></i>
</div>
<div>
<span className="block text-lg font-normal tracking-tight">Relax</span>
<span className="text-[10px] text-zinc-500 tracking-wide uppercase mt-1 block group-hover:text-zinc-400 transition-colors">Unwind &amp; Chill</span>
</div>
</button>

<button className="glass-panel group relative flex flex-col justify-between p-5 h-44 rounded-3xl active:scale-[0.98] transition-all duration-300 overflow-hidden hover:bg-white/5" onclick="openPlayer('focus')">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-10 h-10 rounded-full glass-button flex items-center justify-center group-hover:bg-white text-white group-hover:text-black transition-colors duration-300">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="zap"></i>
</div>
<div>
<span className="block text-lg font-normal tracking-tight">Focus</span>
<span className="text-[10px] text-zinc-500 tracking-wide uppercase mt-1 block group-hover:text-zinc-400 transition-colors">Deep Work</span>
</div>
</button>

<button className="glass-panel group relative flex flex-col justify-between p-5 h-44 rounded-3xl active:scale-[0.98] transition-all duration-300 overflow-hidden hover:bg-white/5" onclick="openPlayer('sleep')">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-10 h-10 rounded-full glass-button flex items-center justify-center group-hover:bg-white text-white group-hover:text-black transition-colors duration-300">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="moon"></i>
</div>
<div>
<span className="block text-lg font-normal tracking-tight">Sleep</span>
<span className="text-[10px] text-zinc-500 tracking-wide uppercase mt-1 block group-hover:text-zinc-400 transition-colors">Dream State</span>
</div>
</button>

<button className="glass-panel group relative flex flex-col justify-between p-5 h-44 rounded-3xl active:scale-[0.98] transition-all duration-300 overflow-hidden hover:bg-white/5" onclick="openPlayer('move')">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-10 h-10 rounded-full glass-button flex items-center justify-center group-hover:bg-white text-white group-hover:text-black transition-colors duration-300">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="activity"></i>
</div>
<div>
<span className="block text-lg font-normal tracking-tight">Move</span>
<span className="text-[10px] text-zinc-500 tracking-wide uppercase mt-1 block group-hover:text-zinc-400 transition-colors">Energy Boost</span>
</div>
</button>
</div>
</div>

<div className="view-hidden h-full flex flex-col justify-between p-6 pb-12 transition-all duration-500 z-20" id="player-view">

<div className="w-full flex justify-between items-center pt-20">
<button className="w-12 h-12 flex items-center justify-center rounded-full glass-button text-zinc-300 hover:text-white transition-colors" onclick="closePlayer()">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="chevron-down"></i>
</button>
<div className="h-1 w-12 bg-white/10 rounded-full backdrop-blur-md">
<div className="h-full w-0 bg-white rounded-full transition-all duration-[1000ms]" id="progress-bar"></div>
</div>
<button className="w-12 h-12 flex items-center justify-center rounded-full glass-button text-zinc-300 hover:text-white transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="more-horizontal"></i>
</button>
</div>

<div className="flex flex-col items-center justify-center space-y-2 text-center mt-8 mix-blend-difference">
<h1 className="text-6xl font-extralight tracking-tighter text-white capitalize blur-[0.5px]" id="player-title">Relax</h1>
<p className="text-xs text-zinc-400 font-semibold tracking-[0.3em] uppercase opacity-70" id="player-subtitle">AI Soundscape</p>
</div>
<div className="flex-grow"></div>

<div className="glass-panel rounded-[2.5rem] p-6 pb-8 mx-2 mb-4 backdrop-blur-xl">
<div className="flex flex-col items-center w-full space-y-8">

<button className="group relative flex items-center justify-center w-20 h-20 bg-white rounded-full text-black transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(255,255,255,0.15)]" id="play-btn">
<div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"></div>
<i className="w-8 h-8 fill-black stroke-none ml-1 relative z-10" data-lucide="play" id="play-icon"></i>
<i className="w-8 h-8 fill-black stroke-none hidden relative z-10" data-lucide="pause" id="pause-icon"></i>
</button>
<div className="flex justify-between w-full px-8">
<button className="text-zinc-500 hover:text-white transition-colors"><i className="w-5 h-5" data-lucide="volume-2"></i></button>
<span className="text-[10px] tracking-widest text-zinc-600 font-mono pt-1">LIVE</span>
<button className="text-zinc-500 hover:text-white transition-colors"><i className="w-5 h-5" data-lucide="sliders-horizontal"></i></button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
