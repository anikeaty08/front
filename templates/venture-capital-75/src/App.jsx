import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
base: '#030303',
surface: '#080808',
surface2: '#111111',
primary: '#F0F0F0',
secondary: '#777777',
accent: '#C4B5FD',
success: '#34D399',
warning: '#FBBF24',
},
fontFamily: {
syne: ['Syne', 'sans-serif'],
geist: ['Manrope', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
transitionTimingFunction: {
'expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
'swiss': 'cubic-bezier(0.23, 1, 0.32, 1)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            // Text Scramble Effect
            const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
            document.querySelectorAll('.scramble').forEach(el => {
                const originalText = el.innerText;
                el.dataset.value = originalText;
                
                el.addEventListener('mouseover', () => {
                    let iterations = 0;
                    const interval = setInterval(() => {
                        el.innerText = el.innerText.split("").map((letter, index) => {
                            if(index < iterations) return el.dataset.value[index];
                            return letters[Math.floor(Math.random() * letters.length)];
                        }).join("");
                        
                        if(iterations >= el.dataset.value.length) {
                            clearInterval(interval);
                            el.innerText = originalText;
                        }
                        iterations += 1/2;
                    }, 30);
                });
            });

            // OS Loader
            const loader = document.getElementById('loader');
            const counter = document.getElementById('loader-counter');
            const bar = document.getElementById('loader-bar');
            const logs = document.getElementById('loader-logs');
            const logMessages = [
                "[0x03] Bypassing legacy systems...",
                "[0x04] Allocating compute nodes...",
                "[0x05] Securing telemetry feed...",
                "[0x06] Ready for transmission."
            ];
            let progress = 0;
            let logIndex = 0;
            
            const countInterval = setInterval(() => {
                progress += Math.random() * 12 + 1;
                
                if (progress > 20 && logIndex === 0) { logs.innerHTML = `<div>${logMessages[0]}</div>` + logs.innerHTML; logIndex++; }
                if (progress > 50 && logIndex === 1) { logs.innerHTML = `<div>${logMessages[1]}</div>` + logs.innerHTML; logIndex++; }
                if (progress > 80 && logIndex === 2) { logs.innerHTML = `<div>${logMessages[2]}</div>` + logs.innerHTML; logIndex++; }

                if (progress >= 100) {
                    progress = 100;
                    clearInterval(countInterval);
                    counter.innerText = '100%';
                    bar.style.width = '100%';
                    logs.innerHTML = `<div class="text-accent">${logMessages[3]}</div>` + logs.innerHTML;
                    
                    setTimeout(() => {
                        loader.style.opacity = '0';
                        setTimeout(() => {
                            loader.style.display = 'none';
                            document.querySelector('.nav-reveal').classList.remove('-translate-y-full');
                            document.querySelectorAll('.reveal-text').forEach(t => t.style.clipPath = 'inset(0 0 0 0)');
                        }, 1000);
                    }, 600);
                } else {
                    counter.innerText = Math.floor(progress).toString().padStart(3, '0') + '%';
                    bar.style.width = progress + '%';
                }
            }, 50);

            // Canvas Background Particles
            const canvas = document.getElementById('hero-canvas');
            if (canvas && window.innerWidth > 768) {
                const ctx = canvas.getContext('2d');
                let width, height;
                let particles = [];

                function resize() {
                    width = canvas.width = window.innerWidth;
                    height = canvas.height = window.innerHeight;
                    initParticles();
                }
                window.addEventListener('resize', resize);

                class Particle {
                    constructor() {
                        this.x = Math.random() * width;
                        this.y = Math.random() * height;
                        this.size = Math.random() * 1.5;
                        this.speedY = Math.random() * 0.5 - 0.25;
                        this.speedX = Math.random() * 0.5 - 0.25;
                        this.opacity = Math.random() * 0.5;
                    }
                    update() {
                        this.x += this.speedX;
                        this.y += this.speedY;
                        if(this.y < 0 || this.y > height) this.speedY *= -1;
                        if(this.x < 0 || this.x > width) this.speedX *= -1;
                    }
                    draw() {
                        ctx.fillStyle = `rgba(196,181,253, ${this.opacity})`;
                        ctx.beginPath();
                        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }

                function initParticles() {
                    particles = [];
                    for(let i=0; i<100; i++) particles.push(new Particle());
                }

                resize();

                function animateCanvas() {
                    ctx.clearRect(0, 0, width, height);
                    particles.forEach(p => { p.update(); p.draw(); });
                    
                    // Draw connections
                    for(let i=0; i<particles.length; i++) {
                        for(let j=i; j<particles.length; j++) {
                            let dx = particles[i].x - particles[j].x;
                            let dy = particles[i].y - particles[j].y;
                            let dist = Math.sqrt(dx*dx + dy*dy);
                            if(dist < 100) {
                                ctx.beginPath();
                                ctx.strokeStyle = `rgba(196,181,253, ${0.1 - dist/1000})`;
                                ctx.lineWidth = 0.5;
                                ctx.moveTo(particles[i].x, particles[i].y);
                                ctx.lineTo(particles[j].x, particles[j].y);
                                ctx.stroke();
                            }
                        }
                    }
                    requestAnimationFrame(animateCanvas);
                }
                animateCanvas();
            }

            // Scroll Interactions & Counter
            const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        
                        if (entry.target.querySelector('.count-up')) {
                            const counters = entry.target.querySelectorAll('.count-up');
                            counters.forEach(counter => {
                                if(counter.classList.contains('counted')) return;
                                counter.classList.add('counted');
                                
                                const target = parseFloat(counter.getAttribute('data-target'));
                                const decimals = parseInt(counter.getAttribute('data-decimals') || 0);
                                const prefix = counter.getAttribute('data-prefix') || '';
                                const suffix = counter.getAttribute('data-suffix') || '';
                                
                                let scrambleInt = setInterval(() => {
                                    counter.innerText = prefix + (Math.random() * target * 1.5).toFixed(decimals) + suffix;
                                }, 30);

                                setTimeout(() => {
                                    clearInterval(scrambleInt);
                                    const duration = 2000; 
                                    const frames = 60;
                                    const step = target / frames;
                                    let current = 0;
                                    
                                    const updateCounter = setInterval(() => {
                                        current += step;
                                        if (current >= target) {
                                            counter.innerText = prefix + target.toFixed(decimals) + suffix;
                                            clearInterval(updateCounter);
                                        } else {
                                            counter.innerText = prefix + current.toFixed(decimals) + suffix;
                                        }
                                    }, duration / frames);
                                }, 600);
                            });
                        }
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise-bg"></div>

<div className="fixed inset-0 pointer-events-none z-0 grid-bg-dense opacity-30"></div>
<div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_top_right,rgba(196,181,253,0.03)_0%,#030303_60%)]"></div>
<div className="structural-line-v left-[5%]"></div>
<div className="structural-line-v right-[5%]"></div>
<div className="structural-line-v left-1/2 opacity-50"></div>
<canvas className="fixed inset-0 pointer-events-none z-0 opacity-20" id="hero-canvas"></canvas>

<div className="fixed inset-0 z-[100] bg-base flex flex-col items-center justify-center transition-opacity duration-1000 ease-expo" id="loader">
<div className="w-80 flex flex-col gap-6 hud-border p-8 bg-surface">
<div className="flex justify-between font-mono text-xs uppercase tracking-[0.2em] text-secondary items-center border-b border-white/10 pb-4">
<span className="scramble" id="loader-text">Initializing Protocol</span>
<span className="text-accent font-normal bg-accent/10 px-2 py-1" id="loader-counter">000%</span>
</div>
<div className="flex flex-col gap-2 font-mono text-[10px] text-[#444] uppercase tracking-widest h-12 overflow-hidden" id="loader-logs">
<div>[0x01] Handshake established...</div>
<div>[0x02] Decrypting node clusters...</div>
</div>
<div className="w-full h-[1px] bg-white/5 relative overflow-hidden mt-2">
<div className="absolute top-0 left-0 h-full w-0 bg-accent shadow-[0_0_10px_rgba(196,181,253,0.8)] transition-all duration-75 ease-linear" id="loader-bar"></div>
</div>
</div>
</div>

<nav className="fixed top-0 w-full z-40 px-6 md:px-12 py-6 flex items-center justify-between transition-transform duration-700 transform -translate-y-full nav-reveal mix-blend-difference border-b border-white/5 backdrop-blur-md bg-black/20">
<div className="flex items-center gap-6">
<div className="w-1.5 h-1.5 bg-accent blinking-dot rounded-none rotate-45"></div>
<span className="font-syne font-normal text-xl tracking-tighter text-primary uppercase scramble cursor-default">Meridian</span>
<span className="font-mono text-[10px] text-secondary border border-white/10 px-2 py-0.5 uppercase tracking-widest hidden md:block">SYS.ON // Lvl.9</span>
</div>
<div className="hidden md:flex items-center gap-12 font-mono text-xs text-secondary uppercase tracking-[0.2em]">
<a className="hover:text-primary transition-colors relative group py-2 flex items-center gap-2" href="#thesis">
<span className="text-[10px] text-[#444]">01</span> Vectors
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent scale-x-0 origin-right group-hover:origin-left group-hover:scale-x-100 transition-transform duration-500 ease-expo"></span>
</a>
<a className="hover:text-primary transition-colors relative group py-2 flex items-center gap-2" href="#portfolio">
<span className="text-[10px] text-[#444]">02</span> Registry
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent scale-x-0 origin-right group-hover:origin-left group-hover:scale-x-100 transition-transform duration-500 ease-expo"></span>
</a>
<a className="hover:text-primary transition-colors relative group py-2 flex items-center gap-2" href="#team">
<span className="text-[10px] text-[#444]">03</span> Operatives
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent scale-x-0 origin-right group-hover:origin-left group-hover:scale-x-100 transition-transform duration-500 ease-expo"></span>
</a>
</div>
<button className="btn-swiss h-10 px-6 font-mono text-xs uppercase tracking-[0.2em] text-primary group">
<div className="scanline"></div>
<span className="relative z-10 group-hover:text-white transition-colors font-normal flex items-center gap-2">
                Login <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</button>
</nav>

<div className="fixed left-0 top-0 bottom-0 w-12 hidden 2xl:flex flex-col items-center justify-between py-24 border-r border-white/5 z-30 mix-blend-difference pointer-events-none">
<span className="font-mono text-[10px] text-secondary uppercase tracking-widest -rotate-90 whitespace-nowrap">Node 0x8F.A2</span>
<div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-secondary to-transparent"></div>
<span className="font-mono text-[10px] text-secondary uppercase tracking-widest -rotate-90 whitespace-nowrap scramble">Global.Sync</span>
</div>

<section className="min-h-[100dvh] pt-40 pb-20 px-6 md:px-[8%] flex flex-col justify-center relative z-10 border-b border-white/5">
<div className="max-w-[1600px] mx-auto w-full grid lg:grid-cols-[60%_40%] gap-12 items-center relative">

<div className="flex flex-col items-start relative z-10">
<div className="bracket-corners absolute -top-10 -left-6 w-[120%] h-[120%] pointer-events-none opacity-50"></div>
<div className="flex items-center gap-4 border border-white/10 p-1 pr-4 reveal rounded-none mb-10 bg-surface/80 backdrop-blur-md hud-border">
<div className="bg-white/5 px-3 py-1.5 flex items-center justify-center">
<span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full bg-accent opacity-75"></span><span className="relative inline-flex h-2 w-2 bg-accent"></span></span>
</div>
<span className="font-mono text-primary text-xs tracking-[0.2em] uppercase scramble">Status: Deploying Capital</span>
<span className="w-px h-4 bg-white/20 mx-2"></span>
<span className="font-mono text-[10px] text-secondary tracking-widest">AUM: $2.8B</span>
</div>
<h1 className="font-syne text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter text-primary reveal uppercase relative z-10 mix-blend-lighten">
<span className="reveal-text block text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-[#333]">Backing</span>
<span className="reveal-text block text-accent italic pr-4 mt-2">Anomalies.</span>
</h1>
<div className="grid md:grid-cols-2 gap-8 mt-12 reveal">
<p className="font-geist text-lg text-secondary leading-relaxed font-normal">
                        We deploy $600M into deep tech, asymmetric defense, and autonomous infrastructure. If consensus agrees with you, we are not interested.
                    </p>
<div className="flex flex-col gap-4 border-l border-white/10 pl-6 font-mono text-[10px] uppercase tracking-widest text-[#666]">
<div className="flex justify-between items-center"><span className="text-primary">01. Architecture</span><span className="text-accent">++</span></div>
<div className="flex justify-between items-center"><span className="text-primary">02. Kinetics</span><span className="text-accent">++</span></div>
<div className="flex justify-between items-center"><span className="text-primary">03. Syn-Bio</span><span className="text-accent">++</span></div>
</div>
</div>
<div className="flex flex-wrap items-center gap-6 mt-16 reveal relative">
<button className="btn-swiss h-14 px-10 font-mono text-xs uppercase tracking-[0.2em] text-black bg-primary group hover:bg-transparent hover:text-primary transition-all duration-300">
<span className="relative z-10 font-semibold flex items-center gap-3">
                            Initiate Protocol <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
<div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-secondary">
<iconify-icon className="text-lg text-accent" icon="solar:shield-check-linear"></iconify-icon> Encryption Active
                    </div>
</div>
</div>

<div className="relative w-full max-w-[600px] ml-auto reveal group perspective-1000 mt-16 lg:mt-0">
<div className="absolute -inset-4 border border-white/5 pointer-events-none group-hover:scale-105 transition-transform duration-1000"></div>
<div className="chamfer-panel bg-surface2/90 backdrop-blur-xl border border-white/10 relative overflow-hidden transition-all duration-700 ease-expo group-hover:-translate-y-2 shadow-2xl">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-10 mix-blend-screen group-hover:opacity-30 transition-opacity duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-br from-base/80 via-transparent to-base/90"></div>

<div className="relative z-10 border-b border-white/10 p-4 flex justify-between items-center bg-black/40">
<div className="flex gap-2">
<span className="w-1.5 h-1.5 bg-white/20"></span>
<span className="w-1.5 h-1.5 bg-white/20"></span>
<span className="w-1.5 h-1.5 bg-accent blinking-dot"></span>
</div>
<div className="flex gap-4">
<span className="font-mono text-[10px] text-secondary uppercase tracking-[0.2em] scramble">SYS_TEL: LIVE</span>
<iconify-icon className="text-secondary hover:text-primary cursor-pointer transition-colors" icon="solar:maximize-square-linear"></iconify-icon>
</div>
</div>

<div className="relative z-10 p-6 md:p-10 flex flex-col gap-8">

<div className="flex items-end justify-between border-b border-white/5 pb-8 relative group/metric">
<div>
<div className="font-mono text-[10px] text-accent mb-3 tracking-widest uppercase flex items-center gap-2">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon> Active Core Capital
                                </div>
<div className="font-syne text-5xl md:text-6xl tracking-tighter text-primary leading-none count-up" data-decimals="2" data-prefix="$" data-suffix="B" data-target="2.84">0.00</div>
</div>
<div className="w-32 h-16 relative">
<svg className="w-full h-full text-white/10 group-hover/metric:text-accent transition-colors duration-500" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0,80 Q20,30 40,60 T70,20 L100,40 L100,100 L0,100 Z" fill="currentColor" opacity="0.05"></path>
<path className="chart-path" d="M0,80 Q20,30 40,60 T70,20 L100,40" fill="transparent" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-black/40 border border-white/5 p-4 flex flex-col gap-2 hover:border-accent/30 transition-colors cursor-default">
<span className="font-mono text-[10px] text-secondary uppercase tracking-widest">Active Nodes</span>
<span className="font-syne text-2xl text-primary tracking-tight">47<span className="text-secondary text-sm ml-1">/102</span></span>
</div>
<div className="bg-black/40 border border-white/5 p-4 flex flex-col gap-2 hover:border-accent/30 transition-colors cursor-default">
<span className="font-mono text-[10px] text-secondary uppercase tracking-widest">Yield Vector</span>
<span className="font-syne text-2xl text-success tracking-tight">+31.4%</span>
</div>
</div>

<div className="flex flex-col gap-1 font-mono text-[10px] uppercase tracking-widest mt-2 border border-white/5 p-3 bg-[#030303] relative overflow-hidden">
<div className="pulse-line"></div>
<div className="grid grid-cols-[auto_1fr_auto] gap-4 text-[#555] pb-2 mb-2 border-b border-white/5">
<span>ID</span><span>Target</span><span className="text-right">Status</span>
</div>
<div className="grid grid-cols-[auto_1fr_auto] gap-4 items-center py-1.5 text-primary group-hover:translate-x-1 transition-transform">
<span className="text-secondary">#084</span><span className="scramble">Kairos_Swarm</span><span className="text-accent text-right">Deployed</span>
</div>
<div className="grid grid-cols-[auto_1fr_auto] gap-4 items-center py-1.5 text-primary group-hover:translate-x-1 transition-transform delay-75">
<span className="text-secondary">#092</span><span className="scramble">Vantex_Kntc</span><span className="text-success text-right">Scaling</span>
</div>
<div className="grid grid-cols-[auto_1fr_auto] gap-4 items-center py-1.5 text-primary group-hover:translate-x-1 transition-transform delay-150">
<span className="text-secondary">#103</span><span className="scramble">Helix_Bio_Rx</span><span className="text-warning text-right">Trials</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-4 border-b border-white/5 bg-[#040404] overflow-hidden relative z-10 flex flex-col gap-1">
<div className="w-full relative">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#040404] to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#040404] to-transparent z-10"></div>
<div className="marquee-scroll flex items-center gap-12 font-mono text-[10px] tracking-widest uppercase text-[#555]">
<span className="flex items-center gap-3"><span className="w-1 h-1 bg-accent"></span> Y Combinator // Co-Invest // Tier-1</span>
<span className="text-white/20">|</span>
<span className="flex items-center gap-3"><span className="w-1 h-1 bg-[#444]"></span> Sequoia // Follow-on // Syndicate</span>
<span className="text-white/20">|</span>
<span className="flex items-center gap-3"><span className="w-1 h-1 bg-accent"></span> a16z // Strategic // Growth</span>
<span className="text-white/20">|</span>
<span className="flex items-center gap-3"><span className="w-1 h-1 bg-[#444]"></span> Founders Fund // Lead // Seed</span>
<span className="text-white/20">|</span>

<span className="flex items-center gap-3"><span className="w-1 h-1 bg-accent"></span> Y Combinator // Co-Invest // Tier-1</span>
<span className="text-white/20">|</span>
<span className="flex items-center gap-3"><span className="w-1 h-1 bg-[#444]"></span> Sequoia // Follow-on // Syndicate</span>
<span className="text-white/20">|</span>
<span className="flex items-center gap-3"><span className="w-1 h-1 bg-accent"></span> a16z // Strategic // Growth</span>
<span className="text-white/20">|</span>
<span className="flex items-center gap-3"><span className="w-1 h-1 bg-[#444]"></span> Founders Fund // Lead // Seed</span>
</div>
</div>
<div className="w-full relative mt-1 opacity-50">
<div className="marquee-reverse flex items-center gap-16 font-mono text-[9px] tracking-[0.3em] uppercase text-secondary">
<span>[ Hash: 0x98A.F4 ]</span><span>[ Status: Validated ]</span><span>[ Latency: 12ms ]</span><span>[ Protocol: Active ]</span>
<span>[ Hash: 0x11B.C2 ]</span><span>[ Status: Validated ]</span><span>[ Latency: 08ms ]</span><span>[ Protocol: Standby ]</span>
<span>[ Hash: 0x98A.F4 ]</span><span>[ Status: Validated ]</span><span>[ Latency: 12ms ]</span><span>[ Protocol: Active ]</span>
<span>[ Hash: 0x11B.C2 ]</span><span>[ Status: Validated ]</span><span>[ Latency: 08ms ]</span><span>[ Protocol: Standby ]</span>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-[8%] max-w-[1600px] mx-auto relative z-10 border-b border-white/5" id="thesis">
<div className="structural-line-h top-12"></div>
<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 reveal gap-8 relative z-10">
<div className="flex items-start gap-4">
<span className="font-mono text-xs text-accent uppercase tracking-widest mt-2 block hidden md:block">[ SEC_02 ]</span>
<h2 className="font-syne text-5xl md:text-7xl tracking-tighter text-primary uppercase leading-none">Core <br/><span className="text-secondary italic">Vectors</span></h2>
</div>
<div className="text-left md:text-right max-w-md bg-surface2/50 p-6 border border-white/5 backdrop-blur-sm hud-border">
<p className="font-geist text-secondary mb-4 text-sm font-normal">Targeting infrastructure layer paradigms that rewrite fundamental physics and compute constraints. High-conviction concentration.</p>
<div className="w-full h-px bg-white/10 mb-4"></div>
<div className="flex justify-between items-center font-mono text-[10px] text-primary uppercase tracking-widest">
<span>Deployments: 03</span>
<span className="flex items-center gap-2"><div className="w-1 h-1 bg-accent"></div> Live</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/10 border border-white/10 p-px relative z-10">

<div className="lg:col-span-7 group relative overflow-hidden bg-surface flex flex-col reveal min-h-[500px]">
<img alt="Compute" className="absolute inset-0 w-full h-full object-cover img-overlay" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-base via-base/80 to-transparent"></div>

<div className="absolute top-6 right-6 font-mono text-[10px] text-white/40 tracking-widest text-right hidden md:block">
<div>CPU_LOAD // 98.4%</div>
<div>MEM_ALLOC // 14TB</div>
</div>
<div className="relative z-10 p-8 md:p-12 flex flex-col h-full justify-between">
<div className="flex items-center gap-4 bg-black/80 backdrop-blur-md px-4 py-2 border border-white/10 w-fit hud-border">
<span className="font-mono text-[10px] text-accent uppercase tracking-widest">M-01</span>
<span className="w-px h-3 bg-white/20"></span>
<iconify-icon className="text-lg text-primary" icon="solar:cpu-linear"></iconify-icon>
</div>
<div className="mt-auto z-20">
<h3 className="font-syne text-4xl md:text-5xl text-primary font-normal mb-4 uppercase tracking-tighter">Compute Arch</h3>
<p className="font-geist text-secondary max-w-lg text-base">Optimized silicon, orchestration layers, and energy-dense infrastructure for magnitude-scale deployments.</p>

<div className="tech-panel-content">
<div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10">
<div className="bg-black/80 p-4">
<div className="font-mono text-[10px] text-[#666] uppercase tracking-widest mb-1">Target</div>
<div className="font-mono text-xs text-primary uppercase">Silicon &amp; Energy</div>
</div>
<div className="bg-black/80 p-4">
<div className="font-mono text-[10px] text-[#666] uppercase tracking-widest mb-1">Cap Allocation</div>
<div className="font-mono text-xs text-primary uppercase">$200M Block</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 border border-transparent group-hover:border-accent/40 transition-colors duration-500 pointer-events-none"></div>
</div>

<div className="lg:col-span-5 group relative overflow-hidden bg-surface flex flex-col reveal min-h-[500px]" style={{transitionDelay: '100ms'}}>
<img alt="Defense" className="absolute inset-0 w-full h-full object-cover img-overlay" src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-base via-base/80 to-transparent"></div>
<div className="relative z-10 p-8 md:p-12 flex flex-col h-full justify-between">
<div className="flex items-center gap-4 bg-black/80 backdrop-blur-md px-4 py-2 border border-white/10 w-fit hud-border">
<span className="font-mono text-[10px] text-accent uppercase tracking-widest">M-02</span>
<span className="w-px h-3 bg-white/20"></span>
<iconify-icon className="text-lg text-primary" icon="solar:radar-linear"></iconify-icon>
</div>
<div className="mt-auto z-20">
<h3 className="font-syne text-4xl md:text-5xl text-primary font-normal mb-4 uppercase tracking-tighter">Asymmetric</h3>
<p className="font-geist text-secondary text-base">Autonomous interceptors and kinetic networks overriding legacy prime contractors.</p>
<div className="tech-panel-content">
<div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10">
<div className="bg-black/80 p-4">
<div className="font-mono text-[10px] text-[#666] uppercase tracking-widest mb-1">Target</div>
<div className="font-mono text-xs text-primary uppercase">Drone / Kinetic</div>
</div>
<div className="bg-black/80 p-4">
<div className="font-mono text-[10px] text-[#666] uppercase tracking-widest mb-1">Cap Allocation</div>
<div className="font-mono text-xs text-primary uppercase">$150M Block</div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute inset-0 border border-transparent group-hover:border-accent/40 transition-colors duration-500 pointer-events-none"></div>
</div>

<div className="lg:col-span-12 group relative overflow-hidden bg-surface flex flex-col reveal h-[400px]">
<img alt="Bio" className="absolute inset-0 w-full h-full object-cover img-overlay" src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" style={{objectPosition: 'center 20%'}}/>
<div className="absolute inset-0 bg-gradient-to-r from-base via-base/90 to-transparent"></div>

<div className="absolute bottom-6 right-6 font-mono text-[10px] text-white/20 tracking-widest text-right hidden md:block">
<iconify-icon className="text-accent mb-1" icon="solar:gps-linear"></iconify-icon>
<div>LAT: 37.7749 N</div>
<div>LNG: 122.4194 W</div>
</div>
<div className="relative z-10 p-8 md:p-12 flex flex-col h-full justify-center max-w-3xl">
<div className="flex items-center gap-4 bg-black/80 backdrop-blur-md px-4 py-2 border border-white/10 w-fit hud-border mb-8 transform -translate-x-2 group-hover:translate-x-0 transition-transform duration-500">
<span className="font-mono text-[10px] text-accent uppercase tracking-widest">M-03</span>
<span className="w-px h-3 bg-white/20"></span>
<iconify-icon className="text-lg text-primary" icon="solar:dna-linear"></iconify-icon>
</div>
<h3 className="font-syne text-5xl md:text-6xl text-primary font-normal mb-4 uppercase tracking-tighter">Synthetic Bio</h3>
<p className="font-geist text-secondary text-lg mb-8 max-w-2xl">Biology as an engineering discipline. Compilers for physical space, programmable therapeutics, and industrial bio-manufacturing at zero marginal cost.</p>
<div className="flex gap-8 font-mono text-[10px] uppercase tracking-widest border-t border-white/10 pt-6 mt-4 w-fit">
<div><span className="text-[#666] block mb-1">Status</span><span className="text-success">Active Protocol</span></div>
<div><span className="text-[#666] block mb-1">Cap Allocation</span><span className="text-primary">$250M Block</span></div>
</div>
</div>
<div className="absolute inset-0 border border-transparent group-hover:border-accent/40 transition-colors duration-500 pointer-events-none"></div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-surface relative z-10 overflow-hidden py-0">
<div className="absolute inset-0 grid-bg-dense opacity-20 pointer-events-none"></div>

<div className="relative z-10 flex border-b border-white/5 bg-[#020202] p-4 px-6 md:px-[8%] items-center justify-between hud-border border-x-0 border-t-0">
<span className="font-mono text-[10px] text-primary tracking-widest uppercase flex items-center gap-4">
<iconify-icon className="text-accent text-lg" icon="solar:server-square-linear"></iconify-icon> Telemetry Matrix
            </span>
<div className="flex gap-2 h-2">
<span className="w-1 bg-accent/40 animate-[pulse_1s_ease-in-out_infinite]"></span>
<span className="w-1 bg-accent/60 animate-[pulse_1.2s_ease-in-out_infinite_0.2s]"></span>
<span className="w-1 bg-accent animate-[pulse_0.8s_ease-in-out_infinite_0.4s]"></span>
<span className="w-1 bg-white/20"></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/5 w-full relative z-10">

<div className="bg-base p-10 flex flex-col justify-between group hover:bg-surface2 transition-colors duration-500 reveal h-[250px]">
<div className="flex justify-between items-start">
<span className="font-mono text-[10px] text-[#666] uppercase tracking-widest group-hover:text-primary transition-colors">Yield Density</span>
<iconify-icon className="text-white/10 group-hover:text-accent text-xl transition-colors" icon="solar:bolt-circle-linear"></iconify-icon>
</div>
<div>
<div className="font-syne text-6xl text-primary font-normal tracking-tighter mb-2 count-up" data-decimals="1" data-suffix="%" data-target="31.4">00.0%</div>
<div className="w-full h-px bg-white/5 relative overflow-hidden mt-4">
<div className="absolute inset-y-0 left-0 w-1/3 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
</div>
<div className="font-mono text-[9px] text-secondary tracking-widest uppercase mt-3 flex justify-between">
<span>MoM Variance</span> <span className="text-success">+2.4%</span>
</div>
</div>
</div>

<div className="bg-base p-10 flex flex-col justify-between group hover:bg-surface2 transition-colors duration-500 reveal h-[250px]" style={{transitionDelay: '100ms'}}>
<div className="flex justify-between items-start">
<span className="font-mono text-[10px] text-[#666] uppercase tracking-widest group-hover:text-primary transition-colors">Assets Deployed</span>
<iconify-icon className="text-white/10 group-hover:text-accent text-xl transition-colors" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<div>
<div className="font-syne text-6xl text-primary font-normal tracking-tighter mb-2 count-up" data-decimals="0" data-target="47">00</div>
<div className="w-full h-px bg-white/5 relative overflow-hidden mt-4">
<div className="absolute inset-y-0 left-0 w-full bg-white/10"></div>
<div className="absolute inset-y-0 left-0 w-[47%] bg-accent transition-all duration-1000"></div>
</div>
<div className="font-mono text-[9px] text-secondary tracking-widest uppercase mt-3 flex justify-between">
<span>Capacity</span> <span>47/100</span>
</div>
</div>
</div>

<div className="bg-base p-10 flex flex-col justify-between group hover:bg-surface2 transition-colors duration-500 reveal h-[250px]" style={{transitionDelay: '200ms'}}>
<div className="flex justify-between items-start">
<span className="font-mono text-[10px] text-[#666] uppercase tracking-widest group-hover:text-primary transition-colors">Liquidity Events</span>
<iconify-icon className="text-white/10 group-hover:text-accent text-xl transition-colors" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div>
<div className="font-syne text-6xl text-primary font-normal tracking-tighter mb-2 count-up" data-decimals="0" data-target="12">00</div>
<div className="h-8 w-full mt-2 relative">
<svg className="w-full h-full text-white/10 group-hover:text-accent transition-colors duration-500" preserveaspectratio="none" viewbox="0 0 100 20">
<polyline className="chart-path" fill="none" points="0,18 20,18 30,5 50,5 60,15 80,15 100,2" stroke="currentColor" strokeWidth="1.5"></polyline>
</svg>
</div>
<div className="font-mono text-[9px] text-secondary tracking-widest uppercase mt-1 flex justify-between">
<span>Total Val</span> <span>$14.2B</span>
</div>
</div>
</div>

<div className="bg-base p-10 flex flex-col justify-between group hover:bg-surface2 transition-colors duration-500 reveal h-[250px]" style={{transitionDelay: '300ms'}}>
<div className="flex justify-between items-start">
<span className="font-mono text-[10px] text-[#666] uppercase tracking-widest group-hover:text-primary transition-colors">Compute Alloc</span>
<iconify-icon className="text-white/10 group-hover:text-accent text-xl transition-colors" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<div>
<div className="font-syne text-6xl text-primary font-normal tracking-tighter mb-2 count-up" data-decimals="0" data-suffix="PT" data-target="94">00</div>
<div className="w-full flex gap-1 mt-4">
<div className="h-1 w-full bg-accent"></div>
<div className="h-1 w-full bg-accent"></div>
<div className="h-1 w-full bg-accent"></div>
<div className="h-1 w-full bg-white/10"></div>
</div>
<div className="font-mono text-[9px] text-secondary tracking-widest uppercase mt-3 flex justify-between">
<span>Utilization</span> <span className="text-warning">High</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-[8%] max-w-[1600px] mx-auto relative z-10 border-b border-white/5" id="portfolio">
<div className="flex flex-col md:flex-row justify-between items-end mb-24 reveal gap-8">
<div className="flex flex-col border-l border-accent pl-6">
<span className="font-mono text-[10px] text-accent uppercase tracking-widest mb-4 block">[ SEC_03 ]</span>
<h2 className="font-syne text-5xl md:text-7xl tracking-tighter text-primary uppercase leading-none">Asset <br/><span className="text-secondary italic">Registry</span></h2>
</div>
<p className="font-geist text-secondary max-w-lg text-lg font-normal mb-2">Top decile performers orchestrating structural shifts in global tech dependencies. Detailed telemetry below.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-white/10 border border-white/10">

<div className="md:col-span-8 group relative bg-surface2 overflow-hidden reveal flex flex-col justify-end min-h-[600px] p-px">
<div className="absolute inset-0 bg-base m-px overflow-hidden">
<img alt="Kairos" className="absolute inset-0 w-full h-full object-cover img-overlay opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-1000" src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,%3Csvg width=\'40\' height=\'40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 40 L40 0 H40 V40 Z\' fill=\'rgba(255,255,255,0.01)\'/%3E%3C/svg%3E')]"></div>
<div className="absolute top-8 left-8 border border-white/10 p-2 bg-black/50 backdrop-blur hud-border">
<svg className="text-accent animate-[spin_10s_linear_infinite]" height="40" viewbox="0 0 100 100" width="40">
<circle cx="50" cy="50" fill="none" opacity="0.5" r="45" stroke="currentColor" stroke-dasharray="10 5 20 5" strokeWidth="1"></circle>
<circle cx="50" cy="50" fill="none" opacity="0.8" r="35" stroke="currentColor" stroke-dasharray="5 15" strokeWidth="1"></circle>
</svg>
</div>
<div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end">
<div className="flex items-center gap-4 mb-6">
<span className="font-mono text-[10px] text-black bg-accent px-3 py-1 uppercase tracking-widest font-semibold">Arch Lead</span>
<span className="font-mono text-[10px] text-primary border border-white/20 px-3 py-1 uppercase tracking-widest bg-black/80 backdrop-blur hud-border scramble">ID: 0x8F.Kai</span>
</div>
<h3 className="font-syne text-6xl md:text-8xl font-normal tracking-tighter text-primary uppercase mb-6 drop-shadow-lg">Kairos</h3>
<p className="font-geist text-xl text-secondary group-hover:text-primary transition-colors max-w-2xl">Orchestration protocol for multi-modal agent swarms. Currently handling 40% of tier-1 compute distribution globally.</p>
</div>
</div>
</div>

<div className="md:col-span-4 bg-surface2 flex flex-col justify-between p-8 md:p-10 reveal border-l border-white/10 group">
<div>
<div className="flex justify-between items-center mb-10 pb-4 border-b border-white/10">
<span className="font-mono text-[10px] text-[#666] uppercase tracking-widest">Asset Telemetry</span>
<div className="w-2 h-2 bg-success rounded-none blinking-dot"></div>
</div>
<div className="flex flex-col gap-8">
<div>
<span className="text-[#666] font-mono text-[10px] block uppercase tracking-widest mb-2">Stage // Round</span>
<span className="text-primary font-syne text-2xl uppercase tracking-tight block group-hover:text-accent transition-colors">Series A</span>
</div>
<div>
<span className="text-[#666] font-mono text-[10px] block uppercase tracking-widest mb-2">Initial Cap Allocated</span>
<span className="text-primary font-syne text-2xl uppercase tracking-tight block group-hover:text-accent transition-colors">$18.4M</span>
</div>
<div>
<span className="text-[#666] font-mono text-[10px] block uppercase tracking-widest mb-2">Network Hash</span>
<span className="text-primary font-mono text-xs uppercase tracking-widest block bg-white/5 px-3 py-2 border border-white/10 scramble">0x94F...2A1B</span>
</div>
</div>
</div>
<div className="mt-12 pt-6 border-t border-white/10">
<button className="w-full border border-white/20 py-4 font-mono text-[10px] text-primary uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 flex justify-center items-center gap-2">
                        View Complete Logs <iconify-icon icon="solar:document-text-linear"></iconify-icon>
</button>
</div>
</div>

<div className="md:col-span-6 group relative bg-base overflow-hidden reveal p-8 md:p-12 min-h-[400px] flex flex-col justify-between hover:bg-surface2 transition-colors border-t border-white/10">
<div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 blur-[80px] group-hover:bg-accent/10 transition-colors pointer-events-none"></div>
<div className="relative z-10 flex justify-between items-start mb-12">
<div>
<span className="font-mono text-[10px] text-secondary border border-white/10 px-2 py-1 uppercase tracking-widest group-hover:border-accent/50 group-hover:text-accent transition-colors block w-fit mb-4 hud-border">Def-01</span>
<h3 className="font-syne text-4xl md:text-5xl font-normal tracking-tighter text-primary uppercase">Vantex</h3>
</div>
<iconify-icon className="text-3xl text-white/10 group-hover:text-accent transition-colors" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div className="relative z-10">
<p className="font-geist text-secondary mb-8 text-base">Autonomous kinetic interceptors. Redefining cost-per-kill metrics in contested drone defense theaters.</p>
<div className="flex justify-between font-mono text-[10px] uppercase tracking-widest border-t border-white/10 pt-4">
<span className="text-[#666]">Seed // $4.2M</span>
<span className="text-primary scramble">Scaling</span>
</div>
</div>
</div>
<div className="md:col-span-6 group relative bg-base overflow-hidden reveal p-8 md:p-12 min-h-[400px] flex flex-col justify-between hover:bg-surface2 transition-colors border-t border-l md:border-l border-white/10" style={{transitionDelay: '100ms'}}>
<div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 blur-[80px] group-hover:bg-accent/10 transition-colors pointer-events-none"></div>
<div className="relative z-10 flex justify-between items-start mb-12">
<div>
<span className="font-mono text-[10px] text-secondary border border-white/10 px-2 py-1 uppercase tracking-widest group-hover:border-accent/50 group-hover:text-accent transition-colors block w-fit mb-4 hud-border">Bio-02</span>
<h3 className="font-syne text-4xl md:text-5xl font-normal tracking-tighter text-primary uppercase">Helix</h3>
</div>
<iconify-icon className="text-3xl text-white/10 group-hover:text-accent transition-colors" icon="solar:bacteria-linear"></iconify-icon>
</div>
<div className="relative z-10">
<p className="font-geist text-secondary mb-8 text-base">Programmable RNA compilers. Reducing therapeutic discovery cycles from years to computation hours.</p>
<div className="flex justify-between font-mono text-[10px] uppercase tracking-widest border-t border-white/10 pt-4">
<span className="text-[#666]">Seed // $6.8M</span>
<span className="text-warning scramble">Trials</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-[8%] max-w-[1600px] mx-auto relative z-10 border-b border-white/5" id="team">
<div className="text-center mb-32 reveal flex flex-col items-center">
<span className="font-mono text-[10px] text-accent uppercase tracking-widest mb-4 block border border-accent/30 px-3 py-1 bg-accent/5">[ SEC_04 ]</span>
<h2 className="font-syne text-5xl md:text-7xl tracking-tighter text-primary uppercase leading-none mb-6">Command <br/><span className="text-secondary italic">Operatives</span></h2>
<p className="font-mono text-xs text-[#555] tracking-widest uppercase">Technologists Turned Allocators</p>
</div>
<div className="grid md:grid-cols-3 gap-12 relative items-start">

<div className="absolute top-[40%] left-[10%] right-[10%] h-px bg-white/5 hidden md:block z-0 pointer-events-none"></div>

<div className="group reveal relative z-10 bg-base p-4 border border-white/5 hover:border-accent/30 transition-all duration-500 hud-border md:mt-0">
<div className="aspect-[3/4] overflow-hidden bg-surface relative grayscale group-hover:grayscale-0 transition-all duration-700">
<img alt="Elena" className="w-full h-full object-cover img-overlay scale-105 group-hover:scale-100" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-transparent h-[20%] -translate-y-[100%] group-hover:translate-y-[500%] transition-transform duration-[2s] ease-linear pointer-events-none"></div>
<div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start bg-gradient-to-b from-black/80 to-transparent">
<span className="font-mono text-[10px] text-black bg-white px-2 py-1 uppercase tracking-widest font-semibold shadow-lg mix-blend-screen">ER-01</span>
<iconify-icon className="text-2xl text-white/50 group-hover:text-accent transition-colors" icon="solar:fingerprint-linear"></iconify-icon>
</div>
</div>
<div className="mt-6 flex flex-col p-2">
<h3 className="font-syne text-3xl text-primary font-normal uppercase tracking-tighter mb-1">Elena Rostova</h3>
<p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-6 border-b border-white/5 pb-4 block w-full">Lead Arch / Lvl 9</p>
<div className="grid grid-cols-2 gap-2 font-mono text-[9px] uppercase tracking-widest text-[#666] mb-4">
<div><span className="block text-[#444] mb-1">Origin</span>DeepMind</div>
<div><span className="block text-[#444] mb-1">Focus</span>Compute Arch</div>
</div>
</div>
</div>

<div className="group reveal relative z-10 bg-base p-4 border border-white/5 hover:border-accent/30 transition-all duration-500 hud-border md:mt-16" style={{transitionDelay: '100ms'}}>
<div className="aspect-[3/4] overflow-hidden bg-surface relative grayscale group-hover:grayscale-0 transition-all duration-700">
<img alt="Marcus" className="w-full h-full object-cover img-overlay scale-105 group-hover:scale-100" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-transparent h-[20%] -translate-y-[100%] group-hover:translate-y-[500%] transition-transform duration-[2s] ease-linear pointer-events-none"></div>
<div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start bg-gradient-to-b from-black/80 to-transparent">
<span className="font-mono text-[10px] text-black bg-white px-2 py-1 uppercase tracking-widest font-semibold shadow-lg mix-blend-screen">MC-02</span>
<iconify-icon className="text-2xl text-white/50 group-hover:text-accent transition-colors" icon="solar:fingerprint-linear"></iconify-icon>
</div>
</div>
<div className="mt-6 flex flex-col p-2">
<h3 className="font-syne text-3xl text-primary font-normal uppercase tracking-tighter mb-1">Marcus Chen</h3>
<p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-6 border-b border-white/5 pb-4 block w-full">Def &amp; Space / Lvl 9</p>
<div className="grid grid-cols-2 gap-2 font-mono text-[9px] uppercase tracking-widest text-[#666] mb-4">
<div><span className="block text-[#444] mb-1">Origin</span>Palantir</div>
<div><span className="block text-[#444] mb-1">Focus</span>Kinetics</div>
</div>
</div>
</div>

<div className="group reveal relative z-10 bg-base p-4 border border-white/5 hover:border-accent/30 transition-all duration-500 hud-border md:mt-32" style={{transitionDelay: '200ms'}}>
<div className="aspect-[3/4] overflow-hidden bg-surface relative grayscale group-hover:grayscale-0 transition-all duration-700">
<img alt="Sarah" className="w-full h-full object-cover img-overlay scale-105 group-hover:scale-100" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-transparent h-[20%] -translate-y-[100%] group-hover:translate-y-[500%] transition-transform duration-[2s] ease-linear pointer-events-none"></div>
<div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start bg-gradient-to-b from-black/80 to-transparent">
<span className="font-mono text-[10px] text-black bg-white px-2 py-1 uppercase tracking-widest font-semibold shadow-lg mix-blend-screen">SW-03</span>
<iconify-icon className="text-2xl text-white/50 group-hover:text-accent transition-colors" icon="solar:fingerprint-linear"></iconify-icon>
</div>
</div>
<div className="mt-6 flex flex-col p-2">
<h3 className="font-syne text-3xl text-primary font-normal uppercase tracking-tighter mb-1">Sarah Wood</h3>
<p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-6 border-b border-white/5 pb-4 block w-full">Bio Eng / Lvl 8</p>
<div className="grid grid-cols-2 gap-2 font-mono text-[9px] uppercase tracking-widest text-[#666] mb-4">
<div><span className="block text-[#444] mb-1">Origin</span>MIT Labs</div>
<div><span className="block text-[#444] mb-1">Focus</span>Syn-Bio</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-b border-white/5 bg-surface2 relative z-10 overflow-hidden">
<div className="absolute inset-0 grid-bg-dense opacity-20 mix-blend-screen"></div>
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
<div className="max-w-[1600px] mx-auto px-6 md:px-[8%] flex flex-col md:flex-row gap-16 relative z-10">
<div className="md:w-[40%] reveal sticky top-32 h-fit">
<span className="font-mono text-[10px] text-accent uppercase tracking-widest mb-4 block">[ SEC_05 // Validation ]</span>
<h2 className="font-syne text-5xl md:text-6xl tracking-tighter text-primary uppercase leading-none mb-8">Institutional <br/>Consensus</h2>
<p className="font-geist text-secondary text-base mb-8 border-l border-white/10 pl-4">Backed by top-tier endowments, sovereign wealth, and principal technologists globally.</p>
<div className="bg-[#030303] border border-white/10 p-4 hud-border font-mono text-[9px] text-secondary uppercase tracking-widest">
<div className="flex justify-between border-b border-white/5 pb-2 mb-2"><span className="text-[#555]">Total Validated LPs</span><span className="text-primary">42</span></div>
<div className="flex justify-between border-b border-white/5 pb-2 mb-2"><span className="text-[#555]">Sovereign Capital</span><span className="text-primary">34%</span></div>
<div className="flex justify-between"><span className="text-[#555]">Endowments</span><span className="text-primary">66%</span></div>
</div>
</div>
<div className="md:w-[60%] flex flex-col gap-4">

<div className="border border-white/10 bg-base p-8 relative overflow-hidden group hover:border-accent/40 transition-colors reveal chamfer-panel">
<div className="flex justify-between items-start mb-8 pb-4 border-b border-white/5">
<div className="font-mono text-[10px] text-accent uppercase tracking-widest flex items-center gap-3 scramble">
<iconify-icon className="text-lg" icon="solar:lock-password-linear"></iconify-icon> ENDOW_CIO_01
                        </div>
<span className="font-mono text-[9px] text-primary uppercase bg-white/5 px-2 py-1 border border-white/10">Core Alloc</span>
</div>
<p className="font-syne text-2xl md:text-3xl text-primary leading-tight mb-8 font-normal">"Technical depth allows identification of anomalies in sectors generalist capital avoids. Crucial alpha generator in our portfolio."</p>
<div className="font-mono text-[10px] text-[#666] uppercase tracking-widest flex items-center gap-4">
<div className="w-1.5 h-1.5 bg-success rotate-45"></div> Validated Entry: 2022
                    </div>
</div>

<div className="border border-white/10 bg-base p-8 relative overflow-hidden group hover:border-accent/40 transition-colors reveal chamfer-panel" style={{transitionDelay: '100ms'}}>
<div className="flex justify-between items-start mb-8 pb-4 border-b border-white/5">
<div className="font-mono text-[10px] text-accent uppercase tracking-widest flex items-center gap-3 scramble">
<iconify-icon className="text-lg" icon="solar:global-linear"></iconify-icon> SOV_FUND_09
                        </div>
<span className="font-mono text-[9px] text-primary uppercase bg-white/5 px-2 py-1 border border-white/10">Anchor</span>
</div>
<p className="font-syne text-2xl md:text-3xl text-primary leading-tight mb-8 font-normal">"Unmatched access to technical founders originating from premier tier-1 research institutions globally. Highly concentrated."</p>
<div className="font-mono text-[10px] text-[#666] uppercase tracking-widest flex items-center gap-4">
<div className="w-1.5 h-1.5 bg-success rotate-45"></div> Validated Entry: 2023
                    </div>
</div>
</div>
</div>
</section>

<section className="py-40 relative border-b border-white/10 overflow-hidden flex flex-col items-center justify-center text-center z-10 bg-black min-h-[70vh]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(196,181,253,0.1)_0%,transparent_60%)]"></div>
<div className="absolute inset-0 grid-bg-dense opacity-10 mix-blend-overlay"></div>
<div className="relative z-10 flex flex-col items-center gap-8 px-6 max-w-4xl reveal">
<div className="font-mono text-[10px] text-accent uppercase tracking-widest border border-accent/30 px-4 py-2 bg-accent/5 flex items-center gap-3 hud-border">
<span className="w-1.5 h-1.5 bg-accent animate-pulse"></span> Terminal Open
            </div>
<h2 className="font-syne text-6xl md:text-8xl lg:text-[8rem] leading-[0.85] tracking-tighter uppercase text-primary font-normal drop-shadow-2xl">
                Submit <br/><span className="text-secondary italic">Anomalies.</span>
</h2>
<p className="font-geist text-secondary text-lg max-w-2xl mt-4">If your architecture breaks fundamental constraints and is misunderstood by standard consensus, transmit your thesis directly to our core.</p>
<button className="btn-swiss h-16 px-12 mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-black bg-primary group hover:bg-transparent hover:text-primary transition-all duration-300">
<div className="scanline"></div>
<span className="relative z-10 font-semibold flex items-center gap-3">
                    Transmit Pitch <iconify-icon className="text-lg" icon="solar:upload-track-2-linear"></iconify-icon>
</span>
</button>
<div className="mt-8 font-mono text-[9px] text-[#444] uppercase tracking-widest flex items-center gap-4">
<span>[ PGP Key Available ]</span>
<span className="w-1 h-1 bg-[#444]"></span>
<span>[ End-to-End Encrypted ]</span>
</div>
</div>
</section>

<footer className="bg-base pt-32 pb-12 relative z-10">
<div className="max-w-[1600px] mx-auto px-6 md:px-[8%]">

<div className="border-b border-white/5 pb-16 mb-16 overflow-hidden">
<h2 className="font-syne text-[clamp(4rem,15vw,18rem)] leading-[0.75] tracking-tighter text-white/5 uppercase select-none relative -left-2 text-center">Meridian</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-12 gap-12 border-b border-white/5 pb-16 mb-8">
<div className="col-span-2 md:col-span-4 flex flex-col items-start justify-between h-full">
<div>
<span className="font-syne font-normal text-3xl tracking-tighter text-primary uppercase mb-4 block">Meridian Capital</span>
<p className="font-geist text-sm text-[#666] max-w-sm">Deploying concentration into profound structural shifts. Architecture, Kinetics, Synthesis.</p>
</div>
<div className="font-mono text-[10px] text-[#555] uppercase tracking-widest mt-12 md:mt-0 border border-white/5 px-4 py-2 bg-white/5 hud-border">
                        Sys_Ver 3.0 // Op: Nominal
                    </div>
</div>
<div className="md:col-span-2 flex flex-col gap-4">
<span className="font-mono text-[10px] text-[#444] uppercase tracking-widest mb-2 border-b border-white/5 pb-2">Index</span>
<a className="font-mono text-[10px] text-secondary uppercase tracking-widest hover:text-accent transition-colors" href="#">01. Vectors</a>
<a className="font-mono text-[10px] text-secondary uppercase tracking-widest hover:text-accent transition-colors" href="#">02. Registry</a>
<a className="font-mono text-[10px] text-secondary uppercase tracking-widest hover:text-accent transition-colors" href="#">03. Operatives</a>
</div>
<div className="md:col-span-2 flex flex-col gap-4">
<span className="font-mono text-[10px] text-[#444] uppercase tracking-widest mb-2 border-b border-white/5 pb-2">Network</span>
<a className="font-mono text-[10px] text-secondary uppercase tracking-widest hover:text-accent transition-colors" href="#">Client Portal</a>
<a className="font-mono text-[10px] text-secondary uppercase tracking-widest hover:text-accent transition-colors" href="#">Transmission</a>
<a className="font-mono text-[10px] text-secondary uppercase tracking-widest hover:text-accent transition-colors" href="#">Telemetry</a>
</div>
<div className="col-span-2 md:col-span-4 flex flex-col gap-6 md:items-end text-left md:text-right">
<span className="font-mono text-[10px] text-[#444] uppercase tracking-widest border-b border-white/5 pb-2 w-full md:w-auto">Secure Comms Line</span>
<a className="font-syne text-2xl md:text-3xl text-primary hover:text-accent transition-colors tracking-tight uppercase glitch-hover" href="mailto:transmit@meridian.vc">transmit@meridian.vc</a>
<div className="flex gap-4 mt-2">
<a className="text-[#666] hover:text-accent transition-colors bg-white/5 p-3 rounded-none border border-white/5" href="#"><iconify-icon className="text-xl block" icon="solar:letter-linear"></iconify-icon></a>
<a className="text-[#666] hover:text-accent transition-colors bg-white/5 p-3 rounded-none border border-white/5" href="#"><iconify-icon className="text-xl block" icon="solar:code-linear"></iconify-icon></a>
<a className="text-[#666] hover:text-accent transition-colors bg-white/5 p-3 rounded-none border border-white/5" href="#"><iconify-icon className="text-xl block" icon="solar:hashtag-linear"></iconify-icon></a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
<span className="font-mono text-[10px] text-[#444] uppercase tracking-widest">© 2024 Meridian Arch. All Rights Reserved.</span>
<span className="font-mono text-[10px] text-[#444] uppercase tracking-widest flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-success rounded-none rotate-45"></div> Secure SSL/TLS
                </span>
</div>
</div>
</footer>


    </>
  );
}
