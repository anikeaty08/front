import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
purple: {
400: '#c084fc',
500: '#a855f7',
600: '#9333ea',
900: '#3b0764',
},
indigo: {
500: '#6366f1',
950: '#1e1b4b',
},
dark: '#030008', // Deep purple-black
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'glass': 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



        // 1. 3D Canvas Background (WebGL-like Particles)
        const canvas = document.getElementById('canvas-container');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        
        // Configuration
        const particleCount = 60;
        const connectionDistance = 150;
        
        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        
        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.3; // Slow velocity for grace
                this.vy = (Math.random() - 0.5) * 0.3;
                this.size = Math.random() * 2;
                this.color = `rgba(${147 + Math.random()*50}, 51, 234, ${Math.random() * 0.5 + 0.1})`; // Purple variations
            }
            
            update() {
                this.x += this.vx;
                this.y += this.vy;
                
                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }
            
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }
        
        function initParticles() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }
        
        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            
            particles.forEach((p, index) => {
                p.update();
                p.draw();
                
                // Draw connections
                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    if (dist < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(139, 92, 246, ${1 - dist / connectionDistance * 0.15})`; // Subtle purple lines
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });
            
            requestAnimationFrame(animateCanvas);
        }
        
        window.addEventListener('resize', () => { resize(); initParticles(); });
        resize();
        initParticles();
        animateCanvas();

        // 2. Intersection Observer for Scroll Animations (Reveal)
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // 3. 3D Tilt Effect for Cards
        document.querySelectorAll('.tilt-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Calculate percentage (-1 to 1)
                const xPct = (x / rect.width - 0.5) * 2;
                const yPct = (y / rect.height - 0.5) * 2;
                
                // Rotate slightly
                card.style.transform = `perspective(1000px) rotateX(${yPct * -5}deg) rotateY(${xPct * 5}deg) scale(1.02)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            });
        });

        // 4. Magnetic Buttons
        document.querySelectorAll('.btn-magnetic').forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0, 0)';
            });
        });

        // 5. Parallax for Hero Text
        document.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const heroContent = document.getElementById('hero-content');
            if(scrolled < 800) {
                heroContent.style.transform = `translateY(${scrolled * 0.4}px)`;
                heroContent.style.opacity = 1 - (scrolled / 700);
            }
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas id="canvas-container"></canvas>

<nav className="fixed top-0 left-0 w-full z-50 glass-panel border-b-0 border-white/5">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="text-lg font-semibold tracking-tight text-white flex items-center gap-2" href="#">
<span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]"></span>
                JP
            </a>
<div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
<a className="hover:text-purple-400 transition-colors" href="#about">About</a>
<a className="hover:text-purple-400 transition-colors" href="#skills">Skills</a>
<a className="hover:text-purple-400 transition-colors" href="#projects">Projects</a>
<a className="hover:text-purple-400 transition-colors" href="#contact">Contact</a>
</div>
<a className="px-4 py-2 text-xs font-medium bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all text-white" href="#contact">
                Let's Talk
            </a>
</div>
</nav>
<main className="relative z-10 w-full overflow-hidden">

<section className="min-h-screen flex flex-col justify-center items-center relative px-6 pt-20">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="text-center z-10 max-w-4xl space-y-8 perspective-container" id="hero-content">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
                    Open to Opportunities
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter-custom text-white leading-[1.1]">
                    Janhavi Phale
                </h1>
<p className="text-xl md:text-3xl text-gray-400 tracking-tight font-light">
                    Crafting immersive web experiences with <br className="hidden md:block"/>
