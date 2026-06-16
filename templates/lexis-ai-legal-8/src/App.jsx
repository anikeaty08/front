import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
colors: {
bg: { 0: '#080808', 1: '#0d0d0d', 2: '#111111' },
card: { 1: '#0A0A0A', 2: '#111111', 3: '#161616' },
text: { primary: '#E8E8E8', secondary: '#9CA3AF', muted: '#6B7280', dimmed: '#4B5563' },
accent: '#E8FF47',
},
fontFamily: {
display: ['Cabinet Grotesk', 'sans-serif'],
body: ['Geist', 'sans-serif'],
mono: ['Geist Mono', 'monospace'],
},
transitionTimingFunction: {
'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // 1. Loader & Initialization
            setTimeout(() => {
                const loader = document.getElementById('loader');
                loader.style.opacity = '0';
                loader.style.transition = 'opacity 0.4s ease-out';
                setTimeout(() => loader.style.display = 'none', 400);
            }, 1000);

            // 2. Custom Cursor (Desktop)
            const cursor = document.getElementById('custom-cursor');
            let mouseX = 0, mouseY = 0;
            let cursorX = 0, cursorY = 0;
            
            if (window.matchMedia('(pointer: fine)').matches) {
                document.addEventListener('mousemove', (e) => {
                    mouseX = e.clientX;
                    mouseY = e.clientY;
                });

                function loop() {
                    cursorX += (mouseX - cursorX) * 0.15;
                    cursorY += (mouseY - cursorY) * 0.15;
                    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
                    requestAnimationFrame(loop);
                }
                loop();

                const hoverElements = document.querySelectorAll('.hover-trigger, a, button, .acc-row');
                hoverElements.forEach(el => {
                    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
                    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
                });
            }

            // 3. Scroll Progress & Nav Blur
            const progressBar = document.getElementById('scroll-progress');
            const nav = document.getElementById('nav');
            
            window.addEventListener('scroll', () => {
                const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                const progress = (window.scrollY / scrollHeight) * 100;
                progressBar.style.width = `${progress}%`;

                if (window.scrollY > 80) {
                    nav.classList.add('bg-bg-0/85', 'backdrop-blur-xl', 'border-b', 'border-white/5');
                } else {
                    nav.classList.remove('bg-bg-0/85', 'backdrop-blur-xl', 'border-b', 'border-white/5');
                }
            });

            // 4. Mobile Menu
            const mobileBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');
            let menuOpen = false;

            function toggleMenu() {
                menuOpen = !menuOpen;
                if (menuOpen) {
                    mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                    document.body.style.overflow = 'hidden';
                    mobileBtn.children[0].style.transform = 'translateY(5px) rotate(45deg)';
                    mobileBtn.children[1].style.transform = 'translateY(-4px) rotate(-45deg)';
                } else {
                    mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                    document.body.style.overflow = '';
                    mobileBtn.children[0].style.transform = 'none';
                    mobileBtn.children[1].style.transform = 'none';
                }
            }
            mobileBtn.addEventListener('click', toggleMenu);
            mobileLinks.forEach(link => link.addEventListener('click', () => { if(menuOpen) toggleMenu(); }));

            // 5. Accordion
            const accRows = document.querySelectorAll('.acc-row');
            accRows.forEach(row => {
                row.addEventListener('click', () => {
                    const content = row.querySelector('.accordion-content');
                    const isOpen = content.getAttribute('data-open') === 'true';
                    
                    // Close others
                    document.querySelectorAll('.accordion-content').forEach(c => c.setAttribute('data-open', 'false'));
                    document.querySelectorAll('.acc-icon').forEach(i => i.style.transform = 'rotate(0deg)');

                    if (!isOpen) {
                        content.setAttribute('data-open', 'true');
                        row.querySelector('.acc-icon').style.transform = 'rotate(45deg)';
                    }
                });
            });

            // Spotlight Effect for Practice section
            const practiceSection = document.getElementById('practice');
            const spotlight = document.getElementById('spotlight');
            practiceSection.addEventListener('mousemove', (e) => {
                const rect = practiceSection.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                spotlight.style.setProperty('--mouse-x', `${x}px`);
                spotlight.style.setProperty('--mouse-y', `${y}px`);
            });

            // 6. Terminal Simulator
            const termTypewriter = document.getElementById('term-typewriter');
            const termOutput = document.getElementById('term-output');
            const termResponse = document.getElementById('term-response');
            const termChips = document.querySelectorAll('#term-chips button');
            const termInputArea = document.getElementById('term-input-area');
            const termExport = document.getElementById('term-export');
            
            const queries = [
                "What are the disclosure obligations for an LBO in Delaware...",
                "Compare fiduciary duty standards across NY and English law..."
            ];
            let qIdx = 0, charIdx = 0, isDeleting = false, isTyping = true;
            
            function typeSim() {
                if(!isTyping) return;
                const currentStr = queries[qIdx];
                if (!isDeleting) {
                    termTypewriter.textContent = currentStr.substring(0, charIdx + 1);
                    charIdx++;
                    if (charIdx === currentStr.length) { isDeleting = true; setTimeout(typeSim, 3000); return; }
                } else {
                    termTypewriter.textContent = currentStr.substring(0, charIdx - 1);
                    charIdx--;
                    if (charIdx === 0) { isDeleting = false; qIdx = (qIdx + 1) % queries.length; }
                }
                setTimeout(typeSim, isDeleting ? 20 : 45);
            }
            setTimeout(typeSim, 1500);

            termChips.forEach(chip => {
                chip.addEventListener('click', () => {
                    isTyping = false;
                    termTypewriter.textContent = chip.textContent;
                    termTypewriter.style.color = '#E8E8E8';
                    termInputArea.style.background = 'rgba(232,255,71,0.02)';
                    termInputArea.style.borderTop = '1px solid rgba(232,255,71,0.3)';
                    termResponse.style.height = '15rem';
                    
                    const responseStr = `> Analysing 847,291 precedents across specific jurisdictions...\n[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░] 78% — cross-referencing risk flags\n> 14 relevant precedents identified. 3 flagged as high-impact.\n> SMITH v. VAN GORKOM (1985) — duty of care in acquisition\n> IN RE TOPPS CO. (2007) — Revlon duties in strategic sale\n> Memo draft ready. Estimated read time: 6 minutes.`;
                    
                    let outIdx = 0;
                    termOutput.textContent = '';
                    termExport.style.opacity = '0';
                    const stream = setInterval(() => {
                        termOutput.textContent += responseStr[outIdx];
                        outIdx++;
                        if(outIdx >= responseStr.length) {
                            clearInterval(stream);
                            setTimeout(() => termExport.style.opacity = '1', 500);
                        }
                    }, 15);
                });
            });

            // 7. Scroll Animations (Numbers & Lines)
            const observerOptions = { threshold: 0.3, rootMargin: "0px" };
            
            // Numbers
            const numObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        const el = entry.target;
                        const target = parseFloat(el.getAttribute('data-val'));
                        const suffix = el.getAttribute('data-suffix') || '';
                        const prefix = el.getAttribute('data-prefix') || '';
                        const decimals = parseInt(el.getAttribute('data-decimals') || 0);
                        let current = 0;
                        const inc = target / 60; // 1s at 60fps approx
                        
                        const update = () => {
                            current += inc;
                            if(current < target) {
                                el.textContent = `${prefix}${current.toFixed(decimals)}${suffix}`;
                                requestAnimationFrame(update);
                            } else {
                                el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
                            }
                        };
                        requestAnimationFrame(update);
                        numObserver.unobserve(el);
                    }
                });
            }, observerOptions);
            document.querySelectorAll('[data-val]').forEach(el => numObserver.observe(el));

            // Kinetic Lines
            const lineObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        const el = entry.target;
                        if(el.id === 'kinetic-line') el.style.transform = 'translate(-50%, 0) scaleY(1)';
                        if(el.id === 'process-line') el.style.width = 'calc(100% - 80px)';
                        lineObserver.unobserve(el);
                    }
                });
            }, { threshold: 0.5 });
            const kl = document.getElementById('kinetic-line');
            const pl = document.getElementById('process-line');
            if(kl) lineObserver.observe(kl.parentElement);
            if(pl) lineObserver.observe(document.getElementById('process-grid'));

            // 8. Sparkline Chart Canvas
            const sparkCanvas = document.getElementById('sparkline');
            if (sparkCanvas) {
                const ctx = sparkCanvas.getContext('2d');
                let w, h;
                const data = [1240, 1580, 1820, 2140, 2390, 2870, 3120, 3460, 3890, 4210, 4780, 5340];
                const labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
                
                function drawChart() {
                    w = sparkCanvas.width = sparkCanvas.parentElement.clientWidth;
                    h = sparkCanvas.height = sparkCanvas.parentElement.clientHeight;
                    
                    const padX = 30, padY = 20;
                    const maxVal = 6000;
                    
                    ctx.clearRect(0, 0, w, h);
                    
                    // Grid lines
                    ctx.strokeStyle = 'rgba(255,255,255,0.05)';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    for(let i=1; i<=3; i++) {
                        const y = padY + (h - 2*padY) * (i/4);
                        ctx.moveTo(padX, y); ctx.lineTo(w - padX, y);
                    }
                    ctx.stroke();

                    // Points calculation
                    const points = data.map((val, i) => {
                        return {
                            x: padX + (w - 2*padX) * (i / (data.length - 1)),
                            y: (h - padY) - ((val / maxVal) * (h - 2*padY)),
                            val: val,
                            label: labels[i]
                        };
                    });

                    // Fill
                    ctx.beginPath();
                    ctx.moveTo(points[0].x, h - padY);
                    points.forEach(p => ctx.lineTo(p.x, p.y));
                    ctx.lineTo(points[points.length-1].x, h - padY);
                    const grad = ctx.createLinearGradient(0, 0, 0, h);
                    grad.addColorStop(0, 'rgba(232,255,71,0.15)');
                    grad.addColorStop(1, 'rgba(232,255,71,0)');
                    ctx.fillStyle = grad;
                    ctx.fill();

                    // Line
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgba(232,255,71,0.8)';
                    ctx.lineWidth = 1.5;
                    points.forEach((p, i) => { i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y); });
                    ctx.stroke();

                    // X Labels (simplified)
                    ctx.fillStyle = '#4B5563';
                    ctx.font = '10px "Geist Mono", monospace';
                    ctx.textAlign = 'center';
                    points.forEach((p, i) => {
                        if(i % 2 === 0) ctx.fillText(p.label, p.x, h - 5);
                    });

                    return points;
                }
                
                let chartPoints = drawChart();
                window.addEventListener('resize', () => { chartPoints = drawChart(); });

                // Chart Hover Interaction
                const tooltip = document.getElementById('chart-tooltip');
                sparkCanvas.addEventListener('mousemove', (e) => {
                    const rect = sparkCanvas.getBoundingClientRect();
                    const mx = e.clientX - rect.left;
                    
                    // Find closest point
                    let closest = chartPoints[0];
                    let minD = Math.abs(mx - closest.x);
                    chartPoints.forEach(p => {
                        const d = Math.abs(mx - p.x);
                        if(d < minD) { minD = d; closest = p; }
                    });

                    if(minD < 30) {
                        drawChart(); // Redraw base
                        // Draw hover line
                        ctx.beginPath();
                        ctx.strokeStyle = 'rgba(255,255,255,0.2)';
                        ctx.setLineDash([2, 2]);
                        ctx.moveTo(closest.x, 20); ctx.lineTo(closest.x, h - 20);
                        ctx.stroke();
                        ctx.setLineDash([]);
                        // Draw dot
                        ctx.beginPath();
                        ctx.fillStyle = '#E8FF47';
                        ctx.arc(closest.x, closest.y, 3, 0, Math.PI*2);
                        ctx.fill();

                        tooltip.style.display = 'block';
                        tooltip.style.left = `${closest.x}px`;
                        tooltip.style.top = `${closest.y}px`;
                        tooltip.textContent = `${closest.label}: ${closest.val}`;
                    } else {
                        tooltip.style.display = 'none';
                        drawChart();
                    }
                });
                sparkCanvas.addEventListener('mouseleave', () => {
                    tooltip.style.display = 'none';
                    drawChart();
                });
            }

            // 9. Voronoi WebGL / Canvas Simulation (Hero)
            const vCanvas = document.getElementById('voronoi-canvas');
            if(vCanvas && window.innerWidth > 768) {
                const vCtx = vCanvas.getContext('2d');
                let width, height;
                const particles = [];
                const particleCount = 70;
                let mouse = { x: -1000, y: -1000 };

                function initCanvas() {
                    width = vCanvas.width = vCanvas.parentElement.clientWidth;
                    height = vCanvas.height = vCanvas.parentElement.clientHeight;
                    particles.length = 0;
                    for(let i=0; i<particleCount; i++) {
                        particles.push({
                            x: Math.random() * width,
                            y: Math.random() * height,
                            vx: (Math.random() - 0.5) * 0.2,
                            vy: (Math.random() - 0.5) * 0.2,
                            baseX: 0, baseY: 0,
                            highlight: Math.random() > 0.95
                        });
                    }
                    particles.forEach(p => { p.baseX = p.x; p.baseY = p.y; });
                }
                initCanvas();
                window.addEventListener('resize', initCanvas);

                vCanvas.addEventListener('mousemove', e => {
                    const rect = vCanvas.getBoundingClientRect();
                    mouse.x = e.clientX - rect.left;
                    mouse.y = e.clientY - rect.top;
                });
                vCanvas.addEventListener('mouseleave', () => { mouse.x = -1000; mouse.y = -1000; });

                function drawMesh() {
                    vCtx.clearRect(0, 0, width, height);
                    
                    particles.forEach(p => {
                        p.x += p.vx; p.y += p.vy;
                        if(p.x < 0 || p.x > width) p.vx *= -1;
                        if(p.y < 0 || p.y > height) p.vy *= -1;

                        // Mouse interaction (repel/attract subtle)
                        const dx = mouse.x - p.x;
                        const dy = mouse.y - p.y;
                        const dist = Math.sqrt(dx*dx + dy*dy);
                        if(dist < 150) {
                            p.x += dx * 0.01;
                            p.y += dy * 0.01;
                        } else {
                            p.x += (p.baseX - p.x) * 0.005;
                            p.y += (p.baseY - p.y) * 0.005;
                        }
                    });

                    // Draw connecting lines (simulated tessellation)
                    vCtx.lineWidth = 0.5;
                    for(let i=0; i<particles.length; i++) {
                        for(let j=i+1; j<particles.length; j++) {
                            const p1 = particles[i];
                            const p2 = particles[j];
                            const dist = Math.sqrt(Math.pow(p1.x-p2.x,2) + Math.pow(p1.y-p2.y,2));
                            if(dist < 120) {
                                const opacity = 1 - (dist/120);
                                vCtx.strokeStyle = `rgba(232, 255, 71, ${opacity * 0.1})`;
                                vCtx.beginPath();
                                vCtx.moveTo(p1.x, p1.y);
                                vCtx.lineTo(p2.x, p2.y);
                                vCtx.stroke();
                            }
                        }
                    }

                    // Occasional pulse cells
                    if(Math.random() < 0.02) {
                        const rp = particles[Math.floor(Math.random()*particles.length)];
                        vCtx.fillStyle = 'rgba(232, 255, 71, 0.05)';
                        vCtx.beginPath();
                        vCtx.arc(rp.x, rp.y, 40, 0, Math.PI*2);
                        vCtx.fill();
                    }

                    requestAnimationFrame(drawMesh);
                }
                drawMesh();
            }

            // 10. Easter Egg
            const cpr = document.getElementById('copyright');
            const egg = document.getElementById('easter-egg');
            if(cpr && egg) {
                cpr.addEventListener('click', () => {
                    egg.style.opacity = '1';
                    setTimeout(() => egg.style.opacity = '0', 3000);
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="loader">
<div id="loader-bar"></div>
</div>

<div className="fixed top-0 left-0 h-[2px] bg-accent z-[100] w-0" id="scroll-progress"></div>

<div className="hidden md:block" id="custom-cursor"></div>

<nav className="fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300" id="nav">
<div className="max-w-[1280px] mx-auto h-full px-5 md:px-8 flex items-center justify-between">

<a className="flex items-center gap-3 group hover-trigger" href="#">
<svg className="w-7 h-7 text-white transform group-hover:scale-110 transition-transform duration-spring" viewbox="0 0 32 32">

<line className="svg-draw" stroke="currentColor" stroke-dasharray="6" stroke-dashoffset="6" strokeWidth="1.5" style={{animation: 'draw 0.4s ease-out 0.2s forwards'}} x1="28" x2="22" y1="10" y2="10"></line>
<line className="svg-draw" stroke="currentColor" stroke-dasharray="6" stroke-dashoffset="6" strokeWidth="1.5" style={{animation: 'draw 0.4s ease-out 0.24s forwards'}} x1="28" x2="22" y1="14" y2="14"></line>
<line className="svg-draw" stroke="currentColor" stroke-dasharray="4" stroke-dashoffset="4" strokeWidth="1.5" style={{animation: 'draw 0.4s ease-out 0.28s forwards'}} x1="28" x2="28" y1="10" y2="14"></line>

<line className="svg-draw" stroke="currentColor" stroke-dasharray="6" stroke-dashoffset="6" strokeWidth="1.5" style={{animation: 'draw 0.4s ease-out 0.0s forwards'}} x1="4" x2="10" y1="10" y2="10"></line>
<line className="svg-draw" stroke="currentColor" stroke-dasharray="6" stroke-dashoffset="6" strokeWidth="1.5" style={{animation: 'draw 0.4s ease-out 0.04s forwards'}} x1="4" x2="10" y1="14" y2="14"></line>
<line className="svg-draw" stroke="currentColor" stroke-dasharray="4" stroke-dashoffset="4" strokeWidth="1.5" style={{animation: 'draw 0.4s ease-out 0.08s forwards'}} x1="4" x2="4" y1="10" y2="14"></line>

<rect className="svg-draw" fill="currentColor" height="2" opacity="0" style={{animation: 'fade 0.4s ease-out 0.12s forwards'}} width="24" x="4" y="15"></rect>
<rect className="svg-draw" fill="currentColor" height="7" opacity="0" style={{animation: 'fade 0.4s ease-out 0.16s forwards'}} width="2" x="15" y="9"></rect>

<rect fill="#E8FF47" height="3" style={{animation: 'pulse-dot 3s ease-in-out infinite'}} width="3" x="14.5" y="6"></rect>
</svg>
<span className="font-display font-semibold text-sm tracking-[0.08em] uppercase text-text-primary">LEXIS</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-body text-white/55 hover:text-white transition-colors relative group hover-trigger" href="#practice">
                    Practice Areas
                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></span>
</a>
<a className="text-sm font-body text-white/55 hover:text-white transition-colors relative group hover-trigger" href="#cases">
                    Case Studies
                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></span>
</a>
<a className="text-sm font-body text-white/55 hover:text-white transition-colors relative group hover-trigger" href="#methodology">
                    Methodology
                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></span>
</a>
<a className="text-sm font-body text-white/55 hover:text-white transition-colors relative group hover-trigger" href="#pricing">
                    Pricing
                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></span>
</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center bg-accent text-bg-0 font-display font-bold text-xs uppercase tracking-[0.06em] h-10 px-5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(232,255,71,0.25)] active:scale-95 transition-all duration-spring hover-trigger" href="#contact">
                    Request Access
                </a>
<button className="md:hidden flex flex-col gap-[0.3125rem] w-5 hover-trigger" id="mobile-menu-btn">
<span className="w-full h-[0.09375rem] bg-text-primary block transition-transform origin-center"></span>
<span className="w-full h-[0.09375rem] bg-text-primary block transition-transform origin-center"></span>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-bg-0 z-[49] flex flex-col items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300" id="mobile-menu">
<div className="flex flex-col items-center gap-6 text-center">
<a className="font-display font-bold text-4xl text-text-primary mobile-link" href="#practice">Practice Areas</a>
<a className="font-display font-bold text-4xl text-text-primary mobile-link" href="#cases">Case Studies</a>
<a className="font-display font-bold text-4xl text-text-primary mobile-link" href="#methodology">Methodology</a>
<a className="font-display font-bold text-4xl text-text-primary mobile-link" href="#pricing">Pricing</a>
<a className="mt-8 inline-flex items-center justify-center bg-accent text-bg-0 font-display font-bold text-sm uppercase tracking-[0.06em] h-12 px-8 rounded-full mobile-link" href="#contact">
                Request Access
            </a>
</div>
</div>

<main className="flex-grow">

<section className="relative min-h-[100dvh] w-full bg-bg-0 overflow-hidden pt-16 md:pt-0">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_50%,rgba(20,20,20,0.9)_0%,transparent_70%)] pointer-events-none z-0"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_75%_50%,rgba(232,255,71,0.03)_0%,transparent_60%)] pointer-events-none z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-2 min-h-[100dvh] relative z-10">

