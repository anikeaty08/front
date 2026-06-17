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



        // 1. Initialize AOS (Animate On Scroll)
        AOS.init({
            once: true,
            offset: 50,
            duration: 800,
            easing: 'ease-out-cubic',
        });

        // 2. Initialize Typed.js (Typing Effect)
        var typed = new Typed('#typed-text', {
            strings: ['Exploring Insights.', 'Building Dashboards.', 'Cleaning Data.', 'Seeking Opportunities.'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            cursorChar: '|',
        });

        // 3. Canvas Particles System
        const canvas = document.getElementById('canvas-bg');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        
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
                this.size = Math.random() * 2 + 1;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }
            draw() {
                ctx.fillStyle = 'rgba(100, 116, 139, 0.5)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            const particleCount = Math.min(window.innerWidth / 15, 80);
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, width, height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 100) {
                        ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 - distance/800})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animateParticles);
        }
        initParticles();
        animateParticles();

        // 4. EmailJS (Placeholder)
        const PUBLIC_KEY = "YOUR_PUBLIC_KEY";
        const SERVICE_ID = "YOUR_SERVICE_ID";
        const TEMPLATE_ID = "YOUR_TEMPLATE_ID";

        (function() { emailjs.init(PUBLIC_KEY); })();

        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const submitBtn = this.querySelector('button');
            const originalText = submitBtn.innerText;
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;

            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
                .then(function() {
                    Swal.fire({
                        title: 'Sent!',
                        text: 'Message sent successfully.',
                        icon: 'success',
                        background: '#171717',
                        color: '#fff',
                        confirmButtonColor: '#6366f1'
                    });
                    document.getElementById('contact-form').reset();
                    submitBtn.innerText = originalText;
                    submitBtn.disabled = false;
                }, function(error) {
                    // Fallback for demo purposes if keys aren't set
                    Swal.fire({
                        title: 'Demo Mode',
                        text: 'This is a demo. Configure EmailJS keys in the code to send real emails.',
                        icon: 'info',
                        background: '#171717',
                        color: '#fff',
                        confirmButtonColor: '#6366f1'
                    });
                    submitBtn.innerText = originalText;
                    submitBtn.disabled = false;
                });
        });

        // 5. Navbar Glass Effect on Scroll
        window.addEventListener('scroll', function() {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('glass');
                nav.classList.remove('border-b-0');
            } else {
                nav.classList.remove('glass');
                nav.classList.add('border-b-0');
            }
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
      

<canvas className="fixed inset-0 z-0 pointer-events-none opacity-30" id="canvas-bg"></canvas>

<nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b-0" id="navbar">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tight text-lg flex items-center gap-2 group z-50" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center group-hover:border-indigo-500/50 transition-colors">
<span className="text-xs text-white font-bold">SV</span>
</div>
<span className="opacity-90 group-hover:opacity-100 transition-opacity">Shreshth Verma</span>
</a>

<div className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#skills">Skills</a>
<a className="hover:text-white transition-colors" href="#experience">Experience</a>
<a className="hover:text-white transition-colors" href="#projects">Projects</a>
<a className="hover:text-white transition-colors" href="#achievements">Achievements</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>

<button className="md:hidden text-white p-2" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>

<div className="hidden md:hidden glass border-t border-white/5 p-4 space-y-4 absolute w-full left-0 bg-neutral-950/90" id="mobile-menu">
<a className="block hover:text-white" href="#about">About</a>
<a className="block hover:text-white" href="#skills">Skills</a>
<a className="block hover:text-white" href="#experience">Experience</a>
<a className="block hover:text-white" href="#projects">Projects</a>
<a className="block hover:text-white" href="#achievements">Achievements</a>
<a className="block hover:text-white" href="#contact">Contact</a>
</div>
</nav>
<main className="relative z-10 pt-32 pb-20 max-w-6xl mx-auto px-6">

<section className="min-h-[85vh] flex flex-col justify-center items-start mb-20" id="hero">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-6 backdrop-blur-sm" data-aos="fade-down" data-aos-duration="1000">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Fresher • Open to Work
            </div>
<h1 className="text-6xl md:text-8xl font-semibold text-white tracking-tight mb-6 leading-[1.1]" data-aos="fade-up" data-aos-delay="100">
                Shreshth <span className="text-neutral-600">Verma</span>
</h1>
<div className="text-2xl md:text-3xl text-neutral-400 font-light mb-8 h-12 flex items-center" data-aos="fade-up" data-aos-delay="200">
                Junior Data Analyst  <span className="text-indigo-400 font-medium" id="typed-text"></span>
</div>
<p className="text-lg text-neutral-500 max-w-2xl mb-10 leading-relaxed font-light" data-aos="fade-up" data-aos-delay="300">
                Aspiring data professional with a strong foundation in statistical analysis and visualization. Passionate about transforming raw data into business intelligence using Python, SQL, and Power BI.
            </p>
<div className="flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="400">
<a className="group relative px-8 py-3 bg-white text-black text-sm font-semibold rounded-lg overflow-hidden transition-all hover:scale-105" href="#projects">
<div className="absolute inset-0 w-full h-full bg-indigo-500/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
<span className="relative flex items-center gap-2">
                        View Portfolio
                        <iconify-icon icon="lucide:arrow-down" width="16"></iconify-icon>
</span>
</a>
<a className="px-8 py-3 bg-neutral-900 border border-neutral-800 text-white text-sm font-medium rounded-lg hover:bg-neutral-800 hover:border-neutral-700 transition-all hover:scale-105" href="#contact">
                    Hire Me
                </a>
</div>
</section>

<section className="mb-32 pt-10" id="about">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative group" data-aos="fade-right">
<div className="absolute inset-0 bg-indigo-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-50"></div>
<div className="relative w-full aspect-[4/5] bg-neutral-900 rounded-2xl border border-white/10 overflow-hidden group">

<div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-700 bg-neutral-950">
<iconify-icon className="mb-4 text-neutral-800 group-hover:text-indigo-500/50 transition-colors" icon="lucide:user-circle" width="80"></iconify-icon>
<span className="text-xs font-mono uppercase tracking-widest text-neutral-600">Profile Image</span>
</div>
</div>
</div>
<div data-aos="fade-left">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 tracking-tight">About Me</h2>
<p className="text-neutral-400 leading-relaxed mb-6 font-light">
                        Hello! I'm Shreshth Verma, a recent graduate with an analytical mindset and a hunger for data-driven problem solving. While I am at the start of my professional journey, my academic projects and internships have equipped me with the technical rigor to tackle real-world data challenges.
                    </p>
<p className="text-neutral-400 leading-relaxed mb-8 font-light">
                        I specialize in building automated data pipelines and interactive dashboards. I believe that even the most complex dataset tells a simple story if you know how to listen to it. I am currently seeking a Junior Data Analyst role where I can contribute immediately and grow.
                    </p>
<div className="grid grid-cols-2 gap-6">
<div className="p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm">
<div className="text-2xl font-bold text-white mb-1">Fresh</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider">Perspective</div>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm">
<div className="text-2xl font-bold text-white mb-1">10+</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider">Academic Projects</div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-32 pt-10" id="skills">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-12 tracking-tight" data-aos="fade-up">Technical Skills</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="space-y-8" data-aos="fade-right">
<h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-6">Core Competencies</h3>
<div className="space-y-2">
<div className="flex justify-between text-sm text-white mb-1">
<span>Python (Pandas, NumPy, Matplotlib)</span>
<span className="text-neutral-500">Advanced</span>
</div>
<div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[90%] rounded-full relative overflow-hidden"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-sm text-white mb-1">
<span>SQL (MySQL, PostgreSQL)</span>
<span className="text-neutral-500">Intermediate</span>
</div>
<div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[85%] rounded-full"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-sm text-white mb-1">
<span>Microsoft Excel (VBA, Pivot Tables)</span>
<span className="text-neutral-500">Advanced</span>
</div>
<div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[95%] rounded-full"></div>
</div>
</div>
</div>

<div className="space-y-8" data-aos="fade-left">
<h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-6">Tools &amp; Libraries</h3>
<div className="flex flex-wrap gap-3">
<span className="px-4 py-2 rounded-lg border border-neutral-800 bg-neutral-900/50 text-neutral-300 text-sm hover:border-indigo-500/30 hover:text-white transition-colors cursor-default">Power BI</span>
<span className="px-4 py-2 rounded-lg border border-neutral-800 bg-neutral-900/50 text-neutral-300 text-sm hover:border-indigo-500/30 hover:text-white transition-colors cursor-default">Tableau</span>
<span className="px-4 py-2 rounded-lg border border-neutral-800 bg-neutral-900/50 text-neutral-300 text-sm hover:border-indigo-500/30 hover:text-white transition-colors cursor-default">Jupyter</span>
<span className="px-4 py-2 rounded-lg border border-neutral-800 bg-neutral-900/50 text-neutral-300 text-sm hover:border-indigo-500/30 hover:text-white transition-colors cursor-default">Git &amp; GitHub</span>
<span className="px-4 py-2 rounded-lg border border-neutral-800 bg-neutral-900/50 text-neutral-300 text-sm hover:border-indigo-500/30 hover:text-white transition-colors cursor-default">Scikit-Learn</span>
<span className="px-4 py-2 rounded-lg border border-neutral-800 bg-neutral-900/50 text-neutral-300 text-sm hover:border-indigo-500/30 hover:text-white transition-colors cursor-default">Streamlit</span>
</div>
<h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4 mt-8">Soft Skills</h3>
<div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-400 font-light">
<span className="flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="lucide:check"></iconify-icon> Critical Thinking</span>
<span className="flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="lucide:check"></iconify-icon> Communication</span>
<span className="flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="lucide:check"></iconify-icon> Team Collaboration</span>
</div>
</div>
</div>
</section>

<section className="mb-32 pt-10" id="experience">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-16 tracking-tight" data-aos="fade-up">Experience</h2>
<div className="max-w-3xl mx-auto border-l border-neutral-800 ml-4 md:ml-0 pl-8 md:pl-12 space-y-16 relative">

<div className="relative" data-aos="fade-up">
<span className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full border-4 border-neutral-950 bg-indigo-500 timeline-dot"></span>
<div className="text-xs font-mono text-indigo-400 mb-2">Jan 2024 - Present</div>
<h3 className="text-xl font-medium text-white">Data Analyst Intern</h3>
<div className="text-neutral-500 text-sm mb-4">TechStart Solutions • Remote</div>
<ul className="text-neutral-400 text-sm leading-relaxed max-w-lg list-disc ml-4 space-y-2 font-light">
<li>Assisted in cleaning and preprocessing dataset of 50k+ records using Python Pandas.</li>
<li>Created interactive dashboards in Power BI to track weekly KPI performance for the marketing team.</li>
<li>Automated monthly report generation, reducing manual effort by 40%.</li>
</ul>
</div>

<div className="relative" data-aos="fade-up" data-aos-delay="100">
<span className="absolute -left-[41px] md:-left-[57px] top-1 h-4 w-4 rounded-full border-4 border-neutral-950 bg-neutral-700"></span>
<div className="text-xs font-mono text-neutral-500 mb-2">Aug 2023 - Dec 2023</div>
<h3 className="text-xl font-medium text-white">Freelance Data Contributor</h3>
<div className="text-neutral-500 text-sm mb-4">Upwork / Self-Employed</div>
<p className="text-neutral-400 text-sm leading-relaxed max-w-lg font-light">
                        Completed short-term web scraping and data entry projects. Delivered clean CSV outputs and basic visualizations for small business clients.
                    </p>
</div>
</div>
</section>

<section className="mb-32 pt-10" id="projects">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight" data-aos="fade-right">Featured Projects</h2>
<a className="hidden md:flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors" href="#">
                    View GitHub <iconify-icon icon="lucide:github" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative rounded-2xl border border-white/5 bg-neutral-900/40 p-1 overflow-hidden" data-aos="fade-up" data-tilt="" data-tilt-max="3">
<div className="relative h-full bg-neutral-950/50 rounded-xl p-8 flex flex-col justify-between hover:bg-neutral-900/80 transition-colors">
<div>
<div className="flex justify-between items-start mb-6">
<div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
<iconify-icon icon="lucide:bar-chart-2" width="24"></iconify-icon>
</div>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:external-link" width="20"></iconify-icon>
</a>
</div>
<h3 className="text-xl font-medium text-white mb-3">Sales Forecasting Model</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6 font-light">
                                Built a Time Series forecasting model using Python (ARIMA) to predict retail sales. Achieved 85% accuracy on test data, visualizing trends with Matplotlib.
                            </p>
</div>
<div className="flex gap-2">
<span className="text-[10px] font-mono uppercase bg-neutral-900 border border-neutral-800 px-2 py-1 rounded text-neutral-400">Python</span>
<span className="text-[10px] font-mono uppercase bg-neutral-900 border border-neutral-800 px-2 py-1 rounded text-neutral-400">Pandas</span>
<span className="text-[10px] font-mono uppercase bg-neutral-900 border border-neutral-800 px-2 py-1 rounded text-neutral-400">ARIMA</span>
</div>
</div>
</div>

<div className="group relative rounded-2xl border border-white/5 bg-neutral-900/40 p-1 overflow-hidden" data-aos="fade-up" data-aos-delay="100" data-tilt="" data-tilt-max="3">
<div className="relative h-full bg-neutral-950/50 rounded-xl p-8 flex flex-col justify-between hover:bg-neutral-900/80 transition-colors">
<div>
<div className="flex justify-between items-start mb-6">
<div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
<iconify-icon icon="lucide:pie-chart" width="24"></iconify-icon>
</div>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:external-link" width="20"></iconify-icon>
</a>
</div>
<h3 className="text-xl font-medium text-white mb-3">HR Attrition Dashboard</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6 font-light">
                                Interactive Power BI dashboard analyzing employee attrition. Identified key factors like overtime and salary hike percentages contributing to turnover.
                            </p>
</div>
<div className="flex gap-2">
<span className="text-[10px] font-mono uppercase bg-neutral-900 border border-neutral-800 px-2 py-1 rounded text-neutral-400">Power BI</span>
<span className="text-[10px] font-mono uppercase bg-neutral-900 border border-neutral-800 px-2 py-1 rounded text-neutral-400">DAX</span>
<span className="text-[10px] font-mono uppercase bg-neutral-900 border border-neutral-800 px-2 py-1 rounded text-neutral-400">Excel</span>
</div>
</div>
</div>

<div className="group relative rounded-2xl border border-white/5 bg-neutral-900/40 p-1 overflow-hidden" data-aos="fade-up" data-aos-delay="200" data-tilt="" data-tilt-max="3">
<div className="relative h-full bg-neutral-950/50 rounded-xl p-8 flex flex-col justify-between hover:bg-neutral-900/80 transition-colors">
<div>
<div className="flex justify-between items-start mb-6">
<div className="p-3 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20">
<iconify-icon icon="lucide:database" width="24"></iconify-icon>
</div>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:external-link" width="20"></iconify-icon>
</a>
</div>
<h3 className="text-xl font-medium text-white mb-3">SQL Data Cleaning Pipeline</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6 font-light">
                                Performed complex data cleaning on a 100k row dataset using SQL (CTEs, Window Functions) to prepare housing data for machine learning models.
                            </p>
</div>
<div className="flex gap-2">
<span className="text-[10px] font-mono uppercase bg-neutral-900 border border-neutral-800 px-2 py-1 rounded text-neutral-400">SQL</span>
<span className="text-[10px] font-mono uppercase bg-neutral-900 border border-neutral-800 px-2 py-1 rounded text-neutral-400">PostgreSQL</span>
</div>
</div>
</div>
</div>
</section>

<section className="mb-32 pt-10" id="achievements">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-12 tracking-tight" data-aos="fade-up">Achievements</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 rounded-xl border border-white/5 bg-neutral-900/30 hover:bg-neutral-900/50 transition-all" data-aos="fade-up">
<div className="text-indigo-400 mb-4"><iconify-icon icon="lucide:trophy" width="32"></iconify-icon></div>
<h3 className="text-lg font-medium text-white mb-2">Hackathon Winner</h3>
<p className="text-xs text-neutral-500 mb-2">University Tech Fest 2023</p>
<p className="text-sm text-neutral-400 font-light">Secured 1st place for creating an optimized route mapping tool using Python.</p>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-neutral-900/30 hover:bg-neutral-900/50 transition-all" data-aos="fade-up" data-aos-delay="100">
<div className="text-emerald-400 mb-4"><iconify-icon icon="lucide:code" width="32"></iconify-icon></div>
<h3 className="text-lg font-medium text-white mb-2">5 Star SQL Coder</h3>
<p className="text-xs text-neutral-500 mb-2">HackerRank</p>
<p className="text-sm text-neutral-400 font-light">Ranked in the top percentile for SQL problem solving skills and optimization.</p>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-neutral-900/30 hover:bg-neutral-900/50 transition-all" data-aos="fade-up" data-aos-delay="200">
<div className="text-purple-400 mb-4"><iconify-icon icon="lucide:medal" width="32"></iconify-icon></div>
<h3 className="text-lg font-medium text-white mb-2">Top 10% Kaggle</h3>
<p className="text-xs text-neutral-500 mb-2">Titanic Machine Learning</p>
<p className="text-sm text-neutral-400 font-light">Optimized feature engineering to achieve high accuracy on the survival prediction challenge.</p>
</div>
</div>
</section>

<section className="mb-32 pt-10" id="certifications">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">

<div data-aos="fade-right">
<h2 className="text-2xl font-semibold text-white mb-8 tracking-tight">Certifications</h2>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 rounded-xl border border-neutral-800 bg-neutral-900/30 hover:border-indigo-500/30 transition-colors">
<div className="mt-1 text-white bg-blue-500/20 p-2 rounded-lg border border-blue-500/30"><iconify-icon icon="lucide:award" width="20"></iconify-icon></div>
<div>
<h3 className="text-white font-medium text-sm">Google Data Analytics Professional</h3>
<div className="text-xs text-neutral-500 mt-1">Coursera • 2023</div>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl border border-neutral-800 bg-neutral-900/30 hover:border-indigo-500/30 transition-colors">
<div className="mt-1 text-white bg-green-500/20 p-2 rounded-lg border border-green-500/30"><iconify-icon icon="lucide:database" width="20"></iconify-icon></div>
<div>
<h3 className="text-white font-medium text-sm">IBM Data Science Professional</h3>
<div className="text-xs text-neutral-500 mt-1">Coursera • 2023</div>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl border border-neutral-800 bg-neutral-900/30 hover:border-indigo-500/30 transition-colors">
<div className="mt-1 text-white bg-yellow-500/20 p-2 rounded-lg border border-yellow-500/30"><iconify-icon icon="lucide:code-2" width="20"></iconify-icon></div>
<div>
<h3 className="text-white font-medium text-sm">Python for Data Science</h3>
<div className="text-xs text-neutral-500 mt-1">Udemy • 2022</div>
</div>
</div>
</div>
</div>

<div data-aos="fade-left">
<h2 className="text-2xl font-semibold text-white mb-8 tracking-tight">Education</h2>
<div className="relative border-l border-neutral-800 ml-3 space-y-10 pl-8 py-2">
<div className="relative">
<span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-neutral-600 border-2 border-neutral-950"></span>
<h3 className="text-lg font-medium text-white">Bachelor of Technology (B.Tech)</h3>
<div className="text-sm text-indigo-400 mb-1">Computer Science &amp; Engineering</div>
<div className="text-xs text-neutral-500">2020 - 2024</div>
<div className="mt-2 inline-block px-2 py-1 rounded bg-neutral-800/50 border border-neutral-700 text-xs text-neutral-400">CGPA: 8.5/10.0</div>
</div>
<div className="relative">
<span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-neutral-800 border-2 border-neutral-950"></span>
<h3 className="text-lg font-medium text-white">High School</h3>
<div className="text-sm text-neutral-400 mb-1">Science &amp; Mathematics</div>
<div className="text-xs text-neutral-500">2020</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto pt-10" id="contact">
<div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden" data-aos="zoom-in">

<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 rounded bg-neutral-800 text-white">
<iconify-icon icon="lucide:mail" width="20"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold text-white tracking-tight">Get in Touch</h2>
</div>
<p className="text-neutral-400 mb-8 text-sm font-light">
                        I am currently available for full-time opportunities. If you have a role that fits my skills, or just want to discuss data, feel free to drop a message.
                    </p>
<form className="space-y-4" id="contact-form">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5">Name</label>
<input className="w-full bg-neutral-950/50 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-neutral-700" name="user_name" placeholder="Recruiter Name" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5">Email</label>
<input className="w-full bg-neutral-950/50 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-neutral-700" name="user_email" placeholder="email@company.com" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5">Message</label>
<textarea className="w-full bg-neutral-950/50 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-neutral-700 resize-none" name="message" placeholder="Hi Shreshth, I'd like to discuss a job opportunity..." required="" rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-semibold text-sm py-3 rounded-lg hover:bg-neutral-200 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-white/5" type="submit">
                            Send Message
                        </button>
</form>
</div>
</div>
</section>

<footer className="mt-32 border-t border-white/5 py-12">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xs text-neutral-600">
                    © 2024 Shreshth Verma. Data Portfolio.
                </div>
<div className="flex gap-6">
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">GitHub</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Kaggle</a>
</div>
</div>
</footer>
</main>



    </>
  );
}
