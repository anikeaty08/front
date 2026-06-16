import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
colors: {
bg: '#000000',
surface: '#0A0A0A',
surface2: '#141414',
textmain: '#FFFFFF',
textsec: '#A1A1AA', // Zinc 400
borderline: '#27272A', // Zinc 800
},
fontFamily: {
sans: ['"Geist Sans"', 'sans-serif'],
mono: ['"Geist Mono"', 'monospace']
},
letterSpacing: {
tightest: '-0.04em',
tech: '0.08em'
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // Pricing Toggle Logic
            const billingToggle = document.getElementById('billing-toggle');
            const pricePro = document.getElementById('price-pro');
            const priceTeam = document.getElementById('price-team');

            if (billingToggle && pricePro && priceTeam) {
                billingToggle.addEventListener('change', (e) => {
                    if (e.target.checked) {
                        // Yearly pricing (approx 20% off)
                        pricePro.innerHTML = '$9<span class="text-base text-black/60 font-normal tracking-normal">/mo</span>';
                        priceTeam.innerHTML = '$39<span class="text-base text-textsec font-normal tracking-normal">/mo</span>';
                    } else {
                        // Monthly pricing
                        pricePro.innerHTML = '$12<span class="text-base text-black/60 font-normal tracking-normal">/mo</span>';
                        priceTeam.innerHTML = '$49<span class="text-base text-textsec font-normal tracking-normal">/mo</span>';
                    }
                });
            }

            // 1. ASTONISHING WEBGL DOTTED GLOW/RIPPLE SHADER
            const canvas = document.getElementById('webgl-hero');
            if (canvas) {
                const gl = canvas.getContext('webgl', { alpha: true, antialias: true });
                if (gl) {
                    const resizeCanvas = () => {
                        // Increase resolution slightly for crisper dots
                        const pixelRatio = window.devicePixelRatio || 1;
                        canvas.width = window.innerWidth * pixelRatio;
                        canvas.height = window.innerHeight * pixelRatio;
                        gl.viewport(0, 0, canvas.width, canvas.height);
                    };
                    window.addEventListener('resize', resizeCanvas);
                    resizeCanvas();

                    const vsSource = `
                        attribute vec2 a_position;
                        void main() {
                            gl_Position = vec4(a_position, 0.0, 1.0);
                        }
                    `;
                    
                    // Elegant Dotted Glow Shader (White/Grey on Black)
                    const fsSource = `
                        precision highp float;
                        uniform vec2 u_resolution;
                        uniform float u_time;
                        uniform vec2 u_mouse;

                        // Simplex noise function placeholder (simplified for size)
                        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
                        vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
                        vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
                        float snoise(vec2 v) {
                            const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
                            vec2 i  = floor(v + dot(v, C.yy) );
                            vec2 x0 = v -   i + dot(i, C.xx);
                            vec2 i1; i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                            vec4 x12 = x0.xyxy + C.xxzz;
                            x12.xy -= i1;
                            i = mod289(i);
                            vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
                            vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
                            m = m*m; m = m*m;
                            vec3 x = 2.0 * fract(p * C.www) - 1.0;
                            vec3 h = abs(x) - 0.5;
                            vec3 ox = floor(x + 0.5);
                            vec3 a0 = x - ox;
                            m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
                            vec3 g;
                            g.x  = a0.x  * x0.x  + h.x  * x0.y;
                            g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                            return 130.0 * dot(m, g);
                        }

                        void main() {
                            vec2 st = gl_FragCoord.xy / u_resolution.xy;
                            st.x *= u_resolution.x / u_resolution.y;

                            // Mouse normalized
                            vec2 mousePos = u_mouse / u_resolution.xy;
                            mousePos.x *= u_resolution.x / u_resolution.y;
                            
                            // Grid Setup
                            float gridScale = 50.0; // Density of dots
                            vec2 grid = fract(st * gridScale);
                            vec2 id = floor(st * gridScale);
                            
                            // Distance to mouse for interaction
                            float distToMouse = distance(st, mousePos);
                            
                            // Base animation utilizing noise
                            float noiseVal = snoise(id * 0.05 + u_time * 0.2);
                            
                            // Dot shape
                            float dotDist = length(grid - 0.5);
                            
                            // Dynamic radius: base + noise fluctuation + mouse hover growth
                            float mouseRipple = smoothstep(0.4, 0.0, distToMouse);
                            float radius = 0.05 + (noiseVal * 0.05) + (mouseRipple * 0.15);
                            
                            // Smooth anti-aliased circle
                            float circle = 1.0 - smoothstep(radius, radius + 0.05, dotDist);
                            
                            // Intensity/Brightness
                            float intensity = 0.2 + (noiseVal * 0.4) + (mouseRipple * 0.8);
                            
                            // Color palette: Pure white to stark grey
                            vec3 baseColor = vec3(1.0, 1.0, 1.0); 
                            
                            // Fade out edges
                            float edgeFade = smoothstep(0.8, 0.2, length(st - vec2(u_resolution.x/u_resolution.y * 0.5, 0.5)));
                            
                            gl_FragColor = vec4(baseColor * intensity, circle * intensity * edgeFade);
                        }
                    `;

                    const compileShader = (type, source) => {
                        const shader = gl.createShader(type);
                        gl.shaderSource(shader, source);
                        gl.compileShader(shader);
                        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                            console.error('Shader error:', gl.getShaderInfoLog(shader));
                            return null;
                        }
                        return shader;
                    };

                    const vertexShader = compileShader(gl.VERTEX_SHADER, vsSource);
                    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fsSource);

                    const program = gl.createProgram();
                    gl.attachShader(program, vertexShader);
                    gl.attachShader(program, fragmentShader);
                    gl.linkProgram(program);
                    gl.useProgram(program);

                    const positionBuffer = gl.createBuffer();
                    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
                    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,1, -1,-1, 1,1, 1,-1]), gl.STATIC_DRAW);

                    const posLoc = gl.getAttribLocation(program, "a_position");
                    gl.enableVertexAttribArray(posLoc);
                    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

                    const resLoc = gl.getUniformLocation(program, "u_resolution");
                    const timeLoc = gl.getUniformLocation(program, "u_time");
                    const mouseLoc = gl.getUniformLocation(program, "u_mouse");

                    let targetMouseX = window.innerWidth / 2;
                    let targetMouseY = window.innerHeight / 2;
                    let mouseX = targetMouseX;
                    let mouseY = targetMouseY;

                    // Blend mode for glowing effect
                    gl.enable(gl.BLEND);
                    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

                    document.addEventListener('mousemove', (e) => {
                        const pixelRatio = window.devicePixelRatio || 1;
                        targetMouseX = e.clientX * pixelRatio;
                        targetMouseY = (window.innerHeight - e.clientY) * pixelRatio;
                    });

                    let startTime = Date.now();
                    const render = () => {
                        const currentTime = (Date.now() - startTime) * 0.001;
                        
                        // Smooth mouse interpolation (easing)
                        mouseX += (targetMouseX - mouseX) * 0.05;
                        mouseY += (targetMouseY - mouseY) * 0.05;

                        gl.uniform2f(resLoc, canvas.width, canvas.height);
                        gl.uniform1f(timeLoc, currentTime);
                        gl.uniform2f(mouseLoc, mouseX, mouseY);

                        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
                        requestAnimationFrame(render);
                    };
                    render();
                }
            }

            // 2. INTERSECTION OBSERVERS (Reveals)
            const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            document.querySelectorAll('.reveal-up').forEach(el => revealObserver.observe(el));

            // 3. METRIC COUNTER ANIMATION
            const animateValue = (obj, start, end, duration, decimals = 0) => {
                let startTimestamp = null;
                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    // easeOutExpo
                    const easeOutProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                    const currentVal = start + easeOutProgress * (end - start);
                    
                    obj.innerHTML = decimals > 0 ? currentVal.toFixed(decimals) : Math.floor(currentVal);
                    
                    if (progress < 1) window.requestAnimationFrame(step);
                    else obj.innerHTML = decimals > 0 ? end.toFixed(decimals) : end;
                };
                window.requestAnimationFrame(step);
            };

            const counterObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const targetVal = parseFloat(entry.target.getAttribute('data-target'));
                        const decimals = parseInt(entry.target.getAttribute('data-decimals') || 0);
                        animateValue(entry.target, 0, targetVal, 2500, decimals);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            document.querySelectorAll('.metric-counter').forEach(counter => counterObserver.observe(counter));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-white/5 mix-blend-difference">
