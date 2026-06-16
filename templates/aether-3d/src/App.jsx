import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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

        const config = {
          colors: {
            bg: 0x000000,
            primary: 0x6366f1, // Indigo 500
            secondary: 0xc7d2fe, // Indigo 200
            wireframe: 0x0f172a
          }
        };

        const canvas = document.querySelector('#webgl-canvas');
        if(canvas) {
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

          const mainGroup = new THREE.Group();
          scene.add(mainGroup);

          const geometryCore = new THREE.IcosahedronGeometry(2, 10);
          const materialCore = new THREE.MeshPhysicalMaterial({
            color: 0x000000, metalness: 0.8, roughness: 0.2, transmission: 0, clearcoat: 1.0, clearcoatRoughness: 0.1, emissive: config.colors.primary, emissiveIntensity: 0.1
          });
          const sphereCore = new THREE.Mesh(geometryCore, materialCore);
          mainGroup.add(sphereCore);

          const geometryWire = new THREE.IcosahedronGeometry(2.2, 2);
          const materialWire = new THREE.MeshBasicMaterial({
            color: config.colors.primary, wireframe: true, transparent: true, opacity: 0.15, side: THREE.DoubleSide
          });
          const sphereWire = new THREE.Mesh(geometryWire, materialWire);
          mainGroup.add(sphereWire);

          const particlesGeometry = new THREE.BufferGeometry();
          const particlesCount = 200;
          const posArray = new Float32Array(particlesCount * 3);
          for(let i = 0; i < particlesCount * 3; i++) posArray[i] = (Math.random() - 0.5) * 12;
          particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
          const particlesMaterial = new THREE.PointsMaterial({ size: 0.04, color: config.colors.primary, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending });
          const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
          scene.add(particlesMesh);

          const explosionCount = 5000;
          const explosionGeo = new THREE.BufferGeometry();
          const initialPos = new Float32Array(explosionCount * 3);
          const targetPos = new Float32Array(explosionCount * 3);
          const currentPos = new Float32Array(explosionCount * 3);

          for(let i = 0; i < explosionCount; i++) {
            const phi = Math.acos(-1 + (2 * i) / explosionCount);
            const theta = Math.sqrt(explosionCount * Math.PI) * phi;
            const r = 2.0;
            const x = r * Math.cos(theta) * Math.sin(phi);
            const y = r * Math.sin(theta) * Math.sin(phi);
            const z = r * Math.cos(phi);
            initialPos[i*3] = x; initialPos[i*3+1] = y; initialPos[i*3+2] = z;
            currentPos[i*3] = x; currentPos[i*3+1] = y; currentPos[i*3+2] = z;
            const dir = new THREE.Vector3(x, y, z).normalize();
            const dist = 2.0 + Math.random() * 6.0;
            targetPos[i*3] = dir.x * dist; targetPos[i*3+1] = dir.y * dist; targetPos[i*3+2] = dir.z * dist;
          }
          explosionGeo.setAttribute('position', new THREE.BufferAttribute(currentPos, 3));
          const explosionMaterial = new THREE.PointsMaterial({ size: 0.04, color: config.colors.primary, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
          const explosionSystem = new THREE.Points(explosionGeo, explosionMaterial);
          explosionSystem.visible = false;
          mainGroup.add(explosionSystem);

          const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
          scene.add(ambientLight);
          const light1 = new THREE.PointLight(config.colors.primary, 400);
          light1.position.set(4, 2, 4);
          scene.add(light1);
          const light2 = new THREE.PointLight(config.colors.secondary, 400);
          light2.position.set(-4, -2, 2);
          scene.add(light2);

          const renderScene = new RenderPass(scene, camera);
          const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
          bloomPass.strength = 1.0; bloomPass.radius = 0.5; bloomPass.threshold = 0.1;
          const composer = new EffectComposer(renderer);
          composer.addPass(renderScene);
          composer.addPass(bloomPass);

          let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
          const raycaster = new THREE.Raycaster();
          const pointer = new THREE.Vector2();
          let isHovered = false, isAnimating = false;
          const animState = { progress: 0 };

          function updateExplosion() {
            const positions = explosionGeo.attributes.position.array;
            for(let i = 0; i < explosionCount; i++) {
              const ix = i * 3, iy = i * 3 + 1, iz = i * 3 + 2;
              positions[ix] = initialPos[ix] + (targetPos[ix] - initialPos[ix]) * animState.progress;
              positions[iy] = initialPos[iy] + (targetPos[iy] - initialPos[iy]) * animState.progress;
              positions[iz] = initialPos[iz] + (targetPos[iz] - initialPos[iz]) * animState.progress;
              if (animState.progress > 0.01) {
                const angle = animState.progress * 0.5;
                const x = positions[ix], z = positions[iz];
                positions[ix] = x * Math.cos(angle) - z * Math.sin(angle);
                positions[iz] = x * Math.sin(angle) + z * Math.cos(angle);
              }
            }
            explosionGeo.attributes.position.needsUpdate = true;
          }

          document.addEventListener('mousemove', (event) => {
            const windowHalfX = window.innerWidth / 2, windowHalfY = window.innerHeight / 2;
            mouseX = (event.clientX - windowHalfX);
            mouseY = (event.clientY - windowHalfY);
            const coords = document.getElementById('coords');
            if(coords) coords.innerText = `v2024.1.${Math.floor((event.clientX/window.innerWidth)*100)}.${Math.floor((event.clientY/window.innerHeight)*100)}`;

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
            } else if (isHovered) {
              document.body.style.cursor = 'default';
              gsap.to(sphereWire.scale, { x: 1, y: 1, z: 1, duration: 0.5 });
              gsap.to(sphereCore.material, { emissiveIntensity: 0.1, duration: 0.3 });
              isHovered = false;
            }
          });

          window.addEventListener('click', () => {
            if (isHovered && !isAnimating) {
              isAnimating = true;
              const statusLight = document.getElementById('status-light');
              const statusText = document.getElementById('status-text');
              statusLight.classList.remove('bg-indigo-500'); statusLight.classList.add('bg-white');
              statusText.innerText = "Status: Compiling...";
              statusText.classList.remove('text-indigo-400/80'); statusText.classList.add('text-white');

              gsap.to([sphereCore.material, sphereWire.material], {
                opacity: 0, duration: 0.2, onComplete: () => { sphereCore.visible = false; sphereWire.visible = false; }
              });
              explosionSystem.visible = true;
              gsap.to(explosionMaterial, { opacity: 1, duration: 0.1 });

              gsap.to(animState, {
                progress: 1, duration: 1.5, ease: "power4.out", onUpdate: updateExplosion,
                onComplete: () => {
                  gsap.to(animState, {
                    progress: 0, duration: 2, delay: 0.2, ease: "elastic.out(1, 0.5)", onUpdate: updateExplosion,
                    onComplete: () => {
                      sphereCore.visible = true; sphereWire.visible = true;
                      gsap.to(explosionMaterial, { opacity: 0, duration: 0.3 });
                      gsap.to([sphereCore.material, sphereWire.material], { opacity: 1, duration: 0.5 });
                      sphereWire.material.opacity = 0.15;
                      explosionSystem.visible = false; isAnimating = false;
                      statusLight.classList.add('bg-indigo-500'); statusLight.classList.remove('bg-white');
                      statusText.innerText = "Engine: Ready";
                      statusText.classList.add('text-indigo-400/80'); statusText.classList.remove('text-white');
                    }
                  });
                }
              });
            }
          });

          const clock = new THREE.Clock();
          function animate() {
            const elapsedTime = clock.getElapsedTime();
            targetX = mouseX * 0.001; targetY = mouseY * 0.001;
            if (!isAnimating || animState.progress < 0.5) {
              mainGroup.rotation.y += 0.002; mainGroup.rotation.x += 0.001;
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

          // Init
          animate();
          const tl = gsap.timeline();
          tl.to("#loader", { opacity: 0, duration: 0.8, onComplete: () => {
              const l = document.getElementById("loader"); if(l) l.style.display = "none";
          }})
          .from(sphereCore.scale, { x: 0, y: 0, z: 0, duration: 1.5, ease: "elastic.out(1, 0.7)" }, "-=0.5")
          .from(sphereWire.scale, { x: 0, y: 0, z: 0, duration: 1.5, ease: "elastic.out(1, 0.7)" }, "<")
          .to(".nav-item", { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }, "-=1")
          .from(".hero-reveal", { y: 100, opacity: 0, duration: 1.2, stagger: 0.1, ease: "power4.out" }, "-=0.8");
        }

        // Glitch effect
        const t=document.querySelectorAll('.glitch-target');let lX=0,lY=0,lT=0;
        document.addEventListener('mousemove',e=>{
          const now=Date.now(),dt=now-lT;
          if(dt>30){
            const dx=e.clientX-lX,dy=e.clientY-lY,s=Math.sqrt(dx*dx+dy*dy)/dt;
            if(s>2.5){
              t.forEach(el=>{
                if(!el.classList.contains('glitch-active')){
                  el.classList.add('glitch-active');
                  setTimeout(()=>el.classList.remove('glitch-active'),250)
                }
              })
            }
            lX=e.clientX;lY=e.clientY;lT=now
          }
        });
      


              import * as THREE from 'three';

              const canvas = document.getElementById('three-character-canvas');
              const container = canvas.parentElement;

              // Scene Setup
              const scene = new THREE.Scene();
              scene.background = new THREE.Color('#0B0C0E');
              scene.fog = new THREE.FogExp2('#0B0C0E', 0.03);

              const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
              camera.position.set(0, 1.5, 6);

              const renderer = new THREE.WebGLRenderer({
                  canvas,
                  antialias: true,
                  powerPreference: "high-performance"
              });
              renderer.setSize(container.clientWidth, container.clientHeight);
              renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
              renderer.shadowMap.enabled = true;
              renderer.shadowMap.type = THREE.PCFSoftShadowMap;

              // Configuration
              const config = {
                  colors: {
                      primary: 0x8b5cf6, // Violet
                      secondary: 0x6366f1, // Indigo
                      accent: 0x10b981 // Emerald
                  }
              };

              // --- Character Construction ---
              const characterGroup = new THREE.Group();
              scene.add(characterGroup);

              // Main Body (Capsule-like)
              const bodyGeo = new THREE.CapsuleGeometry(0.6, 1.2, 4, 16);
              const bodyMat = new THREE.MeshStandardMaterial({
                  color: 0x1e293b,
                  metalness: 0.6,
                  roughness: 0.2,
                  envMapIntensity: 1.0
              });
              const body = new THREE.Mesh(bodyGeo, bodyMat);
              body.position.y = 1;
              body.castShadow = true;
              body.receiveShadow = true;
              characterGroup.add(body);

              // Head
              const headGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
              const headMat = new THREE.MeshStandardMaterial({
                  color: 0xf8fafc,
                  metalness: 0.1,
                  roughness: 0.1
              });
              const head = new THREE.Mesh(headGeo, headMat);
              head.position.y = 1.9;
              head.castShadow = true;
              characterGroup.add(head);

              // Glowing Visor
              const visorGeo = new THREE.BoxGeometry(0.4, 0.1, 0.1);
              const visorMat = new THREE.MeshBasicMaterial({ color: config.colors.secondary });
              const visor = new THREE.Mesh(visorGeo, visorMat);
              visor.position.set(0, 1.9, 0.26);
              characterGroup.add(visor);

              // Floating Tech Rings
              const ringGeo = new THREE.TorusGeometry(1.0, 0.015, 16, 64);
              const ringMat1 = new THREE.MeshBasicMaterial({ color: config.colors.primary, transparent: true, opacity: 0.5 });
              const ring1 = new THREE.Mesh(ringGeo, ringMat1);
              ring1.rotation.x = Math.PI / 2;
              ring1.position.y = 1;
              characterGroup.add(ring1);

              const ringMat2 = new THREE.MeshBasicMaterial({ color: config.colors.accent, transparent: true, opacity: 0.3 });
              const ring2 = new THREE.Mesh(ringGeo, ringMat2);
              ring2.scale.set(1.2, 1.2, 1.2);
              ring2.rotation.x = Math.PI / 2;
              ring2.rotation.y = 0.5;
              ring2.position.y = 1;
              characterGroup.add(ring2);

              // --- User Requested Particles ---
              const particlesGeometry = new THREE.BufferGeometry();
              const particlesCount = 200;
              const posArray = new Float32Array(particlesCount * 3);
              for(let i = 0; i < particlesCount * 3; i++) {
                  posArray[i] = (Math.random() - 0.5) * 10;
              }
              particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
              const particlesMaterial = new THREE.PointsMaterial({
                  size: 0.03,
                  color: config.colors.primary,
                  transparent: true,
                  opacity: 0.8,
                  blending: THREE.AdditiveBlending
              });
              const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
              scene.add(particlesMesh);

              // --- Lighting ---
              const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
              scene.add(ambientLight);

              const mainLight = new THREE.DirectionalLight(0xffffff, 1);
              mainLight.position.set(5, 5, 5);
              mainLight.castShadow = true;
              mainLight.shadow.mapSize.width = 1024;
              mainLight.shadow.mapSize.height = 1024;
              scene.add(mainLight);

              const rimLight = new THREE.SpotLight(config.colors.secondary, 10);
              rimLight.position.set(-5, 5, -2);
              rimLight.lookAt(characterGroup.position);
              scene.add(rimLight);

              // Floor Grid
              const grid = new THREE.GridHelper(20, 20, 0x334155, 0x111827);
              grid.position.y = -1;
              scene.add(grid);

              // Controller State
              const mouse = new THREE.Vector2();
              const targetRot = new THREE.Vector2();

              // Keyboard State
              const keys = { w: false, a: false, s: false, d: false };
              let baseY = 0;
              let baseRotY = 0;

              window.addEventListener('keydown', (e) => {
                  const key = e.key.toLowerCase();
                  if(keys.hasOwnProperty(key)) {
                      keys[key] = true;
                      const el = document.getElementById('key-' + key);
                      if(el) {
                          el.classList.add('translate-y-1', 'shadow-none', 'bg-violet-50', 'text-violet-600', 'border-violet-200');
                          el.classList.remove('key-shadow', 'bg-gray-50', 'text-gray-500', 'border-gray-200');
                      }
                  }
              });

              window.addEventListener('keyup', (e) => {
                  const key = e.key.toLowerCase();
                  if(keys.hasOwnProperty(key)) {
                      keys[key] = false;
                      const el = document.getElementById('key-' + key);
                      if(el) {
                          el.classList.remove('translate-y-1', 'shadow-none', 'bg-violet-50', 'text-violet-600', 'border-violet-200');
                          el.classList.add('key-shadow', 'bg-gray-50', 'text-gray-500', 'border-gray-200');
                      }
                  }
              });

              // Event Listeners
              const onMouseMove = (event) => {
                  const rect = canvas.getBoundingClientRect();
                  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
                  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
              };
              container.addEventListener('mousemove', onMouseMove);

              // Animation Loop
              const clock = new THREE.Clock();

              function animate() {
                  requestAnimationFrame(animate);
                  const t = clock.getElapsedTime();

                  // Keyboard Movement
                  if (keys.w) baseY += 0.05;
                  if (keys.s) baseY -= 0.05;
                  if (keys.a) baseRotY += 0.05;
                  if (keys.d) baseRotY -= 0.05;

                  baseY = Math.max(-0.8, Math.min(baseY, 4));

                  // Character Idle Animation
                  characterGroup.position.y = baseY + Math.sin(t * 1.5) * 0.1; // Float

                  // Rings Animation
                  ring1.rotation.x = Math.PI / 2 + Math.cos(t * 0.5) * 0.1;
                  ring1.rotation.y = t * 0.2;

                  ring2.rotation.x = Math.PI / 2 + Math.sin(t * 0.4) * 0.15;
                  ring2.rotation.y = -t * 0.15;

                  // Particles Animation
                  particlesMesh.rotation.y = t * 0.05;

                  // Controller Logic (Look at Mouse + Base Rotation)
                  targetRot.x = mouse.y * 0.3;
                  targetRot.y = baseRotY + mouse.x * 0.5;

                  characterGroup.rotation.x += (targetRot.x - characterGroup.rotation.x) * 0.1;
                  characterGroup.rotation.y += (targetRot.y - characterGroup.rotation.y) * 0.1;

                  // Visor Pulse
                  const intensity = 0.5 + Math.sin(t * 5) * 0.5;
                  visor.material.color.setHSL(0.6, 0.8, 0.3 + intensity * 0.4);

                  renderer.render(scene, camera);
              }

              // Handle Resize
              const resizeObserver = new ResizeObserver(() => {
                  if (!container.clientWidth) return;
                  const w = container.clientWidth;
                  const h = container.clientHeight;
                  camera.aspect = w / h;
                  camera.updateProjectionMatrix();
                  renderer.setSize(w, h);
              });
              resizeObserver.observe(container);

              animate();
            


        document.addEventListener('DOMContentLoaded', function() {
            const ctx = document.getElementById('miniChart').getContext('2d');

            // Gradient for the chart
            const gradient = ctx.createLinearGradient(0, 0, 0, 120);
            gradient.addColorStop(0, 'rgba(139, 92, 246, 0.5)'); // Violet-500
            gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [{
                        data: [12, 19, 15, 25, 22, 30, 28],
                        borderColor: '#8b5cf6',
                        backgroundColor: gradient,
                        borderWidth: 2,
                        tension: 0.4,
                        pointRadius: 0,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false }, tooltip: { enabled: false } },
                    scales: {
                        x: { display: false },
                        y: { display: false, min: 0 }
                    },
                    animation: {
                        duration: 2000,
                        easing: 'easeOutQuart'
                    }
                }
            });
        });
      


            const toggle = document.getElementById('toggle');
            const prices = document.querySelectorAll('.price-amount');
            
            if (toggle) {
                toggle.addEventListener('change', function() {
                    const dot = this.parentElement.querySelector('.dot');
                    const isYearly = this.checked;
                    
                    if(isYearly) {
                        dot.style.transform = 'translateX(100%)';
                    } else {
                        dot.style.transform = 'translateX(0)';
                    }
                    
                    prices.forEach(price => {
                        price.style.opacity = '0';
                        setTimeout(() => {
                            price.textContent = '$' + price.getAttribute(isYearly ? 'data-yearly' : 'data-monthly');
                            price.style.opacity = '1';
                        }, 200);
                    });
                });
            }
          
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed z-50 transition-all duration-300 bg-black/80 backdrop-blur-md border-b border-white/10 top-0 right-0 left-0">
<div className="lg:px-8 flex w-full h-[72px] pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-10 lg:gap-12">

