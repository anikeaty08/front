import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
flux: {
bg: '#050505',
panel: '#0A0A0A',
border: '#1F1F1F',
cyan: '#7DFDFE', // Tron Blue
cyanDim: 'rgba(125, 253, 254, 0.1)',
text: '#E5E5E5',
muted: '#888888'
}
},
letterSpacing: {
tight: '-0.025em',
tighter: '-0.04em',
},
animation: {
'blink': 'blink 1s step-end infinite',
'scan': 'scan 8s linear infinite',
},
keyframes: {
blink: {
'0%, 100%': { opacity: '1' },
'50%': { opacity: '0' },
},
scan: {
'0%': { transform: 'translateY(-100%)' },
'100%': { transform: 'translateY(100%)' },
}
}
}
}
}



{
"imports": {
"three": "https://unpkg.com/three@0.160.0/build/three.module.js",
"three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/"
}
}



                                for(let i=0; i<30; i++) {
                                    let h = Math.floor(Math.random() * 80) + 10;
                                    document.write(`<div class="w-full bg-flux-cyan" style="height: ${h}%"></div>`);
                                }
                            


        import * as THREE from 'three';
        import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
        import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
        import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
        import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
        
        const container = document.getElementById('canvas-container');
        
        // --- CONFIG ---
        const CONFIG = {
            particleCount: 16000,
            color: new THREE.Color('#7DFDFE'),
            bgColor: new THREE.Color('#050505'),
        };

        // --- SCENE ---
        const renderer = new THREE.WebGLRenderer({ 
            antialias: false, 
            powerPreference: "high-performance",
            alpha: true
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(CONFIG.bgColor, 0.02);

        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.set(0, 5, 20);
        camera.lookAt(0, 0, 0);

        // --- PARTICLES ---
        // Generating a structured "Floor" or "Grid" to resemble data planes
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(CONFIG.particleCount * 3);
        const randoms = new Float32Array(CONFIG.particleCount * 3);
        
        let i3 = 0;
        const width = 120;
        const depth = 120;
        const countPerSide = Math.sqrt(CONFIG.particleCount);
        
        for(let x = 0; x < countPerSide; x++) {
            for(let z = 0; z < countPerSide; z++) {
                // Grid layout
                positions[i3] = (x / countPerSide - 0.5) * width;
                positions[i3 + 1] = 0; // Flat initially
                positions[i3 + 2] = (z / countPerSide - 0.5) * depth;
                
                randoms[i3] = Math.random();
                randoms[i3+1] = Math.random();
                randoms[i3+2] = Math.random();
                
                i3 += 3;
            }
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 3));

        const material = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uColor: { value: CONFIG.color },
                uMouse: { value: new THREE.Vector2(0,0) }
            },
            vertexShader: `
                uniform float uTime;
                uniform vec2 uMouse;
                attribute vec3 aRandom;
                varying float vAlpha;
                varying float vDist;

                // Simplex Noise Function (Simplified)
                vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
                vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
                vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
                float snoise(vec2 v) {
                    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
                    vec2 i  = floor(v + dot(v, C.yy) );
                    vec2 x0 = v - i + dot(i, C.xx);
                    vec2 i1; i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                    vec4 x12 = x0.xyxy + C.xxzz;
                    x12.xy -= i1;
                    i = mod289(i);
                    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
                    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
                    m = m*m ;
                    m = m*m ;
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
                    vec3 pos = position;
                    
                    // Wave effect based on grid position
                    float wave = snoise(vec2(pos.x * 0.05 + uTime * 0.1, pos.z * 0.05 + uTime * 0.1));
                    pos.y += wave * 4.0;

                    // Mouse interaction
                    float dist = distance(pos.xz, uMouse * 30.0); // Map mouse roughly to world
                    float mouseInfluence = smoothstep(15.0, 0.0, dist);
                    pos.y += mouseInfluence * 6.0 * sin(uTime * 2.0);

                    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
                    
                    // Size attenuation
                    gl_PointSize = (2.0 + aRandom.x * 2.0) * (20.0 / -mvPosition.z);
                    gl_Position = projectionMatrix * mvPosition;

                    // Fade out in distance
                    float depth = -mvPosition.z;
                    vAlpha = smoothstep(50.0, 10.0, depth) * (0.3 + aRandom.y * 0.5);
                }
            `,
            fragmentShader: `
                uniform vec3 uColor;
                varying float vAlpha;

                void main() {
                    // Square particle for "Pixel/Terminal" look
                    vec2 coord = gl_PointCoord - 0.5;
                    if(abs(coord.x) > 0.4 || abs(coord.y) > 0.4) discard;
                    
                    gl_FragColor = vec4(uColor, vAlpha);
                }
            `,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // --- POST PROCESSING ---
        const composer = new EffectComposer(renderer);
        const renderPass = new RenderPass(scene, camera);
        composer.addPass(renderPass);

        // Bloom for the "Tron" glow
        const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
        bloomPass.threshold = 0.05;
        bloomPass.strength = 1.2;
        bloomPass.radius = 0.1;
        composer.addPass(bloomPass);

        // RGB Shift Shader for "Glitch/Terminal" vibe
        const rgbShiftShader = {
            uniforms: {
                "tDiffuse": { value: null },
                "amount": { value: 0.002 }
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform sampler2D tDiffuse;
                uniform float amount;
                varying vec2 vUv;
                void main() {
                    vec2 rUv = vUv + vec2(amount, 0.0);
                    vec2 gUv = vUv;
                    vec2 bUv = vUv - vec2(amount, 0.0);
                    float r = texture2D(tDiffuse, rUv).r;
                    float g = texture2D(tDiffuse, gUv).g;
                    float b = texture2D(tDiffuse, bUv).b;
                    gl_FragColor = vec4(r, g, b, 1.0);
                }
            `
        };
        const rgbShiftPass = new ShaderPass(rgbShiftShader);
        composer.addPass(rgbShiftPass);

        // --- ANIMATION ---
        const clock = new THREE.Clock();
        const mouse = new THREE.Vector2(0,0);
        let targetMouse = new THREE.Vector2(0,0);

        window.addEventListener('mousemove', (e) => {
            // Normalize mouse -1 to 1
            targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        });

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            composer.setSize(window.innerWidth, window.innerHeight);
        });

        function animate() {
            requestAnimationFrame(animate);
            const time = clock.getElapsedTime();

            // Smooth mouse interpolation
            mouse.x += (targetMouse.x - mouse.x) * 0.05;
            mouse.y += (targetMouse.y - mouse.y) * 0.05;

            material.uniforms.uTime.value = time;
            material.uniforms.uMouse.value = mouse;

            // Slowly rotate the grid
            particles.rotation.y = time * 0.05;

            // Camera float
            camera.position.y = 5 + Math.sin(time * 0.2) * 1;

            composer.render();
        }
        
        animate();
    


        // Init Icons
        lucide.createIcons();

        // Typewriter Effect
        const text = "Unlock institutional-grade automation with Flux Terminal. Empowering traders to deploy delta-neutral strategies, generate volume, and execute custom algorithms across the latest perpetual DEXes.";
        const typeContainer = document.getElementById('typing-text');
        let typeIndex = 0;

        function typeWriter() {
            if (typeIndex < text.length) {
                typeContainer.innerHTML += text.charAt(typeIndex);
                typeIndex++;
                setTimeout(typeWriter, 15); // Fast typing speed
            } else {
                typeContainer.innerHTML += '<span class="cursor-blink inline-block w-2 h-4 bg-flux-cyan ml-1 align-middle"></span>';
            }
        }
        
        // Start typing after a short delay
        setTimeout(typeWriter, 500);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 opacity-60" id="canvas-container"></div>
<div className="crt-overlay fixed inset-0 z-[1]"></div>
<div className="noise-overlay"></div>

<nav className="fixed top-0 left-0 w-full z-50 border-b border-flux-border bg-flux-bg/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-14">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-2.5 h-2.5 bg-flux-cyan shadow-[0_0_10px_#7DFDFE]"></div>
<span className="font-mono text-sm tracking-tight font-medium text-white group-hover:text-flux-cyan transition-colors">FLUX_TERMINAL<span className="text-flux-muted">.exe</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-mono text-flux-muted">
<a className="hover:text-flux-cyan transition-colors" href="#features">[FEATURES]</a>
<a className="hover:text-flux-cyan transition-colors" href="#performance">[PERFORMANCE]</a>
<a className="hover:text-flux-cyan transition-colors" href="#engine">[ENGINE]</a>
</div>
<div className="flex items-center gap-3">
<span className="hidden xs:inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="font-mono text-[10px] text-emerald-500 tracking-wider">SYSTEM_ONLINE</span>
<button className="ml-4 px-3 py-1 border border-flux-border hover:border-flux-cyan text-[10px] font-mono hover:text-flux-cyan transition-all bg-flux-panel">
                        CONNECT_WALLET
                    </button>
</div>
</div>
</div>
</nav>

<main className="relative z-10 pt-24 pb-20">

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 flex flex-col md:flex-row items-center min-h-[70vh]">
<div className="w-full md:w-2/3 pr-0 md:pr-12">
<div className="inline-flex items-center gap-2 px-2 py-1 mb-6 border border-flux-cyan/20 bg-flux-cyan/5 rounded text-[10px] font-mono text-flux-cyan">
<i className="w-3 h-3" data-lucide="terminal"></i>
<span>V2.4.0 STABLE BUILD RELEASED</span>
</div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6 leading-[1.1]">
                    The Premier Quantitative <br/>
<span className="text-flux-muted">Execution Engine.</span>
</h1>
<div className="h-24 md:h-20 mb-8">
<p className="text-sm md:text-base text-flux-muted font-mono leading-relaxed max-w-2xl border-l-2 border-flux-border pl-4" id="typing-text">

</p>
</div>
<div className="flex flex-col xs:flex-row gap-4">
<button className="group relative px-6 py-3 bg-flux-cyan text-black font-mono text-xs font-medium tracking-wide overflow-hidden transition-transform active:scale-95">
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<span className="relative flex items-center gap-2">
                            DEPLOY_STRATEGY <i className="w-3 h-3" data-lucide="arrow-right"></i>
</span>
</button>
<button className="group px-6 py-3 border border-flux-border bg-flux-panel hover:border-flux-muted text-white font-mono text-xs font-medium tracking-wide transition-colors">
                        VIEW_DOCUMENTATION
                    </button>
</div>
</div>

<div className="w-full md:w-1/3 mt-12 md:mt-0">
<div className="terminal-panel p-5 rounded-sm">
<div className="terminal-border-corner corner-tl"></div>
<div className="terminal-border-corner corner-tr"></div>
<div className="terminal-border-corner corner-bl"></div>
<div className="terminal-border-corner corner-br"></div>
<div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
<span className="font-mono text-[10px] text-flux-muted">LIVE_METRICS</span>
<div className="flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-flux-border"></div>
<div className="w-1.5 h-1.5 rounded-full bg-flux-border"></div>
</div>
</div>
<div className="space-y-4">
<div className="flex justify-between items-end">
<span className="text-xs text-flux-muted font-mono">24H_VOLUME</span>
<span className="text-xl font-mono text-white tracking-tight">$15,402,193<span className="text-flux-cyan text-xs">.00</span></span>
</div>
<div className="w-full bg-flux-border h-px"></div>
<div className="flex justify-between items-end">
<span className="text-xs text-flux-muted font-mono">LATENCY</span>
<span className="text-xl font-mono text-emerald-400 tracking-tight">~40<span className="text-xs">ms</span></span>
</div>
<div className="w-full bg-flux-border h-px"></div>
<div className="flex justify-between items-end">
<span className="text-xs text-flux-muted font-mono">ACTIVE_NODES</span>
<span className="text-xl font-mono text-white tracking-tight">120<span className="text-flux-muted text-xs">/120</span></span>
</div>

<div className="mt-4 h-16 w-full flex items-end justify-between gap-0.5 opacity-50">

</div>
</div>
</div>
</div>
</section>

<section className="border-y border-flux-border bg-flux-bg/50 backdrop-blur-sm py-20" id="performance">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-flux-border">
<div className="pt-8 md:pt-0 px-4">
<div className="text-flux-cyan mb-2">
<i className="w-5 h-5" data-lucide="activity"></i>
</div>
<h3 className="text-3xl font-mono text-white tracking-tight mb-2">15B+</h3>
<p className="text-sm text-flux-muted leading-relaxed">Aggregated volume processed across major perp DEXes with zero major incidents.</p>
</div>
<div className="pt-8 md:pt-0 px-4">
<div className="text-flux-cyan mb-2">
<i className="w-5 h-5" data-lucide="trending-up"></i>
</div>
<h3 className="text-3xl font-mono text-white tracking-tight mb-2">2.5</h3>
<p className="text-sm text-flux-muted leading-relaxed">Consistent Sharpe ratio maintained across diverse market conditions since 2018.</p>
</div>
<div className="pt-8 md:pt-0 px-4">
<div className="text-flux-cyan mb-2">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<h3 className="text-3xl font-mono text-white tracking-tight mb-2">2M+</h3>
<p className="text-sm text-flux-muted leading-relaxed">Trades executed with institutional-grade automation and reliability.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32" id="features">
<div className="mb-16">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">Core Architecture</h2>
<p className="text-flux-muted max-w-2xl">Unlock institutional-grade automation. Tailor strategies with a flexible interface for custom parameters, allowing precise control over entry/exit rules.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="terminal-panel p-6 group">
<div className="terminal-border-corner corner-tl"></div>
<div className="terminal-border-corner corner-tr"></div>
<div className="terminal-border-corner corner-bl"></div>
<div className="terminal-border-corner corner-br"></div>
<div className="w-10 h-10 bg-flux-bg border border-flux-border flex items-center justify-center mb-6 group-hover:border-flux-cyan transition-colors">
<i className="w-5 h-5 text-white" data-lucide="cpu"></i>
</div>
<h3 className="text-sm font-mono text-white mb-2">Configurable Trade Engine</h3>
<p className="text-xs text-flux-muted leading-relaxed">Tailor strategies with a no-code interface. Precise control over position sizing and hedging mechanics.</p>
</div>

<div className="terminal-panel p-6 group">
<div className="terminal-border-corner corner-tl"></div>
<div className="terminal-border-corner corner-tr"></div>
<div className="terminal-border-corner corner-bl"></div>
<div className="terminal-border-corner corner-br"></div>
<div className="w-10 h-10 bg-flux-bg border border-flux-border flex items-center justify-center mb-6 group-hover:border-flux-cyan transition-colors">
<i className="w-5 h-5 text-white" data-lucide="layers"></i>
</div>
<h3 className="text-sm font-mono text-white mb-2">Unified DEX Interface</h3>
<p className="text-xs text-flux-muted leading-relaxed">Aggregate liquidity from Nomina, Extended, Pacifica, and Paradex in one intuitive dashboard.</p>
</div>

<div className="terminal-panel p-6 group">
<div className="terminal-border-corner corner-tl"></div>
<div className="terminal-border-corner corner-tr"></div>
<div className="terminal-border-corner corner-bl"></div>
<div className="terminal-border-corner corner-br"></div>
<div className="w-10 h-10 bg-flux-bg border border-flux-border flex items-center justify-center mb-6 group-hover:border-flux-cyan transition-colors">
<i className="w-5 h-5 text-white" data-lucide="shield-check"></i>
</div>
<h3 className="text-sm font-mono text-white mb-2">Risk Controls</h3>
<p className="text-xs text-flux-muted leading-relaxed">Live VaR modeling, stop-loss triggers, and drawdown limits to protect capital 24/7.</p>

<div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
<span className="text-[10px] font-mono text-flux-cyan">AUTO_HEDGE</span>
<div className="relative inline-block w-8 h-4 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-3 h-3 rounded-sm bg-flux-bg border border-flux-border appearance-none cursor-pointer transition-all duration-300 top-0.5 left-0.5 checked:left-4 checked:border-flux-cyan" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-sm bg-white/5 cursor-pointer" htmlFor="toggle"></label>
</div>
</div>
</div>

<div className="terminal-panel p-6 group">
<div className="terminal-border-corner corner-tl"></div>
<div className="terminal-border-corner corner-tr"></div>
<div className="terminal-border-corner corner-bl"></div>
<div className="terminal-border-corner corner-br"></div>
<div className="w-10 h-10 bg-flux-bg border border-flux-border flex items-center justify-center mb-6 group-hover:border-flux-cyan transition-colors">
<i className="w-5 h-5 text-white" data-lucide="lock"></i>
</div>
<h3 className="text-sm font-mono text-white mb-2">High-Security Architecture</h3>
<p className="text-xs text-flux-muted leading-relaxed">Enterprise encryption and self-custodial integrations. Regular third-party audits.</p>
</div>

<div className="terminal-panel p-6 group">
<div className="terminal-border-corner corner-tl"></div>
<div className="terminal-border-corner corner-tr"></div>
<div className="terminal-border-corner corner-bl"></div>
<div className="terminal-border-corner corner-br"></div>
<div className="w-10 h-10 bg-flux-bg border border-flux-border flex items-center justify-center mb-6 group-hover:border-flux-cyan transition-colors">
<i className="w-5 h-5 text-white" data-lucide="network"></i>
</div>
<h3 className="text-sm font-mono text-white mb-2">Delta-Neutral Strategies</h3>
<p className="text-xs text-flux-muted leading-relaxed">Pre-built templates for volume creation, liquidity provision, and arbitrage.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
<div className="terminal-panel p-8 md:p-12 text-center relative overflow-hidden">

<div className="absolute inset-0 z-0 opacity-10" style={{backgroundImage: 'linear-gradient(#7DFDFE 1px, transparent 1px), linear-gradient(90deg, #7DFDFE 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Initialize Your Edge</h2>
<p className="text-flux-muted max-w-xl mx-auto mb-8 text-sm">Join the ranks of successful traders who've transformed their workflows. Experience the future of quantitative execution today.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-8 py-3 bg-flux-cyan text-black font-mono text-xs font-medium hover:bg-white transition-colors">
                            START_TRIAL_ACCESS
                        </button>
<button className="px-8 py-3 border border-flux-border text-white font-mono text-xs font-medium hover:text-flux-cyan hover:border-flux-cyan transition-colors">
                            CONTACT_SALES
                        </button>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-flux-border bg-flux-bg py-12 relative z-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-flux-muted"></div>
<span className="font-mono text-xs text-flux-muted">FLUX TERMINAL © 2024</span>
</div>
<div className="flex gap-6">
<a className="text-flux-muted hover:text-flux-cyan transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-flux-muted hover:text-flux-cyan transition-colors" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a className="text-flux-muted hover:text-flux-cyan transition-colors" href="#"><i className="w-4 h-4" data-lucide="disc"></i></a>
</div>
</div>
</footer>





    </>
  );
}
