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
            
            // --- Custom Cursor ---
            const cursorDot = document.querySelector('.cursor-dot');
            const cursorOutline = document.querySelector('.cursor-outline');
            const interactives = document.querySelectorAll('.interactive-el, a, button, input');
            let mouseX = window.innerWidth / 2;
            let mouseY = window.innerHeight / 2;

            window.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;

                cursorDot.style.left = `${mouseX}px`;
                cursorDot.style.top = `${mouseY}px`;

                cursorOutline.animate({
                    left: `${mouseX}px`,
                    top: `${mouseY}px`
                }, { duration: 150, fill: "forwards" });
            });

            interactives.forEach(el => {
                el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
                el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
            });

            // --- Magnetic Buttons ---
            const magneticBtns = document.querySelectorAll('.magnetic-btn');
            magneticBtns.forEach(btn => {
                btn.addEventListener('mousemove', (e) => {
                    const rect = btn.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    const strength = btn.dataset.strength || 20;
                    
                    btn.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
                });
                btn.addEventListener('mouseleave', () => {
                    btn.style.transform = `translate(0px, 0px)`;
                });
            });

            // --- ASTONISHING WEBGL SHADER BACKGROUND (Dotted Glow Ripple) ---
            const canvas = document.getElementById('webgl-canvas');
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

            if (gl) {
                // Vertex Shader: Pass through
                const vsSource = `
                    attribute vec2 a_position;
                    void main() {
                        gl_Position = vec4(a_position, 0.0, 1.0);
                    }
                `;

                // Fragment Shader: Dotted Grid + Mouse Ripple + Glow
                const fsSource = `
                    precision mediump float;
                    uniform vec2 u_resolution;
                    uniform vec2 u_mouse;
                    uniform float u_time;
                    uniform float u_scrollY;

                    void main() {
                        // Normalize pixel coordinates
                        vec2 st = gl_FragCoord.xy / u_resolution.xy;
                        st.x *= u_resolution.x / u_resolution.y; // Correct aspect ratio
                        
                        // Adjust mouse coordinates to match aspect ratio
                        vec2 mouse = u_mouse / u_resolution.xy;
                        mouse.x *= u_resolution.x / u_resolution.y;
                        mouse.y = 1.0 - mouse.y; // Invert Y for WebGL

                        // Create grid
                        float gridScale = 50.0;
                        vec2 grid = fract(st * gridScale);
                        
                        // Calculate distance from grid cell center to create dots
                        float dotDist = length(grid - vec2(0.5));
                        
                        // Calculate distance to mouse
                        float distToMouse = distance(st, mouse);
                        
                        // Ripple effect math
                        float ripple = sin(distToMouse * 20.0 - u_time * 3.0) * 0.5 + 0.5;
                        float mouseInfluence = smoothstep(0.4, 0.0, distToMouse); // Falloff radius
                        
                        // Dynamic dot radius based on mouse proximity and ripple
                        float baseRadius = 0.05;
                        float dynamicRadius = baseRadius + (mouseInfluence * ripple * 0.15);
                        
                        // Draw dot (anti-aliased)
                        float circle = smoothstep(dynamicRadius, dynamicRadius - 0.02, dotDist);
                        
                        // Color generation (Green #00FF66 / rgb 0,1,0.4)
                        vec3 baseColor = vec3(0.54, 0.56, 0.60) * 0.1; // Base grey dots
                        vec3 highlightColor = vec3(0.0, 1.0, 0.4); // Neon Green
                        
                        // Mix color based on mouse influence
                        vec3 finalColor = mix(baseColor, highlightColor, mouseInfluence * ripple * 1.5);
                        
                        // Add some ambient background glow near mouse
                        vec3 ambientGlow = highlightColor * mouseInfluence * 0.15;
                        
                        gl_FragColor = vec4((finalColor * circle) + ambientGlow, 1.0);
                    }
                `;

                // Compile shader function
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

                // Create program
                const program = gl.createProgram();
                gl.attachShader(program, vertexShader);
                gl.attachShader(program, fragmentShader);
                gl.linkProgram(program);

                if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
                    console.error('Program link error:', gl.getProgramInfoLog(program));
                }

                gl.useProgram(program);

                // Setup Geometry (Fullscreen Quad)
                const positionBuffer = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
                gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
                    -1.0, -1.0,  1.0, -1.0, -1.0,  1.0,
                    -1.0,  1.0,  1.0, -1.0,  1.0,  1.0
                ]), gl.STATIC_DRAW);

                const positionLocation = gl.getAttribLocation(program, "a_position");
                gl.enableVertexAttribArray(positionLocation);
                gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

                // Get uniform locations
                const uResolution = gl.getUniformLocation(program, "u_resolution");
                const uMouse = gl.getUniformLocation(program, "u_mouse");
                const uTime = gl.getUniformLocation(program, "u_time");
                const uScrollY = gl.getUniformLocation(program, "u_scrollY");

                // Resize handler
                function resizeCanvas() {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                    gl.viewport(0, 0, canvas.width, canvas.height);
                }
                window.addEventListener('resize', resizeCanvas);
                resizeCanvas();

                // Mouse interaction for WebGL
                let glMouseX = window.innerWidth / 2;
                let glMouseY = window.innerHeight / 2;
                window.addEventListener('mousemove', (e) => {
                    glMouseX = e.clientX;
                    glMouseY = e.clientY;
                });

                // Render Loop
                let startTime = Date.now();
                function render() {
                    gl.uniform2f(uResolution, canvas.width, canvas.height);
                    gl.uniform2f(uMouse, glMouseX, glMouseY);
                    gl.uniform1f(uTime, (Date.now() - startTime) * 0.001);
                    gl.uniform1f(uScrollY, window.scrollY);

                    gl.drawArrays(gl.TRIANGLES, 0, 6);
                    requestAnimationFrame(render);
                }
                render();
            } else {
                console.warn("WebGL not supported, fallback omitted for brevity.");
            }

            // --- Navbar Scroll Effect ---
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if(window.scrollY > 50) {
                    navbar.classList.add('bg-[#050505]/90', 'backdrop-blur-xl', 'border-b-[#8A8F98]/20');
                    navbar.classList.remove('border-transparent');
                } else {
                    navbar.classList.remove('bg-[#050505]/90', 'backdrop-blur-xl', 'border-b-[#8A8F98]/20');
                    navbar.classList.add('border-transparent');
                }
            });

            // --- Scroll Reveals & Animations ---
            const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        
                        // Counters
                        const counters = entry.target.querySelectorAll('[data-counter]');
                        counters.forEach(counter => {
                            if(!counter.classList.contains('counted')) {
                                startCounter(counter);
                                counter.classList.add('counted');
                            }
                        });

                        // IDE Typewriter
                        if (entry.target.id === 'typewriter-code' && !entry.target.dataset.typed) {
                            entry.target.dataset.typed = 'true';
                            typeWriterEffect();
                        }
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal, #typewriter-code').forEach(el => observer.observe(el));

            // --- Decimal Counters Logic ---
            function startCounter(el) {
                const target = parseFloat(el.getAttribute('data-counter'));
                const decimals = el.getAttribute('data-decimals') ? parseInt(el.getAttribute('data-decimals')) : 0;
                const duration = 2000;
                const startTime = performance.now();

                function update(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                    const current = easeProgress * target;

                    if(decimals > 0) {
                        el.innerText = current.toFixed(decimals);
                    } else {
                        el.innerText = Math.floor(current).toLocaleString();
                    }

                    if (progress < 1) requestAnimationFrame(update);
                    else el.innerText = decimals > 0 ? target.toFixed(decimals) : target.toLocaleString();
                }
                requestAnimationFrame(update);
            }

            // --- Typewriter Effect for IDE ---
            const codeContent = `// Vell Mainnet Initialization
use vell_sdk::prelude::*;

#[program]
pub mod institutional_scale {
    use super::*;

    pub fn execute_parallel(ctx: Context<Scale>) -> Result<()> {
        let block_time = clock::get()?.unix_timestamp;
        
        // Zero execution bottleneck
        require!(ctx.latency < 400_ms, ErrorCode::SubOptimal);
        
        msg!("Deployed via Rust Native SDK.");
        Ok(())
    }
}`;
            
            let charIndex = 0;
            const typeWriterEl = document.getElementById('typewriter-code');
            
            function typeWriterEffect() {
                if (charIndex < codeContent.length) {
                    typeWriterEl.innerHTML += codeContent.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeWriterEffect, Math.random() * 20 + 5);
                }
            }

            // --- Parallax Effect on Terminal Mockup ---
            const terminal = document.getElementById('terminal-mockup');
            terminal.addEventListener('mousemove', (e) => {
                const rect = terminal.getBoundingClientRect();
                const x = e.clientX - rect.left; 
                const y = e.clientY - rect.top;  
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -3; 
                const rotateY = ((x - centerX) / centerX) * 3;

                terminal.firstElementChild.nextElementSibling.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            terminal.addEventListener('mouseleave', () => {
                terminal.firstElementChild.nextElementSibling.style.transform = `perspective(1200px) rotateX(4deg) rotateY(0deg)`;
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
      

<div className="cursor-dot"></div>
<div className="cursor-outline"></div>

<canvas className="fixed inset-0 w-full h-full z-[-1] pointer-events-none opacity-80" id="webgl-canvas"></canvas>

<nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent px-[clamp(1.5rem,5vw,5rem)] py-[clamp(1rem,2vw,1.5rem)] flex items-center justify-between" id="navbar">
<a className="flex items-center gap-3 interactive-el group" href="#">
<svg className="w-[1.75rem] h-[1.75rem]" viewbox="0 0 100 100">
<path className="group-hover:stroke-white transition-colors duration-300" d="M10,20 L50,90 L90,20 L50,40 Z" fill="none" stroke="#00FF66" strokeLinejoin="bevel" strokeWidth="6"></path>
<path className="group-hover:stroke-white transition-colors duration-300" d="M50,90 L50,40" fill="none" stroke="#00FF66" strokeLinejoin="bevel" strokeWidth="6"></path>
<circle className="group-hover:fill-[#00FF66] transition-colors duration-300" cx="50" cy="40" fill="#FFFFFF" r="4"></circle>
</svg>
<span className="font-display font-semibold tracking-[0.15em] text-[clamp(1.125rem,1.5vw,1.25rem)] uppercase mt-1">Vell</span>
</a>
<div className="hidden md:flex items-center gap-[clamp(2rem,3vw,3rem)] font-mono text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase tracking-widest text-[#8A8F98]">
<a className="hover:text-[#FFFFFF] relative py-2 interactive-el group" href="#">
                Core Protocol
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00FF66] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-[#FFFFFF] relative py-2 interactive-el group" href="#">
                Ecosystem
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00FF66] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-[#FFFFFF] relative py-2 interactive-el group" href="#">
                Telemetry
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00FF66] transition-all duration-300 group-hover:w-full"></span>
</a>
</div>
<button className="btn-cyber interactive-el inline-flex items-center justify-center p-[1px] bg-[#00FF66] font-mono text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#050505] uppercase tracking-widest group magnetic-btn" data-strength="20">
<div className="btn-cyber-inner bg-[#00FF66] px-[clamp(1.25rem,2vw,2rem)] py-[clamp(0.75rem,1vw,1rem)] h-full w-full flex items-center justify-center group-hover:bg-white transition-colors relative z-10">
<span className="font-semibold hover-expand-letter">Deploy Node</span>
</div>
</button>
</nav>
<main>

<section className="relative min-h-screen flex items-center px-[clamp(1.5rem,5vw,5rem)] pt-[8rem] pb-[4rem] overflow-hidden">
<div className="w-full max-w-[clamp(70rem,95vw,100rem)] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[clamp(3rem,6vw,6rem)] items-center relative z-10">
<div className="lg:col-span-7 flex flex-col items-start relative z-20">
<div className="reveal status-badge interactive-el px-4 py-1.5 font-mono text-[clamp(0.65rem,0.7vw,0.75rem)] uppercase tracking-[0.2em] text-[#00FF66] mb-[clamp(1.5rem,3vw,2.5rem)] flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-[#00FF66] animate-ping rounded-full shadow-[0_0_8px_#00FF66]"></span>
                        SYSTEM_TELEMETRY: ZERO PACKET LOSS
                    </div>
<h1 className="reveal delay-100 font-display font-semibold text-[clamp(3.5rem,7vw,7.5rem)] leading-[0.85] tracking-tight uppercase text-[#FFFFFF] mb-[clamp(1.5rem,3vw,2rem)]">
                        Scale <br/>Relentlessly. <br/> <span className="text-outline-dark">Zero Excuses.</span>
</h1>
<p className="reveal delay-200 font-normal text-[clamp(1rem,1.2vw,1.125rem)] leading-[1.6] text-[#8A8F98] max-w-[50ch] mb-[clamp(2.5rem,5vw,4rem)]">
                        Stop hemorrhaging capital to network congestion. Vell equips your infrastructure with sub-second finality and absolute parallel execution. Capture massive user growth without artificial bottlenecks.
                    </p>
<div className="reveal delay-300 flex flex-wrap items-center gap-[clamp(1rem,2vw,1.5rem)]">
<button className="btn-cyber interactive-el inline-flex items-center justify-center p-[1px] bg-[#FFFFFF] font-mono text-[clamp(0.8rem,0.9vw,0.9rem)] text-[#050505] uppercase tracking-widest group magnetic-btn" data-strength="30">
<div className="btn-cyber-inner bg-[#FFFFFF] px-[clamp(1.5rem,3vw,2.5rem)] py-[clamp(1rem,1.5vw,1.25rem)] h-full w-full flex items-center justify-center group-hover:bg-[#00FF66] transition-colors relative z-10">
<span className="font-semibold hover-expand-letter">Initialize Builder</span>
</div>
</button>
<button className="btn-cyber interactive-el inline-flex items-center justify-center p-[1px] bg-[#8A8F98]/30 font-mono text-[clamp(0.8rem,0.9vw,0.9rem)] text-[#FFFFFF] uppercase tracking-widest group magnetic-btn" data-strength="20">
<div className="btn-cyber-inner bg-[#050505] px-[clamp(1.5rem,3vw,2.5rem)] py-[clamp(1rem,1.5vw,1.25rem)] h-full w-full flex items-center justify-center group-hover:bg-[#0A0A0C] transition-colors relative z-10 gap-2">
<span className="font-medium group-hover:text-[#00FF66] transition-colors">View Audits</span>
<iconify-icon className="group-hover:text-[#00FF66] transition-colors" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
</button>
</div>
</div>

<div className="lg:col-span-5 reveal delay-300 relative">
<div className="absolute -inset-[30%] bg-[radial-gradient(circle_at_center,rgba(0,255,102,0.05)_0%,transparent_70%)] z-[-1] pointer-events-none"></div>
<div className="w-full glass-panel border-[#8A8F98]/20 p-[1px] bg-gradient-to-b from-[#8A8F98]/20 to-transparent relative shadow-2xl interactive-el" style={{clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 2rem), calc(100% - 2rem) 100%, 0 100%)'}}>
<div className="bg-[#050505] p-6 h-full flex flex-col gap-6" style={{clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 1.95rem), calc(100% - 1.95rem) 100%, 0 100%)'}}>

<div className="flex justify-between items-center border-b border-[#8A8F98]/20 pb-4">
<div className="font-mono text-[clamp(0.65rem,0.7vw,0.75rem)] text-[#8A8F98] uppercase tracking-widest flex items-center gap-2">
<iconify-icon icon="solar:server-square-linear"></iconify-icon> GLOBAL_CONSENSUS_STATE
                                </div>
<div className="flex gap-1">
<div className="w-2 h-2 rounded-sm bg-[#8A8F98]/30"></div>
<div className="w-2 h-2 rounded-sm bg-[#00FF66] animate-pulse"></div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div>
<div className="font-mono text-[clamp(0.6rem,0.65vw,0.7rem)] text-[#8A8F98] uppercase mb-1">Active Validators</div>
<div className="font-mono text-[clamp(1.5rem,2vw,2rem)] text-[#FFFFFF] tracking-tight"><span data-counter="4820">0</span></div>
</div>
<div>
<div className="font-mono text-[clamp(0.6rem,0.65vw,0.7rem)] text-[#8A8F98] uppercase mb-1">Avg Finality</div>
<div className="font-mono text-[clamp(1.5rem,2vw,2rem)] text-[#00FF66] tracking-tight"><span data-counter="380">0</span>ms</div>
</div>
<div className="col-span-2 bg-[#8A8F98]/5 p-3 border border-[#8A8F98]/10">
<div className="flex justify-between font-mono text-[clamp(0.65rem,0.7vw,0.75rem)] mb-2">
<span className="text-[#8A8F98] uppercase">Mempool Load</span>
<span className="text-[#FFFFFF]">0.02%</span>
</div>
<div className="w-full bg-[#050505] h-1.5 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-[#00FF66] w-[2%]"></div>
</div>
</div>
</div>

<div className="flex flex-col gap-2 border-t border-[#8A8F98]/20 pt-4">
<div className="flex justify-between font-mono text-[clamp(0.6rem,0.65vw,0.7rem)] uppercase opacity-50">
<span>Block Hash</span><span>TXs</span>
</div>
<div className="flex justify-between font-mono text-[clamp(0.65rem,0.7vw,0.75rem)] text-[#FFFFFF] hover:text-[#00FF66] transition-colors cursor-crosshair">
<span>0x9f...a1b</span><span className="text-[#8A8F98]">14,209</span>
</div>
<div className="flex justify-between font-mono text-[clamp(0.65rem,0.7vw,0.75rem)] text-[#FFFFFF] hover:text-[#00FF66] transition-colors cursor-crosshair">
<span>0x4c...d8e</span><span className="text-[#8A8F98]">15,002</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(1.5rem,3vw,2rem)] border-y border-[#8A8F98]/20 bg-[#0A0A0C]/80 backdrop-blur-md overflow-hidden relative z-20">
<div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
<div className="marquee-container flex items-center gap-[clamp(4rem,8vw,8rem)]">

<div className="flex items-center gap-[clamp(4rem,8vw,8rem)] font-display font-semibold text-[clamp(1.25rem,1.5vw,1.5rem)] uppercase tracking-widest">
<span className="text-outline">TRUSTED BY $8B+ IN TVL</span>
<iconify-icon className="text-[#00FF66] text-[1.5rem]" icon="solar:shield-check-linear"></iconify-icon>
<span className="font-mono font-medium text-[#8A8F98] hover:text-[#FFFFFF] transition-colors cursor-default">FRAMEWORK</span>
<span className="text-outline">ZERO FRONT-RUNNING</span>
<span className="font-mono font-medium text-[#8A8F98] hover:text-[#FFFFFF] transition-colors cursor-default">A16Z CRYPTO</span>
<iconify-icon className="text-[#00FF66] text-[1.5rem]" icon="solar:server-square-linear"></iconify-icon>
<span className="font-mono font-medium text-[#8A8F98] hover:text-[#FFFFFF] transition-colors cursor-default">PARADIGM</span>
</div>

<div className="flex items-center gap-[clamp(4rem,8vw,8rem)] font-display font-semibold text-[clamp(1.25rem,1.5vw,1.5rem)] uppercase tracking-widest">
<span className="text-outline">TRUSTED BY $8B+ IN TVL</span>
<iconify-icon className="text-[#00FF66] text-[1.5rem]" icon="solar:shield-check-linear"></iconify-icon>
<span className="font-mono font-medium text-[#8A8F98] hover:text-[#FFFFFF] transition-colors cursor-default">FRAMEWORK</span>
<span className="text-outline">ZERO FRONT-RUNNING</span>
<span className="font-mono font-medium text-[#8A8F98] hover:text-[#FFFFFF] transition-colors cursor-default">A16Z CRYPTO</span>
<iconify-icon className="text-[#00FF66] text-[1.5rem]" icon="solar:server-square-linear"></iconify-icon>
<span className="font-mono font-medium text-[#8A8F98] hover:text-[#FFFFFF] transition-colors cursor-default">PARADIGM</span>
</div>
</div>
</section>

<section className="py-[clamp(6rem,12vw,12rem)] px-[clamp(1.5rem,5vw,5rem)] relative border-b border-[#8A8F98]/10">
<div className="w-full max-w-[clamp(70rem,95vw,100rem)] mx-auto relative z-10">
<div className="mb-[clamp(4rem,8vw,6rem)] text-center max-w-[50rem] mx-auto reveal">
<div className="font-mono text-[clamp(0.65rem,0.7vw,0.75rem)] uppercase tracking-[0.2em] text-[#8A8F98] mb-6 flex items-center justify-center gap-3">
<span className="w-8 h-[1px] bg-[#00FF66]"></span> CORE METRICS <span className="w-8 h-[1px] bg-[#00FF66]"></span>
</div>
<h2 className="font-display font-semibold text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[1.05] tracking-tight uppercase mb-6">Dominate The Market,<br/>Not The Mempool.</h2>
<p className="font-normal text-[clamp(0.95rem,1.1vw,1.125rem)] leading-[1.6] text-[#8A8F98]">While competitors buckle under network bloat, Vell's parallel engine executes transactions concurrently. Maximum throughput, predictable fees, zero mathematical concessions.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(1.5rem,2vw,2.5rem)] items-stretch">

<div className="glass-panel p-[clamp(2rem,3vw,3rem)] reveal translate-y-8 hover:-translate-y-2 transition-all duration-500 interactive-el group relative overflow-hidden flex flex-col justify-between border-t border-[#8A8F98]/20 hover:border-[#00FF66] min-h-[clamp(18rem,22vw,22rem)]">
<div className="text-[#8A8F98] group-hover:text-[#00FF66] transition-colors">
<iconify-icon className="text-[clamp(2rem,2.5vw,2.5rem)]" icon="solar:bolt-linear"></iconify-icon>
</div>
<div>
<div className="font-mono text-[clamp(0.7rem,0.75vw,0.875rem)] text-[#8A8F98] uppercase tracking-widest mb-2 group-hover:text-[#FFFFFF] transition-colors">Peak TPS Capacity</div>
<div className="font-mono font-semibold text-[clamp(2.5rem,3.5vw,3.5rem)] leading-none text-[#FFFFFF] tracking-tighter">
<span data-counter="124592">0</span>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,255,102,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity z-[-1]"></div>
</div>

<div className="p-[1px] bg-gradient-to-b from-[#00FF66] to-[#00FF66]/10 reveal delay-100 hover:-translate-y-2 transition-all duration-500 interactive-el group btn-cyber relative z-10 min-h-[clamp(20rem,24vw,24rem)] shadow-[0_0_40px_rgba(0,255,102,0.1)]">
<div className="bg-[#050505] p-[clamp(2rem,3vw,3rem)] h-full w-full flex flex-col justify-between btn-cyber-inner relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMwMEZGNjYiIGZpbGwtb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')] z-0 opacity-20"></div>
<div className="text-[#00FF66] relative z-10">
<iconify-icon className="text-[clamp(2.5rem,3vw,3rem)]" icon="solar:stopwatch-linear"></iconify-icon>
</div>
<div className="relative z-10">
<div className="font-mono text-[clamp(0.7rem,0.75vw,0.875rem)] text-[#00FF66] uppercase tracking-widest mb-2">Immutable Finality</div>
<div className="font-mono font-semibold text-[clamp(3.5rem,4.5vw,4.5rem)] leading-none text-[#FFFFFF] tracking-tighter">
<span data-counter="0.38" data-decimals="2">0.00</span><span className="text-[clamp(1.5rem,2vw,2rem)] text-[#8A8F98]">s</span>
</div>
</div>
</div>
</div>

<div className="glass-panel p-[clamp(2rem,3vw,3rem)] reveal delay-200 translate-y-8 hover:-translate-y-2 transition-all duration-500 interactive-el group relative overflow-hidden flex flex-col justify-between border-t border-[#8A8F98]/20 hover:border-[#00FF66] min-h-[clamp(18rem,22vw,22rem)]">
<div className="text-[#8A8F98] group-hover:text-[#00FF66] transition-colors">
<iconify-icon className="text-[clamp(2rem,2.5vw,2.5rem)]" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div>
<div className="font-mono text-[clamp(0.7rem,0.75vw,0.875rem)] text-[#8A8F98] uppercase tracking-widest mb-2 group-hover:text-[#FFFFFF] transition-colors">Avg TX Cost</div>
<div className="font-mono font-semibold text-[clamp(2.5rem,3.5vw,3.5rem)] leading-none text-[#FFFFFF] tracking-tighter flex items-end">
<span className="text-[clamp(1.5rem,2vw,2rem)] text-[#8A8F98] pb-1">$</span><span data-counter="0.0001" data-decimals="4">0.0000</span>
</div>
</div>

<div className="absolute bottom-0 right-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,255,102,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity z-[-1]"></div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(6rem,12vw,12rem)] px-[clamp(1.5rem,5vw,5rem)] bg-[#0A0A0C] border-b border-[#8A8F98]/10 relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(rgba(138,143,152,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(138,143,152,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
<div className="w-full max-w-[clamp(70rem,95vw,100rem)] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[clamp(4rem,8vw,8rem)] relative z-10">
<div className="lg:col-span-5 relative">
<div className="sticky top-[clamp(6rem,10vw,8rem)] reveal">
<div className="status-badge px-4 py-1.5 font-mono text-[clamp(0.65rem,0.7vw,0.75rem)] uppercase tracking-[0.2em] text-[#8A8F98] mb-6 inline-flex">
                            VS_LEGACY_L1_ARCHITECTURE
                        </div>
<h2 className="font-display font-semibold text-[clamp(2.5rem,4vw,4rem)] leading-[1.05] tracking-tight uppercase mb-6">Eradicate MEV <br/>Bleed.</h2>
<p className="font-normal text-[clamp(0.95rem,1.1vw,1.125rem)] leading-[1.6] text-[#8A8F98] mb-[clamp(2rem,4vw,3rem)] max-w-[40ch]">
                            Legacy blockchains structurally tax users via public mempools and serial processing. Vell’s encrypted base layer isolates transactions, permanently destroying front-running capabilities and retaining value for users.
                        </p>
<a className="interactive-el relative inline-flex items-center gap-3 font-mono text-[clamp(0.8rem,0.85vw,0.875rem)] text-[#FFFFFF] uppercase tracking-widest group border-b border-[#00FF66] pb-1 hover:text-[#00FF66] transition-colors" href="#">
                            Read Architecture Docs
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="lg:col-span-7 flex flex-col gap-[clamp(1rem,1.5vw,1.5rem)] reveal delay-200">

<div className="grid grid-cols-12 gap-4 pb-4 border-b border-[#8A8F98]/20 px-6">
<div className="col-span-6 font-mono text-[clamp(0.65rem,0.7vw,0.75rem)] text-[#8A8F98] uppercase tracking-widest">Protocol Mechanism</div>
<div className="col-span-3 font-mono text-[clamp(0.65rem,0.7vw,0.75rem)] text-[#8A8F98] uppercase tracking-widest opacity-50 text-center">Monolith L1</div>
<div className="col-span-3 font-mono text-[clamp(0.65rem,0.7vw,0.75rem)] text-[#00FF66] uppercase tracking-widest text-center">Vell Network</div>
</div>

<div className="glass-panel p-6 grid grid-cols-12 gap-4 items-center hover:bg-[#00FF66]/5 transition-all interactive-el border-l-2 border-l-transparent hover:border-l-[#00FF66]">
<div className="col-span-6 font-medium text-[clamp(0.9rem,1vw,1rem)] text-[#FFFFFF]">Execution Environment</div>
<div className="col-span-3 font-mono text-[clamp(0.7rem,0.75vw,0.875rem)] text-[#8A8F98] text-center opacity-50">Serial Pipeline</div>
<div className="col-span-3 font-mono text-[clamp(0.7rem,0.75vw,0.875rem)] text-[#00FF66] text-center bg-[#00FF66]/10 py-2 px-1 rounded-sm border border-[#00FF66]/20">Parallel EVM</div>
</div>

<div className="glass-panel p-6 grid grid-cols-12 gap-4 items-center hover:bg-[#00FF66]/5 transition-all interactive-el border-l-2 border-l-transparent hover:border-l-[#00FF66]">
<div className="col-span-6 font-medium text-[clamp(0.9rem,1vw,1rem)] text-[#FFFFFF]">Mempool Visibility</div>
<div className="col-span-3 font-mono text-[clamp(0.7rem,0.75vw,0.875rem)] text-[#8A8F98] text-center opacity-50">Public (MEV Tax)</div>
<div className="col-span-3 font-mono text-[clamp(0.7rem,0.75vw,0.875rem)] text-[#00FF66] text-center bg-[#00FF66]/10 py-2 px-1 rounded-sm border border-[#00FF66]/20">Encrypted</div>
</div>

<div className="glass-panel p-6 grid grid-cols-12 gap-4 items-center hover:bg-[#00FF66]/5 transition-all interactive-el border-l-2 border-l-transparent hover:border-l-[#00FF66]">
<div className="col-span-6 font-medium text-[clamp(0.9rem,1vw,1rem)] text-[#FFFFFF]">State Access</div>
<div className="col-span-3 font-mono text-[clamp(0.7rem,0.75vw,0.875rem)] text-[#8A8F98] text-center opacity-50">Global Lock</div>
<div className="col-span-3 font-mono text-[clamp(0.7rem,0.75vw,0.875rem)] text-[#00FF66] text-center bg-[#00FF66]/10 py-2 px-1 rounded-sm border border-[#00FF66]/20">Granular Lock</div>
</div>

<div className="glass-panel p-6 grid grid-cols-12 gap-4 items-center hover:bg-[#00FF66]/5 transition-all interactive-el border-l-2 border-l-transparent hover:border-l-[#00FF66]">
<div className="col-span-6 font-medium text-[clamp(0.9rem,1vw,1rem)] text-[#FFFFFF]">Throughput Scaling</div>
<div className="col-span-3 font-mono text-[clamp(0.7rem,0.75vw,0.875rem)] text-[#8A8F98] text-center opacity-50">Hardware Bound</div>
<div className="col-span-3 font-mono text-[clamp(0.7rem,0.75vw,0.875rem)] text-[#00FF66] text-center bg-[#00FF66]/10 py-2 px-1 rounded-sm border border-[#00FF66]/20">Moore's Law</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(6rem,12vw,12rem)] px-[clamp(1.5rem,5vw,5rem)] relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,255,102,0.03)_0%,transparent_50%)] z-[-1]"></div>
<div className="w-full max-w-[clamp(70rem,95vw,100rem)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[clamp(4rem,8vw,6rem)] items-center">
<div className="order-2 lg:order-1 reveal">

<div className="glass-panel border-[#8A8F98]/30 overflow-hidden shadow-2xl shadow-black/80 interactive-el btn-cyber" style={{clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 1.5rem), calc(100% - 1.5rem) 100%, 0 100%)'}}>
<div className="bg-[#050505] px-4 py-3 flex items-center justify-between border-b border-[#8A8F98]/20">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#8A8F98]/30 hover:bg-[#FF5F56] transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-[#8A8F98]/30 hover:bg-[#FFBD2E] transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-[#8A8F98]/30 hover:bg-[#27C93F] transition-colors"></div>
</div>
<div className="font-mono text-[clamp(0.6rem,0.7vw,0.75rem)] text-[#8A8F98] flex items-center gap-2">
<iconify-icon icon="solar:code-square-linear"></iconify-icon> src/deploy_scale.rs
                            </div>
</div>
<div className="p-6 bg-[#0A0A0C] font-mono text-[clamp(0.75rem,0.85vw,0.9rem)] leading-[1.8] overflow-x-auto flex relative group">

<div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,102,0.05)_50%)] bg-[length:100%_4px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="text-[#8A8F98]/40 text-right pr-4 select-none flex flex-col border-r border-[#8A8F98]/10 mr-4" id="line-numbers">
                                1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12
                            </div>
<pre className="text-[#8A8F98] m-0"><code id="typewriter-code"></code><span className="inline-block w-2 h-4 bg-[#00FF66] animate-pulse align-middle ml-1"></span></pre>
</div>
</div>
</div>
<div className="order-1 lg:order-2 reveal delay-200">
<div className="status-badge px-4 py-1.5 font-mono text-[clamp(0.65rem,0.7vw,0.75rem)] uppercase tracking-[0.2em] text-[#00FF66] mb-6 inline-flex">
                        DEV_ENV // RUST_NATIVE
                    </div>
<h2 className="font-display font-semibold text-[clamp(2.5rem,4vw,4rem)] leading-[1.05] tracking-tight uppercase mb-6">Deploy Once.<br/>Scale Infinitely.</h2>
<p className="font-normal text-[clamp(0.95rem,1.1vw,1.125rem)] leading-[1.6] text-[#8A8F98] mb-8">
                        Achieve EVM equivalence without inheriting its limitations. Native Rust compilation. No proprietary garbage collection pausing your execution. Ship complex logic securely with Vell's zero-config SDK.
                    </p>
<ul className="space-y-4 font-mono text-[clamp(0.8rem,0.85vw,0.875rem)] text-[#FFFFFF] mb-8">
<li className="flex items-center gap-3 bg-[#8A8F98]/5 p-3 border border-[#8A8F98]/10">
<iconify-icon className="text-[#00FF66] text-xl" icon="solar:check-circle-linear"></iconify-icon> Drop-in replacement for Hardhat/Foundry
                        </li>
<li className="flex items-center gap-3 bg-[#8A8F98]/5 p-3 border border-[#8A8F98]/10">
<iconify-icon className="text-[#00FF66] text-xl" icon="solar:check-circle-linear"></iconify-icon> Sub-millisecond local testnet replication
                        </li>
<li className="flex items-center gap-3 bg-[#8A8F98]/5 p-3 border border-[#8A8F98]/10">
<iconify-icon className="text-[#00FF66] text-xl" icon="solar:check-circle-linear"></iconify-icon> Automated formal verification pipelines
                        </li>
</ul>
<button className="btn-cyber interactive-el inline-flex items-center justify-center p-[1px] bg-[#00FF66] font-mono text-[clamp(0.8rem,0.85vw,0.9rem)] text-[#050505] uppercase tracking-widest group magnetic-btn" data-strength="20">
<div className="btn-cyber-inner bg-[#00FF66] px-6 py-3 h-full w-full flex items-center justify-center group-hover:bg-white transition-colors relative z-10">
<span className="font-semibold hover-expand-letter">Install SDK</span>
</div>
</button>
</div>
</div>
</section>

<section className="py-[clamp(6rem,12vw,12rem)] px-[clamp(1.5rem,5vw,5rem)] bg-[#0A0A0C] border-y border-[#8A8F98]/10 relative z-10">
<div className="w-full max-w-[clamp(70rem,95vw,100rem)] mx-auto">
<div className="mb-[clamp(4rem,6vw,8rem)] flex flex-col md:flex-row justify-between items-end gap-6 reveal">
<div className="max-w-[40rem]">
<div className="font-mono text-[clamp(0.65rem,0.7vw,0.75rem)] uppercase tracking-[0.2em] text-[#8A8F98] mb-6 flex items-center gap-3">
<span className="w-8 h-[1px] bg-[#00FF66]"></span> SECTOR_DEPLOYMENTS
                        </div>
<h2 className="font-display font-semibold text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.05] tracking-tight uppercase">Engineered for High-Stakes Capital.</h2>
</div>
<p className="font-normal text-[clamp(0.95rem,1.1vw,1.125rem)] text-[#8A8F98] max-w-[25rem] pb-2">Designed specifically to handle the volume and complexity required by modern institutional finance and persistent applications.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-[clamp(1.5rem,2vw,2.5rem)]">

<div className="glass-panel group interactive-el reveal border-[#8A8F98]/20 hover:border-[#00FF66]/50 transition-colors flex flex-col btn-cyber overflow-hidden" style={{clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 2rem), calc(100% - 2rem) 100%, 0 100%)'}}>

<div className="bg-[#050505] h-[14rem] w-full border-b border-[#8A8F98]/20 p-4 relative overflow-hidden">
<div className="flex justify-between items-center mb-4">
<div className="font-mono text-[clamp(0.6rem,0.65vw,0.7rem)] text-[#8A8F98]">RWA_VAULT_01</div>
<div className="px-2 py-0.5 border border-[#00FF66]/30 text-[#00FF66] text-[10px] font-mono bg-[#00FF66]/10">SEC COMPLIANT</div>
</div>
<div className="font-mono text-2xl text-white mb-1">$45,280,000.00</div>
<div className="font-mono text-xs text-[#00FF66] mb-4">+4.2% YIELD (30D)</div>

<div className="absolute bottom-0 left-0 w-full h-16 flex items-end gap-1 px-4 opacity-70">
<div className="w-full bg-[#8A8F98]/20 h-[30%]"></div>
<div className="w-full bg-[#8A8F98]/20 h-[50%]"></div>
<div className="w-full bg-[#8A8F98]/20 h-[40%]"></div>
<div className="w-full bg-[#00FF66] h-[70%] relative"><div className="absolute -top-1 left-0 w-full h-[1px] bg-[#00FF66] shadow-[0_0_8px_#00FF66]"></div></div>
<div className="w-full bg-[#8A8F98]/20 h-[60%]"></div>
<div className="w-full bg-[#8A8F98]/20 h-[80%]"></div>
</div>
</div>
<div className="p-6 bg-[#0A0A0C] flex-1">
<h3 className="font-display font-medium text-[clamp(1.25rem,1.5vw,1.5rem)] uppercase mb-2 text-[#FFFFFF]">Real World Assets</h3>
<p className="font-normal text-[clamp(0.85rem,0.9vw,0.95rem)] text-[#8A8F98] leading-[1.6]">Settle millions in institutional capital with immutable cryptographic guarantees and compliance-ready state layers built directly into the protocol.</p>
</div>
</div>

<div className="glass-panel group interactive-el reveal delay-100 border-[#8A8F98]/20 hover:border-[#00FF66]/50 transition-colors flex flex-col btn-cyber overflow-hidden" style={{clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 2rem), calc(100% - 2rem) 100%, 0 100%)'}}>

<div className="bg-[#050505] h-[14rem] w-full border-b border-[#8A8F98]/20 p-4 relative overflow-hidden flex flex-col justify-between">
<div className="flex justify-between text-[10px] font-mono text-[#8A8F98] border-b border-[#8A8F98]/20 pb-2">
<span>PRICE (USDC)</span><span>SIZE (VELL)</span>
</div>

<div className="flex flex-col gap-1 text-xs font-mono">
<div className="flex justify-between text-[#FF5F56] relative"><div className="absolute right-0 top-0 h-full bg-[#FF5F56]/10 w-[80%]"></div><span className="z-10">1.4820</span><span className="z-10">14,200.5</span></div>
<div className="flex justify-between text-[#FF5F56] relative"><div className="absolute right-0 top-0 h-full bg-[#FF5F56]/10 w-[60%]"></div><span className="z-10">1.4815</span><span className="z-10">8,450.0</span></div>
</div>

<div className="text-center font-mono text-sm text-[#FFFFFF] py-1 border-y border-[#8A8F98]/10 bg-[#8A8F98]/5">1.4810 <span className="text-[#8A8F98] text-[10px] ml-2">SPREAD 0.0005</span></div>

<div className="flex flex-col gap-1 text-xs font-mono">
<div className="flex justify-between text-[#00FF66] relative"><div className="absolute right-0 top-0 h-full bg-[#00FF66]/10 w-[90%]"></div><span className="z-10">1.4805</span><span className="z-10">22,100.2</span></div>
<div className="flex justify-between text-[#00FF66] relative"><div className="absolute right-0 top-0 h-full bg-[#00FF66]/10 w-[40%]"></div><span className="z-10">1.4800</span><span className="z-10">4,120.8</span></div>
</div>
</div>
<div className="p-6 bg-[#0A0A0C] flex-1">
<h3 className="font-display font-medium text-[clamp(1.25rem,1.5vw,1.5rem)] uppercase mb-2 text-[#FFFFFF]">High-Frequency DeFi</h3>
<p className="font-normal text-[clamp(0.85rem,0.9vw,0.95rem)] text-[#8A8F98] leading-[1.6]">Power fully on-chain limit order books with execution latency matching centralized exchanges. Zero trade collisions via deterministic state access.</p>
</div>
</div>

<div className="glass-panel group interactive-el reveal delay-200 border-[#8A8F98]/20 hover:border-[#00FF66]/50 transition-colors flex flex-col btn-cyber overflow-hidden" style={{clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 2rem), calc(100% - 2rem) 100%, 0 100%)'}}>

<div className="bg-[#050505] h-[14rem] w-full border-b border-[#8A8F98]/20 p-4 relative overflow-hidden flex items-center justify-center">

<div className="relative w-24 h-24 rounded-full border border-[#00FF66]/30 flex items-center justify-center">
<div className="absolute inset-0 rounded-full border border-[#00FF66] border-t-transparent animate-spin"></div>
<div className="absolute inset-2 rounded-full border border-[#8A8F98]/30 border-b-transparent animate-[spin_3s_linear_reverse_infinite]"></div>
<div className="text-center">
<div className="font-mono text-[10px] text-[#8A8F98]">SYNC</div>
<div className="font-mono text-sm text-[#00FF66]">14ms</div>
</div>
</div>

<div className="absolute right-4 bottom-4 flex flex-col items-end gap-1 font-mono text-[8px] text-[#8A8F98] opacity-70">
<div>STATE_UPDATE_0x4F OK</div>
<div>PLAYER_POS_SYNC OK</div>
<div>ASSET_MINT_TX PENDING</div>
</div>
</div>
<div className="p-6 bg-[#0A0A0C] flex-1">
<h3 className="font-display font-medium text-[clamp(1.25rem,1.5vw,1.5rem)] uppercase mb-2 text-[#FFFFFF]">Persistent App-Chains</h3>
<p className="font-normal text-[clamp(0.85rem,0.9vw,0.95rem)] text-[#8A8F98] leading-[1.6]">Process millions of micro-transactions per second to support persistent, complex game worlds natively without spinning up fragmented infrastructure.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(8rem,12vw,15rem)] px-[clamp(1.5rem,5vw,5rem)] relative overflow-hidden flex flex-col items-center border-t border-[#8A8F98]/10 bg-[#050505]">
<div className="text-center mb-[clamp(4rem,6vw,6rem)] reveal relative z-10 max-w-[50rem]">
<div className="font-mono text-[clamp(0.65rem,0.7vw,0.75rem)] uppercase tracking-[0.2em] text-[#8A8F98] mb-6 flex items-center justify-center gap-3">
<span className="w-8 h-[1px] bg-[#00FF66]"></span> NETWORK_SUPERVISION <span className="w-8 h-[1px] bg-[#00FF66]"></span>
</div>
<h2 className="font-display font-semibold text-[clamp(3rem,5vw,5.5rem)] leading-[0.95] tracking-tight uppercase mb-6 text-[#FFFFFF]">Institutional<br/>Command Center.</h2>
<p className="font-normal text-[clamp(0.95rem,1.1vw,1.125rem)] leading-[1.6] text-[#8A8F98]">
                    Monitor real-time liquidity depth, individual node health, and protocol-level bridge flows. Total transparency engineered for enterprise risk-management requirements.
                </p>
</div>

<div className="w-full max-w-[clamp(70rem,95vw,90rem)] relative reveal delay-200 interactive-el" id="terminal-mockup">

<div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[90%] h-[30%] bg-[#00FF66] blur-[120px] opacity-10 z-[-1] pointer-events-none"></div>
<div className="glass-panel border-[#8A8F98]/30 overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,1)] relative bg-[#0A0A0C]" style={{transform: 'perspective(1200px) rotateX(4deg)', transformOrigin: 'bottom center', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'}}>

<div className="bg-[#050505] border-b border-[#8A8F98]/20 px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="font-mono text-[#FFFFFF] font-medium text-[clamp(0.7rem,0.75vw,0.8rem)] flex items-center gap-2">
<iconify-icon className="text-[#00FF66]" icon="solar:chart-square-linear"></iconify-icon> VELL_COMMAND_V3.0
                            </div>
</div>
<div className="flex items-center gap-6 font-mono text-[clamp(0.6rem,0.65vw,0.7rem)] text-[#8A8F98] uppercase">
<div className="flex items-center gap-2">
<span>LIVE FEED</span>
<input checked="" className="custom-toggle" type="checkbox"/>
</div>
<span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#00FF66] shadow-[0_0_8px_#00FF66]"></span> SYNCED_TO_MAINNET</span>
</div>
</div>

<div className="p-[clamp(1.5rem,3vw,3rem)] grid grid-cols-1 md:grid-cols-12 gap-6 relative">

<div className="absolute inset-0 bg-[linear-gradient(rgba(138,143,152,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(138,143,152,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none z-0"></div>

<div className="md:col-span-8 flex flex-col gap-6 relative z-10">

<div className="border border-[#8A8F98]/20 bg-[#050505]/80 p-6 h-[clamp(15rem,20vw,20rem)] relative overflow-hidden group">
<div className="flex justify-between items-start mb-4 relative z-10">
<div className="font-mono text-[#8A8F98] text-[clamp(0.65rem,0.7vw,0.75rem)] uppercase tracking-widest">Global Block Propagation</div>
<div className="font-mono text-[#00FF66] text-[clamp(0.8rem,0.9vw,1rem)] bg-[#00FF66]/10 px-2 py-1 border border-[#00FF66]/20">P99 &lt; 380ms</div>
</div>

<svg className="absolute bottom-0 left-0 w-full h-[75%]" preserveaspectratio="none" viewbox="0 0 100 100">
<defs>
<lineargradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#00FF66', stopOpacity: '0.2'}}></stop>
<stop offset="100%" style={{stopColor: '#00FF66', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
<path className="group-hover:opacity-100 transition-opacity duration-700" d="M0,100 L0,50 Q10,30 20,45 T40,20 T60,35 T80,10 T100,20 L100,100 Z" fill="url(#grad1)"></path>
<path className="shadow-[0_0_10px_#00FF66] filter drop-shadow-[0_0_5px_rgba(0,255,102,0.8)]" d="M0,50 Q10,30 20,45 T40,20 T60,35 T80,10 T100,20" fill="none" stroke="#00FF66" strokeWidth="0.5"></path>

<line stroke="#FFFFFF" stroke-opacity="0.2" strokeWidth="1" x1="0" x2="0" y1="0" y2="100">
<animate attributename="x1" dur="4s" repeatcount="indefinite" values="0;100"></animate>
<animate attributename="x2" dur="4s" repeatcount="indefinite" values="0;100"></animate>
</line>
</svg>
</div>

<div className="grid grid-cols-3 gap-6">
<div className="border border-[#8A8F98]/20 bg-[#050505]/80 p-5 hover:border-[#00FF66]/50 transition-colors cursor-default">
<div className="font-mono text-[#8A8F98] text-[clamp(0.6rem,0.65vw,0.7rem)] uppercase mb-2">Network TVL</div>
<div className="font-mono text-[#FFFFFF] text-[clamp(1.1rem,1.25vw,1.5rem)] tracking-tight">$8,421.1M</div>
</div>
<div className="border border-[#8A8F98]/20 bg-[#050505]/80 p-5 hover:border-[#00FF66]/50 transition-colors cursor-default">
<div className="font-mono text-[#8A8F98] text-[clamp(0.6rem,0.65vw,0.7rem)] uppercase mb-2">Total Staked</div>
<div className="font-mono text-[#FFFFFF] text-[clamp(1.1rem,1.25vw,1.5rem)] tracking-tight">64.2%</div>
</div>
<div className="border border-[#8A8F98]/20 bg-[#050505]/80 p-5 hover:border-[#00FF66]/50 transition-colors cursor-default relative overflow-hidden">
<div className="font-mono text-[#8A8F98] text-[clamp(0.6rem,0.65vw,0.7rem)] uppercase mb-2">Active Epoch</div>
<div className="font-mono text-[#FFFFFF] text-[clamp(1.1rem,1.25vw,1.5rem)] tracking-tight">#14,092</div>
<div className="absolute bottom-0 left-0 h-1 bg-[#00FF66] w-[60%]"></div>
</div>
</div>
</div>

<div className="md:col-span-4 border border-[#8A8F98]/20 bg-[#050505]/80 p-6 flex flex-col h-full relative z-10">
<div className="flex justify-between items-center mb-4 border-b border-[#8A8F98]/20 pb-2">
<div className="font-mono text-[#8A8F98] text-[clamp(0.65rem,0.7vw,0.75rem)] uppercase tracking-widest">Verified Execution</div>
<div className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse"></div>
</div>
<div className="flex-1 overflow-hidden flex flex-col gap-2 font-mono text-[clamp(0.65rem,0.7vw,0.75rem)] relative">

<div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none"></div>

<div className="flex justify-between items-center text-[#FFFFFF] bg-[#00FF66]/10 p-2 border-l-2 border-[#00FF66]">
<span className="text-[#00FF66]">0x8f...3a2</span> <span>VERIFIED</span>
</div>
<div className="flex justify-between items-center text-[#FFFFFF] p-2 border-l-2 border-[#8A8F98]/30 hover:bg-[#8A8F98]/5">
<span className="text-[#8A8F98]">0x2b...9c1</span> <span>0.05s</span>
</div>
<div className="flex justify-between items-center text-[#FFFFFF] p-2 border-l-2 border-[#8A8F98]/30 hover:bg-[#8A8F98]/5">
<span className="text-[#8A8F98]">0x4d...1e8</span> <span>0.12s</span>
</div>
<div className="flex justify-between items-center text-[#FFFFFF] p-2 border-l-2 border-[#8A8F98]/30 hover:bg-[#8A8F98]/5">
<span className="text-[#8A8F98]">0x9a...7f4</span> <span>0.24s</span>
</div>
<div className="flex justify-between items-center text-[#FFFFFF] p-2 border-l-2 border-[#8A8F98]/30 hover:bg-[#8A8F98]/5">
<span className="text-[#8A8F98]">0x1c...5b9</span> <span>0.38s</span>
</div>
<div className="flex justify-between items-center text-[#FFFFFF] p-2 border-l-2 border-[#8A8F98]/30 hover:bg-[#8A8F98]/5">
<span className="text-[#8A8F98]">0xe3...2d1</span> <span>0.41s</span>
</div>
<div className="flex justify-between items-center text-[#FFFFFF] p-2 border-l-2 border-[#8A8F98]/30 hover:bg-[#8A8F98]/5">
<span className="text-[#8A8F98]">0x7f...8a0</span> <span>0.45s</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(8rem,15vw,15rem)] px-[clamp(1.5rem,5vw,5rem)] border-t border-[#00FF66]/30 bg-[#00FF66] text-[#050505] relative overflow-hidden group interactive-el cursor-crosshair">

<div className="absolute inset-0 bg-[linear-gradient(rgba(5,5,5,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(5,5,5,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
<div className="w-full max-w-[clamp(70rem,95vw,100rem)] mx-auto relative z-10 flex flex-col items-center text-center">
<div className="font-mono text-[clamp(0.7rem,0.75vw,0.875rem)] uppercase tracking-[0.2em] text-[#050505] mb-6 font-semibold">
                    [ SYSTEM_READY ]
                </div>
<h2 className="font-display font-semibold text-[clamp(3.5rem,8vw,8rem)] leading-[0.85] tracking-tight uppercase mb-10 transition-transform duration-500 group-hover:scale-[1.02]">
                    Stop Waiting.<br/>Start Scaling.
                </h2>
<div className="flex flex-wrap items-center justify-center gap-[clamp(1rem,2vw,1.5rem)]">
<button className="btn-cyber relative inline-flex items-center justify-center px-[clamp(2.5rem,4vw,3.5rem)] py-[clamp(1.25rem,2vw,1.5rem)] font-mono font-bold text-[clamp(0.9rem,1vw,1rem)] text-[#FFFFFF] bg-[#050505] uppercase tracking-widest transition-all hover:bg-white hover:text-[#050505] magnetic-btn shadow-2xl" data-strength="40">
<span className="relative z-10 hover-expand-letter">Deploy To Mainnet</span>
</button>
</div>
</div>
</section>
</main>

<footer className="relative bg-[#050505] pt-[clamp(6rem,10vw,10rem)] pb-[clamp(3rem,4vw,4rem)] overflow-hidden">
<div className="w-full max-w-[clamp(70rem,95vw,100rem)] mx-auto px-[clamp(1.5rem,5vw,5rem)] grid grid-cols-1 lg:grid-cols-12 gap-[clamp(4rem,6vw,6rem)]">

<div className="lg:col-span-5 flex flex-col justify-between">
<div className="mb-12">
<a className="flex items-center gap-3 interactive-el group mb-6 inline-flex" href="#">
<svg className="w-[2rem] h-[2rem]" viewbox="0 0 100 100">
<path d="M10,20 L50,90 L90,20 L50,40 Z" fill="none" stroke="#00FF66" strokeLinejoin="bevel" strokeWidth="6"></path>
<path d="M50,90 L50,40" fill="none" stroke="#00FF66" strokeLinejoin="bevel" strokeWidth="6"></path>
<circle cx="50" cy="40" fill="#FFFFFF" r="4"></circle>
</svg>
<span className="font-display font-semibold tracking-[0.15em] text-[1.5rem] uppercase mt-1">Vell</span>
</a>
<p className="font-mono text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#8A8F98] max-w-[35ch] leading-[1.6]">The uncompromising foundation for relentless decentralized scale. Zero bottlenecks. Zero excuses.</p>
</div>
<div>
<div className="font-mono text-[clamp(0.7rem,0.75vw,0.75rem)] text-[#8A8F98] uppercase tracking-widest mb-4">Subscribe for Intel.</div>
<form className="flex items-end gap-4 relative group max-w-[25rem]">
<input className="w-full bg-transparent border-b border-[#8A8F98]/30 pb-3 font-mono text-[clamp(0.8rem,0.9vw,1rem)] text-[#FFFFFF] placeholder-[#8A8F98]/50 focus:outline-none focus:border-[#00FF66] transition-colors rounded-none interactive-el" placeholder="ENTER EMAIL ADDRESS" type="email"/>
<button className="pb-3 text-[#8A8F98] hover:text-[#00FF66] transition-colors interactive-el" type="submit">
<iconify-icon className="text-2xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>

<div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 font-mono text-[clamp(0.75rem,0.8vw,0.875rem)]">
<div className="flex flex-col gap-4">
<span className="text-[#FFFFFF] uppercase mb-2">Protocol</span>
<a className="text-[#8A8F98] hover:text-[#00FF66] transition-colors interactive-el" href="#">Architecture</a>
<a className="text-[#8A8F98] hover:text-[#00FF66] transition-colors interactive-el" href="#">Tokenomics</a>
<a className="text-[#8A8F98] hover:text-[#00FF66] transition-colors interactive-el" href="#">Whitepaper</a>
<a className="text-[#8A8F98] hover:text-[#00FF66] transition-colors interactive-el" href="#">Security Audits</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-[#FFFFFF] uppercase mb-2">Developers</span>
<a className="text-[#8A8F98] hover:text-[#00FF66] transition-colors interactive-el" href="#">Documentation</a>
<a className="text-[#8A8F98] hover:text-[#00FF66] transition-colors interactive-el" href="#">Github Repo</a>
<a className="text-[#8A8F98] hover:text-[#00FF66] transition-colors interactive-el" href="#">Testnet Faucet</a>
<a className="text-[#8A8F98] hover:text-[#00FF66] transition-colors interactive-el" href="#">Grants Program</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-[#FFFFFF] uppercase mb-2">Ecosystem</span>
<a className="text-[#8A8F98] hover:text-[#00FF66] transition-colors interactive-el" href="#">Explorer</a>
<a className="text-[#8A8F98] hover:text-[#00FF66] transition-colors interactive-el" href="#">Governance</a>
<a className="text-[#8A8F98] hover:text-[#00FF66] transition-colors interactive-el" href="#">Twitter (X)</a>
<a className="text-[#8A8F98] hover:text-[#00FF66] transition-colors interactive-el" href="#">Discord Server</a>
</div>
</div>
</div>
<div className="w-full max-w-[clamp(70rem,95vw,100rem)] mx-auto px-[clamp(1.5rem,5vw,5rem)] mt-[clamp(4rem,6vw,8rem)] pt-8 border-t border-[#8A8F98]/20 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="font-mono text-[clamp(0.6rem,0.65vw,0.75rem)] text-[#8A8F98] uppercase tracking-widest flex items-center gap-2">
                © 2026 VELL LABS. INC. ALL SYSTEMS NOMINAL.
            </div>
<div className="font-mono text-[clamp(0.6rem,0.65vw,0.75rem)] text-[#8A8F98] uppercase flex gap-4">
<a className="hover:text-[#FFFFFF] transition-colors" href="#">Privacy</a>
<a className="hover:text-[#FFFFFF] transition-colors" href="#">Terms</a>
</div>
</div>
</footer>



    </>
  );
}
