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
theme: {
extend: {
colors: {
space: {
1: '#070810',
2: '#0b0d18',
3: '#080c14',
4: '#0c0e1a',
5: '#080a12',
card: '#111420',
panel: '#0d1020',
alt: '#131624'
},
accent: {
DEFAULT: '#C4B5FD',
dark: '#3b2d8a',
glow: 'rgba(196,181,253,0.35)'
},
text: {
primary: '#e8ecf5',
secondary: '#5c6480',
muted: '#3d4260'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
letterSpacing: {
tightest: '-0.03em',
tighter: '-0.025em',
wide: '0.08em',
wider: '0.15em',
widest: '0.18em',
},
animation: {
'spin-slow': 'spin 22s linear infinite',
'marquee': 'marquee 45s linear infinite',
'pulse-slow': 'pulse-opacity 1.4s ease-in-out infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
'pulse-opacity': {
'0%, 100%': { opacity: 1 },
'50%': { opacity: 0.4 },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // Mobile Menu
            const mobileBtn = document.getElementById('mobile-menu-btn');
            const mobileCloseBtn = document.getElementById('mobile-close-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');

            mobileBtn.addEventListener('click', () => {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('flex');
                setTimeout(() => {
                    mobileLinks.forEach((link, idx) => {
                        setTimeout(() => {
                            link.style.opacity = '1';
                            link.style.transform = 'translateX(0)';
                        }, idx * 70);
                    });
                }, 50);
            });

            const closeMenu = () => {
                mobileLinks.forEach(link => {
                    link.style.opacity = '0';
                    link.style.transform = 'translateX(-12px)';
                });
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('flex');
                }, 300);
            };

            mobileCloseBtn.addEventListener('click', closeMenu);
            mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

            // Hero Canvas Simulation (Aurora + Grid)
            const canvas = document.getElementById('hero-canvas');
            const ctx = canvas.getContext('2d', { alpha: false });
            let width, height;

            const resize = () => {
                width = window.innerWidth;
                height = window.innerHeight;
                canvas.width = width * Math.min(window.devicePixelRatio, 2);
                canvas.height = height * Math.min(window.devicePixelRatio, 2);
                ctx.scale(Math.min(window.devicePixelRatio, 2), Math.min(window.devicePixelRatio, 2));
            };
            window.addEventListener('resize', resize);
            resize();

            // Aurora Params
            let time = 0;
            const colors = [
                { r: 196, g: 181, b: 253, a: 0.15 }, // Accent
                { r: 59, g: 45, b: 138, a: 0.1 },   // Deep blue
            ];

            // Grid Params
            const cellSize = 48;
            let cols, rows;
            let grid = [];
            let mouseX = -1000, mouseY = -1000;

            const initGrid = () => {
                cols = Math.ceil(width / cellSize);
                rows = Math.ceil(height / cellSize);
                grid = Array.from({ length: cols * rows }, () => ({
                    active: 0, 
                    activationTime: 0
                }));
            };
            initGrid();
            window.addEventListener('resize', initGrid);

            canvas.addEventListener('mousemove', (e) => {
                const rect = canvas.getBoundingClientRect();
                mouseX = e.clientX - rect.left;
                mouseY = e.clientY - rect.top;
            });
            canvas.addEventListener('mouseleave', () => { mouseX = -1000; mouseY = -1000; });

            const draw = () => {
                time += 1;
                ctx.fillStyle = '#070810';
                ctx.fillRect(0, 0, width, height);

                // Draw Aurora
                ctx.globalCompositeOperation = 'screen';
                for (let i = 0; i < 5; i++) {
                    ctx.beginPath();
                    const yOffset = height * 0.3 + (i * 60);
                    const phase = i * 1.2;
                    const dir = i % 2 === 0 ? 1 : -1;
                    
                    for (let x = 0; x <= width; x += 20) {
                        const y = yOffset + Math.sin(x * 0.0012 + (time * 0.01 * dir) + phase) * 60;
                        if (x === 0) ctx.moveTo(x, y);
                        else ctx.lineTo(x, y);
                    }
                    ctx.lineTo(width, height);
                    ctx.lineTo(0, height);
                    
                    const gradient = ctx.createLinearGradient(0, yOffset - 100, 0, height);
                    const c = colors[i % colors.length];
                    gradient.addColorStop(0, `rgba(${c.r},${c.g},${c.b},0)`);
                    gradient.addColorStop(0.2, `rgba(${c.r},${c.g},${c.b},${c.a})`);
                    gradient.addColorStop(1, 'rgba(7,8,16,0)');
                    
                    ctx.fillStyle = gradient;
                    ctx.fill();
                }

                // Draw Grid
                ctx.globalCompositeOperation = 'source-over';
                ctx.lineWidth = 1;

                const now = Date.now();
                
                // Random Activation
                if (Math.random() < 0.1) {
                    const rIdx = Math.floor(Math.random() * grid.length);
                    grid[rIdx].active = 1;
                    grid[rIdx].activationTime = now;
                    // Propagate
                    const c = rIdx % cols;
                    const r = Math.floor(rIdx / cols);
                    const neighbors = [
                        [c-1,r], [c+1,r], [c,r-1], [c,r+1]
                    ];
                    neighbors.forEach(([nx, ny]) => {
                        if (nx >=0 && nx < cols && ny >=0 && ny < rows && Math.random() < 0.35) {
                            grid[ny * cols + nx].active = 0.5;
                            grid[ny * cols + nx].activationTime = now;
                        }
                    });
                }

                // Sweep logic simplified: occasional row highlight
                if (time % 600 === 0) {
                    const rRow = Math.floor(Math.random() * rows);
                    for(let c=0; c<cols; c++) {
                        grid[rRow * cols + c].active = 0.8;
                        grid[rRow * cols + c].activationTime = now;
                    }
                }

                for (let r = 0; r < rows; r++) {
                    for (let c = 0; c < cols; c++) {
                        const idx = r * cols + c;
                        const cell = grid[idx];
                        const x = c * cellSize;
                        const y = r * cellSize;
                        
                        let fillOp = 0;
                        let strokeOp = 0.035; // Base border `rgba(196,181,253,0.035)`

                        // Decay
                        if (cell.active > 0) {
                            const age = now - cell.activationTime;
                            if (age > 1400) { cell.active = 0; }
                            else {
                                const decay = 1 - (age / 1400);
                                fillOp = 0.09 * cell.active * decay;
                                strokeOp = 0.035 + (0.145 * cell.active * Math.pow(decay, 2));
                            }
                        }

                        // Mouse pressure
                        const dx = (x + cellSize/2) - mouseX;
                        const dy = (y + cellSize/2) - mouseY;
                        const dist = Math.sqrt(dx*dx + dy*dy);
                        if (dist < 120) {
                            const factor = 1 - (dist / 120);
                            fillOp = Math.max(fillOp, 0.03 * factor);
                            strokeOp = Math.max(strokeOp, 0.035 + (0.06 * factor));
                        }

                        if (fillOp > 0) {
                            ctx.fillStyle = `rgba(196,181,253,${fillOp})`;
                            ctx.fillRect(x, y, cellSize, cellSize);
                        }
                        
                        ctx.strokeStyle = `rgba(196,181,253,${strokeOp})`;
                        ctx.strokeRect(x, y, cellSize, cellSize);
                    }
                }

                if (!document.hidden) requestAnimationFrame(draw);
            };
            draw();
            document.addEventListener('visibilitychange', () => { if(!document.hidden) draw(); });

            // Number Counters
            const counters = document.querySelectorAll('.counter');
            const observerOptions = { threshold: 0.5 };
            const counterObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        const target = parseFloat(el.getAttribute('data-target'));
                        const suffix = el.getAttribute('data-suffix') || '';
                        const format = el.getAttribute('data-format');
                        const isFloat = target % 1 !== 0;
                        const duration = 1400; // ms
                        let start = null;
                        
                        const step = (timestamp) => {
                            if (!start) start = timestamp;
                            const progress = Math.min((timestamp - start) / duration, 1);
                            // Ease out expo
                            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                            let current = easeProgress * target;
                            
                            if (isFloat) current = current.toFixed(1);
                            else current = Math.floor(current);

                            if (format === 'comma') current = current.toLocaleString();

                            el.innerText = current + suffix;
                            if (progress < 1) window.requestAnimationFrame(step);
                            else el.innerText = (isFloat ? target.toFixed(1) : (format === 'comma' ? target.toLocaleString() : target)) + suffix;
                        };
                        window.requestAnimationFrame(step);
                        counterObserver.unobserve(el);
                    }
                });
            }, observerOptions);
            counters.forEach(c => counterObserver.observe(c));

            // Threat Terminal
            const threatList = document.getElementById('threat-list');
            const threatTypes = ['Signal mesh corruption', 'Relay desync', 'Unauthorized compute requisition', 'Energy routing bottleneck', 'Temporal divergence detected'];
            const sectors = ['Tau-7', 'Vega Prime', 'Cygnus-Alpha', 'Eos Hub', 'Kappa-Deep'];
            const severities = [{color: 'bg-[#EF4444]', text: 'ACTIVE'}, {color: 'bg-[#F59E0B]', text: 'MONITORING'}, {color: 'bg-[#10B981]', text: 'RESOLVED'}];
            
            let threatCount = 847;
            const addThreat = () => {
                const type = threatTypes[Math.floor(Math.random() * threatTypes.length)];
                const sector = sectors[Math.floor(Math.random() * sectors.length)];
                const sev = severities[Math.floor(Math.random() * severities.length)];
                threatCount++;
                
                const div = document.createElement('div');
                div.className = 'flex items-center gap-3 py-2 border-b border-white/5 opacity-0 -translate-y-[20px] transition-all duration-400 group/threat hover:bg-accent/5 rounded px-2 cursor-default';
                div.innerHTML = `
                    <div class="w-1.5 h-1.5 rounded-full ${sev.color}"></div>
                    <div class="font-mono text-[11px] text-text-primary flex-1 truncate">TH-0${threatCount}: ${type} — Sector ${sector}</div>
                    <div class="font-mono text-[9px] ${sev.color.replace('bg-', 'text-')}">${sev.text}</div>
                    <div class="font-mono text-[9px] text-text-muted text-right w-12">${Math.floor(Math.random()*10)}s</div>
                `;
                
                threatList.prepend(div);
                
                // Animate in
                requestAnimationFrame(() => {
                    div.classList.remove('opacity-0', '-translate-y-[20px]');
                    div.classList.add('opacity-100', 'translate-y-0');
                });

                // Keep only 6
                if (threatList.children.length > 6) {
                    const last = threatList.lastElementChild;
                    last.style.opacity = '0';
                    setTimeout(() => last.remove(), 400);
                }
            };
            
            // Init with 6
            for(let i=0; i<6; i++) addThreat();
            setInterval(addThreat, 4000);

            // Timeline Animation
            const timelineObserver = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    const steps = document.querySelectorAll('.timeline-step');
                    const lines = document.querySelectorAll('.fill-line');
                    
                    steps[0].classList.add('is-active');
                    steps[0].classList.remove('opacity-50');

                    lines.forEach((line, idx) => {
                        setTimeout(() => {
                            line.style.width = '100%';
                            setTimeout(() => {
                                if(steps[idx+1]) {
                                    steps[idx+1].classList.add('is-active');
                                    steps[idx+1].classList.remove('opacity-50');
                                }
                            }, 500); // Wait for line to mostly draw
                        }, idx * 1100 + 500); // Stagger + delay
                    });
                    timelineObserver.disconnect();
                }
            }, { threshold: 0.5 });
            timelineObserver.observe(document.getElementById('timeline-container'));

            // Magnetic Cards
            const magCards = document.querySelectorAll('.magnetic-card');
            magCards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width/2;
                    const y = e.clientY - rect.top - rect.height/2;
                    // Max move 8px
                    const mx = (x / (rect.width/2)) * 8;
                    const my = (y / (rect.height/2)) * 8;
                    card.style.transform = `translate(${mx}px, ${my}px)`;
                });
                card.addEventListener('mouseleave', () => {
                    card.style.transform = `translate(0px, 0px)`;
                });
            });

            // Tilt Cards (Pricing)
            const tiltCards = document.querySelectorAll('.tilt-card');
            tiltCards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    // Max tilt 6deg
                    const rotateX = ((y - centerY) / centerY) * -6;
                    const rotateY = ((x - centerX) / centerX) * 6;
                    
                    // Maintain base scale if it's the highlighted card
                    const baseScale = card.classList.contains('lg:scale-[1.03]') ? 'scale(1.03)' : '';
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${baseScale}`;
                });
                card.addEventListener('mouseleave', () => {
                    const baseScale = card.classList.contains('lg:scale-[1.03]') ? 'scale(1.03)' : '';
                    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) ${baseScale}`;
                });
            });

            // FAQ Accordion Generation
            const faqs = [
                { q: "Can Koven substrate survive a Type II civilization collapse?", a: "The mesh topology is N+400 redundant. It operates independently of any specific stellar host. In the event of localized energy depletion (e.g., Dyson sphere failure), routing algorithms instantaneously divert compute and signal loads to adjacent healthy sectors with zero data loss." },
                { q: "What happens if a sector exits the Koven mesh?", a: "Substrate presence gracefully degrades. Handshake protocols are severed, localized compute state is encrypted and migrated to adjacent sovereign nodes, and the sector is physically disconnected from the relay mesh. The macro-mesh heals around the gap." },
                { q: "Is the compute layer quantum-resistant?", a: "Yes. Post-quantum cryptographic standards (Shor-resistant) have been native to the substrate since EPOCH 2.0. Key exchange happens via entangled node pairs
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
      

<svg className="noise-grain"><filter id="noiseFilter"><feturbulence basefrequency="0.65" numoctaves="3" stitchtiles="stitch" type="fractalNoise"></feturbulence></filter><rect filter="url(#noiseFilter)" height="100%" width="100%"></rect></svg>

<nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-space-1/85 border-b border-white/5 h-[4.25rem] transition-all duration-300">
<div className="max-w-[clamp(72rem,90vw,96rem)] mx-auto px-8 h-full flex items-center justify-between">
<a className="flex items-center gap-3 logo-container group" href="#">
<svg className="w-7 h-7 logo-group" viewbox="0 0 32 32">
<path className="logo-arc-primary" d="M 3 16 A 13 13 0 1 1 16 29 C 14 29 6 20 3 16 Z" fill="#e8ecf5"></path>
<circle cx="3" cy="16" fill="#e8ecf5" r="2"></circle>
<path className="logo-arc-tertiary" d="M 16 23 A 7 7 0 0 0 11.5 9.5" fill="none" stroke="#e8ecf5" stroke-opacity="0.35" strokeWidth="0.6"></path>
<path className="logo-arc-tertiary" d="M 16 26 A 10 10 0 0 0 8.5 7.5" fill="none" stroke="#e8ecf5" stroke-opacity="0.35" strokeWidth="0.6"></path>
<path className="logo-arc-tertiary" d="M 16 29.5 A 13.5 13.5 0 0 0 5 4.5" fill="none" stroke="#e8ecf5" stroke-opacity="0.35" strokeWidth="0.6"></path>
</svg>
<span className="font-display text-sm font-semibold tracking-wide text-text-primary">KOVEN</span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-normal text-text-secondary">
<a className="relative nav-link-hover pb-1 hover:text-text-primary transition-colors" href="#systems">Systems</a>
<a className="relative nav-link-hover pb-1 hover:text-text-primary transition-colors" href="#architecture">Architecture</a>
<a className="relative nav-link-hover pb-1 hover:text-text-primary transition-colors" href="#operations">Operations</a>
<a className="relative nav-link-hover pb-1 hover:text-text-primary transition-colors" href="#status">Status</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="text-xs text-text-primary/80 hover:text-text-primary border border-white/10 rounded-[3px] h-9 px-4 flex items-center transition-colors" href="#docs">Docs</a>
<a className="clip-angled bg-accent text-space-1 font-display font-semibold text-xs h-9 px-5 flex items-center hover:brightness-110 transition-all shadow-[0_0_15px_rgba(196,181,253,0)] hover:shadow-[0_0_15px_rgba(196,181,253,0.3)]" href="#access">Request Access</a>
</div>
<button className="md:hidden text-text-primary" id="mobile-menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-space-1 z-[100] hidden flex-col justify-center items-center gap-8" id="mobile-menu">
<button className="absolute top-6 right-8 text-text-primary" id="mobile-close-btn">
<iconify-icon height="32" icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
<a className="mobile-link text-2xl font-sans text-text-secondary hover:text-accent opacity-0 translate-x-[-12px] transition-all" href="#systems">Systems</a>
<a className="mobile-link text-2xl font-sans text-text-secondary hover:text-accent opacity-0 translate-x-[-12px] transition-all" href="#architecture">Architecture</a>
<a className="mobile-link text-2xl font-sans text-text-secondary hover:text-accent opacity-0 translate-x-[-12px] transition-all" href="#operations">Operations</a>
<a className="mobile-link text-2xl font-display font-semibold text-accent opacity-0 translate-x-[-12px] transition-all mt-4" href="#access">Request Access</a>
</div>

<section className="relative min-h-[100dvh] pt-20 overflow-hidden flex items-center">

<canvas className="absolute inset-0 z-0 w-full h-full" id="hero-canvas"></canvas>
<div className="bg-grid opacity-50"></div>

<div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_120%_60%_at_30%_20%,rgba(59,45,138,0.4)_0%,rgba(7,8,16,0)_60%),radial-gradient(ellipse_80%_40%_at_70%_80%,rgba(196,181,253,0.08)_0%,transparent_50%)] md:hidden"></div>
<div className="relative z-10 max-w-[clamp(72rem,90vw,96rem)] mx-auto px-8 w-full grid grid-cols-1 md:grid-cols-[54fr_46fr] gap-12 md:gap-0 items-start">

