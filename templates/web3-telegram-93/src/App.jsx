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



// Configure Tailwind
tailwind.config = { theme: { extend: {} } };



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    (function(){
        const canvas = document.getElementById("hero3D");
        if(!canvas || !window.THREE) return;
        const scene = new THREE.Scene();
        // Remove fog from Three.js as we handle it globally with CSS now
        // scene.fog = new THREE.FogExp2(0x050507, 0.015);
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
        camera.position.set(0, 8, 20);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha:true, antialias:true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);

        const bhUniforms = { uTime: { value: 0 }, uScroll: { value: 0 } };
        const bhMaterial = new THREE.ShaderMaterial({
          uniforms: bhUniforms,
          vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
          fragmentShader: `
            uniform float uTime; uniform float uScroll; varying vec2 vUv;
            float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
            float noise(vec2 p) { vec2 i = floor(p); vec2 f = fract(p); vec2 u = f*f*(3.0-2.0*f); return mix(mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), u.x), mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x), u.y); }
            float fbm(vec2 p) { float v = 0.0; float a = 0.5; mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5)); for (int i = 0; i < 6; i++) { v += a * noise(p); p = rot * p * 2.0; a *= 0.5; } return v; }
            void main() {
              vec2 uv = vUv * 2.0 - 1.0; float r = length(uv);
              float coreRadius = 0.18; float core = smoothstep(coreRadius + 0.02, coreRadius, r);
              float warpFactor = 0.12 / (r + 0.01); vec2 warpedUv = uv + normalize(uv) * warpFactor; float warpedR = length(warpedUv); float warpedAngle = atan(warpedUv.y, warpedUv.x);
              float swirlSpeed = uTime * 0.08; float swirl = warpedAngle - warpedR * 2.5 + swirlSpeed;
              vec2 noiseCoords = vec2(cos(swirl), sin(swirl)) * 1.8 - vec2(uTime * 0.02); float n1 = fbm(noiseCoords * 2.5); float n2 = fbm(noiseCoords * 5.0 + uTime * 0.04);
              float diskMask = smoothstep(0.9, coreRadius, r); float innerGlowMask = smoothstep(coreRadius + 0.3, coreRadius, r);
              float intensity = (n1 * 0.5 + 0.5) * diskMask; float highlight = (n2 * 0.5 + 0.5) * innerGlowMask * 2.0;
              vec3 deepSpace = vec3(0.01, 0.01, 0.02); vec3 darkViolet = vec3(0.12, 0.04, 0.25); vec3 plasmaBlue = vec3(0.2, 0.5, 0.9); vec3 coreWhite = vec3(0.9, 0.95, 1.0);
              vec3 color = mix(deepSpace, darkViolet, intensity * 1.5); color = mix(color, plasmaBlue, highlight * 0.9); color += coreWhite * pow(innerGlowMask, 4.0) * (0.3 + 0.7 * sin(swirlSpeed * 3.0 + warpedR * 15.0));
              color = mix(color, vec3(0.0), core);
              float alpha = (intensity + highlight) * diskMask; alpha = max(alpha, core); alpha *= smoothstep(1.0, 0.5, r);
              float scrollGlow = 1.0 + uScroll * 0.4; float pulse = 0.95 + 0.05 * sin(uTime * 0.5);
              gl_FragColor = vec4(color * scrollGlow * pulse, alpha);
            }
          `,
          transparent: true, depthWrite: false, blending: THREE.NormalBlending, fog: false
        });
        const bhGeo = new THREE.PlaneGeometry(180, 180); const bhMesh = new THREE.Mesh(bhGeo, bhMaterial); bhMesh.position.set(0, 12, -45); bhMesh.renderOrder = -2; scene.add(bhMesh);

        const smokeCanvas = document.createElement('canvas'); smokeCanvas.width = 512; smokeCanvas.height = 512; const ctx = smokeCanvas.getContext('2d'); const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256); gradient.addColorStop(0, 'rgba(255, 255, 255, 0.18)'); gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.05)'); gradient.addColorStop(1, 'rgba(0, 0, 0, 0)'); ctx.fillStyle = gradient; ctx.fillRect(0, 0, 512, 512); const smokeTex = new THREE.CanvasTexture(smokeCanvas);
        const smokePlanes =[]; const smokeGeo = new THREE.PlaneGeometry(100, 100);
        for (let i = 0; i < 40; i++) {
          let color = new THREE.Color(); let rand = Math.random(); if(rand < 0.4) color.setHex(0x1a153a); else if(rand < 0.7) color.setHex(0x0f2040); else color.setHex(0x050508);
          const smokeMat = new THREE.MeshBasicMaterial({ map: smokeTex, color: color, transparent: true, opacity: Math.random() * 0.5 + 0.1, depthWrite: false, blending: THREE.NormalBlending });
          const plane = new THREE.Mesh(smokeGeo, smokeMat); plane.position.set((Math.random() - 0.5) * 140, (Math.random() - 0.5) * 80 + 5, -10 - Math.random() * 30); plane.rotation.z = Math.random() * Math.PI * 2; plane.userData = { rotSpeed: (Math.random() - 0.5) * 0.002, driftX: (Math.random() - 0.5) * 0.015, driftY: (Math.random() - 0.5) * 0.01, baseOpacity: smokeMat.opacity, phaseOffset: Math.random() * Math.PI * 2, baseX: plane.position.x, baseY: plane.position.y }; plane.renderOrder = -1; scene.add(plane); smokePlanes.push(plane);
        }

        const gridUniforms = { uColor: { value: new THREE.Color(0xffffff) }, uOpacity: { value: 0.0 } };
        const gridMaterial = new THREE.ShaderMaterial({
          uniforms: gridUniforms,
          vertexShader: `varying vec3 vWorldPosition; void main() { vec4 worldPosition = modelMatrix * vec4(position, 1.0); vWorldPosition = worldPosition.xyz; gl_Position = projectionMatrix * viewMatrix * worldPosition; }`,
          fragmentShader: `uniform vec3 uColor; uniform float uOpacity; varying vec3 vWorldPosition; void main() { vec2 coord = vWorldPosition.xz * 0.55; vec2 grid = abs(fract(coord - 0.5) - 0.5) / (fwidth(coord) * 1.6); float line = min(grid.x, grid.y); float alpha = max(0.0, 1.0 - line); float dist = length(vWorldPosition.xyz - cameraPosition); float fade = 1.0 - smoothstep(12.0, 70.0, dist); gl_FragColor = vec4(uColor, alpha * fade * uOpacity); }`,
          transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, extensions: { derivatives: true }
        });
        const planeGeo = new THREE.PlaneGeometry(240, 240); planeGeo.rotateX(-Math.PI / 2); const gridPlane = new THREE.Mesh(planeGeo, gridMaterial); gridPlane.position.y = -4; scene.add(gridPlane);

        const pGeo = new THREE.BufferGeometry(); const pts = []; const vels =[];
        for(let i=0; i<600; i++) { pts.push((Math.random()-.5)*150, (Math.random()-.5)*80 + 5, (Math.random()-.5)*100 - 15); vels.push(Math.random() * 0.015 + 0.005); }
        pGeo.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3)); pGeo.setAttribute("aSpeed", new THREE.Float32BufferAttribute(vels, 1));
        const pMat = new THREE.PointsMaterial({ color: 0xc7d2fe, size: 0.02, transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending, depthWrite: false }); const glow = new THREE.Points(pGeo, pMat); scene.add(glow);

        let mouseX = 0, mouseY = 0; let targetX = 0, targetY = 0;
        window.addEventListener("mousemove", (e) => { targetX = (e.clientX / window.innerWidth - 0.5); targetY = (e.clientY / window.innerHeight - 0.5); });
        let scrollP = 0, targetScrollP = 0; const heroTrack = document.getElementById("hero-track");
        window.addEventListener("scroll", () => {
          if (heroTrack) { 
            const rect = heroTrack.getBoundingClientRect(); 
            const maxScroll = rect.height - window.innerHeight; 
            let progress = -rect.top / maxScroll; 
            targetScrollP = Math.min(0.98, Math.max(0, progress)); 
          } else { 
            targetScrollP = Math.min(0.98, Math.max(0, window.scrollY / window.innerHeight)); 
          }
        });
        window.addEventListener("resize", () => { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); });

        const clock = new THREE.Clock(); const heroContents = document.querySelectorAll('.hero-content');
        function animate() {
          requestAnimationFrame(animate); const elapsed = clock.getElapsedTime(); bhUniforms.uTime.value = elapsed;
          mouseX += (targetX - mouseX) * 0.05; mouseY += (targetY - mouseY) * 0.05;
          const targetGridOpacity = 0.06 * Math.max(0.15, (1.0 - scrollP)); gridMaterial.uniforms.uOpacity.value += (targetGridOpacity - gridMaterial.uniforms.uOpacity.value) * 0.05;
          scrollP += (targetScrollP - scrollP) * 0.04; bhUniforms.uScroll.value = scrollP;
          const baseZ = 20 - scrollP * 65; const baseY = 8 - scrollP * 6; const baseX = scrollP * 2;
          camera.position.z += (baseZ - camera.position.z) * 0.06; camera.position.y += ((baseY - mouseY * 2.0) - camera.position.y) * 0.06; camera.position.x += ((baseX + mouseX * 3.0) - camera.position.x) * 0.06;
          const targetFov = 60 + scrollP * 45; camera.fov += (targetFov - camera.fov) * 0.06; camera.updateProjectionMatrix();
          camera.lookAt(mouseX * 4.0, bhMesh.position.y - 4 + scrollP * 12, -20 - scrollP * 30);
          gridPlane.position.x = camera.position.x; gridPlane.position.z = camera.position.z; bhMesh.lookAt(camera.position);
          heroContents.forEach(el => { const scale = 1 + scrollP * 1.5; const opacity = 1 - scrollP * 2.5; el.style.transform = `scale(${scale}) translateY(${scrollP * -80}px)`; el.style.opacity = Math.max(0, opacity); el.style.pointerEvents = opacity <= 0 ? 'none' : 'auto'; });
          let sceneMouseX = mouseX * 80; let sceneMouseY = -mouseY * 50 + 10;
          smokePlanes.forEach((plane) => { plane.userData.baseX += plane.userData.driftX; plane.userData.baseY += plane.userData.driftY; let dx = plane.position.x - sceneMouseX; let dy = plane.position.y - sceneMouseY; let dist = Math.sqrt(dx*dx + dy*dy); let repelX = 0, repelY = 0; if(dist < 30) { let force = (30 - dist) / 30; repelX = (dx/dist) * force * 5; repelY = (dy/dist) * force * 5; plane.rotation.z += force * 0.01; } plane.position.x += ((plane.userData.baseX + repelX) - plane.position.x) * 0.05; plane.position.y += ((plane.userData.baseY + repelY) - plane.position.y) * 0.05; plane.rotation.z += plane.userData.rotSpeed; const wave = Math.sin(plane.position.x * 0.02 + elapsed * 0.3 + plane.userData.phaseOffset); plane.material.opacity = plane.userData.baseOpacity + (wave * 0.1); if(plane.userData.baseX > 70) plane.userData.baseX = -70; if(plane.userData.baseX < -70) plane.userData.baseX = 70; if(plane.userData.baseY > 50) plane.userData.baseY = -10; if(plane.userData.baseY < -10) plane.userData.baseY = 50; });
          const positions = glow.geometry.attributes.position.array; const speeds = glow.geometry.attributes.aSpeed.array;
          for(let i=0; i<positions.length; i+=3) { let px = positions[i]; let py = positions[i+1]; let pz = positions[i+2]; let dx = bhMesh.position.x - px; let dy = bhMesh.position.y - py; let dz = bhMesh.position.z - pz; let dist = Math.sqrt(dx*dx + dy*dy + dz*dz); let speed = speeds[i/3] * (1.0 + scrollP * 4.0); positions[i] += (dx/dist) * speed; positions[i+1] += (dy/dist) * speed; positions[i+2] += (dz/dist) * speed; positions[i] -= (dz/dist) * speed * 2.0; positions[i+2] += (dx/dist) * speed * 2.0; if(dist < 5.0 || dist > 180.0) { let angle = Math.random() * Math.PI * 2; let r = 90 + Math.random() * 60; positions[i] = Math.cos(angle) * r; positions[i+1] = bhMesh.position.y + (Math.random() - 0.5) * 60; positions[i+2] = bhMesh.position.z + Math.sin(angle) * r; } } glow.geometry.attributes.position.needsUpdate = true;
          renderer.render(scene, camera);
        }
        animate();
      })();
  


    (() => {
      const section = document.querySelector('.hardware-pipeline-section');
      if (!section) return;
      const revealTargets = section.querySelectorAll('.scroll-animate, .pipeline-step');
      const observer = new IntersectionObserver(
        (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }); },
        { threshold: 0.22, rootMargin: '0px 0px -10% 0px' }
      );
      revealTargets.forEach((el) => observer.observe(el));
    })();
  
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
      

