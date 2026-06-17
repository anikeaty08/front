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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // GSAP Masked Reveal Directives
        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);
            
            // Hero Animation (plays immediately)
            gsap.set(".reveal-word", { y: "120%", rotateZ: 2 });
            gsap.to(".reveal-word", {
                y: "0%",
                rotateZ: 0,
                duration: 1.2,
                ease: "power3.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top 80%",
                }
            });

            // Scroll-triggered Masked Staggered Word Reveals
            const scrollTargets = document.querySelectorAll('.scroll-reveal-target');
            scrollTargets.forEach(target => {
                const words = target.querySelectorAll('.scroll-reveal-word');
                gsap.set(words, { y: "120%", rotateZ: 2 });
                
                gsap.to(words, {
                    y: "0%",
                    rotateZ: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    stagger: 0.08,
                    scrollTrigger: {
                        trigger: target,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                });
            });
        });

        // Three.js WebGL Background Animation
        const initWebGL = () => {
            const container = document.getElementById('webgl-container');
            if (!container) return;

            const scene = new THREE.Scene();
            const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
            
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            container.appendChild(renderer.domElement);

            const vertexShader = `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4(position, 1.0);
                }
            `;

            const fragmentShader = `
                uniform float u_time;
                uniform vec2 u_resolution;
                varying vec2 vUv;

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
                    m = m*m ; m = m*m ;
                    vec3 x = 2.0 * fract(p * C.www) - 1.0;
                    vec3 h = abs(x) - 0.5; vec3 ox = floor(x + 0.5);
                    vec3 a0 = x - ox; m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
                    vec3 g; g.x  = a0.x  * x0.x  + h.x  * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                    return 130.0 * dot(m, g);
                }

                void main() {
                    vec2 st = gl_FragCoord.xy/u_resolution.xy;
                    
                    vec2 noisePos = vec2(st.x * 0.5 - u_time * 0.2, st.y * 3.0);
                    
                    float n = snoise(noisePos) * 0.5 + 0.5;
                    float n2 = snoise(noisePos + vec2(5.2, 1.3)) * 0.5 + 0.5;

                    vec3 color1 = vec3(0.0, 0.4, 0.5); 
                    vec3 color2 = vec3(0.9, 0.2, 0.0); 
                    vec3 color3 = vec3(0.05, 0.05, 0.1); 

                    vec3 finalColor = mix(color3, color1, n);
                    finalColor = mix(finalColor, color2, n2 * st.x); 

                    float streak = snoise(vec2(st.y * 50.0, u_time * 0.5)) * 0.1;
                    finalColor += streak * vec3(1.0, 0.5, 0.0);

                    gl_FragColor = vec4(finalColor, 1.0);
                }
            `;

            const uniforms = {
                u_time: { value: 0.0 },
                u_resolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) }
            };

            const material = new THREE.ShaderMaterial({
                vertexShader,
                fragmentShader,
                uniforms,
                depthWrite: false,
                depthTest: false
            });

            const geometry = new THREE.PlaneGeometry(2, 2);
            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            let time = 0;
            const animate = () => {
                requestAnimationFrame(animate);
                time += 0.01;
                uniforms.u_time.value = time;
                renderer.render(scene, camera);
            };
            animate();

            window.addEventListener('resize', () => {
                renderer.setSize(container.clientWidth, container.clientHeight);
                uniforms.u_resolution.value.set(container.clientWidth, container.clientHeight);
            });
        };

        window.addEventListener('load', initWebGL);
    
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
      

<header className="relative z-20 w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center text-sm font-light tracking-wide">
<nav className="hidden md:flex gap-8 text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#">Platform</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Solutions</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Developers</a>
</nav>
<div className="text-xl tracking-tighter font-light text-neutral-900 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="command"></i>
            NEXUS
        </div>
<nav className="hidden md:flex gap-8 text-neutral-500 items-center">
<a className="hover:text-neutral-900 transition-colors" href="#">Documentation</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Sign In</a>
<a className="bg-neutral-900 text-white px-4 py-2 rounded-md hover:bg-neutral-800 transition-colors" href="#">Get Started</a>
</nav>
<button className="md:hidden text-neutral-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</header>

<main className="relative z-10 w-full max-w-7xl mx-auto px-4 pb-16">

<section className="hero-section relative w-full h-[75vh] min-h-[600px] rounded-[2rem] p-[1px] overflow-hidden mb-8 shadow-xl">
<div className="absolute inset-0 rounded-[2rem] z-0 pointer-events-none" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.05) 100%)'}}></div>
<div className="relative w-full h-full rounded-[calc(2rem-1px)] overflow-hidden bg-[#0A0D10]">
<div className="absolute inset-0 w-full h-full z-0 opacity-80 mix-blend-screen" id="webgl-container"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 z-0"></div>
<div className="absolute inset-0 z-10 flex flex-col justify-between p-8 md:p-14 lg:p-20 text-white">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-orange-500" data-lucide="cpu"></i>
<span className="text-sm uppercase tracking-widest text-white/60 font-light">Core Architecture</span>
</div>
<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mt-auto">
<div className="max-w-4xl flex-1">
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] flex flex-wrap items-center gap-x-4 gap-y-2 text-white">
<div className="overflow-hidden inline-block" style={{paddingBottom: '0.1em'}}>
<span className="reveal-word inline-block font-light">Commanding</span>
</div>
<div className="w-full h-0 hidden md:block"></div>
<div className="overflow-hidden inline-block" style={{paddingBottom: '0.1em'}}>
<span className="reveal-word inline-block font-light">High-Stakes</span>
</div>
<div className="overflow-hidden inline-block" style={{paddingBottom: '0.1em'}}>
<span className="reveal-word inline-block font-light text-white/50">Infrastructures</span>
</div>
</h1>
</div>
<div className="max-w-md flex flex-col gap-8 pb-2">
<p className="text-lg md:text-xl text-white/60 leading-relaxed font-light">
                                A centralized control plane to architect, execute, and observe complex enterprise workflows. Engineered for absolute precision, resilient failovers, and seamless global scaling.
                            </p>