<a className="flex items-center gap-2.5 text-white hover:opacity-80 transition-opacity" href="#">
<div className="bg-white/10 p-1.5 rounded-lg border border-white/20 shadow-sm">
<svg className="lucide lucide-hexagon" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>
</div>
<span className="font-semibold text-lg tracking-tight">Aether</span>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="hover:text-white transition-colors text-sm font-medium text-white/60" href="#">
              Games
            </a>
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#">
              Solutions
            </a>
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#">
              Developers
            </a>
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#">
              Resources
            </a>
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#">
              Pricing
            </a>
</nav>
</div>
<div className="flex items-center gap-6">

<div className="hidden md:flex items-center gap-6">
<button className="flex items-center gap-3 text-sm font-medium text-white/60 hover:text-white transition-colors bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-full">
<svg className="lucide lucide-search" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
<span className="">Search</span>
</button>
<a className="text-white/60 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-github" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-white/60 hover:text-white transition-colors" href="#">
              Log in
            </a>
<a className="bg-white hover:bg-gray-200 text-black px-4 py-2 rounded-full text-sm font-semibold transition-colors shadow-sm whitespace-nowrap" href="#">
              Start Building
            </a>
</div>
</div>
</div>
</header>

<section className="overflow-hidden antialiased selection:bg-indigo-500 selection:text-white text-zinc-300 font-sans bg-black w-full h-screen relative">

