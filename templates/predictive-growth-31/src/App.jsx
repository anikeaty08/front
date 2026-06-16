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
'tech-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
},
animation: {
'fade-in-up': 'fadeSlideIn 0.8s ease-out forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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

      // --- Navbar Scroll Logic (Enhanced for Glassy + Readable) ---
      const navbar = document.getElementById('navbar');
      const navbarBg = document.getElementById('navbar-bg');
      
      window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
          // Scrolled State: Compressed, Highly Blurred Glass, Readable Background
          navbar.classList.remove('py-6');
          navbar.classList.add('py-4');
          
          navbarBg.classList.remove('bg-transparent', 'backdrop-blur-none', 'border-transparent', 'shadow-none');
          // Using black/60 with heavy blur for maximum readability while keeping the glass feel
          navbarBg.classList.add('bg-[#050505]/60', 'backdrop-blur-xl', 'border-white/10', 'shadow-2xl');
        } else {
          // Top State: Transparent, Expanded
          navbar.classList.add('py-6');
          navbar.classList.remove('py-4');
          
          navbarBg.classList.add('bg-transparent', 'backdrop-blur-none', 'border-transparent', 'shadow-none');
          navbarBg.classList.remove('bg-[#050505]/60', 'backdrop-blur-xl', 'border-white/10', 'shadow-2xl');
        }
      });

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
              { opacity: 1, y: 0, duration: 1, ease: "power2.out", scrollTrigger: {
                trigger: element,
                start: "top 85%"
              }}
          );
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="canvas-container"></div>

<nav className="fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] py-6" id="navbar">


<div className="absolute inset-0 bg-transparent backdrop-blur-none border-b border-transparent transition-all duration-500 ease-out -z-10 shadow-none" id="navbar-bg">

<div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-20">

<div className="flex items-center gap-3 group cursor-pointer">
<div className="relative w-8 h-8 flex items-center justify-center border border-white/20 rounded-sm group-hover:border-neon/50 transition-colors duration-300 bg-black/20 backdrop-blur-sm">
<div className="w-1.5 h-1.5 bg-white group-hover:bg-neon shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:shadow-[0_0_10px_#00F3FF] transition-all duration-300 rounded-full"></div>
<div className="absolute inset-0 border border-white/5 scale-75"></div>
</div>
<span className="font-bold text-lg tracking-tight uppercase text-white mix-blend-screen">
            MARQAIT
            <span className="text-neon font-normal">AI</span>
</span>
</div>

<div className="hidden md:flex items-center gap-10">
<a className="text-sm font-medium text-white/80 hover:text-white hover:text-shadow-glow transition-all duration-300 tracking-wide relative group" href="#services">
            AI Systems
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-all duration-300 tracking-wide relative group" href="#portfolio">
            Deployed Models
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
</a>
</div>

<a className="group relative px-6 py-2.5 bg-white/5 overflow-hidden rounded border border-white/20 transition-all duration-300 hover:border-neon hover:shadow-[0_0_20px_rgba(0,243,255,0.15)] backdrop-blur-md" href="#contact">
<div className="absolute inset-0 bg-gradient-to-r from-neon/0 via-neon/10 to-neon/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
<span className="relative flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white group-hover:text-neon transition-colors">
            Deploy Automation
            <i className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" data-lucide="arrow-right"></i>
</span>
</a>
</div>
</nav>

<main className="relative z-10 w-full">

<section className="min-h-screen w-full flex flex-col justify-center items-center text-center px-4 relative pt-32 pb-20 overflow-hidden">

<div className="absolute inset-0 bg-tech-grid bg-[length:40px_40px] opacity-20 mask-image-b-transparent pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void/90 pointer-events-none"></div>

<div className="absolute left-10 md:left-20 top-0 bottom-0 w-px bg-white/5 hidden md:block"></div>
<div className="absolute right-10 md:right-20 top-0 bottom-0 w-px bg-white/5 hidden md:block"></div>

<div className="relative z-10 max-w-5xl mx-auto w-full">

<div className="flex justify-center mb-12 opacity-0 animate-fade-in-up" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
<div className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center gap-3">
<div className="flex items-center gap-2">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-neon"></span>
</span>
<span className="text-[10px] font-mono uppercase text-white/50 tracking-widest">System Online</span>
</div>
<div className="w-px h-3 bg-white/10"></div>
<span className="text-[10px] font-mono uppercase text-neon tracking-widest">v2.4.0</span>
</div>
</div>

