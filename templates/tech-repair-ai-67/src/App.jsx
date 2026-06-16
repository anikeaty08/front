import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
colors: {
brand: {
bg: '#0F1012',        // Dark concrete/charcoal from background
surface: '#1A1B1E',   // Slightly lighter grey
surface2: '#252629',  // Lighter surface
text: '#E2E2E2',      // Metallic silver text
muted: '#9CA3AF',     // Muted silver
accent: '#D92323',    // Deep fiery red from wings
accentDark: '#8B0000',// Dark blood red
accentLight: '#FF7F3F',// Glowing ember orange
silver: '#C0C0C0',    // Brushed metal
}
},
backgroundImage: {
'fire-glow': 'linear-gradient(135deg, #8B0000 0%, #D92323 50%, #FF7F3F 100%)', // Fiery gradient
'metal-sheen': 'linear-gradient(180deg, #FFFFFF 0%, #E2E2E2 40%, #9CA3AF 100%)', // Brushed silver text effect
'dark-concrete': 'radial-gradient(circle at center, #1F2124 0%, #0F1012 100%)',
},
boxShadow: {
'glow': '0 0 30px rgba(217, 35, 35, 0.3)',
'glow-orange': '0 0 20px rgba(255, 127, 63, 0.2)',
'metal': 'inset 0 1px 0 0 rgba(255,255,255,0.2)',
}
}
}
}



    (function () {
      const container = document.getElementById("phone-explode");
      if (!container) return;

      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // ---------- SCENE / CAMERA / RENDERER ----------
      const scene = new THREE.Scene();
      //scene.background = new THREE.Color('#252629'); // Optional debugging color
      
      const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
      camera.position.set(0, 0, 11);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      // Important: Allow the canvas to be sized by CSS
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      container.appendChild(renderer.domElement);

      function resize() {
        // Use clientWidth/Height directly from container
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h, false); // false prevents inline style overwrite
      }
      window.addEventListener("resize", resize);
      // Call resize immediately to set initial size
      resize();

      // ---------- LIGHTS (Increased intensity for dark theme) ----------
      const ambient = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambient);

      const key = new THREE.DirectionalLight(0xffffff, 2.0);
      key.position.set(5, 5, 10);
      key.castShadow = true;
      key.shadow.mapSize.set(1024, 1024);
      scene.add(key);

      const rim = new THREE.DirectionalLight(0xFF7F3F, 1.5); // Ember color
      rim.position.set(-5, 5, -5);
      scene.add(rim);

      const fill = new THREE.PointLight(0xD92323, 1.0, 20); // Red fill
      fill.position.set(0, -5, 5);
      scene.add(fill);

      // ---------- MATERIALS (Using palette colors) ----------
      const matFrame = new THREE.MeshStandardMaterial({
        color: 0x222222,
        metalness: 0.9,
        roughness: 0.2
      });

      const matGlass = new THREE.MeshPhysicalMaterial({
        color: 0x000000,
        metalness: 0.1,
        roughness: 0.1,
        transmission: 0.1,
        clearcoat: 1.0
      });

      const matBack = new THREE.MeshStandardMaterial({
        color: 0x111111,
        metalness: 0.5,
        roughness: 0.4
      });

      const matBattery = new THREE.MeshStandardMaterial({
        color: 0x111111,
        metalness: 0.3,
        roughness: 0.7
      });

      const matBoard = new THREE.MeshStandardMaterial({
        color: 0x1a332a,
        metalness: 0.6,
        roughness: 0.4
      });

      const matAccents = new THREE.MeshStandardMaterial({
        color: 0xD92323, // Red Logo Color
        metalness: 0.5,
        roughness: 0.4,
        emissive: 0x550000,
        emissiveIntensity: 0.2
      });

      // ---------- PHONE CONSTRUCTION ----------
      const phone = new THREE.Group();
      scene.add(phone);

      const W = 3.2, H = 6.4, D = 0.35;

      // 1. Frame
      const frameGeo = new THREE.BoxGeometry(W, H, D);
      const frame = new THREE.Mesh(frameGeo, matFrame);
      frame.castShadow = true;
      phone.add(frame);

      // 2. Screen
      const screenGeo = new THREE.PlaneGeometry(W * 0.92, H * 0.94);
      const screen = new THREE.Mesh(screenGeo, matGlass);
      screen.position.z = D / 2 + 0.01;
      phone.add(screen);

      // 3. Back
      const backGeo = new THREE.PlaneGeometry(W * 0.92, H * 0.94);
      const back = new THREE.Mesh(backGeo, matBack);
      back.rotation.y = Math.PI; // Face back
      back.position.z = -D / 2 - 0.01;
      phone.add(back);

      // 4. Internals Group
      const internals = new THREE.Group();
      phone.add(internals);

      // Battery
      const batGeo = new THREE.BoxGeometry(W*0.55, H*0.6, 0.05);
      const battery = new THREE.Mesh(batGeo, matBattery);
      battery.position.set(-0.5, 0, 0);
      internals.add(battery);

      // Board
      const boardGeo = new THREE.BoxGeometry(W*0.35, H*0.6, 0.05);
      const board = new THREE.Mesh(boardGeo, matBoard);
      board.position.set(0.6, 0.2, 0);
      internals.add(board);

      // Module (Camera/FaceID)
      const modGeo = new THREE.BoxGeometry(W*0.8, H*0.15, 0.05);
      const modulePart = new THREE.Mesh(modGeo, matAccents);
      modulePart.position.set(0, H*0.35, 0.05);
      internals.add(modulePart);

      // ---------- ANIMATION DEFINITIONS ----------
      // Store references to manipulate in GSAP
      const parts = [
        { mesh: screen,  exploded: { z: 1.5, y: 0.5, rotX: 0.1 }, delay: 0 },
        { mesh: back,    exploded: { z: -1.5, y: -0.5, rotX: -0.1 }, delay: 0.1 },
        { mesh: battery, exploded: { z: 0.4, x: -1.5, rotY: -0.2 }, delay: 0.2 },
        { mesh: board,   exploded: { z: 0.2, x: 1.5, rotY: 0.2 }, delay: 0.3 },
        { mesh: modulePart, exploded: { z: 0.8, y: 1.8, rotX: 0.2 }, delay: 0.15 },
      ];

      // Initial Rotation
      phone.rotation.y = -0.5;
      phone.rotation.x = 0.1;

      // GSAP Timeline
      const tl = gsap.timeline({ paused: true });
      
      // Step 1: Rotate to show depth
      tl.to(phone.rotation, { y: Math.PI * 0.8, x: -0.2, duration: 1.5, ease: "power3.inOut" });
      
      // Step 2: Explode parts
      parts.forEach(p => {
        // Move local positions
        tl.to(p.mesh.position, {
          x: p.mesh.position.x + (p.exploded.x || 0),
          y: p.mesh.position.y + (p.exploded.y || 0),
          z: p.mesh.position.z + (p.exploded.z || 0),
          duration: 1,
          ease: "back.out(1.7)"
        }, "-=1.0"); // Overlap slightly with rotation
        
        // Rotate local parts
        if(p.exploded.rotX) tl.to(p.mesh.rotation, { x: p.exploded.rotX, duration: 1 }, "<");
        if(p.exploded.rotY) tl.to(p.mesh.rotation, { y: p.exploded.rotY, duration: 1 }, "<");
      });

      // Continuous floating animation
      function animate() {
        requestAnimationFrame(animate);
        phone.position.y = Math.sin(Date.now() * 0.001) * 0.1;
        renderer.render(scene, camera);
      }
      animate();

      // Trigger Animation on Scroll
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            tl.play();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      
      observer.observe(container);

    })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/retrofuturisticcircuitloop-JngSBMetOQh9Jn4XS5OxTiIc/" width="100%"></iframe></div></div>

