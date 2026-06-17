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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Scroll Reveal Animation
        const revealElements = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
        revealElements.forEach(el => revealObserver.observe(el));

        // FAQ Accordion Logic
        const faqButtons = document.querySelectorAll('.faq-btn');
        faqButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const content = btn.nextElementSibling;
                const icon = btn.querySelector('.faq-icon');
                document.querySelectorAll('.faq-content').forEach(c => {
                    if(c !== content && c.classList.contains('open')) {
                        c.classList.remove('open');
                        c.previousElementSibling.querySelector('.faq-icon').classList.remove('open');
                    }
                });
                content.classList.toggle('open');
                icon.classList.toggle('open');
            });
        });

        // Navbar blur effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg', 'shadow-black/50');
            } else {
                navbar.classList.remove('shadow-lg', 'shadow-black/50');
            }
        });

        // Cursor Glow
        const cursor = document.getElementById('cursor-glow');
        window.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
    
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
      
<div id="cursor-glow"></div>

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-white/5 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
<a className="text-base font-medium tracking-[0.2em] text-white" href="#">A E T H E R</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400 relative z-10">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
</div>
<a className="hidden md:inline-flex items-center justify-center text-xs font-medium bg-white text-black px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-colors relative overflow-hidden group" href="#contact">
<span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shine_1s_ease-in-out]"></span>
                Start Scaling
            </a>
<button className="md:hidden text-white p-2">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="glow-bg"></div>
<div className="rays"></div>
<div className="scene hidden md:block">
<div className="ring-container">
<div className="ring"></div>
<div className="ring"></div>
<div className="ring"></div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center flex flex-col items-center mt-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 reveal shadow-[0_0_15px_rgba(255,255,255,0.05)]">
<span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_#fff] animate-pulse"></span>
<span className="text-xs font-medium text-neutral-300">Accepting new partners for Q3</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-shine leading-[1.1] max-w-5xl reveal delay-100">
                We design brands that <br className="hidden md:block"/> dominate categories.
            </h1>
<p className="mt-8 text-lg md:text-xl text-neutral-400 max-w-2xl font-light leading-relaxed reveal delay-200">
                A premium growth and creative agency partnering with founders to build, reposition, and scale market-defining brands.
            </p>
<div className="mt-12 flex flex-col sm:flex-row items-center gap-4 reveal delay-200">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-black text-sm font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]" href="#contact">
                    Partner With Us
                </a>
<a className="w-full sm:w-auto px-8 py-4 border border-white/10 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-colors duration-300 backdrop-blur-md" href="#work">
                    View Selected Work
                </a>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-xs text-neutral-500 tracking-widest uppercase">Scroll</span>
<iconify-icon height="16" icon="solar:arrow-down-linear" width="16"></iconify-icon>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-neutral-950/50 backdrop-blur-sm relative z-10">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
<p className="text-center text-xs text-neutral-500 font-medium tracking-wider uppercase mb-8">Trusted by visionary founders at</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-semibold tracking-tighter">Acme Corp</span>
<span className="text-xl font-semibold tracking-widest uppercase">Lumina</span>
<span className="text-xl font-semibold tracking-tighter italic">Vanguard</span>
<span className="text-xl font-medium tracking-tight">ELEVATE</span>
<span className="text-xl font-semibold tracking-widest">NEXUS</span>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="about">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">
                        Aesthetics backed by <br/> ruthless strategy.
                    </h2>
<p className="text-base md:text-lg text-neutral-400 font-light leading-relaxed mb-6">
                        We don't just build pretty websites. We architect comprehensive brand ecosystems designed to scale. By bridging the gap between high-end creative direction and data-driven growth marketing, we turn concepts into category leaders.
                    </p>
<p className="text-base md:text-lg text-neutral-400 font-light leading-relaxed">
                        Our approach is lean, iterative, and entirely focused on generating disproportionate leverage for your brand in the digital landscape.
                    </p>
</div>

<div className="relative reveal delay-200 h-[400px] md:h-[500px] w-full flex items-center justify-center layer-container">
<div className="absolute inset-x-8 inset-y-12 layer layer-1"></div>
<div className="absolute inset-x-8 inset-y-12 layer layer-2"></div>
<div className="absolute inset-x-8 inset-y-12 layer layer-3 flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.05)] border-white/20">
<div className="text-center p-8">
<div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
<iconify-icon className="text-white" icon="solar:graph-up-linear" width="32"></iconify-icon>
</div>
<p className="text-sm text-neutral-400 mb-2 uppercase tracking-widest font-medium">Avg. Growth</p>
<p className="text-4xl font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">+340%</p>
<div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden mt-6">
<div className="w-3/4 h-full bg-gradient-to-r from-neutral-600 to-white rounded-full relative overflow-hidden">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-[shine_2s_infinite]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-neutral-950 overflow-hidden" id="services">

