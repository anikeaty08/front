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



        // Initialize Icons
        lucide.createIcons();

        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // --- Custom Cursor Logic ---
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');

        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
            gsap.to(cursorOutline, { x: posX, y: posY, duration: 0.15, ease: "power2.out" });
        });

        document.querySelectorAll('a, button, .service-card').forEach(el => {
            el.addEventListener('mouseenter', () => gsap.to(cursorOutline, { scale: 1.5, duration: 0.2 }));
            el.addEventListener('mouseleave', () => gsap.to(cursorOutline, { scale: 1, duration: 0.2 }));
        });

        // --- Hero Animation ---
        const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
        heroTl
            .to('.logo-reveal', { opacity: 1, y: 0, duration: 0.8, delay: 0.2 })
            .to('.nav-links', { opacity: 1, duration: 0.8 }, "-=0.6")
            .to('.nav-cta', { opacity: 1, duration: 0.8 }, "-=0.6")
            .to('.hero-badge', { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
            .to('.hero-title', { opacity: 1, y: 0, duration: 1, ease: "power4.out" }, "-=0.4")
            .to('.hero-text', { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
            .to('.hero-btns', { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
            .to('.scroll-indicator', { opacity: 1, duration: 1 }, "-=0.4");

        // 3D Hero Cards Float
        gsap.to('#card-1', { y: -15, rotation: 2, duration: 4, yoyo: true, repeat: -1, ease: "sine.inOut" });
        gsap.to('#card-2', { y: 20, rotation: -2, duration: 5, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 0.5 });
        gsap.to('#card-3', { y: -10, duration: 3.5, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 1 });

        // Mouse Parallax for Hero
        const heroSection = document.querySelector('section');
        const heroVisual = document.getElementById('hero-visual');
        heroSection.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            gsap.to(heroVisual, { rotationY: -20 + x, rotationX: 20 - y, duration: 1, ease: "power2.out" });
        });

        // --- Scroll Trigger Animations ---

        // Services Stagger
        gsap.utils.toArray('.service-card').forEach((card, i) => {
            gsap.to(card, {
                scrollTrigger: { trigger: '#services', start: "top 75%" },
                opacity: 1, y: 0, duration: 0.8, delay: i * 0.1, ease: "power3.out"
            });
        });

        // Process Steps
        gsap.utils.toArray('.process-step').forEach((step, i) => {
            gsap.to(step, {
                scrollTrigger: { trigger: step, start: "top 80%" },
                opacity: 1, x: 0, duration: 0.8, ease: "power3.out"
            });
        });

        // CTA Reveal
        gsap.to('.cta-title', { scrollTrigger: { trigger: '.cta-title', start: "top 80%" }, opacity: 1, y: 0, duration: 0.8 });
        gsap.to('.cta-text', { scrollTrigger: { trigger: '.cta-text', start: "top 80%" }, opacity: 1, y: 0, duration: 0.8, delay: 0.1 });
        gsap.to('.cta-btn', { scrollTrigger: { trigger: '.cta-btn', start: "top 80%" }, opacity: 1, y: 0, duration: 0.8, delay: 0.2 });
    
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
      

<div className="cursor-dot hidden md:block"></div>
<div className="cursor-outline hidden md:block"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020204]/60 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3 logo-reveal opacity-0">
<div className="relative w-8 h-8 flex items-center justify-center">
<div className="absolute inset-0 bg-purple-600 blur-lg opacity-40"></div>
<div className="relative w-full h-full rounded-lg bg-gradient-to-b from-white/10 to-transparent border border-white/10 flex items-center justify-center">
<i className="text-white w-4 h-4" data-lucide="aperture"></i>
</div>
</div>
<span className="text-white font-medium tracking-tight text-sm">Webnoxy</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400 nav-links opacity-0">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#results">Results</a>
</div>
<div className="nav-cta opacity-0">
<button className="text-xs font-medium text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
                    Accepting New Projects
                </button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none opacity-40"></div>
<div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
<div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">

<div className="max-w-2xl pt-10 lg:pt-0">
<div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-purple-300 mb-8 opacity-0">
<span className="font-mono text-[10px] text-slate-400">AGENCY //</span>
<span>WordPress &amp; SEO Experts</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.95] text-white mb-8 hero-title opacity-0">
                    Custom <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-white">WordPress</span><br/>
                    Solutions.
                </h1>
<p className="text-lg text-slate-400 max-w-md leading-relaxed mb-10 hero-text opacity-0">
                    We specialize in pixel-perfect Figma to Elementor conversions, WooCommerce scaling, and technical SEO that dominates search rankings.
                </p>
<div className="flex flex-wrap items-center gap-4 hero-btns opacity-0">
<button className="group relative px-6 py-3.5 bg-white text-black rounded-full text-sm font-semibold overflow-hidden hover:scale-105 transition-transform duration-300">
<div className="absolute inset-0 bg-gradient-to-r from-slate-200 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="relative flex items-center gap-2">
                            Start Project <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</span>
</button>
<button className="px-6 py-3.5 text-slate-300 hover:text-white text-sm font-medium border-b border-transparent hover:border-white/20 transition-all">
                        View Case Studies
                    </button>
</div>
</div>

<div className="hidden lg:block perspective-container h-[600px] relative">
<div className="hero-visual w-full h-full relative" id="hero-visual">

<div className="absolute top-1/4 left-1/4 w-80 h-96 glass rounded-2xl border border-white/10 z-0 p-6 opacity-40 scale-90" id="card-1">
<div className="flex gap-2 mb-6">
<div className="w-3 h-3 rounded-full bg-white/20"></div>
<div className="w-3 h-3 rounded-full bg-white/20"></div>
</div>
<div className="space-y-3">
<div className="h-2 w-full bg-white/5 rounded-full"></div>
<div className="h-2 w-2/3 bg-white/5 rounded-full"></div>
</div>
</div>

<div className="absolute top-20 right-20 w-80 h-80 glass bg-gradient-to-br from-purple-900/20 to-black rounded-2xl border border-white/10 z-10 p-6 backdrop-blur-md" id="card-2">
<div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4 text-purple-300">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
</div>
<div className="text-3xl font-medium text-white mb-1">+420%</div>
<div className="text-xs text-slate-400 mb-6">Organic Traffic (SEO)</div>
<div className="h-32 flex items-end justify-between gap-1">
<div className="w-full bg-purple-500/20 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-purple-500/30 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-purple-500/50 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-purple-500/80 rounded-t-sm h-[70%]"></div>
<div className="w-full bg-purple-500 rounded-t-sm h-[90%]"></div>
</div>
</div>

<div className="absolute bottom-20 left-10 w-96 h-64 bg-[#0A0A0A] rounded-2xl border border-white/10 z-20 p-6 shadow-2xl shadow-purple-900/20" id="card-3">
<div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
<span className="text-xs text-slate-500 font-mono">wp-config.php</span>
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
</div>
<div className="font-mono text-xs space-y-2">
<div className="text-pink-400">define(<span className="text-blue-400">'WP_DEBUG'</span>, <span className="text-purple-400">false</span>);</div>
<div className="text-pink-400">define(<span className="text-blue-400">'WP_CACHE'</span>, <span className="text-purple-400">true</span>);</div>
<div className="text-slate-500">// Optimized for Speed</div>
<div className="text-green-400">$seo_score = 100;</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 scroll-indicator">
<span className="text-[10px] uppercase tracking-widest text-slate-500">Scroll</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent"></div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-white/[0.01]">
<div className="relative flex overflow-x-hidden group">
<div className="animate-marquee whitespace-nowrap flex items-center gap-20">
<span className="text-xl font-medium text-slate-600 flex items-center gap-2"><i className="w-5 h-5" data-lucide="layers"></i> WORDPRESS</span>
<span className="text-xl font-medium text-slate-600 flex items-center gap-2"><i className="w-5 h-5" data-lucide="shopping-cart"></i> WOOCOMMERCE</span>
<span className="text-xl font-medium text-slate-600 flex items-center gap-2"><i className="w-5 h-5" data-lucide="layout-template"></i> ELEMENTOR</span>
<span className="text-xl font-medium text-slate-600 flex items-center gap-2"><i className="w-5 h-5" data-lucide="figma"></i> FIGMA</span>
<span className="text-xl font-medium text-slate-600 flex items-center gap-2"><i className="w-5 h-5" data-lucide="search"></i> SEO</span>
<span className="text-xl font-medium text-slate-600 flex items-center gap-2"><i className="w-5 h-5" data-lucide="code"></i> CUSTOM CODE</span>

<span className="text-xl font-medium text-slate-600 flex items-center gap-2"><i className="w-5 h-5" data-lucide="layers"></i> WORDPRESS</span>
<span className="text-xl font-medium text-slate-600 flex items-center gap-2"><i className="w-5 h-5" data-lucide="shopping-cart"></i> WOOCOMMERCE</span>
<span className="text-xl font-medium text-slate-600 flex items-center gap-2"><i className="w-5 h-5" data-lucide="layout-template"></i> ELEMENTOR</span>
<span className="text-xl font-medium text-slate-600 flex items-center gap-2"><i className="w-5 h-5" data-lucide="figma"></i> FIGMA</span>
<span className="text-xl font-medium text-slate-600 flex items-center gap-2"><i className="w-5 h-5" data-lucide="search"></i> SEO</span>
</div>
</div>
</section>

<section className="py-32 px-6 relative bg-[#020204]" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-20 text-center md:text-left">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">
                    Our <span className="text-slate-500">Expertise</span>
</h2>
<p className="text-slate-400 max-w-xl text-lg">
                    We turn designs into functional WordPress ecosystems and optimize them for maximum visibility.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 hover:border-purple-500/30 transition-colors duration-500 overflow-hidden service-card opacity-0 translate-y-10 flex flex-col justify-between h-[420px]">
<div className="absolute inset-x-0 bottom-0 h-40 service-card-glow opacity-40 group-hover:opacity-60 transition-opacity"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-2xl bg-[#0F0F11] border border-white/5 flex items-center justify-center mb-6 icon-box-glow group-hover:border-purple-500/40 transition-colors">
<i className="text-purple-400 w-7 h-7" data-lucide="layout"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-4">WordPress Design &amp; Development</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                            Build a stunning, high-performing website. We design and develop fast, secure, and fully responsive WordPress websites tailored to your brand and business goals.
                        </p>
</div>
<div className="relative z-10 pt-8 mt-auto">
<div className="flex items-center justify-between border-t border-white/5 pt-6 group-hover:border-white/10 transition-colors">
<span className="text-sm font-medium text-white">View Details</span>
<div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center transform group-hover:scale-110 transition-transform">
<i className="text-white w-5 h-5" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>

<div className="group relative bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 hover:border-purple-500/30 transition-colors duration-500 overflow-hidden service-card opacity-0 translate-y-10 flex flex-col justify-between h-[420px]">
<div className="absolute inset-x-0 bottom-0 h-40 service-card-glow opacity-40 group-hover:opacity-60 transition-opacity"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-2xl bg-[#0F0F11] border border-white/5 flex items-center justify-center mb-6 icon-box-glow group-hover:border-purple-500/40 transition-colors">
<i className="text-purple-400 w-7 h-7" data-lucide="figma"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-4">Figma to Elementor &amp; Landing Pages</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                            Get pixel-perfect, conversion-focused landing pages. We convert your Figma designs into editable Elementor pages with smooth animations and modern interactions.
                        </p>
</div>
<div className="relative z-10 pt-8 mt-auto">
<div className="flex items-center justify-between border-t border-white/5 pt-6 group-hover:border-white/10 transition-colors">
<span className="text-sm font-medium text-white">View Details</span>
<div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center transform group-hover:scale-110 transition-transform">
<i className="text-white w-5 h-5" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>

<div className="group relative bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 hover:border-purple-500/30 transition-colors duration-500 overflow-hidden service-card opacity-0 translate-y-10 flex flex-col justify-between h-[420px]">
<div className="absolute inset-x-0 bottom-0 h-40 service-card-glow opacity-40 group-hover:opacity-60 transition-opacity"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-2xl bg-[#0F0F11] border border-white/5 flex items-center justify-center mb-6 icon-box-glow group-hover:border-purple-500/40 transition-colors">
<i className="text-purple-400 w-7 h-7" data-lucide="shopping-bag"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-4">WooCommerce Solutions</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                            Scale your e-commerce. From complex product setups to payment gateway integration, we build robust stores that drive sales and manage inventory efficiently.
                        </p>
</div>
<div className="relative z-10 pt-8 mt-auto">
<div className="flex items-center justify-between border-t border-white/5 pt-6 group-hover:border-white/10 transition-colors">
<span className="text-sm font-medium text-white">View Details</span>
<div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center transform group-hover:scale-110 transition-transform">
<i className="text-white w-5 h-5" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>

<div className="group relative bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 hover:border-purple-500/30 transition-colors duration-500 overflow-hidden service-card opacity-0 translate-y-10 flex flex-col justify-between h-[420px]">
<div className="absolute inset-x-0 bottom-0 h-40 service-card-glow opacity-40 group-hover:opacity-60 transition-opacity"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-2xl bg-[#0F0F11] border border-white/5 flex items-center justify-center mb-6 icon-box-glow group-hover:border-purple-500/40 transition-colors">
<i className="text-purple-400 w-7 h-7" data-lucide="bar-chart-big"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-4">Full SEO Optimization</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                            Boost your visibility and rank higher with complete SEO optimization — including content strategy, keyword research, and on-page improvements for maximum organic growth.
                        </p>
</div>
<div className="relative z-10 pt-8 mt-auto">
<div className="flex items-center justify-between border-t border-white/5 pt-6 group-hover:border-white/10 transition-colors">
<span className="text-sm font-medium text-white">View Details</span>
<div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center transform group-hover:scale-110 transition-transform">
<i className="text-white w-5 h-5" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>

<div className="group relative bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 hover:border-purple-500/30 transition-colors duration-500 overflow-hidden service-card opacity-0 translate-y-10 flex flex-col justify-between h-[420px]">
<div className="absolute inset-x-0 bottom-0 h-40 service-card-glow opacity-40 group-hover:opacity-60 transition-opacity"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-2xl bg-[#0F0F11] border border-white/5 flex items-center justify-center mb-6 icon-box-glow group-hover:border-purple-500/40 transition-colors">
<i className="text-purple-400 w-7 h-7" data-lucide="settings-2"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-4">Technical &amp; Local SEO</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                            Resolve crawling, indexing, speed, and schema issues. We also optimize Google My Business and local citations to grow your authority in specific regions.
                        </p>
</div>
<div className="relative z-10 pt-8 mt-auto">
<div className="flex items-center justify-between border-t border-white/5 pt-6 group-hover:border-white/10 transition-colors">
<span className="text-sm font-medium text-white">View Details</span>
<div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center transform group-hover:scale-110 transition-transform">
<i className="text-white w-5 h-5" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>

<div className="group relative bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 hover:border-purple-500/30 transition-colors duration-500 overflow-hidden service-card opacity-0 translate-y-10 flex flex-col justify-between h-[420px]">
<div className="absolute inset-x-0 bottom-0 h-40 service-card-glow opacity-40 group-hover:opacity-60 transition-opacity"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-2xl bg-[#0F0F11] border border-white/5 flex items-center justify-center mb-6 icon-box-glow group-hover:border-purple-500/40 transition-colors">
<i className="text-purple-400 w-7 h-7" data-lucide="bug"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-4">Error &amp; Bug Fixing</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                            Fix technical issues instantly. From layout distortions to plugin conflicts and critical errors, we ensure your WordPress site runs flawlessly across all devices.
                        </p>
</div>
<div className="relative z-10 pt-8 mt-auto">
<div className="flex items-center justify-between border-t border-white/5 pt-6 group-hover:border-white/10 transition-colors">
<span className="text-sm font-medium text-white">View Details</span>
<div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center transform group-hover:scale-110 transition-transform">
<i className="text-white w-5 h-5" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#030305]" id="process">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl font-medium text-white mb-24 text-center">Development Methodology</h2>
<div className="relative border-l border-white/10 ml-6 md:ml-12 space-y-20">

<div className="relative pl-12 md:pl-24 group process-step opacity-0">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-[#030305] border border-slate-600 rounded-full group-hover:bg-purple-500 group-hover:border-purple-500 transition-colors duration-300"></div>
<span className="text-xs font-mono text-purple-400 mb-2 block">PHASE 01</span>
<h3 className="text-2xl text-white font-medium mb-4">Audit &amp; Strategy</h3>
<p className="text-slate-400 leading-relaxed max-w-xl">We analyze your current site or requirements. Whether it's a new build or SEO fix, we identify the best technical stack (WordPress/Elementor) and strategy.</p>
</div>

<div className="relative pl-12 md:pl-24 group process-step opacity-0">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-[#030305] border border-slate-600 rounded-full group-hover:bg-purple-500 group-hover:border-purple-500 transition-colors duration-300"></div>
<span className="text-xs font-mono text-purple-400 mb-2 block">PHASE 02</span>
<h3 className="text-2xl text-white font-medium mb-4">Design &amp; Development</h3>
<p className="text-slate-400 leading-relaxed max-w-xl">We convert Figma designs into pixel-perfect Elementor templates or custom themes. We ensure responsive layouts and clean code structure.</p>
</div>

<div className="relative pl-12 md:pl-24 group process-step opacity-0">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-[#030305] border border-slate-600 rounded-full group-hover:bg-purple-500 group-hover:border-purple-500 transition-colors duration-300"></div>
<span className="text-xs font-mono text-purple-400 mb-2 block">PHASE 03</span>
<h3 className="text-2xl text-white font-medium mb-4">Optimization &amp; Launch</h3>
<p className="text-slate-400 leading-relaxed max-w-xl">Before launch, we perform rigorous technical SEO checks, speed optimization, and bug testing to ensure a flawless go-live.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-purple-900/5"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-5xl md:text-7xl font-medium text-white tracking-tighter mb-8 cta-title translate-y-10 opacity-0">
                Ready to <span className="text-purple-400">rank #1?</span>
</h2>
<p className="text-lg text-slate-400 mb-10 cta-text translate-y-10 opacity-0">From custom WordPress builds to SEO dominance. Let's build your digital future.</p>
<div className="cta-btn translate-y-10 opacity-0">
<button className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-slate-200 transition-colors">
                    Get Free SEO Audit
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 pt-20 pb-10 px-6 bg-black text-sm">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<i className="text-white w-5 h-5" data-lucide="aperture"></i>
<span className="text-white font-medium tracking-tight">Webnoxy</span>
</div>
</div>
<div className="space-y-4">
<h4 className="text-white font-medium">Services</h4>
<a className="block text-slate-500 hover:text-white transition-colors" href="#">WordPress Dev</a>
<a className="block text-slate-500 hover:text-white transition-colors" href="#">WooCommerce</a>
<a className="block text-slate-500 hover:text-white transition-colors" href="#">SEO Audit</a>
</div>
<div className="space-y-4">
<h4 className="text-white font-medium">Company</h4>
<a className="block text-slate-500 hover:text-white transition-colors" href="#">About</a>
<a className="block text-slate-500 hover:text-white transition-colors" href="#">Case Studies</a>
<a className="block text-slate-500 hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="space-y-4">
<h4 className="text-white font-medium">Social</h4>
<a className="block text-slate-500 hover:text-white transition-colors" href="#">Twitter</a>
<a className="block text-slate-500 hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="block text-slate-500 hover:text-white transition-colors" href="#">Instagram</a>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
<p className="text-slate-600">© 2024 Webnoxy Inc.</p>
<p className="text-slate-600 font-mono text-xs">DESIGNED FOR GROWTH</p>
</div>
</footer>


    </>
  );
}
