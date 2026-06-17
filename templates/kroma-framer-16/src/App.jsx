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
display: ['Space Grotesk', 'sans-serif'],
body: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
kroma: {
bg: '#0A0A0A',
surface: '#121212',
surfaceHover: '#1A1A1A',
border: 'rgba(255, 255, 255, 0.08)',
borderHover: 'rgba(255, 255, 255, 0.15)',
accent: '#FF4F00',
accentGlow: 'rgba(255, 79, 0, 0.15)',
textPrimary: '#FFFFFF',
textSecondary: '#888888',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- WebGL Dotted Grid & Beams Shader (Advanced) ---
        const canvas = document.getElementById('webgl-canvas');
        const gl = canvas.getContext('webgl');

        if (gl) {
            const vsSource = `
                attribute vec2 position;
                void main() {
                    gl_Position = vec4(position, 0.0, 1.0);
                }
            `;

            const fsSource = `
                precision highp float;
                uniform vec2 u_resolution;
                uniform float u_time;

                // Hash function for pseudo-random calculations
                float hash(vec2 p) {
                    p = fract(p * vec2(123.34, 456.21));
                    p += dot(p, p + 45.32);
                    return fract(p.x * p.y);
                }

                void main() {
                    vec2 fragCoord = gl_FragCoord.xy;
                    float gridSize = 60.0;
                    
                    // Grid coordinates
                    vec2 cell = floor(fragCoord / gridSize);
                    vec2 local = mod(fragCoord, gridSize);
                    vec2 center = vec2(gridSize / 2.0);
                    
                    float dist = length(local - center);
                    
                    // --- Nodes (Data Points) ---
                    // Unique flicker speed per cell
                    float flickerSpeed = 2.0 + hash(cell) * 5.0;
                    float flicker = sin(u_time * flickerSpeed + hash(cell) * 100.0) * 0.5 + 0.5;
                    
                    float dotRadius = 1.5;
                    float dotIntensity = smoothstep(dotRadius + 1.0, dotRadius, dist);
                    vec3 dotColor = mix(vec3(0.15), vec3(0.9), flicker) * dotIntensity;

                    // --- High-Velocity Data Beams ---
                    vec3 beamColor = vec3(1.0, 0.31, 0.0); // #FF4F00 Kroma Accent
                    vec3 finalBeamColor = vec3(0.0);
                    float activeBeamIntensity = 0.0;
                    
                    // X-Axis Beams
                    float rowHash = hash(vec2(cell.y, 1.0));
                    if(rowHash > 0.94) { // Rare occurrence
                        float speed = 400.0 + hash(vec2(cell.y, 2.0)) * 600.0;
                        float dir = hash(vec2(cell.y, 3.0)) > 0.5 ? 1.0 : -1.0;
                        float beamPos = mod(u_time * speed * dir, u_resolution.x + 600.0) - 300.0;
                        
                        float distToBeamX = abs(fragCoord.x - beamPos);
                        float distToBeamY = abs(local.y - center.y); // Snap to row
                        
                        float beamShape = smoothstep(150.0, 0.0, distToBeamX) * smoothstep(2.0, 0.0, distToBeamY);
                        finalBeamColor += beamColor * beamShape;
                        
                        // Node illuminates on beam pass
                        activeBeamIntensity += smoothstep(60.0, 0.0, distToBeamX) * smoothstep(dotRadius + 4.0, dotRadius, dist);
                    }
                    
                    // Y-Axis Beams
                    float colHash = hash(vec2(cell.x, 1.0));
                    if(colHash > 0.94) {
                        float speed = 400.0 + hash(vec2(cell.x, 2.0)) * 600.0;
                        float dir = hash(vec2(cell.x, 3.0)) > 0.5 ? 1.0 : -1.0;
                        float beamPos = mod(u_time * speed * dir, u_resolution.y + 600.0) - 300.0;
                        
                        float distToBeamY = abs(fragCoord.y - beamPos);
                        float distToBeamX = abs(local.x - center.x);
                        
                        float beamShape = smoothstep(150.0, 0.0, distToBeamY) * smoothstep(2.0, 0.0, distToBeamX);
                        finalBeamColor += beamColor * beamShape;
                        
                        activeBeamIntensity += smoothstep(60.0, 0.0, distToBeamY) * smoothstep(dotRadius + 4.0, dotRadius, dist);
                    }

                    // Overcharge node if packet impacts
                    dotColor += beamColor * activeBeamIntensity * 2.5;

                    // Base Background Plate matching Tailwind's bg-[#0A0A0A]
                    vec3 bgColor = vec3(0.04, 0.04, 0.04);
                    
                    // Composite Frame
                    vec3 finalColor = bgColor + dotColor + finalBeamColor;
                    
                    // Deep Vignette
                    vec2 uv = fragCoord / u_resolution.xy;
                    float vignette = 1.0 - smoothstep(0.4, 1.6, length(uv - 0.5));
                    finalColor *= vignette;

                    gl_FragColor = vec4(finalColor, 1.0);
                }
            `;

            // Compile Shader Function
            function compileShader(gl, source, type) {
                const shader = gl.createShader(type);
                gl.shaderSource(shader, source);
                gl.compileShader(shader);
                if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                    console.error('Shader compile error:', gl.getShaderInfoLog(shader));
                    gl.deleteShader(shader);
                    return null;
                }
                return shader;
            }

            const vertexShader = compileShader(gl, vsSource, gl.VERTEX_SHADER);
            const fragmentShader = compileShader(gl, fsSource, gl.FRAGMENT_SHADER);

            // Create Program
            const program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);

            if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
                console.error('Program link error:', gl.getProgramInfoLog(program));
            }

            gl.useProgram(program);

            // Setup Fullscreen Quad
            const positionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            const positions = new Float32Array([
                -1.0, -1.0,   1.0, -1.0,  -1.0,  1.0,
                -1.0,  1.0,   1.0, -1.0,   1.0,  1.0
            ]);
            gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

            const positionLocation = gl.getAttribLocation(program, "position");
            gl.enableVertexAttribArray(positionLocation);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

            // Get Uniforms
            const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
            const timeLocation = gl.getUniformLocation(program, "u_time");

            function resize() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                gl.viewport(0, 0, canvas.width, canvas.height);
                gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
            }

            window.addEventListener('resize', resize);
            resize();

            let startTime = performance.now();
            function render(currentTime) {
                const elapsedTime = (currentTime - startTime) / 1000.0;
                gl.uniform1f(timeLocation, elapsedTime);
                gl.drawArrays(gl.TRIANGLES, 0, 6);
                requestAnimationFrame(render);
            }
            requestAnimationFrame(render);
        } else {
            console.warn("WebGL not supported, falling back to CSS grid.");
        }

        // --- Scroll Reveal Animation ---
        const revealElements = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });
        revealElements.forEach(el => revealObserver.observe(el));

        // --- Navbar Scroll Logic ---
        const navbar = document.getElementById('navbar');
        let lastScrollY = window.scrollY;
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                if (window.scrollY > lastScrollY) {
                    navbar.style.transform = 'translate(-50%, -10px) scale(0.98)';
                    navbar.style.opacity = '0.5';
                } else {
                    navbar.style.transform = 'translate(-50%, 0) scale(1)';
                    navbar.style.opacity = '1';
                }
            } else {
                navbar.style.transform = 'translate(-50%, 0) scale(1)';
                navbar.style.opacity = '1';
            }
            lastScrollY = window.scrollY;
        });

        // --- Smooth Scroll ---
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                const targetEl = document.querySelector(targetId);
                if(targetEl) {
                    targetEl.scrollIntoView({ behavior: 'smooth' });
                }
            });
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
      

