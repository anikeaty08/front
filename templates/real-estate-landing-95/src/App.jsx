import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
colors: {
primary: '#050505',
secondary: '#E5E5E5',
accent: '#FF4500',
background: '#FAFAFA',
surface: '#FFFFFF',
darkBorder: '#1A1A1A'
},
fontFamily: {
display: ['"Inter Tight"', 'system-ui', 'sans-serif'],
heading: ['"Inter Tight"', 'system-ui', 'sans-serif'],
body: ['"Inter"', 'system-ui', 'sans-serif'],
mono: ['"JetBrains Mono"', 'monospace'],
},
letterSpacing: {
tighter: '-0.04em',
widest: '0.1em',
},
transitionTimingFunction: {
'custom-ease': 'cubic-bezier(0.16, 1, 0.3, 1)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Smooth Scroll
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            smooth: true,
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Intersection Observers
        const revealElements = document.querySelectorAll('.reveal-up');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
        revealElements.forEach(el => revealObserver.observe(el));

        // Before/After Slider
        const sliderWrapper = document.getElementById('comparison-slider');
        const beforeImage = document.getElementById('image-before');
        const sliderHandle = document.getElementById('slider-handle');
        let isSliding = false;

        const slide = (x) => {
            if(!sliderWrapper) return;
            const bounds = sliderWrapper.getBoundingClientRect();
            let pos = ((x - bounds.left) / bounds.width) * 100;
            pos = Math.max(0, Math.min(pos, 100));
            beforeImage.style.clipPath = `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)`;
            sliderHandle.style.left = `${pos}%`;
        };

        sliderWrapper?.addEventListener('mousedown', () => isSliding = true);
        sliderWrapper?.addEventListener('touchstart', () => isSliding = true, {passive: true});
        window.addEventListener('mouseup', () => isSliding = false);
        window.addEventListener('touchend', () => isSliding = false);
        window.addEventListener('mousemove', (e) => isSliding && slide(e.clientX));
        window.addEventListener('touchmove', (e) => isSliding && slide(e.touches[0].clientX), {passive: true});
        setTimeout(() => sliderWrapper && slide(sliderWrapper.getBoundingClientRect().left + sliderWrapper.offsetWidth / 2), 100);

        // WEBGL BACKGROUND: Glowing Dot Grid + Interactive Ripple Effect
        const initWebGL = () => {
            const canvas = document.getElementById('webgl-canvas');
            if(!canvas) return;
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            if (!gl) return;

            // Vertex Shader: Cover screen
            const vsSource = `
                attribute vec2 a_position;
                void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
            `;

            // Fragment Shader: High-end particle dot grid with mouse ripple
            const fsSource = `
                precision mediump float;
                uniform vec2 u_resolution;
                uniform vec2 u_mouse;
                uniform float u_time;

                void main() {
                    // Normalized coordinates
                    vec2 st = gl_FragCoord.xy / u_resolution.xy;
                    st.x *= u_resolution.x / u_resolution.y;
                    
                    vec2 m = u_mouse / u_resolution.xy;
                    m.x *= u_resolution.x / u_resolution.y;
                    
                    // Ripple effect calculations
                    float dist = distance(st, m);
                    // Wave propagation based on time and distance
                    float ripple = sin(dist * 15.0 - u_time * 3.0) * 0.03;
                    // Decay ripple based on distance
                    ripple *= exp(-dist * 6.0);
                    
                    // Apply ripple displacement
                    vec2 warpedSt = st + normalize(st - m) * ripple;

                    // Create Grid
                    float gridDensity = 60.0;
                    vec2 grid = fract(warpedSt * gridDensity) - 0.5;
                    
                    // Draw dots (smooth circle)
                    float radius = 0.12;
                    float dot = 1.0 - smoothstep(radius, radius + 0.05, length(grid));
                    
                    // Base Colors
                    vec3 bg = vec3(0.02, 0.02, 0.02); // Deep dark grey (#050505)
                    vec3 accent = vec3(1.0, 0.27, 0.0); // #FF4500
                    vec3 secondary = vec3(0.3, 0.3, 0.3);
                    
                    // Dynamic coloring based on ripple strength and noise
                    float highlight = exp(-dist * 3.0) * 0.8;
                    vec3 dotColor = mix(secondary, accent, highlight + sin(u_time * 2.0 + warpedSt.x * 10.0)*0.2);
                    
                    // Combine
                    vec3 finalColor = mix(bg, dotColor, dot * (0.2 + highlight));

                    gl_FragColor = vec4(finalColor, 1.0);
                }
            `;

            function createShader(gl, type, source) {
                const shader = gl.createShader(type);
                gl.shaderSource(shader, source);
                gl.compileShader(shader);
                if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                    console.error(gl.getShaderInfoLog(shader));
                    gl.deleteShader(shader);
                    return null;
                }
                return shader;
            }

            const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
            const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
            const program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            gl.useProgram(program);

            // Setup full screen quad
            const positionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            const positions = [-1.0, -1.0,  1.0, -1.0,  -1.0,  1.0,  -1.0,  1.0,  1.0, -1.0,  1.0,  1.0];
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
            const positionLocation = gl.getAttribLocation(program, "a_position");
            gl.enableVertexAttribArray(positionLocation);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

            // Uniforms
            const resolutionLoc = gl.getUniformLocation(program, "u_resolution");
            const mouseLoc = gl.getUniformLocation(program, "u_mouse");
            const timeLoc = gl.getUniformLocation(program, "u_time");

            let mouseX = window.innerWidth / 2;
            let mouseY = window.innerHeight / 2;
            
            // Track mouse, invert Y for WebGL coordinates
            window.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = window.innerHeight - e.clientY;
            });

            // Resize handling
            function resize() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                gl.viewport(0, 0, canvas.width, canvas.height);
                gl.uniform2f(resolutionLoc, canvas.width, canvas.height);
            }
            window.addEventListener('resize', resize);
            resize();

            // Render loop
            function render(time) {
                time *= 0.001; // convert to seconds
                gl.uniform1f(timeLoc, time);
                
                // Smoothly interpolate mouse position for fluidity
                gl.uniform2f(mouseLoc, mouseX, mouseY);

                gl.drawArrays(gl.TRIANGLES, 0, 6);
                requestAnimationFrame(render);
            }
            requestAnimationFrame(render);
        };

        // Initialize
        initWebGL();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 p-[clamp(1.5rem,3vw,2.5rem)] mix-blend-difference text-white pointer-events-none">
