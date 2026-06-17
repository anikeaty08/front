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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Newsreader', 'serif'],
},
colors: {
lime: {
350: '#d9f99d',
450: '#a3e635', // Matching the Core Glow
}
},
letterSpacing: {
'tighter-plus': '-0.05em',
}
}
}
}



      import * as THREE from 'three';
      import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
      import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
      import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

      // --- Configuration for ClawOS Theme ---
      const config = {
          colors: {
              bg: 0x000000,
              primary: 0xa3e635, // Tailwind Lime-400
              secondary: 0xd9f99d, // Tailwind Lime-350
              wireframe: 0x0f172a
          }
      };

      // --- Scene Setup ---
      const canvas = document.querySelector('#webgl-canvas');
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(config.colors.bg);
      scene.fog = new THREE.FogExp2(config.colors.bg, 0.035);

      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.z = 6;

      const renderer = new THREE.WebGLRenderer({
          canvas: canvas,
          antialias: false,
          powerPreference: "high-performance",
          alpha: false
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.0;

      // --- Objects Container ---
      const mainGroup = new THREE.Group();
      scene.add(mainGroup);

      // --- 1. The Core (Solid) ---
      const geometryCore = new THREE.IcosahedronGeometry(2, 10);
      const materialCore = new THREE.MeshPhysicalMaterial({
          color: 0x000000,
          metalness: 0.8,
          roughness: 0.2,
          transmission: 0,
          clearcoat: 1.0,
          clearcoatRoughness: 0.1,
          emissive: config.colors.primary,
          emissiveIntensity: 0.1
      });
      const sphereCore = new THREE.Mesh(geometryCore, materialCore);
      mainGroup.add(sphereCore);

      // --- 2. The Wireframe ---
      const geometryWire = new THREE.IcosahedronGeometry(2.2, 2);
      const materialWire = new THREE.MeshBasicMaterial({
          color: config.colors.primary,
          wireframe: true,
          transparent: true,
          opacity: 0.15,
          side: THREE.DoubleSide
      });
      const sphereWire = new THREE.Mesh(geometryWire, materialWire);
      mainGroup.add(sphereWire);

      // --- 3. Ambient Particles (Floating Data) ---
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 200;
      const posArray = new Float32Array(particlesCount * 3);
      for(let i = 0; i < particlesCount * 3; i++) {
          posArray[i] = (Math.random() - 0.5) * 12;
      }
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      const particlesMaterial = new THREE.PointsMaterial({
          size: 0.04,
          color: config.colors.primary,
          transparent: true,
          opacity: 0.6,
          blending: THREE.AdditiveBlending
      });
      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);

      // --- 4. The Explosion System (Hidden initially) ---
      const explosionCount = 5000;
      const explosionGeo = new THREE.BufferGeometry();

      // Buffers
      const initialPos = new Float32Array(explosionCount * 3); // Shape of sphere
      const targetPos = new Float32Array(explosionCount * 3);  // Exploded shape
      const currentPos = new Float32Array(explosionCount * 3); // Animation state

      for(let i = 0; i < explosionCount; i++) {
          // Generate point on sphere surface (radius 2)
          const phi = Math.acos(-1 + (2 * i) / explosionCount);
          const theta = Math.sqrt(explosionCount * Math.PI) * phi;
          const r = 2.0; 

          const x = r * Math.cos(theta) * Math.sin(phi);
          const y = r * Math.sin(theta) * Math.sin(phi);
          const z = r * Math.cos(phi);

          initialPos[i*3] = x;
          initialPos[i*3+1] = y;
          initialPos[i*3+2] = z;

          currentPos[i*3] = x;
          currentPos[i*3+1] = y;
          currentPos[i*3+2] = z;

          const dir = new THREE.Vector3(x, y, z).normalize();
          const dist = 2.0 + Math.random() * 6.0;

          targetPos[i*3] = dir.x * dist;
          targetPos[i*3+1] = dir.y * dist;
          targetPos[i*3+2] = dir.z * dist;
      }

      explosionGeo.setAttribute('position', new THREE.BufferAttribute(currentPos, 3));

      const explosionMaterial = new THREE.PointsMaterial({
          size: 0.04,
          color: config.colors.primary,
          transparent: true,
          opacity: 0,
          blending: THREE.AdditiveBlending,
          depthWrite: false
      });

      const explosionSystem = new THREE.Points(explosionGeo, explosionMaterial);
      explosionSystem.visible = false;
      mainGroup.add(explosionSystem);

      // --- Lighting ---
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
      scene.add(ambientLight);

      const light1 = new THREE.PointLight(config.colors.primary, 400);
      light1.position.set(4, 2, 4);
      scene.add(light1);

      const light2 = new THREE.PointLight(config.colors.secondary, 400);
      light2.position.set(-4, -2, 2);
      scene.add(light2);

      // --- Post Processing ---
      const renderScene = new RenderPass(scene, camera);
      const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
      bloomPass.strength = 1.0;
      bloomPass.radius = 0.5;
      bloomPass.threshold = 0.1;

      const composer = new EffectComposer(renderer);
      composer.addPass(renderScene);
      composer.addPass(bloomPass);

      // --- Interactions & Animation State ---
      let mouseX = 0, mouseY = 0;
      let targetX = 0, targetY = 0;
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;

      const raycaster = new THREE.Raycaster();
      const pointer = new THREE.Vector2();
      let isHovered = false;
      let isAnimating = false;
      const animState = { progress: 0 };

      function updateExplosion() {
          const positions = explosionGeo.attributes.position.array;
          for(let i = 0; i < explosionCount; i++) {
              const ix = i * 3;
              const iy = i * 3 + 1;
              const iz = i * 3 + 2;

              positions[ix] = initialPos[ix] + (targetPos[ix] - initialPos[ix]) * animState.progress;
              positions[iy] = initialPos[iy] + (targetPos[iy] - initialPos[iy]) * animState.progress;
              positions[iz] = initialPos[iz] + (targetPos[iz] - initialPos[iz]) * animState.progress;

              if (animState.progress > 0.01) {
                  const angle = animState.progress * 0.5;
                  const x = positions[ix];
                  const z = positions[iz];
                  positions[ix] = x * Math.cos(angle) - z * Math.sin(angle);
                  positions[iz] = x * Math.sin(angle) + z * Math.cos(angle);
              }
          }
          explosionGeo.attributes.position.needsUpdate = true;
      }

      // --- Events ---
      document.addEventListener('mousemove', (event) => {
          mouseX = (event.clientX - windowHalfX);
          mouseY = (event.clientY - windowHalfY);

          // HUD Update
          const xVal = (event.clientX / window.innerWidth).toFixed(2);
          const yVal = (event.clientY / window.innerHeight).toFixed(2);
          const coords = document.getElementById('coords');
          if(coords) coords.innerText = `${xVal}.${yVal}.00`;

          // Raycaster
          pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
          pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;

          raycaster.setFromCamera(pointer, camera);
          const intersects = raycaster.intersectObject(sphereCore);

          if (intersects.length > 0) {
              if (!isHovered) {
                  document.body.style.cursor = 'pointer';
                  gsap.to(sphereWire.scale, { x: 1.1, y: 1.1, z: 1.1, duration: 0.5 });
                  gsap.to(sphereCore.material, { emissiveIntensity: 0.2, duration: 0.3 });
                  isHovered = true;
              }
          } else {
              if (isHovered) {
                  document.body.style.cursor = 'default';
                  gsap.to(sphereWire.scale, { x: 1, y: 1, z: 1, duration: 0.5 });
                  gsap.to(sphereCore.material, { emissiveIntensity: 0.1, duration: 0.3 });
                  isHovered = false;
              }
          }
      });

      window.addEventListener('click', () => {
          if (isHovered && !isAnimating) {
              isAnimating = true;
              const statusLight = document.getElementById('status-light');
              const statusText = document.getElementById('status-text');

              statusLight.classList.remove('bg-lime-400');
              statusLight.classList.add('bg-white');
              statusText.innerText = "Status: Re-Indexing";
              statusText.classList.remove('text-lime-400/80');
              statusText.classList.add('text-white');

              gsap.to([sphereCore.material, sphereWire.material], {
                  opacity: 0,
                  duration: 0.2,
                  onComplete: () => {
                      sphereCore.visible = false;
                      sphereWire.visible = false;
                  }
              });

              explosionSystem.visible = true;
              gsap.to(explosionMaterial, { opacity: 1, duration: 0.1 });

              gsap.to(animState, {
                  progress: 1,
                  duration: 1.5,
                  ease: "power4.out",
                  onUpdate: updateExplosion,
                  onComplete: () => {
                      gsap.to(animState, {
                          progress: 0,
                          duration: 2,
                          delay: 0.2,
                          ease: "elastic.out(1, 0.5)",
                          onUpdate: updateExplosion,
                          onComplete: () => {
                              sphereCore.visible = true;
                              sphereWire.visible = true;

                              gsap.to(explosionMaterial, { opacity: 0, duration: 0.3 });
                              gsap.to([sphereCore.material, sphereWire.material], {
                                  opacity: 1,
                                  duration: 0.5
                              });
                              sphereWire.material.opacity = 0.15;

                              explosionSystem.visible = false;
                              isAnimating = false;

                              statusLight.classList.add('bg-lime-400');
                              statusLight.classList.remove('bg-white');
                              statusText.innerText = "Status: Operational";
                              statusText.classList.add('text-lime-400/80');
                              statusText.classList.remove('text-white');
                          }
                      });
                  }
              });
          }
      });

      // --- Animation Loop ---
      const clock = new THREE.Clock();

      function animate() {
          const elapsedTime = clock.getElapsedTime();

          targetX = mouseX * 0.001;
          targetY = mouseY * 0.001;

          if (!isAnimating || animState.progress < 0.5) {
              mainGroup.rotation.y += 0.002;
              mainGroup.rotation.x += 0.001;
          }

          mainGroup.rotation.y += 0.05 * (targetX - mainGroup.rotation.y);
          mainGroup.rotation.x += 0.05 * (targetY - mainGroup.rotation.x);

          if (!isAnimating) {
              const scale = 1 + Math.sin(elapsedTime * 2) * 0.02;
              sphereWire.scale.set(scale, scale, scale);
          }

          light1.position.x = Math.sin(elapsedTime * 0.7) * 4;
          light1.position.y = Math.cos(elapsedTime * 0.5) * 4;
          light2.position.x = Math.cos(elapsedTime * 0.3) * 5;
          light2.position.z = Math.sin(elapsedTime * 0.5) * 5;

          particlesMesh.rotation.y = elapsedTime * 0.05;
          particlesMesh.rotation.x = -mouseY * 0.0002;

          composer.render();
          requestAnimationFrame(animate);
      }

      window.addEventListener('resize', () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
          composer.setSize(window.innerWidth, window.innerHeight);
      });

      window.onload = () => {
          animate();

          const tl = gsap.timeline();

          tl.to("#loader", {
              opacity: 0,
              duration: 0.8,
              onComplete: () => { document.getElementById("loader").style.display = "none"; }
          })
          .from(sphereCore.scale, { x: 0, y: 0, z: 0, duration: 1.5, ease: "elastic.out(1, 0.7)" }, "-=0.5")
          .from(sphereWire.scale, { x: 0, y: 0, z: 0, duration: 1.5, ease: "elastic.out(1, 0.7)" }, "<")
          .to(".nav-item", { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }, "-=1")
          .from(".hero-reveal", { y: 100, opacity: 0, duration: 1.2, stagger: 0.1, ease: "power4.out" }, "-=0.8");
      };
    


      (function(){const t=document.querySelectorAll('.glitch-target');let lX=0,lY=0,lT=0;document.addEventListener('mousemove',e=>{const now=Date.now(),dt=now-lT;if(dt>30){const dx=e.clientX-lX,dy=e.clientY-lY,s=Math.sqrt(dx*dx+dy*dy)/dt;if(s>2.5){t.forEach(el=>{if(!el.classList.contains('glitch-active')){el.classList.add('glitch-active');setTimeout(()=>el.classList.remove('glitch-active'),250)}})}lX=e.clientX;lY=e.clientY;lT=now}})})()
    
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
      

