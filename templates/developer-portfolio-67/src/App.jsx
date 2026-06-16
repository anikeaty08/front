import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons({
            attrs: {
                "stroke-width": 1.5
            }
        });

        // Mouse Tracker for Spotlight
        const updateMousePosition = (e) => {
            const x = e.clientX;
            const y = e.clientY;
            document.documentElement.style.setProperty('--mouse-x', `${x}px`);
            document.documentElement.style.setProperty('--mouse-y', `${y}px`);
        };
        window.addEventListener('mousemove', updateMousePosition);

        // React Bits Inspired: Flickering Grid Canvas
        const canvas = document.getElementById('grid-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let squares = [];
        const squareSize = 50;
        const gap = 1;

        function resize() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initGrid();
        }

        function initGrid() {
            squares = [];
            const cols = Math.ceil(width / squareSize);
            const rows = Math.ceil(height / squareSize);

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    squares.push({
                        x: i * squareSize,
                        y: j * squareSize,
                        opacity: 0,
                        targetOpacity: 0,
                        speed: 0.02 + Math.random() * 0.03,
                        state: 'idle' // idle, fading-in, fading-out
                    });
                }
            }
        }

        function drawGrid() {
            ctx.clearRect(0, 0, width, height);
            
            // Draw static faint grid
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
            ctx.lineWidth = 1;
            
            ctx.beginPath();
            for (let x = 0; x <= width; x += squareSize) {
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
            }
            for (let y = 0; y <= height; y += squareSize) {
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
            }
            ctx.stroke();

            // Animate squares
            squares.forEach(sq => {
                // Randomly trigger fade in
                if (sq.state === 'idle' && Math.random() < 0.0005) {
                    sq.state = 'fading-in';
                    sq.targetOpacity = 0.3 + Math.random() * 0.4; // max opacity
                }

                if (sq.state === 'fading-in') {
                    sq.opacity += sq.speed;
                    if (sq.opacity >= sq.targetOpacity) {
                        sq.opacity = sq.targetOpacity;
                        sq.state = 'fading-out';
                    }
                } else if (sq.state === 'fading-out') {
                    sq.opacity -= sq.speed;
                    if (sq.opacity <= 0) {
                        sq.opacity = 0;
                        sq.state = 'idle';
                    }
                }

                if (sq.opacity > 0) {
                    ctx.fillStyle = `rgba(50, 255, 100, ${sq.opacity * 0.15})`; // Subtle green tint
                    ctx.fillRect(sq.x, sq.y, squareSize - 1, squareSize - 1);
                }
            });

            requestAnimationFrame(drawGrid);
        }

        window.addEventListener('resize', resize);
        resize();
        drawGrid();

        // Magnetic Buttons Logic
        const magnets = document.querySelectorAll('.magnet-btn');
        magnets.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0, 0)';
            });
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-overlay"></div>
<div id="canvas-container">
<canvas id="grid-canvas"></canvas>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tighter text-lg hover:text-neutral-300 transition-colors blur-reveal" href="#">
                fahad.alarifee
            </a>
<div className="hidden sm:flex gap-6 text-sm font-medium blur-reveal blur-reveal-delay-1">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#projects">Projects</a>
<a className="hover:text-white transition-colors" href="#experience">Experience</a>
</div>
<a className="blur-reveal blur-reveal-delay-1 text-sm font-medium text-white bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 px-4 py-1.5 rounded-full transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]" href="mailto:contact@rkiza.com">
                Contact
            </a>
</div>
</nav>
<main className="max-w-3xl mx-auto px-6 pt-32 space-y-24">

<section className="space-y-6">
<div className="blur-reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs font-medium text-neutral-300 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Available for new opportunities
            </div>
<h1 className="blur-reveal blur-reveal-delay-1 text-4xl sm:text-5xl font-medium tracking-tight text-white leading-[1.1]">
                Hello! 👋 <br/>
                I'm <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">Fahad Alarifee</span>