<div className="max-w-[100rem] mx-auto flex justify-between items-center pointer-events-auto">

<div className="flex items-center gap-3">
<svg className="w-[clamp(1.5rem,3vw,2rem)] h-[clamp(1.5rem,3vw,2rem)] stroke-white fill-none stroke-[6px]" viewbox="0 0 100 100">
<polygon points="50,10 90,90 10,90" strokeLinejoin="miter"></polygon>
<line x1="30" x2="70" y1="65" y2="65"></line>
<circle className="fill-white stroke-none" cx="50" cy="40" r="5"></circle>
</svg>
<div className="font-display font-normal tracking-widest text-xs uppercase">Axis</div>
</div>
<div className="hidden md:flex justify-center gap-[clamp(2rem,4vw,3rem)] font-mono text-xs uppercase tracking-widest text-gray-400">
<a className="hover:text-white transition-colors duration-300" href="#roi">Framework</a>
<a className="hover:text-white transition-colors duration-300" href="#analytics">Analytics</a>
<a className="hover:text-white transition-colors duration-300" href="#projects">Deployments</a>
</div>
<div>
<a className="font-mono text-xs text-white border border-white/20 px-4 py-2 hover:bg-white hover:text-primary transition-all duration-300" href="#contact">
                    [ INITIATE BUILD ]
                </a>
</div>
</div>
</nav>