<div className="fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-1000" id="loader" style={{display: 'none'}}>
<div className="flex flex-col items-center gap-4">
<div className="h-px w-24 bg-neutral-800 overflow-hidden relative">
<div className="absolute inset-0 bg-lime-400 w-full -translate-x-full animate-[shimmer_1.5s_infinite]"></div>
</div>
<p className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-mono">
                Loading Core
            </p>
</div>
<style>
            @keyframes shimmer { 100% { transform: translateX(100%); } }
        </style>
</div>

<div className="relative h-screen w-full overflow-hidden">

<div className="absolute inset-0 z-0">
<canvas className="w-full h-full outline-none cursor-grab active:cursor-grabbing" data-engine="three.js r160" height="2414" id="webgl-canvas" style={{width: '1664px', height: '1207px'}} width="3328"></canvas>
</div>

<div className="relative z-10 flex flex-col h-full pointer-events-none">

<header className="w-full px-6 py-6 flex justify-between items-center pointer-events-auto opacity-0 nav-item">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-black/50 backdrop-blur-md group-hover:border-lime-400/50 transition-colors duration-300">
<iconify-icon className="text-lime-400 text-xl transition-transform group-hover:rotate-90" icon="solar:widget-5-linear"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-white group-hover:text-lime-400 transition-colors glitch-target">
                        ClawOS
                    </span>
