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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        // --- WARP FIELD CANVAS ---
        const canvas = document.getElementById('universe-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        const particleCount = 400; 

        function resize() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        }
        window.addEventListener('resize', resize);
        resize();

        class Particle {
            constructor() { this.reset(); }
            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.z = Math.random() * 2; 
                this.size = Math.random() * 1.5;
                this.vx = (Math.random() - 0.5) * 0.2;
                this.vy = (Math.random() - 0.5) * 0.2;
            }
            update() {
                this.x += this.vx; this.y += this.vy;
                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;
            }
            draw() {
                const opacity = (this.z / 2) * 0.6; 
                ctx.fillStyle = `rgba(200, 200, 200, ${opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * this.z, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        for (let i = 0; i < particleCount; i++) particles.push(new Particle());
        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => { p.update(); p.draw(); });
            requestAnimationFrame(animateCanvas);
        }
        animateCanvas();

        // --- SPOTLIGHT MOUSE TRACKING ---
        document.addEventListener('mousemove', (e) => {
            document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
            document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
        });

        // --- FULL 3D CONTROL LOGIC (ZOOM & ROTATE) ---
        const sceneWrapper = document.getElementById('scene-wrapper');
        const platform = document.getElementById('hero-platform');
        
        let isDragging = false;
        let previousMouseX = 0;
        let previousMouseY = 0;
        let rotationX = 60; // Initial Tilt
        let rotationZ = -15; // Initial Rotation
        let scale = 1.6; // Initial Scale

        // Mouse Down
        sceneWrapper.addEventListener('mousedown', (e) => {
            isDragging = true;
            previousMouseX = e.clientX;
            previousMouseY = e.clientY;
            sceneWrapper.style.cursor = 'grabbing';
        });

        // Mouse Up / Leave
        window.addEventListener('mouseup', () => {
            isDragging = false;
            sceneWrapper.style.cursor = 'grab';
        });

        // Mouse Move (Rotate)
        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            const deltaX = e.clientX - previousMouseX;
            const deltaY = e.clientY - previousMouseY;
            
            rotationZ += deltaX * 0.5; // Rotate around Z axis based on X movement
            rotationX -= deltaY * 0.5; // Tilt X axis based on Y movement
            
            // Clamp X rotation to prevent flipping upside down completely
            if(rotationX > 85) rotationX = 85;
            if(rotationX < 0) rotationX = 0;

            updateTransform();
            
            previousMouseX = e.clientX;
            previousMouseY = e.clientY;
        });

        // Scroll (Zoom)
        sceneWrapper.addEventListener('wheel', (e) => {
            e.preventDefault();
            const zoomSpeed = 0.001;
            scale += e.deltaY * -zoomSpeed;
            // Clamp Zoom limits
            if(scale < 0.5) scale = 0.5;
            if(scale > 3.0) scale = 3.0;
            
            updateTransform();
        }, { passive: false });

        function updateTransform() {
            if(platform) {
                platform.style.transform = `rotateX(${rotationX}deg) rotateZ(${rotationZ}deg) scale(${scale})`;
            }
        }

        // --- LCD VIZ ---
        const vizCanvas = document.getElementById('viz-canvas-1');
        if(vizCanvas) {
            const vCtx = vizCanvas.getContext('2d');
            let vW = vizCanvas.parentElement.clientWidth;
            let vH = 96; 
            vizCanvas.width = vW; vizCanvas.height = vH;
            let dataPoints = new Array(50).fill(0);
            function drawViz() {
                dataPoints.shift();
                dataPoints.push(Math.random() * 50 + 20); 
                vCtx.clearRect(0,0,vW,vH);
                vCtx.beginPath();
                vCtx.moveTo(0, vH);
                for(let i=0; i<dataPoints.length; i++) {
                    const x = (i / (dataPoints.length -1)) * vW;
                    const y = vH - dataPoints[i];
                    vCtx.lineTo(x, y);
                }
                vCtx.strokeStyle = '#ef4444';
                vCtx.lineWidth = 2;
                vCtx.stroke();
                requestAnimationFrame(drawViz);
            }
            drawViz();
        }

        // --- SCROLL PROGRESS ---
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById("scroll-line").style.width = scrolled + "%";
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
      

<canvas id="universe-canvas"></canvas>
<div className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent w-0 z-[60] shadow-[0_0_15px_rgba(239,68,68,0.8)] transition-all duration-100 ease-out" id="scroll-line"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl supports-[backdrop-filter]:bg-black/40">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="relative w-5 h-5 flex items-center justify-center">
<span className="absolute inset-0 border border-red-500 rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-500"></span>
<span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
</div>
<span className="text-xs tracking-tighter font-medium text-white group-hover:text-red-500 transition-colors">MAXDESIGN <span className="text-neutral-600 group-hover:text-red-500/50">/// IO</span></span>
</div>
<div className="hidden md:flex gap-8 text-[11px] font-medium tracking-wide uppercase text-neutral-500">
<a className="hover:text-white transition-colors hover:scale-105 transform" href="#home">Origins</a>
<a className="hover:text-white transition-colors hover:scale-105 transform" href="#how-it-works">System</a>
<a className="hover:text-white transition-colors hover:scale-105 transform text-red-500/80" href="#power">Power</a>
<a className="hover:text-white transition-colors hover:scale-105 transform" href="#demo">Terminal</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 px-3 py-1.5 text-[10px] font-mono border border-white/10 rounded bg-white/5 hover:bg-red-500 hover:border-red-500 hover:text-black transition-all group shadow-lg hover:shadow-red-500/50" href="#contact">
<span>INITIALIZE</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="12"></span>
</a>
<button className="md:hidden text-white">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
</div>
</div>
</nav>
<main className="relative z-10">

<section className="relative min-h-screen flex flex-col items-center justify-center pt-32 overflow-hidden" id="home">
<div className="relative z-20 text-center flex flex-col items-center mb-4 pointer-events-none">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-950/10 backdrop-blur-md text-red-500 text-[10px] font-mono tracking-widest mb-8 animate-[fadeIn_1s_ease-out]">
<span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping"></span>
                    SYSTEM ONLINE
                </div>
<h1 className="text-6xl md:text-8xl font-thin tracking-tighter text-white mb-6 leading-[0.9] mix-blend-lighten title-pulse">
                    Infinite <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-white via-red-200 to-red-600 glow-text font-normal">IO</span>
</h1>

<div className="flex items-center gap-2 text-[9px] text-neutral-500 uppercase tracking-widest bg-black/40 px-3 py-1 rounded-full border border-white/5 backdrop-blur-sm pointer-events-auto">
<span className="iconify" data-icon="lucide:mouse" data-width="12"></span>
<span>Drag to Rotate • Scroll to Zoom</span>
</div>
</div>

<div className="scene-container w-full flex items-center justify-center relative mt-10" id="scene-wrapper" title="Click &amp; Drag to Rotate">
<div className="cyber-platform relative w-[800px] h-[800px] flex items-center justify-center select-none" id="hero-platform">

<div className="absolute inset-0 grid-floor-perspective rounded-full border border-red-500/10"></div>

<div className="scanner-beam"></div>

<div className="absolute top-[10%] right-[10%] w-48 p-4 bg-black/90 backdrop-blur-xl border border-red-900/60 rounded-sm shadow-[0_0_40px_rgba(239,68,68,0.1)] translate-z-[100px] animate-[float-y_6s_ease-in-out_infinite] hover:border-red-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] transition-all duration-300">
<div className="h-0.5 w-full bg-neutral-800 mb-2 overflow-hidden"><div className="h-full bg-red-500 w-[80%] animate-[width_2s_infinite]"></div></div>
<div className="text-[10px] font-mono text-red-500">/// CONTEXT_INJECTION</div>
<div className="text-[9px] font-mono text-neutral-500 mt-1">Uplinking to Neural Net...</div>
</div>
<div className="absolute bottom-[20%] left-[5%] w-56 p-4 bg-black/90 backdrop-blur-xl border border-white/10 rounded-sm shadow-[0_0_40px_rgba(0,0,0,1)] translate-z-[120px] animate-[float-y_8s_ease-in-out_infinite_1s] hover:border-red-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] transition-all duration-300">
<div className="flex justify-between text-[10px] font-mono text-red-500 mb-2">
<span>VECTOR_DB_NODE</span>
<span>ACTIVE</span>
</div>
<div className="text-[9px] text-neutral-400 font-mono tracking-widest">0x4F92...A1 :: INDEXED</div>
</div>

<div className="relative preserve-3d">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full geo-ring animate-[orbit_30s_linear_infinite] border-dashed border-white/5"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full geo-ring animate-[orbit_20s_linear_infinite_reverse] border-red-500/20"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-gradient-to-t from-red-500/10 to-transparent rounded-full blur-xl animate-pulse"></div>

<div className="relative w-40 h-40 transform-style-3d animate-[float-y_4s_ease-in-out_infinite]">
<div className="absolute inset-0 bg-red-900/20 border border-red-500/40 backdrop-blur-sm rotate-45 shadow-[0_0_30px_rgba(239,68,68,0.2)]"></div>
<div className="absolute inset-0 bg-red-500/5 border border-red-500/30 rotate-[60deg]"></div>
<div className="absolute inset-4 bg-black border border-white/20 rotate-12 shadow-[0_0_60px_rgba(239,68,68,0.4)] flex items-center justify-center group hover:bg-red-900/20 transition-colors">
<div className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_30px_rgba(239,68,68,1)] animate-ping absolute"></div>
<div className="w-3 h-3 bg-white rounded-full shadow-[0_0_30px_rgba(255,255,255,0.8)] relative z-10"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32 border-t border-neutral-900 relative">
<div className="absolute left-0 top-0 w-[1px] h-full bg-neutral-900"></div>
<div className="absolute right-0 top-0 w-[1px] h-full bg-neutral-900"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-20">
<div>
<h2 className="text-xs text-red-500 font-mono mb-6 uppercase tracking-widest">/// The Disconnect</h2>
<h3 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight mb-8 title-pulse">
                        Your AI has <br/> <span className="text-neutral-600">amnesia.</span>
</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-md border-l-2 border-red-900/30 pl-6">
                        Every new chat creates a silo. Codebases, documentation, and logic are fragmented across tools. You are constantly re-explaining the context of your own creation.
                    </p>
</div>
<div className="grid gap-4">

<div className="spotlight-card neon-box p-6 rounded group border border-white/5">
<div className="flex items-start gap-4">
<span className="iconify text-neutral-600 group-hover:text-red-500 transition-colors" data-icon="lucide:brain-circuit" data-width="24"></span>
<div>
<h4 className="text-white text-sm font-medium mb-2 group-hover:text-red-400 transition-colors">Context Decay</h4>
<p className="text-xs text-neutral-500">Traditional LLMs forget. Infinite IO indexes everything into a permanent graph.</p>
</div>
</div>
</div>
<div className="spotlight-card neon-box p-6 rounded group translate-x-4 border border-white/5">
<div className="flex items-start gap-4">
<span className="iconify text-neutral-600 group-hover:text-red-500 transition-colors" data-icon="lucide:file-code-2" data-width="24"></span>
<div>
<h4 className="text-white text-sm font-medium mb-2 group-hover:text-red-400 transition-colors">Siloed Reality</h4>
<p className="text-xs text-neutral-500">Your Git repo doesn't talk to your Jira. We bridge the gap.</p>
</div>
</div>
</div>
<div className="spotlight-card neon-box p-6 rounded group border border-white/5">
<div className="flex items-start gap-4">
<span className="iconify text-neutral-600 group-hover:text-red-500 transition-colors" data-icon="lucide:zap-off" data-width="24"></span>
<div>
<h4 className="text-white text-sm font-medium mb-2 group-hover:text-red-400 transition-colors">Prompt Fatigue</h4>
<p className="text-xs text-neutral-500">Stop pasting code. The system already knows the file you're thinking of.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-950/30 py-32 border-y border-neutral-900 relative overflow-hidden" id="how-it-works">
<div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,20,0.5)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-20 text-center">
<h2 className="text-xs text-red-500 font-mono mb-4 uppercase tracking-widest">/// Architecture</h2>
<h3 className="text-4xl font-light text-white tracking-tight title-pulse">The Operating Layer</h3>
</div>
<div className="grid md:grid-cols-4 gap-4">

<div className="spotlight-card neon-box p-8 rounded-lg border border-neutral-800 transition-all duration-500 group">
<div className="text-[10px] text-neutral-600 font-mono mb-6 group-hover:text-red-500 transition-colors">01_SOURCE</div>
<div className="w-10 h-10 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:text-red-500 group-hover:border-red-500/50 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all">
<span className="iconify" data-icon="lucide:cable" data-width="20"></span>
</div>
<h4 className="text-white font-medium mb-2">Connect</h4>
<p className="text-xs text-neutral-500 leading-relaxed">Passive ingestion from Git, Drive, Slack, and Databases.</p>
</div>

<div className="spotlight-card neon-box p-8 rounded-lg border border-neutral-800 transition-all duration-500 group">
<div className="text-[10px] text-neutral-600 font-mono mb-6 group-hover:text-red-500 transition-colors">02_PROCESS</div>
<div className="w-10 h-10 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:text-red-500 group-hover:border-red-500/50 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all">
<span className="iconify" data-icon="lucide:cpu" data-width="20"></span>
</div>
<h4 className="text-white font-medium mb-2">Vectorize</h4>
<p className="text-xs text-neutral-500 leading-relaxed">Content is chunked, embedded, and stored in a semantic graph.</p>
</div>

<div className="spotlight-card neon-box p-8 rounded-lg border border-neutral-800 transition-all duration-500 group">
<div className="text-[10px] text-neutral-600 font-mono mb-6 group-hover:text-red-500 transition-colors">03_THINK</div>
<div className="w-10 h-10 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:text-red-500 group-hover:border-red-500/50 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all">
<span className="iconify" data-icon="lucide:network" data-width="20"></span>
</div>
<h4 className="text-white font-medium mb-2">Orchestrate</h4>
<p className="text-xs text-neutral-500 leading-relaxed">The Orchestrator retrieves context and prompts the optimal LLM.</p>
</div>

<div className="spotlight-card neon-box p-8 rounded-lg border border-neutral-800 transition-all duration-500 group">
<div className="text-[10px] text-neutral-600 font-mono mb-6 group-hover:text-red-500 transition-colors">04_EXECUTE</div>
<div className="w-10 h-10 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:text-red-500 group-hover:border-red-500/50 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all">
<span className="iconify" data-icon="lucide:terminal-square" data-width="20"></span>
</div>
<h4 className="text-white font-medium mb-2">Output</h4>
<p className="text-xs text-neutral-500 leading-relaxed">Code generation, documentation, or automated actions.</p>
</div>
</div>
</div>
</section>

<section className="energy-bg py-40 relative overflow-hidden flex flex-col items-center justify-center" id="power">
<div className="absolute inset-0 z-0">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-[100px] animate-pulse"></div>
</div>
<div className="relative z-10 text-center max-w-2xl px-6">
<h2 className="text-sm md:text-base text-red-500 font-mono tracking-[0.5em] mb-8 animate-[pulse_3s_infinite]">/// FORCE MULTIPLIER</h2>
<h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-tight drop-shadow-[0_0_20px_rgba(239,68,68,0.5)] title-pulse">
                    It Feels Like <br/> <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">Magic.</span>
</h3>
<div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto cursor-pointer group">
<div className="power-orb absolute inset-0 rounded-full bg-black border border-red-500/30 flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--neon-red)_0%,_transparent_70%)] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
<span className="iconify text-white w-12 h-12 md:w-16 md:h-16 group-hover:scale-125 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" data-icon="lucide:zap"></span>
</div>
<div className="absolute -inset-4 rounded-full border border-red-500/20 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
<div className="absolute -inset-8 rounded-full border border-red-500/10 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_1s]"></div>
</div>
<div className="mt-8 text-xs text-neutral-500 font-mono uppercase tracking-widest">Hover to synchronize</div>
</div>
</section>

<section className="crt-container py-24 relative" id="demo">
<div className="crt-scanlines"></div>
<div className="max-w-7xl mx-auto px-6 relative z-20">
<div className="flex flex-col md:flex-row gap-12 items-end mb-12 border-b border-red-900/30 pb-6">
<div>
<div className="text-[10px] text-red-500 font-mono mb-2 animate-pulse">● LIVE CONNECTION</div>
<h3 className="text-4xl text-white font-mono tracking-tighter uppercase title-pulse">SYSTEM_INTERFACE_V.9</h3>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-2 bg-black border border-neutral-800 p-1 rounded relative overflow-hidden group shadow-[0_0_30px_rgba(0,0,0,1)] hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] transition-shadow">
<div className="h-8 bg-neutral-900 flex items-center px-3 justify-between border-b border-neutral-800">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-900/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
</div>
<div className="text-[9px] font-mono text-neutral-600">bash — 80x24</div>
</div>
<div className="h-[400px] p-6 font-mono text-xs text-neutral-400 overflow-y-auto space-y-2 scrollbar-thin" id="terminal-output">
<div className="text-neutral-600"># Initializing MAX_CORE...</div>
<div className="text-green-500/80">&gt; Connection established.</div>
<br/>
<div className="flex gap-2">
<span className="text-red-500">user@maxdesign:~$</span>
<span className="text-white typing-effect">query --project="Sphere" --q="Explain the auth flow"</span>
</div>
</div>
<div className="p-4 border-t border-neutral-800 bg-neutral-900/20 flex gap-2 items-center">
<span className="text-red-500 font-mono text-sm">❯</span>
<input className="bg-transparent border-none outline-none text-white font-mono text-sm w-full placeholder:text-neutral-700 focus:placeholder:text-neutral-600" placeholder="Access the mainframe..." type="text"/>
</div>
</div>
<div className="space-y-6">
<div className="bg-black/50 border border-neutral-800 p-6 rounded relative hover:border-red-500/50 transition-colors">
<div className="text-[9px] text-neutral-600 font-mono uppercase mb-4">Ingestion Rate</div>
<canvas className="w-full h-24 opacity-80" id="viz-canvas-1"></canvas>
</div>
<div className="bg-red-900/10 border border-red-500/20 p-6 rounded shadow-[0_0_15px_rgba(239,68,68,0.1)]">
<div className="flex items-center gap-3 text-red-500 mb-2">
<span className="iconify animate-spin" data-icon="lucide:loader-2"></span>
<span className="text-xs font-mono font-bold">PROCESSING</span>
</div>
<p className="text-[10px] text-red-200/50 font-mono leading-relaxed">
                                Indexing job #992 active.<br/>
                                4,203 vectors embedded.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black border-t border-neutral-900 py-32" id="contact">
<div className="max-w-4xl mx-auto px-6 text-center">
<span className="iconify text-red-600 mx-auto mb-8 animate-bounce" data-icon="lucide:arrow-down" data-width="24"></span>
<h2 className="text-3xl md:text-5xl font-light text-white mb-8 tracking-tight title-pulse">Ready to build the <span className="text-red-500">brain</span>?</h2>
<form className="max-w-lg mx-auto space-y-4 text-left" id="footer-contact">
<div className="grid grid-cols-2 gap-4">
<input className="bg-neutral-900/50 border border-neutral-800 rounded p-4 text-sm text-white focus:border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all outline-none" placeholder="Name" type="text"/>
<input className="bg-neutral-900/50 border border-neutral-800 rounded p-4 text-sm text-white focus:border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all outline-none" placeholder="Work Email" type="email"/>
</div>
<textarea className="w-full bg-neutral-900/50 border border-neutral-800 rounded p-4 text-sm text-white focus:border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all outline-none" placeholder="Describe your system..." rows="4"></textarea>
<button className="w-full bg-white text-black font-medium py-4 rounded hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group hover:shadow-[0_0_30px_rgba(239,68,68,0.6)]" type="submit">
                        INITIALIZE SEQUENCE
                        <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right"></span>
</button>
</form>
</div>
</section>
</main>
<footer className="bg-black border-t border-neutral-900 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
<span className="iconify text-red-500" data-icon="lucide:infinity" data-width="16"></span>
<span className="text-[10px] text-neutral-400 font-mono tracking-widest">MAXDESIGN /// INFINITE_IO /// 2025</span>
</div>
</div>
</footer>



    </>
  );
}
