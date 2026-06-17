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



        // 1. Three.js Background Animation
        const initThreeJS = () => {
            const container = document.getElementById('canvas-container');
            const scene = new THREE.Scene();
            
            // Fog for depth fading
            scene.fog = new THREE.FogExp2(0x050505, 0.002);

            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 30;

            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            container.appendChild(renderer.domElement);

            // Create Particles (Starfield/Grid)
            const particlesGeometry = new THREE.BufferGeometry();
            const particlesCount = 700;
            const posArray = new Float32Array(particlesCount * 3);

            for(let i = 0; i < particlesCount * 3; i++) {
                posArray[i] = (Math.random() - 0.5) * 60; // Spread
            }

            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            
            // Material
            const particlesMaterial = new THREE.PointsMaterial({
                size: 0.15,
                color: 0x6366f1, // Indigo
                transparent: true,
                opacity: 0.8,
            });

            // Mesh
            const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(particlesMesh);

            // Create a Geometric Wireframe Object (Icosahedron)
            const geoGeometry = new THREE.IcosahedronGeometry(10, 1);
            const geoMaterial = new THREE.MeshBasicMaterial({ 
                color: 0x4f46e5, 
                wireframe: true, 
                transparent: true, 
                opacity: 0.05 
            });
            const geoMesh = new THREE.Mesh(geoGeometry, geoMaterial);
            scene.add(geoMesh);

            // Mouse Interaction
            let mouseX = 0;
            let mouseY = 0;
            let targetX = 0;
            let targetY = 0;

            const windowHalfX = window.innerWidth / 2;
            const windowHalfY = window.innerHeight / 2;

            document.addEventListener('mousemove', (event) => {
                mouseX = (event.clientX - windowHalfX);
                mouseY = (event.clientY - windowHalfY);
            });

            // Scroll interaction
            let scrollY = 0;
            window.addEventListener('scroll', () => {
                scrollY = window.scrollY;
            });

            // Animation Loop
            const clock = new THREE.Clock();

            const animate = () => {
                const elapsedTime = clock.getElapsedTime();

                targetX = mouseX * 0.001;
                targetY = mouseY * 0.001;

                // Rotate particles slowly
                particlesMesh.rotation.y = elapsedTime * 0.05;
                particlesMesh.rotation.x = elapsedTime * 0.02;

                // Interact with mouse
                particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
                particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);

                // Rotate geometric shape
                geoMesh.rotation.x += 0.005;
                geoMesh.rotation.y += 0.005;
                
                // Parallax on scroll
                camera.position.y = -scrollY * 0.01;

                renderer.render(scene, camera);
                requestAnimationFrame(animate);
            };

            animate();

            // Resize Handler
            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        };

        // 2. CSS 3D Tilt Effect Logic
        const initTiltEffect = () => {
            const cards = document.querySelectorAll('.tilt-card');

            cards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    // Rotation calculation (max 10 deg)
                    const rotateX = ((y - centerY) / centerY) * -5;
                    const rotateY = ((x - centerX) / centerX) * 5;

                    // Apply styles
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                });

                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
                });
            });
        };

        // Run scripts on load
        document.addEventListener('DOMContentLoaded', () => {
            initThreeJS();
            initTiltEffect();
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
      

<div className="fixed inset-0 z-0 pointer-events-none opacity-60" id="canvas-container"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-white flex items-center gap-2" href="#">
<span className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-indigo-500/20">XYZ</span>
                AGENCY
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors duration-300" href="#services">Services</a>
<a className="hover:text-white transition-colors duration-300" href="#process">Process</a>
<a className="hover:text-white transition-colors duration-300" href="#pricing">Plans</a>
</div>
<a className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-medium text-white transition-all group" href="#contact">
                Let's Talk
                <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
<button className="md:hidden text-white">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[10px] tracking-wide uppercase font-semibold mb-8 animate-fade-in opacity-0">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
            For Digital Creators
        </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500 tracking-tight leading-[1.1] max-w-4xl mx-auto mb-6 animate-fade-in delay-100 opacity-0 text-glow">
            Amplify your <br className="hidden md:block"/> digital presence.
        </h1>
<p className="text-lg text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in delay-200 opacity-0">
            We craft data-driven marketing strategies using 3D analytics and AI-driven insights to help small creators scale into global brands.
        </p>
<div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-300 opacity-0">
<button className="px-8 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                Start Growing
                <iconify-icon icon="lucide:zap" width="16"></iconify-icon>
</button>
<button className="px-8 py-3 rounded-lg border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-sm">
                View Case Studies
            </button>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</section>

<section className="relative z-10 py-32 px-6 max-w-7xl mx-auto" id="services">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Core Capabilities</h2>
<p className="text-gray-400 max-w-lg">Everything you need to transform your content into a sustainable business model.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 perspective-1000">

<div className="tilt-card group relative h-80 rounded-2xl bg-white/5 border border-white/10 p-8 hover:border-indigo-500/50 transition-all duration-500 preserve-3d cursor-default overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="transform translate-z-10 group-hover:translate-z-20 transition-transform duration-500 h-full flex flex-col justify-between relative z-10">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:bar-chart-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Data Analytics</h3>
<p className="text-sm text-gray-400 leading-relaxed">Real-time audience tracking and behavioral analysis to optimize your posting schedule.</p>
</div>
</div>
</div>

<div className="tilt-card group relative h-80 rounded-2xl bg-white/5 border border-white/10 p-8 hover:border-purple-500/50 transition-all duration-500 preserve-3d cursor-default overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="transform translate-z-10 group-hover:translate-z-20 transition-transform duration-500 h-full flex flex-col justify-between relative z-10">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Community Growth</h3>
<p className="text-sm text-gray-400 leading-relaxed">Strategies to convert passive viewers into active, loyal community members.</p>
</div>
</div>
</div>

<div className="tilt-card group relative h-80 rounded-2xl bg-white/5 border border-white/10 p-8 hover:border-blue-500/50 transition-all duration-500 preserve-3d cursor-default overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="transform translate-z-10 group-hover:translate-z-20 transition-transform duration-500 h-full flex flex-col justify-between relative z-10">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:gem" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Brand Partnerships</h3>
<p className="text-sm text-gray-400 leading-relaxed">Direct access to premium brands looking for authentic creators like you.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 bg-[#080808] border-y border-white/5" id="process">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6">Built for scale,<br/>designed for creators.</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-mono text-sm">01</div>
<div>
<h4 className="text-white font-medium mb-1">Audit &amp; Analysis</h4>
<p className="text-sm text-gray-400">We ingest your analytics history to find gaps and opportunities.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-mono text-sm">02</div>
<div>
<h4 className="text-white font-medium mb-1">Strategy Deployment</h4>
<p className="text-sm text-gray-400">Custom content calendars and formatting guides tailored to algorithms.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-mono text-sm">03</div>
<div>
<h4 className="text-white font-medium mb-1">Monetization</h4>
<p className="text-sm text-gray-400">Launching merchandise, digital products, and securing sponsorships.</p>
</div>
</div>
</div>
</div>
<div className="relative h-[400px] w-full bg-[#0B0C10] rounded-2xl border border-white/5 overflow-hidden group shadow-2xl">

<div className="absolute top-0 left-0 right-0 h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20"></div>
</div>
<div className="absolute inset-0 pt-16 px-8 flex items-end">

<div className="w-full flex justify-between items-end h-64 gap-2">
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[40%] group-hover:h-[60%] transition-all duration-700 ease-out delay-75 relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-500 blur-[2px]"></div>
</div>
<div className="w-full bg-indigo-500/30 rounded-t-sm h-[55%] group-hover:h-[80%] transition-all duration-700 ease-out delay-100 relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-500 blur-[2px]"></div>
</div>
<div className="w-full bg-indigo-500/40 rounded-t-sm h-[30%] group-hover:h-[50%] transition-all duration-700 ease-out delay-150 relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-500 blur-[2px]"></div>
</div>
<div className="w-full bg-indigo-500/50 rounded-t-sm h-[70%] group-hover:h-[90%] transition-all duration-700 ease-out delay-200 relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-500 blur-[2px]"></div>
</div>
<div className="w-full bg-indigo-500/60 rounded-t-sm h-[45%] group-hover:h-[75%] transition-all duration-700 ease-out delay-300 relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-500 blur-[2px]"></div>
</div>
</div>
</div>

<div className="absolute top-20 right-8 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-lg w-48 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
<iconify-icon icon="lucide:trending-up" width="16"></iconify-icon>
</div>
<div>
<div className="text-[10px] text-gray-400">Growth</div>
<div className="text-xs font-semibold text-white">+124%</div>
</div>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-[70%]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6" id="pricing">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Transparent Pricing</h2>
<p className="text-gray-400">Choose the plan that fits your growth stage.</p>
</div>
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center perspective-1000">

<div className="tilt-card p-8 rounded-2xl border border-white/5 bg-[#0A0A0A] hover:bg-[#0F0F0F] transition-all hover:-translate-y-2 duration-300 relative overflow-hidden group">
<h3 className="text-lg font-medium text-white">Starter</h3>
<div className="my-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white">$49</span>
<span className="text-sm text-gray-500">/mo</span>
</div>
<p className="text-xs text-gray-400 mb-6 h-10">Essential tools for emerging creators.</p>
<ul className="space-y-3 mb-8 text-sm text-gray-300">
<li className="flex items-center gap-2"><iconify-icon className="text-white/40" icon="lucide:check"></iconify-icon> Weekly Analytics</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white/40" icon="lucide:check"></iconify-icon> Content Calendar</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white/40" icon="lucide:check"></iconify-icon> Email Support</li>
</ul>
<button className="w-full py-2 rounded border border-white/10 bg-transparent text-sm font-medium hover:bg-white hover:text-black transition-colors">Select Plan</button>
</div>

<div className="tilt-card p-8 rounded-2xl border border-indigo-500/50 bg-[#0B0C10] relative shadow-2xl shadow-indigo-900/20 transform md:scale-105 z-10 hover:-translate-y-2 transition-transform duration-300 group">
<div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
<div className="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">Popular</div>
<h3 className="text-lg font-medium text-white">Creator Pro</h3>
<div className="my-4 flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white">$149</span>
<span className="text-sm text-gray-500">/mo</span>
</div>
<p className="text-xs text-gray-400 mb-6 h-10">Full-scale management for serious growth.</p>
<ul className="space-y-3 mb-8 text-sm text-gray-300">
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> Daily Insights</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> Brand Deal Outreach</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> Dedicated Manager</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> Priority Support</li>
</ul>
<button className="w-full py-2.5 rounded bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition-colors shadow-[0_0_20px_rgba(79,70,229,0.3)]">Get Started</button>
</div>

<div className="tilt-card p-8 rounded-2xl border border-white/5 bg-[#0A0A0A] hover:bg-[#0F0F0F] transition-all hover:-translate-y-2 duration-300 relative overflow-hidden group">
<h3 className="text-lg font-medium text-white">Scale</h3>
<div className="my-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white">$499</span>
<span className="text-sm text-gray-500">/mo</span>
</div>
<p className="text-xs text-gray-400 mb-6 h-10">Maximum impact for established brands.</p>
<ul className="space-y-3 mb-8 text-sm text-gray-300">
<li className="flex items-center gap-2"><iconify-icon className="text-white/40" icon="lucide:check"></iconify-icon> Multi-platform Strategy</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white/40" icon="lucide:check"></iconify-icon> Video Editing Team</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white/40" icon="lucide:check"></iconify-icon> 24/7 Slack Access</li>
</ul>
<button className="w-full py-2 rounded border border-white/10 bg-transparent text-sm font-medium hover:bg-white hover:text-black transition-colors">Contact Sales</button>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-white/5 bg-[#020202] pt-20 pb-10" id="contact">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<a className="text-xl font-semibold tracking-tighter text-white flex items-center gap-2 mb-6" href="#">
<span className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-[10px] font-bold text-white">XYZ</span>
                    AGENCY
                </a>
<p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                    Helping creators navigate the digital landscape with precision, data, and design.
                </p>
<div className="flex gap-4 mt-6">
<a className="text-gray-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="18"></iconify-icon></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Legal</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Newsletter</h4>
<form className="flex flex-col gap-2">
<input className="bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Enter your email" type="email"/>
<button className="bg-indigo-600 text-white text-xs font-medium py-2 rounded hover:bg-indigo-500 transition-colors" type="button">Subscribe</button>
</form>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
<p>© 2024 XYZ Agency Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-gray-400" href="#">Privacy Policy</a>
<a className="hover:text-gray-400" href="#">Terms of Service</a>
</div>
</div>
</footer>



    </>
  );
}
