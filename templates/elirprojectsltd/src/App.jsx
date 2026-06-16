import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Inter"', 'sans-serif'],
display: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
// Updated to match the Elir Projects Logo (Blue/Purple/Cyan)
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
400: '#38bdf8', // Cyan
500: '#0ea5e9', // Sky
600: '#0284c7',
700: '#4f46e5', // Indigo/Purple mix
900: '#1e1b4b',
950: '#020617', // Deep background
}
},
animation: {
'float': 'float 8s ease-in-out infinite',
'float-delayed': 'float 8s ease-in-out 4s infinite',
'float-slow': 'float 10s ease-in-out 2s infinite',
'pulse-glow': 'pulse-glow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'shimmer': 'shimmer 2.5s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
'33%': { transform: 'translateY(-15px) rotate(2deg)' },
'66%': { transform: 'translateY(10px) rotate(-1deg)' },
},
'pulse-glow': {
'0%, 100%': { opacity: '0.5' },
'50%': { opacity: '1' },
},
shimmer: {
'0%': { backgroundPosition: '-200% 0' },
'100%': { backgroundPosition: '200% 0' }
}
}
}
}
}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        // Initialize Icons
        lucide.createIcons();

        // Reveal on Scroll Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => {
            observer.observe(el);
        });

        // Simple Chart Animation Trigger
        const chartObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = document.getElementById('bar-anim');
                    if(bar) bar.style.width = '23%'; 
                }
            });
        });
        
        const chartEl = document.getElementById('bar-anim');
        if(chartEl) chartObserver.observe(chartEl.parentElement);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 brightness-150 blur-sm" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="4OF29NF3HVBYQsrwPvVq"></div>

</div></div>

<div className="bg-noise"></div>

<div className="fixed top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none z-0 bg-cyan-900/20"></div>
<div className="fixed bottom-[-10%] right-[10%] w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none z-0 bg-blue-900/10"></div>

<header className="fixed top-0 w-full z-50 transition-all duration-300 border-b backdrop-blur-md border-white/5 bg-black/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-3 group cursor-pointer">

<div className="relative w-8 h-8 flex items-center justify-center">
<i className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-tr to-blue-500 absolute z-10 from-neutral-400" data-lucide="flask-conical"></i>
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-500/20 to-blue-500/20 blur-md rounded-full"></div>
</div>
<span className="font-display font-semibold text-lg tracking-tight group-hover:text-neutral-200 transition-colors uppercase text-white">ELIR PROJECTS</span>
</div>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium transition-colors text-white/60 hover:text-white" href="#research">Research</a>
<a className="text-sm font-medium transition-colors text-white/60 hover:text-white" href="#data">Data</a>
<a className="text-sm font-medium transition-colors text-white/60 hover:text-white" href="#applications">Applications</a>
<a className="text-sm font-medium transition-colors text-white/60 hover:text-white" href="#faq">FAQ</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/20 focus:ring-offset-black text-black bg-white hover:bg-neutral-50" href="#presale">
                    Join Presale
                </a>

<button className="md:hidden text-white/70 hover:text-white" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="hidden md:hidden absolute top-16 left-0 w-full border-b p-6 flex flex-col gap-4 shadow-2xl bg-indigo-950 border-white/10" id="mobile-menu">
<a className="block py-2 text-white/70 hover:text-white" href="#research">Research</a>
<a className="block py-2 text-white/70 hover:text-white" href="#data">Data</a>
<a className="block py-2 text-white/70 hover:text-white" href="#applications">Applications</a>
<a className="text-center w-full py-3 mt-2 font-semibold rounded-lg bg-white text-black" href="#presale">Join Presale</a>
</div>
</header>
<main className="relative z-10 pt-24 pb-12 overflow-hidden">

<section className="relative max-w-7xl mx-auto px-6 min-h-[85vh] flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

<div className="flex-1 text-center lg:text-left z-20 reveal-on-scroll">

<div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border backdrop-blur-sm border-white/10 bg-white/5">
<i className="w-3.5 h-3.5 text-neutral-400" data-lucide="atom"></i>
<span className="text-xs font-medium tracking-wide text-white/80">Experimental Material</span>
</div>
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border backdrop-blur-sm border-white/10 bg-white/5">
<i className="w-3.5 h-3.5 text-neutral-400" data-lucide="activity"></i>
<span className="text-xs font-medium tracking-wide text-white/80">Phase-Change Tech</span>
</div>
</div>
<h1 className="font-display font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-b mb-6 drop-shadow-2xl from-white to-white/60">
                    Redefining impact <br className="hidden lg:block"/> safety limits.
                </h1>
