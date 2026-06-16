import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Particle Background Logic
        const canvas = document.getElementById('particle-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        
        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        
        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2;
                this.alpha = Math.random() * 0.5 + 0.1;
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
                ctx.fillStyle = `rgba(148, 163, 184, ${this.alpha})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        function initParticles() {
            particles = [];
            for (let i = 0; i < 100; i++) {
                particles.push(new Particle());
            }
        }
        
        function animateParticles() {
            ctx.clearRect(0, 0, width, height);
            
            // Connect particles
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
                
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        ctx.strokeStyle = `rgba(148, 163, 184, ${0.1 * (1 - distance / 100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animateParticles);
        }
        
        window.addEventListener('resize', () => { resize(); initParticles(); });
        resize();
        initParticles();
        animateParticles();

        // Scroll Reveal Animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<canvas className="absolute inset-0 w-full h-full opacity-30" id="particle-canvas"></canvas>
<div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
<div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent"></div>
</div>

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#030712]/70 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tight text-white flex items-center gap-2 group" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
<span className="iconify text-white" data-icon="lucide:cpu" data-strokeWidth="2" data-width="14"></span>
</div>
                AETHER
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-400">
<a className="hover:text-white transition-colors" href="#features">Platform</a>
<a className="hover:text-white transition-colors" href="#pipeline">Workflow</a>
<a className="hover:text-white transition-colors" href="#testimonials">Customers</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-slate-300 hover:text-white hidden sm:block" href="#">Log in</a>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200 transition-colors" href="#contact">
                    Get Access
                </a>
</div>
</div>
</nav>

<section className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-5xl mx-auto text-center">
<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-8 hover:bg-white/10 transition-colors cursor-default">
<span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
                v2.0 Now Available: Autonomous Prediction Agents
            </div>
<h1 className="reveal text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500 mb-6">
                Orchestrate your <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 animate-pulse">Intelligence</span>
</h1>
<p className="reveal max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light mb-10 leading-relaxed">
                Deploy autonomous AI agents to automate your entire data lifecycle. From raw ingestion to predictive insights, Aether manages the complexity so you can focus on the future.
            </p>
<div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group relative px-8 py-3 bg-indigo-600 text-white text-sm font-medium rounded-full overflow-hidden transition-all hover:bg-indigo-500 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)]">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[flow_1s_ease-in-out]"></div>
<span className="relative flex items-center gap-2">
                        Start Building
                        <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16"></span>
</span>
</button>
<button className="px-8 py-3 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-colors flex items-center gap-2">
<span className="iconify text-slate-400" data-icon="lucide:play-circle" data-strokeWidth="1.5" data-width="16"></span>
                    Watch Demo
                </button>
</div>
</div>
</section>

<section className="relative z-10 py-20 border-y border-white/5 bg-[#030712]/50" id="pipeline">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl font-medium tracking-tight mb-4">Autonomous Data Pipeline</h2>
<p className="text-slate-400 font-light">Watch data transform into value in real-time.</p>
</div>

<div className="relative w-full overflow-x-auto pb-12">
<div className="min-w-[800px] flex items-center justify-between relative px-10">

<div className="absolute top-1/2 left-0 w-full h-px bg-slate-800 -z-10"></div>

<div className="reveal relative group flex flex-col items-center gap-4">
<div className="w-16 h-16 rounded-2xl bg-[#0B1120] border border-slate-700 flex items-center justify-center relative z-10 group-hover:border-indigo-500 group-hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)] transition-all duration-500">
<span className="iconify text-indigo-400" data-icon="lucide:database" data-strokeWidth="1.5" data-width="24"></span>

<div className="absolute inset-0 rounded-2xl border border-indigo-500/0 group-hover:border-indigo-500/100 group-hover:scale-110 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
</div>
<div className="text-center">
<h3 className="text-sm font-medium text-slate-200">Ingestion</h3>
<p className="text-xs text-slate-500 mt-1">Raw Data</p>
</div>
</div>

<div className="flex-1 h-px relative mx-4 overflow-hidden">
<div className="pipeline-flow"></div>
</div>

<div className="reveal relative group flex flex-col items-center gap-4 animation-delay-200">
<div className="w-16 h-16 rounded-2xl bg-[#0B1120] border border-slate-700 flex items-center justify-center relative z-10 group-hover:border-purple-500 group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)] transition-all duration-500">
<span className="iconify text-purple-400" data-icon="lucide:sparkles" data-strokeWidth="1.5" data-width="24"></span>
</div>
<div className="text-center">
<h3 className="text-sm font-medium text-slate-200">Cleaning</h3>
<p className="text-xs text-slate-500 mt-1">Normalization</p>
</div>
</div>

