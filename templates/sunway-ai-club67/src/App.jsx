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
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
brand: {
blue: '#3b82f6',
purple: '#8b5cf6',
cyan: '#06b6d4',
white: '#ffffff',
}
},
letterSpacing: {
tighter: '-0.05em',
tight: '-0.025em',
},
animation: {
'marquee': 'marquee 40s linear infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



        lucide.createIcons();

        // --- 1. Enhanced Canvas Background (Fixed & More Obvious) ---
        const canvas = document.getElementById('hero-canvas');
        const ctx = canvas.getContext('2d');
        
        let width, height;
        let particles = [];
        
        // Configuration for the effect (Enhanced)
        const particleCount = 80; // More particles
        const connectionDistance = 180; 
        const mouseDistance = 250; 
        
        let mouse = { x: null, y: null };

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.8; // Faster
                this.vy = (Math.random() - 0.5) * 0.8;
                this.size = Math.random() * 3 + 1.5; // Bigger
                // Grey-Green-Blue Palette
                const colors = [
                    'rgba(52, 211, 153,', // Emerald
                    'rgba(148, 163, 184,', // Slate
                    'rgba(56, 189, 248,'   // Sky Blue
                ];
                this.baseColor = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                if (mouse.x != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < mouseDistance) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouseDistance - distance) / mouseDistance;
                        const directionX = forceDirectionX * force * 3; 
                        const directionY = forceDirectionY * force * 3;
                        
                        this.x -= directionX;
                        this.y -= directionY;
                    }
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.baseColor + '0.7)'; // Higher opacity
                ctx.fill();
            }
        }

        function initCanvas() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                for (let j = i; j < particles.length; j++) {
                    let dx = particles[i].x - particles[j].x;
                    let dy = particles[i].y - particles[j].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        let opacity = 1 - (distance / connectionDistance);
                        ctx.strokeStyle = 'rgba(255, 255, 255,' + (opacity * 0.15) + ')'; // More visible lines
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
                
                if (mouse.x != null) {
                    let dx = particles[i].x - mouse.x;
                    let dy = particles[i].y - mouse.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouseDistance) {
                        ctx.beginPath();
                        let opacity = 1 - (distance / mouseDistance);
                        ctx.strokeStyle = particles[i].baseColor + (opacity * 0.4) + ')';
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animateCanvas);
        }

        window.addEventListener('resize', initCanvas);
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        initCanvas();
        animateCanvas();


        // --- 2. 3D Mouse Parallax (Updated for fixed text / moving background) ---
        const heroSection = document.getElementById('hero');
        const heroContent = document.getElementById('hero-content');

        heroSection.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.clientX) / 40;
            const y = (window.innerHeight / 2 - e.clientY) / 40;
            heroContent.style.transform = `rotateY(${x * -0.5}deg) rotateX(${y * 0.5}deg)`; 
        });

        heroSection.addEventListener('mouseleave', () => {
            heroContent.style.transform = `rotateY(0deg) rotateX(0deg)`;
        });


        // --- 3. Hacker Text Scramble Effect ---
        class TextScramble {
            constructor(el) {
                this.el = el;
                this.chars = '!<>-_\\/[]{}—=+*^?#________';
                this.update = this.update.bind(this);
            }
            
            setText(newText) {
                const oldText = this.el.innerText;
                const length = Math.max(oldText.length, newText.length);
                const promise = new Promise((resolve) => this.resolve = resolve);
                this.queue = [];
                for (let i = 0; i < length; i++) {
                    const from = oldText[i] || '';
                    const to = newText[i] || '';
                    const start = Math.floor(Math.random() * 40);
                    const end = start + Math.floor(Math.random() * 40);
                    this.queue.push({ from, to, start, end });
                }
                cancelAnimationFrame(this.frameRequest);
                this.frame = 0;
                this.update();
                return promise;
            }
            
            update() {
                let output = '';
                let complete = 0;
                for (let i = 0, n = this.queue.length; i < n; i++) {
                    let { from, to, start, end, char } = this.queue[i];
                    if (this.frame >= end) {
                        complete++;
                        output += to;
                    } else if (this.frame >= start) {
                        if (!char || Math.random() < 0.28) {
                            char = this.randomChar();
                            this.queue[i].char = char;
                        }
                        output += `<span class="text-emerald-500/50">${char}</span>`;
                    } else {
                        output += from;
                    }
                }
                this.el.innerHTML = output;
                if (complete === this.queue.length) {
                    this.resolve();
                } else {
                    this.frameRequest = requestAnimationFrame(this.update);
                    this.frame++;
                }
            }
            
            randomChar() {
                return this.chars[Math.floor(Math.random() * this.chars.length)];
            }
        }

        const phrases = document.querySelectorAll('.scramble-text');
        phrases.forEach(el => {
            const fx = new TextScramble(el);
            const finalText = el.getAttribute('data-text');
            setTimeout(() => {
                fx.setText(finalText);
            }, 200);
        });


        // --- 4. Scroll Logic ---
        const header = document.getElementById('main-header');
        const headerLogoWrapper = document.getElementById('header-logo-wrapper');
        const heroTitleGroup = document.getElementById('hero-title-group');
        
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const triggerPoint = 50;

            if (scrollY > triggerPoint) {
                header.classList.remove('top-6', 'rounded-full', 'w-auto', 'glass-pill');
                header.classList.add('top-0', 'w-full', 'rounded-none', 'bg-white', 'border-b', 'border-white/10');
                header.style.backgroundColor = 'rgba(255,255,255, 0.95)';
                header.style.borderBottom = '1px solid #e5e5e5';

                document.querySelectorAll('.header-link').forEach(link => {
                    link.classList.remove('text-neutral-400', 'hover:text-white');
                    link.classList.add('text-neutral-500', 'hover:text-black', 'hover:bg-neutral-100');
                });

                headerLogoWrapper.style.width = '200px';
                headerLogoWrapper.style.opacity = '1';
                headerLogoWrapper.querySelector('span').style.color = 'black';

                // Optional: Fade out hero title faster on scroll
                if(scrollY < 500) {
                     heroTitleGroup.style.opacity = 1 - (scrollY / 300);
                     heroTitleGroup.style.transform = `translateZ(80px) translateY(-${scrollY/2}px)`;
                }
               
            } else {
                header.classList.add('top-6', 'rounded-full', 'w-auto', 'glass-pill');
                header.classList.remove('top-0', 'w-full', 'rounded-none', 'bg-white', 'border-b', 'border-white/10');
                header.style.backgroundColor = '';
                header.style.borderBottom = '';

                document.querySelectorAll('.header-link').forEach(link => {
                    link.classList.add('text-neutral-400', 'hover:text-white');
                    link.classList.remove('text-neutral-500', 'hover:text-black', 'hover:bg-neutral-100');
                });

                headerLogoWrapper.style.width = '0px';
                headerLogoWrapper.style.opacity = '0';
                
                heroTitleGroup.style.opacity = '1';
                heroTitleGroup.style.transform = 'translateZ(80px)';
            }
        });

        const eventsTrigger = document.getElementById('events-trigger');
        const eventCard = document.getElementById('event-card');
        const carouselSection = document.getElementById('events-carousel-section');

        window.addEventListener('scroll', () => {
            const rect = eventsTrigger.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            let progress = (viewportHeight - rect.top) / (rect.height);
            progress = Math.max(0, Math.min(1, progress));
            
            let width = 80;
            let height = 75; // Increased base height
            let radius = 1.5;

            if (progress > 0 && progress < 1) {
                if (progress > 0.1 && progress < 0.9) {
                    width = 100;
                    height = 100;
                    radius = 0;
                    eventCard.style.borderWidth = '0px';
                    carouselSection.style.opacity = '1';
                } else {
                    width = 80 + (progress < 0.5 ? (progress * 200) : ((1-progress)*200)); 
                    if(width > 100) width = 100;
                    height = 75;
                    radius = 1.5;
                    eventCard.style.borderWidth = '1px';
                    carouselSection.style.opacity = '0.5';
                }
            }

            eventCard.style.width = `${width}%`;
            eventCard.style.height = `${height}vh`;
            eventCard.style.borderRadius = `${radius}rem`;
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal-text').forEach(el => observer.observe(el));

    
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
      

<canvas id="hero-canvas"></canvas>

<header className="fixed top-6 left-1/2 -translate-x-1/2 h-12 rounded-full z-50 flex items-center justify-center glass-pill px-1 transition-all duration-700 w-auto min-w-[340px]" id="main-header">
<div className="flex items-center justify-center w-full relative">
<div className="flex items-center gap-1 transition-all duration-700" id="nav-left">
<a className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer header-link" href="#about">About</a>
<a className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer header-link" href="#events-trigger">Events</a>
</div>
<div className="overflow-hidden w-0 opacity-0 transition-all duration-700 flex justify-center items-center whitespace-nowrap" id="header-logo-wrapper">
<span className="font-display font-bold text-sm tracking-tight text-white px-8">SUNWAY AI</span>
</div>
<div className="flex items-center gap-1 transition-all duration-700" id="nav-right">
<a className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer header-link" href="#join">Join</a>
<a className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer header-link" href="#contact">Contact</a>
</div>
</div>
</header>
<main className="w-full flex flex-col items-center relative z-10">

<section className="relative w-full h-[120vh] overflow-hidden flex flex-col items-center justify-start pt-32 perspective-container" id="hero">

<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-[#050505] z-[1] pointer-events-none"></div>

<div className="relative z-20 flex flex-col items-center text-center w-full h-full transform-style-3d" id="hero-content">

<div className="mb-10 hero-layer relative z-30 animate-float" style={{transform: 'translateZ(60px)'}}>


<div className="w-24 h-24 md:w-32 md:h-32 relative group">
<div className="absolute inset-0 bg-blue-500/30 blur-2xl rounded-full group-hover:bg-blue-400/40 transition-all duration-500"></div>
<img alt="Sunway AI Club Logo" className="relative w-full h-full object-contain drop-shadow-2xl border border-white/10 rounded-2xl bg-black/50 backdrop-blur-sm p-2" src="https://api.dicebear.com/7.x/bottts/svg?seed=SAIBC&amp;backgroundColor=000000"/>
</div>
</div>

<div className="relative mb-6 hero-layer z-30 mix-difference px-4" id="hero-title-group" style={{transform: 'translateZ(80px)'}}>
<h1 className="font-display font-bold text-[12vw] md:text-[160px] leading-[0.8] tracking-tighter text-white drop-shadow-2xl">
<span className="block scramble-text" data-text="SUNWAY"></span>
<span className="block scramble-text text-white/90" data-text="AI CLUB"></span>
</h1>
</div>

<p className="font-sans text-lg md:text-xl text-neutral-300 max-w-xl leading-relaxed opacity-0 animate-[fadeInUp_1s_ease-out_1.2s_forwards] hero-layer mix-blend-screen z-30" style={{transform: 'translateZ(40px)'}}>
                    The student-led intersection of <span className="text-white font-medium">ambition</span> and <span className="text-white font-medium">artificial intelligence</span>.
                </p>

<div className="mt-10 flex gap-4 opacity-0 animate-[fadeInUp_1s_ease-out_1.4s_forwards] hero-layer z-40" style={{transform: 'translateZ(70px)'}}>
<button className="group relative px-8 py-3 bg-white text-black rounded-full text-sm font-semibold hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.3)]">
<span className="relative z-10 flex items-center gap-2">
                            Join Community 
                            <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</span>
</button>
<button className="px-8 py-3 bg-black/40 border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/10 transition-all hover:border-white/40 backdrop-blur-md">
                        View Projects
                    </button>
</div>


<div className="absolute left-[5%] top-[20%] hidden lg:block hero-layer" style={{transform: 'translateZ(20px) rotateY(15deg)'}}>
<div className="font-mono text-xs text-emerald-400/70 p-4 border border-emerald-500/10 rounded-lg bg-[#0a0a0a]/80 backdrop-blur-md shadow-lg w-64">
<div className="flex gap-1.5 mb-3 border-b border-emerald-900/30 pb-2">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<p className="text-gray-500"># Model Configuration</p>
<p><span className="text-purple-400">const</span> config = {</p>
<p className="pl-4">layers: <span className="text-yellow-300">128</span>,</p>
<p className="pl-4">activation: <span className="text-green-300">'relu'</span>,</p>
<p className="pl-4">dropout: <span className="text-yellow-300">0.2</span></p>
<p>}</p>
</div>
</div>

<div className="absolute right-[8%] top-[30%] hidden lg:block hero-layer" style={{transform: 'translateZ(30px) rotateY(-15deg)'}}>
<div className="font-mono text-xs text-slate-300 p-4 border border-slate-700/30 rounded-lg bg-[#0a0a0a]/80 backdrop-blur-md shadow-lg">
<p className="text-[10px] uppercase tracking-widest mb-2 text-slate-500">Processing Tensor</p>
<div className="space-y-1">
<div className="w-48 h-1 bg-slate-800 rounded overflow-hidden">
<div className="h-full bg-emerald-500/50 w-[70%] animate-pulse"></div>
</div>
<div className="flex justify-between text-[10px] text-emerald-500/50">
<span>Training...</span>
<span>70%</span>
</div>
</div>
<p className="mt-2 text-emerald-400/60">&gt; Epoch 4/10 complete</p>
</div>
</div>

<div className="absolute left-[15%] bottom-[40%] hidden lg:block hero-layer opacity-60" style={{transform: 'translateZ(10px)'}}>
<div className="font-mono text-[10px] text-gray-400/60 rotate-6">
                        01001000 01100101 01101100 01101100 01101111<br/>
                        01010111 01101111 01110010 01101100 01100100
                    </div>
</div>


<div className="absolute bottom-0 left-0 w-full h-[65vh] z-10 hero-layer mask-gradient-top pointer-events-none" style={{transform: 'translateZ(10px)'}}>
<img alt="Sunway AI Club Members" className="w-full h-full object-cover opacity-80 grayscale-[30%] hover:grayscale-0 transition-all duration-1000" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
</div>
</div>
</section>

<section className="w-full max-w-[1200px] px-6 py-32 z-20 relative" id="about">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="flex flex-col gap-8">
<div className="reveal-text">
<span className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2 block">// Who We Are</span>
<h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                            Building the <br/>
<span className="text-neutral-600">Impossible.</span>
</h2>
</div>
<div className="space-y-6">
<div className="reveal-text delay-100">
<h3 className="text-xl font-semibold text-white mb-2">Research &amp; Development</h3>
<p className="text-neutral-400 leading-relaxed text-sm">
                                We are a student-led initiative focused on pushing the boundaries of what's possible with AI. From Large Language Models to Computer Vision, we dive deep into the technicals.
                            </p>
</div>
<div className="w-full h-[1px] bg-white/10 reveal-text delay-150"></div>
<div className="reveal-text delay-200">
<h3 className="text-xl font-semibold text-white mb-2">Collaborative Ecosystem</h3>
<p className="text-neutral-400 leading-relaxed text-sm">
                                It's not just about code. It's about the people. We host hackathons, workshops, and study groups to foster a culture of shared learning and innovation.
                            </p>
</div>
</div>
</div>
<div className="relative h-[600px] w-full rounded-2xl overflow-hidden glass-panel reveal-text delay-300 group shadow-2xl shadow-emerald-900/10">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
<img alt="AI Visualization" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=2565&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
<p className="font-mono text-[10px] text-emerald-400">
                            &gt; initializing neural_network...<br/>
                            &gt; loading weights from 'sunway_model_v1'<br/>
                            &gt; system ready.
                        </p>
</div>
</div>
</div>
</section>

<div className="relative w-full h-[200vh] mb-40 bg-black/20 z-20" id="events-trigger">
<div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
<div className="relative w-[80%] h-[75vh] rounded-3xl bg-[#0a0a0a] border border-white/10 overflow-hidden flex flex-col transition-all duration-500 will-change-transform shadow-2xl" id="event-card">
<div className="flex-1 w-full p-8 md:p-12 flex flex-col relative z-20">
<div className="flex justify-between items-start mb-6">
<span className="px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-bold tracking-widest uppercase">Upcoming</span>
<span className="text-neutral-500 font-mono text-xs">24 OCT 2024</span>
</div>
<div className="flex flex-col md:flex-row gap-10 items-end justify-between h-full pb-8">
<div className="max-w-2xl">
<h2 className="font-display text-4xl md:text-7xl font-semibold tracking-tighter text-white mb-4 leading-none">
                                    LLM FINE-TUNING<br/><span className="text-neutral-600">WORKSHOP</span>
</h2>
<p className="text-neutral-400 text-sm md:text-base max-w-md">
                                    Deep dive into LoRA and QLoRA techniques. Bring your laptops and prepare to train your own custom models on restricted hardware.
                                </p>
</div>
<button className="group flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium text-sm hover:bg-neutral-200 transition-colors whitespace-nowrap">
                                Learn More
                                <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div className="w-full h-[1px] bg-white/10"></div>

<div className="h-72 bg-neutral-900/30 backdrop-blur-sm flex flex-col justify-center relative overflow-hidden transition-opacity duration-500 opacity-50" id="events-carousel-section">
<div className="flex justify-between items-center px-12 mb-6">
<span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Future Roadmap</span>
<div className="flex gap-2">
<button className="p-2 rounded-full border border-white/10 hover:bg-white/10 text-white transition-colors">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>
<button className="p-2 rounded-full border border-white/10 hover:bg-white/10 text-white transition-colors">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="flex overflow-hidden w-full relative group">
<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>
<div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] items-center px-4">

<div className="w-80 h-32 bg-neutral-900 border border-white/5 rounded-2xl p-6 flex flex-col justify-center hover:border-white/20 hover:bg-neutral-800 transition-all cursor-pointer shrink-0 group/card">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] text-blue-400 font-mono bg-blue-500/10 px-2 py-1 rounded">NOV 02</span>
<i className="w-4 h-4 text-neutral-600 group-hover/card:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
<h4 className="text-white font-medium text-lg leading-tight">Computer Vision Hack</h4>
<p className="text-neutral-500 text-xs mt-1">48 Hours • Physical</p>
</div>
<div className="w-80 h-32 bg-neutral-900 border border-white/5 rounded-2xl p-6 flex flex-col justify-center hover:border-white/20 hover:bg-neutral-800 transition-all cursor-pointer shrink-0 group/card">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] text-purple-400 font-mono bg-purple-500/10 px-2 py-1 rounded">NOV 15</span>
<i className="w-4 h-4 text-neutral-600 group-hover/card:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
<h4 className="text-white font-medium text-lg leading-tight">Guest: OpenAI Researcher</h4>
<p className="text-neutral-500 text-xs mt-1">Virtual Seminar</p>
</div>
<div className="w-80 h-32 bg-neutral-900 border border-white/5 rounded-2xl p-6 flex flex-col justify-center hover:border-white/20 hover:bg-neutral-800 transition-all cursor-pointer shrink-0 group/card">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] text-green-400 font-mono bg-green-500/10 px-2 py-1 rounded">NOV 28</span>
<i className="w-4 h-4 text-neutral-600 group-hover/card:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
<h4 className="text-white font-medium text-lg leading-tight">Prompt Engineering 101</h4>
<p className="text-neutral-500 text-xs mt-1">Workshop Series</p>
</div>
<div className="w-80 h-32 bg-neutral-900 border border-white/5 rounded-2xl p-6 flex flex-col justify-center hover:border-white/20 hover:bg-neutral-800 transition-all cursor-pointer shrink-0 group/card">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] text-yellow-400 font-mono bg-yellow-500/10 px-2 py-1 rounded">DEC 05</span>
<i className="w-4 h-4 text-neutral-600 group-hover/card:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
<h4 className="text-white font-medium text-lg leading-tight">Project Showcase Night</h4>
<p className="text-neutral-500 text-xs mt-1">Demo Day</p>
</div>
<div className="w-80 h-32 bg-neutral-900 border border-white/5 rounded-2xl p-6 flex flex-col justify-center hover:border-white/20 hover:bg-neutral-800 transition-all cursor-pointer shrink-0 group/card">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] text-red-400 font-mono bg-red-500/10 px-2 py-1 rounded">DEC 12</span>
<i className="w-4 h-4 text-neutral-600 group-hover/card:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
<h4 className="text-white font-medium text-lg leading-tight">End of Year Party</h4>
<p className="text-neutral-500 text-xs mt-1">Networking</p>
</div>