<div className="fixed inset-0 pointer-events-none z-[100] opacity-10 mix-blend-overlay w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')]" style={{}}></div>

<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-panel border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">

<div className="h-10 w-10 relative flex-shrink-0">

<img alt="Addict AI Logo" className="w-full h-full object-cover drop-shadow-[0_0_8px_rgba(217,35,35,0.5)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5dd3343b-5e48-4527-9c12-77bd2e2ef0f7_320w.jpg" style={{}}/>
</div>
<div className="flex flex-col justify-center">
<span className="font-display font-bold text-lg leading-none tracking-tight text-metal group-hover:text-white transition-colors uppercase">ADDICT</span>
<span className="font-display font-semibold text-[10px] leading-tight tracking-[0.2em] text-brand-accentLight uppercase">AI TECHNOLOGY</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium uppercase tracking-wide text-brand-muted hover:text-white transition-colors" href="#offres">Services</a>
<a className="text-xs font-medium uppercase tracking-wide text-brand-muted hover:text-white transition-colors" href="#realisations">Projets</a>
<a className="uppercase text-brand-muted hover:text-brand-accentLight transition-colors text-xs font-medium tracking-wide" href="#addict-ai-technology">Business Solution</a>
<a className="text-xs font-medium uppercase tracking-wide text-brand-muted hover:text-white transition-colors" href="#rdv">Rendez-vous</a>
</nav>