<div className="flex flex-col justify-center px-5 md:pl-[max(2rem,5vw)] md:pr-12 py-20 order-2 md:order-1 relative z-20 before:absolute before:inset-0 md:before:bg-[linear-gradient(to_right,rgba(8,8,8,0.95)_0%,rgba(8,8,8,0.70)_45%,rgba(8,8,8,0.20)_75%,transparent_100%)] before:-z-10 before:pointer-events-none">
<div className="flex items-center gap-2 mb-6">
<div className="w-[0.1875rem] h-[0.1875rem] bg-accent"></div>
<span className="font-mono text-xs uppercase tracking-[0.15em] text-[#555]">/ HERO</span>
</div>
<h1 className="font-display font-extrabold text-fluid-h1 leading-[0.92] tracking-tight text-text-primary mb-8 text-balance">
                        Law that moves at <br className="hidden md:block"/><span className="text-accent">machine</span> speed.
                    </h1>
<p className="font-body font-light text-[1.0625rem] leading-[1.7] text-text-secondary max-w-[32.5rem] mb-10">
                        LEXIS processes 14,000 precedents per query. Answers in 2.3 seconds. Billable time reclaimed.
                    </p>
<div className="font-mono text-xs text-text-muted uppercase tracking-[0.1em] mb-10 flex flex-wrap items-center gap-y-2">
<span>247 law firms</span>
<span className="mx-2 text-accent">·</span>
<span>$2.1B in cases processed</span>
<span className="mx-2 text-accent">·</span>
<span>99.97% uptime</span>
</div>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<a className="group relative flex items-center justify-center h-12 px-7 bg-accent btn-notch hover-trigger overflow-hidden" href="#contact">
<span className="font-display font-bold text-xs uppercase text-bg-0 tracking-[0.06em] group-hover:tracking-[0.12em] transition-all duration-300 relative z-10">Access the Platform</span>
<svg className="absolute inset-0 w-full h-full pointer-events-none z-20" preserveaspectratio="none">
<polygon className="opacity-0 group-hover:opacity-100 transition-opacity" fill="none" points="0,0 calc(100% - 10px),0 100%,10px 100%,100% 10px,100% 0,calc(100% - 10px)" stroke="#080808" strokeWidth="2"></polygon>
</svg>
</a>
<a className="group relative flex items-center justify-center h-12 px-7 border border-white/20 hover:border-transparent transition-colors hover-trigger" href="#cases">
<div className="absolute inset-0 shadow-[inset_0_0_0_4px_rgba(255,255,255,0.04)] group-hover:bg-[radial-gradient(circle_at_center,rgba(232,255,71,0.08)_0%,transparent_100%)] transition-all duration-300"></div>
<span className="font-body font-normal text-sm text-text-secondary group-hover:text-text-primary transition-colors relative z-10">View Case Studies</span>
</a>
</div>
</div>