<p className="text-lg mb-8 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed text-white/60">
                    Elir Projects develops advanced biomechanics hardware designed to dissipate force instantly. 
                    The future of high-impact protection is lighter, smarter, and stronger.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<a className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-lg px-8 text-sm font-semibold transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 bg-white text-black hover:bg-neutral-50" href="#presale">
                        Join Presale
                    </a>
<a className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-lg border bg-transparent px-8 text-sm font-semibold transition-colors focus:outline-none border-white/20 text-white hover:bg-white/10 hover:border-white/30" href="#data">
<i className="w-4 h-4 mr-2 text-neutral-400" data-lucide="bar-chart-2"></i>
                        See Data
                    </a>
</div>
<p className="mt-6 text-xs flex items-center justify-center lg:justify-start gap-2 text-white/30">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-500 animate-pulse"></span>
                    Prototype tested • Lab verified • More data coming
                </p>
</div>

<div className="flex-1 w-full max-w-xl lg:max-w-none relative mt-12 lg:mt-0 reveal-on-scroll">

<div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl border viewer-frame backdrop-blur-sm overflow-hidden border-white/10 bg-black/40">


<div className="absolute inset-0 z-10 w-[150%] h-[150%] top-[-25%] left-[-25%] pointer-events-none mix-blend-mode-screen opacity-100">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full pointer-events-none hologram-video" frameborder="0" src="https://www.youtube.com/embed/UKNqGfYR1_Y?autoplay=1&amp;loop=1&amp;playlist=UKNqGfYR1_Y&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;mute=1&amp;iv_load_policy=3&amp;disablekb=1&amp;playsinline=1">
</iframe>
</div>


<a className="hidden md:flex absolute top-10 -left-12 z-20 float-box text-sm font-medium px-6 py-3 rounded-lg transition-all duration-300 transform animate-float text-white" href="#research">
                        Mechanism
                    </a>

<a className="hidden md:flex absolute top-16 -right-8 z-20 float-box text-sm font-medium px-6 py-3 rounded-lg transition-all duration-300 transform animate-float-delayed text-white" href="#materials">
                        Materials
                    </a>

<a className="hidden md:flex absolute bottom-20 -left-4 z-20 float-box text-sm font-medium px-6 py-3 rounded-lg transition-all duration-300 transform animate-float-slow text-white" href="#data">
                        Impact Data
                    </a>

<a className="hidden md:flex absolute -bottom-4 right-12 z-20 float-box text-sm font-medium px-6 py-3 rounded-lg transition-all duration-300 transform animate-float text-white" href="#applications">
                        Use Cases
                    </a>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border rounded-full pointer-events-none z-0 border-white/5"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border rounded-full pointer-events-none opacity-50 z-0 border-white/5"></div>
</div>

<div className="md:hidden flex flex-wrap gap-2 justify-center mt-6">
<a className="border text-xs px-3 py-1.5 rounded-lg bg-white/5 border-white/20 text-white" href="#research">Mechanism</a>
<a className="border text-xs px-3 py-1.5 rounded-lg bg-white/5 border-white/20 text-white" href="#materials">Materials</a>
<a className="border text-xs px-3 py-1.5 rounded-lg bg-white/5 border-white/20 text-white" href="#data">Data</a>
<a className="border text-xs px-3 py-1.5 rounded-lg bg-white/5 border-white/20 text-white" href="#applications">Use Cases</a>
</div>
</div>
</section>

<section className="py-24 relative" id="research">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 text-center reveal-on-scroll">
<h2 className="text-3xl font-display font-semibold tracking-tight mb-4 text-white">Engineered Protection</h2>
<p className="max-w-2xl mx-auto text-white/60">Three layers of intelligent force dissipation working in unison.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl transition-all duration-300 group reveal-on-scroll flex flex-col items-center justify-center text-center h-48 hover:border-white/40">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-neutral-500/20 transition-colors bg-white/5">
<i className="group-hover:text-neutral-300 transition-colors w-6 h-6 text-white" data-lucide="layers"></i>
</div>
<h3 className="text-lg font-medium text-white">Impact Absorption</h3>
</div>