<div className="max-w-[40rem] pt-[8vh]">
<div className="inline-flex items-center gap-2 border border-accent/30 rounded-full px-3 py-1 mb-6 text-accent/70 bg-accent/5 backdrop-blur-sm">
<div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-slow"></div>
<span className="font-mono text-xs uppercase tracking-widest">/ EPOCH IV SYSTEMS</span>
</div>
<h1 className="font-display text-[clamp(3.5rem,5.8vw,5.5rem)] font-semibold tracking-tighter leading-[1.05] mb-6 text-text-primary h1-animate">
                    Infrastructure that outlasts <span className="text-accent text-glow relative inline-block">civilizations</span>
</h1>
<p className="text-base text-text-secondary max-w-[52ch] leading-relaxed mb-10 font-sans">
                    Koven builds the substrate layer — compute, energy routing, and signal mesh — for post-planetary operations.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-8">
<a className="btn-primary-hover relative overflow-hidden clip-angled bg-accent text-space-1 font-display font-semibold text-sm h-11 flex items-center pl-5 pr-7 cursor-pointer block transform transition-transform" href="#request" id="hero-cta">
<span className="hover-text-top block">Request Access</span>
<span className="hover-text-bottom text-space-1">Request Access</span>
</a>
<a className="btn-secondary-hover relative text-text-primary/80 hover:text-text-primary text-sm border border-accent/25 hover:border-accent/60 rounded-[3px] h-11 px-5 flex items-center transition-colors bg-transparent backdrop-blur-sm" href="#architecture">
                        View Architecture
                    </a>