<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-brand-muted hover:text-brand-accent transition-colors flex items-center gap-2" href="tel:PHONE_TO_PROVIDE">
<iconify-icon className="" icon="lucide:phone"></iconify-icon>
<span className="hidden lg:inline">Contact</span>
</a>
<a className="px-6 py-2.5 rounded-sm bg-gradient-to-r from-brand-accentDark to-brand-accent text-white text-sm font-bold uppercase tracking-wide hover:shadow-glow hover:scale-105 transition-all duration-300 border border-white/10" href="CAL_COM_URL_TO_PROVIDE">
                    Prendre RDV
                </a>
</div>

<button className="md:hidden text-white p-2">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</header>
<main className="">

<section className="min-h-screen flex overflow-hidden pt-28 pb-12 relative items-center" id="hero">

<div className="ambient-glow top-[-20%] right-[-10%] opacity-30 mix-blend-screen"></div>
<div className="ambient-glow bottom-[-10%] left-[-10%] opacity-20 mix-blend-screen"></div>
<div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

<div className="space-y-8 order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 border-l-2 border-brand-accent bg-brand-surface/50 backdrop-blur-sm">
<span className="text-[10px] font-bold tracking-[0.2em] text-brand-accentLight uppercase">TECH • INNOVATION • CULTURE</span>
</div>
<h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
<span className="text-metal block mb-2">ADDICT AI</span>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-accentLight">TECHNOLOGY</span>
</h1>
<p className="text-lg text-brand-muted max-w-xl leading-relaxed font-light">
                        Expertise hardware avancée, réparation de précision et solutions digitales pour les pros. L'alliance de la maîtrise technique et de la passion.
                    </p>

<div className="flex flex-wrap gap-6 text-sm text-brand-text/80 font-mono">
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-accent" icon="lucide:zap"></iconify-icon>
                            INTERVENTION RAPIDE
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-accent" icon="lucide:shield-check"></iconify-icon>
                            GARANTIE INCLUSE
                        </div>
</div>
<div className="flex flex-col sm:flex-row gap-4 pt-6">
<a className="inline-flex justify-center items-center px-8 py-4 rounded-sm bg-fire-glow text-white font-bold text-sm uppercase tracking-wider hover:shadow-glow hover:-translate-y-1 transition-all duration-300" href="CAL_COM_URL_TO_PROVIDE">
                            Prendre rendez-vous
                        </a>
<a className="inline-flex justify-center items-center px-8 py-4 rounded-sm border border-brand-text/20 text-brand-text font-bold text-sm uppercase tracking-wider hover:bg-white/5 hover:border-brand-accent transition-all duration-300" href="#offres">
                            Nos Services
                        </a>
</div>
</div>

<div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">

<div className="aspect-square md:aspect-[4/3] lg:h-[600px] shadow-black/80 w-full border-white/10 rounded-sm border-t shadow-2xl" id="phone-explode">
<div id="hint">Interactive 3D View</div>

</div>
</div>
</div>
</section>

<section className="py-24 relative bg-[#131416] border-t border-white/5" id="offres">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="font-display text-4xl font-bold text-metal tracking-tight mb-2">NOS SERVICES</h2>
<p className="text-brand-muted">Solutions techniques pour particuliers et professionnels.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative p-1 rounded-sm bg-gradient-to-b from-white/10 to-transparent hover:from-brand-accent/50 transition-colors duration-500">
<div className="bg-brand-surface h-full p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-20 h-20 bg-brand-accent/10 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:bg-brand-accent/20"></div>
<iconify-icon className="text-4xl text-brand-text mb-6 group-hover:text-brand-accent transition-colors" icon="lucide:smartphone"></iconify-icon>
<h3 className="text-xl font-display font-bold text-white mb-2">RÉPARATION MOBILE</h3>
<p className="text-brand-muted text-sm leading-relaxed mb-6">
                                Diagnostic précis et réparation composants (écran, batterie, carte mère). Nous sauvons ce qui peut l'être.
                            </p>
<a className="text-xs font-bold text-brand-accentLight uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all" href="#">
                                En savoir plus <iconify-icon icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>