<span className="text-gradient font-medium">code, creativity, and curiosity.</span>
</p>
<p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto">
                    First-year Computer Science &amp; Engineering student | Web Developer | Agentic AI Enthusiast
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
<a className="group relative px-8 py-3 bg-white text-black text-sm font-medium rounded-full overflow-hidden transition-transform hover:scale-105 btn-magnetic" href="#projects">
<span className="relative z-10 flex items-center gap-2">
                            View Projects 
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</span>
</a>
<a className="group relative px-8 py-3 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-full overflow-hidden backdrop-blur-md transition-all hover:bg-white/10 hover:border-purple-500/30 btn-magnetic btn-glow" href="#contact">
<span className="relative z-10">Contact Me</span>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<iconify-icon className="text-white text-2xl" icon="lucide:chevrons-down"></iconify-icon>
</div>
</section>

<section className="py-24 px-6 max-w-5xl mx-auto" id="about">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                        Engineering with <span className="text-purple-400">Purpose</span>
</h2>
<div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed">
<p>
                            Hi, I’m <strong className="text-white">Janhavi Phale</strong>, a first-year Computer Science and Engineering student at Symbiosis Institute of Technology.
                        </p>
<p>
                            I am passionate about Web Development and Agentic AI, and I enjoy building smooth, interactive, and visually engaging web experiences that blend creativity with clean, efficient code.
                        </p>
<p>
                            I actively and passionately participate in hackathons and technical competitions, where I thrive in collaborative, fast-paced environments. I am confident in my team leadership skills, often taking responsibility for planning, coordinating tasks, and guiding teams toward clear goals.
                        </p>
<p>
                            I enjoy transforming problem statements into structured, real-world solutions and strongly believe that technology should not only work well but also feel intuitive and impactful.
                        </p>
</div>
</div>
<div className="order-1 md:order-2 flex justify-center reveal delay-100">

<div className="relative w-64 h-64 md:w-80 md:h-80">
<div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-full blur-[80px] opacity-20 animate-pulse-slow"></div>
<div className="w-full h-full rounded-2xl border border-white/10 glass-panel flex items-center justify-center relative overflow-hidden tilt-card">
<div className="absolute inset-0 bg-grid-white/[0.05]"></div>
<iconify-icon className="text-6xl text-purple-400 relative z-10 animate-float" icon="lucide:code-2"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-black/50 relative" id="skills">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-900 to-transparent opacity-50"></div>
<div className="max-w-6xl mx-auto">
<div className="mb-16 text-center reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Technical Arsenal</h2>
<p className="text-gray-500">Tools and technologies I use to build the future.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card p-6 rounded-2xl reveal hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)] group tilt-card">
<div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 text-purple-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:terminal" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-3">Languages</h3>
<ul className="space-y-2 text-sm text-gray-400">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-purple-500 rounded-full"></span>C / C++</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-purple-500 rounded-full"></span>Python</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-purple-500 rounded-full"></span>JavaScript</li>
</ul>
</div>

<div className="glass-card p-6 rounded-2xl reveal delay-100 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)] group tilt-card">
<div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4 text-indigo-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:globe" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-3">Web Development</h3>
<ul className="space-y-2 text-sm text-gray-400">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-indigo-500 rounded-full"></span>HTML5 &amp; CSS3</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-indigo-500 rounded-full"></span>React.js</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-indigo-500 rounded-full"></span>Tailwind CSS</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-indigo-500 rounded-full"></span>Responsive Design</li>
</ul>
</div>

<div className="glass-card p-6 rounded-2xl reveal delay-200 border-purple-500/30 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)] group tilt-card relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none"></div>
<div className="w-10 h-10 bg-fuchsia-500/10 rounded-lg flex items-center justify-center mb-4 text-fuchsia-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:bot" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-3">Agentic AI</h3>
<p className="text-xs text-gray-500 mb-3 leading-relaxed">Designing autonomous AI agents and intelligent workflows for automation.</p>
<ul className="space-y-2 text-sm text-gray-400">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-fuchsia-500 rounded-full"></span>Automation Workflows</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-fuchsia-500 rounded-full"></span>Intelligent Decisioning</li>
</ul>
</div>