</div>
<div className="flex flex-wrap items-center gap-3 text-xs font-mono text-text-secondary mb-6 opacity-80">
<span>14 active star systems</span>
<span className="text-text-muted">·</span>
<span>∞ uptime SLA</span>
<span className="text-text-muted">·</span>
<span>0.3ms cross-sector latency</span>
</div>
<div className="font-mono text-[10px] text-text-muted flex items-center gap-2 bg-space-panel/50 border border-white/5 inline-flex px-3 py-1.5 rounded-[3px] backdrop-blur-md">
                    SYS: KOVEN-PRIME / SECTOR 7-ECHO / EPOCH 4.2.1 / SYNC: LIVE <span className="text-accent ml-1 animate-pulse-slow">●</span>
</div>
</div>

<div className="relative w-full max-w-[34rem] justify-self-center md:justify-self-end md:rotate-[-1.5deg] md:sticky md:top-24 z-20 transition-transform duration-700 hover:rotate-0">
<div className="bg-space-panel border border-accent/10 rounded-lg shadow-[0_48px_120px_rgba(0,0,0,0.7)] overflow-hidden backdrop-blur-md flex flex-col h-[20rem] md:h-auto">

<div className="h-12 border-b border-white/5 flex items-center justify-between px-4 bg-space-2/50">
<div className="flex items-center gap-2">
<svg className="text-accent" fill="none" height="16" viewbox="0 0 24 24" width="16"><path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"></path><path d="M2 17L12 22L22 17" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-mono text-xs font-medium text-text-primary">KOVEN OS v4.2</span>
</div>
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-accent/50"></div>
</div>
</div>

<div className="grid grid-cols-2 border-b border-white/5 bg-space-card/50">
<div className="p-4 border-r border-white/5">
<div className="text-[10px] font-mono text-text-secondary mb-1">ACTIVE SECTORS</div>
<div className="font-display text-xl font-semibold text-text-primary">147 <span className="text-xs text-[#10B981] ml-2 font-mono align-middle">▲ +3</span></div>
</div>
<div className="p-4">
<div className="text-[10px] font-mono text-text-secondary mb-1">ENERGY THROUGHPUT</div>
<div className="font-display text-xl font-semibold text-text-primary">8.4 ZW</div>
</div>
</div>

<div className="relative flex-1 bg-[#05060c] overflow-hidden min-h-[12rem]">
<div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(196,181,253,0.1)_0,transparent_70%)]"></div>

<svg className="absolute inset-0 w-full h-full" viewbox="0 0 400 200">
<path className="animate-[dash_20s_linear_infinite]" d="M50 150 Q 150 50, 250 100 T 380 80" fill="none" stroke="rgba(196,181,253,0.2)" stroke-dasharray="4 4" strokeWidth="1"></path>
<circle cx="50" cy="150" fill="#C4B5FD" r="3"></circle>
<circle className="animate-pulse" cx="250" cy="100" fill="#C4B5FD" r="4"></circle>
<circle cx="380" cy="80" fill="#5c6480" r="2"></circle>
</svg>
</div>
</div>
</div>
</div>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
<span className="font-mono text-[10px] text-text-muted tracking-widest">SCROLL</span>
<iconify-icon className="text-text-muted animate-bounce" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</section>

<div className="bg-space-2 py-6 border-y border-white/5 overflow-hidden">
<div className="mask-edges max-w-[clamp(72rem,90vw,96rem)] mx-auto relative flex overflow-hidden">
<div className="flex items-center gap-16 min-w-max animate-marquee hover:[animation-play-state:paused] opacity-30 filter brightness-0 invert">

<div className="flex gap-16 items-center">
<span className="font-display font-semibold text-xl tracking-tight">SPACEX</span>
<span className="font-display font-semibold text-xl tracking-tight">LOCKHEED MARTIN</span>
<span className="font-display font-semibold text-xl tracking-tight">ESA</span>
<span className="font-display font-semibold text-xl tracking-tight">JAXA</span>
<span className="font-display font-semibold text-xl tracking-tight">BOEING DEFENSE</span>
<span className="font-display font-semibold text-xl tracking-tight">NORTHROP GRUMMAN</span>
<span className="font-display font-semibold text-xl tracking-tight">RAYTHEON</span>
<span className="font-display font-semibold text-xl tracking-tight">THALES</span>
<span className="font-display font-semibold text-xl tracking-tight">LEONARDO</span>
<span className="font-display font-semibold text-xl tracking-tight">AIRBUS DEFENCE</span>
<span className="font-display font-semibold text-xl tracking-tight">L3HARRIS</span>
<span className="font-display font-semibold text-xl tracking-tight">BALL AEROSPACE</span>
</div>
<div className="flex gap-16 items-center">
<span className="font-display font-semibold text-xl tracking-tight">SPACEX</span>
<span className="font-display font-semibold text-xl tracking-tight">LOCKHEED MARTIN</span>
<span className="font-display font-semibold text-xl tracking-tight">ESA</span>
<span className="font-display font-semibold text-xl tracking-tight">JAXA</span>
<span className="font-display font-semibold text-xl tracking-tight">BOEING DEFENSE</span>
<span className="font-display font-semibold text-xl tracking-tight">NORTHROP GRUMMAN</span>
<span className="font-display font-semibold text-xl tracking-tight">RAYTHEON</span>
<span className="font-display font-semibold text-xl tracking-tight">THALES</span>
<span className="font-display font-semibold text-xl tracking-tight">LEONARDO</span>
<span className="font-display font-semibold text-xl tracking-tight">AIRBUS DEFENCE</span>
<span className="font-display font-semibold text-xl tracking-tight">L3HARRIS</span>
<span className="font-display font-semibold text-xl tracking-tight">BALL AEROSPACE</span>
</div>
</div>
</div>
</div>

<section className="bg-space-2 py-32 border-b border-white/5" id="systems">
<div className="max-w-[clamp(72rem,90vw,96rem)] mx-auto px-8">
<div className="mb-16">
<div className="flex items-center gap-3 mb-6">
<div className="w-[3px] h-[3px] bg-accent"></div>
<span className="font-mono text-xs uppercase tracking-wider text-text-muted">/ THE COORDINATION PROBLEM</span>
</div>
<h2 className="font-display text-[clamp(2.375rem,3.8vw,3.75rem)] font-semibold tracking-tighter text-text-primary max-w-3xl leading-[1.1]">
                    Every civilization collapses at the infrastructure layer
                </h2>
<p className="text-base text-text-secondary mt-6 max-w-2xl">
                    Not for lack of vision. For lack of substrate. Koven eliminates the 47 coordination failures that end expansion.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-space-1 p-[2px] border border-white/5 rounded-xl overflow-hidden">

<div className="glitch-card bg-space-card p-8 hover:bg-[#150f0f] hover:border-red-500/30 border border-transparent transition-all group">
<h3 className="font-display text-base font-semibold text-text-primary mb-3 transition-transform relative z-10">Energy Routing Collapse</h3>
<p className="text-sm text-text-secondary mb-8 min-h-[4rem]">Asynchronous demand spikes overwhelm local grids before macro-routing can compensate across sectors.</p>
<div className="flex justify-between items-end border-t border-white/5 pt-4">
<span className="font-mono text-[10px] text-[#EF4444] bg-[#EF4444]/10 px-2 py-1 rounded">CRITICAL</span>
<span className="font-mono text-xs text-text-muted">PROB: 84.2%</span>
</div>
</div>

<div className="glitch-card bg-space-card p-8 hover:bg-[#150f0f] hover:border-red-500/30 border border-transparent transition-all group">
<h3 className="font-display text-base font-semibold text-text-primary mb-3 transition-transform relative z-10">Signal Mesh Fragmentation</h3>
<p className="text-sm text-text-secondary mb-8 min-h-[4rem]">Relay nodes drift out of temporal sync, causing silent data corruption that propagates backwards.</p>
<div className="flex justify-between items-end border-t border-white/5 pt-4">
<span className="font-mono text-[10px] text-[#F59E0B] bg-[#F59E0B]/10 px-2 py-1 rounded">HIGH</span>
<span className="font-mono text-xs text-text-muted">PROB: 61.5%</span>
</div>
</div>

<div className="glitch-card bg-space-card p-8 hover:bg-[#150f0f] hover:border-red-500/30 border border-transparent transition-all group">
<h3 className="font-display text-base font-semibold text-text-primary mb-3 transition-transform relative z-10">Compute Sovereignty Loss</h3>
<p className="text-sm text-text-secondary mb-8 min-h-[4rem]">Distributed workloads are intercepted or delayed by hostile intermediary networks during transit.</p>
<div className="flex justify-between items-end border-t border-white/5 pt-4">
<span className="font-mono text-[10px] text-accent bg-accent/10 px-2 py-1 rounded">SYSTEMIC</span>
<span className="font-mono text-xs text-text-muted">PROB: 99.9%</span>
</div>
</div>

<div className="glitch-card bg-space-card p-8 hover:bg-[#150f0f] hover:border-red-500/30 border border-transparent transition-all group">
<h3 className="font-display text-base font-semibold text-text-primary mb-3 transition-transform relative z-10">Cross-Sector Latency Drift</h3>
<p className="text-sm text-text-secondary mb-8 min-h-[4rem]">Relativistic effects decimate high-frequency trading and live operational command structures.</p>
<div className="flex justify-between items-end border-t border-white/5 pt-4">
<span className="font-mono text-[10px] text-[#F59E0B] bg-[#F59E0B]/10 px-2 py-1 rounded">HIGH</span>
<span className="font-mono text-xs text-text-muted">PROB: 72.1%</span>
</div>
</div>

