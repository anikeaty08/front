import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Loader Script
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            const loaderText = document.getElementById('loader-text');
            const loaderBar = document.getElementById('loader-bar');
            
            // Start bar animation
            setTimeout(() => { loaderBar.style.width = '100%'; }, 100);

            const steps = [
                "> CHECKING MINERAL STATUS...",
                "> VERIFYING BILE FLOW...",
                "> OPTIMIZATION COMPLETE."
            ];

            let stepIndex = 0;
            const interval = setInterval(() => {
                if (stepIndex < steps.length) {
                    loaderText.innerText = steps[stepIndex];
                    stepIndex++;
                } else {
                    clearInterval(interval);
                    setTimeout(() => {
                        loader.classList.add('loader-hidden');
                        initScrollAnimations();
                    }, 500);
                }
            }, 600);
        });

        // Custom Cursor Logic
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');
        
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            // Dot follows instantly
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Outline follows with slight delay (animation in CSS transition handles smoothness)
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Add hover effect to interactive elements
        const clickables = document.querySelectorAll('a, button, .cursor-crosshair');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', () => cursorOutline.classList.add('hovered'));
            el.addEventListener('mouseleave', () => cursorOutline.classList.remove('hovered'));
        });

        // Scroll Animations (Simple Intersection Observer)
        function initScrollAnimations() {
            const elements = document.querySelectorAll('.reveal-text, .reveal-on-scroll');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // For generic fade-ins
                        if(entry.target.classList.contains('reveal-on-scroll')) {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }
                    }
                });
            }, { threshold: 0.1 });

            elements.forEach(el => {
                // Initial styles for scroll elements
                if(el.classList.contains('reveal-on-scroll')) {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(30px)';
                    el.style.transition = 'all 1s ease-out';
                }
                observer.observe(el);
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="cursor-dot hidden md:block"></div>
<div className="cursor-outline hidden md:block"></div>

<div className="noise-overlay"></div>

<div id="loader">
<div className="font-mono text-xs md:text-sm text-[#00FF94]">
<div className="mb-2" id="loader-text">&gt; INITIALIZING BIOS...</div>
<div className="w-48 h-1 bg-zinc-900 overflow-hidden">
<div className="h-full bg-[#00FF94] w-0 transition-all duration-[2000ms] ease-linear" id="loader-bar"></div>
</div>
</div>
</div>

<nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 mix-blend-difference flex justify-between items-start pointer-events-none">

<a className="pointer-events-auto group" href="#">
<div className="text-2xl font-bold tracking-tighter leading-none group-hover:text-[#00FF94] transition-colors">NØUR</div>
<div className="text-[9px] font-mono text-zinc-500 tracking-[0.2em] group-hover:text-white transition-colors">LABS_INC</div>
</a>

<div className="pointer-events-auto hidden md:flex gap-1 bg-[#050505]/80 backdrop-blur-md border border-zinc-800 p-1 rounded-sm">
<button className="px-6 py-2 text-[10px] font-mono hover:bg-zinc-800 hover:text-white text-zinc-400 transition-all uppercase tracking-widest border border-transparent hover:border-zinc-700">
                [01: LOGIC]
            </button>
<button className="px-6 py-2 text-[10px] font-mono hover:bg-zinc-800 hover:text-white text-zinc-400 transition-all uppercase tracking-widest border border-transparent hover:border-zinc-700">
                [02: SYSTEM]
            </button>
<button className="px-6 py-2 text-[10px] font-mono bg-zinc-100 text-black hover:bg-[#00FF94] hover:text-black transition-all uppercase tracking-widest font-bold">
                [03: SHOP]
            </button>
</div>

<button className="pointer-events-auto text-white hover:text-[#00FF94] transition-colors flex items-center gap-2 group">
<span className="text-[10px] font-mono hidden md:block group-hover:opacity-100 opacity-50">CART(0)</span>
<iconify-icon icon="solar:bag-linear" width="20"></iconify-icon>
</button>
</nav>

<section className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center">

<div className="absolute inset-0 z-0">
<video autoplay="" className="w-full h-full object-cover opacity-40 grayscale contrast-125 brightness-75 scale-110" loop="" muted="" playsinline="">
<source src="https://videos.pexels.com/video-files/2715412/2715412-uhd_2560_1440_30fps.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505]"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_90%)]"></div>
</div>

