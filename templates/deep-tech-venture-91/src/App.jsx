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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // --- 1. Custom Magnetic Cursor ---
            const cursor = document.getElementById('cursor-dot');
            const interactables = document.querySelectorAll('a, button, input');

            window.addEventListener('mousemove', (e) => {
                cursor.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
            });

            interactables.forEach(el => {
                el.addEventListener('mouseenter', () => cursor.classList.add('active'));
                el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
            });

            // --- 2. Scroll Interactions & Animations ---
            const nav = document.getElementById('nav');
            const scrollElements = document.querySelectorAll('.scroll-trigger');

            const scrollObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-inview');
                        // Handle Counters
                        const counters = entry.target.querySelectorAll('.counter');
                        counters.forEach(counter => {
                            if (!counter.hasAttribute('data-counted')) {
                                const target = parseFloat(counter.getAttribute('data-target'));
                                animateCounter(counter, target);
                                counter.setAttribute('data-counted', 'true');
                            }
                        });
                    }
                });
            }, { threshold: 0.1 });

            scrollElements.forEach(el => scrollObserver.observe(el));

            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    nav.classList.add('bg-[#030305]/90', 'backdrop-blur-md', 'border-[#888899]/20');
                    nav.classList.remove('bg-transparent', 'border-transparent');
                } else {
                    nav.classList.remove('bg-[#030305]/90', 'backdrop-blur-md', 'border-[#888899]/20');
                    nav.classList.add('bg-transparent', 'border-transparent');
                }
            });

            // --- 3. Number Counter ---
            function animateCounter(el, target) {
                let current = 0;
                const duration = 2000;
                const stepTime = 20;
                const steps = duration / stepTime;
                const increment = target / steps;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        el.innerText = target.toString().includes('.') ? target.toFixed(1) : Math.round(target);
                        clearInterval(timer);
                    } else {
                        el.innerText = target.toString().includes('.') ? current.toFixed(1) : Math.round(current);
                    }
                }, stepTime);
            }

            // --- 4. Live UTC Clock ---
            const clockDisplay = document.getElementById('clock-display');
            function updateClock() {
                const now = new Date();
                const h = String(now.getUTCHours()).padStart(2, '0');
                const m = String(now.getUTCMinutes()).padStart(2, '0');
                const s = String(now.getUTCSeconds()).padStart(2, '0');
                clockDisplay.innerText = `${h}:${m}:${s} UTC`;
            }
            setInterval(updateClock, 1000);
            updateClock();

            // --- 5. Astonishing WebGL "Flickering Grid + Particle Dotted Glow" Shader ---
            const canvas = document.getElementById('hero-canvas');
            const gl = canvas.getContext('webgl', { alpha: true, antialias: true });
            
            if (!gl) return;

            let mouseX = 0.5, mouseY = 0.5;
            let targetMouseX = 0.5, targetMouseY = 0.5;

            window.addEventListener('mousemove', (e) => {
                targetMouseX = e.clientX / window.innerWidth;
                targetMouseY = 1.0 - (e.clientY / window.innerHeight);
            });

            function resize() {
                canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
                canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
                gl.viewport(0, 0, canvas.width, canvas.height);
            }
            window.addEventListener('resize', resize);
            resize();

            const vsSource = `
                attribute vec2 position;
                void main() {
                    gl_Position = vec4(position, 0.0, 1.0);
                }
            `;

            // Advanced Fragment Shader merging Grid, Particles, and Reactive Wave
            const fsSource = `
                precision highp float;
                uniform vec2 u_resolution;
                uniform float u_time;
                uniform vec2 u_mouse;

                // Random noise for particles
                float rand(vec2 n) { 
                    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
                }

                void main() {
                    vec2 st = gl_FragCoord.xy / u_resolution.xy;
                    vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
                    vec2 uv = st * aspect;
                    vec2 mouse = u_mouse * aspect;

                    // Mouse interaction
                    float dist = distance(uv, mouse);
                    float glow = exp(-dist * 6.0);

                    // Base Colors
                    vec3 cyan = vec3(0.0, 0.898, 1.0); // #00E5FF
                    
                    // --- 1. Flickering Grid ---
                    float gridLines = 40.0;
                    vec2 gridUv = uv * gridLines;
                    float lineThickness = 0.98;
                    float gridX = step(lineThickness, fract(gridUv.x));
                    float gridY = step(lineThickness, fract(gridUv.y));
                    float grid = max(gridX, gridY);
                    
                    // Flicker calculation for grid based on time and y pos
                    float flicker = abs(sin(u_time * 3.0 + uv.y * 10.0)) * 0.5 + 0.1;
                    vec3 finalGridColor = cyan * grid * flicker * 0.15;

                    // --- 2. Dotted Ripple Field ---
                    float scale = 70.0;
                    vec2 dotUv = fract(uv * scale);
                    vec2 cellId = floor(uv * scale);
                    float wave = sin(length(cellId * 0.1 - mouse * scale * 0.1) * 2.0 - u_time * 4.0);
                    
                    float baseSize = 0.15;
                    float dotSize = baseSize + (wave * 0.08) + (glow * 0.25);
                    float circle = 1.0 - smoothstep(dotSize, dotSize + 0.05, length(dotUv - vec2(0.5)));

                    vec3 colorMix = mix(cyan * 0.2, cyan * 1.2, wave * 0.5 + 0.5);
                    colorMix += cyan * glow * 1.5;
                    vec3 finalDotColor = colorMix * circle;

                    // --- 3. Digital Floating Particles ---
                    float particleGlow = 0.0;
                    for(float i=0.0; i<15.0; i++) {
                        vec2 pos = vec2(rand(vec2(i, 1.0)), rand(vec2(i, 2.0)));
                        pos.y += fract(u_time * 0.05 * (rand(vec2(i, 3.0)) + 0.5)); // Drift up
                        pos.y = fract(pos.y);
                        pos.x += sin(u_time * 0.5 + i) * 0.02; // Wiggle
                        pos *= aspect;
                        
                        float pDist = distance(uv, pos);
                        float pSize = 0.005 + rand(vec2(i, 4.0)) * 0.01;
                        particleGlow += smoothstep(pSize, 0.0, pDist) * (0.5 + sin(u_time * 2.0 + i)*0.5);
                    }
                    vec3 finalParticleColor = cyan * particleGlow * 1.5;

                    // Composite
                    vec3 composite = finalGridColor + finalDotColor + finalParticleColor;

                    // Vignette edge fade
                    float edgeFade = smoothstep(0.0, 0.2, st.x) * smoothstep(1.0, 0.8, st.x) * 
                                     smoothstep(0.0, 0.2, st.y) * smoothstep(1.0, 0.6, st.y);

                    gl_FragColor = vec4(composite * edgeFade, (composite.r + composite.g + composite.b) * 0.5);
                }
            `;

            function compileShader(type, source) {
                const shader = gl.createShader(type);
                gl.shaderSource(shader, source);
                gl.compileShader(shader);
                if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                    console.error('Shader error:', gl.getShaderInfoLog(shader));
                    gl.deleteShader(shader);
                    return null;
                }
                return shader;
            }

            const vertexShader = compileShader(gl.VERTEX_SHADER, vsSource);
            const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fsSource);

            const program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            gl.useProgram(program);

            const vertices = new Float32Array([ -1, -1,  1, -1,  -1,  1,  1,  1 ]);
            const buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

            const positionLocation = gl.getAttribLocation(program, "position");
            gl.enableVertexAttribArray(positionLocation);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

            const uResolution = gl.getUniformLocation(program, "u_resolution");
            const uTime = gl.getUniformLocation(program, "u_time");
            const uMouse = gl.getUniformLocation(program, "u_mouse");

            let startTime = performance.now();
            let isRendering = true;

            const heroSection = document.querySelector('section');
            const heroObserver = new IntersectionObserver((entries) => {
                isRendering = entries[0].isIntersecting;
                if(isRendering) render(performance.now());
            });
            heroObserver.observe(heroSection);

            function render(time) {
                if (!isRendering) return;

                // Smooth mouse interpolation
                mouseX += (targetMouseX - mouseX) * 0.05;
                mouseY += (targetMouseY - mouseY) * 0.05;

                gl.uniform2f(uResolution, canvas.width, canvas.height);
                gl.uniform1f(uTime, (time - startTime) * 0.001);
                gl.uniform2f(uMouse, mouseX, mouseY);

                // Clear with transparent
                gl.clearColor(0.0, 0.0, 0.0, 0.0);
                gl.clear(gl.COLOR_BUFFER_BIT);

                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
                requestAnimationFrame(render);
            }
            
            requestAnimationFrame(render);
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
      