<div className="w-full max-w-[100rem] mx-auto flex items-center justify-between px-6 lg:px-12 h-[5rem]">

<a className="flex items-center gap-3 group" href="#">
<svg className="group-hover:rotate-90 transition-transform duration-500 ease-in-out" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 12L12 22L22 12L12 2Z" stroke="white" strokeLinejoin="round" strokeWidth="2.5"></path>
<circle cx="12" cy="12" fill="white" r="3"></circle>
</svg>
<span className="font-sans font-semibold text-lg tracking-tight text-white uppercase">UI LENS</span>
</a>

<div className="hidden md:flex items-center justify-center gap-[3rem] text-[clamp(0.75rem,1vw,0.875rem)] font-medium text-textsec">
<a className="hover:text-white transition-colors" href="#features">Extension</a>
<a className="hover:text-white transition-colors" href="#platform">Inspector</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#customers">Wall of Love</a>
</div>

<div className="hidden md:block">
<a className="font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-tech text-white border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-all duration-300" href="#pricing">
                    Get Extension
                </a>
</div>
<button className="md:hidden text-white">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>
<main className="relative z-10 w-full">

<section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[5rem]">

<canvas id="webgl-hero"></canvas>

<div className="absolute inset-0 pointer-events-none flex justify-between px-6 lg:px-12 opacity-10">
<div className="w-[1px] h-full bg-white"></div>
<div className="w-[1px] h-full bg-white hidden md:block"></div>
<div className="w-[1px] h-full bg-white hidden lg:block"></div>
<div className="w-[1px] h-full bg-white"></div>
</div>
<div className="w-full max-w-[100rem] mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-[10vh]">
<div className="lg:col-span-10 flex flex-col items-start reveal-up">
<div className="editorial-badge mb-[3rem]">BROWSER_EXTENSION // V2.0</div>
<h1 className="text-h1 text-white mb-[2rem]">
                        Decode any<br/>
