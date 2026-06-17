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
sci: {
base: '#030305',
panel: '#0a0a0c',
border: '#ffffff1a',
accent: '#ffffff',
dim: '#888888',
}
},
screens: {
'xs': '380px',
},
letterSpacing: {
tight: '-0.025em',
tighter: '-0.05em',
},
animation: {
'fade-in-up': 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'fade-in-up-delay': 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards',
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
        import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
        
        // --- CONFIGURATION ---
        const isMobile = window.innerWidth < 768;
        const CONFIG = {
            particleCount: isMobile ? 65000 : 120000,
            cameraZ: isMobile ? 40 : 28,
            bgColor: 0x030305
        };

        // --- STATE ---
        const STATE = {
            mouse: new THREE.Vector2(0, 0),
            hands: {
                active: false,
                left: { pos: new THREE.Vector3(-100, 0, 0), state: 0 },
                right: { pos: new THREE.Vector3(100, 0, 0), state: 0 }, // Mouse affects right hand simulated pos
            },
            mode: 0,
            time: 0,
            colorPalette: 0
        };

        // --- SCENE SETUP ---
        const container = document.getElementById('canvas-container');
        const renderer = new THREE.WebGLRenderer({ 
            antialias: false, 
            powerPreference: "high-performance",
            alpha: false,
            stencil: false,
            depth: true
        });
        
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.toneMapping = THREE.CineonToneMapping;
        renderer.toneMappingExposure = 1.2;
        container.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(CONFIG.bgColor, 0.015);
        scene.background = new THREE.Color(CONFIG.bgColor);

        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
        camera.position.z = CONFIG.cameraZ;

        // --- POST PROCESSING ---
        const renderScene = new RenderPass(scene, camera);

        const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
        bloomPass.threshold = 0.1;
        bloomPass.strength = 1.0; 
        bloomPass.radius = 0.8;

        const outputShader = {
            uniforms: {
                "tDiffuse": { value: null },
                "uTime": { value: 0 },
                "uRGBShift": { value: 0.002 }
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
                uniform float uTime;
                uniform float uRGBShift;
                varying vec2 vUv;
                
                float random(vec2 p) { return fract(sin(dot(p.xy, vec2(12.9898, 78.233))) * 43758.5453); }

                void main() {
                    vec2 uv = vUv;
                    float dist = distance(uv, vec2(0.5));
                    vec2 offset = (uv - 0.5) * dist * uRGBShift;
                    float r = texture2D(tDiffuse, uv + offset).r;
                    float g = texture2D(tDiffuse, uv).g;
                    float b = texture2D(tDiffuse, uv - offset).b;
                    vec3 color = vec3(r, g, b);
                    float noise = (random(uv + uTime) - 0.5) * 0.04;
                    color += noise;
                    gl_FragColor = vec4(color, 1.0);
                }
            `
        };

        const finalPass = new ShaderPass(outputShader);
        const composer = new EffectComposer(renderer);
        composer.addPass(renderScene);
        composer.addPass(bloomPass);
        composer.addPass(finalPass);

        // --- PARTICLE SYSTEM ---
        const particleVertexShader = `
            uniform float uTime;
            uniform vec3 uHandLeft;
            uniform vec3 uHandRight;
            
            attribute vec3 aRandom;
            attribute float aIndex;

            varying vec3 vColor;
            varying float vAlpha;
            varying float vDist;

            // Simplex Noise (Trimmed for brevity, standard implementation)
            vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
            vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
            float snoise(vec3 v) {
                const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
                const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
                vec3 i  = floor(v + dot(v, C.yyy) );
                vec3 x0 = v - i + dot(i, C.xxx) ;
                vec3 g = step(x0.yzx, x0.xyz);
                vec3 l = 1.0 - g;
                vec3 i1 = min( g.xyz, l.zxy );
                vec3 i2 = max( g.xyz, l.zxy );
                vec3 x1 = x0 - i1 + C.xxx;
                vec3 x2 = x0 - i2 + C.yyy;
                vec3 x3 = x0 - D.yyy;
                i = mod289(i);
                vec4 p = permute( permute( permute(
                            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                        + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                        + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
                float n_ = 0.142857142857;
                vec3  ns = n_ * D.wyz - D.xzx;
                vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
                vec4 x_ = floor(j * ns.z);
                vec4 y_ = floor(j - 7.0 * x_ );
                vec4 x = x_ *ns.x + ns.yyyy;
                vec4 y = y_ *ns.x + ns.yyyy;
                vec4 h = 1.0 - abs(x) - abs(y);
                vec4 b0 = vec4( x.xy, y.xy );
                vec4 b1 = vec4( x.zw, y.zw );
                vec4 s0 = floor(b0)*2.0 + 1.0;
                vec4 s1 = floor(b1)*2.0 + 1.0;
                vec4 sh = -step(h, vec4(0.0));
                vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
                vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
                vec3 p0 = vec3(a0.xy,h.x);
                vec3 p1 = vec3(a0.zw,h.y);
                vec3 p2 = vec3(a1.xy,h.z);
                vec3 p3 = vec3(a1.zw,h.w);
                vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
                p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
                vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
                m = m * m;
                return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
            }

            // Sphere/Nebula Shape
            vec3 getPosSphere(float idx) {
                float phi = acos( -1.0 + ( 2.0 * idx ) / ${CONFIG.particleCount}.0 );
                float theta = sqrt( ${CONFIG.particleCount}.0 * 3.1415926 ) * phi;
                float r = 12.0 + aRandom.x * 2.0;
                return vec3(r * sin(phi) * cos(theta), r * sin(phi) * sin(theta), r * cos(phi));
            }

            void main() {
                float t = uTime * 0.15; 
                vec3 pos = getPosSphere(aIndex);

                // Add noise
                vec3 noiseBase = vec3(
                    snoise(vec3(aIndex*0.01, t*0.2, 0.0)),
                    snoise(vec3(aIndex*0.01, 0.0, t*0.2)),
                    snoise(vec3(0.0, aIndex*0.01, t*0.2))
                );
                pos += noiseBase * 4.0;

                // Simple Mouse Interaction (Push/Displace)
                if (uHandRight.x < 90.0) {
                    float d = distance(pos, uHandRight);
                    float influence = smoothstep(12.0, 0.0, d);
                    pos += normalize(pos - uHandRight) * influence * 8.0;
                }

                vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
                gl_PointSize = (1.5 + aRandom.y * 2.0) * (30.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
                
                vDist = length(pos);
                float depthFade = smoothstep(60.0, 10.0, -mvPosition.z);
                vAlpha = depthFade * (0.2 + aRandom.z * 0.6);
                vColor = pos; 
            }
        `;

        const particleFragmentShader = `
            uniform vec3 uColor1;
            uniform vec3 uColor2;
            varying vec3 vColor;
            varying float vAlpha;
            varying float vDist;

            void main() {
                vec2 center = gl_PointCoord - 0.5;
                float dist = length(center);
                if (dist > 0.5) discard;
                float glow = 1.0 - smoothstep(0.0, 0.5, dist);
                glow = pow(glow, 1.5); 
                // Color gradient
                vec3 col = mix(uColor1, uColor2, smoothstep(-20.0, 20.0, vColor.x + vColor.y));
                gl_FragColor = vec4(col, vAlpha * glow);
            }
        `;

        // Geometry Setup
        const geometry = new THREE.BufferGeometry();
        const indices = new Float32Array(CONFIG.particleCount);
        const randoms = new Float32Array(CONFIG.particleCount * 3);

        for (let i = 0; i < CONFIG.particleCount; i++) {
            indices[i] = i;
            randoms[i * 3] = Math.random();
            randoms[i * 3 + 1] = Math.random();
            randoms[i * 3 + 2] = Math.random();
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(CONFIG.particleCount * 3).fill(0), 3));
        geometry.setAttribute('aIndex', new THREE.BufferAttribute(indices, 1));
        geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 3));

        const material = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uHandLeft: { value: new THREE.Vector3(-100, 0, 0) },
                uHandRight: { value: new THREE.Vector3(100, 0, 0) },
                uColor1: { value: new THREE.Color('#818cf8') },
                uColor2: { value: new THREE.Color('#2dd4bf') }
            },
            vertexShader: particleVertexShader,
            fragmentShader: particleFragmentShader,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        // --- EVENTS ---
        // Mouse Fallback
        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = -(e.clientY / window.innerHeight) * 2 + 1;
            STATE.hands.right.pos.set(x * 30, y * 20, 0);
        });

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            composer.setSize(window.innerWidth, window.innerHeight);
            CONFIG.cameraZ = window.innerWidth < 768 ? 40 : 28;
        });

        // --- ANIMATION LOOP ---
        const clock = new THREE.Clock();
        
        setTimeout(() => document.getElementById('loader').style.opacity = '0', 800);
        setTimeout(() => document.getElementById('loader').remove(), 1800);

        function animate() {
            requestAnimationFrame(animate);
            const delta = clock.getDelta();
            STATE.time += delta;

            material.uniforms.uTime.value = STATE.time;
            finalPass.uniforms.uTime.value = STATE.time;

            // Smooth Movement for interaction
            const lerpFactor = 0.1;
            material.uniforms.uHandRight.value.lerp(STATE.hands.right.pos, lerpFactor);

            // Camera Sway
            const zTarget = CONFIG.cameraZ + Math.sin(STATE.time * 0.5) * 2;
            camera.position.z += (zTarget - camera.position.z) * 0.02;
            camera.position.x = Math.sin(STATE.time * 0.2) * 2;
            camera.position.y = Math.cos(STATE.time * 0.15) * 2;
            camera.lookAt(0,0,0);

            composer.render();
        }

        animate();
    
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
<div className="vignette"></div>

<div className="absolute inset-0 z-0" id="canvas-container"></div>

<main className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none select-none px-4">

<div className="pointer-events-auto opacity-0 animate-fade-in-up mb-6">
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default">
<iconify-icon className="text-emerald-400" icon="solar:stars-minimalistic-linear" width="14"></iconify-icon>
<span className="text-xs font-medium tracking-wide text-white/80">Spatial Intelligence v2.0</span>
</div>
</div>

<div className="flex flex-col items-center text-center opacity-0 animate-fade-in-up-delay gap-2">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter hero-gradient leading-[0.9]">
                Interactive<br/>Particles.
            </h1>
<p className="max-w-md text-center text-sm md:text-base text-sci-dim font-light tracking-wide mt-4 leading-relaxed">
                Experience the next generation of web-based fluid dynamics. Move your mouse to interact with the nebula.
            </p>
</div>

<div className="flex flex-col sm:flex-row items-center gap-3 mt-8 pointer-events-auto opacity-0 animate-[fadeInUp_1s_cubic-bezier(0.16,1,0.3,1)_0.4s_forwards]">
<button className="group flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
<span className="text-sm font-medium tracking-tight">Start Simulation</span>
<iconify-icon className="transition-transform group-hover:translate-x-0.5" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="group flex items-center gap-2 px-6 py-3 bg-white/5 text-white border border-white/10 rounded-full hover:bg-white/10 transition-all active:scale-95 backdrop-blur-md">
<iconify-icon className="text-white/70" icon="solar:document-text-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-medium tracking-tight">Read Docs</span>
</button>
</div>
</main>

<div className="fixed inset-0 z-50 bg-[#030305] flex flex-col items-center justify-center transition-opacity duration-1000 pointer-events-none" id="loader">
<div className="relative w-12 h-12 mb-6">
<div className="loader-ring"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white]"></div>
</div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="text-[10px] font-mono tracking-[0.3em] text-white/50 uppercase">Loading Assets</div>
<div className="w-24 h-px bg-white/10 relative overflow-hidden">
<div className="absolute inset-y-0 left-0 w-1/2 bg-white/40 animate-[slide_1s_infinite_linear]"></div>
</div>
</div>
</div>


    </>
  );
}
