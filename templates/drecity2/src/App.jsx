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



      // --- THREE.JS SETUP ---
      const container = document.getElementById('canvas-container');
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x030303, 0.0015);
      scene.background = new THREE.Color(0x030303);

      const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 4000);
      camera.position.set(0, 400, 800);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      container.appendChild(renderer.domElement);

      // --- LIGHTING ---
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
      scene.add(ambientLight);

      const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
      dirLight.position.set(150, 400, 200);
      dirLight.castShadow = true;
      dirLight.shadow.mapSize.width = 2048;
      dirLight.shadow.mapSize.height = 2048;
      scene.add(dirLight);

      const backLight = new THREE.DirectionalLight(0xaaccff, 0.4);
      backLight.position.set(-200, 100, -200);
      scene.add(backLight);

      // --- CITY GENERATION ---
      const cityGroup = new THREE.Group();
      scene.add(cityGroup);

      const geometry = new THREE.BoxGeometry(1, 1, 1);
      geometry.translate(0, 0.5, 0);

      const wireMat = new THREE.LineBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.3,
          depthWrite: false,
          blending: THREE.AdditiveBlending
      });

      const solidMat = new THREE.MeshStandardMaterial({
          color: 0x111111,
          metalness: 0.8,
          roughness: 0.1,
          transparent: true,
          opacity: 0.9
      });

      const buildings = [];
      const gridSize = 32;
      const spacing = 30;
      const offset = (gridSize * spacing) / 2;

      for(let i = 0; i < gridSize; i++) {
          for(let j = 0; j < gridSize; j++) {
              if (Math.random() > 0.75) continue;

              const distFromCenter = Math.sqrt((i - gridSize/2)**2 + (j - gridSize/2)**2);
              const heightFactor = Math.max(0.1, 1 - distFromCenter / (gridSize/1.5));

              const h = Math.random() * 200 * heightFactor + 20;
              const w = Math.random() * 15 + 10;
              const d = Math.random() * 15 + 10;

              const x = i * spacing - offset;
              const z = j * spacing - offset;

              const mesh = new THREE.Mesh(geometry, solidMat.clone());
              mesh.position.set(x, 0, z);
              mesh.scale.set(w, h, d);
              mesh.castShadow = true;
              mesh.receiveShadow = true;

              const edges = new THREE.EdgesGeometry(mesh.geometry);
              const line = new THREE.LineSegments(edges, wireMat.clone());
              line.position.copy(mesh.position);
              line.scale.copy(mesh.scale);

              cityGroup.add(mesh);
              cityGroup.add(line);

              buildings.push({ mesh, line, h, x, z });
          }
      }

      const planeGeo = new THREE.PlaneGeometry(4000, 4000);
      const planeMat = new THREE.MeshStandardMaterial({
          color: 0x050505,
          roughness: 0.8,
          metalness: 0.2
      });
      const plane = new THREE.Mesh(planeGeo, planeMat);
      plane.rotation.x = -Math.PI / 2;
      plane.receiveShadow = true;
      scene.add(plane);

      // --- PARTICLES ---
      const particlesGeo = new THREE.BufferGeometry();
      const particlesCount = 2000;
      const posArray = new Float32Array(particlesCount * 3);
      for(let i = 0; i < particlesCount * 3; i++) {
          posArray[i] = (Math.random() - 0.5) * 2000;
          if(i % 3 === 1) posArray[i] = Math.random() * 600; // Y axis positive only
      }
      particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      const particlesMat = new THREE.PointsMaterial({
          size: 2,
          color: 0xffffff,
          transparent: true,
          opacity: 0.4,
          blending: THREE.AdditiveBlending
      });
      const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
      scene.add(particlesMesh);


      // --- ANIMATION STATE ---
      let scrollPercent = 0;
      let targetCamPos = { x: 0, y: 400, z: 800 };
      let targetLookAt = { x: 0, y: 0, z: 0 };

      function lerp(start, end, t) {
          return start * (1 - t) + end * t;
      }

      function updateOnScroll() {
          const bodyH = document.body.scrollHeight - window.innerHeight;
          scrollPercent = Math.max(0, Math.min(1, window.scrollY / bodyH));

          // UI Updates
          document.getElementById('bar-mesh').style.width = `${scrollPercent * 100}%`;
          document.getElementById('bar-wire').style.width = `${Math.max(0, (1 - scrollPercent * 1.5)) * 100}%`;
          document.getElementById('mesh-val').textContent = `${Math.round(scrollPercent * 100)}%`;

          document.querySelectorAll('.fade-trigger').forEach((el) => {
              const rect = el.getBoundingClientRect();
              const center = window.innerHeight / 2;
              const dist = Math.abs(rect.top + rect.height/2 - center);
              if (dist < 450) {
                  el.classList.add('fade-visible');
                  el.classList.remove('fade-enter');
                  // el.style.opacity = 1 - (dist / 450); // disabled manual opacity for CSS handling
              } else {
                 // Keep visible if passed? No, fade out.
                  el.classList.remove('fade-visible');
                  el.classList.add('fade-enter');
              }
          });

          // Camera Choreography
          targetCamPos.y = lerp(400, 20, scrollPercent); // Drop down
          targetCamPos.z = lerp(800, -300, scrollPercent); // Fly through
          targetCamPos.x = Math.sin(scrollPercent * Math.PI * 2) * 150; // Wiggle

          targetLookAt.y = lerp(0, 100, scrollPercent);

          // Material Reactivity
          buildings.forEach(b => {
             const dist = Math.abs(b.z - targetCamPos.z);
             const proximity = Math.max(0, 1 - dist/500);

             b.line.material.opacity = 0.2 + proximity * 0.8;
             b.mesh.material.opacity = Math.min(1, scrollPercent * 2.5);

             if(scrollPercent > 0.1) {
                 b.mesh.material.emissive.setHex(0xffffff);
                 b.mesh.material.emissiveIntensity = proximity * 0.3 * (scrollPercent);
             }
          });
      }

      window.addEventListener('scroll', updateOnScroll);
      window.addEventListener('resize', () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
      });

      // Initial Trigger
      document.querySelectorAll('.fade-trigger').forEach(el => el.classList.add('fade-enter'));

      const clock = new THREE.Clock();

      function animate() {
          requestAnimationFrame(animate);
          const time = clock.getElapsedTime();

          // Smooth Camera
          camera.position.x += (targetCamPos.x - camera.position.x) * 0.04;
          camera.position.y += (targetCamPos.y - camera.position.y) * 0.04;
          camera.position.z += (targetCamPos.z - camera.position.z) * 0.04;

          // LookAt with subtle idle sway
          camera.lookAt(
              targetLookAt.x + Math.sin(time * 0.3) * 20,
              targetLookAt.y,
              targetLookAt.z
          );

          // Particle Float
          particlesMesh.rotation.y = time * 0.05;
          particlesMesh.position.y = Math.sin(time * 0.2) * 20;

          renderer.render(scene, camera);
      }

      animate();
      updateOnScroll();
    
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
      