<section className="relative h-screen w-full bg-primary overflow-hidden flex items-end pb-[clamp(4rem,8vw,8rem)]">

<canvas className="absolute inset-0 w-full h-full pointer-events-auto block" id="webgl-canvas"></canvas>
<div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent pointer-events-none"></div>
<div className="relative z-10 w-full max-w-[100rem] mx-auto px-[clamp(1.5rem,5vw,5rem)] flex flex-col gap-[clamp(1.5rem,3vw,2rem)] text-surface pointer-events-none">
<div className="font-mono text-[clamp(0.65rem,1vw,0.75rem)] text-accent tracking-widest uppercase flex items-center gap-2 reveal-up">
<span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span> Systems Active
            </div>
<h1 className="font-display font-light tracking-tighter leading-[0.9] text-[clamp(3.5rem,9vw,8.5rem)] reveal-up max-w-[12ch]">
                Engineered Space.<br/>Exponential Returns.
            </h1>
<p className="font-body font-light text-[clamp(1rem,1.2vw,1.125rem)] text-gray-400 max-w-[45ch] leading-relaxed reveal-up" style={{transitionDelay: '0.1s'}}>
                We don't decorate. We restructure physical environments to eliminate friction, optimize human performance, and drive measurable operational growth.
            </p>
<div className="flex flex-wrap items-center gap-[clamp(1rem,2vw,1.5rem)] mt-[clamp(1rem,2vw,2rem)] reveal-up pointer-events-auto" style={{transitionDelay: '0.2s'}}>
<a className="btn-cut px-[clamp(1.5rem,3vw,2.5rem)] py-[clamp(1rem,1.5vw,1.25rem)] bg-accent text-white font-display font-normal text-sm transition-all duration-300 flex items-center gap-3 group" href="#analytics">
<span className="btn-text relative z-20 flex items-center gap-3 transition-colors duration-300 tracking-widest uppercase text-xs font-mono">
                        Deploy Framework
                        <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
</a>
<div className="font-mono text-xs text-gray-500 uppercase tracking-widest flex flex-col">
<span>Target ROI: 3.2X</span>
<span>Avg Build: 8 Mo.</span>
</div>
</div>
</div>
</section>

<section className="py-[clamp(8rem,15vw,12rem)] px-[clamp(1.5rem,5vw,5rem)] bg-background bg-grid border-b border-secondary relative" id="roi">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 pointer-events-none"></div>
<div className="max-w-[100rem] mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-[clamp(4rem,8vw,8rem)] items-center">
<div className="reveal-up">
<div className="font-mono text-[clamp(0.65rem,1vw,0.75rem)] text-gray-400 tracking-widest uppercase mb-4 border border-gray-300 px-2 py-1 inline-block">
                    [ THE LIABILITY ]
                </div>
<h2 className="font-heading font-light tracking-tighter text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-primary mb-6">
                    Mediocre spaces bleed capital.
                </h2>
</div>
<div className="reveal-up flex flex-col gap-6 border-l border-primary/20 pl-[clamp(1.5rem,3vw,3rem)]" style={{transitionDelay: '0.1s'}}>
<p className="font-body font-light text-[clamp(1rem,1.2vw,1.125rem)] text-gray-600 leading-relaxed">
                    Every poorly optimized layout, bad lighting vector, and chaotic flow path is a silent, compounding tax on productivity, focus, and asset valuation.
                </p>
<p className="font-body font-normal text-[clamp(1rem,1.2vw,1.125rem)] text-primary leading-relaxed">
                    We engineer spatial logic that forces efficiency. Predictable. Data-backed. Ruthless.
                </p>
</div>
</div>
</section>

<section className="py-[clamp(6rem,10vw,12rem)] bg-primary bg-grid-dark relative overflow-hidden text-surface" id="analytics">
<div className="max-w-[100rem] mx-auto px-[clamp(1.5rem,5vw,5rem)] mb-[clamp(4rem,8vw,6rem)] text-center reveal-up">
<h2 className="font-heading tracking-tighter text-[clamp(2.5rem,5vw,4.5rem)] leading-none mb-4">Predictive Spatial Analytics.</h2>
<p className="font-mono text-xs tracking-widest uppercase text-gray-500">Mapping human movement to optimize physical assets.</p>
</div>