<div className="relative inline-block p-8 md:p-12 hero-glow">

<div className="hero-corner hero-corner-tl"></div>
<div className="hero-corner hero-corner-tr"></div>
<div className="hero-corner hero-corner-bl"></div>
<div className="hero-corner hero-corner-br"></div>

<h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-white opacity-0 animate-fade-in-up" style={{animationDelay: '1.0s', animationFillMode: 'forwards'}}>
<span className="block text-white mix-blend-screen drop-shadow-2xl">AUTOMATING</span>
<span className="block text-white/90">GROWTH</span>
<span className="block text-3xl md:text-5xl lg:text-7xl font-serif italic font-normal text-white/50 mt-2 md:mt-4 tracking-tight">
                With Predictive AI
              </span>
</h1>
</div>

<div className="mt-8 flex flex-col items-center gap-8 opacity-0 animate-fade-in-up" style={{animationDelay: '1.2s', animationFillMode: 'forwards'}}>
<p className="text-white/60 text-base md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
              An autonomous engine that predicts revenue outcomes and  automates marketing decisions without human latency.
            </p>

<div className="flex items-center justify-center gap-8 md:gap-16 border-t border-white/5 pt-8 w-full max-w-2xl">
<div className="text-center">
<div className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Latency</div>
<div className="text-sm font-mono text-neon">&lt; 20ms</div>
</div>
<div className="text-center">
<div className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Accuracy</div>
<div className="text-sm font-mono text-white">99.4%</div>
</div>
<div className="text-center">
<div className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Status</div>
<div className="text-sm font-mono text-white">Active</div>
</div>
</div>
<div className="pt-4">
<button className="group relative px-8 py-4 bg-transparent overflow-hidden border border-white/30 text-white transition-all hover:border-neon">
<div className="absolute inset-0 w-0 bg-neon transition-all duration-[250ms] ease-out group-hover:w-full opacity-80"></div>
<span className="relative flex items-center gap-3 text-sm font-medium uppercase tracking-widest group-hover:text-white">
                  Activate AI Automation
                  <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
</button>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-void to-transparent pointer-events-none z-10"></div>
</section>

<section className="flex flex-col z-10 w-full pt-24 pr-6 pb-24 pl-6 relative items-center" id="services">
<div className="max-w-7xl mx-auto w-full space-y-12">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8">
<div className="">
<span className="text-neon text-xs font-medium tracking-[0.2em] uppercase mb-2 block">
                Capabilities
              </span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white max-w-2xl">
                Decision-making automated by AI.
                <br/>
<span className="text-white/50">Execution scaled by code.</span>
</h2>
</div>
<p className="text-sm text-white/60 max-w-md text-right hidden md:block">
              Our AI analyzes performance data in real-time, automation executes optimizations instantly, and humans supervise the strategy.
            </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="service-card group relative p-6 rounded-2xl border border-white/10 hover:border-neon/50 transition-colors overflow-hidden" data-color="#00F3FF">
<div className="absolute inset-0 bg-[rgba(10,15,18,0.7)] backdrop-blur-[18px] backdrop-saturate-[1.2] shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] ring-1 ring-inset ring-neon/10 transition-all duration-300 group-hover:bg-[rgba(10,15,18,0.78)] group-hover:backdrop-blur-[22px] z-0"></div>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
<div className="absolute inset-0 bg-gradient-to-b from-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
<div className="relative z-20">
<div className="flex justify-between items-center mb-6">
<span className="text-[10px] uppercase tracking-widest text-white/40">
                    Generative Engine
                  </span>
<span className="text-[10px] font-mono text-neon">01</span>
</div>
<div className="h-48 rounded-lg bg-black/50 border border-white/5 mb-6 overflow-hidden relative">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" src="https://cdn.midjourney.com/46310446-fa52-4b6b-a02e-ec8293b13acf/0_2.png?w=800&amp;q=80"/>
</div>
<h3 className="text-lg font-medium text-white mb-2">
                  Autonomous Content Gen
                </h3>
<p className="text-xs text-white/50 leading-relaxed mb-4">
                  AI models that generate and adapt creative assets based on real-time engagement signals and audience behavior.
                </p>