<canvas id="webgl-canvas"></canvas>
<div className="fixed inset-0 z-[-1] pointer-events-none bg-gradient-to-b from-transparent via-kroma-bg/80 to-kroma-bg"></div>

<div className="fixed top-[clamp(1rem,2vw,2rem)] left-1/2 -translate-x-1/2 w-[95%] max-w-[80rem] z-50 transition-all duration-500" id="navbar">
<nav className="glass-pill px-[clamp(1rem,2vw,1.5rem)] py-[clamp(0.5rem,1vw,0.75rem)] flex items-center corner-brackets">
<div className="cb-br"></div>

<a className="flex items-center gap-[clamp(0.5rem,1vw,0.75rem)] group relative z-10 mr-auto" href="#">
<span className="font-display font-semibold tracking-tighter text-kroma-textPrimary text-fluid-base leading-none">KROMA<span className="text-kroma-accent">_</span></span>
</a>

<div className="flex items-center gap-[clamp(1rem,2vw,1.5rem)] ml-auto relative z-10">

<div className="hidden md:flex items-center gap-[clamp(1.5rem,3vw,2rem)] bg-kroma-bg/50 border border-kroma-border px-[clamp(1rem,2vw,1.5rem)] py-[clamp(0.4rem,0.8vw,0.6rem)]">
<a className="font-mono text-fluid-xs font-semibold uppercase tracking-widest text-kroma-textSecondary hover:text-kroma-textPrimary transition-colors" href="#work">[ 01. WORK ]</a>
<a className="font-mono text-fluid-xs font-semibold uppercase tracking-widest text-kroma-textSecondary hover:text-kroma-textPrimary transition-colors" href="#systems">[ 02. SYS ]</a>
<a className="font-mono text-fluid-xs font-semibold uppercase tracking-widest text-kroma-textSecondary hover:text-kroma-textPrimary transition-colors" href="#acquire">[ 03. ACQ ]</a>
</div>

<a className="hidden md:flex items-center gap-[clamp(0.25rem,0.5vw,0.5rem)] bg-kroma-textPrimary text-kroma-bg px-[clamp(1rem,2vw,1.25rem)] py-[clamp(0.4rem,0.8vw,0.6rem)] font-mono text-fluid-xs font-semibold tracking-widest uppercase transition-all hover:bg-white/90 active:scale-95 group" href="#acquire">
                    INIT_DEPLOY()
                    <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<button className="md:hidden text-kroma-textPrimary p-[clamp(0.25rem,0.5vw,0.5rem)] bg-kroma-bg/50 border border-kroma-border hover:bg-white/10 transition-colors">
<iconify-icon height="1.5em" icon="solar:hamburger-menu-linear" width="1.5em"></iconify-icon>
</button>
</div>
</nav>
</div>
<main className="relative w-full overflow-hidden">

<section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 container-padding text-center overflow-hidden">
<div className="absolute left-0 top-1/3 w-full h-[1px] bg-kroma-border/50 z-[-1]"></div>
<div className="absolute left-1/2 top-0 w-[1px] h-full bg-kroma-border/50 -translate-x-1/2 z-[-1]"></div>
<div className="reveal max-w-5xl mx-auto flex flex-col items-center z-10 relative">
<div className="inline-flex items-center gap-[clamp(0.5rem,1vw,0.75rem)] border border-kroma-accent/30 bg-kroma-accent/5 px-[clamp(0.75rem,1.5vw,1rem)] py-[clamp(0.25rem,0.5vw,0.4rem)] mb-[clamp(1.5rem,3vw,2rem)] backdrop-blur-sm">
<div className="w-[clamp(0.25rem,0.5vw,0.5rem)] h-[clamp(0.25rem,0.5vw,0.5rem)] bg-kroma-accent animate-pulse"></div>
<span className="font-mono text-fluid-xs font-semibold uppercase tracking-widest text-kroma-accent">SYS.STATE: ARCHITECTURE_V2_READY</span>
</div>
<h1 className="font-display font-semibold text-fluid-h1 text-kroma-textPrimary tracking-tighter leading-[1.05] mb-[clamp(1.5rem,3vw,2rem)] uppercase">
                    Stop Losing <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.4)] animate-hero-flicker inline-block">$10k Retainers</span> <br className="hidden md:block"/> To Inferior <span className="text-kroma-textSecondary border-b-2 border-dashed border-kroma-border">Agencies.</span>