<div className="relative h-[50vh] md:h-[100dvh] w-full order-1 md:order-2 border-r border-accent/15 overflow-hidden">
<img alt="Legal Brief" className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] contrast-[1.1] brightness-[0.85] filter mix-blend-luminosity opacity-40" src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<canvas className="absolute inset-0 w-full h-full z-10 pointer-events-auto mix-blend-screen opacity-50 md:opacity-100" id="voronoi-canvas"></canvas>
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,#080808_100%)] md:hidden z-20"></div>
</div>
</div>

<div className="absolute bottom-8 left-5 md:left-8 flex flex-col items-center gap-3 hidden md:flex">
<span className="font-mono text-[0.625rem] text-text-dimmed uppercase">Scroll</span>
<div className="w-[1px] h-6 bg-text-dimmed origin-top" style={{animation: 'scale-y-pulse 2s infinite ease-in-out'}}></div>
</div>
</section>

<section className="bg-bg-1 border-y border-white/5 py-12 overflow-hidden mask-edges relative">
<div className="absolute top-4 left-5 md:left-8 font-mono text-[0.625rem] text-text-dimmed uppercase z-10">/ Trusted by 247 law firms globally</div>
<div className="marquee-track items-center gap-12 pt-6 hover-trigger">

<div className="flex items-center gap-12 shrink-0">
<span className="font-display font-bold text-2xl text-white/30 uppercase tracking-widest">Skadden</span>
<div className="w-[1px] h-5 bg-white/5"></div>
<span className="font-display font-bold text-2xl text-white/30 uppercase tracking-widest">Sullivan &amp; Cromwell</span>
<div className="w-[1px] h-5 bg-white/5"></div>
<span className="font-display font-bold text-2xl text-white/30 uppercase tracking-widest">Latham</span>
<div className="w-[1px] h-5 bg-white/5"></div>
<span className="font-display font-bold text-2xl text-white/30 uppercase tracking-widest">Weil</span>
<div className="w-[1px] h-5 bg-white/5"></div>
<span className="font-display font-bold text-2xl text-white/30 uppercase tracking-widest">Quinn Emanuel</span>
<div className="w-[1px] h-5 bg-white/5"></div>
<span className="font-display font-bold text-2xl text-white/30 uppercase tracking-widest">Cleary</span>
<div className="w-[1px] h-5 bg-white/5"></div>
<span className="font-display font-bold text-2xl text-white/30 uppercase tracking-widest">Davis Polk</span>
</div>

