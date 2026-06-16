import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        attribute float aSize;
        attribute float aColorMix;
        uniform float uPixelRatio;
        uniform float uTime;
        varying float vColorMix;
        varying float vDepth;
        void main() {
            vColorMix = aColorMix;
            vec3 pos = position;
            float id = pos.x * 13.7 + pos.y * 7.3 + pos.z * 23.1;
            pos.x += sin(uTime * 0.35 + id) * 0.07;
            pos.y += cos(uTime * 0.28 + id * 1.3) * 0.09;
            pos.z += sin(uTime * 0.32 + id * 0.7) * 0.05;
            vec4 mv = modelViewMatrix * vec4(pos, 1.0);
            vDepth = -mv.z;
            gl_PointSize = aSize * uPixelRatio * (150.0 / -mv.z);
            gl_Position = projectionMatrix * mv;
        }
    


        precision highp float;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform float uOpacity;
        varying float vColorMix;
        varying float vDepth;
        void main() {
            float d = length(gl_PointCoord - vec2(0.5));
            if (d > 0.5) discard;
            float a = smoothstep(0.5, 0.2, d) * uOpacity;
            float depthFade = clamp(1.0 - (vDepth - 3.0) / 10.0, 0.2, 1.0);
            a *= depthFade;
            vec3 col = mix(uColor1, uColor2, vColorMix);
            gl_FragColor = vec4(col, a);
        }
    


    (() => {
        'use strict';
        gsap.registerPlugin(ScrollTrigger);

        // ── Scroll-Traveling Particle Scene ─────

        class NexusScene {
            constructor() {
                this.canvas = document.getElementById('webgl');
                this.w = window.innerWidth;
                this.h = window.innerHeight;
                this.mouse = { x: 0, y: 0, tx: 0, ty: 0 };
                this.scroll = { current: 0, target: 0 };
                this.count = 1800;
                this.maxConn = 2800;

                /* Keyframes: particle group position at different scroll points
                   Particles appear in hero, drift behind solid sections, reappear at metrics+CTA */
                this.keyframes = [
                    { scroll: 0,    x: 0,   y: 0,    s: 1    },
                    { scroll: 0.12, x: 0,   y: 0.3,  s: 0.95 },
                    { scroll: 0.28, x: 2.2, y: 0.2,  s: 0.85 },
                    { scroll: 0.48, x: -2,  y: -0.3, s: 0.8  },
                    { scroll: 0.65, x: 0,   y: 0,    s: 1.15 },
                    { scroll: 0.82, x: 0,   y: -0.3, s: 1    },
                    { scroll: 1,    x: 0,   y: -0.8, s: 0.85 },
                ];

                this.init();
                this.generateShapes();
                this.findConnections();
                this.createParticles();
                this.createLines();
                this.positions = new Float32Array(this.count * 3);
                this.setupEvents();
                this.animate();
            }

            init() {
                this.scene = new THREE.Scene();
                this.camera = new THREE.PerspectiveCamera(50, this.w / this.h, 0.1, 100);
                this.camera.position.z = 5.5;
                this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });
                this.renderer.setSize(this.w, this.h);
                this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                this.clock = new THREE.Clock();
                this.group = new THREE.Group();
                this.scene.add(this.group);
            }

            generateShapes() {
                const n = this.count;
                this.shapes = {
                    sphere: new Float32Array(n * 3),
                    torus: new Float32Array(n * 3),
                    grid: new Float32Array(n * 3),
                    helix: new Float32Array(n * 3),
                };

                for (let i = 0; i < n; i++) {
                    const i3 = i * 3;

                    const theta = Math.random() * Math.PI * 2;
                    const phi = Math.acos(2 * Math.random() - 1);
                    const r = 1.8 + (Math.random() - 0.5) * 0.2;
                    this.shapes.sphere[i3]     = r * Math.sin(phi) * Math.cos(theta);
                    this.shapes.sphere[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
                    this.shapes.sphere[i3 + 2] = r * Math.cos(phi);

                    const u = (i / n) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
                    const v = Math.random() * Math.PI * 2;
                    const R = 1.8, rr = 0.65;
                    this.shapes.torus[i3]     = (R + rr * Math.cos(v)) * Math.cos(u);
                    this.shapes.torus[i3 + 1] = rr * Math.sin(v);
                    this.shapes.torus[i3 + 2] = (R + rr * Math.cos(v)) * Math.sin(u);

                    const cols = Math.ceil(Math.sqrt(n));
                    const row = Math.floor(i / cols);
                    const col = i % cols;
                    this.shapes.grid[i3]     = (col / cols - 0.5) * 4.5;
                    this.shapes.grid[i3 + 1] = (row / cols - 0.5) * 4.5;
                    this.shapes.grid[i3 + 2] = (Math.random() - 0.5) * 0.25;

                    const t = (i / n) * Math.PI * 10;
                    const strand = i % 2;
                    const hr = 1.1;
                    this.shapes.helix[i3]     = hr * Math.cos(t + strand * Math.PI);
                    this.shapes.helix[i3 + 1] = ((i / n) - 0.5) * 5.5;
                    this.shapes.helix[i3 + 2] = hr * Math.sin(t + strand * Math.PI);
                }
            }

            findConnections() {
                this.connPairs = [];
                const s = this.shapes.sphere;
                const threshSq = 0.55 * 0.55;
                for (let i = 0; i < this.count && this.connPairs.length < this.maxConn * 2; i++) {
                    for (let j = i + 1; j < this.count && this.connPairs.length < this.maxConn * 2; j++) {
                        const dx = s[i*3]-s[j*3], dy = s[i*3+1]-s[j*3+1], dz = s[i*3+2]-s[j*3+2];
                        if (dx*dx+dy*dy+dz*dz < threshSq) this.connPairs.push(i, j);
                    }
                }
                this.numConn = this.connPairs.length / 2;
            }

            createParticles() {
                const geo = new THREE.BufferGeometry();
                const pos = new Float32Array(this.count * 3);
                const sizes = new Float32Array(this.count);
                const colorMix = new Float32Array(this.count);
                for (let i = 0; i < this.count; i++) {
                    pos[i*3]   = this.shapes.sphere[i*3];
                    pos[i*3+1] = this.shapes.sphere[i*3+1];
                    pos[i*3+2] = this.shapes.sphere[i*3+2];
                    sizes[i] = Math.random() * 1.5 + 0.5;
                    colorMix[i] = Math.random();
                }
                geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
                geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
                geo.setAttribute('aColorMix', new THREE.BufferAttribute(colorMix, 1));

                this.particleMat = new THREE.ShaderMaterial({
                    vertexShader: document.getElementById('particleVertex').textContent,
                    fragmentShader: document.getElementById('particleFragment').textContent,
                    uniforms: {
                        uColor1: { value: new THREE.Color('#10b981') },
                        uColor2: { value: new THREE.Color('#34d399') },
                        uOpacity: { value: 0.38 },
                        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
                        uTime: { value: 0 },
                    },
                    transparent: true, depthWrite: false,
                    blending: THREE.AdditiveBlending,
                });

                this.particleMesh = new THREE.Points(geo, this.particleMat);
                this.group.add(this.particleMesh);
            }

            createLines() {
                const geo = new THREE.BufferGeometry();
                const pos = new Float32Array(this.numConn * 6);
                geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
                this.lineMat = new THREE.LineBasicMaterial({
                    color: new THREE.Color('#10b981'),
                    transparent: true, opacity: 0.035, depthWrite: false,
                });
                this.lineMesh = new THREE.LineSegments(geo, this.lineMat);
                this.group.add(this.lineMesh);
            }

            lerpKeyframes(progress) {
                const kf = this.keyframes;
                let i = 0;
                while (i < kf.length - 1 && kf[i + 1].scroll <= progress) i++;
                if (i >= kf.length - 1) return kf[kf.length - 1];
                const a = kf[i], b = kf[i + 1];
                const t = (progress - a.scroll) / (b.scroll - a.scroll);
                const e = t * t * (3 - 2 * t);
                return {
                    x: a.x + (b.x - a.x) * e,
                    y: a.y + (b.y - a.y) * e,
                    s: a.s + (b.s - a.s) * e,
                };
            }

            updateMorph(progress) {
                const keys = ['sphere', 'torus', 'grid', 'helix'];
                const seg = Math.min(progress, 2.999);
                const idx = Math.floor(seg);
                let t = seg - idx;
                t = t * t * (3 - 2 * t);
                const from = this.shapes[keys[idx]];
                const to = this.shapes[keys[Math.min(idx + 1, 3)]];
                for (let i = 0; i < this.count * 3; i++) {
                    this.positions[i] = from[i] + (to[i] - from[i]) * t;
                }
            }

            applyMouse() {
                const mx = this.mouse.x * 3, my = this.mouse.y * 2;
                for (let i = 0; i < this.count; i++) {
                    const i3 = i * 3;
                    const dx = this.positions[i3] - mx;
                    const dy = this.positions[i3+1] - my;
                    const dz = this.positions[i3+2];
                    const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
                    if (dist < 1.2 && dist > 0.01) {
                        const force = (1.2 - dist) * 0.015;
                        this.positions[i3]   += (dx/dist) * force;
                        this.positions[i3+1] += (dy/dist) * force;
                        this.positions[i3+2] += (dz/dist) * force;
                    }
                }
            }

            syncBuffers() {
                const pAttr = this.particleMesh.geometry.attributes.position;
                pAttr.array.set(this.positions);
                pAttr.needsUpdate = true;
                const lAttr = this.lineMesh.geometry.attributes.position;
                const lArr = lAttr.array;
                for (let k = 0; k < this.connPairs.length; k += 2) {
                    const a = this.connPairs[k], b = this.connPairs[k+1];
                    const o = k * 3;
                    lArr[o]   = this.positions[a*3];   lArr[o+1] = this.positions[a*3+1]; lArr[o+2] = this.positions[a*3+2];
                    lArr[o+3] = this.positions[b*3];   lArr[o+4] = this.positions[b*3+1]; lArr[o+5] = this.positions[b*3+2];
                }
                lAttr.needsUpdate = true;
            }

            setupEvents() {
                window.addEventListener('mousemove', (e) => {
                    this.mouse.tx = (e.clientX / this.w) * 2 - 1;
                    this.mouse.ty = -(e.clientY / this.h) * 2 + 1;
                });
                window.addEventListener('resize', () => {
                    this.w = window.innerWidth; this.h = window.innerHeight;
                    this.camera.aspect = this.w / this.h;
                    this.camera.updateProjectionMatrix();
                    this.renderer.setSize(this.w, this.h);
                    this.particleMat.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2);
                });
                ScrollTrigger.create({
                    trigger: document.body, start: 'top top', end: 'bottom bottom',
                    onUpdate: (s) => { this.scroll.target = s.progress; },
                });
            }

            animate() {
                requestAnimationFrame(() => this.animate());
                const t = this.clock.getElapsedTime();

                this.mouse.x += (this.mouse.tx - this.mouse.x) * 0.05;
                this.mouse.y += (this.mouse.ty - this.mouse.y) * 0.05;
                this.scroll.current += (this.scroll.target - this.scroll.current) * 0.04;

                const sp = this.scroll.current;
                this.particleMat.uniforms.uTime.value = t;

                /* Scroll-driven group position — particles travel across screen */
                const kf = this.lerpKeyframes(sp);
                const breathe = 1.0 + Math.sin(t * 0.4) * 0.02;
                this.group.position.x += (kf.x - this.group.position.x) * 0.04;
                this.group.position.y += (kf.y - this.group.position.y) * 0.04;
                this.group.scale.setScalar(kf.s * breathe);

                /* Morph shapes on scroll */
                this.updateMorph(sp * 3);
                this.applyMouse();
                this.syncBuffers();

                /* Continuous rotation + mouse influence */
                this.group.rotation.y = t * 0.055 + this.mouse.x * 0.2;
                this.group.rotation.x = Math.sin(t * 0.025) * 0.1 + this.mouse.y * 0.15;

                const lineOp = 0.03 + Math.sin(t * 0.35) * 0.01 + Math.sin(sp * Math.PI) * 0.012;
                this.lineMat.opacity = lineOp;

                this.renderer.render(this.scene, this.camera);
            }
        }

        // ── Card Tilt + Spotlight ────────────────

        function initCardEffects() {
            if (matchMedia('(hover: none)').matches) return;
            document.querySelectorAll('.feature-card').forEach(card => {
                card.addEventListener('mousemove', e => {
                    const rect = card.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width - 0.5;
                    const y = (e.clientY - rect.top) / rect.height - 0.5;
                    gsap.to(card, {
                        rotateX: -y * 8, rotateY: x * 8,
                        transformPerspective: 600,
                        duration: 0.4, ease: 'power2.out',
                    });
                    card.style.setProperty('--spot-x', (e.clientX - rect.left) + 'px');
                    card.style.setProperty('--spot-y', (e.clientY - rect.top) + 'px');
                });
                card.addEventListener('mouseleave', () => {
                    gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.7, ease: 'elastic.out(1,0.4)' });
                });
            });
        }

        // ── Metric Counter Animation ────────────

        function initCounters() {
            const els = document.querySelectorAll('[data-count]');
            const observed = new Set();
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting || observed.has(entry.target)) return;
                    observed.add(entry.target);
                    const el = entry.target;
                    const target = parseFloat(el.dataset.count);
                    const suffix = el.dataset.suffix || '';
                    const decimals = parseInt(el.dataset.decimals) || 0;
                    const hasSep = el.hasAttribute('data-separator');
                    const dur = 1800, start = performance.now();
                    function tick(now) {
                        const p = Math.min((now - start) / dur, 1);
                        const e = 1 - Math.pow(1 - p, 3);
                        let val = target * e;
                        if (decimals > 0) { val = val.toFixed(decimals); }
                        else { val = Math.round(val); if (hasSep) val = val.toLocaleString(); }
                        el.textContent = val + suffix;
                        if (p < 1) requestAnimationFrame(tick);
                    }
                    requestAnimationFrame(tick);
                });
            }, { threshold: 0.5 });
            els.forEach(el => observer.observe(el));
        }

        // ── GSAP Scroll Animations ──────────────

        function initAnimations() {
            /* Hero — staggered entrance */
            const heroTl = gsap.timeline({ delay: 0.7 });
            heroTl
                .from('.hero__badge', { y: 15, opacity: 0, duration: 0.6, ease: 'power3.out' })
                .from('.hero__title', { y: 50, opacity: 0, clipPath: 'inset(100% 0 0 0)', duration: 1.1, ease: 'power4.out' }, '-=0.25')
                .from('.hero__desc', { y: 25, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
                .from('.hero__actions .btn', { y: 15, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }, '-=0.4');

            /* Logos — fade */
            gsap.from('.logos__label', {
                y: 10, opacity: 0, duration: 0.5, ease: 'power2.out',
                scrollTrigger: { trigger: '.logos', start: 'top 92%' },
            });

            /* Features — scale + rotate in from different origins */
            gsap.utils.toArray('.feature-card').forEach((card, i) => {
                const fromX = i % 3 === 0 ? -30 : i % 3 === 2 ? 30 : 0;
                gsap.from(card, {
                    x: fromX, y: 50, opacity: 0, scale: 0.9,
                    rotation: (Math.random() - 0.5) * 4,
                    duration: 0.8, ease: 'power3.out',
                    scrollTrigger: { trigger: card, start: 'top 85%' },
                    delay: (i % 3) * 0.08,
                });
            });

            /* Steps — progressive reveal with connector fills */
            document.querySelectorAll('.step').forEach((step, i) => {
                gsap.from(step, {
                    y: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
                    scrollTrigger: { trigger: step, start: 'top 82%' },
                    onComplete: () => step.classList.add('is-visible'),
                    delay: i * 0.15,
                });
            });

            /* Metrics — pop with elastic ease */
            gsap.from('.metric', {
                scale: 0.6, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'back.out(2)',
                scrollTrigger: { trigger: '#metrics', start: 'top 78%' },
            });

            /* CTA — text rises over particles */
            gsap.from('.cta__title span', {
                y: 60, opacity: 0, duration: 1, stagger: 0.15, ease: 'power4.out',
                scrollTrigger: { trigger: '.cta', start: 'top 72%' },
            });
            gsap.from('.cta__desc', {
                y: 30, opacity: 0, duration: 0.8, ease: 'power3.out',
                scrollTrigger: { trigger: '.cta', start: 'top 65%' },
            });
            gsap.from('.cta .btn', {
                y: 20, opacity: 0, scale: 0.9, duration: 0.7, ease: 'back.out(1.5)',
                scrollTrigger: { trigger: '.cta', start: 'top 58%' },
            });

            /* Footer stagger */
            gsap.from('.footer__grid > *', {
                y: 20, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out',
                scrollTrigger: { trigger: '.footer', start: 'top 90%' },
            });

            /* Section headers */
            gsap.utils.toArray('.section-header').forEach(h => {
                gsap.from(h.children, {
                    y: 25, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
                    scrollTrigger: { trigger: h, start: 'top 82%' },
                });
            });
        }

        // ── Nav ─────────────────────────────────

        function initNav() {
            const nav = document.getElementById('nav');
            const toggle = document.getElementById('navToggle');
            const menu = document.getElementById('mobileMenu');
            const close = document.getElementById('mobileClose');
            const links = document.querySelectorAll('[data-mobile-link]');
            window.addEventListener('scroll', () => {
                nav.classList.toggle('is-scrolled', window.scrollY > 60);
            }, { passive: true });
            toggle.addEventListener('click', () => menu.classList.add('is-open'));
            close.addEventListener('click', () => menu.classList.remove('is-open'));
            links.forEach(l => l.addEventListener('click', () => menu.classList.remove('is-open')));
        }

        // ── Magnetic Buttons ────────────────────

        function initMagnetic() {
            if (matchMedia('(hover: none)').matches) return;
            document.querySelectorAll('.btn').forEach(btn => {
                btn.addEventListener('mousemove', e => {
                    const r = btn.getBoundingClientRect();
                    gsap.to(btn, { x: (e.clientX - r.left - r.width/2) * 0.15, y: (e.clientY - r.top - r.height/2) * 0.15, duration: 0.3, ease: 'power2.out' });
                });
                btn.addEventListener('mouseleave', () => {
                    gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1,0.4)' });
                });
            });
        }

        // ── Boot ────────────────────────────────

        const loader = document.getElementById('loader');
        window.addEventListener('load', () => setTimeout(() => loader.classList.add('is-loaded'), 500));

        initNav();
        if (typeof THREE !== 'undefined') new NexusScene();

        document.addEventListener('DOMContentLoaded', () => {
            requestAnimationFrame(() => {
                initAnimations();
                initMagnetic();
                initCardEffects();
                initCounters();
            });
        });
    })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="loader" id="loader"><div className="loader__brand">NEXUS</div></div>