<div className="hero-webgl-threejs"><canvas id="hero3D"></canvas></div>
<div className="fixed inset-0 -z-15 animated-dots opacity-30 pointer-events-none"></div>
<div className="fixed inset-0 -z-15 overflow-hidden pointer-events-none flex justify-center items-center">
<div className="absolute w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
<div className="absolute w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-4000 translate-x-1/4 translate-y-1/4"></div>
</div>
<div className="global-fog"></div>
<div className="scanline-effect"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl rounded-full tactile-glass px-4 py-3 flex items-center justify-between transition-transform duration-500 hover:translate-y-[-2px]">
<div className="flex items-center gap-8 pl-4">
<a className="flex items-center gap-2 text-lg font-normal text-zinc-100 tracking-tight" href="#">
<iconify-icon className="text-indigo-400" icon="solar:fox-linear" width="24"></iconify-icon>
          FoxPump
        </a>
<div className="hidden md:flex gap-6">
<a className="text-sm font-normal text-zinc-400 hover:text-zinc-100 transition-colors" href="#how-it-works">
            How It Works
          </a>
<a className="hover:text-zinc-100 transition-colors text-sm font-normal text-zinc-400" href="#features">
            Capabilities
          </a>
<a className="hover:text-zinc-100 transition-colors text-sm font-normal text-zinc-400" href="#security">
            Security
          </a>