<div className="flex-1 h-px relative mx-4 overflow-hidden">
<div className="pipeline-flow" style={{animationDelay: '0.5s'}}></div>
</div>

<div className="reveal relative group flex flex-col items-center gap-4 animation-delay-400">
<div className="w-16 h-16 rounded-2xl bg-[#0B1120] border border-slate-700 flex items-center justify-center relative z-10 group-hover:border-pink-500 group-hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.3)] transition-all duration-500">
<span className="iconify text-pink-400" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="24"></span>
</div>
<div className="text-center">
<h3 className="text-sm font-medium text-slate-200">Feature Eng.</h3>
<p className="text-xs text-slate-500 mt-1">Vectorization</p>
</div>
</div>

<div className="flex-1 h-px relative mx-4 overflow-hidden">
<div className="pipeline-flow" style={{animationDelay: '1s'}}></div>
</div>

<div className="reveal relative group flex flex-col items-center gap-4 animation-delay-600">
<div className="w-16 h-16 rounded-2xl bg-[#0B1120] border border-slate-700 flex items-center justify-center relative z-10 group-hover:border-cyan-500 group-hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.3)] transition-all duration-500">
<span className="iconify text-cyan-400" data-icon="lucide:brain-circuit" data-strokeWidth="1.5" data-width="24"></span>
</div>
<div className="text-center">
<h3 className="text-sm font-medium text-slate-200">Prediction</h3>
<p className="text-xs text-slate-500 mt-1">Inference</p>
</div>
</div>

<div className="flex-1 h-px relative mx-4 overflow-hidden">
<div className="pipeline-flow" style={{animationDelay: '1.5s'}}></div>
</div>

<div className="reveal relative group flex flex-col items-center gap-4 animation-delay-800">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 border border-transparent flex items-center justify-center relative z-10 shadow-[0_0_30px_-5px_rgba(139,92,246,0.5)]">
<span className="iconify text-white" data-icon="lucide:bar-chart-big" data-strokeWidth="1.5" data-width="24"></span>
</div>
<div className="text-center">
<h3 className="text-sm font-medium text-white">Actionable</h3>
<p className="text-xs text-slate-400 mt-1">Dashboards</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6" id="features">
<div className="max-w-7xl mx-auto">
<div className="mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Core Agent Architecture</h2>
<p className="text-slate-400 font-light text-lg max-w-2xl">
                    Modular, composable AI agents that work in unison to deliver unparalleled accuracy and speed.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="reveal group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 overflow-hidden transition-all hover:bg-white/[0.04]">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:pipette" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-xl font-medium mb-3 text-slate-100">Ingestion &amp; Cleaning</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                            Automatically connects to SQL, NoSQL, and API sources. Detects anomalies and imputes missing values with generative models.
                        </p>
</div>
</div>

<div className="reveal group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 overflow-hidden transition-all hover:bg-white/[0.04] animation-delay-200">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:wand-2" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-xl font-medium mb-3 text-slate-100">Feature Engineering</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                            Self-optimizing dimensionality reduction and feature selection tailored for specific downstream predictive tasks.
                        </p>
</div>
</div>

<div className="reveal group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 overflow-hidden transition-all hover:bg-white/[0.04] animation-delay-400">
<div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-6 text-pink-400 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-xl font-medium mb-3 text-slate-100">Prediction Engine</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                            Ensemble learning orchestration that selects the best-performing models (XGBoost, Transformer, LSTM) dynamically.
                        </p>
</div>
</div>

<div className="reveal group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 overflow-hidden transition-all hover:bg-white/[0.04]">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:book-open" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-xl font-medium mb-3 text-slate-100">Knowledge &amp; Explainability</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                            SHAP-value based explanations and natural language summaries of why specific predictions were made.
                        </p>
</div>
</div>

<div className="reveal md:col-span-2 group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 overflow-hidden transition-all hover:bg-white/[0.04] animation-delay-200">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
<div className="flex-1">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:layout-dashboard" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-xl font-medium mb-3 text-slate-100">Analytics Dashboard</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                                Real-time KPI tracking with customizable widgets. Drag-and-drop interface to build views for executive stakeholders or technical deep-dives. Includes automated alert thresholds.
                            </p>
</div>

<div className="w-full md:w-1/2 h-40 bg-slate-900 rounded-lg border border-slate-800 p-3 flex flex-col gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20"></div>
</div>
<div className="flex gap-2 h-full mt-1">
<div className="w-1/3 bg-slate-800 rounded animate-pulse"></div>
<div className="w-2/3 flex flex-col gap-2">
<div className="h-1/2 bg-slate-800 rounded border-b-2 border-emerald-500/50"></div>
<div className="h-1/2 bg-slate-800 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 border-y border-white/5 bg-[#030712]/50 overflow-hidden" id="testimonials">
<div className="max-w-7xl mx-auto px-6 mb-12">
<h2 className="reveal text-3xl font-medium tracking-tight text-center">Trusted by pioneers</h2>
</div>
<div className="relative w-full">
<div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#030712] to-transparent z-10"></div>
<div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#030712] to-transparent z-10"></div>
<div className="flex gap-6 animate-[flow_40s_linear_infinite] w-max px-6">

