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
void: '#030305',
gold: '#D4AF37',
neon: '#00f3ff',
magenta: '#ff00ff',
silver: '#C0C0C0'
},
fontFamily: {
orbitron: ['Orbitron', 'sans-serif'],
rajdhani: ['Rajdhani', 'sans-serif'],
},
animation: {
'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        // Init tsParticles
        document.addEventListener("DOMContentLoaded", async () => {
            await tsParticles.load("tsparticles", {
                fpsLimit: 60,
                particles: {
                    number: { value: 60, density: { enable: true, value_area: 800 } },
                    color: { value: ["#D4AF37", "#00f3ff", "#ffffff"] },
                    shape: { type: "circle" },
                    opacity: { value: 0.5, random: true, anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false } },
                    size: { value: 2, random: true, anim: { enable: true, speed: 1, size_min: 0.1, sync: false } },
                    move: { enable: true, speed: 0.4, direction: "none", random: true, straight: false, out_mode: "out", attract: { enable: false } }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: { enable: true, mode: "bubble" },
                        onclick: { enable: true, mode: "push" },
                        resize: true
                    },
                    modes: {
                        bubble: { distance: 200, size: 3, duration: 2, opacity: 0.8, speed: 3 },
                        push: { particles_nb: 4 }
                    }
                },
                retina_detect: true
            });
        });

        // Mouse Parallax & Cursor Logic
        const body = document.querySelector('body');
        const heroText = document.querySelector('.hero-text');
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');
        
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            
            // Set CSS vars for tilt
            const xPct = (x / window.innerWidth) * 100;
            const yPct = (y / window.innerHeight) * 100;
            
            // Smooth lerp for CSS vars could be done, but direct assignment is punchier for this effect
            document.documentElement.style.setProperty('--mx', `${xPct}%`);
            document.documentElement.style.setProperty('--my', `${yPct}%`);

            mouseX = x;
            mouseY = y;
        });

        // Custom Cursor Animation Loop
        function animateCursor() {
            const dt = 0.15;
            cursorX += (mouseX - cursorX) * dt;
            cursorY += (mouseY - cursorY) * dt;

            if(cursorDot && cursorOutline) {
                cursorDot.style.left = `${mouseX}px`;
                cursorDot.style.top = `${mouseY}px`;
                
                cursorOutline.style.left = `${cursorX}px`;
                cursorOutline.style.top = `${cursorY}px`;
            }
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Click Interaction / Audio
        let audioContext;
        const interactLayer = document.getElementById('interact-layer');

        async function initAudio() {
            // Remove interaction layer to allow text selection if desired, or keep for effect
            interactLayer.style.display = 'none'; 
            triggerEffect(mouseX, mouseY);

            if (!audioContext) {
                audioContext = new (window.AudioContext || window.webkitAudioContext)();
            }
            if (audioContext.state === 'suspended') {
                await audioContext.resume();
            }
            
            playImpactSound();
        }

        document.addEventListener('click', (e) => {
            triggerEffect(e.clientX, e.clientY);
            if(audioContext) playImpactSound();
        });

        function triggerEffect(x, y) {
            // Visual Shockwave
            const wave = document.createElement('div');
            wave.classList.add('shockwave');
            wave.style.left = (x - 50) + 'px'; // Center 100px div
            wave.style.top = (y - 50) + 'px';
            wave.style.width = '100px';
            wave.style.height = '100px';
            body.appendChild(wave);
            
            setTimeout(() => wave.remove(), 600);

            // Glitch Text Trigger
            const ftext = document.querySelector('.word-fuck');
            ftext.style.animation = 'none';
            ftext.offsetHeight; /* trigger reflow */
            ftext.style.animation = 'glitch-anim-1 0.2s 2 linear';
            
            setTimeout(() => {
                ftext.style.animation = 'breathe 6s ease-in-out infinite';
            }, 400);
        }

        function playImpactSound() {
            if (!audioContext) return;
            
            // Oscillator for low thud
            const osc = audioContext.createOscillator();
            const gain = audioContext.createGain();
            
            osc.type = 'sine';
            osc.frequency.setValueAtTime(150, audioContext.currentTime);
            osc.frequency.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            
            gain.gain.setValueAtTime(0.5, audioContext.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            
            osc.connect(gain);
            gain.connect(audioContext.destination);
            osc.start();
            osc.stop(audioContext.currentTime + 0.6);

            // Noise burst for crackle
            const bufferSize = audioContext.sampleRate * 0.1; // 0.1 sec
            const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                data[i] = Math.random() * 2 - 1;
            }
            
            const noise = audioContext.createBufferSource();
            noise.buffer = buffer;
            const noiseGain = audioContext.createGain();
            noiseGain.gain.setValueAtTime(0.2, audioContext.currentTime);
            noiseGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            
            // Filter highpass to make it crispy
            const filter = audioContext.createBiquadFilter();
            filter.type = 'highpass';
            filter.frequency.value = 1000;

            noise.connect(filter);
            filter.connect(noiseGain);
            noiseGain.connect(audioContext.destination);
            noise.start();
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
      

<div className="absolute inset-0 z-0 opacity-60" id="tsparticles"><canvas data-generated="true" height="902" style={{width: '100% !important', height: '100% !important', position: 'fixed !important', zIndex: '0 !important', top: '0px !important', left: '0px !important', pointerEvents: 'initial'}} width="1440"></canvas></div>
<div className="noise-overlay"></div>
<div className="scanlines"></div>
<div className="vignette absolute inset-0 w-full h-full"></div>

<div className="cursor-dot hidden md:block" style={{left: '0px', top: '0px'}}></div>
<div className="cursor-outline hidden md:block" style={{left: '0px', top: '0px'}}></div>

<main className="hero-text-container relative z-30 flex flex-col items-center justify-center w-full h-full p-4">
<div className="hero-text select-none group">

<div aria-label="FUCK" className="word-fuck tracking-tighter">
<span className="reveal-char inline-block" style={{animationDelay: '0.1s'}}>F</span><span className="reveal-char inline-block" style={{animationDelay: '0.2s'}}>U</span><span className="reveal-char inline-block" style={{animationDelay: '0.3s'}}>C</span><span className="reveal-char inline-block" style={{animationDelay: '0.4s'}}>K</span>
</div>

<div aria-label="fvndzs" className="word-fvndzs tracking-widest uppercase opacity-90">
<span className="reveal-char inline-block" style={{animationDelay: '0.8s'}}>f</span><span className="reveal-char inline-block" style={{animationDelay: '0.9s'}}>v</span><span className="reveal-char inline-block" style={{animationDelay: '1.0s'}}>n</span><span className="reveal-char inline-block" style={{animationDelay: '1.1s'}}>d</span><span className="reveal-char inline-block" style={{animationDelay: '1.2s'}}>z</span><span className="reveal-char inline-block" style={{animationDelay: '1.3s'}}>s</span>
</div>

<div className="absolute -right-4 -top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse text-neon">
<iconify-icon height="32" icon="solar:bolt-linear" width="32"></iconify-icon>
</div>
</div>
</main>

<div className="cursor-pointer z-50 absolute top-0 right-0 bottom-0 left-0" id="interact-layer" onclick="initAudio()"></div>


    </>
  );
}