<a className="inline-flex items-center justify-center gap-2 bg-white text-black px-7 py-3.5 rounded-md text-base font-light hover:bg-neutral-200 transition-colors w-max group" href="#">
                                Initialize Framework 
                                <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
<div className="relative rounded-xl p-[1px] overflow-hidden group h-full">
<div className="absolute inset-0 z-0 pointer-events-none" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 100%)'}}></div>
<div className="relative w-full h-full min-h-[140px] rounded-[calc(0.75rem-1px)] bg-[#13161A] p-5 flex flex-col gap-5 shadow-md">
<div className="flex justify-between items-center text-white/40">
<span className="text-sm uppercase tracking-widest">Terminal</span>
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
<span className="text-sm">Live</span>
</div>
</div>
<div className="text-emerald-400/90 font-mono text-sm leading-relaxed mt-auto">
<span className="text-white/30">&gt;</span> sys.sync_nodes()<br/>
<span className="text-white/30">&gt;</span> compiling... <span className="text-white">100%</span>
</div>
</div>
</div>
<div className="relative rounded-xl bg-white border border-neutral-200/60 p-5 flex flex-col gap-4 shadow-sm h-full">
<span className="text-sm uppercase tracking-widest text-neutral-400">Pipeline</span>
<div className="flex flex-col gap-3 mt-1">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center">
<i className="w-4 h-4 text-emerald-600" data-lucide="check-circle"></i>
</div>
<span className="text-base font-light text-neutral-800">Verification</span>
</div>
<div className="w-[1px] h-3 bg-neutral-200 ml-2.5 -my-1.5"></div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border border-neutral-300 flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-300"></div>
</div>
<span className="text-base font-light text-neutral-500">Deployment</span>
</div>
</div>
</div>
<div className="relative rounded-xl bg-white border border-neutral-200/60 p-5 flex flex-col gap-4 shadow-sm h-full">
<span className="text-sm uppercase tracking-widest text-neutral-400">Access Control</span>
<div className="flex items-start gap-3 mt-1">
<div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 border border-blue-100">
<i className="w-4 h-4" data-lucide="shield"></i>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-base font-light text-neutral-800">Elevated Privileges</span>
<span className="text-sm text-neutral-400 font-light">MFA Verified</span>
</div>
</div>
</div>
<div className="relative rounded-xl bg-white border border-neutral-200/60 p-5 flex flex-col justify-between shadow-sm h-full">
<div className="flex justify-between items-center text-neutral-400">
<span className="text-sm uppercase tracking-widest">Redundancy</span>
<i className="w-5 h-5 text-emerald-500" data-lucide="server"></i>
</div>
<div className="flex flex-col gap-0.5 mt-3">
<span className="text-3xl font-light tracking-tight text-neutral-900">98.2%</span>
<span className="text-sm text-emerald-600 font-light">Optimal readiness</span>
</div>
</div>
</div>
</main>

<section className="w-full bg-[#0A0D10] text-white py-24 md:py-32 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
<div className="max-w-2xl">
<h2 className="md:text-5xl lg:text-6xl scroll-reveal-target flex flex-wrap gap-x-3 gap-y-2 text-4xl font-light tracking-tight mb-6">
<div className="overflow-hidden inline-block pb-2">
<span className="scroll-reveal-word inline-block">Deep-layer</span>
</div>
<div className="overflow-hidden inline-block pb-2">
<span className="scroll-reveal-word inline-block">telemetry,</span>
</div>
<div className="overflow-hidden inline-block pb-2">
<span className="scroll-reveal-word inline-block">unified</span>
</div>
<div className="overflow-hidden inline-block pb-2">
<span className="scroll-reveal-word inline-block">in</span>
</div>
<div className="overflow-hidden inline-block pb-2">
<span className="scroll-reveal-word inline-block">a</span>
</div>
<div className="overflow-hidden inline-block pb-2">
<span className="scroll-reveal-word inline-block">single</span>
</div>
<div className="overflow-hidden inline-block pb-2">
<span className="scroll-reveal-word inline-block">control</span>
</div>
<div className="overflow-hidden inline-block pb-2">
<span className="scroll-reveal-word inline-block text-white/50">plane.</span>
</div>
</h2>
<p className="text-lg md:text-xl text-white/50 font-light leading-relaxed">Gain absolute visibility into complex execution cycles. Map intricate dependencies, monitor node health in real-time, and trace distributed logic across your entire global infrastructure.</p>
</div>

<div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1.5 backdrop-blur-md shrink-0">
<button className="px-5 py-2 rounded-full bg-white/10 text-white text-base font-light transition-colors">Global pipeline</button>
<button className="px-5 py-2 rounded-full text-white/50 hover:text-white text-base font-light transition-colors">Node planning</button>
<button className="px-5 py-2 rounded-full text-white/50 hover:text-white text-base font-light transition-colors">Timeline</button>
</div>
</div>

<div className="w-full rounded-2xl bg-[#0F1115] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)] flex overflow-hidden font-light text-base">

<div className="flex-1 flex flex-col min-w-0">

