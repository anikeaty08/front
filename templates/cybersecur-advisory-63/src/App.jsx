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



        import * as THREE from 'https://esm.sh/three@0.160.0';

        /*
         * ==========================================
         * 1. THEME / CONSTANTS CONFIGURATION
         * ==========================================
         */
        const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const CONFIG = {
            scrollDistance: "+=3800", // Slightly extended for breathing room
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

        // Electric Blue Accent Standardized
        const THEMES = [
            { id: '#pinned-stage', bg: '#030303', accent: '#3b82f6', border: '#1e1e1e', panel: 'rgba(20, 20, 20, 0.4)' },
            { id: '#manifesto',    bg: '#050508', accent: '#0ea5e9', border: '#1a1c23', panel: 'rgba(15, 20, 30, 0.4)' },
            { id: '#overview',     bg: '#02040a', accent: '#3b82f6', border: '#161b22', panel: 'rgba(10, 15, 25, 0.4)' },
            { id: '#interface',    bg: '#000000', accent: '#2563eb', border: '#171717', panel: 'rgba(15, 15, 15, 0.4)' },
            { id: '#modules',      bg: '#05030a', accent: '#3b82f6', border: '#201633', panel: 'rgba(20, 15, 35, 0.4)' },
            { id: '#pricing',      bg: '#020202', accent: '#3b82f6', border: '#111111', panel: 'rgba(10, 10, 10, 0.4)' },
            { id: '#access',       bg: '#000000', accent: '#3b82f6', border: '#1a1a1a', panel: 'rgba(15, 15, 15, 0.4)' }
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

        function initScrollTimeline() {
            gsap.set('#phase-1-content .line-content', { yPercent: 125, force3D: true, opacity: 1 });
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

            // PHASE 0: Fade out idle overlay on initiate
            tl.to('#idle-overlay', { opacity: 0, duration: 0.8, ease: 'power2.out' }, 0.1);

            // PHASE 1: Arrival
            tl.to('#phase-1-content .line-content', { yPercent: 0, duration: 1.1, stagger: 0.15, ease: 'power3.out' }, 0.2)
              .to('#ui-top, #ui-bottom', { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, 0.5)
              .to('#hero-descriptor, #hero-ctas', { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power2.out' }, 0.8);

            // PHASE 2: Forward Push + Grid & Scanline execution
            tl.to('#phase-1-content', { opacity: 0, y: -40, filter: 'blur(8px)', duration: 1, ease: 'power2.inOut', pointerEvents: 'none' }, 1.8)
              .to('#phase-2-content', { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power2.out', pointerEvents: 'auto' }, 2.1)
              .to('#phase-2-scanline', { opacity: 0.35, duration: 0.2, ease: 'power1.inOut' }, 2.2)
              .to('#phase-2-scanline', { top: '110%', duration: 1.2, ease: 'linear' }, 2.2)
              .to('#phase-2-scanline', { opacity: 0, duration: 0.2, ease: 'power1.inOut' }, 3.2);

            // PHASE 3: Content Emergence
            tl.to('#phase-2-content', { opacity: 0, y: -40, filter: 'blur(8px)', duration: 1, ease: 'power2.inOut', pointerEvents: 'none' }, 3.3)
              .to('#phase-3-content', { opacity: 1, duration: 0.8, ease: 'power2.out', pointerEvents: 'auto' }, 3.4)
              .to('#phase-3-intro', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 3.5)
              .fromTo('.feature-card', 
                  { opacity: 0, y: 30, scale: 0.94, filter: 'blur(12px)', rotateX: 6 },
                  { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', rotateX: 0, stagger: 0.18, duration: 1.2, ease: 'power3.out' }, 
                  3.7
              );

            // Hold Cards & Create Breathing Room
            tl.to('.feature-card', { y: -15, duration: 1.8, ease: 'none' }, 4.9);
            
            // Extra Hold Op
            tl.to({}, { duration: 0.4 }, 6.7);

            // PHASE 4: Bridge Moment
            tl.to('#phase-3-content', { opacity: 0, y: -40, filter: 'blur(8px)', duration: 1, ease: 'power2.inOut', pointerEvents: 'none' }, 7.1)
              .to('#bridge-content', { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out', pointerEvents: 'auto' }, 7.4)
              .to('.bridge-stagger', { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' }, 7.5);

            // PHASE 5: Exit to Static View Smoothly
            tl.to('#bridge-content, #ui-top, #ui-bottom', {
                opacity: 0,
                y: -20,
                filter: 'blur(4px)',
                duration: 1,
                ease: 'power2.inOut'
            }, 9.2);
        }

        function initTypographyReveals() {
            // Handle specialized headline text blocks
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

            // Handle block elements and paragraphs
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
<div className="flex-1 pointer-events-auto">
<div className="font-display text-lg tracking-tight text-[var(--fg)] cursor-pointer inline-block" onclick="lenis.scrollTo('#pinned-stage')">
                    Trace0
                </div>
</div>
<div className="flex-none hidden lg:flex gap-8 items-center pointer-events-auto">
<a className="nav-link text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)] transition-colors relative pb-1" href="#manifesto">About</a>
<a className="nav-link text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)] transition-colors relative pb-1" href="#overview">Services</a>
<a className="nav-link text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)] transition-colors relative pb-1" href="#interface">Engagement</a>
<a className="nav-link text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)] transition-colors relative pb-1" href="#modules">Deliverables</a>
<a className="nav-link text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)] transition-colors relative pb-1" href="#pricing">Commercials</a>
</div>
<div className="flex-1 flex justify-end items-center gap-6 pointer-events-auto">
<div className="hidden xl:flex flex-col items-end text-[10px] tracking-widest uppercase text-[var(--muted)]">
<span className="text-[var(--accent)] flex items-center gap-2">
<span className="w-1 h-1 bg-[var(--accent)] block rounded-none animate-pulse"></span>
                        Threat.Intel
                    </span>
<span>Sec.Active</span>
</div>
<button className="text-xs uppercase tracking-widest border border-[var(--border)] bg-transparent px-6 py-2.5 hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors font-medium rounded-none focus:outline-none text-[var(--fg)]" onclick="lenis.scrollTo('#access')">
                    Contact Us
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
<span className="text-[var(--muted)]">TRC.00</span>
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
<span>Threat Mapping</span>
<div className="w-[1px] h-12 bg-[var(--border)] relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-[var(--accent)] transform origin-top scale-y-0 will-change-transform" id="scroll-progress"></div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-40" id="idle-overlay">
<div className="text-center">
<div className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted)] mb-3">TRACE0 / IDLE</div>
<div className="text-sm md:text-base text-[var(--fg)]/80 tracking-tight">Signal / Threat / Advisory</div>
<div className="mt-6 text-[10px] uppercase tracking-[0.35em] text-[var(--accent)] animate-pulse">Scroll to initiate</div>
</div>
</div>
<div className="flex w-full z-20 px-6 absolute inset-0 items-center justify-center perspective-[1000px]">

<div className="absolute flex flex-col items-center justify-center text-center w-full pointer-events-auto px-4" id="phase-1-content">
<div className="w-full max-w-[980px] mx-auto flex flex-col items-center">
<h2 className="text-3xl md:text-5xl lg:text-7xl tracking-tight font-medium flex flex-col items-center mb-6 drop-shadow-2xl">
<span className="line-wrapper">
<span className="line-content whitespace-nowrap text-[var(--fg)] font-display">
                                    Understand threats
                                </span>
</span>
<span className="line-wrapper">
<span className="line-content whitespace-nowrap text-[var(--muted)] font-display">
                                    at their origin.
                                </span>
</span>
</h2>
<p className="text-sm md:text-base text-[var(--muted)] mt-2 font-normal max-w-lg opacity-0 translate-y-4 leading-relaxed" id="hero-descriptor">
                            Trace0 is a next-generation cybersecurity advisory startup specializing in vulnerability research, adversarial security assessment, and strategic cyber risk advisory.
                        </p>
<div className="flex gap-4 mt-10 opacity-0 translate-y-4" id="hero-ctas">
<button className="px-8 py-4 text-xs tracking-widest uppercase font-medium bg-[var(--accent)] text-black hover:bg-white transition-colors duration-300 rounded-none focus:outline-none" onclick="lenis.scrollTo('#access')">
                                Get Started
                            </button>
<button className="px-8 py-4 text-xs tracking-widest uppercase font-medium border border-[var(--border)] bg-black/50 backdrop-blur-md text-[var(--fg)] hover:bg-[var(--fg)] hover:text-black transition-colors duration-300 rounded-none focus:outline-none hidden sm:block" onclick="lenis.scrollTo('#overview')">
                                Learn More
                            </button>
</div>
</div>
</div>

<div className="absolute inset-0 w-full flex flex-col items-center justify-center text-center opacity-0 pointer-events-none blur-[6px] scale-[0.98] px-4 overflow-hidden" id="phase-2-content">
<div className="absolute inset-0 pointer-events-none" id="phase-2-grid"></div>
<div className="absolute left-0 right-0 h-px pointer-events-none" id="phase-2-scanline"></div>
<div className="w-full max-w-[980px] mx-auto flex flex-col items-center py-12 md:py-16 relative z-10">
<h3 className="text-2xl md:text-4xl tracking-tight font-normal leading-relaxed text-[var(--fg)] drop-shadow-2xl">
                            Vulnerability Research.
                            <br/>
<span className="text-[var(--muted)]">Adversarial Analysis.<br/>Strategic Advisory.</span>
</h3>
</div>
</div>

<div className="absolute w-full flex flex-col items-center justify-center opacity-0 pointer-events-none px-4" id="phase-3-content">
<div className="w-full max-w-[980px] mx-auto text-center mb-6 px-6 opacity-0 translate-y-[20px]" id="phase-3-intro">
<div className="text-[10px] text-[var(--muted)] font-medium tracking-widest mb-3 uppercase">TRC.01 / CAPABILITIES</div>
<h3 className="text-2xl md:text-3xl tracking-tight text-[var(--fg)] font-medium mb-2">Security grounded in offensive reality.</h3>
<p className="text-sm md:text-base text-[var(--muted)] font-normal max-w-xl mx-auto">We map, analyze, and secure your environment against advanced threat models.</p>
</div>

<div className="w-full max-w-[980px] mx-auto flex flex-col md:flex-row gap-6 p-6">
<div className="feature-card w-full md:w-1/3 aspect-[3/4] bg-[rgba(15,15,15,0.4)] backdrop-blur-xl border border-[var(--border)] flex flex-col rounded-none group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[var(--muted)]">
<div className="aspect-video w-full border-b border-[var(--border)] bg-[var(--panel)] flex flex-col relative z-20 group-hover:bg-[rgba(25,25,25,0.5)] transition-colors duration-500">
<div className="h-5 border-b border-[var(--border)] flex items-center px-2 gap-1.5 bg-black/40">
<div className="w-1 h-1 bg-[var(--border)]"></div>
<div className="w-1 h-1 bg-[var(--border)]"></div>
<div className="w-1 h-1 bg-[var(--border)]"></div>
</div>
<div className="flex-1 flex p-2.5 gap-2.5 w-full h-full">
<div className="w-1/4 h-full border border-[var(--border)]/50 border-dashed p-1 flex flex-col gap-1.5">
<div className="w-full h-1 bg-[var(--border)]/30"></div>
<div className="w-2/3 h-1 bg-[var(--border)]/30"></div>
<div className="w-5/6 h-1 bg-[var(--border)]/30"></div>
</div>
<div className="flex-1 h-full flex flex-col gap-2.5">
<div className="w-full h-1/3 border border-[var(--accent)]/30 bg-[var(--accent)]/10"></div>
<div className="w-full flex-1 flex gap-2.5">
<div className="flex-1 h-full bg-[var(--border)]/10 border border-[var(--border)]/30"></div>
<div className="flex-1 h-full bg-[var(--border)]/10 border border-[var(--border)]/30 relative">
<div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]"></div>
</div>
</div>
</div>
</div>
</div>
<div className="p-6 flex-1 flex flex-col justify-end z-20">
<div className="flex justify-between items-start mb-4">
<span className="text-[10px] tracking-widest text-[var(--muted)] uppercase font-medium">01</span>
<iconify-icon className="text-[var(--accent)]" icon="solar:shield-warning-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-lg tracking-tight font-medium text-[var(--fg)] mb-2 group-hover:text-white transition-colors">Strategic Advisory</h4>
<p className="text-[11px] text-[var(--muted)] leading-relaxed font-normal">Cyber risk posture assessment, security roadmap development, and executive risk briefings aligned with business objectives.</p>
</div>
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
</div>
<div className="feature-card w-full md:w-1/3 aspect-[3/4] bg-[rgba(15,15,15,0.4)] backdrop-blur-xl border border-[var(--border)] flex flex-col rounded-none group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[var(--muted)]">
<div className="aspect-video w-full border-b border-[var(--border)] bg-[var(--panel)] flex flex-col relative z-20 group-hover:bg-[rgba(25,25,25,0.5)] transition-colors duration-500">
<div className="h-5 border-b border-[var(--border)] flex items-center px-2 gap-1.5 bg-black/40">
<div className="w-1 h-1 bg-[var(--border)]"></div>
<div className="w-1 h-1 bg-[var(--border)]"></div>
<div className="w-1 h-1 bg-[var(--border)]"></div>
</div>
<div className="flex-1 flex items-center justify-center p-4 relative">
<div className="absolute w-3/5 h-2/5 bg-[var(--border)]/10 border border-[var(--border)]/50 -translate-x-2 -translate-y-2"></div>
<div className="absolute w-3/5 h-2/5 bg-[var(--border)]/20 border border-[var(--border)]/50"></div>
<div className="absolute w-3/5 h-2/5 bg-[var(--accent)]/10 border border-[var(--accent)]/50 translate-x-2 translate-y-2 shadow-2xl backdrop-blur-sm"></div>
</div>
</div>
<div className="p-6 flex-1 flex flex-col justify-end z-20">
<div className="flex justify-between items-start mb-4">
<span className="text-[10px] tracking-widest text-[var(--muted)] uppercase font-medium">02</span>
<iconify-icon className="text-[var(--accent)]" icon="solar:bug-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-lg tracking-tight font-medium text-[var(--fg)] mb-2 group-hover:text-white transition-colors">Vulnerability Research</h4>
<p className="text-[11px] text-[var(--muted)] leading-relaxed font-normal">Continuous identification of emerging vulnerabilities, zero-day analysis, and threat modeling based on real attacker TTPs.</p>
</div>
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
</div>
<div className="feature-card w-full md:w-1/3 aspect-[3/4] bg-[rgba(15,15,15,0.4)] backdrop-blur-xl border border-[var(--border)] flex flex-col rounded-none group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[var(--muted)]">
<div className="aspect-video w-full border-b border-[var(--border)] bg-[var(--panel)] flex flex-col relative z-20 group-hover:bg-[rgba(25,25,25,0.5)] transition-colors duration-500">
<div className="h-5 border-b border-[var(--border)] flex items-center px-2 gap-1.5 bg-black/40">
<div className="w-1 h-1 bg-[var(--border)]"></div>
<div className="w-1 h-1 bg-[var(--border)]"></div>
<div className="w-1 h-1 bg-[var(--border)]"></div>
</div>
<div className="flex-1 flex flex-col items-center justify-center p-3 gap-3">
<div className="w-full flex justify-between px-2">
<div className="text-[8px] text-[var(--muted)]">CLOUD</div>
<div className="text-[8px] text-[var(--accent)]">HYBRID</div>
<div className="text-[8px] text-[var(--muted)]">APP</div>
</div>
<div className="w-full h-1 bg-[var(--border)]/30 relative flex items-center">
<div className="absolute left-0 h-full w-1/2 bg-[var(--accent)]/50"></div>
<div className="absolute left-1/2 w-1.5 h-3 bg-[var(--accent)] -translate-x-1/2"></div>
</div>
<div className="w-full flex gap-1 mt-1">
<div className="h-2 flex-1 bg-[var(--border)]/20"></div>
<div className="h-2 flex-1 bg-[var(--accent)]/20"></div>
<div className="h-2 flex-1 bg-[var(--border)]/20"></div>
</div>
</div>
</div>
<div className="p-6 flex-1 flex flex-col justify-end z-20">
<div className="flex justify-between items-start mb-4">
<span className="text-[10px] tracking-widest text-[var(--muted)] uppercase font-medium">03</span>
<iconify-icon className="text-[var(--accent)]" icon="solar:server-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-lg tracking-tight font-medium text-[var(--fg)] mb-2 group-hover:text-white transition-colors">Architecture Review</h4>
<p className="text-[11px] text-[var(--muted)] leading-relaxed font-normal">Secure architecture review for cloud, hybrid, and application environments, identifying systemic design weaknesses.</p>
</div>
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
</div>
</div>
</div>

<div className="absolute flex flex-col items-center justify-center text-center w-full opacity-0 pointer-events-none blur-[10px] translate-y-[20px] px-4" id="bridge-content">
<div className="w-full max-w-[980px] mx-auto flex flex-col items-center py-12 md:py-16">
<div className="bridge-stagger text-[10px] text-[var(--accent)] font-medium tracking-widest mb-6 uppercase flex items-center gap-3 drop-shadow-xl opacity-0 translate-y-[12px]">
<div className="w-1.5 h-1.5 bg-[var(--accent)] rounded-none"></div>
                            [ WHO_WE_ARE ]
                        </div>
<h2 className="bridge-stagger text-3xl md:text-5xl lg:text-6xl tracking-tight text-[var(--fg)] font-medium drop-shadow-2xl mb-4 opacity-0 translate-y-[12px]">
                            "Understand threats at their origin —
                        </h2>
<p className="bridge-stagger text-xl md:text-3xl text-[var(--muted)] font-medium max-w-[880px] mx-auto mb-6 opacity-0 translate-y-[12px]">
                            where vulnerabilities are created, exploited, and weaponized."
                        </p>
<p className="bridge-stagger text-sm md:text-base text-[var(--muted)] font-normal max-w-[680px] mx-auto mb-2 opacity-0 translate-y-[12px]">
                            Trace0 is a research-driven cybersecurity startup. Unlike traditional consultancies focused solely on compliance, we operate at the intersection of vulnerability research, attack surface analysis, and strategic advisory.
                        </p>
</div>
</div>
</div>
</section>

<section className="relative pt-32 pb-16 px-4 md:px-8 z-10 w-full" id="manifesto">
<div className="section-slab">
<div className="section-inner flex flex-col items-center text-center max-w-3xl mx-auto">
<div className="text-[10px] text-[var(--accent)] font-medium tracking-widest mb-8 uppercase flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-[var(--accent)] animate-pulse"></div>
                        [ VALUE_PROPOSITION ]
                    </div>
<h2 className="text-2xl md:text-4xl font-medium tracking-tight text-[var(--fg)] mb-6 reveal-item">
                        Why Trace0?
                    </h2>
<p className="text-sm md:text-lg text-[var(--muted)] leading-relaxed font-normal reveal-item mb-10">
                        Trace0 bridges the gap between what attackers can do and what organizations must prioritize. We provide independent, vendor-neutral advisory focused on actual exploitability, not noise.
                    </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left reveal-item">
<div className="border border-[var(--border)] bg-[var(--bg)] p-6">
<iconify-icon className="text-[var(--accent)] mb-4" icon="solar:microscope-linear" width="24"></iconify-icon>
<h4 className="text-sm font-medium text-[var(--fg)] mb-2 uppercase tracking-wide">Research-First</h4>
<p className="text-xs text-[var(--muted)] leading-relaxed">Security mindset rooted in offensive research and discovery.</p>
</div>
<div className="border border-[var(--border)] bg-[var(--bg)] p-6">
<iconify-icon className="text-[var(--accent)] mb-4" icon="solar:shield-cross-linear" width="24"></iconify-icon>
<h4 className="text-sm font-medium text-[var(--fg)] mb-2 uppercase tracking-wide">Attacker-Driven</h4>
<p className="text-xs text-[var(--muted)] leading-relaxed">Analysis based on real-world attacker techniques and TTPs.</p>
</div>
<div className="border border-[var(--border)] bg-[var(--bg)] p-6">
<iconify-icon className="text-[var(--accent)] mb-4" icon="solar:presentation-graph-linear" width="24"></iconify-icon>
<h4 className="text-sm font-medium text-[var(--fg)] mb-2 uppercase tracking-wide">Executive Clarity</h4>
<p className="text-xs text-[var(--muted)] leading-relaxed">Deep technical expertise translated seamlessly for leadership.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 px-4 md:px-8 z-10 w-full reveal-block" id="overview">
<div className="section-slab">
<div className="section-inner max-w-6xl mx-auto flex flex-col items-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[var(--fg)] mb-8 flex flex-col items-center text-center">
<span className="overflow-hidden pb-2 block">
<span className="block reveal-text">Scope of</span>
</span>
<span className="overflow-hidden pb-2 block text-[var(--muted)]">
<span className="block reveal-text">Advisory Services.</span>
</span>
</h2>
<p className="text-sm text-[var(--muted)] mb-12 max-w-2xl leading-relaxed text-center reveal-item">
                        Comprehensive security guidance from strategy to technical depth. Our advisory covers the entire spectrum of modern cyber risk management.
                    </p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full reveal-item">
<div className="flex flex-col gap-3">
<div className="flex items-center gap-2 text-sm text-[var(--fg)] font-medium mb-1 uppercase tracking-widest border-b border-[var(--border)] pb-2">
<iconify-icon className="text-[var(--accent)]" icon="solar:shield-warning-linear" width="20"></iconify-icon>
                                Strategic Advisory
                            </div>
<div className="text-xs text-[var(--muted)] flex items-start gap-2"><div className="w-1 h-1 bg-[var(--border)] mt-1.5 shrink-0"></div>Cyber risk posture assessment</div>
<div className="text-xs text-[var(--muted)] flex items-start gap-2"><div className="w-1 h-1 bg-[var(--border)] mt-1.5 shrink-0"></div>Security roadmap development</div>
<div className="text-xs text-[var(--muted)] flex items-start gap-2"><div className="w-1 h-1 bg-[var(--border)] mt-1.5 shrink-0"></div>Executive &amp; board-level briefings</div>
<div className="text-xs text-[var(--muted)] flex items-start gap-2"><div className="w-1 h-1 bg-[var(--border)] mt-1.5 shrink-0"></div>Maturity benchmarking</div>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-2 text-sm text-[var(--fg)] font-medium mb-1 uppercase tracking-widest border-b border-[var(--border)] pb-2">
<iconify-icon className="text-[var(--accent)]" icon="solar:bug-linear" width="20"></iconify-icon>
                                Vulnerability Research
                            </div>
<div className="text-xs text-[var(--muted)] flex items-start gap-2"><div className="w-1 h-1 bg-[var(--border)] mt-1.5 shrink-0"></div>Emerging vulnerability identification</div>
<div className="text-xs text-[var(--muted)] flex items-start gap-2"><div className="w-1 h-1 bg-[var(--border)] mt-1.5 shrink-0"></div>Zero-day &amp; N-day analysis</div>
<div className="text-xs text-[var(--muted)] flex items-start gap-2"><div className="w-1 h-1 bg-[var(--border)] mt-1.5 shrink-0"></div>Threat modeling (MITRE ATT&amp;CK)</div>
<div className="text-xs text-[var(--muted)] flex items-start gap-2"><div className="w-1 h-1 bg-[var(--border)] mt-1.5 shrink-0"></div>Supply-chain risk assessment</div>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-2 text-sm text-[var(--fg)] font-medium mb-1 uppercase tracking-widest border-b border-[var(--border)] pb-2">
<iconify-icon className="text-[var(--accent)]" icon="solar:server-square-linear" width="20"></iconify-icon>
                                Architecture Review
                            </div>
<div className="text-xs text-[var(--muted)] flex items-start gap-2"><div className="w-1 h-1 bg-[var(--border)] mt-1.5 shrink-0"></div>Cloud, Web, Mobile, Thick Client</div>
<div className="text-xs text-[var(--muted)] flex items-start gap-2"><div className="w-1 h-1 bg-[var(--border)] mt-1.5 shrink-0"></div>APIs, microservices, identity</div>
<div className="text-xs text-[var(--muted)] flex items-start gap-2"><div className="w-1 h-1 bg-[var(--border)] mt-1.5 shrink-0"></div>Systemic weakness identification</div>
<div className="text-xs text-[var(--muted)] flex items-start gap-2"><div className="w-1 h-1 bg-[var(--border)] mt-1.5 shrink-0"></div>Security-by-design engineering</div>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-2 text-sm text-[var(--fg)] font-medium mb-1 uppercase tracking-widest border-b border-[var(--border)] pb-2">
<iconify-icon className="text-[var(--accent)]" icon="solar:siren-linear" width="20"></iconify-icon>
                                Incident Readiness
                            </div>
<div className="text-xs text-[var(--muted)] flex items-start gap-2"><div className="w-1 h-1 bg-[var(--border)] mt-1.5 shrink-0"></div>Readiness assessment</div>
<div className="text-xs text-[var(--muted)] flex items-start gap-2"><div className="w-1 h-1 bg-[var(--border)] mt-1.5 shrink-0"></div>Playbook review &amp; creation</div>
<div className="text-xs text-[var(--muted)] flex items-start gap-2"><div className="w-1 h-1 bg-[var(--border)] mt-1.5 shrink-0"></div>Active incident advisory</div>
<div className="text-xs text-[var(--muted)] flex items-start gap-2"><div className="w-1 h-1 bg-[var(--border)] mt-1.5 shrink-0"></div>Root cause analysis</div>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-2 text-sm text-[var(--fg)] font-medium mb-1 uppercase tracking-widest border-b border-[var(--border)] pb-2">
<iconify-icon className="text-[var(--accent)]" icon="solar:clipboard-list-linear" width="20"></iconify-icon>
                                Governance &amp; Risk
                            </div>
<div className="text-xs text-[var(--muted)] flex items-start gap-2"><div className="w-1 h-1 bg-[var(--border)] mt-1.5 shrink-0"></div>Business impact mapping</div>
<div className="text-xs text-[var(--muted)] flex items-start gap-2"><div className="w-1 h-1 bg-[var(--border)] mt-1.5 shrink-0"></div>Regulatory &amp; compliance support</div>
<div className="text-xs text-[var(--muted)] flex items-start gap-2"><div className="w-1 h-1 bg-[var(--border)] mt-1.5 shrink-0"></div>Risk register creation</div>
<div className="text-xs text-[var(--muted)] flex items-start gap-2"><div className="w-1 h-1 bg-[var(--border)] mt-1.5 shrink-0"></div>Policy &amp; framework advisory</div>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-2 text-sm text-[var(--fg)] font-medium mb-1 uppercase tracking-widest border-b border-[var(--border)] pb-2">
<iconify-icon className="text-[var(--accent)]" icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
                                Security Training
                            </div>
<div className="text-xs text-[var(--muted)] flex items-start gap-2"><div className="w-1 h-1 bg-[var(--border)] mt-1.5 shrink-0"></div>Executive security awareness</div>
<div className="text-xs text-[var(--muted)] flex items-start gap-2"><div className="w-1 h-1 bg-[var(--border)] mt-1.5 shrink-0"></div>Developer secure coding</div>
<div className="text-xs text-[var(--muted)] flex items-start gap-2"><div className="w-1 h-1 bg-[var(--border)] mt-1.5 shrink-0"></div>Red team exercises</div>
<div className="text-xs text-[var(--muted)] flex items-start gap-2"><div className="w-1 h-1 bg-[var(--border)] mt-1.5 shrink-0"></div>Phishing simulations</div>
</div>
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
<span>Advise</span>
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Remediate</span>
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-[var(--fg)]">Secure</span>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[var(--fg)] mb-6 flex flex-col">
<span className="overflow-hidden pb-1 block">
<span className="block reveal-text">Engagement Models.</span>
</span>
</h2>
<p className="text-sm text-[var(--muted)] mb-10 leading-relaxed font-normal reveal-item">
                            Flexible options tailored to your organization's needs and risk profile. Trace0 embeds seamlessly into your workflow to provide continuous or targeted strategic oversight.
                        </p>
<ul className="space-y-6 text-xs text-[var(--fg)] font-normal reveal-item">
<li className="flex items-start gap-4">
<iconify-icon className="text-[var(--accent)] mt-0.5" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
<span className="leading-relaxed"><strong className="font-medium text-[var(--fg)]">Retainer-Based:</strong> Ongoing access to advisors, monthly posture reviews, and continuous threat insights.</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[var(--accent)] mt-0.5" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
<span className="leading-relaxed"><strong className="font-medium text-[var(--fg)]">Project-Based:</strong> Targeted advisory for specific initiatives, M&amp;A due diligence, and new platform assessments.</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[var(--accent)] mt-0.5" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
<span className="leading-relaxed"><strong className="font-medium text-[var(--fg)]">On-Demand Consultation:</strong> Rapid support for high-risk decisions, incident escalation, and executive consultation.</span>
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
<div className="text-[10px] text-[var(--muted)] font-mono uppercase tracking-widest">Trace0 / Integration Array</div>
</div>
<div className="flex-1 p-4 md:p-6 flex gap-4 md:gap-6 bg-[var(--bg)]">
<div className="w-1/3 h-full border border-[var(--border)] border-dashed p-3 md:p-4 hidden sm:flex flex-col gap-3">
<div className="text-[10px] text-[var(--muted)] font-mono uppercase mb-2 border-b border-[var(--border)] pb-2">Threat Vector</div>
<div className="w-full h-2 bg-[var(--panel)]"></div>
<div className="w-2/3 h-2 bg-[var(--panel)]"></div>
<div className="w-4/5 h-2 bg-[var(--panel)] pl-4 border-l border-[var(--accent)]"></div>
<div className="w-1/2 h-2 bg-[var(--panel)]"></div>
</div>
<div className="flex-1 h-full flex flex-col gap-4 md:gap-6">
<div className="w-full h-1/3 border border-[var(--accent)]/50 bg-[var(--accent)]/5 p-4 flex flex-col justify-end relative group cursor-crosshair transition-colors hover:bg-[var(--accent)]/10 rounded-none">
<div className="absolute top-2 right-2 text-[10px] text-[var(--accent)] font-mono uppercase">Retainer Node</div>
<div className="w-1/3 h-4 bg-[var(--accent)] opacity-40 mb-3 rounded-none"></div>
<div className="w-full h-2 bg-[var(--panel)] border border-[var(--border)] mb-1.5 rounded-none"></div>
<div className="w-5/6 h-2 bg-[var(--panel)] border border-[var(--border)] rounded-none"></div>
</div>
<div className="w-full flex-1 flex flex-col sm:flex-row gap-4 md:gap-6">
<div className="flex-1 border border-[var(--border)] bg-[var(--panel)] p-3 relative hover:border-[var(--muted)] transition-colors rounded-none">
<div className="absolute top-2 right-2 text-[10px] text-[var(--muted)] font-mono uppercase">Project</div>
</div>
<div className="flex-1 border border-[var(--border)] bg-[var(--panel)] p-3 relative hover:border-[var(--muted)] transition-colors rounded-none">
<div className="absolute top-2 right-2 text-[10px] text-[var(--muted)] font-mono uppercase">On-Demand</div>
</div>
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
<div className="text-[10px] text-[var(--muted)] font-medium tracking-widest mb-4 uppercase">TRC.02 / OUTPUT</div>
<h2 className="text-3xl font-medium tracking-tight text-[var(--fg)] mb-4">Key Deliverables</h2>
<p className="text-sm text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
                            Clear, concise, and decision-oriented outputs designed for both technical teams and executive leadership.
                        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 reveal-item">
<div className="border border-[var(--border)] bg-[var(--panel)] backdrop-blur-md p-6 flex flex-col hover:border-[var(--accent)] transition-colors duration-500 rounded-none group relative overflow-hidden">
<iconify-icon className="text-[var(--accent)] mb-6" icon="solar:document-text-linear" width="24"></iconify-icon>
<h3 className="text-base text-[var(--fg)] font-medium mb-2 group-hover:text-white transition-colors">Advisory Reports</h3>
<p className="text-xs text-[var(--muted)] leading-relaxed flex-1 mb-2">Comprehensive Cyber Security Advisory Reports detailing tailored strategic guidance.</p>
</div>
<div className="border border-[var(--border)] bg-[var(--panel)] backdrop-blur-md p-6 flex flex-col hover:border-[var(--accent)] transition-colors duration-500 rounded-none group relative overflow-hidden">
<iconify-icon className="text-[var(--accent)] mb-6" icon="solar:siren-linear" width="24"></iconify-icon>
<h3 className="text-base text-[var(--fg)] font-medium mb-2 group-hover:text-white transition-colors">Threat Briefings</h3>
<p className="text-xs text-[var(--muted)] leading-relaxed flex-1 mb-2">Risk &amp; Threat Intelligence Briefings strictly aligned with your business context.</p>
</div>
<div className="border border-[var(--border)] bg-[var(--panel)] backdrop-blur-md p-6 flex flex-col hover:border-[var(--accent)] transition-colors duration-500 rounded-none group relative overflow-hidden">
<iconify-icon className="text-[var(--accent)] mb-6" icon="solar:server-path-linear" width="24"></iconify-icon>
<h3 className="text-base text-[var(--fg)] font-medium mb-2 group-hover:text-white transition-colors">Architecture Reviews</h3>
<p className="text-xs text-[var(--muted)] leading-relaxed flex-1 mb-2">Detailed Architecture Review Findings identifying systemic weaknesses in the stack.</p>
</div>
<div className="border border-[var(--border)] bg-[var(--panel)] backdrop-blur-md p-6 flex flex-col hover:border-[var(--accent)] transition-colors duration-500 rounded-none group relative overflow-hidden">
<iconify-icon className="text-[var(--accent)] mb-6" icon="solar:bug-linear" width="24"></iconify-icon>
<h3 className="text-base text-[var(--fg)] font-medium mb-2 group-hover:text-white transition-colors">Vulnerability Analysis</h3>
<p className="text-xs text-[var(--muted)] leading-relaxed flex-1 mb-2">Deep dive assessments focusing on actual exploitability, not automated noise.</p>
</div>
<div className="border border-[var(--border)] bg-[var(--panel)] backdrop-blur-md p-6 flex flex-col hover:border-[var(--accent)] transition-colors duration-500 rounded-none group relative overflow-hidden">
<iconify-icon className="text-[var(--accent)] mb-6" icon="solar:chart-pie-linear" width="24"></iconify-icon>
<h3 className="text-base text-[var(--fg)] font-medium mb-2 group-hover:text-white transition-colors">Executive Summaries</h3>
<p className="text-xs text-[var(--muted)] leading-relaxed flex-1 mb-2">Clear, decision-oriented dashboards and non-technical summaries for leadership.</p>
</div>
<div className="border border-[var(--border)] bg-[var(--panel)] backdrop-blur-md p-6 flex flex-col hover:border-[var(--accent)] transition-colors duration-500 rounded-none group relative overflow-hidden">
<iconify-icon className="text-[var(--accent)] mb-6" icon="solar:shield-check-linear" width="24"></iconify-icon>
<h3 className="text-base text-[var(--fg)] font-medium mb-2 group-hover:text-white transition-colors">Remediation Strategy</h3>
<p className="text-xs text-[var(--muted)] leading-relaxed flex-1 mb-2">Actionable Remediation &amp; Strategic Recommendations to demonstrably improve posture.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 px-4 md:px-8 z-10 w-full reveal-block" id="pricing">
<div className="section-slab">
<div className="section-inner max-w-6xl mx-auto">
<div className="mb-12 text-center reveal-item">
<h2 className="text-3xl font-medium tracking-tight text-[var(--fg)] mb-4">Flexible Engagement Terms</h2>
<p className="text-sm text-[var(--muted)]">Commercial terms, pricing, and duration are customized based on your unique requirements.</p>
</div>

<div className="mb-10 border-b border-[var(--border)] pb-4 flex justify-between items-center text-[10px] uppercase tracking-widest text-[var(--muted)] font-medium reveal-item">
<span>Advisory Provisioning</span>
<span>Scaled to Org Profile</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 reveal-item relative z-10">

<div className="border border-[var(--border)] bg-[var(--bg)] p-8 flex flex-col hover:border-[var(--muted)] transition-colors duration-500 rounded-none shadow-xl">
<div className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-medium mb-3">Model 01</div>
<div className="text-2xl font-medium text-[var(--fg)] mb-8">Retainer-Based</div>
<div className="flex-1">
<div className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-medium mb-3 pb-2 border-b border-[var(--border)]">Continuous Coverage</div>
<ul className="text-xs text-[var(--muted)] space-y-4 font-normal mt-4">
<li className="flex items-center gap-3"><iconify-icon className="text-[var(--border)]" icon="solar:check-circle-linear" width="16"></iconify-icon>Monthly/quarterly security posture reviews</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[var(--border)]" icon="solar:check-circle-linear" width="16"></iconify-icon>Ongoing access to Trace0 advisors</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[var(--border)]" icon="solar:check-circle-linear" width="16"></iconify-icon>Continuous vulnerability insights</li>
</ul>
</div>
</div>

<div className="border border-[var(--accent)]/50 bg-[var(--accent)]/5 p-8 flex flex-col relative rounded-none shadow-[0_0_40px_rgba(59,130,246,0.1)] hover:shadow-[0_0_60px_rgba(59,130,246,0.15)] transition-shadow duration-700 overflow-hidden scale-[1.02] lg:z-10 bg-[var(--bg)]">
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--accent)] shadow-[0_0_15px_var(--accent)]"></div>
<div className="absolute top-0 right-0 bg-[var(--accent)] text-black text-[10px] px-3 py-1.5 uppercase tracking-widest font-medium">Custom Scope</div>
<div className="text-[10px] uppercase tracking-widest text-[var(--accent)] font-medium mb-3">Model 02</div>
<div className="text-2xl font-medium text-[var(--fg)] mb-8">Project-Based</div>
<div className="flex-1 space-y-6">
<div>
<div className="text-[10px] uppercase tracking-widest text-[var(--accent)] font-medium mb-3 pb-2 border-b border-[var(--accent)]/30">Targeted Advisory</div>
<ul className="text-xs text-[var(--muted)] space-y-3 font-normal mt-4">
<li className="flex items-center gap-3"><iconify-icon className="text-[var(--accent)]" icon="solar:check-circle-linear" width="16"></iconify-icon>Targeted assessments for specific initiatives</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[var(--accent)]" icon="solar:check-circle-linear" width="16"></iconify-icon>M&amp;A security due diligence</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[var(--accent)]" icon="solar:check-circle-linear" width="16"></iconify-icon>New product or platform audits</li>
</ul>
</div>
</div>
</div>

<div className="border border-[var(--border)] bg-[var(--bg)] p-8 flex flex-col hover:border-[var(--muted)] transition-colors duration-500 rounded-none shadow-xl">
<div className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-medium mb-3">Model 03</div>
<div className="text-2xl font-medium text-[var(--fg)] mb-8">On-Demand</div>
<div className="flex-1 space-y-6">
<div>
<div className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-medium mb-3 pb-2 border-b border-[var(--border)]">Rapid Consultation</div>
<ul className="text-xs text-[var(--muted)] space-y-3 font-normal mt-4">
<li className="flex items-center gap-3"><iconify-icon className="text-[var(--border)]" icon="solar:check-circle-linear" width="16"></iconify-icon>Advisory for high-risk decisions</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[var(--border)]" icon="solar:check-circle-linear" width="16"></iconify-icon>Active incident escalation support</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[var(--border)]" icon="solar:check-circle-linear" width="16"></iconify-icon>Executive &amp; Board consultation sessions</li>
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
                        Ready to discuss your security needs?
                    </div>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-[var(--fg)] mb-6 flex flex-col reveal-item">
<span className="overflow-hidden pb-1 block">
<span className="block reveal-text">Cybersecurity demands foresight.</span>
</span>
</h2>
<p className="text-sm text-[var(--muted)] mb-12 max-w-xl mx-auto leading-relaxed font-normal reveal-item">
                        Trace0 stands ready to serve as your Cyber Security Advisor, helping you navigate complex threat landscapes with clarity, confidence, and technical depth. A detailed commercial proposal will be shared upon finalization of scope.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-6 reveal-item mb-16">
<button className="group inline-flex items-center justify-center px-8 py-4 text-xs tracking-widest font-medium text-black uppercase bg-white hover:bg-[var(--accent)] hover:text-white transition-all duration-300 rounded-none focus:outline-none">
<span>Request Proposal</span>
<iconify-icon className="ml-3 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
<div className="max-w-md w-full border border-[var(--border)] p-1 flex gap-2 reveal-item bg-[var(--bg)]">
<input className="flex-1 bg-transparent border-none text-xs text-[var(--fg)] px-4 focus:outline-none placeholder:text-[var(--muted)] placeholder:uppercase placeholder:tracking-widest" placeholder="Enter your email for updates" type="email"/>
<button className="px-6 py-3 text-[10px] tracking-widest font-medium text-[var(--fg)] uppercase bg-[var(--panel)] hover:bg-[var(--accent)] hover:text-black transition-all duration-300 rounded-none border border-[var(--border)] focus:outline-none">
                            Subscribe
                        </button>
</div>
<footer className="mt-32 pt-12 w-full border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-[var(--muted)] font-normal gap-8 reveal-item text-left md:text-center">
<div className="flex flex-col gap-1 items-start md:items-start text-[10px] uppercase tracking-widest">
<span className="text-[var(--fg)] font-medium text-base mb-2 font-display">Trace0</span>
<span>Next-Generation Cybersecurity Advisory.</span>
<a className="hover:text-[var(--accent)] transition-colors mt-2" href="mailto:contact@trace0.ai">contact@trace0.ai</a>
<a className="hover:text-[var(--accent)] transition-colors" href="https://www.trace0.ai" target="_blank">www.trace0.ai</a>
</div>
<div className="flex gap-12 text-[10px] uppercase tracking-widest text-left">
<div className="flex flex-col gap-3">
<span className="text-[var(--fg)] font-medium mb-1 border-b border-[var(--border)] pb-2">Services</span>
<a className="hover:text-[var(--accent)] transition-colors" href="#overview">Advisory Services</a>
<a className="hover:text-[var(--accent)] transition-colors" href="#interface">Engagement Models</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-[var(--fg)] font-medium mb-1 border-b border-[var(--border)] pb-2">Company</span>
<a className="hover:text-[var(--accent)] transition-colors" href="#manifesto">About Us</a>
<a className="hover:text-[var(--accent)] transition-colors" href="#">Careers</a>
<a className="hover:text-[var(--accent)] transition-colors" href="#access">Contact</a>
</div>
</div>
</footer>
<div className="w-full text-left md:text-center mt-12 text-[10px] text-[var(--muted)]/50 uppercase tracking-widest pb-4 reveal-item">
                        © 2026 Trace0 | All Rights Reserved
                    </div>
</div>
</div>
</section>
</main>



    </>
  );
}
