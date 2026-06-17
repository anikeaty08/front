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



        // Budget Logic
        const range = document.getElementById('budgetRange');
        const valueDisplay = document.getElementById('budgetValue');
        range.addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            valueDisplay.textContent = val >= 20000 ? '$20,000+' : '$' + val.toLocaleString();
        });

        // ----------------------------------------------------
        // Starfield & Parallax Engine
        // ----------------------------------------------------
        const canvas = document.getElementById('starfield');
        const ctx = canvas.getContext('2d');
        const heroContainer = document.getElementById('hero-content');
        const cursor = document.getElementById('cursor-particle');

        let width, height;
        let stars = [];
        let scrollY = 0;
        let mouseX = 0, mouseY = 0;

        // Config
        const STAR_COUNT = 600;
        const SPEED_BASE = 0.05;

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            if (mouseX === 0) { mouseX = width / 2; mouseY = height / 2; }
        }

        class Star {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 1.5;
                this.blinkSpeed = Math.random() * 0.05 + 0.01;
                this.alpha = Math.random();
                this.direction = Math.random() > 0.5 ? 1 : -1;
            }

            update() {
                // Subtle drift based on mouse
                const dx = (mouseX - width/2) * 0.005;
                const dy = (mouseY - height/2) * 0.005;
                
                this.x -= dx * (this.size * 0.2);
                this.y -= dy * (this.size * 0.2);

                // Wrap around
                if(this.x < 0) this.x = width;
                if(this.x > width) this.x = 0;
                if(this.y < 0) this.y = height;
                if(this.y > height) this.y = 0;

                // Twinkle
                this.alpha += this.blinkSpeed * this.direction;
                if(this.alpha >= 1 || this.alpha <= 0.2) this.direction *= -1;
            }

            draw() {
                ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha * 0.8})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initStars() {
            stars = [];
            for(let i = 0; i < STAR_COUNT; i++) stars.push(new Star());
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            
            // Draw Stars
            for(let star of stars) {
                star.update();
                star.draw();
            }

            requestAnimationFrame(animate);
        }

        // Event Listeners
        window.addEventListener('resize', () => { resize(); initStars(); });
        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            // Move cursor glow
            if(cursor) {
                // Add lag for smooth effect
                const x = e.clientX;
                const y = e.clientY;
                cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
                cursor.style.opacity = '1';
            }
        });

        window.addEventListener('scroll', () => {
            scrollY = window.scrollY;
            
            // Hero Fade Out Effect
            const fadePoint = 600;
            if(scrollY < fadePoint) {
                const opacity = 1 - (scrollY / fadePoint);
                const blur = (scrollY / fadePoint) * 20;
                const scale = 1 - (scrollY / fadePoint) * 0.1;
                const yPos = scrollY * 0.5;

                heroContainer.style.opacity = opacity;
                heroContainer.style.filter = `blur(${blur}px)`;
                heroContainer.style.transform = `translate3d(0, ${yPos}px, 0) scale(${scale})`;
            }
        });

        // Initialize
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
      

<div className="fixed w-[400px] h-[400px] bg-white/[0.03] rounded-full blur-[80px] pointer-events-none z-[1] transition-opacity duration-700 opacity-0 hidden md:block" id="cursor-particle" style={{willChange: 'transform', left: '0', top: '0', transform: 'translate(-50%, -50%)'}}></div>

<canvas className="fixed inset-0 w-full h-full z-0 pointer-events-auto opacity-60" id="starfield"></canvas>

<nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 transition-all duration-500 backdrop-blur-sm bg-black/0 border-b border-white/0" id="navbar">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center backdrop-blur-md">
<span className="text-xs font-semibold text-white">M</span>
</div>
<span className="text-sm font-medium tracking-tight text-white/90">
                Mir Sojib
            </span>
