import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        uniform float uTime;
        uniform float uIntensity;
        uniform float uSpeed;
        uniform vec2 uMouse;

        varying vec3 vNormal;
        varying vec3 vPosition;
        varying float vDisplacement;

        vec4 permute(vec4 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
        vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }

        float snoise(vec3 v){
            const vec2 C = vec2(1.0/6.0, 1.0/3.0);
            const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
            vec3 i = floor(v + dot(v, C.yyy));
            vec3 x0 = v - i + dot(i, C.xxx);
            vec3 g = step(x0.yzx, x0.xyz);
            vec3 l = 1.0 - g;
            vec3 i1 = min(g.xyz, l.zxy);
            vec3 i2 = max(g.xyz, l.zxy);
            vec3 x1 = x0 - i1 + C.xxx;
            vec3 x2 = x0 - i2 + C.yyy;
            vec3 x3 = x0 - D.yyy;
            i = mod(i, 289.0);
            vec4 p = permute(permute(permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0))
                + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                + i.x + vec4(0.0, i1.x, i2.x, 1.0));
            float n_ = 1.0 / 7.0;
            vec3 ns = n_ * D.wyz - D.xzx;
            vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
            vec4 x_ = floor(j * ns.z);
            vec4 y_ = floor(j - 7.0 * x_);
            vec4 xn = x_ * ns.x + ns.yyyy;
            vec4 yn = y_ * ns.x + ns.yyyy;
            vec4 h = 1.0 - abs(xn) - abs(yn);
            vec4 b0 = vec4(xn.xy, yn.xy);
            vec4 b1 = vec4(xn.zw, yn.zw);
            vec4 s0 = floor(b0) * 2.0 + 1.0;
            vec4 s1 = floor(b1) * 2.0 + 1.0;
            vec4 sh = -step(h, vec4(0.0));
            vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
            vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
            vec3 p0 = vec3(a0.xy, h.x);
            vec3 p1 = vec3(a0.zw, h.y);
            vec3 p2 = vec3(a1.xy, h.z);
            vec3 p3 = vec3(a1.zw, h.w);
            vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
            p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
            vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
            m = m * m;
            return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
        }

        void main() {
            vNormal = normalize(normalMatrix * normal);
            float n1 = snoise(position * 0.8 + uTime * uSpeed) * uIntensity;
            float n2 = snoise(position * 1.6 + uTime * uSpeed * 0.6) * uIntensity * 0.5;
            float n3 = snoise(position * 3.2 + uTime * uSpeed * 0.3) * uIntensity * 0.25;
            float displacement = n1 + n2 + n3;
            displacement += uMouse.x * sin(position.y * 2.5 + uTime * 0.5) * 0.1;
            displacement += uMouse.y * cos(position.x * 2.5 + uTime * 0.3) * 0.1;
            vec3 newPosition = position + normal * displacement;
            vDisplacement = displacement;
            vPosition = (modelMatrix * vec4(newPosition, 1.0)).xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }
    


        precision highp float;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;
        uniform float uTime;
        uniform float uOpacity;
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying float vDisplacement;

        void main() {
            vec3 viewDirection = normalize(cameraPosition - vPosition);
            float fresnel = pow(1.0 - abs(dot(viewDirection, vNormal)), 2.8);
            vec3 color = mix(uColor2, uColor1, smoothstep(-0.15, 0.35, vDisplacement));
            color = mix(color, uColor3, fresnel * 0.35);
            color += uColor1 * fresnel * 0.25;
            float alpha = (0.85 + fresnel * 0.15) * uOpacity;
            gl_FragColor = vec4(color, alpha);
        }
    


    (() => {
        'use strict';

        gsap.registerPlugin(ScrollTrigger);

        // ── Infinite Marquee (JS-driven) ────────────

        class InfiniteMarquee {
            constructor(el) {
                this.el = el;
                this.track = el.querySelector('.marquee__track');
                this.contents = el.querySelectorAll('.marquee__content');
                this.baseSpeed = 0.8;
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
                    const velocity = Math.abs(window.scrollY - this.lastScrollY);
                    this.scrollVelocity = velocity;
                    this.lastScrollY = window.scrollY;
                }, { passive: true });

                this.animate();
            }

            measure() {
                this.singleWidth = this.contents[0].offsetWidth;
            }

            animate() {
                // Boost speed from scroll velocity, capped
                const boost = Math.min(this.scrollVelocity * 0.4, 12);
                this.targetSpeed = this.baseSpeed + boost;

                // Smooth speed transitions
                this.currentSpeed += (this.targetSpeed - this.currentSpeed) * 0.08;

                // Decay scroll velocity
                this.scrollVelocity *= 0.92;

                // Move position
                this.position -= this.currentSpeed;

                // Seamless reset: when we've scrolled one full content width, wrap
                if (Math.abs(this.position) >= this.singleWidth) {
                    this.position += this.singleWidth;
                }

                this.track.style.transform = `translate3d(${this.position}px, 0, 0)`;

                requestAnimationFrame(() => this.animate());
            }
        }

        // ── Three.js Scene ──────────────────────────

        class FormaScene {
            constructor() {
                this.canvas = document.getElementById('webgl');
                this.width = window.innerWidth;
                this.height = window.innerHeight;
                this.mouse = { x: 0, y: 0, tx: 0, ty: 0 };
                this.scroll = { current: 0, target: 0 };

                this.init();
                this.createBlob();
                this.createWireframe();
                this.createParticles();
                this.createFloatingShapes();
                this.setupEvents();
                this.animate();
            }

            init() {
                this.scene = new THREE.Scene();
                this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 100);
                this.camera.position.set(0, 0, 5.5);
                this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });
                this.renderer.setSize(this.width, this.height);
                this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                this.clock = new THREE.Clock();
            }

            createBlob() {
                const geo = new THREE.IcosahedronGeometry(1.8, 64);
                this.blobMat = new THREE.ShaderMaterial({
                    vertexShader: document.getElementById('blobVertex').textContent,
                    fragmentShader: document.getElementById('blobFragment').textContent,
                    uniforms: {
                        uTime: { value: 0 },
                        uIntensity: { value: 0.38 },
                        uSpeed: { value: 0.22 },
                        uColor1: { value: new THREE.Color('#c9835a') },
                        uColor2: { value: new THREE.Color('#2a1810') },
                        uColor3: { value: new THREE.Color('#f0ede6') },
                        uMouse: { value: new THREE.Vector2(0, 0) },
                        uOpacity: { value: 1.0 },
                    },
                    transparent: true,
                    depthWrite: false,
                });
                this.blob = new THREE.Mesh(geo, this.blobMat);
                this.blob.position.set(2.2, 0.2, 0);
                this.scene.add(this.blob);
            }

            createWireframe() {
                const geo = new THREE.IcosahedronGeometry(1.84, 16);
                const mat = new THREE.MeshBasicMaterial({
                    color: new THREE.Color('#c9835a'), wireframe: true,
                    transparent: true, opacity: 0.05, depthWrite: false,
                });
                this.wireframe = new THREE.Mesh(geo, mat);
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
                    size: 1.2, color: new THREE.Color('#c9835a'),
                    transparent: true, opacity: 0.25, sizeAttenuation: true, depthWrite: false,
                });
                this.particles = new THREE.Points(geo, mat);
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

            animate() {
                requestAnimationFrame(() => this.animate());
                const t = this.clock.getElapsedTime();

                this.mouse.x += (this.mouse.tx - this.mouse.x) * 0.04;
                this.mouse.y += (this.mouse.ty - this.mouse.y) * 0.04;
                this.scroll.current += (this.scroll.target - this.scroll.current) * 0.06;

                const sp = this.scroll.current;

                this.blobMat.uniforms.uTime.value = t;
                this.blobMat.uniforms.uMouse.value.set(this.mouse.x, this.mouse.y);
                this.blobMat.uniforms.uIntensity.value = 0.38 + Math.sin(sp * Math.PI * 2) * 0.12;

                this.blob.position.x = 2.2 - sp * 4.4;
                this.blob.position.y = 0.2 + Math.sin(sp * Math.PI) * 0.8;

                const scale = 1.0 + Math.sin(sp * Math.PI) * 0.25;
                this.blob.scale.setScalar(scale);

                this.blob.rotation.x = t * 0.06 + this.mouse.y * 0.3;
                this.blob.rotation.y = t * 0.09 + this.mouse.x * 0.3;

                this.wireframe.position.copy(this.blob.position);
                this.wireframe.rotation.copy(this.blob.rotation);
                this.wireframe.scale.copy(this.blob.scale);

                const opacityCurve = 1.0 - Math.sin(sp * Math.PI) * 0.3;
                this.blobMat.uniforms.uOpacity.value = opacityCurve;
                this.wireframe.material.opacity = 0.05 * opacityCurve;

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

        // ── Section Animations ──────────────────────

        function initAnimations() {

            // Hero entrance
            const heroTl = gsap.timeline({ delay: 0.8 });
            heroTl
                .from('.hero__label', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' })
                .from('.hero__line span', { y: '110%', duration: 1.1, stagger: 0.12, ease: 'power4.out' }, '-=0.4')
                .from('.hero__subtitle', { y: 30, opacity: 0, duration: 0.9, ease: 'power3.out' }, '-=0.6')
                .from('.hero .btn', { y: 20, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5');

            // Clients — stagger fade in
            gsap.from('.clients__item', {
                y: 15, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out',
                scrollTrigger: { trigger: '.clients', start: 'top 85%' },
            });

            // About — title slides from left, desc fades, line draws
            gsap.from('.about__title', {
                x: -50, opacity: 0, duration: 1.2, ease: 'power3.out',
                scrollTrigger: { trigger: '.about__title', start: 'top 82%' },
            });
            gsap.from('.about__desc', {
                y: 30, opacity: 0, duration: 1, ease: 'power3.out',
                scrollTrigger: { trigger: '.about__desc', start: 'top 85%' },
            });
            gsap.from('.about__accent-line', {
                scaleX: 0, transformOrigin: 'left center', duration: 1, ease: 'power3.inOut',
                scrollTrigger: { trigger: '.about__accent-line', start: 'top 90%' },
            });

            // Stats — scale up with stagger
            gsap.from('.stat', {
                scale: 0.85, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'back.out(1.4)',
                scrollTrigger: { trigger: '.about__stats', start: 'top 82%' },
            });

            // Stats counter
            gsap.utils.toArray('.stat__number').forEach((el) => {
                const endVal = parseInt(el.textContent);
                if (isNaN(endVal)) return;
                const suffix = el.textContent.replace(/[0-9]/g, '');
                el.textContent = '0' + suffix;
                ScrollTrigger.create({
                    trigger: el, start: 'top 90%', once: true,
                    onEnter: () => {
                        gsap.to({ val: 0 }, {
                            val: endVal, duration: 2, ease: 'power2.out',
                            onUpdate: function () {
                                el.textContent = Math.round(this.targets()[0].val) + suffix;
                            },
                        });
                    },
                });
            });

            // Process — stagger from bottom, line fills on visible
            gsap.from('.process__item', {
                y: 50, opacity: 0, duration: 0.9, stagger: 0.18, ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.process__grid', start: 'top 78%',
                    onEnter: () => {
                        document.querySelectorAll('.process__item').forEach((item, i) => {
                            setTimeout(() => item.classList.add('is-visible'), i * 250);
                        });
                    },
                },
            });

            // Work rows — clip-path wipe reveal
            gsap.utils.toArray('.work__row').forEach((row, i) => {
                gsap.from(row, {
                    clipPath: i % 2 === 0
                        ? 'inset(0 100% 0 0)'
                        : 'inset(0 0 0 100%)',
                    opacity: 0, duration: 1.2, ease: 'power3.inOut',
                    scrollTrigger: { trigger: row, start: 'top 80%' },
                });
            });

            // Testimonial — mark scales, text fades, author slides
            const testTl = gsap.timeline({
                scrollTrigger: { trigger: '.testimonial', start: 'top 75%' },
            });
            testTl
                .from('.testimonial__mark', { scale: 0.5, opacity: 0, duration: 0.8, ease: 'back.out(1.5)' })
                .from('.testimonial__text', { y: 30, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.3')
                .from('.testimonial__author', { y: 15, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4');

            // Services — slide from right with stagger
            gsap.from('.services__item', {
                x: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
                scrollTrigger: { trigger: '.services__list', start: 'top 78%' },
            });

            // CTA — title lines stagger up
            gsap.from('.cta__title span', {
                y: 80, opacity: 0, duration: 1, stagger: 0.12, ease: 'power4.out',
                scrollTrigger: { trigger: '.cta', start: 'top 72%' },
            });
            gsap.from('.cta .btn', {
                y: 30, opacity: 0, duration: 0.8, ease: 'power3.out',
                scrollTrigger: { trigger: '.cta', start: 'top 65%' },
            });

            // Footer — fade up
            gsap.from('.footer__grid > *', {
                y: 25, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out',
                scrollTrigger: { trigger: '.footer', start: 'top 90%' },
            });
        }

        // ── Services Accordion ──────────────────────

        function initAccordion() {
            const items = document.querySelectorAll('[data-accordion]');
            items.forEach((item) => {
                item.addEventListener('click', () => {
                    const wasActive = item.classList.contains('is-active');
                    items.forEach((i) => i.classList.remove('is-active'));
                    if (!wasActive) item.classList.add('is-active');
                });
            });
        }

        // ── Magnetic Buttons ────────────────────────

        function initMagneticButtons() {
            if (matchMedia('(hover: none)').matches) return;
            document.querySelectorAll('.btn').forEach((btn) => {
                btn.addEventListener('mousemove', (e) => {
                    const rect = btn.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    gsap.to(btn, { x: x * 0.2, y: y * 0.2, duration: 0.3, ease: 'power2.out' });
                });
                btn.addEventListener('mouseleave', () => {
                    gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
                });
            });
        }

        // ── Navigation ──────────────────────────────

        function initNav() {
            const nav = document.getElementById('nav');
            const toggle = document.getElementById('navToggle');
            const menu = document.getElementById('mobileMenu');
            const close = document.getElementById('mobileClose');
            const mobileLinks = document.querySelectorAll('[data-mobile-link]');

            window.addEventListener('scroll', () => {
                nav.classList.toggle('is-scrolled', window.scrollY > 80);
            }, { passive: true });

            toggle.addEventListener('click', () => menu.classList.add('is-open'));
            close.addEventListener('click', () => menu.classList.remove('is-open'));
            mobileLinks.forEach((link) => {
                link.addEventListener('click', () => menu.classList.remove('is-open'));
            });
        }

        // ── Loader ──────────────────────────────────

        function initLoader() {
            const loader = document.getElementById('loader');
            window.addEventListener('load', () => {
                setTimeout(() => loader.classList.add('is-loaded'), 600);
            });
        }

        // ── Parallax Sections ───────────────────────

        function initParallax() {
            gsap.utils.toArray('.section__bg-number').forEach((el) => {
                gsap.to(el, {
                    y: -80, ease: 'none',
                    scrollTrigger: {
                        trigger: el.parentElement,
                        start: 'top bottom', end: 'bottom top', scrub: 1.5,
                    },
                });
            });
        }

        // ── Boot ────────────────────────────────────

        initLoader();
        initNav();

        if (typeof THREE !== 'undefined') {
            new FormaScene();
        }

        const marqueeEl = document.getElementById('marquee');
        if (marqueeEl) new InfiniteMarquee(marqueeEl);

        document.addEventListener('DOMContentLoaded', () => {
            requestAnimationFrame(() => {
                initAnimations();
                initAccordion();
                initMagneticButtons();
                initParallax();
            });
        });

    })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="loader" id="loader"><div className="loader__brand">TALKHAUS</div></div>
<canvas className="" height="1317" id="webgl" style={{width: '2080px', height: '1317px'}} width="2080"></canvas>

<nav className="nav" id="nav">
<div className="container nav__inner">
<a className="nav__logo text-xs" href="#">TALKHAUS</a>
<div className="nav__links">
<a className="" href="#work">Praca</a>
<a className="" href="#about">Studio</a>
<a className="" href="#services">Cennik</a>
<a className="" href="#journal">Kontakt</a>
</div>
<a className="nav__cta" href="#contact">Kontaktujte nas</a>
<button aria-label="Open menu" className="nav__toggle" id="navToggle" style={{display: 'none'}}>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:hamburger-menu-linear" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 7H4m16 5H4m16 5H4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
</button>
</div>
</nav>

<div className="mobile-menu" id="mobileMenu">
<div className="mobile-menu__header">
<a className="nav__logo" href="#">FORMA</a>
<button aria-label="Close menu" className="mobile-menu__close" id="mobileClose">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:close-circle-linear" data-width="26" height="26" role="img" viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeWidth="1.5"><circle className="" cx="12" cy="12" r="10"></circle><path className="" d="m14.5 9.5l-5 5m0-5l5 5" strokeLinecap="round"></path></g></svg>
</button>
</div>
<nav className="mobile-menu__nav">
<a className="" data-mobile-link="" href="#work">Praca</a>
<a className="" data-mobile-link="" href="#about">Studio</a>
<a className="" data-mobile-link="" href="#services">Cennik</a>
<a className="" data-mobile-link="" href="#journal">Journal</a>
<a className="" data-mobile-link="" href="#contact">Kontakt</a>
</nav>
</div>

<section className="hero" id="hero">
<div className="container">
<div className="hero__content">
<div className="hero__label">Podcast studio Bratislava</div>
<h1 className="hero__title">
<span className="hero__line"><span className="">VYTVOR</span></span>
<span className="hero__line"><span className="">SI SVOJ</span></span>
<span className="hero__line hero__line--accent"><span className="">PODCAST</span></span>
</h1>
<p className="hero__subtitle">A multidisciplinary studio focused on creating distinctive digital products and immersive brand experiences that push boundaries.</p>
<a className="btn btn--primary" href="#work">
                    Explore Our Work
                    <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-linear" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</a>
</div>
</div>
</section>

<div className="marquee" id="marquee">
<div className="marquee__track" id="marqueeTrack">
<div className="marquee__content">
<span className="marquee__item">podcast</span><span className="marquee__sep cursor-pointer" onclick="window.location.href='/Reels'" role="button">/</span>
<span className="marquee__item">reels</span><span className="marquee__sep">/</span>
<span className="marquee__item">shorts</span><span className="marquee__sep">/</span>
<span className="marquee__item">studio</span><span className="marquee__sep">/</span>
<span className="marquee__item">Motion</span><span className="marquee__sep">/</span>
<span className="marquee__item">Art Direction</span><span className="marquee__sep">/</span>
<span className="marquee__item">Strategy</span><span className="marquee__sep">/</span>
<span className="marquee__item">Brand Identity</span><span className="marquee__sep">/</span>
<span className="marquee__item">Digital Design</span><span className="marquee__sep">/</span>
<span className="marquee__item">Development</span><span className="marquee__sep">/</span>
<span className="marquee__item">Motion</span><span className="marquee__sep">/</span>
<span className="marquee__item">Art Direction</span><span className="marquee__sep">/</span>
</div>
<div aria-hidden="true" className="marquee__content">
<span className="marquee__item">Strategy</span><span className="marquee__sep">/</span>
<span className="marquee__item">Brand Identity</span><span className="marquee__sep">/</span>
<span className="marquee__item">Digital Design</span><span className="marquee__sep">/</span>
<span className="marquee__item">Development</span><span className="marquee__sep">/</span>
<span className="marquee__item">Motion</span><span className="marquee__sep">/</span>
<span className="marquee__item">Art Direction</span><span className="marquee__sep">/</span>
<span className="marquee__item">Strategy</span><span className="marquee__sep">/</span>
<span className="marquee__item">Brand Identity</span><span className="marquee__sep">/</span>
<span className="marquee__item">Digital Design</span><span className="marquee__sep">/</span>
<span className="marquee__item">Development</span><span className="marquee__sep">/</span>
<span className="marquee__item">Motion</span><span className="marquee__sep">/</span>
<span className="marquee__item">Art Direction</span><span className="marquee__sep">/</span>
</div>
</div>
</div>

<section className="clients">
<div className="container">
<div className="clients__label">Trusted by forward-thinking brands</div>
<div className="clients__grid">
<span className="clients__item">Google</span>
<span className="clients__item">Airbnb</span>
<span className="clients__item">Stripe</span>
<span className="clients__item">Figma</span>
<span className="clients__item">Linear</span>
<span className="clients__item">Vercel</span>
<span className="clients__item">Notion</span>
</div>
</div>
</section>

<div className="divider"><div className="container"><div className="divider__line"><div className="divider__dot"></div></div></div></div>

<section className="section" id="about">
<div className="container">
<span className="section__bg-number">01</span>
<div className="section-label">O nás</div>
<div className="about__grid">
<div className="">
<h2 className="about__title max-w-md">Nové podcastové
štúdio v Bratislave</h2>
<p className="about__desc">Our multidisciplinary team combines strategy, design, and technology to create work that resonates. Every project begins with understanding -- your vision, your audience, your goals. We obsess over details so the final product feels effortless.</p>
<div className="about__accent-line"></div>
</div>
<div className="about__stats">
<div className="stat">
<span className="stat__number">10+</span>
<span className="stat__label">Years of<br/>Experience</span>
</div>
<div className="stat">
<span className="stat__number">200+</span>
<span className="stat__label">Projects<br/>Delivered</span>
</div>
<div className="stat">
<span className="stat__number">40</span>
<span className="stat__label">Team<br/>Members</span>
</div>
<div className="stat">
<span className="stat__number">12</span>
<span className="stat__label">Industry<br/>Awards</span>
</div>
</div>
</div>
</div>
</section>

<section className="section" id="process">
<div className="container">
<span className="section__bg-number">02</span>
<div className="section-label">Our Process</div>
<div className="process__grid">
<div className="process__item">
<div className="process__number">01</div>
<div className="process__line"><div className="process__line-fill"></div><div className="process__dot"></div></div>
<h3 className="process__title">Discover</h3>
<p className="process__desc">Research, stakeholder interviews, competitive analysis, and audience mapping to understand the full landscape.</p>
</div>
<div className="process__item">
<div className="process__number">02</div>
<div className="process__line"><div className="process__line-fill"></div><div className="process__dot"></div></div>
<h3 className="process__title">Define</h3>
<p className="process__desc">Strategy formation, creative direction, and building the architectural blueprint that guides every decision.</p>
</div>
<div className="process__item">
<div className="process__number">03</div>
<div className="process__line"><div className="process__line-fill"></div><div className="process__dot"></div></div>
<h3 className="process__title">Design</h3>
<p className="process__desc">Visual exploration, iterative prototyping, and rigorous refinement until every pixel earns its place.</p>
</div>
<div className="process__item">
<div className="process__number">04</div>
<div className="process__line"><div className="process__line-fill"></div><div className="process__dot"></div></div>
<h3 className="process__title">Deliver</h3>
<p className="process__desc">Precision development, thorough testing, and a polished launch with ongoing performance monitoring.</p>
</div>
</div>
</div>
</section>

<section className="section" id="work">
<div className="container">
<span className="section__bg-number">03</span>
<div className="section-header">
<div className="section-label" style={{marginBottom: '0', flex: '1'}}>Selected Work</div>
<a className="section-link" href="#">
                    View All Projects
                    <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-linear" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</a>
</div>
<div className="work__grid">
<div className="work__row">
<div className="work__item work__item--wide">
<div className="work__image" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&amp'}}></div>
<span className="work__number">01</span>
<div className="work__overlay">
<span className="work__category">Brand Identity</span>
<h3 className="work__title">Meridian Architecture</h3>
<p className="work__desc">Complete visual identity for a contemporary architecture firm.</p>
<span className="work__year">2026</span>
</div>
<div className="work__arrow">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-up-linear" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6m0 0H9m9 0v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
</div>
<div className="work__item work__item--narrow">
<div className="work__image" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp'}}></div>
<span className="work__number">02</span>
<div className="work__overlay">
<span className="work__category">Digital Platform</span>
<h3 className="work__title">Vertex Studios</h3>
<p className="work__desc">Immersive portfolio platform for a creative collective.</p>
<span className="work__year">2025</span>
</div>
<div className="work__arrow">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-up-linear" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6m0 0H9m9 0v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
</div>
</div>
<div className="work__row">
<div className="work__item work__item--narrow">
<div className="work__image" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&amp'}}></div>
<span className="work__number">03</span>
<div className="work__overlay">
<span className="work__category">E-Commerce</span>
<h3 className="work__title">Lumen Collective</h3>
<p className="work__desc">Premium e-commerce experience for a luxury lighting brand.</p>
<span className="work__year">2025</span>
</div>
<div className="work__arrow">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-up-linear" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6m0 0H9m9 0v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
</div>
<div className="work__item work__item--wide">
<div className="work__image" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&amp'}}></div>
<span className="work__number">04</span>
<div className="work__overlay">
<span className="work__category">Motion Design</span>
<h3 className="work__title">Prism Gallery</h3>
<p className="work__desc">Dynamic exhibition site with generative motion graphics.</p>
<span className="work__year">2025</span>
</div>
<div className="work__arrow">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-up-linear" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6m0 0H9m9 0v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="section" id="testimonial">
<div className="container">
<div className="testimonial">
<span className="testimonial__mark">"</span>
<blockquote className="testimonial__text">FORMA transformed our entire digital presence. Their strategic thinking and obsessive attention to craft resulted in a brand experience that truly resonates with our audience and drives measurable results.</blockquote>
<div className="testimonial__author">
<span className="testimonial__name">Sarah Chen</span>
<span className="testimonial__role">CEO, Meridian Architecture</span>
</div>
</div>
</div>
</section>

<div className="divider"><div className="container"><div className="divider__line"><div className="divider__dot"></div></div></div></div>

<section className="section" id="services">
<div className="container">
<span className="section__bg-number">04</span>
<div className="section-label">What We Do</div>
<div className="services__list" id="servicesList">
<div className="services__item" data-accordion="">
<span className="services__number">01</span>
<div className="services__content">
<div className="services__header">
<h3 className="services__title">Brand Identity</h3>
</div>
<div className="services__tags">
<span className="services__tag">Strategy</span>
<span className="services__tag">Visual Identity</span>
<span className="services__tag">Guidelines</span>
</div>
<div className="services__body">
<p className="services__desc">Strategic brand positioning, visual identity systems, and comprehensive guidelines that establish a distinct and memorable market presence. We craft every touchpoint from logo to typography to color systems.</p>
</div>
</div>
<svg aria-hidden="true" className="iconify services__arrow iconify--solar" data-icon="solar:add-circle-linear" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M15 12h-3m0 0H9m3 0V9m0 3v3" strokeLinecap="round"></path></g></svg>
</div>
<div className="services__item" data-accordion="">
<span className="services__number">02</span>
<div className="services__content">
<div className="services__header">
<h3 className="services__title">Digital Design</h3>
</div>
<div className="services__tags">
<span className="services__tag">UI/UX</span>
<span className="services__tag">Design Systems</span>
<span className="services__tag">Prototyping</span>
</div>
<div className="services__body">
<p className="services__desc">User-centered interfaces, scalable design systems, and immersive digital experiences across web and mobile platforms. Every interaction is designed with intention, balancing aesthetics with usability.</p>
</div>
</div>
<svg aria-hidden="true" className="iconify services__arrow iconify--solar" data-icon="solar:add-circle-linear" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M15 12h-3m0 0H9m3 0V9m0 3v3" strokeLinecap="round"></path></g></svg>
</div>
<div className="services__item" data-accordion="">
<span className="services__number">03</span>
<div className="services__content">
<div className="services__header">
<h3 className="services__title">Development</h3>
</div>
<div className="services__tags">
<span className="services__tag">Front-end</span>
<span className="services__tag">CMS</span>
<span className="services__tag">Web Apps</span>
</div>
<div className="services__body">
<p className="services__desc">Performant front-end engineering, headless CMS integration, and scalable web applications built with modern frameworks. We write clean, maintainable code that performs beautifully at scale.</p>
</div>
</div>
<svg aria-hidden="true" className="iconify services__arrow iconify--solar" data-icon="solar:add-circle-linear" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M15 12h-3m0 0H9m3 0V9m0 3v3" strokeLinecap="round"></path></g></svg>
</div>
<div className="services__item" data-accordion="">
<span className="services__number">04</span>
<div className="services__content">
<div className="services__header">
<h3 className="services__title">Motion &amp; 3D</h3>
</div>
<div className="services__tags">
<span className="services__tag">Animation</span>
<span className="services__tag">WebGL</span>
<span className="services__tag">3D Visualization</span>
</div>
<div className="services__body">
<p className="services__desc">Kinetic typography, 3D product visualization, immersive animations, and interactive WebGL experiences that bring digital products to life with depth and motion.</p>
</div>
</div>
<svg aria-hidden="true" className="iconify services__arrow iconify--solar" data-icon="solar:add-circle-linear" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M15 12h-3m0 0H9m3 0V9m0 3v3" strokeLinecap="round"></path></g></svg>
</div>
</div>
</div>
</section>

<section className="cta" id="contact">
<div className="container">
<div className="">
<h2 className="cta__title">
<span className="">LET'S CREATE</span>
<span className="">SOMETHING</span>
<span className="cta__title--accent">TOGETHER</span>
</h2>
<a className="btn btn--primary btn--large" href="mailto:hello@forma.studio">
                    Start a Project
                    <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-linear" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</a>
</div>
</div>
</section>

<footer className="footer">
<div className="container">
<div className="footer__grid">
<div className="">
<span className="footer__logo">FORMA</span>
<p className="footer__tagline">Design studio crafting digital experiences since 2011.</p>
</div>
<div className="footer__col">
<h4 className="">Navigation</h4>
<a className="" href="#work">Work</a>
<a className="" href="#about">Studio</a>
<a className="" href="#services">Services</a>
<a className="" href="#journal">Journal</a>
</div>
<div className="footer__col">
<h4>Social</h4>
<a href="#">Instagram</a>
<a href="#">Twitter / X</a>
<a href="#">LinkedIn</a>
<a href="#">Dribbble</a>
</div>
<div className="footer__col">
<h4>Contact</h4>
<a href="mailto:hello@forma.studio">hello@forma.studio</a>
<a href="tel:+12345678900">+1 (234) 567-8900</a>
<a href="#">New York, NY</a>
</div>
</div>
<div className="footer__bottom">
<span>2026 FORMA. All rights reserved.</span>
<a href="#">Privacy Policy</a>
</div>
</div>
</footer>









    </>
  );
}
