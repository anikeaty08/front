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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<canvas height="705" id="canvas-container" width="1120"></canvas>

<nav className="fixed top-0 left-0 w-full z-50 glass-panel border-b-0 border-white/5">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="flex items-center gap-2 text-lg font-semibold text-white tracking-tight" href="#">GC</a>
<div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
<a className="hover:text-purple-400 transition-colors" href="#about">About</a>
<a className="hover:text-purple-400 transition-colors" href="#skills">Skills</a>
<a className="hover:text-purple-400 transition-colors" href="#projects">Projects</a>
<a className="hover:text-purple-400 transition-colors" href="#contact">Contact</a>
</div>
<a className="hover:bg-white/10 transition-all text-xs font-medium text-white bg-white/5 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4" href="#contact">
                Let's Talk
            </a>
</div>
</nav>
<main className="z-10 overflow-hidden w-full relative">

<section className="min-h-screen flex flex-col pt-20 pr-6 pl-6 relative items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="z-10 text-center max-w-4xl perspective-container space-y-8" id="hero-content">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
                    Open to Opportunities
                </div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-semibold text-white tracking-tighter-custom">Gargi Channe</h1>
<p className="md:text-3xl text-xl font-light text-gray-400 tracking-tight">Building intelligent systems with<br className="hidden md:block"/> <span className="text-gradient font-medium">Artificial Intelligence, design, and curiosity.</span></p>
<p className="md:text-base text-sm text-gray-500 max-w-xl mr-auto ml-auto">AI Developer | Machine Learning Enthusiast | UX/UI Designer</p>
<div className="flex flex-col sm:flex-row gap-4 pt-8 gap-x-4 gap-y-4 justify-center">
<a className="group overflow-hidden transition-transform hover:scale-105 btn-magnetic text-sm font-medium text-black bg-white rounded-full pt-3 pr-8 pb-3 pl-8 relative" href="#projects">
<span className="z-10 flex items-center gap-2 relative">
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

<section className="max-w-5xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="about">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 reveal active">
<h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tight mb-6">Where AI Meets <span className="text-purple-400">Design </span></h2>
<div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed">
<p className="">Hi, I’m <strong className="text-white">Gargi Channe</strong>, a third-year Airtificial Intelligence Engineering  student who enjoys exploring the space where artificial intelligence meets thoughtful design.</p>
<p className="">I enjoy building intelligent systems that solve real problems while keeping the user experience simple and intuitive. My work focuses on areas like machine learning, computer vision, and natural language processing.</p>
<p className="">I have built projects such as an AI emotion detection system, a cat–dog–neither image classifier, an AI blog generator, and a text correction tool, exploring how AI can be used to create practical and meaningful applications.</p>
<p className="">My goal is to grow as an AI / ML Engineer and product designer, creating intelligent technologies that are not only powerful but also intuitive and impactful for people.</p>
</div>
</div>
<div className="order-1 md:order-2 flex justify-center reveal delay-100 active">

<div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center tilt-card">

<div className="absolute inset-0 bg-[radial-gradient(circle,var(--tw-gradient-stops))] from-purple-500/60 via-indigo-600/20 to-transparent blur-2xl rounded-full"></div>

<img alt="AI &amp; Design Concept" className="w-[100%] h-[100%] object-contain z-20 relative" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce9feb77-bfe2-47ba-8ae7-4d210483e270_800w.png"/>
</div>
</div>
</div>
</section>

<section className="bg-black/50 pt-24 pr-6 pb-24 pl-6 relative" id="skills">
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
<li className="flex gap-2 gap-x-2 gap-y-2 items-center"><span className="w-1 h-1 bg-purple-500 rounded-full"></span>Java</li>
</ul>
</div>