<a className="text-sm font-normal text-zinc-400 hover:text-zinc-100 transition-colors" href="#community">
            Community
          </a>
</div>
</div>
<div className="flex items-center gap-3">
<a className="hidden text-sm font-normal text-zinc-400 hover:text-zinc-100 transition-colors md:block px-3" href="#">
          Docs
        </a>
<a className="btn-physical-light rounded-full px-5 py-2 text-sm font-normal flex items-center gap-2" href="#">
<iconify-icon icon="solar:paperclip-linear" width="18"></iconify-icon>
          Join Waitlist Bot
        </a>
</div>
</nav>



<div className="relative w-full" id="hero-track" style={{height: '350vh'}}>
<section className="sticky top-0 h-screen w-full overflow-hidden flex flex-col relative items-center justify-center pt-24 pb-12" id="hero">
<style>
    @keyframes bgPan {
      0% { background-position: 0 0; }
      100% { background-position: 40px 40px; }
    }
    @keyframes blinkNode {
      0%, 100% { background: #27272a; }
      50% { background: #10b981; box-shadow: 0 0 10px #10b981; }
    }
    @keyframes nodeFloat1 {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-6px); }
    }
    @keyframes nodeFloat2 {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-4px); }
    }
    @keyframes dataFlow {
      0% { left: -10%; opacity: 0; }
      20%, 80% { opacity: 1; }
      100% { left: 110%; opacity: 0; }
    }
    .hero-content {
      position: relative; z-index: 10; width: 100%;
      transition: transform 0.1s ease-out, opacity 0.1s ease-out;
    }
  </style>

<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 hero-content text-center relative z-20 pt-20 sm:pt-24 md:pt-28" style={{pointerEvents: 'auto'}}>
<div className="inline-flex items-center gap-3 rounded-full tactile-glass px-3 py-1.5 text-xs text-zinc-300 mb-8 shadow-2xl">
<span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,1)]"></span>
      FoxPump Protocol V1 Online
    </div>
<h1 className="mx-auto max-w-5xl text-4xl sm:text-6xl lg:text-[5.2rem] font-normal tracking-tight text-zinc-50 leading-[0.95] drop-shadow-[0_10px_40px_rgba(0,0,0,0.7)]">
<span className="block">The ultimate Pre-Launch</span>
<span className="block mt-2 text-zinc-300">Telegram Bot.</span>
</h1>
<p className="mx-auto mt-8 text-base sm:text-lg text-zinc-400 max-w-2xl">
      Launch, manage, and scale tokens on Pump.fun and BONK with 100% consensus and zero trust required.
    </p>
<div className="mt-10 flex items-center justify-center gap-4">
<a className="btn-physical-light rounded-full px-8 py-3 text-sm font-normal flex items-center gap-2" href="#">
<iconify-icon icon="solar:paperclip-linear" width="20"></iconify-icon>
        Join Waitlist Bot
      </a>
