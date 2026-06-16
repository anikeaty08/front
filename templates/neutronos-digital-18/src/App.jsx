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



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5,
                class: "lucide"
            }
        });

        // Hero Text Animation
        const titleElement = document.getElementById('hero-title');
        const textToAnimate = "Architecting the Digital Event Horizon";
        const words = textToAnimate.split(' ');
        
        titleElement.innerHTML = words.map((word, index) => 
            `<span class="inline-block whitespace-pre" style="animation-delay: ${index * 0.1 + 0.2}s">${word} </span>`
        ).join('');

        // Scroll Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-reveal').forEach(el => {
            observer.observe(el);
        });

        // Carousel Logic
        const cards = [document.getElementById('card1'), document.getElementById('card2'), document.getElementById('card3')];
        let currentIndex = 0;
        
        const positions = [
            'z-30 opacity-100 transform scale-100 translate-x-0 blur-none', 
            'z-20 opacity-60 transform scale-90 translate-x-[120px] blur-[2px]', 
            'z-10 opacity-40 transform scale-80 -translate-x-[120px] blur-[4px]' 
        ];

        function updateCarousel() {
            cards.forEach((card, i) => {
                let posIndex = (i - currentIndex + 3) % 3;
                card.className = `card-item w-72 h-96 bg-neutral-900 border border-neutral-700 rounded-2xl p-6 shadow-xl flex flex-col justify-between absolute transition-all duration-700 ease-custom ${positions[posIndex]}`;
                if(posIndex === 0) {
                    card.classList.replace('border-neutral-800', 'border-neutral-600');
                    card.classList.add('shadow-blue-500/10');
                } else {
                    card.classList.remove('shadow-blue-500/10');
                }
            });
        }

        document.getElementById('nextBtn').addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % 3;
            updateCarousel();
        });

        document.getElementById('prevBtn').addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + 3) % 3;
            updateCarousel();
        });

        setInterval(() => {
            currentIndex = (currentIndex + 1) % 3;
            updateCarousel();
        }, 5000);

        // Process Animation Logic
        let processStep = 1;
        const totalSteps = 3;
        
        function updateProcess() {
            // Reset all
            document.querySelectorAll('.process-step').forEach(el => {
                el.classList.remove('process-active', 'opacity-100');
                el.classList.add('opacity-50');
            });
            
            // Activate current text
            const activeText = document.querySelector(`.process-step[data-step="${processStep}"]`);
            if(activeText) {
                activeText.classList.add('process-active', 'opacity-100');
                activeText.classList.remove('opacity-50');
            }

            // Show current visual
            document.querySelectorAll('[id^="visual-"]').forEach(el => {
                el.classList.remove('opacity-100');
                el.classList.add('opacity-0');
            });
            document.getElementById(`visual-${processStep}`).classList.remove('opacity-0');
            document.getElementById(`visual-${processStep}`).classList.add('opacity-100');

            processStep = processStep < totalSteps ? processStep + 1 : 1;
        }

        setInterval(updateProcess, 3000); // Change step every 3 seconds

        updateCarousel();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="intro-clip fixed inset-0 z-50 bg-black flex items-center justify-center pointer-events-none">