<div className="fixed top-[-20%] left-[-20%] w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_50%)] z-0 pointer-events-none"></div>

<header className="fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-6 flex justify-between items-center mix-blend-difference pointer-events-none">
<div className="flex items-center gap-3 pointer-events-auto cursor-default">
<div className="relative flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-white rounded-full z-10"></div>
<div className="absolute w-full h-full bg-white/50 rounded-full animate-ping"></div>
</div>
<h1 className="text-sm font-bold tracking-tight uppercase text-white">
          dre.mortgage
        </h1>
</div>
<div className="flex items-center gap-8">
<div className="hidden md:flex flex-col items-end text-right">
<span className="text-[10px] font-semibold tracking-widest text-white/40 uppercase">
            Network
          </span>
<span className="text-xs font-mono text-white tracking-widest" id="status-text">
            MAINNET ALPHA
          </span>
</div>
<div className="hidden md:flex flex-col items-end text-right">
<span className="text-[10px] font-semibold tracking-widest text-white/40 uppercase">
            Latency
          </span>
<span className="text-xs font-mono text-white tracking-widest">12ms</span>
</div>
<button className="pointer-events-auto group relative flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all duration-300">
<iconify-icon height="20" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</header>

<div className="fixed inset-0 z-0 bg-[#030303]" id="canvas-container"></div>

<div className="relative z-10 w-full h-[1000vh]">

<div className="absolute top-[35vh] w-full flex flex-col items-center justify-center text-center px-4 pointer-events-none fade-trigger">
<h2 className="text-7xl md:text-9xl font-semibold tracking-tighter text-gradient leading-[0.9] pb-4 drop-shadow-2xl">
          Real Yield.
          <br/>
          Paid Daily.
        </h2>
