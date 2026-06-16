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

          document.addEventListener('mousemove', (event) => {
            const windowHalfX = window.innerWidth / 2, windowHalfY = window.innerHeight / 2;
            mouseX = (event.clientX - windowHalfX);
            mouseY = (event.clientY - windowHalfY);
          });

          const clock = new THREE.Clock();
          function animate() {
            const elapsedTime = clock.getElapsedTime();
            targetX = mouseX * 0.001; targetY = mouseY * 0.001;
            mainGroup.rotation.y += 0.002; mainGroup.rotation.x += 0.001;
            mainGroup.rotation.y += 0.05 * (targetX - mainGroup.rotation.y);
            mainGroup.rotation.x += 0.05 * (targetY - mainGroup.rotation.x);

            const scale = 1 + Math.sin(elapsedTime * 2) * 0.02;
            sphereWire.scale.set(scale, scale, scale);

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
          .from(".hero-reveal", { y: 30, opacity: 0, duration: 1, stagger: 0.1, ease: "power3.out" }, "-=0.8");
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
              scene.background = new THREE.Color('#000000');
              scene.fog = new THREE.FogExp2('#000000', 0.03);

              const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
              camera.position.set(0, 1.5, 6);

              const renderer = new THREE.WebGLRenderer({
                  canvas,
                  antialias: true,
                  powerPreference: "high-performance"
              });
              renderer.setSize(container.clientWidth, container.clientHeight);
              renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

              // Abstract Corporate Structure
              const group = new THREE.Group();
              scene.add(group);

              const geo = new THREE.OctahedronGeometry(1.5, 0);
              const mat = new THREE.MeshStandardMaterial({
                  color: 0x1e293b,
                  metalness: 0.9,
                  roughness: 0.1,
                  wireframe: true,
                  transparent: true,
                  opacity: 0.3
              });
              const core = new THREE.Mesh(geo, mat);
              group.add(core);

              const innerGeo = new THREE.OctahedronGeometry(0.8, 0);
              const innerMat = new THREE.MeshStandardMaterial({
                  color: 0x6366f1,
                  metalness: 0.5,
                  roughness: 0.2,
                  emissive: 0x6366f1,
                  emissiveIntensity: 0.2
              });
              const innerCore = new THREE.Mesh(innerGeo, innerMat);
              group.add(innerCore);

              // Rings
              const ringGeo = new THREE.TorusGeometry(2.5, 0.02, 16, 64);
              const ringMat = new THREE.MeshBasicMaterial({ color: 0x3f3f46 });
              const ring1 = new THREE.Mesh(ringGeo, ringMat);
              ring1.rotation.x = Math.PI / 2;
              group.add(ring1);

              const ring2 = new THREE.Mesh(ringGeo, ringMat);
              ring2.rotation.y = Math.PI / 2;
              group.add(ring2);

              // Particles
              const pGeo = new THREE.BufferGeometry();
              const pCount = 100;
              const pPos = new Float32Array(pCount * 3);
              for(let i = 0; i < pCount * 3; i++) pPos[i] = (Math.random() - 0.5) * 8;
              pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
              const pMat = new THREE.PointsMaterial({ size: 0.05, color: 0x6366f1, transparent: true, opacity: 0.5 });
              const particles = new THREE.Points(pGeo, pMat);
              scene.add(particles);

              // Lighting
              const ambient = new THREE.AmbientLight(0xffffff, 0.2);
              scene.add(ambient);
              const light = new THREE.DirectionalLight(0xffffff, 2);
              light.position.set(5, 5, 5);
              scene.add(light);
              const spot = new THREE.SpotLight(0x6366f1, 5);
              spot.position.set(-5, 5, -2);
              scene.add(spot);

              // Input State
              const mouse = new THREE.Vector2();
              const keys = { w: false, a: false, s: false, d: false };
              let baseRot = 0;

              window.addEventListener('keydown', (e) => {
                  const key = e.key.toLowerCase();
                  if(keys.hasOwnProperty(key)) {
                      keys[key] = true;
                      const el = document.getElementById('key-' + key);
                      if(el) {
                          el.classList.add('translate-y-1', 'shadow-none', 'bg-indigo-500/20', 'text-indigo-400', 'border-indigo-500/50');
                          el.classList.remove('key-shadow', 'bg-zinc-900', 'text-zinc-400', 'border-white/10');
                      }
                  }
              });

              window.addEventListener('keyup', (e) => {
                  const key = e.key.toLowerCase();
                  if(keys.hasOwnProperty(key)) {
                      keys[key] = false;
                      const el = document.getElementById('key-' + key);
                      if(el) {
                          el.classList.remove('translate-y-1', 'shadow-none', 'bg-indigo-500/20', 'text-indigo-400', 'border-indigo-500/50');
                          el.classList.add('key-shadow', 'bg-zinc-900', 'text-zinc-400', 'border-white/10');
                      }
                  }
              });

              container.addEventListener('mousemove', (event) => {
                  const rect = canvas.getBoundingClientRect();
                  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
                  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
              });

              const clock = new THREE.Clock();
              function animate() {
                  requestAnimationFrame(animate);
                  const t = clock.getElapsedTime();

                  if (keys.w) core.scale.setScalar(1.2); else core.scale.setScalar(1.0);
                  if (keys.s) innerCore.scale.setScalar(0.8); else innerCore.scale.setScalar(1.0);
                  if (keys.a) baseRot += 0.05;
                  if (keys.d) baseRot -= 0.05;

                  group.rotation.x = Math.sin(t * 0.5) * 0.2 + mouse.y * 0.2;
                  group.rotation.y = t * 0.2 + baseRot + mouse.x * 0.2;

                  ring1.rotation.y = t * 0.5;
                  ring2.rotation.x = t * 0.5;
                  particles.rotation.y = t * 0.1;

                  renderer.render(scene, camera);
              }

              const resizeObserver = new ResizeObserver(() => {
                  if (!container.clientWidth) return;
                  const w = container.clientWidth; const h = container.clientHeight;
                  camera.aspect = w / h; camera.updateProjectionMatrix();
                  renderer.setSize(w, h);
              });
              resizeObserver.observe(container);

              animate();
            


        document.addEventListener('DOMContentLoaded', function() {
            const ctx = document.getElementById('miniChart').getContext('2d');
            const gradient = ctx.createLinearGradient(0, 0, 0, 120);
            gradient.addColorStop(0, 'rgba(99, 102, 241, 0.5)');
            gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                    datasets: [{
                        data: [15, 30, 45, 85],
                        borderColor: '#6366f1',
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
                    scales: { x: { display: false }, y: { display: false, min: 0 } },
                    animation: { duration: 2000, easing: 'easeOutQuart' }
                }
            });
        });
      
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
<div className="bg-white/10 p-1.5 rounded-lg border border-white/20 shadow-sm flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:target-linear" width="20"></iconify-icon>
</div>
<span className="font-medium text-lg tracking-tight">
              Tony J Hughes
            </span>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="hover:text-white transition-colors text-sm font-medium text-white/60" href="#problem">
              The Reality
            </a>
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#methodology">
              Methodology
            </a>
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#authority">
              About Tony
            </a>
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#programs">
              Programs
            </a>
