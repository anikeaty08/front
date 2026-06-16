import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    /* ═══════════════════════════════════════════
       Shaders
       ═══════════════════════════════════════════ */

    const VERT = `
        #define PI 3.141592653589793
        #define PI2 6.283185307179586
        #define PHI 1.618033988749

        attribute float aIndex;
        attribute float aSize;
        attribute float aPhase;

        uniform float uCount;
        uniform float uFormA;
        uniform float uFormB;
        uniform float uMix;
        uniform float uTime;
        uniform vec3 uMouse;
        uniform float uMouseRadius;
        uniform float uPointSize;
        uniform vec3 uColorA;
        uniform vec3 uColorB;
        uniform float uScrollVel;

        varying vec3 vColor;
        varying float vAlpha;

        float hash(float n) { return fract(sin(n + 0.1) * 43758.5453); }

        vec3 formSphere(float i, float n) {
            float p = acos(1.0 - 2.0 * (i + 0.5) / n);
            float t = PI2 * PHI * i;
            float r = 2.8 + hash(i * 6.7) * 0.4;
            return r * vec3(sin(p)*cos(t), sin(p)*sin(t), cos(p));
        }
        vec3 formHelix(float i, float n) {
            float t = i / n * PI2 * 4.0;
            float s = floor(mod(i, 3.0));
            float r = 1.2 + hash(i * 3.1) * 0.3;
            return vec3(r * cos(t + s * PI2 / 3.0), (i/n - 0.5) * 7.0, r * sin(t + s * PI2 / 3.0));
        }
        vec3 formGrid(float i, float n) {
            float side = ceil(sqrt(n));
            float x = (mod(i, side) / side - 0.5) * 7.0;
            float z = (floor(i / side) / side - 0.5) * 7.0;
            return vec3(x, sin(x * 1.2 + z * 0.8) * cos(z) * 0.6, z);
        }
        vec3 formTorus(float i, float n) {
            float t = i / n * PI2;
            float R = 2.2, r = 0.8 + hash(i * 2.9) * 0.2;
            return vec3((R + r * cos(3.0*t)) * cos(2.0*t), (R + r * cos(3.0*t)) * sin(2.0*t), r * sin(3.0*t));
        }
        vec3 formGalaxy(float i, float n) {
            float arm = floor(mod(i, 4.0));
            float t = i / n;
            float r = pow(t, 0.5) * 3.5;
            float a = t * 12.0 + arm * PI2 / 4.0;
            float sc = hash(i * 5.1) * 0.4;
            return vec3(r*cos(a)+(hash(i*2.3)-0.5)*sc, (hash(i*8.7)-0.5)*0.3, r*sin(a)+(hash(i*4.1)-0.5)*sc);
        }
        vec3 formVortex(float i, float n) {
            float t = i / n;
            float a = t * PI2 * 8.0;
            float r = (1.0 - t) * 3.5;
            return vec3(r * cos(a), (t - 0.5) * 5.0, r * sin(a));
        }
        vec3 getForm(float id, float i, float n) {
            if (id < 0.5) return formSphere(i, n);
            if (id < 1.5) return formHelix(i, n);
            if (id < 2.5) return formGrid(i, n);
            if (id < 3.5) return formTorus(i, n);
            if (id < 4.5) return formGalaxy(i, n);
            return formVortex(i, n);
        }

        void main() {
            vec3 posA = getForm(uFormA, aIndex, uCount);
            vec3 posB = getForm(uFormB, aIndex, uCount);
            float t = uMix * uMix * (3.0 - 2.0 * uMix);
            vec3 pos = mix(posA, posB, t);

            pos += vec3(sin(uTime*0.5+aPhase*PI2)*0.1, cos(uTime*0.4+aPhase*4.17)*0.1, sin(uTime*0.3+aPhase*5.03)*0.1);

            float vel = min(uScrollVel, 3.0);
            pos += vec3(sin(aPhase*20.0+uTime*2.0), cos(aPhase*15.0+uTime*1.5), sin(aPhase*25.0+uTime*1.8)) * vel * 0.06;

            vec3 diff = pos - uMouse;
            float dist = length(diff);
            if (dist < uMouseRadius && dist > 0.001) {
                float f = 1.0 - dist / uMouseRadius;
                pos += normalize(diff) * f * f * f * 1.0;
            }

            vColor = mix(uColorA, uColorB, t) * (0.7 + hash(aIndex * 7.3) * 0.3);
            if (dist < uMouseRadius) vColor += (1.0 - dist/uMouseRadius) * 0.2;
            vAlpha = 0.28 + aSize * 0.14 + min(vel, 2.0) * 0.04;

            vec4 mv = modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = clamp(aSize * uPointSize * (80.0 / -mv.z), 0.8, 22.0);
            gl_Position = projectionMatrix * mv;
        }
    `;

    const FRAG = `
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
            float d = length(gl_PointCoord - 0.5);
            if (d > 0.5) discard;
            float a = (1.0 - smoothstep(0.3, 0.5, d)) * vAlpha;
            gl_FragColor = vec4(vColor, a);
        }
    `;

    /* ═══════════════════════════════════════════
       VoidScene — Morphing Particle System
       ═══════════════════════════════════════════ */

    class VoidScene {
        constructor(canvas) {
            this.N = innerWidth < 769 ? 3000 : 6000;
            this.scroll = 0;
            this.scrollVel = 0;
            this.mouseNDC = { x: -100, y: -100 };
            this.mouse3D = new THREE.Vector3(100, 100, 100);
            this._v = new THREE.Vector3();
            this._d = new THREE.Vector3();

            /* Renderer */
            this.ren = new THREE.WebGLRenderer({ canvas, antialias: false });
            this.ren.setSize(innerWidth, innerHeight);
            this.ren.setPixelRatio(Math.min(devicePixelRatio, 2));
            this.ren.setClearColor(0x060606);

            /* Camera */
            this.cam = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 100);
            this.cam.position.set(0, 0, 7);
            this.targetZ = 7;

            /* Scene */
            this.scene = new THREE.Scene();

            /* Particles */
            const geo = new THREE.BufferGeometry();
            const idx = new Float32Array(this.N);
            const sizes = new Float32Array(this.N);
            const phases = new Float32Array(this.N);
            for (let i = 0; i < this.N; i++) {
                idx[i] = i;
                sizes[i] = 0.4 + Math.random() * 1.0;
                phases[i] = Math.random();
            }
            geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(this.N * 3), 3));
            geo.setAttribute('aIndex', new THREE.BufferAttribute(idx, 1));
            geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
            geo.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));

            this.mat = new THREE.ShaderMaterial({
                vertexShader: VERT,
                fragmentShader: FRAG,
                uniforms: {
                    uCount: { value: this.N },
                    uFormA: { value: 0 },
                    uFormB: { value: 0 },
                    uMix: { value: 0 },
                    uTime: { value: 0 },
                    uMouse: { value: new THREE.Vector3(100, 100, 100) },
                    uMouseRadius: { value: 5.0 },
                    uPointSize: { value: 1.2 },
                    uColorA: { value: new THREE.Color(0.78, 1.0, 0.0) },
                    uColorB: { value: new THREE.Color(0.78, 1.0, 0.0) },
                    uScrollVel: { value: 0 },
                },
                transparent: true,
                depthWrite: false,
                blending: THREE.AdditiveBlending,
            });

            this.points = new THREE.Points(geo, this.mat);
            this.points.frustumCulled = false;
            this.scene.add(this.points);

            /* Post-processing — clean render, no blur */
            this.composer = new THREE.EffectComposer(this.ren);
            this.composer.addPass(new THREE.RenderPass(this.scene, this.cam));

            /* Formation keyframes: scroll → formation, camZ, color */
            this.kf = [
                { s: 0.00, f: 0, z: 7,   r: 0.78, g: 1.0,  b: 0.0  },
                { s: 0.07, f: 0, z: 7,   r: 0.78, g: 1.0,  b: 0.0  },
                { s: 0.19, f: 1, z: 9,   r: 0.0,  g: 1.0,  b: 0.64 },
                { s: 0.26, f: 1, z: 9,   r: 0.0,  g: 1.0,  b: 0.64 },
                { s: 0.38, f: 2, z: 8,   r: 0.94, g: 0.94, b: 0.96 },
                { s: 0.45, f: 2, z: 8,   r: 0.94, g: 0.94, b: 0.96 },
                { s: 0.57, f: 3, z: 7.5, r: 1.0,  g: 0.0,  b: 0.25 },
                { s: 0.64, f: 3, z: 7.5, r: 1.0,  g: 0.0,  b: 0.25 },
                { s: 0.76, f: 4, z: 10,  r: 1.0,  g: 0.75, b: 0.0  },
                { s: 0.83, f: 4, z: 10,  r: 1.0,  g: 0.75, b: 0.0  },
                { s: 0.95, f: 5, z: 6,   r: 0.78, g: 1.0,  b: 0.0  },
                { s: 1.00, f: 5, z: 6,   r: 0.78, g: 1.0,  b: 0.0  },
            ];

            /* Events */
            addEventListener('resize', () => this.resize());
            addEventListener('mousemove', e => {
                this.mouseNDC.x = (e.clientX / innerWidth) * 2 - 1;
                this.mouseNDC.y = -(e.clientY / innerHeight) * 2 + 1;
            });
            addEventListener('touchmove', e => {
                if (!e.touches[0]) return;
                this.mouseNDC.x = (e.touches[0].clientX / innerWidth) * 2 - 1;
                this.mouseNDC.y = -(e.touches[0].clientY / innerHeight) * 2 + 1;
            }, { passive: true });
            addEventListener('touchend', () => { this.mouseNDC.x = -100; this.mouseNDC.y = -100; });

            this.loop();
        }

        resize() {
            const w = innerWidth, h = innerHeight;
            this.cam.aspect = w / h;
            this.cam.updateProjectionMatrix();
            this.ren.setSize(w, h);
            this.composer.setSize(w, h);
        }

        getState(s) {
            const kf = this.kf;
            let i = 0;
            while (i < kf.length - 1 && kf[i + 1].s <= s) i++;
            const a = kf[i], b = kf[Math.min(i + 1, kf.length - 1)];
            const range = b.s - a.s;
            const t = range > 0 ? Math.max(0, Math.min(1, (s - a.s) / range)) : 0;
            return {
                fA: a.f, fB: b.f, mix: a.f === b.f ? 0 : t,
                z: a.z + (b.z - a.z) * t,
                rA: a.r, gA: a.g, bA: a.b,
                rB: b.r, gB: b.g, bB: b.b,
            };
        }

        loop() {
            requestAnimationFrame(() => this.loop());
            const t = performance.now() * 0.001;
            const st = this.getState(this.scroll);
            const u = this.mat.uniforms;

            u.uFormA.value = st.fA;
            u.uFormB.value = st.fB;
            u.uMix.value = st.mix;
            u.uTime.value = t;
            u.uScrollVel.value += (Math.abs(this.scrollVel) - u.uScrollVel.value) * 0.1;
            u.uColorA.value.setRGB(st.rA, st.gA, st.bA);
            u.uColorB.value.setRGB(st.rB, st.gB, st.bB);

            /* Unproject mouse to z=0 plane */
            this._v.set(this.mouseNDC.x, this.mouseNDC.y, 0.5).unproject(this.cam);
            this._d.copy(this._v).sub(this.cam.position).normalize();
            const dist = -this.cam.position.z / this._d.z;
            this.mouse3D.copy(this.cam.position).addScaledVector(this._d, dist);
            u.uMouse.value.lerp(this.mouse3D, 0.05);

            /* Camera parallax + zoom (clamp NDC to viewport range) */
            this.targetZ += (st.z - this.targetZ) * 0.04;
            const mx = Math.max(-1, Math.min(1, this.mouseNDC.x));
            const my = Math.max(-1, Math.min(1, this.mouseNDC.y));
            this.cam.position.x += (mx * 0.4 - this.cam.position.x) * 0.02;
            this.cam.position.y += (my * 0.25 - this.cam.position.y) * 0.02;
            this.cam.position.z += (this.targetZ - this.cam.position.z) * 0.04;
            this.cam.lookAt(0, 0, 0);

            this.composer.render();
        }
    }

    /* ═══════════════════════════════════════════
       Text Scramble
       ═══════════════════════════════════════════ */

    function scrambleText(el) {
        const original = el.dataset.orig || (el.dataset.orig = el.textContent);
        const chars = '!<>-_\\/[]{}—=+*^?#________';
        let iter = 0;
        clearInterval(el._si);
        el._si = setInterval(() => {
            el.textContent = original.split('').map((c, i) =>
                i < iter ? original[i] : chars[Math.floor(Math.random() * chars.length)]
            ).join('');
            iter += 0.5;
            if (iter >= original.length) { clearInterval(el._si); el.textContent = original; }
        }, 30);
    }

    /* ═══════════════════════════════════════════
       Init Functions
       ═══════════════════════════════════════════ */

    gsap.registerPlugin(ScrollTrigger);

    function initNav() {
        const nav = document.getElementById('nav');
        const toggle = document.getElementById('navToggle');
        const links = document.getElementById('navLinks');
        let open = false;
        toggle.addEventListener('click', () => {
            open = !open;
            links.classList.toggle('open', open);
            toggle.classList.toggle('active', open);
            nav.classList.toggle('nav--menu-open', open);
        });
        const closeMenu = () => {
            open = false;
            links.classList.remove('open');
            toggle.classList.remove('active');
            nav.classList.remove('nav--menu-open');
        };
        links.addEventListener('click', (e) => {
            if (open) closeMenu();
        });
        window.addEventListener('scroll', () => {
            nav.classList.toggle('scrolled', scrollY > 60);
            if (open) closeMenu();
        }, { passive: true });
    }

    function initScrollProgress() {
        const bar = document.getElementById('scrollProgress');
        gsap.to(bar, {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: true },
        });
    }

    function initHeroReveal() {
        const title = document.getElementById('heroTitle');
        const text = title.textContent;
        title.innerHTML = text.split('').map((c, i) =>
            `<span class="hero__char" style="--i:${i}">${c}</span>`
        ).join('');

        const tl = gsap.timeline({ delay: 0.15 });
        tl.fromTo('.hero__char',
            { y: 80, rotateX: 40, opacity: 0 },
            { y: 0, rotateX: 0, opacity: 1, duration: 0.7, stagger: 0.06, ease: 'expo.out' }
        );
        tl.fromTo('.hero__tag', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.35');
        tl.fromTo('.hero__sub', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.3');
        tl.fromTo('.hero__actions', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.2');
    }

    function initHeadingReveals() {
        document.querySelectorAll('.heading-reveal__inner').forEach(el => {
            gsap.to(el, {
                y: 0,
                duration: 1,
                ease: 'expo.out',
                scrollTrigger: { trigger: el.parentElement, start: 'top 85%' },
            });
        });
    }

    function initManifesto() {
        const el = document.getElementById('manifestoText');
        const words = el.textContent.trim().split(/\s+/);
        el.innerHTML = words.map(w => `<span class="mword">${w}</span>`).join(' ');
        const spans = el.querySelectorAll('.mword');
        gsap.set(spans, { opacity: 0.12 });
        gsap.to(spans, {
            opacity: 1,
            stagger: 0.04,
            scrollTrigger: { trigger: '.manifesto', start: 'top 65%', end: 'bottom 40%', scrub: true },
        });
    }

    function initCapabilities() {
        document.querySelectorAll('.cap-card').forEach(card => {
            /* Spotlight */
            card.addEventListener('mousemove', e => {
                const r = card.getBoundingClientRect();
                card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
                card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
            });
            /* Scramble */
            const txt = card.querySelector('[data-scramble-text]');
            if (txt) {
                card.addEventListener('mouseenter', () => scrambleText(txt));
            }
            /* Reveal */
            gsap.fromTo(card,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
                  scrollTrigger: { trigger: card, start: 'top 88%' } }
            );
        });
    }

    function initPricing() {
        document.querySelectorAll('.pricing-card').forEach((card, i) => {
            gsap.fromTo(card,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, delay: i * 0.1, ease: 'power2.out',
                  scrollTrigger: { trigger: card, start: 'top 85%' } }
            );
        });
    }

    function initWork() {
        document.querySelectorAll('.work__item').forEach((item, i) => {
            gsap.fromTo(item,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, delay: i * 0.1, ease: 'power2.out',
                  scrollTrigger: { trigger: item, start: 'top 90%' } }
            );
        });

        const portfolioBtn = document.querySelector('.portfolio-link');
        if (portfolioBtn) {
            gsap.fromTo(portfolioBtn,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, delay: 0.4, ease: 'power2.out',
                  scrollTrigger: { trigger: portfolioBtn, start: 'top 95%' } }
            );
        }
    }

    function initMetrics() {
        document.querySelectorAll('[data-count]').forEach(el => {
            const target = +el.dataset.count;
            gsap.fromTo(el, { textContent: 0 }, {
                textContent: target,
                duration: 2,
                ease: 'power2.out',
                snap: { textContent: 1 },
                scrollTrigger: { trigger: el, start: 'top 85%' },
            });
        });
        document.querySelectorAll('.metric').forEach((m, i) => {
            gsap.fromTo(m,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7, delay: i * 0.1, ease: 'power2.out',
                  scrollTrigger: { trigger: m, start: 'top 90%' } }
            );
        });
    }

    function initProcess() {
        document.querySelectorAll('.pstep').forEach((step, i) => {
            gsap.fromTo(step,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, delay: i * 0.12, ease: 'power2.out',
                  scrollTrigger: { trigger: step, start: 'top 88%' } }
            );
        });
    }

    function initMagnetic() {
        if (matchMedia('(hover: none)').matches) return;
        document.querySelectorAll('[data-magnetic]').forEach(btn => {
            btn.addEventListener('mousemove', e => {
                const r = btn.getBoundingClientRect();
                const x = e.clientX - r.left - r.width / 2;
                const y = e.clientY - r.top - r.height / 2;
                gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: 'power2.out' });
            });
            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.3)' });
            });
        });
    }

    function initCTA() {
        gsap.fromTo('.cta__title',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power2.out',
              scrollTrigger: { trigger: '.cta', start: 'top 70%' } }
        );
        gsap.fromTo('.cta__sub',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
              scrollTrigger: { trigger: '.cta', start: 'top 65%' } }
        );
        gsap.fromTo('.cta__btn:not(.portfolio-link)',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
              scrollTrigger: { trigger: '.cta', start: 'top 60%' } }
        );
    }

    function initFooter() {
        gsap.fromTo('.footer__inner',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
              scrollTrigger: { trigger: '.footer', start: 'top 90%' } }
        );
    }

    /* ═══════════════════════════════════════════
       Boot
       ═══════════════════════════════════════════ */

    const lenis = new Lenis({ lerp: 0.12, wheelMultiplier: 1.0, smoothWheel: true });
    let voidScene;
    lenis.on('scroll', (e) => {
        ScrollTrigger.update();
        if (voidScene) {
            voidScene.scroll = e.progress;
            voidScene.scrollVel = e.velocity;
        }
    });
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);


    initNav();
    document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
        requestAnimationFrame(() => {
            voidScene = new VoidScene(document.getElementById('mainCanvas'));
            initScrollProgress();
            initHeroReveal();
            initHeadingReveals();
            initManifesto();
            initCapabilities();
            initPricing();
            initWork();
            initMetrics();
            initProcess();
            initMagnetic();
            initCTA();
            initFooter();
        });
    });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="scroll-progress" id="scrollProgress"></div>