<canvas id="webgl"></canvas>

<nav className="nav" id="nav">
<div className="container nav__inner">
<a className="nav__logo" href="#">NEXUS</a>
<div className="nav__links">
<a href="#features">Features</a>
<a href="#how">How It Works</a>
<a href="#metrics">Results</a>
<a href="#contact">Pricing</a>
</div>
<a className="nav__cta" href="#contact">
                Get Started
                <span className="iconify" data-icon="solar:arrow-right-linear" data-width="13"></span>
</a>
<button aria-label="Menu" className="nav__toggle" id="navToggle">
<span className="iconify" data-icon="solar:hamburger-menu-linear" data-width="24"></span>
</button>
</div>
</nav>

<div className="mobile-menu" id="mobileMenu">
<div className="mobile-menu__header">
<span className="nav__logo">NEXUS</span>
<button aria-label="Close" className="mobile-menu__close" id="mobileClose">
<span className="iconify" data-icon="solar:close-circle-linear" data-width="26"></span>
</button>
</div>
<nav className="mobile-menu__nav">
<a data-mobile-link="" href="#features">Features</a>
<a data-mobile-link="" href="#how">How It Works</a>
<a data-mobile-link="" href="#metrics">Results</a>
<a data-mobile-link="" href="#contact">Pricing</a>
</nav>
</div>