</div>
<nav className="hidden md:flex items-center gap-1 glass-panel p-1 rounded-full">
<a className="px-5 py-2 rounded-full hover:bg-white/5 text-zinc-400 hover:text-white transition-colors text-xs font-medium uppercase tracking-wider" href="#">Store</a>
<a className="px-5 py-2 rounded-full hover:bg-white/5 text-zinc-400 hover:text-white transition-colors text-xs font-medium uppercase tracking-wider" href="#">Integrations</a>
<a className="px-5 py-2 rounded-full hover:bg-white/5 text-zinc-400 hover:text-white transition-colors text-xs font-medium uppercase tracking-wider" href="#">Memory</a>
</nav>
<button className="group flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full bg-black/20 backdrop-blur-sm hover:border-lime-400/30 hover:bg-lime-400/10 transition-all duration-300">
<span className="text-xs font-medium text-white group-hover:text-lime-300">Launch Dashboard</span>
<iconify-icon className="text-lime-400 group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</header>

<main className="flex-grow flex flex-col justify-center px-6 md:px-12 lg:px-24 pointer-events-none">
<div className="max-w-5xl space-y-8">

<div className="overflow-hidden">
<div className="hero-reveal flex items-center gap-3">
<span className="flex h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_15px_rgba(163,230,53,0.6)] transition-colors duration-300" id="status-light"></span>
<p className="text-xs md:text-sm uppercase tracking-[0.2em] text-lime-400/80 font-medium font-mono transition-colors duration-300" id="status-text">
                                System Status: Operational
                            </p>
