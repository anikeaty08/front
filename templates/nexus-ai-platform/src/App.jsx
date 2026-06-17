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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



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
  


        function togglePricing() {
          const toggle = document.getElementById('pricing-toggle');
          const isMonthly = toggle.checked;
          
          document.getElementById('price-shared-amount').innerText = isMonthly ? '$499' : '$0.85';
          document.getElementById('price-shared-period').innerText = isMonthly ? '/ MO' : '/ HR';
          
          document.getElementById('price-dedicated-amount').innerText = isMonthly ? '$2,499' : '$4.20';
          document.getElementById('price-dedicated-period').innerText = isMonthly ? '/ MO' : '/ HR';
          
          document.getElementById('label-hourly').className = isMonthly 
            ? 'text-sm font-mono text-zinc-500 tracking-widest uppercase transition-colors' 
            : 'text-sm font-mono text-zinc-100 tracking-widest uppercase transition-colors';
            
          document.getElementById('label-monthly').className = isMonthly 
            ? 'text-sm font-mono text-zinc-100 tracking-widest uppercase transition-colors' 
            : 'text-sm font-mono text-zinc-500 tracking-widest uppercase transition-colors';
        }
      


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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-50"></div>
<div className="fixed inset-0 -z-10 bg-gradient-to-b from-transparent via-zinc-950/80 to-zinc-950 pointer-events-none"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl rounded-full tactile-glass px-4 py-3 flex items-center justify-between transition-transform duration-500 hover:translate-y-[-2px]">
<div className="flex items-center gap-8 pl-2">
<a className="flex items-center gap-2 text-lg font-normal text-zinc-100 tracking-tight bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b304cbec-471a-4817-b8b1-9d33a6c6b1cf_320w.png)] bg-cover bg-center px-10 py-5" href="#"></a>
<div className="hidden md:flex gap-6">
<a className="text-sm font-normal text-zinc-400 hover:text-zinc-100 transition-colors" href="#features">
            Features
          </a>
<a className="hover:text-zinc-100 transition-colors text-sm font-normal text-zinc-400" href="#platform">
            Architecture
          </a>
<a className="hover:text-zinc-100 transition-colors text-sm font-normal text-zinc-400" href="#network">
            Network
          </a>
<a className="text-sm font-normal text-zinc-400 hover:text-zinc-100 transition-colors" href="#pricing">
            Pricing
          </a>
</div>
</div>
<div className="flex items-center gap-3">
<a className="hidden text-sm font-normal text-zinc-400 hover:text-zinc-100 transition-colors md:block px-3" href="#">
          Log in
        </a>
<a className="btn-physical-light rounded-full px-5 py-2 text-sm font-normal" href="#">
          Deploy Core
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

<div className="hero-webgl-threejs"><canvas className="" data-engine="three.js r160" height="2042" id="hero3D" style={{width: '2048px', height: '1021px'}} width="4096"></canvas></div>
<div className="hero-fog"></div>

<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 hero-content text-center relative z-20 pt-20 sm:pt-24 md:pt-28" style={{pointerEvents: 'auto'}}>
<div className="inline-flex items-center gap-3 rounded-full tactile-glass px-3 py-1.5 text-xs text-zinc-300 mb-8 shadow-2xl">
<span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,1)]"></span>
      Nexus AI Gen-3 Architecture Online
    </div>
<h1 className="mx-auto max-w-5xl text-4xl sm:text-6xl lg:text-[5.2rem] font-normal tracking-tight text-zinc-50 leading-[0.95] drop-shadow-[0_10px_40px_rgba(0,0,0,0.7)]">
<span className="block">The intelligence layer for</span>
<span className="block mt-2 text-zinc-300">next-gen models.</span>
</h1>
<p className="mx-auto mt-8 text-base sm:text-lg text-zinc-400 max-w-2xl">
      Deploy, scale, and orchestrate massive AI workloads with zero
      operational overhead.
    </p>
</div>

<div className="sm:px-6 lg:px-8 w-full max-w-5xl mt-20 mx-auto hero-content relative" style={{pointerEvents: 'auto', transform: 'scale(1) translateY(0px)', opacity: '1'}}>
<div className="tilt-element relative w-full aspect-[16/9] md:aspect-[21/9] tactile-base rounded-3xl p-3 md:p-6 flex flex-col shadow-[0_40px_100px_-20px_rgba(0,0,0,1)]">
<div className="flex-1 tactile-inset rounded-2xl p-1 relative overflow-hidden flex flex-col border border-zinc-800/50">

<div className="h-12 border-b border-zinc-900 bg-zinc-950/80 flex items-center justify-between px-4 backdrop-blur-md">
<div className="flex gap-2 items-center">
<div className="flex gap-1.5 mr-4">
<div className="w-3 h-3 rounded-full bg-zinc-800" style={{animation: 'blinkNode 2s infinite'}}></div>
<div className="w-3 h-3 rounded-full bg-zinc-800" style={{animation: 'blinkNode 2s infinite .4s'}}></div>
<div className="w-3 h-3 rounded-full bg-zinc-800" style={{animation: 'blinkNode 2s infinite .8s'}}></div>
</div>
<div className="h-6 px-3 rounded-md tactile-inset flex items-center text-xs text-zinc-500 font-mono tracking-widest border border-zinc-900">
              nexus_cluster_01
            </div>
</div>
</div>

<div className="flex-1 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDBoNDBWMIgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDQwaDQwVjBIMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] relative flex items-center justify-center p-8 gap-8 overflow-hidden" style={{animation: 'bgPan 15s linear infinite'}}>
<div className="" style={{animation: 'nodeFloat1 4s ease-in-out infinite'}}>
<div className="w-32 h-32 rounded-2xl tactile-base border-t border-zinc-700/50 flex items-center justify-center flex-col gap-2 shadow-2xl">
<div className="text-xs font-mono text-zinc-500 uppercase">H100 Node</div>
</div>
</div>
<div className="h-2 w-32 tactile-inset rounded-full relative overflow-hidden flex items-center px-1">
<div className="h-0.5 w-full bg-zinc-800 rounded-full"></div>
<div className="absolute left-0 h-0.5 w-1/3 bg-indigo-500 rounded-full shadow-[0_0_10px_#6366f1]"></div>
<div className="absolute top-1/2 -translate-y-1/2 h-1 w-3 bg-white rounded-full shadow-[0_0_8px_#fff]" style={{animation: 'dataFlow 1.5s linear infinite'}}></div>
</div>
<div className="" style={{animation: 'nodeFloat2 3.5s ease-in-out infinite .5s'}}>
<div className="w-24 h-24 rounded-2xl tactile-base border-t border-zinc-700/50 flex items-center justify-center flex-col gap-2 shadow-2xl">
<div className="text-xs font-mono text-zinc-500 uppercase">Cache</div>
</div>
</div>
</div>
</div>
</div>
</div>


</section>
</div>

<section className="py-24 sm:py-32 relative z-10 border-t border-zinc-900/50 bg-[#09090b]" id="features">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl scroll-animate">
<h2 className="text-xs font-normal text-zinc-500 tracking-widest uppercase flex items-center gap-2">
<span className="w-8 h-px bg-zinc-700"></span>
            Infrastructure Primitives
          </h2>
<p className="mt-4 text-3xl font-normal tracking-tight text-zinc-100 sm:text-4xl drop-shadow-md">
            Engineered for physical scale
          </p>
<p className="mt-4 text-base text-zinc-400">
            Abstract away the complexity of GPU orchestration. We built the
            hardware layer so you can focus on the model.
          </p>
