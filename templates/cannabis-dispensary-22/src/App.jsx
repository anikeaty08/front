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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Web Animations API replacements for CSS @keyframes to meet strict inline style requirements
        document.getElementById('atmosphere-fog')?.animate(
            [ { transform: 'rotate(0deg) scale(1)' }, { transform: 'rotate(180deg) scale(1.1)' }, { transform: 'rotate(360deg) scale(1)' } ],
            { duration: 20000, iterations: Infinity, easing: 'linear' }
        );

        document.querySelectorAll('.js-noodle').forEach(el => {
            el.animate([{ strokeDashoffset: 12 }, { strokeDashoffset: 0 }], { duration: 1000, iterations: Infinity, easing: 'linear' });
        });

        document.getElementById('float-card')?.animate(
            [{ transform: 'translateY(0)' }, { transform: 'translateY(-10px)' }, { transform: 'translateY(0)' }],
            { duration: 6000, iterations: Infinity, easing: 'ease-in-out' }
        );

        document.querySelectorAll('.js-scan-beam').forEach(el => {
            el.animate([
                { transform: 'translateY(-100%)', opacity: 0 },
                { opacity: 1, offset: 0.1 },
                { opacity: 1, offset: 0.9 },
                { transform: 'translateY(400%)', opacity: 0 }
            ], { duration: 3000, iterations: Infinity, easing: 'linear' });
        });

        // Theme Toggle
        const themeToggle = document.getElementById("theme-toggle");
        const html = document.documentElement;
        let isDark = true; 
        if(isDark) html.classList.add('dark');

        themeToggle.addEventListener("click", () => {
            isDark = !isDark;
            html.classList.toggle("dark");
            if(typeof update3DTheme === 'function') update3DTheme(isDark);
        });

        // Loader
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
                loaderScreen.style.opacity = '0';
                setTimeout(() => loaderScreen.style.display = 'none', 1000);
                canvasContainer.style.opacity = "1";
                init3D();
            }
            loaderFill.style.width = `${progress}%`;
            loaderText.innerText = `${Math.floor(progress)}%`;
        }, 50);

        // Scroll reveals for layout sections
        const revealElements = document.querySelectorAll(".js-reveal");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        revealElements.forEach(el => observer.observe(el));

        // Bento Hover interactions
        document.querySelectorAll(".js-bento-card").forEach((card) => {
            card.addEventListener("pointermove", (e) => {
                const r = card.getBoundingClientRect();
                const x = ((e.clientX - r.left) / r.width) * 100;
                const y = ((e.clientY - r.top) / r.height) * 100;
                const spot = card.querySelector('.js-bento-spot');
                if(spot) spot.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255, 255, 255, 0.14), transparent 55%)`;

                const dx = (e.clientX - (r.left + r.width/2)) / r.width;
                const dy = (e.clientY - (r.top + r.height/2)) / r.height;
                card.style.transform = `rotateX(${(-dy * 4).toFixed(2)}deg) rotateY(${(dx * 6).toFixed(2)}deg) translateY(-1px)`;
            });
            card.addEventListener("pointerleave", () => {
                card.style.transform = "";
            });
        });

        // Three.js Logic (Hero)
        let scene, camera, renderer, phoneGroup, screenMesh, envLight, dirLight, particles;

        function init3D() {
            scene = new THREE.Scene();
            scene.fog = new THREE.FogExp2(0x020202, 0.0016);
            camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 100);
            camera.position.set(0, 0, 16);

            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 1.1;
            document.getElementById("canvas-container").appendChild(renderer.domElement);

            phoneGroup = new THREE.Group();
            scene.add(phoneGroup);

            function makeRadialTexture(stops) {
                const c = document.createElement("canvas"); c.width = 512; c.height = 512;
                const g = c.getContext("2d");
                const grd = g.createRadialGradient(256, 256, 0, 256, 256, 256);
                stops.forEach(s => grd.addColorStop(s[0], s[1]));
                g.fillStyle = grd; g.fillRect(0, 0, 512, 512);
                return new THREE.CanvasTexture(c);
            }

            const glowTex = makeRadialTexture([[0.0, "rgba(16,185,129,0.22)"], [0.28, "rgba(16,185,129,0.10)"], [0.55, "rgba(255,255,255,0.06)"], [1.0, "rgba(0,0,0,0.0)"]]);
            const glowSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, transparent: true, depthWrite: false }));
            glowSprite.scale.set(18, 18, 1); glowSprite.position.set(0, 0, -6);
            scene.add(glowSprite);

            const width = 3.2, height = 6.8, depth = 0.35, radius = 0.6;
            const shape = new THREE.Shape();
            shape.moveTo(-width/2+radius, -height/2); shape.lineTo(width/2-radius, -height/2);
            shape.quadraticCurveTo(width/2, -height/2, width/2, -height/2+radius); shape.lineTo(width/2, height/2-radius);
            shape.quadraticCurveTo(width/2, height/2, width/2-radius, height/2); shape.lineTo(-width/2+radius, height/2);
            shape.quadraticCurveTo(-width/2, height/2, -width/2, height/2-radius); shape.lineTo(-width/2, -height/2+radius);
            shape.quadraticCurveTo(-width/2, -height/2, -width/2+radius, -height/2);

            const bodyGeo = new THREE.ExtrudeGeometry(shape, { depth: depth, bevelEnabled: true, bevelSegments: 6, bevelSize: 0.04, bevelThickness: 0.04 });
            bodyGeo.center();
            const phoneBody = new THREE.Mesh(bodyGeo, new THREE.MeshStandardMaterial({ color: 0x0a0a0a, metalness: 0.98, roughness: 0.1 }));
            phoneGroup.add(phoneBody);

            const canvas = document.createElement("canvas"); canvas.width = 512; canvas.height = 1024;
            const ctx = canvas.getContext("2d");
            const grad = ctx.createRadialGradient(256, 512, 0, 256, 512, 512);
            grad.addColorStop(0, "#030a06"); grad.addColorStop(1, "#000000");
            ctx.fillStyle = grad; ctx.fillRect(0, 0, 512, 1024);
            ctx.shadowBlur = 60; ctx.shadowColor = "#10B981"; ctx.strokeStyle = "#10B981"; ctx.lineWidth = 8;
            ctx.beginPath(); ctx.arc(256, 480, 80, 0, Math.PI * 2); ctx.stroke();
            ctx.shadowBlur = 30; ctx.fillStyle = "rgba(16, 185, 129, 0.04)"; ctx.fill();
            ctx.shadowBlur = 0; ctx.font = "500 16px Inter, sans-serif"; ctx.fillStyle = "rgba(255,255,255,0.5)"; ctx.textAlign = "center";
            ctx.fillText("Flava Depot", 256, 600);
            ctx.font = "300 11px Inter, sans-serif"; ctx.fillStyle = "rgba(255,255,255,0.25)"; ctx.fillText("Premium Cannabis", 256, 625);

            const tex = new THREE.CanvasTexture(canvas);
            screenMesh = new THREE.Mesh(new THREE.PlaneGeometry(width - 0.2, height - 0.2), new THREE.MeshStandardMaterial({ map: tex, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.6, roughness: 0.1, metalness: 0.3 }));
            screenMesh.position.z = depth / 2 + 0.05;
            phoneGroup.add(screenMesh);

            envLight = new THREE.AmbientLight(0x404040, 0.6); scene.add(envLight);
            dirLight = new THREE.DirectionalLight(0xffffff, 2.2); dirLight.position.set(4, 6, 10); scene.add(dirLight);
            const fillLight = new THREE.DirectionalLight(0x4488ff, 0.3); fillLight.position.set(-4, 2, 5); scene.add(fillLight);
            const rimLight = new THREE.SpotLight(0x10b981, 3); rimLight.position.set(-3, 0, -6); rimLight.lookAt(0, 0, 0); scene.add(rimLight);

            const pos = new Float32Array(300); for(let i=0;i<300;i++) pos[i]=(Math.random()-0.5)*35;
            const pGeo = new THREE.BufferGeometry(); pGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
            particles = new THREE.Points(pGeo, new THREE.PointsMaterial({ color: 0x10b981, size: 0.02, transparent: true, opacity: 0.15 }));
            scene.add(particles);

            const clock = new THREE.Clock();
            function animate() {
                requestAnimationFrame(animate);
                const t = clock.getElapsedTime();
                phoneGroup.position.y += Math.sin(t * 0.5) * 0.0005;
                if (particles) { particles.rotation.y = t * 0.015; particles.rotation.x = t * 0.005; }
                renderer.render(scene, camera);
            }
            animate();
            update3DTheme(isDark);
            initGSAPHero();
            initCTA3D();
        }

        window.update3DTheme = function(dark) {
            if (!scene) return;
            const darkBg = new THREE.Color(0x020202), lightBg = new THREE.Color(0xf3f4f6), targetBg = dark ? darkBg : lightBg;
            if (scene.fog) gsap.to(scene.fog.color, { r: targetBg.r, g: targetBg.g, b: targetBg.b, duration: 0.7 });
            gsap.to(envLight, { intensity: dark ? 0.6 : 2.0, duration: 0.7 });
            gsap.to(dirLight, { intensity: dark ? 2.2 : 1.0, duration: 0.7 });
            gsap.to(screenMesh.material, { emissiveIntensity: dark ? 0.6 : 0.15, duration: 0.7 });
            if (particles) gsap.to(particles.material, { opacity: dark ? 0.15 : 0.05, duration: 0.7 });
        }

        function initGSAPHero() {
            gsap.registerPlugin(ScrollTrigger);
            const camProxy = { fov: camera.fov };
            const masterTl = gsap.timeline({ scrollTrigger: { trigger: "body", start: "top top", end: "+=420%", scrub: 1.25 } });

            masterTl.to("#hero-atmosphere", { opacity: 1, duration: 1 }, 0);
            masterTl.to("#hero-content", { opacity: 0, scale: 0.95, duration: 1 }, 0);

            masterTl.to(phoneGroup.rotation, { x: 0.15, y: 0.9, z: 0.06, duration: 2.2 }, 0);
            masterTl.to(phoneGroup.position, { x: 1.25, y: 0.0, z: 1.8, duration: 2.2 }, 0);
            masterTl.to(camera.position, { x: 0.35, y: 0.15, z: 14.2, duration: 2.2 }, 0);
            masterTl.to(camProxy, { fov: 26, duration: 2.2, onUpdate: () => { camera.fov = camProxy.fov; camera.updateProjectionMatrix(); } }, 0);

            masterTl.to("#popover-1", { opacity: 1, y: 0, scale: 1, duration: 0.8 }, 0.9);
            masterTl.to("#popover-1", { opacity: 0, y: -20, duration: 0.7 }, 2.4);

            masterTl.to(phoneGroup.rotation, { x: -0.05, y: 2.4, z: -0.04, duration: 2.6 }, 2.6);
            masterTl.to(phoneGroup.position, { x: -1.3, y: 0.35, z: 2.6, duration: 2.6 }, 2.6);
            masterTl.to(camera.position, { x: -0.55, y: 0.25, z: 12.4, duration: 2.6 }, 2.6);
            masterTl.to(camProxy, { fov: 24, duration: 2.6, onUpdate: () => { camera.fov = camProxy.fov; camera.updateProjectionMatrix(); } }, 2.6);

            masterTl.to("#popover-2", { opacity: 1, y: 0, scale: 1, duration: 0.8 }, 3.4);
            masterTl.to("#popover-2", { opacity: 0, y: -20, duration: 0.7 }, 4.9);

            masterTl.to(phoneGroup.rotation, { x: 0.35, y: Math.PI * 2, z: 0.0, duration: 3.2 }, 5.1);
            masterTl.to(phoneGroup.position, { x: 0.0, y: 1.15, z: 0.6, duration: 3.2 }, 5.1);
            masterTl.to(camera.position, { x: 0.0, y: 0.55, z: 10.6, duration: 3.2 }, 5.1);
            masterTl.to(camProxy, { fov: 22, duration: 3.2, onUpdate: () => { camera.fov = camProxy.fov; camera.updateProjectionMatrix(); } }, 5.1);

            masterTl.to("#popover-3", { opacity: 1, y: 0, scale: 1, duration: 0.8 }, 6.0);
            masterTl.to("#popover-3", { opacity: 0, y: -20, duration: 0.7 }, 7.6);

            masterTl.to(phoneGroup.position, { y: 10, duration: 2 }, 8.2);
            masterTl.to("#hero-atmosphere", { opacity: 0, duration: 2 }, 8.2);
            masterTl.to("#canvas-container", { opacity: 0, duration: 2 }, 8.7);
        }

        // Kakaoke Text Logic
        const karaokeText = document.getElementById("kakaoke-text");
        if (karaokeText) {
            const words = karaokeText.innerText.split(" ");
            karaokeText.innerHTML = words.map(word => `<span style="opacity:0.2; transition: all 0.5s ease-out;">${word}</span> `).join("");
            const spans = karaokeText.querySelectorAll("span");
            window.addEventListener("scroll", () => {
                const rect = karaokeText.getBoundingClientRect();
                const progress = Math.max(0, Math.min(1, (window.innerHeight * 0.8 - rect.top) / (window.innerHeight * 0.5)));
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

        // Stats Counters
        document.querySelectorAll(".js-counter").forEach((el) => {
            const target = parseFloat(el.dataset.counter);
            const suffix = el.dataset.suffix || "";
            gsap.fromTo(el, { innerText: 0 }, {
                innerText: target, duration: 1.6, ease: "power2.out", snap: { innerText: 0.01 },
                scrollTrigger: { trigger: "#stats", start: "top 80%", once: true },
                onUpdate: function () {
                    let value = parseFloat(el.innerText);
                    el.innerText = value.toFixed(target % 1 !== 0 ? 1 : 0) + suffix;
                }
            });
        });

        // Timeline Scroll Fill
        const track = document.getElementById('timeline-track');
        const fill = document.getElementById('timeline-fill');
        const steps = document.querySelectorAll('.timeline-step');
        if (track && fill) {
            gsap.to(fill, {
                height: '100%', ease: 'none',
                scrollTrigger: { trigger: track, start: 'top 60%', end: 'bottom 60%', scrub: 0.5 }
            });
            steps.forEach(step => {
                gsap.to(step, {
                    opacity: 1, filter: 'blur(0px)', scale: 1, duration: 0.6, ease: 'power2.out',
                    scrollTrigger: {
                        trigger: step, start: 'top 55%', end: 'bottom 55%', toggleActions: 'play reverse play reverse',
                        onEnter: () => {
                            const pt = step.querySelector('.js-timeline-point');
                            const vis = step.querySelector('.js-timeline-visual');
                            const shard = step.querySelector('.js-timeline-shard');
                            if(pt) { pt.style.backgroundColor = '#10b981'; pt.style.boxShadow = '0 0 0 4px #020202, 0 0 0 5px rgba(16,185,129,0.3), 0 0 30px rgba(16,185,129,0.6)'; pt.style.transform = 'scale(1.2)'; }
                            if(vis) { vis.style.borderColor = 'rgba(16,185,129,0.3)'; vis.style.boxShadow = '0 10px 40px -10px rgba(16,185,129,0.15)'; }
                            if(shard) { shard.style.color = '#10b981'; shard.style.textShadow = '0 0 10px rgba(16,185,129,0.4)'; }
                        },
                        onLeaveBack: () => {
                            const pt = step.querySelector('.js-timeline-point');
                            const vis = step.querySelector('.js-timeline-visual');
                            const shard = step.querySelector('.js-timeline-shard');
                            if(pt) { pt.style.backgroundColor = ''; pt.style.boxShadow = ''; pt.style.transform = ''; }
                            if(vis) { vis.style.borderColor = ''; vis.style.boxShadow = ''; }
                            if(shard) { shard.style.color = ''; shard.style.textShadow = ''; }
                        }
                    }
                });
            });
        }

        // CTA 3D 
        function initCTA3D() {
            var ctaContainer = document.getElementById('cta-canvas-container');
            if(!ctaContainer) return;

            var ctaRenderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
            ctaRenderer.setSize(window.innerWidth, window.innerHeight);
            ctaRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            ctaRenderer.toneMapping = THREE.ACESFilmicToneMapping;
            ctaRenderer.toneMappingExposure = 1.1;
            ctaContainer.appendChild(ctaRenderer.domElement);
            ctaRenderer.domElement.style.width = '100%';
            ctaRenderer.domElement.style.height = '100%';

            var ctaScene = new THREE.Scene();
            ctaScene.fog = new THREE.FogExp2(0x020202, 0.0018);

            var ctaCamera = new THREE.PerspectiveCamera(28, window.innerWidth/window.innerHeight, 0.1, 100);
            ctaCamera.position.set(0, 0, 14);

            var w=3.2, h=6.8, d=0.35, r=0.6;
            var shape = new THREE.Shape();
            shape.moveTo(-w/2+r, -h/2); shape.lineTo(w/2-r, -h/2);
            shape.quadraticCurveTo(w/2, -h/2, w/2, -h/2+r); shape.lineTo(w/2, h/2-r);
            shape.quadraticCurveTo(w/2, h/2, w/2-r, h/2); shape.lineTo(-w/2+r, h/2);
            shape.quadraticCurveTo(-w/2, h/2, -w/2, h/2-r); shape.lineTo(-w/2, -h/2+r);
            shape.quadraticCurveTo(-w/2, -h/2, -w/2+r, -h/2);

            var bodyGeo = new THREE.ExtrudeGeometry(shape, {depth:d, bevelEnabled:true, bevelSegments:6, bevelSize:0.04, bevelThickness:0.04});
            bodyGeo.center();

            var bodyMat = new THREE.MeshStandardMaterial({color:0x0a0a0a, metalness:0.98, roughness:0.1});
            var ctaPhone = new THREE.Mesh(bodyGeo, bodyMat);

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
            ctx.fillText('Flava Depot',256,600);
            ctx.font='300 11px Inter,sans-serif'; ctx.fillStyle='rgba(255,255,255,0.25)';
            ctx.fillText('Premium Cannabis',256,625);

            var tex = new THREE.CanvasTexture(canvas);
            var screenGeo = new THREE.PlaneGeometry(w-0.2, h-0.2);
            var screenMat = new THREE.MeshStandardMaterial({map:tex, emissive:0xffffff, emissiveMap:tex, emissiveIntensity:0.6, roughness:0.1, metalness:0.3});
            var ctaScreen = new THREE.Mesh(screenGeo, screenMat);
            ctaScreen.position.z = d/2 + 0.05;

            var ctaPhoneGroup = new THREE.Group();
            ctaPhoneGroup.add(ctaPhone); ctaPhoneGroup.add(ctaScreen);
            ctaPhoneGroup.position.set(0, 1.5, 0); ctaPhoneGroup.scale.set(0.7, 0.7, 0.7);
            ctaScene.add(ctaPhoneGroup);

            var gc = document.createElement('canvas'); gc.width=512; gc.height=512;
            var gg = gc.getContext('2d');
            var grd = gg.createRadialGradient(256,256,0,256,256,256);
            grd.addColorStop(0,'rgba(16,185,129,0.22)'); grd.addColorStop(0.28,'rgba(16,185,129,0.10)');
            grd.addColorStop(0.55,'rgba(255,255,255,0.06)'); grd.addColorStop(1,'rgba(0,0,0,0)');
            gg.fillStyle=grd; gg.fillRect(0,0,512,512);
            var glowSprite = new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(gc),transparent:true,depthWrite:false}));
            glowSprite.scale.set(16,16,1); glowSprite.position.set(0,0,-5);
            ctaScene.add(glowSprite);

            ctaScene.add(new THREE.AmbientLight(0x404040, 0.6));
            var dLight = new THREE.DirectionalLight(0xffffff, 2.2); dLight.position.set(4,6,10); ctaScene.add(dLight);
            var fLight = new THREE.DirectionalLight(0x4488ff, 0.3); fLight.position.set(-4,2,5); ctaScene.add(fLight);
            var rLight = new THREE.SpotLight(0x10b981, 3); rLight.position.set(-3,0,-6); rLight.lookAt(0,0,0); ctaScene.add(rLight);

            var pGeo = new THREE.BufferGeometry(), pos = new Float32Array(180);
            for(var i=0;i<180;i++) pos[i]=(Math.random()-0.5)*30;
            pGeo.setAttribute('position', new THREE.BufferAttribute(pos,3));
            var ctaParticles = new THREE.Points(pGeo, new THREE.PointsMaterial({color:0x10b981,size:0.02,transparent:true,opacity:0.12}));
            ctaScene.add(ctaParticles);

            var ctaAnimating = false;
            var ctaClock = new THREE.Clock();
            var targetRotY = 0, currentRotY = 0, targetRotX = 0.15, currentRotX = 0.15;

            function ctaAnimate(){
                if(!ctaAnimating) return;
                requestAnimationFrame(ctaAnimate);
                var t = ctaClock.getElapsedTime();
                targetRotY += 0.004;
                currentRotY += (targetRotY - currentRotY) * 0.04;
                currentRotX += (targetRotX - currentRotX) * 0.04;

                ctaPhoneGroup.rotation.y = currentRotY;
                ctaPhoneGroup.rotation.x = currentRotX + Math.sin(t*0.3)*0.03;
                ctaPhoneGroup.position.y = 1.5 + Math.sin(t*0.5)*0.08;

                if(ctaParticles){ ctaParticles.rotation.y = t*0.01; ctaParticles.rotation.x = t*0.004; }
                ctaRenderer.render(ctaScene,
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
      

<div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gray-50 dark:bg-[#020202] transition-opacity duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]" id="loading-screen">
<div className="text-xs uppercase dark:text-gray-500 font-medium text-gray-500 tracking-[0.2em] mb-3">
            Preparing Strains
        </div>
<div className="w-40 h-[2px] bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 transition-all duration-100 ease-out rounded-full" id="loader-fill" style={{width: '0%'}}></div>
</div>
<div className="mt-3 text-xs font-mono opacity-30" id="loader-text">
            0%
        </div>
</div>

<nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#020202]/70 backdrop-blur-2xl transition-colors duration-700 border-b border-neutral-200 dark:border-white/[0.04]">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="w-5 h-5 bg-emerald-500 rounded-md flex items-center justify-center" style={{boxShadow: '0 0 12px rgba(16, 185, 129, 0.3)'}}>
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
</div>
<span className="font-medium tracking-tight text-neutral-900 dark:text-white text-sm">
                    Flava Depot
                </span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-neutral-500 dark:text-neutral-400">
<a className="hover:text-neutral-900 dark:hover:text-white transition-colors duration-300" href="#features">
                    Menu
                </a>
<a className="hover:text-neutral-900 dark:hover:text-white transition-colors duration-300" href="#method">
                    Process
                </a>
<a className="hover:text-neutral-900 dark:hover:text-white transition-colors duration-300" href="#pricing">
                    Rewards
                </a>
</div>
<div className="flex items-center gap-3">
<button className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors duration-300 text-neutral-500 dark:text-neutral-500 flex items-center justify-center" id="theme-toggle">
<iconify-icon className="hidden dark:block" height="16" icon="solar:sun-linear" id="icon-sun" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon className="block dark:hidden" height="16" icon="solar:moon-linear" id="icon-moon" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<a className="text-sm font-normal text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300" href="#">
                    Log in
                </a>
<button className="px-5 py-2 text-sm font-medium bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full hover:scale-[1.02] transition-all duration-300 shadow-sm">
                    Order Now
                </button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-0 pointer-events-none opacity-0 transition-opacity duration-1000 overflow-hidden" id="hero-atmosphere">
<div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%]" id="atmosphere-fog" style={{background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.05) 0%, transparent 50%)'}}></div>
</div>
<div className="fixed inset-0 z-0 opacity-0 transition-opacity duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none" id="canvas-container"></div>

<div className="fixed inset-0 z-15 pointer-events-none" id="story-popovers">
<div className="absolute z-20 bg-white/60 dark:bg-[#141414]/40 backdrop-blur-[20px] border border-white/40 dark:border-white/10 p-[14px_20px] rounded-[18px] flex flex-col gap-1 opacity-0 min-w-[200px] top-[35%] left-[15%] md:left-[15%] md:top-[35%] max-md:top-auto max-md:bottom-[25%] max-md:left-1/2 max-md:-translate-x-1/2 max-md:text-center max-md:items-center" id="popover-1" style={{boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.5)', transform: 'translateY(20px) scale(0.95)'}}>
<div className="text-xs font-semibold uppercase tracking-wider text-emerald-500 mb-[2px]">Quality</div>
<div className="text-sm font-medium text-gray-900 dark:text-white tracking-tight">Lab Tested</div>
<div className="text-xs text-gray-500 dark:text-gray-400 font-normal">Pesticide-free cultivation.</div>
</div>
<div className="absolute z-20 bg-white/60 dark:bg-[#141414]/40 backdrop-blur-[20px] border border-white/40 dark:border-white/10 p-[14px_20px] rounded-[18px] flex flex-col gap-1 opacity-0 min-w-[200px] top-[45%] right-[15%] text-right items-end md:right-[15%] md:top-[45%] max-md:top-auto max-md:bottom-[25%] max-md:left-1/2 max-md:right-auto max-md:-translate-x-1/2 max-md:text-center max-md:items-center" id="popover-2" style={{boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.5)', transform: 'translateY(20px) scale(0.95)'}}>
<div className="text-xs font-semibold uppercase tracking-wider text-emerald-500 mb-[2px]">Potency</div>
<div className="text-sm font-medium text-gray-900 dark:text-white tracking-tight">High Yield</div>
<div className="text-xs text-gray-500 dark:text-gray-400 font-normal">Maximized terpene profiles.</div>
</div>
<div className="absolute z-20 bg-white/60 dark:bg-[#141414]/40 backdrop-blur-[20px] border border-white/40 dark:border-white/10 p-[14px_20px] rounded-[18px] flex flex-col gap-1 opacity-0 min-w-[200px] bottom-[15%] left-1/2 -translate-x-1/2 text-center items-center max-md:bottom-[25%]" id="popover-3" style={{boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.5)', transform: 'translateY(20px) scale(0.95)'}}>
<div className="text-xs font-semibold uppercase tracking-wider text-emerald-500 mb-[2px]">Purity</div>
<div className="text-sm font-medium text-gray-900 dark:text-white tracking-tight">Organic Grown</div>
<div className="text-xs text-gray-500 dark:text-gray-400 font-normal">Sustainable farming practices.</div>
</div>
</div>

<div className="fixed inset-0 z-10 flex items-center justify-center pointer-events-none" id="hero-content">
<div className="absolute w-[820px] h-[820px] rounded-full pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[70px]" style={{background: 'radial-gradient(circle at 45% 40%, rgba(16, 185, 129, 0.18) 0%, rgba(16, 185, 129, 0.06) 38%, transparent 70%), radial-gradient(circle at 55% 60%, rgba(255, 255, 255, 0.06) 0%, transparent 55%)'}}></div>
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(900px 520px at 50% 22%, rgba(255, 255, 255, 0.07), transparent 60%), radial-gradient(900px 700px at 50% 65%, rgba(16, 185, 129, 0.05), transparent 55%)'}}></div>
<div className="max-w-3xl mx-auto text-center px-6 relative pointer-events-none" style={{marginTop: '-8vh'}}>
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/15 bg-emerald-500/5 backdrop-blur-sm mb-10 pointer-events-auto cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]"></span>
<span className="text-xs font-medium text-emerald-500/90 uppercase tracking-[0.15em]">
                    Dispensary Open
                </span>
</div>
<h1 className="text-5xl md:text-[5.5rem] font-medium tracking-tight mb-7 leading-[1.05] text-neutral-900 dark:text-white transition-colors duration-700">
                Premium Cannabis
                <br/>
<span className="bg-gradient-to-br from-[#6ee7b7] via-[#10b981] to-[#059669] bg-clip-text text-transparent">Experience.</span>
</h1>
<p className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 max-w-md mx-auto mb-12 leading-relaxed transition-colors duration-700 font-light">
                The convergence of nature and science. Bridging the gap between expert cultivation and the true connoisseur.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pointer-events-auto">
<button className="relative overflow-hidden h-11 px-7 bg-emerald-500 text-white text-sm font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-2 hover:bg-emerald-400 group" style={{boxShadow: '0 0 30px rgba(16, 185, 129, 0.25), 0 1px 3px rgba(0,0,0,0.2)'}}>
<div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    Shop Menu
                    <iconify-icon height="18" icon="solar:cart-large-2-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="h-11 px-7 rounded-full text-sm font-normal flex items-center justify-center transition-all duration-300 bg-white/70 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-neutral-200 backdrop-blur-xl hover:bg-white/80 dark:hover:bg-white/10 hover:-translate-y-[1px]" style={{boxShadow: '0 10px 30px rgba(0,0,0,0.06)'}}>
<span className="pointer-events-none relative">
                        Rewards Program
                        <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.55),transparent_60%)] opacity-60"></span>
</span>
</button>
</div>
</div>
</div>

<div style={{height: '300vh', position: 'relative', zIndex: '1'}}></div>

<div className="relative z-20 bg-gray-50 dark:bg-[#020202] transition-colors duration-700">

<section className="py-40 px-6">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl md:text-[2.75rem] font-medium leading-[1.4] text-left text-neutral-900 dark:text-white tracking-tight transition-colors duration-500" id="kakaoke-text">
                    Stop settling for average strains. Flava Depot curates the most exclusive, terpene-rich cannabis products, delivering a premium experience from seed to smoke without compromise.
                </h2>
</div>
</section>

<section className="py-40 px-6 max-w-6xl mx-auto" id="features">
<div className="mb-20 text-center js-reveal" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 1s cubic-bezier(0.22, 1, 0.36, 1)'}}>
<p className="text-xs font-medium uppercase tracking-[0.2em] mb-4 text-emerald-400/90">
                    Supply Chain
                </p>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-5 text-gray-900 dark:text-white">
                    Seed-to-Sale Tracking
                </h2>
<p className="text-gray-500 dark:text-gray-400 text-base font-light max-w-md mx-auto">
                    Transparent origin tracing across every strain in our network.
                </p>
</div>
<div className="relative rounded-[28px] overflow-hidden js-reveal bg-[#fafafa] dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 1s cubic-bezier(0.22, 1, 0.36, 1) 0.1s'}}>
<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)', backgroundSize: '80px 80px'}}></div>
<div className="absolute -inset-20 pointer-events-none opacity-70">
<div className="absolute w-[600px] h-[600px] bg-emerald-500/10 blur-[100px] rounded-full top-[-20%] left-[-10%]"></div>
<div className="absolute w-[500px] h-[500px] bg-emerald-500/5 blur-[80px] rounded-full bottom-[-10%] right-[-10%]"></div>
</div>
<div className="relative z-10 p-10 md:p-12">
<div className="relative h-[520px] flex items-center justify-between" style={{isolation: 'isolate'}}>

<div className="absolute inset-0 pointer-events-none z-0">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 1000 520">
<path className="text-gray-200 dark:text-white/10" d="M210,260 C380,260 420,170 560,170 C680,170 735,170 820,170" fill="none" id="p1" stroke="currentColor" strokeWidth="2"></path>
<path className="text-gray-200 dark:text-white/10" d="M210,260 C380,260 420,350 560,350 C680,350 735,350 820,350" fill="none" id="p2" stroke="currentColor" strokeWidth="2"></path>
<path className="js-noodle opacity-80" d="M210,260 C380,260 420,170 560,170 C680,170 735,170 820,170" fill="none" stroke="#10b981" stroke-dasharray="6 6" strokeWidth="2"></path>
<path className="js-noodle opacity-80" d="M210,260 C380,260 420,350 560,350 C680,350 735,350 820,350" fill="none" stroke="#10b981" stroke-dasharray="6 6" strokeWidth="2"></path>
<circle fill="#10b981" r="4">
<animatemotion dur="2.5s" repeatcount="indefinite" rotate="auto"><mpath href="#p1"></mpath></animatemotion>
</circle>
<circle fill="#10b981" r="4">
<animatemotion begin="0.5s" dur="3s" repeatcount="indefinite" rotate="auto"><mpath href="#p2"></mpath></animatemotion>
</circle>
</svg>
</div>

<div className="relative z-10 w-full h-full flex items-center justify-between max-md:flex-col max-md:justify-center max-md:gap-8">
<div className="w-full md:w-[240px] bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:border-emerald-500/40 transition-all duration-300">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-lg flex items-center justify-center text-gray-900 dark:text-white">
<iconify-icon height="16" icon="solar:leaf-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="font-medium text-sm text-gray-900 dark:text-white">Cultivation</span>
</div>
<div className="flex flex-col gap-1.5">
<div className="h-1 bg-gray-200 dark:bg-white/10 rounded-full w-full"></div>
<div className="h-1 bg-gray-200 dark:bg-white/10 rounded-full w-3/4"></div>
</div>
<div className="text-xs text-gray-500 dark:text-gray-400 mt-3">Grow, harvest, cure</div>
</div>
<div className="flex flex-col gap-6 items-end w-full md:w-auto">
<div className="w-full md:w-[240px] bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:border-emerald-500/40 transition-all duration-300">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-lg flex items-center justify-center text-gray-900 dark:text-white">
<iconify-icon height="16" icon="solar:test-tube-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="font-medium text-sm text-gray-900 dark:text-white">Extraction</span>
</div>
<div className="flex flex-col gap-1.5">
<div className="h-1 bg-gray-200 dark:bg-white/10 rounded-full w-1/2"></div>
</div>
<div className="text-xs text-gray-500 dark:text-gray-400 mt-3">Solventless pressing</div>
</div>
<div className="w-full md:w-[240px] bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:border-emerald-500/40 transition-all duration-300">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-lg flex items-center justify-center text-gray-900 dark:text-white">
<iconify-icon height="16" icon="solar:shop-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="font-medium text-sm text-gray-900 dark:text-white">Dispensary</span>
</div>
<div className="flex flex-col gap-1.5">
<div className="h-1 bg-gray-200 dark:bg-white/10 rounded-full w-1/2"></div>
</div>
<div className="text-xs text-gray-500 dark:text-gray-400 mt-3">Package, display, enjoy</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 px-6 max-w-6xl mx-auto" id="method">
<div className="mb-20 text-center js-reveal" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 1s cubic-bezier(0.22, 1, 0.36, 1)'}}>
<p className="text-xs font-medium text-emerald-500 uppercase tracking-[0.2em] mb-4">
                    Experience
                </p>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-5 text-gray-900 dark:text-white">
                    Premium Dispensary
                </h2>
<p className="text-gray-500 dark:text-gray-400 text-base font-light max-w-md mx-auto">
                    Elevating your senses with expert curation.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 js-reveal js-stagger-parent" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 1s cubic-bezier(0.22, 1, 0.36, 1) 0.1s'}}>
<div className="js-stagger-child p-8 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-neutral-100 dark:border-white/[0.06] hover:border-emerald-500/50 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:bg-emerald-500/10 transition-colors duration-300">
<iconify-icon className="text-neutral-500 dark:text-gray-400 group-hover:text-emerald-500 transition-colors duration-300" height="20" icon="solar:star-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-3">
                        Curated Selection
                    </h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-light">
                        Hand-picked strains from award-winning growers, ensuring only the highest quality product reaches you.
                    </p>
</div>
<div className="js-stagger-child p-8 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-neutral-100 dark:border-white/[0.06] hover:border-emerald-500/50 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:bg-emerald-500/10 transition-colors duration-300">
<iconify-icon className="text-neutral-500 dark:text-gray-400 group-hover:text-emerald-500 transition-colors duration-300" height="20" icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-3">
                        Lab Verified
                    </h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-light">
                        Every batch undergoes rigorous third-party testing for potency and purity, guaranteeing a clean experience.
                    </p>
</div>
<div className="js-stagger-child p-8 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-neutral-100 dark:border-white/[0.06] hover:border-emerald-500/50 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:bg-emerald-500/10 transition-colors duration-300">
<iconify-icon className="text-neutral-500 dark:text-gray-400 group-hover:text-emerald-500 transition-colors duration-300" height="20" icon="solar:user-hand-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-3">
                        Expert Budtenders
                    </h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-light">
                        Personalized recommendations based on your desired effects and flavor profiles by our certified staff.
                    </p>
</div>
</div>
</section>

<section className="py-20 border-y border-neutral-200 dark:border-white/[0.04] bg-neutral-50 dark:bg-white/[0.02]" id="stats">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center js-stagger-parent">
<div className="js-reveal js-stagger-child" style={{opacity: '0', transform: 'translateY(20px)'}}>
<div className="js-counter text-3xl font-semibold text-neutral-900 dark:text-white mb-1" data-counter="99.9" data-suffix="%">
                        0.0%
                    </div>
<div className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                        THC Purity
                    </div>
</div>
<div className="js-reveal js-stagger-child" style={{opacity: '0', transform: 'translateY(20px)'}}>
<div className="js-counter text-3xl font-semibold text-neutral-900 dark:text-white mb-1" data-counter="50" data-suffix="+">
                        0+
                    </div>
<div className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                        Rare Strains
                    </div>
</div>
<div className="js-reveal js-stagger-child" style={{opacity: '0', transform: 'translateY(20px)'}}>
<div className="js-counter text-3xl font-semibold text-neutral-900 dark:text-white mb-1" data-counter="15" data-suffix="m">
                        0m
                    </div>
<div className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                        Avg Wait Time
                    </div>
</div>
<div className="js-reveal js-stagger-child" style={{opacity: '0', transform: 'translateY(20px)'}}>
<div className="js-counter text-3xl font-semibold text-neutral-900 dark:text-white mb-1" data-counter="10" data-suffix="k+">
                        0k+
                    </div>
<div className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                        Happy Customers
                    </div>
</div>
</div>
</section>

<section className="py-32 px-6" id="bento">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-14 js-reveal" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 1s cubic-bezier(0.22, 1, 0.36, 1)'}}>
<p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90 mb-4">
                        Offerings
                    </p>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900 dark:text-white mb-4">
                        A menu that feels alive
                    </h2>
<p className="text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto font-light">
                        Explore our diverse range of premium cannabis products, crafted for the ultimate experience.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-5">
<article className="js-bento-card md:col-span-7 p-7 rounded-[22px] border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.04] backdrop-blur-xl relative overflow-hidden group" style={{transformStyle: 'preserve-3d'}}>
<div className="js-bento-spot absolute inset-[-120px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.14), transparent 55%)'}}></div>
<h3 className="text-neutral-900 dark:text-white font-medium text-xl mb-2">
                            Artisan Flower
                        </h3>
<p className="text-neutral-500 dark:text-neutral-400 text-sm max-w-md font-light">
                            Experience the purest expression of the plant with our top-shelf, slow-cured flower.
                        </p>
<div className="mt-6 flex items-center gap-3 text-xs text-neutral-600 dark:text-white/70">
<span className="px-3 py-1 rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5">Indica</span>
<span className="px-3 py-1 rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5">Sativa</span>
<span className="px-3 py-1 rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5">Hybrid</span>
</div>
<img alt="Premium Flower" className="mt-8 h-40 w-full object-cover rounded-xl border border-neutral-200 dark:border-white/10 opacity-80 pointer-events-none select-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d32ec840-7040-4e52-bb4e-b2a6c93e1814_1600w.jpg"/>
</article>
<article className="js-bento-card md:col-span-5 p-7 rounded-[22px] border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.04] backdrop-blur-xl relative overflow-hidden group" style={{transformStyle: 'preserve-3d'}}>
<div className="js-bento-spot absolute inset-[-120px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.14), transparent 55%)'}}></div>
<h3 className="text-neutral-900 dark:text-white font-medium text-xl mb-2">
                            Potent Extracts
                        </h3>
<p className="text-neutral-500 dark:text-neutral-400 text-sm font-light">
                            Solventless rosins and live resins.
                        </p>
<div className="mt-8 grid grid-cols-2 gap-4">
<div className="rounded-xl border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5 p-4">
<p className="text-neutral-900 dark:text-white text-sm font-medium">99% THC</p>
<p className="text-neutral-500 dark:text-white/50 text-xs mt-1 font-light">Potency</p>
</div>
<div className="rounded-xl border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5 p-4">
<p className="text-neutral-900 dark:text-white text-sm font-medium">Full Spec</p>
<p className="text-neutral-500 dark:text-white/50 text-xs mt-1 font-light">Terpene Rich</p>
</div>
</div>
</article>
<article className="js-bento-card md:col-span-5 p-7 rounded-[22px] border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.04] backdrop-blur-xl relative overflow-hidden group" style={{transformStyle: 'preserve-3d'}}>
<div className="js-bento-spot absolute inset-[-120px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.14), transparent 55%)'}}></div>
<h3 className="text-neutral-900 dark:text-white font-medium text-xl mb-2">
                            Edibles &amp; Tinctures
                        </h3>
<p className="text-neutral-500 dark:text-neutral-400 text-sm font-light">
                            Precisely dosed, chef-crafted consumables.
                        </p>
<div className="mt-7 flex flex-wrap gap-3 text-xs text-neutral-600 dark:text-white/70">
<span className="px-3 py-1 rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5">Vegan</span>
<span className="px-3 py-1 rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5">Fast Acting</span>
</div>
<img alt="Edibles" className="mt-8 h-40 w-full object-cover rounded-xl border border-neutral-200 dark:border-white/10 opacity-80 pointer-events-none select-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bc49165b-655c-4598-a8bc-ac2d1370bb45_original.jpg"/>
</article>
<article className="js-bento-card md:col-span-7 p-7 rounded-[22px] border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.04] backdrop-blur-xl relative overflow-hidden group" style={{transformStyle: 'preserve-3d'}}>
<div className="js-bento-spot absolute inset-[-120px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.14), transparent 55%)'}}></div>
<h3 className="text-neutral-900 dark:text-white font-medium text-xl mb-2">
                            Express Delivery
                        </h3>
<p className="text-neutral-500 dark:text-neutral-400 text-sm max-w-md font-light">
                            Get your favorite strains delivered right to your door with discreet, tracked packaging.
                        </p>
<div className="mt-7 flex flex-wrap gap-3 text-xs text-neutral-600 dark:text-white/70">
<span className="px-3 py-1 rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5">Discreet</span>
<span className="px-3 py-1 rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5">Same Day</span>
<span className="px-3 py-1 rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5">Tracked</span>
</div>
<img alt="Delivery" className="mt-8 h-40 w-full object-cover rounded-xl border border-neutral-200 dark:border-white/10 opacity-80 pointer-events-none select-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/179181df-09e8-46fd-baf8-453d3b9a84ba_1600w.jpg"/>
</article>
</div>
</div>
</section>

<section className="py-40 px-6 relative overflow-hidden" id="timeline">
<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.02) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'}}></div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-24 js-reveal" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 1s cubic-bezier(0.22, 1, 0.36, 1)'}}>
<div>
<div className="flex items-center gap-3 mb-4">
<div className="h-px w-8 bg-emerald-500"></div>
<p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-500/90">
                                Craft Process
                            </p>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-neutral-900 dark:text-white leading-tight">
                            Botanical
                            <br/>
<span className="text-neutral-400 dark:text-white/30">
                                Assembly
                            </span>
</h2>
</div>
<p className="text-neutral-500 dark:text-neutral-400 max-w-sm text-sm leading-relaxed border-l border-neutral-300 dark:border-white/10 pl-6 font-light">
                        Watch our experts synthesize the perfect product from raw plant to premium extract, locking in flavor profiles at every step.
                    </p>
</div>
<div className="relative pl-6 md:pl-0" id="timeline-track">
<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-neutral-200 dark:bg-white/5 md:-translate-x-px"></div>
<div className="absolute left-6 md:left-1/2 top-0 w-px bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] md:-translate-x-px h-0 origin-top z-10" id="timeline-fill">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_20px_2px_rgba(16,185,129,0.9)] z-20"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 border border-emerald-500/30 rounded-full animate-ping opacity-50"></div>
</div>
<div className="space-y-32 py-12">

<div className="timeline-step relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 opacity-20 blur-[4px] scale-[0.98] transition-all duration-700 ease-out will-change-transform">
<div className="md:text-right md:pr-12 relative order-2 md:order-1">
<div className="inline-block relative">
<h3 className="text-2xl font-medium text-neutral-900 dark:text-white mb-2 tracking-tight">
                                        Harvest &amp; Curing
                                    </h3>
<p className="text-emerald-500/60 text-xs font-mono mb-4 uppercase tracking-widest transition-colors duration-500 js-timeline-shard">
                                        CULT_OP_01 // 14 Days
                                    </p>
<p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed max-w-sm ml-auto font-light">
                                        Raw plants are carefully trimmed and cured in climate-controlled rooms to preserve volatile terpenes and ensure a smooth finish.
                                    </p>
</div>
</div>
<div className="js-timeline-point absolute left-6 md:left-1/2 top-0 w-3 h-3 -ml-1.5 rounded-full border border-neutral-300 dark:border-white/20 bg-white dark:bg-[#020202] z-20 md:top-6 transition-all duration-400" style={{boxShadow: '0 0 0 4px #020202, 0 0 0 5px rgba(255,255,255,0.1)'}}></div>
<div className="pl-12 md:pl-0 order-3 md:order-2">
<div className="js-timeline-visual h-32 w-full md:w-72 bg-neutral-50 dark:bg-white/[0.02] rounded-xl border border-neutral-200 dark:border-white/10 backdrop-blur-md relative overflow-hidden group transition-all duration-500">
<div className="js-scan-beam absolute inset-0 w-full h-[50%]" style={{background: 'linear-gradient(180deg, transparent, rgba(16, 185, 129, 0.2), transparent)'}}></div>
<div className="absolute inset-0 flex items-center justify-center gap-2">
<div className="w-12 h-12 rounded-lg border border-neutral-200 dark:border-white/10 flex items-center justify-center bg-black/5 dark:bg-black/20">
<div className="w-1 h-1 bg-neutral-400 dark:bg-white/40 rounded-full"></div>
</div>
<div className="w-12 h-12 rounded-lg border border-emerald-500/20 flex items-center justify-center bg-emerald-500/5 shadow-[0_0_15px_-5px_rgba(16,185,129,0.3)] text-emerald-500">
<iconify-icon className="animate-pulse" height="20" icon="solar:leaf-linear" width="20"></iconify-icon>
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
<div className="js-timeline-visual h-32 w-full md:w-72 bg-neutral-50 dark:bg-white/[0.02] rounded-xl border border-neutral-200 dark:border-white/10 backdrop-blur-md relative overflow-hidden flex items-center justify-center transition-all duration-500">
<div className="flex gap-[3px] items-end h-12">
<span className="w-1 bg-emerald-500/30 rounded-sm animate-[pulse_2s_ease-in-out_infinite]" style={{height: '40%'}}></span>
<span className="w-1 bg-emerald-500/60 rounded-sm animate-[pulse_2s_ease-in-out_infinite]" style={{height: '80%', animationDelay: '0.1s'}}></span>
<span className="w-1 bg-emerald-500/40 rounded-sm animate-[pulse_2s_ease-in-out_infinite]" style={{height: '60%', animationDelay: '0.2s'}}></span>
<span className="w-1 bg-emerald-500/80 rounded-sm animate-[pulse_2s_ease-in-out_infinite]" style={{height: '100%', animationDelay: '0.3s'}}></span>
<span className="w-1 bg-emerald-500/50 rounded-sm animate-[pulse_2s_ease-in-out_infinite]" style={{height: '50%', animationDelay: '0.4s'}}></span>
</div>
</div>
</div>
</div>
<div className="js-timeline-point absolute left-6 md:left-1/2 top-0 w-3 h-3 -ml-1.5 rounded-full border border-neutral-300 dark:border-white/20 bg-white dark:bg-[#020202] z-20 md:top-6 transition-all duration-400" style={{boxShadow: '0 0 0 4px #020202, 0 0 0 5px rgba(255,255,255,0.1)'}}></div>
<div className="pl-12 md:pl-0 order-2 md:order-2">
<div className="inline-block relative">
<h3 className="text-2xl font-medium text-neutral-900 dark:text-white mb-2 tracking-tight">
                                        Extraction
                                    </h3>
<p className="text-emerald-500/60 text-xs font-mono mb-4 uppercase tracking-widest transition-colors duration-500 js-timeline-shard">
                                        EXTRACT_X9 // Solventless
                                    </p>
<p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed max-w-sm font-light">
                                        Using pure pressure and temperature, we extract the essence of the plant without harsh chemicals, maintaining the full spectrum profile.
                                    </p>
</div>
</div>
</div>

<div className="timeline-step relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 opacity-20 blur-[4px] scale-[0.98] transition-all duration-700 ease-out will-change-transform">
<div className="md:text-right md:pr-12 relative order-2 md:order-1">
<div className="inline-block relative">
<h3 className="text-2xl font-medium text-neutral-900 dark:text-white mb-2 tracking-tight">
                                        Quality Control
                                    </h3>
<p className="text-emerald-500/60 text-xs font-mono mb-4 uppercase tracking-widest transition-colors duration-500 js-timeline-shard">
                                        LAB_TEST_PASS // 100%
                                    </p>
<p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed max-w-sm ml-auto font-light">
                                        Every batch is rigorously tested for potency, purity, and terpene profile before hitting our shelves.
                                    </p>
</div>
</div>
<div className="js-timeline-point absolute left-6 md:left-1/2 top-0 w-3 h-3 -ml-1.5 rounded-full border border-neutral-300 dark:border-white/20 bg-white dark:bg-[#020202] z-20 md:top-6 transition-all duration-400" style={{boxShadow: '0 0 0 4px #020202, 0 0 0 5px rgba(255,255,255,0.1)'}}></div>
<div className="pl-12 md:pl-0 order-3 md:order-2">
<div className="js-timeline-visual h-32 w-full md:w-72 bg-neutral-50 dark:bg-white/[0.02] rounded-xl border border-neutral-200 dark:border-white/10 backdrop-blur-md relative overflow-hidden transition-all duration-500">
<div className="absolute inset-0 flex items-center justify-center opacity-60">
<div className="relative w-24 h-24">
<div className="absolute inset-0 border border-dashed border-neutral-400 dark:border-white/20 rounded-full animate-[spin_8s_linear_infinite]"></div>
<div className="absolute inset-4 border border-neutral-300 dark:border-white/10 rounded-full animate-[spin_4s_linear_infinite_reverse]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]"></div>
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

<section className="py-40 px-6 max-w-6xl mx-auto" id="pricing">
<div className="mb-20 text-center js-reveal" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 1s cubic-bezier(0.22, 1, 0.36, 1)'}}>
<p className="text-xs font-medium text-emerald-500 uppercase tracking-[0.2em] mb-4">
                    Membership
                </p>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-5 text-gray-900 dark:text-white">
                    Join the Club
                </h2>
<p className="text-gray-500 dark:text-gray-400 text-base font-light max-w-md mx-auto">
                    Exclusive perks for our most loyal patrons.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto js-reveal" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 1s cubic-bezier(0.22, 1, 0.36, 1) 0.1s'}}>
<div className="relative p-8 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-neutral-100 dark:border-white/[0.06] flex flex-col">
<h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">Casual</h3>
<div className="text-3xl font-semibold text-neutral-900 dark:text-white mb-6">
                        $0<span className="text-base font-normal text-neutral-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-500 font-light">
<iconify-icon className="text-emerald-500" height="16" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon> 5% Cash back
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-500 font-light">
<iconify-icon className="text-emerald-500" height="16" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon> Birthday Gram
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-500 font-light">
<iconify-icon className="text-emerald-500" height="16" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon> Newsletter
                        </li>
</ul>
<button className="w-full py-2.5 rounded-full border border-neutral-200 dark:border-white/10 text-sm font-medium text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors">
                        Join Free
                    </button>
</div>
<div className="relative p-8 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-emerald-500/50 flex flex-col shadow-2xl shadow-emerald-500/5 md:scale-105 z-10" id="float-card">
<div className="absolute top-0 right-0 p-3">
<span className="bg-emerald-500 text-white text-xs font-semibold px-2 py-1 rounded-full uppercase tracking-wide">
                            Popular
                        </span>
</div>
<h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">Connoisseur</h3>
<div className="text-3xl font-semibold text-neutral-900 dark:text-white mb-6">
                        $29<span className="text-base font-normal text-neutral-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-500 font-light">
<iconify-icon className="text-emerald-500" height="16" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon> 15% Cash back
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-500 font-light">
<iconify-icon className="text-emerald-500" height="16" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon> Early Access to Drops
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-500 font-light">
<iconify-icon className="text-emerald-500" height="16" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon> VIP Events
                        </li>
</ul>
<button className="w-full py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-sm font-semibold text-white transition-colors shadow-lg shadow-emerald-500/20">
                        Upgrade
                    </button>
</div>
<div className="relative p-8 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-neutral-100 dark:border-white/[0.06] flex flex-col">
<h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">High Roller</h3>
<div className="text-3xl font-semibold text-neutral-900 dark:text-white mb-6">Custom</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-500 font-light">
<iconify-icon className="text-emerald-500" height="16" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon> Dedicated Concierge
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-500 font-light">
<iconify-icon className="text-emerald-500" height="16" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon> Private Tastings
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-500 font-light">
<iconify-icon className="text-emerald-500" height="16" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon> Free Delivery
                        </li>
</ul>
<button className="w-full py-2.5 rounded-full border border-neutral-200 dark:border-white/10 text-sm font-medium text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors">
                        Inquire
                    </button>
</div>
</div>
</section>

<section className="py-0 px-0 relative" id="cta">
<div className="cta-scroll-wrapper relative" style={{height: '300vh'}}>
<div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#fafafa] dark:bg-[#020202] transition-colors duration-500 group/door">
<div className="absolute inset-0 z-0 pointer-events-none opacity-0" id="cta-fog">
<div className="absolute inset-0" style={{background: 'radial-gradient(ellipse 900px 600px at 50% 50%,rgba(16,185,129,0.12),transparent 65%)'}}></div>
<div className="absolute inset-0" style={{background: 'radial-gradient(ellipse 600px 800px at 50% 55%,rgba(255,255,255,0.04),transparent 60%)'}}></div>
</div>
<div className="absolute top-0 left-0 w-1/2 h-full z-20 pointer-events-none" id="cta-door-left" style={{willChange: 'transform'}}>
<div className="h-full w-full relative overflow-hidden transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/door:-translate-x-[18%]" style={{background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(0, 0, 0, 0.7))', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', borderRight: '1px solid rgba(255,255,255,0.1)'}}>
<div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%270 0 200 200%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.65%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E\')'}}></div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-24 bg-white/20 rounded-l-full"></div>
<div className="absolute inset-0 opacity-0" id="cta-sweep-left" style={{background: 'linear-gradient(105deg,transparent 30%,rgba(255,255,255,0.08) 50%,transparent 70%)'}}></div>
</div>
</div>
<div className="absolute top-0 right-0 w-1/2 h-full z-20 pointer-events-none" id="cta-door-right" style={{willChange: 'transform'}}>
<div className="h-full w-full relative overflow-hidden transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/door:translate-x-[18%]" style={{background: 'linear-gradient(225deg, rgba(16, 185, 129, 0.08), rgba(0, 0, 0, 0.7))', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', borderLeft: '1px solid rgba(255,255,255,0.1)'}}>
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
<span className="text-xs font-semibold text-emerald-400 uppercase tracking-[0.2em]">
                                Deliveries Active
                            </span>
</div>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-neutral-900 dark:text-white mb-6">
                            Ready to elevate?
                        </h2>
<p className="text-neutral-500 dark:text-neutral-400 text-lg mb-10 max-w-lg leading-relaxed font-light">
                            Join Flava Depot today and discover the finest cannabis products available.
                        </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="h-12 px-8 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black font-semibold text-sm hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-[0_0_20px_-5px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2">
                                Shop Now
                            </button>
<button className="h-12 px-8 rounded-full border border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-white/5 text-neutral-900 dark:text-white font-medium text-sm hover:bg-white/80 dark:hover:bg-white/10 transition-colors duration-300 backdrop-blur-md flex items-center justify-center gap-2 group/btn">
<span>Join Rewards</span>
<iconify-icon className="text-neutral-400 dark:text-white/40 group-hover/btn:text-neutral-900 dark:group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all duration-300" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-200 dark:border-white/[0.04] bg-neutral-50 dark:bg-[#020202] py-20 px-6 transition-colors duration-700">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-4 h-4 bg-emerald-500 rounded-md"></div>
<span className="font-medium text-sm text-neutral-900 dark:text-white">Flava Depot</span>
</div>
<p className="text-neutral-500 dark:text-neutral-600 text-sm font-light max-w-xs">
                        Elevating the digital dispensary experience.
                    </p>
</div>
<div className="flex gap-16 text-sm text-neutral-500 dark:text-neutral-500">
<div className="flex flex-col gap-3">
<h4 className="text-neutral-900 dark:text-white font-medium text-xs uppercase tracking-wider mb-1">Menu</h4>
<a className="hover:text-emerald-500 transition-colors duration-300 font-light" href="#">Flower</a>
<a className="hover:text-emerald-500 transition-colors duration-300 font-light" href="#">Extracts</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-neutral-900 dark:text-white font-medium text-xs uppercase tracking-wider mb-1">Company</h4>
<a className="hover:text-emerald-500 transition-colors duration-300 font-light" href="#">About Us</a>
<a className="hover:text-emerald-500 transition-colors duration-300 font-light" href="#">Locations</a>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