</h1>
<p className="font-mono text-fluid-base leading-relaxed text-kroma-textSecondary max-w-2xl mb-[clamp(2rem,4vw,3rem)] tracking-tight">
                    &gt; // An award-winning Framer template meticulously engineered for elite creative studios. Transform your portfolio from a passive gallery into a high-ticket conversion architecture.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-[clamp(1rem,2vw,1.5rem)] w-full sm:w-auto">
<a className="group relative flex items-center justify-center gap-[clamp(0.5rem,1vw,0.75rem)] w-full sm:w-auto bg-kroma-textPrimary text-kroma-bg px-[clamp(1.5rem,3vw,2rem)] py-[clamp(0.875rem,1.5vw,1.125rem)] font-mono text-fluid-sm font-semibold uppercase tracking-widest transition-all hover:bg-white/90 active:scale-95" href="#acquire">
<span className="absolute -top-1 -left-1 w-2 h-2 bg-kroma-accent"></span>
<span className="absolute -bottom-1 -right-1 w-2 h-2 bg-kroma-accent"></span>
                        Acquire_Asset
                        <iconify-icon className="transition-transform group-hover:translate-y-1" icon="solar:download-square-linear"></iconify-icon>
</a>
<a className="group flex items-center justify-center gap-[clamp(0.5rem,1vw,0.75rem)] w-full sm:w-auto border border-kroma-border bg-kroma-bg/50 backdrop-blur-md text-kroma-textPrimary px-[clamp(1.5rem,3vw,2rem)] py-[clamp(0.875rem,1.5vw,1.125rem)] font-mono text-fluid-sm font-semibold uppercase tracking-widest transition-all hover:bg-white/10 active:scale-95" href="#demo">
                        [ Preview_DOM ]
                    </a>
</div>
</div>

<div className="reveal delay-200 mt-[clamp(4rem,8vw,6rem)] w-full max-w-6xl relative perspective-[1200px] animate-float z-0">
<div className="absolute inset-0 bg-gradient-to-t from-kroma-bg via-transparent to-transparent z-20 translate-y-8"></div>

<div className="corner-brackets rounded-sm border border-kroma-border bg-kroma-surface/80 backdrop-blur-xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,1)] transform rotate-x-[12deg] rotate-z-[-2deg] relative">
<div className="cb-br"></div>
<div className="animate-scan"></div>
<div className="h-[clamp(2rem,4vw,2.5rem)] border-b border-kroma-border flex items-center px-[clamp(1rem,2vw,1.5rem)] justify-between bg-kroma-bg">
<div className="font-mono text-[10px] text-kroma-textSecondary tracking-widest uppercase">DOM_INSPECTOR // ROOT</div>
<div className="flex gap-[clamp(0.25rem,0.5vw,0.4rem)]">
<div className="w-[clamp(0.5rem,1vw,0.75rem)] h-[clamp(0.5rem,1vw,0.75rem)] border border-kroma-border"></div>
<div className="w-[clamp(0.5rem,1vw,0.75rem)] h-[clamp(0.5rem,1vw,0.75rem)] border border-kroma-border"></div>
</div>
</div>
<div className="aspect-[21/9] relative flex items-center justify-center p-[clamp(2rem,4vw,4rem)]">

<div className="w-full h-full border border-kroma-border/50 relative p-[clamp(1rem,2vw,2rem)] grid grid-cols-4 gap-[clamp(0.5rem,1vw,1rem)]">

<div className="absolute -top-3 -left-3 crosshair-marker"></div>
<div className="absolute -bottom-3 -right-3 crosshair-marker"></div>

<div className="col-span-1 border border-kroma-border/30 bg-kroma-bg/50 h-full relative">
<div className="absolute top-2 left-2 font-mono text-[8px] text-kroma-textSecondary">ASIDE</div>
</div>
<div className="col-span-3 border border-kroma-border/30 bg-kroma-bg/50 h-full flex flex-col gap-[clamp(0.5rem,1vw,1rem)] p-[clamp(0.5rem,1vw,1rem)] relative">
<div className="absolute top-2 left-2 font-mono text-[8px] text-kroma-textSecondary">MAIN_VIEW</div>
<div className="h-1/3 w-full border border-kroma-accent/40 bg-kroma-accent/10 relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-kroma-accent"></div>
<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,79,0,0.1)_25%,rgba(255,79,0,0.1)_50%,transparent_50%,transparent_75%,rgba(255,79,0,0.1)_75%,rgba(255,79,0,0.1)_100%)] bg-[length:10px_10px]"></div>
</div>
<div className="h-2/3 w-full flex gap-[clamp(0.5rem,1vw,1rem)]">
<div className="h-full w-1/2 border border-kroma-border/30 bg-kroma-bg/80"></div>
<div className="h-full w-1/2 border border-kroma-border/30 bg-kroma-bg/80"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -right-[10%] top-[20%] font-mono text-fluid-xs text-kroma-accent border border-kroma-accent/30 bg-kroma-bg p-2 backdrop-blur-md z-30 animate-float" style={{animationDelay: '-2s'}}>
                    + VOL: 99.4%
                </div>
<div className="absolute -left-[5%] bottom-[30%] font-mono text-fluid-xs text-kroma-textSecondary border border-kroma-border bg-kroma-bg p-2 backdrop-blur-md z-30 animate-float" style={{animationDelay: '-1s'}}>
                    &lt;RNDR_PASS&gt;
                </div>
</div>
</section>

<section className="border-y border-kroma-border bg-kroma-surface/80 py-[clamp(1rem,2vw,1.5rem)] overflow-hidden relative backdrop-blur-sm">
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,79,0,0.05)_1px,transparent_1px)] bg-[length:20px_10px]"></div>
<div className="flex flex-col md:flex-row items-center container-padding max-w-[100rem] mx-auto gap-[clamp(1.5rem,3vw,2rem)] relative z-10">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-kroma-accent rounded-full animate-pulse"></div>
<p className="font-mono text-[10px] text-kroma-textSecondary uppercase tracking-widest whitespace-nowrap hidden md:block border border-kroma-border px-2 py-1">
                        INTEGRATIONS_ACTIVE
                    </p>