<a className="btn-physical-dark rounded-full px-8 py-3 text-sm font-normal text-zinc-300 hover:text-white flex items-center gap-2" href="#">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
        Read Documentation
      </a>
</div>
</div>

<div className="sm:px-6 lg:px-8 w-full max-w-5xl mt-20 mx-auto hero-content relative" style={{pointerEvents: 'auto'}}>
<div className="relative w-full aspect-[16/9] md:aspect-[21/9] tactile-base rounded-3xl p-3 md:p-6 flex flex-col shadow-[0_40px_100px_-20px_rgba(0,0,0,1)]">
<div className="flex-1 tactile-inset rounded-2xl p-1 relative overflow-hidden flex flex-col border border-zinc-800/50">

<div className="h-12 border-b border-zinc-900 bg-zinc-950/80 flex items-center justify-between px-4 backdrop-blur-md">
<div className="flex gap-2 items-center">
<div className="flex gap-1.5 mr-4">
<div className="w-3 h-3 rounded-full bg-zinc-800" style={{animation: 'blinkNode 2s infinite'}}></div>
<div className="w-3 h-3 rounded-full bg-zinc-800" style={{animation: 'blinkNode 2s infinite .4s'}}></div>
<div className="w-3 h-3 rounded-full bg-zinc-800" style={{animation: 'blinkNode 2s infinite .8s'}}></div>
</div>
<div className="h-6 px-3 rounded-md tactile-inset flex items-center text-xs text-zinc-500 font-mono tracking-widest border border-zinc-900">
              @foxpump_bot
            </div>
</div>
</div>

