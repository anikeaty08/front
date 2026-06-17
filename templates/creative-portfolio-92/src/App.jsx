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



        // --- Smooth Scrolling with Lenis ---
        // Adjusted to be cleaner and closer to native but slightly polished
        const lenis = new Lenis({
            duration: 1.2,
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // --- Horizontal Scroll Logic (Integrated with Lenis) ---
        const section = document.querySelector('#work');
        const track = document.querySelector('#carousel-track');
        const progressBar = document.querySelector('#progress-bar');

        function handleScroll() {
            if (!section || !track) return;
            
            const sectionRect = section.getBoundingClientRect();
            const trackWidth = track.scrollWidth;
            const windowWidth = window.innerWidth;
            
            // Total scroll distance is section height minus one viewport height
            const scrollDistance = section.offsetHeight - window.innerHeight;
            const scrolled = -sectionRect.top; // Use native value which Lenis preserves visually via transform
            
            if (scrolled >= 0 && scrolled <= scrollDistance) {
                const percentage = scrolled / scrollDistance;
                const moveAmount = -(trackWidth - windowWidth) * percentage;
                track.style.transform = `translateX(${moveAmount}px)`;
                progressBar.style.width = `${percentage * 100}%`;
            } else if (scrolled < 0) {
                track.style.transform = `translateX(0px)`;
                progressBar.style.width = `0%`;
            } else if (scrolled > scrollDistance) {
                const maxMove = -(trackWidth - windowWidth);
                track.style.transform = `translateX(${maxMove}px)`;
                progressBar.style.width = `100%`;
            }
        }

        // Hook into Lenis scroll event for smoother updates
        lenis.on('scroll', handleScroll);
        // Also keep native for resize/init
        window.addEventListener('resize', handleScroll);


        // --- Particle Canvas Logic ---
        const canvas = document.getElementById('particle-canvas');
        const ctx = canvas.getContext('2d');
        const particleCount = 600; 
        const particles = [];
        let mouseX = 0;
        let mouseY = 0;
        let mode = 0;
        let lastTime = 0;
        let modeTimer = 0;

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            calculateTargets();
        }

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.targetX = this.x;
                this.targetY = this.y;
                this.size = 1.5;
                this.baseSize = 1.5;
            }
            update() {
                this.x += (this.targetX - this.x) * 0.05;
                this.y += (this.targetY - this.y) * 0.05;
                
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 120) {
                    this.size = this.baseSize * 1.5 + (120 - dist) / 120;
                } else {
                    this.size += (this.baseSize - this.size) * 0.1;
                }
            }
            draw() {
                ctx.fillStyle = '#a3a3a3'; 
                ctx.fillRect(this.x, this.y, this.size, this.size);
            }
        }

        function calculateTargets() {
            const width = canvas.width;
            const height = canvas.height;
            for (let i = 0; i < particleCount; i++) {
                const p = particles[i];
                if (mode === 0) { // Grid
                    const cols = Math.floor(Math.sqrt(particleCount * (width/height)));
                    const rows = Math.ceil(particleCount / cols);
                    const spacingX = width / cols;
                    const spacingY = height / rows;
                    const col = i % cols;
                    const row = Math.floor(i / cols);
                    p.targetX = col * spacingX + spacingX / 2;
                    p.targetY = row * spacingY + spacingY / 2;
                } else if (mode === 1) { // Random
                    p.targetX = Math.random() * width;
                    p.targetY = Math.random() * height;
                } else if (mode === 2) { // Wave
                    const x = (i / particleCount) * width;
                    p.targetX = x;
                    p.targetY = height / 2 + Math.sin(x * 0.01 + Date.now() * 0.0005) * 150;
                } else if (mode === 3) { // Circle
                    const angle = (i / particleCount) * Math.PI * 2 * 3;
                    const radius = (i / particleCount) * (Math.min(width, height) / 2.5);
                    p.targetX = width / 2 + Math.cos(angle) * radius;
                    p.targetY = height / 2 + Math.sin(angle) * radius;
                }
            }
        }

        function init() {
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
            resize();
            animate();
        }

        function animate(timestamp) {
            const dt = timestamp - lastTime;
            lastTime = timestamp;
            modeTimer += dt;
            
            if (modeTimer > 5000) {
                mode = (mode + 1) % 4;
                modeTimer = 0;
                calculateTargets();
            }
            
            if (mode === 2) calculateTargets();
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        });

        init();
        handleScroll();
    
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
      

<nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 md:py-8 mix-blend-difference text-[#fcfbf9]">
<a className="lowercase hover:opacity-60 transition-opacity text-sm font-medium tracking-tight" href="#">
            faux.moni
        </a>
<div className="flex gap-8 text-xs font-normal tracking-wide lowercase">
<a className="hover:opacity-60 transition-opacity" href="#work">work</a>
<a className="hover:opacity-60 transition-opacity" href="#studio">studio</a>
<a className="hover:opacity-60 transition-opacity" href="#contact">contact</a>
</div>
</nav>

<div className="relative z-0 bg-[#fcfbf9]">

<header className="min-h-screen flex flex-col justify-end w-full px-6 pb-12 md:px-12 md:pb-16 relative overflow-hidden border-b border-neutral-200" id="hero">

<canvas className="absolute inset-0 w-full h-full z-0 opacity-30 mix-blend-multiply pointer-events-none" id="particle-canvas"></canvas>
<div className="max-w-[1920px] w-full mx-auto relative z-10 pointer-events-none">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
<div className="md:col-span-4 reveal-up flex flex-col justify-end h-full pointer-events-auto">
<p className="text-xs md:text-sm font-light leading-relaxed text-neutral-500 lowercase max-w-xs tracking-wide">
                            digital craftsman &amp; visual director based in berlin. focusing on interactive experiences and brand identity.
                        </p>
<div className="mt-8 md:mt-12 flex gap-4">
<a className="group flex items-center gap-2 text-xs font-normal uppercase tracking-widest border-b border-neutral-300 pb-1 transition-colors hover:border-neutral-900 hover:text-neutral-900 text-neutral-500" href="#work">
                                View Selected Work
                                <iconify-icon className="group-hover:translate-y-0.5 transition-transform duration-300" icon="lucide:arrow-down" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
</div>
<div className="md:col-span-8 text-right reveal-up delay-100 mt-12 md:mt-0 pointer-events-auto">
<h1 className="text-6xl md:text-8xl lg:text-9xl lowercase leading-[0.85] font-medium text-neutral-900 tracking-tighter">
                            art like a<br/>f*cking alien
                            <span className="text-neutral-300 block text-2xl md:text-4xl lg:text-5xl mt-4 tracking-tight font-normal">since 2003</span>
</h1>
</div>
</div>
</div>
</header>

<section className="relative h-[400vh] bg-[#fcfbf9]" id="work">
<div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">

<div className="absolute top-0 left-0 w-full px-6 md:px-12 pt-6 md:pt-8 flex justify-between items-start z-10 pointer-events-none">
<span className="text-xs font-medium tracking-widest uppercase text-neutral-400">Selected Projects</span>
<span className="text-xs font-medium tracking-widest uppercase text-neutral-400">01 — 05</span>
</div>

<div className="flex items-center gap-6 md:gap-16 pl-6 md:pl-12 w-max will-change-transform" id="carousel-track">

<article className="group relative w-[80vw] md:w-[35vw] shrink-0 cursor-pointer">
<div className="w-full aspect-[3/4] overflow-hidden rounded bg-neutral-100 relative">
<img alt="Monospace" className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 card-zoom" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-6 flex justify-between items-start border-t border-neutral-100 pt-4">
<div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight lowercase text-neutral-900">monospace</h3>
<p className="text-xs text-neutral-400 mt-1 lowercase font-light tracking-wide">branding / interior</p>
</div>
<div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</div>
</div>
</article>

<article className="group relative w-[80vw] md:w-[35vw] shrink-0 cursor-pointer">
<div className="w-full aspect-[3/4] overflow-hidden rounded bg-neutral-100 relative">
<img alt="Objet Noir" className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 card-zoom" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-6 flex justify-between items-start border-t border-neutral-100 pt-4">
<div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight lowercase text-neutral-900">objet noir</h3>
<p className="text-xs text-neutral-400 mt-1 lowercase font-light tracking-wide">art direction</p>
</div>
<div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</div>
</div>
</article>

<article className="group relative w-[80vw] md:w-[35vw] shrink-0 cursor-pointer">
<div className="w-full aspect-[3/4] overflow-hidden rounded bg-neutral-100 relative">
<img alt="Vogue Edit" className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 card-zoom" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2727&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-6 flex justify-between items-start border-t border-neutral-100 pt-4">
<div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight lowercase text-neutral-900">vogue edit</h3>
<p className="text-xs text-neutral-400 mt-1 lowercase font-light tracking-wide">editorial</p>
</div>
<div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</div>
</div>
</article>

<article className="group relative w-[80vw] md:w-[35vw] shrink-0 cursor-pointer">
<div className="w-full aspect-[3/4] overflow-hidden rounded bg-neutral-100 relative">
<img alt="Clay Forms" className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 card-zoom" src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&amp;w=986&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-6 flex justify-between items-start border-t border-neutral-100 pt-4">
<div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight lowercase text-neutral-900">clay forms</h3>
<p className="text-xs text-neutral-400 mt-1 lowercase font-light tracking-wide">ceramics / 3d</p>
</div>
<div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</div>
</div>
</article>

<article className="group relative w-[80vw] md:w-[35vw] shrink-0 cursor-pointer pr-12 md:pr-24">
<div className="w-full aspect-[3/4] overflow-hidden rounded bg-neutral-100 relative">
<img alt="Liquid Oil" className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 card-zoom" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-6 flex justify-between items-start border-t border-neutral-100 pt-4">
<div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight lowercase text-neutral-900">liquid</h3>
<p className="text-xs text-neutral-400 mt-1 lowercase font-light tracking-wide">visual design</p>
</div>
<div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</div>
</div>
</article>
</div>

<div className="absolute bottom-8 left-6 md:left-12 w-32 h-px bg-neutral-200 overflow-hidden">
<div className="h-full bg-neutral-900 w-0 transition-all duration-100 ease-linear" id="progress-bar"></div>
</div>
</div>
</section>
</div>

<section className="relative z-30 min-h-screen bg-neutral-900 text-[#fcfbf9] rounded-t-[3rem] md:rounded-t-[5rem] -mt-[10vh] flex items-center justify-center section-card overflow-hidden" id="studio">

<div className="absolute inset-0 z-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
<div className="max-w-7xl w-full mx-auto px-6 md:px-12 py-24 relative z-10 flex flex-col justify-center h-full">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
<div className="lg:col-span-7">
<span className="text-neutral-500 font-mono text-xs mb-8 block tracking-widest uppercase">The Studio</span>
<h3 className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tighter lowercase leading-[0.9] mb-12">
                        intelligence<br/>
<span className="text-neutral-600">made visible.</span>
</h3>
<div className="w-24 h-px bg-neutral-700 mb-12"></div>
<p className="text-lg md:text-2xl font-light leading-relaxed lowercase text-neutral-400 tracking-wide max-w-2xl">
                        we believe in the power of reduction. stripping away the non-essential to reveal the core truth of a brand. our approach is rooted in typographic rigor and spatial awareness.
                    </p>
</div>
<div className="lg:col-span-5 flex flex-col justify-end h-full pt-12 lg:pt-0 border-t lg:border-t-0 border-neutral-800 lg:border-l lg:pl-16">
<div className="space-y-16">
<div>
<span className="block text-xs font-medium tracking-widest text-neutral-500 uppercase mb-6">Services</span>
<ul className="space-y-3 text-lg font-light lowercase text-neutral-300">
<li className="flex items-center gap-4 group cursor-default border-b border-transparent hover:border-neutral-700 pb-1 transition-colors w-fit">
<span className="group-hover:text-white transition-colors">art direction</span>
</li>
<li className="flex items-center gap-4 group cursor-default border-b border-transparent hover:border-neutral-700 pb-1 transition-colors w-fit">
<span className="group-hover:text-white transition-colors">digital design</span>
</li>
<li className="flex items-center gap-4 group cursor-default border-b border-transparent hover:border-neutral-700 pb-1 transition-colors w-fit">
<span className="group-hover:text-white transition-colors">development</span>
</li>
<li className="flex items-center gap-4 group cursor-default border-b border-transparent hover:border-neutral-700 pb-1 transition-colors w-fit">
<span className="group-hover:text-white transition-colors">photography</span>
</li>
</ul>
</div>
<div>
<span className="block text-xs font-medium tracking-widest text-neutral-500 uppercase mb-6">Partners</span>
<div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium uppercase tracking-widest text-neutral-500">
<span className="hover:text-white transition-colors cursor-default">Linear</span>
<span className="hover:text-white transition-colors cursor-default">Vercel</span>
<span className="hover:text-white transition-colors cursor-default">Stripe</span>
<span className="hover:text-white transition-colors cursor-default">Acme</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-24 px-6 md:px-12 bg-neutral-900 text-[#fcfbf9] border-t border-neutral-800 relative z-30" id="contact">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
<div className="max-w-3xl">
<h4 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter lowercase mb-8">
                        have a project<br/>in mind?
                    </h4>
<a className="inline-flex items-center gap-3 text-xl md:text-2xl font-normal transition-all lowercase border-b border-neutral-700 pb-1 text-neutral-400 hover:text-white hover:border-white hover:gap-4 group" href="mailto:hello@faux.moni">
                        hello@faux.moni
                        <iconify-icon className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" icon="lucide:arrow-up-right" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
<div className="flex flex-col items-start md:items-end gap-8 w-full md:w-auto">
<div className="flex gap-4">
<a className="p-3 rounded-full border border-neutral-700 text-neutral-400 hover:bg-[#fcfbf9] hover:text-neutral-900 hover:border-[#fcfbf9] transition-all duration-300 group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="lucide:twitter" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="p-3 rounded-full border border-neutral-700 text-neutral-400 hover:bg-[#fcfbf9] hover:text-neutral-900 hover:border-[#fcfbf9] transition-all duration-300 group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="lucide:instagram" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="p-3 rounded-full border border-neutral-700 text-neutral-400 hover:bg-[#fcfbf9] hover:text-neutral-900 hover:border-[#fcfbf9] transition-all duration-300 group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="lucide:linkedin" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<span className="text-xs font-medium uppercase tracking-widest text-neutral-500">
                        © 2024 faux.moni
                    </span>
</div>
</div>
</div>
</footer>



    </>
  );
}