<div className="flex items-center gap-2 text-[10px] text-neon uppercase tracking-wider">
<div className="w-1.5 h-1.5 bg-neon rounded-full"></div>
                  Self-Optimizing Creative Loops
                </div>
</div>
</div>

<div className="service-card group relative p-6 rounded-2xl border border-white/10 hover:border-neon/50 transition-colors overflow-hidden" data-color="#FFFFFF">
<div className="absolute inset-0 bg-[rgba(10,15,18,0.7)] backdrop-blur-[18px] backdrop-saturate-[1.2] shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] ring-1 ring-inset ring-neon/10 transition-all duration-300 group-hover:bg-[rgba(10,15,18,0.78)] group-hover:backdrop-blur-[22px] z-0"></div>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
<div className="absolute inset-0 bg-gradient-to-b from-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
<div className="relative z-20">
<div className="flex justify-between items-center mb-6">
<span className="text-[10px] uppercase tracking-widest text-white/40">
                    Algorithmic Buying
                  </span>
<span className="text-[10px] font-mono text-neon">02</span>
</div>
<div className="h-48 rounded-lg bg-black/50 border border-white/5 mb-6 overflow-hidden relative">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" src="https://cdn.midjourney.com/9342fab6-af2f-477a-93c9-7ec9543783ca/0_1.png?w=800&amp;q=80"/>
</div>
<h3 className="text-lg font-medium text-white mb-2">
                  Automated Media Bidding
                </h3>
<p className="text-xs text-white/50 leading-relaxed mb-4">
                  Predictive ROAS models automate bid adjustments and budget allocation 24/7, removing human error.
                </p>
<div className="flex items-center gap-2 text-[10px] text-neon uppercase tracking-wider">
<div className="w-1.5 h-1.5 bg-neon rounded-full"></div>
                  Real-time Bid Intelligence
                </div>
</div>
</div>

<div className="service-card group relative p-6 rounded-2xl border border-white/10 hover:border-neon/50 transition-colors overflow-hidden" data-color="#00F3FF">
<div className="absolute inset-0 bg-[rgba(10,15,18,0.7)] backdrop-blur-[18px] backdrop-saturate-[1.2] shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] ring-1 ring-inset ring-neon/10 transition-all duration-300 group-hover:bg-[rgba(10,15,18,0.78)] group-hover:backdrop-blur-[22px] z-0"></div>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
<div className="absolute inset-0 bg-gradient-to-b from-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
<div className="relative z-20">
<div className="flex justify-between items-center mb-6">
<span className="text-[10px] uppercase tracking-widest text-white/40">
                    Funnel Logic
                  </span>
<span className="text-[10px] font-mono text-neon">03</span>
</div>
<div className="h-48 rounded-lg bg-black/50 border border-white/5 mb-6 overflow-hidden relative">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" src="https://cdn.midjourney.com/bad59b7f-e21e-48bd-910b-ca59e24c2644/0_0.png?w=800&amp;q=80"/>
</div>
<h3 className="text-lg font-medium text-white mb-2">
                  AI-Driven Analytics
                </h3>
<p className="text-xs text-white/50 leading-relaxed mb-4">
                  Intelligent workflows automate lead nurturing and trigger sales actions based on predictive scoring.
                </p>
<div className="flex items-center gap-2 text-[10px] text-neon uppercase tracking-wider">
<div className="w-1.5 h-1.5 bg-neon rounded-full"></div>
                  Automated Conversion Paths
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
                Target Industries
              </span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white max-w-2xl">
                Built for Diverse Industries
              </h2>
</div>
<p className="text-sm text-white/60 max-w-md text-right hidden md:block">
              AI-powered strategies tailored to how different industries attract, convert, and scale customers.
            </p>
</div>

<div className="flex flex-col lg:flex-row w-full lg:h-[600px] h-auto gap-3">

<article className="group relative flex-1 hover:flex-[2.5] lg:h-full h-[300px] rounded-2xl border border-white/10 overflow-hidden cursor-pointer expand-transition">