<style className="">
        .font-serif { font-family: 'Newsreader', serif; }
        .bg-noise { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E"); }
        .glitch-target { will-change: transform, text-shadow; backface-visibility: hidden; }
        .glitch-active { animation: glitch-anim 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }
        @keyframes glitch-anim {
          0% { transform: translate(0); text-shadow: none; }
          20% { transform: translate(-2px, 1px) skewX(-2deg); text-shadow: 2px 0 rgba(99, 102, 241, 0.3), -2px 0 rgba(255, 255, 255, 0.3); }
          40% { transform: translate(2px, -1px) skewX(2deg); text-shadow: -2px 0 rgba(99, 102, 241, 0.3), 2px 0 rgba(255, 255, 255, 0.3); }
          60% { transform: translate(-1px, 2px); }
          100% { transform: translate(0); text-shadow: none; }
        }
        .glass-panel { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.08); }
        /* Button Styles */
        .btn-wrapper{position:relative;display:inline-block}.btn{--border-radius:9999px;--padding:4px;--transition:0.4s;--button-color:#000;--highlight-color-hue:245deg;user-select:none;display:flex;align-items:center;justify-content:center;background-color:var(--button-color);box-shadow:inset 0px 1px 1px rgba(255,255,255,0.2),inset 0px 2px 2px rgba(255,255,255,0.15),inset 0px 4px 4px rgba(255,255,255,0.1),inset 0px 8px 8px rgba(255,255,255,0.05),0px -1px 1px rgba(0,0,0,0.02),0px -2px 2px rgba(0,0,0,0.03);border:solid 1px rgba(255,255,255,0.2);border-radius:var(--border-radius);cursor:pointer;transition:box-shadow var(--transition),border var(--transition),background-color var(--transition);padding:1rem 2rem}.btn::before{content:"";position:absolute;top:calc(0px - var(--padding));left:calc(0px - var(--padding));width:calc(100% + var(--padding)*2);height:calc(100% + var(--padding)*2);border-radius:calc(var(--border-radius) + var(--padding));pointer-events:none;background-image:linear-gradient(0deg,#0004,#000a);z-index:-1;transition:box-shadow var(--transition),filter var(--transition);box-shadow:0 -8px 8px -6px #0000 inset,0 -16px 16px -8px #00000000 inset,1px 1px 1px #fff2,2px 2px 2px #fff1,-1px -1px 1px #0002,-2px -2px 2px #0001}.btn::after{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;background-image:linear-gradient(0deg,#fff,hsl(var(--highlight-color-hue),100%,70%),hsla(var(--highlight-color-hue),100%,70%,50%),8%,transparent);background-position:0 0;opacity:0;transition:opacity var(--transition),filter var(--transition)}.btn-letter{position:relative;display:inline-block;color:#ffffff90;font-family:'Inter',sans-serif;font-weight:600;font-size:0.875rem;letter-spacing:-0.025em;animation:letter-anim 2s ease-in-out infinite;transition:color var(--transition),text-shadow var(--transition),opacity var(--transition)}@keyframes letter-anim{50%{text-shadow:0 0 3px #ffffff88;color:#fff}}.btn-svg{flex-grow:0;width:18px;height:18px;margin-left:0.5rem;fill:none;stroke:#e8e8e8;stroke-width:2;animation:flicker 2s linear infinite;animation-delay:0.5s;filter:drop-shadow(0 0 2px #ffffff99);transition:stroke var(--transition),filter var(--transition),opacity var(--transition)}@keyframes flicker{50%{opacity:0.3}}.txt-wrapper{position:relative;display:flex;align-items:center;height:20px}.txt-1{display:flex;align-items:center;gap:1px}.btn:hover{border:solid 1px hsla(var(--highlight-color-hue),100%,80%,0.4)}.btn:hover::before{box-shadow:0 -8px 8px -6px #fffa inset,0 -16px 16px -8px hsla(var(--highlight-color-hue),100%,70%,0.3) inset,1px 1px 1px #fff2,2px 2px 2px #fff1,-1px -1px 1px #0002,-2px -2px 2px #0001}.btn:hover::after{opacity:1}.btn:hover .btn-svg{stroke:#fff;filter:drop-shadow(0 0 3px hsl(var(--highlight-color-hue),100%,70%)) drop-shadow(0 -4px 6px #0009);animation:none}.btn-letter:nth-child(1){animation-delay:0s}.btn-letter:nth-child(2){animation-delay:0.05s}.btn-letter:nth-child(3){animation-delay:0.1s}.btn-letter:nth-child(4){animation-delay:0.15s}.btn-letter:nth-child(5){animation-delay:0.2s}.btn-letter:nth-child(6){animation-delay:0.25s}.btn-letter:nth-child(7){animation-delay:0.3s}.btn-letter:nth-child(8){animation-delay:0.35s}.btn-letter:nth-child(9){animation-delay:0.4s}.btn-letter:nth-child(10){animation-delay:0.45s}.btn-letter:nth-child(11){animation-delay:0.5s}.btn-letter:nth-child(12){animation-delay:0.55s}.btn-letter:nth-child(13){animation-delay:0.6s}.btn-letter:nth-child(14){animation-delay:0.65s}.btn-letter:nth-child(15){animation-delay:0.7s}
      </style>

<div className="absolute inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-1000" id="loader" style={{display: 'none'}}>
<div className="flex flex-col items-center gap-4">
<div className="h-px w-24 bg-zinc-800 overflow-hidden relative">
<div className="absolute inset-0 bg-indigo-500 w-full -translate-x-full animate-[shimmer_1.5s_infinite]"></div>
</div>
<p className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-mono">
            Engine Initialization
          </p>
</div>
<style>
          @keyframes shimmer { 100% { transform: translateX(100%); } }
        </style>
</div>

<div className="absolute inset-0 z-0">
<canvas className="outline-none cursor-grab active:cursor-grabbing w-full h-full" data-engine="three.js r160" height="2042" id="webgl-canvas" style={{width: '1568px', height: '1021px'}} width="3136"></canvas>
</div>

<div className="z-10 flex flex-col pointer-events-none h-full relative">

<header className="w-full px-6 py-6 flex justify-between items-center pointer-events-auto opacity-0 nav-item">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-black/50 backdrop-blur-md group-hover:border-indigo-500/50 transition-colors duration-300">
<iconify-icon className="text-indigo-400 text-xl transition-transform group-hover:rotate-90" icon="solar:widget-5-linear"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-white group-hover:text-indigo-400 transition-colors glitch-target">
              Aether
            </span>
</div>
<nav className="hidden md:flex items-center gap-1 glass-panel p-1 rounded-full">
<a className="px-5 py-2 rounded-full hover:bg-white/5 text-zinc-400 hover:text-white transition-colors text-xs font-medium uppercase tracking-wider" href="#">
              Engine
            </a>
<a className="px-5 py-2 rounded-full hover:bg-white/5 text-zinc-400 hover:text-white transition-colors text-xs font-medium uppercase tracking-wider" href="#">
              Assets
            </a>
<a className="px-5 py-2 rounded-full hover:bg-white/5 text-zinc-400 hover:text-white transition-colors text-xs font-medium uppercase tracking-wider" href="#">
              Community
            </a>
</nav>
<button className="group flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full bg-black/20 backdrop-blur-sm hover:border-indigo-500/30 hover:bg-indigo-500/10 transition-all duration-300">
<span className="text-xs font-medium text-white group-hover:text-indigo-400">
              Download Hub
            </span>
<iconify-icon className="text-indigo-400 group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</header>

<main className="flex-grow flex flex-col justify-center px-6 md:px-12 lg:px-24 pointer-events-none">
<div className="max-w-5xl space-y-8">

<div className="overflow-hidden">
<div className="hero-reveal flex items-center gap-3" style={{translate: 'none', rotate: 'none', scale: 'none'}}>
<span className="flex h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)] transition-colors duration-300" id="status-light"></span>
<p className="text-xs md:text-sm uppercase tracking-[0.2em] text-indigo-400/80 font-medium font-mono transition-colors duration-300" id="status-text">
                  Engine: Ready
                </p>
</div>
</div>

<div className="space-y-0">
<div className="overflow-hidden">
<h1 className="hero-reveal text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.95] text-white glitch-target mix-blend-difference" style={{translate: 'none', rotate: 'none', scale: 'none'}}>
                  Create,
                </h1>
</div>
<div className="overflow-hidden">
<h1 className="hero-reveal text-5xl md:text-7xl lg:text-8xl font-serif italic font-light tracking-tight leading-[0.95] text-indigo-200/90 glitch-target" style={{translate: 'none', rotate: 'none', scale: 'none'}}>
                  Worlds.
                </h1>
</div>
</div>

<div className="overflow-hidden max-w-xl">
<p className="hero-reveal text-sm md:text-lg text-zinc-400 leading-relaxed font-light" style={{translate: 'none', rotate: 'none', scale: 'none'}}>
                The ultimate real-time 3D development platform. Forge, operate,
                and monetize interactive, real-time 3D experiences for any
                platform.
                <span className="text-indigo-400/70 text-xs block mt-2 font-mono uppercase tracking-widest opacity-80">
                  &gt; Start your creative journey
                </span>
</p>
</div>

<div className="overflow-hidden pt-6">
<div className="hero-reveal flex flex-wrap pointer-events-auto pt-4 pr-1 pb-4 pl-1 gap-x-4 gap-y-4" style={{translate: 'none', rotate: 'none', scale: 'none'}}>

<div className="btn-wrapper">
<button aria-label="Deploy Nexus" className="btn" type="button">
<div className="txt-wrapper">
<div className="txt-1">
<span className="btn-letter">D</span>
<span className="btn-letter">o</span>
<span className="btn-letter">w</span>
<span className="btn-letter">n</span>
<span className="btn-letter">l</span>
<span className="btn-letter">o</span>
<span className="btn-letter">a</span>
<span className="btn-letter">d</span>
<span className="btn-letter" style={{width: '4px'}}></span>
<span className="btn-letter">A</span>
<span className="btn-letter">e</span>
<span className="btn-letter">t</span>
<span className="btn-letter">h</span>
<span className="btn-letter">e</span>
<span className="btn-letter">r</span>
</div>
</div>
<svg className="btn-svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</button>
</div>

<button className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(99,102,241,0.2)] h-[54px] rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center">
<span className="animate-[spin_4s_linear_infinite] transition-opacity duration-300 group-hover:opacity-100 opacity-0 absolute top-[-150%] left-[-150%] w-[400%] h-[400%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#6366f1_100%)]"></span>
<span className="absolute inset-0 rounded-full bg-white/10 transition-opacity duration-300 group-hover:opacity-0"></span>
<span className="flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-indigo-200 text-sm font-medium text-white tracking-tight bg-zinc-950 w-full h-full rounded-full pr-8 pl-8 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
<span className="relative z-10">View Documentation</span>
<svg className="relative z-10 text-zinc-400 group-hover:text-indigo-200 transition-colors" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
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
<span className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">
              Latest Release
            </span>