</div>
<div className="mx-auto mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 scroll-animate perspective-1000">
<div className="tactile-base rounded-2xl p-6 group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col h-64">
<div className="absolute right-0 top-0 w-32 h-32 bg-indigo-500/5 rounded-bl-full blur-2xl transition-opacity group-hover:opacity-100 opacity-50"></div>
<div className="mb-auto">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center border border-zinc-800/50 mb-6 shadow-inner relative">
<iconify-icon className="text-zinc-300 relative z-10" icon="solar:bolt-linear" width="24"></iconify-icon>
<div className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-indigo-400 transition-colors shadow-[0_0_8px_rgba(99,102,241,0)] group-hover:shadow-[0_0_8px_rgba(99,102,241,1)]"></div>
</div>
<h3 className="text-lg font-normal tracking-tight text-zinc-100">
                Elastic Compute
              </h3>
<p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Dynamically scale H100s up or down based on your inference
                queues without downtime.
              </p>
</div>
<div className="h-1 w-12 bg-zinc-800 rounded-full mt-4 group-hover:bg-zinc-600 transition-colors"></div>
</div>
<div className="tactile-base rounded-2xl p-6 group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col h-64">
<div className="mb-auto">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center border border-zinc-800/50 mb-6 shadow-inner relative">
<iconify-icon className="text-zinc-300 relative z-10" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal tracking-tight text-zinc-100">
                Model Registry
              </h3>
<p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Version control weights, track hyperparameters, and roll back
                deployments with physical precision.
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
                Deep Analytics
              </h3>
<p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Measure what matters. Uncover hardware bottlenecks with custom
                reporting panels.
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
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-20 scroll-animate">
<h2 className="text-3xl font-normal tracking-tight text-zinc-100">
        The hardware pipeline
      </h2>
<p className="mt-4 text-base text-zinc-400">
        A staged physical workflow for ingesting, shaping, compiling, validating, and deploying
        intelligence across distributed compute nodes.
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
<h3>Signal Intake</h3>
<p>
            External uplinks are filtered and normalized before entering the secured processing lattice.
          </p>
</div>
<div className="step-card right">
<div className="pipeline-card tactile-glass p-5 flex items-center gap-4">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center text-zinc-300 shrink-0">
<iconify-icon icon="solar:inbox-linear" width="22"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="progress-track">
<div className="progress-fill bg-zinc-400" style={{'--target': '78%'}}></div>
</div>
<div className="text-xs font-mono text-zinc-500 mt-3 tracking-wider uppercase">
                INPUT_RATE: 512GB/s
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
                CACHE_SYNC: VERIFIED
              </div>
<div className="flex justify-end gap-1.5">
<div className="mini-line w-7 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.55)]"></div>
<div className="mini-line w-7 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.55)]"></div>
<div className="mini-line w-7 h-1.5 rounded-full bg-zinc-700"></div>
</div>
</div>
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center text-indigo-400 shrink-0">
<iconify-icon icon="solar:server-square-update-linear" width="22"></iconify-icon>
</div>
</div>
</div>
<div className="step-copy right">
<h3>Cache Alignment</h3>
<p>
            Memory shards are mirrored and validated so all workers begin from a stable synchronized state.
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
<h3>Distributed Training</h3>
<p>
            Compute clusters split tasks across linked accelerators for continuous parallel model shaping.
          </p>
</div>
<div className="step-card right">
<div className="pipeline-card tactile-glass p-5 flex items-center gap-4">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center text-indigo-400 shrink-0">
<iconify-icon icon="solar:magic-stick-3-linear" width="22"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-3 tracking-wider uppercase">
<span>TRAIN_STATUS</span>
<span>ACTIVE</span>
</div>
<div className="grid grid-cols-3 gap-2">
<div className="mini-stat rounded-xl border border-zinc-800 bg-zinc-900/80 px-3 py-2 text-[11px] text-zinc-400 font-mono">
                  GPU_A 92%
                </div>
<div className="mini-stat rounded-xl border border-zinc-800 bg-zinc-900/80 px-3 py-2 text-[11px] text-zinc-400 font-mono">
                  GPU_B 88%
                </div>
<div className="mini-stat rounded-xl border border-zinc-800 bg-zinc-900/80 px-3 py-2 text-[11px] text-zinc-400 font-mono">
                  GPU_C 90%
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
                COMPILE_MATRIX
              </div>
<div className="flex flex-wrap justify-end gap-2">
<span className="mini-chip text-[11px] font-mono px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  ONNX
                </span>
<span className="mini-chip text-[11px] font-mono px-3 py-1.5 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800">
                  CUDA
                </span>
<span className="mini-chip text-[11px] font-mono px-3 py-1.5 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800">
                  TensorRT
                </span>
</div>
</div>
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center text-emerald-400 shrink-0">
<iconify-icon icon="solar:cpu-linear" width="22"></iconify-icon>
</div>
</div>
</div>
<div className="step-copy right">
<h3>Model Compilation</h3>
<p>
            Runtime layers are optimized into hardware-specific execution packages for low-latency delivery.
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
<h3>Deployment Relay</h3>
<p>
            Verified artifacts are routed through monitored relay channels and published to inference edges.
          </p>
</div>
<div className="step-card right">
<div className="pipeline-card tactile-glass p-5">
<div className="flex items-center justify-between gap-4 mb-4">
<div className="flex items-center gap-3 min-w-0">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center text-emerald-400 shrink-0">
<iconify-icon icon="solar:rocket-linear" width="22"></iconify-icon>
</div>
<div className="min-w-0">
<div className="text-zinc-200 text-base">Edge Deployment</div>
<div className="text-xs font-mono text-zinc-500 tracking-wider uppercase mt-1">
                    READY_STATE: 97%
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

<section className="sm:py-32 z-10 bg-[#09090b] border-zinc-900 border-b pt-24 pb-24 relative" id="telemetry">
<div className="z-0 opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiLz48L3N2Zz4=')] absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
<div className="mb-16 scroll-animate">
<h2 className="text-3xl font-normal tracking-tight text-zinc-100 flex items-center gap-3">
<svg aria-hidden="true" className="lucide lucide-terminal-square w-6 h-6 text-zinc-500" data-lucide="terminal-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 11 2-2-2-2"></path><path d="M11 13h4"></path><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect></svg>
          Live Telemetry Operations
        </h2>
<p className="mt-4 text-base text-zinc-400 max-w-2xl">
          Real-time surveillance and hardware orchestration. Command your
          active clusters directly through secure terminal endpoints.
        </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-6 gap-6 scroll-animate tilt-wrapper gap-x-6 gap-y-6">

<div className="tilt-element cmd-panel lg:col-span-2 h-[280px]">
<div className="cmd-panel-header">
<div className="flex flex-col gap-1">
<span className="text-xs text-zinc-400 font-mono uppercase tracking-widest">
                Zone Alpha
              </span>
<span className="text-base font-normal text-zinc-300">
                Node Scan
              </span>
</div>
<div className="flex items-center gap-1.5 px-2 py-1 rounded border border-zinc-700 bg-zinc-800/50 shadow-inner">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-400 shadow-[0_0_8px_rgba(161,161,170,0.5)] animate-pulse"></div>
<span className="text-xs text-zinc-400 uppercase tracking-widest font-mono">
                Active
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

<div className="absolute inset-0 rounded-full" style={{background: 'conic-gradient(from 0deg, transparent 70%, rgba(161, 161, 170, 0.1) 90%, rgba(161, 161, 170, 0.6) 100%)', animation: 'radar-sweep 4s linear infinite'}}></div>
</div>
<div className="w-full flex justify-between items-end absolute bottom-4 px-4">
<span className="text-xs text-zinc-400 font-mono tracking-widest">
                LOC: 44.2, -11.4
              </span>
<svg aria-hidden="true" className="lucide lucide-crosshair lucide2" cy="12" data-lucide="crosshair" fill="none" height="24" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
</div>
</div>
</div>

<div className="tilt-element cmd-panel lg:col-span-4 h-[280px]">
<div className="cmd-panel-header">
<span className="text-lg font-normal text-zinc-300">System Logs</span>
<div className="flex items-center gap-1 bg-[#0a0a0c] p-1 rounded-lg border border-zinc-800 shadow-inner">
<button className="px-3 py-1 text-xs font-normal text-zinc-100 bg-[#1e1e24] rounded border border-zinc-700 shadow-sm">
                Global
              </button>
