import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        // Accordion Toggle
        function toggleAccordion(button) {
            const container = button.parentElement;
            const content = button.nextElementSibling;
            const icon = button.querySelector('iconify-icon');
            
            if (container.classList.contains('accordion-open')) {
                container.classList.remove('accordion-open');
                icon.setAttribute('icon', 'lucide:plus');
            } else {
                const allAccordions = document.querySelectorAll('.accordion-open');
                allAccordions.forEach(acc => {
                    acc.classList.remove('accordion-open');
                    acc.querySelector('iconify-icon').setAttribute('icon', 'lucide:plus');
                });

                container.classList.add('accordion-open');
                icon.setAttribute('icon', 'lucide:x');
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            // 1. Initialize Lenis for Inertia Scrolling
            const lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
                direction: 'vertical',
                gestureDirection: 'vertical',
                smooth: true,
                mouseMultiplier: 1,
                smoothTouch: false,
                touchMultiplier: 2,
            });

            // 2. Main Animation Loop (Parallax + Scroll Linking)
            function raf(time) {
                lenis.raf(time);
                
                // Parallax Logic
                const parallaxElements = document.querySelectorAll('.parallax-element');
                parallaxElements.forEach(el => {
                    const speed = el.getAttribute('data-speed') || 0.1;
                    const rect = el.getBoundingClientRect();
                    // Apply transform only if in viewport for performance
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        const yPos = (window.innerHeight - rect.top) * speed * -0.5;
                        el.style.transform = `translate3d(0, ${yPos}px, 0)`;
                    }
                });

                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);

            // 3. Intersection Observer for Reveals (Fade Up / Scale)
            const observerOptions = {
                root: null,
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        
                        // Counter Animation logic
                        const counters = entry.target.querySelectorAll('.count-up');
                        if(counters.length) {
                            counters.forEach(counter => {
                                const target = +counter.getAttribute('data-target');
                                const duration = 2000;
                                const start = 0;
                                let startTime = null;

                                function animation(currentTime) {
                                    if (startTime === null) startTime = currentTime;
                                    const timeElapsed = currentTime - startTime;
                                    const progress = Math.min(timeElapsed / duration, 1);
                                    const ease = 1 - Math.pow(1 - progress, 3);
                                    
                                    counter.innerText = Math.floor(ease * (target - start) + start).toLocaleString();
                                    
                                    if (timeElapsed < duration) {
                                        requestAnimationFrame(animation);
                                    } else {
                                        counter.innerText = target.toLocaleString(); 
                                    }
                                }
                                requestAnimationFrame(animation);
                            });
                        }
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal-on-scroll, .scale-on-scroll, .blur-reveal');
            revealElements.forEach(el => observer.observe(el));

            // 4. Process Line Animation via Scroll
            window.addEventListener('scroll', () => {
                const processSection = document.querySelector('.process-step');
                const processLine = document.getElementById('process-line');
                
                if(processSection && processLine) {
                    const rect = processSection.getBoundingClientRect();
                    const triggerPoint = window.innerHeight / 2;
                    
                    if(rect.top < triggerPoint) {
                        processLine.style.transform = "translate(-50%) scaleY(1)";
                    } else {
                        processLine.style.transform = "translate(-50%) scaleY(0)";
                    }
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-bg"></div>

<div className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen parallax-bg" data-speed="0.05"></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-5 h-5 bg-gradient-to-tr from-blue-400 to-indigo-500 rounded-md flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<span className="text-sm font-medium tracking-tight text-white/90">Aura</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors" href="#">Product</a>
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors" href="#">Solutions</a>
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors" href="#">Enterprise</a>
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-xs font-medium text-white/80 hover:text-white transition-colors" href="#">Sign in</a>
<a className="text-xs font-medium bg-white text-black px-3 py-1.5 rounded-full hover:bg-white/90 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]" href="#">
                    Get started
                </a>
</div>
</div>
</nav>

<div className="w-full relative overflow-hidden" id="main-wrapper">

<section className="min-h-screen relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 flex flex-col items-center justify-center">
<div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-20">

<div className="parallax-element" data-speed="0.1">
<div className="reveal-on-scroll is-visible inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-default mb-8">
<span className="flex h-1.5 w-1.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
</span>
<span className="text-[11px] font-medium tracking-wide text-blue-200">Aura 2.0 is now available</span>
</div>
<h1 className="reveal-on-scroll is-visible delay-100 max-w-4xl text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 mb-6">
                        Intelligence designed <br/> for modern growth.
                    </h1>
<p className="reveal-on-scroll is-visible delay-200 max-w-xl text-lg md:text-xl text-slate-400 font-light leading-relaxed mb-10 mx-auto">
                        Orchestrate marketing campaigns with autonomous AI agents. Precision targeting and predictive analytics in one unified interface.
                    </p>
<div className="reveal-on-scroll is-visible delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="group relative px-8 py-3.5 bg-white text-black rounded-full font-medium text-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
<span className="relative z-10 flex items-center gap-2">
                                Start free trial
                                <iconify-icon className="transition-transform group-hover:translate-x-0.5" icon="lucide:chevron-right" strokeWidth="1.5" width="16"></iconify-icon>
</span>
</button>
<button className="glass-button px-8 py-3.5 rounded-full font-medium text-sm text-white hover:text-white transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
<iconify-icon icon="lucide:play-circle" strokeWidth="1.5" width="16"></iconify-icon>
                            Watch the film
                        </button>
</div>
</div>

<div className="parallax-element w-full flex justify-center" data-speed="0.15">
<div className="reveal-on-scroll is-visible delay-300 glass-panel rounded-xl p-2 w-full max-w-2xl transform rotate-x-12 perspective-1000 opacity-60 hover:opacity-100 transition-all duration-700">
<div className="h-40 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded border border-white/5 flex items-center justify-center">
<span className="text-xs text-white/30 tracking-widest uppercase">System Operational</span>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen relative flex items-center py-24 px-6 overflow-hidden group">

<div className="bg-number left-[-5%] top-1/2 -translate-y-1/2 text-white/[0.02] parallax-element" data-speed="-0.1">01</div>
<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="flex flex-col gap-6 order-2 lg:order-1 reveal-on-scroll">
<div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-2">
<iconify-icon icon="lucide:bot" width="24"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">Autonomous Agents</h2>
<p className="text-lg text-slate-400 font-light leading-relaxed max-w-md">
                        Deploy thousands of micro-campaigns instantly. Our AI agents navigate ad networks autonomously, optimizing for ROI in real-time without human intervention.
                    </p>
<div className="flex items-center gap-4 text-sm font-medium text-white/80 pt-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="lucide:check-circle"></iconify-icon>
<span>Self-healing campaigns</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="lucide:check-circle"></iconify-icon>
<span>24/7 Optimization</span>
</div>
</div>
</div>
<div className="order-1 lg:order-2 reveal-on-scroll delay-100">
<div className="relative w-full aspect-square max-w-[500px] mx-auto">
<div className="feature-glow"></div>
<div className="glass-panel w-full h-full rounded-2xl border border-white/10 p-4 relative overflow-hidden group">

<div className="absolute inset-0 bg-grid-white/[0.02] scale-on-scroll"></div>

<div className="absolute top-1/4 left-1/4 w-40 h-48 bg-[#0B0F19] border border-white/10 rounded-lg shadow-2xl p-3 flex flex-col gap-2 z-20 floating-element parallax-element" data-speed="0.05">
<div className="flex justify-between items-center mb-1">
<div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center"><iconify-icon className="text-indigo-400" icon="lucide:zap" width="12"></iconify-icon></div>
<div className="text-[10px] text-green-400">+24%</div>
</div>
<div className="h-1.5 w-16 bg-white/10 rounded-full"></div>
<div className="h-1.5 w-10 bg-white/10 rounded-full"></div>
<div className="mt-auto h-20 bg-gradient-to-t from-indigo-500/20 to-transparent rounded-sm"></div>
</div>
<div className="absolute bottom-1/4 right-1/4 w-48 h-32 bg-[#0B0F19]/80 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl p-3 flex flex-col gap-3 z-10 floating-element parallax-element" data-speed="0.08" style={{animationDelay: '1s'}}>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs text-white/60">Optimizing Bid Strategy</span>
</div>
<div className="flex gap-1 h-12 items-end">
<div className="w-1/5 h-[40%] bg-blue-500/30 rounded-t-sm"></div>
<div className="w-1/5 h-[70%] bg-blue-500/30 rounded-t-sm"></div>
<div className="w-1/5 h-[50%] bg-blue-500/30 rounded-t-sm"></div>
<div className="w-1/5 h-[90%] bg-blue-500 rounded-t-sm shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
<div className="w-1/5 h-[60%] bg-blue-500/30 rounded-t-sm"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen relative flex items-center py-24 px-6 overflow-hidden">
<div className="bg-number right-[-5%] top-1/2 -translate-y-1/2 text-white/[0.02] parallax-element" data-speed="-0.1">02</div>
<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="reveal-on-scroll">
<div className="relative w-full aspect-square max-w-[500px] mx-auto">
<div className="feature-glow"></div>

<div className="glass-panel w-full h-full rounded-2xl border border-white/10 p-1 relative overflow-hidden flex items-center justify-center group">
<div className="relative w-64 h-64 rounded-full border border-white/5 flex items-center justify-center scale-on-scroll">
<div className="absolute inset-0 rounded-full border border-white/5 scale-150 opacity-30"></div>
<div className="absolute inset-0 rounded-full border border-white/5 scale-75 opacity-50"></div>
<div className="absolute w-full h-full animate-[spin_4s_linear_infinite] bg-gradient-to-t from-transparent via-blue-500/10 to-transparent opacity-50 rounded-full" style={{clipPath: 'polygon(50% 50%, 0 0, 100% 0)'}}></div>
<div className="absolute top-10 left-20 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)] animate-pulse"></div>
<div className="absolute bottom-16 right-10 w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_10px_rgba(129,140,248,0.8)] animate-pulse delay-75"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
<div className="text-3xl font-bold text-white tracking-tighter">98%</div>
<div className="text-[10px] text-blue-300 uppercase tracking-widest">Accuracy</div>
</div>
</div>
</div>
</div>
</div>
<div className="flex flex-col gap-6 reveal-on-scroll delay-100">
<div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-2">
<iconify-icon icon="lucide:brain-circuit" width="24"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">Predictive Core</h2>
<p className="text-lg text-slate-400 font-light leading-relaxed max-w-md">
                        Know what your customers want before they do. Our predictive engine analyzes billions of data points to forecast trends and customer behavior with precision.
                    </p>
<div className="w-full h-px bg-white/10 my-4"></div>
<div className="grid grid-cols-2 gap-4">
<div>
<div className="text-2xl font-medium text-white">2.4x</div>
<div className="text-xs text-slate-500">Conversion Uplift</div>
</div>
<div>
<div className="text-2xl font-medium text-white">&lt;50ms</div>
<div className="text-xs text-slate-500">Decision Latency</div>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen relative flex items-center py-24 px-6 overflow-hidden">
<div className="bg-number left-[-5%] top-1/2 -translate-y-1/2 text-white/[0.02] parallax-element" data-speed="-0.1">03</div>
<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="flex flex-col gap-6 order-2 lg:order-1 reveal-on-scroll">
<div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-2">
<iconify-icon icon="lucide:globe-2" width="24"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">Global Scaling</h2>
<p className="text-lg text-slate-400 font-light leading-relaxed max-w-md">
                        Expand without friction. Aura automatically localizes content, adjusts currency, and complies with regional regulations across 140+ countries.
                    </p>
<ul className="space-y-3 mt-2">
<li className="flex items-center gap-3 text-slate-300 text-sm">
<div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                            Multi-language generation
                        </li>
<li className="flex items-center gap-3 text-slate-300 text-sm">
<div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                            Automated compliance checks
                        </li>
</ul>
</div>
<div className="order-1 lg:order-2 reveal-on-scroll delay-100">
<div className="relative w-full aspect-square max-w-[500px] mx-auto">
<div className="feature-glow"></div>
<div className="glass-panel w-full h-full rounded-2xl border border-white/10 p-6 relative overflow-hidden flex flex-col justify-between group">

<div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-contain bg-no-repeat bg-center mix-blend-overlay grayscale invert scale-on-scroll"></div>
<div className="absolute top-1/3 left-1/4 w-2 h-2 bg-white rounded-full shadow-[0_0_15px_white] z-10"></div>
<div className="absolute top-1/2 right-1/3 w-2 h-2 bg-white rounded-full shadow-[0_0_15px_white] z-10"></div>
<div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_15px_white] z-10"></div>
<svg className="absolute inset-0 w-full h-full pointer-events-none">
<path d="M120 180 Q 250 100 350 250" fill="none" stroke="rgba(255,255,255,0.2)" stroke-dasharray="4 4" strokeWidth="1">
<animate attributename="stroke-dashoffset" dur="2s" from="100" repeatcount="indefinite" to="0"></animate>
</path>
<path d="M350 250 Q 200 350 250 400" fill="none" stroke="rgba(255,255,255,0.2)" stroke-dasharray="4 4" strokeWidth="1"></path>
</svg>
<div className="self-end bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-3 w-40 z-20 parallax-element" data-speed="0.05">
<div className="text-[10px] text-slate-400 mb-1">Active Regions</div>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-slate-700 border border-black flex items-center justify-center text-[8px]">🇺🇸</div>
<div className="w-6 h-6 rounded-full bg-slate-700 border border-black flex items-center justify-center text-[8px]">🇬🇧</div>
<div className="w-6 h-6 rounded-full bg-slate-700 border border-black flex items-center justify-center text-[8px]">🇯🇵</div>
<div className="w-6 h-6 rounded-full bg-slate-800 border border-black flex items-center justify-center text-[8px] text-white font-medium">+12</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen relative flex items-center py-24 px-6 overflow-hidden">
<div className="bg-number right-[-5%] top-1/2 -translate-y-1/2 text-white/[0.02] parallax-element" data-speed="-0.1">04</div>
<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="reveal-on-scroll">
<div className="relative w-full aspect-square max-w-[500px] mx-auto">
<div className="feature-glow"></div>
<div className="glass-panel w-full h-full rounded-2xl border border-white/10 p-8 relative overflow-hidden flex flex-col items-center justify-center">
<div className="w-full max-w-xs space-y-4">
<div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between floating-element parallax-element" data-speed="0.04">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400">Revenue</div>
<div className="text-sm font-medium text-white">$842,000</div>
</div>
</div>
<div className="text-xs text-emerald-400">+12%</div>
</div>
<div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between floating-element parallax-element" data-speed="0.07" style={{animationDelay: '1.5s'}}>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
<iconify-icon icon="lucide:users" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400">New Users</div>
<div className="text-sm font-medium text-white">12,450</div>
</div>
</div>
<div className="text-xs text-blue-400">+24%</div>
</div>
</div>
</div>
</div>
</div>
<div className="flex flex-col gap-6 reveal-on-scroll delay-100">
<div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-2">
<iconify-icon icon="lucide:bar-chart-3" width="24"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">Revenue Flow</h2>
<p className="text-lg text-slate-400 font-light leading-relaxed max-w-md">
                        Connect marketing directly to revenue. View full attribution models and see exactly which AI decisions are driving your bottom line growth.
                    </p>
<button className="w-fit mt-4 text-sm font-medium text-white border-b border-white/30 pb-1 hover:border-white transition-colors flex items-center gap-2">
                        View integration docs <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="relative w-full bg-gradient-to-b from-[#020617] via-[#0B0F19] to-[#020617] py-32 overflow-hidden">

<div className="parallax-layer absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen parallax-element" data-speed="0.2">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
<path d="M0,200 C320,300, 420,100, 720,200 C1020,300, 1120,100, 1440,200" fill="none" stroke="url(#grad1)" strokeWidth="1.5"></path>
<path d="M0,400 C320,500, 420,300, 720,400 C1020,500, 1120,300, 1440,400" fill="none" stroke="url(#grad1)" strokeWidth="1.5"></path>
<path d="M0,600 C320,700, 420,500, 720,600 C1020,700, 1120,500, 1440,600" fill="none" stroke="url(#grad1)" strokeWidth="1.5"></path>
<defs>
<lineargradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: '#3b82f6', stopOpacity: '0.5'}}></stop>
<stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-32">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-[10px] uppercase tracking-widest font-semibold mb-6">
                            Trusted by Visionaries
                        </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-8">
                            Join the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">automation revolution.</span>
</h2>

<div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
<div className="counter-box">
<div className="text-3xl font-bold text-white mb-1 flex items-baseline"><span className="count-up" data-target="10000">0</span>+</div>
<div className="text-xs text-slate-500">Active Users</div>
</div>
<div className="counter-box">
<div className="text-3xl font-bold text-white mb-1 flex items-baseline"><span className="count-up" data-target="85">0</span>%</div>
<div className="text-xs text-slate-500">Growth Rate</div>
</div>
<div className="counter-box">
<div className="text-3xl font-bold text-white mb-1 flex items-baseline"><span className="count-up" data-target="2">0</span>M+</div>
<div className="text-xs text-slate-500">Automation Hrs</div>
</div>
</div>
</div>

<div className="relative h-[400px] reveal-on-scroll delay-200">

<div className="absolute top-0 right-10 w-64 bg-[#0B0F19]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl floating-element z-20 parallax-element" data-speed="0.05">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full avatar-sphere relative" style={{-SphereColor: '#ec4899'}}></div>
<div>
<div className="h-2 w-20 bg-white/20 rounded-full mb-1"></div>
<div className="h-2 w-12 bg-white/10 rounded-full"></div>
</div>
</div>
<div className="space-y-2">
<div className="h-2 w-full bg-white/5 rounded-full"></div>
<div className="h-2 w-5/6 bg-white/5 rounded-full"></div>
<div className="h-2 w-4/6 bg-white/5 rounded-full"></div>
</div>
</div>

<div className="absolute bottom-10 left-10 w-64 bg-[#0B0F19]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl floating-element-delay z-30 parallax-element" data-speed="0.1">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full avatar-sphere relative" style={{-SphereColor: '#3b82f6'}}></div>
<div>
<div className="h-2 w-24 bg-white/20 rounded-full mb-1"></div>
<div className="h-2 w-16 bg-white/10 rounded-full"></div>
</div>
</div>
<p className="text-sm text-slate-300 leading-relaxed font-light">
                                "Aura completely transformed our acquisition strategy. The ROI uplift was visible in week one."
                            </p>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-indigo-500/20 to-blue-500/20 rounded-full blur-[60px] pointer-events-none z-0"></div>
</div>
</div>

<div className="flex flex-col items-center">
<div className="text-center mb-16 reveal-on-scroll">
<h3 className="text-2xl font-medium text-white mb-2">From input to impact.</h3>
<p className="text-slate-400 text-sm">Three steps to full autonomy.</p>
</div>
<div className="w-full max-w-4xl relative">

<div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block"></div>
<div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-blue-500 -translate-x-1/2 scale-y-0 origin-top transition-transform duration-1000 hidden md:block" id="process-line"></div>

<div className="process-step group relative flex md:justify-end items-center gap-8 mb-20 reveal-on-scroll">
<div className="order-2 md:order-1 flex-1 md:text-right">
<h4 className="text-xl font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">1. Connect Data</h4>
<p className="text-slate-400 text-sm leading-relaxed max-w-xs ml-auto">Sync your CRM, ad accounts, and analytics. Aura ingests your historical data to build a baseline model.</p>
</div>
<div className="order-1 md:order-2 w-14 h-14 rounded-full bg-[#0B0F19] border border-white/10 flex items-center justify-center relative z-10 shrink-0 group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-500">
<iconify-icon className="text-white/60 group-hover:text-white transition-colors" icon="lucide:link" width="20"></iconify-icon>
</div>
<div className="hidden md:block flex-1 order-3"></div>
</div>

<div className="process-step group relative flex md:justify-start items-center gap-8 mb-20 reveal-on-scroll delay-100">
<div className="hidden md:block flex-1 order-1"></div>
<div className="order-1 md:order-2 w-14 h-14 rounded-full bg-[#0B0F19] border border-white/10 flex items-center justify-center relative z-10 shrink-0 group-hover:border-indigo-500/50 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-500">
<iconify-icon className="text-white/60 group-hover:text-white transition-colors" icon="lucide:sparkles" width="20"></iconify-icon>
</div>
<div className="order-2 md:order-3 flex-1">
<h4 className="text-xl font-medium text-white mb-2 group-hover:text-indigo-400 transition-colors">2. Train Agents</h4>
<p className="text-slate-400 text-sm leading-relaxed max-w-xs">AI agents analyze patterns and generate thousands of creative variations tailored to your segments.</p>
</div>
</div>

<div className="process-step group relative flex md:justify-end items-center gap-8 reveal-on-scroll delay-200">
<div className="order-2 md:order-1 flex-1 md:text-right">
<h4 className="text-xl font-medium text-white mb-2 group-hover:text-emerald-400 transition-colors">3. Scale Autonomously</h4>
<p className="text-slate-400 text-sm leading-relaxed max-w-xs ml-auto">Campaigns launch and optimize in real-time. Budget flows to high-performing channels automatically.</p>
</div>
<div className="order-1 md:order-2 w-14 h-14 rounded-full bg-[#0B0F19] border border-white/10 flex items-center justify-center relative z-10 shrink-0 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-500">
<iconify-icon className="text-white/60 group-hover:text-white transition-colors" icon="lucide:rocket" width="20"></iconify-icon>
</div>
<div className="hidden md:block flex-1 order-3"></div>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen relative flex flex-col items-center justify-center py-24 px-6 z-10">
<div className="max-w-7xl mx-auto w-full">

<div className="text-center mb-20 reveal-on-scroll">
<div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4">
                        Solutions
                    </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Intelligence for every channel.</h2>
<p className="text-lg text-slate-400 font-light max-w-xl mx-auto">
                        A unified platform of AI tools designed to automate, optimize, and scale your marketing stack.
                    </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 reveal-on-scroll">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-300">
<iconify-icon className="text-white/60 group-hover:text-blue-400 transition-colors" icon="lucide:pen-tool" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Generative Copy</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                                Create high-converting ad copy and blog posts instantly. Tuned to your brand voice and optimized for SEO.
                            </p>
</div>
</div>

<div className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 reveal-on-scroll delay-100">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 transition-all duration-300">
<iconify-icon className="text-white/60 group-hover:text-indigo-400 transition-colors" icon="lucide:share-2" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Social Pulse</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                                Automated social media scheduling and engagement. Track trends and respond to users in real-time.
                            </p>
</div>
</div>

<div className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 reveal-on-scroll delay-200">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all duration-300">
<iconify-icon className="text-white/60 group-hover:text-emerald-400 transition-colors" icon="lucide:gavel" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Smart Bidding</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                                Algorithmic ad spend allocation across Google, Meta, and LinkedIn to maximize ROI per dollar.
                            </p>
</div>
</div>

<div className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 reveal-on-scroll">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-all duration-300">
<iconify-icon className="text-white/60 group-hover:text-cyan-400 transition-colors" icon="lucide:scan-face" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Audience DNA</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                                Deep segmentation based on behavioral data. Find lookalike audiences with higher purchase intent.
                            </p>
</div>
</div>

<div className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 reveal-on-scroll delay-100">
<div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-violet-500/10 group-hover:border-violet-500/20 transition-all duration-300">
<iconify-icon className="text-white/60 group-hover:text-violet-400 transition-colors" icon="lucide:line-chart" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Predictive LTV</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                                Forecast customer lifetime value before they buy. Focus resources on high-value cohorts automatically.
                            </p>
</div>
</div>

<div className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 reveal-on-scroll delay-200">
<div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-pink-500/10 group-hover:border-pink-500/20 transition-all duration-300">
<iconify-icon className="text-white/60 group-hover:text-pink-400 transition-colors" icon="lucide:messages-square" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Automated CRM</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                                Trigger personalized email and SMS sequences based on user actions. Nurture leads while you sleep.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen relative flex items-center justify-center py-24 px-6 bg-[#020617]">
<div className="max-w-3xl w-full mx-auto relative z-10 reveal-on-scroll">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Frequently asked questions</h2>
<p className="text-slate-400 text-sm">Everything you need to know about Aura's enterprise capabilities.</p>
</div>
<div className="space-y-0 border-t border-white/5">

<div className="group border-b border-white/5 transition-colors hover:bg-white/[0.01]">
<button className="w-full py-6 flex justify-between items-center text-left focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">How does the autonomous agent model work?</span>
<span className="ml-4 flex-shrink-0 text-white/40 group-hover:text-white transition-colors accordion-icon">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="18"></iconify-icon>
</span>
</button>
<div className="accordion-content overflow-hidden">
<div className="pb-6 pr-12">
<p className="text-sm text-slate-400 leading-relaxed font-light">
                                    Our agents operate as independent micro-services that connect to your ad networks via API. They monitor performance data in real-time (every 50ms) and autonomously adjust bids, pause underperforming creatives, and reallocate budget to high-ROI channels without human intervention.
                                </p>
</div>
</div>
</div>

<div className="group border-b border-white/5 transition-colors hover:bg-white/[0.01]">
<button className="w-full py-6 flex justify-between items-center text-left focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">Is my data secure with Aura?</span>
<span className="ml-4 flex-shrink-0 text-white/40 group-hover:text-white transition-colors accordion-icon">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="18"></iconify-icon>
</span>
</button>
<div className="accordion-content overflow-hidden">
<div className="pb-6 pr-12">
<p className="text-sm text-slate-400 leading-relaxed font-light">
                                    Absolutely. Aura is SOC 2 Type II compliant and GDPR ready. We use enterprise-grade encryption for all data in transit and at rest. Your customer data never trains our public models; it remains isolated within your dedicated instance.
                                </p>
</div>
</div>
</div>

<div className="group border-b border-white/5 transition-colors hover:bg-white/[0.01]">
<button className="w-full py-6 flex justify-between items-center text-left focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">Can I integrate with custom CRMs?</span>
<span className="ml-4 flex-shrink-0 text-white/40 group-hover:text-white transition-colors accordion-icon">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="18"></iconify-icon>
</span>
</button>
<div className="accordion-content overflow-hidden">
<div className="pb-6 pr-12">
<p className="text-sm text-slate-400 leading-relaxed font-light">
                                    Yes. Beyond our native integrations with Salesforce, HubSpot, and Marketo, Aura offers a robust REST API and Webhooks support, allowing you to connect with proprietary or legacy systems seamlessly.
                                </p>
</div>
</div>
</div>

<div className="group border-b border-white/5 transition-colors hover:bg-white/[0.01]">
<button className="w-full py-6 flex justify-between items-center text-left focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">What is the onboarding timeline?</span>
<span className="ml-4 flex-shrink-0 text-white/40 group-hover:text-white transition-colors accordion-icon">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="18"></iconify-icon>
</span>
</button>
<div className="accordion-content overflow-hidden">
<div className="pb-6 pr-12">
<p className="text-sm text-slate-400 leading-relaxed font-light">
                                    Most enterprise clients are fully operational within 2 weeks. This includes data syncing, agent training on historical data, and setting up compliance guardrails. We offer white-glove onboarding for all Enterprise plans.
                                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen flex flex-col justify-between bg-[#010208] relative border-t border-white/5">

<div className="flex-1 flex flex-col items-center justify-center relative z-10 px-6 py-24">
<div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none"></div>
<div className="text-center max-w-2xl reveal-on-scroll">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-white mb-8">
                        Ready to automate?
                    </h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="px-8 py-3.5 bg-white text-black rounded-full font-medium text-sm transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]">
                            Start 14-day trial
                        </button>
<button className="px-8 py-3.5 bg-white/5 border border-white/10 text-white rounded-full font-medium text-sm transition-all hover:bg-white/10">
                            Talk to Sales
                        </button>
</div>
</div>
</div>

<footer className="relative w-full border-t border-white/10 bg-[#010208] pt-16 pb-8 px-6 overflow-hidden">

<div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-blue-900/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2 flex flex-col gap-6 pr-8">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gradient-to-tr from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
<div className="w-2.5 h-2.5 bg-white rounded-full"></div>
</div>
<span className="text-lg font-semibold tracking-tight text-white">Aura</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                                The first autonomous marketing platform designed for the modern enterprise. Scale your growth with intelligence, not headcount.
                            </p>
<div className="flex gap-4 mt-2">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:github" width="16"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="16"></iconify-icon></a>
</div>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider">Product</h4>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Agents</a>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Predictive Analytics</a>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Integrations</a>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Enterprise</a>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Security</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider">Resources</h4>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Documentation</a>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">API Reference</a>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Case Studies</a>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Blog</a>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Community</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider">Company</h4>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">About</a>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Careers</a>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Brand</a>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider">Legal</h4>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Cookie Policy</a>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-slate-600">© 2024 Aura Systems Inc. All rights reserved.</p>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2 px-2 py-1 bg-white/5 rounded-md border border-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-[10px] font-medium text-slate-400">All systems normal</span>
</div>
</div>
</div>
</div>
</footer>
</section>
</div>



    </>
  );
}
