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
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
space: '#020204',
glass: 'rgba(255, 255, 255, 0.03)',
glassBorder: 'rgba(255, 255, 255, 0.08)',
accent: '#38bdf8', // Sky 400
},
letterSpacing: {
tight: '-0.02em',
tighter: '-0.04em',
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
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



        import * as THREE from 'three';
        import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
        import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
        import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
        
        // --- CONFIG ---
        const CONFIG = {
            particleCount: 80000,
            camZ: 30,
            baseColor: 0x020204,
        };

        const STATE = {
            mode: 0,
            targetMode: 0,
            time: 0,
            mouse: new THREE.Vector2(0,0),
            targetMouse: new THREE.Vector2(0,0),
        };

        // --- SETUP ---
        const container = document.getElementById('canvas-container');
        const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: "high-performance" });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.toneMapping = THREE.ReinhardToneMapping;
        container.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(CONFIG.baseColor, 0.02);
        scene.background = new THREE.Color(CONFIG.baseColor);

        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = CONFIG.camZ;

        // --- POST PROCESSING ---
        const composer = new EffectComposer(renderer);
        const renderPass = new RenderPass(scene, camera);
        composer.addPass(renderPass);

        const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
        bloomPass.threshold = 0.15;
        bloomPass.strength = 1.2; 
        bloomPass.radius = 0.5;
        composer.addPass(bloomPass);

        // --- PARTICLES ---
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(CONFIG.particleCount * 3);
        const randoms = new Float32Array(CONFIG.particleCount * 3);
        const indices = new Float32Array(CONFIG.particleCount);

        for(let i=0; i<CONFIG.particleCount; i++) {
            indices[i] = i;
            randoms[i*3] = Math.random();
            randoms[i*3+1] = Math.random();
            randoms[i*3+2] = Math.random();
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 3));
        geometry.setAttribute('aIndex', new THREE.BufferAttribute(indices, 1));

        const material = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uMode: { value: 0 },
                uMouse: { value: new THREE.Vector2(0,0) },
                uColorA: { value: new THREE.Color('#06b6d4') }, // Cyan
                uColorB: { value: new THREE.Color('#8b5cf6') }, // Violet
            },
            vertexShader: `
                uniform float uTime;
                uniform float uMode;
                uniform vec2 uMouse;
                attribute float aIndex;
                attribute vec3 aRandom;
                varying vec3 vColor;
                varying float vAlpha;

                // Shapes
                vec3 getSphere(float i) {
                    float phi = acos(-1.0 + (2.0 * i) / ${CONFIG.particleCount}.0);
                    float theta = sqrt(${CONFIG.particleCount}.0 * 3.14159) * phi;
                    float r = 10.0 + aRandom.x * 2.0;
                    return vec3(r * sin(phi) * cos(theta), r * sin(phi) * sin(theta), r * cos(phi));
                }

                vec3 getTorus(float i) {
                    float theta = i / ${CONFIG.particleCount}.0 * 3.14159 * 2.0 * 20.0;
                    float phi = i / ${CONFIG.particleCount}.0 * 3.14159 * 2.0;
                    float r = 12.0 + cos(theta) * 4.0;
                    return vec3(r * cos(phi), r * sin(phi), sin(theta) * 4.0);
                }

                vec3 getGrid(float i) {
                    float s = 30.0;
                    float n = pow(${CONFIG.particleCount}.0, 1.0/3.0);
                    float x = mod(i, n);
                    float y = mod(floor(i/n), n);
                    float z = floor(i/(n*n));
                    return (vec3(x,y,z)/n - 0.5) * s;
                }

                vec3 getStream(float i) {
                    float t = i / ${CONFIG.particleCount}.0;
                    float ang = t * 30.0;
                    float r = 2.0 + t * 15.0;
                    return vec3(cos(ang)*r, sin(ang)*r, (t - 0.5) * 40.0);
                }

                void main() {
                    float t = uTime * 0.2;
                    vec3 pos = vec3(0.0);
                    
                    // Shape interpolation
                    vec3 pSphere = getSphere(aIndex);
                    vec3 pTorus = getTorus(aIndex);
                    vec3 pGrid = getGrid(aIndex);
                    vec3 pStream = getStream(aIndex);

                    // Add organic noise movement
                    vec3 noise = vec3(
                        sin(aIndex * 0.1 + t),
                        cos(aIndex * 0.2 + t),
                        sin(aIndex * 0.3 + t)
                    ) * 0.5;

                    float m = uMode;
                    if(m < 1.0) pos = mix(pSphere, pTorus, m);
                    else if(m < 2.0) pos = mix(pTorus, pGrid, m - 1.0);
                    else pos = mix(pGrid, pStream, m - 2.0);

                    pos += noise;

                    // Rotation
                    float rot = t * 0.2;
                    float c = cos(rot), s = sin(rot);
                    pos.xz = mat2(c, -s, s, c) * pos.xz;

                    // Mouse interaction (Data distortion)
                    float dist = distance(pos.xy, uMouse * 30.0);
                    float influence = smoothstep(10.0, 0.0, dist);
                    pos.z += influence * 5.0 * sin(t * 5.0);

                    vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
                    gl_PointSize = (1.5 + aRandom.y) * (20.0 / -mvPos.z);
                    gl_Position = projectionMatrix * mvPos;

                    // Coloring based on depth and position
                    float depth = smoothstep(50.0, 0.0, -mvPos.z);
                    vAlpha = depth * (0.3 + aRandom.z * 0.7);
                    
                    // Data flow highlighting
                    float scan = smoothstep(0.4, 0.6, sin(pos.y * 0.2 + t * 2.0));
                    vAlpha += scan * 0.5;
                }
            `,
            fragmentShader: `
                uniform vec3 uColorA;
                uniform vec3 uColorB;
                varying float vAlpha;
                
                void main() {
                    float dist = length(gl_PointCoord - 0.5);
                    if (dist > 0.5) discard;
                    
                    // Gradient circle
                    float strength = 1.0 - (dist * 2.0);
                    strength = pow(strength, 2.0);
                    
                    vec3 color = mix(uColorA, uColorB, vAlpha);
                    gl_FragColor = vec4(color, vAlpha * strength);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // --- EVENTS ---
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            composer.setSize(window.innerWidth, window.innerHeight);
        });

        window.addEventListener('mousemove', (e) => {
            STATE.targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            STATE.targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        });

        window.setMode = (idx) => {
            STATE.targetMode = idx;
            
            // Color shift logic based on mode
            const colors = [
                { a: '#06b6d4', b: '#8b5cf6' }, // Cyan/Purple
                { a: '#ec4899', b: '#6366f1' }, // Pink/Indigo
                { a: '#10b981', b: '#3b82f6' }, // Emerald/Blue
                { a: '#f97316', b: '#ef4444' }, // Orange/Red
            ];
            
            // Note: Simple hex setting for this demo, proper lerp is visual-only
            material.uniforms.uColorA.value.set(colors[idx].a);
            material.uniforms.uColorB.value.set(colors[idx].b);
        };

        // --- ANIMATION ---
        const clock = new THREE.Clock();

        function animate() {
            requestAnimationFrame(animate);
            
            const time = clock.getElapsedTime();
            const delta = clock.getDelta();

            // Smooth mode transition
            if (Math.abs(STATE.mode - STATE.targetMode) > 0.01) {
                STATE.mode += (STATE.targetMode - STATE.mode) * 0.05;
            } else {
                STATE.mode = STATE.targetMode;
            }

            // Smooth mouse
            STATE.mouse.lerp(STATE.targetMouse, 0.1);

            // Update Uniforms
            material.uniforms.uTime.value = time;
            material.uniforms.uMode.value = STATE.mode;
            material.uniforms.uMouse.value = STATE.mouse;

            // Subtle camera movement
            camera.position.x = Math.sin(time * 0.1) * 2;
            camera.position.y = Math.cos(time * 0.15) * 2;
            camera.lookAt(0,0,0);

            composer.render();
        }

        animate();

        // Remove Loader
        window.onload = () => {
            setTimeout(() => {
                document.getElementById('loader').style.opacity = '0';
                setTimeout(() => document.getElementById('loader').remove(), 700);
            }, 1000);
        };

    
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
      

<div className="scanlines"></div>
<div className="fixed inset-0 pointer-events-none z-10 bg-[radial-gradient(circle_at_center,transparent_20%,#000000_140%)]"></div>

<div className="absolute inset-0 z-0" id="canvas-container"></div>

<nav className="fixed top-0 left-0 w-full z-40 px-6 py-5 flex justify-between items-center pointer-events-none">
<div className="pointer-events-auto flex items-center gap-3 group cursor-pointer">
<div className="w-8 h-8 flex items-center justify-center border border-white/10 bg-white/5 rounded backdrop-blur-sm group-hover:border-white/30 transition-colors">
<span className="font-mono font-bold text-xs tracking-tighter">CC</span>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium tracking-tight text-white/90">Carlos Caravantes</span>
<span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Systems Engineer</span>
</div>
</div>
<div className="pointer-events-auto flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 transition-all text-[11px] font-medium text-white/70 hover:text-white" href="#">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span>Available for Projects</span>
</a>
<button className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 bg-black/40 hover:bg-white/10 text-white/70 hover:text-white transition-all backdrop-blur-md">
<iconify-icon icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
</button>
</div>
</nav>

<main className="relative z-30 w-full h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20 pb-32 pointer-events-none">

<div className="max-w-4xl relative">
<div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent opacity-50 hidden md:block"></div>
<div className="flex items-center gap-3 mb-4 pointer-events-auto w-fit">
<span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">v2.0.4 Live</span>
<span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Data &amp; AI Architecture</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40 leading-[0.95] mb-6">
                Engineered <br/>
                for <span className="font-mono italic font-light text-white/80">Scale</span>.
            </h1>
<p className="text-base md:text-lg text-white/60 font-light max-w-xl leading-relaxed tracking-tight mb-8">
                Seamlessly integrating <span className="text-white font-medium">Data</span>, <span className="text-white font-medium">AI</span>, and <span className="text-white font-medium">Infrastructure</span> into a cohesive operational fabric. Designing scalable platforms and autonomous systems.
            </p>

<div className="flex flex-wrap gap-x-8 gap-y-4 pointer-events-auto">
<div className="group flex items-center gap-3 cursor-pointer" onclick="window.setMode(0)">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all">
<iconify-icon className="text-white/60 group-hover:text-cyan-400 transition-colors" icon="solar:server-square-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-mono text-white/40 uppercase">Ingestion</span>
<span className="text-sm font-medium text-white/80 group-hover:text-white">Processing</span>
</div>
</div>
<div className="group flex items-center gap-3 cursor-pointer" onclick="window.setMode(1)">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all">
<iconify-icon className="text-white/60 group-hover:text-purple-400 transition-colors" icon="solar:brain-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-mono text-white/40 uppercase">Intelligence</span>
<span className="text-sm font-medium text-white/80 group-hover:text-white">AI Models</span>
</div>
</div>
<div className="group flex items-center gap-3 cursor-pointer" onclick="window.setMode(3)">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all">
<iconify-icon className="text-white/60 group-hover:text-emerald-400 transition-colors" icon="solar:tuning-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-mono text-white/40 uppercase">Efficiency</span>
<span className="text-sm font-medium text-white/80 group-hover:text-white">Automation</span>
</div>
</div>
</div>
</div>
</main>

<footer className="fixed bottom-0 left-0 w-full z-40 p-4 md:p-6 pointer-events-none">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-4 pointer-events-auto">

<div className="glass-panel p-5 rounded-xl tech-border group hover:bg-white/10 transition-colors duration-500">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded bg-purple-500/10 border border-purple-500/20">
<iconify-icon className="text-purple-400" icon="solar:stars-minimalistic-linear" width="18"></iconify-icon>
</div>
<span className="text-[10px] font-mono text-white/30">01</span>
</div>
<h3 className="text-sm font-medium text-white mb-3">AI &amp; Machine Learning</h3>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] px-2 py-1 rounded border border-white/10 bg-white/5 text-white/60">LLM Integration</span>
<span className="text-[10px] px-2 py-1 rounded border border-white/10 bg-white/5 text-white/60">RAG</span>
<span className="text-[10px] px-2 py-1 rounded border border-white/10 bg-white/5 text-white/60">AI Agents</span>
<span className="text-[10px] px-2 py-1 rounded border border-white/10 bg-white/5 text-white/60">LangChain</span>
</div>
</div>

<div className="glass-panel p-5 rounded-xl tech-border group hover:bg-white/10 transition-colors duration-500 hidden md:block">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded bg-cyan-500/10 border border-cyan-500/20">
<iconify-icon className="text-cyan-400" icon="solar:database-linear" width="18"></iconify-icon>
</div>
<span className="text-[10px] font-mono text-white/30">02</span>
</div>
<h3 className="text-sm font-medium text-white mb-3">Advanced Data Eng</h3>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] px-2 py-1 rounded border border-white/10 bg-white/5 text-white/60">ETL / ELT</span>
<span className="text-[10px] px-2 py-1 rounded border border-white/10 bg-white/5 text-white/60">Data Mesh</span>
<span className="text-[10px] px-2 py-1 rounded border border-white/10 bg-white/5 text-white/60">Databricks</span>
<span className="text-[10px] px-2 py-1 rounded border border-white/10 bg-white/5 text-white/60">PostgreSQL</span>
</div>
</div>

<div className="glass-panel p-5 rounded-xl tech-border group hover:bg-white/10 transition-colors duration-500 hidden lg:block">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20">
<iconify-icon className="text-emerald-400" icon="solar:settings-minimalistic-linear" width="18"></iconify-icon>
</div>
<span className="text-[10px] font-mono text-white/30">03</span>
</div>
<h3 className="text-sm font-medium text-white mb-3">Operational Systems</h3>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] px-2 py-1 rounded border border-white/10 bg-white/5 text-white/60">n8n Automation</span>
<span className="text-[10px] px-2 py-1 rounded border border-white/10 bg-white/5 text-white/60">Docker</span>
<span className="text-[10px] px-2 py-1 rounded border border-white/10 bg-white/5 text-white/60">CI/CD</span>
<span className="text-[10px] px-2 py-1 rounded border border-white/10 bg-white/5 text-white/60">Event-Driven</span>
</div>
</div>

<div className="glass-panel p-5 rounded-xl tech-border group hover:bg-white/10 transition-colors duration-500 hidden lg:block">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded bg-orange-500/10 border border-orange-500/20">
<iconify-icon className="text-orange-400" icon="solar:code-square-linear" width="18"></iconify-icon>
</div>
<span className="text-[10px] font-mono text-white/30">04</span>
</div>
<h3 className="text-sm font-medium text-white mb-3">Software Stack</h3>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] px-2 py-1 rounded border border-white/10 bg-white/5 text-white/60">Go</span>
<span className="text-[10px] px-2 py-1 rounded border border-white/10 bg-white/5 text-white/60">Laravel</span>
<span className="text-[10px] px-2 py-1 rounded border border-white/10 bg-white/5 text-white/60">React / Next.js</span>
<span className="text-[10px] px-2 py-1 rounded border border-white/10 bg-white/5 text-white/60">Microservices</span>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 bg-[#020204] flex flex-col items-center justify-center transition-opacity duration-700 pointer-events-none" id="loader">
<div className="font-mono text-xs tracking-widest text-white/40 mb-2">INITIALIZING SYSTEMS</div>
<div className="w-32 h-0.5 bg-white/10 rounded-full overflow-hidden">
<div className="loader-line bg-cyan-400"></div>
</div>
</div>



    </>
  );
}