</div>
<div className="w-full relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
<div className="marquee-h flex gap-[clamp(4rem,8vw,6rem)] items-center text-kroma-textSecondary/40">
<div className="flex items-center gap-2 font-mono text-fluid-xs uppercase"><iconify-icon icon="solar:figma-linear" width="1.5em"></iconify-icon> FIGMA</div>
<div className="flex items-center gap-2 font-mono text-fluid-xs uppercase"><iconify-icon icon="solar:code-circle-linear" width="1.5em"></iconify-icon> REACT</div>
<div className="flex items-center gap-2 font-mono text-fluid-xs uppercase"><iconify-icon icon="solar:server-square-linear" width="1.5em"></iconify-icon> NEXT.JS</div>
<div className="flex items-center gap-2 font-mono text-fluid-xs uppercase"><iconify-icon icon="solar:database-linear" width="1.5em"></iconify-icon> SUPABASE</div>
<div className="flex items-center gap-2 font-mono text-fluid-xs uppercase"><iconify-icon icon="solar:cloud-linear" width="1.5em"></iconify-icon> VERCEL</div>

<div className="flex items-center gap-2 font-mono text-fluid-xs uppercase"><iconify-icon icon="solar:figma-linear" width="1.5em"></iconify-icon> FIGMA</div>
<div className="flex items-center gap-2 font-mono text-fluid-xs uppercase"><iconify-icon icon="solar:code-circle-linear" width="1.5em"></iconify-icon> REACT</div>
<div className="flex items-center gap-2 font-mono text-fluid-xs uppercase"><iconify-icon icon="solar:server-square-linear" width="1.5em"></iconify-icon> NEXT.JS</div>
<div className="flex items-center gap-2 font-mono text-fluid-xs uppercase"><iconify-icon icon="solar:database-linear" width="1.5em"></iconify-icon> SUPABASE</div>
<div className="flex items-center gap-2 font-mono text-fluid-xs uppercase"><iconify-icon icon="solar:cloud-linear" width="1.5em"></iconify-icon> VERCEL</div>
</div>
</div>
</div>
</section>

<section className="section-padding container-padding max-w-[100rem] mx-auto relative" id="systems">
<div className="absolute left-[5%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-kroma-border to-transparent hidden lg:block"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-section items-start relative z-10">

<div className="lg:col-span-4 lg:sticky lg:top-32 reveal flex flex-col gap-[clamp(2rem,4vw,3rem)]">
<div>
<span className="font-mono text-[10px] text-kroma-textSecondary uppercase tracking-widest border border-kroma-border px-2 py-1 mb-[clamp(1rem,2vw,1.5rem)] inline-block">SEC. 02 // LOGIC</span>
<h2 className="font-display font-semibold text-fluid-h2 text-kroma-textPrimary tracking-tight leading-[1.1] mb-[clamp(1rem,2vw,1.5rem)]">
                            Pretty pixels don't close contracts.
                        </h2>
<p className="font-mono text-fluid-sm text-kroma-textSecondary leading-relaxed max-w-sm">
                            Your prospects evaluate you on perceived logic. A masonry grid is commoditized. Kroma shifts the narrative to "business impact architecture."
                        </p>
</div>

<div className="flex flex-col gap-[clamp(1rem,2vw,1.5rem)] border-l border-kroma-border pl-[clamp(1rem,2vw,1.5rem)]">
<div className="group relative">
<div className="absolute -left-[clamp(1rem,2vw,1.5rem)] top-2 w-[11px] h-[1px] bg-kroma-textSecondary group-hover:bg-kroma-accent transition-colors"></div>
<h4 className="font-mono text-fluid-xs text-kroma-textPrimary uppercase tracking-widest mb-1 group-hover:text-kroma-accent transition-colors">01. Diagnose</h4>
<p className="font-body text-fluid-xs text-kroma-textSecondary">Identify value bleed in current flow.</p>
</div>
<div className="group relative">
<div className="absolute -left-[clamp(1rem,2vw,1.5rem)] top-2 w-[11px] h-[1px] bg-kroma-textSecondary group-hover:bg-kroma-accent transition-colors"></div>
<h4 className="font-mono text-fluid-xs text-kroma-textPrimary uppercase tracking-widest mb-1 group-hover:text-kroma-accent transition-colors">02. Architect</h4>
<p className="font-body text-fluid-xs text-kroma-textSecondary">Deploy conversion-optimized layouts.</p>
</div>
<div className="group relative">
<div className="absolute -left-[clamp(1rem,2vw,1.5rem)] top-2 w-[11px] h-[1px] bg-kroma-textSecondary group-hover:bg-kroma-accent transition-colors"></div>
<h4 className="font-mono text-fluid-xs text-kroma-textPrimary uppercase tracking-widest mb-1 group-hover:text-kroma-accent transition-colors">03. Scale</h4>
<p className="font-body text-fluid-xs text-kroma-textSecondary">Automate lead qualification.</p>
</div>
</div>
</div>

<div className="lg:col-span-7 lg:col-start-6 flex flex-col gap-[clamp(1.5rem,3vw,2rem)]">

<div className="reveal corner-brackets premium-card border border-kroma-border p-[clamp(2rem,4vw,3rem)] relative group">
<div className="cb-br cb-marker transition-colors duration-400"></div>
<div className="absolute top-[clamp(1rem,2vw,1.5rem)] right-[clamp(1rem,2vw,1.5rem)] font-mono text-[10px] text-kroma-textSecondary/50 group-hover:text-kroma-textPrimary/50">[ MODULE_A ]</div>
<div className="mb-[clamp(1.5rem,3vw,2rem)] text-kroma-textSecondary group-hover:text-kroma-textPrimary transition-colors inline-block border border-kroma-border p-3 bg-kroma-bg">
<iconify-icon height="2em" icon="solar:hierarchy-linear" width="2em"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-fluid-lg text-kroma-textPrimary mb-[clamp(0.75rem,1.5vw,1rem)] tracking-tight uppercase">Anti-Dribbble Framework</h3>
<p className="font-mono text-fluid-sm text-kroma-textSecondary leading-relaxed mb-[clamp(1.5rem,3vw,2rem)]">
                            Status quo portfolios offer zero context. Kroma provisions data-anchored case study components that prove specific ROI, instantly elevating perceived authority.
                        </p>