<img alt="FinTech" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c79fc717-cabf-4592-87c6-ff2348e98d9d_800w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end h-full">
<div className="transform transition-transform duration-500 group-hover:-translate-y-2">
<div className="flex items-center gap-3 mb-3">
<span className="px-2 py-1 rounded border border-white/20 bg-black/40 text-[10px] uppercase tracking-widest text-neon font-medium backdrop-blur-md">
                      Search-Led Industries
                    </span>
<span className="w-px h-3 bg-white/20 hidden group-hover:block transition-all duration-300 delay-100"></span>
<span className="text-[10px] uppercase tracking-wide text-white/60 hidden group-hover:block opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      Capture Demand
                    </span>
</div>
<h3 className="text-2xl lg:text-3xl font-medium tracking-tight text-white mb-2 whitespace-nowrap">
                    HIGH-INTENT BRANDS
                  </h3>

<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
<div className="overflow-hidden">
<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 pt-2">
<p className="text-sm text-white/80 leading-relaxed max-w-md">
                          Brands where visibility and rankings drive revenue. We engineer AI-powered SEO, content, and conversion strategies to capture demand at the moment of intent.
                        </p>
</div>
</div>
</div>
</div>
</div>
</article>

<article className="group relative flex-1 hover:flex-[2.5] lg:h-full h-[300px] rounded-2xl border border-white/10 overflow-hidden cursor-pointer expand-transition">
<img alt="SaaS" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/68ea7b37-55c2-4f35-acd1-d8eafcb684ac_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end h-full">
<div className="transform transition-transform duration-500 group-hover:-translate-y-2">
<div className="flex items-center gap-3 mb-3">
<span className="px-2 py-1 rounded border border-white/20 bg-black/40 text-[10px] uppercase tracking-widest text-white font-medium backdrop-blur-md group-hover:text-neon group-hover:border-neon/30 transition-colors">
                      Social-First Industries
                    </span>
<span className="w-px h-3 bg-white/20 hidden group-hover:block transition-all duration-300 delay-100"></span>
<span className="text-[10px] uppercase tracking-wide text-white/60 hidden group-hover:block opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      Attention &amp; Scale
                    </span>
</div>
<h3 className="text-2xl lg:text-3xl font-medium tracking-tight text-white mb-2 whitespace-nowrap">
                    ATTENTION ECONOMY BRANDS
                  </h3>
<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
<div className="overflow-hidden">
<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 pt-2">
<p className="text-sm text-white/80 leading-relaxed max-w-md">
                          Brands built on awareness, engagement, and community. AI-driven social media, creator content, and performance amplification designed to scale attention into action.
                        </p>
</div>
</div>
</div>
</div>
</div>
</article>

<article className="group relative flex-1 hover:flex-[2.5] lg:h-full h-[300px] rounded-2xl border border-white/10 overflow-hidden cursor-pointer expand-transition">
<img alt="E-commerce" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d5b7286a-1d69-473a-9296-5693b2afd0fd_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end h-full">
<div className="transform transition-transform duration-500 group-hover:-translate-y-2">
<div className="flex items-center gap-3 mb-3">
<span className="px-2 py-1 rounded border border-white/20 bg-black/40 text-[10px] uppercase tracking-widest text-white font-medium backdrop-blur-md group-hover:text-neon group-hover:border-neon/30 transition-colors">
                      Paid Media-Heavy Industries
                    </span>
<span className="w-px h-3 bg-white/20 hidden group-hover:block transition-all duration-300 delay-100"></span>
<span className="text-[10px] uppercase tracking-wide text-white/60 hidden group-hover:block opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      Ad Optimization
                    </span>
</div>
<h3 className="text-2xl lg:text-3xl font-medium tracking-tight text-white mb-2 whitespace-nowrap">
                    SCALE-DEPENDENT BUSINESSES
                  </h3>
<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
<div className="overflow-hidden">
<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 pt-2">
<p className="text-sm text-white/80 leading-relaxed max-w-md">
                          Brands that grow through performance advertising. AI-led ad systems across search, social, and display channels to optimize spend, scale faster, and protect ROI.
                        </p>
</div>
</div>
</div>
</div>
</div>
</article>

