import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'PIXEL_ID_PLACEHOLDER');
fbq('track', 'PageView');



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-PLACEHOLDER');



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
                this.count = 1500;
                this.maxConn = 2000;

                this.keyframes = [
                    { scroll: 0,    x: 0,   y: 0,    s: 1    },
                    { scroll: 0.15, x: 0,   y: 0.3,  s: 0.95 },
                    { scroll: 0.35, x: 2.2, y: 0.2,  s: 0.85 },
                    { scroll: 0.55, x: -2,  y: -0.3, s: 0.8  },
                    { scroll: 0.75, x: 0,   y: 0,    s: 1.15 },
                    { scroll: 0.90, x: 0,   y: -0.3, s: 1    },
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
                        uColor1: { value: new THREE.Color('#ff5a00') }, // Allegro Orange
                        uColor2: { value: new THREE.Color('#ffffff') }, // White
                        uOpacity: { value: 0.35 },
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
                    color: new THREE.Color('#ff5a00'),
                    transparent: true, opacity: 0.025, depthWrite: false,
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

                const kf = this.lerpKeyframes(sp);
                const breathe = 1.0 + Math.sin(t * 0.4) * 0.02;
                this.group.position.x += (kf.x - this.group.position.x) * 0.04;
                this.group.position.y += (kf.y - this.group.position.y) * 0.04;
                this.group.scale.setScalar(kf.s * breathe);

                this.updateMorph(sp * 3);
                this.applyMouse();
                this.syncBuffers();

                this.group.rotation.y = t * 0.055 + this.mouse.x * 0.2;
                this.group.rotation.x = Math.sin(t * 0.025) * 0.1 + this.mouse.y * 0.15;

                const lineOp = 0.02 + Math.sin(t * 0.35) * 0.01 + Math.sin(sp * Math.PI) * 0.01;
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

        // ── GSAP Scroll Animations ──────────────

        function initAnimations() {
            const heroTl = gsap.timeline({ delay: 0.7 });
            heroTl
                .from('.hero__badge', { y: 15, opacity: 0, duration: 0.6, ease: 'power3.out' })
                .from('.hero__title', { y: 50, opacity: 0, clipPath: 'inset(100% 0 0 0)', duration: 1.1, ease: 'power4.out' }, '-=0.25')
                .from('.hero__desc', { y: 25, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
                .from('.hero__actions', { y: 15, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
                .from('.hero__mockup', { y: 40, opacity: 0, rotationX: 10, transformPerspective: 800, duration: 1, ease: 'power3.out' }, '-=0.5');

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

            gsap.utils.toArray('.portfolio-card').forEach((card, i) => {
                gsap.from(card, {
                    y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
                    scrollTrigger: { trigger: card, start: 'top 85%' },
                    delay: i * 0.15,
                });
            });

            gsap.utils.toArray('.pricing-card').forEach((card, i) => {
                gsap.from(card, {
                    y: 50, opacity: 0, duration: 0.8, ease: 'back.out(1.2)',
                    scrollTrigger: { trigger: '.pricing__grid', start: 'top 80%' },
                    delay: i * 0.15,
                });
            });

            document.querySelectorAll('.step').forEach((step, i) => {
                gsap.from(step, {
                    y: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
                    scrollTrigger: { trigger: step, start: 'top 82%' },
                    onComplete: () => step.classList.add('is-visible'),
                    delay: i * 0.15,
                });
            });

            gsap.utils.toArray('.faq-item').forEach((item, i) => {
                gsap.from(item, {
                    x: -20, opacity: 0, duration: 0.6, ease: 'power2.out',
                    scrollTrigger: { trigger: '.faq__list', start: 'top 85%' },
                    delay: i * 0.1,
                });
            });

            gsap.from('.cta__title', {
                y: 40, opacity: 0, duration: 1, ease: 'power4.out',
                scrollTrigger: { trigger: '.cta', start: 'top 75%' },
            });
            gsap.from('.cta__desc', {
                y: 20, opacity: 0, duration: 0.8, ease: 'power3.out',
                scrollTrigger: { trigger: '.cta', start: 'top 65%' },
            });
            gsap.from('.cta .btn', {
                y: 20, opacity: 0, scale: 0.9, duration: 0.7, ease: 'back.out(1.5)',
                scrollTrigger: { trigger: '.cta', start: 'top 58%' },
            });

            gsap.utils.toArray('.section-header').forEach(h => {
                gsap.from(h.children, {
                    y: 25, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
                    scrollTrigger: { trigger: h, start: 'top 85%' },
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

        // ── Boot ────────────────────────────────

        const loader = document.getElementById('loader');
        window.addEventListener('load', () => setTimeout(() => loader.classList.add('is-loaded'), 400));

        initNav();
        if (typeof THREE !== 'undefined') new NexusScene();

        document.addEventListener('DOMContentLoaded', () => {
            requestAnimationFrame(() => {
                initAnimations();
                initCardEffects();
            });
        });
    })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="loader" id="loader"><div className="loader__brand">WideoAllegro</div></div>
<canvas id="webgl"></canvas>

<nav className="nav" id="nav">
<div className="container nav__inner">
<a className="nav__logo" href="#">Wideo<span>Allegro</span></a>
<div className="nav__links">
<a href="#problem">Dlaczego Wideo?</a>
<a href="#portfolio">Przykłady</a>
<a href="#pakiety">Pakiety</a>
<a href="#proces">Jak to działa</a>
<a href="#faq">FAQ</a>
</div>
<a className="nav__cta" href="#pakiety">
                Zamów
                <span className="iconify" data-icon="solar:arrow-right-linear" data-width="14"></span>
</a>
<button aria-label="Menu" className="nav__toggle" id="navToggle">
<span className="iconify" data-icon="solar:hamburger-menu-linear" data-width="24"></span>
</button>
</div>
</nav>

<div className="mobile-menu" id="mobileMenu">
<div className="mobile-menu__header">
<span className="nav__logo">Wideo<span>Allegro</span></span>
<button aria-label="Zamknij" className="mobile-menu__close" id="mobileClose">
<span className="iconify" data-icon="solar:close-circle-linear" data-width="26"></span>
</button>
</div>
<nav className="mobile-menu__nav">
<a data-mobile-link="" href="#problem">Dlaczego Wideo?</a>
<a data-mobile-link="" href="#portfolio">Przykłady</a>
<a data-mobile-link="" href="#pakiety">Pakiety</a>
<a data-mobile-link="" href="#proces">Jak to działa</a>
<a data-mobile-link="" href="#faq">FAQ</a>
</nav>
</div>

<section className="hero" id="hero">
<div className="container">
<div className="hero__inner">
<div className="hero__badge">
<span className="hero__badge-dot"></span>
                    Video Commerce Platform
                </div>
<h1 className="hero__title">
                    WIDEO PRODUKTOWE<br/>
                    DO OFERT <span className="hero__title-accent">ALLEGRO.</span>
</h1>
<p className="hero__desc">Zwiększ konwersję i wyróżnij swoją ofertę dzięki profesjonalnej produkcji wideo. Krótko, skutecznie, pod kątem sprzedaży.</p>
<div className="hero__actions">
<a className="btn btn--primary btn--large" href="#pakiety">
                        Zamów produkcję
                        <span className="iconify" data-icon="solar:cart-large-2-linear" data-width="18"></span>
</a>
<a className="btn btn--ghost btn--large" href="#portfolio">
<span className="iconify" data-icon="solar:play-circle-linear" data-width="18"></span>
                        Zobacz przykłady
                    </a>
</div>
<div className="hero__mockup">
<div className="hero__mockup-top">
<div className="hero__mockup-dot"></div><div className="hero__mockup-dot"></div><div className="hero__mockup-dot"></div>
</div>
<div className="hero__mockup-play"><span className="iconify" data-icon="solar:play-bold" data-width="24"></span></div>
</div>
</div>
</div>
</section>

<section className="section section--dots" id="problem">
<div className="container">
<div className="section-header">
<div className="section-label">Problem</div>
<h2 className="section-title">Wideo to nowy standard sprzedaży marketplace.</h2>
<p className="section-desc">Klienci kupują oczami. Zwykłe zdjęcia to dziś za mało, by wygrać walkę o uwagę.</p>
</div>
<div className="features__grid">
<div className="feature-card problem-card">
<div className="feature-card__icon"><span className="iconify" data-icon="solar:video-frame-linear" data-width="24"></span></div>
<h3 className="feature-card__title">90% ofert nie ma wideo</h3>
<p className="feature-card__desc">Większość sprzedawców nadal polega tylko na zdjęciach. To Twoja szansa na gigantyczne wyróżnienie się na listingu.</p>
</div>
<div className="feature-card problem-card">
<div className="feature-card__icon"><span className="iconify" data-icon="solar:eye-closed-linear" data-width="24"></span></div>
<h3 className="feature-card__title">Klienci nie czytają opisów</h3>
<p className="feature-card__desc">Użytkownicy skrolują, szukając szybkiej informacji. Krótkie wideo sprzedaje produkt szybciej niż ściana tekstu.</p>
</div>
<div className="feature-card problem-card">
<div className="feature-card__icon"><span className="iconify" data-icon="solar:stopwatch-linear" data-width="24"></span></div>
<h3 className="feature-card__title">Czas ucieka</h3>
<p className="feature-card__desc">Konkurencja zacznie to robić szybciej niż myślisz. Kto pierwszy wdroży wideo, ten zbierze największy zysk.</p>
</div>
</div>
</div>
</section>

<section className="section section--grid" id="rozwiazanie">
<div className="container">
<div className="section-header">
<div className="section-label">Co robimy inaczej</div>
<h2 className="section-title">Tworzymy wideo, które sprzedaje</h2>
<p className="section-desc">Krótko, konkretnie, bez marketingowego lania wody. Skupiamy się na konwersji.</p>
</div>
<div className="features__grid">
<div className="feature-card">
<div className="feature-card__icon"><span className="iconify" data-icon="solar:magnifer-linear" data-width="22"></span></div>
<h3 className="feature-card__title">Analiza oferty i konkurencji</h3>
<p className="feature-card__desc">Nie nagrywamy w ciemno. Najpierw badamy, co wyróżnia Twój produkt i jak pokonać konkurentów.</p>
</div>
<div className="feature-card">
<div className="feature-card__icon"><span className="iconify" data-icon="solar:clapperboard-play-linear" data-width="22"></span></div>
<h3 className="feature-card__title">Produkcja sprzedażowa</h3>
<p className="feature-card__desc">Zapomnij o nudnych slideshow ze zdjęć. Tworzymy dynamiczne materiały z mocnym hookiem na starcie.</p>
</div>
<div className="feature-card">
<div className="feature-card__icon"><span className="iconify" data-icon="solar:check-circle-linear" data-width="22"></span></div>
<h3 className="feature-card__title">Zgodność z Allegro</h3>
<p className="feature-card__desc">Otrzymujesz gotowy plik, który bez problemu wgrasz do swojej oferty. Znamy wszystkie specyfikacje techniczne.</p>
</div>
</div>
</div>
</section>

<section className="section section--solid" id="portfolio">
<div className="container">
<div className="section-header">
<div className="section-label">Przykłady</div>
<h2 className="section-title">Zobacz nasze realizacje</h2>
<p className="section-desc">Przykłady wideo stworzonych specjalnie pod kątem wysokiej konwersji.</p>
</div>
<div className="portfolio__grid">
<div className="portfolio-card">
<div className="portfolio-card__video">
<div className="portfolio-card__play"><span className="iconify" data-icon="solar:play-bold" data-width="20"></span></div>
</div>
<div className="portfolio-card__info">
<span className="portfolio-card__tag">Smart Home</span>
<h3 className="portfolio-card__title">Kamera obrotowa Wi-Fi</h3>
<div className="portfolio-card__meta">
<span>Hook: Problem-Rozwiązanie</span>
<span>28 sek</span>
</div>
</div>
</div>
<div className="portfolio-card">
<div className="portfolio-card__video">
<div className="portfolio-card__play"><span className="iconify" data-icon="solar:play-bold" data-width="20"></span></div>
</div>
<div className="portfolio-card__info">
<span className="portfolio-card__tag">Beauty</span>
<h3 className="portfolio-card__title">Zestaw pędzli premium</h3>
<div className="portfolio-card__meta">
<span>Hook: Close-up Detail</span>
<span>15 sek</span>
</div>
</div>
</div>
<div className="portfolio-card">
<div className="portfolio-card__video">
<div className="portfolio-card__play"><span className="iconify" data-icon="solar:play-bold" data-width="20"></span></div>
</div>
<div className="portfolio-card__info">
<span className="portfolio-card__tag">Elektronika</span>
<h3 className="portfolio-card__title">Słuchawki TWS PRO</h3>
<div className="portfolio-card__meta">
<span>Hook: Unboxing + Test</span>
<span>45 sek</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="section section--dots" id="pakiety">
<div className="container">
<div className="section-header">
<div className="section-label">Cennik</div>
<h2 className="section-title">Wybierz pakiet dla siebie</h2>
<p className="section-desc">Proste pakiety bez ukrytych kosztów. Inwestycja, która zwraca się w konwersji.</p>
</div>
<div className="pricing__grid">
<div className="pricing-card">
<h3 className="pricing-card__name">Pakiet SELLER</h3>
<div className="pricing-card__price">790 <span>zł</span></div>
<ul className="pricing-card__features">
<li><span className="iconify" data-icon="solar:check-circle-bold"></span> 1 wideo do 30s</li>
<li><span className="iconify" data-icon="solar:check-circle-bold"></span> 1 mocny hook</li>
<li><span className="iconify" data-icon="solar:check-circle-bold"></span> 1 tura poprawek</li>
<li><span className="iconify" data-icon="solar:check-circle-bold"></span> Szybka realizacja (48h)</li>
</ul>
<a className="btn btn--ghost" href="#checkout">Zamów teraz</a>
</div>
<div className="pricing-card pricing-card--popular">
<div className="pricing-card__badge">Najczęściej wybierany</div>
<h3 className="pricing-card__name">Pakiet BOOST</h3>
<div className="pricing-card__price">1490 <span>zł</span></div>
<ul className="pricing-card__features">
<li><span className="iconify" data-icon="solar:check-circle-bold"></span> 1 wideo do 45s</li>
<li><span className="iconify" data-icon="solar:check-circle-bold"></span> 2 wersje hooka (A/B)</li>
<li><span className="iconify" data-icon="solar:check-circle-bold"></span> Miniatura do oferty</li>
<li><span className="iconify" data-icon="solar:check-circle-bold"></span> 2 tury poprawek</li>
<li><span className="iconify" data-icon="solar:check-circle-bold"></span> Analiza oferty Allegro</li>
</ul>
<a className="btn btn--primary" href="#checkout">Zamów teraz</a>
</div>
<div className="pricing-card">
<h3 className="pricing-card__name">Pakiet DOMINACJA</h3>
<div className="pricing-card__price">2490 <span>zł</span></div>
<ul className="pricing-card__features">
<li><span className="iconify" data-icon="solar:check-circle-bold"></span> 2 gotowe wideo</li>
<li><span className="iconify" data-icon="solar:check-circle-bold"></span> 3 wersje hooka</li>
<li><span className="iconify" data-icon="solar:check-circle-bold"></span> Analiza konkurencji</li>
<li><span className="iconify" data-icon="solar:check-circle-bold"></span> Konsultacja strategiczna</li>
<li><span className="iconify" data-icon="solar:check-circle-bold"></span> Grafiki infograficzne</li>
</ul>
<a className="btn btn--ghost" href="#checkout">Zamów teraz</a>
</div>
</div>
<div className="b2b-contact">
                Reprezentujesz agencję lub potrzebujesz hurtowych zamówień? <a href="mailto:kontakt@wideoallegro.pl">Skontaktuj się z nami</a>.
            </div>
</div>
</section>

<section className="section section--grid" id="proces">
<div className="container">
<div className="section-header">
<div className="section-label">Proces</div>
<h2 className="section-title">Jak to działa?</h2>
<p className="section-desc">Od zamówienia do gotowego wideo w 4 prostych krokach.</p>
</div>
<div className="steps__grid">
<div className="step">
<div className="step__number">01</div>
<div className="step__icon"><span className="iconify" data-icon="solar:link-round-linear" data-width="22"></span></div>
<h3 className="step__title">Przesyłasz dane</h3>
<p className="step__desc">Wysyłasz link do obecnej oferty, zdjęcia produktu i opcjonalne materiały bazowe.</p>
<div className="step__connector"><div className="step__connector-fill"></div></div>
</div>
<div className="step">
<div className="step__number">02</div>
<div className="step__icon"><span className="iconify" data-icon="solar:magnifer-linear" data-width="22"></span></div>
<h3 className="step__title">My analizujemy</h3>
<p className="step__desc">Sprawdzamy produkt, docelową grupę odbiorców i działania Twojej konkurencji na Allegro.</p>
<div className="step__connector"><div className="step__connector-fill"></div></div>
</div>
<div className="step">
<div className="step__number">03</div>
<div className="step__icon"><span className="iconify" data-icon="solar:video-library-linear" data-width="22"></span></div>
<h3 className="step__title">Produkcja</h3>
<p className="step__desc">Piszemy skrypt i montujemy dynamiczne wideo sprzedażowe z mocnym hookiem.</p>
<div className="step__connector"><div className="step__connector-fill"></div></div>
</div>
<div className="step">
<div className="step__number">04</div>
<div className="step__icon"><span className="iconify" data-icon="solar:box-minimalistic-linear" data-width="22"></span></div>
<h3 className="step__title">Gotowe wideo</h3>
<p className="step__desc">Otrzymujesz plik zoptymalizowany pod specyfikację Allegro, gotowy do publikacji.</p>
</div>
</div>
</div>
</section>

<section className="section section--solid" id="faq">
<div className="container">
<div className="section-header">
<div className="section-label">Pytania</div>
<h2 className="section-title">FAQ</h2>
</div>
<div className="faq__list">
<div className="faq-item">
<details>
<summary>Czy wideo jest zgodne z wymaganiami Allegro?</summary>
<div className="faq-item__content">Tak, wszystkie nasze produkcje są przygotowywane ściśle pod techniczne wytyczne Allegro (odpowiedni format, czas trwania, waga pliku oraz brak zakazanych znaków wodnych/linków). Otrzymujesz plik, który po prostu dodajesz do oferty.</div>
</details>
</div>
<div className="faq-item">
<details>
<summary>Jak długo trwa realizacja?</summary>
<div className="faq-item__content">W zależności od wybranego pakietu realizacja zajmuje od 48 godzin (dla podstawowego pakietu) do 5 dni roboczych dla bardziej rozbudowanych opcji wymagających dogłębnej analizy i wielu wersji wideo.</div>
</details>
</div>
<div className="faq-item">
<details>
<summary>Ile poprawek zawiera pakiet?</summary>
<div className="faq-item__content">Pakiet SELLER obejmuje 1 turę poprawek, pakiet BOOST – 2 tury, a pakiet DOMINACJA umożliwia bardziej elastyczną współpracę. Chcemy, abyś był w 100% zadowolony z efektu końcowego.</div>
</details>
</div>
<div className="faq-item">
<details>
<summary>Czy mogę używać wideo w reklamach Meta Ads/TikTok?</summary>
<div className="faq-item__content">Oczywiście! Filmy, które przygotowujemy są niezwykle dynamiczne i świetnie nadają się również do pozyskiwania ruchu z zewnątrz. Pakiety BOOST i DOMINACJA zawierają dodatkowe "hooki", które są idealne do testów A/B w płatnych kampaniach.</div>
</details>
</div>
</div>
</div>
</section>

<section className="cta">
<div className="container">
<div className="cta__inner">
<h2 className="cta__title">
                    Twoja konkurencja jeszcze tego nie robi.<br/>
<span className="cta__title-accent">Ty możesz być pierwszy.</span>
</h2>
<p className="cta__desc">Zamów profesjonalne wideo produktowe i zobacz, jak konwersja w Twoich ofertach Allegro rośnie już od pierwszego dnia.</p>
<a className="btn btn--primary btn--large" href="#pakiety">
                    Zamów produkcję
                    <span className="iconify" data-icon="solar:arrow-right-linear" data-width="16"></span>
</a>
</div>
</div>
</section>

<footer className="footer">
<div className="container">
<div className="footer__grid">
<div>
<span className="footer__brand">Wideo<span>Allegro</span></span>
<p className="footer__tagline">Platforma Video Commerce stworzona po to, by skalować Twoją sprzedaż na marketplace.</p>
</div>
</div>
<div className="footer__bottom">
<span>© 2024 WideoAllegro. Wszelkie prawa zastrzeżone. | Niezależny dostawca usług wideo.</span>
</div>
</div>
</footer>









    </>
  );
}
