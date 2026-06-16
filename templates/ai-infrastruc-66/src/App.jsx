import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      lucide.createIcons();

      // Starfield Animation
      const canvas = document.getElementById('skyCanvas');
      const ctx = canvas.getContext('2d');
      let width, height, stars = [];
      const numStars = 800; // Adjusted count
      const rotationSpeed = 0.0001;
      let angle = 0;

      function init() {
          width = window.innerWidth;
          height = window.innerHeight;
          canvas.width = width;
          canvas.height = height;
          createStars();
      }

      function createStars() {
          stars = [];
          const maxDist = Math.sqrt(width * width + height * height);
          for (let i = 0; i < numStars; i++) {
              stars.push({
                  x: (Math.random() - 0.5) * maxDist * 1.5,
                  y: (Math.random() - 0.5) * maxDist * 1.5,
                  z: Math.random() * 1.0 + 0.1,
                  alpha: Math.random() * 0.8,
                  twinkle: Math.random() * 0.02
              });
          }
      }

      window.addEventListener('resize', init);

      function draw() {
          // Dark background clear
          ctx.fillStyle = "#000000";
          ctx.fillRect(0, 0, width, height);

          ctx.save();
          ctx.translate(width / 2, height / 2);
          ctx.rotate(angle);
          ctx.fillStyle = "white";
          stars.forEach(star => {
              star.alpha += star.twinkle;
              if (star.alpha > 0.8 || star.alpha < 0.2) star.twinkle *= -1;
              ctx.globalAlpha = star.alpha;
              ctx.beginPath();
              ctx.arc(star.x, star.y, star.z, 0, Math.PI * 2);
              ctx.fill();
          });
          ctx.restore();
          angle += rotationSpeed;
          requestAnimationFrame(draw);
      }
      init();
      draw();

      // Mouse Aura
      const aura = document.getElementById("pointer-aura");
      let mX = window.innerWidth/2, mY = window.innerHeight/2;
      let aX = window.innerWidth/2, aY = window.innerHeight/2;

      document.addEventListener("mousemove", e => {
          mX = e.clientX;
          mY = e.clientY;
          if(aura.classList.contains("opacity-0")) aura.classList.remove("opacity-0");
      });

      function moveAura() {
          aX += (mX - aX) * 0.08;
          aY += (mY - aY) * 0.08;
          if(aura) {
              aura.style.transform = `translate(${aX}px, ${aY}px) translate(-50%, -50%)`;
          }
          requestAnimationFrame(moveAura);
      }
      moveAura();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas id="skyCanvas"></canvas>

<div className="fixed top-4 md:top-8 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
<nav className="flex items-center gap-2 p-1 pl-4 sm:p-2 sm:pl-6 bg-black/40 backdrop-blur-md border rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)] ring-1 border-white/10 ring-white/5 transition-all duration-300">

<div className="flex items-center gap-2 mr-4 md:mr-8 cursor-pointer hover:opacity-80 transition-opacity group">
<div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white shadow-[0_0_15px_-3px_rgba(99,102,241,0.4)]">
<i className="w-5 h-5" data-lucide="box"></i>
</div>
<span className="text-white font-geist font-semibold tracking-tight text-lg">Nexus</span>
</div>

<div className="hidden md:flex items-center gap-1">
<a className="transition-all hover:text-white hover:bg-white/5 text-sm font-medium text-slate-400 rounded-full py-2 px-4" href="#features">Features</a>
<a className="transition-all hover:text-white hover:bg-white/5 text-sm font-medium text-slate-400 rounded-full py-2 px-4" href="#pricing">Pricing</a>
<a className="transition-all hover:text-white hover:bg-white/5 text-sm font-medium text-slate-400 rounded-full py-2 px-4" href="#docs">Docs</a>
</div>
<div className="w-px h-6 mx-2 hidden sm:block bg-white/10"></div>

