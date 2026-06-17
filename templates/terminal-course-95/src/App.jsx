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
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
bg: '#09090B',
surface: '#18181B',
surfaceHighlight: '#27272A',
border: 'rgba(255,255,255,0.08)',
brand: '#22C55E',
},
animation: {
'blob': 'blob 20s infinite alternate',
'scroll': 'scroll 40s linear infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}



      // GSAP Registration
      gsap.registerPlugin(ScrollTrigger);

      // Hero Text Reveal
      gsap.to('.hero-line', {
          y: "0%",
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.15,
          delay: 0.2
      });

      // Fade Elements
      gsap.from('.hero-fade', {
          y: 20,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          delay: 0.8,
          ease: "power3.out"
      });

      // Terminal Entrance & Float
      gsap.from('#terminal-wrapper', {
          y: 100,
          opacity: 0,
          rotationX: 10,
          duration: 1.4,
          delay: 0.6,
          ease: "power3.out",
          onComplete: () => {
              gsap.to('#terminal-wrapper', {
                  y: -15,
                  duration: 4,
                  repeat: -1,
                  yoyo: true,
                  ease: "sine.inOut"
              });
          }
      });

      // Sticky Cards Logic
      const cards = document.querySelectorAll('.sticky-card');
      cards.forEach((card, index) => {
          gsap.to(card, {
              scrollTrigger: {
                  trigger: card,
                  start: "top 15%",
                  end: "top -50%",
                  scrub: true,
              },
              scale: 1 - (cards.length - index) * 0.05,
              opacity: 1 - (cards.length - index) * 0.2,
              y: -20,
              filter: "blur(2px)"
          });
      });

      // 3D Terminal Tilt Logic
      const terminal = document.getElementById('terminal-hero');
      const container = document.querySelector('.perspective-container');

      if(terminal && container) {
          container.addEventListener('mousemove', (e) => {
              const { innerWidth, innerHeight } = window;
              const x = (e.clientX - innerWidth / 2) / 40;
              const y = (e.clientY - innerHeight / 2) / 40;

              gsap.to(terminal, {
                  rotationY: x,
                  rotationX: -y,
                  duration: 0.5,
                  ease: "power2.out"
              });
          });

          container.addEventListener('mouseleave', () => {
              gsap.to(terminal, {
                  rotationY: 0,
                  rotationX: 0,
                  duration: 1,
                  ease: "power2.out"
              });
          });
      }

      // Typewriter Effect
      const typeContainer = document.getElementById('typewriter');
      const codeLines = [
          { text: "$ claude init --project taskflow", color: "text-white" },
          { text: "Analyzing directory structure...", color: "text-zinc-500" },
          { text: "✔ Config detected: tsconfig.json", color: "text-emerald-500" },
          { text: "✔ Package manager: Bun", color: "text-emerald-500" },
          { text: "", color: "" },
          { text: "$ claude plan 'Create API route'", color: "text-white" },
          { text: "Thinking...", color: "text-blue-400" },
          { text: "Drafting architecture for /api/v1/tasks...", color: "text-zinc-500" }
      ];

      let lineIndex = 0;
      let charIndex = 0;

      function type() {
          if (lineIndex < codeLines.length) {
              const line = codeLines[lineIndex];
              if (charIndex === 0) {
                  const div = document.createElement('div');
                  div.className = line.color + " mb-1.5";
                  typeContainer.appendChild(div);
              }
              const currentDiv = typeContainer.lastElementChild;
              if (charIndex < line.text.length) {
                  currentDiv.textContent += line.text.charAt(charIndex);
                  charIndex++;
                  setTimeout(type, Math.random() * 20 + 20);
              } else {
                  lineIndex++;
                  charIndex = 0;
                  setTimeout(type, 400);
              }
          } else {
              setTimeout(() => {
                  typeContainer.innerHTML = '';
                  lineIndex = 0;
                  type();
              }, 4000);
          }
      }
      setTimeout(type, 1500);
    
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

<div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] animate-blob mix-blend-screen"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-blob" style={{animationDelay: '4s'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#09090B]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 flex items-center justify-center text-emerald-500">
<span className="iconify" data-icon="lucide:terminal-square" data-strokeWidth="1.5" data-width="18"></span>
</div>
<span className="font-mono text-sm font-semibold tracking-tight text-white">
            ShipWithClaude
          </span>
</div>
<div className="flex items-center gap-6">
<a className="hidden md:block text-sm text-zinc-400 hover:text-white transition-colors" href="#">
            Manifesto
          </a>
<a className="hidden md:block text-sm text-zinc-400 hover:text-white transition-colors" href="#">
            Modules
          </a>
<button className="bg-white text-black hover:bg-zinc-200 border border-transparent font-medium text-xs px-4 py-2 rounded-full transition-all">
            Get Access
          </button>
</div>
</div>
</nav>

<section className="min-h-screen relative flex flex-col justify-center items-center pt-32 pb-20 px-6 overflow-hidden perspective-container">

<div className="text-center z-10 max-w-6xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest font-medium">
            v2.0 Architecture Live
          </span>
</div>
<h1 className="text-6xl sm:text-8xl md:text-9xl font-semibold tracking-tighter mb-10 leading-[0.9] flex flex-col items-center">
<span className="block overflow-hidden">
<span className="hero-line block translate-y-full">Build Faster.</span>
</span>
<span className="block overflow-hidden">
<span className="hero-line block translate-y-full text-gradient-brand">
              Ship Smarter.
            </span>
</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed hero-fade font-light">
          The terminal-first course for engineers who want to automate the
          mundane and focus on architecture using Claude Code.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 hero-fade">
<button className="group relative px-6 py-3 bg-white text-black font-medium text-sm rounded-lg hover:bg-zinc-200 transition-all flex items-center justify-center gap-2">
            Start Curriculum
            <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="px-6 py-3 bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white font-medium text-sm rounded-lg hover:bg-zinc-800 transition-all flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:play-circle" data-width="16"></span>
            Watch Preview
          </button>
</div>
</div>

<div className="w-full max-w-3xl mx-auto z-20 hero-fade perspective-container" id="terminal-wrapper">
<div className="terminal-3d relative bg-[#0C0C0E] border border-white/10 rounded-xl shadow-2xl overflow-hidden ring-1 ring-white/5 group" id="terminal-hero">

<div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>

<div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5 relative z-10">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#FF5F57] opacity-80"></div>
<div className="w-3 h-3 rounded-full bg-[#FFBD2E] opacity-80"></div>
<div className="w-3 h-3 rounded-full bg-[#28CA41] opacity-80"></div>
</div>
<div className="font-mono text-[10px] text-zinc-500 flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:folder" data-width="10"></span>
              ~/taskflow
            </div>
<div className="w-10"></div>
</div>

<div className="p-6 h-[320px] font-mono text-sm leading-relaxed overflow-hidden relative bg-[#0C0C0E]/90">
<div className="whitespace-pre-wrap text-zinc-300" id="typewriter"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none" style={{backgroundSize: '100% 4px'}}></div>
</div>
</div>
</div>
<div className="mt-20 flex flex-col items-center gap-5 hero-fade">
<span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
          Scroll to Deploy
        </span>
<div className="w-px h-16 bg-gradient-to-b from-zinc-800 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#09090B] to-transparent pointer-events-none -z-10"></div>
</div>
</section>

<div className="py-12 border-y border-white/5 bg-black/20 overflow-hidden relative">
<div className="flex animate-scroll whitespace-nowrap">
<div className="flex gap-16 items-center px-8">
<span className="text-xl font-mono text-zinc-700 uppercase tracking-widest font-semibold flex items-center gap-4">
<span className="iconify" data-icon="lucide:cpu" data-width="24"></span>
            Automation
          </span>
<span className="text-xl font-mono text-zinc-700 uppercase tracking-widest font-semibold flex items-center gap-4">
<span className="iconify" data-icon="lucide:layers" data-width="24"></span>
            Architecture
          </span>
<span className="text-xl font-mono text-zinc-700 uppercase tracking-widest font-semibold flex items-center gap-4">
<span className="iconify" data-icon="lucide:bot" data-width="24"></span>
            Agents
          </span>
<span className="text-xl font-mono text-zinc-700 uppercase tracking-widest font-semibold flex items-center gap-4">
<span className="iconify" data-icon="lucide:terminal" data-width="24"></span>
            Terminal
          </span>
<span className="text-xl font-mono text-zinc-700 uppercase tracking-widest font-semibold flex items-center gap-4">
<span className="iconify" data-icon="lucide:workflow" data-width="24"></span>
            Workflow
          </span>

<span className="text-xl font-mono text-zinc-700 uppercase tracking-widest font-semibold flex items-center gap-4">
<span className="iconify" data-icon="lucide:cpu" data-width="24"></span>
            Automation
          </span>
<span className="text-xl font-mono text-zinc-700 uppercase tracking-widest font-semibold flex items-center gap-4">
<span className="iconify" data-icon="lucide:layers" data-width="24"></span>
            Architecture
          </span>
<span className="text-xl font-mono text-zinc-700 uppercase tracking-widest font-semibold flex items-center gap-4">
<span className="iconify" data-icon="lucide:bot" data-width="24"></span>
            Agents
          </span>
<span className="text-xl font-mono text-zinc-700 uppercase tracking-widest font-semibold flex items-center gap-4">
<span className="iconify" data-icon="lucide:terminal" data-width="24"></span>
            Terminal
          </span>
<span className="text-xl font-mono text-zinc-700 uppercase tracking-widest font-semibold flex items-center gap-4">
<span className="iconify" data-icon="lucide:workflow" data-width="24"></span>
            Workflow
          </span>
</div>
</div>
</div>

<section className="py-32 px-6 max-w-7xl mx-auto">
<div className="mb-24 md:px-12 text-center md:text-left">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
          The Stack
        </h2>
<p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
          Everything needed to master the modern command line interface with AI
          assistance.
        </p>
</div>
<div className="card-stack-wrapper md:px-12">

<div className="sticky-card glass-card rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-12 overflow-hidden group">
<div className="flex-1 z-10">
<div className="inline-flex items-center gap-2 mb-6">
<span className="w-6 h-6 rounded flex items-center justify-center bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-xs font-mono">
                01
              </span>
<span className="font-mono text-xs text-emerald-500 uppercase tracking-wider">
                Setup &amp; Config
              </span>
</div>
<h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">
              Environment Orchestration
            </h3>
<p className="text-zinc-400 leading-relaxed mb-8">
              Stop wasting time on config. Learn to script your environment
              setup so you can spin up new projects in seconds, not hours.
            </p>
<ul className="space-y-3 font-mono text-xs text-zinc-500">
<li className="flex items-center gap-3">
<span className="iconify text-emerald-500" data-icon="lucide:check-circle" data-width="14"></span>
                Automated Dotfiles
              </li>
<li className="flex items-center gap-3">
<span className="iconify text-emerald-500" data-icon="lucide:check-circle" data-width="14"></span>
                Docker &amp; Compose Patterns
              </li>
</ul>
</div>
<div className="flex-1 relative min-h-[200px] flex items-center justify-center bg-zinc-900/50 rounded-xl border border-white/5">
<span className="iconify text-zinc-800 group-hover:text-emerald-500/20 transition-colors duration-500" data-icon="lucide:cpu" data-strokeWidth="1" data-width="120"></span>

<div className="absolute inset-x-6 top-6 bottom-6 bg-[#0C0C0E] rounded-lg border border-white/5 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
<div className="flex gap-1.5 mb-3">
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
</div>
<div className="space-y-2 font-mono text-[10px] text-zinc-500">
<p className="text-emerald-500">$ claude init --config</p>
<p>Loading project defaults...</p>
<p>
                  Detected:
                  <span className="text-zinc-300">TypeScript</span>
</p>
<p>
                  Detected:
                  <span className="text-zinc-300">Tailwind</span>
</p>
</div>
</div>
</div>
</div>

<div className="sticky-card glass-card rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-12 overflow-hidden group" style={{top: '18vh'}}>
<div className="flex-1 z-10">
<div className="inline-flex items-center gap-2 mb-6">
<span className="w-6 h-6 rounded flex items-center justify-center bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-mono">
                02
              </span>
<span className="font-mono text-xs text-purple-400 uppercase tracking-wider">
                Agents
              </span>
</div>
<h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">
              Multi-Agent Systems
            </h3>
<p className="text-zinc-400 leading-relaxed mb-8">
              Go beyond single prompts. Build systems where Claude plans,
              executes, and verifies its own code in a loop.
            </p>
</div>
<div className="flex-1 relative min-h-[200px] flex items-center justify-center bg-zinc-900/50 rounded-xl border border-white/5">
<span className="iconify text-zinc-800 group-hover:text-purple-500/20 transition-colors duration-500" data-icon="lucide:bot" data-strokeWidth="1" data-width="120"></span>
<div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
</div>

<div className="sticky-card glass-card rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-12 overflow-hidden group" style={{top: '21vh'}}>
<div className="flex-1 z-10">
<div className="inline-flex items-center gap-2 mb-6">
<span className="w-6 h-6 rounded flex items-center justify-center bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-mono">
                03
              </span>
<span className="font-mono text-xs text-blue-400 uppercase tracking-wider">
                Production
              </span>
</div>
<h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">
              CI/CD &amp; Deployment
            </h3>
<p className="text-zinc-400 leading-relaxed mb-8">
              The final mile. Automate your testing and deployment pipelines.
              Ship to production with a single terminal command.
            </p>
</div>
<div className="flex-1 relative min-h-[200px] flex items-center justify-center bg-zinc-900/50 rounded-xl border border-white/5">
<span className="iconify text-zinc-800 group-hover:text-blue-500/20 transition-colors duration-500" data-icon="lucide:rocket" data-strokeWidth="1" data-width="120"></span>
<div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
</div>
</div>
</section>

<section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden py-24 border-t border-white/5 bg-zinc-900/20">
<div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>
<div className="text-center z-10 px-6 max-w-2xl mx-auto">
<h2 className="text-4xl md:text-6xl font-semibold mb-8 tracking-tighter text-white">
          Start Shipping
        </h2>
<div className="flex flex-col items-center gap-8">
<div className="glass-card p-1 rounded-full inline-flex">
<div className="bg-zinc-900/80 rounded-full px-6 py-2 flex items-center gap-3 border border-white/5">
<span className="text-2xl font-semibold text-white">$99</span>
<span className="text-xs font-mono text-zinc-500 uppercase tracking-wider border-l border-white/10 pl-3">
                One-time payment
              </span>
</div>
</div>
<button className="group relative px-8 py-4 bg-white text-black font-semibold text-lg rounded-xl overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
<span className="relative z-10 flex items-center gap-2">
              Get Instant Access
              <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="20"></span>
</span>
</button>
<div className="flex items-center gap-6 text-xs text-zinc-500 font-mono">
<span className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:shield-check" data-width="14"></span>
              Secure Payment
            </span>
<span className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:refresh-cw" data-width="14"></span>
              Lifetime Updates
            </span>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#09090B] pt-24 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="md:col-span-1">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 flex items-center justify-center text-emerald-500">
<span className="iconify" data-icon="lucide:terminal-square" data-strokeWidth="1.5" data-width="18"></span>
</div>
<span className="font-mono text-sm font-semibold tracking-tight text-white">
                ShipWithClaude
              </span>
</div>
<p className="text-zinc-500 text-sm leading-relaxed mb-6">
              The terminal-first platform for engineers who want to automate
              architecture and focus on shipping.
            </p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="18"></span>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:github" data-width="18"></span>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:disc" data-width="18"></span>
</a>
</div>
</div>
<div>
<h4 className="font-semibold text-white mb-6 tracking-tight">
              Product
            </h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li>
<a className="hover:text-emerald-400 transition-colors" href="#">
                  Curriculum
                </a>
</li>
<li>
<a className="hover:text-emerald-400 transition-colors" href="#">
                  Manifesto
                </a>
</li>
<li>
<a className="hover:text-emerald-400 transition-colors" href="#">
                  Workshops
                </a>
</li>
<li>
<a className="hover:text-emerald-400 transition-colors" href="#">
                  Changelog
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white mb-6 tracking-tight">
              Resources
            </h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li>
<a className="hover:text-emerald-400 transition-colors" href="#">
                  Documentation
                </a>
</li>
<li>
<a className="hover:text-emerald-400 transition-colors" href="#">
                  Prompt Library
                </a>
</li>
<li>
<a className="hover:text-emerald-400 transition-colors" href="#">
                  Community
                </a>
</li>
<li>
<a className="hover:text-emerald-400 transition-colors" href="#">
                  Help Center
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white mb-6 tracking-tight">
              Newsletter
            </h4>
<p className="text-xs text-zinc-500 mb-4">
              Get the latest terminal tricks.
            </p>
<form className="flex gap-2">
<input className="bg-zinc-900/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500/50 w-full placeholder:text-zinc-700 transition-colors" placeholder="email@domain.com" type="email"/>
<button className="bg-white text-black rounded-lg px-3 py-2 hover:bg-zinc-200 transition-colors" type="button">
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</form>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-600 font-mono">
            © 2025 Ship with Claude. All rights reserved.
          </p>
<div className="flex gap-6 text-xs text-zinc-600 font-mono">
<a className="hover:text-zinc-400 transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-zinc-400 transition-colors" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>


    </>
  );
}
