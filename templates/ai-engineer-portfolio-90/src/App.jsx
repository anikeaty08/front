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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'system-ui', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
dark: '#08090A',
card: '#0F1112',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'subtle-grid': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')",
},
animation: {
'fade-in': 'fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'shimmer': 'shimmer 8s linear infinite',
'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
shimmer: {
'0%': { backgroundPosition: '-1000px 0' },
'100%': { backgroundPosition: '1000px 0' },
}
}
}
}
}



        // --- Core Logic ---

        function toggleTheme() {
            const html = document.documentElement;
            const icon = document.getElementById('theme-icon');
            
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                icon.setAttribute('icon', 'lucide:sun');
            } else {
                html.classList.add('dark');
                icon.setAttribute('icon', 'lucide:moon');
            }
        }

        function navigateTo(sectionId) {
            // Hide all sections
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.add('hidden');
                section.classList.remove('animate-slide-up');
            });

            // Show target
            const target = document.getElementById(sectionId);
            if(target) {
                target.classList.remove('hidden');
                // Trigger reflow to restart animation
                void target.offsetWidth;
                target.classList.add('animate-slide-up');
            }
            
            // Update Nav
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if(link.getAttribute('data-target') === sectionId) link.classList.add('active');
            });
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function openProject(projectId) {
            navigateTo('proj-1');
            
            // Simulating dynamic content load for the single-file constraint
            const titleEl = document.getElementById('detail-title');
            const iconEl = document.getElementById('detail-icon');
            
            const data = {
                'proj-1': { title: "Nexus RAG Architecture", icon: "lucide:brain-circuit" },
                'proj-2': { title: "VisionGuard Edge AI", icon: "lucide:scan-eye" },
                'proj-3': { title: "AlphaTrade Engine", icon: "lucide:candlestick-chart" }
            };

            if(data[projectId]) {
                titleEl.textContent = data[projectId].title;
                iconEl.setAttribute('icon', data[projectId].icon);
            }
        }

        // --- Refined Network Animation ---
        const canvas = document.getElementById('network-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        
        // Configuration
        const CONFIG = {
            particleCount: 60,
            connectionDist: 180,
            speed: 0.3
        };

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initParticles();
        }

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * CONFIG.speed;
                this.vy = (Math.random() - 0.5) * CONFIG.speed;
                this.size = Math.random() * 1.5 + 0.5;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                
                // Bounce
                if(this.x < 0 || this.x > width) this.vx *= -1;
                if(this.y < 0 || this.y > height) this.vy *= -1;
            }
            draw() {
                const isDark = document.documentElement.classList.contains('dark');
                ctx.fillStyle = isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            for(let i=0; i<CONFIG.particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            const isDark = document.documentElement.classList.contains('dark');
            
            particles.forEach((p, index) => {
                p.update();
                p.draw();
                
                // Connections
                for(let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx*dx + dy*dy);
                    
                    if(dist < CONFIG.connectionDist) {
                        ctx.beginPath();
                        ctx.strokeStyle = isDark 
                            ? `rgba(255,255,255,${0.15 - dist/CONFIG.connectionDist*0.15})`
                            : `rgba(0,0,0,${0.1 - dist/CONFIG.connectionDist*0.1})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });
            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', resize);
        
        // Init
        document.addEventListener('DOMContentLoaded', () => {
            const navLinks = document.querySelectorAll('.nav-link[data-target="home"]');
            navLinks.forEach(l => l.classList.add('active'));
            resize();
            animate();
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
      

<div className="noise-overlay"></div>

<div className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-0 dark:opacity-40 transition-opacity duration-1000"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-0 dark:opacity-40 transition-opacity duration-1000"></div>

<canvas className="fixed top-0 left-0 w-full h-full z-0 opacity-20 dark:opacity-30 pointer-events-none" id="network-canvas"></canvas>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-full max-w-fit px-2">
<div className="glass-panel rounded-full px-1.5 py-1.5 flex items-center gap-1 shadow-lg shadow-black/5 dark:shadow-black/20">

<div className="pl-3 pr-4 flex items-center gap-2 cursor-pointer border-r border-black/5 dark:border-white/10 mr-1" onclick="navigateTo('home')">
<div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
<span className="text-xs font-semibold tracking-tight">ALEX.AI</span>
</div>
<button className="nav-link px-4 py-2 text-[11px] font-medium text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors rounded-full hover:bg-black/5 dark:hover:bg-white/5" data-target="home" onclick="navigateTo('home')">Index</button>
<button className="nav-link px-4 py-2 text-[11px] font-medium text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors rounded-full hover:bg-black/5 dark:hover:bg-white/5" data-target="projects" onclick="navigateTo('projects')">Work</button>
<button className="nav-link px-4 py-2 text-[11px] font-medium text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors rounded-full hover:bg-black/5 dark:hover:bg-white/5" data-target="skills" onclick="navigateTo('skills')">Stack</button>
<div className="w-px h-4 bg-black/5 dark:bg-white/10 mx-1"></div>
<button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-neutral-500 dark:text-neutral-400" onclick="toggleTheme()">
<iconify-icon icon="lucide:sun" id="theme-icon" width="14"></iconify-icon>
</button>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 max-w-5xl mx-auto px-6">

<section className="page-section min-h-[70vh] flex flex-col justify-center" id="home">

<div className="w-fit mb-8 opacity-0 animate-slide-up">
<div className="px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 backdrop-blur-md flex items-center gap-2">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
</span>
<span className="text-[10px] font-medium text-indigo-600 dark:text-indigo-300 uppercase tracking-widest">Available for hire</span>
</div>
</div>
<h1 className="text-5xl md:text-8xl font-semibold tracking-[-0.03em] leading-[0.95] text-neutral-900 dark:text-white mb-8 opacity-0 animate-slide-up delay-100">
                Architecting <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-neutral-500 to-neutral-900 dark:from-white dark:via-neutral-400 dark:to-white bg-300% animate-shimmer">Intelligence.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-light max-w-xl leading-relaxed opacity-0 animate-slide-up delay-200">
                Senior AI Engineer bridging the chasm between theoretical research and production systems. Specializing in <span className="text-neutral-900 dark:text-white font-medium">Large Language Models</span> and <span className="text-neutral-900 dark:text-white font-medium">Neural Architecture</span>.
            </p>
<div className="flex items-center gap-4 mt-10 opacity-0 animate-slide-up delay-300">
<button className="group relative px-6 py-3 bg-neutral-900 dark:bg-[#EDEDED] text-white dark:text-black text-xs font-semibold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]" onclick="navigateTo('projects')">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
<span className="relative z-10 flex items-center gap-2">View Case Studies <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon></span>
</button>
<a className="px-6 py-3 text-neutral-600 dark:text-neutral-400 text-xs font-medium hover:text-black dark:hover:text-white transition-colors flex items-center gap-2" href="#">
<iconify-icon icon="lucide:github" width="16"></iconify-icon> GitHub
                </a>
</div>

<div className="mt-24 pt-8 border-t border-black/5 dark:border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0 animate-fade-in delay-500">
<div>
<div className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">5<span className="text-indigo-500">+</span></div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">Years Exp.</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">40<span className="text-indigo-500">+</span></div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">Deployed Models</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">99<span className="text-indigo-500">%</span></div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">System Uptime</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">12</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">Publications</div>
</div>
</div>
</section>

<section className="page-section hidden" id="projects">
<div className="mb-12 animate-slide-up">
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">Selected Works</h2>
<p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 max-w-md">Engineering high-dimensional solutions for complex real-world problems.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="group md:col-span-2 md:row-span-2 glass-card rounded-3xl p-1 relative overflow-hidden cursor-pointer animate-slide-up delay-100" onclick="openProject('proj-1')">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="h-full w-full bg-[#FAFAFA] dark:bg-[#0A0A0A] rounded-[20px] overflow-hidden relative flex flex-col">

<div className="flex-1 relative flex items-center justify-center bg-indigo-500/5 overflow-hidden">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-700 ease-out"></div>
<iconify-icon className="text-neutral-900 dark:text-white relative z-10 drop-shadow-2xl" icon="lucide:brain-circuit" strokeWidth="1" width="80"></iconify-icon>
</div>

<div className="p-8 border-t border-black/5 dark:border-white/5 relative z-10 bg-[#FAFAFA]/80 dark:bg-[#0A0A0A]/80 backdrop-blur-sm">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-xl font-medium text-neutral-900 dark:text-white">Nexus RAG System</h3>
<p className="text-sm text-neutral-500 mt-1">Enterprise-grade LLM architecture reducing hallucinations by 95%.</p>
</div>
<div className="w-8 h-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:bg-indigo-500 group-hover:border-indigo-500 group-hover:text-white transition-all">
<iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</div>
</div>
<div className="flex gap-2 mt-4">
<span className="text-[10px] uppercase tracking-wider border border-black/5 dark:border-white/10 px-2 py-1 rounded text-neutral-500">LangChain</span>
<span className="text-[10px] uppercase tracking-wider border border-black/5 dark:border-white/10 px-2 py-1 rounded text-neutral-500">Pinecone</span>
</div>
</div>
</div>
</div>

<div className="group glass-card rounded-3xl p-1 relative overflow-hidden cursor-pointer animate-slide-up delay-200" onclick="openProject('proj-2')">
<div className="h-full w-full bg-[#FAFAFA] dark:bg-[#0A0A0A] rounded-[20px] overflow-hidden relative flex flex-col">
<div className="flex-1 relative flex items-center justify-center bg-emerald-500/5">
<iconify-icon className="text-neutral-700 dark:text-neutral-300 group-hover:text-emerald-500 transition-colors" icon="lucide:scan-eye" strokeWidth="1.5" width="48"></iconify-icon>
</div>
<div className="p-5 border-t border-black/5 dark:border-white/5">
<h3 className="text-base font-medium text-neutral-900 dark:text-white">VisionGuard</h3>
<p className="text-xs text-neutral-500 mt-1">Real-time edge defect detection.</p>
</div>
</div>
</div>

<div className="group glass-card rounded-3xl p-1 relative overflow-hidden cursor-pointer animate-slide-up delay-300" onclick="openProject('proj-3')">
<div className="h-full w-full bg-[#FAFAFA] dark:bg-[#0A0A0A] rounded-[20px] overflow-hidden relative flex flex-col">
<div className="flex-1 relative flex items-center justify-center bg-orange-500/5">
<iconify-icon className="text-neutral-700 dark:text-neutral-300 group-hover:text-orange-500 transition-colors" icon="lucide:candlestick-chart" strokeWidth="1.5" width="48"></iconify-icon>
</div>
<div className="p-5 border-t border-black/5 dark:border-white/5">
<h3 className="text-base font-medium text-neutral-900 dark:text-white">AlphaTrade</h3>
<p className="text-xs text-neutral-500 mt-1">LSTM crypto forecasting engine.</p>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden" id="skills">
<div className="mb-12 animate-slide-up">
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">Technical Stack</h2>
<p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">Tools of the trade.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up delay-100">

<div>
<h3 className="text-xs font-mono text-neutral-500 mb-4 border-b border-neutral-200 dark:border-white/10 pb-2">CORE INTELLIGENCE</h3>
<div className="space-y-3">
<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<iconify-icon icon="logos:pytorch-icon" width="18"></iconify-icon>
<span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">PyTorch</span>
</div>
<div className="w-24 h-1 bg-neutral-200 dark:bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-neutral-900 dark:bg-white w-[95%]"></div>
</div>
</div>
<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<iconify-icon icon="logos:tensorflow" width="18"></iconify-icon>
<span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">TensorFlow</span>
</div>
<div className="w-24 h-1 bg-neutral-200 dark:bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-neutral-900 dark:bg-white w-[85%]"></div>
</div>
</div>
<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<iconify-icon className="text-yellow-500" icon="simple-icons:huggingface" width="18"></iconify-icon>
<span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Transformers</span>
</div>
<div className="w-24 h-1 bg-neutral-200 dark:bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-neutral-900 dark:bg-white w-[90%]"></div>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-xs font-mono text-neutral-500 mb-4 border-b border-neutral-200 dark:border-white/10 pb-2">INFRASTRUCTURE</h3>
<div className="space-y-3">
<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<iconify-icon icon="logos:docker-icon" width="18"></iconify-icon>
<span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Docker</span>
</div>
<div className="w-24 h-1 bg-neutral-200 dark:bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-neutral-900 dark:bg-white w-[90%]"></div>
</div>
</div>
<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<iconify-icon icon="logos:aws" width="18"></iconify-icon>
<span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">AWS SageMaker</span>
</div>
<div className="w-24 h-1 bg-neutral-200 dark:bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-neutral-900 dark:bg-white w-[80%]"></div>
</div>
</div>
<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<iconify-icon icon="logos:kubernetes" width="18"></iconify-icon>
<span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Kubernetes</span>
</div>
<div className="w-24 h-1 bg-neutral-200 dark:bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-neutral-900 dark:bg-white w-[75%]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 animate-slide-up delay-200">
<h3 className="text-xs font-mono text-neutral-500 mb-6 border-b border-neutral-200 dark:border-white/10 pb-2">EXPERIENCE LOG</h3>
<div className="font-mono text-xs space-y-8 relative border-l border-dashed border-neutral-300 dark:border-white/10 ml-2">
<div className="pl-8 relative group">
<div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-indigo-500 rounded-full ring-4 ring-[#FAFAFA] dark:ring-dark"></div>
<div className="text-neutral-400 mb-1">2022 — Present</div>
<div className="text-base text-neutral-900 dark:text-white font-semibold">Senior AI Engineer</div>
<div className="text-indigo-600 dark:text-indigo-400 mb-2">Neural Systems Inc.</div>
<p className="text-neutral-500 max-w-lg leading-relaxed">Leading the RAG architecture team. Deployed models serving 50k DAU with 99.9% availability.</p>
</div>
<div className="pl-8 relative group">
<div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-neutral-400 dark:bg-neutral-600 rounded-full ring-4 ring-[#FAFAFA] dark:ring-dark group-hover:bg-indigo-500 transition-colors"></div>
<div className="text-neutral-400 mb-1">2020 — 2022</div>
<div className="text-base text-neutral-900 dark:text-white font-semibold">ML Engineer</div>
<div className="text-indigo-600 dark:text-indigo-400 mb-2">Vision Corp</div>
<p className="text-neutral-500 max-w-lg leading-relaxed">Computer vision optimization for edge devices. Reduced inference latency by 40% using TensorRT.</p>
</div>
</div>
</div>
</section>

<section className="page-section hidden" id="proj-1">
<button className="mb-8 group flex items-center gap-2 text-xs font-medium text-neutral-500 hover:text-black dark:hover:text-white transition-colors" onclick="navigateTo('projects')">
<div className="p-1 rounded-full bg-black/5 dark:bg-white/10 group-hover:-translate-x-1 transition-transform">
<iconify-icon icon="lucide:arrow-left"></iconify-icon>
</div> 
                Back to Works
            </button>
<div className="animate-slide-up">
<div className="flex flex-col lg:flex-row gap-16">
<div className="flex-1">
<div className="border border-black/5 dark:border-white/10 rounded-2xl p-1.5 bg-white dark:bg-white/5 mb-10">
<div className="bg-[#F5F5F5] dark:bg-black rounded-xl h-64 md:h-96 flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
<iconify-icon className="text-neutral-900 dark:text-white relative z-10" icon="lucide:brain-circuit" id="detail-icon" strokeWidth="0.8" width="96"></iconify-icon>

<div className="absolute w-full h-full opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
</div>
</div>
<h1 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-6" id="detail-title">Nexus RAG Architecture</h1>
<div className="prose prose-sm dark:prose-invert text-neutral-600 dark:text-neutral-400 leading-7 max-w-none">
<p className="text-lg font-light mb-8">Retrieval-Augmented Generation system designed for zero-trust environments. Bridging the gap between static knowledge bases and dynamic conversation flow.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
<div>
<h3 className="text-neutral-900 dark:text-white font-medium mb-2">The Problem</h3>
<p>Generic LLMs hallucinate when dealing with specific domain data (legal/medical). Fine-tuning was too expensive and slow for real-time data updates.</p>
</div>
<div>
<h3 className="text-neutral-900 dark:text-white font-medium mb-2">The Solution</h3>
<p>A hybrid search pipeline using Pinecone for dense vector retrieval and BM25 for sparse keyword matching, re-ranked by a Cross-Encoder for maximum relevance.</p>
</div>
</div>
</div>
</div>
<div className="w-full lg:w-72 shrink-0">
<div className="sticky top-24 space-y-10">
<div>
<h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-4">TECHNOLOGIES</h4>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 text-[11px] font-medium border border-black/10 dark:border-white/10 rounded-full text-neutral-600 dark:text-neutral-300">Python</span>
<span className="px-3 py-1 text-[11px] font-medium border border-black/10 dark:border-white/10 rounded-full text-neutral-600 dark:text-neutral-300">FastAPI</span>
<span className="px-3 py-1 text-[11px] font-medium border border-black/10 dark:border-white/10 rounded-full text-neutral-600 dark:text-neutral-300">LangChain</span>
<span className="px-3 py-1 text-[11px] font-medium border border-black/10 dark:border-white/10 rounded-full text-neutral-600 dark:text-neutral-300">Pinecone</span>
<span className="px-3 py-1 text-[11px] font-medium border border-black/10 dark:border-white/10 rounded-full text-neutral-600 dark:text-neutral-300">React</span>
</div>
</div>
<div>
<h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-4">PERFORMANCE</h4>
<div className="space-y-4">
<div className="flex items-end justify-between border-b border-black/5 dark:border-white/5 pb-2">
<span className="text-sm text-neutral-500">Accuracy</span>
<span className="font-mono text-sm text-neutral-900 dark:text-white">95.4%</span>
</div>
<div className="flex items-end justify-between border-b border-black/5 dark:border-white/5 pb-2">
<span className="text-sm text-neutral-500">Latency</span>
<span className="font-mono text-sm text-neutral-900 dark:text-white">180ms</span>
</div>
<div className="flex items-end justify-between border-b border-black/5 dark:border-white/5 pb-2">
<span className="text-sm text-neutral-500">Throughput</span>
<span className="font-mono text-sm text-neutral-900 dark:text-white">5k req/m</span>
</div>
</div>
</div>
<button className="w-full py-3 bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-indigo-500/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 text-xs">
<iconify-icon icon="lucide:external-link" width="14"></iconify-icon> Visit Deployment
                            </button>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="relative z-10 border-t border-black/5 dark:border-white/5 mt-20">
<div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-neutral-400 font-mono">
                © 2024 Alex Chen. Crafted with logic &amp; pixels.
            </div>
<div className="flex gap-6">
<a className="text-neutral-400 hover:text-black dark:hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:x" width="14"></iconify-icon></a>
<a className="text-neutral-400 hover:text-black dark:hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="16"></iconify-icon></a>
<a className="text-neutral-400 hover:text-black dark:hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:github" width="16"></iconify-icon></a>
</div>
</div>
</footer>


    </>
  );
}
