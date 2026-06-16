import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // 1. SYSTEM CLOCK / REC TIME PULSATOR
        let seconds = 0;
        setInterval(() => {
            seconds++;
            const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
            const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
            const secs = String(seconds % 60).padStart(2, '0');
            document.getElementById('rec-time').innerText = `${hrs}:${mins}:${secs}`;
        }, 1000);

        // 2. GENERATIVE HERO WAVEFORM CANVAS
        const canvas = document.getElementById('hero-waveform');
        const ctx = canvas.getContext('2d');
        let width, height;
        let animationFrameId;

        function resizeCanvas() {
            width = canvas.width = canvas.parentElement.clientWidth;
            height = canvas.height = canvas.parentElement.clientHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        let time = 0;
        let scrollVelocity = 0;
        let lastScrollY = window.scrollY;

        // Monitor scroll velocity to expand the waveform dynamically
        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;
            scrollVelocity = Math.abs(currentScroll - lastScrollY);
            lastScrollY = currentScroll;
        });

        function drawWaveform() {
            ctx.clearRect(0, 0, width, height);
            
            // Decelerating velocity factor
            scrollVelocity *= 0.95; 

            // Waveform parameters
            const amplitude = 40 + (scrollVelocity * 4);
            const frequency = 0.003;

            // Draw Layer 1: Cool Plasma Cyan Wave
            ctx.strokeStyle = 'rgba(125, 249, 255, 0.2)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            for (let x = 0; x < width; x += 5) {
                const y = (height / 2) + Math.sin(x * frequency + time) * amplitude * Math.cos(x * 0.001);
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();

            // Draw Layer 2: Molten Amber Wave
            ctx.strokeStyle = 'rgba(255, 122, 26, 0.35)';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            for (let x = 0; x < width; x += 5) {
                const y = (height / 2.05) + Math.cos(x * (frequency * 1.5) - time) * (amplitude * 1.2) * Math.sin(x * 0.0008);
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();

            time += 0.015;
            animationFrameId = requestAnimationFrame(drawWaveform);
        }
        drawWaveform();

        // 3. INTERACTIVE WAVEFORM SANDBOX GENERATION
        let timbreValue = 0.42;
        let densityValue = 0.78;
        let vectorValue = 0.15;

        const amberWavePath = document.getElementById('amber-wave');
        const cyanWavePath = document.getElementById('cyan-wave');

        function updateMockWaveforms() {
            let amberD = "M0,100 ";
            let cyanD = "M0,100 ";

            for (let i = 0; i <= 800; i += 10) {
                // Compose multi-phase equations modified by sliders
                const angle = (i / 800) * Math.PI * 8;
                const wave1 = Math.sin(angle * timbreValue) * 40 * densityValue;
                const wave2 = Math.cos(angle * 2.5 * vectorValue) * 20;
                const finalY = 100 + wave1 + wave2;

                amberD += `L${i},${finalY} `;

                // Subharmonic dashline wave
                const finalY2 = 100 + Math.sin((angle + Math.PI) * (timbreValue * 1.5)) * 30 * (1 - vectorValue);
                cyanD += `L${i},${finalY2} `;
            }

            amberWavePath.setAttribute('d', amberD);
            cyanWavePath.setAttribute('d', cyanD);
        }

        // Initialize Waveform
        updateMockWaveforms();

        // Interactive Sliders Event Processing
        function setupSlider(sliderId, barId, thumbId, valId, min, max, initial, updateFn) {
            const bg = document.getElementById(sliderId);
            const bar = document.getElementById(barId);
            const thumb = document.getElementById(thumbId);
            const valSpan = document.getElementById(valId);

            function updateSliderPosition(clientX) {
                const rect = bg.getBoundingClientRect();
                let pct = (clientX - rect.left) / rect.width;
                pct = Math.max(0, Math.min(1, pct));
                
                bar.style.width = `${pct * 100}%`;
                thumb.style.left = `calc(${pct * 100}% - 6px)`;
                
                const finalVal = (pct * (max - min) + min).toFixed(2);
                valSpan.innerText = finalVal;
                
                updateFn(parseFloat(finalVal));
            }

            bg.addEventListener('mousedown', (e) => {
                updateSliderPosition(e.clientX);
                
                function onMouseMove(moveEvent) {
                    updateSliderPosition(moveEvent.clientX);
                }
                
                function onMouseUp() {
                    window.removeEventListener('mousemove', onMouseMove);
                    window.removeEventListener('mouseup', onMouseUp);
                }
                
                window.addEventListener('mousemove', onMouseMove);
                window.addEventListener('mouseup', onMouseUp);
            });
        }

        setupSlider('timbre-slider-bg', 'timbre-slider-bar', 'timbre-thumb', 'timbre-val', 0.1, 1.5, timbreValue, (v) => {
            timbreValue = v;
            document.getElementById('scrub-line').style.left = `${(v / 1.5) * 100}%`;
            document.getElementById('scrub-line').querySelector('span').innerText = `NODE_X_${v.toFixed(2)}`;
            updateMockWaveforms();
        });

        setupSlider('density-slider-bg', 'density-slider-bar', 'density-thumb', 'density-val', 0.2, 2.0, densityValue, (v) => {
            densityValue = v;
            updateMockWaveforms();
        });

        setupSlider('vector-slider-bg', 'vector-slider-bar', 'vector-thumb', 'vector-val', 0.05, 1.0, vectorValue, (v) => {
            vectorValue = v;
            updateMockWaveforms();
        });

        // Toggle Actions
        const binauralToggle = document.getElementById('binaural-toggle');
        const binauralDot = document.getElementById('binaural-dot');
        let binauralActive = false;
        binauralToggle.addEventListener('click', () => {
            binauralActive = !binauralActive;
            binauralDot.style.transform = binauralActive ? 'translateX(1rem)' : 'translateX(0)';
            binauralDot.style.backgroundColor = binauralActive ? '#7DF9FF' : '#FF7A1A';
        });

        const residueToggle = document.getElementById('residue-toggle');
        const residueDot = document.getElementById('residue-dot');
        let residueActive = true;
        residueToggle.addEventListener('click', () => {
            residueActive = !residueActive;
            residueDot.style.transform = residueActive ? 'translateX(1rem)' : 'translateX(0)';
            residueDot.style.backgroundColor = residueActive ? '#7DF9FF' : '#FF7A1A';
        });

        // 4. EMBEDDED REALTIME AUDIO DRONE (WEB AUDIO API EASTER EGG)
        let audioCtx;
        function playDrone() {
            try {
                // Initialize Web Audio API on click
                if (!audioCtx) {
                    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                }
                
                if (audioCtx.state === 'suspended') {
                    audioCtx.resume();
                }

                // Complex multi-node deep cinematic drone
                const osc1 = audioCtx.createOscillator();
                const osc2 = audioCtx.createOscillator();
                const filter = audioCtx.createBiquadFilter();
                const gainNode = audioCtx.createGain();

                osc1.type = 'sawtooth';
                osc2.type = 'triangle';

                // Pitch modulation (cinematic deep sub bass vector)
                osc1.frequency.setValueAtTime(55, audioCtx.currentTime); // Low A1
                osc2.frequency.setValueAtTime(55.4, audioCtx.currentTime); // Detuned relative

                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(90, audioCtx.currentTime);
                filter.Q.setValueAtTime(5, audioCtx.currentTime);

                // Attack Decay Sustain Release (ADSR) envelope for drone simulation
                gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
                gainNode.gain.linearRampToValueAtTime(0.3, audioCtx.currentTime + 1.2); // Envelope Attack
                gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 4.0); // Release

                osc1.connect(filter);
                osc2.connect(filter);
                filter.connect(gainNode);
                gainNode.connect(audioCtx.destination);

                osc1.start();
                osc2.start();

                osc1.stop(audioCtx.currentTime + 4.2);
                osc2.stop(audioCtx.currentTime + 4.2);

            } catch (err) {
                console.warn("Web Audio API not supported on this framework/browser configuration", err);
            }
        }
        
        // Also bind the interactive soundwave itself to test triggers
        document.getElementById('demo').querySelector('svg').addEventListener('click', playDrone);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 bg-[linear-gradient(to_right,#f5f1e803_1px,transparent_1px),linear-gradient(to_bottom,#f5f1e803_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0"></div>

<div className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-[#0A0A0B]/80 backdrop-blur-md border border-[#F5F1E8]/10 px-4 py-2 rounded-none text-xs tracking-widest uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF7A1A] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF7A1A]"></span>
</span>
<span className="text-[#F5F1E8]/60 font-mono-precise">SYS // REC <span className="text-[#F5F1E8]" id="rec-time">00:00:00</span></span>
</div>

<section className="relative min-h-screen w-full flex flex-col justify-between border-b border-[#F5F1E8]/10 overflow-hidden px-4 md:px-12 py-6 z-10">

<div className="absolute inset-x-0 top-1/4 bottom-1/4 flex flex-col justify-between pointer-events-none opacity-20">
<div className="w-full h-[1px] bg-[#F5F1E8]/30"></div>
<div className="w-full h-[1px] bg-[#F5F1E8]/30"></div>
<div className="w-full h-[1px] bg-[#F5F1E8]/30"></div>
<div className="w-full h-[1px] bg-[#F5F1E8]/30"></div>
</div>

<canvas className="absolute inset-0 w-full h-full pointer-events-none opacity-40 mix-blend-screen z-0" id="hero-waveform"></canvas>

<header className="relative w-full flex items-center justify-between z-20">
<div className="text-xl font-medium tracking-tighter uppercase font-serif-editorial">
                AURALIS
            </div>
<nav className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase text-[#F5F1E8]/60">
<a className="hover:text-[#FF7A1A] transition-colors duration-300" href="#features">Engine</a>
<a className="hover:text-[#FF7A1A] transition-colors duration-300" href="#demo">Library</a>
<a className="hover:text-[#FF7A1A] transition-colors duration-300" href="#pricing">Studio</a>
<a className="hover:text-[#FF7A1A] transition-colors duration-300" href="#pricing">Pricing</a>
</nav>
<div>
<a className="inline-flex items-center justify-center border border-[#F5F1E8]/20 px-5 py-2.5 text-xs tracking-widest uppercase transition-all duration-300 hover:border-[#FF7A1A] hover:text-[#FF7A1A]" href="#demo">
                    Console
                </a>
</div>
</header>

<main className="relative my-auto py-16 flex flex-col justify-center items-start z-10 max-w-5xl">

<div className="text-xs text-[#FF7A1A] uppercase tracking-[0.2em] mb-4 font-mono-precise">
                // 01 — NEURAL SYNTHESIS ENGINE
            </div>

<div className="reveal-text overflow-hidden">
<h1 className="text-5xl md:text-8xl lg:text-9xl font-light tracking-tighter font-serif-editorial text-[#F5F1E8] leading-[0.9]">
                    Sound,<br/>
<span className="italic text-[#F5F1E8]/90">before silence.</span>
</h1>
</div>

<div className="mt-8 flex flex-col md:flex-row md:items-center gap-8 md:gap-16 w-full">

<div>
<a className="group relative inline-flex items-center justify-center bg-[#FF7A1A] text-[#0A0A0B] font-semibold text-xs tracking-widest uppercase px-8 py-4 overflow-hidden transition-all duration-300 hover:bg-[#FF7A1A]/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]" href="#demo">
                        Open the Engine
                        <iconify-icon className="ml-2 text-base transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="max-w-md text-xs leading-relaxed text-[#F5F1E8]/60">
<span className="text-[#F5F1E8] font-mono-precise block mb-1">v2.0 — Neural Audio, Realtime.</span>
                    Synthesizing thoughts directly into spatialized cinematic audio vectors. Developed for composers, designers, and high-fidelity sound architects.
                </div>
</div>
</main>

<div className="relative w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-t border-[#F5F1E8]/10 pt-6 z-10 text-xs text-[#F5F1E8]/40 font-mono-precise">
<div className="flex items-center gap-6">
<div>LATENCY: <span className="text-[#7DF9FF]">1.4MS</span></div>
<div>TIMBRE SPACE: <span className="text-[#F5F1E8]">12-DIMENSIONAL</span></div>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#7DF9FF] animate-pulse"></span>
                CORE RECTIFIER LINKED
            </div>
</div>
</section>

<section className="border-b border-[#F5F1E8]/10 bg-[#0A0A0B]/50 py-10 px-4 md:px-12 z-10 relative">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<span className="text-[10px] tracking-[0.3em] uppercase text-[#F5F1E8]/30">// DEPLOYED BY GLOBAL HOUSES:</span>
<div className="flex flex-wrap items-center gap-8 md:gap-16">

<div className="flex items-center gap-2 opacity-30 hover:opacity-80 transition-opacity duration-300">
<span className="font-serif-editorial text-lg tracking-wider font-light">A24</span>
<span className="text-[9px] font-mono-precise tracking-widest">SOUND LABS</span>
</div>

<div className="flex items-center gap-2 opacity-30 hover:opacity-80 transition-opacity duration-300">
<span className="font-serif-editorial text-lg italic tracking-widest">MUBI</span>
<span className="text-[9px] font-mono-precise tracking-widest">REPLICANT</span>
</div>

<div className="flex items-center gap-2 opacity-30 hover:opacity-80 transition-opacity duration-300">
<span className="font-mono-precise text-xs font-semibold tracking-tighter">BOILER ROOM</span>
<span className="text-[9px] font-mono-precise tracking-widest text-[#FF7A1A]">L.04</span>
</div>
</div>
</div>
</section>

<section className="border-b border-[#F5F1E8]/10 px-4 md:px-12 py-24 z-10 relative" id="features">
<div className="max-w-7xl mx-auto">
<div className="text-xs text-[#FF7A1A] uppercase tracking-[0.2em] mb-12">
                // 02 — ARCHITECTURE OVERVIEW
            </div>
<div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#F5F1E8]/10">

<div className="py-8 lg:py-0 lg:px-8 first:pl-0 last:pr-0 flex flex-col justify-between min-h-[280px]">
<div>
<div className="text-xs text-[#F5F1E8]/40 mb-6 font-mono-precise">01 // WAVE-GENERATIVE</div>
<h3 className="text-xl font-light text-[#F5F1E8] font-serif-editorial mb-3 tracking-tight">Latent Timbre Synthesis</h3>
<p className="text-xs text-[#F5F1E8]/60 leading-relaxed font-mono-precise">
                            Bypass rigid oscillators. Construct multidimensional timbres seamlessly from neural network coordinate vectors instantly.
                        </p>
</div>

<div className="mt-8 pt-4 border-t border-[#F5F1E8]/5 flex items-center justify-between">
<svg className="w-24 h-6 text-[#FF7A1A]" fill="none" viewbox="0 0 100 30">
<path d="M0,15 Q15,0 30,15 T60,15 T90,5 T100,15" fill="none" stroke="currentColor" strokeWidth="1"></path>
<circle cx="60" cy="15" fill="#7DF9FF" r="2"></circle>
</svg>
<span className="text-[9px] text-[#F5F1E8]/30 font-mono-precise">SYS.OSC.012</span>
</div>
</div>

<div className="py-8 lg:py-0 lg:px-8 flex flex-col justify-between min-h-[280px]">
<div>
<div className="text-xs text-[#F5F1E8]/40 mb-6 font-mono-precise">02 // FIELD-SPATIAL</div>
<h3 className="text-xl font-light text-[#F5F1E8] font-serif-editorial mb-3 tracking-tight">Spatial Stems</h3>
<p className="text-xs text-[#F5F1E8]/60 leading-relaxed font-mono-precise">
                            Export standard spatial layouts instantly. Fully immersive atmospheres built with complex interactive vectors.
                        </p>
</div>

<div className="mt-8 pt-4 border-t border-[#F5F1E8]/5 flex items-center justify-between">
<svg className="w-24 h-6 text-[#7DF9FF]" fill="none" viewbox="0 0 100 30">
<circle cx="50" cy="15" r="12" stroke="currentColor" stroke-dasharray="2 2" strokeWidth="0.5"></circle>
<circle cx="50" cy="15" fill="#FF7A1A" r="4"></circle>
</svg>
<span className="text-[9px] text-[#F5F1E8]/30 font-mono-precise">FIELD.360.MATRIX</span>
</div>
</div>

<div className="py-8 lg:py-0 lg:px-8 flex flex-col justify-between min-h-[280px]">
<div>
<div className="text-xs text-[#F5F1E8]/40 mb-6 font-mono-precise">03 // COGNITIVE-LINK</div>
<h3 className="text-xl font-light text-[#F5F1E8] font-serif-editorial mb-3 tracking-tight">Composer Co-pilot</h3>
<p className="text-xs text-[#F5F1E8]/60 leading-relaxed font-mono-precise">
                            Prompt directly with mood constraints or score context. Receive organic variations built for custom scoring layers.
                        </p>
</div>

<div className="mt-8 pt-4 border-t border-[#F5F1E8]/5 flex items-center justify-between">
<svg className="w-24 h-6 text-[#F5F1E8]/40" fill="none" viewbox="0 0 100 30">
<line stroke="currentColor" strokeWidth="0.75" x1="10" x2="90" y1="5" y2="25"></line>
<line stroke="currentColor" stroke-dasharray="1 3" strokeWidth="0.75" x1="10" x2="90" y1="25" y2="5"></line>
</svg>
<span className="text-[9px] text-[#F5F1E8]/30 font-mono-precise">NEURO.LINK.V2</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-[#F5F1E8]/10 px-4 md:px-12 py-24 z-10 relative" id="demo">
<div className="max-w-7xl mx-auto">
<div className="text-xs text-[#FF7A1A] uppercase tracking-[0.2em] mb-4">
                // 03 — INTERACTIVE SANDBOX
            </div>
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
<h2 className="text-3xl md:text-5xl font-light text-[#F5F1E8] font-serif-editorial tracking-tight">
                    The Latent Console.
                </h2>
<p className="max-w-md text-xs text-[#F5F1E8]/60 leading-relaxed font-mono-precise">
                    Scrub through timbral dimensions using the visual matrix below. Witness sound generation mapping instantly to vectors.
                </p>
</div>

<div className="border border-[#F5F1E8]/10 bg-[#0C0C0E] p-4 md:p-8 relative overflow-hidden group cursor-crosshair">

<div className="flex items-center justify-between border-b border-[#F5F1E8]/10 pb-4 mb-6 text-[10px] text-[#F5F1E8]/40 uppercase tracking-wider">
<div className="flex items-center gap-4">
<span className="text-[#FF7A1A]">ENGINE STATUS: ACTIVE</span>
<span>GRID: 1/128 LATCHED</span>
</div>
<div className="hidden md:flex items-center gap-6">
<span>LATENCY: 1.22 MS</span>
<span>BUF_SIZE: 128 SPLS</span>
<span>CLOCK: EXT (MTC)</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

<div className="md:col-span-1 space-y-6">

<div>
<div className="flex justify-between text-[10px] text-[#F5F1E8]/50 uppercase mb-2">
<span>Timbre Shift</span>
<span className="text-[#FF7A1A]" id="timbre-val">0.42</span>
</div>

<div className="relative h-1 bg-[#F5F1E8]/10 w-full cursor-pointer group-hover:bg-[#F5F1E8]/20" id="timbre-slider-bg">
<div className="absolute top-0 left-0 h-full bg-[#FF7A1A]" id="timbre-slider-bar" style={{width: '42%'}}></div>
<div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#F5F1E8] border border-[#0A0A0B] rounded-none cursor-grab active:cursor-grabbing" id="timbre-thumb" style={{left: 'calc(42% - 6px)'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] text-[#F5F1E8]/50 uppercase mb-2">
<span>Atmospheric Density</span>
<span className="text-[#7DF9FF]" id="density-val">0.78</span>
</div>
<div className="relative h-1 bg-[#F5F1E8]/10 w-full cursor-pointer group-hover:bg-[#F5F1E8]/20" id="density-slider-bg">
<div className="absolute top-0 left-0 h-full bg-[#7DF9FF]" id="density-slider-bar" style={{width: '78%'}}></div>
<div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#F5F1E8] border border-[#0A0A0B] rounded-none cursor-grab active:cursor-grabbing" id="density-thumb" style={{left: 'calc(78% - 6px)'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] text-[#F5F1E8]/50 uppercase mb-2">
<span>Resonator Vector</span>
<span className="text-[#F5F1E8]" id="vector-val">0.15</span>
</div>
<div className="relative h-1 bg-[#F5F1E8]/10 w-full cursor-pointer group-hover:bg-[#F5F1E8]/20" id="vector-slider-bg">
<div className="absolute top-0 left-0 h-full bg-[#F5F1E8]/40" id="vector-slider-bar" style={{width: '15%'}}></div>
<div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#F5F1E8] border border-[#0A0A0B] rounded-none cursor-grab active:cursor-grabbing" id="vector-thumb" style={{left: 'calc(15% - 6px)'}}></div>
</div>
</div>

<div className="pt-4 border-t border-[#F5F1E8]/10 space-y-4">
<div className="flex items-center justify-between text-[10px]">
<span className="text-[#F5F1E8]/60 uppercase">NEURAL BINAURAL DEPLOYMENT</span>
<button className="relative inline-flex h-4 w-8 shrink-0 cursor-pointer rounded-none border border-[#F5F1E8]/20 bg-[#0A0A0B] transition-colors duration-200 ease-in-out" id="binaural-toggle">
<span className="pointer-events-none inline-block h-3 w-3 transform bg-[#FF7A1A] transition duration-200 ease-in-out translate-x-0" id="binaural-dot"></span>
</button>
</div>
<div className="flex items-center justify-between text-[10px]">
<span className="text-[#F5F1E8]/60 uppercase">SPECTRAL DE-RESIDUE</span>
<button className="relative inline-flex h-4 w-8 shrink-0 cursor-pointer rounded-none border border-[#F5F1E8]/20 bg-[#0A0A0B] transition-colors duration-200 ease-in-out" id="residue-toggle">
<span className="pointer-events-none inline-block h-3 w-3 transform bg-[#7DF9FF] transition duration-200 ease-in-out translate-x-4" id="residue-dot"></span>
</button>
</div>
</div>
</div>

<div className="md:col-span-3 border border-[#F5F1E8]/5 bg-[#0A0A0B] p-4 relative flex flex-col justify-between min-h-[300px]">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#f5f1e802_1px,transparent_1px),linear-gradient(to_bottom,#f5f1e802_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none"></div>
<div className="relative z-10 flex items-center justify-between text-[9px] text-[#F5F1E8]/40">
<span>REPRESENTATIONAL MATRIX SPECTRAL OUTPUT</span>
<span className="text-[#7DF9FF] animate-pulse">● LIVE NODE LINKED</span>
</div>

<div className="relative flex-1 w-full my-4 flex items-center justify-center">

<svg className="w-full h-48 opacity-90" preserveaspectratio="none" viewbox="0 0 800 200">

<path className="transition-all duration-300" d="M0,100" fill="none" id="amber-wave" stroke="#FF7A1A" strokeWidth="1.5"></path>

<path className="transition-all duration-300" d="M0,100" fill="none" id="cyan-wave" stroke="#7DF9FF" stroke-dasharray="3 3" strokeWidth="1"></path>
</svg>

<div className="absolute top-0 bottom-0 w-[1px] bg-[#FF7A1A]/40 left-[42%] pointer-events-none" id="scrub-line">
<span className="absolute top-0 -translate-x-1/2 bg-[#FF7A1A] text-[#0A0A0B] text-[8px] px-1 font-mono-precise">NODE_X_0.42</span>
</div>
</div>

<div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#F5F1E8]/5 pt-4">
<div className="flex items-center gap-2">
<span className="text-[9px] text-[#F5F1E8]/40 uppercase">CONSOLE HOTKEYS:</span>
<div className="flex items-center gap-1.5">
<kbd className="px-1.5 py-0.5 text-[8px] font-mono-precise bg-[#F5F1E8]/5 border border-[#F5F1E8]/20 text-[#F5F1E8]/80">SPACE</kbd>
<span className="text-[8px] text-[#F5F1E8]/40">AUDITION</span>
</div>
<div className="flex items-center gap-1.5">
<kbd className="px-1.5 py-0.5 text-[8px] font-mono-precise bg-[#F5F1E8]/5 border border-[#F5F1E8]/20 text-[#F5F1E8]/80">⌘ ⌥ S</kbd>
<span className="text-[8px] text-[#F5F1E8]/40">BOUNCE MATRIX</span>
</div>
</div>
<div className="text-[9px] text-[#FF7A1A]/80 tracking-widest uppercase">
                                TAP SOUNDWAVE TO AUDITION ENGINE DRONE
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-[#F5F1E8]/10 bg-[#0C0C0E] px-4 md:px-12 py-32 z-10 relative overflow-hidden">

<div className="absolute -right-16 -bottom-16 text-[24rem] font-serif-editorial text-[#F5F1E8]/5 pointer-events-none leading-none select-none">
            Ω
        </div>
<div className="max-w-5xl mx-auto flex flex-col items-start">
<div className="text-xs text-[#FF7A1A] uppercase tracking-[0.2em] mb-12">
                // 04 — THE PHILOSOPHY
            </div>
<blockquote className="text-4xl md:text-7xl font-serif-editorial text-[#F5F1E8]/95 leading-[1.05] italic tracking-tight mb-8">
                “We don't render audio. We remember it.”
            </blockquote>
<cite className="not-italic text-xs tracking-widest text-[#F5F1E8]/40 uppercase font-mono-precise">
                — FOUNDER // AURALIS COGNITIVE SYSTEMS LABS
            </cite>
</div>
</section>

<section className="border-b border-[#F5F1E8]/10 px-4 md:px-12 py-24 z-10 relative" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-xs text-[#FF7A1A] uppercase tracking-[0.2em] mb-4">
                // 05 — ALLOCATIONS
            </div>
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
<h2 className="text-3xl md:text-5xl font-light text-[#F5F1E8] font-serif-editorial tracking-tight">
                    Architectural Licensing.
                </h2>
<p className="max-w-md text-xs text-[#F5F1E8]/60 leading-relaxed font-mono-precise">
                    No tiered bloat. Straightforward options crafted specifically for individual production systems or world-class post-production houses.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#F5F1E8]/15 border border-[#F5F1E8]/15">

<div className="p-8 md:p-12 flex flex-col justify-between bg-[#0A0A0B] relative overflow-hidden">

<div className="absolute top-0 left-0 w-2 h-2 border-b border-r border-[#F5F1E8]/30"></div>
<div className="absolute top-0 right-0 w-2 h-2 border-b border-l border-[#F5F1E8]/30"></div>
<div className="absolute bottom-0 left-0 w-2 h-2 border-t border-r border-[#F5F1E8]/30"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-t border-l border-[#F5F1E8]/30"></div>
<div>
<div className="flex items-center justify-between mb-8">
<span className="text-xs text-[#F5F1E8]/40 uppercase tracking-widest font-mono-precise">TIER 01 / INDIVIDUAL</span>
<span className="text-[9px] border border-[#F5F1E8]/20 px-2 py-0.5 text-[#F5F1E8]/60 uppercase tracking-widest font-mono-precise">SINGLE USER</span>
</div>
<h3 className="text-3xl font-light font-serif-editorial text-[#F5F1E8] mb-4">Auralis Studio</h3>
<p className="text-xs text-[#F5F1E8]/50 mb-12 max-w-sm font-mono-precise leading-relaxed">
                            For freelance composers, sound designers, and independent studios seeking to completely overhaul their custom asset design workflow.
                        </p>

<div className="text-4xl font-light font-serif-editorial text-[#F5F1E8] mb-12">
                            $490 <span className="text-xs text-[#F5F1E8]/40 font-mono-precise uppercase">/ ONCE-OFF INITIAL DEPLOYMENT</span>
</div>

<ul className="space-y-4 border-t border-[#F5F1E8]/10 pt-8 mb-12 text-[11px] font-mono-precise text-[#F5F1E8]/70">
<li className="flex items-center justify-between">
<span>TIMBRES SYNTHESIZED PER SESS.</span>
<span className="text-[#F5F1E8]">UNLIMITED</span>
</li>
<li className="flex items-center justify-between">
<span>COGNITIVE CO-PILOT CHANNELS</span>
<span className="text-[#F5F1E8]">2 ACTIVE</span>
</li>
<li className="flex items-center justify-between">
<span>MAX RESOLUTION AUDIO EXPORT</span>
<span className="text-[#F5F1E8]">96KHZ / 32-BIT FLOAT</span>
</li>
<li className="flex items-center justify-between">
<span>VIRTUAL MONITORS &amp; SPATIAL MATRIX</span>
<span className="text-[#F5F1E8]">STEREO / BINAURAL</span>
</li>
</ul>
</div>
<a className="w-full flex items-center justify-center border border-[#F5F1E8]/20 py-4 text-xs tracking-widest uppercase text-[#F5F1E8] transition-all duration-300 hover:border-[#FF7A1A] hover:bg-[#FF7A1A]/10" href="#demo">
                        License Studio System
                    </a>
</div>

<div className="p-8 md:p-12 flex flex-col justify-between bg-[#0C0C0E] relative overflow-hidden">
<div className="absolute top-0 left-0 w-2 h-2 border-b border-r border-[#F5F1E8]/30"></div>
<div className="absolute top-0 right-0 w-2 h-2 border-b border-l border-[#F5F1E8]/30"></div>
<div className="absolute bottom-0 left-0 w-2 h-2 border-t border-r border-[#F5F1E8]/30"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-t border-l border-[#F5F1E8]/30"></div>
<div>
<div className="flex items-center justify-between mb-8">
<span className="text-xs text-[#FF7A1A] uppercase tracking-widest font-mono-precise">TIER 02 / ENTERPRISE SYSTEM</span>
<span className="text-[9px] border border-[#FF7A1A]/30 bg-[#FF7A1A]/5 px-2 py-0.5 text-[#FF7A1A] uppercase tracking-widest font-mono-precise">MULTI-STATION</span>
</div>
<h3 className="text-3xl font-light font-serif-editorial text-[#F5F1E8] mb-4">Auralis Score</h3>
<p className="text-xs text-[#F5F1E8]/50 mb-12 max-w-sm font-mono-precise leading-relaxed">
                            For international theatrical scoring houses, game developers, and film design agencies that need unified vector generation pipelines.
                        </p>

<div className="text-4xl font-light font-serif-editorial text-[#F5F1E8] mb-12">
                            $2,450 <span className="text-xs text-[#F5F1E8]/40 font-mono-precise uppercase">/ ANNUALLY DEPLOYED</span>
</div>

<ul className="space-y-4 border-t border-[#F5F1E8]/10 pt-8 mb-12 text-[11px] font-mono-precise text-[#F5F1E8]/70">
<li className="flex items-center justify-between">
<span>TIMBRES SYNTHESIZED PER SESS.</span>
<span className="text-[#FF7A1A]">COGNITIVE INFINITY</span>
</li>
<li className="flex items-center justify-between">
<span>COGNITIVE CO-PILOT CHANNELS</span>
<span className="text-[#F5F1E8]">UNLIMITED SIMULTANEOUS</span>
</li>
<li className="flex items-center justify-between">
<span>MAX RESOLUTION AUDIO EXPORT</span>
<span className="text-[#F5F1E8]">384KHZ / DXD FLOATING</span>
</li>
<li className="flex items-center justify-between">
<span>VIRTUAL MONITORS &amp; SPATIAL MATRIX</span>
<span className="text-[#7DF9FF]">ATMOS / 7.1.4 / VECTORIAL</span>
</li>
</ul>
</div>
<a className="w-full flex items-center justify-center bg-[#FF7A1A] text-[#0A0A0B] font-semibold py-4 text-xs tracking-widest uppercase transition-all duration-300 hover:bg-[#FF7A1A]/90" href="#demo">
                        Acquire System Score License
                    </a>
</div>
</div>
</div>
</section>

<footer className="relative bg-[#050506] border-t border-[#F5F1E8]/10 py-16 px-4 md:px-12 overflow-hidden">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 relative z-10">

<div className="space-y-6 max-w-xs">
<span className="text-lg font-medium tracking-tight text-[#F5F1E8] uppercase font-serif-editorial">AURALIS.</span>
<p className="text-xs text-[#F5F1E8]/40 leading-relaxed font-mono-precise">
                    Designing the future of temporal consciousness synthesis. Powered by high-fidelity hardware nodes.
                </p>
<div className="text-[10px] text-[#F5F1E8]/30 font-mono-precise">
                    ©2026 Auralis Inc. All rights reserved. Registered vectors proprietary.
                </div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-[11px] font-mono-precise text-[#F5F1E8]/50">
<div className="space-y-3">
<span className="text-[#F5F1E8]/80 block font-medium uppercase tracking-wider">// SYSTEM MAP</span>
<a className="block hover:text-[#FF7A1A] transition-colors duration-200" href="#features">The Neural Engine</a>
<a className="block hover:text-[#FF7A1A] transition-colors duration-200" href="#demo">Console Sandbox</a>
<a className="block hover:text-[#FF7A1A] transition-colors duration-200" href="#pricing">Allocations Grid</a>
</div>
<div className="space-y-3">
<span className="text-[#F5F1E8]/80 block font-medium uppercase tracking-wider">// COMPATIBILITY</span>
<span className="block text-[#F5F1E8]/30">VST3 / CLAP / AAX</span>
<span className="block text-[#F5F1E8]/30">APPLE SILICON NATIVE</span>
<span className="block text-[#F5F1E8]/30">ASIO SYSTEM READY</span>
</div>

<div className="col-span-2 md:col-span-1 border border-[#F5F1E8]/15 p-4 flex flex-col justify-between min-h-[100px] bg-[#0A0A0B]">
<span className="text-[9px] text-[#FF7A1A] tracking-wider uppercase font-mono-precise block">EASTER EGG MODULE</span>
<button className="flex items-center gap-2 group text-left cursor-pointer mt-4" onclick="playDrone()">
<span className="flex items-center justify-center w-8 h-8 rounded-none border border-[#FF7A1A]/30 group-hover:bg-[#FF7A1A] group-hover:text-[#0A0A0B] transition-all duration-300">
<iconify-icon className="text-xs" icon="solar:play-bold"></iconify-icon>
</span>
<div>
<span className="block text-[10px] text-[#F5F1E8] tracking-widest uppercase">AUDITION NOISE</span>
<span className="block text-[8px] text-[#F5F1E8]/40">Trigger 4s Ambient Drone</span>
</div>
</button>
</div>
</div>
</div>

<div className="absolute bottom-0 inset-x-0 h-1 bg-[#FF7A1A]"></div>
</footer>



    </>
  );
}