<div className="group relative p-1 rounded-sm bg-gradient-to-b from-white/10 to-transparent hover:from-brand-accent/50 transition-colors duration-500">
<div className="bg-brand-surface h-full p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-20 h-20 bg-brand-accent/10 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:bg-brand-accent/20"></div>
<iconify-icon className="text-4xl text-brand-text mb-6 group-hover:text-brand-accent transition-colors" icon="lucide:monitor"></iconify-icon>
<h3 className="text-xl font-display font-bold text-white mb-2">EXPERTISE PC &amp; MAC</h3>
<p className="text-brand-muted text-sm leading-relaxed mb-6">
                                Optimisation, nettoyage, upgrade hardware et dépannage logiciel. Redonnez de la puissance à votre station.
                            </p>
<a className="text-xs font-bold text-brand-accentLight uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all" href="#">
                                En savoir plus <iconify-icon icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>

<div className="group relative p-1 rounded-sm bg-gradient-to-b from-white/10 to-transparent hover:from-brand-accent/50 transition-colors duration-500">
<div className="bg-brand-surface h-full p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-20 h-20 bg-brand-accent/10 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:bg-brand-accent/20"></div>
<iconify-icon className="text-4xl text-brand-text mb-6 group-hover:text-brand-accent transition-colors" icon="lucide:cpu"></iconify-icon>
<h3 className="text-xl font-display font-bold text-white mb-2">CONFIG SUR-MESURE</h3>
<p className="text-brand-muted text-sm leading-relaxed mb-6">
                                Gaming, Workstation, Streaming. Nous assemblons la machine parfaite pour vos besoins et votre budget.
                            </p>
<a className="text-xs font-bold text-brand-accentLight uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all" href="#">
                                En savoir plus <iconify-icon icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-brand-bg" id="addict-ai-technology">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1b1e_1px,transparent_1px),linear-gradient(to_bottom,#1a1b1e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="flex-1 space-y-8">
<span className="text-brand-accent font-bold tracking-widest uppercase text-sm flex items-center gap-2">
<span className="w-8 h-[2px] bg-brand-accent"></span> Pôle Professionnel
                        </span>
<h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
                            ADDICT AI <br/>
<span className="text-metal">TECHNOLOGY</span>
</h2>
<p className="text-brand-text/80 text-lg leading-relaxed border-l-2 border-white/10 pl-6">
                            Accompagnement digital complet pour les entreprises. De la création de votre identité à l'automatisation de vos processus.
                        </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-4 bg-brand-surface border border-white/5 hover:border-brand-accent/50 transition-colors">
<iconify-icon className="text-brand-accent mb-2 text-xl" icon="lucide:globe"></iconify-icon>
<h4 className="font-bold text-white text-sm">Sites &amp; E-commerce</h4>
</div>
<div className="p-4 bg-brand-surface border border-white/5 hover:border-brand-accent/50 transition-colors">
<iconify-icon className="text-brand-accent mb-2 text-xl" icon="lucide:palette"></iconify-icon>
<h4 className="font-bold text-white text-sm">Branding &amp; Design</h4>
</div>
<div className="p-4 bg-brand-surface border border-white/5 hover:border-brand-accent/50 transition-colors">
<iconify-icon className="text-brand-accent mb-2 text-xl" icon="lucide:bot"></iconify-icon>
<h4 className="font-bold text-white text-sm">Automatisation IA</h4>
</div>
<div className="p-4 bg-brand-surface border border-white/5 hover:border-brand-accent/50 transition-colors">
<iconify-icon className="text-brand-accent mb-2 text-xl" icon="lucide:database"></iconify-icon>
<h4 className="font-bold text-white text-sm">Solutions SaaS</h4>
</div>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest hover:text-brand-accent transition-colors" href="CAL_COM_URL_TO_PROVIDE">
                                Discuter de votre projet <iconify-icon icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>
<div className="flex-1 w-full relative">

<div className="aspect-square md:aspect-video bg-gradient-to-br from-brand-surface2 to-brand-bg border border-white/10 relative overflow-hidden group">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 border border-brand-accent/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute w-48 h-48 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<iconify-icon className="text-6xl text-brand-text opacity-50" icon="lucide:cpu"></iconify-icon>
</div>

<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
<div className="font-mono text-xs text-brand-accentLight mb-1">SYSTEM STATUS: ONLINE</div>
<div className="h-0.5 w-full bg-brand-surface">
<div className="h-full w-2/3 bg-brand-accent animate-pulse"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0F1012]" id="realisations">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 border-b border-white/5 pb-8 flex justify-between items-end">
<h2 className="font-display text-3xl font-bold text-white tracking-tight">RÉALISATIONS</h2>
<a className="hidden md:block text-xs font-mono text-brand-muted hover:text-white" href="#">VIEW_ALL_PROJECTS -&gt;</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">

