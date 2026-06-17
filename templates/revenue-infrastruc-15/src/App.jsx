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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-white/5 mix-blend-difference">
<div className="w-full max-w-[100rem] mx-auto flex items-center justify-between px-6 lg:px-12 h-[5rem]">

<a className="flex items-center gap-3 group" href="#">
<svg className="group-hover:rotate-90 transition-transform duration-500 ease-in-out" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" stroke="white" strokeWidth="2.5" width="20" x="2" y="2"></rect>
<circle cx="12" cy="12" fill="white" r="4"></circle>
</svg>
<span className="font-sans font-semibold text-lg tracking-tight text-white uppercase">STRATA</span>
</a>

<div className="hidden md:flex items-center justify-center gap-[3rem] text-[clamp(0.75rem,1vw,0.875rem)] font-medium text-textsec">
<a className="hover:text-white transition-colors" href="#platform">Platform</a>
<a className="hover:text-white transition-colors" href="#features">Architecture</a>
<a className="hover:text-white transition-colors" href="#metrics">Results</a>
<a className="hover:text-white transition-colors" href="#customers">Customers</a>
</div>

<div className="hidden md:block">
<a className="font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-tech text-white border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-all duration-300" href="#contact">
                    Deploy Strata
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
<div className="editorial-badge mb-[3rem]">SYSTEM_CORE // 1.0</div>
<h1 className="text-h1 text-white mb-[2rem]">
                        Scale without<br/>
<span className="text-textsec">the friction.</span>
</h1>
</div>
<div className="lg:col-span-8 flex flex-col md:flex-row md:items-center gap-8 md:gap-16 reveal-up delay-1">
<p className="text-body max-w-[32rem]">
                        Strata is the deterministic revenue infrastructure for high-growth teams. We eliminate operational drag so your people can focus on what matters: aggressive, predictable expansion.
                    </p>
<div className="flex-shrink-0">
<button className="btn-editorial group" onclick="document.getElementById('platform').scrollIntoView()">
<span className="relative z-10 flex items-center gap-3">
                                Initialize System
                                <iconify-icon className="text-xl icon-arrow" icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</button>
</div>
</div>
</div>
</section>

<section className="border-y border-white/10 bg-surface/50 py-[4rem] relative z-10">
<div className="w-full max-w-[100rem] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
<p className="font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] text-textsec uppercase tracking-tech whitespace-nowrap">Trusted by market leaders</p>
<div className="w-full flex flex-wrap justify-between items-center gap-8 font-sans font-semibold text-[clamp(1.25rem,2vw,1.5rem)] text-white/40 tracking-widest uppercase">
<span className="hover:text-white transition-colors duration-500 cursor-default">Linear</span>
<span className="hover:text-white transition-colors duration-500 cursor-default">Vercel</span>
<span className="hover:text-white transition-colors duration-500 cursor-default">Raycast</span>
<span className="hover:text-white transition-colors duration-500 cursor-default">Ramp</span>
<span className="hover:text-white transition-colors duration-500 cursor-default">Retool</span>
</div>
</div>
</section>

<section className="py-[12rem] relative bg-bg">
<div className="w-full max-w-[100rem] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-[4rem] lg:gap-[8rem]">
<div className="lg:col-span-5 reveal-up">
<div className="editorial-badge mb-[2rem]">THE_FRICTION</div>
<h2 className="text-h3 text-white mb-6">Growth shouldn't break your systems. Or your people.</h2>
<a className="btn-outline mt-8" href="#features">
                            Explore the architecture
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="lg:col-span-7 flex flex-col gap-[3rem] reveal-up delay-1">
<p className="text-body text-white">
                            As organizations scale, legacy tools create compounding technical debt. Data silos form. Workflows fracture. Your best talent spends hours managing the software that was supposed to manage the work.
                        </p>