<div className="grain"></div>
<div className="canvas-wrap">
<canvas height="1843" id="mainCanvas" style={{width: '768px', height: '1024px'}} width="1382"></canvas>
</div>
<nav className="nav" id="nav">
<a className="nav__logo" href="#">939PRO<span>.</span></a>
<div className="nav__links" id="navLinks">
<a href="#manifesto">About</a>
<a href="#capabilities">Services</a>
<a href="#work">Work</a>
<a href="#pricing">Pricing</a>
<a href="#contact">Contact</a>
</div>
<a className="nav__cta" href="#contact">Start Project <i className="w-3.5 h-3.5" data-lucide="arrow-right" strokeWidth="1.5"></i></a>
<button aria-label="Menu" className="nav__toggle" id="navToggle"><span></span><span></span></button>
</nav>

<section className="hero section" id="hero">
<div className="hero__content">
<div className="hero__tag">Digital Experience Studio</div>
<h1 className="hero__title" id="heroTitle"><span className="hero__char" style={{-I: '0'}}>9</span><span className="hero__char" style={{-I: '1'}}>3</span><span className="hero__char" style={{-I: '2'}}>9</span><span className="hero__char" style={{-I: '3'}}>P</span><span className="hero__char" style={{-I: '4'}}>R</span><span className="hero__char" style={{-I: '5'}}>O</span></h1>
<p className="hero__sub">We engineer digital realities that transcend the boundaries of convention</p>
<div className="hero__actions">
<a className="hero__btn hero__btn--primary" data-magnetic="" href="#work">
                    View Work
                    <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="hero__btn hero__btn--ghost" data-magnetic="" href="#contact">
                    Start Project
                </a>