<div className="flex items-center gap-12 shrink-0">
<span className="font-display font-bold text-2xl text-white/30 uppercase tracking-widest">Skadden</span>
<div className="w-[1px] h-5 bg-white/5"></div>
<span className="font-display font-bold text-2xl text-white/30 uppercase tracking-widest">Sullivan &amp; Cromwell</span>
<div className="w-[1px] h-5 bg-white/5"></div>
<span className="font-display font-bold text-2xl text-white/30 uppercase tracking-widest">Latham</span>
<div className="w-[1px] h-5 bg-white/5"></div>
<span className="font-display font-bold text-2xl text-white/30 uppercase tracking-widest">Weil</span>
<div className="w-[1px] h-5 bg-white/5"></div>
<span className="font-display font-bold text-2xl text-white/30 uppercase tracking-widest">Quinn Emanuel</span>
<div className="w-[1px] h-5 bg-white/5"></div>
<span className="font-display font-bold text-2xl text-white/30 uppercase tracking-widest">Cleary</span>
<div className="w-[1px] h-5 bg-white/5"></div>
<span className="font-display font-bold text-2xl text-white/30 uppercase tracking-widest">Davis Polk</span>
</div>
</div>
</section>

<section className="bg-bg-0 swiss-grid py-24 md:py-32 border-b border-white/5" id="problem">
<div className="max-w-[1280px] mx-auto px-5 md:px-8">
<div className="flex items-center gap-2 mb-6">
<div className="w-[0.1875rem] h-[0.1875rem] bg-accent"></div>
<span className="font-mono text-xs uppercase tracking-[0.15em] text-[#555]">/ THE PROBLEM</span>
</div>
<h2 className="font-display font-bold text-fluid-h2 tracking-tight text-text-primary max-w-[56.25rem] leading-tight mb-16">
<span className="italic">Forty hours.</span> To answer a question that takes LEXIS two.
                </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">

<div className="bg-bg-0 p-10 flex flex-col justify-between min-h-[18.75rem]">
<div className="font-mono text-[0.625rem] text-[#555] uppercase tracking-[0.15em]">Average Research Time</div>
<div className="my-6">
<span className="font-display font-extrabold text-fluid-stat text-[#2D2D2D] leading-none" data-suffix="h" data-val="37">0h</span>
</div>
<p className="font-body text-[0.9375rem] text-text-muted">Per substantive legal query, across a 200-partner firm.</p>
</div>

<div className="bg-card-1 relative hidden md:flex items-center justify-center overflow-hidden">
<div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-accent -translate-x-1/2 scale-y-0 origin-top" id="kinetic-line"></div>
<span className="font-display font-extrabold text-[2.5rem] text-accent relative z-10 bg-card-1 py-4">→</span>
</div>

<div className="bg-bg-0 p-10 flex flex-col justify-between min-h-[18.75rem]">
<div className="font-mono text-[0.625rem] text-[#555] uppercase tracking-[0.15em]">With LEXIS Precision Mode</div>
<div className="my-6">
<span className="font-display font-extrabold text-fluid-stat text-accent leading-none" data-decimals="1" data-suffix="s" data-val="2.3">0.0s</span>
</div>
<p className="font-body text-[0.9375rem] text-text-secondary">Across 14,000 precedents, international jurisdiction, and 6 practice areas.</p>
</div>
</div>
</div>
</section>

<section className="bg-bg-2 py-24 border-b border-white/5">
<div className="max-w-[56.25rem] mx-auto px-5 md:px-8">

<div className="rounded-lg shadow-2xl shadow-black/50 overflow-hidden border border-white/10 hover-trigger">