<div className="max-w-[80rem] mx-auto px-[clamp(1.5rem,5vw,5rem)] reveal-up">
<div className="relative w-full aspect-[16/9] border border-darkBorder bg-[#0A0A0A] overflow-hidden flex flex-col">

<div className="h-10 border-b border-darkBorder flex items-center px-4 justify-between bg-[#080808] z-20">
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-darkBorder"></div>
<div className="w-2 h-2 rounded-full bg-darkBorder"></div>
<div className="w-2 h-2 rounded-full bg-darkBorder"></div>
</div>
<div className="font-mono text-[0.6rem] tracking-widest text-gray-500 uppercase">Axis.Terminal // V.2.1</div>
</div>

<div className="flex-1 relative">

<img alt="Blueprint" className="absolute inset-0 w-full h-full object-cover opacity-20 filter grayscale" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>

<div className="absolute inset-0 p-[clamp(1rem,2vw,2rem)] grid grid-cols-3 gap-[clamp(1rem,2vw,2rem)]">

<div className="col-span-1 border border-darkBorder bg-primary/80 backdrop-blur-md p-4 flex flex-col gap-6">
<div>
<div className="font-mono text-[0.65rem] text-gray-500 tracking-widest uppercase mb-1">Spatial Yield</div>
<div className="font-display text-[clamp(1.5rem,2vw,2rem)] tracking-tighter text-accent">+42.8%</div>
</div>
<div className="w-full h-[1px] bg-darkBorder"></div>
<div className="flex flex-col gap-3">
<div className="font-mono text-[0.65rem] text-gray-500 tracking-widest uppercase">Flow Optimization Matrix</div>
<div className="w-full bg-darkBorder h-1"><div className="w-[85%] bg-accent h-full"></div></div>
<div className="w-full bg-darkBorder h-1"><div className="w-[60%] bg-surface h-full"></div></div>
<div className="w-full bg-darkBorder h-1"><div className="w-[92%] bg-surface h-full"></div></div>
</div>
</div>

<div className="col-span-1 flex items-center justify-center relative">
<div className="w-full aspect-square border border-accent/30 rounded-full flex items-center justify-center relative animate-[spin_10s_linear_infinite]">
<div className="absolute w-full h-[1px] bg-accent/50"></div>
<div className="absolute h-full w-[1px] bg-accent/50"></div>
</div>
<div className="absolute font-mono text-xs text-accent uppercase tracking-widest bg-primary px-2">Scanning Void</div>
</div>

<div className="col-span-1 flex flex-col gap-[clamp(1rem,2vw,2rem)]">
<div className="border border-darkBorder bg-primary/80 backdrop-blur-md p-4 flex-1 flex flex-col justify-end">
<div className="font-mono text-[0.65rem] text-gray-500 tracking-widest uppercase mb-1">Light Saturation</div>
<div className="font-display text-lg tracking-tight">Optimal Level Reached</div>
</div>
<div className="border border-darkBorder bg-primary/80 backdrop-blur-md p-4 flex-1 flex items-center justify-between">
<div className="font-mono text-[0.65rem] text-gray-500 tracking-widest uppercase">Acoustic Resistance</div>
<iconify-icon className="text-accent text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(6rem,10vw,12rem)] w-full overflow-hidden bg-background" id="projects">
<div className="max-w-[100rem] mx-auto grid grid-cols-1 md:grid-cols-12 gap-[clamp(3rem,6vw,6rem)] items-center">
<div className="md:col-span-5 md:col-start-2 px-[clamp(1.5rem,5vw,0rem)] flex flex-col gap-[clamp(1.5rem,3vw,2rem)] reveal-up z-10">
<div className="font-mono text-[0.65rem] text-gray-400 uppercase tracking-widest border border-gray-300 px-2 py-1 self-start">Deployment 01 / HQ</div>
<h3 className="font-heading font-light tracking-tighter text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.05]">
                    Concrete Core Extraction.
                </h3>