<div className="relative z-10 text-center px-4 max-w-7xl mx-auto mt-16">
<div className="reveal-text overflow-hidden mb-6">
<div className="inline-flex items-center gap-2 border border-[#00FF94]/30 bg-[#00FF94]/5 px-3 py-1 rounded-full backdrop-blur-sm">
<span className="w-1.5 h-1.5 bg-[#00FF94] animate-pulse rounded-full"></span>
<span className="text-[10px] font-mono text-[#00FF94] tracking-widest uppercase">System Operational</span>
</div>
</div>
<h1 className="text-5xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[0.9] mb-8 mix-blend-screen">
<div className="reveal-text reveal-delay-100">DETOX IS</div>
<div className="reveal-text reveal-delay-200 text-zinc-500">BIOLOGY.</div>
<div className="reveal-text reveal-delay-300">NOT MAGIC.</div>
</h1>
<p className="reveal-text reveal-delay-300 max-w-lg mx-auto text-xs md:text-sm font-mono text-zinc-400 leading-relaxed uppercase tracking-wider border-l border-[#00FF94] pl-4 text-left md:border-l-0 md:text-center md:pl-0">
                Optimization of Phase I &amp; II Hepatic Pathways.<br/>
<span className="text-white">Mobilization ≠ Elimination.</span>
</p>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-[9px] font-mono uppercase tracking-widest">Scroll to Initiate</span>
<iconify-icon icon="solar:arrow-down-linear" width="16"></iconify-icon>
</div>
</section>

<section className="py-32 px-6 border-t border-zinc-900 bg-[#050505] relative overflow-hidden">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00FF94] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="reveal-on-scroll">
<div className="text-[#00FF94] text-[10px] font-mono uppercase tracking-widest mb-6 border-l border-[#00FF94] pl-3">
                    01 // The Pathology
                </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 leading-none">
                    The Silent <br/>
<span className="text-zinc-600">Bottleneck.</span>
</h2>
<div className="space-y-6 text-sm text-zinc-400 leading-relaxed max-w-md">
<p>
                        Most detox protocols fail because they focus on <span className="text-white">mobilization</span> (pulling toxins from tissues) without ensuring <span className="text-white">elimination</span>.
                    </p>
<p>
                        Without a clear exit pathway, mobilized toxins re-enter the bloodstream through the enterohepatic loop. This is known as <span className="text-[#00FF94]">Toxic Re-circulation</span>.
                    </p>
</div>

<div className="mt-12 p-4 border border-zinc-800 bg-zinc-900/30 flex items-center justify-between font-mono text-xs">
<span className="text-zinc-500">LIVER_LOAD_INDEX</span>
<div className="w-32 h-1 bg-zinc-800 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-red-500 w-[85%] animate-pulse"></div>
</div>
<span className="text-red-500">CRITICAL</span>
</div>
</div>

<div className="relative h-[400px] border border-zinc-800 bg-zinc-900/10 flex flex-col items-center justify-center reveal-on-scroll group hover:border-[#00FF94]/30 transition-colors duration-500">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

<div className="relative z-10 flex flex-col items-center">

<div className="w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-t-[100px] border-t-zinc-700 opacity-80 mb-1"></div>

<div className="w-4 h-16 bg-zinc-800 border border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.2)] relative overflow-hidden">

<div className="absolute bottom-0 left-0 w-full bg-red-500/80 transition-all duration-1000 h-[80%] animate-pulse"></div>
</div>

<div className="absolute top-0 -right-24 text-[9px] font-mono text-zinc-500">
                        INPUT: MOBILIZED<br/>METALS/MOLD
                    </div>
<div className="absolute bottom-8 -left-32 text-[9px] font-mono text-red-500 text-right">
                        ERROR: PATHWAY_BLOCKED<br/>RE-ABSORPTION ACTIVE
                    </div>
</div>

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/4 left-1/3 w-1 h-1 bg-white rounded-full opacity-50 animate-ping"></div>
<div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full opacity-30 animate-ping" style={{animationDelay: '0.5s'}}></div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-zinc-800 bg-[#050505] relative">
<div className="max-w-7xl mx-auto">
<div className="mb-24 text-center">
<h2 className="text-3xl md:text-4xl font-medium uppercase tracking-tight mb-4">The NØUR Protocol</h2>
<div className="h-px w-24 bg-[#00FF94] mx-auto"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-zinc-800 divide-y md:divide-y-0 md:divide-x divide-zinc-800">

<div className="group p-8 md:p-12 relative bg-zinc-900/5 hover:bg-zinc-900/20 transition-all duration-500 cursor-crosshair">
<div className="absolute top-6 right-6 text-zinc-700 font-mono text-xs group-hover:text-[#00FF94] transition-colors">01</div>
<div className="h-32 flex items-center justify-center mb-8 opacity-60 group-hover:opacity-100 transition-opacity">