<div className="glass-panel p-8 rounded-2xl transition-all duration-300 group reveal-on-scroll flex flex-col items-center justify-center text-center h-48 hover:border-white/40" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-neutral-500/20 transition-colors bg-white/5">
<i className="group-hover:text-neutral-300 transition-colors w-6 h-6 text-white" data-lucide="cpu"></i>
</div>
<h3 className="text-lg font-medium text-white">Smart Damping</h3>
</div>

<div className="glass-panel p-8 rounded-2xl transition-all duration-300 group reveal-on-scroll flex flex-col items-center justify-center text-center h-48 hover:border-white/40" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-neutral-500/20 transition-colors bg-white/5">
<i className="group-hover:text-neutral-300 transition-colors w-6 h-6 text-white" data-lucide="wind"></i>
</div>
<h3 className="text-lg font-medium text-white">Thermal Airflow</h3>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.02] border-y relative overflow-hidden border-white/5" id="data">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6 reveal-on-scroll">
<div>
<h2 className="text-3xl font-display font-semibold tracking-tight mb-2 text-white">Performance Metrics</h2>
<p className="text-white/60">Lab validation vs. Standard Foam protection.</p>
</div>
<button className="px-4 py-2 border rounded-full text-xs font-mono transition flex items-center gap-2 border-white/10 text-white/70 hover:bg-white/5">
<i className="w-3 h-3" data-lucide="download"></i> Download Whitepaper
                    </button>
</div>
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="glass-panel p-8 rounded-2xl reveal-on-scroll">
<div className="flex justify-between items-center mb-8">
<h4 className="text-sm font-semibold text-white">Brain Strain Reduction</h4>
<span className="text-xs font-mono text-emerald-400">Up to 77%</span>
</div>

