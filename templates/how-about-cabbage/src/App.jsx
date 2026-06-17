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
      
{
"imports": {
"three": "https://unpkg.com/three@0.160.0/build/three.module.js",
"three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/"
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Initialize Lucide Icons
    lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

    // Custom Cursor Logic
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorTrail = document.querySelector('.cursor-trail');
    const interactables = document.querySelectorAll('.interactable');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let trailX = window.innerWidth / 2;
    let trailY = window.innerHeight / 2;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    function animateCursor() {
      const ease = 0.15;
      trailX += (mouseX - trailX) * ease;
      trailY += (mouseY - trailY) * ease;
      cursorTrail.style.left = `${trailX}px`;
      cursorTrail.style.top = `${trailY}px`;
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    interactables.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });

    // Parallax Effect
    const parallaxContainer = document.getElementById('parallax-container');
    document.addEventListener('mousemove', (e) => {
      const xOffset = (e.clientX / window.innerWidth - 0.5) * 30;
      const yOffset = (e.clientY / window.innerHeight - 0.5) * 30;
      parallaxContainer.style.transform = `translate(${-xOffset}px, ${-yOffset}px)`;
    });

    // Interactive Soil Area
    const soilArea = document.getElementById('soil-area');
    soilArea.addEventListener('click', (e) => {
      const rect = soilArea.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const model = document.createElement('div');
      model.className = 'cabbage-instance flex items-center justify-center';
      model.style.left = `${x}px`;
      model.style.top = `${y}px`;
      
      const img = document.createElement('img');
      const isRed = Math.random() < (1 / 6);
      img.src = isRed 
        ? 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2c4261e4-a0c9-4144-9eeb-f48bca3ecd6c_320w.png'
        : 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8c3bbe4a-df14-4dcd-8da0-43d17044e188_320w.png';
      img.className = 'w-20 h-20 md:w-28 md:h-28 object-contain drop-shadow-xl';
      
      model.appendChild(img);
      soilArea.appendChild(model);

      setTimeout(() => {
         model.style.transition = 'opacity 2s ease-in-out, transform 2s ease';
         model.style.opacity = '0';
         model.style.transform = 'translate(-50%, -50%) scale(0.8) translateY(-20px)';
         setTimeout(() => model.remove(), 2000);
      }, 4000);
    });

    // Login Modal Logic
    const joinBtn = document.getElementById('join-btn');
    const loginModal = document.getElementById('login-modal');
    const closeBtn = document.getElementById('close-login');
    const loginBox = document.getElementById('login-box');

    function openModal(e) {
      if(e) e.preventDefault();
      loginModal.classList.remove('opacity-0', 'pointer-events-none');
      loginBox.classList.remove('translate-y-12');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      loginModal.classList.add('opacity-0', 'pointer-events-none');
      loginBox.classList.add('translate-y-12');
      document.body.style.overflow = '';
    }

    joinBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    loginModal.addEventListener('click', (e) => {
      if (e.target === loginModal) closeModal();
    });
  


    import * as THREE from 'three';
    import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

    // 1. Setup Scene, Camera, Renderer
    const container = document.getElementById('cabbage-3d-canvas');
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 3, 10);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 4;
    controls.maxDistance = 18;

    let isInteracting = false;
    controls.addEventListener('start', () => isInteracting = true);
    controls.addEventListener('end', () => isInteracting = false);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(5, 8, 5);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0xfffdd0, 2, 8);
    pointLight.position.set(0, -0.5, 0); // Warm light from bottom center
    scene.add(pointLight);

    // 4. Cabbage Group Construction
    const cabbageGroup = new THREE.Group();
    scene.add(cabbageGroup);

    // Materials
    const leafMaterial = new THREE.MeshStandardMaterial({
      color: 0x4caf50,
      transparent: true,
      opacity: 0.75,
      roughness: 0.2,
      metalness: 0.1,
      side: THREE.DoubleSide
    });

    const heartMaterial = new THREE.MeshStandardMaterial({
      color: 0xfffdd0,
      roughness: 0.9,
      metalness: 0.0
    });

    const rootMaterial = new THREE.MeshStandardMaterial({
      color: 0xe8eed2,
      roughness: 0.8
    });

    // Sub-parts: Root
    const rootGeo = new THREE.CylinderGeometry(0.3, 0.2, 0.6, 32);
    const rootMesh = new THREE.Mesh(rootGeo, rootMaterial);
    rootMesh.position.y = -1.1;
    cabbageGroup.add(rootMesh);

    // Sub-parts: Heart
    const heartGeo = new THREE.SphereGeometry(0.85, 32, 32);
    const heartMesh = new THREE.Mesh(heartGeo, heartMaterial);
    heartMesh.position.y = -0.2;
    cabbageGroup.add(heartMesh);

    // Sub-parts: Layers (Spheres simulating overlapping leaves)
    const layers = [
      { radius: 1.15, opacity: 0.85, scaleY: 1.05, posY: -0.1, topOpen: 0.15 },
      { radius: 1.35, opacity: 0.70, scaleY: 1.15, posY:  0.0, topOpen: 0.25 },
      { radius: 1.55, opacity: 0.55, scaleY: 1.25, posY:  0.1, topOpen: 0.35 }
    ];

    layers.forEach((layer, index) => {
      const mat = leafMaterial.clone();
      mat.opacity = layer.opacity;
      // Darken outer layers
      mat.color.lerp(new THREE.Color(0x2e7d32), index * 0.35); 
      
      // Geometry with top slightly open
      const geo = new THREE.SphereGeometry(
        layer.radius, 32, 32, 
        0, Math.PI * 2, 
        Math.PI * layer.topOpen, Math.PI - Math.PI * layer.topOpen
      );
      
      const mesh = new THREE.Mesh(geo, mat);
      mesh.scale.set(1, layer.scaleY, 1);
      mesh.position.y = layer.posY;
      
      // Rotate layers alternately to make it look organic
      mesh.rotation.y = index * (Math.PI / 2.5);
      
      cabbageGroup.add(mesh);
    });

    // Sub-parts: Top Leaves (Stretched and bent slightly outward)
    const topLeafGeo = new THREE.SphereGeometry(0.5, 32, 32);
    for(let i = 0; i < 3; i++) {
      const mat = leafMaterial.clone();
      mat.opacity = 0.8;
      mat.color.setHex(0x66bb6a); // slightly brighter tips

      const leaf = new THREE.Mesh(topLeafGeo, mat);
      leaf.scale.set(1.2, 2.8, 0.4);
      
      const angle = (i / 3) * Math.PI * 2;
      const radius = 0.7;
      
      leaf.position.x = Math.cos(angle) * radius;
      leaf.position.z = Math.sin(angle) * radius;
      leaf.position.y = 1.3;
      
      leaf.lookAt(0, 0, 0);
      leaf.rotateX(-Math.PI / 6); // Bend outward
      
      cabbageGroup.add(leaf);
    }

    // Add slight natural tilt
    cabbageGroup.rotation.x = 0.15;
    cabbageGroup.rotation.z = -0.1;

    // 5. Particles Setup
    const particleGeo = new THREE.BufferGeometry();
    const particleCount = 200;
    const posArray = new Float32Array(particleCount * 3);

    for(let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 12; // Spread around 12 units
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.06,
      color: 0xdfd322,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particleGeo, particleMat);
    scene.add(particlesMesh);

    // 6. Animation Loop
    const clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);
      
      const elapsedTime = clock.getElapsedTime();

      // Slow auto-rotation (~0.5 deg/sec roughly 0.008 rad) when not interacting
      if (!isInteracting) {
          cabbageGroup.rotation.y += 0.003; 
      }

      // Gentle floating effect
      cabbageGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.1;

      // Swirling particles
      particlesMesh.rotation.y = elapsedTime * 0.03;
      const positions = particlesMesh.geometry.attributes.position.array;
      for(let i = 1; i < particleCount * 3; i += 3) {
          positions[i] += 0.01; // Move up
          if(positions[i] > 6) {
              positions[i] = -6; // Reset to bottom
          }
      }
      particlesMesh.geometry.attributes.position.needsUpdate = true;

      controls.update();
      renderer.render(scene, camera);
    }
    
    animate();

    // 7. Responsive Resize Handler
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, container.clientHeight);
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
      
