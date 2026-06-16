import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        import { Renderer, Program, Mesh, Color, Triangle } from 'https://cdn.jsdelivr.net/npm/ogl@1.0.0/+esm';

        const VERT = `#version 300 es
        in vec2 position;
        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }`;

        const FRAG = `#version 300 es
        precision highp float;

        uniform float uTime;
        uniform float uAmplitude;
        uniform vec3 uColorStops[3];
        uniform vec2 uResolution;
        uniform float uBlend;

        out vec4 fragColor;

        vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }

        float snoise(vec2 v){
            const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
            vec2 i  = floor(v + dot(v, C.yy));
            vec2 x0 = v - i + dot(i, C.xx);
            vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
            vec4 x12 = x0.xyxy + C.xxzz;
            x12.xy -= i1;
            i = mod(i, 289.0);
            vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
            vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
            m = m * m;
            m = m * m;
            vec3 x = 2.0 * fract(p * C.www) - 1.0;
            vec3 h = abs(x) - 0.5;
            vec3 ox = floor(x + 0.5);
            vec3 a0 = x - ox;
            m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
            vec3 g;
            g.x  = a0.x  * x0.x  + h.x  * x0.y;
            g.yz = a0.yz * x12.xz + h.yz * x12.yw;
            return 130.0 * dot(m, g);
        }

        struct ColorStop { vec3 color; float position; };

        #define COLOR_RAMP(colors, factor, finalColor) { \
            int index = 0; \
            for (int i = 0; i < 2; i++) { \
                ColorStop currentColor = colors[i]; \
                bool isInBetween = currentColor.position <= factor; \
                index = int(mix(float(index), float(i), float(isInBetween))); \
            } \
            ColorStop currentColor = colors[index]; \
            ColorStop nextColor = colors[index + 1]; \
            float range = nextColor.position - currentColor.position; \
            float lerpFactor = (factor - currentColor.position) / range; \
            finalColor = mix(currentColor.color, nextColor.color, lerpFactor); \
        }

        void main() {
            vec2 uv = gl_FragCoord.xy / uResolution;
            ColorStop colors[3];
            colors[0] = ColorStop(uColorStops[0], 0.0);
            colors[1] = ColorStop(uColorStops[1], 0.5);
            colors[2] = ColorStop(uColorStops[2], 1.0);
            vec3 rampColor;
            COLOR_RAMP(colors, uv.x, rampColor);
            float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
            height = exp(height);
            height = (uv.y * 2.0 - height + 0.2);
            float intensity = 0.6 * height;
            float midPoint = 0.20;
            float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
            vec3 auroraColor = intensity * rampColor;
            fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
        }
        `;

        function initAurora() {
            const ctn = document.getElementById('aurora-container');
            if (!ctn) return;

            const renderer = new Renderer({ alpha: true, premultipliedAlpha: true, antialias: true });
            const gl = renderer.gl;
            gl.clearColor(0, 0, 0, 0);
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
            
            let program;

            function resize() {
                const width = ctn.offsetWidth;
                const height = ctn.offsetHeight;
                renderer.setSize(width, height);
                if (program) {
                    program.uniforms.uResolution.value = [width, height];
                }
            }
            window.addEventListener('resize', resize);

            const geometry = new Triangle(gl);
            if (geometry.attributes.uv) delete geometry.attributes.uv;

            const hexColors = ['#5227FF', '#7cff67', '#5227FF'];
            const colorStopsArray = hexColors.map(hex => {
                const c = new Color(hex);
                return [c.r, c.g, c.b];
            });

            program = new Program(gl, {
                vertex: VERT,
                fragment: FRAG,
                uniforms: {
                    uTime: { value: 0 },
                    uAmplitude: { value: 1.2 },
                    uColorStops: { value: colorStopsArray },
                    uResolution: { value: [ctn.offsetWidth, ctn.offsetHeight] },
                    uBlend: { value: 0.6 }
                }
            });

            const mesh = new Mesh(gl, { geometry, program });
            ctn.appendChild(gl.canvas);

            let animateId;
            const update = t => {
                animateId = requestAnimationFrame(update);
                program.uniforms.uTime.value = (t * 0.01) * 1.0 * 0.1; 
                renderer.render({ scene: mesh });
            };
            animateId = requestAnimationFrame(update);
            resize();
        }

        // Initialize Pure WebGL Layer
        initAurora();
    


        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);

            // --- 1. Hero Card Interactivity ---
            const cardsWrapper = document.getElementById('cards-wrapper');
            if(cardsWrapper) {
                gsap.set(cardsWrapper, { 
                    rotationY: -15, 
                    rotationX: 10, 
                    rotationZ: -5, 
                    transformPerspective: 2000 
                });

                document.addEventListener('mousemove', (e) => {
                    const xNorm = (e.clientX / window.innerWidth) - 0.5;
                    const yNorm = (e.clientY / window.innerHeight) - 0.5;
                    
                    gsap.to(cardsWrapper, {
                        rotationY: -15 + (xNorm * 30),
                        rotationX: 10 - (yNorm * 30),
                        duration: 0.8,
                        ease: "power2.out",
                        overwrite: "auto"
                    });
                });
            }

            // --- 2. Custom Toggle logic ---
            const tMain = document.getElementById('toggle-mainnet');
            const tTest = document.getElementById('toggle-testnet');
            if(tMain && tTest) {
                const setToggle = (active, inactive) => {
                    active.classList.add('bg-white', 'shadow-sm', 'text-zinc-900', 'border', 'border-zinc-200/50');
                    active.classList.remove('text-zinc-400');
                    inactive.classList.remove('bg-white', 'shadow-sm', 'text-zinc-900', 'border', 'border-zinc-200/50');
                    inactive.classList.add('text-zinc-400');
                };
                tMain.addEventListener('click', () => setToggle(tMain, tTest));
                tTest.addEventListener('click', () => setToggle(tTest, tMain));
            }

            // --- 3. Scroll Reveal Animations ---
            const sectionsToAnimate = document.querySelectorAll('main, section, footer');
            sectionsToAnimate.forEach(section => {
                const targets = section.querySelectorAll('.reveal-target');
                if (targets.length > 0) {
                    // Set initial pre-animation state
                    gsap.set(targets, { opacity: 0, y: 30, filter: 'blur(8px)', autoAlpha: 0 });
                    
                    ScrollTrigger.create({
                        trigger: section,
                        start: "top 85%",
                        onEnter: () => {
                            gsap.to(targets, {
                                autoAlpha: 1,
                                opacity: 1,
                                y: 0,
                                filter: 'blur(0px)',
                                duration: 1,
                                stagger: 0.15,
                                ease: "power3.out",
                                onComplete: function() {
                                    // Remove the inline filter so Tailwind utilities can work properly afterwards
                                    gsap.set(targets, { clearProps: "filter" });
                                }
                            });
                        },
                        once: true // Animate only once per element
                    });
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="w-full relative flex flex-col overflow-hidden py-24 lg:py-32">

<div className="absolute inset-0 z-0 w-full h-full pointer-events-none opacity-40 mix-blend-screen" id="aurora-container"></div>

<nav className="absolute top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-50 flex justify-between items-center px-6 py-3 rounded-full border border-white/10 bg-[#0A0A0A]/60 backdrop-blur-md shadow-2xl reveal-target">
<div className="flex items-center gap-2 text-white">
<span className="font-normal tracking-tighter text-lg">AURA</span>
</div>
<div className="hidden md:flex items-center gap-10 text-white/50 text-xs uppercase tracking-widest">
<a className="hover:text-white transition-colors" href="#architecture">Architecture</a>
<a className="hover:text-white transition-colors" href="#">Consensus</a>
<a className="hover:text-white transition-colors" href="#">Explorer</a>
</div>
<button className="flex items-center gap-2 text-white text-xs border border-white/10 bg-white/5 backdrop-blur-md rounded-full px-5 py-2 hover:bg-white/10 transition-all">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="font-normal">Connect Node</span>
</button>
</nav>
<div className="flex-1 flex flex-col lg:flex-row w-full relative pt-12 lg:pt-0 z-10">

<div className="w-full lg:w-1/2 p-8 lg:p-24 flex flex-col justify-center relative z-20">
<div className="mb-5 opacity-80 inline-flex items-center gap-2 text-white reveal-target">
<span className="italic text-sm md:text-base text-white/70">
                        { Zero-Knowledge Verification }
                    </span>
</div>
<h1 className="text-white text-4xl md:text-6xl xl:text-7xl tracking-tight leading-[1.05] mb-8 reveal-target">
                    Verifiable proof <br/>
<span className="italic text-white/60">for a digital age.</span>
</h1>
<p className="text-white/50 text-base md:text-lg leading-relaxed max-w-lg font-light mb-12 reveal-target">
                    Aura provides a decentralized layer for cryptographic authentication. Build applications with mathematical certainty and zero-knowledge privacy.
                </p>
<div className="flex flex-wrap gap-6 mb-16 reveal-target">
<div className="rounded-full shadow-lg" style={{background: 'linear-gradient(145deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.05) 100%)', padding: '1px'}}>
<button className="bg-white text-black px-8 py-4 rounded-full text-sm font-normal hover:bg-zinc-200 transition-all flex items-center gap-2">
                            Get Started
                            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
<button className="text-white/70 border border-white/10 px-8 py-4 rounded-full text-sm font-normal hover:bg-white/5 transition-all">
                        Documentation
                    </button>
</div>

<div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-6 max-w-sm reveal-target">
<div>
<div className="text-white text-2xl font-medium tracking-tight mb-1">12.4M+</div>
<div className="text-white/40 text-xs font-mono tracking-wider uppercase">Blocks Verified</div>
</div>
<div>
<div className="text-white text-2xl font-medium tracking-tight mb-1">99.99%</div>
<div className="text-white/40 text-xs font-mono tracking-wider uppercase">System Reliability</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 h-[60vh] lg:h-auto relative z-10 overflow-hidden flex items-center justify-center reveal-target">

<div className="absolute inset-0 pointer-events-none opacity-[0.15] mix-blend-screen flex items-center justify-center">
<svg className="absolute" fill="none" height="100%" preserveaspectratio="xMidYMid slice" viewbox="0 0 800 800" width="100%" xmlns="http://www.w3.org/2000/svg">
<circle cx="400" cy="400" r="300" stroke="white" stroke-dasharray="4 4" strokeWidth="0.5"></circle>
<circle cx="400" cy="400" r="150" stroke="white" strokeWidth="0.5"></circle>
<path d="M 100 400 L 700 400" stroke="white" strokeWidth="0.5"></path>
<path d="M 400 100 L 400 700" stroke="white" strokeWidth="0.5"></path>
<rect fill="white" height="4" width="4" x="398" y="398"></rect>
</svg>
</div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="relative w-48 md:w-56 aspect-[4/5] xl:scale-110" id="cards-wrapper" style={{transformStyle: 'preserve-3d'}}>

<div className="absolute inset-0 pointer-events-auto group z-10" style={{transform: 'translate3d(65%, -40%, -80px)'}}>
<div className="w-full h-full transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:translate-x-2">
<div className="w-full h-full rounded-xl shadow-2xl shadow-black/80" style={{background: 'linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.01) 100%)', padding: '1px'}}>
<div className="bg-[#101010]/90 backdrop-blur-md w-full h-full rounded-[calc(0.75rem-1px)] flex flex-col p-2.5 overflow-hidden relative">
<div className="flex justify-between items-center text-xs text-white/40 font-mono tracking-widest uppercase mb-2 px-1">
<span># SHARD_3</span>
<span>[SYNC]</span>
</div>
<div className="flex-grow rounded-lg bg-zinc-900 relative overflow-hidden">
<img alt="Abstract" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" src="https://images.unsplash.com/photo-1700498597220-b67a0364d55c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 pointer-events-auto group z-20" style={{transform: 'translate3d(0%, 0%, 0px)'}}>
<div className="w-full h-full transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:translate-x-2">
<div className="w-full h-full rounded-xl shadow-2xl shadow-black/90" style={{background: 'linear-gradient(145deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.02) 100%)', padding: '1px'}}>
<div className="bg-[#121212] w-full h-full rounded-[calc(0.75rem-1px)] flex flex-col p-2.5 overflow-hidden">
<div className="flex justify-between items-center text-xs text-white/70 font-mono tracking-widest uppercase mb-2 px-1">
<span># SHARD_2</span>
<span>[INDEX]</span>
</div>
<div className="flex-grow rounded-lg bg-zinc-800 relative overflow-hidden">
<img alt="Data" className="w-full h-full object-cover opacity-80 saturate-100 hue-rotate-30" src="https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 pointer-events-auto group z-30" style={{transform: 'translate3d(-65%, 40%, 80px)'}}>
<div className="w-full h-full transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:translate-x-2">
<div className="w-full h-full rounded-xl shadow-2xl shadow-black drop-shadow-2xl" style={{background: 'linear-gradient(145deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 100%)', padding: '1px'}}>
<div className="bg-[#141414] w-full h-full rounded-[calc(0.75rem-1px)] flex flex-col p-2.5 overflow-hidden">
<div className="flex justify-between items-center text-xs text-white font-mono tracking-widest uppercase mb-2 px-1">
<span># MAIN_NET</span>
<span className="text-emerald-400">[ACTIVE]</span>
</div>
<div className="flex-grow rounded-lg bg-zinc-800 relative overflow-hidden flex items-center justify-center">
<img alt="Core" className="absolute inset-0 w-full h-full object-cover opacity-90 saturate-50" src="https://images.unsplash.com/photo-1641738156783-df2049630f6c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<svg className="absolute inset-0 w-full h-full p-4 drop-shadow-md z-10" viewbox="0 0 100 100">
<polygon fill="none" points="50,15 85,50 50,85 15,50" stroke="white" stroke-dasharray="2 2" strokeWidth="1"></polygon>
<circle cx="50" cy="50" fill="none" r="18" stroke="white" strokeWidth="1.5"></circle>
<circle cx="50" cy="50" fill="white" r="4"></circle>
<circle cx="50" cy="15" fill="#141414" r="3" stroke="white" strokeWidth="1.5"></circle>
<circle cx="85" cy="50" fill="#141414" r="3" stroke="white" strokeWidth="1.5"></circle>
<circle cx="50" cy="85" fill="#141414" r="3" stroke="white" strokeWidth="1.5"></circle>
<circle cx="15" cy="50" fill="#141414" r="3" stroke="white" strokeWidth="1.5"></circle>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="w-full bg-white py-24 md:py-32 px-6 lg:px-24 relative z-20" id="architecture">
<div className="max-w-[90rem] mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
<div className="max-w-2xl reveal-target">
<span className="text-zinc-400 text-xs font-normal uppercase tracking-widest mb-4 block">The Infrastructure</span>
<h2 className="text-zinc-900 text-3xl md:text-5xl tracking-tight font-normal leading-tight">
                        Designed for resilience. <br/>
                        Optimized for speed.
                    </h2>
</div>

<div className="flex items-center gap-4 bg-zinc-50 p-1.5 rounded-2xl border border-zinc-100 reveal-target">
<button className="px-5 py-2 text-xs font-normal rounded-xl bg-white shadow-sm text-zinc-900 transition-all border border-zinc-200/50" id="toggle-mainnet">Mainnet</button>
<button className="px-5 py-2 text-xs font-normal rounded-xl text-zinc-400 hover:text-zinc-600 transition-all" id="toggle-testnet">Testnet</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200 rounded-3xl overflow-hidden">
<div className="bg-white p-10 group hover:bg-zinc-50 transition-colors reveal-target">
<div className="w-12 h-12 rounded-2xl bg-zinc-900 text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:cpu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-zinc-900 text-xl font-normal tracking-tight mb-4">Edge Validation</h3>
<p className="text-zinc-500 text-sm leading-relaxed mb-8">
                        Nodes process proofs locally before broadcasting to the network, reducing latency by up to 80% compared to legacy chains.
                    </p>
<div className="pt-6 border-t border-zinc-100 flex items-center justify-between">
<span className="text-zinc-400 text-xs font-mono">LATENCY: 12ms</span>
<iconify-icon className="text-zinc-300 group-hover:text-zinc-900" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
<div className="bg-white p-10 group hover:bg-zinc-50 transition-colors reveal-target">
<div className="w-12 h-12 rounded-2xl bg-zinc-900 text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:database-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-zinc-900 text-xl font-normal tracking-tight mb-4">Atomic Storage</h3>
<p className="text-zinc-500 text-sm leading-relaxed mb-8">
                        Data is sharded across the global registry using prime-number mapping to ensure permanent availability and zero data loss.
                    </p>
<div className="pt-6 border-t border-zinc-100 flex items-center justify-between">
<span className="text-zinc-400 text-xs font-mono">UPTIME: 99.99%</span>
<iconify-icon className="text-zinc-300 group-hover:text-zinc-900" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
<div className="bg-white p-10 group hover:bg-zinc-50 transition-colors reveal-target">
<div className="w-12 h-12 rounded-2xl bg-zinc-900 text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:link-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-zinc-900 text-xl font-normal tracking-tight mb-4">Cross-Chain Sync</h3>
<p className="text-zinc-500 text-sm leading-relaxed mb-8">
                        Native bridges allow for seamless state transition between Aura and other EVM-compatible ecosystems.
                    </p>
<div className="pt-6 border-t border-zinc-100 flex items-center justify-between">
<span className="text-zinc-400 text-xs font-mono">SYNC: REAL-TIME</span>
<iconify-icon className="text-zinc-300 group-hover:text-zinc-900" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 bg-[#0A0A0A] border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 pb-8 md:px-6">
<div className="max-w-3xl text-center mx-auto">
<p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-normal text-slate-300 reveal-target">
<iconify-icon className="text-sky-400" icon="solar:star-fall-linear" strokeWidth="1.5" width="16"></iconify-icon>
            New: Instant publish with atomic deploys
          </p>
<h2 className="sm:text-5xl md:text-6xl text-4xl font-normal tracking-tight text-white leading-tight reveal-target">
            Ship frameworks at lightspeed
          </h2>
<p className="mt-5 text-base md:text-lg text-slate-400 font-light reveal-target">
            Aura Studio is a visual node builder that lets you design, collaborate, and deploy cryptographic circuits in one place. No code required.
          </p>
<div className="flex flex-col gap-3 sm:flex-row mt-8 items-center justify-center reveal-target">
<button className="group hover:scale-95 transition-transform" style={{cursor: 'pointer', position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'radial-gradient(65.28% 65.28% at 50% 100%, rgba(34, 211, 238, 0.8) 0%, rgba(34, 211, 238, 0) 100%), linear-gradient(0deg, #2563eb, #2563eb)', borderRadius: '0.75rem', padding: '12px 18px', minHeight: '48px', minWidth: '102px'}} type="button">

<span style={{position: 'absolute', inset: '1px', background: 'linear-gradient(177.95deg, rgba(255, 255, 255, 0.19) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: 'calc(0.75rem - 1px)', zIndex: '0'}}></span>
<span style={{position: 'absolute', inset: '2px', background: 'radial-gradient(65.28% 65.28% at 50% 100%, rgba(34, 211, 238, 0.8) 0%, rgba(34, 211, 238, 0) 100%), linear-gradient(0deg, #2563eb, #2563eb)', borderRadius: 'calc(0.75rem - 2px)', zIndex: '0'}}></span>

<div style={{overflow: 'hidden', width: '100%', height: '100%', pointerEvents: 'none', position: 'absolute', zIndex: '1'}}>
<i style={{bottom: '-10px', position: 'absolute', animation: 'floating-points 2.35s infinite ease-in-out 0.2s', width: '2px', height: '2px', backgroundColor: '#fff', borderRadius: '9999px', left: '10%'}}></i>
<i style={{bottom: '-10px', position: 'absolute', animation: 'floating-points 2.5s infinite ease-in-out 0.5s', width: '2px', height: '2px', backgroundColor: '#fff', borderRadius: '9999px', left: '30%', opacity: '0.7'}}></i>
<i style={{bottom: '-10px', position: 'absolute', animation: 'floating-points 2.2s infinite ease-in-out 0.1s', width: '2px', height: '2px', backgroundColor: '#fff', borderRadius: '9999px', left: '25%', opacity: '0.8'}}></i>
<i style={{bottom: '-10px', position: 'absolute', animation: 'floating-points 2.05s infinite ease-in-out', width: '2px', height: '2px', backgroundColor: '#fff', borderRadius: '9999px', left: '44%', opacity: '0.6'}}></i>
<i style={{bottom: '-10px', position: 'absolute', animation: 'floating-points 1.9s infinite ease-in-out', width: '2px', height: '2px', backgroundColor: '#fff', borderRadius: '9999px', left: '50%'}}></i>
<i style={{bottom: '-10px', position: 'absolute', animation: 'floating-points 1.5s infinite ease-in-out 1.5s', width: '2px', height: '2px', backgroundColor: '#fff', borderRadius: '9999px', left: '75%', opacity: '0.5'}}></i>
</div>

<span style={{zIndex: '2', gap: '6px', position: 'relative', width: '100%', color: 'white', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '400', transition: 'color 0.2s ease-in-out'}}>
                Try for free
                <svg className="group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
<button className="group relative inline-flex items-center justify-center min-w-[120px] cursor-pointer rounded-xl px-[17px] py-[12px] text-white/70 tracking-tight font-normal transition-all duration-[1000ms] hover:-translate-y-[3px] hover:scale-[1.05] hover:text-white" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)', background: 'radial-gradient(ellipse at bottom,rgba(71,81,92,1) 0%,rgba(0,0,0,1) 100%)'}}>
<span className="relative z-10 font-normal text-sm">Watch demo</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] group-hover:opacity-80" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
</div>
<div className="mt-8 flex items-center justify-center gap-3 text-xs text-slate-500 reveal-target">
<div className="flex -space-x-2">
<img alt="" className="h-6 w-6 rounded-full ring-2 ring-[#0A0A0A] object-cover grayscale opacity-70" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9c519027-8b76-493a-ae3c-8cf962ccdf04_320w.jpg"/>
<img alt="" className="h-6 w-6 rounded-full ring-2 ring-[#0A0A0A] object-cover grayscale opacity-70" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8d3cb9d4-adbe-41e5-a351-a4a6c22d6037_800w.jpg"/>
<img alt="" className="h-6 w-6 rounded-full ring-2 ring-[#0A0A0A] object-cover grayscale opacity-70" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/69c45eba-968b-45e3-aff1-ebab9cb7b543_320w.jpg"/>
</div>
<span>Trusted by modern teams of all sizes</span>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto md:px-6 px-4 pb-12 reveal-target">
<div className="relative w-full overflow-hidden shadow-black/50 bg-gradient-to-b from-white/[0.04] to-white/[0.01] border-white/10 border rounded-2xl mx-auto shadow-2xl backdrop-blur-lg">

<div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-white/20"></span>
<span className="h-2.5 w-2.5 rounded-full bg-white/20"></span>
<span className="h-2.5 w-2.5 rounded-full bg-white/20"></span>
<div className="ml-3 hidden items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-400 sm:flex font-mono">
<iconify-icon icon="solar:sidebar-minimalistic-linear" strokeWidth="1.5" width="14"></iconify-icon>
                Aura Studio — Project: Mainnet
              </div>
</div>
<div className="flex items-center gap-2">
<button className="hidden rounded-md border border-white/10 bg-white/5 p-1.5 text-slate-400 hover:bg-white/10 hover:text-white transition-colors sm:inline-flex"><iconify-icon icon="solar:share-linear" strokeWidth="1.5" width="16"></iconify-icon></button>
<button className="hidden rounded-md border border-white/10 bg-white/5 p-1.5 text-slate-400 hover:bg-white/10 hover:text-white transition-colors sm:inline-flex"><iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="16"></iconify-icon></button>
<button className="rounded-md bg-white px-4 py-1.5 text-xs font-medium text-black hover:bg-zinc-200 transition-colors">Publish</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12">

<aside className="hidden md:block md:col-span-3 bg-black/40 border-white/10 border-r p-3">
<div className="mb-3 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-normal text-slate-300">
<iconify-icon icon="solar:siderbar-linear" strokeWidth="1.5" width="14"></iconify-icon>
                  Outline
                </div>
<button className="rounded-md border border-white/10 bg-white/5 p-1 text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="space-y-1 text-slate-400">
<div className="bg-white/5 rounded-lg p-2 space-y-3">
<div className="mb-1 flex items-center justify-between">
<div className="flex items-center gap-2 text-white/90">
<iconify-icon icon="solar:monitor-linear" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-xs font-medium">Desktop — 1200</span>
</div>
<span className="rounded-md bg-white/5 px-1.5 py-0.5 text-xs text-slate-500 font-mono">Primary</span>
</div>
<ul className="space-y-1 pl-6 text-xs font-light">
<li className="flex items-center gap-2 rounded-md bg-white/10 text-white px-2 py-1">
<iconify-icon icon="solar:layers-linear" strokeWidth="1.5" width="14"></iconify-icon>
                      Header
                    </li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5 transition-colors">
<iconify-icon icon="solar:gallery-linear" strokeWidth="1.5" width="14"></iconify-icon>
                      Hero
                    </li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5 transition-colors">
<iconify-icon icon="solar:widget-linear" strokeWidth="1.5" width="14"></iconify-icon>
                      Features
                    </li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5 transition-colors">
<iconify-icon icon="solar:card-linear" strokeWidth="1.5" width="14"></iconify-icon>
                      Pricing
                    </li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5 transition-colors">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5" width="14"></iconify-icon>
                      Testimonials
                    </li>
</ul>
</div>
<div className="bg-white/5 rounded-lg p-2 space-y-3">
<div className="mb-1 flex items-center gap-2 text-white/90">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-xs font-medium">Assets</span>
</div>
<div className="grid grid-cols-3 gap-2">
<div className="aspect-video overflow-hidden rounded-md bg-white/5">
<img alt="" className="h-full w-full object-cover opacity-60 grayscale" src="https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&amp;fit=crop&amp;q=80&amp;w=320"/>
</div>
<div className="aspect-video overflow-hidden rounded-md bg-white/5">
<img alt="" className="h-full w-full object-cover opacity-60 grayscale" src="https://images.unsplash.com/photo-1700498597220-b67a0364d55c?auto=format&amp;fit=crop&amp;q=80&amp;w=320"/>
</div>
<div className="aspect-video overflow-hidden rounded-md bg-white/5">
<img alt="" className="h-full w-full object-cover opacity-60 grayscale" src="https://images.unsplash.com/photo-1641738156783-df2049630f6c?auto=format&amp;fit=crop&amp;q=80&amp;w=320"/>
</div>
</div>
</div>
</div>
</aside>

<main className="relative md:col-span-6 bg-black/50">
<div className="flex items-center gap-2 border-b border-white/10 px-3 py-2 text-xs text-slate-400">
<iconify-icon icon="solar:devices-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>Breakpoint</span>
<span className="rounded-md bg-white/5 px-1.5 py-0.5 text-white">Desktop</span>
<span className="text-slate-600">|</span>
<span className="font-mono">1200</span>
<div className="ml-auto flex items-center gap-1">
<button className="rounded-md border border-white/10 bg-white/5 p-1 hover:text-white hover:bg-white/10 transition-colors"><iconify-icon icon="solar:undo-left-linear" strokeWidth="1.5" width="16"></iconify-icon></button>
<button className="rounded-md border border-white/10 bg-white/5 p-1 hover:text-white hover:bg-white/10 transition-colors"><iconify-icon icon="solar:redo-right-linear" strokeWidth="1.5" width="16"></iconify-icon></button>
</div>
</div>
<div className="p-4 sm:p-6">
<div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 ring-1 ring-white/10">
<img alt="" className="h-[360px] w-full object-cover sm:h-[460px] opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/73775a0c-f5b8-4b8f-9314-29fdf15fec4d_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="max-w-xl rounded-xl border border-white/10 bg-[#0A0A0A]/60 p-4 backdrop-blur-md">
<h3 className="text-3xl sm:text-4xl font-normal tracking-tight text-white mb-2">Aura Engine</h3>
<p className="mt-1 text-sm text-slate-300 font-light leading-relaxed">A limitless canvas with modern layout, cryptographic verification, and state features—ready for mainnet.</p>
<div className="mt-4 flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-normal text-black hover:bg-zinc-200 transition-colors">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="14"></iconify-icon>
                          Auto layout
                        </button>
<button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-normal text-slate-200 hover:bg-white/10 transition-colors">
<iconify-icon icon="solar:move-linear" strokeWidth="1.5" width="14"></iconify-icon>
                          Drag
                        </button>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute -bottom-6 right-4 hidden w-64 rounded-xl border border-white/10 bg-[#0A0A0A]/60 p-2 backdrop-blur-lg lg:block">
<div className="rounded-lg border border-white/10 bg-black/80 p-2">
<div className="aspect-[9/16] overflow-hidden rounded-md border border-white/5">
<img alt="" className="h-full w-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/98b60594-8ebe-4841-acfc-5a393e36b5c9_800w.webp"/>
</div>
<div className="mt-2 flex items-center justify-between text-xs text-slate-500">
<span className="inline-flex items-center gap-1"><iconify-icon icon="solar:smartphone-linear" strokeWidth="1.5" width="12"></iconify-icon> Mobile 390</span>
<span className="rounded bg-white/5 px-1.5 py-0.5 text-xs font-mono">Preview</span>
</div>
</div>
</div>
</div>
</main>

<aside className="hidden md:block md:col-span-3 border-l border-white/10 bg-black/40 p-3">
<div className="mb-3 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-normal text-slate-300">
<iconify-icon icon="solar:slider-horizontal-linear" strokeWidth="1.5" width="14"></iconify-icon>
                  Properties
                </div>
<button className="rounded-md border border-white/10 bg-white/5 p-1 text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
<iconify-icon icon="solar:menu-dots-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="space-y-3">
<div className="bg-white/5 rounded-lg p-3 space-y-3">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-slate-400">Position</span>
<span className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-slate-300 font-mono">Relative</span>
</div>
<div className="grid grid-cols-3 gap-2 text-xs">
<button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-400 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-1"><iconify-icon icon="solar:align-top-linear" strokeWidth="1.5" width="14"></iconify-icon>Top</button>
<button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-400 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-1"><iconify-icon icon="solar:align-vertical-center-linear" strokeWidth="1.5" width="14"></iconify-icon>Center</button>
<button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-400 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-1"><iconify-icon icon="solar:align-bottom-linear" strokeWidth="1.5" width="14"></iconify-icon>Bottom</button>
</div>
</div>
<div className="bg-white/5 rounded-lg p-3 space-y-3">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-slate-400 font-normal">Size</span>
<span className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-slate-300 font-mono">Auto</span>
</div>
<div className="grid grid-cols-2 gap-2 text-xs">
<div className="rounded-md border border-white/10 bg-[#0A0A0A]/60 px-2 py-1.5 text-slate-400 font-mono text-center">W: 1200</div>
<div className="rounded-md border border-white/10 bg-[#0A0A0A]/60 px-2 py-1.5 text-slate-400 font-mono text-center">H: Auto</div>
</div>
<div className="mt-2 grid grid-cols-4 gap-2 text-xs">
<button className="rounded-md border border-white/10 bg-white/5 px-2 py-1.5 text-slate-400 font-normal hover:bg-white/10 hover:text-white transition-colors">Fill</button>
<button className="rounded-md border border-white/10 bg-white/5 px-2 py-1.5 text-slate-400 font-normal hover:bg-white/10 hover:text-white transition-colors">Fit</button>
<button className="rounded-md border border-white/10 bg-white/5 px-2 py-1.5 text-slate-400 font-normal hover:bg-white/10 hover:text-white transition-colors">Fixed</button>
<button className="rounded-md border border-white/10 bg-white/5 px-2 py-1.5 text-slate-400 font-normal hover:bg-white/10 hover:text-white transition-colors">Min</button>
</div>
</div>
<div className="bg-white/5 rounded-lg p-3 space-y-3">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-slate-400">Effects</span>
<span className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-slate-300 font-mono">3</span>
</div>
<div className="space-y-3 text-xs">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1.5 text-slate-300"><iconify-icon className="text-sky-400" icon="solar:drop-linear" strokeWidth="1.5" width="14"></iconify-icon>Blur</span>
<span className="rounded bg-white/5 px-1.5 py-0.5 text-slate-400 font-mono">8px</span>
</div>
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1.5 text-slate-300"><iconify-icon className="text-white/60" icon="solar:sun-linear" strokeWidth="1.5" width="14"></iconify-icon>Glow</span>
<span className="rounded bg-white/5 px-1.5 py-0.5 text-slate-400 font-mono">20%</span>
</div>
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1.5 text-slate-300"><iconify-icon className="text-white/60" icon="solar:layers-linear" strokeWidth="1.5" width="14"></iconify-icon>Blend</span>
<span className="rounded bg-white/5 px-1.5 py-0.5 text-slate-400 font-mono">Overlay</span>
</div>
</div>
</div>
</div>
</aside>
</div>
</div>
</div>
</section>

<section className="max-w-7xl relative bg-white/5 border-white/10 border rounded-[2rem] mx-auto my-24 p-8 lg:p-12 backdrop-blur-md">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start relative z-10">

<div className="flex flex-col min-h-full justify-between">
<div>
<span className="text-xs font-normal uppercase tracking-widest text-white/50 block mb-4 reveal-target">Interface</span>
<h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-white reveal-target">
                A timeline built for speed and focus.
              </h2>
<div className="mt-12 relative">
<div className="hidden sm:flex flex-col gap-8 relative text-white/70">
<div className="relative reveal-target">
<div className="absolute left-2 top-8 bottom-0 w-px bg-gradient-to-b from-white/30 via-white/10 to-transparent"></div>
<div className="flex gap-6 items-start">
<div className="flex-shrink-0 w-4 h-4 z-10 relative bg-[#0A0A0A] border-white/30 border rounded-full mt-1 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-white/80 rounded-full"></div>
</div>
<div className="flex-1 pb-4">
<span className="text-sm font-medium text-white">Magnetic alignment</span>
<p className="text-sm font-light text-white/50 mt-1.5 leading-relaxed">Smart snapping and precision editing ensuring perfect block verification.</p>
</div>
</div>
</div>
<div className="relative reveal-target">
<div className="absolute left-2 top-8 bottom-0 w-px bg-gradient-to-b from-white/30 via-white/10 to-transparent"></div>
<div className="flex gap-6 items-start">
<div className="flex-shrink-0 w-4 h-4 rounded-full border border-white/30 bg-[#0A0A0A] z-10 relative mt-1 flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-white/80"></div>
</div>
<div className="flex-1 pb-4">
<span className="text-sm font-medium text-white">Ripple validation</span>
<p className="text-sm font-light text-white/50 mt-1.5 leading-relaxed">Maintain cryptographic sync across all concurrent threads automatically.</p>
</div>
</div>
</div>
<div className="relative reveal-target">
<div className="flex items-start gap-6">
<div className="flex-shrink-0 w-4 h-4 rounded-full border border-white/30 bg-[#0A0A0A] z-10 relative mt-1 flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-white/80"></div>
</div>
<div className="flex-1">
<span className="text-sm font-medium text-white">Realtime scopes</span>
<p className="text-sm font-light text-white/50 mt-1.5 leading-relaxed">Live vector analysis and node health diagnostics integrated natively.</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="w-full mt-12 pt-8 border-t border-white/10 reveal-target">
<div>
<p className="text-sm font-medium text-white tracking-tight">Accelerate every deployment</p>
<p className="text-sm font-light text-white/50 mt-2 max-w-sm leading-relaxed">
                  Skimming, precise trimming, gap detection, and AI‑powered script editing that keeps you in flow.
                </p>
<a className="inline-flex items-center justify-center gap-3 h-12 hover:bg-white/90 transition text-sm font-normal text-black bg-white rounded-full mt-6 px-6 max-w-sm" href="#features">
                  Explore features
                  <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 relative">
<article className="relative overflow-hidden aspect-[4/3] bg-center bg-cover border border-white/10 rounded-2xl group reveal-target">
<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/468eeec1-e10c-4305-ad63-50cff0e023dc/800w.png"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/80"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center justify-center w-8 h-8 text-white/90 bg-black/40 border-white/10 border rounded-full backdrop-blur-md">
<iconify-icon icon="solar:scissors-linear" strokeWidth="1.5" width="16"></iconify-icon>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white bg-black/40 border-white/10 border rounded-full py-1.5 px-3 backdrop-blur-md font-mono">Timeline</span>
</div>
<div className="absolute bottom-4 left-4 right-4">
<p className="text-white text-lg font-medium tracking-tight leading-tight">Precision editing</p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/3] bg-center bg-cover border border-white/10 rounded-2xl group reveal-target">
<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e701264-0c6f-4f78-93ad-7da3acbe3723_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/80"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center justify-center w-8 h-8 text-white/90 bg-black/40 border-white/10 border rounded-full backdrop-blur-md">
<iconify-icon icon="solar:clapperboard-linear" strokeWidth="1.5" width="16"></iconify-icon>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white bg-black/40 border-white/10 border rounded-full py-1.5 px-3 backdrop-blur-md font-mono">Multicam</span>
</div>
<div className="absolute bottom-4 left-4 right-4">
<p className="text-white text-lg font-medium tracking-tight leading-tight">Sync in seconds</p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/5] bg-center bg-cover border border-white/10 rounded-2xl group reveal-target">
<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/db601815-91a0-4fdb-aec0-2c6893fbaedc_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/80"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center justify-center w-8 h-8 text-white/90 bg-black/40 border-white/10 border rounded-full backdrop-blur-md">
<iconify-icon icon="solar:soundwave-linear" strokeWidth="1.5" width="16"></iconify-icon>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white bg-black/40 border-white/10 border rounded-full py-1.5 px-3 backdrop-blur-md font-mono">Audio</span>
</div>
<div className="absolute bottom-4 left-4 right-4">
<p className="text-white text-lg font-medium tracking-tight leading-tight">Dialogue enhance</p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/5] bg-center bg-cover border border-white/10 rounded-2xl group reveal-target">
<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/af00b0be-7f7f-4e5a-8077-1c044919711d_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/80"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center justify-center w-8 h-8 text-white/90 bg-black/40 border-white/10 border rounded-full backdrop-blur-md">
<iconify-icon icon="solar:palette-linear" strokeWidth="1.5" width="16"></iconify-icon>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white bg-black/40 border-white/10 border rounded-full py-1.5 px-3 backdrop-blur-md font-mono">Color</span>
</div>
<div className="absolute bottom-4 left-4 right-4">
<p className="text-white text-lg font-medium tracking-tight leading-tight">Advanced grading</p>
</div>
</article>
</div>
</div>
</section>

<section className="overflow-hidden bg-zinc-50 border-white/10 border-t py-24 lg:py-32 relative">
<div className="max-w-[90rem] mx-auto px-6 lg:px-24 z-10 relative">

<div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-10">
<h2 className="text-3xl md:text-5xl tracking-tight text-zinc-900 max-w-3xl leading-tight font-normal reveal-target">
            Helping visionary enterprises engineer <span className="text-zinc-400 font-medium">cryptographic intelligence</span> that reshapes digital trust globally
          </h2>
<a className="group flex items-center gap-2 text-sm font-normal text-zinc-900 border-b border-zinc-300 pb-1 hover:border-zinc-900 transition-all mt-2 reveal-target" href="#">
            Start a Project
            <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-3xl flex flex-col justify-between h-[520px] shadow-sm border border-zinc-200 hover:border-zinc-300 transition-colors reveal-target">
<div>
<h3 className="text-lg font-medium text-zinc-900 mb-6 leading-tight tracking-tight">
                Algorithms that adapt.<br/>Scale you can measure.
              </h3>
<p className="text-zinc-500 font-light leading-relaxed text-sm">
                “Aura captured the logic of our infrastructure and translated it into a workflow that's predictive, efficient, and undeniably powerful across all our verticals.”
              </p>
</div>
<div className="mt-8 border-t border-zinc-100 pt-6">
<div className="flex items-center justify-between mb-4 text-zinc-400">
<iconify-icon icon="solar:card-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/7e5a48f3-c2f2-4588-8f22-259764a5d0fb/320w.png"/>
<div>
<div className="text-sm font-medium text-zinc-900 leading-none mb-1">Sarah Jenkins</div>
<div className="text-xs text-zinc-400 font-normal">Head of Product</div>
</div>
</div>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden h-[520px] group bg-[#0A0A0A] shadow-md border border-zinc-200 reveal-target">
<img alt="Mood" className="transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-100 opacity-70 w-full h-full object-cover absolute inset-0 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f304cefa-11d2-4bfb-8fce-783514f796ee_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
<div className="flex flex-col z-10 text-white p-8 absolute inset-0 justify-between">
<div className="flex justify-between items-start">
<span className="text-sm font-normal tracking-wide">Aura Lab©</span>
</div>
<span className="text-xs font-mono opacity-60 uppercase tracking-widest ml-auto">Est '21</span>
</div>
</div>

<div className="bg-white p-8 rounded-3xl flex flex-col items-center justify-between h-[520px] shadow-sm border border-zinc-200 hover:border-zinc-300 transition-colors relative overflow-hidden group reveal-target">

<div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center">
<svg className="w-full h-full stroke-zinc-900 fill-none" strokeWidth="0.5" viewbox="0 0 100 100">
<circle cx="50" cy="50" r="20"></circle>
<circle cx="50" cy="50" r="35"></circle>
<circle cx="50" cy="50" r="48"></circle>
</svg>
</div>
<div className="text-center relative z-10 mt-4 w-full">
<span className="text-xs text-zinc-400 font-mono uppercase tracking-widest block mb-2">Optimization in</span>
<span className="text-lg font-medium text-zinc-900 tracking-tight">Node Efficiency</span>
</div>

<div className="relative w-56 h-56 flex items-center justify-center">
<div className="flex flex-col absolute inset-0 items-center justify-center">
<div className="text-5xl font-normal text-zinc-900 tracking-tighter mb-4">+88%</div>
</div>
</div>
<button className="w-full bg-zinc-900 text-white text-sm font-normal py-4 rounded-xl hover:bg-zinc-800 transition-colors transform group-hover:-translate-y-1">
              View Case Study
            </button>
</div>

<div className="flex flex-col overflow-hidden group text-white bg-zinc-900 h-[520px] rounded-3xl p-8 relative shadow-md justify-between border border-zinc-800 reveal-target">

<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/b86b328e-340e-4ccc-bb72-2240b1dab39b/800w.jpg"/>

<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors duration-500"></div>
<div className="flex justify-between items-start relative z-10">
<span className="text-lg font-medium tracking-tight">Inquiries</span>
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="relative z-10 mt-auto mb-12">
<p className="leading-relaxed text-xl text-white/90 font-light max-w-[260px] tracking-tight">
                Let’s initialize a sequence — whether you have a large dataset, a complex problem, or just curiosity, we’re here to help shape what’s next.
              </p>
</div>
<div className="space-y-3 text-sm text-white/50 relative z-10 font-mono">
<div className="hover:text-white cursor-pointer transition-colors flex group/link items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover/link:opacity-100 transition-opacity"></span>
                hello@aura.network
              </div>
<div className="hover:text-white cursor-pointer transition-colors flex group/link items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover/link:opacity-100 transition-opacity"></span>
                +1 (555) 019-2834
              </div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#050505] w-full pt-32 pb-0 relative border-t border-white/5 overflow-hidden">

<div className="flex z-30 px-6 absolute top-12 right-0 left-0 justify-center reveal-target">
<div className="bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 rounded-full py-2.5 pl-6 pr-2.5 flex items-center gap-4 shadow-2xl max-w-lg w-full group transition-all hover:border-white/20">
<span className="text-neutral-500 text-xs font-mono hidden sm:block">Redefining consensus, one block at a time.</span>
<input className="bg-transparent border-none outline-none text-white text-sm w-full sm:w-auto placeholder:text-neutral-700 font-mono flex-1" placeholder="Enter email for access..." type="text"/>
<button className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:bg-zinc-300 transition-colors shrink-0">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="max-w-[90%] mx-auto flex items-end gap-4 relative z-10 translate-y-2 opacity-50 hover:opacity-100 transition-opacity duration-500 reveal-target">

<div className="h-16 w-48 bg-[#080808] border-t border-x border-white/10 rounded-t-2xl flex items-center justify-center gap-2 relative z-20">
<iconify-icon className="text-white" icon="solar:code-square-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-xs font-medium text-white uppercase tracking-widest font-mono">System</span>
</div>

<div className="h-12 w-40 bg-[#050505] border-t border-x border-white/5 rounded-t-xl flex items-center justify-center gap-2 relative z-10 hover:bg-[#080808] hover:h-14 transition-all cursor-pointer group">
<iconify-icon className="text-neutral-600 group-hover:text-white transition-colors" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-xs font-normal text-neutral-600 uppercase tracking-widest group-hover:text-white transition-colors font-mono">Studio</span>
</div>

<div className="h-12 w-40 bg-[#050505] border-t border-x border-white/5 rounded-t-xl flex items-center justify-center gap-2 relative z-10 hover:bg-[#080808] hover:h-14 transition-all cursor-pointer group">
<iconify-icon className="text-neutral-600 group-hover:text-white transition-colors" icon="solar:document-text-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-xs font-normal text-neutral-600 uppercase tracking-widest group-hover:text-white transition-colors font-mono">Legal</span>
</div>
</div>

<div className="w-full bg-[#080808] border-t border-white/10 rounded-t-[3rem] relative z-20 overflow-hidden">
<div className="w-full px-6 lg:px-24 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 relative z-20">

<div className="lg:col-span-7 flex flex-col justify-center reveal-target">
<h2 className="text-5xl lg:text-[6rem] leading-[0.9] font-normal text-white tracking-tighter mb-12">
                        Systematic.<br/>
<span className="italic text-white/40">Parametric.</span><br/>
                        Adaptive.
                    </h2>

<div className="flex flex-wrap gap-10 items-center mt-auto">
<span className="text-white/30 hover:text-white transition-colors font-medium tracking-tighter text-xl cursor-pointer">FR</span>
<span className="text-white/30 hover:text-white transition-colors font-medium tracking-tighter text-xl cursor-pointer">GH</span>
<div className="h-6 w-px bg-white/10"></div>
<span className="text-white/30 hover:text-white transition-colors font-medium tracking-tighter text-xl cursor-pointer">X</span>
<span className="text-white/30 hover:text-white transition-colors font-medium tracking-tighter text-xl cursor-pointer">DC</span>
</div>
</div>

<div className="lg:col-span-5 flex lg:justify-end items-center reveal-target">
<div className="w-full max-w-md bg-white p-8 lg:p-12 rounded-3xl relative overflow-hidden group rotate-1 hover:rotate-0 transition-transform duration-500 shadow-2xl">

<iconify-icon className="absolute -right-8 -top-8 text-black/5 text-[12rem] rotate-12 group-hover:rotate-45 transition-transform duration-700" icon="solar:settings-linear"></iconify-icon>
<div className="relative z-10">
<h3 className="text-3xl font-medium text-black tracking-tight leading-tight mb-6">
                                Optimized structures,<br/>at every node.
                            </h3>
<p className="text-black/50 text-xs font-normal leading-relaxed mb-10 font-mono">
                                // Where every constraint is met with calculation and every blueprint is a revolution.
                            </p>
<div className="flex items-center justify-between border-t border-black/10 pt-6">
<div className="flex flex-col">
<span className="text-xs uppercase tracking-widest text-black/40 font-mono scale-90 origin-left">Status</span>
<span className="text-xs font-medium text-black mt-1 tracking-tight">Operational</span>
</div>
<button className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform group/btn">
<iconify-icon className="group-hover/btn:rotate-45 transition-transform" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-full overflow-hidden pointer-events-none select-none pt-12">
<h1 className="text-[20vw] leading-none font-normal text-white/5 text-center -mb-8 lg:-mb-16 tracking-tighter">
                    AURA
                </h1>

<div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#080808] to-transparent"></div>
</div>

<div className="absolute bottom-6 w-full flex justify-center z-30">
<p className="text-xs text-white/30 font-mono uppercase tracking-widest hover:text-white/50 transition-colors cursor-default">© 2024 Aura Systems. All rights reserved.</p>
</div>
</div>
</footer>





    </>
  );
}
