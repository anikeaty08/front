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



document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('animate-enter');
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});



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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // 1. HERO CANVAS ANIMATION
    (function() {
      const canvas = document.getElementById('hero-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      let width, height;
      let particles = [];
      const particleCount = 60;

      function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }
      window.addEventListener('resize', resize);
      resize();

      class Particle {
        constructor() {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.vx = (Math.random() - 0.5) * 0.5;
          this.vy = (Math.random() - 0.5) * 0.5;
          this.size = Math.random() * 2;
        }
        update() {
          this.x += this.vx;
          this.y += this.vy;
          if (this.x < 0 || this.x > width) this.vx *= -1;
          if (this.y < 0 || this.y > height) this.vy *= -1;
        }
        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(16, 185, 129, 0.4)';
          ctx.fill();
        }
      }

      for (let i = 0; i < particleCount; i++) particles.push(new Particle());

      function animateHero() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
          p.update();
          p.draw();
          // Connect particles nearby
          particles.forEach(p2 => {
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            if (dist < 150) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(16, 185, 129, ${0.15 - dist/1000})`;
              ctx.stroke();
            }
          });
        });
        requestAnimationFrame(animateHero);
      }
      animateHero();
    })();

    // 2. GLOBE CANVAS ANIMATION
    (function() {
      const canvas = document.getElementById('globe-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      let width = canvas.width = canvas.parentElement.offsetWidth;
      let height = canvas.height = canvas.parentElement.offsetHeight;
      
      window.addEventListener('resize', () => {
        width = canvas.width = canvas.parentElement.offsetWidth;
        height = canvas.height = canvas.parentElement.offsetHeight;
      });

      const DOTS_COUNT = 600; 
      const GLOBE_RADIUS = width * 0.4;
      const DOT_RADIUS = 1.5;
      const dots = [];
      let rotation = 0;

      for(let i=0; i<DOTS_COUNT; i++) {
        const phi = Math.acos(-1 + (2 * i) / DOTS_COUNT);
        const theta = Math.sqrt(DOTS_COUNT * Math.PI) * phi;
        dots.push({
          x: GLOBE_RADIUS * Math.cos(theta) * Math.sin(phi),
          y: GLOBE_RADIUS * Math.sin(theta) * Math.sin(phi),
          z: GLOBE_RADIUS * Math.cos(phi)
        });
      }

      function animateGlobe() {
        ctx.clearRect(0, 0, width, height);
        const cx = width / 2;
        const cy = height / 2;
        rotation += 0.005;

        dots.forEach(dot => {
          let x = dot.x * Math.cos(rotation) - dot.z * Math.sin(rotation);
          let z = dot.z * Math.cos(rotation) + dot.x * Math.sin(rotation);
          let y = dot.y;
          const scale = 300 / (300 + z);
          const px = x * scale + cx;
          const py = y * scale + cy;

          if(z < 0) return;
          const alpha = (z + GLOBE_RADIUS) / (2 * GLOBE_RADIUS);
          ctx.beginPath();
          ctx.arc(px, py, DOT_RADIUS * scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(16, 185, 129, ${alpha * 0.8})`;
          ctx.fill();
        });
        requestAnimationFrame(animateGlobe);
      }
      animateGlobe();
    })();
  
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
      

<nav className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
<div className="flex items-center gap-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full pl-6 pr-2 py-2 shadow-2xl shadow-black/50">
<a className="flex items-center gap-2 group mr-auto" href="#">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:leaf-bold-duotone"></iconify-icon>
<span className="text-lg font-bold tracking-tight text-white">Carbon</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition" href="#how-it-works">How It Works</a>
<a className="hover:text-white transition" href="#technology">Technology</a>
<a className="hover:text-white transition" href="#miners">For Miners</a>
</div>
<a className="bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition flex items-center gap-2 group" href="#apply">
        Start Free Trial
        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</nav>

<header className="relative min-h-screen flex flex-col items-center pt-32 md:pt-48 overflow-hidden">

<canvas className="absolute inset-0 w-full h-full -z-20 opacity-40" id="hero-canvas"></canvas>

