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
fontFamily: {
sans: ['Outfit', 'sans-serif'],
},
colors: {
uv: '#22d3ee', // Cyan-400
bacteria: '#8b5cf6', // Violet-500
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- 1. Custom Cursor & Magnetic Interactions ---
        const cursor = document.getElementById('cursor');
        const cursorTrail = document.getElementById('cursorTrail');
        const magneticBtns = document.querySelectorAll('.magnetic-btn');
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Move actual cursor instantly
            cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%) scale(1)`;
            
            // Trail follows slightly delayed (handled by CSS transition, just update pos)
            document.getElementById('cursor-trail').style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
        });

        document.addEventListener('mousedown', () => cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%) scale(0.5)`);
        document.addEventListener('mouseup', () => cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%) scale(1)`);

        magneticBtns.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
                document.getElementById('cursor-trail').style.borderColor = 'rgba(255,255,255,0.8)';
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = `translate(0px, 0px)`;
                document.getElementById('cursor-trail').style.borderColor = 'rgba(255,255,255,0.2)';
            });
        });


        // --- 2. Canvas Particle System (Bacteria & Purified Air) ---
        const canvas = document.getElementById('particle-canvas');
        const ctx = canvas.getContext('2d');
        let particles = [];
        let canvasWidth, canvasHeight;
        
        // State variables driven by scroll
        let particleMode = 'idle'; // idle, contaminate, sanitise, clean
        let uvBeamY = -100;

        function resizeCanvas() {
            canvasWidth = window.innerWidth;
            canvasHeight = window.innerHeight;
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Particle {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * canvasWidth;
                this.y = Math.random() * canvasHeight;
                this.size = Math.random() * 1.5 + 0.5;
                this.vx = (Math.random() - 0.5) * 0.4;
                this.vy = (Math.random() - 0.5) * 0.4;
                this.life = 1;
                this.color = `rgba(139, 92, 246, ${Math.random() * 0.4 + 0.1})`; // Violet bacteria
                this.isDead = false;
            }
            update() {
                if (this.isDead) return;

                if (particleMode === 'contaminate') {
                    // Eratic movement, violet color
                    this.x += this.vx + (Math.random() - 0.5) * 0.5;
                    this.y += this.vy + (Math.random() - 0.5) * 0.5;
                    this.color = `rgba(139, 92, 246, ${this.life * 0.6})`;
                } else if (particleMode === 'sanitise') {
                    // React to UV beam
                    this.x += this.vx;
                    this.y += this.vy;
                    
                    // Convert screen beam Y to canvas coords. 
                    // Beam is relative to helmet, but we simulate it globally for effect
                    const globalBeamY = canvasHeight * 0.3 + (uvBeamY / 300) * (canvasHeight * 0.4); 

                    if (this.y < globalBeamY + 50 && this.y > globalBeamY - 50) {
                        // Get caught in beam
                        this.color = `rgba(34, 211, 238, ${this.life})`; // Turn cyan
                        this.size *= 0.95;
                        this.life -= 0.03;
                        this.vy -= 0.1; // Float up as they die
                    }
                    if (this.life <= 0) this.isDead = true;
                } else if (particleMode === 'clean') {
                    // Slowly drift away and fade
                    this.life -= 0.01;
                    this.x += this.vx;
                    this.y -= 0.5; // Drift up
                    if (this.life <= 0) this.isDead = true;
                }

                // Wrap around (only in contaminate mode)
                if (particleMode === 'contaminate') {
                    if (this.x < 0) this.x = canvasWidth;
                    if (this.x > canvasWidth) this.x = 0;
                    if (this.y < 0) this.y = canvasHeight;
                    if (this.y > canvasHeight) this.y = 0;
                }
            }
            draw() {
                if (this.isDead) return;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Init particles
        for (let i = 0; i < 200; i++) particles.push(new Particle());

        function animateCanvas() {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            
            // Draw a subtle grid if in clean mode
            if (particleMode === 'clean' || particleMode === 'breakdown') {
                ctx.strokeStyle = 'rgba(255,255,255,0.02)';
                ctx.lineWidth = 1;
                const gridSize = 50;
                // Just draw a few lines for subtle tech feel
                for(let i=0; i<canvasWidth; i+=gridSize*2) { ctx.beginPath(); ctx.moveTo(i,0); ctx.lineTo(i,canvasHeight); ctx.stroke(); }
                for(let i=0; i<canvasHeight; i+=gridSize*2) { ctx.beginPath(); ctx.moveTo(0,i); ctx.lineTo(canvasWidth,i); ctx.stroke(); }
            }

            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animateCanvas);
        }
        animateCanvas();


        // --- 3. Scrollytelling Engine ---
        
        // DOM Elements
        const mainText = document.getElementById('main-text');
        const subText = document.getElementById('sub-text');
        const ctaContainer = document.getElementById('cta-container');
        const scrollProgressEl = document.getElementById('scroll-progress');
        const scrollLabel = document.getElementById('scroll-label');
        
        // Helmet Parts
        const rig = document.getElementById('helmet-rig');
        const layerCore = document.getElementById('layer-core');
        const layerShell = document.getElementById('layer-shell');
        const layerVisor = document.getElementById('layer-visor');
        const layerAirflow = document.getElementById('layer-airflow');
        const uvScanner = document.getElementById('uv-scanner');
        const helmetGlow = document.getElementById('helmet-glow');
        const volumetricFlash = document.getElementById('volumetric-flash');
        const labels = document.querySelectorAll('.label-el');

        // Narrative Data
        const narrative = [
            { start: 0.0, end: 0.15, id: 'discovery', title: "WHAT YOU CAN'T SEE<br/>CAN HARM YOU", sub: "Microscopic threats thrive unseen inside your gear.", label: "Scanning" },
            { start: 0.15, end: 0.3, id: 'contamination', title: "MILLIONS OF BACTERIA", sub: "Sweat and heat create the perfect breeding ground.", label: "Contamination Detected" },
            { start: 0.3, end: 0.45, id: 'activation', title: "INITIATING PURIFICATION", sub: "Medical-grade UV-C technology activates.", label: "System Active" },
            { start: 0.45, end: 0.6, id: 'sanitisation', title: "99.9% ELIMINATED", sub: "Destroying DNA at a cellular level.", label: "Purifying" },
            { start: 0.6, end: 0.75, id: 'breakdown', title: "PRECISION ENGINEERED", sub: "Every component designed for maximum efficacy.", label: "Diagnostics" },
            { start: 0.75, end: 0.9, id: 'reassembly', title: "PURE. CLEAN. SAFE.", sub: "Ready for your next ride.", label: "Optimized" },
            { start: 0.9, end: 1.0, id: 'showcase', title: "RIDE CLEAN.<br/>RIDE HELMIO.", sub: "", label: "Complete" }
        ];

        let scrollY = 0;
        let lerpProgress = 0;
        let currentSectionId = '';

        // Initial Reveal
        setTimeout(() => {
            document.getElementById('main-nav').style.opacity = '1';
            document.getElementById('main-footer').style.opacity = '1';
        }, 500);

        function updateText(section) {
            if (currentSectionId !== section.id) {
                // Fade out
                mainText.style.opacity = '0';
                mainText.style.transform = 'translateY(-10px)';
                subText.style.opacity = '0';
                subText.style.transform = 'translateY(-10px)';
                
                setTimeout(() => {
                    mainText.innerHTML = section.title;
                    subText.innerHTML = section.sub;
                    scrollLabel.innerText = section.label;
                    
                    // Adjust styles based on section
                    if(section.id === 'showcase') {
                        ctaContainer.style.opacity = '1';
                        ctaContainer.style.pointerEvents = 'auto';
                        ctaContainer.style.transform = 'translateY(0)';
                    } else {
                        ctaContainer.style.opacity = '0';
                        ctaContainer.style.pointerEvents = 'none';
                        ctaContainer.style.transform = 'translateY(10px)';
                    }

                    // Fade in
                    mainText.style.opacity = '1';
                    mainText.style.transform = 'translateY(0)';
                    subText.style.opacity = '1';
                    subText.style.transform = 'translateY(0)';
                }, 300);
                
                currentSectionId = section.id;
            }
        }

        // Animation Loop
        function render() {
            // Calculate raw progress (0 to 1)
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const targetProgress = Math.max(0, Math.min(1, window.scrollY / maxScroll));
            
            // Lerp for smooth transitions
            lerpProgress += (targetProgress - lerpProgress) * 0.07;
            
            // Update UI Progress bar
            scrollProgressEl.style.height = `${lerpProgress * 100}%`;

            // Find current section
            let currentSection = narrative[0];
            for (let sec of narrative) {
                if (lerpProgress >= sec.start && lerpProgress <= sec.end) {
                    currentSection = sec;
                    break;
                }
            }
            updateText(currentSection);

            // Calculate local progress within current section (0 to 1)
            const localP = Math.max(0, Math.min(1, (lerpProgress - currentSection.start) / (currentSection.end - currentSection.start)));

            // --- Apply Visuals based on Section ---
            
            // Base state
            let scale = 1;
            let rotateX = (mouseY / window.innerHeight - 0.5) * 20; // Parallax
            let rotateY = (mouseX / window.innerWidth - 0.5) * 20;
            let zCore = 0, zVisor = 0, yAirflow = 0;
            let glowColor = 'rgba(34,211,238,0)'; // Transparent
            let labelsOpacity = 0;

            if (currentSection.id === 'discovery') {
                particleMode = 'idle';
                scale = 0.9 + (localP * 0.1);
                layerCore.style.opacity = 0;
            } 
            else if (currentSection.id === 'contamination') {
                particleMode = 'contaminate';
                scale = 1.0 + (localP * 0.4); // Zoom in
                glowColor = `rgba(139, 92, 246, ${localP * 0.2})`; // Subtle violet glow
                // Revive particles if they were dead
                if(localP < 0.1) particles.forEach(p => { if(p.isDead) p.reset(); p.isDead = false; });
            }
            else if (currentSection.id === 'activation') {
                particleMode = 'contaminate'; // Still moving erratically
                scale = 1.4 - (localP * 0.2); // Zoom back out slightly
                
                // Flash effect
                if (localP > 0.1 && localP < 0.3) {
                    volumetricFlash.style.opacity = '1';
                } else {
                    volumetricFlash.style.opacity = '0';
                }

                glowColor = `rgba(34, 211, 238, ${localP * 0.5})`; // Cyan glow increases
                uvScanner.style.opacity = '0'; // Hide scanner until next phase
            }
            else if (currentSection.id === 'sanitisation') {
                particleMode = 'sanitise';
                scale = 1.2;
                glowColor = `rgba(34, 211, 238, 0.4)`;
                
                // Move scanner
                uvScanner.style.opacity = '1';
                uvBeamY = localP * 350; // Move from top to bottom of helmet (approx height)
                uvScanner.style.transform = `translateY(${uvBeamY}px)`;
                
                // Visor glint sync
                document.getElementById('visor-glint').style.transform = `translateX(${localP * 200 - 100}%)`;
            }
            else if (currentSection.id === 'breakdown') {
                particleMode = 'clean';
                uvScanner.style.opacity = '0';
                scale = 1.0;
                glowColor = `rgba(34, 211, 238, 0.1)`;
                
                // Exploded view logic (ease out)
                const easeOut = 1 - Math.pow(1 - localP, 3);
                zCore = easeOut * -150;
                zVisor = easeOut * 100;
                yAirflow = easeOut * 60;
                
                layerCore.style.opacity = easeOut;
                labelsOpacity = easeOut;
            }
            else if (currentSection.id === 'reassembly') {
                particleMode = 'clean';
                scale = 1.0;
                glowColor = `rgba(34, 211, 238, 0.2)`;
                
                // Reverse exploded view
                const easeIn = 1 - localP;
                zCore = easeIn * -150;
                zVisor = easeIn * 100;
                yAirflow = easeIn * 60;
                
                layerCore.style.opacity = easeIn;
                labelsOpacity = easeIn;
            }
            else if (currentSection.id === 'showcase') {
                particleMode = 'clean';
                scale = 1.0;
                glowColor = `rgba(34, 211, 238, 0.3)`;
                
                // Cinematic slow rotation overriding mouse
                rotateY = localP * 360; // Spin around
                rotateX = 5; // Look slightly down
                
                layerCore.style.opacity = 0;
            }

            // Apply calculated transforms
            rig.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
            
            // Exploded view translations
            layerCore.style.transform = `translateZ(${zCore}px)`;
            layerVisor.style.transform = `translateZ(${zVisor}px)`;
            layerAirflow.style.transform = `translateZ(${zVisor/2}px) translateY(${yAirflow}px)`;
            
            // Update Glow
            helmetGlow.style.backgroundColor = glowColor;

            // Update Labels
            labels.forEach(lbl => {
                lbl.style.opacity = labelsOpacity > 0.5 ? 1 : 0;
                lbl.style.transform = `translateX(${labelsOpacity * 10}px)`;
            });

            requestAnimationFrame(render);
        }

        // Start engine
        render();

        // Ensure scroll is at top on load
        window.history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);

    
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
      

<div className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out" id="cursor"></div>
<div className="fixed top-0 left-0 w-12 h-12 border border-white/20 rounded-full pointer-events-none z-[99] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out" id="cursor-trail"></div>

<div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#111115_0%,#030303_100%)]"></div>

<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'url(&quot', data: 'image/svg+xml, %3Csvg viewBox=\'0 0 200 200\' xmlns=\'http: //www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E&quot'}}></div>

<canvas className="absolute inset-0 pointer-events-none z-0" id="particle-canvas"></canvas>

<div className="absolute inset-0 bg-uv/20 mix-blend-screen opacity-0 pointer-events-none z-10 transition-opacity duration-500" id="volumetric-flash"></div>

<div className="relative w-full h-full flex items-center justify-center z-20" id="scene-container" style={{perspective: '1200px', transformStyle: 'preserve-3d'}}>

<div className="relative w-64 h-72 md:w-96 md:h-[28rem] transition-transform duration-100 ease-out" id="helmet-rig" style={{transformStyle: 'preserve-3d'}}>

<div className="absolute inset-[-30%] bg-uv/0 rounded-full blur-[100px] transition-all duration-700 ease-in-out" id="helmet-glow"></div>

<div className="absolute inset-4 bg-[#0a0a0c] rounded-t-[40%] rounded-b-[30%] shadow-[inset_0_0_50px_rgba(0,0,0,1)] border border-white/5 flex items-center justify-center opacity-0 scale-95 transition-all duration-500 ease-out" id="layer-core" style={{transform: 'translateZ(0px)'}}>
<div className="w-24 h-24 rounded-full bg-uv/5 border border-uv/20 flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.1)] relative">
<div className="absolute inset-0 rounded-full animate-ping bg-uv/10 opacity-50 duration-3000"></div>
<iconify-icon className="text-4xl text-uv" icon="solar:cpu-linear"></iconify-icon>
</div>

<div className="absolute top-1/2 left-[120%] -translate-y-1/2 flex items-center gap-4 opacity-0 transition-opacity duration-500 w-48 label-el">
<div className="w-12 h-[1px] bg-uv/50"></div>
<span className="text-xs tracking-[0.2em] font-medium text-uv uppercase">UV-C Core Engine</span>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-950 to-black rounded-t-[45%] rounded-b-[35%] shadow-2xl border border-white/10 overflow-hidden transition-all duration-500 ease-out flex flex-col items-center" id="layer-shell" style={{transform: 'translateZ(0px)'}}>

<div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_100%)] bg-[length:4px_4px]"></div>

<div className="w-16 h-3 mt-6 bg-black rounded-full shadow-[inset_0_2px_5px_rgba(0,0,0,1)] border border-white/5"></div>

<div className="absolute top-[10%] right-[110%] flex items-center gap-4 opacity-0 transition-opacity duration-500 w-48 flex-row-reverse label-el">
<div className="w-12 h-[1px] bg-zinc-400/50"></div>
<span className="text-xs tracking-[0.2em] font-medium text-zinc-300 uppercase text-right">Aerospace Shell</span>
</div>
</div>

<div className="absolute bottom-[8%] left-[20%] right-[20%] h-10 bg-[#050505] rounded-full border border-white/5 flex items-center justify-center gap-3 shadow-[0_10px_20px_rgba(0,0,0,0.8)] transition-all duration-500 ease-out" id="layer-airflow" style={{transform: 'translateZ(0px)'}}>
<div className="w-10 h-1.5 bg-black rounded-full shadow-[inset_0_1px_3px_rgba(0,0,0,1)]"></div>
<div className="w-10 h-1.5 bg-black rounded-full shadow-[inset_0_1px_3px_rgba(0,0,0,1)]"></div>

<div className="absolute top-1/2 right-[120%] -translate-y-1/2 flex items-center gap-4 opacity-0 transition-opacity duration-500 w-48 flex-row-reverse label-el">
<div className="w-12 h-[1px] bg-zinc-400/50"></div>
<span className="text-xs tracking-[0.2em] font-medium text-zinc-300 uppercase text-right">Ionized Airflow</span>
</div>
</div>

<div className="absolute top-[15%] left-[8%] right-[8%] bottom-[38%] bg-gradient-to-b from-zinc-900 to-[#020202] rounded-t-[40%] rounded-b-[30%] border border-white/10 shadow-[inset_0_10px_40px_rgba(0,0,0,0.9),0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-xl transition-all duration-500 ease-out" id="layer-visor" style={{transform: 'translateZ(0px)'}}>

<div className="absolute inset-0 w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full rotate-12 transition-transform duration-[2000ms] ease-out" id="visor-glint"></div>

<div className="absolute top-[30%] left-[110%] flex items-center gap-4 opacity-0 transition-opacity duration-500 w-48 label-el">
<div className="w-12 h-[1px] bg-white/30"></div>
<span className="text-xs tracking-[0.2em] font-medium text-white uppercase">Reactive Visor</span>
</div>
</div>

<div className="absolute left-[-20%] right-[-20%] top-0 h-[2px] bg-uv shadow-[0_0_30px_5px_rgba(34,211,238,0.8),0_0_60px_10px_rgba(34,211,238,0.4)] opacity-0 z-50 rounded-full transition-opacity duration-300" id="uv-scanner" style={{transform: 'translateY(0)'}}></div>
</div>
</div>

<div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 md:p-12 z-40">

<header className="flex justify-between items-center w-full opacity-0 transition-opacity duration-1000" id="main-nav">
<div className="text-xl tracking-[0.3em] font-light text-white">HELMIO</div>
<button className="pointer-events-auto magnetic-btn px-6 py-2 rounded-full border border-white/20 text-[0.65rem] tracking-[0.2em] uppercase text-zinc-300 hover:text-white hover:bg-white/5 transition-colors backdrop-blur-md">
                    Pre-order
                </button>
</header>

<div className="flex-1 flex items-center justify-center md:justify-start w-full max-w-7xl mx-auto relative">
<div className="max-w-xl w-full relative z-50 text-center md:text-left">
<h1 className="text-3xl md:text-5xl lg:text-7xl tracking-tighter font-extralight leading-[1.1] text-white transition-all duration-700 ease-out transform translate-y-4 opacity-0" id="main-text">

</h1>
<p className="mt-6 text-zinc-400 text-sm md:text-base font-light tracking-wide transition-all duration-700 delay-100 ease-out transform translate-y-4 opacity-0 max-w-sm mx-auto md:mx-0" id="sub-text">

</p>

<div className="mt-12 opacity-0 pointer-events-none transition-all duration-700 transform translate-y-4 flex justify-center md:justify-start" id="cta-container">
<button className="pointer-events-auto magnetic-btn relative px-8 py-4 rounded-full bg-white text-black text-xs tracking-[0.2em] uppercase font-medium overflow-hidden group">
<span className="relative z-10">Secure Yours</span>
<div className="absolute inset-0 bg-uv transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
</button>
</div>
</div>
</div>

<div className="flex justify-between items-end w-full opacity-0 transition-opacity duration-1000" id="main-footer">
<div className="text-[0.65rem] tracking-[0.2em] text-zinc-500 uppercase font-light">
                    System Active
                </div>
<div className="flex flex-col items-end gap-3">
<span className="text-[0.6rem] tracking-[0.3em] text-zinc-500 uppercase font-light" id="scroll-label">Initiate Sequence</span>
<div className="w-[1px] h-16 bg-zinc-800 relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-0 bg-uv shadow-[0_0_10px_rgba(34,211,238,0.5)]" id="scroll-progress"></div>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
