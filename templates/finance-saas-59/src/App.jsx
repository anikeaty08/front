import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
colors: {
graphite: {
900: '#0E0F11',
800: '#1A1C20',
700: '#2A2D35',
500: '#5C5F66',
},
amber: '#E8A020',
amberDark: '#D18D1A',
canvas: '#F6F4F0',
surface: '#FFFFFF',
},
fontFamily: {
display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
body: ['"Inter"', 'system-ui', 'sans-serif'],
mono: ['"IBM Plex Mono"', 'monospace'],
},
fontSize: {
'h1': 'clamp(2.75rem, 5.5vw, 5.25rem)',
'h2': 'clamp(2rem, 3.5vw, 3.25rem)',
'h3': 'clamp(1.2rem, 1.8vw, 1.6rem)',
'body': 'clamp(0.875rem, 1vw, 1rem)',
},
spacing: {
'section': 'clamp(5.5rem, 9vw, 11rem)',
'container': 'clamp(1.5rem, 5vw, 4rem)',
'card': 'clamp(1.75rem, 2.5vw, 2.5rem)',
},
transitionTimingFunction: {
'swiss': 'cubic-bezier(0.16, 1, 0.3, 1)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // 1. Navigation Scroll Effect
            const nav = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    nav.classList.replace('bg-transparent', 'bg-surface/90');
                    nav.classList.replace('border-transparent', 'border-graphite-900/10');
                    nav.style.backdropFilter = 'blur(8px)';
                } else {
                    nav.classList.replace('bg-surface/90', 'bg-transparent');
                    nav.classList.replace('border-graphite-900/10', 'border-transparent');
                    nav.style.backdropFilter = 'none';
                }
            });

            // 2. Intersection Observer for Reveals and Scan Lines
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Handle standard reveals
                        const reveals = entry.target.querySelectorAll('.reveal-up');
                        reveals.forEach(el => el.classList.add('is-visible'));

                        // Handle scan lines
                        const scanLine = entry.target.querySelector('.scan-line');
                        if (scanLine) scanLine.classList.add('is-visible');

                        // Handle CTA Box specific scan line
                        if(entry.target.id === 'demo') {
                            const ctaScan = document.getElementById('cta-scan');
                            if(ctaScan) ctaScan.style.transform = 'scaleX(1)';
                        }

                        // Handle Bar Chart fills
                        const bars = entry.target.querySelectorAll('[data-animate-width]');
                        bars.forEach(bar => {
                            bar.style.transform = 'scaleX(1)';
                        });

                        // Handle Integration Logos stagger
                        const logos = entry.target.querySelectorAll('.logo-item');
                        logos.forEach(logo => {
                            logo.style.opacity = '1';
                            logo.style.transform = 'scale(1)';
                            logo.style.transform = 'translateY(0)';
                        });

                        // Handle Number Counters
                        const counters = entry.target.querySelectorAll('.counter-value');
                        counters.forEach(counter => {
                            if (!counter.hasAttribute('data-animated')) {
                                animateCounter(counter);
                                counter.setAttribute('data-animated', 'true');
                            }
                        });

                        // Handle Workflow Visualizer Animation
                        if(entry.target.id === 'workflow-visualizer') {
                            if (!entry.target.hasAttribute('data-animated')) {
                                animateWorkflow();
                                entry.target.setAttribute('data-animated', 'true');
                            }
                        }

                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.observe-section').forEach(section => {
                observer.observe(section);
            });
            // Observe hero elements immediately
            document.querySelectorAll('.reveal-up').forEach(el => {
                if(el.closest('section') && !el.closest('section').classList.contains('observe-section')) {
                     setTimeout(() => el.classList.add('is-visible'), 100);
                }
            });

            // 3. Number Counter Animation
            function animateCounter(el) {
                const target = parseFloat(el.getAttribute('data-target'));
                const decimals = parseInt(el.getAttribute('data-decimals') || 0);
                const duration = 2400; // 2.4s
                const start = performance.now();

                function update(currentTime) {
                    const elapsed = currentTime - start;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    // Ease out cubic
                    const easeProgress = 1 - Math.pow(1 - progress, 3);
                    const currentVal = (target * easeProgress).toFixed(decimals);
                    
                    // Formatting
                    if (decimals === 0) {
                        el.textContent = parseInt(currentVal).toLocaleString();
                    } else {
                        el.textContent = parseFloat(currentVal).toFixed(decimals);
                    }

                    if (progress < 1) {
                        requestAnimationFrame(update);
                    } else {
                        // Ensure final exact value
                        el.textContent = target.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
                    }
                }
                requestAnimationFrame(update);
            }

            // 4. Workflow Visualizer Looping Animation
            function animateWorkflow() {
                const token = document.getElementById('expense-token');
                const nodes = document.querySelectorAll('.step-node');
                if(!token || nodes.length === 0) return;
                
                const columns = 4;
                let currentStep = 0;
                
                const reset = () => {
                    token.style.transition = 'none';
                    token.style.left = '2rem';
                    token.style.opacity = '0';
                    
                    nodes.forEach((n) => {
                        const icon = n.querySelector('.step-icon');
                        icon.classList.remove('bg-amber/20', 'border-amber/50', 'shadow-[0_0_20px_rgba(232,160,32,0.3)]');
                        icon.classList.add('bg-graphite-800', 'border-surface/20');
                        icon.querySelector('iconify-icon').classList.replace('text-amber', 'text-surface/50');
                    });
                    
                    currentStep = 0;
                    
                    setTimeout(() => {
                        token.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
                        token.style.opacity = '1';
                        setTimeout(moveToken, 200);
                    }, 50);
                };

                const moveToken = () => {
                    if (currentStep >= columns) {
                        setTimeout(reset, 2000);
                        return;
                    }
                    
                    // Light up current node
                    const currentNode = nodes[currentStep];
                    if(currentNode) {
                        const icon = currentNode.querySelector('.step-icon');
                        icon.classList.remove('bg-graphite-800', 'border-surface/20');
                        icon.classList.add('bg-amber/20', 'border-amber/50', 'shadow-[0_0_20px_rgba(232,160,32,0.3)]');
                        icon.querySelector('iconify-icon').classList.replace('text-surface/50', 'text-amber');
                    }
                    
                    // Move token dynamically using calc
                    if(window.innerWidth >= 768) {
                        token.style.left = currentStep === 0 ? '2rem' : `calc(${currentStep * 25}% + 2rem)`;
                    } else {
                        // Mobile: token stays still or we just rely on node lighting (token is hidden or absolute)
                        token.style.opacity = '0';
                    }
                    
                    currentStep++;
                    setTimeout(moveToken, 1400); // Time spent on each node
                };
                
                reset();
            }

            // 5. Parallax for Hero Panel
            const heroPanel = document.getElementById('hero-panel');
            if (heroPanel) {
                window.addEventListener('scroll', () => {
                    const scrollY = window.scrollY;
                    if (scrollY < window.innerHeight) {
                        const yPos = (scrollY * -0.05); // Subtle parallax
                        heroPanel.style.transform = `translateY(${yPos}px)`;
                    }
                });
            }

            // 6. Hero WebGL Approximation (Vanilla Canvas Particle Network) full width
            const canvas = document.getElementById('hero-canvas');
            if (canvas && window.innerWidth >= 768) {
                const ctx = canvas.getContext('2d');
                let width, height;
                let particles = [];
                const particleCount = window.innerWidth > 1400 ? 250 : 150;
                
                let mouse = { x: -1000, y: -1000 };

                function initCanvas() {
                    const section = canvas.closest('section');
                    width = canvas.width = window.innerWidth;
                    height = canvas.height = section.offsetHeight;
                    
                    particles = [];
                    for (let i = 0; i < particleCount; i++) {
                        particles.push({
                            x: Math.random() * width,
                            y: Math.random() * height,
                            vx: (Math.random() - 0.5) * 0.25,
                            vy: (Math.random() - 0.5) * 0.25,
                            baseX: 0, baseY: 0
                        });
                        particles[i].baseX = particles[i].x;
                        particles[i].baseY = particles[i].y;
                    }
                }

                initCanvas();
                window.addEventListener('resize', initCanvas);

                canvas.addEventListener('mousemove', (e) => {
                    const rect = canvas.getBoundingClientRect();
                    mouse.x = e.clientX - rect.left;
                    mouse.y = e.clientY - rect.top;
                });
                canvas.addEventListener('mouseleave', () => {
                    mouse.x = -1000; mouse.y = -1000;
                });

                function draw() {
                    ctx.clearRect(0, 0, width, height);

                    // Update and draw particles
                    for (let i = 0; i < particleCount; i++) {
                        let p = particles[i];
                        
                        // Movement
                        p.x += p.vx;
                        p.y += p.vy;

                        // Bounds
                        if (p.x < 0 || p.x > width) p.vx *= -1;
                        if (p.y < 0 || p.y > height) p.vy *= -1;

                        // Mouse Repulsion
                        let dx = mouse.x - p.x;
                        let dy = mouse.y - p.y;
                        let dist = Math.sqrt(dx*dx + dy*dy);
                        if (dist < 120) {
                            p.x -= dx * 0.03;
                            p.y -= dy * 0.03;
                        }

                        // Draw Dot
                        ctx.fillStyle = 'rgba(14, 15, 17, 0.4)';
                        ctx.beginPath();
                        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
                        ctx.fill();

                        // Connect lines (Voronoi boundary approximation)
                        for (let j = i + 1; j < particleCount; j++) {
                            let p2 = particles[j];
                            let d2x = p.x - p2.x;
                            let d2y = p.y - p2.y;
                            let dist2 = Math.sqrt(d2x*d2x + d2y*d2y);

                            if (dist2 < 85) {
                                ctx.beginPath();
                                ctx.strokeStyle = `rgba(232, 160, 32, ${0.12 * (1 - dist2/85)})`; // Amber lines
                                ctx.lineWidth = 0.6;
                                ctx.moveTo(p.x, p.y);
                                ctx.lineTo(p2.x, p2.y);
                                ctx.stroke();
                            }
                        }
                    }
                    requestAnimationFrame(draw);
                }
                draw();
            }

            // Disable animations if prefers-reduced-motion
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                document.documentElement.style.scrollBehavior = 'auto';
                document.querySelectorAll('.reveal-up, .scan-line, [data-animate-width], .logo-item, .step-icon').forEach(el => {
                    el.style.transition = 'none';
                    el.style.animation = 'none';
                    if(el.classList.contains('reveal-up') || el.classList.contains('scan-line')) {
                        el.classList.add('is-visible');
                    }
                    if(el.hasAttribute('data-animate-width')) el.style.transform = 'scaleX(1)';
                    if(el.classList.contains('logo-item')) { el.style.opacity = '1'; el.style.transform = 'none'; }
                });
                const canvasEl = document.getElementById('hero-canvas');
                if(canvasEl) canvasEl.style.display = 'none';
                
                // Set counters to final
                document.querySelectorAll('.counter-value').forEach(el => {
                     const target = parseFloat(el.getAttribute('data-target'));
                     const decimals = parseInt(el.getAttribute('data-decimals') || 0);
                     el.textContent = target.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
                     el.setAttribute('data-animated', 'true');
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-overlay"></div>
<div className="fixed bottom-0 left-0 w-full h-[36px] bg-graphite-900 z-[9997] overflow-hidden items-center pointer-events-none border-t border-white/10 hidden md:flex">
<div className="flex whitespace-nowrap animate-ticker font-mono text-xs text-canvas tracking-[0.06em]">
<span className="mx-4">TRAVEL <span className="text-amber">$2,841</span> //</span>
<span className="mx-4">SOFTWARE <span className="text-amber">$14,290</span> //</span>
<span className="mx-4">MARKETING <span className="text-amber">$8,402</span> //</span>
<span className="mx-4">MEALS <span className="text-amber">$1,204</span> //</span>
<span className="mx-4">CONTRACTORS <span className="text-amber">$31,800</span> //</span>
<span className="mx-4">EQUIPMENT <span className="text-amber">$6,100</span> //</span>

<span className="mx-4">TRAVEL <span className="text-amber">$2,841</span> //</span>
<span className="mx-4">SOFTWARE <span className="text-amber">$14,290</span> //</span>
<span className="mx-4">MARKETING <span className="text-amber">$8,402</span> //</span>
<span className="mx-4">MEALS <span className="text-amber">$1,204</span> //</span>
<span className="mx-4">CONTRACTORS <span className="text-amber">$31,800</span> //</span>
<span className="mx-4">EQUIPMENT <span className="text-amber">$6,100</span> //</span>
</div>
</div>

<nav className="fixed top-0 w-full z-50 transition-colors duration-300 bg-transparent border-b border-transparent px-container py-4 flex items-center justify-between" id="navbar">
<a className="font-display font-semibold text-xl tracking-[0.04em] text-graphite-900 uppercase" href="#">Ledgr</a>
<div className="hidden md:flex gap-8 items-center">
<a className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-graphite-900 hover:text-amber transition-colors relative group" href="#product">
                Product
                <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-amber transition-all duration-200 group-hover:w-full group-hover:left-0 origin-center"></span>
</a>
<a className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-graphite-900 hover:text-amber transition-colors relative group" href="#integrations">
                Integrations
                <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-amber transition-all duration-200 group-hover:w-full group-hover:left-0 origin-center"></span>
</a>
<a className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-graphite-900 hover:text-amber transition-colors relative group" href="#pricing">
                Pricing
                <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-amber transition-all duration-200 group-hover:w-full group-hover:left-0 origin-center"></span>
</a>
<a className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-graphite-900 hover:text-amber transition-colors relative group" href="#customers">
                Customers
                <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-amber transition-all duration-200 group-hover:w-full group-hover:left-0 origin-center"></span>
</a>
</div>
<a className="hidden md:inline-flex relative items-center justify-center px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-graphite-900 bg-gradient-to-b from-amber to-amberDark shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_2px_10px_rgba(232,160,32,0.2)] rounded-none group hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_6px_20px_rgba(232,160,32,0.4)] transition-all duration-300 hover:-translate-y-0.5 overflow-hidden" href="#demo">
<span className="relative z-10 flex items-center gap-2">Request Demo <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="14"></iconify-icon></span>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-swiss"></div>
</a>
<button className="md:hidden text-graphite-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</nav>

<section className="relative min-h-[90vh] pt-[120px] pb-section px-container overflow-hidden flex items-end w-full">

<canvas className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-[0.85] mix-blend-multiply hidden md:block" id="hero-canvas"></canvas>
<div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_30%_70%,rgba(232,160,32,0.06)_0%,transparent_60%)] md:hidden"></div>