<div className="glass-card p-6 rounded-2xl reveal delay-300 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)] group tilt-card">
<div className="w-10 h-10 bg-slate-500/10 rounded-lg flex items-center justify-center mb-4 text-slate-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:settings-2" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-3">Tools &amp; Practices</h3>
<ul className="space-y-2 text-sm text-gray-400">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-slate-500 rounded-full"></span>Git &amp; GitHub</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-slate-500 rounded-full"></span>UI/UX Fundamentals</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-slate-500 rounded-full"></span>Web Performance</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="projects">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter-custom text-center text-white mb-20 reveal">Selected Projects</h2>
<div className="space-y-24">

<div className="group relative grid md:grid-cols-12 gap-8 items-center reveal">
<div className="md:col-span-7 relative z-10">
<div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900 tilt-card cursor-pointer group-hover:shadow-[0_0_40px_-10px_rgba(147,51,234,0.3)] transition-all duration-500">

<div className="aspect-video bg-gradient-to-br from-gray-800 to-black flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
<iconify-icon className="text-6xl text-purple-500 opacity-50" icon="lucide:bus"></iconify-icon>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
</div>
</div>
<div className="md:col-span-5 md:-ml-12 z-20 pointer-events-none">
<div className="glass-panel p-8 rounded-xl pointer-events-auto shadow-xl">
<div className="text-purple-400 text-xs font-semibold tracking-wider uppercase mb-2">Transport Tech</div>
<h3 className="text-2xl font-medium text-white mb-4">PMPML Bus Tracker</h3>
<p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                Smart public transport tracking system concept for Pune featuring live bus location tracking, ETA prediction, and route visualization.
                            </p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300">System Design</span>
<span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300">Leadership</span>
</div>
<div className="text-xs text-gray-500">Role: Product Ideation &amp; Leadership</div>
</div>
</div>
</div>

<div className="group relative grid md:grid-cols-12 gap-8 items-center reveal">
<div className="md:col-span-5 z-20 order-2 md:order-1 pointer-events-none">
<div className="glass-panel p-8 rounded-xl md:mr-[-3rem] pointer-events-auto shadow-xl">
<div className="text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-2">FinTech AI</div>
<h3 className="text-2xl font-medium text-white mb-4">LoanLink AI</h3>
<p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                AI-powered loan assistance platform utilizing agentic AI for automated workflows, intelligent guidance, and user-centric financial insights.
                            </p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300">Agentic AI</span>
<span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300">Web UI</span>
</div>
<div className="text-xs text-gray-500">Role: Frontend Dev &amp; AI Workflow Planning</div>
</div>
</div>
<div className="md:col-span-7 relative z-10 order-1 md:order-2">
<div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900 tilt-card cursor-pointer group-hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)] transition-all duration-500">
<div className="aspect-video bg-gradient-to-bl from-gray-800 to-black flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
<iconify-icon className="text-6xl text-indigo-500 opacity-50" icon="lucide:bot-message-square"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="group relative grid md:grid-cols-12 gap-8 items-center reveal">
<div className="md:col-span-7 relative z-10">
<div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900 tilt-card cursor-pointer group-hover:shadow-[0_0_40px_-10px_rgba(236,72,153,0.3)] transition-all duration-500">
<div className="aspect-video bg-gradient-to-br from-gray-800 to-black flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
<iconify-icon className="text-6xl text-pink-500 opacity-50" icon="lucide:shopping-bag"></iconify-icon>
</div>
</div>
</div>
<div className="md:col-span-5 md:-ml-12 z-20 pointer-events-none">
<div className="glass-panel p-8 rounded-xl pointer-events-auto shadow-xl">
<div className="text-pink-400 text-xs font-semibold tracking-wider uppercase mb-2">E-Commerce</div>
<h3 className="text-2xl font-medium text-white mb-4">Hostel2Home</h3>
<p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                Student-focused e-commerce platform simplifying hostel relocation with essentials like mattresses and tables. Simple, affordable, student-centric UX.
                            </p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300">UI/UX</span>