</nav>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-6">
<a className="text-white/60 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:book-linear" width="20"></iconify-icon>
</a>
<a className="text-white/60 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
</a>
</div>
<div className="flex items-center gap-4">
<a className="bg-white hover:bg-gray-200 text-black px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-sm whitespace-nowrap" href="#">
              Book a Strategy Conversation
            </a>
</div>
</div>
</div>
</header>

<section className="overflow-hidden antialiased font-sans bg-black w-full h-auto min-h-screen relative pb-24 lg:pb-32">

<div className="absolute inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-1000" id="loader" style={{display: 'none'}}>
<div className="flex flex-col items-center gap-4">
<div className="h-px w-24 bg-zinc-800 overflow-hidden relative">
<div className="absolute inset-0 bg-indigo-500 w-full -translate-x-full animate-[shimmer_1.5s_infinite]"></div>
</div>
<p className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-mono">
            Initializing Framework
          </p>
</div>
<style>
          @keyframes shimmer { 100% { transform: translateX(100%); } }
        </style>
</div>

<div className="absolute inset-0 z-0 h-screen">
<canvas className="outline-none cursor-grab active:cursor-grabbing w-full h-full" data-engine="three.js r160" height="826" id="webgl-canvas" style={{width: '1440px', height: '826px'}} width="1440"></canvas>
</div>

<div className="z-10 flex flex-col pointer-events-none h-full relative pt-32 lg:pt-40">

<main className="flex-grow flex flex-col justify-start px-6 md:px-12 lg:px-24 pointer-events-none">
<div className="max-w-4xl space-y-6">

<div className="overflow-hidden">
<div className="hero-reveal flex items-center gap-3">
<span className="flex h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)] transition-colors duration-300" id="status-light"></span>
<p className="text-xs md:text-sm uppercase tracking-[0.2em] text-indigo-400/80 font-medium font-mono transition-colors duration-300" id="status-text">
                  Status: Ready for Executive Engagement
                </p>
</div>
</div>

<div className="space-y-0">
<div className="overflow-hidden pb-2">
<h1 className="hero-reveal text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.95] text-white glitch-target mix-blend-difference">
                  Modern Selling.
                </h1>
</div>
<div className="overflow-hidden pb-2">
<h1 className="hero-reveal text-4xl md:text-6xl lg:text-7xl font-serif italic font-light tracking-tight leading-[0.95] text-indigo-200/90 glitch-target">
                  Real Differentiation.
                </h1>
</div>
</div>

<div className="overflow-hidden max-w-xl">
<p className="hero-reveal text-base md:text-lg text-zinc-400 leading-relaxed font-light">
                I help B2B sales leaders improve win rates, increase deal value,
                and build sales teams that create value instead of chasing
                price.
                <span className="text-indigo-400/70 text-xs block mt-3 font-mono uppercase tracking-widest opacity-80">
                  &gt; Drive Measurable Revenue Improvement
                </span>