<div className="glass-card p-6 rounded-2xl reveal delay-100 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)] group tilt-card">
<div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4 text-indigo-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:globe" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-3">Web Development</h3>
<ul className="space-y-2 text-sm text-gray-400">
<li className="flex gap-2 gap-x-2 gap-y-2 items-center"><span className="w-1 h-1 bg-indigo-500 rounded-full"></span>HTML &amp; CSS</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-indigo-500 rounded-full"></span>React.js</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-indigo-500 rounded-full"></span>Tailwind CSS</li>
</ul>
</div>

<div className="glass-card p-6 rounded-2xl reveal delay-200 border-purple-500/30 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)] group tilt-card relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none"></div>
<div className="w-10 h-10 bg-fuchsia-500/10 rounded-lg flex items-center justify-center mb-4 text-fuchsia-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:bot" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-white mb-3">AI</h3>
<ul className="space-y-2 text-sm text-gray-400">
<li className="flex gap-2 gap-x-2 gap-y-2 items-center"><span className="w-1 h-1 bg-fuchsia-500 rounded-full"></span>Machine Learning &amp; Deep Learning</li>
<li className="flex gap-2 gap-x-2 gap-y-2 items-center"><span className="w-1 h-1 bg-fuchsia-500 rounded-full"></span>Computer vision &amp; NLP</li><li className="flex gap-2 gap-x-2 gap-y-2 items-center"><span className="w-1 h-1 bg-fuchsia-500 rounded-full"></span>AI Integration &amp; Deployment </li>
</ul>
</div>

<div className="glass-card p-6 rounded-2xl reveal delay-300 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)] group tilt-card">
<div className="w-10 h-10 bg-slate-500/10 rounded-lg flex items-center justify-center mb-4 text-slate-400 group-hover:scale-110 transition-transform">
<iconify-icon className="" icon="lucide:settings-2" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-3">Tools &amp; Practices</h3>
<ul className="text-sm text-gray-400 space-y-2">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-slate-500 rounded-full"></span>Git &amp; GitHub</li>
<li className="flex gap-2 gap-x-2 gap-y-2 items-center"><span className="w-1 h-1 bg-slate-500 rounded-full"></span>ML Workflows &amp; Model Development</li>
<li className="flex gap-x-2 gap-y-2 items-center"><span className="w-1 h-1 bg-slate-500 rounded-full"></span>UI/UX Design &amp; Prototyping </li>
</ul>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="projects">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter-custom text-center text-white mb-20 reveal">Selected Projects</h2>
<div className="space-y-24">

<div className="group relative grid md:grid-cols-12 gap-8 items-center reveal">
<div className="md:col-span-7 relative z-10">
<div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900 tilt-card cursor-pointer group-hover:shadow-[0_0_40px_-10px_rgba(147,51,234,0.3)] transition-all duration-500">

<div className="aspect-video bg-gradient-to-br from-gray-800 to-black flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
<iconify-icon className="text-6xl text-purple-500 opacity-50" icon="lucide:cat"></iconify-icon>
<div className="group-hover:bg-transparent transition-colors cursor-pointer bg-black/20 absolute top-0 right-0 bottom-0 left-0" onclick="window.location.href='https://gigishot-cat-dog-neither-classification.hf.space/'" role="button"></div>
</div>
</div>
</div>
<div className="md:col-span-5 md:-ml-12 z-20 pointer-events-none">
<div className="glass-panel p-8 rounded-xl pointer-events-auto shadow-xl">
<div className="uppercase text-xs font-semibold text-purple-400 tracking-wider mb-2">AI / COMPUTER VISION</div>
<h3 className="text-2xl font-medium text-white mb-4">Cat–Dog–Neither Classifier</h3>
<p className="leading-relaxed text-sm text-gray-400 mb-6">Built a deep learning-based image classification system capable of distinguishing between cats, dogs, and unrelated objects, improving prediction accuracy through data preprocessing and model tuning.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="text-xs text-gray-300 bg-white/5 border-white/10 border rounded pt-1 pr-2 pb-1 pl-2">TensorFlow</span>
<span className="text-xs text-gray-300 bg-white/5 border-white/10 border rounded pt-1 pr-2 pb-1 pl-2">CNN</span><span className="text-xs text-gray-300 bg-white/5 border-white/10 border rounded pt-1 pr-2 pb-1 pl-2">Image Classification</span>
</div>
<div className="text-xs text-gray-500">Role: Model Development &amp; Implementation</div>
</div>
</div>
</div>