<span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300">E-commerce Workflows</span>
</div>
<div className="text-xs text-gray-500">Role: Product Concept &amp; Web Development</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-16">

<div className="reveal">
<div className="flex items-center gap-3 mb-8">
<iconify-icon className="text-purple-400 text-2xl" icon="lucide:graduation-cap"></iconify-icon>
<h2 className="text-2xl font-semibold text-white">Education</h2>
</div>
<div className="border-l border-white/10 ml-3 space-y-10 pl-8 relative">

<div className="relative group">
<span className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-2 border-purple-500 bg-black timeline-node"></span>
<h3 className="text-white font-medium text-lg">Symbiosis Institute of Technology</h3>
<p className="text-purple-400 text-sm mb-1">B.Tech in Computer Science and Engineering</p>
<div className="text-gray-500 text-xs mb-2">First Year | GPA: 8.2</div>
<p className="text-gray-400 text-sm">Focus: Programming, Web Development, AI Fundamentals</p>
</div>

<div className="relative group">
<span className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-2 border-gray-700 bg-black group-hover:border-purple-500 timeline-node"></span>
<h3 className="text-white font-medium text-lg">Abhinav Education Society</h3>
<p className="text-gray-400 text-sm mb-1">11th – 12th Grade</p>
<div className="text-gray-500 text-xs mb-2">Score: 85%</div>
<p className="text-gray-400 text-sm">Focus: JEE, MHT-CET, Programming</p>
</div>

<div className="relative group">
<span className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-2 border-gray-700 bg-black group-hover:border-purple-500 timeline-node"></span>
<h3 className="text-white font-medium text-lg">Sahyadri National School</h3>
<p className="text-gray-400 text-sm mb-1">1st – 10th Grade</p>
<div className="text-gray-500 text-xs mb-2">Score: 96%</div>
<p className="text-gray-400 text-sm">Focus: Leadership, Management, Communication</p>
</div>
</div>
</div>

<div className="reveal delay-100">
<div className="flex items-center gap-3 mb-8">
<iconify-icon className="text-indigo-400 text-2xl" icon="lucide:users"></iconify-icon>
<h2 className="text-2xl font-semibold text-white">Experience &amp; Leadership</h2>
</div>
<div className="space-y-4">
<div className="glass-card p-5 rounded-lg border-l-2 border-l-purple-500 hover:bg-white/5 transition-colors">
<div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Leadership</div>
<h3 className="text-white font-medium">CEO</h3>
<p className="text-sm text-gray-400">Software Engineering Project Team</p>
</div>
<div className="glass-card p-5 rounded-lg border-l-2 border-l-indigo-500 hover:bg-white/5 transition-colors">
<div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Community</div>
<h3 className="text-white font-medium">Programming Community Member</h3>
<p className="text-sm text-gray-400">CodeX</p>
</div>
<div className="glass-card p-5 rounded-lg border-l-2 border-l-indigo-500 hover:bg-white/5 transition-colors">
<div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Management</div>
<h3 className="text-white font-medium">Events &amp; PR Member</h3>
<p className="text-sm text-gray-400">FOSS</p>
</div>
<div className="glass-card p-5 rounded-lg border-l-2 border-l-indigo-500 hover:bg-white/5 transition-colors">
<div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Volunteering</div>
<h3 className="text-white font-medium">Student Volunteer</h3>
<p className="text-sm text-gray-400">SymbiTech</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-purple-900/5">
<div className="max-w-6xl mx-auto">

<div className="mb-16 reveal">
<h2 className="text-2xl md:text-3xl font-semibold text-center text-white mb-10">Achievements</h2>
<div className="flex flex-wrap justify-center gap-6">
<div className="bg-black/40 border border-purple-500/30 px-6 py-4 rounded-full flex items-center gap-3 hover:scale-105 transition-transform">
<iconify-icon className="text-yellow-400 text-xl" icon="lucide:trophy"></iconify-icon>
<span className="text-gray-200 text-sm font-medium">Cleared First Round of EY Techathon</span>
</div>
<div className="bg-black/40 border border-purple-500/30 px-6 py-4 rounded-full flex items-center gap-3 hover:scale-105 transition-transform">
<iconify-icon className="text-orange-400 text-xl" icon="lucide:medal"></iconify-icon>
<span className="text-gray-200 text-sm font-medium">Participated in Smart India Hackathon (SIH)</span>
</div>
</div>
</div>