<div className="cursor-dot"></div>
<div className="cursor-trail" style={{left: '609.5px', top: '446.5px'}}></div>

<div className="fixed inset-0 z-50 flex items-center justify-center opacity-0 pointer-events-none transition-all duration-500 backdrop-blur-md bg-white/30" id="login-modal">
<div className="bg-[#f4f4f4] border border-[#1a1a1a] p-10 md:p-14 max-w-lg w-full relative transform translate-y-12 transition-all duration-500 ease-out shadow-[0_20px_50px_rgba(0,0,0,0.1)]" id="login-box">
<button className="absolute top-6 right-6 text-[#1a1a1a] hover:rotate-90 transition-transform duration-300 interactable" id="close-login">
<i className="w-6 h-6" data-lucide="x"></i>
</button>
<div className="text-xs font-semibold tracking-widest uppercase mb-4 text-gray-500">Access Node</div>
<h2 className="text-4xl font-semibold tracking-tight mb-2">Join the Lab</h2>
<p className="text-lg text-gray-600 mb-10">Authenticate to access advanced vegetal research datasets.</p>
<form className="space-y-8">
<div className="space-y-2 relative group">
<label className="text-xs font-semibold tracking-widest uppercase text-gray-500">Email Identifier</label>
<input className="w-full bg-transparent border-b border-[#1a1a1a]/30 py-3 outline-none focus:border-[#1a1a1a] transition-colors rounded-none text-lg interactable" placeholder="researcher@institute.com" type="email"/>
</div>
<div className="space-y-2 relative group">
<label className="text-xs font-semibold tracking-widest uppercase text-gray-500">Security Key</label>
<input className="w-full bg-transparent border-b border-[#1a1a1a]/30 py-3 outline-none focus:border-[#1a1a1a] transition-colors rounded-none text-lg interactable" placeholder="••••••••" type="password"/>
</div>
<label className="flex items-center gap-4 cursor-pointer group mt-6 interactable">
<div className="relative w-5 h-5 border border-[#1a1a1a] flex items-center justify-center group-hover:border-[#dfd322] transition-colors bg-white">
<input className="peer sr-only" type="checkbox"/>
<div className="w-3 h-3 bg-[#dfd322] scale-0 peer-checked:scale-100 transition-transform duration-200 ease-out"></div>
</div>
<span className="text-sm font-medium tracking-tight select-none">Preserve session state</span>
</label>
<button className="w-full bg-[#1a1a1a] text-white py-4 font-semibold text-lg hover:bg-[#dfd322] hover:text-[#1a1a1a] transition-colors duration-300 mt-8 interactable flex items-center justify-center gap-2" type="button">
          Initialize Connect <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</form>