<div className="w-80 h-32 bg-neutral-900 border border-white/5 rounded-2xl p-6 flex flex-col justify-center hover:border-white/20 hover:bg-neutral-800 transition-all cursor-pointer shrink-0 group/card">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] text-blue-400 font-mono bg-blue-500/10 px-2 py-1 rounded">NOV 02</span>
<i className="w-4 h-4 text-neutral-600 group-hover/card:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
<h4 className="text-white font-medium text-lg leading-tight">Computer Vision Hack</h4>
<p className="text-neutral-500 text-xs mt-1">48 Hours • Physical</p>
</div>
</div>
</div>
</div>

<div className="absolute -top-1/2 -right-1/2 w-full h-full bg-blue-600/10 blur-[120px] pointer-events-none mix-blend-screen"></div>
</div>
</div>
</div>

<section className="w-full max-w-[1200px] px-6 py-32 z-20" id="join">
<div className="glass-panel rounded-3xl p-12 md:p-20 relative overflow-hidden shadow-2xl shadow-indigo-900/20">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full"></div>
<div className="flex flex-col md:flex-row gap-16 relative z-10">
<div className="md:w-1/2 flex flex-col justify-center">
<div className="reveal-text">
<h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
                                Ready to <br/><span className="text-indigo-400">Build the Future?</span>