</p>
</div>

<div className="overflow-hidden pointer-events-auto pt-4">
<div className="hero-reveal aspect-video overflow-hidden flex group bg-[#0B0C0E]/80 w-full border-white/10 border rounded-xl relative shadow-2xl backdrop-blur-sm items-center justify-center">
<div className="z-10 flex flex-col items-center justify-center text-zinc-500 w-full h-full absolute top-0 left-0 bg-zinc-900/50">
<iconify-icon className="mb-2 opacity-50" icon="solar:play-circle-linear" width="48"></iconify-icon>
<span className="text-sm font-medium tracking-wide">
                    Video Placeholder
                  </span>
</div>
</div>
</div>

<div className="overflow-hidden pointer-events-auto pt-8">
<div className="hero-reveal flex flex-wrap pointer-events-auto gap-x-4 gap-y-4">

<div className="btn-wrapper">
<a aria-label="Book Strategy Conversation" className="btn" href="#contact">
<div className="txt-wrapper">
<div className="txt-1 text-sm font-medium">
                        Book a Strategy Conversation
                      </div>
</div>
<svg className="btn-svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="5" x2="19" y1="12" y2="12"></line>
<polyline points="12 5 19 12 12 19"></polyline>
</svg>
</a>
</div>

<a className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(99,102,241,0.2)] h-[54px] rounded-full p-[1px] relative items-center justify-center" href="#methodology">
<span className="animate-[spin_4s_linear_infinite] transition-opacity duration-300 group-hover:opacity-100 opacity-0 absolute top-[-150%] left-[-150%] w-[400%] h-[400%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#6366f1_100%)]"></span>
<span className="absolute inset-0 rounded-full bg-white/10 transition-opacity duration-300 group-hover:opacity-0"></span>
<span className="flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-indigo-200 text-sm font-medium text-white tracking-tight bg-zinc-950 w-full h-full rounded-full px-8 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
<span className="relative z-10">Explore Methodology</span>
</span>
</a>
</div>
</div>
</div>
</main>
</div>

<div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0B0C0E] to-transparent z-[5] pointer-events-none"></div>





</section>

<div className="bg-[#0B0C0E] border-t border-white/5 min-h-screen flex flex-col lg:flex-row lg:p-6 gap-6 lg:pt-24 pt-24 pr-4 pb-4 pl-4 relative" id="problem">

<div className="lg:w-5/12 flex flex-col lg:pl-10 lg:pr-12 w-full pt-10 pr-2 pb-10 pl-2 justify-center z-10">
<div className="flex items-center space-x-3 mb-10">
<div className="border font-medium px-3 py-1 rounded-full text-sm tracking-tight flex items-center gap-2 bg-indigo-500/10 text-indigo-400 border-indigo-500/20">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-indigo-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
            The Reality of B2B
          </div>
</div>
<h2 className="leading-[1.1] lg:text-4xl text-4xl font-thin text-white tracking-normal mb-6">
          If You’re Honest, This Is What Enterprise Selling Looks Like Today…
        </h2>
<div className="text-lg text-zinc-400 mb-10 leading-relaxed max-w-lg space-y-4">
<p className="">Your team is busy but not differentiated.</p>
<p className="">
            Deals stall at senior levels. Procurement drives the conversation.
            Discounting creeps in.
          </p>
<p className="">Pipeline looks healthy but win rates disappoint.</p>
<p className="block font-medium text-white border-indigo-500 border-l-2 mt-6 pl-4">
            The issue is not effort. It is how your team shows up in complex
            buying environments.
          </p>
</div>

<div>
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-4">
            The Cost of Inaction
          </h3>
<div className="bg-white/5 rounded-3xl p-6 shadow-sm border border-white/10 w-full max-w-md backdrop-blur-sm">
<div className="grid grid-cols-2 gap-6">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-zinc-900 rounded-lg border border-white/10 flex items-center justify-center text-zinc-400 font-medium text-sm key-shadow transform transition-all cursor-default select-none" id="key-w">
                    W
                  </div>
<span className="text-zinc-300 font-medium text-sm">
                    Price Pressure
                  </span>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-zinc-900 rounded-lg border border-white/10 flex items-center justify-center text-zinc-400 font-medium text-sm key-shadow transform transition-all cursor-default select-none" id="key-s">
                    S
                  </div>
<span className="text-zinc-300 font-medium text-sm">
                    Stalled Deals
                  </span>
</div>
</div>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-zinc-900 rounded-lg border border-white/10 flex items-center justify-center text-zinc-400 font-medium text-sm key-shadow transform transition-all cursor-default select-none" id="key-a">
                    A
                  </div>
<span className="text-zinc-300 font-medium text-sm">
                    Reduced Deal Size
                  </span>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-zinc-900 rounded-lg border border-white/10 flex items-center justify-center text-zinc-400 font-medium text-sm key-shadow transform transition-all cursor-default select-none" id="key-d">
                    D
                  </div>