<div className="bg-card-1 h-9 px-4 flex items-center justify-between border-b border-white/10">
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-[#333]"></div>
<div className="w-2 h-2 rounded-full bg-[#333]"></div>
<div className="w-2 h-2 rounded-full bg-[#333]"></div>
</div>
<span className="font-mono text-[0.625rem] text-text-dimmed uppercase">LEXIS Query Terminal</span>
</div>

<div className="bg-bg-0 p-6 pb-4" id="term-input-area">
<div className="flex items-start gap-3 mb-4">
<span className="font-mono text-base text-accent leading-tight mt-[0.1rem]">&gt;</span>
<div className="font-mono text-[0.9375rem] text-text-primary w-full relative min-h-[3rem]">
<span className="text-text-secondary" id="term-typewriter"></span><span className="w-[0.5rem] h-[1.1rem] bg-accent inline-block align-middle ml-1" style={{animation: 'blink 1s step-end infinite'}}></span>
</div>
</div>

<div className="flex flex-wrap gap-2 mt-4" id="term-chips">
<button className="font-mono text-[0.6875rem] text-text-muted bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-sm hover:bg-accent/10 hover:border-accent/20 hover:text-accent transition-colors">M&amp;A · Delaware</button>
<button className="font-mono text-[0.6875rem] text-text-muted bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-sm hover:bg-accent/10 hover:border-accent/20 hover:text-accent transition-colors">Litigation · SDNY</button>
<button className="font-mono text-[0.6875rem] text-text-muted bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-sm hover:bg-accent/10 hover:border-accent/20 hover:text-accent transition-colors">Privacy · GDPR</button>
</div>
</div>

<div className="bg-bg-0 px-6 py-0 h-0 overflow-hidden transition-all duration-500 ease-out flex flex-col justify-between" id="term-response">
<div className="font-mono text-[0.8125rem] text-text-secondary leading-[1.8] whitespace-pre-wrap py-6" id="term-output"></div>
<div className="flex justify-end pb-6 opacity-0 transition-opacity duration-300" id="term-export">
<button className="border border-accent/30 px-4 py-1.5 font-mono text-[0.6875rem] text-accent rounded-sm hover:bg-accent/10 transition-colors">EXPORT MEMO ↗</button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-bg-1 swiss-grid py-24 md:py-32 border-b border-white/5 relative group/section hover-trigger" id="practice">

<div className="pointer-events-none absolute inset-0 opacity-0 group-hover/section:opacity-100 transition-opacity duration-500" id="spotlight" style={{background: 'radial-gradient(circle 300px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(232,255,71,0.04), transparent 70%)'}}></div>
<div className="max-w-[1280px] mx-auto px-5 md:px-8 relative z-10">
<div className="flex items-center gap-2 mb-6">
<div className="w-[0.1875rem] h-[0.1875rem] bg-accent"></div>
<span className="font-mono text-xs uppercase tracking-[0.15em] text-[#555]">/ PRACTICE AREAS</span>
</div>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-white/10 pb-12">
<h2 className="font-display font-bold text-fluid-h2 tracking-tight text-text-primary max-w-[37.5rem] leading-tight">
<span className="italic">Every</span> practice. One intelligence layer.
                    </h2>
<p className="font-body text-base text-text-secondary max-w-[37.5rem]">
                        LEXIS maps legal knowledge graphs for 8 core practice areas, cross-referencing 847,000 live precedents.
                    </p>
</div>

<div className="flex flex-col border-t border-white/5" id="accordion">

<div className="border-b border-white/5 group cursor-pointer acc-row">
<div className="flex items-center justify-between min-h-[4.5rem] py-4 group-hover:bg-accent/5 transition-colors px-2 -mx-2">
<div className="flex items-center gap-6">
<span className="font-mono text-[0.6875rem] text-[#555]">01</span>
<h3 className="font-display font-semibold text-lg md:text-xl text-text-primary group-hover:text-white transition-colors">M&amp;A Advisory</h3>
</div>
<div className="flex items-center gap-6">
<span className="font-mono text-[0.625rem] text-text-muted uppercase hidden sm:block">Corporate</span>
<iconify-icon className="text-white/30 text-xl group-hover:rotate-90 group-hover:text-white transition-all duration-300 acc-icon" icon="solar:add-square-linear"></iconify-icon>
</div>
</div>
<div className="accordion-content" data-open="false">
<div className="accordion-inner pb-6 pt-2 px-2 md:pl-12 flex flex-col md:flex-row gap-8">
<p className="font-body text-[0.9375rem] text-text-secondary md:w-3/5 leading-relaxed">
                                    LEXIS cross-references acquisition precedents across 47 jurisdictions in 1.4 seconds, surfacing deal-breakers before due diligence begins.
                                </p>
<div className="md:w-2/5 flex flex-col items-start gap-4">
<div className="flex flex-wrap gap-2">
<span className="font-mono text-[0.6875rem] uppercase border border-white/10 px-3 py-1 rounded-sm text-text-muted">Cross-Border</span>
<span className="font-mono text-[0.6875rem] uppercase border border-white/10 px-3 py-1 rounded-sm text-text-muted">Due Diligence</span>
</div>
<span className="font-mono text-[0.6875rem] text-accent mt-2">Metric: 94.3% accuracy on deal structure risk flags</span>
</div>
</div>
</div>
</div>

<div className="border-b border-white/5 group cursor-pointer acc-row">
<div className="flex items-center justify-between min-h-[4.5rem] py-4 group-hover:bg-accent/5 transition-colors px-2 -mx-2">
<div className="flex items-center gap-6">
<span className="font-mono text-[0.6875rem] text-[#555]">02</span>
<h3 className="font-display font-semibold text-lg md:text-xl text-text-primary group-hover:text-white transition-colors">Litigation Strategy</h3>
</div>
<div className="flex items-center gap-6">
<span className="font-mono text-[0.625rem] text-text-muted uppercase hidden sm:block">Disputes</span>
<iconify-icon className="text-white/30 text-xl group-hover:rotate-90 group-hover:text-white transition-all duration-300 acc-icon" icon="solar:add-square-linear"></iconify-icon>
</div>
</div>
<div className="accordion-content" data-open="false">
<div className="accordion-inner pb-6 pt-2 px-2 md:pl-12 flex flex-col md:flex-row gap-8">
<p className="font-body text-[0.9375rem] text-text-secondary md:w-3/5 leading-relaxed">
                                    Predict outcomes with 89.1% confidence by analyzing 2.3 million case resolutions across district and appellate courts.
                                </p>
<div className="md:w-2/5 flex flex-col items-start gap-4">
<div className="flex flex-wrap gap-2">
<span className="font-mono text-[0.6875rem] uppercase border border-white/10 px-3 py-1 rounded-sm text-text-muted">Outcome Prediction</span>
<span className="font-mono text-[0.6875rem] uppercase border border-white/10 px-3 py-1 rounded-sm text-text-muted">Motions</span>
</div>
<span className="font-mono text-[0.6875rem] text-accent mt-2">Metric: $840M in settlements influenced</span>
</div>
</div>
</div>
</div>

<div className="border-b border-white/5 group cursor-pointer acc-row">
<div className="flex items-center justify-between min-h-[4.5rem] py-4 group-hover:bg-accent/5 transition-colors px-2 -mx-2">
<div className="flex items-center gap-6">
<span className="font-mono text-[0.6875rem] text-[#555]">03</span>
<h3 className="font-display font-semibold text-lg md:text-xl text-text-primary group-hover:text-white transition-colors">Regulatory &amp; Compliance</h3>
</div>
<div className="flex items-center gap-6">
<span className="font-mono text-[0.625rem] text-text-muted uppercase hidden sm:block">Risk</span>
<iconify-icon className="text-white/30 text-xl group-hover:rotate-90 group-hover:text-white transition-all duration-300 acc-icon" icon="solar:add-square-linear"></iconify-icon>
</div>
</div>
<div className="accordion-content" data-open="false">
<div className="accordion-inner pb-6 pt-2 px-2 md:pl-12 flex flex-col md:flex-row gap-8">
<p className="font-body text-[0.9375rem] text-text-secondary md:w-3/5 leading-relaxed">
                                    Continuous monitoring of 14 regulatory bodies. Immediate alert on rule changes affecting your client portfolio.
                                </p>
<div className="md:w-2/5 flex flex-col items-start gap-4">
<div className="flex flex-wrap gap-2">
<span className="font-mono text-[0.6875rem] uppercase border border-white/10 px-3 py-1 rounded-sm text-text-muted">SEC</span>
<span className="font-mono text-[0.6875rem] uppercase border border-white/10 px-3 py-1 rounded-sm text-text-muted">GDPR</span>
</div>
<span className="font-mono text-[0.6875rem] text-accent mt-2">Metric: 4,200 alerts issued in Q4 2024</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-bg-2 swiss-grid py-24 md:py-32 border-b border-white/5 relative overflow-hidden" id="methodology">
<div className="max-w-[1280px] mx-auto px-5 md:px-8 relative z-10">
<div className="flex items-center gap-2 mb-6">
<div className="w-[0.1875rem] h-[0.1875rem] bg-accent"></div>
<span className="font-mono text-xs uppercase tracking-[0.15em] text-[#555]">/ METHODOLOGY</span>
</div>
<h2 className="font-display font-bold text-fluid-h2 tracking-tight text-text-primary max-w-[43.75rem] leading-tight mb-20">
                    From query to case memo. <br/><span className="italic text-text-secondary">In seconds, not days.</span>
</h2>

<div className="grid grid-cols-1 md:grid-cols-4 relative" id="process-grid">

<div className="hidden md:block absolute top-[4.5rem] left-[2.5rem] right-0 h-[1px] border-t border-dashed border-white/10 z-0">
<div className="h-full bg-accent w-0 transition-all duration-[1.2s] ease-out-expo" id="process-line"></div>
</div>

<div className="md:hidden absolute top-0 bottom-0 left-[1.5rem] w-[1px] border-l border-dashed border-white/10 z-0"></div>

<div className="relative py-12 md:p-10 border-b md:border-b-0 md:border-r border-white/5 group hover-trigger hover:-translate-y-1 transition-transform duration-300">
<span className="font-display font-extrabold text-[clamp(5rem,8vw,7.5rem)] text-white/[0.02] absolute top-0 right-4 leading-none pointer-events-none group-hover:text-white/[0.04] transition-colors">1</span>
<div className="w-8 h-8 rounded-full bg-bg-2 border border-white/10 flex items-center justify-center mb-8 relative z-10 text-accent">
<iconify-icon icon="solar:scanner-linear" width="16"></iconify-icon>
</div>
<div className="font-mono text-[0.6875rem] text-[#555] uppercase tracking-[0.15em] mb-3">/ INGEST</div>
<h3 className="font-display font-semibold text-xl text-text-primary mb-4">Query Parsing</h3>
<p className="font-body text-[0.9375rem] text-text-secondary leading-[1.7] mb-6">Your question deconstructed into jurisdiction, doctrine class, and chronological scope.</p>
<span className="font-mono text-xs text-accent">0.14s</span>
</div>
<div className="relative py-12 md:p-10 border-b md:border-b-0 md:border-r border-white/5 group hover-trigger hover:-translate-y-1 transition-transform duration-300">
<span className="font-display font-extrabold text-[clamp(5rem,8vw,7.5rem)] text-white/[0.02] absolute top-0 right-4 leading-none pointer-events-none group-hover:text-white/[0.04] transition-colors">2</span>
<div className="w-8 h-8 rounded-full bg-bg-2 border border-white/10 flex items-center justify-center mb-8 relative z-10 text-accent">
<iconify-icon icon="solar:network-linear" width="16"></iconify-icon>
</div>
<div className="font-mono text-[0.6875rem] text-[#555] uppercase tracking-[0.15em] mb-3">/ ANALYSE</div>
<h3 className="font-display font-semibold text-xl text-text-primary mb-4">Graph Traversal</h3>
<p className="font-body text-[0.9375rem] text-text-secondary leading-[1.7] mb-6">LEXIS traverses 847,000 precedents across its legal knowledge graph, weighting by relevance.</p>
<span className="font-mono text-xs text-accent">1.8s</span>
</div>
<div className="relative py-12 md:p-10 border-b md:border-b-0 md:border-r border-white/5 group hover-trigger hover:-translate-y-1 transition-transform duration-300">
<span className="font-display font-extrabold text-[clamp(5rem,8vw,7.5rem)] text-white/[0.02] absolute top-0 right-4 leading-none pointer-events-none group-hover:text-white/[0.04] transition-colors">3</span>
<div className="w-8 h-8 rounded-full bg-bg-2 border border-white/10 flex items-center justify-center mb-8 relative z-10 text-accent">
<iconify-icon icon="solar:scale-linear" width="16"></iconify-icon>
</div>
<div className="font-mono text-[0.6875rem] text-[#555] uppercase tracking-[0.15em] mb-3">/ SYNTHESISE</div>
<h3 className="font-display font-semibold text-xl text-text-primary mb-4">Argument Construct</h3>
<p className="font-body text-[0.9375rem] text-text-secondary leading-[1.7] mb-6">Competing arguments ranked by persuasive weight. Dissenting opinions flagged.</p>
<span className="font-mono text-xs text-accent">0.31s</span>
</div>
<div className="relative py-12 md:p-10 group hover-trigger hover:-translate-y-1 transition-transform duration-300">
<span className="font-display font-extrabold text-[clamp(5rem,8vw,7.5rem)] text-white/[0.02] absolute top-0 right-4 leading-none pointer-events-none group-hover:text-white/[0.04] transition-colors">4</span>
<div className="w-8 h-8 rounded-full bg-bg-2 border border-white/10 flex items-center justify-center mb-8 relative z-10 text-accent">
<iconify-icon icon="solar:document-text-linear" width="16"></iconify-icon>
</div>
<div className="font-mono text-[0.6875rem] text-[#555] uppercase tracking-[0.15em] mb-3">/ DELIVER</div>
<h3 className="font-display font-semibold text-xl text-text-primary mb-4">Memo Generation</h3>
<p className="font-body text-[0.9375rem] text-text-secondary leading-[1.7] mb-6">Billable-quality memo generated in your house style. Footnoted, formatted.</p>
<span className="font-mono text-xs text-accent">2.3s total</span>
</div>
</div>
</div>
</section>

<section className="bg-bg-0 py-24 md:py-32 border-b border-white/5">
<div className="max-w-[1280px] mx-auto px-5 md:px-8">
<div className="flex items-center gap-2 mb-6">
<div className="w-[0.1875rem] h-[0.1875rem] bg-accent"></div>
<span className="font-mono text-xs uppercase tracking-[0.15em] text-[#555]">/ BY THE NUMBERS</span>
</div>
<h2 className="font-display font-bold text-fluid-h2 tracking-tight text-text-primary mb-16">
                    Every number earned. <span className="italic text-text-secondary">None invented.</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_2fr] gap-px bg-white/5 border border-white/5">