<span className="text-textsec">interface.</span>
</h1>
</div>
<div className="lg:col-span-8 flex flex-col md:flex-row md:items-center gap-8 md:gap-16 reveal-up delay-1">
<p className="text-body max-w-[32rem]">
                        The ultimate browser extension for designers and developers. Inspect, dissect, and extract production-ready code, assets, and design tokens from any website instantly.
                    </p>
<div className="flex-shrink-0">
<button className="btn-editorial group" onclick="document.getElementById('platform').scrollIntoView()">
<span className="relative z-10 flex items-center gap-3">
                                Install UI Lens
                                <iconify-icon className="text-xl icon-arrow" icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</button>
</div>
</div>
</div>
</section>

<section className="border-y border-white/10 bg-surface/50 py-[4rem] relative z-10">
<div className="w-full max-w-[100rem] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
<p className="font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] text-textsec uppercase tracking-tech whitespace-nowrap">Used by top design teams</p>
<div className="w-full flex flex-wrap justify-between items-center gap-8 font-sans font-semibold text-[clamp(1.25rem,2vw,1.5rem)] text-white/40 tracking-widest uppercase">
<span className="hover:text-white transition-colors duration-500 cursor-default">Framer</span>
<span className="hover:text-white transition-colors duration-500 cursor-default">Linear</span>
<span className="hover:text-white transition-colors duration-500 cursor-default">Vercel</span>
<span className="hover:text-white transition-colors duration-500 cursor-default">Stripe</span>
<span className="hover:text-white transition-colors duration-500 cursor-default">Raycast</span>
</div>
</div>
</section>

<section className="py-[12rem] relative bg-bg">
<div className="w-full max-w-[100rem] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-[4rem] lg:gap-[8rem]">
<div className="lg:col-span-5 reveal-up">
<div className="editorial-badge mb-[2rem]">THE_FRICTION</div>
<h2 className="text-h3 text-white mb-6">Inspiration is everywhere. Extracting it is broken.</h2>
<a className="btn-outline mt-8" href="#features">
                            Explore the toolset
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="lg:col-span-7 flex flex-col gap-[3rem] reveal-up delay-1">
<p className="text-body text-white">
                            Digging through convoluted Chrome DevTools to find a single hex code, font stack, or spacing token breaks your creative flow. Rebuilding complex animations and layouts from scratch drains hours of productive time.
                        </p>