</div>
</div>
</section>

<section className="manifesto section" id="manifesto">
<div className="manifesto__inner">
<p className="manifesto__text" id="manifestoText"><span className="mword">We</span> <span className="mword">don't</span> <span className="mword">just</span> <span className="mword">design</span> <span className="mword">interfaces</span> <span className="mword">—</span> <span className="mword">we</span> <span className="mword">engineer</span> <span className="mword">digital</span> <span className="mword">realities.</span> <span className="mword">Spaces</span> <span className="mword">where</span> <span className="mword">code</span> <span className="mword">becomes</span> <span className="mword">art,</span> <span className="mword">data</span> <span className="mword">becomes</span> <span className="mword">narrative,</span> <span className="mword">and</span> <span className="mword">interaction</span> <span className="mword">becomes</span> <span className="mword">instinct.</span> <span className="mword">Every</span> <span className="mword">pixel</span> <span className="mword">is</span> <span className="mword">intentional.</span> <span className="mword">Every</span> <span className="mword">frame</span> <span className="mword">is</span> <span className="mword">crafted.</span></p>
</div>
</section>

<section className="capabilities section" id="capabilities">
<div className="container">
<div className="section-tag">What We Do</div>
<h2><span className="heading-reveal"><span className="heading-reveal__inner">Capabilities</span></span></h2>
<div className="cap__grid">
<div className="cap-card" data-scramble="">
<span className="cap-card__num">01</span>
<i className="cap-card__icon w-7 h-7" data-lucide="monitor-smartphone" strokeWidth="1.5"></i>
<h3 className="cap-card__title" data-scramble-text="">Immersive Experiences</h3>
<p className="cap-card__desc">WebGL environments, 3D product configurators, and interactive installations that dissolve the boundary between digital and physical worlds.</p>
</div>
<div className="cap-card" data-scramble="">
<span className="cap-card__num">02</span>
<i className="cap-card__icon w-7 h-7" data-lucide="code" strokeWidth="1.5"></i>
<h3 className="cap-card__title" data-scramble-text="">Creative Development</h3>
<p className="cap-card__desc">Custom-built websites and applications with obsessive attention to interaction design, micro-animations, and performance.</p>
</div>
<div className="cap-card" data-scramble="">
<span className="cap-card__num">03</span>
<i className="cap-card__icon w-7 h-7" data-lucide="globe" strokeWidth="1.5"></i>
<h3 className="cap-card__title" data-scramble-text="">Spatial Computing</h3>
<p className="cap-card__desc">AR/VR experiences and spatial interfaces designed for the next generation of computing platforms and interaction paradigms.</p>
</div>
<div className="cap-card" data-scramble="">
<span className="cap-card__num">04</span>
<i className="cap-card__icon w-7 h-7" data-lucide="palette" strokeWidth="1.5"></i>
<h3 className="cap-card__title" data-scramble-text="">Real-time Graphics</h3>
<p className="cap-card__desc">GPU-accelerated visualizations, shader programming, and real-time rendering for brand experiences and data narratives.</p>
</div>
</div>
</div>
</section>