</div>
</div>
<div className="min-h-screen flex flex-col" id="parallax-container">

<header className="flex justify-between items-center py-6 px-6 md:px-12 max-w-[1600px] w-full mx-auto relative z-10">
<div className="text-2xl font-semibold tracking-tight interactable">CABBAGE</div>
<nav className="hidden md:flex items-center gap-10 text-sm font-medium tracking-tight">
<a className="hover:text-gray-500 transition-colors interactable relative group" href="#">
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1a1a1a] transition-all group-hover:w-full"></span>
</a>
<a className="hover:text-gray-500 transition-colors interactable relative group" href="#">
          Story
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1a1a1a] transition-all group-hover:w-full"></span>
</a>
<a className="hover:text-gray-500 transition-colors interactable relative group" href="#">
          Collection
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1a1a1a] transition-all group-hover:w-full"></span>
</a>
<a className="hover:text-gray-500 transition-colors interactable relative group" href="#">
          About
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1a1a1a] transition-all group-hover:w-full"></span>
</a>
<button className="bg-[#dfd322] px-8 py-2.5 text-[#1a1a1a] font-semibold hover:bg-[#c9bf1f] transition-colors interactable" id="join-btn">JOIN</button>
</nav>

<button className="md:hidden interactable"><i className="w-6 h-6" data-lucide="menu"></i></button>
</header>