<div className="glitch-card bg-space-card p-8 hover:bg-[#150f0f] hover:border-red-500/30 border border-transparent transition-all group">
<h3 className="font-display text-base font-semibold text-text-primary mb-3 transition-transform relative z-10">Authority Chain Corruption</h3>
<p className="text-sm text-text-secondary mb-8 min-h-[4rem]">Consensus algorithms fail at multi-system scale, leading to network forks and stranded assets.</p>
<div className="flex justify-between items-end border-t border-white/5 pt-4">
<span className="font-mono text-[10px] text-[#EF4444] bg-[#EF4444]/10 px-2 py-1 rounded">CRITICAL</span>
<span className="font-mono text-xs text-text-muted">PROB: 45.8%</span>
</div>
</div>

<div className="glitch-card bg-space-card p-8 hover:bg-[#150f0f] hover:border-red-500/30 border border-transparent transition-all group">
<h3 className="font-display text-base font-semibold text-text-primary mb-3 transition-transform relative z-10">Substrate Layer Decay</h3>
<p className="text-sm text-text-secondary mb-8 min-h-[4rem]">Physical hardware deterioration outpaces maintenance deployments across light-year spans.</p>
<div className="flex justify-between items-end border-t border-white/5 pt-4">
<span className="font-mono text-[10px] text-accent bg-accent/10 px-2 py-1 rounded">SYSTEMIC</span>
<span className="font-mono text-xs text-text-muted">PROB: 100%</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-space-3 py-32 border-b border-white/5" id="architecture">
<div className="max-w-[clamp(72rem,90vw,96rem)] mx-auto px-8">
<div className="mb-16">
<div className="flex items-center gap-3 mb-6">
<div className="w-[3px] h-[3px] bg-accent"></div>
<span className="font-mono text-xs uppercase tracking-wider text-text-muted">/ SUBSTRATE ARCHITECTURE</span>
</div>
<h2 className="font-display text-[clamp(2.375rem,3.8vw,3.75rem)] font-semibold tracking-tighter text-text-primary max-w-4xl leading-[1.1]">
                    One continuous layer. Infinite civilizational surface area.
                </h2>
<p className="text-base text-text-secondary mt-6 max-w-2xl">
                    Three interlocked systems form Koven's substrate. Each is independently robust. Together, they are irreversible.
                </p>
</div>
<div className="flex flex-col border border-white/5 rounded-xl overflow-hidden shadow-2xl">

<div className="reveal-card relative flex flex-col md:flex-row min-h-[24rem] bg-space-card border-b border-white/5 group">
<div className="w-full md:w-[52%] relative bg-space-1 overflow-hidden border-r border-white/5">

<div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI2OSI+PHBhdGggZD0iTTAgMjBMMjAgMEM0MCAyMCA0MCAyMCA0MCAyMEw0MCA0OUwyMCA2OUwwIDQ5Wk0yMCA2OUwwIDQ5IiBmaWxsPSJub25lIiBzdHJva2U9IiNDNEI1RkQiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')] bg-repeat" style={{backgroundSize: '30px 52px'}}></div>
<div className="absolute inset-0 bg-gradient-to-r from-transparent to-space-1"></div>
</div>
<div className="w-full md:w-[48%] p-12 flex flex-col justify-center">
<h3 className="font-display text-2xl font-semibold mb-4">Energy Mesh</h3>
<p className="text-sm text-text-secondary leading-relaxed mb-8">Distributed power routing across 847 active relay stations. Zero single point of failure since EPOCH 3.1. Fluid dynamic redistribution handles planetary-scale demand spikes natively.</p>
<div className="flex gap-4 font-mono text-xs text-text-muted">
<span className="bg-white/5 px-2 py-1 rounded">847 relay stations</span>
<span className="bg-white/5 px-2 py-1 rounded text-[#10B981]">99.9997% uptime</span>
<span className="bg-white/5 px-2 py-1 rounded">0 SPOFs</span>
</div>
</div>

<div className="reveal-content absolute inset-0 bg-space-5 p-12 flex flex-col justify-end z-20 border-t border-accent/20 font-mono text-xs text-accent/80">
<div className="grid grid-cols-3 gap-8">
<div>TOPOLOGY: NON-EUCLIDEAN HEX<br/>ROUTING: QUANTUM ENTANGLED<br/>CAPACITY: 14.2 ZW/SEC</div>
<div>LATENCY_AVG: 0.12ms<br/>LOSS_RATE: &lt;0.00001%<br/>REDUNDANCY: N+400</div>
<div className="text-right">EPOCH 4.2 COMPLIANT<br/>STATUS: NOMINAL<br/>SYNC: CONTINUOUS</div>
</div>
</div>
</div>

<div className="reveal-card relative flex flex-col-reverse md:flex-row min-h-[24rem] bg-space-card border-b border-white/5 group">
<div className="w-full md:w-[48%] p-12 flex flex-col justify-center border-r border-white/5">
<h3 className="font-display text-2xl font-semibold mb-4">Signal Layer</h3>
<p className="text-sm text-text-secondary leading-relaxed mb-8">Sub-second signal propagation across 14 light-year span via quantum-relay mesh. Native encryption, no trust layers required. Data integrity mathematically guaranteed.</p>
<div className="flex gap-4 font-mono text-xs text-text-muted">
<span className="bg-white/5 px-2 py-1 rounded text-accent">0.3ms avg latency</span>
<span className="bg-white/5 px-2 py-1 rounded">14 LY span</span>
<span className="bg-white/5 px-2 py-1 rounded">256-bit native</span>
</div>
</div>
<div className="w-full md:w-[52%] relative bg-space-1 overflow-hidden flex items-center justify-center p-8">
<svg className="w-full h-full opacity-60" viewbox="0 0 400 200">
<path d="M50 100 Q 150 20, 350 100" fill="none" stroke="#5c6480" strokeWidth="0.5"></path>
<path d="M50 100 Q 150 180, 350 100" fill="none" stroke="#5c6480" strokeWidth="0.5"></path>
<path className="animate-[dashOffset_3s_linear_infinite]" d="M50 100 Q 150 20, 350 100" fill="none" stroke="#C4B5FD" stroke-dasharray="100 300" strokeWidth="1.5"></path>
<circle cx="50" cy="100" fill="#C4B5FD" r="4"></circle>
<text fill="#5c6480" fontFamily="JetBrains Mono" fontSize="8" text-anchor="middle" x="50" y="115">PROXIMA-4</text>
<circle cx="350" cy="100" fill="#C4B5FD" r="4"></circle>
<text fill="#5c6480" fontFamily="JetBrains Mono" fontSize="8" text-anchor="middle" x="350" y="115">TAU HUB</text>
</svg>
<style>@keyframes dashOffset { from { stroke-dashoffset: 400; } to { stroke-dashoffset: 0; } }</style>
</div>

<div className="reveal-content absolute inset-0 bg-space-5 p-12 flex flex-col justify-end z-20 border-t border-accent/20 font-mono text-xs text-accent/80">
<div className="grid grid-cols-3 gap-8">
<div>ENCRYPTION: SHOR-RESISTANT<br/>PROTOCOL: K-MESH v4<br/>BANDWIDTH: ∞ PETABYTES</div>
<div>PACKET_LOSS: 0.00%<br/>JITTER: 0.01ms<br/>NODES: 14,291 ACTIVE</div>
<div className="text-right">EPOCH 4.2 COMPLIANT<br/>STATUS: NOMINAL<br/>SYNC: CONTINUOUS</div>
</div>
</div>
</div>

<div className="reveal-card relative flex flex-col md:flex-row min-h-[24rem] bg-space-card group">
<div className="w-full md:w-[52%] relative bg-[#090b10] p-6 font-mono text-[10px] leading-relaxed border-r border-white/5 overflow-hidden flex flex-col justify-end">
<div className="text-text-muted mb-2">&gt; INIT SOVEREIGN_COMPUTE --SECTOR TAU</div>
<div className="text-[#10B981] mb-1">[OK] ALLOCATING 400 PETAFLOPS</div>
<div className="text-text-muted mb-1">&gt; VERIFYING AIRGAP...</div>
<div className="text-accent mb-1">[LOCKED] ZERO EXTERNAL VECTORS DETECTED</div>
<div className="text-text-muted mb-1">&gt; DEPLOYING WORKLOAD HEX-9A...</div>
<div className="text-[#10B981] animate-pulse">&gt; EXECUTION CONTINUOUS_</div>
</div>
<div className="w-full md:w-[48%] p-12 flex flex-col justify-center">
<h3 className="font-display text-2xl font-semibold mb-4">Compute Sovereignty</h3>
<p className="text-sm text-text-secondary leading-relaxed mb-8">On-demand sovereign compute that cannot be requisitioned, inspected, or throttled by external authorities. Your workloads exist only where you designate.</p>
<div className="flex gap-4 font-mono text-xs text-text-muted">
<span className="bg-white/5 px-2 py-1 rounded">∞ allocation</span>
<span className="bg-white/5 px-2 py-1 rounded">0 external access</span>
<span className="bg-white/5 px-2 py-1 rounded">Epoch-2 certified</span>
</div>
</div>

