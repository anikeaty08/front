import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
gray: { 900: '#111827', 950: '#030712' },
orange: { 500: '#F97316', 600: '#ea580c' }
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
animation: {
'float-slow': 'float-subtle 4s ease-in-out infinite',
}
}
},
plugins: [
function({ addUtilities }) {
addUtilities({
'.rotate-y-12': { transform: 'rotateY(12deg)' },
'.rotate-x-6': { transform: 'rotateX(6deg)' },
})
}
]
};



        // --- 1. LOADER ---
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loader = document.getElementById('loader');
                loader.style.opacity = '0';
                setTimeout(() => { loader.style.display = 'none'; }, 1500);
            }, 1500);
        });

        // --- 2. PARTICLE ENGINE (CANVAS) ---
        const canvas = document.getElementById('neural-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        let mouse = { x: 0, y: 0 };

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
                this.size = Math.random() * 1.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.color = Math.random() > 0.8 ? 'rgba(249, 115, 22,' : 'rgba(255, 255, 255,'; 
                this.alpha = Math.random() * 0.5 + 0.1;
            }

            update() {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                
                if(dist < 150) {
                    this.speedX -= dx * 0.0005;
                    this.speedY -= dy * 0.0005;
                }

                this.x += this.speedX;
                this.y += this.speedY;
                
                // Bounds loop
                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;
            }

            draw() {
                ctx.fillStyle = this.color + this.alpha + ')';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Init Particles
        for (let i = 0; i < 80; i++) {
            particles.push(new Particle());
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            
            ctx.lineWidth = 0.5;
            for(let i = 0; i < particles.length; i++) {
                for(let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx*dx + dy*dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(50, 50, 60, ${0.1 - distance/1000})`;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        }
        animate();

        // --- 3. CURSOR & INTERACTION ---
        const cursorDot = document.getElementById('cursor-dot');
        const cursorRing = document.getElementById('cursor-ring');

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            
            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top = e.clientY + 'px';
            
            // Lag effect
            setTimeout(() => {
                cursorRing.style.left = e.clientX + 'px';
                cursorRing.style.top = e.clientY + 'px';
            }, 80);
        });

        const clickables = document.querySelectorAll('a, button, input, textarea, .group, .cursor-pointer');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorRing.style.width = '64px';
                cursorRing.style.height = '64px';
                cursorRing.style.borderColor = '#F97316';
                cursorDot.style.transform = 'translate(-50%, -50%) scale(0.5)';
            });
            el.addEventListener('mouseleave', () => {
                cursorRing.style.width = '32px';
                cursorRing.style.height = '32px';
                cursorRing.style.borderColor = 'rgba(255,255,255,0.3)';
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });

        // --- 4. SCROLL OBSERVER ---
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-[slideUp_0.8s_ease-out_forwards]', 'opacity-100');
                    entry.target.classList.remove('opacity-0');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-on-scroll').forEach(el => {
            el.classList.add('opacity-0');
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="cursor-dot"></div>
<div id="cursor-ring"></div>

<div id="loader">
<div className="flex flex-col items-center">
<div className="font-display text-4xl font-bold tracking-tighter mb-4 text-white">SYNAPSE<span className="text-orange-500">.</span>AI</div>
<div className="font-mono text-xs text-orange-500 tracking-[0.3em] uppercase">Initializing Neural Mesh</div>
<div className="w-48 h-[1px] bg-gray-800 mt-6 overflow-hidden relative">
<div className="absolute inset-0 bg-orange-500 w-full origin-left animate-[grow_1.5s_ease-in-out]"></div>
</div>
</div>
</div>

<canvas className="fixed -z-10 opacity-30 w-full h-full top-0 left-0" id="neural-canvas"></canvas>

<div className="fixed top-0 w-full h-screen -z-10 blur-3xl opacity-20 pointer-events-none">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-gray-900 to-black"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full animate-pulse"></div>
</div>

<div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] -z-5 pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center backdrop-blur-sm border-b border-white/5">
<div className="flex items-center gap-3 group cursor-none">
<div className="flex group-hover:border-orange-500/50 transition-colors duration-300 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-orange-400 to-orange-600 w-5 h-5 rounded-lg relative items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(251, 146, 60, 1), rgba(234, 88, 12, 1))', -BorderRadiusBefore: '8px'}}>
<iconify-icon className="text-white group-hover:text-orange-500 transition-colors" icon="solar:cpu-bolt-linear" width="14"></iconify-icon>
</div>
<span className="group-hover:text-white/90 text-lg font-bold text-white tracking-tight font-display">SYNAPSE</span>
</div>
<div className="hidden md:flex gap-8 bg-gray-900/50 border-white/5 border rounded-full pt-3 pr-8 pb-3 pl-8 shadow-lg backdrop-blur-md items-center">
<a className="hover:text-white transition-colors text-xs font-medium text-gray-400 tracking-wide uppercase" href="#hero">Mission</a>
<a className="hover:text-white transition-colors text-xs font-medium text-gray-400 tracking-wide uppercase" href="#architecture">Architecture</a>
<a className="hover:text-white transition-colors text-xs font-medium text-gray-400 tracking-wide uppercase" href="#stack">Stack</a>
<a className="hover:text-white transition-colors text-xs font-medium text-gray-400 tracking-wide uppercase" href="#contact">Deploy</a>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
</span>
<span className="text-[10px] font-medium text-orange-500 tracking-wider font-mono">SYSTEM ONLINE</span>
</div>
</div>
</nav>

<section className="min-h-screen flex flex-col overflow-hidden pt-20 relative perspective-1000 items-center justify-center" id="hero">

<div className="-translate-x-1/2 -translate-y-1/2 blur-[120px] animate-pulse bg-orange-500/5 w-[800px] h-[800px] rounded-full absolute top-1/2 left-1/2 pointer-events-none"></div>
<div className="flex flex-col flex-1 z-20 text-center w-full max-w-6xl px-6 relative items-center justify-center">

<div className="group relative cursor-default mb-8 md:mb-10">
<h1 className="text-[11vw] leading-[0.85] bg-clip-text transition-all duration-700 ease-in-out group-hover:text-orange-500 group-hover:bg-none hover-float select-none md:text-[8rem] font-bold text-transparent tracking-tighter font-display bg-gradient-to-b from-white via-gray-200 to-gray-600 mix-blend-overlay pb-2">
                    Agentic <br/>
                    Workforce
                </h1>
</div>

<div className="flex flex-col md:flex-row animate-[fadeIn_0.8s_1.5s_forwards] md:text-center md:border-l-0 md:border-t md:rounded-none md:pt-6 md:gap-x-8 md:items-center md:mb-12 text-left bg-black/20 opacity-0 border-orange-500/50 rounded-r-lg border-l-2 mb-10 pt-2 pr-6 pb-2 pl-6 backdrop-blur-sm gap-y-2 items-start shadow-[0_0_20px_rgba(0,0,0,0.2)]">
<div className="flex items-center gap-2 text-sm text-gray-400 tracking-widest font-mono">
<iconify-icon className="text-orange-500" icon="solar:database-linear"></iconify-icon>
                    RAG PIPELINES
                </div>
<div className="flex items-center gap-2 text-sm text-gray-300 tracking-widest font-mono">
<iconify-icon className="text-orange-500" icon="solar:users-group-rounded-linear"></iconify-icon>
                    AUTONOMOUS AGENTS
                </div>
<div className="flex items-center gap-2 text-sm text-gray-500 tracking-widest font-mono">
<iconify-icon className="text-orange-500" icon="solar:shield-check-linear"></iconify-icon>
                    ENTERPRISE SECURITY
                </div>
</div>

<div className="opacity-0 animate-[slideUp_0.8s_1.8s_forwards] z-30">
<a className="group relative inline-flex items-center gap-3 px-8 py-3.5 bg-orange-500 text-white font-semibold rounded-full overflow-hidden transition-all hover:bg-orange-600 hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:scale-105 border border-orange-400/50" href="#architecture">
<span className="z-10 text-xs tracking-widest font-mono uppercase relative">Initialize Agents</span>
<iconify-icon className="relative z-10 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-[fadeIn_1s_2.5s_forwards] flex flex-col items-center gap-3 z-20">
<div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-orange-500 to-transparent"></div>
<span className="text-[10px] uppercase animate-pulse text-gray-500 tracking-[0.2em] font-mono">SCROLL TO SCAN</span>
</div>
</section>

<section className="bg-gray-950 border-white/5 border-t pt-32 pb-32 relative overflow-hidden" id="architecture">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div className="reveal-on-scroll space-y-10 relative z-10">
<div className="flex items-center gap-3 text-orange-500">
<iconify-icon icon="solar:layers-minimalistic-linear" width="20"></iconify-icon>
<span className="uppercase text-xs tracking-[0.2em] font-mono">The Core</span>
</div>
<h2 className="md:text-5xl leading-tight text-4xl font-semibold tracking-tight font-display">
                    From Static Data to <br/>
<span className="text-gray-600">Active Intelligence.</span>
</h2>
<p className="leading-relaxed text-lg font-light text-gray-400">
                    Synapse is the connective tissue between your proprietary data and large language models. We engineer vector databases and agentic workflows that allow your business to reason, act, and evolve autonomously.
                </p>
<div className="grid grid-cols-2 gap-6 pt-4">
<div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group">
<iconify-icon className="text-orange-500 mb-3 group-hover:scale-110 transition-transform" icon="solar:document-text-linear" width="28"></iconify-icon>
<div className="text-xl font-bold font-display mb-1 text-white">Contextual RAG</div>
<div className="text-xs text-gray-500 font-mono leading-relaxed">
                            Zero hallucinations. We anchor LLM outputs in your live PDFs, SQL, and Notion docs.
                        </div>
</div>
<div className="hover:bg-white/[0.05] transition-colors group border-white/10 border rounded-xl p-6">
<iconify-icon className="text-orange-500 mb-3 group-hover:scale-110 transition-transform" icon="solar:graph-new-linear" width="28"></iconify-icon>
<div className="text-xl font-bold font-display mb-1 text-white">Self-Healing</div>
<div className="text-xs text-gray-500 font-mono leading-relaxed">
                            Agents that detect errors, replan, and execute corrections without human oversight.
                        </div>
</div>
</div>
</div>

<div className="relative h-[500px] w-full perspective-1000 group cursor-pointer reveal-on-scroll z-10">
<div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-purple-500/10 rounded-2xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>

<div className="relative w-full h-full transform-style-3d transition-all duration-700 ease-out transform group-hover:rotate-y-12 group-hover:rotate-x-6">

<div className="absolute inset-0 bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col">

<div className="h-10 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-2 justify-between">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
</div>
<div className="text-[10px] text-gray-600 font-mono">agent_orchestrator.py</div>
</div>

<div className="flex-1 p-6 relative font-mono text-xs overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

<div className="space-y-4 relative z-10 text-gray-400">
<div className="flex gap-2">
<span className="text-purple-400">import</span>
<span className="text-white">SynapseCore</span>
</div>
<div className="pl-4 border-l border-gray-800 space-y-2">
<div className="flex gap-2">
<span className="text-blue-400">const</span>
<span className="text-orange-500">pipeline</span>
<span className="text-gray-500">=</span>
<span className="text-white">new AgentSwarm({</span>
</div>
<div className="pl-4 text-gray-500">
                                        model: <span className="text-green-400">'gpt-4-turbo'</span>,<br/>
                                        temperature: <span className="text-blue-400">0.2</span>,<br/>
                                        tools: [<span className="text-green-400">'finance_db'</span>, <span className="text-green-400">'web_search'</span>]
                                    </div>
<div className="text-white">});</div>
</div>
<div className="bg-gray-900/50 border border-white/5 rounded p-3 mt-6">
<div className="flex items-center gap-2 mb-2">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
<span className="text-orange-500 text-[10px] uppercase tracking-wider">Live Execution</span>
</div>
<div className="text-gray-500 text-[10px] space-y-1">
<p>&gt; Ingesting 'Q3_Report.pdf'...</p>
<p>&gt; Vectorizing chunks [1024/1024]...</p>
<p className="text-white">&gt; Insight found: ROI increased by 14%.</p>
<p>&gt; Triggering CRM update...</p>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 bg-orange-500/10 border border-orange-500/30 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2 group-hover:scale-110 transition-transform">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-[10px] font-semibold text-orange-400">OPTIMIZED</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-gray-950 border-t border-white/5" id="stack">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal-on-scroll">
<h2 className="text-4xl font-bold font-display tracking-tight text-white mb-4">Deployment Protocol</h2>
<p className="text-gray-500 max-w-xl text-lg font-light">From raw data to autonomous agents in four phases.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group relative p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 rounded-2xl reveal-on-scroll delay-100">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="mb-6 flex justify-between items-start">
<iconify-icon className="text-gray-400 group-hover:text-orange-500 transition-colors" icon="solar:database-linear" width="32"></iconify-icon>
<span className="font-mono text-xs text-orange-500 tracking-widest bg-orange-500/10 px-2 py-1 rounded">01</span>
</div>
<h3 className="text-xl font-display font-medium text-white mb-3 group-hover:translate-x-1 transition-transform">Ingestion</h3>
<p className="text-sm text-gray-500 leading-relaxed font-light">
                        We connect to your data silos—Sharepoint, Google Drive, SQL. Data is cleaned, normalized, and prepared for neural processing.
                    </p>
</div>

<div className="group relative p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 rounded-2xl reveal-on-scroll delay-200">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="mb-6 flex justify-between items-start">
<iconify-icon className="text-gray-400 group-hover:text-orange-500 transition-colors" icon="solar:code-scan-linear" width="32"></iconify-icon>
<span className="font-mono text-xs text-orange-500 tracking-widest bg-orange-500/10 px-2 py-1 rounded">02</span>
</div>
<h3 className="text-xl font-display font-medium text-white mb-3 group-hover:translate-x-1 transition-transform">Vectorization</h3>
<p className="text-sm text-gray-500 leading-relaxed font-light">
                        Information is converted into high-dimensional embeddings and stored in Pinecone/Weaviate for semantic retrieval.
                    </p>
</div>

<div className="group relative p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 rounded-2xl reveal-on-scroll delay-300">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="mb-6 flex justify-between items-start">
<iconify-icon className="text-gray-400 group-hover:text-orange-500 transition-colors" icon="solar:sitemap-linear" width="32"></iconify-icon>
<span className="font-mono text-xs text-orange-500 tracking-widest bg-orange-500/10 px-2 py-1 rounded">03</span>
</div>
<h3 className="text-xl font-display font-medium text-white mb-3 group-hover:translate-x-1 transition-transform">Orchestration</h3>
<p className="text-sm text-gray-500 leading-relaxed font-light">
                        LangChain agents are configured with specific tools and permissions to reason through complex multi-step tasks.
                    </p>
</div>

<div className="group relative p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 rounded-2xl reveal-on-scroll delay-400">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="mb-6 flex justify-between items-start">
<iconify-icon className="text-gray-400 group-hover:text-orange-500 transition-colors" icon="solar:rocket-2-linear" width="32"></iconify-icon>
<span className="font-mono text-xs text-orange-500 tracking-widest bg-orange-500/10 px-2 py-1 rounded">04</span>
</div>
<h3 className="text-xl font-display font-medium text-white mb-3 group-hover:translate-x-1 transition-transform">Deployment</h3>
<p className="text-sm text-gray-500 leading-relaxed font-light">
                        Systems are deployed to your private VPC with enterprise-grade security, monitoring, and role-based access control.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#050505]">
<div className="max-w-[1600px] mx-auto">
<div className="flex justify-between items-end mb-12 reveal-on-scroll">
<div>
<h2 className="font-display text-4xl font-semibold tracking-tight text-white mb-2">Live Environments</h2>
<p className="text-gray-500 font-light">Recent enterprise integrations and agent clusters.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative aspect-[4/5] md:aspect-[3/4] rounded-xl overflow-hidden border border-white/5 cursor-pointer reveal-on-scroll delay-100">
<div className="absolute inset-0 bg-gray-800 transition-transform duration-700 group-hover:scale-105">

<img alt="Fintech AI" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="bg-gradient-to-t from-black via-transparent to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="group-hover:translate-y-0 transition-transform duration-300 w-full pt-6 pr-6 pb-6 pl-6 absolute bottom-0 left-0 translate-y-4">
<div className="text-orange-500 text-xs font-mono mb-2 tracking-widest">FINANCE // NYC</div>
<h3 className="font-display text-2xl font-medium text-white mb-2">Portfolio Analysis Agent</h3>
</div>
</div>

<div className="group relative aspect-[4/5] md:aspect-[3/4] rounded-xl overflow-hidden border border-white/5 cursor-pointer reveal-on-scroll delay-200">
<div className="absolute inset-0 bg-gray-800 transition-transform duration-700 group-hover:scale-105">
<img alt="Logistics AI" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="bg-gradient-to-t from-black via-transparent to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<div className="text-orange-500 text-xs font-mono mb-2 tracking-widest">LOGISTICS // BERLIN</div>
<h3 className="font-display text-2xl font-medium text-white mb-2">Supply Chain Optimizer</h3>
</div>
</div>

<div className="group relative aspect-[4/5] md:aspect-[3/4] rounded-xl overflow-hidden border border-white/5 cursor-pointer reveal-on-scroll delay-300">
<div className="absolute inset-0 bg-gray-800 transition-transform duration-700 group-hover:scale-105">
<img alt="Data Vis" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<div className="text-orange-500 text-xs font-mono mb-2 tracking-widest">HEALTH // BOSTON</div>
<h3 className="font-display text-2xl font-medium text-white mb-2">Patient Records RAG</h3>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen flex overflow-hidden bg-gray-950 pt-24 pb-24 relative items-center justify-center" id="contact">
<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-b from-orange-500/10 to-transparent rounded-full blur-[120px] opacity-20"></div>
</div>
<div className="z-10 reveal-on-scroll w-full max-w-3xl px-8 relative">
<div className="text-center mb-16">
<div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center shadow-lg">
<iconify-icon className="animate-[spin_10s_linear_infinite] text-orange-500" height="32" icon="solar:cpu-linear" width="32"></iconify-icon>
</div>
<h2 className="text-5xl font-bold tracking-tight font-display mb-3">Ready to deploy?</h2>
<p className="text-gray-500">Scale your workforce with intelligent agents. Book a technical discovery.</p>
</div>
<form className="md:p-10 bg-gray-900/30 border-white/5 border rounded-3xl p-8 backdrop-blur-md space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group">
<label className="block uppercase group-focus-within:text-orange-500 transition-colors text-xs text-gray-500 tracking-wider font-mono mb-2">Name</label>
<input className="focus:outline-none focus:border-orange-500 transition-colors text-lg text-white bg-transparent w-full border-gray-700 border-b py-2" placeholder="John Doe" type="text"/>
</div>

<div className="group">
<label className="block uppercase group-focus-within:text-orange-500 transition-colors text-xs text-gray-500 tracking-wider font-mono mb-2">Company</label>
<input className="focus:outline-none focus:border-orange-500 transition-colors text-lg text-white bg-transparent w-full border-gray-700 border-b py-2" placeholder="Acme Inc." type="text"/>
</div>

<div className="group md:col-span-2">
<label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider group-focus-within:text-orange-500 transition-colors">Work Email</label>
<input className="w-full bg-transparent border-b border-gray-700 py-2 text-lg text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="john@company.com" type="email"/>
</div>

<div className="group md:col-span-2">
<label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider group-focus-within:text-orange-500 transition-colors">Integration Needs</label>
<textarea className="w-full bg-transparent border-b border-gray-700 py-2 text-lg text-white focus:outline-none focus:border-orange-500 transition-colors resize-none h-24" placeholder="Describe your data sources and desired outcomes..."></textarea>
</div>
</div>

<div className="flex items-center gap-3 group cursor-pointer">
<div className="relative w-5 h-5 border border-gray-600 rounded bg-transparent group-hover:border-orange-500 transition-colors flex items-center justify-center">
<input className="peer appearance-none w-full h-full cursor-pointer z-10" type="checkbox"/>
<iconify-icon className="text-orange-500 opacity-0 peer-checked:opacity-100 absolute inset-0 transition-opacity pointer-events-none" height="100%" icon="solar:check-square-linear" width="100%"></iconify-icon>
</div>
<span className="text-xs text-gray-500 font-mono">I agree to the NDA and Privacy Protocol.</span>
</div>
<div className="text-right pt-4">
<button className="hover:bg-orange-500 hover:text-white transition-all duration-300 inline-flex gap-2 text-sm font-bold text-black tracking-wide bg-white rounded-lg py-3 px-8 items-center group" type="button">
<span>INITIATE PROTOCOL</span>
<iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</form>
</div>
</section>

<footer className="border-t border-white/5 bg-gray-950 py-12 px-6 relative z-10">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="flex group-hover:border-orange-500/50 transition-colors duration-300 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-orange-400 to-orange-600 w-4 h-4 rounded-lg relative items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(251, 146, 60, 1), rgba(234, 88, 12, 1))', -BorderRadiusBefore: '8px'}}>
<iconify-icon className="text-white" icon="solar:cpu-bolt-linear" width="12"></iconify-icon>
</div>
<span className="font-bold text-white tracking-tight font-display text-sm">SYNAPSE</span>
</div>
<div className="text-[10px] uppercase text-gray-600 tracking-widest font-mono">San Francisco. London. Tokyo.</div>
<div className="flex gap-6 text-gray-500">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
