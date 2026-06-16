import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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

      // --- Three.js Setup (Global Background) ---
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

      // Bloom Pass
      const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
      bloomPass.threshold = 0;
      bloomPass.strength = 1.8;
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
          // Changed to a deep blue emissive to match user request
          emissive: 0x002244, 
          emissiveIntensity: 0.2
      });

      // Changed to Electric Blue (approx 0x00A3FF) instead of Orange
      const edgeMaterial = new THREE.MeshBasicMaterial({ color: 0x00A3FF });

      const geometry = new THREE.SphereGeometry(1.2, 32, 32);
      const mesh = new THREE.Mesh(geometry, material);

      const wireframe = new THREE.LineSegments(new THREE.EdgesGeometry(geometry), edgeMaterial);
      mesh.add(wireframe);

      logoGroup.add(mesh);
      scene.add(logoGroup);

      const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
      scene.add(ambientLight);

      // Changed Spotlight to Blue
      const spotlight1 = new THREE.SpotLight(0x00A3FF, 50);
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
      
      // Changed Particles to Blue to reduce orange overload in Hero
      const particlesMaterial = new THREE.PointsMaterial({
          size: 0.05,
          color: 0x00A3FF, 
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

      // --- GSAP Animations (Scroll & UI) ---
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

      // This transition brings back the brand orange as you scroll down
      tl.to(particlesMaterial.color, { r: 0.97, g: 0.33, b: 0, duration: 1 }, 2) 
        .to(camera.rotation, { z: 0.2, duration: 2 }, 2);

      tl.to(particlesMesh.scale, { x: 2, y: 2, z: 2, duration: 2 }, 4)
        .to(scene.fog, { density: 0.05, duration: 2 }, 4);

      tl.to(spotlight1, { intensity: 100, angle: 0.1, duration: 2 }, 6)
        .to(bloomPass, { strength: 3, radius: 1, duration: 2 }, 6);

      // --- Card Interactions (Service Section) ---
      const serviceCards = document.querySelectorAll('.service-card');
      serviceCards.forEach(card => {
          card.addEventListener('mouseenter', () => {
              const colorHex = card.getAttribute('data-color');
              const color = new THREE.Color(colorHex);
              gsap.to(particlesMaterial.color, { r: color.r, g: color.g, b: color.b, duration: 0.5 });
              gsap.to(bloomPass, { strength: 3, duration: 0.2 });
          });
          card.addEventListener('mouseleave', () => {
              // Return to Brand Orange
              gsap.to(particlesMaterial.color, { r: 0.97, g: 0.33, b: 0, duration: 0.5 }); 
              gsap.to(bloomPass, { strength: 1.8, duration: 0.5 });
          });
      });

      // --- Resize Handler ---
      window.addEventListener('resize', () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
          composer.setSize(window.innerWidth, window.innerHeight);
      });

      // --- Entrance Animations ---
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
      

<div className="" id="canvas-container"><canvas className="" data-engine="three.js r160" height="1339" style={{display: 'block', width: '2064px', height: '1339px'}} width="2064"></canvas></div>

<nav className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
<div className="glass-panel px-6 py-3 rounded-full flex justify-between items-center gap-8 md:gap-12 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
<div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
<div className="relative w-8 h-8 flex items-center justify-center bg-white/5 rounded-full border border-white/10">
<svg className="lucide lucide-waves w-4 h-4 text-brand" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
</div>
<span className="font-display font-bold text-sm tracking-tight text-white uppercase">
                    Lead Fix AI
                </span>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="text-[11px] font-medium text-white/60 hover:text-white transition-colors" href="#how-it-works">How It Works</a>
<a className="text-[11px] font-medium text-white/60 hover:text-white transition-colors" href="#meet-lisa">Meet Lisa</a>
<a className="text-[11px] font-medium text-white/60 hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-[11px] font-medium text-white/60 hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<a className="hidden md:block text-[10px] font-bold bg-gradient-to-r from-brand to-brandDark text-white px-5 py-2 rounded-full hover:brightness-110 transition-all shadow-[0_0_15px_rgba(249,85,0,0.3)]" href="#contact">
                BOOK A DISCOVERY CALL
            </a>
<button className="md:hidden text-white/70 hover:text-white">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<main className="z-10 flex flex-col w-full relative items-center">

<section className="min-h-screen flex flex-col md:flex-row gap-12 w-full max-w-7xl mr-auto ml-auto pt-28 pr-6 pb-12 pl-6 relative items-center justify-center">

<div className="flex-1 w-full space-y-8 relative z-10 text-left">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/30 bg-brand/5 backdrop-blur-sm animate-fade-in-up opacity-0" style={{animationDelay: '0.1s', animationFillMode: 'forwards', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 20px)', opacity: '0'}}>
<svg className="lucide lucide-zap w-3 h-3 text-brand fill-brand" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-[10px] font-semibold uppercase tracking-widest text-brand">V2.0 Available</span>
</div>
<div className="space-y-2 animate-fade-in-up opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 20px)', opacity: '0'}}>
<p className="text-brand font-medium text-sm tracking-wide">Driven by Science. Built for Contractors.</p>
<h1 className="text-5xl md:text-7xl font-display font-semibold tracking-tighter leading-[0.95] text-white">
                        Never miss another
                        <span className="text-brand">$1,200</span> call <span className="text-white/30">again.</span>
</h1>
</div>
<div className="space-y-6 max-w-lg animate-fade-in-up opacity-0" style={{animationDelay: '0.5s', animationFillMode: 'forwards', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 20px)', opacity: '0'}}>
<p className="text-xl text-white font-medium">
                        Stop losing <span className="text-brand border-b border-brand/30 pb-0.5">revenue</span> to voicemail.
                    </p>
<p className="text-sm md:text-[15px] text-white/50 leading-relaxed font-light">
                        85% of callers won't leave one—they call your competitor instead. Our custom AI employees capture every lead, qualify prospects, and book jobs directly onto your calendar. Perfect for Roofers, HVAC &amp; Plumbers.
                    </p>
</div>
<div className="pt-2 flex flex-wrap items-center gap-4 animate-fade-in-up opacity-0" style={{animationDelay: '0.7s', animationFillMode: 'forwards', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 20px)', opacity: '0'}}>
<button className="group relative inline-flex items-center gap-2 pl-6 pr-5 py-3.5 bg-void border border-brand text-white rounded-full text-sm font-semibold tracking-wide hover:bg-brand hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(249,85,0,0.15)] hover:shadow-[0_0_30px_rgba(249,85,0,0.4)]">
                        Learn More
                        <svg className="lucide lucide-chevron-right w-4 h-4 transition-transform group-hover:translate-x-0.5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<button className="inline-flex items-center gap-3 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-medium text-white transition-all">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
<svg className="lucide lucide-play w-3 h-3 fill-white text-white ml-0.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
                        Watch Demo
                    </button>
</div>
</div>

<div className="flex-1 w-full flex justify-center md:justify-end relative z-10 animate-fade-in-up opacity-0" style={{animationDelay: '0.9s', animationFillMode: 'forwards', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 20px)', opacity: '0'}}>

<div className="relative w-[320px] h-[640px] bg-[#0a0a0a] rounded-[40px] border-[6px] border-[#1a1a1a] shadow-[0_0_50px_rgba(0,0,0,0.5),0_0_100px_rgba(249,85,0,0.1)] overflow-hidden">

<div className="absolute top-0 left-0 w-full h-12 flex justify-between items-end px-6 pb-2 z-20">
<span className="text-white text-xs font-medium">9:41</span>
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-signal w-3 h-3 text-white" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-3 h-3 text-white" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<div className="w-4 h-2.5 border border-white/30 rounded-[2px] relative">
<div className="absolute inset-0.5 bg-white rounded-[1px]"></div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-void via-[#150500] to-[#2a0a00] flex flex-col items-center pt-24 pb-12 px-6">

<div className="relative w-24 h-24 mb-6">
<div className="absolute inset-0 bg-brand/20 blur-xl rounded-full animate-pulse"></div>
<img alt="AI Agent" className="w-full h-full object-cover rounded-full border-2 border-white/10 relative z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 right-0 w-6 h-6 bg-[#1a1a1a] rounded-full flex items-center justify-center z-20 border border-white/10">
<div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
</div>
</div>

<div className="text-center space-y-1 mb-2">
<h3 className="text-xl font-semibold text-white">Lead Fix Agent</h3>
<p className="text-xs text-brand font-medium tracking-wide uppercase">Ready to demo</p>
</div>

<div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/5 mb-12">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
<span className="text-[10px] text-white/50">Click to experience <span className="text-white font-medium">Live Demo</span></span>
</div>

<div className="flex items-center gap-1.5 h-16 mb-auto">
<div className="bar"></div>
<div className="bar"></div>
<div className="bar"></div>
<div className="bar"></div>
<div className="bar"></div>
</div>

<div className="w-full grid grid-cols-3 gap-4 mt-auto">
<div className="flex flex-col items-center gap-2">
<button className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
<svg className="lucide lucide-mic-off w-6 h-6 text-white" data-lucide="mic-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M15 9.34V5a3 3 0 0 0-5.68-1.33"></path><path d="M16.95 16.95A7 7 0 0 1 5 12v-2"></path><path d="M18.89 13.23A7 7 0 0 0 19 12v-2"></path><path d="m2 2 20 20"></path><path d="M9 9v3a3 3 0 0 0 5.12 2.12"></path></svg>
</button>
<span className="text-[10px] text-white/50">Mute</span>
</div>
<div className="flex flex-col items-center gap-2">
<button className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
<svg className="lucide lucide-volume-2 w-6 h-6 text-white" data-lucide="volume-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg>
</button>
<span className="text-[10px] text-white/50">Speaker</span>
</div>
<div className="flex flex-col items-center gap-2">
<button className="w-14 h-14 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-colors shadow-lg shadow-red-500/20">
<svg className="lucide lucide-phone-off w-6 h-6 text-white" data-lucide="phone-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272"></path><path d="M22 2 2 22"></path><path d="M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473"></path></svg>
</button>
<span className="text-[10px] text-white/50">End</span>
</div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-30 rounded-[34px]"></div>
</div>
</div>
</section>

<section className="w-full max-w-6xl mx-auto px-6 py-24 relative" id="how-it-works">
<div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 border-b border-white/5 pb-8">
<div>
<h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-white mb-3">
                        How it Works
                    </h2>
<p className="text-white/50 text-sm max-w-md">
                        Automated intake, qualification, and scheduling specifically engineered for trade businesses.
                    </p>
</div>
<div className="hidden md:flex items-center gap-2 text-xs text-brand font-medium border border-brand/20 bg-brand/5 px-3 py-1 rounded-full">
<svg className="lucide lucide-cpu w-3 h-3" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
                    Powered by Lead Fix Engine
                </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">

<div className="service-card group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-brand/50 transition-colors duration-500" data-color="#F95500">
<div className="relative h-full bg-void rounded-xl p-6 overflow-hidden border border-white/5 group-hover:border-brand/20 transition-colors">
<div className="absolute inset-0 bg-glow-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="p-2 bg-white/5 rounded-lg border border-white/10 text-brand">
<svg className="lucide lucide-phone-call w-5 h-5" data-lucide="phone-call" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<span className="font-mono text-xs text-white/30">01</span>
</div>
<h3 className="text-base font-semibold text-white mb-2 tracking-tight">24/7 Answering</h3>
<p className="text-xs text-white/50 leading-relaxed mb-6 flex-grow">
                                Never let a call go to voicemail. Our AI answers instantly, day or night, capturing emergency jobs for Plumbers &amp; HVAC.
                            </p>
<div className="h-32 w-full rounded-lg overflow-hidden border border-white/10 relative grayscale group-hover:grayscale-0 transition-all duration-500">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-void to-transparent opacity-80"></div>
</div>
</div>
</div>
</div>

<div className="service-card group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-white/40 transition-colors duration-500" data-color="#FFFFFF">
<div className="relative h-full bg-void rounded-xl p-6 overflow-hidden border border-white/5 group-hover:border-white/20 transition-colors">
<div className="absolute inset-0 bg-glow-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="p-2 bg-white/5 rounded-lg border border-white/10 text-white">
<svg className="lucide lucide-clipboard-check w-5 h-5" data-lucide="clipboard-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
</div>
<span className="font-mono text-xs text-white/30">02</span>
</div>
<h3 className="text-base font-semibold text-white mb-2 tracking-tight">Smart Qualification</h3>
<p className="text-xs text-white/50 leading-relaxed mb-6 flex-grow">
                                Filter out tire-kickers. The AI asks specific questions about roof age, leak locations, or system types before booking.
                            </p>
<div className="h-32 w-full rounded-lg overflow-hidden border border-white/10 relative grayscale group-hover:grayscale-0 transition-all duration-500">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-void to-transparent opacity-80"></div>
</div>
</div>
</div>
</div>

<div className="service-card group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-brand/50 transition-colors duration-500" data-color="#F95500">
<div className="relative h-full bg-void rounded-xl p-6 overflow-hidden border border-white/5 group-hover:border-brand/20 transition-colors">
<div className="absolute inset-0 bg-glow-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="p-2 bg-white/5 rounded-lg border border-white/10 text-brand">
<svg className="lucide lucide-calendar-check-2 w-5 h-5" data-lucide="calendar-check-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path><path d="M3 10h18"></path><path d="m16 20 2 2 4-4"></path></svg>
</div>
<span className="font-mono text-xs text-white/30">03</span>
</div>
<h3 className="text-base font-semibold text-white mb-2 tracking-tight">Instant Scheduling</h3>
<p className="text-xs text-white/50 leading-relaxed mb-6 flex-grow">
                                Integrates with ServiceTitan, Housecall Pro, and GCal to book estimates directly into your team's available slots.
                            </p>
<div className="h-32 w-full rounded-lg overflow-hidden border border-white/10 relative grayscale group-hover:grayscale-0 transition-all duration-500">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-void to-transparent opacity-80"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-5xl mx-auto px-6 py-20 relative z-10 flex flex-col items-center" id="meet-lisa">
<div className="text-center mb-16 space-y-3 animate-fade-in-up opacity-0" style={{animationDelay: '0.1s', animationFillMode: 'forwards', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 20px)', opacity: '0'}}>
<h2 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-white">Meet Lisa</h2>
<p className="text-xl md:text-2xl text-white/50 font-light tracking-tight">Your Intelligent AI Digital Employee</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full mb-16 animate-fade-in-up opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 20px)', opacity: '0'}}>

<div className="group p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300">
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Books Appointments</h3>
<p className="text-sm text-white/60 font-light">Schedules directly into your calendar</p>
</div>

<div className="group p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300">
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Lead Generation</h3>
<p className="text-sm text-white/60 font-light">Qualifies and nurtures <span className="text-brand">prospects</span></p>
</div>

<div className="group p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300">
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">SMS &amp; Email</h3>
<p className="text-sm text-white/60 font-light">Automated confirmations and <span className="text-brand">follow-ups</span></p>
</div>

<div className="group p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300">
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Multilingual</h3>
<p className="text-sm text-white/60 font-light">Speaks 40+ languages fluently</p>
</div>

<div className="group p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300">
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Calendar Integration</h3>
<p className="text-sm text-white/60 font-light"><span className="text-brand">Real-time</span> availability checking</p>
</div>

<div className="group p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300">
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Programmable</h3>
<p className="text-sm text-white/60 font-light">Customized to your business</p>
</div>
</div>

<div className="flex flex-col items-center gap-6 animate-fade-in-up opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 20px)', opacity: '0'}}>
<div className="relative group cursor-pointer">

<div className="absolute inset-0 bg-brand/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 w-28 h-28 rounded-full border border-white/10 bg-gradient-to-b from-white/5 to-black flex flex-col items-center justify-center gap-2 transition-transform duration-300 group-hover:scale-105 group-hover:border-white/20">
<svg className="lucide lucide-mic w-8 h-8 text-white stroke-[1.5]" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</div>
<div className="absolute -bottom-8 w-full text-center text-[10px] text-white/40 uppercase tracking-widest font-medium">Talk to Lisa</div>
</div>
<button className="mt-8 px-10 py-3 rounded-full border border-brand text-brand hover:bg-brand hover:text-white transition-all duration-300 text-sm font-medium tracking-wide">
                    Ready to talk
                </button>
</div>
</section>

<section className="w-full max-w-6xl mx-auto px-6 py-24 relative z-10">
<div className="relative rounded-3xl overflow-hidden border border-white/10 bg-void">

<div className="absolute -right-20 -top-20 w-96 h-96 bg-brand/10 rounded-full blur-[128px]"></div>
<div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1 space-y-8">
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<img alt="" className="w-8 h-8 rounded-full ring-2 ring-black grayscale" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="text-xs text-white/50 ml-2">Trusted by <span className="text-white font-medium">50+ Contractors</span> nationwide</div>
</div>
<h2 className="text-2xl md:text-3xl font-display font-medium leading-snug tracking-tight">
                            “Lead Fix AI completely changed our business. We went from missing 30% of calls to booking jobs while we sleep.”
                        </h2>
<div className="flex items-center gap-4 border-t border-white/5 pt-6">
<div>
<div className="text-sm font-semibold text-white">Mike Stevens</div>
<div className="text-xs text-white/40">Owner, Stevens Roofing &amp; Siding</div>
</div>
</div>
</div>
<div className="w-full md:w-80 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6">
<div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-6">Performance</div>
<div className="grid grid-cols-1 gap-6">
<div>
<div className="text-3xl font-mono text-brand font-medium tracking-tighter mb-1">100%</div>
<div className="text-xs text-white/50">Answer Rate</div>
</div>
<div className="w-full h-px bg-white/5"></div>
<div>
<div className="text-3xl font-mono text-brand font-medium tracking-tighter mb-1">&lt; 2min</div>
<div className="text-xs text-white/50">Avg Booking Time</div>
</div>
</div>
<button className="w-full mt-6 py-2.5 bg-brand/10 border border-brand/20 hover:bg-brand/20 text-brand text-xs font-semibold rounded-md transition-all">
                            View Case Study
                        </button>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-24 relative z-10" id="pricing">
<div className="text-center mb-16 space-y-4">
<h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-white">Pricing Plans</h2>
<p className="text-white/50 text-sm md:text-base font-light">Choose the plan that fits your business. No hidden fees. Cancel anytime.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] flex flex-col h-full hover:border-white/20 transition-all duration-300">
<h3 className="text-lg font-medium text-white mb-2">Starter</h3>
<div className="flex items-baseline gap-1 mb-1">
<span className="text-4xl font-display font-semibold text-white">$297</span>
<span className="text-sm text-white/50">/mo</span>
</div>
<p className="text-brand text-xs font-medium mb-2">$1,500 setup fee</p>
<p className="text-white/40 text-xs mb-8">Basic setup to get started</p>
<ul className="space-y-4 mb-8 flex-1">

<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-xs text-white/80">Lisa answers calls 24/7 (worth $597 alone)</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-xs text-white/80">200 minutes included ($1.50/min after)</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-xs text-white/80">Calendar booking</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-xs text-white/80">Email call summaries</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-xs text-white/80">Basic setup</span>
</li>

<li className="flex items-start gap-3">
<svg className="lucide lucide-x w-4 h-4 text-red-500 mt-0.5 shrink-0" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="text-xs text-red-400">Jack costs $199/mo extra</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-x w-4 h-4 text-red-500 mt-0.5 shrink-0" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="text-xs text-red-400">NO text-back (email only)</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-x w-4 h-4 text-red-500 mt-0.5 shrink-0" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="text-xs text-red-400">NO knowledge base training</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-x w-4 h-4 text-red-500 mt-0.5 shrink-0" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="text-xs text-red-400">You handle some setup</span>
</li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors text-sm font-medium">
                        Get Started
                    </button>
</div>

<div className="relative p-8 rounded-2xl border border-brand bg-[#0A0A0A] flex flex-col h-full shadow-[0_0_50px_rgba(249,85,0,0.1)] transform md:-translate-y-4">

<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-full flex items-center gap-1 shadow-lg shadow-brand/20">
<svg className="lucide lucide-zap w-3 h-3 fill-white text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                        Most Popular
                    </div>
<h3 className="text-lg font-medium text-white mb-2">Professional</h3>
<div className="flex items-baseline gap-1 mb-1">
<span className="text-4xl font-display font-semibold text-white">$497</span>
<span className="text-sm text-white/50">/mo</span>
</div>
<p className="text-brand text-xs font-medium mb-2">$1,500 setup fee</p>
<p className="text-white/40 text-xs mb-6">The no-brainer choice</p>
<div className="mb-8 bg-[#1a0f0a] border border-brand/20 rounded-lg p-3 text-center">
<p className="text-brand text-xs font-medium">Only $200 more, get $500+ in extra value</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-brand mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-xs text-white/90">Everything in Starter</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-brand mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-xs text-white/90">500 minutes (2.5x more!)</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-brand mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-xs text-white/90">Jack FREE ($199 value)</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-brand mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-xs text-white/90">Text-back (instant SMS)</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-brand mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-xs text-white/90">SMS appointment reminders</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-brand mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-xs text-white/90">Knowledge base training</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-brand mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-xs text-white/90">Free demo after call</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-brand mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-xs text-white/90">Fully managed setup</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-brand mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-xs text-white/90">Priority support</span>
</li>
</ul>
<button className="w-full py-3 rounded-lg bg-brand hover:bg-brandDark text-white transition-all shadow-[0_0_20px_rgba(249,85,0,0.3)] text-sm font-semibold flex items-center justify-center gap-2">
                        Get Started
                        <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] flex flex-col h-full hover:border-white/20 transition-all duration-300">
<h3 className="text-lg font-medium text-white mb-2">Premium</h3>
<div className="flex items-baseline gap-1 mb-1">
<span className="text-4xl font-display font-semibold text-white">$1997</span>
<span className="text-sm text-white/50">/mo</span>
</div>
<p className="text-brand text-xs font-medium mb-2">$1,500 setup fee</p>
<p className="text-white/40 text-xs mb-8">For serious operations</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-xs text-white/80">Everything in Professional</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-xs text-white/80">UNLIMITED MINUTES (no overage charges)</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-xs text-white/80">Multiple locations/phone numbers</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-xs text-white/80">Dedicated account manager</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-xs text-white/80">Custom CRM integrations</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-xs text-white/80">Advanced analytics dashboard</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-xs text-white/80">VIP support</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-xs text-white/80">Priority feature requests</span>
</li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors text-sm font-medium">
                        Get Started
                    </button>
</div>
</div>
</section>

<section className="w-full bg-[#080808] border-t border-white/5 py-24 px-6 relative z-10" id="contact">
<div className="max-w-5xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-white mb-6">
                            Book a<br/>Discovery Call
                        </h2>
<p className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm">
                            Ready to automate your front desk? See if your business qualifies for Lead Fix AI deployment.
                        </p>
<div className="space-y-4">
<div className="flex items-center gap-3 text-sm text-white/70">
<svg className="lucide lucide-mail w-4 h-4 text-brand" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                                growth@leadfix.ai
                            </div>
<div className="flex items-center gap-3 text-sm text-white/70">
<svg className="lucide lucide-phone w-4 h-4 text-brand" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                                (555) 123-4567
                            </div>
</div>
<div className="mt-12 p-4 rounded-lg bg-white/5 border border-white/10 inline-flex items-center gap-3">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
</span>
<span className="text-xs font-medium text-white/80">Onboarding 3 new partners this week</span>
</div>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-white/40 uppercase tracking-wide">Name</label>
<input className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-white/40 uppercase tracking-wide">Company</label>
<input className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all" placeholder="Apex Roofing" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-white/40 uppercase tracking-wide">Industry</label>
<div className="relative">
<select className="w-full appearance-none bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all cursor-pointer">
<option className="bg-[#111]">Roofing</option>
<option className="bg-[#111]">HVAC</option>
<option className="bg-[#111]">Plumbing</option>
<option className="bg-[#111]">Other Contractor</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-3.5 w-4 h-4 text-white/30 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-white/40 uppercase tracking-wide">Monthly Call Volume</label>
<div className="relative">
<select className="w-full appearance-none bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all cursor-pointer">
<option className="bg-[#111]">0 - 50</option>
<option className="bg-[#111]">50 - 200</option>
<option className="bg-[#111]">200+</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-3.5 w-4 h-4 text-white/30 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<button className="w-full py-3.5 bg-brand hover:bg-brandDark text-white font-semibold text-xs uppercase tracking-widest rounded-lg transition-colors duration-300 shadow-[0_0_20px_rgba(249,85,0,0.3)]" type="submit">
                            Schedule Demo
                        </button>
</form>
</div>
</div>
</section>

<footer className="w-full border-t border-white/10 bg-black py-8 px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-white/30 font-medium">
                    © 2024 Lead Fix AI. All rights reserved.
                </div>
<div className="flex gap-6">
<a className="text-white/30 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-white/30 hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-white/30 hover:text-white transition-colors" href="#"><svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
</footer>
</main>






    </>
  );
}