<div className="reveal-content absolute inset-0 bg-space-5 p-12 flex flex-col justify-end z-20 border-t border-accent/20 font-mono text-xs text-accent/80">
<div className="grid grid-cols-3 gap-8">
<div>ARCHITECTURE: DARK-SILICON<br/>ISOLATION: HARDWARE LEVEL<br/>JURISDICTION: NONE</div>
<div>STATE: IMMUTABLE<br/>REPLICATION: MULTI-SECTOR<br/>EVICTION: PROHIBITED</div>
<div className="text-right">EPOCH 4.2 COMPLIANT<br/>STATUS: SECURE<br/>SYNC: CONTINUOUS</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-space-1 py-32 border-b border-white/5" id="operations">
<div className="max-w-[clamp(72rem,90vw,96rem)] mx-auto px-8">
<div className="mb-12 text-center flex flex-col items-center">
<div className="flex items-center gap-3 mb-6">
<div className="w-[3px] h-[3px] bg-accent"></div>
<span className="font-mono text-xs uppercase tracking-wider text-text-muted">/ OPERATIONS CONSOLE</span>
</div>
<h2 className="font-display text-[clamp(2.375rem,3.8vw,3.75rem)] font-semibold tracking-tighter text-text-primary mb-4">
                    Full-spectrum visibility. Zero latency decisions.
                </h2>
<p className="text-base text-text-secondary max-w-2xl">
                    The Koven Operations Console aggregates every substrate signal into a single command surface.
                </p>
</div>

<div className="w-full max-w-[1200px] mx-auto bg-space-panel rounded-xl border border-accent/10 shadow-[0_0_120px_rgba(196,181,253,0.04)] overflow-hidden flex flex-col relative z-10">

<div className="h-[52px] bg-space-panel border-b border-white/5 flex items-center justify-between px-4 shrink-0">
<div className="flex items-center gap-3 w-1/4">
<svg fill="#C4B5FD" height="20" viewbox="0 0 24 24" width="20"><path d="M12 2L2 7L12 12L22 7L12 2Z"></path><path d="M2 17L12 22L22 17" stroke="#C4B5FD" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-mono text-xs font-medium text-text-primary tracking-wide">KOVEN OS v4.2.1</span>
</div>
<div className="flex h-full font-sans text-xs flex-1 justify-center">
<button className="px-5 border-b-2 border-accent text-text-primary font-medium h-full flex items-center">Overview</button>
<button className="px-5 border-b-2 border-transparent text-text-secondary hover:text-text-primary transition-colors h-full flex items-center">Energy</button>
<button className="px-5 border-b-2 border-transparent text-text-secondary hover:text-text-primary transition-colors h-full flex items-center">Signal</button>
<button className="px-5 border-b-2 border-transparent text-text-secondary hover:text-text-primary transition-colors h-full flex items-center">Compute</button>
<button className="px-5 border-b-2 border-transparent text-text-secondary hover:text-text-primary transition-colors h-full flex items-center gap-2">Threats <span className="bg-accent/20 text-accent font-mono text-[10px] px-1.5 py-0.5 rounded">3</span></button>
</div>
<div className="flex items-center gap-4 justify-end w-1/4">
<input className="bg-transparent border border-accent/10 rounded-[5px] h-7 px-3 text-xs font-mono text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/30 w-32 hidden md:block" placeholder="Search sector..." type="text"/>
<div className="relative text-text-secondary hover:text-text-primary cursor-pointer">
<iconify-icon icon="solar:bell-linear" width="18"></iconify-icon>
<div className="absolute top-0 right-0 w-2 h-2 bg-accent rounded-full border border-space-panel animate-pulse"></div>
</div>
<div className="w-7 h-7 rounded-full bg-[#1c1f35] flex items-center justify-center font-mono text-[11px] text-accent border border-white/5">AX</div>
</div>
</div>

<div className="p-4 md:p-6 bg-space-1 flex-1 flex flex-col gap-6">

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-space-card border border-accent/5 rounded-md p-4 flex flex-col justify-between h-24">
<div className="flex justify-between items-start">
<span className="font-mono text-[10px] text-text-secondary">ACTIVE SECTORS</span>
<span className="font-mono text-[10px] text-[#10B981]">▲ +3 this cycle</span>
</div>
<div className="flex justify-between items-end">
<span className="font-display text-2xl font-semibold">147</span>
<svg height="20" viewbox="0 0 60 20" width="60"><path d="M0 15 L10 12 L20 14 L30 8 L40 10 L50 2 L60 0" fill="none" stroke="#10B981" strokeWidth="1.5"></path></svg>
</div>
</div>
<div className="bg-space-card border border-accent/5 rounded-md p-4 flex flex-col justify-between h-24">
<div className="flex justify-between items-start">
<span className="font-mono text-[10px] text-text-secondary">ENERGY THROUGHPUT</span>
<span className="font-mono text-[10px] text-[#10B981]">▲ +12.3%</span>
</div>
<div className="flex justify-between items-end">
<span className="font-display text-2xl font-semibold">8.4 ZW</span>
<svg height="20" viewbox="0 0 60 20" width="60"><path d="M0 18 L15 15 L30 10 L45 8 L60 2" fill="none" stroke="#10B981" strokeWidth="1.5"></path></svg>
</div>
</div>
<div className="bg-space-card border border-accent/5 rounded-md p-4 flex flex-col justify-between h-24">
<div className="flex justify-between items-start">
<span className="font-mono text-[10px] text-text-secondary">SIGNAL INTEGRITY</span>
<span className="font-mono text-[10px] text-[#F59E0B]">▼ -0.03%</span>
</div>
<div className="flex justify-between items-end">
<span className="font-display text-2xl font-semibold">99.91%</span>
<svg height="20" viewbox="0 0 60 20" width="60"><path d="M0 2 L20 2 L30 15 L40 2 L60 2" fill="none" stroke="#F59E0B" strokeWidth="1.5"></path></svg>
</div>
</div>
<div className="bg-space-card border border-accent/5 rounded-md p-4 flex flex-col justify-between h-24">
<div className="flex justify-between items-start">
<span className="font-mono text-[10px] text-text-secondary">THREAT INDEX</span>
<span className="font-mono text-[10px] text-[#10B981]">▼ -1.4 pts</span>
</div>
<div className="flex justify-between items-end">
<span className="font-display text-2xl font-semibold">0.7</span>
<svg height="20" viewbox="0 0 60 20" width="60"><path d="M0 2 L15 8 L30 12 L45 15 L60 18" fill="none" stroke="#10B981" strokeWidth="1.5"></path></svg>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 flex-1">

<div className="bg-space-card border border-white/5 rounded-md relative min-h-[300px] overflow-hidden group">

<svg className="absolute inset-0 w-full h-full" preserveaspectratio="xMidYMid slice" viewbox="0 0 800 400">

<pattern height="16" id="dots" patternunits="userSpaceOnUse" width="16" x="0" y="0"><circle cx="2" cy="2" fill="rgba(255,255,255,0.05)" r="1.5"></circle></pattern>
<rect fill="url(#dots)" height="100%" width="100%" x="0" y="0"></rect>

<g className="nodes" fill="#C4B5FD">
<path d="M200 150 Q 400 50, 600 200" fill="none" stroke="rgba(196,181,253,0.15)" strokeWidth="1"></path>
<path className="animate-[dash_4s_linear_infinite]" d="M200 150 Q 400 50, 600 200" fill="none" stroke="#C4B5FD" stroke-dasharray="20 400" strokeWidth="2"></path>
<circle className="cursor-pointer hover:r-6 transition-all" cx="200" cy="150" r="4"></circle>
<circle className="animate-pulse" cx="200" cy="150" fill="rgba(196,181,253,0.1)" r="12"></circle>
<path d="M600 200 Q 500 350, 300 300" fill="none" stroke="rgba(196,181,253,0.15)" strokeWidth="1"></path>
<path className="animate-[dash_3s_linear_infinite_reverse]" d="M600 200 Q 500 350, 300 300" fill="none" stroke="#C4B5FD" stroke-dasharray="10 300" strokeWidth="1.5"></path>
<circle cx="600" cy="200" r="5"></circle>
<circle className="animate-pulse" cx="600" cy="200" fill="rgba(196,181,253,0.15)" r="15"></circle>
<circle cx="300" cy="300" fill="#F59E0B" r="3"></circle>
<circle cx="450" cy="120" r="3"></circle>
<circle cx="150" cy="250" fill="#EF4444" r="4"></circle>
</g>
</svg>

<div className="absolute top-[120px] left-[210px] bg-space-card border border-accent/15 shadow-lg p-3 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 backdrop-blur-md">
<div className="font-mono font-medium text-text-primary mb-1">PROXIMA-4 PRIME</div>
<div className="text-text-muted font-mono flex flex-col gap-1">
<div className="flex justify-between gap-4"><span>STATUS</span><span className="text-[#10B981]">NOMINAL</span></div>
<div className="flex justify-between gap-4"><span>LATENCY</span><span>0.28ms</span></div>
</div>
</div>
</div>