<div className="w-full h-full bg-white text-black flex items-center justify-center">
<h1 className="text-4xl tracking-tighter font-medium">NEUTRONOS</h1>
</div>
</div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-[#020408]/70 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
<span className="text-lg font-medium tracking-tight text-white">Neutronos</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-400">
<a className="hover:text-white transition-colors" href="#">Origins</a>
<a className="hover:text-white transition-colors" href="#">Process</a>
<a className="hover:text-white transition-colors" href="#">Work</a>
</div>
<a className="btn-gradient-border px-4 py-2 text-xs font-medium text-white hover:opacity-80 transition-opacity" href="#">
                Start Project
            </a>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 z-0">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-60 pointer-events-none">
<div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[100px] mix-blend-screen animate-pulse"></div>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020408]/80 to-[#020408]"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-[fade-in-up_1s_both]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-xs font-medium text-blue-200">Established 7 Days Ago. Speed is DNA.</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight font-medium text-white mb-8 leading-[0.95] reveal-text-container" id="hero-title">

</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed scroll-reveal delay-300">
                I am Shafayet. Neutronos is a new-age digital agency built on the premise of singularity. We don't just build websites; we architect digital event horizons.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 scroll-reveal delay-500">
<button className="group relative px-8 py-3 bg-white text-black text-sm font-medium rounded-full overflow-hidden transition-transform active:scale-95">
<span className="relative z-10 flex items-center gap-2">
                        Get Audit
                        <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</span>
<div className="absolute inset-0 bg-blue-50 hover:bg-blue-100 transition-colors"></div>
</button>
<button className="btn-gradient-border px-8 py-3 text-sm font-medium text-white transition-transform active:scale-95 hover:bg-white/5">
                    View Showreel
                </button>
</div>
</div>
</header>

<section className="relative py-24 px-6 border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 scroll-reveal">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Built to scale<br/>beyond limits</h2>
<p className="text-lg text-slate-400 font-light">Neutronos provides the infrastructure for brands ready to disrupt.</p>
</div>
<a className="text-sm text-white border-b border-white/20 pb-1 hover:border-white transition-colors mt-4 md:mt-0" href="#">View all services</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
<svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-20" preserveaspectratio="none">
<path className="beam-path" d="M 200 0 V 400" fill="none" stroke="cyan" strokeWidth="1"></path>
</svg>
<div className="group relative bg-[#0a0c10] border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 transition-colors duration-300 z-10 overflow-hidden scroll-reveal shadow-sm">
<div className="h-40 mb-6 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-lg flex items-center justify-center border border-white/5 overflow-hidden">
<i className="w-8 h-8 text-white/80" data-lucide="zap"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Hyperspeed Dev</h3>
<p className="text-sm text-slate-400 font-light mb-4">React, Next.js, and WebGL implementations that load instantly.</p>
</div>
<div className="group relative bg-[#0a0c10] border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 transition-colors duration-300 z-10 overflow-hidden scroll-reveal delay-100 shadow-sm">
<div className="h-40 mb-6 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-lg flex items-center justify-center border border-white/5 overflow-hidden">
<i className="w-8 h-8 text-white/80" data-lucide="orbit"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Brand Gravity</h3>
<p className="text-sm text-slate-400 font-light mb-4">Visual identities so dense they pull customers into your orbit.</p>
</div>
<div className="group relative bg-[#0a0c10] border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 transition-colors duration-300 z-10 overflow-hidden scroll-reveal delay-200 shadow-sm">
<div className="h-40 mb-6 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-lg flex items-center justify-center border border-white/5 overflow-hidden">
<i className="w-8 h-8 text-white/80" data-lucide="box"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">3D Environments</h3>
<p className="text-sm text-slate-400 font-light mb-4">Immersive Three.js experiences. The web is no longer flat.</p>
</div>
<div className="group relative bg-[#0a0c10] border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 transition-colors duration-300 z-10 overflow-hidden scroll-reveal delay-300 shadow-sm">
<div className="h-40 mb-6 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-lg flex items-center justify-center border border-white/5 overflow-hidden">
<i className="w-8 h-8 text-white/80" data-lucide="activity"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Growth Systems</h3>
<p className="text-sm text-slate-400 font-light mb-4">Analytics and funnel optimization backed by data science.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#03050a] border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="mb-16 scroll-reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">The Neutron Flow</h2>
<p className="text-lg text-slate-400 font-light">From abstract concept to shipped reality in three calculated steps.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="relative space-y-12 pl-12">
<div className="process-line"></div>
<div className="relative process-step process-active" data-step="1">
<div className="process-indicator top-1"></div>
<h3 className="text-xl font-medium text-white mb-2 transition-colors">1. Blueprint &amp; Architecture</h3>
<p className="text-slate-400 text-sm font-light leading-relaxed">We map the singularity. Wireframes, user journeys, and database schemas are established with mathematical precision.</p>
</div>
<div className="relative process-step opacity-50" data-step="2">
<div className="process-indicator top-1"></div>
<h3 className="text-xl font-medium text-white mb-2 transition-colors">2. Fusion Development</h3>
<p className="text-slate-400 text-sm font-light leading-relaxed">Code execution begins. High-performance stacks (Next.js, Rust, Wasm) are merged to create the core infrastructure.</p>
</div>
<div className="relative process-step opacity-50" data-step="3">
<div className="process-indicator top-1"></div>
<h3 className="text-xl font-medium text-white mb-2 transition-colors">3. Ignition &amp; Scale</h3>
<p className="text-slate-400 text-sm font-light leading-relaxed">Global deployment via edge networks. Analytics sensors engaged. The product enters orbit.</p>
</div>
</div>

<div className="relative h-[400px] w-full bg-[#0a0c10] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col scroll-reveal delay-200">

<div className="h-10 bg-[#0f1115] border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
<div className="ml-4 text-[10px] text-slate-500 font-mono">neutron_terminal — v.2.4.0</div>
</div>

<div className="flex-1 p-6 font-mono text-sm relative">

<div className="absolute inset-0 p-6 transition-opacity duration-500" id="visual-1">
<div className="grid grid-cols-3 gap-4 h-full opacity-30">
<div className="border border-dashed border-blue-500 rounded h-24"></div>
<div className="col-span-2 border border-dashed border-blue-500 rounded h-24"></div>
<div className="col-span-3 border border-dashed border-blue-500 rounded h-32"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded border border-blue-500/20 typing-cursor">Constructing Wireframe...</span>
</div>
</div>

<div className="absolute inset-0 p-6 transition-opacity duration-500 opacity-0 bg-[#0a0c10]" id="visual-2">
<div className="text-green-400/80 space-y-2">
<p><span className="text-purple-400">const</span> fusion <span className="text-white">=</span> <span className="text-yellow-300">async</span> () <span className="text-white">=&gt;</span> {</p>
<p className="pl-4"><span className="text-slate-500">// Initiating core reactor</span></p>
<p className="pl-4"><span className="text-blue-400">await</span> engine.compile({</p>
<p className="pl-8">mode: <span className="text-orange-300">'hyper'</span>,</p>
<p className="pl-8">optimization: <span className="text-blue-400">true</span></p>
<p className="pl-4">});</p>
<p className="pl-4"><span className="text-blue-400">return</span> <span className="text-orange-300">'stable'</span>;</p>
<p>}</p>
<div className="h-1 w-full bg-slate-800 mt-4 rounded overflow-hidden">
<div className="h-full bg-green-500 w-[70%] animate-pulse"></div>
</div>
</div>
</div>

<div className="absolute inset-0 p-0 transition-opacity duration-500 opacity-0 bg-[#0a0c10] flex items-center justify-center overflow-hidden" id="visual-3">
<div className="absolute inset-0 grid-anim opacity-30"></div>
<div className="relative z-10 text-center">
<div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.6)] animate-bounce">
<i className="text-white w-8 h-8" data-lucide="rocket"></i>
</div>
<h4 className="text-white text-lg font-medium">System Online</h4>
<p className="text-slate-500 text-xs mt-1">Latency: 4ms | Global Status: OK</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 scroll-reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Selected Works</h2>
<a className="text-sm text-slate-400 hover:text-white transition-colors mt-4 md:mt-0 flex items-center gap-1" href="#">
                    View Case Studies <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="bento-grid scroll-reveal delay-100">