<div className="absolute top-0 left-0 w-[1px] h-full bg-amber opacity-0 z-10 animate-sweep pointer-events-none"></div>
<div className="w-full max-w-[clamp(70rem,92vw,96rem)] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10 items-end">

<div className="md:col-span-5 flex flex-col justify-end pb-8 reveal-up">
<h1 className="font-display font-light text-h1 leading-[1.05] tracking-tight text-graphite-900 mb-6 text-balance">
                    Every dollar your company spends. <br/><span className="font-normal text-amber">Visible.</span>
</h1>
<p className="font-body text-graphite-500 max-w-[42ch] mb-10 leading-relaxed text-sm md:text-base">
                    LEDGR gives finance teams real-time visibility into company spend — categorized, approved, and reconciled before the month closes.
                </p>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-12">
<a className="relative inline-flex items-center justify-center px-8 py-4 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-surface bg-gradient-to-b from-graphite-800 to-graphite-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_4px_20px_rgba(14,15,17,0.2)] rounded-none group hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_32px_rgba(14,15,17,0.3)] transition-all duration-300 hover:-translate-y-0.5 overflow-hidden" href="#demo">
<span className="relative z-10 flex items-center gap-2">Request a Demo <iconify-icon icon="solar:calendar-linear" width="16"></iconify-icon></span>
<div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-swiss"></div>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 font-mono text-xs font-medium uppercase tracking-[0.1em] text-graphite-900 bg-surface border border-graphite-900/10 shadow-[0_2px_10px_rgba(14,15,17,0.02)] rounded-none hover:shadow-[0_8px_24px_rgba(14,15,17,0.06)] hover:border-graphite-900/20 transition-all duration-300 hover:-translate-y-0.5 group" href="#product">
                        See it live <iconify-icon className="ml-2 text-graphite-500 group-hover:text-amber transition-colors" icon="solar:play-circle-linear" width="16"></iconify-icon>
