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
const rotateValues = [0, 5, 6, 10, 15, 20, 30, 45, 75];
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
const perspectiveUtilities = {
".perspective-[1000px]": { perspective: "1000px" },
};
addUtilities({
...rotateXUtilities,
...perspectiveUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        import * as THREE from 'https://esm.sh/three@0.160.0';

        /*
         * ==========================================
         * 1. THEME / CONSTANTS CONFIGURATION
         * ==========================================
         */
        const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const CONFIG = {
            scrollDistance: "+=3800",
            scrubSmoothing: 1,        
            particleCount: 12000,     
            particleSize: 1.5,
            spread: 2500,             
            orbRadius: 280,           
            cameraZStart: 600,
            cameraZEnd: 150,
            idleRotationSpeed: isReducedMotion ? 0.0001 : 0.0008,
            scrollRotationFactor: isReducedMotion ? 0 : 0.5
        };

        const state = {
            scrollProgress: 0,
            targetProgress: 0
        };

        // Custom Brand Color Set - Update these hex codes to match your logo variations
        const THEMES = [
            { id: '#pinned-stage', bg: '#030303', accent: '#FF5F1F', border: '#1e1e1e', panel: 'rgba(20, 20, 20, 0.4)' },
            { id: '#manifesto',    bg: '#050508', accent: '#E6551C', border: '#1a1c23', panel: 'rgba(15, 20, 30, 0.4)' },
            { id: '#overview',     bg: '#02040a', accent: '#FF5F1F', border: '#161b22', panel: 'rgba(10, 15, 25, 0.4)' },
            { id: '#interface',    bg: '#000000', accent: '#CC4C18', border: '#171717', panel: 'rgba(15, 15, 15, 0.4)' },
            { id: '#modules',      bg: '#05030a', accent: '#FF5F1F', border: '#201633', panel: 'rgba(20, 15, 35, 0.4)' },
            { id: '#pricing',      bg: '#020202', accent: '#FF5F1F', border: '#111111', panel: 'rgba(10, 10, 10, 0.4)' },
            { id: '#access',       bg: '#000000', accent: '#FF5F1F', border: '#1a1a1a', panel: 'rgba(15, 15, 15, 0.4)' }
        ];

        /*
         * ==========================================
         * 2. WEBGL SUBSYSTEM (Three.js)
         * ==========================================
         */
        let scene, camera, renderer, particles;
        const webglState = {
            fieldPositions: null,
            orbPositions: null
        };

        const themeProxy = {
            bg: new THREE.Color(THEMES[0].bg),
            accent: new THREE.Color(THEMES[0].accent)
        };

        function initWebGL() {
            const container = document.getElementById('webgl-container');

            scene = new THREE.Scene();
            scene.fog = new THREE.FogExp2(themeProxy.bg.getHex(), 0.0015);
            scene.background = themeProxy.bg;

            camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 3000);
            camera.position.z = CONFIG.cameraZStart;

            renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: "high-performance" });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setSize(window.innerWidth, window.innerHeight);
            container.appendChild(renderer.domElement);

            initParticles();
            window.addEventListener('resize', resizeWebGL);
            renderWebGL();
        }

        function initParticles() {
            const geometry = new THREE.BufferGeometry();
            const vertices = new Float32Array(CONFIG.particleCount * 3);
            
            webglState.fieldPositions = new Float32Array(CONFIG.particleCount * 3);
            webglState.orbPositions = new Float32Array(CONFIG.particleCount * 3);

            for (let i = 0; i < CONFIG.particleCount; i++) {
                webglState.fieldPositions[i*3] = (Math.random() - 0.5) * CONFIG.spread;
                webglState.fieldPositions[i*3+1] = (Math.random() - 0.5) * CONFIG.spread;
                webglState.fieldPositions[i*3+2] = (Math.random() - 0.5) * CONFIG.spread;

                const u = Math.random();
                const v = Math.random();
                const theta = 2 * Math.PI * u;
                const phi = Math.acos(2 * v - 1);
                const r = CONFIG.orbRadius * Math.cbrt(Math.random()); 
                
                webglState.orbPositions[i*3] = r * Math.sin(phi) * Math.cos(theta);
                webglState.orbPositions[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
                webglState.orbPositions[i*3+2] = r * Math.cos(phi);

                vertices[i*3] = webglState.orbPositions[i*3];
                vertices[i*3+1] = webglState.orbPositions[i*3+1];
                vertices[i*3+2] = webglState.orbPositions[i*3+2];
            }

            geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

            const material = new THREE.PointsMaterial({
                color: themeProxy.accent,
                size: CONFIG.particleSize,
                sizeAttenuation: true,
                transparent: true,
                opacity: 0.6,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            });

            particles = new THREE.Points(geometry, material);
            scene.add(particles);
        }

        function resizeWebGL() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        function renderWebGL() {
            requestAnimationFrame(renderWebGL);

            state.scrollProgress += (state.targetProgress - state.scrollProgress) * 0.05;

            const p = state.scrollProgress;
            const t = Math.max(0, Math.min(1, (p - 0.15) / (0.75 - 0.15)));
            const smooth = t * t * (3 - 2 * t);
            
            let orbMix = 0.8 * (1 - smooth);
            orbMix = Math.max(orbMix, 0.12); 

            const positions = particles.geometry.attributes.position.array;
            const field = webglState.fieldPositions;
            const orb = webglState.orbPositions;

            for (let i = 0; i < positions.length; i++) {
                positions[i] = field[i] + (orb[i] - field[i]) * orbMix;
            }
            particles.geometry.attributes.position.needsUpdate = true;

            if (!isReducedMotion) {
                camera.position.z = CONFIG.cameraZStart - ((CONFIG.cameraZStart - CONFIG.cameraZEnd) * state.scrollProgress);
                scene.fog.density = 0.0015 + (state.scrollProgress * 0.0005);
                
                const dynamicRotation = CONFIG.idleRotationSpeed + (p * 0.001);
                particles.rotation.y += dynamicRotation;
                particles.rotation.x = state.scrollProgress * CONFIG.scrollRotationFactor;
            } else {
                particles.rotation.y += CONFIG.idleRotationSpeed;
            }

            renderer.render(scene, camera);
        }

        /*
         * ==========================================
         * 3. SCROLL, NAVIGATION & THEME CONTROLLER
         * ==========================================
         */
        let lenis;

        function initScroll() {
            lenis = new Lenis({
                duration: 2.1,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                direction: 'vertical',
                gestureDirection: 'vertical',
                smooth: !isReducedMotion,
                smoothTouch: false,
                touchMultiplier: 1.05,
                wheelMultiplier: 0.75
            });

            lenis.on('scroll', ScrollTrigger.update);
            gsap.ticker.add((time) => { lenis.raf(time * 1000); });
            gsap.ticker.lagSmoothing(0);

            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    lenis.scrollTo(this.getAttribute('href'), { offset: 0, duration: 1.8 });
                });
            });
        }

        function applyTheme(theme) {
            gsap.to(document.documentElement, {
                '--bg': theme.bg,
                '--accent': theme.accent,
                '--border': theme.border,
                '--panel': theme.panel,
                duration: 1.2,
                ease: "power2.out"
            });

            const targetBg = new THREE.Color(theme.bg);
            const targetAccent = new THREE.Color(theme.accent);

            gsap.to(themeProxy.bg, {
                r: targetBg.r, g: targetBg.g, b: targetBg.b,
                duration: 1.2,
                onUpdate: () => {
                    scene.background.copy(themeProxy.bg);
                    scene.fog.color.copy(themeProxy.bg);
                }
            });

            gsap.to(themeProxy.accent, {
                r: targetAccent.r, g: targetAccent.g, b: targetAccent.b,
                duration: 1.2,
                onUpdate: () => {
                    particles.material.color.copy(themeProxy.accent);
                }
            });
        }

        function initThemesAndNav() {
            const navLinks = document.querySelectorAll('.nav-link');

            THEMES.forEach((theme, index) => {
                ScrollTrigger.create({
                    trigger: theme.id,
                    start: "top 50%",
                    end: "bottom 50%",
                    onEnter: () => applyTheme(theme),
                    onEnterBack: () => applyTheme(theme),
                });

                if(index > 0) {
                    ScrollTrigger.create({
                        trigger: theme.id,
                        start: "top center",
                        end: "bottom center",
                        onToggle: (self) => {
                            if (self.isActive && navLinks[index - 1]) {
                                navLinks.forEach(l => l.classList.remove('is-active'));
                                navLinks[index - 1].classList.add('is-active');
                            }
                        }
                    });
                }
            });
        }

        function initHeroLoad() {
            gsap.to('#phase-1-content .line-content', { yPercent: 0, duration: 1.1, stagger: 0.15, ease: 'power3.out', delay: 0.2 });
            gsap.to('#ui-top, #ui-bottom', { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.5 });
            gsap.to('#hero-descriptor, #hero-ctas', { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power2.out', delay: 0.8 });
        }

        function initScrollTimeline() {
            gsap.set('.feature-card', { opacity: 0 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#pinned-stage",
                    start: "top top",
                    end: CONFIG.scrollDistance,
                    pin: true,
                    scrub: isReducedMotion ? true : CONFIG.scrubSmoothing,
                    onUpdate: (self) => {
                        state.targetProgress = self.progress;
                        gsap.set('#scroll-progress', { scaleY: self.progress });
                    }
                }
            });

            // PHASE 2: Forward Push (Initiates fading out Phase 1 gracefully on scroll)
            tl.to('#phase-1-content', { opacity: 0, y: -40, filter: 'blur(8px)', duration: 1, ease: 'power2.inOut', pointerEvents: 'none' }, 0.1)
              .to('#phase-2-content', { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power2.out', pointerEvents: 'auto' }, 0.5)
              .to('#phase-2-scanline', { opacity: 0.35, duration: 0.2, ease: 'power1.inOut' }, 0.6)
              .to('#phase-2-scanline', { top: '110%', duration: 1.2, ease: 'linear' }, 0.6)
              .to('#phase-2-scanline', { opacity: 0, duration: 0.2, ease: 'power1.inOut' }, 1.6);

            // PHASE 3: Content Emergence
            tl.to('#phase-2-content', { opacity: 0, y: -40, filter: 'blur(8px)', duration: 1, ease: 'power2.inOut', pointerEvents: 'none' }, 1.7)
              .to('#phase-3-content', { opacity: 1, duration: 0.8, ease: 'power2.out', pointerEvents: 'auto' }, 1.8)
              .to('#phase-3-intro', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 1.9)
              .fromTo('.feature-card', 
                  { opacity: 0, y: 30, scale: 0.94, filter: 'blur(12px)', rotateX: 6 },
                  { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', rotateX: 0, stagger: 0.18, duration: 1.2, ease: 'power3.out' }, 
                  2.1
              );

            // Hold Cards
            tl.to('.feature-card', { y: -15, duration: 1.8, ease: 'none' }, 3.3);
            
            // Extra Hold
            tl.to({}, { duration: 0.4 }, 5.1);

            // PHASE 4: Bridge Moment
            tl.to('#phase-3-content', { opacity: 0, y: -40, filter: 'blur(8px)', duration: 1, ease: 'power2.inOut', pointerEvents: 'none' }, 5.5)
              .to('#bridge-content', { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out', pointerEvents: 'auto' }, 5.8)
              .to('.bridge-stagger', { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' }, 5.9);

            // PHASE 5: Exit
            tl.to('#bridge-content, #ui-top, #ui-bottom', {
                opacity: 0,
                y: -20,
                filter: 'blur(4px)',
                duration: 1,
                ease: 'power2.inOut'
            }, 7.6);
        }

        function initTypographyReveals() {
            document.querySelectorAll('.reveal-text').forEach(text => {
                gsap.fromTo(text,
                    { yPercent: 120, opacity: 0 },
                    {
                        yPercent: 0,
                        opacity: 1,
                        duration: 0.9,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: text.closest('.reveal-block'),
                            start: 'top 85%'
                        }
                    }
                );
            });

            document.querySelectorAll('.reveal-block').forEach(block => {
                gsap.fromTo(block.querySelectorAll('.reveal-item'),
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.9,
                        stagger: 0.15,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: block,
                            start: 'top 80%'
                        }
                    }
                );
            });
        }

        /*
         * ==========================================
         * 4. BOOTSTRAP
         * ==========================================
         */
        document.addEventListener('DOMContentLoaded', () => {
            initWebGL();
            initScroll();
            initThemesAndNav();
            initHeroLoad();
            initScrollTimeline();
            initTypographyReveals();
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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[var(--bg)]/60 border-b border-[var(--border)] transition-colors duration-700 pointer-events-none">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
<div className="flex-1 pointer-events-auto flex items-center">
<img alt="Brand Logo" className="h-6 w-auto object-contain cursor-pointer" onclick="lenis.scrollTo('#pinned-stage')" src="./logo.png"/>
</div>
<div className="flex-none hidden lg:flex gap-8 items-center pointer-events-auto">
<a className="nav-link text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)] transition-colors relative pb-1" href="#manifesto">About</a>
<a className="nav-link text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)] transition-colors relative pb-1" href="#overview">Process</a>
<a className="nav-link text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)] transition-colors relative pb-1" href="#interface">Deliverables</a>
<a className="nav-link text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)] transition-colors relative pb-1" href="#modules">Services</a>
<a className="nav-link text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)] transition-colors relative pb-1" href="#pricing">Models</a>
</div>
<div className="flex-1 flex justify-end items-center gap-6 pointer-events-auto">
<div className="hidden xl:flex flex-col items-end text-[10px] tracking-widest uppercase text-[var(--muted)]">
<span className="text-[var(--accent)] flex items-center gap-2">
<span className="w-1 h-1 bg-[var(--accent)] block rounded-none animate-pulse"></span>
                        System.Online
                    </span>
<span>Latency: 12ms</span>
</div>
<button className="text-xs uppercase tracking-widest border border-[var(--border)] bg-transparent px-6 py-2.5 hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors font-medium rounded-none focus:outline-none text-[var(--fg)]" onclick="lenis.scrollTo('#access')">
                    Schedule Call
                </button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-0 pointer-events-none w-full h-full" id="webgl-container">
<div className="absolute inset-0 bg-noise z-10"></div>
</div>

<main className="relative z-10 w-full pb-24" id="app-wrapper">

<section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-transparent" id="pinned-stage">
<div className="absolute inset-0 z-30 pointer-events-none flex flex-col justify-between p-6 md:px-12 md:py-8 mt-16">
<div className="flex justify-between items-center opacity-0 translate-y-[-10px]" id="ui-top">
<div className="text-[10px] font-medium tracking-widest uppercase flex items-center gap-3">
<span className="text-[var(--muted)]">SYS.01</span>
</div>
<div className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-medium">
                        Index / 00
                    </div>
</div>
<div className="flex justify-between items-end opacity-0 translate-y-[10px]" id="ui-bottom">
<div className="flex flex-col gap-1 text-[10px] text-[var(--muted)] font-medium tracking-widest uppercase">
<span>Status: Nominal</span>
<span>Render: Native</span>
</div>
<div className="flex flex-col items-end gap-3 text-[10px] uppercase tracking-widest text-[var(--muted)] font-medium">
<span>Depth Mapping</span>
<div className="w-[1px] h-12 bg-[var(--border)] relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-[var(--accent)] transform origin-top scale-y-0 will-change-transform" id="scroll-progress"></div>
</div>
</div>
</div>
</div>
<div className="flex w-full z-20 px-6 absolute inset-0 items-center justify-center perspective-[1000px]">

<div className="absolute flex flex-col items-center justify-center text-center w-full pointer-events-auto px-4" id="phase-1-content">
<div className="w-full max-w-[980px] mx-auto flex flex-col items-center">
<h2 className="text-3xl md:text-5xl lg:text-7xl tracking-tight font-medium flex flex-col items-center mb-6 drop-shadow-2xl">
<span className="line-wrapper">
<span className="line-content whitespace-nowrap text-[var(--fg)] font-display opacity-1" style={{transform: 'translateY(125%)'}}>
                                    Trace threats
                                </span>
</span>
<span className="line-wrapper">
<span className="line-content whitespace-nowrap text-[var(--muted)] font-display opacity-1" style={{transform: 'translateY(125%)'}}>
                                    to their origin.
                                </span>
</span>
</h2>
<div className="flex flex-col items-center gap-4 mt-2 opacity-0 translate-y-[15px]" id="hero-descriptor">
<span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-[var(--accent)] font-medium">
                                FUZZ · TRACE · EXPLOIT · REMEDIATE
                            </span>
<p className="text-sm md:text-base text-[var(--muted)] font-normal max-w-xl">
                                Vulnerability research, adversarial assessments, and strategic cyber risk advisory — for organizations that treat threats as existential.
                            </p>
</div>
<div className="flex gap-4 mt-10 opacity-0 translate-y-[15px]" id="hero-ctas">
<button className="px-8 py-4 text-xs tracking-widest uppercase font-medium bg-[var(--accent)] text-black hover:bg-white transition-colors duration-300 rounded-none focus:outline-none" onclick="lenis.scrollTo('#access')">
                                Start Engagement
                            </button>
<button className="px-8 py-4 text-xs tracking-widest uppercase font-medium border border-[var(--border)] bg-black/50 backdrop-blur-md text-[var(--fg)] hover:bg-[var(--fg)] hover:text-black transition-colors duration-300 rounded-none focus:outline-none hidden sm:block" onclick="lenis.scrollTo('#modules')">
                                View Services
                            </button>
</div>
</div>
</div>

<div className="absolute inset-0 w-full flex flex-col items-center justify-center text-center opacity-0 pointer-events-none blur-[6px] scale-[0.98] px-4 overflow-hidden" id="phase-2-content">
<div className="absolute inset-0 pointer-events-none" id="phase-2-grid"></div>
<div className="absolute left-0 right-0 h-px pointer-events-none" id="phase-2-scanline"></div>
<div className="w-full max-w-[980px] mx-auto flex flex-col items-center py-12 md:py-16 relative z-10">
<h3 className="text-2xl md:text-4xl tracking-tight font-normal leading-relaxed text-[var(--fg)] drop-shadow-2xl">
                            Elite advisory for
                            <br/>
<span className="text-[var(--muted)]">organizations under threat.</span>
</h3>
</div>
</div>

<div className="absolute w-full flex flex-col items-center justify-center opacity-0 pointer-events-none px-4" id="phase-3-content">
<div className="w-full max-w-[980px] mx-auto text-center mb-6 px-6 opacity-0 translate-y-[20px]" id="phase-3-intro">
<div className="text-[10px] text-[var(--muted)] font-medium tracking-widest mb-3 uppercase">SYS.02 / OFFENSIVE MINDSET</div>
<h3 className="text-2xl md:text-3xl tracking-tight text-[var(--fg)] font-medium mb-2">We approach security the way attackers do.</h3>
<p className="text-sm md:text-base text-[var(--muted)] font-normal max-w-xl mx-auto">Finding gaps before they're exploited, with zero collateral.</p>
</div>

<div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">

<div className="feature-card aspect-[3/4] bg-[rgba(15,15,15,0.4)] backdrop-blur-xl border border-[var(--border)] flex flex-col rounded-none group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[var(--muted)]">
<div className="aspect-video w-full border-b border-[var(--border)] bg-[var(--panel)] flex flex-col relative z-20 group-hover:bg-[rgba(25,25,25,0.5)] transition-colors duration-500">
<div className="h-5 border-b border-[var(--border)] flex items-center px-2 gap-1.5 bg-black/40">
<div className="w-1 h-1 bg-[var(--border)]"></div>
<div className="w-1 h-1 bg-[var(--border)]"></div>
<div className="w-1 h-1 bg-[var(--border)]"></div>
</div>
<div className="flex-1 flex items-center justify-center w-full h-full">
<iconify-icon className="text-[var(--accent)] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" icon="solar:target-linear" width="46"></iconify-icon>
</div>
</div>
<div className="p-6 flex-1 flex flex-col justify-end z-20">
<div className="flex justify-between items-start mb-4">
<span className="text-[10px] tracking-widest text-[var(--muted)] uppercase font-medium">01</span>
</div>
<h4 className="text-lg tracking-tight font-medium text-[var(--fg)] mb-2 group-hover:text-white transition-colors">Offensive Mindset</h4>
<p className="text-[11px] text-[var(--muted)] leading-relaxed font-normal">We approach security the way attackers do — finding gaps before they're exploited.</p>
</div>
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
</div>

<div className="feature-card aspect-[3/4] bg-[rgba(15,15,15,0.4)] backdrop-blur-xl border border-[var(--border)] flex flex-col rounded-none group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[var(--muted)]">
<div className="aspect-video w-full border-b border-[var(--border)] bg-[var(--panel)] flex flex-col relative z-20 group-hover:bg-[rgba(25,25,25,0.5)] transition-colors duration-500">
<div className="h-5 border-b border-[var(--border)] flex items-center px-2 gap-1.5 bg-black/40">
<div className="w-1 h-1 bg-[var(--border)]"></div>
<div className="w-1 h-1 bg-[var(--border)]"></div>
<div className="w-1 h-1 bg-[var(--border)]"></div>
</div>
<div className="flex-1 flex items-center justify-center w-full h-full">
<iconify-icon className="text-[var(--accent)] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" icon="solar:test-tube-linear" width="46"></iconify-icon>
</div>
</div>
<div className="p-6 flex-1 flex flex-col justify-end z-20">
<div className="flex justify-between items-start mb-4">
<span className="text-[10px] tracking-widest text-[var(--muted)] uppercase font-medium">02</span>
</div>
<h4 className="text-lg tracking-tight font-medium text-[var(--fg)] mb-2 group-hover:text-white transition-colors">Research-Led</h4>
<p className="text-[11px] text-[var(--muted)] leading-relaxed font-normal">Deep vulnerability research drives every engagement, not simple compliance checklists.</p>
</div>
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
</div>

<div className="feature-card aspect-[3/4] bg-[rgba(15,15,15,0.4)] backdrop-blur-xl border border-[var(--border)] flex flex-col rounded-none group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[var(--muted)]">
<div className="aspect-video w-full border-b border-[var(--border)] bg-[var(--panel)] flex flex-col relative z-20 group-hover:bg-[rgba(25,25,25,0.5)] transition-colors duration-500">
<div className="h-5 border-b border-[var(--border)] flex items-center px-2 gap-1.5 bg-black/40">
<div className="w-1 h-1 bg-[var(--border)]"></div>
<div className="w-1 h-1 bg-[var(--border)]"></div>
<div className="w-1 h-1 bg-[var(--border)]"></div>
</div>
<div className="flex-1 flex items-center justify-center w-full h-full">
<iconify-icon className="text-[var(--accent)] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" icon="solar:map-arrow-up-linear" width="46"></iconify-icon>
</div>
</div>
<div className="p-6 flex-1 flex flex-col justify-end z-20">
<div className="flex justify-between items-start mb-4">
<span className="text-[10px] tracking-widest text-[var(--muted)] uppercase font-medium">03</span>
</div>
<h4 className="text-lg tracking-tight font-medium text-[var(--fg)] mb-2 group-hover:text-white transition-colors">Strategic Clarity</h4>
<p className="text-[11px] text-[var(--muted)] leading-relaxed font-normal">Every finding is translated into actionable risk remediation guidance and impact.</p>
</div>
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
</div>

<div className="feature-card aspect-[3/4] bg-[rgba(15,15,15,0.4)] backdrop-blur-xl border border-[var(--border)] flex flex-col rounded-none group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[var(--muted)]">
<div className="aspect-video w-full border-b border-[var(--border)] bg-[var(--panel)] flex flex-col relative z-20 group-hover:bg-[rgba(25,25,25,0.5)] transition-colors duration-500">
<div className="h-5 border-b border-[var(--border)] flex items-center px-2 gap-1.5 bg-black/40">
<div className="w-1 h-1 bg-[var(--border)]"></div>
<div className="w-1 h-1 bg-[var(--border)]"></div>
<div className="w-1 h-1 bg-[var(--border)]"></div>
</div>
<div className="flex-1 flex items-center justify-center w-full h-full">
<iconify-icon className="text-[var(--accent)] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" icon="solar:crosshair-linear" width="46"></iconify-icon>
</div>
</div>
<div className="p-6 flex-1 flex flex-col justify-end z-20">
<div className="flex justify-between items-start mb-4">
<span className="text-[10px] tracking-widest text-[var(--muted)] uppercase font-medium">04</span>
</div>
<h4 className="text-lg tracking-tight font-medium text-[var(--fg)] mb-2 group-hover:text-white transition-colors">Precision Execution</h4>
<p className="text-[11px] text-[var(--muted)] leading-relaxed font-normal">Scoped, contained, and documented engagements with zero collateral damage.</p>
</div>
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
</div>
</div>
</div>

<div className="absolute flex flex-col items-center justify-center text-center w-full opacity-0 pointer-events-none blur-[10px] translate-y-[20px] px-4" id="bridge-content">
<div className="w-full max-w-[980px] mx-auto flex flex-col items-center py-12 md:py-16">
<div className="bridge-stagger text-[10px] text-[var(--accent)] font-medium tracking-widest mb-6 uppercase flex items-center gap-3 drop-shadow-xl opacity-0 translate-y-[12px]">
<div className="w-1.5 h-1.5 bg-[var(--accent)] rounded-none"></div>
                            [ ENGAGEMENT_LOCKED ]
                        </div>
<h2 className="bridge-stagger text-4xl md:text-5xl lg:text-6xl tracking-tight text-[var(--fg)] font-medium drop-shadow-2xl mb-4 opacity-0 translate-y-[12px]">
                            We don't just find problems.
                        </h2>
<p className="bridge-stagger text-sm md:text-base text-[var(--muted)] font-normal max-w-[680px] mx-auto mb-2 opacity-0 translate-y-[12px]">
                            We trace them to their origin, understand their blast radius,
                        </p>
<p className="bridge-stagger text-sm md:text-base text-[var(--fg)] font-medium max-w-[680px] mx-auto opacity-0 translate-y-[12px]">
                            and help organizations <span className="text-[var(--accent)]">build durable defenses.</span>
</p>
</div>
</div>
</div>
</section>

<section className="relative py-32 px-4 md:px-8 z-10 w-full reveal-block" id="manifesto">
<div className="section-slab">
<div className="section-inner max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

<div className="lg:col-span-5 flex flex-col justify-start">
<div className="text-[10px] text-[var(--accent)] font-medium tracking-widest mb-6 uppercase flex items-center gap-3 reveal-item">
<div className="w-1.5 h-1.5 bg-[var(--accent)] animate-pulse"></div>
                                [ ABOUT_US ]
                            </div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[var(--fg)] mb-6 reveal-item">
                                We exist to eliminate structural risk.
                            </h2>
<p className="text-sm text-[var(--muted)] leading-relaxed font-normal mb-8 reveal-item">
                                Trace0 is a next-generation cybersecurity advisory built around deep offensive expertise. We specialize in vulnerability research, adversarial security assessments, and strategic cyber risk advisory for organizations that treat threats as existential.
                            </p>
</div>

<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 reveal-item">
<div className="flex flex-col gap-3 border-t border-[var(--border)] pt-4">
<iconify-icon className="text-[var(--accent)]" icon="solar:shield-keyhole-linear" width="24"></iconify-icon>
<h3 className="text-sm font-medium text-[var(--fg)] tracking-tight">Adversarial Perspective</h3>
<p className="text-xs text-[var(--muted)] leading-relaxed">We don't rely on automated scanners. We emulate sophisticated threat actors to find the logical flaws that standard tools miss.</p>
</div>
<div className="flex flex-col gap-3 border-t border-[var(--border)] pt-4">
<iconify-icon className="text-[var(--accent)]" icon="solar:code-scan-linear" width="24"></iconify-icon>
<h3 className="text-sm font-medium text-[var(--fg)] tracking-tight">Research-Driven</h3>
<p className="text-xs text-[var(--muted)] leading-relaxed">Our methodologies are rooted in continuous zero-day research and reverse engineering, keeping you ahead of the threat curve.</p>
</div>
<div className="flex flex-col gap-3 border-t border-[var(--border)] pt-4">
<iconify-icon className="text-[var(--accent)]" icon="solar:graph-up-linear" width="24"></iconify-icon>
<h3 className="text-sm font-medium text-[var(--fg)] tracking-tight">Strategic Impact</h3>
<p className="text-xs text-[var(--muted)] leading-relaxed">Technical findings are useless without context. We translate vulnerabilities into business risk to drive meaningful remediation.</p>
</div>
<div className="flex flex-col gap-3 border-t border-[var(--border)] pt-4">
<iconify-icon className="text-[var(--accent)]" icon="solar:ghost-smile-linear" width="24"></iconify-icon>
<h3 className="text-sm font-medium text-[var(--fg)] tracking-tight">Zero Collateral</h3>
<p className="text-xs text-[var(--muted)] leading-relaxed">Aggressive testing shouldn't break production. Our operations are highly scoped, controlled, and executed with extreme precision.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 px-4 md:px-8 z-10 w-full reveal-block" id="overview">
<div className="section-slab">
<div className="section-inner max-w-4xl mx-auto text-center flex flex-col items-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[var(--fg)] mb-8 flex flex-col items-center">
<span className="overflow-hidden pb-2 block">
<span className="block reveal-text">Engagement Process</span>
</span>
<span className="overflow-hidden pb-2 block text-[var(--muted)] text-2xl md:text-3xl mt-2">
<span className="block reveal-text">Controlled adversarial activity.</span>
</span>
</h2>
<p className="text-sm text-[var(--muted)] mb-10 max-w-2xl leading-relaxed reveal-item">
                        From scoping to remediation, our engagements are executed with precision, full transparency, and zero collateral impact to your operations.
                    </p>
<div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center text-xs text-[var(--muted)] mb-12 font-mono uppercase tracking-widest reveal-item">
<div className="flex items-center gap-3">
<span className="text-[var(--accent)]">01</span>
                            Scoping
                        </div>
<div className="flex items-center gap-3">
<span className="text-[var(--accent)]">02</span>
                            Reconnaissance
                        </div>
<div className="flex items-center gap-3">
<span className="text-[var(--accent)]">03</span>
                            Exploitation
                        </div>
<div className="flex items-center gap-3">
<span className="text-[var(--accent)]">04</span>
                            Reporting
                        </div>
</div>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full reveal-item">
<button className="w-full sm:w-auto px-8 py-4 text-xs tracking-widest uppercase font-medium bg-[var(--accent)] text-black hover:bg-white transition-colors duration-300 focus:outline-none" onclick="lenis.scrollTo('#access')">
                            Schedule Call
                        </button>
<button className="w-full sm:w-auto px-8 py-4 text-xs tracking-widest uppercase font-medium border border-[var(--border)] text-[var(--fg)] hover:bg-[var(--fg)] hover:text-black transition-colors duration-300 focus:outline-none" onclick="lenis.scrollTo('#modules')">
                            View Services
                        </button>
</div>
</div>
</div>
</section>

<section className="relative py-16 px-4 md:px-8 z-10 w-full reveal-block" id="interface">
<div className="section-slab">
<div className="section-inner max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="reveal-item">
<div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-[var(--muted)] mb-8 bg-[var(--bg)] p-3 border border-[var(--border)] w-max">
<span className="text-[var(--accent)]">Assess</span>
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Exploit</span>
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Document</span>
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-[var(--fg)]">Remediate</span>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[var(--fg)] mb-6 flex flex-col">
<span className="overflow-hidden pb-1 block">
<span className="block reveal-text">Deliverables &amp; Artifacts.</span>
</span>
</h2>
<p className="text-sm text-[var(--muted)] mb-10 leading-relaxed font-normal reveal-item">
                            Every engagement concludes with comprehensive documentation designed for both technical teams and organizational leadership.
                        </p>
<ul className="space-y-6 text-xs text-[var(--fg)] font-normal reveal-item grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
<li className="flex items-start gap-4">
<iconify-icon className="text-[var(--accent)] mt-0.5 flex-shrink-0" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
<span className="leading-relaxed"><strong className="font-medium text-[var(--fg)]">Technical Report:</strong> Full exploit chain documentation with CVSS, PoC code, and remediation guidance.</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[var(--accent)] mt-0.5 flex-shrink-0" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
<span className="leading-relaxed"><strong className="font-medium text-[var(--fg)]">Executive Brief:</strong> Board-ready risk summary translating technical findings into business impact.</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[var(--accent)] mt-0.5 flex-shrink-0" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
<span className="leading-relaxed"><strong className="font-medium text-[var(--fg)]">Attack Timeline:</strong> Step-by-step reconstruction of simulated attack paths with mapped detections.</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[var(--accent)] mt-0.5 flex-shrink-0" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
<span className="leading-relaxed"><strong className="font-medium text-[var(--fg)]">Remediation Roadmap:</strong> Prioritized fix plan with effort estimates and long-term hardening strategies.</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[var(--accent)] mt-0.5 flex-shrink-0" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
<span className="leading-relaxed"><strong className="font-medium text-[var(--fg)]">Retest Validation:</strong> Post-remediation verification that all critical findings are addressed.</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[var(--accent)] mt-0.5 flex-shrink-0" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
<span className="leading-relaxed"><strong className="font-medium text-[var(--fg)]">Threat Model Artifact:</strong> Living document capturing attack surfaces and trust boundaries.</span>
</li>
</ul>
</div>
<div className="aspect-square md:aspect-[4/3] w-full bg-[var(--bg)] flex flex-col border border-[var(--border)] overflow-hidden relative shadow-2xl rounded-none reveal-item">
<div className="h-8 border-b border-[var(--border)] flex items-center justify-between px-4 bg-[var(--panel)]">
<div className="flex gap-2">
<div className="w-2 h-2 bg-[var(--border)] rounded-none"></div>
<div className="w-2 h-2 bg-[var(--border)] rounded-none"></div>
<div className="w-2 h-2 bg-[var(--border)] rounded-none"></div>
</div>
<div className="text-[10px] text-[var(--muted)] font-mono uppercase tracking-widest">Artifact / Timeline</div>
</div>
<div className="flex-1 p-4 md:p-6 flex items-center justify-center bg-[var(--bg)]">
<div className="flex flex-col items-center justify-center gap-6 text-center group">
<div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-[var(--accent)]/5 border border-[var(--accent)]/20 group-hover:border-[var(--accent)]/50 transition-colors duration-500">
<iconify-icon className="text-[var(--accent)] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" icon="solar:document-text-linear" width="48"></iconify-icon>
</div>
<div className="space-y-2">
<h4 className="text-base text-[var(--fg)] font-medium">Technical Report &amp; Action Plan</h4>
<p className="text-xs text-[var(--muted)] max-w-[200px]">Comprehensive vulnerability breakdown, CVSS scores, and remediation code.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 px-4 md:px-8 z-10 w-full reveal-block" id="modules">
<div className="section-slab">
<div className="section-inner max-w-7xl mx-auto">
<div className="mb-12 text-center reveal-item">
<div className="text-[10px] text-[var(--muted)] font-medium tracking-widest mb-4 uppercase">SYS.03 / SERVICES</div>
<h2 className="text-3xl font-medium tracking-tight text-[var(--fg)] mb-4">Scope of Advisory Services</h2>
<p className="text-sm text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
                            From exploit development to board-level risk briefings — our capabilities span the full threat lifecycle.
                        </p>
</div>

<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-16 text-[10px] md:text-xs uppercase tracking-widest text-[var(--muted)] font-medium reveal-item">
<span className="text-[var(--fg)]">Research</span>
<iconify-icon className="hidden md:block text-[var(--accent)]" icon="solar:arrow-right-linear" width="16"></iconify-icon>
<iconify-icon className="md:hidden text-[var(--accent)]" icon="solar:arrow-down-linear" width="16"></iconify-icon>
<span className="text-[var(--fg)]">Simulation</span>
<iconify-icon className="hidden md:block text-[var(--accent)]" icon="solar:arrow-right-linear" width="16"></iconify-icon>
<iconify-icon className="md:hidden text-[var(--accent)]" icon="solar:arrow-down-linear" width="16"></iconify-icon>
<span className="text-[var(--fg)]">Exploitation</span>
<iconify-icon className="hidden md:block text-[var(--accent)]" icon="solar:arrow-right-linear" width="16"></iconify-icon>
<iconify-icon className="md:hidden text-[var(--accent)]" icon="solar:arrow-down-linear" width="16"></iconify-icon>
<span className="text-[var(--accent)]">Advisory</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 reveal-item">

<div className="border border-[var(--border)] bg-[var(--panel)] backdrop-blur-md p-6 flex flex-col hover:border-[var(--accent)] transition-colors duration-500 rounded-none group relative overflow-hidden">
<iconify-icon className="text-[var(--accent)] mb-6" icon="solar:bug-minimalistic-linear" width="24"></iconify-icon>
<h3 className="text-base text-[var(--fg)] font-medium mb-2 group-hover:text-white transition-colors">Vulnerability Research</h3>
<p className="text-xs text-[var(--muted)] leading-relaxed flex-1 mb-6">Deep-dive research into target systems, protocols, and software to uncover novel vulnerabilities before adversaries do.</p>
<div className="mt-auto pt-4 border-t border-[var(--border)] text-[10px] uppercase tracking-widest text-[var(--muted)] flex justify-between gap-2">
<span>0-Day</span><span className="opacity-30">•</span><span>CVE</span><span className="opacity-30">•</span><span>Bug Bounty</span>
</div>
</div>

<div className="border border-[var(--border)] bg-[var(--panel)] backdrop-blur-md p-6 flex flex-col hover:border-[var(--accent)] transition-colors duration-500 rounded-none group relative overflow-hidden">
<iconify-icon className="text-[var(--accent)] mb-6" icon="solar:shield-warning-linear" width="24"></iconify-icon>
<h3 className="text-base text-[var(--fg)] font-medium mb-2 group-hover:text-white transition-colors">Red Team Operations</h3>
<p className="text-xs text-[var(--muted)] leading-relaxed flex-1 mb-6">Full-scope adversarial simulation targeting people, process, and technology to test real-world detection and response.</p>
<div className="mt-auto pt-4 border-t border-[var(--border)] text-[10px] uppercase tracking-widest text-[var(--muted)] flex justify-between gap-2">
<span>APT Sim</span><span className="opacity-30">•</span><span>Social Eng</span><span className="opacity-30">•</span><span>Persistence</span>
</div>
</div>

<div className="border border-[var(--border)] bg-[var(--panel)] backdrop-blur-md p-6 flex flex-col hover:border-[var(--accent)] transition-colors duration-500 rounded-none group relative overflow-hidden">
<iconify-icon className="text-[var(--accent)] mb-6" icon="solar:shield-cross-linear" width="24"></iconify-icon>
<h3 className="text-base text-[var(--fg)] font-medium mb-2 group-hover:text-white transition-colors">Penetration Testing</h3>
<p className="text-xs text-[var(--muted)] leading-relaxed flex-1 mb-6">Targeted, scoped assessments across web, mobile, network, and cloud environments with actionable remediation.</p>
<div className="mt-auto pt-4 border-t border-[var(--border)] text-[10px] uppercase tracking-widest text-[var(--muted)] flex justify-between gap-2">
<span>Web / Mobile</span><span className="opacity-30">•</span><span>Cloud</span><span className="opacity-30">•</span><span>Network</span>
</div>
</div>

<div className="border border-[var(--border)] bg-[var(--panel)] backdrop-blur-md p-6 flex flex-col hover:border-[var(--accent)] transition-colors duration-500 rounded-none group relative overflow-hidden">
<iconify-icon className="text-[var(--accent)] mb-6" icon="solar:radar-linear" width="24"></iconify-icon>
<h3 className="text-base text-[var(--fg)] font-medium mb-2 group-hover:text-white transition-colors">Threat Modeling</h3>
<p className="text-xs text-[var(--muted)] leading-relaxed flex-1 mb-6">Systematic identification of threat vectors and attack surfaces before code ships or architecture is finalized.</p>
<div className="mt-auto pt-4 border-t border-[var(--border)] text-[10px] uppercase tracking-widest text-[var(--muted)] flex justify-between gap-2">
<span>STRIDE</span><span className="opacity-30">•</span><span>PASTA</span><span className="opacity-30">•</span><span>Architecture</span>
</div>
</div>

<div className="border border-[var(--border)] bg-[var(--panel)] backdrop-blur-md p-6 flex flex-col hover:border-[var(--accent)] transition-colors duration-500 rounded-none group relative overflow-hidden">
<iconify-icon className="text-[var(--accent)] mb-6" icon="solar:siren-linear" width="24"></iconify-icon>
<h3 className="text-base text-[var(--fg)] font-medium mb-2 group-hover:text-white transition-colors">Incident Response</h3>
<p className="text-xs text-[var(--muted)] leading-relaxed flex-1 mb-6">Rapid forensic investigation, containment, and remediation advisory when active breaches occur.</p>
<div className="mt-auto pt-4 border-t border-[var(--border)] text-[10px] uppercase tracking-widest text-[var(--muted)] flex justify-between gap-2">
<span>Forensics</span><span className="opacity-30">•</span><span>Containment</span><span className="opacity-30">•</span><span>Recovery</span>
</div>
</div>

<div className="border border-[var(--border)] bg-[var(--panel)] backdrop-blur-md p-6 flex flex-col hover:border-[var(--accent)] transition-colors duration-500 rounded-none group relative overflow-hidden">
<iconify-icon className="text-[var(--accent)] mb-6" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
<h3 className="text-base text-[var(--fg)] font-medium mb-2 group-hover:text-white transition-colors">Security Advisory</h3>
<p className="text-xs text-[var(--muted)] leading-relaxed flex-1 mb-6">Strategic cyber risk guidance for boards, CISOs, and engineering leaders navigating complex threat landscapes.</p>
<div className="mt-auto pt-4 border-t border-[var(--border)] text-[10px] uppercase tracking-widest text-[var(--muted)] flex justify-between gap-2">
<span>CISO</span><span className="opacity-30">•</span><span>Risk</span><span className="opacity-30">•</span><span>Strategy</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 px-4 md:px-8 z-10 w-full reveal-block" id="pricing">
<div className="section-slab">
<div className="section-inner max-w-7xl mx-auto">
<div className="mb-12 text-center reveal-item">
<h2 className="text-3xl font-medium tracking-tight text-[var(--fg)] mb-4">Engagement Models</h2>
<p className="text-sm text-[var(--muted)]">Flexible advisory structures tailored to organizational risk and cadence.</p>
</div>

<div className="mb-10 border-b border-[var(--border)] pb-4 flex justify-between items-center text-[10px] uppercase tracking-widest text-[var(--muted)] font-medium reveal-item">
<span>Commercials</span>
<span>Scope / Cadence Matrix</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-item relative z-10">

<div className="border border-[var(--border)] bg-[var(--bg)] p-8 flex flex-col hover:border-[var(--muted)] transition-colors duration-500 rounded-none shadow-xl">
<div className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-medium mb-3">Project-Based</div>
<div className="text-2xl font-medium text-[var(--fg)] mb-8">Fixed Scope</div>
<div className="flex-1">
<ul className="text-xs text-[var(--muted)] space-y-4 font-normal">
<li className="flex items-start gap-3"><iconify-icon className="text-[var(--border)] mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>Defined scope, timeline, and deliverables</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[var(--border)] mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>Ideal for targeted pen tests and point-in-time assessments</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[var(--border)] mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>Comprehensive post-engagement reporting</li>
</ul>
</div>
</div>

<div className="border border-[var(--accent)]/50 bg-[var(--accent)]/5 p-8 flex flex-col relative rounded-none shadow-[0_0_40px_rgba(255,95,31,0.1)] hover:shadow-[0_0_60px_rgba(255,95,31,0.15)] transition-shadow duration-700 overflow-hidden scale-[1.02] lg:z-10 bg-[var(--bg)]">
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--accent)] shadow-[0_0_15px_var(--accent)]"></div>
<div className="text-[10px] uppercase tracking-widest text-[var(--accent)] font-medium mb-3">Monthly</div>
<div className="text-2xl font-medium text-[var(--fg)] mb-8">Retainer</div>
<div className="flex-1 space-y-6">
<div>
<ul className="text-xs text-[var(--muted)] space-y-3 font-normal">
<li className="flex items-start gap-3"><iconify-icon className="text-[var(--accent)] mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>Ongoing advisory and deep research access</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[var(--accent)] mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>Priority scheduling and active response capacity</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[var(--accent)] mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>Continuous threat modeling for agile teams</li>
</ul>
</div>
</div>
</div>

<div className="border border-[var(--border)] bg-[var(--bg)] p-8 flex flex-col hover:border-[var(--muted)] transition-colors duration-500 rounded-none shadow-xl">
<div className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-medium mb-3">Custom</div>
<div className="text-2xl font-medium text-[var(--fg)] mb-8">Embedded</div>
<div className="flex-1 space-y-6">
<div>
<ul className="text-xs text-[var(--muted)] space-y-3 font-normal">
<li className="flex items-start gap-3"><iconify-icon className="text-[var(--border)] mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>Researchers directly embedded in your team</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[var(--border)] mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>Deep, sustained vulnerability hunting</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[var(--border)] mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>Direct integration with engineering life-cycles</li>
</ul>
</div>
</div>
</div>

<div className="border border-[var(--border)] bg-[var(--bg)] p-8 flex flex-col hover:border-[var(--muted)] transition-colors duration-500 rounded-none shadow-xl">
<div className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-medium mb-3 flex justify-between items-center">
<span>On-Demand</span>
</div>
<div className="text-2xl font-medium text-[var(--fg)] mb-8">Incident Response</div>
<div className="flex-1 space-y-6">
<div>
<ul className="text-xs text-[var(--muted)] space-y-3 font-normal">
<li className="flex items-start gap-3"><iconify-icon className="text-[var(--border)] mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>Rapid deployment for active incidents</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[var(--border)] mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>Forensic investigation and threat containment</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[var(--border)] mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>Post-breach remediation and advisory</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 px-4 md:px-8 z-10 w-full reveal-block" id="access">
<div className="section-slab">
<div className="section-inner w-full flex flex-col items-center text-center">
<div className="text-[10px] text-[var(--accent)] font-medium tracking-widest mb-6 uppercase reveal-item">
                        System / Ready
                    </div>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-[var(--fg)] mb-6 flex flex-col reveal-item">
<span className="overflow-hidden pb-1 block">
<span className="block reveal-text">Ready to discuss your security needs?</span>
</span>
</h2>
<p className="text-sm text-[var(--muted)] mb-12 max-w-lg leading-relaxed font-normal reveal-item">
                        Cybersecurity demands foresight. Let's build yours. Whether you're assessing risk, responding to an incident, or building a long-term security program — we are ready to engage.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-6 reveal-item">
<button className="group inline-flex items-center justify-center px-8 py-4 text-xs tracking-widest font-medium text-black uppercase bg-[var(--accent)] hover:bg-white hover:text-black transition-all duration-300 rounded-none focus:outline-none">
<span>contact@advisory.io</span>
<iconify-icon className="ml-3 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<a className="text-xs text-[var(--muted)] hover:text-[var(--fg)] uppercase tracking-widest transition-colors font-medium border-b border-[var(--border)] pb-1 hover:border-[var(--fg)]" href="#">
                            Schedule a Call
                        </a>
</div>
<footer className="mt-32 pt-8 w-full border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center text-[10px] text-[var(--muted)] uppercase tracking-widest font-medium gap-4 reveal-item">
<span>Advisory Index: 01</span>
<span className="hidden md:inline text-[var(--border)]">•</span>
<span>Offensive Security Operations</span>
</footer>
</div>
</div>
</section>
</main>



    </>
  );
}