<div className="group relative grid md:grid-cols-12 gap-8 items-center reveal">
<div className="md:col-span-5 z-20 order-2 md:order-1 pointer-events-none">
<div className="glass-panel p-8 rounded-xl md:mr-[-3rem] pointer-events-auto shadow-xl">
<div className="uppercase text-xs font-semibold text-indigo-400 tracking-wider mb-2">NLP WEB APP</div>
<h3 className="text-2xl font-medium text-white mb-4">Wordinator</h3>
<p className="leading-relaxed text-sm text-gray-400 mb-6">AI-powered word intelligence platform leveraging natural language processing for real-time spell correction, fuzzy matching, and context-aware word suggestions.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="text-xs text-gray-300 bg-white/5 border-white/10 border rounded pt-1 pr-2 pb-1 pl-2">NLP</span>
<span className="text-xs text-gray-300 bg-white/5 border-white/10 border rounded pt-1 pr-2 pb-1 pl-2">Fuzzy Matching</span><span className="text-xs text-gray-300 bg-white/5 border-white/10 border rounded pt-1 pr-2 pb-1 pl-2">Flask Backend</span>
</div>
<div className="text-xs text-gray-500">Role: Backend Development &amp; NLP Integration</div>
</div>
</div>
<div className="md:col-span-7 relative z-10 order-1 md:order-2">
<div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900 tilt-card cursor-pointer group-hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)] transition-all duration-500">
<div className="aspect-video flex group-hover:scale-105 transition-transform duration-700 bg-gradient-to-bl from-gray-800 to-black items-center justify-center" onclick="window.location.href='https://gigishot-wordinator.hf.space'" role="button">
<iconify-icon className="text-6xl text-indigo-500 opacity-50" height="60" icon="lucide:spell-check" style={{color: 'rgb(99, 102, 241)'}} width="60"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="group relative grid md:grid-cols-12 gap-8 items-center reveal">
<div className="md:col-span-7 relative z-10">
<div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900 tilt-card cursor-pointer group-hover:shadow-[0_0_40px_-10px_rgba(236,72,153,0.3)] transition-all duration-500">
<div className="aspect-video flex group-hover:scale-105 transition-transform duration-700 bg-gradient-to-br from-gray-800 to-black items-center justify-center" onclick="window.location.href='https://gigishot-genai-blog.hf.space'" role="button">
<iconify-icon className="text-6xl text-pink-500 opacity-50" height="60" icon="lucide:brain-circuit" style={{color: 'rgb(236, 72, 153)'}} width="60"></iconify-icon>
</div>
</div>
</div>
<div className="md:col-span-5 md:-ml-12 z-20 pointer-events-none">
<div className="glass-panel pointer-events-auto rounded-xl pt-8 pr-8 pb-8 pl-8 shadow-xl">
<div className="uppercase text-xs font-semibold text-pink-400 tracking-wider mb-2">GENERATIVE AI</div>
<h3 className="text-2xl font-medium text-white mb-4">GenAI Blog</h3>
<p className="leading-relaxed text-sm text-gray-400 mb-6">A generative AI-driven content system that integrates external inference APIs to transform user prompts into structured, high-quality blog outputs in real time.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="text-xs text-gray-300 bg-white/5 border-white/10 border rounded pt-1 pr-2 pb-1 pl-2">GenAI</span>
<span className="text-xs text-gray-300 bg-white/5 border-white/10 border rounded px-2 py-1">API Integration </span><span className="text-xs text-gray-300 bg-white/5 border-white/10 border rounded pt-1 pr-2 pb-1 pl-2">Flask</span>
</div>
<div className="text-xs text-gray-500">Role: AI Integration &amp; Backend Development</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="grid md:grid-cols-2 gap-16">

