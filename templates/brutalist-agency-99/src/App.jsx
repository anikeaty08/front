import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Custom Cursor Logic
        const cursorDot = document.getElementById('cursor-dot');
        const cursorBrackets = document.getElementById('cursor-brackets');
        let mouseX = 0, mouseY = 0;
        let dotX = 0, dotY = 0;
        let bracketX = 0, bracketY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Add hover effects to interactive elements
        const interactives = document.querySelectorAll('.interactive, a, button');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('hovering-interactive'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('hovering-interactive'));
        });

        // Animation Loop for Cursor Smoothness
        function animateCursor() {
            // Dot follows instantly/closely
            dotX += (mouseX - dotX) * 0.2;
            dotY += (mouseY - dotY) * 0.2;
            cursorDot.style.transform = `translate(calc(${dotX}px - 50%), calc(${dotY}px - 50%))`;

            // Brackets lag slightly
            bracketX += (mouseX - bracketX) * 0.1;
            bracketY += (mouseY - bracketY) * 0.1;
            cursorBrackets.style.transform = `translate(calc(${bracketX}px - 50%), calc(${bracketY}px - 50%))`;

            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // WebGL / Canvas Flickering Autofocus Grid
        const canvas = document.getElementById('gl-canvas');
        const ctx = canvas.getContext('2d', { alpha: false });
        let width, height;
        let particles = [];
        const spacing = 40;

        function resizeCanvas() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initGrid();
        }

        function initGrid() {
            particles = [];
            for (let x = 0; x < width; x += spacing) {
                for (let y = 0; y < height; y += spacing) {
                    particles.push({
                        x: x,
                        y: y,
                        baseX: x,
                        baseY: y,
                        opacity: Math.random() * 0.3,
                        phase: Math.random() * Math.PI * 2
                    });
                }
            }
        }

        function drawGrid(time) {
            ctx.fillStyle = '#030303'; // Match bg var
            ctx.fillRect(0, 0, width, height);
            
            ctx.fillStyle = '#666666';
            
            particles.forEach(p => {
                // Calculate distance to mouse
                const dx = mouseX - p.baseX;
                const dy = mouseY - p.baseY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                // Magnetic distortion
                const maxDist = 150;
                let offsetX = 0, offsetY = 0;
                let activeOpacity = p.opacity;

                if (dist < maxDist) {
                    const force = (maxDist - dist) / maxDist;
                    // Push away slightly
                    offsetX = (dx / dist) * force * -10;
                    offsetY = (dy / dist) * force * -10;
                    // Illuminate
                    activeOpacity = 0.8;
                    ctx.fillStyle = '#FF3300';
                } else {
                    // Flicker effect based on time
                    activeOpacity = p.opacity + Math.sin(time * 0.002 + p.phase) * 0.1;
                    if(activeOpacity < 0) activeOpacity = 0;
                    ctx.fillStyle = `rgba(102, 102, 102, ${activeOpacity})`;
                }

                // Draw tiny crosshair/dot
                ctx.beginPath();
                if (dist < maxDist && Math.random() > 0.8) {
                    // Draw tiny crosshair for activated ones
                    ctx.fillRect(p.baseX + offsetX - 2, p.baseY + offsetY, 5, 1);
                    ctx.fillRect(p.baseX + offsetX, p.baseY + offsetY - 2, 1, 5);
                } else {
                    // Normal dot
                    ctx.fillRect(p.baseX + offsetX, p.baseY + offsetY, 1, 1);
                }
            });
            
            requestAnimationFrame(drawGrid);
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        requestAnimationFrame(drawGrid);

        // Intersection Observer for Clip-Path Reveals
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.clip-reveal').forEach(el => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-overlay"></div>
<canvas id="gl-canvas"></canvas>

<div id="cursor-dot"></div>
<div id="cursor-brackets"></div>

<nav className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-6 flex justify-between items-center pointer-events-none">
<div className="flex items-center gap-3 pointer-events-auto interactive">
<svg className="w-6 h-6 animate-shutter text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<polygon points="12 2 22 8.5 22 20 12 22 2 20 2 8.5" strokeLinejoin="bevel"></polygon>
<polygon opacity="0.5" points="12 6 18 10 18 16 12 18 6 16 6 10" strokeLinejoin="bevel"></polygon>
<line x1="12" x2="12" y1="2" y2="10"></line>
<line x1="22" x2="16" y1="20" y2="16"></line>
<line x1="2" x2="8" y1="20" y2="16"></line>
</svg>
<span className="font-display uppercase tracking-widest text-lg">LUXRA</span>
</div>
<div className="hidden md:flex gap-8 font-mono text-xs tracking-widest text-[#666666] pointer-events-auto">
<a className="hover:text-white transition-colors interactive" href="#protocol">PROTOCOL</a>
<a className="hover:text-white transition-colors interactive" href="#systems">SYSTEMS</a>
<a className="text-[#FF3300] hover:text-white transition-colors interactive" href="#engage">[ INITIATE ]</a>
</div>
</nav>
<main className="relative z-10 w-full">

<section className="min-h-screen w-full flex flex-col justify-end px-4 md:px-8 pb-12 pt-32 relative">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end h-full w-full">
<div className="lg:col-span-8 flex flex-col z-20">
<div className="font-mono text-xs text-[#666666] tracking-widest mb-6 border border-[#666666]/30 px-3 py-1 w-max">
                        [ SEC: 01 | SYS: ACTIVE | OPTICS: PRIME ]
                    </div>
<h1 className="font-display text-fluid-title uppercase tracking-tight text-white m-0">
                        Dominate <br/>
<span className="text-[#FF3300]">Visuals.</span>
</h1>
</div>
<div className="lg:col-span-4 flex flex-col justify-end pb-4 z-20">
<p className="font-mono text-xs text-[#666666] tracking-widest leading-relaxed mb-8 uppercase max-w-sm">
                        A ruthless collision of avant-garde architecture and high-performance acquisition. Capture attention. Drive revenue.
                    </p>
<button className="interactive group relative w-full border border-[#666666]/30 bg-[#0D0D0D] py-4 px-6 overflow-hidden flex justify-between items-center text-left">
<div className="absolute inset-0 bg-[#FF3300] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
<span className="font-mono text-xs tracking-widest z-10 group-hover:text-black transition-colors duration-300">ENGAGE PROTOCOL</span>
<iconify-icon className="text-xl z-10 group-hover:text-black transition-colors duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="absolute top-1/4 right-0 lg:right-1/4 w-[80vw] lg:w-[40vw] h-[50vh] lg:h-[70vh] z-10 opacity-60 mix-blend-luminosity">
<img alt="Abstract geometric architecture" className="w-full h-full object-cover clip-reveal grayscale" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<div className="w-full h-px bg-[#666666]/20"></div>

<section className="py-24 px-4 md:px-8" id="protocol">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-grid border-b pb-24">
<div className="md:col-span-4 flex flex-col justify-between">
<div className="font-mono text-xs text-[#FF3300] tracking-widest mb-12">
                        [ LENS: 50MM | APERTURE: F/1.4 ]
                    </div>
<h2 className="font-display text-4xl md:text-6xl tracking-tight uppercase leading-none">
                        Structural <br/>Integrity.
                    </h2>
</div>
<div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 pt-12 md:pt-0">
<div className="flex flex-col gap-4">
<div className="h-px w-full bg-[#666666]/30"></div>
<h3 className="font-sans text-sm tracking-widest text-[#666666] uppercase">01. Cognitive Load</h3>
<p className="text-fluid-body text-gray-300">
                            We architect high-density information arrays that demand focus. By stripping away extraneous ornamentation, we construct brutalist environments optimized purely for high-ticket conversion and absolute user retention.
                        </p>
</div>
<div className="flex flex-col gap-4">
<div className="h-px w-full bg-[#666666]/30"></div>
<h3 className="font-sans text-sm tracking-widest text-[#666666] uppercase">02. Kinetic Friction</h3>
<p className="text-fluid-body text-gray-300">
                            Micro-interactions are deployed tactically, not passively. Every state change, every cursor movement is a calculated friction point designed to anchor the user within the engineered matrix of your brand's narrative.
                        </p>
</div>
</div>
</div>
</section>

<section className="w-full" id="systems">
<div className="font-mono text-xs text-[#666666] tracking-widest px-4 md:px-8 py-4 border-b border-[#666666]/20 bg-[#0D0D0D]">
                [ MODULES: ENGAGED | STATUS: OPTIMAL ]
            </div>
<div className="grid grid-cols-1 md:grid-cols-3 w-full border-b border-[#666666]/20">

<div className="group relative p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#666666]/20 bg-[#030303] hover:bg-[#0D0D0D] transition-colors duration-500 interactive">
<div className="absolute top-8 right-8 text-[#666666] group-hover:text-[#FF3300] transition-colors">
<iconify-icon height="24" icon="solar:target-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="mt-16 flex flex-col gap-6">
<h4 className="font-display text-2xl tracking-tight uppercase">Precision Targeting</h4>
<p className="font-mono text-xs text-[#666666] leading-relaxed">
                            Algorithmic displacement of standard UI tropes. We aim directly at the physiological response, triggering engagement through severe contrast and structural typography.
                        </p>
</div>
</div>

<div className="group relative p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#666666]/20 bg-[#0D0D0D] hover:bg-[#030303] transition-colors duration-500 interactive">
<div className="absolute top-8 right-8 text-[#666666] group-hover:text-[#FF3300] transition-colors">
<iconify-icon height="24" icon="solar:camera-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="mt-16 flex flex-col gap-6">
<h4 className="font-display text-2xl tracking-tight uppercase">High-Fidelity Optics</h4>
<p className="font-mono text-xs text-[#666666] leading-relaxed">
                            Raw, unfiltered visual assets presented with uncompromising sharpness. Every pixel is calibrated to convey absolute authority and technical dominance.
                        </p>
</div>
</div>

<div className="group relative p-8 md:p-12 bg-[#030303] hover:bg-[#0D0D0D] transition-colors duration-500 interactive">
<div className="absolute top-8 right-8 text-[#666666] group-hover:text-[#FF3300] transition-colors">
<iconify-icon height="24" icon="solar:chart-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="mt-16 flex flex-col gap-6">
<h4 className="font-display text-2xl tracking-tight uppercase">Conversion Velocity</h4>
<p className="font-mono text-xs text-[#666666] leading-relaxed">
                            Aesthetics serving mechanics. The brutalist architecture exists solely to funnel attention downward, compressing the timeline from initial impression to final transaction.
                        </p>
</div>
</div>
</div>
</section>

<section className="w-full p-4 md:p-8 py-24">
<div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden group interactive">
<img alt="Technical hardware detail" className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out clip-reveal" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 border border-[#666666]/30 pointer-events-none"></div>
<div className="absolute bottom-6 left-6 flex flex-col gap-1 bg-[#030303]/80 p-3 backdrop-blur-sm">
<span className="font-mono text-xs text-[#FF3300] tracking-widest">[ ASSET: 042-ALPHA ]</span>
<span className="font-mono text-xs text-white tracking-widest">RENDER_NODE_01</span>
</div>
</div>
</section>

<section className="w-full bg-[#FF3300] py-32 px-4 md:px-8 text-black flex flex-col items-center justify-center text-center interactive cursor-target" id="engage">
<div className="font-mono text-xs tracking-widest mb-8 border border-black/30 px-4 py-1">
                [ TERMINAL NODE ]
            </div>
<h2 className="font-display text-fluid-title uppercase tracking-tight leading-none mb-12 hover:tracking-normal transition-all duration-700 cursor-pointer">
                Execute.
            </h2>
<button className="font-mono text-sm tracking-widest border border-black px-12 py-4 hover:bg-black hover:text-white transition-colors duration-300">
                ESTABLISH CONNECTION
            </button>
</section>
</main>

<footer className="w-full bg-[#030303] pt-24 pb-12 px-4 md:px-8 border-t border-[#666666]/20">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3">
<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<polygon points="12 2 22 8.5 22 20 12 22 2 20 2 8.5" strokeLinejoin="bevel"></polygon>
<line x1="12" x2="12" y1="2" y2="10"></line>
<line x1="22" x2="16" y1="20" y2="16"></line>
<line x1="2" x2="8" y1="20" y2="16"></line>
</svg>
<span className="font-display text-4xl tracking-tight uppercase">LUXRA</span>
</div>
<p className="font-mono text-xs text-[#666666] tracking-widest max-w-xs">
                    HIGH-TECH EDITORIAL BRUTALISM. <br/> ENGINEERED FOR DOMINANCE.
                </p>
</div>
<div className="flex gap-12 font-mono text-xs tracking-widest text-[#666666]">
<div className="flex flex-col gap-3">
<span className="text-white mb-2">INDEX</span>
<a className="hover:text-[#FF3300] transition-colors interactive" href="#">WORK</a>
<a className="hover:text-[#FF3300] transition-colors interactive" href="#">AGENCY</a>
<a className="hover:text-[#FF3300] transition-colors interactive" href="#">CONTACT</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-white mb-2">SOCIAL</span>
<a className="hover:text-[#FF3300] transition-colors interactive" href="#">TWITTER</a>
<a className="hover:text-[#FF3300] transition-colors interactive" href="#">INSTAGRAM</a>
<a className="hover:text-[#FF3300] transition-colors interactive" href="#">LINKEDIN</a>
</div>
</div>
</div>
<div className="mt-24 pt-8 border-t border-[#666666]/20 flex flex-col md:flex-row justify-between font-mono text-xs text-[#666666] tracking-widest">
<span>© 2024 LUXRA. ALL RIGHTS RESERVED.</span>
<span>[ SYS_VER: 1.0.4 ]</span>
</div>
</footer>


    </>
  );
}
