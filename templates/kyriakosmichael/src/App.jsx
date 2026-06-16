import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
background: '#F5F5F5',
surface: '#FFFFFF',
primary: '#111111',
secondary: '#555555',
accent: '#EB3A14',
line: '#E0E0E0'
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
transitionTimingFunction: {
'spring': 'cubic-bezier(0.25, 0.8, 0.25, 1)',
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        // Initialize Icons
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        // Initialize Lenis Scrolling
        const lenis = new Lenis({
            duration: 0.7, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical', smoothWheel: true, touchMultiplier: 2,
        });
        function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
        requestAnimationFrame(raf);

        // GSAP Animations
        gsap.registerPlugin(ScrollTrigger);

        // Loader Sequence
        const loaderTimeline = gsap.timeline();
        loaderTimeline.to("#loader-progress", {
            width: "100%", duration: 1.2, ease: "power2.inOut",
            onUpdate: function() { document.getElementById("loader-text").innerText = Math.round(this.progress() * 100) + "%"; }
        })
        .to("#loader", { yPercent: -100, duration: 0.6, ease: "power4.inOut", delay: 0.1 })
        
        // Wispr-Style Hero Reveal (Blur -> Focus)
        .to(".hero-glow", { opacity: 1, duration: 1.5, ease: "power2.out" }, "-=0.5")
        .to(".hero-char", {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.2,
            stagger: 0.1, // Stagger for flow effect
            ease: "power3.out"
        }, "-=1.0")
        .to(".hero-fade-in", {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
        }, "-=0.8");

        // Scroll Reveals for other sections
        document.querySelectorAll("section:not(:first-child)").forEach(section => {
            gsap.from(section.querySelectorAll("h2, h3, p, .project-card, li"), {
                scrollTrigger: { trigger: section, start: "top 85%", toggleActions: "play none none reverse" },
                y: 30, opacity: 0, duration: 0.6, stagger: 0.05, ease: "power2.out"
            });
        });

        // Cursor Logic (Desktop)
        if (window.matchMedia("(pointer: fine)").matches) {
            const cursorDot = document.querySelector('.cursor-dot');
            const cursorCircle = document.querySelector('.cursor-circle');
            let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;

            document.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; gsap.to(cursorDot, { x: mouseX, y: mouseY, duration: 0 }); });
            gsap.ticker.add(() => {
                cursorX += (mouseX - cursorX) * 0.2; cursorY += (mouseY - cursorY) * 0.2;
                cursorCircle.style.left = cursorX + 'px'; cursorCircle.style.top = cursorY + 'px';
            });
            document.querySelectorAll('a, button, .magnetic-btn').forEach(el => {
                el.addEventListener('mouseenter', () => document.body.classList.add('hover-active'));
                el.addEventListener('mouseleave', () => document.body.classList.remove('hover-active'));
            });
        }

        // Magnetic Buttons
        document.querySelectorAll('.magnetic-btn').forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                gsap.to(btn, { x: (e.clientX - rect.left - rect.width / 2) * 0.2, y: (e.clientY - rect.top - rect.height / 2) * 0.2, duration: 0.2 });
            });
            btn.addEventListener('mouseleave', () => gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" }));
        });

        // Canvas
        const canvas = document.getElementById('hero-canvas');
        const ctx = canvas.getContext('2d');
        let width, height, particles = [];
        function resizeCanvas() { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; }
        window.addEventListener('resize', resizeCanvas); resizeCanvas();
        class Particle {
            constructor() { this.x = Math.random() * width; this.y = Math.random() * height; this.vx = (Math.random() - 0.5) * 0.3; this.vy = (Math.random() - 0.5) * 0.3; this.size = Math.random() * 1.5; }
            update() { this.x += this.vx; this.y += this.vy; if(this.x < 0) this.x = width; if(this.x > width) this.x = 0; if(this.y < 0) this.y = height; if(this.y > height) this.y = 0; }
            draw() { ctx.fillStyle = '#cccccc'; ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI*2); ctx.fill(); }
        }
        for(let i=0; i<40; i++) particles.push(new Particle());
        function animateCanvas() {
            ctx.clearRect(0,0,width,height); ctx.strokeStyle = 'rgba(0,0,0,0.04)'; ctx.lineWidth = 1;
            for(let i=0; i<particles.length; i++) {
                for(let j=i; j<particles.length; j++) {
                    const d = Math.sqrt((particles[i].x-particles[j].x)**2 + (particles[i].y-particles[j].y)**2);
                    if(d<100) { ctx.beginPath(); ctx.moveTo(particles[i].x,particles[i].y); ctx.lineTo(particles[j].x,particles[j].y); ctx.stroke(); }
                }
                particles[i].update(); particles[i].draw();
            }
            requestAnimationFrame(animateCanvas);
        }
        animateCanvas();

        // AI Terminal
        const aiInput = document.getElementById('ai-input');
        const termOut = document.getElementById('terminal-output');
        async function handleCommand(cmd) {
            termOut.innerHTML += `<div><span class="text-blue-400">➜</span> <span class="text-gray-300">${cmd}</span></div>`;
            const loadId = 'l-'+Date.now(); termOut.innerHTML += `<div id="${loadId}" class="text-gray-500 italic text-xs">Processing...</div>`;
            termOut.scrollTop = termOut.scrollHeight; await new Promise(r => setTimeout(r, 600)); document.getElementById(loadId).remove();
            let resp = "I can provide info on Skills, Experience, or specific Tech.";
            const lCmd = cmd.toLowerCase();
            if(lCmd.includes('vue')||lCmd.includes('react')||lCmd.includes('stack')) resp = "Proficient in Vue.js (Nuxt) and React (Next.js). Optimized Planhat homepage load times.";
            else if(lCmd.includes('experience')||lCmd.includes('work')) resp = "Senior Engineer at Planhat. Previously Lead at Xamplifier.";
            else if(lCmd.includes('contact')) resp = "Contact: kyriakosmichael@icloud.com";
            termOut.innerHTML += `<div class="text-gray-200 border-l-2 border-accent pl-3 py-1">${resp}</div>`; termOut.scrollTop = termOut.scrollHeight;
        }
        aiInput.addEventListener('keydown', e => { if(e.key==='Enter'&&aiInput.value.trim()) { handleCommand(aiInput.value); aiInput.value=''; } });
        document.querySelectorAll('.quick-prompt').forEach(b => b.addEventListener('click', () => handleCommand(b.innerText.replace(/"/g,""))));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="loader" id="loader">
<div className="flex flex-col items-center gap-4">
<div className="font-mono text-6xl md:text-8xl font-bold tracking-tighter" id="loader-text">0%</div>
<div className="w-32 h-[1px] bg-gray-800 relative overflow-hidden">
<div className="absolute inset-0 bg-accent w-0" id="loader-progress"></div>
</div>
</div>
</div>

<div className="cursor-dot"></div>
<div className="cursor-circle"></div>

<nav className="fixed top-0 left-0 w-full px-4 md:px-6 py-5 flex justify-between items-center z-50 mix-blend-difference text-white pointer-events-none">
<a className="font-mono text-sm font-semibold uppercase tracking-widest hover:text-accent transition-colors pointer-events-auto" href="#">
            Kyriakos<br/>Michael
        </a>
<div className="flex items-center gap-4 md:gap-10 pointer-events-auto">
<div className="hidden md:flex gap-8 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
<a className="font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors" href="#work">Work</a>
<a className="font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors" href="#about">About</a>
<a className="font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors" href="#ai">AI</a>
</div>
<a className="bg-white text-black px-5 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-colors duration-200 magnetic-btn shadow-lg" href="#contact">
                Contact
            </a>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center px-4 md:px-6 pt-20 md:pt-0 overflow-hidden">

<canvas className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" id="hero-canvas"></canvas>

<div className="hero-glow animate-pulse-slow"></div>
<div className="max-w-[1800px] mx-auto w-full z-10 relative flex flex-col items-center text-center">

<div className="mb-8 md:mb-12 flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-md border border-white/20 shadow-sm opacity-0 hero-fade-in">
<div className="flex gap-1 h-3 items-center">
<span className="w-1 h-full bg-accent rounded-full animate-[pulse_1s_ease-in-out_infinite]"></span>
<span className="w-1 h-2/3 bg-accent rounded-full animate-[pulse_1.2s_ease-in-out_infinite]"></span>
<span className="w-1 h-full bg-accent rounded-full animate-[pulse_0.8s_ease-in-out_infinite]"></span>
</div>
<span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-primary font-medium">Open to Work</span>
</div>

<h1 className="text-[13vw] md:text-[10vw] leading-[0.9] font-semibold tracking-tighter text-primary uppercase mix-blend-darken flex flex-col items-center">
<div className="overflow-hidden"><span className="hero-char">Kyriakos</span></div>
<div className="overflow-hidden"><span className="hero-char">Michael</span></div>
</h1>

<div className="mt-8 md:mt-12 max-w-xl mx-auto opacity-0 hero-fade-in">
<p className="font-sans text-base md:text-xl text-secondary leading-relaxed text-balance">
                    Engineering scalable web applications with <span className="text-primary font-medium">React</span>, <span className="text-primary font-medium">Vue.js</span>, and <span className="text-primary font-medium">Node.js</span>.
                </p>
</div>

<div className="mt-10 md:mt-14 flex gap-4 opacity-0 hero-fade-in">
<button className="px-8 py-3 bg-primary text-white rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors duration-300 magnetic-btn" onclick="document.getElementById('work').scrollIntoView({behavior: 'smooth'})">
                    View Work
                </button>
<a className="px-4 py-3 border border-black/10 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200 magnetic-btn" href="https://github.com/kyriakosmichael" target="_blank">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="github"></i>
</a>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 hero-fade-in animate-bounce">
<i className="w-5 h-5 text-secondary/50" data-lucide="arrow-down"></i>
</div>
</section>

<div className="py-6 md:py-8 bg-primary text-white overflow-hidden border-y border-white/10 select-none">
<div className="marquee-track font-mono text-xs md:text-sm uppercase tracking-[0.3em]">
<span className="mx-4 md:mx-8">React</span><span className="text-accent">•</span>
<span className="mx-4 md:mx-8">Vue.js</span><span className="text-accent">•</span>
<span className="mx-4 md:mx-8">Node.js</span><span className="text-accent">•</span>
<span className="mx-4 md:mx-8">TypeScript</span><span className="text-accent">•</span>
<span className="mx-4 md:mx-8">AWS</span><span className="text-accent">•</span>
<span className="mx-4 md:mx-8">Next.js</span><span className="text-accent">•</span>
<span className="mx-4 md:mx-8">Laravel</span><span className="text-accent">•</span>
<span className="mx-4 md:mx-8">Docker</span><span className="text-accent">•</span>
<span className="mx-4 md:mx-8">CI/CD</span><span className="text-accent">•</span>
<span className="mx-4 md:mx-8">GraphQL</span><span className="text-accent">•</span>
<span className="mx-4 md:mx-8">React</span><span className="text-accent">•</span>
<span className="mx-4 md:mx-8">Vue.js</span><span className="text-accent">•</span>
<span className="mx-4 md:mx-8">Node.js</span><span className="text-accent">•</span>
<span className="mx-4 md:mx-8">TypeScript</span><span className="text-accent">•</span>
<span className="mx-4 md:mx-8">AWS</span><span className="text-accent">•</span>
</div>
</div>

<section className="px-4 md:px-6 py-20 md:py-32 max-w-[1800px] mx-auto" id="work">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 border-b border-black/10 pb-6">
<h2 className="text-4xl md:text-7xl font-semibold tracking-tighter uppercase">Selected Work</h2>
<span className="font-mono text-xs md:text-sm text-secondary mt-2 md:mt-0">(2023 — 2025)</span>
</div>
<div className="space-y-20 md:space-y-32">

<div className="group project-card grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
<div className="lg:col-span-7 overflow-hidden rounded-sm bg-gray-200 aspect-[4/3] md:aspect-[16/10] relative cursor-pointer">
<div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-colors duration-300"></div>
<img alt="Bookydays" className="project-img w-full h-full object-cover grayscale group-hover:grayscale-0 origin-center" src="https://placehold.co/1600x1000/111/FFF?text=Bookydays&amp;font=playfair"/>
</div>
<div className="lg:col-span-5 flex flex-col gap-4 md:gap-6">
<div className="flex items-center gap-3 font-mono text-[10px] md:text-xs uppercase tracking-widest text-accent">
<i className="w-3 h-3 md:w-4 md:h-4" data-lucide="layout-grid"></i>
<span>Full Stack Platform</span>
</div>
<h3 className="text-3xl md:text-5xl font-semibold tracking-tighter">Bookydays.cy</h3>
<p className="text-secondary text-base md:text-lg leading-relaxed">
                        A comprehensive booking engine for wellness and fitness services. Engineered for high availability using Vue.js and Node.js microservices.
                    </p>
<div className="flex flex-wrap gap-2 mt-1">
<span className="px-2 py-1 md:px-3 md:py-1 border border-black/10 rounded-full text-[10px] md:text-xs font-mono uppercase text-secondary bg-white">Vue.js</span>
<span className="px-2 py-1 md:px-3 md:py-1 border border-black/10 rounded-full text-[10px] md:text-xs font-mono uppercase text-secondary bg-white">Node.js</span>
<span className="px-2 py-1 md:px-3 md:py-1 border border-black/10 rounded-full text-[10px] md:text-xs font-mono uppercase text-secondary bg-white">MongoDB</span>
</div>
<a className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-widest mt-2 md:mt-4 hover:text-accent transition-colors magnetic-btn group/link" href="#">
                        View Project <i className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>

<div className="group project-card grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
<div className="lg:col-span-5 flex flex-col gap-4 md:gap-6 order-2 lg:order-1">
<div className="flex items-center gap-3 font-mono text-[10px] md:text-xs uppercase tracking-widest text-accent">
<i className="w-3 h-3 md:w-4 md:h-4" data-lucide="building-2"></i>
<span>Real Estate Core</span>
</div>
<h3 className="text-3xl md:text-5xl font-semibold tracking-tighter">Agensa.com.cy</h3>
<p className="text-secondary text-base md:text-lg leading-relaxed">
                        Advanced property listing platform featuring a custom CRM backend for agents. Built with Laravel for robust data handling and security.
                    </p>
<div className="flex flex-wrap gap-2 mt-1">
<span className="px-2 py-1 md:px-3 md:py-1 border border-black/10 rounded-full text-[10px] md:text-xs font-mono uppercase text-secondary bg-white">Laravel</span>
<span className="px-2 py-1 md:px-3 md:py-1 border border-black/10 rounded-full text-[10px] md:text-xs font-mono uppercase text-secondary bg-white">MySQL</span>
<span className="px-2 py-1 md:px-3 md:py-1 border border-black/10 rounded-full text-[10px] md:text-xs font-mono uppercase text-secondary bg-white">Alpine.js</span>
</div>
<a className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-widest mt-2 md:mt-4 hover:text-accent transition-colors magnetic-btn group/link" href="#">
                        View Project <i className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="lg:col-span-7 overflow-hidden rounded-sm bg-gray-200 aspect-[4/3] md:aspect-[16/10] relative cursor-pointer order-1 lg:order-2">
<div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-colors duration-300"></div>
<img alt="Agensa" className="project-img w-full h-full object-cover grayscale group-hover:grayscale-0 origin-center" src="https://placehold.co/1600x1000/111/FFF?text=Agensa&amp;font=playfair"/>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] text-gray-300 py-20 md:py-32 px-4 md:px-6 relative overflow-hidden" id="ai">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20"></div>
<div className="max-w-[1000px] mx-auto relative z-10">
<div className="text-center mb-10 md:mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
<span className="font-mono text-[10px] uppercase tracking-widest text-white">Gemini Powered</span>
</div>
<h2 className="text-3xl md:text-6xl font-semibold tracking-tighter text-white mb-4">Ask my AI Assistant</h2>
<p className="text-gray-400 max-w-md mx-auto font-light text-sm md:text-lg">
                    Query my background, tech stack, or availability. It reads directly from my resume data.
                </p>
</div>
<div className="w-full bg-[#0F0F0F] border border-white/10 rounded-lg shadow-2xl overflow-hidden flex flex-col">
<div className="bg-[#151515] px-4 py-3 flex items-center gap-4 border-b border-white/5 shrink-0">
<div className="flex gap-1.5 md:gap-2">
<div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="flex-1 text-center font-mono text-[10px] md:text-xs text-gray-500">kyriakos-bot — node — 80x24</div>
</div>
<div className="p-4 md:p-6 font-mono text-xs md:text-base h-[350px] md:h-[400px] flex flex-col bg-black/50 backdrop-blur-sm">
<div className="space-y-3 md:space-y-4 mb-2 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent" id="terminal-output">
<div className="text-green-400/90">
<span className="text-accent">➜</span>  ~  System online. Try asking: "What is your experience with AWS?"
                        </div>
</div>
<div className="flex items-center gap-2 md:gap-3 pt-3 border-t border-white/10 shrink-0">
<span className="text-accent">➜</span>
<span className="text-blue-400">~</span>
<input autocomplete="off" className="bg-transparent border-none outline-none text-white w-full placeholder-gray-700 focus:placeholder-gray-600" id="ai-input" placeholder="Type your question..." spellcheck="false" type="text"/>
</div>
</div>
</div>
<div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-6 md:mt-8">
<button className="quick-prompt px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded text-[10px] md:text-xs font-mono text-gray-400 transition-colors">"Core skills?"</button>
<button className="quick-prompt px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded text-[10px] md:text-xs font-mono text-gray-400 transition-colors">"Previous roles?"</button>
<button className="quick-prompt px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded text-[10px] md:text-xs font-mono text-gray-400 transition-colors">"Contact info?"</button>
</div>
</div>
</section>

<section className="px-4 md:px-6 py-20 md:py-32 bg-white" id="about">
<div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
<div className="relative">
<div className="md:sticky md:top-32">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter uppercase mb-6 md:mb-8">Career<br/>Timeline</h2>
<div className="w-12 md:w-16 h-1 bg-accent mb-6 md:mb-8"></div>
<p className="text-secondary text-base md:text-lg leading-relaxed">
                        Over 8 years of experience leading frontend teams and delivering complex, data-driven applications. Focused on performance optimization and clean architecture.
                    </p>
<div className="mt-8 md:mt-12 p-5 md:p-6 bg-background rounded-lg border border-black/5">
<h4 className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-accent mb-3">Education</h4>
<p className="font-semibold text-sm md:text-base">HND Computer Technology</p>
<p className="text-xs md:text-sm text-secondary">Computrain / 2012 - 2016</p>
</div>
</div>
</div>
<div className="space-y-12 md:space-y-16 border-l border-black/10 pl-6 md:pl-12 mt-4 md:mt-0">
<div className="relative group">
<div className="absolute -left-[1.95rem] md:-left-[3.25rem] top-1.5 md:top-2 w-2.5 h-2.5 md:w-3 md:h-3 bg-white border-2 border-accent rounded-full z-10 group-hover:bg-accent transition-colors"></div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight">Senior Software Engineer</h3>
<p className="font-mono text-xs md:text-sm text-accent mt-1 mb-3 uppercase tracking-wider">Planhat / Apr 2025 — Present</p>
<ul className="space-y-2 text-secondary list-disc pl-4 text-sm md:text-base marker:text-gray-300">
<li>Optimized homepage load time from 4s to &lt; 2.5s via Vue.js rendering improvements.</li>
<li>Architected a reusable component library based on Figma tokens.</li>
</ul>
</div>
<div className="relative group">
<div className="absolute -left-[1.95rem] md:-left-[3.25rem] top-1.5 md:top-2 w-2.5 h-2.5 md:w-3 md:h-3 bg-white border-2 border-gray-300 rounded-full z-10 group-hover:border-accent transition-colors"></div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight">Full Stack Developer</h3>
<p className="font-mono text-xs md:text-sm text-secondary mt-1 mb-3 uppercase tracking-wider">Proxify / Sep 2023 — Mar 2025</p>
<ul className="space-y-2 text-secondary list-disc pl-4 text-sm md:text-base marker:text-gray-300">
<li>Reduced bug reports by 66% through strict code review processes.</li>
<li>Deployed Laravel APIs handling 50k+ daily requests.</li>
</ul>
</div>
<div className="relative group">
<div className="absolute -left-[1.95rem] md:-left-[3.25rem] top-1.5 md:top-2 w-2.5 h-2.5 md:w-3 md:h-3 bg-white border-2 border-gray-300 rounded-full z-10 group-hover:border-accent transition-colors"></div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight">Lead Front-end Developer</h3>
<p className="font-mono text-xs md:text-sm text-secondary mt-1 mb-3 uppercase tracking-wider">Xamplifier Inc. / Sep 2018 — Sep 2023</p>
<ul className="space-y-2 text-secondary list-disc pl-4 text-sm md:text-base marker:text-gray-300">
<li>Managed a team of 5 developers in an Agile environment.</li>
<li>Maintained 99.9% uptime on AWS production environments.</li>
</ul>
</div>
</div>
</div>
</section>

<section className="px-4 md:px-6 py-20 md:py-40 bg-[#F5F5F5] border-t border-black/5" id="contact">
<div className="max-w-[1200px] mx-auto text-center">
<p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-accent mb-6">Status: Available</p>
<h2 className="text-5xl md:text-9xl font-semibold tracking-tighter uppercase mb-10 md:mb-12 leading-none text-primary">
                Let's Work<br/>Together
            </h2>
<div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12">
<a className="group flex items-center gap-3 text-lg md:text-2xl font-mono border-b border-black/20 pb-1 hover:border-accent hover:text-accent transition-all" href="mailto:kyriakosmichael@icloud.com">
<i className="w-4 h-4 md:w-5 md:h-5" data-lucide="mail"></i>
                    kyriakosmichael@icloud.com
                </a>
</div>
<div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center md:text-left border-t border-black/5 pt-12">
<div>
<h4 className="font-mono text-[10px] uppercase text-secondary mb-3">Socials</h4>
<a className="block text-sm md:text-base font-medium hover:text-accent transition-colors mb-1" href="#">LinkedIn</a>
<a className="block text-sm md:text-base font-medium hover:text-accent transition-colors" href="#">GitHub</a>
</div>
<div>
<h4 className="font-mono text-[10px] uppercase text-secondary mb-3">Location</h4>
<p className="text-sm md:text-base font-medium">Nicosia, Cyprus</p>
<p className="text-sm md:text-base font-medium text-secondary">Remote (Global)</p>
</div>
<div>
<h4 className="font-mono text-[10px] uppercase text-secondary mb-3">Stack</h4>
<p className="text-sm md:text-base font-medium">Vue / React</p>
<p className="text-sm md:text-base font-medium">Node / Laravel</p>
</div>
<div className="col-span-2 md:col-span-1 flex items-end justify-center md:justify-end mt-4 md:mt-0">
<button className="w-10 h-10 md:w-12 md:h-12 border border-black/10 bg-white rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors" onclick="lenis.scrollTo(0)">
<i className="w-5 h-5" data-lucide="arrow-up"></i>
</button>
</div>
</div>
</div>
</section>
<footer className="bg-primary py-6 text-center">
<p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">© 2025 Kyriakos Michael. Designed with code.</p>
</footer>


    </>
  );
}
