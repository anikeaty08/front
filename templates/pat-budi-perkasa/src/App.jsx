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



      // Init Icons
      lucide.createIcons();

      // Budget Slider
      const range = document.getElementById('budgetRange');
      const valueDisplay = document.getElementById('budgetValue');
      range.addEventListener('input', (e) => {
          let val = parseInt(e.target.value);
          valueDisplay.textContent = val >= 50000 ? '$50k+' : '$' + (val / 1000) + 'k';
      });

      // Auto-expand textarea
      const tx = document.getElementById('message');
      tx.addEventListener('input', function() {
          this.style.height = 'auto';
          this.style.height = (this.scrollHeight) + 'px';
      });

      // ----------------------------------------------------
      // 3D Starfield Engine & Interactive Particle Logic
      // ----------------------------------------------------
      const canvas = document.getElementById('starfield');
      const ctx = canvas.getContext('2d');
      const heroContainer = document.getElementById('hero-content');
      const cursor = document.getElementById('cursor-particle');

      let width, height;
      let stars = [];
      let scrollY = 0;
      let speed = 0;
      let targetSpeed = 0;
      let mouseX = 0;
      let mouseY = 0;

      // Configuration
      const STAR_COUNT = 800;
      const FOV = 400;

      function resize() {
          width = canvas.width = window.innerWidth;
          height = canvas.height = window.innerHeight;
          if (mouseX === 0) {
              mouseX = width / 2;
              mouseY = height / 2;
          }
      }

      class Star {
          constructor() {
              this.x = (Math.random() - 0.5) * width * 2;
              this.y = (Math.random() - 0.5) * height * 2;
              this.z = Math.random() * FOV;
              this.pz = this.z;
              this.size = Math.random() * 0.5 + 0.5;
          }

          update() {
              // Move star towards camera
              let movement = 0.5 + (speed * 10);
              this.z -= movement;

              // Reset if it passes camera
              if (this.z <= 1) {
                  this.z = FOV;
                  this.x = (Math.random() - 0.5) * width * 2;
                  this.y = (Math.random() - 0.5) * height * 2;
                  this.pz = FOV;
              }
          }

          draw() {
              let scale = FOV / this.z;
              let x2d = this.x * scale;
              let y2d = this.y * scale;

              let trailZ = this.z + (speed * 20) + 2;
              let scaleTrail = FOV / trailZ;
              let x2dTrail = this.x * scaleTrail;
              let y2dTrail = this.y * scaleTrail;

              let alpha = (1 - this.z / FOV);

              ctx.beginPath();
              ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.8})`;
              ctx.lineWidth = this.size * scale;
              ctx.moveTo(x2dTrail, y2dTrail);
              ctx.lineTo(x2d, y2d);
              ctx.stroke();

              this.pz = this.z;
          }
      }

      function initStars() {
          stars = [];
          for(let i = 0; i < STAR_COUNT; i++) {
              stars.push(new Star());
          }
      }

      function animate() {
          // Clear Canvas
          ctx.setTransform(1, 0, 0, 1, 0, 0);
          ctx.fillStyle = '#050505';
          ctx.fillRect(0, 0, width, height);
          ctx.fillStyle = 'rgba(5, 5, 5, 0.4)';
          ctx.fillRect(0, 0, width, height);

          // Parallax Interaction (Interactive Starfield)
          // Shifts the perspective center based on mouse
          const cx = width / 2 + (width / 2 - mouseX) * 0.05;
          const cy = height / 2 + (height / 2 - mouseY) * 0.05;
          ctx.translate(cx, cy);

          speed += (targetSpeed - speed) * 0.1;

          for (let i = 0; i < stars.length; i++) {
              stars[i].update();
              stars[i].draw();
          }

          requestAnimationFrame(animate);
      }

      // Mouse Event for Cursor & Parallax
      window.addEventListener('mousemove', (e) => {
          mouseX = e.clientX;
          mouseY = e.clientY;
          if (cursor) {
              cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
              cursor.style.opacity = '1';
          }
      });

      // Scroll Event for Warp Speed
      window.addEventListener('scroll', () => {
          scrollY = window.scrollY;

          if (scrollY < 1000) {
              targetSpeed = Math.min(scrollY / 500, 2);
          } else {
              targetSpeed = 0.1;
          }

          const perspectiveLimit = 800;
          if (scrollY < perspectiveLimit) {
              const progress = scrollY / perspectiveLimit;
              const zMove = scrollY * 2.5;
              const opacity = Math.max(0, 1 - (progress * 1.5));
              const blur = progress * 10;

              heroContainer.style.transform = `translate3d(0, 0, ${zMove}px)`;
              heroContainer.style.opacity = opacity;
              heroContainer.style.filter = `blur(${blur}px)`;
              heroContainer.style.pointerEvents = opacity < 0.1 ? 'none' : 'auto';
          }
      });

      window.addEventListener('resize', () => {
          resize();
          initStars();
      });

      // Start
      resize();
      initStars();
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
      

<div className="fixed w-6 h-6 bg-indigo-500 rounded-full blur-[4px] pointer-events-none z-[100] mix-blend-screen transition-opacity duration-300 opacity-0 hidden md:block" id="cursor-particle" style={{willChange: 'transform', left: '0', top: '0', transform: 'translate(-50%, -50%)'}}></div>

<canvas className="fixed inset-0 w-full h-full z-0 pointer-events-auto" id="starfield"></canvas>

<nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 transition-all duration-500" id="navbar">
<div className="flex items-center gap-2 mix-blend-difference">
<div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center rotate-45">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
</div>
<span className="text-sm font-semibold tracking-tight uppercase text-white">
          Pat Budi Perkasa
        </span>
</div>
<div className="hidden md:flex gap-8 text-xs font-medium text-zinc-400 uppercase tracking-widest mix-blend-exclusion">
<a className="hover:text-white transition-colors" href="#about">Agency</a>
<a className="hover:text-white transition-colors" href="#services">
          Services
        </a>
<a className="hover:text-white transition-colors" href="#work">Work</a>
</div>
<a className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all text-xs font-medium text-white" href="#contact">
<span>Start Project</span>
<i className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</a>
</nav>

<div className="perspective-container" id="hero-container">
<div className="hero-text-layer text-center px-4" id="hero-content">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-md mb-8">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
</span>
<span className="text-[10px] text-zinc-300 font-medium tracking-wide uppercase">
            System Online
          </span>
</div>
<h1 className="text-6xl md:text-9xl font-semibold tracking-tighter text-white mb-6">
          Digital
          <span className="text-zinc-500">Reality.</span>
</h1>
<p className="text-sm md:text-lg text-zinc-400 max-w-xl mx-auto font-light leading-relaxed mb-10">
          Architecting high-performance digital ecosystems.
          <br className="hidden md:block"/>
          Specializing in immersive web experiences and bespoke code.
        </p>
<div className="flex flex-col md:flex-row gap-4 justify-center pointer-events-auto">
<button className="px-8 py-3 bg-white text-black rounded-full font-medium text-xs hover:bg-zinc-200 transition-colors tracking-wide" onclick="document.getElementById('about').scrollIntoView({behavior: 'smooth'})">
            Explore Ecosystem
          </button>
</div>
</div>
</div>


<div style={{height: '100vh'}}></div>

<main className="relative z-20 bg-[#050505] border-t border-white/5 shadow-[0_-50px_100px_rgba(0,0,0,1)]">

<section className="py-32 px-6 md:px-12 relative" id="about">
<div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-start">
<div className="md:col-span-7">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8">
              Not just interfaces.
              <br/>
              Digital infrastructures.
            </h2>
<p className="text-zinc-400 text-lg leading-relaxed mb-12 font-light">
              We move beyond traditional web design. We construct digital
              environments that respond, adapt, and perform. Bridging the gap
              between raw code and human experience.
            </p>
<div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-12">
<div>
<span className="block text-4xl font-semibold text-white tracking-tighter">
                  0.01s
                </span>
<span className="text-xs text-zinc-600 uppercase tracking-widest mt-2 block">
                  Latency
                </span>
</div>
<div>
<span className="block text-4xl font-semibold text-white tracking-tighter">
                  99.9%
                </span>
<span className="text-xs text-zinc-600 uppercase tracking-widest mt-2 block">
                  Uptime
                </span>
</div>
</div>
</div>
<div className="md:col-span-5 space-y-4 pt-4">
<div className="glass-panel p-8 rounded-xl border-l-2 border-l-indigo-500">
<i className="w-6 h-6 text-white mb-4" data-lucide="zap"></i>
<h3 className="text-lg font-medium text-white">Performance First</h3>
<p className="text-sm text-zinc-500 mt-2">
                Optimized for speed. Every millisecond counts in retention.
              </p>
</div>
<div className="glass-panel p-8 rounded-xl border-l-2 border-l-zinc-700">
<i className="w-6 h-6 text-white mb-4" data-lucide="box"></i>
<h3 className="text-lg font-medium text-white">
                Modular Architecture
              </h3>
<p className="text-sm text-zinc-500 mt-2">
                Scalable components built for future expansion.
              </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 border-t border-white/5 bg-zinc-900/20" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-20">
<span className="text-indigo-400 text-xs font-mono mb-4 block">
              /// SERVICES_MANIFEST
            </span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight">
              Capabilities
            </h2>
</div>
<div className="grid md:grid-cols-3 gap-1">

<div className="group p-10 bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-5 h-5 text-zinc-500" data-lucide="arrow-up-right"></i>
</div>
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-8 border border-indigo-500/20 text-indigo-400">
<i className="w-5 h-5" data-lucide="layout-grid"></i>
</div>
<h3 className="text-lg font-medium mb-3">Wix Studio</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-8">
                Rapid deployment of high-fidelity visual experiences. Utilizing
                Velo for custom logic injection.
              </p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] px-2 py-1 bg-white/5 rounded text-zinc-400">
                  CMS
                </span>
<span className="text-[10px] px-2 py-1 bg-white/5 rounded text-zinc-400">
                  Animations
                </span>
</div>
</div>

<div className="group p-10 bg-white/[0.02] hover:bg-white/[0.04] border-y border-r border-white/5 md:border-y md:border-x transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-5 h-5 text-zinc-500" data-lucide="arrow-up-right"></i>
</div>
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-8 border border-blue-500/20 text-blue-400">
<i className="w-5 h-5" data-lucide="terminal"></i>
</div>
<h3 className="text-lg font-medium mb-3">Full Stack</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-8">
                React, Node.js, and Tailwind implementations for complex web
                applications and SaaS products.
              </p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] px-2 py-1 bg-white/5 rounded text-zinc-400">
                  Next.js
                </span>
<span className="text-[10px] px-2 py-1 bg-white/5 rounded text-zinc-400">
                  Postgres
                </span>
</div>
</div>

<div className="group p-10 bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-5 h-5 text-zinc-500" data-lucide="arrow-up-right"></i>
</div>
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-8 border border-emerald-500/20 text-emerald-400">
<i className="w-5 h-5" data-lucide="database"></i>
</div>
<h3 className="text-lg font-medium mb-3">WordPress</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-8">
                Headless or traditional setups. Custom theme development
                optimized for SEO and Core Web Vitals.
              </p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] px-2 py-1 bg-white/5 rounded text-zinc-400">
                  PHP
                </span>
<span className="text-[10px] px-2 py-1 bg-white/5 rounded text-zinc-400">
                  ACF
                </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 border-t border-white/5" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight">
              Selected Output
            </h2>
<a className="text-xs text-zinc-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5" href="#">
              View Archive
            </a>
</div>
<div className="space-y-20">

<div className="group grid md:grid-cols-2 gap-8 items-center cursor-pointer">
<div className="order-2 md:order-1">
<span className="text-indigo-400 text-xs font-mono mb-2 block">
                  01
                </span>
<h3 className="text-2xl font-medium mb-2 group-hover:text-indigo-300 transition-colors">
                  Vanguard Finance
                </h3>
<p className="text-zinc-500 text-sm mb-6 max-w-sm">
                  A real-time trading dashboard built with Next.js and
                  WebSockets. Featuring sub-millisecond data updates.
                </p>
<ul className="flex gap-4 text-xs text-zinc-600">
<li>React</li>
<li>D3.js</li>
<li>Socket.io</li>
</ul>
</div>
<div className="order-1 md:order-2 aspect-[4/3] bg-zinc-900 rounded border border-white/10 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-full h-full flex items-center justify-center text-zinc-800 group-hover:scale-105 transition-transform duration-700">
<i className="w-16 h-16 stroke-[1]" data-lucide="bar-chart-2"></i>
</div>
</div>
</div>

<div className="group grid md:grid-cols-2 gap-8 items-center cursor-pointer">
<div className="order-2 md:order-1 md:text-right">
<div className="aspect-[4/3] bg-zinc-900 rounded border border-white/10 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-full h-full flex items-center justify-center text-zinc-800 group-hover:scale-105 transition-transform duration-700">
<i className="w-16 h-16 stroke-[1]" data-lucide="image"></i>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<span className="text-emerald-400 text-xs font-mono mb-2 block">
                  02
                </span>
<h3 className="text-2xl font-medium mb-2 group-hover:text-emerald-300 transition-colors">
                  Lumina Gallery
                </h3>
<p className="text-zinc-500 text-sm mb-6 max-w-sm">
                  Immersive photography portfolio designed in Wix Studio. Smooth
                  WebGL transitions and lazy loading.
                </p>
<ul className="flex gap-4 text-xs text-zinc-600">
<li>Wix Studio</li>
<li>WebGL</li>
<li>GSAP</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 border-t border-white/5 bg-gradient-to-b from-[#050505] to-[#0a0a0a]" id="contact">
<div className="max-w-xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
              Initialize Collaboration
            </h2>
<p className="text-zinc-500 text-sm">
              Fill out the parameters below to start the sequence.
            </p>
</div>
<form className="space-y-8">
<div className="grid grid-cols-2 gap-6">
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-zinc-800 py-3 text-sm focus:outline-none focus:border-white transition-colors placeholder-transparent text-white" id="name" placeholder="Name" required="" type="text"/>
<label className="absolute left-0 top-3 text-zinc-500 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-zinc-400 peer-valid:-top-2 peer-valid:text-xs peer-valid:text-zinc-400" htmlFor="name">
                  Name
                </label>
</div>
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-zinc-800 py-3 text-sm focus:outline-none focus:border-white transition-colors placeholder-transparent text-white" id="email" placeholder="Email" required="" type="email"/>
<label className="absolute left-0 top-3 text-zinc-500 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-zinc-400 peer-valid:-top-2 peer-valid:text-xs peer-valid:text-zinc-400" htmlFor="email">
                  Email
                </label>
</div>
</div>
<div className="space-y-4 pt-4">
<div className="flex justify-between text-xs text-zinc-500 uppercase tracking-widest">
<label>Budget Range</label>
<span id="budgetValue">$5k</span>
</div>
<input className="w-full" id="budgetRange" max="50000" min="1000" step="1000" type="range" value="5000"/>
</div>
<div className="group relative pt-4">
<textarea className="peer w-full bg-transparent border-b border-zinc-800 py-3 text-sm focus:outline-none focus:border-white transition-colors placeholder-transparent text-white resize-none" id="message" placeholder="Brief" required="" rows="1"></textarea>
<label className="absolute left-0 top-7 text-zinc-500 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:top-7 peer-focus:top-2 peer-focus:text-xs peer-focus:text-zinc-400 peer-valid:top-2 peer-valid:text-xs peer-valid:text-zinc-400" htmlFor="message">
                Project Brief
              </label>
</div>
<div className="flex items-center gap-3 pt-4">
<input className="custom-checkbox appearance-none h-3.5 w-3.5 border border-zinc-700 rounded bg-transparent checked:bg-white checked:border-white focus:outline-none cursor-pointer transition-colors" id="terms" type="checkbox"/>
<label className="text-xs text-zinc-500 select-none cursor-pointer" htmlFor="terms">
                Confidentiality Agreement Accepted
              </label>
</div>
<button className="w-full glass-panel text-white font-medium py-4 rounded hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 mt-8 text-sm tracking-wide" type="button">
              Transmit Request
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</form>
</div>
</section>
<footer className="py-8 border-t border-white/5 text-center">
<p className="text-[10px] text-zinc-700 uppercase tracking-widest">
          © 2024 Pat Budi Perkasa. Systems Operational.
        </p>
</footer>
</main>


    </>
  );
}