<div className="flex items-center gap-2 pl-2">
<a className="hidden sm:block text-sm font-medium text-slate-400 hover:text-white transition-colors mr-2" href="#">Sign in</a>
<button className="shiny-cta flex items-center gap-2 justify-center !px-3 !py-1.5 md:!px-5 md:!py-2.5 text-xs md:text-sm">
<span>Get Started</span>
<i className="w-4 h-4 text-indigo-200/80" data-lucide="chevron-right"></i>
</button>
</div>
</nav>
</div>

<main className="flex flex-col min-h-screen relative z-10 px-4 items-center justify-center w-full pt-20">
<div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-8 mt-auto mb-auto">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-2 hover:bg-indigo-500/20 transition-colors cursor-pointer backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Nexus v2.0 is live
            </div>
<h1 className="md:text-7xl sm:text-6xl text-4xl leading-[1.1] text-glow font-semibold text-white tracking-tight max-w-4xl font-geist">
                Intelligence, <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-indigo-400">
                    Integrated.
                </span>
</h1>
<p className="sm:text-xl leading-relaxed text-base text-slate-400 max-w-2xl font-inter">
                Deploy autonomous AI agents to orchestrate your business logic. 
                Scalable, secure, and ready for mission-critical production environments.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
<button className="group flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)] text-sm font-medium text-white tracking-widest font-geist rounded-full py-4 px-10 relative items-center justify-center border border-white/10 bg-black">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-transparent"></div>
<span className="relative z-10">Start Building</span>
<i className="relative z-10 ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" data-lucide="arrow-right"></i>
</button>
<button className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors px-6 py-4">
<i className="w-4 h-4" data-lucide="terminal"></i>
                    Documentation
                </button>
</div>
</div>

<div className="absolute bottom-10 left-0 right-0 mx-auto w-fit flex flex-col items-center gap-2 opacity-50 animate-bounce z-20">
<span className="text-xs uppercase tracking-widest text-slate-500 font-geist">Explore</span>
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-down"></i>
</div>
</main>

<section className="overflow-hidden w-full z-10 pt-24 pr-4 pb-32 pl-4 relative" id="features">
<div className="max-w-6xl mx-auto relative">

<div className="relative w-full mb-12 flex justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] pointer-events-none z-0">
<svg className="w-full h-full visible" fill="none" viewbox="0 0 1200 600">
<defs>
<lineargradient id="trace-grad" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#818cf8" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#818cf8" stop-opacity="1"></stop>
<stop offset="100%" stop-color="#818cf8" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path d="M 560 250 L 560 220 L 540 200" stroke="#334155" strokeWidth="2"></path>
<circle cx="540" cy="200" fill="#334155" r="4"></circle>
<path d="M 600 250 L 600 180" stroke="#334155" strokeWidth="2"></path>
<circle cx="600" cy="180" fill="#334155" r="4"></circle>
<path d="M 640 250 L 640 220 L 660 200" stroke="#334155" strokeWidth="2"></path>
<circle cx="660" cy="200" fill="#334155" r="4"></circle>


<path d="M 560 350 L 560 380 L 208 500 L 208 600" stroke="#1e293b" strokeWidth="2"></path>
<path className="circuit-beam" d="M 560 350 L 560 380 L 208 500 L 208 600" stroke="url(#trace-grad)" strokeWidth="2"></path>
<circle cx="208" cy="600" fill="#818cf8" r="3"></circle>

<path d="M 600 350 L 600 600" stroke="#1e293b" strokeWidth="2"></path>
<path className="circuit-beam" d="M 600 350 L 600 600" stroke="url(#trace-grad)" strokeWidth="2" style={{animationDelay: '0.5s'}}></path>
<circle cx="600" cy="600" fill="#818cf8" r="3"></circle>

<path d="M 640 350 L 640 380 L 992 500 L 992 600" stroke="#1e293b" strokeWidth="2"></path>
<path className="circuit-beam" d="M 640 350 L 640 380 L 992 500 L 992 600" stroke="url(#trace-grad)" strokeWidth="2" style={{animationDelay: '1s'}}></path>
<circle cx="992" cy="600" fill="#818cf8" r="3"></circle>
</svg>
</div>