<section className="work section" id="work">
<div className="container">
<div className="section-tag">Selected Work</div>
<h2><span className="heading-reveal"><span className="heading-reveal__inner">Projects</span></span></h2>
<div className="work__grid">
<a className="work__item work__item--tall" href="#">
<img alt="Neural Canvas — Immersive digital art installation with glitch aesthetics" className="work__img object-cover w-full h-full absolute inset-0" loading="lazy" src="https://images.unsplash.com/photo-1720962158789-9389a4f399da?w=2560&amp;q=80"/>
<div className="work__overlay">
<span className="work__cat">Immersive Web</span>
<div className="flex items-center gap-2">
<h3 className="work__name">Neural Canvas</h3>
<i className="w-4.5 h-4.5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
</a>
<a className="work__item" href="#">
<img alt="Prism — Light refraction brand experience on dark background" className="work__img object-cover w-full h-full absolute inset-0" loading="lazy" src="https://images.unsplash.com/photo-1720962158919-6c5f5f99630d?w=1600&amp;q=80"/>
<div className="work__overlay">
<span className="work__cat">Brand Experience</span>
<div className="flex items-center gap-2">
<h3 className="work__name">Prism</h3>
<i className="w-4.5 h-4.5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
</a>
<a className="work__item" href="#">
<img alt="Retrowave — VR headset spatial computing experience" className="work__img object-cover w-full h-full absolute inset-0" loading="lazy" src="https://images.unsplash.com/photo-1720962158858-5fb16991d2b8?w=1600&amp;q=80"/>
<div className="work__overlay">
<span className="work__cat">Spatial Computing</span>
<div className="flex items-center gap-2">
<h3 className="work__name">Retrowave</h3>
<i className="w-4.5 h-4.5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
</a>
</div>
<div className="flex justify-center mt-12 sm:mt-16 w-full">
<a className="cta__btn portfolio-link" data-magnetic="" href="https://sites.google.com/view/939pro/portfolio" rel="noopener noreferrer" style={{marginTop: '0'}} target="_blank">
<span>View Full Portfolio</span>
<i className="w-4.5 h-4.5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="metrics section" id="metrics">
<div className="container">
<div className="metrics__grid">
<div className="metric"><span className="metric__num" data-count="147">0</span><span className="metric__label">Projects Delivered</span></div>
<div className="metric"><span className="metric__num" data-count="52">0</span><span className="metric__label">Global Clients</span></div>
<div className="metric"><span className="metric__num" data-count="18">0</span><span className="metric__label">Awards Won</span></div>
<div className="metric"><span className="metric__num" data-count="9">0</span><span className="metric__label">Years Active</span></div>
</div>
</div>
</section>