<div id="cursor-dot"></div>

<nav className="fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-transparent border-b border-transparent flex items-center justify-between px-6 md:px-12 py-4 md:py-6" id="nav">
<div className="flex items-center gap-3 group cursor-pointer">

<svg className="w-8 h-8 text-[#FFFFFF] group-hover:text-[#00E5FF] transition-colors duration-500" viewbox="0 0 100 100">
<path d="M10 10 L40 50 L10 90 M50 10 L50 90 M90 10 L60 50 L90 90" fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="8"></path>
</svg>
<span className="font-display font-medium tracking-tight text-xl md:text-2xl uppercase">Kaelon</span>
</div>
<div className="hidden md:flex items-center gap-10">
<a className="text-xs font-mono uppercase tracking-widest text-[#888899] hover:text-[#00E5FF] transition-colors" href="#impact">Human Benefit</a>
<a className="text-xs font-mono uppercase tracking-widest text-[#888899] hover:text-[#00E5FF] transition-colors" href="#growth">Growth</a>
<a className="text-xs font-mono uppercase tracking-widest text-[#888899] hover:text-[#00E5FF] transition-colors" href="#network">Syndicate</a>
<a className="text-xs font-mono uppercase tracking-widest text-[#888899] hover:text-[#00E5FF] transition-colors" href="#proof">Proof</a>
</div>
<a className="hidden md:block" href="#initiate">
<button className="btn-cyber px-6 py-3">
<div className="btn-cyber-scan"></div>
<span className="btn-cyber-content text-xs font-mono uppercase tracking-widest text-[#FFFFFF] flex items-center gap-2">
                    Submit Data <iconify-icon icon="solar:folder-open-linear"></iconify-icon>
</span>
</button>
</a>
</nav>

<section className="relative w-full h-[100vh] flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-24 overflow-hidden border-b border-[#888899]/10">

<canvas className="absolute inset-0 w-full h-full z-0 pointer-events-auto" id="hero-canvas"></canvas>
<div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/50 to-transparent z-10 pointer-events-none"></div>
<div className="relative z-20 max-w-7xl w-full mx-auto reveal-up opacity-100 translate-y-0">
<div className="flex items-center gap-4 mb-6">
<div className="flex items-center gap-2 border border-[#00E5FF]/30 bg-[#00E5FF]/5 px-3 py-1">
<div className="w-2 h-2 bg-[#00E5FF] animate-pulse"></div>
<span className="font-mono text-xs uppercase tracking-widest text-[#00E5FF]">
                        SYS.ONLINE // NO FLUFF
                    </span>
