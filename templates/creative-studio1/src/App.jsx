import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
void: '#050505',
neon: '#00F3FF',
glass: 'rgba(255, 255, 255, 0.05)',
glassHover: 'rgba(255, 255, 255, 0.1)',
},
fontFamily: {
sans: ['Syne', 'sans-serif'],
serif: ['Instrument Serif', 'serif'],
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



      {
          "imports": {
              "three": "https://unpkg.com/three@0.160.0/build/three.module.js",
              "three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/"
          }
      }
    


      import * as THREE from 'three';
      import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
      import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
      import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

      // --- Init Lucide Icons ---
      lucide.createIcons();

      // --- Three.js Setup ---
      const container = document.getElementById('canvas-container');
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x050505, 0.02);

      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ReinhardToneMapping;
      container.appendChild(renderer.domElement);

      // --- Post Processing (Bloom) ---
      const renderScene = new RenderPass(scene, camera);

      const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
      bloomPass.threshold = 0;
      bloomPass.strength = 2.0;
      bloomPass.radius = 0.5;

      const composer = new EffectComposer(renderer);
      composer.addPass(renderScene);
      composer.addPass(bloomPass);

      // --- Scene Objects ---

      const logoGroup = new THREE.Group();

      const material = new THREE.MeshStandardMaterial({
          color: 0x111111,
          metalness: 1.0,
          roughness: 0.1,
          emissive: 0x004444,
          emissiveIntensity: 0.2
      });

      const edgeMaterial = new THREE.MeshBasicMaterial({ color: 0x00F3FF });

      const geometry = new THREE.SphereGeometry(1.2, 32, 32);
      const mesh = new THREE.Mesh(geometry, material);

      const wireframe = new THREE.LineSegments(new THREE.EdgesGeometry(geometry), edgeMaterial);
      mesh.add(wireframe);

      logoGroup.add(mesh);
      scene.add(logoGroup);

      const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
      scene.add(ambientLight);

      const spotlight1 = new THREE.SpotLight(0x00F3FF, 50);
      spotlight1.position.set(5, 5, 5);
      spotlight1.angle = 0.3;
      spotlight1.penumbra = 0.5;
      scene.add(spotlight1);

      const spotlight2 = new THREE.SpotLight(0xffffff, 10);
      spotlight2.position.set(-5, 5, 5);
      spotlight2.angle = 0.5;
      scene.add(spotlight2);

      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 2000;
      const posArray = new Float32Array(particlesCount * 3);

      for(let i = 0; i < particlesCount * 3; i++) {
          posArray[i] = (Math.random() - 0.5) * 20;
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      const particlesMaterial = new THREE.PointsMaterial({
          size: 0.05,
          color: 0xffffff,
          transparent: true,
          opacity: 0.8,
      });

      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      particlesMesh.position.y = -5;
      scene.add(particlesMesh);

      function animate() {
          requestAnimationFrame(animate);

          const time = Date.now() * 0.002;
          const scale = 1 + Math.sin(time * 2) * 0.02;
          logoGroup.scale.set(scale, scale, scale);

          logoGroup.rotation.y += 0.002;

          const positions = particlesGeometry.attributes.position.array;
          for(let i = 0; i < particlesCount; i++) {
              const x = positions[i * 3];
              positions[i * 3 + 1] = Math.sin(Date.now() * 0.001 + x) * 0.5 - 2;
          }
          particlesGeometry.attributes.position.needsUpdate = true;

          composer.render();
      }
      animate();

      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
          scrollTrigger: {
              trigger: "body",
              start: "top top",
              end: "bottom bottom",
              scrub: 1
          }
      });

      tl.to(logoGroup.position, { z: -10, y: 5, duration: 2 }, 0)
        .to(logoGroup.rotation, { x: 1, duration: 2 }, 0)
        .to(camera.position, { z: 8, duration: 2 }, 0)
        .to(particlesMesh.position, { y: 0, duration: 2 }, 0.5);

      tl.to(particlesMaterial.color, { r: 0, g: 0.95, b: 1, duration: 1 }, 2)
        .to(camera.rotation, { z: 0.2, duration: 2 }, 2);

      tl.to(particlesMesh.scale, { x: 2, y: 2, z: 2, duration: 2 }, 4)
        .to(scene.fog, { density: 0.05, duration: 2 }, 4);

      tl.to(spotlight1, { intensity: 100, angle: 0.1, duration: 2 }, 6)
        .to(bloomPass, { strength: 3, radius: 1, duration: 2 }, 6);

      const serviceCards = document.querySelectorAll('.service-card');
      serviceCards.forEach(card => {
          card.addEventListener('mouseenter', () => {
              const colorHex = card.getAttribute('data-color');
              const color = new THREE.Color(colorHex);
              gsap.to(particlesMaterial.color, { r: color.r, g: color.g, b: color.b, duration: 0.5 });
              gsap.to(bloomPass, { strength: 3, duration: 0.2 });
          });
          card.addEventListener('mouseleave', () => {
              gsap.to(particlesMaterial.color, { r: 1, g: 1, b: 1, duration: 0.5 });
              gsap.to(bloomPass, { strength: 2, duration: 0.5 });
          });
      });

      window.addEventListener('resize', () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
          composer.setSize(window.innerWidth, window.innerHeight);
      });

      gsap.utils.toArray('.animate-fade-in-up').forEach(element => {
          gsap.fromTo(element,
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
          );
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="canvas-container"></div>

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 mix-blend-difference">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center gap-2 group cursor-pointer">
<svg className="text-white group-hover:text-neon transition-colors duration-300" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" stroke="currentColor" strokeWidth="2" width="20" x="2" y="2"></rect>
<path d="M12 2V22" stroke="currentColor" strokeWidth="2"></path>
<path d="M2 12H22" stroke="currentColor" strokeWidth="2"></path>
</svg>
<span className="font-semibold text-lg tracking-tight uppercase hidden sm:block">
            Creative
            <span className="text-neon">.</span>
            Inc
          </span>
</div>
<div className="flex items-center gap-8">
<a className="text-sm font-medium hover:text-neon transition-colors tracking-wide hidden md:block" href="#services">
            Expertise
          </a>
<a className="text-sm font-medium hover:text-neon transition-colors tracking-wide hidden md:block" href="#portfolio">
            Selected Work
          </a>
<a className="border border-white/20 bg-white/5 hover:bg-neon hover:border-neon text-white px-5 py-2 text-xs font-medium uppercase tracking-widest transition-all duration-300 backdrop-blur-md" href="#contact">
            Start Project
          </a>
</div>
</div>
</nav>

<main className="relative z-10 w-full">

<section className="h-screen w-full flex flex-col justify-center items-center text-center px-4 relative">
<div className="max-w-4xl mx-auto space-y-6 pt-20">
<h2 className="text-neon text-xs md:text-sm font-semibold tracking-[0.3em] uppercase opacity-0 animate-fade-in-up" style={{animationDelay: '1s', animationFillMode: 'forwards'}}>
            Digital Design Studio
          </h2>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mix-blend-overlay opacity-0 animate-fade-in-up" style={{animationDelay: '1.2s', animationFillMode: 'forwards'}}>
            WE BUILD
            <br/>
            FUTURE
          </h1>
<div className="pt-8 opacity-0 animate-fade-in-up" style={{animationDelay: '1.4s', animationFillMode: 'forwards'}}>
<button className="group relative px-8 py-4 bg-transparent overflow-hidden border border-white/30 text-white transition-all hover:border-neon">
<div className="absolute inset-0 w-0 bg-neon transition-all duration-[250ms] ease-out group-hover:w-full opacity-80"></div>
<span className="relative flex items-center gap-3 text-sm font-medium uppercase tracking-widest group-hover:text-white">
                View Case Studies
                <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
</button>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
<span className="text-[10px] uppercase tracking-widest">
            Scroll to Explore
          </span>
<div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
</div>
</section>

<section className="flex flex-col z-10 w-full pt-24 pr-6 pb-24 pl-6 relative items-center" id="services">
<div className="max-w-7xl mx-auto w-full space-y-12">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8">
<div className="">
<span className="text-neon text-xs font-medium tracking-[0.2em] uppercase mb-2 block">
                Our Product · Workflows
              </span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white max-w-2xl">
                You control the targets.
                <br/>
<span className="text-white/50">Mira compounds the growth.</span>
</h2>
</div>
<p className="text-sm text-white/60 max-w-md text-right hidden md:block">
              Mira watches every signal across your stack, 24/7. No
              spreadsheets, no guesswork—just a clear lane from insight to
              impact.
            </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="service-card group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-neon/50 transition-colors backdrop-blur-sm overflow-hidden" data-color="#00F3FF">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-b from-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="flex justify-between items-center mb-6">
<span className="text-[10px] uppercase tracking-widest text-white/40">
                    Active Signals
                  </span>
<span className="text-[10px] font-mono text-neon">01</span>
</div>
<div className="h-48 rounded-lg bg-black/50 border border-white/5 mb-6 overflow-hidden relative">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" src="https://cdn.midjourney.com/46310446-fa52-4b6b-a02e-ec8293b13acf/0_2.png?w=800&amp;q=80"/>
</div>
<h3 className="text-lg font-medium text-white mb-2">
                  Stay informed, always.
                </h3>
<p className="text-xs text-white/50 leading-relaxed mb-4">
                  Get instant alerts when usage spikes, risk behavior appears,
                  or expansion intent crosses your threshold.
                </p>
<div className="flex items-center gap-2 text-[10px] text-neon uppercase tracking-wider">
<div className="w-1.5 h-1.5 bg-neon rounded-full"></div>
                  Automated alerts
                </div>
</div>
</div>

<div className="service-card group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-neon/50 transition-colors backdrop-blur-sm overflow-hidden" data-color="#FFFFFF">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-b from-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="flex justify-between items-center mb-6">
<span className="text-[10px] uppercase tracking-widest text-white/40">
                    Advanced Engine
                  </span>
<span className="text-[10px] font-mono text-neon">02</span>
</div>
<div className="h-48 rounded-lg bg-black/50 border border-white/5 mb-6 overflow-hidden relative">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" src="https://cdn.midjourney.com/9342fab6-af2f-477a-93c9-7ec9543783ca/0_1.png?w=800&amp;q=80"/>
</div>
<h3 className="text-lg font-medium text-white mb-2">
                  AI-powered precision.
                </h3>
<p className="text-xs text-white/50 leading-relaxed mb-4">
                  Let Mira handle the split-second decisions—so reps and CSMs
                  stay focused on conversations.
                </p>
<div className="flex items-center gap-2 text-[10px] text-neon uppercase tracking-wider">
<div className="w-1.5 h-1.5 bg-neon rounded-full"></div>
                  SLA-aware tasks
                </div>
</div>
</div>

<div className="service-card group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-neon/50 transition-colors backdrop-blur-sm overflow-hidden" data-color="#00F3FF">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-b from-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="flex justify-between items-center mb-6">
<span className="text-[10px] uppercase tracking-widest text-white/40">
                    Real-time Triggers
                  </span>
<span className="text-[10px] font-mono text-neon">03</span>
</div>
<div className="h-48 rounded-lg bg-black/50 border border-white/5 mb-6 overflow-hidden relative">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" src="https://cdn.midjourney.com/bad59b7f-e21e-48bd-910b-ca59e24c2644/0_0.png?w=800&amp;q=80"/>
</div>
<h3 className="text-lg font-medium text-white mb-2">
                  Tailor your experience.
                </h3>
<p className="text-xs text-white/50 leading-relaxed mb-4">
                  Customize triggers, thresholds, and owners to match how your
                  team really works.
                </p>
<div className="flex items-center gap-2 text-[10px] text-neon uppercase tracking-wider">
<div className="w-1.5 h-1.5 bg-neon rounded-full"></div>
                  Multi-channel actions
                </div>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen w-full relative z-10 py-24 px-6 flex flex-col items-center" id="portfolio">
<div className="max-w-7xl mx-auto w-full">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8 mb-12">
<div className="">
<span className="text-neon text-xs font-medium tracking-[0.2em] uppercase mb-2 block">
                Selected Work · 2024-2025
              </span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white max-w-2xl">
                Crafting the future.
                <br/>
<span className="text-white/50">One pixel at a time.</span>
</h2>
</div>
<p className="text-sm text-white/60 max-w-md text-right hidden md:block">
              We partner with ambitious brands to create digital products that
              define categories and drive measurable growth.
            </p>
</div>
<div className="flex flex-col md:flex-row gap-6">

<article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition backdrop-blur w-full">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="[animation:fadeSlideIn_0.8s_ease-out_0.5s_both] animate-on-scroll pt-5 pr-5 pb-5 pl-5">
<div className="relative aspect-square rounded-xl border border-white/10 bg-black/40 overflow-hidden">
<img alt="Fuse — Multi-Agent Layer (Beta)" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30dd5951-eeb5-4b75-ab70-4c9de46effb5_800w.webp" style={{filter: 'grayscale(100%)'}}/>
<div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl"></div>
</div>
<div className="mt-4 text-[11px] uppercase tracking-wide text-white/50 font-medium">
                  May 6, 2025
                </div>
<h3 className="mt-2 text-xl font-medium tracking-tight text-white">
                  Fuse — Multi-Agent Layer (Beta)
                </h3>
<p className="mt-2 text-sm text-white/60 leading-relaxed">
                  Coordinate multiple AI agents seamlessly with our new
                  orchestration layer for complex workflows.
                </p>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition backdrop-blur w-full">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="[animation:fadeSlideIn_0.8s_ease-out_0.6s_both] animate-on-scroll pt-5 pr-5 pb-5 pl-5">
<div className="relative aspect-square rounded-xl border border-white/10 bg-black/40 overflow-hidden">
<img alt="Low-Latency Mode for Inference API" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa91f7af-c0ee-487e-9b71-34905a5f7414_800w.webp" style={{filter: 'grayscale(100%)'}}/>
<div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl"></div>
</div>
<div className="mt-4 text-[11px] uppercase tracking-wide text-white/50 font-medium">
                  Apr 29, 2025
                </div>
<h3 className="mt-2 text-xl font-medium tracking-tight text-white">
                  Low-Latency Mode for Inference API
                </h3>
<p className="mt-2 text-sm text-white/60 leading-relaxed">
                  Experience 40% faster response times with our optimized
                  inference pipeline for real-time applications.
                </p>
</div>
</article>

<article className="group relative overflow-hidden hover:bg-white/[0.06] transition border-white/10 border rounded-2xl backdrop-blur w-full">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="[animation:fadeSlideIn_0.8s_ease-out_0.7s_both] animate-on-scroll pt-5 pr-5 pb-5 pl-5">
<div className="relative aspect-square rounded-xl border border-white/10 bg-black/40 overflow-hidden">
<img alt="Code Interpreter — Run Python in Chat" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/05c76ddb-2184-4dd8-8e7d-3465ddde84ea_800w.webp" style={{filter: 'grayscale(100%)'}}/>
<div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl"></div>
</div>
<div className="mt-4 text-[11px] uppercase tracking-wide text-white/50 font-medium">
                  Apr 1, 2025
                </div>
<h3 className="mt-2 text-xl font-medium tracking-tight text-white">
                  Code Interpreter — Run Python in Chat
                </h3>
<p className="mt-2 text-sm text-white/60 leading-relaxed">
                  Execute Python code directly in conversations with secure
                  sandboxing and instant visualization support.
                </p>
</div>
</article>
</div>
</div>
</section>

<section className="flex flex-col w-full py-24 px-6 relative z-10">
<div className="max-w-7xl mx-auto w-full">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8 mb-12">
<div className="">
<span className="text-neon text-xs font-medium tracking-[0.2em] uppercase mb-2 block">
                Outcomes · Trust
              </span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white max-w-2xl">
                Accelerating growth.
                <br/>
<span className="text-white/50">Proven by data.</span>
</h2>
</div>
<p className="text-sm text-white/60 max-w-md text-right hidden md:block">
              See how leading teams use our infrastructure to scale revenue,
              reduce churn, and unlock new opportunities faster.
            </p>
</div>
<div className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 overflow-hidden relative group">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute -top-24 -right-24 w-96 h-96 bg-neon/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="flex flex-col md:flex-row gap-12 relative z-10">
<div className="flex-1 flex flex-col justify-between">
<div className="">
<div className="text-neon text-xs font-medium tracking-[0.2em] uppercase mb-8">
                    Reviews from Real People
                  </div>
<h2 className="text-2xl md:text-4xl font-medium tracking-tight text-white mb-8 leading-snug">
                    “Mira turned our scattered client data into a single growth
                    map. We spotted 3 expansion plays in the first week and
                    closed all of them.”
                  </h2>
</div>
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-white/10">
<img alt="Customer" className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div className="">
<div className="text-sm font-semibold text-white">
                      Head of Customer Success
                    </div>
<div className="text-xs text-white/40 uppercase tracking-wider">
                      B2B SaaS, Series C
                    </div>
</div>
</div>
</div>
<div className="w-full md:w-96 bg-black/40 rounded-2xl p-6 border border-white/10 flex flex-col justify-center gap-6">
<div className="text-xs font-bold tracking-widest text-white/30 uppercase">
                  Impact at a glance
                </div>
<div className="space-y-1">
<div className="text-4xl font-mono text-neon font-medium">
                    +18%
                  </div>
<div className="text-sm text-white/50">Net Revenue Retention</div>
</div>
<div className="w-full h-px bg-white/10"></div>
<div className="space-y-1">
<div className="text-4xl font-mono text-neon font-medium">
                    3.7x
                  </div>
<div className="text-sm text-white/50">
                    Expansion Wins per Qtr
                  </div>
</div>
<div className="w-full h-px bg-white/10"></div>
<div className="space-y-1">
<div className="text-4xl font-mono text-neon font-medium">
                    -74%
                  </div>
<div className="text-sm text-white/50">Time to Insight</div>
</div>
<button className="w-full mt-2 py-3 bg-neon/10 border border-neon/50 text-neon text-xs font-bold uppercase tracking-widest hover:bg-neon hover:text-black transition-all">
                  View Case Study
                </button>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-24 px-6 relative z-10 bg-void" id="contact">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8 mb-16">
<div>
<span className="text-neon text-xs font-medium tracking-[0.2em] uppercase mb-2 block">
                Inquiry
              </span>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-none">
                Start a new
                <br/>
<span className="font-serif font-normal italic text-white/50">
                  project.
                </span>
</h2>
</div>
<p className="text-sm text-white/60 max-w-md text-right hidden md:block pb-2">
              We help ambitious brands define their digital future. Tell us
              about your goals and let's create something extraordinary.
            </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-8">
<form className="space-y-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-white/20 py-3 text-white text-lg focus:border-neon outline-none transition-colors placeholder-transparent" id="name" required="" type="text"/>
<label className="absolute left-0 -top-3 text-xs text-white/40 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-neon peer-focus:text-xs" htmlFor="name">
                      What's your name?
                    </label>
</div>
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-white/20 py-3 text-white text-lg focus:border-neon outline-none transition-colors placeholder-transparent" id="email" required="" type="email"/>
<label className="absolute left-0 -top-3 text-xs text-white/40 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-neon peer-focus:text-xs" htmlFor="email">
                      Your email address
                    </label>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-white/20 py-3 text-white text-lg focus:border-neon outline-none transition-colors placeholder-transparent" id="company" type="text"/>
<label className="absolute left-0 -top-3 text-xs text-white/40 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-neon peer-focus:text-xs" htmlFor="company">
                      Company / Organization
                    </label>
</div>
<div className="group relative">
<select className="peer w-full bg-transparent border-b border-white/20 py-3 text-white text-lg focus:border-neon outline-none transition-colors appearance-none rounded-none cursor-pointer" id="service">
<option className="bg-black text-white/50" disabled="" selected="" value="">
                        Select a service
                      </option>
<option className="bg-black text-white" value="web">
                        Web Design &amp; Dev
                      </option>
<option className="bg-black text-white" value="brand">
                        Brand Identity
                      </option>
<option className="bg-black text-white" value="product">
                        Product Design
                      </option>
<option className="bg-black text-white" value="strategy">
                        Strategy
                      </option>
</select>
<label className="absolute left-0 -top-3 text-xs text-neon uppercase tracking-widest" htmlFor="service">
                      Service Interested In
                    </label>
<svg className="absolute right-0 top-4 w-4 h-4 text-white/30 pointer-events-none" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
<div className="group relative">
<textarea className="peer w-full bg-transparent border-b border-white/20 py-3 text-white text-lg focus:border-neon outline-none transition-colors placeholder-transparent resize-none" id="about" rows="2"></textarea>
<label className="absolute left-0 -top-3 text-xs text-white/40 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-neon peer-focus:text-xs" htmlFor="about">
                    Tell us about your project
                  </label>
</div>
<div className="pt-6">
<button className="group relative px-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-neon hover:text-black transition-all duration-300" type="submit">
<span className="relative z-10 flex items-center gap-3">
                      Send Request
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>
</form>
</div>
<div className="lg:col-span-4 flex flex-col gap-12 lg:pl-12 lg:border-l border-white/10">
<div>
<h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">
                  Contact Details
                </h3>
<div className="space-y-6">
<a className="group block" href="mailto:hello@creative.inc">
<div className="text-xl text-white font-medium group-hover:text-neon transition-colors mb-1">
                      hello@creative.inc
                    </div>
<div className="text-sm text-white/40">
                      For general inquiries
                    </div>
</a>
<div className="block">
<div className="text-xl text-white font-medium mb-1">
                      +1 (555) 012-3456
                    </div>
<div className="text-sm text-white/40">
                      Mon-Fri, 9am - 6pm PST
                    </div>
</div>
<div className="block">
<div className="text-xl text-white font-medium mb-1">
                      San Francisco
                    </div>
<div className="text-sm text-white/40">
                      123 Innovation Dr, Suite 400
                    </div>
</div>
</div>
</div>
<div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-3">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-neon"></span>
</span>
<span className="text-xs font-bold uppercase tracking-widest text-neon">
                    Availability
                  </span>
</div>
<p className="text-sm text-white/80 leading-relaxed">
                  We are currently accepting new projects for
                  <span className="text-white font-medium">Q3 2025</span>
                  . Schedule a consultation to secure your spot.
                </p>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 py-12 px-6 bg-black">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="font-bold text-lg tracking-tighter uppercase text-white">
              Creative
              <span className="text-neon">.</span>
              Inc
            </span>
</div>
<div className="text-xs text-white/40 uppercase tracking-widest">
            © 2024 Creative Studio. All rights reserved.
          </div>
<div className="flex gap-6">
<a className="text-white/40 hover:text-neon transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="text-white/40 hover:text-neon transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a className="text-white/40 hover:text-neon transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
</div>
</div>
</footer>
</main>






    </>
  );
}