<button className="px-3 py-1 text-xs font-normal text-zinc-500 hover:text-zinc-300 transition-colors">
                Alerts
              </button>
<button className="px-3 py-1 text-xs font-normal text-zinc-500 hover:text-zinc-300 transition-colors">
                Routine
              </button>
</div>
</div>
<div className="p-0 flex flex-col flex-1 relative overflow-hidden">
<div className="grid grid-cols-[auto_1fr_2fr_1fr_1fr] gap-4 px-4 py-3 border-b border-zinc-800/50 bg-[#121214]">
<span className="text-xs text-zinc-600 font-mono tracking-widest uppercase w-6">CHK</span>
<span className="text-xs text-zinc-600 font-mono tracking-widest uppercase">REF</span>
<span className="text-xs text-zinc-600 font-mono tracking-widest uppercase">OPERATION</span>
<span className="text-xs text-zinc-600 font-mono tracking-widest uppercase">STATE</span>
<span className="text-xs text-zinc-600 font-mono tracking-widest uppercase text-right">TIMESTAMP</span>
</div>
<div className="flex flex-col">
<div className="grid grid-cols-[auto_1fr_2fr_1fr_1fr] gap-4 px-4 py-3 items-center border-b border-zinc-800/30 hover:bg-zinc-800/20 transition-colors">
<div className="w-4 h-4 rounded bg-zinc-500 flex items-center justify-center shadow-inner">
<svg aria-hidden="true" className="lucide lucide-check w-3 h-3 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-mono">EVT-12C</span>
<span className="text-sm text-zinc-300 truncate">Sync core frequency</span>
<div>
<span className="text-xs text-zinc-400 px-2 py-0.5 rounded border border-zinc-600/50 bg-zinc-700/50">
                    STABLE
                  </span>
</div>
<span className="text-xs text-zinc-500 font-mono text-right">10:14:22.01</span>
</div>
<div className="grid grid-cols-[auto_1fr_2fr_1fr_1fr] gap-4 px-4 py-3 items-center border-b border-zinc-700/50 bg-zinc-800/30 border-l-2 border-l-zinc-500 relative">
<div className="absolute inset-0 bg-gradient-to-r from-zinc-500/5 to-transparent pointer-events-none">
</div>
<div className="w-4 h-4 rounded bg-zinc-700/30 border border-zinc-600/50 flex items-center justify-center relative z-10">
<svg aria-hidden="true" className="lucide lucide-alert-triangle w-3 h-3 text-zinc-400" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
</div>
<span className="text-xs text-zinc-300 font-mono relative z-10">ERR-502</span>
<span className="text-sm text-zinc-200 truncate relative z-10">Uplink packet loss</span>
<div className="relative z-10">
<span className="text-xs text-zinc-300 px-2 py-0.5 rounded border border-zinc-600/50 bg-zinc-700/50">
                    CRITICAL
                  </span>
</div>
<span className="text-xs text-zinc-500 font-mono text-right relative z-10">10:12:05.18</span>
</div>
<div className="grid grid-cols-[auto_1fr_2fr_1fr_1fr] gap-4 px-4 py-3 items-center border-b border-zinc-800/30 hover:bg-zinc-800/20 transition-colors">
<div className="w-4 h-4 rounded bg-[#0a0a0c] border border-zinc-700 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] cursor-pointer">
</div>
<span className="text-xs text-zinc-500 font-mono">EVT-08A</span>
<span className="text-sm text-zinc-500 truncate filter blur-[1px]">Background cache flush</span>
<div>
<span className="text-xs text-zinc-500 px-2 py-0.5 rounded border border-zinc-800 bg-zinc-900/50">
                    PENDING
                  </span>
</div>
<span className="text-xs text-zinc-600 font-mono text-right">09:45:00.62</span>
</div>
</div>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 tactile-glass px-4 py-2 rounded-full border border-zinc-700 shadow-[0_10px_20px_rgba(0,0,0,0.5)] flex items-center gap-4 z-20">
<span className="text-xs text-zinc-300 font-normal">1 selected</span>
<div className="w-px h-4 bg-zinc-700"></div>
<button className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-200 transition-colors">
<svg aria-hidden="true" className="lucide lucide-edit-2 w-3.5 h-3.5" data-lucide="edit-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg></button>
</div>
</div>
</div>

<div className="tilt-element cmd-panel lg:col-span-2 h-[280px]">
<div className="cmd-panel-header">
<span className="text-base font-normal text-zinc-300">Compute Usage</span>
<svg aria-hidden="true" className="lucide lucide-more-horizontal w-4 h-4 text-zinc-600" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>
<div className="cmd-panel-body flex flex-col">
<div className="flex-1 bg-[#0a0a0c] rounded-xl border border-zinc-800 p-4 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] relative flex items-end justify-center gap-4">
<div className="absolute inset-x-4 top-4 border-b border-dashed border-zinc-800"></div>
<div className="absolute inset-x-4 top-1/2 border-b border-dashed border-zinc-800"></div>
<div className="relative flex flex-col items-center w-12 z-10">
<div className="w-full h-16 bg-gradient-0_15px_rgba(161,161,170,0.3)]" style={{animation: 'aura-compute-bar-1 3.5s ease-in-out infinite'}}></div>
<span className="text-xs text-zinc-500 font-mono mt-2 uppercase tracking-widest absolute -bottom-6">Node A</span>
</div>
<div className="relative flex flex-col items-center w-12 z-10">
<div className="absolute -top-6 bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs font-mono px-1.5 py-0.5 rounded tracking-widest uppercase">
                  Max</div>