<div className="bento-item bento-col-span-2 bento-row-span-2 bg-gradient-to-b from-[#111] to-[#050505] p-8 group">
<div className="flex justify-between items-start mb-8 relative z-10">
<div>
<h3 className="text-2xl font-medium text-white mb-1">Nexus Protocol</h3>
<p className="text-slate-500 text-sm">DeFi Dashboard &amp; Design System</p>
</div>
<div className="p-2 border border-white/10 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
<i className="w-4 h-4 text-white" data-lucide="arrow-right"></i>
</div>
</div>
<div className="absolute bottom-0 right-0 w-[90%] h-[70%] bg-[#0a0c10] border-t border-l border-white/10 rounded-tl-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2">

<div className="p-6">
<div className="flex gap-4 mb-6">
<div className="w-1/3 h-24 bg-gradient-to-br from-indigo-500/10 to-transparent border border-indigo-500/20 rounded-lg p-3">
<div className="w-8 h-8 bg-indigo-500/20 rounded-full mb-2"></div>
<div className="w-16 h-2 bg-indigo-500/20 rounded full"></div>
</div>
<div className="w-1/3 h-24 bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-lg p-3">
<div className="w-8 h-8 bg-cyan-500/20 rounded-full mb-2"></div>
<div className="w-16 h-2 bg-cyan-500/20 rounded full"></div>
</div>
<div className="w-1/3 h-24 bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-lg p-3">
<div className="w-8 h-8 bg-purple-500/20 rounded-full mb-2"></div>
<div className="w-16 h-2 bg-purple-500/20 rounded full"></div>
</div>
</div>
<div className="w-full h-32 bg-white/5 rounded-lg border border-white/5 relative overflow-hidden">
<svg className="absolute bottom-0 left-0 w-full h-20" preserveaspectratio="none">
<path d="M0 50 Q 50 20 100 50 T 200 50 T 300 30 T 400 60 V 80 H 0 Z" fill="rgba(59, 130, 246, 0.1)" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="bento-item p-6 group flex flex-col justify-between min-h-[240px]">
<div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"></div>
<div className="relative z-10">
<div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 border border-emerald-500/20">
<i className="w-5 h-5 text-emerald-500" data-lucide="terminal"></i>
</div>
<h3 className="text-lg font-medium text-white">Vortex API</h3>
<p className="text-slate-500 text-xs mt-1">High-frequency trading infrastructure.</p>
</div>
<div className="mt-4 bg-[#050505] p-3 rounded-md border border-white/5 text-[10px] font-mono text-slate-400 overflow-hidden">
<span className="text-purple-400">export</span> <span className="text-blue-400">interface</span> Trade {<br/>
                          id: <span className="text-yellow-300">string</span>;<br/>
                          amount: <span className="text-yellow-300">number</span>;<br/>
                        }
                    </div>
