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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Three.js Background Implementation
        const canvas = document.getElementById('bg-canvas');
        
        // Scene Setup
        const scene = new THREE.Scene();
        // Fog for depth perception - matches bg color #02040a
        scene.fog = new THREE.FogExp2(0x02040a, 0.002);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 30;
        camera.position.y = 10;
        camera.rotation.x = -0.2;

        const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Particle System (Terrain)
        const geometry = new THREE.BufferGeometry();
        const count = 3000;
        const positions = new Float32Array(count * 3);
        const originalY = new Float32Array(count); // Store original Y to calculate waves

        const width = 120;
        const depth = 120;

        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * width;
            const z = (Math.random() - 0.5) * depth;
            const y = 0; // Flat initially

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
            
            originalY[i] = y;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        // Material - Neon Cyan
        const material = new THREE.PointsMaterial({
            size: 0.15,
            color: 0x22d3ee, // Tailwind cyan-400
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // Secondary Particles (Floating dust)
        const dustGeometry = new THREE.BufferGeometry();
        const dustCount = 500;
        const dustPos = new Float32Array(dustCount * 3);
        
        for(let i=0; i<dustCount; i++) {
            dustPos[i*3] = (Math.random() - 0.5) * 80;
            dustPos[i*3+1] = Math.random() * 40;
            dustPos[i*3+2] = (Math.random() - 0.5) * 80;
        }
        dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
        const dustMaterial = new THREE.PointsMaterial({
            size: 0.05,
            color: 0xffffff,
            transparent: true,
            opacity: 0.4
        });
        const dust = new THREE.Points(dustGeometry, dustMaterial);
        scene.add(dust);


        // Mouse Interaction
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX - windowHalfX) * 0.001;
            mouseY = (event.clientY - windowHalfY) * 0.001;
        });

        // Animation Loop
        const clock = new THREE.Clock();

        function animate() {
            requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();

            // Wave effect for terrain
            const positions = particles.geometry.attributes.position.array;
            
            for(let i = 0; i < count; i++) {
                const x = positions[i * 3];
                const z = positions[i * 3 + 2];
                
                // Horizon Zero Dawn style undulating waves
                // Combine sine waves with different frequencies
                const y = Math.sin(x * 0.1 + elapsedTime * 0.5) * 1.5 + 
                          Math.sin(z * 0.05 + elapsedTime * 0.3) * 1.5 +
                          Math.sin((x + z) * 0.05 + elapsedTime) * 0.5;

                positions[i * 3 + 1] = y;
            }
            particles.geometry.attributes.position.needsUpdate = true;

            // Rotate entire system slightly based on mouse
            targetX = mouseX * 0.5;
            targetY = mouseY * 0.5;

            particles.rotation.y += 0.0005;
            dust.rotation.y -= 0.0002;
            
            // Camera slight parallax
            camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
            camera.position.y += (-mouseY * 5 + 10 - camera.position.y) * 0.05;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        }

        animate();

        // Responsive
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
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
      

<canvas className="fixed inset-0 -z-10 w-full h-full opacity-60 pointer-events-none" id="bg-canvas"></canvas>

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
<div className="glass-panel border-b border-white/5 bg-[#02040a]/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter text-white flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:border-cyan-500/50 transition-colors">
<span className="text-cyan-400">V</span>
</div>
<span>VISIONARY</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-light text-slate-400">
<a className="hover:text-cyan-400 transition-colors" href="#projects">Work</a>
<a className="hover:text-cyan-400 transition-colors" href="#about">Studio</a>
<a className="hover:text-cyan-400 transition-colors" href="#stack">Stack</a>
</div>
<a className="hidden md:flex items-center gap-2 px-4 py-2 text-xs font-medium text-cyan-400 bg-cyan-950/30 border border-cyan-500/20 rounded-full hover:bg-cyan-900/40 hover:border-cyan-500/40 transition-all" href="#contact">
<span>Initialize</span>
<i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
<button className="md:hidden text-slate-300">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20">

