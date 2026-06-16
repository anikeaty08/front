import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener('DOMContentLoaded', () => {
          // Scroll Reveal Observer
          const observerOptions = {
              root: null,
              rootMargin: '0px',
              threshold: 0.1
          };

          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('active');
                  }
              });
          }, observerOptions);

          document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

          // Smooth Scroll for Anchors
          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
              anchor.addEventListener('click', function (e) {
                  e.preventDefault();
                  document.querySelector(this.getAttribute('href')).scrollIntoView({
                      behavior: 'smooth'
                  });
              });
          });

          // Canvas Neural Network Animation
          const canvas = document.getElementById('networkCanvas');
          if(canvas) {
            const ctx = canvas.getContext('2d');
            let width, height;
            let particles = [];
            
            // Resize Canvas
            const resize = () => {
              width = canvas.parentElement.offsetWidth;
              height = canvas.parentElement.offsetHeight;
              canvas.width = width;
              canvas.height = height;
              initParticles();
            }
            
            // Particle Class
            class Particle {
              constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 1.5 + 0.5;
              }
              
              update() {
                this.x += this.vx;
                this.y += this.vy;
                
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
              }
              
              draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = '#00FF41';
                ctx.fill();
              }
            }
            
            function initParticles() {
              particles = [];
              const particleCount = Math.floor((width * height) / 10000); // Responsive count
              for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
              }
            }
            
            function animate() {
              ctx.clearRect(0, 0, width, height);
              
              particles.forEach((p, index) => {
                p.update();
                p.draw();
                
                // Draw Connections
                for (let j = index + 1; j < particles.length; j++) {
                  const p2 = particles[j];
                  const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                  
                  if (dist < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(0, 255, 65, ${1 - dist / 100})`;
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
            resize();
            animate();
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
<div className="max-w-[1600px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">

<svg className="stone-glow" fill="none" height="28" viewbox="0 0 100 100" width="28" xmlns="http://www.w3.org/2000/svg">
<path className="stone-shard-1" d="M42 16 C46 12 54 12 58 16 C62 19 58 23 50 24 C42 23 38 19 42 16 Z" fill="#e5e5e5"></path>
<path className="stone-shard-2" d="M26 36 C35 30 65 30 74 36 C78 40 75 46 50 48 C25 46 22 40 26 36 Z" fill="#d4d4d4"></path>
<path className="stone-shard-3" d="M16 58 C35 68 65 68 84 58 L88 64 C75 78 25 78 12 64 L16 58 Z" fill="#a3a3a3"></path>
<path className="stone-shard-4" d="M20 82 C35 87 65 87 80 82 L50 98 L20 82 Z" fill="#737373"></path>
</svg>
<span className="font-logo font-semibold tracking-tight text-lg text-white group-hover:text-[#00FF41] transition-colors">
            SEERSTONE
          </span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs tracking-widest text-stone-400">
<a className="hover:text-[#00FF41] transition-colors" href="#core">
            [ CORE ]
          </a>
<a className="hover:text-[#00FF41] transition-colors" href="#logistics">
            [ INFRASTRUCTURE ]
          </a>
<a className="hover:text-[#00FF41] transition-colors" href="#vision">
            [ TRAJECTORY ]
          </a>
<a className="hover:text-[#00FF41] transition-colors" href="#careers">
            [ OPERATE ]
          </a>
</div>
<div className="flex items-center gap-4">
<span className="hidden md:inline-block text-[10px] text-[#00FF41] border border-[#00FF41]/30 px-2 py-0.5 rounded bg-[#00FF41]/5">
            v.4.0.3 STABLE
          </span>
<button className="md:hidden text-white">
<iconify-icon className="text-xl" icon="lucide:menu"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="relative bg-black">

<div className="fixed inset-0 bg-grid pointer-events-none z-0 opacity-20"></div>

<section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden border-b border-white/10">

<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-30 grayscale contrast-125 brightness-50" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.8)_100%)]"></div>

<div className="absolute top-0 left-0 w-full h-1 bg-[#00FF41]/20 shadow-[0_0_20px_#00FF41] animate-[scan_4s_linear_infinite]" style={{animationName: 'scan', animationDuration: '8s', animationIterationCount: 'infinite'}}></div>
</div>
<style>
          @keyframes scan { 0% { top: -10%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 110%; opacity: 0; } }
        </style>
<div className="relative z-10 w-full max-w-[1600px] px-6 md:px-12 pt-20">
<div className="flex flex-col items-start">
<div className="reveal mb-4 flex items-center gap-3">
<span className="w-2 h-2 bg-[#00FF41] rounded-full animate-ping"></span>
<span className="text-xs text-[#00FF41] tracking-[0.2em] font-semibold">
                SYSTEM ONLINE
              </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-semibold text-white tracking-tighter leading-none mb-6 reveal delay-100 uppercase mix-blend-difference">
              The Architecture
              
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-500 to-white">
                Of Scale.
              </span>
</h1>
<p className="max-w-xl text-stone-400 text-sm md:text-base leading-relaxed mb-12 border-l-2 border-[#00FF41] pl-6 reveal delay-200">
              SeerStone is the operating system for next-generation commerce. We
              merge proprietary artificial intelligence with sovereign logistics
              infrastructure to dominate global markets.
            </p>
<div className="w-full border-t border-white/10 pt-6 flex flex-wrap gap-8 md:gap-16 text-[10px] md:text-xs tracking-widest text-stone-500 uppercase font-semibold reveal delay-300">
<div className="flex flex-col gap-1">
<span>Velocity</span>
<span className="text-white">Optimal</span>
</div>
<div className="flex flex-col gap-1">
<span>Global Nodes</span>
<span className="text-white">CN / KR / US / AE / CA</span>
</div>
<div className="flex flex-col gap-1">
<span>Latency</span>
<span className="text-[#00FF41]">12ms</span>
</div>
<div className="flex flex-col gap-1 ml-auto text-right">
<span>Coordinates</span>
<span className="text-white font-mono">22.90 N, 113.88 E</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-2 border-b border-white/10 bg-[#050505]" id="core">

<div className="relative h-[60vh] border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden bg-black flex items-center justify-center lg:h-full">

<div className="absolute inset-0 z-10">
<canvas className="w-full h-full opacity-60" id="networkCanvas"></canvas>
</div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.8)_90%)] z-20 pointer-events-none"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
<div className="w-24 h-24 rounded-full border border-[#00FF41]/20 flex items-center justify-center animate-pulse">
<div className="w-20 h-20 rounded-full border border-[#00FF41]/40 flex items-center justify-center">
<div className="w-2 h-2 bg-[#00FF41] rounded-full shadow-[0_0_15px_#00FF41]"></div>
</div>
</div>
<div className="mt-4 text-[10px] text-[#00FF41] font-mono tracking-widest bg-black/50 px-2 py-1 border border-[#00FF41]/20 backdrop-blur-md">
                NEURAL_GRID_ACTIVE
             </div>
</div>
<div className="absolute bottom-6 left-6 text-[10px] text-stone-600 font-mono pointer-events-none z-20">
            ENTITY_ID: SEERSTONE // 3D_VISUALIZATION
          </div>
</div>

<div className="flex flex-col justify-center p-8 md:p-20 lg:p-24 bg-dots">
<div className="reveal">
<span className="text-[#00FF41] text-xs font-semibold tracking-widest mb-4 block">
              01 // THE CORE PROTOCOL
            </span>
<h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-8 leading-tight">
              We do not rely on luck.
              
              <span className="text-stone-500">We rely on math.</span>
</h2>
<div className="space-y-8 text-stone-400 text-sm leading-relaxed">
<p>
                SeerStone is a holding company built on the principle of
                <span className="text-white bg-white/10 px-1">
                  Asymmetric Efficiency
                </span>
                . By utilizing a proprietary machine learning architecture, we
                automate the creative supply chain—from ad generation to
                audience targeting.
              </p>
<p>
                While legacy competitors operate with bloated teams and slow
                reaction times, SeerStone operates with 1/10th the headcount
                while delivering 10x the output. We are not just participating
                in the market; we are engineering its direction.
              </p>
</div>
<div className="mt-12 space-y-4">

<div className="glass-panel p-6 hover:border-[#00FF41]/50 transition-colors group cursor-crosshair">
<h3 className="text-white font-semibold text-sm mb-2 flex justify-between">
                  Algorithmic Acquisition
                  <iconify-icon className="text-stone-500 group-hover:text-[#00FF41] text-lg" icon="lucide:binary"></iconify-icon>
</h3>
<p className="text-xs text-stone-500">
                  AI-driven video synthesis and copy generation tailored for
                  maximum conversion.
                </p>
</div>

<div className="glass-panel p-6 hover:border-[#00FF41]/50 transition-colors group cursor-crosshair">
<h3 className="text-white font-semibold text-sm mb-2 flex justify-between">
                  Hyper-Targeting
                  <iconify-icon className="text-stone-500 group-hover:text-[#00FF41] text-lg" icon="lucide:crosshair"></iconify-icon>
</h3>
<p className="text-xs text-stone-500">
                  Real-time bid optimization and audience segmentation across
                  international borders.
                </p>
</div>

<div className="glass-panel p-6 hover:border-[#00FF41]/50 transition-colors group cursor-crosshair">
<h3 className="text-white font-semibold text-sm mb-2 flex justify-between">
                  Stealth Portfolio
                  <iconify-icon className="text-stone-500 group-hover:text-[#00FF41] text-lg" icon="lucide:folder-lock"></iconify-icon>
</h3>
<p className="text-xs text-stone-500">
                  Owning and scaling multiple category-leading consumer brands
                  anonymously.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 border-b border-white/10 bg-black overflow-hidden" id="logistics">

<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover grayscale opacity-20" src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&amp;w=2535&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

<div className="absolute top-0 left-1/4 w-px h-full bg-white/5"></div>
<div className="absolute top-0 right-1/4 w-px h-full bg-white/5"></div>
<div className="absolute top-1/2 left-0 w-full h-px bg-white/5"></div>
</div>
<div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="col-span-1 lg:col-span-5 reveal">
<span className="text-[#00FF41] text-xs font-semibold tracking-widest mb-4 block">
                02 // THE INFRASTRUCTURE: VerumLogistics
              </span>
<h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-6">
                Digital dominance requires physical sovereignty.
              </h2>
<p className="text-stone-400 text-sm mb-8 leading-relaxed">
                To control the margin, you must control the line. SeerStone is
                powered by VerumLogistics, our vertically integrated supply
                chain fortress located in Dong Guan, China. We do not rely on
                3PLs. We own the warehouse, the technology, and the
                transportation lines.
              </p>
<div className="p-6 border border-dashed border-stone-700 bg-black/50 backdrop-blur-sm">
<h4 className="text-xs font-semibold text-white mb-4 uppercase tracking-widest">
                  Partnership Access
                </h4>
<p className="text-xs text-stone-400 mb-4">
                  VerumLogistics maintains strict quality control for external
                  partners. We provide the infrastructure for high-volume
                  merchants to scale without friction.
                </p>
<a className="inline-flex items-center text-[#00FF41] text-xs font-semibold uppercase hover:underline decoration-dashed" href="#">
                  &gt; Request Capability Demo
                </a>
</div>
</div>

<div className="col-span-1 lg:col-span-7 flex flex-col justify-end reveal delay-100">
<div className="w-full bg-stone-900/40 border border-stone-800 backdrop-blur-md">
<div className="flex items-center justify-between p-4 border-b border-stone-800 bg-stone-900/80">
<span className="text-[10px] uppercase tracking-widest text-stone-500">
                    Facility Specs: Dong Guan
                  </span>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-[#00FF41]"></div>
</div>
</div>
<div className="divide-y divide-stone-800 text-xs font-mono">
<div className="grid grid-cols-2 p-4 hover:bg-white/5 transition-colors">
<span className="text-stone-500 uppercase">Facility Size</span>
<span className="text-white text-right font-semibold">
                      10,000 SQM
                    </span>
</div>
<div className="grid grid-cols-2 p-4 hover:bg-white/5 transition-colors">
<span className="text-stone-500 uppercase">Throughput</span>
<span className="text-[#00FF41] text-right font-semibold text-glow">
                      200,000 ORDERS / DAY
                    </span>
</div>
<div className="grid grid-cols-2 p-4 hover:bg-white/5 transition-colors">
<span className="text-stone-500 uppercase">Integration</span>
<span className="text-white text-right font-semibold">
                      FACTORY-TO-DOORSTEP
                    </span>
</div>
<div className="grid grid-cols-2 p-4 hover:bg-white/5 transition-colors">
<span className="text-stone-500 uppercase">
                      Automation Level
                    </span>
<span className="text-white text-right font-semibold">
                      TIER 4 (AUTONOMOUS)
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 border-b border-white/10 bg-[#080808]" id="vision">
<div className="max-w-[1000px] mx-auto px-6 md:px-12">
<div className="text-center mb-16 reveal">
<span className="text-[#00FF41] text-xs font-semibold tracking-widest mb-2 block">
              03 // TRAJECTORY
            </span>
<h2 className="text-4xl font-display font-semibold text-white uppercase">
              Execution Roadmap
            </h2>
</div>
<div className="relative">

<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-stone-800 -translate-x-1/2 md:translate-x-0">
<div className="circuit-line h-full w-full"></div>
</div>

<div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 mb-16 reveal">
<div className="md:text-right">
<span className="text-3xl font-display font-semibold text-white">
                  2023
                </span>
<span className="block text-xs text-stone-500 font-mono tracking-widest mt-1">
                  [ GENESIS ]
                </span>
</div>
<div className="hidden md:block absolute left-1/2 top-3 w-3 h-3 bg-stone-900 border border-stone-500 -translate-x-1/2 rotate-45"></div>
<div className="pl-12 md:pl-0 border-l border-stone-800 md:border-none">
<h4 className="text-white font-semibold text-sm mb-2">
                  Initialization
                </h4>
<p className="text-xs text-stone-400 leading-relaxed">
                  Initialization of proprietary ML marketing algorithms. Proof
                  of concept: $100M+ Revenue Run Rate achieved.
                </p>
</div>
</div>

<div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 mb-16 reveal delay-100">
<div className="md:order-2">
<span className="text-3xl font-display font-semibold text-white">
                  2024
                </span>
<span className="block text-xs text-stone-500 font-mono tracking-widest mt-1">
                  [ FOUNDATION ]
                </span>
</div>
<div className="hidden md:block absolute left-1/2 top-3 w-3 h-3 bg-stone-900 border border-stone-500 -translate-x-1/2 rotate-45"></div>
<div className="md:order-1 md:text-right pl-12 md:pl-0 border-l border-stone-800 md:border-none">
<h4 className="text-white font-semibold text-sm mb-2">
                  Physical Acquisition
                </h4>
<p className="text-xs text-stone-400 leading-relaxed">
                  Construction of VerumLogistics (Dong Guan). Integration of
                  manufacturing and fulfillment protocols.
                </p>
</div>
</div>

<div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 mb-16 reveal delay-200">
<div className="md:text-right">
<span className="text-3xl font-display font-semibold text-[#00FF41] text-glow">
                  2025
                </span>
<span className="block text-xs text-[#00FF41] font-mono tracking-widest mt-1">
                  [ CONVERGENCE ]
                </span>
</div>
<div className="hidden md:block absolute left-1/2 top-3 w-4 h-4 bg-[#00FF41] shadow-[0_0_15px_#00FF41] -translate-x-1/2 rotate-45"></div>
<div className="pl-12 md:pl-0 border-l border-[#00FF41] md:border-none">
<div className="inline-block px-2 py-0.5 bg-[#00FF41]/10 border border-[#00FF41]/30 text-[#00FF41] text-[10px] font-semibold mb-2 rounded">
                  CURRENT STATUS
                </div>
<h4 className="text-white font-semibold text-sm mb-2">Expansion</h4>
<p className="text-xs text-stone-400 leading-relaxed">
                  Launch of proprietary shipping lines. Expansion of stealth
                  brand portfolio. Algorithm V2.0 deployment.
                </p>
</div>
</div>

<div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 reveal delay-300">
<div className="md:order-2">
<span className="text-3xl font-display font-semibold text-stone-600">
                  2027+
                </span>
<span className="block text-xs text-stone-700 font-mono tracking-widest mt-1">
                  [ HEGEMONY ]
                </span>
</div>
<div className="hidden md:block absolute left-1/2 top-3 w-3 h-3 bg-stone-900 border border-stone-700 -translate-x-1/2 rotate-45"></div>
<div className="md:order-1 md:text-right pl-12 md:pl-0 border-l border-stone-800 md:border-none">
<h4 className="text-stone-500 font-semibold text-sm mb-2">
                  Sector Expansion
                </h4>
<p className="text-xs text-stone-600 leading-relaxed">
                  Biotech, Pharmaceuticals, Consumables. Objective: The largest
                  D2C logistics network in China.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 border-b border-white/10 bg-black" id="careers">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="col-span-1 lg:col-span-4 reveal">
<span className="text-[#00FF41] text-xs font-semibold tracking-widest mb-4 block">
              04 // OPERATE AT THE EDGE
            </span>
<h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-6">
              SeerStone is a high-performance unit.
            </h2>
<p className="text-stone-400 text-sm mb-8 leading-relaxed">
              We are seeking the outliers—the engineers, the builders, and the
              obsessive problem solvers who want to see their code and
              strategies impact the real world immediately. We offer no
              bureaucracy. We offer scale.
            </p>
<a className="text-white border-b border-white pb-1 hover:text-[#00FF41] hover:border-[#00FF41] transition-colors text-xs font-semibold tracking-widest" href="#">
              INTRODUCE YOURSELF -&gt;
            </a>
</div>
<div className="col-span-1 lg:col-span-8 space-y-2 reveal delay-100">

<div className="group relative p-6 border border-stone-800 hover:bg-white transition-all duration-300 cursor-pointer overflow-hidden">
<div className="flex justify-between items-center relative z-10">
<div>
<h4 className="text-xl font-semibold text-white group-hover:text-black transition-colors">
                    Machine Learning Engineer
                  </h4>
<span className="text-xs text-stone-500 group-hover:text-stone-600 font-mono mt-1 block">
                    REMOTE / DONG GUAN
                  </span>
</div>
<iconify-icon className="text-2xl text-stone-600 group-hover:text-black transition-colors" icon="lucide:arrow-up-right"></iconify-icon>
</div>
</div>

<div className="group relative p-6 border border-stone-800 hover:bg-white transition-all duration-300 cursor-pointer overflow-hidden">
<div className="flex justify-between items-center relative z-10">
<div>
<h4 className="text-xl font-semibold text-white group-hover:text-black transition-colors">
                    Supply Chain Architect
                  </h4>
<span className="text-xs text-stone-500 group-hover:text-stone-600 font-mono mt-1 block">
                    DONG GUAN / ONSITE
                  </span>
</div>
<iconify-icon className="text-2xl text-stone-600 group-hover:text-black transition-colors" icon="lucide:arrow-up-right"></iconify-icon>
</div>
</div>

<div className="group relative p-6 border border-stone-800 hover:bg-white transition-all duration-300 cursor-pointer overflow-hidden">
<div className="flex justify-between items-center relative z-10">
<div>
<h4 className="text-xl font-semibold text-white group-hover:text-black transition-colors">
                    Video Synthesis Specialist
                  </h4>
<span className="text-xs text-stone-500 group-hover:text-stone-600 font-mono mt-1 block">
                    REMOTE
                  </span>
</div>
<iconify-icon className="text-2xl text-stone-600 group-hover:text-black transition-colors" icon="lucide:arrow-up-right"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<footer className="z-10 bg-[#050505] pt-24 pb-12 relative">
<div className="max-w-[1400px] mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
<div className="">

<div className="mb-6 flex flex-col items-start gap-4">
<svg className="stone-glow w-[80px] h-[80px]" fill="none" height="80" strokeWidth="2" viewbox="0 0 100 100" width="80" xmlns="http://www.w3.org/2000/svg">
<path className="stone-shard-1" d="M42 16 C46 12 54 12 58 16 C62 19 58 23 50 24 C42 23 38 19 42 16 Z" fill="#e5e5e5"></path>
<path className="stone-shard-2" d="M26 36 C35 30 65 30 74 36 C78 40 75 46 50 48 C25 46 22 40 26 36 Z" fill="#d4d4d4"></path>
<path className="stone-shard-3" d="M16 58 C35 68 65 68 84 58 L88 64 C75 78 25 78 12 64 L16 58 Z" fill="#a3a3a3"></path>
<path className="stone-shard-4" d="M20 82 C35 87 65 87 80 82 L50 98 L20 82 Z" fill="#737373"></path>
</svg>
<h2 className="text-7xl font-logo font-semibold text-white tracking-tighter select-none">
                  SEERSTONE
                </h2>
</div>
<div className="mt-8 flex gap-4 text-xs font-mono text-stone-500 uppercase">
<span>Dubai</span>
<span>/</span>
<span>Seoul</span>
<span>/</span>
<span>Los Angeles</span>
<span>/</span>
<span className="text-[#00FF41]">Dong Guan</span>
</div>
</div>
<div className="bg-stone-900/20 p-8 border border-stone-800 backdrop-blur-sm">
<h4 className="text-white font-semibold mb-6">
                SECURE CHANNEL // INQUIRIES
              </h4>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="relative group">
<input className="w-full bg-transparent border-b border-stone-700 py-2 text-sm text-white focus:outline-none focus:border-[#00FF41] font-mono placeholder-stone-600 transition-colors" placeholder="NAME" type="text"/>
</div>
<div className="relative group">
<input className="w-full bg-transparent border-b border-stone-700 py-2 text-sm text-white focus:outline-none focus:border-[#00FF41] font-mono placeholder-stone-600 transition-colors" placeholder="COMPANY" type="text"/>
</div>
</div>
<div className="relative group">
<input className="w-full bg-transparent border-b border-stone-700 py-2 text-sm text-white focus:outline-none focus:border-[#00FF41] font-mono placeholder-stone-600 transition-colors" placeholder="EMAIL_ADDRESS" type="email"/>
</div>
<div className="relative group">
<textarea className="w-full bg-transparent border-b border-stone-700 py-2 text-sm text-white focus:outline-none focus:border-[#00FF41] font-mono placeholder-stone-600 transition-colors resize-none" placeholder="TRANSMISSION_MESSAGE" rows="2"></textarea>
</div>
<button className="mt-4 px-8 py-3 bg-[#00FF41] text-black font-semibold text-xs uppercase tracking-widest hover:bg-white transition-colors w-full md:w-auto" type="button">
                  Initialize Uplink
                </button>
</form>
</div>
</div>
<div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-stone-600 uppercase tracking-widest">
<span>© 2024 SEERSTONE HOLDINGS LTD.</span>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">
                Privacy Protocol
              </a>
<a className="hover:text-white transition-colors" href="#">
                Terms of Engagement
              </a>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