<div className="flex-1 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDBoNDBWMIgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDQwaDQwVjBIMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] relative flex items-center justify-center p-8 gap-8 overflow-hidden" style={{animation: 'bgPan 15s linear infinite'}}>
<div className="" style={{animation: 'nodeFloat1 4s ease-in-out infinite'}}>
<div className="w-32 h-32 rounded-2xl tactile-base border-t border-zinc-700/50 flex items-center justify-center flex-col gap-2 shadow-2xl relative">
<iconify-icon className="text-indigo-400" icon="solar:wallet-money-linear" width="32"></iconify-icon>
<div className="text-xs font-mono text-zinc-400 mt-2">14.5 SOL</div>
<div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-500 rounded-full border-2 border-zinc-900 shadow-[0_0_10px_#10b981]"></div>
</div>
</div>
<div className="h-2 w-32 tactile-inset rounded-full relative overflow-hidden flex items-center px-1">
<div className="h-0.5 w-full bg-zinc-800 rounded-full"></div>
<div className="absolute left-0 h-0.5 w-1/3 bg-indigo-500 rounded-full shadow-[0_0_10px_#6366f1]"></div>
<div className="absolute top-1/2 -translate-y-1/2 h-1 w-3 bg-white rounded-full shadow-[0_0_8px_#fff]" style={{animation: 'dataFlow 1.5s linear infinite'}}></div>
</div>
<div className="" style={{animation: 'nodeFloat2 3.5s ease-in-out infinite .5s'}}>
<div className="w-32 h-32 rounded-2xl tactile-base border-t border-zinc-700/50 flex items-center justify-center flex-col gap-2 shadow-2xl">
<iconify-icon className="text-emerald-400" icon="solar:rocket-linear" width="32"></iconify-icon>
<div className="text-xs font-mono text-zinc-500 uppercase mt-2">Pump.fun</div>
</div>
</div>
</div>
</div>
</div>
</div>

</section>
</div>

<section className="py-24 sm:py-32 relative z-10 border-t border-zinc-900/50 bg-zinc-950/40 backdrop-blur-sm" id="features">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl scroll-animate">
<h2 className="text-xs font-normal text-zinc-500 tracking-widest uppercase flex items-center gap-2">
<span className="w-8 h-px bg-zinc-700"></span>
            Bot Capabilities
          </h2>
<p className="mt-4 text-3xl font-normal tracking-tight text-zinc-100 sm:text-4xl drop-shadow-md">
            Engineered for seamless launches
          </p>
<p className="mt-4 text-base text-zinc-400">
            Abstract away the complexity of smart contracts. We built the architecture so you can focus on building your community.
          </p>
</div>
<div className="mx-auto mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 scroll-animate">
<div className="tactile-base rounded-2xl p-6 group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col h-64">
<div className="absolute right-0 top-0 w-32 h-32 bg-indigo-500/5 rounded-bl-full blur-2xl transition-opacity group-hover:opacity-100 opacity-50"></div>
<div className="mb-auto">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center border border-zinc-800/50 mb-6 shadow-inner relative">
<iconify-icon className="text-zinc-300 relative z-10" icon="solar:shield-check-linear" width="24"></iconify-icon>
<div className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-indigo-400 transition-colors shadow-[0_0_8px_rgba(99,102,241,0)] group-hover:shadow-[0_0_8px_rgba(99,102,241,1)]"></div>
</div>
<h3 className="text-lg font-normal tracking-tight text-zinc-100">
                Trustless Escrow
              </h3>
<p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Funds are held in non-custodial smart contracts. Deployers never touch contributor SOL until launch conditions are met.
              </p>
</div>
<div className="h-1 w-12 bg-zinc-800 rounded-full mt-4 group-hover:bg-zinc-600 transition-colors"></div>
</div>
<div className="tactile-base rounded-2xl p-6 group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col h-64">
<div className="mb-auto">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center border border-zinc-800/50 mb-6 shadow-inner relative">
<iconify-icon className="text-zinc-300 relative z-10" icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal tracking-tight text-zinc-100">
                Volume Generation
              </h3>
<p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Automatically generate organic-looking volume across multiple generated wallets to boost token visibility on trending lists.
              </p>
</div>
<div className="h-1 w-12 bg-zinc-800 rounded-full mt-4 group-hover:bg-zinc-600 transition-colors"></div>
</div>
<div className="tactile-base rounded-2xl p-6 group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col h-64">
<div className="mb-auto">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center border border-zinc-800/50 mb-6 shadow-inner relative">
<iconify-icon className="text-zinc-300 relative z-10" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal tracking-tight text-zinc-100">
                100% Consent System
              </h3>
<p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Group projects require every single participant to approve major actions, entirely preventing internal rug pulls.
              </p>
</div>
<div className="h-1 w-12 bg-zinc-800 rounded-full mt-4 group-hover:bg-zinc-600 transition-colors"></div>
</div>
</div>
</div>
</section>

<section className="sm:py-32 overflow-hidden border-y border-zinc-900/50 bg-zinc-950/40 backdrop-blur-md pt-24 pb-24 relative shadow-[inset_0_20px_40px_rgba(0,0,0,0.5),inset_0_-20px_40px_rgba(0,0,0,0.5)] hardware-pipeline-section" id="how-it-works">
<style>
    @keyframes pipelineBeam {
      0% { transform: translate(-50%, -35%); opacity: 0; }
      15% { opacity: 1; }
      100% { transform: translate(-50%, 340%); opacity: 0; }
    }
    @keyframes pipelinePulse {
      0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.55; }
      50% { transform: translate(-50%, -50%) scale(1.45); opacity: 0; }
    }
    @keyframes pipelineBarGrow { from { width: 0%; } to { width: var(--target, 70%); } }
    @keyframes pipelineReveal { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    .hardware-pipeline-section .scroll-animate { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease, transform 0.8s ease; }
    .hardware-pipeline-section .scroll-animate.is-visible { opacity: 1; transform: translateY(0); }
    .hardware-pipeline-section .pipeline-shell { position: relative; }
    .hardware-pipeline-section .pipeline-spine { position: absolute; left: 50%; top: 0; bottom: 0; width: 18px; transform: translateX(-50%); border-radius: 999px; z-index: 0; background: linear-gradient(to bottom, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); border: 1px solid rgba(39, 39, 42, 0.75); box-shadow: inset 0 1px 0 rgba(255,255,255,0.03), inset 0 0 24px rgba(0,0,0,0.5); }
    .hardware-pipeline-section .pipeline-spine-track { position: absolute; left: 50%; top: 16px; bottom: 16px; width: 2px; transform: translateX(-50%); border-radius: 999px; background: rgba(63, 63, 70, 0.95); overflow: hidden; }
    .hardware-pipeline-section .pipeline-beam { position: absolute; left: 50%; top: 0; width: 2px; height: 140px; transform: translateX(-50%); background: linear-gradient(to bottom, transparent, rgba(99, 102, 241, 0.95), transparent); box-shadow: 0 0 18px rgba(99, 102, 241, 0.65); animation: pipelineBeam 4s linear infinite; }
    .hardware-pipeline-section .pipeline-step { position: relative; z-index: 10; display: flex; flex-direction: column; gap: 2rem; margin-bottom: 4rem; padding-left: 80px; opacity: 0; transform: translateY(34px); transition: opacity 0.8s ease, transform 0.8s ease; }
    .hardware-pipeline-section .pipeline-step:last-child { margin-bottom: 0; }
    .hardware-pipeline-section .pipeline-step.is-visible { opacity: 1; transform: translateY(0); }
    @media (min-width: 768px) { .hardware-pipeline-section .pipeline-step { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 2.25rem; padding-left: 0; min-height: 120px; } }
    .hardware-pipeline-section .step-copy, .hardware-pipeline-section .step-card, .hardware-pipeline-section .step-node { opacity: 0; transform: translateY(18px); transition: opacity 0.7s ease, transform 0.7s ease, box-shadow 0.35s ease, border-color 0.35s ease; }
    .hardware-pipeline-section .pipeline-step.is-visible .step-copy { opacity: 1; transform: translateY(0); transition-delay: 0.05s; }
    .hardware-pipeline-section .pipeline-step.is-visible .step-node { opacity: 1; transition-delay: 0.18s; }
    .hardware-pipeline-section .pipeline-step.is-visible .step-card { opacity: 1; transform: translateY(0); transition-delay: 0.3s; }
    .hardware-pipeline-section .step-copy { width: 100%; }
    .hardware-pipeline-section .step-copy h3 { font-size: 1.75rem; line-height: 1.15; font-weight: 400; color: rgb(244 244 245); letter-spacing: -0.03em; }
    .hardware-pipeline-section .step-copy p { margin-top: 0.75rem; font-size: 1rem; line-height: 1.55; color: rgb(113 113 122); max-width: 28rem; }
    .hardware-pipeline-section .step-copy.left, .hardware-pipeline-section .step-copy.right { text-align: left; }
    @media (min-width: 768px) { .hardware-pipeline-section .step-copy.left { text-align: right; padding-right: 3.5rem; } .hardware-pipeline-section .step-copy.left p { margin-left: auto; } .hardware-pipeline-section .step-copy.right { text-align: left; padding-left: 3.5rem; } }
    .hardware-pipeline-section .step-card { width: 100%; }
    @media (min-width: 768px) { .hardware-pipeline-section .step-card.left { padding-right: 3.5rem; } .hardware-pipeline-section .step-card.right { padding-left: 3.5rem; } }
    .hardware-pipeline-section .pipeline-card { border-radius: 1rem; border: 1px solid rgba(63,63,70,0.7); transition: border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease; }
    .hardware-pipeline-section .pipeline-step:hover .pipeline-card { border-color: rgba(82,82,91,0.95); box-shadow: 0 18px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04); }
    .hardware-pipeline-section .step-node { position: absolute; left: 50%; top: 50%; width: 38px; height: 38px; transform: translate(-50%, -50%); display: flex; align-items: center; justify-content: center; z-index: 20; border-radius: 999px; pointer-events: none; }
    .hardware-pipeline-section .pipeline-step.is-visible .step-node { transform: translate(-50%, -50%); }
    .hardware-pipeline-section .step-node-ring { position: relative; width: 100%; height: 100%; border-radius: 999px; border: 1px solid rgba(63,63,70,0.8); background: radial-gradient(circle at center, rgba(24,24,27,0.95), rgba(10,10,12,0.98)); display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04); }
    .hardware-pipeline-section .step-node-ring::before { content: ""; position: absolute; inset: -10px; border-radius: 999px; border: 1px solid rgba(99,102,241,0.08); opacity: 0.7; }
    .hardware-pipeline-section .pipeline-step.step-emerald .step-node-ring::before { border-color: rgba(16,185,129,0.12); }
    .hardware-pipeline-section .pipeline-step.step-zinc .step-node-ring::before { border-color: rgba(255,255,255,0.06); }
    .hardware-pipeline-section .pipeline-step.is-visible .step-node-ring::after { content: ""; position: absolute; left: 50%; top: 50%; width: 100%; height: 100%; border-radius: 999px; border: 1px solid rgba(99,102,241,0.2); animation: pipelinePulse 2s ease-out infinite; }
    .hardware-pipeline-section .pipeline-step.step-emerald.is-visible .step-node-ring::after { border-color: rgba(16,185,129,0.24); }
    .hardware-pipeline-section .pipeline-step.step-zinc.is-visible .step-node-ring::after { border-color: rgba(255,255,255,0.12); }
    .hardware-pipeline-section .step-node-dot { width: 12px; height: 12px; border-radius: 999px; border: 1px solid rgba(24,24,27,0.95); transition: box-shadow 0.4s ease, background-color 0.4s ease; }
    .hardware-pipeline-section .pipeline-step.is-visible .step-node-dot { box-shadow: 0 0 0 8px rgba(99,102,241,0.06), 0 0 16px rgba(99,102,241,0.34); }
    .hardware-pipeline-section .pipeline-step.step-emerald.is-visible .step-node-dot { box-shadow: 0 0 0 8px rgba(16,185,129,0.06), 0 0 16px rgba(16,185,129,0.34); }
    .hardware-pipeline-section .pipeline-step.step-zinc.is-visible .step-node-dot { box-shadow: 0 0 0 8px rgba(255,255,255,0.04), 0 0 14px rgba(255,255,255,0.12); }
    .hardware-pipeline-section .progress-track { height: 8px; width: 100%; background: rgb(24 24 27); border-radius: 999px; overflow: hidden; box-shadow: inset 0 2px 8px rgba(0,0,0,0.55); }
    .hardware-pipeline-section .progress-fill { width: 0; height: 100%; border-radius: 999px; }
    .hardware-pipeline-section .pipeline-step.is-visible .progress-fill { animation: pipelineBarGrow 1.35s ease forwards; animation-delay: 0.45s; }
    .hardware-pipeline-section .mini-chip, .hardware-pipeline-section .mini-stat, .hardware-pipeline-section .mini-line { opacity: 0; transform: translateY(10px); }
    .hardware-pipeline-section .pipeline-step.is-visible .mini-chip, .hardware-pipeline-section .pipeline-step.is-visible .mini-stat, .hardware-pipeline-section .pipeline-step.is-visible .mini-line { animation: pipelineReveal 0.55s ease forwards; }
    @media (max-width: 767px) { .hardware-pipeline-section .pipeline-spine { left: 32px; transform: none; } .hardware-pipeline-section .pipeline-spine-track { left: 50%; transform: translateX(-50%); } .hardware-pipeline-section .pipeline-beam { left: 50%; transform: translateX(-50%); } .hardware-pipeline-section .step-node { left: 32px; transform: translate(-50%, -50%); } .hardware-pipeline-section .pipeline-step.is-visible .step-node { transform: translate(-50%, -50%); } .hardware-pipeline-section .step-copy h3 { font-size: 1.35rem; } .hardware-pipeline-section .step-copy p { font-size: 0.95rem; max-width: 100%; } }
  </style>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-20 scroll-animate">