<div className="grid grid-cols-2 col-span-1 md:col-span-2 gap-px bg-white/5">
<div className="bg-card-1 p-8 md:p-10">
<div className="font-display font-extrabold text-[clamp(2.5rem,4vw,4.5rem)] text-accent mb-2 leading-none" data-decimals="1" data-prefix="$" data-suffix="B" data-val="2.1">$0.0B</div>
<div className="font-mono text-[0.625rem] text-text-muted uppercase tracking-wider mb-3">In Cases Processed</div>
<div className="font-mono text-[0.6875rem] text-text-secondary">▲ +34.7% YoY</div>
</div>
<div className="bg-card-1 p-8 md:p-10">
<div className="font-display font-extrabold text-[clamp(2.5rem,4vw,4.5rem)] text-text-primary mb-2 leading-none" data-val="847291">0</div>
<div className="font-mono text-[0.625rem] text-text-muted uppercase tracking-wider mb-3">Live Precedents</div>
<div className="font-mono text-[0.6875rem] text-text-secondary">+ 2,400 daily</div>
</div>
<div className="bg-card-2 p-8 md:p-10">
<div className="font-display font-extrabold text-[clamp(2.5rem,4vw,4.5rem)] text-text-primary mb-2 leading-none" data-decimals="1" data-suffix="%" data-val="89.1">0.0%</div>
<div className="font-mono text-[0.625rem] text-text-muted uppercase tracking-wider mb-3">Outcome Accuracy</div>
<div className="font-mono text-[0.6875rem] text-text-secondary">▲ +4.2pts vs. 2023</div>
</div>
<div className="bg-card-2 p-8 md:p-10">
<div className="font-display font-extrabold text-[clamp(2.5rem,4vw,4.5rem)] text-accent mb-2 leading-none" data-decimals="1" data-suffix="s" data-val="2.3">0.0s</div>
<div className="font-mono text-[0.625rem] text-text-muted uppercase tracking-wider mb-3">Average Query Time</div>
<div className="font-mono text-[0.6875rem] text-text-secondary">↓ -0.8s vs. prior</div>
</div>
</div>

<div className="bg-bg-0 p-8 md:p-12 relative flex flex-col hover-trigger group">
<div className="font-mono text-[0.625rem] text-[#555] uppercase tracking-wider mb-8">Query Volume — Trailing 12 Months</div>
<div className="flex-grow w-full relative min-h-[15rem]">
<canvas className="absolute inset-0 w-full h-full" id="sparkline"></canvas>

<div className="absolute hidden bg-[#111] border border-white/10 px-3 py-2 font-mono text-[0.6875rem] text-accent pointer-events-none z-10 rounded-sm transform -translate-x-1/2 -translate-y-[120%]" id="chart-tooltip"></div>
</div>
<div className="absolute inset-0 border border-accent/0 group-hover:border-accent/10 transition-colors pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="bg-bg-1 pt-24 md:pt-32" id="cases">
<div className="max-w-[1280px] mx-auto px-5 md:px-8 mb-16">
<div className="flex items-center gap-2 mb-6">
<div className="w-[0.1875rem] h-[0.1875rem] bg-accent"></div>
<span className="font-mono text-xs uppercase tracking-[0.15em] text-[#555]">/ CASE STUDIES</span>
</div>
<h2 className="font-display font-bold text-fluid-h2 tracking-tight text-text-primary">
                    Real matters. <span className="italic text-accent">Real verdicts.</span>