</div>
</div>

<div className="space-y-0">
<div className="overflow-hidden">
<h1 className="hero-reveal text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.95] text-white glitch-target mix-blend-difference">
                                OpenClaw,
                            </h1>
</div>
<div className="overflow-hidden">
<h1 className="hero-reveal text-5xl md:text-7xl lg:text-8xl font-serif italic font-light tracking-tight leading-[0.95] text-lime-300/90 glitch-target">
                                Simplified.
                            </h1>
</div>
</div>

<div className="overflow-hidden max-w-xl">
<p className="hero-reveal text-sm md:text-lg text-zinc-400 leading-relaxed font-light">
                            Stop struggling with raw configurations. ClawOS is the visual interface that gives OpenClaw super memory, plug-and-play skills, and a unified GUI.
                            <span className="text-lime-400/70 text-xs block mt-2 font-mono uppercase tracking-widest opacity-80">&gt; Click the core to initialize sequence</span>
</p>
</div>

<div className="overflow-hidden pt-6">
<div className="hero-reveal flex flex-wrap pointer-events-auto pt-4 pr-1 pb-4 pl-1 gap-x-4 gap-y-4">
<style>
        .btn-wrapper{position:relative;display:inline-block}.btn{--border-radius:9999px;--padding:4px;--transition:0.4s;--button-color:#000;--highlight-color-hue:84deg;user-select:none;display:flex;align-items:center;justify-content:center;background-color:var(--button-color);box-shadow:inset 0px 1px 1px rgba(255,255,255,0.2),inset 0px 2px 2px rgba(255,255,255,0.15),inset 0px 4px 4px rgba(255,255,255,0.1),inset 0px 8px 8px rgba(255,255,255,0.05),0px -1px 1px rgba(0,0,0,0.02),0px -2px 2px rgba(0,0,0,0.03);border:solid 1px rgba(255,255,255,0.2);border-radius:var(--border-radius);cursor:pointer;transition:box-shadow var(--transition),border var(--transition),background-color var(--transition);padding:1rem 2rem}.btn::before{content:"";position:absolute;top:calc(0px - var(--padding));left:calc(0px - var(--padding));width:calc(100% + var(--padding)*2);height:calc(100% + var(--padding)*2);border-radius:calc(var(--border-radius) + var(--padding));pointer-events:none;background-image:linear-gradient(0deg,#0004,#000a);z-index:-1;transition:box-shadow var(--transition),filter var(--transition);box-shadow:0 -8px 8px -6px #0000 inset,0 -16px 16px -8px #00000000 inset,1px 1px 1px #fff2,2px 2px 2px #fff1,-1px -1px 1px #0002,-2px -2px 2px #0001}.btn::after{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;background-image:linear-gradient(0deg,#fff,hsl(var(--highlight-color-hue),100%,70%),hsla(var(--highlight-color-hue),100%,70%,50%),8%,transparent);background-position:0 0;opacity:0;transition:opacity var(--transition),filter var(--transition)}.btn-letter{position:relative;display:inline-block;color:#ffffff90;font-family:'Inter',sans-serif;font-weight:600;font-size:0.875rem;letter-spacing:-0.025em;animation:letter-anim 2s ease-in-out infinite;transition:color var(--transition),text-shadow var(--transition),opacity var(--transition)}@keyframes letter-anim{50%{text-shadow:0 0 3px #ffffff88;color:#fff}}.btn-svg{flex-grow:0;width:18px;height:18px;margin-left:0.5rem;fill:none;stroke:#e8e8e8;stroke-width:2;animation:flicker 2s linear infinite;animation-delay:0.5s;filter:drop-shadow(0 0 2px #ffffff99);transition:stroke var(--transition),filter var(--transition),opacity var(--transition)}@keyframes flicker{50%{opacity:0.3}}.txt-wrapper{position:relative;display:flex;align-items:center;height:20px}.txt-1{display:flex;align-items:center;gap:1px}.btn:hover{border:solid 1px hsla(var(--highlight-color-hue),100%,80%,0.4)}.btn:hover::before{box-shadow:0 -8px 8px -6px #fffa inset,0 -16px 16px -8px hsla(var(--highlight-color-hue),100%,70%,0.3) inset,1px 1px 1px #fff2,2px 2px 2px #fff1,-1px -1px 1px #0002,-2px -2px 2px #0001}.btn:hover::after{opacity:1}.btn:hover .btn-svg{stroke:#fff;filter:drop-shadow(0 0 3px hsl(var(--highlight-color-hue),100%,70%)) drop-shadow(0 -4px 6px #0009);animation:none}.btn-letter:nth-child(1){animation-delay:0s}.btn-letter:nth-child(2){animation-delay:0.05s}.btn-letter:nth-child(3){animation-delay:0.1s}.btn-letter:nth-child(4){animation-delay:0.15s}.btn-letter:nth-child(5){animation-delay:0.2s}.btn-letter:nth-child(6){animation-delay:0.25s}.btn-letter:nth-child(7){animation-delay:0.3s}.btn-letter:nth-child(8){animation-delay:0.35s}.btn-letter:nth-child(9){animation-delay:0.4s}.btn-letter:nth-child(10){animation-delay:0.45s}.btn-letter:nth-child(11){animation-delay:0.5s}.btn-letter:nth-child(12){animation-delay:0.55s}.btn-letter:nth-child(13){animation-delay:0.6s}.btn-letter:nth-child(14){animation-delay:0.65s}
    </style>

<div className="btn-wrapper">
<button aria-label="Install ClawOS" className="btn" type="button">
<div className="txt-wrapper">
<div className="txt-1">
<span className="btn-letter">I</span><span className="btn-letter">n</span><span className="btn-letter">s</span><span className="btn-letter">t</span><span className="btn-letter">a</span><span className="btn-letter">l</span><span className="btn-letter">l</span>
<span className="btn-letter" style={{width: '4px'}}></span>
<span className="btn-letter">C</span><span className="btn-letter">l</span><span className="btn-letter">a</span><span className="btn-letter">w</span><span className="btn-letter">O</span><span className="btn-letter">S</span>
</div>
</div>
<svg className="btn-svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</button>
</div>

<button className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(163,230,53,0.2)] h-[54px] rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center">