</div>
<span className="font-mono text-xs text-[#888899] hidden sm:block">LAT: 37.7749 / LNG: -122.4194</span>
</div>
<h1 className="font-display font-medium text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight text-[#FFFFFF] max-w-4xl mb-8">
                Engineering <br/> Human Evolution.
            </h1>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-end">
<div className="md:col-span-7 lg:col-span-6">
<p className="text-base md:text-lg text-[#888899] border-l border-[#00E5FF]/30 pl-4 mb-4">
                        We engineer aggressive growth for founders solving existential bottlenecks. No fluff, no vanity metrics. Just raw, paradigm-shifting execution that ensures human survival and flourishing.
                    </p>
<div className="flex flex-wrap gap-4 pl-4 font-mono text-xs text-[#888899]">
<span className="flex items-center gap-1"><iconify-icon className="text-[#00E5FF]" icon="solar:target-linear"></iconify-icon> Physics</span>
<span className="flex items-center gap-1"><iconify-icon className="text-[#00E5FF]" icon="solar:target-linear"></iconify-icon> Biology</span>
<span className="flex items-center gap-1"><iconify-icon className="text-[#00E5FF]" icon="solar:target-linear"></iconify-icon> Computation</span>
</div>
</div>
<div className="md:col-span-5 lg:col-span-6 flex flex-wrap gap-4 md:justify-end">
<a href="#initiate">
<button className="btn-cyber px-8 py-4">
<div className="btn-cyber-scan"></div>
<span className="btn-cyber-content text-sm font-mono uppercase tracking-widest text-[#FFFFFF] flex items-center gap-3">
                                Partner with us <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6 md:px-12 scroll-trigger border-b border-[#888899]/10 relative" id="impact">
<div className="absolute right-12 top-12 font-mono text-xs text-[#888899]/30 tracking-widest uppercase hidden lg:block">
            [DATA_NODE_01 :: IMPACT_ANALYSIS]
        </div>
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16 reveal-up">
<div>
<span className="font-mono text-xs uppercase tracking-widest text-[#888899] mb-4 block">
                        // TRUST ARCHITECTURE
                    </span>
<h2 className="font-heading font-medium text-3xl md:text-5xl tracking-tight leading-tight">
                        Built for <span className="text-[#00E5FF]">Asymmetric</span> Benefit.
                    </h2>
</div>
<p className="text-[#888899] max-w-md text-sm md:text-base">
                    Capital alone doesn't bend reality. We deploy capital backed by deep operational trust, engineering scaling pathways for technologies that directly elevate the human condition.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative draw-line-x pt-8 border-t border-[#888899]/20">
<div className="flex flex-col reveal-up" style={{transitionDelay: '50ms'}}>
<div className="font-mono text-[#FFFFFF] text-4xl md:text-5xl tracking-tight flex items-baseline gap-1 mb-2">
                        $<span className="counter" data-target="1.2">0.0</span><span className="text-[#00E5FF]">B</span>
</div>
<span className="font-mono text-xs tracking-widest text-[#888899] uppercase mb-1">AUM</span>
<span className="text-xs text-[#888899]/60">Deployed into hard tech.</span>
</div>
<div className="flex flex-col reveal-up" style={{transitionDelay: '150ms'}}>
<div className="font-mono text-[#FFFFFF] text-4xl md:text-5xl tracking-tight flex items-baseline gap-1 mb-2">
<span className="counter" data-target="96">0</span><span className="text-[#00E5FF]">%</span>
</div>
<span className="font-mono text-xs tracking-widest text-[#888899] uppercase mb-1">Conviction Rate</span>
<span className="text-xs text-[#888899]/60">Follow-on capital deployed.</span>
</div>
<div className="flex flex-col reveal-up" style={{transitionDelay: '250ms'}}>
<div className="font-mono text-[#FFFFFF] text-4xl md:text-5xl tracking-tight flex items-baseline gap-1 mb-2">
<span className="counter" data-target="4.2">0</span><span className="text-[#00E5FF]">M</span>
</div>
<span className="font-mono text-xs tracking-widest text-[#888899] uppercase mb-1">Lives Elevated</span>
<span className="text-xs text-[#888899]/60">Through bio/energy tech.</span>
</div>
<div className="flex flex-col reveal-up" style={{transitionDelay: '350ms'}}>
<div className="font-mono text-[#FFFFFF] text-4xl md:text-5xl tracking-tight flex items-baseline gap-1 mb-2">
<span className="counter" data-target="0">0</span><span className="text-[#00E5FF]">%</span>
</div>
<span className="font-mono text-xs tracking-widest text-[#888899] uppercase mb-1">Fluff Tolerance</span>
<span className="text-xs text-[#888899]/60">Strict mathematical reality.</span>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6 md:px-12 bg-[#050508] scroll-trigger relative overflow-hidden" id="growth">
<div className="absolute right-0 top-0 w-full lg:w-1/2 h-full opacity-20 lg:opacity-40 pointer-events-none">
<img alt="Deep Tech Research" className="w-full h-full object-cover mix-blend-luminosity lg:mask-image:linear-gradient(to_left,black,transparent)" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
<div className="lg:col-span-6 reveal-up">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-[#00E5FF]" icon="solar:chart-square-linear"></iconify-icon>
<span className="font-mono text-xs uppercase tracking-widest text-[#888899]">
                        // AGGRESSIVE SCALING
                    </span>
</div>
<h2 className="font-heading font-medium text-4xl md:text-5xl leading-tight tracking-tight mb-8">
                    Aggressive growth where others see risk.
                </h2>
<p className="text-base md:text-lg text-[#888899] mb-8">
                    The 'Valley of Death' between lab breakthrough and commercial scale breaks traditional software venture models. We embrace the complexity, injecting operational velocity to commercialize the un-commercializable for humanity's sake.
                </p>
<div className="space-y-4">
<div className="group border border-[#888899]/20 p-4 hover:border-[#00E5FF]/50 transition-colors bg-[#030305]/50 backdrop-blur-sm">
<h4 className="font-mono text-sm text-[#FFFFFF] uppercase flex items-center gap-2 mb-2 group-hover:text-[#00E5FF] transition-colors">
<iconify-icon icon="solar:box-linear"></iconify-icon> Supply Chain Acceleration
                        </h4>
<p className="text-xs text-[#888899]">We bypass global bottlenecks by establishing sovereign manufacturing pipelines from day zero.</p>
</div>
<div className="group border border-[#888899]/20 p-4 hover:border-[#00E5FF]/50 transition-colors bg-[#030305]/50 backdrop-blur-sm">
<h4 className="font-mono text-sm text-[#FFFFFF] uppercase flex items-center gap-2 mb-2 group-hover:text-[#00E5FF] transition-colors">
<iconify-icon icon="solar:shield-warning-linear"></iconify-icon> Regulatory Navigation
                        </h4>
<p className="text-xs text-[#888899]">Direct engagement with federal and global entities to shape policy around emerging paradigm shifts.</p>
</div>
<div className="group border border-[#888899]/20 p-4 hover:border-[#00E5FF]/50 transition-colors bg-[#030305]/50 backdrop-blur-sm">
<h4 className="font-mono text-sm text-[#FFFFFF] uppercase flex items-center gap-2 mb-2 group-hover:text-[#00E5FF] transition-colors">
<iconify-icon icon="solar:users-group-two-rounded-linear"></iconify-icon> Tier-1 Talent Liquidity
                        </h4>
<p className="text-xs text-[#888899]">Deploying apex operators and engineers directly into portfolio companies to force function progress.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6 md:px-12 scroll-trigger relative">
<div className="absolute left-12 top-12 font-mono text-xs text-[#888899]/30 tracking-widest uppercase hidden lg:block">
            [DATA_NODE_02 :: TARGET_VECTORS]
        </div>
<div className="max-w-7xl mx-auto">
<span className="font-mono text-xs uppercase tracking-widest text-[#888899] mb-12 block text-center reveal-up">
                // EXISTENTIAL THESIS
            </span>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="tech-card p-8 md:p-10 reveal-up group">
<div className="flex justify-between items-start mb-8">
<div className="w-12 h-12 border border-[#00E5FF]/30 bg-[#00E5FF]/5 flex items-center justify-center group-hover:bg-[#00E5FF]/20 transition-colors">
<iconify-icon className="text-2xl text-[#00E5FF]" icon="solar:atom-linear"></iconify-icon>
</div>
<span className="font-mono text-xs text-[#00E5FF] border border-[#00E5FF]/30 px-2 py-1">V.01</span>
</div>
<h3 className="font-heading font-medium text-xl md:text-2xl tracking-tight mb-4 group-hover:text-[#00E5FF] transition-colors">Quantum &amp; Silicon</h3>
<p className="text-sm text-[#888899] mb-4">Next-gen architectures bypassing conventional limits. Trapped ion, photonics, and superconducting topologies.</p>
<div className="w-full h-1 bg-[#222230] mt-auto">
<div className="h-full bg-[#00E5FF] w-[0%] group-hover:w-[100%] transition-all duration-700 ease-out"></div>
</div>
</div>

<div className="tech-card p-8 md:p-10 reveal-up group md:translate-y-8" style={{transitionDelay: '100ms'}}>
<div className="flex justify-between items-start mb-8">
<div className="w-12 h-12 border border-[#00E5FF]/30 bg-[#00E5FF]/5 flex items-center justify-center group-hover:bg-[#00E5FF]/20 transition-colors">
<iconify-icon className="text-2xl text-[#00E5FF]" icon="solar:dna-linear"></iconify-icon>
</div>
<span className="font-mono text-xs text-[#00E5FF] border border-[#00E5FF]/30 px-2 py-1">V.02</span>
</div>
<h3 className="font-heading font-medium text-xl md:text-2xl tracking-tight mb-4 group-hover:text-[#00E5FF] transition-colors">Programmable Bio</h3>
<p className="text-sm text-[#888899] mb-4">Therapeutics and biomanufacturing. Redesigning life at the base-pair level to eradicate disease.</p>
<div className="w-full h-1 bg-[#222230] mt-auto">
<div className="h-full bg-[#00E5FF] w-[0%] group-hover:w-[100%] transition-all duration-700 ease-out"></div>
</div>
</div>

<div className="tech-card p-8 md:p-10 reveal-up group md:translate-y-16" style={{transitionDelay: '200ms'}}>
<div className="flex justify-between items-start mb-8">
<div className="w-12 h-12 border border-[#00E5FF]/30 bg-[#00E5FF]/5 flex items-center justify-center group-hover:bg-[#00E5FF]/20 transition-colors">
<iconify-icon className="text-2xl text-[#00E5FF]" icon="solar:bolt-linear"></iconify-icon>
</div>
<span className="font-mono text-xs text-[#00E5FF] border border-[#00E5FF]/30 px-2 py-1">V.03</span>
</div>
<h3 className="font-heading font-medium text-xl md:text-2xl tracking-tight mb-4 group-hover:text-[#00E5FF] transition-colors">Energy Resilience</h3>
<p className="text-sm text-[#888899] mb-4">Fusion containment, ultra high-density solid-state storage, and advanced grid architectures.</p>
<div className="w-full h-1 bg-[#222230] mt-auto">
<div className="h-full bg-[#00E5FF] w-[0%] group-hover:w-[100%] transition-all duration-700 ease-out"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6 md:px-12 bg-[#0A0A0E] border-y border-[#888899]/10 scroll-trigger overflow-hidden relative" id="network">

<div className="absolute inset-0 bg-[linear-gradient(rgba(136,136,153,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(136,136,153,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
<div className="w-full lg:w-1/3 reveal-up relative z-10">
<span className="font-mono text-xs uppercase tracking-widest text-[#00E5FF] mb-4 block">
                    // DATA-DRIVEN TRANSPARENCY
                </span>
<h2 className="font-heading font-medium text-3xl md:text-4xl leading-tight tracking-tight mb-6">
                    Zero fluff. Real-time intelligence.
                </h2>
<p className="text-sm md:text-base text-[#888899] mb-8">
                    Our LPs don't wait for quarterly PDFs. The Kaelon Command Center provides sovereign access to real-time portfolio telemetry, supply-chain health, and proprietary technical diligence.
                </p>
<div className="flex flex-col gap-4 mb-8 border-l border-[#888899]/20 pl-4 font-mono text-xs text-[#888899]">
<div className="flex justify-between items-center"><span className="text-[#FFFFFF]">Node Encryption</span> <span className="text-[#00E5FF]">AES-256 GCM</span></div>
<div className="flex justify-between items-center"><span className="text-[#FFFFFF]">Data Freshness</span> <span className="text-[#00E5FF]">&lt; 50ms</span></div>
<div className="flex justify-between items-center"><span className="text-[#FFFFFF]">Access Level</span> <span className="text-[#00E5FF]">Level-4 LP</span></div>
</div>
<a href="#initiate">
<button className="btn-cyber px-6 py-3">
<div className="btn-cyber-scan"></div>
<span className="btn-cyber-content text-xs font-mono uppercase tracking-widest text-[#FFFFFF] flex items-center gap-2">
                            Request Access <iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon>
</span>
</button>
</a>
</div>

<div className="w-full lg:w-2/3 relative reveal-up glass-dash rounded-xl p-2 md:p-4 backdrop-blur-2xl border border-[#888899]/30" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.03)_1px,transparent_1px)] bg-[size:10px_10px] rounded-xl pointer-events-none"></div>

<div className="flex justify-between items-center border-b border-[#888899]/20 pb-4 mb-4 px-4 relative z-10 bg-[#030305]/40 rounded-t-lg">
<div className="flex gap-4 items-center">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
</div>
<span className="font-mono text-xs text-[#888899] uppercase tracking-widest border-l border-[#888899]/30 pl-4">Kaelon_OS // Secure</span>
</div>
<div className="flex items-center gap-4">
<div className="font-mono text-xs text-[#FFFFFF] flex items-center gap-2">
                            Dark Mode <input checked="" className="cyber-toggle" type="checkbox"/>
</div>
<div className="font-mono text-xs text-[#00E5FF] flex items-center gap-2 bg-[#00E5FF]/10 px-2 py-1 rounded">
<div className="w-2 h-2 bg-[#00E5FF] rounded-full animate-ping"></div> SYNCED
                        </div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-2 pb-2 relative z-10">

<div className="bg-[#030305]/90 border border-[#888899]/20 p-4 rounded flex flex-col gap-2 hover:border-[#00E5FF]/50 transition-colors">
<div className="flex justify-between items-center">
<span className="font-mono text-xs text-[#888899] uppercase">Helios TVI</span>
<iconify-icon className="text-[#00E5FF]" icon="solar:graph-up-linear"></iconify-icon>
</div>
<span className="font-display font-medium text-xl md:text-2xl">1.42s</span>
<div className="w-full h-1 bg-[#222230] mt-1 relative overflow-hidden">
<div className="absolute top-0 left-0 w-[70%] h-full bg-[#00E5FF] animate-pulse"></div>
</div>
</div>

<div className="bg-[#030305]/90 border border-[#888899]/20 p-4 rounded flex flex-col gap-2 hover:border-[#00E5FF]/50 transition-colors">
<div className="flex justify-between items-center">
<span className="font-mono text-xs text-[#888899] uppercase">Q-Error Rate</span>
<iconify-icon className="text-green-400" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<span className="font-display font-medium text-xl md:text-2xl text-green-400">10^-5</span>
<div className="w-full h-6 flex items-end gap-1 mt-auto">
<div className="flex-1 bg-[#888899]/20 h-[40%] hover:bg-[#00E5FF] transition-colors"></div>
<div className="flex-1 bg-[#888899]/20 h-[30%] hover:bg-[#00E5FF] transition-colors"></div>
<div className="flex-1 bg-[#00E5FF]/50 h-[80%] hover:bg-[#00E5FF] transition-colors"></div>
<div className="flex-1 bg-[#00E5FF] h-[20%] hover:bg-[#00E5FF] transition-colors"></div>
</div>
</div>

<div className="col-span-2 md:col-span-2 bg-[#030305]/90 border border-[#888899]/20 p-4 rounded flex flex-col justify-between group">
<div className="flex justify-between items-center mb-2">
<span className="font-mono text-xs text-[#888899] uppercase">Capital Velocity (30D)</span>
<span className="font-mono text-xs text-[#00E5FF]">+14.2%</span>
</div>
<div className="w-full h-16 relative overflow-hidden mt-2 border-b border-[#888899]/10">

<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 100 30">
<defs>
<lineargradient id="grad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="rgba(0,229,255,0.4)"></stop>
<stop offset="100%" stop-color="rgba(0,229,255,0)"></stop>
</lineargradient>
</defs>
<path className="opacity-50 group-hover:opacity-100 transition-opacity" d="M0,30 L0,20 Q10,15 20,25 T40,10 T60,20 T80,5 L100,15 L100,30 Z" fill="url(#grad)"></path>
<path className="graph-line" d="M0,20 Q10,15 20,25 T40,10 T60,20 T80,5 L100,15" fill="none" stroke="#00E5FF" strokeWidth="1"></path>
</svg>
</div>
</div>

<div className="col-span-2 md:col-span-4 bg-[#0A0A0E] border border-[#888899]/20 p-4 rounded h-32 overflow-hidden relative font-mono text-xs">
<div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-[#0A0A0E] to-transparent z-10"></div>
<div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-[#0A0A0E] to-transparent z-10"></div>
<div className="flex flex-col gap-1 text-[#888899] animate-[slideUp_10s_linear_infinite]" id="terminal-feed">
<p>&gt; Establishing secure handshake... <span className="text-green-400">OK</span></p>
<p>&gt; Fetching Series A diligence file (Q-Core)...</p>
<p>&gt; Executing stress-test algorithm on provided hardware specs.</p>
<p>&gt; <span className="text-[#00E5FF]">Result: Thermal limits bypassed. Viable for scale.</span></p>
<p>&gt; Updating LP ledger with timestamp 16789021.</p>
<p>&gt; Polling biomanufacturing yields...</p>
<p>&gt; <span className="text-green-400">SynthoBio Batch 45: 99.8% purity achieved.</span></p>
<p>&gt; Awaiting further commands_</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6 md:px-12 scroll-trigger relative">
<div className="absolute right-12 top-12 font-mono text-xs text-[#888899]/30 tracking-widest uppercase hidden lg:block">
            [DATA_NODE_03 :: PROTOCOL_TRACE]
        </div>
<div className="max-w-4xl mx-auto relative">
<span className="font-mono text-xs uppercase tracking-widest text-[#888899] mb-16 block text-center reveal-up">
                // EXECUTION PROTOCOL
            </span>
<div className="absolute left-[15px] md:left-1/2 top-[80px] bottom-0 w-px bg-gradient-to-b from-[#00E5FF] via-[#888899]/20 to-transparent md:-translate-x-1/2 draw-line-y"></div>
<div className="flex flex-col gap-12 md:gap-24">
<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between w-full reveal-up group">
<div className="md:w-[45%] text-left md:text-right order-2 md:order-1 pl-12 md:pl-0">
<span className="font-mono text-xs text-[#00E5FF] mb-2 block">PHASE 01</span>
<h4 className="font-heading font-medium text-xl md:text-2xl text-[#FFFFFF] group-hover:text-[#00E5FF] transition-colors">Peer-Reviewed Diligence</h4>
<p className="text-sm text-[#888899] mt-2">Analysis by operators who have built hardware. We validate the math, physics, and biological constraints within 72 hours.</p>
</div>
<div className="absolute left-[11px] md:relative md:left-auto w-2 h-2 bg-[#00E5FF] rounded-none z-10 order-1 md:order-2 md:mx-auto shadow-[0_0_15px_rgba(0,229,255,0.5)] group-hover:scale-150 transition-transform"></div>
<div className="md:w-[45%] order-3 hidden md:block border-b border-dashed border-[#888899]/20 group-hover:border-[#00E5FF]/50 transition-colors"></div>
</div>
<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between w-full reveal-up group">
<div className="md:w-[45%] order-2 md:order-1 hidden md:block border-b border-dashed border-[#888899]/20 group-hover:border-[#00E5FF]/50 transition-colors"></div>
<div className="absolute left-[11px] md:relative md:left-auto w-2 h-2 bg-[#030305] border border-[#888899] group-hover:border-[#00E5FF] group-hover:bg-[#00E5FF] transition-colors rounded-none z-10 order-1 md:order-2 md:mx-auto"></div>
<div className="md:w-[45%] text-left order-3 pl-12 md:pl-0">
<span className="font-mono text-xs text-[#00E5FF] mb-2 block">PHASE 02</span>
<h4 className="font-heading font-medium text-xl md:text-2xl text-[#FFFFFF] group-hover:text-[#00E5FF] transition-colors">Aggressive Capital</h4>
<p className="text-sm text-[#888899] mt-2">$5M - $20M Lead conviction checks. Zero hesitation. We price the round and wire funds to ensure unhindered R&amp;D.</p>
</div>
</div>
<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between w-full reveal-up group">
<div className="md:w-[45%] text-left md:text-right order-2 md:order-1 pl-12 md:pl-0">
<span className="font-mono text-xs text-[#00E5FF] mb-2 block">PHASE 03</span>
<h4 className="font-heading font-medium text-xl md:text-2xl text-[#FFFFFF] group-hover:text-[#00E5FF] transition-colors">Sovereign Scaling</h4>
<p className="text-sm text-[#888899] mt-2">Securing vital DoD contracts, navigating FDA approvals, and structuring tier-1 automated manufacturing pipelines globally.</p>
</div>
<div className="absolute left-[11px] md:relative md:left-auto w-2 h-2 bg-[#030305] border border-[#888899] group-hover:border-[#00E5FF] group-hover:bg-[#00E5FF] transition-colors rounded-none z-10 order-1 md:order-2 md:mx-auto"></div>
<div className="md:w-[45%] order-3 hidden md:block border-b border-dashed border-[#888899]/20 group-hover:border-[#00E5FF]/50 transition-colors"></div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 overflow-hidden scroll-trigger border-t border-[#888899]/10 bg-[#050508]" id="proof">
<div className="px-6 md:px-12 max-w-7xl mx-auto mb-12 reveal-up flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<span className="font-mono text-xs uppercase tracking-widest text-[#888899] block mb-4">
                    // DEPLOYED CAPITAL
                </span>
<h2 className="font-heading font-medium text-3xl md:text-5xl leading-tight tracking-tight">
                    Backing the Boldest.
                </h2>
</div>
<p className="text-xs font-mono text-[#888899] text-right max-w-xs">
                Companies actively rewriting the fundamental laws of physics and biology.
            </p>
</div>
<div className="w-full py-8 overflow-hidden relative flex">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050508] to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050508] to-transparent z-10"></div>
<div className="animate-marquee flex items-center gap-12 md:gap-24 px-12">
<span className="font-display font-medium text-2xl md:text-4xl text-[#FFFFFF]/30 hover:text-[#FFFFFF] transition-colors uppercase tracking-widest cursor-default">AeroDyne</span>
<span className="font-mono text-[#00E5FF] text-xl">/</span>
<span className="font-display font-medium text-2xl md:text-4xl text-[#FFFFFF]/30 hover:text-[#FFFFFF] transition-colors uppercase tracking-widest cursor-default">NeuroLink Sys</span>
<span className="font-mono text-[#00E5FF] text-xl">/</span>
<span className="font-display font-medium text-2xl md:text-4xl text-[#FFFFFF]/30 hover:text-[#FFFFFF] transition-colors uppercase tracking-widest cursor-default">Q-Core</span>
<span className="font-mono text-[#00E5FF] text-xl">/</span>
<span className="font-display font-medium text-2xl md:text-4xl text-[#FFFFFF]/30 hover:text-[#FFFFFF] transition-colors uppercase tracking-widest cursor-default">Helios Fusion</span>
<span className="font-mono text-[#00E5FF] text-xl">/</span>
<span className="font-display font-medium text-2xl md:text-4xl text-[#FFFFFF]/30 hover:text-[#FFFFFF] transition-colors uppercase tracking-widest cursor-default">SynthoBio</span>
<span className="font-mono text-[#00E5FF] text-xl">/</span>

<span className="font-display font-medium text-2xl md:text-4xl text-[#FFFFFF]/30 hover:text-[#FFFFFF] transition-colors uppercase tracking-widest cursor-default">AeroDyne</span>
<span className="font-mono text-[#00E5FF] text-xl">/</span>
<span className="font-display font-medium text-2xl md:text-4xl text-[#FFFFFF]/30 hover:text-[#FFFFFF] transition-colors uppercase tracking-widest cursor-default">NeuroLink Sys</span>
<span className="font-mono text-[#00E5FF] text-xl">/</span>
<span className="font-display font-medium text-2xl md:text-4xl text-[#FFFFFF]/30 hover:text-[#FFFFFF] transition-colors uppercase tracking-widest cursor-default">Q-Core</span>
<span className="font-mono text-[#00E5FF] text-xl">/</span>
<span className="font-display font-medium text-2xl md:text-4xl text-[#FFFFFF]/30 hover:text-[#FFFFFF] transition-colors uppercase tracking-widest cursor-default">Helios Fusion</span>
<span className="font-mono text-[#00E5FF] text-xl">/</span>
<span className="font-display font-medium text-2xl md:text-4xl text-[#FFFFFF]/30 hover:text-[#FFFFFF] transition-colors uppercase tracking-widest cursor-default">SynthoBio</span>
<span className="font-mono text-[#00E5FF] text-xl">/</span>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6 md:px-12 bg-[#030305] scroll-trigger border-t border-[#888899]/10">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
<div className="md:col-span-5 reveal-up">
<span className="font-mono text-xs uppercase tracking-widest text-[#888899] mb-4 block">
                    // HUMAN ARCHITECTS
                </span>
<h2 className="font-heading font-medium text-3xl md:text-4xl leading-tight tracking-tight text-[#FFFFFF] mb-6">
                    Guided by operators who build.
                </h2>
<p className="text-sm md:text-base text-[#888899] mb-6">
                    No career financiers. No MBAs relying on trend reports. Our general partners are former deep tech founders, quantum physicists, and DARPA directors.
                </p>
<p className="text-sm text-[#FFFFFF] border-l-2 border-[#00E5FF] pl-4">
                    "We understand the math because we've lived the struggle of building it."
                </p>
</div>
<div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 reveal-up">
<div className="flex flex-col gap-3 group relative">

<div className="w-full h-56 bg-[#0A0A0E] overflow-hidden relative mb-2 filter grayscale group-hover:grayscale-0 transition-all duration-700">
<img alt="Partner" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#030305] to-transparent"></div>
<div className="absolute top-2 right-2 font-mono text-xs text-[#00E5FF] opacity-0 group-hover:opacity-100 transition-opacity">[ID: 01]</div>
</div>
<h4 className="font-mono text-sm text-[#FFFFFF] uppercase tracking-widest flex items-center justify-between">Dr. Elena Rostova <iconify-icon className="opacity-0 group-hover:opacity-100 text-[#00E5FF] transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon></h4>
<div className="w-4 h-px bg-[#00E5FF] group-hover:w-full transition-all duration-500"></div>
<p className="font-mono text-xs text-[#888899]">Ex-DeepMind / MIT Physics</p>
</div>
<div className="flex flex-col gap-3 group relative">
<div className="w-full h-56 bg-[#0A0A0E] overflow-hidden relative mb-2 filter grayscale group-hover:grayscale-0 transition-all duration-700">
<img alt="Partner" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#030305] to-transparent"></div>
<div className="absolute top-2 right-2 font-mono text-xs text-[#00E5FF] opacity-0 group-hover:opacity-100 transition-opacity">[ID: 02]</div>
</div>
<h4 className="font-mono text-sm text-[#FFFFFF] uppercase tracking-widest flex items-center justify-between">Marcus Vane <iconify-icon className="opacity-0 group-hover:opacity-100 text-[#00E5FF] transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon></h4>
<div className="w-4 h-px bg-[#00E5FF] group-hover:w-full transition-all duration-500"></div>
<p className="font-mono text-xs text-[#888899]">Ex-DARPA / 3x Founder</p>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 md:px-12 bg-[#050508] relative scroll-trigger border-t border-[#888899]/10" id="initiate">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,229,255,0.05)_0%,transparent_70%)] pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center relative z-10 reveal-up">
<span className="font-mono text-xs uppercase tracking-widest text-[#00E5FF] mb-6 block">
                // SYSTEM_OVERRIDE
            </span>
<h2 className="font-heading font-medium text-4xl md:text-6xl leading-none tracking-tight mb-6 text-[#FFFFFF]">
                Show us the Math.
            </h2>
<p className="text-base md:text-lg text-[#888899] mb-12">
                We don't need a 30-page pitch deck of fluff. Submit your technical papers, secure data rooms, and structural models. Let the science prove the human impact.
            </p>
<form className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-xl mx-auto">
<input className="w-full sm:flex-1 bg-[#030305] border-b border-[#888899]/50 px-4 py-4 text-[#FFFFFF] font-mono text-sm placeholder:text-[#888899]/50 focus:outline-none focus:border-[#00E5FF] transition-all focus:bg-[#00E5FF]/5 shadow-inner" placeholder="Secure link (DocSend/Github/Arxiv)" required="" type="url"/>
<button className="btn-cyber px-8 py-4 w-full sm:w-auto mt-4 sm:mt-0" type="submit">
<div className="btn-cyber-scan"></div>
<span className="btn-cyber-content text-sm font-mono uppercase tracking-widest text-[#FFFFFF] flex items-center justify-center gap-2">
                        Transmit <iconify-icon icon="solar:upload-minimalistic-linear"></iconify-icon>
</span>
</button>
</form>
<div className="mt-6 flex items-center justify-center gap-2 font-mono text-xs text-[#888899]">
<iconify-icon className="text-[#00E5FF]" icon="solar:shield-check-linear"></iconify-icon> End-to-end encrypted transfer
            </div>
</div>
</section>

<footer className="pt-20 md:pt-32 pb-8 px-6 md:px-12 bg-[#030305] border-t border-[#888899]/10 relative overflow-hidden">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 relative z-10">
<div className="col-span-2 md:col-span-1">
<svg className="w-10 h-10 text-[#FFFFFF] hover:text-[#00E5FF] transition-colors cursor-pointer" viewbox="0 0 100 100">
<path d="M10 10 L40 50 L10 90 M50 10 L50 90 M90 10 L60 50 L90 90" fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="8"></path>
</svg>
</div>
<div className="flex flex-col gap-4">
<h5 className="font-mono text-xs text-[#888899] uppercase tracking-widest mb-2">Network</h5>
<a className="text-sm text-[#FFFFFF] hover:text-[#00E5FF] transition-colors w-fit" href="#">Syndicate Portal</a>
<a className="text-sm text-[#FFFFFF] hover:text-[#00E5FF] transition-colors w-fit" href="#">Careers</a>
<a className="text-sm text-[#FFFFFF] hover:text-[#00E5FF] transition-colors w-fit" href="#">Thesis / Math</a>
</div>
<div className="flex flex-col gap-4">
<h5 className="font-mono text-xs text-[#888899] uppercase tracking-widest mb-2">Legal</h5>
<a className="text-sm text-[#FFFFFF] hover:text-[#00E5FF] transition-colors w-fit" href="#">Privacy Policy</a>
<a className="text-sm text-[#FFFFFF] hover:text-[#00E5FF] transition-colors w-fit" href="#">Terms of Service</a>
</div>
<div className="flex flex-col gap-4 items-start md:items-end col-span-2 md:col-span-1">
<h5 className="font-mono text-xs text-[#888899] uppercase tracking-widest mb-2">System Time</h5>
<div className="font-mono text-sm text-[#00E5FF] border border-[#00E5FF]/30 bg-[#00E5FF]/5 px-3 py-2 flex items-center gap-2" id="utc-clock">
<div className="w-1 h-1 bg-[#00E5FF] rounded-full animate-pulse"></div>
<span id="clock-display">00:00:00 UTC</span>
</div>
</div>
</div>

<div className="w-full flex justify-center relative z-0 select-none opacity-[0.03] pointer-events-none mt-10">
<span className="font-display font-medium text-8xl scale-150 md:scale-[2] leading-none tracking-tight text-[#FFFFFF]">
                KAELON
            </span>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-24 border-t border-[#888899]/10 pt-6 relative z-10">
<p className="font-mono text-xs text-[#888899]">© Kaelon Deep Tech Ventures</p>
<p className="font-mono text-xs text-[#888899] mt-2 md:mt-0 flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:shield-check-linear"></iconify-icon> SECURE ENCLAVE
            </p>
</div>
</footer>



    </>
  );
}