<div className="w-full h-24 bg-gradient-to-t from-zinc-500 to-zinc-300 rounded-t shadow-[0_0_20px_rgba(161,161,170,0.4)]" style={{animation: 'aura-compute-bar-2 4.5s ease-in-out infinite'}}></div>
<span className="text-xs text-zinc-500 font-mono mt-2 uppercase tracking-widest absolute -bottom-6">Node B</span>
</div>
<div className="relative flex flex-col items-center w-12 z-10">
<div className="w-full h-14 bg-gradient-to-t from-zinc-700 to-zinc-500 rounded-t shadow-[0_0_10px_rgba(161,161,170,0.2)]" style={{animation: 'aura-compute-bar-3 3s ease-in-out infinite'}}></div>
<span className="text-xs text-zinc-500 font-mono mt-2 uppercase tracking-widest absolute -bottom-6">Node C</span>
</div>
</div>
<div className="mt-8 grid grid-cols-3 gap-2 px-1">
<div className="flex flex-col">
<span className="text-xl font-normal text-zinc-200">240</span>
<span className="text-xs text-zinc-500 font-mono uppercase tracking-widest">Active</span>
</div>
<div className="flex flex-col">
<span className="text-xl font-normal text-zinc-300 drop-shadow-[0_0_5px_rgba(161,161,170,0.5)]" style={{animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}>
                  480
                </span>
<span className="text-xs text-zinc-500 font-mono uppercase tracking-widest">Standby</span>
</div>
<div className="flex flex-col">
<span className="text-xl font-normal text-zinc-400">112</span>
<span className="text-xs text-zinc-500 font-mono uppercase tracking-widest">Cleared</span>
</div>
</div>
</div>
</div>

<div className="tilt-element cmd-panel lg:col-span-2 h-[280px]">
<div className="cmd-panel-header">
<span className="text-xs text-zinc-500 font-mono uppercase tracking-widest">
              Thermal Core
            </span>
<svg aria-hidden="true" className="lucide lucide-more-horizontal w-4 h-4 text-zinc-600" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>
<div className="cmd-panel-body flex flex-col items-center justify-center relative">
<div className="relative w-36 h-36 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90">
<circle cx="72" cy="72" fill="transparent" r="60" stroke="#18181b" strokeWidth="10"></circle>
<circle className="0,0.5)]" cx="72" cy="72" fill="transparent" r="60" stroke="#a1a1aa" stroke-dasharray="377" strokeLinecap="round" strokeWidth="10" style={{animation: 'thermal-fluctuation 4s ease-in-out infinite', strokeDashoffset: '90'}}></circle>
</svg>
<div className="absolute flex flex-col items-center">
<span className="text-3xl font-normal text-zinc-300 tracking-tight drop-shadow-[0_0_8px_rgba(161,161,170,0.4)] animate-[pulse_4s_ease-in-out_infinite]">
                  3240
                </span>
<span className="text-xs text-zinc-500 font-mono tracking-widest mt-1">
                  KELVIN
                </span>
</div>
</div>
<div className="w-full flex justify-between items-end absolute bottom-4 px-4">
<div className="px-2 py-1 rounded bg-zinc-800/50 border border-zinc-700 shadow-inner">
<span className="text-xs text-zinc-400 font-mono tracking-widest uppercase">
                  Normal
                </span>
</div>
<svg aria-hidden="true" className="lucide lucide-refresh-cw w-4 h-4 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</div>
</div>
</div>

<div className="tilt-element cmd-panel lg:col-span-2 h-[280px]">
<div className="cmd-panel-header">
<span className="text-base font-normal text-zinc-300">Deployment Tasks</span>
<svg aria-hidden="true" className="lucide lucide-more-horizontal w-4 h-4 text-zinc-600" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>
<div className="cmd-panel-body flex flex-col gap-4 gap-x-4 gap-y-4">
<div className="bg-[#0a0a0c] rounded-xl p-4 border border-zinc-800 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] flex flex-col gap-4 relative">
<p className="text-sm text-zinc-400 leading-relaxed">
                Boot security modules<br/>
                Run diagnostic sweep on outer firewall layers.
              </p>
<div className="flex flex-col gap-2">
<div className="flex justify-between items-end">
<span className="text-xs text-zinc-500 font-mono uppercase tracking-widest">Progress</span>
<span className="text-xs font-mono text-zinc-300">80%</span>
</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden shadow-inner">
<div className="pb-fill h-full bg-zinc-400 rounded-full shadow-[0_0_10px_rgba(161,161,170,0.5)] relative overflow-hidden" style={{'--pb': '80%'}}>
<div className="pb-sheen absolute top-0 bottom-0 w-[50%] bg-gradient-to-r from-transparent via-white/40 to-transparent">
</div>
<div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/30">
</div>
</div>
</div>
</div>
<div className="flex justify-between items-center mt-2">
<div className="flex items-center gap-1.5 text-zinc-500">
<svg aria-hidden="true" className="lucide lucide-clock w-3.5 h-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
<span className="text-xs font-mono">4/5</span>
</div>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border border-zinc-700 bg-zinc-800 flex items-center justify-center text-xs text-zinc-400">
                    AJ</div>
<div className="w-6 h-6 rounded-full border border-zinc-700 bg-zinc-800 flex items-center justify-center text-xs text-zinc-400">
                    MR</div>
</div>
</div>
</div>
<div className="mt-auto flex justify-between items-center px-1">
<span className="text-xslabel class=" cursor-pointer"="" flex="" gap-2="" items-center="">
<span className="text-xs text-zinc-400 font-normal">Bypass</span>
<div className="relative">
<input className="sr-only" type="checkbox"/>
<div className="w-8 h-4 rounded-full bg-[#0a0a0c] border border-zinc-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] transition-colors"></div>
<div className="absolute left-1 top-1 w-2 h-2 rounded-full bg-zinc-500 transition-transform"></div>
</div>
</span></div>
</div>
</div>

<div className="tilt-element cmd-panel lg:col-span-6 h-[280px]">
<div className="cmd-panel-header justify-start gap-3">
<div className="w-2 h-2 rounded-full bg-zinc-400 shadow-[0_0_8px_rgba(161,161,170,0.5)] animate-pulse"></div>
<span className="text-xs text-zinc-400 font-mono uppercase tracking-widest bg-zinc-800/30 px-2 py-0.5 rounded border border-zinc-700/50">
              T-Minus 08 Min
            </span>
</div>
<div className="cmd-panel-body flex flex-col pt-6 pr-6 pb-6 pl-6 justify-between h-[216px]">
<div className="flex items-center justify-between mb-6">
<span className="text-base font-normal text-zinc-300">Quantum Relay Uplink</span>
<div className="flex items-center gap-2">
<span className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest animate-pulse">Transmitting</span>
<div className="flex gap-0.5">
<div className="w-1 h-3 bg-zinc-500 rounded-sm animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="w-1 h-3 bg-zinc-500 rounded-sm animate-[pulse_1s_ease-in-out_infinite_0.2s]"></div>
<div className="w-1 h-3 bg-zinc-500 rounded-sm animate-[pulse_1s_ease-in-out_infinite_0.4s]"></div>
</div>
</div>
</div>
<div className="w-full relative py-6 flex-1">
<div className="h-10 w-full bg-[#0a0a0c] rounded-lg border border-zinc-800 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] relative overflow-hidden">
<div className="absolute inset-0 signal-texture opacity-20"></div>
<div className="absolute inset-y-0 right-0 w-[15%] bg-zinc-500/5 border-l border-zinc-600/30 border-dashed animate-pulse flex items-center justify-center">
<div className="w-1 h-1 rounded-full bg-zinc-400 shadow-[0_0_8px_rgba(161,161,170,0.5)]"></div>
</div>
<div className="absolute inset-y-0 left-0 w-[15%] bg-zinc-500/5 border-r border-zinc-600/30 border-dashed animate-pulse flex items-center justify-center">
<div className="w-1 h-1 rounded-full bg-zinc-400 shadow-[0_0_8px_rgba(161,161,170,0.5)]"></div>
</div>
<div className="sweep-block absolute inset-y-0 bg-zinc-700/20 border-x border-zinc-600 shadow-[inset_0_0_20px_rgba(161,161,170,0.2)] flex items-center justify-between px-2 z-10">
<div className="w-px h-6 bg-zinc-400/80 shadow-[0_0_8px_rgba(161,161,170,0.5)]"></div>
<div className="w-px h-6 bg-zinc-400/80 shadow-[0_0_8px_rgba(161,161,170,0.5)]"></div>
</div>
</div>
<div className="flex justify-between mt-3 px-1 relative">
<div className="absolute top-[-10px] left-0 right-0 flex justify-between px-1">
<div className="w-px h-2 bg-zinc-700"></div>
<div className="w-px h-2 bg-zinc-700"></div>
<div className="w-px h-2 bg-zinc-700"></div>
<div className="w-px h-2 bg-zinc-700"></div>
</div>
<span className="text-xs text-zinc-500 font-mono">10:00</span>
<span className="text-xs text-zinc-400 font-mono relative -left-4">10:30</span>
<span className="text-xs text-zinc-400 font-mono relative left-4">12:00</span>
<span className="text-xs text-zinc-500 font-mono">12:30</span>
</div>
</div>
<div className="flex justify-between items-end mt-auto pt-4">
<div className="flex flex-col gap-1">
<span className="text-xs text-zinc-500">Encrypted Relay Channel</span>
<a className="text-sm font-mono text-zinc-300 hover:text-zinc-100 transition-colors flex items-center gap-1.5 group" href="#">
                  net.link/auth-v9
                  <svg aria-hidden="true" className="lucide lucide-external-link w-3 h-3" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>
<button className="w-10 h-10 rounded-lg bg-[#18181b] border border-zinc-700 shadow-lg flex items-center justify-center text-zinc-400 hover:text-white transition-all hover:border-zinc-500 hover:shadow-[0_0_15px_rgba(161,161,170,0.2)]">
<svg aria-hidden="true" className="lucide lucide-satellite w-5 h-5" data-lucide="satellite" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5"></path><path d="M16.5 7.5 19 5"></path><path d="m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5"></path><path d="M9 21a6 6 0 0 0-6-6"></path><path d="M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-32 z-10 overflow-hidden bg-[#0a0a0c] pt-24 pb-24 relative" id="network">
<style>
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
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
<div className="max-w-2xl mb-16">
<h2 className="text-xs font-normal text-indigo-400 tracking-widest uppercase flex items-center gap-2">
<svg className="w-4 h-4 text-indigo-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
<path d="M2 12h20"></path>
</svg>
        Planetary Backbone
      </h2>
<p className="mt-5 text-3xl font-normal tracking-tight text-zinc-100 sm:text-4xl">
        Zero-latency edge routing.
      </p>
<p className="mt-4 text-base text-zinc-400 leading-relaxed">
        Deploy models to 40+ physically isolated bare-metal POPs around the globe, interconnected by dedicated dark
        fiber for deterministic sub-20ms inference.
      </p>
</div>
<div className="rounded-[2rem] p-1 bg-gradient-to-b from-zinc-800/50 to-transparent relative overflow-hidden h-[450px] md:h-[550px] shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
<div className="absolute inset-[1px] rounded-[calc(2rem-1px)] bg-[#0a0a0c] overflow-hidden">

<div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none z-0">
<svg className="w-full h-full object-cover" viewbox="0 0 1000 500">
<path d="M150,150 Q160,140 170,150 T190,160 Q200,180 180,200 T150,150 Z" fill="#ffffff"></path>
<path d="M300,100 Q320,80 340,110 T380,140 Q400,200 350,220 T300,100 Z" fill="#ffffff"></path>
<path d="M550,80 Q580,60 620,100 T680,150 Q700,250 600,200 T550,80 Z" fill="#ffffff"></path>
<path d="M800,120 Q820,100 850,130 T880,180 Q860,200 830,190 T800,120 Z" fill="#ffffff"></path>
<path d="M250,300 Q280,280 300,320 T280,380 Q250,400 230,350 T250,300 Z" fill="#ffffff"></path>
<path d="M600,300 Q650,250 680,300 T650,400 Q600,420 580,350 T600,300 Z" fill="#ffffff"></path>
</svg>
</div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-60 z-0">
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60 z-10" preserveaspectratio="none" style={{filter: 'drop-shadow(0 0 6px rgba(99,102,241,0.6))'}} viewbox="0 0 100 100">

<line className="animate-data-link" stroke="#6366f1" stroke-dasharray="1.2 1.2" strokeWidth="0.3" style={{animationDuration: '2s'}} x1="15" x2="25" y1="38" y2="35">
</line>

<path className="animate-data-link" d="M 25 35 Q 37 24 50 25" fill="none" stroke="#6366f1" stroke-dasharray="1.2 1.2" strokeWidth="0.3" style={{animationDuration: '3s'}}>
</path>

<path className="animate-data-link" d="M 50 25 Q 62 36 75 45" fill="none" stroke="#6366f1" stroke-dasharray="1.2 1.2" strokeWidth="0.3" style={{animationDuration: '4s'}}>
</path>

<path className="animate-data-link" d="M 50 25 Q 66 22 85 30" fill="none" stroke="#6366f1" stroke-dasharray="1.2 1.2" strokeWidth="0.3" style={{animationDuration: '3.5s'}}>
</path>

<path className="animate-data-link" d="M 25 35 Q 27 49 30 70" fill="none" stroke="#6366f1" stroke-dasharray="1.2 1.2" strokeWidth="0.3" style={{animationDuration: '2.5s'}}>
</path>
</svg>


<div className="absolute w-5 h-5 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20" style={{top: '35%', left: '25%'}}>
<div className="absolute w-full h-full bg-indigo-500/20 rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '0s'}}></div>
<div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse-node" style={{animationDelay: '0s'}}></div>
</div>

<div className="absolute w-5 h-5 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20" style={{top: '38%', left: '15%'}}>
<div className="absolute w-full h-full bg-indigo-500/20 rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '0.5s'}}></div>
<div className="w-1.5 h-1.5 bg-indigo-100 rounded-full animate-pulse-node" style={{animationDelay: '0.5s'}}></div>
</div>

<div className="absolute w-5 h-5 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20" style={{top: '25%', left: '50%'}}>
<div className="absolute w-full h-full bg-indigo-500/20 rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '1.2s'}}></div>
<div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse-node" style={{animationDelay: '1.2s'}}></div>
</div>

<div className="absolute w-5 h-5 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20" style={{top: '30%', left: '85%'}}>
<div className="absolute w-full h-full bg-indigo-500/20 rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '0.8s'}}></div>
<div className="w-1.5 h-1.5 bg-indigo-100 rounded-full animate-pulse-node" style={{animationDelay: '0.8s'}}></div>
</div>

<div className="absolute w-5 h-5 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20" style={{top: '45%', left: '75%'}}>
<div className="absolute w-full h-full bg-indigo-500/20 rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '1.5s'}}></div>
<div className="w-1.5 h-1.5 bg-indigo-200 rounded-full animate-pulse-node" style={{animationDelay: '1.5s'}}></div>
</div>

<div className="absolute w-5 h-5 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20" style={{top: '70%', left: '30%'}}>
<div className="absolute w-full h-full bg-indigo-500/20 rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '0.2s'}}></div>
<div className="w-1.5 h-1.5 bg-indigo-300 rounded-full animate-pulse-node" style={{animationDelay: '0.2s'}}></div>
</div>

<div className="absolute bottom-6 right-6 lg:left-6 lg:right-auto bg-[#0a0a0c]/80 backdrop-blur-xl p-5 rounded-xl border border-zinc-800 shadow-2xl w-[calc(100%-3rem)] sm:w-72 z-30">
<div className="flex justify-between items-center mb-5 pb-4 border-b border-zinc-800/80">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse"></div>
<span className="text-xs text-zinc-300 font-mono tracking-widest uppercase">Global Mesh</span>
</div>
<span className="text-[10px] text-emerald-400 font-mono border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 rounded">NOMINAL</span>
</div>
<div className="space-y-5">
<div>
<div className="flex justify-between items-end mb-2">
<span className="text-[10px] font-normal text-zinc-500 uppercase tracking-widest">Avg Latency</span>
<span className="text-xs font-mono text-zinc-200">14ms</span>
</div>
<div className="h-6 w-full flex items-end justify-between gap-[2px] opacity-80">
<div className="w-full h-[40%] bg-indigo-500/40 rounded-t-sm"></div>
<div className="w-full h-[60%] bg-indigo-500/60 rounded-t-sm"></div>
<div className="w-full h-[30%] bg-indigo-500/30 rounded-t-sm"></div>
<div className="w-full h-[80%] bg-indigo-500/80 rounded-t-sm"></div>
<div className="w-full h-[50%] bg-indigo-500/50 rounded-t-sm"></div>
<div className="w-full h-[90%] bg-indigo-500 rounded-t-sm shadow-[0_0_8px_#6366f1]"></div>
<div className="w-full h-[70%] bg-indigo-500/70 rounded-t-sm"></div>
<div className="w-full h-[45%] bg-indigo-500/45 rounded-t-sm"></div>
</div>
</div>
<div className="pt-4 border-t border-zinc-800/80">
<div className="flex justify-between items-end mb-3">
<span className="text-[10px] font-normal text-zinc-500 uppercase tracking-widest">Throughput</span>
<span className="text-xs font-mono text-zinc-200">1.2 TB/s</span>
</div>
<div className="h-1.5 w-full bg-[#050505] rounded-full overflow-hidden shadow-inner border border-zinc-800/80">
<div className="h-full w-[75%] bg-indigo-500 rounded-full shadow-[0_0_10px_#6366f1] relative">
<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.15)_50%,transparent_75%)] bg-[length:1rem_1rem] animate-bar-sweep">
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