<span className="text-xs font-mono text-indigo-400" id="coords">v2024.1.6.0</span>
</div>
<div className="hidden md:flex gap-4">
<iconify-icon className="text-zinc-600 hover:text-[#26A5E4] transition-colors text-xl" icon="simple-icons:telegram"></iconify-icon>
<iconify-icon className="text-zinc-600 hover:text-[#5865F2] transition-colors text-xl" icon="simple-icons:discord"></iconify-icon>
<iconify-icon className="text-zinc-600 hover:text-[#3776AB] transition-colors text-xl" icon="simple-icons:python"></iconify-icon>
</div>
</footer>
</div>

<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-[5] pointer-events-none"></div>





</section>
<div className="min-h-screen flex flex-col lg:flex-row lg:p-6 gap-6 lg:pt-24 pt-24 pr-4 pb-4 pl-4 gap-x-6 gap-y-6">

<div className="lg:w-5/12 flex flex-col lg:pl-10 lg:pr-12 w-full pt-10 pr-2 pb-10 pl-2 justify-center">
<div className="flex items-center space-x-3 mb-10">
<div className="border font-medium px-3 py-1 rounded-full text-sm tracking-tight flex items-center gap-2 bg-indigo-100 text-indigo-700 border-indigo-200">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-indigo-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
            v2.0 Now Available
          </div>
</div>
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.1] mb-6">
          Empowering Creators
          <br/>
          with Real-Time 3D
        </h1>
<p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-lg">
          Build once, deploy anywhere. Aether provides a comprehensive ecosystem
          for creating games, interactive simulations, and immersive digital
          experiences with unparalleled performance.
        </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
<button className="group relative overflow-hidden rounded-full bg-white border border-gray-200 p-1 pr-6 transition-all hover:border-gray-300 hover:shadow-md">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 shadow-sm transition-transform group-hover:scale-105">
<iconify-icon className="text-gray-700 text-lg" icon="solar:download-linear"></iconify-icon>
</div>
<span className="font-medium text-gray-700 text-base">
                Download SDK
              </span>
</div>
</button>
<button className="group relative overflow-hidden rounded-full p-1 pr-6 transition-all shadow-lg bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/20">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-transform group-hover:scale-105">
<iconify-icon className="text-white text-lg" icon="solar:play-linear"></iconify-icon>
</div>
<span className="font-medium text-white text-base">Play Demo</span>
</div>
</button>
</div>

<div className="">
<h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
            Input mapping
          </h3>
<div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 w-full max-w-md">
<div className="grid grid-cols-2 gap-6">
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 font-semibold text-base key-shadow transform transition-all cursor-default select-none" id="key-w">
                    W
                  </div>
<span className="text-gray-500 font-medium text-sm">Ascend</span>
</div>
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 font-semibold text-base key-shadow transform transition-all cursor-default select-none" id="key-s">
                    S
                  </div>
<span className="text-gray-500 font-medium text-sm">Descend</span>
</div>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 font-semibold text-base key-shadow transform transition-all cursor-default select-none" id="key-a">
                    A
                  </div>
<span className="text-gray-500 font-medium text-sm">
                    Rotate L
                  </span>
</div>
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 font-semibold text-base key-shadow transform transition-all cursor-default select-none" id="key-d">
                    D
                  </div>
<span className="text-gray-500 font-medium text-sm">
                    Rotate R
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:w-7/12 min-h-[500px] lg:min-h-full overflow-hidden w-full ring-black/5 ring-1 rounded-[32px] relative shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-br to-indigo-800 from-indigo-600"></div>

<div className="absolute top-0 right-0 p-6 z-20 flex items-center gap-4">
<span className="text-white/60 text-xs font-medium tracking-wide uppercase">
            Simulation Running
          </span>
<div className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
</div>
<div className="flex lg:p-12 z-10 overflow-hidden pt-4 pr-4 pb-4 pl-4 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="aspect-[4/3] group overflow-hidden bg-[#0B0C0E] w-full h-full max-w-4xl max-h-[90%] ring-white/10 ring-1 rounded-2xl relative shadow-2xl">

<canvas className="block outline-none cursor-crosshair w-full h-full" data-engine="three.js r160" height="1450" id="three-character-canvas" style={{width: '776px', height: '725px'}} width="1552"></canvas>

<div className="flex absolute right-6 bottom-6 left-6 items-end justify-between pointer-events-none z-10">
<div className="bg-black/40 backdrop-blur-md border border-white/10 p-3 rounded-xl flex gap-4 text-white shadow-xl pointer-events-auto">
<div className="flex flex-col px-2">
<span className="text-[10px] uppercase opacity-70 font-semibold tracking-wider text-indigo-300">
                    Status
                  </span>
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)] animate-pulse"></span>
<span className="text-sm font-semibold">Online</span>
</div>
</div>
<div className="w-px bg-white/10"></div>
<div className="flex flex-col px-2">
<span className="text-[10px] uppercase opacity-70 font-semibold tracking-wider text-indigo-300">
                    Entities
                  </span>
<span className="text-sm font-semibold">200</span>
</div>
</div>
<div className="flex flex-col gap-2 pointer-events-auto">
<div className="bg-black/40 backdrop-blur-md border border-white/10 p-2 rounded-lg text-white shadow-xl">
<div className="w-8 h-8 flex items-center justify-center rounded-md bg-white/5 hover:bg-white/10 transition-colors cursor-pointer text-indigo-400">
<iconify-icon icon="solar:gamepad-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>


</div>
</div>
</div>
</div>

<section className="border-y overflow-hidden bg-[#0B0C0E] border-white/5 pt-24 pb-24 relative" id="how-it-works">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] blur-[120px] rounded-full pointer-events-none bg-indigo-600/10"></div>


<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="max-w-3xl mb-20">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-6">
            A complete pipeline for modern development
          </h2>
<p className="text-lg text-gray-400 leading-relaxed">
            From importing assets to final deployment, Aether provides all the
            tools you need to bring your vision to life across any platform.
          </p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative flex flex-col h-full">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r to-transparent opacity-50 group-hover:opacity-100 transition-opacity from-indigo-500"></div>
<div className="pt-6 pb-8 pr-6">
<span className="block text-xs font-mono mb-4 text-indigo-400">
                01
              </span>
<h3 className="text-lg font-medium text-white mb-3">
                Asset Pipeline
              </h3>
<p className="text-sm text-gray-500 leading-relaxed mb-8">
                Import FBX, OBJ, and glTF models seamlessly with automatic
                material conversion and optimization.
              </p>

<div className="h-32 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-4 relative overflow-hidden group-hover:bg-white/10 transition-colors">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(124,58,237,0.1),transparent)]"></div>
<div className="w-10 h-10 rounded-lg bg-[#1E1E1E] flex items-center justify-center border border-white/10 shadow-lg z-10">
<iconify-icon icon="logos:javascript" width="20"></iconify-icon>
</div>
<div className="w-16 h-px bg-white/20 z-0"></div>
<div className="w-10 h-10 rounded-lg bg-[#1E1E1E] flex items-center justify-center border border-white/10 shadow-lg z-10">
<iconify-icon className="text-xl text-indigo-500" icon="solar:box-minimalistic-bold"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="group relative flex flex-col h-full">
<div className="absolute top-0 left-0 w-full h-px bg-white/10 transition-colors group-hover:bg-indigo-500/50"></div>
<div className="pt-6 pb-8 pr-6">
<span className="block text-xs font-mono text-gray-600 transition-colors mb-4 group-hover:text-indigo-400">
                02
              </span>
<h3 className="text-lg font-medium text-white mb-3">
                Scene Composition
              </h3>
<p className="text-sm text-gray-500 leading-relaxed mb-8">
                Design levels with powerful prefabs, terrain tools, and
                real-time dynamic lighting.
              </p>

<div className="h-32 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center px-6 gap-3 relative overflow-hidden group-hover:bg-white/10 transition-colors">
<div className="flex items-center justify-between">
<div className="h-2 w-12 bg-white/10 rounded-full"></div>
<div className="w-8 h-4 rounded-full relative bg-indigo-600">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
</div>
</div>
<div className="flex items-center justify-between opacity-50">
<div className="h-2 w-16 bg-white/10 rounded-full"></div>
<div className="w-8 h-4 bg-gray-600 rounded-full relative">
<div className="absolute left-0.5 top-0.5 w-3 h-3 bg-gray-300 rounded-full shadow-sm"></div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="h-2 w-10 bg-white/10 rounded-full"></div>
<div className="w-8 h-4 rounded-full relative bg-indigo-600">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative flex flex-col h-full">
<div className="absolute top-0 left-0 w-full h-px bg-white/10 transition-colors group-hover:bg-indigo-500/50"></div>
<div className="pt-6 pb-8 pr-6">
<span className="block text-xs font-mono text-gray-600 transition-colors mb-4 group-hover:text-indigo-400">
                03
              </span>
<h3 className="text-lg font-medium text-white mb-3">
                Logic &amp; Scripting
              </h3>
<p className="text-sm text-gray-500 leading-relaxed mb-8">
                Bring scenes to life with robust APIs, character controllers,
                and behavior components.
              </p>

<div className="h-32 rounded-xl bg-gray-900 border border-white/10 relative overflow-hidden transition-colors group-hover:border-indigo-500/30">
<img alt="Abstract 3D" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/49cb45e3-c0d1-44f5-a175-88010911ac8a/800w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all shadow-xl group-hover:bg-indigo-500 group-hover:border-indigo-400">
<iconify-icon className="text-xl" icon="solar:rocket-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="group relative flex flex-col h-full">
<div className="absolute top-0 left-0 w-full h-px bg-white/10 transition-colors group-hover:bg-indigo-500/50"></div>
<div className="pt-6 pb-8 pr-6">
<span className="block text-xs font-mono text-gray-600 transition-colors mb-4 group-hover:text-indigo-400">
                04
              </span>
