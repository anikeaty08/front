import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
colors: {
primary: '#0A0A0A',
secondary: '#555555',
accent: '#D9381E',
bg: '#FDFBF7',
surface: '#F4F1EA',
border: '#DCD8D0',
},
fontFamily: {
serif: ['"Playfair Display"', 'serif'],
sans: ['"Inter"', 'sans-serif'],
mono: ['"Space Mono"', 'monospace'],
},
fontSize: {
'h1': 'clamp(4rem, 10vw, 12rem)',
'h2': 'clamp(3rem, 7vw, 7.5rem)',
'h3': 'clamp(2rem, 4vw, 3.5rem)',
'body': 'clamp(1.1rem, 1.2vw, 1.25rem)',
'xs-fluid': 'clamp(0.85rem, 1vw, 1rem)',
'micro': 'clamp(0.65rem, 0.8vw, 0.75rem)',
},
spacing: {
'section': 'clamp(6rem, 12vw, 12rem)',
'container': 'clamp(1.5rem, 5vw, 4rem)',
},
transitionTimingFunction: {
'editorial': 'cubic-bezier(0.16, 1, 0.3, 1)',
},
animation: {
'marquee': 'marquee 40s linear infinite',
'marquee-reverse': 'marquee-reverse 40s linear infinite',
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'spin-slow': 'spin 20s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' }
},
'marquee-reverse': {
'0%': { transform: 'translateX(-50%)' },
'100%': { transform: 'translateX(0)' }
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
            
            // 1. Reliable Reveal Animations
            const revealElements = document.querySelectorAll('.fade-up, .stagger-text');
            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

            revealElements.forEach(el => revealObserver.observe(el));

            // 2. Scroll Text Sync (Philosophy Section)
            const syncTexts = document.querySelectorAll('.sync-text');
            const textObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.8, rootMargin: '-20% 0px -20% 0px' });

            syncTexts.forEach(el => textObserver.observe(el));

            // 3. High-Performance Canvas WebGL-Style Dot Grid
            const canvas = document.getElementById('hero-canvas');
            if (canvas) {
                const ctx = canvas.getContext('2d', { alpha: false });
                
                let width, height;
                let dots = [];
                const DOT_SPACING = 35; // Tighter for a more technical look
                const MOUSE_RADIUS = 250;
                const BASE_RADIUS = 1;
                const GLOW_RADIUS = 2.5;
                
                let mouse = { x: -1000, y: -1000 };
                let time = 0;

                function initCanvas() {
                    const parent = canvas.parentElement;
                    width = parent.clientWidth;
                    height = parent.clientHeight;
                    canvas.width = width;
                    canvas.height = height;
                    createDots();
                }

                function createDots() {
                    dots = [];
                    const cols = Math.ceil(width / DOT_SPACING) + 1;
                    const rows = Math.ceil(height / DOT_SPACING) + 1;
                    
                    for (let i = 0; i < cols; i++) {
                        for (let j = 0; j < rows; j++) {
                            dots.push({
                                x: i * DOT_SPACING,
                                y: j * DOT_SPACING,
                                baseX: i * DOT_SPACING,
                                baseY: j * DOT_SPACING,
                                col: i,
                                row: j
                            });
                        }
                    }
                }

                function animate() {
                    // Solid background fill matching 'surface' color
                    ctx.fillStyle = '#F4F1EA';
                    ctx.fillRect(0, 0, width, height);

                    time += 0.02;

                    ctx.lineWidth = 0.5;

                    for (let i = 0; i < dots.length; i++) {
                        let dot = dots[i];
                        
                        // Architectural subtle motion
                        let waveX = Math.sin(time * 0.2 + dot.row * 0.05) * 1;
                        let waveY = Math.cos(time * 0.2 + dot.col * 0.05) * 1;
                        
                        dot.x = dot.baseX + waveX;
                        dot.y = dot.baseY + waveY;

                        let dx = mouse.x - dot.x;
                        let dy = mouse.y - dot.y;
                        let dist = Math.sqrt(dx * dx + dy * dy);
                        
                        let radius = BASE_RADIUS;

                        if (dist < MOUSE_RADIUS) {
                            let force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
                            
                            // Geometric Repel
                            dot.x -= (dx / dist) * force * 20;
                            dot.y -= (dy / dist) * force * 20;
                            
                            radius = BASE_RADIUS + (GLOW_RADIUS - BASE_RADIUS) * force;
                            
                            ctx.fillStyle = `rgba(10, 10, 10, ${0.2 + force * 0.6})`; 
                            
                            // Stark geometric connections
                            if(force > 0.7) {
                                ctx.beginPath();
                                ctx.moveTo(dot.x, dot.y);
                                ctx.lineTo(mouse.x, mouse.y);
                                ctx.strokeStyle = `rgba(10, 10, 10, ${force * 0.2})`;
                                ctx.stroke();
                            }
                        } else {
                            ctx.fillStyle = '#DCD8D0'; // Base dot color
                        }

                        ctx.beginPath();
                        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
                        ctx.fill();
                    }

                    requestAnimationFrame(animate);
                }

                canvas.addEventListener('mousemove', (e) => {
                    const rect = canvas.getBoundingClientRect();
                    mouse.x = e.clientX - rect.left;
                    mouse.y = e.clientY - rect.top;
                });
                
                canvas.addEventListener('mouseleave', () => {
                    mouse.x = -1000;
                    mouse.y = -1000;
                });

                window.addEventListener('resize', initCanvas);
                initCanvas();
                animate();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-[clamp(0.5rem,1vw,1rem)] border border-border pointer-events-none z-50"></div>
<nav className="fixed top-[clamp(0.5rem,1vw,1rem)] left-[clamp(0.5rem,1vw,1rem)] right-[clamp(0.5rem,1vw,1rem)] z-50 transition-all duration-500 bg-bg/90 backdrop-blur-xl border-b border-border mix-blend-normal">
<div className="flex h-[clamp(3.5rem,5vw,4.5rem)] pr-container pl-container items-center justify-between">
<div className="flex items-center gap-[2rem]">
<a className="font-serif text-primary z-10 relative group font-normal uppercase" href="#">
<svg className="h-[clamp(1.25rem,1.5vw,1.5rem)] w-auto block" viewbox="0 0 110 35" xmlns="http://www.w3.org/2000/svg">
<text fill="currentColor" fontFamily="inherit" fontSize="32" font-weight="400" letter-spacing="-2.5" x="0" y="26">AURA</text>
</svg>
<span className="absolute -bottom-[0.2rem] left-0 w-0 h-[1px] bg-primary transition-all duration-500 ease-editorial group-hover:w-full"></span>
</a>
</div>
<div className="hidden md:flex items-center gap-[clamp(2.5rem,4vw,4rem)] font-mono text-[0.65rem] uppercase tracking-[0.15em] text-primary">
<a className="group relative py-[1rem] overflow-hidden" href="#philosophy">
<span className="relative z-10">Our Approach</span>
<span className="absolute bottom-[0.8rem] left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="group relative py-[1rem] overflow-hidden" href="#work">
<span className="relative z-10">Selected Work</span>
<span className="absolute bottom-[0.8rem] left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="group relative py-[1rem] overflow-hidden" href="#capabilities">
<span className="relative z-10">Capabilities</span>
<span className="absolute bottom-[0.8rem] left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
</a>
</div>
<div className="flex items-center gap-[1.5rem]">
<a className="hidden md:inline-flex items-center gap-[0.75rem] font-mono text-[0.65rem] tracking-[0.15em] uppercase text-primary border border-border hover:bg-primary hover:text-bg px-[1.5rem] py-[0.5rem] transition-colors duration-500 rounded-full" href="#contact">
                    Let's Talk
                </a>
<button className="md:hidden flex flex-col gap-[0.35rem] w-[2rem] group">
<span className="w-full h-[1px] bg-primary transition-transform group-hover:translate-x-1"></span>
<span className="w-[70%] h-[1px] bg-primary ml-auto transition-transform group-hover:-translate-x-1"></span>
</button>
</div>
</div>
</nav>
<main className="relative z-10 bg-bg mt-[clamp(3.5rem,5vw,4.5rem)]">

<section className="min-h-[calc(100svh-clamp(4.5rem,7vw,6.5rem))] relative flex flex-col md:flex-row border-b border-border overflow-hidden">

<div className="w-full md:w-[40%] h-[40vh] md:h-auto relative border-b md:border-b-0 md:border-r border-border bg-surface overflow-hidden group">
<canvas className="absolute inset-0 z-0 w-full h-full opacity-70 transition-opacity duration-700 group-hover:opacity-100" height="869" id="hero-canvas" width="598"></canvas>
<div className="absolute top-container left-container font-mono text-[0.65rem] uppercase tracking-[0.15em] text-secondary">
                    Interactive Grid / Gen-01
                </div>
<div className="absolute bottom-container left-container right-container flex justify-between items-end pointer-events-none">
<div className="w-[1px] h-[4rem] bg-border relative overflow-hidden">
<div className="w-full h-1/2 bg-primary absolute top-0 left-0 animate-[pulse_2s_ease-in-out_infinite]"></div>
</div>
</div>
</div>

<div className="w-full md:w-[60%] relative flex flex-col justify-center p-container bg-bg z-10">

<div className="absolute top-1/4 left-0 w-full h-[1px] bg-border/50"></div>
<div className="absolute top-0 left-[20%] w-[1px] h-full bg-border/50"></div>

<div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-end pr-[5%] opacity-[0.03]">
<svg className="w-[80%] h-auto text-primary" fill="none" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 200 200">
<circle cx="100" cy="100" r="80"></circle>
<circle cx="100" cy="100" r="60"></circle>
<circle cx="100" cy="100" r="40"></circle>
<path d="M20 100 L180 100"></path>
<path d="M100 20 L100 180"></path>
</svg>
</div>

<div className="absolute top-[clamp(2rem,4vw,4rem)] right-[clamp(2rem,4vw,4rem)] text-right hidden lg:block fade-up z-10">
<div className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-secondary mb-[0.5rem]">System Status</div>
<div className="flex items-center gap-[0.5rem] justify-end">
<div className="w-[0.4rem] h-[0.4rem] rounded-full bg-accent animate-pulse-slow"></div>
<span className="font-sans text-[0.75rem] text-primary font-light tracking-wide">Accepting Partners</span>
</div>
<div className="mt-[0.5rem] font-mono text-[0.65rem] text-border tracking-[0.1em]">
                        VOL.01 / GEN-4
                    </div>
</div>
<div className="relative z-10 w-full h-full flex flex-col justify-between pt-[clamp(2rem,4vw,4rem)] pb-[clamp(2rem,4vw,4rem)] md:pb-0">
<div className="self-start fade-up">
<span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-secondary border border-border px-[1rem] py-[0.5rem] rounded-full bg-bg/50 backdrop-blur-sm">
                            Identity Architecture
                        </span>
</div>

<h1 className="font-serif text-h1 leading-[0.85] tracking-tighter text-primary font-normal flex flex-col w-full relative z-10 mix-blend-darken mt-auto mb-[clamp(3rem,6vw,6rem)]">
<div className="stagger-text is-visible self-start"><span>Design</span></div>
<div className="stagger-text is-visible self-start pl-[5%] md:pl-[10%]" style={{transitionDelay: '0.1s'}}><span className="italic text-secondary">commands</span></div>
<div className="stagger-text is-visible self-start pl-[10%] md:pl-[20%] text-outline" style={{transitionDelay: '0.2s'}}><span>respect.</span></div>
</h1>

<div className="flex flex-col sm:flex-row gap-[clamp(2rem,4vw,4rem)] items-start self-start md:pl-[10%] fade-up bg-transparent z-10" style={{transitionDelay: '0.4s'}}>
<div className="max-w-[24rem] border-l border-primary pl-[clamp(1.5rem,2vw,2rem)] py-[0.5rem]">
<p className="font-sans text-xs-fluid text-secondary leading-[1.7] mb-[1.5rem] font-light">
                                We bridge the gap between your true value and how the world sees you—turning skepticism into immediate trust and making price irrelevant.
                            </p>
<a className="group relative inline-flex items-center gap-[1rem] font-mono text-[0.65rem] tracking-[0.15em] uppercase text-primary border-b border-primary pb-[0.25rem] hover:text-accent hover:border-accent transition-colors duration-300" href="#contact">
                                Explore Process
                                <iconify-icon className="transform transition-transform duration-500 group-hover:translate-x-2" icon="solar:arrow-right-linear" width="1.2rem"></iconify-icon>
</a>
</div>

<div className="hidden xl:flex flex-col gap-[1.5rem] border-l border-border pl-[clamp(1.5rem,2vw,2rem)] py-[0.5rem]">
<div>
<div className="font-serif text-[clamp(1.5rem,2vw,2rem)] text-primary leading-none mb-[0.25rem] tracking-tight">98%</div>
<div className="font-mono text-[0.55rem] text-secondary uppercase tracking-[0.15em]">Client Retention</div>
</div>
<div>
<div className="font-serif text-[clamp(1.5rem,2vw,2rem)] text-primary leading-none mb-[0.25rem] tracking-tight">15+</div>
<div className="font-mono text-[0.55rem] text-secondary uppercase tracking-[0.15em]">Global Awards</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-border bg-primary text-bg overflow-hidden relative z-10 py-[clamp(1rem,1.5vw,1.5rem)] flex flex-col justify-center">
<div className="flex w-max animate-marquee items-center">
<div className="flex items-center gap-[clamp(2rem,4vw,4rem)] px-[clamp(1rem,2vw,2rem)] whitespace-nowrap opacity-90">
<span className="font-sans text-[clamp(0.75rem,1vw,1rem)] uppercase tracking-[0.15em]">Elevating Brand Perception</span>
<span className="w-[4px] h-[4px] bg-accent rounded-full"></span>
<span className="font-serif text-[clamp(1.25rem,1.5vw,1.5rem)] italic lowercase tracking-tight text-white/70">trusted by industry leaders</span>
<span className="w-[4px] h-[4px] bg-accent rounded-full"></span>
<span className="font-sans text-[clamp(0.75rem,1vw,1rem)] uppercase tracking-[0.15em]">Driving Measurable Growth</span>
<span className="w-[4px] h-[4px] bg-accent rounded-full"></span>
<span className="font-serif text-[clamp(1.25rem,1.5vw,1.5rem)] italic lowercase tracking-tight text-white/70">frictionless experiences</span>
<span className="w-[4px] h-[4px] bg-accent rounded-full"></span>

<span className="font-sans text-[clamp(0.75rem,1vw,1rem)] uppercase tracking-[0.15em]">Elevating Brand Perception</span>
<span className="w-[4px] h-[4px] bg-accent rounded-full"></span>
<span className="font-serif text-[clamp(1.25rem,1.5vw,1.5rem)] italic lowercase tracking-tight text-white/70">trusted by industry leaders</span>
<span className="w-[4px] h-[4px] bg-accent rounded-full"></span>
<span className="font-sans text-[clamp(0.75rem,1vw,1rem)] uppercase tracking-[0.15em]">Driving Measurable Growth</span>
<span className="w-[4px] h-[4px] bg-accent rounded-full"></span>
<span className="font-serif text-[clamp(1.25rem,1.5vw,1.5rem)] italic lowercase tracking-tight text-white/70">frictionless experiences</span>
<span className="w-[4px] h-[4px] bg-accent rounded-full"></span>

<span className="font-sans text-[clamp(0.75rem,1vw,1rem)] uppercase tracking-[0.15em]">Elevating Brand Perception</span>
<span className="w-[4px] h-[4px] bg-accent rounded-full"></span>
<span className="font-serif text-[clamp(1.25rem,1.5vw,1.5rem)] italic lowercase tracking-tight text-white/70">trusted by industry leaders</span>
<span className="w-[4px] h-[4px] bg-accent rounded-full"></span>
<span className="font-sans text-[clamp(0.75rem,1vw,1rem)] uppercase tracking-[0.15em]">Driving Measurable Growth</span>
<span className="w-[4px] h-[4px] bg-accent rounded-full"></span>
<span className="font-serif text-[clamp(1.25rem,1.5vw,1.5rem)] italic lowercase tracking-tight text-white/70">frictionless experiences</span>
<span className="w-[4px] h-[4px] bg-accent rounded-full"></span>
</div>
</div>
</section>

<section className="py-[clamp(6rem,12vw,12rem)] relative border-b border-border bg-bg overflow-hidden" id="philosophy">

<div className="absolute inset-0 grid grid-cols-1 md:grid-cols-12 pointer-events-none opacity-20">
<div className="col-span-1 border-r border-border"></div>
<div className="col-span-1 border-r border-border"></div>
<div className="col-span-1 border-r border-border hidden md:block"></div>
<div className="col-span-1 border-r border-border hidden md:block"></div>
<div className="col-span-1 border-r border-border hidden md:block"></div>
<div className="col-span-1 border-r border-border hidden md:block"></div>
<div className="col-span-1 border-r border-border hidden md:block"></div>
<div className="col-span-1 border-r border-border hidden md:block"></div>
<div className="col-span-1 border-r border-border hidden md:block"></div>
<div className="col-span-1 border-r border-border hidden md:block"></div>
<div className="col-span-1 border-r border-border hidden md:block"></div>
<div className="col-span-1"></div>
</div>
<div className="px-container relative z-10 flex flex-col gap-[clamp(4rem,8vh,6rem)] max-w-[140rem] mx-auto">

<div className="grid grid-cols-1 md:grid-cols-12 gap-container">
<div className="md:col-span-2 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-secondary mt-2">
                        01 / The Gap
                    </div>
<div className="md:col-span-8 border-t border-border pt-[2rem]">
<p className="font-serif text-[clamp(2rem,4vw,4.5rem)] leading-[1.1] tracking-tight sync-text font-normal text-primary">
                            When your identity doesn't match the caliber of your work, you lose the <span className="italic text-secondary">benefit of the doubt</span>.
                        </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-container mt-[clamp(2rem,5vw,4rem)]">
<div className="md:col-span-2 md:col-start-3 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-secondary mt-2 md:text-right md:pr-[2rem]">
                        02 / The Proof
                    </div>
<div className="md:col-span-8 border-t border-border pt-[2rem]">
<p className="font-serif text-[clamp(2rem,4vw,4.5rem)] leading-[1.1] tracking-tight sync-text font-normal text-primary">
                            Your ideal clients are looking for a reason to choose you. We give them <span className="italic text-secondary">visual proof</span> of your excellence before they read a single word.
                        </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-container mt-[clamp(2rem,5vw,4rem)]">
<div className="md:col-span-2 md:col-start-5 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-secondary mt-2 md:text-right md:pr-[2rem]">
                        03 / The Win
                    </div>
<div className="md:col-span-6 border-t border-border pt-[2rem]">
<p className="font-serif text-[clamp(2rem,4vw,4.5rem)] leading-[1.1] tracking-tight sync-text font-normal text-primary">
                            Because in a crowded room, the brand that communicates clearest, <span className="italic text-secondary text-outline">wins</span>.
                        </p>
</div>
</div>
</div>
</section>

<section className="border-b border-border bg-primary text-bg relative overflow-hidden flex flex-col" id="work">
<div className="px-container py-[clamp(3rem,6vw,4rem)] flex flex-col md:flex-row justify-between items-start md:items-end gap-[2rem] border-b border-white/10 relative z-10 bg-primary">
<div>
<div className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-white/50 block mb-[1.5rem]">
                        Selected Work
                    </div>
<h2 className="font-serif text-h2 leading-[0.9] tracking-tighter text-bg font-normal">
                        Brands we've<br/><span className="italic text-white/50">elevated.</span>
</h2>
</div>
<div className="font-sans text-xs-fluid text-white/70 max-w-[20rem] leading-[1.6] font-light">
                    We partner with ambitious founders to build identities that drive genuine connection.
                </div>
</div>

<div className="flex flex-col md:flex-row h-[auto] md:h-[75vh] w-full h-accordion-container border-b border-white/10">

<div className="h-accordion-item group relative border-b md:border-b-0 md:border-r border-white/10 bg-[#111] overflow-hidden min-h-[50vh] md:min-h-0 flex flex-col justify-end">
<img alt="Maison V" className="group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1s] ease-editorial opacity-40 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:opacity-40 transition-opacity duration-700 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 p-[clamp(2rem,3vw,3rem)] flex flex-col h-full justify-between pointer-events-none">
<div className="font-mono text-[0.65rem] text-white/50">01 / Luxury Skincare</div>
<div>
<h3 className="font-serif text-[clamp(2.5rem,4vw,4rem)] text-bg tracking-tight leading-none mb-[1rem] font-normal transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">Maison V</h3>
<p className="font-sans text-xs-fluid text-white/80 leading-[1.6] font-light opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100 max-w-[25rem]">
                                Transformed a clinical product into a luxury staple, deeply connecting with high-end consumers.
                            </p>
</div>
</div>
</div>

<div className="h-accordion-item group relative border-b md:border-b-0 md:border-r border-white/10 bg-[#111] overflow-hidden min-h-[50vh] md:min-h-0 flex flex-col justify-end">
<img alt="Aether Tech" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1s] ease-editorial" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
<div className="relative z-10 p-[clamp(2rem,3vw,3rem)] flex flex-col h-full justify-between pointer-events-none">
<div className="font-mono text-[0.65rem] text-white/50">02 / FinTech</div>
<div>
<h3 className="font-serif text-[clamp(2.5rem,4vw,4rem)] text-bg tracking-tight leading-none mb-[1rem] font-normal transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">Aether</h3>
<p className="font-sans text-xs-fluid text-white/80 leading-[1.6] font-light opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100 max-w-[25rem]">
                                Humanized complex financial data, creating a serene, trustworthy digital experience.
                            </p>