<div className="absolute inset-0 bg-[#020617] -z-30"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-950/20 via-[#020617] to-[#020617] -z-25"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-[60vh] bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent blur-[1px] -z-10"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[60vh] bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent blur-[40px] -z-10 animate-pulse"></div>

<div className="relative z-10 text-center px-6 max-w-5xl mx-auto mb-12">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-8 animate-enter backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
        Live in MISO — Optimizing 40MW
      </div>

<h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter text-white mb-6 leading-[0.9] animate-enter delay-100 drop-shadow-2xl">
        CARBO<span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-emerald-600 relative z-10">N</span>
</h1>

<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-enter delay-200">
        Take control of your curtailment. Turn idle hours into verified carbon credit revenue with AI-driven fleet management.
      </p>

<div className="animate-enter delay-300">
<a className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-b from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 border border-slate-600 text-white font-semibold rounded-full transition shadow-lg shadow-emerald-900/10 group" href="#apply">
          Get Started
          <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-[250px] left-1/2 -translate-x-1/2 w-[150vw] h-[600px] bg-emerald-500/20 blur-[120px] rounded-[100%] pointer-events-none -z-10 animate-horizon mix-blend-screen"></div>

<div className="w-full max-w-6xl mx-auto px-4 perspective-1000 mt-auto relative z-10 animate-enter delay-300">
<div className="relative bg-[#0F1218]/90 backdrop-blur-xl border border-white/10 rounded-t-2xl shadow-[0_-20px_60px_-10px_rgba(16,185,129,0.2)] overflow-hidden ring-1 ring-white/10">

<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

<div className="h-12 border-b border-white/5 flex items-center justify-between px-4 bg-white/[0.02]">
<div className="flex items-center gap-4">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Live System</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-0 min-h-[400px]">

<div className="p-6 border-r border-white/5 bg-[#0A0C10]/50 space-y-6">
<div>
<div className="text-xs font-medium text-slate-500 mb-1">Total Revenue (24h)</div>
<div className="text-3xl font-bold text-white tracking-tight">$39,749</div>
<div className="text-xs font-mono text-emerald-400 mt-1 flex items-center gap-1">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon> +15.6% vs Mining Only
                    </div>
</div>

<div className="space-y-3 pt-6 border-t border-white/5">
<div className="flex justify-between items-center text-sm">
<span className="text-slate-400 flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:bolt-bold"></iconify-icon> Mining Revenues
                       </span>
<span className="text-white font-mono">$34,381</span>
</div>
<div className="w-full bg-white/5 rounded-full h-1.5">
<div className="bg-orange-500 h-1.5 rounded-full w-[85%]"></div>
</div>
</div>

<div className="space-y-3">
<div className="flex justify-between items-center text-sm">
<span className="text-slate-400 flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:leaf-bold"></iconify-icon> Carbon Credits
                       </span>
<span className="text-white font-mono">$5,368</span>
</div>
<div className="w-full bg-white/5 rounded-full h-1.5">
<div className="bg-emerald-500 h-1.5 rounded-full w-[35%] shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
</div>
</div>
</div>

<div className="md:col-span-2 p-6 bg-gradient-to-b from-[#0F1218] to-[#0A0C10] relative overflow-hidden">
<div className="flex items-center justify-between mb-8">
<h3 className="text-sm font-semibold text-white">Real-time Optimization</h3>
<div className="flex gap-4 items-center">
<div className="flex gap-3 text-[10px] font-medium">
<div className="flex items-center gap-1.5">
<div className="w-2 h-0.5 bg-orange-500"></div>
<span className="text-slate-400">Mining Only</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2 h-0.5 bg-emerald-500"></div>
<span className="text-emerald-400">Optimized</span>
</div>
</div>
<div className="flex gap-2">
<button className="text-[10px] bg-white/10 text-white px-2 py-1 rounded hover:bg-white/20 transition">1H</button>
<button className="text-[10px] bg-white/5 text-slate-400 px-2 py-1 rounded hover:bg-white/10 transition">24H</button>
</div>
</div>
</div>

<div className="relative h-48 w-full mt-8">

<div className="absolute inset-0 border-b border-white/5"></div>
<div className="absolute inset-0 border-t border-dashed border-white/5 top-1/2"></div>

<svg className="w-full h-full overflow-visible preserve-3d" viewbox="0 0 400 150">
<defs>
<lineargradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: 'rgb(16,185,129)', stopOpacity: '0.2'}}></stop>
<stop offset="100%" style={{stopColor: 'rgb(16,185,129)', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>

<path d="M0,120 C50,110 100,90 150,60 C200,30 250,50 300,40 C350,30 400,10 400,150 L0,150 Z" fill="url(#grad1)"></path>

<path className="opacity-60" d="M0,120 C50,110 100,100 150,85 C200,65 250,70 300,55 C350,45 400,30" fill="none" stroke="#f97316" stroke-dasharray="4 4" strokeWidth="2"></path>

<path d="M0,120 C50,110 100,90 150,60 C200,30 250,50 300,40 C350,30 400,10" fill="none" filter="drop-shadow(0 0 8px rgba(16,185,129,0.5))" stroke="#10b981" strokeLinecap="round" strokeWidth="3"></path>

<circle className="animate-pulse" cx="400" cy="10" fill="white" r="4" stroke="#10b981" strokeWidth="2"></circle>
</svg>

<div className="absolute top-0 right-0 transform translate-x-4 -translate-y-8 bg-slate-800/90 border border-emerald-500/30 px-3 py-1.5 rounded-lg shadow-xl">
<div className="text-[10px] text-slate-400 mb-0.5">Mode: Carbon</div>
<div className="text-sm font-bold text-white">$70/tCO2</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/5">
<div className="flex items-start gap-3">
<div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
<div>
<div className="text-xs font-medium text-white">High Grid Load</div>
<div className="text-[10px] text-slate-500">MISO Region • 14:02 PM</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
<div>
<div className="text-xs font-medium text-white">Curtailment Active</div>
<div className="text-[10px] text-slate-500">Auto-switched to Carbon Mode</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-[#0B1120] relative border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center reveal">You're leaving money on the table.</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white/5 border border-white/5 p-8 rounded-2xl hover:border-white/10 transition group reveal delay-100">
<div className="mb-6 p-3 bg-red-500/10 w-fit rounded-lg text-red-400">
<iconify-icon icon="solar:bolt-circle-bold-duotone" width="32"></iconify-icon>
</div>
<div className="text-4xl font-bold text-white font-mono mb-2">2,100+</div>
<div className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">Hours / Year</div>
<p className="text-slate-400 leading-relaxed">Average US mining farm curtails 2,100+ hours per year due to high energy prices. That's 24% of the year earning $0.</p>
</div>

<div className="bg-white/5 border border-white/5 p-8 rounded-2xl hover:border-white/10 transition group reveal delay-200">
<div className="mb-6 p-3 bg-orange-500/10 w-fit rounded-lg text-orange-400">
<iconify-icon icon="solar:graph-down-bold-duotone" width="32"></iconify-icon>
</div>
<div className="text-4xl font-bold text-white font-mono mb-2">26%</div>
<div className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">Cost Increase</div>
<p className="text-slate-400 leading-relaxed">US industrial power costs rose 26% since 2022. Every cent matters when hashprice is hovering near lows.</p>
</div>

<div className="bg-white/5 border border-white/5 p-8 rounded-2xl hover:border-white/10 transition group reveal delay-300">
<div className="mb-6 p-3 bg-slate-700/50 w-fit rounded-lg text-slate-300">
<iconify-icon icon="solar:forbidden-circle-bold-duotone" width="32"></iconify-icon>
</div>
<div className="text-4xl font-bold text-white font-mono mb-2">$0</div>
<div className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">Per Curtailed Hour</div>
<p className="text-slate-400 leading-relaxed">When you turn off, you earn nothing. Your infrastructure sits idle. Carbon Mine changes that.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="how-it-works">
<div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Your fleet, 4 revenue modes.</h2>
<p className="text-xl text-slate-400">Our AI picks the best one every 5 minutes.</p>
</div>

<div className="mb-12 flex items-center justify-center reveal">
<div className="bg-[#020617] border border-white/10 rounded-full px-6 py-3 flex items-center gap-4 overflow-x-auto no-scrollbar max-w-full">
<span className="text-xs font-mono text-slate-500 whitespace-nowrap">00:00</span>
<div className="w-16 h-1 bg-orange-500 rounded-full"></div>
<span className="text-xs font-bold text-orange-500">MINE</span>
<div className="w-8 h-px bg-white/10"></div>
<span className="text-xs font-mono text-slate-500 whitespace-nowrap">06:00</span>
<div className="w-24 h-1 bg-emerald-500 rounded-full"></div>
<span className="text-xs font-bold text-emerald-500">CARBON</span>
<div className="w-8 h-px bg-white/10"></div>
<span className="text-xs font-mono text-slate-500 whitespace-nowrap">10:00</span>
<div className="w-16 h-1 bg-slate-500 rounded-full"></div>
<span className="text-xs font-bold text-slate-500">SHUTDOWN</span>
<div className="w-8 h-px bg-white/10"></div>
<span className="text-xs font-mono text-slate-500 whitespace-nowrap">14:00</span>
<div className="w-12 h-1 bg-sky-500 rounded-full"></div>
<span className="text-xs font-bold text-sky-500">RESPONSE</span>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-xl bg-white/5 border-t-4 border-orange-500 reveal delay-100">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-orange-500" icon="solar:pickaxe-bold" width="20"></iconify-icon>
<h3 className="font-bold text-white">MINE</h3>
</div>
<p className="text-sm text-slate-400 mb-4 h-10">Mine Bitcoin normally when it's most profitable.</p>
<div className="text-xs font-mono text-slate-500 border-t border-white/5 pt-3">Rev = Hashprice × Hashrate - Cost</div>
</div>

<div className="p-6 rounded-xl bg-white/5 border-t-4 border-emerald-500 reveal delay-200 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-emerald-500" icon="solar:leaf-bold" width="20"></iconify-icon>
<h3 className="font-bold text-white">CARBON</h3>
</div>
<p className="text-sm text-slate-400 mb-4 h-10">Curtail &amp; generate carbon avoidance credits at $70/tonne.</p>
<div className="text-xs font-mono text-slate-500 border-t border-white/5 pt-3">Rev = LME × MW × $70/tCO₂</div>
</div>

<div className="p-6 rounded-xl bg-white/5 border-t-4 border-slate-500 reveal delay-300 opacity-60">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-slate-400" icon="solar:power-bold" width="20"></iconify-icon>
<h3 className="font-bold text-white">SHUTDOWN</h3>
</div>
<p className="text-sm text-slate-400 mb-4 h-10">Economic shutdown. No credits claimed (Additionality).</p>
<div className="text-xs font-mono text-slate-500 border-t border-white/5 pt-3">Revenue = $0</div>
</div>

<div className="p-6 rounded-xl bg-white/5 border-t-4 border-sky-500 reveal delay-300">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-sky-500" icon="solar:satellite-bold" width="20"></iconify-icon>
<h3 className="font-bold text-white">RESPONSE</h3>
</div>
<p className="text-sm text-slate-400 mb-4 h-10">Earn grid payments for curtailing during peak demand.</p>
<div className="text-xs font-mono text-slate-500 border-t border-white/5 pt-3">Rev = DR Payment × MW</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#020408] border-y border-white/5 relative overflow-hidden" id="technology">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#020408] to-[#020408]"></div>
<div className="absolute inset-0 opacity-20 bg-grid animate-grid-flow"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-24 reveal">
<h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Global Data Fusion</h2>
<p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Our AI ingests 4 million data points daily to make split-second capitalization decisions.
        </p>
</div>

<div className="relative w-full max-w-4xl mx-auto aspect-square md:aspect-[16/10] flex items-center justify-center reveal">

<div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-white/5"></div>
<div className="absolute w-[450px] h-[450px] md:w-[750px] md:h-[750px] rounded-full border border-dashed border-white/5 animate-reverse-spin"></div>

<div className="absolute w-[280px] h-[280px] md:w-[480px] md:h-[480px] rounded-full border-t border-l border-emerald-500/20 animate-spin-slow shadow-[0_0_50px_rgba(16,185,129,0.1)]"></div>

<div className="absolute w-[280px] h-[280px] md:w-[480px] md:h-[480px] rounded-full animate-scan pointer-events-none opacity-20 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(16,185,129,0.3)_360deg)] [mask-image:radial-gradient(circle,transparent_60%,black_100%)]"></div>

<div className="relative w-32 h-32 md:w-40 md:h-40 bg-[#0B1120] rounded-full border border-emerald-500/30 flex items-center justify-center z-20 shadow-[0_0_40px_rgba(16,185,129,0.2)] animate-float">
<div className="absolute inset-0 rounded-full border-2 border-emerald-500/20 border-t-emerald-500 animate-spin"></div>
<div className="text-center">
<div className="text-2xl font-bold text-white tracking-tighter">AI Core</div>
<div className="text-[10px] text-emerald-400 font-mono mt-1">PROCESSING</div>
</div>
</div>

<div className="absolute top-[5%] md:top-[0%] left-1/2 -translate-x-1/2 flex flex-col items-center group">
<div className="relative w-12 h-12 bg-[#0F172A] border border-sky-500/50 rounded-lg flex items-center justify-center mb-2 z-20 shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:scale-110 transition duration-300">
<iconify-icon className="text-sky-400" icon="solar:satellite-linear" width="24"></iconify-icon>
<div className="absolute -top-1 -right-1 w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
</div>
<div className="text-center bg-[#0B1120]/90 backdrop-blur px-3 py-1.5 rounded border border-white/10">
<div className="text-xs font-bold text-white">Satellite Infrared</div>
<div className="text-[9px] font-mono text-sky-400">THERMAL: ACTIVE</div>
</div>
</div>

<div className="absolute top-[20%] right-[10%] md:top-[15%] md:right-[20%] flex flex-col items-center group">
<div className="relative w-12 h-12 bg-[#0F172A] border border-orange-500/50 rounded-lg flex items-center justify-center mb-2 z-20 shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:scale-110 transition duration-300">
<iconify-icon className="text-orange-400" icon="solar:bolt-circle-linear" width="24"></iconify-icon>
</div>
<div className="text-center bg-[#0B1120]/90 backdrop-blur px-3 py-1.5 rounded border border-white/10">
<div className="text-xs font-bold text-white">Grid LMP</div>
<div className="text-[9px] font-mono text-orange-400">$24.50/MWh</div>
</div>
</div>

<div className="absolute bottom-[20%] right-[10%] md:bottom-[15%] md:right-[20%] flex flex-col items-center group">
<div className="relative w-12 h-12 bg-[#0F172A] border border-yellow-500/50 rounded-lg flex items-center justify-center mb-2 z-20 shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:scale-110 transition duration-300">
<iconify-icon className="text-yellow-400" icon="solar:bitcoin-circle-linear" width="24"></iconify-icon>
</div>
<div className="text-center bg-[#0B1120]/90 backdrop-blur px-3 py-1.5 rounded border border-white/10">
<div className="text-xs font-bold text-white">Bitcoin Net</div>
<div className="text-[9px] font-mono text-yellow-400">650 EH/s</div>
</div>
</div>

<div className="absolute bottom-[20%] left-[10%] md:bottom-[15%] md:left-[20%] flex flex-col items-center group">
<div className="relative w-12 h-12 bg-[#0F172A] border border-purple-500/50 rounded-lg flex items-center justify-center mb-2 z-20 shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:scale-110 transition duration-300">
<iconify-icon className="text-purple-400" icon="solar:cloud-sun-linear" width="24"></iconify-icon>
</div>
<div className="text-center bg-[#0B1120]/90 backdrop-blur px-3 py-1.5 rounded border border-white/10">
<div className="text-xs font-bold text-white">Pressure/Temp</div>
<div className="text-[9px] font-mono text-purple-400">1013 hPa</div>
</div>
</div>

<div className="absolute top-[20%] left-[10%] md:top-[15%] md:left-[20%] flex flex-col items-center group">
<div className="relative w-12 h-12 bg-[#0F172A] border border-pink-500/50 rounded-lg flex items-center justify-center mb-2 z-20 shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:scale-110 transition duration-300">
<iconify-icon className="text-pink-400" icon="solar:graph-new-up-linear" width="24"></iconify-icon>
</div>
<div className="text-center bg-[#0B1120]/90 backdrop-blur px-3 py-1.5 rounded border border-white/10">
<div className="text-xs font-bold text-white">Congestion</div>
<div className="text-[9px] font-mono text-pink-400">LOAD: HIGH</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0B1120] border-y border-white/5">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How you earn.</h2>
<p className="text-slate-400">Real numbers from a 40MW fleet.</p>
</div>
<div className="bg-white/5 border border-white/10 rounded-2xl p-8 reveal">
<div className="mb-8 space-y-6">

<div>
<div className="flex justify-between text-sm mb-2 text-slate-400">
<span>Pure Mining Revenue (24h)</span>
<span>$34,381</span>
</div>
<div className="h-4 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-orange-500 w-[85%]"></div>
</div>
</div>

<div>
<div className="flex justify-between text-sm mb-2 text-white font-bold">
<span>Carbon Mine Optimized (24h)</span>
<span className="text-emerald-400">$39,749</span>
</div>
<div className="h-4 bg-white/10 rounded-full overflow-hidden relative">
<div className="absolute top-0 left-0 h-full bg-emerald-500 w-[98%]"></div>
<div className="absolute top-0 left-0 h-full bg-orange-500 w-[85%] opacity-50"></div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 border-y border-white/10">
<div className="text-center">
<div className="text-2xl font-bold text-emerald-400 font-mono">+$5,368</div>
<div className="text-xs text-slate-500 uppercase">Daily Uplift</div>
</div>
<div className="text-center border-l border-white/5">
<div className="text-2xl font-bold text-emerald-400 font-mono">+$161K</div>
<div className="text-xs text-slate-500 uppercase">Monthly Uplift</div>
</div>
<div className="text-center border-l border-white/5">
<div className="text-2xl font-bold text-emerald-400 font-mono">+$1.9M</div>
<div className="text-xs text-slate-500 uppercase">Annual Uplift</div>
</div>
</div>
<div className="text-center mt-6 text-sm text-slate-400">
<strong className="text-white">Performance-based pricing:</strong> You only pay when we make you more money.
        </div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl font-bold text-white mb-4">Carbon avoidance credits, explained.</h2>
<p className="text-slate-400">You don't need to be an expert. Here's how it works.</p>
</div>
<div className="space-y-12 relative">
<div className="absolute left-8 top-0 bottom-0 w-px bg-white/10 md:left-1/2"></div>

<div className="relative flex flex-col md:flex-row gap-8 items-center reveal">
<div className="md:w-1/2 text-right pr-12 hidden md:block">
<h3 className="text-xl font-bold text-white">Your farm is mining</h3>
<p className="text-slate-400 text-sm mt-2">Business as usual. Your fleet is profitable and connected to the grid.</p>
</div>
<div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-[#0F172A] border border-orange-500 rounded-full flex items-center justify-center z-10">
<span className="text-orange-500 font-bold text-xs">1</span>
</div>
<div className="pl-20 md:pl-12 md:w-1/2">
<div className="md:hidden mb-2">
<h3 className="text-xl font-bold text-white">Your farm is mining</h3>
<p className="text-slate-400 text-sm">Business as usual.</p>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 items-center reveal">
<div className="pl-20 md:pl-0 md:pr-12 md:w-1/2 md:text-right">
<div className="hidden md:block">
<h3 className="text-xl font-bold text-white">AI detects emissions</h3>
<p className="text-slate-400 text-sm mt-2">Our model sees a spike in grid marginal emissions (LME).</p>
</div>
</div>
<div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-[#0F172A] border border-white/30 rounded-full flex items-center justify-center z-10">
<span className="text-white font-bold text-xs">2</span>
</div>
<div className="pl-20 md:pl-12 md:w-1/2">
<p className="text-slate-400 text-sm md:hidden">Our model sees a spike in grid marginal emissions (LME).</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 items-center reveal">
<div className="md:w-1/2 text-right pr-12 hidden md:block">
<h3 className="text-xl font-bold text-white">Automatic Curtailment</h3>
<p className="text-slate-400 text-sm mt-2">Hashboards power down. Grid load drops instantly.</p>
</div>
<div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-[#0F172A] border border-emerald-500 rounded-full flex items-center justify-center z-10">
<span className="text-emerald-500 font-bold text-xs">3</span>
</div>
<div className="pl-20 md:pl-12 md:w-1/2">
<div className="md:hidden">
<h3 className="text-xl font-bold text-white">Automatic Curtailment</h3>
<p className="text-slate-400 text-sm">Hashboards power down. Grid load drops.</p>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 items-center reveal">
<div className="pl-20 md:pl-0 md:pr-12 md:w-1/2 md:text-right">
<div className="hidden md:block">
<h3 className="text-xl font-bold text-white">You get paid</h3>
<p className="text-slate-400 text-sm mt-2">Credits generated &amp; monetized at $70/tonne CO₂.</p>
</div>
</div>
<div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(16,185,129,0.5)]">
<iconify-icon className="text-white" icon="solar:check-bold"></iconify-icon>
</div>
<div className="pl-20 md:pl-12 md:w-1/2">
<p className="text-slate-400 text-sm md:hidden">Credits monetized at $70/tonne CO₂.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0B1120] border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative reveal" id="globe-container">

<div className="aspect-square w-full max-w-md mx-auto relative bg-[#0B1120] rounded-full overflow-hidden border border-white/10 shadow-2xl shadow-emerald-900/20">
<canvas className="w-full h-full opacity-80 mix-blend-screen" id="globe-canvas"></canvas>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none"></div>
<div className="absolute inset-0 border-t-2 border-emerald-500/50 rounded-full animate-[spin_8s_linear_infinite] shadow-[0_0_30px_rgba(16,185,129,0.3)]"></div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur px-4 py-2 rounded-full border border-emerald-500/30 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-mono text-emerald-400 font-bold tracking-widest">SATELLITE LIVE</span>
</div>
</div>
</div>

<div className="reveal delay-200">
<h2 className="text-3xl font-bold text-white mb-6">Verified from space.</h2>
<p className="text-slate-400 text-lg mb-8">
            The #1 concern with carbon credits: are they real? We use satellite thermal imaging to independently verify that mining farms are genuinely curtailed. No hidden generators.
          </p>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5">
<span className="text-white font-medium">Layer 1: Grid Smart Meter</span>
<iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5">
<span className="text-white font-medium">Layer 2: Satellite Thermal</span>
<iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5">
<span className="text-white font-medium">Layer 3: On-Chain dMRV</span>
<iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="miners">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl font-bold text-white mb-6 reveal">Plug in. Start earning.</h2>
<p className="text-slate-400 mb-12 reveal">Compatible with Foreman, Luxor, Braiins, and custom APIs.</p>
<div className="grid md:grid-cols-3 gap-8 text-left">
<div className="reveal delay-100">
<div className="text-6xl font-bold text-white/5 mb-4">01</div>
<h3 className="text-lg font-bold text-white mb-2">Connect Fleet API</h3>
<p className="text-sm text-slate-400">Integration takes 15 minutes via API key. No hardware needed.</p>
</div>
<div className="reveal delay-200">
<div className="text-6xl font-bold text-white/5 mb-4">02</div>
<h3 className="text-lg font-bold text-white mb-2">Set Preferences</h3>
<p className="text-sm text-slate-400">Define risk tolerance and manual override hours.</p>
</div>
<div className="reveal delay-300">
<div className="text-6xl font-bold text-white/5 mb-4">03</div>
<h3 className="text-lg font-bold text-white mb-2">Go Live</h3>
<p className="text-sm text-slate-400">AI optimizes immediately. Revenue uplift begins day 1.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-gradient-to-b from-[#0B1120] to-emerald-900/20" id="apply">
<div className="max-w-4xl mx-auto px-6 text-center reveal">
<h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Institutional Carbon Capital is Waiting.</h2>
<p className="text-lg text-slate-300 mb-12">We bridge the gap between US Bitcoin miners and global carbon mandates. Earn 15% more by converting dirty grid events into premium payouts.</p>
<form className="max-w-md mx-auto space-y-4 text-left">
<div>
<label className="block text-xs font-medium text-slate-400 mb-1">Email Address</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition" placeholder="you@miningfirm.com" type="email"/>
</div>
<button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-lg transition shadow-xl shadow-emerald-900/30" type="button">
          Enroll Your Facility
        </button>
</form>
</div>
</section>

<footer className="bg-black border-t border-white/10 py-12">
<div className="max-w-7xl mx-auto px-6 text-center text-xs text-slate-600">
      © 2026 Integrity Farm Technologies, Inc. Patent Pending: Decentralized MRV Protocol.
    </div>
</footer>



    </>
  );
}