<h3 className="text-lg font-medium text-white mb-3">
                Profiling &amp; Build
              </h3>
<p className="text-sm text-gray-500 leading-relaxed mb-8">
                Optimize performance with deep profiling tools before
                cross-platform deployment.
              </p>

<div className="h-32 rounded-xl bg-white/5 border border-white/10 relative overflow-hidden p-3 group-hover:bg-white/10 transition-colors">
<canvas className="w-full h-full" height="204" id="miniChart" style={{display: 'block', boxSizing: 'border-box', height: '102px', width: '240px'}} width="480"></canvas>
</div>
</div>
</div>
</div>
</div>


</section>
<section className="border-y bg-white border-gray-100 pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
            Powerful Engine Features
          </h2>
<p className="text-lg text-gray-500">
            Everything you need to create visually stunning and highly optimized
            games and interactive experiences.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="hover:shadow-lg transition-all group hover:border-indigo-100 hover:shadow-indigo-500/5 border-gray-100 rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-indigo-50">
<iconify-icon className="text-gray-600 text-2xl group-hover:text-indigo-600" icon="solar:layers-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">
              High-Performance Rendering
            </h3>
<p className="text-gray-500 text-sm leading-relaxed">
              Create stunning visuals with our advanced rendering pipeline,
              supporting real-time global illumination and ray tracing.
            </p>
</div>

<div className="hover:shadow-lg transition-all group hover:border-indigo-100 hover:shadow-indigo-500/5 border-gray-100 rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-indigo-50">
<iconify-icon className="text-gray-600 text-2xl group-hover:text-indigo-600" icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">
              Advanced Physics Engine
            </h3>
<p className="text-gray-500 text-sm leading-relaxed">
              Simulate complex collisions, rigid bodies, and cloth dynamics
              natively at a buttery-smooth 60fps.
            </p>
</div>

<div className="hover:shadow-lg transition-all group hover:border-indigo-100 hover:shadow-indigo-500/5 border-gray-100 rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-indigo-50">
<iconify-icon className="text-gray-600 text-2xl group-hover:text-indigo-600" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">
              Multiplayer Networking
            </h3>
<p className="text-gray-500 text-sm leading-relaxed">
              Built-in solutions for authoritative servers, fast matchmaking,
              and state synchronization across global regions.
            </p>
</div>

<div className="hover:shadow-lg transition-all group hover:border-indigo-100 hover:shadow-indigo-500/5 border-gray-100 rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-indigo-50">
<iconify-icon className="text-gray-600 text-2xl group-hover:text-indigo-600" icon="solar:code-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">
              C# &amp; Visual Scripting
            </h3>
<p className="text-gray-500 text-sm leading-relaxed">
              Write performant code or use our intuitive node-based system for
              rapid gameplay prototyping.
            </p>
</div>

<div className="hover:shadow-lg transition-all group hover:border-indigo-100 hover:shadow-indigo-500/5 border-gray-100 rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-indigo-50">
<iconify-icon className="text-gray-600 text-2xl group-hover:text-indigo-600" icon="solar:palette-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">
              Shader Graph
            </h3>
<p className="text-gray-500 text-sm leading-relaxed">
              Visually author shaders without writing a single line of code.
              Create complex materials effortlessly.
            </p>
</div>

<div className="hover:shadow-lg transition-all group hover:border-indigo-100 hover:shadow-indigo-500/5 border-gray-100 rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-indigo-50">
<iconify-icon className="text-gray-600 text-2xl group-hover:text-indigo-600" icon="solar:cloud-upload-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">
              Cross-Platform Build
            </h3>
<p className="text-gray-500 text-sm leading-relaxed">
              Compile and deploy your projects to PC, console, mobile, and WebGL
              with a single click.
            </p>
</div>
</div>
</div>
</section>
<section className="overflow-hidden bg-[#0B0C0E] border-white/5 border-b pt-24 pb-24 relative" id="use-cases">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mx-auto text-center mb-20">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-6">
            Built for every creator
          </h2>
<p className="text-lg text-gray-400 leading-relaxed">
            Whether you're an indie developer shipping your first game or a
            massive studio, Aether's architecture scales with your ambition.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-6 lg:gap-8 gap-x-6 gap-y-6">

<div className="group hover:bg-white/10 hover:shadow-2xl transition-all duration-300 overflow-hidden bg-gradient-to-b from-white/10 to-white/0 rounded-3xl pt-8 pr-8 pb-8 pl-8 relative hover:shadow-indigo-500/10 hover:border-indigo-500/30" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '24px'}}>
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-2xl text-indigo-400" icon="lucide:arrow-up-right"></iconify-icon>
</div>
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300 text-indigo-400">
<iconify-icon className="" icon="lucide:rocket" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium text-white">
                  For Indie Developers
                </h3>
<span className="text-xs font-medium px-2 py-0.5 rounded-full border text-indigo-400 bg-indigo-500/10 border-indigo-500/20">
                  Rapid Prototyping
                </span>
</div>
</div>
<p className="text-gray-400 text-sm leading-relaxed mb-8">
              Validate your game mechanics in days, not months, with our
              pre-built component library and asset store.
            </p>
<div className="pt-6 border-t border-white/10 flex flex-col gap-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-indigo-400">
<iconify-icon icon="lucide:zap" width="16"></iconify-icon>
</div>
<div className="text-sm">
<span className="font-medium text-white">Benefit:</span>
<span className="text-gray-400">
                    Zero-config physics and rendering.
                  </span>
</div>
</div>
<div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center gap-3 shadow-sm">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400">
<iconify-icon className="" icon="lucide:box" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
                    Example Scenario
                  </span>
<span className="text-sm text-gray-300 font-medium">
                    2D / 3D Indie Games
                  </span>
</div>
</div>
</div>
</div>

<div className="group hover:bg-white/10 hover:shadow-2xl transition-all duration-300 overflow-hidden bg-gradient-to-b from-white/10 to-white/0 rounded-3xl pt-8 pr-8 pb-8 pl-8 relative hover:shadow-indigo-500/10 hover:border-indigo-500/30" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '24px'}}>
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-2xl text-indigo-400" icon="lucide:arrow-up-right"></iconify-icon>
</div>
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300 text-indigo-400">
<iconify-icon icon="lucide:pen-tool" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium text-white">For 3D Artists</h3>
<span className="text-xs font-medium text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded-full border border-pink-500/20">
                  Visual Tooling
                </span>
</div>
</div>
<p className="text-gray-400 text-sm leading-relaxed mb-8">
              Maintain creative control. Animate, light, and assemble scenes
              directly in the editor without relying on programmers.
            </p>
<div className="pt-6 border-t border-white/10 flex flex-col gap-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-pink-400">
<iconify-icon icon="lucide:wand-2" width="16"></iconify-icon>
</div>
<div className="text-sm">
<span className="font-medium text-white">Benefit:</span>
<span className="text-gray-400">
                    Real-time global illumination.
                  </span>
</div>
</div>
<div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center gap-3 shadow-sm">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400">
<iconify-icon icon="lucide:layout-template" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
                    Example Scenario
                  </span>
<span className="text-sm text-gray-300 font-medium">
                    Cinematics &amp; Environments
                  </span>
</div>
</div>
</div>
</div>

<div className="group hover:bg-white/10 hover:shadow-2xl transition-all duration-300 overflow-hidden bg-gradient-to-b from-white/10 to-white/0 rounded-3xl pt-8 pr-8 pb-8 pl-8 relative hover:shadow-indigo-500/10 hover:border-indigo-500/30" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '24px'}}>
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-2xl text-indigo-400" icon="lucide:arrow-up-right"></iconify-icon>
</div>
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300 text-indigo-400">
<iconify-icon className="" icon="lucide:users" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium text-white">For Game Studios</h3>
<span className="text-xs font-medium px-2 py-0.5 rounded-full border text-indigo-400 bg-indigo-500/10 border-indigo-500/20">
                  Version Control
                </span>
</div>
</div>
<p className="text-gray-400 text-sm leading-relaxed mb-8">
              Iterate faster together. Integrated version control and
              collaborative scene editing for large, distributed teams.
            </p>
<div className="pt-6 border-t border-white/10 flex flex-col gap-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-indigo-400">
<iconify-icon icon="lucide:message-square" width="16"></iconify-icon>
</div>
<div className="text-sm">
<span className="font-medium text-white">Benefit:</span>
<span className="text-gray-400">
                    Seamless multi-user scene editing.
                  </span>
</div>
</div>
<div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center gap-3 shadow-sm">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400">
<iconify-icon className="" icon="lucide:glasses" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
                    Example Scenario
                  </span>
<span className="text-sm text-gray-300 font-medium">
                    AAA &amp; AA Title Development
                  </span>
</div>
</div>
</div>
</div>

<div className="group hover:bg-white/10 hover:shadow-2xl transition-all duration-300 overflow-hidden bg-gradient-to-b from-white/10 to-white/0 rounded-3xl pt-8 pr-8 pb-8 pl-8 relative hover:shadow-indigo-500/10 hover:border-indigo-500/30" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '24px'}}>
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-2xl text-indigo-400" icon="lucide:arrow-up-right"></iconify-icon>
</div>
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300 text-indigo-400">
<iconify-icon className="" icon="lucide:building-2" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium text-white">For Enterprise</h3>
<span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  Industrial XR
                </span>
</div>
</div>
<p className="text-gray-400 text-sm leading-relaxed mb-8">
              Build robust digital twins, automotive configurators, and training
              simulations with enterprise-grade stability.
            </p>
<div className="pt-6 border-t border-white/10 flex flex-col gap-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-emerald-400">
<iconify-icon icon="lucide:shield-check" width="16"></iconify-icon>
</div>
<div className="text-sm">
<span className="font-medium text-white">Benefit:</span>
<span className="text-gray-400">
                    CAD import &amp; high-fidelity rendering.
                  </span>