<div className="grid grid-cols-3 gap-2 h-2 mt-4">
<div className="bg-kroma-border group-hover:bg-kroma-accent transition-colors duration-500 delay-100 h-full"></div>
<div className="bg-kroma-border group-hover:bg-kroma-accent transition-colors duration-500 delay-200 h-full opacity-50"></div>
<div className="bg-kroma-border group-hover:bg-kroma-accent transition-colors duration-500 delay-300 h-full opacity-20"></div>
</div>
</div>

<div className="reveal delay-100 corner-brackets premium-card border border-kroma-border p-[clamp(2rem,4vw,3rem)] relative group">
<div className="cb-br cb-marker transition-colors duration-400"></div>
<div className="absolute top-[clamp(1rem,2vw,1.5rem)] right-[clamp(1rem,2vw,1.5rem)] font-mono text-[10px] text-kroma-textSecondary/50 group-hover:text-kroma-textPrimary/50">[ MODULE_B ]</div>
<div className="mb-[clamp(1.5rem,3vw,2rem)] text-kroma-textSecondary group-hover:text-kroma-accent transition-colors inline-block border border-kroma-border p-3 bg-kroma-bg">
<iconify-icon height="2em" icon="solar:funnel-linear" width="2em"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-fluid-lg text-kroma-textPrimary mb-[clamp(0.75rem,1.5vw,1rem)] tracking-tight uppercase">Lead Filtration Engine</h3>
<p className="font-mono text-fluid-sm text-kroma-textSecondary leading-relaxed mb-[clamp(1.5rem,3vw,2rem)]">
                            Buried "Contact Us" links generate low-intent noise. Kroma integrates aggressive intake architecture to filter poor fits and prime high-ticket contracts.
                        </p>
<div className="w-full flex items-center gap-2 mt-4 font-mono text-[10px] text-kroma-textSecondary">
<span>INTAKE</span>
<div className="flex-1 border-t border-dashed border-kroma-border group-hover:border-kroma-accent transition-colors"></div>
<span>QUALIFY</span>
<div className="flex-1 border-t border-dashed border-kroma-border group-hover:border-kroma-accent transition-colors"></div>
<span className="text-kroma-textPrimary group-hover:text-kroma-accent transition-colors">CLOSE</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(4rem,8vw,8rem)] relative border-y border-kroma-border bg-kroma-surface/50 backdrop-blur-sm" id="work">
<div className="container-padding max-w-[100rem] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-[clamp(3rem,6vw,5rem)] reveal gap-4">
<div>
<span className="font-mono text-[10px] text-kroma-textSecondary uppercase tracking-widest border border-kroma-border px-2 py-1 mb-[clamp(1rem,2vw,1.5rem)] inline-block">SEC. 03 // PROOF</span>
<h2 className="font-display font-semibold text-fluid-h2 text-kroma-textPrimary tracking-tight leading-[1.1] uppercase">
                            Designed for dominance.
                        </h2>
</div>
<div className="font-mono text-fluid-xs text-kroma-textSecondary text-right">
<div>ASPECT: 21:9</div>
<div>RES: 4K_UHD</div>
</div>
</div>

<div className="reveal delay-100 border border-kroma-border bg-kroma-bg relative aspect-[16/9] lg:aspect-[21/9] group overflow-hidden corner-brackets p-1">
<div className="cb-br"></div>
<div className="absolute inset-1 border border-kroma-border/50 bg-[#050505] overflow-hidden">

<div className="absolute inset-0 blueprint-grid opacity-30 group-hover:scale-105 transition-transform duration-[2s] ease-out"></div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="text-center z-20">
<div className="font-mono text-fluid-massive font-semibold text-kroma-textPrimary tracking-tighter leading-none group-hover:text-kroma-accent transition-colors duration-700 mix-blend-screen">+140%</div>
<div className="font-mono text-fluid-sm text-kroma-textSecondary uppercase tracking-widest mt-4 border border-kroma-border/50 inline-block px-4 py-2 bg-kroma-bg/80 backdrop-blur-md">
                                    [ METRIC: YOY_LEAD_QUALIFICATION ]
                                </div>
</div>
</div>

<div className="absolute left-0 top-0 bottom-0 w-[20%] bg-gradient-to-r from-kroma-accent/5 to-transparent -translate-x-full group-hover:translate-x-[500%] transition-transform duration-[3s] ease-in-out"></div>
</div>

<div className="absolute top-[clamp(1rem,2vw,1.5rem)] left-[clamp(1rem,2vw,1.5rem)] font-mono text-[10px] text-kroma-textPrimary uppercase tracking-widest z-10 flex items-center gap-2">
<span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> REC // CASE_01
                    </div>
<div className="absolute bottom-[clamp(1rem,2vw,1.5rem)] right-[clamp(1rem,2vw,1.5rem)] font-mono text-[10px] text-kroma-textSecondary z-10">
                        FPS: <span className="text-kroma-textPrimary">60.0</span> | MS: <span className="text-kroma-textPrimary">16.6</span>
</div>
</div>
</div>
</section>

<section className="section-padding container-padding max-w-[100rem] mx-auto">
<div className="reveal mb-[clamp(3rem,6vw,4rem)] flex flex-col gap-2">
<span className="font-mono text-[10px] text-kroma-textSecondary uppercase tracking-widest border border-kroma-border px-2 py-1 w-max">SEC. 04 // COMPONENTS</span>
<h2 className="font-display font-semibold text-fluid-h2 text-kroma-textPrimary tracking-tight leading-[1.1] uppercase">
                    Engineered with ruthless precision.
                </h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(1rem,2vw,1.5rem)]">