<section className="sm:py-32 pt-24 pb-24 relative" id="platform">
<style>
        @keyframes dataFlowAnim {
          0% { left: 0%; opacity: 0; transform: scale(0.5) translateY(-50%); }
          10% { opacity: 1; transform: scale(1) translateY(-50%); }
          90% { opacity: 1; transform: scale(1) translateY(-50%); }
          100% { left: 100%; opacity: 0; transform: scale(0.5) translateY(-50%); }
        }
        @keyframes pulseRing {
          0% { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes memPulse {
          0%, 100% { opacity: 0.3; border-color: rgba(39,39,42,0.8); box-shadow: none; }
          50% { opacity: 1; border-color: rgba(99,102,241,0.5); background-color: rgba(99,102,241,0.05); box-shadow: inset 0 0 10px rgba(99,102,241,0.2); }
        }
        .animate-data-flow { animation: dataFlowAnim 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
        .animate-pulse-ring { animation: pulseRing 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .memory-block-1 { animation: memPulse 2.5s ease-in-out infinite 0s; }
        .memory-block-2 { animation: memPulse 2.5s ease-in-out infinite 0.4s; }
        .memory-block-3 { animation: memPulse 2.5s ease-in-out infinite 0.8s; }
      </style>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16 scroll-animate">
<h2 className="text-3xl font-normal tracking-tight text-zinc-100 mb-4">
            Advanced Architecture
          </h2>
<p className="text-base text-zinc-400">
            Deep dive into the physical infrastructure powering your models. Every node is optimized for maximum throughput.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] scroll-animate tilt-wrapper">
<div className="tilt-element md:col-span-2 tactile-base rounded-[2rem] p-8 relative overflow-hidden group border border-zinc-800/80 hover:border-zinc-600 transition-colors flex flex-col justify-between">
<div className="absolute inset-0 wire-texture opacity-20 pointer-events-none"></div>
<div className="relative z-10">
<h3 className="text-2xl font-normal tracking-tight text-zinc-100">Inference Edge</h3>
<p className="mt-2 text-zinc-400 max-w-md text-sm leading-relaxed">
                Hardware-accelerated routing globally. We cache weights into RAM across physical POPs for sub-20ms latency.
              </p>
</div>
<div className="absolute right-[-2%] bottom-[-5%] w-3/4 h-48 tactile-glass rounded-tl-3xl border-t border-l border-zinc-700/80 shadow-2xl p-6 transition-transform duration-700 group-hover:-translate-x-4 group-hover:-translate-y-4 flex flex-col justify-center">
<div className="flex gap-4 items-center w-full relative">
<div className="w-14 h-14 rounded-full tactile-inset flex items-center justify-center text-xs font-mono text-zinc-400 border border-zinc-700 z-10 shadow-[0_10px_20px_rgba(0,0,0,0.5)]">EU</div>
<div className="flex-1 h-1.5 bg-zinc-900 rounded-full relative overflow-hidden shadow-inner border border-zinc-800/50">
<div className="absolute top-1/2 -translate-y-1/2 h-1.5 w-12 bg-indigo-500 rounded-full shadow-[0_0_12px_#6366f1] animate-data-flow"></div>
</div>
<div className="w-14 h-14 rounded-full tactile-inset flex items-center justify-center text-xs font-mono text-zinc-400 border border-zinc-700 z-10 shadow-[0_10px_20px_rgba(0,0,0,0.5)]">US</div>
</div>
</div>
</div>
<div className="tilt-element tactile-base rounded-[2rem] p-8 relative overflow-hidden group border border-zinc-800/80 hover:border-zinc-600 transition-colors flex flex-col justify-between">
<div className="relative z-10">
<h3 className="text-xl font-normal tracking-tight text-zinc-100">Vector Memory</h3>
<p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Instant semantic retrieval directly from ultra-fast NVMe cache tiers.
              </p>
</div>
<div className="flex flex-col gap-2 mt-6 z-10 w-full max-w-[180px] mx-auto group-hover:scale-105 transition-transform duration-500">
<div className="h-8 rounded-lg tactile-inset border border-zinc-800 bg-zinc-900/50 memory-block-1 flex items-center px-4">
<div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1]"></div>
<div className="ml-3 h-1.5 w-1/2 bg-zinc-700/50 rounded-full"></div>
</div>
<div className="h-8 rounded-lg tactile-inset border border-zinc-800 bg-zinc-900/50 memory-block-2 flex items-center px-4">
<div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1]"></div>
<div className="ml-3 h-1.5 w-3/4 bg-zinc-700/50 rounded-full"></div>
</div>
<div className="h-8 rounded-lg tactile-inset border border-zinc-800 bg-zinc-900/50 memory-block-3 flex items-center px-4">
<div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1]"></div>
<div className="ml-3 h-1.5 w-1/3 bg-zinc-700/50 rounded-full"></div>
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
<svg aria-hidden="true" className="lucide lucide-shield w-6 h-6 text-zinc-500" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
            Military-Grade Isolation
          </h2>