<h2 className="text-3xl font-normal tracking-tight text-zinc-100">
        Project Lifecycle
      </h2>
<p className="mt-4 text-base text-zinc-400">
        A staged physical workflow for initializing, funding, validating, and deploying
        tokens via our Telegram bot.
      </p>
</div>
<div className="pipeline-shell relative max-w-5xl mx-auto scroll-animate">
<div className="pipeline-spine">
<div className="pipeline-spine-track">
<div className="pipeline-beam"></div>
</div>
</div>

<div className="pipeline-step step-zinc">
<div className="step-copy left">
<h3>Project Configuration</h3>
<p>
            Set up your token metadata, ticker, and initial supply directly through the Telegram interface.
          </p>
</div>
<div className="step-card right">
<div className="pipeline-card tactile-glass p-5 flex items-center gap-4">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center text-zinc-300 shrink-0">
<iconify-icon icon="solar:pen-new-square-linear" width="22"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="progress-track">
<div className="progress-fill bg-zinc-400" style={{'--target': '100%'}}></div>
</div>
<div className="text-xs font-mono text-zinc-500 mt-3 tracking-wider uppercase">
                METADATA: VERIFIED
              </div>
</div>
</div>
</div>
<div className="step-node">
<div className="step-node-ring">
<div className="step-node-dot bg-zinc-300"></div>
</div>
</div>
</div>

<div className="pipeline-step">
<div className="step-card left">
<div className="pipeline-card tactile-glass p-5 flex items-center gap-4">
<div className="flex-1 text-right min-w-0">
<div className="text-xs font-mono text-zinc-500 mb-3 tracking-wider uppercase">
                ESCROW_FUNDING: 85%
              </div>