<article className="group relative flex-1 hover:flex-[2.5] lg:h-full h-[300px] rounded-2xl border border-white/10 overflow-hidden cursor-pointer expand-transition">
<img alt="Data" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd74cf83-e9de-4acd-8477-8c4f9b298b30_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end h-full">
<div className="transform transition-transform duration-500 group-hover:-translate-y-2">
<div className="flex items-center gap-3 mb-3">
<span className="px-2 py-1 rounded border border-white/20 bg-black/40 text-[10px] uppercase tracking-widest text-white font-medium backdrop-blur-md group-hover:text-neon group-hover:border-neon/30 transition-colors">
                      Trust &amp; Funnel-Driven Industries
                    </span>
<span className="w-px h-3 bg-white/20 hidden group-hover:block transition-all duration-300 delay-100"></span>
<span className="text-[10px] uppercase tracking-wide text-white/60 hidden group-hover:block opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      Lifecycle Marketing
                    </span>
</div>
<h3 className="text-2xl lg:text-3xl font-medium tracking-tight text-white mb-2 whitespace-nowrap">
                    COMPLEX BUYING JOURNEYS
                  </h3>
<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
<div className="overflow-hidden">
<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 pt-2">
<p className="text-sm text-white/80 leading-relaxed max-w-md">
                          Brands that require education and multiple touchpoints. We automate content, retargeting, and lifecycle marketing to move prospects from interest to conversion.
                        </p>
</div>
</div>
</div>
</div>
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
                System Validation
              </span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white max-w-2xl">
                Accelerating growth.
                
                <span className="text-white/50">Proven by data.</span>
</h2>
</div>
<p className="text-sm text-white/60 max-w-md text-right hidden md:block">
              Leading organizations use our AI infrastructure to scale revenue,
              reduce churn, and unlock new opportunities faster.
            </p>
</div>
<div className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 overflow-hidden relative group">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute -top-24 -right-24 w-96 h-96 bg-neon/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="flex flex-col md:flex-row gap-12 relative z-10">
<div className="flex-1 flex flex-col justify-between">
<div className="">
<div className="text-neon text-xs font-medium tracking-[0.2em] uppercase mb-4">
                    Performance Feedback
                  </div>
<p className="text-sm text-white/80 font-medium tracking-wide mb-6 uppercase border-l-2 border-neon pl-4">
                    Built on AI models trained for high-velocity growth prediction.
                  </p>
<h2 className="text-2xl md:text-4xl font-medium tracking-tight text-white mb-8 leading-snug">
                    “The AI system identified expansion plays we missed and automated the execution. We saw 3x revenue lift in the first week without manual oversight.”
                  </h2>
</div>
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-white/10">
<img alt="Customer" className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div className="">
<div className="text-sm font-semibold text-white">
                      Partner Validation
                    </div>
<div className="text-xs text-white/40 uppercase tracking-wider">
                      B2B SaaS, Series C
                    </div>
</div>
</div>
</div>
<div className="w-full md:w-96 bg-black/40 rounded-2xl p-6 border border-white/10 flex flex-col justify-center gap-6">
<div className="text-xs font-bold tracking-widest text-white/30 uppercase">
                  Automation Impact
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
<div className="text-sm text-white/50">Human Intervention</div>
</div>
<button className="w-full mt-2 py-3 bg-neon/10 border border-neon/50 text-neon text-xs font-bold uppercase tracking-widest hover:bg-neon hover:text-black transition-all">
                  View Data Logs
                </button>
</div>
</div>
</div>
</div>
</section>

<section className="w-full px-6 py-24 relative z-10">

<div className="max-w-7xl mx-auto h-[400px] w-full relative group overflow-hidden rounded-tl-[100px] rounded-br-[100px] rounded-tr-[24px] rounded-bl-[24px] bg-black">


<img alt="Growth Architecture Team" className="absolute inset-0 w-full h-full object-cover transition-all duration-300 ease-out group-hover:scale-105 group-hover:opacity-60 opacity-80 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/73394335-89da-4d08-8aa9-bd9a5be892f2_3840w.png"/>

<div className="absolute inset-0 bg-[#00F3FF] mix-blend-overlay opacity-40 transition-opacity duration-300 group-hover:opacity-20 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#00F3FF]/20 to-transparent opacity-30 mix-blend-color pointer-events-none"></div>

<div className="absolute inset-0 bg-gradient-to-b from-void/90 via-void/50 to-void/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out z-10"></div>


<div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out translate-y-4 group-hover:translate-y-0">