<div className="w-16 h-16 border border-zinc-600 rotate-45 group-hover:border-[#00FF94] group-hover:rotate-0 transition-all duration-700"></div>
</div>
<h3 className="text-xl font-medium uppercase tracking-widest mb-2">Primer</h3>
<p className="text-[10px] font-mono text-[#00FF94] mb-4">TARGET: GUT_WALL + MINERALS</p>
<p className="text-xs text-zinc-500 leading-relaxed">
                        Establishing the biological foundation. Remineralization of the extracellular matrix to prevent electrolyte crash during excretion.
                    </p>
</div>

<div className="group p-8 md:p-12 relative bg-zinc-900/5 hover:bg-zinc-900/20 transition-all duration-500 cursor-crosshair">
<div className="absolute top-6 right-6 text-zinc-700 font-mono text-xs group-hover:text-[#00FF94] transition-colors">02</div>
<div className="h-32 flex items-center justify-center mb-8 opacity-60 group-hover:opacity-100 transition-opacity">

<div className="w-1 h-20 bg-zinc-700 relative overflow-hidden group-hover:bg-zinc-800">
<div className="absolute top-0 left-0 w-full h-1/2 bg-[#00FF94] -translate-y-full group-hover:translate-y-[200%] transition-transform duration-1000 ease-linear loop"></div>
</div>
</div>
<h3 className="text-xl font-medium uppercase tracking-widest mb-2">Flow</h3>
<p className="text-[10px] font-mono text-[#00FF94] mb-4">TARGET: BILE_VELOCITY</p>
<p className="text-xs text-zinc-500 leading-relaxed">
                        Upregulating Nrf2 pathways to thin bile viscosity. Turning the "blocked funnel" into a high-velocity drainage system.
                    </p>
</div>

<div className="group p-8 md:p-12 relative bg-zinc-900/5 hover:bg-zinc-900/20 transition-all duration-500 cursor-crosshair">
<div className="absolute top-6 right-6 text-zinc-700 font-mono text-xs group-hover:text-[#00FF94] transition-colors">03</div>
<div className="h-32 flex items-center justify-center mb-8 opacity-60 group-hover:opacity-100 transition-opacity">

<div className="w-16 h-16 rounded-full border border-dashed border-zinc-600 group-hover:border-solid group-hover:border-[#00FF94] group-hover:scale-110 transition-all duration-500 flex items-center justify-center">
<div className="w-2 h-2 bg-zinc-500 rounded-full group-hover:bg-white"></div>
</div>
</div>
<h3 className="text-xl font-medium uppercase tracking-widest mb-2">Capture</h3>
<p className="text-[10px] font-mono text-[#00FF94] mb-4">TARGET: LUMEN_BINDING</p>
<p className="text-xs text-zinc-500 leading-relaxed">
                        Selectively permeable binders catch toxins in the GI tract, preventing re-circulation and ensuring final elimination.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-zinc-800 bg-[#050505]">
<div className="max-w-7xl mx-auto">

<div className="group grid grid-cols-1 lg:grid-cols-12 border border-zinc-800 mb-8 bg-zinc-900/10 hover:border-zinc-600 transition-colors duration-500">

<div className="lg:col-span-5 h-[400px] bg-[#080808] relative overflow-hidden flex items-center justify-center border-b lg:border-b-0 lg:border-r border-zinc-800">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.1)_0%,transparent_70%)]"></div>

<div className="w-32 h-64 border border-zinc-700 bg-zinc-900/80 backdrop-blur-sm rounded-sm animate-float flex flex-col items-center justify-center shadow-2xl relative z-10 group-hover:border-[#00FF94]/50 transition-colors">
<div className="w-24 h-40 border-t border-b border-zinc-800 flex items-center justify-center">
<span className="text-2xl font-bold tracking-tighter text-white rotate-90 whitespace-nowrap">NØ.01</span>
</div>
<div className="absolute bottom-4 text-[9px] font-mono text-zinc-500">500mg</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#00FF94] blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
</div>

<div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-6">
<h3 className="text-3xl font-medium uppercase tracking-tight">Cellular <br/>Primer</h3>
<span className="text-lg font-mono text-[#00FF94]">$65.00</span>
</div>
<p className="text-sm text-zinc-400 mb-8 font-mono max-w-md">
                            Full-spectrum electrolyte matrix with fulvic acid delivery system. Prepares the cellular terrain for heavy metal mobilization.
                        </p>