</div>
</div>
<div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center gap-3 shadow-sm">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400">
<iconify-icon icon="lucide:factory" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
                    Example Scenario
                  </span>
<span className="text-sm text-gray-300 font-medium">
                    Digital Twins &amp; Simulations
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<div className="sm:gap-y-0 sm:pl-0 sm:pr-0 sm:mb-0 max-w-7xl mt-0 mr-auto mb-0 ml-auto pr-0 pl-0 space-y-8 gap-x-y-0 gap-y-0">

<header className="px-4 sm:px-6 lg:px-8 pt-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-3">
            Games Made by Creators
          </h2>
<p className="text-lg text-gray-500 leading-relaxed">
            Discover incredible games and interactive experiences built entirely
            with Aether by our community.
          </p>
</div>
<button className="inline-flex shrink-0 items-center justify-center gap-2 text-sm font-medium bg-white text-gray-900 ring-1 ring-inset ring-gray-200 hover:bg-gray-50 hover:ring-gray-300 px-5 py-2.5 rounded-full transition-all shadow-sm">
          View Showcase
          <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</header>

<div className="px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-px border-b border-gray-100">
<button className="px-4 py-2 text-sm font-medium text-gray-900 border-b-2 border-gray-900 whitespace-nowrap">
            All Games
          </button>
<button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-200 whitespace-nowrap transition-colors">
            Action &amp; Adventure
          </button>
<button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-200 whitespace-nowrap transition-colors">
            RPG
          </button>
<button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-200 whitespace-nowrap transition-colors">
            Simulation
          </button>
<button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-200 whitespace-nowrap transition-colors">
            Strategy
          </button>
<button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-200 whitespace-nowrap transition-colors">
            Multiplayer
          </button>
</div>
</div>

<main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:px-6 lg:px-8 gap-6 pr-4 pb-24 pl-4 gap-x-6 gap-y-6">

<article className="group flex flex-col overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 hover:ring-gray-300 transition-all duration-500 cursor-pointer bg-white h-full rounded-2xl relative shadow-sm" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 90%, transparent)'}}>
<div className="relative w-full aspect-[4/3] sm:aspect-auto sm:h-60 overflow-hidden bg-gray-100">
<img alt="Neon Drifter" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eb2539f0-8d03-48da-ae84-ca48301087c6_800w.webp"/>
<div className="absolute inset-0 bg-gray-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-4 left-4">
<span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-gray-900 text-[11px] uppercase tracking-wider font-semibold ring-1 ring-inset ring-black/10 shadow-sm">
                Action / Racing
              </span>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-black/5 transform transition-transform hover:scale-105">
<svg className="ml-1" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="6 3 20 12 6 21 6 3"></polygon>
</svg>
</div>
</div>
</div>
<div className="flex flex-col flex-grow pt-5 pr-5 pb-5 pl-5">
<div className="flex items-start justify-between gap-4 mb-2">
<h4 className="text-xl font-semibold text-gray-900 tracking-tight leading-tight transition-colors group-hover:text-indigo-600">
                Neon Drifter
              </h4>
<div className="flex items-center gap-1 text-gray-400 shrink-0 mt-0.5">
<svg className="text-amber-400" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<span className="text-sm font-medium text-gray-600">4.9</span>
</div>
</div>
<p className="text-sm text-gray-500 line-clamp-2 mb-5 leading-relaxed">
              High-speed cyberpunk racing game with dynamic city generation and
              intense vehicular combat.
            </p>
<div className="flex items-center gap-2.5 mt-auto">
<img alt="Velocity Studios" className="w-6 h-6 rounded-full ring-1 ring-gray-200 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e3e1091-f8e8-4022-a02a-fa37a35c59a5_320w.jpg"/>
<span className="text-sm font-medium text-gray-600">
                Velocity Studios
              </span>
</div>
</div>
</article>

<article className="group flex flex-col overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 hover:ring-gray-300 transition-all duration-500 cursor-pointer bg-white h-full rounded-2xl relative shadow-sm" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 90%, transparent)'}}>
<div className="relative w-full aspect-[4/3] sm:aspect-auto sm:h-60 overflow-hidden bg-gray-100">
<img alt="Chrono Quest" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/abb44fac-0462-426c-8354-c026f8c6b0b3_800w.webp"/>
<div className="absolute inset-0 bg-gray-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-4 left-4">
<span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-gray-900 text-[11px] uppercase tracking-wider font-semibold ring-1 ring-inset ring-black/10 shadow-sm">
                Action RPG
              </span>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-black/5 transform transition-transform hover:scale-105">
<svg className="ml-1" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon className="" points="6 3 20 12 6 21 6 3"></polygon>
</svg>
</div>
</div>
</div>
<div className="flex flex-col flex-grow border-gray-100 border-t pt-5 pr-5 pb-5 pl-5">
<div className="flex items-start justify-between gap-4 mb-2">
<h4 className="text-xl font-semibold text-gray-900 tracking-tight leading-tight transition-colors group-hover:text-indigo-600">
                Chrono Quest
              </h4>
<div className="flex items-center gap-1 text-gray-400 shrink-0 mt-0.5">
<svg className="text-amber-400" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<span className="text-sm font-medium text-gray-600">4.8</span>
</div>
</div>
<p className="line-clamp-2 leading-relaxed text-sm text-gray-500 mb-5">
              An expansive RPG exploring time-bending mechanics within a
              stunningly crafted low-poly world.
            </p>
<div className="flex items-center gap-2.5 mt-auto">
<img alt="Tech Labs" className="w-6 h-6 rounded-full ring-1 ring-gray-200 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc0337fb-ed78-4515-a35d-9bf52d6af946_320w.webp"/>
<span className="text-sm font-medium text-gray-600">Tech Labs</span>
</div>
</div>
</article>

<article className="group flex flex-col overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 hover:ring-gray-300 transition-all duration-500 cursor-pointer bg-white h-full rounded-2xl relative shadow-sm" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 90%, transparent)'}}>
<div className="relative w-full aspect-[4/3] sm:aspect-auto sm:h-60 overflow-hidden bg-gray-100">
<img alt="Skyborne" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c3a46c24-d3ca-4b2c-97b7-2ddb12885e53_800w.jpg"/>
<div className="absolute inset-0 bg-gray-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-4 left-4">
<span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-gray-900 text-[11px] uppercase tracking-wider font-semibold ring-1 ring-inset ring-black/10 shadow-sm">
                Adventure
              </span>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-black/5 transform transition-transform hover:scale-105">
<svg className="ml-1" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="6 3 20 12 6 21 6 3"></polygon>
</svg>
</div>
</div>
</div>
<div className="flex flex-col flex-grow border-gray-100 border-t pt-5 pr-5 pb-5 pl-5">
<div className="flex items-start justify-between gap-4 mb-2">
<h4 className="text-xl font-semibold text-gray-900 tracking-tight leading-tight transition-colors group-hover:text-indigo-600">
                Skyborne
              </h4>
<div className="flex items-center gap-1 text-gray-400 shrink-0 mt-0.5">
<svg className="text-amber-400" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<span className="text-sm font-medium text-gray-600">4.9</span>
</div>
</div>
<p className="text-sm text-gray-500 line-clamp-2 mb-5 leading-relaxed">
              Soar through a procedurally generated sky archipelago in this
              peaceful exploration adventure.
            </p>
<div className="flex gap-2.5 mt-auto gap-x-2.5 gap-y-2.5 items-center">
<img alt="AtmosFX" className="w-6 h-6 rounded-full ring-1 ring-gray-200 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8a90d32f-809f-4383-b71f-6a9c50621b69_320w.jpg"/>
<span className="text-sm font-medium text-gray-600">AtmosFX</span>
</div>
</div>
</article>

<article className="group flex flex-col overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 hover:ring-gray-300 transition-all duration-500 cursor-pointer bg-white h-full rounded-2xl relative shadow-sm" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 90%, transparent)'}}>
<div className="relative w-full aspect-[4/3] sm:aspect-auto sm:h-60 overflow-hidden bg-gray-100">
<img alt="Mecha Warfare" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70a21679-127e-439b-bb12-b8ab56dd60a5_800w.webp"/>
<div className="absolute inset-0 bg-gray-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-4 left-4">
<span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-gray-900 text-[11px] uppercase tracking-wider font-semibold ring-1 ring-inset ring-black/10 shadow-sm">
                Strategy
              </span>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-black/5 transform transition-transform hover:scale-105">
<svg className="ml-1" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="6 3 20 12 6 21 6 3"></polygon>
</svg>
</div>
</div>
</div>
<div className="flex flex-col flex-grow border-t pt-5 pr-5 pb-5 pl-5">
<div className="flex items-start justify-between gap-4 mb-2">
<h4 className="text-xl font-semibold text-gray-900 tracking-tight leading-tight transition-colors group-hover:text-indigo-600">
                Mecha Warfare
              </h4>
<div className="flex items-center gap-1 text-gray-400 shrink-0 mt-0.5">
<svg className="text-amber-400" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<span className="text-sm font-medium text-gray-600">4.7</span>
</div>
</div>
<p className="text-sm text-gray-500 line-clamp-2 mb-5 leading-relaxed">
              Strategic turn-based combat featuring fully customizable mechs and
              destructible environments.
            </p>
<div className="flex items-center gap-2.5 mt-auto">
<img alt="Studio X" className="w-6 h-6 rounded-full ring-1 ring-gray-200 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b476201e-4ebc-447a-b9b9-0c7e4e8302a0_320w.jpg"/>
<span className="text-sm font-medium text-gray-600">Studio X</span>
</div>
</div>
</article>

<article className="group flex flex-col overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 hover:ring-gray-300 transition-all duration-500 cursor-pointer bg-white h-full rounded-2xl relative shadow-sm" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 90%, transparent)'}}>
<div className="relative w-full aspect-[4/3] sm:aspect-auto sm:h-60 overflow-hidden bg-gray-100">
<img alt="Stellar Vanguard" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/55bc760f-a9a7-4d7b-b54b-bbcaf6148ee1_800w.webp"/>
<div className="absolute inset-0 bg-gray-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-4 left-4">
<span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-gray-900 text-[11px] uppercase tracking-wider font-semibold ring-1 ring-inset ring-black/10 shadow-sm">
                FPS
              </span>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-black/5 transform transition-transform hover:scale-105">