<p className="font-body font-light text-gray-600 text-[clamp(1rem,1.1vw,1.125rem)] leading-relaxed max-w-[40ch]">
                    A severe structural intervention in a brutalist shell. We gutted non-load-bearing masses to mandate natural light paths, increasing usable spatial yield without expanding the footprint.
                </p>
<div className="grid grid-cols-2 gap-4 border-t border-secondary mt-4 pt-6 font-mono text-[clamp(0.7rem,0.8vw,0.85rem)] text-gray-500 uppercase tracking-widest">
<div>Capital Input: <br/><span className="text-primary mt-1 block">€1.2M</span></div>
<div>Asset Valuation: <br/><span className="text-accent mt-1 block">+€2.8M (18 mo)</span></div>
<div>Volume Yield: <br/><span className="text-primary mt-1 block">+40% perceived</span></div>
<div>Status: <br/><span className="text-primary mt-1 block">Operational</span></div>
</div>
</div>
<div className="md:col-span-7 md:-mr-[5vw] h-[clamp(30rem,60vh,50rem)] relative overflow-hidden group">
<img alt="Deployment 01" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.03] filter contrast-125 grayscale-[20%]" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute bottom-4 right-8 font-mono text-[0.65rem] text-white tracking-widest uppercase bg-primary/80 px-2 py-1 backdrop-blur-sm">Live Feed .01</div>
</div>
</div>
</section>

<section className="py-[clamp(6rem,10vw,12rem)] bg-white border-y border-secondary">
<div className="max-w-[100rem] mx-auto px-[clamp(1.5rem,5vw,5rem)]">
<h2 className="font-heading font-light tracking-tighter text-[clamp(2.5rem,5vw,4.5rem)] mb-[clamp(4rem,8vw,6rem)] reveal-up">The Architecture of Growth.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-secondary services-container reveal-up">
<div className="service-col group relative p-[clamp(2rem,4vw,3rem)] border-r border-b border-secondary min-h-[clamp(20rem,30vw,25rem)] flex flex-col justify-between overflow-hidden cursor-pointer bg-white">
<div className="font-mono text-[0.65rem] text-accent uppercase tracking-widest">[ 01 ] Spatial Auditing</div>
<div>
<h4 className="font-heading font-light text-[clamp(1.5rem,2.5vw,2rem)] tracking-tighter mb-4">Identify the Leak.</h4>
<p className="font-body font-light text-gray-500 text-sm max-w-[30ch] leading-relaxed">Rigorous analysis of current volumetric failures. We identify dead zones, light traps, and workflow friction points.</p>
</div>
<div className="absolute top-0 right-0 w-16 h-16 bg-background border-b border-l border-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-accent text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div className="service-col group relative p-[clamp(2rem,4vw,3rem)] border-r border-b border-secondary min-h-[clamp(20rem,30vw,25rem)] flex flex-col justify-between overflow-hidden cursor-pointer bg-white">
<div className="font-mono text-[0.65rem] text-accent uppercase tracking-widest">[ 02 ] Structural Engineering</div>
<div>
<h4 className="font-heading font-light text-[clamp(1.5rem,2.5vw,2rem)] tracking-tighter mb-4">Force the Logic.</h4>
<p className="font-body font-light text-gray-500 text-sm max-w-[30ch] leading-relaxed">Aggressive reallocation of load-bearing constraints to construct pathways that command specific human behaviors.</p>
</div>
<div className="absolute top-0 right-0 w-16 h-16 bg-background border-b border-l border-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-accent text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div className="service-col group relative p-[clamp(2rem,4vw,3rem)] border-r border-b border-secondary min-h-[clamp(20rem,30vw,25rem)] flex flex-col justify-between overflow-hidden cursor-pointer bg-white">
<div className="font-mono text-[0.65rem] text-accent uppercase tracking-widest">[ 03 ] Sensory Command</div>
<div>
<h4 className="font-heading font-light text-[clamp(1.5rem,2.5vw,2rem)] tracking-tighter mb-4">Control the State.</h4>
<p className="font-body font-light text-gray-500 text-sm max-w-[30ch] leading-relaxed">Meticulous specification of acoustics, raw materiality, and lumen output to guarantee psychological sharpness.</p>
</div>
<div className="absolute top-0 right-0 w-16 h-16 bg-background border-b border-l border-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-accent text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(6rem,10vw,12rem)] bg-primary text-surface overflow-hidden">
<div className="max-w-[100rem] mx-auto px-[clamp(1.5rem,5vw,5rem)] mb-[clamp(3rem,6vw,5rem)] flex flex-col md:flex-row md:items-end justify-between gap-8 reveal-up">
<div>
<h2 className="font-heading font-light tracking-tighter text-[clamp(2.5rem,5vw,4.5rem)] leading-none mb-4">Execute the shift.</h2>
</div>
<p className="font-body font-light text-gray-400 text-[clamp(1rem,1.1vw,1.125rem)] max-w-[30ch] pb-2">
                Drag to reveal the quantitative transformation of physical assets.
            </p>
