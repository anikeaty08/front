import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



                function toggleFaq(el) {
                    const answer = el.querySelector('.faq-answer');
                    const icon = el.querySelector('.icon-plus');
                    const bg = el.querySelector('.faq-bg');
                    const border = el.querySelector('.faq-border');
                    const isOpen = answer.classList.contains('grid-rows-[1fr]');
                    
                    // Reset all
                    document.querySelectorAll('.faq-answer').forEach(a => {
                        a.classList.remove('grid-rows-[1fr]', 'opacity-100');
                        a.classList.add('grid-rows-[0fr]', 'opacity-0');
                    });
                    document.querySelectorAll('.icon-plus').forEach(i => i.style.transform = 'rotate(0deg)');
                    document.querySelectorAll('.faq-bg, .faq-border').forEach(b => b.classList.remove('opacity-100'));

                    // Open target
                    if (!isOpen) {
                        answer.classList.remove('grid-rows-[0fr]', 'opacity-0');
                        answer.classList.add('grid-rows-[1fr]', 'opacity-100');
                        icon.style.transform = 'rotate(45deg)';
                        if(bg) bg.classList.add('opacity-100');
                        if(border) border.classList.add('opacity-100');
                    }
                }
            


        document.addEventListener("DOMContentLoaded", () => {
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const visited = localStorage.getItem('arxon_visited');
            const loader = document.getElementById('loader');
            const main = document.getElementById('main-content');
            const counter = document.getElementById('loader-counter');

            function revealContent() {
                loader.classList.add('loader-exit');
                main.classList.remove('opacity-0');
                main.classList.add('content-enter');
            }

            if (visited || prefersReducedMotion) {
                loader.style.display = 'none';
                main.classList.remove('opacity-0');
                main.classList.add('content-enter');
            } else {
                localStorage.setItem('arxon_visited', 'true');
                let start = null;
                const duration = 1200;
                
                function step(timestamp) {
                    if (!start) start = timestamp;
                    const progress = timestamp - start;
                    const percentage = Math.min((progress / duration), 1);
                    const ease = percentage < 0.5 ? 4 * percentage * percentage * percentage : 1 - Math.pow(-2 * percentage + 2, 3) / 2;
                    
                    counter.innerText = Math.floor(ease * 100).toString().padStart(3, '0');

                    if (progress < duration) {
                        requestAnimationFrame(step);
                    } else {
                        setTimeout(revealContent, 50);
                    }
                }
                requestAnimationFrame(step);
            }

            // Spotlight Mouse Tracking for Testimonial Cards
            document.querySelectorAll('.spotlight-card').forEach(card => {
                card.addEventListener('mousemove', e => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                });
            });

            // Nav Hover Scramble
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('mouseenter', function() {
                    let iteration = 0;
                    const originalText = this.getAttribute('data-text');
                    clearInterval(this.scrambleInterval);
                    this.scrambleInterval = setInterval(() => {
                        this.innerText = originalText.split('')
                            .map((letter, index) => {
                                if(index < iteration) return originalText[index];
                                return chars[Math.floor(Math.random() * 26)];
                            })
                            .join('');
                        if(iteration >= originalText.length) {
                            clearInterval(this.scrambleInterval);
                            this.innerText = originalText;
                        }
                        iteration += 1;
                    }, 20);
                });
            });

            // Nav Shrink on Scroll
            window.addEventListener('scroll', () => {
                const nav = document.getElementById('navbar');
                if(window.scrollY > 80) {
                    nav.style.transform = 'translate(-50%, 0) scale(0.96)';
                    nav.style.backgroundColor = 'rgba(10,10,10,0.95)';
                } else {
                    nav.style.transform = 'translate(-50%, 0) scale(1)';
                    nav.style.backgroundColor = 'rgba(10,10,10,0.8)';
                }
            });

            // WebGL Canvas Simulator
            const canvas = document.getElementById('hero-canvas');
            if (canvas && window.innerWidth >= 768) {
                const ctx = canvas.getContext('2d');
                let width, height;
                
                function resize() {
                    width = window.innerWidth;
                    height = window.innerHeight;
                    canvas.width = width * (window.devicePixelRatio || 1);
                    canvas.height = height * (window.devicePixelRatio || 1);
                    ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
                }
                window.addEventListener('resize', resize);
                resize();

                const states = [];
                for(let s=0; s<4; s++) {
                    const points = [];
                    for(let i=0; i<40; i++) {
                        let r = 1; let a = 0.4;
                        if(i<5) { r=2.5; a=1.0; }
                        points.push({
                            x: Math.random() * width,
                            y: Math.random() * height,
                            r: r, baseA: a,
                            period: 2 + Math.random() * 4,
                            phase: Math.random() * Math.PI * 2
                        });
                    }
                    states.push(points);
                }

                let currentState = 0;
                let nextState = 1;
                let transitionProgress = 0;
                let lastTime = 0;
                let mouseX = width/2, mouseY = height/2;

                window.addEventListener('mousemove', (e) => {
                    mouseX = e.clientX; mouseY = e.clientY;
                });

                function easeInOutCubic(x) {
                    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
                }

                function draw(time) {
                    const dt = (time - lastTime) / 1000 || 0;
                    lastTime = time;

                    if (document.visibilityState !== 'visible') {
                        requestAnimationFrame(draw);
                        return;
                    }

                    ctx.clearRect(0, 0, width, height);

                    if (time % 12000 < 4000 && time > 4000) {
                        transitionProgress = (time % 12000) / 4000;
                    } else if (time % 12000 > 4000 && transitionProgress > 0) {
                        transitionProgress = 0;
                        currentState = nextState;
                        nextState = (currentState + 1) % states.length;
                    }

                    const currentPts = states[currentState];
                    const nextPts = states[nextState];
                    const easeP = easeInOutCubic(transitionProgress);
                    const renderPts = [];

                    for(let i=0; i<40; i++) {
                        const p1 = currentPts[i];
                        const p2 = nextPts[i];
                        
                        const midX = (p1.x + p2.x)/2 + (p1.y - p2.y)*0.1;
                        const midY = (p1.y + p2.y)/2 + (p2.x - p1.x)*0.1;

                        const q0x = p1.x + (midX - p1.x)*easeP;
                        const q0y = p1.y + (midY - p1.y)*easeP;
                        const q1x = midX + (p2.x - midX)*easeP;
                        const q1y = midY + (p2.y - midY)*easeP;

                        let rx = q0x + (q1x - q0x)*easeP;
                        let ry = q0y + (q1y - q0y)*easeP;
                        
                        if(transitionProgress === 0) { rx = p1.x; ry = p1.y; }

                        const twinkle = Math.sin(time / 1000 / p1.period + p1.phase) * 0.2;
                        let alpha = p1.baseA + twinkle;
                        let r = p1.r;

                        const dist = Math.hypot(mouseX - rx, mouseY - ry);
                        if(dist < 150) {
                            alpha += 0.3 * (1 - dist/150);
                        }

                        renderPts.push({x: rx, y: ry, r: r, a: Math.min(alpha, 1)});
                    }

                    const lineOp = transitionProgress > 0 ? (1 - Math.sin(transitionProgress * Math.PI)) * 0.08 : 0.08;
                    if(lineOp > 0.01) {
                        ctx.strokeStyle = `rgba(196,181,253,${lineOp})`;
                        ctx.lineWidth = 0.8;
                        ctx.beginPath();
                        for(let i=0; i<40; i++) {
                            for(let j=i+1; j<40; j++) {
                                const dist = Math.hypot(renderPts[i].x - renderPts[j].x, renderPts[i].y - renderPts[j].y);
                                if(dist < width * 0.15) {
                                    ctx.moveTo(renderPts[i].x, renderPts[i].y);
                                    ctx.lineTo(renderPts[j].x, renderPts[j].y);
                                }
                            }
                        }
                        ctx.stroke();
                    }

                    ctx.fillStyle = '#ffffff';
                    for(let p of renderPts) {
                        ctx.globalAlpha = p.a;
                        ctx.beginPath();
                        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
                        ctx.fill();
                    }
                    ctx.globalAlpha = 1.0;

                    requestAnimationFrame(draw);
                }
                requestAnimationFrame(draw);
            }

            // Intersection Observer for Count-up
            const stats = document.querySelectorAll('.count-up');
            const statsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting && !entry.target.counted) {
                        entry.target.counted = true;
                        const endVal = parseFloat(entry.target.getAttribute('data-val'));
                        const decimals = parseInt(entry.target.getAttribute('data-decimals') || '0');
                        let start = null;
                        const dur = 1600;
                        const step = (ts) => {
                            if(!start) start = ts;
                            const prog = Math.min((ts - start) / dur, 1);
                            const ease = 1 - Math.pow(1 - prog, 4);
                            const current = ease * endVal;
                            
                            entry.target.innerText = current.toFixed(decimals);
                            
                            if(prog < 1) requestAnimationFrame(step);
                            else entry.target.innerText = endVal.toFixed(decimals);
                        };
                        requestAnimationFrame(step);
                    }
                });
            }, { threshold: 0.1 });
            stats.forEach(s => statsObserver.observe(s));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[1000] bg-[#0a0a0a] flex items-center justify-center" id="loader">
<div className="font-mono text-7xl md:text-9xl text-[#f0f0ee] tracking-tighter" id="loader-counter">000</div>
</div>

<div className="opacity-0 w-full h-full relative" id="main-content">

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-full py-2 pl-6 pr-2 h-14 transition-all duration-500 w-[92%] max-w-4xl justify-between shadow-[0_8px_32px_rgba(0,0,0,0.4)]" id="navbar">
<a className="flex items-center gap-3 group cursor-pointer" href="#">
<svg className="w-6 h-6 text-[#C4B5FD] relative" viewbox="0 0 32 32">
<circle className="logo-dot animate-[pulseDot_3s_ease-in-out_infinite_1.5s]" cx="16" cy="16" fill="white" r="2.5"></circle>
<g className="origin-center spin-slow">
<path className="logo-arc-1" d="M16 4 A12 12 0 1 1 5 21" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
</g>
<g className="origin-center spin-slow-reverse">
<path className="logo-arc-2" d="M16 8 A8 8 0 1 0 23.5 13" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</g>
</svg>
<span className="font-body text-sm font-normal text-[#f0f0ee] tracking-widest uppercase">ARXON</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="nav-link font-mono text-xs text-[#888888] hover:text-[#f0f0ee] transition-colors uppercase tracking-widest" data-text="Sectors" href="#sectors">Sectors</a>
<a className="nav-link font-mono text-xs text-[#888888] hover:text-[#f0f0ee] transition-colors uppercase tracking-widest" data-text="Technology" href="#technology">Technology</a>
<a className="nav-link font-mono text-xs text-[#888888] hover:text-[#f0f0ee] transition-colors uppercase tracking-widest" data-text="Civilization Index" href="#index">Civilization Index</a>
<a className="nav-link font-mono text-xs text-[#888888] hover:text-[#f0f0ee] transition-colors uppercase tracking-widest" data-text="Apply" href="#apply">Apply</a>
</div>
<a className="hidden md:flex items-center justify-center bg-[#C4B5FD] text-[#0a0a0a] font-normal text-sm h-10 px-6 rounded-full hover:bg-white transition-colors" href="#cta">
                Request Brief
            </a>
<button className="md:hidden text-white p-2 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</nav>

<section className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-32 pb-16 px-6 text-center overflow-hidden z-0">

<canvas className="absolute inset-0 z-0 hidden md:block w-full h-full pointer-events-none opacity-60 mix-blend-screen" id="hero-canvas"></canvas>
<div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(196,181,253,0.04)_0%,transparent_60%)] md:hidden pointer-events-none"></div>
<div className="relative z-[1] flex flex-col items-center max-w-5xl w-full">
<div className="inline-flex items-center gap-2 border border-[#C4B5FD]/20 bg-[#C4B5FD]/5 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
<span className="font-mono text-xs text-[#C4B5FD] uppercase tracking-widest">/ Sector Infrastructure</span>
</div>
<h1 className="font-display text-[clamp(3.5rem,8vw,8rem)] font-medium tracking-tighter leading-none text-[#f0f0ee] max-w-[15ch] mx-auto mb-8">
                    Civilizations don't emerge. They're <span className="text-[#C4B5FD] h1-anim-word inline-block">engineered</span>.
                </h1>