</div>
</div>
</div>

<div className="h-accordion-item group relative bg-[#111] overflow-hidden min-h-[50vh] md:min-h-0 flex flex-col justify-end">
<img alt="Equinox" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1s] ease-editorial" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
<div className="relative z-10 p-[clamp(2rem,3vw,3rem)] flex flex-col h-full justify-between pointer-events-none">
<div className="font-mono text-[0.65rem] text-white/50">03 / Hospitality</div>
<div>
<h3 className="font-serif text-[clamp(2.5rem,4vw,4rem)] text-bg tracking-tight leading-none mb-[1rem] font-normal transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">Equinox</h3>
<p className="font-sans text-xs-fluid text-white/80 leading-[1.6] font-light opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100 max-w-[25rem]">
                                Translated the physical feeling of an exclusive retreat into a digital journey.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(6rem,12vw,12rem)] border-b border-border bg-surface relative" id="capabilities">
<div className="max-w-[clamp(90rem,95vw,120rem)] mx-auto px-container grid grid-cols-1 md:grid-cols-12 gap-[clamp(4rem,8vw,10rem)] items-start">
<div className="md:col-span-5 md:sticky top-[clamp(6rem,10vw,10rem)] fade-up">
<div className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-secondary mb-[1.5rem]">
                        Capabilities
                    </div>