</div>
<div className="w-full h-[clamp(30rem,70vh,55rem)] px-[clamp(1.5rem,5vw,5rem)] max-w-[100rem] mx-auto reveal-up">
<div className="slider-wrapper h-full bg-darkBorder border border-darkBorder" id="comparison-slider">

<img alt="Optimized Asset" className="absolute inset-0 filter contrast-125 grayscale-[10%]" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>

<div className="image-before" id="image-before">
<img alt="Raw Space" className="filter grayscale contrast-[1.1] opacity-60" src="https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute top-[clamp(1.5rem,3vw,2rem)] left-[clamp(1.5rem,3vw,2rem)] font-mono text-[0.65rem] uppercase tracking-widest border border-white/20 bg-primary/80 backdrop-blur-md text-white px-3 py-1">State: Liability</div>
</div>
<div className="absolute top-[clamp(1.5rem,3vw,2rem)] right-[clamp(1.5rem,3vw,2rem)] font-mono text-[0.65rem] uppercase tracking-widest border border-accent/20 bg-accent/10 backdrop-blur-md text-accent px-3 py-1 z-0">State: Asset</div>

<div className="slider-handle" id="slider-handle"></div>
</div>
</div>
</section>

<section className="py-[clamp(4rem,8vw,8rem)] bg-background border-b border-secondary">
<div className="max-w-[100rem] mx-auto px-[clamp(1.5rem,5vw,5rem)]">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-secondary reveal-up">
<div className="flex flex-col gap-2 md:px-8 first:pl-0">
<div className="font-display font-light text-[clamp(2.5rem,4vw,3.5rem)] tracking-tighter text-primary">3.2X</div>
<div className="font-mono text-[0.65rem] text-gray-500 uppercase tracking-widest">Average ROI / 24 Mo</div>
</div>
<div className="flex flex-col gap-2 md:px-8">
<div className="font-display font-light text-[clamp(2.5rem,4vw,3.5rem)] tracking-tighter text-primary">48<span className="text-accent text-2xl">%</span></div>
<div className="font-mono text-[0.65rem] text-gray-500 uppercase tracking-widest">Workflow Acceleration</div>
</div>
<div className="flex flex-col gap-2 md:px-8">
<div className="font-display font-light text-[clamp(2.5rem,4vw,3.5rem)] tracking-tighter text-primary">0</div>
<div className="font-mono text-[0.65rem] text-gray-500 uppercase tracking-widest">Wasted Volumetric cm³</div>
</div>
<div className="flex flex-col gap-2 md:px-8">
<div className="font-display font-light text-[clamp(2.5rem,4vw,3.5rem)] tracking-tighter text-primary">120<span className="text-accent text-2xl">+</span></div>
<div className="font-mono text-[0.65rem] text-gray-500 uppercase tracking-widest">Assets Deployed</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(8rem,15vw,12rem)] bg-white overflow-hidden relative">
<div className="max-w-[100rem] mx-auto px-[clamp(1.5rem,5vw,5rem)] mb-[clamp(4rem,8vw,6rem)] reveal-up flex items-center gap-4 border-b border-secondary pb-4">
<div className="w-2 h-2 bg-primary rounded-full"></div>
<h2 className="font-mono text-xs tracking-widest uppercase text-gray-400">Verified System Outcomes</h2>
</div>
<div className="flex overflow-x-auto snap-x-mandatory hide-scrollbar pb-10 px-[clamp(1.5rem,5vw,5rem)] gap-[clamp(2rem,5vw,5rem)]">
<div className="snap-center shrink-0 w-[85vw] md:w-[60vw] max-w-[60rem] reveal-up">
<blockquote className="font-heading font-light tracking-tighter text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-primary mb-[clamp(2rem,4vw,3rem)]">
                    "AXIS didn't just redesign our headquarters. They diagnosed a structural bottleneck that was costing us thousands in lost efficiency daily."
                </blockquote>