<span className="animate-[spin_4s_linear_infinite] transition-opacity duration-300 group-hover:opacity-100 opacity-0 absolute top-[-150%] left-[-150%] w-[400%] h-[400%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#a3e635_100%)]"></span>

<span className="absolute inset-0 rounded-full bg-white/10 transition-opacity duration-300 group-hover:opacity-0"></span>

<span className="flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-lime-300 text-sm font-medium text-white tracking-tight bg-zinc-950 w-full h-full rounded-full pr-8 pl-8 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
<span className="relative z-10">View Documentation</span>
<svg className="relative z-10 text-zinc-400 group-hover:text-lime-300 transition-colors" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
<line x1="16" x2="8" y1="13" y2="13"></line>
<line x1="16" x2="8" y1="17" y2="17"></line>
<line x1="10" x2="8" y1="9" y2="9"></line>
</svg>
</span>
</button>
</div>
</div>
</div>
</main>

<footer className="pointer-events-auto nav-item flex justify-between items-end w-full px-6 pb-8 opacity-0">
<div className="flex flex-col gap-1">
<span className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">Vector Coords</span>
<span className="text-xs font-mono text-lime-400" id="coords">0.52.0.24.00</span>
</div>
<div className="hidden md:flex gap-4">

<iconify-icon className="text-zinc-600 hover:text-[#26A5E4] transition-colors text-xl" icon="simple-icons:telegram"></iconify-icon>
<iconify-icon className="text-zinc-600 hover:text-[#5865F2] transition-colors text-xl" icon="simple-icons:discord"></iconify-icon>
<iconify-icon className="text-zinc-600 hover:text-[#3776AB] transition-colors text-xl" icon="simple-icons:python"></iconify-icon>
</div>
</footer>
</div>