<div className="group aspect-[4/3] bg-brand-surface relative overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-brand-surface2 flex items-center justify-center">
<iconify-icon className="text-4xl text-white/10 group-hover:scale-110 transition-transform duration-500" icon="lucide:smartphone"></iconify-icon>
</div>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-brand-accent text-xs font-bold uppercase tracking-wider mb-2">Repair</span>
<h3 className="text-white font-display text-xl">iPhone 14 Pro Max</h3>
<p className="text-brand-muted text-xs mt-1">Remplacement écran OLED &amp; Châssis</p>
</div>
</div>

<div className="group aspect-[4/3] bg-brand-surface relative overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-brand-surface2 flex items-center justify-center">
<iconify-icon className="text-4xl text-white/10 group-hover:scale-110 transition-transform duration-500" icon="lucide:monitor-speaker"></iconify-icon>
</div>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-brand-accent text-xs font-bold uppercase tracking-wider mb-2">Build</span>
<h3 className="text-white font-display text-xl">Watercooled Beast</h3>
<p className="text-brand-muted text-xs mt-1">RTX 4090 - Ryzen 9 - Custom Loop</p>
</div>
</div>

<div className="group aspect-[4/3] bg-brand-surface relative overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-brand-surface2 flex items-center justify-center">
<iconify-icon className="text-4xl text-white/10 group-hover:scale-110 transition-transform duration-500" icon="lucide:gamepad-2"></iconify-icon>
</div>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-brand-accent text-xs font-bold uppercase tracking-wider mb-2">Console</span>
<h3 className="text-white font-display text-xl">PS5 HDMI Port</h3>
<p className="text-brand-muted text-xs mt-1">Micro-soudure de précision</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-brand-bg to-black relative" id="rdv">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-50"></div>
<div className="max-w-3xl mx-auto px-6 text-center">
<iconify-icon className="text-5xl text-brand-accent mb-6 animate-pulse" icon="lucide:calendar-clock"></iconify-icon>
<h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">PASSEZ NOUS VOIR</h2>
<p className="text-brand-muted text-lg mb-10">
                    Réserver un créneau, c'est l'assurance d'une prise en charge immédiate.
                </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="px-8 py-4 bg-fire-glow text-white font-bold uppercase tracking-wide hover:shadow-glow hover:scale-105 transition-all duration-300 rounded-sm" href="CAL_COM_URL_TO_PROVIDE">
                        Ouvrir le planning
                    </a>
<a className="px-8 py-4 border border-white/10 bg-white/5 text-white font-bold uppercase tracking-wide hover:bg-white/10 transition-all duration-300 rounded-sm" href="tel:PHONE_TO_PROVIDE">
                        Appeler le Shop
                    </a>
</div>
</div>
</section>
</main>

<footer className="bg-black pt-20 pb-12 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
<div className="space-y-4 max-w-xs">
<span className="font-display font-bold text-2xl text-white tracking-tight">ADDICT AI</span>
<p className="text-brand-muted text-sm">
                        L'expert tech local. Réparation, vente et services aux professionnels.
                    </p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16">
<div>
<h4 className="text-white font-bold text-sm uppercase mb-4 tracking-wider">Services</h4>
<ul className="space-y-2 text-sm text-brand-muted">
<li><a className="hover:text-brand-accent transition-colors" href="#">Réparation</a></li>
<li><a className="hover:text-brand-accent transition-colors" href="#">Montage PC</a></li>
<li><a className="hover:text-brand-accent transition-colors" href="#">B2B</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold text-sm uppercase mb-4 tracking-wider">Contact</h4>
<ul className="space-y-2 text-sm text-brand-muted">
<li>ADDRESS_TO_PROVIDE</li>
<li><a className="hover:text-brand-accent transition-colors" href="mailto:contact@addict2.0">contact@addict2.0</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold text-sm uppercase mb-4 tracking-wider">Social</h4>
<div className="flex gap-4">
<a className="text-brand-muted hover:text-brand-accent transition-colors" href="#"><iconify-icon icon="lucide:instagram"></iconify-icon></a>
<a className="text-brand-muted hover:text-brand-accent transition-colors" href="#"><iconify-icon icon="lucide:facebook"></iconify-icon></a>
<a className="text-brand-muted hover:text-brand-accent transition-colors" href="#"><iconify-icon icon="lucide:linkedin"></iconify-icon></a>
</div>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-brand-muted/40">© 2023 Addict AI Technology. Tous droits réservés.</p>
<div className="flex gap-6">
<a className="text-xs text-brand-muted/40 hover:text-brand-muted" href="#">Mentions légales</a>
<a className="text-xs text-brand-muted/40 hover:text-brand-muted" href="#">CGV</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