<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-8 max-w-3xl leading-[1.1] drop-shadow-lg font-sans">
              Stop Managing Campaigns.
              <br className="hidden md:block"/>
              Start Automating Growth.
            </h2>

<a className="group/btn relative px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white overflow-hidden rounded-none transition-all hover:bg-neon hover:text-black hover:border-neon duration-300" href="#contact">
<span className="relative flex items-center gap-3 text-sm font-bold uppercase tracking-widest">
                Deploy AI-Driven Automation
                <i className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" data-lucide="arrow-right"></i>
</span>
</a>
</div>
</div>
</section>

<section className="w-full min-h-screen py-24 px-6 relative z-10 bg-void flex items-center justify-center overflow-hidden" id="contact">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-neon/5 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '8s'}}></div>
<div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]"></div>
</div>
<div className="max-w-7xl mx-auto w-full relative z-20">
<div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-start">

<div className="lg:col-span-7 glass-panel-tech rounded-2xl border border-white/10 p-8 md:p-12 relative overflow-hidden group/scanner">

<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-20"></div>

<div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none z-0"></div>

<div className="scanner-beam"></div>

<div className="relative z-10">
<div className="mb-12 animate-fade-in-up">
<span className="text-neon text-xs font-medium tracking-[0.2em] uppercase mb-4 block">
                    Inquiry Protocol
                  </span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
                    Initialize Growth
                    <span className="font-serif font-normal italic text-white/50 block mt-1">
                      Protocol.
                    </span>
</h2>
<p className="text-sm text-white/60 mt-4 max-w-md font-light leading-relaxed">
                    Request access to our AI automation infrastructure for your organization.
                  </p>
</div>
<form className="space-y-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div className="input-group relative opacity-0 animate-fade-in-up" style={{animationDelay: '100ms', animationFillMode: 'forwards'}}>
<input className="peer w-full bg-transparent border-b border-white/10 py-3 text-white text-base focus:outline-none placeholder-transparent z-10 relative" id="name" placeholder=" " required="" type="text"/>
<label className="absolute left-0 top-3 text-white/40 text-sm transition-all duration-300 pointer-events-none uppercase tracking-widest font-medium" htmlFor="name">
                        What's your name?
                      </label>
<div className="input-underline"></div>
</div>

<div className="input-group relative opacity-0 animate-fade-in-up" style={{animationDelay: '200ms', animationFillMode: 'forwards'}}>
<input className="peer w-full bg-transparent border-b border-white/10 py-3 text-white text-base focus:outline-none placeholder-transparent z-10 relative" id="email" placeholder=" " required="" type="email"/>
<label className="absolute left-0 top-3 text-white/40 text-sm transition-all duration-300 pointer-events-none uppercase tracking-widest font-medium" htmlFor="email">
                        Your email address
                      </label>
<div className="input-underline"></div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div className="input-group relative opacity-0 animate-fade-in-up" style={{animationDelay: '300ms', animationFillMode: 'forwards'}}>
<input className="peer w-full bg-transparent border-b border-white/10 py-3 text-white text-base focus:outline-none placeholder-transparent z-10 relative" id="company" placeholder=" " type="text"/>
<label className="absolute left-0 top-3 text-white/40 text-sm transition-all duration-300 pointer-events-none uppercase tracking-widest font-medium" htmlFor="company">
                        Company / Organization
                      </label>
<div className="input-underline"></div>
</div>

<div className="input-group relative opacity-0 animate-fade-in-up" style={{animationDelay: '400ms', animationFillMode: 'forwards'}}>
<select className="peer w-full bg-transparent border-b border-white/10 py-3 text-white text-base focus:outline-none appearance-none rounded-none cursor-pointer z-10 relative" id="service" required="">
<option className="bg-black text-white/50" disabled="" selected="" value=""></option>
<option className="bg-black text-white" value="web">Autonomous Content Generation</option>
<option className="bg-black text-white" value="brand">Self-Optimizing Media Buying</option>
<option className="bg-black text-white" value="product">Automated Conversion Loops</option>
<option className="bg-black text-white" value="strategy">Growth Intelligence Audit</option>
</select>
<label className="absolute left-0 top-3 text-white/40 text-sm transition-all duration-300 pointer-events-none uppercase tracking-widest font-medium" htmlFor="service">
                        System Module
                      </label>