<div className="bg-space-card border border-white/5 rounded-md overflow-hidden text-xs font-sans flex flex-col">
<div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] p-3 border-b border-white/5 font-mono text-[10px] text-text-muted bg-space-panel/50">
<div>SECTOR DESIGNATION</div><div>STATUS</div><div>LOAD</div><div>LATENCY</div><div className="text-right">LAST SYNC</div>
</div>
<div className="flex-1 overflow-y-auto hide-scrollbar">
<div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] p-3 border-b border-white/5 items-center bg-space-card hover:bg-space-alt transition-colors">
<div className="font-medium">Proxima-4 Prime</div>
<div className="flex items-center gap-1.5 font-mono text-[10px] text-[#10B981]"><div className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></div>NOMINAL</div>
<div className="font-mono">74.2%</div><div className="font-mono">0.28ms</div><div className="font-mono text-right text-text-muted">4s ago</div>
</div>
<div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] p-3 border-b border-white/5 items-center bg-space-alt hover:bg-space-card transition-colors">
<div className="font-medium">Vega Industrial Hub</div>
<div className="flex items-center gap-1.5 font-mono text-[10px] text-[#10B981]"><div className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></div>NOMINAL</div>
<div className="font-mono">61.8%</div><div className="font-mono">0.31ms</div><div className="font-mono text-right text-text-muted">7s ago</div>
</div>
<div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] p-3 border-b border-accent/20 items-center bg-accent/5">
<div className="font-medium">Tau-7 Relay</div>
<div className="flex items-center gap-1.5 font-mono text-[10px] text-[#F59E0B]"><div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse"></div>DEGRADED</div>
<div className="font-mono">88.1%</div><div className="font-mono text-[#F59E0B]">1.14ms</div><div className="font-mono text-right text-text-muted">22s ago</div>
</div>
<div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] p-3 border-b border-white/5 items-center bg-space-alt hover:bg-space-card transition-colors">
<div className="font-medium">Cygnus Compute Ring</div>
<div className="flex items-center gap-1.5 font-mono text-[10px] text-[#10B981]"><div className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></div>NOMINAL</div>
<div className="font-mono">52.4%</div><div className="font-mono">0.19ms</div><div className="font-mono text-right text-text-muted">2s ago</div>
</div>
<div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] p-3 border-b border-white/5 items-center bg-space-card hover:bg-space-alt transition-colors">
<div className="font-medium">Eos Frontier Node</div>
<div className="flex items-center gap-1.5 font-mono text-[10px] text-[#EF4444]"><div className="w-1.5 h-1.5 rounded-full bg-[#EF4444]"></div>INCIDENT</div>
<div className="font-mono">99.7%</div><div className="font-mono text-[#EF4444]">4.82ms</div><div className="font-mono text-right text-text-muted">3m ago</div>
</div>
<div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] p-3 border-b border-white/5 items-center bg-space-alt hover:bg-space-card transition-colors">
<div className="font-medium">Kappa Deep Array</div>
<div className="flex items-center gap-1.5 font-mono text-[10px] text-[#10B981]"><div className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></div>NOMINAL</div>
<div className="font-mono">43.1%</div><div className="font-mono">0.22ms</div><div className="font-mono text-right text-text-muted">1s ago</div>
</div>

<div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] p-3 items-center bg-space-card h-[45px]">
<div className="h-3 bg-white/5 rounded w-24 animate-pulse"></div>
<div className="h-3 bg-white/5 rounded w-16 animate-pulse"></div>
<div className="h-3 bg-white/5 rounded w-8 animate-pulse"></div>
<div className="h-3 bg-white/5 rounded w-10 animate-pulse"></div>
<div className="h-3 bg-white/5 rounded w-12 animate-pulse ml-auto"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-space-2 py-32 border-b border-white/5">
<div className="max-w-[clamp(72rem,90vw,96rem)] mx-auto px-8">
<div className="flex flex-col md:flex-row gap-12 justify-between items-end mb-16">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="w-[3px] h-[3px] bg-accent"></div>
<span className="font-mono text-xs uppercase tracking-wider text-text-muted">/ MEASURED IN EPOCHS</span>
</div>
<h2 className="font-display text-[clamp(2.375rem,3.8vw,3.75rem)] font-semibold tracking-tighter text-text-primary max-w-2xl leading-[1.1]">
                        The only infrastructure that survives the civilization it serves
                    </h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/5 border border-white/5">
<div className="conic-border-card bg-space-card p-12 flex flex-col items-center justify-center text-center">
<div className="font-display text-[clamp(2.625rem,5vw,4.5rem)] font-semibold text-text-primary mb-2 counter" data-suffix=" billion" data-target="14.2">0</div>
<div className="font-mono text-[10px] text-text-secondary uppercase tracking-widest mb-1">OPERATIONS PROCESSED</div>
<div className="font-mono text-[10px] text-text-muted">this epoch</div>
</div>
<div className="conic-border-card bg-space-card p-12 flex flex-col items-center justify-center text-center">
<div className="font-display text-[clamp(2.625rem,5vw,4.5rem)] font-semibold text-text-primary mb-2 counter" data-target="0">0</div>
<div className="font-mono text-[10px] text-text-secondary uppercase tracking-widest mb-1">CATASTROPHIC FAILURES</div>
<div className="font-mono text-[10px] text-text-muted">since EPOCH 1.0</div>
</div>
<div className="conic-border-card bg-space-card p-12 flex flex-col items-center justify-center text-center">
<div className="font-display text-[clamp(2.625rem,5vw,4.5rem)] font-semibold text-text-primary mb-2 counter" data-target="847">0</div>
<div className="font-mono text-[10px] text-text-secondary uppercase tracking-widest mb-1">RELAY STATIONS</div>
<div className="font-mono text-[10px] text-text-muted">across 14 sectors</div>
</div>
<div className="conic-border-card bg-space-card p-12 flex flex-col items-center justify-center text-center">
<div className="font-display text-[clamp(2.625rem,5vw,4.5rem)] font-semibold text-text-primary mb-2">∞</div>
<div className="font-mono text-[10px] text-text-secondary uppercase tracking-widest mb-1">COMPUTE HEADROOM</div>
<div className="font-mono text-[10px] text-text-muted">by design</div>
</div>
<div className="conic-border-card bg-space-card p-12 flex flex-col items-center justify-center text-center">
<div className="font-display text-[clamp(2.625rem,5vw,4.5rem)] font-semibold text-text-primary mb-2 counter" data-suffix="ms" data-target="0.3">0</div>
<div className="font-mono text-[10px] text-text-secondary uppercase tracking-widest mb-1">CROSS-SECTOR LATENCY</div>
<div className="font-mono text-[10px] text-text-muted">worst case measured</div>
</div>
<div className="conic-border-card bg-space-card p-12 flex flex-col items-center justify-center text-center">
<div className="font-display text-[clamp(2.625rem,5vw,4.5rem)] font-semibold text-text-primary mb-2 counter" data-format="comma" data-target="3200">0</div>
<div className="font-mono text-[10px] text-text-secondary uppercase tracking-widest mb-1">YEARS PROJECTED LONGEVITY</div>
<div className="font-mono text-[10px] text-text-muted">at current substrate integrity</div>
</div>
</div>
</div>
</section>

<section className="bg-space-5 py-32 border-b border-white/5 overflow-hidden">
<div className="max-w-[clamp(72rem,90vw,96rem)] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-16 items-center">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="w-[3px] h-[3px] bg-accent"></div>
<span className="font-mono text-xs uppercase tracking-wider text-text-muted">/ THREAT INTELLIGENCE</span>
</div>
<h2 className="font-display text-[clamp(2.375rem,3vw,3rem)] font-semibold tracking-tighter text-text-primary mb-6 leading-[1.1]">
                    Substrate threats identified and resolved before they surface
                </h2>
<p className="text-base text-text-secondary mb-8 leading-relaxed">
                    The Threat Resolution Engine (TRE-4.2) operates autonomously across the entire mesh. It detects relativistic anomalies, routing attempts by non-sovereign entities, and hardware decay, executing mitigation protocols without human consensus latency.
                </p>
<ul className="flex flex-col gap-3 font-mono text-xs text-text-secondary">
<li className="flex items-center gap-2"><iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> Autonomous mitigation</li>
<li className="flex items-center gap-2"><iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> Zero-day predictive modeling</li>
<li className="flex items-center gap-2"><iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> Immutable audit trails</li>
</ul>
</div>

<div className="bg-space-panel border border-accent/10 rounded-lg w-full max-w-[520px] h-[380px] flex flex-col shadow-2xl relative">

<div className="h-10 border-b border-white/5 flex items-center justify-between px-4 bg-[#0a0c16]">
<span className="font-mono text-[11px] text-accent">THREAT RESOLUTION ENGINE — TRE-4.2</span>
<span className="font-mono text-[9px] text-text-muted">EPOCH 4.2.1 · CYCLE 847,291</span>
</div>

<div className="flex-1 overflow-hidden relative p-4 flex flex-col justify-end" id="threat-list">

</div>

<div className="h-8 border-t border-white/5 flex items-center justify-center px-4 bg-[#0a0c16]">
<span className="font-mono text-[9px] text-text-muted">847,203 threats resolved this epoch · 0 escalated · TRE uptime: 100.000%</span>
</div>
</div>
</div>
</section>

<section className="bg-space-2 py-32 border-b border-white/5" id="status">
<div className="max-w-[clamp(72rem,90vw,96rem)] mx-auto px-8">
<div className="text-center flex flex-col items-center mb-24">
<div className="flex items-center gap-3 mb-6">
<div className="w-[3px] h-[3px] bg-accent"></div>
<span className="font-mono text-xs uppercase tracking-wider text-text-muted">/ SECTOR INTEGRATION</span>
</div>
<h2 className="font-display text-[clamp(2.375rem,3.8vw,3.75rem)] font-semibold tracking-tighter text-text-primary">
                    A new sector integrated in 11 minutes flat
                </h2>
</div>

<div className="relative max-w-5xl mx-auto" id="timeline-container">
<div className="flex justify-between items-center relative z-10">

<div className="flex flex-col items-center gap-4 relative z-10 group timeline-step opacity-50 transition-opacity duration-500">
<div className="w-12 h-12 rounded-full border-2 border-white/10 bg-space-card flex items-center justify-center transition-all duration-300 group-[.is-active]:border-accent group-[.is-active]:shadow-[0_0_16px_rgba(196,181,253,0.3)]">
<iconify-icon className="text-text-secondary group-[.is-active]:text-accent transition-colors" icon="solar:radar-linear" width="20"></iconify-icon>
</div>
<div className="text-center">
<div className="font-sans text-sm font-medium text-text-primary mb-1 whitespace-nowrap">Sector Discovery</div>
<div className="font-mono text-[9px] text-text-muted">avg 1.2m</div>
</div>
</div>