<div className="relative z-10">
<div className="relative w-80 h-28 bg-[#050505] rounded-[4px] border border-slate-800/80 shadow-[0_0_50px_-10px_rgba(0,0,0,1)] flex items-center justify-center">

<div className="pin-row -top-[8px] w-full"><div className="chip-leg"></div><div className="chip-leg"></div><div className="chip-leg"></div><div className="chip-leg"></div><div className="chip-leg"></div><div className="chip-leg"></div><div className="chip-leg"></div><div className="chip-leg"></div><div className="chip-leg"></div><div className="chip-leg"></div></div>
<div className="pin-row -bottom-[8px] w-full"><div className="chip-leg"></div><div className="chip-leg"></div><div className="chip-leg"></div><div className="chip-leg"></div><div className="chip-leg"></div><div className="chip-leg"></div><div className="chip-leg"></div><div className="chip-leg"></div><div className="chip-leg"></div><div className="chip-leg"></div></div>
<div className="pin-col -left-[8px] h-full"><div className="chip-leg-h"></div><div className="chip-leg-h"></div><div className="chip-leg-h"></div><div className="chip-leg-h"></div></div>
<div className="pin-col -right-[8px] h-full"><div className="chip-leg-h"></div><div className="chip-leg-h"></div><div className="chip-leg-h"></div><div className="chip-leg-h"></div></div>

<div className="absolute inset-2 bg-black border border-white/5 flex items-center justify-center overflow-hidden rounded-[2px]">
<div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:8px_8px] text-center"></div>
<div className="relative flex flex-col items-center gap-1 z-10">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 animate-pulse bg-indigo-500 rounded-full"></div>
</div>
<span className="text-xl font-bold text-white tracking-tighter font-geist whitespace-nowrap">
                                    Nexus Core v2
                                </span>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 pt-8" id="cards-grid">

<div className="group relative rounded-2xl bg-[#0a0a0a] p-1 h-full">
<div className="card-beam"></div>
<div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-indigo-500/50 rounded-full blur-[2px] opacity-0 md:opacity-100"></div>
<div className="relative h-full rounded-xl overflow-hidden border border-white/5 transition-all duration-300 group-hover:-translate-y-1 bg-black">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
<div className="relative p-6 flex flex-col h-full">
<div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-950/40 border border-indigo-500/20 text-indigo-400 backdrop-blur-sm">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-semibold text-white font-geist">Real-time Streaming</h3>
<i className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" data-lucide="arrow-up-right"></i>
</div>
<p className="text-sm text-slate-400 leading-relaxed font-inter">
                                Low-latency responses streamed directly to the edge. Reduce time-to-first-token to under 50ms.
                            </p>
</div>
</div>
</div>

<div className="group relative rounded-2xl bg-[#0a0a0a] p-1 h-full">
<div className="card-beam" style={{animationDelay: '-1s'}}></div>
<div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-indigo-500/50 rounded-full blur-[2px] opacity-0 md:opacity-100"></div>
<div className="relative h-full rounded-xl overflow-hidden border border-white/5 transition-all duration-300 group-hover:-translate-y-1 bg-black">
<div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
<div className="relative p-6 flex flex-col h-full">
<div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-950/40 border border-purple-500/20 text-purple-400 backdrop-blur-sm">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-semibold text-white font-geist">Enterprise Security</h3>
<i className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors" data-lucide="arrow-up-right"></i>
</div>
<p className="text-sm text-slate-400 leading-relaxed font-inter">
                                SOC2 compliant infrastructure. End-to-end encryption for all data in transit and at rest.
                            </p>
</div>
</div>
</div>

<div className="group relative rounded-2xl bg-[#0a0a0a] p-1 h-full">
<div className="card-beam" style={{animationDelay: '-2s'}}></div>
<div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-indigo-500/50 rounded-full blur-[2px] opacity-0 md:opacity-100"></div>
<div className="relative h-full rounded-xl overflow-hidden border border-white/5 transition-all duration-300 group-hover:-translate-y-1 bg-black">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
<div className="relative p-6 flex flex-col h-full">
<div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 backdrop-blur-sm">
<i className="w-6 h-6" data-lucide="database"></i>
</div>
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-semibold text-white font-geist">Vector Database</h3>
<i className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" data-lucide="arrow-up-right"></i>
</div>
<p className="text-sm text-slate-400 leading-relaxed font-inter">
                                Built-in RAG pipeline. Just upload your documents and query instantly with semantic search.
                            </p>