<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-[5] pointer-events-none"></div>
</div>

<section className="py-32 relative overflow-hidden bg-black">
<div className="max-w-7xl mx-auto px-6 text-center mb-16 relative z-10">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">
                The Brain <span className="font-serif italic text-lime-300">Upgrade</span>
</h2>
<p className="text-lg text-zinc-400 max-w-xl mx-auto">
                We wrapped the complexity of OpenClaw into a sleek OS. Manage agents, retain context, and expand capabilities without writing code.
            </p>
</div>

<div className="aspect-square md:aspect-[1.5/1] flex w-full max-w-2xl mr-auto ml-auto relative items-center justify-center">

<div className="absolute w-[80%] h-[80%] rounded-full border border-white/5 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-30"></div>
<div className="absolute w-[60%] h-[60%] rounded-full border border-white/10 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-20" style={{animationDelay: '1s'}}></div>

<div className="absolute w-[80%] h-[80%] rounded-full border border-white/5 animate-pulse"></div>
<div className="absolute w-[60%] h-[60%] rounded-full border border-white/10 animate-pulse" style={{animationDelay: '500ms'}}></div>
<div className="absolute w-[40%] h-[40%] rounded-full border border-white/20 animate-pulse" style={{animationDelay: '1000ms'}}></div>

<div className="relative z-10 flex flex-col items-center justify-center w-32 h-32 rounded-full bg-zinc-900 border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)]">

<svg className="text-lime-400 mb-1" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg>
<span className="text-xs font-medium text-white tracking-tight">ClawOS Core</span>
</div>


<div className="absolute top-[15%] left-[20%] flex flex-col items-center gap-2 group cursor-pointer hover:scale-105 transition-transform duration-300">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-lime-400/50 transition-colors">

<svg className="text-zinc-400 group-hover:text-lime-400 transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
</div>
<span className="text-xs text-zinc-500 group-hover:text-white transition-colors">Unified Messaging</span>
</div>

<div className="absolute bottom-[20%] right-[20%] flex flex-col items-center gap-2 group cursor-pointer hover:scale-105 transition-transform duration-300">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-lime-400/50 transition-colors">

<svg className="text-zinc-400 group-hover:text-lime-400 transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<span className="text-xs text-zinc-500 group-hover:text-white transition-colors">Super Memory</span>
</div>

<div className="absolute top-[20%] right-[25%] flex flex-col items-center gap-2 group cursor-pointer hover:scale-105 transition-transform duration-300">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-lime-400/50 transition-colors">

<svg className="text-zinc-400 group-hover:text-lime-400 transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg>
</div>
<span className="text-xs text-zinc-500 group-hover:text-white transition-colors">Skill Injection</span>
</div>

<div className="absolute bottom-[15%] left-[25%] flex flex-col items-center gap-2 group cursor-pointer hover:scale-105 transition-transform duration-300">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-lime-400/50 transition-colors">