<section className="hero" id="hero">
<div className="container">
<div className="hero__inner">
<div className="hero__badge">
<span className="hero__badge-dot"></span>
                    Now in Public Beta
                </div>
<h1 className="hero__title">
                    THE FUTURE OF<br/>
<span className="hero__title-accent">INTELLIGENT</span><br/>
                    AUTOMATION
                </h1>
<p className="hero__desc">Harness AI-powered workflows that adapt, learn, and scale with your business. Deploy in minutes, not months.</p>
<div className="hero__actions">
<a className="btn btn--primary" href="#contact">
                        Start Free Trial
                        <span className="iconify" data-icon="solar:arrow-right-linear" data-width="15"></span>
</a>
<a className="btn btn--ghost" href="#how">
<span className="iconify" data-icon="solar:play-linear" data-width="15"></span>
                        Watch Demo
                    </a>
</div>
</div>
</div>
</section>

<section className="logos">
<div className="container">
<div className="logos__label">Trusted by 2,000+ teams worldwide</div>
<div className="logos__mask">
<div className="logos__track">
<span className="logos__item">Stripe</span>
<span className="logos__item">Vercel</span>
<span className="logos__item">Linear</span>
<span className="logos__item">Notion</span>
<span className="logos__item">Figma</span>
<span className="logos__item">Ramp</span>
<span className="logos__item">Deel</span>
<span className="logos__item">Loom</span>
<span className="logos__item">Stripe</span>
<span className="logos__item">Vercel</span>
<span className="logos__item">Linear</span>
<span className="logos__item">Notion</span>
<span className="logos__item">Figma</span>
<span className="logos__item">Ramp</span>
<span className="logos__item">Deel</span>
<span className="logos__item">Loom</span>
</div>
</div>
</div>
</section>

