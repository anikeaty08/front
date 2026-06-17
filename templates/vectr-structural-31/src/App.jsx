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



        // --- Custom Vanilla JS "WebGL-Style" Structural Canvas Background ---
        const canvas = document.getElementById('structural-grid');
        const ctx = canvas.getContext('2d');
        
        let width, height, particles;
        const particleCount = window.innerWidth < 768 ? 40 : 100;
        const connectionDistance = 150;
        
        let mouse = { x: null, y: null, radius: 200 };

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        window.addEventListener('mouseout', () => {
            mouse.x = undefined;
            mouse.y = undefined;
        });

        function initCanvas() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                this.baseX = this.x;
                this.baseY = this.y;
            }
            update() {
                // Movement
                this.x += this.vx;
                this.y += this.vy;

                // Bounce
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Mouse interaction (Repel)
                if (mouse.x != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouse.radius - distance) / mouse.radius;
                        this.x -= forceDirectionX * force * 5;
                        this.y -= forceDirectionY * force * 5;
                    } else {
                        // Return to base slowly
                        this.x -= (this.x - this.baseX) * 0.01;
                        this.y -= (this.y - this.baseY) * 0.01;
                    }
                }
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = '#FF3300';
                ctx.fill();
            }
        }

        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            
            // Draw particles
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
                
                // Draw connections
                for (let j = i; j < particles.length; j++) {
                    let dx = particles[i].x - particles[j].x;
                    let dy = particles[i].y - particles[j].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255, 242, 238, ${1 - distance/connectionDistance})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animateCanvas);
        }

        window.addEventListener('resize', initCanvas);
        initCanvas();
        animateCanvas();
        // --- End Canvas ---

        // Scroll Revel Animations
        document.addEventListener("DOMContentLoaded", () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8', 'translate-y-4', 'translate-x-[-2rem]', 'translate-x-[2rem]', 'scale-95');
                        entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0', 'scale-100');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

            document.querySelectorAll('.reveal-element').forEach((el) => observer.observe(el));

            // Custom Hover Image logic for Trophies section
            const rows = document.querySelectorAll('.project-row');
            const hoverContainer = document.getElementById('hover-image-container');
            const hoverImage = document.getElementById('hover-image');

            rows.forEach(row => {
                row.addEventListener('mouseenter', (e) => {
                    const imgSrc = row.getAttribute('data-img');
                    if(imgSrc && window.innerWidth >= 1024) {
                        hoverImage.src = imgSrc;
                        hoverContainer.style.opacity = '1';
                        hoverContainer.style.transform = 'translate(-50%, -50%) scale(1)';
                    }
                });
                row.addEventListener('mouseleave', () => {
                    hoverContainer.style.opacity = '0';
                    hoverContainer.style.transform = 'translate(-50%, -50%) scale(0.95)';
                });
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
      

<nav className="fixed top-0 w-full z-[100] glass-panel h-[72px] flex items-center justify-between px-6 md:px-12 border-b border-[#F3F2EE]/10">
<div className="flex items-center gap-6 w-full md:w-1/3">
<a className="flex items-center gap-3 group relative" href="#">
<svg className="group-hover:stroke-[#FF3300] transition-colors duration-300" fill="none" height="28" stroke="#F3F2EE" strokeWidth="2" viewbox="0 0 40 40" width="28">
<path className="logo-path" d="M 5,35 L 20,5 L 35,35 M 12,21 L 28,21"></path>
</svg>
<span className="font-sans font-semibold tracking-tighter text-[1.25rem] text-[#F3F2EE]">VECTR</span>
</a>
</div>
<div className="hidden md:flex justify-center gap-8 w-1/3">
<a className="text-[0.875rem] font-mono tracking-widest text-[#888888] hover:text-[#F3F2EE] transition-colors relative group uppercase" href="#yield">
                Yield Data
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-[#FF3300] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
</a>
<a className="text-[0.875rem] font-mono tracking-widest text-[#888888] hover:text-[#F3F2EE] transition-colors relative group uppercase" href="#engine">
                The Engine
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-[#FF3300] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
</a>
<a className="text-[0.875rem] font-mono tracking-widest text-[#888888] hover:text-[#F3F2EE] transition-colors relative group uppercase" href="#trophies">
                Trophies
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-[#FF3300] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
</a>
</div>
<div className="hidden md:flex justify-end w-1/3">
<a className="btn-cut h-[40px] px-6 bg-[#F3F2EE] text-[#0A0A0A] flex items-center gap-2 text-[0.875rem] font-medium hover:bg-[#FF3300] hover:text-[#F3F2EE] transition-colors duration-300 group" href="#commission">
<span className="relative z-10 flex items-center gap-2">
                    Initiate Protocol
                    <iconify-icon className="text-[1.25rem] group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
</div>
</nav>

<header className="relative min-h-[100dvh] pt-[140px] pb-24 px-6 md:px-12 flex flex-col justify-center overflow-hidden bg-[#0A0A0A]">

<canvas className="absolute inset-0 z-0 opacity-40" id="structural-grid"></canvas>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A] z-0"></div>
<div className="max-w-[1800px] mx-auto w-full relative z-10 pointer-events-none">
<div className="flex items-center justify-between mb-16 font-mono text-[0.75rem] tracking-[0.2em] uppercase text-[#888888] reveal-element opacity-0 translate-y-4 transition-all duration-1000">
<div className="flex items-center gap-3">
<span className="w-[8px] h-[8px] bg-[#FF3300] animate-pulse"></span>
                    SYS. ONLINE / YIELD OPTIMIZATION ACTIVE
                </div>
<div className="hidden md:block">LAT 40.7128° N / LON 74.0060° W</div>
</div>
<h1 className="font-serif text-[clamp(3.5rem,8.5vw,10.5rem)] leading-[0.85] tracking-tighter w-full max-w-[1500px] text-[#F3F2EE]">
<span className="block reveal-element opacity-0 translate-y-8 transition-all duration-1000 delay-100">
                    We don't design for vanity.
                </span>
<span className="block reveal-element opacity-0 translate-y-8 transition-all duration-1000 delay-200">
                    We engineer assets that
                </span>
<span className="block reveal-element opacity-0 translate-y-8 transition-all duration-1000 delay-300 text-[#FF3300] italic font-light">
                    dominate markets.
                </span>
</h1>
<div className="mt-[10vh] grid grid-cols-1 md:grid-cols-12 gap-8 items-end reveal-element opacity-0 transition-all duration-1000 delay-500">
<div className="md:col-span-4 font-sans text-[1.125rem] text-[#A0A0A0] leading-[1.6]">
                    Pure yield. Zero fluff. VECTR deploys aggressive structural engineering and data-driven site intelligence to compress timelines and maximize ROI for institutional developers.
                </div>
<div className="md:col-span-8 flex flex-col sm:flex-row justify-end gap-4 sm:gap-6 pointer-events-auto">
<a className="btn-cut h-[56px] px-8 bg-[#FF3300] text-[#F3F2EE] flex items-center justify-center gap-3 text-[1rem] font-medium transition-colors hover:bg-[#CC2900] group" href="#engine">
<span className="relative z-10 flex items-center gap-2">
                            Deploy Intelligence
                            <iconify-icon className="text-[1.5rem]" icon="solar:cpu-linear"></iconify-icon>
</span>
</a>
<a className="btn-outline-cut h-[56px] px-8 bg-[#F3F2EE] text-[#F3F2EE] flex items-center justify-center gap-3 text-[1rem] font-medium transition-colors hover:bg-[#F3F2EE] hover:text-[#0A0A0A] group z-10" href="#trophies">
<span className="relative z-10 flex items-center gap-2">
                            View Case Studies
                            <iconify-icon className="text-[1.5rem]" icon="solar:chart-square-linear"></iconify-icon>
</span>
</a>
</div>
</div>
</div>
</header>

<section className="bg-[#F3F2EE] text-[#0A0A0A] py-24 border-t border-[#0A0A0A]/10 relative" id="yield">
<div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#0A0A0A 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6">
<div className="reveal-element opacity-0 translate-y-8 transition-all duration-1000">
<div className="font-mono text-[0.75rem] text-[#888888] tracking-widest uppercase mb-6 flex justify-between border-b border-[#0A0A0A]/20 pb-2">
<span>Metric 01</span>
<span>[ACCEL]</span>
</div>
<div className="font-serif text-[4rem] leading-none tracking-tighter mb-2">32<span className="text-[2rem] text-[#FF3300]">%</span></div>
<div className="font-sans font-medium text-[1rem] mb-2">Build-Time Compression</div>
<p className="font-sans text-[0.875rem] text-[#555555]">Proprietary pre-fabrication logic reduces on-site labor dependencies.</p>
</div>
<div className="reveal-element opacity-0 translate-y-8 transition-all duration-1000 delay-100">
<div className="font-mono text-[0.75rem] text-[#888888] tracking-widest uppercase mb-6 flex justify-between border-b border-[#0A0A0A]/20 pb-2">
<span>Metric 02</span>
<span>[YIELD]</span>
</div>
<div className="font-serif text-[4rem] leading-none tracking-tighter mb-2">18<span className="text-[2rem] text-[#FF3300]">.4%</span></div>
<div className="font-sans font-medium text-[1rem] mb-2">Avg. IRR Uplift</div>
<p className="font-sans text-[0.875rem] text-[#555555]">Spatial optimization algorithms increase leasable square footage within rigid zoning.</p>
</div>
<div className="reveal-element opacity-0 translate-y-8 transition-all duration-1000 delay-200">
<div className="font-mono text-[0.75rem] text-[#888888] tracking-widest uppercase mb-6 flex justify-between border-b border-[#0A0A0A]/20 pb-2">
<span>Metric 03</span>
<span>[SCALE]</span>
</div>
<div className="font-serif text-[4rem] leading-none tracking-tighter mb-2">1.2<span className="text-[2rem] text-[#FF3300]">B</span></div>
<div className="font-sans font-medium text-[1rem] mb-2">Assets Deployed</div>
<p className="font-sans text-[0.875rem] text-[#555555]">Capital value of structures engineered and delivered since Q1 2020.</p>
</div>
<div className="reveal-element opacity-0 translate-y-8 transition-all duration-1000 delay-300 bg-[#0A0A0A] text-[#F3F2EE] p-6 btn-cut flex flex-col justify-between group cursor-pointer hover:bg-[#FF3300] transition-colors duration-500">
<div>
<div className="font-mono text-[0.75rem] text-[#888888] group-hover:text-[#F3F2EE]/70 tracking-widest uppercase mb-6 flex justify-between border-b border-[#F3F2EE]/20 pb-2">
<span>Status</span>
<span className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> ACCEPTING</span>
</div>
<div className="font-serif text-[2.5rem] leading-none tracking-tighter mb-2">Book an Audit</div>
<p className="font-sans text-[0.875rem] text-[#A0A0A0] group-hover:text-[#F3F2EE]/90">Run your site parameters through our engine.</p>
</div>
<div className="flex justify-end mt-8">
<iconify-icon className="text-[2rem] group-hover:scale-110 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] py-32 md:py-48 overflow-hidden relative border-t border-[#333333]" id="engine">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#111111] to-transparent opacity-50 z-0"></div>
<div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-4 reveal-element opacity-0 translate-x-[-2rem] transition-all duration-1000">
<div className="font-mono text-[0.75rem] tracking-[0.2em] text-[#FF3300] uppercase mb-8 flex items-center gap-3">
<iconify-icon className="text-[1.25rem]" icon="solar:code-scan-linear"></iconify-icon>
                        PROPRIETARY TECH
                    </div>
<h2 className="font-serif text-[clamp(2.5rem,4vw,4.5rem)] leading-[1] tracking-tighter mb-6">
                        Stop guessing. <br/>Start <span className="italic font-light text-[#888888]">computing</span>.
                    </h2>
<p className="font-sans text-[1.125rem] text-[#A0A0A0] leading-[1.6] mb-8">
                        Our custom VECTR-CORE engine ingests zoning laws, topographical scans, and live material costs to generate mathematically perfect massing models. We eliminate human error before ground is broken.
                    </p>
<ul className="flex flex-col gap-4 font-mono text-[0.875rem] text-[#F3F2EE]">
<li className="flex items-center gap-4 border-b border-[#333333] pb-4"><iconify-icon className="text-[#FF3300]" icon="solar:check-circle-linear"></iconify-icon> Live Supply Chain Integration</li>
<li className="flex items-center gap-4 border-b border-[#333333] pb-4"><iconify-icon className="text-[#FF3300]" icon="solar:check-circle-linear"></iconify-icon> Automated Zoning Maximization</li>
<li className="flex items-center gap-4 border-b border-[#333333] pb-4"><iconify-icon className="text-[#FF3300]" icon="solar:check-circle-linear"></iconify-icon> Real-time ROI Forecasting</li>
</ul>
</div>

<div className="lg:col-span-8 reveal-element opacity-0 translate-x-[2rem] transition-all duration-1000">
<div className="glass-panel rounded-lg p-2 shadow-2xl relative group overflow-hidden">

<div className="absolute inset-0 w-full h-[10%] bg-gradient-to-b from-transparent via-[#FF3300]/10 to-transparent animate-scanline pointer-events-none z-50"></div>
<div className="bg-[#050505] rounded-[4px] border border-[#333333] overflow-hidden flex flex-col h-[600px]">

<div className="h-[48px] border-b border-[#333333] bg-[#0A0A0A] flex items-center justify-between px-4 font-mono text-[0.65rem] text-[#888888]">
<div className="flex items-center gap-4">
<div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-[#333333]"></div><div className="w-2.5 h-2.5 rounded-full bg-[#333333]"></div><div className="w-2.5 h-2.5 rounded-full bg-[#333333]"></div></div>
<span className="text-[#F3F2EE]">VECTR-CORE v4.2.1</span>
</div>
<div className="flex gap-4 uppercase">
<span>Model: Alpha-7</span>
<span className="text-[#FF3300]">LIVE SYNC</span>
</div>
</div>

<div className="flex-1 flex p-4 gap-4">

<div className="w-[200px] border-r border-[#333333] pr-4 flex flex-col gap-6">
<div>
<div className="font-mono text-[0.65rem] text-[#555555] uppercase mb-3">Parameters</div>
<div className="flex flex-col gap-2">
<div className="h-6 bg-[#1A1A1A] rounded-[2px] flex items-center px-2 font-mono text-[0.65rem] text-[#F3F2EE] justify-between border border-[#FF3300]/30"><span>FAR Limit</span> <span>12.0</span></div>
<div className="h-6 bg-[#111111] rounded-[2px] flex items-center px-2 font-mono text-[0.65rem] text-[#A0A0A0] justify-between"><span>Setbacks</span> <span>Active</span></div>
<div className="h-6 bg-[#111111] rounded-[2px] flex items-center px-2 font-mono text-[0.65rem] text-[#A0A0A0] justify-between"><span>Wind Load</span> <span>Cat 3</span></div>
</div>
</div>
<div>
<div className="font-mono text-[0.65rem] text-[#555555] uppercase mb-3">Material Cost Live</div>
<div className="flex flex-col gap-3">
<div>
<div className="flex justify-between font-mono text-[0.65rem] mb-1"><span className="text-[#A0A0A0]">Steel (T)</span> <span className="text-[#FF3300]">+$12.4</span></div>
<div className="h-1 w-full bg-[#333333]"><div className="h-full bg-[#FF3300] w-[70%]"></div></div>
</div>
<div>
<div className="flex justify-between font-mono text-[0.65rem] mb-1"><span className="text-[#A0A0A0]">Concrete (Y)</span> <span className="text-green-500">-$4.2</span></div>
<div className="h-1 w-full bg-[#333333]"><div className="h-full bg-green-500 w-[40%]"></div></div>
</div>
</div>
</div>
</div>

<div className="flex-1 relative border border-[#333333] bg-[#0A0A0A] rounded-[2px] overflow-hidden flex items-center justify-center group-hover:border-[#FF3300]/50 transition-colors">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<svg className="opacity-80" height="80%" viewbox="0 0 200 300" width="100%">
<g className="animate-[pulse_4s_ease-in-out_infinite]" fill="none" stroke="#F3F2EE" strokeWidth="0.5">
<polygon fill="rgba(255,51,0,0.05)" points="50,250 150,250 150,50 50,100" stroke="#FF3300"></polygon>
<line x1="50" x2="20" y1="250" y2="280"></line>
<line x1="150" x2="180" y1="250" y2="280"></line>
<polygon points="20,280 180,280 180,80 20,130" stroke="#555555" stroke-dasharray="2,2"></polygon>
<line x1="50" x2="20" y1="100" y2="130"></line>
<line x1="150" x2="180" y1="50" y2="80"></line>

<line x1="50" x2="150" y1="200" y2="200"></line><line stroke="#555" x1="20" x2="180" y1="230" y2="230"></line>
<line x1="50" x2="150" y1="150" y2="150"></line><line stroke="#555" x1="20" x2="180" y1="180" y2="180"></line>
</g>
</svg>

<div className="absolute top-10 right-10 bg-[#0A0A0A] border border-[#FF3300] p-2 font-mono text-[0.65rem]">
<div className="text-[#A0A0A0]">GROSS AREA</div>
<div className="text-[#F3F2EE] text-[1rem]">42,000 SQM</div>
</div>
<div className="absolute bottom-10 left-10 bg-[#0A0A0A] border border-[#333333] p-2 font-mono text-[0.65rem]">
<div className="text-[#A0A0A0]">STRUCTURAL LOAD</div>
<div className="text-green-500">WITHIN TOLERANCE</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F3F2EE] text-[#0A0A0A] py-32 border-t border-[#0A0A0A]/10">
<div className="max-w-[1600px] mx-auto px-6 md:px-12">
<div className="font-mono text-[0.75rem] tracking-[0.2em] text-[#888888] uppercase mb-16 reveal-element opacity-0 translate-y-4 transition-all duration-1000">
                / CORE CAPABILITIES
            </div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="bg-white p-8 border border-[#0A0A0A]/10 btn-cut group hover:bg-[#0A0A0A] transition-colors duration-500 reveal-element opacity-0 translate-y-8">
<iconify-icon className="text-[2.5rem] text-[#0A0A0A] group-hover:text-[#FF3300] mb-8 transition-colors" icon="solar:ruler-cross-pen-linear"></iconify-icon>
<h3 className="font-serif text-[2rem] tracking-tight mb-4 group-hover:text-[#F3F2EE] transition-colors">Site Domination</h3>
<p className="font-sans text-[1rem] text-[#555555] group-hover:text-[#A0A0A0] transition-colors">We don't design to context; we dictate it. Total utilization of site geometry to maximize rentable area.</p>
</div>

<div className="bg-[#0A0A0A] text-[#F3F2EE] p-8 border border-[#0A0A0A] btn-cut group hover:bg-[#FF3300] transition-colors duration-500 reveal-element opacity-0 translate-y-8 delay-100">
<iconify-icon className="text-[2.5rem] text-[#FF3300] group-hover:text-[#F3F2EE] mb-8 transition-colors" icon="solar:buildings-linear"></iconify-icon>
<h3 className="font-serif text-[2rem] tracking-tight mb-4">Value Engineering</h3>
<p className="font-sans text-[1rem] text-[#A0A0A0] group-hover:text-[#F3F2EE]/90 transition-colors">Stripping away aesthetic excess. Every material choice is cross-referenced with live commodity pricing for ultimate margin protection.</p>
</div>

<div className="bg-white p-8 border border-[#0A0A0A]/10 btn-cut group hover:bg-[#0A0A0A] transition-colors duration-500 reveal-element opacity-0 translate-y-8 delay-200">
<iconify-icon className="text-[2.5rem] text-[#0A0A0A] group-hover:text-[#FF3300] mb-8 transition-colors" icon="solar:stopwatch-linear"></iconify-icon>
<h3 className="font-serif text-[2rem] tracking-tight mb-4 group-hover:text-[#F3F2EE] transition-colors">Timeline Compression</h3>
<p className="font-sans text-[1rem] text-[#555555] group-hover:text-[#A0A0A0] transition-colors">Parallel processing of zoning, engineering, and procurement. We cut months off the critical path.</p>
</div>
</div>
</div>
</section>

<div className="bg-[#FF3300] text-[#F3F2EE] py-6 overflow-hidden flex whitespace-nowrap border-y border-[#0A0A0A]">
<div className="animate-marquee font-mono text-[1.25rem] tracking-[0.15em] font-medium uppercase flex items-center">
<span className="mx-8 uppercase">▪ Stop Speculating. Start Executing.</span>
<span className="mx-8 uppercase">▪ Maximize Yield.</span>
<span className="mx-8 uppercase">▪ Structural Honesty.</span>
<span className="mx-8 uppercase">▪ Dominate The Site.</span>
<span className="mx-8 uppercase">▪ Stop Speculating. Start Executing.</span>
<span className="mx-8 uppercase">▪ Maximize Yield.</span>
<span className="mx-8 uppercase">▪ Structural Honesty.</span>
<span className="mx-8 uppercase">▪ Dominate The Site.</span>
</div>
</div>

<section className="bg-[#0A0A0A] relative py-32 md:py-48 text-[#F3F2EE] border-t border-[#333333]" id="trophies">
<div className="max-w-[1600px] mx-auto px-6 md:px-12">
<div className="flex items-center justify-between border-b border-[#333333] pb-8 mb-16 reveal-element opacity-0 translate-y-4 transition-all duration-1000">
<div className="font-mono text-[0.75rem] tracking-[0.2em] text-[#888888] uppercase">
                    / 05 / COMPLETED ASSETS
                </div>
<div className="font-mono text-[0.75rem] tracking-[0.1em] text-[#FF3300] uppercase">
                    SORT: HIGHEST ROI
                </div>
</div>
<div className="flex flex-col w-full relative">

<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] aspect-[16/9] pointer-events-none opacity-0 scale-95 transition-all duration-500 z-50 hidden lg:block overflow-hidden glass-panel border border-[#FF3300]/30 shadow-[0_0_50px_rgba(255,51,0,0.1)]" id="hover-image-container">
<img alt="Project Preview" className="w-full h-full object-cover mix-blend-luminosity grayscale contrast-125" id="hover-image" src=""/>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] opacity-50"></div>
</div>

<a className="project-row group block border-b border-[#333333] py-12 md:py-16 relative reveal-element opacity-0 translate-y-8 transition-all duration-1000 hover:pl-8" data-img="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" href="#">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
<div className="md:col-span-1 font-mono text-[0.875rem] text-[#555555] group-hover:text-[#FF3300] transition-colors">01</div>
<div className="md:col-span-5">
<h3 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-tight text-[#F3F2EE] group-hover:text-[#FF3300] transition-colors">The Nexus Core</h3>
</div>
<div className="md:col-span-2 font-mono text-[0.875rem] text-[#888888] uppercase">Commercial HQ</div>
<div className="md:col-span-2 font-mono text-[0.875rem] text-[#F3F2EE] bg-[#1A1A1A] py-1 px-3 inline-flex self-start justify-center border border-[#333333]">+22% Yield</div>
<div className="md:col-span-2 flex justify-end">
<iconify-icon className="text-[2rem] text-[#555555] group-hover:text-[#F3F2EE] transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</a>

<a className="project-row group block border-b border-[#333333] py-12 md:py-16 relative reveal-element opacity-0 translate-y-8 transition-all duration-1000 delay-100 hover:pl-8" data-img="https://images.unsplash.com/photo-1541888051772-2d186c32145b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" href="#">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
<div className="md:col-span-1 font-mono text-[0.875rem] text-[#555555] group-hover:text-[#FF3300] transition-colors">02</div>
<div className="md:col-span-5">
<h3 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-tight text-[#F3F2EE] group-hover:text-[#FF3300] transition-colors">Vanguard Towers</h3>
</div>
<div className="md:col-span-2 font-mono text-[0.875rem] text-[#888888] uppercase">Mixed Use</div>
<div className="md:col-span-2 font-mono text-[0.875rem] text-[#F3F2EE] bg-[#1A1A1A] py-1 px-3 inline-flex self-start justify-center border border-[#333333]">8mo Accelerated</div>
<div className="md:col-span-2 flex justify-end">
<iconify-icon className="text-[2rem] text-[#555555] group-hover:text-[#F3F2EE] transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</a>

<a className="project-row group block border-b border-[#333333] py-12 md:py-16 relative reveal-element opacity-0 translate-y-8 transition-all duration-1000 delay-200 hover:pl-8" data-img="https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" href="#">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
<div className="md:col-span-1 font-mono text-[0.875rem] text-[#555555] group-hover:text-[#FF3300] transition-colors">03</div>
<div className="md:col-span-5">
<h3 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-tight text-[#F3F2EE] group-hover:text-[#FF3300] transition-colors">Sector 4 Logistics</h3>
</div>
<div className="md:col-span-2 font-mono text-[0.875rem] text-[#888888] uppercase">Industrial</div>
<div className="md:col-span-2 font-mono text-[0.875rem] text-[#F3F2EE] bg-[#1A1A1A] py-1 px-3 inline-flex self-start justify-center border border-[#333333]">Zero Waste</div>
<div className="md:col-span-2 flex justify-end">
<iconify-icon className="text-[2rem] text-[#555555] group-hover:text-[#F3F2EE] transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="bg-[#F3F2EE] text-[#0A0A0A] py-32 border-t border-[#0A0A0A]/10">
<div className="max-w-[1600px] mx-auto px-6 md:px-12">
<div className="mb-24 md:w-1/2 reveal-element opacity-0 translate-y-8 transition-all duration-1000">
<div className="font-mono text-[0.75rem] tracking-[0.2em] text-[#888888] uppercase mb-6">/ EXECUTION PROTOCOL</div>
<h2 className="font-serif text-[clamp(2.5rem,4vw,4.5rem)] leading-[1] tracking-tighter">
                    We don't negotiate with physics or markets.
                </h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-16">

<div className="reveal-element opacity-0 translate-y-8 transition-all duration-1000 relative">
<div className="font-mono text-[3rem] text-[#E0E0E0] leading-none mb-4 font-bold tracking-tighter">01</div>
<div className="h-[2px] w-full bg-[#0A0A0A]/10 mb-6 relative">
<div className="absolute top-0 left-0 h-full bg-[#FF3300] w-0 transition-all duration-1000 delay-300" style={{width: '100%'}}></div>
</div>
<h4 className="font-serif text-[1.5rem] tracking-tight mb-3">Data Ingestion</h4>
<p className="font-sans text-[0.875rem] text-[#555555]">We feed your site parameters, local zoning codes, and budget constraints into our engine to establish hard boundaries.</p>
</div>

<div className="reveal-element opacity-0 translate-y-8 transition-all duration-1000 delay-100 relative">
<div className="font-mono text-[3rem] text-[#E0E0E0] leading-none mb-4 font-bold tracking-tighter">02</div>
<div className="h-[2px] w-full bg-[#0A0A0A]/10 mb-6 relative">
<div className="absolute top-0 left-0 h-full bg-[#FF3300] w-0 transition-all duration-1000 delay-400" style={{width: '100%'}}></div>
</div>
<h4 className="font-serif text-[1.5rem] tracking-tight mb-3">Algorithmic Massing</h4>
<p className="font-sans text-[0.875rem] text-[#555555]">Thousands of spatial configurations are tested to find the single iteration that maximizes leasable area and minimizes structural redundancy.</p>
</div>

<div className="reveal-element opacity-0 translate-y-8 transition-all duration-1000 delay-200 relative">
<div className="font-mono text-[3rem] text-[#E0E0E0] leading-none mb-4 font-bold tracking-tighter">03</div>
<div className="h-[2px] w-full bg-[#0A0A0A]/10 mb-6 relative">
<div className="absolute top-0 left-0 h-full bg-[#FF3300] w-0 transition-all duration-1000 delay-500" style={{width: '100%'}}></div>
</div>
<h4 className="font-serif text-[1.5rem] tracking-tight mb-3">Material Decree</h4>
<p className="font-sans text-[0.875rem] text-[#555555]">A brutal reduction of material palettes, locked into live supply chain contracts to ensure price certainty before approval.</p>
</div>

<div className="reveal-element opacity-0 translate-y-8 transition-all duration-1000 delay-300 relative">
<div className="font-mono text-[3rem] text-[#E0E0E0] leading-none mb-4 font-bold tracking-tighter">04</div>
<div className="h-[2px] w-full bg-[#0A0A0A]/10 mb-6 relative">
<div className="absolute top-0 left-0 h-full bg-[#FF3300] w-0 transition-all duration-1000 delay-600" style={{width: '100%'}}></div>
</div>
<h4 className="font-serif text-[1.5rem] tracking-tight mb-3">Rapid Deployment</h4>
<p className="font-sans text-[0.875rem] text-[#555555]">Pre-fabrication logic dictates construction. The structure is assembled on-site with military precision, compressing the timeline.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] text-[#F3F2EE] py-24 border-t border-[#333333] overflow-hidden text-center relative">
<div className="max-w-[1200px] mx-auto px-6 reveal-element opacity-0 translate-y-8 transition-all duration-1000">
<h3 className="font-mono text-[0.875rem] tracking-[0.2em] text-[#888888] uppercase mb-12">Institutional Capital Deploys With Us</h3>
<div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale">

<iconify-icon className="text-[3rem] hover:text-[#FF3300] transition-colors" icon="solar:chart-square-linear"></iconify-icon>
<iconify-icon className="text-[3rem] hover:text-[#FF3300] transition-colors" icon="solar:global-linear"></iconify-icon>
<iconify-icon className="text-[3rem] hover:text-[#FF3300] transition-colors" icon="solar:buildings-2-linear"></iconify-icon>
<iconify-icon className="text-[3rem] hover:text-[#FF3300] transition-colors" icon="solar:safe-square-linear"></iconify-icon>
<iconify-icon className="text-[3rem] hover:text-[#FF3300] transition-colors" icon="solar:database-linear"></iconify-icon>
</div>
</div>
</section>

<footer className="bg-[#FF3300] text-[#0A0A0A] relative pt-32 pb-12 overflow-hidden" id="commission">
<div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none mix-blend-multiply">
<svg fill="none" height="40vw" stroke="#000" strokeWidth="1" viewbox="0 0 100 100" width="40vw">
<circle cx="50" cy="50" r="40"></circle>
<line x1="10" x2="90" y1="50" y2="50"></line>
<line x1="50" x2="50" y1="10" y2="90"></line>
</svg>
</div>
<div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-32">

<div className="reveal-element opacity-0 translate-y-8 transition-all duration-1000">
<h2 className="font-serif text-[clamp(3.5rem,6vw,6.5rem)] leading-[0.9] tracking-tighter mb-8 text-[#0A0A0A]">
                        Demand <br/>an unfair advantage.
                    </h2>
<p className="font-sans text-[1.25rem] font-medium leading-[1.4] max-w-[480px] mb-12">
                        We only accept commissions from institutional developers ready to abandon aesthetic vanity for mathematical yield. 
                    </p>
<div className="font-mono text-[0.875rem] font-bold text-[#0A0A0A] uppercase tracking-widest border-t border-[#0A0A0A]/20 pt-6">
                        Current Capacity: <span className="bg-[#0A0A0A] text-[#FF3300] px-2 py-1 ml-2">2 Projects / Q4</span>
</div>
</div>

<div className="reveal-element opacity-0 translate-y-8 transition-all duration-1000 delay-200">
<form className="flex flex-col gap-8 bg-[#F3F2EE] p-8 md:p-12 shadow-2xl btn-cut relative">
<div className="absolute top-0 right-0 w-16 h-16 bg-[#0A0A0A] flex items-center justify-center -translate-y-1/2 translate-x-1/2 rotate-45 hidden md:flex">
<iconify-icon className="text-[#F3F2EE] -rotate-45 text-[1.5rem]" icon="solar:lock-password-linear"></iconify-icon>
</div>
<div className="font-mono text-[0.75rem] tracking-widest text-[#555555] uppercase border-b border-[#0A0A0A]/10 pb-4">Secure Intake Protocol</div>
<div className="relative">
<input className="w-full bg-transparent border-b-2 border-[#0A0A0A]/20 py-4 text-[#0A0A0A] font-sans font-medium text-[1.125rem] focus:outline-none focus:border-[#FF3300] transition-colors peer placeholder-transparent rounded-none" id="name" placeholder="Developer Entity" type="text"/>
<label className="absolute left-0 top-4 font-mono text-[0.75rem] tracking-[0.1em] text-[#888888] transition-all peer-focus:-translate-y-6 peer-focus:text-[#FF3300] peer-valid:-translate-y-6 peer-valid:text-[#0A0A0A] pointer-events-none uppercase font-bold" htmlFor="name">Developer Entity</label>
</div>
<div className="relative">
<input className="w-full bg-transparent border-b-2 border-[#0A0A0A]/20 py-4 text-[#0A0A0A] font-sans font-medium text-[1.125rem] focus:outline-none focus:border-[#FF3300] transition-colors peer placeholder-transparent rounded-none" id="site" placeholder="Site Coordinates / Address" type="text"/>
<label className="absolute left-0 top-4 font-mono text-[0.75rem] tracking-[0.1em] text-[#888888] transition-all peer-focus:-translate-y-6 peer-focus:text-[#FF3300] peer-valid:-translate-y-6 peer-valid:text-[#0A0A0A] pointer-events-none uppercase font-bold" htmlFor="site">Site Coordinates / Address</label>
</div>
<div className="relative">
<input className="w-full bg-transparent border-b-2 border-[#0A0A0A]/20 py-4 text-[#0A0A0A] font-sans font-medium text-[1.125rem] focus:outline-none focus:border-[#FF3300] transition-colors peer placeholder-transparent rounded-none" id="budget" placeholder="Est. Capital ($M)" type="number"/>
<label className="absolute left-0 top-4 font-mono text-[0.75rem] tracking-[0.1em] text-[#888888] transition-all peer-focus:-translate-y-6 peer-focus:text-[#FF3300] peer-valid:-translate-y-6 peer-valid:text-[#0A0A0A] pointer-events-none uppercase font-bold" htmlFor="budget">Est. Capital Deployed ($M)</label>
</div>
<button className="mt-8 h-[64px] w-full bg-[#0A0A0A] text-[#F3F2EE] font-mono uppercase tracking-widest text-[0.875rem] font-bold hover:bg-[#FF3300] transition-all duration-300 flex items-center justify-center gap-3 group btn-outline-cut border-none" type="button">
<span className="relative z-10 flex items-center gap-2">
                                Submit Site Data
                                <iconify-icon className="text-[1.25rem] group-hover:-translate-y-1 transition-transform" icon="solar:upload-linear"></iconify-icon>
</span>
</button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#0A0A0A]/20 font-mono text-[0.65rem] tracking-[0.1em] text-[#0A0A0A] font-bold uppercase reveal-element opacity-0 transition-all duration-1000 delay-300">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<svg fill="none" height="16" stroke="#0A0A0A" strokeWidth="3" viewbox="0 0 40 40" width="16">
<path d="M 5,35 L 20,5 L 35,35 M 12,21 L 28,21"></path>
</svg>
<span>© 2026 VECTR SYSTEMS INC.</span>
</div>
<div className="flex gap-6">
<a className="hover:text-[#F3F2EE] transition-colors" href="#">Data Privacy</a>
<a className="hover:text-[#F3F2EE] transition-colors" href="#">Legal Framework</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
