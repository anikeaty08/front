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
'revue-ink': '#111110',
'revue-grey': '#5A5955',
'revue-lime': '#A8FF3E',
'revue-bg': '#F2F0EB',
'revue-surface': '#E8E4DD',
},
fontFamily: {
sans: ['Unbounded', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
animation: {
'marquee-left': 'marquee-left 35s linear infinite',
'marquee-right': 'marquee-right 18s linear infinite',
'pulse-quick': 'pulse-quick 0.3s ease-out',
'spin-slow': 'spin 8s linear infinite',
},
keyframes: {
'marquee-left': {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
'marquee-right': {
'0%': { transform: 'translateX(-50%)' },
'100%': { transform: 'translateX(0%)' },
},
'pulse-quick': {
'0%, 100%': { transform: 'scale(1)' },
'50%': { transform: 'scale(1.04)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Use Reduced Motion Check
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // 1. Live Counter
        const counterEl = document.getElementById('live-counter');
        let count = 2847;
        
        function updateCounter() {
            count++;
            counterEl.innerText = `revue: ${count.toLocaleString()} reviews today`;
            if(!prefersReducedMotion) {
                counterEl.classList.remove('animate-pulse-quick');
                void counterEl.offsetWidth; // trigger reflow
                counterEl.classList.add('animate-pulse-quick');
            }
            setTimeout(updateCounter, Math.random() * 5000 + 3000);
        }
        setTimeout(updateCounter, 2000);

        // 2. Code Scramble Signature
        if(!prefersReducedMotion) {
            setTimeout(() => {
                const el = document.getElementById('scramble-text');
                const finalStr = 'senior engineer';
                const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
                let iterations = 0;
                const maxIterations = 15;
                
                const interval = setInterval(() => {
                    el.innerText = finalStr.split('').map((letter, index) => {
                        if(index < iterations / 1.5) {
                            return finalStr[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    }).join('');
                    
                    if(iterations >= maxIterations * 1.5) {
                        clearInterval(interval);
                        el.innerText = finalStr;
                    }
                    iterations++;
                }, 30);
            }, 600);
        }

        // 3. Scroll Interactions (Intersection Observer)
        const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    
                    // Velocity Meter Logic
                    if(entry.target.id === 'velocity-meter' && !entry.target.dataset.animated && !prefersReducedMotion) {
                        entry.target.dataset.animated = "true";
                        const arc = document.getElementById('meter-arc');
                        const num = document.getElementById('meter-number');
                        
                        // Calculate stroke-dashoffset (283 is full length, want to show ~80%)
                        setTimeout(() => {
                            arc.style.strokeDashoffset = "60"; 
                        }, 100);

                        // Count up
                        let current = 0;
                        const target = 43;
                        const duration = 1800; // ms
                        const stepTime = Math.abs(Math.floor(duration / target));
                        
                        const timer = setInterval(() => {
                            current++;
                            num.innerText = current;
                            if (current == target) clearInterval(timer);
                        }, stepTime);
                    }

                    // Unobserve diff containers after revealing to keep state
                    if(entry.target.classList.contains('diff-container')) {
                        observer.unobserve(entry.target);
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.draw-border, .diff-container, #velocity-meter').forEach(el => {
            if(prefersReducedMotion) {
                el.classList.add('revealed');
            } else {
                observer.observe(el);
            }
        });

        // Hero Word Reveal Stagger
        if(!prefersReducedMotion) {
            document.querySelectorAll('.hero-word').forEach((word, index) => {
                word.style.transform = 'translateY(100%)';
                word.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
                word.style.transitionDelay = `${index * 0.1}s`;
                setTimeout(() => { word.style.transform = 'translateY(0)'; }, 50);
            });
        }

        // 4. Lightweight WebGL Noise Shader (Vanilla JS approximation of Gray-Scott visual texture)
        // Kept simple to ensure stability within single file. Creates a cellular noise pattern.
        if(!prefersReducedMotion && window.innerWidth > 768) {
            const canvas = document.getElementById('glcanvas');
            const gl = canvas.getContext('webgl');

            if (gl) {
                function resize() {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                    gl.viewport(0, 0, canvas.width, canvas.height);
                }
                window.addEventListener('resize', resize);
                resize();

                const vsSource = `
                    attribute vec2 position;
                    varying vec2 vUv;
                    void main() {
                        vUv = position * 0.5 + 0.5;
                        gl_Position = vec4(position, 0.0, 1.0);
                    }
                `;

                // Simplified cellular/noise shader that approximates the reaction-diffusion look statically/slowly
                const fsSource = `
                    precision mediump float;
                    varying vec2 vUv;
                    uniform float uTime;
                    uniform vec2 uMouse;
                    uniform vec2 uResolution;

                    // Pseudo-random function
                    float random (in vec2 st) { return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123); }
                    
                    // Value Noise
                    float noise (in vec2 st) {
                        vec2 i = floor(st); vec2 f = fract(st);
                        float a = random(i); float b = random(i + vec2(1.0, 0.0));
                        float c = random(i + vec2(0.0, 1.0)); float d = random(i + vec2(1.0, 1.0));
                        vec2 u = f * f * (3.0 - 2.0 * f);
                        return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
                    }

                    // FBM
                    float fbm (in vec2 st) {
                        float value = 0.0; float amplitude = .5; float frequency = 0.;
                        for (int i = 0; i < 4; i++) {
                            value += amplitude * noise(st);
                            st *= 2.; amplitude *= .5;
                        }
                        return value;
                    }

                    void main() {
                        vec2 st = gl_FragCoord.xy/uResolution.xy;
                        st.x *= uResolution.x/uResolution.y;

                        // Mouse interaction distortion
                        float dist = distance(st, uMouse);
                        float influence = smoothstep(0.1, 0.0, dist) * 0.5;
                        
                        vec2 q = vec2(0.);
                        q.x = fbm(st + 0.00 * uTime);
                        q.y = fbm(st + vec2(1.0));

                        vec2 r = vec2(0.);
                        r.x = fbm(st + 1.0*q + vec2(1.7,9.2)+ 0.015*uTime + influence);
                        r.y = fbm(st + 1.0*q + vec2(8.3,2.8)+ 0.0126*uTime);

                        float f = fbm(st+r);

                        // Monochrome harsh contrast
                        float c = smoothstep(0.4, 0.6, f);
                        
                        // Output near black where pattern is
                        gl_FragColor = vec4(vec3(0.06), c * 0.8);
                    }
                `;

                function compileShader(type, source) {
                    const shader = gl.createShader(type);
                    gl.shaderSource(shader, source);
                    gl.compileShader(shader);
                    return shader;
                }

                const vertexShader = compileShader(gl.VERTEX_SHADER, vsSource);
                const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fsSource);
                
                const program = gl.createProgram();
                gl.attachShader(program, vertexShader);
                gl.attachShader(program, fragmentShader);
                gl.linkProgram(program);
                gl.useProgram(program);

                const positionBuffer = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
                gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
                
                const positionLocation = gl.getAttribLocation(program, "position");
                gl.enableVertexAttribArray(positionLocation);
                gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

                const uTime = gl.getUniformLocation(program, "uTime");
                const uResolution = gl.getUniformLocation(program, "uResolution");
                const uMouse = gl.getUniformLocation(program, "uMouse");

                let mouseX = 0, mouseY = 0;
                document.addEventListener('mousemove', (e) => {
                    // Normalize mouse to shader coordinates
                    mouseX = e.clientX / window.innerWidth * (window.innerWidth/window.innerHeight);
                    mouseY = 1.0 - (e.clientY / window.innerHeight); // Flip Y
                });

                function render(time) {
                    gl.uniform1f(uTime, time * 0.001);
                    gl.uniform2f(uResolution, canvas.width, canvas.height);
                    gl.uniform2f(uMouse, mouseX, mouseY);
                    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
                    requestAnimationFrame(render);
                }
                requestAnimationFrame(render);
            }
        }
    
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
      

<svg className="noise-overlay">
<filter id="noiseFilter">
<feturbulence basefrequency="0.67" numoctaves="3" stitchtiles="stitch" type="fractalNoise"></feturbulence>
</filter>
<rect filter="url(#noiseFilter)" height="100%" width="100%"></rect>
</svg>

<nav className="fixed top-0 left-0 w-full z-50 border-b-2 border-revue-ink bg-revue-bg/95 backdrop-blur-[8px]">
<div className="max-w-[clamp(68rem,92vw,94rem)] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
<a className="font-900 text-[clamp(0.9rem,1vw,1rem)] tracking-tight" href="#">REVUE</a>
<div className="hidden md:flex items-center gap-8 font-mono text-xs font-500 uppercase">
<a className="nav-link" href="#docs">[DOCS]</a>
<a className="nav-link" href="#pricing">[PRICING]</a>
<a className="nav-link" href="#changelog">[CHANGELOG]</a>
<a className="nav-link flex items-center gap-1 icon-parent" href="#github">[GITHUB <iconify-icon icon="solar:arrow-right-up-linear" width="1em"></iconify-icon>]</a>
</div>
<div className="flex items-center gap-6">

<div className="hidden lg:block font-mono text-[0.6875rem] border-2 border-revue-ink px-3 py-1.5 font-500 bg-revue-surface" id="live-counter">
                    revue: 2,847 reviews today
                </div>
<button className="btn-primary rounded-none px-5 py-2 text-[0.6875rem] font-700 uppercase tracking-widest hidden sm:block h-9">
<div className="text-wrap h-[150%] relative z-10">
<span className="h-full flex items-center">Start Free Trial</span>
<span className="h-full flex items-center text-revue-ink">Start Free Trial</span>
</div>
</button>
<button className="md:hidden p-2 border-2 border-revue-ink hover:bg-revue-ink hover:text-revue-bg transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" width="1.2rem"></iconify-icon>
</button>
</div>
</div>
</nav>
<main className="relative z-10 pt-16">

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute inset-0 graph-paper"></div>
<canvas className="absolute inset-0 w-full h-full opacity-[0.08] mix-blend-multiply hidden md:block" id="glcanvas"></canvas>
</div>

<section className="relative z-10 min-h-[calc(100vh-4rem)] flex items-center py-16 border-b-2 border-revue-ink">
<div className="max-w-[clamp(68rem,92vw,94rem)] mx-auto px-4 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-0">

<div className="lg:col-span-3 flex flex-col justify-center max-w-2xl">
<h1 className="text-[clamp(3.25rem,7vw,7rem)] leading-[0.9] tracking-[-0.02em] uppercase flex flex-col items-start gap-1">
<span className="font-900 block overflow-hidden"><span className="block translate-y-0 hero-word">Code review</span></span>
<span className="font-200 block overflow-hidden"><span className="block translate-y-0 hero-word">that reads like a</span></span>
<span className="font-900 block overflow-hidden text-revue-lime bg-revue-ink px-2 -ml-2"><span className="block translate-y-0 hero-word" id="scramble-text">senior engineer</span></span>
<span className="font-200 block overflow-hidden"><span className="block translate-y-0 hero-word">wrote it.</span></span>
</h1>
<p className="font-200 mt-8 mb-10 text-[clamp(1rem,1.2vw,1.2rem)] leading-relaxed text-revue-ink max-w-[90%]">
                        REVUE analyzes pull requests against your codebase's own patterns. No boilerplate suggestions. No false positives. Actual opinions.
                    </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<button className="btn-primary rounded-none px-8 py-4 text-xs font-700 uppercase tracking-widest h-12">
<div className="text-wrap h-[200%] relative z-10">
<span className="h-full flex items-center">Start Free — No Card</span>
<span className="h-full flex items-center text-revue-ink">Start Free — No Card</span>
</div>
</button>
<a className="font-mono text-xs font-500 uppercase hover:bg-revue-ink hover:text-revue-bg border-b-2 border-transparent hover:border-revue-ink transition-all px-2 py-1 flex items-center gap-2 icon-parent" href="#docs">
                            Read the docs <iconify-icon icon="solar:arrow-right-linear" width="1em"></iconify-icon>
</a>
</div>
<div className="mt-12 font-mono text-[0.6875rem] text-revue-grey flex items-center gap-3">
<div className="w-2 h-2 bg-revue-lime border border-revue-ink rounded-none animate-pulse-quick"></div>
                        Used by engineers at Vercel, Linear, Planetscale, and 840 other teams.
                    </div>
</div>

<div className="lg:col-span-3 lg:-mr-[8vw] xl:-mr-[10vw] relative z-20 diff-container">
<div className="bg-revue-surface border-2 border-revue-ink flex flex-col shadow-[8px_8px_0_0_#111110]">

<div className="border-b-2 border-revue-ink px-4 py-3 flex items-center justify-between bg-revue-bg">
<div className="flex items-center gap-3 font-mono text-xs">
<span className="font-700">src/api/users.ts</span>
<span className="text-revue-grey">|</span>
<span className="bg-revue-ink text-revue-bg px-2 py-0.5">fix/auth-middleware</span>
</div>
<span className="bg-revue-lime text-revue-ink font-900 text-[0.6rem] px-2 py-0.5 tracking-widest border border-revue-ink">REVUE</span>
</div>

<div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto no-scrollbar relative bg-[#111110] text-[#E8E4DD]">
<div className="flex flex-col min-w-max pb-8">
<div className="flex diff-line"><span className="w-8 text-revue-grey select-none">12</span><span className="text-[#5A5955]">  // Get orders for selected users</span></div>
<div className="flex diff-line"><span className="w-8 text-revue-grey select-none">13</span><span>  const enrichedUsers = await Promise.all(</span></div>
<div className="flex diff-line"><span className="w-8 text-revue-grey select-none">14</span><span>    users.map(async (user) =&gt; {</span></div>
<div className="flex diff-line bg-[rgba(255,107,107,0.15)] w-full"><span className="w-8 text-[#FF6B6B] select-none">-</span><span className="text-[#FF6B6B]">      const orders = await db.orders.findOne({</span></div>
<div className="flex diff-line bg-[rgba(255,107,107,0.15)] w-full"><span className="w-8 text-[#FF6B6B] select-none">-</span><span className="text-[#FF6B6B]">        where: { userId: user.id }</span></div>
<div className="flex diff-line bg-[rgba(255,107,107,0.15)] w-full"><span className="w-8 text-[#FF6B6B] select-none">-</span><span className="text-[#FF6B6B]">      });</span></div>
<div className="flex diff-line bg-[rgba(168,255,62,0.15)] w-full"><span className="w-8 text-revue-lime select-none">+</span><span className="text-revue-lime">      // Batch fetch outside loop instead</span></div>
<div className="flex diff-line"><span className="w-8 text-revue-grey select-none">18</span><span>      return { ...user, orders };</span></div>
<div className="flex diff-line"><span className="w-8 text-revue-grey select-none">19</span><span>    })</span></div>
<div className="flex diff-line"><span className="w-8 text-revue-grey select-none">20</span><span>  );</span></div>
<div className="flex diff-line bg-[rgba(168,255,62,0.15)] w-full mt-2"><span className="w-8 text-revue-lime select-none">+</span><span className="text-revue-lime">  const allUserIds = users.map(u =&gt; u.id);</span></div>
<div className="flex diff-line bg-[rgba(168,255,62,0.15)] w-full"><span className="w-8 text-revue-lime select-none">+</span><span className="text-revue-lime">  const allOrders = await db.orders.findMany({</span></div>
<div className="flex diff-line bg-[rgba(168,255,62,0.15)] w-full"><span className="w-8 text-revue-lime select-none">+</span><span className="text-revue-lime">    where: { userId: { in: allUserIds } }</span></div>
<div className="flex diff-line bg-[rgba(168,255,62,0.15)] w-full"><span className="w-8 text-revue-lime select-none">+</span><span className="text-revue-lime">  });</span></div>
</div>

<div className="absolute bottom-4 right-4 sm:right-8 w-64 sm:w-80 bg-revue-bg text-revue-ink border-2 border-revue-ink p-4 shadow-[4px_4px_0_0_#A8FF3E] diff-comment z-30">
<div className="font-sans font-700 text-[0.6875rem] uppercase mb-2 flex items-center justify-between">
<span>REVUE SUGGESTION</span>
<iconify-icon className="text-lg" icon="solar:lightbulb-bolt-linear"></iconify-icon>
</div>
<p className="font-sans font-300 text-xs leading-normal">
                                    N+1 query pattern detected. Executing <span className="font-mono bg-revue-surface px-1">findOne</span> inside a loop creates N database calls. Replace with <span className="font-mono bg-revue-surface px-1">findMany</span> using <span className="font-mono bg-revue-surface px-1">{ in: [...] }</span> before the loop. 
                                </p>
<div className="mt-3 pt-3 border-t border-revue-ink/20 font-mono text-[0.6rem] text-revue-grey">
                                    Est. gain: 87% latency reduction.
                                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="border-b-2 border-revue-ink bg-revue-surface py-3 overflow-hidden flex whitespace-nowrap font-mono text-xs font-500 uppercase">
<div className="animate-marquee-left flex gap-8 min-w-full hover:[animation-play-state:paused] cursor-default">
<span>revue --scan src/ // 847 functions analyzed // 12 suggestions generated // 0 critical issues // avg complexity: 4.2 //</span>
<span>revue --scan src/ // 847 functions analyzed // 12 suggestions generated // 0 critical issues // avg complexity: 4.2 //</span>
<span>revue --scan src/ // 847 functions analyzed // 12 suggestions generated // 0 critical issues // avg complexity: 4.2 //</span>
</div>
<div className="animate-marquee-left flex gap-8 min-w-full hover:[animation-play-state:paused] cursor-default absolute top-3 left-full">
<span>revue --scan src/ // 847 functions analyzed // 12 suggestions generated // 0 critical issues // avg complexity: 4.2 //</span>
<span>revue --scan src/ // 847 functions analyzed // 12 suggestions generated // 0 critical issues // avg complexity: 4.2 //</span>
<span>revue --scan src/ // 847 functions analyzed // 12 suggestions generated // 0 critical issues // avg complexity: 4.2 //</span>
</div>
</div>

<section className="py-[clamp(4.5rem,8vw,9rem)] border-b-2 border-revue-ink px-4 sm:px-8">
<div className="max-w-[clamp(68rem,92vw,94rem)] mx-auto">
<div className="mb-16">
<span className="font-mono text-revue-grey text-sm mb-4 block">// 001</span>
<h2 className="text-[clamp(2rem,4vw,4rem)] font-700 tracking-tight max-w-2xl leading-none">It reads the code. Not just the diff.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">

<div className="flex flex-col gap-8 lg:gap-12">

<div className="bg-revue-bg p-8 sm:p-10 draw-border bg-revue-bg hover:bg-revue-surface transition-colors group">
<div className="border-bottom"></div><div className="border-left"></div>
<div className="font-mono text-xs sm:text-sm font-700 bg-revue-ink text-revue-bg inline-block px-3 py-1 mb-6">
                                detectPatterns()<span className="opacity-0 group-hover:opacity-100 animate-pulse">|</span>
</div>
<h3 className="font-900 text-lg uppercase tracking-tight mb-4">Pattern Recognition.</h3>
<p className="font-300 leading-relaxed text-revue-ink/90">
                                REVUE learns from your codebase's existing patterns before touching a single PR. Suggestions match how <em className="font-700 not-italic border-b border-revue-ink">your</em> team writes code, not how a generic model thinks code should be written.
                            </p>
</div>

<div className="bg-revue-bg p-8 sm:p-10 draw-border bg-revue-bg hover:bg-revue-surface transition-colors group">
<div className="border-bottom"></div><div className="border-left"></div>
<div className="font-mono text-xs sm:text-sm font-700 bg-revue-ink text-revue-bg inline-block px-3 py-1 mb-6">
                                assessRisk(change)<span className="opacity-0 group-hover:opacity-100 animate-pulse">|</span>
</div>
<h3 className="font-900 text-lg uppercase tracking-tight mb-4">Risk Classification.</h3>
<p className="font-300 leading-relaxed text-revue-ink/90">
                                High-risk changes (auth, payments, migrations) get a different review tier. REVUE knows the difference between a CSS fix and a payment flow change.
                            </p>
</div>
</div>

<div className="flex flex-col gap-8 lg:gap-12 md:mt-12">

<div className="bg-revue-bg p-8 sm:p-10 draw-border bg-revue-bg hover:bg-revue-surface transition-colors group">
<div className="border-bottom"></div><div className="border-left"></div>
<div className="font-mono text-xs sm:text-sm font-700 bg-revue-ink text-revue-bg inline-block px-3 py-1 mb-6">
                                checkContext(pr, codebase)<span className="opacity-0 group-hover:opacity-100 animate-pulse">|</span>
</div>
<h3 className="font-900 text-lg uppercase tracking-tight mb-4">Codebase Context.</h3>
<p className="font-300 leading-relaxed text-revue-ink/90">
                                Every suggestion links back to a specific file or function in your repository that establishes precedent. Not opinion — evidence.
                            </p>
</div>

<div className="bg-revue-bg p-8 sm:p-10 draw-border bg-revue-bg hover:bg-revue-surface transition-colors group">
<div className="border-bottom"></div><div className="border-left"></div>
<div className="font-mono text-xs sm:text-sm font-700 bg-revue-ink text-revue-bg inline-block px-3 py-1 mb-6">
                                generateComment(issue)<span className="opacity-0 group-hover:opacity-100 animate-pulse">|</span>
</div>
<h3 className="font-900 text-lg uppercase tracking-tight mb-4">Human-Readable Output.</h3>
<p className="font-300 leading-relaxed text-revue-ink/90">
                                Review comments read like they were written by a thoughtful colleague, not generated by a model that has never merged a PR.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(4.5rem,8vw,9rem)] border-b-2 border-revue-ink bg-revue-ink text-revue-bg px-4 sm:px-8 diff-container">
<div className="max-w-[clamp(68rem,92vw,94rem)] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5">
<span className="font-mono text-revue-grey text-sm mb-4 block">// 002</span>
<h2 className="text-[clamp(2rem,4vw,4rem)] font-700 tracking-tight leading-none mb-6">See what it catches.</h2>
<p className="font-200 text-lg text-revue-surface/80 mb-10 max-w-md">
                        Real code. Real bugs. The kind that slip through human review on the 40th PR of the day.
                    </p>
<button className="btn-primary rounded-none px-6 py-3 text-xs font-700 uppercase tracking-widest border-revue-surface bg-revue-surface text-revue-ink hover:border-revue-lime">
<div className="text-wrap h-[200%] relative z-10">
<span className="h-full flex items-center">Try on Your Repository</span>
<span className="h-full flex items-center text-revue-ink">Try on Your Repository</span>
</div>
</button>
</div>
<div className="lg:col-span-7 relative">
<div className="bg-[#111110] border-2 border-[#E8E4DD] flex flex-col shadow-[8px_8px_0_0_#5A5955]">
<div className="border-b-2 border-[#E8E4DD] px-4 py-3 flex items-center justify-between bg-[#1A1A19]">
<div className="flex items-center gap-3 font-mono text-xs">
<span className="font-700 text-[#E8E4DD]">app/tasks/processor.py</span>
<span className="text-revue-grey">|</span>
<span className="bg-[#E8E4DD] text-[#111110] px-2 py-0.5">feat/background-jobs</span>
</div>
<span className="bg-revue-lime text-revue-ink font-900 text-[0.6rem] px-2 py-0.5 tracking-widest">REVUE</span>
</div>
<div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto no-scrollbar relative min-h-[300px]">
<div className="flex flex-col min-w-max pb-8">
<div className="flex diff-line"><span className="w-8 text-revue-grey select-none">42</span><span className="text-[#E8E4DD]">async def process_batch(job_ids: List[str]):</span></div>
<div className="flex diff-line"><span className="w-8 text-revue-grey select-none">43</span><span className="text-[#E8E4DD]">    results = {}</span></div>
<div className="flex diff-line"><span className="w-8 text-revue-grey select-none">44</span><span className="text-[#E8E4DD]">    for job_id in job_ids:</span></div>
<div className="flex diff-line bg-[rgba(255,107,107,0.15)] w-full"><span className="w-8 text-[#FF6B6B] select-none">-</span><span className="text-[#FF6B6B]">        # Fetch job status from external API</span></div>
<div className="flex diff-line bg-[rgba(255,107,107,0.15)] w-full"><span className="w-8 text-[#FF6B6B] select-none">-</span><span className="text-[#FF6B6B]">        result = fetch_job_result(job_id)</span></div>
<div className="flex diff-line bg-[rgba(255,107,107,0.15)] w-full"><span className="w-8 text-[#FF6B6B] select-none">-</span><span className="text-[#FF6B6B]">        results[job_id] = result</span></div>
<div className="flex diff-line bg-[rgba(168,255,62,0.15)] w-full"><span className="w-8 text-revue-lime select-none">+</span><span className="text-revue-lime">    # Parallelize IO bound fetching</span></div>
<div className="flex diff-line bg-[rgba(168,255,62,0.15)] w-full"><span className="w-8 text-revue-lime select-none">+</span><span className="text-revue-lime">    tasks = [fetch_job_result(jid) for jid in job_ids]</span></div>
<div className="flex diff-line bg-[rgba(168,255,62,0.15)] w-full"><span className="w-8 text-revue-lime select-none">+</span><span className="text-revue-lime">    resolved = await asyncio.gather(*tasks)</span></div>
<div className="flex diff-line bg-[rgba(168,255,62,0.15)] w-full"><span className="w-8 text-revue-lime select-none">+</span><span className="text-revue-lime">    results = dict(zip(job_ids, resolved))</span></div>
<div className="flex diff-line"><span className="w-8 text-revue-grey select-none">51</span><span className="text-[#E8E4DD]">    return results</span></div>
</div>

<div className="absolute bottom-6 right-6 w-72 sm:w-80 bg-revue-surface text-revue-ink p-4 diff-comment z-30">
<div className="font-sans font-700 text-[0.6875rem] uppercase mb-2 flex items-center justify-between">
<span>REVUE ANALYSIS</span>
<iconify-icon className="text-lg" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<p className="font-sans font-300 text-xs leading-normal">
                                    Missing <span className="font-mono bg-revue-bg px-1">await</span> on <span className="font-mono bg-revue-bg px-1">fetch_job_result()</span>. This assigns the coroutine object, not its result. <span className="font-mono bg-revue-bg px-1">results[job_id]</span> will contain <span className="font-mono bg-revue-bg px-1">&lt;coroutine object&gt;</span>. 
                                    <br/><br/>
                                    Replaced with <span className="font-mono bg-revue-bg px-1">asyncio.gather()</span> to also parallelize — current sequential approach adds ~200ms latency per job.
                                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(4.5rem,8vw,9rem)] border-b-2 border-revue-ink px-4 sm:px-8 bg-revue-surface" id="pricing">
<div className="max-w-[clamp(68rem,92vw,94rem)] mx-auto">
<div className="text-center mb-16 flex flex-col items-center">
<span className="font-mono text-revue-grey text-sm mb-4 block">// 003</span>
<h2 className="text-[clamp(2rem,4vw,4rem)] font-700 tracking-tight leading-none mb-4">Pricing for teams that ship.</h2>
<p className="font-mono text-xs text-revue-grey">No per-repo fees. No seat minimums. Cancel by deleting your account.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-revue-ink bg-revue-ink gap-y-2 md:gap-y-0 md:gap-x-2 p-0.5">

<div className="bg-revue-bg p-8 sm:p-10 flex flex-col justify-between draw-border group h-full min-h-[400px]">
<div className="border-bottom"></div><div className="border-left"></div>
<div>
<h3 className="font-900 text-xl uppercase tracking-tight mb-2">Solo</h3>
<div className="font-mono text-sm text-revue-grey mb-6">Free forever</div>
<ul className="font-300 text-sm space-y-3 mb-8">
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-revue-grey" icon="solar:check-square-linear"></iconify-icon> 1 user</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-revue-grey" icon="solar:check-square-linear"></iconify-icon> 50 PRs/month</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-revue-grey" icon="solar:check-square-linear"></iconify-icon> Core pattern recognition</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-revue-grey" icon="solar:check-square-linear"></iconify-icon> GitHub + GitLab</li>
</ul>
</div>
<button className="btn-secondary w-full py-3 text-xs font-700 uppercase tracking-widest text-center mt-auto block">Start Free</button>
</div>

<div className="bg-revue-lime p-8 sm:p-10 flex flex-col justify-between draw-border group h-full min-h-[400px] relative z-10 transform md:scale-[1.02] shadow-[8px_8px_0_0_#111110]">
<div className="border-bottom"></div><div className="border-left"></div>
<div>
<h3 className="font-900 text-xl uppercase tracking-tight mb-2 text-revue-ink">Team</h3>
<div className="font-mono text-sm text-revue-ink/70 mb-6">$29 / user / mo</div>
<ul className="font-300 text-sm space-y-3 mb-8 text-revue-ink">
<li className="flex items-start gap-2 font-400"><iconify-icon className="mt-0.5" icon="solar:check-square-bold"></iconify-icon> Unlimited PRs</li>
<li className="flex items-start gap-2 font-400"><iconify-icon className="mt-0.5" icon="solar:check-square-bold"></iconify-icon> Full codebase context</li>
<li className="flex items-start gap-2 font-400"><iconify-icon className="mt-0.5" icon="solar:check-square-bold"></iconify-icon> Risk classification</li>
<li className="flex items-start gap-2 font-400"><iconify-icon className="mt-0.5" icon="solar:check-square-bold"></iconify-icon> Slack + Linear integration</li>
</ul>
</div>
<button className="w-full py-3 text-xs font-900 uppercase tracking-widest text-center bg-revue-ink text-revue-lime hover:bg-transparent hover:text-revue-ink border-2 border-revue-ink transition-colors mt-auto block">Start Trial</button>
</div>

<div className="bg-revue-bg p-8 sm:p-10 flex flex-col justify-between draw-border group h-full min-h-[400px]">
<div className="border-bottom"></div><div className="border-left"></div>
<div>
<h3 className="font-900 text-xl uppercase tracking-tight mb-2">Enterprise</h3>
<div className="font-mono text-sm text-revue-grey mb-6">Custom</div>
<ul className="font-300 text-sm space-y-3 mb-8">
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-revue-grey" icon="solar:check-square-linear"></iconify-icon> On-premise deployment</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-revue-grey" icon="solar:check-square-linear"></iconify-icon> Custom model fine-tuning</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-revue-grey" icon="solar:check-square-linear"></iconify-icon> SSO / SAML</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-revue-grey" icon="solar:check-square-linear"></iconify-icon> Dedicated SLA</li>
</ul>
</div>
<button className="btn-secondary w-full py-3 text-xs font-700 uppercase tracking-widest text-center mt-auto block">Talk to Us</button>
</div>
</div>
</div>
</section>

<div className="border-b-2 border-revue-ink bg-revue-lime py-6 sm:py-8 overflow-hidden flex whitespace-nowrap font-sans font-900 text-[1.5rem] sm:text-[2.5rem] uppercase tracking-tight text-revue-ink">
<div className="animate-marquee-right flex gap-12 min-w-full">
<span>FREE TRIAL // NO CREDIT CARD // SHIP FASTER // YOUR CODEBASE //</span>
<span>FREE TRIAL // NO CREDIT CARD // SHIP FASTER // YOUR CODEBASE //</span>
</div>
<div className="animate-marquee-right flex gap-12 min-w-full absolute top-6 sm:top-8 right-full">
<span>FREE TRIAL // NO CREDIT CARD // SHIP FASTER // YOUR CODEBASE //</span>
<span>FREE TRIAL // NO CREDIT CARD // SHIP FASTER // YOUR CODEBASE //</span>
</div>
</div>

<section className="py-[clamp(4.5rem,8vw,9rem)] px-4 sm:px-8 bg-revue-bg">
<div className="max-w-3xl mx-auto">
<div className="border-2 border-revue-ink p-8 sm:p-12 md:p-16 draw-border bg-revue-surface shadow-[8px_8px_0_0_#111110]">
<div className="border-bottom"></div><div className="border-left"></div>
<span className="font-mono text-revue-grey text-sm mb-4 block">// 004</span>
<h2 className="text-[clamp(1.75rem,3vw,3rem)] font-700 tracking-tight leading-none mb-4">Your first PR review is free. No setup required.</h2>
<p className="font-300 text-sm sm:text-base text-revue-ink/80 mb-8 max-w-lg">
                        Connect GitHub or GitLab. REVUE scans your last 10 merged PRs to learn your patterns. Then it's ready.
                    </p>
<form className="space-y-4" onsubmit="event.preventDefault();">
<div className="flex flex-col sm:flex-row gap-4">
<input className="flex-1 border-2 border-revue-ink bg-revue-bg px-4 py-3 font-mono text-xs focus:outline-none focus:ring-0 focus:border-revue-lime transition-colors placeholder:text-revue-grey" placeholder="WORK EMAIL" required="" type="email"/>
<select className="border-2 border-revue-ink bg-revue-bg px-4 py-3 font-mono text-xs focus:outline-none focus:border-revue-lime cursor-pointer appearance-none rounded-none w-full sm:w-auto">
<option>GITHUB</option>
<option>GITLAB</option>
<option>BITBUCKET</option>
</select>
</div>
<button className="w-full bg-revue-lime border-2 border-revue-ink py-4 font-900 uppercase tracking-widest text-sm hover:bg-revue-ink hover:text-revue-lime transition-colors" type="submit">
                            Get Started
                        </button>
<p className="font-mono text-[0.65rem] text-revue-grey text-center mt-4">
                            Takes 3 minutes. We don't read your code — we index patterns. SOC 2 Type II.
                        </p>
</form>
</div>

<div className="mt-24 flex flex-col items-center justify-center draw-border p-8 border-2 border-transparent" id="velocity-meter">
<div className="relative w-48 h-48 sm:w-56 sm:h-56">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="45" stroke="#111110" stroke-opacity="0.15" strokeWidth="2"></circle>
<circle className="transition-all duration-[1.8s] ease-out" cx="50" cy="50" fill="none" id="meter-arc" r="45" stroke="#A8FF3E" stroke-dasharray="283" stroke-dashoffset="283" strokeLinecap="square" strokeWidth="4"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center mt-2">
<span className="font-900 text-3xl sm:text-4xl tracking-tight leading-none" id="meter-number">0</span>
<span className="font-mono text-[0.6rem] sm:text-xs text-revue-grey mt-1">min saved per PR</span>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-revue-ink text-revue-bg pt-20 pb-10 px-4 sm:px-8 border-t-2 border-revue-ink relative overflow-hidden z-10">

<div className="absolute -bottom-10 -left-10 font-900 text-[20vw] text-revue-bg opacity-5 pointer-events-none select-none leading-none tracking-tighter">
            REVUE
        </div>
<div className="max-w-[clamp(68rem,92vw,94rem)] mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
<div className="md:col-span-4 lg:col-span-5 flex flex-col items-start">
<div className="font-900 text-2xl tracking-tight mb-8">REVUE</div>
<div className="font-mono text-xs text-revue-grey mb-2">// REVUE UPDATES</div>
<p className="font-300 text-xs mb-4 text-[#E8E4DD]/70 max-w-xs">Releases, improvements, occasional opinions.</p>
<form className="flex w-full max-w-sm border-2 border-revue-bg/20 focus-within:border-revue-lime transition-colors" onsubmit="event.preventDefault();">
<input className="bg-transparent px-3 py-2 text-xs font-mono w-full focus:outline-none placeholder:text-revue-grey" placeholder="email@domain.com" type="email"/>
<button className="bg-revue-bg text-revue-ink font-700 text-[0.65rem] uppercase tracking-widest px-4 hover:bg-revue-lime transition-colors" type="submit">Subscribe</button>
</form>
</div>
<div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 font-mono text-xs">
<div className="flex flex-col gap-3">
<a className="text-revue-grey hover:text-revue-lime transition-colors" href="#">docs</a>
<a className="text-revue-grey hover:text-revue-lime transition-colors" href="#">api reference</a>
<a className="text-revue-grey hover:text-revue-lime transition-colors" href="#">changelog</a>
<a className="text-revue-grey hover:text-revue-lime transition-colors flex items-center gap-1" href="#"><div className="w-1.5 h-1.5 bg-revue-lime rounded-full animate-pulse"></div> status</a>
</div>
<div className="flex flex-col gap-3">
<a className="text-revue-grey hover:text-revue-lime transition-colors" href="#">pricing</a>
<a className="text-revue-grey hover:text-revue-lime transition-colors" href="#">customers</a>
<a className="text-revue-grey hover:text-revue-lime transition-colors" href="#">blog</a>
</div>
<div className="flex flex-col gap-3">
<a className="text-revue-grey hover:text-revue-lime transition-colors" href="#">github ↗</a>
<a className="text-revue-grey hover:text-revue-lime transition-colors" href="#">twitter/x ↗</a>
<a className="text-revue-grey hover:text-revue-lime transition-colors" href="#">discord ↗</a>
</div>
</div>
</div>
<div className="border-t border-revue-bg/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[0.65rem] text-revue-grey">
<div>REVUE © 2026.</div>
<div className="text-center sm:text-right">Built for engineers who've seen everything and are tired of it.</div>
</div>
</div>
</footer>


    </>
  );
}