<div className="reveal premium-card md:col-span-2 border border-kroma-border p-[clamp(2rem,4vw,3rem)] relative flex flex-col justify-between min-h-[clamp(18rem,30vw,24rem)] group corner-brackets">
<div className="cb-br cb-marker transition-colors"></div>
<div className="absolute inset-0 blueprint-grid opacity-20"></div>
<div className="relative z-10 flex justify-between items-start">
<div className="font-mono text-[10px] text-kroma-textSecondary border border-kroma-border px-2 py-1 bg-kroma-bg">[ TYPE: TYPOGRAPHY ]</div>
<iconify-icon className="text-kroma-textSecondary group-hover:text-kroma-textPrimary transition-colors" icon="solar:text-bold-linear" width="2em"></iconify-icon>
</div>
<div className="relative z-10 w-full max-w-md mt-auto">
<h3 className="font-display font-semibold text-fluid-lg text-kroma-textPrimary tracking-tight mb-[clamp(0.5rem,1vw,0.75rem)] uppercase">Neuro-Optimized Text</h3>
<p className="font-mono text-fluid-sm text-kroma-textSecondary leading-relaxed">Calculated leading, tracking, and contrast ratios engineered to hold attention through complex propositions.</p>
</div>
</div>

<div className="reveal delay-100 premium-card md:col-span-1 border border-kroma-border p-[clamp(2rem,4vw,3rem)] relative flex flex-col justify-center items-center text-center min-h-[clamp(18rem,30vw,24rem)] group corner-brackets">
<div className="cb-br cb-marker transition-colors"></div>
<div className="absolute top-[clamp(1rem,2vw,1.5rem)] left-[clamp(1rem,2vw,1.5rem)] font-mono text-[10px] text-kroma-textSecondary border border-kroma-border px-2 py-1 bg-kroma-bg z-10">[ PERF_METRICS ]</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(10rem,15vw,14rem)] h-[clamp(10rem,15vw,14rem)] rounded-full border border-dashed border-kroma-border group-hover:border-kroma-accent/50 transition-colors duration-500">
<div className="absolute inset-2 border border-kroma-border rounded-full opacity-50"></div>
<div className="absolute top-0 left-1/2 w-full h-[1px] bg-kroma-accent/50 origin-left -translate-y-1/2 animate-[spin_4s_linear_infinite] group-hover:bg-kroma-accent"></div>
</div>
<div className="font-mono text-fluid-h2 font-semibold text-kroma-textPrimary tracking-tighter z-10 group-hover:text-kroma-accent transition-colors mt-8">0.4s</div>
<div className="relative z-10 mt-2 font-mono">
<h3 className="text-fluid-base text-kroma-textPrimary uppercase">TTFB Latency</h3>
<p className="text-[10px] text-kroma-textSecondary mt-1">Lighthouse Score: 100</p>
</div>
</div>

<div className="reveal delay-200 premium-card md:col-span-1 border border-kroma-border p-[clamp(2rem,4vw,3rem)] relative flex flex-col justify-between min-h-[clamp(18rem,30vw,24rem)] group corner-brackets">
<div className="cb-br cb-marker transition-colors"></div>
<div className="relative z-10 flex justify-between items-start mb-8">
<div className="font-mono text-[10px] text-kroma-textSecondary border border-kroma-border px-2 py-1 bg-kroma-bg">[ UI: FORMS ]</div>
</div>

<div className="w-full space-y-3 opacity-50 group-hover:opacity-100 transition-opacity duration-500 relative z-10 mb-auto">
<div className="h-[clamp(1.5rem,3vw,2rem)] w-full border border-kroma-border bg-kroma-bg/50"></div>
<div className="h-[clamp(1.5rem,3vw,2rem)] w-[70%] border border-kroma-border bg-kroma-bg/50"></div>
<div className="h-[clamp(2rem,4vw,2.5rem)] w-1/2 bg-kroma-textPrimary group-hover:bg-kroma-accent transition-colors mt-4"></div>
</div>
<div className="relative z-10 mt-auto">
<h3 className="font-display font-semibold text-fluid-lg text-kroma-textPrimary tracking-tight mb-[clamp(0.5rem,1vw,0.75rem)] uppercase">Capture Architecture</h3>
<p className="font-mono text-fluid-sm text-kroma-textSecondary">High-contrast, minimal friction data arrays.</p>
</div>
</div>

<div className="reveal delay-300 premium-card md:col-span-2 border border-kroma-border p-[clamp(2rem,4vw,3rem)] relative flex flex-col justify-between min-h-[clamp(18rem,30vw,24rem)] group corner-brackets">
<div className="cb-br cb-marker transition-colors"></div>
<div className="absolute right-[10%] top-0 bottom-0 w-[40%] flex gap-4 opacity-20 group-hover:opacity-40 transition-opacity">
<div className="w-px h-full bg-kroma-textPrimary"></div>
<div className="w-px h-full bg-kroma-textPrimary"></div>
<div className="w-px h-full bg-kroma-textPrimary"></div>
</div>
<div className="relative z-10 flex justify-between items-start">
<div className="font-mono text-[10px] text-kroma-textSecondary border border-kroma-border px-2 py-1 bg-kroma-bg">[ SYS: SCALABILITY ]</div>
</div>
<div className="relative z-10 w-full max-w-md mt-auto">
<h3 className="font-display font-semibold text-fluid-lg text-kroma-textPrimary tracking-tight mb-[clamp(0.5rem,1vw,0.75rem)] uppercase">Modular Scalability</h3>
<p className="font-mono text-fluid-sm text-kroma-textSecondary leading-relaxed">Built entirely on modern CSS structures. Adapt core components to any client brand identity instantly through global variables.</p>
</div>
</div>
</div>
</section>

<section className="section-padding container-padding max-w-[80rem] mx-auto relative" id="acquire">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-kroma-border to-transparent"></div>
<div className="text-center mb-[clamp(3rem,6vw,5rem)] reveal relative z-10 pt-8">
<span className="font-mono text-[10px] text-kroma-accent uppercase tracking-widest border border-kroma-accent/30 bg-kroma-accent/10 px-2 py-1 mb-[clamp(1rem,2vw,1.5rem)] inline-block">SEC. 05 // ACQUIRE</span>
<h2 className="font-display font-semibold text-fluid-h2 text-kroma-textPrimary tracking-tight leading-[1.1] mb-[clamp(1rem,2vw,1.5rem)] uppercase">
                    Initialize Deployment.
                </h2>