<p className="font-body text-xl text-[#888888] tracking-tight max-w-[48ch] mx-auto leading-relaxed mb-12">
                    Arxon designs, finances, and deploys the systems that make galactic-scale life possible — from atmosphere processors to interstellar logistics grids.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="group relative flex items-center justify-center h-12 px-8 bg-[#C4B5FD] text-[#0a0a0a] font-normal text-base rounded hover:bg-white transition-colors duration-300" href="#cta">
<span className="relative z-[1] group-hover:tracking-wide transition-all">Request Infrastructure Brief</span>
</a>
<a className="group relative flex items-center justify-center h-12 px-8 bg-transparent border border-white/10 text-[#f0f0ee] font-normal text-base rounded hover:border-white/30 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm" href="#sectors">
<span className="relative z-[1]">View Sector Map</span>
</a>
</div>
<div className="mt-16 font-mono text-xs text-[#555555] flex flex-wrap justify-center gap-4">
<span>14 Civilizations Deployed</span>
<span>·</span>
<span>4.7T km² Infrastructure Managed</span>
<span>·</span>
<span>Funded by Aether Capital</span>
</div>
</div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-[1]">
<span className="font-mono text-xs text-[#555555]">SCROLL</span>
<iconify-icon className="text-base text-[#555555] animate-bounce" icon="solar:arrow-down-linear"></iconify-icon>
</div>
</section>