</h2>
<p className="text-neutral-400 leading-relaxed mb-8 text-sm md:text-base">
                                Whether you are a coding wizard or just starting out, there is a place for you. Join the Discord to get started, or sign up for our newsletter.
                            </p>
<div className="flex gap-4">
<a className="px-8 py-3 bg-white text-black rounded-full font-medium text-sm hover:bg-neutral-200 transition-colors" href="#">
                                    Join Discord
                                </a>
</div>
</div>
</div>
<div className="md:w-1/2 bg-black/40 border border-white/10 rounded-2xl p-8 backdrop-blur-md reveal-text delay-200">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-wider text-neutral-500 ml-1">First Name</label>
<input className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 focus:bg-neutral-900 transition-all text-white placeholder-neutral-700" placeholder="John" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-wider text-neutral-500 ml-1">Last Name</label>
<input className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 focus:bg-neutral-900 transition-all text-white placeholder-neutral-700" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-wider text-neutral-500 ml-1">Email</label>
<input className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 focus:bg-neutral-900 transition-all text-white placeholder-neutral-700" placeholder="student@sunway.edu.my" type="email"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-wider text-neutral-500 ml-1">Interest</label>
<div className="relative">
<select className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 focus:bg-neutral-900 transition-all text-white appearance-none cursor-pointer">
<option>General AI</option>
<option>Machine Learning</option>
<option>Web Development</option>
<option>Design</option>
</select>
<i className="absolute right-4 top-3.5 w-4 h-4 text-neutral-500 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<button className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] mt-2" type="button">
                                Submit Application
                            </button>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="w-full bg-black border-t border-white/10 pt-20 pb-10 mt-12 relative z-20" id="contact">
<div className="max-w-[1200px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
<div className="max-w-md">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center">
<i className="text-white w-4 h-4" data-lucide="cpu"></i>
</div>
<span className="font-display font-bold text-xl tracking-tight text-white">SAIBC</span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed mb-6">
                        Empowering the next generation of builders. Sunway University's premier Artificial Intelligence community.
                    </p>
<div className="text-xs text-neutral-700 uppercase tracking-widest font-mono">
                        Kuala Lumpur, Malaysia
                    </div>
</div>
<div className="flex gap-16">
<div className="flex flex-col gap-4">
<span className="text-xs font-semibold text-white uppercase tracking-wider">Socials</span>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Instagram</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Twitter</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-semibold text-white uppercase tracking-wider">Resources</span>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Events</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Blog</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Brand Assets</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-semibold text-white uppercase tracking-wider">Legal</span>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-neutral-600 uppercase tracking-widest">
                    © 2024 Sunway AI Builders Club. All rights reserved.
                </p>
<div className="flex gap-4">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-[10px] text-neutral-500 uppercase tracking-widest">Systems Operational</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
