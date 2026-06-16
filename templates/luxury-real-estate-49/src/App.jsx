import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // 1. Lenis Smooth Scroll Setup
            const lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                direction: 'vertical',
                gestureDirection: 'vertical',
                smooth: true,
                smoothTouch: false,
            });

            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);

            // 2. Intersection Observer for premium reliable reveals
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -50px 0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); 
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

            // 3. Astonishing WebGL-Style Canvas Background (Network Particles + Glow)
            const canvas = document.getElementById('ambient-canvas');
            const ctx = canvas.getContext('2d');
            let width, height;
            let particles = [];
            
            // Configuration
            const particleCount = window.innerWidth > 768 ? 80 : 40;
            const connectionDistance = 150;
            const mouseInteractionRadius = 200;
            
            let mouse = { x: null, y: null };

            window.addEventListener('mousemove', (e) => {
                mouse.x = e.x;
                mouse.y = e.y;
            });

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
                    this.size = Math.random() * 2 + 0.5;
                }
                update() {
                    this.x += this.vx;
                    this.y += this.vy;

                    // Bounce off edges
                    if (this.x < 0 || this.x > width) this.vx *= -1;
                    if (this.y < 0 || this.y > height) this.vy *= -1;
                    
                    // Mouse repulsion subtle effect
                    if (mouse.x != null && mouse.y != null) {
                        let dx = mouse.x - this.x;
                        let dy = mouse.y - this.y;
                        let distance = Math.sqrt(dx * dx + dy * dy);
                        if (distance < mouseInteractionRadius) {
                            let forceDirectionX = dx / distance;
                            let forceDirectionY = dy / distance;
                            let maxDistance = mouseInteractionRadius;
                            let force = (maxDistance - distance) / maxDistance;
                            let directionX = forceDirectionX * force * 0.5;
                            let directionY = forceDirectionY * force * 0.5;
                            this.x -= directionX;
                            this.y -= directionY;
                        }
                    }
                }
                draw() {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fillStyle = '#0A0B0C'; // Dark dots
                    ctx.fill();
                }
            }

            function initParticles() {
                particles = [];
                for (let i = 0; i < particleCount; i++) {
                    particles.push(new Particle());
                }
            }

            let gridOffset = 0;

            function animateCanvas() {
                ctx.clearRect(0, 0, width, height);
                
                // Draw flickering grid background
                ctx.strokeStyle = 'rgba(10, 11, 12, 0.05)';
                ctx.lineWidth = 1;
                gridOffset += 0.1;
                if(gridOffset > 40) gridOffset = 0;
                
                ctx.beginPath();
                for(let x = gridOffset; x < width; x += 40) {
                    ctx.moveTo(x, 0); ctx.lineTo(x, height);
                }
                for(let y = gridOffset; y < height; y += 40) {
                    ctx.moveTo(0, y); ctx.lineTo(width, y);
                }
                ctx.stroke();

                // Update and draw particles & network lines
                for (let i = 0; i < particles.length; i++) {
                    particles[i].update();
                    particles[i].draw();
                    
                    for (let j = i; j < particles.length; j++) {
                        let dx = particles[i].x - particles[j].x;
                        let dy = particles[i].y - particles[j].y;
                        let distance = Math.sqrt(dx * dx + dy * dy);
                        
                        if (distance < connectionDistance) {
                            ctx.beginPath();
                            ctx.strokeStyle = `rgba(10, 11, 12, ${0.15 - distance / connectionDistance * 0.15})`;
                            ctx.lineWidth = 1;
                            ctx.moveTo(particles[i].x, particles[i].y);
                            ctx.lineTo(particles[j].x, particles[j].y);
                            ctx.stroke();
                        }
                    }
                }
                
                requestAnimationFrame(animateCanvas);
            }
            
            initParticles();
            animateCanvas();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise-bg"></div>

<canvas className="fixed inset-0 z-0 w-full h-full pointer-events-none opacity-[0.15] mix-blend-difference" id="ambient-canvas"></canvas>

<nav className="fixed top-0 w-full z-50 pt-8 px-8 transition-transform duration-500 mix-blend-difference text-white font-mono text-xs uppercase tracking-widest hidden md:block">
<div className="max-w-[120rem] mx-auto flex items-start justify-between">

<div className="flex items-center gap-6">
<button className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors btn-advanced">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<a className="flex items-center gap-3 hover:opacity-70 transition-opacity" href="#">

<svg className="text-[#FF2E00]" fill="none" height="28" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="28">
<path d="M12 2L2 7L12 12L22 7L12 2Z" strokeLinejoin="round"></path>
<path d="M2 17L12 22L22 17" strokeLinejoin="round"></path>
<path d="M2 12L12 17L22 12" strokeLinejoin="round"></path>
</svg>
<span className="text-sm font-semibold tracking-[0.2em] mt-0.5">ONYX</span>
</a>
</div>

<div className="flex items-center gap-12 mt-2">
<a className="hover:text-[#FF2E00] transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[1px] after:bg-[#FF2E00] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300" href="#thesis">[ THE ALPHA ]</a>
<a className="hover:text-[#FF2E00] transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[1px] after:bg-[#FF2E00] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300" href="#intel">[ SURVEILLANCE ]</a>
<a className="hover:text-[#FF2E00] transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[1px] after:bg-[#FF2E00] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300" href="#portfolio">[ ASSETS ]</a>
<a className="hover:text-[#FF2E00] transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[1px] after:bg-[#FF2E00] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300" href="#protocol">[ EXECUTION ]</a>
</div>