<h2 className="font-serif text-h2 leading-[0.95] tracking-tighter text-primary font-normal mb-[2rem]">
                        Holistic<br/><span className="italic text-secondary">Leadership.</span>
</h2>
<p className="font-sans text-xs-fluid text-secondary leading-[1.7] font-light">
                        We don't just design logos. We build comprehensive identity systems that align every touchpoint with your core value proposition.
                    </p>
</div>

<div className="md:col-span-7 flex flex-col relative pb-[10vh]">

<div className="sticky top-[15vh] bg-bg border border-border p-[clamp(2rem,4vw,4rem)] shadow-2xl shadow-primary/5 mb-[4rem] group overflow-hidden">
<div className="line-x"></div><div className="line-y"></div>
<div className="font-mono text-[2rem] text-secondary/30 mb-[2rem] leading-none">01</div>
<h3 className="font-serif text-[clamp(2rem,3vw,3rem)] leading-[1.1] tracking-tight text-primary mb-[1rem] font-normal">Strategic Clarity</h3>
<p className="font-sans text-xs-fluid text-secondary leading-[1.7] font-light">
                            We distill complex offerings into a singular, undeniable message that resonates instantly with your ideal client.
                        </p>
</div>

<div className="sticky top-[20vh] bg-[#E8E4DB] border border-border p-[clamp(2rem,4vw,4rem)] shadow-2xl shadow-primary/5 mb-[4rem] group overflow-hidden">
<div className="line-x"></div><div className="line-y"></div>
<div className="font-mono text-[2rem] text-secondary/30 mb-[2rem] leading-none">02</div>
<h3 className="font-serif text-[clamp(2rem,3vw,3rem)] leading-[1.1] tracking-tight text-primary mb-[1rem] font-normal">Digital Experience</h3>
<p className="font-sans text-xs-fluid text-secondary leading-[1.7] font-light">
                            Websites designed to guide, not confuse. Every scroll, click, and interaction is engineered to build confidence and remove friction.
                        </p>