<div className="border-l border-white/20 pl-6 lg:pl-10">
<p className="text-body">
                                UI Lens replaces manual inspection with an intelligent, deterministic extraction engine. Hover over any element to reveal its DNA—from CSS variables to React components. <strong>Stop guessing. Start building.</strong>
</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-[6rem] relative bg-bg overflow-hidden" id="platform">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="w-full max-w-[100rem] mx-auto px-6 lg:px-12 relative z-10">
<div className="flex flex-col items-center text-center mb-[6rem] reveal-up">
<div className="editorial-badge mb-[2rem]">INSPECTOR // CORE</div>
<h2 className="text-h2 text-white max-w-[40rem]">X-ray vision for the web.</h2>
</div>

<div className="w-full aspect-[16/10] md:aspect-[21/9] glass-panel rounded-lg overflow-hidden flex flex-col reveal-up shadow-[0_20px_60px_-15px_rgba(255,255,255,0.05)] relative">

<div className="h-[3rem] border-b border-white/10 flex items-center px-6 gap-4 bg-white/[0.02]">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-white/20"></div>
<div className="w-3 h-3 rounded-full bg-white/20"></div>
<div className="w-3 h-3 rounded-full bg-white/20"></div>
</div>
<div className="ml-4 flex gap-6 font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] text-textsec uppercase">
<span className="text-white border-b border-white pb-1">ui-lens.dev</span>
<span>Elements</span>
<span>Network</span>
</div>
</div>

<div className="flex-grow flex flex-col md:flex-row bg-[#050505]">

<div className="flex-grow p-8 relative flex items-center justify-center border-r border-white/5">

<div className="relative bg-surface2 border border-white/10 rounded-xl p-8 w-full max-w-sm cursor-crosshair group">
<div className="absolute -inset-px border-2 border-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
<span className="absolute -top-6 left-0 bg-blue-500 text-white text-xs font-mono px-2 py-0.5 rounded-sm">div.hero-card</span>
</div>
<div className="w-12 h-12 bg-white/10 rounded-full mb-4"></div>
<div className="h-4 bg-white/20 rounded w-3/4 mb-2"></div>
<div className="h-4 bg-white/10 rounded w-1/2 mb-6"></div>
<div className="h-10 bg-white text-black rounded font-medium flex items-center justify-center text-sm">Subscribe</div>
</div>
</div>