<span className="text-zinc-300 font-medium text-sm">
                    Poor Forecasting
                  </span>
</div>
</div>
</div>
<p className="text-xs text-zinc-500 mt-5 pt-4 border-t border-white/5 text-center">
              Competitors who sell insight take the deal.
            </p>
</div>
</div>
</div>

<div className="lg:w-7/12 min-h-[500px] lg:min-h-full overflow-hidden w-full ring-white/10 ring-1 rounded-[32px] relative shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black"></div>
<div className="absolute top-0 right-0 p-6 z-20 flex items-center gap-4">
<span className="text-white/40 text-xs font-medium tracking-wide uppercase">
            Navigating Complexity
          </span>
<div className="h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
</div>
<div className="flex lg:p-12 z-10 overflow-hidden p-4 absolute inset-0 items-center justify-center">
<div className="aspect-[4/3] group overflow-hidden bg-black w-full h-full max-w-4xl max-h-[90%] ring-white/10 ring-1 rounded-2xl relative shadow-2xl">

<canvas className="block outline-none cursor-crosshair w-full h-full" data-engine="three.js r160" height="623" id="three-character-canvas" style={{width: '690px', height: '623px'}} width="690"></canvas>

<div className="flex absolute right-6 bottom-6 left-6 items-end justify-between pointer-events-none z-10">
<div className="bg-black/60 backdrop-blur-md border border-white/10 p-3 rounded-xl flex gap-4 text-white shadow-xl pointer-events-auto">
<div className="flex flex-col px-2">
<span className="text-[10px] uppercase opacity-70 font-medium tracking-wider text-indigo-300">
                    Deal Velocity
                  </span>
<div className="flex items-center gap-1.5">
<span className="text-sm font-medium text-zinc-300">
                      Stalled
                    </span>
</div>
</div>
<div className="w-px bg-white/10"></div>
<div className="flex flex-col px-2">
<span className="text-[10px] uppercase opacity-70 font-medium tracking-wider text-indigo-300">
                    Decision Level
                  </span>
<span className="text-sm font-medium text-zinc-300">
                    Procurement
                  </span>
</div>
</div>
</div>


</div>
</div>
</div>
</div>

<section className="border-y overflow-hidden bg-[#0B0C0E] border-white/5 pt-24 pb-24 relative" id="methodology">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] blur-[120px] rounded-full pointer-events-none bg-indigo-600/5"></div>

<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl mb-20">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-6">
            How We Improve Sales Performance
          </h2>
<p className="text-lg text-zinc-400 leading-relaxed">
            From executive positioning to prospecting modernization, here is how
            we build capability that changes revenue outcomes. Sales leaders
            drive accountability and strategic focus throughout this process.
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
                Executive-Level Positioning
              </h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-8">
                Your team learns how to engage senior decision makers with
                insight, not product pitches.
              </p>
<div className="h-32 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-4 relative overflow-hidden group-hover:bg-white/10 transition-colors">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(124,58,237,0.1),transparent)]"></div>
<div className="w-10 h-10 rounded-lg bg-[#1E1E1E] flex items-center justify-center border border-white/10 shadow-lg z-10">
<iconify-icon className="text-xl text-zinc-400" icon="solar:user-speak-linear"></iconify-icon>
</div>
<div className="w-16 h-px bg-white/20 z-0"></div>
<div className="w-10 h-10 rounded-lg bg-[#1E1E1E] flex items-center justify-center border border-white/10 shadow-lg z-10">
<iconify-icon className="text-xl text-indigo-500" icon="solar:crown-star-bold"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="group relative flex flex-col h-full">
<div className="absolute top-0 left-0 w-full h-px bg-white/10 transition-colors group-hover:bg-indigo-500/50"></div>
<div className="pt-6 pb-8 pr-6">
<span className="block text-xs font-mono text-zinc-600 transition-colors mb-4 group-hover:text-indigo-400">
                02
              </span>
<h3 className="text-lg font-medium text-white mb-3">
                Value Creation Conversations
              </h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-8">
                We develop capability to articulate concrete business outcomes,
                moving away from feature selling.
              </p>
<div className="h-32 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center px-6 gap-3 relative overflow-hidden group-hover:bg-white/10 transition-colors">
<div className="flex items-center justify-between">
<div className="text-xs text-zinc-500 font-medium">
                    Business Impact
                  </div>
<div className="w-8 h-4 rounded-full relative bg-indigo-600">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
</div>
</div>
<div className="flex items-center justify-between opacity-50">
<div className="text-xs text-zinc-500 font-medium">
                    Feature List
                  </div>
<div className="w-8 h-4 bg-zinc-700 rounded-full relative">
<div className="absolute left-0.5 top-0.5 w-3 h-3 bg-zinc-400 rounded-full shadow-sm"></div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="text-xs text-zinc-500 font-medium">
                    Differentiation
                  </div>
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
<span className="block text-xs font-mono text-zinc-600 transition-colors mb-4 group-hover:text-indigo-400">
                03
              </span>