<div className="input-underline"></div>
<div className="absolute right-0 top-4 text-white/30 pointer-events-none">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>
</div>
</div>

<div className="input-group relative opacity-0 animate-fade-in-up" style={{animationDelay: '500ms', animationFillMode: 'forwards'}}>
<textarea className="peer w-full bg-transparent border-b border-white/10 py-3 text-white text-base focus:outline-none placeholder-transparent resize-none z-10 relative" id="about" placeholder=" " rows="3"></textarea>
<label className="absolute left-0 top-3 text-white/40 text-sm transition-all duration-300 pointer-events-none uppercase tracking-widest font-medium" htmlFor="about">
                      Tell us about your automation goals
                    </label>
<div className="input-underline"></div>
</div>

<div className="pt-8 opacity-0 animate-fade-in-up" style={{animationDelay: '600ms', animationFillMode: 'forwards'}}>
<button className="group w-full md:w-auto relative px-8 py-4 bg-transparent border border-white/20 text-white hover:border-neon hover:bg-neon/5 transition-all duration-300 rounded-sm overflow-hidden" type="submit">
<span className="relative z-10 flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-[0.15em]">
                        Deploy AI Infrastructure
                        <i className="w-4 h-4 text-neon transition-transform duration-300 group-hover:translate-x-1" data-lucide="arrow-right"></i>
</span>
<div className="absolute inset-0 bg-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</button>
</div>
</form>
</div>
</div>

<div className="lg:col-span-5 h-full opacity-0 animate-fade-in-up" style={{animationDelay: '200ms', animationFillMode: 'forwards'}}>
<div className="glass-panel-tech rounded-2xl border border-white/10 p-8 md:p-12 h-full flex flex-col justify-between relative overflow-hidden">

<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 to-transparent pointer-events-none"></div>

<div className="relative z-10 space-y-12">
<div>
<h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-8 flex items-center gap-2">
<span className="w-2 h-[1px] bg-white/30"></span> Contact Details
                      </h3>
<div className="space-y-8">
<a className="group flex items-start gap-4" href="mailto:hello@marqait.digital">
<div className="p-2 rounded-full border border-white/10 text-white/50 group-hover:text-neon group-hover:border-neon/50 transition-colors">
<i className="w-4 h-4" data-lucide="mail"></i>
</div>
<div>
<div className="text-lg text-white font-medium group-hover:text-neon transition-colors">
                              hello@marqait.digital
                            </div>
<div className="text-xs text-white/40 mt-1 uppercase tracking-wider">
                              For general inquiries
                            </div>
</div>
</a>
<div className="flex items-start gap-4">
<div className="p-2 rounded-full border border-white/10 text-white/50">
<i className="w-4 h-4" data-lucide="phone"></i>
</div>
<div>
<div className="text-lg text-white font-medium">
                              +1 (555) 012-3456
                            </div>
<div className="text-xs text-white/40 mt-1 uppercase tracking-wider">
                              Mon-Fri, 9am - 6pm PST
                            </div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 rounded-full border border-white/10 text-white/50">
<i className="w-4 h-4" data-lucide="map-pin"></i>
</div>
<div>
<div className="text-lg text-white font-medium">
                              San Francisco
                            </div>
<div className="text-xs text-white/40 mt-1 uppercase tracking-wider">
                              123 Innovation Dr, Suite 400
                            </div>
</div>
</div>
</div>
</div>
</div>

<div className="relative z-10 mt-12 pt-12 border-t border-white/5">
<div className="flex items-center gap-3 mb-4">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-neon"></span>
</span>
<span className="text-xs font-bold uppercase tracking-widest text-neon">
                      Current Availability
                    </span>
</div>
<p className="text-sm text-white/70 leading-relaxed max-w-sm">
                    Our team is currently assessing new partnerships for
                    <span className="text-white font-medium border-b border-white/20">Q3 2025</span>. 
                    
                    Priority is given to brands with existing data infrastructure ready for automated scaling.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 py-12 px-6 bg-black">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="font-bold text-lg tracking-tighter uppercase text-white">
              MARQAIT
              <span className="text-neon">AI</span>
</span>
</div>
<div className="text-xs text-white/40 uppercase tracking-widest text-center md:text-left">
            AI-Powered Automation for Predictable Growth<br/>
            © 2024 MARQAIT Digital. All rights reserved.
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