<div className="perspective-grid"></div>
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="mb-20 reveal bg-neutral-950/80 backdrop-blur-md inline-block p-4 rounded-3xl border border-white/5">
<span className="text-xs font-medium text-neutral-500 tracking-widest uppercase mb-2 block">Our Capabilities</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400">Full-stack brand architecture.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="md:col-span-2 bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 hover:bg-neutral-800/50 hover:border-white/20 transition-all duration-500 group reveal shadow-[0_0_30px_rgba(0,0,0,0.5)]">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
<iconify-icon className="text-white" icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Brand Strategy &amp; Identity</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-md">Positioning, visual language, and narrative design. We build the foundational DNA that separates premium brands from commodities.</p>
</div>
<div className="bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 hover:bg-neutral-800/50 hover:border-white/20 transition-all duration-500 group reveal delay-100">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
<iconify-icon className="text-white" icon="solar:monitor-smartphone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-4">Digital Experience</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Ultra-premium web design and platforms engineered for conversion.</p>
</div>
<div className="bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 hover:bg-neutral-800/50 hover:border-white/20 transition-all duration-500 group reveal delay-200">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
<iconify-icon className="text-white" icon="solar:rocket-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-4">Growth &amp; Launch</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Go-to-market strategies and scaling campaigns that drive equity.</p>
</div>
<div className="md:col-span-2 bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 hover:bg-neutral-800/50 hover:border-white/20 transition-all duration-500 group flex flex-col justify-between overflow-hidden relative reveal delay-100">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
<iconify-icon className="text-white" icon="solar:code-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Automation &amp; Systems</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-md">We implement backend infrastructure, CRM setups, and automated flows to ensure your operations scale as fast as your marketing.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="work">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 reveal">
<div>
<span className="text-xs font-medium text-neutral-500 tracking-widest uppercase mb-4 block">Case Studies</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter">Selected Index.</h2>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-neutral-300 transition-colors mt-6 md:mt-0 group" href="#">
                    View all projects 
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="space-y-12">

<div className="group relative block reveal">
<div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden bg-neutral-900 border border-white/10">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out] z-10 pointer-events-none"></div>
<img alt="Project 1" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out filter grayscale mix-blend-luminosity" src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&amp;w=2794&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">Aura Fintech</h3>
<p className="text-sm text-neutral-300 font-light">Brand Identity, App Design, Positioning</p>
</div>
<div className="hidden md:flex items-center gap-3">
<span className="px-4 py-1.5 rounded-full border border-white/20 text-xs backdrop-blur-md bg-white/5">Strategy</span>
<span className="px-4 py-1.5 rounded-full border border-white/20 text-xs backdrop-blur-md bg-white/5">UI/UX</span>
</div>
</div>
</div>
</div>
</div>

<div className="group relative block reveal">
<div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden bg-neutral-900 border border-white/10">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out] z-10 pointer-events-none"></div>
<img alt="Project 2" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out filter grayscale mix-blend-luminosity" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">Nova Hardware</h3>
<p className="text-sm text-neutral-300 font-light">E-commerce, 3D Direction, Launch</p>
</div>
<div className="hidden md:flex items-center gap-3">
<span className="px-4 py-1.5 rounded-full border border-white/20 text-xs backdrop-blur-md bg-white/5">Web Design</span>
<span className="px-4 py-1.5 rounded-full border border-white/20 text-xs backdrop-blur-md bg-white/5">Scaling</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-neutral-950 relative border-t border-white/5 overflow-hidden" id="process">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="text-center mb-20 reveal">
<span className="text-xs font-medium text-neutral-500 tracking-widest uppercase mb-4 block">Methodology</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400">How we engineer growth.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
<div className="relative z-10 reveal">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/20 flex items-center justify-center text-sm font-semibold mb-6 shadow-[0_0_20px_rgba(255,255,255,0.08)] relative overflow-hidden">
<span className="relative z-10">01</span>
</div>
<h4 className="text-lg font-semibold tracking-tight mb-3">Audit &amp; Discovery</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Deep dive into current metrics, brand perception, and market gaps to establish a baseline.</p>
</div>
<div className="relative z-10 reveal delay-100">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/20 flex items-center justify-center text-sm font-semibold mb-6 shadow-[0_0_20px_rgba(255,255,255,0.08)]">02</div>
<h4 className="text-lg font-semibold tracking-tight mb-3">Strategic Blueprint</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Defining the positioning, visual direction, and technical architecture required to scale.</p>
</div>
<div className="relative z-10 reveal delay-200">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/20 flex items-center justify-center text-sm font-semibold mb-6 shadow-[0_0_20px_rgba(255,255,255,0.08)]">03</div>
<h4 className="text-lg font-semibold tracking-tight mb-3">Creative Execution</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Building the assets—from high-converting websites to premium brand identities and content.</p>
</div>
<div className="relative z-10 reveal delay-200">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/20 flex items-center justify-center text-sm font-semibold mb-6 shadow-[0_0_20px_rgba(255,255,255,0.08)]">04</div>
<h4 className="text-lg font-semibold tracking-tight mb-3">Scale &amp; Optimize</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Deploying growth systems, running experiments, and iterating based on real-world data.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="rays opacity-30"></div>
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center reveal relative z-10">
<iconify-icon className="text-white/20 mb-8 mx-auto block" icon="solar:quote-right-bold" width="48"></iconify-icon>
<h3 className="text-2xl md:text-4xl font-medium tracking-tight leading-snug mb-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400">
                "AETHER didn't just redesign our website; they completely restructured how we communicate value. We saw a 3x increase in enterprise leads within 60 days of launch."
            </h3>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-12 rounded-full bg-neutral-800 overflow-hidden border border-white/10 p-0.5">
