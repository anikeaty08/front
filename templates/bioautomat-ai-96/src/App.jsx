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
},
colors: {
brand: {
50: '#f0fdfa',
500: '#14b8a6',
900: '#134e4a',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
'dash': 'dash 2s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
dash: {
'to': { strokeDashoffset: '24' },
}
}
}
}
}



                !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
            


        // Initialize Icons
        lucide.createIcons();

        // Reveal on Scroll Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
            observer.observe(el);
        });

        // Particle System
        const canvas = document.getElementById('particle-canvas');
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
                this.size = Math.random() * 2;
                this.alpha = Math.random() * 0.5;
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
                ctx.fillStyle = `rgba(45, 212, 191, ${this.alpha})`; // Teal-ish color
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Initialize particles
        for (let i = 0; i < 100; i++) {
            particles.push(new Particle());
        }

        function animateParticles() {
            ctx.clearRect(0, 0, width, height);
            
            particles.forEach(p => {
                p.update();
                p.draw();
            });

            // Draw connections if close
            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach(p2 => {
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 100) {
                        ctx.strokeStyle = `rgba(45, 212, 191, ${0.1 * (1 - dist / 100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                });
            });

            requestAnimationFrame(animateParticles);
        }

        animateParticles();
    
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
      

<div className="fixed inset-0 z-0 w-full h-full overflow-hidden pointer-events-none">

<div className="aura-background-component top-0 w-full -z-10 absolute h-full opacity-60">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="yWZ2Tbe094Fsjgy9NRnD"></div>

</div>
<div className="absolute inset-0 video-overlay"></div>

<canvas className="absolute inset-0 w-full h-full opacity-40" id="particle-canvas"></canvas>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-teal-500 to-blue-600 flex items-center justify-center text-white font-bold tracking-tighter text-sm">
                    BA
                </div>
<span className="text-sm font-medium tracking-tight text-white">BIOAUTOMATE</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#platform">Platform</a>
<a className="hover:text-white transition-colors" href="#agents">Agents</a>
<a className="hover:text-white transition-colors" href="#workflow">Workflow</a>
</div>
<a className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-medium text-white transition-all group" href="#contact">
                Request Access
                <i className="w-3 h-3 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" data-lucide="arrow-right"></i>
</a>
</div>
</nav>

<section className="relative z-10 min-h-screen flex flex-col justify-center items-center pt-20 px-6">
<div className="max-w-4xl mx-auto text-center space-y-8 reveal-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/10 text-teal-300 text-xs font-medium tracking-wide uppercase animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
                Introducing Intelligence v1.0
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500">
                Accelerating Life Sciences <br/> with <span className="text-gradient-primary">Autonomous AI</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
                Unlock the next era of discovery. Our multi-agent system automates diagnosis, research planning, and drug trials with unprecedented precision.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<button className="group relative px-8 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                    Start Automation
                    <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all"></div>
</button>
<button className="px-8 py-3.5 rounded-full glass-panel text-white font-medium text-sm hover:bg-white/5 transition-all flex items-center gap-2">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                    Watch Demo
                </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
<i className="w-5 h-5 text-zinc-600" data-lucide="chevron-down"></i>
</div>
</section>

<section className="relative z-10 py-24 px-6 bg-black/40 border-t border-white/5 backdrop-blur-sm" id="agents">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:text-center max-w-2xl mx-auto reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Autonomous Neural Agents</h2>
<p className="text-zinc-400 font-light">
                    Three specialized models working in unison to process complex biological data from diagnosis to regulatory approval.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative rounded-2xl p-1 bg-gradient-to-b from-white/10 to-transparent hover:from-blue-500/20 transition-all duration-500 reveal-on-scroll">
<div className="absolute inset-0 bg-blue-500/5 blur-xl group-hover:bg-blue-500/10 transition-all opacity-0 group-hover:opacity-100"></div>
<div className="relative h-full bg-[#0a0a0a] rounded-xl p-8 border border-white/5 overflow-hidden flex flex-col">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<i className="w-6 h-6 text-blue-400 stroke-[1.5]" data-lucide="dna"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">DNA Healthcare Agent</h3>
<p className="text-sm text-zinc-500 mb-6 flex-grow">Advanced genomic interpretation and patient outcome prediction engine.</p>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-blue-500 mt-0.5" data-lucide="check"></i>
<span>Real-time disease diagnosis</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-blue-500 mt-0.5" data-lucide="check"></i>
<span>Patient outcome prediction</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-blue-500 mt-0.5" data-lucide="check"></i>
<span>Meta-analysis of medical records</span>
</li>
</ul>
<div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
<span className="text-xs font-mono text-blue-400/70">v2.4.0 Active</span>
<div className="flex space-x-1">
<span className="w-1 h-1 rounded-full bg-blue-500 animate-pulse"></span>
<span className="w-1 h-1 rounded-full bg-blue-500/50"></span>
<span className="w-1 h-1 rounded-full bg-blue-500/20"></span>
</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl p-1 bg-gradient-to-b from-white/10 to-transparent hover:from-purple-500/20 transition-all duration-500 reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 bg-purple-500/5 blur-xl group-hover:bg-purple-500/10 transition-all opacity-0 group-hover:opacity-100"></div>
<div className="relative h-full bg-[#0a0a0a] rounded-xl p-8 border border-white/5 overflow-hidden flex flex-col">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<i className="w-6 h-6 text-purple-400 stroke-[1.5]" data-lucide="flask-conical"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Research Architect</h3>
<p className="text-sm text-zinc-500 mb-6 flex-grow">Autonomous experimentation design and complex data synthesis.</p>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-purple-500 mt-0.5" data-lucide="check"></i>
<span>Automated experiment planning</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-purple-500 mt-0.5" data-lucide="check"></i>
<span>High-throughput data testing</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-purple-500 mt-0.5" data-lucide="check"></i>
<span>Novel synthesis discovery</span>
</li>
</ul>
<div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
<span className="text-xs font-mono text-purple-400/70">Processing...</span>
<div className="h-1 w-16 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-purple-500 w-2/3"></div>
</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl p-1 bg-gradient-to-b from-white/10 to-transparent hover:from-emerald-500/20 transition-all duration-500 reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 bg-emerald-500/5 blur-xl group-hover:bg-emerald-500/10 transition-all opacity-0 group-hover:opacity-100"></div>
<div className="relative h-full bg-[#0a0a0a] rounded-xl p-8 border border-white/5 overflow-hidden flex flex-col">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<i className="w-6 h-6 text-emerald-400 stroke-[1.5]" data-lucide="tablet"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Pharma Compliance</h3>
<p className="text-sm text-zinc-500 mb-6 flex-grow">Accelerating drug discovery pipelines and regulatory validation.</p>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-emerald-500 mt-0.5" data-lucide="check"></i>
<span>Drug candidate screening</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-emerald-500 mt-0.5" data-lucide="check"></i>
<span>Vaccine efficacy simulation</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-emerald-500 mt-0.5" data-lucide="check"></i>
<span>Trial regulatory insights</span>
</li>
</ul>
<div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
<span className="text-xs font-mono text-emerald-400/70">FDA Compliant</span>
<i className="w-4 h-4 text-emerald-500" data-lucide="shield-check"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6 overflow-hidden" id="workflow">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-900/10 via-[#050505] to-[#050505] pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative">
<div className="text-center mb-20 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">End-to-End Intelligence Pipeline</h2>
<p className="text-zinc-400 font-light">From raw unstructured data to actionable clinical insights in milliseconds.</p>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 select-none">

<div className="relative group z-10 w-full md:w-auto reveal-on-scroll">
<div className="glass-panel rounded-xl p-6 w-full md:w-64 border-l-2 border-l-zinc-700 hover:border-l-white transition-colors">
<div className="flex items-center gap-3 mb-3">
<i className="w-5 h-5 text-zinc-400" data-lucide="database"></i>
<span className="text-sm font-medium">Raw Data Ingestion</span>
</div>
<div className="space-y-2">
<div className="h-1.5 w-full bg-zinc-800 rounded animate-pulse"></div>
<div className="h-1.5 w-3/4 bg-zinc-800 rounded animate-pulse" style={{animationDelay: '0.1s'}}></div>
<div className="h-1.5 w-5/6 bg-zinc-800 rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
</div>
</div>
</div>

<div className="hidden md:flex flex-1 h-px bg-zinc-800 relative overflow-hidden reveal-on-scroll">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500 to-transparent w-1/2 animate-[shimmer_2s_infinite]"></div>
</div>
<div className="md:hidden h-12 w-px bg-zinc-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500 to-transparent h-1/2 animate-[shimmer_2s_infinite]"></div>
</div>

<div className="relative z-20 reveal-on-scroll">
<div className="absolute -inset-4 bg-teal-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
<div className="relative w-32 h-32 rounded-full glass-panel flex items-center justify-center border border-teal-500/30 shadow-[0_0_50px_-10px_rgba(20,184,166,0.3)]">
<div className="text-center">
<i className="w-8 h-8 text-teal-400 mx-auto mb-2 animate-float" data-lucide="cpu"></i>
<span className="text-xs font-semibold text-teal-100 tracking-wide">AI CORE</span>
</div>

<div className="absolute inset-0 rounded-full border border-dashed border-teal-500/20 animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-2 rounded-full border border-dotted border-teal-500/30 animate-[spin_15s_linear_infinite_reverse]"></div>
</div>
</div>

<div className="hidden md:flex flex-1 h-px bg-zinc-800 relative overflow-hidden reveal-on-scroll">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent w-1/2 animate-[shimmer_2s_infinite]" style={{animationDelay: '0.5s'}}></div>
</div>
<div className="md:hidden h-12 w-px bg-zinc-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500 to-transparent h-1/2 animate-[shimmer_2s_infinite]"></div>
</div>

<div className="relative group z-10 w-full md:w-auto reveal-on-scroll">
<div className="glass-panel rounded-xl p-6 w-full md:w-64 border-l-2 border-l-blue-500">
<div className="flex items-center gap-3 mb-3">
<i className="w-5 h-5 text-blue-400" data-lucide="sparkles"></i>
<span className="text-sm font-medium text-white">Actionable Insights</span>
</div>
<div className="bg-blue-500/10 rounded p-3 border border-blue-500/20">
<div className="flex items-center gap-2 mb-1">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs text-blue-200">Confidence: 99.8%</span>
</div>
<p className="text-[10px] text-zinc-400 leading-relaxed">
                                Molecule candidates validated. Clinical trial phases optimized.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-zinc-900/30">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center reveal-on-scroll">
<div>
<div className="text-3xl font-semibold text-white mb-1">2.4M+</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest">Papers Analyzed</div>
</div>
<div>
<div className="text-3xl font-semibold text-white mb-1">85%</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest">Faster Trials</div>
</div>
<div>
<div className="text-3xl font-semibold text-white mb-1">99.9%</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest">Uptime</div>
</div>
<div>
<div className="text-3xl font-semibold text-white mb-1">Zero</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest">Data Leaks</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6" id="contact">
<div className="max-w-xl mx-auto text-center reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Ready to automate?</h2>
<p className="text-zinc-400 mb-10 font-light">Join the leading biotech firms using BioAutomate to revolutionize their research pipelines.</p>
<form className="space-y-4 text-left glass-panel p-8 rounded-2xl">
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5" htmlFor="email">Work Email</label>
<input className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all placeholder-zinc-600" id="email" placeholder="researcher@lab.com" type="email"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5">Company</label>
<input className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5">Sector</label>
<div className="relative">
<select className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-teal-500 appearance-none">
<option>Pharma</option>
<option>Biotech</option>
<option>Academia</option>
<option>Healthcare</option>
</select>
<i className="absolute right-3 top-3 w-4 h-4 text-zinc-500 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div className="flex items-center gap-2 pt-2">
<input className="appearance-none w-4 h-4 border border-zinc-700 rounded bg-black/50 checked:bg-teal-500 checked:border-teal-500 relative cursor-pointer focus:outline-none focus:ring-1 focus:ring-teal-500 after:content-['✓'] after:absolute after:text-black after:text-[10px] after:top-[1px] after:left-[3px] after:opacity-0 checked:after:opacity-100" id="terms" type="checkbox"/>
<label className="text-xs text-zinc-500 cursor-pointer select-none" htmlFor="terms">I agree to the processing of my data.</label>
</div>
<button className="w-full bg-white text-black font-medium text-sm py-2.5 rounded-lg hover:bg-zinc-200 transition-colors mt-4" type="button">
                    Request Demo
                </button>
</form>
</div>
</section>

<footer className="border-t border-white/5 py-12 px-6 bg-black text-center md:text-left">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center text-zinc-400 font-bold text-xs">
                    BA
                </div>
<span className="text-xs text-zinc-500">© 2024 BioAutomate Inc.</span>
</div>
<div className="flex gap-6 text-xs text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
</footer>



    </>
  );
}