<section className="process section" id="process">
<div className="container">
<div className="section-tag">How We Work</div>
<h2><span className="heading-reveal"><span className="heading-reveal__inner">Process</span></span></h2>
<div className="process__steps">
<div className="pstep"><span className="pstep__num">01</span><h3 className="pstep__title">Discovery</h3><p className="pstep__desc">Deep research into your brand, audience, and objectives to define the creative direction.</p></div>
<div className="pstep"><span className="pstep__num">02</span><h3 className="pstep__title">Concept</h3><p className="pstep__desc">Visual exploration and prototyping to establish narrative, aesthetics, and interaction model.</p></div>
<div className="pstep"><span className="pstep__num">03</span><h3 className="pstep__title">Craft</h3><p className="pstep__desc">Meticulous development with obsessive attention to performance, detail, and user experience.</p></div>
<div className="pstep"><span className="pstep__num">04</span><h3 className="pstep__title">Launch</h3><p className="pstep__desc">Deployment, optimization, and ongoing support to ensure lasting impact and results.</p></div>
</div>
</div>
</section>

<section className="pricing section" id="pricing">
<div className="container">
<div className="section-tag mb-6">Services &amp; Pricing</div>
<h2 className="font-['Syne',sans-serif] text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4 text-[var(--text)]">
<span className="heading-reveal"><span className="heading-reveal__inner">Photography Packages</span></span>
</h2>
<p className="text-lg md:text-xl text-[var(--text-muted)] italic mb-10 max-w-2xl font-light">
                Capturing the love, the laughter, and every little moment in between.
            </p>