<h3 className="text-lg font-medium text-white mb-3">
                Opportunity Discipline
              </h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-8">
                We improve qualification and deal strategy in complex sales
                environments to stop wasting time.
              </p>
<div className="h-32 rounded-xl bg-zinc-900 border border-white/10 relative overflow-hidden transition-colors group-hover:border-indigo-500/30 flex items-center justify-center">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity mix-blend-luminosity"></div>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all shadow-xl group-hover:bg-indigo-500 group-hover:border-indigo-400 relative z-10">
<iconify-icon className="text-xl" icon="solar:funnel-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="group relative flex flex-col h-full">
<div className="absolute top-0 left-0 w-full h-px bg-white/10 transition-colors group-hover:bg-indigo-500/50"></div>
<div className="pt-6 pb-8 pr-6">
<span className="block text-xs font-mono text-zinc-600 transition-colors mb-4 group-hover:text-indigo-400">
                04
              </span>
<h3 className="text-lg font-medium text-white mb-3">
                Prospecting Modernisation
              </h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-8">
                We refine outreach to increase relevance and response rates in
                crowded B2B markets.
              </p>
<div className="h-32 rounded-xl bg-white/5 border border-white/10 relative overflow-hidden p-3 group-hover:bg-white/10 transition-colors flex items-end">
<canvas className="w-full h-full" height="102" id="miniChart" style={{display: 'block', boxSizing: 'border-box', height: '102px', width: '240px'}} width="240"></canvas>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="bg-zinc-950 border-white/5 border-t border-b pt-24 pb-24 relative" id="authority">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-4">
            Why I Focus on Modern Selling
          </h2>
<p className="text-lg text-zinc-400">
            Everything I do is about measurable improvement in win rates and
            revenue outcomes for enterprise organizations.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="group rounded-2xl border border-white/5 bg-white/5 p-6 hover:bg-white/10 hover:border-indigo-500/30 transition-all shadow-lg">
<div className="w-12 h-12 bg-black rounded-xl border border-white/10 flex items-center justify-center mb-6 transition-colors group-hover:border-indigo-500/50 text-zinc-400 group-hover:text-indigo-400">
<iconify-icon className="text-2xl" icon="solar:global-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Managing Director
            </h3>
<p className="text-zinc-400 text-sm leading-relaxed">
              I am Managing Director of Sales IQ Global, working with B2B
              organisations globally to improve win rates and revenue
              performance.
            </p>
</div>
<div className="group rounded-2xl border border-white/5 bg-white/5 p-6 hover:bg-white/10 hover:border-indigo-500/30 transition-all shadow-lg">
<div className="w-12 h-12 bg-black rounded-xl border border-white/10 flex items-center justify-center mb-6 transition-colors group-hover:border-indigo-500/50 text-zinc-400 group-hover:text-indigo-400">
<iconify-icon className="text-2xl" icon="solar:book-bookmark-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Bestselling Author
            </h3>
<p className="text-zinc-400 text-sm leading-relaxed">
              I am the author of "Combo Prospecting" and "Tech-Powered Sales",
              defining the methodology for modern sales execution.
            </p>
</div>
<div className="group rounded-2xl border border-white/5 bg-white/5 p-6 hover:bg-white/10 hover:border-indigo-500/30 transition-all shadow-lg">
<div className="w-12 h-12 bg-black rounded-xl border border-white/10 flex items-center justify-center mb-6 transition-colors group-hover:border-indigo-500/50 text-zinc-400 group-hover:text-indigo-400">
<iconify-icon className="text-2xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Value-Based Selling
            </h3>
<p className="text-zinc-400 text-sm leading-relaxed">
              I focus on helping sales leaders build disciplined teams that
              focus on creating business value, not just pitching products.
            </p>
</div>
<div className="group rounded-2xl border border-white/5 bg-white/5 p-6 hover:bg-white/10 hover:border-indigo-500/30 transition-all shadow-lg">
<div className="w-12 h-12 bg-black rounded-xl border border-white/10 flex items-center justify-center mb-6 transition-colors group-hover:border-indigo-500/50 text-zinc-400 group-hover:text-indigo-400">
<iconify-icon className="text-2xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Executive Engagement
            </h3>
<p className="text-zinc-400 text-sm leading-relaxed">
              Equipping sellers with the commercial acumen required to hold
              peer-level conversations with C-suite executives.
            </p>
</div>
<div className="group rounded-2xl border border-white/5 bg-white/5 p-6 hover:bg-white/10 hover:border-indigo-500/30 transition-all shadow-lg">
<div className="w-12 h-12 bg-black rounded-xl border border-white/10 flex items-center justify-center mb-6 transition-colors group-hover:border-indigo-500/50 text-zinc-400 group-hover:text-indigo-400">
<iconify-icon className="text-2xl" icon="solar:magnifer-zoom-in-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Opportunity Qualification
            </h3>