</div>

<div className="sticky top-[25vh] bg-primary text-bg border border-primary p-[clamp(2rem,4vw,4rem)] shadow-2xl shadow-primary/20 group overflow-hidden">
<div className="font-mono text-[2rem] text-white/30 mb-[2rem] leading-none">03</div>
<h3 className="font-serif text-[clamp(2rem,3vw,3rem)] leading-[1.1] tracking-tight text-bg mb-[1rem] font-normal">Magnetic Identity</h3>
<p className="font-sans text-xs-fluid text-white/70 leading-[1.7] font-light">
                            Typography, color theory, and visual systems that feel inevitable, premium, and inherently trustworthy.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-[clamp(8rem,16vw,16rem)] relative border-b border-border bg-primary overflow-hidden text-bg" id="contact">
<div className="max-w-[clamp(90rem,95vw,100rem)] mx-auto px-container relative z-10 fade-up">
<div className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-white/50 mb-[3rem] flex items-center gap-[1rem]">
<span className="w-[0.5rem] h-[0.5rem] bg-bg rounded-full animate-pulse"></span>
                    Accepting New Partners
                </div>
<form className="w-full">
<h2 className="font-serif text-[clamp(2rem,4.5vw,5rem)] leading-[1.6] tracking-tight text-white/90 font-normal inline-block w-full">
                        Start the conversation. <br className="hidden md:block"/> My name is 
                        <input className="mad-lib-input bg-transparent border-b border-white/30 text-center w-[clamp(12rem,20vw,25rem)] mx-[1vw] focus:outline-none focus:border-white text-bg placeholder:text-white/20 font-serif" placeholder="Jane Doe" required="" type="text"/>, 
                        you can reach me at 
                        <input className="mad-lib-input bg-transparent border-b border-white/30 text-center w-[clamp(15rem,30vw,35rem)] mx-[1vw] focus:outline-none focus:border-white text-bg placeholder:text-white/20 font-serif" placeholder="email@domain.com" required="" type="email"/>. 
                        We are looking to elevate our brand and need help with 
                        <input className="mad-lib-input bg-transparent border-b border-white/30 text-center w-[clamp(20rem,40vw,50rem)] mx-[1vw] focus:outline-none focus:border-white text-bg placeholder:text-white/20 font-serif" placeholder="your current challenge..." required="" type="text"/>.
                    </h2>