<main className="flex-grow flex flex-col justify-center px-6 md:px-12 max-w-[1600px] w-full mx-auto pt-10 pb-20">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
<div className="lg:col-span-7 space-y-8 pr-0 lg:pr-12">
<div className="text-xs font-semibold uppercase tracking-widest text-gray-500 flex items-center gap-3">
<span className="w-8 h-[1px] bg-gray-400"></span>
            Vegetal Couture / SS26
          </div>
<h1 className="text-7xl md:text-9xl font-semibold tracking-tighter leading-[0.85]">
            CABBAGE
            <span className="text-5xl md:text-7xl mt-6 block tracking-tight">大白菜</span>
</h1>
<p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed mt-8 font-medium">
            从农田到秀场，一颗大白菜的先锋美学实验。<br/>
            用前沿视觉重构自然，探索有机形态的无界可能。
          </p>
<div className="flex flex-col sm:flex-row gap-4 pt-6">
<button className="bg-[#dfd322] px-10 py-5 text-[#1a1a1a] font-semibold text-lg hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(223,211,34,0.3)] transition-all duration-300 interactable flex items-center justify-center gap-3">
               Explore Now <i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</button>
<button className="border border-[#1a1a1a] px-10 py-5 text-[#1a1a1a] font-semibold text-lg hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 interactable flex items-center justify-center gap-3 group">
<i className="w-5 h-5 group-hover:fill-white transition-colors" data-lucide="play"></i> Watch Motion
             </button>