</div>
<div className="hidden md:flex gap-8 text-[11px] font-medium text-zinc-400 uppercase tracking-widest bg-white/5 px-6 py-2 rounded-full border border-white/5 backdrop-blur-md">
<a className="hover:text-white transition-colors duration-300" href="#about">Profile</a>
<a className="hover:text-white transition-colors duration-300" href="#expertise">Stack</a>
<a className="hover:text-white transition-colors duration-300" href="#projects">Projects</a>
</div>
<a className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black hover:bg-zinc-200 transition-all text-xs font-medium tracking-wide" href="#contact">
<span>Contact</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</nav>

<div className="perspective-container" id="hero-container">
<div className="hero-text-layer text-center px-4 flex flex-col items-center" id="hero-content">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] text-zinc-300 font-medium tracking-wide uppercase">
                    Open for work
                </span>
</div>
<h1 className="text-7xl md:text-9xl font-semibold tracking-tighter text-white mb-6 relative z-10">
                Mir Sojib
                <span className="block text-3xl md:text-5xl text-zinc-500 font-normal tracking-tight mt-2">
                    Digital Architect
                </span>
</h1>
<p className="text-sm md:text-base text-zinc-400 max-w-lg mx-auto font-light leading-relaxed mb-10 text-center">
                Engineering high-fidelity web experiences. <br className="hidden md:block"/>
                Bridging the gap between aesthetic design and robust code.
            </p>
<div className="flex flex-col md:flex-row gap-4 justify-center pointer-events-auto">
<button className="px-6 py-3 border border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-lg font-medium text-xs transition-all tracking-wide flex items-center gap-2 group backdrop-blur-sm" onclick="document.getElementById('projects').scrollIntoView({behavior: 'smooth'})">
<iconify-icon className="text-zinc-400 group-hover:text-white transition-colors" icon="solar:code-linear" width="16"></iconify-icon>
                    View Architecture
                </button>
</div>
</div>
</div>

<div style={{height: '100vh'}}></div>

<main className="relative z-20 bg-[#050505] border-t border-white/5 shadow-[0_-100px_200px_rgba(0,0,0,1)]">

<section className="py-32 px-6 md:px-12 relative overflow-hidden" id="about">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center relative">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-8 leading-[1.1]">
                        Designing systems,<br/>
                        not just pages.
                    </h2>
<p className="text-zinc-400 text-base leading-relaxed mb-8 font-light">
                        I specialize in the intersection of technical engineering and visual design. My workflow involves constructing scalable digital environments that prioritize performance, accessibility, and user retention.
                    </p>
<div className="flex gap-12 border-t border-white/10 pt-8 mt-8">
<div>
<span className="block text-3xl font-semibold text-white tracking-tighter">3+</span>
<span className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1 block">Years Exp</span>
</div>
<div>
<span className="block text-3xl font-semibold text-white tracking-tighter">40+</span>
<span className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1 block">Deployments</span>
</div>
</div>
</div>
<div className="grid gap-4">
<div className="glass-panel p-6 rounded-lg group hover:border-white/20 transition-colors">
<iconify-icon className="text-white mb-4" icon="solar:bolt-linear" width="24"></iconify-icon>
<h3 className="text-sm font-medium text-white mb-2">Performance Optimization</h3>
<p className="text-xs text-zinc-500 leading-relaxed">
                            Implementing aggressive caching strategies and code-splitting to ensure sub-second load times.
                        </p>
</div>
<div className="glass-panel p-6 rounded-lg group hover:border-white/20 transition-colors">
<iconify-icon className="text-white mb-4" icon="solar:layers-linear" width="24"></iconify-icon>
<h3 className="text-sm font-medium text-white mb-2">Component Driven</h3>
<p className="text-xs text-zinc-500 leading-relaxed">
                            Building atomic design systems in React and Vue that scale consistently across applications.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 border-t border-white/5 bg-zinc-900/[0.15]" id="expertise">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<span className="text-zinc-500 text-[10px] font-mono mb-3 block uppercase tracking-widest">
                            /// Tech_Stack
                        </span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white">
                            Capabilities
                        </h2>