<section className="min-h-[85vh] flex flex-col justify-center px-6 max-w-7xl mx-auto">
<div className="max-w-4xl space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/5 border border-cyan-500/10 text-cyan-400 text-xs tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                    SYSTEM ONLINE // V2.4
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter leading-[0.9]">
                    Constructing <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-500 to-blue-600 text-glow">Digital Realities.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl leading-relaxed">
                    An immersive engineering portfolio bridging the gap between functional design and three-dimensional aesthetics.
                </p>
<div className="flex flex-wrap items-center gap-4 pt-4">
<a className="px-8 py-4 bg-white text-slate-950 font-medium text-sm rounded-lg hover:bg-cyan-50 transition-colors flex items-center gap-2" href="#projects">
                        View Prototypes
                        <i className="w-4 h-4" data-lucide="box"></i>
</a>
<a className="px-8 py-4 glass-panel text-white font-medium text-sm rounded-lg hover:bg-white/10 transition-colors" href="#contact">
                        Contact Net
                    </a>
</div>
</div>
<div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-8">
<div>
<h3 className="text-3xl font-medium text-white tracking-tight">4+</h3>
<p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">Years Active</p>
</div>
<div>
<h3 className="text-3xl font-medium text-white tracking-tight">82</h3>
<p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">Deployments</p>
</div>
<div>
<h3 className="text-3xl font-medium text-white tracking-tight">15</h3>
<p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">Awards</p>
</div>
<div>
<h3 className="text-3xl font-medium text-white tracking-tight">99%</h3>
<p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">Uptime</p>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto" id="projects">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Selected Works</h2>
<p className="text-slate-400 font-light max-w-md">Explorations in interface design and rendering engines.</p>
</div>
<a className="text-cyan-400 text-sm hover:text-cyan-300 flex items-center gap-2 transition-colors" href="#">
                    View Archive <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group glass-panel rounded-2xl p-1 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.15)]">
<div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-900/50 relative">
<img alt="Neon Finance Interface" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0 backdrop-blur-sm bg-black/20">
<span className="px-4 py-2 glass-panel rounded-full text-xs text-white border border-white/20">View Case Study</span>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-white group-hover:text-cyan-400 transition-colors">Neon Finance</h3>
<i className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" data-lucide="arrow-up-right"></i>
</div>
<p className="text-sm text-slate-400 font-light line-clamp-2">A decentralized dashboard visualization with real-time WebGL data streams.</p>
<div className="mt-4 flex gap-2">
<span className="text-[10px] px-2 py-1 rounded border border-white/5 bg-white/5 text-slate-400">React</span>
<span className="text-[10px] px-2 py-1 rounded border border-white/5 bg-white/5 text-slate-400">Three.js</span>
</div>
</div>
</div>

<div className="group glass-panel rounded-2xl p-1 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.15)]">
<div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-900/50 relative">
<img alt="Cyber Sentinel Interface" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0 backdrop-blur-sm bg-black/20">
<span className="px-4 py-2 glass-panel rounded-full text-xs text-white border border-white/20">View Case Study</span>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-white group-hover:text-purple-400 transition-colors">Cyber Sentinel</h3>
<i className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors" data-lucide="arrow-up-right"></i>
</div>
<p className="text-sm text-slate-400 font-light line-clamp-2">AI-driven security interface featuring biometric authentication and dark mode UI.</p>
<div className="mt-4 flex gap-2">
<span className="text-[10px] px-2 py-1 rounded border border-white/5 bg-white/5 text-slate-400">Next.js</span>
<span className="text-[10px] px-2 py-1 rounded border border-white/5 bg-white/5 text-slate-400">Tailwind</span>
</div>
</div>
</div>

