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



        lucide.createIcons();

        // Updated "Propulsion" Animation
        // Concept: A flow of energy/particles moving forward (up-right) 
        // representing speed and momentum.
        
        const canvas = document.getElementById('hero-canvas');
        const ctx = canvas.getContext('2d');
        
        let width, height;
        let particles = [];
        
        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initParticles();
        }
        
        class Particle {
            constructor() {
                this.reset();
            }
            
            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.z = Math.random() * 2 + 0.5; // Depth factor
                this.size = Math.random() * 1.5;
                // Movement vector: slightly diagonal up-right
                this.vx = (Math.random() * 0.5 + 0.2) * this.z; 
                this.vy = (Math.random() * 0.5 - 0.8) * this.z; 
                this.life = Math.random() * 0.5 + 0.5;
                this.decay = 0.005;
                // Orange hues
                const hue = 20 + Math.random() * 30; // 20-50 (Orange to Yellow-ish)
                this.color = `hsla(${hue}, 100%, 60%,`;
            }
            
            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.life -= this.decay;
                
                // Wrap around with soft reset
                if (this.x > width || this.y < 0 || this.life <= 0) {
                    // Reset to bottom-left area mostly to create flow
                    if(Math.random() > 0.5) {
                        this.x = -10;
                        this.y = Math.random() * height;
                    } else {
                        this.x = Math.random() * width;
                        this.y = height + 10;
                    }
                    this.life = Math.random() * 0.5 + 0.5;
                }
            }
            
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color + this.life * 0.4 + ')'; // Opacity based on life
                ctx.fill();
            }
        }

        // Draw connecting lines between close particles to create "Mesh/Structure" look
        function drawConnections() {
            for (let i = 0; i < particles.length; i++) {
                const p1 = particles[i];
                // Only connect to a subset to save performance
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(249, 115, 22, ${0.15 * (1 - dist/100)})`; // Orange fade
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }
        }

        function initParticles() {
            particles = [];
            const particleCount = Math.min(window.innerWidth / 10, 120); // Responsive count
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            
            // Subtle trail effect
            // ctx.fillStyle = 'rgba(3, 3, 3, 0.1)';
            // ctx.fillRect(0, 0, width, height);

            particles.forEach(p => {
                p.update();
                p.draw();
            });
            
            drawConnections();
            
            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', resize);
        resize();
        animate();
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="relative w-8 h-8 flex items-center justify-center">

<div className="absolute inset-0 bg-orange-500 rounded-full blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
<div className="relative z-10 w-full h-full bg-gradient-to-tr from-orange-600 to-orange-400 rounded-full flex items-center justify-center shadow-inner ring-1 ring-white/20">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24">
<path className="" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
</svg>
</div>
</div>
<span className="font-semibold tracking-tight text-xl text-white">Propulsion</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#expertise">Expertise</a>
<a className="hover:text-white transition-colors" href="#work">Case Studies</a>
<a className="hover:text-white transition-colors" href="#process">Methodology</a>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium bg-white text-black px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-colors" href="#contact">
                Initiate Project
                <svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</nav>

<header className="min-h-screen flex flex-col overflow-hidden pt-24 pb-12 relative items-center justify-center">

<canvas className="absolute inset-0 w-full h-full z-0 opacity-60 pointer-events-none" height="872" id="hero-canvas" width="1187"></canvas>

<div className="absolute top-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_transparent_0%,_#030303_70%)] z-0 pointer-events-none"></div>
<div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#030303] to-transparent z-0 pointer-events-none"></div>

<div className="z-10 grid lg:grid-cols-2 gap-12 w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-center">
<style>
        @keyframes subtle-float {
            0%, 100% { transform: translateY(0) rotate(0); }
            50% { transform: translateY(-10px) rotate(1deg); }
        }
        @keyframes reveal-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-float-slow { animation: subtle-float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: subtle-float 8s ease-in-out infinite 4s; }
        .animate-reveal { animation: reveal-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
    </style>

<div className="flex flex-col items-start text-left pt-8 lg:pt-0">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-8 animate-reveal" style={{animationDelay: '0.1s'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
            AI-First Architecture
        </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white leading-[1.05] mb-6 animate-reveal" style={{animationDelay: '0.2s'}}>
            Ship products 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">without the friction.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-lg mb-10 animate-reveal" style={{animationDelay: '0.3s'}}>
            Propulsion replaces the boilerplate of traditional engineering with intelligent agents. Design, generate, and deploy production-ready stacks in minutes.
        </p>
<div className="flex flex-wrap items-center gap-4 animate-reveal" style={{animationDelay: '0.4s'}}>
<button className="group h-12 px-6 rounded-full bg-white text-black font-semibold text-sm flex items-center gap-2 hover:bg-zinc-200 transition-all active:scale-95">
                Start Building
                <svg className="transition-transform group-hover:translate-x-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="group h-12 px-6 rounded-full border border-white/10 bg-white/5 text-white font-medium text-sm flex items-center gap-2 hover:bg-white/10 transition-all active:scale-95">
<svg className="text-zinc-400 group-hover:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                Watch Demo
            </button>
</div>
<div className="mt-12 pt-8 border-t border-white/5 w-full max-w-md animate-reveal" style={{animationDelay: '0.5s'}}>
<p className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold mb-4">Trusted by engineering teams at</p>
<div className="flex items-center gap-8 opacity-40 grayscale mix-blend-screen">

<svg className="h-6" fill="currentColor" viewbox="0 0 100 30"><path d="M10,15 L20,5 L30,15 L20,25 Z M40,5 H50 V25 H40 Z M60,5 H80 V10 H65 V12 H75 V17 H65 V25 H60 Z" fill="white"></path></svg>
<svg className="h-5" fill="currentColor" viewbox="0 0 100 30"><circle cx="15" cy="15" fill="white" r="10"></circle><rect fill="white" height="20" width="20" x="35" y="5"></rect><path d="M70,5 L80,25 L90,5" fill="none" stroke="white" strokeWidth="4"></path></svg>
<svg className="h-6" fill="currentColor" viewbox="0 0 100 30"><path d="M10,25 L20,5 L30,25 M40,5 L40,25 M50,5 L70,5" fill="none" stroke="white" strokeWidth="3"></path></svg>
</div>
</div>
</div>

<div className="relative h-[600px] w-full flex items-center justify-center lg:justify-end perspective-1000">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full pointer-events-none"></div>

<div className="relative w-full max-w-md h-[500px] animate-reveal" style={{animationDelay: '0.2s'}}>

<div className="absolute top-0 right-0 w-[90%] h-[400px] bg-[#0A0A0A] rounded-xl border border-white/10 shadow-2xl overflow-hidden transform rotate-6 translate-x-4 animate-float-delayed z-0 opacity-60">
<div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
</div>
<div className="p-4 font-mono text-xs text-zinc-500 space-y-2">
<p className="">&gt; initializing agent swarms...</p>
<p>&gt; analyzing repository structure...</p>
<p className="text-orange-500">&gt; found 12 optimization vectors</p>
<p>&gt; rewriting database layer...</p>
<p className="text-green-500">&gt; done in 240ms</p>
</div>
</div>

<div className="absolute top-12 left-0 w-[90%] h-[420px] bg-zinc-900 rounded-xl border border-white/10 shadow-[0_0_50px_-12px_rgba(249,115,22,0.3)] overflow-hidden transform -rotate-3 transition-transform hover:rotate-0 duration-700 animate-float-slow z-10">

<div className="relative h-40 w-full overflow-hidden">
<img alt="Dashboard Header" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>

<div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur border border-white/10 rounded-full px-3 py-1">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] font-medium text-white">Deployment Live</span>
</div>
</div>

<div className="p-6">
<div className="flex items-start justify-between mb-6">
<div>
<div className="h-2 w-24 bg-zinc-700 rounded mb-2"></div>
<div className="h-2 w-16 bg-zinc-800 rounded"></div>
</div>
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
<svg className="text-orange-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg>
</div>
</div>

<div className="grid grid-cols-2 gap-4 mb-6">
<div className="p-3 rounded-lg bg-white/5 border border-white/5">
<div className="text-[10px] text-zinc-500 mb-1">Total Users</div>
<div className="text-lg font-semibold text-white">24.8k</div>
</div>
<div className="p-3 rounded-lg bg-white/5 border border-white/5">
<div className="text-[10px] text-zinc-500 mb-1">Revenue</div>
<div className="text-lg font-semibold text-white">$120k</div>
</div>
</div>

<div className="space-y-2">
<div className="flex justify-between text-[10px] text-zinc-500">
<span className="">System Load</span>
<span>32%</span>
</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full w-[32%] bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="absolute -top-4 -right-4 bg-zinc-950 border border-white/10 p-3 rounded-lg shadow-xl z-20 animate-bounce" style={{animationDuration: '3s'}}>
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><path d="m16 7 4 4-4 4"></path><path className="" d="m8 7-4 4 4 4"></path></svg>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-pulse">
<div className="w-5 h-8 border-2 border-zinc-500 rounded-full flex justify-center p-1">
<div className="w-1 h-2 bg-zinc-500 rounded-full animate-bounce"></div>
</div>
</div>
</header>

<section className="bg-[#030303] z-10 border-white/5 border-b pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-4xl">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-8 leading-tight">
                    We don't just write code. <br/>
<span className="text-zinc-500">We engineer velocity.</span>
</h2>
<div className="space-y-6 text-xl text-zinc-400 font-light leading-relaxed">
<p className="">
                        In a world where speed defines success, traditional development creates bottlenecks. At <span className="text-white font-medium">Propulsion</span>, we combine top-tier engineering talent with advanced AI agents to deliver software exponentially faster.
                    </p>
<p className="">
                        From custom enterprise platforms to consumer-facing mobile apps, our "AI-First" approach ensures your technology isn't just modern—it's future-proof and built for scale.
                    </p>
</div>
</div>
</div>
</section>


<section className="py-32 bg-black relative overflow-hidden" id="work">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<h2 className="text-5xl font-medium text-white tracking-tight border-orange-600 border-l-4 mb-20 pl-8">Engineered for Results</h2>
<div className="space-y-32">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 flex-grow z-10 lg:pb-0 max-w-5xl mt-20 mr-auto mb-20 ml-auto pb-8 relative gap-x-12 gap-y-12">

<div className="lg:col-span-7 flex flex-col pt-4 relative justify-center text-left">

<div className="inline-flex w-max rounded-full mb-8 pt-1.5 pr-4 pb-1.5 pl-1.5 bg-zinc-900/80 border border-white/10 items-center gap-3 backdrop-blur-md">
<div className="flex -space-x-2">
<img alt="User" className="w-6 h-6 rounded-full border border-zinc-900 object-cover grayscale opacity-70" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&amp;h=64&amp;fit=crop&amp;crop=faces"/>
<img alt="User" className="w-6 h-6 rounded-full border border-zinc-900 object-cover grayscale opacity-70" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&amp;h=64&amp;fit=crop&amp;crop=faces"/>
<div className="w-6 h-6 rounded-full border border-zinc-900 bg-orange-600 flex items-center justify-center text-[8px] font-bold text-white tracking-tighter">AI</div>
</div>
<span className="text-xs font-medium text-zinc-400 tracking-wide pr-1">
<span className="text-white">Live Agents</span> deployed
            </span>
</div>

<h1 className="leading-none text-5xl lg:text-7xl font-medium text-white tracking-tighter mb-8">
            Virtual Sales
            <span className="block text-zinc-500">Agents</span>
</h1>

<p className="text-lg text-zinc-400 font-light max-w-md mb-10 leading-relaxed border-l-2 border-orange-500/20 pl-6">
            Automate property tours and client inquiries with photorealistic AI avatars. Seamlessly integrated into your existing CRM.
        </p>

<div className="flex flex-col sm:flex-row gap-4 mb-16">
<button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5">
                View Implementation
                <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white border border-white/10 hover:bg-white/5 transition-colors">
                Play Demo Video
                <svg className="lucide lucide-play w-3 h-3" fill="currentColor" height="16" stroke="currentColor" strokeWidth="0" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</button>
</div>

<div className="flex items-center gap-8 mt-auto border-t border-white/10 pt-8">
<div>
<div className="text-3xl font-medium text-white tracking-tight mb-1">+40%</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Conversion</div>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div>
<div className="text-3xl font-medium text-white tracking-tight mb-1">24/7</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Availability</div>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div>
<div className="text-3xl font-medium text-white tracking-tight mb-1">0s</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Wait Time</div>
</div>
</div>
</div>

<div className="lg:col-span-5 relative h-[500px] lg:h-auto perspective-1000">
<div className="absolute inset-0 bg-zinc-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group transition-transform duration-700 hover:rotate-1">

<img alt="Virtual Tour Background" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-[2s]" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50"></div>

<div className="absolute inset-0 flex flex-col p-6 justify-between">

<div className="flex justify-between items-start">
<div className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
<div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
<span className="text-[10px] font-medium text-white tracking-wide uppercase">Live Tour</span>
</div>

<div className="w-24 h-32 bg-zinc-800 rounded-lg border border-white/20 shadow-xl overflow-hidden relative transform transition-transform group-hover:scale-110 group-hover:-rotate-2 duration-500">
<img alt="AI Agent" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-2 pt-4">
<p className="text-[8px] text-white font-medium text-center flex items-center justify-center gap-1">
<svg className="text-green-500" fill="currentColor" height="8" viewbox="0 0 24 24" width="8" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
                                AI Agent
                            </p>
</div>
</div>
</div>

<div className="mb-4 bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl rounded-bl-sm max-w-[85%] shadow-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-xs text-zinc-200 leading-relaxed">
<span className="text-orange-400 font-bold text-[10px] uppercase mb-1 block">Sarah (AI)</span>
                        "Welcome! This unit features floor-to-ceiling windows and smart home integration. Shall we look at the kitchen?"
                    </p>
</div>

<div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-center gap-6 self-center w-full max-w-[200px] shadow-2xl">
<div className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer group/icon">
<svg className="text-white/70 group-hover/icon:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
</div>
<div className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer group/icon">
<svg className="text-white/70 group-hover/icon:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 12h20"></path></svg>
</div>
<div className="p-2 bg-red-500 rounded-full hover:bg-red-600 transition-colors cursor-pointer shadow-lg shadow-red-500/20">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="22" x2="2" y1="2" y2="22"></line></svg>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="group grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 gap-x-12 gap-y-12 items-center">

<div className="lg:col-span-7 flex flex-col text-left pt-4 relative justify-center">

<div className="inline-flex w-max rounded-full mb-8 pt-1.5 pr-4 pb-1.5 pl-1.5 bg-zinc-900/80 border border-white/10 items-center gap-3 backdrop-blur-md">
<div className="flex -space-x-2">

<img alt="Alex M." className="w-6 h-6 rounded-full border border-zinc-900 object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&amp;q=80"/>
<div className="w-6 h-6 rounded-full border border-zinc-900 bg-zinc-800 flex items-center justify-center text-white">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m7.5 4.27 9 5.15"></path><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
<div className="w-6 h-6 rounded-full border border-zinc-900 bg-orange-600 flex items-center justify-center text-[8px] font-bold text-white tracking-tighter">AI</div>
</div>
<span className="text-xs font-medium text-zinc-400 tracking-wide pr-1">
<span className="text-white">FMCG &amp; Logistics</span>
</span>
</div>

<h1 className="leading-none text-5xl lg:text-7xl font-medium text-white tracking-tighter mb-8">
            Automated
            <span className="block text-zinc-500">Ordering Engine</span>
</h1>

<p className="text-lg text-zinc-400 font-light max-w-md mb-10 leading-relaxed border-l-2 border-orange-500/20 pl-6">
            For a wholesale distributor, we developed an NLP-powered engine that reads WhatsApp/Email orders, checks ERP stock levels, and generates invoices instantly. Zero manual entry.
        </p>

<div className="flex flex-col sm:flex-row gap-4 mb-16">
<button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5">
                View Implementation
                <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white border border-white/10 hover:bg-white/5 transition-colors">
                Play Demo Video
                <svg className="w-3 h-3" fill="currentColor" height="16" stroke="currentColor" strokeWidth="0" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</button>
</div>

<div className="flex items-center gap-8 mt-auto border-t border-white/10 pt-8">
<div>
<div className="text-3xl font-medium text-white tracking-tight mb-1">0</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Manual Errors</div>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div>
<div className="text-3xl font-medium text-white tracking-tight mb-1">90%</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Time Saved</div>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div>
<div className="text-3xl font-medium text-white tracking-tight mb-1">100%</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Accuracy</div>
</div>
</div>
</div>

<div className="lg:col-span-5 relative h-[500px] lg:h-auto perspective-1000">
<div className="absolute inset-0 bg-zinc-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group transition-transform duration-700 hover:rotate-1">

<img alt="Automation Background" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2s]" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-zinc-950/50"></div>

<div className="absolute inset-0 flex flex-col p-6 justify-between">

<div className="flex justify-between items-start">
<div className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
<div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
<span className="text-[10px] font-medium text-white tracking-wide uppercase">Live Order Stream</span>
</div>

<div className="w-28 bg-zinc-900/90 backdrop-blur-md rounded-lg border border-white/20 shadow-xl overflow-hidden relative transform transition-transform group-hover:scale-110 group-hover:-rotate-2 duration-500 flex flex-col">

<div className="relative h-20 w-full bg-zinc-800">
<img alt="Agent" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&amp;q=80"/>

<div className="absolute bottom-1 right-1 w-2.5 h-2.5 bg-green-500 border-2 border-zinc-900 rounded-full z-10"></div>

<div className="absolute top-1 left-1 bg-black/40 rounded-full p-0.5 backdrop-blur-sm">
<svg className="text-green-500" fill="currentColor" height="10" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path></svg>
</div>
</div>

<div className="p-2 border-t border-white/10 flex flex-col gap-0.5">
<span className="text-[9px] font-bold text-white leading-none">Alex M.</span>
<span className="text-[8px] font-mono text-zinc-400 leading-none">Processing...</span>
</div>
</div>
</div>

<div className="space-y-3 mb-4 w-full max-w-[90%] self-center">
<div className="bg-zinc-800/80 backdrop-blur-md border border-white/10 p-3 rounded-2xl rounded-tl-sm shadow-lg transform translate-x-[-10px] group-hover:translate-x-0 transition-transform duration-500">
<div className="flex items-center gap-2 mb-1">
<svg className="text-green-400" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path></svg>
<span className="text-[10px] text-zinc-400 font-medium">WhatsApp</span>
</div>
<p className="text-xs text-zinc-200">"Order 50 cases of Diet Coke..."</p>
</div>
<div className="bg-orange-500/10 backdrop-blur-md border border-orange-500/20 p-3 rounded-2xl rounded-tr-sm shadow-lg ml-auto w-max transform translate-x-[10px] group-hover:translate-x-0 transition-transform duration-500 delay-100">
<div className="flex items-center gap-2">
<span className="text-[10px] text-orange-400 font-mono">&gt; NLP Parsing...</span>
</div>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-white">Stock Checked &amp; Verified</span>
</div>
</div>
</div>

<div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between gap-6 self-center w-full max-w-[200px] shadow-2xl">
<div className="flex flex-col items-center">
<span className="text-[10px] text-zinc-500 font-mono uppercase">Speed</span>
<span className="text-xs font-bold text-white">0.4s</span>
</div>
<div className="h-6 w-px bg-white/10"></div>
<div className="flex flex-col items-center">
<span className="text-[10px] text-zinc-500 font-mono uppercase">Batch</span>
<span className="text-xs font-bold text-white">#9402</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-950 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6 text-center">
<h3 className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mb-10">Our Technology Stack</h3>
<div className="flex flex-wrap justify-center gap-3 md:gap-4">
<span className="px-5 py-2.5 rounded border border-white/5 bg-zinc-900/50 text-zinc-400 text-sm font-mono hover:text-white hover:border-orange-500/50 transition-colors">Python</span>
<span className="px-5 py-2.5 rounded border border-white/5 bg-zinc-900/50 text-zinc-400 text-sm font-mono hover:text-white hover:border-orange-500/50 transition-colors">TensorFlow</span>
<span className="px-5 py-2.5 rounded border border-white/5 bg-zinc-900/50 text-zinc-400 text-sm font-mono hover:text-white hover:border-orange-500/50 transition-colors">OpenAI API</span>
<span className="px-5 py-2.5 rounded border border-white/5 bg-zinc-900/50 text-zinc-400 text-sm font-mono hover:text-white hover:border-orange-500/50 transition-colors">React / Next.js</span>
<span className="px-5 py-2.5 rounded border border-white/5 bg-zinc-900/50 text-zinc-400 text-sm font-mono hover:text-white hover:border-orange-500/50 transition-colors">Node.js</span>
<span className="px-5 py-2.5 rounded border border-white/5 bg-zinc-900/50 text-zinc-400 text-sm font-mono hover:text-white hover:border-orange-500/50 transition-colors">AWS</span>
<span className="px-5 py-2.5 rounded border border-white/5 bg-zinc-900/50 text-zinc-400 text-sm font-mono hover:text-white hover:border-orange-500/50 transition-colors">Docker</span>
<span className="px-5 py-2.5 rounded border border-white/5 bg-zinc-900/50 text-zinc-400 text-sm font-mono hover:text-white hover:border-orange-500/50 transition-colors">PostgreSQL</span>
</div>
</div>
</section>

<footer className="bg-black pt-32 pb-12" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24 border-b border-white/10 pb-24">
<div className="max-w-2xl">
<h2 className="text-6xl md:text-7xl font-semibold tracking-tighter text-white mb-8">Ready for takeoff?</h2>
<p className="text-2xl text-zinc-400 mb-10 font-light">Stop stalling with legacy tech. Let's build the engine that powers your next phase of growth.</p>
<a className="inline-flex items-center gap-3 bg-orange-600 text-white px-8 py-4 rounded-full font-medium hover:bg-orange-500 transition-all hover:scale-105 text-lg shadow-lg shadow-orange-900/20" href="mailto:haram@propulsion.world">
                        Start a Project
                        <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="grid gap-8 text-sm md:text-right">
<div>
<h4 className="text-white font-medium mb-2 uppercase tracking-wider text-xs opacity-50">Direct Contact</h4>
<p className="text-zinc-400 hover:text-white transition-colors"><a href="mailto:haram@propulsion.world">haram@propulsion.world</a></p>
<p className="text-zinc-400 hover:text-white transition-colors"><a href="mailto:jishnu@propulsion.world">jishnu@propulsion.world</a></p>
</div>
<div>
<h4 className="text-white font-medium mb-2 uppercase tracking-wider text-xs opacity-50">Location</h4>
<p className="text-zinc-400">Dubai, UAE</p>
<p className="text-zinc-400">Global Operations</p>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-sm text-zinc-600">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
</svg>
<span className="font-semibold text-zinc-500">Propulsion</span>
</div>
<p>© 2024 Propulsion Technologies. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