<div className="flex items-center gap-4">
<div className="w-10 h-[1px] bg-accent"></div>
<div className="font-mono text-[0.65rem] uppercase tracking-widest text-gray-500">COO, Global Tech Infra</div>
</div>
</div>
<div className="snap-center shrink-0 w-[85vw] md:w-[60vw] max-w-[60rem] reveal-up" style={{transitionDelay: '0.1s'}}>
<blockquote className="font-heading font-light tracking-tighter text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-primary mb-[clamp(2rem,4vw,3rem)]">
                    "An aggressive, zero-fluff approach to architecture. They optimize physical space the way engineers optimize code. The ROI was apparent in month one."
                </blockquote>
<div className="flex items-center gap-4">
<div className="w-10 h-[1px] bg-accent"></div>
<div className="font-mono text-[0.65rem] uppercase tracking-widest text-gray-500">Founder, FinTech Enterprise</div>
</div>
</div>
<div className="shrink-0 w-[5vw]"></div>
</div>
</section>

<section className="py-[clamp(8rem,12vw,12rem)] bg-primary text-surface bg-grid-dark relative border-t border-darkBorder" id="contact">
<div className="max-w-[100rem] mx-auto px-[clamp(1.5rem,5vw,5rem)] grid grid-cols-1 md:grid-cols-2 gap-[clamp(4rem,8vw,8rem)] relative z-10">
<div className="flex flex-col justify-between reveal-up">
<div>
<div className="font-mono text-[0.65rem] text-accent uppercase tracking-widest border border-accent/30 px-2 py-1 inline-block mb-6">[ FINAL ACTION ]</div>
<h2 className="font-heading font-light tracking-tighter text-[clamp(3.5rem,6vw,5.5rem)] leading-[1] mb-6">
                        Stop waiting.<br/>Define your space.
                    </h2>
<p className="font-body font-light text-gray-400 text-[clamp(1rem,1.2vw,1.125rem)] max-w-[35ch] leading-relaxed">
                        Submit your structural parameters. We will evaluate the viability of an intervention.
                    </p>