<div className="border-l border-white/20 pl-6 lg:pl-10">
<p className="text-body">
                                Strata replaces fragmented point solutions with a singular, deterministic architecture. It’s designed to be invisible when you don’t need it, and infinitely powerful when you do. <strong>Trust the system. Empower the human.</strong>
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
<div className="editorial-badge mb-[2rem]">INTERFACE // CORE</div>
<h2 className="text-h2 text-white max-w-[40rem]">Clarity at any velocity.</h2>
</div>

<div className="w-full aspect-[16/10] md:aspect-[21/9] glass-panel rounded-lg overflow-hidden flex flex-col reveal-up shadow-[0_20px_60px_-15px_rgba(255,255,255,0.05)] relative">

<div className="h-[3rem] border-b border-white/10 flex items-center px-6 gap-4 bg-white/[0.02]">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-white/20"></div>
<div className="w-3 h-3 rounded-full bg-white/20"></div>
<div className="w-3 h-3 rounded-full bg-white/20"></div>
</div>
<div className="ml-4 flex gap-6 font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] text-textsec uppercase">
<span className="text-white border-b border-white pb-1">Overview</span>
<span>Revenue</span>
<span>Pipeline</span>
</div>
</div>

<div className="flex-grow p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#050505]">

<div className="md:col-span-2 border border-white/5 rounded bg-surface/50 p-6 flex flex-col justify-between relative overflow-hidden group">
<div className="flex justify-between items-start mb-8">
<div>
<span className="text-textsec font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase block mb-1">ARR_Velocity</span>
<span className="text-3xl text-white font-semibold tracking-tight">$4.2M</span>
</div>
<span className="text-white bg-white/10 px-2 py-1 rounded text-xs">+124% YOY</span>
</div>

<div className="w-full h-[120px] flex items-end gap-2 mt-auto">
<div className="w-full bg-white/10 h-[30%] rounded-t group-hover:bg-white/20 transition-colors duration-300"></div>
<div className="w-full bg-white/10 h-[45%] rounded-t group-hover:bg-white/20 transition-colors duration-300 delay-75"></div>
<div className="w-full bg-white/20 h-[60%] rounded-t group-hover:bg-white/30 transition-colors duration-300 delay-100"></div>
<div className="w-full bg-white/30 h-[80%] rounded-t group-hover:bg-white/40 transition-colors duration-300 delay-150"></div>
<div className="w-full bg-white h-[100%] rounded-t shadow-[0_0_20px_rgba(255,255,255,0.3)]"></div>
</div>
</div>

<div className="flex flex-col gap-6">
<div className="border border-white/5 rounded bg-surface/50 p-6 flex-grow">
<span className="text-textsec font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase block mb-4">Active_Nodes</span>
<div className="flex flex-col gap-4">
<div className="flex justify-between items-center border-b border-white/5 pb-2">
<div className="flex items-center gap-2 text-sm text-white"><span className="w-2 h-2 rounded-full bg-white"></span> Enterprise</div>
<span className="text-textsec font-mono text-xs">84</span>
</div>
<div className="flex justify-between items-center border-b border-white/5 pb-2">
<div className="flex items-center gap-2 text-sm text-white"><span className="w-2 h-2 rounded-full bg-white/40"></span> Mid-Market</div>
<span className="text-textsec font-mono text-xs">212</span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2 text-sm text-white"><span className="w-2 h-2 rounded-full bg-white/10"></span> SMB</div>
<span className="text-textsec font-mono text-xs">890</span>
</div>
</div>
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
<h2 className="text-h3 text-white">Engineered for<br/>leverage.</h2>
</div>
<p className="text-body max-w-[24rem]">
                        Complex operations reduced to elegant primitives.
                    </p>
</div>

<div className="swiss-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 reveal-up delay-1">

