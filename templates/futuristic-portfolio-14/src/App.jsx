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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    import * as THREE from 'three';
    import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
    import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
    import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
    import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

    // --- SYSTEM STATE ---
    let progress = 0;
    let targetProgress = 0;
    const MAX_SCROLL = 5000;
    let isBooted = false;
    let audioCtx, droneOscillator, droneGain;

    // --- DOM ELEMENTS ---
    const cursorCore = document.getElementById('cursor-core');
    const bootHint = document.getElementById('boot-hint');
    const bootLog = document.getElementById('boot-log');
    const uiLayers = document.querySelectorAll('.ui-layer');
    const progressBar = document.getElementById('progress-bar');
    const sceneIndicator = document.getElementById('scene-indicator');

    // --- CURSOR LOGIC ---
    let mouse = new THREE.Vector2(0, 0);
    let targetMouse = new THREE.Vector2(0, 0);
    const trails = [];
    for(let i=0; i<5; i++) {
      const t = document.createElement('div');
      t.className = 'cursor-trail';
      document.body.appendChild(t);
      trails.push({ el: t, x: window.innerWidth/2, y: window.innerHeight/2 });
    }

    window.addEventListener('mousemove', (e) => {
      targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      
      cursorCore.style.left = e.clientX + 'px';
      cursorCore.style.top = e.clientY + 'px';
    });

    function updateCursor() {
      mouse.lerp(targetMouse, 0.1);
      
      let prevX = parseFloat(cursorCore.style.left) || window.innerWidth/2;
      let prevY = parseFloat(cursorCore.style.top) || window.innerHeight/2;
      
      trails.forEach((trail, i) => {
        trail.x += (prevX - trail.x) * (0.3 - i*0.04);
        trail.y += (prevY - trail.y) * (0.3 - i*0.04);
        trail.el.style.left = trail.x + 'px';
        trail.el.style.top = trail.y + 'px';
        trail.el.style.transform = `translate(-50%, -50%) scale(${1 - i*0.15})`;
        trail.el.style.opacity = 1 - i*0.2;
        prevX = trail.x;
        prevY = trail.y;
      });
      requestAnimationFrame(updateCursor);
    }
    updateCursor();

    // --- BOOT SEQUENCE ---
    const logs = [
      "LOADING KERNEL...", "INITIALIZING WEBGL...", "MOUNTING SHADERS...", 
      "ALLOCATING MEMORY...", "ESTABLISHING NEURAL LINK...", "SYSTEM READY."
    ];
    let logIdx = 0;
    const logInterval = setInterval(() => {
      if(logIdx < logs.length) bootLog.innerText = logs[logIdx++];
      if(logIdx === logs.length) {
        clearInterval(logInterval);
        bootHint.style.opacity = 1;
      }
    }, 300);

    document.getElementById('loader').addEventListener('click', () => {
      if(isBooted) return;
      isBooted = true;
      
      // God Mode Audio
      try {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        droneOscillator = audioCtx.createOscillator();
        droneGain = audioCtx.createGain();
        droneOscillator.type = 'sine';
        droneOscillator.frequency.value = 55; // Deep A1
        droneGain.gain.value = 0;
        droneOscillator.connect(droneGain);
        droneGain.connect(audioCtx.destination);
        droneOscillator.start();
        droneGain.gain.setTargetAtTime(0.05, audioCtx.currentTime, 2);
      } catch(e) {}

      document.getElementById('boot-title').classList.add('boot-sequence');
      bootLog.style.opacity = 0;
      bootHint.style.opacity = 0;
      
      setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        initThreeJS();
      }, 2500);
    });

    // --- THREE.JS SETUP ---
    let scene, camera, renderer, composer;
    let clock = new THREE.Clock();
    
    // SCENE OBJECTS
    let heroBlob, bgGrid;
    let particleSystem;
    let valueObjects = [];
    let portfolioGroup;
    let tunnelTube;
    let coreSphere;

    function initThreeJS() {
      const canvas = document.getElementById('webgl-canvas');
      canvas.style.pointerEvents = 'auto'; // allow raycasting

      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x020205, 0.02);

      camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(0, 0, 10);

      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Post-processing
      const renderScene = new RenderPass(scene, camera);
      const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
      bloomPass.threshold = 0.2;
      bloomPass.strength = 1.2;
      bloomPass.radius = 0.5;

      // Custom Vignette/Aberration Shader
      const VignetShader = {
        uniforms: {
          "tDiffuse": { value: null },
          "amount": { value: 1.2 },
          "time": { value: 0.0 }
        },
        vertexShader: `
          varying vec2 vUv;
          void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
        `,
        fragmentShader: `
          uniform sampler2D tDiffuse;
          uniform float amount;
          uniform float time;
          varying vec2 vUv;
          void main() {
            vec2 uv = vUv;
            // Chromatic aberration based on distance from center
            vec2 dist = uv - 0.5;
            float r = texture2D(tDiffuse, uv + dist * 0.005).r;
            float g = texture2D(tDiffuse, uv).g;
            float b = texture2D(tDiffuse, uv - dist * 0.005).b;
            vec4 color = vec4(r, g, b, 1.0);
            
            // Vignette
            float len = length(dist);
            color.rgb *= smoothstep(0.8, 0.2, len * amount);
            
            // Noise
            float noise = fract(sin(dot(uv * time, vec2(12.9898, 78.233))) * 43758.5453);
            color.rgb += noise * 0.03;
            
            gl_FragColor = color;
          }
        `
      };
      const vignetPass = new ShaderPass(VignetShader);

      composer = new EffectComposer(renderer);
      composer.addPass(renderScene);
      composer.addPass(bloomPass);
      composer.addPass(vignetPass);

      buildScenes();

      window.addEventListener('resize', onWindowResize);
      window.addEventListener('wheel', onWheel, { passive: false });
      
      animate();
      
      // Kick off UI activation for scene 1
      updateUI();
    }

    function buildScenes() {
      // 1. HERO (Blob + Grid)
      const blobGeo = new THREE.IcosahedronGeometry(2, 64);
      // Custom Shader for liquid blob
      const blobMat = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          mouse: { value: new THREE.Vector3(0,0,0) }
        },
        vertexShader: `
          uniform float time;
          uniform vec3 mouse;
          varying vec3 vNormal;
          varying vec3 vPosition;
          
          // Simplex 3D Noise (compact version)
          vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
          vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
          float snoise(vec3 v){ 
            const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
            const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
            vec3 i  = floor(v + dot(v, C.yyy) );
            vec3 x0 = v - i + dot(i, C.xxx) ;
            vec3 g = step(x0.yzx, x0.xyz);
            vec3 l = 1.0 - g;
            vec3 i1 = min( g.xyz, l.zxy );
            vec3 i2 = max( g.xyz, l.zxy );
            vec3 x1 = x0 - i1 + 1.0 * C.xxx;
            vec3 x2 = x0 - i2 + 2.0 * C.xxx;
            vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
            i = mod(i, 289.0 ); 
            vec4 p = permute( permute( permute( 
                      i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                    + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
                    + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
            float n_ = 1.0/7.0;
            vec3  ns = n_ * D.wyz - D.xzx;
            vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
            vec4 x_ = floor(j * ns.z);
            vec4 y_ = floor(j - 7.0 * x_ );
            vec4 x = x_ *ns.x + ns.yyyy;
            vec4 y = y_ *ns.x + ns.yyyy;
            vec4 h = 1.0 - abs(x) - abs(y);
            vec4 b0 = vec4( x.xy, y.xy );
            vec4 b1 = vec4( x.zw, y.zw );
            vec4 s0 = floor(b0)*2.0 + 1.0;
            vec4 s1 = floor(b1)*2.0 + 1.0;
            vec4 sh = -step(h, vec4(0.0));
            vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
            vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
            vec3 p0 = vec3(a0.xy,h.x);
            vec3 p1 = vec3(a0.zw,h.y);
            vec3 p2 = vec3(a1.xy,h.z);
            vec3 p3 = vec3(a1.zw,h.w);
            vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
            p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
            vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
            m = m * m;
            return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
          }

          void main() {
            vNormal = normal;
            float noise = snoise(position * 1.5 + time * 0.5);
            
            // Mouse repel
            float dist = distance(position, mouse);
            float repel = smoothstep(2.0, 0.0, dist) * 0.5;

            vec3 newPos = position + normal * (noise * 0.3 + repel);
            vPosition = newPos;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
          }
        `,
        fragmentShader: `
          varying vec3 vNormal;
          varying vec3 vPosition;
          void main() {
            // Fake iridescence / fresnel
            vec3 viewDir = normalize(cameraPosition - vPosition);
            float fresnel = dot(viewDir, vNormal);
            fresnel = clamp(1.0 - fresnel, 0.0, 1.0);
            fresnel = pow(fresnel, 2.0);
            
            vec3 color = mix(vec3(0.1, 0.8, 0.9), vec3(0.5, 0.2, 0.9), fresnel);
            color += vec3(fresnel) * 0.5; // highlight
            
            gl_FragColor = vec4(color, 1.0);
          }
        `,
        transparent: true,
        wireframe: true // Makes it look techy/structural
      });
      heroBlob = new THREE.Mesh(blobGeo, blobMat);
      scene.add(heroBlob);

      const gridGeo = new THREE.PlaneGeometry(100, 100, 50, 50);
      const gridMat = new THREE.MeshBasicMaterial({ color: 0x111122, wireframe: true, transparent: true, opacity: 0.1 });
      bgGrid = new THREE.Mesh(gridGeo, gridMat);
      bgGrid.rotation.x = -Math.PI / 2;
      bgGrid.position.y = -3;
      scene.add(bgGrid);

      // 2. STORY (Particles)
      const partGeo = new THREE.BufferGeometry();
      const count = 3000;
      const positions = new Float32Array(count * 3);
      for(let i=0; i<count*3; i+=3) {
        positions[i] = (Math.random() - 0.5) * 40;
        positions[i+1] = (Math.random() - 0.5) * 40;
        positions[i+2] = -20 - Math.random() * 50; // Deep in Z
      }
      partGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const partMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05, transparent: true, opacity: 0.4 });
      particleSystem = new THREE.Points(partGeo, partMat);
      scene.add(particleSystem);

      // 3. VALUE (Abstract Objects)
      const matValue = new THREE.MeshStandardMaterial({ 
        color: 0x222233, 
        roughness: 0.2, 
        metalness: 0.8,
        emissive: 0x111122
      });
      
      const obj1 = new THREE.Mesh(new THREE.TorusKnotGeometry(1, 0.3, 100, 16), matValue.clone());
      obj1.position.set(-5, 0, -80);
      
      const obj2 = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), matValue.clone());
      obj2.position.set(0, 0, -80);
      
      const obj3 = new THREE.Mesh(new THREE.OctahedronGeometry(1.5), matValue.clone());
      obj3.position.set(5, 0, -80);

      valueObjects.push(obj1, obj2, obj3);
      scene.add(obj1, obj2, obj3);

      const light = new THREE.PointLight(0xffffff, 100, 100);
      light.position.set(0, 5, -75);
      scene.add(light);

      // 4. PORTFOLIO (Grid of Cards)
      portfolioGroup = new THREE.Group();
      portfolioGroup.position.set(0, 0, -140);
      
      const planeGeo = new THREE.PlaneGeometry(3, 4);
      for(let i=0; i<6; i++) {
        const pMat = new THREE.MeshBasicMaterial({ 
          color: i%2===0 ? 0x22d3ee : 0xa78bfa, 
          transparent: true, 
          opacity: 0.1,
          wireframe: true 
        });
        const plane = new THREE.Mesh(planeGeo, pMat);
        plane.position.x = (i%3 - 1) * 4;
        plane.position.y = (Math.floor(i/3) - 0.5) * -5;
        plane.position.z = Math.random() * 2 - 1;
        portfolioGroup.add(plane);
      }
      scene.add(portfolioGroup);

      // 5. PROCESS (Tunnel)
      const path = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0, -160),
        new THREE.Vector3(5, 2, -180),
        new THREE.Vector3(-5, -2, -200),
        new THREE.Vector3(0, 0, -220)
      ]);
      const tubeGeo = new THREE.TubeGeometry(path, 64, 4, 16, false);
      const tubeMat = new THREE.MeshBasicMaterial({ color: 0x444466, wireframe: true, transparent: true, opacity: 0.05 });
      tunnelTube = new THREE.Mesh(tubeGeo, tubeMat);
      scene.add(tunnelTube);

      // 6. CTA (Core Sphere)
      const coreGeo = new THREE.SphereGeometry(3, 64, 64);
      const coreMat = new THREE.MeshStandardMaterial({
        color: 0x000000,
        emissive: 0x22d3ee,
        emissiveIntensity: 0.5,
        wireframe: true
      });
      coreSphere = new THREE.Mesh(coreGeo, coreMat);
      coreSphere.position.set(0, 0, -260);
      scene.add(coreSphere);

      const coreLight = new THREE.PointLight(0x22d3ee, 500, 100);
      coreLight.position.set(0,0,-260);
      scene.add(coreLight);
    }

    function onWheel(event) {
      if(!isBooted) return;
      event.preventDefault();
      targetProgress += event.deltaY * 0.5;
      targetProgress = Math.max(0, Math.min(targetProgress, MAX_SCROLL));
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    }

    function updateUI() {
      const normProgress = progress / MAX_SCROLL;
      progressBar.style.width = `${normProgress * 100}%`;

      // Determine active scene
      let activeScene = 1;
      if (normProgress > 0.15 && normProgress <= 0.3) activeScene = 2;
      else if (normProgress > 0.3 && normProgress <= 0.45) activeScene = 3;
      else if (normProgress > 0.45 && normProgress <= 0.65) activeScene = 4;
      else if (normProgress > 0.65 && normProgress <= 0.85) activeScene = 5;
      else if (normProgress > 0.85) activeScene = 6;

      const indicators = ["00_BOOT", "01_HERO", "02_DATA", "03_SYNC", "04_MATRIX", "05_TUNNEL", "06_CORE"];
      sceneIndicator.innerText = indicators[activeScene];

      uiLayers.forEach(layer => {
        const sceneId = parseInt(layer.getAttribute('data-scene'));
        const content = layer.querySelector('.ui-content');
        if (sceneId === activeScene) {
          content.classList.add('active');
          layer.style.pointerEvents = 'auto';
        } else {
          content.classList.remove('active');
          layer.style.pointerEvents = 'none';
        }
      });

      // Special handling for Process Tunnel Text
      if(activeScene === 5) {
        const tunnelProg = (normProgress - 0.65) / 0.2; // 0 to 1 inside tunnel
        const steps = [
          { num: "01", t: "Deconstruct" },
          { num: "02", t: "Design System" },
          { num: "03", t: "Iterate" },
          { num: "04", t: "Deliver" }
        ];
        const stepIdx = Math.min(3, Math.floor(tunnelProg * 4));
        document.getElementById('process-text-container').innerHTML = `
          <div class="text-[8rem] font-light leading-none opacity-10 tracking-tighter">${steps[stepIdx].num}</div>
          <h3 class="text-[2rem] tracking-widest uppercase mt-[-2rem] text-cyan-200">${steps[stepIdx].t}</h3>
        `;
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      if(!isBooted) return;

      const time = clock.getElapsedTime();

      // Smooth scroll interpolation
      progress += (targetProgress - progress) * 0.08;
      const normProgress = progress / MAX_SCROLL;

      // CAMERA MOVEMENT (The Journey)
      // Z movement
      let targetZ = 10 - normProgress * 280; // Moves from 10 down to -270
      camera.position.z += (targetZ - camera.position.z) * 0.1;
      
      // X/Y Wobble based on mouse & progress
      camera.position.x = mouse.x * 2;
      camera.position.y = mouse.y * 2;

      // Audio Modulation (God Mode)
      if(droneGain) {
        droneOscillator.frequency.value = 55 + (mouse.x * 10) + (normProgress * 100);
        droneGain.gain.value = 0.05 + Math.abs(mouse.y) * 0.05;
      }

      // SCENE ANIMATIONS
      
      // 1. Hero
      if (heroBlob) {
        heroBlob.rotation.y += 0.005;
        heroBlob.rotation.x += 0.002;
        heroBlob.material.uniforms.time.value = time;
        // Map mouse to 3D for blob interaction
        const vec = new THREE.Vector3(mouse.x * 5, mouse.y * 5, camera.position.z - 10);
        heroBlob.material.uniforms.mouse.value.lerp(vec, 0.1);
      }
      if (bgGrid) bgGrid.position.z = camera.position.z - 20;

      // 2. Particles
      if (particleSystem) {
        particleSystem.rotation.y = time * 0.02;
      }

      // 3. Value Objects
      valueObjects.forEach((obj, i) => {
        obj.rotation.x += 0.01 * (i+1);
        obj.rotation.y += 0.015 * (i+1);
        
        // Hover effect pseudo-logic (distance based)
        const dist = camera.position.distanceTo(obj.position);
        if(dist < 20) {
          obj.material.emissiveIntensity = 1 + Math.sin(time*5)*0.5;
        } else {
          obj.material.emissiveIntensity = 0.2;
        }
      });

      // 4. Portfolio Grid
      if (portfolioGroup) {
        portfolioGroup.children.forEach((plane, i) => {
          plane.rotation.y = Math.sin(time * 0.5 + i) * 0.1;
          plane.rotation.x = Math.cos(time * 0.5 + i) * 0.1;
        });
      }

      // 6. Core Sphere
      if (coreSphere) {
        coreSphere.rotation.y += 0.01;
        coreSphere.scale.setScalar(1 + Math.sin(time * 2) * 0.05);
        
        // Check if mouse is near center for CTA interaction
        if(normProgress > 0.85) {
          const distToCenter = Math.sqrt(mouse.x*mouse.x + mouse.y*mouse.y);
          if(distToCenter < 0.3) {
            coreSphere.material.emissiveIntensity = 2.0;
            coreSphere.scale.setScalar(1.2 + Math.sin(time * 10) * 0.1);
          } else {
            coreSphere.material.emissiveIntensity = 0.5;
          }
        }
      }

      // Update Post-processing shader uniforms
      const shaderPass = composer.passes[2];
      if (shaderPass.uniforms) {
        shaderPass.uniforms.time.value = time;
        // Increase aberration on fast scroll
        const scrollSpeed = Math.abs(targetProgress - progress);
        shaderPass.uniforms.amount.value = 1.0 + scrollSpeed * 0.05;
      }

      updateUI();
      composer.render();
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020205]" id="loader">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)]"></div>
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '4rem 4rem', maskImage: 'radial-gradient(circle at center, black, transparent 80%)', WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'}}></div>
<div className="text-center relative z-10">
<p className="text-[0.6rem] text-cyan-500/50 uppercase tracking-[0.2em] font-mono mb-4 h-4" id="boot-log"></p>
<h1 className="text-[2rem] sm:text-[3rem] tracking-[0.5rem] font-light uppercase text-white glitch-text" data-text="DENIS DESING" id="boot-title">
        DENIS DESING
      </h1>
<p className="mt-8 text-[0.6rem] text-white/30 uppercase tracking-[0.3em] font-mono animate-pulse opacity-0 transition-opacity duration-1000 cursor-pointer hover:text-white" id="boot-hint">Click to Initialize</p>
</div>
</div>

<div id="cursor-core"></div>

<canvas id="webgl-canvas"></canvas>


<div className="fixed top-6 left-6 right-6 z-50 flex justify-between items-center pointer-events-none mix-blend-difference">
<div className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-white/70">DD_OS v2.0</div>
<div className="flex gap-2">
<div className="w-12 h-px bg-white/20 relative top-[0.4rem] overflow-hidden"><div className="absolute top-0 left-0 h-full bg-white w-0" id="progress-bar"></div></div>
<div className="text-[0.6rem] font-mono text-white/50 tracking-widest" id="scene-indicator">00_BOOT</div>
</div>
</div>
<div className="absolute inset-0 z-10 pointer-events-none" id="ui-container">

<div className="ui-layer" data-scene="1">
<div className="ui-content max-w-4xl mx-auto text-center mt-32">
<div className="inline-block border border-white/10 rounded-full px-4 py-1.5 text-[0.65rem] uppercase tracking-[0.2em] text-white/50 mb-8 backdrop-blur-md">
<span className="inline-block w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 shadow-[0_0_0.5rem_#22d3ee]"></span>
          System Online
        </div>
<h2 className="text-[3rem] sm:text-[5rem] lg:text-[6rem] font-light tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
          Лучший дизайн —<br/>
          тот, которого<br/>
<span className="italic font-extralight text-cyan-100/80">не замечают.</span>
</h2>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50">
<p className="text-[0.5rem] uppercase tracking-[0.4em] mb-2 font-mono">Initiate Scroll</p>
<div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
</div>
</div>
</div>

<div className="ui-layer items-start" data-scene="2">
<div className="ui-content max-w-2xl ml-[10vw]">
<p className="text-[0.6rem] uppercase tracking-[0.4em] text-cyan-400 mb-6 font-mono">[ Memory Bank 01 ]</p>
<h3 className="text-[2.5rem] font-light tracking-tight mb-8">Смысл в данных</h3>
<p className="text-[0.9rem] leading-relaxed text-white/60 font-light mb-6">
          От визуального шума к чистой логике. Интерфейс — это не украшение, а проводник между намерением человека и архитектурой системы.
        </p>
<p className="text-[0.9rem] leading-relaxed text-white/60 font-light">
          Я проектирую цифровые среды, где каждый пиксель выполняет функцию, а форма рождается из необходимости.
        </p>
</div>
</div>

<div className="ui-layer items-end justify-center" data-scene="3">
<div className="ui-content w-full max-w-7xl mx-auto px-10 grid grid-cols-3 gap-10 translate-y-20">
<div className="glass-panel p-8 rounded-3xl group transition-all duration-500 hover:bg-white/5">
<p className="text-[0.6rem] uppercase tracking-widest text-violet-300 mb-4 font-mono">01_Sync</p>
<h4 className="text-[1.2rem] font-normal mb-3">Партнёрство</h4>
<p className="text-[0.75rem] text-white/50 leading-relaxed font-light">Слияние бизнес-задач и эстетики. Стратегический союзник в создании продукта.</p>
</div>
<div className="glass-panel p-8 rounded-3xl group transition-all duration-500 hover:bg-white/5">
<p className="text-[0.6rem] uppercase tracking-widest text-cyan-300 mb-4 font-mono">02_Grid</p>
<h4 className="text-[1.2rem] font-normal mb-3">Система</h4>
<p className="text-[0.75rem] text-white/50 leading-relaxed font-light">Масштабируемые правила. Архитектура, которая растёт без визуального хаоса.</p>
</div>
<div className="glass-panel p-8 rounded-3xl group transition-all duration-500 hover:bg-white/5">
<p className="text-[0.6rem] uppercase tracking-widest text-blue-300 mb-4 font-mono">03_Focus</p>
<h4 className="text-[1.2rem] font-normal mb-3">Точность</h4>
<p className="text-[0.75rem] text-white/50 leading-relaxed font-light">Удаление лишнего. Оставляем только то, что направляет пользователя к цели.</p>
</div>
</div>
</div>

<div className="ui-layer justify-end pb-20" data-scene="4">
<div className="ui-content text-center">
<h3 className="text-[3rem] font-light tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-violet-200">Матрица Проектов</h3>
<p className="text-[0.8rem] text-white/40 font-mono tracking-widest uppercase mb-8">Interact to expand</p>
<a className="pointer-events-auto inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-[0.7rem] uppercase tracking-widest backdrop-blur-md" href="https://www.behance.net/denis_des" target="_blank">
          Access Database
          <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="ui-layer justify-center" data-scene="5">
<div className="ui-content text-center" id="process-text-container">

</div>
</div>

<div className="ui-layer justify-center items-center" data-scene="6">
<div className="ui-content text-center pointer-events-auto">
<div className="w-64 h-64 rounded-full flex items-center justify-center cursor-pointer group relative" id="cta-core-trigger">
<div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-cyan-400/50 transition-colors duration-700 scale-[1.2] group-hover:scale-[1.5] opacity-20"></div>
<div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-violet-400/50 transition-colors duration-500 scale-[1.1] group-hover:scale-[1.3] opacity-40"></div>
<div className="relative z-10 flex flex-col items-center">
<span className="text-[0.6rem] uppercase tracking-[0.4em] text-white/60 font-mono mb-2 group-hover:text-cyan-300 transition-colors">Initiate Contact</span>
<h2 className="text-[2rem] font-light tracking-tight group-hover:scale-110 transition-transform duration-500">hello@denisdesing.com</h2>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