<div className="flex flex-wrap gap-x-6 gap-y-3 mb-16 text-sm text-[var(--text-dim)] font-medium">
<a className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors" href="mailto:939promedia@gmail.com"><i className="w-4 h-4" data-lucide="mail" strokeWidth="1.5"></i> 939promedia@gmail.com</a>
<span className="hidden md:inline text-[var(--glass-border)]">|</span>
<a className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors" href="tel:850-361-8984"><i className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></i> 850-361-8984</a>
<span className="hidden md:inline text-[var(--glass-border)]">|</span>
<a className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors" href="https://www.facebook.com/dubstar939" target="_blank"><i className="w-4 h-4" data-lucide="link" strokeWidth="1.5"></i> facebook.com/dubstar939</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="pricing-card bg-[var(--glass)] border border-[var(--glass-border)] rounded-2xl p-8 hover:border-[#c8ff00]/30 transition-all duration-400 group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#c8ff00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"></div>
<div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4">
<div>
<div className="flex items-center gap-3 mb-2">
<i className="w-6 h-6 text-[var(--accent)]" data-lucide="camera" strokeWidth="1.5"></i>
<h3 className="font-['Syne',sans-serif] text-2xl font-medium tracking-tight">The Essentials</h3>
</div>
<p className="text-base text-[var(--text-muted)] font-light">Perfect for small weddings or elopements</p>
</div>
<div className="text-left sm:text-right">
<span className="font-['Syne',sans-serif] text-3xl font-semibold text-[var(--accent)]">$400</span>
</div>
</div>
<ul className="space-y-4 mt-8">
<li className="flex items-start gap-3 text-lg text-[var(--text-dim)] font-light">
<i className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span>2 hours of continuous coverage</span>
</li>
<li className="flex items-start gap-3 text-lg text-[var(--text-dim)] font-light">
<i className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span>1 photographer</span>
</li>
<li className="flex items-start gap-3 text-lg text-[var(--text-dim)] font-light">
<i className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span>150+ edited high-resolution images</span>
</li>
<li className="flex items-start gap-3 text-lg text-[var(--text-dim)] font-light">
<i className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span>Online gallery for viewing, downloading &amp; sharing</span>
</li>
<li className="flex items-start gap-3 text-lg text-[var(--text-dim)] font-light">
<i className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span>Print release included</span>
</li>
</ul>
</div>