<p className="font-mono text-fluid-base text-kroma-textSecondary">
                    Recoup investment on execution of next protocol.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(2rem,4vw,3rem)] items-stretch">

<div className="reveal corner-brackets premium-card border border-kroma-border bg-kroma-surface/80 p-[clamp(2rem,4vw,3rem)] flex flex-col relative">
<div className="cb-br"></div>
<div className="border-b border-kroma-border pb-[clamp(1.5rem,3vw,2rem)] mb-[clamp(1.5rem,3vw,2rem)]">
<div className="font-mono text-[10px] text-kroma-textSecondary mb-2">[ LICENSE_TYPE: STD ]</div>
<h3 className="font-display font-semibold text-fluid-lg text-kroma-textPrimary uppercase">Standard Node</h3>
<div className="mt-4 font-mono">
<span className="text-fluid-h2 font-semibold text-kroma-textPrimary">$79</span>
<span className="text-kroma-textSecondary text-fluid-xs ml-2 uppercase tracking-widest">USD</span>
</div>
</div>
<ul className="font-mono text-fluid-xs text-kroma-textSecondary flex flex-col gap-[clamp(1rem,2vw,1.25rem)] mb-[clamp(2rem,4vw,3rem)] flex-1">
<li className="flex items-center gap-3"><iconify-icon className="text-kroma-textPrimary" icon="solar:check-circle-linear"></iconify-icon> Core Framer Architecture</li>
<li className="flex items-center gap-3"><iconify-icon className="text-kroma-textPrimary" icon="solar:check-circle-linear"></iconify-icon> Standard Base Components</li>
<li className="flex items-center gap-3"><iconify-icon className="text-kroma-textPrimary" icon="solar:check-circle-linear"></iconify-icon> 6-Month Protocol Updates</li>
</ul>
<button className="w-full border border-kroma-border bg-kroma-bg text-kroma-textPrimary px-[clamp(1.5rem,3vw,2rem)] py-[clamp(0.875rem,1.5vw,1.125rem)] font-mono text-fluid-sm font-semibold uppercase tracking-widest transition-all hover:bg-white/10 active:scale-95 group">
                        [ MOUNT_STD ]
                    </button>
</div>

<div className="reveal delay-200 corner-brackets border border-kroma-accent/50 bg-[#0A0705] p-[clamp(2rem,4vw,3rem)] flex flex-col relative shadow-[0_0_50px_rgba(255,79,0,0.1)] md:-translate-y-4">
<div className="cb-br border-kroma-accent/50"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,79,0,0.05)_1px,transparent_1px)] bg-[length:100%_4px] pointer-events-none opacity-50"></div>
<div className="absolute top-[clamp(2rem,4vw,3rem)] right-[clamp(2rem,4vw,3rem)] border border-kroma-accent text-kroma-accent font-mono text-[10px] font-semibold px-2 py-1 uppercase tracking-widest bg-kroma-bg z-10">
                        REC_NODE
                    </div>
<div className="border-b border-kroma-accent/30 pb-[clamp(1.5rem,3vw,2rem)] mb-[clamp(1.5rem,3vw,2rem)] relative z-10">
<div className="font-mono text-[10px] text-kroma-accent mb-2">[ LICENSE_TYPE: PRO ]</div>
<h3 className="font-display font-semibold text-fluid-lg text-kroma-textPrimary uppercase">Master Protocol</h3>
<div className="mt-4 font-mono">
<span className="text-fluid-h2 font-semibold text-kroma-textPrimary">$129</span>
<span className="text-kroma-textSecondary text-fluid-xs ml-2 uppercase tracking-widest">USD</span>
</div>
</div>
<ul className="font-mono text-fluid-xs text-kroma-textSecondary flex flex-col gap-[clamp(1rem,2vw,1.25rem)] mb-[clamp(2rem,4vw,3rem)] flex-1 relative z-10">
<li className="flex items-center gap-3"><iconify-icon className="text-kroma-accent text-lg" icon="solar:check-circle-linear"></iconify-icon> <span className="text-kroma-textPrimary">All STD Features Inherited</span></li>
<li className="flex items-center gap-3"><iconify-icon className="text-kroma-accent text-lg" icon="solar:check-circle-linear"></iconify-icon> Raw Figma Source Files</li>
<li className="flex items-center gap-3"><iconify-icon className="text-kroma-accent text-lg" icon="solar:check-circle-linear"></iconify-icon> WebGL Interaction Layers</li>
<li className="flex items-center gap-3"><iconify-icon className="text-kroma-accent text-lg" icon="solar:check-circle-linear"></iconify-icon> Lifetime Protocol Updates</li>
</ul>
<button className="w-full bg-kroma-accent text-kroma-bg px-[clamp(1.5rem,3vw,2rem)] py-[clamp(0.875rem,1.5vw,1.125rem)] font-mono text-fluid-sm font-semibold uppercase tracking-widest transition-all hover:bg-kroma-textPrimary hover:shadow-[0_0_30px_rgba(255,79,0,0.4)] active:scale-95 relative z-10">
                        &gt; EXECUTE_PRO
                    </button>
</div>
</div>
</section>

<footer className="relative overflow-hidden bg-kroma-bg border-t border-kroma-border">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_100%,black,transparent)] pointer-events-none"></div>

<div className="border-b border-kroma-border/50 bg-kroma-surface/30 backdrop-blur-sm relative z-20 py-2">
<div className="marquee-h flex gap-12 font-mono text-[10px] text-kroma-textSecondary/60 uppercase tracking-widest">
<span>SYS_DIAGNOSTICS // V.2.0.4</span>
<span className="text-kroma-accent">● SECURE_UPLINK_ESTABLISHED</span>
<span>NO_FAULTS_DETECTED</span>
<span>MEMORY_ALLOC: 42%</span>
<span>SYS_DIAGNOSTICS // V.2.0.4</span>
<span className="text-kroma-accent">● SECURE_UPLINK_ESTABLISHED</span>
<span>NO_FAULTS_DETECTED</span>
<span>MEMORY_ALLOC: 42%</span>
</div>
</div>
<div className="pt-20 pb-10 container-padding max-w-[100rem] mx-auto relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-[clamp(3rem,6vw,4rem)] mb-[clamp(4rem,8vw,6rem)]">

