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
theme: {
extend: {
fontFamily: {
serif: ['Playfair Display', 'serif'],
body: ['Lora', 'serif'],
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // ========== SHADER BACKGROUND ==========
        const canvas = document.getElementById('shader-bg');
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
        camera.position.z = 1;

        const vertexShader = `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = vec4(position, 1.0);
            }
        `;

        const fragmentShader = `
            precision highp float;
            uniform float uTime;
            uniform vec2 uResolution;
            uniform vec2 uMouse;
            varying vec2 vUv;

            #define PI 3.14159265359

            vec3 palette(float t) {
                vec3 a = vec3(0.5, 0.5, 0.5);
                vec3 b = vec3(0.5, 0.5, 0.5);
                vec3 c = vec3(1.0, 1.0, 1.0);
                vec3 d = vec3(0.263, 0.416, 0.557);
                return a + b * cos(6.28318 * (c * t + d));
            }

            float noise(vec2 p) {
                return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
            }

            float smoothNoise(vec2 p) {
                vec2 i = floor(p);
                vec2 f = fract(p);
                f = f * f * (3.0 - 2.0 * f);
                
                float a = noise(i);
                float b = noise(i + vec2(1.0, 0.0));
                float c = noise(i + vec2(0.0, 1.0));
                float d = noise(i + vec2(1.0, 1.0));
                
                return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
            }

            float fbm(vec2 p) {
                float value = 0.0;
                float amplitude = 0.5;
                float frequency = 1.0;
                
                for(int i = 0; i < 6; i++) {
                    value += amplitude * smoothNoise(p * frequency);
                    amplitude *= 0.5;
                    frequency *= 2.0;
                }
                return value;
            }

            void main() {
                vec2 uv = vUv;
                vec2 p = (gl_FragCoord.xy * 2.0 - uResolution) / min(uResolution.x, uResolution.y);
                
                float time = uTime * 0.15;
                
                // Create flowing noise layers
                float n1 = fbm(p * 1.5 + time * 0.5);
                float n2 = fbm(p * 2.0 - time * 0.3 + vec2(5.0));
                float n3 = fbm(p * 3.0 + time * 0.2 + vec2(10.0));
                
                // Mouse interaction
                vec2 mouse = uMouse * 2.0 - 1.0;
                float mouseDist = length(p - mouse);
                float mouseInfluence = smoothstep(1.5, 0.0, mouseDist) * 0.3;
                
                // Combine noise layers
                float n = n1 * 0.5 + n2 * 0.3 + n3 * 0.2 + mouseInfluence;
                
                // Create color gradient
                vec3 col1 = vec3(0.05, 0.02, 0.1); // Deep purple-black
                vec3 col2 = vec3(0.1, 0.05, 0.15); // Dark purple
                vec3 col3 = vec3(0.15, 0.1, 0.2);  // Medium purple
                vec3 col4 = vec3(0.2, 0.1, 0.3);   // Light purple
                
                vec3 color = mix(col1, col2, n);
                color = mix(color, col3, n1 * 0.5);
                color = mix(color, col4, n2 * 0.3);
                
                // Add subtle color variations
                color += palette(n + time * 0.1) * 0.05;
                
                // Vignette
                float vignette = 1.0 - length(p) * 0.4;
                color *= vignette;
                
                // Grain
                float grain = noise(uv * 1000.0 + time * 100.0) * 0.03;
                color += grain;
                
                gl_FragColor = vec4(color, 1.0);
            }
        `;

        const geometry = new THREE.PlaneGeometry(2, 2);
        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                uTime: { value: 0 },
                uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
                uMouse: { value: new THREE.Vector2(0.5, 0.5) }
            }
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // Mouse tracking
        let mouseX = 0.5, mouseY = 0.5;
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX / window.innerWidth;
            mouseY = 1.0 - e.clientY / window.innerHeight;
        });

        // Animation loop
        function animate() {
            requestAnimationFrame(animate);
            material.uniforms.uTime.value += 0.01;
            material.uniforms.uMouse.value.x += (mouseX - material.uniforms.uMouse.value.x) * 0.05;
            material.uniforms.uMouse.value.y += (mouseY - material.uniforms.uMouse.value.y) * 0.05;
            renderer.render(scene, camera);
        }
        animate();

        // Resize handler
        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            material.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
        });

        // ========== GSAP ANIMATIONS ==========
        gsap.registerPlugin(ScrollTrigger);

        // Progress bar
        gsap.to("#progress-bar", {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 0.3
            }
        });

        // Hero animations
        const heroTl = gsap.timeline({ delay: 0.5 });
        
        heroTl.to(".hero-label", {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
        })
        .to(".hero-title span span", {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out"
        }, "-=0.5")
        .to(".hero-desc", {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
        }, "-=0.8")
        .to(".hero-input", {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
        }, "-=0.6")
        .to(".scroll-indicator", {
            opacity: 1,
            duration: 1,
            ease: "power3.out"
        }, "-=0.4");

        // Parallax for hero elements
        gsap.to(".parallax-slow", {
            y: -100,
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: 1
            }
        });

        gsap.to(".parallax-fast", {
            y: -200,
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: 1
            }
        });

        // ========== HORIZONTAL SCROLL ==========
        const horizontalSection = document.querySelector(".horizontal-section");
        const horizontalWrapper = document.querySelector(".horizontal-wrapper");
        const panels = gsap.utils.toArray(".horizontal-panel");

        gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: horizontalSection,
                pin: true,
                scrub: 1,
                snap: 1 / (panels.length - 1),
                end: () => "+=" + horizontalWrapper.offsetWidth
            }
        });

        // Animate elements within horizontal panels
        panels.forEach((panel, i) => {
            const heading = panel.querySelector("h2");
            const content = panel.querySelector("p");
            const visual = panel.querySelector(".glass-panel");

            if (heading) {
                gsap.from(heading, {
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    scrollTrigger: {
                        trigger: panel,
                        containerAnimation: gsap.to(panels, { xPercent: -100 * (panels.length - 1) }),
                        start: "left center",
                        toggleActions: "play none none reverse"
                    }
                });
            }

            if (visual) {
                gsap.from(visual, {
                    opacity: 0,
                    scale: 0.8,
                    duration: 1,
                    scrollTrigger: {
                        trigger: panel,
                        containerAnimation: gsap.to(panels, { xPercent: -100 * (panels.length - 1) }),
                        start: "left center",
                        toggleActions: "play none none reverse"
                    }
                });
            }
        });

        // ========== CARD ANIMATIONS ==========
        gsap.from(".card-item", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".card-item",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        // ========== FEATURE LIST ANIMATIONS ==========
        gsap.from(".feature-title", {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: ".feature-title",
                start: "top 80%"
            }
        });

        gsap.from(".feature-item", {
            x: -100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".feature-item",
                start: "top 80%"
            }
        });

        // ========== STATS COUNTER ANIMATION ==========
        const counters = document.querySelectorAll('.counter');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            
            gsap.to(counter, {
                innerHTML: target,
                duration: 2,
                ease: "power2.out",
                snap: { innerHTML: 1 },
                scrollTrigger: {
                    trigger: counter,
                    start: "top 80%"
                }
            });
        });

        gsap.from(".stat-item", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".stat-item",
                start: "top 80%"
            }
        });

        // ========== MAGNETIC BUTTONS ==========
        document.querySelectorAll('.magnetic-btn').forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                gsap.to(btn, {
                    x: x * 0.3,
                    y: y * 0.3,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: "elastic.out(1, 0.3)"
                });
            });
        });

        // ========== SECTION TITLE ANIMATIONS ==========
        gsap.from(".section-title", {
            opacity: 0,
            y: 30,
            duration: 1,
            scrollTrigger: {
                trigger: ".section-title",
                start: "top 80%"
            }
        });

        // ========== SMOOTH SCROLL INDICATOR FADE ==========
        gsap.to(".scroll-indicator", {
            opacity: 0,
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "20% top",
                scrub: true
            }
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
      

<canvas id="shader-bg"></canvas>

<div className="fixed top-0 left-0 w-full h-1 z-[100]">
<div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left scale-x-0" id="progress-bar"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer magnetic-btn">
<div className="relative w-6 h-6 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-teal-300 rounded-full blur-[2px] opacity-70 group-hover:opacity-100 transition-opacity"></div>
<div className="relative w-2 h-2 bg-white rounded-full"></div>
</div>
<span className="font-serif text-xl tracking-tight text-white font-medium">Garden</span>
</div>
<div className="hidden md:flex items-center gap-8 font-body text-sm text-white/70">
<a className="hover:text-white transition-colors magnetic-btn" href="#">Showcase</a>
<a className="hover:text-white transition-colors magnetic-btn" href="#">Pricing</a>
<a className="hover:text-white transition-colors magnetic-btn" href="#">About</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center text-xs font-medium tracking-wide text-white/70 hover:text-white uppercase transition-colors magnetic-btn">
                    Log In
                </button>
<button className="glass-input px-5 py-2 rounded-full text-xs font-medium tracking-wide text-white hover:bg-white/10 transition-colors border border-white/20 magnetic-btn">
                    Start Designing
                </button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden" id="hero">
<div className="max-w-5xl mx-auto text-center relative z-10">

<div className="hero-label inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 opacity-0">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-body text-white/80 tracking-wide">V 2.0 Now Available</span>
</div>

<h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight leading-[1.1] mb-6">
<span className="block overflow-hidden">
<span className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50">Cultivate your</span>
</span>
<span className="block overflow-hidden">
<span className="inline-block italic font-normal text-white/90">digital presence.</span>
</span>
</h1>
<p className="hero-desc text-lg md:text-xl font-body text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed font-light opacity-0">
                Designing beautiful landing pages shouldn't feel artificial. 
                Use AI to grow unique, responsive layouts in seconds.
            </p>

<div className="hero-input relative max-w-xl mx-auto group opacity-0">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-30 group-hover:opacity-50 blur transition duration-1000"></div>
<div className="relative flex items-center p-2 bg-black/80 backdrop-blur-xl rounded-2xl border border-white/10">
<div className="pl-4 text-white/40">
<i className="w-5 h-5" data-lucide="sparkles"></i>
</div>
<input className="w-full bg-transparent border-none text-white placeholder-white/30 focus:ring-0 px-4 py-3 font-body text-base focus:outline-none" placeholder="Describe your dream website..." type="text"/>
<button className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-xl font-medium text-sm transition-all flex items-center gap-2 shadow-lg shadow-white/10 magnetic-btn">
                        Generate <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0">
<span className="text-xs text-white/40 font-body tracking-widest uppercase">Scroll</span>
<div className="w-6 h-10 border border-white/20 rounded-full flex justify-center pt-2">
<div className="w-1 h-2 bg-white/60 rounded-full animate-bounce"></div>
</div>
</div>

<div className="parallax-slow absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-32 h-32 hidden lg:block pointer-events-none">
<div className="sphere-3d w-full h-full"></div>
</div>
<div className="parallax-fast absolute top-1/3 right-0 translate-x-1/4 w-24 h-24 hidden lg:block pointer-events-none">
<div className="sphere-3d w-full h-full bg-gradient-to-br from-pink-500 to-purple-600 opacity-80"></div>
</div>
</div>
</section>

<section className="py-8 border-y border-white/5 overflow-hidden">
<div className="marquee">
<div className="marquee-content flex items-center gap-8 text-2xl md:text-4xl font-serif text-white/20 whitespace-nowrap">
<span>AI-Powered Design</span>
<span className="text-white/40">✦</span>
<span>Liquid Glass Effects</span>
<span className="text-white/40">✦</span>
<span>Real-time Rendering</span>
<span className="text-white/40">✦</span>
<span>Component Library</span>
<span className="text-white/40">✦</span>
<span>AI-Powered Design</span>
<span className="text-white/40">✦</span>
<span>Liquid Glass Effects</span>
<span className="text-white/40">✦</span>
<span>Real-time Rendering</span>
<span className="text-white/40">✦</span>
<span>Component Library</span>
<span className="text-white/40">✦</span>
</div>
</div>
</section>

<section className="horizontal-section relative">
<div className="horizontal-wrapper">

<div className="horizontal-panel bg-transparent px-6 md:px-20">
<div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<span className="text-xs font-body text-white/40 tracking-widest uppercase">01 / Feature</span>
<h2 className="text-4xl md:text-6xl font-serif font-normal tracking-tight">
<span className="text-white">Intelligent</span><br/>
<span className="italic text-white/70">Layout Engine</span>
</h2>
<p className="text-white/50 font-body text-lg leading-relaxed max-w-md">
                            Our AI understands design principles and creates harmonious compositions automatically.
                        </p>
</div>
<div className="glass-panel rounded-3xl p-8 h-[400px] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 to-purple-600/30"></div>
<div className="relative h-full flex flex-col justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
<div className="w-3 h-3 rounded-full bg-green-400/80"></div>
</div>
<div className="space-y-4">
<div className="h-4 bg-white/20 rounded w-3/4"></div>
<div className="h-4 bg-white/10 rounded w-1/2"></div>
<div className="h-20 bg-white/5 rounded-xl"></div>
</div>
</div>
</div>
</div>
</div>

<div className="horizontal-panel bg-transparent px-6 md:px-20">
<div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
<div className="glass-panel rounded-3xl p-8 h-[400px] relative overflow-hidden order-2 md:order-1">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-600/30 to-cyan-600/30"></div>
<div className="relative h-full flex items-center justify-center">
<div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
<i className="w-12 h-12 text-white/60" data-lucide="palette"></i>
</div>
</div>
</div>
<div className="space-y-6 order-1 md:order-2">
<span className="text-xs font-body text-white/40 tracking-widest uppercase">02 / Feature</span>
<h2 className="text-4xl md:text-6xl font-serif font-normal tracking-tight">
<span className="text-white">Adaptive</span><br/>
<span className="italic text-white/70">Color Systems</span>
</h2>
<p className="text-white/50 font-body text-lg leading-relaxed max-w-md">
                            Generate cohesive color palettes that work across light and dark themes seamlessly.
                        </p>
</div>
</div>
</div>

<div className="horizontal-panel bg-transparent px-6 md:px-20">
<div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<span className="text-xs font-body text-white/40 tracking-widest uppercase">03 / Feature</span>
<h2 className="text-4xl md:text-6xl font-serif font-normal tracking-tight">
<span className="text-white">Export</span><br/>
<span className="italic text-white/70">Anywhere</span>
</h2>
<p className="text-white/50 font-body text-lg leading-relaxed max-w-md">
                            One-click export to React, Vue, HTML, or Figma. Your design, your format.
                        </p>
</div>
<div className="glass-panel rounded-3xl p-8 h-[400px] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-orange-600/30 to-rose-600/30"></div>
<div className="relative h-full flex flex-col justify-center items-center gap-4">
<div className="flex gap-4">
<div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center">
<i className="w-8 h-8 text-white/60" data-lucide="code-2"></i>
</div>
<div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center">
<i className="w-8 h-8 text-white/60" data-lucide="figma"></i>
</div>
<div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center">
<i className="w-8 h-8 text-white/60" data-lucide="file-json"></i>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="horizontal-panel bg-transparent px-6 md:px-20">
<div className="max-w-4xl w-full text-center">
<h2 className="text-5xl md:text-7xl font-serif font-normal tracking-tight mb-8">
<span className="text-white">Ready to</span><br/>
<span className="italic text-white/70">get started?</span>
</h2>
<button className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-all magnetic-btn">
                        Start Free Trial
                        <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="relative py-24 px-6 z-20">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 border-b border-white/10 pb-8">
<div>
<h2 className="section-title text-3xl md:text-4xl font-serif font-normal tracking-tight mb-2">Generated Concepts</h2>
<p className="text-white/50 font-body text-sm">Real-time rendering with glass physics.</p>
</div>
<div className="flex items-center gap-8 bg-white/5 border border-white/10 px-6 py-3 rounded-full backdrop-blur-md">
<div className="flex items-center gap-3">
<span className="text-xs text-white/60 uppercase tracking-widest">Creativity</span>
<input className="w-24" max="100" min="0" type="range" value="75"/>
</div>
<div className="w-px h-4 bg-white/20"></div>
<div className="flex items-center gap-3">
<span className="text-xs text-white/60 uppercase tracking-widest">3D Mode</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all duration-300 checked:right-0 right-5" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-white/20 cursor-pointer border border-white/10" htmlFor="toggle"></label>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="card-item glass-panel rounded-3xl p-2 hover:-translate-y-2 transition-transform duration-500 group">
<div className="bg-neutral-900 rounded-2xl overflow-hidden h-[400px] relative">
<div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-rose-500 to-purple-600 opacity-80"></div>
<div className="absolute inset-4 bg-black/20 backdrop-blur-md border border-white/20 rounded-xl p-6 flex flex-col justify-between text-white">
<div className="flex justify-between items-start">
<div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-xs">Aa</div>
<i className="w-5 h-5 text-white/70" data-lucide="more-horizontal"></i>
</div>
<div>
<h3 className="font-serif text-3xl mb-2 leading-none">Velvet <br/>Interior</h3>
<div className="h-1 w-12 bg-white/50 rounded-full"></div>
</div>
</div>
</div>
<div className="p-4 flex justify-between items-center">
<span className="text-sm font-body text-white/80">E-Commerce Layout</span>
<i className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
</div>

<div className="card-item glass-panel rounded-3xl p-2 hover:-translate-y-2 transition-transform duration-500 group md:mt-12">
<div className="bg-neutral-900 rounded-2xl overflow-hidden h-[400px] relative">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 via-teal-500 to-cyan-600 opacity-80"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/30 rounded-full blur-2xl"></div>
<div className="absolute inset-x-4 bottom-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-5">
<div className="flex gap-2 mb-3">
<div className="h-2 w-2 rounded-full bg-red-400"></div>
<div className="h-2 w-2 rounded-full bg-yellow-400"></div>
<div className="h-2 w-2 rounded-full bg-green-400"></div>
</div>
<div className="space-y-2">
<div className="h-2 bg-white/20 rounded w-3/4"></div>
<div className="h-2 bg-white/10 rounded w-1/2"></div>
</div>
</div>
</div>
<div className="p-4 flex justify-between items-center">
<span className="text-sm font-body text-white/80">SaaS Dashboard</span>
<i className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
</div>

<div className="card-item glass-panel rounded-3xl p-2 hover:-translate-y-2 transition-transform duration-500 group">
<div className="bg-neutral-900 rounded-2xl overflow-hidden h-[400px] relative">
<div className="absolute inset-0 bg-gradient-to-bl from-blue-500 via-indigo-600 to-violet-700 opacity-80"></div>
<div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-300 rounded-full mix-blend-overlay blur-3xl opacity-50"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
<h3 className="font-serif text-4xl text-white mb-2 tracking-tight">Fintech</h3>
<p className="font-body text-xs text-white/70 max-w-[150px] leading-relaxed">Secure payments for the next generation.</p>
<button className="mt-6 px-4 py-2 rounded-full bg-white text-black text-xs font-bold magnetic-btn">Get Started</button>
</div>
</div>
<div className="p-4 flex justify-between items-center">
<span className="text-sm font-body text-white/80">App Landing</span>
<i className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="feature-title text-3xl md:text-5xl font-serif font-normal tracking-tight mb-4">Why Designers Choose Garden</h2>
</div>
<div className="space-y-4">
<div className="feature-item group flex items-center justify-between p-6 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all cursor-default">
<div className="flex items-center gap-6">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
<i className="w-6 h-6 text-pink-300" data-lucide="layers"></i>
</div>
<div>
<h3 className="text-xl font-serif text-white mb-1">Component Liquid</h3>
<p className="text-sm text-white/50 font-body">Fluid layouts that adapt to content volume.</p>
</div>
</div>
<i className="w-5 h-5 text-white/20 group-hover:text-white transition-colors" data-lucide="chevron-right"></i>
</div>
<div className="feature-item group flex items-center justify-between p-6 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all cursor-default">
<div className="flex items-center gap-6">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center">
<i className="w-6 h-6 text-cyan-300" data-lucide="wand-2"></i>
</div>
<div>
<h3 className="text-xl font-serif text-white mb-1">AI Typographer</h3>
<p className="text-sm text-white/50 font-body">Auto-pairing serif and sans-serif fonts.</p>
</div>
</div>
<i className="w-5 h-5 text-white/20 group-hover:text-white transition-colors" data-lucide="chevron-right"></i>
</div>
<div className="feature-item group flex items-center justify-between p-6 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all cursor-default">
<div className="flex items-center gap-6">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-lime-500/20 border border-white/10 flex items-center justify-center">
<i className="w-6 h-6 text-emerald-300" data-lucide="palette"></i>
</div>
<div>
<h3 className="text-xl font-serif text-white mb-1">Vibrant Glass Engine</h3>
<p className="text-sm text-white/50 font-body">Generate assets with ray-traced glass effects.</p>
</div>
</div>
<i className="w-5 h-5 text-white/20 group-hover:text-white transition-colors" data-lucide="chevron-right"></i>
</div>
<div className="feature-item group flex items-center justify-between p-6 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all cursor-default">
<div className="flex items-center gap-6">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-white/10 flex items-center justify-center">
<i className="w-6 h-6 text-orange-300" data-lucide="zap"></i>
</div>
<div>
<h3 className="text-xl font-serif text-white mb-1">Lightning Fast</h3>
<p className="text-sm text-white/50 font-body">Generate complete pages in under 3 seconds.</p>
</div>
</div>
<i className="w-5 h-5 text-white/20 group-hover:text-white transition-colors" data-lucide="chevron-right"></i>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="stat-item text-center">
<div className="text-4xl md:text-6xl font-serif text-white mb-2">
<span className="counter" data-target="50">0</span>K+
                    </div>
<p className="text-sm text-white/50 font-body">Active Users</p>
</div>
<div className="stat-item text-center">
<div className="text-4xl md:text-6xl font-serif text-white mb-2">
<span className="counter" data-target="2">0</span>M+
                    </div>
<p className="text-sm text-white/50 font-body">Designs Created</p>
</div>
<div className="stat-item text-center">
<div className="text-4xl md:text-6xl font-serif text-white mb-2">
<span className="counter" data-target="99">0</span>%
                    </div>
<p className="text-sm text-white/50 font-body">Satisfaction</p>
</div>
<div className="stat-item text-center">
<div className="text-4xl md:text-6xl font-serif text-white mb-2">
<span className="counter" data-target="24">0</span>/7
                    </div>
<p className="text-sm text-white/50 font-body">Support</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-black/40 backdrop-blur-lg">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-white rounded-full"></div>
<span className="font-serif text-lg text-white">Garden</span>
</div>
<div className="text-xs font-body text-white/40">
                © 2024 Garden Design AI. Crafted with light.
            </div>
<div className="flex gap-6">
<a className="text-white/40 hover:text-white transition-colors magnetic-btn" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-white/40 hover:text-white transition-colors magnetic-btn" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a className="text-white/40 hover:text-white transition-colors magnetic-btn" href="#"><i className="w-4 h-4" data-lucide="dribbble"></i></a>
</div>
</div>
</footer>



    </>
  );
}