<div className="p-8 lg:p-12 flex flex-col aspect-square hover-lift group">
<iconify-icon className="text-3xl text-white mb-auto" icon="solar:database-linear"></iconify-icon>
<div>
<h3 className="font-sans font-semibold text-xl text-white mb-3">Unified Ledger</h3>
<p className="text-textsec text-sm leading-relaxed">A single source of truth. Eradicate data discrepancies across your go-to-market stack natively.</p>
</div>
</div>

<div className="p-8 lg:p-12 flex flex-col aspect-square hover-lift group">
<iconify-icon className="text-3xl text-white mb-auto group-hover:scale-110 transition-transform" icon="solar:bolt-linear"></iconify-icon>
<div>
<h3 className="font-sans font-semibold text-xl text-white mb-3">Deterministic Routing</h3>
<p className="text-textsec text-sm leading-relaxed">Rule-based automation that doesn't break at scale. Predictable outcomes for complex workflows.</p>
</div>
</div>

<div className="p-8 lg:p-12 flex flex-col aspect-square hover-lift group bg-white text-black relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white to-gray-300 opacity-50 pointer-events-none"></div>
<iconify-icon className="text-3xl text-black mb-auto relative z-10" icon="solar:shield-keyhole-linear"></iconify-icon>
<div className="relative z-10">
<h3 className="font-sans font-semibold text-xl text-black mb-3">Enterprise Grade</h3>
<p className="text-black/70 text-sm leading-relaxed">SOC2 Type II, GDPR, and HIPAA compliant out of the box. Security as a foundation, not a feature.</p>
</div>
</div>

<div className="p-8 lg:p-12 flex flex-col md:col-span-2 md:aspect-[2/1] hover-lift group">
<div className="flex justify-between items-start mb-auto">
<iconify-icon className="text-3xl text-white" icon="solar:chart-square-linear"></iconify-icon>
<span className="font-mono text-xs text-textsec uppercase tracking-tech border border-white/10 px-2 py-1">LIVE_TELEMETRY</span>
</div>
<div className="grid md:grid-cols-2 gap-8 items-end">
<div>
<h3 className="font-sans font-semibold text-xl text-white mb-3">Real-time Attribution</h3>
<p className="text-textsec text-sm leading-relaxed">Connect top-of-funnel signals directly to recognized revenue. Stop guessing what drives growth.</p>
</div>
<div className="h-1 bg-white/10 w-full rounded overflow-hidden relative">
<div className="absolute top-0 left-0 h-full bg-white w-0 group-hover:w-full transition-all duration-[1.5s] ease-out"></div>
</div>
</div>
</div>

<div className="p-8 lg:p-12 flex flex-col aspect-square hover-lift group">
<iconify-icon className="text-3xl text-white mb-auto" icon="solar:cpu-bolt-linear"></iconify-icon>
<div>
<h3 className="font-sans font-semibold text-xl text-white mb-3">Extensible API</h3>
<p className="text-textsec text-sm leading-relaxed">Build custom integrations with our heavily documented, GraphQL-first architecture.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-[8rem] relative border-y border-white/10 bg-surface/30" id="metrics">
<div className="w-full max-w-[100rem] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
<div className="flex flex-col items-center pt-8 md:pt-0 reveal-up">
<div className="text-[clamp(3.5rem,6vw,5rem)] font-semibold text-white tracking-tighter leading-none mb-4 flex items-baseline">
<span className="metric-counter" data-target="300">0</span><span className="text-4xl text-textsec ml-1">%</span>
</div>
<span className="font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] text-white uppercase tracking-tech block">Average ROI (Year 1)</span>
</div>
<div className="flex flex-col items-center pt-8 md:pt-0 reveal-up delay-1">
<div className="text-[clamp(3.5rem,6vw,5rem)] font-semibold text-white tracking-tighter leading-none mb-4 flex items-baseline">
<span className="metric-counter" data-target="45">0</span><span className="text-4xl text-textsec ml-2">hrs</span>
</div>
<span className="font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] text-textsec uppercase tracking-tech block">Saved per week / team</span>
</div>
<div className="flex flex-col items-center pt-8 md:pt-0 reveal-up delay-2">
<div className="text-[clamp(3.5rem,6vw,5rem)] font-semibold text-white tracking-tighter leading-none mb-4 flex items-baseline">
<span className="metric-counter" data-decimals="2" data-target="99.99">0</span><span className="text-4xl text-textsec ml-1">%</span>
</div>
<span className="font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] text-textsec uppercase tracking-tech block">System Uptime SLA</span>
</div>
</div>
</section>

