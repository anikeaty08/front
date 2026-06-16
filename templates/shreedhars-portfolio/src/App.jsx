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
background: '#050505',
surface: '#121212',
surfaceHover: '#1A1A1A',
primary: '#F8F8F8',
secondary: '#A1A1AA',
accent: '#3B82F6', // Electric Blue
purple: '#8B5CF6', // Purple Gradient Component
line: '#27272A'
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
widest: '0.15em',
},
fontSize: {
'xs': '0.75rem',
'sm': '0.875rem',
'base': '1rem',
'lg': '1.125rem',
'xl': '1.25rem',
'2xl': '1.5rem',
'3xl': '1.875rem',
'4xl': '2.25rem',
'5xl': '3rem',
'6xl': '3.75rem',
'7xl': '4.5rem',
'8xl': '6rem',
'9xl': '8rem',
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lenis Scrolling
        const lenis = new Lenis({
            duration: 0.8, 
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical', 
            smoothWheel: true,
        });
        function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
        requestAnimationFrame(raf);

        // GSAP Animations
        gsap.registerPlugin(ScrollTrigger);

        // Loader Sequence
        const loaderTimeline = gsap.timeline();
        loaderTimeline.to("#loader-progress", {
            width: "100%", duration: 1.0, ease: "power2.inOut",
            onUpdate: function() { document.getElementById("loader-text").innerText = Math.round(this.progress() * 100) + "%"; }
        })
        .to("#loader", { yPercent: -100, duration: 0.6, ease: "power4.inOut", delay: 0.1 })
        
        // Hero Reveal
        .to(".hero-glow", { opacity: 1, duration: 1.5, ease: "power2.out" }, "-=0.5")
        .to(".hero-char", {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.2,
            stagger: 0.05,
            ease: "power3.out"
        }, "-=1.0")
        .to(".hero-fade-in", {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
        }, "-=0.8");

        // Scroll Reveals
        document.querySelectorAll("section:not(:first-child)").forEach(section => {
            gsap.from(section.querySelectorAll("h2, h3, p, .project-card, .group, .quick-prompt"), {
                scrollTrigger: { trigger: section, start: "top 85%", toggleActions: "play none none reverse" },
                y: 30, opacity: 0, duration: 0.6, stagger: 0.05, ease: "power2.out"
            });
        });

        // Cursor Logic
        if (window.matchMedia("(pointer: fine)").matches) {
            const cursorDot = document.querySelector('.cursor-dot');
            const cursorCircle = document.querySelector('.cursor-circle');
            let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;

            document.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; gsap.to(cursorDot, { x: mouseX, y: mouseY, duration: 0 }); });
            gsap.ticker.add(() => {
                cursorX += (mouseX - cursorX) * 0.15; cursorY += (mouseY - cursorY) * 0.15;
                cursorCircle.style.left = cursorX + 'px'; cursorCircle.style.top = cursorY + 'px';
            });
            document.querySelectorAll('a, button, .magnetic-btn, .project-card, .group').forEach(el => {
                el.addEventListener('mouseenter', () => document.body.classList.add('hover-active'));
                el.addEventListener('mouseleave', () => document.body.classList.remove('hover-active'));
            });
        }

        // Magnetic Buttons
        document.querySelectorAll('.magnetic-btn').forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                gsap.to(btn, { x: (e.clientX - rect.left - rect.width / 2) * 0.3, y: (e.clientY - rect.top - rect.height / 2) * 0.3, duration: 0.2 });
            });
            btn.addEventListener('mouseleave', () => gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" }));
        });

        // Neural Network Canvas
        const canvas = document.getElementById('hero-canvas');
        const ctx = canvas.getContext('2d');
        let width, height, particles = [];
        
        function resizeCanvas() { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; }
        window.addEventListener('resize', resizeCanvas); 
        resizeCanvas();

        class Particle {
            constructor() { 
                this.x = Math.random() * width; 
                this.y = Math.random() * height; 
                this.vx = (Math.random() - 0.5) * 0.3; 
                this.vy = (Math.random() - 0.5) * 0.3; 
                this.size = Math.random() * 1.5; 
            }
            update() { 
                this.x += this.vx; this.y += this.vy; 
                if(this.x < 0) this.x = width; 
                if(this.x > width) this.x = 0; 
                if(this.y < 0) this.y = height; 
                if(this.y > height) this.y = 0; 
            }
            draw() { 
                ctx.fillStyle = '#8B5CF6'; // Purple dots
                ctx.beginPath(); 
                ctx.arc(this.x, this.y, this.size, 0, Math.PI*2); 
                ctx.fill(); 
            }
        }
        
        for(let i=0; i<40; i++) particles.push(new Particle());
        
        function animateCanvas() {
            ctx.clearRect(0,0,width,height); 
            ctx.strokeStyle = 'rgba(59, 130, 246, 0.12)'; // Electric blue lines
            ctx.lineWidth = 1;
            for(let i=0; i<particles.length; i++) {
                for(let j=i; j<particles.length; j++) {
                    const d = Math.sqrt((particles[i].x-particles[j].x)**2 + (particles[i].y-particles[j].y)**2);
                    if(d<140) { // Slightly longer connection distance for network feel
                        ctx.beginPath(); 
                        ctx.moveTo(particles[i].x,particles[i].y); 
                        ctx.lineTo(particles[j].x,particles[j].y); 
                        ctx.stroke(); 
                    }
                }
                particles[i].update(); 
                particles[i].draw();
            }
            requestAnimationFrame(animateCanvas);
        }
        animateCanvas();

        // AI Terminal Logic
        const aiInput = document.getElementById('ai-input');
        const termOut = document.getElementById('terminal-output');
        
        async function handleCommand(cmd) {
            termOut.innerHTML += `<div><span class="text-accent">➜</span> <span class="text-white">${cmd}</span></div>`;
            
            // Sim processing
            const loadId = 'l-'+Date.now(); 
            termOut.innerHTML += `<div id="${loadId}" class="text-gray-500 italic text-xs">Processing neural query...</div>`;
            termOut.scrollTop = termOut.scrollHeight; 
            
            await new Promise(r => setTimeout(r, 600)); 
            document.getElementById(loadId).remove();
            
            let resp = "Command not recognized. Try 'ai stack', 'experience', 'vision' or 'contact'.";
            const lCmd = cmd.toLowerCase();
            
            if(lCmd.includes('ai') || lCmd.includes('tech') || lCmd.includes('stack')) {
                resp = "Focus: AI Product Strategy, Predictive Systems, ML Fundamentals.<br>Tech Stack: Python, Data Analytics, AI APIs, Cloud Platforms.";
            }
            else if(lCmd.includes('exp') || lCmd.includes('work') || lCmd.includes('summary')) {
                resp = "Currently: Building AI-driven procurement tools at Agmatrix.<br>Key Project: AI Crop Demand Forecasting & Smart Procurement Engine.";
            }
            else if(lCmd.includes('vision') || lCmd.includes('goal')) {
                resp = "Applying AI to create smarter decision systems instead of simple software tools. Focusing on Agriculture & Supply Chains.";
            }
            else if(lCmd.includes('contact') || lCmd.includes('mail')) {
                resp = "Email: shridharkhobe.93@gmail.com <br> Phone: +91 9322154505";
            }
            
            termOut.innerHTML += `<div class="text-gray-300 border-l-2 border-purple pl-3 py-1 mb-2">${resp}</div>`; 
            termOut.scrollTop = termOut.scrollHeight;
        }

        aiInput.addEventListener('keydown', e => { 
            if(e.key==='Enter' && aiInput.value.trim()) { 
                handleCommand(aiInput.value); 
                aiInput.value=''; 
            } 
        });
        
        document.querySelectorAll('.quick-prompt').forEach(b => 
            b.addEventListener('click', () => handleCommand(b.innerText.replace(/"/g,"")))
        );
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="loader" id="loader">
<div className="flex flex-col items-center gap-4">
<div className="font-mono text-5xl md:text-7xl font-medium tracking-tight text-white" id="loader-text">0%</div>
<div className="w-32 h-[1px] bg-white/10 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-accent to-purple w-0" id="loader-progress"></div>
</div>
</div>
</div>

<div className="cursor-dot"></div>
<div className="cursor-circle"></div>

<nav className="fixed top-0 left-0 w-full px-4 md:px-6 py-5 flex justify-between items-center z-50 mix-blend-difference text-white pointer-events-none">
<a className="uppercase hover:text-accent transition-colors pointer-events-auto leading-tight text-xs font-medium tracking-widest font-mono" href="#">ShreedharKhobe<br/></a>
<div className="flex items-center gap-4 md:gap-10 pointer-events-auto">
<div className="hidden md:flex gap-8 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
<a className="font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors" href="#about">About</a>
<a className="font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors" href="#explorations">AI Work</a>
<a className="font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors" href="#projects">Projects</a>
<a className="uppercase hover:text-accent transition-colors text-xs tracking-widest font-mono" href="#intelligence">Terminal</a>
</div>
<a className="bg-white text-black px-5 py-2 rounded-full font-mono text-xs font-medium uppercase tracking-widest hover:bg-accent hover:text-white transition-colors duration-200 magnetic-btn shadow-[0_0_20px_rgba(59,130,246,0.2)]" href="#contact">
                Contact
            </a>
</div>
</nav>

<section className="min-h-screen flex flex-col md:px-6 md:pt-0 overflow-hidden pt-20 pr-4 pl-4 relative items-center justify-center">

<canvas className="absolute top-0 left-0 w-full h-full opacity-60 pointer-events-none" height="829" id="hero-canvas" width="1120"></canvas>

<div className="hero-glow animate-pulse-slow"></div>
<div className="max-w-[1800px] mx-auto w-full z-10 relative flex flex-col items-center text-center">

<div className="mb-8 md:mb-10 flex items-center gap-3 px-4 py-1.5 rounded-full bg-surface/50 backdrop-blur-md border border-white/10 shadow-lg opacity-0 hero-fade-in">
<div className="flex gap-1 h-3 items-center">
<span className="w-1 h-full bg-accent rounded-full animate-[pulse_1s_ease-in-out_infinite]"></span>
<span className="w-1 h-2/3 bg-purple rounded-full animate-[pulse_1.2s_ease-in-out_infinite]"></span>
<span className="w-1 h-full bg-accent rounded-full animate-[pulse_0.8s_ease-in-out_infinite]"></span>
</div>
<span className="font-mono text-[10px] uppercase tracking-widest text-primary font-medium">Exploring AI • Pune, IN</span>
</div>

<h1 className="text-[13vw] md:text-[10vw] leading-[0.9] font-medium tracking-tight uppercase flex flex-col items-center">
<div className="overflow-hidden"><span className="hero-char text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple">AI Product</span></div>
<div className="overflow-hidden"><span className="hero-char text-primary">Thinker</span></div>
</h1>

<div className="mt-8 md:mt-10 max-w-2xl mx-auto opacity-0 hero-fade-in">
<p className="md:text-xl text-secondary leading-relaxed text-balance text-base font-sans font-light">Exploring how <span className="text-primary font-medium">Artificial Intelligence</span> can transform agriculture, supply chains, and real-world systems.</p>
</div>

<div className="mt-10 md:mt-12 flex gap-4 opacity-0 hero-fade-in">
<button className="px-8 py-3 bg-white text-black rounded-full font-mono text-xs font-medium uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300 magnetic-btn shadow-[0_0_20px_rgba(59,130,246,0.15)]" onclick="document.getElementById('explorations').scrollIntoView({behavior: 'smooth'})">
                    Explore My AI Work
                </button>
<a className="px-6 py-3 border border-white/10 bg-surface/50 backdrop-blur-sm rounded-full hover:bg-white/10 transition-colors duration-200 magnetic-btn flex items-center justify-center font-mono text-xs uppercase tracking-widest text-primary" href="#projects">
                    View Projects
                </a>
</div>
</div>
</section>

<div className="py-6 md:py-8 bg-surface border-y border-white/5 overflow-hidden select-none">
<div className="marquee-track font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-secondary">
<span className="mx-6">Machine Learning</span><span className="text-accent text-[10px]">■</span>
<span className="mx-6">Python</span><span className="text-purple text-[10px]">■</span>
<span className="mx-6">Data Pipelines</span><span className="text-accent text-[10px]">■</span>
<span className="mx-6">AI Product Strategy</span><span className="text-purple text-[10px]">■</span>
<span className="mx-6">LLMs &amp; Agents</span><span className="text-accent text-[10px]">■</span>
<span className="mx-6">Data Analytics</span><span className="text-purple text-[10px]">■</span>
<span className="mx-6">Cloud Platforms</span><span className="text-accent text-[10px]">■</span>
<span className="mx-6">Predictive Systems</span><span className="text-purple text-[10px]">■</span>
<span className="mx-6">Machine Learning</span><span className="text-accent text-[10px]">■</span>
<span className="mx-6">Python</span><span className="text-purple text-[10px]">■</span>
<span className="mx-6">Data Pipelines</span><span className="text-accent text-[10px]">■</span>
<span className="mx-6">AI Product Strategy</span><span className="text-purple text-[10px]">■</span>
</div>
</div>

<section className="px-4 md:px-6 py-24 max-w-[1200px] mx-auto text-center border-b border-white/5" id="about">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-primary mb-8">Building Intelligent Systems</h2>
<p className="text-secondary text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto text-balance">
            I am a product thinker deeply interested in <span className="text-primary font-medium">Artificial Intelligence, data systems</span>, and how technology can solve real-world problems. My work focuses on building intelligent platforms that combine software, operational data, and human decision-making.
        </p>
<p className="text-secondary text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto mt-6">
            I enjoy translating complex technical machine learning concepts into practical, scalable products.
        </p>
</section>

<section className="px-4 md:px-6 py-20 md:py-32 max-w-[1400px] mx-auto" id="explorations">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/5 pb-6">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-primary">AI Experiments &amp; Explorations</h2>
<span className="font-mono text-xs md:text-sm text-secondary mt-2 md:mt-0 uppercase tracking-widest">Current Focus Areas</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-surface border border-white/10 p-6 md:p-8 rounded-xl hover:border-accent/50 transition-colors group">
<div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-primary mb-3">AI + Agriculture</h3>
<p className="text-sm text-secondary font-light leading-relaxed">Using predictive AI to forecast crop demand and optimize agricultural procurement systems at scale.</p>
</div>

<div className="bg-surface border border-white/10 p-6 md:p-8 rounded-xl hover:border-purple/50 transition-colors group">
<div className="w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center text-purple mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:database-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-primary mb-3">Data Intelligence</h3>
<p className="text-sm text-secondary font-light leading-relaxed">Designing systems that convert raw operational data into actionable, automated insights.</p>
</div>

<div className="bg-surface border border-white/10 p-6 md:p-8 rounded-xl hover:border-accent/50 transition-colors group">
<div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shop-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-primary mb-3">AI Marketplaces</h3>
<p className="text-sm text-secondary font-light leading-relaxed">Exploring how artificial intelligence can optimize supply-demand matching in digital B2B networks.</p>
</div>

<div className="bg-surface border border-white/10 p-6 md:p-8 rounded-xl hover:border-purple/50 transition-colors group">
<div className="w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center text-purple mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:cpu-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-primary mb-3">Product Thinking</h3>
<p className="text-sm text-secondary font-light leading-relaxed">Applying AI capabilities to create smarter decision systems instead of simple, static software tools.</p>
</div>
</div>
</section>

<section className="px-4 md:px-6 py-20 md:py-32 max-w-[1600px] mx-auto" id="projects">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 border-b border-white/5 pb-6">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-primary">AI Projects &amp; Concepts</h2>
<span className="font-mono text-xs md:text-sm text-secondary mt-2 md:mt-0 uppercase tracking-widest">Agmatrix Showcase</span>
</div>
<div className="space-y-24 md:space-y-36">

<div className="group project-card grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
<div className="lg:col-span-7 overflow-hidden rounded-xl bg-surface border border-white/10 aspect-[4/3] md:aspect-[16/10] relative cursor-pointer shadow-lg group-hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-500">

<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none z-0"></div>
<div className="w-full h-full p-2 md:p-4 overflow-hidden select-none relative z-10 flex items-center justify-center">

<div className="w-full h-[95%] bg-[#F9FAFB] rounded-lg overflow-hidden flex flex-col md:flex-row shadow-2xl border border-white/20 font-sans transform transition-transform group-hover:scale-[1.02] duration-500">

<div className="hidden md:flex w-44 bg-white border-r border-gray-100 flex-col py-4 px-2 shrink-0">
<div className="flex items-center gap-2 mb-6 px-2">
<div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">A</div>
<span className="font-medium text-gray-800 text-sm tracking-tight">AgMatrix AI</span>
</div>
<div className="space-y-0.5">
<div className="flex items-center gap-3 bg-blue-50 text-blue-700 px-3 py-2 rounded-md cursor-pointer">
<iconify-icon icon="solar:widget-linear" width="14"></iconify-icon>
<span className="text-xs font-medium">Intelligence</span>
</div>
<div className="flex items-center gap-3 text-gray-500 px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer">
<iconify-icon icon="solar:chart-square-linear" width="14"></iconify-icon>
<span className="text-xs font-medium">Forecasts</span>
</div>
<div className="flex items-center gap-3 text-gray-500 px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer">
<iconify-icon icon="solar:users-group-rounded-linear" width="14"></iconify-icon>
<span className="text-xs font-medium">FPO Network</span>
</div>
<div className="flex items-center gap-3 text-gray-500 px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer">
<iconify-icon icon="solar:box-linear" width="14"></iconify-icon>
<span className="text-xs font-medium">Smart Inv</span>
</div>
</div>
</div>

<div className="flex-1 flex flex-col p-4 md:p-6 overflow-hidden bg-[#FAFAFA]">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-medium text-gray-900 tracking-tight">Demand Intelligence</h3>
<button className="bg-blue-600 text-white px-3 py-1.5 rounded-md flex items-center gap-1.5 shadow-sm">
<iconify-icon icon="solar:magic-stick-3-linear" width="14"></iconify-icon>
<span className="text-xs font-medium">Run AI Model</span>
</button>
</div>
<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">

<div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-bl-full"></div>
<div className="flex justify-between items-start mb-2 relative z-10">
<div>
<p className="text-blue-600 text-[10px] uppercase tracking-wider font-medium mb-1 flex items-center gap-1"><iconify-icon icon="solar:stars-linear" width="10"></iconify-icon> Predicted Demand</p>
<p className="text-base font-medium text-gray-900 tracking-tight">12.5k Tons</p>
</div>
</div>
<div className="flex justify-between items-center text-[10px] relative z-10">
<span className="text-green-600 font-medium">+14% vs Last Season</span>
<span className="text-gray-400">98% Confidence</span>
</div>
</div>

<div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex flex-col justify-between">
<div className="flex justify-between items-start mb-2">
<div>
<p className="text-gray-400 text-[10px] uppercase tracking-wider font-medium mb-1">Procurement Risk</p>
<p className="text-base font-medium text-gray-900 tracking-tight">Low</p>
</div>
</div>
<div className="w-full bg-gray-100 h-1.5 rounded-full mt-2">
<div className="bg-green-500 h-1.5 rounded-full w-[20%]"></div>
</div>
</div>
</div>

<div className="flex-1 bg-white p-5 rounded-lg border border-gray-100 shadow-sm flex flex-col min-h-0">
<div className="mb-4">
<h4 className="font-medium text-gray-900 text-sm">Crop Demand Forecast</h4>
<p className="text-[10px] text-gray-400 mt-0.5">AI projection based on historical weather &amp; market data</p>
</div>
<div className="flex-1 w-full relative flex items-end px-2 pb-4">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 50">

<path d="M0,40 L20,35 L40,38 L60,25" fill="none" stroke="#9CA3AF" strokeLinecap="round" strokeWidth="1.5"></path>

<path d="M60,25 L80,15 L100,5" fill="none" stroke="#3B82F6" stroke-dasharray="3,3" strokeLinecap="round" strokeWidth="1.5"></path>

<path d="M60,25 L80,15 L100,5 V50 H60 Z" fill="rgba(59, 130, 246, 0.1)"></path>

<line stroke="#f0f0f0" stroke-dasharray="2" strokeWidth="0.5" x1="0" x2="100" y1="25" y2="25"></line>
<line stroke="#3B82F6" stroke-dasharray="2" strokeWidth="0.5" x1="60" x2="60" y1="0" y2="50"></line>
</svg>
<div className="absolute bottom-[-15px] left-0 w-full flex justify-between text-gray-400 text-[9px] font-mono px-1">
<span>Jan</span><span>Actual Data</span><span className="text-blue-500">AI Projection</span><span>Dec</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5 flex flex-col gap-4 md:gap-6">
<div className="flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-widest text-accent">
<iconify-icon icon="solar:magic-stick-3-linear" width="16"></iconify-icon>
<span>AI-Powered Platform</span>
</div>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-primary">AgMatrix – AI Driven FPO Procurement</h3>
<p className="text-secondary text-base md:text-lg leading-relaxed font-light">
                        AI-powered demand aggregation platform for agricultural inputs. Re-imagined the core ERP by introducing predictive modeling to forecast crop input needs, optimizing inventory and reducing waste across the supply chain.
                    </p>
<div className="flex flex-wrap gap-2 mt-2">
<span className="px-3 py-1 border border-white/10 rounded-full text-[10px] font-mono uppercase text-secondary bg-surface">Predictive AI</span>
<span className="px-3 py-1 border border-white/10 rounded-full text-[10px] font-mono uppercase text-secondary bg-surface">Product Strategy</span>
<span className="px-3 py-1 border border-white/10 rounded-full text-[10px] font-mono uppercase text-secondary bg-surface">Data Pipelines</span>
</div>
</div>
</div>

<div className="group project-card grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
<div className="lg:col-span-5 flex flex-col gap-4 md:gap-6 order-2 lg:order-1">
<div className="flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-widest text-purple">
<iconify-icon icon="solar:cpu-linear" width="16"></iconify-icon>
<span>Matchmaking Algorithm</span>
</div>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-primary">Smart Procurement Engine</h3>
<p className="text-secondary text-base md:text-lg leading-relaxed font-light">
                        Conceptualized an AI system that matches agricultural buyers and suppliers using intent signals and historical transaction data. Designed the product logic to convert qualitative interactions into structured procurement matches.
                    </p>
<div className="flex flex-wrap gap-2 mt-2">
<span className="px-3 py-1 border border-white/10 rounded-full text-[10px] font-mono uppercase text-secondary bg-surface">Recommendation Systems</span>
<span className="px-3 py-1 border border-white/10 rounded-full text-[10px] font-mono uppercase text-secondary bg-surface">Data Analysis</span>
<span className="px-3 py-1 border border-white/10 rounded-full text-[10px] font-mono uppercase text-secondary bg-surface">UX Research</span>
</div>
</div>
<div className="lg:col-span-7 overflow-hidden rounded-xl bg-surface border border-white/10 aspect-[4/3] md:aspect-[16/10] relative cursor-pointer shadow-lg group-hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] transition-all duration-500 order-1 lg:order-2">
<div className="w-full h-full p-2 md:p-4 overflow-hidden select-none relative z-10 flex items-center justify-center">

<div className="w-full h-[95%] bg-white rounded-lg overflow-hidden flex flex-col relative border border-white/20 font-sans transform transition-transform group-hover:scale-[1.02] duration-500 shadow-2xl">

<div className="bg-white border-b border-gray-100 p-3 md:p-4 flex justify-between items-center z-10">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple/10 flex items-center justify-center text-purple shadow-sm border border-purple/20">
<iconify-icon icon="solar:layers-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-gray-900 text-sm tracking-tight">Signal Matcher</h4>
<p className="text-[10px] text-gray-500 font-medium">Intent-based supplier routing</p>
</div>
</div>
</div>
<div className="flex flex-1 overflow-hidden">

<div className="w-full sm:w-2/3 p-4 flex flex-col gap-3 overflow-hidden bg-[#FAFAFA]">
<div className="flex justify-between items-center mb-1">
<span className="text-[10px] font-medium uppercase text-gray-400 tracking-wider">Active Matches</span>
<iconify-icon className="text-gray-400" icon="solar:filter-linear" width="12"></iconify-icon>
</div>

<div className="bg-white p-3 rounded-lg border border-purple/20 shadow-sm flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-[10px]">RV</div>
<div>
<p className="text-xs font-medium text-gray-900">Ramesh Verma • Cotton</p>
<p className="text-[9px] text-purple flex items-center gap-1 mt-0.5"><iconify-icon icon="solar:stars-linear" width="10"></iconify-icon> High Intent Signal</p>
</div>
</div>
<div className="text-right">
<div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-50 text-green-700 text-[9px] font-medium border border-green-100">
                                                94% Match
                                            </div>
</div>
</div>

<div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-[10px]">SP</div>
<div>
<p className="text-xs font-medium text-gray-900">Suresh Patil • Sugarcane</p>
<p className="text-[9px] text-gray-500 mt-0.5">Exploring Options</p>
</div>
</div>
<div className="text-right">
<div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-50 text-blue-700 text-[9px] font-medium border border-blue-100">
                                                72% Match
                                            </div>
</div>
</div>
</div>

<div className="hidden sm:flex w-1/3 bg-white border-l border-gray-100 p-4 flex-col gap-5">
<div className="p-3 bg-purple/5 rounded-lg border border-purple/10">
<div className="flex items-center gap-1.5 text-purple mb-2">
<iconify-icon icon="solar:cpu-linear" width="12"></iconify-icon>
<span className="text-[9px] font-bold uppercase tracking-wide">System Insight</span>
</div>
<p className="text-[10px] text-gray-700 leading-relaxed font-medium">
                                            Algorithm detected a 3x increase in regional inquiries for Cotton seeds. Recommending immediate supplier matching.
                                        </p>
</div>
<div>
<p className="text-[9px] uppercase tracking-widest text-gray-400 font-medium mb-3">Model Confidence</p>
<div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-blue-400 to-purple w-[88%] rounded-full"></div>
</div>
<p className="text-right text-[9px] text-gray-500 mt-1">88% (Based on 10k datapoints)</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-4 md:px-6 py-20 border-y border-white/5 bg-surface/30">
<div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

<div>
<div className="flex items-center gap-2 mb-8">
<iconify-icon className="text-accent" icon="solar:book-bookmark-linear" width="20"></iconify-icon>
<h3 className="text-2xl font-medium tracking-tight text-primary">Continuous Learning</h3>
</div>
<div className="space-y-4">
<div className="p-4 bg-surface border border-white/5 rounded-lg flex items-center justify-between group hover:border-accent/30 transition-colors">
<span className="text-primary font-medium text-sm">Machine Learning Fundamentals</span>
<iconify-icon className="text-secondary group-hover:text-accent transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="p-4 bg-surface border border-white/5 rounded-lg flex items-center justify-between group hover:border-accent/30 transition-colors">
<span className="text-primary font-medium text-sm">AI Agents &amp; Automation</span>
<iconify-icon className="text-secondary group-hover:text-accent transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="p-4 bg-surface border border-white/5 rounded-lg flex items-center justify-between group hover:border-accent/30 transition-colors">
<span className="text-primary font-medium text-sm">Data Pipelines &amp; Analytics</span>
<iconify-icon className="text-secondary group-hover:text-accent transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-2 mb-8">
<iconify-icon className="text-purple" icon="solar:document-text-linear" width="20"></iconify-icon>
<h3 className="text-2xl font-medium tracking-tight text-primary">Thinking &amp; Ideas</h3>
</div>
<div className="space-y-6">
<a className="block group" href="#">
<p className="text-xs text-secondary font-mono mb-1 uppercase tracking-widest">Concept</p>
<h4 className="text-lg font-medium text-primary group-hover:text-purple transition-colors">How AI Can Transform Indian Agriculture</h4>
</a>
<a className="block group" href="#">
<p className="text-xs text-secondary font-mono mb-1 uppercase tracking-widest">Strategy</p>
<h4 className="text-lg font-medium text-primary group-hover:text-purple transition-colors">Data Intelligence for FPO Networks</h4>
</a>
<a className="block group" href="#">
<p className="text-xs text-secondary font-mono mb-1 uppercase tracking-widest">Marketplaces</p>
<h4 className="text-lg font-medium text-primary group-hover:text-purple transition-colors">Why AI Marketplaces Will Replace Traditional Supply Chains</h4>
</a>
</div>
</div>
</div>
</section>

<section className="bg-surface/50 py-20 md:py-32 px-4 md:px-6 relative overflow-hidden" id="intelligence">
<div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
<div className="max-w-[1000px] mx-auto relative z-10">
<div className="text-center mb-10 md:mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
<iconify-icon className="text-accent" icon="solar:stars-linear" width="14"></iconify-icon>
<span className="font-mono text-[10px] uppercase tracking-widest text-primary">Interactive System</span>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-primary mb-4">Query My Knowledge Base</h2>
<p className="text-secondary max-w-md mx-auto font-light text-sm md:text-base">
                    Interact with an AI interface trained on my product strategy, ML learnings, and technical stack.
                </p>
</div>
<div className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/5 before:to-transparent before:pointer-events-none">
<div className="bg-surface px-4 py-3 flex items-center gap-4 border-b border-white/5 shrink-0">
<div className="flex gap-1.5 md:gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
</div>
<div className="flex-1 text-center font-mono text-[10px] text-gray-500">shridhar-bot — ai-product-brain — v2.0</div>
</div>
<div className="p-4 md:p-6 font-mono text-xs md:text-sm h-[350px] md:h-[400px] flex flex-col bg-transparent z-10">
<div className="space-y-3 mb-2 flex-1 overflow-y-auto thin-scroll text-gray-300" id="terminal-output">
<div className="text-accent/90">
<span className="text-accent">➜</span>  ~  System initialized. Ask about: "AI Stack", "Experience", or "Vision".
                        </div>
</div>
<div className="flex items-center gap-2 pt-3 border-t border-white/10 shrink-0">
<span className="text-accent">➜</span>
<input autocomplete="off" className="bg-transparent border-none outline-none text-white w-full placeholder-gray-600 focus:placeholder-gray-500" id="ai-input" placeholder="Type query..." type="text"/>
</div>
</div>
</div>
<div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-6 relative z-10">
<button className="quick-prompt px-3 py-2 bg-surface hover:bg-white/10 border border-white/10 rounded-lg text-[10px] font-mono text-secondary transition-colors">"AI Stack?"</button>
<button className="quick-prompt px-3 py-2 bg-surface hover:bg-white/10 border border-white/10 rounded-lg text-[10px] font-mono text-secondary transition-colors">"Vision?"</button>
<button className="quick-prompt px-3 py-2 bg-surface hover:bg-white/10 border border-white/10 rounded-lg text-[10px] font-mono text-secondary transition-colors">"Contact?"</button>
</div>
</div>
</section>

<section className="px-4 md:px-6 py-20 md:py-40 bg-background border-t border-white/5 relative overflow-hidden" id="contact">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-[1200px] mx-auto text-center relative z-10">
<p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-accent mb-6">Open to Opportunities</p>
<h2 className="text-5xl md:text-8xl font-medium tracking-tight uppercase mb-10 md:mb-12 leading-none text-primary">
                Let's Build<br/>Intelligence
            </h2>
<div className="flex flex-col justify-center items-center gap-6">
<a className="group flex items-center gap-3 text-lg md:text-2xl font-mono border-b border-white/10 pb-1 hover:border-accent text-primary hover:text-accent transition-all" href="mailto:shridharkhobe.93@gmail.com">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
                    shridharkhobe.93@gmail.com
                </a>
<a className="group flex items-center gap-3 text-base md:text-xl font-mono text-secondary hover:text-primary transition-colors" href="tel:+919322154505">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
                    +91 93221 54505
                </a>
</div>
<div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left border-t border-white/10 pt-12">
<div>
<h4 className="font-mono text-[10px] uppercase text-secondary mb-4 tracking-widest">Connect</h4>
<a className="block text-sm font-medium text-primary hover:text-accent transition-colors mb-2" href="#">LinkedIn</a>
<a className="block text-sm font-medium text-primary hover:text-accent transition-colors" href="#">GitHub</a>
</div>
<div>
<h4 className="font-mono text-[10px] uppercase text-secondary mb-4 tracking-widest">Location</h4>
<p className="text-sm font-medium text-primary">Kondhwa BK, Pune</p>
<p className="text-sm font-medium text-secondary">Maharashtra, India</p>
</div>
<div>
<h4 className="font-mono text-[10px] uppercase text-secondary mb-4 tracking-widest">AI Stack</h4>
<p className="text-sm font-medium text-primary">Python / ML Fundamentals</p>
<p className="text-sm font-medium text-secondary">Data Analytics / APIs</p>
</div>
<div className="flex items-end justify-center md:justify-end mt-4 md:mt-0">
<button className="w-12 h-12 border border-white/10 bg-surface rounded-full flex items-center justify-center text-primary hover:bg-accent hover:border-accent transition-all duration-300 group" onclick="lenis.scrollTo(0)">
<iconify-icon className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</section>
<footer className="bg-background py-6 text-center border-t border-white/5">
<p className="font-mono text-[10px] text-secondary uppercase tracking-widest mb-2">Exploring the intersection of AI, data, and real-world systems.</p>
<p className="font-mono text-[10px] text-secondary/50 uppercase tracking-widest">© 2026 Shreedhar Khobe.</p>
</footer>


    </>
  );
}