</h1>
<p className="blur-reveal blur-reveal-delay-2 text-lg sm:text-xl text-neutral-400 max-w-xl font-light leading-relaxed">
                Full-Stack Software Engineer &amp; Founder of <span className="text-white font-medium">Rkiza</span>. 
                Building scalable SaaS solutions and AI-powered platforms with modern architecture.
            </p>
<div className="blur-reveal blur-reveal-delay-3 flex flex-wrap gap-3 pt-2">
<a className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors" href="#projects">
                    View Work
                </a>
<div className="flex gap-2">
<a className="magnet-btn spotlight-card inline-flex items-center justify-center h-10 w-10 rounded-md border border-neutral-800 hover:border-neutral-600 hover:text-white transition-colors" href="https://github.com/fahadalarifee" target="_blank">
<i className="w-4 h-4 z-10 relative" data-lucide="github"></i>
</a>
<a className="magnet-btn spotlight-card inline-flex items-center justify-center h-10 w-10 rounded-md border border-neutral-800 hover:border-neutral-600 hover:text-white transition-colors" href="https://linkedin.com/in/fahadalarifee" target="_blank">
<i className="w-4 h-4 z-10 relative" data-lucide="linkedin"></i>
</a>
<a className="magnet-btn spotlight-card inline-flex items-center justify-center h-10 w-10 rounded-md border border-neutral-800 hover:border-neutral-600 hover:text-white transition-colors" href="https://twitter.com/fahadalarifee" target="_blank">
<i className="w-4 h-4 z-10 relative" data-lucide="twitter"></i>
</a>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 blur-reveal blur-reveal-delay-3" id="about">
<div className="space-y-6">
<h2 className="text-sm font-mono uppercase tracking-wider text-neutral-500">About Me</h2>
<div className="space-y-4 text-base leading-relaxed text-neutral-400">
<p>
                        I’m a Saudi Software Engineer and entrepreneur passionate about building scalable, intelligent, and visually refined digital products. 
                    </p>
<p>
                        As the founder of <span className="text-white">Rkiza</span>, I lead teams developing SaaS solutions and AI-powered platforms. I enjoy turning complex challenges into elegant, efficient systems using technologies like Next.js, Node.js, Golang, and MongoDB.
                    </p>
</div>
</div>
<div className="space-y-6">
<h2 className="text-sm font-mono uppercase tracking-wider text-neutral-500">Tech Stack</h2>
<div className="flex flex-wrap gap-2">