<section className="py-[10rem] relative bg-bg" id="customers">
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
                            "Before Strata, we were throwing headcount at operational problems. Now, the system handles the complexity, and our team focuses purely on closing enterprise revenue. It completely changed our trajectory."
                        </h3>
<div>
<span className="block font-sans font-semibold text-lg text-white mb-1 tracking-tight">Sarah Jenkins</span>
<span className="block font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] text-textsec uppercase tracking-tech">VP Revenue Operations, Nexus</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-[12rem] bg-white text-black relative overflow-hidden" id="contact">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="w-full max-w-[100rem] mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center reveal-up">
<div className="editorial-badge mb-[2rem] text-black/50 before:bg-black/50">INITIATE</div>
<h2 className="text-h1 text-black mb-6 max-w-[50rem]">
                    Ready to scale?
                </h2>
<p className="text-body text-black/70 mb-[4rem] max-w-[30rem]">
                    Join the category leaders building on deterministic infrastructure. Get full access to the Strata platform.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-6 w-full max-w-[32rem]">
<div className="relative w-full flex-grow">
<input className="w-full bg-black/5 border-b border-black/20 px-4 py-4 font-mono text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-black transition-colors" placeholder="work email address" type="email"/>
</div>
<button className="bg-black text-white px-8 py-4 font-sans font-semibold text-sm whitespace-nowrap hover:bg-black/80 transition-colors w-full sm:w-auto flex items-center justify-center gap-2 group">
                        Request Access
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<p className="mt-6 font-mono text-xs text-black/40 uppercase tracking-tech">No credit card required. SOC2 Compliant.</p>
</div>
</section>
</main>

<footer className="w-full bg-black border-t border-white/10 py-[6rem] relative z-10 font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-tech text-textsec">
<div className="max-w-[100rem] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-[4rem] md:gap-[2rem]">
<div className="col-span-1 md:col-span-4 flex flex-col items-start gap-4">
<div className="flex items-center gap-3">
<svg fill="none" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="20" stroke="white" strokeWidth="2" width="20" x="2" y="2"></rect>
<circle cx="12" cy="12" fill="white" r="4"></circle>
</svg>
<span className="font-sans font-semibold text-base tracking-tight text-white uppercase">STRATA</span>
</div>
<p className="mt-2">REVENUE_INFRASTRUCTURE</p>
</div>
<div className="col-span-1 md:col-span-4 flex justify-between md:justify-around">
<div className="flex flex-col gap-4">
<span className="text-white mb-2">Platform</span>
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Integrations</a>
<a className="hover:text-white transition-colors" href="#">Security</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-white mb-2">Company</span>
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:text-white transition-colors" href="#">Careers</a>
<a className="hover:text-white transition-colors" href="#">Blog</a>
</div>
</div>
<div className="col-span-1 md:col-span-4 flex flex-col md:items-end gap-4">
<div className="flex gap-4 text-xl text-white mb-4">
<a className="hover:text-white/60 transition-colors" href="#"><iconify-icon icon="solar:twit-linear"></iconify-icon></a>
<a className="hover:text-white/60 transition-colors" href="#"><iconify-icon icon="solar:link-linear"></iconify-icon></a>
</div>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<span className="mt-4 text-white/30">© 2025 STRATA INC.</span>
</div>
</div>
</footer>



    </>
  );
}
