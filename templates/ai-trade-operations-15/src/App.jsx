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
colors: {
page: '#050505',
surface: '#0F0F11',
surfaceHover: '#161618',
border: '#1F1F22',
borderHighlight: '#333338',
textMain: '#EDEDEF',
textMuted: '#8A8A93',
brand: '#0088FF', // Azure Blue
brandGlow: '#3399FF',
},
fontFamily: {
sans: ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
normal: '-0.01em',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
'marquee': 'marquee 25s linear infinite',
'dash': 'dash 20s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
pulseGlow: {
'0%, 100%': { opacity: '0.4' },
'50%': { opacity: '0.8' },
},
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
dash: {
to: { strokeDashoffset: '-1000' }
}
}
}
}
}



        // 1. Scroll Reveal Logic
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        });

        // 2. Interactive Particle "Shader" Background
        const canvas = document.getElementById('bg-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        let mouse = { x: -1000, y: -1000 };

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initParticles();
        }

        function initParticles() {
            particles = [];
            const spacing = 35; // Grid spacing
            for (let x = 0; x < width; x += spacing) {
                for (let y = 0; y < height; y += spacing) {
                    particles.push({
                        x: x,
                        y: y,
                        originX: x,
                        originY: y
                    });
                }
            }
        }

        // Mouse Move Listener
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        function animate() {
            ctx.clearRect(0, 0, width, height);
            
            particles.forEach(p => {
                // Calculate distance to mouse
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                // Interaction Radius
                const radius = 200;
                
                let alpha = 0.05; // Base opacity
                let size = 1;     // Base size
                let color = '100, 100, 100'; // Base grey

                if (dist < radius) {
                    const force = (radius - dist) / radius;
                    // Slightly move particles away from mouse
                    // p.x = p.originX - (dx * force * 0.2); 
                    // p.y = p.originY - (dy * force * 0.2);
                    
                    // Increase brightness and size near mouse
                    alpha = 0.05 + (force * 0.5); 
                    size = 1 + (force * 1.5);
                    
                    // Shift color to Brand Blue #0088FF (0, 136, 255)
                    color = `0, 136, 255`; 
                } else {
                    // Return to origin
                    // p.x += (p.originX - p.x) * 0.1;
                    // p.y += (p.originY - p.y) * 0.1;
                }

                ctx.fillStyle = `rgba(${color}, ${alpha})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', resize);
        resize();
        animate();
    
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
      

<canvas className="fixed inset-0 w-full h-full pointer-events-none -z-20 opacity-40" id="bg-canvas"></canvas>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand/10 blur-[120px] rounded-full pointer-events-none -z-10 opacity-30"></div>

<nav className="fixed top-0 w-full z-50 glass h-14 transition-all duration-500">
<div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-gradient-to-tr from-brand to-brandGlow rounded-sm flex items-center justify-center shadow-[0_0_10px_rgba(0,136,255,0.5)]">
<div className="w-2 h-2 bg-black rounded-[1px]"></div>
</div>
<span className="text-sm font-medium tracking-tight text-textMain">Compound</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs text-textMuted hover:text-textMain transition-colors" href="#">Features</a>
<a className="text-xs text-textMuted hover:text-textMain transition-colors" href="#">Methodology</a>
<a className="text-xs text-textMuted hover:text-textMain transition-colors" href="#">Customers</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-textMain hover:text-white" href="#">Log in</a>
<a className="text-xs font-medium bg-white text-black px-3 py-1.5 rounded hover:bg-gray-200 transition-colors shadow-lg shadow-white/5" href="#">
                    Start Audit
                </a>
</div>
</div>
</nav>

<main className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-center text-center relative">

<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/20 bg-brand/5 backdrop-blur-sm mb-8 animate-float shadow-[0_0_15px_rgba(0,136,255,0.1)]">
<span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></span>
<span className="text-[11px] font-medium text-brand tracking-wide uppercase">AI Infrastructure v2.0</span>
</div>

<h1 className="reveal delay-100 text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 mb-6 max-w-4xl mx-auto relative z-10">
            Trade business on <br/>
<span className="glow-text text-white">autopilot.</span>
</h1>
<p className="reveal delay-200 text-lg md:text-xl text-textMuted font-normal max-w-2xl mx-auto mb-10 leading-relaxed tracking-tight">
            Replace manual admin with intelligent agents. We build custom infrastructure for high-volume trade companies.
        </p>

<div className="reveal delay-300 flex flex-col sm:flex-row items-center gap-3 w-full max-w-md mx-auto mb-20">
<div className="relative w-full group">
<div className="absolute inset-0 bg-gradient-to-r from-brand to-cyan-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
<input className="relative w-full bg-surface/80 backdrop-blur-sm border border-border text-textMain px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all placeholder:text-textMuted/50" placeholder="work@email.com" type="email"/>
</div>
<button className="w-full sm:w-auto px-6 py-3 rounded-lg bg-textMain text-black text-sm font-semibold hover:bg-white transition-colors whitespace-nowrap shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                Get Access
            </button>
</div>

<div className="reveal delay-200 relative w-full max-w-4xl mx-auto perspective-[2000px]">

<div className="absolute -inset-1 bg-gradient-to-r from-brand/40 via-blue-600/40 to-brand/40 rounded-xl opacity-20 blur-xl"></div>
<div className="relative rounded-xl bg-[#0A0A0B]/90 backdrop-blur-xl border border-border overflow-hidden shadow-2xl">

<div className="h-10 border-b border-border flex items-center px-4 gap-2 bg-surface/50">
<div className="w-2.5 h-2.5 rounded-full bg-[#2B2B2F]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#2B2B2F]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#2B2B2F]"></div>
</div>

<div className="p-8 grid grid-cols-12 gap-6 h-[400px]">

<div className="col-span-3 border-r border-border pr-6 space-y-4 hidden md:block">
<div className="h-2 w-16 bg-border rounded mb-6"></div>
<div className="space-y-3">
<div className="h-8 w-full bg-brand/10 rounded border border-brand/20"></div>
<div className="h-8 w-full bg-transparent rounded hover:bg-surfaceHover transition-colors"></div>
<div className="h-8 w-full bg-transparent rounded hover:bg-surfaceHover transition-colors"></div>
</div>
</div>

<div className="col-span-12 md:col-span-9 flex flex-col">
<div className="flex justify-between items-center mb-8">
<div className="h-8 w-32 bg-surface rounded border border-border"></div>
<div className="h-8 w-8 bg-brand rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,136,255,0.4)]">
<iconify-icon className="text-white text-xs" icon="lucide:zap"></iconify-icon>
</div>
</div>

<div className="flex-1 relative">

<svg className="absolute inset-0 w-full h-full pointer-events-none">
<defs>
<lineargradient id="lineGrad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#333', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#0088FF', stopOpacity: '0.5'}}></stop>
</lineargradient>
</defs>
<path className="animate-[dash_30s_linear_infinite]" d="M100,60 C180,60 180,150 260,150" fill="none" stroke="url(#lineGrad)" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<path d="M100,60 C180,60 180,220 260,220" fill="none" stroke="#333" strokeWidth="1.5"></path>
</svg>

<div className="absolute top-10 left-0 p-3 rounded bg-surface border border-borderHighlight shadow-lg flex items-center gap-3 w-40 z-10">
<div className="w-6 h-6 rounded bg-surfaceHover text-textMuted flex items-center justify-center"><iconify-icon icon="lucide:mail"></iconify-icon></div>
<div className="h-2 w-16 bg-border rounded"></div>
</div>
<div className="absolute top-32 left-1/2 -translate-x-1/2 p-3 rounded bg-surface/90 backdrop-blur border border-brand/40 shadow-[0_0_30px_rgba(0,136,255,0.15)] flex items-center gap-3 w-48 z-20">
<div className="w-6 h-6 rounded bg-brand/20 text-brand flex items-center justify-center animate-pulse"><iconify-icon icon="lucide:cpu"></iconify-icon></div>
<div className="text-[10px] text-textMain font-medium">Analyzing Intent...</div>
</div>
<div className="absolute bottom-10 right-0 p-3 rounded bg-surface border border-borderHighlight shadow-lg flex items-center gap-3 w-40 z-10">
<div className="w-6 h-6 rounded bg-brand/10 text-brand flex items-center justify-center"><iconify-icon icon="lucide:calendar"></iconify-icon></div>
<div className="h-2 w-16 bg-border rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="reveal w-full border-y border-border bg-black/30 backdrop-blur-sm overflow-hidden py-8">
<div className="relative w-full max-w-6xl mx-auto px-6">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-page to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-page to-transparent z-10"></div>
<div className="flex items-center gap-16 animate-marquee whitespace-nowrap opacity-50 grayscale hover:grayscale-0 transition-all duration-500 hover:opacity-100">
<span className="text-xl font-bold tracking-tighter">ACME Electric</span>
<span className="text-xl font-bold tracking-tighter">BuildCorp</span>
<span className="text-xl font-bold tracking-tighter">Spark &amp; Wire</span>
<span className="text-xl font-bold tracking-tighter">Flow Plumbers</span>
<span className="text-xl font-bold tracking-tighter">Structure.io</span>
<span className="text-xl font-bold tracking-tighter">ACME Electric</span>
<span className="text-xl font-bold tracking-tighter">BuildCorp</span>
<span className="text-xl font-bold tracking-tighter">Spark &amp; Wire</span>
<span className="text-xl font-bold tracking-tighter">Flow Plumbers</span>
<span className="text-xl font-bold tracking-tighter">Structure.io</span>
</div>
</div>
</div>

<section className="py-32 px-6 max-w-6xl mx-auto">
<h2 className="reveal text-3xl md:text-5xl font-medium tracking-tighter text-white mb-4 text-center">The Compound Stack</h2>
<p className="reveal delay-100 text-textMuted text-center max-w-xl mx-auto mb-16">Modular intelligence layers that sit on top of your existing ServiceM8, Fergus or Simpro workflow.</p>
<div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[300px]">

<div className="reveal md:col-span-4 relative group rounded-2xl bg-surface border border-border overflow-hidden hover:border-brand/30 transition-all duration-500">
<div className="absolute inset-0 bg-[radial-gradient(800px_at_top_right,_var(--tw-gradient-stops))] from-brand/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-8 h-full flex flex-col justify-between relative z-10">
<div>
<div className="w-10 h-10 rounded-lg bg-border/50 flex items-center justify-center mb-4 text-white border border-white/5 group-hover:border-brand/30 group-hover:bg-brand/10 transition-all">
<iconify-icon icon="lucide:message-circle" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-textMain mb-2">Autonomous Reception</h3>
<p className="text-sm text-textMuted leading-relaxed max-w-md">Our AI voice and text agents handle inbound leads 24/7. They qualify intent, check your calendar, and book appointments directly into your job management software.</p>
</div>

<div className="w-full h-24 mt-4 flex items-center gap-3">
<div className="flex-1 bg-surfaceHover rounded-lg border border-border/50 p-3 flex flex-col gap-2 group-hover:border-brand/20 transition-colors">
<div className="w-8 h-8 rounded-full bg-brand/20 flex items-center justify-center text-brand text-[10px]"><iconify-icon icon="lucide:mic"></iconify-icon></div>
<div className="h-1.5 w-1/2 bg-border rounded-full"></div>
</div>
<div className="w-8 h-px bg-borderHighlight"></div>
<div className="flex-1 bg-surfaceHover rounded-lg border border-border/50 p-3 flex flex-col gap-2 opacity-50">
<div className="w-8 h-8 rounded-full bg-white/5"></div>
<div className="h-1.5 w-1/2 bg-border rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="reveal delay-100 md:col-span-2 md:row-span-2 relative group rounded-2xl bg-surface border border-border overflow-hidden hover:border-brand/30 transition-all duration-500">
<div className="p-8 h-full flex flex-col relative z-10">
<div className="w-10 h-10 rounded-lg bg-border/50 flex items-center justify-center mb-4 text-white border border-white/5 group-hover:border-brand/30 group-hover:bg-brand/10 transition-all">
<iconify-icon icon="lucide:receipt" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-textMain mb-2">Instant Quoting</h3>
<p className="text-sm text-textMuted leading-relaxed mb-8">Technicians dictate notes; Compound generates a branded PDF quote sent to the client.</p>

<div className="flex-1 bg-page rounded-xl border border-border p-4 relative overflow-hidden group-hover:border-brand/20 transition-colors">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand to-transparent animate-loading"></div>
<div className="space-y-3 opacity-50">
<div className="h-2 w-1/3 bg-border rounded"></div>
<div className="h-2 w-full bg-border rounded"></div>
<div className="h-2 w-full bg-border rounded"></div>
<div className="h-2 w-2/3 bg-border rounded"></div>
</div>
<div className="mt-6 p-3 bg-brand/5 rounded border border-brand/20 backdrop-blur-sm">
<div className="flex justify-between items-center">
<span className="text-[10px] text-brand">Total</span>
<span className="text-xs font-bold text-white">$4,250.00</span>
</div>
</div>
</div>
</div>
</div>

<div className="reveal md:col-span-2 relative group rounded-2xl bg-surface border border-border overflow-hidden hover:border-brand/30 transition-all duration-500">
<div className="p-8 h-full flex flex-col justify-between relative z-10">
<div className="w-10 h-10 rounded-lg bg-border/50 flex items-center justify-center text-white border border-white/5 group-hover:border-brand/30 group-hover:bg-brand/10 transition-all">
<iconify-icon icon="lucide:webhook" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-textMain mb-1">CRM Sync</h3>
<p className="text-xs text-textMuted">Two-way sync with ServiceM8, Fergus, Simpro.</p>
</div>
</div>
</div>

<div className="reveal delay-100 md:col-span-2 relative group rounded-2xl bg-surface border border-border overflow-hidden hover:border-brand/30 transition-all duration-500">
<div className="p-8 h-full flex flex-col justify-between relative z-10">
<div className="w-10 h-10 rounded-lg bg-border/50 flex items-center justify-center text-white border border-white/5 group-hover:border-brand/30 group-hover:bg-brand/10 transition-all">
<iconify-icon icon="lucide:bar-chart-2" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-textMain mb-1">Profit Analysis</h3>
<p className="text-xs text-textMuted">Real-time job profitability tracking.</p>
</div>
</div>
</div>
</div>
</section>

<section className="reveal border-y border-border bg-surface/30 backdrop-blur-sm">
<div className="max-w-6xl mx-auto px-6 py-20">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-border">
<div className="px-4">
<div className="text-5xl font-semibold tracking-tighter text-white mb-2">24/7</div>
<div className="text-sm font-medium text-textMuted uppercase tracking-widest">Uptime &amp; Response</div>
</div>
<div className="px-4 pt-12 md:pt-0">
<div className="text-5xl font-semibold tracking-tighter text-white mb-2">$1.2M</div>
<div className="text-sm font-medium text-textMuted uppercase tracking-widest">Revenue Automated</div>
</div>
<div className="px-4 pt-12 md:pt-0">
<div className="text-5xl font-semibold tracking-tighter text-white mb-2">0s</div>
<div className="text-sm font-medium text-textMuted uppercase tracking-widest">Wait Time</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-2xl mx-auto relative z-10">
<div className="reveal text-center mb-12">
<h2 className="text-3xl font-medium tracking-tighter text-white mb-3">Projected Savings</h2>
<p className="text-textMuted">Input your team size to estimate annual recovery.</p>
</div>
<div className="reveal delay-100 bg-[#0A0A0B] border border-border rounded-2xl p-8 shadow-2xl relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-[80px] rounded-full pointer-events-none"></div>
<div className="space-y-8 relative z-10">
<div>
<div className="flex justify-between text-sm mb-4">
<span className="text-textMuted">Office Staff</span>
<span className="text-white font-mono">3 People</span>
</div>
<input className="accent-brand" max="10" min="1" type="range" value="3"/>
</div>
<div>
<div className="flex justify-between text-sm mb-4">
<span className="text-textMuted">Admin Hours / Week (Per Person)</span>
<span className="text-white font-mono">15 Hours</span>
</div>
<input className="accent-brand" max="40" min="5" type="range" value="15"/>
</div>
<div className="pt-8 border-t border-border mt-8">
<div className="flex items-end justify-between">
<span className="text-sm text-textMuted">Annual Value Recovered</span>
<div className="text-right">
<span className="text-4xl font-semibold text-brand tracking-tighter">$112,500</span>
<div className="text-[10px] text-textMuted mt-1">Based on $50/hr avg cost</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-border bg-black pt-16 pb-8 px-6 relative z-10">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-6">
<div className="w-4 h-4 bg-white rounded-[1px]"></div>
<span className="text-sm font-semibold text-white">Compound</span>
</div>
<p className="text-xs text-textMuted leading-relaxed">
                    Building the operating system for the next generation of trade businesses.
                </p>
</div>
<div className="flex gap-12">
<div className="space-y-4">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider">Product</h4>
<ul className="space-y-2 text-xs text-textMuted">
<li><a className="hover:text-white transition-colors" href="#">Agents</a></li>
<li><a className="hover:text-white transition-colors" href="#">Workflows</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider">Company</h4>
<ul className="space-y-2 text-xs text-textMuted">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>
<div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-border flex justify-between items-center">
<p className="text-[10px] text-textMuted">© 2024 Compound Inc.</p>
<div className="flex gap-4">
<a className="text-[10px] text-textMuted hover:text-white" href="#">Privacy</a>
<a className="text-[10px] text-textMuted hover:text-white" href="#">Terms</a>
</div>
</div>
</footer>



    </>
  );
}