<p className="text-zinc-400 text-sm leading-relaxed">
              Applying rigorous discipline to the pipeline to ensure effort is
              spent on winnable deals and forecasting is accurate.
            </p>
</div>
<div className="group rounded-2xl border border-white/5 bg-white/5 p-6 hover:bg-white/10 hover:border-indigo-500/30 transition-all shadow-lg">
<div className="w-12 h-12 bg-black rounded-xl border border-white/10 flex items-center justify-center mb-6 transition-colors group-hover:border-indigo-500/50 text-zinc-400 group-hover:text-indigo-400">
<iconify-icon className="text-2xl" icon="solar:routing-2-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Leadership Capability
            </h3>
<p className="text-zinc-400 text-sm leading-relaxed">
              Enabling sales leaders to drive accountability, maintain
              forecasting discipline, and keep the team strategically focused.
            </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#0B0C0E] border-white/5 border-b pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mx-auto text-center mb-20">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-6">
            The Problem Isn’t Activity. It’s Modern Selling Capability.
          </h2>
<p className="text-lg text-zinc-400 leading-relaxed">
            Enterprise buyers are informed. They expect insight. They expect
            commercial conversations. Modern selling requires a fundamental
            shift in approach.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-6 lg:gap-8 gap-x-6 gap-y-6">
<div className="group hover:bg-white/10 hover:shadow-2xl transition-all duration-300 overflow-hidden bg-gradient-to-b from-white/10 to-white/0 rounded-3xl pt-8 pr-8 pb-8 pl-8 relative hover:border-indigo-500/30" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '24px'}}>
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-sm text-indigo-400">
<iconify-icon icon="solar:star-fall-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white">Value Creation</h3>
</div>
</div>
<p className="text-zinc-400 text-sm leading-relaxed">
              When your team can create value in every conversation, price
              becomes less central. That changes outcomes.
            </p>
</div>
<div className="group hover:bg-white/10 hover:shadow-2xl transition-all duration-300 overflow-hidden bg-gradient-to-b from-white/10 to-white/0 rounded-3xl pt-8 pr-8 pb-8 pl-8 relative hover:border-indigo-500/30" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '24px'}}>
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-sm text-indigo-400">
<iconify-icon icon="solar:user-id-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white">
                  Executive Presence
                </h3>
</div>
</div>
<p className="text-zinc-400 text-sm leading-relaxed">
              Move past procurement and technical evaluators. Engage with the
              C-suite using commercial insight and business cases.
            </p>
</div>
<div className="group hover:bg-white/10 hover:shadow-2xl transition-all duration-300 overflow-hidden bg-gradient-to-b from-white/10 to-white/0 rounded-3xl pt-8 pr-8 pb-8 pl-8 relative hover:border-indigo-500/30" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '24px'}}>
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-sm text-indigo-400">
<iconify-icon icon="solar:target-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white">
                  Strategic Opportunity Qualification
                </h3>
</div>
</div>
<p className="text-zinc-400 text-sm leading-relaxed">
              Stop deploying resources on deals you cannot win. Implement
              rigorous qualification to focus only on high-probability
              opportunities.
            </p>
</div>
<div className="group hover:bg-white/10 hover:shadow-2xl transition-all duration-300 overflow-hidden bg-gradient-to-b from-white/10 to-white/0 rounded-3xl pt-8 pr-8 pb-8 pl-8 relative hover:border-indigo-500/30" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '24px'}}>
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-sm text-indigo-400">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white">
                  Clear Differentiation
                </h3>
</div>
</div>
<p className="text-zinc-400 text-sm leading-relaxed">
              Your product is rarely truly unique. Your differentiation must
              come from the insight and experience your sales team provides.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-zinc-950 pt-24 pb-24 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-white mb-12 text-center">
          What Changes When Modern Selling Is Applied
        </h2>
<div className="columns-1 md:columns-3 space-y-6 gap-x-6 gap-y-6">
<div className="bg-[#0B0C0E] border border-white/5 rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-xl">
<h3 className="text-xl font-medium text-white mb-4">
              Higher Win Rates
            </h3>
<p className="text-zinc-400 text-sm leading-relaxed">
              Stop losing deals to "no decision" or competitors who merely sell
              cheaper features. Win on value.
            </p>
</div>
<div className="bg-[#0B0C0E] border border-white/5 rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-xl">
<h3 className="text-xl font-medium text-white mb-4">
              Larger Deal Size
            </h3>
<p className="text-zinc-400 text-sm leading-relaxed">
              By engaging executives and solving business-level problems, scope
              naturally expands alongside margins.
            </p>
</div>
<div className="bg-[#0B0C0E] border border-white/5 rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-xl">
<h3 className="text-xl font-medium text-white mb-4">
              Reduced Discounting
            </h3>
<p className="text-zinc-400 text-sm leading-relaxed">
              When value is clearly articulated and tied to commercial outcomes,
              reliance on end-of-quarter discounting vanishes.
            </p>