<div className="flex-1 h-[2px] bg-white/5 mx-4 relative timeline-line">
<div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/10 w-0 transition-[width] duration-700 ease-out fill-line"></div>
</div>

<div className="flex flex-col items-center gap-4 relative z-10 group timeline-step opacity-50 transition-opacity duration-500">
<div className="w-12 h-12 rounded-full border-2 border-white/10 bg-space-card flex items-center justify-center transition-all duration-300 group-[.is-active]:border-accent group-[.is-active]:shadow-[0_0_16px_rgba(196,181,253,0.3)]">
<iconify-icon className="text-text-secondary group-[.is-active]:text-accent transition-colors" icon="solar:cpu-linear" width="20"></iconify-icon>
</div>
<div className="text-center">
<div className="font-sans text-sm font-medium text-text-primary mb-1 whitespace-nowrap">Substrate Probe</div>
<div className="font-mono text-[9px] text-text-muted">avg 2.4m</div>
</div>
</div>

<div className="flex-1 h-[2px] bg-white/5 mx-4 relative timeline-line">
<div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/10 w-0 transition-[width] duration-700 ease-out fill-line"></div>
</div>

<div className="flex flex-col items-center gap-4 relative z-10 group timeline-step opacity-50 transition-opacity duration-500">
<div className="w-12 h-12 rounded-full border-2 border-white/10 bg-space-card flex items-center justify-center transition-all duration-300 group-[.is-active]:border-accent group-[.is-active]:shadow-[0_0_16px_rgba(196,181,253,0.3)]">
<iconify-icon className="text-text-secondary group-[.is-active]:text-accent transition-colors" icon="solar:handshake-linear" width="20"></iconify-icon>
</div>
<div className="text-center">
<div className="font-sans text-sm font-medium text-text-primary mb-1 whitespace-nowrap">Relay Handshake</div>
<div className="font-mono text-[9px] text-text-muted">avg 0.8m</div>
</div>
</div>

<div className="flex-1 h-[2px] bg-white/5 mx-4 relative timeline-line">
<div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/10 w-0 transition-[width] duration-700 ease-out fill-line"></div>
</div>

<div className="flex flex-col items-center gap-4 relative z-10 group timeline-step opacity-50 transition-opacity duration-500">
<div className="w-12 h-12 rounded-full border-2 border-white/10 bg-space-card flex items-center justify-center transition-all duration-300 group-[.is-active]:border-accent group-[.is-active]:shadow-[0_0_16px_rgba(196,181,253,0.3)]">
<iconify-icon className="text-text-secondary group-[.is-active]:text-accent transition-colors" icon="solar:network-linear" width="20"></iconify-icon>
</div>
<div className="text-center">
<div className="font-sans text-sm font-medium text-text-primary mb-1 whitespace-nowrap">Mesh Integration</div>
<div className="font-mono text-[9px] text-text-muted">avg 4.1m</div>
</div>
</div>

<div className="flex-1 h-[2px] bg-white/5 mx-4 relative timeline-line">
<div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/10 w-0 transition-[width] duration-700 ease-out fill-line"></div>
</div>

<div className="flex flex-col items-center gap-4 relative z-10 group timeline-step opacity-50 transition-opacity duration-500">
<div className="w-12 h-12 rounded-full border-2 border-white/10 bg-space-card flex items-center justify-center transition-all duration-300 group-[.is-active]:border-accent group-[.is-active]:shadow-[0_0_16px_rgba(196,181,253,0.3)]">
<iconify-icon className="text-text-secondary group-[.is-active]:text-accent transition-colors" icon="solar:rocket-linear" width="20"></iconify-icon>
</div>
<div className="text-center">
<div className="font-sans text-sm font-medium text-text-primary mb-1 whitespace-nowrap">Full Operations</div>
<div className="font-mono text-[9px] text-text-muted">avg 2.5m</div>
</div>
</div>
</div>
</div>
<div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto border-t border-white/5 pt-12">
<div className="text-center">
<div className="font-display text-3xl font-semibold text-text-primary mb-2">11 min</div>
<div className="font-mono text-xs text-text-secondary uppercase">average integration</div>
</div>
<div className="text-center">
<div className="font-display text-3xl font-semibold text-text-primary mb-2">847</div>
<div className="font-mono text-xs text-text-secondary uppercase">sectors integrated</div>
</div>
<div className="text-center">
<div className="font-display text-3xl font-semibold text-text-primary mb-2">0</div>
<div className="font-mono text-xs text-text-secondary uppercase">rollbacks required</div>
</div>
</div>
</div>
</section>

<section className="bg-space-1 py-32 border-b border-white/5 overflow-hidden">
<div className="max-w-[clamp(72rem,90vw,96rem)] mx-auto px-8">
<div className="mb-16">
<div className="flex items-center gap-3 mb-6">
<div className="w-[3px] h-[3px] bg-accent"></div>
<span className="font-mono text-xs uppercase tracking-wider text-text-muted">/ OPERATORS</span>
</div>
<h2 className="font-display text-[clamp(2.375rem,3.8vw,3.75rem)] font-semibold tracking-tighter text-text-primary max-w-2xl leading-[1.1]">
                    The minds behind civilization-scale deployments
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 testimonials-grid" id="testimonials">

<div className="bg-space-card p-8 rounded-lg border border-white/5 flex flex-col justify-between min-h-[14rem] magnetic-card cursor-default">
<p className="font-sans text-sm text-[#9aa0b8] italic mb-6 leading-relaxed">"Koven eliminated the energy arbitrage failure that ended the Kepler Compact."</p>
<div>
<div className="font-display text-sm font-semibold text-text-primary">Soren Vael</div>
<div className="font-mono text-[10px] text-text-secondary mb-3">Chief Infrastructure, Proxima Systems</div>
<div className="font-mono text-xs text-accent font-semibold">0 failures in 3 epochs</div>
</div>
</div>
<div className="bg-space-card p-8 rounded-lg border border-white/5 flex flex-col justify-between min-h-[14rem] magnetic-card cursor-default">
<p className="font-sans text-sm text-[#9aa0b8] italic mb-6 leading-relaxed">"Sub-millisecond latency at 14 light-years. We built an economy on that number."</p>
<div>
<div className="font-display text-sm font-semibold text-text-primary">Aria Kos</div>
<div className="font-mono text-[10px] text-text-secondary mb-3">CTO, Vega Industrial</div>
<div className="font-mono text-xs text-accent font-semibold">€2.4T GDP routed</div>
</div>
</div>
<div className="bg-space-card p-8 rounded-lg border border-white/5 flex flex-col justify-between min-h-[14rem] magnetic-card cursor-default">
<p className="font-sans text-sm text-[#9aa0b8] italic mb-6 leading-relaxed">"The substrate layer doesn't care about politics. That's why it works."</p>
<div>
<div className="font-display text-sm font-semibold text-text-primary">Marcus Thane</div>
<div className="font-mono text-[10px] text-text-secondary mb-3">Director, Cygnus Authority</div>
<div className="font-mono text-xs text-accent font-semibold">14-year deployment</div>
</div>
</div>
<div className="bg-space-card p-8 rounded-lg border border-white/5 flex flex-col justify-between min-h-[14rem] magnetic-card cursor-default">
<p className="font-sans text-sm text-[#9aa0b8] italic mb-6 leading-relaxed">"Nothing else survives contact with galactic-scale complexity."</p>
<div>
<div className="font-display text-sm font-semibold text-text-primary">Delia Rho</div>
<div className="font-mono text-[10px] text-text-secondary mb-3">Lead Architect, Tau Infrastructure</div>
<div className="font-mono text-xs text-accent font-semibold">847 nodes managed</div>
</div>
</div>
<div className="bg-space-card p-8 rounded-lg border border-white/5 flex flex-col justify-between min-h-[14rem] magnetic-card cursor-default">
<p className="font-sans text-sm text-[#9aa0b8] italic mb-6 leading-relaxed">"We stress-tested Koven against the Eos Incident. It held."</p>
<div>
<div className="font-display text-sm font-semibold text-text-primary">Jonah Wren</div>
<div className="font-mono text-[10px] text-text-secondary mb-3">CTO, Frontier Operations</div>
<div className="font-mono text-xs text-accent font-semibold">99.9997% uptime held</div>
</div>
</div>
<div className="bg-space-card p-8 rounded-lg border border-white/5 flex flex-col justify-between min-h-[14rem] magnetic-card cursor-default">
<p className="font-sans text-sm text-[#9aa0b8] italic mb-6 leading-relaxed">"Other vendors sell tools. Koven sells permanence."</p>
<div>
<div className="font-display text-sm font-semibold text-text-primary">Sable Chen</div>
<div className="font-mono text-[10px] text-text-secondary mb-3">CEO, Kappa Collective</div>
<div className="font-mono text-xs text-accent font-semibold">3 civilizations served</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-space-4 py-32 border-b border-white/5" id="access">
<div className="max-w-[clamp(72rem,90vw,96rem)] mx-auto px-8">
<div className="text-center flex flex-col items-center mb-16">
<div className="flex items-center gap-3 mb-6">
<div className="w-[3px] h-[3px] bg-accent"></div>
<span className="font-mono text-xs uppercase tracking-wider text-text-muted">/ INFRASTRUCTURE ACCESS</span>
</div>
<h2 className="font-display text-[clamp(2.375rem,3.8vw,3.75rem)] font-semibold tracking-tighter text-text-primary mb-4">
                    Priced for civilizations. Not departments.
                </h2>