<div className="group glass-panel rounded-2xl p-1 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.15)]">
<div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-900/50 relative">
<img alt="Terraform UI" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0 backdrop-blur-sm bg-black/20">
<span className="px-4 py-2 glass-panel rounded-full text-xs text-white border border-white/20">View Case Study</span>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-white group-hover:text-emerald-400 transition-colors">Terraform UI</h3>
<i className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" data-lucide="arrow-up-right"></i>
</div>
<p className="text-sm text-slate-400 font-light line-clamp-2">Infrastructure management platform with node-based editing capabilities.</p>
<div className="mt-4 flex gap-2">
<span className="text-[10px] px-2 py-1 rounded border border-white/5 bg-white/5 text-slate-400">Vue</span>
<span className="text-[10px] px-2 py-1 rounded border border-white/5 bg-white/5 text-slate-400">D3.js</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-black/20 backdrop-blur-sm" id="stack">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
<div className="flex flex-col items-center gap-3 text-slate-500 hover:text-cyan-400 transition-colors duration-300">
<i className="w-8 h-8" data-lucide="code-2"></i>
<span className="text-xs font-medium tracking-wide">TYPESCRIPT</span>
</div>
<div className="flex flex-col items-center gap-3 text-slate-500 hover:text-cyan-400 transition-colors duration-300">
<i className="w-8 h-8" data-lucide="box-select"></i>
<span className="text-xs font-medium tracking-wide">REACT</span>
</div>
<div className="flex flex-col items-center gap-3 text-slate-500 hover:text-cyan-400 transition-colors duration-300">
<i className="w-8 h-8" data-lucide="database"></i>
<span className="text-xs font-medium tracking-wide">POSTGRES</span>
</div>
<div className="flex flex-col items-center gap-3 text-slate-500 hover:text-cyan-400 transition-colors duration-300">
<i className="w-8 h-8" data-lucide="cloud"></i>
<span className="text-xs font-medium tracking-wide">AWS</span>
</div>
<div className="flex flex-col items-center gap-3 text-slate-500 hover:text-cyan-400 transition-colors duration-300">
<i className="w-8 h-8" data-lucide="lock"></i>
<span className="text-xs font-medium tracking-wide">WEB3</span>
</div>
<div className="flex flex-col items-center gap-3 text-slate-500 hover:text-cyan-400 transition-colors duration-300">
<i className="w-8 h-8" data-lucide="figma"></i>
<span className="text-xs font-medium tracking-wide">DESIGN</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto" id="contact">
<div className="glass-panel rounded-3xl p-8 md:p-16 overflow-hidden relative">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="grid lg:grid-cols-2 gap-16 relative z-10">
<div className="space-y-8">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Initialize Sequence</h2>
<p className="text-slate-400 font-light leading-relaxed">
                                Ready to collaborate on the next generation of digital products? Send a transmission across the network.
                            </p>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4 text-slate-300">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="mail"></i>
</div>
<span className="text-sm">hello@visionary.dev</span>
</div>
<div className="flex items-center gap-4 text-slate-300">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="map-pin"></i>
</div>
<span className="text-sm">San Francisco, CA / Remote</span>
</div>
</div>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider ml-1">Identity</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all" placeholder="Name" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider ml-1">Contact</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all" placeholder="Email" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider ml-1">Topic</label>
<div className="relative">
<select className="w-full appearance-none bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all">
<option>Project Inquiry</option>
<option>Collaboration</option>
<option>General Message</option>
</select>
<i className="absolute right-4 top-3.5 w-4 h-4 text-slate-500 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider ml-1">Transmission</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all resize-none" placeholder="Your message..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-medium text-sm rounded-lg transition-colors flex items-center justify-center gap-2 mt-4" type="button">
                            Send Transmission
                            <i className="w-4 h-4" data-lucide="send"></i>
</button>
</form>
</div>
</div>
</section>
<footer className="border-t border-white/5 py-12 text-center text-slate-600 text-xs">
<div className="flex justify-center gap-6 mb-4">
<a className="hover:text-cyan-400 transition-colors" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a className="hover:text-cyan-400 transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="hover:text-cyan-400 transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
<p>© 2024 Visionary Portfolio. Rendered in Three.js</p>
</footer>
</main>


    </>
  );
}