<div className="w-96 p-6 rounded-2xl bg-[#0B1120] border border-slate-800">
<div className="flex items-center gap-1 text-indigo-400 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-sm text-slate-300 font-light leading-relaxed mb-4">"Aether reduced our data pipeline latency by 80%. The autonomous agents find correlations we missed for years."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<div>
<p className="text-xs font-medium text-white">Sarah Jenkins</p>
<p className="text-[10px] text-slate-500">CTO, FinTech Global</p>
</div>
</div>
</div>
<div className="w-96 p-6 rounded-2xl bg-[#0B1120] border border-slate-800">
<div className="flex items-center gap-1 text-indigo-400 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-sm text-slate-300 font-light leading-relaxed mb-4">"The explainability agent is a game changer for compliance. We know exactly why the AI makes every decision."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<div>
<p className="text-xs font-medium text-white">David Chen</p>
<p className="text-[10px] text-slate-500">Head of Data, MedCure</p>
</div>
</div>
</div>
<div className="w-96 p-6 rounded-2xl bg-[#0B1120] border border-slate-800">
<div className="flex items-center gap-1 text-indigo-400 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-sm text-slate-300 font-light leading-relaxed mb-4">"Deployment took minutes. The predictive models started optimizing our supply chain within 24 hours."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<div>
<p className="text-xs font-medium text-white">Elena Rodriguez</p>
<p className="text-[10px] text-slate-500">VP Ops, LogisticsInc</p>
</div>
</div>
</div>
<div className="w-96 p-6 rounded-2xl bg-[#0B1120] border border-slate-800">
<div className="flex items-center gap-1 text-indigo-400 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-sm text-slate-300 font-light leading-relaxed mb-4">"Finally, a platform that bridges the gap between raw data engineering and executive insights effortlessly."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<div>
<p className="text-xs font-medium text-white">Marcus Thorne</p>
<p className="text-[10px] text-slate-500">Director of AI, Nexus</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6" id="contact">
<div className="max-w-xl mx-auto">
<div className="bg-gradient-to-b from-white/[0.05] to-transparent p-1 rounded-3xl">
<div className="bg-[#030712] rounded-[22px] p-8 md:p-12 border border-white/5 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-indigo-500/5 blur-3xl pointer-events-none"></div>
<div className="text-center mb-8 relative z-10">
<h2 className="text-2xl font-medium tracking-tight mb-2">Request Early Access</h2>
<p className="text-sm text-slate-400">Join the waitlist for the Enterprise tier.</p>
</div>
<form className="space-y-6 relative z-10" onsubmit="event.preventDefault();">
<div className="relative group">
<input className="custom-input block px-4 py-3 w-full text-sm text-white bg-white/5 rounded-lg border border-white/10 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-500 peer transition-colors" id="email" placeholder=" " required="" type="email"/>
<label className="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#030712] px-2 peer-focus:px-2 peer-focus:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3" htmlFor="email">
                                Work Email
                            </label>
</div>
<div className="relative group">
<input className="custom-input block px-4 py-3 w-full text-sm text-white bg-white/5 rounded-lg border border-white/10 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-500 peer transition-colors" id="company" placeholder=" " required="" type="text"/>
<label className="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#030712] px-2 peer-focus:px-2 peer-focus:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3" htmlFor="company">
                                Company Name
                            </label>
</div>
<button className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-sm font-medium text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                            Secure Spot
                            <span className="iconify" data-icon="lucide:chevron-right" data-strokeWidth="2" data-width="16"></span>
</button>
</form>
<p className="text-[10px] text-slate-600 text-center mt-6">
                        By signing up, you agree to our Terms of Service and Privacy Policy.
                    </p>
</div>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-white/5 bg-[#030712] pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-base font-semibold text-white flex items-center gap-2 mb-4" href="#">
                    AETHER
                </a>
<p className="text-xs text-slate-500">
                    © 2023 Aether Inc.<br/>All rights reserved.
                </p>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4">Product</h4>
<ul className="space-y-2 text-xs text-slate-400">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Agents</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4">Resources</h4>
<ul className="space-y-2 text-xs text-slate-400">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Community</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4">Legal</h4>
<ul className="space-y-2 text-xs text-slate-400">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
</footer>



    </>
  );
}