<p className="text-base text-text-secondary max-w-2xl">
                    Three access tiers. Permanent licensing. No per-seat, per-sector, or per-epoch taxation.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-center perspective-1000">

<div className="tilt-card bg-space-card border border-white/5 rounded-xl p-8 h-[36rem] flex flex-col transform-gpu">
<div className="tilt-content flex flex-col h-full">
<div className="font-mono text-xs text-text-secondary uppercase mb-2">OUTPOST</div>
<div className="font-mono text-2xl text-text-primary mb-4">€2,400 <span className="text-xs text-text-muted">/ epoch</span></div>
<p className="text-sm text-text-secondary mb-8 flex-1">For single-sector operations establishing substrate presence.</p>
<ul className="flex flex-col gap-4 font-sans text-sm text-text-secondary mb-8">
<li className="flex items-center gap-3"><iconify-icon className="text-text-muted" icon="solar:alt-arrow-right-linear"></iconify-icon> 1 sector limit</li>
<li className="flex items-center gap-3"><iconify-icon className="text-text-muted" icon="solar:alt-arrow-right-linear"></iconify-icon> 50 relay nodes</li>
<li className="flex items-center gap-3"><iconify-icon className="text-text-muted" icon="solar:alt-arrow-right-linear"></iconify-icon> Signal mesh included</li>
<li className="flex items-center gap-3"><iconify-icon className="text-text-muted" icon="solar:alt-arrow-right-linear"></iconify-icon> 99.9% uptime SLA</li>
<li className="flex items-center gap-3"><iconify-icon className="text-text-muted" icon="solar:alt-arrow-right-linear"></iconify-icon> Community support</li>
</ul>
<a className="btn-secondary-hover relative text-text-primary/80 hover:text-text-primary text-sm border border-white/10 hover:border-accent/40 rounded-[3px] h-11 flex items-center justify-center transition-colors w-full" href="#">Deploy Now</a>
</div>
</div>

<div className="tilt-card bg-space-card border border-accent rounded-xl p-10 h-[38rem] flex flex-col transform-gpu shadow-[0_0_40px_rgba(196,181,253,0.08)] relative z-10 lg:scale-[1.03]">
<div className="absolute top-0 right-10 bg-accent text-space-1 font-mono text-[10px] px-3 py-1 font-semibold rounded-b-md">RECOMMENDED</div>
<div className="tilt-content flex flex-col h-full">
<div className="font-mono text-xs text-accent uppercase mb-2 mt-2">SOVEREIGN</div>
<div className="font-mono text-3xl text-text-primary mb-4">€18,000 <span className="text-xs text-text-muted">/ epoch</span></div>
<p className="text-sm text-text-secondary mb-8 flex-1">For multi-sector civilizations requiring full operational independence.</p>
<ul className="flex flex-col gap-4 font-sans text-sm text-text-primary mb-8">
<li className="flex items-center gap-3"><iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> Up to 14 sectors</li>
<li className="flex items-center gap-3"><iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> Unlimited relay nodes</li>
<li className="flex items-center gap-3"><iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> Full mesh + energy routing</li>
<li className="flex items-center gap-3"><iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> TRE included natively</li>
<li className="flex items-center gap-3"><iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> 99.9997% uptime SLA</li>
<li className="flex items-center gap-3"><iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> Priority intelligence feed</li>
</ul>
<a className="btn-primary-hover relative overflow-hidden clip-angled bg-accent text-space-1 font-display font-semibold text-sm h-11 flex items-center justify-center cursor-pointer w-full group" href="#">
<span className="hover-text-top block w-full text-center">Deploy Sovereign</span>
<span className="hover-text-bottom text-space-1 justify-center">Deploy Sovereign</span>
</a>
</div>
</div>

<div className="tilt-card bg-space-card border border-white/5 rounded-xl p-8 h-[36rem] flex flex-col transform-gpu">
<div className="tilt-content flex flex-col h-full">
<div className="font-mono text-xs text-text-secondary uppercase mb-2">EPOCH</div>
<div className="font-mono text-2xl text-text-primary mb-4">Contact</div>
<p className="text-sm text-text-secondary mb-8 flex-1">For post-planetary operations across unlimited sectors and epochs.</p>
<ul className="flex flex-col gap-4 font-sans text-sm text-text-secondary mb-8">
<li className="flex items-center gap-3"><iconify-icon className="text-text-muted" icon="solar:alt-arrow-right-linear"></iconify-icon> Unlimited everything</li>
<li className="flex items-center gap-3"><iconify-icon className="text-text-muted" icon="solar:alt-arrow-right-linear"></iconify-icon> Custom relay topology</li>
<li className="flex items-center gap-3"><iconify-icon className="text-text-muted" icon="solar:alt-arrow-right-linear"></iconify-icon> Dedicated infrastructure team</li>
<li className="flex items-center gap-3"><iconify-icon className="text-text-muted" icon="solar:alt-arrow-right-linear"></iconify-icon> White-glove integration</li>
<li className="flex items-center gap-3"><iconify-icon className="text-text-muted" icon="solar:alt-arrow-right-linear"></iconify-icon> Continuity guarantee</li>
</ul>

<a className="relative text-text-primary text-sm h-11 flex items-center justify-center group overflow-hidden border border-white/10 hover:border-transparent transition-colors" href="#">
<span className="absolute left-0 top-0 bottom-0 w-2 border-y border-l border-accent/60 group-hover:w-full transition-all duration-300 ease-out z-0"></span>
<span className="absolute right-0 top-0 bottom-0 w-2 border-y border-r border-accent/60 group-hover:w-full transition-all duration-300 ease-out z-0"></span>
<span className="relative z-10">Talk to Architects</span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-space-1 py-32 border-b border-white/5">
<div className="max-w-[clamp(72rem,90vw,96rem)] mx-auto px-8">
<div className="flex items-center gap-3 mb-12 justify-center">
<div className="w-[3px] h-[3px] bg-accent"></div>
<span className="font-mono text-xs uppercase tracking-wider text-text-muted">/ FREQUENTLY ASKED</span>
</div>
<h2 className="font-display text-[clamp(2.375rem,3.8vw,3.75rem)] font-semibold tracking-tighter text-text-primary text-center mb-16">
                What the architects asked before deploying.
            </h2>
<div className="max-w-[720px] mx-auto flex flex-col gap-4" id="faq-container">

</div>
</div>
</section>

<footer className="bg-[#040509] relative pt-20 border-t border-white/5 overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden group/bg">
<div className="font-display text-[clamp(5rem,11vw,10rem)] font-extrabold text-text-primary opacity-5 whitespace-nowrap tracking-tightest transition-[letter-spacing] duration-1000 ease-out group-hover/bg:tracking-wider pointer-events-auto cursor-default">
                KOVEN KOVEN
            </div>
</div>
<div className="max-w-[clamp(72rem,90vw,96rem)] mx-auto px-8 relative z-10 pb-10 flex flex-col justify-end min-h-[40vh]">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-t border-white/5 pt-10">
<div className="flex flex-wrap gap-16">
<div className="flex flex-col gap-4">
<span className="font-mono text-[10px] text-text-muted mb-2">SYSTEMS</span>
<a className="font-sans text-xs text-text-secondary hover:text-text-primary transition-colors" href="#">Systems</a>
<a className="font-sans text-xs text-text-secondary hover:text-text-primary transition-colors" href="#">Architecture</a>
<a className="font-sans text-xs text-text-secondary hover:text-text-primary transition-colors" href="#">Status</a>
<a className="font-sans text-xs text-text-secondary hover:text-text-primary transition-colors" href="#">Changelog</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-mono text-[10px] text-text-muted mb-2">COMPANY</span>
<a className="font-sans text-xs text-text-secondary hover:text-text-primary transition-colors" href="#">About</a>
<a className="font-sans text-xs text-text-secondary hover:text-text-primary transition-colors" href="#">Careers</a>
<a className="font-sans text-xs text-text-secondary hover:text-text-primary transition-colors" href="#">Press</a>
<a className="font-sans text-xs text-text-secondary hover:text-text-primary transition-colors" href="#">Epoch Reports</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-mono text-[10px] text-text-muted mb-2">DEVELOPERS</span>
<a className="font-sans text-xs text-text-secondary hover:text-text-primary transition-colors" href="#">Docs</a>
<a className="font-sans text-xs text-text-secondary hover:text-text-primary transition-colors" href="#">API</a>
<a className="font-sans text-xs text-text-secondary hover:text-text-primary transition-colors" href="#">CLI</a>
<a className="font-sans text-xs text-text-secondary hover:text-text-primary transition-colors" href="#">Community</a>
</div>
</div>
<div className="flex gap-4">
<a className="text-text-secondary hover:text-text-primary transition-colors opacity-35 hover:opacity-100" href="#"><iconify-icon icon="solar:github-linear" width="24"></iconify-icon></a>
<a className="text-text-secondary hover:text-text-primary transition-colors opacity-35 hover:opacity-100" href="#"><iconify-icon icon="solar:letter-linear" width="24"></iconify-icon></a> 
<a className="text-text-secondary hover:text-text-primary transition-colors opacity-35 hover:opacity-100" href="#"><iconify-icon icon="solar:programming-linear" width="24"></iconify-icon></a> 
</div>
</div>
<div className="mt-16 text-center group cursor-default">
<span className="font-mono text-[10px] text-text-muted transition-all duration-300 group-hover:hidden">KOVEN SYSTEMS © EPOCH 4.2 — All infrastructure sovereign.</span>
<span className="font-mono text-[9px] text-accent hidden group-hover:inline-block transition-all duration-300">EPOCH 1.0 FOUNDING DATE: 2031.03.17</span>
</div>
</div>
</footer>


    </>
  );
}