</div>
</div>
<div className="reveal-up border border-darkBorder bg-[#080808]/80 backdrop-blur-sm p-[clamp(2rem,4vw,4rem)]" style={{transitionDelay: '0.2s'}}>
<form className="flex flex-col gap-[clamp(2rem,4vw,2.5rem)]">
<div className="relative group">
<input className="w-full bg-transparent border-b border-darkBorder py-3 font-mono text-sm focus:outline-none focus:border-accent transition-colors peer placeholder-transparent text-white" id="name" placeholder="Entity / Full Name" required="" type="text"/>
<label className="absolute left-0 top-3 text-gray-500 font-mono text-sm transition-all pointer-events-none uppercase tracking-widest" htmlFor="name">Entity / Full Name</label>
</div>
<div className="relative group">
<select className="w-full bg-transparent border-b border-darkBorder py-3 font-mono text-sm focus:outline-none focus:border-accent transition-colors text-white uppercase tracking-widest invalid:text-gray-500" id="typology" required="">
<option disabled="" hidden="" selected="" value="">Select Asset Type</option>
<option className="bg-primary" value="commercial">Commercial Core</option>
<option className="bg-primary" value="residential">Private Residence</option>
<option className="bg-primary" value="industrial">Industrial Shell</option>
</select>
<div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="relative group">
<select className="w-full bg-transparent border-b border-darkBorder py-3 font-mono text-sm focus:outline-none focus:border-accent transition-colors text-white uppercase tracking-widest invalid:text-gray-500" id="budget" required="">
<option disabled="" hidden="" selected="" value="">Capital Allocation</option>
<option className="bg-primary" value="1">€250k - €500k</option>
<option className="bg-primary" value="2">€500k - €1M</option>
<option className="bg-primary" value="3">€1M+</option>
</select>
<div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<button className="btn-cut mt-6 px-[clamp(2rem,4vw,3rem)] py-[clamp(1rem,1.5vw,1.25rem)] bg-accent text-white font-mono uppercase tracking-widest text-xs transition-all duration-300 flex items-center justify-between group cursor-pointer w-full" type="submit">
<span className="btn-text relative z-20 transition-colors duration-300 flex items-center justify-between w-full">
                            Submit Protocol
                            <iconify-icon className="transition-transform duration-300 group-hover:translate-x-2 text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
</button>
</form>
</div>
</div>
</section>

<footer className="bg-primary text-surface pt-[clamp(4rem,8vw,6rem)] pb-[clamp(2rem,4vw,3rem)] overflow-hidden border-t border-darkBorder">
<div className="max-w-[100rem] mx-auto px-[clamp(1.5rem,5vw,5rem)]">
<div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-darkBorder pb-[clamp(3rem,6vw,4rem)] mb-[clamp(2rem,4vw,3rem)]">
<div className="md:col-span-8 flex flex-col justify-end">
<svg className="w-[clamp(4rem,8vw,6rem)] h-[clamp(4rem,8vw,6rem)] stroke-accent fill-none stroke-[4px] mb-6" viewbox="0 0 100 100">
<polygon points="50,10 90,90 10,90" strokeLinejoin="miter"></polygon>
<line x1="30" x2="70" y1="65" y2="65"></line>
<circle className="fill-accent stroke-none" cx="50" cy="40" r="5"></circle>
</svg>
<div className="font-display font-light tracking-tighter text-[clamp(3rem,6vw,5rem)] leading-none -ml-[0.2vw]">
                        AXIS Systems.
                    </div>
</div>
<div className="md:col-span-4 flex flex-col justify-end gap-10 mt-10 md:mt-0">
<div className="grid grid-cols-2 gap-8 font-mono text-[0.65rem] tracking-widest text-gray-500 uppercase">
<ul className="flex flex-col gap-4">
<li><a className="hover:text-white transition-colors" href="#roi">Framework</a></li>
<li><a className="hover:text-white transition-colors" href="#analytics">Analytics</a></li>
<li><a className="hover:text-white transition-colors" href="#projects">Deployments</a></li>
</ul>
<ul className="flex flex-col gap-4">
<li><a className="hover:text-white transition-colors" href="#">Sys.Logs</a></li>
<li><a className="hover:text-white transition-colors" href="#">Data Protocol</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center font-mono text-[0.65rem] text-gray-600 uppercase tracking-widest">
<div>© 2026 AXIS Architecture Infrastructure.</div>
<div className="mt-4 md:mt-0 flex gap-4">
<span>Status: Nominal</span>
<span className="w-2 h-2 bg-accent rounded-full animate-pulse self-center"></span>
</div>
</div>
</div>
</footer>




    </>
  );
}
