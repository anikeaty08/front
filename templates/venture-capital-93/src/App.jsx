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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // Scroll Reveal Observer
            const revealElements = document.querySelectorAll('.reveal');
            const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
            
            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            revealElements.forEach(el => revealObserver.observe(el));

            // ASTONISHING WEBGL-STYLE CANVAS (Dot Matrix + Ripples + Beams)
            const canvas = document.getElementById('hero-canvas');
            const ctx = canvas.getContext('2d', { alpha: false });
            let width, height;
            
            // Config
            const spacing = 30; 
            let cols, rows;
            let dots = [];
            let beams = [];
            
            let mouse = { x: -1000, y: -1000, radius: 250 };
            
            class Dot {
                constructor(x, y) {
                    this.baseX = x;
                    this.baseY = y;
                    this.x = x;
                    this.y = y;
                    this.baseSize = 1;
                    this.size = this.baseSize;
                    this.color = 'rgba(100, 116, 139, 0.3)'; // Slate color
                }
                update() {
                    let dx = mouse.x - this.baseX;
                    let dy = mouse.y - this.baseY;
                    let distance = Math.sqrt(dx*dx + dy*dy);
                    
                    if (distance < mouse.radius) {
                        // Force/Ripple effect
                        const force = (mouse.radius - distance) / mouse.radius;
                        // Wave offset
                        const offset = Math.sin(distance * 0.05 - performance.now() * 0.005) * 10 * force;
                        
                        this.y = this.baseY - offset;
                        this.size = this.baseSize + (force * 1.5);
                        
                        // Color transition to neon
                        const alpha = 0.3 + (force * 0.7);
                        this.color = `rgba(204, 255, 0, ${alpha})`;
                    } else {
                        // Return to base
                        this.y += (this.baseY - this.y) * 0.1;
                        this.size += (this.baseSize - this.size) * 0.1;
                        this.color = 'rgba(100, 116, 139, 0.3)';
                    }
                }
                draw() {
                    ctx.fillStyle = this.color;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            class Beam {
                constructor() {
                    this.reset();
                }
                reset() {
                    this.isVertical = Math.random() > 0.5;
                    if (this.isVertical) {
                        this.x = Math.floor(Math.random() * cols) * spacing;
                        this.y = Math.random() < 0.5 ? -100 : height + 100;
                        this.speed = (Math.random() * 8 + 4) * (this.y < 0 ? 1 : -1);
                        this.length = Math.random() * 150 + 50;
                    } else {
                        this.x = Math.random() < 0.5 ? -100 : width + 100;
                        this.y = Math.floor(Math.random() * rows) * spacing;
                        this.speed = (Math.random() * 8 + 4) * (this.x < 0 ? 1 : -1);
                        this.length = Math.random() * 150 + 50;
                    }
                    this.opacity = Math.random() * 0.5 + 0.5;
                }
                update() {
                    if (this.isVertical) {
                        this.y += this.speed;
                        if ((this.speed > 0 && this.y > height + 200) || (this.speed < 0 && this.y < -200)) this.reset();
                    } else {
                        this.x += this.speed;
                        if ((this.speed > 0 && this.x > width + 200) || (this.speed < 0 && this.x < -200)) this.reset();
                    }
                }
                draw() {
                    ctx.beginPath();
                    if (this.isVertical) {
                        const gradient = ctx.createLinearGradient(0, this.y, 0, this.y - (this.length * Math.sign(this.speed)));
                        gradient.addColorStop(0, `rgba(204, 255, 0, ${this.opacity})`);
                        gradient.addColorStop(1, 'rgba(204, 255, 0, 0)');
                        ctx.strokeStyle = gradient;
                        ctx.moveTo(this.x, this.y);
                        ctx.lineTo(this.x, this.y - (this.length * Math.sign(this.speed)));
                    } else {
                        const gradient = ctx.createLinearGradient(this.x, 0, this.x - (this.length * Math.sign(this.speed)), 0);
                        gradient.addColorStop(0, `rgba(204, 255, 0, ${this.opacity})`);
                        gradient.addColorStop(1, 'rgba(204, 255, 0, 0)');
                        ctx.strokeStyle = gradient;
                        ctx.moveTo(this.x, this.y);
                        ctx.lineTo(this.x - (this.length * Math.sign(this.speed)), this.y);
                    }
                    ctx.lineWidth = 1.5;
                    ctx.stroke();
                }
            }

            function initGrid() {
                dots = [];
                cols = Math.floor(width / spacing) + 2;
                rows = Math.floor(height / spacing) + 2;
                
                for (let i = 0; i < cols; i++) {
                    for (let j = 0; j < rows; j++) {
                        dots.push(new Dot(i * spacing, j * spacing));
                    }
                }
                
                beams = [];
                for(let i=0; i<15; i++) {
                    beams.push(new Beam());
                }
            }

            function resize() {
                width = canvas.width = window.innerWidth;
                height = canvas.height = window.innerHeight;
                initGrid();
            }

            function animate() {
                // Clear with solid color for performance
                ctx.fillStyle = '#040608';
                ctx.fillRect(0, 0, width, height);

                // Draw dots
                dots.forEach(dot => {
                    dot.update();
                    dot.draw();
                });
                
                // Draw beams
                ctx.lineCap = 'round';
                beams.forEach(beam => {
                    beam.update();
                    beam.draw();
                });

                requestAnimationFrame(animate);
            }

            window.addEventListener('resize', resize);
            window.addEventListener('mousemove', (e) => {
                mouse.x = e.clientX;
                mouse.y = e.clientY + window.scrollY; // adjust for scroll if needed
            });
            window.addEventListener('mouseleave', () => {
                mouse.x = -1000;
                mouse.y = -1000;
            });

            resize();
            animate();

            // Navbar Blur effect
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('bg-[#040608]/90', 'shadow-md', 'shadow-[#CCFF00]/5');
                    navbar.classList.remove('bg-[#040608]/80');
                } else {
                    navbar.classList.remove('bg-[#040608]/90', 'shadow-md', 'shadow-[#CCFF00]/5');
                    navbar.classList.add('bg-[#040608]/80');
                }
            });
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
      
