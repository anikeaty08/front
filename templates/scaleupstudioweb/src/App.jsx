import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    (function(){
        const canvas = document.getElementById("hero3D");
        if(!canvas || !window.THREE) return;

        const scene = new THREE.Scene();
        // Richer, deeper fog for better cinematic immersion
        scene.fog = new THREE.FogExp2(0x050507, 0.015);

        const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
        camera.position.set(0, 8, 20);

        const renderer = new THREE.WebGLRenderer({ canvas, alpha:true, antialias:true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);

        /* ==========================================
           IMPROVED CINEMATIC BLACK HOLE
           ========================================== */
        const bhUniforms = {
          uTime: { value: 0 },
          uScroll: { value: 0 }
        };

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

              // Absolute Event Horizon
              float coreRadius = 0.18;
              float core = smoothstep(coreRadius + 0.02, coreRadius, r);

              // Extreme Gravitational Lensing
              float warpFactor = 0.12 / (r + 0.01);
              vec2 warpedUv = uv + normalize(uv) * warpFactor;
              float warpedR = length(warpedUv);
              float warpedAngle = atan(warpedUv.y, warpedUv.x);

              float swirlSpeed = uTime * 0.08;
              float swirl = warpedAngle - warpedR * 2.5 + swirlSpeed;

              // High-Definition Accretion Disk
              vec2 noiseCoords = vec2(cos(swirl), sin(swirl)) * 1.8 - vec2(uTime * 0.02);
              float n1 = fbm(noiseCoords * 2.5);
              float n2 = fbm(noiseCoords * 5.0 + uTime * 0.04);

              float diskMask = smoothstep(0.9, coreRadius, r);
              float innerGlowMask = smoothstep(coreRadius + 0.3, coreRadius, r);

              float intensity = (n1 * 0.5 + 0.5) * diskMask;
              float highlight = (n2 * 0.5 + 0.5) * innerGlowMask * 2.0;

              // Cinematic Deep Indigo & Violet Palette
              vec3 deepSpace = vec3(0.01, 0.01, 0.02);
              vec3 darkViolet = vec3(0.12, 0.04, 0.25);
              vec3 plasmaBlue = vec3(0.2, 0.5, 0.9);
              vec3 coreWhite = vec3(0.9, 0.95, 1.0);

              vec3 color = mix(deepSpace, darkViolet, intensity * 1.5);
              color = mix(color, plasmaBlue, highlight * 0.9);
              color += coreWhite * pow(innerGlowMask, 4.0) * (0.3 + 0.7 * sin(swirlSpeed * 3.0 + warpedR * 15.0));

              // Pitch black core override
              color = mix(color, vec3(0.0), core);

              float alpha = (intensity + highlight) * diskMask;
              alpha = max(alpha, core);
              alpha *= smoothstep(1.0, 0.5, r); // Smoother fade at edges

              // Glow amplifies as we scroll closer
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

        // Massive scale, pushed lower and further back for cinematic depth
        const bhGeo = new THREE.PlaneGeometry(180, 180);
        const bhMesh = new THREE.Mesh(bhGeo, bhMaterial);
        bhMesh.position.set(0, 12, -45); 
        bhMesh.renderOrder = -2;
        scene.add(bhMesh);

        /* ==========================================
           INTERACTIVE VOLUMETRIC FOG
           ========================================== */
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
          if(rand < 0.4) color.setHex(0x1a153a);      // violet plasma
          else if(rand < 0.7) color.setHex(0x0f2040); // deep ocean blue
          else color.setHex(0x050508);                // pitch shadow

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
          // Store base behaviors
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

        /* ==========================================
           HORIZON GRID
           ========================================== */
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

        /* ==========================================
           PARTICLE FIELD
           ========================================== */
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
          color: 0xc7d2fe, // brighter violet-white
          size: 0.02,
          transparent: true,
          opacity: 0.3,
          blending: THREE.AdditiveBlending,
          depthWrite: false
        });
        const glow = new THREE.Points(pGeo, pMat);
        scene.add(glow);

        /* ==========================================
           INTERACTION & PARALLAX
           ========================================== */
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
            // Calculate progress through the sticky track
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
          
          // Smooth mouse interpolation
          mouseX += (targetX - mouseX) * 0.05;
          mouseY += (targetY - mouseY) * 0.05;

          // Fade grid out as we fly in
          const targetGridOpacity = 0.06 * (1.0 - scrollP);
          gridMaterial.uniforms.uOpacity.value += (targetGridOpacity - gridMaterial.uniforms.uOpacity.value) * 0.05;

          scrollP += (targetScrollP - scrollP) * 0.04;
          bhUniforms.uScroll.value = scrollP;

          /* --- Cinematic Camera Dive --- */
          // Pushes the camera deep into the Z axis towards the black hole
          const baseZ = 20 - scrollP * 65; 
          const baseY = 8 - scrollP * 6;
          const baseX = scrollP * 2;

          camera.position.z += (baseZ - camera.position.z) * 0.06;
          camera.position.y += ((baseY - mouseY * 2.0) - camera.position.y) * 0.06;
          camera.position.x += ((baseX + mouseX * 3.0) - camera.position.x) * 0.06;

          // Warp FOV for "lightspeed" effect
          const targetFov = 60 + scrollP * 45; 
          camera.fov += (targetFov - camera.fov) * 0.06;
          camera.updateProjectionMatrix();

          // Camera looks dynamically based on mouse and scroll
          camera.lookAt(
            mouseX * 4.0, 
            bhMesh.position.y - 4 + scrollP * 12, 
            -20 - scrollP * 30
          );

          gridPlane.position.x = camera.position.x;
          gridPlane.position.z = camera.position.z;
          
          bhMesh.lookAt(camera.position);

          /* --- Update HTML Content Scaling and Fading --- */
          heroContents.forEach(el => {
            const scale = 1 + scrollP * 1.5;
            const opacity = 1 - scrollP * 2.5; // Fades out quicker to clear the view
            el.style.transform = `scale(${scale}) translateY(${scrollP * -80}px)`;
            el.style.opacity = Math.max(0, opacity);
            el.style.pointerEvents = opacity <= 0 ? 'none' : 'auto';
          });

          /* --- Interactive Volumetric Fog --- */
          // Map mouse roughly to scene coordinates
          let sceneMouseX = mouseX * 80;
          let sceneMouseY = -mouseY * 50 + 10;

          smokePlanes.forEach((plane) => {
            // Drift logic
            plane.userData.baseX += plane.userData.driftX;
            plane.userData.baseY += plane.userData.driftY;

            // Interactive logic: Fog repels subtly from the cursor
            let dx = plane.position.x - sceneMouseX;
            let dy = plane.position.y - sceneMouseY;
            let dist = Math.sqrt(dx*dx + dy*dy);
            
            let repelX = 0, repelY = 0;
            if(dist < 30) {
              let force = (30 - dist) / 30;
              repelX = (dx/dist) * force * 5;
              repelY = (dy/dist) * force * 5;
              plane.rotation.z += force * 0.01; // swirling reaction
            }

            // Spring back to base position
            plane.position.x += ((plane.userData.baseX + repelX) - plane.position.x) * 0.05;
            plane.position.y += ((plane.userData.baseY + repelY) - plane.position.y) * 0.05;
            plane.rotation.z += plane.userData.rotSpeed;

            // Opacity pulses
            const wave = Math.sin(plane.position.x * 0.02 + elapsed * 0.3 + plane.userData.phaseOffset);
            plane.material.opacity = plane.userData.baseOpacity + (wave * 0.1);

            // Gentle bounds wrapping
            if(plane.userData.baseX > 70) plane.userData.baseX = -70;
            if(plane.userData.baseX < -70) plane.userData.baseX = 70;
            if(plane.userData.baseY > 50) plane.userData.baseY = -10;
            if(plane.userData.baseY < -10) plane.userData.baseY = 50;
          });

          /* --- Update Particle Flow Field --- */
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

            let speed = speeds[i/3] * (1.0 + scrollP * 4.0); // Extreme acceleration on scroll

            // Pull towards core
            positions[i] += (dx/dist) * speed;
            positions[i+1] += (dy/dist) * speed;
            positions[i+2] += (dz/dist) * speed;

            // Tangential Swirl (Orbiting behavior)
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
        {
          threshold: 0.22,
          rootMargin: '0px 0px -10% 0px'
        }
      );

      revealTargets.forEach((el) => observer.observe(el));
    })();
  


      // 1. Initialize Lucide Icons
      lucide.createIcons();

      // 2. Scroll Animations (Intersection Observer)
      const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      }, { 
        threshold: 0.1, 
        rootMargin: '0px 0px -50px 0px' 
      });

      document.querySelectorAll('.scroll-animate').forEach(el => {
        scrollObserver.observe(el);
      });

      
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div bis_label="style" bis_size='{"x":0,"y":5611,"w":1520,"h":687,"abs_x":0,"abs_y":5653}' className="fixed inset-0 -z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-50" style={{backgroundImage: 'url(\'data:image/svg+xml'}}></div>
<div bis_size='{"x":0,"y":5611,"w":1520,"h":687,"abs_x":0,"abs_y":5653}' className="fixed inset-0 -z-10 bg-gradient-to-b from-transparent via-zinc-950/80 to-zinc-950 pointer-events-none"></div>

<nav bis_size='{"x":248,"y":5635,"w":1024,"h":52,"abs_x":248,"abs_y":5677}' className="fixed -translate-x-1/2 w-[calc(100%-2rem)] tactile-glass flex transition-transform duration-500 hover:translate-y-[-2px] max-w-5xl z-50 rounded-full pt-3 pr-4 pb-3 pl-4 top-6 left-1/2 items-center justify-between">
<div bis_size='{"x":264,"y":5647,"w":154,"h":28,"abs_x":264,"abs_y":5689}' className="flex items-center gap-8 pl-2">
<span bis_size='{"x":272,"y":5647,"w":114,"h":28,"abs_x":272,"abs_y":5689}' className="text-lg font-medium text-zinc-100 tracking-tight">scaleupstudio</span>
<div bis_size='{"x":419,"y":5661,"w":0,"h":0,"abs_x":419,"abs_y":5703}' className="hidden md:flex gap-6">
</div>
</div>
<div bis_size='{"x":1256,"y":5661,"w":0,"h":0,"abs_x":1256,"abs_y":5703}' className="flex items-center gap-3">
</div>
</nav>