<div className="w-full md:w-[320px] bg-surface/80 p-6 flex flex-col gap-6 overflow-y-auto custom-scrollbar border-l border-white/5">
<div>
<span className="text-textsec font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase block mb-4">Properties</span>
<div className="flex flex-col gap-3 font-mono text-xs">
<div className="flex justify-between items-center border-b border-white/5 pb-2">
<span className="text-textsec">font-family</span>
<span className="text-white bg-white/10 px-1.5 py-0.5 rounded">Geist Sans</span>
</div>
<div className="flex justify-between items-center border-b border-white/5 pb-2">
<span className="text-textsec">background</span>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-sm bg-[#141414] border border-white/20"></div>
<span className="text-white">#141414</span>
</div>
</div>
<div className="flex justify-between items-center border-b border-white/5 pb-2">
<span className="text-textsec">padding</span>
<span className="text-white">2rem (32px)</span>
</div>
<div className="flex justify-between items-center border-b border-white/5 pb-2">
<span className="text-textsec">border-radius</span>
<span className="text-white">0.75rem</span>
</div>
</div>
</div>
<div className="mt-auto">
<button className="w-full bg-white/10 hover:bg-white/20 text-white py-2 rounded text-sm font-medium flex items-center justify-center gap-2 transition-colors">
<iconify-icon icon="solar:copy-linear"></iconify-icon>
                                    Copy Tailwind Classes
                                </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-[8rem] relative bg-bg" id="features">
<div className="w-full max-w-[100rem] mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[4rem] reveal-up gap-6">
<div>
<div className="editorial-badge mb-[2rem]">CAPABILITIES</div>
<h2 className="text-h3 text-white">Engineered for<br/>design extraction.</h2>
</div>
<p className="text-body max-w-[24rem]">
                        Complex DOM structures reduced to elegant, reusable primitives.
                    </p>
</div>

<div className="swiss-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 reveal-up delay-1">

<div className="p-8 lg:p-12 flex flex-col aspect-square hover-lift group">
<iconify-icon className="text-3xl text-white mb-auto" icon="solar:magic-stick-3-linear"></iconify-icon>
<div>
<h3 className="font-sans font-semibold text-xl text-white mb-3">Instant Inspection</h3>
<p className="text-textsec text-sm leading-relaxed">Hover over any element to reveal fonts, colors, spacing, and CSS properties instantly without opening DevTools.</p>
</div>
</div>

<div className="p-8 lg:p-12 flex flex-col aspect-square hover-lift group">
<iconify-icon className="text-3xl text-white mb-auto group-hover:scale-110 transition-transform" icon="solar:code-square-linear"></iconify-icon>
<div>
<h3 className="font-sans font-semibold text-xl text-white mb-3">Export to Tailwind</h3>
<p className="text-textsec text-sm leading-relaxed">Convert complex, nested CSS from any website directly into clean, copy-pasteable Tailwind utility classes.</p>
</div>
</div>

<div className="p-8 lg:p-12 flex flex-col aspect-square hover-lift group bg-white text-black relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white to-gray-300 opacity-50 pointer-events-none"></div>
<iconify-icon className="text-3xl text-black mb-auto relative z-10" icon="solar:gallery-download-linear"></iconify-icon>
<div className="relative z-10">
<h3 className="font-sans font-semibold text-xl text-black mb-3">Asset Extraction</h3>
<p className="text-black/70 text-sm leading-relaxed">Download SVGs, optimized images, and hidden background assets with a single click in their native resolution.</p>
</div>
</div>

<div className="p-8 lg:p-12 flex flex-col md:col-span-2 md:aspect-[2/1] hover-lift group">
<div className="flex justify-between items-start mb-auto">
<iconify-icon className="text-3xl text-white" icon="solar:monitor-smartphone-linear"></iconify-icon>
<span className="font-mono text-xs text-textsec uppercase tracking-tech border border-white/10 px-2 py-1">RESPONSIVE_CHECK</span>
</div>
<div className="grid md:grid-cols-2 gap-8 items-end">
<div>
<h3 className="font-sans font-semibold text-xl text-white mb-3">Viewport Simulation</h3>
<p className="text-textsec text-sm leading-relaxed">Test breakpoints and responsive behaviors accurately without resizing your browser window or using external tools.</p>
</div>
<div className="h-1 bg-white/10 w-full rounded overflow-hidden relative">
<div className="absolute top-0 left-0 h-full bg-white w-0 group-hover:w-full transition-all duration-[1.5s] ease-out"></div>
</div>
</div>
</div>

<div className="p-8 lg:p-12 flex flex-col aspect-square hover-lift group">
<iconify-icon className="text-3xl text-white mb-auto" icon="solar:text-square-linear"></iconify-icon>
<div>
<h3 className="font-sans font-semibold text-xl text-white mb-3">Typography X-Ray</h3>
<p className="text-textsec text-sm leading-relaxed">Identify exact font families, weights, line heights, and variable font axes used in production typography.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-[8rem] border-t border-white/10 bg-bg relative">
<div className="w-full max-w-[100rem] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-[6rem] items-center">
<div className="order-2 lg:order-1 relative w-full aspect-square overflow-hidden glass-panel rounded-xl reveal-up">
<div className="absolute inset-0 p-8 flex flex-col gap-4">

<div className="flex justify-between items-center border-b border-white/10 pb-4">
<span className="font-mono text-xs text-textsec uppercase tracking-tech">Saved Patterns</span>
<iconify-icon className="text-xl text-white" icon="solar:folder-with-files-linear"></iconify-icon>
</div>
<div className="grid grid-cols-2 gap-4 mt-4">
<div className="bg-surface2 rounded-lg aspect-[4/3] border border-white/5 flex items-center justify-center p-4 group cursor-pointer hover:border-white/20 transition-colors">
<div className="w-full h-8 bg-white/10 rounded"></div>
</div>
<div className="bg-surface2 rounded-lg aspect-[4/3] border border-white/5 flex flex-col items-center justify-center p-4 gap-2 group cursor-pointer hover:border-white/20 transition-colors">
<div className="w-8 h-8 rounded-full bg-white/10"></div>
<div className="w-16 h-2 bg-white/10 rounded"></div>
</div>
<div className="bg-surface2 rounded-lg aspect-[4/3] border border-white/5 flex items-end p-4 group cursor-pointer hover:border-white/20 transition-colors">
<div className="w-full h-1/2 bg-white/10 rounded"></div>
</div>
<div className="bg-surface2 rounded-lg aspect-[4/3] border border-white/5 flex items-center justify-center p-4 group cursor-pointer hover:border-white/20 transition-colors">
<div className="grid grid-cols-2 gap-2 w-full">
<div className="w-full h-4 bg-white/10 rounded"></div>
<div className="w-full h-4 bg-white/10 rounded"></div>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 flex flex-col reveal-up delay-1">
<div className="editorial-badge mb-[2rem]">CLOUD_SYNC</div>
<h3 className="text-h2 text-white mb-6">Build your visual library.</h3>
<p className="text-body mb-8">
                            Don't just inspect—collect. Save UI patterns, full page layouts, and specific components to your personal cloud library. Tag, organize, and share your inspiration boards with your team instantly.
                        </p>
<ul className="flex flex-col gap-4 font-mono text-sm text-textsec">
<li className="flex items-center gap-3"><iconify-icon className="text-white text-lg" icon="solar:check-circle-linear"></iconify-icon> Unlimited cloud storage for Pro users</li>
<li className="flex items-center gap-3"><iconify-icon className="text-white text-lg" icon="solar:check-circle-linear"></iconify-icon> Auto-sync across all your devices</li>
<li className="flex items-center gap-3"><iconify-icon className="text-white text-lg" icon="solar:check-circle-linear"></iconify-icon> Shared workspaces for design teams</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-[8rem] relative border-y border-white/10 bg-surface/30" id="metrics">
<div className="w-full max-w-[100rem] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
<div className="flex flex-col items-center pt-8 md:pt-0 reveal-up">
<div className="text-[clamp(3.5rem,6vw,5rem)] font-semibold text-white tracking-tighter leading-none mb-4 flex items-baseline">
<span className="metric-counter" data-target="50">0</span><span className="text-4xl text-textsec ml-1">k+</span>
</div>
<span className="font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] text-white uppercase tracking-tech block">Active Designers</span>
</div>
<div className="flex flex-col items-center pt-8 md:pt-0 reveal-up delay-1">
<div className="text-[clamp(3.5rem,6vw,5rem)] font-semibold text-white tracking-tighter leading-none mb-4 flex items-baseline">
<span className="metric-counter" data-target="2">0</span><span className="text-4xl text-textsec ml-2">M+</span>
</div>
<span className="font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] text-textsec uppercase tracking-tech block">Elements Inspected</span>
</div>
<div className="flex flex-col items-center pt-8 md:pt-0 reveal-up delay-2">
<div className="text-[clamp(3.5rem,6vw,5rem)] font-semibold text-white tracking-tighter leading-none mb-4 flex items-baseline">
<span className="metric-counter" data-target="15">0</span><span className="text-4xl text-textsec ml-1">hrs</span>
</div>
<span className="font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] text-textsec uppercase tracking-tech block">Saved monthly per user</span>
</div>
</div>
</section>

<section className="py-[10rem] relative bg-bg" id="pricing">
<div className="w-full max-w-[100rem] mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-center mb-[4rem] reveal-up gap-6 text-center md:text-left">
<div>
<div className="editorial-badge mb-[2rem]">PLANS</div>
<h2 className="text-h3 text-white">Transparent pricing.</h2>
</div>

<div className="flex items-center gap-4 font-mono text-sm">
<span className="text-white">Monthly</span>
<label className="pricing-toggle">
<input id="billing-toggle" type="checkbox"/>
<div className="toggle-track">
<div className="toggle-thumb"></div>
</div>
</label>
<span className="text-textsec">Yearly <span className="text-[10px] bg-white/10 text-white px-2 py-0.5 rounded ml-1">-20%</span></span>
</div>
</div>

<div className="swiss-grid grid-cols-1 md:grid-cols-3 reveal-up delay-1">

<div className="p-8 lg:p-12 flex flex-col hover-lift group">
<h3 className="font-sans font-semibold text-xl text-white mb-2">Starter</h3>
<p className="text-textsec text-sm mb-8 h-10">Essential inspection tools for solo developers.</p>
<div className="text-4xl font-semibold text-white tracking-tight mb-8">$0<span className="text-base text-textsec font-normal tracking-normal">/mo</span></div>
<ul className="flex flex-col gap-4 font-mono text-xs text-textsec mb-12 flex-grow">
<li className="flex items-start gap-3"><iconify-icon className="text-white text-base" icon="solar:check-circle-linear"></iconify-icon> Basic DOM Inspector</li>
<li className="flex items-start gap-3"><iconify-icon className="text-white text-base" icon="solar:check-circle-linear"></iconify-icon> Color &amp; Font Detection</li>
<li className="flex items-start gap-3"><iconify-icon className="text-white text-base" icon="solar:check-circle-linear"></iconify-icon> Standard Asset Export</li>
</ul>
<button className="w-full border border-white/20 text-white py-4 font-sans font-medium text-sm hover:bg-white/10 transition-colors mt-auto">
                            Add to Browser
                        </button>
</div>

<div className="p-8 lg:p-12 flex flex-col relative overflow-hidden bg-white text-black hover-lift group">

<div className="absolute inset-0 bg-gradient-to-br from-white to-gray-200 opacity-50 pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex justify-between items-start mb-2">
<h3 className="font-sans font-semibold text-xl text-black">Pro</h3>
<span className="font-mono text-[10px] bg-black text-white px-2 py-1 uppercase tracking-tech">Popular</span>
</div>
<p className="text-black/60 text-sm mb-8 h-10">Advanced extraction and unlimited pattern saving.</p>
<div className="text-4xl font-semibold text-black tracking-tight mb-8" id="price-pro">$12<span className="text-base text-black/60 font-normal tracking-normal">/mo</span></div>
<ul className="flex flex-col gap-4 font-mono text-xs text-black/70 mb-12 flex-grow">
<li className="flex items-start gap-3"><iconify-icon className="text-black text-base" icon="solar:check-circle-linear"></iconify-icon> Everything in Starter</li>
<li className="flex items-start gap-3"><iconify-icon className="text-black text-base" icon="solar:check-circle-linear"></iconify-icon> Tailwind CSS Conversion</li>
<li className="flex items-start gap-3"><iconify-icon className="text-black text-base" icon="solar:check-circle-linear"></iconify-icon> Unlimited Cloud Sync</li>
<li className="flex items-start gap-3"><iconify-icon className="text-black text-base" icon="solar:check-circle-linear"></iconify-icon> React/Vue Component Export</li>
</ul>
<button className="w-full bg-black text-white py-4 font-sans font-medium text-sm hover:bg-black/80 transition-colors mt-auto">
                                Start 14-Day Trial
                            </button>
</div>
</div>

<div className="p-8 lg:p-12 flex flex-col hover-lift group">
<h3 className="font-sans font-semibold text-xl text-white mb-2">Team</h3>
<p className="text-textsec text-sm mb-8 h-10">Shared libraries for design and engineering squads.</p>
<div className="text-4xl font-semibold text-white tracking-tight mb-8" id="price-team">$49<span className="text-base text-textsec font-normal tracking-normal">/mo</span></div>
<ul className="flex flex-col gap-4 font-mono text-xs text-textsec mb-12 flex-grow">
<li className="flex items-start gap-3"><iconify-icon className="text-white text-base" icon="solar:check-circle-linear"></iconify-icon> Everything in Pro</li>
<li className="flex items-start gap-3"><iconify-icon className="text-white text-base" icon="solar:check-circle-linear"></iconify-icon> Up to 5 Team Members</li>
<li className="flex items-start gap-3"><iconify-icon className="text-white text-base" icon="solar:check-circle-linear"></iconify-icon> Shared Pattern Libraries</li>
<li className="flex items-start gap-3"><iconify-icon className="text-white text-base" icon="solar:check-circle-linear"></iconify-icon> Priority Support</li>
</ul>
<button className="w-full border border-white/20 text-white py-4 font-sans font-medium text-sm hover:bg-white/10 transition-colors mt-auto">
                            Upgrade to Team
                        </button>
</div>
</div>
</div>
</section>

<section className="py-[10rem] relative bg-bg border-t border-white/10" id="customers">
<div className="w-full max-w-[100rem] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-[6rem] items-center">
<div className="relative w-full aspect-[4/5] overflow-hidden group reveal-up">
<img alt="Customer Portrait" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000 ease-out" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 border border-white/20 m-4 pointer-events-none">
<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white -translate-x-[1px] -translate-y-[1px]"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white translate-x-[1px] translate-y-[1px]"></div>
</div>
</div>
<div className="flex flex-col reveal-up delay-1">
<iconify-icon className="text-4xl text-white/20 mb-8" icon="solar:quote-left-linear"></iconify-icon>
<h3 className="text-h3 text-white mb-8 font-medium italic">
                            "UI Lens entirely changed how our design team gathers inspiration. Instead of taking static screenshots, we extract actual responsive components and Tailwind configurations in seconds."
                        </h3>
<div>
<span className="block font-sans font-semibold text-lg text-white mb-1 tracking-tight">Sarah Jenkins</span>
<span className="block font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] text-textsec uppercase tracking-tech">Lead Product Designer, Nexus</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-[4rem] px-6 lg:px-12 relative z-20 bg-bg">
<div className="w-full max-w-[100rem] mx-auto glass-panel border border-white/20 rounded-xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8 reveal-up relative overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.05)]">

<div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-[80px] pointer-events-none"></div>
<div className="flex flex-col items-center md:items-start text-center md:text-left relative z-10">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-2xl text-white" icon="solar:star-fall-linear"></iconify-icon>
<span className="font-mono text-xs text-white uppercase tracking-tech">Premium Subscription</span>
</div>
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-2">Unlock unlimited design extraction.</h2>
<p className="text-textsec max-w-xl text-sm lg:text-base">Join 50,000+ designers building better interfaces faster. Get full access to Tailwind exports, cloud syncing, and React components.</p>
</div>
<div className="relative z-10 flex-shrink-0 w-full md:w-auto">
<button className="w-full md:w-auto bg-white text-black px-8 py-4 font-sans font-semibold text-sm whitespace-nowrap hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group rounded-sm">
                        Upgrade to Pro
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="mt-3 font-mono text-[10px] text-textsec uppercase tracking-tech text-center md:text-right">Cancel anytime. 14-day trial.</p>
</div>
</div>
</section>
</main>

<footer className="w-full bg-black border-t border-white/10 py-[6rem] relative z-10 font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-tech text-textsec">
<div className="max-w-[100rem] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-[4rem] md:gap-[2rem]">
<div className="col-span-1 md:col-span-4 flex flex-col items-start gap-4">
<div className="flex items-center gap-3">
<svg fill="none" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 12L12 22L22 12L12 2Z" stroke="white" strokeLinejoin="round" strokeWidth="2"></path>
<circle cx="12" cy="12" fill="white" r="3"></circle>
</svg>
<span className="font-sans font-semibold text-base tracking-tight text-white uppercase">UI LENS</span>
</div>
<p className="mt-2">DESIGN_EXTRACTION_ENGINE</p>
</div>
<div className="col-span-1 md:col-span-4 flex justify-between md:justify-around">
<div className="flex flex-col gap-4">
<span className="text-white mb-2">Product</span>
<a className="hover:text-white transition-colors" href="#">Extension</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Changelog</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-white mb-2">Resources</span>
<a className="hover:text-white transition-colors" href="#">Documentation</a>
<a className="hover:text-white transition-colors" href="#">UI Patterns</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
</div>
</div>
<div className="col-span-1 md:col-span-4 flex flex-col md:items-end gap-4">
<div className="flex gap-4 text-xl text-white mb-4">
<a className="hover:text-white/60 transition-colors" href="#"><iconify-icon icon="solar:twit-linear"></iconify-icon></a>
<a className="hover:text-white/60 transition-colors" href="#"><iconify-icon icon="solar:link-linear"></iconify-icon></a>
</div>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<span className="mt-4 text-white/30">© 2025 UI LENS INC.</span>
</div>
</div>
</footer>



    </>
  );
}