</div>
<div className="bg-[#0B0C0E] border border-white/5 rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-xl">
<h3 className="text-xl font-medium text-white mb-4">Stronger Access</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
              Your team stops getting delegated down to technical evaluators and
              maintains direct lines to economic buyers.
            </p>
</div>
<div className="bg-[#0B0C0E] border border-white/5 rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-xl">
<h3 className="text-xl font-medium text-white mb-4">
              Predictable Pipeline
            </h3>
<p className="text-zinc-400 text-sm leading-relaxed">
              Rigorous qualification means your forecast actually reflects
              reality, allowing for confident leadership decisions.
            </p>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
<header className="mb-12 text-center max-w-2xl mx-auto">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-4">
          Recognised Thought Leadership
        </h2>
<p className="text-lg text-zinc-400 leading-relaxed">
          Sales IQ Global works with B2B organisations globally to improve
          revenue performance. Client case studies available upon request.
        </p>
</header>
<main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<article className="group flex flex-col overflow-hidden bg-[#0B0C0E] border border-white/10 h-full rounded-2xl relative shadow-lg">
<div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-900 flex items-center justify-center p-8">
<div className="text-white opacity-80 group-hover:scale-105 transition-transform duration-500">
<iconify-icon icon="solar:book-bookmark-bold-duotone" width="64"></iconify-icon>
</div>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-4 left-4">
<span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[11px] uppercase tracking-wider font-medium ring-1 ring-inset ring-white/10">
                Bestseller
              </span>
</div>
</div>
<div className="flex flex-col flex-grow p-6">
<h4 className="text-lg font-medium text-white mb-2">
              Combo Prospecting
            </h4>
<p className="text-sm text-zinc-400 leading-relaxed">
              The authoritative guide on combining technology and human touch
              for executive access.
            </p>
</div>
</article>
<article className="group flex flex-col overflow-hidden bg-[#0B0C0E] border border-white/10 h-full rounded-2xl relative shadow-lg">
<div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-900 flex items-center justify-center p-8">
<div className="text-white opacity-80 group-hover:scale-105 transition-transform duration-500">
<iconify-icon icon="solar:laptop-minimalistic-bold-duotone" width="64"></iconify-icon>
</div>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-4 left-4">
<span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[11px] uppercase tracking-wider font-medium ring-1 ring-inset ring-white/10">
                Bestseller
              </span>
</div>
</div>
<div className="flex flex-col flex-grow p-6">
<h4 className="text-lg font-medium text-white mb-2">
              Tech-Powered Sales
            </h4>
<p className="text-sm text-zinc-400 leading-relaxed">
              Achieve superhuman sales skills through technology and modern
              outreach methodologies.
            </p>
</div>
</article>
<article className="group flex flex-col overflow-hidden bg-[#0B0C0E] border border-white/10 h-full rounded-2xl relative shadow-lg">
<div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-900">
<img alt="Corporate" className="w-full h-full object-cover opacity-60 transition duration-700 group-hover:scale-105 grayscale" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[11px] uppercase tracking-wider font-medium ring-1 ring-inset ring-white/10">
                Platform
              </span>
</div>
</div>
<div className="flex flex-col flex-grow p-6">
<h4 className="text-lg font-medium text-white mb-2">Sales IQ Global</h4>
<p className="text-sm text-zinc-400 leading-relaxed">
              The premier platform for B2B sales professionals dedicated to
              mastering modern selling.
            </p>
</div>
</article>
<article className="group flex flex-col overflow-hidden bg-[#0B0C0E] border border-white/10 h-full rounded-2xl relative shadow-lg">
<div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-900">
<img alt="Workshop" className="w-full h-full object-cover opacity-60 transition duration-700 group-hover:scale-105 grayscale" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[11px] uppercase tracking-wider font-medium ring-1 ring-inset ring-white/10">
                Advisory
              </span>
</div>
</div>
<div className="flex flex-col flex-grow p-6">
<h4 className="text-lg font-medium text-white mb-2">Global Impact</h4>
<p className="text-sm text-zinc-400 leading-relaxed">
              Working with the world's leading enterprise sales teams to drive
              predictable revenue.
            </p>
</div>
</article>
</main>
</div>

<section className="bg-zinc-950 border-white/5 border-t pt-24 pb-24" id="programs">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">
            Engagement Options
          </h2>
<p className="text-zinc-400 text-lg">
            All programs are focused on improving win rates and value creation
            for enterprise sales teams.
          </p>
</div>
<div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
<div className="p-8 rounded-3xl border border-white/10 bg-[#0B0C0E]">
<div className="mb-6">
<h3 className="text-xl font-medium text-white">
                Sales Transformation
              </h3>
<p className="text-sm text-zinc-400 mt-2">
                Comprehensive capability uplift programs.
              </p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-indigo-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                End-to-end modern selling implementation
              </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-indigo-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                Value-based selling frameworks
              </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-indigo-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                Prospecting mastery programs
              </li>
