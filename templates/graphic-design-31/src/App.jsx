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



{
"imports": {
"three": "https://unpkg.com/three@0.160.0/build/three.module.js",
"three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/"
}
}



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



        import * as THREE from 'three';

        // 1. Interactive Cursor Glow
        const cursor = document.getElementById('cursor-glow');
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // 2. 3D Tilt Effect for Cards
        document.querySelectorAll('.tilt-card').forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const midX = rect.width / 2;
                const midY = rect.height / 2;
                const angleX = (y - midY) / 20; 
                const angleY = (midX - x) / 20;
                card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.02, 1.02, 1.02)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
            });
        });

        // 3. Hero Reveal Animation
        gsap.from(".hero-reveal", {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.2
        });

        // 4. Three.js Hero Background
        const canvas = document.querySelector('#hero-canvas');
        if(canvas) {
            const scene = new THREE.Scene();
            
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
            camera.position.z = 5;

            const renderer = new THREE.WebGLRenderer({
                canvas: canvas,
                antialias: true,
                alpha: true
            });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            const mainGroup = new THREE.Group();
            scene.add(mainGroup);

            // Core abstract shape (Icosahedron)
            const geometryCore = new THREE.IcosahedronGeometry(1.5, 1);
            const materialCore = new THREE.MeshPhysicalMaterial({
                color: 0x050505, 
                metalness: 0.9, 
                roughness: 0.1, 
                wireframe: true,
                emissive: 0x8b5cf6, 
                emissiveIntensity: 0.2,
                transparent: true,
                opacity: 0.3
            });
            const shapeCore = new THREE.Mesh(geometryCore, materialCore);
            mainGroup.add(shapeCore);

            // Inner glowing sphere
            const geoInner = new THREE.SphereGeometry(1, 32, 32);
            const matInner = new THREE.MeshBasicMaterial({
                color: 0x3b82f6, 
                transparent: true,
                opacity: 0.1,
                wireframe: true
            });
            const sphereInner = new THREE.Mesh(geoInner, matInner);
            mainGroup.add(sphereInner);

            // Floating particles
            const particlesGeo = new THREE.BufferGeometry();
            const particleCount = 150;
            const posArray = new Float32Array(particleCount * 3);
            for(let i = 0; i < particleCount * 3; i++) {
                posArray[i] = (Math.random() - 0.5) * 15;
            }
            particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            const particleMat = new THREE.PointsMaterial({
                size: 0.05,
                color: 0x8b5cf6,
                transparent: true,
                opacity: 0.4,
                blending: THREE.AdditiveBlending
            });
            const particles = new THREE.Points(particlesGeo
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

<header className="fixed z-50 transition-all duration-300 bg-black/60 backdrop-blur-xl border-b border-white/5 top-0 w-full">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity z-10 relative" href="#">
<div className="bg-gradient-to-br from-purple-600 to-blue-600 p-1.5 rounded-lg shadow-[0_0_15px_rgba(147,51,234,0.3)]">
<i className="text-white w-5 h-5" data-lucide="pen-square"></i>
</div>
<span className="font-normal text-lg tracking-tight">Graphic Things</span>
</a>

<nav className="hidden md:flex items-center gap-8 z-10 relative glass-panel px-6 py-2.5 rounded-full">
<a className="text-base text-zinc-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-base text-zinc-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-base text-zinc-400 hover:text-white transition-colors" href="#portfolio">Portfolio</a>
<a className="text-base text-zinc-400 hover:text-white transition-colors" href="#testimonials">Reviews</a>
</nav>

<div className="flex items-center gap-4 z-10 relative">
<a className="hidden sm:flex items-center justify-center h-10 px-5 rounded-full bg-white text-black text-base font-normal hover:bg-zinc-200 transition-colors tracking-tight" href="#contact">
                    Let's Talk
                </a>
</div>
</div>
</header>

<section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-noise">

<div className="absolute inset-0 z-0">
<canvas className="outline-none w-full h-full" id="hero-canvas"></canvas>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-purple-900/20 blur-[100px] rounded-full pointer-events-none z-0"></div>

<div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center pointer-events-none mt-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md mb-8 hero-reveal">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-xs text-purple-200 uppercase tracking-widest font-normal">Available for new projects</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.1] mb-6 hero-reveal mix-blend-plus-lighter">
                We Design <br/>
<span className="text-gradient italic font-light pr-2">Ideas</span> Into Reality
            </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10 hero-reveal">
                Premium graphic design services tailored for modern brands. We blend minimalist aesthetics with futuristic tech-inspired visuals to elevate your digital presence.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 hero-reveal pointer-events-auto">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-base font-normal hover:shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all duration-300 hover:-translate-y-0.5 tracking-tight" href="#portfolio">
                    View Portfolio
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hero-reveal">
<span className="text-xs uppercase tracking-widest text-zinc-500">Scroll</span>
<div className="w-px h-12 bg-gradient-to-b from-zinc-500 to-transparent"></div>
</div>
</section>

<section className="py-24 relative border-t border-white/5 bg-[#050505] overflow-hidden" id="about">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">

<div className="w-full lg:w-1/2 space-y-8">
<div>
<h2 className="text-3xl lg:text-5xl font-normal tracking-tight text-white mb-4">
                        Crafting visual <br/><span className="text-zinc-500">identities globally.</span>
</h2>
<p className="text-lg text-zinc-400 leading-relaxed">
                        Graphic Things is a specialized design studio operating across borders. With a strong presence in <span className="text-white font-normal">Pakistan</span> and <span className="text-white font-normal">Muscat, Oman</span>, we bring diverse cultural perspectives into modern, high-end graphic design.
                    </p>
</div>
<p className="text-lg text-zinc-400 leading-relaxed">
                    Our approach is minimal, futuristic, and deeply rooted in strategic thinking. We don't just make things look good; we build visual systems that communicate, engage, and build immediate trust with your audience.
                </p>
<div className="flex items-center gap-8 pt-4 border-t border-white/10">
<div>
<div className="text-3xl font-normal text-white tracking-tight">150+</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Projects Done</div>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div>
<div className="text-3xl font-normal text-white tracking-tight">100%</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Client Satisfaction</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 relative h-[400px] flex justify-center items-center perspective-1000">

<div className="relative w-full max-w-sm aspect-square tilt-card group">

<div className="absolute inset-0 glass-card rounded-3xl p-6 flex flex-col justify-between transform -rotate-6 transition-transform duration-500 group-hover:-rotate-12 group-hover:-translate-x-4 z-10">
<div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
<i className="text-purple-400 w-5 h-5" data-lucide="pen"></i>
</div>
<div className="h-2 w-1/3 bg-white/20 rounded-full mb-2"></div>
<div className="h-2 w-2/3 bg-white/10 rounded-full"></div>
</div>

<div className="absolute inset-0 glass-card rounded-3xl p-6 flex flex-col justify-end transform rotate-3 translate-x-8 translate-y-8 transition-transform duration-500 group-hover:rotate-6 group-hover:translate-x-12 z-20 backdrop-blur-xl border-blue-500/20 bg-blue-900/10">
<div className="flex items-center justify-between w-full mb-4">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
<i className="text-blue-400 w-4 h-4" data-lucide="layers"></i>
</div>
<div className="text-xs text-blue-300 font-normal">Muscat</div>
</div>
<div className="h-3 w-3/4 bg-gradient-to-r from-blue-500/50 to-transparent rounded-full mb-2"></div>
<div className="h-2 w-1/2 bg-white/10 rounded-full"></div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-tr from-purple-600 to-blue-400 blur-xl opacity-50 animate-pulse z-0"></div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#080808] relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs text-purple-400 uppercase tracking-widest font-normal mb-2 block">Expertise</span>
<h2 className="text-3xl lg:text-4xl font-normal tracking-tight text-white mb-4">
                    Services designed to <br/>elevate your brand.
                </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card rounded-2xl p-8 group hover:-translate-y-1 transition-all duration-300 hover:border-purple-500/30 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[40px] rounded-full group-hover:bg-purple-500/20 transition-colors"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-purple-500/30 transition-colors relative z-10">
<i className="w-6 h-6 text-zinc-300 group-hover:text-purple-400 transition-colors" data-lucide="pen-tool"></i>
</div>
<h3 className="text-lg font-normal text-white mb-3 relative z-10">Logo Design</h3>
<p className="text-base text-zinc-400 leading-relaxed relative z-10">Minimal, memorable, and scalable logo designs that form the core of your brand's identity.</p>
</div>

<div className="glass-card rounded-2xl p-8 group hover:-translate-y-1 transition-all duration-300 hover:border-blue-500/30 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[40px] rounded-full group-hover:bg-blue-500/20 transition-colors"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-blue-500/30 transition-colors relative z-10">
<i className="w-6 h-6 text-zinc-300 group-hover:text-blue-400 transition-colors" data-lucide="presentation"></i>
</div>
<h3 className="text-lg font-normal text-white mb-3 relative z-10">Presentations</h3>
<p className="text-base text-zinc-400 leading-relaxed relative z-10">High-impact pitch decks and corporate presentations designed to persuade and impress.</p>
</div>

<div className="glass-card rounded-2xl p-8 group hover:-translate-y-1 transition-all duration-300 hover:border-purple-500/30 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[40px] rounded-full group-hover:bg-purple-500/20 transition-colors"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-purple-500/30 transition-colors relative z-10">
<i className="w-6 h-6 text-zinc-300 group-hover:text-purple-400 transition-colors" data-lucide="file-text"></i>
</div>
<h3 className="text-lg font-normal text-white mb-3 relative z-10">Resume Design</h3>
<p className="text-base text-zinc-400 leading-relaxed relative z-10">Professional, ATS-friendly, and visually distinct resumes that help you stand out to recruiters.</p>
</div>

<div className="glass-card rounded-2xl p-8 group hover:-translate-y-1 transition-all duration-300 hover:border-blue-500/30 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[40px] rounded-full group-hover:bg-blue-500/20 transition-colors"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-blue-500/30 transition-colors relative z-10">
<i className="w-6 h-6 text-zinc-300 group-hover:text-blue-400 transition-colors" data-lucide="smartphone"></i>
</div>
<h3 className="text-lg font-normal text-white mb-3 relative z-10">Social Media Design</h3>
<p className="text-base text-zinc-400 leading-relaxed relative z-10">Cohesive templates, posts, and banners optimized for engagement across all platforms.</p>
</div>

<div className="glass-card rounded-2xl p-8 group hover:-translate-y-1 transition-all duration-300 hover:border-purple-500/30 relative overflow-hidden lg:col-span-2">
<div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[60px] rounded-full group-hover:bg-purple-500/20 transition-colors"></div>
<div className="flex flex-col md:flex-row gap-6 items-start md:items-center relative z-10">
<div className="w-16 h-16 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-purple-500/30 transition-colors">
<i className="w-8 h-8 text-zinc-300 group-hover:text-purple-400 transition-colors" data-lucide="box"></i>
</div>
<div className="">
<h3 className="text-xl font-normal tracking-tight text-white mb-2">Complete Branding</h3>
<p className="text-base text-zinc-400 leading-relaxed max-w-xl">From typography selection to color palettes and brand guidelines. We build comprehensive visual systems that ensure your brand looks premium and consistent everywhere.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#050505]" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl lg:text-4xl font-normal tracking-tight text-white mb-3">Selected Works</h2>
<p className="text-lg text-zinc-400">A glimpse into our recent design projects.</p>
</div>
<a className="inline-flex items-center gap-2 text-base text-white font-normal hover:text-purple-400 transition-colors" href="https://www.instagram.com/ophel_khokhar" target="_blank">
                    View full portfolio on Instagram
                    <i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="tilt-card group block w-full aspect-[4/5] rounded-2xl overflow-hidden relative border border-white/10 bg-zinc-900" href="#">
<img alt="BOTO Mural Art" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" src="default"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 tilt-content w-full">
<span className="text-sm font-normal px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 mb-3 inline-block tracking-tight">Illustration / Mural</span>
<h3 className="text-xl font-normal text-white tracking-tight">"I was a BOTO" Visual Art</h3>
</div>
</a>

<a className="tilt-card group block w-full aspect-[4/5] rounded-2xl overflow-hidden relative border border-white/10 bg-zinc-900" href="#">
<img alt="Social Media" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" src="default"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 tilt-content w-full">
<span className="text-sm font-normal px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 mb-3 inline-block tracking-tight">Social Media</span>
<h3 className="text-xl font-normal text-white tracking-tight">Aura Fashion Campaign</h3>
</div>
</a>

<a className="tilt-card group block w-full aspect-[4/5] rounded-2xl overflow-hidden relative border border-white/10 bg-zinc-900 md:col-span-2 lg:col-span-1" href="#">
<img alt="Presentation Design" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100 filter invert grayscale hover:grayscale-0 hover:invert-0 transition-all" src="default"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 tilt-content w-full">
<span className="text-sm font-normal px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 mb-3 inline-block tracking-tight">Presentation</span>
<h3 className="text-xl font-normal text-white tracking-tight">Fintech Pitch Deck</h3>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#080808] overflow-hidden relative" id="testimonials">
<div className="max-w-7xl mx-auto px-6 mb-12">
<h2 className="text-3xl font-normal tracking-tight text-white text-center">
                Trusted by visionary clients
            </h2>
</div>

<div className="relative flex overflow-hidden w-full group">

<div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none"></div>

<div className="flex animate-marquee w-max">

<div className="flex gap-6 pr-6 shrink-0">

<div className="glass-card w-[300px] h-[200px] rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/30 transition-colors duration-300">
<div>
<div className="flex items-center gap-1 mb-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
</div>
<p className="text-base text-zinc-300 leading-relaxed italic">"Responsive and good quality"</p>
</div>
<div className="flex items-center gap-3 border-t border-white/10 pt-4 mt-4">
<div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-normal text-sm">MR</div>
<div className="text-base font-normal text-white tracking-tight">Mahi Roo</div>
</div>
</div>

<div className="glass-card w-[300px] h-[200px] rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/30 transition-colors duration-300">
<div>
<div className="flex items-center gap-1 mb-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
</div>
<p className="text-base text-zinc-300 leading-relaxed italic">"Responsiveness, Quality, Professionalism"</p>
</div>
<div className="flex items-center gap-3 border-t border-white/10 pt-4 mt-4">
<div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-normal text-sm">JB</div>
<div className="text-base font-normal text-white tracking-tight">Joshua Azmat Bhatti</div>
</div>
</div>

<div className="glass-card w-[300px] h-[200px] rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/30 transition-colors duration-300">
<div>
<div className="flex items-center gap-1 mb-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
</div>
<p className="text-base text-zinc-300 leading-relaxed italic">"Quality, Value"</p>
</div>
<div className="flex items-center gap-3 border-t border-white/10 pt-4 mt-4">
<div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-normal text-sm">RL</div>
<div className="text-base font-normal text-white tracking-tight">Riffat Latif</div>
</div>
</div>

<div className="glass-card w-[300px] h-[200px] rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/30 transition-colors duration-300">
<div>
<div className="flex items-center gap-1 mb-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
</div>
<p className="text-base text-zinc-300 leading-relaxed italic">"Responsiveness, Quality, Professionalism, Value"</p>
</div>
<div className="flex items-center gap-3 border-t border-white/10 pt-4 mt-4">
<div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-normal text-sm">SS</div>
<div className="text-base font-normal text-white tracking-tight">Sakib Shah</div>
</div>
</div>

<div className="glass-card w-[300px] h-[200px] rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/30 transition-colors duration-300">
<div>
<div className="flex items-center gap-1 mb-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
</div>
<p className="text-base text-zinc-300 leading-relaxed italic">"Professionalism"</p>
</div>
<div className="flex items-center gap-3 border-t border-white/10 pt-4 mt-4">
<div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-normal text-sm">AI</div>
<div className="text-base font-normal text-white tracking-tight">Afaq Ijaz</div>
</div>
</div>

<div className="glass-card w-[300px] h-[200px] rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/30 transition-colors duration-300">
<div>
<div className="flex items-center gap-1 mb-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
</div>
<p className="text-base text-zinc-300 leading-relaxed italic">"Value"</p>
</div>
<div className="flex items-center gap-3 border-t border-white/10 pt-4 mt-4">
<div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-normal text-sm">GM</div>
<div className="text-base font-normal text-white tracking-tight">Girl Malik</div>
</div>
</div>

<div className="glass-card w-[300px] h-[200px] rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/30 transition-colors duration-300">
<div>
<div className="flex items-center gap-1 mb-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
</div>
<p className="text-base text-zinc-300 leading-relaxed italic">"Responsiveness, Quality, Professionalism, Value"</p>
</div>
<div className="flex items-center gap-3 border-t border-white/10 pt-4 mt-4">
<div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-normal text-sm">SA</div>
<div className="text-base font-normal text-white tracking-tight">Sakhawat Ali</div>
</div>
</div>

<div className="glass-card w-[300px] h-[200px] rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/30 transition-colors duration-300">
<div>
<div className="flex items-center gap-1 mb-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
</div>
<p className="text-base text-zinc-300 leading-relaxed italic">"Value"</p>
</div>
<div className="flex items-center gap-3 border-t border-white/10 pt-4 mt-4">
<div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-normal text-sm">FZ</div>
<div className="text-base font-normal text-white tracking-tight">Falmoon Zicky</div>
</div>
</div>

<div className="glass-card w-[300px] h-[200px] rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/30 transition-colors duration-300">
<div>
<div className="flex items-center gap-1 mb-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
</div>
<p className="text-base text-zinc-300 leading-relaxed italic">"Quality"</p>
</div>
<div className="flex items-center gap-3 border-t border-white/10 pt-4 mt-4">
<div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-normal text-sm">AF</div>
<div className="text-base font-normal text-white tracking-tight">Armina Faisal</div>
</div>
</div>

<div className="glass-card w-[300px] h-[200px] rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/30 transition-colors duration-300">
<div>
<div className="flex items-center gap-1 mb-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
</div>
</div>
<div className="flex items-center gap-3 border-t border-white/10 pt-4 mt-4">
<div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-normal text-sm">AK</div>
<div className="text-base font-normal text-white tracking-tight">Anam Khokhar</div>
</div>
</div>

<div className="glass-card w-[300px] h-[200px] rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/30 transition-colors duration-300">
<div>
<div className="flex items-center gap-1 mb-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
</div>
</div>
<div className="flex items-center gap-3 border-t border-white/10 pt-4 mt-4">
<div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-normal text-sm">SG</div>
<div className="text-base font-normal text-white tracking-tight">Shahrukh Gill</div>
</div>
</div>
</div>

<div aria-hidden="true" className="flex gap-6 pr-6 shrink-0">

<div className="glass-card w-[300px] h-[200px] rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/30 transition-colors duration-300">
<div>
<div className="flex items-center gap-1 mb-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
</div>
<p className="text-base text-zinc-300 leading-relaxed italic">"Responsive and good quality"</p>
</div>
<div className="flex items-center gap-3 border-t border-white/10 pt-4 mt-4">
<div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-normal text-sm">MR</div>
<div className="text-base font-normal text-white tracking-tight">Mahi Roo</div>
</div>
</div>

<div className="glass-card w-[300px] h-[200px] rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/30 transition-colors duration-300">
<div>
<div className="flex items-center gap-1 mb-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
</div>
<p className="text-base text-zinc-300 leading-relaxed italic">"Responsiveness, Quality, Professionalism"</p>
</div>
<div className="flex items-center gap-3 border-t border-white/10 pt-4 mt-4">
<div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-normal text-sm">JB</div>
<div className="text-base font-normal text-white tracking-tight">Joshua Azmat Bhatti</div>
</div>
</div>

<div className="glass-card w-[300px] h-[200px] rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/30 transition-colors duration-300">
<div>
<div className="flex items-center gap-1 mb-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
</div>
<p className="text-base text-zinc-300 leading-relaxed italic">"Quality, Value"</p>
</div>
<div className="flex items-center gap-3 border-t border-white/10 pt-4 mt-4">
<div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-normal text-sm">RL</div>
<div className="text-base font-normal text-white tracking-tight">Riffat Latif</div>
</div>
</div>

<div className="glass-card w-[300px] h-[200px] rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/30 transition-colors duration-300">
<div>
<div className="flex items-center gap-1 mb-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
</div>
<p className="text-base text-zinc-300 leading-relaxed italic">"Responsiveness, Quality, Professionalism, Value"</p>
</div>
<div className="flex items-center gap-3 border-t border-white/10 pt-4 mt-4">
<div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-normal text-sm">SS</div>
<div className="text-base font-normal text-white tracking-tight">Sakib Shah</div>
</div>
</div>

<div className="glass-card w-[300px] h-[200px] rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/30 transition-colors duration-300">
<div>
<div className="flex items-center gap-1 mb-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
</div>
<p className="text-base text-zinc-300 leading-relaxed italic">"Professionalism"</p>
</div>
<div className="flex items-center gap-3 border-t border-white/10 pt-4 mt-4">
<div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-normal text-sm">AI</div>
<div className="text-base font-normal text-white tracking-tight">Afaq Ijaz</div>
</div>
</div>

<div className="glass-card w-[300px] h-[200px] rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/30 transition-colors duration-300">
<div>
<div className="flex items-center gap-1 mb-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
</div>
<p className="text-base text-zinc-300 leading-relaxed italic">"Value"</p>
</div>
<div className="flex items-center gap-3 border-t border-white/10 pt-4 mt-4">
<div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-normal text-sm">GM</div>
<div className="text-base font-normal text-white tracking-tight">Girl Malik</div>
</div>
</div>

<div className="glass-card w-[300px] h-[200px] rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/30 transition-colors duration-300">
<div>
<div className="flex items-center gap-1 mb-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
</div>
<p className="text-base text-zinc-300 leading-relaxed italic">"Responsiveness, Quality, Professionalism, Value"</p>
</div>
<div className="flex items-center gap-3 border-t border-white/10 pt-4 mt-4">
<div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-normal text-sm">SA</div>
<div className="text-base font-normal text-white tracking-tight">Sakhawat Ali</div>
</div>
</div>

<div className="glass-card w-[300px] h-[200px] rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/30 transition-colors duration-300">
<div>
<div className="flex items-center gap-1 mb-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
</div>
<p className="text-base text-zinc-300 leading-relaxed italic">"Value"</p>
</div>
<div className="flex items-center gap-3 border-t border-white/10 pt-4 mt-4">
<div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-normal text-sm">FZ</div>
<div className="text-base font-normal text-white tracking-tight">Falmoon Zicky</div>
</div>
</div>

<div className="glass-card w-[300px] h-[200px] rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/30 transition-colors duration-300">
<div>
<div className="flex items-center gap-1 mb-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
</div>
<p className="text-base text-zinc-300 leading-relaxed italic">"Quality"</p>
</div>
<div className="flex items-center gap-3 border-t border-white/10 pt-4 mt-4">
<div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-normal text-sm">AF</div>
<div className="text-base font-normal text-white tracking-tight">Armina Faisal</div>
</div>
</div>

<div className="glass-card w-[300px] h-[200px] rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/30 transition-colors duration-300">
<div>
<div className="flex items-center gap-1 mb-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
</div>
</div>
<div className="flex items-center gap-3 border-t border-white/10 pt-4 mt-4">
<div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-normal text-sm">AK</div>
<div className="text-base font-normal text-white tracking-tight">Anam Khokhar</div>
</div>
</div>

<div className="glass-card w-[300px] h-[200px] rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/30 transition-colors duration-300">
<div>
<div className="flex items-center gap-1 mb-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-purple-400 text-purple-400" data-lucide="star"></i>
</div>
</div>
<div className="flex items-center gap-3 border-t border-white/10 pt-4 mt-4">
<div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-normal text-sm">SG</div>
<div className="text-base font-normal text-white tracking-tight">Shahrukh Gill</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#050505] relative" id="contact">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[400px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">

<div className="">
<h2 className="text-3xl lg:text-5xl font-normal tracking-tight text-white mb-6">
                        Let's build something <br/>brilliant together.
                    </h2>
<p className="text-lg text-zinc-400 mb-10 max-w-md">
                        Ready to elevate your brand's visual identity? Reach out via the form, or contact us directly through WhatsApp or Phone.
                    </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full glass-card flex items-center justify-center border-white/10">
<i className="w-5 h-5 text-zinc-300" data-lucide="phone-call"></i>
</div>
<div className="">
<div className="text-xs text-zinc-500 uppercase tracking-wider mb-1 font-normal">Direct Line</div>
<a className="text-lg font-normal text-white hover:text-purple-400 transition-colors" href="tel:+96879109772">+968 7910 9772</a>
</div>
</div>
<div className="flex gap-4 pt-4">
<a className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-colors text-base font-normal tracking-tight" href="https://wa.me/96879109772" target="_blank">
<i className="w-5 h-5" data-lucide="message-circle"></i>
                                WhatsApp
                            </a>
<a className="flex items-center gap-2 px-6 py-3 rounded-full glass-panel text-white hover:bg-white/10 transition-colors text-base font-normal tracking-tight" href="tel:+96879109772">
<i className="w-5 h-5" data-lucide="phone"></i>
                                Call Now
                            </a>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-8 lg:p-10 border border-white/10">
<form className="space-y-6" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-normal text-zinc-400 uppercase tracking-wider">Name</label>
<input className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-base text-white transition-colors" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-normal text-zinc-400 uppercase tracking-wider">Email</label>
<input className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-base text-white transition-colors" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-normal text-zinc-400 uppercase tracking-wider">Message</label>
<textarea className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-base text-white transition-colors resize-none" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<button className="w-full py-3.5 rounded-xl bg-white text-black text-base font-normal hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] tracking-tight" type="submit">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 text-white">
<i className="w-5 h-5" data-lucide="pen-square"></i>
<span className="font-normal text-base tracking-tight">Graphic Things</span>
</div>
<p className="text-xs text-zinc-500">© 2024 Graphic Things. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-base" href="https://www.instagram.com/ophel_khokhar" target="_blank">
<i className="w-5 h-5" data-lucide="user-circle"></i>
                    @ophel_khokhar
                </a>
</div>
</div>
</footer>


    </>
  );
}