<div className="reveal">
<div className="flex items-center gap-3 mb-8">
<iconify-icon className="text-purple-400 text-2xl" icon="lucide:graduation-cap"></iconify-icon>
<h2 className="text-2xl font-semibold text-white">Education</h2>
</div>
<div className="border-l border-white/10 ml-3 space-y-10 pl-8 relative">

<div className="relative group">
<span className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-2 border-purple-500 bg-black timeline-node"></span>
<h3 className="text-lg font-medium text-white">G. H. Raisoni College of Engineering</h3>
<p className="text-sm text-purple-400 mb-1">B.Tech in Artificial Intelligence</p>
<div className="text-xs text-gray-500 mb-2">Third Year | GPA: 9.03</div>
</div>

<div className="relative group">
<span className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-2 border-gray-700 bg-black group-hover:border-purple-500 timeline-node"></span>
<h3 className="text-lg font-medium text-white">Suyash Jr. College</h3>
<p className="text-sm text-gray-400 mb-1">11th – 12th Grade</p>
<div className="text-xs text-gray-500 mb-2">Score: 68.8%</div>
</div>

<div className="relative group">
<span className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-2 border-gray-700 bg-black group-hover:border-purple-500 timeline-node"></span>
<h3 className="text-lg font-medium text-white">Suyash Convent</h3>
<p className="text-gray-400 text-sm mb-1">1st – 10th Grade</p>
<div className="text-xs text-gray-500 mb-2">Score: 89.8%</div>
</div>
</div>
</div>

<div className="reveal delay-100">
<div className="flex items-center gap-3 mb-8">
<iconify-icon className="text-indigo-400 text-2xl" icon="lucide:users"></iconify-icon>
<h2 className="text-2xl font-semibold text-white">Experience </h2>
</div>
<div className="space-y-4">
<div className="glass-card p-5 rounded-lg border-l-2 border-l-purple-500 hover:bg-white/5 transition-colors">
<div className="uppercase text-sm text-gray-500 tracking-wider mb-1">EXPERIENCE</div>
<h3 className="font-medium text-white">PwC Launchpad Trainee</h3>
<p className="text-sm text-gray-400">PwC</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-purple-900/5 pt-24 pr-6 pb-24 pl-6">
<div className="max-w-6xl mx-auto">

<div className="mb-16 reveal">
<h2 className="text-2xl md:text-3xl font-semibold text-center text-white mb-10">Achievements</h2>
<div className="flex flex-wrap justify-center gap-6">
<div className="bg-black/40 border border-purple-500/30 px-6 py-4 rounded-full flex items-center gap-3 hover:scale-105 transition-transform">
<iconify-icon className="text-yellow-400 text-xl" icon="lucide:trophy"></iconify-icon>
<span className="text-sm font-medium text-gray-200">2nd Rank in Figma Workshop </span>
</div>
<div className="bg-black/40 border border-purple-500/30 px-6 py-4 rounded-full flex items-center gap-3 hover:scale-105 transition-transform">
<iconify-icon className="text-orange-400 text-xl" icon="lucide:medal"></iconify-icon>
<span className="text-gray-200 text-sm font-medium">Participated in Smart India Hackathon (SIH)</span>
</div>
</div>
</div>

