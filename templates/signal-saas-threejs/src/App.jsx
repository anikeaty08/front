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



    (() => {
        'use strict';

        gsap.registerPlugin(ScrollTrigger);

        // -- Lenis Smooth Scroll -----------------------------------
        const lenis = new Lenis({ lerp: 0.12, wheelMultiplier: 1.0, smoothWheel: true });
        lenis.on('scroll', () => ScrollTrigger.update());
        gsap.ticker.add((t) => lenis.raf(t * 1000));
        gsap.ticker.lagSmoothing(0);

        // -- Navigation --------------------------------------------
        const nav = document.getElementById('nav');
        const toggle = document.getElementById('navToggle');
        const menu = document.getElementById('mobileMenu');
        const closeBtn = document.getElementById('mobileClose');
        const mobileLinks = document.querySelectorAll('[data-mobile-link]');

        window.addEventListener('scroll', () => {
            nav.classList.toggle('is-scrolled', window.scrollY > 60);
        }, { passive: true });

        toggle.addEventListener('click', () => menu.classList.add('is-open'));
        closeBtn.addEventListener('click', () => menu.classList.remove('is-open'));
        mobileLinks.forEach(l => l.addEventListener('click', () => menu.classList.remove('is-open')));

        // -- Infinite Marquee (velocity-reactive) ------------------
        class InfiniteMarquee {
            constructor(el) {
                this.el = el;
                this.track = el.querySelector('.marquee__track');
                this.contents = el.querySelectorAll('.marquee__content');
                this.baseSpeed = 0.6;
                this.currentSpeed = this.baseSpeed;
                this.targetSpeed = this.baseSpeed;
                this.position = 0;
                this.singleWidth = 0;
                this.scrollVelocity = 0;
                this.lastScrollY = window.scrollY;
                this.init();
            }
            init() {
                this.measure();
                window.addEventListener('resize', () => this.measure());
                window.addEventListener('scroll', () => {
                    const vel = Math.abs(window.scrollY - this.lastScrollY);
                    this.scrollVelocity = vel;
                    this.lastScrollY = window.scrollY;
                }, { passive: true });
                this.animate();
            }
            measure() { this.singleWidth = this.contents[0].offsetWidth; }
            animate() {
                const boost = Math.min(this.scrollVelocity * 0.5, 14);
                this.targetSpeed = this.baseSpeed + boost;
                this.currentSpeed += (this.targetSpeed - this.currentSpeed) * 0.08;
                this.scrollVelocity *= 0.92;
                this.position -= this.currentSpeed;
                if (Math.abs(this.position) >= this.singleWidth) this.position += this.singleWidth;
                this.track.style.transform = `translate3d(${this.position}px, 0, 0)`;
                requestAnimationFrame(() => this.animate());
            }
        }
        const marqueeEl = document.getElementById('marquee');
        if (marqueeEl) new InfiniteMarquee(marqueeEl);

        // -- Simplex Noise 3D (CPU port for vertex displacement) -----
        const SimplexNoise3D = (() => {
            const F3 = 1.0 / 3.0, G3 = 1.0 / 6.0;
            const grad3 = [
                [1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],
                [1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],
                [0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]
            ];
            const p = [];
            for (let i = 0; i < 256; i++) p[i] = (Math.random() * 256) | 0;
            const perm = new Array(512), permMod12 = new Array(512);
            for (let i = 0; i < 512; i++) { perm[i] = p[i & 255]; permMod12[i] = perm[i] % 12; }
            function dot3(g, x, y, z) { return g[0]*x + g[1]*y + g[2]*z; }
            return function noise(x, y, z) {
                const s = (x + y + z) * F3;
                const i = Math.floor(x + s), j = Math.floor(y + s), k = Math.floor(z + s);
                const t = (i + j + k) * G3;
                const X0 = i - t, Y0 = j - t, Z0 = k - t;
                const x0 = x - X0, y0 = y - Y0, z0 = z - Z0;
                let i1, j1, k1, i2, j2, k2;
                if (x0 >= y0) {
                    if (y0 >= z0) { i1=1;j1=0;k1=0;i2=1;j2=1;k2=0; }
                    else if (x0 >= z0) { i1=1;j1=0;k1=0;i2=1;j2=0;k2=1; }
                    else { i1=0;j1=0;k1=1;i2=1;j2=0;k2=1; }
                } else {
                    if (y0 < z0) { i1=0;j1=0;k1=1;i2=0;j2=1;k2=1; }
                    else if (x0 < z0) { i1=0;j1=1;k1=0;i2=0;j2=1;k2=1; }
                    else { i1=0;j1=1;k1=0;i2=1;j2=1;k2=0; }
                }
                const x1 = x0-i1+G3, y1 = y0-j1+G3, z1 = z0-k1+G3;
                const x2 = x0-i2+2*G3, y2 = y0-j2+2*G3, z2 = z0-k2+2*G3;
                const x3 = x0-1+3*G3, y3 = y0-1+3*G3, z3 = z0-1+3*G3;
                const ii = i & 255, jj = j & 255, kk = k & 255;
                const gi0 = permMod12[ii + perm[jj + perm[kk]]];
                const gi1 = permMod12[ii+i1 + perm[jj+j1 + perm[kk+k1]]];
                const gi2 = permMod12[ii+i2 + perm[jj+j2 + perm[kk+k2]]];
                const gi3 = permMod12[ii+1 + perm[jj+1 + perm[kk+1]]];
                let n0, n1, n2, n3;
                let t0 = 0.6 - x0*x0 - y0*y0 - z0*z0;
                n0 = t0 < 0 ? 0 : (t0 *= t0, t0 * t0 * dot3(grad3[gi0], x0, y0, z0));
                let t1 = 0.6 - x1*x1 - y1*y1 - z1*z1;
                n1 = t1 < 0 ? 0 : (t1 *= t1, t1 * t1 * dot3(grad3[gi1], x1, y1, z1));
                let t2 = 0.6 - x2*x2 - y2*y2 - z2*z2;
                n2 = t2 < 0 ? 0 : (t2 *= t2, t2 * t2 * dot3(grad3[gi2], x2, y2, z2));
                let t3 = 0.6 - x3*x3 - y3*y3 - z3*z3;
                n3 = t3 < 0 ? 0 : (t3 *= t3, t3 * t3 * dot3(grad3[gi3], x3, y3, z3));
                return 32.0 * (n0 + n1 + n2 + n3);
            };
        })();

        // -- Three.js Scene (Editor-Compatible PBR) -----------------
        class SignalScene {
            constructor() {
                this.canvas = document.getElementById('webgl');
                this.width = window.innerWidth;
                this.height = window.innerHeight;
                this.mouse = { x: 0, y: 0, tx: 0, ty: 0 };
                this.scroll = { current: 0, target: 0 };
                this.init();
                this.createLights();
                this.createBlob();
                this.createWireframe();
                this.createParticles();
                this.createFloatingShapes();
                this.setupEvents();
                this.animate();
            }

            init() {
                this.scene = new THREE.Scene();
                this.scene.name = 'SignalScene';
                this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 100);
                this.camera.position.set(0, 0, 5.5);
                this.camera.name = 'MainCamera';
                this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });
                this.renderer.setSize(this.width, this.height);
                this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                this.clock = new THREE.Clock();
            }

            createLights() {
                const ambLight = new THREE.AmbientLight(0xffeedd, 0.7);
                ambLight.name = 'AmbientFill';
                this.scene.add(ambLight);

                const dirLight = new THREE.DirectionalLight(0xffd5b0, 0.25);
                dirLight.position.set(2, 3, 5);
                dirLight.name = 'MainDirectionalLight';
                this.scene.add(dirLight);

                const dirLight2 = new THREE.DirectionalLight(0xc9835a, 0.1);
                dirLight2.position.set(-3, -1, 2);
                dirLight2.name = 'FillDirectionalLight';
                this.scene.add(dirLight2);

                const pointLight = new THREE.PointLight(0xc9835a, 0.15, 20);
                pointLight.position.set(-2, 1, 3);
                pointLight.name = 'TerracottaAccentLight';
                this.scene.add(pointLight);
                this.pointLight = pointLight;
            }

            createBlob() {
                const geo = new THREE.IcosahedronGeometry(1.8, 18);
                const posAttr = geo.getAttribute('position');
                const normAttr = geo.getAttribute('normal');
                this.blobOrigPos = new Float32Array(posAttr.array);
                this.blobOrigNorm = new Float32Array(normAttr.array);
                const colorArr = new Float32Array(posAttr.count * 3);
                geo.setAttribute('color', new THREE.BufferAttribute(colorArr, 3));

                this.colorDark = new THREE.Color('#1e1008');
                this.colorMid = new THREE.Color('#c9835a');
                this.colorLight = new THREE.Color('#f0ede6');

                this.blobMat = new THREE.MeshPhysicalMaterial({
                    vertexColors: true,
                    emissive: 0x150a03,
                    emissiveIntensity: 0.15,
                    metalness: 0.02,
                    roughness: 0.65,
                    clearcoat: 0.25,
                    clearcoatRoughness: 0.3,
                    transparent: true,
                    opacity: 0.80,
                    depthWrite: false,
                });
                this.blob = new THREE.Mesh(geo, this.blobMat);
                this.blob.name = 'MainSphere';
                this.blob.position.set(2.2, 0.2, 0);
                this.scene.add(this.blob);
            }

            createWireframe() {
                const geo = new THREE.IcosahedronGeometry(1.84, 6);
                const mat = new THREE.MeshBasicMaterial({
                    color: new THREE.Color('#c9835a'), wireframe: true,
                    transparent: true, opacity: 0.05, depthWrite: false,
                });
                this.wireframe = new THREE.Mesh(geo, mat);
                this.wireframe.name = 'WireframeOverlay';
                this.wireframe.position.copy(this.blob.position);
                this.scene.add(this.wireframe);
            }

            createParticles() {
                const count = 1800;
                const positions = new Float32Array(count * 3);
                for (let i = 0; i < count; i++) {
                    const r = 6 + Math.random() * 12;
                    const theta = Math.random() * Math.PI * 2;
                    const phi = Math.acos(2 * Math.random() - 1);
                    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
                    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
                    positions[i * 3 + 2] = r * Math.cos(phi);
                }
                const geo = new THREE.BufferGeometry();
                geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
                const mat = new THREE.PointsMaterial({
                    size: 0.5, color: new THREE.Color('#c9835a'),
                    transparent: true, opacity: 0.35, sizeAttenuation: true, depthWrite: false,
                });
                this.particles = new THREE.Points(geo, mat);
                this.particles.name = 'ParticleField';
                this.scene.add(this.particles);
            }

            createFloatingShapes() {
                this.floaters = [];
                const shapes = [
                    new THREE.OctahedronGeometry(0.12, 0),
                    new THREE.TetrahedronGeometry(0.1, 0),
                    new THREE.IcosahedronGeometry(0.08, 0),
                ];
                const mat = new THREE.MeshBasicMaterial({
                    color: new THREE.Color('#c9835a'), wireframe: true,
                    transparent: true, opacity: 0.15,
                });
                for (let i = 0; i < 14; i++) {
                    const mesh = new THREE.Mesh(shapes[i % shapes.length], mat.clone());
                    mesh.name = 'FloatingShape_' + i;
                    mesh.position.set(
                        (Math.random() - 0.5) * 12,
                        (Math.random() - 0.5) * 10,
                        (Math.random() - 0.5) * 6 - 2
                    );
                    mesh.userData = {
                        speedX: (Math.random() - 0.5) * 0.3,
                        speedY: (Math.random() - 0.5) * 0.3,
                        origY: mesh.position.y,
                        phase: Math.random() * Math.PI * 2,
                    };
                    this.floaters.push(mesh);
                    this.scene.add(mesh);
                }
            }

            setupEvents() {
                window.addEventListener('mousemove', (e) => {
                    this.mouse.tx = (e.clientX / this.width) * 2 - 1;
                    this.mouse.ty = -(e.clientY / this.height) * 2 + 1;
                });
                window.addEventListener('resize', () => {
                    this.width = window.innerWidth;
                    this.height = window.innerHeight;
                    this.camera.aspect = this.width / this.height;
                    this.camera.updateProjectionMatrix();
                    this.renderer.setSize(this.width, this.height);
                });
                ScrollTrigger.create({
                    trigger: document.body, start: 'top top', end: 'bottom bottom',
                    onUpdate: (self) => { this.scroll.target = self.progress; },
                });
            }

            displaceBlob(time, intensity, speed, mx, my) {
                const geo = this.blob.geometry;
                const posArr = geo.getAttribute('position').array;
                const colorArr = geo.getAttribute('color').array;
                const origPos = this.blobOrigPos;
                const origNorm = this.blobOrigNorm;
                const count = geo.getAttribute('position').count;
                const noise = SimplexNoise3D;
                const ts = time * speed;
                const ts06 = ts * 0.6;
                const ts03 = ts * 0.3;
                const i50 = intensity * 0.5;
                const i25 = intensity * 0.25;
                const th = time * 0.5;
                const t3 = time * 0.3;

                const dr = this.colorDark.r, dg = this.colorDark.g, db = this.colorDark.b;
                const mr = this.colorMid.r - dr, mg = this.colorMid.g - dg, mb = this.colorMid.b - db;
                const cr = this.colorLight.r, cg = this.colorLight.g, cb = this.colorLight.b;
                const tr = this.colorMid.r, tg = this.colorMid.g, tb = this.colorMid.b;

                const camPos = this.camera.position;
                const blobPos = this.blob.position;
                const cdx0 = camPos.x - blobPos.x;
                const cdy0 = camPos.y - blobPos.y;
                const cdz0 = camPos.z - blobPos.z;
                const camLen = Math.sqrt(cdx0 * cdx0 + cdy0 * cdy0 + cdz0 * cdz0);
                const cdx = cdx0 / camLen, cdy = cdy0 / camLen, cdz = cdz0 / camLen;

                const qx = -this.blob.quaternion.x;
                const qy = -this.blob.quaternion.y;
                const qz = -this.blob.quaternion.z;
                const qw = this.blob.quaternion.w;

                const tx = 2 * (qy * cdz - qz * cdy);
                const ty = 2 * (qz * cdx - qx * cdz);
                const tz = 2 * (qx * cdy - qy * cdx);
                const ovdx = cdx + qw * tx + (qy * tz - qz * ty);
                const ovdy = cdy + qw * ty + (qz * tx - qx * tz);
                const ovdz = cdz + qw * tz + (qx * ty - qy * tx);

                for (let i = 0; i < count; i++) {
                    const i3 = i * 3;
                    const ox = origPos[i3], oy = origPos[i3+1], oz = origPos[i3+2];
                    const nx = origNorm[i3], ny = origNorm[i3+1], nz = origNorm[i3+2];

                    const n1 = noise(ox*0.8+ts, oy*0.8+ts, oz*0.8+ts) * intensity;
                    const n2 = noise(ox*1.6+ts06, oy*1.6+ts06, oz*1.6+ts06) * i50;
                    const n3 = noise(ox*3.2+ts03, oy*3.2+ts03, oz*3.2+ts03) * i25;
                    let disp = n1 + n2 + n3;
                    disp += mx * Math.sin(oy * 2.5 + th) * 0.1;
                    disp += my * Math.cos(ox * 2.5 + t3) * 0.1;

                    posArr[i3]     = ox + nx * disp;
                    posArr[i3 + 1] = oy + ny * disp;
                    posArr[i3 + 2] = oz + nz * disp;

                    const ct = disp < -0.15 ? 0 : disp > 0.35 ? 1 : (disp + 0.15) * 2;
                    let colR = dr + mr * ct;
                    let colG = dg + mg * ct;
                    let colB = db + mb * ct;

                    const dot = nx * ovdx + ny * ovdy + nz * ovdz;
                    const fBase = 1.0 - Math.abs(dot);
                    const fresnel = fBase * fBase * fBase;

                    const f35 = fresnel * 0.35;
                    const f1 = 1.0 - f35;
                    colR = colR * f1 + cr * f35;
                    colG = colG * f1 + cg * f35;
                    colB = colB * f1 + cb * f35;

                    const f25 = fresnel * 0.25;
                    colR += tr * f25;
                    colG += tg * f25;
                    colB += tb * f25;

                    const fakeAlpha = 0.82 + fresnel * 0.18;
                    colR *= fakeAlpha;
                    colG *= fakeAlpha;
                    colB *= fakeAlpha;

                    colorArr[i3]     = colR;
                    colorArr[i3 + 1] = colG;
                    colorArr[i3 + 2] = colB;
                }
                geo.getAttribute('position').needsUpdate = true;
                geo.getAttribute('color').needsUpdate = true;
            }

            animate() {
                requestAnimationFrame(() => this.animate());
                const t = this.clock.getElapsedTime();

                this.mouse.x += (this.mouse.tx - this.mouse.x) * 0.04;
                this.mouse.y += (this.mouse.ty - this.mouse.y) * 0.04;
                this.scroll.current += (this.scroll.target - this.scroll.current) * 0.06;

                const sp = this.scroll.current;
                const intensity = 0.38 + Math.sin(sp * Math.PI * 2) * 0.12;

                this.displaceBlob(t, intensity, 0.22, this.mouse.x, this.mouse.y);

                this.blob.position.x = 2.2 - sp * 4.4;
                this.blob.position.y = 0.2 + Math.sin(sp * Math.PI) * 0.8;

                const scale = 1.0 + Math.sin(sp * Math.PI) * 0.25;
                this.blob.scale.setScalar(scale);

                this.blob.rotation.x = t * 0.06 + this.mouse.y * 0.3;
                this.blob.rotation.y = t * 0.09 + this.mouse.x * 0.3;

                const opacityCurve = 1.0 - Math.sin(sp * Math.PI) * 0.3;
                this.blobMat.opacity = 0.80 * opacityCurve;

                this.wireframe.position.copy(this.blob.position);
                this.wireframe.rotation.copy(this.blob.rotation);
                this.wireframe.scale.copy(this.blob.scale);
                this.wireframe.material.opacity = 0.05 * opacityCurve;

                this.pointLight.position.set(
                    this.blob.position.x - 2,
                    this.blob.position.y + 1,
                    3
                );

                this.particles.rotation.y = t * 0.015;
                this.particles.rotation.x = t * 0.008 + sp * 0.3;

                this.floaters.forEach((f) => {
                    const d = f.userData;
                    f.rotation.x = t * d.speedX;
                    f.rotation.y = t * d.speedY;
                    f.position.y = d.origY + Math.sin(t * 0.5 + d.phase) * 0.3;
                });

                this.renderer.render(this.scene, this.camera);
            }
        }
        if (typeof THREE !== 'undefined') new SignalScene();

        // -- Feature Card Spotlight --------------------------------
        document.querySelectorAll('.feature-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                card.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
                card.style.setProperty('--my', (e.clientY - rect.top) + 'px');
            });
        });

        // -- Platform Chart Bars -----------------------------------
        function createChartBars() {
            const chart = document.getElementById('platformChart');
            if (!chart) return;
            for (let i = 0; i < 24; i++) {
                const bar = document.createElement('div');
                bar.className = 'platform__bar';
                bar.style.height = (20 + Math.random() * 80) + '%';
                bar.style.opacity = 0.3 + Math.random() * 0.4;
                chart.appendChild(bar);
            }
        }
        createChartBars();

        // -- Magnetic Buttons --------------------------------------
        function initMagneticButtons() {
            if (matchMedia('(hover: none)').matches) return;
            document.querySelectorAll('.btn').forEach(btn => {
                btn.addEventListener('mousemove', (e) => {
                    const rect = btn.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    gsap.to(btn, { x: x * 0.15, y: y * 0.15, duration: 0.3, ease: 'power2.out' });
                });
                btn.addEventListener('mouseleave', () => {
                    gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
                });
            });
        }

        // -- Pricing Card Tilt -------------------------------------
        function initPricingTilt() {
            if (matchMedia('(hover: none)').matches) return;
            document.querySelectorAll('.pricing-card').forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width - 0.5;
                    const y = (e.clientY - rect.top) / rect.height - 0.5;
                    gsap.to(card, {
                        rotateY: x * 8, rotateX: -y * 8,
                        duration: 0.4, ease: 'power2.out',
                        transformPerspective: 600,
                    });
                });
                card.addEventListener('mouseleave', () => {
                    gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
                });
            });
        }

        // -- Section Animations ------------------------------------
        function initAnimations() {
            // Hero entrance — fast and punchy
            const heroTl = gsap.timeline({ delay: 0.5 });
            heroTl
                .fromTo('.hero__badge', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' })
                .fromTo('.hero__title', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.15')
                .fromTo('.hero__subtitle', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: 'power3.out' }, '-=0.25')
                .fromTo('.hero__actions .btn--primary', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' }, '-=0.2')
                .fromTo('.hero__actions .btn--ghost', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' }, '-=0.3');

            // Feature cards -- spotlight entrance
            gsap.utils.toArray('.feature-card').forEach((card, i) => {
                gsap.fromTo(card,
                    { y: 40, opacity: 0 },
                    {
                        y: 0, opacity: 1, duration: 0.8, delay: i * 0.1,
                        ease: 'power3.out',
                        scrollTrigger: { trigger: card, start: 'top 88%' },
                    }
                );
            });

            // Platform preview -- clip-path reveal
            gsap.fromTo('#platformFrame',
                { clipPath: 'inset(20% 20% 20% 20%)' },
                {
                    clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4,
                    ease: 'power3.inOut',
                    scrollTrigger: { trigger: '#platformFrame', start: 'top 80%' },
                }
            );
            gsap.utils.toArray('.platform__callout').forEach((el, i) => {
                gsap.fromTo(el,
                    { opacity: 0, x: i === 2 ? -20 : 20 },
                    {
                        opacity: 1, x: i === 2 ? '-100%' : '100%',
                        duration: 0.8, delay: 0.8 + i * 0.2,
                        ease: 'power3.out',
                        scrollTrigger: { trigger: '#platformFrame', start: 'top 75%' },
                    }
                );
            });

            // Metrics -- odometer counter
            gsap.utils.toArray('.metrics__number').forEach(el => {
                const endVal = parseFloat(el.dataset.count);
                const suffix = el.dataset.suffix || '';
                const prefix = el.dataset.prefix || '';
                const isFloat = endVal % 1 !== 0;
                ScrollTrigger.create({
                    trigger: el, start: 'top 90%', once: true,
                    onEnter: () => {
                        gsap.to({ val: 0 }, {
                            val: endVal, duration: 2.2, ease: 'power2.out',
                            onUpdate: function() {
                                const v = this.targets()[0].val;
                                el.textContent = prefix + (isFloat ? v.toFixed(1) : Math.round(v)) + suffix;
                            },
                        });
                    },
                });
            });

            // Steps -- progressive fill (connectors stay visible behind icons)
            const stepsGrid = document.getElementById('stepsGrid');
            if (stepsGrid) {
                // Set initial states: connectors visible, content hidden
                gsap.set(stepsGrid.querySelectorAll('.step__icon, .step__number, .step__title, .step__desc'), { opacity: 0, y: 30 });
                gsap.set(stepsGrid.querySelectorAll('.step__connector'), { opacity: 1 });

                ScrollTrigger.create({
                    trigger: stepsGrid, start: 'top 75%', once: true,
                    onEnter: () => {
                        const steps = stepsGrid.querySelectorAll('.step');
                        steps.forEach((step, i) => {
                            const delay = i * 0.3;
                            // Animate icon first
                            gsap.fromTo(step.querySelector('.step__icon'),
                                { y: 30, opacity: 0, scale: 0.8 },
                                { y: 0, opacity: 1, scale: 1, duration: 0.6, delay: delay, ease: 'back.out(1.4)' }
                            );
                            // Then text content
                            gsap.fromTo(step.querySelectorAll('.step__number, .step__title, .step__desc'),
                                { y: 20, opacity: 0 },
                                { y: 0, opacity: 1, duration: 0.6, delay: delay + 0.15, ease: 'power3.out', stagger: 0.06 }
                            );
                            // Activate connector fill after icon lands
                            setTimeout(() => step.classList.add('is-active'), (delay + 0.4) * 1000);
                        });
                    },
                });
            }

            // Testimonial -- parallax quote mark
            gsap.fromTo('.testimonial__mark',
                { y: 0 },
                {
                    y: -60, ease: 'none',
                    scrollTrigger: {
                        trigger: '.testimonial', start: 'top bottom', end: 'bottom top', scrub: 1.5,
                    },
                }
            );
            const testTl = gsap.timeline({
                scrollTrigger: { trigger: '.testimonial', start: 'top 78%' },
            });
            testTl
                .fromTo('.testimonial__mark', { scale: 0.6, opacity: 0 }, { scale: 1, opacity: 0.1, duration: 0.8, ease: 'back.out(1.4)' })
                .fromTo('.testimonial__text', { y: 25, opacity: 0, rotateX: -2 }, { y: 0, opacity: 1, rotateX: 0, duration: 1, ease: 'power3.out' }, '-=0.3')
                .fromTo('.testimonial__author', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.4');

            // Pricing preview -- entrance
            gsap.utils.toArray('.pricing-card').forEach((card, i) => {
                gsap.fromTo(card,
                    { y: 50, opacity: 0 },
                    {
                        y: 0, opacity: 1, duration: 0.9, delay: i * 0.15,
                        ease: 'power3.out',
                        scrollTrigger: { trigger: '.pricing-preview__grid', start: 'top 82%' },
                    }
                );
            });

            // CTA entrance
            gsap.fromTo('.cta__title',
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power4.out',
                  scrollTrigger: { trigger: '.cta', start: 'top 75%' } }
            );
            gsap.fromTo('.cta__subtitle',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out',
                  scrollTrigger: { trigger: '.cta', start: 'top 75%' } }
            );
            gsap.fromTo('.cta__form',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7, delay: 0.4, ease: 'power3.out',
                  scrollTrigger: { trigger: '.cta', start: 'top 70%' } }
            );

            // Footer
            gsap.utils.toArray('.footer__grid > *').forEach((el, i) => {
                gsap.fromTo(el,
                    { y: 25, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.7, delay: i * 0.1, ease: 'power2.out',
                      scrollTrigger: { trigger: '.footer', start: 'top 92%' } }
                );
            });

            // Section labels -- draw accent line
            gsap.utils.toArray('.section-label').forEach(label => {
                gsap.fromTo(label,
                    { opacity: 0, x: -20 },
                    { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
                      scrollTrigger: { trigger: label, start: 'top 90%' } }
                );
            });
        }

        // -- Parallax (selective — bg numbers, titles, testimonial, CTA) --
        function initParallax() {
            // --- Background numbers (deep layer, slow drift) ---
            gsap.utils.toArray('.section__bg-number').forEach((el) => {
                gsap.fromTo(el,
                    { y: 0 },
                    {
                        y: -120, ease: 'none',
                        scrollTrigger: {
                            trigger: el.parentElement,
                            start: 'top bottom', end: 'bottom top', scrub: 1,
                        },
                    }
                );
            });

            // --- Testimonial layers (quote mark has its own in initAnimations) ---
            gsap.fromTo('.testimonial__text',
                { y: 45 },
                { y: -25, ease: 'none',
                  scrollTrigger: { trigger: '.testimonial__text', start: 'top bottom', end: 'bottom top', scrub: 1.2 } }
            );
            gsap.fromTo('.testimonial__author',
                { y: 25 },
                { y: -10, ease: 'none',
                  scrollTrigger: { trigger: '.testimonial__author', start: 'top bottom', end: 'bottom top', scrub: 1.8 } }
            );

            // --- CTA (title fastest, form slowest — layered depth) ---
            gsap.fromTo('.cta__title',
                { y: 70 },
                { y: -35, ease: 'none',
                  scrollTrigger: { trigger: '.cta__title', start: 'top bottom', end: 'bottom top', scrub: 0.8 } }
            );
            gsap.fromTo('.cta__subtitle',
                { y: 45 },
                { y: -20, ease: 'none',
                  scrollTrigger: { trigger: '.cta__subtitle', start: 'top bottom', end: 'bottom top', scrub: 1.2 } }
            );
            gsap.fromTo('.cta__form',
                { y: 30 },
                { y: -10, ease: 'none',
                  scrollTrigger: { trigger: '.cta__form', start: 'top bottom', end: 'bottom top', scrub: 1.8 } }
            );
        }

        // -- Scroll Progress Bar -----------------------------------
        function initScrollProgress() {
            const bar = document.getElementById('scrollProgress');
            if (!bar) return;
            ScrollTrigger.create({
                trigger: document.body,
                start: 'top top',
                end: 'bottom bottom',
                onUpdate: (self) => {
                    bar.style.width = (self.progress * 100) + '%';
                },
            });
        }

        // -- Boot --------------------------------------------------
        document.addEventListener('DOMContentLoaded', () => {
            requestAnimationFrame(() => {
                initAnimations();
                initMagneticButtons();
                initPricingTilt();
                initParallax();
                initScrollProgress();
            });
        });

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
      
<a className="skip-link" href="#main-content">Skip to main content</a>
<div className="grain"></div>
<canvas aria-label="Animated 3D visualization" id="webgl" role="img"></canvas>
<div className="scroll-progress" id="scrollProgress"></div>

<nav className="nav" id="nav">
<div className="container nav__inner">
<a className="nav__logo" href="/home">SIGNAL</a>
<div className="nav__links">
<a href="/features">Features</a>
<a href="/pricing">Pricing</a>
<a href="/integrations">Integrations</a>
<a href="/blog">Blog</a>
<a href="/about">About</a>
<a href="/changelog">Changelog</a>
</div>
<a className="nav__cta" href="/contact">
                Get Started
                <span className="iconify" data-icon="solar:arrow-right-linear" data-width="14"></span>
</a>
<button aria-label="Open menu" className="nav__toggle" id="navToggle">
<span className="iconify" data-icon="solar:hamburger-menu-linear" data-width="24"></span>
</button>
</div>
</nav>

<div className="mobile-menu" id="mobileMenu">
<div className="mobile-menu__header">
<a className="nav__logo" href="/home">SIGNAL</a>
<button aria-label="Close menu" className="mobile-menu__close" id="mobileClose">
<span className="iconify" data-icon="solar:close-circle-linear" data-width="26"></span>
</button>
</div>
<nav className="mobile-menu__nav">
<a data-mobile-link="" href="/features">Features</a>
<a data-mobile-link="" href="/pricing">Pricing</a>
<a data-mobile-link="" href="/integrations">Integrations</a>
<a data-mobile-link="" href="/blog">Blog</a>
<a data-mobile-link="" href="/about">About</a>
<a data-mobile-link="" href="/changelog">Changelog</a>
<a data-mobile-link="" href="/contact">Contact</a>
</nav>
</div>
<main id="main-content">

<section className="hero" id="hero">
<div className="container">
<div className="hero__content">
<div className="hero__badge">
<span className="hero__badge-dot"></span>
                    Trusted by 500+ engineering teams
                </div>
<h1 className="hero__title" id="heroTitle">
                    Observe Everything.<br/>
                    Miss <span className="hero__title-accent" id="heroAccent">Nothing</span><span className="hero__typed-cursor" id="heroCursor"></span>
</h1>
<p className="hero__subtitle">Real-time observability powered by AI. Ingest logs, metrics, and traces -- detect anomalies before they become incidents.</p>
<div className="hero__actions">
<a className="btn btn--primary btn--large" href="/contact">
                        Start Free Trial
                        <span className="iconify" data-icon="solar:arrow-right-linear" data-width="16"></span>
</a>
<a className="btn btn--ghost btn--large" href="/features">
<span className="iconify" data-icon="solar:play-circle-linear" data-width="18"></span>
                        Watch Demo
                    </a>
</div>
</div>
</div>
</section>

<div className="marquee" id="marquee">
<div className="marquee__track" id="marqueeTrack">
<div className="marquee__content">
<span className="marquee__item">Stripe</span><span className="marquee__sep">•</span>
<span className="marquee__item">Vercel</span><span className="marquee__sep">•</span>
<span className="marquee__item">Linear</span><span className="marquee__sep">•</span>
<span className="marquee__item">Notion</span><span className="marquee__sep">•</span>
<span className="marquee__item">Figma</span><span className="marquee__sep">•</span>
<span className="marquee__item">Shopify</span><span className="marquee__sep">•</span>
<span className="marquee__item">GitLab</span><span className="marquee__sep">•</span>
<span className="marquee__item">Datadog</span><span className="marquee__sep">•</span>
</div>
<div aria-hidden="true" className="marquee__content">
<span className="marquee__item">Stripe</span><span className="marquee__sep">•</span>
<span className="marquee__item">Vercel</span><span className="marquee__sep">•</span>
<span className="marquee__item">Linear</span><span className="marquee__sep">•</span>
<span className="marquee__item">Notion</span><span className="marquee__sep">•</span>
<span className="marquee__item">Figma</span><span className="marquee__sep">•</span>
<span className="marquee__item">Shopify</span><span className="marquee__sep">•</span>
<span className="marquee__item">GitLab</span><span className="marquee__sep">•</span>
<span className="marquee__item">Datadog</span><span className="marquee__sep">•</span>
</div>
</div>
</div>

<section className="section section--dots" id="features">
<div className="container">
<span className="section__bg-number">01</span>
<div className="section-label">Core Capabilities</div>
<div className="section-title" style={{maxWidth: '560px', marginBottom: '2.5rem'}}>Everything you need to keep your systems running flawlessly.</div>
<div className="features__grid" id="featuresGrid">
<div className="feature-card">
<div className="feature-card__spotlight"></div>
<div className="feature-card__icon">
<span className="iconify" data-icon="solar:chart-2-bold-duotone" data-width="22"></span>
</div>
<h3 className="feature-card__title">Real-time Dashboards</h3>
<p className="feature-card__desc">Live infrastructure views with sub-second refresh rates. Custom layouts, drag-and-drop widgets, instant queries.</p>
</div>
<div className="feature-card">
<div className="feature-card__spotlight"></div>
<div className="feature-card__icon">
<span className="iconify" data-icon="solar:shield-warning-bold-duotone" data-width="22"></span>
</div>
<h3 className="feature-card__title">AI Anomaly Detection</h3>
<p className="feature-card__desc">Machine learning models trained on your baseline metrics. Catch issues before alerts fire.</p>
</div>
<div className="feature-card">
<div className="feature-card__spotlight"></div>
<div className="feature-card__icon">
<span className="iconify" data-icon="solar:bell-bing-bold-duotone" data-width="22"></span>
</div>
<h3 className="feature-card__title">Smart Alerting</h3>
<p className="feature-card__desc">Context-aware alerts with automatic deduplication, severity ranking, and intelligent routing to the right on-call.</p>
</div>
<div className="feature-card">
<div className="feature-card__spotlight"></div>
<div className="feature-card__icon">
<span className="iconify" data-icon="solar:routing-2-bold-duotone" data-width="22"></span>
</div>
<h3 className="feature-card__title">Distributed Tracing</h3>
<p className="feature-card__desc">Follow requests across microservices. Identify bottlenecks with flame graphs and service dependency maps.</p>
</div>
<div className="feature-card">
<div className="feature-card__spotlight"></div>
<div className="feature-card__icon">
<span className="iconify" data-icon="solar:document-text-bold-duotone" data-width="22"></span>
</div>
<h3 className="feature-card__title">Log Aggregation</h3>
<p className="feature-card__desc">Centralize logs from every source. Full-text search, pattern recognition, and structured parsing at petabyte scale.</p>
</div>
<div className="feature-card">
<div className="feature-card__spotlight"></div>
<div className="feature-card__icon">
<span className="iconify" data-icon="solar:server-square-cloud-bold-duotone" data-width="22"></span>
</div>
<h3 className="feature-card__title">Infrastructure Mapping</h3>
<p className="feature-card__desc">Auto-discover topology. Visualize your entire stack -- from Kubernetes pods to database clusters -- in one view.</p>
</div>
</div>
</div>
</section>

<div className="divider"><div className="container"><div className="divider__line"></div></div></div>

<section className="section section--solid" id="platform">
<div className="container">
<span className="section__bg-number">02</span>
<div className="platform">
<div className="section-label" style={{justifyContent: 'center'}}>Platform</div>
<h2 className="section-title" style={{textAlign: 'center', maxWidth: '600px', margin: '0 auto 0.8rem'}}>Built for engineers who demand clarity.</h2>
<p className="section-desc" style={{textAlign: 'center', maxWidth: '500px', margin: '0 auto'}}>One unified platform for logs, metrics, traces, and incidents. No context-switching.</p>
<div className="platform__frame" id="platformFrame">
<div className="platform__topbar">
<span className="platform__dot platform__dot--red"></span>
<span className="platform__dot platform__dot--yellow"></span>
<span className="platform__dot platform__dot--green"></span>
<span className="platform__url">app.signal.dev/dashboard</span>
</div>
<div className="platform__body">
<div className="platform__sidebar">
<div className="platform__sidebar-item platform__sidebar-item--active">
<span className="iconify" data-icon="solar:chart-2-linear" data-width="14"></span> Overview
                            </div>
<div className="platform__sidebar-item">
<span className="iconify" data-icon="solar:document-text-linear" data-width="14"></span> Logs
                            </div>
<div className="platform__sidebar-item">
<span className="iconify" data-icon="solar:tuning-2-linear" data-width="14"></span> Metrics
                            </div>
<div className="platform__sidebar-item">
<span className="iconify" data-icon="solar:routing-2-linear" data-width="14"></span> Traces
                            </div>
<div className="platform__sidebar-item">
<span className="iconify" data-icon="solar:bell-linear" data-width="14"></span> Alerts
                            </div>
</div>
<div className="platform__main">
<div className="platform__metrics-row">
<div className="platform__metric-card">
<div className="platform__metric-val">99.98%</div>
<div className="platform__metric-label">Uptime</div>
</div>
<div className="platform__metric-card">
<div className="platform__metric-val" style={{color: 'var(--status-ok)'}}>42ms</div>
<div className="platform__metric-label">P99 Latency</div>
</div>
<div className="platform__metric-card">
<div className="platform__metric-val">2.4B</div>
<div className="platform__metric-label">Events/Day</div>
</div>
<div className="platform__metric-card">
<div className="platform__metric-val" style={{color: 'var(--status-warn)'}}>3</div>
<div className="platform__metric-label">Active Alerts</div>
</div>
</div>
<div className="platform__chart" id="platformChart"></div>
</div>
</div>
<div className="platform__callouts">
<div className="platform__callout platform__callout--1">
<span className="iconify" data-icon="solar:bolt-linear" data-width="12"></span>  AI-powered anomaly detection
                        </div>
<div className="platform__callout platform__callout--2">
<span className="iconify" data-icon="solar:graph-linear" data-width="12"></span>  Real-time data streaming
                        </div>
<div className="platform__callout platform__callout--3">
<span className="iconify" data-icon="solar:shield-check-linear" data-width="12"></span>  SOC 2 compliant
                        </div>
</div>
</div>
</div>
</div>
</section>

<div className="metrics" id="metrics">
<div className="container">
<div className="metrics__grid">
<div className="metrics__item">
<span className="metrics__number" data-count="99.9">0</span>
<span className="metrics__label">% Uptime SLA</span>
</div>
<div className="metrics__item">
<span className="metrics__number" data-count="2" data-suffix="B+">0</span>
<span className="metrics__label">Events Processed Daily</span>
</div>
<div className="metrics__item">
<span className="metrics__number" data-count="500" data-suffix="+">0</span>
<span className="metrics__label">Engineering Teams</span>
</div>
<div className="metrics__item">
<span className="metrics__number" data-count="100" data-prefix="&lt;" data-suffix="ms">0</span>
<span className="metrics__label">Query Latency P99</span>
</div>
</div>
</div>
</div>

<section className="section section--grid" id="howItWorks">
<div className="container">
<span className="section__bg-number">03</span>
<div className="section-label">How It Works</div>
<h2 className="section-title" style={{textAlign: 'center', maxWidth: '500px', margin: '0 auto 3rem'}}>Three steps to complete observability.</h2>
<div className="steps__grid" id="stepsGrid">
<div className="step">
<div className="step__connector"><div className="step__connector-fill"></div></div>
<div className="step__icon">
<span className="iconify" data-icon="solar:plug-circle-bold-duotone" data-width="24"></span>
<div className="step__pulse"></div>
</div>
<div className="step__number">Step 01</div>
<h3 className="step__title">Connect</h3>
<p className="step__desc">Install our lightweight agent or use 120+ native integrations. Data flows in minutes, not days.</p>
</div>
<div className="step">
<div className="step__connector"><div className="step__connector-fill"></div></div>
<div className="step__icon">
<span className="iconify" data-icon="solar:eye-bold-duotone" data-width="24"></span>
<div className="step__pulse"></div>
</div>
<div className="step__number">Step 02</div>
<h3 className="step__title">Detect</h3>
<p className="step__desc">AI models analyze patterns across logs, metrics, and traces. Anomalies surface automatically.</p>
</div>
<div className="step">
<div className="step__icon">
<span className="iconify" data-icon="solar:verified-check-bold-duotone" data-width="24"></span>
<div className="step__pulse"></div>
</div>
<div className="step__number">Step 03</div>
<h3 className="step__title">Resolve</h3>
<p className="step__desc">Get AI-generated root cause analysis, runbooks, and one-click remediation. MTTR drops dramatically.</p>
</div>
</div>
</div>
</section>

<div className="divider"><div className="container"><div className="divider__line"></div></div></div>

<section className="section section--solid" id="testimonial">
<div className="container">
<div className="testimonial">
<span className="testimonial__mark" id="testimonialMark">“</span>
<blockquote className="testimonial__text">SIGNAL cut our mean-time-to-resolution by 73%. The AI root cause analysis is genuinely magic -- it correlates signals we'd never connect manually across our 200+ microservices.</blockquote>
<div className="testimonial__author">
<span className="testimonial__name">Marcus Rivera</span>
<span className="testimonial__role">VP Engineering, Stripe Infrastructure</span>
</div>
</div>
</div>
</section>

<section className="section section--dots" id="pricingPreview">
<div className="container">
<span className="section__bg-number">04</span>
<div className="section-label">Pricing</div>
<div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap', position: 'relative', zIndex: '1'}}>
<div>
<h2 className="section-title" style={{marginBottom: '0.5rem'}}>Simple, transparent pricing.</h2>
<p className="section-desc">Start free. Scale as you grow. No surprises.</p>
</div>
<a className="btn btn--ghost" href="/pricing" style={{flexShrink: '0'}}>
                    See Full Pricing
                    <span className="iconify" data-icon="solar:arrow-right-linear" data-width="14"></span>
</a>
</div>
<div className="pricing-preview__grid" id="pricingGrid">
<div className="pricing-card" id="pricingCard0">
<div className="pricing-card__name">Starter</div>
<div className="pricing-card__price">$29 <span>/mo</span></div>
<p className="pricing-card__desc">For small teams getting started with observability.</p>
<ul className="pricing-card__features">
<li><span className="iconify" data-icon="solar:check-circle-bold" data-width="16"></span> 5 team members</li>
<li><span className="iconify" data-icon="solar:check-circle-bold" data-width="16"></span> 10M events/month</li>
<li><span className="iconify" data-icon="solar:check-circle-bold" data-width="16"></span> 7-day retention</li>
<li><span className="iconify" data-icon="solar:check-circle-bold" data-width="16"></span> Email support</li>
</ul>
<a className="btn btn--ghost" href="/contact">Get Started</a>
</div>
<div className="pricing-card pricing-card--featured" id="pricingCard1">
<div className="pricing-card__popular">Most Popular</div>
<div className="pricing-card__name">Pro</div>
<div className="pricing-card__price">$99 <span>/mo</span></div>
<p className="pricing-card__desc">For growing teams that need deeper insights.</p>
<ul className="pricing-card__features">
<li><span className="iconify" data-icon="solar:check-circle-bold" data-width="16"></span> 25 team members</li>
<li><span className="iconify" data-icon="solar:check-circle-bold" data-width="16"></span> 100M events/month</li>
<li><span className="iconify" data-icon="solar:check-circle-bold" data-width="16"></span> 30-day retention</li>
<li><span className="iconify" data-icon="solar:check-circle-bold" data-width="16"></span> AI root cause analysis</li>
</ul>
<a className="btn btn--primary" href="/contact">Start Free Trial</a>
</div>
<div className="pricing-card" id="pricingCard2">
<div className="pricing-card__name">Enterprise</div>
<div className="pricing-card__price">Custom</div>
<p className="pricing-card__desc">For organizations with advanced security and scale needs.</p>
<ul className="pricing-card__features">
<li><span className="iconify" data-icon="solar:check-circle-bold" data-width="16"></span> Unlimited members</li>
<li><span className="iconify" data-icon="solar:check-circle-bold" data-width="16"></span> Unlimited events</li>
<li><span className="iconify" data-icon="solar:check-circle-bold" data-width="16"></span> Custom retention</li>
<li><span className="iconify" data-icon="solar:check-circle-bold" data-width="16"></span> Dedicated support</li>
</ul>
<a className="btn btn--ghost" href="/contact">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="cta" id="cta">
<div className="container">
<h2 className="cta__title">
                Start Monitoring<br/>
                in <span className="cta__title-accent">60 Seconds</span>
</h2>
<p className="cta__subtitle">No credit card required. Free for up to 5 team members and 10M events per month.</p>
<div className="cta__form">
<input aria-label="Email address" className="cta__input cta__input--glow" placeholder="Enter your work email" type="email"/>
<button className="btn btn--primary">
                    Get Started
                    <span className="iconify" data-icon="solar:arrow-right-linear" data-width="14"></span>
</button>
</div>
</div>
</section>
</main>

<footer className="footer">
<div className="container footer__inner">
<div className="footer__grid">
<div>
<span className="footer__logo footer__logo-shimmer">SIGNAL</span>
<p className="footer__tagline">Real-time observability and incident intelligence for modern engineering teams.</p>
</div>
<div className="footer__col">
<h4>Product</h4>
<a href="/features">Features</a>
<a href="/pricing">Pricing</a>
<a href="/integrations">Integrations</a>
<a href="/changelog">Changelog</a>
</div>
<div className="footer__col">
<h4>Company</h4>
<a href="/about">About</a>
<a href="/blog">Blog</a>
<a href="/contact">Contact</a>
<a href="#">Careers</a>
</div>
<div className="footer__col">
<h4>Legal</h4>
<a href="#">Privacy Policy</a>
<a href="#">Terms of Service</a>
<a href="#">Security</a>
<a href="#">DPA</a>
</div>
</div>
<div className="footer__bottom">
<span>© 2026 SIGNAL. All rights reserved.</span>
<span>SOC 2 Type II Certified</span>
</div>
</div>
</footer>







    </>
  );
}