<div className="reveal delay-100">
<h2 className="text-2xl md:text-3xl font-semibold text-center text-white mb-10">Certifications</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<a className="glass-card p-6 rounded-xl hover:border-purple-500/50 group block" href="#">
<iconify-icon className="text-purple-400 text-2xl mb-4 group-hover:scale-110 transition-transform" icon="lucide:badge-check"></iconify-icon>
<h3 className="text-white text-sm font-medium leading-tight">AI Skills Passport</h3>
<p className="text-gray-500 text-xs mt-2">EY &amp; Microsoft</p>
</a>
<a className="glass-card p-6 rounded-xl hover:border-purple-500/50 group block" href="#">
<iconify-icon className="text-purple-400 text-2xl mb-4 group-hover:scale-110 transition-transform" icon="lucide:cpu"></iconify-icon>
<h3 className="text-white text-sm font-medium leading-tight">Microsoft Copilot Productivity</h3>
<p className="text-gray-500 text-xs mt-2">Microsoft &amp; LinkedIn</p>
</a>
<a className="glass-card p-6 rounded-xl hover:border-purple-500/50 group block" href="#">
<iconify-icon className="text-purple-400 text-2xl mb-4 group-hover:scale-110 transition-transform" icon="lucide:sparkles"></iconify-icon>
<h3 className="text-white text-sm font-medium leading-tight">Career Essentials in Generative AI</h3>
<p className="text-gray-500 text-xs mt-2">Microsoft &amp; LinkedIn</p>
</a>
<a className="glass-card p-6 rounded-xl hover:border-purple-500/50 group block" href="#">
<iconify-icon className="text-purple-400 text-2xl mb-4 group-hover:scale-110 transition-transform" icon="lucide:cloud-cog"></iconify-icon>
<h3 className="text-white text-sm font-medium leading-tight">Azure AI Essentials Professional</h3>
<p className="text-gray-500 text-xs mt-2">Microsoft &amp; LinkedIn</p>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="contact">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-radial from-purple-900/30 to-transparent opacity-50 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10 reveal">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter-custom text-white mb-6">Let's Build The Future</h2>
<p className="text-gray-400 mb-12 max-w-xl mx-auto">Open for hackathons, collaborations, and internship opportunities.</p>
<div className="flex flex-col md:flex-row gap-6 justify-center items-center">
<a className="group relative px-8 py-4 bg-white text-black text-sm font-bold rounded-full overflow-hidden transition-all hover:scale-105 btn-magnetic" href="mailto:contact@janhavi.dev">
<span className="relative z-10 flex items-center gap-2">
<iconify-icon icon="lucide:mail"></iconify-icon>
                            Email Me
                        </span>
</a>
<div className="flex gap-4">
<a className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all btn-magnetic text-white" href="#">
<iconify-icon icon="lucide:github" width="20"></iconify-icon>
</a>
<a className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all btn-magnetic text-blue-400" href="#">
<iconify-icon icon="lucide:linkedin" width="20"></iconify-icon>
</a>
<a className="px-6 py-4 flex items-center gap-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all btn-magnetic text-gray-300 text-sm font-medium" href="#">
<iconify-icon icon="lucide:file-text" width="16"></iconify-icon>
                            Resume
                        </a>
</div>
</div>
</div>
</section>

<footer className="py-8 text-center border-t border-white/5 relative bg-black">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
<p className="text-xs text-gray-600 font-medium tracking-wide">
                Designed &amp; Developed by Janhavi Phale
            </p>
</footer>
</main>


    </>
  );
}