<section className="section section--dots" id="features">
<div className="container">
<div className="section-header">
<div className="section-label">Features</div>
<h2 className="section-title">Everything you need to automate at scale</h2>
<p className="section-desc">Purpose-built tools that eliminate manual work and surface insights your team would otherwise miss.</p>
</div>
<div className="features__grid">
<div className="feature-card">
<div className="feature-card__icon"><span className="iconify" data-icon="solar:routing-2-linear" data-width="22"></span></div>
<h3 className="feature-card__title">Adaptive Workflows</h3>
<p className="feature-card__desc">AI that learns your processes and optimizes routing, approvals, and handoffs automatically.</p>
</div>
<div className="feature-card">
<div className="feature-card__icon"><span className="iconify" data-icon="solar:chart-square-linear" data-width="22"></span></div>
<h3 className="feature-card__title">Real-time Analytics</h3>
<p className="feature-card__desc">Live dashboards with predictive modeling and anomaly detection built into every view.</p>
</div>
<div className="feature-card">
<div className="feature-card__icon"><span className="iconify" data-icon="solar:plug-circle-linear" data-width="22"></span></div>
<h3 className="feature-card__title">Smart Integrations</h3>
<p className="feature-card__desc">Connect 200+ tools with one-click setup. Data syncs bidirectionally in real time.</p>
</div>
<div className="feature-card">
<div className="feature-card__icon"><span className="iconify" data-icon="solar:lightbulb-bolt-linear" data-width="22"></span></div>
<h3 className="feature-card__title">Predictive Insights</h3>
<p className="feature-card__desc">Forecast trends, flag risks, and surface opportunities before they become obvious.</p>
</div>
<div className="feature-card">
<div className="feature-card__icon"><span className="iconify" data-icon="solar:users-group-rounded-linear" data-width="22"></span></div>
<h3 className="feature-card__title">Team Collaboration</h3>
<p className="feature-card__desc">Shared workspaces with role-based access, live editing, and built-in review flows.</p>
</div>
<div className="feature-card">
<div className="feature-card__icon"><span className="iconify" data-icon="solar:shield-check-linear" data-width="22"></span></div>
<h3 className="feature-card__title">Enterprise Security</h3>
<p className="feature-card__desc">SOC 2 Type II, end-to-end encryption, SSO, and granular audit logging as standard.</p>
</div>
</div>
</div>
</section>