<section className="border-t border-white/5 bg-[#0e0e0e] py-10 overflow-hidden relative">
<div className="text-center mb-6">
<span className="font-mono text-xs text-[#555555] uppercase tracking-widest">/ Operating In</span>
</div>
<div className="relative w-full flex overflow-hidden mask-gradient">
<div className="flex whitespace-nowrap animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused] items-center">
<div className="flex gap-16 px-8 font-body text-base font-normal text-[#f0f0ee] opacity-40">
<div className="flex items-center gap-3"><span className="font-display font-medium tracking-tighter text-2xl text-[#C4B5FD]">VD</span><span className="uppercase tracking-widest text-[#888888]">Veth Dominion</span></div>
<div className="flex items-center gap-3"><span className="font-display font-medium tracking-tighter text-2xl text-[#C4B5FD]">AA</span><span className="uppercase tracking-widest text-[#888888]">Arcturian Assembly</span></div>
<div className="flex items-center gap-3"><span className="font-display font-medium tracking-tighter text-2xl text-[#C4B5FD]">KD</span><span className="uppercase tracking-widest text-[#888888]">Kepler Directorate</span></div>
<div className="flex items-center gap-3"><span className="font-display font-medium tracking-tighter text-2xl text-[#C4B5FD]">MC</span><span className="uppercase tracking-widest text-[#888888]">Meridian Collective</span></div>
<div className="flex items-center gap-3"><span className="font-display font-medium tracking-tighter text-2xl text-[#C4B5FD]">SA</span><span className="uppercase tracking-widest text-[#888888]">Solan Authority</span></div>
<div className="flex items-center gap-3"><span className="font-display font-medium tracking-tighter text-2xl text-[#C4B5FD]">NP</span><span className="uppercase tracking-widest text-[#888888]">Nova Pact</span></div>
</div>
<div className="flex gap-16 px-8 font-body text-base font-normal text-[#f0f0ee] opacity-40">
<div className="flex items-center gap-3"><span className="font-display font-medium tracking-tighter text-2xl text-[#C4B5FD]">VD</span><span className="uppercase tracking-widest text-[#888888]">Veth Dominion</span></div>
<div className="flex items-center gap-3"><span className="font-display font-medium tracking-tighter text-2xl text-[#C4B5FD]">AA</span><span className="uppercase tracking-widest text-[#888888]">Arcturian Assembly</span></div>
<div className="flex items-center gap-3"><span className="font-display font-medium tracking-tighter text-2xl text-[#C4B5FD]">KD</span><span className="uppercase tracking-widest text-[#888888]">Kepler Directorate</span></div>
<div className="flex items-center gap-3"><span className="font-display font-medium tracking-tighter text-2xl text-[#C4B5FD]">MC</span><span className="uppercase tracking-widest text-[#888888]">Meridian Collective</span></div>
<div className="flex items-center gap-3"><span className="font-display font-medium tracking-tighter text-2xl text-[#C4B5FD]">SA</span><span className="uppercase tracking-widest text-[#888888]">Solan Authority</span></div>
<div className="flex items-center gap-3"><span className="font-display font-medium tracking-tighter text-2xl text-[#C4B5FD]">NP</span><span className="uppercase tracking-widest text-[#888888]">Nova Pact</span></div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-[#0a0a0a] py-32 px-6 lg:px-16 relative z-10">
<div className="max-w-7xl mx-auto mb-16">
<div className="flex items-center justify-between mb-8">
<span className="font-mono text-xs text-[#555555] uppercase tracking-widest">/ Network Telemetry</span>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-[#C4B5FD] rounded-full animate-pulse"></div>
<span className="font-mono text-xs text-[#C4B5FD] uppercase tracking-widest">Live Sync</span>
</div>
</div>
<h2 className="font-display text-4xl lg:text-5xl font-medium text-white tracking-tight leading-none max-w-2xl">
                    Galactic footprint by the numbers.
                </h2>
</div>

<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
<div className="bg-[#0a0a0a] p-10 flex flex-col justify-between min-h-[18rem] group hover:bg-[#111] transition-colors duration-500 relative">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-20 transition-opacity duration-500 text-[#C4B5FD]">
<iconify-icon className="text-6xl" icon="solar:planet-linear"></iconify-icon>
</div>
<div className="font-display text-[clamp(3.5rem,5vw,4.5rem)] font-normal text-white tracking-tighter leading-none mb-4 flex items-baseline gap-2">
<span className="count-up tabular-nums" data-decimals="0" data-val="14">0</span>
</div>
<div>
<p className="font-body text-base text-white mb-1 leading-snug">Active Civilizations</p>
<span className="font-mono text-xs text-[#555555]">Spanning 3 star systems</span>
</div>
</div>
<div className="bg-[#0a0a0a] p-10 flex flex-col justify-between min-h-[18rem] group hover:bg-[#111] transition-colors duration-500 relative">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-20 transition-opacity duration-500 text-[#C4B5FD]">
<iconify-icon className="text-6xl" icon="solar:hourglass-linear"></iconify-icon>
</div>
<div className="font-display text-[clamp(3.5rem,5vw,4.5rem)] font-normal text-white tracking-tighter leading-none mb-4 flex items-baseline gap-2">
<span className="count-up tabular-nums" data-decimals="0" data-val="847">0</span>
<span className="font-mono text-xl text-[#555555] font-normal tracking-normal uppercase">Yrs</span>
</div>
<div>
<p className="font-body text-base text-white mb-1 leading-snug">Oldest Active System</p>
<span className="font-mono text-xs text-[#555555]">Running without replacement</span>
</div>
</div>
<div className="bg-[#0a0a0a] p-10 flex flex-col justify-between min-h-[18rem] group hover:bg-[#111] transition-colors duration-500 relative">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-20 transition-opacity duration-500 text-[#C4B5FD]">
<iconify-icon className="text-6xl" icon="solar:pulse-linear"></iconify-icon>
</div>
<div className="font-display text-[clamp(3.5rem,5vw,4.5rem)] font-normal text-white tracking-tighter leading-none mb-4 flex items-baseline gap-2">
<span className="count-up tabular-nums" data-decimals="4" data-val="99.9997">0</span>
<span className="font-mono text-xl text-[#555555] font-normal tracking-normal">%</span>
</div>
<div>
<p className="font-body text-base text-white mb-1 leading-snug">Uptime SLA</p>
<span className="font-mono text-xs text-[#555555]">Averaged across all deployments</span>
</div>
</div>
<div className="bg-[#0a0a0a] p-10 flex flex-col justify-between min-h-[18rem] group hover:bg-[#111] transition-colors duration-500 relative">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-20 transition-opacity duration-500 text-[#C4B5FD]">
<iconify-icon className="text-6xl" icon="solar:map-linear"></iconify-icon>
</div>
<div className="font-display text-[clamp(3.5rem,5vw,4.5rem)] font-normal text-white tracking-tighter leading-none mb-4 flex items-baseline gap-2">
<span className="count-up tabular-nums" data-decimals="1" data-val="4.7">0</span>
<span className="font-mono text-xl text-[#555555] font-normal tracking-normal uppercase">T km²</span>
</div>
<div>
<p className="font-body text-base text-white mb-1 leading-snug">Infrastructure Footprint</p>
<span className="font-mono text-xs text-[#555555]">Under active Arxon management</span>
</div>
</div>
<div className="bg-[#0a0a0a] p-10 flex flex-col justify-between min-h-[18rem] group hover:bg-[#111] transition-colors duration-500 relative">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-20 transition-opacity duration-500 text-[#C4B5FD]">
<iconify-icon className="text-6xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="font-display text-[clamp(3.5rem,5vw,4.5rem)] font-normal text-white tracking-tighter leading-none mb-4 flex items-baseline gap-2">
                        Zero
                    </div>
<div>
<p className="font-body text-base text-white mb-1 leading-snug">Civilization Collapses</p>
<span className="font-mono text-xs text-[#555555]">Post-deployment record</span>
</div>
</div>
<div className="bg-[#0a0a0a] p-10 flex flex-col justify-between min-h-[18rem] group hover:bg-[#111] transition-colors duration-500 relative">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-20 transition-opacity duration-500 text-[#C4B5FD]">
<iconify-icon className="text-6xl" icon="solar:history-linear"></iconify-icon>
</div>
<div className="font-display text-[clamp(3.5rem,5vw,4.5rem)] font-normal text-white tracking-tighter leading-none mb-4 flex items-baseline gap-2">
<span className="count-up tabular-nums" data-decimals="0" data-val="500">0</span>
<span className="font-mono text-xl text-[#555555] font-normal tracking-normal uppercase">Yrs</span>
</div>
<div>
<p className="font-body text-base text-white mb-1 leading-snug">Operational Guarantee</p>
<span className="font-mono text-xs text-[#555555]">Standard on new deployments</span>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-[#0e0e0e] py-32 px-6 lg:px-16 relative z-10" id="technology">
<div className="max-w-7xl mx-auto mb-16">
<span className="font-mono text-xs text-[#555555] uppercase tracking-widest mb-6 block">/ Core Capabilities</span>
<h2 className="font-display text-4xl lg:text-5xl font-medium text-white tracking-tight leading-none max-w-xl mb-6">
                    Every system. Every scale. Every environment.
                </h2>
<p className="font-body text-xl text-[#888888] tracking-tight max-w-2xl leading-relaxed">
                    From single-planet energy grids to cross-system logistics networks. Arxon engineers it all.
                </p>
</div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-min">

<div className="bento-card md:col-span-7 rounded p-10 flex flex-col justify-between min-h-[26rem] hover:border-white/10 relative overflow-hidden">
<iconify-icon className="text-[#C4B5FD] text-4xl mb-8 relative z-10" icon="solar:atom-linear"></iconify-icon>
<div className="relative z-10">
<h3 className="font-body text-2xl text-white font-normal tracking-tight mb-4">Atmospheric Processing Arrays</h3>
<p className="font-body text-lg text-[#888888] mb-8 max-w-[36ch] leading-relaxed">Planetary-scale atmosphere management systems rated for 40B inhabitants. Self-regulating feedback loops with quantum-redundant failover. Real-time molecular balance across 14 atmospheric parameters.</p>
<span className="font-mono text-xs bg-[#C4B5FD]/10 text-[#C4B5FD] px-3 py-1.5 rounded uppercase tracking-wider inline-block">14 Parameters Monitored</span>
</div>
</div>

<div className="bento-card md:col-span-5 rounded p-10 flex flex-col justify-between min-h-[26rem] hover:border-white/10 relative overflow-hidden">
<iconify-icon className="text-[#555555] text-4xl mb-8 relative z-10" icon="solar:bolt-linear"></iconify-icon>
<div className="relative z-10">
<h3 className="font-body text-2xl text-white font-normal tracking-tight mb-4">Energy Distribution Grids</h3>
<p className="font-body text-lg text-[#888888] mb-8 leading-relaxed">Star-tap infrastructure delivering 10^18 joules per standard year. Superconducting relay networks with 99.9997% uptime SLA.</p>
<span className="font-mono text-xs bg-white/5 text-[#888888] px-3 py-1.5 rounded uppercase tracking-wider inline-block">99.9997% Uptime</span>
</div>
</div>

<div className="bento-card md:col-span-4 rounded p-8 min-h-[18rem] flex flex-col hover:border-white/10">
<h3 className="font-body text-xl text-white font-normal tracking-tight mb-3">Interstellar Logistics</h3>
<p className="font-body text-base text-[#888888] leading-relaxed">Wormhole-adjacent routing protocols for cargo and data across 40+ light-year operational radii. Sub-light redundancy always active.</p>
<div className="mt-auto self-end text-[#555555] opacity-20"><iconify-icon className="text-5xl" icon="solar:server-square-linear"></iconify-icon></div>
</div>

<div className="bento-card md:col-span-4 rounded p-8 min-h-[18rem] flex flex-col hover:border-white/10">
<h3 className="font-body text-xl text-white font-normal tracking-tight mb-3">Governance Infrastructure</h3>
<p className="font-body text-base text-[#888888] leading-relaxed">Decision propagation networks that reduce cross-civilization response time from months to hours. Cryptographic consensus.</p>
<div className="mt-auto self-end text-[#555555] opacity-20"><iconify-icon className="text-5xl" icon="solar:shield-check-linear"></iconify-icon></div>
</div>

<div className="bento-card md:col-span-4 rounded p-8 min-h-[18rem] flex flex-col hover:border-white/10">
<h3 className="font-body text-xl text-white font-normal tracking-tight mb-3">Habitat Engineering</h3>
<p className="font-body text-base text-[#888888] leading-relaxed">Arcology frameworks rated for 200,000 inhabitants per structure. Modular. Climate-independent. Zero-emission closed loops.</p>
<div className="mt-auto self-end text-[#555555] opacity-20"><iconify-icon className="text-5xl" icon="solar:box-linear"></iconify-icon></div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-[#0a0a0a] py-32 px-6 lg:px-16 overflow-hidden relative z-10">
<div className="max-w-7xl mx-auto mb-20 text-center flex flex-col items-center">
<span className="font-mono text-xs text-[#555555] uppercase tracking-widest mb-6 block">/ Intelligence Reports</span>
<h2 className="font-display text-4xl lg:text-5xl font-medium text-white tracking-tight leading-none max-w-2xl">
                    Civilizations that bet their survival on Arxon.
                </h2>
</div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative">

<div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C4B5FD]/10 to-transparent -translate-y-1/2 z-0 hidden md:block"></div>

<div className="spotlight-card bg-[#0e0e0e] border border-white/10 rounded-xl p-8 flex flex-col gap-8 shadow-2xl relative z-10 backdrop-blur-sm group hover:border-[#C4B5FD]/30 transition-colors duration-500">
<div className="flex items-center gap-4 border-b border-white/5 pb-6">
<div className="w-12 h-12 rounded bg-gradient-to-br from-[#141414] to-[#0a0a0a] border border-[#C4B5FD]/20 flex items-center justify-center font-mono text-[#C4B5FD] text-sm group-hover:border-[#C4B5FD]/60 transition-colors">MC</div>
<div>
<div className="font-body text-base text-white tracking-tight">Director Keya Orin</div>
<div className="font-mono text-xs text-[#555555] uppercase tracking-widest">Meridian Collective</div>
</div>
</div>
<p className="font-body text-lg tracking-tight text-[#888888] leading-relaxed relative z-10">"We were 14 years from atmospheric threshold breach. Arxon's intervention timeline was 9 months. Our civilization is still here."</p>
<div className="mt-auto pt-4 flex justify-between items-center text-[#555555]">
<span className="font-mono text-xs uppercase tracking-widest">Record_01</span>
<div className="flex gap-1 text-[#C4B5FD]/50">
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>

<div className="spotlight-card bg-[#0e0e0e] border border-white/10 rounded-xl p-8 flex flex-col gap-8 shadow-2xl relative z-10 backdrop-blur-sm group hover:border-[#C4B5FD]/30 transition-colors duration-500">
<div className="flex items-center gap-4 border-b border-white/5 pb-6">
<div className="w-12 h-12 rounded bg-gradient-to-br from-[#141414] to-[#0a0a0a] border border-[#C4B5FD]/20 flex items-center justify-center font-mono text-[#C4B5FD] text-sm group-hover:border-[#C4B5FD]/60 transition-colors">VD</div>
<div>
<div className="font-body text-base text-white tracking-tight">Coordinator Daven Sola</div>
<div className="font-mono text-xs text-[#555555] uppercase tracking-widest">Veth Dominion</div>
</div>
</div>
<p className="font-body text-lg tracking-tight text-[#888888] leading-relaxed relative z-10">"The grid Arxon built hasn't needed a maintenance cycle in 23 years. Our previous legacy infrastructure required quarterly overhauls."</p>
<div className="mt-auto pt-4 flex justify-between items-center text-[#555555]">
<span className="font-mono text-xs uppercase tracking-widest">Record_02</span>
<div className="flex gap-1 text-[#C4B5FD]/50">
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>

<div className="spotlight-card bg-[#0e0e0e] border border-white/10 rounded-xl p-8 flex flex-col gap-8 shadow-2xl relative z-10 backdrop-blur-sm group hover:border-[#C4B5FD]/30 transition-colors duration-500">
<div className="flex items-center gap-4 border-b border-white/5 pb-6">
<div className="w-12 h-12 rounded bg-gradient-to-br from-[#141414] to-[#0a0a0a] border border-[#C4B5FD]/20 flex items-center justify-center font-mono text-[#C4B5FD] text-sm group-hover:border-[#C4B5FD]/60 transition-colors">NP</div>
<div>
<div className="font-body text-base text-white tracking-tight">Sys-Architect Liora Vest</div>
<div className="font-mono text-xs text-[#555555] uppercase tracking-widest">Nova Pact</div>
</div>
</div>
<p className="font-body text-lg tracking-tight text-[#888888] leading-relaxed relative z-10">"We delayed 40 years because we thought we could solve it internally. The compounding cost of that delay exceeds Arxon's fee by 300x."</p>
<div className="mt-auto pt-4 flex justify-between items-center text-[#555555]">
<span className="font-mono text-xs uppercase tracking-widest">Record_03</span>
<div className="flex gap-1 text-[#C4B5FD]/50">
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-[#0e0e0e] py-32 px-6 lg:px-16 relative z-10">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-5">
<div className="sticky top-32">
<span className="font-mono text-xs text-[#555555] uppercase tracking-widest mb-6 block">/ Intelligence Base</span>
<h2 className="font-display text-4xl lg:text-5xl font-medium text-white tracking-tight leading-none mb-6">Protocol<br/>Inquiries</h2>
<p className="font-body text-xl text-[#888888] tracking-tight leading-relaxed max-w-sm">Standard operating parameters for civilizational engagement and due diligence.</p>
</div>
</div>
<div className="lg:col-span-7 flex flex-col border-t border-white/5">

<div className="faq-item border-b border-white/5 group cursor-pointer relative overflow-hidden" onclick="toggleFaq(this)">
<div className="absolute inset-0 bg-gradient-to-r from-[#C4B5FD]/5 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none faq-bg"></div>
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#C4B5FD] opacity-0 transition-opacity duration-300 faq-border"></div>
<div className="flex justify-between items-center py-8 relative z-10 px-6">
<div className="flex items-center gap-6">
<span className="font-mono text-xs text-[#C4B5FD]">01</span>
<h3 className="font-body text-2xl tracking-tight font-normal text-white group-hover:text-[#C4B5FD] transition-colors">What is the minimum civilization size?</h3>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#C4B5FD]/50 transition-colors bg-[#0e0e0e] z-10 shrink-0">
<iconify-icon className="text-base text-white transition-transform duration-300 icon-plus" icon="solar:add-circle-linear"></iconify-icon>
</div>
</div>
<div className="faq-answer grid grid-rows-[0fr] transition-all duration-300 opacity-0 relative z-10 px-6">
<div className="overflow-hidden">
<p className="font-body text-lg text-[#888888] pb-8 pl-[3.25rem] max-w-[48ch] leading-relaxed">Arxon engages civilizations from 200 million inhabitants upward. Below this threshold, infrastructure needs can typically be addressed with commercially available systems. Above it, civilizational-grade engineering is required — and that is exclusively our domain.</p>
</div>
</div>
</div>

<div className="faq-item border-b border-white/5 group cursor-pointer relative overflow-hidden" onclick="toggleFaq(this)">
<div className="absolute inset-0 bg-gradient-to-r from-[#C4B5FD]/5 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none faq-bg"></div>
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#C4B5FD] opacity-0 transition-opacity duration-300 faq-border"></div>
<div className="flex justify-between items-center py-8 relative z-10 px-6">
<div className="flex items-center gap-6">
<span className="font-mono text-xs text-[#C4B5FD]">02</span>
<h3 className="font-body text-2xl tracking-tight font-normal text-white group-hover:text-[#C4B5FD] transition-colors">How does the 500-year guarantee work?</h3>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#C4B5FD]/50 transition-colors bg-[#0e0e0e] z-10 shrink-0">
<iconify-icon className="text-base text-white transition-transform duration-300 icon-plus" icon="solar:add-circle-linear"></iconify-icon>
</div>
</div>
<div className="faq-answer grid grid-rows-[0fr] transition-all duration-300 opacity-0 relative z-10 px-6">
<div className="overflow-hidden">
<p className="font-body text-lg text-[#888888] pb-8 pl-[3.25rem] max-w-[48ch] leading-relaxed">All primary systems carry a 500-year operational guarantee against design failure. If a system we built fails due to a design defect within that period, Arxon deploys reconstruction teams at no additional cost to your governance.</p>
</div>
</div>
</div>

<div className="faq-item border-b border-white/5 group cursor-pointer relative overflow-hidden" onclick="toggleFaq(this)">
<div className="absolute inset-0 bg-gradient-to-r from-[#C4B5FD]/5 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none faq-bg"></div>
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#C4B5FD] opacity-0 transition-opacity duration-300 faq-border"></div>
<div className="flex justify-between items-center py-8 relative z-10 px-6">
<div className="flex items-center gap-6">
<span className="font-mono text-xs text-[#C4B5FD]">03</span>
<h3 className="font-body text-2xl tracking-tight font-normal text-white group-hover:text-[#C4B5FD] transition-colors">Can you integrate with existing grids?</h3>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#C4B5FD]/50 transition-colors bg-[#0e0e0e] z-10 shrink-0">
<iconify-icon className="text-base text-white transition-transform duration-300 icon-plus" icon="solar:add-circle-linear"></iconify-icon>
</div>
</div>
<div className="faq-answer grid grid-rows-[0fr] transition-all duration-300 opacity-0 relative z-10 px-6">
<div className="overflow-hidden">
<p className="font-body text-lg text-[#888888] pb-8 pl-[3.25rem] max-w-[48ch] leading-relaxed">Yes. Phased deployment is standard protocol. We map and integrate into your current system topology rather than replacing everything simultaneously. The transition point is engineered to be the safest moment in the project cycle.</p>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="bg-[#0a0a0a] py-32 px-6 relative overflow-hidden z-10" id="cta">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(196,181,253,0.05)_0%,transparent_50%)] pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center flex flex-col items-center relative z-10">
<svg className="w-20 h-20 text-[#C4B5FD] opacity-80 mb-10" viewbox="0 0 32 32">
<g className="origin-center spin-slow" style={{animationDuration: '12s'}}>
<path d="M16 4 A12 12 0 1 1 5 21" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
</g>
<g className="origin-center spin-slow-reverse" style={{animationDuration: '8s'}}>
<path d="M16 8 A8 8 0 1 0 23.5 13" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</g>
</svg>
<h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight leading-tight mb-8">
                    Your civilization has a 500-year window. Don't spend it rebuilding broken systems.
                </h2>
<p className="font-body text-xl text-[#888888] tracking-tight mb-12">
                    Request an infrastructure brief. Arxon's assessment team responds within 14 standard days.
                </p>
<a className="group relative flex items-center justify-center h-14 w-full max-w-sm bg-[#C4B5FD] text-[#0a0a0a] font-normal text-lg rounded hover:bg-white transition-colors duration-300 mb-8" href="#">
<span className="relative z-10 group-hover:tracking-wide transition-all">Request Infrastructure Brief</span>
</a>
<span className="font-mono text-xs text-[#555555]">14 standard days to first response · No commitment required · Under civilizational NDA</span>
</div>
</section>

<footer className="bg-[#050505] pt-24 pb-8 px-6 lg:px-16 border-t border-white/5 relative overflow-hidden z-10">

<div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-screen" style={{backgroundImage: 'linear-gradient(rgba(196,181,253,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(196,181,253,0.08) 1px, transparent 1px)', backgroundSize: '3rem 3rem'}}></div>
<div className="max-w-7xl mx-auto relative z-10">

<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
<div className="flex items-center gap-4 px-5 py-2.5 rounded-full border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md shadow-lg">
<div className="relative flex items-center justify-center w-3 h-3">
<div className="absolute w-full h-full rounded-full bg-[#10B981] animate-ping opacity-60"></div>
<div className="relative w-2 h-2 rounded-full bg-[#10B981]"></div>
</div>
<span className="font-mono text-xs text-[#f0f0ee] tracking-widest uppercase">All Infrastructure Nominal</span>
</div>
<a className="font-mono text-xs text-[#C4B5FD] hover:text-white transition-colors flex items-center gap-2 uppercase tracking-widest group" href="#cta">
                        Initiate Sequence <iconify-icon className="text-base group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="w-full text-center relative py-12 mb-16 group cursor-default">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[30vh] bg-gradient-to-t from-[#C4B5FD]/10 to-transparent blur-[80px] rounded-full pointer-events-none transition-opacity duration-1000 opacity-50 group-hover:opacity-100"></div>
<h2 className="font-display text-[clamp(4.5rem,15vw,16rem)] font-medium text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] to-[#111111] leading-none tracking-tighter select-none transition-transform duration-700 hover:scale-[1.01] relative z-10">ARXON</h2>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16 border-t border-white/5 pt-16">
<div>
<span className="font-mono text-xs text-[#555555] uppercase tracking-widest mb-6 block">SECTORS</span>
<ul className="flex flex-col gap-4 font-body text-base text-[#888888]">
<li><a className="hover:text-white transition-colors" href="#">Atmospheric</a></li>
<li><a className="hover:text-white transition-colors" href="#">Energy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Logistics</a></li>
<li><a className="hover:text-white transition-colors" href="#">Governance</a></li>
</ul>
</div>
<div>
<span className="font-mono text-xs text-[#555555] uppercase tracking-widest mb-6 block">COMPANY</span>
<ul className="flex flex-col gap-4 font-body text-base text-[#888888]">
<li><a className="hover:text-white transition-colors" href="#">Civilization Index</a></li>
<li><a className="hover:text-white transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-white transition-colors" href="#">Apply</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<span className="font-mono text-xs text-[#555555] uppercase tracking-widest mb-6 block">RESOURCES</span>
<ul className="flex flex-col gap-4 font-body text-base text-[#888888]">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Audit Protocol</a></li>
<li><a className="hover:text-white transition-colors" href="#">Guarantee Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">Press</a></li>
</ul>
</div>
<div className="flex gap-4 items-start justify-end md:justify-start">
<a className="text-[#888888] hover:text-white transition-colors bg-white/5 p-3 rounded hover:bg-white/10 flex items-center justify-center border border-white/5 hover:border-white/20" href="#"><iconify-icon className="text-xl" icon="ri:twitter-x-line"></iconify-icon></a>
<a className="text-[#888888] hover:text-white transition-colors bg-white/5 p-3 rounded hover:bg-white/10 flex items-center justify-center border border-white/5 hover:border-white/20" href="#"><iconify-icon className="text-xl" icon="solar:link-linear"></iconify-icon></a>
<a className="text-[#888888] hover:text-white transition-colors bg-white/5 p-3 rounded hover:bg-white/10 flex items-center justify-center border border-white/5 hover:border-white/20" href="#"><iconify-icon className="text-xl" icon="solar:global-linear"></iconify-icon></a>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
<span className="font-mono text-xs text-[#555555]">© Year 4,847 Standard — Arxon Infrastructure Group</span>
<span className="font-mono text-xs text-[#555555] md:text-right">All infrastructure guaranteed to outlive your political structure.</span>
</div>
</div>
</footer>
</div>


    </>
  );
}