<div bis_size='{"x":0,"y":0,"w":1520,"h":2405,"abs_x":0,"abs_y":42}' className="relative w-full" id="hero-track" style={{height: '350vh'}}>
<section bis_size='{"x":0,"y":1718,"w":1520,"h":687,"abs_x":0,"abs_y":1760}' className="sticky top-0 h-screen w-full overflow-hidden flex flex-col relative items-center justify-center pt-24 pb-12" id="hero">
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

      0%,
      100% {
        background: #27272a;
      }

      50% {
        background: #10b981;
        box-shadow: 0 0 10px #10b981;
      }
    }

    @keyframes nodeFloat1 {

      0%,
      100% {
        transform: translateY(0);
      }

      50% {
        transform: translateY(-6px);
      }
    }

    @keyframes nodeFloat2 {

      0%,
      100% {
        transform: translateY(0);
      }

      50% {
        transform: translateY(-4px);
      }
    }

    @keyframes dataFlow {
      0% {
        left: -10%;
        opacity: 0;
      }

      20%,
      80% {
        opacity: 1;
      }

      100% {
        left: 110%;
        opacity: 0;
      }
    }

    .hero-webgl-threejs {
      position: absolute;
      inset: 0;
      z-index: 0;
      background: #050507;
      /* Deeper space background */
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

<div bis_size='{"x":0,"y":1718,"w":1520,"h":687,"abs_x":0,"abs_y":1760}' className="hero-webgl-threejs"><canvas bis_size='{"x":0,"y":1718,"w":1536,"h":687,"abs_x":0,"abs_y":1760}' className="" data-engine="three.js r160" height="858" id="hero3D" style={{width: '1536px', height: '687px'}} width="1920"></canvas></div>
<div bis_size='{"x":0,"y":1718,"w":1520,"h":687,"abs_x":0,"abs_y":1760}' className="hero-fog"></div>

<div bis_size='{"x":120,"y":1626,"w":1280,"h":426,"abs_x":120,"abs_y":1668}' className="sm:px-6 lg:px-8 hero-content sm:pt-24 md:pt-28 z-20 text-center max-w-7xl mr-auto ml-auto pt-20 pr-4 pl-4 relative" style={{pointerEvents: 'auto'}}>
<div bis_size='{"x":689,"y":1738,"w":142,"h":28,"abs_x":689,"abs_y":1780}' className="inline-flex tactile-glass text-xs text-zinc-300 rounded-full mb-8 pt-1.5 pr-3 pb-1.5 pl-3 shadow-2xl gap-x-3 gap-y-3 items-center">scaleupstudio Online</div>
<h1 bis_size='{"x":248,"y":1798,"w":1024,"h":166,"abs_x":248,"abs_y":1840}' className="sm:text-6xl lg:text-[5.2rem] leading-[0.95] text-4xl font-normal text-zinc-50 tracking-tight max-w-5xl mr-auto ml-auto drop-shadow-[0_10px_40px_rgba(0,0,0,0.7)]">
<span bis_size='{"x":248,"y":1798,"w":1024,"h":166,"abs_x":248,"abs_y":1840}' className="block">Next-Generation Websites for Modern Businesses</span>
</h1>
<p bis_size='{"x":424,"y":1997,"w":672,"h":56,"abs_x":424,"abs_y":2039}' className="sm:text-lg text-base text-zinc-400 max-w-2xl mt-8 mr-auto ml-auto">ScaleUpStudio creates visually stunning and high-performance websites designed to elevate your brand and grow your online presence.</p>
</div>

<div bis_size='{"x":248,"y":2133,"w":1024,"h":411,"abs_x":248,"abs_y":2175}' className="sm:px-6 lg:px-8 w-full max-w-5xl mt-20 mx-auto hero-content relative" style={{pointerEvents: 'auto', transform: 'scale(1) translateY(0px)', opacity: '1'}}>
<div bis_size='{"x":280,"y":2133,"w":960,"h":411,"abs_x":280,"abs_y":2175}' className="tilt-element relative w-full aspect-[16/9] md:aspect-[21/9] tactile-base rounded-3xl p-3 md:p-6 flex flex-col shadow-[0_40px_100px_-20px_rgba(0,0,0,1)]">
<div bis_size='{"x":304,"y":2157,"w":912,"h":363,"abs_x":304,"abs_y":2199}' className="flex-1 tactile-inset rounded-2xl p-1 relative overflow-hidden flex flex-col border border-zinc-800/50">

<div bis_size='{"x":309,"y":2161,"w":902,"h":48,"abs_x":309,"abs_y":2203}' className="h-12 border-b border-zinc-900 bg-zinc-950/80 flex items-center justify-between px-4 backdrop-blur-md">
<div bis_size='{"x":325,"y":2173,"w":230,"h":24,"abs_x":325,"abs_y":2215}' className="flex gap-2 items-center">
<div bis_size='{"x":325,"y":2179,"w":48,"h":12,"abs_x":325,"abs_y":2221}' className="flex gap-1.5 mr-4">
<div bis_size='{"x":325,"y":2179,"w":12,"h":12,"abs_x":325,"abs_y":2221}' className="w-3 h-3 rounded-full bg-zinc-800" style={{animation: 'blinkNode 2s infinite'}}></div>
<div bis_size='{"x":343,"y":2179,"w":12,"h":12,"abs_x":343,"abs_y":2221}' className="w-3 h-3 rounded-full bg-zinc-800" style={{animation: 'blinkNode 2s infinite .4s'}}></div>
<div bis_size='{"x":361,"y":2179,"w":12,"h":12,"abs_x":361,"abs_y":2221}' className="w-3 h-3 rounded-full bg-zinc-800" style={{animation: 'blinkNode 2s infinite .8s'}}></div>
</div>
<div bis_size='{"x":397,"y":2173,"w":158,"h":24,"abs_x":397,"abs_y":2215}' className="tactile-inset flex text-xs text-zinc-500 tracking-widest font-mono h-6 border-zinc-900 border rounded-md pr-3 pl-3 items-center">scaleup__studio__</div>
</div>
</div>

<div bis_label="style" bis_size='{"x":309,"y":2209,"w":902,"h":305,"abs_x":309,"abs_y":2251}' className="flex-1 flex gap-8 overflow-hidden bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDBoNDBWMIgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDQwaDQwVjBIMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] pt-8 pr-8 pb-8 pl-8 relative gap-x-8 gap-y-8 items-center justify-center" style={{animation: '15s linear 0s infinite normal none running bgPan', backgroundImage: 'url(\'data:image/svg+xml'}}>
<div bis_size='{"x":552,"y":2298,"w":128,"h":128,"abs_x":552,"abs_y":2340}' className="" style={{animation: 'nodeFloat1 4s ease-in-out infinite'}}>
<div bis_size='{"x":552,"y":2298,"w":128,"h":128,"abs_x":552,"abs_y":2340}' className="tactile-base flex flex-col gap-2 w-32 h-32 border-zinc-700/50 rounded-2xl border-t shadow-2xl gap-x-2 gap-y-2 items-center justify-center">scaleupstudio</div>
</div>
<div bis_size='{"x":712,"y":2358,"w":128,"h":8,"abs_x":712,"abs_y":2400}' className="h-2 w-32 tactile-inset rounded-full relative overflow-hidden flex items-center px-1">
<div bis_size='{"x":716,"y":2361,"w":120,"h":2,"abs_x":716,"abs_y":2403}' className="h-0.5 w-full bg-zinc-800 rounded-full"></div>
<div bis_size='{"x":712,"y":2361,"w":42,"h":2,"abs_x":712,"abs_y":2403}' className="absolute left-0 h-0.5 w-1/3 bg-indigo-500 rounded-full shadow-[0_0_10px_#6366f1]"></div>
<div bis_size='{"x":716,"y":2360,"w":12,"h":4,"abs_x":716,"abs_y":2402}' className="absolute top-1/2 -translate-y-1/2 h-1 w-3 bg-white rounded-full shadow-[0_0_8px_#fff]" style={{animation: 'dataFlow 1.5s linear infinite'}}></div>
</div>
<div bis_size='{"x":872,"y":2314,"w":96,"h":96,"abs_x":872,"abs_y":2356}' className="" style={{animation: 'nodeFloat2 3.5s ease-in-out infinite .5s'}}>
<div bis_size='{"x":872,"y":2314,"w":96,"h":96,"abs_x":872,"abs_y":2356}' className="tactile-base flex flex-col gap-2 w-24 h-24 border-zinc-700/50 rounded-2xl border-t shadow-2xl gap-x-2 gap-y-2 items-center justify-center">business</div>
</div>
</div>
</div>
</div>
</div>


</section>
</div>


<section bis_size='{"x":0,"y":2405,"w":1520,"h":437,"abs_x":0,"abs_y":2447}' className="sm:py-32 overflow-hidden border-y hardware-pipeline-section bg-[#0a0a0c] border-zinc-900 pt-24 pb-24 relative shadow-[inset_0_20px_40px_rgba(0,0,0,0.5),inset_0_-20px_40px_rgba(0,0,0,0.5)]">
<style>
    @keyframes pipelineBeam {
      0% {
        transform: translate(-50%, -35%);
        opacity: 0;
      }
      15% {
        opacity: 1;
      }
      100% {
        transform: translate(-50%, 340%);
        opacity: 0;
      }
    }

    @keyframes pipelinePulse {
      0%, 100% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0.55;
      }
      50% {
        transform: translate(-50%, -50%) scale(1.45);
        opacity: 0;
      }
    }

    @keyframes pipelineBarGrow {
      from {
        width: 0%;
      }
      to {
        width: var(--target, 70%);
      }
    }

    @keyframes pipelineReveal {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
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

    .hardware-pipeline-section .pipeline-shell {
      position: relative;
    }

    .hardware-pipeline-section .pipeline-spine {
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 18px;
      transform: translateX(-50%);
      border-radius: 999px;
      z-index: 0;
      background: linear-gradient(to bottom, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
      border: 1px solid rgba(39, 39, 42, 0.75);
      box-shadow:
        inset 0 1px 0 rgba(255,255,255,0.03),
        inset 0 0 24px rgba(0,0,0,0.5);
    }

    .hardware-pipeline-section .pipeline-spine-track {
      position: absolute;
      left: 50%;
      top: 16px;
      bottom: 16px;
      width: 2px;
      transform: translateX(-50%);
      border-radius: 999px;
      background: rgba(63, 63, 70, 0.95);
      overflow: hidden;
    }

    .hardware-pipeline-section .pipeline-beam {
      position: absolute;
      left: 50%;
      top: 0;
      width: 2px;
      height: 140px;
      transform: translateX(-50%);
      background: linear-gradient(
        to bottom,
        transparent,
        rgba(99, 102, 241, 0.95),
        transparent
      );
      box-shadow: 0 0 18px rgba(99, 102, 241, 0.65);
      animation: pipelineBeam 4s linear infinite;
    }

    .hardware-pipeline-section .pipeline-step {
      position: relative;
      z-index: 10;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-bottom: 4rem;
      padding-left: 80px;
      opacity: 0;
      transform: translateY(34px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }

    .hardware-pipeline-section .pipeline-step:last-child {
      margin-bottom: 0;
    }

    .hardware-pipeline-section .pipeline-step.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    @media (min-width: 768px) {
      .hardware-pipeline-section .pipeline-step {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 2.25rem;
        padding-left: 0;
        min-height: 120px;
      }
    }

    .hardware-pipeline-section .step-copy,
    .hardware-pipeline-section .step-card,
    .hardware-pipeline-section .step-node {
      opacity: 0;
      transform: translateY(18px);
      transition:
        opacity 0.7s ease,
        transform 0.7s ease,
        box-shadow 0.35s ease,
        border-color 0.35s ease;
    }

    .hardware-pipeline-section .pipeline-step.is-visible .step-copy {
      opacity: 1;
      transform: translateY(0);
      transition-delay: 0.05s;
    }

    .hardware-pipeline-section .pipeline-step.is-visible .step-node {
      opacity: 1;
      transition-delay: 0.18s;
    }

    .hardware-pipeline-section .pipeline-step.is-visible .step-card {
      opacity: 1;
      transform: translateY(0);
      transition-delay: 0.3s;
    }

    .hardware-pipeline-section .step-copy {
      width: 100%;
    }

    .hardware-pipeline-section .step-copy h3 {
      font-size: 1.75rem;
      line-height: 1.15;
      font-weight: 400;
      color: rgb(244 244 245);
      letter-spacing: -0.03em;
    }

    .hardware-pipeline-section .step-copy p {
      margin-top: 0.75rem;
      font-size: 1rem;
      line-height: 1.55;
      color: rgb(113 113 122);
      max-width: 28rem;
    }

    .hardware-pipeline-section .step-copy.left,
    .hardware-pipeline-section .step-copy.right {
      text-align: left;
    }

    @media (min-width: 768px) {
      .hardware-pipeline-section .step-copy.left {
        text-align: right;
        padding-right: 3.5rem;
      }

      .hardware-pipeline-section .step-copy.left p {
        margin-left: auto;
      }

      .hardware-pipeline-section .step-copy.right {
        text-align: left;
        padding-left: 3.5rem;
      }
    }

    .hardware-pipeline-section .step-card {
      width: 100%;
    }

    @media (min-width: 768px) {
      .hardware-pipeline-section .step-card.left {
        padding-right: 3.5rem;
      }

      .hardware-pipeline-section .step-card.right {
        padding-left: 3.5rem;
      }
    }

    .hardware-pipeline-section .tactile-base {
      background: linear-gradient(to bottom, rgba(24,24,27,0.94), rgba(10,10,12,0.96));
      box-shadow:
        0 10px 30px rgba(0,0,0,0.35),
        inset 0 1px 0 rgba(255,255,255,0.04);
    }

    .hardware-pipeline-section .tactile-glass {
      background: linear-gradient(135deg, rgba(30,30,36,0.8), rgba(14,14,18,0.9));
      backdrop-filter: blur(12px);
      box-shadow:
        0 10px 30px rgba(0,0,0,0.28),
        inset 0 1px 0 rgba(255,255,255,0.04);
    }

    .hardware-pipeline-section .tactile-inset {
      background: linear-gradient(to bottom, rgba(12,12,14,0.95), rgba(20,20,24,0.95));
      box-shadow:
        inset 0 2px 10px rgba(0,0,0,0.65),
        inset 0 1px 0 rgba(255,255,255,0.03);
    }

    .hardware-pipeline-section .pipeline-card {
      border-radius: 1rem;
      border: 1px solid rgba(63,63,70,0.7);
      transition:
        border-color 0.35s ease,
        box-shadow 0.35s ease,
        transform 0.35s ease;
    }

    .hardware-pipeline-section .pipeline-step:hover .pipeline-card {
      border-color: rgba(82,82,91,0.95);
      box-shadow:
        0 18px 40px rgba(0,0,0,0.35),
        inset 0 1px 0 rgba(255,255,255,0.04);
    }

    .hardware-pipeline-section .step-node {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 38px;
      height: 38px;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 20;
      border-radius: 999px;
      pointer-events: none;
    }

    .hardware-pipeline-section .pipeline-step.is-visible .step-node {
      transform: translate(-50%, -50%);
    }

    .hardware-pipeline-section .step-node-ring {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 999px;
      border: 1px solid rgba(63,63,70,0.8);
      background: radial-gradient(circle at center, rgba(24,24,27,0.95), rgba(10,10,12,0.98));
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow:
        0 8px 24px rgba(0,0,0,0.35),
        inset 0 1px 0 rgba(255,255,255,0.04);
    }

    .hardware-pipeline-section .step-node-ring::before {
      content: "";
      position: absolute;
      inset: -10px;
      border-radius: 999px;
      border: 1px solid rgba(99,102,241,0.08);
      opacity: 0.7;
    }

    .hardware-pipeline-section .pipeline-step.step-emerald .step-node-ring::before {
      border-color: rgba(16,185,129,0.12);
    }

    .hardware-pipeline-section .pipeline-step.step-zinc .step-node-ring::before {
      border-color: rgba(255,255,255,0.06);
    }

    .hardware-pipeline-section .pipeline-step.is-visible .step-node-ring::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      width: 100%;
      height: 100%;
      border-radius: 999px;
      border: 1px solid rgba(99,102,241,0.2);
      animation: pipelinePulse 2s ease-out infinite;
    }

    .hardware-pipeline-section .pipeline-step.step-emerald.is-visible .step-node-ring::after {
      border-color: rgba(16,185,129,0.24);
    }

    .hardware-pipeline-section .pipeline-step.step-zinc.is-visible .step-node-ring::after {
      border-color: rgba(255,255,255,0.12);
    }

    .hardware-pipeline-section .step-node-dot {
      width: 12px;
      height: 12px;
      border-radius: 999px;
      border: 1px solid rgba(24,24,27,0.95);
      transition: box-shadow 0.4s ease, background-color 0.4s ease;
    }

    .hardware-pipeline-section .pipeline-step.is-visible .step-node-dot {
      box-shadow:
        0 0 0 8px rgba(99,102,241,0.06),
        0 0 16px rgba(99,102,241,0.34);
    }

    .hardware-pipeline-section .pipeline-step.step-emerald.is-visible .step-node-dot {
      box-shadow:
        0 0 0 8px rgba(16,185,129,0.06),
        0 0 16px rgba(16,185,129,0.34);
    }

    .hardware-pipeline-section .pipeline-step.step-zinc.is-visible .step-node-dot {
      box-shadow:
        0 0 0 8px rgba(255,255,255,0.04),
        0 0 14px rgba(255,255,255,0.12);
    }

    .hardware-pipeline-section .progress-track {
      height: 8px;
      width: 100%;
      background: rgb(24 24 27);
      border-radius: 999px;
      overflow: hidden;
      box-shadow: inset 0 2px 8px rgba(0,0,0,0.55);
    }

    .hardware-pipeline-section .progress-fill {
      width: 0;
      height: 100%;
      border-radius: 999px;
    }

    .hardware-pipeline-section .pipeline-step.is-visible .progress-fill {
      animation: pipelineBarGrow 1.35s ease forwards;
      animation-delay: 0.45s;
    }

    .hardware-pipeline-section .mini-chip,
    .hardware-pipeline-section .mini-stat,
    .hardware-pipeline-section .mini-line {
      opacity: 0;
      transform: translateY(10px);
    }

    .hardware-pipeline-section .pipeline-step.is-visible .mini-chip,
    .hardware-pipeline-section .pipeline-step.is-visible .mini-stat,
    .hardware-pipeline-section .pipeline-step.is-visible .mini-line {
      animation: pipelineReveal 0.55s ease forwards;
    }

    .hardware-pipeline-section .pipeline-step.is-visible .mini-chip:nth-child(1),
    .hardware-pipeline-section .pipeline-step.is-visible .mini-stat:nth-child(1),
    .hardware-pipeline-section .pipeline-step.is-visible .mini-line:nth-child(1) {
      animation-delay: 0.58s;
    }

    .hardware-pipeline-section .pipeline-step.is-visible .mini-chip:nth-child(2),
    .hardware-pipeline-section .pipeline-step.is-visible .mini-stat:nth-child(2),
    .hardware-pipeline-section .pipeline-step.is-visible .mini-line:nth-child(2) {
      animation-delay: 0.72s;
    }

    .hardware-pipeline-section .pipeline-step.is-visible .mini-chip:nth-child(3),
    .hardware-pipeline-section .pipeline-step.is-visible .mini-stat:nth-child(3),
    .hardware-pipeline-section .pipeline-step.is-visible .mini-line:nth-child(3) {
      animation-delay: 0.86s;
    }

    @media (max-width: 767px) {
      .hardware-pipeline-section .pipeline-spine {
        left: 32px;
        transform: none;
      }

      .hardware-pipeline-section .pipeline-spine-track {
        left: 50%;
        transform: translateX(-50%);
      }

      .hardware-pipeline-section .pipeline-beam {
        left: 50%;
        transform: translateX(-50%);
      }

      .hardware-pipeline-section .step-node {
        left: 32px;
        transform: translate(-50%, -50%);
      }

      .hardware-pipeline-section .pipeline-step.is-visible .step-node {
        transform: translate(-50%, -50%);
      }

      .hardware-pipeline-section .step-copy h3 {
        font-size: 1.35rem;
      }

      .hardware-pipeline-section .step-copy p {
        font-size: 0.95rem;
        max-width: 100%;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .hardware-pipeline-section *,
      .hardware-pipeline-section *::before,
      .hardware-pipeline-section *::after {
        animation: none !important;
        transition: none !important;
      }

      .hardware-pipeline-section .scroll-animate,
      .hardware-pipeline-section .pipeline-step,
      .hardware-pipeline-section .step-copy,
      .hardware-pipeline-section .step-card,
      .hardware-pipeline-section .step-node,
      .hardware-pipeline-section .mini-chip,
      .hardware-pipeline-section .mini-stat,
      .hardware-pipeline-section .mini-line {
        opacity: 1 !important;
      }

      .hardware-pipeline-section .scroll-animate,
      .hardware-pipeline-section .pipeline-step,
      .hardware-pipeline-section .step-copy,
      .hardware-pipeline-section .step-card {
        transform: none !important;
      }

      .hardware-pipeline-section .step-node,
      .hardware-pipeline-section .pipeline-step.is-visible .step-node {
        transform: translate(-50%, -50%) !important;
      }

      .hardware-pipeline-section .progress-fill {
        width: var(--target, 70%) !important;
      }
    }
  </style>
<div bis_size='{"x":120,"y":2534,"w":1280,"h":100,"abs_x":120,"abs_y":2576}' className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div bis_size='{"x":424,"y":2564,"w":672,"h":100,"abs_x":424,"abs_y":2606}' className="text-center max-w-2xl mx-auto mb-20 scroll-animate">
<h2 bis_size='{"x":424,"y":2564,"w":672,"h":36,"abs_x":424,"abs_y":2606}' className="text-3xl font-normal text-zinc-100 tracking-tight">How We Turn Ideas Into Websites</h2>
<p bis_size='{"x":424,"y":2616,"w":672,"h":48,"abs_x":424,"abs_y":2658}' className="text-base text-zinc-400 mt-4">From concept to launch, we build modern, fast, and conversion-focused websites for growing businesses.</p>
</div>
</div>

</section>

<section bis_size='{"x":0,"y":2842,"w":1520,"h":1308,"abs_x":0,"abs_y":2884}' className="sm:py-32 z-10 bg-[#09090b] border-zinc-900 border-b pt-24 pb-24 relative" id="telemetry">
<div bis_label="style" bis_size='{"x":0,"y":2842,"w":1520,"h":1308,"abs_x":0,"abs_y":2884}' className="opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiLz48L3N2Zz4=')] z-0 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'url(\'data:image/svg+xml'}}>
</div>
<div bis_size='{"x":120,"y":2970,"w":1280,"h":1052,"abs_x":120,"abs_y":3012}' className="sm:px-6 lg:px-8 max-w-7xl z-10 mr-auto ml-auto pr-4 pl-4 relative">
<div bis_size='{"x":164,"y":3011,"w":1191,"h":98,"abs_x":164,"abs_y":3053}' className="mb-16 scroll-animate">
<h2 bis_size='{"x":164,"y":3011,"w":1191,"h":35,"abs_x":164,"abs_y":3053}' className="flex items-center gap-3 text-3xl font-normal text-zinc-100 tracking-tight"><svg aria-hidden="true" bis_size='{"x":164,"y":3017,"w":23,"h":23,"abs_x":164,"abs_y":3059}' className="lucide lucide-terminal-square w-6 h-6 text-zinc-500" data-lucide="terminal-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 11 2-2-2-2"></path><path d="M11 13h4"></path><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect></svg> Powerful Websites Built for Performance</h2>
<p bis_size='{"x":164,"y":3062,"w":658,"h":47,"abs_x":164,"abs_y":3104}' className="text-base text-zinc-400 max-w-2xl mt-4">We design and build websites that are fast, reliable, and optimized to deliver the best experience for your visitors across all devices.

</p>
</div>
<div bis_size='{"x":164,"y":3183,"w":1191,"h":870,"abs_x":164,"abs_y":3225}' className="grid grid-cols-1 lg:grid-cols-6 scroll-animate tilt-wrapper gap-x-6 gap-y-6">

<div bis_size='{"x":164,"y":3183,"w":381,"h":274,"abs_x":164,"abs_y":3225}' className="tilt-element cmd-panel lg:col-span-2 h-[280px]">
<div bis_size='{"x":164,"y":3183,"w":381,"h":74,"abs_x":164,"abs_y":3225}' className="cmd-panel-header">
<div bis_size='{"x":184,"y":3199,"w":160,"h":43,"abs_x":184,"abs_y":3241}' className="flex flex-col gap-1">
<span bis_size='{"x":184,"y":3218,"w":160,"h":23,"abs_x":184,"abs_y":3260}' className="text-base font-normal text-zinc-300">Website Performance</span>
</div>
<div bis_size='{"x":451,"y":3199,"w":74,"h":25,"abs_x":451,"abs_y":3241}' className="flex items-center gap-1.5 px-2 py-1 rounded border border-zinc-700 bg-zinc-800/50 shadow-inner">
<div bis_size='{"x":460,"y":3208,"w":5,"h":5,"abs_x":460,"abs_y":3250}' className="w-1.5 h-1.5 rounded-full bg-zinc-400 shadow-[0_0_8px_rgba(161,161,170,0.5)] animate-pulse"></div>
<span bis_size='{"x":472,"y":3204,"w":45,"h":15,"abs_x":472,"abs_y":3246}' className="text-xs text-zinc-400 uppercase tracking-widest font-mono">
                Active
              </span>
</div>
</div>
<div bis_size='{"x":164,"y":3258,"w":381,"h":156,"abs_x":164,"abs_y":3300}' className="cmd-panel-body flex flex-col relative items-center justify-center">
<div bis_size='{"x":292,"y":3273,"w":125,"h":125,"abs_x":292,"abs_y":3315}' className="w-32 h-32 rounded-full border border-zinc-800 relative flex items-center justify-center">
<div bis_size='{"x":301,"y":3282,"w":108,"h":108,"abs_x":301,"abs_y":3324}' className="absolute inset-2 rounded-full border border-zinc-800/50"></div>
<div bis_size='{"x":293,"y":3274,"w":123,"h":123,"abs_x":293,"abs_y":3316}' className="absolute inset-0 rounded-full border border-zinc-500/20"></div>
<div bis_size='{"x":293,"y":3274,"w":123,"h":123,"abs_x":293,"abs_y":3316}' className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
<div bis_size='{"x":293,"y":3336,"w":123,"h":0,"abs_x":293,"abs_y":3378}' className="w-full h-px bg-zinc-500"></div>
<div bis_size='{"x":354,"y":3274,"w":0,"h":123,"abs_x":354,"abs_y":3316}' className="h-full w-px bg-zinc-500 absolute"></div>
</div>

<div bis_size='{"x":293,"y":3274,"w":123,"h":123,"abs_x":293,"abs_y":3316}' className="absolute inset-0 rounded-full" style={{background: 'conic-gradient(from 0deg, transparent 70%, rgba(161, 161, 170, 0.1) 90%, rgba(161, 161, 170, 0.6) 100%)', animation: 'radar-sweep 4s linear infinite'}}></div>
</div>
<div bis_size='{"x":164,"y":3375,"w":381,"h":23,"abs_x":164,"abs_y":3417}' className="w-full flex justify-between items-end absolute bottom-4 px-4">
<span bis_size='{"x":180,"y":3383,"w":122,"h":15,"abs_x":180,"abs_y":3425}' className="text-xs text-zinc-400 font-mono tracking-widest">
                LOC: 44.2, -11.4
              </span>
<svg aria-hidden="true" bis_size='{"x":506,"y":3375,"w":23,"h":23,"abs_x":506,"abs_y":3417}' className="lucide lucide-crosshair lucide2" cy="12" data-lucide="crosshair" fill="none" height="24" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line className="" x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
</div>
</div>
</div>


<div bis_size='{"x":164,"y":3481,"w":381,"h":274,"abs_x":164,"abs_y":3523}' className="tilt-element cmd-panel lg:col-span-2 h-[280px]">
<div bis_size='{"x":164,"y":3481,"w":381,"h":54,"abs_x":164,"abs_y":3523}' className="cmd-panel-header">
<span bis_size='{"x":184,"y":3497,"w":174,"h":23,"abs_x":184,"abs_y":3539}' className="text-base font-normal text-zinc-300">Mobile Responsiveness</span>
<svg aria-hidden="true" bis_size='{"x":510,"y":3497,"w":15,"h":15,"abs_x":510,"abs_y":3539}' className="lucide lucide-more-horizontal w-4 h-4 text-zinc-600" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>
<div bis_size='{"x":164,"y":3536,"w":381,"h":232,"abs_x":164,"abs_y":3578}' className="cmd-panel-body flex flex-col">
<div bis_size='{"x":184,"y":3552,"w":342,"h":127,"abs_x":184,"abs_y":3594}' className="flex-1 bg-[#0a0a0c] rounded-xl border border-zinc-800 p-4 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] relative flex items-end justify-center gap-4">
<div bis_size='{"x":200,"y":3568,"w":309,"h":0,"abs_x":200,"abs_y":3610}' className="absolute inset-x-4 top-4 border-b border-dashed border-zinc-800"></div>
<div bis_size='{"x":200,"y":3615,"w":309,"h":0,"abs_x":200,"abs_y":3657}' className="absolute inset-x-4 top-1/2 border-b border-dashed border-zinc-800"></div>
<div bis_size='{"x":269,"y":3599,"w":47,"h":62,"abs_x":269,"abs_y":3641}' className="relative flex flex-col items-center w-12 z-10">
<div bis_size='{"x":269,"y":3599,"w":47,"h":62,"abs_x":269,"abs_y":3641}' className="w-full h-16 bg-gradient-0_15px_rgba(161,161,170,0.3)]" style={{animation: 'aura-compute-bar-1 3.5s ease-in-out infinite'}}></div>
<span bis_size='{"x":269,"y":3670,"w":45,"h":15,"abs_x":269,"abs_y":3712}' className="text-xs text-zinc-500 font-mono mt-2 uppercase tracking-widest absolute -bottom-6">Node A</span>
</div>
<div bis_size='{"x":331,"y":3568,"w":47,"h":94,"abs_x":331,"abs_y":3610}' className="relative flex flex-col items-center w-12 z-10">
<div bis_size='{"x":337,"y":3545,"w":36,"h":21,"abs_x":337,"abs_y":3587}' className="absolute -top-6 bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs font-mono px-1.5 py-0.5 rounded tracking-widest uppercase">
                  Max</div>
<div bis_size='{"x":331,"y":3568,"w":47,"h":94,"abs_x":331,"abs_y":3610}' className="w-full h-24 bg-gradient-to-t from-zinc-500 to-zinc-300 rounded-t shadow-[0_0_20px_rgba(161,161,170,0.4)]" style={{animation: 'aura-compute-bar-2 4.5s ease-in-out infinite'}}></div>
<span bis_size='{"x":332,"y":3670,"w":45,"h":15,"abs_x":332,"abs_y":3712}' className="text-xs text-zinc-500 font-mono mt-2 uppercase tracking-widest absolute -bottom-6">Node B</span>
</div>
<div bis_size='{"x":394,"y":3607,"w":47,"h":54,"abs_x":394,"abs_y":3649}' className="relative flex flex-col items-center w-12 z-10">
<div bis_size='{"x":394,"y":3607,"w":47,"h":54,"abs_x":394,"abs_y":3649}' className="w-full h-14 bg-gradient-to-t from-zinc-700 to-zinc-500 rounded-t shadow-[0_0_10px_rgba(161,161,170,0.2)]" style={{animation: 'aura-compute-bar-3 3s ease-in-out infinite'}}></div>
<span bis_size='{"x":395,"y":3670,"w":45,"h":15,"abs_x":395,"abs_y":3712}' className="text-xs text-zinc-500 font-mono mt-2 uppercase tracking-widest absolute -bottom-6">Node C</span>
</div>
</div>
<div bis_size='{"x":184,"y":3710,"w":342,"h":43,"abs_x":184,"abs_y":3752}' className="mt-8 grid grid-cols-3 gap-2 px-1">
<div bis_size='{"x":188,"y":3710,"w":106,"h":43,"abs_x":188,"abs_y":3752}' className="flex flex-col">
<span bis_size='{"x":188,"y":3710,"w":106,"h":27,"abs_x":188,"abs_y":3752}' className="text-xl font-normal text-zinc-200">240</span>
<span bis_size='{"x":188,"y":3737,"w":106,"h":15,"abs_x":188,"abs_y":3779}' className="text-xs text-zinc-500 font-mono uppercase tracking-widest">Active</span>
</div>
<div bis_size='{"x":302,"y":3710,"w":106,"h":43,"abs_x":302,"abs_y":3752}' className="flex flex-col">
<span bis_size='{"x":302,"y":3710,"w":106,"h":27,"abs_x":302,"abs_y":3752}' className="text-xl font-normal text-zinc-300 drop-shadow-[0_0_5px_rgba(161,161,170,0.5)]" style={{animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}>
                  480
                </span>
<span bis_size='{"x":302,"y":3737,"w":106,"h":15,"abs_x":302,"abs_y":3779}' className="text-xs text-zinc-500 font-mono uppercase tracking-widest">Standby</span>
</div>
<div bis_size='{"x":416,"y":3710,"w":106,"h":43,"abs_x":416,"abs_y":3752}' className="flex flex-col">
<span bis_size='{"x":416,"y":3710,"w":106,"h":27,"abs_x":416,"abs_y":3752}' className="text-xl font-normal text-zinc-400">112</span>
<span bis_size='{"x":416,"y":3737,"w":106,"h":15,"abs_x":416,"abs_y":3779}' className="text-xs text-zinc-500 font-mono uppercase tracking-widest">Cleared</span>
</div>
</div>
</div>
</div>


<div bis_size='{"x":569,"y":3481,"w":381,"h":274,"abs_x":569,"abs_y":3523}' className="tilt-element cmd-panel lg:col-span-2 h-[280px]">
<div bis_size='{"x":569,"y":3481,"w":381,"h":54,"abs_x":569,"abs_y":3523}' className="cmd-panel-header">
<span bis_size='{"x":589,"y":3497,"w":196,"h":23,"abs_x":589,"abs_y":3539}' className="text-base font-normal text-zinc-300">Website Launch &amp; Support</span>
<svg aria-hidden="true" bis_size='{"x":915,"y":3497,"w":15,"h":15,"abs_x":915,"abs_y":3539}' className="lucide lucide-more-horizontal w-4 h-4 text-zinc-600" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>
<div bis_size='{"x":569,"y":3536,"w":381,"h":278,"abs_x":569,"abs_y":3578}' className="cmd-panel-body flex flex-col gap-4 gap-x-4 gap-y-4">
<div bis_size='{"x":589,"y":3552,"w":342,"h":191,"abs_x":589,"abs_y":3594}' className="bg-[#0a0a0c] rounded-xl p-4 border border-zinc-800 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] flex flex-col gap-4 relative">
<p bis_size='{"x":605,"y":3568,"w":309,"h":66,"abs_x":605,"abs_y":3610}' className="leading-relaxed text-sm text-zinc-400">We handle deployment, hosting setup, and provide support to ensure your website runs smoothly after launch.</p>
<div bis_size='{"x":605,"y":3651,"w":309,"h":29,"abs_x":605,"abs_y":3693}' className="flex flex-col gap-2">
<div bis_size='{"x":605,"y":3651,"w":309,"h":15,"abs_x":605,"abs_y":3693}' className="flex justify-between items-end">
<span bis_size='{"x":605,"y":3651,"w":61,"h":15,"abs_x":605,"abs_y":3693}' className="text-xs text-zinc-500 font-mono uppercase tracking-widest">Progress</span>
<span bis_size='{"x":895,"y":3651,"w":19,"h":15,"abs_x":895,"abs_y":3693}' className="text-xs font-mono text-zinc-300">80%</span>
</div>
<div bis_size='{"x":605,"y":3674,"w":309,"h":5,"abs_x":605,"abs_y":3716}' className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden shadow-inner">
<div bis_size='{"x":605,"y":3674,"w":309,"h":5,"abs_x":605,"abs_y":3716}' className="pb-fill h-full bg-zinc-400 rounded-full shadow-[0_0_10px_rgba(161,161,170,0.5)] relative overflow-hidden" style={{-Pb: '80%'}}>
<div bis_size='{"x":605,"y":3674,"w":154,"h":5,"abs_x":605,"abs_y":3716}' className="pb-sheen absolute top-0 bottom-0 w-[50%] bg-gradient-to-r from-transparent via-white/40 to-transparent">
</div>
<div bis_size='{"x":875,"y":3674,"w":39,"h":5,"abs_x":875,"abs_y":3716}' className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/30">
</div>
</div>
</div>
</div>
<div bis_size='{"x":605,"y":3704,"w":309,"h":23,"abs_x":605,"abs_y":3746}' className="flex justify-between items-center mt-2">
<div bis_size='{"x":605,"y":3708,"w":39,"h":15,"abs_x":605,"abs_y":3750}' className="flex items-center gap-1.5 text-zinc-500">
<svg aria-hidden="true" bis_size='{"x":605,"y":3709,"w":13,"h":13,"abs_x":605,"abs_y":3751}' className="lucide lucide-clock w-3.5 h-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
<span bis_size='{"x":625,"y":3708,"w":19,"h":15,"abs_x":625,"abs_y":3750}' className="text-xs font-mono">4/5</span>
</div>
<div bis_size='{"x":875,"y":3704,"w":39,"h":23,"abs_x":875,"abs_y":3746}' className="flex -space-x-2">
<div bis_size='{"x":875,"y":3704,"w":23,"h":23,"abs_x":875,"abs_y":3746}' className="w-6 h-6 rounded-full border border-zinc-700 bg-zinc-800 flex items-center justify-center text-xs text-zinc-400">
                    AJ</div>
<div bis_size='{"x":891,"y":3704,"w":23,"h":23,"abs_x":891,"abs_y":3746}' className="w-6 h-6 rounded-full border border-zinc-700 bg-zinc-800 flex items-center justify-center text-xs text-zinc-400">
                    MR</div>
</div>
</div>
</div>
<div bis_size='{"x":589,"y":3759,"w":342,"h":39,"abs_x":589,"abs_y":3801}' className="mt-auto flex justify-between items-center px-1">
<span bis_size='{"x":593,"y":3759,"w":40,"h":39,"abs_x":593,"abs_y":3801}' className="text-xslabel class=" cursor-pointer"="" flex="" gap-2="" items-center="">
<span bis_size='{"x":593,"y":3765,"w":40,"h":14,"abs_x":593,"abs_y":3807}' className="text-xs text-zinc-400 font-normal">Bypass</span>
<div bis_size='{"x":593,"y":3783,"w":40,"h":15,"abs_x":593,"abs_y":3825}' className="relative">
<input bis_size='{"x":592,"y":3782,"w":0,"h":0,"abs_x":592,"abs_y":3824}' className="sr-only" type="checkbox"/>
<div bis_size='{"x":593,"y":3783,"w":31,"h":15,"abs_x":593,"abs_y":3825}' className="w-8 h-4 rounded-full bg-[#0a0a0c] border border-zinc-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] transition-colors"></div>
<div bis_size='{"x":597,"y":3787,"w":7,"h":7,"abs_x":597,"abs_y":3829}' className="absolute left-1 top-1 w-2 h-2 rounded-full bg-zinc-500 transition-transform"></div>
</div>
</span></div>
</div>
</div>

<div bis_size='{"x":164,"y":3779,"w":1191,"h":274,"abs_x":164,"abs_y":3821}' className="tilt-element cmd-panel lg:col-span-6 h-[280px]">
<div bis_size='{"x":164,"y":3779,"w":1191,"h":52,"abs_x":164,"abs_y":3821}' className="cmd-panel-header justify-start gap-3">
<div bis_size='{"x":184,"y":3795,"w":7,"h":7,"abs_x":184,"abs_y":3837}' className="w-2 h-2 rounded-full bg-zinc-400 shadow-[0_0_8px_rgba(161,161,170,0.5)] animate-pulse"></div>
<span bis_size='{"x":203,"y":3795,"w":124,"h":21,"abs_x":203,"abs_y":3837}' className="text-xs text-zinc-400 font-mono uppercase tracking-widest bg-zinc-800/30 px-2 py-0.5 rounded border border-zinc-700/50">
              T-Minus 08 Min
            </span>
</div>
<div bis_size='{"x":164,"y":3832,"w":1191,"h":211,"abs_x":164,"abs_y":3874}' className="cmd-panel-body flex flex-col pt-6 pr-6 pb-6 pl-6 justify-between h-[216px]">
<div bis_size='{"x":188,"y":3855,"w":1144,"h":23,"abs_x":188,"abs_y":3897}' className="flex items-center justify-between mb-6">
<span bis_size='{"x":188,"y":3855,"w":185,"h":23,"abs_x":188,"abs_y":3897}' className="text-base font-normal text-zinc-300">Website Launch Timeline</span>
<div bis_size='{"x":1232,"y":3859,"w":99,"h":14,"abs_x":1232,"abs_y":3901}' className="flex items-center gap-2">
<span bis_size='{"x":1232,"y":3859,"w":76,"h":14,"abs_x":1232,"abs_y":3901}' className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest animate-pulse">Transmitting</span>
<div bis_size='{"x":1317,"y":3861,"w":15,"h":11,"abs_x":1317,"abs_y":3903}' className="flex gap-0.5">
<div bis_size='{"x":1317,"y":3861,"w":3,"h":11,"abs_x":1317,"abs_y":3903}' className="w-1 h-3 bg-zinc-500 rounded-sm animate-[pulse_1s_ease-in-out_infinite]"></div>
<div bis_size='{"x":1322,"y":3861,"w":3,"h":11,"abs_x":1322,"abs_y":3903}' className="w-1 h-3 bg-zinc-500 rounded-sm animate-[pulse_1s_ease-in-out_infinite_0.2s]"></div>
<div bis_size='{"x":1328,"y":3861,"w":3,"h":11,"abs_x":1328,"abs_y":3903}' className="w-1 h-3 bg-zinc-500 rounded-sm animate-[pulse_1s_ease-in-out_infinite_0.4s]"></div>
</div>
</div>
</div>
<div bis_size='{"x":188,"y":3902,"w":1144,"h":113,"abs_x":188,"abs_y":3944}' className="w-full relative py-6 flex-1">
<div bis_size='{"x":188,"y":3926,"w":1144,"h":39,"abs_x":188,"abs_y":3968}' className="h-10 w-full bg-[#0a0a0c] rounded-lg border border-zinc-800 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] relative overflow-hidden">
<div bis_size='{"x":188,"y":3926,"w":1143,"h":37,"abs_x":188,"abs_y":3968}' className="absolute inset-0 signal-texture opacity-20"></div>
<div bis_size='{"x":1160,"y":3926,"w":171,"h":37,"abs_x":1160,"abs_y":3968}' className="absolute inset-y-0 right-0 w-[15%] bg-zinc-500/5 border-l border-zinc-600/30 border-dashed animate-pulse flex items-center justify-center">
<div bis_size='{"x":1244,"y":3943,"w":3,"h":3,"abs_x":1244,"abs_y":3985}' className="w-1 h-1 rounded-full bg-zinc-400 shadow-[0_0_8px_rgba(161,161,170,0.5)]"></div>
</div>
<div bis_size='{"x":188,"y":3926,"w":171,"h":37,"abs_x":188,"abs_y":3968}' className="absolute inset-y-0 left-0 w-[15%] bg-zinc-500/5 border-r border-zinc-600/30 border-dashed animate-pulse flex items-center justify-center">
<div bis_size='{"x":272,"y":3943,"w":3,"h":3,"abs_x":272,"abs_y":3985}' className="w-1 h-1 rounded-full bg-zinc-400 shadow-[0_0_8px_rgba(161,161,170,0.5)]"></div>
</div>
<div bis_size='{"x":188,"y":3926,"w":19,"h":37,"abs_x":188,"abs_y":3968}' className="sweep-block absolute inset-y-0 bg-zinc-700/20 border-x border-zinc-600 shadow-[inset_0_0_20px_rgba(161,161,170,0.2)] flex items-center justify-between px-2 z-10">
<div bis_size='{"x":197,"y":3933,"w":0,"h":23,"abs_x":197,"abs_y":3975}' className="w-px h-6 bg-zinc-400/80 shadow-[0_0_8px_rgba(161,161,170,0.5)]"></div>
<div bis_size='{"x":198,"y":3933,"w":0,"h":23,"abs_x":198,"abs_y":3975}' className="w-px h-6 bg-zinc-400/80 shadow-[0_0_8px_rgba(161,161,170,0.5)]"></div>
</div>
</div>
<div bis_size='{"x":188,"y":3977,"w":1144,"h":15,"abs_x":188,"abs_y":4019}' className="flex justify-between mt-3 px-1 relative">
<div bis_size='{"x":188,"y":3967,"w":1144,"h":7,"abs_x":188,"abs_y":4009}' className="absolute top-[-10px] left-0 right-0 flex justify-between px-1">
<div bis_size='{"x":192,"y":3967,"w":0,"h":7,"abs_x":192,"abs_y":4009}' className="w-px h-2 bg-zinc-700"></div>
<div bis_size='{"x":570,"y":3967,"w":0,"h":7,"abs_x":570,"abs_y":4009}' className="w-px h-2 bg-zinc-700"></div>
<div bis_size='{"x":949,"y":3967,"w":0,"h":7,"abs_x":949,"abs_y":4009}' className="w-px h-2 bg-zinc-700"></div>
<div bis_size='{"x":1327,"y":3967,"w":0,"h":7,"abs_x":1327,"abs_y":4009}' className="w-px h-2 bg-zinc-700"></div>
</div>
<span bis_size='{"x":192,"y":3977,"w":32,"h":15,"abs_x":192,"abs_y":4019}' className="text-xs text-zinc-500 font-mono">10:00</span>
<span bis_size='{"x":544,"y":3977,"w":32,"h":15,"abs_x":544,"abs_y":4019}' className="text-xs text-zinc-400 font-mono relative -left-4">10:30</span>
<span bis_size='{"x":943,"y":3977,"w":32,"h":15,"abs_x":943,"abs_y":4019}' className="text-xs text-zinc-400 font-mono relative left-4">12:00</span>
<span bis_size='{"x":1296,"y":3977,"w":32,"h":15,"abs_x":1296,"abs_y":4019}' className="text-xs text-zinc-500 font-mono">12:30</span>
</div>
</div>
<div bis_size='{"x":188,"y":4016,"w":1144,"h":54,"abs_x":188,"abs_y":4058}' className="flex justify-between items-end mt-auto pt-4">
<div bis_size='{"x":188,"y":4031,"w":139,"h":39,"abs_x":188,"abs_y":4073}' className="flex flex-col gap-1">
<span bis_size='{"x":188,"y":4031,"w":139,"h":15,"abs_x":188,"abs_y":4073}' className="text-xs text-zinc-500">Encrypted Relay Channel</span>
<a bis_size='{"x":188,"y":4051,"w":139,"h":19,"abs_x":188,"abs_y":4093}' className="text-sm font-mono text-zinc-300 hover:text-zinc-100 transition-colors flex items-center gap-1.5 group" href="#">
                  net.link/auth-v9
                  <svg aria-hidden="true" bis_size='{"x":314,"y":4055,"w":11,"h":11,"abs_x":314,"abs_y":4097}' className="lucide lucide-external-link w-3 h-3" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>
<button bis_size='{"x":1293,"y":4031,"w":39,"h":39,"abs_x":1293,"abs_y":4073}' className="w-10 h-10 rounded-lg bg-[#18181b] border border-zinc-700 shadow-lg flex items-center justify-center text-zinc-400 hover:text-white transition-all hover:border-zinc-500 hover:shadow-[0_0_15px_rgba(161,161,170,0.2)]">
<svg aria-hidden="true" bis_size='{"x":1303,"y":4041,"w":19,"h":19,"abs_x":1303,"abs_y":4083}' className="lucide lucide-satellite w-5 h-5" data-lucide="satellite" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5"></path><path d="M16.5 7.5 19 5"></path><path d="m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5"></path><path d="M9 21a6 6 0 0 0-6-6"></path><path d="M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":4151,"w":1520,"h":1014,"abs_x":0,"abs_y":4193}' className="sm:py-32 overflow-hidden bg-[#0a0a0c] z-10 pt-24 pb-24 relative" id="network">
<style className="">
    @keyframes data-flow-dash {
      to {
        stroke-dashoffset: -24;
      }
    }

    .animate-data-link {
      animation: data-flow-dash 2s linear infinite;
    }

    @keyframes bar-sweep {
      to {
        background-position: 1rem 0;
      }
    }

    .animate-bar-sweep {
      animation: bar-sweep 1s linear infinite;
    }

    @keyframes pulse-node {

      0%,
      100% {
        transform: scale(1);
        box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
      }

      50% {
        transform: scale(1.3);
        box-shadow: 0 0 20px rgba(99, 102, 241, 1);
      }
    }

    .animate-pulse-node {
      animation: pulse-node 3s ease-in-out infinite;
    }
  </style>
<div bis_size='{"x":120,"y":4279,"w":1280,"h":758,"abs_x":120,"abs_y":4321}' className="sm:px-6 lg:px-8 max-w-7xl z-10 mr-auto ml-auto pr-4 pl-4 relative">
<div bis_size='{"x":152,"y":4279,"w":672,"h":144,"abs_x":152,"abs_y":4321}' className="max-w-2xl mb-16">
<h2 bis_size='{"x":152,"y":4279,"w":672,"h":16,"abs_x":152,"abs_y":4321}' className="uppercase flex items-center gap-2 text-xs font-normal text-indigo-400 tracking-widest"><svg bis_size='{"x":152,"y":4279,"w":16,"h":16,"abs_x":152,"abs_y":4321}' className="w-4 h-4 text-indigo-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle bis_size='{"x":153,"y":4280,"w":13,"h":13,"abs_x":153,"abs_y":4322}' cx="12" cy="12" r="10"></circle>
<path bis_size='{"x":157,"y":4280,"w":5,"h":13,"abs_x":157,"abs_y":4322}' d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
<path bis_size='{"x":153,"y":4287,"w":13,"h":0,"abs_x":153,"abs_y":4329}' d="M2 12h20"></path>
</svg> india</h2>
<p bis_size='{"x":152,"y":4315,"w":672,"h":40,"abs_x":152,"abs_y":4357}' className="sm:text-4xl text-3xl font-normal text-zinc-100 tracking-tight mt-5">super fast websites</p>
<p bis_size='{"x":152,"y":4371,"w":672,"h":52,"abs_x":152,"abs_y":4413}' className="leading-relaxed text-base text-zinc-400 mt-4">we code and provide websites that loads within seconds no matter how slow your internet connection is.</p>
</div>
<div bis_size='{"x":152,"y":4487,"w":1216,"h":550,"abs_x":152,"abs_y":4529}' className="rounded-[2rem] p-1 bg-gradient-to-b from-zinc-800/50 to-transparent relative overflow-hidden h-[450px] md:h-[550px] shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
<div bis_size='{"x":153,"y":4488,"w":1214,"h":548,"abs_x":153,"abs_y":4530}' className="overflow-hidden bg-[#0a0a0c] rounded-[calc(2rem-1px)] absolute top-[1px] right-[1px] bottom-[1px] left-[1px]">

<div bis_size='{"x":153,"y":4488,"w":1214,"h":548,"abs_x":153,"abs_y":4530}' className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none z-0">
<svg bis_size='{"x":153,"y":4488,"w":1214,"h":548,"abs_x":153,"abs_y":4530}' className="w-full h-full object-cover" viewbox="0 0 1000 500">
<path bis_size='{"x":376,"y":4647,"w":47,"h":65,"abs_x":376,"abs_y":4689}' d="M150,150 Q160,140 170,150 T190,160 Q200,180 180,200 T150,150 Z" fill="#ffffff"></path>
<path bis_size='{"x":541,"y":4589,"w":93,"h":143,"abs_x":541,"abs_y":4631}' d="M300,100 Q320,80 340,110 T380,140 Q400,200 350,220 T300,100 Z" fill="#ffffff"></path>
<path bis_size='{"x":796,"y":4568,"w":164,"h":157,"abs_x":796,"abs_y":4610}' d="M550,80 Q580,60 620,100 T680,150 Q700,250 600,200 T550,80 Z" fill="#ffffff"></path>
<path bis_size='{"x":1089,"y":4611,"w":87,"h":89,"abs_x":1089,"abs_y":4653}' d="M800,120 Q820,100 850,130 T880,180 Q860,200 830,190 T800,120 Z" fill="#ffffff"></path>
<path bis_size='{"x":457,"y":4810,"w":91,"h":101,"abs_x":457,"abs_y":4852}' d="M250,300 Q280,280 300,320 T280,380 Q250,400 230,350 T250,300 Z" fill="#ffffff"></path>
<path bis_size='{"x":840,"y":4790,"w":127,"h":141,"abs_x":840,"abs_y":4832}' d="M600,300 Q650,250 680,300 T650,400 Q600,420 580,350 T600,300 Z" fill="#ffffff"></path>
</svg>
</div>

<div bis_size='{"x":153,"y":4488,"w":1214,"h":548,"abs_x":153,"abs_y":4530}' className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-60 z-0">
</div>

<svg bis_size='{"x":153,"y":4488,"w":1214,"h":548,"abs_x":153,"abs_y":4530}' className="absolute inset-0 w-full h-full pointer-events-none opacity-60 z-10" preserveaspectratio="none" style={{filter: 'drop-shadow(0 0 6px rgba(99,102,241,0.6))'}} viewbox="0 0 100 100">

<line bis_size='{"x":335,"y":4680,"w":121,"h":16,"abs_x":335,"abs_y":4722}' className="animate-data-link" stroke="#6366f1" stroke-dasharray="1.2 1.2" strokeWidth="0.3" style={{animationDuration: '2s'}} x1="15" x2="25" y1="38" y2="35">
</line>

<path bis_size='{"x":456,"y":4625,"w":303,"h":55,"abs_x":456,"abs_y":4667}' className="animate-data-link" d="M 25 35 Q 37 24 50 25" fill="none" stroke="#6366f1" stroke-dasharray="1.2 1.2" strokeWidth="0.3" style={{animationDuration: '3s'}}>
</path>

<path bis_size='{"x":760,"y":4625,"w":303,"h":109,"abs_x":760,"abs_y":4667}' className="animate-data-link" d="M 50 25 Q 62 36 75 45" fill="none" stroke="#6366f1" stroke-dasharray="1.2 1.2" strokeWidth="0.3" style={{animationDuration: '4s'}}>
</path>

<path bis_size='{"x":760,"y":4621,"w":424,"h":31,"abs_x":760,"abs_y":4663}' className="animate-data-link" d="M 50 25 Q 66 22 85 30" fill="none" stroke="#6366f1" stroke-dasharray="1.2 1.2" strokeWidth="0.3" style={{animationDuration: '3.5s'}}>
</path>

<path bis_size='{"x":456,"y":4680,"w":60,"h":191,"abs_x":456,"abs_y":4722}' className="animate-data-link" d="M 25 35 Q 27 49 30 70" fill="none" stroke="#6366f1" stroke-dasharray="1.2 1.2" strokeWidth="0.3" style={{animationDuration: '2.5s'}}>
</path>
</svg>


<div bis_size='{"x":446,"y":4670,"w":20,"h":20,"abs_x":446,"abs_y":4712}' className="absolute w-5 h-5 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20" style={{top: '35%', left: '25%'}}>
<div bis_size='{"x":446,"y":4670,"w":20,"h":20,"abs_x":446,"abs_y":4712}' className="absolute w-full h-full bg-indigo-500/20 rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '0s'}}></div>
<div bis_size='{"x":453,"y":4677,"w":6,"h":6,"abs_x":453,"abs_y":4719}' className="w-1.5 h-1.5 bg-white rounded-full animate-pulse-node" style={{animationDelay: '0s'}}></div>
</div>

<div bis_size='{"x":325,"y":4686,"w":20,"h":20,"abs_x":325,"abs_y":4728}' className="absolute w-5 h-5 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20" style={{top: '38%', left: '15%'}}>
<div bis_size='{"x":325,"y":4686,"w":20,"h":20,"abs_x":325,"abs_y":4728}' className="absolute w-full h-full bg-indigo-500/20 rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '0.5s'}}></div>
<div bis_size='{"x":332,"y":4693,"w":6,"h":6,"abs_x":332,"abs_y":4735}' className="w-1.5 h-1.5 bg-indigo-100 rounded-full animate-pulse-node" style={{animationDelay: '0.5s'}}></div>
</div>

<div bis_size='{"x":750,"y":4615,"w":20,"h":20,"abs_x":750,"abs_y":4657}' className="absolute w-5 h-5 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20" style={{top: '25%', left: '50%'}}>
<div bis_size='{"x":750,"y":4615,"w":20,"h":20,"abs_x":750,"abs_y":4657}' className="absolute w-full h-full bg-indigo-500/20 rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '1.2s'}}></div>
<div bis_size='{"x":757,"y":4622,"w":6,"h":6,"abs_x":757,"abs_y":4664}' className="w-1.5 h-1.5 bg-white rounded-full animate-pulse-node" style={{animationDelay: '1.2s'}}></div>
</div>

<div bis_size='{"x":1175,"y":4643,"w":20,"h":20,"abs_x":1175,"abs_y":4685}' className="absolute w-5 h-5 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20" style={{top: '30%', left: '85%'}}>
<div bis_size='{"x":1175,"y":4643,"w":20,"h":20,"abs_x":1175,"abs_y":4685}' className="absolute w-full h-full bg-indigo-500/20 rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '0.8s'}}></div>
<div bis_size='{"x":1182,"y":4650,"w":6,"h":6,"abs_x":1182,"abs_y":4692}' className="w-1.5 h-1.5 bg-indigo-100 rounded-full animate-pulse-node" style={{animationDelay: '0.8s'}}></div>
</div>

<div bis_size='{"x":1053,"y":4725,"w":20,"h":20,"abs_x":1053,"abs_y":4767}' className="absolute w-5 h-5 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20" style={{top: '45%', left: '75%'}}>
<div bis_size='{"x":1053,"y":4725,"w":20,"h":20,"abs_x":1053,"abs_y":4767}' className="absolute w-full h-full bg-indigo-500/20 rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '1.5s'}}></div>
<div bis_size='{"x":1060,"y":4732,"w":6,"h":6,"abs_x":1060,"abs_y":4774}' className="w-1.5 h-1.5 bg-indigo-200 rounded-full animate-pulse-node" style={{animationDelay: '1.5s'}}></div>
</div>

<div bis_size='{"x":507,"y":4862,"w":20,"h":20,"abs_x":507,"abs_y":4904}' className="absolute w-5 h-5 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20" style={{top: '70%', left: '30%'}}>
<div bis_size='{"x":507,"y":4862,"w":20,"h":20,"abs_x":507,"abs_y":4904}' className="absolute w-full h-full bg-indigo-500/20 rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '0.2s'}}></div>
<div bis_size='{"x":514,"y":4869,"w":6,"h":6,"abs_x":514,"abs_y":4911}' className="w-1.5 h-1.5 bg-indigo-300 rounded-full animate-pulse-node" style={{animationDelay: '0.2s'}}></div>
</div>

<div bis_size='{"x":177,"y":4794,"w":288,"h":217,"abs_x":177,"abs_y":4836}' className="absolute bottom-6 right-6 lg:left-6 lg:right-auto bg-[#0a0a0c]/80 backdrop-blur-xl p-5 rounded-xl border border-zinc-800 shadow-2xl w-[calc(100%-3rem)] sm:w-72 z-30">
<div bis_size='{"x":198,"y":4815,"w":246,"h":37,"abs_x":198,"abs_y":4857}' className="flex justify-between items-center mb-5 pb-4 border-b border-zinc-800/80">
<div bis_size='{"x":198,"y":4817,"w":99,"h":16,"abs_x":198,"abs_y":4859}' className="flex items-center gap-2">
<div bis_size='{"x":198,"y":4822,"w":6,"h":6,"abs_x":198,"abs_y":4864}' className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse"></div>
<span bis_size='{"x":212,"y":4817,"w":85,"h":16,"abs_x":212,"abs_y":4859}' className="uppercase text-xs text-zinc-300 tracking-widest font-mono">speedometer</span>
</div>
<span bis_size='{"x":377,"y":4815,"w":67,"h":20,"abs_x":377,"abs_y":4857}' className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 border-emerald-500/20 border rounded pt-0.5 pr-2 pb-0.5 pl-2">excellent</span>
</div>
<div bis_size='{"x":198,"y":4873,"w":246,"h":118,"abs_x":198,"abs_y":4915}' className="space-y-5">
<div bis_size='{"x":198,"y":4873,"w":246,"h":48,"abs_x":198,"abs_y":4915}' className="">
<div bis_size='{"x":198,"y":4873,"w":246,"h":16,"abs_x":198,"abs_y":4915}' className="flex justify-between items-end mb-2">
<span bis_size='{"x":198,"y":4874,"w":64,"h":15,"abs_x":198,"abs_y":4916}' className="text-[10px] uppercase font-normal text-zinc-500 tracking-widest">Avg Speed</span>
<span bis_size='{"x":418,"y":4873,"w":26,"h":16,"abs_x":418,"abs_y":4915}' className="text-xs font-mono text-zinc-200">14ms</span>
</div>
<div bis_size='{"x":198,"y":4897,"w":246,"h":24,"abs_x":198,"abs_y":4939}' className="h-6 w-full flex items-end justify-between gap-[2px] opacity-80">
<div bis_size='{"x":198,"y":4911,"w":29,"h":9,"abs_x":198,"abs_y":4953}' className="w-full h-[40%] bg-indigo-500/40 rounded-t-sm"></div>
<div bis_size='{"x":229,"y":4906,"w":29,"h":14,"abs_x":229,"abs_y":4948}' className="w-full h-[60%] bg-indigo-500/60 rounded-t-sm"></div>
<div bis_size='{"x":260,"y":4913,"w":29,"h":7,"abs_x":260,"abs_y":4955}' className="w-full h-[30%] bg-indigo-500/30 rounded-t-sm"></div>
<div bis_size='{"x":291,"y":4901,"w":29,"h":19,"abs_x":291,"abs_y":4943}' className="w-full h-[80%] bg-indigo-500/80 rounded-t-sm"></div>
<div bis_size='{"x":322,"y":4909,"w":29,"h":12,"abs_x":322,"abs_y":4951}' className="w-full h-[50%] bg-indigo-500/50 rounded-t-sm"></div>
<div bis_size='{"x":353,"y":4899,"w":29,"h":21,"abs_x":353,"abs_y":4941}' className="w-full h-[90%] bg-indigo-500 rounded-t-sm shadow-[0_0_8px_#6366f1]"></div>
<div bis_size='{"x":384,"y":4904,"w":29,"h":16,"abs_x":384,"abs_y":4946}' className="w-full h-[70%] bg-indigo-500/70 rounded-t-sm"></div>
<div bis_size='{"x":415,"y":4910,"w":29,"h":10,"abs_x":415,"abs_y":4952}' className="w-full h-[45%] bg-indigo-500/45 rounded-t-sm"></div>
</div>
</div>
<div bis_size='{"x":198,"y":4941,"w":246,"h":50,"abs_x":198,"abs_y":4983}' className="pt-4 border-t border-zinc-800/80">
<div bis_size='{"x":198,"y":4957,"w":246,"h":16,"abs_x":198,"abs_y":4999}' className="flex justify-between items-end mb-3">
<span bis_size='{"x":198,"y":4958,"w":80,"h":15,"abs_x":198,"abs_y":5000}' className="text-[10px] font-normal text-zinc-500 uppercase tracking-widest">Throughput</span>
<span bis_size='{"x":391,"y":4957,"w":52,"h":16,"abs_x":391,"abs_y":4999}' className="text-xs font-mono text-zinc-200">1.2 TB/s</span>
</div>
<div bis_size='{"x":198,"y":4985,"w":246,"h":6,"abs_x":198,"abs_y":5027}' className="h-1.5 w-full bg-[#050505] rounded-full overflow-hidden shadow-inner border border-zinc-800/80">
<div bis_size='{"x":199,"y":4986,"w":183,"h":4,"abs_x":199,"abs_y":5028}' className="h-full w-[75%] bg-indigo-500 rounded-full shadow-[0_0_10px_#6366f1] relative">
<div bis_size='{"x":199,"y":4986,"w":183,"h":4,"abs_x":199,"abs_y":5028}' className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.15)_50%,transparent_75%)] bg-[length:1rem_1rem] animate-bar-sweep">
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


<section bis_size='{"x":0,"y":5165,"w":1520,"h":575,"abs_x":0,"abs_y":5207}' className="border-y bg-[#0a0a0c] z-10 border-zinc-900 pt-24 pb-24 relative shadow-[inset_0_20px_40px_rgba(0,0,0,0.5),inset_0_-20px_40px_rgba(0,0,0,0.5)]" id="security">
<div bis_size='{"x":120,"y":5262,"w":1280,"h":381,"abs_x":120,"abs_y":5304}' className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div bis_size='{"x":164,"y":5303,"w":1191,"h":98,"abs_x":164,"abs_y":5345}' className="mb-16 scroll-animate">
<h2 bis_size='{"x":164,"y":5303,"w":1191,"h":35,"abs_x":164,"abs_y":5345}' className="flex items-center gap-3 text-3xl font-normal text-zinc-100 tracking-tight"><svg aria-hidden="true" bis_size='{"x":164,"y":5309,"w":23,"h":23,"abs_x":164,"abs_y":5351}' className="lucide lucide-shield w-6 h-6 text-zinc-500" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg> Modern Web Design Excellence</h2>
<p bis_size='{"x":164,"y":5354,"w":658,"h":47,"abs_x":164,"abs_y":5396}' className="text-base text-zinc-400 max-w-2xl mt-4">We build fast, visually stunning, and conversion-focused websites using modern design principles and advanced technologies.</p>
</div>
<div bis_size='{"x":164,"y":5468,"w":1191,"h":213,"abs_x":164,"abs_y":5510}' className="grid grid-cols-1 md:grid-cols-3 gap-6 scroll-animate tilt-wrapper">
<div bis_size='{"x":164,"y":5468,"w":381,"h":213,"abs_x":164,"abs_y":5510}' className="tilt-element tactile-glass rounded-2xl p-6 border border-zinc-800/80 group">
<div bis_size='{"x":188,"y":5492,"w":47,"h":47,"abs_x":188,"abs_y":5534}' className="tactile-inset flex w-12 h-12 border-zinc-700 border rounded-xl mb-6 relative shadow-inner items-center justify-center">
<svg aria-hidden="true" bis_size='{"x":202,"y":5506,"w":19,"h":19,"abs_x":202,"abs_y":5548}' className="lucide lucide-brush lucide-circle-play group-hover:text-zinc-100 transition-colors w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="brush" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(244, 244, 245)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m11 10 3 3"></path><path d="M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z"></path><path d="M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031"></path></svg>
</div>
<h3 bis_size='{"x":188,"y":5563,"w":332,"h":27,"abs_x":188,"abs_y":5605}' className="text-lg font-normal text-zinc-100">Custom Website Design</h3>
<p bis_size='{"x":188,"y":5598,"w":332,"h":58,"abs_x":188,"abs_y":5640}' className="text-sm text-zinc-400 mt-2">Every website we create is fully custom designed to match your brand identity and deliver a professional digital presence.</p>
</div>
<div bis_size='{"x":569,"y":5468,"w":381,"h":213,"abs_x":569,"abs_y":5510}' className="tilt-element tactile-glass rounded-2xl p-6 border border-zinc-800/80 group">
<div bis_size='{"x":593,"y":5492,"w":47,"h":47,"abs_x":593,"abs_y":5534}' className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center border border-zinc-700 mb-6 relative shadow-inner">
<svg aria-hidden="true" bis_size='{"x":607,"y":5506,"w":19,"h":19,"abs_x":607,"abs_y":5548}' className="lucide lucide-fast-forward lucide-key group-hover:text-zinc-100 transition-colors w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="fast-forward" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(244, 244, 245)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z"></path><path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z"></path></svg>
</div>
<h3 bis_size='{"x":593,"y":5563,"w":332,"h":27,"abs_x":593,"abs_y":5605}' className="text-lg font-normal text-zinc-100">High-Performance Websites</h3>
<p bis_size='{"x":593,"y":5598,"w":332,"h":58,"abs_x":593,"abs_y":5640}' className="text-sm text-zinc-400 mt-2">Our websites are optimized for speed, responsiveness, and performance to ensure the best experience across all devices.</p>
</div>
<div bis_size='{"x":974,"y":5468,"w":381,"h":213,"abs_x":974,"abs_y":5510}' className="tilt-element tactile-glass group border-zinc-800/80 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div bis_size='{"x":998,"y":5492,"w":47,"h":47,"abs_x":998,"abs_y":5534}' className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center border border-zinc-700 mb-6 relative shadow-inner">
<svg aria-hidden="true" bis_size='{"x":1012,"y":5506,"w":19,"h":19,"abs_x":1012,"abs_y":5548}' className="lucide lucide-image-play lucide-fingerprint group-hover:text-zinc-100 transition-colors w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="image-play" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(244, 244, 245)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z"></path><path d="M21 12.17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"></path><path d="m6 21 5-5"></path><circle cx="9" cy="9" r="2"></circle></svg>
</div>
<h3 bis_size='{"x":998,"y":5563,"w":332,"h":27,"abs_x":998,"abs_y":5605}' className="text-lg font-normal text-zinc-100">Mobile-First Experience</h3>
<p bis_size='{"x":998,"y":5598,"w":332,"h":58,"abs_x":998,"abs_y":5640}' className="text-sm text-zinc-400 mt-2">Every website is built with a mobile-first approach, ensuring smooth navigation and beautiful design on phones, tablets, and desktops.</p>
</div>
</div>
</div>
</section>




<footer bis_size='{"x":0,"y":5740,"w":1520,"h":557,"abs_x":0,"abs_y":5782}' className="overflow-hidden bg-[#050505] border-zinc-900 border-t pt-24 pb-12 relative">

<div bis_size='{"x":376,"y":6042,"w":768,"h":256,"abs_x":376,"abs_y":6084}' className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-indigo-500/5 blur-[100px] pointer-events-none"></div>
<div bis_size='{"x":133,"y":5879,"w":1254,"h":227,"abs_x":133,"abs_y":5921}' className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center scroll-animate">
<div bis_size='{"x":729,"y":5879,"w":62,"h":62,"abs_x":729,"abs_y":5921}' className="w-16 h-16 rounded-2xl tactile-base mx-auto flex items-center justify-center border border-zinc-800 shadow-[0_10px_20px_rgba(0,0,0,0.5)] mb-8">
<div bis_size='{"x":752,"y":5903,"w":15,"h":15,"abs_x":752,"abs_y":5945}' className="w-4 h-4 rounded-full bg-zinc-300 shadow-[0_0_15px_rgba(255,255,255,0.5)] flex items-center justify-center">
<div bis_size='{"x":757,"y":5908,"w":5,"h":5,"abs_x":757,"abs_y":5950}' className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
</div>
</div>
<h2 bis_size='{"x":164,"y":5974,"w":1191,"h":47,"abs_x":164,"abs_y":6016}' className="text-4xl font-normal tracking-tight text-zinc-100 sm:text-5xl">
          Initialize your first node.
        </h2>
<div bis_size='{"x":164,"y":6060,"w":1191,"h":47,"abs_x":164,"abs_y":6102}' className="flex mt-10 gap-x-4 gap-y-4 items-center justify-center">
<a bis_size='{"x":624,"y":6060,"w":128,"h":47,"abs_x":624,"abs_y":6102}' className="btn-physical-light flex items-center gap-2 text-base font-normal rounded-full pt-3 pr-8 pb-3 pl-8" href="/tel:+7306073379">Call Now</a>
<a bis_size='{"x":769,"y":6060,"w":126,"h":47,"abs_x":769,"abs_y":6102}' className="btn-physical-dark hover:text-white transition-colors text-base font-normal text-zinc-300 rounded-full pt-3 pr-8 pb-3 pl-8" href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=dhruvnaina3@gmail.com" rel="noopener noreferrer" target="_blank">
            Email Us
          </a>
</div>
</div>

<div bis_size='{"x":120,"y":6197,"w":1280,"h":52,"abs_x":120,"abs_y":6239}' className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-32 pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
<div bis_size='{"x":152,"y":6230,"w":169,"h":20,"abs_x":152,"abs_y":6272}' className="text-sm text-zinc-600 flex items-center gap-2">
<div bis_size='{"x":152,"y":6236,"w":8,"h":8,"abs_x":152,"abs_y":6278}' className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
          All systems operational
        </div>
<div bis_size='{"x":771,"y":6240,"w":0,"h":0,"abs_x":771,"abs_y":6282}' className="flex gap-6 text-sm text-zinc-500 font-normal">
</div>
<div bis_size='{"x":1220,"y":6230,"w":147,"h":20,"abs_x":1220,"abs_y":6272}' className="text-sm text-zinc-600">© 2026 scaleupstudio</div>
</div>
</footer>



    </>
  );
}