</ul>
</div>
<div className="p-8 rounded-3xl border relative overflow-hidden border-indigo-500/30 bg-indigo-500/5">
<div className="absolute top-0 right-0 text-white text-[10px] uppercase font-medium px-3 py-1 rounded-bl-xl tracking-wider bg-indigo-600">
              High Impact
            </div>
<div className="mb-6">
<h3 className="text-xl font-medium text-white">
                Executive Workshops
              </h3>
<p className="text-sm text-zinc-400 mt-2">
                Intensive capability building sessions.
              </p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-zinc-200">
<iconify-icon className="text-indigo-500 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                Executive-level engagement strategy
              </li>
<li className="flex items-start gap-3 text-sm text-zinc-200">
<iconify-icon className="text-indigo-500 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                Differentiation and commercial insight
              </li>
<li className="flex items-start gap-3 text-sm text-zinc-200">
<iconify-icon className="text-indigo-500 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                Strategic deal coaching
              </li>
</ul>
</div>
<div className="p-8 rounded-3xl border border-white/10 bg-[#0B0C0E]">
<div className="mb-6">
<h3 className="text-xl font-medium text-white">
                Leadership Advisory
              </h3>
<p className="text-sm text-zinc-400 mt-2">
                For CROs and sales directors.
              </p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-indigo-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                Pipeline discipline and forecasting
              </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-indigo-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                Sales leadership enablement
              </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-indigo-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                Keynote speaking engagements
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-[#0B0C0E] border-white/5 border-t pt-24 pb-24">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-white mb-10 text-center">
          Frequently Asked Questions
        </h2>
<div className="space-y-6">
<div className="border-b border-white/10 pb-6">
<h3 className="text-lg font-medium text-white mb-2">
              Who is this for?
            </h3>
<p className="text-zinc-400 text-sm leading-relaxed">
              B2B organisations selling complex, high-value solutions in
              competitive markets. Designed specifically for consultative,
              enterprise-level sales environments.
            </p>
</div>
<div className="border-b border-white/10 pb-6">
<h3 className="text-lg font-medium text-white mb-2">
              What makes this different from traditional sales training?
            </h3>
<p className="text-zinc-400 text-sm leading-relaxed">
              This is not generic activity-based training. The focus is
              exclusively on modern selling execution: value creation, executive
              engagement, and disciplined opportunity management.
            </p>
</div>
<div className="pb-6">
<h3 className="text-lg font-medium text-white mb-2">
              Do you work internationally?
            </h3>
<p className="text-zinc-400 text-sm leading-relaxed">
              Yes. Sales IQ Global works with organisations globally to lift
              revenue capability and execute modern sales transformation.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-zinc-950 border-white/5 border-t pt-24 pb-32 text-center" id="contact">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-white mb-6">
          Ready to Improve Win Rates and Build Real Differentiation?
        </h2>
<p className="text-lg text-zinc-400 mb-10 leading-relaxed max-w-2xl mx-auto">
          We will review your current sales challenges, identify capability
          gaps, and discuss practical steps to improve win rates. Modern buyers
          expect more. Make sure your team delivers it.
        </p>
<div className="flex justify-center">
<a className="bg-white hover:bg-zinc-200 text-black px-8 py-4 rounded-full text-base font-medium transition-colors shadow-lg shadow-white/5" href="#">
            Book a Strategy Conversation
          </a>
</div>
</div>
</section>

<footer className="bg-black border-white/10 border-t pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="bg-white/10 p-1.5 rounded-lg border border-white/20 shadow-sm flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:target-linear" width="16"></iconify-icon>
</div>
<span className="font-medium text-white">Tony J Hughes</span>
</a>
<p className="text-sm text-zinc-500 max-w-xs mb-6">
              Managing Director of Sales IQ Global. Helping B2B sales leaders
              build teams that create value instead of chasing price.
            </p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:global-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-medium text-white mb-4 text-sm">Expertise</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li>
<a className="transition-colors hover:text-white" href="#">
                  Modern Selling
                </a>
</li>
<li>
<a className="transition-colors hover:text-white" href="#">
                  Value Creation
                </a>
</li>
<li>
<a className="transition-colors hover:text-white" href="#">
                  Executive Presence
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-4 text-sm">Resources</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li>
<a className="transition-colors hover:text-white" href="#">Books</a>
</li>
<li>
<a className="transition-colors hover:text-white" href="#">
                  Sales IQ Global
                </a>
</li>
<li>
<a className="transition-colors hover:text-white" href="#">
                  Insights
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-4 text-sm">Engagement</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li>
<a className="transition-colors hover:text-white" href="#">
                  Transformation Programs
                </a>
</li>
<li>
<a className="transition-colors hover:text-white" href="#">
                  Workshops
                </a>
</li>
<li>
<a className="transition-colors hover:text-white" href="#">
                  Contact
                </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-xs text-zinc-600">
            © 2024 Tony J Hughes &amp; Sales IQ Global. All rights reserved.
          </span>
<div className="flex gap-6 text-xs text-zinc-600">
<a className="hover:text-zinc-400" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