<div className="col-span-2 lg:col-span-2 flex flex-col justify-between pr-0 lg:pr-12">
<div>
<span className="font-display font-semibold tracking-tighter text-kroma-textPrimary text-fluid-lg leading-none block mb-[clamp(1rem,2vw,1.5rem)]">KROMA<span className="text-kroma-accent">_</span></span>
<p className="font-mono text-[10px] text-kroma-textSecondary max-w-xs leading-relaxed uppercase">
                                // Advanced Framer Architecture <br/>
                                // Version 2.0.4 <br/>
                                // Systems Online
                            </p>
</div>

<div className="mt-8 border border-kroma-border bg-[#050505]/80 p-4 corner-brackets relative backdrop-blur-sm group hover:border-kroma-borderHover transition-colors">
<div className="cb-br group-hover:border-kroma-accent/50 transition-colors"></div>
<div className="font-mono text-[10px] text-kroma-textSecondary mb-2 flex justify-between items-center">
<span>[ SYS.TERM ]</span>
<span className="text-kroma-accent animate-pulse">● REC</span>
</div>
<div className="font-mono text-xs text-kroma-textPrimary/80 h-[1.2rem] overflow-hidden relative">
<div className="animate-term text-kroma-accent drop-shadow-[0_0_8px_rgba(255,79,0,0.6)]"></div>
</div>
</div>
</div>

<div className="flex flex-col gap-[clamp(0.75rem,1.5vw,1rem)] font-mono text-fluid-xs text-kroma-textSecondary uppercase">
<span className="text-kroma-textPrimary border-b border-kroma-border pb-2 w-max mb-2">DIR_01</span>
<a className="group relative flex items-center gap-2 hover:text-kroma-textPrimary transition-colors w-max overflow-hidden" href="#work">
<span className="text-kroma-accent opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">&gt;</span>
<span className="transform group-hover:translate-x-1 transition-transform duration-300 ease-out">Work</span>
</a>
<a className="group relative flex items-center gap-2 hover:text-kroma-textPrimary transition-colors w-max overflow-hidden" href="#systems">
<span className="text-kroma-accent opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">&gt;</span>
<span className="transform group-hover:translate-x-1 transition-transform duration-300 ease-out">Systems</span>
</a>
<a className="group relative flex items-center gap-2 hover:text-kroma-textPrimary transition-colors w-max overflow-hidden" href="#acquire">
<span className="text-kroma-accent opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">&gt;</span>
<span className="transform group-hover:translate-x-1 transition-transform duration-300 ease-out">Deploy</span>
</a>
</div>

<div className="flex flex-col gap-[clamp(0.75rem,1.5vw,1rem)] font-mono text-fluid-xs text-kroma-textSecondary uppercase">
<span className="text-kroma-textPrimary border-b border-kroma-border pb-2 w-max mb-2">NETWORKS</span>
<a className="group relative flex items-center gap-2 hover:text-kroma-textPrimary transition-colors w-max overflow-hidden" href="#">
<span className="text-kroma-accent opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">&gt;</span>
<span className="transform group-hover:translate-x-1 transition-transform duration-300 ease-out">X.COM</span>
</a>
<a className="group relative flex items-center gap-2 hover:text-kroma-textPrimary transition-colors w-max overflow-hidden" href="#">
<span className="text-kroma-accent opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">&gt;</span>
<span className="transform group-hover:translate-x-1 transition-transform duration-300 ease-out">LINKEDIN</span>
</a>
<a className="group relative flex items-center gap-2 hover:text-kroma-textPrimary transition-colors w-max overflow-hidden" href="#">
<span className="text-kroma-accent opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">&gt;</span>
<span className="transform group-hover:translate-x-1 transition-transform duration-300 ease-out">GITHUB</span>
</a>
</div>

<div className="flex flex-col gap-[clamp(0.75rem,1.5vw,1rem)] font-mono text-fluid-xs text-kroma-textSecondary uppercase">
<span className="text-kroma-textPrimary border-b border-kroma-border pb-2 w-max mb-2">LEGAL</span>
<a className="group relative flex items-center gap-2 hover:text-kroma-textPrimary transition-colors w-max overflow-hidden" href="#">
<span className="text-kroma-accent opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">&gt;</span>
<span className="transform group-hover:translate-x-1 transition-transform duration-300 ease-out">PRIVACY</span>
</a>
<a className="group relative flex items-center gap-2 hover:text-kroma-textPrimary transition-colors w-max overflow-hidden" href="#">
<span className="text-kroma-accent opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">&gt;</span>
<span className="transform group-hover:translate-x-1 transition-transform duration-300 ease-out">TERMS</span>
</a>
<a className="group relative flex items-center gap-2 hover:text-kroma-textPrimary transition-colors w-max overflow-hidden" href="#">
<span className="text-kroma-accent opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">&gt;</span>
<span className="transform group-hover:translate-x-1 transition-transform duration-300 ease-out">LICENSE</span>
</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center font-mono text-[10px] text-kroma-textSecondary mb-[clamp(1.5rem,3vw,2rem)] uppercase tracking-widest border-t border-kroma-border pt-[clamp(1.5rem,3vw,2rem)]">
<span>SYS.DATE: 2026 // ALL_RIGHTS_RESERVED</span>
<span className="mt-4 md:mt-0 group hover:text-kroma-accent transition-colors cursor-crosshair">COMPILED_FOR_FRAMER</span>
</div>
</div>

<div className="w-full overflow-hidden flex justify-center translate-y-[15%] pointer-events-none opacity-40 mix-blend-screen relative z-0">
<span className="font-display font-semibold text-fluid-massive leading-[0.7] tracking-tighter select-none animate-txt-shimmer">
                    KROMA
                </span>
</div>
</footer>
</main>


    </>
  );
}
