import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
}
},
plugins: []
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    (function(){
        const canvas = document.getElementById("hero3D");
        if(!canvas || !window.THREE) return;

        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x050507, 0.015);
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
        camera.position.set(0, 8, 20);

        const renderer = new THREE.WebGLRenderer({ canvas, alpha:true, antialias:true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);

        const bhUniforms = { uTime: { value: 0 }, uScroll: { value: 0 } };
        const bhMaterial = new THREE.ShaderMaterial({
          uniforms: bhUniforms,
          vertexShader: `
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            uniform float uTime;
            uniform float uScroll;
            varying vec2 vUv;

            float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
            float noise(vec2 p) {
              vec2 i = floor(p);
              vec2 f = fract(p);
              vec2 u = f*f*(3.0-2.0*f);
              return mix(mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), u.x),
                         mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x), u.y);
            }
            float fbm(vec2 p) {
              float v = 0.0;
              float a = 0.5;
              mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
              for (int i = 0; i < 6; i++) {
                v += a * noise(p);
                p = rot * p * 2.0;
                a *= 0.5;
              }
              return v;
            }

            void main() {
              vec2 uv = vUv * 2.0 - 1.0;
              float r = length(uv);

              float coreRadius = 0.18;
              float core = smoothstep(coreRadius + 0.02, coreRadius, r);

              float warpFactor = 0.12 / (r + 0.01);
              vec2 warpedUv = uv + normalize(uv) * warpFactor;
              float warpedR = length(warpedUv);
              float warpedAngle = atan(warpedUv.y, warpedUv.x);

              float swirlSpeed = uTime * 0.08;
              float swirl = warpedAngle - warpedR * 2.5 + swirlSpeed;

              vec2 noiseCoords = vec2(cos(swirl), sin(swirl)) * 1.8 - vec2(uTime * 0.02);
              float n1 = fbm(noiseCoords * 2.5);
              float n2 = fbm(noiseCoords * 5.0 + uTime * 0.04);

              float diskMask = smoothstep(0.9, coreRadius, r);
              float innerGlowMask = smoothstep(coreRadius + 0.3, coreRadius, r);

              float intensity = (n1 * 0.5 + 0.5) * diskMask;
              float highlight = (n2 * 0.5 + 0.5) * innerGlowMask * 2.0;

              vec3 deepSpace = vec3(0.01, 0.01, 0.02);
              vec3 darkViolet = vec3(0.12, 0.04, 0.25);
              vec3 plasmaBlue = vec3(0.2, 0.5, 0.9);
              vec3 coreWhite = vec3(0.9, 0.95, 1.0);

              vec3 color = mix(deepSpace, darkViolet, intensity * 1.5);
              color = mix(color, plasmaBlue, highlight * 0.9);
              color += coreWhite * pow(innerGlowMask, 4.0) * (0.3 + 0.7 * sin(swirlSpeed * 3.0 + warpedR * 15.0));

              color = mix(color, vec3(0.0), core);

              float alpha = (intensity + highlight) * diskMask;
              alpha = max(alpha, core);
              alpha *= smoothstep(1.0, 0.5, r);

              float scrollGlow = 1.0 + uScroll * 0.4;
              float pulse = 0.95 + 0.05 * sin(uTime * 0.5);

              gl_FragColor = vec4(color * scrollGlow * pulse, alpha);
            }
          `,
          transparent: true,
          depthWrite: false,
          blending: THREE.NormalBlending,
          fog: false
        });

        const bhGeo = new THREE.PlaneGeometry(180, 180);
        const bhMesh = new THREE.Mesh(bhGeo, bhMaterial);
        bhMesh.position.set(0, 12, -45); 
        bhMesh.renderOrder = -2;
        scene.add(bhMesh);

        const smokeCanvas = document.createElement('canvas');
        smokeCanvas.width = 512;
        smokeCanvas.height = 512;
        const ctx = smokeCanvas.getContext('2d');
        const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.18)');
        gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 512, 512);
        const smokeTex = new THREE.CanvasTexture(smokeCanvas);

        const smokePlanes =[];
        const smokeGeo = new THREE.PlaneGeometry(100, 100);

        for (let i = 0; i < 40; i++) {
          let color = new THREE.Color();
          let rand = Math.random();
          if(rand < 0.4) color.setHex(0x1a153a);
          else if(rand < 0.7) color.setHex(0x0f2040);
          else color.setHex(0x050508);

          const smokeMat = new THREE.MeshBasicMaterial({
              map: smokeTex,
              color: color,
              transparent: true,
              opacity: Math.random() * 0.5 + 0.1,
              depthWrite: false,
              blending: THREE.NormalBlending
          });

          const plane = new THREE.Mesh(smokeGeo, smokeMat);
          plane.position.set(
              (Math.random() - 0.5) * 140,
              (Math.random() - 0.5) * 80 + 5,
              -10 - Math.random() * 30
          );
          plane.rotation.z = Math.random() * Math.PI * 2;
          plane.userData = {
              rotSpeed: (Math.random() - 0.5) * 0.002,
              driftX: (Math.random() - 0.5) * 0.015,
              driftY: (Math.random() - 0.5) * 0.01,
              baseOpacity: smokeMat.opacity,
              phaseOffset: Math.random() * Math.PI * 2,
              baseX: plane.position.x,
              baseY: plane.position.y
          };
          plane.renderOrder = -1;
          scene.add(plane);
          smokePlanes.push(plane);
        }

        const gridUniforms = {
          uColor: { value: new THREE.Color(0xffffff) },
          uOpacity: { value: 0.0 }
        };

        const gridMaterial = new THREE.ShaderMaterial({
          uniforms: gridUniforms,
          vertexShader: `
            varying vec3 vWorldPosition;
            void main() {
              vec4 worldPosition = modelMatrix * vec4(position, 1.0);
              vWorldPosition = worldPosition.xyz;
              gl_Position = projectionMatrix * viewMatrix * worldPosition;
            }
          `,
          fragmentShader: `
            uniform vec3 uColor;
            uniform float uOpacity;
            varying vec3 vWorldPosition;

            void main() {
              vec2 coord = vWorldPosition.xz * 0.55;
              vec2 grid = abs(fract(coord - 0.5) - 0.5) / (fwidth(coord) * 1.6);
              float line = min(grid.x, grid.y);
              float alpha = max(0.0, 1.0 - line);

              float dist = length(vWorldPosition.xyz - cameraPosition);
              float fade = 1.0 - smoothstep(12.0, 70.0, dist);

              gl_FragColor = vec4(uColor, alpha * fade * uOpacity);
            }
          `,
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          extensions: { derivatives: true }
        });

        const planeGeo = new THREE.PlaneGeometry(240, 240);
        planeGeo.rotateX(-Math.PI / 2);
        const gridPlane = new THREE.Mesh(planeGeo, gridMaterial);
        gridPlane.position.y = -4;
        scene.add(gridPlane);

        const pGeo = new THREE.BufferGeometry();
        const pts = [];
        const vels =[];
        for(let i=0; i<600; i++) {
          pts.push((Math.random()-.5)*150, (Math.random()-.5)*80 + 5, (Math.random()-.5)*100 - 15);
          vels.push(Math.random() * 0.015 + 0.005);
        }
        pGeo.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
        pGeo.setAttribute("aSpeed", new THREE.Float32BufferAttribute(vels, 1));

        const pMat = new THREE.PointsMaterial({
          color: 0xc7d2fe,
          size: 0.02,
          transparent: true,
          opacity: 0.3,
          blending: THREE.AdditiveBlending,
          depthWrite: false
        });
        const glow = new THREE.Points(pGeo, pMat);
        scene.add(glow);

        let mouseX = 0, mouseY = 0;
        let targetX = 0, targetY = 0;

        window.addEventListener("mousemove", (e) => {
          targetX = (e.clientX / window.innerWidth - 0.5);
          targetY = (e.clientY / window.innerHeight - 0.5);
        });

        let scrollP = 0, targetScrollP = 0;
        const heroTrack = document.getElementById("hero-track");
        
        window.addEventListener("scroll", () => {
          if (heroTrack) {
            const rect = heroTrack.getBoundingClientRect();
            const maxScroll = rect.height - window.innerHeight;
            let progress = -rect.top / maxScroll;
            targetScrollP = Math.min(1, Math.max(0, progress));
          } else {
            targetScrollP = Math.min(1, Math.max(0, window.scrollY / window.innerHeight));
          }
        });

        window.addEventListener("resize", () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        });

        const clock = new THREE.Clock();
        const heroContents = document.querySelectorAll('.hero-content');

        function animate() {
          requestAnimationFrame(animate);

          const elapsed = clock.getElapsedTime();
          bhUniforms.uTime.value = elapsed;
          
          mouseX += (targetX - mouseX) * 0.05;
          mouseY += (targetY - mouseY) * 0.05;

          const targetGridOpacity = 0.06 * (1.0 - scrollP);
          gridMaterial.uniforms.uOpacity.value += (targetGridOpacity - gridMaterial.uniforms.uOpacity.value) * 0.05;

          scrollP += (targetScrollP - scrollP) * 0.04;
          bhUniforms.uScroll.value = scrollP;

          const baseZ = 20 - scrollP * 65; 
          const baseY = 8 - scrollP * 6;
          const baseX = scrollP * 2;

          camera.position.z += (baseZ - camera.position.z) * 0.06;
          camera.position.y += ((baseY - mouseY * 2.0) - camera.position.y) * 0.06;
          camera.position.x += ((baseX + mouseX * 3.0) - camera.position.x) * 0.06;

          const targetFov = 60 + scrollP * 45; 
          camera.fov += (targetFov - camera.fov) * 0.06;
          camera.updateProjectionMatrix();

          camera.lookAt(
            mouseX * 4.0, 
            bhMesh.position.y - 4 + scrollP * 12, 
            -20 - scrollP * 30
          );

          gridPlane.position.x = camera.position.x;
          gridPlane.position.z = camera.position.z;
          
          bhMesh.lookAt(camera.position);

          heroContents.forEach(el => {
            const scale = 1 + scrollP * 1.5;
            const opacity = 1 - scrollP * 2.5;
            el.style.transform = `scale(${scale}) translateY(${scrollP * -80}px)`;
            el.style.opacity = Math.max(0, opacity);
            el.style.pointerEvents = opacity <= 0 ? 'none' : 'auto';
          });

          let sceneMouseX = mouseX * 80;
          let sceneMouseY = -mouseY * 50 + 10;

          smokePlanes.forEach((plane) => {
            plane.userData.baseX += plane.userData.driftX;
            plane.userData.baseY += plane.userData.driftY;

            let dx = plane.position.x - sceneMouseX;
            let dy = plane.position.y - sceneMouseY;
            let dist = Math.sqrt(dx*dx + dy*dy);
            
            let repelX = 0, repelY = 0;
            if(dist < 30) {
              let force = (30 - dist) / 30;
              repelX = (dx/dist) * force * 5;
              repelY = (dy/dist) * force * 5;
              plane.rotation.z += force * 0.01;
            }

            plane.position.x += ((plane.userData.baseX + repelX) - plane.position.x) * 0.05;
            plane.position.y += ((plane.userData.baseY + repelY) - plane.position.y) * 0.05;
            plane.rotation.z += plane.userData.rotSpeed;

            const wave = Math.sin(plane.position.x * 0.02 + elapsed * 0.3 + plane.userData.phaseOffset);
            plane.material.opacity = plane.userData.baseOpacity + (wave * 0.1);

            if(plane.userData.baseX > 70) plane.userData.baseX = -70;
            if(plane.userData.baseX < -70) plane.userData.baseX = 70;
            if(plane.userData.baseY > 50) plane.userData.baseY = -10;
            if(plane.userData.baseY < -10) plane.userData.baseY = 50;
          });

          const positions = glow.geometry.attributes.position.array;
          const speeds = glow.geometry.attributes.aSpeed.array;
          
          for(let i=0; i<positions.length; i+=3) {
            let px = positions[i];
            let py = positions[i+1];
            let pz = positions[i+2];

            let dx = bhMesh.position.x - px;
            let dy = bhMesh.position.y - py;
            let dz = bhMesh.position.z - pz;
            let dist = Math.sqrt(dx*dx + dy*dy + dz*dz);

            let speed = speeds[i/3] * (1.0 + scrollP * 4.0);

            positions[i] += (dx/dist) * speed;
            positions[i+1] += (dy/dist) * speed;
            positions[i+2] += (dz/dist) * speed;

            positions[i] -= (dz/dist) * speed * 2.0;
            positions[i+2] += (dx/dist) * speed * 2.0;

            if(dist < 5.0 || dist > 180.0) {
              let angle = Math.random() * Math.PI * 2;
              let r = 90 + Math.random() * 60;
              positions[i] = Math.cos(angle) * r;
              positions[i+1] = bhMesh.position.y + (Math.random() - 0.5) * 60;
              positions[i+2] = bhMesh.position.z + Math.sin(angle) * r;
            }
          }
          glow.geometry.attributes.position.needsUpdate = true;

          renderer.render(scene, camera);
        }

        animate();
      })();
  


    (() => {
      const section = document.querySelector('.hardware-pipeline-section');
      if (!section) return;
      const revealTargets = section.querySelectorAll('.scroll-animate, .pipeline-step');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.22, rootMargin: '0px 0px -10% 0px' }
      );
      revealTargets.forEach((el) => observer.observe(el));
    })();
  


    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  


      // Implementation of the 3D tilt effect used on hardware cards throughout the page
      document.querySelectorAll('.tilt-element').forEach(el => {
        el.addEventListener('mousemove', e => {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          // Calculate percentage from center (-0.5 to 0.5)
          const xPct = x / rect.width - 0.5;
          const yPct = y / rect.height - 0.5;
          
          // Apply subtle 3D rotation based on mouse position
          el.style.transform = `perspective(1000px) rotateY(${xPct * 6}deg) rotateX(${-yPct * 6}deg) translateY(-4px) scale(1.01)`;
          el.style.transition = 'transform 0.1s ease-out';
        });
        
        el.addEventListener('mouseleave', () => {
          // Reset when mouse leaves
          el.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0px) scale(1)';
          el.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        });
      });

      // Simple generic scroll reveal observer for items not covered by specific section logic
      const genericObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            genericObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

      document.querySelectorAll('.scroll-animate').forEach(el => {
        genericObserver.observe(el);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-50"></div>
<div className="fixed inset-0 -z-10 bg-gradient-to-b from-transparent via-zinc-950/80 to-zinc-950 pointer-events-none"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl rounded-full tactile-glass px-4 py-3 flex items-center justify-between transition-transform duration-500 hover:translate-y-[-2px]">
<div className="flex items-center gap-8 pl-2">
<a className="flex items-center gap-2 text-lg font-normal text-zinc-100 tracking-tight" href="#">
<span className="font-medium tracking-tight text-white">InfraLogic</span>
</a>
<div className="hidden md:flex gap-6">
<a className="text-sm font-normal text-zinc-400 hover:text-zinc-100 transition-colors" href="#impact">
            Impact
          </a>
<a className="hover:text-zinc-100 transition-colors text-sm font-normal text-zinc-400" href="#platform">
            Platform
          </a>
<a className="hover:text-zinc-100 transition-colors text-sm font-normal text-zinc-400" href="#use-cases">
            Use Cases
          </a>
</div>
</div>
<div className="flex items-center gap-3">
<a className="btn-physical-light rounded-full px-5 py-2 text-sm font-normal" href="#demo">
          Request a demo
        </a>
</div>
</nav>



<div className="relative w-full" id="hero-track" style={{height: '350vh'}}>
<section className="sticky top-0 h-screen w-full overflow-hidden flex flex-col relative items-center justify-center pt-24 pb-12" id="hero">
<style>
    @keyframes bgPan {
      0% {
        background-position: 0 0;
      }
      100% {
        background-position: 40px 40px;
      }
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
    .hero-webgl-threejs {
      position: absolute;
      inset: 0;
      z-index: 0;
      background: #050507;
    }
    .hero-webgl-threejs canvas {
      width: 100%;
      height: 100%;
      display: block;
    }
    .hero-fog {
      position: absolute;
      inset: 0;
      z-index: 1;
      background:
        radial-gradient(circle at 50% 50%, transparent 0%, rgba(5, 5, 7, 0.05) 40%, rgba(5, 5, 7, 0.95) 100%),
        linear-gradient(to bottom, transparent 0%, rgba(5, 5, 7, 0.2) 60%, rgba(5, 5, 7, 1) 100%);
      pointer-events: none;
    }
    .hero-content {
      position: relative;
      z-index: 10;
      width: 100%;
      transition: transform 0.1s ease-out, opacity 0.1s ease-out;
    }
  </style>

<div className="hero-webgl-threejs"><canvas className="" data-engine="three.js r160" height="1914" id="hero3D" style={{width: '1248px', height: '957px'}} width="2496"></canvas></div>
<div className="hero-fog"></div>

<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 hero-content text-center relative z-20 pt-20 sm:pt-24 md:pt-28" style={{pointerEvents: 'auto'}}>
<div className="inline-flex items-center gap-3 rounded-full tactile-glass px-3 py-1.5 text-xs text-zinc-300 mb-8 shadow-2xl">
<span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,1)]"></span>
      InfraLogic Secure Architecture Online
    </div>
<h1 className="mx-auto max-w-5xl text-4xl sm:text-6xl lg:text-[5.2rem] font-normal tracking-tight text-zinc-50 leading-[0.95] drop-shadow-[0_10px_40px_rgba(0,0,0,0.7)]">
<span className="block">Authentication service built</span>
<span className="block text-zinc-300 mt-2">for secure access at scale.</span>
</h1>
<p className="mx-auto mt-8 text-base sm:text-lg text-zinc-400 max-w-2xl">
      Confirm critical user actions with confidence. InfraLogic adapts as your product grows and records every approval for audit and compliance.
    </p>
</div>

<div className="sm:px-6 lg:px-8 w-full max-w-5xl mt-20 mx-auto hero-content relative" style={{pointerEvents: 'auto'}}>
<div className="tilt-element relative w-full aspect-[16/9] md:aspect-[21/9] tactile-base rounded-3xl p-3 md:p-6 flex flex-col shadow-[0_40px_100px_-20px_rgba(0,0,0,1)]" style={{transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="flex-1 tactile-inset rounded-2xl p-1 relative overflow-hidden flex flex-col border border-zinc-800/50">

<div className="h-12 border-b border-zinc-900 bg-zinc-950/80 flex items-center justify-between px-4 backdrop-blur-md">
<div className="flex gap-2 items-center">
<div className="flex gap-1.5 mr-4">
<div className="w-3 h-3 rounded-full bg-zinc-800" style={{animation: 'blinkNode 2s infinite'}}></div>
<div className="w-3 h-3 rounded-full bg-zinc-800" style={{animation: 'blinkNode 2s infinite .4s'}}></div>
<div className="w-3 h-3 rounded-full bg-zinc-800" style={{animation: 'blinkNode 2s infinite .8s'}}></div>
</div>
<div className="h-6 px-3 rounded-md tactile-inset flex items-center text-xs text-zinc-500 font-mono tracking-widest border border-zinc-900 uppercase">
              auth_gateway_primary
            </div>
</div>
</div>

<div className="flex-1 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDBoNDBWMIgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDQwaDQwVjBIMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] relative flex items-center justify-center p-8 gap-8 overflow-hidden" style={{animation: 'bgPan 15s linear infinite'}}>
<div style={{animation: 'nodeFloat1 4s ease-in-out infinite'}}>
<div className="w-32 h-32 rounded-2xl tactile-base border-t border-zinc-700/50 flex items-center justify-center flex-col gap-3 shadow-2xl">
<iconify-icon className="text-zinc-300" icon="solar:shield-keyhole-linear" width="28"></iconify-icon>
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Auth Core</div>
</div>
</div>
<div className="h-2 w-32 tactile-inset rounded-full relative overflow-hidden flex items-center px-1">
<div className="h-0.5 w-full bg-zinc-800 rounded-full"></div>
<div className="absolute left-0 h-0.5 w-1/3 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]"></div>
<div className="absolute top-1/2 -translate-y-1/2 h-1 w-3 bg-white rounded-full shadow-[0_0_8px_#fff]" style={{animation: 'dataFlow 1.5s linear infinite'}}></div>
</div>
<div style={{animation: 'nodeFloat2 3.5s ease-in-out infinite .5s'}}>
<div className="w-24 h-24 rounded-2xl tactile-base border-t border-zinc-700/50 flex items-center justify-center flex-col gap-2 shadow-2xl">
<iconify-icon className="text-zinc-400" icon="solar:database-linear" width="20"></iconify-icon>
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-center leading-tight">Secure<br/>Ledger</div>
</div>
</div>
</div>
</div>
</div>
</div>

</section>
</div>

<section className="py-24 sm:py-32 relative z-10 border-t border-zinc-900/50 bg-[#09090b]" id="impact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl scroll-animate">
<h2 className="text-xs font-normal text-zinc-500 tracking-widest uppercase flex items-center gap-2">
<span className="w-8 h-px bg-zinc-700"></span>
            Platform Impact
          </h2>
<p className="mt-4 text-3xl font-normal tracking-tight text-zinc-100 sm:text-4xl drop-shadow-md">
            Business impact
          </p>
</div>
<div className="mx-auto mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 scroll-animate perspective-1000">
<div className="tactile-base rounded-2xl p-6 group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col h-64">
<div className="absolute right-0 top-0 w-32 h-32 bg-indigo-500/5 rounded-bl-full blur-2xl transition-opacity group-hover:opacity-100 opacity-50"></div>
<div className="mb-auto">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center border border-zinc-800/50 mb-6 shadow-inner relative">
<iconify-icon className="text-zinc-300 relative z-10" icon="solar:shield-warning-linear" width="24"></iconify-icon>
<div className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-indigo-400 transition-colors shadow-[0_0_8px_rgba(99,102,241,0)] group-hover:shadow-[0_0_8px_rgba(99,102,241,1)]"></div>
</div>
<h3 className="text-lg font-normal tracking-tight text-zinc-100">
                Stop fraud and account takeovers
              </h3>
<p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                The system triggers step‑up verification when risk rises. Users receive a one‑time code. An alternate channel delivers the code if the first doesn’t get through.
              </p>
</div>
<div className="h-1 w-12 bg-zinc-800 rounded-full mt-4 group-hover:bg-zinc-600 transition-colors"></div>
</div>
<div className="tactile-base rounded-2xl p-6 group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col h-64">
<div className="mb-auto">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center border border-zinc-800/50 mb-6 shadow-inner relative">
<iconify-icon className="text-zinc-300 relative z-10" icon="solar:route-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal tracking-tight text-zinc-100">
                Reduce friction for users
              </h3>
<p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                InfraLogic's smart routing sends codes via the preferred user’s channel, boosting completion rates and keeping costs predictable.
              </p>
</div>
<div className="h-1 w-12 bg-zinc-800 rounded-full mt-4 group-hover:bg-zinc-600 transition-colors"></div>
</div>
<div className="tactile-base rounded-2xl p-6 group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col h-64">
<div className="mb-auto">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center border border-zinc-800/50 mb-6 shadow-inner relative">
<iconify-icon className="text-zinc-300 relative z-10" icon="solar:document-add-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal tracking-tight text-zinc-100">
                Prove intent
              </h3>
<p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                The ability to sign transactions and sensitive changes creates a clear record of who approved what and when, meeting non‑repudiation requirements.
              </p>
</div>
<div className="h-1 w-12 bg-zinc-800 rounded-full mt-4 group-hover:bg-zinc-600 transition-colors"></div>
</div>
</div>
</div>
</section>

<section className="sm:py-32 overflow-hidden border-y bg-[#0a0a0c] border-zinc-900 pt-24 pb-24 relative shadow-[inset_0_20px_40px_rgba(0,0,0,0.5),inset_0_-20px_40px_rgba(0,0,0,0.5)] hardware-pipeline-section">
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
    @keyframes pipelineBarGrow {
      from { width: 0%; }
      to { width: var(--target, 70%); }
    }
    @keyframes pipelineReveal {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .hardware-pipeline-section .scroll-animate {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
    .hardware-pipeline-section .scroll-animate.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
    .hardware-pipeline-section .pipeline-shell { position: relative; }
    .hardware-pipeline-section .pipeline-spine {
      position: absolute; left: 50%; top: 0; bottom: 0; width: 18px; transform: translateX(-50%);
      border-radius: 999px; z-index: 0;
      background: linear-gradient(to bottom, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
      border: 1px solid rgba(39, 39, 42, 0.75);
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.03), inset 0 0 24px rgba(0,0,0,0.5);
    }
    .hardware-pipeline-section .pipeline-spine-track {
      position: absolute; left: 50%; top: 16px; bottom: 16px; width: 2px; transform: translateX(-50%);
      border-radius: 999px; background: rgba(63, 63, 70, 0.95); overflow: hidden;
    }
    .hardware-pipeline-section .pipeline-beam {
      position: absolute; left: 50%; top: 0; width: 2px; height: 140px; transform: translateX(-50%);
      background: linear-gradient(to bottom, transparent, rgba(99, 102, 241, 0.95), transparent);
      box-shadow: 0 0 18px rgba(99, 102, 241, 0.65);
      animation: pipelineBeam 4s linear infinite;
    }
    .hardware-pipeline-section .pipeline-step {
      position: relative; z-index: 10; display: flex; flex-direction: column; gap: 2rem;
      margin-bottom: 4rem; padding-left: 80px; opacity: 0; transform: translateY(34px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
    .hardware-pipeline-section .pipeline-step:last-child { margin-bottom: 0; }
    .hardware-pipeline-section .pipeline-step.is-visible { opacity: 1; transform: translateY(0); }
    @media (min-width: 768px) {
      .hardware-pipeline-section .pipeline-step {
        display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 2.25rem;
        padding-left: 0; min-height: 120px;
      }
    }
    .hardware-pipeline-section .step-copy,
    .hardware-pipeline-section .step-card,
    .hardware-pipeline-section .step-node {
      opacity: 0; transform: translateY(18px);
      transition: opacity 0.7s ease, transform 0.7s ease, box-shadow 0.35s ease, border-color 0.35s ease;
    }
    .hardware-pipeline-section .pipeline-step.is-visible .step-copy { opacity: 1; transform: translateY(0); transition-delay: 0.05s; }
    .hardware-pipeline-section .pipeline-step.is-visible .step-node { opacity: 1; transition-delay: 0.18s; }
    .hardware-pipeline-section .pipeline-step.is-visible .step-card { opacity: 1; transform: translateY(0); transition-delay: 0.3s; }
    .hardware-pipeline-section .step-copy { width: 100%; }
    .hardware-pipeline-section .step-copy h3 {
      font-size: 1.75rem; line-height: 1.15; font-weight: 400; color: rgb(244 244 245); letter-spacing: -0.03em;
    }
    .hardware-pipeline-section .step-copy p {
      margin-top: 0.75rem; font-size: 1rem; line-height: 1.55; color: rgb(113 113 122); max-width: 28rem;
    }
    .hardware-pipeline-section .step-copy.left, .hardware-pipeline-section .step-copy.right { text-align: left; }
    @media (min-width: 768px) {
      .hardware-pipeline-section .step-copy.left { text-align: right; padding-right: 3.5rem; }
      .hardware-pipeline-section .step-copy.left p { margin-left: auto; }
      .hardware-pipeline-section .step-copy.right { text-align: left; padding-left: 3.5rem; }
    }
    .hardware-pipeline-section .step-card { width: 100%; }
    @media (min-width: 768px) {
      .hardware-pipeline-section .step-card.left { padding-right: 3.5rem; }
      .hardware-pipeline-section .step-card.right { padding-left: 3.5rem; }
    }
    .hardware-pipeline-section .tactile-glass {
      background: linear-gradient(135deg, rgba(30,30,36,0.8), rgba(14,14,18,0.9));
      backdrop-filter: blur(12px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.04);
    }
    .hardware-pipeline-section .tactile-inset {
      background: linear-gradient(to bottom, rgba(12,12,14,0.95), rgba(20,20,24,0.95));
      box-shadow: inset 0 2px 10px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.03);
    }
    .hardware-pipeline-section .pipeline-card {
      border-radius: 1rem; border: 1px solid rgba(63,63,70,0.7);
      transition: border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease;
    }
    .hardware-pipeline-section .pipeline-step:hover .pipeline-card {
      border-color: rgba(82,82,91,0.95);
      box-shadow: 0 18px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04);
    }
    .hardware-pipeline-section .step-node {
      position: absolute; left: 50%; top: 50%; width: 38px; height: 38px;
      transform: translate(-50%, -50%); display: flex; align-items: center; justify-content: center;
      z-index: 20; border-radius: 999px; pointer-events: none;
    }
    .hardware-pipeline-section .pipeline-step.is-visible .step-node { transform: translate(-50%, -50%); }
    .hardware-pipeline-section .step-node-ring {
      position: relative; width: 100%; height: 100%; border-radius: 999px;
      border: 1px solid rgba(63,63,70,0.8); background: radial-gradient(circle at center, rgba(24,24,27,0.95), rgba(10,10,12,0.98));
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 8px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04);
    }
    .hardware-pipeline-section .step-node-ring::before {
      content: ""; position: absolute; inset: -10px; border-radius: 999px;
      border: 1px solid rgba(99,102,241,0.08); opacity: 0.7;
    }
    .hardware-pipeline-section .pipeline-step.step-emerald .step-node-ring::before { border-color: rgba(16,185,129,0.12); }
    .hardware-pipeline-section .pipeline-step.step-zinc .step-node-ring::before { border-color: rgba(255,255,255,0.06); }
    .hardware-pipeline-section .pipeline-step.is-visible .step-node-ring::after {
      content: ""; position: absolute; left: 50%; top: 50%; width: 100%; height: 100%;
      border-radius: 999px; border: 1px solid rgba(99,102,241,0.2);
      animation: pipelinePulse 2s ease-out infinite;
    }
    .hardware-pipeline-section .pipeline-step.step-emerald.is-visible .step-node-ring::after { border-color: rgba(16,185,129,0.24); }
    .hardware-pipeline-section .pipeline-step.step-zinc.is-visible .step-node-ring::after { border-color: rgba(255,255,255,0.12); }
    .hardware-pipeline-section .step-node-dot {
      width: 12px; height: 12px; border-radius: 999px; border: 1px solid rgba(24,24,27,0.95);
      transition: box-shadow 0.4s ease, background-color 0.4s ease;
    }
    .hardware-pipeline-section .pipeline-step.is-visible .step-node-dot {
      box-shadow: 0 0 0 8px rgba(99,102,241,0.06), 0 0 16px rgba(99,102,241,0.34);
    }
    .hardware-pipeline-section .pipeline-step.step-emerald.is-visible .step-node-dot {
      box-shadow: 0 0 0 8px rgba(16,185,129,0.06), 0 0 16px rgba(16,185,129,0.34);
    }
    .hardware-pipeline-section .pipeline-step.step-zinc.is-visible .step-node-dot {
      box-shadow: 0 0 0 8px rgba(255,255,255,0.04), 0 0 14px rgba(255,255,255,0.12);
    }
    .hardware-pipeline-section .progress-track {
      height: 8px; width: 100%; background: rgb(24 24 27); border-radius: 999px;
      overflow: hidden; box-shadow: inset 0 2px 8px rgba(0,0,0,0.55);
    }
    .hardware-pipeline-section .progress-fill { width: 0; height: 100%; border-radius: 999px; }
    .hardware-pipeline-section .pipeline-step.is-visible .progress-fill {
      animation: pipelineBarGrow 1.35s ease forwards; animation-delay: 0.45s;
    }
    .hardware-pipeline-section .mini-chip, .hardware-pipeline-section .mini-stat, .hardware-pipeline-section .mini-line {
      opacity: 0; transform: translateY(10px);
    }
    .hardware-pipeline-section .pipeline-step.is-visible .mini-chip,
    .hardware-pipeline-section .pipeline-step.is-visible .mini-stat,
    .hardware-pipeline-section .pipeline-step.is-visible .mini-line {
      animation: pipelineReveal 0.55s ease forwards;
    }
    .hardware-pipeline-section .pipeline-step.is-visible .mini-chip:nth-child(1),
    .hardware-pipeline-section .pipeline-step.is-visible .mini-stat:nth-child(1),
    .hardware-pipeline-section .pipeline-step.is-visible .mini-line:nth-child(1) { animation-delay: 0.58s; }
    .hardware-pipeline-section .pipeline-step.is-visible .mini-chip:nth-child(2),
    .hardware-pipeline-section .pipeline-step.is-visible .mini-stat:nth-child(2),
    .hardware-pipeline-section .pipeline-step.is-visible .mini-line:nth-child(2) { animation-delay: 0.72s; }
    .hardware-pipeline-section .pipeline-step.is-visible .mini-chip:nth-child(3),
    .hardware-pipeline-section .pipeline-step.is-visible .mini-stat:nth-child(3),
    .hardware-pipeline-section .pipeline-step.is-visible .mini-line:nth-child(3) { animation-delay: 0.86s; }
    @media (max-width: 767px) {
      .hardware-pipeline-section .pipeline-spine { left: 32px; transform: none; }
      .hardware-pipeline-section .pipeline-spine-track { left: 50%; transform: translateX(-50%); }
      .hardware-pipeline-section .pipeline-beam { left: 50%; transform: translateX(-50%); }
      .hardware-pipeline-section .step-node { left: 32px; transform: translate(-50%, -50%); }
      .hardware-pipeline-section .step-copy h3 { font-size: 1.35rem; }
      .hardware-pipeline-section .step-copy p { font-size: 0.95rem; max-width: 100%; }
    }
  </style>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-20 scroll-animate">
<h2 className="text-3xl font-normal tracking-tight text-zinc-100">
        What sets us apart
      </h2>
</div>
<div className="pipeline-shell relative max-w-5xl mx-auto scroll-animate">
<div className="pipeline-spine">
<div className="pipeline-spine-track">
<div className="pipeline-beam"></div>
</div>
</div>

<div className="pipeline-step step-zinc">
<div className="step-copy left">
<h3>Lower messaging costs</h3>
<p>
            Intelligent routing automatically picks the most cost‑effective and reliable channel. Codes go out via SMS, push, Telegram, or email.
          </p>
</div>
<div className="step-card right">
<div className="pipeline-card tactile-glass p-5 flex items-center gap-4">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center text-zinc-300 shrink-0">
<iconify-icon icon="solar:branching-paths-up-linear" width="22"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="progress-track">
<div className="progress-fill bg-zinc-400" style={{-Target: '92%'}}></div>
</div>
<div className="text-xs font-mono text-zinc-500 mt-3 tracking-wider uppercase">
                ROUTING_EFFICIENCY: OPTIMAL
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
                FALLBACK_CHANNEL: ACTIVE
              </div>
<div className="flex justify-end gap-1.5">
<div className="mini-line w-7 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.55)]"></div>
<div className="mini-line w-7 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.55)]"></div>
<div className="mini-line w-7 h-1.5 rounded-full bg-zinc-700"></div>
</div>
</div>
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center text-indigo-400 shrink-0">
<iconify-icon icon="solar:restart-linear" width="22"></iconify-icon>
</div>
</div>
</div>
<div className="step-copy right">
<h3 className="">Always‑on failover</h3>
<p className="">
            InfraLogic uses multi‑step failover. If a message isn’t delivered via the chosen channel, it automatically switches to another. No one‑time password goes missing.
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
<h3>Analytics and control</h3>
<p>
            Real‑time reports and logs offer one source of truth for delivery rates, response times, and conversion. See which channels work best.
          </p>
</div>
<div className="step-card right">
<div className="pipeline-card tactile-glass p-5 flex items-center gap-4">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center text-indigo-400 shrink-0">
<iconify-icon icon="solar:chart-square-linear" width="22"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-3 tracking-wider uppercase">
<span>DELIVERY_RATES</span>
<span>LIVE</span>
</div>
<div className="grid grid-cols-3 gap-2">
<div className="mini-stat rounded-xl border border-zinc-800 bg-zinc-900/80 px-3 py-2 text-[11px] text-zinc-400 font-mono text-center">
                  PUSH 99%
                </div>
<div className="mini-stat rounded-xl border border-zinc-800 bg-zinc-900/80 px-3 py-2 text-[11px] text-zinc-400 font-mono text-center">
                  SMS 94%
                </div>
<div className="mini-stat rounded-xl border border-zinc-800 bg-zinc-900/80 px-3 py-2 text-[11px] text-zinc-400 font-mono text-center">
                  VOICE 97%
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
                API_ENDPOINTS
              </div>
<div className="flex flex-wrap justify-end gap-2">
<span className="mini-chip text-[11px] font-mono px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  READY
                </span>
<span className="mini-chip text-[11px] font-mono px-3 py-1.5 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800">
                  SECURE
                </span>
</div>
</div>
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center text-emerald-400 shrink-0">
<iconify-icon icon="solar:code-square-linear" width="22"></iconify-icon>
</div>
</div>
</div>
<div className="step-copy right">
<h3>Unified API, easy integration</h3>
<p className="">
            A single API simplifies how you connect channels. You register senders and manage message templates from one place.
          </p>
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

<section className="sm:py-32 z-10 bg-[#09090b] border-zinc-900 border-b pt-24 pb-24 relative" id="use-cases">
<div className="z-0 opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiLz48L3N2Zz4=')] absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
<div className="mb-16 scroll-animate">
<h2 className="text-3xl font-normal tracking-tight text-zinc-100 flex items-center gap-3">
<svg className="w-6 h-6 text-zinc-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><path d="M7 11 2-2-2-2"></path><path d="M11 13h4"></path></svg>
          Secure every touchpoint
        </h2>
<p className="mt-4 text-base text-zinc-400 max-w-2xl">
          Use our 2FA platform across diverse scenarios. A flexible API and choice of channel allow you to embed approvals wherever they make sense.
        </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-6 gap-6 scroll-animate tilt-wrapper gap-x-6 gap-y-6">

<div className="tilt-element cmd-panel lg:col-span-2 h-[280px]">
<div className="cmd-panel-header">
<div className="flex flex-col gap-1">
<span className="text-xs text-zinc-400 font-mono uppercase tracking-widest">
                Anomaly Detection
              </span>
<span className="text-base font-normal text-zinc-300">
                Account Access
              </span>
</div>
<div className="flex items-center gap-1.5 px-2 py-1 rounded border border-zinc-700 bg-zinc-800/50 shadow-inner">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse"></div>
<span className="text-xs text-zinc-400 uppercase tracking-widest font-mono">
                Monitoring
              </span>
</div>
</div>
<div className="cmd-panel-body flex flex-col items-center justify-center relative">
<div className="w-32 h-32 rounded-full border border-zinc-800 relative flex items-center justify-center">
<div className="absolute inset-2 rounded-full border border-zinc-800/50"></div>
<div className="absolute inset-0 rounded-full border border-zinc-500/20"></div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
<div className="w-full h-px bg-zinc-500"></div>
<div className="h-full w-px bg-zinc-500 absolute"></div>
</div>
<div className="absolute inset-0 rounded-full" style={{background: 'conic-gradient(from 0deg, transparent 70%, rgba(16, 185, 129, 0.1) 90%, rgba(16, 185, 129, 0.6) 100%)', animation: 'radar-sweep 4s linear infinite'}}></div>
</div>
<div className="w-full flex justify-between items-end absolute bottom-4 px-4">
<span className="text-xs text-zinc-400 font-mono tracking-widest leading-tight">
                Confirm logins from new devices,<br/>reset passwords...
              </span>
</div>
</div>
</div>

<div className="tilt-element cmd-panel lg:col-span-4 h-[280px]" style={{transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="cmd-panel-header">
<span className="text-lg font-normal text-zinc-300">Transactions</span>
<div className="flex items-center gap-1 bg-[#0a0a0c] p-1 rounded-lg border border-zinc-800 shadow-inner">
<button className="px-3 py-1 text-xs font-normal text-zinc-100 bg-[#1e1e24] rounded border border-zinc-700 shadow-sm">
                Payments
              </button>
<button className="px-3 py-1 text-xs font-normal text-zinc-500 hover:text-zinc-300 transition-colors">
                Transfers
              </button>
</div>
</div>
<div className="p-0 flex flex-col flex-1 relative overflow-hidden">
<div className="grid grid-cols-[auto_1fr_2fr_1fr_1fr] gap-4 px-4 py-3 border-b border-zinc-800/50 bg-[#121214]">
<span className="text-xs text-zinc-600 font-mono tracking-widest uppercase w-6">ID</span>
<span className="text-xs text-zinc-600 font-mono tracking-widest uppercase">REF</span>
<span className="text-xs text-zinc-600 font-mono tracking-widest uppercase">ACTION</span>
<span className="text-xs text-zinc-600 font-mono tracking-widest uppercase">STATE</span>
<span className="text-xs text-zinc-600 font-mono tracking-widest uppercase text-right">TIME</span>
</div>
<div className="flex flex-col">
<div className="grid grid-cols-[auto_1fr_2fr_1fr_1fr] gap-4 px-4 py-3 items-center border-b border-zinc-800/30 hover:bg-zinc-800/20 transition-colors">
<div className="w-4 h-4 rounded bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center shadow-inner">
<svg className="w-3 h-3 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-mono">TRX-09A</span>
<span className="text-sm text-zinc-300 truncate">Wire transfer $4,500</span>
<div>
<span className="text-xs text-zinc-400 px-2 py-0.5 rounded border border-zinc-600/50 bg-zinc-700/50">
                    APPROVED
                  </span>
</div>
<span className="text-xs text-zinc-500 font-mono text-right">10:14:22</span>
</div>
<div className="grid grid-cols-[auto_1fr_2fr_1fr_1fr] gap-4 px-4 py-3 items-center border-b border-zinc-700/50 bg-zinc-800/30 border-l-2 border-l-indigo-500 relative">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-transparent pointer-events-none">
</div>
<div className="w-4 h-4 rounded bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center relative z-10 animate-pulse">
<svg className="w-3 h-3 text-indigo-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
<span className="text-xs text-zinc-300 font-mono relative z-10">TRX-11B</span>
<span className="text-sm text-zinc-200 truncate relative z-10">Add new beneficiary</span>
<div className="relative z-10">
<span className="text-xs text-indigo-300 px-2 py-0.5 rounded border border-indigo-600/50 bg-indigo-900/50">
                    STEP-UP REQ
                  </span>
</div>
<span className="text-xs text-zinc-500 font-mono text-right relative z-10">10:12:05</span>
</div>
<div className="grid grid-cols-[auto_1fr_2fr_1fr_1fr] gap-4 px-4 py-3 items-center border-b border-zinc-800/30 hover:bg-zinc-800/20 transition-colors">
<div className="w-4 h-4 rounded bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center shadow-inner">
<svg className="w-3 h-3 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-xs text-zinc-500 font-mono">REF-42C</span>
<span className="text-sm text-zinc-500 truncate">Issue refund $120.00</span>
<div>
<span className="text-xs text-zinc-500 px-2 py-0.5 rounded border border-zinc-800 bg-zinc-900/50">
                    APPROVED
                  </span>
</div>
<span className="text-xs text-zinc-600 font-mono text-right">09:45:00</span>
</div>
</div>
<div className="absolute bottom-4 left-4 right-4 flex justify-center z-20 pointer-events-none">
<span className="text-xs text-zinc-500 bg-[#111113]/80 px-3 py-1 rounded backdrop-blur">Higher-value transactions always require step-up verification.</span>
</div>
</div>
</div>

<div className="tilt-element cmd-panel lg:col-span-2 h-[280px]">
<div className="cmd-panel-header">
<span className="text-base font-normal text-zinc-300">Sensitive Changes</span>
</div>
<div className="cmd-panel-body flex flex-col gap-4 gap-x-4 gap-y-4">
<div className="bg-[#0a0a0c] rounded-xl p-4 border border-zinc-800 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] flex flex-col gap-4 relative">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center">
<svg className="w-3 h-3 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm text-zinc-400">Approve password change</span>
</div>
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded bg-[#111113] border border-zinc-700 flex items-center justify-center"></div>
<span className="text-sm text-zinc-500">Update contact details</span>
</div>
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded bg-[#111113] border border-zinc-700 flex items-center justify-center"></div>
<span className="text-sm text-zinc-500">Authorize admin actions</span>
</div>
</div>
</div>
<div className="mt-auto flex justify-between items-center px-1">
<span className="text-xs text-zinc-500 font-mono uppercase tracking-widest">Verification Required</span>
</div>
</div>
</div>

<div className="tilt-element cmd-panel lg:col-span-4 h-[280px]" style={{transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="cmd-panel-header justify-start gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse"></div>
<span className="text-xs text-emerald-400 font-mono uppercase tracking-widest bg-emerald-900/30 px-2 py-0.5 rounded border border-emerald-700/50">
              Support Verification Active
            </span>
</div>
<div className="cmd-panel-body flex flex-col pt-6 pr-6 pb-6 pl-6 justify-between h-[216px]">
<div className="flex items-center justify-between mb-4">
<span className="text-base font-normal text-zinc-300">Allow your help desk to securely verify a caller before assisting them.</span>
</div>
<div className="w-full relative py-6 flex-1">
<div className="h-10 w-full bg-[#0a0a0c] rounded-lg border border-zinc-800 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] relative overflow-hidden flex items-center">
<div className="flex-1 border-b border-zinc-600/30 border-dashed relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-zinc-500 shadow-[0_0_8px_rgba(161,161,170,0.5)]"></div>
</div>
<div className="px-4 z-10 flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center shadow-lg relative">
<iconify-icon className="text-zinc-300" icon="solar:phone-calling-linear" width="20"></iconify-icon>
<div className="absolute inset-0 rounded-full border border-zinc-500/30 animate-ping"></div>
</div>
</div>
<div className="flex-1 border-b border-indigo-500/50 border-dashed relative">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)] animate-pulse"></div>
</div>
</div>
</div>
<div className="flex justify-between items-end mt-auto pt-4">
<div className="flex flex-col gap-1">
<span className="text-xs text-zinc-500">Secure Voice Channel</span>
<span className="text-sm font-mono text-zinc-300">Caller ID: Verified</span>
</div>
<button className="px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest hover:bg-emerald-500/20 transition-colors">
                Authorize Session
              </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-32 pt-24 pb-24 relative" id="platform">
<style>
        @keyframes dataFlowAnim {
          0% { left: 0%; opacity: 0; transform: scale(0.5) translateY(-50%); }
          10% { opacity: 1; transform: scale(1) translateY(-50%); }
          90% { opacity: 1; transform: scale(1) translateY(-50%); }
          100% { left: 100%; opacity: 0; transform: scale(0.5) translateY(-50%); }
        }
        @keyframes memPulse {
          0%, 100% { opacity: 0.3; border-color: rgba(39,39,42,0.8); box-shadow: none; }
          50% { opacity: 1; border-color: rgba(99,102,241,0.5); background-color: rgba(99,102,241,0.05); box-shadow: inset 0 0 10px rgba(99,102,241,0.2); }
        }
        .animate-data-flow { animation: dataFlowAnim 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
        .memory-block-1 { animation: memPulse 2.5s ease-in-out infinite 0s; }
        .memory-block-2 { animation: memPulse 2.5s ease-in-out infinite 0.4s; }
        .memory-block-3 { animation: memPulse 2.5s ease-in-out infinite 0.8s; }
      </style>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16 scroll-animate">
<h2 className="text-3xl font-normal tracking-tight text-zinc-100 mb-4">
            Choose the channel that works for your users
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] scroll-animate tilt-wrapper">
<div className="tilt-element md:col-span-2 tactile-base rounded-[2rem] p-8 relative overflow-hidden group border border-zinc-800/80 hover:border-zinc-600 transition-colors flex flex-col justify-between">
<div className="absolute inset-0 wire-texture opacity-20 pointer-events-none"></div>
<div className="relative z-10">
<h3 className="text-2xl font-normal tracking-tight text-zinc-100">Intelligent Routing</h3>
<p className="mt-2 text-zinc-400 max-w-md text-sm leading-relaxed">
                Push notifications, SMS, Telegram messages and voice calls deliver one‑time codes instantly. Pick the channel that suits each customer.
              </p>
</div>
<div className="absolute right-[-2%] bottom-[-5%] w-3/4 h-48 tactile-glass rounded-tl-3xl border-t border-l border-zinc-700/80 shadow-2xl p-6 transition-transform duration-700 group-hover:-translate-x-4 group-hover:-translate-y-4 flex flex-col justify-center">
<div className="flex gap-4 items-center w-full relative">
<div className="w-14 h-14 rounded-full tactile-inset flex items-center justify-center text-xs font-mono text-zinc-400 border border-zinc-700 z-10 shadow-[0_10px_20px_rgba(0,0,0,0.5)]">Push</div>
<div className="flex-1 h-1.5 bg-zinc-900 rounded-full relative overflow-hidden shadow-inner border border-zinc-800/50">
<div className="absolute top-1/2 -translate-y-1/2 h-1.5 w-12 bg-indigo-500 rounded-full shadow-[0_0_12px_#6366f1] animate-data-flow"></div>
</div>
<div className="w-14 h-14 rounded-full tactile-inset flex items-center justify-center text-xs font-mono text-zinc-400 border border-zinc-700 z-10 shadow-[0_10px_20px_rgba(0,0,0,0.5)]">SMS</div>
</div>
</div>
</div>
<div className="tilt-element tactile-base rounded-[2rem] p-8 relative overflow-hidden group border border-zinc-800/80 hover:border-zinc-600 transition-colors flex flex-col justify-between">
<div className="relative z-10">
<h3 className="text-xl font-normal tracking-tight text-zinc-100">Automatic Failover</h3>
<p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                The system will automatically fail over if a message isn’t delivered, so approvals flow smoothly and your clients stay protected.
              </p>
</div>
<div className="flex flex-col gap-2 mt-6 z-10 w-full max-w-[180px] mx-auto group-hover:scale-105 transition-transform duration-500">
<div className="h-8 rounded-lg tactile-inset border border-zinc-800 bg-zinc-900/50 memory-block-1 flex items-center px-4">
<iconify-icon className="text-indigo-400" icon="solar:bell-linear" width="14"></iconify-icon>
<div className="ml-3 text-[10px] font-mono text-zinc-500 uppercase">Push Delivery</div>
</div>
<div className="h-8 rounded-lg tactile-inset border border-zinc-800 bg-zinc-900/50 memory-block-2 flex items-center px-4">
<iconify-icon className="text-indigo-400" icon="solar:chat-line-linear" width="14"></iconify-icon>
<div className="ml-3 text-[10px] font-mono text-zinc-500 uppercase">SMS Fallback</div>
</div>
<div className="h-8 rounded-lg tactile-inset border border-zinc-800 bg-zinc-900/50 memory-block-3 flex items-center px-4">
<iconify-icon className="text-indigo-400" icon="solar:phone-linear" width="14"></iconify-icon>
<div className="ml-3 text-[10px] font-mono text-zinc-500 uppercase">Voice Fallback</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0c] border-y border-zinc-900 relative z-10 shadow-[inset_0_20px_40px_rgba(0,0,0,0.5),inset_0_-20px_40px_rgba(0,0,0,0.5)]" id="security">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-16 scroll-animate">
<h2 className="text-3xl font-normal tracking-tight text-zinc-100 flex items-center gap-3">
            Real-world applications
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 scroll-animate tilt-wrapper">
<div className="tilt-element tactile-glass rounded-2xl p-6 border border-zinc-800/80 group">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center border border-zinc-700 mb-6 relative shadow-inner">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-100 transition-colors" icon="solar:card-send-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-zinc-100">Transaction confirmation</h3>
<p className="mt-2 text-sm text-zinc-400">When a customer initiates a transfer or payment, the system sends a code via push or Telegram. If delivery fails, it retries over SMS or voice. Logs record the approval, giving the transaction legal weight.</p>
</div>
<div className="tilt-element tactile-glass rounded-2xl p-6 border border-zinc-800/80 group">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center border border-zinc-700 mb-6 relative shadow-inner">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-100 transition-colors" icon="solar:login-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-zinc-100">System login</h3>
<p className="mt-2 text-sm text-zinc-400">On a suspicious sign‑in or device change, the platform demands a second factor. The user receives a one‑time code through their chosen channel, reducing the risk of hijacking.</p>
</div>
<div className="tilt-element tactile-glass rounded-2xl p-6 border border-zinc-800/80 group">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center border border-zinc-700 mb-6 relative shadow-inner">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-100 transition-colors" icon="solar:user-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-zinc-100">User verification</h3>
<p className="mt-2 text-sm text-zinc-400">During registration or purchase, a code is sent to confirm the person’s identity. Automatic delivery through available channels ensures high completion rates.</p>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 relative z-10 bg-[#09090b]">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-16 scroll-animate text-center max-w-3xl mx-auto">
<h2 className="text-3xl font-normal tracking-tight text-zinc-100 mb-4">
            Who we work with
          </h2>
<p className="text-base text-zinc-400">
            This service suits organisations that value secure, reliable authorisation.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-animate tilt-wrapper">
<div className="tilt-element tactile-glass rounded-2xl p-6 border border-zinc-800/80 group text-center flex flex-col items-center">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center border border-zinc-700 mb-4 relative shadow-inner">
<iconify-icon className="text-zinc-400 group-hover:text-indigo-400 transition-colors" icon="solar:cloud-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-normal text-zinc-100 mb-2">Technology providers &amp; SaaS</h3>
<p className="text-sm text-zinc-400">Secure logins and actions across cloud services.</p>
</div>
<div className="tilt-element tactile-glass rounded-2xl p-6 border border-zinc-800/80 group text-center flex flex-col items-center" style={{transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center border border-zinc-700 mb-4 relative shadow-inner">
<iconify-icon className="text-zinc-400 group-hover:text-indigo-400 transition-colors" icon="solar:smartphone-update-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-normal text-zinc-100 mb-2">Mobile apps &amp; startups</h3>
<p className="text-sm text-zinc-400">Rapid API integration and a user‑friendly experience build loyalty.</p>
</div>
<div className="tilt-element tactile-glass rounded-2xl p-6 border border-zinc-800/80 group text-center flex flex-col items-center">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center border border-zinc-700 mb-4 relative shadow-inner">
<iconify-icon className="text-zinc-400 group-hover:text-indigo-400 transition-colors" icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-normal text-zinc-100 mb-2">Financial services</h3>
<p className="text-sm text-zinc-400">Banks, fintechs, and exchanges. Sign transactions and meet obligations.</p>
</div>
<div className="tilt-element tactile-glass rounded-2xl p-6 border border-zinc-800/80 group text-center flex flex-col items-center">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center border border-zinc-700 mb-4 relative shadow-inner">
<iconify-icon className="text-zinc-400 group-hover:text-indigo-400 transition-colors" icon="solar:box-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-normal text-zinc-100 mb-2">Logistics &amp; delivery</h3>
<p className="text-sm text-zinc-400">Confirm orders, verify drivers, and protect customers from fraud.</p>
</div>
</div>
</div>
</section>

<section className="sm:py-32 overflow-hidden bg-[#0a0a0c] pt-24 pb-24 relative shadow-[inset_0_20px_40px_rgba(0,0,0,0.5),inset_0_-20px_40px_rgba(0,0,0,0.5)]">
<style>
    @keyframes float-1 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-12px) rotate(0.5deg); } }
    @keyframes float-2 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-16px) rotate(-0.5deg); } }
    @keyframes float-3 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-10px) rotate(0.5deg); } }
    @keyframes laser-scan { 0% { top: -10%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 110%; opacity: 0; } }
  </style>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none z-0">
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

<div className="text-center mb-24 scroll-animate">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 mb-6 shadow-inner">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1] animate-pulse"></div>
<span className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase">
              Client Testimonials
            </span>
</div>
</div>

<div className="relative w-full max-w-5xl mx-auto flex flex-col gap-12 md:gap-0 pb-12 perspective-1000">

<div className="hidden md:block absolute top-[5%] bottom-[5%] left-[50%] -translate-x-1/2 w-px bg-zinc-800/60 z-0">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-48 bg-indigo-500 rounded-full shadow-[0_0_15px_#6366f1]" style={{animation: 'laser-scan 5s cubic-bezier(0.4, 0, 0.2, 1) infinite'}}></div>
</div>

<div className="md:w-[65%] tactile-glass p-8 md:p-12 rounded-[2.5rem] border border-zinc-700/50 relative z-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:z-50 hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(0,0,0,0.8)] hover:border-indigo-500/40 group overflow-hidden scroll-animate md:-ml-6 shadow-[0_20px_40px_rgba(0,0,0,0.4)]" style={{animation: 'float-1 8s ease-in-out infinite'}}>
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="absolute -top-10 -right-4 text-[180px] font-serif text-white opacity-[0.02] group-hover:opacity-[0.06] transition-all duration-700 pointer-events-none leading-none group-hover:rotate-12 group-hover:scale-110">"</div>
<div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
<div className="flex-1">
<div className="flex flex-wrap items-center gap-3 mb-6">
<span className="text-[10px] font-mono text-zinc-200 tracking-widest uppercase border border-zinc-700 bg-zinc-800/80 rounded px-3 py-1.5 shadow-inner group-hover:border-indigo-500/40 group-hover:text-indigo-300 transition-colors duration-700">
                    Gabriel Frank
                  </span>
<span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
                    Product Owner, mobile app “Done”
                  </span>
</div>
<p className="text-lg md:text-xl font-normal text-zinc-300 leading-relaxed tracking-tight group-hover:text-white transition-colors duration-700">
              "We integrated InfraLogic with our app to verify users via SMS. The API was clearand easy to use, and our completion rates jumped immediately."
            </p>
</div>
</div>
</div>

<div className="md:w-[65%] self-end tactile-glass p-8 md:p-12 rounded-[2.5rem] border border-zinc-700/50 relative z-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:z-50 hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(0,0,0,0.8)] hover:border-emerald-500/40 group overflow-hidden scroll-animate md:-mr-6 shadow-[0_20px_40px_rgba(0,0,0,0.4)] md:-mt-16" style={{animation: 'float-2 9s ease-in-out infinite'}}>
<div className="absolute inset-0 bg-gradient-to-bl from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="absolute -top-10 -left-4 text-[180px] font-serif text-white opacity-[0.02] group-hover:opacity-[0.06] transition-all duration-700 pointer-events-none leading-none group-hover:-rotate-12 group-hover:scale-110">"</div>
<div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
<div className="flex-1">
<div className="flex flex-wrap items-center gap-3 mb-6">
<span className="text-[10px] font-mono text-zinc-200 tracking-widest uppercase border border-zinc-700 bg-zinc-800/80 rounded px-3 py-1.5 shadow-inner group-hover:border-emerald-500/40 group-hover:text-emerald-300 transition-colors duration-700">
                Sarah Jenkins
              </span>
<span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
                CTO, FinTech Solutions
              </span>
</div>
<p className="text-lg md:text-xl font-normal text-zinc-300 leading-relaxed tracking-tight group-hover:text-white transition-colors duration-700">
              "The automatic failover to voice calls saved us during a major SMS carrier outage. Our high-value transactions didn't skip a beat, and our compliance team loves the detailed audit logs."
            </p>
</div>
</div>
</div>

<div className="md:w-[65%] tactile-glass p-8 md:p-12 rounded-[2.5rem] border border-zinc-700/50 relative z-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:z-50 hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(0,0,0,0.8)] hover:border-indigo-500/40 group overflow-hidden scroll-animate md:-ml-6 shadow-[0_20px_40px_rgba(0,0,0,0.4)] md:-mt-16" style={{animation: 'float-3 8.5s ease-in-out infinite'}}>
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="absolute -top-10 -right-4 text-[180px] font-serif text-white opacity-[0.02] group-hover:opacity-[0.06] transition-all duration-700 pointer-events-none leading-none group-hover:rotate-12 group-hover:scale-110">"</div>
<div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
<div className="flex-1">
<div className="flex flex-wrap items-center gap-3 mb-6">
<span className="text-[10px] font-mono text-zinc-200 tracking-widest uppercase border border-zinc-700 bg-zinc-800/80 rounded px-3 py-1.5 shadow-inner group-hover:border-indigo-500/40 group-hover:text-indigo-300 transition-colors duration-700">
                David Chen
              </span>
<span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
                Head of Security, Global Logistics
              </span>
</div>
<p className="text-lg md:text-xl font-normal text-zinc-300 leading-relaxed tracking-tight group-hover:text-white transition-colors duration-700">
              "Push authentication has drastically reduced friction for our drivers. When they're on the road, a simple tap to approve is infinitely better than manually typing a 6-digit code."
            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-900 bg-[#09090b] relative z-10 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
<div className="tactile-base md:p-16 flex flex-col scroll-animate overflow-hidden border-zinc-800 border rounded-3xl pt-10 pr-10 pb-10 pl-10 relative shadow-[0_20px_60px_-15px_rgba(0,0,0,1)] items-center w-full">

<div className="absolute inset-0 opacity-10 pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-zinc-500/20"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-zinc-500/20"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-zinc-500/20"></div>
</div>
<div className="w-16 h-16 rounded-2xl tactile-inset flex items-center justify-center border border-zinc-700 mb-8 relative shadow-inner z-10">
<i className="w-8 h-8 text-indigo-500" data-lucide="mail"></i>
<div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] animate-pulse"></div>
</div>
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-zinc-100 mb-6 drop-shadow-md z-10 text-center">Get in touch</h2>
<p className="text-zinc-400 max-w-xl mb-10 text-lg z-10 text-center">
    Have questions about our security infrastructure? Reach out to our team.
  </p>
<form className="w-full max-w-2xl z-10 text-left flex flex-col gap-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-zinc-300" htmlFor="first-name">First Name</label>
<input className="tactile-input w-full rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 transition-colors" id="first-name" placeholder="Jane" required="" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-zinc-300" htmlFor="last-name">Last Name</label>
<input className="tactile-input w-full rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 transition-colors" id="last-name" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-zinc-300" htmlFor="email">Email</label>
<input className="tactile-input w-full rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 transition-colors" id="email" placeholder="jane@example.com" required="" type="email"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-zinc-300" htmlFor="message">Message</label>
<textarea className="tactile-input w-full rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 transition-colors resize-none" id="message" placeholder="How can we help you?" required="" rows="4"></textarea>
</div>
<div className="mt-4 flex justify-center w-full">
<button className="btn-physical-light rounded-full px-8 py-3 text-sm font-medium w-full sm:w-auto text-center flex items-center justify-center gap-2" type="submit">
        Submit
        <i className="w-4 h-4" data-lucide="send"></i>
</button>
</div>
</form>

</div>
<footer className="mt-24 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 scroll-animate">
<div className="flex items-center gap-2">
<span className="text-lg font-medium tracking-tight text-white">InfraLogic</span>
<span className="text-xs text-zinc-600 font-mono border-l border-zinc-800 pl-2">© 2024 Secure Systems</span>
</div>
<div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-zinc-300 transition-colors" href="#">System Status</a>
<a className="hover:text-zinc-300 transition-colors" href="#">API Reference</a>
</div>
</footer>
</div>
</section>



    </>
  );
}