<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5 border-b border-white/5 bg-[#0F1115]">
<div className="p-4 flex justify-between items-center text-white/60">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-orange-500" data-lucide="circle-dashed"></i>
<span>Queued</span>
<span className="text-white/30 text-sm ml-1">12</span>
</div>
<div className="flex items-center gap-2 text-white/30">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
<i className="w-5 h-5" data-lucide="plus"></i>
</div>
</div>
<div className="p-4 flex justify-between items-center text-white/60">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-white/40" data-lucide="hexagon"></i>
<span>Processing</span>
<span className="text-white/30 text-sm ml-1">8</span>
</div>
<div className="flex items-center gap-2 text-white/30">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
<i className="w-5 h-5" data-lucide="plus"></i>
</div>
</div>
<div className="p-4 flex justify-between items-center text-white/60">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-500 fill-emerald-500/20" data-lucide="hexagon"></i>
<span>Executing</span>
<span className="text-white/30 text-sm ml-1">6</span>
</div>
<div className="flex items-center gap-2 text-white/30">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
<i className="w-5 h-5" data-lucide="plus"></i>
</div>
</div>
</div>

<div className="flex flex-col">

<div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/5 border-b border-emerald-500/10 text-emerald-500/80 text-sm">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
<div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
</div>
<span>Cluster US-East</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5 bg-[#13161A]">

<div className="p-3 flex flex-col gap-3 min-h-[180px]">

<div className="bg-[#1A1D21] border border-white/5 hover:border-white/10 transition-colors rounded-lg p-4 flex flex-col gap-3 cursor-pointer shadow-sm">
<div className="flex justify-between items-start">
<div className="flex items-center gap-2 text-white/90 text-base">
<i className="w-4 h-4 text-white/40" data-lucide="server"></i>
                                            Provision Nodes
                                        </div>
<i className="w-4 h-4 text-orange-500" data-lucide="circle-dashed"></i>
</div>
<p className="text-white/40 text-sm font-light">Initialize edge containers in primary zone</p>
<div className="flex items-center gap-2 text-white/30 text-sm mt-auto pt-2">
<i className="w-4 h-4" data-lucide="clock"></i>
<span>Est. 12ms latency</span>
</div>
</div>

<div className="bg-[#1A1D21] border border-white/5 hover:border-white/10 transition-colors rounded-lg p-4 flex flex-col gap-3 cursor-pointer shadow-sm">
<div className="flex justify-between items-start">
<div className="flex items-center gap-2 text-white/90 text-base">
<i className="w-4 h-4 text-white/40" data-lucide="database"></i>
                                            Sync Ledger
                                        </div>
<i className="w-4 h-4 text-orange-500" data-lucide="circle-dashed"></i>
</div>
<p className="text-white/40 text-sm font-light">Replicate sequence states to standby</p>
<div className="flex items-center gap-2 text-white/30 text-sm mt-auto pt-2">
<i className="w-4 h-4" data-lucide="clock"></i>
<span>Est. 45ms latency</span>
</div>
</div>
</div>

<div className="p-3 flex flex-col gap-3 min-h-[180px]">

<div className="bg-[#1A1D21] border border-white/5 hover:border-white/10 transition-colors rounded-lg p-4 flex flex-col gap-3 cursor-pointer shadow-sm">
<div className="flex justify-between items-start">
<div className="flex items-center gap-2 text-white/90 text-base">
<i className="w-4 h-4 text-white/40" data-lucide="shield-check"></i>
                                            Verify Checksum
                                        </div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-500" data-lucide="git-merge"></i>
<i className="w-4 h-4 text-white/40" data-lucide="hexagon"></i>
</div>
</div>
<p className="text-white/40 text-sm font-light">Validate state integrity pre-execution</p>
<div className="flex items-center gap-2 text-white/30 text-sm mt-auto pt-2">
<i className="w-4 h-4" data-lucide="clock"></i>
<span>Running: 8ms</span>
</div>
</div>
</div>

<div className="p-3 flex flex-col gap-3 min-h-[180px]">

<div className="bg-[#1A1D21] border border-white/5 hover:border-white/10 transition-colors rounded-lg p-4 flex flex-col gap-3 cursor-pointer shadow-sm">
<div className="flex justify-between items-start">
<div className="flex items-center gap-2 text-white/90 text-base">
<i className="w-4 h-4 text-white/40" data-lucide="globe"></i>
                                            Dispatch Payload
                                        </div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-500" data-lucide="git-merge"></i>
<i className="w-4 h-4 text-emerald-500 fill-emerald-500/20" data-lucide="hexagon"></i>
</div>
</div>
<p className="text-white/40 text-sm font-light">Route orchestrated sequence to workers</p>
<div className="flex items-center gap-2 text-white/30 text-sm mt-auto pt-2">
<i className="w-4 h-4" data-lucide="clock"></i>
<span>Running</span>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col border-t border-white/5">

<div className="flex items-center gap-2 px-4 py-2 bg-red-500/5 border-b border-red-500/10 text-red-500/80 text-sm">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
<div className="w-4 h-4 rounded-full bg-red-500/10 flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
</div>
<span>Failover Protocol</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5 bg-[#13161A]">

<div className="p-3 flex flex-col gap-3 min-h-[160px]">

<div className="bg-[#1A1D21] border border-white/5 hover:border-white/10 transition-colors rounded-lg p-4 flex flex-col gap-3 cursor-pointer shadow-sm">
<div className="flex justify-between items-start">
<div className="flex items-center gap-2 text-white/90 text-base">
<i className="w-4 h-4 text-white/40" data-lucide="git-branch"></i>
                                            Divert Traffic
                                        </div>
<i className="w-4 h-4 text-orange-500" data-lucide="circle-dashed"></i>
</div>
<p className="text-white/40 text-sm font-light">Shift requests to secondary cluster</p>
<div className="flex items-center gap-2 text-white/30 text-sm mt-auto pt-2">
<i className="w-4 h-4" data-lucide="clock"></i>
<span>Est. 1s</span>
</div>
</div>
</div>

<div className="p-3 flex flex-col gap-3 min-h-[160px]">
</div>

<div className="p-3 flex flex-col gap-3 min-h-[160px]">

<div className="bg-[#1A1D21] border border-white/5 hover:border-white/10 transition-colors rounded-lg p-4 flex flex-col gap-3 cursor-pointer shadow-sm opacity-50">
<div className="flex justify-between items-start">
<div className="flex items-center gap-2 text-white/90 text-base">
<i className="w-4 h-4 text-white/40" data-lucide="refresh-cw"></i>
                                            State Reconciliation
                                        </div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-500" data-lucide="git-merge"></i>
<i className="w-4 h-4 text-emerald-500 fill-emerald-500/20" data-lucide="hexagon"></i>
</div>
</div>
<p className="text-white/40 text-sm font-light">Merge diverted state back to primary</p>
<div className="flex items-center gap-2 text-white/30 text-sm mt-auto pt-2">
<i className="w-4 h-4" data-lucide="clock"></i>
<span>Pending resolution</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-16 shrink-0 border-l border-white/5 flex flex-col items-center py-4 gap-6 bg-[#0B0D10] text-white/40">
<div className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer text-emerald-500">
<i className="w-6 h-6" data-lucide="hexagon"></i>
</div>
<div className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer">
<i className="w-6 h-6" data-lucide="message-square"></i>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer">
<div className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:bg-white/5 transition-colors">
<i className="w-6 h-6" data-lucide="layers"></i>
</div>
<span className="text-xs">T&amp;C</span>
</div>
<div className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer">
<i className="w-6 h-6" data-lucide="calendar"></i>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer">
<div className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:bg-white/5 transition-colors">
<i className="w-6 h-6" data-lucide="compass"></i>
</div>
<span className="text-xs">Logs</span>
</div>
<div className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer">
<i className="w-6 h-6" data-lucide="inbox"></i>
</div>
</div>
</div>
</div>
</section>

<section className="border-y md:py-32 bg-white w-full border-neutral-200/60 pt-24 pb-24 overflow-hidden relative">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-2xl mx-auto mb-20 scroll-animate-target">
<h2 className="text-4xl md:text-5xl tracking-tight font-light text-neutral-900 mb-4">The execution lifecycle.</h2>
<p className="text-lg md:text-xl text-neutral-500 font-light leading-relaxed">From declarative definition to distributed execution, follow the unified path of modern process orchestration.</p>
</div>
<div className="max-w-4xl mr-auto ml-auto relative">

<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-neutral-200 -translate-x-1/2 scroll-animate-line" style={{transformOrigin: '50% 0%'}}></div>

<div className="relative flex flex-col md:flex-row items-start justify-between gap-8 mb-16 group scroll-animate-target">
<div className="hidden flex-1 md:flex text-right pt-2 pr-8 justify-end">
<div className="bg-[#F5F4F0] border border-neutral-200/60 rounded-lg p-5 font-mono text-sm text-neutral-600 inline-block text-left shadow-sm">
<span className="text-blue-600">define</span> workflow {<br/>
                              entry: <span className="text-orange-600">'init'</span>,<br/>
                              strict: <span className="text-emerald-600">true</span><br/>
                            }
                        </div>
</div>
<div className="absolute left-4 md:left-1/2 w-10 h-10 bg-white border border-neutral-300 rounded-full flex items-center justify-center -translate-x-1/2 group-hover:border-neutral-900 transition-colors z-10">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-300 group-hover:bg-neutral-900 transition-colors"></div>
</div>
<div className="flex-1 pl-12 md:pl-0 pt-1">
<span className="text-sm uppercase tracking-widest text-neutral-400 font-light mb-2 block">Phase 01</span>
<h3 className="text-2xl tracking-tight font-light text-neutral-900 mb-2">Declarative Definition</h3>
<p className="text-lg text-neutral-500 font-light leading-relaxed max-w-sm">Write workflows as code using our type-safe DSL. Define strict boundaries, retry policies, and timeout constraints before execution.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row-reverse items-start justify-between gap-8 mb-16 group scroll-animate-target">
<div className="hidden md:flex flex-1 justify-start pt-2">
<div className="bg-white border border-neutral-200/60 rounded-lg p-4 flex flex-col gap-3 shadow-sm min-w-[220px]">
<div className="flex items-center gap-2 text-sm text-neutral-500 font-mono">
<i className="w-5 h-5 animate-spin" data-lucide="refresh-ccw"></i> Compiling AST...
                            </div>
<div className="w-full bg-neutral-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-blue-500 h-full w-[85%] rounded-full"></div>
</div>
</div>
</div>
<div className="absolute left-4 md:left-1/2 w-10 h-10 bg-white border border-neutral-300 rounded-full flex items-center justify-center -translate-x-1/2 group-hover:border-neutral-900 transition-colors z-10">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-300 group-hover:bg-neutral-900 transition-colors"></div>
</div>
<div className="flex-1 md:pl-0 md:text-right flex flex-col md:items-end pt-1 pr-8 pl-0">
<span className="text-sm uppercase tracking-widest text-neutral-400 font-light mb-2 block">Phase 02</span>
<h3 className="text-2xl tracking-tight font-light text-neutral-900 mb-2">Static Verification</h3>
<p className="text-lg text-neutral-500 font-light leading-relaxed max-w-sm">The engine compiles your definition into an Abstract Syntax Tree, statically verifying state transitions to prevent deadlocks.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start justify-between gap-8 group scroll-animate-target">
<div className="hidden md:flex flex-1 text-right pt-2 pr-8 justify-end">
<div className="bg-white border border-neutral-200/60 rounded-lg p-5 shadow-sm min-w-[260px]">
<div className="flex justify-between items-center mb-4">
<span className="text-sm text-neutral-500">Global Nodes</span>
<span className="text-sm text-emerald-600 flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Synced</span>
</div>
<div className="flex gap-1.5 h-10 items-end">
<div className="w-1/6 bg-neutral-100 rounded-sm h-[40%]"></div>
<div className="w-1/6 bg-neutral-100 rounded-sm h-[70%]"></div>
<div className="w-1/6 bg-neutral-100 rounded-sm h-[50%]"></div>
<div className="w-1/6 bg-neutral-900 rounded-sm h-[100%]"></div>
<div className="w-1/6 bg-neutral-100 rounded-sm h-[60%]"></div>
<div className="w-1/6 bg-neutral-100 rounded-sm h-[80%]"></div>
</div>
</div>
</div>
<div className="absolute left-4 md:left-1/2 w-10 h-10 bg-neutral-900 border border-neutral-900 rounded-full flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_0_5px_white]">
<i className="w-5 h-5 text-white" data-lucide="check-square"></i>
</div>
<div className="flex-1 pl-12 md:pl-0 pt-1">
<span className="text-sm uppercase tracking-widest text-neutral-400 font-light mb-2 block">Phase 03</span>
<h3 className="text-2xl tracking-tight font-light text-neutral-900 mb-2">Distributed Execution</h3>
<p className="text-lg text-neutral-500 font-light leading-relaxed max-w-sm">Payloads are dispatched to edge workers. The control plane monitors execution asynchronously, logging state changes seamlessly.</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#0A0D10] py-24 md:py-32 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 md:mb-24 flex flex-col items-center">
<h2 className="text-4xl md:text-5xl tracking-tight font-light text-white mb-6">How teams orchestrate with Nexus</h2>
<p className="text-lg md:text-xl text-white/50 font-light max-w-2xl leading-relaxed">Nexus supports all types of execution workflows. From infrastructure provisioning and automated rollbacks, to secure compliance operations.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="flex flex-col gap-6">

<div className="bg-[#111317] rounded-[1.5rem] p-8 border border-white/5 flex flex-col relative overflow-hidden h-full">
<span className="text-sm text-white/40 font-light mb-3 block">Automate deployment safety</span>
<h3 className="text-xl text-white/90 font-light leading-snug max-w-[95%]">Trigger zero-downtime rollbacks automatically when health checks fail during deployment phases.</h3>
<div className="mt-10 bg-[#1A1D21]/50 border border-white/5 rounded-xl p-5 flex flex-col gap-3">
<div className="flex items-center gap-2">
<div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-sm text-white/60 flex items-center gap-2 font-mono"><i className="w-4 h-4" data-lucide="git-branch"></i> release/v2.4</div>
<div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-sm text-white/60 flex items-center gap-2"><i className="w-4 h-4" data-lucide="globe"></i> Prod</div>
</div>
<div className="px-3 py-2 bg-red-500/10 border border-red-500/20 text-red-400 rounded-md text-sm font-light flex items-center gap-2 w-max mt-1">
<i className="w-4 h-4" data-lucide="alert-triangle"></i> Latency spike detected
                            </div>
<div className="flex items-center gap-2 mt-2">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center"><i className="w-3.5 h-3.5 text-white/70" data-lucide="rotate-ccw"></i></div>
<span className="text-sm text-white/50 font-light">Initiating automatic rollback...</span>
</div>
</div>
</div>

<div className="bg-[#111317] rounded-[1.5rem] p-8 border border-white/5 flex flex-col relative overflow-hidden h-full">
<span className="text-sm text-white/40 font-light mb-3 block">Standardize infrastructure</span>
<h3 className="text-xl text-white/90 font-light leading-snug max-w-[95%]">Configure declarative templates to ensure all new nodes meet compliance and security requirements.</h3>
<div className="mt-10 bg-[#1A1D21] border border-white/5 rounded-xl p-6 -mx-4 -mb-8">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]"><i className="w-5 h-5" data-lucide="server"></i></div>
<span className="text-lg text-white/90 font-medium">Node Validation</span>
</div>
<div className="text-sm text-white/40 font-light mb-4">Pre-flight configuration checks</div>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3 text-white/70 text-base font-light">
<div className="w-5 h-5 rounded border border-white/20 flex items-center justify-center bg-white/5"></div>
                                    VPC Peering active
                                </div>
<div className="flex items-center gap-3 text-white/70 text-base font-light">
<div className="w-5 h-5 rounded border border-white/20 flex items-center justify-center bg-white/5"></div>
                                    IAM Role policies attached
                                </div>
<div className="flex items-center gap-3 text-white/70 text-base font-light">
<div className="w-5 h-5 rounded border border-white/20 flex items-center justify-center bg-white/5"></div>
                                    Telemetry agents verified
                                </div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="bg-[#111317] rounded-[1.5rem] p-8 border border-white/5 flex flex-col relative overflow-hidden h-full">
<span className="text-sm text-white/40 font-light mb-3 block">Integrate ChatOps</span>
<h3 className="text-xl text-white/90 font-light leading-snug max-w-[95%]">Execute complex operational runbooks directly from your incident response channels.</h3>
<div className="mt-10 bg-[#1A1D21]/50 border border-white/5 rounded-xl p-5 flex flex-col gap-6">
<div className="flex gap-3">
<div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 shrink-0"><i className="w-5 h-5" data-lucide="bell"></i></div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-base text-white/90 font-medium">Datadog Alert</span>
<span className="text-sm text-white/40 font-light">14:22</span>
</div>
<p className="text-base text-white/70 font-light">DB utilization is at 95%, triggering mitigation.</p>
<div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#2C2D33] border border-white/10 text-sm text-white/80">
<i className="w-4 h-4 text-emerald-400" data-lucide="play-circle"></i> Mitigate Load
                                    </div>
</div>
</div>
<div className="flex gap-3 relative before:absolute before:left-[19px] before:top-[-24px] before:bottom-8 before:w-[1px] before:bg-white/10 before:-z-10 z-0 ml-1">
<div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#0A0D10] border border-white/10 shrink-0"><i className="w-5 h-5 text-white" data-lucide="command"></i></div>
<div className="bg-[#22262B] border border-white/5 rounded-xl p-4 flex-1 relative z-10 shadow-lg">
<div className="text-base text-white/90 font-medium mb-1 flex items-center justify-between">
                                        Nexus Engine
                                    </div>
<p className="text-sm text-white/50 font-light mb-3">Executing scale-up sequence...</p>
<div className="w-full bg-black/50 h-1.5 rounded-full overflow-hidden">
<div className="bg-blue-500 w-[60%] h-full rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-[#111317] rounded-[1.5rem] p-8 border border-white/5 flex flex-col relative overflow-hidden h-full">
<span className="text-sm text-white/40 font-light mb-3 block">Cross-region synchronization</span>
<h3 className="text-xl text-white/90 font-light leading-snug max-w-[95%]">Orchestrate data replication pipelines across multiple geographic zones seamlessly.</h3>
<div className="mt-10 bg-[#1A1D21] border-t border-x border-white/5 rounded-t-xl -mx-4 -mb-8 overflow-hidden flex flex-col">
<div className="bg-[#22262B] px-6 py-4 border-b border-white/5 flex items-center text-sm font-light text-white/70">
                                Global Replication Pipeline
                            </div>
<div className="p-6 flex flex-col gap-6">
<div className="flex items-start gap-4">
<div className="mt-0.5 w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
<i className="w-3.5 h-3.5 text-emerald-400" data-lucide="check"></i>
</div>
<div>
<div className="text-base text-white/90 font-light mb-1">Snapshot cluster US-East</div>
<div className="text-sm text-white/40 font-light">Completed in 45s</div>
</div>
</div>
<div className="flex items-start gap-4 relative before:absolute before:left-[11px] before:top-[-26px] before:h-[30px] before:w-[1px] before:bg-white/10">
<div className="mt-0.5 w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
<i className="w-3.5 h-3.5 text-blue-400 animate-spin" data-lucide="loader-2"></i>
</div>
<div>
<div className="text-base text-white/90 font-light mb-1">Transfer state to EU-Central</div>
<div className="text-sm text-blue-400/80 font-light">Syncing volumes...</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="bg-[#111317] rounded-[1.5rem] p-8 border border-white/5 flex flex-col relative overflow-hidden h-full">
<span className="text-sm text-white/40 font-light mb-3 block">Manage data pipelines</span>
<h3 className="text-xl text-white/90 font-light leading-snug max-w-[95%]">Coordinate high-volume data transformation jobs with automatic dependency resolution.</h3>
<div className="mt-10 bg-[#1A1D21]/50 border border-white/5 rounded-xl p-6 relative overflow-hidden">
<div className="absolute right-0 top-0 w-40 h-40 bg-indigo-500/10 blur-[50px] rounded-full"></div>
<div className="relative z-10 flex flex-col gap-5">
<div className="flex items-center gap-3 bg-[#22262B] border border-white/5 rounded-lg p-3 w-max">
<div className="w-8 h-8 rounded bg-indigo-500/20 flex items-center justify-center text-indigo-400"><i className="w-4 h-4" data-lucide="database"></i></div>
<span className="text-base text-white/90 font-medium px-1">Nightly ETL Batch</span>
</div>
<div className="bg-black/30 rounded-lg border border-white/5 p-5 text-sm font-light text-white/60 font-mono leading-relaxed">
<span className="text-white/30">source:</span> s3://raw-events/*<br/>
<span className="text-white/30">transform:</span> spark-cluster-alpha<br/>
<span className="text-white/30">target:</span> warehouse-prod
                                </div>
</div>
</div>
</div>

<div className="bg-[#111317] rounded-[1.5rem] p-8 border border-white/5 flex flex-col relative overflow-hidden h-full">
<span className="text-sm text-white/40 font-light mb-3 block">Secure sensitive operations</span>
<h3 className="text-xl text-white/90 font-light leading-snug max-w-[95%]">Require multi-factor approval for workflows involving critical or sensitive production data.</h3>
<div className="mt-12 flex flex-col justify-end relative h-[180px]">

<div className="absolute bottom-6 w-full bg-[#1A1D21] border border-white/5 rounded-xl p-5 scale-90 translate-y-6 opacity-30 flex items-center gap-3"></div>
<div className="absolute bottom-3 w-full bg-[#1C1F24] border border-white/5 rounded-xl p-5 scale-95 translate-y-3 opacity-60 flex items-center gap-3"></div>
<div className="relative w-full bg-[#22262B] border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.6)] rounded-xl p-6 flex flex-col gap-4">
<div className="flex items-center gap-3 mb-1 text-white/90">
<i className="w-5 h-5" data-lucide="lock"></i>
<span className="text-lg font-medium">Elevated Execution Request</span>
</div>
<p className="text-base text-white/60 font-light leading-relaxed">Production schema migration requires secondary approval from SecOps lead.</p>
<div className="mt-2 flex items-center gap-3">
<button className="bg-white text-black px-5 py-2 rounded-md text-sm font-medium hover:bg-neutral-200 transition-colors">Approve</button>
<button className="bg-transparent border border-white/10 text-white/60 px-5 py-2 rounded-md text-sm font-medium hover:bg-white/5 transition-colors">Deny</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-white border-t border-neutral-200/60 py-24 md:py-32 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 md:mb-24 flex flex-col items-center">
<h2 className="text-4xl md:text-5xl tracking-tight font-light text-neutral-900 mb-6 flex flex-wrap justify-center gap-x-3 gap-y-2 scroll-reveal-target">
<div className="overflow-hidden inline-block pb-2"><span className="scroll-reveal-word inline-block">Trusted</span></div>
<div className="overflow-hidden inline-block pb-2"><span className="scroll-reveal-word inline-block">by</span></div>
<div className="overflow-hidden inline-block pb-2"><span className="scroll-reveal-word inline-block">platform</span></div>
<div className="overflow-hidden inline-block pb-2"><span className="scroll-reveal-word inline-block">engineers</span></div>
<div className="overflow-hidden inline-block pb-2"><span className="scroll-reveal-word inline-block text-neutral-400">worldwide.</span></div>
</h2>
<p className="text-lg md:text-xl text-neutral-500 font-light max-w-2xl leading-relaxed">From rapid-growth startups to global enterprises, infrastructure teams rely on Nexus for absolute execution certainty.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#F5F4F0] rounded-2xl p-8 border border-neutral-200/60 flex flex-col gap-6 shadow-sm relative group hover:border-neutral-300 transition-colors">
<iconify-icon className="text-3xl text-neutral-300 absolute top-8 right-8" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-lg text-neutral-700 font-light leading-relaxed relative z-10">"Nexus replaced four different internal tools. Our deployment failure rate dropped to zero, and the rollback orchestration is practically magic."</p>
<div className="mt-auto pt-6 border-t border-neutral-200/80 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500">
<iconify-icon className="text-2xl" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-neutral-900">Sarah Chen</span>
<span className="text-xs text-neutral-500">Lead DevOps, FinTech Global</span>
</div>
</div>
</div>

<div className="bg-[#F5F4F0] rounded-2xl p-8 border border-neutral-200/60 flex flex-col gap-6 shadow-sm relative group hover:border-neutral-300 transition-colors">
<iconify-icon className="text-3xl text-neutral-300 absolute top-8 right-8" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-lg text-neutral-700 font-light leading-relaxed relative z-10">"The ability to visually trace state transitions across distributed edge nodes is a superpower. It changed how we architecture our pipelines."</p>
<div className="mt-auto pt-6 border-t border-neutral-200/80 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500">
<iconify-icon className="text-2xl" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-neutral-900">Marcus Wright</span>
<span className="text-xs text-neutral-500">Platform Architect, DataStream</span>
</div>
</div>
</div>

<div className="bg-[#F5F4F0] rounded-2xl p-8 border border-neutral-200/60 flex flex-col gap-6 shadow-sm relative group hover:border-neutral-300 transition-colors">
<iconify-icon className="text-3xl text-neutral-300 absolute top-8 right-8" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-lg text-neutral-700 font-light leading-relaxed relative z-10">"Multi-region synchronization used to take weeks to configure and verify. With Nexus, it's just a few declarative lines in our repository."</p>
<div className="mt-auto pt-6 border-t border-neutral-200/80 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500">
<iconify-icon className="text-2xl" icon="solar:user-id-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-neutral-900">Elena Rostova</span>
<span className="text-xs text-neutral-500">VP of Engineering, CloudScale</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32 bg-[#F5F4F0] border-t border-neutral-200/60">
<div className="text-center mb-12">
<h2 className="text-4xl md:text-5xl tracking-tight font-light text-neutral-900 mb-4">Transparent resource allocation.</h2>
<p className="text-lg md:text-xl text-neutral-500 font-light">Scale your infrastructure precisely according to your workflow demands.</p>
</div>

<div className="flex justify-center items-center gap-4 mb-16">
<span className="text-base text-neutral-500 font-light">Monthly</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-12 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neutral-900"></div>
</label>
<span className="text-base text-neutral-900 font-light">Annually <span className="text-sm text-emerald-600 ml-1 font-light">-20%</span></span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

<div className="bg-white border border-neutral-200/60 rounded-2xl p-8 flex flex-col">
<h3 className="text-xl tracking-tight font-light text-neutral-900 mb-2">Developer</h3>
<p className="text-lg text-neutral-500 font-light mb-6">For exploration and local testing.</p>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-5xl tracking-tight font-light text-neutral-900">$0</span>
<span className="text-base text-neutral-500 font-light">/mo</span>
</div>
<ul className="flex flex-col gap-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-base text-neutral-600 font-light"><i className="w-5 h-5 text-neutral-300" data-lucide="check-circle"></i> 10,000 executions/mo</li>
<li className="flex items-center gap-3 text-base text-neutral-600 font-light"><i className="w-5 h-5 text-neutral-300" data-lucide="check-circle"></i> 3-day log retention</li>
<li className="flex items-center gap-3 text-base text-neutral-600 font-light"><i className="w-5 h-5 text-neutral-300" data-lucide="check-circle"></i> Community support</li>
</ul>
<a className="w-full py-3 rounded-md border border-neutral-200 text-base text-center text-neutral-900 hover:bg-neutral-50 transition-colors font-light" href="#">Start Free</a>
</div>

<div className="bg-white border border-neutral-900 rounded-2xl p-8 flex flex-col relative shadow-lg scale-100 md:scale-105 z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-900 text-white text-[11px] uppercase tracking-widest px-4 py-1.5 rounded-full">Standard</div>
<h3 className="text-xl tracking-tight font-light text-neutral-900 mb-2">Production</h3>
<p className="text-lg text-neutral-500 font-light mb-6">For teams deploying critical paths.</p>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-5xl tracking-tight font-light text-neutral-900">$49</span>
<span className="text-base text-neutral-500 font-light">/mo</span>
</div>
<ul className="flex flex-col gap-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-base text-neutral-900 font-light"><i className="w-5 h-5 text-neutral-900" data-lucide="check-circle"></i> 1M executions/mo</li>
<li className="flex items-center gap-3 text-base text-neutral-600 font-light"><i className="w-5 h-5 text-neutral-900" data-lucide="check-circle"></i> 30-day log retention</li>
<li className="flex items-center gap-3 text-base text-neutral-600 font-light"><i className="w-5 h-5 text-neutral-900" data-lucide="check-circle"></i> Advanced telemetry</li>
</ul>
<a className="w-full py-3 rounded-md bg-neutral-900 text-white text-base text-center hover:bg-neutral-800 transition-colors font-light" href="#">Upgrade Plan</a>
</div>

<div className="bg-white border border-neutral-200/60 rounded-2xl p-8 flex flex-col">
<h3 className="text-xl tracking-tight font-light text-neutral-900 mb-2">Enterprise</h3>
<p className="text-lg text-neutral-500 font-light mb-6">Custom infrastructure &amp; compliance.</p>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-5xl tracking-tight font-light text-neutral-900">Custom</span>
</div>
<ul className="flex flex-col gap-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-base text-neutral-600 font-light"><i className="w-5 h-5 text-neutral-300" data-lucide="check-circle"></i> Unlimited executions</li>
<li className="flex items-center gap-3 text-base text-neutral-600 font-light"><i className="w-5 h-5 text-neutral-300" data-lucide="check-circle"></i> Infinite retention</li>
<li className="flex items-center gap-3 text-base text-neutral-600 font-light"><i className="w-5 h-5 text-neutral-300" data-lucide="check-circle"></i> Single Sign-On (SAML)</li>
</ul>
<a className="w-full py-3 rounded-md border border-neutral-200 text-base text-center text-neutral-900 hover:bg-neutral-50 transition-colors font-light" href="#">Contact Sales</a>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-4 py-16">
<div className="bg-[#0A0D10] rounded-[2rem] p-12 md:p-24 text-center relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
<i className="w-10 h-10 text-white/40 mb-6" data-lucide="power"></i>
<h2 className="text-4xl md:text-6xl tracking-tight font-light text-white mb-6">Initialize your cluster.</h2>
<p className="text-lg md:text-xl text-white/60 font-light mb-10 leading-relaxed">Join engineering teams building resilient, self-healing architectures. Deploy your first declarative workflow in under 5 minutes.</p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-md text-base font-light hover:bg-neutral-200 transition-colors" href="#">
                        Deploy Now <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/20 px-8 py-4 rounded-md text-base font-light hover:bg-white/5 transition-colors" href="#">
                        Read the Docs
                    </a>
</div>
</div>
</div>
</section>

<footer className="w-full bg-[#F5F4F0] border-t border-neutral-200/60 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
<div className="col-span-2">
<div className="text-xl tracking-tighter font-light text-neutral-900 flex items-center gap-2 mb-4">
<i className="w-6 h-6" data-lucide="command"></i>
                        NEXUS
                    </div>
<p className="text-base text-neutral-500 font-light max-w-xs leading-relaxed">The orchestration layer for the modern internet. Built for high-stakes execution environments.</p>
</div>
<div>
<h4 className="text-base font-medium text-neutral-900 mb-4">Product</h4>
<ul className="flex flex-col gap-3">
<li><a className="text-base text-neutral-500 hover:text-neutral-900 font-light transition-colors" href="#">Platform</a></li>
<li><a className="text-base text-neutral-500 hover:text-neutral-900 font-light transition-colors" href="#">Observability</a></li>
<li><a className="text-base text-neutral-500 hover:text-neutral-900 font-light transition-colors" href="#">Edge Sync</a></li>
</ul>
</div>
<div>
<h4 className="text-base font-medium text-neutral-900 mb-4">Resources</h4>
<ul className="flex flex-col gap-3">
<li><a className="text-base text-neutral-500 hover:text-neutral-900 font-light transition-colors" href="#">Documentation</a></li>
<li><a className="text-base text-neutral-500 hover:text-neutral-900 font-light transition-colors" href="#">API Reference</a></li>
<li><a className="text-base text-neutral-500 hover:text-neutral-900 font-light transition-colors" href="#">Status</a></li>
</ul>
</div>
<div>
<h4 className="text-base font-medium text-neutral-900 mb-4">Company</h4>
<ul className="flex flex-col gap-3">
<li><a className="text-base text-neutral-500 hover:text-neutral-900 font-light transition-colors" href="#">About</a></li>
<li><a className="text-base text-neutral-500 hover:text-neutral-900 font-light transition-colors" href="#">Blog</a></li>
<li><a className="text-base text-neutral-500 hover:text-neutral-900 font-light transition-colors" href="#">Careers</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-200/60 gap-4">
<p className="text-sm text-neutral-400 font-light">© 2024 Nexus Systems Inc. All rights reserved.</p>
<div className="flex items-center gap-4 text-neutral-400">
<a className="hover:text-neutral-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="smile"></i></a>
<a className="hover:text-neutral-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="mail"></i></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