<section className="section section--grid" id="how">
<div className="container">
<div className="section-header">
<div className="section-label">How It Works</div>
<h2 className="section-title">Three steps to transform your operations</h2>
<p className="section-desc">Go from setup to production-ready automation in under fifteen minutes.</p>
</div>
<div className="steps__grid">
<div className="step">
<div className="step__number">01</div>
<div className="step__icon"><span className="iconify" data-icon="solar:link-round-linear" data-width="22"></span></div>
<h3 className="step__title">Connect</h3>
<p className="step__desc">Link your existing data sources, APIs, and tools. Our connectors handle auth and schema mapping.</p>
<div className="step__connector"><div className="step__connector-fill"></div></div>
</div>
<div className="step">
<div className="step__number">02</div>
<div className="step__icon"><span className="iconify" data-icon="solar:settings-linear" data-width="22"></span></div>
<h3 className="step__title">Configure</h3>
<p className="step__desc">Build intelligent workflows with our visual editor. Define triggers, conditions, and actions without code.</p>
<div className="step__connector"><div className="step__connector-fill"></div></div>
</div>
<div className="step">
<div className="step__number">03</div>
<div className="step__icon"><span className="iconify" data-icon="solar:rocket-2-linear" data-width="22"></span></div>
<h3 className="step__title">Scale</h3>
<p className="step__desc">Deploy and watch your operations transform. The AI learns and improves continuously from your data.</p>
</div>
</div>
</div>
</section>