<p className="mt-8 text-base md:text-lg text-gray-400 font-medium max-w-lg leading-relaxed tracking-wide">
          The only way to access private property credit yield, onchain
        </p>
</div>

<div className="absolute top-[150vh] w-full flex flex-col items-center justify-center text-center px-4 pointer-events-none fade-trigger opacity-0">
<h2 className="text-6xl md:text-8xl font-semibold tracking-tighter text-white mb-16">
          Core Pillars
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full px-4">

<div className="glass-card p-8 rounded-2xl flex flex-col items-start text-left pointer-events-auto transition-all duration-300 group">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2">Trustless Architecture</h3>
<p className="text-sm text-gray-400 leading-relaxed">
              Fully collateralized with verifiable RWAs held by regulated US
              custodians. No black boxes.
            </p>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col items-start text-left pointer-events-auto transition-all duration-300 group">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon icon="solar:global-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2">Global Liquidity</h3>
<p className="text-sm text-gray-400 leading-relaxed">
              Instant settlement worldwide. Access transparent high-yield
              products from any wallet.
            </p>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col items-start text-left pointer-events-auto transition-all duration-300 group">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2">Self-Custody</h3>
<p className="text-sm text-gray-400 leading-relaxed">
              Your keys, your yield. Intuitive interface powered by account
              abstraction.
            </p>
</div>
</div>
</div>

<div className="absolute top-[900vh] w-full flex flex-col items-center justify-center text-center px-4 pointer-events-none fade-trigger opacity-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"></div>
<span className="text-[10px] uppercase tracking-widest text-white font-semibold">
            Spots Limited
          </span>
</div>
<h2 className="text-7xl md:text-9xl font-semibold tracking-tighter text-white mb-10 leading-none">
          Banking
          <br/>
          Reimagined
        </h2>
<button className="pointer-events-auto px-10 py-5 bg-white text-black text-xs font-bold tracking-[0.2em] uppercase rounded-full hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] transition-all duration-300">
          Request Early Access
        </button>
</div>

<div className="absolute top-[550vh] w-full flex flex-col items-center justify-center text-center px-4 pointer-events-none fade-trigger opacity-0">
<h2 className="text-6xl md:text-8xl font-semibold tracking-tighter text-white mb-16">
          Redefining Finance
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl w-full">

<div className="glass-card p-8 rounded-xl flex items-start gap-6 hover:bg-white/10 transition-colors pointer-events-auto">
<div className="p-3 bg-white/5 rounded-lg border border-white/10">
<iconify-icon className="text-white" icon="solar:user-id-linear" width="28"></iconify-icon>
</div>
<div className="text-left">
<h3 className="text-lg font-semibold text-white mb-1">
                Seamless Onboarding
              </h3>
<p className="text-sm text-gray-400">
                Login via Email or Google. Smart contract wallet deployed
                instantly. Zero friction.
              </p>
</div>
</div>

<div className="glass-card p-8 rounded-xl flex items-start gap-6 hover:bg-white/10 transition-colors pointer-events-auto">
<div className="p-3 bg-white/5 rounded-lg border border-white/10">
<iconify-icon className="text-white" icon="solar:graph-up-linear" width="28"></iconify-icon>
</div>
<div className="text-left">
<h3 className="text-lg font-semibold text-white mb-1">
                Compound Daily
              </h3>
<p className="text-sm text-gray-400">
                Yield is distributed every 24 hours. Watch your balance grow in
                real-time.
              </p>
</div>
</div>

<div className="glass-card p-8 rounded-xl flex items-start gap-6 hover:bg-white/10 transition-colors pointer-events-auto">
<div className="p-3 bg-white/5 rounded-lg border border-white/10">
<iconify-icon className="text-white" icon="solar:card-transfer-linear" width="28"></iconify-icon>
</div>
<div className="text-left">
<h3 className="text-lg font-semibold text-white mb-1">
                Instant Liquidity
              </h3>
<p className="text-sm text-gray-400">
                Direct fiat on-ramps. 1:1 redemption for USDC instantly,
                24/7/365.
              </p>
</div>
</div>

<div className="glass-card p-8 rounded-xl flex items-start gap-6 hover:bg-white/10 transition-colors pointer-events-auto">
<div className="p-3 bg-white/5 rounded-lg border border-white/10">
<iconify-icon className="text-white" icon="solar:eye-linear" width="28"></iconify-icon>
</div>
<div className="text-left">
<h3 className="text-lg font-semibold text-white mb-1">
                Radical Transparency
              </h3>
