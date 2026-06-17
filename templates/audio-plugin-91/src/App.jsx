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



        // Setup Canvas
        const canvas = document.getElementById('waveCanvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let animationId;
        let isPlaying = true;
        
        // State
        let currentColor = '#818cf8'; // Indigo default
        let currentInstrumentType = 'violin';
        let particles = [];
        let time = 0;

        function resize() {
            const rect = canvas.parentElement.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
            width = canvas.width;
            height = canvas.height;
        }
        window.addEventListener('resize', resize);
        resize();

        // Particle Class for "Blurbs"
        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width * 0.2; // Start left
                this.y = height / 2 + (Math.random() - 0.5) * 50;
                this.vx = Math.random() * 4 + 2; // Speed right
                this.vy = (Math.random() - 0.5) * 2;
                this.size = Math.random() * 2 + 1;
                this.life = 1;
                this.color = currentColor;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.life -= 0.005;
                
                // Add waviness
                this.y += Math.sin(this.x * 0.05 + time) * 2;

                if (this.x > width || this.life <= 0) {
                    this.reset();
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color + Math.floor(this.life * 255).toString(16).padStart(2,'0'); // Add opacity
                ctx.fill();
                
                // Glow
                ctx.shadowBlur = 10;
                ctx.shadowColor = this.color;
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        // Initialize particles
        for(let i = 0; i < 60; i++) {
            particles.push(new Particle());
        }

        function drawWave(yOffset, amplitude, frequency, speed, color, thickness) {
            ctx.beginPath();
            ctx.lineWidth = thickness;
            ctx.strokeStyle = color;
            
            for (let x = 0; x < width; x++) {
                let y = height / 2 + yOffset;
                
                // Complex wave math
                const wave1 = Math.sin(x * frequency + time * speed);
                const wave2 = Math.cos(x * (frequency * 0.5) + time * (speed * 1.2));
                const noise = (Math.random() - 0.5) * (amplitude * 0.1); // Jitter
                
                // Morph shape based on x position (input -> output)
                const progress = x / width;
                const morphFactor = Math.min(1, Math.max(0, (progress - 0.3) * 2)); // 0 on left, 1 on right
                
                // Left side: smooth vocal input
                let yInput = wave1 * amplitude * (1 - morphFactor);
                
                // Right side: instrument output (changes based on type)
                let yOutput = 0;
                if (currentInstrumentType === 'violin') {
                    // Smooth, harmonic
                    yOutput = (wave1 + wave2 * 0.5) * amplitude * morphFactor;
                } else if (currentInstrumentType === 'sax') {
                    // More chaotic
                    yOutput = (Math.sin(x * frequency * 2 + time) * amplitude * 1.2) * morphFactor;
                } else if (currentInstrumentType === 'synth') {
                    // Square-ish
                    yOutput = (Math.sign(Math.sin(x * frequency + time)) * amplitude * 0.8) * morphFactor;
                } else {
                    yOutput = wave1 * amplitude * morphFactor;
                }

                y += yInput + yOutput + noise;
                
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
        }

        function animate() {
            if (!isPlaying) return;
            
            // Clear with trail effect
            ctx.fillStyle = 'rgba(9, 9, 11, 0.2)'; // Zinc-950 with opacity
            ctx.fillRect(0, 0, width, height);
            
            time += 0.1;

            // Draw Divider Visual
            const midX = width / 2;
            const gradient = ctx.createLinearGradient(midX - 100, 0, midX + 100, 0);
            gradient.addColorStop(0, 'rgba(255,255,255,0.05)');
            gradient.addColorStop(0.5, currentColor + '33'); // Transparent color
            gradient.addColorStop(1, 'rgba(255,255,255,0.05)');
            
            // Center Glow
            const glowSize = 100 + Math.sin(time * 0.5) * 20;
            const radialG = ctx.createRadialGradient(midX, height/2, 0, midX, height/2, glowSize);
            radialG.addColorStop(0, currentColor + '10');
            radialG.addColorStop(1, 'transparent');
            ctx.fillStyle = radialG;
            ctx.fillRect(0,0,width,height);

            // Draw Input Wave (Ghost)
            drawWave(0, 30, 0.01, 1, 'rgba(255,255,255,0.1)', 1);

            // Draw Main Morphing Wave
            drawWave(0, 50, 0.015, 1.5, currentColor, 2);
            
            // Draw Secondary Harmony Wave
            drawWave(0, 30, 0.03, 2, currentColor, 0.5);

            // Update and draw particles
            particles.forEach(p => {
                p.color = currentColor;
                
                // Move particles faster near center
                const distToCenter = Math.abs(p.x - width/2);
                if (distToCenter < 100) {
                    p.y += (Math.random() - 0.5) * 5;
                }
                
                p.update();
                p.draw();
            });

            // Draw Frequency Bars (Visualizer at bottom)
            const bars = 40;
            const barWidth = width / bars;
            for(let i=0; i<bars; i++) {
                const h = Math.abs(Math.sin(i * 0.2 + time)) * 30 * (Math.random() * 0.5 + 0.5);
                ctx.fillStyle = i > bars/2 ? currentColor + '22' : 'rgba(255,255,255,0.05)';
                ctx.fillRect(i * barWidth, height - h, barWidth - 2, h);
            }

            animationId = requestAnimationFrame(animate);
        }

        // Logic for controls
        function selectInstrument(btn, type, color) {
            // Update UI styles
            document.querySelectorAll('button').forEach(b => {
                b.classList.remove('active-instrument', 'bg-indigo-500/10', 'border-indigo-500/30');
                b.classList.add('border-transparent');
                // Reset icons
                const icon = b.querySelector('.iconify');
                if(icon) icon.classList.remove('text-indigo-400');
            });
            
            // Add active styles
            btn.classList.add('active-instrument', 'bg-indigo-500/10', 'border-indigo-500/30');
            btn.classList.remove('border-transparent');
            btn.querySelector('.iconify').classList.add('text-indigo-400');

            // Update State
            currentInstrumentType = type;
            currentColor = color;
            document.documentElement.style.setProperty('--glow-color', color);
            
            // Update Label
            const title = btn.querySelector('div > .text-xs').innerText;
            document.getElementById('activeInstrumentLabel').innerText = title;
            document.getElementById('activeInstrumentLabel').style.color = color; // Slight tint
        }

        // Knob Logic
        function adjustKnob(id) {
            const track = document.getElementById(`knob-${id}-track`);
            const tick = document.getElementById(`knob-${id}-tick`);
            
            // Simulate random change for demo
            const newVal = Math.random() * 276;
            track.style.strokeDashoffset = newVal;
            
            // Rotate tick roughly based on offset
            const rotation = ((276 - newVal) / 276) * 270 - 135; // Map to -135 to 135 deg
            tick.style.transform = `translateY(-16px) rotate(${rotation}deg)`;
        }

        function togglePlayback() {
            isPlaying = !isPlaying;
            const icon = document.querySelector('#playBtn .iconify');
            if (isPlaying) {
                icon.setAttribute('data-icon', 'lucide:pause');
                animate();
            } else {
                icon.setAttribute('data-icon', 'lucide:play');
            }
        }

        // Start animation
        animate();

        // Initial Knob setup
        document.documentElement.style.setProperty('--glow-color', '#818cf8');
        
    
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
      

<div className="relative w-full max-w-5xl bg-zinc-950 rounded-xl border border-zinc-800 shadow-2xl flex flex-col overflow-hidden m-4 backdrop-blur-3xl bg-opacity-80">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="absolute -top-[20%] left-[20%] w-[50%] h-[50%] bg-indigo-900/10 rounded-full blur-[120px]"></div>
<div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-rose-900/10 rounded-full blur-[100px]"></div>
</div>

<div className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-zinc-900/50 bg-zinc-950/50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center border border-zinc-800 shadow-inner">
<span className="iconify text-indigo-400" data-icon="lucide:waves" data-width="18"></span>
</div>
<div>
<h1 className="text-zinc-100 font-medium tracking-tight text-sm uppercase">VoxMorph</h1>
<span className="text-xs text-zinc-500 tracking-wide">Neural Audio Transfer</span>
</div>
</div>

<div className="flex items-center gap-4">
<button className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded text-xs transition-colors group">
<span className="text-zinc-500 group-hover:text-zinc-300">Preset:</span>
<span className="text-zinc-200">Cinematic Pad Vocal</span>
<span className="iconify text-zinc-500" data-icon="lucide:chevron-down" data-width="12"></span>
</button>
<div className="h-4 w-px bg-zinc-800"></div>
<div className="flex items-center gap-2">
<button className="p-1.5 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900 rounded transition-all">
<span className="iconify" data-icon="lucide:undo-2" data-width="14"></span>
</button>
<button className="p-1.5 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900 rounded transition-all">
<span className="iconify" data-icon="lucide:redo-2" data-width="14"></span>
</button>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-xs font-mono text-indigo-400">CPU 12%</span>
<button className="w-8 h-8 flex items-center justify-center text-zinc-500 hover:text-zinc-200 transition-colors">
<span className="iconify" data-icon="lucide:settings-2" data-width="16"></span>
</button>
</div>
</div>

<div className="relative z-10 flex flex-col md:flex-row h-[500px]">

<div className="w-full md:w-64 border-r border-zinc-900/50 p-6 flex flex-col gap-8 bg-zinc-950/30">

<div className="space-y-6">
<div className="flex justify-between items-center mb-2">
<h3 className="text-xs font-medium text-zinc-400 tracking-wider uppercase">Character</h3>
</div>

<div className="grid grid-cols-2 gap-y-6 gap-x-4">
<div className="flex flex-col items-center gap-2 group cursor-pointer" onclick="adjustKnob('timbre')">
<div className="relative w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 shadow-lg flex items-center justify-center group-hover:border-zinc-700 transition-colors">
<svg className="w-full h-full transform -rotate-90 pointer-events-none absolute" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="44" stroke="#27272a" strokeWidth="4"></circle>
<circle className="transition-all duration-300" cx="50" cy="50" fill="none" id="knob-timbre-track" r="44" stroke="#6366f1" stroke-dasharray="276" stroke-dashoffset="100" strokeWidth="4"></circle>
</svg>
<div className="w-1 h-3 bg-zinc-600 rounded-full transform -translate-y-4 origin-bottom rotate-45 transition-transform duration-300" id="knob-timbre-tick"></div>
</div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300">Timbre</span>
</div>
<div className="flex flex-col items-center gap-2 group cursor-pointer" onclick="adjustKnob('breath')">
<div className="relative w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 shadow-lg flex items-center justify-center group-hover:border-zinc-700 transition-colors">
<svg className="w-full h-full transform -rotate-90 pointer-events-none absolute" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="44" stroke="#27272a" strokeWidth="4"></circle>
<circle className="transition-all duration-300" cx="50" cy="50" fill="none" id="knob-breath-track" r="44" stroke="#ec4899" stroke-dasharray="276" stroke-dashoffset="200" strokeWidth="4"></circle>
</svg>
<div className="w-1 h-3 bg-zinc-600 rounded-full transform -translate-y-4 origin-bottom -rotate-45 transition-transform duration-300" id="knob-breath-tick"></div>
</div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300">Breath</span>
</div>
<div className="flex flex-col items-center gap-2 group cursor-pointer" onclick="adjustKnob('space')">
<div className="relative w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 shadow-lg flex items-center justify-center group-hover:border-zinc-700 transition-colors">
<svg className="w-full h-full transform -rotate-90 pointer-events-none absolute" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="44" stroke="#27272a" strokeWidth="4"></circle>
<circle className="transition-all duration-300" cx="50" cy="50" fill="none" id="knob-space-track" r="44" stroke="#10b981" stroke-dasharray="276" stroke-dashoffset="150" strokeWidth="4"></circle>
</svg>
<div className="w-1 h-3 bg-zinc-600 rounded-full transform -translate-y-4 origin-bottom rotate-0 transition-transform duration-300" id="knob-space-tick"></div>
</div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300">Space</span>
</div>
<div className="flex flex-col items-center gap-2 group cursor-pointer" onclick="adjustKnob('detail')">
<div className="relative w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 shadow-lg flex items-center justify-center group-hover:border-zinc-700 transition-colors">
<svg className="w-full h-full transform -rotate-90 pointer-events-none absolute" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="44" stroke="#27272a" strokeWidth="4"></circle>
<circle className="transition-all duration-300" cx="50" cy="50" fill="none" id="knob-detail-track" r="44" stroke="#f59e0b" stroke-dasharray="276" stroke-dashoffset="50" strokeWidth="4"></circle>
</svg>
<div className="w-1 h-3 bg-zinc-600 rounded-full transform -translate-y-4 origin-bottom rotate-[100deg] transition-transform duration-300" id="knob-detail-tick"></div>
</div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300">Detail</span>
</div>
</div>
</div>
<div className="h-px bg-zinc-800 w-full"></div>

<div className="space-y-4">
<div className="space-y-2">
<div className="flex justify-between text-xs">
<span className="text-zinc-500">Input</span>
<span className="text-zinc-300 font-mono">-6.0 dB</span>
</div>
<input className="w-full opacity-50 hover:opacity-100 transition-opacity" max="100" min="0" type="range" value="70"/>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs">
<span className="text-zinc-500">Output</span>
<span className="text-zinc-300 font-mono">-2.4 dB</span>
</div>
<input className="w-full opacity-50 hover:opacity-100 transition-opacity" max="100" min="0" type="range" value="85"/>
</div>
<div className="flex justify-between items-center pt-2">
<span className="text-xs text-zinc-500">Dry/Wet</span>
<div className="w-24 h-1.5 bg-zinc-800 rounded-full relative overflow-hidden">
<div className="absolute top-0 left-0 h-full w-[60%] bg-indigo-500 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col relative bg-zinc-950">

<div className="absolute top-4 right-4 z-20 flex gap-2">
<button className="w-8 h-8 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all" id="playBtn" onclick="togglePlayback()">
<span className="iconify" data-icon="lucide:play" data-width="14"></span>
</button>
<button className="w-8 h-8 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all">
<span className="iconify" data-icon="lucide:maximize-2" data-width="14"></span>
</button>
</div>

<canvas className="w-full h-full block cursor-crosshair" id="waveCanvas"></canvas>

<div className="absolute bottom-6 left-6 pointer-events-none">
<div className="flex items-center gap-2 mb-1">
<div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
<span className="text-xs text-indigo-400 font-mono uppercase tracking-widest">Processing</span>
</div>
<div className="text-3xl text-white font-medium tracking-tight" id="activeInstrumentLabel">
                        Violin Ensemble
                    </div>
</div>
</div>

<div className="w-full md:w-60 border-l border-zinc-900/50 bg-zinc-950/30 flex flex-col">
<div className="p-4 border-b border-zinc-900/50">
<input className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-xs text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition-colors" placeholder="Search instruments..." type="text"/>
</div>
<div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">

<button className="w-full text-left p-3 rounded-lg border border-indigo-500/30 bg-indigo-500/10 hover:bg-zinc-800/50 transition-all group relative overflow-hidden active-instrument" onclick="selectInstrument(this, 'violin', '#fbbf24')">
<div className="flex items-center gap-3 relative z-10">
<span className="iconify text-indigo-400 group-hover:text-indigo-300" data-icon="lucide:music-2" data-width="16"></span>
<div>
<div className="text-xs font-medium text-zinc-200">Violin Ensemble</div>
<div className="text-[10px] text-zinc-500">Orchestral</div>
</div>
</div>
</button>
<button className="w-full text-left p-3 rounded-lg border border-transparent hover:bg-zinc-900 transition-all group" onclick="selectInstrument(this, 'sax', '#ec4899')">
<div className="flex items-center gap-3">
<span className="iconify text-zinc-600 group-hover:text-pink-400 transition-colors" data-icon="lucide:wind" data-width="16"></span>
<div>
<div className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200">Alto Saxophone</div>
<div className="text-[10px] text-zinc-600">Jazz / Solo</div>
</div>
</div>
</button>
<button className="w-full text-left p-3 rounded-lg border border-transparent hover:bg-zinc-900 transition-all group" onclick="selectInstrument(this, 'synth', '#22d3ee')">
<div className="flex items-center gap-3">
<span className="iconify text-zinc-600 group-hover:text-cyan-400 transition-colors" data-icon="lucide:zap" data-width="16"></span>
<div>
<div className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200">Analog Lead</div>
<div className="text-[10px] text-zinc-600">Synthesizer</div>
</div>
</div>
</button>
<button className="w-full text-left p-3 rounded-lg border border-transparent hover:bg-zinc-900 transition-all group" onclick="selectInstrument(this, 'guitar', '#f87171')">
<div className="flex items-center gap-3">
<span className="iconify text-zinc-600 group-hover:text-red-400 transition-colors" data-icon="lucide:guitar" data-width="16"></span>
<div>
<div className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200">Overdrive Strat</div>
<div className="text-[10px] text-zinc-600">Electric Guitar</div>
</div>
</div>
</button>
<button className="w-full text-left p-3 rounded-lg border border-transparent hover:bg-zinc-900 transition-all group" onclick="selectInstrument(this, 'cello', '#a78bfa')">
<div className="flex items-center gap-3">
<span className="iconify text-zinc-600 group-hover:text-violet-400 transition-colors" data-icon="lucide:music" data-width="16"></span>
<div>
<div className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200">Solo Cello</div>
<div className="text-[10px] text-zinc-600">Chamber</div>
</div>
</div>
</button>
<button className="w-full text-left p-3 rounded-lg border border-transparent hover:bg-zinc-900 transition-all group" onclick="selectInstrument(this, 'flute', '#34d399')">
<div className="flex items-center gap-3">
<span className="iconify text-zinc-600 group-hover:text-emerald-400 transition-colors" data-icon="lucide:wind" data-width="16"></span>
<div>
<div className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200">Wooden Flute</div>
<div className="text-[10px] text-zinc-600">Ethnic</div>
</div>
</div>
</button>
</div>
</div>
</div>

<div className="bg-zinc-950 border-t border-zinc-900 px-4 py-2 flex items-center justify-between z-10">
<div className="flex items-center gap-4 text-[10px] text-zinc-500">
<span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> MIDI In</span>
<span>Latency: 4.2ms</span>
<span>44.1kHz</span>
</div>
<div className="text-[10px] text-zinc-600 font-mono">v2.1.0-beta</div>
</div>
</div>



    </>
  );
}