<section className="section section--visible" id="metrics">
<div className="container">
<div className="metrics__grid">
<div className="metric">
<div className="metric__value" data-count="10" data-suffix="x">0x</div>
<div className="metric__label">Faster<br/>deployment</div>
</div>
<div className="metric">
<div className="metric__value" data-count="99.9" data-decimals="1" data-suffix="%">0%</div>
<div className="metric__label">Uptime<br/>SLA</div>
</div>
<div className="metric">
<div className="metric__value" data-count="50" data-suffix="M+">0M+</div>
<div className="metric__label">Daily API<br/>calls</div>
</div>
<div className="metric">
<div className="metric__value" data-count="2000" data-separator="" data-suffix="+">0+</div>
<div className="metric__label">Teams<br/>worldwide</div>
</div>
</div>
</div>
</section>

<section className="cta" id="contact">
<div className="container">
<div className="cta__inner">
<h2 className="cta__title">
<span>READY TO BUILD</span>
<span className="cta__title-accent">THE FUTURE?</span>
</h2>
<p className="cta__desc">Join thousands of teams already using NEXUS to automate their most complex workflows. Free for 14 days.</p>
<a className="btn btn--primary btn--large" href="#">
                    Start Free Trial
                    <span className="iconify" data-icon="solar:arrow-right-linear" data-width="16"></span>
</a>
</div>
</div>
</section>

<footer className="footer">
<div className="container">
<div className="footer__grid">
<div>
<span className="footer__brand">NEXUS</span>
<p className="footer__tagline">AI-powered automation for modern teams. Built for speed, designed for scale.</p>
</div>
<div className="footer__col">
<h4>Product</h4>
<a href="#">Features</a><a href="#">Integrations</a><a href="#">Pricing</a><a href="#">Changelog</a>
</div>
<div className="footer__col">
<h4>Company</h4>
<a href="#">About</a><a href="#">Blog</a><a href="#">Careers</a><a href="#">Contact</a>
</div>
<div className="footer__col">
<h4>Legal</h4>
<a href="#">Privacy</a><a href="#">Terms</a><a href="#">Security</a><a href="#">DPA</a>
</div>
</div>
<div className="footer__bottom">
<span>2026 NEXUS. All rights reserved.</span>
<span>SOC 2 Type II Certified</span>
</div>
</div>
</footer>









    </>
  );
}