<p className="text-sm text-gray-400">
                On-chain proof of reserves. Monthly audit reports available
                directly in-app.
              </p>
</div>
</div>
</div>
</div>

<div className="absolute top-[750vh] w-full flex flex-col items-center justify-center text-center px-4 pointer-events-none fade-trigger opacity-0">
<h2 className="text-6xl md:text-8xl font-semibold tracking-tighter text-white mb-20">
          Trajectory
        </h2>
<div className="flex flex-col md:flex-row gap-0 relative w-full max-w-4xl justify-between px-10">
<div className="hidden md:block absolute top-[9px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent z-0"></div>
<div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left md:w-64 pb-12 md:pb-0">
<div className="w-5 h-5 bg-[#030303] border-2 border-white rounded-full mb-6 shadow-[0_0_15px_white]"></div>
<span className="text-xs font-mono text-white mb-2 tracking-widest">
              Q1 2026
            </span>
<h4 className="text-xl font-bold text-white mb-2">Foundation</h4>
<p className="text-xs text-gray-400 leading-relaxed">
              Public MVP Launch, dreUSD release, Legal Framework established.
            </p>
</div>
<div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left md:w-64 pb-12 md:pb-0">
<div className="w-5 h-5 bg-[#030303] border-2 border-gray-600 rounded-full mb-6"></div>
<span className="text-xs font-mono text-gray-500 mb-2 tracking-widest">
              Q2 2026
            </span>
<h4 className="text-xl font-bold text-gray-300 mb-2">Expansion</h4>
<p className="text-xs text-gray-500 leading-relaxed">
              High Yield Vaults, Debit Card Beta, Institutional APIs.
            </p>
</div>
<div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left md:w-64">
<div className="w-5 h-5 bg-[#030303] border-2 border-gray-800 rounded-full mb-6"></div>
<span className="text-xs font-mono text-gray-600 mb-2 tracking-widest">
              Q3 2026
            </span>
<h4 className="text-xl font-bold text-gray-500 mb-2">Ecosystem</h4>
<p className="text-xs text-gray-600 leading-relaxed">
              Tokenized Stocks, Cross-chain bridge, Governance Launch.
            </p>
</div>
</div>
</div>

<div className="absolute top-[350vh] w-full flex flex-col items-center justify-center text-center px-4 pointer-events-none fade-trigger opacity-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8">
<iconify-icon className="text-white" icon="solar:cpu-linear" width="14"></iconify-icon>
<span className="text-[10px] uppercase tracking-widest text-white font-semibold">
            System Active
          </span>
</div>
<h2 className="text-7xl md:text-9xl font-semibold tracking-tighter text-white">
          Urban
          <br/>
          Ecosystem
        </h2>
</div>
</div>

<div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col gap-4 w-72 p-5 rounded-2xl border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl shadow-2xl">
<div className="flex justify-between items-center mb-1">
<span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
          Live Metrics
        </span>
<div className="flex gap-2">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
</div>
</div>
<div className="transition-all duration-300 ease-in-out">
<div className="space-y-2 mt-2">
<div className="flex justify-between text-[11px] font-medium text-gray-300">
<span>Render Load</span>
<span className="font-mono" id="mesh-val">0%</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-white shadow-[0_0_10px_white] transition-all duration-75 ease-out w-0" id="bar-mesh"></div>
</div>
</div>
<div className="space-y-2 mt-4">
<div className="flex justify-between text-[11px] font-medium text-gray-300">
<span>Opacity Index</span>
<span className="font-mono" id="wire-val">100%</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-gray-500 transition-all duration-75 ease-out w-full" id="bar-wire"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 mt-4">
<div>
<p className="text-[9px] text-gray-500 uppercase tracking-widest font-semibold mb-1">
              TVL
            </p>
<p className="text-sm font-mono text-white">$125.4M</p>
</div>
<div className="text-right">
<p className="text-[9px] text-gray-500 uppercase tracking-widest font-semibold mb-1">
              Current APY
            </p>
<p className="text-sm font-mono text-white text-emerald-400">5.42%</p>
</div>
</div>
</div>
</div>

<div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-30 pointer-events-none mix-blend-difference opacity-70 animate-bounce">
<div className="flex flex-col items-center gap-2">
<span className="text-[9px] uppercase tracking-[0.3em] text-white">
          Scroll
        </span>
<iconify-icon className="text-white" icon="solar:arrow-down-linear" width="20"></iconify-icon>
</div>
</div>


    </>
  );
}