<button className="bg-transparent border border-white text-white px-8 py-4 font-medium tracking-[0.15em] transition-all duration-300 btn-advanced">
<span>OPEN SECURE CHANNEL</span>
</button>
</div>
</nav>

<nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference text-white md:hidden">
<a className="flex items-center gap-2" href="#">
<svg className="text-[#FF2E00]" fill="none" height="24" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="24">
<path d="M12 2L2 7L12 12L22 7L12 2Z" strokeLinejoin="round"></path>
<path d="M2 17L12 22L22 17" strokeLinejoin="round"></path>
<path d="M2 12L12 17L22 12" strokeLinejoin="round"></path>
</svg>
<span className="text-sm font-semibold tracking-[0.2em] font-mono mt-0.5">ONYX</span>
</a>
<button className="w-10 h-10 border border-white/20 flex items-center justify-center btn-advanced">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</nav>

<section className="relative min-h-screen w-full flex flex-col justify-end pb-12 pt-40 px-6 md:px-12 z-10" id="index">

<div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-10">
<div className="font-mono text-xs text-[#686A6C] tracking-[0.2em]" style={{writingMode: 'vertical-rl', transform: 'rotate(180deg)'}}>
                NODE.01 // LAT: 48.8566° N
            </div>
<div className="w-6 h-6 rounded-full border border-[#0A0B0C] flex items-center justify-center text-[#0A0B0C] hover:bg-[#FF2E00] hover:border-[#FF2E00] hover:text-white transition-all cursor-pointer">
<iconify-icon className="text-sm" icon="solar:target-linear"></iconify-icon>
</div>
</div>
<div className="max-w-[100rem] mx-auto w-full grid grid-cols-12 gap-8 relative h-full flex-grow">

<div className="col-span-12 md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-9 reveal pt-8 md:pt-0">
<div className="bg-[#FDFDFD]/80 backdrop-blur-md border border-[#0A0B0C]/10 p-6 shadow-2xl relative group hover:border-[#FF2E00]/50 transition-colors duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-[#FF2E00]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="flex justify-between items-center border-b border-[#0A0B0C]/10 pb-4 mb-5">
<span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#686A6C] flex items-center gap-2">
<iconify-icon icon="solar:radar-linear"></iconify-icon> Radar Active
                        </span>
<div className="relative flex items-center justify-center">
<span className="w-2 h-2 rounded-full bg-[#FF2E00] relative z-10"></span>
<span className="w-2 h-2 rounded-full bg-[#FF2E00] absolute animate-ping opacity-75"></span>
</div>
</div>
<div className="space-y-4 font-mono text-xs tracking-wide">
<div className="flex justify-between items-center overflow-hidden">
<span className="text-[#686A6C]">INTERCEPT:</span>
<span className="text-[#0A0B0C] font-semibold">NY-TRB-804</span>
</div>
<div className="flex justify-between items-center overflow-hidden">
<span className="text-[#686A6C]">DELTA YIELD:</span>
<span className="text-[#0A0B0C]">+18.4% VS PUBLIC</span>
</div>
<div className="flex justify-between items-center overflow-hidden">
<span className="text-[#686A6C]">STATUS:</span>
<span className="text-[#FF2E00] font-semibold animate-pulse">LIQUIDATING</span>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-9 self-end pb-8 reveal delay-100 relative z-20">
<div className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF2E00] mb-6 flex items-center gap-3">
<span className="w-8 h-[1px] bg-[#FF2E00]"></span> Aggressive Growth. Zero Fluff.
                </div>
<h1 className="font-display font-semibold text-6xl md:text-8xl lg:text-[9.5rem] tracking-tighter uppercase leading-[0.85] text-[#0A0B0C] mb-8 mix-blend-darken">
                    Dominate the<br/>Unseen Market.
                </h1>
</div>
<div className="col-span-12 lg:col-span-5 lg:col-start-8 self-end pb-8 reveal delay-200 relative z-20">
<p className="font-body text-base lg:text-lg text-[#0A0B0C]/80 font-medium mb-10 leading-relaxed max-w-md">
                    Stop competing for public leftovers. We weaponize proprietary data algorithms to secure off-market, tier-one real estate before it ever reaches the public ledger. 
                </p>