</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 border-y border-white/5 group hover-trigger relative">
<div className="absolute top-0 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out-expo z-20"></div>
<div className="h-[15rem] md:h-[30rem] relative overflow-hidden">
<img className="w-full h-full object-cover grayscale-[1] contrast-[1.15] group-hover:grayscale-[0.5] transition-all duration-700" src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute right-0 top-0 bottom-0 w-[1px] bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="p-8 md:p-14 flex flex-col justify-between bg-bg-1">
<div>
<div className="flex items-center gap-4 mb-8">
<span className="font-mono text-[0.625rem] text-[#555] uppercase tracking-[0.15em]">M&amp;A · Cross-Border</span>
<span className="font-body text-sm text-text-muted">Global Tech Acquirer — NDA</span>
</div>
<h3 className="font-display font-bold text-fluid-h3 text-text-primary group-hover:text-white transition-colors mb-6 leading-tight">
                            $4.2B acquisition. 3 regulators. 1 night.
                        </h3>
<p className="font-body text-[0.9375rem] text-text-secondary leading-relaxed max-w-[28rem]">
                            Target's IP portfolio contained 3 conflicting patent claims across EU and US jurisdictions. LEXIS surfaced the conflict at 11:47 PM — preventing a $180M indemnity clause from being missed.
                        </p>
</div>
<div className="mt-12 flex flex-col sm:flex-row items-start sm:items-end gap-6 justify-between">
<div>
<div className="font-display font-extrabold text-3xl md:text-5xl text-accent leading-none mb-2">$180M</div>
<div className="font-mono text-[0.625rem] text-text-muted uppercase">Indemnity Exposure Avoided</div>
</div>
<div className="font-mono text-[0.625rem] text-text-dimmed flex flex-col gap-1 border-l border-white/10 pl-4">
<span>[ 11:47 PM · Conflict detected ]</span>
<span>[ 12:03 AM · Memo drafted ]</span>
<span>[ 12:31 AM · Partner briefed ]</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/5 group hover-trigger relative">
<div className="absolute top-0 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out-expo z-20"></div>
<div className="p-8 md:p-14 flex flex-col justify-between bg-bg-1 order-2 md:order-1">
<div>
<div className="flex items-center gap-4 mb-8">
<span className="font-mono text-[0.625rem] text-[#555] uppercase tracking-[0.15em]">Litigation · Appellate</span>
<span className="font-body text-sm text-text-muted">Regional Insurance Group</span>
</div>
<h3 className="font-display font-bold text-fluid-h3 text-text-primary group-hover:text-white transition-colors mb-6 leading-tight">
                            Precedent from 1987. Found in 4 minutes.
                        </h3>
<p className="font-body text-[0.9375rem] text-text-secondary leading-relaxed max-w-[28rem]">
                            The opposing brief cited 14 cases. LEXIS identified that their anchor precedent had been silently distinguished in a 1987 Seventh Circuit decision — invisible to manual research.
                        </p>
</div>
<div className="mt-12">
<div className="font-display font-extrabold text-3xl md:text-5xl text-accent leading-none mb-2">11–0</div>
<div className="font-mono text-[0.625rem] text-text-muted uppercase">Panel Reversal After LEXIS Filing</div>
</div>
</div>
<div className="h-[15rem] md:h-[30rem] relative overflow-hidden order-1 md:order-2">
<img className="w-full h-full object-cover grayscale-[1] contrast-[1.15] group-hover:grayscale-[0.5] transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute left-0 top-0 bottom-0 w-[1px] bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
</div>
</section>

<section className="bg-bg-1 pt-24 pb-32 border-b border-white/5" id="pricing">
<div className="max-w-[1280px] mx-auto px-5 md:px-8">
<div className="flex items-center gap-2 mb-6 justify-center">
<div className="w-[0.1875rem] h-[0.1875rem] bg-accent"></div>
<span className="font-mono text-xs uppercase tracking-[0.15em] text-[#555]">/ PRICING</span>
</div>
<h2 className="font-display font-bold text-fluid-h2 tracking-tight text-text-primary text-center mb-10">
                    Priced like infrastructure. <br/><span className="italic text-text-secondary">Not like software.</span>
</h2>
<div className="flex justify-center mb-16">
<div className="flex items-center gap-4 bg-white/5 p-1 rounded-full border border-white/10">
<span className="font-mono text-[0.6875rem] uppercase px-4 text-white">Monthly</span>

<div className="w-10 h-5 bg-white/10 rounded-full relative cursor-pointer">
<div className="absolute left-[2px] top-[2px] w-4 h-4 bg-accent rounded-full transition-transform"></div>
</div>
<span className="font-mono text-[0.6875rem] uppercase px-4 text-text-muted">Annual <span className="text-accent ml-1">-20%</span></span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">

<div className="bg-card-1 p-10 relative group hover-trigger overflow-hidden order-2 lg:order-1">

<div className="absolute inset-0 border border-white/5 group-hover:border-accent/30 transition-colors pointer-events-none"></div>
<div className="font-mono text-[0.625rem] text-[#555] uppercase mb-6">For Solo &amp; Small Firm</div>
<h3 className="font-display font-extrabold text-3xl text-text-primary mb-2">Counsel</h3>
<div className="mb-4">
<span className="font-display font-extrabold text-[clamp(2.5rem,4vw,4rem)] text-text-primary">$490</span>
<span className="font-body text-sm text-text-muted">/mo</span>
</div>
<p className="font-body text-sm text-text-secondary mb-8">For lawyers who move faster than their firm.</p>
<div className="w-full h-[1px] bg-white/5 mb-8"></div>
<ul className="flex flex-col gap-4 mb-10">
<li className="flex items-start gap-3 text-sm text-text-secondary"><iconify-icon className="text-accent mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> 5 practice area modules</li>
<li className="flex items-start gap-3 text-sm text-text-secondary"><iconify-icon className="text-accent mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> 500 queries/month</li>
<li className="flex items-start gap-3 text-sm text-text-secondary"><iconify-icon className="text-accent mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Memo export in 3 formats</li>
<li className="flex items-start gap-3 text-sm text-text-secondary"><iconify-icon className="text-accent mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> 2-user seats</li>
</ul>
<button className="w-full flex justify-center items-center h-11 bg-white/5 border border-white/10 text-text-primary font-display font-bold text-[0.8125rem] uppercase tracking-wider btn-notch hover:bg-white/10 transition-colors">Start Free Trial</button>
</div>

<div className="bg-card-1 p-10 relative border border-accent/25 order-1 lg:order-2">
<div className="absolute top-0 left-0 w-full h-[1px] bg-[linear-gradient(90deg,transparent,rgba(232,255,71,0.4),transparent)]"></div>
<div className="absolute -top-[13px] left-1/2 -translate-x-1/2 bg-accent/10 border border-accent/20 px-3 py-1 rounded-sm text-accent font-mono text-[0.625rem] uppercase tracking-wider">Most Popular</div>
<div className="font-mono text-[0.625rem] text-[#555] uppercase mb-6 mt-2">For Mid-Size Practices</div>
<h3 className="font-display font-extrabold text-3xl text-text-primary mb-2">Partner</h3>
<div className="mb-4">
<span className="font-display font-extrabold text-[clamp(2.5rem,4vw,4rem)] text-accent">$1,240</span>
<span className="font-body text-sm text-text-muted">/mo</span>
</div>
<p className="font-body text-sm text-text-secondary mb-8">For practices that don't miss a precedent.</p>
<div className="w-full h-[1px] bg-white/5 mb-8"></div>
<ul className="flex flex-col gap-4 mb-10">
<li className="flex items-start gap-3 text-sm text-text-secondary"><iconify-icon className="text-accent mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> All 8 practice areas</li>
<li className="flex items-start gap-3 text-sm text-text-secondary"><iconify-icon className="text-accent mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Unlimited queries</li>
<li className="flex items-start gap-3 text-sm text-text-secondary"><iconify-icon className="text-accent mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> API access</li>
<li className="flex items-start gap-3 text-sm text-text-secondary"><iconify-icon className="text-accent mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> 10-user seats</li>
<li className="flex items-start gap-3 text-sm text-text-secondary"><iconify-icon className="text-accent mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> White-label output</li>
</ul>
<button className="w-full flex justify-center items-center h-11 bg-accent text-bg-0 font-display font-bold text-[0.8125rem] uppercase tracking-wider btn-notch hover:-translate-y-0.5 transition-transform hover-trigger hover:shadow-[0_4px_16px_rgba(232,255,71,0.2)]">Upgrade to Partner</button>
</div>

