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



tailwind.config = {
darkMode: "class",
theme: {
extend: {
fontFamily: { sans: ["Inter", "sans-serif"] },
colors: {
bgDark: "#020202",
surfaceDark: "#0a0a0a",
borderDark: "rgba(255, 255, 255, 0.06)",
textDark: "#EAEAEA",
bgLight: "#F3F4F6",
surfaceLight: "#FFFFFF",
borderLight: "rgba(0, 0, 0, 0.08)",
textLight: "#1F2937",
accent: "#10B981",
accentGlow: "#34D399",
},
animation: {
beam: "beam 3s linear infinite",
"pulse-slow":
"pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
},
keyframes: {
beam: {
"0%": { strokeDashoffset: "1000" },
"100%": { strokeDashoffset: "0" },
},
},
},
},
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Bento spotlight + micro-tilt (safe, subtle)
        document.querySelectorAll(".bento-card").forEach((card) => {
          card.addEventListener("pointermove", (e) => {
            const r = card.getBoundingClientRect();
            const x = ((e.clientX - r.left) / r.width) * 100;
            const y = ((e.clientY - r.top) / r.height) * 100;
            card.style.setProperty("--sx", x + "%");
            card.style.setProperty("--sy", y + "%");

            const dx = (e.clientX - (r.left + r.width/2)) / r.width;
            const dy = (e.clientY - (r.top + r.height/2)) / r.height;
            const rx = (-dy * 4).toFixed(2);
            const ry = (dx * 6).toFixed(2);
            card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-1px)`;
          });
          card.addEventListener("pointerleave", () => {
            card.style.transform = "";
          });
        });

        // Magnetic testimonials (gentle)
        document.querySelectorAll(".mag-card").forEach((card) => {
          card.addEventListener("pointermove", (e) => {
            const r = card.getBoundingClientRect();
            const dx = (e.clientX - (r.left + r.width/2)) / r.width;
            const dy = (e.clientY - (r.top + r.height/2)) / r.height;
            card.style.transform = `translate(${dx*10}px, ${dy*10}px)`;
          });
          card.addEventListener("pointerleave", () => {
            card.style.transform = "translate(0px, 0px)";
          });
        });
      


      const themeToggle = document.getElementById("theme-toggle");
        const html = document.documentElement;
        let isDark = true;

        themeToggle.addEventListener("click", () => {
          isDark = !isDark;
          html.classList.toggle("dark");
          update3DTheme(isDark);
        });

        const loaderScreen = document.getElementById("loading-screen");
        const loaderFill = document.getElementById("loader-fill");
        const loaderText = document.getElementById("loader-text");
        const canvasContainer = document.getElementById("canvas-container");

        let progress = 0;
        const loadInterval = setInterval(() => {
          progress += Math.random() * 6;
          if (progress >= 100) {
            progress = 100;
            clearInterval(loadInterval);

            gsap.to(loaderScreen, {
              opacity: 0,
              duration: 1,
              ease: "power2.out",
              onComplete: () => (loaderScreen.style.display = "none"),
            });

            canvasContainer.style.opacity = "1";
            init3D();
          }
          loaderFill.style.width = `${progress}%`;
          loaderText.innerText = `${Math.floor(progress)}%`;
        }, 50);

        let scene, camera, renderer, phoneGroup, screenMesh, envLight, dirLight, particles;

        function init3D() {
          scene = new THREE.Scene();
          // UPDATED: slightly lighter fog so glow reads better
          scene.fog = new THREE.FogExp2(0x020202, 0.0016);

          camera = new THREE.PerspectiveCamera(
            30,
            window.innerWidth / window.innerHeight,
            0.1,
            100
          );
          camera.position.set(0, 0, 16);

          renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
          renderer.setSize(window.innerWidth, window.innerHeight);
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
          renderer.shadowMap.enabled = true;
          renderer.shadowMap.type = THREE.PCFSoftShadowMap;
          renderer.toneMapping = THREE.ACESFilmicToneMapping;
          renderer.toneMappingExposure = 1.1;
          renderer.outputEncoding = THREE.sRGBEncoding;
          document.getElementById("canvas-container").appendChild(renderer.domElement);

          phoneGroup = new THREE.Group();
          scene.add(phoneGroup);

          // UPDATED: soft stage glow behind phone (improves iPhone background)
          function makeRadialTexture(stops) {
            const c = document.createElement("canvas");
            c.width = 512;
            c.height = 512;
            const g = c.getContext("2d");
            const grd = g.createRadialGradient(256, 256, 0, 256, 256, 256);
            stops.forEach((s) => grd.addColorStop(s[0], s[1]));
            g.fillStyle = grd;
            g.fillRect(0, 0, 512, 512);
            return new THREE.CanvasTexture(c);
          }

          const glowTex = makeRadialTexture([
            [0.0, "rgba(16,185,129,0.22)"],
            [0.28, "rgba(16,185,129,0.10)"],
            [0.55, "rgba(255,255,255,0.06)"],
            [1.0, "rgba(0,0,0,0.0)"],
          ]);

          const glowMat = new THREE.SpriteMaterial({
            map: glowTex,
            transparent: true,
            depthWrite: false,
          });
          const glowSprite = new THREE.Sprite(glowMat);
          glowSprite.scale.set(18, 18, 1);
          glowSprite.position.set(0, 0, -6);
          scene.add(glowSprite);

          const width = 3.2,
            height = 6.8,
            depth = 0.35,
            radius = 0.6;
          const shape = new THREE.Shape();
          shape.moveTo(-width / 2 + radius, -height / 2);
          shape.lineTo(width / 2 - radius, -height / 2);
          shape.quadraticCurveTo(
            width / 2,
            -height / 2,
            width / 2,
            -height / 2 + radius
          );
          shape.lineTo(width / 2, height / 2 - radius);
          shape.quadraticCurveTo(
            width / 2,
            height / 2,
            width / 2 - radius,
            height / 2
          );
          shape.lineTo(-width / 2 + radius, height / 2);
          shape.quadraticCurveTo(
            -width / 2,
            height / 2,
            -width / 2,
            height / 2 - radius
          );
          shape.lineTo(-width / 2, -height / 2 + radius);
          shape.quadraticCurveTo(
            -width / 2,
            -height / 2,
            -width / 2 + radius,
            -height / 2
          );

          const extrudeSettings = {
            depth: depth,
            bevelEnabled: true,
            bevelSegments: 6,
            bevelSize: 0.04,
            bevelThickness: 0.04,
          };
          const bodyGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
          bodyGeo.center();

          const bodyMat = new THREE.MeshStandardMaterial({
            color: 0x0a0a0a,
            metalness: 0.98, // UPDATED: catches light better
            roughness: 0.1,  // UPDATED: cleaner highlights
            envMapIntensity: 2.0,
          });
          const phoneBody = new THREE.Mesh(bodyGeo, bodyMat);
          phoneBody.castShadow = true;
          phoneBody.receiveShadow = true;
          phoneGroup.add(phoneBody);

          const canvas = document.createElement("canvas");
          canvas.width = 512;
          canvas.height = 1024;
          const ctx = canvas.getContext("2d");
          const grad = ctx.createRadialGradient(256, 512, 0, 256, 512, 512);
          grad.addColorStop(0, "#030a06");
          grad.addColorStop(1, "#000000");
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, 512, 1024);
          ctx.shadowBlur = 60;
          ctx.shadowColor = "#10B981";
          ctx.strokeStyle = "#10B981";
          ctx.lineWidth = 8;
          ctx.beginPath();
          ctx.arc(256, 480, 80, 0, Math.PI * 2);
          ctx.stroke();
          ctx.shadowBlur = 30;
          ctx.fillStyle = "rgba(16, 185, 129, 0.04)";
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.font = "500 16px Inter, sans-serif";
          ctx.fillStyle = "rgba(255,255,255,0.5)";
          ctx.textAlign = "center";
          ctx.fillText("Aether", 256, 600);
          ctx.font = "300 11px Inter, sans-serif";
          ctx.fillStyle = "rgba(255,255,255,0.25)";
          ctx.fillText("Digital Matter Synthesis", 256, 625);

          const tex = new THREE.CanvasTexture(canvas);
          const screenGeo = new THREE.PlaneGeometry(width - 0.2, height - 0.2);
          const screenMat = new THREE.MeshStandardMaterial({
            map: tex,
            emissive: 0xffffff,
            emissiveMap: tex,
            emissiveIntensity: 0.6,
            roughness: 0.1,
            metalness: 0.3,
          });
          screenMesh = new THREE.Mesh(screenGeo, screenMat);
          screenMesh.position.z = depth / 2 + 0.05;
          phoneGroup.add(screenMesh);

          envLight = new THREE.AmbientLight(0x404040, 0.6);
          scene.add(envLight);

          dirLight = new THREE.DirectionalLight(0xffffff, 2.2); // UPDATED: stronger key light
          dirLight.position.set(4, 6, 10);
          dirLight.castShadow = true;
          scene.add(dirLight);

          const fillLight = new THREE.DirectionalLight(0x4488ff, 0.3);
          fillLight.position.set(-4, 2, 5);
          scene.add(fillLight);

          const rimLight = new THREE.SpotLight(0x10b981, 3);
          rimLight.position.set(-3, 0, -6);
          rimLight.lookAt(0, 0, 0);
          scene.add(rimLight);

          const rimLight2 = new THREE.SpotLight(0x3366ff, 1.5);
          rimLight2.position.set(3, 2, -4);
          rimLight2.lookAt(0, 0, 0);
          scene.add(rimLight2);

          const particleCount = 100;
          const particleGeo = new THREE.BufferGeometry();
          const positions = new Float32Array(particleCount * 3);
          for (let i = 0; i < particleCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 35;
          }
          particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
          const particleMat = new THREE.PointsMaterial({
            color: 0x10b981,
            size: 0.02,
            transparent: true,
            opacity: 0.15,
            sizeAttenuation: true,
          });
          particles = new THREE.Points(particleGeo, particleMat);
          scene.add(particles);

          const clock = new THREE.Clock();
          function animate() {
            requestAnimationFrame(animate);
            const t = clock.getElapsedTime();
            phoneGroup.position.y += Math.sin(t * 0.5) * 0.0005;
            if (particles) {
              particles.rotation.y = t * 0.015;
              particles.rotation.x = t * 0.005;
            }
            renderer.render(scene, camera);
          }
          animate();

          window.addEventListener("resize", () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
          });

          gsap.registerPlugin(ScrollTrigger);

          // UPDATED: stronger camera pan + zoom, full 360 spin
          const camProxy = { fov: camera.fov };

          const masterTl = gsap.timeline({
            scrollTrigger: {
              trigger: "body",
              start: "top top",
              end: "+=420%",
              scrub: 1.25,
              pin: false,
            },
          });

          masterTl.to("#hero-atmosphere", { opacity: 1, duration: 1 }, 0);
          masterTl.to(
            "#hero-content",
            { opacity: 0, scale: 0.95, pointerEvents: "none", duration: 1 },
            0
          );

          // Pose 1
          masterTl.to(phoneGroup.rotation, { x: 0.15, y: 0.9, z: 0.06, duration: 2.2 }, 0);
          masterTl.to(phoneGroup.position, { x: 1.25, y: 0.0, z: 1.8, duration: 2.2 }, 0);

          masterTl.to(camera.position, { x: 0.35, y: 0.15, z: 14.2, duration: 2.2 }, 0);
          masterTl.to(
            camProxy,
            {
              fov: 26,
              duration: 2.2,
              onUpdate: () => {
                camera.fov = camProxy.fov;
                camera.updateProjectionMatrix();
              },
            },
            0
          );

          masterTl.to("#popover-1", { opacity: 1, y: 0, scale: 1, duration: 0.8 }, 0.9);
          masterTl.to("#popover-1", { opacity: 0, y: -20, duration: 0.7 }, 2.4);

          // Pose 2
          masterTl.to(phoneGroup.rotation, { x: -0.05, y: 2.4, z: -0.04, duration: 2.6 }, 2.6);
          masterTl.to(phoneGroup.position, { x: -1.3, y: 0.35, z: 2.6, duration: 2.6 }, 2.6);

          masterTl.to(camera.position, { x: -0.55, y: 0.25, z: 12.4, duration: 2.6 }, 2.6);
          masterTl.to(
            camProxy,
            {
              fov: 24,
              duration: 2.6,
              onUpdate: () => {
                camera.fov = camProxy.fov;
                camera.updateProjectionMatrix();
              },
            },
            2.6
          );

          masterTl.to("#popover-2", { opacity: 1, y: 0, scale: 1, duration: 0.8 }, 3.4);
          masterTl.to("#popover-2", { opacity: 0, y: -20, duration: 0.7 }, 4.9);

          // Pose 3 (FULL 360)
          masterTl.to(
            phoneGroup.rotation,
            { x: 0.35, y: Math.PI * 2, z: 0.0, duration: 3.2 },
            5.1
          );
          masterTl.to(phoneGroup.position, { x: 0.0, y: 1.15, z: 0.6, duration: 3.2 }, 5.1);

          masterTl.to(camera.position, { x: 0.0, y: 0.55, z: 10.6, duration: 3.2 }, 5.1);
          masterTl.to(
            camProxy,
            {
              fov: 22,
              duration: 3.2,
              onUpdate: () => {
                camera.fov = camProxy.fov;
                camera.updateProjectionMatrix();
              },
            },
            5.1
          );

          masterTl.to("#popover-3", { opacity: 1, y: 0, scale: 1, duration: 0.8 }, 6.0);
          masterTl.to("#popover-3", { opacity: 0, y: -20, duration: 0.7 }, 7.6);

          masterTl.to(phoneGroup.position, { y: 10, duration: 2 }, 8.2);
          masterTl.to("#hero-atmosphere", { opacity: 0, duration: 2 }, 8.2);
          masterTl.to("#canvas-container", { opacity: 0, duration: 2 }, 8.7);
        }

        function update3DTheme(dark) {
          if (!scene) return;
          const darkBg = new THREE.Color(0x020202);
          const lightBg = new THREE.Color(0xf3f4f6);
          const targetBg = dark ? darkBg : lightBg;

          if (scene.fog)
            gsap.to(scene.fog.color, {
              r: targetBg.r,
              g: targetBg.g,
              b: targetBg.b,
              duration: 0.7,
            });

          if (dark) {
            gsap.to(envLight, { intensity: 0.6, duration: 0.7 });
            gsap.to(dirLight, { intensity: 2.2, duration: 0.7 });
            gsap.to(screenMesh.material, { emissiveIntensity: 0.6, duration: 0.7 });
            if (particles) gsap.to(particles.material, { opacity: 0.15, duration: 0.7 });
          } else {
            gsap.to(envLight, { intensity: 2.0, duration: 0.7 });
            gsap.to(dirLight, { intensity: 1.0, duration: 0.7 });
            gsap.to(screenMesh.material, { emissiveIntensity: 0.15, duration: 0.7 });
            if (particles) gsap.to(particles.material, { opacity: 0.05, duration: 0.7 });
          }
        }

        const karaokeText = document.getElementById("kakaoke-text");
        if (karaokeText) {
          const words = karaokeText.innerText.split(" ");
          karaokeText.innerHTML = words
            .map(
              (word) =>
                `<span class="karaoke-word transition-all duration-500 ease-out opacity-20">${word}</span> `
            )
            .join("");
          const spans = karaokeText.querySelectorAll("span");
          window.addEventListener("scroll", () => {
            const rect = karaokeText.getBoundingClientRect();
            const progress = Math.max(
              0,
              Math.min(
                1,
                (window.innerHeight * 0.8 - rect.top) / (window.innerHeight * 0.5)
              )
            );
            const activeIndex = Math.floor(progress * spans.length);
            spans.forEach((span, i) => {
              if (i <= activeIndex) {
                span.style.opacity = "1";
                span.style.color = isDark ? "#ffffff" : "#111827";
              } else {
                span.style.opacity = "0.2";
                span.style.color = "";
              }
            });
          });
        }

        const revealElements = document.querySelectorAll(".reveal");
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) entry.target.classList.add("active");
            });
          },
          { threshold: 0.1 }
        );
        revealElements.forEach((el) => observer.observe(el));
    


      (function(){
        // Wait for main init to complete
        var ctaCheckInterval = setInterval(function(){
          if(typeof scene === 'undefined' || !scene || typeof gsap === 'undefined') return;
          clearInterval(ctaCheckInterval);
          initCTAScene();
        }, 200);

        function initCTAScene(){
          var ctaContainer = document.getElementById('cta-canvas-container');
          if(!ctaContainer) return;

          // Create a separate renderer for CTA
          var ctaRenderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
          ctaRenderer.setSize(window.innerWidth, window.innerHeight);
          ctaRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
          ctaRenderer.toneMapping = THREE.ACESFilmicToneMapping;
          ctaRenderer.toneMappingExposure = 1.1;
          ctaRenderer.outputEncoding = THREE.sRGBEncoding;
          ctaContainer.appendChild(ctaRenderer.domElement);
          ctaRenderer.domElement.style.width = '100%';
          ctaRenderer.domElement.style.height = '100%';

          // Create CTA scene
          var ctaScene = new THREE.Scene();
          ctaScene.fog = new THREE.FogExp2(0x020202, 0.0018);

          var ctaCamera = new THREE.PerspectiveCamera(28, window.innerWidth/window.innerHeight, 0.1, 100);
          ctaCamera.position.set(0, 0, 14);

          // Rebuild same iPhone geometry
          var w=3.2, h=6.8, d=0.35, r=0.6;
          var shape = new THREE.Shape();
          shape.moveTo(-w/2+r, -h/2);
          shape.lineTo(w/2-r, -h/2);
          shape.quadraticCurveTo(w/2, -h/2, w/2, -h/2+r);
          shape.lineTo(w/2, h/2-r);
          shape.quadraticCurveTo(w/2, h/2, w/2-r, h/2);
          shape.lineTo(-w/2+r, h/2);
          shape.quadraticCurveTo(-w/2, h/2, -w/2, h/2-r);
          shape.lineTo(-w/2, -h/2+r);
          shape.quadraticCurveTo(-w/2, -h/2, -w/2+r, -h/2);

          var bodyGeo = new THREE.ExtrudeGeometry(shape, {depth:d, bevelEnabled:true, bevelSegments:6, bevelSize:0.04, bevelThickness:0.04});
          bodyGeo.center();

          var bodyMat = new THREE.MeshStandardMaterial({color:0x0a0a0a, metalness:0.98, roughness:0.1, envMapIntensity:2.0});
          var ctaPhone = new THREE.Mesh(bodyGeo, bodyMat);
          ctaPhone.castShadow = true;

          // Screen
          var canvas = document.createElement('canvas');
          canvas.width = 512; canvas.height = 1024;
          var ctx = canvas.getContext('2d');
          var grad = ctx.createRadialGradient(256,512,0,256,512,512);
          grad.addColorStop(0,'#030a06'); grad.addColorStop(1,'#000000');
          ctx.fillStyle = grad; ctx.fillRect(0,0,512,1024);
          ctx.shadowBlur=60; ctx.shadowColor='#10B981'; ctx.strokeStyle='#10B981'; ctx.lineWidth=8;
          ctx.beginPath(); ctx.arc(256,480,80,0,Math.PI*2); ctx.stroke();
          ctx.shadowBlur=30; ctx.fillStyle='rgba(16,185,129,0.04)'; ctx.fill();
          ctx.shadowBlur=0; ctx.font='500 16px Inter,sans-serif'; ctx.fillStyle='rgba(255,255,255,0.5)'; ctx.textAlign='center';
          ctx.fillText('Aether',256,600);
          ctx.font='300 11px Inter,sans-serif'; ctx.fillStyle='rgba(255,255,255,0.25)';
          ctx.fillText('Digital Matter Synthesis',256,625);

          var tex = new THREE.CanvasTexture(canvas);
          var screenGeo = new THREE.PlaneGeometry(w-0.2, h-0.2);
          var screenMat = new THREE.MeshStandardMaterial({map:tex, emissive:0xffffff, emissiveMap:tex, emissiveIntensity:0.6, roughness:0.1, metalness:0.3});
          var ctaScreen = new THREE.Mesh(screenGeo, screenMat);
          ctaScreen.position.z = d/2 + 0.05;

          var ctaPhoneGroup = new THREE.Group();
          ctaPhoneGroup.add(ctaPhone);
          ctaPhoneGroup.add(ctaScreen);
          ctaPhoneGroup.position.set(0, 1.5, 0);
          ctaPhoneGroup.scale.set(0.7, 0.7, 0.7);
          ctaScene.add(ctaPhoneGroup);

          // Glow sprite
          var gc = document.createElement('canvas'); gc.width=512; gc.height=512;
          var gg = gc.getContext('2d');
          var grd = gg.createRadialGradient(256,256,0,256,256,256);
          grd.addColorStop(0,'rgba(16,185,129,0.22)'); grd.addColorStop(0.28,'rgba(16,185,129,0.10)');
          grd.addColorStop(0.55,'rgba(255,255,255,0.06)'); grd.addColorStop(1,'rgba(0,0,0,0)');
          gg.fillStyle=grd; gg.fillRect(0,0,512,512);
          var glowTex = new THREE.CanvasTexture(gc);
          var glowSprite = new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex,transparent:true,depthWrite:false}));
          glowSprite.scale.set(16,16,1); glowSprite.position.set(0,0,-5);
          ctaScene.add(glowSprite);

          // Lights matching hero
          ctaScene.add(new THREE.AmbientLight(0x404040, 0.6));
          var dLight = new THREE.DirectionalLight(0xffffff, 2.2);
          dLight.position.set(4,6,10); ctaScene.add(dLight);
          var fLight = new THREE.DirectionalLight(0x4488ff, 0.3);
          fLight.position.set(-4,2,5); ctaScene.add(fLight);
          var rLight = new THREE.SpotLight(0x10b981, 3);
          rLight.position.set(-3,0,-6); rLight.lookAt(0,0,0); ctaScene.add(rLight);
          var rLight2 = new THREE.SpotLight(0x3366ff, 1.5);
          rLight2.position.set(3,2,-4); rLight2.lookAt(0,0,0); ctaScene.add(rLight2);

          // Particles
          var pCount = 60, pGeo = new THREE.BufferGeometry(), pos = new Float32Array(pCount*3);
          for(var i=0;i<pCount*3;i++) pos[i]=(Math.random()-0.5)*30;
          pGeo.setAttribute('position', new THREE.BufferAttribute(pos,3));
          var ctaParticles = new THREE.Points(pGeo, new THREE.PointsMaterial({color:0x10b981,size:0.02,transparent:true,opacity:0.12,sizeAttenuation:true}));
          ctaScene.add(ctaParticles);

          // Animation state
          var ctaAnimating = false;
          var ctaClock = new THREE.Clock();
          var targetRotY = 0;
          var currentRotY = 0;
          var targetRotX = 0.15;
          var currentRotX = 0.15;

          function ctaAnimate(){
            if(!ctaAnimating) return;
            requestAnimationFrame(ctaAnimate);
            var t = ctaClock.getElapsedTime();

            // Smooth inertia
            targetRotY += 0.004;
            currentRotY += (targetRotY - currentRotY) * 0.04;
            currentRotX += (targetRotX - currentRotX) * 0.04;

            ctaPhoneGroup.rotation.y = currentRotY;
            ctaPhoneGroup.rotation.x = currentRotX + Math.sin(t*0.3)*0.03;
            ctaPhoneGroup.position.y = 1.5 + Math.sin(t*0.5)*0.08;

            if(ctaParticles){
              ctaParticles.rotation.y = t*0.01;
              ctaParticles.rotation.x = t*0.004;
            }

            ctaRenderer.render(ctaScene, ctaCamera);
          }

          // Intersection observer to start/stop rendering
          var ctaSection = document.getElementById('cta');
          var ctaIO = new IntersectionObserver(function(entries){
            entries.forEach(function(entry){
              if(entry.isIntersecting && !ctaAnimating){
                ctaAnimating = true;
                ctaClock.start();
                ctaAnimate();
              } else if(!entry.isIntersecting && ctaAnimating){
                ctaAnimating = false;
              }
            });
          }, {threshold:0.05});
          ctaIO.observe(ctaSection);

          // Resize
          window.addEventListener('resize', function(){
            ctaCamera.aspect = window.innerWidth / window.innerHeight;
            ctaCamera.updateProjectionMatrix();
            ctaRenderer.setSize(window.innerWidth, window.innerHeight);
          });

          // GSAP ScrollTrigger for CTA cinematic sequence
          var ctaTl = gsap.timeline({
            scrollTrigger:{
              trigger: '.cta-scroll-wrapper',
              start: 'top top',
              end: 'bottom bottom',
              scrub: 1.2,
              pin: false
            }
          });

          // 0-20%: fog appears
          ctaTl.to('#cta-fog', {opacity:1, duration:0.8}, 0);

          // 20-50%: doors open
          ctaTl.to('#cta-door-left', {x:'-105%', duration:1.5, ease:'power3.out'}, 0.8);
          ctaTl.to('#cta-door-right', {x:'105%', duration:1.5, ease:'power3.out'}, 0.8);

          // Light sweep across door panels as they open
          ctaTl.to('#cta-sweep-left', {opacity:0.8, x:'200%', duration:1.2}, 0.9);
          ctaTl.to('#cta-sweep-right', {opacity:0.8, x:'-200%', duration:1.2}, 0.9);

          // 35%: iPhone appears
          ctaTl.to('#cta-canvas-container', {opacity:1, duration:0.8}, 1.4);

          // iPhone scale grows + settles
          ctaTl.to(ctaPhoneGroup.scale, {x:1, y:1, z:1, duration:1.5, ease:'power2.out'}, 1.4);
          ctaTl.to(ctaPhoneGroup.position, {y:0.8, duration:1.5, ease:'power2.out'}, 1.4);

          // 70%: Device stabilizes, content fades in
          ctaTl.to('#cta-canvas-container', {opacity:0.35, duration:1}, 2.8);
          ctaTl.to(ctaPhoneGroup.position, {y:2.5, z:-3, duration:1.2}, 2.8);

          ctaTl.to('#cta-content', {
            opacity:1,
            y:0,
            duration:1,
            ease:'power2.out',
            onStart: function(){ document.getElementById('cta-content').style.pointerEvents='auto'; }
          }, 3.0);

          // Reduce motion on mobile
          if(window.matchMedia('(max-width:768px)').matches){
            targetRotX = 0.08;
          }
        }
      })();
    


        gsap.registerPlugin(ScrollTrigger);

      const counters = document.querySelectorAll(".counter");

      counters.forEach((el) => {

        const target = parseFloat(el.dataset.counter);
        const suffix = el.dataset.suffix || "";

        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: target,
            duration: 1.6,
            ease: "power2.out",
            snap: { innerText: 0.01 },
            scrollTrigger: {
              trigger: "#stats",
              start: "top 80%",
              once: true,
            },
            onUpdate: function () {
              let value = parseFloat(el.innerText);
              el.innerText = value.toFixed(
                target % 1 !== 0 ? 2 : 0
              ) + suffix;
            }
          }
        );

      });
    


      (function(){
        // Wait for GSAP
        var waitForGsap = setInterval(function(){
          if(typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined'){
            clearInterval(waitForGsap);
            initTimeline();
          }
        }, 100);

        function initTimeline() {
          const track = document.getElementById('timeline-track');
          const fill = document.getElementById('timeline-fill');
          const steps = document.querySelectorAll('.timeline-step');

          if(!track || !fill) return;

          // Animate the central filling line
          gsap.to(fill, {
            height: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: track,
              start: 'top 60%', // Starts filling when track top is near center
              end: 'bottom 60%',
              scrub: 0.5
            }
          });

          // Animate each step as the "liquid" passes it
          steps.forEach(step => {
            gsap.to(step, {
              opacity: 1,
              filter: 'blur(0px)',
              scale: 1,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: step,
                start: 'top 55%', // Trigger slightly after the line passes the node
                end: 'bottom 55%',
                toggleActions: 'play reverse play reverse',
                toggleClass: { targets: step, className: 'timeline-step-active' }
              }
            });
          });
        }
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
      

<div className="" id="loading-screen">
<div className="text-[10px] uppercase dark:text-gray-500 font-semibold text-gray-500 tracking-[0.2em] mb-3">
        Initializing
      </div>
<div className="w-40 h-[2px] bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-accent transition-all duration-100 ease-out rounded-full" id="loader-fill" style={{width: '0%'}}></div>
</div>
<div className="mt-3 text-[10px] font-mono opacity-30" id="loader-text">
        0%
      </div>
</div>

<nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#020202]/70 backdrop-blur-2xl transition-colors duration-700 border-b border-neutral-200 dark:border-white/[0.04]">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="w-5 h-5 bg-accent rounded-md flex items-center justify-center" style={{boxShadow: '0 0 12px rgba(16, 185, 129, 0.3)'}}>
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
</div>
<span className="font-semibold tracking-tight text-neutral-900 dark:text-white text-sm">
            Aether
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-neutral-500 dark:text-neutral-400">
<a className="hover:text-neutral-900 dark:hover:text-white transition-colors duration-300" href="#features">
            Protocol
          </a>
<a className="hover:text-neutral-900 dark:hover:text-white transition-colors duration-300" href="#method">
            Network
          </a>
<a className="hover:text-neutral-900 dark:hover:text-white transition-colors duration-300" href="#pricing">
            Pricing
          </a>
</div>
<div className="flex items-center gap-3">
<button className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors duration-300 text-neutral-500 dark:text-neutral-500" id="theme-toggle">
<svg className="w-4 h-4 hidden dark:block" fill="none" id="icon-sun" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<svg className="w-4 h-4 block dark:hidden" fill="none" id="icon-moon" stroke="currentColor" viewbox="0 0 24 24">
<path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
<a className="text-[13px] font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300" href="#">
            Log in
          </a>
<button className="px-5 py-2 text-[13px] font-semibold bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full hover:scale-[1.02] transition-all duration-300 shadow-sm">
            Connect
          </button>
</div>
</div>
</nav>

<div id="hero-atmosphere">
<div className="atmosphere-fog"></div>
</div>
<div id="canvas-container"></div>
<div id="story-popovers">
<div className="popover-card" id="popover-1">
<div className="popover-metric">Architecture</div>
<div className="popover-title">Neural Lattice</div>
<div className="popover-text">Self-healing mesh topology.</div>
</div>
<div className="popover-card" id="popover-2">
<div className="popover-metric">Performance</div>
<div className="popover-title">Zero Latency</div>
<div className="popover-text">Real-time edge synchronization.</div>
</div>
<div className="popover-card" id="popover-3">
<div className="popover-metric">Security</div>
<div className="popover-title">Quantum Proof</div>
<div className="popover-text">Post-encryption standards.</div>
</div>
</div>

<div id="hero-content">
<div className="hero-glow"></div>
<div className="max-w-3xl mx-auto text-center px-6 relative" style={{marginTop: '-8vh'}}>
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/15 bg-accent/5 backdrop-blur-sm mb-10 interactive-element cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow"></span>
<span className="text-[11px] font-semibold text-accent/90 uppercase tracking-[0.15em]">
            System Online
          </span>
</div>
<h1 className="text-5xl md:text-[5.5rem] font-semibold tracking-tighter mb-7 leading-[1.05] text-neutral-900 dark:text-white transition-colors duration-700">
          Digital Matter
          <br/>
<span className="text-gradient-green">Synthesis.</span>
</h1>
<p className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 max-w-md mx-auto mb-12 leading-relaxed transition-colors duration-700 font-light">
          The convergence of data and aesthetics. Bridging the gap between
          simulation and reality.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 interactive-element">
<button className="btn-primary h-11 px-7 bg-accent hover:bg-accentGlow text-white text-[13px] font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2" style={{boxShadow: '0 0 30px rgba(16, 185, 129, 0.25), 0 1px 3px rgba(0,0,0,0.2)'}}>
            Start Simulation
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="h-11 px-7 rounded-full text-[13px] font-medium flex items-center justify-center transition-all duration-300 bg-white/70 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-neutral-200 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_18px_60px_rgba(0,0,0,0.55)] hover:bg-white/80 dark:hover:bg-white/8 hover:-translate-y-[1px] hover:shadow-[0_18px_50px_rgba(0,0,0,0.10)] dark:hover:shadow-[0_28px_90px_rgba(0,0,0,0.65)] focus:outline-none focus:ring-2 focus:ring-emerald-400/40 focus:ring-offset-0">
<span className="pointer-events-none relative">
              Documentation
              <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.55),transparent_60%)] opacity-60"></span>
</span>
</button>
</div>
</div>
</div>

<div className="" style={{height: '300vh', position: 'relative', zIndex: '1'}}></div>

<div className="relative z-20 bg-gray-50 dark:bg-[#020202] transition-colors duration-700">

<section className="py-40 px-6">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl md:text-[2.75rem] font-semibold leading-[1.4] text-left text-neutral-900 dark:text-white tracking-tight transition-colors duration-500" id="kakaoke-text">
<span className="karaoke-word transition-all duration-500 ease-out opacity-20">
              Stop
            </span>
<span className="karaoke-word transition-all duration-500 ease-out opacity-20">
              manually
            </span>
<span className="karaoke-word transition-all duration-500 ease-out opacity-20">
              connecting
            </span>
<span className="karaoke-word transition-all duration-500 ease-out opacity-20">
              nodes.
            </span>
<span className="karaoke-word transition-all duration-500 ease-out opacity-20">
              Aether's
            </span>
<span className="karaoke-word transition-all duration-500 ease-out opacity-20">
              intelligent
            </span>
<span className="karaoke-word transition-all duration-500 ease-out opacity-20">
              core
            </span>
<span className="karaoke-word transition-all duration-500 ease-out opacity-20">
              parses
            </span>
<span className="karaoke-word transition-all duration-500 ease-out opacity-20">
              your
            </span>
<span className="karaoke-word transition-all duration-500 ease-out opacity-20">
              intent,
            </span>
<span className="karaoke-word transition-all duration-500 ease-out opacity-20">
              rendering
            </span>
<span className="karaoke-word transition-all duration-500 ease-out opacity-20">
              complex
            </span>
<span className="karaoke-word transition-all duration-500 ease-out opacity-20">
              logic
            </span>
<span className="karaoke-word transition-all duration-500 ease-out opacity-20">
              gates
            </span>
<span className="karaoke-word transition-all duration-500 ease-out opacity-20">
              into
            </span>
<span className="karaoke-word transition-all duration-500 ease-out opacity-20">
              seamless,
            </span>
<span className="karaoke-word transition-all duration-500 ease-out opacity-20">
              glowing
            </span>
<span className="karaoke-word transition-all duration-500 ease-out opacity-20">
              execution
            </span>
<span className="karaoke-word transition-all duration-500 ease-out opacity-20">
              flows
            </span>
<span className="karaoke-word transition-all duration-500 ease-out opacity-20">
              without
            </span>
<span className="karaoke-word transition-all duration-500 ease-out opacity-20">
              a
            </span>
<span className="karaoke-word transition-all duration-500 ease-out opacity-20">
              single
            </span>
<span className="karaoke-word transition-all duration-500 ease-out opacity-20">
              line
            </span>
<span className="karaoke-word transition-all duration-500 ease-out opacity-20">
              of
            </span>
<span className="karaoke-word transition-all duration-500 ease-out opacity-20">
              legacy
            </span>
<span className="karaoke-word transition-all duration-500 ease-out opacity-20">
              code.
            </span>
</h2>
</div>
</section>


<section className="py-40 px-6 max-w-6xl mx-auto" id="features">
<div className="mb-20 text-center reveal">
<p className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-4 text-emerald-400/90">
            Infrastructure
          </p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5 text-gray-900 dark:text-white">
            Unified Data Protocol
          </h2>
<p className="text-gray-500 dark:text-gray-500 text-base font-light max-w-md mx-auto">
            Real-time synchronization across every node in your network.
          </p>
</div>
<style>
          .protocol-stage{background:#fafafa;border:1px solid rgba(0,0,0,0.05);border-radius:24px;position:relative;overflow:hidden}.dark .protocol-stage{background:#0a0a0a;border:1px solid rgba(255,255,255,0.08)}.protocol-scene{isolation:isolate}.node{width:240px;background:#fff;border:1px solid rgba(0,0,0,0.08);border-radius:12px;padding:20px;position:relative;box-shadow:0 4px 20px rgba(0,0,0,0.05);z-index:10;transition:transform 0.4s ease,border-color 0.3s ease}.dark .node{background:#111;border:1px solid rgba(255,255,255,0.08);box-shadow:0 4px 20px rgba(0,0,0,0.3)}.node:hover{transform:translateY(-4px);border-color:rgba(16,185,129,0.4)}.node-top{display:flex;align-items:center;gap:12px;margin-bottom:12px}.node-chip{width:32px;height:32px;background:rgba(0,0,0,0.03);border:1px solid rgba(0,0,0,0.06);border-radius:8px;display:grid;place-items:center;font-size:12px;font-weight:600;color:#111}.dark .node-chip{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:#e5e5e5}.node-title{font-weight:600;color:#111;font-size:14px}.dark .node-title{color:#fff}.node-meta{font-size:12px;color:#666;margin-top:12px}.dark .node-meta{color:#888}.node-lines{display:flex;flex-direction:column;gap:6px}.node-line{height:4px;background:#eee;border-radius:2px;width:100%}.dark .node-line{background:#222}.dest-col{display:flex;flex-direction:column;gap:24px;align-items:flex-end}.beam-base{stroke:#e5e5e5;stroke-width:2;fill:none}.dark .beam-base{stroke:#222}.beam-live{stroke:#10b981;stroke-width:2;fill:none;stroke-dasharray:6 6;animation:beamFlow 1s linear infinite;opacity:0.8}.beam-pulse{fill:#10b981}@keyframes beamFlow{from{stroke-dashoffset:12}to{stroke-dashoffset:0}}.noodle-layer{position:absolute;inset:0;pointer-events:none;z-index:1}.cards-layer{position:relative;z-index:2;display:flex;justify-content:space-between;align-items:center;height:100%;width:100%}@media(max-width:768px){.node{width:100%}.dest-col{width:100%}}
        </style>
<div className="protocol-stage relative rounded-[28px] overflow-hidden reveal">

<div className="absolute inset-0 stage-grid pointer-events-none"></div>
<div className="absolute inset-0 stage-vignette pointer-events-none"></div>
<div className="absolute inset-0 stage-scan pointer-events-none"></div>
<div className="absolute -inset-20 pointer-events-none opacity-70">
<div className="stage-bloom stage-bloom-a"></div>
<div className="stage-bloom stage-bloom-b"></div>
</div>
<div className="relative z-10 p-10 md:p-12">

<div className="protocol-scene relative h-[520px] flex items-center justify-between">

<div aria-hidden="true" className="noodle-layer absolute inset-0 pointer-events-none">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 1000 520">
<path className="beam-base" d="M210,260 C380,260 420,170 560,170 C680,170 735,170 820,170" id="p1"></path>
<path className="beam-base" d="M210,260 C380,260 420,350 560,350 C680,350 735,350 820,350" id="p2"></path>
<path className="beam-live" d="M210,260 C380,260 420,170 560,170 C680,170 735,170 820,170"></path>
<path className="beam-live" d="M210,260 C380,260 420,350 560,350 C680,350 735,350 820,350" style={{animationDelay: '-0.5s'}}></path>
<circle className="beam-pulse" r="4">
<animatemotion dur="2.5s" repeatcount="indefinite" rotate="auto">
<mpath href="#p1"></mpath>
</animatemotion>
</circle>
<circle className="beam-pulse" r="4">
<animatemotion begin="0.5s" dur="3s" repeatcount="indefinite" rotate="auto">
<mpath href="#p2"></mpath>
</animatemotion>
</circle>
</svg>
</div>

<div className="cards-layer relative z-10 w-full h-full flex items-center justify-between">
<div className="node node-source">
<div className="node-top">
<span className="node-chip node-chip-emerald">A</span>
<span className="node-title">Input Source</span>
</div>
<div className="node-lines">
<div className="node-line"></div>
<div className="node-line w-3/4"></div>
</div>
<div className="node-meta">Ingest, validate, sign</div>
</div>
<div className="dest-col">
<div className="node node-dest">
<div className="node-top">
<span className="node-chip node-chip-blue">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
<span className="node-title">Execute Logic</span>
</div>
<div className="node-lines">
<div className="node-line w-1/2"></div>
</div>
<div className="node-meta">Deterministic actions</div>
</div>
<div className="node node-dest">
<div className="node-top">
<span className="node-chip node-chip-purple">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
<span className="node-title">Output Data</span>
</div>
<div className="node-lines">
<div className="node-line w-1/2"></div>
</div>
<div className="node-meta">Stream, store, replicate</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 px-6 max-w-6xl mx-auto" id="method">
<div className="mb-20 text-center reveal">
<p className="text-[11px] font-semibold text-accent uppercase tracking-[0.2em] mb-4">
            Network
          </p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5 text-gray-900 dark:text-white">
            Global Neural Lattice
          </h2>
<p className="text-gray-500 dark:text-gray-500 text-base font-light max-w-md mx-auto">
            Distributed intelligence processing across 40 low-latency regions.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal anim-stagger-child">
<div className="p-8 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-neutral-100 dark:border-white/[0.06] hover:border-accent/50 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300">
<svg className="w-5 h-5 text-neutral-500 dark:text-gray-400 group-hover:text-accent transition-colors duration-300" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
              Zero-Latency Sync
            </h3>
<p className="text-sm text-neutral-500 dark:text-neutral-500 leading-relaxed">
              State changes propagate instantly through our edge network,
              ensuring atomic consistency.
            </p>
</div>
<div className="p-8 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-neutral-100 dark:border-white/[0.06] hover:border-accent/50 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300">
<svg className="w-5 h-5 text-neutral-500 dark:text-gray-400 group-hover:text-accent transition-colors duration-300" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
              Quantum Encryption
            </h3>
<p className="text-sm text-neutral-500 dark:text-neutral-500 leading-relaxed">
              End-to-end post-quantum cryptographic standards protecting your
              simulation logic.
            </p>
</div>
<div className="p-8 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-neutral-100 dark:border-white/[0.06] hover:border-accent/50 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300">
<svg className="w-5 h-5 text-neutral-500 dark:text-gray-400 group-hover:text-accent transition-colors duration-300" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
              Auto-Scaling Cores
            </h3>
<p className="text-sm text-neutral-500 dark:text-neutral-500 leading-relaxed">
              Dynamic resource allocation that expands instantly as your
              computational load increases.
            </p>
</div>
</div>
</section>
<section className="py-20 border-y border-neutral-200 dark:border-white/[0.04] bg-neutral-50 dark:bg-white/[0.02]" id="stats">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center anim-stagger-child">
<div className="reveal">
<div className="counter text-3xl font-bold text-neutral-900 dark:text-white mb-1" data-counter="99.99" data-suffix="%">
              0.00%
            </div>
<div className="text-xs font-medium uppercase tracking-wider text-neutral-500">
              Uptime
            </div>
</div>
<div className="reveal" style={{transitionDelay: '100ms'}}>
<div className="counter text-3xl font-bold text-neutral-900 dark:text-white mb-1" data-counter="40" data-suffix="+">
              0+
            </div>
<div className="text-xs font-medium uppercase tracking-wider text-neutral-500">
              Regions
            </div>
</div>
<div className="reveal" style={{transitionDelay: '200ms'}}>
<div className="counter text-3xl font-bold text-neutral-900 dark:text-white mb-1" data-counter="10" data-suffix="ms">
              0ms
            </div>
<div className="text-xs font-medium uppercase tracking-wider text-neutral-500">
              Latency
            </div>
</div>
<div className="reveal" style={{transitionDelay: '300ms'}}>
<div className="counter text-3xl font-bold text-neutral-900 dark:text-white mb-1" data-counter="2" data-suffix="M+">
              0M+
            </div>
<div className="text-xs font-medium uppercase tracking-wider text-neutral-500">
              Nodes
            </div>
</div>
</div>
</section>


<section className="py-32 px-6" id="bento">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-14">
<p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-400/90 mb-4">
              Capabilities
            </p>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
              A platform that feels alive
            </h2>
<p className="text-neutral-400 max-w-xl mx-auto">
              Bento structure, spotlight hover, and a soft micro-tilt that
              reacts to your cursor.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-5">
<article className="bento-card md:col-span-7 p-7 rounded-[22px] border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.04] backdrop-blur-xl relative overflow-hidden">
<div className="bento-spot"></div>
<h3 className="text-neutral-900 dark:text-white font-semibold text-xl mb-2">
                Realtime Sync Layer
              </h3>
<p className="text-neutral-500 dark:text-neutral-400 text-sm max-w-md">
                Stream state changes across nodes with deterministic ordering
                and instant replay.
              </p>
<div className="mt-6 flex items-center gap-3 text-xs text-neutral-600 dark:text-white/70">
<span className="px-3 py-1 rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5">
                  Latency aware
                </span>
<span className="px-3 py-1 rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5">
                  Conflict safe
                </span>
<span className="px-3 py-1 rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5">
                  Event-sourced
                </span>
</div>
<img alt="Realtime Sync Visual" className="mt-8 h-40 w-full object-cover rounded-xl border border-neutral-200 dark:border-white/10 opacity-80 pointer-events-none select-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d32ec840-7040-4e52-bb4e-b2a6c93e1814_1600w.jpg"/>
</article>
<article className="bento-card md:col-span-5 p-7 rounded-[22px] border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.04] backdrop-blur-xl relative overflow-hidden">
<div className="bento-spot"></div>
<h3 className="text-neutral-900 dark:text-white font-semibold text-xl mb-2">
                Audit Trails
              </h3>
<p className="text-neutral-500 dark:text-neutral-400 text-sm">
                Human readable diffs with cryptographic chaining.
              </p>
<div className="mt-8 grid grid-cols-2 gap-4">
<div className="rounded-xl border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5 p-4">
<p className="text-neutral-900 dark:text-white text-sm font-semibold">
                    99.99%
                  </p>
<p className="text-neutral-500 dark:text-white/50 text-xs mt-1">
                    Integrity
                  </p>
</div>
<div className="rounded-xl border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5 p-4">
<p className="text-neutral-900 dark:text-white text-sm font-semibold">
                    3ms
                  </p>
<p className="text-neutral-500 dark:text-white/50 text-xs mt-1">
                    Commit time
                  </p>
</div>
</div>
</article>
<article className="bento-card md:col-span-5 p-7 rounded-[22px] border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.04] backdrop-blur-xl relative overflow-hidden">
<div className="bento-spot"></div>
<h3 className="text-neutral-900 dark:text-white font-semibold text-xl mb-2">
                Policy Engine
              </h3>
<p className="text-neutral-500 dark:text-neutral-400 text-sm">
                Declare rules once. Enforce them everywhere.
              </p>
<img alt="Policy Engine Visual" className="mt-8 h-40 w-full object-cover rounded-xl border border-neutral-200 dark:border-white/10 opacity-80 pointer-events-none select-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bc49165b-655c-4598-a8bc-ac2d1370bb45_original.jpg"/>
</article>
<article className="bento-card md:col-span-7 p-7 rounded-[22px] border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.04] backdrop-blur-xl relative overflow-hidden">
<div className="bento-spot"></div>
<h3 className="text-neutral-900 dark:text-white font-semibold text-xl mb-2">
                Edge Routing
              </h3>
<p className="text-neutral-500 dark:text-neutral-400 text-sm max-w-md">
                Smart fan-out and compression tuned per region and load.
              </p>
<div className="mt-7 flex flex-wrap gap-3 text-xs text-neutral-600 dark:text-white/70">
<span className="px-3 py-1 rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5">
                  Adaptive QoS
                </span>
<span className="px-3 py-1 rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5">
                  Regional shards
                </span>
<span className="px-3 py-1 rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5">
                  Burst control
                </span>
</div>
<img alt="Edge Routing Visual" className="mt-8 h-40 w-full object-cover rounded-xl border border-neutral-200 dark:border-white/10 opacity-80 pointer-events-none select-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/179181df-09e8-46fd-baf8-453d3b9a84ba_1600w.jpg"/>
</article>
</div>
</div>
</section>

<section className="py-40 px-6 relative overflow-hidden" id="timeline">

<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.02) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'}}></div>
<div className="max-w-6xl mx-auto relative z-10">

<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-24 reveal">
<div>
<div className="flex items-center gap-3 mb-4">
<div className="h-px w-8 bg-accent"></div>
<p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent/90">
                  Process Flow
                </p>
</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white leading-tight">
                Chronometric
                <br/>
<span className="text-neutral-400 dark:text-white/30">
                  Data Assembly
                </span>
</h2>
</div>
<p className="text-neutral-500 dark:text-neutral-400 max-w-sm text-sm leading-relaxed border-l border-neutral-300 dark:border-white/10 pl-6 font-light">
              Watch the protocol synthesize reality from raw data inputs in
              real-time, locking states into the immutable ledger.
            </p>
</div>

<div className="relative pl-6 md:pl-0" id="timeline-track">

<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-neutral-200 dark:bg-white/5 md:-translate-x-px"></div>
<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-300 dark:via-white/10 to-transparent md:-translate-x-px opacity-50"></div>

<div className="absolute left-6 md:left-1/2 top-0 w-px bg-accent shadow-[0_0_15px_rgba(16,185,129,0.5)] md:-translate-x-px h-0 origin-top z-10" id="timeline-fill">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_20px_2px_rgba(16,185,129,0.9)] z-20"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 border border-accent/30 rounded-full animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite] opacity-50"></div>
</div>

<div className="space-y-32 py-12">

<div className="timeline-step relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 opacity-20 blur-[4px] scale-[0.98] transition-all duration-700 ease-out will-change-transform">

<div className="md:text-right md:pr-12 relative order-2 md:order-1">
<div className="inline-block relative">
<h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      Ingestion &amp; Sharding
                    </h3>
<p className="timeline-text-shard text-accent/60 text-[10px] font-mono mb-4 uppercase tracking-widest transition-colors duration-500">
                      EXEC_OP_01 // 12ms
                    </p>
<p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed max-w-sm ml-auto font-light">
                      Raw input streams are decomposed into atomic shards,
                      validated against schema definitions, and prepared for
                      parallel processing.
                    </p>
<div className="absolute top-2 right-0 -mr-6 w-1.5 h-1.5 bg-accent/20 rounded-full hidden md:block"></div>
</div>
</div>

<div className="absolute left-6 md:left-1/2 top-0 w-3 h-3 -ml-1.5 rounded-full border border-neutral-300 dark:border-white/20 bg-white dark:bg-[#020202] z-20 timeline-point md:top-6"></div>

<div className="pl-12 md:pl-0 order-3 md:order-2">
<div className="timeline-card-visual h-32 w-full md:w-72 bg-neutral-50 dark:bg-white/[0.02] rounded-xl border border-neutral-200 dark:border-white/10 backdrop-blur-md relative overflow-hidden group transition-all duration-500">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
<div className="timeline-scan-beam absolute inset-0 w-full h-[50%]"></div>
<div className="absolute inset-0 flex items-center justify-center gap-2">
<div className="w-12 h-12 rounded-lg border border-neutral-200 dark:border-white/10 flex items-center justify-center bg-black/5 dark:bg-black/20">
<div className="w-1 h-1 bg-neutral-400 dark:bg-white/40 rounded-full"></div>
</div>
<div className="w-12 h-12 rounded-lg border border-accent/20 flex items-center justify-center bg-accent/5 shadow-[0_0_15px_-5px_rgba(16,185,129,0.3)]">
<div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
</div>
<div className="w-12 h-12 rounded-lg border border-neutral-200 dark:border-white/10 flex items-center justify-center bg-black/5 dark:bg-black/20">
<div className="w-1 h-1 bg-neutral-400 dark:bg-white/40 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="timeline-step relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 opacity-20 blur-[4px] scale-[0.98] transition-all duration-700 ease-out will-change-transform">

<div className="md:text-right md:pr-0 relative order-3 md:order-1 flex md:justify-end">
<div className="pl-12 md:pl-0 md:pr-12 w-full md:w-auto flex justify-end">
<div className="timeline-card-visual h-32 w-full md:w-72 bg-neutral-50 dark:bg-white/[0.02] rounded-xl border border-neutral-200 dark:border-white/10 backdrop-blur-md relative overflow-hidden flex items-center justify-center transition-all duration-500">
<div className="flex gap-[3px] items-end h-12">
<span className="w-1 bg-accent/30 rounded-sm animate-[pulse_2s_ease-in-out_infinite]" style={{height: '40%'}}></span>
<span className="w-1 bg-accent/60 rounded-sm animate-[pulse_2s_ease-in-out_infinite]" style={{height: '80%', animationDelay: '0.1s'}}></span>
<span className="w-1 bg-accent/40 rounded-sm animate-[pulse_2s_ease-in-out_infinite]" style={{height: '60%', animationDelay: '0.2s'}}></span>
<span className="w-1 bg-accent/80 rounded-sm animate-[pulse_2s_ease-in-out_infinite]" style={{height: '100%', animationDelay: '0.3s'}}></span>
<span className="w-1 bg-accent/50 rounded-sm animate-[pulse_2s_ease-in-out_infinite]" style={{height: '50%', animationDelay: '0.4s'}}></span>
</div>
<div className="absolute top-3 right-3 text-[9px] font-mono text-neutral-400 dark:text-white/20">
                        SIG_VALID
                      </div>
</div>
</div>
</div>

<div className="absolute left-6 md:left-1/2 top-0 w-3 h-3 -ml-1.5 rounded-full border border-neutral-300 dark:border-white/20 bg-white dark:bg-[#020202] z-20 timeline-point md:top-6"></div>

<div className="pl-12 md:pl-0 order-2 md:order-2">
<div className="inline-block relative">
<h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      Entanglement
                    </h3>
<p className="timeline-text-shard text-accent/60 text-[10px] font-mono mb-4 uppercase tracking-widest transition-colors duration-500">
                      HASH_VERIFY_X9 // 04ms
                    </p>
<p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed max-w-sm font-light">
                      Quantum-resistant signatures are applied. Data states are
                      entangled with the previous block hash to ensure linear
                      consistency.
                    </p>
</div>
</div>
</div>

<div className="timeline-step relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 opacity-20 blur-[4px] scale-[0.98] transition-all duration-700 ease-out will-change-transform">

<div className="md:text-right md:pr-12 relative order-2 md:order-1">
<div className="inline-block relative">
<h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      Propagation
                    </h3>
<p className="timeline-text-shard text-accent/60 text-[10px] font-mono mb-4 uppercase tracking-widest transition-colors duration-500">
                      NET_CAST_GLOBAL // 28ms
                    </p>
<p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed max-w-sm ml-auto font-light">
                      Optimized routing tables blast the confirmed state to 40+
                      edge regions simultaneously using non-blocking UDP
                      streams.
                    </p>
</div>
</div>

<div className="absolute left-6 md:left-1/2 top-0 w-3 h-3 -ml-1.5 rounded-full border border-neutral-300 dark:border-white/20 bg-white dark:bg-[#020202] z-20 timeline-point md:top-6"></div>

<div className="pl-12 md:pl-0 order-3 md:order-2">
<div className="timeline-card-visual h-32 w-full md:w-72 bg-neutral-50 dark:bg-white/[0.02] rounded-xl border border-neutral-200 dark:border-white/10 backdrop-blur-md relative overflow-hidden transition-all duration-500">
<div className="absolute inset-0 flex items-center justify-center opacity-60">
<div className="relative w-24 h-24">
<div className="absolute inset-0 border border-dashed border-neutral-400 dark:border-white/20 rounded-full animate-[spin_8s_linear_infinite]"></div>
<div className="absolute inset-4 border border-neutral-300 dark:border-white/10 rounded-full animate-[spin_4s_linear_infinite_reverse]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_#10B981]"></div>
</div>
<div className="absolute top-1/2 left-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
<div className="absolute top-1/2 left-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 px-6 max-w-6xl mx-auto" id="pricing">
<div className="mb-20 text-center reveal">
<p className="text-[11px] font-semibold text-accent uppercase tracking-[0.2em] mb-4">
            Pricing
          </p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5 text-gray-900 dark:text-white">
            Scale with Ambition
          </h2>
<p className="text-gray-500 dark:text-gray-500 text-base font-light max-w-md mx-auto">
            Transparent tiers for every stage of synthesis.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto reveal">
<div className="relative p-8 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-neutral-100 dark:border-white/[0.06] flex flex-col">
<h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">
              Explorer
            </h3>
<div className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
              $0
              <span className="text-base font-normal text-neutral-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-500">
<svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                3 Projects
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-500">
<svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Basic Analytics
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-500">
<svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Community Support
              </li>
</ul>
<button className="w-full py-2.5 rounded-full border border-neutral-200 dark:border-white/10 text-sm font-medium text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors">
              Start Free
            </button>
</div>
<div className="relative p-8 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-accent/50 flex flex-col shadow-2xl shadow-accent/5 md:scale-105 z-10 anim-float">
<div className="absolute top-0 right-0 p-3">
<span className="bg-accent text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                Popular
              </span>
</div>
<h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">
              Synthesis
            </h3>
<div className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
              $49
              <span className="text-base font-normal text-neutral-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-500">
<svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Unlimited Projects
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-500">
<svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Real-time Rendering
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-500">
<svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Priority Support
              </li>
</ul>
<button className="w-full py-2.5 rounded-full bg-accent hover:bg-accentGlow text-sm font-semibold text-white transition-colors shadow-lg shadow-accent/20">
              Get Started
            </button>
</div>
<div className="relative p-8 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-neutral-100 dark:border-white/[0.06] flex flex-col">
<h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">
              Matter
            </h3>
<div className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
              Custom
            </div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-500">
<svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Dedicated Cores
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-500">
<svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                SLA Guarantee
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-500">
<svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                24/7 Phone Support
              </li>
</ul>
<button className="w-full py-2.5 rounded-full border border-neutral-200 dark:border-white/10 text-sm font-medium text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors">
              Contact Sales
            </button>
</div>
</div>
</section>

<section className="py-0 px-0 relative" id="cta">
<div className="cta-scroll-wrapper relative" style={{height: '300vh'}}>
<div className="cta-sticky-frame sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0 pointer-events-none opacity-0" id="cta-fog">
<div className="absolute inset-0" style={{background: 'radial-gradient(ellipse 900px 600px at 50% 50%,rgba(16,185,129,0.12),transparent 65%)'}}></div>
<div className="absolute inset-0" style={{background: 'radial-gradient(ellipse 600px 800px at 50% 55%,rgba(255,255,255,0.04),transparent 60%)'}}></div>
</div>

<div className="absolute top-0 left-0 w-1/2 h-full z-20 pointer-events-none" id="cta-door-left" style={{willChange: 'transform'}}>
<div className="h-full w-full relative overflow-hidden" style={{background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(0, 0, 0, 0.7))', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', borderRight: '1px solid rgba(255,255,255,0.1)'}}>
<div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%270 0 200 200%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.65%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E\')'}}></div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-24 bg-white/20 rounded-l-full"></div>

<div className="absolute inset-0 opacity-0" id="cta-sweep-left" style={{background: 'linear-gradient(105deg,transparent 30%,rgba(255,255,255,0.08) 50%,transparent 70%)'}}></div>
</div>
</div>
<div className="absolute top-0 right-0 w-1/2 h-full z-20 pointer-events-none" id="cta-door-right" style={{willChange: 'transform'}}>
<div className="h-full w-full relative overflow-hidden" style={{background: 'linear-gradient(225deg, rgba(16, 185, 129, 0.08), rgba(0, 0, 0, 0.7))', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', borderLeft: '1px solid rgba(255,255,255,0.1)'}}>
<div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%270 0 200 200%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.65%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E\')'}}></div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-24 bg-white/20 rounded-r-full"></div>
<div className="absolute inset-0 opacity-0" id="cta-sweep-right" style={{background: 'linear-gradient(255deg,transparent 30%,rgba(255,255,255,0.08) 50%,transparent 70%)'}}></div>
</div>
</div>

<div className="absolute inset-0 z-10 pointer-events-none opacity-0" id="cta-canvas-container" style={{willChange: 'opacity'}}></div>

<div className="relative z-30 flex flex-col items-center text-center px-6 opacity-0" id="cta-content" style={{willChange: 'transform, opacity', pointerEvents: 'none'}}>
<div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-950/30 backdrop-blur-sm shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.2em]">
                  System Online
                </span>
</div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-neutral-900 dark:text-white mb-6">
                Ready to synthesize?
              </h2>
<p className="text-neutral-500 dark:text-neutral-400 text-lg mb-10 max-w-lg leading-relaxed font-light">
                Initialize your protocol sequence and deploy to the neural
                lattice in seconds.
              </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="h-12 px-8 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black font-semibold text-sm hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-[0_0_20px_-5px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2">
                  Start Free Trial
                </button>
<button className="h-12 px-8 rounded-full border border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-white/5 text-neutral-900 dark:text-white font-medium text-sm hover:bg-white/80 dark:hover:bg-white/10 transition-colors duration-300 backdrop-blur-md flex items-center justify-center gap-2 group/btn">
<span>Documentation</span>
<svg className="w-4 h-4 text-neutral-400 dark:text-white/40 group-hover/btn:text-neutral-900 dark:group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</section>
<style>
        /* Bento spotlight + micro tilt */
        .bento-card {
          transform-style: preserve-3d;
        }

        .bento-spot {
          position: absolute;
          inset: -120px;
          background: radial-gradient(circle at var(--sx, 50%) var(--sy, 50%), rgba(255, 255, 255, 0.14), transparent 55%);
          opacity: 0;
          transition: opacity 350ms ease;
          pointer-events: none;
        }

        .bento-card:hover .bento-spot {
          opacity: 1;
        }

        /* Morph grid + beam */
        .morph-grid {
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(circle at 50% 50%, black 35%, transparent 75%);
          -webkit-mask-image: radial-gradient(circle at 50% 50%, black 35%, transparent 75%);
        }

        .morph-card {
          transition: transform 650ms cubic-bezier(0.16, 1, 0.3, 1), background 650ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .morph-rail:hover .morph-card {
          transform: translateY(-2px);
        }

        .morph-beam {
          background: linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.9), rgba(59, 130, 246, 0.8), transparent);
          transform: translateX(-50%);
          animation: morphBeam 2.2s linear infinite;
          opacity: 0.7;
        }

        @keyframes morphBeam {
          to {
            transform: translateX(50%);
          }
        }

        /* Magnetic cards */
        .mag-card {
          will-change: transform;
          transition: transform 280ms ease;
        }

        /* Pricing orbits */
        .price-card {
          isolation: isolate;
        }

        .orbit {
          position: absolute;
          inset: -30%;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          opacity: 0.35;
          animation: orbitSpin 16s linear infinite;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .orbit span {
          position: absolute;
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.35);
          white-space: nowrap;
        }

        .orbit-a span:nth-child(1) {
          transform: translate(0, -140px);
        }

        .orbit-a span:nth-child(2) {
          transform: translate(140px, 0) rotate(90deg);
        }

        .orbit-a span:nth-child(3) {
          transform: translate(0, 140px) rotate(180deg);
        }

        .orbit-a span:nth-child(4) {
          transform: translate(-140px, 0) rotate(-90deg);
        }

        .orbit-a span:nth-child(5) {
          transform: translate(98px, -98px) rotate(45deg);
        }

        .orbit-b {
          animation-duration: 20s;
          opacity: 0.28;
        }

        .orbit-b span:nth-child(1) {
          transform: translate(0, -160px);
        }

        .orbit-b span:nth-child(2) {
          transform: translate(160px, 0) rotate(90deg);
        }

        .orbit-b span:nth-child(3) {
          transform: translate(0, 160px) rotate(180deg);
        }

        .orbit-b span:nth-child(4) {
          transform: translate(-160px, 0) rotate(-90deg);
        }

        @keyframes orbitSpin {
          to {
            transform: rotate(360deg);
          }
        }

        /* CTA door */
        .cta-door {
          position: relative;
        }

        .cta-panels {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .cta-panel-left,
        .cta-panel-right {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(0, 0, 0, 0.35));
          border-right: 1px solid rgba(255, 255, 255, 0.06);
          height: 100%;
          transform: translateX(0);
          transition: transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cta-panel-right {
          border-right: none;
          border-left: 1px solid rgba(255, 255, 255, 0.06);
          background: linear-gradient(225deg, rgba(16, 185, 129, 0.10), rgba(0, 0, 0, 0.35));
        }

        .cta-door:hover .cta-panel-left {
          transform: translateX(-18%);
        }

        .cta-door:hover .cta-panel-right {
          transform: translateX(18%);
        }
      </style>

<footer className="border-t border-neutral-200 dark:border-white/[0.04] bg-neutral-50 dark:bg-[#020202] py-20 px-6 transition-colors duration-700">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-4 h-4 bg-accent rounded-md"></div>
<span className="font-semibold text-sm text-neutral-900 dark:text-white">
                Aether
              </span>
</div>
<p className="text-neutral-500 dark:text-neutral-600 text-sm font-light max-w-xs">
              Synthesizing the digital future.
            </p>
</div>
<div className="flex gap-16 text-sm text-neutral-500 dark:text-neutral-500">
<div className="flex flex-col gap-3">
<h4 className="text-neutral-900 dark:text-white font-semibold text-xs uppercase tracking-wider mb-1">
                Platform
              </h4>
<a className="hover:text-accent transition-colors duration-300 font-light" href="#">
                Protocol
              </a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-neutral-900 dark:text-white font-semibold text-xs uppercase tracking-wider mb-1">
                Company
              </h4>
<a className="hover:text-accent transition-colors duration-300 font-light" href="#">
                About
              </a>
</div>
</div>
</div>
</footer>
</div>





    </>
  );
}