<span className="spotlight-card inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-neutral-800 text-xs font-medium hover:border-neutral-600 transition-colors cursor-default bg-neutral-900/40">
<i className="w-3.5 h-3.5 text-yellow-500/80 z-10 relative" data-lucide="file-code-2"></i> <span className="z-10 relative">JavaScript</span>
</span>
<span className="spotlight-card inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-neutral-800 text-xs font-medium hover:border-neutral-600 transition-colors cursor-default bg-neutral-900/40">
<i className="w-3.5 h-3.5 text-blue-500/80 z-10 relative" data-lucide="file-json"></i> <span className="z-10 relative">TypeScript</span>
</span>
<span className="spotlight-card inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-neutral-800 text-xs font-medium hover:border-neutral-600 transition-colors cursor-default bg-neutral-900/40">
<i className="w-3.5 h-3.5 text-cyan-500/80 z-10 relative" data-lucide="atom"></i> <span className="z-10 relative">React</span>
</span>
<span className="spotlight-card inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-neutral-800 text-xs font-medium hover:border-neutral-600 transition-colors cursor-default bg-neutral-900/40">
<i className="w-3.5 h-3.5 text-white z-10 relative" data-lucide="zap"></i> <span className="z-10 relative">Next.js</span>
</span>
<span className="spotlight-card inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-neutral-800 text-xs font-medium hover:border-neutral-600 transition-colors cursor-default bg-neutral-900/40">
<i className="w-3.5 h-3.5 text-emerald-500/80 z-10 relative" data-lucide="server"></i> <span className="z-10 relative">Node.js</span>
</span>
<span className="spotlight-card inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-neutral-800 text-xs font-medium hover:border-neutral-600 transition-colors cursor-default bg-neutral-900/40">
<i className="w-3.5 h-3.5 text-sky-500/80 z-10 relative" data-lucide="terminal"></i> <span className="z-10 relative">Golang</span>
</span>
<span className="spotlight-card inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-neutral-800 text-xs font-medium hover:border-neutral-600 transition-colors cursor-default bg-neutral-900/40">
<i className="w-3.5 h-3.5 text-blue-400/80 z-10 relative" data-lucide="code-2"></i> <span className="z-10 relative">Python</span>
</span>
<span className="spotlight-card inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-neutral-800 text-xs font-medium hover:border-neutral-600 transition-colors cursor-default bg-neutral-900/40">
<i className="w-3.5 h-3.5 text-green-400/80 z-10 relative" data-lucide="database"></i> <span className="z-10 relative">MongoDB</span>
</span>
<span className="spotlight-card inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-neutral-800 text-xs font-medium hover:border-neutral-600 transition-colors cursor-default bg-neutral-900/40">
<i className="w-3.5 h-3.5 text-blue-600/80 z-10 relative" data-lucide="container"></i> <span className="z-10 relative">Docker</span>
</span>
<span className="spotlight-card inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-neutral-800 text-xs font-medium hover:border-neutral-600 transition-colors cursor-default bg-neutral-900/40">
<i className="w-3.5 h-3.5 text-orange-500/80 z-10 relative" data-lucide="cloud"></i> <span className="z-10 relative">AWS</span>
</span>
</div>
</div>
</section>

<section className="space-y-8 blur-reveal blur-reveal-delay-3" id="projects">
<h2 className="text-sm font-mono uppercase tracking-wider text-neutral-500">Selected Projects</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="group spotlight-card flex flex-col justify-between p-6 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors bg-neutral-900/20 backdrop-blur-sm">
<div className="z-10 relative">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-mono text-neutral-600">01</span>
<i className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" data-lucide="gamepad-2"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Jawlah</h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                            Interactive gaming platform for live streams allowing viewers to play directly through chat with real-time interaction.
                        </p>
</div>
<div className="flex flex-wrap gap-2 z-10 relative">
<span className="text-[10px] font-mono uppercase text-neutral-500 border border-neutral-800 bg-black/50 px-2 py-0.5 rounded">Next.js</span>
<span className="text-[10px] font-mono uppercase text-neutral-500 border border-neutral-800 bg-black/50 px-2 py-0.5 rounded">WebSockets</span>
<span className="text-[10px] font-mono uppercase text-neutral-500 border border-neutral-800 bg-black/50 px-2 py-0.5 rounded">Redis</span>
</div>
</div>

<div className="group spotlight-card flex flex-col justify-between p-6 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors bg-neutral-900/20 backdrop-blur-sm">
<div className="z-10 relative">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-mono text-neutral-600">02</span>
<i className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" data-lucide="brain-circuit"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">QuizForge</h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                            AI-powered SaaS that transforms PDF lectures into interactive quizzes instantly. Features text parsing and Telegram integration.
                        </p>
</div>
<div className="flex flex-wrap gap-2 z-10 relative">
<span className="text-[10px] font-mono uppercase text-neutral-500 border border-neutral-800 bg-black/50 px-2 py-0.5 rounded">AI</span>
<span className="text-[10px] font-mono uppercase text-neutral-500 border border-neutral-800 bg-black/50 px-2 py-0.5 rounded">Groq SDK</span>
<span className="text-[10px] font-mono uppercase text-neutral-500 border border-neutral-800 bg-black/50 px-2 py-0.5 rounded">Vercel</span>
</div>
</div>