<div className="pricing-card bg-[var(--glass)] border border-[var(--glass-border)] rounded-2xl p-8 hover:border-[#c8ff00]/30 transition-all duration-400 group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#c8ff00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"></div>
<div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4">
<div>
<div className="flex items-center gap-3 mb-2">
<i className="w-6 h-6 text-[var(--accent)]" data-lucide="image" strokeWidth="1.5"></i>
<h3 className="font-['Syne',sans-serif] text-2xl font-medium tracking-tight">The Classic</h3>
</div>
<p className="text-base text-[var(--text-muted)] font-light">Great for medium weddings</p>
</div>
<div className="text-left sm:text-right">
<span className="font-['Syne',sans-serif] text-3xl font-semibold text-[var(--accent)]">$750</span>
</div>
</div>
<ul className="space-y-4 mt-8">
<li className="flex items-start gap-3 text-lg text-[var(--text-dim)] font-light">
<i className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span>4 hours of coverage</span>
</li>
<li className="flex items-start gap-3 text-lg text-[var(--text-dim)] font-light">
<i className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span>1 photographer</span>
</li>
<li className="flex items-start gap-3 text-lg text-[var(--text-dim)] font-light">
<i className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span>250+ edited high-resolution images</span>
</li>
<li className="flex items-start gap-3 text-lg text-[var(--text-dim)] font-light">
<i className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span>Online gallery with downloading and sharing</span>
</li>
<li className="flex items-start gap-3 text-lg text-[var(--text-dim)] font-light">
<i className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span>Timeline planning assistance</span>
</li>
</ul>
</div>