<svg className="ml-1" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="6 3 20 12 6 21 6 3"></polygon>
</svg>
</div>
</div>
</div>
<div className="flex flex-col flex-grow border-gray-100 border-t pt-5 pr-5 pb-5 pl-5">
<div className="flex items-start justify-between gap-4 mb-2">
<h4 className="text-xl font-semibold text-gray-900 tracking-tight leading-tight transition-colors group-hover:text-indigo-600">
                Stellar Vanguard
              </h4>
<div className="flex items-center gap-1 text-gray-400 shrink-0 mt-0.5">
<svg className="text-amber-400" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<span className="text-sm font-medium text-gray-600">4.6</span>
</div>
</div>
<p className="text-sm text-gray-500 line-clamp-2 mb-5 leading-relaxed">
              Fast-paced competitive multiplayer shooter set in zero-gravity
              space stations.
            </p>
<div className="flex items-center gap-2.5 mt-auto">
<img alt="Armory3D" className="w-6 h-6 rounded-full ring-1 ring-gray-200 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<span className="text-sm font-medium text-gray-600">Armory3D</span>
</div>
</div>
</article>

<article className="group flex flex-col overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 hover:ring-gray-300 transition-all duration-500 cursor-pointer bg-white h-full rounded-2xl relative shadow-sm" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 90%, transparent)'}}>
<div className="relative w-full aspect-[4/3] sm:aspect-auto sm:h-60 overflow-hidden bg-gray-100">
<img alt="Wildlands" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e26dc288-dbde-4c95-a098-fc4eed1d2749_800w.webp"/>
<div className="absolute inset-0 bg-gray-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-4 left-4">
<span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-gray-900 text-[11px] uppercase tracking-wider font-semibold ring-1 ring-inset ring-black/10 shadow-sm">
                Survival
              </span>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-black/5 transform transition-transform hover:scale-105">
<svg className="ml-1" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="6 3 20 12 6 21 6 3"></polygon>
</svg>
</div>
</div>
</div>
<div className="flex flex-col flex-grow border-gray-100 border-t pt-5 pr-5 pb-5 pl-5">
<div className="flex items-start justify-between gap-4 mb-2">
<h4 className="text-xl font-semibold text-gray-900 tracking-tight leading-tight transition-colors group-hover:text-indigo-600">
                Wildlands
              </h4>
<div className="flex items-center gap-1 text-gray-400 shrink-0 mt-0.5">
<svg className="text-amber-400" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<span className="text-sm font-medium text-gray-600">4.8</span>
</div>
</div>
<p className="text-sm text-gray-500 line-clamp-2 mb-5 leading-relaxed">
              Survive the harsh procedural wilderness, build shelters, and craft
              tools to thrive.
            </p>
<div className="flex items-center gap-2.5 mt-auto">
<img alt="WorldBuilder" className="w-6 h-6 rounded-full ring-1 ring-gray-200 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<span className="text-sm font-medium text-gray-600">
                WorldBuilder
              </span>
</div>
</div>
</article>

<article className="group flex flex-col overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 hover:ring-gray-300 transition-all duration-500 cursor-pointer bg-white h-full rounded-2xl relative shadow-sm" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 90%, transparent)'}}>
<div className="relative w-full aspect-[4/3] sm:aspect-auto sm:h-60 overflow-hidden bg-gray-100">
<img alt="Ocean's Edge" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/806424f8-79ec-4024-a9ca-d2e64ff87b51_800w.webp"/>
<div className="absolute inset-0 bg-gray-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-4 left-4">
<span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-gray-900 text-[11px] uppercase tracking-wider font-semibold ring-1 ring-inset ring-black/10 shadow-sm">
                Simulation
              </span>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-black/5 transform transition-transform hover:scale-105">
<svg className="ml-1" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="6 3 20 12 6 21 6 3"></polygon>
</svg>
</div>
</div>
</div>
<div className="flex flex-col flex-grow border-gray-100 border-t pt-5 pr-5 pb-5 pl-5">
<div className="flex items-start justify-between gap-4 mb-2">
<h4 className="text-xl font-semibold text-gray-900 tracking-tight leading-tight transition-colors group-hover:text-indigo-600">
                Ocean's Edge
              </h4>
<div className="flex items-center gap-1 text-gray-400 shrink-0 mt-0.5">
<svg className="text-amber-400" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<span className="text-sm font-medium text-gray-600">4.9</span>
</div>
</div>
<p className="text-sm text-gray-500 line-clamp-2 mb-5 leading-relaxed">
              A deeply immersive sailing simulator featuring next-generation
              water physics and dynamic weather systems.
            </p>
<div className="flex items-center gap-2.5 mt-auto">
<img alt="Fluid Dynamics" className="w-6 h-6 rounded-full ring-1 ring-gray-200 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/24f664fd-07a7-45e6-9553-ed03aa0c764f_320w.jpg"/>
<span className="text-sm font-medium text-gray-600">
                Fluid Dynamics
              </span>
</div>
</div>
</article>

<article className="group flex flex-col overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 hover:ring-gray-300 transition-all duration-500 cursor-pointer bg-white h-full rounded-2xl relative shadow-sm" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 90%, transparent)'}}>
<div className="relative w-full aspect-[4/3] sm:aspect-auto sm:h-60 overflow-hidden bg-gray-100">
<img alt="Orbit Station Zero" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/87c0ba38-ba3a-474c-b4a0-807bd05f2570_800w.webp"/>
<div className="absolute inset-0 bg-gray-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-4 left-4">
<span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-gray-900 text-[11px] uppercase tracking-wider font-semibold ring-1 ring-inset ring-black/10 shadow-sm">
                Sci-Fi
              </span>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-black/5 transform transition-transform hover:scale-105">
<svg className="ml-1" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="6 3 20 12 6 21 6 3"></polygon>
</svg>
</div>
</div>
</div>
<div className="flex flex-col flex-grow border-gray-100 border-t pt-5 pr-5 pb-5 pl-5">
<div className="flex items-start justify-between gap-4 mb-2">
<h4 className="text-xl font-semibold text-gray-900 tracking-tight leading-tight transition-colors group-hover:text-indigo-600">
                Orbit Station Zero
              </h4>
<div className="flex items-center gap-1 text-gray-400 shrink-0 mt-0.5">
<svg className="text-amber-400" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<span className="text-sm font-medium text-gray-600">4.7</span>
</div>
</div>
<p className="text-sm text-gray-500 line-clamp-2 mb-5 leading-relaxed">
              Manage a deep space outpost, conduct research, and defend against
              unknown cosmic anomalies.
            </p>
<div className="flex items-center gap-2.5 mt-auto">
<img alt="Orbit Design" className="w-6 h-6 rounded-full ring-1 ring-gray-200 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e3e1091-f8e8-4022-a02a-fa37a35c59a5_320w.jpg"/>
<span className="text-sm font-medium text-gray-600">
                Orbit Design
              </span>
</div>
</div>
</article>
</main>
</div>
<section className="overflow-hidden bg-[#0B0C0E] border-white/5 border-b pt-24 pb-24 relative" id="success-stories">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] blur-[120px] rounded-full pointer-events-none bg-indigo-600/5"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl mx-auto text-center mb-20">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-6">
            Case Studies &amp; Success Stories
          </h2>
<p className="text-lg text-gray-400 leading-relaxed">
            Discover how visionary creators, indie developers, and
            forward-thinking studios are pushing the boundaries of real-time 3D.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 gap-x-6 gap-y-6">

<div className="group rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full relative hover:border-indigo-500/30 hover:shadow-indigo-500/10">
<div className="absolute inset-0 bg-gradient-to-b to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 from-indigo-500/5"></div>
<div className="h-48 overflow-hidden relative border-b border-white/10">
<img alt="Neon Drifter Game" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d0d83d3-99d9-44cd-89a6-ff5c8f5d3bb3_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-transparent"></div>
</div>
<div className="p-8 flex flex-col flex-grow relative z-10 -mt-12">
<div className="w-12 h-12 rounded-2xl bg-[#0B0C0E] border border-white/10 flex items-center justify-center mb-6 shadow-xl group-hover:scale-105 transition-transform duration-300 text-indigo-400">
<iconify-icon className="" icon="lucide:gamepad-2" width="24"></iconify-icon>
</div>
<div className="mb-8 flex-grow">
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">
                  Velocity Studios
                </h3>
<p className="text-sm text-gray-400 leading-relaxed">
                  "Migrating to Aether allowed us to hit a locked 60 FPS on
                  mobile devices without sacrificing our complex lighting model.
                  It completely revolutionized our deployment pipeline."
                </p>
</div>
<div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10 mb-8">
<div className="">
<div className="text-2xl font-medium text-white tracking-tight">
                    60fps
                  </div>
<div className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider font-medium">
                    Performance
                  </div>
</div>
<div className="">
<div className="text-2xl font-medium text-white tracking-tight">
                    3wks
                  </div>
<div className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider font-medium">
                    Port Time
                  </div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br to-indigo-500 flex items-center justify-center text-white text-xs font-medium shadow-inner border border-white/10 from-indigo-500">
                  EK
                </div>
<div>
<div className="text-sm font-medium text-gray-200">Elena K.</div>
<div className="text-xs text-gray-500">
                    Lead Technical Director
                  </div>
</div>
</div>
</div>
</div>

<div className="group rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-pink-500/30 hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 flex flex-col h-full relative">
<div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="h-48 overflow-hidden relative border-b border-white/10">
<img alt="Architectural rendering" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0c119ab5-0e76-4584-91a8-f55bf8a132c5_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-transparent"></div>
</div>
<div className="p-8 flex flex-col flex-grow relative z-10 -mt-12">
<div className="w-12 h-12 rounded-2xl bg-[#0B0C0E] border border-white/10 flex items-center justify-center mb-6 shadow-xl text-pink-400 group-hover:scale-105 transition-transform duration-300">
<iconify-icon icon="lucide:box" width="24"></iconify-icon>
</div>
<div className="mb-8 flex-grow">
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">
                  Aura Architecture
                </h3>