<div className="flex justify-end gap-1.5">
<div className="mini-line w-7 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.55)]"></div>
<div className="mini-line w-7 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.55)]"></div>
<div className="mini-line w-7 h-1.5 rounded-full bg-zinc-700"></div>
</div>
</div>
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center text-indigo-400 shrink-0">
<iconify-icon icon="solar:safe-square-linear" width="22"></iconify-icon>
</div>
</div>
</div>
<div className="step-copy right">
<h3>Trustless Escrow</h3>
<p>
            Participants deposit SOL into non-custodial smart contracts. Funds are locked until the project reaches its target.
          </p>
</div>
<div className="step-node">
<div className="step-node-ring">
<div className="step-node-dot bg-indigo-500"></div>
</div>
</div>
</div>

<div className="pipeline-step">
<div className="step-copy left">
<h3>100% Consensus</h3>
<p>
            For group projects, every member must sign off via Telegram before the deployment sequence initiates.
          </p>
</div>
<div className="step-card right">
<div className="pipeline-card tactile-glass p-5 flex items-center gap-4">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center text-indigo-400 shrink-0">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="22"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-3 tracking-wider uppercase">
<span>SIGNATURES</span>
<span>3/3</span>
</div>
<div className="grid grid-cols-3 gap-2">
<div className="mini-stat rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-3 py-2 text-[11px] text-indigo-300 font-mono text-center">
                  USER_A
                </div>
<div className="mini-stat rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-3 py-2 text-[11px] text-indigo-300 font-mono text-center">
                  USER_B
                </div>
<div className="mini-stat rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-3 py-2 text-[11px] text-indigo-300 font-mono text-center">
                  USER_C
                </div>
</div>
</div>
</div>
</div>
<div className="step-node">
<div className="step-node-ring">
<div className="step-node-dot bg-indigo-500"></div>
</div>
</div>
</div>

<div className="pipeline-step step-emerald">
<div className="step-card left">
<div className="pipeline-card tactile-glass p-5 flex items-center gap-4">
<div className="flex-1 text-right min-w-0">
<div className="text-xs font-mono text-zinc-500 mb-3 tracking-wider uppercase">
                DEPLOY_TARGET
              </div>
<div className="flex flex-wrap justify-end gap-2">
<span className="mini-chip text-[11px] font-mono px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Pump.fun
                </span>
<span className="mini-chip text-[11px] font-mono px-3 py-1.5 rounded-full bg-zinc-900/60 text-zinc-400 border border-zinc-800">
                  BONK
                </span>
</div>
</div>
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center text-emerald-400 shrink-0">
<iconify-icon icon="solar:rocket-linear" width="22"></iconify-icon>
</div>
</div>
</div>
<div className="step-copy right">
<h3>Contract Deployment</h3>
<p>
            The bot automatically compiles and deploys the token contract to the selected platform instantly.
          </p>
</div>
<div className="step-node">
<div className="step-node-ring">
<div className="step-node-dot bg-emerald-500"></div>
</div>
</div>
</div>

<div className="pipeline-step step-emerald">
<div className="step-copy left">
<h3>Volume Management</h3>
<p>
            Generated wallets begin automated, organic trading patterns to simulate activity and hit bonding curves.
          </p>
</div>
<div className="step-card right">
<div className="pipeline-card tactile-glass p-5">
<div className="flex items-center justify-between gap-4 mb-4">
<div className="flex items-center gap-3 min-w-0">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center text-emerald-400 shrink-0">
<iconify-icon icon="solar:graph-up-linear" width="22"></iconify-icon>
</div>
<div className="min-w-0">
<div className="text-zinc-200 text-base">Trading Activity</div>
<div className="text-xs font-mono text-zinc-500 tracking-wider uppercase mt-1">
                    TARGET_CURVE: 97%
                  </div>
</div>
</div>
<div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.6)] shrink-0"></div>
</div>
<div className="progress-track">
<div className="progress-fill bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.45)]" style={{'--target': '97%'}}></div>
</div>
</div>
</div>
<div className="step-node">
<div className="step-node-ring">
<div className="step-node-dot bg-emerald-500"></div>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="sm:py-32 z-10 bg-zinc-950/40 backdrop-blur-sm border-zinc-900/50 border-b pt-24 pb-24 relative" id="security">
<div className="z-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiLz48L3N2Zz4=')] absolute top-0 right-0 bottom-0 left-0 pointer-events-none"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
<div className="mb-16 scroll-animate">
<h2 className="text-3xl font-normal tracking-tight text-zinc-100 flex items-center gap-3">
<iconify-icon className="text-zinc-500" icon="solar:shield-keyhole-linear" width="28"></iconify-icon>
            Security Architecture
          </h2>
<p className="mt-4 text-base text-zinc-400 max-w-2xl">
            A technical deep-dive into the FoxPump safety protocols. We operate on a zero-trust model to ensure your funds and private keys are never compromised.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-animate tilt-wrapper">

<div className="tilt-element tactile-glass rounded-2xl p-6 border border-zinc-800/80 group">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center border border-zinc-700 mb-6 relative shadow-inner">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-100 transition-colors" icon="solar:archive-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-zinc-100">Standard Release Protocol (SRP)</h3>
<p className="mt-2 text-sm text-zinc-400">The technical framework for non-custodial fund withdrawals, ensuring the platform never touches your private keys during the claiming process.</p>
</div>

<div className="tilt-element tactile-glass rounded-2xl p-6 border border-zinc-800/80 group">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center border border-zinc-700 mb-6 relative shadow-inner">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-100 transition-colors" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-zinc-100">100% Consensus Multi-Sig</h3>
<p className="mt-2 text-sm text-zinc-400">Group projects require every participant to cryptographically approve major actions (like launching or refunds) to prevent "rug pulls" or internal theft.</p>
</div>