</div>

<div className="bento-item bento-row-span-2 relative group overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent"></div>
<div className="p-6 relative z-10">
<h3 className="text-lg font-medium text-white">Sphere Mobile</h3>
<p className="text-slate-500 text-xs mt-1">iOS &amp; Android Ecosystem</p>
</div>
<div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[180px] h-[300px] bg-[#050505] border border-white/10 rounded-t-3xl shadow-2xl p-2 transition-transform duration-500 group-hover:translate-y-[-10px]">
<div className="w-full h-full bg-[#111] rounded-t-2xl overflow-hidden relative">
<div className="absolute top-0 w-full h-32 bg-gradient-to-b from-blue-600/20 to-transparent"></div>
<div className="p-4 flex flex-col gap-3">
<div className="w-8 h-8 rounded-full bg-white/10"></div>
<div className="w-20 h-2 bg-white/20 rounded-full"></div>
<div className="w-full h-24 bg-white/5 rounded-xl border border-white/5 mt-2"></div>
</div>
</div>
</div>
</div>

<div className="bento-item p-6 group min-h-[240px]">
<div className="h-full flex flex-col justify-between relative z-10">
<div>
<h3 className="text-lg font-medium text-white">Global Reach</h3>
<p className="text-slate-500 text-xs mt-1">Multi-region edge deployment.</p>
</div>
<div className="relative w-full h-24 mt-4 opacity-60 group-hover:opacity-100 transition-opacity">

<div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping"></div>
<div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
<div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full"></div>
<div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white rounded-full"></div>
<svg className="absolute inset-0 w-full h-full" style={{transform: 'scaleY(0.5)'}}>
<path d="M 80 40 Q 150 10 220 30" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4 4"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-black/20 overflow-hidden">
<p className="text-center text-xs font-medium text-slate-500 mb-8 uppercase tracking-widest">Technologies &amp; Partners</p>
<div className="marquee-container w-full relative">
<div className="flex gap-16 w-max marquee-content items-center">
<span className="text-2xl font-semibold text-slate-600 flex items-center gap-2"><i className="w-6 h-6" data-lucide="hexagon"></i> React</span>
<span className="text-2xl font-semibold text-slate-600 flex items-center gap-2"><i className="w-6 h-6" data-lucide="triangle"></i> Vercel</span>
<span className="text-2xl font-semibold text-slate-600 flex items-center gap-2"><i className="w-6 h-6" data-lucide="wind"></i> Tailwind</span>
<span className="text-2xl font-semibold text-slate-600 flex items-center gap-2"><i className="w-6 h-6" data-lucide="box"></i> Three.js</span>
<span className="text-2xl font-semibold text-slate-600 flex items-center gap-2"><i className="w-6 h-6" data-lucide="database"></i> Supabase</span>
<span className="text-2xl font-semibold text-slate-600 flex items-center gap-2"><i className="w-6 h-6" data-lucide="figma"></i> Figma</span>
<span className="text-2xl font-semibold text-slate-600 flex items-center gap-2"><i className="w-6 h-6" data-lucide="code"></i> TypeScript</span>
<span className="text-2xl font-semibold text-slate-600 flex items-center gap-2"><i className="w-6 h-6" data-lucide="hexagon"></i> React</span>
<span className="text-2xl font-semibold text-slate-600 flex items-center gap-2"><i className="w-6 h-6" data-lucide="triangle"></i> Vercel</span>
<span className="text-2xl font-semibold text-slate-600 flex items-center gap-2"><i className="w-6 h-6" data-lucide="wind"></i> Tailwind</span>
<span className="text-2xl font-semibold text-slate-600 flex items-center gap-2"><i className="w-6 h-6" data-lucide="box"></i> Three.js</span>
<span className="text-2xl font-semibold text-slate-600 flex items-center gap-2"><i className="w-6 h-6" data-lucide="database"></i> Supabase</span>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#03050a]">
<div className="max-w-7xl mx-auto">
<div className="mb-12 scroll-reveal">
<span className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-2 block">By the numbers</span>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">Fueling the next<br/>generation.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
<div className="scroll-reveal delay-100">
<div className="text-6xl md:text-7xl font-medium text-white tracking-tight mb-2">100<span className="text-blue-500">%</span></div>
<div className="text-sm text-slate-400 font-light">Commitment to pixel perfection</div>
</div>
<div className="scroll-reveal delay-200">
<div className="text-6xl md:text-7xl font-medium text-white tracking-tight mb-2">7<span className="text-2xl align-top ml-1 text-slate-500">Days</span></div>
<div className="text-sm text-slate-400 font-light">Since inception. Rapid growth.</div>
</div>
<div className="scroll-reveal delay-300">
<div className="text-6xl md:text-7xl font-medium text-white tracking-tight mb-2">24<span className="text-2xl align-top ml-1 text-slate-500">/7</span></div>
<div className="text-sm text-slate-400 font-light">Global support coverage</div>
</div>
<div className="scroll-reveal delay-400">
<div className="text-6xl md:text-7xl font-medium text-white tracking-tight mb-2">19<span className="text-2xl align-top ml-1 text-slate-500">Yo</span></div>
<div className="text-sm text-slate-400 font-light">Visionary Founder, Shafayet</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 overflow-hidden relative">
<div className="sonar-emitter absolute top-1/2 left-1/4">
<div className="sonar-wave"></div>
<div className="sonar-wave" style={{animationDelay: '1s'}}></div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2 scroll-reveal">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">"Crucial to moving quickly."</h2>
<p className="text-lg text-slate-400 font-light mb-8">Neutronos enabled us to launch our MVP in record time. The dark mode aesthetic perfectly matched our crypto infrastructure.</p>
<div className="flex items-center gap-4">
<div className="flex flex-col">
<span className="text-white font-medium">Sarah Jenkins</span>
<span className="text-slate-500 text-sm">CTO, BlockSpace</span>
</div>
</div>
<div className="flex gap-4 mt-12">
<button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white" id="prevBtn">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white" id="nextBtn">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div className="w-full md:w-1/2 h-[500px] relative card-carousel flex items-center justify-center scroll-reveal delay-200">
<div className="card-item w-72 h-96 bg-neutral-900 border border-neutral-700 rounded-2xl p-6 shadow-xl flex flex-col justify-between absolute z-30 opacity-100 transform scale-100 translate-x-0" id="card1">
<div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
<i className="text-blue-400" data-lucide="rocket"></i>
</div>
<div className="h-full">
<h4 className="text-white font-medium text-lg mt-2">Launch Strategy</h4>
<p className="text-slate-400 text-sm mt-2">Go to market with high velocity.</p>
</div>
<div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-3/4"></div>
</div>
</div>
<div className="card-item w-72 h-96 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between absolute z-20 opacity-60 transform scale-90 translate-x-[120px] translate-z-[-50px] rotate-y-[-15deg]" id="card2">
<div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
<i className="text-purple-400" data-lucide="scan-face"></i>
</div>
<div className="h-full">
<h4 className="text-white font-medium text-lg mt-2">User Identity</h4>
<p className="text-slate-400 text-sm mt-2">Secure authentication flows.</p>
</div>
<div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-purple-500 w-1/2"></div>
</div>
</div>
<div className="card-item w-72 h-96 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between absolute z-10 opacity-40 transform scale-80 translate-x-[-120px] translate-z-[-100px] rotate-y-[15deg]" id="card3">
<div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
<i className="text-green-400" data-lucide="bar-chart"></i>
</div>
<div className="h-full">
<h4 className="text-white font-medium text-lg mt-2">Analytics</h4>
<p className="text-slate-400 text-sm mt-2">Real-time data processing.</p>
</div>
<div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-full"></div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020408] pt-20 pb-10 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-6">Neutronos</h3>
<div className="flex gap-4">
<button className="px-6 py-2 bg-white text-black text-xs font-medium rounded-md hover:bg-slate-200 transition-colors">Contact Sales</button>
<button className="px-6 py-2 bg-neutral-800 text-white text-xs font-medium rounded-md hover:bg-neutral-700 transition-colors">Sign In</button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-16 text-sm">
<div className="flex flex-col gap-3">
<span className="text-white font-medium mb-2">Products</span>
<a className="text-slate-500 hover:text-white transition-colors" href="#">Fund Admin</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">Venture</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">Tokenization</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-white font-medium mb-2">Company</span>
<a className="text-slate-500 hover:text-white transition-colors" href="#">About</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">Careers</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">Blog</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-white font-medium mb-2">Socials</span>
<a className="text-slate-500 hover:text-white transition-colors" href="#">Twitter</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
<p>© 2024 Neutronos Inc. All rights reserved. Designed by Shafayet.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-400" href="#">Terms</a>
<a className="hover:text-slate-400" href="#">Privacy</a>
<a className="hover:text-slate-400" href="#">Cookies</a>
</div>
</div>
</footer>


    </>
  );
}