<div className="scanlines"></div>

<div className="fixed top-0 w-full z-50 bg-[#040608] border-b border-[#1E293B] opacity-30 hover:opacity-100 transition-opacity duration-300 h-6 flex items-center">
<div className="ticker-wrap font-mono text-[0.65rem] tracking-wider text-[#64748B]">
<div className="ticker-content">
<span className="mx-4 text-[#CCFF00] cursor-default">STATUS: DEPLOYED // DEFENSE AI // $42M</span>
<span className="mx-4 text-[#1E293B]">|</span>
<span className="mx-4 hover:text-[#F1F5F9] transition-colors cursor-default">STATUS: ACTIVE // QUANTUM NETWORKING // THESIS PHASE</span>
<span className="mx-4 text-[#1E293B]">|</span>
<span className="mx-4 hover:text-[#F1F5F9] transition-colors cursor-default">STATUS: MONITORING // ADVANCED MATERIALS // $1.1B TAM</span>
<span className="mx-4 text-[#1E293B]">|</span>
<span className="mx-4 text-[#CCFF00] cursor-default">STATUS: EXITED // BIOCOMPUTE // 4.2x MOIC</span>
<span className="mx-4 text-[#1E293B]">|</span>

<span className="mx-4 text-[#CCFF00] cursor-default">STATUS: DEPLOYED // DEFENSE AI // $42M</span>
<span className="mx-4 text-[#1E293B]">|</span>
<span className="mx-4 hover:text-[#F1F5F9] transition-colors cursor-default">STATUS: ACTIVE // QUANTUM NETWORKING // THESIS PHASE</span>
<span className="mx-4 text-[#1E293B]">|</span>
<span className="mx-4 hover:text-[#F1F5F9] transition-colors cursor-default">STATUS: MONITORING // ADVANCED MATERIALS // $1.1B TAM</span>
<span className="mx-4 text-[#1E293B]">|</span>
<span className="mx-4 text-[#CCFF00] cursor-default">STATUS: EXITED // BIOCOMPUTE // 4.2x MOIC</span>
</div>
</div>
</div>

<nav className="fixed top-6 w-full z-40 bg-[#040608]/80 backdrop-blur-md border-b border-[#1E293B] transition-all duration-300" id="navbar">
<div className="max-w-[80rem] mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-3 group relative" href="#">
<div className="relative w-6 h-6 flex items-center justify-center">
<svg className="absolute inset-0 w-full h-full transform group-hover:rotate-90 transition-transform duration-700 ease-in-out" fill="none" viewbox="0 0 24 24">
<rect className="animate-[spin_10s_linear_infinite]" height="20" stroke="#CCFF00" stroke-dasharray="4 4" strokeWidth="1.5" width="20" x="2" y="2"></rect>
</svg>
<svg className="absolute w-4 h-4" fill="none" viewbox="0 0 24 24">
<path d="M12 2L22 22H2L12 2Z" stroke="#F1F5F9" strokeLinejoin="bevel" strokeWidth="1.5"></path>
</svg>
</div>
<span className="font-syne font-bold text-lg tracking-tight uppercase hover-glitch">Vektral</span>
</a>

<div className="hidden md:flex items-center gap-8 font-mono text-[0.7rem] uppercase tracking-widest text-[#64748B]">
<a className="hover:text-[#CCFF00] transition-colors relative group" href="#portfolio">
                    Assets
                    <span className="absolute -bottom-6 left-0 w-full h-0.5 bg-[#CCFF00] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
</a>
<a className="hover:text-[#CCFF00] transition-colors relative group" href="#thesis">
                    Thesis
                    <span className="absolute -bottom-6 left-0 w-full h-0.5 bg-[#CCFF00] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
</a>
<a className="hover:text-[#CCFF00] transition-colors relative group" href="#intelligence">
                    Intelligence
                    <span className="absolute -bottom-6 left-0 w-full h-0.5 bg-[#CCFF00] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
</a>
<a className="text-[#F1F5F9] hover:text-[#CCFF00] transition-colors flex items-center gap-2" href="#lp-access">
<span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse"></span> LP Portal
                </a>
</div>

<div className="hidden md:flex items-center">
<a className="btn-cyber relative overflow-hidden bg-[#CCFF00] text-[#040608] font-syne font-bold uppercase tracking-widest text-xs h-10 px-6 flex items-center justify-center group" href="#lp-access">
<span className="relative z-10 flex items-center gap-2 group-hover:text-[#F1F5F9] transition-colors">
                        Initiate Coverage <iconify-icon className="text-sm" icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</a>
</div>
<button className="md:hidden text-[#F1F5F9]">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-24 overflow-hidden">