<svg className="text-zinc-400 group-hover:text-lime-400 transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 4h-2"></path><path d="M15 4H3"></path><path d="M18 12H3"></path><path d="M8 20H3"></path><path d="M21 12h-1"></path><path d="M21 20h-9"></path><circle cx="17" cy="4" r="2"></circle><circle cx="19" cy="12" r="2"></circle><circle cx="10" cy="20" r="2"></circle></svg>
</div>
<span className="text-xs text-zinc-500 group-hover:text-white transition-colors">Easy Config</span>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-16">
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight">
                    Beyond Basic <br/> <span className="font-serif italic font-light text-zinc-500">Automation</span>
</h2>
<button className="hidden md:block border border-white/20 text-white px-6 py-2 rounded-full text-sm hover:bg-white/10 transition-colors">
                    Explore Skills Library
                </button>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer bg-zinc-900 border border-white/5 hover:border-lime-400/30 transition-colors duration-500">
<div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-lime-900/20 via-transparent to-transparent opacity-50 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b01267d3-c696-41dd-9a95-17c8c4481d9a_1600w.webp)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 w-full z-10">
<div className="flex items-center gap-2 mb-2 text-lime-400">
<iconify-icon icon="solar:brain-bold-duotone"></iconify-icon>
<span className="text-xs uppercase tracking-wider font-bold">Vector Database</span>
</div>
<h3 className="text-3xl text-white font-medium mb-1">Super Memory</h3>
<p className="text-zinc-400 text-sm">ClawOS automatically indexes every conversation. Your agents never forget a context, user, or preference.</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer bg-zinc-900 border border-white/5 hover:border-lime-400/30 transition-colors duration-500">
<div className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a1c0957e-20e3-4106-b8ed-cd23c34ed15e_1600w.webp)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 w-full z-10">
<div className="flex items-center gap-2 mb-2 text-lime-400">
<iconify-icon icon="solar:chat-round-bold-duotone"></iconify-icon>
<span className="text-xs uppercase tracking-wider font-bold">Unified Inbox</span>
</div>
<h3 className="text-3xl text-white font-medium mb-1">Messaging GUI</h3>
<p className="text-zinc-400 text-sm">Control Telegram, Discord, and Slack bots from a single, beautiful dashboard. No more JSON editing.</p>
</div>
</div>
</div>
</div>
</section>

<section className="text-center bg-black pt-32 pr-6 pb-32 pl-6">
<p className="text-3xl md:text-5xl font-medium text-white max-w-4xl mx-auto leading-tight tracking-tight">
        "OpenClaw is the engine.<br/>
<span className="font-serif italic text-zinc-500">ClawOS is the steering wheel.</span>"
    </p>
<p className="mt-4 text-lg text-zinc-500">Give your agents tools, memory, and a user interface.</p>
<div className="mt-12 flex justify-center">
<button className="border border-white/20 text-white px-6 py-2 rounded-full text-sm hover:bg-white/10 transition-colors">
                View Architecture
            </button>
</div>
</section>
<section className="border-y border-white/5 pt-20 pb-20">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-zinc-600 text-sm font-medium mb-12 uppercase tracking-widest">Seamlessly manages bots on
    </p>
<div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="text-white hover:text-[#26A5E4]" icon="simple-icons:telegram" width="40"></iconify-icon>
<iconify-icon className="text-white hover:text-[#5865F2]" icon="simple-icons:discord" width="40"></iconify-icon>
<iconify-icon className="text-white hover:text-[#4A154B]" icon="simple-icons:slack" width="40"></iconify-icon>
<iconify-icon className="text-white hover:text-[#25D366]" icon="simple-icons:whatsapp" width="40"></iconify-icon>
<iconify-icon className="text-white hover:text-[#3A76F0]" icon="simple-icons:signal" width="40"></iconify-icon>
</div>
</div>
</section>

<section className="py-32 bg-black">
<div className="max-w-5xl mx-auto px-6 bg-zinc-900/50 rounded-3xl p-10 md:p-20 border border-white/10">
<h3 className="text-center text-3xl font-medium text-white mb-16">How we <span className="font-serif italic text-zinc-400">simplify</span> everything.</h3>
<div className="space-y-0 divide-y divide-white/10">

<div className="group py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer">
<div className="flex items-start gap-4">
<span className="text-xs font-mono text-zinc-600 mt-1">01</span>
<h4 className="text-xl text-white font-medium group-hover:text-lime-400 transition-colors">Add Skills Instantly</h4>
</div>
<p className="text-sm text-zinc-500 max-w-sm">Browse our marketplace and add capabilities like "Google Search" or "PDF Analysis" to OpenClaw with one click.</p>
</div>

