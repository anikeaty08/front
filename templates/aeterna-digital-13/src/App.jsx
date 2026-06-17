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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
void: '#020202',
surface: '#0A0A0A',
glass: 'rgba(255,255,255,0.03)',
border: 'rgba(255,255,255,0.08)',
accent: '#D4FF00', // Hyper Lime
'accent-dim': 'rgba(212, 255, 0, 0.1)',
},
letterSpacing: {
'tighter': '-0.04em',
'tight': '-0.02em',
},
animation: {
'spin-slow': 'spin 12s linear infinite',
'marquee': 'marquee 25s linear infinite',
'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();

        // 1. ADVANCED HERO CANVAS ANIMATION
        const canvas = document.getElementById('heroCanvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        const particleCount = 70; // Increased density

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
                this.size = Math.random() * 1.5 + 0.5;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;
            }
            draw() {
                ctx.fillStyle = 'rgba(255,255,255,0.4)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Initialize particles
        for(let i=0; i<particleCount; i++) particles.push(new Particle());

        // Mouse interaction
        let mouse = { x: -100, y: -100 };
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            
            // Custom cursor movement
            const dot = document.querySelector('.cursor-dot');
            const outline = document.querySelector('.cursor-outline');
            if(dot && outline) {
                dot.style.left = e.clientX + 'px';
                dot.style.top = e.clientY + 'px';
                
                // Add slight delay to outline for fluid feel
                outline.animate({
                    left: e.clientX + 'px',
                    top: e.clientY + 'px'
                }, { duration: 500, fill: "forwards" });
            }
        });

        function animate() {
            ctx.clearRect(0, 0, width, height);
            
            particles.forEach(p => {
                p.update();
                p.draw();
                
                // Draw connections
                particles.forEach(p2 => {
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx*dx + dy*dy);
                    
                    if(dist < 120) {
                        ctx.strokeStyle = `rgba(255,255,255,${0.05 - dist/2400})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                });

                // Mouse connections
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < 200) {
                    ctx.strokeStyle = `rgba(212, 255, 0, ${0.2 - dist/1000})`; // Accent color
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            });
            requestAnimationFrame(animate);
        }
        animate();


        // 2. SPOTLIGHT EFFECT LOGIC
        const cards = document.querySelectorAll('.spotlight-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--x', `${x}px`);
                card.style.setProperty('--y', `${y}px`);
            });
        });

        // 3. WORK SECTION IMAGE FOLLOW
        const workItems = document.querySelectorAll('.work-item');
        const hoverImage = document.getElementById('hoverImage');

        workItems.forEach(item => {
            item.addEventListener('mousemove', (e) => {
                const imgUrl = item.getAttribute('data-image');
                if(hoverImage.src !== imgUrl) hoverImage.src = imgUrl;
                
                hoverImage.classList.add('active');
                
                // Offset image slightly from cursor
                const x = e.clientX;
                const y = e.clientY;
                
                // Use transform for performance
                hoverImage.style.left = `${x}px`;
                hoverImage.style.top = `${y}px`;
            });

            item.addEventListener('mouseleave', () => {
                hoverImage.classList.remove('active');
            });
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
      

<div className="cursor-dot hidden md:block"></div>
<div className="cursor-outline hidden md:block"></div>
<div className="noise-overlay"></div>

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 pointer-events-none">
<div className="max-w-[1440px] mx-auto flex justify-between items-start">

<div className="pointer-events-auto mix-blend-difference">
<a className="block group" href="#">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-white group-hover:bg-accent transition-colors duration-300"></div>
<span className="font-bold text-white tracking-tighter text-lg leading-none">AETERNA</span>
</div>
<span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest pl-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -mt-1 block">Digital Foundry</span>
</a>
</div>

<div className="pointer-events-auto bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 rounded-full p-1.5 flex items-center gap-1 shadow-2xl transition-transform hover:scale-[1.02]">
<a className="px-5 py-2 rounded-full text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all" href="#work">Work</a>
<a className="px-5 py-2 rounded-full text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all" href="#protocol">Protocol</a>
<a className="px-5 py-2 rounded-full text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all" href="#pricing">Plans</a>
<a className="px-5 py-2 rounded-full text-xs font-medium bg-white text-black hover:bg-accent transition-colors ml-1" href="#contact">
                    Start Project
                </a>
</div>

<div className="hidden md:flex flex-col items-end pointer-events-auto mix-blend-difference">
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
</span>
<span className="font-mono text-xs text-white">NYC <span className="text-gray-500">14:02 PM</span></span>
</div>
</div>
</div>
</nav>
<div className="main-content">

<section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-void">

<canvas className="absolute inset-0 w-full h-full z-0 opacity-80" id="heroCanvas"></canvas>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,255,0,0.03),transparent_60%)] z-0 pointer-events-none"></div>

<div className="relative z-10 w-full max-w-[1440px] px-6 pt-20">
<div className="flex flex-col items-center text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in-up">
<span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
<span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-300">Accepting New Clients 2024</span>
</div>

<h1 className="text-[13vw] leading-[0.8] font-semibold text-white tracking-tighter uppercase mix-blend-difference relative select-none">
<span className="block hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-white hover:to-gray-500 transition-all duration-500 cursor-none">Designing</span>
<span className="block text-gray-600 hover:text-white transition-colors duration-700">The Void</span>
</h1>

<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 md:mt-20 items-start text-left border-t border-white/10 pt-8">
<div className="hidden md:block">
<p className="font-mono text-xs text-gray-500">[ SYSTEM_READY ]</p>
</div>
<div className="md:col-span-1">
<p className="text-base text-gray-400 font-light leading-relaxed">
                                We engineer high-performance digital experiences for forward-thinking brands. Merging brutalist aesthetics with microscopic precision.
                            </p>
</div>
<div className="flex justify-end">
<button className="group relative px-6 py-3 border border-white/20 hover:border-accent transition-colors duration-300">
<span className="font-mono text-xs uppercase tracking-widest text-white group-hover:text-accent flex items-center gap-3">
                                    Explore Works <i className="w-3 h-3 group-hover:rotate-45 transition-transform" data-lucide="arrow-down-right"></i>
</span>
</button>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full border-t border-white/10 py-3 bg-black/50 backdrop-blur-sm overflow-hidden flex z-20">
<div className="animate-marquee whitespace-nowrap flex gap-12 items-center">
<span className="font-mono text-xs text-gray-500 uppercase">Latest Drop: Carbon DAO v2</span>
<span className="w-1 h-1 bg-accent rounded-full"></span>
<span className="font-mono text-xs text-gray-500 uppercase">Awwwards SOTD</span>
<span className="w-1 h-1 bg-accent rounded-full"></span>
<span className="font-mono text-xs text-gray-500 uppercase">FWA Winner</span>
<span className="w-1 h-1 bg-accent rounded-full"></span>
<span className="font-mono text-xs text-gray-500 uppercase">WebGL Index</span>
<span className="w-1 h-1 bg-accent rounded-full"></span>
<span className="font-mono text-xs text-gray-500 uppercase">Latest Drop: Carbon DAO v2</span>
<span className="w-1 h-1 bg-accent rounded-full"></span>
<span className="font-mono text-xs text-gray-500 uppercase">Awwwards SOTD</span>
<span className="w-1 h-1 bg-accent rounded-full"></span>
<span className="font-mono text-xs text-gray-500 uppercase">FWA Winner</span>
<span className="w-1 h-1 bg-accent rounded-full"></span>
<span className="font-mono text-xs text-gray-500 uppercase">WebGL Index</span>
</div>
</div>
</section>

<section className="py-24 border-b border-white/10 bg-[#050505] relative overflow-hidden">
<div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
<div className="max-w-[1440px] mx-auto px-6 relative z-10">
<p className="font-mono text-[10px] text-gray-600 mb-12 uppercase tracking-[0.2em]">Trusted Ecosystem</p>
<div className="grid grid-cols-2 md:grid-cols-4 border-l border-t border-white/10">

<div className="spotlight-card border-r border-b border-white/10 h-32 flex items-center justify-center group cursor-crosshair bg-void transition-colors hover:bg-[#080808]">
<svg className="w-24 h-auto text-gray-600 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 100 25">
<path d="M10,20 L20,5 L30,20 L40,5 M60,5 V20 M70,5 L90,20 M90,5 L70,20"></path>
</svg>
</div>

<div className="spotlight-card border-r border-b border-white/10 h-32 flex items-center justify-center group cursor-crosshair bg-void transition-colors hover:bg-[#080808]">
<svg className="w-24 h-auto text-gray-600 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 100 25">
<circle cx="20" cy="12.5" r="8"></circle> <rect height="15" width="15" x="40" y="5"></rect> <rect height="15" width="15" x="70" y="5"></rect>
</svg>
</div>

<div className="spotlight-card border-r border-b border-white/10 h-32 flex items-center justify-center group cursor-crosshair bg-void transition-colors hover:bg-[#080808]">
<svg className="w-24 h-auto text-gray-600 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 100 25">
<path d="M10,12.5 H30 M20,5 V20 M50,12.5 H80"></path>
</svg>
</div>

<div className="spotlight-card border-r border-b border-white/10 h-32 flex items-center justify-center group cursor-crosshair bg-void transition-colors hover:bg-[#080808]">
<svg className="w-24 h-auto text-gray-600 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 100 25">
<path d="M10,20 Q25,5 40,20 T70,20 T100,20"></path>
</svg>
</div>
</div>
</div>
</section>

<section className="py-32 border-b border-white/10 bg-void relative" id="protocol">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-4 flex flex-col justify-between h-full">
<div>
<h2 className="text-6xl font-medium tracking-tighter text-white mb-6">The<br/><span className="text-gray-600">Protocol</span></h2>
<p className="text-sm text-gray-400 max-w-xs leading-relaxed">
                                We don't just design; we architect systems. Our proprietary stack ensures pixel-perfect translation from Figma to Production.
                            </p>
</div>
<div className="mt-12 lg:mt-0">
<div className="font-mono text-xs text-accent mb-2">&gt; INITIALIZING_STACK...</div>
<div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-accent w-2/3 animate-pulse"></div>
</div>
</div>
</div>

<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="spotlight-card bg-surface border border-white/10 p-8 rounded-xl h-[400px] flex flex-col group relative perspective-1000">
<div className="absolute top-4 right-4 p-2 bg-white/5 rounded-lg border border-white/5">
<i className="w-5 h-5 text-gray-400" data-lucide="cpu"></i>
</div>
<h3 className="text-2xl text-white font-medium mb-2">System Architecture</h3>
<p className="text-xs text-gray-500 font-mono mb-8">REACT / NEXT.JS / WEBGL</p>

<div className="flex-1 bg-[#050505] rounded border border-white/5 p-4 font-mono text-[10px] text-gray-400 overflow-hidden shadow-inner group-hover:border-accent/20 transition-colors">
<div className="flex gap-1.5 mb-3">
<div className="w-2 h-2 rounded-full bg-red-500/20"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
<div className="w-2 h-2 rounded-full bg-green-500/20"></div>
</div>
<span className="text-purple-400">export function</span> <span className="text-blue-400">Render</span>() {<br/>
                                  <span className="text-purple-400">const</span> velocity = <span className="text-orange-300">useMotion</span>();<br/>
                                  <span className="text-gray-500">// Calculating physics...</span><br/>
                                  <span className="text-purple-400">return</span> (<br/>
                                    &lt;<span className="text-green-400">Canvas</span> <span className="text-blue-300">gl</span>={{ <span className="text-orange-300">antialias: true</span> }}&gt;<br/>
                                      &lt;<span className="text-green-400">Mesh</span> <span className="text-blue-300">ref</span>={ref} /&gt;<br/>
                                    &lt;/<span className="text-green-400">Canvas</span>&gt;<br/>
                                  )<br/>
                                }<span className="animate-pulse text-accent">_</span>
</div>
</div>

<div className="spotlight-card bg-surface border border-white/10 p-8 rounded-xl h-[400px] flex flex-col justify-between group">
<div>
<h3 className="text-2xl text-white font-medium mb-2">Performance First</h3>
<p className="text-xs text-gray-500 font-mono">LIGHTHOUSE SCORE 100</p>
</div>
<div className="relative w-48 h-48 mx-auto flex items-center justify-center">
<svg className="transform -rotate-90 w-full h-full">
<circle className="text-gray-800" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="8"></circle>
<circle className="text-accent" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" stroke-dasharray="552" stroke-dashoffset="20" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-5xl font-bold text-white tracking-tighter">99</span>
<span className="text-xs font-mono text-gray-500 mt-1">PERFORMANCE</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#020202] border-b border-white/10 relative z-20" id="work">
<div className="max-w-[1440px] mx-auto px-6">
<div className="flex items-end justify-between mb-20">
<h2 className="text-[5rem] leading-none font-medium tracking-tighter text-white">Selected<br/>Works</h2>
<div className="text-right hidden md:block">
<span className="block font-mono text-xs text-gray-500">SCROLL TO EXPLORE</span>
<i className="w-4 h-4 text-accent ml-auto mt-2 animate-bounce" data-lucide="arrow-down"></i>
</div>
</div>

<div className="flex flex-col group/list" id="workList">

<a className="work-item relative border-t border-white/10 py-12 group hover:bg-white/[0.02] transition-colors cursor-none" data-image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" href="#">
<div className="flex justify-between items-baseline relative z-10 px-4">
<h3 className="text-4xl md:text-6xl font-light text-gray-400 group-hover:text-white group-hover:translate-x-6 transition-all duration-500 ease-out">
                                Velocore Exchange
                            </h3>
<div className="flex flex-col items-end">
<span className="font-mono text-xs text-accent mb-2 opacity-0 group-hover:opacity-100 transition-opacity">DeFi Protocol</span>
<span className="font-mono text-xs text-gray-600 group-hover:text-white transition-colors">2023</span>
</div>
</div>
</a>

<a className="work-item relative border-t border-white/10 py-12 group hover:bg-white/[0.02] transition-colors cursor-none" data-image="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" href="#">
<div className="flex justify-between items-baseline relative z-10 px-4">
<h3 className="text-4xl md:text-6xl font-light text-gray-400 group-hover:text-white group-hover:translate-x-6 transition-all duration-500 ease-out">
                                Onyx Fashion
                            </h3>
<div className="flex flex-col items-end">
<span className="font-mono text-xs text-accent mb-2 opacity-0 group-hover:opacity-100 transition-opacity">E-Commerce</span>
<span className="font-mono text-xs text-gray-600 group-hover:text-white transition-colors">2023</span>
</div>
</div>
</a>

<a className="work-item relative border-t border-b border-white/10 py-12 group hover:bg-white/[0.02] transition-colors cursor-none" data-image="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" href="#">
<div className="flex justify-between items-baseline relative z-10 px-4">
<h3 className="text-4xl md:text-6xl font-light text-gray-400 group-hover:text-white group-hover:translate-x-6 transition-all duration-500 ease-out">
                                Carbon DAO
                            </h3>
<div className="flex flex-col items-end">
<span className="font-mono text-xs text-accent mb-2 opacity-0 group-hover:opacity-100 transition-opacity">Web3 Identity</span>
<span className="font-mono text-xs text-gray-600 group-hover:text-white transition-colors">2024</span>
</div>
</div>
</a>
</div>
</div>

<img alt="Project Preview" className="work-preview-img grayscale contrast-125 brightness-75" id="hoverImage" src=""/>
</section>

<section className="py-32 bg-void border-b border-white/10" id="pricing">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative p-12 border border-white/10 bg-[#050505] hover:border-white/20 transition-all duration-500">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="text-white w-6 h-6" data-lucide="arrow-up-right"></i>
</div>
<div className="font-mono text-xs text-gray-500 mb-6 uppercase tracking-widest">[ The Blueprint ]</div>
<div className="flex items-baseline gap-2 mb-8">
<h3 className="text-6xl font-light text-white tracking-tighter">$8k</h3>
<span className="text-gray-500">/mo</span>
</div>
<p className="text-gray-400 mb-12 border-l border-accent pl-4 text-sm leading-relaxed max-w-sm">
                            Rapid deployment for startups. Access to senior design talent and frontend engineering.
                        </p>
<ul className="space-y-4 font-mono text-xs text-gray-300 mb-12">
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-accent"></span>Design System v2.0</li>
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-accent"></span>React / Next.js Build</li>
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-accent"></span>Weekly Sprints</li>
</ul>
<button className="w-full py-4 border border-white/10 text-white font-mono text-xs hover:bg-white hover:text-black transition-all uppercase tracking-widest">
                            Initialize
                        </button>
</div>

<div className="group relative p-12 border border-white/10 bg-[#050505] overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<div className="font-mono text-xs text-accent uppercase tracking-widest">[ The Architect ]</div>
<span className="px-2 py-1 bg-accent text-black text-[10px] font-bold uppercase tracking-wider">Most Popular</span>
</div>
<div className="flex items-baseline gap-2 mb-8">
<h3 className="text-6xl font-light text-white tracking-tighter">Custom</h3>
</div>
<p className="text-gray-400 mb-12 border-l border-white pl-4 text-sm leading-relaxed max-w-sm">
                                Full-scale digital transformation. Custom shaders, heavy backend, immersive 3D experiences.
                            </p>
<ul className="space-y-4 font-mono text-xs text-gray-300 mb-12">
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-white"></span>Dedicated Art Director</li>
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-white"></span>WebGL / Three.js</li>
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-white"></span>Smart Contract Integration</li>
</ul>
<button className="w-full py-4 bg-white text-black font-mono text-xs hover:bg-accent hover:border-accent transition-all uppercase tracking-widest">
                                Contact Sales
                            </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#020202]" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="glass-panel rounded-lg overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.01] duration-500">

<div className="bg-[#111] px-4 py-3 flex items-center justify-between border-b border-white/5">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
<div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
<div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
</div>
<div className="font-mono text-[10px] text-gray-500">guest@aeterna: ~/inquiry</div>
<div className="w-10"></div>
</div>

<div className="p-8 md:p-12 font-mono text-sm relative">

<div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none text-xs text-accent hidden md:block text-right">
<div>CONNECTING...</div>
<div>ENCRYPTED: TLS 1.3</div>
<div>IP: 192.168.0.1</div>
</div>
<form className="space-y-8 relative z-10">
<div className="group">
<label className="block text-gray-600 mb-2 text-xs uppercase tracking-widest group-focus-within:text-accent transition-colors">01. Identity</label>
<input className="w-full bg-transparent border-b border-gray-800 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder-gray-800" placeholder="Enter your name" type="text"/>
</div>
<div className="group">
<label className="block text-gray-600 mb-2 text-xs uppercase tracking-widest group-focus-within:text-accent transition-colors">02. Coordinates</label>
<input className="w-full bg-transparent border-b border-gray-800 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder-gray-800" placeholder="Enter email address" type="email"/>
</div>
<div className="group">
<label className="block text-gray-600 mb-4 text-xs uppercase tracking-widest">03. Parameters</label>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<label className="cursor-pointer border border-white/10 hover:border-white/40 rounded p-3 text-center transition-all has-[:checked]:bg-white has-[:checked]:text-black">
<input className="hidden" name="type" type="radio"/>
<span className="text-xs">Web Design</span>
</label>
<label className="cursor-pointer border border-white/10 hover:border-white/40 rounded p-3 text-center transition-all has-[:checked]:bg-white has-[:checked]:text-black">
<input className="hidden" name="type" type="radio"/>
<span className="text-xs">Development</span>
</label>
<label className="cursor-pointer border border-white/10 hover:border-white/40 rounded p-3 text-center transition-all has-[:checked]:bg-white has-[:checked]:text-black">
<input className="hidden" name="type" type="radio"/>
<span className="text-xs">Branding</span>
</label>
<label className="cursor-pointer border border-white/10 hover:border-white/40 rounded p-3 text-center transition-all has-[:checked]:bg-white has-[:checked]:text-black">
<input className="hidden" name="type" type="radio"/>
<span className="text-xs">Audit</span>
</label>
</div>
</div>
<div className="pt-8">
<button className="group flex items-center gap-4 text-accent hover:text-white transition-colors" type="submit">
<span className="text-lg">&gt; Execute Protocol</span>
<div className="h-px flex-1 bg-accent/20 group-hover:bg-white/20 transition-colors"></div>
<span className="w-2 h-2 bg-accent animate-pulse"></span>
</button>
</div>
</form>
</div>
</div>
</div>
</section>
</div>

<footer className="footer-fixed bg-white text-black flex flex-col justify-between pt-24 pb-8 px-6">
<div className="max-w-[1440px] mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-12">
<div>
<h5 className="font-mono text-xs uppercase tracking-widest mb-6">Index</h5>
<ul className="space-y-2 text-sm font-medium opacity-60">
<li><a className="hover:opacity-100" href="#">Work</a></li>
<li><a className="hover:opacity-100" href="#">Services</a></li>
<li><a className="hover:opacity-100" href="#">Agency</a></li>
</ul>
</div>
<div>
<h5 className="font-mono text-xs uppercase tracking-widest mb-6">Connect</h5>
<ul className="space-y-2 text-sm font-medium opacity-60">
<li><a className="hover:opacity-100" href="#">Twitter</a></li>
<li><a className="hover:opacity-100" href="#">LinkedIn</a></li>
<li><a className="hover:opacity-100" href="#">Instagram</a></li>
</ul>
</div>
<div className="col-span-2 md:text-right">
<p className="text-2xl font-light tracking-tight leading-snug">
                    San Francisco, CA<br/>
<a className="hover:underline decoration-1 underline-offset-4" href="mailto:hello@aeterna.design">hello@aeterna.design</a>
</p>
</div>
</div>
<div className="w-full text-center overflow-hidden">
<h1 className="text-[20vw] font-bold leading-none tracking-tighter select-none opacity-100 translate-y-[10%]">AETERNA</h1>
</div>
<div className="flex justify-between items-end border-t border-black/10 pt-4 max-w-[1440px] mx-auto w-full">
<span className="font-mono text-[10px] uppercase">©2024 Aeterna. All rights reserved.</span>
<span className="font-mono text-[10px] uppercase">Scroll to Top</span>
</div>
</footer>


    </>
  );
}