<img alt="Client" className="w-full h-full object-cover rounded-full grayscale" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-left">
<p className="text-sm font-semibold tracking-tight">Marcus Thorne</p>
<p className="text-xs text-neutral-400">Founder, Vanguard Tech</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-neutral-950 border-t border-white/5">
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-12 text-center reveal text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400">Frequently Asked.</h2>
<div className="space-y-4">
<div className="border border-white/10 rounded-2xl bg-neutral-900/20 backdrop-blur-sm overflow-hidden reveal hover:border-white/20 transition-colors">
<button className="faq-btn w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none">
<span className="text-base font-medium">What is your typical engagement size?</span>
<iconify-icon className="faq-icon text-neutral-400" icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
<div className="faq-content px-6 pb-0 text-sm text-neutral-400 leading-relaxed">
                        We primarily partner with funded startups and established brands. Our comprehensive projects typically start at $25k, ensuring we can dedicate top-tier senior resources to your growth.
                        <div className="h-5"></div>
</div>
</div>
<div className="border border-white/10 rounded-2xl bg-neutral-900/20 backdrop-blur-sm overflow-hidden reveal delay-100 hover:border-white/20 transition-colors">
<button className="faq-btn w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none">
<span className="text-base font-medium">How long does a brand scaling project take?</span>
<iconify-icon className="faq-icon text-neutral-400" icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
<div className="faq-content px-6 pb-0 text-sm text-neutral-400 leading-relaxed">
                        A full end-to-end engagement (Strategy, Identity, Web Design, and Launch Systems) usually takes between 8 to 12 weeks. We move fast but never compromise on premium execution.
                        <div className="h-5"></div>
</div>
</div>
<div className="border border-white/10 rounded-2xl bg-neutral-900/20 backdrop-blur-sm overflow-hidden reveal delay-200 hover:border-white/20 transition-colors">
<button className="faq-btn w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none">
<span className="text-base font-medium">Do you work with early-stage founders?</span>
<iconify-icon className="faq-icon text-neutral-400" icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
<div className="faq-content px-6 pb-0 text-sm text-neutral-400 leading-relaxed">
                        Yes, if the vision is aligned and the product has market potential. We offer specialized sprint packages for seed-stage startups needing rapid, high-impact positioning before raising Series A.
                        <div className="h-5"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden border-t border-white/5" id="contact">
<div className="absolute inset-0 glow-bg opacity-60"></div>
<div className="absolute right-0 bottom-0 w-96 h-96 bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10 reveal">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 text-shine">Ready to dominate?</h2>
<p className="text-lg text-neutral-400 font-light mb-10 max-w-xl mx-auto">
                Stop competing on price and start competing on perception. Let's architect a brand that commands authority.
            </p>
<a className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-sm font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] group" href="mailto:hello@aether.agency">
                Initiate Project
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-neutral-950 relative z-10">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<a className="text-sm font-medium tracking-[0.2em] text-white" href="#">A E T H E R</a>
<div className="flex items-center gap-6 text-xs text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Dribbble</a>
</div>
<p className="text-xs text-neutral-600">
                © 2024 Aether Agency. All rights reserved.
            </p>
</div>
</footer>


    </>
  );
}