<canvas className="absolute inset-0 w-full h-full z-0 pointer-events-none" id="hero-canvas"></canvas>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#040608]/50 to-[#040608] z-0 pointer-events-none"></div>
<div className="w-full max-w-[80rem] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-8 flex flex-col items-start pt-12">
<div className="sec-badge reveal">SEC_00 // INITIALIZATION</div>
<h1 className="font-syne font-bold text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.95] tracking-tight mb-8 text-[#F1F5F9] reveal delay-1">
                    Capitalizing the Architects of Human Progress.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F1F5F9] to-[#64748B]">Yielding Outsized Returns.</span>
</h1>
<p className="font-inter text-[clamp(0.875rem,1.1vw,1rem)] leading-[1.7] text-[#64748B] mb-10 max-w-2xl reveal delay-2">
                    We do not passively allocate. We embed with rogue engineers to build the critical infrastructure of the next economy. Defense AI, Quantum, and BioCompute. <span className="text-[#CCFF00]">Aggressive growth. Absolute conviction. Zero fluff.</span>
</p>
<div className="flex flex-col sm:flex-row items-center gap-4 reveal delay-3 w-full sm:w-auto">
<a className="btn-cyber relative overflow-hidden bg-[#CCFF00] text-[#040608] font-syne font-bold uppercase tracking-widest text-xs h-12 px-8 flex items-center justify-center w-full sm:w-auto group" href="#lp-access">
<span className="relative z-10 flex items-center gap-2 group-hover:text-[#F1F5F9] transition-colors">
                            Apply for Allocation <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
<a className="btn-cyber-outline relative w-full sm:w-auto text-[#F1F5F9] font-syne font-bold uppercase tracking-widest text-xs h-12 px-8 flex items-center justify-center transition-all duration-300 group hover:text-[#CCFF00]" href="#portfolio">
<span className="relative z-10">Review Assets</span>
</a>
</div>

<div className="flex flex-wrap items-center gap-6 mt-16 reveal delay-3 border-t border-[#1E293B] pt-6 w-full">
<div>
<div className="font-mono text-xs text-[#64748B] uppercase mb-1">AUM</div>
<div className="font-syne font-bold text-xl text-[#F1F5F9]">$1.4B+</div>
</div>
<div className="w-px h-8 bg-[#1E293B]"></div>
<div>
<div className="font-mono text-xs text-[#64748B] uppercase mb-1">Target MOIC</div>
<div className="font-syne font-bold text-xl text-[#F1F5F9]">4.0×</div>
</div>
<div className="w-px h-8 bg-[#1E293B]"></div>
<div>
<div className="font-mono text-xs text-[#64748B] uppercase mb-1">Board Control</div>
<div className="font-syne font-bold text-xl text-[#CCFF00]">100%</div>
</div>
</div>
</div>

<div className="lg:col-span-4 relative hidden lg:block reveal delay-2">
<div className="border border-[#1E293B] bg-[#0A0E14]/80 backdrop-blur-md p-1 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(204,255,0,0.05),transparent_50%)] pointer-events-none"></div>
<div className="bg-[#040608] border border-[#1E293B] p-4 font-mono text-[0.65rem] text-[#64748B] leading-relaxed">
<div className="flex justify-between items-center border-b border-[#1E293B] pb-2 mb-2">
<span className="text-[#CCFF00] flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#CCFF00] animate-pulse rounded-full"></span> SYS.MONITOR</span>
<span>v2.0.4</span>
</div>
<p className="mb-1">&gt; Establishing secure connection...</p>
<p className="mb-1 text-[#F1F5F9]">&gt; Handshake complete. Node 4 active.</p>
<p className="mb-4">&gt; Analyzing active deal flow vectors...</p>
<div className="flex flex-col gap-2">
<div className="flex justify-between items-center p-2 bg-[#0A0E14] border-l-2 border-[#CCFF00]">
<span className="text-[#F1F5F9]">Armdine AI</span>
<span className="text-[#CCFF00]">ACQUIRED</span>
</div>
<div className="flex justify-between items-center p-2 bg-[#0A0E14] border-l-2 border-[#1E293B]">
<span className="text-[#F1F5F9]">Quark.io</span>
<span>TERM SHEET</span>
</div>
<div className="flex justify-between items-center p-2 bg-[#0A0E14] border-l-2 border-[#1E293B]">
<span className="text-[#F1F5F9]">Tesseral Bio</span>
<span>DILIGENCE</span>
</div>
</div>
<p className="mt-4 animate-pulse">&gt; _</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-[clamp(5rem,10vw,8.75rem)] border-t border-[#1E293B] bg-[#040608]" id="portfolio">
<div className="w-full max-w-[80rem] mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
<div>
<div className="sec-badge reveal">SEC_01 // HIGH-YIELD ASSETS</div>
<h2 className="font-syne font-bold text-[clamp(2rem,3.8vw,3.5rem)] tracking-tight leading-[1.1] reveal delay-1">24 Elite Assets.<br/>One Unbreakable Thesis.</h2>
</div>
<div className="flex flex-wrap gap-2 reveal delay-2">
<button className="bg-[#CCFF00] text-[#040608] px-5 py-2 font-mono text-xs uppercase tracking-widest transition-transform hover:scale-105">All Sectors</button>
<button className="bg-[#0A0E14] text-[#64748B] px-5 py-2 font-mono text-xs uppercase tracking-widest border border-[#1E293B] hover:border-[#64748B] hover:text-[#F1F5F9] transition-all">Defense AI</button>
<button className="bg-[#0A0E14] text-[#64748B] px-5 py-2 font-mono text-xs uppercase tracking-widest border border-[#1E293B] hover:border-[#64748B] hover:text-[#F1F5F9] transition-all">Quantum</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-[#0A0E14] border border-[#1E293B] h-[400px] overflow-hidden reveal btn-cyber-outline hover:border-[#CCFF00]/50 transition-colors p-px">
<div className="absolute inset-1 z-0 overflow-hidden bg-[#040608]">
<img alt="AI Circuit" className="w-full h-full object-cover img-cyber scale-105 group-hover:scale-100 duration-700" src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 card-overlay"></div>
</div>
<div className="relative z-10 h-full p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="bg-[#040608]/80 backdrop-blur font-mono text-[0.65rem] text-[#CCFF00] px-3 py-1 border border-[#1E293B]">SERIES B // $28M</div>
<iconify-icon className="text-2xl text-[#64748B] group-hover:text-[#CCFF00] transition-colors" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<div className="font-mono text-xs text-[#64748B] mb-2 uppercase tracking-widest">Defense AI</div>
<h3 className="font-syne font-bold text-2xl text-[#F1F5F9] mb-2">Armdine Systems</h3>
<p className="font-inter text-sm text-[#94A3B8] max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden">
                                Autonomous swarm coordination for adversarial environments. Securing multi-domain dominance.
                            </p>
</div>
</div>
</div>

<div className="group relative bg-[#0A0E14] border border-[#1E293B] h-[400px] overflow-hidden reveal delay-1 btn-cyber-outline hover:border-[#CCFF00]/50 transition-colors p-px">
<div className="absolute inset-1 z-0 overflow-hidden bg-[#040608]">
<img alt="Quantum" className="w-full h-full object-cover img-cyber scale-105 group-hover:scale-100 duration-700" src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 card-overlay"></div>
</div>
<div className="relative z-10 h-full p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="bg-[#040608]/80 backdrop-blur font-mono text-[0.65rem] text-[#CCFF00] px-3 py-1 border border-[#1E293B]">SERIES A // $14M</div>
<iconify-icon className="text-2xl text-[#64748B] group-hover:text-[#CCFF00] transition-colors" icon="solar:cpu-linear"></iconify-icon>
</div>
<div>
<div className="font-mono text-xs text-[#64748B] mb-2 uppercase tracking-widest">Quantum Infra</div>
<h3 className="font-syne font-bold text-2xl text-[#F1F5F9] mb-2">Quark.io</h3>
<p className="font-inter text-sm text-[#94A3B8] max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden">
                                Post-encryption networking topology for critical financial and military data transfer.
                            </p>
</div>
</div>
</div>

<div className="group relative bg-[#0A0E14] border border-[#1E293B] h-[400px] overflow-hidden reveal delay-2 btn-cyber-outline hover:border-[#CCFF00]/50 transition-colors p-px">
<div className="absolute inset-1 z-0 overflow-hidden bg-[#040608]">
<img alt="Lab" className="w-full h-full object-cover img-cyber scale-105 group-hover:scale-100 duration-700" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 card-overlay"></div>
</div>
<div className="relative z-10 h-full p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="bg-[#040608]/80 backdrop-blur font-mono text-[0.65rem] text-[#CCFF00] px-3 py-1 border border-[#1E293B]">SERIES A // $18M</div>
<iconify-icon className="text-2xl text-[#64748B] group-hover:text-[#CCFF00] transition-colors" icon="solar:dna-linear"></iconify-icon>
</div>
<div>
<div className="font-mono text-xs text-[#64748B] mb-2 uppercase tracking-widest">BioCompute</div>
<h3 className="font-syne font-bold text-2xl text-[#F1F5F9] mb-2">Tesseral Bio</h3>
<p className="font-inter text-sm text-[#94A3B8] max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden">
                                Synthetic DNA data storage achieving petabyte density with zero thermal footprint.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-[clamp(5rem,10vw,8.75rem)] border-t border-[#1E293B] bg-[#0A0E14] overflow-hidden" id="thesis">
<div className="w-full max-w-[80rem] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="sec-badge reveal">SEC_02 // STRATEGIC DOCTRINE</div>
<h2 className="font-syne font-bold text-[clamp(2rem,3.8vw,3.5rem)] tracking-tight leading-[1.1] mb-8 reveal delay-1">Securing The Future.<br/>Scaling The Impossible.</h2>
<p className="font-inter text-base leading-[1.7] text-[#94A3B8] mb-10 reveal delay-2">
                        We invest exclusively where deep technical moats meet existential market needs. No consumer apps. No SaaS wrappers. We fund the fundamental hardware and systems required to safeguard human progress.
                    </p>
<div className="space-y-6 reveal delay-3">
<div className="flex items-start gap-4 group">
<div className="mt-1 w-6 h-6 border border-[#1E293B] bg-[#040608] flex items-center justify-center group-hover:border-[#CCFF00] group-hover:bg-[#CCFF00]/10 transition-colors">
<span className="w-1.5 h-1.5 bg-[#CCFF00]"></span>
</div>
<div>
<h4 className="font-syne font-bold text-[#F1F5F9] mb-1">Dual-Use Imperative</h4>
<p className="font-inter text-sm text-[#64748B]">Companies must demonstrate immediate commercial viability alongside defense utility. Single-market dependency is a failure point.</p>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="mt-1 w-6 h-6 border border-[#1E293B] bg-[#040608] flex items-center justify-center group-hover:border-[#CCFF00] group-hover:bg-[#CCFF00]/10 transition-colors">
<span className="w-1.5 h-1.5 bg-[#CCFF00]"></span>
</div>
<div>
<h4 className="font-syne font-bold text-[#F1F5F9] mb-1">Pre-Consensus Entry</h4>
<p className="font-inter text-sm text-[#64748B]">If the market agrees with the thesis, we are too late. We capitalize at pre-formation or Seed, capturing the largest delta of value creation.</p>
</div>
</div>
</div>
</div>

<div className="relative aspect-square border border-[#1E293B] bg-[#040608] flex items-center justify-center overflow-hidden reveal delay-2 p-1">

<div className="absolute inset-1 border border-[#1E293B]/50 rounded-full w-[80%] h-[80%] flex items-center justify-center">
<div className="absolute inset-0 rounded-full border border-[#1E293B] w-[60%] h-[60%] m-auto"></div>
<div className="absolute inset-0 rounded-full border border-[#1E293B] w-[30%] h-[30%] m-auto"></div>

<div className="absolute top-1/2 left-1/2 w-[40%] h-[1px] bg-gradient-to-r from-[#CCFF00] to-transparent origin-left animate-[spin_4s_linear_infinite]"></div>
</div>

<div className="absolute top-[30%] left-[60%] w-2 h-2 bg-[#CCFF00] rounded-full shadow-[0_0_10px_#CCFF00] animate-pulse">
<div className="absolute top-4 left-2 font-mono text-[0.5rem] text-[#CCFF00] uppercase">DEF-AI: VALID</div>
</div>
<div className="absolute top-[60%] left-[25%] w-1.5 h-1.5 bg-[#64748B] rounded-full">
<div className="absolute top-3 left-2 font-mono text-[0.5rem] text-[#64748B] uppercase">BIO: SCAN</div>
</div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
<div className="w-full h-px bg-[#F1F5F9]"></div>
<div className="w-px h-full bg-[#F1F5F9] absolute"></div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-[clamp(5rem,10vw,8.75rem)] border-t border-[#1E293B] bg-[#040608]">
<div className="w-full max-w-[80rem] mx-auto px-6">
<div className="sec-badge reveal">SEC_03 // HIGH FIDELITY TELEMETRY</div>
<h2 className="font-syne font-bold text-[clamp(2rem,3.8vw,3.5rem)] tracking-tight leading-[1.1] mb-12 reveal delay-1">Transparent Returns.<br/>Verified Execution.</h2>
<div className="bg-[#0A0E14] border border-[#1E293B] p-1 reveal delay-2 shadow-[0_0_40px_rgba(204,255,0,0.03)]">
<div className="border border-[#1E293B] bg-[#040608]">

<div className="flex border-b border-[#1E293B] bg-[#0A0E14] font-mono text-xs">
<div className="px-6 py-4 text-[#CCFF00] border-b-2 border-[#CCFF00] bg-[#040608] flex items-center gap-3">
<iconify-icon icon="solar:server-square-linear"></iconify-icon> ACTIVE_NODE
                        </div>
<div className="px-6 py-4 text-[#64748B] hover:text-[#F1F5F9] transition-colors cursor-pointer flex items-center gap-2">
                            ARCHIVE
                        </div>
</div>

<div className="overflow-x-auto p-4">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead>
<tr className="border-b border-[#1E293B] font-mono text-[0.65rem] text-[#64748B] uppercase tracking-widest">
<th className="p-4 font-normal">Asset ID</th>
<th className="p-4 font-normal">Sector</th>
<th className="p-4 font-normal">Entry</th>
<th className="p-4 font-normal">Check</th>
<th className="p-4 font-normal text-right">Yield (MOIC)</th>
<th className="p-4 font-normal">Trajectory</th>
</tr>
</thead>
<tbody className="font-mono text-xs text-[#F1F5F9]">
<tr className="border-b border-[#1E293B]/50 hover:bg-[#1E293B]/30 transition-colors group">
<td className="p-4 text-[#CCFF00] font-bold">ARMDINE</td>
<td className="p-4 text-[#94A3B8]">Defense AI</td>
<td className="p-4">Series B</td>
<td className="p-4">$28.0M</td>
<td className="p-4 text-right">2.4x</td>
<td className="p-4">

<svg className="stroke-[#CCFF00] fill-none w-full max-w-[100px]" height="20" viewbox="0 0 60 20" width="60">
<path d="M0 15 L15 12 L25 14 L40 5 L60 2" strokeLinejoin="round" strokeWidth="1.5"></path>
<circle cx="60" cy="2" fill="#CCFF00" r="2" stroke="none"></circle>
</svg>
</td>
</tr>
<tr className="border-b border-[#1E293B]/50 hover:bg-[#1E293B]/30 transition-colors group">
<td className="p-4 text-[#CCFF00] font-bold">QUARK.IO</td>
<td className="p-4 text-[#94A3B8]">Quantum</td>
<td className="p-4">Series A</td>
<td className="p-4">$14.5M</td>
<td className="p-4 text-right">3.1x</td>
<td className="p-4">
<svg className="stroke-[#CCFF00] fill-none w-full max-w-[100px]" height="20" viewbox="0 0 60 20" width="60">
<path d="M0 18 L10 18 L25 8 L40 10 L60 1" strokeLinejoin="round" strokeWidth="1.5"></path>
<circle cx="60" cy="1" fill="#CCFF00" r="2" stroke="none"></circle>
</svg>
</td>
</tr>
<tr className="hover:bg-[#1E293B]/30 transition-colors group">
<td className="p-4 text-[#CCFF00] font-bold">TESSERAL</td>
<td className="p-4 text-[#94A3B8]">BioCompute</td>
<td className="p-4">Seed</td>
<td className="p-4">$8.2M</td>
<td className="p-4 text-right">1.8x</td>
<td className="p-4">
<svg className="stroke-[#CCFF00] fill-none w-full max-w-[100px]" height="20" viewbox="0 0 60 20" width="60">
<path d="M0 10 L20 12 L35 8 L45 8 L60 4" strokeLinejoin="round" strokeWidth="1.5"></path>
<circle cx="60" cy="4" fill="#CCFF00" r="2" stroke="none"></circle>
</svg>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<div className="mt-4 text-right font-mono text-[0.6rem] text-[#64748B] uppercase tracking-widest reveal">
                Data synced. Lag: 12ms.
            </div>
</div>
</section>

<section className="relative py-[clamp(5rem,10vw,8.75rem)] border-t border-[#1E293B] bg-[#0A0E14]">
<div className="w-full max-w-[80rem] mx-auto px-6">
<div className="sec-badge reveal">SEC_04 // OPERATIONAL CADENCE</div>
<h2 className="font-syne font-bold text-[clamp(2rem,3.8vw,3.5rem)] tracking-tight leading-[1.1] mb-20 max-w-3xl reveal delay-1">Operators First.<br/>Financiers Second.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-[#040608] border border-[#1E293B] p-8 reveal btn-cyber-outline hover:border-[#CCFF00]/40 transition-colors">
<div className="relative z-10">
<div className="w-10 h-10 rounded bg-[#1E293B] flex items-center justify-center mb-6 text-[#CCFF00]">
<iconify-icon className="text-xl" icon="solar:radar-linear"></iconify-icon>
</div>
<h3 className="font-syne font-bold text-xl mb-4 text-[#F1F5F9]">Pre-Signal Sourcing</h3>
<p className="font-inter text-sm text-[#94A3B8] leading-[1.6]">We map elite technical talent before entities are formed. By the time a pitch deck exists, the highest-alpha entry point has closed.</p>
</div>
</div>
<div className="bg-[#040608] border border-[#1E293B] p-8 reveal delay-1 btn-cyber-outline hover:border-[#CCFF00]/40 transition-colors">
<div className="relative z-10">
<div className="w-10 h-10 rounded bg-[#1E293B] flex items-center justify-center mb-6 text-[#CCFF00]">
<iconify-icon className="text-xl" icon="solar:shield-user-linear"></iconify-icon>
</div>
<h3 className="font-syne font-bold text-xl mb-4 text-[#F1F5F9]">Embedded Governance</h3>
<p className="font-inter text-sm text-[#94A3B8] leading-[1.6]">Capital without control is dead weight. We require board seats, actively driving commercialization and defense procurement.</p>
</div>
</div>
<div className="bg-[#040608] border border-[#1E293B] p-8 reveal delay-2 btn-cyber-outline hover:border-[#CCFF00]/40 transition-colors">
<div className="relative z-10">
<div className="w-10 h-10 rounded bg-[#1E293B] flex items-center justify-center mb-6 text-[#CCFF00]">
<iconify-icon className="text-xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="font-syne font-bold text-xl mb-4 text-[#F1F5F9]">Accelerated Growth</h3>
<p className="font-inter text-sm text-[#94A3B8] leading-[1.6]">We compress 10-year R&amp;D cycles into 3. Utilizing our proprietary network of military test ranges and Tier 1 commercial partners.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-[clamp(5rem,10vw,8.75rem)] border-t border-[#1E293B] bg-[#040608]" id="team">
<div className="w-full max-w-[80rem] mx-auto px-6">
<div className="sec-badge reveal">SEC_05 // COMMAND STRUCTURE</div>
<h2 className="font-syne font-bold text-[clamp(2rem,3.8vw,3.5rem)] tracking-tight leading-[1.1] mb-16 reveal delay-1">Engineers Managing Capital.</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group relative h-[420px] bg-[#0A0E14] border border-[#1E293B] overflow-hidden reveal p-px btn-cyber-outline">
<div className="absolute inset-1 z-0 overflow-hidden bg-[#040608]">
<img alt="Marcus" className="w-full h-full object-cover img-cyber scale-105 group-hover:scale-100 duration-700" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#040608] via-[#040608]/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

<div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(204,255,0,0.2)_50%,transparent_100%)] h-[10%] w-full -translate-y-[100%] group-hover:animate-[scan_2s_ease-in-out_infinite]"></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 z-20">
<h3 className="font-syne font-bold text-xl text-[#F1F5F9] mb-1">Marcus Veil</h3>
<div className="font-mono text-[0.65rem] text-[#CCFF00] uppercase tracking-widest mb-4">Managing Partner</div>
<div className="h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 group-hover:mt-4 transition-all duration-300">
<p className="font-inter text-xs text-[#94A3B8] mb-4">Ex-DARPA. Led autonomous systems procurement before shifting to private allocation. No banking background.</p>
<a className="text-[#64748B] hover:text-[#CCFF00] transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" width="18"></iconify-icon></a>
</div>
</div>
</div>

<div className="group relative h-[420px] bg-[#0A0E14] border border-[#1E293B] overflow-hidden reveal delay-1 p-px btn-cyber-outline">
<div className="absolute inset-1 z-0 overflow-hidden bg-[#040608]">
<img alt="Seren" className="w-full h-full object-cover img-cyber scale-105 group-hover:scale-100 duration-700" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#040608] via-[#040608]/50 to-transparent opacity-80 group-hover:opacity-60"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(204,255,0,0.2)_50%,transparent_100%)] h-[10%] w-full -translate-y-[100%] group-hover:animate-[scan_2s_ease-in-out_infinite]"></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 z-20">
<h3 className="font-syne font-bold text-xl text-[#F1F5F9] mb-1">Seren Dao</h3>
<div className="font-mono text-[0.65rem] text-[#CCFF00] uppercase tracking-widest mb-4">General Partner</div>
<div className="h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 group-hover:mt-4 transition-all duration-300">
<p className="font-inter text-xs text-[#94A3B8] mb-4">Early DeepMind architecture team. Scaled computing infrastructure for three unicorns.</p>
<a className="text-[#64748B] hover:text-[#CCFF00] transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" width="18"></iconify-icon></a>
</div>
</div>
</div>

<style>
                    @keyframes scan {
                        0% { transform: translateY(-100%); }
                        100% { transform: translateY(1000%); }
                    }
                </style>

<div className="group relative h-[420px] bg-[#0A0E14] border border-[#1E293B] overflow-hidden reveal delay-2 p-px btn-cyber-outline">
<div className="absolute inset-1 z-0 overflow-hidden bg-[#040608]">
<img alt="Emil" className="w-full h-full object-cover img-cyber scale-105 group-hover:scale-100 duration-700" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#040608] via-[#040608]/50 to-transparent opacity-80 group-hover:opacity-60"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(204,255,0,0.2)_50%,transparent_100%)] h-[10%] w-full -translate-y-[100%] group-hover:animate-[scan_2s_ease-in-out_infinite]"></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 z-20">
<h3 className="font-syne font-bold text-xl text-[#F1F5F9] mb-1">Emil Rand</h3>
<div className="font-mono text-[0.65rem] text-[#CCFF00] uppercase tracking-widest mb-4">Partner, Quantum</div>
<div className="h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 group-hover:mt-4 transition-all duration-300">
<p className="font-inter text-xs text-[#94A3B8] mb-4">PhD Quantum Physics. Architected cooling systems for early-stage commercial mainframes.</p>
<a className="text-[#64748B] hover:text-[#CCFF00] transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" width="18"></iconify-icon></a>
</div>
</div>
</div>

<div className="group relative h-[420px] bg-[#0A0E14] border border-[#1E293B] overflow-hidden reveal delay-3 p-px btn-cyber-outline">
<div className="absolute inset-1 z-0 overflow-hidden bg-[#040608]">
<img alt="Alix" className="w-full h-full object-cover img-cyber scale-105 group-hover:scale-100 duration-700" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#040608] via-[#040608]/50 to-transparent opacity-80 group-hover:opacity-60"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(204,255,0,0.2)_50%,transparent_100%)] h-[10%] w-full -translate-y-[100%] group-hover:animate-[scan_2s_ease-in-out_infinite]"></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 z-20">
<h3 className="font-syne font-bold text-xl text-[#F1F5F9] mb-1">Alix Novar</h3>
<div className="font-mono text-[0.65rem] text-[#CCFF00] uppercase tracking-widest mb-4">Partner, Bio</div>
<div className="h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 group-hover:mt-4 transition-all duration-300">
<p className="font-inter text-xs text-[#94A3B8] mb-4">Founded and sold synthetic biology lab. Holds 14 patents in DNA-based data storage.</p>
<a className="text-[#64748B] hover:text-[#CCFF00] transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" width="18"></iconify-icon></a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-[clamp(5rem,10vw,8.75rem)] border-t border-[#1E293B] bg-[#0A0E14]" id="intelligence">
<div className="w-full max-w-[80rem] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<div className="sec-badge reveal">SEC_06 // INTELLIGENCE</div>
<h2 className="font-syne font-bold text-[clamp(2rem,3.8vw,3.5rem)] tracking-tight leading-[1.1] reveal delay-1">Proprietary Insight.</h2>
</div>
<a className="btn-cyber-outline px-6 py-3 font-mono text-[0.65rem] text-[#F1F5F9] hover:text-[#CCFF00] tracking-widest uppercase transition-colors reveal delay-2" href="#">
                    Access Library →
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<a className="group block bg-[#040608] border border-[#1E293B] p-6 hover:border-[#CCFF00]/50 transition-colors reveal" href="#">
<div className="font-mono text-[0.65rem] text-[#64748B] mb-4 flex justify-between">
<span>Q1 2025 // THESIS UPDATE</span>
<span className="text-[#CCFF00]">READ_</span>
</div>
<h3 className="font-syne font-bold text-2xl text-[#F1F5F9] mb-4 group-hover:text-[#CCFF00] transition-colors">Deep Tech Defense: Why Dual-Use Is The Only Viable Alpha Model</h3>
<p className="font-inter text-sm text-[#94A3B8]">An analysis of 400 deep tech startups reveals single-market dependencies yield a 78% failure rate. How we engineer resilience.</p>
</a>
<a className="group block bg-[#040608] border border-[#1E293B] p-6 hover:border-[#CCFF00]/50 transition-colors reveal delay-1" href="#">
<div className="font-mono text-[0.65rem] text-[#64748B] mb-4 flex justify-between">
<span>Q4 2024 // MARKET MAP</span>
<span className="text-[#CCFF00]">READ_</span>
</div>
<h3 className="font-syne font-bold text-2xl text-[#F1F5F9] mb-4 group-hover:text-[#CCFF00] transition-colors">Quantum Infrastructure: Capitalizing The 18-Month Window</h3>
<p className="font-inter text-sm text-[#94A3B8]">The hardware layer is consolidating. A breakdown of the networking protocols that will dominate the post-RSA ecosystem.</p>
</a>
</div>
</div>
</section>

<section className="relative py-[clamp(6rem,12vw,10rem)] bg-[#040608] border-y border-[#1E293B] overflow-hidden flex justify-center items-center" id="lp-access">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,255,0,0.05)_0%,transparent_60%)] pointer-events-none"></div>
<div className="w-full max-w-2xl mx-auto px-6 relative z-10 text-center">
<div className="sec-badge reveal">SEC_07 // SECURE ALLOCATION</div>
<h2 className="font-syne font-bold text-[clamp(2.5rem,4vw,4rem)] tracking-tight leading-[1.1] mb-6 reveal delay-1 text-[#F1F5F9]">
                Fund III. $600M.<br/>Institutional Only.
            </h2>
<p className="font-inter text-[#94A3B8] text-sm leading-[1.7] mb-12 reveal delay-2">
                Vektral III is strictly reserved for qualified institutional LPs and family offices ($5M min). We do not conduct public roadshows. Submit credentials to initiate coverage.
            </p>
<form className="flex flex-col gap-6 text-left reveal delay-3">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="relative group">
<input className="w-full bg-[#0A0E14] border border-[#1E293B] p-4 text-[#F1F5F9] font-mono text-xs focus:outline-none placeholder-[#64748B] peer relative z-10 bg-transparent" placeholder="Institution Name" type="text"/>
<div className="input-highlight absolute bottom-0 left-0 w-full h-0.5 bg-[#CCFF00] scale-x-0 transition-transform origin-left z-20"></div>
<div className="absolute inset-0 bg-[#0A0E14] z-0"></div>
</div>
<div className="relative group">
<input className="w-full bg-[#0A0E14] border border-[#1E293B] p-4 text-[#F1F5F9] font-mono text-xs focus:outline-none placeholder-[#64748B] peer relative z-10 bg-transparent" placeholder="Representative Name" type="text"/>
<div className="input-highlight absolute bottom-0 left-0 w-full h-0.5 bg-[#CCFF00] scale-x-0 transition-transform origin-left z-20"></div>
<div className="absolute inset-0 bg-[#0A0E14] z-0"></div>
</div>
</div>
<div className="relative group">
<input className="w-full bg-[#0A0E14] border border-[#1E293B] p-4 text-[#F1F5F9] font-mono text-xs focus:outline-none placeholder-[#64748B] peer relative z-10 bg-transparent" placeholder="Secure Email Route" type="email"/>
<div className="input-highlight absolute bottom-0 left-0 w-full h-0.5 bg-[#CCFF00] scale-x-0 transition-transform origin-left z-20"></div>
<div className="absolute inset-0 bg-[#0A0E14] z-0"></div>
</div>
<div className="mt-6 flex justify-center">
<button className="btn-cyber relative overflow-hidden bg-[#CCFF00] text-[#040608] font-syne font-bold uppercase tracking-widest text-xs h-14 px-12 w-full sm:w-auto flex items-center justify-center group shadow-[0_0_20px_rgba(204,255,0,0.2)] hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] transition-shadow" type="button">
<span className="relative z-10 flex items-center gap-2 group-hover:text-[#F1F5F9] transition-colors">
                            Transmit Credentials <iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon>
</span>
</button>
</div>
</form>
<div className="mt-8 font-mono text-[0.6rem] text-[#64748B] uppercase tracking-widest reveal delay-3 flex items-center justify-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse"></span> Encrypted 256-bit connection
            </div>
</div>
</section>

<footer className="bg-[#040608] border-t border-[#1E293B] pt-16 pb-8">
<div className="w-full max-w-[80rem] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
<div className="flex items-center gap-3">
<svg className="w-6 h-6" fill="none" viewbox="0 0 24 24">
<rect height="20" stroke="#CCFF00" stroke-dasharray="4 4" strokeWidth="1.5" width="20" x="2" y="2"></rect>
<path d="M12 2L22 22H2L12 2Z" stroke="#F1F5F9" strokeLinejoin="bevel" strokeWidth="1.5"></path>
</svg>
<span className="font-syne font-bold text-xl tracking-tight uppercase text-[#F1F5F9]">Vektral</span>
</div>
<div className="flex gap-6 font-mono text-[0.65rem] text-[#64748B] uppercase tracking-widest">
<span>NYC_</span>
<span>LDN_</span>
<span>SGP_</span>
</div>
</div>
<div className="border-t border-[#1E293B] pt-8 flex flex-col sm:flex-row justify-between items-center font-mono text-[0.6rem] text-[#64748B] gap-4 uppercase tracking-widest">
<div>© 2025 Vektral Capital Management LLC</div>
<div className="flex gap-4">
<span>Not an offer to sell</span>
<span className="hidden sm:inline">|</span>
<span>Form ADV on request</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