</a>
</div>
<div className="flex items-center gap-4 border-t border-graphite-900/10 pt-6">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-none bg-graphite-500 border border-canvas shadow-sm"></div>
<div className="w-8 h-8 rounded-none bg-graphite-900 border border-canvas shadow-sm"></div>
<div className="w-8 h-8 rounded-none bg-amber border border-canvas shadow-sm"></div>
</div>
<p className="font-mono text-xs tracking-[0.06em] text-graphite-500 uppercase leading-tight max-w-[200px]">
                        Trusted by <span className="text-graphite-900 font-semibold">340</span> finance teams.<br/>
<span className="text-graphite-900 font-semibold">$2.1B</span> in spend under management.
                    </p>
</div>
</div>

<div className="md:col-span-7 relative md:-ml-6 reveal-up" id="hero-panel" style={{transitionDelay: '200ms'}}>
<div className="bg-surface border border-graphite-900/10 shadow-[0_24px_80px_rgba(14,15,17,0.08)] rounded-none overflow-hidden relative group">

<div className="border-b border-graphite-900/10 px-6 py-4 flex justify-between items-center bg-canvas/50">
<div className="flex items-center gap-6">
<span className="font-display font-semibold text-sm uppercase tracking-tight text-graphite-900">LEDGR</span>
<div className="hidden sm:flex items-center gap-4">
<span className="font-mono text-xs tracking-[0.1em] text-graphite-900 uppercase flex items-center gap-1"><span className="w-1.5 h-1.5 bg-amber"></span> Overview</span>
<span className="font-mono text-xs tracking-[0.1em] text-graphite-500 uppercase hover:text-graphite-900 cursor-pointer transition-colors">Expenses</span>
<span className="font-mono text-xs tracking-[0.1em] text-graphite-500 uppercase hover:text-graphite-900 cursor-pointer transition-colors">Approvals</span>
</div>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-graphite-500 hover:text-graphite-900 transition-colors" icon="solar:bell-linear" width="18"></iconify-icon>
<div className="flex items-center gap-2 border-l border-graphite-900/10 pl-4">
<div className="w-6 h-6 bg-graphite-900 text-canvas flex items-center justify-center font-mono text-xs">AC</div>
<span className="font-mono text-xs text-graphite-500 hidden sm:block">Aria Chen, CFO</span>
</div>
</div>
</div>

<div className="p-6 bg-surface">

<div className="flex justify-between items-end mb-8">
<div>
<h3 className="font-display font-normal text-lg mb-1">Company Spend</h3>
<div className="flex items-center gap-2">
<span className="font-mono text-xs text-graphite-500 border border-graphite-900/10 px-2 py-0.5">Nov 1–30, 2025</span>
<span className="font-mono text-xs text-amber bg-amber/10 px-2 py-0.5">-4.2% vs Oct</span>
</div>
</div>
<div className="text-right group-hover:-translate-y-0.5 transition-transform duration-300">
<span className="block font-mono text-xs text-graphite-500 mb-1 uppercase tracking-[0.06em]">Total Spend</span>
<span className="font-mono text-2xl font-medium text-graphite-900 group-hover:text-amber transition-colors">$284,210.00</span>
</div>
</div>

<div className="grid grid-cols-2 gap-4 mb-8">

<div className="border border-graphite-900/10 p-4 hover:border-amber/40 transition-colors cursor-pointer group/card flex justify-between items-start">
<div>
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-graphite-500" icon="solar:plane-linear" width="16"></iconify-icon>
<span className="font-display font-medium text-sm">Travel</span>
</div>
<span className="font-mono text-xs text-graphite-500 uppercase">Current Month</span>
</div>
<div className="text-right">
<span className="font-mono text-xs text-[#10B981] mb-2 block">↓ 12%</span>
<span className="font-mono text-sm font-medium text-graphite-900 group-hover/card:text-amber transition-colors">$82,400</span>
</div>
</div>