</div>
<p className="text-zinc-500 text-sm max-w-sm text-right hidden md:block">
                        A comprehensive toolkit for modern web development.
                    </p>
</div>
<div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden">

<div className="bg-[#080808] p-10 hover:bg-[#0c0c0c] transition-colors group relative">
<div className="w-10 h-10 rounded bg-indigo-500/10 flex items-center justify-center mb-8 border border-indigo-500/20 text-indigo-400">
<iconify-icon icon="solar:code-square-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-3 text-white">Frontend Engineering</h3>
<p className="text-xs text-zinc-500 leading-relaxed mb-6">
                            Advanced state management and interactive UI development using modern frameworks.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] px-2 py-1 bg-white/5 border border-white/5 rounded text-zinc-400">React</span>
<span className="text-[10px] px-2 py-1 bg-white/5 border border-white/5 rounded text-zinc-400">Next.js</span>
<span className="text-[10px] px-2 py-1 bg-white/5 border border-white/5 rounded text-zinc-400">TypeScript</span>
</div>
</div>

<div className="bg-[#080808] p-10 hover:bg-[#0c0c0c] transition-colors group relative">
<div className="w-10 h-10 rounded bg-emerald-500/10 flex items-center justify-center mb-8 border border-emerald-500/20 text-emerald-400">
<iconify-icon icon="solar:server-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-3 text-white">Backend Solutions</h3>
<p className="text-xs text-zinc-500 leading-relaxed mb-6">
                            Scalable API design and database architecture for data-intensive applications.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] px-2 py-1 bg-white/5 border border-white/5 rounded text-zinc-400">Node.js</span>
<span className="text-[10px] px-2 py-1 bg-white/5 border border-white/5 rounded text-zinc-400">PostgreSQL</span>
<span className="text-[10px] px-2 py-1 bg-white/5 border border-white/5 rounded text-zinc-400">Redis</span>
</div>
</div>

<div className="bg-[#080808] p-10 hover:bg-[#0c0c0c] transition-colors group relative">
<div className="w-10 h-10 rounded bg-rose-500/10 flex items-center justify-center mb-8 border border-rose-500/20 text-rose-400">
<iconify-icon icon="solar:figma-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-3 text-white">UX/UI Implementation</h3>
<p className="text-xs text-zinc-500 leading-relaxed mb-6">
                            Translating Figma designs into pixel-perfect, responsive HTML/CSS structures.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] px-2 py-1 bg-white/5 border border-white/5 rounded text-zinc-400">Tailwind</span>
<span className="text-[10px] px-2 py-1 bg-white/5 border border-white/5 rounded text-zinc-400">Framer Motion</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 border-t border-white/5" id="projects">
<div className="max-w-6xl mx-auto">
<div className="flex justify-between items-end mb-20">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
                        Selected Works
                    </h2>
<div className="h-px w-32 bg-white/10 hidden md:block"></div>
</div>
<div className="space-y-24">

<div className="group grid md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-7 order-2 md:order-1">
<div className="flex items-center gap-3 mb-4">
<span className="text-indigo-400 text-[10px] font-mono px-2 py-0.5 rounded border border-indigo-500/20 bg-indigo-500/10">FINTECH</span>
<span className="text-zinc-600 text-[10px]">2023</span>
</div>
<h3 className="text-2xl font-medium mb-4 text-white group-hover:text-indigo-300 transition-colors">
                                Nova Dashboard
                            </h3>
<p className="text-zinc-500 text-sm mb-8 leading-relaxed max-w-md">
                                A real-time cryptocurrency analytics platform featuring live WebSocket data feeds, interactive D3.js charts, and a highly optimized rendering engine.
                            </p>
<ul className="flex gap-6 text-xs text-zinc-400 font-mono mb-8 border-y border-white/5 py-4">
<li>React</li>
<li>Next.js</li>
<li>Turborepo</li>
</ul>
<a className="inline-flex items-center gap-2 text-xs font-medium text-white hover:opacity-70 transition-opacity" href="#">
                                View Case Study <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="md:col-span-5 order-1 md:order-2">