<p className="text-sm text-gray-400 leading-relaxed">
                  "The real-time path tracing out of the box means we can
                  iterate on architectural visualizations with clients
                  instantly. The visual fidelity is simply unmatched in the
                  browser."
                </p>
</div>
<div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10 mb-8">
<div className="">
<div className="text-2xl font-medium text-white tracking-tight">
                    4K
                  </div>
<div className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider font-medium">
                    Resolution
                  </div>
</div>
<div>
<div className="text-2xl font-medium text-white tracking-tight">
                    0s
                  </div>
<div className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider font-medium">
                    Bake Time
                  </div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white text-xs font-medium shadow-inner border border-white/10">
                  MR
                </div>
<div>
<div className="text-sm font-medium text-gray-200">Marcus R.</div>
<div className="text-xs text-gray-500">Principal Architect</div>
</div>
</div>
</div>
</div>

<div className="group rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 flex flex-col h-full relative">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="h-48 overflow-hidden relative border-b border-white/10">
<img alt="3D Product Configurator" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/b5bee6bb-db15-45fc-ae23-8ed13537e511/800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-transparent"></div>
</div>
<div className="p-8 flex flex-col flex-grow relative z-10 -mt-12">
<div className="w-12 h-12 rounded-2xl bg-[#0B0C0E] border border-white/10 flex items-center justify-center mb-6 shadow-xl text-emerald-400 group-hover:scale-105 transition-transform duration-300">
<iconify-icon icon="lucide:shopping-bag" width="24"></iconify-icon>
</div>
<div className="mb-8 flex-grow">
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">
                  Form &amp; Function
                </h3>
<p className="text-sm text-gray-400 leading-relaxed">
                  "Building our interactive product configurator on Aether
                  reduced our bundle size by 70%. It loads instantly on mobile
                  networks and handles millions of combinations effortlessly."
                </p>
</div>
<div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10 mb-8">
<div>
<div className="text-2xl font-medium text-white tracking-tight">
                    2.1
                    <span className="text-lg text-gray-500">mb</span>
</div>
<div className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider font-medium">
                    Payload Size
                  </div>
</div>
<div className="">
<div className="text-2xl font-medium text-white tracking-tight">
                    &lt;1s
                  </div>
<div className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider font-medium">
                    Load Time
                  </div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-xs font-medium shadow-inner border border-white/10">
                  SJ
                </div>
<div className="">
<div className="text-sm font-medium text-gray-200">Sarah J.</div>
<div className="text-xs text-gray-500">
                    Head of Digital Product
                  </div>
</div>
</div>
</div>
</div>



</div>
</div>
</section>

<section className="bg-gray-50 pt-24 pb-24" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-12 text-center">
          Trusted by creative developers
        </h2>
<div className="columns-1 md:columns-3 space-y-6 gap-x-6 gap-y-6">

<div className="hover:shadow-lg transition-all group hover:border-indigo-100 hover:shadow-indigo-500/5 rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0), rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0))', -BorderRadiusBefore: '16px'}}>
<p className="text-gray-600 text-sm leading-relaxed mb-6">
              "Aether completely changed how we prototype gameplay mechanics.
              The physics engine is incredibly robust yet performant enough for
              complex simulations."
            </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs">
                JD
              </div>
<div className="">
<div className="text-sm font-medium text-gray-900">
                  James Davies
                </div>
<div className="text-xs text-gray-500">
                  Lead Developer, Voxel Games
                </div>
</div>
</div>
</div>

<div className="hover:shadow-lg transition-all group hover:border-indigo-100 hover:shadow-indigo-500/5 rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0), rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0))', -BorderRadiusBefore: '16px'}}>
<p className="text-gray-600 text-sm leading-relaxed mb-6">
              "The editor is a breath of fresh air. It feels intuitive and
              powerful, letting us focus on level design instead of fighting the
              pipeline."
            </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs">
                AK
              </div>
<div className="">
<div className="text-sm font-medium text-gray-900">Sarah Klein</div>
<div className="text-xs text-gray-500">Lead Level Designer</div>
</div>
</div>
</div>

<div className="hover:shadow-lg transition-all group hover:border-indigo-100 hover:shadow-indigo-500/5 rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0), rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0))', -BorderRadiusBefore: '16px'}}>
<p className="text-gray-600 text-sm leading-relaxed mb-6">
              "We shipped our game 3 weeks early because we didn't have to write
              custom shaders for every material. Aether handles the hard
              rendering stuff."
            </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs">
                MR
              </div>
<div className="">
<div className="text-sm font-medium text-gray-900">Marcus Reed</div>
<div className="text-xs text-gray-500">Technical Art Director</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-gray-100 border-t pt-24 pb-24" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
<div className="flex items-center justify-center gap-4 mt-8">
<span className="text-sm font-medium text-gray-500">Monthly</span>
<label className="flex items-center cursor-pointer relative" htmlFor="toggle">
<input className="sr-only toggle-checkbox" id="toggle" type="checkbox"/>
<div className="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-label transition-colors"></div>
<div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 ease-out transform shadow-sm"></div>
</label>
<span className="text-sm font-medium text-gray-900">
              Yearly
              <span className="text-xs ml-1 font-semibold text-indigo-600">
                -20%
              </span>
</span>
</div>


</div>
<div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="p-8 rounded-3xl border border-gray-200 bg-white">
<div className="mb-4">
<h3 className="text-lg font-semibold text-gray-900">Personal</h3>
<p className="text-sm text-gray-500 mt-2">
                Perfect for beginners and hobbyists.
              </p>
</div>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight text-gray-900 price-amount transition-opacity duration-200" data-monthly="0" data-yearly="0">
                $0
              </span>
<span className="text-gray-500 text-sm">/mo</span>
</div>
<a className="block w-full py-2.5 rounded-lg border border-gray-200 text-center text-sm font-semibold text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all mb-8" href="#">
              Get Started
            </a>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400" icon="solar:check-circle-linear"></iconify-icon>
                Personal Engine License
              </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400" icon="solar:check-circle-linear"></iconify-icon>
                Community Forum Access
              </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400" icon="solar:check-circle-linear"></iconify-icon>
                Cloud Build (1 per day)
              </li>
</ul>
</div>

<div className="p-8 rounded-3xl border relative overflow-hidden border-indigo-200 bg-indigo-50/30">
<div className="absolute top-0 right-0 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-xl tracking-wider bg-indigo-600">
              Popular
            </div>
<div className="mb-4">
<h3 className="text-lg font-semibold text-gray-900">Pro</h3>
<p className="text-sm text-gray-500 mt-2">
                For professional creators and small studios.
              </p>
</div>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight text-gray-900 price-amount transition-opacity duration-200" data-monthly="29" data-yearly="23">
                $29
              </span>
<span className="text-gray-500 text-sm">/mo</span>
</div>
<a className="block w-full py-2.5 rounded-lg text-center text-sm font-semibold text-white shadow-md transition-all mb-8 bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200" href="#">
              Start Free Trial
            </a>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-gray-700">
<iconify-icon className="text-indigo-600" icon="solar:check-circle-bold"></iconify-icon>
                Pro Engine License
              </li>
<li className="flex items-center gap-3 text-sm text-gray-700">
<iconify-icon className="text-indigo-600" icon="solar:check-circle-bold"></iconify-icon>
                Advanced Profiling Tools
              </li>
<li className="flex items-center gap-3 text-sm text-gray-700">
<iconify-icon className="text-indigo-600" icon="solar:check-circle-bold"></iconify-icon>
                Unlimited Cloud Builds
              </li>
</ul>
</div>

<div className="p-8 rounded-3xl border border-gray-200 bg-white">
<div className="mb-4">
<h3 className="text-lg font-semibold text-gray-900">Enterprise</h3>
<p className="text-sm text-gray-500 mt-2">
                For large studios needing premium support.
              </p>
</div>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight text-gray-900 price-amount transition-opacity duration-200" data-monthly="99" data-yearly="79">
                $99
              </span>
<span className="text-gray-500 text-sm">/mo</span>
</div>
<a className="block w-full py-2.5 rounded-lg border border-gray-200 text-center text-sm font-semibold text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all mb-8" href="#">
              Contact Sales
            </a>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400" icon="solar:check-circle-linear"></iconify-icon>
                Source Code Access
              </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400" icon="solar:check-circle-linear"></iconify-icon>
                Dedicated Success Manager
              </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400" icon="solar:check-circle-linear"></iconify-icon>
                Custom SLAs &amp; Priority Support
              </li>
</ul>
</div>
</div>
</div>
</section>

<footer className="bg-white border-gray-200 border-t pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 bg-gray-900 rounded text-white flex items-center justify-center">
<iconify-icon icon="solar:box-minimalistic-linear" width="14"></iconify-icon>
</div>
<span className="font-semibold text-gray-900">Aether</span>
</a>
<p className="text-sm text-gray-500 max-w-xs mb-6">
              Empowering developers to build the next generation of web-based 3D
              experiences.
            </p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:brand-discord-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="">
<h4 className="font-semibold text-gray-900 mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li>
<a className="transition-colors hover:text-indigo-600" href="#">
                  Features
                </a>
</li>
<li>
<a className="transition-colors hover:text-indigo-600" href="#">
                  SDK
                </a>
</li>
<li className="">
<a className="transition-colors hover:text-indigo-600" href="#">
                  Pricing
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-4 text-sm">Resources</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li>
<a className="transition-colors hover:text-indigo-600" href="#">
                  Documentation
                </a>
</li>
<li>
<a className="transition-colors hover:text-indigo-600" href="#">
                  API Reference
                </a>
</li>
<li>
<a className="transition-colors hover:text-indigo-600" href="#">
                  Community
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li>
<a className="transition-colors hover:text-indigo-600" href="#">
                  About
                </a>
</li>
<li>
<a className="transition-colors hover:text-indigo-600" href="#">
                  Blog
                </a>
</li>
<li>
<a className="transition-colors hover:text-indigo-600" href="#">
                  Careers
                </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-xs text-gray-400">
            © 2024 Aether Inc. All rights reserved.
          </span>
<div className="flex gap-6 text-xs text-gray-400">
<a className="hover:text-gray-600" href="#">Privacy Policy</a>
<a className="hover:text-gray-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<style className="">
      @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.96) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
      }
    </style>

    </>
  );
}