</div>
</div>
</div>
</div>
<div className="flex justify-end w-full mt-6 relative z-10">
<a className="group inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-semibold tracking-wide uppercase font-geist shadow-[0_0_20px_rgba(99,102,241,0.3)]" href="#">
<span>View all features</span>
<i className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-24 px-4 relative z-10" id="pricing">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 space-y-4">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight font-geist">Simple Pricing</h2>
<p className="text-slate-400 text-lg">Start for free, scale as you grow.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative rounded-2xl bg-[#0a0a0a] p-px">
<div className="relative h-full rounded-2xl bg-[#050505] border border-white/5 p-8 flex flex-col hover:bg-white/[0.02] transition">
<h3 className="text-lg font-medium text-white mb-2 font-geist">Hobby</h3>
<div className="mb-6">
<span className="text-4xl font-bold text-white tracking-tight">$0</span>
<span className="text-slate-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-400">
<i className="w-4 h-4 text-slate-600" data-lucide="check"></i> 5,000 requests
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-400">
<i className="w-4 h-4 text-slate-600" data-lucide="check"></i> Community support
                            </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white font-medium text-sm hover:bg-white/5 transition">Get Started</button>
</div>
</div>

<div className="group relative rounded-2xl bg-[#0a0a0a] p-px">

<div className="card-beam"></div>
<div className="relative h-full rounded-2xl bg-[#0a0a0a] border border-white/5 p-8 flex flex-col relative overflow-hidden">
<div className="absolute inset-0 bg-indigo-500/5 pointer-events-none"></div>
<h3 className="text-lg font-medium text-indigo-400 mb-2 font-geist">Pro</h3>
<div className="mb-6">
<span className="text-4xl font-bold text-white tracking-tight">$49</span>
<span className="text-slate-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-200">
<i className="w-4 h-4 text-indigo-400" data-lucide="check"></i> 500,000 requests
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-200">
<i className="w-4 h-4 text-indigo-400" data-lucide="check"></i> Vector storage
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-200">
<i className="w-4 h-4 text-indigo-400" data-lucide="check"></i> Priority support
                            </li>
</ul>
<button className="shiny-cta w-full flex items-center justify-center">Start Trial</button>
</div>
</div>

<div className="group relative rounded-2xl bg-[#0a0a0a] p-px">
<div className="relative h-full rounded-2xl bg-[#050505] border border-white/5 p-8 flex flex-col hover:bg-white/[0.02] transition">
<h3 className="text-lg font-medium text-white mb-2 font-geist">Enterprise</h3>
<div className="mb-6">
<span className="text-4xl font-bold text-white tracking-tight">Custom</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-400">
<i className="w-4 h-4 text-slate-600" data-lucide="check"></i> Unlimited requests
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-400">
<i className="w-4 h-4 text-slate-600" data-lucide="check"></i> Dedicated hardware
                            </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white font-medium text-sm hover:bg-white/5 transition">Contact Sales</button>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black py-12 px-6 relative z-10 text-sm">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-white">
<i className="w-3 h-3" data-lucide="box"></i>
</div>
<span className="text-slate-400 font-medium">Nexus AI Inc.</span>
</div>
<div className="flex gap-8 text-slate-500">
<a className="hover:text-white transition" href="#">Privacy</a>
<a className="hover:text-white transition" href="#">Terms</a>
<a className="hover:text-white transition" href="#">Twitter</a>
<a className="hover:text-white transition" href="#">GitHub</a>
</div>
<div className="text-slate-600">
                © 2024 Nexus AI
            </div>
</div>
</footer>

<div className="fixed top-0 left-0 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none z-[1] opacity-0 transition-opacity duration-500" id="pointer-aura"></div>


    </>
  );
}