<div className="space-y-6">
<div>
<div className="flex justify-between text-xs mb-2 text-white/50">
<span>Standard Equipment</span>
<span>Baseline</span>
</div>
<div className="w-full h-2 rounded-full overflow-hidden bg-white/10">
<div className="bg-gray-500 h-full rounded-full" style={{width: '100%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-2 text-white/50">
<span className="text-white">Our Prototype</span>
<span className="text-neutral-400">-77% Strain</span>
</div>
<div className="w-full h-2 rounded-full overflow-hidden relative bg-white/10">
<div className="absolute inset-0 bg-neutral-500/20 animate-pulse"></div>
<div className="bg-gradient-to-r to-cyan-500 h-full rounded-full w-0 transition-all duration-1000 ease-out from-neutral-600" id="bar-anim" style={{width: '23%'}}></div>
</div>
</div>
</div>
<p className="mt-6 text-xs italic text-white/30">Tested at 6.5m/s impact velocity. 2025 Lab Results.</p>
</div>

<div className="space-y-6 reveal-on-scroll">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-500/10 flex items-center justify-center shrink-0 border border-neutral-500/20">
<i className="w-5 h-5 text-neutral-400" data-lucide="zap"></i>
</div>
<div>
<h3 className="text-lg font-medium text-white">Instant Response</h3>
<p className="text-sm mt-1 text-white/50">Material phase-change occurs within 3 milliseconds of impact detection.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-500/10 flex items-center justify-center shrink-0 border border-neutral-500/20">
<i className="w-5 h-5 text-neutral-400" data-lucide="refresh-cw"></i>
</div>
<div>
<h3 className="text-lg font-medium text-white">Multi-Hit Durability</h3>
<p className="text-sm mt-1 text-white/50">Returns to flexible state immediately. No degradation after 50+ repeated impacts.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="applications">
<h2 className="text-3xl font-display font-semibold tracking-tight mb-12 text-center reveal-on-scroll text-white">Applications</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group relative h-64 rounded-xl overflow-hidden border-gradient reveal-on-scroll">
<div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700 bg-indigo-900"></div>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-80 from-black via-black/50"></div>
<div className="absolute bottom-0 left-0 p-6">
<i className="mb-3 w-6 h-6 text-white" data-lucide="swords"></i>
<h3 className="font-medium text-white">Martial Arts</h3>
<p className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 text-white/60">Sparring gear re-imagined.</p>
</div>
</div>

<div className="group relative h-64 rounded-xl overflow-hidden border-gradient reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700 bg-indigo-900"></div>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-80 from-black via-black/50"></div>
<div className="absolute bottom-0 left-0 p-6">
<i className="mb-3 w-6 h-6 text-white" data-lucide="bike"></i>
<h3 className="font-medium text-white">Motorsport</h3>
<p className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 text-white/60">Spine &amp; chest protection.</p>
</div>
</div>

<div className="group relative h-64 rounded-xl overflow-hidden border-gradient reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700 bg-indigo-900"></div>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-80 from-black via-black/50"></div>
<div className="absolute bottom-0 left-0 p-6">
<i className="mb-3 w-6 h-6 text-white" data-lucide="hard-hat"></i>
<h3 className="font-medium text-white">Industrial</h3>
<p className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 text-white/60">Lightweight site safety.</p>
</div>
</div>

<div className="group relative h-64 rounded-xl overflow-hidden border-gradient reveal-on-scroll" style={{transitionDelay: '300ms'}}>
<div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700 bg-indigo-900"></div>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-80 from-black via-black/50"></div>
<div className="absolute bottom-0 left-0 p-6">
<i className="mb-3 w-6 h-6 text-white" data-lucide="crosshair"></i>
<h3 className="font-medium text-white">Defense</h3>
<p className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 text-white/60">Ballistic shock mitigation.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-display font-semibold tracking-tight mb-16 text-center reveal-on-scroll text-white">Validation Roadmap</h2>
<div className="relative max-w-4xl mx-auto">

<div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-500/50 to-transparent -translate-x-1/2 md:block hidden"></div>
<div className="space-y-12">

<div className="flex flex-col md:flex-row items-center justify-between gap-8 reveal-on-scroll">
<div className="w-full md:w-5/12 text-center md:text-right">
<h3 className="text-lg font-semibold text-white">Design Phase</h3>
<p className="text-sm mt-1 text-white/50">Starting Q3 2025</p>
</div>
<div className="relative z-10 w-4 h-4 rounded-full bg-neutral-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
<div className="w-full md:w-5/12 text-center md:text-left text-sm text-white/60">
                                Initial CAD models and material selection.
                            </div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between gap-8 reveal-on-scroll">
<div className="w-full md:w-5/12 text-center md:text-right text-sm order-2 md:order-1 text-white/60">
                                Research &amp; Development cycles.
                            </div>
<div className="relative z-10 w-4 h-4 rounded-full bg-neutral-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] order-1 md:order-2"></div>
<div className="w-full md:w-5/12 text-center md:text-left order-3 md:order-3">
<h3 className="text-lg font-semibold text-white">R &amp; D</h3>
<p className="text-sm mt-1 text-white/50">Q4 2025</p>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between gap-8 reveal-on-scroll">
<div className="w-full md:w-5/12 text-center md:text-right">
<h3 className="text-lg font-semibold text-white">Pilot + Testing</h3>
<p className="text-sm mt-1 text-white/50">All of 2026</p>
</div>
<div className="relative z-10 w-4 h-4 rounded-full order-1 md:order-2 bg-white/20"></div>
<div className="w-full md:w-5/12 text-center md:text-left text-sm text-white/60">
                                Field testing with select athletes and partners.
                            </div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between gap-8 reveal-on-scroll opacity-50">
<div className="w-full md:w-5/12 text-center md:text-right text-sm order-2 md:order-1 text-white/60">
                                Mass manufacturing and global shipping.
                            </div>
<div className="relative z-10 w-3 h-3 rounded-full order-1 md:order-2 bg-white/10"></div>
<div className="w-full md:w-5/12 text-center md:text-left order-3 md:order-3">
<h3 className="text-lg font-semibold text-white">Shipping</h3>
<p className="text-sm mt-1 text-white/50">Target Q4 2026</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6" id="faq">
<h2 className="text-3xl font-display font-semibold tracking-tight mb-12 text-center reveal-on-scroll text-white">Frequency Asked Questions</h2>
<div className="space-y-4">
<details className="group glass-panel rounded-xl overflow-hidden reveal-on-scroll">
<summary className="flex justify-between items-center p-6 cursor-pointer font-medium select-none text-white">
                        How much does the unit weigh?
                        <i className="w-5 h-5 transition-transform group-open:rotate-180 text-white/50" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-sm leading-relaxed text-white/60">
                        The current prototype weighs approximately 3.5lbs, offering a substantial protective layer with advanced material density.
                    </div>
</details>
<details className="group glass-panel rounded-xl overflow-hidden reveal-on-scroll">
<summary className="flex justify-between items-center p-6 cursor-pointer font-medium select-none text-white">
                        Is it washable?
                        <i className="w-5 h-5 transition-transform group-open:rotate-180 text-white/50" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-sm leading-relaxed text-white/60">
                        Yes. The core protective element is modular, allowing the fabric sleeve and harness system to be fully machine washed.
                    </div>
</details>
<details className="group glass-panel rounded-xl overflow-hidden reveal-on-scroll">
<summary className="flex justify-between items-center p-6 cursor-pointer font-medium select-none text-white">
                        When will shipping begin?
                        <i className="w-5 h-5 transition-transform group-open:rotate-180 text-white/50" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-sm leading-relaxed text-white/60">
                        We are projecting to finish development and begin shipping in Q4 2026. Join the presale list below for updates on the 2026 pilot program.
                    </div>
</details>
</div>
</section>

<section className="py-32 relative" id="presale">
<div className="absolute inset-0 bg-gradient-to-b from-transparent pointer-events-none to-brand-900/20"></div>
<div className="max-w-2xl mx-auto px-6 relative z-10 text-center reveal-on-scroll">
<div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8 border backdrop-blur bg-white/10 border-white/10">
<i className="w-8 h-8 text-white" data-lucide="rocket"></i>
</div>
<h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight mb-6 text-white">
                    Secure Early Access
                </h2>
<p className="text-lg mb-10 text-white/60">
                    Be the first to know when we launch. Limited spots available for the 2026 pilot program.
                </p>
<form className="space-y-4 text-left glass-panel p-8 rounded-2xl border shadow-2xl border-white/10">
<div className="grid md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium mb-2 text-white/70">Email Address *</label>
<input className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-neutral-500 transition-colors bg-black/50 border-white/10 text-white" placeholder="you@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium mb-2 text-white/70">Name (Optional)</label>
<input className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-neutral-500 transition-colors bg-black/50 border-white/10 text-white" placeholder="John Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium mb-2 text-white/70">Industry / Sport</label>
<select className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-neutral-500 transition-colors appearance-none bg-black/50 border-white/10 text-white">
<option>Select an option...</option>
<option>Martial Arts</option>
<option>Motorsports</option>
<option>Industrial Safety</option>
<option>Military / Defense</option>
<option>Other</option>
</select>
</div>
<button className="w-full mt-4 font-semibold h-12 rounded-lg transition-all duration-200 transform hover:scale-[1.01] shadow-[0_0_20px_rgba(255,255,255,0.2)] bg-white text-black hover:bg-neutral-50" type="submit">
                        Get Early Access
                    </button>
<p className="text-[10px] text-center mt-4 text-white/30">
                        By joining, you agree to our Terms. No spam, unsubscribe anytime.
                    </p>
</form>
</div>
</section>
</main>

<footer className="border-t pt-16 pb-8 border-white/10 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-white/40" data-lucide="flask-conical"></i>
<span className="font-display font-bold text-lg tracking-tight uppercase text-white/90">ELIR PROJECTS</span>
</div>
<div className="flex gap-6">
<a className="w-8 h-8 flex items-center justify-center rounded-full transition bg-white/5 hover:bg-white/10" href="#">
<i className="w-4 h-4 text-white/60" data-lucide="twitter"></i>
</a>
<a className="w-8 h-8 flex items-center justify-center rounded-full transition bg-white/5 hover:bg-white/10" href="#">
<i className="w-4 h-4 text-white/60" data-lucide="instagram"></i>
</a>
<a className="w-8 h-8 flex items-center justify-center rounded-full transition bg-white/5 hover:bg-white/10" href="#">
<i className="w-4 h-4 text-white/60" data-lucide="linkedin"></i>
</a>
</div>
</div>
<div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xs gap-4 text-white/30">
<p>© 2025 Elir Projects Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="transition hover:text-white" href="#">contact@elirprojects.io</a>
<a className="transition hover:text-white" href="#">Privacy</a>
<a className="transition hover:text-white" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