<div className="aspect-[4/3] rounded-lg border border-white/10 bg-zinc-900/50 overflow-hidden relative group-hover:border-white/20 transition-all">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-full h-full flex items-center justify-center text-zinc-800">
<iconify-icon className="opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 text-indigo-400" icon="solar:graph-up-linear" width="48"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="group grid md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-5 order-1">
<div className="aspect-[4/3] rounded-lg border border-white/10 bg-zinc-900/50 overflow-hidden relative group-hover:border-white/20 transition-all">
<div className="absolute inset-0 bg-gradient-to-bl from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-full h-full flex items-center justify-center text-zinc-800">
<iconify-icon className="opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 text-emerald-400" icon="solar:cart-large-linear" width="48"></iconify-icon>
</div>
</div>
</div>
<div className="md:col-span-7 order-2">
<div className="flex items-center gap-3 mb-4">
<span className="text-emerald-400 text-[10px] font-mono px-2 py-0.5 rounded border border-emerald-500/20 bg-emerald-500/10">ECOMMERCE</span>
<span className="text-zinc-600 text-[10px]">2024</span>
</div>
<h3 className="text-2xl font-medium mb-4 text-white group-hover:text-emerald-300 transition-colors">
                                Veloce Storefront
                            </h3>
<p className="text-zinc-500 text-sm mb-8 leading-relaxed max-w-md">
                                Headless Shopify implementation focusing on Core Web Vitals. Achieved a 99/100 Lighthouse score through aggressive static generation and image optimization.
                            </p>
<ul className="flex gap-6 text-xs text-zinc-400 font-mono mb-8 border-y border-white/5 py-4">
<li>Shopify Hydrogen</li>
<li>Remix</li>
<li>Tailwind</li>
</ul>
<a className="inline-flex items-center gap-2 text-xs font-medium text-white hover:opacity-70 transition-opacity" href="#">
                                View Case Study <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 border-t border-white/5 bg-gradient-to-b from-[#050505] to-[#0a0a0a]" id="contact">
<div className="max-w-lg mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tighter mb-3">
                        Start a Project
                    </h2>
<p className="text-zinc-500 text-sm">
                        Available for freelance and contract work.
                    </p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-4">
<div className="relative">
<input className="w-full bg-white/[0.03] border border-white/10 rounded p-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all" placeholder="Name" type="text"/>
</div>
<div className="relative">
<input className="w-full bg-white/[0.03] border border-white/10 rounded p-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all" placeholder="Email" type="email"/>
</div>
</div>
<div className="space-y-3 pt-2">
<div className="flex justify-between text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">
<label>Budget Estimate</label>
<span id="budgetValue">$5,000</span>
</div>
<input className="w-full" id="budgetRange" max="20000" min="1000" step="500" type="range" value="5000"/>
</div>
<div className="relative">
<textarea className="w-full bg-white/[0.03] border border-white/10 rounded p-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all resize-none" placeholder="Tell me about the project architecture..." rows="4"></textarea>
</div>
<div className="flex items-center gap-3 pt-2">
<input className="custom-checkbox" id="nda" type="checkbox"/>
<label className="text-xs text-zinc-500 select-none cursor-pointer hover:text-zinc-300 transition-colors" htmlFor="nda">
                            Request NDA before discussion
                        </label>
</div>
<button className="w-full bg-white text-black font-medium py-3.5 rounded hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-2 text-sm tracking-wide mt-4" type="button">
                        Send Request
                        <iconify-icon icon="solar:plain-linear" width="16"></iconify-icon>
</button>
</form>
</div>
</section>
<footer className="py-8 border-t border-white/5 text-center bg-[#050505] relative z-20">
<div className="flex flex-col items-center gap-4">
<div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[10px] font-bold text-zinc-500">M</div>
<p className="text-[10px] text-zinc-600 uppercase tracking-widest">
                    © 2024 Mir Sojib. All Systems Normal.
                </p>
</div>
</footer>
</main>


    </>
  );
}