<div className="grid grid-cols-2 gap-4 mb-12">
<div className="p-3 bg-[#050505] border border-zinc-800">
<div className="text-[9px] text-zinc-500 uppercase font-mono mb-1">Active Half-Life</div>
<div className="text-xs text-white font-mono">6.4 HOURS</div>
</div>
<div className="p-3 bg-[#050505] border border-zinc-800">
<div className="text-[9px] text-zinc-500 uppercase font-mono mb-1">Molecular Target</div>
<div className="text-xs text-white font-mono">MITOCHONDRIA</div>
</div>
<div className="col-span-2 p-3 bg-[#050505] border border-zinc-800">
<div className="text-[9px] text-zinc-500 uppercase font-mono mb-1">Dosage Logic</div>
<div className="text-xs text-white font-mono">&gt; 2 CAPSULES // MORNING FASTED STATE</div>
</div>
</div>
</div>
<button className="w-full py-4 bg-white text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#00FF94] transition-colors flex items-center justify-center gap-3 group/btn">
                        Initiate Protocol
                        <iconify-icon className="group-hover/btn:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="group grid grid-cols-1 lg:grid-cols-12 border border-zinc-800 bg-zinc-900/10 hover:border-zinc-600 transition-colors duration-500">

<div className="lg:col-span-5 h-[400px] bg-[#080808] relative overflow-hidden flex items-center justify-center border-b lg:border-b-0 lg:border-r border-zinc-800">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.1)_0%,transparent_70%)]"></div>
<div className="w-32 h-64 border border-zinc-700 bg-zinc-900/80 backdrop-blur-sm rounded-sm animate-float-delayed flex flex-col items-center justify-center shadow-2xl relative z-10 group-hover:border-[#00FF94]/50 transition-colors">
<div className="w-24 h-40 border-t border-b border-zinc-800 flex items-center justify-center">
<span className="text-2xl font-bold tracking-tighter text-white rotate-90 whitespace-nowrap">NØ.02</span>
</div>
</div>
</div>

<div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-6">
<h3 className="text-3xl font-medium uppercase tracking-tight">Phase II <br/>Binder</h3>
<span className="text-lg font-mono text-[#00FF94]">$85.00</span>
</div>
<p className="text-sm text-zinc-400 mb-8 font-mono max-w-md">
                            Zeolite-Clinoptilolite framework. High-affinity capture of mobilized mycotoxins and heavy metals in the lumen.
                        </p>

<div className="grid grid-cols-2 gap-4 mb-12">
<div className="p-3 bg-[#050505] border border-zinc-800">
<div className="text-[9px] text-zinc-500 uppercase font-mono mb-1">Binding Capacity</div>
<div className="text-xs text-white font-mono">HIGH-YIELD</div>
</div>
<div className="p-3 bg-[#050505] border border-zinc-800">
<div className="text-[9px] text-zinc-500 uppercase font-mono mb-1">Particle Size</div>
<div className="text-xs text-white font-mono">0.4 MICRONS</div>
</div>
</div>
</div>
<button className="w-full py-4 bg-zinc-900 border border-zinc-800 text-white font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#00FF94] hover:text-black hover:border-[#00FF94] transition-all flex items-center justify-center gap-3">
                        Initiate Protocol
                    </button>
</div>
</div>
</div>
</section>

<footer className="border-t border-zinc-800 bg-[#020202] pt-24 pb-12 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
<div className="col-span-1 md:col-span-2">
<h2 className="text-6xl font-bold tracking-tighter mb-8 text-[#00FF94] mix-blend-difference">NØUR</h2>
<p className="text-xs font-mono text-zinc-500 max-w-xs leading-relaxed uppercase">
                        Advanced biological optimization systems. <br/>
                        Engineered in Helsinki, Finland.
                    </p>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">System</h4>
<a className="text-sm hover:text-[#00FF94] transition-colors" href="#">Protocol Logic</a>
<a className="text-sm hover:text-[#00FF94] transition-colors" href="#">Ingredients</a>
<a className="text-sm hover:text-[#00FF94] transition-colors" href="#">Clinical Data</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Legal</h4>
<a className="text-sm hover:text-[#00FF94] transition-colors" href="#">Privacy Policy</a>
<a className="text-sm hover:text-[#00FF94] transition-colors" href="#">Terms of Use</a>
<a className="text-sm hover:text-[#00FF94] transition-colors" href="#">Disclaimer</a>
</div>
</div>

<div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-end md:items-center gap-4 text-[10px] font-mono text-zinc-600 uppercase tracking-wider">
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-[#00FF94] rounded-full animate-pulse"></span>
<span>System Status: Online</span>
</div>
<div>
                    COORDINATES: 60.1699° N, 24.9384° E
                </div>
<div>
                    © 2024 NØUR LABS INC.
                </div>
</div>
</div>
</footer>


    </>
  );
}