<div className="mt-[clamp(4rem,8vw,8rem)] flex flex-col md:flex-row items-start md:items-center justify-between gap-[3rem] border-t border-white/10 pt-[3rem]">
<div className="flex flex-col sm:flex-row gap-[3rem]">
<div>
<span className="block font-mono text-[0.65rem] uppercase tracking-[0.15em] text-white/40 mb-[0.5rem]">Direct Inquiry</span>
<a className="font-sans text-xs-fluid text-bg hover:text-white/70 transition-colors font-light" href="mailto:hello@aura.com">hello@aura.com</a>
</div>
<div>
<span className="block font-mono text-[0.65rem] uppercase tracking-[0.15em] text-white/40 mb-[0.5rem]">Global Office</span>
<span className="font-sans text-xs-fluid text-bg font-light">New York City, NY</span>
</div>
</div>
<button className="py-[1.25rem] px-[3rem] bg-bg text-primary font-mono text-[0.65rem] tracking-[0.15em] uppercase hover:bg-surface transition-colors duration-300 rounded-full flex items-center gap-[1rem] group/btn" type="submit">
<span>Submit Request</span>
<iconify-icon className="text-[1.2rem] transform transition-transform duration-500 group-hover/btn:translate-x-2" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</form>
</div>
</section>
</main>