<div className="group py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer">
<div className="flex items-start gap-4">
<span className="text-xs font-mono text-zinc-600 mt-1">02</span>
<h4 className="text-xl text-white font-medium group-hover:text-lime-400 transition-colors">Infinite Context Window</h4>
</div>
<p className="text-sm text-zinc-500 max-w-sm">We handle the vector embeddings. Your OpenClaw instance gets long-term memory out of the box.</p>
</div>

<div className="group py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer">
<div className="flex items-start gap-4">
<span className="text-xs font-mono text-zinc-600 mt-1">03</span>
<h4 className="text-xl text-white font-medium group-hover:text-lime-400 transition-colors">Visual Configuration</h4>
</div>
<p className="text-sm text-zinc-500 max-w-sm">No more CLI. Manage API keys, rate limits, and prompts through our intuitive dashboard.</p>
</div>

<div className="group py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer">
<div className="flex items-start gap-4">
<span className="text-xs font-mono text-zinc-600 mt-1">04</span>
<h4 className="text-xl text-white font-medium group-hover:text-lime-400 transition-colors">Multi-App Routing</h4>
</div>
<p className="text-sm text-zinc-500 max-w-sm">Connect one OpenClaw brain to multiple messaging platforms simultaneously via ClawOS.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black relative overflow-hidden">
<div className="absolute inset-0 bg-noise opacity-30"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h4 className="text-sm font-medium text-zinc-500 mb-8 uppercase tracking-widest">Community <span className="font-serif italic text-white lowercase">feedback</span>.</h4>
<div className="mb-10">
<p className="text-xs font-bold text-white tracking-wider">DEV SQUAD</p>
</div>
<blockquote className="text-2xl md:text-3xl text-zinc-300 font-serif italic leading-relaxed mb-12">
                "OpenClaw is powerful, but hard to manage at scale. ClawOS changed that. The memory feature alone saved us weeks of engineering time, and the GUI makes debugging bots actually fun."
            </blockquote>
<div className="flex flex-col items-center gap-3">
<div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/20 flex items-center justify-center">
<span className="text-white text-xs font-medium">EK</span>
</div>
<div className="text-center">
<div className="text-white text-sm font-medium">Elena K.</div>
<div className="text-zinc-600 text-xs">AI Engineer</div>
</div>
</div>
</div>
</section>

<section className="pb-20 px-4 md:px-6 bg-black">
<div className="max-w-7xl mx-auto bg-lime-350 rounded-3xl p-16 md:p-24 text-center relative overflow-hidden group">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/20 blur-[100px] rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-1000"></div>
<div className="relative z-10">
<iconify-icon className="text-black text-5xl mb-6 animate-pulse" icon="solar:programming-linear"></iconify-icon>
<h2 className="text-4xl md:text-6xl font-medium text-black mb-6 tracking-tight">
                    Upgrade your OpenClaw <br/>
                    experience <span className="font-serif italic">today.</span>
</h2>
<button className="bg-transparent border border-black text-black px-8 py-3 rounded-full text-sm font-medium hover:bg-black hover:text-lime-300 transition-all">
                    Get ClawOS Free
                </button>
</div>
</div>
</section>

<footer className="bg-black pt-20 pb-10 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-center mb-16">
<iconify-icon className="text-lime-400 text-3xl" icon="solar:widget-5-bold-duotone"></iconify-icon>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<span className="text-white font-medium tracking-tighter">ClawOS</span>
</div>
<h3 className="text-2xl text-white font-medium mb-4">The missing layer for <br/> autonomous agents.</h3>
<div className="flex gap-2">
<input className="bg-white/5 border border-white/10 rounded-md px-4 py-2 text-sm text-white w-full focus:outline-none focus:border-lime-400" placeholder="Email" type="email"/>
<button className="bg-white/10 border border-white/10 rounded-md px-3 text-white hover:bg-white/20">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="md:col-start-3">
<h4 className="text-white font-medium mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-lime-400 transition-colors" href="#">Skills Store</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Memory DB</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Messaging GUI</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Resources</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-lime-400 transition-colors" href="#">OpenClaw Docs</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Integration Guide</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">GitHub</a></li>
</ul>
</div>
</div>
<div className="flex justify-between items-center pt-8 text-xs text-zinc-600">
<p>© 2024 ClawOS. Not affiliated with OpenClaw Core.</p>
<div className="flex gap-4">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
