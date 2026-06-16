import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // --- Preloader Logic ---
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.body.classList.add('loaded');
                initDecryption(); // Start decryption after load
            }, 1000);
        });

        // --- Decryption Effect ---
        const initDecryption = () => {
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*";
            const elements = document.querySelectorAll('.decrypt-text');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        if(target.dataset.decrypted === "true") return;
                        
                        const originalText = target.dataset.value || target.innerText;
                        let iterations = 0;
                        
                        const interval = setInterval(() => {
                            target.innerText = originalText
                                .split("")
                                .map((letter, index) => {
                                    if (index < iterations) return originalText[index];
                                    return chars[Math.floor(Math.random() * chars.length)];
                                })
                                .join("");
                            
                            if (iterations >= originalText.length) {
                                clearInterval(interval);
                                target.dataset.decrypted = "true";
                            }
                            
                            iterations += 1/3;
                        }, 30);
                        
                        observer.unobserve(target);
                    }
                });
            }, { threshold: 0.1 });

            elements.forEach(el => observer.observe(el));
        };

        // --- Particle System (Hero Vacuum + Footer) ---
        
        class ParticleSystem {
            constructor(canvasId, options = {}) {
                this.canvas = document.getElementById(canvasId);
                this.ctx = this.canvas.getContext('2d');
                this.particles = [];
                this.options = {
                    count: 100,
                    color: '#ccff00',
                    isVacuum: false,
                    ...options
                };
                
                this.resize();
                window.addEventListener('resize', () => this.resize());
                this.init();
                this.animate();
            }

            resize() {
                this.canvas.width = window.innerWidth;
                this.canvas.height = window.innerHeight;
            }

            init() {
                this.particles = [];
                for(let i = 0; i < this.options.count; i++) {
                    this.particles.push(new Particle(this.canvas, this.options.color));
                }
            }

            animate() {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                
                const scrollY = window.scrollY;
                const vacuumActive = this.options.isVacuum && scrollY > 50;
                
                // Vacuum center point (bottom center of screen typically)
                const targetX = this.canvas.width / 2;
                const targetY = this.canvas.height * 0.8;

                this.particles.forEach(p => {
                    if (vacuumActive) {
                        // Vacuum Logic
                        const dx = targetX - p.x;
                        const dy = targetY - p.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        
                        if (dist < 50) {
                            // Vanish and reset
                            p.reset();
                            p.y = this.canvas.height + 10; // Start from bottom or top randomly on reset
                        } else {
                            // Move towards center
                            p.x += dx * 0.05;
                            p.y += dy * 0.05;
                            // Swirl effect
                            p.x += Math.sin(dist * 0.1) * 2;
                            p.opacity = Math.max(0, p.opacity - 0.01);
                        }
                    } else {
                        // Normal Flow
                        p.update();
                        p.opacity = Math.min(0.8, p.opacity + 0.01);
                    }
                    p.draw(this.ctx);
                });

                requestAnimationFrame(() => this.animate());
            }
        }

        class Particle {
            constructor(canvas, color) {
                this.canvas = canvas;
                this.color = color;
                this.reset();
            }

            reset() {
                this.x = Math.random() * this.canvas.width;
                this.y = Math.random() * this.canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedY = Math.random() * -1 - 0.5; // Upward flow
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5 + 0.2;
            }

            update() {
                this.y += this.speedY;
                this.x += this.speedX;

                if (this.y < 0) {
                    this.y = this.canvas.height;
                    this.x = Math.random() * this.canvas.width;
                }
            }

            draw(ctx) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }

        // Initialize Systems
        // Hero: 1.5x particles, Vacuum effect enabled
        const heroParticles = new ParticleSystem('hero-canvas', { 
            count: 150, 
            color: '#ccff00',
            isVacuum: true 
        });

        // Footer: Standard flow
        const footerParticles = new ParticleSystem('footer-canvas', { 
            count: 60, 
            color: '#ccff00',
            isVacuum: false 
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="preloader">
<div className="door-panel door-left"></div>
<div className="door-panel door-right"></div>
<div className="preloader-logo flex flex-col items-center justify-center gap-4">
<svg fill="none" height="64" stroke="#ccff00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="64">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
<div className="font-mono text-acid text-sm tracking-widest animate-pulse">SYSTEM_INITIALIZING</div>
</div>
</div>

<div className="w-full bg-[#ccff00] text-black text-xs font-mono py-1 overflow-hidden whitespace-nowrap border-b border-black">
<div className="inline-block animate-[marquee_20s_linear_infinite]">
            BTC $64,230 // ETH $3,450 // SOL $145 // SYSTEM_OPTIMAL // BTC $64,230 // ETH $3,450 // SOL $145 // SYSTEM_OPTIMAL // BTC $64,230 // ETH $3,450 // SOL $145 // SYSTEM_OPTIMAL //
        </div>
</div>

<nav className="fixed top-[26px] w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm group-hover:bg-[#ccff00] transition-colors">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg>
</div>
<span className="font-semibold text-lg tracking-tight">AETHER.CORE</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm text-gray-400 font-medium">
<a className="hover:text-white transition-colors" href="#product">Product</a>
<a className="hover:text-white transition-colors" href="#security">Security</a>
<a className="hover:text-white transition-colors" href="#developers">Developers</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-6">
<a className="text-sm font-medium text-gray-400 hover:text-white hidden sm:block" href="#">Log_In</a>
<a className="relative px-6 py-2 bg-transparent border border-gray-600 hover:border-[#ccff00] text-white hover:text-[#ccff00] text-sm font-mono transition-all duration-300 group overflow-hidden" href="#">
<span className="relative z-10">GET_ACCESS</span>
<div className="absolute inset-0 bg-[#ccff00]/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
</a>
</div>
</div>
</nav>

<canvas id="hero-canvas"></canvas>

<section className="relative min-h-screen pt-32 pb-20 px-6 flex flex-col justify-center overflow-hidden">
<div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

<div className="relative z-10 space-y-8">
<div className="flex items-center gap-2 text-[#ccff00] font-mono text-xs tracking-widest uppercase">
<span className="w-2 h-2 bg-[#ccff00] rounded-full animate-pulse"></span>
                    System Status: Online
                </div>
<h1 className="text-6xl md:text-8xl font-semibold tracking-tight leading-[0.9] text-white decrypt-text" data-value="Financial Sovereignty">
                    Financial Sovereignty
                </h1>
<p className="text-xl md:text-2xl text-gray-400 max-w-lg leading-relaxed">
                    Institutional-grade primitives for the decentralized economy. 
                    <span className="text-white font-semibold block mt-2">Zero Compromise.</span>
</p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="px-8 py-4 bg-[#ccff00] hover:bg-[#b3e600] text-black font-semibold text-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                        INITIATE PROTOCOL
                        <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<button className="px-8 py-4 bg-transparent border border-gray-700 hover:border-white text-white font-mono text-lg flex items-center justify-center gap-2 transition-colors group">
<span className="text-[#ccff00] group-hover:translate-x-1 transition-transform">&gt;_</span> READ_DOCS
                    </button>
</div>
</div>

<div className="relative z-10 lg:h-[800px] flex items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-[#ccff00] opacity-5 blur-[120px] rounded-full"></div>
<div className="relative w-[340px] h-[680px] bg-[#0a0a0a] rounded-[3rem] border border-gray-800 shadow-2xl overflow-hidden flex flex-col transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700">

<div className="absolute top-0 left-0 w-full h-8 flex justify-center z-20">
<div className="w-32 h-6 bg-black rounded-b-2xl"></div>
</div>

<div className="p-6 pt-12 flex flex-col h-full bg-gradient-to-b from-[#111] to-black">
<div className="flex justify-between items-center mb-8">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#ccff00]/20 flex items-center justify-center text-[#ccff00]">
<i className="w-4 h-4" data-lucide="wallet"></i>
</div>
<span className="font-mono text-sm tracking-widest text-gray-300">MAIN_VAULT</span>
</div>
<div className="flex gap-1">
<div className="w-1 h-1 bg-[#ccff00] rounded-full"></div>
<div className="w-1 h-1 bg-gray-600 rounded-full"></div>
<div className="w-1 h-1 bg-gray-600 rounded-full"></div>
</div>
</div>
<div className="mb-2 text-xs text-gray-500 font-mono uppercase tracking-wider">Total Assets</div>
<div className="text-4xl font-semibold text-white tracking-tight mb-2 decrypt-text" data-value="$284,920">$284,920</div>
<div className="text-[#ccff00] text-sm font-mono mb-8 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="trending-up"></i> +2.4% (24H)
                        </div>

<div className="h-32 w-full mb-8 relative">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none">
<path d="M0,100 C50,100 80,60 120,60 C160,60 200,90 240,70 C280,50 320,10 340,5" fill="none" stroke="#ccff00" strokeWidth="2"></path>
<lineargradient id="chartGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#ccff00" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#ccff00" stop-opacity="0"></stop>
</lineargradient>
<path d="M0,100 C50,100 80,60 120,60 C160,60 200,90 240,70 C280,50 320,10 340,5 V120 H0 Z" fill="url(#chartGrad)" stroke="none"></path>
</svg>
</div>

<div className="space-y-3 mt-auto">
<div className="text-xs text-gray-500 font-mono uppercase tracking-wider mb-2">Holdings</div>
<div className="p-3 rounded-xl bg-[#1a1a1a] border border-gray-800 flex items-center justify-between group cursor-pointer hover:border-[#ccff00] transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
<i className="w-5 h-5" data-lucide="bitcoin"></i>
</div>
<div>
<div className="text-sm font-medium text-white">Bitcoin</div>
<div className="text-xs text-gray-500 font-mono">3.24 BTC</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-white">$64,230</div>
</div>
</div>
<div className="p-3 rounded-xl bg-[#1a1a1a] border border-gray-800 flex items-center justify-between group cursor-pointer hover:border-[#ccff00] transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
<i className="w-4 h-4" data-lucide="gem"></i>
</div>
<div>
<div className="text-sm font-medium text-white">Ethereum</div>
<div className="text-xs text-gray-500 font-mono">14.5 ETH</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-white">$3,450</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-[20%] right-[-20px] bg-[#050505] border border-gray-800 p-4 w-48 z-30 shadow-2xl backdrop-blur-xl bg-opacity-90">
<div className="flex items-center gap-2 mb-3">
<div className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse"></div>
<span className="text-xs font-mono text-gray-400">NETWORK_LOAD</span>
</div>
<div className="w-full h-1 bg-gray-800 rounded-full mb-2 overflow-hidden">
<div className="h-full bg-[#ccff00] w-[75%] animate-[pulse_2s_infinite]"></div>
</div>
<div className="flex justify-between text-xs font-mono">
<span className="text-gray-500">TPS</span>
<span className="text-white">145,202</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-[#050505] border-t border-gray-900" id="product">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 decrypt-text" data-value="Core Architecture">Core Architecture</h2>
<p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                    Built on a hyper-scalable modular framework designed for high-frequency trading and institutional settlement.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="feature-card group relative p-8 bg-[#0a0a0a] border border-gray-800 hover:border-gray-700 transition-all duration-300">
<div className="card-particle-container">
<div className="digital-rain"></div>
</div>
<div className="mb-6 w-12 h-12 bg-[#111] rounded border border-gray-800 flex items-center justify-center text-[#ccff00]">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Military Grade Security</h3>
<p className="text-lg text-gray-500 leading-relaxed">Multi-sig vaults with time-delayed withdrawals and hardware enclave support.</p>
</div>

<div className="feature-card group relative p-8 bg-[#0a0a0a] border border-gray-800 hover:border-gray-700 transition-all duration-300">
<div className="card-particle-container">
<div className="digital-rain"></div>
</div>
<div className="mb-6 w-12 h-12 bg-[#111] rounded border border-gray-800 flex items-center justify-center text-[#ccff00]">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Zero Latency</h3>
<p className="text-lg text-gray-500 leading-relaxed">Optimized execution environment delivering sub-millisecond finality.</p>
</div>

<div className="feature-card group relative p-8 bg-[#0a0a0a] border border-gray-800 hover:border-gray-700 transition-all duration-300">
<div className="card-particle-container">
<div className="digital-rain"></div>
</div>
<div className="mb-6 w-12 h-12 bg-[#111] rounded border border-gray-800 flex items-center justify-center text-[#ccff00]">
<i className="w-6 h-6" data-lucide="network"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Global Settlement</h3>
<p className="text-lg text-gray-500 leading-relaxed">Seamless interoperability across all major liquidity networks and fiat rails.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] overflow-hidden relative border-t border-gray-900">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative h-[500px] flex items-center justify-center bg-[#0a0a0a] border border-gray-800 rounded-xl overflow-hidden group">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

<div className="relative z-10 w-full h-full flex items-center justify-center">
<svg fill="none" height="400" viewbox="0 0 400 400" width="400">

<g className="gear-spin" transform-origin="200 200">
<path d="M200 130 C238.66 130 270 161.34 270 200 C270 238.66 238.66 270 200 270 C161.34 270 130 238.66 130 200 C130 161.34 161.34 130 200 130 Z" stroke="#333" strokeWidth="2"></path>
<path d="M200 100 V120 M200 280 V300 M300 200 H280 M120 200 H100 M270.7 129.3 L256.6 143.4 M143.4 256.6 L129.3 270.7 M270.7 270.7 L256.6 256.6 M143.4 143.4 L129.3 129.3" stroke="#555" strokeLinecap="round" strokeWidth="12"></path>
<circle cx="200" cy="200" r="20" stroke="#ccff00" strokeWidth="2"></circle>
</g>

<g className="gear-spin-reverse" transform-origin="310 110">
<circle cx="310" cy="110" r="45" stroke="#333" strokeWidth="2"></circle>
<path d="M310 55 V75 M310 145 V165 M365 110 H345 M275 110 H255 M348.9 71.1 L334.8 85.2 M285.2 134.8 L271.1 148.9 M348.9 148.9 L334.8 134.8 M285.2 85.2 L271.1 71.1" opacity="0.6" stroke="#ccff00" strokeLinecap="square" strokeWidth="8"></path>
</g>

<g className="gear-spin-reverse" transform-origin="90 310">
<circle cx="90" cy="310" r="30" stroke="#333" strokeWidth="2"></circle>
<path d="M90 270 V285 M90 335 V350 M130 310 H115 M65 310 H50 M118.3 281.7 L107.7 292.3 M72.3 327.7 L61.7 338.3 M118.3 338.3 L107.7 327.7 M72.3 292.3 L61.7 281.7" stroke="#888" strokeLinecap="square" strokeWidth="6"></path>
</g>
</svg>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 decrypt-text" data-value="Programmable Liquidity">Programmable Liquidity</h2>
<p className="text-xl text-gray-400 mb-8 leading-relaxed">
                    Automate your treasury with smart vaults that rebalance based on real-time market conditions. Set rules, not just orders.
                </p>
<ul className="space-y-4">
<li className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full border border-[#ccff00] flex items-center justify-center">
<div className="w-2 h-2 bg-[#ccff00] rounded-full"></div>
</div>
<div>
<h4 className="text-white font-medium text-lg">Auto-Rebalancing</h4>
<p className="text-gray-500 text-base">Keep your portfolio aligned with target allocations automatically.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full border border-gray-600 flex items-center justify-center">
<div className="w-2 h-2 bg-gray-600 rounded-full"></div>
</div>
<div>
<h4 className="text-white font-medium text-lg">Yield Optimization</h4>
<p className="text-gray-500 text-base">Route assets to the highest yielding verified protocols.</p>
</div>
</li>
</ul>
</div>
</div>
</section>

<footer className="relative bg-[#000] border-t border-gray-800 pt-20 pb-10 overflow-hidden">

<canvas className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" id="footer-canvas"></canvas>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 bg-[#ccff00] text-black flex items-center justify-center rounded-sm">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24" width="14"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
</div>
<span className="font-semibold text-white tracking-tight">AETHER.CORE</span>
</a>
<p className="text-gray-500 text-base">
                        The next generation of decentralized financial infrastructure.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Platform</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-[#ccff00] hover:pl-2 transition-all duration-300" href="#">Markets</a></li>
<li><a className="hover:text-[#ccff00] hover:pl-2 transition-all duration-300" href="#">Exchange</a></li>
<li><a className="hover:text-[#ccff00] hover:pl-2 transition-all duration-300" href="#">Earn</a></li>
<li><a className="hover:text-[#ccff00] hover:pl-2 transition-all duration-300" href="#">Institutional</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Support</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-[#ccff00] hover:pl-2 transition-all duration-300" href="#">Documentation</a></li>
<li><a className="hover:text-[#ccff00] hover:pl-2 transition-all duration-300" href="#">API Status</a></li>
<li><a className="hover:text-[#ccff00] hover:pl-2 transition-all duration-300" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Social</h4>
<div className="flex gap-4">
<a className="text-gray-500 hover:text-[#ccff00] hover:scale-110 transition-all" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a className="text-gray-500 hover:text-[#ccff00] hover:scale-110 transition-all" href="#">
<i className="w-5 h-5" data-lucide="github"></i>
</a>
<a className="text-gray-500 hover:text-[#ccff00] hover:scale-110 transition-all" href="#">
<i className="w-5 h-5" data-lucide="disc"></i>
</a>
</div>
</div>
</div>
<div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 font-mono">
<div>© 2024 Aether Systems Inc.</div>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-gray-400" href="#">Privacy</a>
<a className="hover:text-gray-400" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
