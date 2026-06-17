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



        // --- Logic: Light Pillar WebGL Implementation ---
        
        const container = document.getElementById('canvas-container');
        
        // Configuration matching design request
        const config = {
            topColor: '#10b981', // Emerald 500
            bottomColor: '#115e59', // Teal 800
            intensity: 1.5,
            rotationSpeed: 0.2,
            interactive: true,
            pillarWidth: 3.5,
            pillarHeight: 0.6,
            glowAmount: 0.1
        };

        let scene, camera, renderer, material, mesh;
        let animationId;
        const mouse = new THREE.Vector2(0, 0);
        let time = 0;

        function init() {
            if (!container) return;

            const width = container.clientWidth;
            const height = container.clientHeight;

            scene = new THREE.Scene();
            camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
            
            renderer = new THREE.WebGLRenderer({ 
                antialias: false, 
                alpha: true, 
                powerPreference: 'high-performance',
                stencil: false,
                depth: false
            });
            
            renderer.setSize(width, height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            container.appendChild(renderer.domElement);

            // Shader Code
            const vertexShader = `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4(position, 1.0);
                }
            `;

            const fragmentShader = `
                uniform float uTime;
                uniform vec2 uResolution;
                uniform vec2 uMouse;
                uniform vec3 uTopColor;
                uniform vec3 uBottomColor;
                uniform float uIntensity;
                uniform bool uInteractive;
                uniform float uGlowAmount;
                uniform float uPillarWidth;
                uniform float uPillarHeight;
                
                varying vec2 vUv;
                const float PI = 3.14159265359;
                const float E = 2.71828;

                mat2 rot(float angle) {
                    float s = sin(angle);
                    float c = cos(angle);
                    return mat2(c, -s, s, c);
                }

                // Smooth blending
                float blendMax(float a, float b, float k) {
                    float scaledK = k * 4.0;
                    float h = max(scaledK - abs(a - b), 0.0);
                    return max(a, b) + h * h * 0.25 / scaledK;
                }

                void main() {
                    vec2 fragCoord = vUv * uResolution;
                    vec2 uv = (fragCoord * 2.0 - uResolution) / uResolution.y;
                    
                    // Base geometry
                    vec3 origin = vec3(0.0, 0.0, -10.0);
                    vec3 direction = normalize(vec3(uv, 1.0));
                    
                    // Interaction
                    mat2 rotX = rot(uTime * 0.1);
                    if(uInteractive) {
                        rotX = rot(uMouse.x * 0.5); 
                    }

                    vec3 color = vec3(0.0);
                    float depth = 0.1;

                    for(float i = 0.0; i < 64.0; i++) {
                        vec3 pos = origin + direction * depth;
                        pos.xz *= rotX;

                        vec3 deformed = pos;
                        deformed.y *= uPillarHeight;
                        
                        // Wave deformation
                        float wave = cos(deformed.y * 2.0 + uTime) * 0.2;
                        deformed.x += wave;

                        // Field calculation
                        float d = length(cos(deformed.xz)) - 0.2;
                        
                        // Pillar boundary
                        float bound = length(pos.xz) - uPillarWidth;
                        d = max(d, -bound); 
                        
                        // Glow accumulation
                        float glow = 0.02 / (abs(d) + 0.01);
                        
                        // Gradient
                        float yGradient = smoothstep(2.0, -2.0, pos.y);
                        vec3 col = mix(uBottomColor, uTopColor, yGradient);
                        
                        color += col * glow * uGlowAmount;
                        
                        depth += max(abs(d) * 0.5, 0.02);
                        if(depth > 20.0) break;
                    }
                    
                    // Vignette & Tone
                    float vig = 1.0 - length(uv) * 0.3;
                    color *= vig;
                    
                    gl_FragColor = vec4(color * uIntensity, 1.0);
                }
            `;

            material = new THREE.ShaderMaterial({
                vertexShader,
                fragmentShader,
                uniforms: {
                    uTime: { value: 0 },
                    uResolution: { value: new THREE.Vector2(width, height) },
                    uMouse: { value: new THREE.Vector2(0, 0) },
                    uTopColor: { value: new THREE.Color(config.topColor) },
                    uBottomColor: { value: new THREE.Color(config.bottomColor) },
                    uIntensity: { value: config.intensity },
                    uInteractive: { value: config.interactive },
                    uGlowAmount: { value: config.glowAmount },
                    uPillarWidth: { value: config.pillarWidth },
                    uPillarHeight: { value: config.pillarHeight }
                },
                transparent: true,
                depthWrite: false,
                depthTest: false
            });

            mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
            scene.add(mesh);

            // Event Listeners
            window.addEventListener('resize', onWindowResize);
            if (config.interactive) {
                window.addEventListener('mousemove', onMouseMove);
            }

            animate();
        }

        function onWindowResize() {
            if (!container || !renderer || !material) return;
            const width = container.clientWidth;
            const height = container.clientHeight;
            renderer.setSize(width, height);
            material.uniforms.uResolution.value.set(width, height);
        }

        function onMouseMove(event) {
            const x = (event.clientX / window.innerWidth) * 2 - 1;
            const y = -(event.clientY / window.innerHeight) * 2 + 1;
            // Smooth mouse interpolation could go here, direct for now
            material.uniforms.uMouse.value.set(x, y);
        }

        function animate() {
            animationId = requestAnimationFrame(animate);
            time += 0.01 * config.rotationSpeed * 5; // Base speed
            
            if (material) {
                material.uniforms.uTime.value = time;
                renderer.render(scene, camera);
            }
        }

        // --- Interaction Logic for UI Elements ---
        
        // Connect Range Slider to Intensity
        const slider = document.getElementById('pillar-speed-control');
        const loadVal = document.getElementById('load-val');
        
        if(slider && loadVal) {
            slider.addEventListener('input', (e) => {
                const val = e.target.value;
                loadVal.textContent = val + '%';
                
                // Functional effect: Change rotation speed and intensity based on slider
                const normalized = val / 100;
                config.rotationSpeed = 0.1 + (normalized * 1.0);
                if(material) {
                    material.uniforms.uIntensity.value = 1.0 + (normalized * 1.0); // Boost intensity
                    material.uniforms.uGlowAmount.value = 0.05 + (normalized * 0.1);
                }
            });
        }

        // Initialize
        init();

    
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
      

<div id="canvas-container"></div>

<main className="relative z-10 min-h-screen flex items-center justify-center p-4 md:p-8">
<div className="max-w-5xl w-full">

<div className="mb-12 text-center animate-sequence">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
                    System Architecture
                </h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    Advanced secure encryption with real-time analytics.
                </p>
</div>

<div className="grid-layout gap-6 w-full">

<div className="glass-panel group relative overflow-hidden rounded-2xl border border-teal-800 bg-slate-900/40 backdrop-blur-xl p-8 transition-colors hover:border-emerald-500/50 animate-sequence delay-0">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/20">
<span className="iconify" data-height="24" data-icon="lucide:cpu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="mb-3 text-2xl font-semibold tracking-tight text-white">Processing</h3>
<p className="mb-6 text-sm md:text-base text-slate-400 leading-relaxed">
                        High-throughput data pipelines utilizing distributed computation for micro-latency responses across all edge nodes.
                    </p>

<div className="mt-auto pt-4 border-t border-teal-900/50">
<label className="flex justify-between text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">
<span>Load Balance</span>
<span id="load-val">45%</span>
</label>
<input className="w-full" id="pillar-speed-control" max="100" min="0" type="range" value="45"/>
</div>
</div>

<div className="glass-panel group relative overflow-hidden rounded-2xl border border-teal-800 bg-slate-900/40 backdrop-blur-xl p-8 transition-colors hover:border-emerald-500/50 animate-sequence delay-100">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/20">
<span className="iconify" data-height="24" data-icon="lucide:shield-check" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="mb-3 text-2xl font-semibold tracking-tight text-white">Encryption</h3>
<p className="mb-6 text-sm md:text-base text-slate-400 leading-relaxed">
                        End-to-end zero knowledge encryption protocols ensuring your data remains opaque to unauthorized access vectors.
                    </p>

<div className="mt-auto pt-4 border-t border-teal-900/50 flex items-center justify-between">
<span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Active Shield</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-slate-700 checked:border-emerald-500 transition-all duration-300 left-0" id="toggle-shield" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-slate-700 cursor-pointer" htmlFor="toggle-shield"></label>
</div>
</div>
</div>

<div className="glass-panel group relative overflow-hidden rounded-2xl border border-teal-800 bg-slate-900/40 backdrop-blur-xl p-8 transition-colors hover:border-emerald-500/50 animate-sequence delay-200">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/20">
<span className="iconify" data-height="24" data-icon="lucide:globe" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="mb-3 text-2xl font-semibold tracking-tight text-white">Global Grid</h3>
<p className="mb-6 text-sm md:text-base text-slate-400 leading-relaxed">
                        Redundant availability zones mapped across major continents to ensure 99.99% uptime and local compliance.
                    </p>

<div className="mt-auto pt-4 border-t border-teal-900/50 grid grid-cols-3 gap-2">
<div className="text-center">
<div className="h-1 w-full bg-emerald-500 rounded-full mb-1 opacity-100"></div>
<span className="text-[10px] text-slate-500 font-semibold">US-EAST</span>
</div>
<div className="text-center">
<div className="h-1 w-full bg-emerald-500 rounded-full mb-1 opacity-60"></div>
<span className="text-[10px] text-slate-500 font-semibold">EU-WEST</span>
</div>
<div className="text-center">
<div className="h-1 w-full bg-emerald-500 rounded-full mb-1 opacity-80"></div>
<span className="text-[10px] text-slate-500 font-semibold">AP-NORTH</span>
</div>
</div>
</div>

<div className="glass-panel group relative overflow-hidden rounded-2xl border border-teal-800 bg-slate-900/40 backdrop-blur-xl p-8 transition-colors hover:border-emerald-500/50 animate-sequence delay-300">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/20">
<span className="iconify" data-height="24" data-icon="lucide:bar-chart-2" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="mb-3 text-2xl font-semibold tracking-tight text-white">Insights</h3>
<p className="mb-6 text-sm md:text-base text-slate-400 leading-relaxed">
                        Real-time visualization of traffic patterns and usage metrics with granular breakdown capabilities.
                    </p>

<div className="mt-auto pt-4 border-t border-teal-900/50 space-y-2">
<div className="flex items-center gap-2 cursor-pointer group/item">
<div className="h-4 w-4 rounded border border-teal-700 bg-slate-800 flex items-center justify-center group-hover/item:border-emerald-500 transition-colors">
<span className="iconify text-emerald-500 text-xs" data-icon="lucide:check"></span>
</div>
<span className="text-xs text-slate-400 font-medium">Export CSV</span>
</div>
<div className="flex items-center gap-2 cursor-pointer group/item">
<div className="h-4 w-4 rounded border border-teal-700 bg-slate-800 flex items-center justify-center group-hover/item:border-emerald-500 transition-colors">
<span className="iconify text-emerald-500 text-xs" data-icon="lucide:check"></span>
</div>
<span className="text-xs text-slate-400 font-medium">API Access</span>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