</div>
</div>
<div className="lg:col-span-5 h-[500px] lg:h-[700px] w-full bg-[#ebebeb] border border-[#1a1a1a]/10 plant-card overflow-hidden relative interactable">
<img alt="Fresh Napa Cabbage Wedges in Sunlight" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d2baf351-c447-4afa-9935-ac9d0d521450_1600w.jpg"/>
<div className="absolute inset-0 border border-[#1a1a1a]/5 pointer-events-none z-10 mix-blend-overlay"></div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 border border-[#1a1a1a] shadow-[8px_8px_0px_rgba(26,26,26,1)] hover:shadow-[4px_4px_0px_rgba(26,26,26,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 interactable bg-[#f4f4f4]">
<div className="bg-[#dfd322] p-8 md:p-10 font-semibold flex items-center justify-center text-xl tracking-tight border-b md:border-b-0 md:border-r border-[#1a1a1a]">
          24/25 MARCH
        </div>
<div className="bg-[#1a1a1a] text-white p-8 md:p-10 font-semibold flex items-center justify-center text-xl tracking-tight border-b md:border-b-0 md:border-r border-[#1a1a1a]">
          RUNWAY FARM SHOW
        </div>
<div className="p-8 md:p-10 font-semibold flex items-center justify-center text-xl tracking-tight text-[#1a1a1a]">
          BEIJING / SHANGHAI
        </div>
</div>
</main>

<section className="border-t border-[#1a1a1a]/10 bg-white">
<div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32">
<div className="mb-16">
<div className="text-sm font-semibold tracking-tight mb-8">CABBAGE</div>
<h2 className="text-6xl md:text-8xl font-semibold tracking-tighter uppercase leading-none">
            Growth / <br className="md:hidden"/> Stage 02
          </h2>
<p className="text-2xl font-medium mt-6 tracking-tight text-gray-600">卷心形成 / Heading Formation</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
<div className="plant-card h-[400px] md:h-[600px] border border-[#1a1a1a]/10 overflow-hidden relative interactable bg-[#ebebeb]">
<img alt="Close-Up of Fresh Napa Cabbage Leaves" className="w-full h-full object-cover origin-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fc1acbce-9086-4323-817d-aeeeddea9ba2_1600w.jpg"/>
</div>
<div className="flex flex-col justify-center gap-8">
<div className="bg-[#dfd322] p-10 md:p-16 text-[#1a1a1a] border border-[#1a1a1a] interactable hover:bg-[#1a1a1a] hover:text-[#dfd322] transition-colors duration-500 flex flex-col justify-center group shadow-[8px_8px_0px_rgba(26,26,26,1)]">
<h3 className="text-3xl md:text-5xl font-semibold tracking-tight leading-none mb-4 group-hover:translate-x-2 transition-transform duration-300">DAY 21-55</h3>
<h4 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-none group-hover:translate-x-2 transition-transform duration-300 delay-75">LEAF LAYERING</h4>
</div>
<div className="bg-[#f4f4f4] p-10 md:p-16 border border-[#1a1a1a] interactable hover:bg-white transition-colors duration-500 relative overflow-hidden group">
<div className="absolute inset-0 bg-[#dfd322] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
<p className="text-2xl md:text-3xl font-medium leading-relaxed tracking-tight relative z-10 group-hover:text-[#1a1a1a] transition-colors duration-300 delay-100">
                    精准控水、控氮<br/>
<span className="opacity-60">形成紧实叶球轮廓</span>
</p>
<i className="absolute bottom-10 right-10 w-12 h-12 opacity-10 group-hover:opacity-100 transition-opacity duration-500 relative z-10 group-hover:stroke-[#1a1a1a]" data-lucide="droplets"></i>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full h-[60vh] min-h-[500px] bg-[#111111] border-t border-[#1a1a1a] overflow-hidden flex flex-col items-center justify-center cursor-crosshair group interactable" id="soil-area">
<div className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-700 group-hover:opacity-30" style={{backgroundImage: 'radial-gradient(#dfd322 1.5px, transparent 1.5px)', backgroundSize: '32px 32px'}}></div>
<div className="z-10 text-center pointer-events-none mix-blend-difference">
<i className="w-12 h-12 text-[#dfd322] mx-auto mb-6 stroke-[1.5]" data-lucide="microscope"></i>
<h2 className="text-[#dfd322] text-4xl md:text-5xl font-semibold mb-4 tracking-tighter">EXPERIMENTAL SOIL</h2>
<p className="text-gray-400 text-lg tracking-tight font-medium">Click anywhere to cultivate a new instance.</p>
</div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
</section>

<section className="relative w-full h-[80vh] min-h-[600px] bg-gradient-to-b from-[#1a1a1a] to-[#0a1f10] overflow-hidden flex items-center justify-center interactable">

<div className="absolute top-10 left-6 md:top-16 md:left-12 z-10 pointer-events-none">
<div className="text-[#dfd322] text-xs font-semibold tracking-widest uppercase mb-4 flex items-center gap-3">
<span className="w-8 h-[1px] bg-[#dfd322]"></span>
          Interactive Node
        </div>
<h2 className="text-white text-4xl md:text-6xl font-semibold tracking-tighter mb-4">
          CABBAGE <span className="text-3xl md:text-5xl font-light">· 360° VIEW</span>
</h2>
<p className="text-gray-400 text-sm md:text-base tracking-widest uppercase font-medium">
          鼠标拖拽旋转 / 滚轮缩放
        </p>
</div>

<div className="absolute inset-0 z-0" id="cabbage-3d-canvas"><canvas data-engine="three.js r160" height="1071" style={{display: 'block', width: '1219px', height: '714px', touchAction: 'none'}} width="1828"></canvas><canvas data-engine="three.js r160" height="1071" style={{display: 'block', width: '1219px', height: '714px', touchAction: 'none'}} width="1828"></canvas></div>
</section>
<footer className="bg-[#1a1a1a] text-gray-500 py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-sm tracking-tight border-t border-[#dfd322]/20 relative z-10">
<p>© 2024 Cabbage Design Research. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-[#dfd322] transition-colors interactable" href="#">Twitter</a>
<a className="hover:text-[#dfd322] transition-colors interactable" href="#">Instagram</a>
<a className="hover:text-[#dfd322] transition-colors interactable" href="#">Lab Index</a>
</div>
</footer>
</div>




    </>
  );
}