<div className="border border-graphite-900/10 p-4 hover:border-amber/40 transition-colors cursor-pointer group/card flex justify-between items-start">
<div>
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-graphite-500" icon="solar:monitor-linear" width="16"></iconify-icon>
<span className="font-display font-medium text-sm">Software</span>
</div>
<span className="font-mono text-xs text-graphite-500 uppercase">Current Month</span>
</div>
<div className="text-right">
<span className="font-mono text-xs text-[#EF4444] mb-2 block">↑ 4%</span>
<span className="font-mono text-sm font-medium text-graphite-900 group-hover/card:text-amber transition-colors">$61,200</span>
</div>
</div>
</div>

<div>
<span className="font-mono text-xs text-graphite-500 uppercase tracking-[0.1em] border-b border-graphite-900/10 pb-2 block w-full mb-2">Recent Transactions</span>
<div className="space-y-1">
<div className="flex justify-between items-center py-2 px-2 hover:bg-canvas transition-colors text-xs">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-[#10B981]"></div>
<span className="font-medium min-w-[120px]">Delta Airlines</span>
<span className="font-mono text-xs text-graphite-500 hidden sm:inline-block border border-graphite-900/10 px-1">Travel</span>
</div>
<span className="font-mono font-medium">$1,240.50</span>
</div>
<div className="flex justify-between items-center py-2 px-2 hover:bg-canvas transition-colors text-xs">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-amber"></div>
<span className="font-medium min-w-[120px]">AWS</span>
<span className="font-mono text-xs text-graphite-500 hidden sm:inline-block border border-graphite-900/10 px-1">Software</span>
</div>
<span className="font-mono font-medium">$8,420.00</span>
</div>
<div className="flex justify-between items-center py-2 px-2 hover:bg-canvas transition-colors text-xs">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-[#EF4444]"></div>
<span className="font-medium min-w-[120px]">The Ritz-Carlton</span>
<span className="font-mono text-xs text-graphite-500 hidden sm:inline-block border border-graphite-900/10 px-1">Meals</span>
</div>
<span className="font-mono font-medium text-[#EF4444]">$840.00</span>
</div>
</div>
</div>
</div>

<div className="bg-graphite-900 py-2 px-6 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-[#10B981] rounded-none animate-pulse"></div>
<span className="font-mono text-xs text-surface/70 uppercase tracking-[0.1em]">All systems operational</span>
</div>
<span className="font-mono text-xs text-surface/50 uppercase tracking-[0.1em]">Last sync: 14s ago</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-surface w-full relative border-y border-graphite-900/10 observe-section">
<div className="scan-line absolute top-0 left-0 w-full h-[1px] bg-graphite-900/20"></div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-graphite-900/10 w-full">
<div className="p-8 lg:p-12 flex flex-col justify-center group">
<span className="font-mono text-3xl md:text-4xl font-medium text-graphite-900 mb-2 group-hover:text-amber group-hover:-translate-y-1 transition-all duration-300">
                    $<span className="counter-value" data-decimals="1" data-target="2.1">0.0</span>B
                </span>
<span className="font-body text-xs text-graphite-500 uppercase tracking-wide">Spend under management.</span>
</div>
<div className="p-8 lg:p-12 flex flex-col justify-center group">
<span className="font-mono text-3xl md:text-4xl font-medium text-graphite-900 mb-2 group-hover:text-amber group-hover:-translate-y-1 transition-all duration-300">
<span className="counter-value" data-decimals="0" data-target="340">0</span>
</span>
<span className="font-body text-xs text-graphite-500 uppercase tracking-wide">Finance teams trust LEDGR.</span>
</div>
<div className="p-8 lg:p-12 flex flex-col justify-center group">
<span className="font-mono text-3xl md:text-4xl font-medium text-graphite-900 mb-2 group-hover:text-amber group-hover:-translate-y-1 transition-all duration-300">
<span className="counter-value" data-decimals="1" data-target="4.2">0.0</span> <span className="text-xl">days</span>
</span>
<span className="font-body text-xs text-graphite-500 uppercase tracking-wide">Average month-close time.</span>
</div>
<div className="p-8 lg:p-12 flex flex-col justify-center group">
<span className="font-mono text-3xl md:text-4xl font-medium text-graphite-900 mb-2 group-hover:text-amber group-hover:-translate-y-1 transition-all duration-300">
<span className="counter-value" data-decimals="2" data-target="99.97">0.00</span>%
                </span>
<span className="font-body text-xs text-graphite-500 uppercase tracking-wide">Uptime. Not rounded.</span>
</div>
</div>
</section>

<section className="py-section px-container relative observe-section" id="problem">
<div className="scan-line absolute top-0 left-0 w-full h-[1px] bg-graphite-900/10"></div>
<div className="max-w-[clamp(70rem,92vw,96rem)] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

<div className="lg:col-span-5 lg:sticky lg:top-32 reveal-up">
<span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-amber inline-block mb-8">[02] THE REALITY</span>
<h2 className="font-display font-light text-h2 leading-[1.1] tracking-tight text-graphite-900 mb-6 text-balance">
                    Spreadsheets don't close books. People do.
                </h2>
<p className="font-body text-graphite-500 max-w-[42ch] leading-relaxed text-sm md:text-base">
                    At month-end, your team is manually reconciling receipts, chasing approvals, and correcting categorization errors that should never have happened. This is not a process problem. It's a visibility problem.
                </p>
</div>

<div className="lg:col-span-7 flex flex-col gap-4 mt-8 lg:mt-0">

<div className="bg-surface border border-graphite-900/10 p-card relative group hover:shadow-[0_8px_32px_rgba(14,15,17,0.06)] transition-all duration-400 reveal-up" style={{transitionDelay: '100ms'}}>
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-amber scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100"></div>
<h3 className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-graphite-900 mb-4">Receipts Without Context.</h3>
<p className="font-body text-sm text-graphite-500 leading-relaxed max-w-[50ch]">
<span className="font-mono text-amber text-sm mr-1">67%</span> of expense reports are missing required documentation. Your team finds out at review, not at submission.
                    </p>
</div>

<div className="bg-surface border border-graphite-900/10 p-card relative group hover:shadow-[0_8px_32px_rgba(14,15,17,0.06)] transition-all duration-400 lg:-ml-4 reveal-up" style={{transitionDelay: '200ms'}}>
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-amber scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100"></div>
<h3 className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-graphite-900 mb-4">Approval Chains That Break.</h3>
<p className="font-body text-sm text-graphite-500 leading-relaxed max-w-[50ch]">
                        A policy exception at one level shouldn't require <span className="font-mono text-graphite-900 text-sm mx-1 group-hover:text-amber transition-colors">3</span> emails and a Slack thread. But it does.
                    </p>
</div>

<div className="bg-surface border border-graphite-900/10 p-card relative group hover:shadow-[0_8px_32px_rgba(14,15,17,0.06)] transition-all duration-400 lg:-ml-8 reveal-up" style={{transitionDelay: '300ms'}}>
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-amber scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100"></div>
<h3 className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-graphite-900 mb-4">Month-End That Takes Weeks.</h3>
<p className="font-body text-sm text-graphite-500 leading-relaxed max-w-[50ch]">
                        The average finance team spends <span className="font-mono text-graphite-900 text-sm mx-1 group-hover:text-amber transition-colors">11.4</span> days closing books on travel and expense alone. Every month.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-graphite-900 text-surface py-section relative overflow-hidden observe-section" id="product">
<div className="scan-line absolute top-0 left-0 w-full h-[1px] bg-surface/20"></div>

<div className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap opacity-[0.03] font-mono text-[12vw] font-bold text-amber pointer-events-none uppercase tracking-tight select-none">
            POLICY CHECK PASSED // RECEIPT MATCHED // APPROVAL SENT // SYNC COMPLETE //
        </div>
<div className="max-w-[96vw] mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">

<div className="lg:col-span-4 lg:col-start-2 reveal-up">
<span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-amber inline-block mb-8">[03] LIVE VISIBILITY</span>
<h2 className="font-display font-light text-h2 leading-[1.1] tracking-tight mb-6 text-balance">
                    Real-time spend. <br />Zero surprises.
                </br></h2>
<p className="font-body text-graphite-500 max-w-[42ch] leading-relaxed text-sm md:text-base mb-10">
                    Every transaction. Every category. Every policy exception. Live, in one view — not a report you generate on the <span className="font-mono text-surface">30th</span>.
                </p>
<a className="relative inline-flex items-center justify-center px-8 py-4 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-graphite-900 bg-gradient-to-b from-surface to-canvas shadow-[inset_0_1px_0_rgba(255,255,255,1),0_4px_20px_rgba(255,255,255,0.1)] rounded-none group hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_8px_32px_rgba(255,255,255,0.2)] transition-all duration-300 hover:-translate-y-0.5 overflow-hidden" href="#demo">
<span className="relative z-10 flex items-center gap-2">See Full Demo <iconify-icon icon="solar:round-alt-arrow-right-linear" width="16"></iconify-icon></span>
<div className="absolute inset-0 bg-amber translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-swiss"></div>
</a>
</div>

<div className="lg:col-span-7 reveal-up" style={{transitionDelay: '200ms'}}>
<div className="bg-graphite-800 border border-surface/10 rounded-none overflow-hidden shadow-2xl">

<div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-surface/10 border-b border-surface/10 bg-graphite-900">
<div className="p-4 group">
<span className="block font-mono text-xs text-graphite-500 uppercase tracking-widest mb-2">Total Spend</span>
<span className="font-mono text-sm sm:text-base text-surface group-hover:text-amber transition-colors">$284,210</span>
</div>
<div className="p-4 group">
<span className="block font-mono text-xs text-graphite-500 uppercase tracking-widest mb-2">Pending</span>
<span className="font-mono text-sm sm:text-base text-surface group-hover:text-amber transition-colors">$14,820 <span className="text-xs text-graphite-500">(3)</span></span>
</div>
<div className="p-4 group">
<span className="block font-mono text-xs text-graphite-500 uppercase tracking-widest mb-2">Exceptions</span>
<span className="font-mono text-sm sm:text-base text-[#EF4444] group-hover:text-amber transition-colors">7</span>
</div>
<div className="p-4 group">
<span className="block font-mono text-xs text-graphite-500 uppercase tracking-widest mb-2">Missing Rcpt</span>
<span className="font-mono text-sm sm:text-base text-amber group-hover:text-surface transition-colors">12</span>
</div>
</div>

<div className="p-6 md:p-8">
<div className="space-y-4 max-w-2xl">

<div>
<div className="flex justify-between font-mono text-xs mb-1">
<span className="text-surface">Travel</span>
<span className="text-graphite-500">$82,400</span>
</div>
<div className="h-2 bg-graphite-900 w-full overflow-hidden">
<div className="h-full bg-amber origin-left scale-x-0 transition-transform duration-1000 delay-300 ease-swiss" data-animate-width="" style={{width: '80%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between font-mono text-xs mb-1">
<span className="text-surface">Software</span>
<span className="text-graphite-500">$61,200</span>
</div>
<div className="h-2 bg-graphite-900 w-full overflow-hidden">
<div className="h-full bg-amber origin-left scale-x-0 transition-transform duration-1000 delay-400 ease-swiss" data-animate-width="" style={{width: '60%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between font-mono text-xs mb-1">
<span className="text-surface">Marketing</span>
<span className="text-graphite-500">$48,900</span>
</div>
<div className="h-2 bg-graphite-900 w-full overflow-hidden">
<div className="h-full bg-amber origin-left scale-x-0 transition-transform duration-1000 delay-500 ease-swiss" data-animate-width="" style={{width: '45%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-section px-container relative bg-canvas observe-section overflow-hidden">
<div className="scan-line absolute top-0 left-0 w-full h-[1px] bg-graphite-900/10"></div>
<div className="max-w-[clamp(70rem,92vw,96rem)] mx-auto">
<div className="mb-16 reveal-up">
<span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-amber inline-block mb-4">[04] AUTOMATION</span>
<h2 className="font-display font-light text-h2 leading-[1.1] tracking-tight text-graphite-900 mb-6 max-w-2xl">
                    Approvals that don't require a meeting.
                </h2>
<p className="font-body text-graphite-500 max-w-[60ch] leading-relaxed text-sm md:text-base">
                    Define your policy once. LEDGR enforces it on every submission — automatically escalating exceptions, routing by amount threshold, and flagging policy violations before they reach your inbox.
                </p>
</div>

<div className="bg-graphite-900 border border-graphite-900/10 p-8 md:p-12 relative overflow-hidden reveal-up shadow-2xl group" id="workflow-visualizer">

<div className="absolute top-1/2 left-16 right-16 h-[1px] bg-surface/10 -translate-y-1/2 hidden md:block z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10 min-h-[220px]">

<div className="step-node relative flex flex-col items-center text-center h-full">
<span className="font-mono text-xs text-surface/50 uppercase tracking-widest mb-6">1. Submitted</span>
<div className="w-12 h-12 bg-graphite-800 border border-surface/20 flex items-center justify-center mb-6 step-icon transition-all duration-300 relative z-10 mt-auto">
<iconify-icon className="text-surface/50 transition-colors duration-300" icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<span className="font-mono text-xs text-surface/70 mt-auto">Aria C. • $840.00</span>
</div>

<div className="step-node relative flex flex-col items-center text-center h-full hidden md:flex">
<span className="font-mono text-xs text-surface/50 uppercase tracking-widest mb-6">2. Policy Engine</span>
<div className="w-12 h-12 bg-graphite-800 border border-surface/20 flex items-center justify-center mb-6 step-icon transition-all duration-300 relative z-10 mt-auto">
<iconify-icon className="text-surface/50 transition-colors duration-300" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<span className="font-mono text-xs text-surface/70 mt-auto">Rule: &lt;$1k Auto-Approve</span>
</div>

<div className="step-node relative flex flex-col items-center text-center h-full hidden md:flex">
<span className="font-mono text-xs text-surface/50 uppercase tracking-widest mb-6">3. Approval</span>
<div className="w-12 h-12 bg-graphite-800 border border-surface/20 flex items-center justify-center mb-6 step-icon transition-all duration-300 relative z-10 mt-auto">
<iconify-icon className="text-surface/50 transition-colors duration-300" icon="solar:user-check-linear" width="20"></iconify-icon>
</div>
<span className="font-mono text-xs text-amber mt-auto">Bypassed (Auto)</span>
</div>

<div className="step-node relative flex flex-col items-center text-center h-full hidden md:flex">
<span className="font-mono text-xs text-surface/50 uppercase tracking-widest mb-6">4. Reconciled</span>
<div className="w-12 h-12 bg-graphite-800 border border-surface/20 flex items-center justify-center mb-6 step-icon transition-all duration-300 relative z-10 mt-auto">
<iconify-icon className="text-surface/50 transition-colors duration-300" icon="solar:database-linear" width="20"></iconify-icon>
</div>
<span className="font-mono text-xs text-surface/70 mt-auto">Synced to ERP</span>
</div>
</div>

<div className="absolute top-1/2 -translate-y-1/2 left-0 h-10 bg-amber flex items-center px-4 shadow-[0_0_20px_rgba(232,160,32,0.3)] transition-all duration-[800ms] ease-swiss z-20 opacity-0 pointer-events-none w-[max-content]" id="expense-token">
<iconify-icon className="text-graphite-900 mr-2" icon="solar:bill-linear" width="16"></iconify-icon>
<span className="font-mono text-xs text-graphite-900 font-semibold">$840.00</span>
</div>
</div>
<div className="mt-12 flex flex-col sm:flex-row gap-8 border-t border-graphite-900/10 pt-6 reveal-up">
<div>
<span className="font-mono text-xl text-graphite-900 block mb-1">84%</span>
<span className="font-mono text-xs text-graphite-500 uppercase tracking-widest">Approved Automatically</span>
</div>
<div>
<span className="font-mono text-xl text-graphite-900 block mb-1">2.1 <span className="text-sm">hrs</span></span>
<span className="font-mono text-xs text-graphite-500 uppercase tracking-widest">Average Time to Approval</span>
</div>
</div>
</div>
</section>

<section className="py-section px-container relative bg-canvas observe-section" id="integrations">
<div className="scan-line absolute top-0 left-0 w-full h-[1px] bg-graphite-900/10"></div>
<div className="max-w-[clamp(70rem,92vw,96rem)] mx-auto text-center reveal-up">
<span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-amber inline-block mb-4">[05] ECOSYSTEM</span>
<h2 className="font-display font-light text-h2 leading-[1.1] tracking-tight text-graphite-900 mb-6 mx-auto">
                Connects to the stack you already use.
            </h2>
<p className="font-body text-graphite-500 max-w-[50ch] mx-auto leading-relaxed text-sm md:text-base mb-16">
                LEDGR syncs bidirectionally with your ERP, HR system, and card provider. One integration setup. Zero ongoing maintenance.
            </p>

<div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 max-w-4xl mx-auto">

<div className="flex flex-col items-center justify-center opacity-0 transform translate-y-4 transition-all duration-500 logo-item group cursor-pointer">
<div className="w-20 h-20 bg-surface border border-graphite-900/10 shadow-sm group-hover:shadow-[0_8px_24px_rgba(14,15,17,0.06)] group-hover:border-amber/40 transition-all duration-300 flex items-center justify-center mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="font-display font-semibold text-2xl tracking-tighter text-graphite-900 group-hover:scale-105 transition-transform duration-300 relative z-10">NS</span>
</div>
<span className="font-display font-medium text-sm text-graphite-900 mb-1">NetSuite</span>
<span className="font-mono text-xs text-graphite-500 uppercase tracking-widest border border-graphite-900/10 bg-surface px-2 py-0.5">ERP</span>
</div>

<div className="flex flex-col items-center justify-center opacity-0 transform translate-y-4 transition-all duration-500 logo-item group cursor-pointer" style={{transitionDelay: '50ms'}}>
<div className="w-20 h-20 bg-surface border border-graphite-900/10 shadow-sm group-hover:shadow-[0_8px_24px_rgba(14,15,17,0.06)] group-hover:border-amber/40 transition-all duration-300 flex items-center justify-center mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="font-display font-semibold text-2xl tracking-tighter text-graphite-900 group-hover:scale-105 transition-transform duration-300 relative z-10">XR</span>
</div>
<span className="font-display font-medium text-sm text-graphite-900 mb-1">Xero</span>
<span className="font-mono text-xs text-graphite-500 uppercase tracking-widest border border-graphite-900/10 bg-surface px-2 py-0.5">Accounting</span>
</div>

<div className="flex flex-col items-center justify-center opacity-0 transform translate-y-4 transition-all duration-500 logo-item group cursor-pointer" style={{transitionDelay: '100ms'}}>
<div className="w-20 h-20 bg-surface border border-graphite-900/10 shadow-sm group-hover:shadow-[0_8px_24px_rgba(14,15,17,0.06)] group-hover:border-amber/40 transition-all duration-300 flex items-center justify-center mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="font-display font-semibold text-2xl tracking-tighter text-graphite-900 group-hover:scale-105 transition-transform duration-300 relative z-10">WD</span>
</div>
<span className="font-display font-medium text-sm text-graphite-900 mb-1">Workday</span>
<span className="font-mono text-xs text-graphite-500 uppercase tracking-widest border border-graphite-900/10 bg-surface px-2 py-0.5">HR</span>
</div>

<div className="flex flex-col items-center justify-center opacity-0 transform translate-y-4 transition-all duration-500 logo-item group cursor-pointer" style={{transitionDelay: '150ms'}}>
<div className="w-20 h-20 bg-surface border border-graphite-900/10 shadow-sm group-hover:shadow-[0_8px_24px_rgba(14,15,17,0.06)] group-hover:border-amber/40 transition-all duration-300 flex items-center justify-center mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="font-display font-semibold text-2xl tracking-tighter text-graphite-900 group-hover:scale-105 transition-transform duration-300 relative z-10">RP</span>
</div>
<span className="font-display font-medium text-sm text-graphite-900 mb-1">Ramp</span>
<span className="font-mono text-xs text-graphite-500 uppercase tracking-widest border border-graphite-900/10 bg-surface px-2 py-0.5">Cards</span>
</div>

<div className="flex flex-col items-center justify-center opacity-0 transform translate-y-4 transition-all duration-500 logo-item group cursor-pointer" style={{transitionDelay: '200ms'}}>
<div className="w-20 h-20 bg-surface border border-graphite-900/10 shadow-sm group-hover:shadow-[0_8px_24px_rgba(14,15,17,0.06)] group-hover:border-amber/40 transition-all duration-300 flex items-center justify-center mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="font-display font-semibold text-2xl tracking-tighter text-graphite-900 group-hover:scale-105 transition-transform duration-300 relative z-10">BX</span>
</div>
<span className="font-display font-medium text-sm text-graphite-900 mb-1">Brex</span>
<span className="font-mono text-xs text-graphite-500 uppercase tracking-widest border border-graphite-900/10 bg-surface px-2 py-0.5">Cards</span>
</div>

<div className="flex flex-col items-center justify-center opacity-0 transform translate-y-4 transition-all duration-500 logo-item group cursor-pointer" style={{transitionDelay: '250ms'}}>
<div className="w-20 h-20 bg-surface border border-graphite-900/10 shadow-sm group-hover:shadow-[0_8px_24px_rgba(14,15,17,0.06)] group-hover:border-amber/40 transition-all duration-300 flex items-center justify-center mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="font-display font-semibold text-2xl tracking-tighter text-graphite-900 group-hover:scale-105 transition-transform duration-300 relative z-10">ST</span>
</div>
<span className="font-display font-medium text-sm text-graphite-900 mb-1">Stripe</span>
<span className="font-mono text-xs text-graphite-500 uppercase tracking-widest border border-graphite-900/10 bg-surface px-2 py-0.5">Payments</span>
</div>

<div className="flex flex-col items-center justify-center opacity-0 transform translate-y-4 transition-all duration-500 logo-item group cursor-pointer" style={{transitionDelay: '300ms'}}>
<div className="w-20 h-20 bg-surface border border-graphite-900/10 shadow-sm group-hover:shadow-[0_8px_24px_rgba(14,15,17,0.06)] group-hover:border-amber/40 transition-all duration-300 flex items-center justify-center mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="font-display font-semibold text-2xl tracking-tighter text-graphite-900 group-hover:scale-105 transition-transform duration-300 relative z-10">RG</span>
</div>
<span className="font-display font-medium text-sm text-graphite-900 mb-1">Rippling</span>
<span className="font-mono text-xs text-graphite-500 uppercase tracking-widest border border-graphite-900/10 bg-surface px-2 py-0.5">HR</span>
</div>

<div className="flex flex-col items-center justify-center opacity-0 transform translate-y-4 transition-all duration-500 logo-item group cursor-pointer" style={{transitionDelay: '350ms'}}>
<div className="w-20 h-20 bg-surface border border-graphite-900/10 shadow-sm group-hover:shadow-[0_8px_24px_rgba(14,15,17,0.06)] group-hover:border-amber/40 transition-all duration-300 flex items-center justify-center mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="font-display font-semibold text-2xl tracking-tighter text-graphite-900 group-hover:scale-105 transition-transform duration-300 relative z-10">OK</span>
</div>
<span className="font-display font-medium text-sm text-graphite-900 mb-1">Okta</span>
<span className="font-mono text-xs text-graphite-500 uppercase tracking-widest border border-graphite-900/10 bg-surface px-2 py-0.5">SSO</span>
</div>
</div>
</div>
</section>

<section className="py-section px-container relative bg-surface observe-section" id="pricing">
<div className="scan-line absolute top-0 left-0 w-full h-[1px] bg-graphite-900/10"></div>
<div className="max-w-[clamp(70rem,92vw,96rem)] mx-auto">
<div className="text-center mb-16 reveal-up">
<span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-amber inline-block mb-4">[06] PRICING</span>
<h2 className="font-display font-light text-h2 leading-[1.1] tracking-tight text-graphite-900 mb-4 mx-auto">
                    Pricing by headcount. Not by seat.
                </h2>
<p className="font-mono text-xs text-graphite-500">All plans: unlimited receipts, OCR extraction, audit trail. No per-user fees.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-graphite-900/10 reveal-up">

<div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-graphite-900/10 bg-canvas/30 hover:bg-canvas transition-colors flex flex-col">
<span className="font-mono text-xs font-bold uppercase tracking-widest text-graphite-900 mb-2 block">Starter</span>
<div className="mb-6">
<span className="font-mono text-3xl font-medium text-graphite-900">$299</span>
<span className="font-mono text-xs text-graphite-500 uppercase">/mo</span>
</div>
<p className="font-body text-sm text-graphite-500 mb-8 flex-grow">
                        Up to <span className="font-mono">50</span> employees. Unlimited expense submissions. Basic approvals. <span className="font-mono">5</span> integrations.
                    </p>
<a className="relative inline-flex items-center justify-center w-full py-3 font-mono text-xs font-medium uppercase tracking-[0.1em] text-graphite-900 bg-surface border border-graphite-900/10 shadow-[0_2px_10px_rgba(14,15,17,0.02)] rounded-none hover:shadow-[0_8px_24px_rgba(14,15,17,0.06)] hover:border-graphite-900/20 transition-all duration-300 hover:-translate-y-0.5 group" href="#">
                        Start Free Trial
                    </a>
</div>

<div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-graphite-900/10 bg-surface relative shadow-[0_0_40px_rgba(14,15,17,0.05)] z-10 -mt-2 -mb-2 flex flex-col" style={{borderTop: '2px solid #E8A020'}}>
<span className="font-mono text-xs font-bold uppercase tracking-widest text-amber mb-2 block">Growth</span>
<div className="mb-6">
<span className="font-mono text-3xl font-medium text-graphite-900">$799</span>
<span className="font-mono text-xs text-graphite-500 uppercase">/mo</span>
</div>
<p className="font-body text-sm text-graphite-500 mb-8 flex-grow">
                        Up to <span className="font-mono">250</span> employees. Advanced approval flows. Full integration suite. Custom policies. Priority support.
                    </p>
<a className="relative inline-flex items-center justify-center w-full py-4 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-surface bg-gradient-to-b from-graphite-800 to-graphite-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_4px_20px_rgba(14,15,17,0.2)] rounded-none group hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_32px_rgba(14,15,17,0.3)] transition-all duration-300 hover:-translate-y-0.5 overflow-hidden" href="#demo">
<span className="relative z-10 flex items-center gap-2">Request Demo <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="14"></iconify-icon></span>
<div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-swiss"></div>
</a>
</div>

<div className="p-8 md:p-10 bg-canvas/30 hover:bg-canvas transition-colors flex flex-col">
<span className="font-mono text-xs font-bold uppercase tracking-widest text-graphite-900 mb-2 block">Enterprise</span>
<div className="mb-6">
<span className="font-mono text-3xl font-medium text-graphite-900">Custom</span>
</div>
<p className="font-body text-sm text-graphite-500 mb-8 flex-grow">
<span className="font-mono">500+</span> employees. Dedicated CSM. Custom integrations. SOC 2 Type II. SLA guarantee.
                    </p>
<a className="relative inline-flex items-center justify-center w-full py-3 font-mono text-xs font-medium uppercase tracking-[0.1em] text-surface bg-graphite-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] rounded-none hover:bg-graphite-800 transition-all duration-300 hover:-translate-y-0.5 group" href="#">
                        Talk to Sales
                    </a>
</div>
</div>
</div>
</section>

<section className="py-section px-container relative bg-canvas observe-section flex justify-center" id="demo">
<div className="max-w-2xl w-full relative border border-graphite-900 p-8 md:p-12 reveal-up bg-surface">

<div className="absolute top-0 left-0 w-full h-[2px] bg-amber origin-left scale-x-0 transition-transform duration-1000 delay-300 ease-swiss" id="cta-scan"></div>
<div className="text-center mb-10">
<h2 className="font-display font-light text-3xl md:text-4xl tracking-tight text-graphite-900 mb-4">
                    See LEDGR on your numbers.
                </h2>
<p className="font-body text-graphite-500 text-sm leading-relaxed max-w-md mx-auto">
<span className="font-mono">30</span>-minute demo with a LEDGR implementation specialist. We'll walk through your current close process and show you exactly where time is lost.
                </p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<input className="w-full bg-canvas border border-graphite-900/20 px-4 py-3 font-mono text-xs text-graphite-900 placeholder:text-graphite-500/50 focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber rounded-none transition-colors" placeholder="YOUR NAME" type="text"/>
<input className="w-full bg-canvas border border-graphite-900/20 px-4 py-3 font-mono text-xs text-graphite-900 placeholder:text-graphite-500/50 focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber rounded-none transition-colors" placeholder="WORK EMAIL" type="email"/>
</div>
<div className="relative">
<select className="w-full bg-canvas border border-graphite-900/20 px-4 py-3 font-mono text-xs text-graphite-900 focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber rounded-none transition-colors appearance-none cursor-pointer">
<option disabled="" selected="" value="">COMPANY SIZE</option>
<option value="10-50">10–50 EMPLOYEES</option>
<option value="51-200">51–200 EMPLOYEES</option>
<option value="201-500">201–500 EMPLOYEES</option>
<option value="500+">500+ EMPLOYEES</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-graphite-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<button className="relative w-full inline-flex items-center justify-center py-4 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-graphite-900 bg-gradient-to-b from-amber to-amberDark shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_4px_20px_rgba(232,160,32,0.2)] rounded-none group hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_8px_32px_rgba(232,160,32,0.4)] transition-all duration-300 hover:-translate-y-0.5 overflow-hidden mt-4" type="submit">
<span className="relative z-10 flex items-center gap-2">Book My Demo <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="14"></iconify-icon></span>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-swiss"></div>
</button>
<p className="font-mono text-xs text-graphite-500 text-center uppercase tracking-widest mt-4">
                    No sales pitch. No obligation. Response within <span className="text-graphite-900 font-semibold">4</span> business hours.
                </p>
</form>
</div>
</section>

<footer className="bg-graphite-900 text-surface pt-20 pb-10 px-container relative overflow-hidden border-t border-surface/10">

<div className="absolute top-0 left-1/2 -translate-x-1/2 text-[20vw] font-display font-light text-surface opacity-[0.02] pointer-events-none select-none leading-none mt-10 tracking-tighter">
            LEDGR
        </div>
<div className="max-w-[clamp(70rem,92vw,96rem)] mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

<div className="flex flex-col gap-3">
<span className="font-mono text-xs text-surface/50 uppercase tracking-widest mb-2 block">Platform</span>
<a className="font-mono text-xs text-surface hover:text-amber transition-colors w-fit" href="#">Product</a>
<a className="font-mono text-xs text-surface hover:text-amber transition-colors w-fit" href="#">Integrations</a>
<a className="font-mono text-xs text-surface hover:text-amber transition-colors w-fit" href="#">Pricing</a>
<a className="font-mono text-xs text-surface hover:text-amber transition-colors w-fit" href="#">Changelog</a>
</div>

<div className="flex flex-col gap-3">
<span className="font-mono text-xs text-surface/50 uppercase tracking-widest mb-2 block">Company</span>
<a className="font-mono text-xs text-surface hover:text-amber transition-colors w-fit" href="#">Customers</a>
<a className="font-mono text-xs text-surface hover:text-amber transition-colors w-fit" href="#">Blog</a>
<a className="font-mono text-xs text-surface hover:text-amber transition-colors w-fit" href="#">Careers</a>
</div>

<div className="flex flex-col gap-3">
<span className="font-mono text-xs text-surface/50 uppercase tracking-widest mb-2 block">Legal</span>
<a className="font-mono text-xs text-surface hover:text-amber transition-colors w-fit" href="#">Privacy</a>
<a className="font-mono text-xs text-surface hover:text-amber transition-colors w-fit" href="#">Terms</a>
<a className="font-mono text-xs text-surface hover:text-amber transition-colors w-fit" href="#">DPA</a>
<a className="font-mono text-xs text-surface hover:text-amber transition-colors w-fit" href="#">Security</a>
</div>

<div className="flex flex-col gap-4">
<span className="font-mono text-xs text-surface/50 uppercase tracking-widest block">The Close</span>
<p className="font-body text-xs text-surface/70 leading-relaxed">
                        Monthly benchmarks on finance team efficiency and expense management.
                    </p>
<div className="flex mt-2">
<input className="w-full bg-transparent border border-surface/20 border-r-0 px-3 py-2 font-mono text-xs text-surface placeholder:text-surface/30 focus:outline-none focus:border-amber rounded-none transition-colors" placeholder="WORK EMAIL" type="email"/>
<button className="bg-gradient-to-b from-amber to-amberDark text-graphite-900 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider hover:brightness-110 transition-all border border-amberDark">
                            Subscribe
                        </button>
</div>
<div className="flex gap-4 mt-4">
<a className="text-surface/50 hover:text-amber transition-colors" href="#"><iconify-icon icon="solar:twitter-linear" width="18"></iconify-icon></a>
<a className="text-surface/50 hover:text-amber transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" width="18"></iconify-icon></a>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row justify-between items-center border-t border-surface/10 pt-8 gap-4">
<span className="font-mono text-xs text-surface/50 uppercase tracking-widest">
                    LEDGR © 2026. SOC 2 Type II Certified.
                </span>
<a className="font-mono text-xs text-amber hover:text-surface transition-colors uppercase tracking-widest" href="#demo">
                    Book a demo →
                </a>
</div>
</div>
</footer>



    </>
  );
}