<div className="pricing-card bg-[var(--glass)] border border-[var(--glass-border)] rounded-2xl p-8 hover:border-[#c8ff00]/30 transition-all duration-400 group relative overflow-hidden">
<div className="flex items-center gap-3 mb-6">
<i className="w-6 h-6 text-[var(--accent)]" data-lucide="plus-circle" strokeWidth="1.5"></i>
<h3 className="font-['Syne',sans-serif] text-2xl font-medium tracking-tight">Add-Ons</h3>
</div>
<div className="mb-5 pb-5 border-b border-[var(--glass-border)]">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-lg text-[var(--text)] font-medium">
<span>Additional Hour</span>
<span className="text-[var(--accent)]">$200/hr</span>
</div>
</div>
<ul className="space-y-5">
<li className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-lg text-[var(--text-dim)] font-light">
<span>Wedding Album (10x10, 20 pages)</span>
<span className="text-[var(--text)] whitespace-nowrap">$250</span>
</li>
<li className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-lg text-[var(--text-dim)] font-light">
<span>Travel Fee (outside [City/Area])</span>
<span className="text-[var(--text)] whitespace-nowrap">$0.60/mile</span>
</li>
<li className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-lg text-[var(--text-dim)] font-light">
<span>Rehearsal Dinner Coverage (2 hrs)</span>
<span className="text-[var(--text)] whitespace-nowrap">$300</span>
</li>
<li className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-lg text-[var(--text-dim)] font-light">
<span>Rush Editing (within 7 days)</span>
<span className="text-[var(--text)] whitespace-nowrap">$300</span>
</li>
</ul>
</div>

<div className="pricing-card bg-[var(--glass)] border border-[var(--glass-border)] rounded-2xl p-8 hover:border-[#c8ff00]/30 transition-all duration-400 group relative overflow-hidden">
<div className="flex items-center gap-3 mb-8">
<i className="w-6 h-6 text-[var(--accent)]" data-lucide="credit-card" strokeWidth="1.5"></i>
<h3 className="font-['Syne',sans-serif] text-2xl font-medium tracking-tight">Booking &amp; Payment</h3>
</div>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-[var(--accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
<span className="text-[var(--accent)] font-medium text-sm">1</span>
</div>
<div>
<h4 className="text-lg text-[var(--text)] font-medium mb-1">Retainer Fee</h4>
<p className="text-lg text-[var(--text-dim)] font-light">30% retainer fee required to reserve your date.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-[var(--accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
<span className="text-[var(--accent)] font-medium text-sm">2</span>
</div>
<div>
<h4 className="text-lg text-[var(--text)] font-medium mb-1">Final Balance</h4>
<p className="text-lg text-[var(--text-dim)] font-light">Remaining balance due 14 days before the wedding.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="cta section" id="contact">
<div className="cta__inner">
<div className="section-tag">Get In Touch</div>
<h2 className="cta__title">Let's create<br/>something <em>extraordinary</em></h2>
<p className="cta__sub">Ready to push the boundaries of digital experience?</p>
<a className="cta__btn" data-magnetic="" href="mailto:939promedia@gmail.com">
<span>Start a Project</span>
<i className="w-4.5 h-4.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</section>

<footer className="footer">
<div className="container footer__inner">
<div className="footer__left">
<span className="footer__logo">939PRO<span>.</span></span>
<p className="footer__tagline">Digital Experience Studio</p>
</div>
<div className="footer__right">
<div className="footer__col">
<span className="footer__col-title">Navigation</span>
<a href="#capabilities">Services</a><a href="#work">Work</a><a href="#process">Process</a><a href="#pricing">Pricing</a><a href="#contact">Contact</a>
</div>
<div className="footer__col">
<span className="footer__col-title">Connect</span>
<a href="#">Twitter / X</a><a href="#">Instagram</a><a href="#">Dribbble</a><a href="#">LinkedIn</a>
</div>
</div>
</div>
<div className="container footer__bottom">
<span>© 2025 939PRO</span>
<span>Crafted with obsession</span>
</div>
</footer>













    </>
  );
}