<div className="tilt-element tactile-glass rounded-2xl p-6 border border-zinc-800/80 group">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center border border-zinc-700 mb-6 relative shadow-inner">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-100 transition-colors" icon="solar:safe-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-zinc-100">Trustless Escrow Architecture</h3>
<p className="mt-2 text-sm text-zinc-400">Funds are held in decentralized smart contracts that developers cannot access, ensuring they can only be routed to the DEX liquidity pool.</p>
</div>

<div className="tilt-element tactile-glass rounded-2xl p-6 border border-zinc-800/80 group">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center border border-zinc-700 mb-6 relative shadow-inner">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-100 transition-colors" icon="solar:key-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-zinc-100">Private Key Management</h3>
<p className="mt-2 text-sm text-zinc-400">Any generated bot wallets use client-side AES-256 encryption. Keys are encrypted on your local device before ever being stored.</p>
</div>

<div className="tilt-element tactile-glass rounded-2xl p-6 border border-zinc-800/80 group">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center border border-zinc-700 mb-6 relative shadow-inner">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-100 transition-colors" icon="solar:eye-scan-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-zinc-100">Real-Time Monitoring</h3>
<p className="mt-2 text-sm text-zinc-400">Dedicated infrastructure watches for anomalous contract behavior or unexpected spikes in failed transactions across the protocol.</p>
</div>

<div className="tilt-element tactile-glass rounded-2xl p-6 border border-zinc-800/80 group">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center border border-zinc-700 mb-6 relative shadow-inner">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-100 transition-colors" icon="solar:code-scan-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-zinc-100">Open Source &amp; Verifiable</h3>
<p className="mt-2 text-sm text-zinc-400">The core smart contract logic is entirely transparent. Anyone can verify our contract byte-code against the source on Solscan.</p>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 relative z-10 bg-zinc-950/60 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col lg:flex-row gap-16 items-center scroll-animate">
<div className="w-full lg:w-1/2">
<h2 className="text-3xl font-normal tracking-tight text-zinc-100">
              Vulnerability Reporting
            </h2>
<p className="mt-4 text-base text-zinc-400 leading-relaxed">
              Security is our highest priority. We maintain a generous bug bounty program for white-hat researchers who help secure the FoxPump ecosystem.
            </p>
<div className="mt-8 space-y-4">
<div className="flex items-center gap-3 text-sm text-zinc-300">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div> Direct line to security engineers
              </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div> Bounties paid in USDC/SOL
              </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div> Safe harbor policy
              </div>
</div>
<a className="btn-physical-light rounded-full px-8 py-3 text-sm font-normal text-zinc-900 mt-8 inline-block" href="#">
              Submit a Report
            </a>
</div>
<div className="w-full lg:w-1/2 tilt-wrapper">
<div className="tilt-element tactile-glass rounded-2xl p-1.5 border border-zinc-800 shadow-2xl">
<div className="cmd-panel h-64 rounded-xl flex flex-col bg-zinc-950/80">
<div className="h-10 border-b border-zinc-800/50 flex items-center px-4 gap-2 bg-black/40">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
<div className="ml-4 text-xs font-mono text-zinc-600">foxpump_sec — bash</div>
</div>
<div className="flex-1 p-4 font-mono text-sm text-zinc-300 flex flex-col gap-2 overflow-hidden relative">
<div><span className="text-indigo-400">$</span> verify-contract --address=FoxP...ump</div>
<div className="text-zinc-500">Fetching byte-code from mainnet... [OK]</div>
<div className="text-zinc-500">Comparing with source repository... [OK]</div>
<div><span className="text-emerald-400">Match confirmed.</span> Contract is verified.</div>
<div className="mt-4"><span className="text-indigo-400">$</span> submit-bounty --severity=high</div>
<div className="mt-auto flex items-center gap-2">
<span className="w-2 h-4 bg-zinc-400 animate-pulse"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative border-t border-zinc-900/50 bg-zinc-950/80 backdrop-blur-xl pt-24 pb-12 overflow-hidden" id="community">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-indigo-500/10 blur-[100px] pointer-events-none"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center scroll-animate">
<div className="w-16 h-16 rounded-2xl tactile-glass mx-auto flex items-center justify-center border border-zinc-800 shadow-[0_10px_20px_rgba(0,0,0,0.5)] mb-8">
<iconify-icon className="text-indigo-400" icon="solar:fox-linear" width="32"></iconify-icon>
</div>
<h2 className="text-4xl font-normal tracking-tight text-zinc-100 sm:text-5xl">
          Join the FoxPump Revolution.
        </h2>
<p className="mt-6 text-lg text-zinc-400 max-w-xl mx-auto">
          Become part of the fastest growing Web3 community. Launch tokens fairly, securely, and automatically.
        </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="btn-physical-light rounded-full px-8 py-3 text-base font-normal flex items-center gap-2 w-full sm:w-auto justify-center" href="#">
<iconify-icon icon="solar:paperclip-linear" width="20"></iconify-icon>
            Join Waitlist Bot
          </a>
<a className="btn-physical-dark rounded-full px-8 py-3 text-base font-normal text-zinc-300 hover:text-white transition-colors flex items-center gap-2 w-full sm:w-auto justify-center" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
            Follow on X
          </a>
</div>
</div>

<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-32 pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
<div className="text-sm text-zinc-600 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
          Bot Operational
        </div>
<div className="flex gap-6 text-sm text-zinc-500 font-normal">
<a className="hover:text-zinc-300 transition-colors" href="#">Telegram</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Twitter / X</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Documentation</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Security</a>
</div>
<div className="text-sm text-zinc-600">
          © 2024 Fox</div></div></footer>
    </>
  );
}