<div className="reveal delay-100">
<h2 className="md:text-3xl text-2xl font-semibold text-white text-center mb-10">Certifications</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<a className="glass-card p-6 rounded-xl hover:border-purple-500/50 group block" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform text-2xl text-purple-400 mb-4" height="23" icon="lucide:code" style={{color: 'rgb(192, 132, 252)'}} width="23"></iconify-icon>
<h3 className="leading-tight text-sm font-medium text-white">Python 3.4.3</h3>
<p className="text-xs text-gray-500 mt-2">EduPyramids, SINE, IIT Bombay.</p>
</a>
<a className="glass-card hover:border-purple-500/50 group block rounded-xl pt-6 pr-6 pb-6 pl-6" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform text-2xl text-purple-400 mb-4" height="23" icon="lucide:code" style={{color: 'rgb(192, 132, 252)'}} width="23"></iconify-icon>
<h3 className="leading-tight text-sm font-medium text-white">C</h3>
<p className="text-xs text-gray-500 mt-2">Spoken Tutorial Project, IIT Bombay.</p>
</a>
<a className="glass-card p-6 rounded-xl hover:border-purple-500/50 group block" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform text-2xl text-purple-400 mb-4" height="23" icon="lucide:code" style={{color: 'rgb(192, 132, 252)'}} width="23"></iconify-icon>
<h3 className="leading-tight text-sm font-medium text-white">C++</h3>
<p className="text-xs text-gray-500 mt-2">Spoken Tutorial Project, IIT Bombay.</p>
</a>
<a className="glass-card hover:border-purple-500/50 group block rounded-xl px-6 py-6" href="#">
<iconify-icon className="text-purple-400 text-2xl mb-4 group-hover:scale-110 transition-transform" icon="lucide:cloud-cog"></iconify-icon>
<h3 className="leading-tight text-sm font-medium text-white">Tata Job Simulation</h3>
<p className="text-xs text-gray-500 mt-2">Tata, Forage</p>
</a><a className="glass-card hover:border-purple-500/50 group block rounded-xl px-6 py-6" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform text-2xl text-purple-400 mb-4" height="23" icon="lucide:airplay" style={{color: 'rgb(192, 132, 252)'}} width="23"></iconify-icon>
<h3 className="leading-tight text-sm font-medium text-white">Delloite Job Simulation</h3>
<p className="text-xs text-gray-500 mt-2">Delloite</p>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="contact">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-radial from-purple-900/30 to-transparent opacity-50 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10 reveal">
<h2 className="md:text-6xl text-4xl font-semibold text-white tracking-tighter-custom mb-6">Let’s Build Intelligent Systems</h2>
<p className="text-gray-400 max-w-2xl mr-auto mb-12 ml-auto">Open to internships, collaborations, and building impactful AI-driven solutions.</p>
<div className="flex flex-col md:flex-row gap-6 justify-center items-center">
<a className="group overflow-hidden transition-all hover:scale-105 btn-magnetic text-sm font-bold text-black bg-white rounded-full pt-4 pr-8 pb-4 pl-8 relative" href="/mailto:gargichanne@gmail.com">
<span className="z-10 flex items-center gap-2 relative">
<iconify-icon icon="lucide:mail"></iconify-icon>
                            Email Me
                        </span>
</a>
<div className="flex gap-4">
<a className="flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all btn-magnetic text-white bg-white/5 w-12 h-12 border-white/10 border rounded-full" href="https://github.com/Gargie-ui">
<iconify-icon className="" icon="lucide:github" width="20"></iconify-icon>
</a>
<a className="flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all btn-magnetic text-blue-400 bg-white/5 w-12 h-12 border-white/10 border rounded-full" href="https://www.linkedin.com/in/gargi-channe-217284353/">
<iconify-icon className="" icon="lucide:linkedin" width="20"></iconify-icon>
</a>
<a className="flex items-center gap-2 hover:bg-white/10 transition-all btn-magnetic text-sm font-medium text-gray-300 bg-white/5 border-white/10 border rounded-full pt-4 pr-6 pb-4 pl-6" href="https://drive.google.com/file/d/1KsRIDWcs1CITrJ-b0uRJjPlaNRKWU96B/view?usp=drive_link">
<iconify-icon icon="lucide:file-text" width="16"></iconify-icon>
                            Resume
                        </a>
</div>
</div>
</div>
</section>

<footer className="py-8 text-center border-t border-white/5 relative bg-black">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
</footer>
</main>


    </>
  );
}