<div className="bg-card-1 p-10 relative group hover-trigger overflow-hidden order-3">
<div className="absolute inset-0 border border-white/5 group-hover:border-accent/30 transition-colors pointer-events-none"></div>
<div className="font-mono text-[0.625rem] text-[#555] uppercase mb-6">For Global Firms</div>
<h3 className="font-display font-extrabold text-3xl text-text-primary mb-2">Chambers</h3>
<div className="mb-4">
<span className="font-display font-extrabold text-[clamp(2.5rem,4vw,4rem)] text-text-primary">Custom</span>
</div>
<p className="font-body text-sm text-text-secondary mb-8">For Magic Circle and Am Law 100 firms.</p>
<div className="w-full h-[1px] bg-white/5 mb-8"></div>
<ul className="flex flex-col gap-4 mb-10">
<li className="flex items-start gap-3 text-sm text-text-secondary"><iconify-icon className="text-accent mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Unlimited seats</li>
<li className="flex items-start gap-3 text-sm text-text-secondary"><iconify-icon className="text-accent mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Private fine-tuning</li>
<li className="flex items-start gap-3 text-sm text-text-secondary"><iconify-icon className="text-accent mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> On-premise option</li>
<li className="flex items-start gap-3 text-sm text-text-secondary"><iconify-icon className="text-accent mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Dedicated success partner</li>
</ul>
<button className="w-full flex justify-center items-center h-11 bg-white/5 border border-white/10 text-text-primary font-display font-bold text-[0.8125rem] uppercase tracking-wider btn-notch hover:bg-white/10 transition-colors">Request Enterprise Demo</button>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-bg-0 border-t border-white/5 relative z-10 pt-20">

<div className="w-full overflow-hidden flex justify-center pb-10 group cursor-default">
<h2 className="font-display font-extrabold text-fluid-footer leading-none tracking-tighter text-white/[0.03] group-hover:text-white/[0.06] transition-colors duration-[0.8s] select-none text-center w-full">
                LEX<span className="group-hover:text-accent/10 transition-colors duration-[0.8s]">I</span>S
            </h2>
</div>

<div className="max-w-[1280px] mx-auto px-5 md:px-8 py-12 border-t border-white/5">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-16">

<div className="flex flex-col items-start">
<div className="flex items-center gap-3 mb-6">
<svg className="w-7 h-7 text-white" viewbox="0 0 32 32">
<line stroke="currentColor" strokeWidth="1.5" x1="28" x2="22" y1="10" y2="10"></line>
<line stroke="currentColor" strokeWidth="1.5" x1="28" x2="22" y1="14" y2="14"></line>
<line stroke="currentColor" strokeWidth="1.5" x1="28" x2="28" y1="10" y2="14"></line>
<line stroke="currentColor" strokeWidth="1.5" x1="4" x2="10" y1="10" y2="10"></line>
<line stroke="currentColor" strokeWidth="1.5" x1="4" x2="10" y1="14" y2="14"></line>
<line stroke="currentColor" strokeWidth="1.5" x1="4" x2="4" y1="10" y2="14"></line>
<rect fill="currentColor" height="2" width="24" x="4" y="15"></rect>
<rect fill="currentColor" height="7" width="2" x="15" y="9"></rect>
<rect fill="#E8FF47" height="3" width="3" x="14.5" y="6"></rect>
</svg>
<span className="font-display font-semibold text-sm tracking-[0.08em] uppercase text-text-primary">LEXIS</span>
</div>
<p className="font-body text-sm text-text-muted max-w-[16.25rem] mb-6">Legal intelligence infrastructure for the firms that shape markets.</p>
<div className="flex gap-4">
<a className="text-white/30 hover:text-white/80 transition-colors" href="#"><iconify-icon icon="solar:square-academic-linear" width="20"></iconify-icon></a>
<a className="text-white/30 hover:text-white/80 transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
<a className="text-white/30 hover:text-white/80 transition-colors" href="#"><iconify-icon icon="solar:code-circle-linear" width="20"></iconify-icon></a>
</div>
</div>

<div className="flex flex-col gap-4">
<h4 className="font-mono text-[0.625rem] uppercase tracking-[0.15em] text-[#555] mb-2">Product</h4>
<a className="font-body text-sm text-white/60 hover:text-text-primary transition-colors" href="#">Practice Areas</a>
<a className="font-body text-sm text-white/60 hover:text-text-primary transition-colors" href="#">Methodology</a>
<a className="font-body text-sm text-white/60 hover:text-text-primary transition-colors" href="#">Pricing</a>
<a className="font-body text-sm text-white/60 hover:text-text-primary transition-colors" href="#">API Docs</a>
<a className="font-body text-sm text-white/60 hover:text-text-primary transition-colors" href="#">Security</a>
</div>

<div className="flex flex-col gap-4">
<h4 className="font-mono text-[0.625rem] uppercase tracking-[0.15em] text-[#555] mb-2">Company</h4>
<a className="font-body text-sm text-white/60 hover:text-text-primary transition-colors" href="#">About</a>
<a className="font-body text-sm text-white/60 hover:text-text-primary transition-colors" href="#">Team</a>
<a className="font-body text-sm text-white/60 hover:text-text-primary transition-colors" href="#">Careers</a>
<a className="font-body text-sm text-white/60 hover:text-text-primary transition-colors" href="#">Press</a>
<a className="font-body text-sm text-white/60 hover:text-text-primary transition-colors" href="#">Contact</a>
</div>

<div className="flex flex-col gap-4">
<h4 className="font-mono text-[0.625rem] uppercase tracking-[0.15em] text-[#555] mb-2">Legal</h4>
<a className="font-body text-sm text-white/60 hover:text-text-primary transition-colors" href="#">Privacy Policy</a>
<a className="font-body text-sm text-white/60 hover:text-text-primary transition-colors" href="#">Terms of Service</a>
<a className="font-body text-sm text-white/60 hover:text-text-primary transition-colors" href="#">DPA</a>
<a className="font-body text-sm text-white/60 hover:text-text-primary transition-colors" href="#">Compliance</a>
</div>
</div>
</div>

<div className="border-t border-white/5 py-6">
<div className="max-w-[1280px] mx-auto px-5 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="font-mono text-[0.6875rem] text-text-dimmed text-center md:text-left relative inline-block">
<span className="cursor-pointer hover:text-white transition-colors" id="copyright">©</span> 2025 LEXIS Technologies Inc. All rights reserved.
                    <span className="absolute left-0 bottom-full mb-2 bg-[#111] border border-accent/30 px-3 py-2 rounded-sm font-mono text-[0.625rem] text-accent opacity-0 pointer-events-none transition-opacity duration-300 whitespace-nowrap" id="easter-egg">You found it. 37h → 2.3s.</span>
</p>
<div className="flex items-center gap-2">
<span className="border border-white/10 px-3 py-1 rounded-sm font-mono text-[0.5625rem] uppercase text-text-dimmed">SOC 2 Type II</span>
<span className="border border-white/10 px-3 py-1 rounded-sm font-mono text-[0.5625rem] uppercase text-text-dimmed">ISO 27001</span>
<span className="border border-white/10 px-3 py-1 rounded-sm font-mono text-[0.5625rem] uppercase text-text-dimmed hidden sm:inline-block">GDPR Compliant</span>
</div>
<p className="font-mono text-[0.6875rem] text-text-dimmed hidden md:block">Built for the law. Powered by machine intelligence.</p>
</div>
</div>
</footer>



    </>
  );
}