<p className="mt-4 text-base text-zinc-400 max-w-2xl">
            We operate out of SOC2 Type II and ISO 27001 certified physical vaults. Your weights never leave hardware memory.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 scroll-animate tilt-wrapper">
<div className="tilt-element tactile-glass rounded-2xl p-6 border border-zinc-800/80 group">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center border border-zinc-700 mb-6 relative shadow-inner">
<svg aria-hidden="true" className="lucide lucide-lock w-5 h-5 text-zinc-400 group-hover:text-zinc-100 transition-colors" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<h3 className="text-lg font-normal text-zinc-100">Physical Airgap</h3>
<p className="mt-2 text-sm text-zinc-400">Clusters are completely disconnected from public networks, only accessible via authenticated VPN tunnels.</p>
</div>
<div className="tilt-element tactile-glass rounded-2xl p-6 border border-zinc-800/80 group">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center border border-zinc-700 mb-6 relative shadow-inner">
<svg aria-hidden="true" className="lucide lucide-key w-5 h-5 text-zinc-400 group-hover:text-zinc-100 transition-colors" data-lucide="key" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
</div>
<h3 className="text-lg font-normal text-zinc-100">BYOK Encryption</h3>
<p className="mt-2 text-sm text-zinc-400">Bring your own keys. NVMe storage is AES-256 encrypted at rest and TLS 1.3 encrypted in transit.</p>
</div>
<div className="tilt-element tactile-glass rounded-2xl p-6 border border-zinc-800/80 group">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center border border-zinc-700 mb-6 relative shadow-inner">
<svg aria-hidden="true" className="lucide lucide-fingerprint w-5 h-5 text-zinc-400 group-hover:text-zinc-100 transition-colors" data-lucide="fingerprint" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path><path d="M2 12a10 10 0 0 1 18-6"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></path><path d="M8.65 22c.21-.66.45-1.32.57-2"></path><path d="M9 6.8a6 6 0 0 1 9 5.2v2"></path></svg>
</div>
<h3 className="text-lg font-normal text-zinc-100">Biometric Access</h3>
<p className="mt-2 text-sm text-zinc-400">Hardware data centers require minimum 5-point biometric verification for physical engineering access.</p>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 relative z-10 bg-[#09090b]" id="api">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row gap-16 items-center scroll-animate">
<div className="w-full lg:w-1/2">
<h2 className="text-3xl font-normal tracking-tight text-zinc-100">
              Bare-Metal API
            </h2>
<p className="mt-4 text-base text-zinc-400 leading-relaxed">
              Provision entire GPU clusters using familiar infrastructure-as-code patterns. Interact directly with the metal without middleware virtualization.
            </p>
<div className="mt-8 space-y-4">
<div className="flex items-center gap-3 text-sm text-zinc-300">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div> Native Python SDK
              </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div> Terraform Provider
              </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div> Direct NVML Bindings
              </div>
</div>
</div>
<div className="w-full lg:w-1/2 tilt-wrapper">
<div className="tilt-element tactile-base rounded-2xl p-1.5 border border-zinc-800 shadow-2xl">
<div className="cmd-panel h-64 rounded-xl flex flex-col">
<div className="h-10 border-b border-zinc-800/50 bg-[#121214] flex items-center px-4 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
<div className="ml-4 text-xs font-mono text-zinc-600">nexus_cli — bash</div>
</div>
<div className="flex-1 p-4 font-mono text-sm text-zinc-300 flex flex-col gap-2 overflow-hidden relative">
<div><span className="text-emerald-400">$</span> pip install nexus-core</div>
<div><span className="text-emerald-400">$</span> nexus init --cluster=h100-alpha</div>
<div className="text-zinc-500">Authenticating physical link... [OK]</div>
<div className="text-zinc-500">Allocating 8x SXM5 nodes... [OK]</div>
<div><span className="text-emerald-400">$</span> nexus deploy ./llama-3-8b</div>
<div className="mt-auto flex items-center gap-2">
<span className="w-2 h-4 bg-zinc-400 animate-pulse"></span>
</div>

<button className="absolute bottom-4 right-4 tactile-inset border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 p-2 rounded-lg shadow-inner transition-colors">
<svg aria-hidden="true" className="lucide lucide-copy w-4 h-4" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-32 overflow-hidden bg-[#09090b] pt-24 pb-24 relative">
<style>
    @keyframes float-1 {

      0%,
      100% {
        transform: translateY(0px) rotate(0deg);
      }

      50% {
        transform: translateY(-12px) rotate(0.5deg);
      }
    }

    @keyframes float-2 {

      0%,
      100% {
        transform: translateY(0px) rotate(0deg);
      }

      50% {
        transform: translateY(-16px) rotate(-0.5deg);
      }
    }

    @keyframes float-3 {

      0%,
      100% {
        transform: translateY(0px) rotate(0deg);
      }

      50% {
        transform: translateY(-10px) rotate(0.5deg);
      }
    }

    @keyframes laser-scan {
      0% {
        top: -10%;
        opacity: 0;
      }

      10% {
        opacity: 1;
      }

      90% {
        opacity: 1;
      }

      100% {
        top: 110%;
        opacity: 0;
      }
    }
  </style>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none z-0">
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

<div className="text-center mb-24 scroll-animate">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 mb-6 shadow-inner">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1] animate-pulse"></div>
<span className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase">
              Verified Node Telemetry
            </span>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-100 drop-shadow-md">
        Trusted by leading teams
      </h2>
</div>

<div className="relative w-full max-w-5xl mx-auto flex flex-col gap-12 md:gap-0 pb-12 perspective-1000">

<div className="hidden md:block absolute top-[5%] bottom-[5%] left-[50%] -translate-x-1/2 w-px bg-zinc-800/60 z-0">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-48 bg-indigo-500 rounded-full shadow-[0_0_15px_#6366f1]" style={{animation: 'laser-scan 5s cubic-bezier(0.4, 0, 0.2, 1) infinite'}}></div>
</div>

<div className="md:w-[65%] tactile-glass p-8 md:p-12 rounded-[2.5rem] border border-zinc-700/50 relative z-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:z-50 hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(0,0,0,0.8)] hover:border-indigo-500/40 group overflow-hidden scroll-animate md:-ml-6 shadow-[0_20px_40px_rgba(0,0,0,0.4)]" style={{animation: 'float-1 8s ease-in-out infinite'}}>

<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
</div>

<div className="absolute -top-10 -right-4 text-[180px] font-serif text-white opacity-[0.02] group-hover:opacity-[0.06] transition-all duration-700 pointer-events-none leading-none group-hover:rotate-12 group-hover:scale-110">
          "
        </div>
<div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start">

<div className="w-16 h-16 rounded-2xl tactile-inset p-1.5 flex-shrink-0 border border-zinc-800 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] relative group-hover:border-indigo-500/40 transition-colors duration-700">
<div className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center z-20 shadow-lg group-hover:border-indigo-500/50 transition-colors">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
</div>
<div className="w-full h-full rounded-xl bg-zinc-800 bg-[url('https://i.pravatar.cc/100?img=1')] bg-cover grayscale group-hover:grayscale-0 transition-all duration-700 filter contrast-125">
</div>
</div>
<div className="flex-1">
<div className="flex flex-wrap items-center gap-3 mb-6">
<span className="text-[10px] font-mono text-zinc-200 tracking-widest uppercase border border-zinc-700 bg-zinc-800/80 rounded px-3 py-1.5 shadow-inner group-hover:border-indigo-500/40 group-hover:text-indigo-300 transition-colors duration-700">
                    Sarah Jenkins
                  </span>
<span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
                    CTO @ TechFlow
                  </span>
</div>
<p className="text-xl md:text-2xl font-normal text-zinc-300 leading-relaxed tracking-tight group-hover:text-white transition-colors duration-700">
              "Nexus completely transformed how we ship models. The physical
              control over the infrastructure layer is unmatched."
            </p>
</div>
</div>
</div>

<div className="md:w-[70%] md:ml-auto tactile-glass p-8 md:p-12 rounded-[2.5rem] border border-zinc-700/50 relative z-20 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:z-50 hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(0,0,0,0.8)] hover:border-indigo-500/40 group overflow-hidden scroll-animate md:-mt-16 md:-mr-6 shadow-[0_25px_50px_rgba(0,0,0,0.5)]" style={{animation: 'float-2 9s ease-in-out infinite 1s'}}>
<div className="absolute inset-0 bg-gradient-to-bl from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
</div>
<div className="absolute -bottom-10 -left-6 text-[180px] font-serif text-white opacity-[0.02] group-hover:opacity-[0.06] transition-all duration-700 pointer-events-none leading-none group-hover:-rotate-12 group-hover:scale-110">
          "
        </div>
<div className="relative z-10 flex flex-col md:flex-row-reverse gap-6 md:gap-8 items-start text-left md:text-right">
<div className="w-16 h-16 rounded-2xl tactile-inset p-1.5 flex-shrink-0 border border-zinc-800 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] relative group-hover:border-indigo-500/40 transition-colors duration-700">
<div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center z-20 shadow-lg group-hover:border-indigo-500/50 transition-colors">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
</div>
<div className="w-full h-full rounded-xl bg-zinc-800 bg-[url('https://i.pravatar.cc/100?img=11')] bg-cover grayscale group-hover:grayscale-0 transition-all duration-700 filter contrast-125">
</div>
</div>
<div className="flex-1 flex flex-col md:items-end">
<div className="flex flex-wrap items-center gap-3 mb-6">
<span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
                    Lead Dev @ StartupX
                  </span>
<span className="text-[10px] font-mono text-zinc-200 tracking-widest uppercase border border-zinc-700 bg-zinc-800/80 rounded px-3 py-1.5 shadow-inner group-hover:border-indigo-500/40 group-hover:text-indigo-300 transition-colors duration-700">
                    Marcus Rhodes
                  </span>
</div>
<p className="text-xl md:text-2xl font-normal text-zinc-300 leading-relaxed tracking-tight group-hover:text-white transition-colors duration-700">
              "The edge routing latency is incredible. We saw our response
              times drop by 40% globally within a week."
            </p>
</div>
</div>
</div>

<div className="md:w-[68%] md:ml-[15%] tactile-glass p-8 md:p-12 rounded-[2.5rem] border border-zinc-700/50 relative z-30 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:z-50 hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(0,0,0,0.8)] hover:border-indigo-500/40 group overflow-hidden scroll-animate md:-mt-20 shadow-[0_30px_60px_rgba(0,0,0,0.6)]" style={{animation: 'float-3 10s ease-in-out infinite 2s'}}>
<div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[240px] font-serif text-white opacity-[0.015] group-hover:opacity-[0.05] transition-all duration-1000 pointer-events-none leading-none group-hover:scale-125">
          "
        </div>
<div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
<div className="w-16 h-16 rounded-2xl tactile-inset p-1.5 flex-shrink-0 border border-zinc-800 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] relative group-hover:border-indigo-500/40 transition-colors duration-700">
<div className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center z-20 shadow-lg group-hover:border-indigo-500/50 transition-colors">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
</div>
<div className="w-full h-full rounded-xl bg-zinc-800 bg-[url('https://i.pravatar.cc/100?img=5')] bg-cover grayscale group-hover:grayscale-0 transition-all duration-700 filter contrast-125">
</div>
</div>
<div className="flex-1">
<div className="flex flex-wrap items-center gap-3 mb-6">
<span className="text-[10px] font-mono text-zinc-200 tracking-widest uppercase border border-zinc-700 bg-zinc-800/80 rounded px-3 py-1.5 shadow-inner group-hover:border-indigo-500/40 group-hover:text-indigo-300 transition-colors duration-700">
                    Amanda Lee
                  </span>
<span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
                    VP Eng @ CloudScale
                  </span>
</div>
<p className="text-xl md:text-2xl font-normal text-zinc-300 leading-relaxed tracking-tight group-hover:text-white transition-colors duration-700">
              "Integrated flawlessly into our CI/CD pipelines. The hardware
              autoscaling handles Black Friday without manual intervention."
            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-32 bg-[#09090b] border-zinc-900 border-t pt-24 pb-24 relative" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-12 scroll-animate">
<h2 className="text-3xl font-normal tracking-tight text-zinc-100">
            Hardware Access Layers
          </h2>
<p className="mt-4 text-base text-zinc-400">
            Transparent billing mapped directly to bare-metal compute cycles and allocated memory bandwidth.
          </p>
</div>

<div className="flex items-center justify-center gap-4 mb-16 scroll-animate">
<span className="text-sm font-mono text-zinc-100 tracking-widest uppercase transition-colors" id="label-hourly">Hourly</span>
<label className="relative inline-flex items-center cursor-pointer" htmlFor="pricing-toggle">
<input className="sr-only peer" id="pricing-toggle" onchange="togglePricing()" type="checkbox"/>
<div className="w-14 h-7 bg-[#0a0a0c] border border-zinc-700 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] peer-checked:border-indigo-500/50 transition-colors"></div>
<div className="absolute left-1 top-1 w-5 h-5 bg-gradient-to-b from-zinc-300 to-zinc-500 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.8)] border border-zinc-400 peer-checked:translate-x-7 peer-checked:from-indigo-400 peer-checked:to-indigo-600 peer-checked:border-indigo-300 transition-all duration-300"></div>
</label>
<span className="text-sm font-mono text-zinc-500 tracking-widest uppercase transition-colors" id="label-monthly">Monthly</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto scroll-animate">

<div className="tactile-base rounded-3xl p-8 border border-zinc-800/80 flex flex-col relative overflow-hidden group transition-all duration-300 hover:border-zinc-700 hover:shadow-2xl">
<div className="mb-8">
<h3 className="text-lg font-normal text-zinc-300 flex items-center gap-2">
<iconify-icon icon="solar:server-square-linear" width="20"></iconify-icon>
                Shared Core
              </h3>
<div className="mt-4 flex items-baseline text-5xl font-normal tracking-tight text-zinc-100 transition-all duration-300">
<span id="price-shared-amount">$0.85</span>
<span className="ml-1 text-sm font-mono text-zinc-500 tracking-widest" id="price-shared-period">/ HR</span>
</div>
<p className="mt-4 text-sm text-zinc-400">
                Fractional access to A100/H100 clusters. Best for bursty inference workloads.
              </p>
</div>
<ul className="flex-1 space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-zinc-500 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Auto-scaling multi-tenant GPUs
              </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-zinc-500 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> NVMe Vector Caching (100GB)
              </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-zinc-500 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Standard Network SLA
              </li>
</ul>
<a className="btn-physical-dark w-full text-center py-3 rounded-xl text-sm font-normal text-zinc-300 mt-auto" href="#">
              Initialize Shared
            </a>
</div>

<div className="tactile-glass rounded-3xl p-8 border border-indigo-500/30 flex flex-col relative overflow-hidden group shadow-[0_0_40px_rgba(99,102,241,0.1)] transition-all duration-300 hover:border-indigo-500/50 hover:shadow-[0_0_50px_rgba(99,102,241,0.2)]">
<div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-bl-full blur-3xl group-hover:bg-indigo-500/20 transition-colors duration-500"></div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
<div className="mb-8 relative z-10">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded border border-indigo-900/50 bg-indigo-950/30 mb-4 shadow-inner">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1] animate-pulse"></div>
<span className="text-[10px] text-indigo-400 uppercase tracking-widest font-mono">Maximum Power</span>
</div>
<h3 className="text-lg font-normal text-zinc-100 flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:cpu-bold" width="20"></iconify-icon>
                Dedicated Metal
              </h3>
<div className="mt-4 flex items-baseline text-5xl font-normal tracking-tight text-white drop-shadow-lg transition-all duration-300">
<span id="price-dedicated-amount">$4.20</span>
<span className="ml-1 text-sm font-mono text-zinc-400 tracking-widest" id="price-dedicated-period">/ HR</span>
</div>
<p className="mt-4 text-sm text-zinc-400">
                Exclusive access to unmetered hardware. No noisy neighbors, total physical isolation for peak inference.
              </p>
</div>
<ul className="flex-1 space-y-4 mb-8 relative z-10">
<li className="flex items-start gap-3 text-sm text-zinc-200">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-indigo-400 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Bare-metal H100 SXM5 allocation
              </li>
<li className="flex items-start gap-3 text-sm text-zinc-200">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-indigo-400 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Terabyte-scale local NVMe Cache
              </li>
<li className="flex items-start gap-3 text-sm text-zinc-200">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-indigo-400 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Secure Enclave Processing enabled
              </li>
</ul>
<a className="btn-physical-light w-full text-center py-3 rounded-xl text-sm font-normal text-zinc-900 mt-auto relative z-10" href="#">
              Deploy Dedicated Core
            </a>
</div>
</div>
</div>

</section>

<footer className="relative border-t border-zinc-900 bg-[#050505] pt-24 pb-12 overflow-hidden">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-indigo-500/5 blur-[100px] pointer-events-none"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center scroll-animate">
<div className="w-16 h-16 rounded-2xl tactile-base mx-auto flex items-center justify-center border border-zinc-800 shadow-[0_10px_20px_rgba(0,0,0,0.5)] mb-8">
<div className="w-4 h-4 rounded-full bg-zinc-300 shadow-[0_0_15px_rgba(255,255,255,0.5)] flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
</div>
</div>
<h2 className="text-4xl font-normal tracking-tight text-zinc-100 sm:text-5xl">
          Initialize your first node.
        </h2>
<p className="mt-6 text-lg text-zinc-400 max-w-xl mx-auto">
          Join leading AI teams deploying massive models on bare-metal infrastructure. Zero cold starts. Zero operational bloat.
        </p>
<div className="mt-10 flex items-center justify-center gap-4">
<a className="btn-physical-light rounded-full px-8 py-3 text-base font-normal flex items-center gap-2" href="#">
            Start Deployment
            <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="btn-physical-dark rounded-full px-8 py-3 text-base font-normal text-zinc-300 hover:text-white transition-colors" href="#">
            Read Docs
          </a>
</div>
</div>

<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-32 pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
<div className="text-sm text-zinc-600 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
          All systems operational
        </div>
<div className="flex gap-6 text-sm text-zinc-500 font-normal">
<a className="hover:text-zinc-300 transition-colors" href="#">Twitter</a>
<a className="hover:text-zinc-300 transition-colors" href="#">GitHub</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Discord</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Status</a>
</div>
<div className="text-sm text-zinc-600">
          © 2024 Nexus Architecture.
        </div>
</div>
</footer>



    </>
  );
}