<div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
<button className="bg-[#0A0B0C] text-white px-8 py-5 font-mono text-xs font-semibold uppercase tracking-[0.15em] btn-advanced flex items-center gap-3 border border-transparent shadow-xl">
<span>COMMENCE ACQUISITION</span>
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<a className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-[#0A0B0C] hover:text-[#FF2E00] transition-colors flex items-center gap-2 border-b border-[#0A0B0C]/20 hover:border-[#FF2E00] pb-1" href="#intel">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
                        OBSERVE THE ALPHA
                    </a>
</div>
</div>
</div>
</section>

<section className="border-y border-[#0A0B0C]/10 bg-[#FFFFFF] relative z-10" id="thesis">
<div className="max-w-[120rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#0A0B0C]/10">
<div className="p-10 lg:p-14 group hover:bg-[#FDFDFD] transition-colors relative overflow-hidden reveal">
<div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#686A6C] mb-16 flex justify-between items-center">
<span>/001/ Leverage</span>
<iconify-icon className="text-lg text-[#0A0B0C]/20 group-hover:text-[#FF2E00] transition-colors" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div className="font-display font-semibold text-5xl md:text-6xl tracking-tighter text-[#0A0B0C] mb-4 group-hover:-translate-y-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    82.4%
                </div>
<p className="font-body text-sm font-medium text-[#686A6C]">Off-market acquisition rate vs the saturated public sector.</p>
</div>
<div className="p-10 lg:p-14 group hover:bg-[#FDFDFD] transition-colors relative overflow-hidden reveal delay-100">
<div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#686A6C] mb-16 flex justify-between items-center">
<span>/002/ Target Volume</span>
<iconify-icon className="text-lg text-[#0A0B0C]/20 group-hover:text-[#FF2E00] transition-colors" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div className="font-display font-semibold text-5xl md:text-6xl tracking-tighter text-[#0A0B0C] mb-4 group-hover:-translate-y-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    $14.2M
                </div>
<p className="font-body text-sm font-medium text-[#686A6C]">Average secured asset value per tactical transaction.</p>
</div>
<div className="p-10 lg:p-14 group hover:bg-[#FDFDFD] transition-colors relative overflow-hidden reveal delay-200">
<div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#686A6C] mb-16 flex justify-between items-center">
<span>/003/ Velocity</span>
<iconify-icon className="text-lg text-[#0A0B0C]/20 group-hover:text-[#FF2E00] transition-colors" icon="solar:stopwatch-linear"></iconify-icon>
</div>
<div className="font-display font-semibold text-5xl md:text-6xl tracking-tighter text-[#0A0B0C] mb-4 group-hover:-translate-y-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    19 Days
                </div>
<p className="font-body text-sm font-medium text-[#686A6C]">Average time from mandate injection to binding contract.</p>
</div>
<div className="p-10 lg:p-14 group hover:bg-[#0A0B0C] transition-colors duration-500 relative overflow-hidden reveal delay-300">
<div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#686A6C] group-hover:text-white/50 mb-16 flex justify-between items-center transition-colors">
<span>/004/ Exposure</span>
<iconify-icon className="text-lg text-[#0A0B0C]/20 group-hover:text-[#FF2E00] transition-colors" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div className="font-display font-semibold text-5xl md:text-6xl tracking-tighter text-[#0A0B0C] group-hover:text-white transition-colors mb-4 relative inline-block group-hover:-translate-y-2 duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    Zero
                    <svg className="absolute inset-0 w-full h-full text-[#FF2E00] overflow-visible pointer-events-none" preserveaspectratio="none" viewbox="0 0 100 100">
<path className="group-hover:stroke-[#FF2E00] transition-colors duration-500" d="M-5,55 L105,45" fill="none" stroke="currentColor" strokeLinecap="square" strokeWidth="4"></path>
</svg>
</div>
<p className="font-body text-sm font-medium text-[#686A6C] group-hover:text-white/70 mt-4 transition-colors">Bidding wars bypass. We negotiate purely in a vacuum.</p>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 md:px-12 relative z-10 bg-[#F4F4F0]">
<div className="max-w-[100rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start relative">

<div className="lg:col-span-5 lg:sticky lg:top-40 reveal">
<div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0A0B0C] border border-[#0A0B0C]/20 px-4 py-2 inline-flex items-center gap-2 mb-10 bg-white shadow-sm">
<iconify-icon icon="solar:danger-triangle-linear"></iconify-icon> THE DISPARITY
                </div>
<h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-[4rem] uppercase tracking-tighter leading-[0.95] text-[#0A0B0C] mb-8">
                    The public market is a trailing indicator.
                </h2>
<p className="font-body text-base lg:text-lg text-[#686A6C] font-medium leading-relaxed max-w-md mb-8">
                    Public listings are exhausted assets. By the time a property hits the market, the true value has been extracted by insiders. We don't browse public databases. 
                </p>
<p className="font-body text-base lg:text-lg text-[#0A0B0C] font-semibold leading-relaxed max-w-md border-l-2 border-[#FF2E00] pl-6">
                    We target specific assets and manufacture liquidity directly from the source, granting you an absolute unfair advantage.
                </p>
</div>

<div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-16 lg:mt-32">
<div className="bg-white p-8 md:p-12 border border-[#0A0B0C]/10 hover:border-[#FF2E00]/30 hover:shadow-2xl transition-all duration-500 relative group reveal">
<div className="absolute top-0 right-0 w-16 h-16 border-l border-b border-[#0A0B0C]/10 flex items-center justify-center font-mono text-xs text-[#686A6C] bg-[#FDFDFD] group-hover:bg-[#0A0B0C] group-hover:text-white transition-colors">01</div>
<div className="aspect-[4/3] bg-[#EAEAEA] mb-10 overflow-hidden relative">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&amp;w=1200&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale contrast-125 opacity-90 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"></div>

<div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur border border-black/10 px-4 py-3 font-mono text-[10px] font-semibold tracking-widest text-black flex flex-col gap-1 shadow-lg">
<span className="text-[#686A6C]">ALGORITHM STATUS</span>
<span className="flex items-center gap-2"><span className="w-2 h-2 bg-[#FF2E00] rounded-full animate-data-pulse"></span> INTERCEPTING SIGNAL</span>
</div>
</div>
<h3 className="font-display font-semibold text-2xl lg:text-3xl tracking-tight uppercase text-[#0A0B0C] mb-4">Proprietary Deal Flow</h3>
<p className="font-body text-base font-medium text-[#686A6C] leading-relaxed">
                        Algorithms map distressed assets, corporate restructuring, and portfolio liquidations. We initiate contact directly with owners weeks before brokers get the call.
                    </p>
</div>
<div className="bg-white p-8 md:p-12 border border-[#0A0B0C]/10 hover:border-[#FF2E00]/30 hover:shadow-2xl transition-all duration-500 relative group reveal lg:-ml-24">
<div className="absolute top-0 right-0 w-16 h-16 border-l border-b border-[#0A0B0C]/10 flex items-center justify-center font-mono text-xs text-[#686A6C] bg-[#FDFDFD] group-hover:bg-[#0A0B0C] group-hover:text-white transition-colors">02</div>
<div className="aspect-[4/3] bg-[#EAEAEA] mb-10 overflow-hidden relative">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&amp;w=1200&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale contrast-125 opacity-90 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"></div>
<div className="absolute top-4 right-4 bg-[#0A0B0C]/95 backdrop-blur border border-white/10 px-4 py-3 font-mono text-[10px] font-semibold tracking-widest text-white flex flex-col gap-1 shadow-lg items-end">
<span className="text-[#686A6C]">CHANNEL</span>
<span className="flex items-center gap-2 text-[#00E5FF]"><iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon> ENCRYPTED COMMS</span>
</div>
</div>
<h3 className="font-display font-semibold text-2xl lg:text-3xl tracking-tight uppercase text-[#0A0B0C] mb-4">Ruthless Negotiation</h3>
<p className="font-body text-base font-medium text-[#686A6C] leading-relaxed">
                        We represent the buyer, exclusively. No dual agency. No compromised interests. Just maximum leverage applied directly to the seller to ensure aggressive asset capture.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] text-[#F4F4F0] py-32 md:py-48 relative overflow-hidden z-10 border-t border-white/10" id="intel">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none"></div>
<div className="max-w-[100rem] mx-auto px-6 md:px-12 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
<div className="lg:col-span-5 reveal">
<div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F4F4F0] border border-white/20 px-4 py-2 inline-flex items-center gap-2 mb-10 bg-white/5 backdrop-blur-sm">
<iconify-icon icon="solar:server-square-linear"></iconify-icon> TERMINAL ACCESS
                    </div>
<h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-[0.95] mb-8">
                        Data over emotion.
                    </h2>
<p className="font-body text-base lg:text-lg text-[#686A6C] font-medium leading-relaxed max-w-md mb-12">
                        Peek inside the proprietary terminal our operatives use to outmaneuver the open market. Real-time scanning of distressed capital, zoning shifts, and off-market whispers translates directly to unparalleled asset yields.
                    </p>
<button className="bg-white text-[#0A0B0C] px-8 py-5 font-mono text-xs font-semibold uppercase tracking-[0.15em] btn-advanced flex items-center gap-3">
<span>REQUEST SECURE KEY</span>
<iconify-icon className="text-lg" icon="solar:key-linear"></iconify-icon>
</button>
</div>

<div className="lg:col-span-7 relative reveal delay-200">
<div className="border border-white/10 bg-[#0A0B0C]/80 backdrop-blur-xl p-1 relative shadow-[0_0_80px_rgba(255,46,0,0.05)] rounded-sm">
<div className="border border-white/5 bg-[#0F0F0F] p-4">

<div className="flex justify-between items-center mb-6 px-2 font-mono text-[10px] font-semibold text-[#686A6C] tracking-[0.2em]">
<div className="flex items-center gap-6">
<span className="flex items-center gap-2 text-white"><div className="w-2 h-2 bg-[#FF2E00] rounded-sm animate-pulse"></div> SYS_ONLINE</span>
<span className="hidden sm:inline border-l border-white/10 pl-6">ACTIVE NODES: 1,042</span>
</div>
<div className="flex gap-2">
<div className="w-5 h-5 border border-white/10 flex items-center justify-center hover:bg-white/10 cursor-pointer"><iconify-icon icon="solar:minus-linear"></iconify-icon></div>
<div className="w-5 h-5 border border-white/10 flex items-center justify-center hover:bg-white/10 cursor-pointer"><iconify-icon icon="solar:stop-linear"></iconify-icon></div>
<div className="w-5 h-5 border border-white/10 flex items-center justify-center hover:bg-[#FF2E00] hover:border-[#FF2E00] cursor-pointer text-white transition-colors"><iconify-icon icon="solar:close-linear"></iconify-icon></div>
</div>
</div>

<div className="aspect-[16/10] relative w-full border border-white/10 bg-[#050505] overflow-hidden group">

<div className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF2E00] to-transparent shadow-[0_0_20px_#FF2E00] z-20 animate-scan"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%),linear-gradient(rgba(255,46,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,46,0,0.05)_1px,transparent_1px)] bg-[size:100%_100%,32px_32px,32px_32px]"></div>

<div className="absolute top-[35%] left-[42%] group/node cursor-crosshair z-30">
<div className="w-3 h-3 bg-[#FF2E00] rounded-sm relative z-10 shadow-[0_0_10px_#FF2E00]"></div>
<div className="absolute inset-0 bg-[#FF2E00] rounded-sm animate-ping opacity-40"></div>
<div className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 border border-[#FF2E00]/30 rounded-full animate-[spin_4s_linear_infinite] pointer-events-none"></div>

<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 hidden group-hover/node:flex flex-col border border-white/20 bg-[#0A0B0C]/95 backdrop-blur-md p-4 font-mono text-[10px] text-white w-56 shadow-2xl z-50">
<div className="flex justify-between items-end border-b border-white/10 pb-3 mb-3">
<span className="text-[#686A6C] tracking-widest">ASSET_ID</span>
<span className="text-xs font-semibold text-[#FF2E00]">LDN-W1K-09</span>
</div>
<div className="space-y-2 font-medium tracking-wide">
<div className="flex justify-between"><span className="text-[#686A6C]">EST. VALUE</span><span>$24.5M</span></div>
<div className="flex justify-between"><span className="text-[#686A6C]">NEGOTIABLE</span><span className="text-[#00E5FF]">YES (-18%)</span></div>
<div className="flex justify-between"><span className="text-[#686A6C]">TRIGGER</span><span>DISTRESSED</span></div>
</div>
</div>
</div>
<div className="absolute top-[65%] left-[68%] group/node cursor-crosshair z-30">
<div className="w-2 h-2 bg-white rounded-sm relative z-10 opacity-70"></div>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 hidden group-hover/node:flex flex-col border border-white/20 bg-[#0A0B0C]/95 backdrop-blur-md p-4 font-mono text-[10px] text-white w-56 shadow-2xl z-50">
<div className="flex justify-between items-end border-b border-white/10 pb-3 mb-3">
<span className="text-[#686A6C] tracking-widest">ASSET_ID</span>
<span className="text-xs font-semibold text-white">PAR-08E-12</span>
</div>
<div className="space-y-2 font-medium tracking-wide">
<div className="flex justify-between"><span className="text-[#686A6C]">EST. VALUE</span><span>$12.8M</span></div>
<div className="flex justify-between"><span className="text-[#686A6C]">NEGOTIABLE</span><span>NO DATA</span></div>
<div className="flex justify-between"><span className="text-[#686A6C]">TRIGGER</span><span>PRE-MARKET</span></div>
</div>
</div>
</div>
</div>

<div className="mt-4 border-t border-white/10 pt-4 flex justify-between items-center font-mono text-[10px] font-semibold text-[#686A6C] tracking-[0.2em] overflow-hidden">
<div className="flex animate-pulse text-[#FF2E00]">
                                    &gt; AWAITING DIRECTIVES_
                                </div>
<div className="flex gap-4">
<span className="border border-white/10 px-2 py-1">LAT:48.88</span>
<span className="border border-white/10 px-2 py-1">LNG:2.352</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FDFDFD] relative z-10 border-y border-[#0A0B0C]/10">
<div className="max-w-[100rem] mx-auto px-6 md:px-12 relative">
<div className="mb-20 reveal flex flex-col md:flex-row justify-between items-end gap-8 border-b border-[#0A0B0C]/10 pb-12">
<div>
<div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0A0B0C] border border-[#0A0B0C]/20 px-4 py-2 inline-flex items-center gap-2 mb-8 bg-white shadow-sm">
<iconify-icon icon="solar:shield-network-linear"></iconify-icon> THE ARSENAL
                    </div>
<h2 className="font-display font-semibold text-4xl md:text-5xl uppercase tracking-tighter text-[#0A0B0C]">Asymmetric Capabilities.</h2>
</div>
<p className="font-body text-base font-medium text-[#686A6C] max-w-sm leading-relaxed">
                    We deploy institutional-grade tactical infrastructure to ensure your acquisitions are executed flawlessly, quietly, and ruthlessly.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group p-8 border border-[#0A0B0C]/10 bg-white hover:border-[#FF2E00]/50 hover:shadow-2xl transition-all duration-500 reveal">
<div className="w-14 h-14 bg-[#0A0B0C] text-white flex items-center justify-center mb-8 group-hover:bg-[#FF2E00] transition-colors btn-advanced">
<iconify-icon className="text-2xl" icon="solar:global-linear"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-2xl uppercase tracking-tight text-[#0A0B0C] mb-4">Algorithmic Sourcing</h3>
<p className="font-body text-sm font-medium text-[#686A6C] leading-relaxed">
                        Our intelligence network monitors 40+ global data points, identifying off-market liquidation events before the owners themselves realize the need to sell.
                    </p>
</div>
<div className="group p-8 border border-[#0A0B0C]/10 bg-white hover:border-[#FF2E00]/50 hover:shadow-2xl transition-all duration-500 reveal delay-100">
<div className="w-14 h-14 bg-[#0A0B0C] text-white flex items-center justify-center mb-8 group-hover:bg-[#FF2E00] transition-colors btn-advanced">
<iconify-icon className="text-2xl" icon="solar:shield-cross-linear"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-2xl uppercase tracking-tight text-[#0A0B0C] mb-4">Legal Stealth</h3>
<p className="font-body text-sm font-medium text-[#686A6C] leading-relaxed">
                        Total anonymity is guaranteed through layered corporate structuring and NDA-bound intermediaries. The market will never know you entered or exited.
                    </p>
</div>
<div className="group p-8 border border-[#0A0B0C]/10 bg-white hover:border-[#FF2E00]/50 hover:shadow-2xl transition-all duration-500 reveal delay-200">
<div className="w-14 h-14 bg-[#0A0B0C] text-white flex items-center justify-center mb-8 group-hover:bg-[#FF2E00] transition-colors btn-advanced">
<iconify-icon className="text-2xl" icon="solar:scale-linear"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-2xl uppercase tracking-tight text-[#0A0B0C] mb-4">Absolute Leverage</h3>
<p className="font-body text-sm font-medium text-[#686A6C] leading-relaxed">
                        Unburdened by dual-agency conflicts, our negotiation tactics are highly aggressive and solely focused on suppressing the acquisition cost.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-[#F4F4F0] relative z-10 pb-32" id="portfolio">
<div className="max-w-[100rem] mx-auto px-6 md:px-12 pt-32 mb-16 reveal">
<div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0A0B0C] border border-[#0A0B0C]/20 px-4 py-2 inline-flex items-center gap-2 mb-8 bg-white shadow-sm">
<iconify-icon icon="solar:folder-open-linear"></iconify-icon> DECLASSIFIED ASSETS
            </div>
<h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-7xl uppercase tracking-tighter leading-[0.9] text-[#0A0B0C]">
                Unseen.<br/>Secured.
            </h2>
</div>

<div className="max-w-[100rem] mx-auto px-6 md:px-12 relative space-y-[10vh] pb-[10vh]">

<div className="sticky top-32 w-full h-[60vh] lg:h-[70vh] bg-[#050505] rounded-none overflow-hidden group border border-[#0A0B0C]/20 shadow-[0_-10px_40px_rgba(0,0,0,0.15)]">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1613490908592-5d4b8f596315?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-105 transition-all duration-[1.5s] ease-out"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0C] via-[#0A0B0C]/40 to-transparent"></div>
<div className="absolute top-8 right-8 bg-[#0A0B0C]/80 backdrop-blur-md border border-white/20 p-3 flex flex-col items-end gap-1">
<span className="font-mono text-[10px] tracking-[0.2em] text-[#686A6C]">ACQUISITION DELTA</span>
<span className="font-mono text-sm font-semibold text-[#00E5FF]">-14.2% VS MARKET</span>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
<div>
<h3 className="font-display font-semibold text-white text-3xl md:text-5xl uppercase tracking-tight mb-4 group-hover:text-[#FF2E00] transition-colors duration-500">Brutalist Estate</h3>
<div className="font-mono text-[10px] font-semibold text-white/70 uppercase tracking-[0.2em] flex items-center gap-4">
<span>LONDON W1K</span>
<span className="w-1.5 h-1.5 bg-[#FF2E00] rounded-sm"></span>
<span>SECURE ACQUISITION</span>
</div>
</div>
<button className="bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 px-6 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] transition-all backdrop-blur-md btn-advanced flex items-center gap-2">
<span>VIEW LOGS</span> <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="sticky top-40 w-full h-[60vh] lg:h-[70vh] bg-[#050505] rounded-none overflow-hidden group border border-[#0A0B0C]/20 shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-105 transition-all duration-[1.5s] ease-out"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0C] via-[#0A0B0C]/40 to-transparent"></div>
<div className="absolute top-8 right-8 bg-[#0A0B0C]/80 backdrop-blur-md border border-white/20 p-3 flex flex-col items-end gap-1">
<span className="font-mono text-[10px] tracking-[0.2em] text-[#686A6C]">EXECUTION SPEED</span>
<span className="font-mono text-sm font-semibold text-[#FF2E00]">48 HOURS</span>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
<div>
<h3 className="font-display font-semibold text-white text-3xl md:text-5xl uppercase tracking-tight mb-4 group-hover:text-[#FF2E00] transition-colors duration-500">Glass Penthouse</h3>
<div className="font-mono text-[10px] font-semibold text-white/70 uppercase tracking-[0.2em] flex items-center gap-4">
<span>PARIS 8E</span>
<span className="w-1.5 h-1.5 bg-[#FF2E00] rounded-sm"></span>
<span>PRE-LISTING INTERCEPT</span>
</div>
</div>
<button className="bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 px-6 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] transition-all backdrop-blur-md btn-advanced flex items-center gap-2">
<span>VIEW LOGS</span> <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="sticky top-48 w-full h-[60vh] lg:h-[70vh] bg-[#050505] rounded-none overflow-hidden group border border-[#0A0B0C]/20 shadow-[0_-10px_40px_rgba(0,0,0,0.25)]">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-105 transition-all duration-[1.5s] ease-out"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0C] via-[#0A0B0C]/40 to-transparent"></div>
<div className="absolute top-8 right-8 bg-[#0A0B0C]/80 backdrop-blur-md border border-white/20 p-3 flex flex-col items-end gap-1">
<span className="font-mono text-[10px] tracking-[0.2em] text-[#686A6C]">PUBLIC TRACE</span>
<span className="font-mono text-sm font-semibold text-white">ZERO</span>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
<div>
<h3 className="font-display font-semibold text-white text-3xl md:text-5xl uppercase tracking-tight mb-4 group-hover:text-[#FF2E00] transition-colors duration-500">Concrete Compound</h3>
<div className="font-mono text-[10px] font-semibold text-white/70 uppercase tracking-[0.2em] flex items-center gap-4">
<span>DUBAI PALM</span>
<span className="w-1.5 h-1.5 bg-[#FF2E00] rounded-sm"></span>
<span>PRIVATE LIQUIDATION</span>
</div>
</div>
<button className="bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 px-6 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] transition-all backdrop-blur-md btn-advanced flex items-center gap-2">
<span>VIEW LOGS</span> <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 md:px-12 relative bg-[#FDFDFD] z-10 border-t border-[#0A0B0C]/10" id="protocol">
<div className="max-w-[70rem] mx-auto relative">
<div className="text-center mb-24 md:mb-32 reveal">
<div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0A0B0C] border border-[#0A0B0C]/20 px-4 py-2 inline-flex items-center gap-2 mb-8 bg-white shadow-sm">
<iconify-icon icon="solar:clipboard-list-linear"></iconify-icon> EXECUTION PROTOCOL
                </div>
<h2 className="font-display font-semibold text-4xl md:text-6xl uppercase tracking-tighter text-[#0A0B0C]">Calculated Force.</h2>
<p className="font-body text-base text-[#686A6C] max-w-lg mx-auto mt-6 font-medium">No guesswork. No waiting on listings. A rigorous, trust-driven methodology designed for aggressive market capture.</p>
</div>

<div className="relative w-full">

<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#0A0B0C]/20 to-transparent md:-translate-x-1/2 z-0"></div>
<div className="space-y-24 md:space-y-32">

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group pl-16 md:pl-0 reveal">
<div className="absolute left-6 md:left-1/2 top-2 md:top-1/2 w-4 h-4 bg-white border-2 border-[#0A0B0C] -translate-x-[7px] md:-translate-x-1/2 md:-translate-y-1/2 z-20 group-hover:bg-[#FF2E00] group-hover:border-[#FF2E00] transition-all duration-500 group-hover:scale-[1.3] shadow-md"></div>
<div className="w-full md:w-[45%] md:text-right pr-0 md:pr-12">
<span className="font-mono text-5xl text-[#0A0B0C]/5 font-semibold leading-none block mb-4 group-hover:text-[#FF2E00]/20 transition-colors duration-500">01</span>
<h3 className="font-display font-semibold text-2xl md:text-3xl uppercase tracking-tight text-[#0A0B0C] mb-4">Parameter Extraction</h3>
</div>
<div className="w-full md:w-[45%] pl-0 md:pl-12 mt-4 md:mt-0">
<p className="font-body text-base font-medium text-[#686A6C] leading-relaxed">
                                We map your exact capital deployment parameters. This is not a consultation; it is a strategic alignment of resources and objectives to ensure maximum yield.
                            </p>
</div>
</div>

<div className="relative flex flex-col md:flex-row-reverse items-start md:items-center justify-between group pl-16 md:pl-0 reveal delay-100">
<div className="absolute left-6 md:left-1/2 top-2 md:top-1/2 w-4 h-4 bg-white border-2 border-[#0A0B0C] -translate-x-[7px] md:-translate-x-1/2 md:-translate-y-1/2 z-20 group-hover:bg-[#FF2E00] group-hover:border-[#FF2E00] transition-all duration-500 group-hover:scale-[1.3] shadow-md"></div>
<div className="w-full md:w-[45%] text-left pl-0 md:pl-12">
<span className="font-mono text-5xl text-[#0A0B0C]/5 font-semibold leading-none block mb-4 group-hover:text-[#FF2E00]/20 transition-colors duration-500">02</span>
<h3 className="font-display font-semibold text-2xl md:text-3xl uppercase tracking-tight text-[#0A0B0C] mb-4">Dark Market Scan</h3>
</div>
<div className="w-full md:w-[45%] md:text-right pr-0 md:pr-12 mt-4 md:mt-0">
<p className="font-body text-base font-medium text-[#686A6C] leading-relaxed">
                                Our network operators deploy into the off-market sector. We bypass public noise and identify tier-one assets currently undergoing covert liquidity events.
                            </p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group pl-16 md:pl-0 reveal delay-200">
<div className="absolute left-6 md:left-1/2 top-2 md:top-1/2 w-4 h-4 bg-white border-2 border-[#0A0B0C] -translate-x-[7px] md:-translate-x-1/2 md:-translate-y-1/2 z-20 group-hover:bg-[#FF2E00] group-hover:border-[#FF2E00] transition-all duration-500 group-hover:scale-[1.3] shadow-md"></div>
<div className="w-full md:w-[45%] md:text-right pr-0 md:pr-12">
<span className="font-mono text-5xl text-[#0A0B0C]/5 font-semibold leading-none block mb-4 group-hover:text-[#FF2E00]/20 transition-colors duration-500">03</span>
<h3 className="font-display font-semibold text-2xl md:text-3xl uppercase tracking-tight text-[#0A0B0C] mb-4">The Strike</h3>
</div>
<div className="w-full md:w-[45%] pl-0 md:pl-12 mt-4 md:mt-0">
<p className="font-body text-base font-medium text-[#686A6C] leading-relaxed">
                                Executed with absolute precision. Total anonymity. Zero friction. We negotiate aggressively on your behalf, untethered by agency conflicts, to secure the asset.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 md:px-12 relative bg-[#050505] z-10 flex justify-center border-t border-white/10">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-0 right-1/4 w-[50vw] h-[50vw] bg-[#FF2E00] opacity-[0.03] blur-[150px] rounded-full"></div>
<div className="absolute bottom-0 left-1/4 w-[40vw] h-[40vw] bg-[#00E5FF] opacity-[0.02] blur-[150px] rounded-full"></div>
</div>
<div className="w-full max-w-[50rem] bg-[#0A0B0C]/80 backdrop-blur-xl p-8 md:p-16 relative overflow-hidden reveal border border-white/10 shadow-2xl">
<div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F4F4F0] mb-6 flex items-center gap-2">
<iconify-icon className="text-[#FF2E00] text-sm" icon="solar:terminal-linear"></iconify-icon> COMMAND CENTER
            </div>
<h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tighter uppercase text-white mb-6">Initiate Search.</h2>
<p className="font-body text-base font-medium text-[#686A6C] max-w-lg mb-12 border-l border-[#FF2E00] pl-4">
                Intake is strictly limited to ensure uncompromising tactical superiority. Submit your parameters to open a secure channel.
            </p>
<form className="space-y-10 relative z-10">
<div className="relative group">
<label className="block font-mono text-[10px] font-semibold text-[#686A6C] uppercase tracking-[0.2em] mb-3 group-focus-within:text-[#FF2E00] transition-colors">Asset Class</label>
<div className="relative">
<select className="w-full bg-transparent border-b border-white/20 py-4 font-body text-base md:text-lg font-medium text-white outline-none focus:border-[#FF2E00] appearance-none rounded-none cursor-pointer transition-colors">
<option className="bg-[#0A0B0C] text-[#686A6C]" disabled="" selected="" value="">Select Classification...</option>
<option className="bg-[#0A0B0C] text-white" value="residential">Primary Residence (Ultra-Prime)</option>
<option className="bg-[#0A0B0C] text-white" value="pied">Pied-à-Terre</option>
<option className="bg-[#0A0B0C] text-white" value="yield">Yield-Generating Asset</option>
<option className="bg-[#0A0B0C] text-white" value="land">Undeveloped Land</option>
</select>
<iconify-icon className="absolute right-2 top-1/2 -translate-y-1/2 text-white pointer-events-none text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="relative group">
<label className="block font-mono text-[10px] font-semibold text-[#686A6C] uppercase tracking-[0.2em] mb-3 group-focus-within:text-[#FF2E00] transition-colors">Target Geography</label>
<input className="w-full bg-transparent border-b border-white/20 py-4 font-body text-base md:text-lg font-medium text-white outline-none focus:border-[#FF2E00] placeholder:text-white/20 rounded-none transition-colors" placeholder="e.g. London W1K, Paris 8e" type="text"/>
</div>
<div className="relative group">
<label className="block font-mono text-[10px] font-semibold text-[#686A6C] uppercase tracking-[0.2em] mb-3 group-focus-within:text-[#FF2E00] transition-colors">Capital Allocation</label>
<input className="w-full bg-transparent border-b border-white/20 py-4 font-body text-base md:text-lg font-medium text-white outline-none focus:border-[#FF2E00] placeholder:text-white/20 rounded-none transition-colors" placeholder="Minimum $5M USD" type="text"/>
</div>
<button className="w-full bg-white text-[#0A0B0C] py-6 mt-8 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 btn-advanced flex justify-center items-center gap-3" type="button">
<span>SUBMIT DIRECTIVE</span>
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<div className="text-center font-mono text-[10px] font-semibold text-[#686A6C] uppercase tracking-[0.2em] mt-6 flex justify-center items-center gap-2">
<iconify-icon className="text-sm text-[#00E5FF]" icon="solar:shield-check-linear"></iconify-icon> Encrypted transmission. Response &lt; 4H.
                </div>
</form>
</div>
</section>

<footer className="bg-[#0A0B0C] border-t border-white/5 pt-32 pb-12 px-6 md:px-12 relative overflow-hidden z-10">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none overflow-hidden flex items-center justify-center">
<span className="font-display font-semibold text-[25vw] leading-none tracking-tighter text-white opacity-[0.02] uppercase mix-blend-screen">ONYX</span>
</div>
<div className="max-w-[100rem] mx-auto relative z-10 flex flex-col justify-between min-h-[40vh]">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#686A6C]">
<div className="flex flex-col space-y-5">
<span className="text-white mb-2 font-semibold">OPERATIONS</span>
<a className="hover:text-white transition-colors w-fit flex items-center gap-2" href="#"><iconify-icon icon="solar:map-point-linear"></iconify-icon> London HQ</a>
<a className="hover:text-white transition-colors w-fit flex items-center gap-2" href="#"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Paris Desk</a>
<a className="hover:text-white transition-colors w-fit flex items-center gap-2" href="#"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Dubai Node</a>
<a className="hover:text-white transition-colors w-fit flex items-center gap-2" href="#"><iconify-icon icon="solar:map-point-linear"></iconify-icon> NYC Terminal</a>
</div>
<div className="flex flex-col space-y-5">
<span className="text-white mb-2 font-semibold">INTELLIGENCE</span>
<a className="hover:text-white transition-colors w-fit" href="#">Market Doppler</a>
<a className="hover:text-white transition-colors w-fit" href="#">Yield Analysis</a>
<a className="hover:text-white transition-colors w-fit" href="#">Off-Market Index</a>
</div>
<div className="flex flex-col space-y-5">
<span className="text-white mb-2 font-semibold">LEGAL PROTOCOL</span>
<a className="hover:text-white transition-colors w-fit" href="#">NDA Policy</a>
<a className="hover:text-white transition-colors w-fit" href="#">Terms of Engagement</a>
<a className="hover:text-white transition-colors w-fit" href="#">Privacy Architecture</a>
</div>
<div className="flex flex-col space-y-5">
<span className="text-white mb-2 font-semibold">SECURE COMMS</span>
<a className="hover:text-[#FF2E00] transition-colors w-fit text-sm tracking-widest lowercase" href="mailto:secure@onyx.io">secure@onyx.io</a>
<span className="text-[#686A6C]/50 mt-4 block leading-relaxed bg-white/5 p-3 rounded-sm">PGP KEY:<br/>0x4B9A2F8C...</span>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-t border-white/10 pt-8">
<a className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity text-white" href="#">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="24">
<path d="M12 2L2 7L12 12L22 7L12 2Z" strokeLinejoin="round"></path>
<path d="M2 17L12 22L22 17" strokeLinejoin="round"></path>
<path d="M2 12L12 17L22 12" strokeLinejoin="round"></path>
</svg>
</a>
<div className="font-mono text-[10px] font-semibold text-[#686A6C] tracking-[0.2em] text-left md:text-right">
                    © 2026 ONYX CAPITAL PROTOCOL. ALL RIGHTS RESERVED.<br/>
<span className="text-white/30 flex items-center justify-start md:justify-end gap-2 mt-2"><span className="w-1.5 h-1.5 bg-[#FF2E00] rounded-sm animate-pulse"></span> SYSTEM OPERATIONAL.</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