<div className="group spotlight-card flex flex-col justify-between p-6 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors bg-neutral-900/20 backdrop-blur-sm">
<div className="z-10 relative">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-mono text-neutral-600">03</span>
<i className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" data-lucide="message-circle"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Asbghm</h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                            Competitive Arabic word-explanation game blending challenge, teamwork, and humor with real-time performance optimization.
                        </p>
</div>
<div className="flex flex-wrap gap-2 z-10 relative">
<span className="text-[10px] font-mono uppercase text-neutral-500 border border-neutral-800 bg-black/50 px-2 py-0.5 rounded">React</span>
<span className="text-[10px] font-mono uppercase text-neutral-500 border border-neutral-800 bg-black/50 px-2 py-0.5 rounded">MongoDB</span>
<span className="text-[10px] font-mono uppercase text-neutral-500 border border-neutral-800 bg-black/50 px-2 py-0.5 rounded">AWS</span>
</div>
</div>

<div className="group spotlight-card flex flex-col justify-between p-6 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors bg-neutral-900/20 backdrop-blur-sm">
<div className="z-10 relative">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-mono text-neutral-600">04</span>
<i className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" data-lucide="calendar-check"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Mi3ad</h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                            Appointment management SaaS for consultants enabling smooth booking, scheduling, and client management.
                        </p>
</div>
<div className="flex flex-wrap gap-2 z-10 relative">
<span className="text-[10px] font-mono uppercase text-neutral-500 border border-neutral-800 bg-black/50 px-2 py-0.5 rounded">SaaS</span>
<span className="text-[10px] font-mono uppercase text-neutral-500 border border-neutral-800 bg-black/50 px-2 py-0.5 rounded">Tailwind</span>
<span className="text-[10px] font-mono uppercase text-neutral-500 border border-neutral-800 bg-black/50 px-2 py-0.5 rounded">Node.js</span>
</div>
</div>

<div className="group spotlight-card flex flex-col justify-between p-6 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors bg-neutral-900/20 backdrop-blur-sm">
<div className="z-10 relative">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-mono text-neutral-600">05</span>
<i className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" data-lucide="ticket"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Atouz Tickets</h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                            Full event ticketing system including real-time analytics, QR entry validation, and payment integration.
                        </p>
</div>
<div className="flex flex-wrap gap-2 z-10 relative">
<span className="text-[10px] font-mono uppercase text-neutral-500 border border-neutral-800 bg-black/50 px-2 py-0.5 rounded">Analytics</span>
<span className="text-[10px] font-mono uppercase text-neutral-500 border border-neutral-800 bg-black/50 px-2 py-0.5 rounded">QR</span>
<span className="text-[10px] font-mono uppercase text-neutral-500 border border-neutral-800 bg-black/50 px-2 py-0.5 rounded">Payments</span>
</div>
</div>

<div className="group spotlight-card flex flex-col justify-between p-6 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors bg-neutral-900/20 backdrop-blur-sm">
<div className="z-10 relative">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-mono text-neutral-600">06 / 07</span>
<i className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" data-lucide="layout-template"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Brand Landing Pages</h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                            High-performance landing pages designed for <span className="text-white">Atouz Exhibitions</span> and <span className="text-white">Rkiza</span> using modern web standards.
                        </p>
</div>
<div className="flex flex-wrap gap-2 z-10 relative">
<span className="text-[10px] font-mono uppercase text-neutral-500 border border-neutral-800 bg-black/50 px-2 py-0.5 rounded">Next.js</span>
<span className="text-[10px] font-mono uppercase text-neutral-500 border border-neutral-800 bg-black/50 px-2 py-0.5 rounded">Tailwind</span>
<span className="text-[10px] font-mono uppercase text-neutral-500 border border-neutral-800 bg-black/50 px-2 py-0.5 rounded">Vercel</span>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 blur-reveal blur-reveal-delay-3" id="experience">
<div className="space-y-8">
<h2 className="text-sm font-mono uppercase tracking-wider text-neutral-500">Experience</h2>
<div className="relative border-l border-neutral-800 ml-3 space-y-12">