<footer className="bg-primary text-bg relative z-10 border-t border-white/5 overflow-hidden">
<div className="w-full border-b border-white/10">
<h2 className="font-serif text-[clamp(8rem,25vw,30rem)] leading-[0.75] tracking-tighter text-bg text-center py-[clamp(2rem,5vw,5rem)] select-none font-normal uppercase">
                AURA
            </h2>
</div>
<div className="max-w-[clamp(90rem,95vw,140rem)] mx-auto px-container grid grid-cols-1 md:grid-cols-12 gap-[clamp(3rem,6vw,5rem)] py-[clamp(4rem,8vw,6rem)] relative z-10">
<div className="md:col-span-4 flex flex-col justify-between">
<p className="font-sans text-xs-fluid text-white/60 max-w-[20rem] leading-[1.6] font-light">
                    Building visual identities that command respect and turn skepticism into immediate trust.
                </p>
</div>
<div className="md:col-span-2 md:col-start-7 flex flex-col gap-[1rem] font-sans text-xs-fluid text-white/60 font-light">
<span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-bg mb-[0.5rem]">Navigation</span>
<a className="hover:text-bg transition-colors" href="#work">Selected Work</a>
<a className="hover:text-bg transition-colors" href="#philosophy">Our Approach</a>
<a className="hover:text-bg transition-colors" href="#capabilities">Capabilities</a>
<a className="hover:text-bg transition-colors" href="#contact">Contact Us</a>
</div>
<div className="md:col-span-2 flex flex-col gap-[1rem] font-sans text-xs-fluid text-white/60 font-light">
<span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-bg mb-[0.5rem]">Socials</span>
<a className="hover:text-bg transition-colors" href="#">Instagram</a>
<a className="hover:text-bg transition-colors" href="#">LinkedIn</a>
<a className="hover:text-bg transition-colors" href="#">Twitter</a>
</div>
<div className="md:col-span-2 flex flex-col gap-[1rem] font-sans text-xs-fluid text-white/60 font-light">
<span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-bg mb-[0.5rem]">Legal</span>
<a className="hover:text-bg transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-bg transition-colors" href="#">Terms of Service</a>
</div>
</div>
<div className="px-container py-[2rem] border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-[1rem] font-mono text-[0.55rem] uppercase tracking-[0.15em] text-white/30 w-full bg-[#050505]">
<span>© 2024 Aura Identity Architecture.</span>
<span>All rights reserved.</span>
</div>
</footer>


    </>
  );
}