<div className="pl-8 relative">
<div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-neutral-800 ring-4 ring-black"></div>
<span className="block text-xs font-mono text-neutral-500 mb-1">Jun 2024 - Present</span>
<h3 className="text-base font-medium text-white">Founder &amp; CEO</h3>
<p className="text-sm text-neutral-400 mb-3">Rkiza</p>
<ul className="space-y-2">
<li className="flex items-start gap-2 text-sm text-neutral-400 leading-relaxed">
<i className="w-3.5 h-3.5 mt-1 text-neutral-600 flex-shrink-0" data-lucide="arrow-right"></i>
                                Founded and lead Rkiza — building modern SaaS &amp; AI solutions.
                            </li>
<li className="flex items-start gap-2 text-sm text-neutral-400 leading-relaxed">
<i className="w-3.5 h-3.5 mt-1 text-neutral-600 flex-shrink-0" data-lucide="arrow-right"></i>
                                Overseeing project lifecycles from ideation to deployment.
                            </li>
<li className="flex items-start gap-2 text-sm text-neutral-400 leading-relaxed">
<i className="w-3.5 h-3.5 mt-1 text-neutral-600 flex-shrink-0" data-lucide="arrow-right"></i>
                                Managing strategy with a focus on innovation.
                            </li>
</ul>
</div>

<div className="pl-8 relative">
<div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-neutral-800 ring-4 ring-black"></div>
<span className="block text-xs font-mono text-neutral-500 mb-1">Jan 2024 - Jun 2024</span>
<h3 className="text-base font-medium text-white">Software Engineer (Intern)</h3>
<p className="text-sm text-neutral-400 mb-3">AISC</p>
<ul className="space-y-2">
<li className="flex items-start gap-2 text-sm text-neutral-400 leading-relaxed">
<i className="w-3.5 h-3.5 mt-1 text-neutral-600 flex-shrink-0" data-lucide="arrow-right"></i>
                                Developed event management system for large-scale conferences.
                            </li>
<li className="flex items-start gap-2 text-sm text-neutral-400 leading-relaxed">
<i className="w-3.5 h-3.5 mt-1 text-neutral-600 flex-shrink-0" data-lucide="arrow-right"></i>
                                Implemented RESTful APIs for ticketing &amp; auth.
                            </li>
</ul>
</div>
</div>
</div>

<div className="space-y-8">
<h2 className="text-sm font-mono uppercase tracking-wider text-neutral-500">Education</h2>
<div className="group spotlight-card p-6 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors bg-neutral-900/20 backdrop-blur-sm">
<div className="z-10 relative flex items-center gap-3 mb-4">
<div className="h-10 w-10 rounded-lg bg-neutral-800 flex items-center justify-center text-white font-serif text-lg">
                            K
                        </div>
<div>
<h3 className="text-sm font-medium text-white">King Saud University</h3>
<p className="text-xs text-neutral-500">Riyadh, Saudi Arabia</p>
</div>
</div>
<div className="z-10 relative space-y-2">
<div className="flex justify-between items-center text-sm">
<span className="text-neutral-300">B.Sc. in Software Engineering</span>
</div>
<p className="text-xs font-mono text-neutral-600">2023 - Present</p>
</div>
</div>
</div>
</section>

<footer className="pt-12 pb-8 border-t border-neutral-900 blur-reveal blur-reveal-delay-3">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col gap-2 text-center md:text-left">
<span className="text-sm font-medium text-white">Fahad Alarifee</span>
<span className="text-xs text-neutral-500">Full-Stack Software Engineer</span>
</div>
<div className="flex gap-6">
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#about">About</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#projects">Projects</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#experience">Experience</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="mailto:contact@rkiza.com">Contact</a>
</div>
</div>
<div className="mt-8 text-center text-[10px] text-neutral-700 font-mono">
                © 2025 Fahad Alarifee. All rights reserved.
            </div>
</footer>
</main>


    </>
  );
}
